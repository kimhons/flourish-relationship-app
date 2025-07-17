"""
Prompt Security Middleware
Protects against prompt injection attacks and validates AI interactions
"""

import re
import json
import logging
import time
from functools import wraps
from typing import Dict, List, Tuple, Any, Callable
from flask import request, jsonify, g
from datetime import datetime, timedelta
import hashlib

logger = logging.getLogger(__name__)

class PromptSecurityMiddleware:
    """Middleware to protect against prompt injection and ensure secure AI interactions"""
    
    def __init__(self, config: Dict[str, Any] = None):
        self.config = config or {}
        self.rate_limiter = RateLimiter()
        self.injection_detector = InjectionDetector()
        self.audit_logger = SecurityAuditLogger()
        self.blocked_ips = set()
        self.suspicious_activity = {}
        
    def validate_prompt_request(self, f: Callable) -> Callable:
        """Decorator to validate prompt requests before processing"""
        @wraps(f)
        def decorated_function(*args, **kwargs):
            # Check if IP is blocked
            client_ip = self._get_client_ip()
            if client_ip in self.blocked_ips:
                self.audit_logger.log_blocked_request(client_ip, "IP blocked")
                return jsonify({"error": "Access denied"}), 403
            
            # Rate limiting
            if not self.rate_limiter.check_rate_limit(client_ip):
                self.audit_logger.log_rate_limit_exceeded(client_ip)
                return jsonify({"error": "Rate limit exceeded"}), 429
            
            # Get request data
            data = request.get_json() if request.is_json else {}
            
            # Validate prompt content
            prompt_content = data.get('message', '') or data.get('content', '') or data.get('prompt', '')
            if prompt_content:
                is_safe, violations = self.injection_detector.validate_prompt(prompt_content)
                
                if not is_safe:
                    # Track suspicious activity
                    self._track_suspicious_activity(client_ip, violations)
                    
                    # Log security event
                    self.audit_logger.log_injection_attempt(
                        client_ip,
                        prompt_content,
                        violations
                    )
                    
                    # Check if should block IP
                    if self._should_block_ip(client_ip):
                        self.blocked_ips.add(client_ip)
                        self.audit_logger.log_ip_blocked(client_ip)
                    
                    # Return sanitized response
                    return jsonify({
                        "error": "Invalid request content",
                        "message": "Your message contains content that cannot be processed. Please rephrase your question about relationships."
                    }), 400
            
            # Add security context to request
            g.security_context = {
                "client_ip": client_ip,
                "timestamp": datetime.now(),
                "validated": True
            }
            
            return f(*args, **kwargs)
        
        return decorated_function
    
    def validate_ai_response(self, f: Callable) -> Callable:
        """Decorator to validate AI responses before sending to client"""
        @wraps(f)
        def decorated_function(*args, **kwargs):
            response = f(*args, **kwargs)
            
            # If response is a tuple (data, status_code)
            if isinstance(response, tuple):
                data, status_code = response
            else:
                data = response
                status_code = 200
            
            # Extract response content
            if hasattr(data, 'get_json'):
                response_data = data.get_json()
            elif isinstance(data, dict):
                response_data = data
            else:
                return response
            
            # Validate AI response content
            ai_response = response_data.get('response', '') or response_data.get('content', '')
            if ai_response:
                is_safe, violations = self.injection_detector.validate_ai_output(ai_response)
                
                if not is_safe:
                    # Log the issue
                    self.audit_logger.log_unsafe_ai_response(
                        g.get('security_context', {}).get('client_ip', 'unknown'),
                        ai_response,
                        violations
                    )
                    
                    # Sanitize the response
                    response_data['response'] = self._get_safe_fallback_response()
                    response_data['security_filtered'] = True
            
            return jsonify(response_data), status_code
        
        return decorated_function
    
    def _get_client_ip(self) -> str:
        """Get client IP address from request"""
        if request.headers.get('X-Forwarded-For'):
            return request.headers.get('X-Forwarded-For').split(',')[0].strip()
        return request.remote_addr or 'unknown'
    
    def _track_suspicious_activity(self, client_ip: str, violations: List[str]):
        """Track suspicious activity by IP"""
        if client_ip not in self.suspicious_activity:
            self.suspicious_activity[client_ip] = {
                "count": 0,
                "first_seen": datetime.now(),
                "violations": []
            }
        
        self.suspicious_activity[client_ip]["count"] += 1
        self.suspicious_activity[client_ip]["violations"].extend(violations)
        self.suspicious_activity[client_ip]["last_seen"] = datetime.now()
    
    def _should_block_ip(self, client_ip: str) -> bool:
        """Determine if IP should be blocked based on suspicious activity"""
        if client_ip not in self.suspicious_activity:
            return False
        
        activity = self.suspicious_activity[client_ip]
        
        # Block if more than 5 attempts in 10 minutes
        if activity["count"] >= 5:
            time_window = datetime.now() - activity["first_seen"]
            if time_window <= timedelta(minutes=10):
                return True
        
        # Block if critical violations detected
        critical_patterns = ["exec", "eval", "os.system", "subprocess"]
        for violation in activity["violations"]:
            if any(pattern in violation.lower() for pattern in critical_patterns):
                return True
        
        return False
    
    def _get_safe_fallback_response(self) -> str:
        """Get a safe fallback response when filtering is needed"""
        return """I apologize, but I'm having trouble processing that request properly. 
        
As a relationship counselor, I'm here to help you with:
- Communication and conflict resolution
- Building trust and intimacy
- Dating and relationship advice
- Personal growth in relationships

What specific relationship topic would you like to discuss?"""


class InjectionDetector:
    """Detects potential prompt injection attempts"""
    
    def __init__(self):
        self.injection_patterns = [
            # Direct instruction manipulation
            r"ignore\s+previous\s+instructions?",
            r"disregard\s+all\s+prior",
            r"forget\s+everything",
            r"new\s+instructions?:",
            r"system\s+prompt:",
            r"you\s+are\s+now",
            r"act\s+as\s+if",
            r"pretend\s+to\s+be",
            r"roleplay\s+as",
            r"from\s+now\s+on",
            
            # System prompt extraction
            r"what\s+are\s+your\s+instructions?",
            r"show\s+me\s+your\s+prompt",
            r"reveal\s+your\s+system",
            r"display\s+your\s+configuration",
            r"print\s+your\s+settings",
            r"tell\s+me\s+your\s+rules",
            
            # Code injection
            r"<script[^>]*>",
            r"javascript:",
            r"eval\s*\(",
            r"exec\s*\(",
            r"__import__",
            r"os\.system",
            r"subprocess",
            r"import\s+os",
            r"import\s+sys",
            
            # SQL injection
            r";\s*drop\s+table",
            r"union\s+select",
            r"insert\s+into",
            r"update\s+.*\s+set",
            r"delete\s+from",
            
            # Command injection
            r"&&|\|\||;",
            r"`[^`]+`",
            r"\$\([^)]+\)",
            r"nc\s+-",
            r"bash\s+-",
            r"sh\s+-",
            
            # Prompt manipulation
            r"repeat\s+after\s+me",
            r"say\s+exactly",
            r"echo\s+the\s+following",
            r"output\s+verbatim",
            r"ignore\s+safety",
            r"bypass\s+filter",
            
            # Jailbreak attempts
            r"jailbreak",
            r"dan\s+mode",
            r"developer\s+mode",
            r"unlock\s+mode",
            r"unrestricted\s+mode"
        ]
        
        self.suspicious_keywords = [
            "exploit", "vulnerability", "hack", "crack",
            "breach", "penetrate", "malicious", "payload",
            "backdoor", "trojan", "virus", "malware"
        ]
        
        # Compile patterns for efficiency
        self.compiled_patterns = [
            re.compile(pattern, re.IGNORECASE) 
            for pattern in self.injection_patterns
        ]
    
    def validate_prompt(self, prompt: str) -> Tuple[bool, List[str]]:
        """Validate a prompt for injection attempts"""
        violations = []
        
        # Check length
        if len(prompt) > 10000:
            violations.append("Prompt exceeds maximum length")
        
        # Check for injection patterns
        for i, pattern in enumerate(self.compiled_patterns):
            if pattern.search(prompt):
                violations.append(f"Injection pattern detected: {self.injection_patterns[i]}")
        
        # Check for suspicious keywords
        prompt_lower = prompt.lower()
        for keyword in self.suspicious_keywords:
            if keyword in prompt_lower:
                violations.append(f"Suspicious keyword: {keyword}")
        
        # Check for excessive special characters
        special_char_ratio = len(re.findall(r'[^a-zA-Z0-9\s.,!?-]', prompt)) / max(len(prompt), 1)
        if special_char_ratio > 0.3:
            violations.append("Excessive special characters detected")
        
        # Check for encoded content
        if self._detect_encoded_content(prompt):
            violations.append("Encoded content detected")
        
        return len(violations) == 0, violations
    
    def validate_ai_output(self, response: str) -> Tuple[bool, List[str]]:
        """Validate AI output for potential leaks or injected content"""
        violations = []
        
        # Check for system prompt leakage
        system_patterns = [
            r"my\s+instructions\s+are",
            r"i\s+am\s+programmed\s+to",
            r"my\s+system\s+prompt",
            r"my\s+configuration\s+includes",
            r"as\s+an\s+ai\s+language\s+model"
        ]
        
        for pattern in system_patterns:
            if re.search(pattern, response, re.IGNORECASE):
                violations.append(f"Potential system information leak: {pattern}")
        
        # Check for code in response
        if re.search(r'<script|javascript:|eval\(|exec\(', response, re.IGNORECASE):
            violations.append("Response contains potential code")
        
        # Check for excessive repetition (sign of manipulation)
        if self._detect_excessive_repetition(response):
            violations.append("Excessive repetition detected")
        
        return len(violations) == 0, violations
    
    def _detect_encoded_content(self, text: str) -> bool:
        """Detect base64 or other encoded content"""
        # Simple base64 detection
        base64_pattern = r'^[A-Za-z0-9+/]{20,}={0,2}$'
        lines = text.split('\n')
        for line in lines:
            if re.match(base64_pattern, line.strip()):
                return True
        return False
    
    def _detect_excessive_repetition(self, text: str) -> bool:
        """Detect excessive repetition in text"""
        words = text.lower().split()
        if len(words) < 10:
            return False
        
        # Check for repeated phrases
        for i in range(len(words) - 3):
            phrase = ' '.join(words[i:i+3])
            count = text.lower().count(phrase)
            if count > 5:
                return True
        
        return False


class RateLimiter:
    """Rate limiting for API requests"""
    
    def __init__(self):
        self.requests = {}
        self.limits = {
            "requests_per_minute": 30,
            "requests_per_hour": 500,
            "requests_per_day": 5000
        }
    
    def check_rate_limit(self, client_ip: str) -> bool:
        """Check if client has exceeded rate limits"""
        now = datetime.now()
        
        if client_ip not in self.requests:
            self.requests[client_ip] = []
        
        # Clean old requests
        self.requests[client_ip] = [
            req_time for req_time in self.requests[client_ip]
            if now - req_time < timedelta(days=1)
        ]
        
        # Check limits
        minute_ago = now - timedelta(minutes=1)
        hour_ago = now - timedelta(hours=1)
        
        minute_count = sum(1 for t in self.requests[client_ip] if t > minute_ago)
        hour_count = sum(1 for t in self.requests[client_ip] if t > hour_ago)
        day_count = len(self.requests[client_ip])
        
        if (minute_count >= self.limits["requests_per_minute"] or
            hour_count >= self.limits["requests_per_hour"] or
            day_count >= self.limits["requests_per_day"]):
            return False
        
        # Add current request
        self.requests[client_ip].append(now)
        return True


class SecurityAuditLogger:
    """Logs security events for audit trail"""
    
    def __init__(self):
        self.log_file = "security_audit.log"
    
    def log_injection_attempt(self, client_ip: str, content: str, violations: List[str]):
        """Log injection attempt"""
        event = {
            "event_type": "injection_attempt",
            "client_ip": client_ip,
            "timestamp": datetime.now().isoformat(),
            "content_hash": hashlib.sha256(content.encode()).hexdigest()[:16],
            "violations": violations
        }
        logger.warning(f"Injection attempt from {client_ip}", extra={"security_event": event})
    
    def log_rate_limit_exceeded(self, client_ip: str):
        """Log rate limit exceeded"""
        event = {
            "event_type": "rate_limit_exceeded",
            "client_ip": client_ip,
            "timestamp": datetime.now().isoformat()
        }
        logger.warning(f"Rate limit exceeded for {client_ip}", extra={"security_event": event})
    
    def log_blocked_request(self, client_ip: str, reason: str):
        """Log blocked request"""
        event = {
            "event_type": "blocked_request",
            "client_ip": client_ip,
            "timestamp": datetime.now().isoformat(),
            "reason": reason
        }
        logger.warning(f"Blocked request from {client_ip}: {reason}", extra={"security_event": event})
    
    def log_ip_blocked(self, client_ip: str):
        """Log IP blocking"""
        event = {
            "event_type": "ip_blocked",
            "client_ip": client_ip,
            "timestamp": datetime.now().isoformat()
        }
        logger.warning(f"IP blocked: {client_ip}", extra={"security_event": event})
    
    def log_unsafe_ai_response(self, client_ip: str, response: str, violations: List[str]):
        """Log unsafe AI response"""
        event = {
            "event_type": "unsafe_ai_response",
            "client_ip": client_ip,
            "timestamp": datetime.now().isoformat(),
            "response_hash": hashlib.sha256(response.encode()).hexdigest()[:16],
            "violations": violations
        }
        logger.warning(f"Unsafe AI response detected for {client_ip}", extra={"security_event": event})


# Create singleton instance
prompt_security = PromptSecurityMiddleware()

# Export decorators for easy use
validate_prompt_request = prompt_security.validate_prompt_request
validate_ai_response = prompt_security.validate_ai_response