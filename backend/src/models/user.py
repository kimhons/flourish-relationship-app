"""
User models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, date
import json

class User(BaseModel):
    """Main user model with authentication and basic profile information"""
    __tablename__ = 'users'
    
    # Authentication fields
    email = db.Column(db.String(254), unique=True, nullable=False, index=True)
    username = db.Column(db.String(50), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    
    # Basic profile information
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    sexual_orientation = db.Column(db.String(20), nullable=False)
    
    # Location information
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    city = db.Column(db.String(100))
    state = db.Column(db.String(100))
    country = db.Column(db.String(100))
    zip_code = db.Column(db.String(20))
    
    # Profile content
    bio = db.Column(db.Text)
    interests = db.Column(db.Text)  # JSON string of interests
    profile_pictures = db.Column(db.Text)  # JSON string of picture URLs
    
    # Account status
    is_verified = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean, default=True)
    is_admin = db.Column(db.Boolean, default=False)
    is_banned = db.Column(db.Boolean, default=False)
    last_active = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Subscription information
    subscription_tier = db.Column(db.String(20), default='free')
    subscription_expires_at = db.Column(db.DateTime)
    
    # Privacy settings
    show_age = db.Column(db.Boolean, default=True)
    show_distance = db.Column(db.Boolean, default=True)
    show_last_active = db.Column(db.Boolean, default=True)
    
    # Verification
    email_verification_token = db.Column(db.String(255))
    email_verified_at = db.Column(db.DateTime)
    phone_number = db.Column(db.String(20))
    phone_verified_at = db.Column(db.DateTime)
    
    # Password reset
    password_reset_token = db.Column(db.String(255))
    password_reset_expires = db.Column(db.DateTime)
    
    # Relationships
    profile = db.relationship('UserProfile', backref='user', uselist=False, cascade='all, delete-orphan')
    preferences = db.relationship('UserPreferences', backref='user', uselist=False, cascade='all, delete-orphan')
    matches_sent = db.relationship('Match', foreign_keys='Match.user_id', backref='user', cascade='all, delete-orphan')
    matches_received = db.relationship('Match', foreign_keys='Match.matched_user_id', backref='matched_user', cascade='all, delete-orphan')
    coaching_sessions = db.relationship('CoachingSession', backref='user', cascade='all, delete-orphan')
    subscriptions = db.relationship('Subscription', backref='user', cascade='all, delete-orphan')
    analytics = db.relationship('UserAnalytics', backref='user', uselist=False, cascade='all, delete-orphan')
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        if 'password' in kwargs:
            self.set_password(kwargs['password'])
    
    def set_password(self, password):
        """Set password hash"""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Check password against hash"""
        return check_password_hash(self.password_hash, password)
    
    @property
    def age(self):
        """Calculate age from date of birth"""
        if self.date_of_birth:
            today = date.today()
            return today.year - self.date_of_birth.year - ((today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))
        return None
    
    @property
    def full_name(self):
        """Get full name"""
        return f"{self.first_name} {self.last_name}"
    
    @property
    def interests_list(self):
        """Get interests as list"""
        if self.interests:
            try:
                return json.loads(self.interests)
            except json.JSONDecodeError:
                return []
        return []
    
    @interests_list.setter
    def interests_list(self, value):
        """Set interests from list"""
        self.interests = json.dumps(value) if value else None
    
    @property
    def profile_pictures_list(self):
        """Get profile pictures as list"""
        if self.profile_pictures:
            try:
                return json.loads(self.profile_pictures)
            except json.JSONDecodeError:
                return []
        return []
    
    @profile_pictures_list.setter
    def profile_pictures_list(self, value):
        """Set profile pictures from list"""
        self.profile_pictures = json.dumps(value) if value else None
    
    @property
    def primary_profile_picture(self):
        """Get primary profile picture URL"""
        pictures = self.profile_pictures_list
        for picture in pictures:
            if picture.get('is_primary', False):
                return picture.get('url')
        return pictures[0].get('url') if pictures else None
    
    def is_online(self, threshold_minutes=15):
        """Check if user is considered online"""
        if not self.last_active:
            return False
        threshold = datetime.utcnow() - timedelta(minutes=threshold_minutes)
        return self.last_active > threshold
    
    def update_last_active(self):
        """Update last active timestamp"""
        self.last_active = datetime.utcnow()
        db.session.commit()
    
    def to_dict(self, include_sensitive=False, include_relationships=False):
        """Convert to dictionary with privacy controls"""
        data = super().to_dict(include_relationships=include_relationships)
        
        # Remove sensitive fields unless explicitly requested
        if not include_sensitive:
            sensitive_fields = [
                'password_hash', 'email_verification_token', 'password_reset_token',
                'password_reset_expires', 'latitude', 'longitude'
            ]
            for field in sensitive_fields:
                data.pop(field, None)
        
        # Add computed fields
        data['age'] = self.age
        data['full_name'] = self.full_name
        data['interests_list'] = self.interests_list
        data['profile_pictures_list'] = self.profile_pictures_list
        data['primary_profile_picture'] = self.primary_profile_picture
        data['is_online'] = self.is_online()
        
        return data
    
    def to_public_dict(self):
        """Convert to public dictionary for matching/discovery"""
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'age': self.age if self.show_age else None,
            'bio': self.bio,
            'interests_list': self.interests_list,
            'profile_pictures_list': self.profile_pictures_list,
            'primary_profile_picture': self.primary_profile_picture,
            'city': self.city,
            'state': self.state,
            'is_verified': self.is_verified,
            'is_online': self.is_online() if self.show_last_active else None,
            'last_active': self.last_active.isoformat() if self.show_last_active and self.last_active else None
        }

class UserProfile(BaseModel):
    """Extended user profile information"""
    __tablename__ = 'user_profiles'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, unique=True)
    
    # Physical attributes
    height = db.Column(db.Integer)  # in inches
    
    # Education and career
    education_level = db.Column(db.String(50))
    occupation = db.Column(db.String(100))
    company = db.Column(db.String(100))
    income_range = db.Column(db.String(20))
    
    # Beliefs and values
    religion = db.Column(db.String(50))
    political_views = db.Column(db.String(50))
    
    # Lifestyle
    fitness_level = db.Column(db.String(20))
    smoking_status = db.Column(db.String(20))
    drinking_status = db.Column(db.String(20))
    dietary_restrictions = db.Column(db.Text)  # JSON string
    pet_preferences = db.Column(db.String(20))
    
    # Family and relationships
    wants_children = db.Column(db.Boolean)
    has_children = db.Column(db.Boolean)
    number_of_children = db.Column(db.Integer)
    
    # Personality and psychology
    personality_type = db.Column(db.String(10))  # MBTI type
    attachment_style = db.Column(db.String(20))
    communication_style = db.Column(db.String(20))
    love_languages = db.Column(db.Text)  # JSON string
    
    # Big Five personality traits (0-100)
    openness = db.Column(db.Integer)
    conscientiousness = db.Column(db.Integer)
    extraversion = db.Column(db.Integer)
    agreeableness = db.Column(db.Integer)
    neuroticism = db.Column(db.Integer)
    
    # Emotional intelligence scores (0-100)
    self_awareness = db.Column(db.Integer)
    self_regulation = db.Column(db.Integer)
    motivation = db.Column(db.Integer)
    empathy = db.Column(db.Integer)
    social_skills = db.Column(db.Integer)
    
    # Additional information
    languages = db.Column(db.Text)  # JSON string
    hobbies = db.Column(db.Text)  # JSON string
    travel_preferences = db.Column(db.Text)  # JSON string
    values = db.Column(db.Text)  # JSON string
    deal_breakers = db.Column(db.Text)  # JSON string
    
    # Assessment completion
    personality_assessment_completed = db.Column(db.Boolean, default=False)
    personality_assessment_date = db.Column(db.DateTime)
    
    @property
    def dietary_restrictions_list(self):
        """Get dietary restrictions as list"""
        if self.dietary_restrictions:
            try:
                return json.loads(self.dietary_restrictions)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def love_languages_list(self):
        """Get love languages as list"""
        if self.love_languages:
            try:
                return json.loads(self.love_languages)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def languages_list(self):
        """Get languages as list"""
        if self.languages:
            try:
                return json.loads(self.languages)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def hobbies_list(self):
        """Get hobbies as list"""
        if self.hobbies:
            try:
                return json.loads(self.hobbies)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def values_list(self):
        """Get values as list"""
        if self.values:
            try:
                return json.loads(self.values)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def deal_breakers_list(self):
        """Get deal breakers as list"""
        if self.deal_breakers:
            try:
                return json.loads(self.deal_breakers)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def emotional_intelligence_overall(self):
        """Calculate overall emotional intelligence score"""
        scores = [self.self_awareness, self.self_regulation, self.motivation, self.empathy, self.social_skills]
        valid_scores = [score for score in scores if score is not None]
        return sum(valid_scores) / len(valid_scores) if valid_scores else None

class UserPreferences(BaseModel):
    """User matching preferences"""
    __tablename__ = 'user_preferences'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, unique=True)
    
    # Age preferences
    min_age = db.Column(db.Integer, default=18)
    max_age = db.Column(db.Integer, default=100)
    
    # Distance preferences
    max_distance = db.Column(db.Integer, default=25)  # in miles
    
    # Gender preferences
    gender_preferences = db.Column(db.Text)  # JSON string of preferred genders
    
    # Physical preferences
    min_height = db.Column(db.Integer)  # in inches
    max_height = db.Column(db.Integer)  # in inches
    
    # Education preferences
    education_preferences = db.Column(db.Text)  # JSON string
    income_preferences = db.Column(db.Text)  # JSON string
    
    # Lifestyle preferences
    religion_preferences = db.Column(db.Text)  # JSON string
    political_preferences = db.Column(db.Text)  # JSON string
    smoking_preference = db.Column(db.String(20))
    drinking_preference = db.Column(db.String(20))
    
    # Family preferences
    children_preference = db.Column(db.String(20))  # wants, has, doesn't_want, etc.
    
    # Deal breakers
    deal_breakers = db.Column(db.Text)  # JSON string
    
    # Importance weights (0-10)
    age_importance = db.Column(db.Integer, default=5)
    distance_importance = db.Column(db.Integer, default=5)
    education_importance = db.Column(db.Integer, default=5)
    income_importance = db.Column(db.Integer, default=3)
    religion_importance = db.Column(db.Integer, default=5)
    politics_importance = db.Column(db.Integer, default=3)
    lifestyle_importance = db.Column(db.Integer, default=5)
    personality_importance = db.Column(db.Integer, default=8)
    values_importance = db.Column(db.Integer, default=9)
    physical_importance = db.Column(db.Integer, default=6)
    
    @property
    def gender_preferences_list(self):
        """Get gender preferences as list"""
        if self.gender_preferences:
            try:
                return json.loads(self.gender_preferences)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def education_preferences_list(self):
        """Get education preferences as list"""
        if self.education_preferences:
            try:
                return json.loads(self.education_preferences)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def deal_breakers_list(self):
        """Get deal breakers as list"""
        if self.deal_breakers:
            try:
                return json.loads(self.deal_breakers)
            except json.JSONDecodeError:
                return []
        return []

