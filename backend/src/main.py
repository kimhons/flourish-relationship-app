"""
Flourish Relationship Platform - Backend API
Main Flask application with comprehensive configuration and routing
"""

import os
import sys
from datetime import datetime, timedelta
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from werkzeug.security import generate_password_hash
import logging
from logging.handlers import RotatingFileHandler

# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Import database and models
from src.models.database import db
from src.models.user import User, UserProfile, UserPreferences
from src.models.match import Match, CompatibilityScore
from src.models.conversation import Conversation, Message
from src.models.coaching import CoachingSession, SessionTranscript, CoachingInsight
from src.models.content import Article, Podcast, Meditation, Book
from src.models.subscription import Subscription, PaymentMethod, Transaction
from src.models.analytics import UserAnalytics, Event
from src.models.moderation import ModerationCase, Evidence

# Import route blueprints
from src.routes.auth import auth_bp
from src.routes.users import users_bp
from src.routes.matches import matches_bp
from src.routes.conversations import conversations_bp
from src.routes.coaching import coaching_bp
from src.routes.content import content_bp
from src.routes.subscription import subscription_bp
from src.routes.analytics import analytics_bp
from src.routes.admin import admin_bp

# Import middleware and utilities
from src.middleware.auth import auth_middleware
from src.middleware.validation import validation_middleware
from src.middleware.rate_limiting import rate_limiting_middleware
from src.utils.error_handlers import register_error_handlers
from src.utils.logging_config import setup_logging

def create_app(config_name='development'):
    """Application factory pattern for creating Flask app"""
    
    app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
    
    # ========================================================================
    # CONFIGURATION
    # ========================================================================
    
    # Basic Flask configuration
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'flourish-dev-secret-key-change-in-production')
    app.config['DEBUG'] = os.environ.get('FLASK_DEBUG', 'True').lower() == 'true'
    
    # Database configuration
    database_url = os.environ.get('DATABASE_URL')
    if database_url:
        app.config['SQLALCHEMY_DATABASE_URI'] = database_url
    else:
        app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'flourish.db')}"
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'pool_pre_ping': True,
        'pool_recycle': 300,
    }
    
    # JWT configuration
    app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'jwt-secret-string-change-in-production')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=30)
    
    # File upload configuration
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
    app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(__file__), 'uploads')
    
    # API configuration
    app.config['API_VERSION'] = 'v1'
    app.config['API_TITLE'] = 'Flourish API'
    app.config['API_DESCRIPTION'] = 'Comprehensive relationship platform API'
    
    # External service configuration
    app.config['OPENAI_API_KEY'] = os.environ.get('OPENAI_API_KEY')
    app.config['GOOGLE_GEMINI_API_KEY'] = os.environ.get('GOOGLE_GEMINI_API_KEY')
    app.config['FIREBASE_CONFIG'] = {
        'apiKey': os.environ.get('FIREBASE_API_KEY'),
        'authDomain': os.environ.get('FIREBASE_AUTH_DOMAIN'),
        'projectId': os.environ.get('FIREBASE_PROJECT_ID'),
        'storageBucket': os.environ.get('FIREBASE_STORAGE_BUCKET'),
        'messagingSenderId': os.environ.get('FIREBASE_MESSAGING_SENDER_ID'),
        'appId': os.environ.get('FIREBASE_APP_ID')
    }
    
    # Email configuration
    app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
    app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', '587'))
    app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'true').lower() == 'true'
    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
    app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER', 'noreply@flourish-app.com')
    
    # Redis configuration for caching and sessions
    app.config['REDIS_URL'] = os.environ.get('REDIS_URL', 'redis://localhost:6379/0')
    
    # Stripe configuration for payments
    app.config['STRIPE_PUBLISHABLE_KEY'] = os.environ.get('STRIPE_PUBLISHABLE_KEY')
    app.config['STRIPE_SECRET_KEY'] = os.environ.get('STRIPE_SECRET_KEY')
    app.config['STRIPE_WEBHOOK_SECRET'] = os.environ.get('STRIPE_WEBHOOK_SECRET')
    
    # ========================================================================
    # EXTENSIONS INITIALIZATION
    # ========================================================================
    
    # Initialize database
    db.init_app(app)
    
    # Initialize CORS
    CORS(app, origins=['*'], supports_credentials=True)
    
    # Initialize JWT
    jwt = JWTManager(app)
    
    # Initialize rate limiter
    limiter = Limiter(
        app,
        key_func=get_remote_address,
        default_limits=["1000 per hour", "100 per minute"]
    )
    
    # ========================================================================
    # MIDDLEWARE REGISTRATION
    # ========================================================================
    
    # Register middleware
    auth_middleware(app)
    validation_middleware(app)
    rate_limiting_middleware(app, limiter)
    
    # ========================================================================
    # BLUEPRINT REGISTRATION
    # ========================================================================
    
    # Register API blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(users_bp, url_prefix='/api/users')
    app.register_blueprint(matches_bp, url_prefix='/api/matches')
    app.register_blueprint(conversations_bp, url_prefix='/api/conversations')
    app.register_blueprint(coaching_bp, url_prefix='/api/coaching')
    app.register_blueprint(content_bp, url_prefix='/api/content')
    app.register_blueprint(subscription_bp, url_prefix='/api/subscription')
    app.register_blueprint(analytics_bp, url_prefix='/api/analytics')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')
    
    # ========================================================================
    # ERROR HANDLERS
    # ========================================================================
    
    register_error_handlers(app)
    
    # ========================================================================
    # LOGGING CONFIGURATION
    # ========================================================================
    
    setup_logging(app)
    
    # ========================================================================
    # DATABASE INITIALIZATION
    # ========================================================================
    
    @app.before_first_request
    def create_tables():
        """Create database tables and initialize default data"""
        db.create_all()
        
        # Create default admin user if it doesn't exist
        admin_user = User.query.filter_by(email='admin@flourish-app.com').first()
        if not admin_user:
            admin_user = User(
                email='admin@flourish-app.com',
                username='admin',
                first_name='Admin',
                last_name='User',
                password_hash=generate_password_hash('admin123'),
                is_verified=True,
                is_admin=True,
                subscription_tier='elite'
            )
            db.session.add(admin_user)
            db.session.commit()
            app.logger.info('Default admin user created')
    
    # ========================================================================
    # JWT CONFIGURATION
    # ========================================================================
    
    @jwt.user_identity_loader
    def user_identity_lookup(user):
        return user.id
    
    @jwt.user_lookup_loader
    def user_lookup_callback(_jwt_header, jwt_data):
        identity = jwt_data["sub"]
        return User.query.filter_by(id=identity).one_or_none()
    
    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return jsonify({"error": "Token has expired"}), 401
    
    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify({"error": "Invalid token"}), 401
    
    @jwt.unauthorized_loader
    def missing_token_callback(error):
        return jsonify({"error": "Authorization token is required"}), 401
    
    # ========================================================================
    # HEALTH CHECK AND API INFO
    # ========================================================================
    
    @app.route('/health')
    def health_check():
        """Health check endpoint"""
        return jsonify({
            'status': 'healthy',
            'timestamp': datetime.utcnow().isoformat(),
            'version': app.config['API_VERSION'],
            'environment': config_name
        })
    
    @app.route('/api')
    def api_info():
        """API information endpoint"""
        return jsonify({
            'title': app.config['API_TITLE'],
            'description': app.config['API_DESCRIPTION'],
            'version': app.config['API_VERSION'],
            'endpoints': {
                'auth': '/api/auth',
                'users': '/api/users',
                'matches': '/api/matches',
                'conversations': '/api/conversations',
                'coaching': '/api/coaching',
                'content': '/api/content',
                'subscription': '/api/subscription',
                'analytics': '/api/analytics',
                'admin': '/api/admin'
            },
            'documentation': '/api/docs',
            'health': '/health'
        })
    
    # ========================================================================
    # FRONTEND SERVING
    # ========================================================================
    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_frontend(path):
        """Serve frontend application"""
        static_folder_path = app.static_folder
        if static_folder_path is None:
            return jsonify({"error": "Static folder not configured"}), 404

        if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
            return send_from_directory(static_folder_path, path)
        else:
            index_path = os.path.join(static_folder_path, 'index.html')
            if os.path.exists(index_path):
                return send_from_directory(static_folder_path, 'index.html')
            else:
                return jsonify({
                    "message": "Flourish API is running",
                    "api_info": "/api",
                    "health": "/health"
                })
    
    return app

# ============================================================================
# APPLICATION INSTANCE
# ============================================================================

# Create application instance
app = create_app()

if __name__ == '__main__':
    # Ensure upload directory exists
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    # Run the application
    port = int(os.environ.get('PORT', 5000))
    app.run(
        host='0.0.0.0',
        port=port,
        debug=app.config['DEBUG'],
        threaded=True
    )

