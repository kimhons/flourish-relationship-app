"""
Content Curator - AI-powered personalized content curation
"""

import asyncio
import logging
from typing import Dict, Any, List, Optional
import random

logger = logging.getLogger(__name__)

class ContentCurator:
    """
    AI content curator for personalized content recommendations
    """
    
    def __init__(self):
        self.content_categories = {
            'articles': ['relationship_tips', 'dating_advice', 'communication', 'self_improvement'],
            'videos': ['relationship_talks', 'dating_tutorials', 'meditation', 'workshops'],
            'podcasts': ['relationship_podcasts', 'dating_stories', 'expert_interviews'],
            'exercises': ['communication_exercises', 'mindfulness', 'relationship_games'],
            'books': ['relationship_books', 'self_help', 'psychology', 'memoirs']
        }
        
        self.mock_content = {
            'articles': [
                {
                    'id': 'art_001',
                    'title': '10 Ways to Improve Communication in Your Relationship',
                    'description': 'Learn effective communication strategies for deeper connection',
                    'category': 'communication',
                    'tags': ['communication', 'relationships', 'tips'],
                    'reading_time': 5,
                    'popularity_score': 0.9
                },
                {
                    'id': 'art_002',
                    'title': 'The Art of Active Listening',
                    'description': 'Master the skill of truly hearing your partner',
                    'category': 'communication',
                    'tags': ['listening', 'communication', 'skills'],
                    'reading_time': 3,
                    'popularity_score': 0.8
                }
            ],
            'videos': [
                {
                    'id': 'vid_001',
                    'title': 'Building Trust in Relationships',
                    'description': 'Expert advice on creating lasting trust',
                    'category': 'relationship_tips',
                    'tags': ['trust', 'relationships', 'expert'],
                    'duration': 15,
                    'popularity_score': 0.85
                }
            ],
            'exercises': [
                {
                    'id': 'ex_001',
                    'title': 'Daily Gratitude Practice for Couples',
                    'description': 'A simple exercise to strengthen your bond',
                    'category': 'relationship_games',
                    'tags': ['gratitude', 'couples', 'daily'],
                    'duration': 10,
                    'popularity_score': 0.7
                }
            ]
        }
        
    async def initialize(self):
        """Initialize the content curator"""
        logger.info("Content Curator initialized successfully")
    
    async def process(self, data: Dict[str, Any], context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process a content curation request"""
        try:
            user_id = data.get('user_id', '')
            interests = data.get('interests', [])
            content_type = data.get('content_type', 'all')
            limit = data.get('limit', 10)
            
            # Get user preferences
            user_preferences = await self._get_user_preferences(user_id, context)
            
            # Curate content based on interests and preferences
            curated_content = await self._curate_content(interests, user_preferences, content_type, limit)
            
            # Personalize recommendations
            personalized_content = await self._personalize_recommendations(curated_content, user_preferences)
            
            return {
                'recommendations': personalized_content,
                'total_available': len(curated_content),
                'curation_factors': ['interests', 'preferences', 'popularity', 'recency'],
                'confidence_score': 0.8,
                'model_used': 'content_curator_v1',
                'cost': 0.0005
            }
            
        except Exception as e:
            logger.error(f"Error processing content curation: {e}")
            return {
                'recommendations': [],
                'total_available': 0,
                'error': str(e),
                'confidence_score': 0.0,
                'model_used': 'fallback',
                'cost': 0.0
            }
    
    async def _get_user_preferences(self, user_id: str, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Get user preferences for content curation"""
        # Mock user preferences - in production, this would come from user data
        return {
            'preferred_content_types': ['articles', 'videos'],
            'reading_time_preference': 'short',  # short, medium, long
            'expertise_level': 'intermediate',  # beginner, intermediate, advanced
            'relationship_stage': 'dating',  # single, dating, relationship, married
            'previously_viewed': ['art_001'],
            'liked_tags': ['communication', 'trust', 'dating']
        }
    
    async def _curate_content(self, interests: List[str], user_preferences: Dict[str, Any], content_type: str, limit: int) -> List[Dict[str, Any]]:
        """Curate content based on interests and preferences"""
        all_content = []
        
        # Get content from all categories or specific type
        if content_type == 'all':
            for category in self.mock_content.values():
                all_content.extend(category)
        else:
            all_content.extend(self.mock_content.get(content_type, []))
        
        # Filter and score content
        scored_content = []
        for content in all_content:
            score = await self._calculate_content_score(content, interests, user_preferences)
            if score > 0.3:  # Minimum relevance threshold
                content_with_score = {**content, 'relevance_score': score}
                scored_content.append(content_with_score)
        
        # Sort by relevance and return top results
        scored_content.sort(key=lambda x: x['relevance_score'], reverse=True)
        return scored_content[:limit]
    
    async def _calculate_content_score(self, content: Dict[str, Any], interests: List[str], user_preferences: Dict[str, Any]) -> float:
        """Calculate relevance score for a piece of content"""
        score = 0.0
        
        # Interest matching
        content_tags = content.get('tags', [])
        interest_overlap = len(set(interests) & set(content_tags))
        if content_tags:
            score += (interest_overlap / len(content_tags)) * 0.4
        
        # User preference matching
        liked_tags = user_preferences.get('liked_tags', [])
        preference_overlap = len(set(liked_tags) & set(content_tags))
        if liked_tags:
            score += (preference_overlap / len(liked_tags)) * 0.3
        
        # Popularity score
        popularity = content.get('popularity_score', 0.5)
        score += popularity * 0.2
        
        # Content length preference
        reading_time_pref = user_preferences.get('reading_time_preference', 'medium')
        content_time = content.get('reading_time', content.get('duration', 5))
        
        if reading_time_pref == 'short' and content_time <= 5:
            score += 0.1
        elif reading_time_pref == 'medium' and 5 < content_time <= 15:
            score += 0.1
        elif reading_time_pref == 'long' and content_time > 15:
            score += 0.1
        
        # Avoid previously viewed content
        if content.get('id') in user_preferences.get('previously_viewed', []):
            score *= 0.5
        
        return min(1.0, score)
    
    async def _personalize_recommendations(self, content_list: List[Dict[str, Any]], user_preferences: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Add personalization to content recommendations"""
        personalized_content = []
        
        for content in content_list:
            # Add personalization metadata
            personalized_item = {
                **content,
                'personalization': {
                    'reason': await self._get_recommendation_reason(content, user_preferences),
                    'confidence': content.get('relevance_score', 0.5),
                    'estimated_engagement': await self._estimate_engagement(content, user_preferences)
                }
            }
            personalized_content.append(personalized_item)
        
        return personalized_content
    
    async def _get_recommendation_reason(self, content: Dict[str, Any], user_preferences: Dict[str, Any]) -> str:
        """Generate reason for recommendation"""
        content_tags = content.get('tags', [])
        liked_tags = user_preferences.get('liked_tags', [])
        
        common_tags = set(content_tags) & set(liked_tags)
        
        if common_tags:
            tag = list(common_tags)[0]
            return f"Recommended because you're interested in {tag}"
        
        if content.get('popularity_score', 0) > 0.8:
            return "Popular content in your area of interest"
        
        return "Curated based on your preferences"
    
    async def _estimate_engagement(self, content: Dict[str, Any], user_preferences: Dict[str, Any]) -> float:
        """Estimate user engagement likelihood"""
        base_engagement = content.get('popularity_score', 0.5)
        
        # Adjust based on user preferences
        content_tags = content.get('tags', [])
        liked_tags = user_preferences.get('liked_tags', [])
        
        if set(content_tags) & set(liked_tags):
            base_engagement *= 1.2
        
        # Adjust based on content length preference
        reading_time_pref = user_preferences.get('reading_time_preference', 'medium')
        content_time = content.get('reading_time', content.get('duration', 5))
        
        if (reading_time_pref == 'short' and content_time <= 5) or \
           (reading_time_pref == 'medium' and 5 < content_time <= 15) or \
           (reading_time_pref == 'long' and content_time > 15):
            base_engagement *= 1.1
        
        return min(1.0, base_engagement)
    
    async def health_check(self) -> str:
        """Perform health check"""
        return 'healthy'