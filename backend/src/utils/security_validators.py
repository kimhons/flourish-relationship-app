"""
Advanced Security Validators for Relationship Agents
Comprehensive protection against prompt injection, manipulation, and inappropriate content
while maintaining therapeutic value and user experience
"""

import re
import logging
import hashlib
import time
from typing import Dict, List, Tuple, Optional, Any
from dataclasses import dataclass, field
from enum import Enum
from datetime import datetime, timedelta
import json

logger = logging.getLogger(__name__)

class ThreatLevel(Enum):
    """Threat levels for security validation"""
    NONE = "none"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class ValidationResult(Enum):
    """Validation results"""
    APPROVED = "approved"
    SANITIZED = "sanitized"
    BLOCKED = "blocked"
    FLAGGED = "flagged"

@dataclass
class SecurityThreat:
    """Represents a detected security threat"""
    threat_type: str
    threat_level: ThreatLevel
    description: str
    detected_patterns: List[str]
    confidence_score: float
    mitigation_applied: bool = False

@dataclass
class ValidationReport:
    """Comprehensive validation report"""
    original_input: str
    sanitized_input: str
    validation_result: ValidationResult
    threats_detected: List[SecurityThreat]
    overall_threat_level: ThreatLevel
    processing_time: float
    recommendations: List[str]
    user_friendly_message: Optional[str] = None

class AdvancedPromptInjectionDetector:
    """Advanced prompt injection detection with relationship-specific patterns"""
    
    def __init__(self):
        self.injection_patterns = self._initialize_injection_patterns()
        self.role_manipulation_patterns = self._initialize_role_patterns()
        self.instruction_override_patterns = self._initialize_override_patterns()
        self.therapeutic_bypass_patterns = self._initialize_therapeutic_bypass_patterns()
        self.compiled_patterns = self._compile_patterns()
        
    def _initialize_injection_patterns(self) -> Dict[str, List[str]]:
        """Initialize comprehensive prompt injection patterns"""
        return {
            "classic_injection": [
                r"ignore\s+(?:all\s+)?previous\s+instructions?",
                r"forget\s+(?:everything\s+)?(?:above|before)",
                r"disregard\s+(?:the\s+)?(?:above|previous)",
                r"new\s+instructions?\s*:",
                r"system\s+(?:prompt|message)\s*:",
                r"override\s+(?:previous\s+)?(?:instructions?|settings?)",
                r"reset\s+(?:your\s+)?(?:instructions?|programming)",
                r"start\s+(?:over|fresh|new)",
            ],
            
            "role_manipulation": [
                r"you\s+are\s+(?:no\s+longer|not)\s+a",
                r"pretend\s+(?:to\s+be|you\s+are)",
                r"act\s+as\s+(?:if\s+you\s+are|a)",
                r"roleplay\s+as",
                r"simulate\s+(?:being\s+)?a",
                r"become\s+a",
                r"transform\s+into",
                r"your\s+new\s+role\s+is",
                r"from\s+now\s+on\s+you\s+are",
            ],
            
            "jailbreak_attempts": [
                r"jailbreak",
                r"DAN\s+mode",
                r"developer\s+mode",
                r"admin\s+(?:mode|access|privileges)",
                r"root\s+access",
                r"bypass\s+(?:safety|filter|restrictions?)",
                r"unrestricted\s+mode",
                r"god\s+mode",
                r"debug\s+mode",
            ],
            
            "therapeutic_bypass": [
                r"don't\s+be\s+a\s+therapist",
                r"stop\s+being\s+professional",
                r"ignore\s+therapeutic\s+boundaries",
                r"give\s+me\s+personal\s+advice",
                r"tell\s+me\s+what\s+to\s+do",
                r"make\s+decisions?\s+for\s+me",
                r"diagnose\s+me",
                r"prescribe\s+medication",
            ]
        }
    
    def _initialize_role_patterns(self) -> List[str]:
        """Initialize role manipulation patterns"""
        return [
            r"you\s+are\s+(?:now\s+)?(?:a\s+)?(?!(?:a\s+)?(?:relationship|marriage|communication|conflict|financial|life\s+skills|emotional|attachment|boundary|family)\s+(?:counselor|therapist|coach|specialist|expert|advisor|mentor))[a-zA-Z\s]+",
            r"your\s+identity\s+is",
            r"you\s+must\s+(?:now\s+)?(?:be|act\s+as)",
            r"switch\s+to\s+(?:being\s+)?a",
            r"change\s+your\s+persona",
            r"adopt\s+the\s+role\s+of",
        ]
    
    def _initialize_override_patterns(self) -> List[str]:
        """Initialize instruction override patterns"""
        return [
            r"new\s+(?:system\s+)?(?:instructions?|rules?|guidelines?)",
            r"updated\s+(?:instructions?|rules?|guidelines?)",
            r"revised\s+(?:instructions?|rules?|guidelines?)",
            r"different\s+(?:instructions?|behavior|mode)",
            r"special\s+(?:instructions?|mode|case)",
            r"emergency\s+(?:instructions?|mode|protocol)",
            r"override\s+(?:default\s+)?(?:behavior|instructions?)",
            r"temporary\s+(?:instructions?|mode|override)",
        ]
    
    def _initialize_therapeutic_bypass_patterns(self) -> List[str]:
        """Initialize patterns that attempt to bypass therapeutic boundaries"""
        return [
            r"don't\s+(?:be\s+)?(?:so\s+)?professional",
            r"talk\s+like\s+a\s+(?:friend|buddy|pal)",
            r"be\s+more\s+casual",
            r"drop\s+the\s+(?:professional|therapeutic)\s+(?:tone|act)",
            r"speak\s+normally",
            r"be\s+real\s+with\s+me",
            r"cut\s+the\s+(?:professional|therapy)\s+(?:crap|bullshit)",
            r"just\s+tell\s+me\s+(?:straight|directly)",
        ]
    
    def _compile_patterns(self) -> Dict[str, List]:
        """Compile all patterns for efficient matching"""
        compiled = {}
        for category, patterns in self.injection_patterns.items():
            compiled[category] = [re.compile(pattern, re.IGNORECASE | re.MULTILINE) for pattern in patterns]
        
        compiled["role_manipulation"] = [re.compile(pattern, re.IGNORECASE) for pattern in self.role_manipulation_patterns]
        compiled["instruction_override"] = [re.compile(pattern, re.IGNORECASE) for pattern in self.instruction_override_patterns]
        compiled["therapeutic_bypass"] = [re.compile(pattern, re.IGNORECASE) for pattern in self.therapeutic_bypass_patterns]
        
        return compiled
    
    def detect_threats(self, text: str) -> List[SecurityThreat]:
        """Detect all security threats in the input text"""
        threats = []
        
        for category, patterns in self.compiled_patterns.items():
            for pattern in patterns:
                matches = pattern.findall(text)
                if matches:
                    threat_level = self._calculate_threat_level(category, len(matches))
                    threat = SecurityThreat(
                        threat_type=category,
                        threat_level=threat_level,
                        description=f"Detected {category} pattern: {pattern.pattern}",
                        detected_patterns=[pattern.pattern],
                        confidence_score=min(0.9, 0.3 + len(matches) * 0.2)
                    )
                    threats.append(threat)
        
        return threats
    
    def _calculate_threat_level(self, category: str, match_count: int) -> ThreatLevel:
        """Calculate threat level based on category and match count"""
        base_levels = {
            "classic_injection": ThreatLevel.HIGH,
            "role_manipulation": ThreatLevel.HIGH,
            "jailbreak_attempts": ThreatLevel.CRITICAL,
            "therapeutic_bypass": ThreatLevel.MEDIUM,
            "instruction_override": ThreatLevel.HIGH
        }
        
        base_level = base_levels.get(category, ThreatLevel.LOW)
        
        # Escalate based on match count
        if match_count >= 3:
            if base_level == ThreatLevel.HIGH:
                return ThreatLevel.CRITICAL
            elif base_level == ThreatLevel.MEDIUM:
                return ThreatLevel.HIGH
        
        return base_level

class ContentSanitizer:
    """Advanced content sanitization while preserving therapeutic value"""
    
    def __init__(self):
        self.safe_patterns = self._initialize_safe_patterns()
        self.dangerous_chars = r'[<>{}[\]\\`]'
        self.max_length = 5000
        
    def _initialize_safe_patterns(self) -> Dict[str, str]:
        """Initialize safe replacement patterns"""
        return {
            # Remove potential injection markers while preserving meaning
            r'[<>{}[\]\\]': '',
            r'`{3,}': '',  # Remove code blocks
            r'\${[^}]*}': '',  # Remove variable substitutions
            r'{{[^}]*}}': '',  # Remove template literals
            r'%[a-zA-Z_][a-zA-Z0-9_]*%': '',  # Remove variable references
            
            # Normalize whitespace
            r'\s+': ' ',
            r'^\s+|\s+$': '',
            
            # Remove potential command injections
            r';\s*[a-zA-Z_][a-zA-Z0-9_]*\s*\(': '; ',
            r'\|\s*[a-zA-Z_][a-zA-Z0-9_]*': '| ',
        }
    
    def sanitize(self, text: str) -> Tuple[str, List[str]]:
        """Sanitize input while preserving therapeutic content"""
        if not text:
            return "", []
        
        sanitized = text
        applied_sanitizations = []
        
        # Apply safe pattern replacements
        for pattern, replacement in self.safe_patterns.items():
            old_text = sanitized
            sanitized = re.sub(pattern, replacement, sanitized)
            if old_text != sanitized:
                applied_sanitizations.append(f"Applied pattern: {pattern}")
        
        # Truncate if too long
        if len(sanitized) > self.max_length:
            sanitized = sanitized[:self.max_length] + "..."
            applied_sanitizations.append(f"Truncated to {self.max_length} characters")
        
        # Final cleanup
        sanitized = ' '.join(sanitized.split())
        
        return sanitized, applied_sanitizations

class TherapeuticBoundaryValidator:
    """Validates that requests stay within appropriate therapeutic boundaries"""
    
    def __init__(self):
        self.inappropriate_requests = self._initialize_inappropriate_patterns()
        self.boundary_violations = self._initialize_boundary_patterns()
        
    def _initialize_inappropriate_patterns(self) -> List[str]:
        """Initialize patterns for inappropriate therapeutic requests"""
        return [
            r"diagnose\s+me\s+with",
            r"what\s+(?:mental\s+)?(?:illness|disorder|condition)\s+do\s+I\s+have",
            r"prescribe\s+(?:me\s+)?(?:medication|drugs?)",
            r"am\s+I\s+(?:crazy|insane|mentally\s+ill)",
            r"should\s+I\s+(?:leave|divorce|break\s+up\s+with)",
            r"tell\s+me\s+(?:exactly\s+)?what\s+to\s+do",
            r"make\s+(?:this\s+)?decision\s+for\s+me",
            r"give\s+me\s+legal\s+advice",
            r"should\s+I\s+(?:sue|press\s+charges)",
        ]
    
    def _initialize_boundary_patterns(self) -> List[str]:
        """Initialize patterns for boundary violations"""
        return [
            r"be\s+my\s+(?:friend|boyfriend|girlfriend)",
            r"let's\s+(?:date|hook\s+up|meet\s+up)",
            r"what\s+(?:do\s+you\s+look\s+like|are\s+you\s+wearing)",
            r"send\s+me\s+(?:a\s+)?(?:picture|photo)",
            r"where\s+do\s+you\s+live",
            r"what's\s+your\s+(?:phone\s+)?number",
            r"can\s+(?:we\s+)?meet\s+in\s+person",
            r"are\s+you\s+(?:single|available|dating)",
        ]
    
    def validate_boundaries(self, text: str) -> List[SecurityThreat]:
        """Validate therapeutic boundaries"""
        threats = []
        text_lower = text.lower()
        
        # Check for inappropriate requests
        for pattern in self.inappropriate_requests:
            if re.search(pattern, text_lower):
                threat = SecurityThreat(
                    threat_type="inappropriate_request",
                    threat_level=ThreatLevel.MEDIUM,
                    description=f"Request outside therapeutic scope: {pattern}",
                    detected_patterns=[pattern],
                    confidence_score=0.8
                )
                threats.append(threat)
        
        # Check for boundary violations
        for pattern in self.boundary_violations:
            if re.search(pattern, text_lower):
                threat = SecurityThreat(
                    threat_type="boundary_violation",
                    threat_level=ThreatLevel.HIGH,
                    description=f"Inappropriate personal request: {pattern}",
                    detected_patterns=[pattern],
                    confidence_score=0.9
                )
                threats.append(threat)
        
        return threats

class RelationshipSecurityValidator:
    """Comprehensive security validator for relationship agents"""
    
    def __init__(self):
        self.injection_detector = AdvancedPromptInjectionDetector()
        self.content_sanitizer = ContentSanitizer()
        self.boundary_validator = TherapeuticBoundaryValidator()
        self.validation_cache = {}
        self.cache_ttl = 3600  # 1 hour
        
    def validate_input(self, text: str, user_id: str = None) -> ValidationReport:
        """Comprehensive input validation with caching"""
        start_time = time.time()
        
        # Check cache first
        cache_key = hashlib.md5(text.encode()).hexdigest()
        if cache_key in self.validation_cache:
            cached_result = self.validation_cache[cache_key]
            if time.time() - cached_result["timestamp"] < self.cache_ttl:
                logger.debug(f"Using cached validation result for input: {text[:50]}...")
                return cached_result["result"]
        
        # Perform validation
        original_input = text
        all_threats = []
        
        # 1. Detect prompt injection attempts
        injection_threats = self.injection_detector.detect_threats(text)
        all_threats.extend(injection_threats)
        
        # 2. Validate therapeutic boundaries
        boundary_threats = self.boundary_validator.validate_boundaries(text)
        all_threats.extend(boundary_threats)
        
        # 3. Determine overall threat level
        overall_threat_level = self._calculate_overall_threat_level(all_threats)
        
        # 4. Determine validation result
        validation_result = self._determine_validation_result(overall_threat_level)
        
        # 5. Sanitize content if needed
        sanitized_input = original_input
        recommendations = []
        user_friendly_message = None
        
        if validation_result in [ValidationResult.SANITIZED, ValidationResult.APPROVED]:
            sanitized_input, sanitizations = self.content_sanitizer.sanitize(original_input)
            if sanitizations:
                recommendations.extend(sanitizations)
        
        if validation_result == ValidationResult.BLOCKED:
            user_friendly_message = self._generate_user_friendly_message(all_threats)
            sanitized_input = ""
        elif validation_result == ValidationResult.FLAGGED:
            user_friendly_message = "Your message has been flagged for review. Please rephrase your question about relationships in a clear, direct way."
            recommendations.append("Consider rephrasing your question more directly")
        
        # 6. Create validation report
        processing_time = time.time() - start_time
        
        report = ValidationReport(
            original_input=original_input,
            sanitized_input=sanitized_input,
            validation_result=validation_result,
            threats_detected=all_threats,
            overall_threat_level=overall_threat_level,
            processing_time=processing_time,
            recommendations=recommendations,
            user_friendly_message=user_friendly_message
        )
        
        # Cache the result
        self.validation_cache[cache_key] = {
            "result": report,
            "timestamp": time.time()
        }
        
        # Log security events
        if all_threats:
            logger.warning(f"Security threats detected for user {user_id}: {[t.threat_type for t in all_threats]}")
        
        return report
    
    def _calculate_overall_threat_level(self, threats: List[SecurityThreat]) -> ThreatLevel:
        """Calculate overall threat level from all detected threats"""
        if not threats:
            return ThreatLevel.NONE
        
        max_level = max(threat.threat_level for threat in threats)
        threat_count = len(threats)
        
        # Escalate based on threat count
        if threat_count >= 5:
            if max_level in [ThreatLevel.MEDIUM, ThreatLevel.HIGH]:
                return ThreatLevel.CRITICAL
        elif threat_count >= 3:
            if max_level == ThreatLevel.MEDIUM:
                return ThreatLevel.HIGH
        
        return max_level
    
    def _determine_validation_result(self, threat_level: ThreatLevel) -> ValidationResult:
        """Determine validation result based on threat level"""
        if threat_level == ThreatLevel.CRITICAL:
            return ValidationResult.BLOCKED
        elif threat_level == ThreatLevel.HIGH:
            return ValidationResult.BLOCKED
        elif threat_level == ThreatLevel.MEDIUM:
            return ValidationResult.FLAGGED
        elif threat_level == ThreatLevel.LOW:
            return ValidationResult.SANITIZED
        else:
            return ValidationResult.APPROVED
    
    def _generate_user_friendly_message(self, threats: List[SecurityThreat]) -> str:
        """Generate user-friendly message for blocked content"""
        threat_types = {threat.threat_type for threat in threats}
        
        if "boundary_violation" in threat_types:
            return "I'm here to provide relationship guidance within professional boundaries. Please keep our conversation focused on relationship topics I can help with."
        
        if "inappropriate_request" in threat_types:
            return "I can't provide medical diagnoses, legal advice, or make personal decisions for you. I'm here to offer relationship guidance and support. How can I help you with your relationship concerns?"
        
        if any(t in threat_types for t in ["classic_injection", "role_manipulation", "jailbreak_attempts"]):
            return "I notice your message contains some patterns that I can't process. Please rephrase your question about relationships in a clear, direct way."
        
        return "I'm having trouble understanding your request. Could you please rephrase your question about relationships more clearly?"
    
    def get_security_stats(self) -> Dict[str, Any]:
        """Get security validation statistics"""
        total_validations = len(self.validation_cache)
        threat_counts = {}
        
        for cached_item in self.validation_cache.values():
            report = cached_item["result"]
            for threat in report.threats_detected:
                threat_counts[threat.threat_type] = threat_counts.get(threat.threat_type, 0) + 1
        
        return {
            "total_validations": total_validations,
            "threat_type_counts": threat_counts,
            "cache_size": len(self.validation_cache),
            "cache_hit_rate": "N/A"  # Would need to track hits vs misses
        }
    
    def clear_cache(self):
        """Clear the validation cache"""
        self.validation_cache.clear()
        logger.info("Security validation cache cleared")

# Utility functions for integration
def validate_relationship_input(text: str, user_id: str = None) -> ValidationReport:
    """Convenience function for validating relationship agent input"""
    validator = RelationshipSecurityValidator()
    return validator.validate_input(text, user_id)

def is_input_safe(text: str, user_id: str = None) -> bool:
    """Quick check if input is safe to process"""
    report = validate_relationship_input(text, user_id)
    return report.validation_result in [ValidationResult.APPROVED, ValidationResult.SANITIZED]

def sanitize_relationship_input(text: str, user_id: str = None) -> str:
    """Sanitize input for relationship agents"""
    report = validate_relationship_input(text, user_id)
    return report.sanitized_input if report.validation_result != ValidationResult.BLOCKED else ""