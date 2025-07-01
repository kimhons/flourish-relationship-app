"""
Machine Learning Service Layer for Flourish
Manages fine-tuned ML models for specialized relationship tasks
"""

import numpy as np
import pandas as pd
import pickle
import joblib
import json
import logging
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
from enum import Enum
import asyncio
from datetime import datetime
import torch
import torch.nn as nn
from transformers import AutoTokenizer, AutoModel, pipeline
from sklearn.ensemble import RandomForestClassifier, GradientBoostingRegressor
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import cv2
from PIL import Image

logger = logging.getLogger(__name__)

class MLModelType(Enum):
    EMOTION_DETECTION = "emotion_detection"
    CRISIS_DETECTION = "crisis_detection"
    COMPATIBILITY_SCORING = "compatibility_scoring"
    CONVERSATION_QUALITY = "conversation_quality"
    SENTIMENT_ANALYSIS = "sentiment_analysis"
    TOXICITY_DETECTION = "toxicity_detection"
    PHOTO_ATTRACTIVENESS = "photo_attractiveness"
    ENGAGEMENT_PREDICTION = "engagement_prediction"
    CONTENT_RELEVANCE = "content_relevance"
    BEHAVIOR_PREDICTION = "behavior_prediction"
    CHURN_PREDICTION = "churn_prediction"

@dataclass
class MLPrediction:
    """Standard ML prediction result"""
    model_type: MLModelType
    prediction: Any
    confidence: float
    features_used: List[str]
    model_version: str
    timestamp: datetime
    metadata: Optional[Dict[str, Any]] = None

class EmotionDetectionModel:
    """BERT-based emotion detection model for relationship conversations"""
    
    def __init__(self, model_path: str = None):
        self.model_name = "j-hartmann/emotion-english-distilroberta-base"
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
        self.model = AutoModel.from_pretrained(self.model_name)
        self.classifier = pipeline("text-classification", 
                                 model=self.model_name, 
                                 tokenizer=self.tokenizer)
        
        # Emotion mapping for relationship context
        self.emotion_mapping = {
            'joy': 'happy',
            'sadness': 'sad',
            'anger': 'angry',
            'fear': 'anxious',
            'surprise': 'surprised',
            'disgust': 'disgusted',
            'love': 'loving',
            'optimism': 'hopeful',
            'pessimism': 'worried'
        }
    
    async def predict(self, text: str) -> MLPrediction:
        """Predict emotions in text"""
        try:
            # Get emotion predictions
            results = self.classifier(text)
            
            # Process results
            emotions = {}
            max_confidence = 0
            primary_emotion = None
            
            for result in results:
                emotion = self.emotion_mapping.get(result['label'].lower(), result['label'])
                confidence = result['score']
                emotions[emotion] = confidence
                
                if confidence > max_confidence:
                    max_confidence = confidence
                    primary_emotion = emotion
            
            return MLPrediction(
                model_type=MLModelType.EMOTION_DETECTION,
                prediction={
                    'primary_emotion': primary_emotion,
                    'all_emotions': emotions,
                    'emotional_intensity': max_confidence
                },
                confidence=max_confidence,
                features_used=['text_content'],
                model_version="v1.0",
                timestamp=datetime.now(),
                metadata={'text_length': len(text)}
            )
            
        except Exception as e:
            logger.error(f"Emotion detection error: {e}")
            raise

class CrisisDetectionModel:
    """Specialized model for detecting mental health concerns and crisis situations"""
    
    def __init__(self):
        # Crisis keywords and patterns
        self.crisis_keywords = [
            'suicide', 'kill myself', 'end it all', 'not worth living',
            'hurt myself', 'self harm', 'cutting', 'overdose',
            'hopeless', 'worthless', 'nobody cares', 'better off dead',
            'can\'t go on', 'want to die', 'end my life'
        ]
        
        self.depression_indicators = [
            'depressed', 'depression', 'sad all the time', 'empty',
            'numb', 'can\'t feel', 'lost interest', 'no energy',
            'sleep all day', 'can\'t sleep', 'worthless', 'guilty'
        ]
        
        self.anxiety_indicators = [
            'panic', 'anxiety', 'anxious', 'worried', 'scared',
            'can\'t breathe', 'heart racing', 'overwhelmed',
            'can\'t cope', 'stressed', 'nervous breakdown'
        ]
        
        # Load pre-trained sentiment model for additional context
        self.sentiment_analyzer = pipeline("sentiment-analysis", 
                                         model="cardiffnlp/twitter-roberta-base-sentiment-latest")
    
    async def predict(self, text: str, conversation_history: List[str] = None) -> MLPrediction:
        """Detect crisis situations and mental health concerns"""
        try:
            text_lower = text.lower()
            
            # Crisis detection
            crisis_score = 0
            crisis_indicators = []
            
            for keyword in self.crisis_keywords:
                if keyword in text_lower:
                    crisis_score += 1
                    crisis_indicators.append(keyword)
            
            # Depression indicators
            depression_score = 0
            for indicator in self.depression_indicators:
                if indicator in text_lower:
                    depression_score += 0.5
            
            # Anxiety indicators
            anxiety_score = 0
            for indicator in self.anxiety_indicators:
                if indicator in text_lower:
                    anxiety_score += 0.5
            
            # Sentiment analysis
            sentiment_result = self.sentiment_analyzer(text)[0]
            sentiment_score = sentiment_result['score']
            sentiment_label = sentiment_result['label']
            
            # Calculate overall risk
            total_risk = crisis_score * 3 + depression_score + anxiety_score
            if sentiment_label == 'NEGATIVE' and sentiment_score > 0.8:
                total_risk += 1
            
            # Normalize risk score
            risk_level = min(total_risk / 5.0, 1.0)
            
            # Determine intervention level
            if risk_level >= 0.8:
                intervention = "immediate"
            elif risk_level >= 0.6:
                intervention = "urgent"
            elif risk_level >= 0.4:
                intervention = "moderate"
            elif risk_level >= 0.2:
                intervention = "low"
            else:
                intervention = "none"
            
            return MLPrediction(
                model_type=MLModelType.CRISIS_DETECTION,
                prediction={
                    'risk_level': risk_level,
                    'intervention_required': intervention,
                    'crisis_indicators': crisis_indicators,
                    'depression_score': depression_score,
                    'anxiety_score': anxiety_score,
                    'sentiment': sentiment_label,
                    'sentiment_confidence': sentiment_score
                },
                confidence=0.9 if crisis_indicators else 0.7,
                features_used=['text_content', 'keywords', 'sentiment'],
                model_version="v1.0",
                timestamp=datetime.now(),
                metadata={
                    'text_length': len(text),
                    'has_conversation_history': conversation_history is not None
                }
            )
            
        except Exception as e:
            logger.error(f"Crisis detection error: {e}")
            raise

class CompatibilityScoringModel:
    """Advanced compatibility scoring using multiple factors"""
    
    def __init__(self):
        # Initialize with pre-trained models and weights
        self.feature_weights = {
            'values_alignment': 0.25,
            'lifestyle_compatibility': 0.20,
            'communication_style': 0.15,
            'interests_overlap': 0.15,
            'personality_match': 0.15,
            'goals_alignment': 0.10
        }
        
        # Load personality model (Big Five)
        self.personality_model = pipeline("text-classification", 
                                        model="martin-ha/toxic-comment-model")
    
    async def predict(self, user1_profile: Dict, user2_profile: Dict) -> MLPrediction:
        """Calculate compatibility score between two users"""
        try:
            compatibility_scores = {}
            
            # Values alignment
            values1 = set(user1_profile.get('values', []))
            values2 = set(user2_profile.get('values', []))
            values_score = len(values1.intersection(values2)) / max(len(values1.union(values2)), 1)
            compatibility_scores['values_alignment'] = values_score
            
            # Lifestyle compatibility
            lifestyle1 = user1_profile.get('lifestyle', {})
            lifestyle2 = user2_profile.get('lifestyle', {})
            lifestyle_score = self._calculate_lifestyle_compatibility(lifestyle1, lifestyle2)
            compatibility_scores['lifestyle_compatibility'] = lifestyle_score
            
            # Communication style
            comm_style1 = user1_profile.get('communication_style', 'balanced')
            comm_style2 = user2_profile.get('communication_style', 'balanced')
            comm_score = self._calculate_communication_compatibility(comm_style1, comm_style2)
            compatibility_scores['communication_style'] = comm_score
            
            # Interests overlap
            interests1 = set(user1_profile.get('interests', []))
            interests2 = set(user2_profile.get('interests', []))
            interests_score = len(interests1.intersection(interests2)) / max(len(interests1.union(interests2)), 1)
            compatibility_scores['interests_overlap'] = interests_score
            
            # Personality match (simplified)
            personality_score = self._calculate_personality_match(
                user1_profile.get('personality', {}),
                user2_profile.get('personality', {})
            )
            compatibility_scores['personality_match'] = personality_score
            
            # Goals alignment
            goals1 = user1_profile.get('relationship_goals', [])
            goals2 = user2_profile.get('relationship_goals', [])
            goals_score = self._calculate_goals_alignment(goals1, goals2)
            compatibility_scores['goals_alignment'] = goals_score
            
            # Calculate weighted overall score
            overall_score = sum(
                score * self.feature_weights[feature]
                for feature, score in compatibility_scores.items()
            )
            
            return MLPrediction(
                model_type=MLModelType.COMPATIBILITY_SCORING,
                prediction={
                    'overall_score': overall_score,
                    'detailed_scores': compatibility_scores,
                    'compatibility_level': self._get_compatibility_level(overall_score),
                    'strengths': self._identify_strengths(compatibility_scores),
                    'potential_challenges': self._identify_challenges(compatibility_scores)
                },
                confidence=0.85,
                features_used=list(compatibility_scores.keys()),
                model_version="v1.0",
                timestamp=datetime.now(),
                metadata={
                    'user1_completeness': self._profile_completeness(user1_profile),
                    'user2_completeness': self._profile_completeness(user2_profile)
                }
            )
            
        except Exception as e:
            logger.error(f"Compatibility scoring error: {e}")
            raise
    
    def _calculate_lifestyle_compatibility(self, lifestyle1: Dict, lifestyle2: Dict) -> float:
        """Calculate lifestyle compatibility score"""
        factors = ['activity_level', 'social_preference', 'work_life_balance', 'travel_frequency']
        scores = []
        
        for factor in factors:
            val1 = lifestyle1.get(factor, 3)  # Default to middle value
            val2 = lifestyle2.get(factor, 3)
            # Calculate similarity (closer values = higher score)
            similarity = 1 - abs(val1 - val2) / 4  # Assuming 1-5 scale
            scores.append(max(similarity, 0))
        
        return sum(scores) / len(scores) if scores else 0.5
    
    def _calculate_communication_compatibility(self, style1: str, style2: str) -> float:
        """Calculate communication style compatibility"""
        compatibility_matrix = {
            ('direct', 'direct'): 0.9,
            ('direct', 'diplomatic'): 0.6,
            ('direct', 'passive'): 0.3,
            ('diplomatic', 'diplomatic'): 0.9,
            ('diplomatic', 'passive'): 0.7,
            ('passive', 'passive'): 0.8,
            ('balanced', 'balanced'): 1.0,
            ('balanced', 'direct'): 0.8,
            ('balanced', 'diplomatic'): 0.8,
            ('balanced', 'passive'): 0.7
        }
        
        key = (style1, style2)
        if key in compatibility_matrix:
            return compatibility_matrix[key]
        
        # Try reverse order
        key = (style2, style1)
        return compatibility_matrix.get(key, 0.5)
    
    def _calculate_personality_match(self, personality1: Dict, personality2: Dict) -> float:
        """Calculate personality compatibility using Big Five model"""
        big_five = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']
        scores = []
        
        for trait in big_five:
            val1 = personality1.get(trait, 3)
            val2 = personality2.get(trait, 3)
            
            # Some traits work better when similar, others when complementary
            if trait in ['agreeableness', 'conscientiousness']:
                # Similar is better
                similarity = 1 - abs(val1 - val2) / 4
            elif trait == 'extraversion':
                # Moderate difference can be good
                diff = abs(val1 - val2)
                similarity = 0.8 if diff <= 1 else 0.6 if diff <= 2 else 0.4
            else:
                # Balanced approach
                similarity = 1 - abs(val1 - val2) / 5
            
            scores.append(max(similarity, 0))
        
        return sum(scores) / len(scores) if scores else 0.5
    
    def _calculate_goals_alignment(self, goals1: List[str], goals2: List[str]) -> float:
        """Calculate relationship goals alignment"""
        if not goals1 or not goals2:
            return 0.5
        
        goals1_set = set(goals1)
        goals2_set = set(goals2)
        
        # Check for conflicting goals
        conflicts = {
            ('marriage', 'casual'),
            ('children', 'no_children'),
            ('long_term', 'short_term')
        }
        
        for goal1 in goals1_set:
            for goal2 in goals2_set:
                if (goal1, goal2) in conflicts or (goal2, goal1) in conflicts:
                    return 0.1  # Major conflict
        
        # Calculate overlap
        overlap = len(goals1_set.intersection(goals2_set))
        total = len(goals1_set.union(goals2_set))
        
        return overlap / total if total > 0 else 0.5
    
    def _get_compatibility_level(self, score: float) -> str:
        """Convert score to compatibility level"""
        if score >= 0.8:
            return "excellent"
        elif score >= 0.7:
            return "very_good"
        elif score >= 0.6:
            return "good"
        elif score >= 0.5:
            return "moderate"
        elif score >= 0.4:
            return "low"
        else:
            return "poor"
    
    def _identify_strengths(self, scores: Dict[str, float]) -> List[str]:
        """Identify compatibility strengths"""
        strengths = []
        for feature, score in scores.items():
            if score >= 0.7:
                strengths.append(feature)
        return strengths
    
    def _identify_challenges(self, scores: Dict[str, float]) -> List[str]:
        """Identify potential challenges"""
        challenges = []
        for feature, score in scores.items():
            if score <= 0.4:
                challenges.append(feature)
        return challenges
    
    def _profile_completeness(self, profile: Dict) -> float:
        """Calculate profile completeness score"""
        required_fields = ['values', 'lifestyle', 'interests', 'personality', 'relationship_goals']
        completed = sum(1 for field in required_fields if profile.get(field))
        return completed / len(required_fields)

class ConversationQualityModel:
    """Model for analyzing conversation quality and health"""
    
    def __init__(self):
        self.sentiment_analyzer = pipeline("sentiment-analysis")
        
        # Quality indicators
        self.positive_indicators = [
            'thank you', 'appreciate', 'love', 'care', 'understand',
            'support', 'agree', 'excited', 'happy', 'wonderful',
            'amazing', 'great', 'awesome', 'perfect', 'beautiful'
        ]
        
        self.negative_indicators = [
            'hate', 'stupid', 'idiot', 'shut up', 'whatever',
            'don\'t care', 'annoying', 'boring', 'waste', 'terrible',
            'awful', 'disgusting', 'pathetic', 'useless'
        ]
        
        self.engagement_indicators = [
            '?', 'what do you think', 'how about', 'would you',
            'tell me', 'share', 'opinion', 'feel', 'experience'
        ]
    
    async def predict(self, conversation: List[Dict[str, str]]) -> MLPrediction:
        """Analyze conversation quality"""
        try:
            if not conversation:
                return self._empty_conversation_result()
            
            # Analyze each message
            message_scores = []
            total_sentiment = 0
            engagement_count = 0
            positive_count = 0
            negative_count = 0
            
            for message in conversation:
                content = message.get('content', '')
                content_lower = content.lower()
                
                # Sentiment analysis
                sentiment = self.sentiment_analyzer(content)[0]
                sentiment_score = sentiment['score'] if sentiment['label'] == 'POSITIVE' else -sentiment['score']
                total_sentiment += sentiment_score
                
                # Count indicators
                positive_count += sum(1 for indicator in self.positive_indicators if indicator in content_lower)
                negative_count += sum(1 for indicator in self.negative_indicators if indicator in content_lower)
                engagement_count += sum(1 for indicator in self.engagement_indicators if indicator in content_lower)
                
                message_scores.append({
                    'sentiment': sentiment_score,
                    'length': len(content),
                    'engagement': any(indicator in content_lower for indicator in self.engagement_indicators)
                })
            
            # Calculate overall metrics
            avg_sentiment = total_sentiment / len(conversation)
            engagement_ratio = engagement_count / len(conversation)
            positivity_ratio = positive_count / max(positive_count + negative_count, 1)
            
            # Calculate quality score
            quality_score = (
                (avg_sentiment + 1) / 2 * 0.4 +  # Normalize sentiment to 0-1
                min(engagement_ratio, 1.0) * 0.3 +
                positivity_ratio * 0.3
            )
            
            # Determine conversation health
            if quality_score >= 0.8:
                health = "excellent"
            elif quality_score >= 0.6:
                health = "good"
            elif quality_score >= 0.4:
                health = "moderate"
            elif quality_score >= 0.2:
                health = "poor"
            else:
                health = "concerning"
            
            return MLPrediction(
                model_type=MLModelType.CONVERSATION_QUALITY,
                prediction={
                    'quality_score': quality_score,
                    'conversation_health': health,
                    'average_sentiment': avg_sentiment,
                    'engagement_ratio': engagement_ratio,
                    'positivity_ratio': positivity_ratio,
                    'message_count': len(conversation),
                    'recommendations': self._generate_recommendations(quality_score, engagement_ratio, positivity_ratio)
                },
                confidence=0.8,
                features_used=['sentiment', 'engagement', 'positivity', 'message_length'],
                model_version="v1.0",
                timestamp=datetime.now(),
                metadata={'conversation_length': len(conversation)}
            )
            
        except Exception as e:
            logger.error(f"Conversation quality analysis error: {e}")
            raise
    
    def _empty_conversation_result(self) -> MLPrediction:
        """Return result for empty conversation"""
        return MLPrediction(
            model_type=MLModelType.CONVERSATION_QUALITY,
            prediction={
                'quality_score': 0.0,
                'conversation_health': "no_data",
                'message_count': 0,
                'recommendations': ["Start a conversation to analyze quality"]
            },
            confidence=1.0,
            features_used=[],
            model_version="v1.0",
            timestamp=datetime.now()
        )
    
    def _generate_recommendations(self, quality_score: float, engagement_ratio: float, positivity_ratio: float) -> List[str]:
        """Generate conversation improvement recommendations"""
        recommendations = []
        
        if quality_score < 0.5:
            recommendations.append("Consider focusing on more positive communication")
        
        if engagement_ratio < 0.3:
            recommendations.append("Try asking more questions to increase engagement")
        
        if positivity_ratio < 0.6:
            recommendations.append("Express more appreciation and positive feelings")
        
        if not recommendations:
            recommendations.append("Great conversation! Keep up the positive communication")
        
        return recommendations

class MLServiceManager:
    """Main ML service manager"""
    
    def __init__(self):
        self.models = {
            MLModelType.EMOTION_DETECTION: EmotionDetectionModel(),
            MLModelType.CRISIS_DETECTION: CrisisDetectionModel(),
            MLModelType.COMPATIBILITY_SCORING: CompatibilityScoringModel(),
            MLModelType.CONVERSATION_QUALITY: ConversationQualityModel(),
        }
        
        # Performance tracking
        self.prediction_history = []
        self.model_performance = {}
    
    async def predict(self, model_type: MLModelType, **kwargs) -> MLPrediction:
        """Make prediction using specified model"""
        if model_type not in self.models:
            raise ValueError(f"Model type {model_type} not available")
        
        model = self.models[model_type]
        
        try:
            start_time = datetime.now()
            prediction = await model.predict(**kwargs)
            end_time = datetime.now()
            
            # Track performance
            latency = (end_time - start_time).total_seconds()
            self._record_prediction(model_type, prediction, latency)
            
            return prediction
            
        except Exception as e:
            logger.error(f"ML prediction error for {model_type}: {e}")
            raise
    
    def _record_prediction(self, model_type: MLModelType, prediction: MLPrediction, latency: float):
        """Record prediction for performance tracking"""
        record = {
            'model_type': model_type.value,
            'timestamp': prediction.timestamp,
            'latency': latency,
            'confidence': prediction.confidence
        }
        
        self.prediction_history.append(record)
        
        # Keep only last 1000 predictions
        if len(self.prediction_history) > 1000:
            self.prediction_history = self.prediction_history[-1000:]
        
        # Update model performance
        if model_type not in self.model_performance:
            self.model_performance[model_type] = {
                'total_predictions': 0,
                'avg_latency': 0,
                'avg_confidence': 0
            }
        
        perf = self.model_performance[model_type]
        perf['total_predictions'] += 1
        perf['avg_latency'] = (perf['avg_latency'] * (perf['total_predictions'] - 1) + latency) / perf['total_predictions']
        perf['avg_confidence'] = (perf['avg_confidence'] * (perf['total_predictions'] - 1) + prediction.confidence) / perf['total_predictions']
    
    def get_performance_report(self) -> Dict[str, Any]:
        """Get ML models performance report"""
        return {
            'models': {model_type.value: perf for model_type, perf in self.model_performance.items()},
            'total_predictions': len(self.prediction_history),
            'available_models': [model_type.value for model_type in self.models.keys()]
        }

# Singleton instance
ml_service = MLServiceManager()

def get_ml_service() -> MLServiceManager:
    """Get ML service instance"""
    return ml_service

# Convenience functions
async def detect_emotion(text: str) -> Dict[str, Any]:
    """Detect emotions in text"""
    service = get_ml_service()
    prediction = await service.predict(MLModelType.EMOTION_DETECTION, text=text)
    return prediction.prediction

async def detect_crisis(text: str, conversation_history: List[str] = None) -> Dict[str, Any]:
    """Detect crisis situations"""
    service = get_ml_service()
    prediction = await service.predict(MLModelType.CRISIS_DETECTION, text=text, conversation_history=conversation_history)
    return prediction.prediction

async def calculate_compatibility(user1_profile: Dict, user2_profile: Dict) -> Dict[str, Any]:
    """Calculate compatibility between users"""
    service = get_ml_service()
    prediction = await service.predict(MLModelType.COMPATIBILITY_SCORING, user1_profile=user1_profile, user2_profile=user2_profile)
    return prediction.prediction

async def analyze_conversation_quality(conversation: List[Dict[str, str]]) -> Dict[str, Any]:
    """Analyze conversation quality"""
    service = get_ml_service()
    prediction = await service.predict(MLModelType.CONVERSATION_QUALITY, conversation=conversation)
    return prediction.prediction

