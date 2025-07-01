"""
Analytics models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime, timedelta
import json

class UserAnalytics(BaseModel):
    """User analytics and behavior tracking"""
    __tablename__ = 'user_analytics'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, unique=True, index=True)
    
    # Engagement metrics
    total_sessions = db.Column(db.Integer, default=0)
    total_time_spent_minutes = db.Column(db.Integer, default=0)
    average_session_duration = db.Column(db.Float, default=0.0)
    last_session_at = db.Column(db.DateTime)
    
    # Dating activity
    profiles_viewed = db.Column(db.Integer, default=0)
    likes_sent = db.Column(db.Integer, default=0)
    likes_received = db.Column(db.Integer, default=0)
    super_likes_sent = db.Column(db.Integer, default=0)
    super_likes_received = db.Column(db.Integer, default=0)
    matches_count = db.Column(db.Integer, default=0)
    
    # Communication metrics
    conversations_started = db.Column(db.Integer, default=0)
    messages_sent = db.Column(db.Integer, default=0)
    messages_received = db.Column(db.Integer, default=0)
    average_response_time_minutes = db.Column(db.Float, default=0.0)
    
    # AI coaching usage
    coaching_sessions_count = db.Column(db.Integer, default=0)
    coaching_minutes_used = db.Column(db.Integer, default=0)
    crisis_sessions_count = db.Column(db.Integer, default=0)
    
    # Content consumption
    articles_read = db.Column(db.Integer, default=0)
    podcasts_listened = db.Column(db.Integer, default=0)
    meditations_completed = db.Column(db.Integer, default=0)
    books_read = db.Column(db.Integer, default=0)
    exercises_completed = db.Column(db.Integer, default=0)
    
    # Feature usage
    features_used = db.Column(db.Text)  # JSON string of features used
    premium_features_used = db.Column(db.Text)  # JSON string
    
    # Conversion metrics
    subscription_conversions = db.Column(db.Integer, default=0)
    trial_to_paid_conversion = db.Column(db.Boolean, default=False)
    churn_risk_score = db.Column(db.Float, default=0.0)  # 0-1
    
    # Satisfaction metrics
    app_rating = db.Column(db.Float)  # 1-5
    nps_score = db.Column(db.Integer)  # -100 to 100
    satisfaction_surveys_completed = db.Column(db.Integer, default=0)
    
    # Behavioral patterns
    most_active_hour = db.Column(db.Integer)  # 0-23
    most_active_day = db.Column(db.Integer)  # 0-6 (Monday=0)
    preferred_content_types = db.Column(db.Text)  # JSON string
    
    @property
    def features_used_list(self):
        """Get features used as list"""
        if self.features_used:
            try:
                return json.loads(self.features_used)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def premium_features_used_list(self):
        """Get premium features used as list"""
        if self.premium_features_used:
            try:
                return json.loads(self.premium_features_used)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def preferred_content_types_dict(self):
        """Get preferred content types as dictionary"""
        if self.preferred_content_types:
            try:
                return json.loads(self.preferred_content_types)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def match_rate(self):
        """Calculate match rate percentage"""
        if self.likes_sent > 0:
            return (self.matches_count / self.likes_sent) * 100
        return 0
    
    @property
    def response_rate(self):
        """Calculate message response rate"""
        if self.messages_received > 0:
            return (self.messages_sent / self.messages_received) * 100
        return 0
    
    def update_session_metrics(self, session_duration_minutes):
        """Update session-related metrics"""
        self.total_sessions += 1
        self.total_time_spent_minutes += session_duration_minutes
        self.average_session_duration = self.total_time_spent_minutes / self.total_sessions
        self.last_session_at = datetime.utcnow()
    
    def track_feature_usage(self, feature_name, is_premium=False):
        """Track usage of a specific feature"""
        features = self.features_used_list
        if feature_name not in features:
            features.append(feature_name)
            self.features_used = json.dumps(features)
        
        if is_premium:
            premium_features = self.premium_features_used_list
            if feature_name not in premium_features:
                premium_features.append(feature_name)
                self.premium_features_used = json.dumps(premium_features)
    
    def calculate_churn_risk(self):
        """Calculate churn risk score based on engagement patterns"""
        risk_score = 0.0
        
        # Days since last session
        if self.last_session_at:
            days_inactive = (datetime.utcnow() - self.last_session_at).days
            if days_inactive > 7:
                risk_score += 0.3
            elif days_inactive > 3:
                risk_score += 0.1
        else:
            risk_score += 0.5
        
        # Low engagement
        if self.total_sessions < 5:
            risk_score += 0.2
        
        if self.average_session_duration < 5:  # Less than 5 minutes
            risk_score += 0.2
        
        # Low dating activity
        if self.likes_sent < 10:
            risk_score += 0.1
        
        if self.matches_count == 0:
            risk_score += 0.2
        
        self.churn_risk_score = min(1.0, risk_score)
        return self.churn_risk_score

class Event(BaseModel):
    """Event tracking for detailed analytics"""
    __tablename__ = 'events'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), index=True)
    session_id = db.Column(db.String(36), index=True)
    
    # Event information
    event_type = db.Column(db.String(100), nullable=False, index=True)
    event_category = db.Column(db.String(50), index=True)
    event_action = db.Column(db.String(100))
    event_label = db.Column(db.String(200))
    
    # Event data
    properties = db.Column(db.Text)  # JSON string
    value = db.Column(db.Float)
    
    # Context
    page_url = db.Column(db.String(500))
    referrer = db.Column(db.String(500))
    user_agent = db.Column(db.String(500))
    ip_address = db.Column(db.String(45))
    
    # Device information
    device_type = db.Column(db.String(20))  # mobile, tablet, desktop
    operating_system = db.Column(db.String(50))
    browser = db.Column(db.String(50))
    screen_resolution = db.Column(db.String(20))
    
    # Location (if available)
    country = db.Column(db.String(2))
    region = db.Column(db.String(100))
    city = db.Column(db.String(100))
    
    # Timestamp
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    
    @property
    def properties_dict(self):
        """Get properties as dictionary"""
        if self.properties:
            try:
                return json.loads(self.properties)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @properties_dict.setter
    def properties_dict(self, value):
        """Set properties from dictionary"""
        self.properties = json.dumps(value) if value else None
    
    @classmethod
    def track_event(cls, event_type, user_id=None, session_id=None, **kwargs):
        """Track an event"""
        event = cls(
            event_type=event_type,
            user_id=user_id,
            session_id=session_id,
            **kwargs
        )
        event.save()
        return event
    
    @classmethod
    def get_user_events(cls, user_id, event_type=None, limit=100):
        """Get events for a user"""
        query = cls.query.filter_by(user_id=user_id)
        if event_type:
            query = query.filter_by(event_type=event_type)
        return query.order_by(cls.timestamp.desc()).limit(limit).all()
    
    @classmethod
    def get_events_by_type(cls, event_type, start_date=None, end_date=None, limit=1000):
        """Get events by type within date range"""
        query = cls.query.filter_by(event_type=event_type)
        
        if start_date:
            query = query.filter(cls.timestamp >= start_date)
        if end_date:
            query = query.filter(cls.timestamp <= end_date)
        
        return query.order_by(cls.timestamp.desc()).limit(limit).all()

class Funnel(BaseModel):
    """Conversion funnel tracking"""
    __tablename__ = 'funnels'
    
    # Funnel information
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    
    # Funnel steps (JSON string)
    steps = db.Column(db.Text, nullable=False)
    
    # Configuration
    is_active = db.Column(db.Boolean, default=True)
    conversion_window_hours = db.Column(db.Integer, default=24)
    
    @property
    def steps_list(self):
        """Get funnel steps as list"""
        if self.steps:
            try:
                return json.loads(self.steps)
            except json.JSONDecodeError:
                return []
        return []
    
    def calculate_conversion_rates(self, start_date=None, end_date=None):
        """Calculate conversion rates for each step"""
        steps = self.steps_list
        if not steps:
            return {}
        
        # Get events for each step
        step_counts = {}
        for i, step in enumerate(steps):
            events = Event.get_events_by_type(
                step['event_type'],
                start_date=start_date,
                end_date=end_date
            )
            step_counts[i] = len(events)
        
        # Calculate conversion rates
        conversion_rates = {}
        for i in range(1, len(steps)):
            if step_counts[i-1] > 0:
                conversion_rates[f"step_{i-1}_to_{i}"] = (step_counts[i] / step_counts[i-1]) * 100
            else:
                conversion_rates[f"step_{i-1}_to_{i}"] = 0
        
        return {
            'step_counts': step_counts,
            'conversion_rates': conversion_rates,
            'overall_conversion': (step_counts[len(steps)-1] / step_counts[0] * 100) if step_counts[0] > 0 else 0
        }

class Cohort(BaseModel):
    """Cohort analysis for user retention"""
    __tablename__ = 'cohorts'
    
    # Cohort information
    name = db.Column(db.String(100), nullable=False)
    cohort_type = db.Column(db.String(50), nullable=False)  # registration, first_purchase, etc.
    period_type = db.Column(db.String(20), default='monthly')  # daily, weekly, monthly
    
    # Date range
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    
    # Cohort data (JSON string)
    cohort_data = db.Column(db.Text)
    
    # Metrics
    total_users = db.Column(db.Integer, default=0)
    retention_rates = db.Column(db.Text)  # JSON string
    
    @property
    def cohort_data_dict(self):
        """Get cohort data as dictionary"""
        if self.cohort_data:
            try:
                return json.loads(self.cohort_data)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def retention_rates_dict(self):
        """Get retention rates as dictionary"""
        if self.retention_rates:
            try:
                return json.loads(self.retention_rates)
            except json.JSONDecodeError:
                return {}
        return {}
    
    def calculate_retention(self):
        """Calculate retention rates for the cohort"""
        # This would implement cohort retention calculation
        # For now, return placeholder data
        return {
            'period_0': 100.0,
            'period_1': 75.0,
            'period_2': 60.0,
            'period_3': 45.0,
            'period_4': 35.0,
            'period_5': 30.0
        }

class ABTest(BaseModel):
    """A/B testing framework"""
    __tablename__ = 'ab_tests'
    
    # Test information
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)
    hypothesis = db.Column(db.Text)
    
    # Test configuration
    status = db.Column(db.String(20), default='draft')  # draft, running, paused, completed
    test_type = db.Column(db.String(50), default='feature_flag')
    
    # Variants (JSON string)
    variants = db.Column(db.Text, nullable=False)
    traffic_allocation = db.Column(db.Text)  # JSON string
    
    # Dates
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    
    # Success metrics
    primary_metric = db.Column(db.String(100))
    secondary_metrics = db.Column(db.Text)  # JSON string
    
    # Results
    results = db.Column(db.Text)  # JSON string
    statistical_significance = db.Column(db.Float)
    winner_variant = db.Column(db.String(50))
    
    @property
    def variants_list(self):
        """Get variants as list"""
        if self.variants:
            try:
                return json.loads(self.variants)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def traffic_allocation_dict(self):
        """Get traffic allocation as dictionary"""
        if self.traffic_allocation:
            try:
                return json.loads(self.traffic_allocation)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def results_dict(self):
        """Get results as dictionary"""
        if self.results:
            try:
                return json.loads(self.results)
            except json.JSONDecodeError:
                return {}
        return {}
    
    def assign_user_to_variant(self, user_id):
        """Assign a user to a test variant"""
        # Simple hash-based assignment
        import hashlib
        hash_input = f"{self.name}_{user_id}".encode()
        hash_value = int(hashlib.md5(hash_input).hexdigest(), 16)
        
        variants = self.variants_list
        allocation = self.traffic_allocation_dict
        
        # Determine variant based on hash and allocation
        cumulative_percentage = 0
        hash_percentage = (hash_value % 100) + 1
        
        for variant in variants:
            variant_name = variant['name']
            variant_percentage = allocation.get(variant_name, 0)
            cumulative_percentage += variant_percentage
            
            if hash_percentage <= cumulative_percentage:
                return variant_name
        
        return 'control'  # Default to control
    
    def start_test(self):
        """Start the A/B test"""
        self.status = 'running'
        self.start_date = datetime.utcnow()
    
    def end_test(self):
        """End the A/B test"""
        self.status = 'completed'
        self.end_date = datetime.utcnow()

class ABTestAssignment(BaseModel):
    """Track A/B test assignments for users"""
    __tablename__ = 'ab_test_assignments'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    test_id = db.Column(db.String(36), db.ForeignKey('ab_tests.id'), nullable=False, index=True)
    
    # Assignment details
    variant = db.Column(db.String(50), nullable=False)
    assigned_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Conversion tracking
    converted = db.Column(db.Boolean, default=False)
    conversion_value = db.Column(db.Float)
    converted_at = db.Column(db.DateTime)
    
    # Unique constraint
    __table_args__ = (
        db.UniqueConstraint('user_id', 'test_id', name='unique_test_assignment'),
    )
    
    def mark_conversion(self, value=None):
        """Mark user as converted"""
        self.converted = True
        self.conversion_value = value
        self.converted_at = datetime.utcnow()
    
    @classmethod
    def get_user_assignment(cls, user_id, test_id):
        """Get user's assignment for a specific test"""
        return cls.query.filter_by(user_id=user_id, test_id=test_id).first()
    
    @classmethod
    def assign_user_to_test(cls, user_id, test_id, variant):
        """Assign user to a test variant"""
        assignment = cls(
            user_id=user_id,
            test_id=test_id,
            variant=variant
        )
        assignment.save()
        return assignment

