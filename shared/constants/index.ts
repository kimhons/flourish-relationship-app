/**
 * Shared Constants for Flourish Relationship Platform
 */

// ============================================================================
// APPLICATION CONSTANTS
// ============================================================================

export const APP_CONFIG = {
  NAME: 'Flourish',
  VERSION: '1.0.0',
  DESCRIPTION: 'Comprehensive Relationship Platform',
  WEBSITE: 'https://flourish-app.com',
  SUPPORT_EMAIL: 'support@flourish-app.com',
  PRIVACY_POLICY_URL: 'https://flourish-app.com/privacy',
  TERMS_OF_SERVICE_URL: 'https://flourish-app.com/terms',
  MIN_AGE: 18,
  MAX_AGE: 100
} as const;

// ============================================================================
// API CONSTANTS
// ============================================================================

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.flourish-app.com',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  RATE_LIMIT: {
    REQUESTS_PER_MINUTE: 60,
    REQUESTS_PER_HOUR: 1000
  }
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
} as const;

// ============================================================================
// AUTHENTICATION CONSTANTS
// ============================================================================

export const AUTH_CONFIG = {
  TOKEN_STORAGE_KEY: 'flourish_auth_token',
  REFRESH_TOKEN_STORAGE_KEY: 'flourish_refresh_token',
  USER_STORAGE_KEY: 'flourish_user',
  TOKEN_EXPIRY_BUFFER: 300000, // 5 minutes in milliseconds
  SESSION_TIMEOUT: 86400000, // 24 hours in milliseconds
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 900000 // 15 minutes in milliseconds
} as const;

// ============================================================================
// VALIDATION CONSTANTS
// ============================================================================

export const VALIDATION_RULES = {
  EMAIL: {
    MAX_LENGTH: 254,
    REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBERS: true,
    REQUIRE_SPECIAL_CHARS: true,
    SPECIAL_CHARS_REGEX: /[!@#$%^&*(),.?":{}|<>]/
  },
  NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 50,
    REGEX: /^[a-zA-Z\s'-]+$/
  },
  BIO: {
    MAX_LENGTH: 500
  },
  MESSAGE: {
    MAX_LENGTH: 1000
  },
  PHONE: {
    REGEX: /^\+?[\d\s\-\(\)]{10,}$/
  }
} as const;

// ============================================================================
// MATCHING CONSTANTS
// ============================================================================

export const MATCHING_CONFIG = {
  MAX_DISTANCE: 100, // miles
  DEFAULT_DISTANCE: 25, // miles
  MIN_AGE_DIFFERENCE: 1,
  MAX_AGE_DIFFERENCE: 20,
  COMPATIBILITY_THRESHOLD: 70, // percentage
  DAILY_LIKES_LIMIT: {
    FREE: 10,
    PREMIUM: 100,
    ELITE: -1 // unlimited
  },
  SUPER_LIKES_LIMIT: {
    FREE: 1,
    PREMIUM: 5,
    ELITE: 10
  },
  BOOST_DURATION: 1800000, // 30 minutes in milliseconds
  MATCH_EXPIRY: 604800000 // 7 days in milliseconds
} as const;

// ============================================================================
// MESSAGING CONSTANTS
// ============================================================================

export const MESSAGING_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  MAX_ATTACHMENTS: 5,
  MAX_FILE_SIZE: 10485760, // 10MB in bytes
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  SUPPORTED_VIDEO_TYPES: ['video/mp4', 'video/quicktime', 'video/x-msvideo'],
  SUPPORTED_AUDIO_TYPES: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
  TYPING_INDICATOR_TIMEOUT: 3000, // 3 seconds
  MESSAGE_DELIVERY_TIMEOUT: 30000, // 30 seconds
  CONVERSATION_ARCHIVE_DELAY: 2592000000 // 30 days in milliseconds
} as const;

// ============================================================================
// AI COACHING CONSTANTS
// ============================================================================

export const AI_COACHING_CONFIG = {
  MAX_SESSION_DURATION: 3600000, // 1 hour in milliseconds
  MAX_DAILY_SESSIONS: {
    FREE: 1,
    PREMIUM: 5,
    ELITE: -1 // unlimited
  },
  VOICE_MESSAGE_MAX_DURATION: 300000, // 5 minutes in milliseconds
  INSIGHT_CONFIDENCE_THRESHOLD: 0.7,
  ACTION_ITEM_EXPIRY: 604800000, // 7 days in milliseconds
  MOOD_ASSESSMENT_FREQUENCY: 86400000, // 24 hours in milliseconds
  CRISIS_KEYWORDS: [
    'suicide', 'kill myself', 'end it all', 'hurt myself',
    'self-harm', 'cutting', 'overdose', 'jump off'
  ]
} as const;

// ============================================================================
// SUBSCRIPTION CONSTANTS
// ============================================================================

export const SUBSCRIPTION_CONFIG = {
  TIERS: {
    FREE: {
      NAME: 'Free',
      PRICE: 0,
      FEATURES: [
        'Basic matching',
        '10 daily likes',
        'Basic messaging',
        'Limited resources'
      ]
    },
    PREMIUM: {
      NAME: 'Premium',
      PRICE: 19.99,
      FEATURES: [
        'Advanced matching',
        'Unlimited likes',
        'AI coaching',
        'Full resources library',
        'Video calling'
      ]
    },
    ELITE: {
      NAME: 'Elite',
      PRICE: 39.99,
      FEATURES: [
        'Everything in Premium',
        'Priority matching',
        'Personal coach',
        'Exclusive content',
        '24/7 support'
      ]
    }
  },
  TRIAL_DURATION: 604800000, // 7 days in milliseconds
  BILLING_CYCLES: ['monthly', 'yearly'],
  YEARLY_DISCOUNT: 0.2, // 20% discount
  GRACE_PERIOD: 259200000, // 3 days in milliseconds
  CANCELLATION_SURVEY_REQUIRED: true
} as const;

// ============================================================================
// CONTENT CONSTANTS
// ============================================================================

export const CONTENT_CONFIG = {
  ARTICLES: {
    MAX_READING_TIME: 60, // minutes
    FEATURED_COUNT: 5,
    CATEGORIES: [
      'Dating Tips',
      'Relationship Advice',
      'Communication',
      'Conflict Resolution',
      'Intimacy',
      'Marriage',
      'Personal Growth'
    ]
  },
  PODCASTS: {
    MAX_DURATION: 7200, // 2 hours in seconds
    FEATURED_COUNT: 3,
    CATEGORIES: [
      'Relationship Advice',
      'Dating Stories',
      'Expert Interviews',
      'Psychology',
      'Self Help'
    ]
  },
  MEDITATIONS: {
    MIN_DURATION: 300, // 5 minutes in seconds
    MAX_DURATION: 3600, // 1 hour in seconds
    TRADITIONS: [
      'Secular',
      'Christian',
      'Buddhist',
      'Hindu',
      'Islamic',
      'Jewish'
    ]
  },
  BOOKS: {
    MAX_CHAPTERS: 50,
    READING_PROGRESS_THRESHOLD: 0.8 // 80% to mark as completed
  }
} as const;

// ============================================================================
// NOTIFICATION CONSTANTS
// ============================================================================

export const NOTIFICATION_CONFIG = {
  MAX_PUSH_NOTIFICATIONS_PER_DAY: 10,
  QUIET_HOURS_DEFAULT: {
    START: '22:00',
    END: '08:00'
  },
  BATCH_SIZE: 100,
  RETRY_ATTEMPTS: 3,
  EXPIRY_TIME: 2592000000, // 30 days in milliseconds
  PRIORITY_LEVELS: {
    LOW: 1,
    NORMAL: 2,
    HIGH: 3,
    URGENT: 4
  }
} as const;

// ============================================================================
// ANALYTICS CONSTANTS
// ============================================================================

export const ANALYTICS_CONFIG = {
  EVENT_BATCH_SIZE: 50,
  EVENT_FLUSH_INTERVAL: 30000, // 30 seconds
  SESSION_TIMEOUT: 1800000, // 30 minutes in milliseconds
  MAX_EVENT_AGE: 2592000000, // 30 days in milliseconds
  SAMPLING_RATE: 1.0, // 100% sampling
  PII_FIELDS: [
    'email',
    'phone',
    'firstName',
    'lastName',
    'address',
    'ssn'
  ]
} as const;

// ============================================================================
// MEDIA CONSTANTS
// ============================================================================

export const MEDIA_CONFIG = {
  PROFILE_PHOTOS: {
    MAX_COUNT: 6,
    MAX_SIZE: 5242880, // 5MB in bytes
    SUPPORTED_FORMATS: ['jpeg', 'jpg', 'png', 'webp'],
    DIMENSIONS: {
      THUMBNAIL: { width: 150, height: 150 },
      MEDIUM: { width: 400, height: 400 },
      LARGE: { width: 800, height: 800 }
    }
  },
  MESSAGE_ATTACHMENTS: {
    MAX_SIZE: 10485760, // 10MB in bytes
    SUPPORTED_FORMATS: [
      'jpeg', 'jpg', 'png', 'gif', 'webp',
      'mp4', 'mov', 'avi',
      'mp3', 'wav', 'ogg',
      'pdf', 'doc', 'docx'
    ]
  },
  VOICE_MESSAGES: {
    MAX_DURATION: 300, // 5 minutes in seconds
    SAMPLE_RATE: 44100,
    BIT_RATE: 128000,
    FORMAT: 'mp3'
  }
} as const;

// ============================================================================
// SECURITY CONSTANTS
// ============================================================================

export const SECURITY_CONFIG = {
  ENCRYPTION: {
    ALGORITHM: 'AES-256-GCM',
    KEY_LENGTH: 32,
    IV_LENGTH: 16
  },
  RATE_LIMITING: {
    LOGIN_ATTEMPTS: 5,
    PASSWORD_RESET_ATTEMPTS: 3,
    API_REQUESTS_PER_MINUTE: 60,
    MESSAGE_SENDING_PER_MINUTE: 10
  },
  SESSION: {
    COOKIE_NAME: 'flourish_session',
    SECURE: true,
    HTTP_ONLY: true,
    SAME_SITE: 'strict',
    MAX_AGE: 86400000 // 24 hours in milliseconds
  },
  CONTENT_SECURITY_POLICY: {
    DEFAULT_SRC: ["'self'"],
    SCRIPT_SRC: ["'self'", "'unsafe-inline'"],
    STYLE_SRC: ["'self'", "'unsafe-inline'"],
    IMG_SRC: ["'self'", 'data:', 'https:'],
    CONNECT_SRC: ["'self'", 'https://api.flourish-app.com']
  }
} as const;

// ============================================================================
// ERROR MESSAGES
// ============================================================================

export const ERROR_MESSAGES = {
  VALIDATION: {
    REQUIRED_FIELD: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
    PASSWORD_MISMATCH: 'Passwords do not match',
    INVALID_AGE: 'You must be at least 18 years old to use this app',
    INVALID_PHONE: 'Please enter a valid phone number'
  },
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    ACCOUNT_LOCKED: 'Account temporarily locked due to too many failed attempts',
    EMAIL_NOT_VERIFIED: 'Please verify your email address before logging in',
    TOKEN_EXPIRED: 'Your session has expired. Please log in again',
    UNAUTHORIZED: 'You are not authorized to perform this action'
  },
  NETWORK: {
    CONNECTION_ERROR: 'Unable to connect to the server. Please check your internet connection',
    TIMEOUT: 'Request timed out. Please try again',
    SERVER_ERROR: 'Something went wrong on our end. Please try again later'
  },
  SUBSCRIPTION: {
    PAYMENT_FAILED: 'Payment failed. Please check your payment method',
    SUBSCRIPTION_EXPIRED: 'Your subscription has expired. Please renew to continue',
    FEATURE_NOT_AVAILABLE: 'This feature is not available with your current subscription'
  }
} as const;

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

export const SUCCESS_MESSAGES = {
  AUTH: {
    REGISTRATION_SUCCESS: 'Account created successfully! Please check your email to verify your account',
    LOGIN_SUCCESS: 'Welcome back!',
    LOGOUT_SUCCESS: 'You have been logged out successfully',
    PASSWORD_RESET_SENT: 'Password reset instructions have been sent to your email',
    PASSWORD_CHANGED: 'Password changed successfully',
    EMAIL_VERIFIED: 'Email verified successfully'
  },
  PROFILE: {
    UPDATED: 'Profile updated successfully',
    PHOTO_UPLOADED: 'Photo uploaded successfully',
    PHOTO_DELETED: 'Photo deleted successfully'
  },
  MESSAGING: {
    MESSAGE_SENT: 'Message sent',
    CONVERSATION_ARCHIVED: 'Conversation archived',
    USER_BLOCKED: 'User blocked successfully'
  },
  SUBSCRIPTION: {
    UPGRADED: 'Subscription upgraded successfully',
    CANCELED: 'Subscription canceled successfully',
    PAYMENT_SUCCESS: 'Payment processed successfully'
  }
} as const;

// ============================================================================
// REGEX PATTERNS
// ============================================================================

export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s\-\(\)]{10,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
  NAME: /^[a-zA-Z\s'-]+$/,
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
} as const;

// ============================================================================
// FEATURE FLAGS
// ============================================================================

export const FEATURE_FLAGS = {
  VOICE_COACHING: true,
  VIDEO_CALLING: true,
  GROUP_MESSAGING: false,
  LIVE_EVENTS: false,
  ADVANCED_ANALYTICS: true,
  SOCIAL_FEATURES: false,
  GAMIFICATION: true,
  DARK_MODE: true,
  OFFLINE_MODE: false,
  PUSH_NOTIFICATIONS: true
} as const;

// ============================================================================
// EXPORT ALL CONSTANTS
// ============================================================================

export {
  APP_CONFIG,
  API_CONFIG,
  HTTP_STATUS,
  AUTH_CONFIG,
  VALIDATION_RULES,
  MATCHING_CONFIG,
  MESSAGING_CONFIG,
  AI_COACHING_CONFIG,
  SUBSCRIPTION_CONFIG,
  CONTENT_CONFIG,
  NOTIFICATION_CONFIG,
  ANALYTICS_CONFIG,
  MEDIA_CONFIG,
  SECURITY_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  REGEX_PATTERNS,
  FEATURE_FLAGS
};

