"""
Database configuration and utilities for Flourish Relationship Platform
"""

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import event
from sqlalchemy.engine import Engine
import sqlite3
from datetime import datetime
import uuid

# Initialize SQLAlchemy instance
db = SQLAlchemy()

# Enable foreign key constraints for SQLite
@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    if isinstance(dbapi_connection, sqlite3.Connection):
        cursor = dbapi_connection.cursor()
        cursor.execute("PRAGMA foreign_keys=ON")
        cursor.close()

class BaseModel(db.Model):
    """Base model with common fields and methods"""
    __abstract__ = True
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    
    def to_dict(self, include_relationships=False):
        """Convert model instance to dictionary"""
        result = {}
        for column in self.__table__.columns:
            value = getattr(self, column.name)
            if isinstance(value, datetime):
                result[column.name] = value.isoformat()
            else:
                result[column.name] = value
        
        if include_relationships:
            for relationship in self.__mapper__.relationships:
                related_obj = getattr(self, relationship.key)
                if related_obj is not None:
                    if relationship.uselist:
                        result[relationship.key] = [obj.to_dict() for obj in related_obj]
                    else:
                        result[relationship.key] = related_obj.to_dict()
        
        return result
    
    def update_from_dict(self, data):
        """Update model instance from dictionary"""
        for key, value in data.items():
            if hasattr(self, key) and key not in ['id', 'created_at']:
                setattr(self, key, value)
        self.updated_at = datetime.utcnow()
    
    def save(self):
        """Save model instance to database"""
        db.session.add(self)
        db.session.commit()
        return self
    
    def delete(self):
        """Delete model instance from database"""
        db.session.delete(self)
        db.session.commit()
    
    @classmethod
    def create(cls, **kwargs):
        """Create new model instance"""
        instance = cls(**kwargs)
        return instance.save()
    
    @classmethod
    def get_by_id(cls, id):
        """Get model instance by ID"""
        return cls.query.filter_by(id=id).first()
    
    @classmethod
    def get_or_404(cls, id):
        """Get model instance by ID or raise 404"""
        return cls.query.get_or_404(id)

def init_database(app):
    """Initialize database with application"""
    db.init_app(app)
    
    with app.app_context():
        # Create all tables
        db.create_all()
        
        # Create indexes for better performance
        create_indexes()

def create_indexes():
    """Create database indexes for better performance"""
    try:
        # User indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_users_location ON users(latitude, longitude)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_users_active ON users(is_active, last_active)')
        
        # Match indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_matches_user ON matches(user_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_matches_matched_user ON matches(matched_user_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_matches_created ON matches(created_at)')
        
        # Conversation indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_conversations_participants ON conversations(participants)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_conversations_updated ON conversations(updated_at)')
        
        # Message indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_messages_created ON messages(created_at)')
        
        # Coaching session indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_coaching_sessions_user ON coaching_sessions(user_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_coaching_sessions_status ON coaching_sessions(status)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_coaching_sessions_created ON coaching_sessions(created_at)')
        
        # Content indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(is_published, published_at)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_podcasts_category ON podcasts(category)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_meditations_type ON meditations(type, tradition)')
        
        # Subscription indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status)')
        
        # Analytics indexes
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_events_user ON events(user_id)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type)')
        db.engine.execute('CREATE INDEX IF NOT EXISTS idx_events_timestamp ON events(timestamp)')
        
        print("Database indexes created successfully")
        
    except Exception as e:
        print(f"Error creating indexes: {e}")

def drop_all_tables():
    """Drop all database tables (use with caution)"""
    db.drop_all()

def reset_database():
    """Reset database by dropping and recreating all tables"""
    drop_all_tables()
    db.create_all()
    create_indexes()

