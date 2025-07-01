"""
Flourish App: Dr. Love AI Coach
Advanced relationship coaching system with multi-model AI integration
"""

import asyncio
import logging
import json
import time
from typing import Dict, Any, List, Optional
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from enum import Enum
import uuid

from .ai_service_manager import AIServiceManager, AIRequest, ServiceType, ModelTier

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
class CoachingSession:
    session_id: str
    user_id: str
    coaching_mode: CoachingMode
    session_type: SessionType
    started_at: datetime
    ended_at: Optional[datetime] = None
    messages: List[Dict[str, Any]] = None
    emotional_journey: List[EmotionalState] = None
    insights_generated: List[str] = None
    action_items: List[str] = None
    crisis_level: int = 0  # 0-10 scale
    satisfaction_rating: Optional[int] = None
    
    def __post_init__(self):
        if self.messages is None:
            self.messages = []
        if self.emotional_journey is None:
            self.emotional_journey = []
        if self.insights_generated is None:
            self.insights_generated = []
        if self.action_items is None:
            self.action_items = []

@dataclass
class CoachingInsight:
    insight_id: str
    session_id: str
    insight_type: str  # pattern, recommendation, warning, celebration
    content: str
    confidence_score: float
    priority: str  # low, medium, high, urgent
    created_at: datetime
    user_acknowledged: bool = False

class CrisisDetector:
    """Specialized crisis detection and intervention system"""
    
    def __init__(self):
        self.crisis_keywords = {
            "high_risk": [
                "suicide", "kill myself", "end it all", "not worth living",
                "hurt myself", "self-harm", "can't go on", "give up"
            ],
            "medium_risk": [
                "hopeless", "worthless", "trapped", "no way out",
                "can't take it", "breaking point", "falling apart"
            ],
            "relationship_crisis": [
                "abusive", "violence", "threatening", "scared",
                "unsafe", "controlling", "isolating", "stalking"
            ]
        }
        
        self.intervention_resources = {
            "suicide_prevention": {
                "hotline": "988",
                "text": "Text HOME to 741741",
                "chat": "suicidepreventionlifeline.org/chat"
            },
            "domestic_violence": {
                "hotline": "1-800-799-7233",
                "text": "Text START to 88788",
                "chat": "thehotline.org"
            }
        }
    
    def assess_crisis_level(self, message: str, context: Dict[str, Any]) -> Dict[str, Any]:
        """Assess crisis level from user message and context"""
        
        message_lower = message.lower()
        crisis_level = 0
        crisis_type = None
        intervention_needed = False
        
        # Check for high-risk indicators
        for keyword in self.crisis_keywords["high_risk"]:
            if keyword in message_lower:
                crisis_level = max(crisis_level, 9)
                crisis_type = "suicide_risk"
                intervention_needed = True
                break
        
        # Check for medium-risk indicators
        if crisis_level < 5:
            for keyword in self.crisis_keywords["medium_risk"]:
                if keyword in message_lower:
                    crisis_level = max(crisis_level, 6)
                    crisis_type = "emotional_crisis"
        
        # Check for relationship crisis
        for keyword in self.crisis_keywords["relationship_crisis"]:
            if keyword in message_lower:
                crisis_level = max(crisis_level, 7)
                crisis_type = "relationship_crisis"
                intervention_needed = True
                break
        
        return {
            "crisis_level": crisis_level,
            "crisis_type": crisis_type,
            "intervention_needed": intervention_needed,
            "resources": self.intervention_resources.get(crisis_type, {}),
            "immediate_response_required": crisis_level >= 8
        }

class EmotionAnalyzer:
    """Advanced emotion detection and analysis"""
    
    def __init__(self):
        self.emotion_patterns = {
            EmotionalState.HAPPY: ["happy", "joy", "excited", "wonderful", "amazing", "love", "grateful"],
            EmotionalState.SAD: ["sad", "depressed", "down", "blue", "crying", "tears", "heartbroken"],
            EmotionalState.ANGRY: ["angry", "furious", "mad", "rage", "irritated", "frustrated", "pissed"],
            EmotionalState.ANXIOUS: ["anxious", "worried", "nervous", "scared", "panic", "stress", "overwhelmed"],
            EmotionalState.CONFUSED: ["confused", "lost", "don't know", "uncertain", "mixed up", "unclear"],
            EmotionalState.HOPEFUL: ["hopeful", "optimistic", "better", "improving", "positive", "forward"],
            EmotionalState.FRUSTRATED: ["frustrated", "stuck", "blocked", "can't", "impossible", "giving up"]
        }
    
    def detect_emotion(self, message: str, context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Detect primary emotion from message"""
        
        message_lower = message.lower()
        emotion_scores = {}
        
        for emotion, keywords in self.emotion_patterns.items():
            score = sum(1 for keyword in keywords if keyword in message_lower)
            if score > 0:
                emotion_scores[emotion] = score
        
        if not emotion_scores:
            primary_emotion = EmotionalState.NEUTRAL
            confidence = 0.5
        else:
            primary_emotion = max(emotion_scores, key=emotion_scores.get)
            confidence = min(emotion_scores[primary_emotion] / 3.0, 1.0)
        
        return {
            "primary_emotion": primary_emotion,
            "confidence": confidence,
            "all_emotions": emotion_scores,
            "emotional_intensity": self._calculate_intensity(message_lower)
        }
    
    def _calculate_intensity(self, message: str) -> float:
        """Calculate emotional intensity from message"""
        
        intensity_indicators = {
            "very": 0.3, "extremely": 0.4, "incredibly": 0.4,
            "so": 0.2, "really": 0.2, "totally": 0.3,
            "!!!": 0.3, "!!": 0.2, "!": 0.1,
            "CAPS": 0.2  # Will check for caps later
        }
        
        intensity = 0.5  # Base intensity
        
        for indicator, boost in intensity_indicators.items():
            if indicator == "CAPS":
                if any(word.isupper() and len(word) > 2 for word in message.split()):
                    intensity += boost
            elif indicator in message:
                intensity += boost
        
        return min(intensity, 1.0)

class ConversationAnalyzer:
    """Analyzes conversation patterns and provides insights"""
    
    def __init__(self):
        self.communication_patterns = {
            "active_listening": ["I hear you", "I understand", "tell me more", "how did that feel"],
            "validation": ["that makes sense", "I can see why", "your feelings are valid"],
            "defensiveness": ["but", "however", "you always", "you never"],
            "criticism": ["wrong", "stupid", "ridiculous", "pathetic"],
            "contempt": ["whatever", "eye roll", "sarcasm", "mockery"],
            "stonewalling": ["fine", "whatever", "I don't care", "silence"]
        }
    
    def analyze_conversation(self, messages: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Analyze conversation for patterns and quality"""
        
        if not messages:
            return {"error": "No messages to analyze"}
        
        pattern_scores = {pattern: 0 for pattern in self.communication_patterns}
        total_messages = len(messages)
        
        for message in messages:
            content = message.get("content", "").lower()
            
            for pattern, keywords in self.communication_patterns.items():
                for keyword in keywords:
                    if keyword in content:
                        pattern_scores[pattern] += 1
        
        # Calculate percentages
        pattern_percentages = {
            pattern: (score / total_messages) * 100 
            for pattern, score in pattern_scores.items()
        }
        
        # Determine overall communication health
        positive_patterns = pattern_percentages["active_listening"] + pattern_percentages["validation"]
        negative_patterns = (pattern_percentages["defensiveness"] + 
                           pattern_percentages["criticism"] + 
                           pattern_percentages["contempt"] + 
                           pattern_percentages["stonewalling"])
        
        communication_health = max(0, min(100, positive_patterns - negative_patterns + 50))
        
        return {
            "communication_health_score": communication_health,
            "pattern_analysis": pattern_percentages,
            "recommendations": self._generate_communication_recommendations(pattern_percentages),
            "total_messages_analyzed": total_messages
        }
    
    def _generate_communication_recommendations(self, patterns: Dict[str, float]) -> List[str]:
        """Generate recommendations based on communication patterns"""
        
        recommendations = []
        
        if patterns["active_listening"] < 20:
            recommendations.append("Practice active listening by reflecting back what your partner says")
        
        if patterns["validation"] < 15:
            recommendations.append("Validate your partner's feelings more often, even when you disagree")
        
        if patterns["defensiveness"] > 30:
            recommendations.append("Notice when you're getting defensive and take a breath before responding")
        
        if patterns["criticism"] > 20:
            recommendations.append("Focus on specific behaviors rather than character attacks")
        
        if patterns["contempt"] > 10:
            recommendations.append("Contempt is toxic to relationships - seek professional help if this continues")
        
        if patterns["stonewalling"] > 25:
            recommendations.append("When overwhelmed, ask for a break rather than shutting down")
        
        return recommendations

class DrLoveAICoach:
    """Main Dr. Love AI Coach system"""
    
    def __init__(self, ai_service_manager: AIServiceManager):
        self.ai_service_manager = ai_service_manager
        self.crisis_detector = CrisisDetector()
        self.emotion_analyzer = EmotionAnalyzer()
        self.conversation_analyzer = ConversationAnalyzer()
        
        self.active_sessions = {}
        self.coaching_history = {}
        
        # Coaching personalities for different modes
        self.coaching_personalities = {
            CoachingMode.DATING: {
                "name": "Dr. Love - Dating Coach",
                "personality": """You are Dr. Love, a warm and encouraging dating coach. You help people navigate 
                the exciting but sometimes confusing world of dating. You're optimistic, practical, and always 
                focus on building confidence and authentic connections. You give specific, actionable advice 
                while being supportive and non-judgmental.""",
                "expertise": ["first dates", "online dating", "building attraction", "communication", "confidence"]
            },
            CoachingMode.RELATIONSHIP: {
                "name": "Dr. Love - Relationship Coach",
                "personality": """You are Dr. Love, a wise and empathetic relationship coach. You help couples 
                strengthen their bonds and work through challenges together. You're patient, insightful, and 
                skilled at seeing both perspectives. You focus on communication, understanding, and practical 
                solutions that bring couples closer.""",
                "expertise": ["communication", "conflict resolution", "intimacy", "trust", "growth"]
            },
            CoachingMode.MARRIAGE: {
                "name": "Dr. Love - Marriage Coach",
                "personality": """You are Dr. Love, a seasoned marriage coach with deep wisdom about long-term 
                partnerships. You understand the complexities of married life and help couples navigate major 
                life transitions, parenting challenges, and keeping love alive through all seasons. You're 
                practical, experienced, and deeply committed to helping marriages thrive.""",
                "expertise": ["long-term commitment", "parenting", "finances", "life transitions", "renewal"]
            },
            CoachingMode.BREAKUP: {
                "name": "Dr. Love - Healing Coach",
                "personality": """You are Dr. Love, a compassionate coach specializing in healing and recovery 
                after relationship endings. You help people process their emotions, learn from their experiences, 
                and prepare for healthier relationships in the future. You're gentle, validating, and focus on 
                growth and self-compassion.""",
                "expertise": ["healing", "self-reflection", "growth", "moving forward", "self-love"]
            },
            CoachingMode.CRISIS: {
                "name": "Dr. Love - Crisis Coach",
                "personality": """You are Dr. Love, a crisis-trained coach who provides immediate support during 
                relationship emergencies. You're calm, professional, and focused on safety and stabilization. 
                You know when to recommend professional help and always prioritize the person's wellbeing above all else.""",
                "expertise": ["crisis intervention", "safety", "professional referrals", "immediate support"]
            }
        }
    
    async def start_coaching_session(self, user_id: str, coaching_mode: CoachingMode, 
                                   session_type: SessionType = SessionType.TEXT_CHAT) -> CoachingSession:
        """Start a new coaching session"""
        
        session_id = str(uuid.uuid4())
        session = CoachingSession(
            session_id=session_id,
            user_id=user_id,
            coaching_mode=coaching_mode,
            session_type=session_type,
            started_at=datetime.now()
        )
        
        self.active_sessions[session_id] = session
        
        # Generate welcome message
        welcome_message = await self._generate_welcome_message(coaching_mode, session_type)
        session.messages.append({
            "role": "assistant",
            "content": welcome_message,
            "timestamp": datetime.now().isoformat(),
            "message_type": "welcome"
        })
        
        logger.info(f"Started coaching session {session_id} for user {user_id} in {coaching_mode.value} mode")
        return session
    
    async def process_user_message(self, session_id: str, message: str, 
                                 context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Process user message and generate coaching response"""
        
        if session_id not in self.active_sessions:
            raise ValueError(f"Session {session_id} not found")
        
        session = self.active_sessions[session_id]
        
        # Add user message to session
        session.messages.append({
            "role": "user",
            "content": message,
            "timestamp": datetime.now().isoformat(),
            "message_type": "user_input"
        })
        
        # Analyze emotion and crisis level
        emotion_analysis = self.emotion_analyzer.detect_emotion(message, context)
        crisis_assessment = self.crisis_detector.assess_crisis_level(message, context or {})
        
        # Update session emotional state
        session.emotional_journey.append(emotion_analysis["primary_emotion"])
        session.crisis_level = max(session.crisis_level, crisis_assessment["crisis_level"])
        
        # Handle crisis situations immediately
        if crisis_assessment["immediate_response_required"]:
            return await self._handle_crisis_response(session, crisis_assessment, emotion_analysis)
        
        # Generate AI coaching response
        coaching_response = await self._generate_coaching_response(
            session, message, emotion_analysis, crisis_assessment, context
        )
        
        # Add AI response to session
        session.messages.append({
            "role": "assistant",
            "content": coaching_response["response"],
            "timestamp": datetime.now().isoformat(),
            "message_type": "coaching_response",
            "insights": coaching_response.get("insights", []),
            "action_items": coaching_response.get("action_items", [])
        })
        
        # Generate insights and action items
        if coaching_response.get("insights"):
            session.insights_generated.extend(coaching_response["insights"])
        
        if coaching_response.get("action_items"):
            session.action_items.extend(coaching_response["action_items"])
        
        return {
            "session_id": session_id,
            "response": coaching_response["response"],
            "emotion_detected": emotion_analysis["primary_emotion"].value,
            "emotional_intensity": emotion_analysis["emotional_intensity"],
            "crisis_level": crisis_assessment["crisis_level"],
            "insights": coaching_response.get("insights", []),
            "action_items": coaching_response.get("action_items", []),
            "follow_up_questions": coaching_response.get("follow_up_questions", []),
            "resources_suggested": coaching_response.get("resources", [])
        }
    
    async def _generate_welcome_message(self, coaching_mode: CoachingMode, 
                                      session_type: SessionType) -> str:
        """Generate personalized welcome message"""
        
        personality = self.coaching_personalities[coaching_mode]
        
        welcome_messages = {
            CoachingMode.DATING: f"Hello! I'm {personality['name']}, and I'm so excited to help you on your dating journey! Whether you're just getting back out there or looking to improve your dating skills, I'm here to support you with practical advice and encouragement. What's on your mind today?",
            
            CoachingMode.RELATIONSHIP: f"Welcome! I'm {personality['name']}, and I'm here to help you build a stronger, more fulfilling relationship. Every relationship has its unique challenges and beautiful moments, and I'm honored to be part of your journey together. What would you like to explore today?",
            
            CoachingMode.MARRIAGE: f"Hello! I'm {personality['name']}, and I specialize in helping married couples thrive through all of life's seasons. Marriage is a beautiful, complex journey, and I'm here to provide wisdom and practical tools to help you grow closer together. How can I support you today?",
            
            CoachingMode.BREAKUP: f"Hi there. I'm {personality['name']}, and I want you to know that I'm here to support you through this difficult time. Breakups are never easy, but they can also be opportunities for growth and healing. You don't have to go through this alone. What's weighing on your heart right now?",
            
            CoachingMode.CRISIS: f"Hello. I'm {personality['name']}, and I'm here to provide immediate support. I want you to know that whatever you're going through, you're not alone, and there is help available. Your safety and wellbeing are my top priority. Can you tell me what's happening right now?",
            
            CoachingMode.GENERAL: f"Hello! I'm Dr. Love, your personal relationship coach. I'm here to help you navigate any aspect of your relationship journey - from dating to long-term partnerships. Every person's story is unique, and I'm honored to be part of yours. What brings you here today?"
        }
        
        return welcome_messages.get(coaching_mode, welcome_messages[CoachingMode.GENERAL])
    
    async def _generate_coaching_response(self, session: CoachingSession, message: str,
                                        emotion_analysis: Dict[str, Any], 
                                        crisis_assessment: Dict[str, Any],
                                        context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Generate AI-powered coaching response"""
        
        personality = self.coaching_personalities[session.coaching_mode]
        
        # Build context for AI
        conversation_history = []
        for msg in session.messages[-10:]:  # Last 10 messages for context
            conversation_history.append({
                "role": msg["role"],
                "content": msg["content"]
            })
        
        # Create coaching prompt
        coaching_prompt = f"""
        You are {personality['name']}. {personality['personality']}
        
        Your areas of expertise include: {', '.join(personality['expertise'])}
        
        Current session context:
        - Coaching mode: {session.coaching_mode.value}
        - Session type: {session.session_type.value}
        - User's current emotion: {emotion_analysis['primary_emotion'].value} (intensity: {emotion_analysis['emotional_intensity']:.2f})
        - Crisis level: {crisis_assessment['crisis_level']}/10
        - Session duration: {(datetime.now() - session.started_at).total_seconds() / 60:.1f} minutes
        
        Recent conversation:
        {json.dumps(conversation_history, indent=2)}
        
        User's latest message: "{message}"
        
        Provide a coaching response that:
        1. Acknowledges their emotional state with empathy
        2. Offers specific, actionable advice
        3. Includes 2-3 follow-up questions to deepen the conversation
        4. Suggests 1-2 practical exercises or resources if appropriate
        5. Maintains your warm, professional coaching style
        
        Format your response as natural conversation, not a list.
        """
        
        # Create AI request
        ai_request = AIRequest(
            service_type=ServiceType.COACHING,
            data={
                "message": coaching_prompt,
                "session_id": session.session_id,
                "coaching_type": session.coaching_mode.value,
                "emotion_context": emotion_analysis,
                "crisis_context": crisis_assessment
            },
            user_id=session.user_id,
            complexity="high",  # Coaching requires sophisticated responses
            priority="high" if crisis_assessment["crisis_level"] > 5 else "normal"
        )
        
        # Get AI response
        ai_response = await self.ai_service_manager.process_request(ai_request)
        
        if not ai_response.success:
            # Fallback response
            return {
                "response": "I'm experiencing some technical difficulties right now, but I want you to know I'm here for you. Can you tell me a bit more about what's on your mind while I get back online?",
                "insights": [],
                "action_items": [],
                "follow_up_questions": ["What's the most important thing you'd like to focus on right now?"],
                "resources": []
            }
        
        coaching_response_text = ai_response.data.get("coaching_response", "")
        
        # Extract insights and action items (simplified - in production, this would use NLP)
        insights = self._extract_insights(coaching_response_text, session)
        action_items = self._extract_action_items(coaching_response_text)
        follow_up_questions = ai_response.data.get("follow_up_suggestions", [])
        
        return {
            "response": coaching_response_text,
            "insights": insights,
            "action_items": action_items,
            "follow_up_questions": follow_up_questions,
            "resources": self._suggest_resources(session.coaching_mode, emotion_analysis),
            "model_used": ai_response.model_used,
            "confidence": ai_response.confidence_score
        }
    
    async def _handle_crisis_response(self, session: CoachingSession, 
                                    crisis_assessment: Dict[str, Any],
                                    emotion_analysis: Dict[str, Any]) -> Dict[str, Any]:
        """Handle crisis situations with immediate intervention"""
        
        crisis_type = crisis_assessment.get("crisis_type")
        resources = crisis_assessment.get("resources", {})
        
        if crisis_type == "suicide_risk":
            crisis_response = f"""
            I'm very concerned about you right now, and I want you to know that you're not alone. Your life has value, and there are people who want to help you through this difficult time.
            
            Please reach out for immediate support:
            • Call 988 (Suicide & Crisis Lifeline) - available 24/7
            • Text HOME to 741741 (Crisis Text Line)
            • Chat online at suicidepreventionlifeline.org/chat
            
            If you're in immediate danger, please call 911 or go to your nearest emergency room.
            
            I care about you and want to continue supporting you, but right now it's important that you connect with crisis professionals who can provide the immediate help you need. Will you please reach out to one of these resources right now?
            """
        
        elif crisis_type == "relationship_crisis":
            crisis_response = f"""
            I'm very concerned about your safety. What you're describing sounds like it could be a dangerous situation, and your wellbeing is the most important thing.
            
            If you're in immediate danger, please call 911.
            
            For domestic violence support:
            • Call 1-800-799-7233 (National Domestic Violence Hotline) - 24/7
            • Text START to 88788
            • Chat online at thehotline.org
            
            These trained professionals can help you create a safety plan and connect you with local resources. You deserve to be safe and treated with respect.
            
            I'm here to support you, but please consider reaching out to these specialized resources who can provide the specific help you need right now.
            """
        
        else:
            crisis_response = f"""
            I can hear that you're going through an incredibly difficult time right now, and I want you to know that I'm here for you. Sometimes when we're overwhelmed, it helps to talk to someone with specialized training.
            
            Consider reaching out to:
            • Crisis Text Line: Text HOME to 741741
            • National Suicide Prevention Lifeline: 988
            • Or a local mental health crisis line
            
            These are trained professionals who specialize in helping people through crisis situations. 
            
            In the meantime, I'm here to listen and support you. Can you tell me what feels most overwhelming right now?
            """
        
        # Log crisis intervention
        logger.critical(f"Crisis intervention triggered for session {session.session_id}: {crisis_type}")
        
        # Add crisis response to session
        session.messages.append({
            "role": "assistant",
            "content": crisis_response,
            "timestamp": datetime.now().isoformat(),
            "message_type": "crisis_intervention",
            "crisis_level": crisis_assessment["crisis_level"],
            "resources_provided": resources
        })
        
        return {
            "session_id": session.session_id,
            "response": crisis_response,
            "crisis_intervention": True,
            "crisis_level": crisis_assessment["crisis_level"],
            "crisis_type": crisis_type,
            "resources_provided": resources,
            "immediate_action_required": True,
            "professional_help_recommended": True
        }
    
    def _extract_insights(self, response_text: str, session: CoachingSession) -> List[str]:
        """Extract insights from coaching response"""
        
        # Simplified insight extraction - in production, this would use NLP
        insights = []
        
        # Look for pattern insights
        if "pattern" in response_text.lower():
            insights.append("Communication pattern identified")
        
        if "strength" in response_text.lower():
            insights.append("Relationship strength recognized")
        
        if "growth" in response_text.lower():
            insights.append("Growth opportunity identified")
        
        # Add session-specific insights
        if len(session.emotional_journey) > 3:
            dominant_emotion = max(set(session.emotional_journey), key=session.emotional_journey.count)
            insights.append(f"Dominant emotional theme: {dominant_emotion.value}")
        
        return insights
    
    def _extract_action_items(self, response_text: str) -> List[str]:
        """Extract action items from coaching response"""
        
        # Simplified action item extraction
        action_items = []
        
        # Look for action-oriented language
        action_phrases = [
            "try", "practice", "consider", "schedule", "plan", "commit to",
            "start", "begin", "implement", "work on", "focus on"
        ]
        
        sentences = response_text.split('.')
        for sentence in sentences:
            if any(phrase in sentence.lower() for phrase in action_phrases):
                action_items.append(sentence.strip())
        
        return action_items[:3]  # Limit to 3 action items
    
    def _suggest_resources(self, coaching_mode: CoachingMode, 
                          emotion_analysis: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Suggest relevant resources based on coaching mode and emotional state"""
        
        resources = []
        
        # Mode-specific resources
        if coaching_mode == CoachingMode.DATING:
            resources.extend([
                {
                    "type": "article",
                    "title": "10 First Date Conversation Starters",
                    "url": "/resources/dating/first-date-conversations",
                    "description": "Break the ice with these proven conversation starters"
                },
                {
                    "type": "exercise",
                    "title": "Confidence Building Meditation",
                    "url": "/resources/meditations/confidence",
                    "description": "5-minute meditation to boost dating confidence"
                }
            ])
        
        elif coaching_mode == CoachingMode.RELATIONSHIP:
            resources.extend([
                {
                    "type": "assessment",
                    "title": "Love Languages Quiz",
                    "url": "/resources/assessments/love-languages",
                    "description": "Discover how you and your partner express love"
                },
                {
                    "type": "exercise",
                    "title": "Daily Appreciation Practice",
                    "url": "/resources/exercises/appreciation",
                    "description": "Strengthen your bond with daily gratitude"
                }
            ])
        
        # Emotion-specific resources
        primary_emotion = emotion_analysis.get("primary_emotion")
        
        if primary_emotion == EmotionalState.ANXIOUS:
            resources.append({
                "type": "meditation",
                "title": "Anxiety Relief Meditation",
                "url": "/resources/meditations/anxiety-relief",
                "description": "Calm your mind and reduce relationship anxiety"
            })
        
        elif primary_emotion == EmotionalState.SAD:
            resources.append({
                "type": "article",
                "title": "Healing After Heartbreak",
                "url": "/resources/articles/healing-heartbreak",
                "description": "Gentle guidance for emotional recovery"
            })
        
        return resources[:3]  # Limit to 3 resources
    
    async def end_session(self, session_id: str, satisfaction_rating: Optional[int] = None) -> Dict[str, Any]:
        """End a coaching session"""
        
        if session_id not in self.active_sessions:
            raise ValueError(f"Session {session_id} not found")
        
        session = self.active_sessions[session_id]
        session.ended_at = datetime.now()
        session.satisfaction_rating = satisfaction_rating
        
        # Generate session summary
        session_summary = await self._generate_session_summary(session)
        
        # Move to history
        self.coaching_history[session_id] = session
        del self.active_sessions[session_id]
        
        logger.info(f"Ended coaching session {session_id} after {(session.ended_at - session.started_at).total_seconds() / 60:.1f} minutes")
        
        return {
            "session_id": session_id,
            "session_summary": session_summary,
            "duration_minutes": (session.ended_at - session.started_at).total_seconds() / 60,
            "messages_exchanged": len(session.messages),
            "insights_generated": len(session.insights_generated),
            "action_items": session.action_items,
            "satisfaction_rating": satisfaction_rating
        }
    
    async def _generate_session_summary(self, session: CoachingSession) -> Dict[str, Any]:
        """Generate comprehensive session summary"""
        
        # Analyze conversation patterns
        conversation_analysis = self.conversation_analyzer.analyze_conversation(session.messages)
        
        # Calculate emotional journey
        emotional_progression = []
        if session.emotional_journey:
            for i, emotion in enumerate(session.emotional_journey):
                emotional_progression.append({
                    "stage": i + 1,
                    "emotion": emotion.value,
                    "timestamp": session.messages[i].get("timestamp") if i < len(session.messages) else None
                })
        
        return {
            "coaching_mode": session.coaching_mode.value,
            "session_type": session.session_type.value,
            "duration_minutes": (session.ended_at - session.started_at).total_seconds() / 60,
            "emotional_journey": emotional_progression,
            "key_insights": session.insights_generated,
            "action_items": session.action_items,
            "conversation_analysis": conversation_analysis,
            "crisis_level": session.crisis_level,
            "breakthrough_moments": self._identify_breakthrough_moments(session),
            "recommended_follow_up": self._recommend_follow_up(session)
        }
    
    def _identify_breakthrough_moments(self, session: CoachingSession) -> List[Dict[str, Any]]:
        """Identify breakthrough moments in the session"""
        
        breakthroughs = []
        
        # Look for emotional shifts
        if len(session.emotional_journey) > 2:
            for i in range(1, len(session.emotional_journey)):
                prev_emotion = session.emotional_journey[i-1]
                curr_emotion = session.emotional_journey[i]
                
                # Positive emotional shifts
                if (prev_emotion in [EmotionalState.SAD, EmotionalState.ANXIOUS, EmotionalState.FRUSTRATED] and
                    curr_emotion in [EmotionalState.HOPEFUL, EmotionalState.HAPPY, EmotionalState.NEUTRAL]):
                    breakthroughs.append({
                        "type": "emotional_shift",
                        "description": f"Shifted from {prev_emotion.value} to {curr_emotion.value}",
                        "stage": i + 1
                    })
        
        # Look for insight moments
        for i, message in enumerate(session.messages):
            if message.get("role") == "user" and any(phrase in message.get("content", "").lower() 
                                                   for phrase in ["i see", "i understand", "that makes sense", "aha"]):
                breakthroughs.append({
                    "type": "insight_moment",
                    "description": "User expressed understanding or realization",
                    "stage": i + 1
                })
        
        return breakthroughs
    
    def _recommend_follow_up(self, session: CoachingSession) -> Dict[str, Any]:
        """Recommend follow-up actions based on session"""
        
        recommendations = {
            "next_session_timing": "1 week",
            "focus_areas": [],
            "resources_to_explore": [],
            "exercises_to_practice": []
        }
        
        # Based on coaching mode
        if session.coaching_mode == CoachingMode.DATING:
            recommendations["focus_areas"].append("Building confidence and authentic connections")
            recommendations["exercises_to_practice"].append("Daily confidence affirmations")
        
        elif session.coaching_mode == CoachingMode.RELATIONSHIP:
            recommendations["focus_areas"].append("Strengthening communication patterns")
            recommendations["exercises_to_practice"].append("Weekly relationship check-ins")
        
        # Based on emotional journey
        if EmotionalState.ANXIOUS in session.emotional_journey:
            recommendations["resources_to_explore"].append("Anxiety management techniques")
            recommendations["exercises_to_practice"].append("Mindfulness meditation")
        
        # Based on crisis level
        if session.crisis_level > 5:
            recommendations["next_session_timing"] = "3 days"
            recommendations["focus_areas"].append("Crisis stabilization and safety planning")
        
        return recommendations
    
    async def get_coaching_analytics(self, user_id: str, days: int = 30) -> Dict[str, Any]:
        """Get coaching analytics for a user"""
        
        # Get user's sessions from the last N days
        cutoff_date = datetime.now() - timedelta(days=days)
        user_sessions = [
            session for session in self.coaching_history.values()
            if session.user_id == user_id and session.started_at >= cutoff_date
        ]
        
        if not user_sessions:
            return {"message": "No coaching sessions found for this period"}
        
        # Calculate analytics
        total_sessions = len(user_sessions)
        total_duration = sum((s.ended_at - s.started_at).total_seconds() / 60 for s in user_sessions if s.ended_at)
        avg_session_duration = total_duration / total_sessions if total_sessions > 0 else 0
        
        # Emotional journey analysis
        all_emotions = []
        for session in user_sessions:
            all_emotions.extend(session.emotional_journey)
        
        emotion_distribution = {}
        for emotion in all_emotions:
            emotion_distribution[emotion.value] = emotion_distribution.get(emotion.value, 0) + 1
        
        # Crisis level trends
        crisis_levels = [session.crisis_level for session in user_sessions]
        avg_crisis_level = sum(crisis_levels) / len(crisis_levels) if crisis_levels else 0
        
        # Satisfaction ratings
        satisfaction_ratings = [s.satisfaction_rating for s in user_sessions if s.satisfaction_rating is not None]
        avg_satisfaction = sum(satisfaction_ratings) / len(satisfaction_ratings) if satisfaction_ratings else None
        
        return {
            "period_days": days,
            "total_sessions": total_sessions,
            "total_duration_minutes": total_duration,
            "average_session_duration": avg_session_duration,
            "emotion_distribution": emotion_distribution,
            "average_crisis_level": avg_crisis_level,
            "average_satisfaction": avg_satisfaction,
            "most_used_coaching_mode": max(set(s.coaching_mode for s in user_sessions), 
                                         key=[s.coaching_mode for s in user_sessions].count).value,
            "total_insights_generated": sum(len(s.insights_generated) for s in user_sessions),
            "total_action_items": sum(len(s.action_items) for s in user_sessions),
            "progress_indicators": self._calculate_progress_indicators(user_sessions)
        }
    
    def _calculate_progress_indicators(self, sessions: List[CoachingSession]) -> Dict[str, Any]:
        """Calculate progress indicators from session history"""
        
        if len(sessions) < 2:
            return {"message": "Need at least 2 sessions to calculate progress"}
        
        # Sort sessions by date
        sorted_sessions = sorted(sessions, key=lambda s: s.started_at)
        
        # Calculate trends
        early_sessions = sorted_sessions[:len(sorted_sessions)//2]
        recent_sessions = sorted_sessions[len(sorted_sessions)//2:]
        
        early_crisis_avg = sum(s.crisis_level for s in early_sessions) / len(early_sessions)
        recent_crisis_avg = sum(s.crisis_level for s in recent_sessions) / len(recent_sessions)
        
        crisis_improvement = early_crisis_avg - recent_crisis_avg
        
        # Emotional stability (less variation = more stable)
        early_emotions = []
        recent_emotions = []
        
        for session in early_sessions:
            early_emotions.extend(session.emotional_journey)
        for session in recent_sessions:
            recent_emotions.extend(session.emotional_journey)
        
        early_emotion_variety = len(set(early_emotions))
        recent_emotion_variety = len(set(recent_emotions))
        
        return {
            "crisis_level_improvement": crisis_improvement,
            "emotional_stability_trend": "improving" if recent_emotion_variety < early_emotion_variety else "stable",
            "session_frequency_trend": "increasing" if len(recent_sessions) > len(early_sessions) else "stable",
            "overall_progress": "positive" if crisis_improvement > 0 else "stable"
        }

# Global Dr. Love coach instance
dr_love_coach = None

async def initialize_dr_love_coach(ai_service_manager: AIServiceManager):
    """Initialize Dr. Love AI Coach"""
    global dr_love_coach
    dr_love_coach = DrLoveAICoach(ai_service_manager)
    logger.info("Dr. Love AI Coach initialized successfully")

def get_dr_love_coach() -> DrLoveAICoach:
    """Get the global Dr. Love coach instance"""
    if dr_love_coach is None:
        raise RuntimeError("Dr. Love coach not initialized")
    return dr_love_coach

