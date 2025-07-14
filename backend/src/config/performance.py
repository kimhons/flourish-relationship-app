"""
Performance Configuration for Backend
Handles caching, database optimization, and monitoring
"""

import os
from datetime import timedelta
from typing import Dict, Any, Optional, Union
try:
    import redis
except ImportError:
    redis = None

try:
    from flask import Flask
    from flask_caching import Cache
except ImportError:
    Flask = None
    Cache = None

class PerformanceConfig:
    """Configuration for performance optimizations"""
    
    # Redis Configuration
    REDIS_URL = os.getenv('REDIS_URL', 'redis://localhost:6379/0')
    REDIS_DECODE_RESPONSES = True
    
    # Cache Configuration
    CACHE_TYPE = 'redis'
    CACHE_REDIS_URL = REDIS_URL
    CACHE_DEFAULT_TIMEOUT = 300  # 5 minutes
    
    # Cache timeouts for different data types
    CACHE_TIMEOUTS = {
        'user_profile': timedelta(minutes=15),
        'matches': timedelta(minutes=10),
        'resources': timedelta(hours=1),
        'ai_responses': timedelta(hours=24),
        'static_content': timedelta(days=7),
        'database_queries': timedelta(minutes=5)
    }
    
    # Database Performance
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_pre_ping': True,
        'pool_recycle': 300,
        'pool_size': 20,
        'max_overflow': 30,
        'pool_timeout': 30,
        'echo': False,  # Set to True for SQL debugging
    }
    
    # Connection pooling
    SQLALCHEMY_POOL_SIZE = 20
    SQLALCHEMY_POOL_TIMEOUT = 30
    SQLALCHEMY_POOL_RECYCLE = 300
    SQLALCHEMY_MAX_OVERFLOW = 30
    
    # Celery Configuration for background tasks
    CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL', REDIS_URL)
    CELERY_RESULT_BACKEND = os.getenv('CELERY_RESULT_BACKEND', REDIS_URL)
    CELERY_TASK_SERIALIZER = 'json'
    CELERY_RESULT_SERIALIZER = 'json'
    CELERY_ACCEPT_CONTENT = ['json']
    CELERY_TIMEZONE = 'UTC'
    CELERY_ENABLE_UTC = True
    
    # Rate limiting
    RATELIMIT_STORAGE_URL = REDIS_URL
    RATELIMIT_DEFAULT = "100/hour"
    RATELIMIT_HEADERS_ENABLED = True
    
    # Monitoring
    ENABLE_METRICS = True
    METRICS_PORT = 9090
    
    # Compression
    COMPRESS_MIMETYPES = [
        'text/html',
        'text/css',
        'text/javascript',
        'application/javascript',
        'application/json',
        'text/xml',
        'application/xml',
        'application/xml+rss',
        'text/plain'
    ]
    
    # Security headers for performance
    SECURITY_HEADERS = {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }

class CacheManager:
    """Manages caching operations"""
    
    def __init__(self, app=None):
        self.cache = Cache() if Cache else None
        self.redis_client = None
        if app:
            self.init_app(app)
    
    def init_app(self, app):
        """Initialize cache with Flask app"""
        if not self.cache:
            return
            
        app.config.from_object(PerformanceConfig)
        self.cache.init_app(app)
        
        # Initialize Redis client
        if redis:
            self.redis_client = redis.from_url(
                app.config['REDIS_URL'],
                decode_responses=True
            )
    
    def get_cache_key(self, prefix: str, *args) -> str:
        """Generate cache key with prefix and arguments"""
        return f"{prefix}:{':'.join(str(arg) for arg in args)}"
    
    def cache_with_timeout(self, key: str, data: Any, timeout: Optional[timedelta] = None):
        """Cache data with specified timeout"""
        if timeout is None:
            timeout_seconds = PerformanceConfig.CACHE_DEFAULT_TIMEOUT
        else:
            timeout_seconds = int(timeout.total_seconds())
        
        return self.cache.set(key, data, timeout=timeout_seconds) if self.cache else None
    
    def get_cached_data(self, key: str):
        """Get cached data by key"""
        return self.cache.get(key) if self.cache else None
    
    def delete_cache(self, key: str):
        """Delete cached data"""
        return self.cache.delete(key) if self.cache else None
    
    def clear_cache_pattern(self, pattern: str):
        """Clear cache entries matching pattern"""
        if self.redis_client:
            keys = self.redis_client.keys(pattern)
            if keys:
                self.redis_client.delete(*keys)

class DatabaseOptimizer:
    """Database performance optimizations"""
    
    @staticmethod
    def optimize_query(query):
        """Add common optimizations to queries"""
        # Add query optimizations like eager loading, indexing hints, etc.
        return query
    
    @staticmethod
    def get_pagination_params(page: int = 1, per_page: int = 20):
        """Get optimized pagination parameters"""
        per_page = min(per_page, 100)  # Limit max results
        offset = (page - 1) * per_page
        return offset, per_page
    
    @staticmethod
    def create_indexes(db):
        """Create performance indexes"""
        # This would contain SQL for creating indexes
        indexes = [
            "CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);",
            "CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);",
            "CREATE INDEX IF NOT EXISTS idx_matches_user_id ON matches(user_id);",
            "CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);",
            "CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at);",
        ]
        
        for index_sql in indexes:
            try:
                db.engine.execute(index_sql)
            except Exception as e:
                print(f"Error creating index: {e}")

class PerformanceMonitor:
    """Monitor application performance"""
    
    def __init__(self):
        self.metrics = {}
    
    def track_request_time(self, endpoint: str, duration: float):
        """Track request processing time"""
        if endpoint not in self.metrics:
            self.metrics[endpoint] = []
        
        self.metrics[endpoint].append(duration)
        
        # Keep only last 100 requests
        if len(self.metrics[endpoint]) > 100:
            self.metrics[endpoint] = self.metrics[endpoint][-100:]
    
    def get_average_response_time(self, endpoint: str) -> float:
        """Get average response time for endpoint"""
        if endpoint not in self.metrics or not self.metrics[endpoint]:
            return 0.0
        
        return sum(self.metrics[endpoint]) / len(self.metrics[endpoint])
    
    def get_performance_summary(self) -> Dict[str, Any]:
        """Get performance summary"""
        summary = {}
        for endpoint, times in self.metrics.items():
            if times:
                summary[endpoint] = {
                    'avg_response_time': sum(times) / len(times),
                    'max_response_time': max(times),
                    'min_response_time': min(times),
                    'request_count': len(times)
                }
        return summary

# Global instances
cache_manager = CacheManager()
performance_monitor = PerformanceMonitor()

# Decorators for easy use
def cache_result(timeout: Optional[timedelta] = None, key_prefix: str = 'default'):
    """Decorator to cache function results"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            # Generate cache key
            cache_key = cache_manager.get_cache_key(
                key_prefix, 
                func.__name__, 
                *args, 
                *sorted(kwargs.items())
            )
            
            # Try to get from cache
            cached_result = cache_manager.get_cached_data(cache_key)
            if cached_result is not None:
                return cached_result
            
            # Execute function and cache result
            result = func(*args, **kwargs)
            cache_manager.cache_with_timeout(cache_key, result, timeout)
            return result
        
        return wrapper
    return decorator

def monitor_performance(func):
    """Decorator to monitor function performance"""
    def wrapper(*args, **kwargs):
        import time
        start_time = time.time()
        
        result = func(*args, **kwargs)
        
        duration = time.time() - start_time
        performance_monitor.track_request_time(func.__name__, duration)
        
        return result
    return wrapper