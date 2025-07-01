/**
 * API Types for Flourish Relationship Platform
 * 
 * This file contains all API-related type definitions including
 * request/response types, endpoint definitions, and API configurations.
 */

// ============================================================================
// API REQUEST TYPES
// ============================================================================

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // ISO date string
  gender: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  bio?: string;
  interests?: string[];
  location?: {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    country: string;
  };
}

export interface UpdatePreferencesRequest {
  ageRange?: {
    min: number;
    max: number;
  };
  distanceRange?: number;
  genderPreference?: string[];
  dealBreakers?: string[];
  importanceWeights?: Record<string, number>;
}

export interface SendMessageRequest {
  conversationId: string;
  content: string;
  type: string;
  replyTo?: string;
  attachments?: {
    type: string;
    url: string;
    filename: string;
  }[];
}

export interface StartCoachingSessionRequest {
  coachType: string;
  sessionType: string;
  topic: string;
  goals: string[];
  mood?: {
    overall: number;
    anxiety: number;
    happiness: number;
    stress: number;
    confidence: number;
    optimism: number;
  };
}

export interface SendCoachMessageRequest {
  sessionId: string;
  content: string;
  isVoice?: boolean;
  audioUrl?: string;
  duration?: number;
}

export interface LikeUserRequest {
  userId: string;
  isSuper?: boolean;
}

export interface ReportUserRequest {
  userId: string;
  reason: string;
  description: string;
  evidence?: {
    type: string;
    url: string;
    description: string;
  }[];
}

export interface CreateSubscriptionRequest {
  priceId: string;
  paymentMethodId: string;
  trialDays?: number;
}

export interface UpdatePaymentMethodRequest {
  paymentMethodId: string;
  isDefault?: boolean;
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    subscriptionTier: string;
    profileComplete: boolean;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

export interface UserProfileResponse {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: number;
  gender: string;
  sexualOrientation: string;
  location: {
    city: string;
    state: string;
    country: string;
    distance?: number; // from current user
  };
  profilePictures: {
    id: string;
    url: string;
    thumbnailUrl: string;
    isPrimary: boolean;
    order: number;
  }[];
  bio: string;
  interests: {
    id: string;
    name: string;
    category: string;
  }[];
  education: string;
  occupation: string;
  height?: number;
  isVerified: boolean;
  isOnline: boolean;
  lastActive: string;
  compatibilityScore?: number;
  mutualFriends?: number;
  mutualInterests?: string[];
}

export interface MatchesResponse {
  potentialMatches: UserProfileResponse[];
  mutualMatches: {
    user: UserProfileResponse;
    matchedAt: string;
    conversationId: string;
    lastMessage?: {
      content: string;
      sentAt: string;
      senderId: string;
    };
  }[];
  likes: {
    user: UserProfileResponse;
    likedAt: string;
    isSuper: boolean;
  }[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
  };
}

export interface ConversationsResponse {
  conversations: {
    id: string;
    participants: UserProfileResponse[];
    lastMessage?: {
      id: string;
      content: string;
      senderId: string;
      sentAt: string;
      type: string;
    };
    unreadCount: number;
    isArchived: boolean;
    updatedAt: string;
  }[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
  };
}

export interface MessagesResponse {
  messages: {
    id: string;
    conversationId: string;
    senderId: string;
    content: string;
    type: string;
    attachments?: {
      id: string;
      type: string;
      url: string;
      filename: string;
      thumbnailUrl?: string;
    }[];
    replyTo?: {
      id: string;
      content: string;
      senderId: string;
    };
    reactions?: {
      userId: string;
      emoji: string;
      createdAt: string;
    }[];
    isEdited: boolean;
    deliveredAt?: string;
    readAt?: string;
    createdAt: string;
  }[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface CoachingSessionResponse {
  id: string;
  coachType: string;
  sessionType: string;
  status: string;
  topic: string;
  goals: string[];
  transcript: {
    id: string;
    speaker: 'user' | 'coach';
    content: string;
    timestamp: string;
    sentiment?: {
      overall: number;
      emotions: {
        emotion: string;
        score: number;
      }[];
    };
  }[];
  insights: {
    id: string;
    type: string;
    category: string;
    title: string;
    description: string;
    confidence: number;
    priority: string;
  }[];
  actionItems: {
    id: string;
    title: string;
    description: string;
    category: string;
    priority: string;
    dueDate?: string;
    isCompleted: boolean;
  }[];
  mood: {
    overall: number;
    anxiety: number;
    happiness: number;
    stress: number;
    confidence: number;
    optimism: number;
    assessedAt: string;
  };
  duration: number;
  startedAt: string;
  endedAt?: string;
}

export interface ResourcesResponse {
  articles: {
    id: string;
    title: string;
    subtitle?: string;
    author: {
      name: string;
      credentials: string[];
      avatarUrl?: string;
    };
    category: string;
    tags: string[];
    readingTime: number;
    isPremium: boolean;
    featuredImageUrl?: string;
    publishedAt: string;
    excerpt: string;
  }[];
  podcasts: {
    id: string;
    title: string;
    description: string;
    host: string;
    duration: number;
    category: string;
    tags: string[];
    isPremium: boolean;
    thumbnailUrl?: string;
    publishedAt: string;
  }[];
  meditations: {
    id: string;
    title: string;
    description: string;
    instructor: string;
    type: string;
    tradition: string;
    duration: number;
    guidanceLevel: string;
    tags: string[];
    isPremium: boolean;
    thumbnailUrl?: string;
  }[];
  books: {
    id: string;
    title: string;
    author: string;
    description: string;
    category: string;
    isPremium: boolean;
    coverImageUrl?: string;
    chapters: {
      id: string;
      title: string;
      order: number;
      isUnlocked: boolean;
    }[];
  }[];
}

export interface AnalyticsResponse {
  userStats: {
    profileViews: number;
    likes: number;
    matches: number;
    conversations: number;
    messagesExchanged: number;
    coachingSessions: number;
    resourcesConsumed: number;
  };
  relationshipHealth: {
    overall: number;
    communication: number;
    emotional: number;
    physical: number;
    intellectual: number;
    spiritual: number;
    lastAssessed: string;
  };
  growthProgress: {
    category: string;
    currentLevel: number;
    targetLevel: number;
    progress: number;
    lastWorkedOn?: string;
  }[];
  achievements: {
    id: string;
    title: string;
    description: string;
    iconUrl: string;
    unlockedAt: string;
    isRare: boolean;
  }[];
}

export interface SubscriptionResponse {
  subscription: {
    id: string;
    tier: string;
    status: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    cancelAtPeriodEnd: boolean;
    amount: number;
    currency: string;
    interval: string;
  };
  paymentMethods: {
    id: string;
    type: string;
    last4: string;
    brand: string;
    expiryMonth: number;
    expiryYear: number;
    isDefault: boolean;
  }[];
  invoices: {
    id: string;
    amount: number;
    currency: string;
    status: string;
    paidAt?: string;
    dueDate: string;
    receiptUrl?: string;
  }[];
  features: {
    feature: string;
    isAvailable: boolean;
    limit?: number;
    used?: number;
  }[];
}

// ============================================================================
// API ENDPOINT DEFINITIONS
// ============================================================================

export interface ApiEndpoints {
  // Authentication
  auth: {
    login: '/api/auth/login';
    register: '/api/auth/register';
    refresh: '/api/auth/refresh';
    logout: '/api/auth/logout';
    forgotPassword: '/api/auth/forgot-password';
    resetPassword: '/api/auth/reset-password';
    verifyEmail: '/api/auth/verify-email';
    resendVerification: '/api/auth/resend-verification';
  };

  // User Management
  users: {
    profile: '/api/users/profile';
    updateProfile: '/api/users/profile';
    preferences: '/api/users/preferences';
    updatePreferences: '/api/users/preferences';
    uploadPhoto: '/api/users/photos';
    deletePhoto: '/api/users/photos/:photoId';
    deactivate: '/api/users/deactivate';
    delete: '/api/users/delete';
    block: '/api/users/:userId/block';
    unblock: '/api/users/:userId/unblock';
    report: '/api/users/:userId/report';
  };

  // Matching System
  matches: {
    potential: '/api/matches/potential';
    like: '/api/matches/like';
    pass: '/api/matches/pass';
    superLike: '/api/matches/super-like';
    mutual: '/api/matches/mutual';
    undo: '/api/matches/undo';
    boost: '/api/matches/boost';
  };

  // Messaging
  conversations: {
    list: '/api/conversations';
    create: '/api/conversations';
    get: '/api/conversations/:conversationId';
    archive: '/api/conversations/:conversationId/archive';
    delete: '/api/conversations/:conversationId';
    messages: '/api/conversations/:conversationId/messages';
    sendMessage: '/api/conversations/:conversationId/messages';
    markRead: '/api/conversations/:conversationId/read';
    typing: '/api/conversations/:conversationId/typing';
  };

  // AI Coaching
  coaching: {
    sessions: '/api/coaching/sessions';
    createSession: '/api/coaching/sessions';
    getSession: '/api/coaching/sessions/:sessionId';
    sendMessage: '/api/coaching/sessions/:sessionId/messages';
    endSession: '/api/coaching/sessions/:sessionId/end';
    voiceInteraction: '/api/coaching/voice';
    insights: '/api/coaching/insights';
    actionItems: '/api/coaching/action-items';
    completeAction: '/api/coaching/action-items/:actionId/complete';
  };

  // Resources
  resources: {
    articles: '/api/resources/articles';
    article: '/api/resources/articles/:articleId';
    podcasts: '/api/resources/podcasts';
    podcast: '/api/resources/podcasts/:podcastId';
    meditations: '/api/resources/meditations';
    meditation: '/api/resources/meditations/:meditationId';
    books: '/api/resources/books';
    book: '/api/resources/books/:bookId';
    chapter: '/api/resources/books/:bookId/chapters/:chapterId';
    search: '/api/resources/search';
    recommendations: '/api/resources/recommendations';
    favorites: '/api/resources/favorites';
    addFavorite: '/api/resources/favorites';
    removeFavorite: '/api/resources/favorites/:resourceId';
  };

  // Analytics
  analytics: {
    dashboard: '/api/analytics/dashboard';
    profile: '/api/analytics/profile';
    relationship: '/api/analytics/relationship';
    growth: '/api/analytics/growth';
    usage: '/api/analytics/usage';
    insights: '/api/analytics/insights';
  };

  // Subscription & Payments
  subscription: {
    plans: '/api/subscription/plans';
    current: '/api/subscription/current';
    create: '/api/subscription/create';
    update: '/api/subscription/update';
    cancel: '/api/subscription/cancel';
    reactivate: '/api/subscription/reactivate';
    paymentMethods: '/api/subscription/payment-methods';
    addPaymentMethod: '/api/subscription/payment-methods';
    updatePaymentMethod: '/api/subscription/payment-methods/:paymentMethodId';
    deletePaymentMethod: '/api/subscription/payment-methods/:paymentMethodId';
    invoices: '/api/subscription/invoices';
    invoice: '/api/subscription/invoices/:invoiceId';
  };

  // Admin
  admin: {
    dashboard: '/api/admin/dashboard';
    users: '/api/admin/users';
    user: '/api/admin/users/:userId';
    moderation: '/api/admin/moderation';
    moderationCase: '/api/admin/moderation/:caseId';
    analytics: '/api/admin/analytics';
    content: '/api/admin/content';
    settings: '/api/admin/settings';
  };
}

// ============================================================================
// API CONFIGURATION TYPES
// ============================================================================

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  headers: Record<string, string>;
  interceptors: {
    request: RequestInterceptor[];
    response: ResponseInterceptor[];
  };
}

export interface RequestInterceptor {
  name: string;
  handler: (config: any) => any;
}

export interface ResponseInterceptor {
  name: string;
  onSuccess: (response: any) => any;
  onError: (error: any) => any;
}

// ============================================================================
// WEBSOCKET TYPES
// ============================================================================

export interface WebSocketMessage {
  type: WebSocketMessageType;
  payload: any;
  timestamp: string;
  id: string;
}

export enum WebSocketMessageType {
  // Connection
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  HEARTBEAT = 'heartbeat',

  // Messaging
  NEW_MESSAGE = 'new_message',
  MESSAGE_DELIVERED = 'message_delivered',
  MESSAGE_READ = 'message_read',
  TYPING_START = 'typing_start',
  TYPING_STOP = 'typing_stop',

  // Matching
  NEW_MATCH = 'new_match',
  NEW_LIKE = 'new_like',
  MATCH_EXPIRED = 'match_expired',

  // Coaching
  COACHING_MESSAGE = 'coaching_message',
  COACHING_INSIGHT = 'coaching_insight',
  SESSION_ENDED = 'session_ended',

  // Notifications
  NOTIFICATION = 'notification',
  SYSTEM_ANNOUNCEMENT = 'system_announcement',

  // User Status
  USER_ONLINE = 'user_online',
  USER_OFFLINE = 'user_offline',
  USER_LOCATION_UPDATE = 'user_location_update',

  // Admin
  MODERATION_ALERT = 'moderation_alert',
  SYSTEM_MAINTENANCE = 'system_maintenance'
}

// ============================================================================
// ERROR TYPES
// ============================================================================

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    timestamp: string;
    requestId: string;
  };
}

export enum ApiErrorCode {
  // Authentication
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',

  // Authorization
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  SUBSCRIPTION_REQUIRED = 'SUBSCRIPTION_REQUIRED',
  FEATURE_NOT_AVAILABLE = 'FEATURE_NOT_AVAILABLE',

  // Validation
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',

  // Resource
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  RESOURCE_ALREADY_EXISTS = 'RESOURCE_ALREADY_EXISTS',
  RESOURCE_CONFLICT = 'RESOURCE_CONFLICT',

  // Rate Limiting
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',

  // Server
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  MAINTENANCE_MODE = 'MAINTENANCE_MODE',

  // External Services
  AI_SERVICE_ERROR = 'AI_SERVICE_ERROR',
  PAYMENT_SERVICE_ERROR = 'PAYMENT_SERVICE_ERROR',
  EMAIL_SERVICE_ERROR = 'EMAIL_SERVICE_ERROR',

  // Business Logic
  PROFILE_INCOMPLETE = 'PROFILE_INCOMPLETE',
  AGE_RESTRICTION = 'AGE_RESTRICTION',
  LOCATION_REQUIRED = 'LOCATION_REQUIRED',
  VERIFICATION_REQUIRED = 'VERIFICATION_REQUIRED'
}

// ============================================================================
// PAGINATION TYPES
// ============================================================================

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage?: number;
  prevPage?: number;
}

// ============================================================================
// SEARCH TYPES
// ============================================================================

export interface SearchParams {
  query: string;
  type?: SearchType;
  filters?: SearchFilters;
  pagination?: PaginationParams;
}

export interface SearchFilters {
  category?: string[];
  tags?: string[];
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  isPremium?: boolean;
  difficulty?: string;
  duration?: {
    min: number;
    max: number;
  };
}

export enum SearchType {
  ALL = 'all',
  ARTICLES = 'articles',
  PODCASTS = 'podcasts',
  MEDITATIONS = 'meditations',
  BOOKS = 'books',
  EXERCISES = 'exercises',
  USERS = 'users'
}

export interface SearchResult {
  id: string;
  type: SearchType;
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
  relevanceScore: number;
  highlights: string[];
}

// ============================================================================
// UPLOAD TYPES
// ============================================================================

export interface UploadRequest {
  file: File | Blob;
  type: UploadType;
  metadata?: Record<string, any>;
}

export interface UploadResponse {
  id: string;
  url: string;
  thumbnailUrl?: string;
  filename: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
}

export enum UploadType {
  PROFILE_PHOTO = 'profile_photo',
  MESSAGE_ATTACHMENT = 'message_attachment',
  VOICE_MESSAGE = 'voice_message',
  EVIDENCE = 'evidence',
  RESOURCE_CONTENT = 'resource_content'
}

// ============================================================================
// EXPORT ALL API TYPES
// ============================================================================

export const API_ENDPOINTS: ApiEndpoints = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    refresh: '/api/auth/refresh',
    logout: '/api/auth/logout',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
    verifyEmail: '/api/auth/verify-email',
    resendVerification: '/api/auth/resend-verification'
  },
  users: {
    profile: '/api/users/profile',
    updateProfile: '/api/users/profile',
    preferences: '/api/users/preferences',
    updatePreferences: '/api/users/preferences',
    uploadPhoto: '/api/users/photos',
    deletePhoto: '/api/users/photos/:photoId',
    deactivate: '/api/users/deactivate',
    delete: '/api/users/delete',
    block: '/api/users/:userId/block',
    unblock: '/api/users/:userId/unblock',
    report: '/api/users/:userId/report'
  },
  matches: {
    potential: '/api/matches/potential',
    like: '/api/matches/like',
    pass: '/api/matches/pass',
    superLike: '/api/matches/super-like',
    mutual: '/api/matches/mutual',
    undo: '/api/matches/undo',
    boost: '/api/matches/boost'
  },
  conversations: {
    list: '/api/conversations',
    create: '/api/conversations',
    get: '/api/conversations/:conversationId',
    archive: '/api/conversations/:conversationId/archive',
    delete: '/api/conversations/:conversationId',
    messages: '/api/conversations/:conversationId/messages',
    sendMessage: '/api/conversations/:conversationId/messages',
    markRead: '/api/conversations/:conversationId/read',
    typing: '/api/conversations/:conversationId/typing'
  },
  coaching: {
    sessions: '/api/coaching/sessions',
    createSession: '/api/coaching/sessions',
    getSession: '/api/coaching/sessions/:sessionId',
    sendMessage: '/api/coaching/sessions/:sessionId/messages',
    endSession: '/api/coaching/sessions/:sessionId/end',
    voiceInteraction: '/api/coaching/voice',
    insights: '/api/coaching/insights',
    actionItems: '/api/coaching/action-items',
    completeAction: '/api/coaching/action-items/:actionId/complete'
  },
  resources: {
    articles: '/api/resources/articles',
    article: '/api/resources/articles/:articleId',
    podcasts: '/api/resources/podcasts',
    podcast: '/api/resources/podcasts/:podcastId',
    meditations: '/api/resources/meditations',
    meditation: '/api/resources/meditations/:meditationId',
    books: '/api/resources/books',
    book: '/api/resources/books/:bookId',
    chapter: '/api/resources/books/:bookId/chapters/:chapterId',
    search: '/api/resources/search',
    recommendations: '/api/resources/recommendations',
    favorites: '/api/resources/favorites',
    addFavorite: '/api/resources/favorites',
    removeFavorite: '/api/resources/favorites/:resourceId'
  },
  analytics: {
    dashboard: '/api/analytics/dashboard',
    profile: '/api/analytics/profile',
    relationship: '/api/analytics/relationship',
    growth: '/api/analytics/growth',
    usage: '/api/analytics/usage',
    insights: '/api/analytics/insights'
  },
  subscription: {
    plans: '/api/subscription/plans',
    current: '/api/subscription/current',
    create: '/api/subscription/create',
    update: '/api/subscription/update',
    cancel: '/api/subscription/cancel',
    reactivate: '/api/subscription/reactivate',
    paymentMethods: '/api/subscription/payment-methods',
    addPaymentMethod: '/api/subscription/payment-methods',
    updatePaymentMethod: '/api/subscription/payment-methods/:paymentMethodId',
    deletePaymentMethod: '/api/subscription/payment-methods/:paymentMethodId',
    invoices: '/api/subscription/invoices',
    invoice: '/api/subscription/invoices/:invoiceId'
  },
  admin: {
    dashboard: '/api/admin/dashboard',
    users: '/api/admin/users',
    user: '/api/admin/users/:userId',
    moderation: '/api/admin/moderation',
    moderationCase: '/api/admin/moderation/:caseId',
    analytics: '/api/admin/analytics',
    content: '/api/admin/content',
    settings: '/api/admin/settings'
  }
};

