"""
Subscription and payment models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime, timedelta
import json

class Subscription(BaseModel):
    """User subscription model"""
    __tablename__ = 'subscriptions'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Subscription details
    tier = db.Column(db.String(20), nullable=False, default='free')  # free, premium, elite
    status = db.Column(db.String(20), nullable=False, default='active', index=True)  # active, cancelled, expired, suspended
    
    # Billing information
    billing_cycle = db.Column(db.String(20))  # monthly, yearly
    price_amount = db.Column(db.Float)
    currency = db.Column(db.String(3), default='USD')
    
    # Dates
    started_at = db.Column(db.DateTime, default=datetime.utcnow)
    current_period_start = db.Column(db.DateTime)
    current_period_end = db.Column(db.DateTime)
    cancelled_at = db.Column(db.DateTime)
    expires_at = db.Column(db.DateTime)
    
    # Trial information
    is_trial = db.Column(db.Boolean, default=False)
    trial_start = db.Column(db.DateTime)
    trial_end = db.Column(db.DateTime)
    
    # Payment provider information
    stripe_subscription_id = db.Column(db.String(100))
    stripe_customer_id = db.Column(db.String(100))
    
    # Features and limits
    features_enabled = db.Column(db.Text)  # JSON string of enabled features
    usage_limits = db.Column(db.Text)  # JSON string of usage limits
    
    # Cancellation information
    cancel_at_period_end = db.Column(db.Boolean, default=False)
    cancellation_reason = db.Column(db.String(200))
    
    # Relationships
    payment_methods = db.relationship('PaymentMethod', backref='subscription', cascade='all, delete-orphan')
    transactions = db.relationship('Transaction', backref='subscription', cascade='all, delete-orphan')
    
    @property
    def features_enabled_list(self):
        """Get enabled features as list"""
        if self.features_enabled:
            try:
                return json.loads(self.features_enabled)
            except json.JSONDecodeError:
                return []
        return []
    
    @features_enabled_list.setter
    def features_enabled_list(self, value):
        """Set enabled features from list"""
        self.features_enabled = json.dumps(value) if value else None
    
    @property
    def usage_limits_dict(self):
        """Get usage limits as dictionary"""
        if self.usage_limits:
            try:
                return json.loads(self.usage_limits)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @usage_limits_dict.setter
    def usage_limits_dict(self, value):
        """Set usage limits from dictionary"""
        self.usage_limits = json.dumps(value) if value else None
    
    @property
    def is_active(self):
        """Check if subscription is currently active"""
        return (self.status == 'active' and 
                (not self.expires_at or self.expires_at > datetime.utcnow()))
    
    @property
    def is_expired(self):
        """Check if subscription has expired"""
        return (self.expires_at and datetime.utcnow() > self.expires_at) or self.status == 'expired'
    
    @property
    def is_in_trial(self):
        """Check if subscription is in trial period"""
        return (self.is_trial and self.trial_end and 
                datetime.utcnow() <= self.trial_end)
    
    @property
    def days_until_renewal(self):
        """Get days until next renewal"""
        if self.current_period_end:
            delta = self.current_period_end - datetime.utcnow()
            return max(0, delta.days)
        return 0
    
    def cancel(self, reason=None, immediate=False):
        """Cancel the subscription"""
        self.cancelled_at = datetime.utcnow()
        self.cancellation_reason = reason
        
        if immediate:
            self.status = 'cancelled'
            self.expires_at = datetime.utcnow()
        else:
            self.cancel_at_period_end = True
    
    def reactivate(self):
        """Reactivate a cancelled subscription"""
        self.status = 'active'
        self.cancelled_at = None
        self.cancel_at_period_end = False
        self.cancellation_reason = None
    
    def upgrade_tier(self, new_tier, new_price):
        """Upgrade subscription tier"""
        self.tier = new_tier
        self.price_amount = new_price
    
    def renew(self, new_period_end):
        """Renew subscription for next period"""
        self.current_period_start = self.current_period_end or datetime.utcnow()
        self.current_period_end = new_period_end
        
        if self.cancel_at_period_end:
            self.status = 'cancelled'
            self.expires_at = new_period_end
    
    def has_feature(self, feature_name):
        """Check if subscription includes a specific feature"""
        features = self.features_enabled_list
        return feature_name in features
    
    def get_usage_limit(self, limit_name):
        """Get usage limit for a specific feature"""
        limits = self.usage_limits_dict
        return limits.get(limit_name)
    
    @classmethod
    def get_active_subscription(cls, user_id):
        """Get active subscription for a user"""
        return cls.query.filter_by(user_id=user_id, status='active').first()
    
    @classmethod
    def create_trial_subscription(cls, user_id, tier='premium', trial_days=7):
        """Create a trial subscription"""
        trial_end = datetime.utcnow() + timedelta(days=trial_days)
        
        subscription = cls(
            user_id=user_id,
            tier=tier,
            status='active',
            is_trial=True,
            trial_start=datetime.utcnow(),
            trial_end=trial_end,
            expires_at=trial_end
        )
        subscription.save()
        return subscription

class PaymentMethod(BaseModel):
    """Payment method model"""
    __tablename__ = 'payment_methods'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    subscription_id = db.Column(db.String(36), db.ForeignKey('subscriptions.id'))
    
    # Payment method details
    type = db.Column(db.String(20), nullable=False)  # card, paypal, apple_pay, google_pay
    provider = db.Column(db.String(50), default='stripe')
    
    # Card information (for card payments)
    card_brand = db.Column(db.String(20))  # visa, mastercard, amex, etc.
    card_last_four = db.Column(db.String(4))
    card_exp_month = db.Column(db.Integer)
    card_exp_year = db.Column(db.Integer)
    
    # Billing address
    billing_name = db.Column(db.String(200))
    billing_email = db.Column(db.String(254))
    billing_address_line1 = db.Column(db.String(200))
    billing_address_line2 = db.Column(db.String(200))
    billing_city = db.Column(db.String(100))
    billing_state = db.Column(db.String(100))
    billing_postal_code = db.Column(db.String(20))
    billing_country = db.Column(db.String(2))
    
    # Provider-specific IDs
    stripe_payment_method_id = db.Column(db.String(100))
    stripe_customer_id = db.Column(db.String(100))
    
    # Status
    is_default = db.Column(db.Boolean, default=False)
    is_verified = db.Column(db.Boolean, default=False)
    is_active = db.Column(db.Boolean, default=True)
    
    # Failure tracking
    failed_attempts = db.Column(db.Integer, default=0)
    last_failure_reason = db.Column(db.String(200))
    
    @property
    def display_name(self):
        """Get display name for payment method"""
        if self.type == 'card':
            return f"{self.card_brand.title()} ending in {self.card_last_four}"
        else:
            return self.type.replace('_', ' ').title()
    
    @property
    def is_expired(self):
        """Check if card is expired"""
        if self.type == 'card' and self.card_exp_month and self.card_exp_year:
            now = datetime.utcnow()
            exp_date = datetime(self.card_exp_year, self.card_exp_month, 1)
            return now > exp_date
        return False
    
    def set_as_default(self):
        """Set this payment method as default"""
        # Remove default from other payment methods
        PaymentMethod.query.filter_by(user_id=self.user_id, is_default=True).update({'is_default': False})
        self.is_default = True
    
    def record_failure(self, reason):
        """Record a payment failure"""
        self.failed_attempts += 1
        self.last_failure_reason = reason
        
        # Deactivate after too many failures
        if self.failed_attempts >= 3:
            self.is_active = False
    
    def reset_failures(self):
        """Reset failure count after successful payment"""
        self.failed_attempts = 0
        self.last_failure_reason = None

class Transaction(BaseModel):
    """Transaction model for payment tracking"""
    __tablename__ = 'transactions'
    
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    subscription_id = db.Column(db.String(36), db.ForeignKey('subscriptions.id'))
    payment_method_id = db.Column(db.String(36), db.ForeignKey('payment_methods.id'))
    
    # Transaction details
    type = db.Column(db.String(20), nullable=False)  # subscription, upgrade, refund, credit
    status = db.Column(db.String(20), nullable=False)  # pending, completed, failed, refunded
    
    # Amount information
    amount = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(3), default='USD')
    tax_amount = db.Column(db.Float, default=0.0)
    discount_amount = db.Column(db.Float, default=0.0)
    net_amount = db.Column(db.Float)
    
    # Provider information
    provider = db.Column(db.String(50), default='stripe')
    provider_transaction_id = db.Column(db.String(100))
    provider_fee = db.Column(db.Float)
    
    # Description and metadata
    description = db.Column(db.String(500))
    transaction_metadata = db.Column(db.Text)  # JSON string
    
    # Dates
    processed_at = db.Column(db.DateTime)
    failed_at = db.Column(db.DateTime)
    refunded_at = db.Column(db.DateTime)
    
    # Failure information
    failure_reason = db.Column(db.String(200))
    failure_code = db.Column(db.String(50))
    
    # Invoice information
    invoice_number = db.Column(db.String(50))
    invoice_url = db.Column(db.String(500))
    
    @property
    def metadata_dict(self):
        """Get metadata as dictionary"""
        if self.transaction_metadata:
            try:
                return json.loads(self.transaction_metadata)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @metadata_dict.setter
    def metadata_dict(self, value):
        """Set metadata from dictionary"""
        self.transaction_metadata = json.dumps(value) if value else None
    
    def mark_as_completed(self, provider_transaction_id=None):
        """Mark transaction as completed"""
        self.status = 'completed'
        self.processed_at = datetime.utcnow()
        if provider_transaction_id:
            self.provider_transaction_id = provider_transaction_id
        
        # Calculate net amount
        self.net_amount = self.amount - (self.tax_amount or 0) - (self.provider_fee or 0)
    
    def mark_as_failed(self, reason, code=None):
        """Mark transaction as failed"""
        self.status = 'failed'
        self.failed_at = datetime.utcnow()
        self.failure_reason = reason
        self.failure_code = code
    
    def mark_as_refunded(self, refund_amount=None):
        """Mark transaction as refunded"""
        self.status = 'refunded'
        self.refunded_at = datetime.utcnow()
        
        if refund_amount:
            # Create refund transaction
            refund_transaction = Transaction(
                user_id=self.user_id,
                subscription_id=self.subscription_id,
                type='refund',
                status='completed',
                amount=-refund_amount,
                currency=self.currency,
                description=f"Refund for transaction {self.id}",
                processed_at=datetime.utcnow()
            )
            refund_transaction.save()
    
    @classmethod
    def get_user_transactions(cls, user_id, limit=50):
        """Get transactions for a user"""
        return cls.query.filter_by(user_id=user_id).order_by(cls.created_at.desc()).limit(limit).all()
    
    @classmethod
    def get_subscription_transactions(cls, subscription_id):
        """Get transactions for a subscription"""
        return cls.query.filter_by(subscription_id=subscription_id).order_by(cls.created_at.desc()).all()
    
    @classmethod
    def create_subscription_transaction(cls, user_id, subscription_id, amount, description):
        """Create a subscription transaction"""
        transaction = cls(
            user_id=user_id,
            subscription_id=subscription_id,
            type='subscription',
            status='pending',
            amount=amount,
            description=description
        )
        transaction.save()
        return transaction

class PromoCode(BaseModel):
    """Promotional code model"""
    __tablename__ = 'promo_codes'
    
    # Code information
    code = db.Column(db.String(50), unique=True, nullable=False, index=True)
    description = db.Column(db.String(200))
    
    # Discount information
    discount_type = db.Column(db.String(20), nullable=False)  # percentage, fixed_amount, free_trial
    discount_value = db.Column(db.Float, nullable=False)
    max_discount_amount = db.Column(db.Float)  # For percentage discounts
    
    # Validity
    is_active = db.Column(db.Boolean, default=True)
    valid_from = db.Column(db.DateTime, default=datetime.utcnow)
    valid_until = db.Column(db.DateTime)
    
    # Usage limits
    max_uses = db.Column(db.Integer)
    max_uses_per_user = db.Column(db.Integer, default=1)
    current_uses = db.Column(db.Integer, default=0)
    
    # Restrictions
    minimum_amount = db.Column(db.Float)
    applicable_tiers = db.Column(db.Text)  # JSON string
    new_users_only = db.Column(db.Boolean, default=False)
    
    @property
    def applicable_tiers_list(self):
        """Get applicable tiers as list"""
        if self.applicable_tiers:
            try:
                return json.loads(self.applicable_tiers)
            except json.JSONDecodeError:
                return []
        return []
    
    @property
    def is_valid(self):
        """Check if promo code is currently valid"""
        now = datetime.utcnow()
        return (self.is_active and 
                (not self.valid_until or now <= self.valid_until) and
                now >= self.valid_from and
                (not self.max_uses or self.current_uses < self.max_uses))
    
    def can_be_used_by_user(self, user_id):
        """Check if promo code can be used by a specific user"""
        if not self.is_valid:
            return False
        
        if self.max_uses_per_user:
            user_uses = PromoCodeUsage.query.filter_by(
                promo_code_id=self.id,
                user_id=user_id
            ).count()
            
            if user_uses >= self.max_uses_per_user:
                return False
        
        return True
    
    def calculate_discount(self, amount):
        """Calculate discount amount for given amount"""
        if self.discount_type == 'percentage':
            discount = amount * (self.discount_value / 100)
            if self.max_discount_amount:
                discount = min(discount, self.max_discount_amount)
            return discount
        elif self.discount_type == 'fixed_amount':
            return min(self.discount_value, amount)
        return 0
    
    def use_code(self, user_id, transaction_id=None):
        """Record usage of promo code"""
        self.current_uses += 1
        
        usage = PromoCodeUsage(
            promo_code_id=self.id,
            user_id=user_id,
            transaction_id=transaction_id
        )
        usage.save()
        
        return usage

class PromoCodeUsage(BaseModel):
    """Track promo code usage"""
    __tablename__ = 'promo_code_usage'
    
    promo_code_id = db.Column(db.String(36), db.ForeignKey('promo_codes.id'), nullable=False)
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    transaction_id = db.Column(db.String(36), db.ForeignKey('transactions.id'))
    
    # Usage details
    discount_amount = db.Column(db.Float)
    original_amount = db.Column(db.Float)
    final_amount = db.Column(db.Float)
    
    # Relationships
    promo_code = db.relationship('PromoCode', backref='usages')
    user = db.relationship('User', backref='promo_code_usages')
    transaction = db.relationship('Transaction', backref='promo_code_usage')



class SubscriptionPlan(BaseModel):
    """Subscription plan model for different tiers"""
    __tablename__ = 'subscription_plans'
    
    # Plan information
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    billing_cycle = db.Column(db.String(20), nullable=False)  # monthly, yearly
    
    # Features (stored as JSON)
    features = db.Column(db.Text)  # JSON string of features
    
    # Plan status
    is_active = db.Column(db.Boolean, default=True)
    sort_order = db.Column(db.Integer, default=0)
    
    # Stripe information
    stripe_price_id = db.Column(db.String(100))
    stripe_product_id = db.Column(db.String(100))
    
    @property
    def features_dict(self):
        """Get features as dictionary"""
        if self.features:
            try:
                return json.loads(self.features)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @features_dict.setter
    def features_dict(self, value):
        """Set features from dictionary"""
        self.features = json.dumps(value) if value else None
    
    def __repr__(self):
        return f'<SubscriptionPlan {self.name}: ${self.price}/{self.billing_cycle}>'

