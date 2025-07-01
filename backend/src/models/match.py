"""
Match and compatibility models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime, timedelta
import json

class Match(BaseModel):
    """Match model for tracking user interactions and matches"""
    __tablename__ = 'matches'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    matched_user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Match status
    status = db.Column(db.String(20), default='pending', index=True)  # pending, matched, expired, unmatched, blocked
    match_type = db.Column(db.String(20), default='algorithm')  # algorithm, mutual_like, super_like, boost
    
    # Interaction tracking
    user_liked = db.Column(db.Boolean, default=False)
    matched_user_liked = db.Column(db.Boolean, default=False)
    user_super_liked = db.Column(db.Boolean, default=False)
    matched_user_super_liked = db.Column(db.Boolean, default=False)
    
    # Timestamps
    liked_at = db.Column(db.DateTime)
    matched_at = db.Column(db.DateTime)
    last_interaction = db.Column(db.DateTime)
    expires_at = db.Column(db.DateTime)
    
    # Compatibility information
    compatibility_score = db.Column(db.Float)  # 0-100
    compatibility_breakdown = db.Column(db.Text)  # JSON string
    
    # Conversation reference
    conversation_id = db.Column(db.String(36), db.ForeignKey('conversations.id'))
    
    # Metadata
    algorithm_version = db.Column(db.String(20))
    boost_used = db.Column(db.Boolean, default=False)
    
    # Unique constraint to prevent duplicate matches
    __table_args__ = (
        db.UniqueConstraint('user_id', 'matched_user_id', name='unique_match'),
    )
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Set expiration date (7 days from creation)
        if not self.expires_at:
            self.expires_at = datetime.utcnow() + timedelta(days=7)
    
    @property
    def compatibility_breakdown_dict(self):
        """Get compatibility breakdown as dictionary"""
        if self.compatibility_breakdown:
            try:
                return json.loads(self.compatibility_breakdown)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @compatibility_breakdown_dict.setter
    def compatibility_breakdown_dict(self, value):
        """Set compatibility breakdown from dictionary"""
        self.compatibility_breakdown = json.dumps(value) if value else None
    
    @property
    def is_mutual_match(self):
        """Check if this is a mutual match"""
        return self.user_liked and self.matched_user_liked
    
    @property
    def is_expired(self):
        """Check if match has expired"""
        return self.expires_at and datetime.utcnow() > self.expires_at
    
    def like_user(self, user_id, is_super=False):
        """Record a like from a user"""
        if user_id == self.user_id:
            self.user_liked = True
            if is_super:
                self.user_super_liked = True
        elif user_id == self.matched_user_id:
            self.matched_user_liked = True
            if is_super:
                self.matched_user_super_liked = True
        
        self.liked_at = datetime.utcnow()
        self.last_interaction = datetime.utcnow()
        
        # Check if it's now a mutual match
        if self.is_mutual_match and self.status == 'pending':
            self.status = 'matched'
            self.matched_at = datetime.utcnow()
            self.match_type = 'super_like' if (self.user_super_liked or self.matched_user_super_liked) else 'mutual_like'
    
    def unmatch(self):
        """Unmatch users"""
        self.status = 'unmatched'
        self.last_interaction = datetime.utcnow()
    
    def block(self):
        """Block this match"""
        self.status = 'blocked'
        self.last_interaction = datetime.utcnow()
    
    def expire(self):
        """Expire this match"""
        if not self.is_mutual_match:
            self.status = 'expired'
    
    @classmethod
    def get_match_between_users(cls, user1_id, user2_id):
        """Get match between two users (regardless of order)"""
        return cls.query.filter(
            ((cls.user_id == user1_id) & (cls.matched_user_id == user2_id)) |
            ((cls.user_id == user2_id) & (cls.matched_user_id == user1_id))
        ).first()
    
    @classmethod
    def get_user_matches(cls, user_id, status=None):
        """Get all matches for a user"""
        query = cls.query.filter(
            (cls.user_id == user_id) | (cls.matched_user_id == user_id)
        )
        if status:
            query = query.filter(cls.status == status)
        return query.order_by(cls.created_at.desc()).all()
    
    @classmethod
    def get_mutual_matches(cls, user_id):
        """Get all mutual matches for a user"""
        return cls.query.filter(
            ((cls.user_id == user_id) | (cls.matched_user_id == user_id)) &
            (cls.status == 'matched')
        ).order_by(cls.matched_at.desc()).all()
    
    @classmethod
    def get_pending_likes(cls, user_id):
        """Get users who liked this user but haven't been liked back"""
        return cls.query.filter(
            (cls.matched_user_id == user_id) &
            (cls.user_liked == True) &
            (cls.matched_user_liked == False) &
            (cls.status == 'pending')
        ).order_by(cls.liked_at.desc()).all()

class CompatibilityScore(BaseModel):
    """Detailed compatibility scoring between users"""
    __tablename__ = 'compatibility_scores'
    
    user1_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    user2_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    
    # Overall compatibility
    overall_score = db.Column(db.Float, nullable=False)  # 0-100
    
    # Category scores (0-100)
    personality_score = db.Column(db.Float)
    values_score = db.Column(db.Float)
    lifestyle_score = db.Column(db.Float)
    communication_score = db.Column(db.Float)
    goals_score = db.Column(db.Float)
    interests_score = db.Column(db.Float)
    physical_score = db.Column(db.Float)
    emotional_score = db.Column(db.Float)
    intellectual_score = db.Column(db.Float)
    
    # Detailed breakdown
    personality_breakdown = db.Column(db.Text)  # JSON string
    values_breakdown = db.Column(db.Text)  # JSON string
    lifestyle_breakdown = db.Column(db.Text)  # JSON string
    
    # Algorithm information
    algorithm_version = db.Column(db.String(20))
    confidence_score = db.Column(db.Float)  # 0-100
    
    # Reasons and insights
    compatibility_reasons = db.Column(db.Text)  # JSON string
    potential_challenges = db.Column(db.Text)  # JSON string
    recommended_topics = db.Column(db.Text)  # JSON string
    
    # Unique constraint
    __table_args__ = (
        db.UniqueConstraint('user1_id', 'user2_id', name='unique_compatibility'),
    )
    
    @property
    def personality_breakdown_dict(self):
        """Get personality breakdown as dictionary"""
        if self.personality_breakdown:
            try:
                return json.loads(self.personality_breakdown)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def values_breakdown_dict(self):
        """Get values breakdown as dictionary"""
        if self.values_breakdown:
            try:
                return json.loads(self.values_breakdown)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def lifestyle_breakdown_dict(self):
        """Get lifestyle breakdown as dictionary"""
        if self.lifestyle_breakdown:
            try:
                return json.loads(self.lifestyle_breakdown)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def compatibility_reasons_list(self):
        """Get compatibility reasons as list"""
        if self.compatibility_reasons:
            try:
                return json.loads(self.compatibility_reasons)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def potential_challenges_list(self):
        """Get potential challenges as list"""
        if self.potential_challenges:
            try:
                return json.loads(self.potential_challenges)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def recommended_topics_list(self):
        """Get recommended topics as list"""
        if self.recommended_topics:
            try:
                return json.loads(self.recommended_topics)
            except json.JSONDecodeError:
                return []
        return []
    
    def get_category_scores(self):
        """Get all category scores as dictionary"""
        return {
            'personality': self.personality_score,
            'values': self.values_score,
            'lifestyle': self.lifestyle_score,
            'communication': self.communication_score,
            'goals': self.goals_score,
            'interests': self.interests_score,
            'physical': self.physical_score,
            'emotional': self.emotional_score,
            'intellectual': self.intellectual_score
        }
    
    @classmethod
    def get_compatibility_between_users(cls, user1_id, user2_id):
        """Get compatibility score between two users (regardless of order)"""
        return cls.query.filter(
            ((cls.user1_id == user1_id) & (cls.user2_id == user2_id)) |
            ((cls.user1_id == user2_id) & (cls.user2_id == user1_id))
        ).first()
    
    @classmethod
    def calculate_compatibility(cls, user1, user2):
        """Calculate compatibility between two users"""
        # This is a simplified compatibility calculation
        # In production, this would use sophisticated ML algorithms
        
        scores = {}
        
        # Personality compatibility (Big Five)
        if (user1.profile and user2.profile and 
            all([user1.profile.openness, user1.profile.conscientiousness, user1.profile.extraversion,
                 user1.profile.agreeableness, user1.profile.neuroticism]) and
            all([user2.profile.openness, user2.profile.conscientiousness, user2.profile.extraversion,
                 user2.profile.agreeableness, user2.profile.neuroticism])):
            
            personality_diff = (
                abs(user1.profile.openness - user2.profile.openness) +
                abs(user1.profile.conscientiousness - user2.profile.conscientiousness) +
                abs(user1.profile.extraversion - user2.profile.extraversion) +
                abs(user1.profile.agreeableness - user2.profile.agreeableness) +
                abs(user1.profile.neuroticism - user2.profile.neuroticism)
            ) / 5
            scores['personality'] = max(0, 100 - personality_diff)
        else:
            scores['personality'] = 50  # Default if no data
        
        # Values compatibility
        if user1.profile and user2.profile:
            user1_values = set(user1.profile.values_list)
            user2_values = set(user2.profile.values_list)
            if user1_values and user2_values:
                common_values = len(user1_values.intersection(user2_values))
                total_values = len(user1_values.union(user2_values))
                scores['values'] = (common_values / total_values) * 100 if total_values > 0 else 50
            else:
                scores['values'] = 50
        else:
            scores['values'] = 50
        
        # Lifestyle compatibility
        lifestyle_score = 100
        if user1.profile and user2.profile:
            # Check smoking compatibility
            if user1.profile.smoking_status and user2.profile.smoking_status:
                if user1.profile.smoking_status != user2.profile.smoking_status:
                    lifestyle_score -= 20
            
            # Check drinking compatibility
            if user1.profile.drinking_status and user2.profile.drinking_status:
                drinking_compatibility = {
                    ('never', 'never'): 0,
                    ('rarely', 'rarely'): 0,
                    ('socially', 'socially'): 0,
                    ('regularly', 'regularly'): 0,
                    ('never', 'rarely'): -5,
                    ('never', 'socially'): -15,
                    ('never', 'regularly'): -30,
                    ('rarely', 'socially'): -5,
                    ('rarely', 'regularly'): -20,
                    ('socially', 'regularly'): -10
                }
                key = tuple(sorted([user1.profile.drinking_status, user2.profile.drinking_status]))
                lifestyle_score += drinking_compatibility.get(key, -10)
        
        scores['lifestyle'] = max(0, lifestyle_score)
        
        # Age compatibility
        age_diff = abs(user1.age - user2.age) if user1.age and user2.age else 0
        age_score = max(0, 100 - (age_diff * 2))  # Lose 2 points per year difference
        scores['age'] = age_score
        
        # Interests compatibility
        user1_interests = set(user1.interests_list)
        user2_interests = set(user2.interests_list)
        if user1_interests and user2_interests:
            common_interests = len(user1_interests.intersection(user2_interests))
            total_interests = len(user1_interests.union(user2_interests))
            scores['interests'] = (common_interests / total_interests) * 100 if total_interests > 0 else 50
        else:
            scores['interests'] = 50
        
        # Calculate overall score (weighted average)
        weights = {
            'personality': 0.25,
            'values': 0.25,
            'lifestyle': 0.20,
            'age': 0.15,
            'interests': 0.15
        }
        
        overall_score = sum(scores[category] * weight for category, weight in weights.items())
        
        return {
            'overall_score': overall_score,
            'category_scores': scores,
            'algorithm_version': '1.0',
            'confidence_score': 85.0  # This would be calculated based on data completeness
        }

