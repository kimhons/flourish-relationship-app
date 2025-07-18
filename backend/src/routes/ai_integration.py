"""
AI Integration Routes - Connect backend with AI services
"""

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
import asyncio
import logging
import sys
import os

# Add ai-services to path
ai_services_path = os.path.join(os.path.dirname(__file__), '../../../ai-services/src')
sys.path.append(ai_services_path)

from ai_service_orchestrator import orchestrator

logger = logging.getLogger(__name__)

ai_integration_bp = Blueprint('ai_integration', __name__)

@ai_integration_bp.route('/ai/coaching', methods=['POST'])
@jwt_required()
async def get_coaching_advice():
    """Get AI coaching advice"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        message = data.get('message', '')
        context = data.get('context', {})
        
        # Get coaching advice from AI orchestrator
        advice = await orchestrator.get_coaching_advice(user_id, message, context)
        
        return jsonify({
            'success': True,
            'data': advice
        })
        
    except Exception as e:
        logger.error(f"Error getting coaching advice: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/matching', methods=['POST'])
@jwt_required()
async def find_matches():
    """Find potential matches using AI"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        preferences = data.get('preferences', {})
        
        # Find matches using AI orchestrator
        matches = await orchestrator.find_matches(user_id, preferences)
        
        return jsonify({
            'success': True,
            'data': matches
        })
        
    except Exception as e:
        logger.error(f"Error finding matches: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/relationship-analysis', methods=['POST'])
@jwt_required()
async def analyze_relationship():
    """Analyze relationship dynamics"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        relationship_data = data.get('relationship_data', {})
        
        # Analyze relationship using AI orchestrator
        analysis = await orchestrator.analyze_relationship(user_id, relationship_data)
        
        return jsonify({
            'success': True,
            'data': analysis
        })
        
    except Exception as e:
        logger.error(f"Error analyzing relationship: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/crisis-detection', methods=['POST'])
@jwt_required()
async def detect_crisis():
    """Detect potential crisis situations"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        message = data.get('message', '')
        
        # Detect crisis using AI orchestrator
        crisis_info = await orchestrator.detect_crisis(user_id, message)
        
        return jsonify({
            'success': True,
            'data': crisis_info
        })
        
    except Exception as e:
        logger.error(f"Error detecting crisis: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/content-curation', methods=['POST'])
@jwt_required()
async def curate_content():
    """Get personalized content recommendations"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        interests = data.get('interests', [])
        
        # Curate content using AI orchestrator
        content = await orchestrator.curate_content(user_id, interests)
        
        return jsonify({
            'success': True,
            'data': content
        })
        
    except Exception as e:
        logger.error(f"Error curating content: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/health', methods=['GET'])
async def ai_health_check():
    """Check AI services health"""
    try:
        # Initialize orchestrator if not already done
        if not orchestrator.agents:
            await orchestrator.initialize()
        
        # Get health status
        health = await orchestrator.health_check()
        
        return jsonify({
            'success': True,
            'data': health
        })
        
    except Exception as e:
        logger.error(f"Error checking AI health: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@ai_integration_bp.route('/ai/metrics', methods=['GET'])
async def get_ai_metrics():
    """Get AI services metrics"""
    try:
        # Get metrics from orchestrator
        metrics = orchestrator.get_metrics()
        
        return jsonify({
            'success': True,
            'data': metrics
        })
        
    except Exception as e:
        logger.error(f"Error getting AI metrics: {e}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

# Initialize AI services when blueprint is registered
async def initialize_ai_services():
    """Initialize AI services"""
    try:
        await orchestrator.initialize()
        logger.info("AI services initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize AI services: {e}")
        raise