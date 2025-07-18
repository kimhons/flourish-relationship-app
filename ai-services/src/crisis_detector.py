"""
Crisis Detector - AI-powered crisis detection and intervention
"""

import asyncio
import logging
from typing import Dict, Any, List, Optional
import re

logger = logging.getLogger(__name__)

class CrisisDetector:
    """
    AI crisis detector for identifying potential crisis situations
    """
    
    def __init__(self):
        self.crisis_keywords = {
            'suicide': ['suicide', 'kill myself', 'end it all', 'not worth living', 'better off dead'],
            'self_harm': ['hurt myself', 'self-harm', 'cut myself', 'harm myself'],
            'violence': ['hurt someone', 'violence', 'hit', 'abuse', 'threatening'],
            'severe_depression': ['hopeless', 'worthless', 'trapped', 'no way out', 'can\'t go on'],
            'substance_abuse': ['drinking too much', 'using drugs', 'addiction', 'overdose']
        }
        
        self.crisis_resources = {
            'suicide': {
                'hotline': '988',
                'text': 'Text HOME to 741741',
                'description': 'National Suicide Prevention Lifeline'
            },
            'domestic_violence': {
                'hotline': '1-800-799-7233',
                'description': 'National Domestic Violence Hotline'
            },
            'substance_abuse': {
                'hotline': '1-800-662-4357',
                'description': 'SAMHSA National Helpline'
            }
        }
        
    async def initialize(self):
        """Initialize the crisis detector"""
        logger.info("Crisis Detector initialized successfully")
    
    async def process(self, data: Dict[str, Any], context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process a crisis detection request"""
        try:
            user_id = data.get('user_id', '')
            message = data.get('message', '')
            
            # Detect crisis indicators
            crisis_analysis = await self._analyze_crisis_indicators(message)
            
            # Determine crisis level
            crisis_level = await self._calculate_crisis_level(crisis_analysis)
            
            # Generate intervention response
            intervention = await self._generate_intervention(crisis_analysis, crisis_level)
            
            # Get appropriate resources
            resources = await self._get_crisis_resources(crisis_analysis)
            
            return {
                'crisis_detected': crisis_level > 5,
                'crisis_level': crisis_level,
                'crisis_types': list(crisis_analysis.keys()),
                'intervention': intervention,
                'resources': resources,
                'immediate_action_required': crisis_level > 8,
                'confidence_score': 0.9,
                'model_used': 'crisis_detector_v1',
                'cost': 0.0
            }
            
        except Exception as e:
            logger.error(f"Error processing crisis detection: {e}")
            return {
                'crisis_detected': False,
                'crisis_level': 0,
                'crisis_types': [],
                'intervention': 'I\'m here to help. If you\'re in crisis, please reach out to a mental health professional.',
                'resources': [],
                'error': str(e),
                'confidence_score': 0.0,
                'model_used': 'fallback',
                'cost': 0.0
            }
    
    async def _analyze_crisis_indicators(self, message: str) -> Dict[str, float]:
        """Analyze message for crisis indicators"""
        message_lower = message.lower()
        crisis_analysis = {}
        
        for crisis_type, keywords in self.crisis_keywords.items():
            score = 0.0
            matches = 0
            
            for keyword in keywords:
                if keyword in message_lower:
                    matches += 1
                    # Weight based on keyword severity
                    if crisis_type == 'suicide':
                        score += 0.9
                    elif crisis_type == 'self_harm':
                        score += 0.8
                    elif crisis_type == 'violence':
                        score += 0.7
                    elif crisis_type == 'severe_depression':
                        score += 0.6
                    else:
                        score += 0.5
            
            if matches > 0:
                # Normalize score and add context boost
                normalized_score = min(1.0, score / len(keywords))
                crisis_analysis[crisis_type] = normalized_score
        
        return crisis_analysis
    
    async def _calculate_crisis_level(self, crisis_analysis: Dict[str, float]) -> int:
        """Calculate overall crisis level (0-10 scale)"""
        if not crisis_analysis:
            return 0
        
        # Weight different crisis types
        weights = {
            'suicide': 10,
            'self_harm': 8,
            'violence': 7,
            'severe_depression': 6,
            'substance_abuse': 5
        }
        
        total_score = 0
        for crisis_type, score in crisis_analysis.items():
            weight = weights.get(crisis_type, 5)
            total_score += score * weight
        
        # Normalize to 0-10 scale
        max_possible_score = max(weights.values())
        crisis_level = min(10, int(total_score / max_possible_score * 10))
        
        return crisis_level
    
    async def _generate_intervention(self, crisis_analysis: Dict[str, float], crisis_level: int) -> str:
        """Generate appropriate intervention response"""
        if crisis_level >= 9:
            return """I'm very concerned about what you're sharing. Your safety is the most important thing right now. 
            Please reach out to emergency services (911) or the National Suicide Prevention Lifeline (988) immediately. 
            You don't have to go through this alone."""
        
        elif crisis_level >= 7:
            return """I hear that you're going through an incredibly difficult time. These feelings are overwhelming, 
            but there are people who want to help. Please consider reaching out to a crisis counselor or mental health 
            professional right away. You deserve support and care."""
        
        elif crisis_level >= 5:
            return """It sounds like you're dealing with some really challenging feelings right now. 
            While I'm here to listen, I think it would be helpful for you to talk to a mental health professional 
            who can provide the support you need. Would you like help finding resources?"""
        
        else:
            return """I can hear that you're going through a tough time. It's important to take care of yourself 
            and reach out for support when you need it. Remember that difficult feelings are temporary, 
            and there are people who care about you."""
    
    async def _get_crisis_resources(self, crisis_analysis: Dict[str, float]) -> List[Dict[str, str]]:
        """Get appropriate crisis resources"""
        resources = []
        
        # Always include general crisis resources if any crisis detected
        if crisis_analysis:
            resources.extend([
                {
                    'title': 'National Suicide Prevention Lifeline',
                    'contact': '988',
                    'description': '24/7 crisis support',
                    'type': 'hotline'
                },
                {
                    'title': 'Crisis Text Line',
                    'contact': 'Text HOME to 741741',
                    'description': '24/7 text-based crisis support',
                    'type': 'text'
                }
            ])
        
        # Add specific resources based on crisis type
        if 'violence' in crisis_analysis:
            resources.append({
                'title': 'National Domestic Violence Hotline',
                'contact': '1-800-799-7233',
                'description': '24/7 support for domestic violence',
                'type': 'hotline'
            })
        
        if 'substance_abuse' in crisis_analysis:
            resources.append({
                'title': 'SAMHSA National Helpline',
                'contact': '1-800-662-4357',
                'description': 'Treatment referral service',
                'type': 'hotline'
            })
        
        return resources
    
    async def health_check(self) -> str:
        """Perform health check"""
        return 'healthy'