"""
Dr. Love Coach - AI Relationship Coaching Agent
"""

import asyncio
import logging
from typing import Dict, Any, List, Optional
from datetime import datetime
import openai
import json
import os

logger = logging.getLogger(__name__)

class DrLoveCoach:
    """
    Advanced AI relationship coach with personalized advice and crisis intervention
    """
    
    def __init__(self):
        self.openai_client = None
        self.coaching_prompts = {
            'general': """You are Dr. Love, a compassionate and experienced relationship coach. 
            Provide helpful, empathetic advice while maintaining professional boundaries. 
            Focus on healthy communication, emotional intelligence, and personal growth.""",
            
            'crisis': """You are Dr. Love, a crisis intervention specialist. 
            The user may be experiencing a relationship crisis. Provide immediate support, 
            validate their feelings, and guide them toward professional help if needed.""",
            
            'dating': """You are Dr. Love, a dating coach. Help users navigate the dating world 
            with confidence, authenticity, and healthy boundaries. Focus on building genuine connections.""",
            
            'communication': """You are Dr. Love, a communication expert. Help users improve their 
            relationship communication skills, resolve conflicts, and express their needs effectively."""
        }
        
    async def initialize(self):
        """Initialize the Dr. Love Coach"""
        try:
            api_key = os.getenv('OPENAI_API_KEY')
            if not api_key:
                logger.warning("No OpenAI API key found. Dr. Love Coach will use mock responses.")
                self.openai_client = None
            else:
                self.openai_client = openai.AsyncOpenAI(api_key=api_key)
                
            logger.info("Dr. Love Coach initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize Dr. Love Coach: {e}")
            raise
    
    async def process(self, data: Dict[str, Any], context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Process a coaching request"""
        try:
            message = data.get('message', '')
            user_id = data.get('user_id', '')
            coaching_type = data.get('type', 'general')
            
            # Analyze the message for crisis indicators
            crisis_level = await self._detect_crisis_level(message)
            
            # Select appropriate coaching approach
            if crisis_level > 7:
                coaching_type = 'crisis'
            elif any(keyword in message.lower() for keyword in ['dating', 'match', 'single']):
                coaching_type = 'dating'
            elif any(keyword in message.lower() for keyword in ['communication', 'argue', 'fight']):
                coaching_type = 'communication'
            
            # Generate coaching response
            advice = await self._generate_advice(message, coaching_type, context)
            
            # Add personalized elements
            response = await self._personalize_response(advice, user_id, context)
            
            return {
                'advice': response,
                'coaching_type': coaching_type,
                'crisis_level': crisis_level,
                'confidence_score': 0.85,
                'model_used': 'gpt-4',
                'cost': 0.002,
                'follow_up_suggestions': await self._generate_follow_up_suggestions(coaching_type),
                'resources': await self._get_relevant_resources(coaching_type, crisis_level)
            }
            
        except Exception as e:
            logger.error(f"Error processing coaching request: {e}")
            return {
                'advice': "I'm here to help, but I'm experiencing some technical difficulties. Please try again in a moment.",
                'coaching_type': 'general',
                'crisis_level': 0,
                'confidence_score': 0.0,
                'model_used': 'fallback',
                'cost': 0.0,
                'error': str(e)
            }
    
    async def _detect_crisis_level(self, message: str) -> int:
        """Detect crisis level in user message (0-10 scale)"""
        crisis_indicators = {
            'high': ['suicide', 'kill myself', 'end it all', 'hurt myself', 'can\'t go on'],
            'medium': ['hopeless', 'worthless', 'trapped', 'breaking point', 'can\'t take it'],
            'low': ['sad', 'depressed', 'lonely', 'upset', 'frustrated']
        }
        
        message_lower = message.lower()
        
        for indicator in crisis_indicators['high']:
            if indicator in message_lower:
                return 9
        
        for indicator in crisis_indicators['medium']:
            if indicator in message_lower:
                return 6
        
        for indicator in crisis_indicators['low']:
            if indicator in message_lower:
                return 3
        
        return 1
    
    async def _generate_advice(self, message: str, coaching_type: str, context: Optional[Dict[str, Any]] = None) -> str:
        """Generate personalized advice"""
        if not self.openai_client:
            return await self._generate_mock_advice(message, coaching_type)
        
        try:
            system_prompt = self.coaching_prompts.get(coaching_type, self.coaching_prompts['general'])
            
            # Add context if available
            context_info = ""
            if context:
                age = context.get('age', 'unknown')
                relationship_status = context.get('relationship_status', 'unknown')
                context_info = f"User context: Age {age}, Status: {relationship_status}. "
            
            messages = [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"{context_info}User says: {message}"}
            ]
            
            response = await self.openai_client.chat.completions.create(
                model="gpt-4",
                messages=messages,
                max_tokens=500,
                temperature=0.7
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            logger.error(f"Error generating advice: {e}")
            return await self._generate_mock_advice(message, coaching_type)
    
    async def _generate_mock_advice(self, message: str, coaching_type: str) -> str:
        """Generate mock advice for testing"""
        mock_responses = {
            'general': "Thank you for sharing that with me. Remember that every relationship has its challenges, and it's normal to feel uncertain sometimes. Focus on open communication and being true to yourself.",
            'crisis': "I hear that you're going through a really difficult time right now. Your feelings are valid, and you don't have to face this alone. Please consider reaching out to a mental health professional who can provide the support you need.",
            'dating': "Dating can be both exciting and nerve-wracking! Remember to be authentic and take things at your own pace. The right person will appreciate you for who you are.",
            'communication': "Good communication is the foundation of any healthy relationship. Try using 'I' statements to express your feelings, and remember to listen actively to your partner's perspective."
        }
        
        return mock_responses.get(coaching_type, mock_responses['general'])
    
    async def _personalize_response(self, advice: str, user_id: str, context: Optional[Dict[str, Any]] = None) -> str:
        """Add personalization to the response"""
        if context and context.get('name'):
            name = context['name']
            advice = f"Hi {name}, {advice}"
        
        return advice
    
    async def _generate_follow_up_suggestions(self, coaching_type: str) -> List[str]:
        """Generate follow-up suggestions based on coaching type"""
        suggestions = {
            'general': [
                "Would you like to explore this topic further?",
                "How do you feel about trying this approach?",
                "What specific aspect would you like to work on next?"
            ],
            'crisis': [
                "Would you like me to help you find professional resources?",
                "How are you feeling right now?",
                "Do you have someone you can talk to today?"
            ],
            'dating': [
                "Would you like tips on creating an authentic dating profile?",
                "How do you feel about setting healthy boundaries?",
                "What are your relationship goals?"
            ],
            'communication': [
                "Would you like to practice expressing your needs?",
                "How do you typically handle conflict?",
                "What communication patterns would you like to change?"
            ]
        }
        
        return suggestions.get(coaching_type, suggestions['general'])
    
    async def _get_relevant_resources(self, coaching_type: str, crisis_level: int) -> List[Dict[str, str]]:
        """Get relevant resources based on coaching type and crisis level"""
        resources = []
        
        if crisis_level > 7:
            resources.extend([
                {
                    'title': 'National Suicide Prevention Lifeline',
                    'description': '24/7 crisis support',
                    'contact': '988',
                    'type': 'crisis'
                },
                {
                    'title': 'Crisis Text Line',
                    'description': 'Text HOME to 741741',
                    'contact': '741741',
                    'type': 'crisis'
                }
            ])
        
        if coaching_type == 'dating':
            resources.extend([
                {
                    'title': 'Healthy Dating Guide',
                    'description': 'Tips for building authentic connections',
                    'url': '/resources/dating-guide',
                    'type': 'article'
                }
            ])
        
        if coaching_type == 'communication':
            resources.extend([
                {
                    'title': 'Communication Skills Workshop',
                    'description': 'Interactive exercises for better communication',
                    'url': '/resources/communication-workshop',
                    'type': 'workshop'
                }
            ])
        
        return resources
    
    async def health_check(self) -> str:
        """Perform health check"""
        try:
            if self.openai_client:
                # Test API connection
                test_response = await self.openai_client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[{"role": "user", "content": "Hello"}],
                    max_tokens=5
                )
                return 'healthy'
            else:
                return 'healthy_mock'
        except Exception as e:
            return f'error: {str(e)}'