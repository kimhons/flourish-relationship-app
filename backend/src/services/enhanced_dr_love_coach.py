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
from .relationship_expert_prompts import (
    RelationshipExpertPrompts, RelationshipExpertise, PromptSecurityLevel,
    SecurePromptConfig, create_relationship_expert_system, RELATIONSHIP_PROMPT_TEMPLATES
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
    """Enhanced AI-powered relationship coach with advanced capabilities"""
    
    def __init__(self, ai_manager: Optional[AdvancedAIManager] = None):
        self.ai_manager = ai_manager or create_advanced_ai_manager()
        self.crisis_detector = EnhancedCrisisDetector()
        self.prompt_generator = EnhancedPromptGenerator()
        self.response_enhancer = ResponseEnhancer()
        self.active_sessions: Dict[str, EnhancedCoachingSession] = {}
        self.session_history: Dict[str, List[str]] = {}
        
        # Initialize the secure relationship expert system
        self.relationship_expert = create_relationship_expert_system()
        
        # Map coaching modes to relationship expertise
        self.mode_to_expertise = {
            CoachingMode.DATING: RelationshipExpertise.DATING_DYNAMICS,
            CoachingMode.RELATIONSHIP: RelationshipExpertise.COMMUNICATION_SKILLS,
            CoachingMode.MARRIAGE: RelationshipExpertise.MARRIAGE_ENRICHMENT,
            CoachingMode.BREAKUP: RelationshipExpertise.BREAKUP_RECOVERY,
            CoachingMode.CRISIS: RelationshipExpertise.CONFLICT_RESOLUTION,
            CoachingMode.GENERAL: RelationshipExpertise.COMMUNICATION_SKILLS
        }
        
    async def start_session(
        self,
        user_id: str,
        coaching_mode: CoachingMode,
        session_type: SessionType,
        context: Optional[CoachingContext] = None
    ) -> EnhancedCoachingSession:
        """Start a new enhanced coaching session"""
        session = EnhancedCoachingSession(
            session_id=str(uuid.uuid4()),
            user_id=user_id,
            coaching_mode=coaching_mode,
            session_type=session_type,
            started_at=datetime.now()
        )
        
        self.active_sessions[session.session_id] = session
        
        # Initialize session history
        if user_id not in self.session_history:
            self.session_history[user_id] = []
        self.session_history[user_id].append(session.session_id)
        
        # Generate welcome message based on mode and context
        welcome_prompt = self._generate_welcome_prompt(coaching_mode, context)
        
        # Get appropriate expertise
        expertise = self.mode_to_expertise.get(coaching_mode, RelationshipExpertise.COMMUNICATION_SKILLS)
        
        # Create secure prompt with context
        secure_prompt, prompt_metadata = self.relationship_expert.create_secure_prompt(
            welcome_prompt,
            expertise,
            context=context.__dict__ if context else None
        )
        
        # If security alert, handle appropriately
        if prompt_metadata.get("security_alert"):
            logger.warning(f"Security alert in session {session.session_id}: {prompt_metadata}")
            welcome_response = self.relationship_expert._get_injection_response()
        else:
            # Generate AI response
            ai_request = AIRequest(
                task_type="coaching_welcome",
                content=secure_prompt,
                user_id=user_id,
                session_id=session.session_id,
                expert_preference=ExpertType.RELATIONSHIP_COUNSELOR,
                prompt_template=PromptTemplate.EMOTIONAL_INTELLIGENCE,
                priority="high" if coaching_mode == CoachingMode.CRISIS else "normal"
            )
            
            ai_response = await self.ai_manager.process_request(ai_request)
            
            # Validate response for security
            validated_response, violations = self.relationship_expert.protector.validate_output(ai_response.content)
            if violations:
                logger.warning(f"Output validation violations: {violations}")
            
            welcome_response = validated_response
        
        # Add to session
        session.messages.append({
            "role": "assistant",
            "content": welcome_response,
            "timestamp": datetime.now().isoformat(),
            "metadata": prompt_metadata
        })
        
        return session
    
    async def process_message(
        self,
        session_id: str,
        message: str,
        emotional_state: Optional[EmotionalState] = None
    ) -> Dict[str, Any]:
        """Process a user message with enhanced AI capabilities and security"""
        session = self.active_sessions.get(session_id)
        if not session:
            raise ValueError(f"Session {session_id} not found")
        
        # Update emotional journey
        if emotional_state:
            session.emotional_journey.append(emotional_state)
        
        # Detect crisis level with enhanced detection
        crisis_analysis = self.crisis_detector.analyze_message(
            message, 
            session.emotional_journey,
            session.messages
        )
        session.crisis_level = crisis_analysis["crisis_level"]
        
        # Get conversation history for context
        conversation_history = [
            {"role": msg["role"], "content": msg["content"]}
            for msg in session.messages[-10:]  # Last 10 messages
        ]
        
        # Determine expertise based on message content and session mode
        expertise = self._determine_expertise(message, session.coaching_mode, crisis_analysis)
        
        # Create secure prompt with full context
        user_context = {
            "relationship_status": session.coaching_mode.value,
            "emotional_state": emotional_state.value if emotional_state else "unknown",
            "crisis_level": session.crisis_level,
            "session_duration": str(datetime.now() - session.started_at),
            "message_count": len(session.messages)
        }
        
        secure_prompt, prompt_metadata = self.relationship_expert.create_secure_prompt(
            message,
            expertise,
            context=user_context,
            conversation_history=conversation_history
        )
        
        # Handle security alerts
        if prompt_metadata.get("security_alert"):
            logger.warning(f"Security alert in session {session_id}: {prompt_metadata}")
            response_content = self.relationship_expert._get_injection_response()
            expert_used = ExpertType.RELATIONSHIP_COUNSELOR
            processing_time = 0.1
        else:
            # Determine if we need multiple experts
            enable_multi_expert = (
                session.crisis_level >= 7 or
                expertise in [RelationshipExpertise.CRISIS_INTERVENTION, RelationshipExpertise.TRUST_BUILDING]
            )
            
            # Create AI request with enhanced parameters
            ai_request = AIRequest(
                task_type="coaching_response",
                content=secure_prompt,
                user_id=session.user_id,
                session_id=session_id,
                context={
                    "crisis_level": session.crisis_level,
                    "emotional_state": emotional_state.value if emotional_state else None,
                    "coaching_mode": session.coaching_mode.value,
                    "expertise_required": expertise.value
                },
                priority="urgent" if session.crisis_level >= 8 else "high" if session.crisis_level >= 5 else "normal",
                expert_preference=self._map_expertise_to_expert(expertise),
                prompt_template=self._select_prompt_template(expertise, crisis_analysis),
                enable_multi_expert=enable_multi_expert,
                require_structured_output=True
            )
            
            # Process with AI manager
            start_time = time.time()
            ai_response = await self.ai_manager.process_request(ai_request)
            processing_time = time.time() - start_time
            
            # Validate and enhance response
            validated_response, violations = self.relationship_expert.protector.validate_output(ai_response.content)
            if violations:
                logger.warning(f"Output validation violations in session {session_id}: {violations}")
            
            # Apply response enhancement
            enhanced_response = await self.response_enhancer.enhance(
                validated_response,
                session.coaching_mode,
                emotional_state,
                crisis_analysis
            )
            
            response_content = enhanced_response["content"]
            expert_used = ai_response.expert_used
        
        # Extract insights and action items
        insights = self._extract_insights(response_content, expertise)
        action_items = self._extract_action_items(response_content, session.coaching_mode)
        
        # Update session
        session.messages.append({
            "role": "user",
            "content": message,
            "timestamp": datetime.now().isoformat(),
            "emotional_state": emotional_state.value if emotional_state else None
        })
        
        session.messages.append({
            "role": "assistant",
            "content": response_content,
            "timestamp": datetime.now().isoformat(),
            "expert": expert_used.value,
            "processing_time": processing_time,
            "metadata": prompt_metadata
        })
        
        session.insights_generated.extend(insights)
        session.action_items.extend(action_items)
        
        # Check for breakthrough moments
        if self._detect_breakthrough(message, response_content, session.emotional_journey):
            session.breakthrough_moments.append({
                "timestamp": datetime.now().isoformat(),
                "trigger": message[:100],
                "insight": insights[0] if insights else "Significant progress made",
                "emotional_shift": self._calculate_emotional_shift(session.emotional_journey)
            })
        
        # Update progress indicators
        session.progress_indicators = self._calculate_progress_indicators(session)
        
        return {
            "response": response_content,
            "expert_used": expert_used.value,
            "crisis_level": session.crisis_level,
            "insights": insights,
            "action_items": action_items,
            "emotional_analysis": crisis_analysis.get("emotional_analysis", {}),
            "progress_indicators": session.progress_indicators,
            "security_metadata": prompt_metadata,
            "processing_time": processing_time
        }
    
    def _determine_expertise(
        self, 
        message: str, 
        coaching_mode: CoachingMode,
        crisis_analysis: Dict[str, Any]
    ) -> RelationshipExpertise:
        """Determine the best expertise area based on message content and context"""
        message_lower = message.lower()
        
        # Crisis takes priority
        if crisis_analysis["crisis_level"] >= 7:
            return RelationshipExpertise.CONFLICT_RESOLUTION
        
        # Keyword-based expertise mapping
        expertise_keywords = {
            RelationshipExpertise.TRUST_BUILDING: ["trust", "betrayal", "cheating", "lying", "honesty"],
            RelationshipExpertise.FINANCIAL_HARMONY: ["money", "finances", "budget", "debt", "spending"],
            RelationshipExpertise.EMOTIONAL_INTIMACY: ["intimacy", "connection", "distant", "close", "vulnerable"],
            RelationshipExpertise.COMMUNICATION_SKILLS: ["communication", "talk", "listen", "understand", "express"],
            RelationshipExpertise.CONFLICT_RESOLUTION: ["fight", "argument", "conflict", "disagree", "angry"],
            RelationshipExpertise.DATING_DYNAMICS: ["date", "dating", "match", "single", "meet"],
            RelationshipExpertise.BREAKUP_RECOVERY: ["breakup", "divorce", "separation", "ex", "moving on"],
            RelationshipExpertise.SEXUAL_WELLNESS: ["sex", "physical", "intimate", "bedroom", "passion"],
            RelationshipExpertise.PARENTING_TOGETHER: ["kids", "children", "parenting", "family", "baby"],
            RelationshipExpertise.ATTACHMENT_HEALING: ["attachment", "trauma", "past", "childhood", "therapy"]
        }
        
        # Score each expertise area
        scores = {}
        for expertise, keywords in expertise_keywords.items():
            score = sum(1 for keyword in keywords if keyword in message_lower)
            if score > 0:
                scores[expertise] = score
        
        # Return highest scoring expertise or default based on mode
        if scores:
            return max(scores.items(), key=lambda x: x[1])[0]
        
        return self.mode_to_expertise.get(coaching_mode, RelationshipExpertise.COMMUNICATION_SKILLS)
    
    def _map_expertise_to_expert(self, expertise: RelationshipExpertise) -> ExpertType:
        """Map relationship expertise to AI expert type"""
        expertise_to_expert = {
            RelationshipExpertise.CONFLICT_RESOLUTION: ExpertType.CONFLICT_RESOLVER,
            RelationshipExpertise.COMMUNICATION_SKILLS: ExpertType.COMMUNICATION_EXPERT,
            RelationshipExpertise.EMOTIONAL_INTIMACY: ExpertType.EMOTIONAL_INTELLIGENCE,
            RelationshipExpertise.TRUST_BUILDING: ExpertType.RELATIONSHIP_COUNSELOR,
            RelationshipExpertise.DATING_DYNAMICS: ExpertType.DATING_COACH,
            RelationshipExpertise.ATTACHMENT_HEALING: ExpertType.ATTACHMENT_SPECIALIST,
        }
        
        return expertise_to_expert.get(expertise, ExpertType.RELATIONSHIP_COUNSELOR)
    
    def _select_prompt_template(
        self, 
        expertise: RelationshipExpertise,
        crisis_analysis: Dict[str, Any]
    ) -> PromptTemplate:
        """Select appropriate prompt template based on expertise and situation"""
        if crisis_analysis["crisis_level"] >= 8:
            return PromptTemplate.CRISIS_INTERVENTION
        
        template_mapping = {
            RelationshipExpertise.CONFLICT_RESOLUTION: PromptTemplate.SOCRATIC_QUESTIONING,
            RelationshipExpertise.EMOTIONAL_INTIMACY: PromptTemplate.EMOTIONAL_INTELLIGENCE,
            RelationshipExpertise.TRUST_BUILDING: PromptTemplate.MULTI_PERSPECTIVE,
            RelationshipExpertise.COMMUNICATION_SKILLS: PromptTemplate.ROLE_PLAYING,
            RelationshipExpertise.DATING_DYNAMICS: PromptTemplate.FEW_SHOT_LEARNING,
        }
        
        return template_mapping.get(expertise, PromptTemplate.CHAIN_OF_THOUGHT)

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