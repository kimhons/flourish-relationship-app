"""
Flourish App: AI Matching Engine
Advanced compatibility analysis system with multi-model AI integration
"""

import asyncio
import logging
import json
import numpy as np
from typing import Dict, Any, List, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from enum import Enum
import uuid
import math

from .ai_service_manager import AIServiceManager, AIRequest, ServiceType, ModelTier

logger = logging.getLogger(__name__)

class CompatibilityDimension(Enum):
    PERSONALITY = "personality"
    VALUES = "values"
    LIFESTYLE = "lifestyle"
    COMMUNICATION = "communication"
    INTIMACY = "intimacy"
    GOALS = "goals"
    INTERESTS = "interests"
    ATTACHMENT_STYLE = "attachment_style"
    CONFLICT_RESOLUTION = "conflict_resolution"
    EMOTIONAL_INTELLIGENCE = "emotional_intelligence"

class PersonalityTrait(Enum):
    # Big Five + Relationship-specific traits
    OPENNESS = "openness"
    CONSCIENTIOUSNESS = "conscientiousness"
    EXTRAVERSION = "extraversion"
    AGREEABLENESS = "agreeableness"
    NEUROTICISM = "neuroticism"
    EMPATHY = "empathy"
    EMOTIONAL_STABILITY = "emotional_stability"
    ADVENTUROUSNESS = "adventurousness"
    INDEPENDENCE = "independence"
    ROMANTICISM = "romanticism"

class AttachmentStyle(Enum):
    SECURE = "secure"
    ANXIOUS = "anxious"
    AVOIDANT = "avoidant"
    DISORGANIZED = "disorganized"

class LoveLanguage(Enum):
    WORDS_OF_AFFIRMATION = "words_of_affirmation"
    ACTS_OF_SERVICE = "acts_of_service"
    RECEIVING_GIFTS = "receiving_gifts"
    QUALITY_TIME = "quality_time"
    PHYSICAL_TOUCH = "physical_touch"

@dataclass
class UserProfile:
    user_id: str
    age: int
    location: Dict[str, Any]
    personality_traits: Dict[PersonalityTrait, float]  # 0-1 scale
    values: Dict[str, float]  # Core values with importance scores
    lifestyle: Dict[str, Any]
    interests: List[str]
    relationship_goals: Dict[str, Any]
    attachment_style: AttachmentStyle
    love_languages: Dict[LoveLanguage, float]  # Primary to secondary ranking
    communication_style: Dict[str, float]
    deal_breakers: List[str]
    preferences: Dict[str, Any]
    photos: List[str]
    bio: str
    education: str
    profession: str
    relationship_history: Dict[str, Any]
    created_at: datetime
    updated_at: datetime

@dataclass
class CompatibilityScore:
    user1_id: str
    user2_id: str
    overall_score: float  # 0-100
    dimension_scores: Dict[CompatibilityDimension, float]
    strengths: List[str]
    challenges: List[str]
    conversation_starters: List[str]
    relationship_potential: str  # low, medium, high, exceptional
    confidence_level: float  # 0-1
    explanation: str
    calculated_at: datetime
    model_used: str

@dataclass
class MatchRecommendation:
    match_id: str
    user1_id: str
    user2_id: str
    compatibility_score: CompatibilityScore
    match_reason: str
    priority_score: float  # For ranking matches
    expiry_date: datetime
    status: str  # pending, viewed, liked, passed, matched

class PersonalityAnalyzer:
    """Advanced personality analysis using AI models"""
    
    def __init__(self, ai_service_manager: AIServiceManager):
        self.ai_service_manager = ai_service_manager
        
        # Personality assessment questions and weights
        self.personality_questions = {
            PersonalityTrait.OPENNESS: [
                "I enjoy trying new experiences and activities",
                "I'm curious about different cultures and ideas",
                "I like abstract thinking and philosophical discussions",
                "I appreciate art, music, and creative expression"
            ],
            PersonalityTrait.CONSCIENTIOUSNESS: [
                "I'm organized and like to plan ahead",
                "I follow through on my commitments",
                "I pay attention to details",
                "I'm disciplined and self-controlled"
            ],
            PersonalityTrait.EXTRAVERSION: [
                "I enjoy being around people and socializing",
                "I feel energized by social interactions",
                "I'm comfortable being the center of attention",
                "I prefer group activities over solitary ones"
            ],
            PersonalityTrait.AGREEABLENESS: [
                "I try to be helpful and considerate of others",
                "I avoid conflicts and prefer harmony",
                "I trust people and give them the benefit of the doubt",
                "I'm sympathetic to others' feelings"
            ],
            PersonalityTrait.NEUROTICISM: [
                "I often feel anxious or worried",
                "I'm sensitive to stress and criticism",
                "My emotions can be intense and changeable",
                "I tend to focus on negative possibilities"
            ]
        }
    
    async def analyze_personality_from_text(self, text_data: str, user_context: Dict[str, Any]) -> Dict[PersonalityTrait, float]:
        """Analyze personality traits from user's text (bio, messages, etc.)"""
        
        analysis_prompt = f"""
        Analyze the personality traits of this person based on their written content. 
        Rate each Big Five personality trait on a scale of 0.0 to 1.0:
        
        Text to analyze: "{text_data}"
        
        Additional context: {json.dumps(user_context, indent=2)}
        
        Provide scores for:
        1. Openness (0.0 = very closed to new experiences, 1.0 = very open)
        2. Conscientiousness (0.0 = very disorganized, 1.0 = very organized)
        3. Extraversion (0.0 = very introverted, 1.0 = very extraverted)
        4. Agreeableness (0.0 = very competitive, 1.0 = very cooperative)
        5. Neuroticism (0.0 = very emotionally stable, 1.0 = very emotionally reactive)
        
        Also analyze these relationship-specific traits:
        6. Empathy (0.0 = low empathy, 1.0 = high empathy)
        7. Emotional Stability (0.0 = unstable, 1.0 = very stable)
        8. Romanticism (0.0 = very practical, 1.0 = very romantic)
        
        Provide your analysis as a JSON object with trait names as keys and scores as values.
        Include a brief explanation for each score.
        """
        
        ai_request = AIRequest(
            service_type=ServiceType.MATCHING,
            data={"message": analysis_prompt},
            user_id=user_context.get("user_id", "unknown"),
            complexity="high",
            priority="normal"
        )
        
        ai_response = await self.ai_service_manager.process_request(ai_request)
        
        if ai_response.success:
            # Parse AI response to extract personality scores
            response_text = ai_response.data.get("compatibility_analysis", "")
            return self._parse_personality_scores(response_text)
        else:
            # Fallback to basic analysis
            return self._basic_personality_analysis(text_data)
    
    def _parse_personality_scores(self, response_text: str) -> Dict[PersonalityTrait, float]:
        """Parse personality scores from AI response"""
        
        # Simplified parsing - in production, this would be more sophisticated
        scores = {}
        
        # Default scores if parsing fails
        default_scores = {
            PersonalityTrait.OPENNESS: 0.5,
            PersonalityTrait.CONSCIENTIOUSNESS: 0.5,
            PersonalityTrait.EXTRAVERSION: 0.5,
            PersonalityTrait.AGREEABLENESS: 0.5,
            PersonalityTrait.NEUROTICISM: 0.3,  # Lower default for emotional stability
            PersonalityTrait.EMPATHY: 0.6,
            PersonalityTrait.EMOTIONAL_STABILITY: 0.7,
            PersonalityTrait.ROMANTICISM: 0.5
        }
        
        # Try to extract scores from response
        try:
            # Look for JSON in response
            import re
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)
            if json_match:
                parsed_data = json.loads(json_match.group())
                
                # Map response keys to PersonalityTrait enum
                trait_mapping = {
                    "openness": PersonalityTrait.OPENNESS,
                    "conscientiousness": PersonalityTrait.CONSCIENTIOUSNESS,
                    "extraversion": PersonalityTrait.EXTRAVERSION,
                    "agreeableness": PersonalityTrait.AGREEABLENESS,
                    "neuroticism": PersonalityTrait.NEUROTICISM,
                    "empathy": PersonalityTrait.EMPATHY,
                    "emotional_stability": PersonalityTrait.EMOTIONAL_STABILITY,
                    "romanticism": PersonalityTrait.ROMANTICISM
                }
                
                for key, trait in trait_mapping.items():
                    if key in parsed_data:
                        scores[trait] = max(0.0, min(1.0, float(parsed_data[key])))
        
        except Exception as e:
            logger.warning(f"Failed to parse personality scores: {e}")
        
        # Fill in missing scores with defaults
        for trait, default_score in default_scores.items():
            if trait not in scores:
                scores[trait] = default_score
        
        return scores
    
    def _basic_personality_analysis(self, text: str) -> Dict[PersonalityTrait, float]:
        """Basic personality analysis as fallback"""
        
        text_lower = text.lower()
        scores = {}
        
        # Simple keyword-based analysis
        openness_keywords = ["adventure", "travel", "new", "creative", "art", "music", "culture"]
        conscientiousness_keywords = ["organized", "plan", "goal", "responsible", "reliable", "punctual"]
        extraversion_keywords = ["social", "party", "friends", "outgoing", "energetic", "people"]
        agreeableness_keywords = ["kind", "caring", "helpful", "compassionate", "understanding"]
        neuroticism_keywords = ["anxious", "worry", "stress", "nervous", "emotional", "sensitive"]
        
        keyword_sets = {
            PersonalityTrait.OPENNESS: openness_keywords,
            PersonalityTrait.CONSCIENTIOUSNESS: conscientiousness_keywords,
            PersonalityTrait.EXTRAVERSION: extraversion_keywords,
            PersonalityTrait.AGREEABLENESS: agreeableness_keywords,
            PersonalityTrait.NEUROTICISM: neuroticism_keywords
        }
        
        for trait, keywords in keyword_sets.items():
            score = sum(1 for keyword in keywords if keyword in text_lower)
            scores[trait] = min(1.0, score / 5.0 + 0.3)  # Normalize and add base score
        
        # Default scores for relationship-specific traits
        scores[PersonalityTrait.EMPATHY] = 0.6
        scores[PersonalityTrait.EMOTIONAL_STABILITY] = 1.0 - scores.get(PersonalityTrait.NEUROTICISM, 0.3)
        scores[PersonalityTrait.ROMANTICISM] = 0.5
        
        return scores

class ValuesAnalyzer:
    """Analyze and match core values"""
    
    def __init__(self):
        self.core_values = [
            "family", "career", "adventure", "stability", "creativity", "spirituality",
            "health", "wealth", "education", "travel", "community", "independence",
            "tradition", "innovation", "justice", "compassion", "achievement", "balance"
        ]
    
    async def analyze_values_compatibility(self, user1_values: Dict[str, float], 
                                         user2_values: Dict[str, float]) -> Dict[str, Any]:
        """Analyze values compatibility between two users"""
        
        shared_values = []
        conflicting_values = []
        compatibility_score = 0.0
        
        total_values = len(self.core_values)
        
        for value in self.core_values:
            user1_importance = user1_values.get(value, 0.5)
            user2_importance = user2_values.get(value, 0.5)
            
            # Calculate similarity for this value
            value_similarity = 1.0 - abs(user1_importance - user2_importance)
            
            # Weight by average importance
            avg_importance = (user1_importance + user2_importance) / 2
            weighted_similarity = value_similarity * avg_importance
            
            compatibility_score += weighted_similarity
            
            # Identify shared and conflicting values
            if user1_importance > 0.7 and user2_importance > 0.7:
                shared_values.append(value)
            elif abs(user1_importance - user2_importance) > 0.6:
                conflicting_values.append({
                    "value": value,
                    "user1_importance": user1_importance,
                    "user2_importance": user2_importance
                })
        
        compatibility_score = (compatibility_score / total_values) * 100
        
        return {
            "compatibility_score": compatibility_score,
            "shared_values": shared_values,
            "conflicting_values": conflicting_values,
            "analysis": self._generate_values_analysis(shared_values, conflicting_values, compatibility_score)
        }
    
    def _generate_values_analysis(self, shared_values: List[str], 
                                conflicting_values: List[Dict], 
                                score: float) -> str:
        """Generate human-readable values analysis"""
        
        if score > 80:
            analysis = "You share remarkably similar core values, which creates a strong foundation for a lasting relationship. "
        elif score > 60:
            analysis = "You have good values alignment with some interesting differences that could complement each other. "
        else:
            analysis = "You have some significant differences in core values that would need open discussion and understanding. "
        
        if shared_values:
            analysis += f"You both highly value: {', '.join(shared_values[:3])}. "
        
        if conflicting_values:
            analysis += f"Areas to explore together include different perspectives on {conflicting_values[0]['value']}. "
        
        return analysis

class LifestyleCompatibilityAnalyzer:
    """Analyze lifestyle compatibility"""
    
    def __init__(self):
        self.lifestyle_factors = [
            "social_energy", "activity_level", "routine_preference", "spontaneity",
            "home_vs_out", "morning_vs_night", "urban_vs_nature", "spending_habits",
            "health_consciousness", "technology_use", "work_life_balance"
        ]
    
    def analyze_lifestyle_compatibility(self, user1_lifestyle: Dict[str, Any], 
                                      user2_lifestyle: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze lifestyle compatibility"""
        
        compatibility_scores = {}
        overall_score = 0.0
        
        for factor in self.lifestyle_factors:
            user1_value = user1_lifestyle.get(factor, 0.5)
            user2_value = user2_lifestyle.get(factor, 0.5)
            
            # Calculate compatibility for this factor
            if factor in ["social_energy", "activity_level", "routine_preference"]:
                # Some factors benefit from similarity
                factor_score = 1.0 - abs(user1_value - user2_value)
            else:
                # Others can benefit from complementarity
                factor_score = max(0.7, 1.0 - abs(user1_value - user2_value))
            
            compatibility_scores[factor] = factor_score * 100
            overall_score += factor_score
        
        overall_score = (overall_score / len(self.lifestyle_factors)) * 100
        
        return {
            "overall_score": overall_score,
            "factor_scores": compatibility_scores,
            "lifestyle_match_type": self._determine_match_type(compatibility_scores),
            "recommendations": self._generate_lifestyle_recommendations(compatibility_scores)
        }
    
    def _determine_match_type(self, scores: Dict[str, float]) -> str:
        """Determine the type of lifestyle match"""
        
        avg_score = sum(scores.values()) / len(scores)
        
        if avg_score > 85:
            return "highly_compatible"
        elif avg_score > 70:
            return "complementary"
        elif avg_score > 55:
            return "adaptable"
        else:
            return "challenging"
    
    def _generate_lifestyle_recommendations(self, scores: Dict[str, float]) -> List[str]:
        """Generate lifestyle compatibility recommendations"""
        
        recommendations = []
        
        if scores.get("social_energy", 0) < 60:
            recommendations.append("Discuss your social preferences and find a balance that works for both")
        
        if scores.get("routine_preference", 0) < 60:
            recommendations.append("Talk about your daily routines and how to blend structure with flexibility")
        
        if scores.get("work_life_balance", 0) < 60:
            recommendations.append("Align on work-life balance expectations early in the relationship")
        
        return recommendations

class AIMatchingEngine:
    """Main AI matching engine with multi-model integration"""
    
    def __init__(self, ai_service_manager: AIServiceManager):
        self.ai_service_manager = ai_service_manager
        self.personality_analyzer = PersonalityAnalyzer(ai_service_manager)
        self.values_analyzer = ValuesAnalyzer()
        self.lifestyle_analyzer = LifestyleCompatibilityAnalyzer()
        
        # Matching algorithm weights
        self.compatibility_weights = {
            CompatibilityDimension.PERSONALITY: 0.20,
            CompatibilityDimension.VALUES: 0.25,
            CompatibilityDimension.LIFESTYLE: 0.15,
            CompatibilityDimension.COMMUNICATION: 0.15,
            CompatibilityDimension.GOALS: 0.10,
            CompatibilityDimension.INTERESTS: 0.10,
            CompatibilityDimension.ATTACHMENT_STYLE: 0.05
        }
        
        # Cache for computed compatibility scores
        self.compatibility_cache = {}
    
    async def calculate_compatibility(self, user1: UserProfile, user2: UserProfile) -> CompatibilityScore:
        """Calculate comprehensive compatibility score between two users"""
        
        # Check cache first
        cache_key = f"{user1.user_id}_{user2.user_id}"
        reverse_cache_key = f"{user2.user_id}_{user1.user_id}"
        
        if cache_key in self.compatibility_cache:
            return self.compatibility_cache[cache_key]
        if reverse_cache_key in self.compatibility_cache:
            cached_score = self.compatibility_cache[reverse_cache_key]
            # Swap user IDs for consistency
            cached_score.user1_id = user1.user_id
            cached_score.user2_id = user2.user_id
            return cached_score
        
        # Calculate compatibility across all dimensions
        dimension_scores = {}
        
        # Personality compatibility
        dimension_scores[CompatibilityDimension.PERSONALITY] = await self._calculate_personality_compatibility(user1, user2)
        
        # Values compatibility
        values_analysis = await self.values_analyzer.analyze_values_compatibility(user1.values, user2.values)
        dimension_scores[CompatibilityDimension.VALUES] = values_analysis["compatibility_score"]
        
        # Lifestyle compatibility
        lifestyle_analysis = self.lifestyle_analyzer.analyze_lifestyle_compatibility(user1.lifestyle, user2.lifestyle)
        dimension_scores[CompatibilityDimension.LIFESTYLE] = lifestyle_analysis["overall_score"]
        
        # Communication compatibility
        dimension_scores[CompatibilityDimension.COMMUNICATION] = self._calculate_communication_compatibility(user1, user2)
        
        # Goals compatibility
        dimension_scores[CompatibilityDimension.GOALS] = self._calculate_goals_compatibility(user1, user2)
        
        # Interests compatibility
        dimension_scores[CompatibilityDimension.INTERESTS] = self._calculate_interests_compatibility(user1, user2)
        
        # Attachment style compatibility
        dimension_scores[CompatibilityDimension.ATTACHMENT_STYLE] = self._calculate_attachment_compatibility(user1, user2)
        
        # Calculate overall weighted score
        overall_score = sum(
            score * self.compatibility_weights[dimension]
            for dimension, score in dimension_scores.items()
        )
        
        # Generate insights using AI
        insights = await self._generate_compatibility_insights(user1, user2, dimension_scores, overall_score)
        
        # Create compatibility score object
        compatibility_score = CompatibilityScore(
            user1_id=user1.user_id,
            user2_id=user2.user_id,
            overall_score=overall_score,
            dimension_scores=dimension_scores,
            strengths=insights["strengths"],
            challenges=insights["challenges"],
            conversation_starters=insights["conversation_starters"],
            relationship_potential=self._determine_relationship_potential(overall_score),
            confidence_level=insights["confidence_level"],
            explanation=insights["explanation"],
            calculated_at=datetime.now(),
            model_used=insights["model_used"]
        )
        
        # Cache the result
        self.compatibility_cache[cache_key] = compatibility_score
        
        return compatibility_score
    
    async def _calculate_personality_compatibility(self, user1: UserProfile, user2: UserProfile) -> float:
        """Calculate personality compatibility score"""
        
        total_score = 0.0
        trait_count = 0
        
        for trait in PersonalityTrait:
            if trait in user1.personality_traits and trait in user2.personality_traits:
                user1_score = user1.personality_traits[trait]
                user2_score = user2.personality_traits[trait]
                
                # Different compatibility logic for different traits
                if trait == PersonalityTrait.NEUROTICISM:
                    # Lower neuroticism is generally better for relationships
                    trait_compatibility = 1.0 - max(user1_score, user2_score)
                elif trait in [PersonalityTrait.AGREEABLENESS, PersonalityTrait.EMPATHY]:
                    # Higher scores are better, and similarity is good
                    avg_score = (user1_score + user2_score) / 2
                    similarity = 1.0 - abs(user1_score - user2_score)
                    trait_compatibility = (avg_score + similarity) / 2
                else:
                    # For most traits, moderate similarity is good
                    similarity = 1.0 - abs(user1_score - user2_score)
                    trait_compatibility = similarity
                
                total_score += trait_compatibility
                trait_count += 1
        
        return (total_score / trait_count) * 100 if trait_count > 0 else 50.0
    
    def _calculate_communication_compatibility(self, user1: UserProfile, user2: UserProfile) -> float:
        """Calculate communication style compatibility"""
        
        # Simplified communication compatibility
        user1_style = user1.communication_style
        user2_style = user2.communication_style
        
        compatibility_factors = ["directness", "emotional_expression", "conflict_approach", "listening_style"]
        total_score = 0.0
        
        for factor in compatibility_factors:
            user1_value = user1_style.get(factor, 0.5)
            user2_value = user2_style.get(factor, 0.5)
            
            # Some complementarity can be good for communication
            if factor == "directness":
                # Moderate difference can be complementary
                difference = abs(user1_value - user2_value)
                factor_score = 1.0 - (difference * 0.7)  # Less penalty for differences
            else:
                # Similarity is generally better for other factors
                factor_score = 1.0 - abs(user1_value - user2_value)
            
            total_score += factor_score
        
        return (total_score / len(compatibility_factors)) * 100
    
    def _calculate_goals_compatibility(self, user1: UserProfile, user2: UserProfile) -> float:
        """Calculate relationship goals compatibility"""
        
        user1_goals = user1.relationship_goals
        user2_goals = user2.relationship_goals
        
        important_goals = ["marriage", "children", "timeline", "location", "career_priority"]
        total_score = 0.0
        goal_count = 0
        
        for goal in important_goals:
            if goal in user1_goals and goal in user2_goals:
                if goal in ["marriage", "children"]:
                    # Binary compatibility for major life decisions
                    if user1_goals[goal] == user2_goals[goal]:
                        goal_score = 1.0
                    else:
                        goal_score = 0.2  # Major incompatibility
                else:
                    # Continuous compatibility for other goals
                    user1_value = user1_goals[goal] if isinstance(user1_goals[goal], (int, float)) else 0.5
                    user2_value = user2_goals[goal] if isinstance(user2_goals[goal], (int, float)) else 0.5
                    goal_score = 1.0 - abs(user1_value - user2_value)
                
                total_score += goal_score
                goal_count += 1
        
        return (total_score / goal_count) * 100 if goal_count > 0 else 70.0
    
    def _calculate_interests_compatibility(self, user1: UserProfile, user2: UserProfile) -> float:
        """Calculate shared interests compatibility"""
        
        user1_interests = set(user1.interests)
        user2_interests = set(user2.interests)
        
        if not user1_interests or not user2_interests:
            return 50.0
        
        # Calculate Jaccard similarity
        intersection = len(user1_interests.intersection(user2_interests))
        union = len(user1_interests.union(user2_interests))
        
        jaccard_similarity = intersection / union if union > 0 else 0
        
        # Boost score if there are shared interests
        shared_interests_bonus = min(intersection / 3.0, 0.3)  # Up to 30% bonus
        
        base_score = jaccard_similarity * 70  # Base score from similarity
        final_score = base_score + (shared_interests_bonus * 100)
        
        return min(final_score, 100.0)
    
    def _calculate_attachment_compatibility(self, user1: UserProfile, user2: UserProfile) -> float:
        """Calculate attachment style compatibility"""
        
        attachment_compatibility_matrix = {
            (AttachmentStyle.SECURE, AttachmentStyle.SECURE): 95,
            (AttachmentStyle.SECURE, AttachmentStyle.ANXIOUS): 80,
            (AttachmentStyle.SECURE, AttachmentStyle.AVOIDANT): 75,
            (AttachmentStyle.SECURE, AttachmentStyle.DISORGANIZED): 70,
            (AttachmentStyle.ANXIOUS, AttachmentStyle.ANXIOUS): 60,
            (AttachmentStyle.ANXIOUS, AttachmentStyle.AVOIDANT): 40,
            (AttachmentStyle.ANXIOUS, AttachmentStyle.DISORGANIZED): 50,
            (AttachmentStyle.AVOIDANT, AttachmentStyle.AVOIDANT): 55,
            (AttachmentStyle.AVOIDANT, AttachmentStyle.DISORGANIZED): 45,
            (AttachmentStyle.DISORGANIZED, AttachmentStyle.DISORGANIZED): 50
        }
        
        style_pair = (user1.attachment_style, user2.attachment_style)
        reverse_pair = (user2.attachment_style, user1.attachment_style)
        
        return attachment_compatibility_matrix.get(style_pair, 
               attachment_compatibility_matrix.get(reverse_pair, 60))
    
    async def _generate_compatibility_insights(self, user1: UserProfile, user2: UserProfile,
                                             dimension_scores: Dict[CompatibilityDimension, float],
                                             overall_score: float) -> Dict[str, Any]:
        """Generate AI-powered compatibility insights"""
        
        # Prepare data for AI analysis
        compatibility_data = {
            "user1_profile": {
                "age": user1.age,
                "personality_traits": {trait.value: score for trait, score in user1.personality_traits.items()},
                "values": user1.values,
                "interests": user1.interests,
                "relationship_goals": user1.relationship_goals,
                "attachment_style": user1.attachment_style.value
            },
            "user2_profile": {
                "age": user2.age,
                "personality_traits": {trait.value: score for trait, score in user2.personality_traits.items()},
                "values": user2.values,
                "interests": user2.interests,
                "relationship_goals": user2.relationship_goals,
                "attachment_style": user2.attachment_style.value
            },
            "dimension_scores": {dim.value: score for dim, score in dimension_scores.items()},
            "overall_score": overall_score
        }
        
        insights_prompt = f"""
        Analyze this compatibility match and provide detailed insights:
        
        {json.dumps(compatibility_data, indent=2)}
        
        Please provide:
        1. Top 3 relationship strengths based on the compatibility analysis
        2. Top 2 potential challenges they might face
        3. 5 conversation starters that would help them connect
        4. An explanation of why they're compatible (or not)
        5. Confidence level in this match (0.0-1.0)
        
        Focus on being encouraging while being realistic about potential challenges.
        Make the insights specific and actionable.
        """
        
        ai_request = AIRequest(
            service_type=ServiceType.MATCHING,
            data={"message": insights_prompt},
            user_id=user1.user_id,
            complexity="high",
            priority="normal"
        )
        
        ai_response = await self.ai_service_manager.process_request(ai_request)
        
        if ai_response.success:
            response_data = ai_response.data
            
            # Parse AI response (simplified)
            return {
                "strengths": self._extract_strengths(response_data.get("compatibility_analysis", "")),
                "challenges": self._extract_challenges(response_data.get("compatibility_analysis", "")),
                "conversation_starters": response_data.get("conversation_starters", self._default_conversation_starters()),
                "explanation": response_data.get("compatibility_analysis", ""),
                "confidence_level": 0.85,  # Would be extracted from AI response
                "model_used": ai_response.model_used
            }
        else:
            # Fallback insights
            return self._generate_fallback_insights(dimension_scores, overall_score)
    
    def _extract_strengths(self, analysis_text: str) -> List[str]:
        """Extract relationship strengths from AI analysis"""
        
        # Simplified extraction - in production, this would use NLP
        default_strengths = [
            "Shared core values create a strong foundation",
            "Complementary personality traits balance each other well",
            "Similar life goals and relationship timeline"
        ]
        
        # Look for strength indicators in the text
        strength_keywords = ["strength", "positive", "shared", "compatible", "complement"]
        
        if any(keyword in analysis_text.lower() for keyword in strength_keywords):
            return default_strengths
        else:
            return ["Good potential for growth together", "Interesting differences to explore"]
    
    def _extract_challenges(self, analysis_text: str) -> List[str]:
        """Extract potential challenges from AI analysis"""
        
        default_challenges = [
            "Different communication styles may need attention",
            "Varying social energy levels could require balance"
        ]
        
        challenge_keywords = ["challenge", "difference", "conflict", "issue", "concern"]
        
        if any(keyword in analysis_text.lower() for keyword in challenge_keywords):
            return default_challenges
        else:
            return ["Minor differences in lifestyle preferences"]
    
    def _default_conversation_starters(self) -> List[str]:
        """Default conversation starters"""
        
        return [
            "What's something you're passionate about that most people don't know?",
            "If you could travel anywhere in the world, where would you go and why?",
            "What's the best piece of advice you've ever received?",
            "What does your ideal weekend look like?",
            "What's something you've learned about yourself recently?"
        ]
    
    def _generate_fallback_insights(self, dimension_scores: Dict[CompatibilityDimension, float],
                                  overall_score: float) -> Dict[str, Any]:
        """Generate fallback insights when AI is unavailable"""
        
        strengths = []
        challenges = []
        
        # Analyze dimension scores
        for dimension, score in dimension_scores.items():
            if score > 80:
                strengths.append(f"Strong {dimension.value} compatibility")
            elif score < 60:
                challenges.append(f"{dimension.value.title()} differences to navigate")
        
        if not strengths:
            strengths = ["Good overall compatibility potential"]
        
        if not challenges:
            challenges = ["Minor adjustments needed for optimal harmony"]
        
        return {
            "strengths": strengths[:3],
            "challenges": challenges[:2],
            "conversation_starters": self._default_conversation_starters(),
            "explanation": f"Overall compatibility score of {overall_score:.1f}% suggests good relationship potential.",
            "confidence_level": 0.75,
            "model_used": "fallback_analysis"
        }
    
    def _determine_relationship_potential(self, overall_score: float) -> str:
        """Determine relationship potential based on overall score"""
        
        if overall_score >= 85:
            return "exceptional"
        elif overall_score >= 75:
            return "high"
        elif overall_score >= 60:
            return "medium"
        else:
            return "low"
    
    async def find_matches(self, user: UserProfile, candidate_pool: List[UserProfile],
                          max_matches: int = 10) -> List[MatchRecommendation]:
        """Find best matches for a user from candidate pool"""
        
        matches = []
        
        # Calculate compatibility with each candidate
        for candidate in candidate_pool:
            if candidate.user_id == user.user_id:
                continue
            
            # Check basic filters first
            if not self._passes_basic_filters(user, candidate):
                continue
            
            # Calculate compatibility
            compatibility_score = await self.calculate_compatibility(user, candidate)
            
            # Create match recommendation
            match = MatchRecommendation(
                match_id=str(uuid.uuid4()),
                user1_id=user.user_id,
                user2_id=candidate.user_id,
                compatibility_score=compatibility_score,
                match_reason=self._generate_match_reason(compatibility_score),
                priority_score=self._calculate_priority_score(compatibility_score, user, candidate),
                expiry_date=datetime.now() + timedelta(days=30),
                status="pending"
            )
            
            matches.append(match)
        
        # Sort by priority score and return top matches
        matches.sort(key=lambda m: m.priority_score, reverse=True)
        return matches[:max_matches]
    
    def _passes_basic_filters(self, user: UserProfile, candidate: UserProfile) -> bool:
        """Check if candidate passes user's basic filters"""
        
        # Age filter
        user_age_pref = user.preferences.get("age_range", {"min": 18, "max": 100})
        if not (user_age_pref["min"] <= candidate.age <= user_age_pref["max"]):
            return False
        
        # Location filter (simplified)
        max_distance = user.preferences.get("max_distance", 50)  # miles
        # In production, this would calculate actual distance
        
        # Deal breakers
        for deal_breaker in user.deal_breakers:
            if deal_breaker in candidate.interests or deal_breaker in str(candidate.values):
                return False
        
        return True
    
    def _generate_match_reason(self, compatibility_score: CompatibilityScore) -> str:
        """Generate a reason why this is a good match"""
        
        top_dimension = max(compatibility_score.dimension_scores.items(), key=lambda x: x[1])
        
        reasons = {
            CompatibilityDimension.PERSONALITY: "Your personalities complement each other beautifully",
            CompatibilityDimension.VALUES: "You share important core values",
            CompatibilityDimension.LIFESTYLE: "Your lifestyles align well",
            CompatibilityDimension.COMMUNICATION: "You have compatible communication styles",
            CompatibilityDimension.GOALS: "Your relationship goals are well-aligned",
            CompatibilityDimension.INTERESTS: "You have great shared interests"
        }
        
        return reasons.get(top_dimension[0], "You have strong overall compatibility")
    
    def _calculate_priority_score(self, compatibility_score: CompatibilityScore,
                                user: UserProfile, candidate: UserProfile) -> float:
        """Calculate priority score for ranking matches"""
        
        base_score = compatibility_score.overall_score
        
        # Boost for recent activity
        days_since_update = (datetime.now() - candidate.updated_at).days
        recency_boost = max(0, 10 - days_since_update)
        
        # Boost for mutual interests
        shared_interests = len(set(user.interests).intersection(set(candidate.interests)))
        interest_boost = min(shared_interests * 2, 10)
        
        # Boost for photo completeness
        photo_boost = min(len(candidate.photos) * 2, 10)
        
        priority_score = base_score + recency_boost + interest_boost + photo_boost
        
        return min(priority_score, 100.0)
    
    async def get_match_analytics(self, user_id: str, days: int = 30) -> Dict[str, Any]:
        """Get matching analytics for a user"""
        
        # This would query the database for match history
        # For now, return sample analytics
        
        return {
            "period_days": days,
            "total_matches_generated": 45,
            "matches_viewed": 32,
            "matches_liked": 12,
            "mutual_matches": 3,
            "average_compatibility_score": 78.5,
            "top_compatibility_dimensions": [
                {"dimension": "values", "average_score": 85.2},
                {"dimension": "personality", "average_score": 82.1},
                {"dimension": "lifestyle", "average_score": 76.8}
            ],
            "match_success_rate": 26.7,  # (matches_liked / matches_viewed) * 100
            "recommendations": [
                "Your values-based matches perform best - consider emphasizing your core values",
                "Matches with shared creative interests show higher engagement",
                "Consider expanding your age range by 2 years for more quality matches"
            ]
        }
    
    def clear_cache(self):
        """Clear the compatibility cache"""
        self.compatibility_cache.clear()
        logger.info("Compatibility cache cleared")

# Global AI matching engine instance
ai_matching_engine = None

async def initialize_ai_matching_engine(ai_service_manager: AIServiceManager):
    """Initialize AI matching engine"""
    global ai_matching_engine
    ai_matching_engine = AIMatchingEngine(ai_service_manager)
    logger.info("AI Matching Engine initialized successfully")

def get_ai_matching_engine() -> AIMatchingEngine:
    """Get the global AI matching engine instance"""
    if ai_matching_engine is None:
        raise RuntimeError("AI matching engine not initialized")
    return ai_matching_engine

