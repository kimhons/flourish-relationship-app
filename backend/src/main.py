"""
Flourish Relationship Platform - Main Flask Application
Comprehensive backend API for the most advanced relationship app
"""

import os
import logging
from datetime import datetime, timedelta
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from werkzeug.exceptions import HTTPException

# Import database and models
from .models.database import db, init_database
from .models.user import User, UserProfile, UserPreferences
from .models.match import Match, CompatibilityScore
from .models.conversation import Conversation, Message
from .models.coaching import CoachingSession, SessionTranscript, CoachingInsight, MoodAssessment
from .models.content import Article, Podcast, Meditation, Book
from .models.subscription import Subscription, PaymentMethod, Transaction, PromoCode, SubscriptionPlan
from .models.analytics import UserAnalytics, Event, Funnel, Cohort, ABTest
from .models.moderation import ModerationCase, Evidence, ModerationAction, Appeal

# Import routes
from .routes.auth import auth_bp
from .routes.user import user_bp
from .routes.ai_routes import ai_bp

# Import AI services
from .services.ai_service_manager import initialize_ai_services, cleanup_ai_services, ai_service_manager
from .routes.enhanced_relationship_coaching import enhanced_coaching_bp, initialize_enhanced_coaching
from .services.dr_love_coach import initialize_dr_love_coach
from .services.ai_matching_engine import initialize_ai_matching_engine

# Import utilities
from .utils.email_service import send_verification_email, send_password_reset_email
from .utils.rate_limiter import check_ip_blocklist

def create_app(config_name='development'):
    """
    Application factory pattern for creating Flask app
    
    Args:
        config_name (str): Configuration environment name
        
    Returns:
        Flask: Configured Flask application
    """
    app = Flask(__name__)
    
    # Configuration
    configure_app(app, config_name)
    
    # Initialize extensions
    initialize_extensions(app)
    
    # Register blueprints
    register_blueprints(app)
    
    # Register error handlers
    register_error_handlers(app)
    
    # Register middleware
    register_middleware(app)
    
    # Initialize database
    with app.app_context():
        # Database is already initialized in initialize_extensions
        db.create_all()
        create_default_data()
        
        # Initialize AI services
        initialize_ai_services_sync(app)
    
    return app

def initialize_ai_services_sync(app):
    """
    Initialize AI services synchronously
    
    Args:
        app (Flask): Flask application instance
    """
    try:
        import asyncio
        
        # Set environment variables for AI services
        if app.config['OPENAI_API_KEY']:
            os.environ['OPENAI_API_KEY'] = app.config['OPENAI_API_KEY']
        if app.config['TOGETHER_API_KEY']:
            os.environ['TOGETHER_API_KEY'] = app.config['TOGETHER_API_KEY']
        if app.config['GOOGLE_CLOUD_PROJECT']:
            os.environ['GOOGLE_CLOUD_PROJECT'] = app.config['GOOGLE_CLOUD_PROJECT']
        if app.config['ANTHROPIC_API_KEY']:
            os.environ['ANTHROPIC_API_KEY'] = app.config['ANTHROPIC_API_KEY']
        
        # Create event loop for async initialization
        try:
            loop = asyncio.get_event_loop()
        except RuntimeError:
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
        
        # Initialize AI services
        loop.run_until_complete(initialize_ai_services())
        loop.run_until_complete(initialize_dr_love_coach(ai_service_manager))
        loop.run_until_complete(initialize_ai_matching_engine(ai_service_manager))
        
        # Initialize enhanced relationship coaching system
        initialize_enhanced_coaching(ai_service_manager)
        
        app.logger.info("All AI services initialized successfully")
        
    except Exception as e:
        app.logger.error(f"Failed to initialize AI services: {e}")
        # Continue without AI services for now

def configure_app(app, config_name):
    """
    Configure Flask application with environment-specific settings
    
    Args:
        app (Flask): Flask application instance
        config_name (str): Configuration environment name
    """
    # Base configuration
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'flourish-dev-secret-key-change-in-production')
    app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'flourish-jwt-secret-key-change-in-production')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=30)
    
    # Database configuration
    if config_name == 'production':
        app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 
            'postgresql://flourish_user:flourish_password@localhost/flourish_production')
    elif config_name == 'testing':
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        app.config['TESTING'] = True
    else:  # development
        app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 
            'sqlite:///flourish_development.db')
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'pool_pre_ping': True,
        'pool_recycle': 300,
    }
    
    # Email configuration
    app.config['SMTP_SERVER'] = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
    app.config['SMTP_PORT'] = int(os.environ.get('SMTP_PORT', 587))
    app.config['SMTP_USERNAME'] = os.environ.get('SMTP_USERNAME', '')
    app.config['SMTP_PASSWORD'] = os.environ.get('SMTP_PASSWORD', '')
    app.config['FROM_EMAIL'] = os.environ.get('FROM_EMAIL', 'noreply@flourish-app.com')
    app.config['FROM_NAME'] = os.environ.get('FROM_NAME', 'Flourish Team')
    app.config['BASE_URL'] = os.environ.get('BASE_URL', 'http://localhost:5173')
    
    # File upload configuration
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
    app.config['UPLOAD_FOLDER'] = os.environ.get('UPLOAD_FOLDER', 'uploads')
    
    # AI/ML service configuration
    app.config['OPENAI_API_KEY'] = os.environ.get('OPENAI_API_KEY', '')
    app.config['TOGETHER_API_KEY'] = os.environ.get('TOGETHER_API_KEY', '')
    app.config['GOOGLE_AI_API_KEY'] = os.environ.get('GOOGLE_AI_API_KEY', '')
    app.config['GOOGLE_STUDIO_LIVE_API_KEY'] = os.environ.get('GOOGLE_STUDIO_LIVE_API_KEY', '')
    app.config['GOOGLE_CLOUD_PROJECT'] = os.environ.get('GOOGLE_CLOUD_PROJECT', '')
    app.config['ANTHROPIC_API_KEY'] = os.environ.get('ANTHROPIC_API_KEY', '')
    
    # External service configuration
    app.config['STRIPE_SECRET_KEY'] = os.environ.get('STRIPE_SECRET_KEY', '')
    app.config['STRIPE_PUBLISHABLE_KEY'] = os.environ.get('STRIPE_PUBLISHABLE_KEY', '')
    app.config['FIREBASE_CONFIG'] = os.environ.get('FIREBASE_CONFIG', '{}')
    
    # Security configuration
    app.config['WTF_CSRF_ENABLED'] = config_name == 'production'
    app.config['SESSION_COOKIE_SECURE'] = config_name == 'production'
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    
    # Logging configuration
    if config_name == 'production':
        app.config['LOG_LEVEL'] = logging.INFO
    else:
        app.config['LOG_LEVEL'] = logging.DEBUG
    
    # Configure logging
    logging.basicConfig(
        level=app.config['LOG_LEVEL'],
        format='%(asctime)s %(levelname)s %(name)s %(message)s'
    )

def initialize_extensions(app):
    """
    Initialize Flask extensions
    
    Args:
        app (Flask): Flask application instance
    """
    # Initialize database
    db.init_app(app)
    
    # Initialize CORS
    CORS(app, 
         origins=['http://localhost:3000', 'http://localhost:5173', 'https://flourish-app.com'],
         supports_credentials=True,
         allow_headers=['Content-Type', 'Authorization'],
         methods=['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])
    
    # Initialize JWT
    jwt = JWTManager(app)
    
    # JWT error handlers
    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return jsonify({
            'success': False,
            'message': 'Token has expired',
            'error_code': 'TOKEN_EXPIRED'
        }), 401
    
    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify({
            'success': False,
            'message': 'Invalid token',
            'error_code': 'INVALID_TOKEN'
        }), 401
    
    @jwt.unauthorized_loader
    def missing_token_callback(error):
        return jsonify({
            'success': False,
            'message': 'Authorization token is required',
            'error_code': 'TOKEN_REQUIRED'
        }), 401

def register_blueprints(app):
    """
    Register Flask blueprints
    
    Args:
        app (Flask): Flask application instance
    """
    # Authentication routes
    app.register_blueprint(auth_bp)
    
    # User management routes
    app.register_blueprint(user_bp)
    
    # AI services routes
    app.register_blueprint(ai_bp)
    
    # Enhanced relationship coaching routes
    app.register_blueprint(enhanced_coaching_bp)
    
    # TODO: Register additional blueprints as they are created
    # app.register_blueprint(matching_bp)
    # app.register_blueprint(messaging_bp)
    # app.register_blueprint(coaching_bp)
    # app.register_blueprint(content_bp)
    # app.register_blueprint(subscription_bp)
    # app.register_blueprint(admin_bp)

def register_error_handlers(app):
    """
    Register global error handlers
    
    Args:
        app (Flask): Flask application instance
    """
    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            'success': False,
            'message': 'Bad request',
            'error_code': 'BAD_REQUEST'
        }), 400
    
    @app.errorhandler(401)
    def unauthorized(error):
        return jsonify({
            'success': False,
            'message': 'Unauthorized access',
            'error_code': 'UNAUTHORIZED'
        }), 401
    
    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({
            'success': False,
            'message': 'Access forbidden',
            'error_code': 'FORBIDDEN'
        }), 403
    
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'success': False,
            'message': 'Resource not found',
            'error_code': 'NOT_FOUND'
        }), 404
    
    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({
            'success': False,
            'message': 'Method not allowed',
            'error_code': 'METHOD_NOT_ALLOWED'
        }), 405
    
    @app.errorhandler(429)
    def rate_limit_exceeded(error):
        return jsonify({
            'success': False,
            'message': 'Rate limit exceeded',
            'error_code': 'RATE_LIMIT_EXCEEDED'
        }), 429
    
    @app.errorhandler(500)
    def internal_server_error(error):
        app.logger.error(f'Internal server error: {str(error)}')
        return jsonify({
            'success': False,
            'message': 'Internal server error',
            'error_code': 'INTERNAL_ERROR'
        }), 500
    
    @app.errorhandler(HTTPException)
    def handle_http_exception(error):
        return jsonify({
            'success': False,
            'message': error.description,
            'error_code': f'HTTP_{error.code}'
        }), error.code

def register_middleware(app):
    """
    Register middleware functions
    
    Args:
        app (Flask): Flask application instance
    """
    @app.before_request
    def before_request():
        """Execute before each request"""
        # Check IP blocklist
        blocked_response = check_ip_blocklist()
        if blocked_response:
            return blocked_response
        
        # Log request for analytics
        app.logger.debug(f'{request.method} {request.path} from {request.remote_addr}')
    
    @app.after_request
    def after_request(response):
        """Execute after each request"""
        # Add security headers
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'DENY'
        response.headers['X-XSS-Protection'] = '1; mode=block'
        
        if app.config.get('SESSION_COOKIE_SECURE'):
            response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
        
        return response

def create_default_data():
    """
    Create default data for the application
    """
    try:
        # Create default subscription plans
        if not SubscriptionPlan.query.first():
            plans = [
                SubscriptionPlan(
                    name='Free',
                    price=0.00,
                    billing_cycle='monthly',
                    features={
                        'daily_likes': 10,
                        'monthly_super_likes': 1,
                        'basic_filters': True,
                        'messaging': True,
                        'profile_boost': False,
                        'read_receipts': False,
                        'ai_coaching': False,
                        'premium_content': False
                    },
                    is_active=True
                ),
                SubscriptionPlan(
                    name='Premium',
                    price=19.99,
                    billing_cycle='monthly',
                    features={
                        'daily_likes': 100,
                        'monthly_super_likes': 5,
                        'basic_filters': True,
                        'advanced_filters': True,
                        'messaging': True,
                        'profile_boost': True,
                        'read_receipts': True,
                        'ai_coaching': True,
                        'premium_content': True,
                        'priority_support': True
                    },
                    is_active=True
                ),
                SubscriptionPlan(
                    name='Elite',
                    price=39.99,
                    billing_cycle='monthly',
                    features={
                        'daily_likes': 'unlimited',
                        'monthly_super_likes': 'unlimited',
                        'basic_filters': True,
                        'advanced_filters': True,
                        'messaging': True,
                        'profile_boost': True,
                        'read_receipts': True,
                        'ai_coaching': True,
                        'premium_content': True,
                        'priority_support': True,
                        'personal_coach': True,
                        'exclusive_events': True,
                        'concierge_support': True
                    },
                    is_active=True
                )
            ]
            
            for plan in plans:
                db.session.add(plan)
            
            db.session.commit()
            print("Default subscription plans created")
        
    except Exception as e:
        print(f"Error creating default data: {str(e)}")
        db.session.rollback()

# Create the Flask application
app = create_app(os.environ.get('FLASK_ENV', 'development'))

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat(),
        'version': '1.0.0',
        'service': 'flourish-api'
    }), 200

# API info endpoint
@app.route('/api', methods=['GET'])
def api_info():
    """API information endpoint"""
    return jsonify({
        'name': 'Flourish Relationship Platform API',
        'version': '1.0.0',
        'description': 'Comprehensive backend API for the most advanced relationship app with multi-model AI integration',
        'features': [
            'Dr. Love AI Coach with crisis intervention',
            'Advanced compatibility matching with 10+ dimensions',
            'Real-time voice coaching with Google Studio Live',
            'Multi-model AI with OpenAI, Together.ai, and Google integration',
            'Comprehensive relationship analytics and insights',
            'Safety monitoring and content moderation',
            'Premium subscription management',
            'Real-time messaging and notifications'
        ],
        'endpoints': {
            'authentication': '/api/auth/* - User authentication and management',
            'users': '/api/users/* - User profiles and preferences',
            'ai': '/api/ai/* - AI-powered features and services',
            'coaching': '/api/ai/coaching/* - Dr. Love AI coaching sessions',
            'matching': '/api/ai/matching/* - AI-powered compatibility matching',
            'content': '/api/ai/content/* - AI content generation',
            'voice': '/api/ai/voice/* - Voice processing and synthesis',
            'safety': '/api/ai/safety/* - Content safety and moderation',
            'analytics': '/api/ai/analytics/* - Relationship insights and analytics',
            'health': '/health - Service health check'
        },
        'ai_models': {
            'primary': {
                'coaching': 'OpenAI GPT-4 Turbo + Google Gemini Pro',
                'matching': 'OpenAI GPT-4 + Custom ML models',
                'voice': 'Google Studio Live API + OpenAI Whisper',
                'safety': 'OpenAI Moderation API + Custom models'
            },
            'fallback': {
                'coaching': 'DeepSeek-R1, Llama 4 Maverick, Qwen3 235B',
                'matching': 'Qwen2.5 72B, Gemma 3 27B, Llama 3.3 70B',
                'content': 'Qwen 2.5 Coder, FLUX.1 Pro',
                'voice': 'Cartesia Sonic-2'
            }
        },
        'ai_services_status': {
            'openai': 'configured' if app.config.get('OPENAI_API_KEY') else 'not_configured',
            'together_ai': 'configured' if app.config.get('TOGETHER_API_KEY') else 'not_configured',
            'google_cloud': 'configured' if app.config.get('GOOGLE_CLOUD_PROJECT') else 'not_configured',
            'anthropic': 'configured' if app.config.get('ANTHROPIC_API_KEY') else 'not_configured'
        },
        'documentation': 'https://api.flourish-app.com/docs',
        'support': 'support@flourish-app.com'
    }), 200

if __name__ == '__main__':
    # Development server
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        debug=os.environ.get('FLASK_ENV') == 'development'
    )

