"""
Authentication routes for Flourish Relationship Platform
Handles user registration, login, logout, password reset, and token management
"""

from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    create_access_token, create_refresh_token, jwt_required, 
    get_jwt_identity, get_jwt, verify_jwt_in_request
)
from datetime import datetime, timedelta
import re
import secrets

from ..models.database import db
from ..models.user import User, UserProfile, UserPreferences
from ..utils.validators import validate_email, validate_password, validate_phone
from ..utils.email_service import send_verification_email, send_password_reset_email
from ..utils.rate_limiter import rate_limit

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

# Blacklisted tokens for logout functionality
blacklisted_tokens = set()

@auth_bp.route('/register', methods=['POST'])
@rate_limit(max_requests=5, window=300)  # 5 requests per 5 minutes
def register():
    """
    Register a new user account
    
    Expected JSON payload:
    {
        "email": "user@example.com",
        "password": "securepassword123",
        "first_name": "John",
        "last_name": "Doe",
        "date_of_birth": "1990-01-01",
        "gender": "male",
        "phone": "+1234567890"
    }
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['email', 'password', 'first_name', 'last_name', 'date_of_birth', 'gender']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'message': f'{field.replace("_", " ").title()} is required'
                }), 400
        
        # Validate email format
        if not validate_email(data['email']):
            return jsonify({
                'success': False,
                'message': 'Invalid email format'
            }), 400
        
        # Check if user already exists
        existing_user = User.query.filter_by(email=data['email'].lower()).first()
        if existing_user:
            return jsonify({
                'success': False,
                'message': 'An account with this email already exists'
            }), 409
        
        # Validate password strength
        password_validation = validate_password(data['password'])
        if not password_validation['valid']:
            return jsonify({
                'success': False,
                'message': password_validation['message']
            }), 400
        
        # Validate phone number if provided
        if data.get('phone') and not validate_phone(data['phone']):
            return jsonify({
                'success': False,
                'message': 'Invalid phone number format'
            }), 400
        
        # Validate date of birth (must be 18+ years old)
        try:
            birth_date = datetime.strptime(data['date_of_birth'], '%Y-%m-%d').date()
            today = datetime.now().date()
            age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
            
            if age < 18:
                return jsonify({
                    'success': False,
                    'message': 'You must be at least 18 years old to register'
                }), 400
        except ValueError:
            return jsonify({
                'success': False,
                'message': 'Invalid date format. Use YYYY-MM-DD'
            }), 400
        
        # Create new user
        user = User(
            email=data['email'].lower(),
            password_hash=generate_password_hash(data['password']),
            first_name=data['first_name'].strip(),
            last_name=data['last_name'].strip(),
            date_of_birth=birth_date,
            gender=data['gender'].lower(),
            phone=data.get('phone'),
            is_verified=False,
            verification_token=secrets.token_urlsafe(32),
            created_at=datetime.utcnow(),
            last_active=datetime.utcnow()
        )
        
        # Create user profile
        profile = UserProfile(
            user=user,
            bio='',
            location='',
            occupation='',
            education='',
            height=0,
            relationship_status='single',
            looking_for='serious_relationship',
            has_children=False,
            wants_children='maybe',
            smoking='never',
            drinking='socially',
            religion='',
            political_views='',
            interests=[],
            photos=[],
            profile_completion=20  # Basic info completed
        )
        
        # Create user preferences with default values
        preferences = UserPreferences(
            user=user,
            min_age=max(18, age - 10),
            max_age=min(100, age + 10),
            max_distance=50,
            preferred_gender='any' if data['gender'] == 'non_binary' else ('male' if data['gender'] == 'female' else 'female'),
            relationship_type='serious_relationship',
            has_children_preference='no_preference',
            smoking_preference='no_preference',
            drinking_preference='no_preference',
            religion_preference='no_preference',
            education_preference='no_preference'
        )
        
        # Save to database
        db.session.add(user)
        db.session.add(profile)
        db.session.add(preferences)
        db.session.commit()
        
        # Send verification email
        try:
            send_verification_email(user.email, user.verification_token)
        except Exception as e:
            current_app.logger.error(f"Failed to send verification email: {str(e)}")
            # Don't fail registration if email fails
        
        # Create access and refresh tokens
        access_token = create_access_token(
            identity=user.id,
            expires_delta=timedelta(hours=1)
        )
        refresh_token = create_refresh_token(
            identity=user.id,
            expires_delta=timedelta(days=30)
        )
        
        return jsonify({
            'success': True,
            'message': 'Account created successfully! Please check your email to verify your account.',
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_verified': user.is_verified,
                'profile_completion': profile.profile_completion
            },
            'tokens': {
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        }), 201
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Registration error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred during registration. Please try again.'
        }), 500

@auth_bp.route('/login', methods=['POST'])
@rate_limit(max_requests=10, window=300)  # 10 requests per 5 minutes
def login():
    """
    Authenticate user and return tokens
    
    Expected JSON payload:
    {
        "email": "user@example.com",
        "password": "securepassword123",
        "remember_me": true
    }
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('email') or not data.get('password'):
            return jsonify({
                'success': False,
                'message': 'Email and password are required'
            }), 400
        
        # Find user by email
        user = User.query.filter_by(email=data['email'].lower()).first()
        
        if not user or not check_password_hash(user.password_hash, data['password']):
            return jsonify({
                'success': False,
                'message': 'Invalid email or password'
            }), 401
        
        # Check if account is active
        if not user.is_active:
            return jsonify({
                'success': False,
                'message': 'Your account has been deactivated. Please contact support.'
            }), 403
        
        # Update last active timestamp
        user.last_active = datetime.utcnow()
        user.login_count += 1
        db.session.commit()
        
        # Create tokens
        remember_me = data.get('remember_me', False)
        access_expires = timedelta(hours=24) if remember_me else timedelta(hours=1)
        refresh_expires = timedelta(days=90) if remember_me else timedelta(days=30)
        
        access_token = create_access_token(
            identity=user.id,
            expires_delta=access_expires
        )
        refresh_token = create_refresh_token(
            identity=user.id,
            expires_delta=refresh_expires
        )
        
        # Get user profile for response
        profile = UserProfile.query.filter_by(user_id=user.id).first()
        
        return jsonify({
            'success': True,
            'message': 'Login successful',
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_verified': user.is_verified,
                'profile_completion': profile.profile_completion if profile else 0,
                'subscription_tier': user.subscription_tier,
                'last_active': user.last_active.isoformat()
            },
            'tokens': {
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        }), 200
        
    except Exception as e:
        current_app.logger.error(f"Login error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred during login. Please try again.'
        }), 500

@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    """
    Logout user and blacklist current token
    """
    try:
        jti = get_jwt()['jti']  # JWT ID
        blacklisted_tokens.add(jti)
        
        return jsonify({
            'success': True,
            'message': 'Successfully logged out'
        }), 200
        
    except Exception as e:
        current_app.logger.error(f"Logout error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred during logout'
        }), 500

@auth_bp.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    """
    Refresh access token using refresh token
    """
    try:
        current_user_id = get_jwt_identity()
        
        # Verify user still exists and is active
        user = User.query.get(current_user_id)
        if not user or not user.is_active:
            return jsonify({
                'success': False,
                'message': 'Invalid user or account deactivated'
            }), 401
        
        # Create new access token
        new_access_token = create_access_token(
            identity=current_user_id,
            expires_delta=timedelta(hours=1)
        )
        
        return jsonify({
            'success': True,
            'access_token': new_access_token
        }), 200
        
    except Exception as e:
        current_app.logger.error(f"Token refresh error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Failed to refresh token'
        }), 500

@auth_bp.route('/verify-email', methods=['POST'])
def verify_email():
    """
    Verify user email with verification token
    
    Expected JSON payload:
    {
        "token": "verification_token_here"
    }
    """
    try:
        data = request.get_json()
        token = data.get('token')
        
        if not token:
            return jsonify({
                'success': False,
                'message': 'Verification token is required'
            }), 400
        
        # Find user by verification token
        user = User.query.filter_by(verification_token=token).first()
        
        if not user:
            return jsonify({
                'success': False,
                'message': 'Invalid or expired verification token'
            }), 400
        
        # Check if already verified
        if user.is_verified:
            return jsonify({
                'success': True,
                'message': 'Email is already verified'
            }), 200
        
        # Verify the user
        user.is_verified = True
        user.verification_token = None
        user.verified_at = datetime.utcnow()
        
        # Update profile completion
        profile = UserProfile.query.filter_by(user_id=user.id).first()
        if profile:
            profile.profile_completion += 10  # Email verification bonus
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Email verified successfully!'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Email verification error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred during verification'
        }), 500

@auth_bp.route('/forgot-password', methods=['POST'])
@rate_limit(max_requests=3, window=300)  # 3 requests per 5 minutes
def forgot_password():
    """
    Send password reset email
    
    Expected JSON payload:
    {
        "email": "user@example.com"
    }
    """
    try:
        data = request.get_json()
        email = data.get('email')
        
        if not email:
            return jsonify({
                'success': False,
                'message': 'Email is required'
            }), 400
        
        user = User.query.filter_by(email=email.lower()).first()
        
        # Always return success to prevent email enumeration
        if user:
            # Generate reset token
            reset_token = secrets.token_urlsafe(32)
            user.password_reset_token = reset_token
            user.password_reset_expires = datetime.utcnow() + timedelta(hours=1)
            db.session.commit()
            
            # Send reset email
            try:
                send_password_reset_email(user.email, reset_token)
            except Exception as e:
                current_app.logger.error(f"Failed to send password reset email: {str(e)}")
        
        return jsonify({
            'success': True,
            'message': 'If an account with that email exists, a password reset link has been sent.'
        }), 200
        
    except Exception as e:
        current_app.logger.error(f"Forgot password error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred. Please try again.'
        }), 500

@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    """
    Reset password using reset token
    
    Expected JSON payload:
    {
        "token": "reset_token_here",
        "new_password": "newsecurepassword123"
    }
    """
    try:
        data = request.get_json()
        token = data.get('token')
        new_password = data.get('new_password')
        
        if not token or not new_password:
            return jsonify({
                'success': False,
                'message': 'Reset token and new password are required'
            }), 400
        
        # Validate new password
        password_validation = validate_password(new_password)
        if not password_validation['valid']:
            return jsonify({
                'success': False,
                'message': password_validation['message']
            }), 400
        
        # Find user by reset token
        user = User.query.filter_by(password_reset_token=token).first()
        
        if not user or not user.password_reset_expires or user.password_reset_expires < datetime.utcnow():
            return jsonify({
                'success': False,
                'message': 'Invalid or expired reset token'
            }), 400
        
        # Update password
        user.password_hash = generate_password_hash(new_password)
        user.password_reset_token = None
        user.password_reset_expires = None
        user.password_changed_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Password reset successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Password reset error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred during password reset'
        }), 500

@auth_bp.route('/change-password', methods=['POST'])
@jwt_required()
def change_password():
    """
    Change password for authenticated user
    
    Expected JSON payload:
    {
        "current_password": "currentpassword123",
        "new_password": "newsecurepassword123"
    }
    """
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        current_password = data.get('current_password')
        new_password = data.get('new_password')
        
        if not current_password or not new_password:
            return jsonify({
                'success': False,
                'message': 'Current password and new password are required'
            }), 400
        
        # Get user
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({
                'success': False,
                'message': 'User not found'
            }), 404
        
        # Verify current password
        if not check_password_hash(user.password_hash, current_password):
            return jsonify({
                'success': False,
                'message': 'Current password is incorrect'
            }), 400
        
        # Validate new password
        password_validation = validate_password(new_password)
        if not password_validation['valid']:
            return jsonify({
                'success': False,
                'message': password_validation['message']
            }), 400
        
        # Update password
        user.password_hash = generate_password_hash(new_password)
        user.password_changed_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Password changed successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Change password error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while changing password'
        }), 500

@auth_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    """
    Get current authenticated user information
    """
    try:
        current_user_id = get_jwt_identity()
        
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({
                'success': False,
                'message': 'User not found'
            }), 404
        
        profile = UserProfile.query.filter_by(user_id=user.id).first()
        
        return jsonify({
            'success': True,
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'date_of_birth': user.date_of_birth.isoformat() if user.date_of_birth else None,
                'gender': user.gender,
                'phone': user.phone,
                'is_verified': user.is_verified,
                'subscription_tier': user.subscription_tier,
                'profile_completion': profile.profile_completion if profile else 0,
                'created_at': user.created_at.isoformat(),
                'last_active': user.last_active.isoformat()
            }
        }), 200
        
    except Exception as e:
        current_app.logger.error(f"Get current user error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while fetching user information'
        }), 500

# JWT token blacklist checker
@auth_bp.before_app_request
def check_if_token_revoked():
    """
    Check if JWT token is blacklisted before processing request
    """
    try:
        verify_jwt_in_request(optional=True)
        jti = get_jwt().get('jti') if get_jwt() else None
        if jti and jti in blacklisted_tokens:
            return jsonify({
                'success': False,
                'message': 'Token has been revoked'
            }), 401
    except:
        pass  # Token verification will be handled by route decorators

