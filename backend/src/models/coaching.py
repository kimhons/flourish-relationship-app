"""
AI Coaching models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime, timedelta
import json

class CoachingSession(BaseModel):
    """AI coaching session model"""
    __tablename__ = 'coaching_sessions'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Session information
    session_type = db.Column(db.String(50), nullable=False)  # general, relationship, dating, breakup, crisis
    coach_type = db.Column(db.String(50), default='dr_love')  # dr_love, therapist, life_coach
    status = db.Column(db.String(20), default='active', index=True)  # active, completed, paused, cancelled
    
    # Session metadata
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    goals = db.Column(db.Text)  # JSON string of session goals
    topic = db.Column(db.String(200))
    
    # Duration and timing
    started_at = db.Column(db.DateTime, default=datetime.utcnow)
    ended_at = db.Column(db.DateTime)
    duration_minutes = db.Column(db.Integer)
    
    # Voice and interaction
    is_voice_session = db.Column(db.Boolean, default=False)
    voice_language = db.Column(db.String(10), default='en')
    
    # AI model information
    ai_model_version = db.Column(db.String(50))
    ai_personality = db.Column(db.String(50))  # empathetic, direct, supportive, etc.
    
    # Session outcomes
    satisfaction_rating = db.Column(db.Integer)  # 1-5
    user_feedback = db.Column(db.Text)
    session_summary = db.Column(db.Text)
    key_insights = db.Column(db.Text)  # JSON string
    action_items = db.Column(db.Text)  # JSON string
    
    # Crisis intervention
    is_crisis_session = db.Column(db.Boolean, default=False)
    crisis_level = db.Column(db.String(20))  # low, medium, high, emergency
    crisis_resources_provided = db.Column(db.Text)  # JSON string
    
    # Follow-up
    follow_up_scheduled = db.Column(db.Boolean, default=False)
    follow_up_date = db.Column(db.DateTime)
    
    # Relationships
    transcripts = db.relationship('SessionTranscript', backref='session', cascade='all, delete-orphan')
    insights = db.relationship('CoachingInsight', backref='session', cascade='all, delete-orphan')
    
    @property
    def goals_list(self):
        """Get goals as list"""
        if self.goals:
            try:
                return json.loads(self.goals)
            except json.JSONDecodeError:
                return []
        return []
    
    @goals_list.setter
    def goals_list(self, value):
        """Set goals from list"""
        self.goals = json.dumps(value) if value else None
    
    @property
    def key_insights_list(self):
        """Get key insights as list"""
        if self.key_insights:
            try:
                return json.loads(self.key_insights)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def action_items_list(self):
        """Get action items as list"""
        if self.action_items:
            try:
                return json.loads(self.action_items)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def crisis_resources_list(self):
        """Get crisis resources as list"""
        if self.crisis_resources_provided:
            try:
                return json.loads(self.crisis_resources_provided)
            except json.JSONDecodeError:
                return []
        return []
    
    def start_session(self):
        """Start the coaching session"""
        self.status = 'active'
        self.started_at = datetime.utcnow()
    
    def end_session(self):
        """End the coaching session"""
        self.status = 'completed'
        self.ended_at = datetime.utcnow()
        if self.started_at:
            duration = self.ended_at - self.started_at
            self.duration_minutes = int(duration.total_seconds() / 60)
    
    def pause_session(self):
        """Pause the coaching session"""
        self.status = 'paused'
    
    def resume_session(self):
        """Resume the coaching session"""
        self.status = 'active'
    
    def cancel_session(self):
        """Cancel the coaching session"""
        self.status = 'cancelled'
        self.ended_at = datetime.utcnow()
    
    def escalate_to_crisis(self, crisis_level='medium'):
        """Escalate session to crisis intervention"""
        self.is_crisis_session = True
        self.crisis_level = crisis_level
        self.session_type = 'crisis'
    
    def schedule_follow_up(self, follow_up_date):
        """Schedule a follow-up session"""
        self.follow_up_scheduled = True
        self.follow_up_date = follow_up_date
    
    @classmethod
    def get_user_sessions(cls, user_id, limit=20):
        """Get coaching sessions for a user"""
        return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.desc()).limit(limit).all()
    
    @classmethod
    def get_active_session(cls, user_id):
        """Get active session for a user"""
        return cls.query.filter_by(user_id=user_id, status='active').first()
    
    @classmethod
    def get_crisis_sessions(cls, limit=50):
        """Get recent crisis sessions for monitoring"""
        return cls.query.filter_by(is_crisis_session=True).order_by(cls.created_at.desc()).limit(limit).all()

class SessionTranscript(BaseModel):
    """Transcript of coaching session messages"""
    __tablename__ = 'session_transcripts'
    
    session_id = db.Column(db.String(36), db.ForeignKey('coaching_sessions.id'), nullable=False, index=True)
    
    # Message information
    speaker = db.Column(db.String(20), nullable=False)  # user, ai_coach
    content = db.Column(db.Text, nullable=False)
    message_type = db.Column(db.String(20), default='text')  # text, voice, system
    
    # Voice-specific fields
    audio_url = db.Column(db.String(500))
    audio_duration = db.Column(db.Float)  # in seconds
    transcription_confidence = db.Column(db.Float)  # 0-1
    
    # AI analysis
    sentiment_score = db.Column(db.Float)  # -1 to 1
    emotion_detected = db.Column(db.String(50))
    stress_level = db.Column(db.Float)  # 0-1
    
    # Coaching analysis
    coaching_intent = db.Column(db.String(100))  # question, advice, support, challenge, etc.
    response_quality = db.Column(db.Float)  # 0-1
    
    # Sequence information
    sequence_number = db.Column(db.Integer, nullable=False)
    
    def analyze_sentiment(self):
        """Analyze sentiment of the message (placeholder for AI integration)"""
        # This would integrate with sentiment analysis API
        # For now, return a placeholder
        return {
            'sentiment_score': 0.0,
            'emotion_detected': 'neutral',
            'stress_level': 0.0
        }
    
    @classmethod
    def get_session_transcript(cls, session_id):
        """Get full transcript for a session"""
        return cls.query.filter_by(session_id=session_id).order_by(cls.sequence_number).all()

class CoachingInsight(BaseModel):
    """AI-generated insights from coaching sessions"""
    __tablename__ = 'coaching_insights'
    
    session_id = db.Column(db.String(36), db.ForeignKey('coaching_sessions.id'), nullable=False, index=True)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Insight information
    insight_type = db.Column(db.String(50), nullable=False)  # pattern, breakthrough, concern, progress
    category = db.Column(db.String(50))  # communication, attachment, goals, etc.
    
    # Content
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    evidence = db.Column(db.Text)  # Supporting evidence from session
    
    # Scoring and confidence
    confidence_score = db.Column(db.Float)  # 0-1
    importance_score = db.Column(db.Float)  # 0-1
    
    # Recommendations
    recommendations = db.Column(db.Text)  # JSON string
    resources = db.Column(db.Text)  # JSON string of recommended resources
    
    # Follow-up
    requires_follow_up = db.Column(db.Boolean, default=False)
    follow_up_priority = db.Column(db.String(20))  # low, medium, high
    
    # Status
    is_shared_with_user = db.Column(db.Boolean, default=False)
    user_acknowledged = db.Column(db.Boolean, default=False)
    
    @property
    def recommendations_list(self):
        """Get recommendations as list"""
        if self.recommendations:
            try:
                return json.loads(self.recommendations)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def resources_list(self):
        """Get resources as list"""
        if self.resources:
            try:
                return json.loads(self.resources)
            except json.JSONDecodeError:
                return []
        return []
    
    def share_with_user(self):
        """Mark insight as shared with user"""
        self.is_shared_with_user = True
    
    def acknowledge_by_user(self):
        """Mark insight as acknowledged by user"""
        self.user_acknowledged = True
    
    @classmethod
    def get_user_insights(cls, user_id, limit=20):
        """Get insights for a user"""
        return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.desc()).limit(limit).all()
    
    @classmethod
    def get_unshared_insights(cls, user_id):
        """Get insights not yet shared with user"""
        return cls.query.filter_by(user_id=user_id, is_shared_with_user=False).all()

class MoodAssessment(BaseModel):
    """User mood assessments for coaching context"""
    __tablename__ = 'mood_assessments'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    session_id = db.Column(db.String(36), db.ForeignKey('coaching_sessions.id'), index=True)
    
    # Mood scores (1-10)
    overall_mood = db.Column(db.Integer, nullable=False)
    anxiety_level = db.Column(db.Integer, nullable=False)
    happiness_level = db.Column(db.Integer, nullable=False)
    stress_level = db.Column(db.Integer, nullable=False)
    confidence_level = db.Column(db.Integer, nullable=False)
    optimism_level = db.Column(db.Integer, nullable=False)
    
    # Context
    context = db.Column(db.String(100))  # pre_session, post_session, daily_checkin
    notes = db.Column(db.Text)
    
    # Triggers and factors
    mood_triggers = db.Column(db.Text)  # JSON string
    external_factors = db.Column(db.Text)  # JSON string
    
    @property
    def mood_triggers_list(self):
        """Get mood triggers as list"""
        if self.mood_triggers:
            try:
                return json.loads(self.mood_triggers)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def external_factors_list(self):
        """Get external factors as list"""
        if self.external_factors:
            try:
                return json.loads(self.external_factors)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def average_mood(self):
        """Calculate average mood score"""
        scores = [
            self.overall_mood, self.anxiety_level, self.happiness_level,
            self.stress_level, self.confidence_level, self.optimism_level
        ]
        # Invert anxiety and stress (lower is better)
        adjusted_scores = [
            self.overall_mood,
            11 - self.anxiety_level,  # Invert anxiety
            self.happiness_level,
            11 - self.stress_level,   # Invert stress
            self.confidence_level,
            self.optimism_level
        ]
        return sum(adjusted_scores) / len(adjusted_scores)
    
    @classmethod
    def get_user_mood_history(cls, user_id, days=30):
        """Get mood history for a user"""
        cutoff_date = datetime.utcnow() - timedelta(days=days)
        return cls.query.filter(
            cls.user_id == user_id,
            cls.created_at >= cutoff_date
        ).order_by(cls.created_at.desc()).all()
    
    @classmethod
    def get_latest_mood(cls, user_id):
        """Get latest mood assessment for a user"""
        return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.desc()).first()

