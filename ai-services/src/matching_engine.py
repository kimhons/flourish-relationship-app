"""
Matching Engine - AI-powered compatibility analysis and matching
"""

import asyncio
import logging
from typing import Dict, Any, List, Optional
import random
import math

logger = logging.getLogger(__name__)

class MatchingEngine:
    """
    Advanced AI matching engine with compatibility scoring
    """
    
    def __init__(self):
        self.compatibility_factors = {
            'values': 0.25,
            'interests': 0.20,
            'lifestyle': 0.15,
            'communication_style': 0.15,
            'goals': 0.15,
            'personality': 0.10
        }
        
    async def initialize(self):
        """Initialize the matching engine"""
        logger.info("Matching Engine initialized successfully")
    
    async def process(self, data: Dict[str, Any], context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process a matching request"""
        try:
            user_id = data.get('user_id', '')
            preferences = data.get('preferences', {})
            
            # Generate potential matches
            matches = await self._find_potential_matches(user_id, preferences)
            
            # Calculate compatibility scores
            scored_matches = await self._calculate_compatibility_scores(user_id, matches, preferences)
            
            # Rank matches
            ranked_matches = sorted(scored_matches, key=lambda x: x['compatibility_score'], reverse=True)
            
            return {
                'matches': ranked_matches[:10],  # Top 10 matches
                'total_potential_matches': len(matches),
                'matching_criteria': list(self.compatibility_factors.keys()),
                'confidence_score': 0.8,
                'model_used': 'flourish_matching_v1',
                'cost': 0.001
            }
            
        except Exception as e:
            logger.error(f"Error processing matching request: {e}")
            return {
                'matches': [],
                'total_potential_matches': 0,
                'error': str(e),
                'confidence_score': 0.0,
                'model_used': 'fallback',
                'cost': 0.0
            }
    
    async def _find_potential_matches(self, user_id: str, preferences: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Find potential matches based on basic criteria"""
        # Mock implementation - in production, this would query the database
        mock_users = []
        for i in range(50):  # Generate 50 mock potential matches
            mock_users.append({
                'user_id': f'user_{i}',
                'age': random.randint(18, 65),
                'location': random.choice(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']),
                'interests': random.sample(['reading', 'hiking', 'cooking', 'travel', 'music', 'art', 'sports'], 3),
                'values': random.sample(['family', 'career', 'adventure', 'stability', 'creativity'], 2),
                'lifestyle': random.choice(['active', 'relaxed', 'social', 'quiet']),
                'communication_style': random.choice(['direct', 'thoughtful', 'playful', 'serious']),
                'goals': random.sample(['marriage', 'travel', 'career_growth', 'family', 'personal_growth'], 2),
                'personality': random.choice(['extrovert', 'introvert', 'ambivert'])
            })
        
        return mock_users
    
    async def _calculate_compatibility_scores(self, user_id: str, potential_matches: List[Dict[str, Any]], preferences: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Calculate compatibility scores for potential matches"""
        user_profile = await self._get_user_profile(user_id)
        scored_matches = []
        
        for match in potential_matches:
            score = 0.0
            factor_scores = {}
            
            # Calculate score for each compatibility factor
            for factor, weight in self.compatibility_factors.items():
                factor_score = await self._calculate_factor_score(user_profile, match, factor)
                factor_scores[factor] = factor_score
                score += factor_score * weight
            
            # Apply preference filters
            preference_bonus = await self._apply_preference_filters(match, preferences)
            score += preference_bonus
            
            # Normalize score to 0-100 range
            score = min(100, max(0, score * 100))
            
            scored_matches.append({
                'user_id': match['user_id'],
                'compatibility_score': round(score, 2),
                'factor_scores': factor_scores,
                'profile': match,
                'match_reasons': await self._generate_match_reasons(factor_scores)
            })
        
        return scored_matches
    
    async def _get_user_profile(self, user_id: str) -> Dict[str, Any]:
        """Get user profile for compatibility analysis"""
        # Mock user profile - in production, this would come from database
        return {
            'age': 28,
            'location': 'New York',
            'interests': ['reading', 'hiking', 'cooking'],
            'values': ['family', 'career'],
            'lifestyle': 'active',
            'communication_style': 'thoughtful',
            'goals': ['marriage', 'travel'],
            'personality': 'ambivert'
        }
    
    async def _calculate_factor_score(self, user_profile: Dict[str, Any], match_profile: Dict[str, Any], factor: str) -> float:
        """Calculate compatibility score for a specific factor"""
        user_value = user_profile.get(factor, [])
        match_value = match_profile.get(factor, [])
        
        if isinstance(user_value, list) and isinstance(match_value, list):
            # Calculate overlap for list values
            if not user_value or not match_value:
                return 0.0
            overlap = len(set(user_value) & set(match_value))
            total = len(set(user_value) | set(match_value))
            return overlap / total if total > 0 else 0.0
        
        elif isinstance(user_value, str) and isinstance(match_value, str):
            # Direct match for string values
            return 1.0 if user_value == match_value else 0.0
        
        elif isinstance(user_value, (int, float)) and isinstance(match_value, (int, float)):
            # Proximity score for numeric values (e.g., age)
            if factor == 'age':
                age_diff = abs(user_value - match_value)
                return max(0, 1 - (age_diff / 20))  # Decrease score as age difference increases
        
        return 0.0
    
    async def _apply_preference_filters(self, match_profile: Dict[str, Any], preferences: Dict[str, Any]) -> float:
        """Apply user preferences to calculate bonus score"""
        bonus = 0.0
        
        # Age preference
        if 'age_range' in preferences:
            age_min, age_max = preferences['age_range']
            if age_min <= match_profile.get('age', 0) <= age_max:
                bonus += 0.1
        
        # Location preference
        if 'location' in preferences and preferences['location'] == match_profile.get('location'):
            bonus += 0.1
        
        # Interest preferences
        if 'must_have_interests' in preferences:
            must_have = set(preferences['must_have_interests'])
            match_interests = set(match_profile.get('interests', []))
            if must_have.issubset(match_interests):
                bonus += 0.2
        
        return bonus
    
    async def _generate_match_reasons(self, factor_scores: Dict[str, float]) -> List[str]:
        """Generate reasons why this is a good match"""
        reasons = []
        
        # Find top scoring factors
        sorted_factors = sorted(factor_scores.items(), key=lambda x: x[1], reverse=True)
        
        reason_templates = {
            'values': "You share similar core values",
            'interests': "You have common interests and hobbies",
            'lifestyle': "Your lifestyles are well-aligned",
            'communication_style': "You communicate in compatible ways",
            'goals': "You have similar life goals",
            'personality': "Your personalities complement each other"
        }
        
        for factor, score in sorted_factors[:3]:  # Top 3 factors
            if score > 0.6:  # Only include high-scoring factors
                reasons.append(reason_templates.get(factor, f"High compatibility in {factor}"))
        
        return reasons
    
    async def health_check(self) -> str:
        """Perform health check"""
        return 'healthy'