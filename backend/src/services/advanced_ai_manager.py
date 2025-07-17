"""
Advanced AI Manager with Mixture of Experts and Enhanced Prompt Engineering
Implements sophisticated AI routing, prompt templates, and hybrid LLM coordination
"""

import asyncio
import logging
import json
import time
from typing import Dict, List, Optional, Any, Union, Callable
from dataclasses import dataclass, field
from enum import Enum
from datetime import datetime, timedelta
import uuid
import hashlib
from collections import defaultdict
from functools import wraps

# Optional imports with fallbacks
try:
    import numpy as np
except ImportError:
    np = None

try:
    import aiohttp
except ImportError:
    aiohttp = None

try:
    import openai
except ImportError:
    openai = None

try:
    from together import Together
except ImportError:
    Together = None

try:
    import google.generativeai as genai
except ImportError:
    genai = None

logger = logging.getLogger(__name__)

class ExpertType(Enum):
    """Different expert types for MoE architecture"""
    RELATIONSHIP_COUNSELOR = "relationship_counselor"
    DATING_COACH = "dating_coach"
    PERSONALITY_ANALYST = "personality_analyst"
    COMMUNICATION_EXPERT = "communication_expert"
    CRISIS_INTERVENTIONIST = "crisis_interventionist"
    MATCHING_SPECIALIST = "matching_specialist"
    CONTENT_CREATOR = "content_creator"
    EMOTIONAL_INTELLIGENCE = "emotional_intelligence"
    ATTACHMENT_SPECIALIST = "attachment_specialist"
    CONFLICT_RESOLVER = "conflict_resolver"

class PromptTemplate(Enum):
    """Advanced prompt templates for different scenarios"""
    CHAIN_OF_THOUGHT = "chain_of_thought"
    FEW_SHOT_LEARNING = "few_shot_learning"
    STRUCTURED_OUTPUT = "structured_output"
    ROLE_PLAYING = "role_playing"
    SOCRATIC_QUESTIONING = "socratic_questioning"
    EMOTIONAL_INTELLIGENCE = "emotional_intelligence"
    CRISIS_INTERVENTION = "crisis_intervention"
    MULTI_PERSPECTIVE = "multi_perspective"

class ModelCapability(Enum):
    """Different capabilities of AI models"""
    REASONING = "reasoning"
    CREATIVITY = "creativity"
    EMPATHY = "empathy"
    ANALYSIS = "analysis"
    GENERATION = "generation"
    INSTRUCTION_FOLLOWING = "instruction_following"
    SAFETY = "safety"
    MULTILINGUAL = "multilingual"

@dataclass
class ExpertConfig:
    """Configuration for an expert in MoE architecture"""
    expert_type: ExpertType
    models: List[str]
    specializations: List[str]
    confidence_threshold: float
    quality_weight: float
    prompt_templates: List[PromptTemplate]
    capabilities: List[ModelCapability]
    fallback_experts: List[ExpertType]
    
@dataclass
class PromptEngineering:
    """Advanced prompt engineering configuration"""
    template_type: PromptTemplate
    system_prompt: str
    few_shot_examples: List[Dict[str, str]] = field(default_factory=list)
    chain_of_thought_steps: List[str] = field(default_factory=list)
    output_format: Dict[str, Any] = field(default_factory=dict)
    context_window: int = 4000
    temperature: float = 0.7
    max_tokens: int = 1000
    safety_filters: List[str] = field(default_factory=list)

@dataclass
class AIRequest:
    """Enhanced AI request with MoE routing"""
    task_type: str
    content: str
    user_id: str
    session_id: Optional[str] = None
    context: Dict[str, Any] = field(default_factory=dict)
    priority: str = "normal"  # low, normal, high, urgent
    quality_requirement: float = 0.8
    latency_requirement: float = 5.0  # seconds
    budget_tier: str = "standard"  # economy, standard, premium
    expert_preference: Optional[ExpertType] = None
    prompt_template: Optional[PromptTemplate] = None
    require_structured_output: bool = False
    enable_multi_expert: bool = False
    
@dataclass
class AIResponse:
    """Enhanced AI response with detailed metadata"""
    content: str
    expert_used: ExpertType
    model_used: str
    confidence_score: float
    quality_score: float
    processing_time: float
    cost: float
    expert_reasoning: str
    alternatives: List[Dict[str, Any]] = field(default_factory=list)
    metadata: Dict[str, Any] = field(default_factory=dict)
    request_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    timestamp: datetime = field(default_factory=datetime.now)

class AdvancedPromptEngine:
    """Advanced prompt engineering system with templates and optimization"""
    
    def __init__(self):
        self.prompt_templates = self._initialize_prompt_templates()
        self.few_shot_examples = self._initialize_few_shot_examples()
        self.chain_of_thought_patterns = self._initialize_cot_patterns()
        
    def _initialize_prompt_templates(self) -> Dict[PromptTemplate, str]:
        """Initialize advanced prompt templates"""
        return {
            PromptTemplate.CHAIN_OF_THOUGHT: """
Let's work through this step-by-step to provide the most helpful response:

1. First, I'll identify the core issue or question
2. Then, I'll consider relevant context and emotions
3. Next, I'll explore potential perspectives and solutions
4. Finally, I'll provide a thoughtful, actionable response

{content}

Let me think through this carefully...
""",
            
            PromptTemplate.FEW_SHOT_LEARNING: """
I'll draw from similar situations to provide helpful guidance:

Example 1: When someone felt {similar_emotion1}, we found that {solution1} was helpful.
Example 2: In a case where {similar_situation2}, the approach of {solution2} worked well.

Now, for your specific situation:
{content}

Based on these examples and your unique circumstances...
""",
            
            PromptTemplate.STRUCTURED_OUTPUT: """
Please provide a response in the following structure:

{
    "response": "Main response text addressing the user's concern",
    "insights": ["Key insight 1", "Key insight 2", "Key insight 3"],
    "action_items": ["Specific action 1", "Specific action 2"],
    "follow_up_questions": ["Clarifying question 1", "Clarifying question 2"],
    "emotional_validation": "Acknowledgment of user's feelings",
    "resources": ["Relevant resource 1", "Relevant resource 2"]
}

User input: {content}
""",
            
            PromptTemplate.ROLE_PLAYING: """
As an experienced relationship counselor specializing in {expertise_area}, I understand how challenging {situation_type} can be.

{content}

From my professional experience, I'd like to share some thoughts that might help...
""",
            
            PromptTemplate.SOCRATIC_QUESTIONING: """
I'd like to explore this with you through some reflective questions:

{content}

Let me start by asking: What do you think is at the heart of this situation?

As we explore together, consider:
- What would success look like for you?
- What obstacles do you see?
- What strengths can you draw upon?
""",
            
            PromptTemplate.EMOTIONAL_INTELLIGENCE: """
I can sense the {detected_emotions} in what you're sharing. Your feelings are completely valid.

{content}

Let's explore both the emotional and practical aspects of this situation...
""",
            
            PromptTemplate.CRISIS_INTERVENTION: """
I hear that you're going through an extremely difficult time, and I want you to know that you're not alone.

IMMEDIATE SAFETY CHECK: {safety_assessment}

{content}

Your safety and well-being are the top priority. Let's focus on immediate support and coping strategies...

Crisis Resources:
- National Crisis Line: 988 (US)
- Crisis Text Line: Text HOME to 741741
- Emergency Services: 911
""",
            
            PromptTemplate.MULTI_PERSPECTIVE: """
Let's look at this situation from multiple angles to gain deeper understanding:

From your perspective: {user_perspective}
From your partner's possible perspective: {partner_perspective}
From a neutral observer's view: {neutral_perspective}

{content}

Considering all these viewpoints...
"""
        }
    
    def _initialize_few_shot_examples(self) -> Dict[str, List[Dict[str, str]]]:
        """Initialize few-shot examples for different scenarios"""
        return {
            "conflict_resolution": [
                {
                    "situation": "My partner and I keep arguing about household chores",
                    "response": "It sounds like you're both feeling frustrated about the division of labor. Often, these conflicts are less about the chores themselves and more about feeling valued and respected. Consider having a calm conversation where you both share what 'fair' looks like to you, and create a specific plan together that you both feel good about."
                },
                {
                    "situation": "We fight every time we discuss money",
                    "response": "Money discussions can trigger deep emotions because they often connect to our values, security, and past experiences. Try setting a specific time for financial talks when you're both calm, start by understanding each other's money stories from childhood, and focus on shared goals rather than individual spending habits."
                }
            ],
            "trust_building": [
                {
                    "situation": "I found out my partner lied about something small",
                    "response": "Even small lies can shake our foundation of trust. It's important to address this directly but calmly. Share how the lie made you feel without attacking, ask open-ended questions to understand why they felt the need to lie, and together establish what honesty means in your relationship going forward."
                },
                {
                    "situation": "How do we rebuild trust after infidelity?",
                    "response": "Rebuilding trust after betrayal is a long journey that requires commitment from both partners. The unfaithful partner must take full responsibility, be completely transparent, and show consistent trustworthy behavior over time. The hurt partner needs space to grieve and express their pain. Professional counseling is often essential for navigating this process."
                }
            ],
            "communication_improvement": [
                {
                    "situation": "My partner shuts down when I try to talk about feelings",
                    "response": "Some people find emotional conversations overwhelming and need a different approach. Try starting with smaller, less intense topics, give advance notice before deep talks, use 'I' statements to reduce defensiveness, and respect their need for processing time. Sometimes writing feelings first can help."
                },
                {
                    "situation": "We talk past each other and never resolve anything",
                    "response": "This often happens when we're focused on being heard rather than understanding. Try the 'mirror and validate' technique: One person speaks for 2 minutes while the other listens, then the listener reflects back what they heard and validates the feelings expressed before sharing their own perspective."
                }
            ],
            "intimacy_building": [
                {
                    "situation": "We feel like roommates rather than romantic partners",
                    "response": "It's common for long-term relationships to lose their spark, but it can be rekindled. Start with small daily connections - a 6-second kiss, a 20-second hug, asking about each other's day. Schedule regular date nights, try new experiences together, and be intentional about physical touch throughout the day."
                },
                {
                    "situation": "I want more emotional intimacy but don't know how to create it",
                    "response": "Emotional intimacy grows through vulnerability and presence. Try sharing something you've never told your partner, ask deeper questions about their dreams and fears, create phone-free time together, and practice active listening without trying to fix or judge. Start small and build gradually."
                }
            ]
        }
    
    def _initialize_cot_patterns(self) -> Dict[str, List[str]]:
        """Initialize chain-of-thought reasoning patterns"""
        return {
            "relationship_analysis": [
                "What is the core issue being presented?",
                "What emotions are involved for each person?",
                "What patterns or cycles might be at play?",
                "What are the underlying needs not being met?",
                "What strengths can be built upon?",
                "What specific, actionable steps would help?"
            ],
            "conflict_analysis": [
                "What triggered this specific conflict?",
                "What is each person's position?",
                "What are the interests behind those positions?",
                "What common ground exists?",
                "What compromises might work?",
                "How can future conflicts be prevented?"
            ],
            "emotional_processing": [
                "What emotions are being expressed?",
                "What might be causing these feelings?",
                "Are these emotions primary or secondary?",
                "What needs are connected to these emotions?",
                "How can these emotions be validated?",
                "What healthy coping strategies apply?"
            ],
            "decision_making": [
                "What decision needs to be made?",
                "What are the options available?",
                "What are the pros and cons of each?",
                "How does this align with values?",
                "What are the potential consequences?",
                "What feels most authentic?"
            ]
        }
    
    def generate_expert_prompt(
        self,
        expert_type: ExpertType,
        template: PromptTemplate,
        content: str,
        context: Dict[str, Any]
    ) -> str:
        """Generate expert-specific prompt with template"""
        
        # Get base template
        base_template = self.prompt_templates.get(template, "{content}")
        
        # Add expert-specific system instructions
        expert_instructions = self._get_expert_instructions(expert_type)
        
        # Add safety and ethical guidelines
        safety_guidelines = """
IMPORTANT SAFETY GUIDELINES:
- Never provide medical, legal, or financial advice beyond general guidance
- Always prioritize user safety and well-being
- Encourage professional help for serious issues
- Maintain appropriate boundaries
- Respect diverse relationship structures and identities
- Never judge or shame users
- If detecting crisis, provide immediate resources
"""
        
        # Build context-aware content
        formatted_content = self._format_content_with_context(content, context, template)
        
        # Combine all elements
        full_prompt = f"""
{expert_instructions}

{safety_guidelines}

{base_template.format(
    content=formatted_content,
    expertise_area=context.get('expertise_area', 'relationships'),
    situation_type=context.get('situation_type', 'personal challenge'),
    detected_emotions=context.get('detected_emotions', 'various emotions'),
    safety_assessment=context.get('safety_assessment', 'No immediate safety concerns detected'),
    user_perspective=context.get('user_perspective', ''),
    partner_perspective=context.get('partner_perspective', ''),
    neutral_perspective=context.get('neutral_perspective', ''),
    similar_emotion1=context.get('similar_emotion1', 'overwhelmed'),
    solution1=context.get('solution1', 'taking breaks and communicating needs'),
    similar_situation2=context.get('similar_situation2', 'communication breakdown'),
    solution2=context.get('solution2', 'structured conversation techniques')
)}
"""
        
        return full_prompt
    
    def _get_expert_instructions(self, expert_type: ExpertType) -> str:
        """Get specific instructions for each expert type"""
        expert_instructions = {
            ExpertType.RELATIONSHIP_COUNSELOR: """
You are an experienced relationship counselor with expertise in:
- Couples therapy and relationship dynamics
- Attachment theory and emotional bonds
- Conflict resolution and communication
- Building and maintaining healthy relationships
- Recognizing and addressing relationship patterns

Your approach is warm, professional, and evidence-based. You help couples and individuals navigate relationship challenges with empathy and practical strategies.
""",
            
            ExpertType.DATING_COACH: """
You are a modern dating coach who understands:
- Online and offline dating dynamics
- Building confidence and self-worth
- Healthy boundary setting
- Recognizing red and green flags
- Moving from casual to committed relationships
- Dating anxiety and rejection resilience

Your style is encouraging, practical, and empowering. You help people date authentically while protecting their emotional well-being.
""",
            
            ExpertType.COMMUNICATION_EXPERT: """
You are a communication specialist focused on:
- Active listening techniques
- Non-violent communication
- Expressing needs clearly
- Understanding different communication styles
- Digital communication in relationships
- Difficult conversation navigation

You teach practical communication skills that strengthen relationships and prevent misunderstandings.
""",
            
            ExpertType.CRISIS_INTERVENTIONIST: """
You are a trained crisis intervention specialist with expertise in:
- De-escalation techniques
- Safety planning
- Trauma-informed responses
- Connecting to immediate resources
- Emotional regulation in crisis
- Risk assessment

Your primary focus is ensuring immediate safety while providing compassionate support. You always prioritize getting people connected to appropriate emergency services when needed.
""",
            
            ExpertType.EMOTIONAL_INTELLIGENCE: """
You are an emotional intelligence expert specializing in:
- Identifying and naming emotions
- Understanding emotional triggers
- Developing emotional regulation skills
- Building empathy and compassion
- Healing emotional wounds
- Creating emotional safety in relationships

You help people understand and work with their emotions to build stronger, more fulfilling relationships.
""",
            
            ExpertType.CONFLICT_RESOLVER: """
You are a conflict resolution specialist trained in:
- Mediation techniques
- Finding win-win solutions
- De-escalating heated situations
- Addressing underlying needs
- Fair fighting rules
- Preventing recurring conflicts

You help couples and individuals transform conflicts into opportunities for deeper understanding and connection.
""",
            
            ExpertType.ATTACHMENT_SPECIALIST: """
You are an attachment theory expert who understands:
- Different attachment styles and their impact
- Healing attachment wounds
- Building secure attachment
- Breaking negative relationship patterns
- Creating emotional safety
- Intergenerational trauma patterns

You help people understand how their early experiences shape their relationships and guide them toward more secure connections.
"""
        }
        
        return expert_instructions.get(
            expert_type,
            "You are a caring and knowledgeable relationship expert. Provide thoughtful, evidence-based guidance while maintaining professional boundaries."
        )
    
    def _format_content_with_context(self, content: str, context: Dict[str, Any], template: PromptTemplate) -> str:
        """Helper to format content with context variables"""
        if template == PromptTemplate.ROLE_PLAYING:
            return content.format(
                expert_type=context.get("expert_type", "relationship counselor"),
                situation_type=context.get("situation_type", "a personal challenge"),
                expertise_area=context.get("expertise_area", "couples therapy"),
                client_background=context.get("client_background", ""),
                session_history=context.get("session_history", ""),
                emotional_state=context.get("emotional_state", ""),
                therapeutic_goals=context.get("therapeutic_goals", "")
            )
        elif template == PromptTemplate.EMOTIONAL_INTELLIGENCE:
            return content.format(
                expert_type=context.get("expert_type", "emotional intelligence expert"),
                user_input=context.get("user_input", ""),
                context=json.dumps(context, indent=2),
                emotional_indicators=context.get("emotional_indicators", "")
            )
        elif template == PromptTemplate.CRISIS_INTERVENTION:
            return content.format(
                expert_type=context.get("expert_type", "crisis intervention specialist"),
                user_input=context.get("user_input", ""),
                context=json.dumps(context, indent=2),
                risk_level=context.get("risk_level", ""),
                crisis_type=context.get("crisis_type", ""),
                safety_concerns=context.get("safety_concerns", "")
            )
        elif template == PromptTemplate.MULTI_PERSPECTIVE:
            return content.format(
                expert_type=context.get("expert_type", "multi-perspective expert"),
                user_input=context.get("user_input", ""),
                context=json.dumps(context, indent=2),
                clinical_perspective=context.get("clinical_perspective", ""),
                coaching_perspective=context.get("coaching_perspective", ""),
                communication_perspective=context.get("communication_perspective", "")
            )
        return content.format(content=content)
    
    def generate_prompt(self, template: PromptTemplate, expert_type: ExpertType, 
                       user_input: str, context: Dict[str, Any] = None) -> str:
        """Generate advanced prompt using specified template and expert type"""
        
        if context is None:
            context = {}
            
        base_template = self.prompt_templates.get(template, self.prompt_templates[PromptTemplate.CHAIN_OF_THOUGHT])
        
        # Get expert-specific enhancements
        expert_config = self._get_expert_config(expert_type)
        few_shot_examples = self._format_few_shot_examples(expert_type)
        cot_steps = self.chain_of_thought_patterns.get(expert_type, [])
        
        # Build template variables
        template_vars = {
            "expert_type": expert_type.value.replace("_", " ").title(),
            "user_input": user_input,
            "context": json.dumps(context, indent=2),
            "few_shot_examples": few_shot_examples,
            "analysis_prompt": "What are the key elements of this situation?",
            "emotion_prompt": "What emotions and needs are present?",
            "context_prompt": "What background factors are relevant?",
            "reasoning_prompt": "What does my professional expertise tell me?",
            "solution_prompt": "What are the best approaches to help?",
            **context
        }
        
        # Apply template-specific enhancements
        if template == PromptTemplate.ROLE_PLAYING:
            template_vars.update(self._get_role_playing_vars(expert_type))
        elif template == PromptTemplate.CRISIS_INTERVENTION:
            template_vars.update(self._get_crisis_vars(context))
        elif template == PromptTemplate.MULTI_PERSPECTIVE:
            template_vars.update(self._get_multi_perspective_vars(user_input, context))
        
        return base_template.format(**template_vars)
    
    def _get_expert_config(self, expert_type: ExpertType) -> Dict[str, Any]:
        """Get configuration for specific expert type"""
        expert_configs = {
            ExpertType.RELATIONSHIP_COUNSELOR: {
                "specializations": ["couples therapy", "relationship dynamics", "communication skills"],
                "approaches": ["cognitive-behavioral", "emotionally focused therapy", "gottman method"],
                "personality_traits": ["empathetic", "insightful", "solution-focused"]
            },
            ExpertType.DATING_COACH: {
                "specializations": ["dating strategy", "confidence building", "modern dating"],
                "approaches": ["positive psychology", "behavioral coaching", "mindfulness"],
                "personality_traits": ["encouraging", "practical", "understanding"]
            },
            ExpertType.CRISIS_INTERVENTIONIST: {
                "specializations": ["crisis intervention", "suicide prevention", "trauma response"],
                "approaches": ["crisis intervention model", "trauma-informed care", "safety planning"],
                "personality_traits": ["calm", "professional", "compassionate"]
            }
        }
        return expert_configs.get(expert_type, {})
    
    def _format_few_shot_examples(self, expert_type: ExpertType) -> str:
        """Format few-shot examples for the expert"""
        examples = self.few_shot_examples.get(expert_type, [])
        formatted = []
        
        for i, example in enumerate(examples[:3]):  # Limit to 3 examples
            formatted.append(f"Example {i+1}:")
            formatted.append(f"User: {example['user_input']}")
            formatted.append(f"Expert: {example['response']}")
            formatted.append("")
        
        return "\n".join(formatted)
    
    def _get_role_playing_vars(self, expert_type: ExpertType) -> Dict[str, str]:
        """Get role-playing specific variables"""
        expert_names = {
            ExpertType.RELATIONSHIP_COUNSELOR: "Sarah Matthews",
            ExpertType.DATING_COACH: "Michael Chen",
            ExpertType.CRISIS_INTERVENTIONIST: "Dr. Amanda Rodriguez"
        }
        
        config = self._get_expert_config(expert_type)
        
        return {
            "expert_name": expert_names.get(expert_type, "Dr. Expert"),
            "personality_traits": ", ".join(config.get("personality_traits", [])),
            "specializations": ", ".join(config.get("specializations", [])),
            "therapeutic_approaches": ", ".join(config.get("approaches", [])),
            "client_background": "Context about the client's situation",
            "session_history": "Previous session context",
            "emotional_state": "Current emotional assessment",
            "therapeutic_goals": "Session objectives"
        }
    
    def _get_crisis_vars(self, context: Dict[str, Any]) -> Dict[str, str]:
        """Get crisis intervention specific variables"""
        return {
            "risk_level": context.get("risk_level", "medium"),
            "crisis_type": context.get("crisis_type", "emotional distress"),
            "safety_concerns": context.get("safety_concerns", "immediate emotional support needed")
        }
    
    def _get_multi_perspective_vars(self, user_input: str, context: Dict[str, Any]) -> Dict[str, str]:
        """Get multi-perspective specific variables"""
        return {
            "clinical_perspective": "From a clinical psychology standpoint...",
            "coaching_perspective": "From a relationship coaching perspective...",
            "communication_perspective": "From a communication expert's view..."
        }

class MixtureOfExpertsRouter:
    """Sophisticated routing system for Mixture of Experts architecture"""
    
    def __init__(self):
        self.experts = self._initialize_experts()
        self.routing_history = defaultdict(list)
        self.performance_metrics = defaultdict(lambda: defaultdict(float))
        
    def _initialize_experts(self) -> Dict[ExpertType, ExpertConfig]:
        """Initialize expert configurations"""
        return {
            ExpertType.RELATIONSHIP_COUNSELOR: ExpertConfig(
                expert_type=ExpertType.RELATIONSHIP_COUNSELOR,
                models=["gpt-4", "claude-3-opus", "gemini-pro"],
                specializations=["couples therapy", "relationship dynamics", "attachment theory"],
                confidence_threshold=0.8,
                quality_weight=0.9,
                prompt_templates=[PromptTemplate.CHAIN_OF_THOUGHT, PromptTemplate.ROLE_PLAYING, PromptTemplate.EMOTIONAL_INTELLIGENCE],
                capabilities=[ModelCapability.EMPATHY, ModelCapability.REASONING, ModelCapability.SAFETY],
                fallback_experts=[ExpertType.DATING_COACH, ExpertType.EMOTIONAL_INTELLIGENCE]
            ),
            ExpertType.DATING_COACH: ExpertConfig(
                expert_type=ExpertType.DATING_COACH,
                models=["gpt-4", "llama-2-70b", "mistral-large"],
                specializations=["dating strategy", "confidence building", "modern dating"],
                confidence_threshold=0.7,
                quality_weight=0.8,
                prompt_templates=[PromptTemplate.FEW_SHOT_LEARNING, PromptTemplate.SOCRATIC_QUESTIONING],
                capabilities=[ModelCapability.CREATIVITY, ModelCapability.EMPATHY, ModelCapability.GENERATION],
                fallback_experts=[ExpertType.RELATIONSHIP_COUNSELOR, ExpertType.COMMUNICATION_EXPERT]
            ),
            ExpertType.CRISIS_INTERVENTIONIST: ExpertConfig(
                expert_type=ExpertType.CRISIS_INTERVENTIONIST,
                models=["gpt-4", "claude-3-opus"],  # Only highest quality models for crisis
                specializations=["crisis intervention", "suicide prevention", "trauma response"],
                confidence_threshold=0.95,
                quality_weight=1.0,
                prompt_templates=[PromptTemplate.CRISIS_INTERVENTION, PromptTemplate.STRUCTURED_OUTPUT],
                capabilities=[ModelCapability.SAFETY, ModelCapability.EMPATHY, ModelCapability.INSTRUCTION_FOLLOWING],
                fallback_experts=[ExpertType.RELATIONSHIP_COUNSELOR]
            ),
            ExpertType.PERSONALITY_ANALYST: ExpertConfig(
                expert_type=ExpertType.PERSONALITY_ANALYST,
                models=["gpt-4", "claude-3-sonnet", "gemini-pro"],
                specializations=["personality assessment", "behavioral analysis", "psychological insights"],
                confidence_threshold=0.8,
                quality_weight=0.85,
                prompt_templates=[PromptTemplate.STRUCTURED_OUTPUT, PromptTemplate.CHAIN_OF_THOUGHT],
                capabilities=[ModelCapability.ANALYSIS, ModelCapability.REASONING, ModelCapability.INSTRUCTION_FOLLOWING],
                fallback_experts=[ExpertType.RELATIONSHIP_COUNSELOR, ExpertType.EMOTIONAL_INTELLIGENCE]
            ),
            ExpertType.MATCHING_SPECIALIST: ExpertConfig(
                expert_type=ExpertType.MATCHING_SPECIALIST,
                models=["gpt-4", "claude-3-sonnet", "llama-2-70b"],
                specializations=["compatibility analysis", "matching algorithms", "relationship prediction"],
                confidence_threshold=0.75,
                quality_weight=0.8,
                prompt_templates=[PromptTemplate.STRUCTURED_OUTPUT, PromptTemplate.MULTI_PERSPECTIVE],
                capabilities=[ModelCapability.ANALYSIS, ModelCapability.REASONING, ModelCapability.INSTRUCTION_FOLLOWING],
                fallback_experts=[ExpertType.PERSONALITY_ANALYST, ExpertType.RELATIONSHIP_COUNSELOR]
            )
        }
    
    def route_request(self, request: AIRequest) -> ExpertType:
        """Route request to most appropriate expert using advanced routing logic"""
        
        # Check for explicit expert preference
        if request.expert_preference:
            return request.expert_preference
        
        # Crisis detection takes highest priority
        if self._detect_crisis(request.content):
            return ExpertType.CRISIS_INTERVENTIONIST
        
        # Analyze request content to determine best expert
        expert_scores = self._calculate_expert_scores(request)
        
        # Apply routing constraints
        filtered_experts = self._apply_routing_constraints(expert_scores, request)
        
        # Select best expert
        best_expert = max(filtered_experts.items(), key=lambda x: x[1])[0]
        
        # Record routing decision
        self.routing_history[request.user_id].append({
            "expert": best_expert,
            "scores": expert_scores,
            "timestamp": datetime.now(),
            "request_type": request.task_type
        })
        
        return best_expert
    
    def _detect_crisis(self, content: str) -> bool:
        """Detect if content indicates a crisis situation"""
        crisis_keywords = [
            "suicide", "kill myself", "end it all", "hurt myself", "self-harm",
            "can't go on", "hopeless", "worthless", "no way out", "breaking point",
            "abuse", "violence", "threatening", "scared", "unsafe", "help me"
        ]
        
        content_lower = content.lower()
        crisis_score = sum(1 for keyword in crisis_keywords if keyword in content_lower)
        
        return crisis_score >= 2  # Threshold for crisis detection
    
    def _calculate_expert_scores(self, request: AIRequest) -> Dict[ExpertType, float]:
        """Calculate relevance scores for each expert"""
        scores = {}
        content_lower = request.content.lower()
        
        # Keyword-based scoring
        expert_keywords = {
            ExpertType.RELATIONSHIP_COUNSELOR: ["relationship", "partner", "couple", "marriage", "conflict", "communication"],
            ExpertType.DATING_COACH: ["dating", "first date", "online dating", "crush", "single", "attraction"],
            ExpertType.PERSONALITY_ANALYST: ["personality", "traits", "behavior", "psychology", "analysis"],
            ExpertType.MATCHING_SPECIALIST: ["compatibility", "matching", "soulmate", "perfect match", "chemistry"],
            ExpertType.CRISIS_INTERVENTIONIST: ["crisis", "emergency", "urgent", "help", "desperate", "hopeless"],
            ExpertType.COMMUNICATION_EXPERT: ["communication", "talking", "conversation", "express", "understand"],
            ExpertType.EMOTIONAL_INTELLIGENCE: ["emotions", "feelings", "empathy", "emotional", "mood"]
        }
        
        for expert_type, keywords in expert_keywords.items():
            base_score = sum(0.1 for keyword in keywords if keyword in content_lower)
            
            # Apply expert-specific bonuses
            expert_config = self.experts.get(expert_type)
            if expert_config:
                # Performance history bonus
                historical_performance = self.performance_metrics[expert_type].get("avg_quality", 0.5)
                performance_bonus = historical_performance * 0.2
                
                # Capability matching bonus
                capability_bonus = self._calculate_capability_bonus(expert_config, request)
                
                scores[expert_type] = base_score + performance_bonus + capability_bonus
            else:
                scores[expert_type] = base_score
        
        return scores
    
    def _calculate_capability_bonus(self, expert_config: ExpertConfig, request: AIRequest) -> float:
        """Calculate bonus score based on capability matching"""
        bonus = 0.0
        
        # Quality requirement matching
        if request.quality_requirement >= expert_config.confidence_threshold:
            bonus += 0.1
        
        # Structured output requirement
        if request.require_structured_output and PromptTemplate.STRUCTURED_OUTPUT in expert_config.prompt_templates:
            bonus += 0.15
        
        # Priority matching
        if request.priority == "urgent" and ModelCapability.SAFETY in expert_config.capabilities:
            bonus += 0.2
        
        return bonus
    
    def _apply_routing_constraints(self, scores: Dict[ExpertType, float], request: AIRequest) -> Dict[ExpertType, float]:
        """Apply routing constraints based on request requirements"""
        filtered_scores = {}
        
        for expert_type, score in scores.items():
            expert_config = self.experts.get(expert_type)
            if not expert_config:
                continue
            
            # Quality threshold constraint
            if request.quality_requirement > expert_config.confidence_threshold:
                score *= 0.5  # Penalize if below threshold
            
            # Budget constraint
            if request.budget_tier == "economy" and expert_config.quality_weight > 0.8:
                score *= 0.7  # Penalize expensive experts for economy tier
            
            # Latency constraint
            if request.latency_requirement < 3.0 and expert_config.quality_weight > 0.9:
                score *= 0.8  # Penalize high-quality but slow experts
            
            filtered_scores[expert_type] = score
        
        return filtered_scores
    
    def update_performance(self, expert_type: ExpertType, quality_score: float, 
                         processing_time: float, user_satisfaction: float = None):
        """Update performance metrics for an expert"""
        metrics = self.performance_metrics[expert_type]
        
        # Update running averages
        metrics["avg_quality"] = (metrics["avg_quality"] * 0.9) + (quality_score * 0.1)
        metrics["avg_processing_time"] = (metrics["avg_processing_time"] * 0.9) + (processing_time * 0.1)
        
        if user_satisfaction:
            metrics["avg_satisfaction"] = (metrics["avg_satisfaction"] * 0.9) + (user_satisfaction * 0.1)
        
        metrics["total_requests"] += 1
        metrics["last_updated"] = datetime.now()

class HybridLLMCoordinator:
    """Coordinates between multiple LLM providers with intelligent routing"""
    
    def __init__(self, config: Dict[str, str]):
        self.config = config
        self.providers = self._initialize_providers()
        self.provider_health = defaultdict(lambda: {"status": "healthy", "last_check": datetime.now()})
        self.request_cache = {}
        self.failover_sequence = ["openai", "anthropic", "google", "together"]
        
    def _initialize_providers(self) -> Dict[str, Any]:
        """Initialize all LLM providers"""
        providers = {}
        
                 # OpenAI
        if self.config.get("openai_api_key") and openai is not None:
            providers["openai"] = {
                "client": openai.AsyncOpenAI(api_key=self.config["openai_api_key"]),
                "models": ["gpt-4", "gpt-4-turbo", "gpt-3.5-turbo"],
                "strengths": [ModelCapability.REASONING, ModelCapability.INSTRUCTION_FOLLOWING],
                "cost_per_token": 0.00003,
                "max_tokens": 4000
            }
        
        # Anthropic Claude (via API)
        if self.config.get("anthropic_api_key"):
            providers["anthropic"] = {
                "client": None,  # Would initialize Anthropic client
                "models": ["claude-3-opus", "claude-3-sonnet", "claude-3-haiku"],
                "strengths": [ModelCapability.REASONING, ModelCapability.SAFETY, ModelCapability.EMPATHY],
                "cost_per_token": 0.000015,
                "max_tokens": 4000
            }
        
        # Google Gemini
        if self.config.get("google_api_key") and genai is not None:
            genai.configure(api_key=self.config["google_api_key"])
            providers["google"] = {
                "client": genai,
                "models": ["gemini-pro", "gemini-pro-vision"],
                "strengths": [ModelCapability.MULTILINGUAL, ModelCapability.ANALYSIS],
                "cost_per_token": 0.000025,
                "max_tokens": 2000
            }
        
        # Together.ai (Open Source Models)
        if self.config.get("together_api_key") and Together is not None:
            providers["together"] = {
                "client": Together(api_key=self.config["together_api_key"]),
                "models": ["llama-2-70b-chat", "mistral-7b-instruct", "code-llama-34b"],
                "strengths": [ModelCapability.CREATIVITY, ModelCapability.GENERATION],
                "cost_per_token": 0.0000008,
                "max_tokens": 4000
            }
        
        return providers
    
    async def execute_request(self, request: AIRequest, expert_type: ExpertType, 
                            prompt: str) -> AIResponse:
        """Execute request with intelligent provider selection and failover"""
        
        # Select optimal provider
        provider_name = self._select_optimal_provider(request, expert_type)
        
        # Attempt execution with failover
        for attempt, provider in enumerate(self._get_failover_sequence(provider_name)):
            try:
                start_time = time.time()
                
                # Execute request
                response = await self._execute_with_provider(
                    provider, request, prompt, expert_type
                )
                
                processing_time = time.time() - start_time
                
                # Calculate quality score
                quality_score = self._calculate_quality_score(response, request)
                
                # Calculate cost
                cost = self._calculate_cost(provider, response, prompt)
                
                return AIResponse(
                    content=response,
                    expert_used=expert_type,
                    model_used=f"{provider}/{self._get_model_for_provider(provider, expert_type)}",
                    confidence_score=quality_score,
                    quality_score=quality_score,
                    processing_time=processing_time,
                    cost=cost,
                    expert_reasoning=f"Selected {expert_type.value} expert using {provider} provider",
                    metadata={
                        "provider": provider,
                        "attempt": attempt + 1,
                        "prompt_tokens": len(prompt.split()),
                        "response_tokens": len(response.split())
                    }
                )
                
            except Exception as e:
                logger.warning(f"Provider {provider} failed (attempt {attempt + 1}): {e}")
                if attempt == len(self.failover_sequence) - 1:
                    # Last attempt failed, return error response
                                         return AIResponse(
                        content="I'm experiencing technical difficulties. Please try again in a moment.",
                        expert_used=expert_type,
                        model_used="fallback",
                        confidence_score=0.0,
                        quality_score=0.0,
                        processing_time=0.0,
                        cost=0.0,
                        expert_reasoning="All providers failed, using fallback response"
                    )
                continue
        
        # Fallback return (should never reach here)
        return AIResponse(
            content="I'm experiencing technical difficulties. Please try again in a moment.",
            expert_used=expert_type,
            model_used="fallback",
            confidence_score=0.0,
            quality_score=0.0,
            processing_time=0.0,
            cost=0.0,
            expert_reasoning="No providers available, using fallback response"
        )
    
    def _select_optimal_provider(self, request: AIRequest, expert_type: ExpertType) -> str:
        """Select optimal provider based on request requirements"""
        
        # Get expert requirements
        expert_config = self._get_expert_requirements(expert_type)
        
        # Score providers
        provider_scores = {}
        for provider_name, provider_config in self.providers.items():
            score = 0.0
            
            # Capability matching
            matching_capabilities = set(provider_config["strengths"]) & set(expert_config["required_capabilities"])
            score += len(matching_capabilities) * 0.3
            
            # Quality vs cost tradeoff
            if request.budget_tier == "premium":
                score += (1.0 - provider_config["cost_per_token"] * 10000) * 0.4
            elif request.budget_tier == "economy":
                score += provider_config["cost_per_token"] * 10000 * 0.4
            
            # Latency requirements
            if request.latency_requirement < 3.0:
                if provider_name in ["openai", "together"]:  # Generally faster
                    score += 0.2
            
            # Health status
            if self.provider_health[provider_name]["status"] == "healthy":
                score += 0.1
            
            provider_scores[provider_name] = score
        
        # Return best provider
        return max(provider_scores.items(), key=lambda x: x[1])[0]
    
    def _get_expert_requirements(self, expert_type: ExpertType) -> Dict[str, Any]:
        """Get capability requirements for expert type"""
        requirements = {
            ExpertType.RELATIONSHIP_COUNSELOR: {
                "required_capabilities": [ModelCapability.EMPATHY, ModelCapability.REASONING, ModelCapability.SAFETY],
                "preferred_models": ["gpt-4", "claude-3-opus"],
                "min_quality": 0.8
            },
            ExpertType.DATING_COACH: {
                "required_capabilities": [ModelCapability.CREATIVITY, ModelCapability.EMPATHY],
                "preferred_models": ["gpt-4", "claude-3-sonnet", "llama-2-70b"],
                "min_quality": 0.7
            },
            ExpertType.CRISIS_INTERVENTIONIST: {
                "required_capabilities": [ModelCapability.SAFETY, ModelCapability.EMPATHY, ModelCapability.INSTRUCTION_FOLLOWING],
                "preferred_models": ["gpt-4", "claude-3-opus"],
                "min_quality": 0.95
            }
        }
        
        return requirements.get(expert_type, {
            "required_capabilities": [ModelCapability.REASONING],
            "preferred_models": ["gpt-4"],
            "min_quality": 0.7
        })
    
    def _get_failover_sequence(self, primary_provider: str) -> List[str]:
        """Get failover sequence starting with primary provider"""
        sequence = [primary_provider]
        sequence.extend([p for p in self.failover_sequence if p != primary_provider])
        return sequence
    
    async def _execute_with_provider(self, provider_name: str, request: AIRequest, 
                                   prompt: str, expert_type: ExpertType) -> str:
        """Execute request with specific provider"""
        
        provider = self.providers[provider_name]
        model = self._get_model_for_provider(provider_name, expert_type)
        
        if provider_name == "openai":
            response = await provider["client"].chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}],
                max_tokens=min(request.context.get("max_tokens", 1000), provider["max_tokens"]),
                temperature=request.context.get("temperature", 0.7)
            )
            return response.choices[0].message.content
        
        elif provider_name == "together":
            response = await provider["client"].chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}],
                max_tokens=min(request.context.get("max_tokens", 1000), provider["max_tokens"]),
                temperature=request.context.get("temperature", 0.7)
            )
            return response.choices[0].message.content
        
        elif provider_name == "google":
            if genai is None:
                raise NotImplementedError("Google AI not available")
            model_instance = genai.GenerativeModel(model)
            response = await model_instance.generate_content_async(prompt)
            return response.text
        
        else:
            raise NotImplementedError(f"Provider {provider_name} not implemented")
    
    def _get_model_for_provider(self, provider_name: str, expert_type: ExpertType) -> str:
        """Get best model for provider and expert type"""
        
        provider_config = self.providers[provider_name]
        expert_requirements = self._get_expert_requirements(expert_type)
        
        # Find best model match
        preferred_models = expert_requirements.get("preferred_models", [])
        available_models = provider_config["models"]
        
        # Try to match preferred models first
        for preferred in preferred_models:
            for available in available_models:
                if preferred in available:
                    return available
        
        # Return first available model as fallback
        return available_models[0]
    
    def _calculate_quality_score(self, response: str, request: AIRequest) -> float:
        """Calculate quality score for response"""
        
        # Basic quality indicators
        score = 0.5  # Base score
        
        # Length appropriateness
        if 100 <= len(response) <= 2000:
            score += 0.1
        
        # Structured response (if requested)
        if request.require_structured_output:
            try:
                json.loads(response)
                score += 0.2
            except:
                pass
        
        # Empathy indicators
        empathy_words = ["understand", "feel", "sorry", "support", "help", "care"]
        empathy_score = sum(1 for word in empathy_words if word in response.lower())
        score += min(empathy_score * 0.05, 0.2)
        
        # Actionability
        action_words = ["try", "consider", "practice", "start", "stop", "change"]
        action_score = sum(1 for word in action_words if word in response.lower())
        score += min(action_score * 0.03, 0.1)
        
        return min(score, 1.0)
    
    def _calculate_cost(self, provider_name: str, response: str, prompt: str) -> float:
        """Calculate cost for the request"""
        
        provider_config = self.providers[provider_name]
        cost_per_token = provider_config["cost_per_token"]
        
        # Estimate token count (rough approximation)
        total_tokens = len(prompt.split()) + len(response.split())
        
        return total_tokens * cost_per_token

class AdvancedAIManager:
    """Main AI manager with advanced capabilities"""
    
    def __init__(self, config: Dict[str, str]):
        self.config = config
        self.prompt_engine = AdvancedPromptEngine()
        self.moe_router = MixtureOfExpertsRouter()
        self.llm_coordinator = HybridLLMCoordinator(config)
        self.request_history = defaultdict(list)
        self.performance_analytics = defaultdict(lambda: defaultdict(float))
        
    async def process_request(self, request: AIRequest) -> AIResponse:
        """Process AI request with advanced routing and prompt engineering"""
        
        # Route to appropriate expert
        expert_type = self.moe_router.route_request(request)
        
        # Select optimal prompt template
        prompt_template = self._select_prompt_template(expert_type, request)
        
        # Generate advanced prompt
        prompt = self.prompt_engine.generate_prompt(
            template=prompt_template,
            expert_type=expert_type,
            user_input=request.content,
            context=request.context
        )
        
        # Execute request
        response = await self.llm_coordinator.execute_request(
            request=request,
            expert_type=expert_type,
            prompt=prompt
        )
        
        # Update performance metrics
        self.moe_router.update_performance(
            expert_type=expert_type,
            quality_score=response.quality_score,
            processing_time=response.processing_time
        )
        
        # Record request
        self.request_history[request.user_id].append({
            "request": request,
            "response": response,
            "expert_used": expert_type,
            "prompt_template": prompt_template,
            "timestamp": datetime.now()
        })
        
        return response
    
    def _select_prompt_template(self, expert_type: ExpertType, request: AIRequest) -> PromptTemplate:
        """Select optimal prompt template for expert and request"""
        
        # Check for explicit template preference
        if request.prompt_template:
            return request.prompt_template
        
        # Crisis situations always use crisis intervention template
        if expert_type == ExpertType.CRISIS_INTERVENTIONIST:
            return PromptTemplate.CRISIS_INTERVENTION
        
        # Structured output requirement
        if request.require_structured_output:
            return PromptTemplate.STRUCTURED_OUTPUT
        
        # High quality requirement uses chain of thought
        if request.quality_requirement >= 0.8:
            return PromptTemplate.CHAIN_OF_THOUGHT
        
        # Multi-expert requests
        if request.enable_multi_expert:
            return PromptTemplate.MULTI_PERSPECTIVE
        
        # Default based on expert type
        expert_defaults = {
            ExpertType.RELATIONSHIP_COUNSELOR: PromptTemplate.EMOTIONAL_INTELLIGENCE,
            ExpertType.DATING_COACH: PromptTemplate.FEW_SHOT_LEARNING,
            ExpertType.PERSONALITY_ANALYST: PromptTemplate.STRUCTURED_OUTPUT,
            ExpertType.MATCHING_SPECIALIST: PromptTemplate.MULTI_PERSPECTIVE
        }
        
        return expert_defaults.get(expert_type, PromptTemplate.CHAIN_OF_THOUGHT)
    
    async def get_analytics(self, user_id: str = None) -> Dict[str, Any]:
        """Get comprehensive analytics about AI system performance"""
        
        analytics = {
            "system_health": {
                "total_requests": sum(len(history) for history in self.request_history.values()),
                "expert_usage": dict(self.moe_router.performance_metrics),
                "provider_health": dict(self.llm_coordinator.provider_health)
            },
            "quality_metrics": {
                "avg_quality_score": self._calculate_avg_quality(),
                "avg_processing_time": self._calculate_avg_processing_time(),
                "expert_performance": self._get_expert_performance_summary()
            }
        }
        
        if user_id:
            user_history = self.request_history.get(user_id, [])
            analytics["user_analytics"] = {
                "total_requests": len(user_history),
                "preferred_experts": self._get_user_expert_preferences(user_history),
                "avg_satisfaction": self._calculate_user_satisfaction(user_history)
            }
        
        return analytics
    
    def _calculate_avg_quality(self) -> float:
        """Calculate average quality score across all requests"""
        total_quality = 0.0
        total_requests = 0
        
        for user_history in self.request_history.values():
            for record in user_history:
                total_quality += record["response"].quality_score
                total_requests += 1
        
        return total_quality / total_requests if total_requests > 0 else 0.0
    
    def _calculate_avg_processing_time(self) -> float:
        """Calculate average processing time across all requests"""
        total_time = 0.0
        total_requests = 0
        
        for user_history in self.request_history.values():
            for record in user_history:
                total_time += record["response"].processing_time
                total_requests += 1
        
        return total_time / total_requests if total_requests > 0 else 0.0
    
    def _get_expert_performance_summary(self) -> Dict[str, Dict[str, float]]:
        """Get performance summary for each expert"""
        return {
            expert_type.value: {
                "avg_quality": metrics.get("avg_quality", 0.0),
                "avg_processing_time": metrics.get("avg_processing_time", 0.0),
                "total_requests": metrics.get("total_requests", 0),
                "avg_satisfaction": metrics.get("avg_satisfaction", 0.0)
            }
            for expert_type, metrics in self.moe_router.performance_metrics.items()
        }
    
    def _get_user_expert_preferences(self, user_history: List[Dict]) -> Dict[str, int]:
        """Get user's expert usage preferences"""
        preferences = defaultdict(int)
        
        for record in user_history:
            preferences[record["expert_used"].value] += 1
        
        return dict(preferences)
    
    def _calculate_user_satisfaction(self, user_history: List[Dict]) -> float:
        """Calculate user satisfaction based on interaction patterns"""
        if not user_history:
            return 0.0
        
        # Simple satisfaction estimation based on quality scores
        total_satisfaction = sum(record["response"].quality_score for record in user_history)
        return total_satisfaction / len(user_history)

# Factory function for easy initialization
async def create_advanced_ai_manager(config: Dict[str, str]) -> AdvancedAIManager:
    """Create and initialize advanced AI manager"""
    manager = AdvancedAIManager(config)
    await manager.llm_coordinator._initialize_providers()
    return manager