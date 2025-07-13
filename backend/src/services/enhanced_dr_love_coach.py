"""
Enhanced Dr. Love AI Coach with Advanced Prompt Engineering
Uses Mixture of Experts architecture and sophisticated prompt templates
"""

import asyncio
import logging
import json
import time
from typing import Dict, Any, List, Optional
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from enum import Enum
import uuid

from .advanced_ai_manager import (
    AdvancedAIManager, AIRequest, AIResponse, ExpertType, PromptTemplate,
    create_advanced_ai_manager
)

logger = logging.getLogger(__name__)

class CoachingMode(Enum):
    DATING = "dating"
    RELATIONSHIP = "relationship"
    MARRIAGE = "marriage"
    BREAKUP = "breakup"
    CRISIS = "crisis"
    GENERAL = "general"

class SessionType(Enum):
    TEXT_CHAT = "text_chat"
    VOICE_CALL = "voice_call"
    VIDEO_CALL = "video_call"
    EMERGENCY = "emergency"

class EmotionalState(Enum):
    HAPPY = "happy"
    SAD = "sad"
    ANGRY = "angry"
    ANXIOUS = "anxious"
    CONFUSED = "confused"
    HOPEFUL = "hopeful"
    FRUSTRATED = "frustrated"
    NEUTRAL = "neutral"

@dataclass
class EnhancedCoachingSession:
    session_id: str
    user_id: str
    coaching_mode: CoachingMode
    session_type: SessionType
    started_at: datetime
    ended_at: Optional[datetime] = None
    messages: List[Dict[str, Any]] = field(default_factory=list)
    emotional_journey: List[EmotionalState] = field(default_factory=list)
    insights_generated: List[str] = field(default_factory=list)
    action_items: List[str] = field(default_factory=list)
    crisis_level: int = 0  # 0-10 scale
    satisfaction_rating: Optional[int] = None
    expert_recommendations: List[str] = field(default_factory=list)
    breakthrough_moments: List[Dict[str, Any]] = field(default_factory=list)
    progress_indicators: Dict[str, float] = field(default_factory=dict)

@dataclass
class CoachingContext:
    """Rich context for coaching sessions"""
    user_profile: Dict[str, Any] = field(default_factory=dict)
    relationship_history: List[Dict[str, Any]] = field(default_factory=list)
    previous_sessions: List[str] = field(default_factory=list)
    current_challenges: List[str] = field(default_factory=list)
    goals: List[str] = field(default_factory=list)
    triggers: List[str] = field(default_factory=list)
    support_system: Dict[str, Any] = field(default_factory=dict)
    therapy_style_preferences: List[str] = field(default_factory=list)

class EnhancedCrisisDetector:
    """Advanced crisis detection with multiple assessment layers"""
    
    def __init__(self):
        self.crisis_patterns = {
            "imminent_danger": {
                "keywords": ["suicide", "kill myself", "end it all", "hurt myself", "self-harm"],
                "weight": 1.0,
                "urgency": "critical"
            },
            "emotional_distress": {
                "keywords": ["hopeless", "worthless", "trapped", "no way out", "breaking point"],
                "weight": 0.7,
                "urgency": "high"
            },
            "relationship_crisis": {
                "keywords": ["abusive", "violence", "threatening", "scared", "unsafe"],
                "weight": 0.8,
                "urgency": "high"
            },
            "depression_indicators": {
                "keywords": ["empty", "numb", "meaningless", "can't sleep", "no appetite"],
                "weight": 0.6,
                "urgency": "medium"
            }
        }
    
    def assess_crisis_level(self, message: str, context: CoachingContext) -> Dict[str, Any]:
        """Advanced crisis assessment using multiple indicators"""
        message_lower = message.lower()
        crisis_score = 0.0
        detected_patterns = []
        
        # Keyword-based assessment
        for pattern_name, pattern_info in self.crisis_patterns.items():
            keyword_matches = sum(1 for keyword in pattern_info["keywords"] if keyword in message_lower)
            if keyword_matches > 0:
                pattern_score = keyword_matches * pattern_info["weight"]
                crisis_score += pattern_score
                detected_patterns.append({
                    "pattern": pattern_name,
                    "score": pattern_score,
                    "urgency": pattern_info["urgency"],
                    "matches": keyword_matches
                })
        
        # Contextual assessment
        if context.relationship_history:
            # Check for escalation patterns
            recent_sessions = context.previous_sessions[-3:] if context.previous_sessions else []
            if len(recent_sessions) >= 2:
                # Look for increasing distress patterns
                crisis_score += 0.2
        
        # Frequency assessment
        if len(context.current_challenges) > 5:
            crisis_score += 0.3
        
        # Normalize crisis score (0-10 scale)
        crisis_level = min(int(crisis_score * 2), 10)
        
        return {
            "crisis_level": crisis_level,
            "detected_patterns": detected_patterns,
            "risk_factors": self._identify_risk_factors(context),
            "requires_intervention": crisis_level >= 7,
            "recommended_actions": self._get_crisis_recommendations(crisis_level, detected_patterns)
        }
    
    def _identify_risk_factors(self, context: CoachingContext) -> List[str]:
        """Identify risk factors from context"""
        risk_factors = []
        
        if "isolation" in context.current_challenges:
            risk_factors.append("Social isolation")
        
        if "financial_stress" in context.current_challenges:
            risk_factors.append("Financial difficulties")
        
        if not context.support_system:
            risk_factors.append("Limited support system")
        
        if "substance_use" in context.current_challenges:
            risk_factors.append("Substance use concerns")
        
        return risk_factors
    
    def _get_crisis_recommendations(self, crisis_level: int, patterns: List[Dict]) -> List[str]:
        """Get specific recommendations based on crisis assessment"""
        recommendations = []
        
        if crisis_level >= 8:
            recommendations.extend([
                "Immediate professional intervention recommended",
                "Contact crisis hotline: 988 (US)",
                "Consider emergency services if imminent danger",
                "Involve trusted support person"
            ])
        elif crisis_level >= 6:
            recommendations.extend([
                "Schedule urgent appointment with mental health professional",
                "Increase session frequency",
                "Develop safety plan",
                "Activate support network"
            ])
        elif crisis_level >= 4:
            recommendations.extend([
                "Monitor mood and triggers closely",
                "Practice coping strategies daily",
                "Consider professional counseling",
                "Maintain regular check-ins"
            ])
        
        return recommendations

class EnhancedEmotionAnalyzer:
    """Advanced emotion analysis with nuanced detection"""
    
    def __init__(self):
        self.emotion_patterns = {
            EmotionalState.HAPPY: {
                "keywords": ["happy", "joy", "excited", "grateful", "amazing", "wonderful"],
                "intensity_modifiers": ["very", "extremely", "incredibly", "absolutely"]
            },
            EmotionalState.SAD: {
                "keywords": ["sad", "disappointed", "hurt", "crying", "tears", "grieving"],
                "intensity_modifiers": ["deeply", "profoundly", "overwhelmingly", "utterly"]
            },
            EmotionalState.ANGRY: {
                "keywords": ["angry", "furious", "mad", "frustrated", "irritated", "rage"],
                "intensity_modifiers": ["extremely", "very", "incredibly", "absolutely"]
            },
            EmotionalState.ANXIOUS: {
                "keywords": ["anxious", "worried", "nervous", "scared", "panic", "stress"],
                "intensity_modifiers": ["really", "very", "extremely", "incredibly"]
            },
            EmotionalState.CONFUSED: {
                "keywords": ["confused", "lost", "uncertain", "don't know", "unclear"],
                "intensity_modifiers": ["completely", "totally", "really", "very"]
            },
            EmotionalState.HOPEFUL: {
                "keywords": ["hopeful", "optimistic", "better", "improving", "positive"],
                "intensity_modifiers": ["really", "very", "increasingly", "genuinely"]
            },
            EmotionalState.FRUSTRATED: {
                "keywords": ["frustrated", "stuck", "blocked", "annoyed", "fed up"],
                "intensity_modifiers": ["really", "very", "extremely", "incredibly"]
            }
        }
    
    def analyze_emotion(self, message: str, context: CoachingContext) -> Dict[str, Any]:
        """Advanced emotion analysis with context awareness"""
        message_lower = message.lower()
        emotion_scores = {}
        
        # Calculate base emotion scores
        for emotion, patterns in self.emotion_patterns.items():
            score = 0.0
            
            # Keyword matching
            keyword_matches = sum(1 for keyword in patterns["keywords"] if keyword in message_lower)
            score += keyword_matches * 0.3
            
            # Intensity modifier detection
            for modifier in patterns["intensity_modifiers"]:
                if modifier in message_lower:
                    score += 0.2
            
            emotion_scores[emotion] = score
        
        # Find primary emotion
        primary_emotion = max(emotion_scores.keys(), key=lambda k: emotion_scores[k])
        primary_intensity = emotion_scores[primary_emotion]
        
        # Contextual adjustments - Note: emotional_journey is on session, not context
        # This would need to be passed from session if needed for contextual analysis
        # For now, we'll skip this adjustment or implement it differently
        
        return {
            "primary_emotion": primary_emotion,
            "emotional_intensity": min(primary_intensity, 1.0),
            "secondary_emotions": [e for e, s in emotion_scores.items() if s > 0.2 and e != primary_emotion],
            "emotional_complexity": len([s for s in emotion_scores.values() if s > 0.3]),
            "confidence_score": primary_intensity
        }

class EnhancedDrLoveCoach:
    """Enhanced Dr. Love AI Coach with advanced capabilities"""
    
    def __init__(self, ai_manager: AdvancedAIManager):
        self.ai_manager = ai_manager
        self.crisis_detector = EnhancedCrisisDetector()
        self.emotion_analyzer = EnhancedEmotionAnalyzer()
        self.active_sessions: Dict[str, EnhancedCoachingSession] = {}
        self.user_contexts: Dict[str, CoachingContext] = {}
        
        # Enhanced coaching personalities
        self.coaching_personalities = {
            CoachingMode.DATING: {
                "expert_type": ExpertType.DATING_COACH,
                "personality_traits": ["encouraging", "practical", "confidence-building"],
                "communication_style": "supportive and motivating",
                "specializations": ["modern dating", "confidence building", "relationship readiness"]
            },
            CoachingMode.RELATIONSHIP: {
                "expert_type": ExpertType.RELATIONSHIP_COUNSELOR,
                "personality_traits": ["empathetic", "insightful", "solution-focused"],
                "communication_style": "warm and professional",
                "specializations": ["relationship dynamics", "communication skills", "conflict resolution"]
            },
            CoachingMode.CRISIS: {
                "expert_type": ExpertType.CRISIS_INTERVENTIONIST,
                "personality_traits": ["calm", "professional", "reassuring"],
                "communication_style": "steady and supportive",
                "specializations": ["crisis intervention", "emotional support", "safety planning"]
            }
        }
    
    async def start_enhanced_session(self, user_id: str, coaching_mode: CoachingMode, 
                                   session_type: SessionType = SessionType.TEXT_CHAT,
                                   user_context: Optional[CoachingContext] = None) -> EnhancedCoachingSession:
        """Start an enhanced coaching session with rich context"""
        
        session_id = str(uuid.uuid4())
        
        # Initialize or update user context
        if user_context:
            self.user_contexts[user_id] = user_context
        elif user_id not in self.user_contexts:
            self.user_contexts[user_id] = CoachingContext()
        
        # Create session
        session = EnhancedCoachingSession(
            session_id=session_id,
            user_id=user_id,
            coaching_mode=coaching_mode,
            session_type=session_type,
            started_at=datetime.now()
        )
        
        self.active_sessions[session_id] = session
        
        # Generate welcome message using advanced AI
        welcome_message = await self._generate_enhanced_welcome(session)
        
        # Add welcome message to session
        session.messages.append({
            "role": "assistant",
            "content": welcome_message,
            "timestamp": datetime.now(),
            "message_type": "welcome"
        })
        
        return session
    
    async def process_enhanced_message(self, session_id: str, message: str, 
                                     additional_context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process user message with enhanced AI capabilities"""
        
        if session_id not in self.active_sessions:
            raise ValueError(f"Session {session_id} not found")
        
        session = self.active_sessions[session_id]
        user_context = self.user_contexts.get(session.user_id, CoachingContext())
        
        # Add user message to session
        session.messages.append({
            "role": "user",
            "content": message,
            "timestamp": datetime.now(),
            "message_type": "user_input"
        })
        
        # Enhanced emotion analysis
        emotion_analysis = self.emotion_analyzer.analyze_emotion(message, user_context)
        session.emotional_journey.append(emotion_analysis["primary_emotion"])
        
        # Advanced crisis assessment
        crisis_assessment = self.crisis_detector.assess_crisis_level(message, user_context)
        session.crisis_level = crisis_assessment["crisis_level"]
        
        # Prepare enhanced AI request
        coaching_personality = self.coaching_personalities[session.coaching_mode]
        
        # Build rich context for AI
        enhanced_context = {
            "session_history": session.messages[-5:],  # Last 5 messages
            "emotional_state": emotion_analysis,
            "crisis_assessment": crisis_assessment,
            "user_profile": user_context.user_profile,
            "coaching_goals": user_context.goals,
            "previous_insights": session.insights_generated,
            "coaching_personality": coaching_personality,
            "session_duration": (datetime.now() - session.started_at).total_seconds() / 60,
            "additional_context": additional_context or {}
        }
        
        # Determine appropriate expert type and prompt template
        expert_type = coaching_personality["expert_type"]
        prompt_template = self._select_optimal_template(crisis_assessment, emotion_analysis)
        
        # Create AI request
        ai_request = AIRequest(
            task_type="coaching_response",
            content=message,
            user_id=session.user_id,
            session_id=session_id,
            context=enhanced_context,
            priority="urgent" if crisis_assessment["crisis_level"] >= 7 else "high",
            quality_requirement=0.9 if crisis_assessment["crisis_level"] >= 7 else 0.8,
            expert_preference=expert_type,
            prompt_template=prompt_template,
            require_structured_output=True
        )
        
        # Get AI response
        ai_response = await self.ai_manager.process_request(ai_request)
        
        # Process and structure response
        structured_response = self._process_ai_response(ai_response, session, emotion_analysis, crisis_assessment)
        
        # Add assistant response to session
        session.messages.append({
            "role": "assistant",
            "content": structured_response["response"],
            "timestamp": datetime.now(),
            "message_type": "coaching_response",
            "metadata": {
                "expert_used": ai_response.expert_used.value,
                "confidence_score": ai_response.confidence_score,
                "insights": structured_response["insights"],
                "action_items": structured_response["action_items"]
            }
        })
        
        # Update session insights and action items
        session.insights_generated.extend(structured_response["insights"])
        session.action_items.extend(structured_response["action_items"])
        
        # Check for breakthrough moments
        if emotion_analysis["primary_emotion"] == EmotionalState.HOPEFUL and emotion_analysis["emotional_intensity"] > 0.7:
            session.breakthrough_moments.append({
                "timestamp": datetime.now(),
                "description": "Positive emotional shift detected",
                "context": message[:100] + "..." if len(message) > 100 else message
            })
        
        return {
            "response": structured_response["response"],
            "insights": structured_response["insights"],
            "action_items": structured_response["action_items"],
            "follow_up_questions": structured_response["follow_up_questions"],
            "resources": structured_response["resources"],
            "emotional_state": emotion_analysis,
            "crisis_level": crisis_assessment["crisis_level"],
            "expert_used": ai_response.expert_used.value,
            "confidence_score": ai_response.confidence_score,
            "session_progress": self._calculate_session_progress(session)
        }
    
    def _select_optimal_template(self, crisis_assessment: Dict[str, Any], 
                               emotion_analysis: Dict[str, Any]) -> PromptTemplate:
        """Select the most appropriate prompt template based on assessment"""
        
        # Crisis situations get priority
        if crisis_assessment["crisis_level"] >= 7:
            return PromptTemplate.CRISIS_INTERVENTION
        
        # High emotional intensity benefits from emotional intelligence approach
        if emotion_analysis["emotional_intensity"] > 0.8:
            return PromptTemplate.EMOTIONAL_INTELLIGENCE
        
        # Complex emotional states benefit from chain of thought
        if emotion_analysis["emotional_complexity"] >= 3:
            return PromptTemplate.CHAIN_OF_THOUGHT
        
        # Default to role-playing for personalized approach
        return PromptTemplate.ROLE_PLAYING
    
    def _process_ai_response(self, ai_response: AIResponse, session: EnhancedCoachingSession,
                           emotion_analysis: Dict[str, Any], crisis_assessment: Dict[str, Any]) -> Dict[str, Any]:
        """Process and structure AI response"""
        
        response_content = ai_response.content
        
        # Try to parse structured response
        try:
            if ai_response.content.strip().startswith('{'):
                structured_data = json.loads(ai_response.content)
                response_text = structured_data.get("response", ai_response.content)
                insights = structured_data.get("insights", [])
                action_items = structured_data.get("action_items", [])
                follow_up_questions = structured_data.get("follow_up_questions", [])
            else:
                response_text = ai_response.content
                insights = self._extract_insights(response_text)
                action_items = self._extract_action_items(response_text)
                follow_up_questions = self._extract_follow_up_questions(response_text)
        except json.JSONDecodeError:
            response_text = ai_response.content
            insights = self._extract_insights(response_text)
            action_items = self._extract_action_items(response_text)
            follow_up_questions = self._extract_follow_up_questions(response_text)
        
        # Generate contextual resources
        resources = self._generate_contextual_resources(session.coaching_mode, emotion_analysis, crisis_assessment)
        
        return {
            "response": response_text,
            "insights": insights,
            "action_items": action_items,
            "follow_up_questions": follow_up_questions,
            "resources": resources
        }
    
    def _extract_insights(self, response_text: str) -> List[str]:
        """Extract insights from response text"""
        insights = []
        
        # Look for insight indicators
        insight_indicators = ["insight:", "key insight:", "important:", "notice that", "pattern"]
        
        sentences = response_text.split('.')
        for sentence in sentences:
            if any(indicator in sentence.lower() for indicator in insight_indicators):
                insights.append(sentence.strip())
        
        return insights[:3]  # Limit to top 3 insights
    
    def _extract_action_items(self, response_text: str) -> List[str]:
        """Extract action items from response text"""
        action_items = []
        
        # Look for action indicators
        action_indicators = ["try", "practice", "consider", "start", "stop", "change", "do"]
        
        sentences = response_text.split('.')
        for sentence in sentences:
            if any(indicator in sentence.lower() for indicator in action_indicators):
                if len(sentence.strip()) > 10:  # Avoid very short sentences
                    action_items.append(sentence.strip())
        
        return action_items[:3]  # Limit to top 3 action items
    
    def _extract_follow_up_questions(self, response_text: str) -> List[str]:
        """Extract follow-up questions from response text"""
        questions = []
        
        sentences = response_text.split('.')
        for sentence in sentences:
            if '?' in sentence:
                questions.append(sentence.strip())
        
        return questions[:2]  # Limit to 2 follow-up questions
    
    def _generate_contextual_resources(self, coaching_mode: CoachingMode, 
                                     emotion_analysis: Dict[str, Any],
                                     crisis_assessment: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Generate contextual resources based on current state"""
        resources = []
        
        # Crisis resources
        if crisis_assessment["crisis_level"] >= 6:
            resources.append({
                "type": "crisis_support",
                "title": "Crisis Support Resources",
                "description": "Immediate support available 24/7",
                "contact": "988 (US Crisis Lifeline)",
                "url": "https://988lifeline.org"
            })
        
        # Emotional state resources
        primary_emotion = emotion_analysis["primary_emotion"]
        if primary_emotion == EmotionalState.ANXIOUS:
            resources.append({
                "type": "anxiety_management",
                "title": "Anxiety Management Techniques",
                "description": "Breathing exercises and grounding techniques",
                "url": "https://example.com/anxiety-help"
            })
        
        # Coaching mode resources
        if coaching_mode == CoachingMode.DATING:
            resources.append({
                "type": "dating_guide",
                "title": "Modern Dating Guide",
                "description": "Tips for healthy dating in today's world",
                "url": "https://example.com/dating-guide"
            })
        
        return resources
    
    def _calculate_session_progress(self, session: EnhancedCoachingSession) -> Dict[str, Any]:
        """Calculate session progress indicators"""
        
        progress = {
            "session_duration": (datetime.now() - session.started_at).total_seconds() / 60,
            "messages_exchanged": len(session.messages),
            "insights_generated": len(session.insights_generated),
            "action_items_created": len(session.action_items),
            "emotional_stability": self._calculate_emotional_stability(session),
            "breakthrough_moments": len(session.breakthrough_moments)
        }
        
        return progress
    
    def _calculate_emotional_stability(self, session: EnhancedCoachingSession) -> float:
        """Calculate emotional stability score based on emotional journey"""
        
        if len(session.emotional_journey) < 3:
            return 0.5  # Neutral baseline
        
        # Analyze emotional trajectory
        recent_emotions = session.emotional_journey[-5:]
        positive_emotions = [EmotionalState.HAPPY, EmotionalState.HOPEFUL]
        negative_emotions = [EmotionalState.SAD, EmotionalState.ANGRY, EmotionalState.ANXIOUS]
        
        positive_count = sum(1 for e in recent_emotions if e in positive_emotions)
        negative_count = sum(1 for e in recent_emotions if e in negative_emotions)
        
        # Calculate stability (0-1 scale)
        if positive_count > negative_count:
            return 0.7 + (positive_count - negative_count) * 0.1
        elif negative_count > positive_count:
            return 0.3 - (negative_count - positive_count) * 0.1
        else:
            return 0.5
    
    async def _generate_enhanced_welcome(self, session: EnhancedCoachingSession) -> str:
        """Generate enhanced welcome message using AI"""
        
        coaching_personality = self.coaching_personalities[session.coaching_mode]
        user_context = self.user_contexts.get(session.user_id, CoachingContext())
        
        # Create welcome request
        welcome_context = {
            "coaching_mode": session.coaching_mode.value,
            "session_type": session.session_type.value,
            "user_profile": user_context.user_profile,
            "previous_sessions": len(user_context.previous_sessions),
            "coaching_personality": coaching_personality,
            "is_returning_user": len(user_context.previous_sessions) > 0
        }
        
        welcome_request = AIRequest(
            task_type="welcome_message",
            content=f"Generate a warm welcome message for {session.coaching_mode.value} coaching session",
            user_id=session.user_id,
            session_id=session.session_id,
            context=welcome_context,
            priority="normal",
            quality_requirement=0.8,
            expert_preference=coaching_personality["expert_type"],
            prompt_template=PromptTemplate.ROLE_PLAYING
        )
        
        ai_response = await self.ai_manager.process_request(welcome_request)
        return ai_response.content
    
    async def end_enhanced_session(self, session_id: str, 
                                 satisfaction_rating: Optional[int] = None) -> Dict[str, Any]:
        """End coaching session with comprehensive summary"""
        
        if session_id not in self.active_sessions:
            raise ValueError(f"Session {session_id} not found")
        
        session = self.active_sessions[session_id]
        session.ended_at = datetime.now()
        session.satisfaction_rating = satisfaction_rating
        
        # Generate session summary using AI
        summary_context = {
            "session_messages": session.messages,
            "insights_generated": session.insights_generated,
            "action_items": session.action_items,
            "emotional_journey": [e.value for e in session.emotional_journey],
            "breakthrough_moments": session.breakthrough_moments,
            "session_duration": (session.ended_at - session.started_at).total_seconds() / 60
        }
        
        summary_request = AIRequest(
            task_type="session_summary",
            content="Generate comprehensive session summary",
            user_id=session.user_id,
            session_id=session_id,
            context=summary_context,
            priority="normal",
            quality_requirement=0.8,
            expert_preference=ExpertType.RELATIONSHIP_COUNSELOR,
            prompt_template=PromptTemplate.STRUCTURED_OUTPUT,
            require_structured_output=True
        )
        
        summary_response = await self.ai_manager.process_request(summary_request)
        
        # Update user context
        user_context = self.user_contexts.get(session.user_id, CoachingContext())
        user_context.previous_sessions.append(session_id)
        
        # Clean up active session
        del self.active_sessions[session_id]
        
        return {
            "session_summary": summary_response.content,
            "session_duration": (session.ended_at - session.started_at).total_seconds() / 60,
            "insights_generated": session.insights_generated,
            "action_items": session.action_items,
            "emotional_journey": [e.value for e in session.emotional_journey],
            "breakthrough_moments": session.breakthrough_moments,
            "satisfaction_rating": satisfaction_rating,
            "progress_indicators": self._calculate_session_progress(session)
        }

# Factory function for easy initialization
async def create_enhanced_dr_love_coach(ai_config: Dict[str, str]) -> EnhancedDrLoveCoach:
    """Create enhanced Dr. Love coach with advanced AI manager"""
    ai_manager = await create_advanced_ai_manager(ai_config)
    return EnhancedDrLoveCoach(ai_manager)

# Global instance
_enhanced_coach_instance = None

async def get_enhanced_dr_love_coach() -> EnhancedDrLoveCoach:
    """Get or create enhanced Dr. Love coach instance"""
    global _enhanced_coach_instance
    if _enhanced_coach_instance is None:
        # Default configuration - should be loaded from environment
        config = {
            "openai_api_key": "your-openai-key",
            "together_api_key": "your-together-key",
            "google_api_key": "your-google-key"
        }
        _enhanced_coach_instance = await create_enhanced_dr_love_coach(config)
    return _enhanced_coach_instance