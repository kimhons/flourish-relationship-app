/**
 * Event Types for Flourish Relationship Platform
 * Used for analytics, tracking, and real-time updates
 */

export interface Event {
  id: string;
  type: EventType;
  userId?: string;
  sessionId?: string;
  timestamp: Date;
  data: Record<string, any>;
  metadata?: EventMetadata;
}

export interface EventMetadata {
  source: EventSource;
  platform: Platform;
  version: string;
  userAgent?: string;
  ipAddress?: string;
  location?: {
    country: string;
    region: string;
    city: string;
  };
}

export enum EventType {
  // User Events
  USER_REGISTERED = 'user_registered',
  USER_LOGIN = 'user_login',
  USER_LOGOUT = 'user_logout',
  PROFILE_CREATED = 'profile_created',
  PROFILE_UPDATED = 'profile_updated',
  PROFILE_VIEWED = 'profile_viewed',
  PHOTO_UPLOADED = 'photo_uploaded',
  PREFERENCES_UPDATED = 'preferences_updated',

  // Matching Events
  USER_LIKED = 'user_liked',
  USER_PASSED = 'user_passed',
  SUPER_LIKE_SENT = 'super_like_sent',
  MATCH_CREATED = 'match_created',
  MATCH_EXPIRED = 'match_expired',
  MATCH_UNMATCHED = 'match_unmatched',
  BOOST_ACTIVATED = 'boost_activated',

  // Messaging Events
  CONVERSATION_STARTED = 'conversation_started',
  MESSAGE_SENT = 'message_sent',
  MESSAGE_RECEIVED = 'message_received',
  MESSAGE_READ = 'message_read',
  CONVERSATION_ARCHIVED = 'conversation_archived',
  USER_BLOCKED = 'user_blocked',
  USER_REPORTED = 'user_reported',

  // AI Coaching Events
  COACHING_SESSION_STARTED = 'coaching_session_started',
  COACHING_SESSION_ENDED = 'coaching_session_ended',
  COACHING_MESSAGE_SENT = 'coaching_message_sent',
  VOICE_INTERACTION = 'voice_interaction',
  INSIGHT_GENERATED = 'insight_generated',
  ACTION_ITEM_CREATED = 'action_item_created',
  ACTION_ITEM_COMPLETED = 'action_item_completed',
  MOOD_ASSESSED = 'mood_assessed',

  // Content Events
  ARTICLE_VIEWED = 'article_viewed',
  ARTICLE_SHARED = 'article_shared',
  PODCAST_PLAYED = 'podcast_played',
  MEDITATION_STARTED = 'meditation_started',
  MEDITATION_COMPLETED = 'meditation_completed',
  BOOK_OPENED = 'book_opened',
  CHAPTER_COMPLETED = 'chapter_completed',
  RESOURCE_FAVORITED = 'resource_favorited',
  SEARCH_PERFORMED = 'search_performed',

  // Subscription Events
  SUBSCRIPTION_CREATED = 'subscription_created',
  SUBSCRIPTION_UPGRADED = 'subscription_upgraded',
  SUBSCRIPTION_DOWNGRADED = 'subscription_downgraded',
  SUBSCRIPTION_CANCELED = 'subscription_canceled',
  PAYMENT_SUCCESSFUL = 'payment_successful',
  PAYMENT_FAILED = 'payment_failed',
  TRIAL_STARTED = 'trial_started',
  TRIAL_ENDED = 'trial_ended',

  // Engagement Events
  APP_OPENED = 'app_opened',
  APP_CLOSED = 'app_closed',
  SCREEN_VIEWED = 'screen_viewed',
  FEATURE_USED = 'feature_used',
  BUTTON_CLICKED = 'button_clicked',
  FORM_SUBMITTED = 'form_submitted',
  ERROR_OCCURRED = 'error_occurred',
  CRASH_REPORTED = 'crash_reported',

  // Growth Events
  ASSESSMENT_COMPLETED = 'assessment_completed',
  EXERCISE_STARTED = 'exercise_started',
  EXERCISE_COMPLETED = 'exercise_completed',
  MILESTONE_REACHED = 'milestone_reached',
  ACHIEVEMENT_UNLOCKED = 'achievement_unlocked',
  PROGRESS_UPDATED = 'progress_updated',

  // Social Events
  FRIEND_REQUEST_SENT = 'friend_request_sent',
  FRIEND_REQUEST_ACCEPTED = 'friend_request_accepted',
  EVENT_CREATED = 'event_created',
  EVENT_JOINED = 'event_joined',
  GROUP_CREATED = 'group_created',
  GROUP_JOINED = 'group_joined',

  // Admin Events
  USER_MODERATED = 'user_moderated',
  CONTENT_MODERATED = 'content_moderated',
  SYSTEM_ALERT = 'system_alert',
  MAINTENANCE_STARTED = 'maintenance_started',
  MAINTENANCE_ENDED = 'maintenance_ended'
}

export enum EventSource {
  MOBILE_APP = 'mobile_app',
  WEB_APP = 'web_app',
  ADMIN_DASHBOARD = 'admin_dashboard',
  API = 'api',
  SYSTEM = 'system',
  AI_SERVICE = 'ai_service',
  WEBHOOK = 'webhook'
}

export enum Platform {
  IOS = 'ios',
  ANDROID = 'android',
  WEB = 'web',
  DESKTOP = 'desktop'
}

// Specific event data interfaces
export interface UserRegisteredEvent {
  userId: string;
  email: string;
  registrationMethod: string;
  referralSource?: string;
  utmParams?: Record<string, string>;
}

export interface MatchCreatedEvent {
  matchId: string;
  userId: string;
  matchedUserId: string;
  compatibilityScore: number;
  matchType: string;
}

export interface MessageSentEvent {
  messageId: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  messageType: string;
  messageLength: number;
  hasAttachments: boolean;
}

export interface CoachingSessionEvent {
  sessionId: string;
  userId: string;
  coachType: string;
  sessionType: string;
  duration: number;
  messageCount: number;
  insightsGenerated: number;
  actionItemsCreated: number;
}

export interface ContentViewedEvent {
  contentId: string;
  contentType: string;
  userId: string;
  duration: number;
  completionPercentage: number;
  source: string;
}

export interface SubscriptionEvent {
  subscriptionId: string;
  userId: string;
  tier: string;
  amount: number;
  currency: string;
  interval: string;
  previousTier?: string;
}

export interface ErrorEvent {
  errorType: string;
  errorMessage: string;
  stackTrace?: string;
  userId?: string;
  sessionId?: string;
  screen?: string;
  action?: string;
}

// Event aggregation and analytics
export interface EventAggregation {
  eventType: EventType;
  count: number;
  uniqueUsers: number;
  timeframe: TimeFrame;
  dimensions: Record<string, any>;
  metrics: Record<string, number>;
}

export enum TimeFrame {
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  QUARTER = 'quarter',
  YEAR = 'year'
}

export interface EventFilter {
  eventTypes?: EventType[];
  userIds?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  properties?: Record<string, any>;
}

export interface EventQuery {
  filters: EventFilter;
  groupBy?: string[];
  orderBy?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  limit?: number;
  offset?: number;
}

