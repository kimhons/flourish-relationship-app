"""
Content models for Flourish Relationship Platform Resources Hub
"""

from .database import db, BaseModel
from datetime import datetime
import json

class ContentBase(BaseModel):
    """Base class for all content types"""
    __abstract__ = True
    
    # Basic information
    title = db.Column(db.String(300), nullable=False)
    description = db.Column(db.Text)
    content = db.Column(db.Text)
    
    # Categorization
    category = db.Column(db.String(100), nullable=False, index=True)
    subcategory = db.Column(db.String(100))
    tags = db.Column(db.Text)  # JSON string
    
    # Author information
    author_name = db.Column(db.String(200))
    author_bio = db.Column(db.Text)
    author_credentials = db.Column(db.String(500))
    
    # Publishing
    is_published = db.Column(db.Boolean, default=False, index=True)
    published_at = db.Column(db.DateTime, index=True)
    
    # Access control
    is_premium = db.Column(db.Boolean, default=False)
    required_tier = db.Column(db.String(20), default='free')  # free, premium, elite
    
    # Engagement metrics
    view_count = db.Column(db.Integer, default=0)
    like_count = db.Column(db.Integer, default=0)
    share_count = db.Column(db.Integer, default=0)
    rating_average = db.Column(db.Float, default=0.0)
    rating_count = db.Column(db.Integer, default=0)
    
    # SEO and metadata
    slug = db.Column(db.String(300), unique=True)
    meta_description = db.Column(db.String(160))
    featured_image_url = db.Column(db.String(500))
    
    @property
    def tags_list(self):
        """Get tags as list"""
        if self.tags:
            try:
                return json.loads(self.tags)
            except json.JSONDecodeError:
                return []
        return []
    
    @tags_list.setter
    def tags_list(self, value):
        """Set tags from list"""
        self.tags = json.dumps(value) if value else None
    
    def publish(self):
        """Publish the content"""
        self.is_published = True
        self.published_at = datetime.utcnow()
    
    def unpublish(self):
        """Unpublish the content"""
        self.is_published = False
        self.published_at = None
    
    def increment_view_count(self):
        """Increment view count"""
        self.view_count = (self.view_count or 0) + 1
    
    def add_rating(self, rating):
        """Add a rating (1-5)"""
        current_total = (self.rating_average or 0) * (self.rating_count or 0)
        new_count = (self.rating_count or 0) + 1
        new_average = (current_total + rating) / new_count
        
        self.rating_average = new_average
        self.rating_count = new_count

class Article(ContentBase):
    """Article model for blog posts and educational content"""
    __tablename__ = 'articles'
    
    # Article-specific fields
    reading_time_minutes = db.Column(db.Integer)
    word_count = db.Column(db.Integer)
    
    # Content structure
    excerpt = db.Column(db.Text)
    table_of_contents = db.Column(db.Text)  # JSON string
    
    # Article type
    article_type = db.Column(db.String(50), default='educational')  # educational, research, opinion, guide
    difficulty_level = db.Column(db.String(20), default='beginner')  # beginner, intermediate, advanced
    
    # Research and citations
    sources = db.Column(db.Text)  # JSON string of sources
    research_backed = db.Column(db.Boolean, default=False)
    
    @property
    def table_of_contents_list(self):
        """Get table of contents as list"""
        if self.table_of_contents:
            try:
                return json.loads(self.table_of_contents)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def sources_list(self):
        """Get sources as list"""
        if self.sources:
            try:
                return json.loads(self.sources)
            except json.JSONDecodeError:
                return []
        return []

class Podcast(ContentBase):
    """Podcast model for audio content"""
    __tablename__ = 'podcasts'
    
    # Audio information
    audio_url = db.Column(db.String(500), nullable=False)
    duration_seconds = db.Column(db.Integer)
    file_size_mb = db.Column(db.Float)
    
    # Podcast-specific fields
    episode_number = db.Column(db.Integer)
    season_number = db.Column(db.Integer)
    series_name = db.Column(db.String(200))
    
    # Guests and hosts
    host_names = db.Column(db.Text)  # JSON string
    guest_names = db.Column(db.Text)  # JSON string
    guest_bios = db.Column(db.Text)  # JSON string
    
    # Transcript and chapters
    transcript = db.Column(db.Text)
    chapters = db.Column(db.Text)  # JSON string with timestamps
    
    # Audio quality
    audio_quality = db.Column(db.String(20), default='standard')  # standard, high, premium
    
    @property
    def duration_formatted(self):
        """Get duration in HH:MM:SS format"""
        if self.duration_seconds:
            hours = self.duration_seconds // 3600
            minutes = (self.duration_seconds % 3600) // 60
            seconds = self.duration_seconds % 60
            
            if hours > 0:
                return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
            else:
                return f"{minutes:02d}:{seconds:02d}"
        return "00:00"
    
    @property
    def host_names_list(self):
        """Get host names as list"""
        if self.host_names:
            try:
                return json.loads(self.host_names)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def guest_names_list(self):
        """Get guest names as list"""
        if self.guest_names:
            try:
                return json.loads(self.guest_names)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def chapters_list(self):
        """Get chapters as list"""
        if self.chapters:
            try:
                return json.loads(self.chapters)
            except json.JSONDecodeError:
                return []
        return []

class Meditation(ContentBase):
    """Meditation model for guided meditations"""
    __tablename__ = 'meditations'
    
    # Audio information
    audio_url = db.Column(db.String(500), nullable=False)
    duration_seconds = db.Column(db.Integer, nullable=False)
    
    # Meditation-specific fields
    meditation_type = db.Column(db.String(50), nullable=False)  # guided, music, nature_sounds
    tradition = db.Column(db.String(50))  # christian, buddhist, secular, mindfulness
    
    # Practice information
    difficulty_level = db.Column(db.String(20), default='beginner')
    focus_area = db.Column(db.String(100))  # stress, anxiety, relationships, self_love
    
    # Instructor information
    instructor_name = db.Column(db.String(200))
    instructor_bio = db.Column(db.Text)
    instructor_voice_type = db.Column(db.String(50))  # male, female, neutral
    
    # Background audio
    background_music = db.Column(db.Boolean, default=True)
    nature_sounds = db.Column(db.Boolean, default=False)
    background_type = db.Column(db.String(50))  # silence, music, nature, binaural
    
    # Practice tracking
    completion_count = db.Column(db.Integer, default=0)
    average_completion_rate = db.Column(db.Float, default=0.0)
    
    @property
    def duration_formatted(self):
        """Get duration in MM:SS format"""
        if self.duration_seconds:
            minutes = self.duration_seconds // 60
            seconds = self.duration_seconds % 60
            return f"{minutes:02d}:{seconds:02d}"
        return "00:00"
    
    def track_completion(self, completion_percentage):
        """Track meditation completion"""
        self.completion_count += 1
        
        # Update average completion rate
        current_total = self.average_completion_rate * (self.completion_count - 1)
        self.average_completion_rate = (current_total + completion_percentage) / self.completion_count

class Book(ContentBase):
    """Book model for relationship books and guides"""
    __tablename__ = 'books'
    
    # Book information
    isbn = db.Column(db.String(20))
    publisher = db.Column(db.String(200))
    publication_date = db.Column(db.Date)
    page_count = db.Column(db.Integer)
    
    # Book format
    format_type = db.Column(db.String(20), default='digital')  # digital, audio, physical
    file_url = db.Column(db.String(500))  # PDF, EPUB, etc.
    audio_url = db.Column(db.String(500))  # Audiobook URL
    
    # Book structure
    chapter_count = db.Column(db.Integer)
    chapters = db.Column(db.Text)  # JSON string of chapters
    
    # Reading information
    estimated_reading_time_hours = db.Column(db.Float)
    reading_level = db.Column(db.String(20), default='general')
    
    # Book series
    series_name = db.Column(db.String(200))
    book_number_in_series = db.Column(db.Integer)
    
    # Reviews and recommendations
    goodreads_rating = db.Column(db.Float)
    amazon_rating = db.Column(db.Float)
    expert_recommended = db.Column(db.Boolean, default=False)
    
    @property
    def chapters_list(self):
        """Get chapters as list"""
        if self.chapters:
            try:
                return json.loads(self.chapters)
            except json.JSONDecodeError:
                return []
        return []

class Exercise(ContentBase):
    """Relationship exercise model"""
    __tablename__ = 'exercises'
    
    # Exercise information
    exercise_type = db.Column(db.String(50), nullable=False)  # communication, intimacy, trust, conflict
    duration_minutes = db.Column(db.Integer)
    participant_count = db.Column(db.String(20))  # individual, couple, group
    
    # Instructions
    instructions = db.Column(db.Text, nullable=False)
    materials_needed = db.Column(db.Text)  # JSON string
    
    # Difficulty and requirements
    difficulty_level = db.Column(db.String(20), default='beginner')
    relationship_stage = db.Column(db.String(50))  # dating, committed, married, any
    
    # Outcomes and goals
    learning_objectives = db.Column(db.Text)  # JSON string
    expected_outcomes = db.Column(db.Text)  # JSON string
    
    # Completion tracking
    completion_count = db.Column(db.Integer, default=0)
    success_rate = db.Column(db.Float, default=0.0)
    
    @property
    def materials_needed_list(self):
        """Get materials needed as list"""
        if self.materials_needed:
            try:
                return json.loads(self.materials_needed)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def learning_objectives_list(self):
        """Get learning objectives as list"""
        if self.learning_objectives:
            try:
                return json.loads(self.learning_objectives)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def expected_outcomes_list(self):
        """Get expected outcomes as list"""
        if self.expected_outcomes:
            try:
                return json.loads(self.expected_outcomes)
            except json.JSONDecodeError:
                return []
        return []

class ContentInteraction(BaseModel):
    """Track user interactions with content"""
    __tablename__ = 'content_interactions'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Content reference (polymorphic)
    content_type = db.Column(db.String(50), nullable=False)  # article, podcast, meditation, book, exercise
    content_id = db.Column(db.String(36), nullable=False, index=True)
    
    # Interaction type
    interaction_type = db.Column(db.String(50), nullable=False)  # view, like, share, bookmark, complete, rate
    
    # Interaction data
    rating = db.Column(db.Integer)  # 1-5 for ratings
    progress_percentage = db.Column(db.Float)  # 0-100 for completion tracking
    time_spent_seconds = db.Column(db.Integer)
    
    # Context
    device_type = db.Column(db.String(20))  # mobile, web, tablet
    referrer = db.Column(db.String(200))
    
    @classmethod
    def track_interaction(cls, user_id, content_type, content_id, interaction_type, **kwargs):
        """Track a content interaction"""
        interaction = cls(
            user_id=user_id,
            content_type=content_type,
            content_id=content_id,
            interaction_type=interaction_type,
            **kwargs
        )
        interaction.save()
        return interaction
    
    @classmethod
    def get_user_interactions(cls, user_id, content_type=None, limit=50):
        """Get user's content interactions"""
        query = cls.query.filter_by(user_id=user_id)
        if content_type:
            query = query.filter_by(content_type=content_type)
        return query.order_by(cls.created_at.desc()).limit(limit).all()
    
    @classmethod
    def get_content_interactions(cls, content_type, content_id):
        """Get all interactions for a piece of content"""
        return cls.query.filter_by(content_type=content_type, content_id=content_id).all()

class ContentRecommendation(BaseModel):
    """AI-powered content recommendations"""
    __tablename__ = 'content_recommendations'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Recommended content
    content_type = db.Column(db.String(50), nullable=False)
    content_id = db.Column(db.String(36), nullable=False)
    
    # Recommendation metadata
    recommendation_reason = db.Column(db.String(200))
    confidence_score = db.Column(db.Float)  # 0-1
    priority_score = db.Column(db.Float)  # 0-1
    
    # Recommendation source
    source = db.Column(db.String(50))  # ai_algorithm, expert_curated, user_behavior, trending
    algorithm_version = db.Column(db.String(20))
    
    # User interaction
    is_viewed = db.Column(db.Boolean, default=False)
    is_dismissed = db.Column(db.Boolean, default=False)
    user_feedback = db.Column(db.String(20))  # helpful, not_helpful, irrelevant
    
    # Expiration
    expires_at = db.Column(db.DateTime)
    
    def mark_as_viewed(self):
        """Mark recommendation as viewed"""
        self.is_viewed = True
    
    def dismiss(self):
        """Dismiss the recommendation"""
        self.is_dismissed = True
    
    def provide_feedback(self, feedback):
        """Provide feedback on the recommendation"""
        self.user_feedback = feedback
    
    @classmethod
    def get_user_recommendations(cls, user_id, limit=10):
        """Get active recommendations for a user"""
        return cls.query.filter_by(
            user_id=user_id,
            is_dismissed=False
        ).filter(
            (cls.expires_at.is_(None)) | (cls.expires_at > datetime.utcnow())
        ).order_by(cls.priority_score.desc()).limit(limit).all()

