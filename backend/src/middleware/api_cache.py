"""
Advanced API Caching Middleware for Backend Performance Optimization
Provides intelligent caching strategies, TTL management, and performance monitoring
"""

import json
import time
import hashlib
from functools import wraps
from datetime import datetime, timedelta
from typing import Dict, Any, Optional, Union, Callable
import logging

try:
    import redis
    REDIS_AVAILABLE = True
except ImportError:
    REDIS_AVAILABLE = False

try:
    from flask import Flask, request, jsonify, g
    from flask_caching import Cache
    FLASK_AVAILABLE = True
except ImportError:
    FLASK_AVAILABLE = False

logger = logging.getLogger(__name__)

class APICache:
    """Advanced API caching system with multiple strategies"""
    
    def __init__(self, config: Dict[str, Any] = None):
        self.config = config or {}
        self.cache = {}
        self.redis_client = None
        self.flask_cache = None
        self.performance_metrics = {
            'cache_hits': 0,
            'cache_misses': 0,
            'cache_sets': 0,
            'cache_deletes': 0,
            'total_requests': 0,
            'avg_response_time': 0,
            'cache_hit_rate': 0
        }
        
        # Initialize Redis if available
        if REDIS_AVAILABLE and self.config.get('redis_url'):
            try:
                self.redis_client = redis.from_url(self.config['redis_url'])
                self.redis_client.ping()
                logger.info("Redis cache initialized successfully")
            except Exception as e:
                logger.warning(f"Redis initialization failed: {e}")
                self.redis_client = None
        
        # Initialize Flask-Caching if available
        if FLASK_AVAILABLE and self.config.get('flask_app'):
            try:
                self.flask_cache = Cache(self.config['flask_app'])
                logger.info("Flask cache initialized successfully")
            except Exception as e:
                logger.warning(f"Flask cache initialization failed: {e}")
                self.flask_cache = None
    
    def generate_cache_key(self, prefix: str, *args, **kwargs) -> str:
        """Generate a unique cache key"""
        key_data = {
            'prefix': prefix,
            'args': args,
            'kwargs': kwargs,
            'timestamp': int(time.time() / 300)  # 5-minute buckets for some keys
        }
        
        key_string = json.dumps(key_data, sort_keys=True)
        return hashlib.md5(key_string.encode()).hexdigest()
    
    def get(self, key: str, default=None):
        """Get value from cache with fallback strategy"""
        self.performance_metrics['total_requests'] += 1
        
        # Try Redis first
        if self.redis_client:
            try:
                value = self.redis_client.get(key)
                if value:
                    self.performance_metrics['cache_hits'] += 1
                    return json.loads(value)
            except Exception as e:
                logger.warning(f"Redis get failed: {e}")
        
        # Try Flask cache
        if self.flask_cache:
            try:
                value = self.flask_cache.get(key)
                if value:
                    self.performance_metrics['cache_hits'] += 1
                    return value
            except Exception as e:
                logger.warning(f"Flask cache get failed: {e}")
        
        # Try in-memory cache
        if key in self.cache:
            cache_item = self.cache[key]
            if not cache_item.get('expires_at') or cache_item['expires_at'] > time.time():
                self.performance_metrics['cache_hits'] += 1
                return cache_item['value']
            else:
                del self.cache[key]
        
        self.performance_metrics['cache_misses'] += 1
        return default
    
    def set(self, key: str, value: Any, ttl: Optional[int] = None):
        """Set value in cache with TTL"""
        self.performance_metrics['cache_sets'] += 1
        ttl = ttl or self.config.get('default_ttl', 300)
        
        # Set in Redis
        if self.redis_client:
            try:
                self.redis_client.setex(key, ttl, json.dumps(value))
            except Exception as e:
                logger.warning(f"Redis set failed: {e}")
        
        # Set in Flask cache
        if self.flask_cache:
            try:
                self.flask_cache.set(key, value, timeout=ttl)
            except Exception as e:
                logger.warning(f"Flask cache set failed: {e}")
        
        # Set in in-memory cache
        self.cache[key] = {
            'value': value,
            'expires_at': time.time() + ttl,
            'created_at': time.time()
        }
    
    def delete(self, key: str):
        """Delete value from cache"""
        self.performance_metrics['cache_deletes'] += 1
        
        # Delete from Redis
        if self.redis_client:
            try:
                self.redis_client.delete(key)
            except Exception as e:
                logger.warning(f"Redis delete failed: {e}")
        
        # Delete from Flask cache
        if self.flask_cache:
            try:
                self.flask_cache.delete(key)
            except Exception as e:
                logger.warning(f"Flask cache delete failed: {e}")
        
        # Delete from in-memory cache
        if key in self.cache:
            del self.cache[key]
    
    def clear_pattern(self, pattern: str):
        """Clear cache keys matching pattern"""
        # Clear from Redis
        if self.redis_client:
            try:
                keys = self.redis_client.keys(pattern)
                if keys:
                    self.redis_client.delete(*keys)
            except Exception as e:
                logger.warning(f"Redis pattern clear failed: {e}")
        
        # Clear from in-memory cache
        keys_to_delete = [k for k in self.cache.keys() if pattern in k]
        for key in keys_to_delete:
            del self.cache[key]
    
    def cleanup_expired(self):
        """Clean up expired cache entries"""
        current_time = time.time()
        expired_keys = [
            key for key, item in self.cache.items()
            if item.get('expires_at') and item['expires_at'] < current_time
        ]
        
        for key in expired_keys:
            del self.cache[key]
        
        logger.info(f"Cleaned up {len(expired_keys)} expired cache entries")
    
    def get_metrics(self) -> Dict[str, Any]:
        """Get performance metrics"""
        total_requests = self.performance_metrics['total_requests']
        if total_requests > 0:
            self.performance_metrics['cache_hit_rate'] = (
                self.performance_metrics['cache_hits'] / total_requests * 100
            )
        
        return {
            **self.performance_metrics,
            'cache_size': len(self.cache),
            'redis_available': bool(self.redis_client),
            'flask_cache_available': bool(self.flask_cache)
        }


class CacheStrategies:
    """Different caching strategies for various use cases"""
    
    @staticmethod
    def cache_first(cache: APICache, key: str, data_fetcher: Callable, ttl: int = 300):
        """Cache-first strategy: return cached data if available, otherwise fetch and cache"""
        cached_data = cache.get(key)
        if cached_data:
            return cached_data
        
        data = data_fetcher()
        cache.set(key, data, ttl)
        return data
    
    @staticmethod
    def network_first(cache: APICache, key: str, data_fetcher: Callable, ttl: int = 300):
        """Network-first strategy: try to fetch fresh data, fallback to cache"""
        try:
            data = data_fetcher()
            cache.set(key, data, ttl)
            return data
        except Exception as e:
            logger.warning(f"Network request failed: {e}")
            cached_data = cache.get(key)
            if cached_data:
                return cached_data
            raise
    
    @staticmethod
    def stale_while_revalidate(cache: APICache, key: str, data_fetcher: Callable, ttl: int = 300):
        """Stale-while-revalidate: return cached data immediately, update in background"""
        cached_data = cache.get(key)
        
        # Return cached data immediately if available
        if cached_data:
            # Schedule background update (in a real app, use celery or similar)
            try:
                fresh_data = data_fetcher()
                cache.set(key, fresh_data, ttl)
            except Exception as e:
                logger.warning(f"Background update failed: {e}")
            
            return cached_data
        
        # No cached data, fetch synchronously
        data = data_fetcher()
        cache.set(key, data, ttl)
        return data


def cache_response(
    cache: APICache,
    key_prefix: str = 'api',
    ttl: int = 300,
    strategy: str = 'cache_first',
    vary_on: list = None,
    exclude_methods: list = None
):
    """Decorator for caching API responses"""
    vary_on = vary_on or ['url', 'method']
    exclude_methods = exclude_methods or ['POST', 'PUT', 'DELETE', 'PATCH']
    
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Skip caching for excluded methods
            if hasattr(request, 'method') and request.method in exclude_methods:
                return func(*args, **kwargs)
            
            # Generate cache key
            cache_key_data = {
                'prefix': key_prefix,
                'function': func.__name__,
            }
            
            if 'url' in vary_on:
                cache_key_data['url'] = request.url
            if 'method' in vary_on:
                cache_key_data['method'] = request.method
            if 'args' in vary_on:
                cache_key_data['args'] = args
            if 'kwargs' in vary_on:
                cache_key_data['kwargs'] = kwargs
            
            cache_key = cache.generate_cache_key(key_prefix, cache_key_data)
            
            # Define data fetcher
            def data_fetcher():
                start_time = time.time()
                result = func(*args, **kwargs)
                
                # Record response time
                response_time = (time.time() - start_time) * 1000
                cache.performance_metrics['avg_response_time'] = (
                    cache.performance_metrics['avg_response_time'] + response_time
                ) / 2
                
                return result
            
            # Apply caching strategy
            if strategy == 'cache_first':
                return CacheStrategies.cache_first(cache, cache_key, data_fetcher, ttl)
            elif strategy == 'network_first':
                return CacheStrategies.network_first(cache, cache_key, data_fetcher, ttl)
            elif strategy == 'stale_while_revalidate':
                return CacheStrategies.stale_while_revalidate(cache, cache_key, data_fetcher, ttl)
            else:
                return data_fetcher()
        
        return wrapper
    return decorator


class CacheMiddleware:
    """Flask middleware for automatic API caching"""
    
    def __init__(self, app: Flask = None, config: Dict[str, Any] = None):
        self.app = app
        self.cache = APICache(config)
        
        if app:
            self.init_app(app)
    
    def init_app(self, app: Flask):
        """Initialize middleware with Flask app"""
        self.app = app
        
        # Add cache instance to app
        app.cache = self.cache
        
        # Register middleware
        app.before_request(self.before_request)
        app.after_request(self.after_request)
        
        # Add cache control headers
        @app.after_request
        def add_cache_headers(response):
            if request.method == 'GET':
                response.headers['Cache-Control'] = 'public, max-age=300'
                response.headers['ETag'] = hashlib.md5(
                    response.get_data()
                ).hexdigest()
            return response
        
        # Add metrics endpoint
        @app.route('/api/cache/metrics')
        def cache_metrics():
            return jsonify(self.cache.get_metrics())
        
        # Add cache management endpoints
        @app.route('/api/cache/clear', methods=['POST'])
        def clear_cache():
            pattern = request.json.get('pattern', '*')
            self.cache.clear_pattern(pattern)
            return jsonify({'message': 'Cache cleared'})
        
        logger.info("Cache middleware initialized")
    
    def before_request(self):
        """Before request hook"""
        g.start_time = time.time()
    
    def after_request(self, response):
        """After request hook"""
        # Add performance headers
        if hasattr(g, 'start_time'):
            response_time = (time.time() - g.start_time) * 1000
            response.headers['X-Response-Time'] = f"{response_time:.2f}ms"
        
        # Add cache status headers
        response.headers['X-Cache-Status'] = 'MISS'  # Default, can be overridden
        
        return response


# Utility functions
def create_cache_key(prefix: str, *args, **kwargs) -> str:
    """Create a cache key from arguments"""
    key_data = {
        'prefix': prefix,
        'args': args,
        'kwargs': kwargs
    }
    key_string = json.dumps(key_data, sort_keys=True)
    return hashlib.md5(key_string.encode()).hexdigest()


def conditional_cache(condition: Callable, cache: APICache, key: str, data_fetcher: Callable, ttl: int = 300):
    """Conditionally cache based on a condition function"""
    if condition():
        return CacheStrategies.cache_first(cache, key, data_fetcher, ttl)
    else:
        return data_fetcher()


def cache_invalidation_decorator(cache: APICache, patterns: list):
    """Decorator for cache invalidation after certain operations"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            
            # Invalidate cache patterns
            for pattern in patterns:
                cache.clear_pattern(pattern)
            
            return result
        return wrapper
    return decorator


# Performance monitoring
class CachePerformanceMonitor:
    """Monitor and analyze cache performance"""
    
    def __init__(self, cache: APICache):
        self.cache = cache
        self.metrics_history = []
    
    def collect_metrics(self):
        """Collect current metrics"""
        metrics = self.cache.get_metrics()
        metrics['timestamp'] = datetime.now().isoformat()
        self.metrics_history.append(metrics)
        
        # Keep only last 100 entries
        if len(self.metrics_history) > 100:
            self.metrics_history = self.metrics_history[-100:]
    
    def analyze_performance(self) -> Dict[str, Any]:
        """Analyze cache performance"""
        if not self.metrics_history:
            return {}
        
        latest = self.metrics_history[-1]
        
        # Calculate trends
        hit_rate_trend = []
        response_time_trend = []
        
        for metric in self.metrics_history[-10:]:  # Last 10 entries
            hit_rate_trend.append(metric['cache_hit_rate'])
            response_time_trend.append(metric['avg_response_time'])
        
        analysis = {
            'current_hit_rate': latest['cache_hit_rate'],
            'current_response_time': latest['avg_response_time'],
            'cache_size': latest['cache_size'],
            'total_requests': latest['total_requests'],
            'recommendations': []
        }
        
        # Generate recommendations
        if latest['cache_hit_rate'] < 50:
            analysis['recommendations'].append({
                'type': 'warning',
                'message': 'Low cache hit rate. Consider increasing TTL or adjusting cache strategy.'
            })
        
        if latest['avg_response_time'] > 1000:
            analysis['recommendations'].append({
                'type': 'warning',
                'message': 'High response time. Consider optimizing queries or increasing cache TTL.'
            })
        
        if latest['cache_size'] > 10000:
            analysis['recommendations'].append({
                'type': 'info',
                'message': 'Large cache size. Consider implementing cache cleanup strategies.'
            })
        
        return analysis
    
    def generate_report(self) -> str:
        """Generate a performance report"""
        analysis = self.analyze_performance()
        
        report = f"""
Cache Performance Report
========================
Generated: {datetime.now().isoformat()}

Current Metrics:
- Hit Rate: {analysis.get('current_hit_rate', 0):.1f}%
- Response Time: {analysis.get('current_response_time', 0):.2f}ms
- Cache Size: {analysis.get('cache_size', 0)} entries
- Total Requests: {analysis.get('total_requests', 0)}

Recommendations:
"""
        
        for rec in analysis.get('recommendations', []):
            report += f"- {rec['type'].upper()}: {rec['message']}\n"
        
        return report


# Example usage and configuration
def setup_cache_middleware(app: Flask, config: dict = None):
    """Setup cache middleware with Flask app"""
    default_config = {
        'default_ttl': 300,
        'redis_url': 'redis://localhost:6379/0',
        'flask_app': app
    }
    
    if config:
        default_config.update(config)
    
    middleware = CacheMiddleware(app, default_config)
    return middleware


# Export main classes and functions
__all__ = [
    'APICache',
    'CacheStrategies',
    'CacheMiddleware',
    'cache_response',
    'create_cache_key',
    'conditional_cache',
    'cache_invalidation_decorator',
    'CachePerformanceMonitor',
    'setup_cache_middleware'
]