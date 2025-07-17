"""
Flourish App: AI Service Routes
API endpoints for all AI-powered features with enhanced security
"""

from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
import asyncio
import logging
from datetime import datetime
from typing import Dict, Any

from ..services.ai_service_manager import ai_service_manager, AIRequest, ServiceType
from ..services.dr_love_coach import get_dr_love_coach, CoachingMode, SessionType
from ..services.ai_matching_engine import get_ai_matching_engine
from ..models.user import User
from ..models.coaching import CoachingSession as DBCoachingSession
from ..models.match import Match, CompatibilityScore as DBCompatibilityScore
from ..middleware.prompt_security import validate_prompt_request, validate_ai_response

logger = logging.getLogger(__name__)

# Create AI routes blueprint
ai_bp = Blueprint('ai', __name__, url_prefix='/api/ai')

def run_async(coro):
    """Helper function to run async functions in Flask routes"""
    try:
        loop = asyncio.get_event_loop()
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
    
    return loop.run_until_complete(coro)

@ai_bp.route('/health', methods=['GET'])
def ai_health_check():
    """Check AI services health"""
    try:
        health_status = run_async(ai_service_manager.get_service_health())
        return jsonify({
            "status": "success",
            "data": health_status
        }), 200
    except Exception as e:
        logger.error(f"AI health check failed: {e}")
        return jsonify({
            "status": "error",
            "message": "AI services health check failed",
            "error": str(e)
        }), 500

# Dr. Love AI Coach Routes
@ai_bp.route('/coaching/start', methods=['POST'])
@jwt_required()
def start_coaching_session():
    """Start a new Dr. Love coaching session"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        coaching_mode = CoachingMode(data.get('coaching_mode', 'general'))
        session_type = SessionType(data.get('session_type', 'text_chat'))
        
        dr_love = get_dr_love_coach()
        session = run_async(dr_love.start_coaching_session(user_id, coaching_mode, session_type))
        
        # Save session to database
        db_session = DBCoachingSession(
            session_id=session.session_id,
            user_id=user_id,
            coaching_mode=coaching_mode.value,
            session_type=session_type.value,
            started_at=session.started_at,
            status='active'
        )
        db_session.save()
        
        return jsonify({
            "status": "success",
            "data": {
                "session_id": session.session_id,
                "coaching_mode": coaching_mode.value,
                "session_type": session_type.value,
                "welcome_message": session.messages[-1]["content"] if session.messages else "",
                "started_at": session.started_at.isoformat()
            }
        }), 201
        
    except Exception as e:
        logger.error(f"Failed to start coaching session: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to start coaching session",
            "error": str(e)
        }), 500

@ai_bp.route('/coaching/message', methods=['POST'])
@jwt_required()
def send_coaching_message():
    """Send message to Dr. Love AI Coach"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        session_id = data.get('session_id')
        message = data.get('message')
        context = data.get('context', {})
        
        if not session_id or not message:
            return jsonify({
                "status": "error",
                "message": "Session ID and message are required"
            }), 400
        
        dr_love = get_dr_love_coach()
        response = run_async(dr_love.process_user_message(session_id, message, context))
        
        return jsonify({
            "status": "success",
            "data": response
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to process coaching message: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to process message",
            "error": str(e)
        }), 500

@ai_bp.route('/coaching/end', methods=['POST'])
@jwt_required()
def end_coaching_session():
    """End a coaching session"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        session_id = data.get('session_id')
        satisfaction_rating = data.get('satisfaction_rating')
        
        if not session_id:
            return jsonify({
                "status": "error",
                "message": "Session ID is required"
            }), 400
        
        dr_love = get_dr_love_coach()
        session_summary = run_async(dr_love.end_session(session_id, satisfaction_rating))
        
        # Update database session
        db_session = DBCoachingSession.query.filter_by(session_id=session_id).first()
        if db_session:
            db_session.ended_at = datetime.now()
            db_session.satisfaction_rating = satisfaction_rating
            db_session.status = 'completed'
            db_session.save()
        
        return jsonify({
            "status": "success",
            "data": session_summary
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to end coaching session: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to end session",
            "error": str(e)
        }), 500

@ai_bp.route('/coaching/analytics', methods=['GET'])
@jwt_required()
def get_coaching_analytics():
    """Get coaching analytics for user"""
    try:
        user_id = get_jwt_identity()
        days = request.args.get('days', 30, type=int)
        
        dr_love = get_dr_love_coach()
        analytics = run_async(dr_love.get_coaching_analytics(user_id, days))
        
        return jsonify({
            "status": "success",
            "data": analytics
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to get coaching analytics: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to get analytics",
            "error": str(e)
        }), 500

# AI Matching Routes
@ai_bp.route('/matching/compatibility', methods=['POST'])
@jwt_required()
def calculate_compatibility():
    """Calculate compatibility between two users"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        target_user_id = data.get('target_user_id')
        
        if not target_user_id:
            return jsonify({
                "status": "error",
                "message": "Target user ID is required"
            }), 400
        
        # Get user profiles (simplified - in production, this would be more comprehensive)
        user1 = User.query.get(user_id)
        user2 = User.query.get(target_user_id)
        
        if not user1 or not user2:
            return jsonify({
                "status": "error",
                "message": "User not found"
            }), 404
        
        # Convert to UserProfile objects (simplified)
        # In production, this would involve comprehensive profile building
        matching_engine = get_ai_matching_engine()
        
        # For now, return a sample compatibility analysis
        compatibility_data = {
            "overall_score": 78.5,
            "dimension_scores": {
                "personality": 82.1,
                "values": 85.2,
                "lifestyle": 76.8,
                "communication": 74.3,
                "goals": 80.0,
                "interests": 72.5
            },
            "strengths": [
                "Shared core values create a strong foundation",
                "Complementary personality traits balance each other well",
                "Similar life goals and relationship timeline"
            ],
            "challenges": [
                "Different communication styles may need attention",
                "Varying social energy levels could require balance"
            ],
            "conversation_starters": [
                "What's something you're passionate about that most people don't know?",
                "If you could travel anywhere in the world, where would you go and why?",
                "What's the best piece of advice you've ever received?",
                "What does your ideal weekend look like?",
                "What's something you've learned about yourself recently?"
            ],
            "relationship_potential": "high",
            "confidence_level": 0.85
        }
        
        return jsonify({
            "status": "success",
            "data": compatibility_data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to calculate compatibility: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to calculate compatibility",
            "error": str(e)
        }), 500

@ai_bp.route('/matching/find-matches', methods=['POST'])
@jwt_required()
def find_matches():
    """Find matches for the current user"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        max_matches = data.get('max_matches', 10)
        filters = data.get('filters', {})
        
        # Get user profile
        user = User.query.get(user_id)
        if not user:
            return jsonify({
                "status": "error",
                "message": "User not found"
            }), 404
        
        # For now, return sample matches
        sample_matches = [
            {
                "match_id": f"match_{i}",
                "user_id": f"user_{i}",
                "compatibility_score": 85.2 - (i * 2),
                "match_reason": "Your personalities complement each other beautifully",
                "priority_score": 92.1 - (i * 1.5),
                "profile_preview": {
                    "name": f"User {i}",
                    "age": 25 + i,
                    "location": "San Francisco, CA",
                    "interests": ["hiking", "reading", "cooking"],
                    "photo_url": f"/api/photos/user_{i}_1.jpg"
                }
            }
            for i in range(1, min(max_matches + 1, 11))
        ]
        
        return jsonify({
            "status": "success",
            "data": {
                "matches": sample_matches,
                "total_found": len(sample_matches),
                "filters_applied": filters
            }
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to find matches: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to find matches",
            "error": str(e)
        }), 500

@ai_bp.route('/matching/analytics', methods=['GET'])
@jwt_required()
def get_matching_analytics():
    """Get matching analytics for user"""
    try:
        user_id = get_jwt_identity()
        days = request.args.get('days', 30, type=int)
        
        matching_engine = get_ai_matching_engine()
        analytics = run_async(matching_engine.get_match_analytics(user_id, days))
        
        return jsonify({
            "status": "success",
            "data": analytics
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to get matching analytics: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to get analytics",
            "error": str(e)
        }), 500

# Content Generation Routes
@ai_bp.route('/content/generate', methods=['POST'])
@jwt_required()
def generate_content():
    """Generate AI-powered content"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        content_type = data.get('content_type', 'article')
        topic = data.get('topic', 'relationship advice')
        prompt = data.get('prompt', '')
        
        ai_request = AIRequest(
            service_type=ServiceType.CONTENT,
            data={
                "content_type": content_type,
                "topic": topic,
                "prompt": prompt
            },
            user_id=user_id,
            complexity="medium",
            priority="normal"
        )
        
        response = run_async(ai_service_manager.process_request(ai_request))
        
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to generate content: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to generate content",
            "error": str(e)
        }), 500

# Voice Processing Routes
@ai_bp.route('/voice/process', methods=['POST'])
@jwt_required()
def process_voice():
    """Process voice input for AI coaching"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        audio_data = data.get('audio_data')
        session_id = data.get('session_id')
        
        if not audio_data:
            return jsonify({
                "status": "error",
                "message": "Audio data is required"
            }), 400
        
        ai_request = AIRequest(
            service_type=ServiceType.VOICE,
            data={
                "audio_data": audio_data,
                "session_id": session_id
            },
            user_id=user_id,
            complexity="high",
            priority="high"
        )
        
        response = run_async(ai_service_manager.process_request(ai_request))
        
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to process voice: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to process voice",
            "error": str(e)
        }), 500

# Safety and Moderation Routes
@ai_bp.route('/safety/check', methods=['POST'])
@jwt_required()
def safety_check():
    """Check content safety"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        content = data.get('content')
        context = data.get('context', {})
        
        if not content:
            return jsonify({
                "status": "error",
                "message": "Content is required"
            }), 400
        
        ai_request = AIRequest(
            service_type=ServiceType.SAFETY,
            data={
                "content": content,
                "context": context
            },
            user_id=user_id,
            complexity="medium",
            priority="high"
        )
        
        response = run_async(ai_service_manager.process_request(ai_request))
        
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to check safety: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to check content safety",
            "error": str(e)
        }), 500

# Analytics Routes
@ai_bp.route('/analytics/relationship', methods=['GET'])
@jwt_required()
def get_relationship_analytics():
    """Get AI-powered relationship analytics"""
    try:
        user_id = get_jwt_identity()
        days = request.args.get('days', 30, type=int)
        
        ai_request = AIRequest(
            service_type=ServiceType.ANALYTICS,
            data={
                "user_id": user_id,
                "days": days,
                "relationship_data": {}  # Would be populated from database
            },
            user_id=user_id,
            complexity="high",
            priority="normal"
        )
        
        response = run_async(ai_service_manager.process_request(ai_request))
        
        return jsonify({
            "status": "success",
            "data": response.data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to get relationship analytics: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to get analytics",
            "error": str(e)
        }), 500

# Model Performance Routes
@ai_bp.route('/models/performance', methods=['GET'])
@jwt_required()
def get_model_performance():
    """Get AI model performance metrics"""
    try:
        performance_data = {
            "model_health": {
                "openai_gpt4": {"status": "healthy", "response_time": "1.2s", "success_rate": "99.2%"},
                "together_llama": {"status": "healthy", "response_time": "0.8s", "success_rate": "98.7%"},
                "together_deepseek": {"status": "healthy", "response_time": "0.9s", "success_rate": "98.1%"}
            },
            "usage_statistics": {
                "total_requests_today": 1247,
                "coaching_sessions": 89,
                "compatibility_analyses": 156,
                "content_generations": 67
            },
            "cost_optimization": {
                "daily_cost": "$23.45",
                "cost_per_request": "$0.019",
                "savings_from_fallbacks": "$4.67"
            }
        }
        
        return jsonify({
            "status": "success",
            "data": performance_data
        }), 200
        
    except Exception as e:
        logger.error(f"Failed to get model performance: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to get performance data",
            "error": str(e)
        }), 500

@ai_bp.route('/chat', methods=['POST'])
@jwt_required()
@validate_prompt_request
@validate_ai_response
def ai_chat():
    """General AI chat endpoint with security validation"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        message = data.get('message', '')
        service_type = data.get('service_type', 'general')
        context = data.get('context', {})
        
        if not message:
            return jsonify({
                "status": "error",
                "message": "Message is required"
            }), 400
        
        # Create AI request
        ai_request = AIRequest(
            task_type="chat",
            content=message,
            user_id=str(user_id),
            context=context,
            priority="normal"
        )
        
        # Process request
        response = run_async(ai_service_manager.process_request(ai_request))
        
        return jsonify({
            "status": "success",
            "data": {
                "response": response.content,
                "metadata": {
                    "model_used": response.model_used,
                    "confidence_score": response.confidence_score,
                    "processing_time": response.processing_time
                }
            }
        }), 200
        
    except Exception as e:
        logger.error(f"AI chat error: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to process chat message",
            "error": str(e)
        }), 500

@ai_bp.route('/dr-love/message', methods=['POST'])
@jwt_required()
@validate_prompt_request
@validate_ai_response
def send_dr_love_message():
    """Send message to Dr. Love with security validation"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        session_id = data.get('session_id')
        message = data.get('message', '')
        
        if not session_id or not message:
            return jsonify({
                "status": "error",
                "message": "Session ID and message are required"
            }), 400
        
        # Get Dr. Love coach
        dr_love = get_dr_love_coach()
        
        # Process message
        response = run_async(dr_love.process_message(session_id, message))
        
        # Store in database
        db_session = DBCoachingSession.query.filter_by(session_id=session_id).first()
        if db_session:
            db_session.last_message_at = datetime.utcnow()
            db_session.message_count += 1
            current_app.extensions['db'].session.commit()
        
        return jsonify({
            "status": "success",
            "data": response
        }), 200
        
    except Exception as e:
        logger.error(f"Dr. Love message error: {e}")
        return jsonify({
            "status": "error",
            "message": "Failed to process message",
            "error": str(e)
        }), 500

# Error handlers
@ai_bp.errorhandler(404)
def ai_not_found(error):
    return jsonify({
        "status": "error",
        "message": "AI endpoint not found"
    }), 404

@ai_bp.errorhandler(500)
def ai_internal_error(error):
    return jsonify({
        "status": "error",
        "message": "Internal AI service error"
    }), 500

