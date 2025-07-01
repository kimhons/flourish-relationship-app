"""
Conversation and messaging models for Flourish Relationship Platform
"""

from .database import db, BaseModel
from datetime import datetime
import json

class Conversation(BaseModel):
    """Conversation model for managing chat conversations"""
    __tablename__ = 'conversations'
    
    # Conversation type
    type = db.Column(db.String(20), default='match')  # match, group, support
    status = db.Column(db.String(20), default='active')  # active, archived, blocked, deleted
    
    # Participants (JSON string of user IDs)
    participants = db.Column(db.Text, nullable=False, index=True)
    
    # Last message information
    last_message_id = db.Column(db.String(36), db.ForeignKey('messages.id'))
    last_message_at = db.Column(db.DateTime)
    
    # Conversation metadata
    title = db.Column(db.String(200))  # For group conversations
    description = db.Column(db.Text)  # For group conversations
    
    # Privacy and moderation
    is_archived = db.Column(db.Boolean, default=False)
    archived_by = db.Column(db.Text)  # JSON string of user IDs who archived
    
    # Unread counts (JSON string mapping user_id to unread count)
    unread_counts = db.Column(db.Text, default='{}')
    
    # Relationships
    messages = db.relationship('Message', backref='conversation', cascade='all, delete-orphan', 
                              order_by='Message.created_at.desc()')
    match = db.relationship('Match', backref='conversation', uselist=False)
    
    @property
    def participants_list(self):
        """Get participants as list"""
        if self.participants:
            try:
                return json.loads(self.participants)
            except json.JSONDecodeError:
                return []
        return []
    
    @participants_list.setter
    def participants_list(self, value):
        """Set participants from list"""
        self.participants = json.dumps(value) if value else '[]'
    
    @property
    def archived_by_list(self):
        """Get archived_by as list"""
        if self.archived_by:
            try:
                return json.loads(self.archived_by)
            except json.JSONDecodeError:
                return []
        return []
    
    @archived_by_list.setter
    def archived_by_list(self, value):
        """Set archived_by from list"""
        self.archived_by = json.dumps(value) if value else '[]'
    
    @property
    def unread_counts_dict(self):
        """Get unread counts as dictionary"""
        if self.unread_counts:
            try:
                return json.loads(self.unread_counts)
            except json.JSONDecodeError:
                return {}
        return {}
    
    @unread_counts_dict.setter
    def unread_counts_dict(self, value):
        """Set unread counts from dictionary"""
        self.unread_counts = json.dumps(value) if value else '{}'
    
    def add_participant(self, user_id):
        """Add a participant to the conversation"""
        participants = self.participants_list
        if user_id not in participants:
            participants.append(user_id)
            self.participants_list = participants
            
            # Initialize unread count
            unread_counts = self.unread_counts_dict
            unread_counts[user_id] = 0
            self.unread_counts_dict = unread_counts
    
    def remove_participant(self, user_id):
        """Remove a participant from the conversation"""
        participants = self.participants_list
        if user_id in participants:
            participants.remove(user_id)
            self.participants_list = participants
            
            # Remove unread count
            unread_counts = self.unread_counts_dict
            unread_counts.pop(user_id, None)
            self.unread_counts_dict = unread_counts
    
    def get_unread_count(self, user_id):
        """Get unread count for a specific user"""
        unread_counts = self.unread_counts_dict
        return unread_counts.get(user_id, 0)
    
    def increment_unread_count(self, user_id):
        """Increment unread count for a specific user"""
        unread_counts = self.unread_counts_dict
        unread_counts[user_id] = unread_counts.get(user_id, 0) + 1
        self.unread_counts_dict = unread_counts
    
    def mark_as_read(self, user_id):
        """Mark conversation as read for a specific user"""
        unread_counts = self.unread_counts_dict
        unread_counts[user_id] = 0
        self.unread_counts_dict = unread_counts
    
    def archive_for_user(self, user_id):
        """Archive conversation for a specific user"""
        archived_by = self.archived_by_list
        if user_id not in archived_by:
            archived_by.append(user_id)
            self.archived_by_list = archived_by
        
        # Check if all participants have archived
        if set(archived_by) == set(self.participants_list):
            self.is_archived = True
    
    def unarchive_for_user(self, user_id):
        """Unarchive conversation for a specific user"""
        archived_by = self.archived_by_list
        if user_id in archived_by:
            archived_by.remove(user_id)
            self.archived_by_list = archived_by
            self.is_archived = False
    
    def is_archived_for_user(self, user_id):
        """Check if conversation is archived for a specific user"""
        return user_id in self.archived_by_list
    
    def get_other_participant(self, user_id):
        """Get the other participant in a two-person conversation"""
        participants = self.participants_list
        if len(participants) == 2:
            return next((p for p in participants if p != user_id), None)
        return None
    
    def update_last_message(self, message):
        """Update last message information"""
        self.last_message_id = message.id
        self.last_message_at = message.created_at
        
        # Increment unread count for all participants except sender
        participants = self.participants_list
        for participant_id in participants:
            if participant_id != message.sender_id:
                self.increment_unread_count(participant_id)
    
    @classmethod
    def get_user_conversations(cls, user_id, include_archived=False):
        """Get all conversations for a user"""
        query = cls.query.filter(cls.participants.contains(f'"{user_id}"'))
        
        if not include_archived:
            # Filter out conversations archived by this user
            conversations = query.all()
            return [conv for conv in conversations if not conv.is_archived_for_user(user_id)]
        
        return query.order_by(cls.last_message_at.desc().nullslast()).all()
    
    @classmethod
    def get_conversation_between_users(cls, user1_id, user2_id):
        """Get conversation between two specific users"""
        conversations = cls.query.filter(
            cls.participants.contains(f'"{user1_id}"') &
            cls.participants.contains(f'"{user2_id}"') &
            (cls.type == 'match')
        ).all()
        
        # Find conversation with exactly these two participants
        for conv in conversations:
            if set(conv.participants_list) == {user1_id, user2_id}:
                return conv
        return None
    
    @classmethod
    def create_match_conversation(cls, user1_id, user2_id):
        """Create a new conversation for a match"""
        conversation = cls(
            type='match',
            participants_list=[user1_id, user2_id]
        )
        conversation.save()
        return conversation

class Message(BaseModel):
    """Message model for individual messages in conversations"""
    __tablename__ = 'messages'
    
    conversation_id = db.Column(db.String(36), db.ForeignKey('conversations.id'), nullable=False, index=True)
    sender_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False, index=True)
    
    # Message content
    content = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(20), default='text')  # text, image, video, audio, file, location, system
    
    # Message metadata
    is_edited = db.Column(db.Boolean, default=False)
    is_deleted = db.Column(db.Boolean, default=False)
    edited_at = db.Column(db.DateTime)
    
    # Reply functionality
    reply_to_id = db.Column(db.String(36), db.ForeignKey('messages.id'))
    reply_to = db.relationship('Message', remote_side=[id], backref='replies')
    
    # Delivery and read status
    delivered_at = db.Column(db.DateTime)
    read_at = db.Column(db.DateTime)
    read_by = db.Column(db.Text)  # JSON string of user IDs who have read the message
    
    # Attachments (JSON string)
    attachments = db.Column(db.Text)
    
    # Reactions (JSON string)
    reactions = db.Column(db.Text, default='[]')
    
    # AI analysis
    sentiment_score = db.Column(db.Float)  # -1 to 1
    emotion_analysis = db.Column(db.Text)  # JSON string
    toxicity_score = db.Column(db.Float)  # 0 to 1
    
    # Moderation
    is_flagged = db.Column(db.Boolean, default=False)
    flagged_reason = db.Column(db.String(100))
    
    # Relationships
    sender = db.relationship('User', backref='sent_messages')
    
    @property
    def attachments_list(self):
        """Get attachments as list"""
        if self.attachments:
            try:
                return json.loads(self.attachments)
            except json.JSONDecodeError:
                return []
        return []
    
    @attachments_list.setter
    def attachments_list(self, value):
        """Set attachments from list"""
        self.attachments = json.dumps(value) if value else None
    
    @property
    def reactions_list(self):
        """Get reactions as list"""
        if self.reactions:
            try:
                return json.loads(self.reactions)
            except json.JSONDecodeError:
                return []
        return []
    
    @reactions_list.setter
    def reactions_list(self, value):
        """Set reactions from list"""
        self.reactions = json.dumps(value) if value else '[]'
    
    @property
    def read_by_list(self):
        """Get read_by as list"""
        if self.read_by:
            try:
                return json.loads(self.read_by)
            except json.JSONDecodeError:
                return []
        return []
    
    @read_by_list.setter
    def read_by_list(self, value):
        """Set read_by from list"""
        self.read_by = json.dumps(value) if value else None
    
    @property
    def emotion_analysis_dict(self):
        """Get emotion analysis as dictionary"""
        if self.emotion_analysis:
            try:
                return json.loads(self.emotion_analysis)
            except json.JSONDecodeError:
                return {}
        return {}
    
    def add_reaction(self, user_id, emoji):
        """Add a reaction to the message"""
        reactions = self.reactions_list
        
        # Remove existing reaction from this user
        reactions = [r for r in reactions if r.get('user_id') != user_id]
        
        # Add new reaction
        reactions.append({
            'user_id': user_id,
            'emoji': emoji,
            'created_at': datetime.utcnow().isoformat()
        })
        
        self.reactions_list = reactions
    
    def remove_reaction(self, user_id):
        """Remove a reaction from the message"""
        reactions = self.reactions_list
        reactions = [r for r in reactions if r.get('user_id') != user_id]
        self.reactions_list = reactions
    
    def mark_as_read(self, user_id):
        """Mark message as read by a user"""
        read_by = self.read_by_list or []
        if user_id not in read_by:
            read_by.append(user_id)
            self.read_by_list = read_by
        
        if not self.read_at:
            self.read_at = datetime.utcnow()
    
    def mark_as_delivered(self):
        """Mark message as delivered"""
        if not self.delivered_at:
            self.delivered_at = datetime.utcnow()
    
    def edit_content(self, new_content):
        """Edit message content"""
        self.content = new_content
        self.is_edited = True
        self.edited_at = datetime.utcnow()
    
    def soft_delete(self):
        """Soft delete the message"""
        self.is_deleted = True
        self.content = "This message was deleted"
    
    def flag_for_moderation(self, reason):
        """Flag message for moderation"""
        self.is_flagged = True
        self.flagged_reason = reason
    
    @classmethod
    def get_conversation_messages(cls, conversation_id, limit=50, offset=0):
        """Get messages for a conversation with pagination"""
        return cls.query.filter_by(
            conversation_id=conversation_id,
            is_deleted=False
        ).order_by(cls.created_at.desc()).offset(offset).limit(limit).all()
    
    @classmethod
    def get_unread_messages(cls, user_id, conversation_id=None):
        """Get unread messages for a user"""
        query = cls.query.filter(
            cls.sender_id != user_id,
            ~cls.read_by.contains(f'"{user_id}"'),
            cls.is_deleted == False
        )
        
        if conversation_id:
            query = query.filter(cls.conversation_id == conversation_id)
        
        return query.order_by(cls.created_at.desc()).all()
    
    def to_dict(self, include_relationships=False):
        """Convert to dictionary with additional fields"""
        data = super().to_dict(include_relationships=include_relationships)
        
        # Add computed fields
        data['attachments_list'] = self.attachments_list
        data['reactions_list'] = self.reactions_list
        data['read_by_list'] = self.read_by_list
        data['emotion_analysis_dict'] = self.emotion_analysis_dict
        
        return data

