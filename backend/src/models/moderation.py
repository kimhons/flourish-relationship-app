"""
Moderation models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime, timedelta
import json

class ModerationCase(BaseModel):
    """Moderation case for handling reports and violations"""
    __tablename__ = 'moderation_cases'
    
    # Case information
    case_type = db.Column(db.String(50), nullable=False)  # user_report, auto_detection, manual_review
    category = db.Column(db.String(50), nullable=False)  # harassment, inappropriate_content, spam, etc.
    severity = db.Column(db.String(20), default='medium')  # low, medium, high, critical
    
    # Reported content/user
    reported_user_id = db.Column(db.String(36), db.ForeignKey('users.id'), index=True)
    reported_content_type = db.Column(db.String(50))  # message, profile, photo, etc.
    reported_content_id = db.Column(db.String(36))
    
    # Reporter information
    reporter_user_id = db.Column(db.String(36), db.ForeignKey('users.id'), index=True)
    
    # Case details
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    reason = db.Column(db.String(100), nullable=False)
    
    # Status and assignment
    status = db.Column(db.String(20), default='pending', index=True)  # pending, investigating, resolved, dismissed
    assigned_moderator_id = db.Column(db.String(36), db.ForeignKey('users.id'))
    priority = db.Column(db.Integer, default=3)  # 1-5, 5 being highest priority
    
    # Resolution
    resolution = db.Column(db.String(50))  # warning, suspension, ban, content_removal, dismissed
    resolution_reason = db.Column(db.Text)
    resolved_at = db.Column(db.DateTime)
    resolved_by_id = db.Column(db.String(36), db.ForeignKey('users.id'))
    
    # AI analysis
    ai_confidence_score = db.Column(db.Float)  # 0-1
    ai_recommendation = db.Column(db.String(50))
    ai_analysis = db.Column(db.Text)  # JSON string
    
    # Follow-up
    requires_follow_up = db.Column(db.Boolean, default=False)
    follow_up_date = db.Column(db.DateTime)
    
    # Relationships
    evidence = db.relationship('Evidence', backref='moderation_case', cascade='all, delete-orphan')
    actions = db.relationship('ModerationAction', backref='moderation_case', cascade='all, delete-orphan')
    
    # Foreign key relationships
    reported_user = db.relationship('User', foreign_keys=[reported_user_id], backref='reported_cases')
    reporter_user = db.relationship('User', foreign_keys=[reporter_user_id], backref='reported_cases_made')
    assigned_moderator = db.relationship('User', foreign_keys=[assigned_moderator_id], backref='assigned_cases')
    resolved_by = db.relationship('User', foreign_keys=[resolved_by_id], backref='resolved_cases')
    
    @property
    def ai_analysis_dict(self):
        """Get AI analysis as dictionary"""
        if self.ai_analysis:
            try:
                return json.loads(self.ai_analysis)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @ai_analysis_dict.setter
    def ai_analysis_dict(self, value):
        """Set AI analysis from dictionary"""
        self.ai_analysis = json.dumps(value) if value else None
    
    @property
    def is_urgent(self):
        """Check if case is urgent based on severity and category"""
        urgent_categories = ['harassment', 'threats', 'self_harm', 'illegal_content']
        return self.severity in ['high', 'critical'] or self.category in urgent_categories
    
    @property
    def days_open(self):
        """Get number of days case has been open"""
        return (datetime.utcnow() - self.created_at).days
    
    def assign_to_moderator(self, moderator_id):
        """Assign case to a moderator"""
        self.assigned_moderator_id = moderator_id
        self.status = 'investigating'
    
    def resolve_case(self, resolution, reason, resolved_by_id):
        """Resolve the moderation case"""
        self.resolution = resolution
        self.resolution_reason = reason
        self.resolved_by_id = resolved_by_id
        self.resolved_at = datetime.utcnow()
        self.status = 'resolved'
    
    def dismiss_case(self, reason, dismissed_by_id):
        """Dismiss the moderation case"""
        self.resolution = 'dismissed'
        self.resolution_reason = reason
        self.resolved_by_id = dismissed_by_id
        self.resolved_at = datetime.utcnow()
        self.status = 'dismissed'
    
    def escalate_priority(self):
        """Escalate case priority"""
        self.priority = min(5, self.priority + 1)
        if self.priority >= 4:
            self.severity = 'high'
    
    @classmethod
    def create_report(cls, reporter_id, reported_user_id, category, reason, description, **kwargs):
        """Create a new moderation case from a user report"""
        case = cls(
            case_type='user_report',
            category=category,
            reason=reason,
            description=description,
            reporter_user_id=reporter_id,
            reported_user_id=reported_user_id,
            title=f"User report: {category}",
            **kwargs
        )
        case.save()
        return case
    
    @classmethod
    def get_pending_cases(cls, limit=50):
        """Get pending moderation cases"""
        return cls.query.filter_by(status='pending').order_by(
            cls.priority.desc(), cls.created_at.asc()
        ).limit(limit).all()
    
    @classmethod
    def get_urgent_cases(cls):
        """Get urgent cases requiring immediate attention"""
        return cls.query.filter(
            (cls.severity.in_(['high', 'critical'])) |
            (cls.category.in_(['harassment', 'threats', 'self_harm', 'illegal_content']))
        ).filter(cls.status.in_(['pending', 'investigating'])).order_by(
            cls.priority.desc(), cls.created_at.asc()
        ).all()

class Evidence(BaseModel):
    """Evidence attached to moderation cases"""
    __tablename__ = 'evidence'
    
    moderation_case_id = db.Column(db.String(36), db.ForeignKey('moderation_cases.id'), nullable=False, index=True)
    
    # Evidence information
    evidence_type = db.Column(db.String(50), nullable=False)  # screenshot, message, profile, video, audio
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    
    # File information
    file_url = db.Column(db.String(500))
    file_type = db.Column(db.String(50))
    file_size_bytes = db.Column(db.Integer)
    
    # Content information
    content_text = db.Column(db.Text)
    content_metadata = db.Column(db.Text)  # JSON string
    
    # Source information
    source_type = db.Column(db.String(50))  # user_submission, auto_capture, manual_collection
    collected_by_id = db.Column(db.String(36), db.ForeignKey('users.id'))
    
    # Verification
    is_verified = db.Column(db.Boolean, default=False)
    verified_by_id = db.Column(db.String(36), db.ForeignKey('users.id'))
    verified_at = db.Column(db.DateTime)
    
    @property
    def content_metadata_dict(self):
        """Get content metadata as dictionary"""
        if self.content_metadata:
            try:
                return json.loads(self.content_metadata)
            except json.JSONDecodeError:
                return {}
        return {}
    
    def verify_evidence(self, verified_by_id):
        """Mark evidence as verified"""
        self.is_verified = True
        self.verified_by_id = verified_by_id
        self.verified_at = datetime.utcnow()

class ModerationAction(BaseModel):
    """Actions taken as a result of moderation"""
    __tablename__ = 'moderation_actions'
    
    moderation_case_id = db.Column(db.String(36), db.ForeignKey('moderation_cases.id'), nullable=False, index=True)
    target_user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Action information
    action_type = db.Column(db.String(50), nullable=False)  # warning, suspension, ban, content_removal, etc.
    severity = db.Column(db.String(20), default='medium')
    
    # Action details
    reason = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)
    
    # Duration (for temporary actions)
    duration_hours = db.Column(db.Integer)
    expires_at = db.Column(db.DateTime)
    
    # Status
    status = db.Column(db.String(20), default='active')  # active, expired, revoked
    
    # Execution
    executed_by_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    executed_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Appeal information
    can_be_appealed = db.Column(db.Boolean, default=True)
    appeal_deadline = db.Column(db.DateTime)
    
    # Relationships
    target_user = db.relationship('User', foreign_keys=[target_user_id], backref='moderation_actions_received')
    executed_by = db.relationship('User', foreign_keys=[executed_by_id], backref='moderation_actions_executed')
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        # Set expiration date for temporary actions
        if self.duration_hours:
            self.expires_at = datetime.utcnow() + timedelta(hours=self.duration_hours)
        
        # Set appeal deadline (7 days from execution)
        if self.can_be_appealed:
            self.appeal_deadline = datetime.utcnow() + timedelta(days=7)
    
    @property
    def is_active(self):
        """Check if action is currently active"""
        if self.status != 'active':
            return False
        
        if self.expires_at and datetime.utcnow() > self.expires_at:
            return False
        
        return True
    
    @property
    def is_expired(self):
        """Check if action has expired"""
        return self.expires_at and datetime.utcnow() > self.expires_at
    
    @property
    def can_appeal(self):
        """Check if action can still be appealed"""
        return (self.can_be_appealed and 
                self.appeal_deadline and 
                datetime.utcnow() <= self.appeal_deadline and
                self.status == 'active')
    
    def expire_action(self):
        """Mark action as expired"""
        self.status = 'expired'
    
    def revoke_action(self, revoked_by_id, reason):
        """Revoke the moderation action"""
        self.status = 'revoked'
        
        # Create a record of the revocation
        revocation = ModerationAction(
            moderation_case_id=self.moderation_case_id,
            target_user_id=self.target_user_id,
            action_type='revocation',
            reason=f"Revoked: {reason}",
            executed_by_id=revoked_by_id
        )
        revocation.save()
    
    @classmethod
    def create_warning(cls, case_id, user_id, reason, executed_by_id):
        """Create a warning action"""
        return cls.create(
            moderation_case_id=case_id,
            target_user_id=user_id,
            action_type='warning',
            reason=reason,
            executed_by_id=executed_by_id
        )
    
    @classmethod
    def create_suspension(cls, case_id, user_id, reason, duration_hours, executed_by_id):
        """Create a suspension action"""
        return cls.create(
            moderation_case_id=case_id,
            target_user_id=user_id,
            action_type='suspension',
            reason=reason,
            duration_hours=duration_hours,
            executed_by_id=executed_by_id
        )
    
    @classmethod
    def create_ban(cls, case_id, user_id, reason, executed_by_id, permanent=True):
        """Create a ban action"""
        return cls.create(
            moderation_case_id=case_id,
            target_user_id=user_id,
            action_type='ban',
            reason=reason,
            executed_by_id=executed_by_id,
            duration_hours=None if permanent else 24*30  # 30 days if not permanent
        )
    
    @classmethod
    def get_active_actions_for_user(cls, user_id):
        """Get active moderation actions for a user"""
        return cls.query.filter_by(
            target_user_id=user_id,
            status='active'
        ).filter(
            (cls.expires_at.is_(None)) | (cls.expires_at > datetime.utcnow())
        ).all()

class Appeal(BaseModel):
    """Appeals for moderation actions"""
    __tablename__ = 'appeals'
    
    moderation_action_id = db.Column(db.String(36), db.ForeignKey('moderation_actions.id'), nullable=False, index=True)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Appeal information
    reason = db.Column(db.Text, nullable=False)
    additional_evidence = db.Column(db.Text)
    
    # Status
    status = db.Column(db.String(20), default='pending')  # pending, approved, denied
    
    # Review
    reviewed_by_id = db.Column(db.String(36), db.ForeignKey('users.id'))
    reviewed_at = db.Column(db.DateTime)
    review_notes = db.Column(db.Text)
    
    # Relationships
    moderation_action = db.relationship('ModerationAction', backref='appeals')
    user = db.relationship('User', foreign_keys=[user_id], backref='appeals_made')
    reviewed_by = db.relationship('User', foreign_keys=[reviewed_by_id], backref='appeals_reviewed')
    
    def approve_appeal(self, reviewed_by_id, notes=None):
        """Approve the appeal"""
        self.status = 'approved'
        self.reviewed_by_id = reviewed_by_id
        self.reviewed_at = datetime.utcnow()
        self.review_notes = notes
        
        # Revoke the original action
        self.moderation_action.revoke_action(reviewed_by_id, "Appeal approved")
    
    def deny_appeal(self, reviewed_by_id, notes):
        """Deny the appeal"""
        self.status = 'denied'
        self.reviewed_by_id = reviewed_by_id
        self.reviewed_at = datetime.utcnow()
        self.review_notes = notes
    
    @classmethod
    def create_appeal(cls, action_id, user_id, reason, additional_evidence=None):
        """Create a new appeal"""
        appeal = cls(
            moderation_action_id=action_id,
            user_id=user_id,
            reason=reason,
            additional_evidence=additional_evidence
        )
        appeal.save()
        return appeal

class AutoModerationRule(BaseModel):
    """Automated moderation rules"""
    __tablename__ = 'auto_moderation_rules'
    
    # Rule information
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text)
    category = db.Column(db.String(50), nullable=False)
    
    # Rule configuration
    is_active = db.Column(db.Boolean, default=True)
    severity = db.Column(db.String(20), default='medium')
    
    # Trigger conditions (JSON string)
    conditions = db.Column(db.Text, nullable=False)
    
    # Actions to take (JSON string)
    actions = db.Column(db.Text, nullable=False)
    
    # Thresholds
    confidence_threshold = db.Column(db.Float, default=0.8)  # 0-1
    
    # Statistics
    triggers_count = db.Column(db.Integer, default=0)
    false_positives = db.Column(db.Integer, default=0)
    true_positives = db.Column(db.Integer, default=0)
    
    @property
    def conditions_dict(self):
        """Get conditions as dictionary"""
        if self.conditions:
            try:
                return json.loads(self.conditions)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def actions_list(self):
        """Get actions as list"""
        if self.actions:
            try:
                return json.loads(self.actions)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def accuracy_rate(self):
        """Calculate accuracy rate of the rule"""
        total_decisions = self.true_positives + self.false_positives
        if total_decisions > 0:
            return self.true_positives / total_decisions
        return 0
    
    def trigger_rule(self, content, confidence_score):
        """Trigger the auto-moderation rule"""
        if confidence_score >= self.confidence_threshold:
            self.triggers_count += 1
            return True
        return False
    
    def mark_as_true_positive(self):
        """Mark a trigger as a true positive"""
        self.true_positives += 1
    
    def mark_as_false_positive(self):
        """Mark a trigger as a false positive"""
        self.false_positives += 1

class ContentFilter(BaseModel):
    """Content filtering and detection"""
    __tablename__ = 'content_filters'
    
    # Filter information
    name = db.Column(db.String(100), nullable=False)
    filter_type = db.Column(db.String(50), nullable=False)  # keyword, regex, ml_model, image_analysis
    category = db.Column(db.String(50), nullable=False)
    
    # Filter configuration
    is_active = db.Column(db.Boolean, default=True)
    severity = db.Column(db.String(20), default='medium')
    
    # Filter rules (JSON string)
    rules = db.Column(db.Text, nullable=False)
    
    # Whitelist/exceptions (JSON string)
    exceptions = db.Column(db.Text)
    
    # Performance metrics
    detection_count = db.Column(db.Integer, default=0)
    false_positive_rate = db.Column(db.Float, default=0.0)
    
    @property
    def rules_dict(self):
        """Get rules as dictionary"""
        if self.rules:
            try:
                return json.loads(self.rules)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @property
    def exceptions_list(self):
        """Get exceptions as list"""
        if self.exceptions:
            try:
                return json.loads(self.exceptions)
            except json.JSONDecodeError:
                return []
        return []
    
    def check_content(self, content):
        """Check content against filter rules"""
        # This would implement the actual filtering logic
        # For now, return a placeholder
        return {
            'detected': False,
            'confidence': 0.0,
            'matched_rules': []
        }
    
    def record_detection(self):
        """Record a detection"""
        self.detection_count += 1

