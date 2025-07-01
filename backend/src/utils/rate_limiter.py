"""
Rate limiting utility for Flourish Relationship Platform
Provides protection against brute force attacks and API abuse
"""

import time
import hashlib
from functools import wraps
from flask import request, jsonify, current_app
from collections import defaultdict, deque
import threading

class RateLimiter:
    """
    Thread-safe rate limiter using sliding window algorithm
    """
    
    def __init__(self):
        self.requests = defaultdict(deque)
        self.lock = threading.Lock()
    
    def is_allowed(self, key, max_requests, window_seconds):
        """
        Check if request is allowed based on rate limit
        
        Args:
            key (str): Unique identifier for the client
            max_requests (int): Maximum number of requests allowed
            window_seconds (int): Time window in seconds
            
        Returns:
            bool: True if request is allowed, False otherwise
        """
        current_time = time.time()
        
        with self.lock:
            # Clean old requests outside the window
            while (self.requests[key] and 
                   current_time - self.requests[key][0] > window_seconds):
                self.requests[key].popleft()
            
            # Check if limit is exceeded
            if len(self.requests[key]) >= max_requests:
                return False
            
            # Add current request
            self.requests[key].append(current_time)
            return True
    
    def get_remaining_requests(self, key, max_requests, window_seconds):
        """
        Get number of remaining requests for a key
        
        Args:
            key (str): Unique identifier for the client
            max_requests (int): Maximum number of requests allowed
            window_seconds (int): Time window in seconds
            
        Returns:
            int: Number of remaining requests
        """
        current_time = time.time()
        
        with self.lock:
            # Clean old requests outside the window
            while (self.requests[key] and 
                   current_time - self.requests[key][0] > window_seconds):
                self.requests[key].popleft()
            
            return max(0, max_requests - len(self.requests[key]))
    
    def get_reset_time(self, key, window_seconds):
        """
        Get time when rate limit will reset
        
        Args:
            key (str): Unique identifier for the client
            window_seconds (int): Time window in seconds
            
        Returns:
            float: Unix timestamp when limit resets
        """
        with self.lock:
            if not self.requests[key]:
                return time.time()
            
            return self.requests[key][0] + window_seconds
    
    def clear_key(self, key):
        """
        Clear rate limit data for a specific key
        
        Args:
            key (str): Unique identifier for the client
        """
        with self.lock:
            if key in self.requests:
                del self.requests[key]

# Global rate limiter instance
rate_limiter = RateLimiter()

def get_client_identifier():
    """
    Get unique identifier for the client
    Uses IP address and User-Agent for identification
    
    Returns:
        str: Unique client identifier
    """
    # Get client IP (handle proxy headers)
    client_ip = request.environ.get('HTTP_X_FORWARDED_FOR', 
                                   request.environ.get('HTTP_X_REAL_IP', 
                                                      request.remote_addr))
    
    # Use first IP if multiple IPs in X-Forwarded-For
    if client_ip and ',' in client_ip:
        client_ip = client_ip.split(',')[0].strip()
    
    # Get User-Agent for additional uniqueness
    user_agent = request.headers.get('User-Agent', '')
    
    # Create hash of IP + User-Agent
    identifier = f"{client_ip}:{user_agent}"
    return hashlib.sha256(identifier.encode()).hexdigest()[:16]

def rate_limit(max_requests=60, window=60, per_user=False, key_func=None):
    """
    Decorator for rate limiting Flask routes
    
    Args:
        max_requests (int): Maximum number of requests allowed
        window (int): Time window in seconds
        per_user (bool): If True, rate limit per authenticated user
        key_func (callable): Custom function to generate rate limit key
        
    Returns:
        decorator: Flask route decorator
    """
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            # Determine rate limit key
            if key_func:
                key = key_func()
            elif per_user:
                # Rate limit per authenticated user
                from flask_jwt_extended import get_jwt_identity, verify_jwt_in_request
                try:
                    verify_jwt_in_request(optional=True)
                    user_id = get_jwt_identity()
                    if user_id:
                        key = f"user:{user_id}"
                    else:
                        key = f"ip:{get_client_identifier()}"
                except:
                    key = f"ip:{get_client_identifier()}"
            else:
                # Rate limit per IP/client
                key = f"ip:{get_client_identifier()}"
            
            # Check rate limit
            if not rate_limiter.is_allowed(key, max_requests, window):
                # Get rate limit info for headers
                remaining = rate_limiter.get_remaining_requests(key, max_requests, window)
                reset_time = rate_limiter.get_reset_time(key, window)
                retry_after = int(reset_time - time.time())
                
                response = jsonify({
                    'success': False,
                    'message': 'Rate limit exceeded. Please try again later.',
                    'error_code': 'RATE_LIMIT_EXCEEDED',
                    'retry_after': max(1, retry_after)
                })
                
                # Add rate limit headers
                response.headers['X-RateLimit-Limit'] = str(max_requests)
                response.headers['X-RateLimit-Remaining'] = str(remaining)
                response.headers['X-RateLimit-Reset'] = str(int(reset_time))
                response.headers['Retry-After'] = str(max(1, retry_after))
                
                return response, 429
            
            # Add rate limit headers to successful responses
            remaining = rate_limiter.get_remaining_requests(key, max_requests, window)
            reset_time = rate_limiter.get_reset_time(key, window)
            
            response = f(*args, **kwargs)
            
            # Add headers if response is a tuple (response, status_code)
            if isinstance(response, tuple):
                response_obj, status_code = response
                if hasattr(response_obj, 'headers'):
                    response_obj.headers['X-RateLimit-Limit'] = str(max_requests)
                    response_obj.headers['X-RateLimit-Remaining'] = str(remaining)
                    response_obj.headers['X-RateLimit-Reset'] = str(int(reset_time))
                return response_obj, status_code
            else:
                # Single response object
                if hasattr(response, 'headers'):
                    response.headers['X-RateLimit-Limit'] = str(max_requests)
                    response.headers['X-RateLimit-Remaining'] = str(remaining)
                    response.headers['X-RateLimit-Reset'] = str(int(reset_time))
                return response
        
        return decorated_function
    return decorator

def strict_rate_limit(max_requests=5, window=300):
    """
    Strict rate limiter for sensitive endpoints (login, registration, etc.)
    
    Args:
        max_requests (int): Maximum number of requests allowed (default: 5)
        window (int): Time window in seconds (default: 300 = 5 minutes)
        
    Returns:
        decorator: Flask route decorator
    """
    return rate_limit(max_requests=max_requests, window=window, per_user=False)

def user_rate_limit(max_requests=100, window=3600):
    """
    Rate limiter per authenticated user
    
    Args:
        max_requests (int): Maximum number of requests allowed (default: 100)
        window (int): Time window in seconds (default: 3600 = 1 hour)
        
    Returns:
        decorator: Flask route decorator
    """
    return rate_limit(max_requests=max_requests, window=window, per_user=True)

def api_rate_limit(max_requests=1000, window=3600):
    """
    General API rate limiter
    
    Args:
        max_requests (int): Maximum number of requests allowed (default: 1000)
        window (int): Time window in seconds (default: 3600 = 1 hour)
        
    Returns:
        decorator: Flask route decorator
    """
    return rate_limit(max_requests=max_requests, window=window, per_user=False)

class IPBlocklist:
    """
    IP blocking functionality for malicious clients
    """
    
    def __init__(self):
        self.blocked_ips = set()
        self.blocked_until = {}
        self.lock = threading.Lock()
    
    def block_ip(self, ip, duration_seconds=3600):
        """
        Block an IP address for a specified duration
        
        Args:
            ip (str): IP address to block
            duration_seconds (int): Duration to block in seconds
        """
        with self.lock:
            self.blocked_ips.add(ip)
            self.blocked_until[ip] = time.time() + duration_seconds
    
    def unblock_ip(self, ip):
        """
        Unblock an IP address
        
        Args:
            ip (str): IP address to unblock
        """
        with self.lock:
            self.blocked_ips.discard(ip)
            self.blocked_until.pop(ip, None)
    
    def is_blocked(self, ip):
        """
        Check if an IP address is blocked
        
        Args:
            ip (str): IP address to check
            
        Returns:
            bool: True if blocked, False otherwise
        """
        current_time = time.time()
        
        with self.lock:
            # Clean expired blocks
            expired_ips = [blocked_ip for blocked_ip, until_time in self.blocked_until.items() 
                          if until_time <= current_time]
            
            for expired_ip in expired_ips:
                self.blocked_ips.discard(expired_ip)
                del self.blocked_until[expired_ip]
            
            return ip in self.blocked_ips
    
    def get_blocked_ips(self):
        """
        Get list of currently blocked IPs
        
        Returns:
            list: List of blocked IP addresses
        """
        current_time = time.time()
        
        with self.lock:
            # Clean expired blocks
            expired_ips = [blocked_ip for blocked_ip, until_time in self.blocked_until.items() 
                          if until_time <= current_time]
            
            for expired_ip in expired_ips:
                self.blocked_ips.discard(expired_ip)
                del self.blocked_until[expired_ip]
            
            return list(self.blocked_ips)

# Global IP blocklist instance
ip_blocklist = IPBlocklist()

def check_ip_blocklist():
    """
    Middleware to check if client IP is blocked
    """
    client_ip = request.environ.get('HTTP_X_FORWARDED_FOR', 
                                   request.environ.get('HTTP_X_REAL_IP', 
                                                      request.remote_addr))
    
    if client_ip and ',' in client_ip:
        client_ip = client_ip.split(',')[0].strip()
    
    if ip_blocklist.is_blocked(client_ip):
        return jsonify({
            'success': False,
            'message': 'Access denied. Your IP address has been blocked.',
            'error_code': 'IP_BLOCKED'
        }), 403
    
    return None

