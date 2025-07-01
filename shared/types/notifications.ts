/**
 * Notification Types for Flourish Relationship Platform
 */

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, any>;
  isRead: boolean;
  priority: NotificationPriority;
  category: NotificationCategory;
  actionUrl?: string;
  imageUrl?: string;
  expiresAt?: Date;
  createdAt: Date;
  readAt?: Date;
}

export enum NotificationType {
  // Matching & Dating
  NEW_MATCH = 'new_match',
  NEW_LIKE = 'new_like',
  SUPER_LIKE = 'super_like',
  MATCH_EXPIRED = 'match_expired',
  PROFILE_VIEWED = 'profile_viewed',

  // Messaging
  NEW_MESSAGE = 'new_message',
  MESSAGE_DELIVERED = 'message_delivered',
  MESSAGE_READ = 'message_read',
  CONVERSATION_ARCHIVED = 'conversation_archived',

  // AI Coaching
  COACHING_REMINDER = 'coaching_reminder',
  NEW_INSIGHT = 'new_insight',
  ACTION_ITEM_DUE = 'action_item_due',
  SESSION_SCHEDULED = 'session_scheduled',
  PROGRESS_MILESTONE = 'progress_milestone',

  // Resources & Content
  NEW_ARTICLE = 'new_article',
  NEW_PODCAST = 'new_podcast',
  CONTENT_RECOMMENDATION = 'content_recommendation',
  READING_REMINDER = 'reading_reminder',

  // Subscription & Payments
  SUBSCRIPTION_RENEWED = 'subscription_renewed',
  SUBSCRIPTION_EXPIRED = 'subscription_expired',
  PAYMENT_FAILED = 'payment_failed',
  TRIAL_ENDING = 'trial_ending',
  UPGRADE_AVAILABLE = 'upgrade_available',

  // Account & Security
  LOGIN_ALERT = 'login_alert',
  PASSWORD_CHANGED = 'password_changed',
  EMAIL_VERIFIED = 'email_verified',
  PROFILE_UPDATED = 'profile_updated',
  SECURITY_ALERT = 'security_alert',

  // Social & Community
  FRIEND_REQUEST = 'friend_request',
  EVENT_INVITATION = 'event_invitation',
  GROUP_INVITATION = 'group_invitation',
  ACHIEVEMENT_UNLOCKED = 'achievement_unlocked',

  // System & Admin
  SYSTEM_MAINTENANCE = 'system_maintenance',
  FEATURE_ANNOUNCEMENT = 'feature_announcement',
  POLICY_UPDATE = 'policy_update',
  MODERATION_ACTION = 'moderation_action'
}

export enum NotificationPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum NotificationCategory {
  DATING = 'dating',
  MESSAGING = 'messaging',
  COACHING = 'coaching',
  CONTENT = 'content',
  ACCOUNT = 'account',
  SOCIAL = 'social',
  SYSTEM = 'system',
  MARKETING = 'marketing'
}

export interface NotificationSettings {
  userId: string;
  pushNotifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  categories: {
    [key in NotificationCategory]: {
      push: boolean;
      email: boolean;
      sms: boolean;
      frequency: NotificationFrequency;
    };
  };
  quietHours: {
    enabled: boolean;
    startTime: string; // HH:mm format
    endTime: string; // HH:mm format
    timezone: string;
  };
  updatedAt: Date;
}

export enum NotificationFrequency {
  IMMEDIATE = 'immediate',
  HOURLY = 'hourly',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  NEVER = 'never'
}

export interface PushNotificationPayload {
  title: string;
  body: string;
  icon?: string;
  image?: string;
  badge?: number;
  sound?: string;
  data?: Record<string, any>;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

export interface EmailNotificationTemplate {
  templateId: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  variables: Record<string, any>;
}

export interface SMSNotificationPayload {
  message: string;
  phoneNumber: string;
  variables?: Record<string, any>;
}

