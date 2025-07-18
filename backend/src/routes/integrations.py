"""
Secure Integration Routes
Handles third-party integrations with proper security
"""

import os
import logging
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
import requests
from functools import wraps
from datetime import datetime, timedelta
import hashlib
import hmac

from ..middleware.prompt_security import validate_prompt_request
from ..utils.rate_limiter import rate_limit
from ..utils.security_validators import validate_integration_request

logger = logging.getLogger(__name__)

integrations_bp = Blueprint('integrations', __name__, url_prefix='/api/integrations')

# Integration configuration (loaded from secure environment)
INTEGRATION_CONFIG = {
    'salesforce': {
        'auth_url': 'https://login.salesforce.com/services/oauth2/token',
        'api_version': 'v54.0',
        'scopes': ['api', 'refresh_token'],
        'rate_limit': '100/hour'
    },
    'hubspot': {
        'auth_url': 'https://api.hubapi.com/oauth/v1/token',
        'api_version': 'v3',
        'scopes': ['contacts'],
        'rate_limit': '100/hour'
    }
}

def verify_integration_access(integration_name):
    """Decorator to verify user has access to integration"""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            user_id = get_jwt_identity()
            
            # Check if user has premium subscription
            # In production, check database for user's subscription status
            if not check_user_subscription(user_id):
                return jsonify({'error': 'Premium subscription required'}), 403
            
            # Check if integration is enabled for user
            if not check_integration_enabled(user_id, integration_name):
                return jsonify({'error': f'{integration_name} integration not enabled'}), 403
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator

def check_user_subscription(user_id):
    """Check if user has active premium subscription"""
    # TODO: Implement actual database check
    return True

def check_integration_enabled(user_id, integration_name):
    """Check if specific integration is enabled for user"""
    # TODO: Implement actual database check
    return True

@integrations_bp.route('/salesforce/auth', methods=['POST'])
@jwt_required()
@rate_limit("5 per minute")
@verify_integration_access('salesforce')
def salesforce_auth():
    """Securely handle Salesforce authentication"""
    try:
        user_id = get_jwt_identity()
        
        # Get credentials from secure environment
        client_id = os.environ.get('SALESFORCE_CLIENT_ID')
        client_secret = os.environ.get('SALESFORCE_CLIENT_SECRET')
        
        if not client_id or not client_secret:
            logger.error(f"Missing Salesforce credentials for user {user_id}")
            return jsonify({'error': 'Integration not configured'}), 500
        
        # Authenticate with Salesforce
        auth_data = {
            'grant_type': 'client_credentials',
            'client_id': client_id,
            'client_secret': client_secret
        }
        
        response = requests.post(
            INTEGRATION_CONFIG['salesforce']['auth_url'],
            data=auth_data,
            timeout=10
        )
        
        if response.status_code != 200:
            logger.error(f"Salesforce auth failed for user {user_id}: {response.text}")
            return jsonify({'error': 'Authentication failed'}), 401
        
        auth_result = response.json()
        
        # Store token securely with expiration
        store_integration_token(
            user_id=user_id,
            integration='salesforce',
            token=auth_result['access_token'],
            expires_in=auth_result.get('expires_in', 3600)
        )
        
        # Return sanitized response
        return jsonify({
            'success': True,
            'access_token': auth_result['access_token'],
            'instance_url': auth_result.get('instance_url'),
            'expires_in': auth_result.get('expires_in', 3600)
        }), 200
        
    except requests.RequestException as e:
        logger.error(f"Salesforce auth request failed: {str(e)}")
        return jsonify({'error': 'External service unavailable'}), 503
    except Exception as e:
        logger.error(f"Salesforce auth error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@integrations_bp.route('/salesforce/contact', methods=['POST'])
@jwt_required()
@rate_limit("20 per minute")
@verify_integration_access('salesforce')
@validate_prompt_request
def create_salesforce_contact():
    """Create contact in Salesforce with security validation"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        # Validate input data
        if not data or 'contact_data' not in data:
            return jsonify({'error': 'Invalid request data'}), 400
        
        contact_data = validate_integration_request(data['contact_data'], 'salesforce_contact')
        
        # Get stored access token
        access_token = get_integration_token(user_id, 'salesforce')
        if not access_token:
            return jsonify({'error': 'Authentication required'}), 401
        
        # Get instance URL from stored data
        instance_url = get_integration_instance_url(user_id, 'salesforce')
        
        # Create contact in Salesforce
        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }
        
        sf_url = f"{instance_url}/services/data/{INTEGRATION_CONFIG['salesforce']['api_version']}/sobjects/Contact"
        
        response = requests.post(
            sf_url,
            json=contact_data,
            headers=headers,
            timeout=10
        )
        
        if response.status_code == 201:
            result = response.json()
            
            # Log successful integration
            log_integration_activity(
                user_id=user_id,
                integration='salesforce',
                action='create_contact',
                status='success',
                details={'contact_id': result.get('id')}
            )
            
            return jsonify({
                'success': True,
                'contact_id': result.get('id'),
                'message': 'Contact created successfully'
            }), 201
        else:
            logger.error(f"Salesforce contact creation failed: {response.text}")
            return jsonify({'error': 'Failed to create contact'}), 400
            
    except Exception as e:
        logger.error(f"Salesforce contact creation error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@integrations_bp.route('/hubspot/auth', methods=['POST'])
@jwt_required()
@rate_limit("5 per minute")
@verify_integration_access('hubspot')
def hubspot_auth():
    """Securely handle HubSpot authentication"""
    # Similar implementation to Salesforce
    pass

def store_integration_token(user_id, integration, token, expires_in):
    """Store integration token securely"""
    # TODO: Implement secure token storage in database
    # Should encrypt token before storage
    pass

def get_integration_token(user_id, integration):
    """Retrieve stored integration token"""
    # TODO: Implement token retrieval from database
    # Should decrypt token after retrieval
    return None

def get_integration_instance_url(user_id, integration):
    """Get integration instance URL"""
    # TODO: Implement instance URL retrieval
    return None

def log_integration_activity(user_id, integration, action, status, details=None):
    """Log integration activity for audit trail"""
    try:
        activity = {
            'user_id': user_id,
            'integration': integration,
            'action': action,
            'status': status,
            'timestamp': datetime.utcnow().isoformat(),
            'details': details or {}
        }
        # TODO: Store in database
        logger.info(f"Integration activity: {activity}")
    except Exception as e:
        logger.error(f"Failed to log integration activity: {str(e)}")

# Webhook security
def verify_webhook_signature(integration_name):
    """Decorator to verify webhook signatures"""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if integration_name == 'salesforce':
                # Verify Salesforce webhook signature
                signature = request.headers.get('X-SFDC-Signature')
                if not verify_salesforce_signature(request.data, signature):
                    return jsonify({'error': 'Invalid signature'}), 401
            elif integration_name == 'hubspot':
                # Verify HubSpot webhook signature
                signature = request.headers.get('X-HubSpot-Signature')
                if not verify_hubspot_signature(request.data, signature):
                    return jsonify({'error': 'Invalid signature'}), 401
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator

def verify_salesforce_signature(payload, signature):
    """Verify Salesforce webhook signature"""
    secret = os.environ.get('SALESFORCE_WEBHOOK_SECRET')
    if not secret:
        return False
    
    expected = hmac.new(
        secret.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(expected, signature)

def verify_hubspot_signature(payload, signature):
    """Verify HubSpot webhook signature"""
    secret = os.environ.get('HUBSPOT_WEBHOOK_SECRET')
    if not secret:
        return False
    
    expected = hmac.new(
        secret.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(expected, signature)

@integrations_bp.route('/webhook/salesforce', methods=['POST'])
@verify_webhook_signature('salesforce')
def salesforce_webhook():
    """Handle Salesforce webhooks securely"""
    try:
        data = request.get_json()
        # Process webhook data
        logger.info(f"Received Salesforce webhook: {data.get('event_type')}")
        return jsonify({'received': True}), 200
    except Exception as e:
        logger.error(f"Salesforce webhook error: {str(e)}")
        return jsonify({'error': 'Webhook processing failed'}), 500