"""
Enhanced Relationship Coaching API Routes
Provides secure, expert-level relationship guidance through specialized agents
"""

from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity
import asyncio
import logging
from typing import Dict, Any, Optional, List
from datetime import datetime
import json

from ..services.enhanced_relationship_agents import (
    RelationshipAgentOrchestrator, RelationshipExpertType, 
    RelationshipContext, ResponseQuality, SecurityConfig
)
from ..utils.security_validators import (
    RelationshipSecurityValidator, ValidationResult, 
    validate_relationship_input, is_input_safe
)
from ..utils.rate_limiter import rate_limit
from ..models.user import User
from ..models.coaching import CoachingSession
from ..services.ai_service_manager import ai_service_manager

logger = logging.getLogger(__name__)

# Create blueprint
enhanced_coaching_bp = Blueprint('enhanced_coaching', __name__, url_prefix='/api/v1/enhanced-coaching')

# Initialize security configuration
security_config = SecurityConfig(
    enable_input_sanitization=True,
    enable_output_filtering=True,
    max_input_length=5000,
    max_suspicious_score=0.3
)

# Global orchestrator (will be initialized in main.py)
relationship_orchestrator: Optional[RelationshipAgentOrchestrator] = None

def get_relationship_orchestrator():
    """Get the relationship orchestrator instance"""
    global relationship_orchestrator
    if relationship_orchestrator is None:
        # Initialize if not already done
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        relationship_orchestrator = RelationshipAgentOrchestrator(ai_service_manager, security_config)
    return relationship_orchestrator

@enhanced_coaching_bp.route('/experts', methods=['GET'])
@jwt_required()
def get_available_experts():
    """Get list of available relationship experts"""
    try:
        experts = []
        for expert_type in RelationshipExpertType:
            expert_info = {
                "expert_type": expert_type.value,
                "display_name": expert_type.value.replace("_", " ").title(),
                "description": _get_expert_description(expert_type),
                "specializations": _get_expert_specializations(expert_type),
                "therapeutic_approaches": _get_expert_approaches(expert_type)
            }
            experts.append(expert_info)
        
        return jsonify({
            "success": True,
            "experts": experts,
            "total_experts": len(experts),
            "quality_levels": [q.value for q in ResponseQuality]
        }), 200
        
    except Exception as e:
        logger.error(f"Error getting available experts: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to retrieve expert information"
        }), 500

@enhanced_coaching_bp.route('/chat', methods=['POST'])
@jwt_required()
@rate_limit(max_requests=30, window=60)  # 30 requests per minute
def chat_with_expert():
    """Chat with a relationship expert"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        # Validate required fields
        if not data or 'message' not in data:
            return jsonify({
                "success": False,
                "error": "Message is required"
            }), 400
        
        message = data['message']
        preferred_expert = data.get('preferred_expert')
        quality_level = data.get('quality_level', 'enhanced')
        
        # Security validation
        validation_report = validate_relationship_input(message, user_id)
        
        if validation_report.validation_result == ValidationResult.BLOCKED:
            return jsonify({
                "success": False,
                "error": validation_report.user_friendly_message,
                "security_info": {
                    "blocked": True,
                    "threat_level": validation_report.overall_threat_level.value
                }
            }), 400
        
        # Use sanitized input
        sanitized_message = validation_report.sanitized_input
        
        # Parse quality level
        try:
            quality = ResponseQuality(quality_level)
        except ValueError:
            quality = ResponseQuality.ENHANCED
        
        # Parse preferred expert
        expert_type = None
        if preferred_expert:
            try:
                expert_type = RelationshipExpertType(preferred_expert)
            except ValueError:
                pass
        
        # Build relationship context
        context = _build_relationship_context(data.get('context', {}))
        
        # Get orchestrator and process request
        orchestrator = get_relationship_orchestrator()
        
        # Run async operation
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(
            orchestrator.route_request(
                sanitized_message, 
                user_id, 
                context, 
                expert_type
            )
        )
        
        # Add security information to response
        response["security_info"] = {
            "input_sanitized": validation_report.validation_result == ValidationResult.SANITIZED,
            "threat_level": validation_report.overall_threat_level.value,
            "processing_time": validation_report.processing_time
        }
        
        # Log successful interaction
        logger.info(f"Successful expert chat for user {user_id} with {response.get('expert_type', 'unknown')}")
        
        return jsonify(response), 200
        
    except Exception as e:
        logger.error(f"Error in expert chat: {e}")
        return jsonify({
            "success": False,
            "error": "I'm experiencing technical difficulties. Please try again in a moment."
        }), 500

@enhanced_coaching_bp.route('/multi-expert-consultation', methods=['POST'])
@jwt_required()
@rate_limit(max_requests=5, window=60)  # 5 requests per minute (more resource intensive)
def multi_expert_consultation():
    """Get consultation from multiple experts"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or 'message' not in data:
            return jsonify({
                "success": False,
                "error": "Message is required"
            }), 400
        
        message = data['message']
        requested_experts = data.get('experts', [])
        
        # Security validation
        validation_report = validate_relationship_input(message, user_id)
        
        if validation_report.validation_result == ValidationResult.BLOCKED:
            return jsonify({
                "success": False,
                "error": validation_report.user_friendly_message,
                "security_info": {
                    "blocked": True,
                    "threat_level": validation_report.overall_threat_level.value
                }
            }), 400
        
        sanitized_message = validation_report.sanitized_input
        
        # Parse requested experts
        expert_types = []
        for expert_name in requested_experts:
            try:
                expert_type = RelationshipExpertType(expert_name)
                expert_types.append(expert_type)
            except ValueError:
                continue
        
        # Build context
        context = _build_relationship_context(data.get('context', {}))
        
        # Get orchestrator and process request
        orchestrator = get_relationship_orchestrator()
        
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(
            orchestrator.get_multi_expert_consultation(
                sanitized_message,
                user_id,
                context,
                expert_types if expert_types else None
            )
        )
        
        # Add security information
        response["security_info"] = {
            "input_sanitized": validation_report.validation_result == ValidationResult.SANITIZED,
            "threat_level": validation_report.overall_threat_level.value
        }
        
        logger.info(f"Multi-expert consultation for user {user_id} with {response.get('expert_count', 0)} experts")
        
        return jsonify(response), 200
        
    except Exception as e:
        logger.error(f"Error in multi-expert consultation: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to process multi-expert consultation"
        }), 500

@enhanced_coaching_bp.route('/expert/<expert_type>', methods=['POST'])
@jwt_required()
@rate_limit(max_requests=20, window=60)  # 20 requests per minute
def chat_with_specific_expert(expert_type: str):
    """Chat with a specific relationship expert"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or 'message' not in data:
            return jsonify({
                "success": False,
                "error": "Message is required"
            }), 400
        
        # Validate expert type
        try:
            expert = RelationshipExpertType(expert_type)
        except ValueError:
            return jsonify({
                "success": False,
                "error": f"Unknown expert type: {expert_type}"
            }), 400
        
        message = data['message']
        quality_level = data.get('quality_level', 'enhanced')
        
        # Security validation
        validation_report = validate_relationship_input(message, user_id)
        
        if validation_report.validation_result == ValidationResult.BLOCKED:
            return jsonify({
                "success": False,
                "error": validation_report.user_friendly_message
            }), 400
        
        sanitized_message = validation_report.sanitized_input
        
        # Parse quality level
        try:
            quality = ResponseQuality(quality_level)
        except ValueError:
            quality = ResponseQuality.ENHANCED
        
        # Build context
        context = _build_relationship_context(data.get('context', {}))
        
        # Get orchestrator and process with specific expert
        orchestrator = get_relationship_orchestrator()
        agent = orchestrator.agents[expert]
        
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        response = loop.run_until_complete(
            agent.process_request(sanitized_message, user_id, context, quality)
        )
        
        # Add security information
        response["security_info"] = {
            "input_sanitized": validation_report.validation_result == ValidationResult.SANITIZED,
            "threat_level": validation_report.overall_threat_level.value
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        logger.error(f"Error chatting with specific expert {expert_type}: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to process request with this expert"
        }), 500

@enhanced_coaching_bp.route('/security/validate', methods=['POST'])
@jwt_required()
@rate_limit(max_requests=100, window=60)  # 100 requests per minute
def validate_input():
    """Validate input for security threats (utility endpoint)"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({
                "success": False,
                "error": "Text is required"
            }), 400
        
        text = data['text']
        validation_report = validate_relationship_input(text, user_id)
        
        return jsonify({
            "success": True,
            "validation_result": validation_report.validation_result.value,
            "threat_level": validation_report.overall_threat_level.value,
            "threats_detected": [
                {
                    "type": threat.threat_type,
                    "level": threat.threat_level.value,
                    "description": threat.description,
                    "confidence": threat.confidence_score
                }
                for threat in validation_report.threats_detected
            ],
            "sanitized_text": validation_report.sanitized_input,
            "user_message": validation_report.user_friendly_message,
            "processing_time": validation_report.processing_time
        }), 200
        
    except Exception as e:
        logger.error(f"Error validating input: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to validate input"
        }), 500

@enhanced_coaching_bp.route('/security/stats', methods=['GET'])
@jwt_required()
def get_security_stats():
    """Get security validation statistics (admin only)"""
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        # Check if user is admin (implement your admin check logic)
        if not user or not getattr(user, 'is_admin', False):
            return jsonify({
                "success": False,
                "error": "Admin access required"
            }), 403
        
        validator = RelationshipSecurityValidator()
        stats = validator.get_security_stats()
        
        return jsonify({
            "success": True,
            "security_stats": stats
        }), 200
        
    except Exception as e:
        logger.error(f"Error getting security stats: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to retrieve security statistics"
        }), 500

@enhanced_coaching_bp.route('/session/history', methods=['GET'])
@jwt_required()
def get_session_history():
    """Get user's coaching session history"""
    try:
        user_id = get_jwt_identity()
        limit = request.args.get('limit', 20, type=int)
        offset = request.args.get('offset', 0, type=int)
        
        # Get orchestrator to access session history
        orchestrator = get_relationship_orchestrator()
        
        # Get session history for all agents
        all_sessions = []
        for expert_type, agent in orchestrator.agents.items():
            if user_id in agent.session_history:
                sessions = agent.session_history[user_id]
                for session in sessions[-limit:]:  # Get recent sessions
                    all_sessions.append({
                        "expert_type": expert_type.value,
                        "timestamp": session["timestamp"].isoformat(),
                        "user_input": session["user_input"][:100] + "..." if len(session["user_input"]) > 100 else session["user_input"],
                        "response_preview": session["expert_response"][:150] + "..." if len(session["expert_response"]) > 150 else session["expert_response"],
                        "quality": session.get("quality", "enhanced")
                    })
        
        # Sort by timestamp (most recent first)
        all_sessions.sort(key=lambda x: x["timestamp"], reverse=True)
        
        # Apply pagination
        paginated_sessions = all_sessions[offset:offset + limit]
        
        return jsonify({
            "success": True,
            "sessions": paginated_sessions,
            "total_sessions": len(all_sessions),
            "has_more": offset + limit < len(all_sessions)
        }), 200
        
    except Exception as e:
        logger.error(f"Error getting session history: {e}")
        return jsonify({
            "success": False,
            "error": "Unable to retrieve session history"
        }), 500

# Helper functions
def _build_relationship_context(context_data: Dict[str, Any]) -> RelationshipContext:
    """Build RelationshipContext from API data"""
    return RelationshipContext(
        relationship_status=context_data.get('relationship_status', 'single'),
        relationship_duration=context_data.get('relationship_duration'),
        ages=context_data.get('ages'),
        children=context_data.get('children'),
        previous_therapy=context_data.get('previous_therapy'),
        cultural_background=context_data.get('cultural_background'),
        communication_style=context_data.get('communication_style'),
        conflict_style=context_data.get('conflict_style'),
        love_languages=context_data.get('love_languages'),
        attachment_styles=context_data.get('attachment_styles'),
        current_stressors=context_data.get('current_stressors'),
        goals=context_data.get('goals'),
        triggers=context_data.get('triggers')
    )

def _get_expert_description(expert_type: RelationshipExpertType) -> str:
    """Get description for expert type"""
    descriptions = {
        RelationshipExpertType.MARRIAGE_COUNSELOR: "Licensed marriage and family therapist specializing in strengthening marriages through evidence-based approaches",
        RelationshipExpertType.DATING_COACH: "Dating expert helping singles navigate modern dating with confidence and authenticity",
        RelationshipExpertType.COMMUNICATION_SPECIALIST: "Communication expert teaching effective interpersonal skills for healthier relationships",
        RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: "Mediation specialist helping couples resolve disputes constructively and rebuild trust",
        RelationshipExpertType.FINANCIAL_ADVISOR: "Certified Financial Planner specializing in couples' financial harmony and planning",
        RelationshipExpertType.INTIMACY_COACH: "Intimacy specialist helping couples deepen emotional and physical connection",
        RelationshipExpertType.ATTACHMENT_THERAPIST: "Attachment specialist helping individuals understand and heal relationship patterns",
        RelationshipExpertType.LIFE_SKILLS_MENTOR: "Life coach focusing on personal development skills that enhance relationship quality",
        RelationshipExpertType.CRISIS_INTERVENTIONIST: "Crisis specialist providing immediate support during relationship emergencies",
        RelationshipExpertType.EMOTIONAL_INTELLIGENCE_COACH: "Expert in developing emotional intelligence for better relationships",
        RelationshipExpertType.BOUNDARY_SETTING_EXPERT: "Specialist in healthy boundary setting and assertiveness training",
        RelationshipExpertType.FAMILY_DYNAMICS_SPECIALIST: "Expert in family systems and multi-generational relationship patterns"
    }
    return descriptions.get(expert_type, "Relationship expert")

def _get_expert_specializations(expert_type: RelationshipExpertType) -> List[str]:
    """Get specializations for expert type"""
    specializations = {
        RelationshipExpertType.MARRIAGE_COUNSELOR: [
            "Marriage therapy", "Couple communication", "Intimacy building", "Trust rebuilding"
        ],
        RelationshipExpertType.COMMUNICATION_SPECIALIST: [
            "Active listening", "Nonviolent communication", "Conflict de-escalation", "Digital communication"
        ],
        RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
            "Mediation", "De-escalation", "Win-win solutions", "Restorative practices"
        ],
        RelationshipExpertType.FINANCIAL_ADVISOR: [
            "Couples budgeting", "Financial communication", "Debt management", "Investment planning"
        ],
        RelationshipExpertType.LIFE_SKILLS_MENTOR: [
            "Time management", "Stress management", "Goal setting", "Boundary setting"
        ]
    }
    return specializations.get(expert_type, [])

def _get_expert_approaches(expert_type: RelationshipExpertType) -> List[str]:
    """Get therapeutic approaches for expert type"""
    approaches = {
        RelationshipExpertType.MARRIAGE_COUNSELOR: [
            "Gottman Method", "Emotionally Focused Therapy", "Cognitive Behavioral Therapy"
        ],
        RelationshipExpertType.COMMUNICATION_SPECIALIST: [
            "Nonviolent Communication", "Active Listening Training", "Mindful Communication"
        ],
        RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
            "Interest-Based Negotiation", "Restorative Justice", "Collaborative Problem-Solving"
        ],
        RelationshipExpertType.FINANCIAL_ADVISOR: [
            "Financial Therapy", "Behavioral Finance", "Values-Based Planning"
        ],
        RelationshipExpertType.LIFE_SKILLS_MENTOR: [
            "Cognitive Behavioral Coaching", "Mindfulness-Based Coaching", "Strengths-Based Development"
        ]
    }
    return approaches.get(expert_type, [])

# Initialize the relationship orchestrator when the module is imported
def initialize_enhanced_coaching(ai_service_manager_instance):
    """Initialize the enhanced coaching system"""
    global relationship_orchestrator
    relationship_orchestrator = RelationshipAgentOrchestrator(ai_service_manager_instance, security_config)
    logger.info("Enhanced relationship coaching system initialized")