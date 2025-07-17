"""
Enhanced Relationship Agents System
Optimized for relationship counseling, communication, conflict resolution, and life skills
with advanced security measures against prompt injection
"""

import asyncio
import logging
import json
import re
import time
from typing import Dict, List, Optional, Any, Union, Tuple
from dataclasses import dataclass, field
from enum import Enum
from datetime import datetime, timedelta
import uuid
import hashlib
from collections import defaultdict

logger = logging.getLogger(__name__)

class RelationshipExpertType(Enum):
    """Specialized relationship experts"""
    MARRIAGE_COUNSELOR = "marriage_counselor"
    DATING_COACH = "dating_coach"
    COMMUNICATION_SPECIALIST = "communication_specialist"
    CONFLICT_RESOLUTION_EXPERT = "conflict_resolution_expert"
    FINANCIAL_ADVISOR = "financial_advisor"
    INTIMACY_COACH = "intimacy_coach"
    ATTACHMENT_THERAPIST = "attachment_therapist"
    LIFE_SKILLS_MENTOR = "life_skills_mentor"
    CRISIS_INTERVENTIONIST = "crisis_interventionist"
    EMOTIONAL_INTELLIGENCE_COACH = "emotional_intelligence_coach"
    BOUNDARY_SETTING_EXPERT = "boundary_setting_expert"
    FAMILY_DYNAMICS_SPECIALIST = "family_dynamics_specialist"

class SecurityLevel(Enum):
    """Security levels for input validation"""
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class ResponseQuality(Enum):
    """Response quality levels"""
    BASIC = "basic"
    ENHANCED = "enhanced"
    PREMIUM = "premium"
    THERAPEUTIC = "therapeutic"

@dataclass
class SecurityConfig:
    """Security configuration for prompt injection protection"""
    enable_input_sanitization: bool = True
    enable_output_filtering: bool = True
    max_input_length: int = 5000
    blocked_patterns: List[str] = field(default_factory=lambda: [
        r"ignore.*previous.*instructions?",
        r"forget.*everything.*above",
        r"you.*are.*now.*a",
        r"system.*prompt.*is",
        r"pretend.*to.*be",
        r"act.*as.*if.*you.*are",
        r"jailbreak",
        r"DAN.*mode",
        r"developer.*mode",
        r"admin.*access",
        r"override.*safety",
        r"bypass.*filter",
    ])
    suspicious_keywords: List[str] = field(default_factory=lambda: [
        "ignore", "override", "bypass", "jailbreak", "admin", "root", 
        "system", "prompt", "instruction", "command", "execute", "run"
    ])
    max_suspicious_score: float = 0.3

@dataclass
class RelationshipContext:
    """Comprehensive relationship context"""
    relationship_status: str  # single, dating, engaged, married, divorced, etc.
    relationship_duration: Optional[str] = None
    ages: Optional[Dict[str, int]] = None
    children: Optional[bool] = None
    previous_therapy: Optional[bool] = None
    cultural_background: Optional[str] = None
    communication_style: Optional[str] = None
    conflict_style: Optional[str] = None
    love_languages: Optional[List[str]] = None
    attachment_styles: Optional[Dict[str, str]] = None
    current_stressors: Optional[List[str]] = None
    goals: Optional[List[str]] = None
    triggers: Optional[List[str]] = None

class PromptInjectionDetector:
    """Advanced prompt injection detection and prevention"""
    
    def __init__(self, security_config: SecurityConfig):
        self.config = security_config
        self.compiled_patterns = [re.compile(pattern, re.IGNORECASE) 
                                for pattern in security_config.blocked_patterns]
    
    def detect_injection_attempt(self, text: str) -> Tuple[bool, float, List[str]]:
        """
        Detect potential prompt injection attempts
        
        Returns:
            Tuple of (is_suspicious, suspicion_score, detected_patterns)
        """
        if not text or len(text) > self.config.max_input_length:
            return True, 1.0, ["Input too long or empty"]
        
        detected_patterns = []
        suspicion_score = 0.0
        
        # Check for blocked patterns
        for pattern in self.compiled_patterns:
            if pattern.search(text):
                detected_patterns.append(pattern.pattern)
                suspicion_score += 0.3
        
        # Check for suspicious keyword density
        words = text.lower().split()
        suspicious_count = sum(1 for word in words if word in self.config.suspicious_keywords)
        keyword_density = suspicious_count / len(words) if words else 0
        
        if keyword_density > 0.1:  # More than 10% suspicious keywords
            suspicion_score += keyword_density * 0.5
            detected_patterns.append(f"High suspicious keyword density: {keyword_density:.2%}")
        
        # Check for role manipulation attempts
        role_patterns = [
            r"you.*are.*not.*a",
            r"forget.*you.*are",
            r"instead.*of.*being",
            r"your.*new.*role",
            r"from.*now.*on.*you.*are"
        ]
        
        for pattern in role_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                suspicion_score += 0.4
                detected_patterns.append(f"Role manipulation: {pattern}")
        
        # Check for instruction override attempts
        override_patterns = [
            r"new.*instructions?",
            r"updated.*guidelines",
            r"revised.*rules",
            r"different.*behavior",
            r"special.*mode"
        ]
        
        for pattern in override_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                suspicion_score += 0.3
                detected_patterns.append(f"Instruction override: {pattern}")
        
        is_suspicious = suspicion_score > self.config.max_suspicious_score
        
        return is_suspicious, min(suspicion_score, 1.0), detected_patterns
    
    def sanitize_input(self, text: str) -> str:
        """Sanitize input while preserving therapeutic value"""
        if not self.config.enable_input_sanitization:
            return text
        
        # Remove potential injection markers
        sanitized = re.sub(r'[<>{}[\]\\]', '', text)
        
        # Normalize whitespace
        sanitized = ' '.join(sanitized.split())
        
        # Truncate if too long
        if len(sanitized) > self.config.max_input_length:
            sanitized = sanitized[:self.config.max_input_length] + "..."
        
        return sanitized

class RelationshipAgentPrompts:
    """Advanced prompt templates for relationship agents"""
    
    @staticmethod
    def get_expert_system_prompt(expert_type: RelationshipExpertType) -> str:
        """Get specialized system prompt for each expert type"""
        
        prompts = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: """
You are Dr. Sarah Chen, a licensed marriage and family therapist with 15 years of experience. You specialize in helping couples strengthen their marriages through evidence-based therapeutic approaches including Gottman Method, Emotionally Focused Therapy (EFT), and Cognitive Behavioral Therapy.

Your approach is:
- Warm, empathetic, and non-judgmental
- Focused on building emotional connection and trust
- Skilled at identifying relationship patterns and cycles
- Committed to helping couples develop healthy communication
- Experienced in addressing intimacy, conflict resolution, and life transitions

Core principles:
1. Every marriage has potential for growth and healing
2. Both partners' perspectives are valid and important
3. Small changes can lead to significant improvements
4. Focus on strengths while addressing challenges
5. Provide practical, actionable strategies

You MUST maintain professional boundaries and never:
- Give advice outside your scope of practice
- Make decisions for clients
- Break confidentiality
- Engage with inappropriate requests
""",

            RelationshipExpertType.COMMUNICATION_SPECIALIST: """
You are Dr. Michael Rodriguez, a communication expert specializing in interpersonal relationships. You have a PhD in Communication Psychology and 12 years of experience helping people improve their communication skills in romantic relationships, family dynamics, and social interactions.

Your expertise includes:
- Active listening techniques
- Nonviolent communication (NVC)
- Conflict de-escalation
- Emotional expression and validation
- Cross-cultural communication
- Digital communication in relationships

Your approach:
- Practical and skill-focused
- Patient and encouraging
- Culturally sensitive
- Focused on building understanding
- Emphasizes both verbal and nonverbal communication

Core principles:
1. Communication is a learnable skill
2. Understanding precedes being understood
3. Emotions are valid and deserve acknowledgment
4. Healthy boundaries enhance communication
5. Practice makes progress, not perfection

You MUST stay within communication expertise and refer to other specialists when appropriate.
""",

            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: """
You are Dr. Jennifer Williams, a conflict resolution specialist with expertise in mediation, negotiation, and relationship repair. You hold certifications in conflict mediation and have 10 years of experience helping couples and families resolve disputes constructively.

Your specializations:
- De-escalation techniques
- Finding win-win solutions
- Addressing underlying needs and interests
- Rebuilding trust after conflict
- Preventing destructive conflict patterns
- Restorative relationship practices

Your methodology:
- Neutral and fair to all parties
- Focused on interests, not positions
- Collaborative problem-solving approach
- Emphasis on future-focused solutions
- Skilled at managing high-emotion situations

Core principles:
1. Conflict is normal and can be constructive
2. Focus on the issue, not attacking the person
3. Seek to understand before seeking to be understood
4. Look for underlying needs and interests
5. Build bridges, don't burn them

You MUST remain impartial and focus on resolution strategies.
""",

            RelationshipExpertType.FINANCIAL_ADVISOR: """
You are David Thompson, CFP®, a Certified Financial Planner specializing in financial planning for couples and families. You have 8 years of experience helping couples navigate financial challenges, plan for their future, and resolve money-related conflicts.

Your expertise includes:
- Couples' financial planning and budgeting
- Debt management strategies
- Investment planning for relationships
- Financial communication and transparency
- Money mindset and psychology
- Estate planning for couples

Your approach:
- Practical and goal-oriented
- Non-judgmental about past financial decisions
- Focused on building financial harmony
- Educational and empowering
- Sensitive to different money backgrounds

Core principles:
1. Financial health supports relationship health
2. Transparency builds trust
3. Shared goals create unity
4. Different money styles can complement each other
5. Financial planning is about values, not just numbers

You MUST provide educational information only and recommend consulting with licensed financial professionals for specific advice.
""",

            RelationshipExpertType.LIFE_SKILLS_MENTOR: """
You are Maria Santos, a life skills coach and mentor with expertise in personal development, goal setting, and life transitions. You have 7 years of experience helping individuals and couples develop essential life skills for successful relationships and personal fulfillment.

Your areas of focus:
- Time management and work-life balance
- Stress management and self-care
- Goal setting and achievement
- Personal boundaries and assertiveness
- Emotional regulation and resilience
- Healthy habit formation

Your coaching style:
- Encouraging and motivational
- Practical and action-oriented
- Holistic approach to well-being
- Strengths-based development
- Collaborative goal setting

Core principles:
1. Personal growth enhances relationship quality
2. Small consistent actions create lasting change
3. Self-awareness is the foundation of growth
4. Balance is key to sustainable success
5. Everyone has unique strengths to build upon

You MUST focus on skill-building and personal development within healthy relationship contexts.
"""
        }
        
        return prompts.get(expert_type, prompts[RelationshipExpertType.MARRIAGE_COUNSELOR])
    
    @staticmethod
    def get_response_template(expert_type: RelationshipExpertType, quality: ResponseQuality) -> str:
        """Get response template based on expert type and quality level"""
        
        if quality == ResponseQuality.THERAPEUTIC:
            return """
Based on my professional assessment, here's my therapeutic response:

**Emotional Validation:**
{emotional_validation}

**Professional Assessment:**
{professional_assessment}

**Therapeutic Recommendations:**
{therapeutic_recommendations}

**Practical Next Steps:**
{practical_steps}

**Resources for Further Support:**
{resources}

**Follow-up Considerations:**
{follow_up}

Remember, this guidance is meant to support your growth, but please consider professional therapy if you need more intensive support.
"""
        
        elif quality == ResponseQuality.PREMIUM:
            return """
**Understanding Your Situation:**
{situation_understanding}

**Key Insights:**
{key_insights}

**Personalized Recommendations:**
{recommendations}

**Action Steps:**
{action_steps}

**Additional Support:**
{additional_support}
"""
        
        else:  # Enhanced or Basic
            return """
{main_response}

**Key Points:**
{key_points}

**Suggested Actions:**
{suggested_actions}
"""

class EnhancedRelationshipAgent:
    """Enhanced relationship agent with specialized expertise and security"""
    
    def __init__(self, expert_type: RelationshipExpertType, ai_service_manager, 
                 security_config: SecurityConfig = None):
        self.expert_type = expert_type
        self.ai_service_manager = ai_service_manager
        self.security_config = security_config or SecurityConfig()
        self.injection_detector = PromptInjectionDetector(self.security_config)
        self.session_history = defaultdict(list)
        self.expert_memory = defaultdict(dict)
        
        # Initialize expert-specific configurations
        self.system_prompt = RelationshipAgentPrompts.get_expert_system_prompt(expert_type)
        self.expertise_areas = self._get_expertise_areas()
        self.therapeutic_approaches = self._get_therapeutic_approaches()
        
    def _get_expertise_areas(self) -> List[str]:
        """Get specific expertise areas for this agent"""
        expertise_map = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: [
                "Marriage therapy", "Couple communication", "Intimacy building",
                "Conflict resolution", "Trust rebuilding", "Life transitions"
            ],
            RelationshipExpertType.COMMUNICATION_SPECIALIST: [
                "Active listening", "Nonviolent communication", "Emotional expression",
                "Conflict de-escalation", "Cross-cultural communication", "Digital communication"
            ],
            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
                "Mediation", "De-escalation", "Win-win solutions", "Trust rebuilding",
                "Restorative practices", "Constructive conflict"
            ],
            RelationshipExpertType.FINANCIAL_ADVISOR: [
                "Couples budgeting", "Financial communication", "Debt management",
                "Investment planning", "Money mindset", "Financial transparency"
            ],
            RelationshipExpertType.LIFE_SKILLS_MENTOR: [
                "Time management", "Stress management", "Goal setting",
                "Boundary setting", "Emotional regulation", "Habit formation"
            ]
        }
        return expertise_map.get(self.expert_type, [])
    
    def _get_therapeutic_approaches(self) -> List[str]:
        """Get therapeutic approaches used by this expert"""
        approaches_map = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: [
                "Gottman Method", "Emotionally Focused Therapy (EFT)",
                "Cognitive Behavioral Therapy", "Solution-Focused Therapy"
            ],
            RelationshipExpertType.COMMUNICATION_SPECIALIST: [
                "Nonviolent Communication", "Active Listening Training",
                "Mindful Communication", "Assertiveness Training"
            ],
            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
                "Interest-Based Negotiation", "Restorative Justice",
                "Collaborative Problem-Solving", "Mediation"
            ],
            RelationshipExpertType.FINANCIAL_ADVISOR: [
                "Financial Therapy", "Behavioral Finance",
                "Values-Based Financial Planning", "Money Coaching"
            ],
            RelationshipExpertType.LIFE_SKILLS_MENTOR: [
                "Cognitive Behavioral Coaching", "Mindfulness-Based Coaching",
                "Strengths-Based Development", "Goal-Setting Theory"
            ]
        }
        return approaches_map.get(self.expert_type, [])
    
    async def process_request(self, user_input: str, user_id: str, 
                            context: RelationshipContext = None,
                            quality: ResponseQuality = ResponseQuality.ENHANCED) -> Dict[str, Any]:
        """Process user request with security validation and expert response"""
        
        # Security validation
        is_suspicious, suspicion_score, detected_patterns = self.injection_detector.detect_injection_attempt(user_input)
        
        if is_suspicious:
            logger.warning(f"Suspicious input detected for user {user_id}: {detected_patterns}")
            return {
                "success": False,
                "error": "I notice your message contains some patterns that I can't process. Please rephrase your question about relationships in a clear, direct way.",
                "suspicion_score": suspicion_score,
                "expert_type": self.expert_type.value
            }
        
        # Sanitize input
        sanitized_input = self.injection_detector.sanitize_input(user_input)
        
        # Build comprehensive prompt
        expert_prompt = self._build_expert_prompt(sanitized_input, user_id, context, quality)
        
        # Process with AI service
        try:
            ai_request = {
                "service_type": "coaching",
                "data": {
                    "message": expert_prompt,
                    "expert_type": self.expert_type.value,
                    "quality_level": quality.value,
                    "context": context.__dict__ if context else {}
                },
                "user_id": user_id,
                "complexity": "high",
                "priority": "high"
            }
            
            ai_response = await self.ai_service_manager.process_request(ai_request)
            
            if ai_response.success:
                # Process and enhance response
                enhanced_response = self._enhance_response(
                    ai_response.data.get("coaching_response", ""),
                    sanitized_input, context, quality
                )
                
                # Store in session history
                self.session_history[user_id].append({
                    "timestamp": datetime.now(),
                    "user_input": sanitized_input,
                    "expert_response": enhanced_response,
                    "expert_type": self.expert_type.value,
                    "quality": quality.value
                })
                
                return {
                    "success": True,
                    "response": enhanced_response,
                    "expert_type": self.expert_type.value,
                    "expertise_areas": self.expertise_areas,
                    "therapeutic_approaches": self.therapeutic_approaches,
                    "quality_level": quality.value,
                    "confidence_score": ai_response.confidence_score,
                    "processing_time": ai_response.processing_time
                }
            else:
                return {
                    "success": False,
                    "error": "I'm experiencing technical difficulties. Please try again in a moment.",
                    "expert_type": self.expert_type.value
                }
                
        except Exception as e:
            logger.error(f"Error processing request for expert {self.expert_type}: {e}")
            return {
                "success": False,
                "error": "I apologize, but I'm unable to process your request right now. Please try again later.",
                "expert_type": self.expert_type.value
            }
    
    def _build_expert_prompt(self, user_input: str, user_id: str, 
                           context: RelationshipContext = None,
                           quality: ResponseQuality = ResponseQuality.ENHANCED) -> str:
        """Build comprehensive expert prompt with context and security"""
        
        # Get recent session history for context
        recent_history = self.session_history[user_id][-3:] if user_id in self.session_history else []
        
        # Build context section
        context_section = ""
        if context:
            context_section = f"""
**Relationship Context:**
- Status: {context.relationship_status}
- Duration: {context.relationship_duration or 'Not specified'}
- Background: {context.cultural_background or 'Not specified'}
- Current stressors: {', '.join(context.current_stressors or [])}
- Goals: {', '.join(context.goals or [])}
"""
        
        # Build history section
        history_section = ""
        if recent_history:
            history_section = "**Recent Conversation Context:**\n"
            for entry in recent_history:
                history_section += f"- User: {entry['user_input'][:100]}...\n"
                history_section += f"- Response: {entry['expert_response'][:100]}...\n"
        
        # Build main prompt
        prompt = f"""
{self.system_prompt}

{context_section}

{history_section}

**Current Request:**
{user_input}

**Response Requirements:**
- Quality Level: {quality.value}
- Expertise Areas: {', '.join(self.expertise_areas)}
- Therapeutic Approaches: {', '.join(self.therapeutic_approaches)}

Please provide a response that:
1. Demonstrates your specific expertise in {self.expert_type.value.replace('_', ' ')}
2. Addresses the user's concern with empathy and professionalism
3. Offers practical, actionable guidance
4. Maintains appropriate therapeutic boundaries
5. Includes follow-up questions or suggestions when appropriate

Remember: You are a professional expert providing guidance within your scope of practice. Always recommend professional help for serious issues.
"""
        
        return prompt
    
    def _enhance_response(self, base_response: str, user_input: str, 
                         context: RelationshipContext = None,
                         quality: ResponseQuality = ResponseQuality.ENHANCED) -> str:
        """Enhance the AI response with expert-specific formatting and additions"""
        
        # Add expert signature
        expert_names = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: "Dr. Sarah Chen, LMFT",
            RelationshipExpertType.COMMUNICATION_SPECIALIST: "Dr. Michael Rodriguez, PhD",
            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: "Dr. Jennifer Williams, Mediator",
            RelationshipExpertType.FINANCIAL_ADVISOR: "David Thompson, CFP®",
            RelationshipExpertType.LIFE_SKILLS_MENTOR: "Maria Santos, Life Coach"
        }
        
        expert_name = expert_names.get(self.expert_type, "Relationship Expert")
        
        # Add closing with expert signature
        enhanced_response = base_response
        
        if quality in [ResponseQuality.PREMIUM, ResponseQuality.THERAPEUTIC]:
            enhanced_response += f"\n\n---\n*{expert_name}*\n*Specialized in {', '.join(self.expertise_areas[:2])}*"
        
        return enhanced_response

class RelationshipAgentOrchestrator:
    """Orchestrates multiple relationship agents for comprehensive support"""
    
    def __init__(self, ai_service_manager, security_config: SecurityConfig = None):
        self.ai_service_manager = ai_service_manager
        self.security_config = security_config or SecurityConfig()
        
        # Initialize all relationship agents
        self.agents = {
            expert_type: EnhancedRelationshipAgent(
                expert_type, ai_service_manager, security_config
            )
            for expert_type in RelationshipExpertType
        }
        
        self.routing_history = defaultdict(list)
    
    async def route_request(self, user_input: str, user_id: str,
                          context: RelationshipContext = None,
                          preferred_expert: RelationshipExpertType = None) -> Dict[str, Any]:
        """Route user request to the most appropriate expert"""
        
        # If user specifies preferred expert, use it
        if preferred_expert and preferred_expert in self.agents:
            expert_type = preferred_expert
        else:
            # Intelligent routing based on content analysis
            expert_type = await self._determine_best_expert(user_input, context)
        
        # Process request with selected expert
        response = await self.agents[expert_type].process_request(
            user_input, user_id, context, ResponseQuality.ENHANCED
        )
        
        # Store routing decision
        self.routing_history[user_id].append({
            "timestamp": datetime.now(),
            "input": user_input[:100],
            "routed_to": expert_type.value,
            "success": response.get("success", False)
        })
        
        # Add routing information to response
        response["routing_info"] = {
            "selected_expert": expert_type.value,
            "routing_confidence": 0.9,  # Would be calculated by routing algorithm
            "alternative_experts": self._get_alternative_experts(expert_type)
        }
        
        return response
    
    async def _determine_best_expert(self, user_input: str, 
                                   context: RelationshipContext = None) -> RelationshipExpertType:
        """Determine the best expert for the user's request"""
        
        # Keyword-based routing (in production, this would use ML)
        keywords_map = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: [
                "marriage", "married", "spouse", "husband", "wife", "wedding",
                "anniversary", "commitment", "vows", "divorce"
            ],
            RelationshipExpertType.COMMUNICATION_SPECIALIST: [
                "communication", "talking", "listening", "expressing", "understand",
                "conversation", "discuss", "share", "tell", "speak"
            ],
            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
                "fight", "argue", "conflict", "disagreement", "tension", "anger",
                "upset", "frustrated", "resolution", "solve"
            ],
            RelationshipExpertType.FINANCIAL_ADVISOR: [
                "money", "financial", "budget", "spending", "saving", "debt",
                "income", "expenses", "planning", "investment"
            ],
            RelationshipExpertType.LIFE_SKILLS_MENTOR: [
                "goals", "habits", "time", "stress", "balance", "growth",
                "development", "skills", "boundaries", "self-care"
            ]
        }
        
        input_lower = user_input.lower()
        expert_scores = {}
        
        for expert_type, keywords in keywords_map.items():
            score = sum(1 for keyword in keywords if keyword in input_lower)
            expert_scores[expert_type] = score
        
        # Get expert with highest score
        best_expert = max(expert_scores.items(), key=lambda x: x[1])
        
        # If no clear match, default to marriage counselor for relationships
        if best_expert[1] == 0:
            if context and context.relationship_status in ["married", "engaged"]:
                return RelationshipExpertType.MARRIAGE_COUNSELOR
            else:
                return RelationshipExpertType.COMMUNICATION_SPECIALIST
        
        return best_expert[0]
    
    def _get_alternative_experts(self, primary_expert: RelationshipExpertType) -> List[str]:
        """Get alternative experts that might also be helpful"""
        
        alternatives_map = {
            RelationshipExpertType.MARRIAGE_COUNSELOR: [
                RelationshipExpertType.COMMUNICATION_SPECIALIST.value,
                RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT.value
            ],
            RelationshipExpertType.COMMUNICATION_SPECIALIST: [
                RelationshipExpertType.MARRIAGE_COUNSELOR.value,
                RelationshipExpertType.EMOTIONAL_INTELLIGENCE_COACH.value
            ],
            RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT: [
                RelationshipExpertType.COMMUNICATION_SPECIALIST.value,
                RelationshipExpertType.MARRIAGE_COUNSELOR.value
            ],
            RelationshipExpertType.FINANCIAL_ADVISOR: [
                RelationshipExpertType.LIFE_SKILLS_MENTOR.value,
                RelationshipExpertType.CONFLICT_RESOLUTION_EXPERT.value
            ],
            RelationshipExpertType.LIFE_SKILLS_MENTOR: [
                RelationshipExpertType.EMOTIONAL_INTELLIGENCE_COACH.value,
                RelationshipExpertType.BOUNDARY_SETTING_EXPERT.value
            ]
        }
        
        return alternatives_map.get(primary_expert, [])
    
    async def get_multi_expert_consultation(self, user_input: str, user_id: str,
                                          context: RelationshipContext = None,
                                          expert_types: List[RelationshipExpertType] = None) -> Dict[str, Any]:
        """Get consultation from multiple experts for complex issues"""
        
        if not expert_types:
            # Default to top 3 relevant experts
            primary_expert = await self._determine_best_expert(user_input, context)
            expert_types = [primary_expert] + [
                expert for expert in RelationshipExpertType 
                if expert != primary_expert
            ][:2]
        
        # Get responses from all requested experts
        expert_responses = {}
        tasks = []
        
        for expert_type in expert_types:
            task = self.agents[expert_type].process_request(
                user_input, user_id, context, ResponseQuality.PREMIUM
            )
            tasks.append((expert_type, task))
        
        # Wait for all responses
        for expert_type, task in tasks:
            try:
                response = await task
                if response.get("success"):
                    expert_responses[expert_type.value] = response
            except Exception as e:
                logger.error(f"Error getting response from {expert_type}: {e}")
        
        return {
            "success": len(expert_responses) > 0,
            "multi_expert_responses": expert_responses,
            "consultation_summary": self._create_consultation_summary(expert_responses),
            "expert_count": len(expert_responses)
        }
    
    def _create_consultation_summary(self, expert_responses: Dict[str, Any]) -> str:
        """Create a summary of multi-expert consultation"""
        
        if not expert_responses:
            return "Unable to generate consultation summary."
        
        summary = "**Multi-Expert Consultation Summary:**\n\n"
        
        for expert_type, response in expert_responses.items():
            expert_name = expert_type.replace("_", " ").title()
            summary += f"**{expert_name} Perspective:**\n"
            summary += f"{response.get('response', 'No response available')[:200]}...\n\n"
        
        summary += "**Integrated Recommendations:**\n"
        summary += "Consider the perspectives from all experts above to develop a comprehensive approach to your situation."
        
        return summary

# Initialize the relationship agent system
async def initialize_relationship_agents(ai_service_manager, security_config: SecurityConfig = None):
    """Initialize the enhanced relationship agent system"""
    
    orchestrator = RelationshipAgentOrchestrator(ai_service_manager, security_config)
    
    logger.info("Enhanced Relationship Agents initialized successfully")
    logger.info(f"Available experts: {[expert.value for expert in RelationshipExpertType]}")
    
    return orchestrator