/**
 * Zod Validators for Flourish Relationship Platform
 * 
 * Runtime validation schemas using Zod for type safety and data validation.
 */

import { z } from 'zod';
import { 
  Gender, 
  SexualOrientation, 
  EducationLevel,
  Religion,
  PoliticalViews,
  AttachmentStyle,
  CommunicationStyle,
  LoveLanguage,
  PersonalityType,
  SubscriptionTier
} from '../types';

// ============================================================================
// BASIC VALIDATORS
// ============================================================================

export const emailValidator = z
  .string()
  .email('Invalid email address')
  .max(254, 'Email address too long');

export const passwordValidator = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password too long')
  .regex(/[a-z]/, 'Password must contain lowercase letters')
  .regex(/[A-Z]/, 'Password must contain uppercase letters')
  .regex(/\d/, 'Password must contain numbers')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain special characters');

export const nameValidator = z
  .string()
  .min(1, 'Name is required')
  .max(50, 'Name too long')
  .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters');

export const phoneValidator = z
  .string()
  .regex(/^\+?[\d\s\-\(\)]{10,}$/, 'Invalid phone number format');

export const bioValidator = z
  .string()
  .max(500, 'Bio too long')
  .optional();

export const ageValidator = z
  .number()
  .min(18, 'Must be at least 18 years old')
  .max(100, 'Invalid age');

// ============================================================================
// ENUM VALIDATORS
// ============================================================================

export const genderValidator = z.nativeEnum(Gender);
export const sexualOrientationValidator = z.nativeEnum(SexualOrientation);
export const educationLevelValidator = z.nativeEnum(EducationLevel);
export const religionValidator = z.nativeEnum(Religion);
export const politicalViewsValidator = z.nativeEnum(PoliticalViews);
export const attachmentStyleValidator = z.nativeEnum(AttachmentStyle);
export const communicationStyleValidator = z.nativeEnum(CommunicationStyle);
export const loveLanguageValidator = z.nativeEnum(LoveLanguage);
export const personalityTypeValidator = z.nativeEnum(PersonalityType);
export const subscriptionTierValidator = z.nativeEnum(SubscriptionTier);

// ============================================================================
// OBJECT VALIDATORS
// ============================================================================

export const locationValidator = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  city: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  zipCode: z.string().optional()
});

export const ageRangeValidator = z.object({
  min: z.number().min(18).max(100),
  max: z.number().min(18).max(100)
}).refine(data => data.min <= data.max, {
  message: 'Minimum age must be less than or equal to maximum age'
});

export const heightRangeValidator = z.object({
  min: z.number().min(48).max(96), // 4'0" to 8'0" in inches
  max: z.number().min(48).max(96)
}).refine(data => data.min <= data.max, {
  message: 'Minimum height must be less than or equal to maximum height'
});

export const bigFiveTraitsValidator = z.object({
  openness: z.number().min(0).max(100),
  conscientiousness: z.number().min(0).max(100),
  extraversion: z.number().min(0).max(100),
  agreeableness: z.number().min(0).max(100),
  neuroticism: z.number().min(0).max(100)
});

export const emotionalIntelligenceValidator = z.object({
  selfAwareness: z.number().min(0).max(100),
  selfRegulation: z.number().min(0).max(100),
  motivation: z.number().min(0).max(100),
  empathy: z.number().min(0).max(100),
  socialSkills: z.number().min(0).max(100),
  overall: z.number().min(0).max(100)
});

export const moodAssessmentValidator = z.object({
  overall: z.number().min(1).max(10),
  anxiety: z.number().min(1).max(10),
  happiness: z.number().min(1).max(10),
  stress: z.number().min(1).max(10),
  confidence: z.number().min(1).max(10),
  optimism: z.number().min(1).max(10),
  assessedAt: z.date()
});

// ============================================================================
// AUTHENTICATION VALIDATORS
// ============================================================================

export const loginValidator = z.object({
  email: emailValidator,
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional()
});

export const registerValidator = z.object({
  email: emailValidator,
  password: passwordValidator,
  confirmPassword: z.string(),
  firstName: nameValidator,
  lastName: nameValidator,
  dateOfBirth: z.date().refine(date => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 18;
  }, 'Must be at least 18 years old'),
  gender: genderValidator,
  acceptTerms: z.boolean().refine(val => val === true, 'Must accept terms of service'),
  acceptPrivacy: z.boolean().refine(val => val === true, 'Must accept privacy policy'),
  marketingConsent: z.boolean().optional()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

export const changePasswordValidator = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: passwordValidator,
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

export const forgotPasswordValidator = z.object({
  email: emailValidator
});

export const resetPasswordValidator = z.object({
  token: z.string().min(1, 'Reset token is required'),
  newPassword: passwordValidator,
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

// ============================================================================
// PROFILE VALIDATORS
// ============================================================================

export const updateProfileValidator = z.object({
  firstName: nameValidator.optional(),
  lastName: nameValidator.optional(),
  bio: bioValidator,
  interests: z.array(z.string()).max(20, 'Too many interests').optional(),
  location: locationValidator.optional(),
  height: z.number().min(48).max(96).optional(), // 4'0" to 8'0" in inches
  education: educationLevelValidator.optional(),
  occupation: z.string().max(100).optional(),
  company: z.string().max(100).optional(),
  religion: religionValidator.optional(),
  politicalViews: politicalViewsValidator.optional()
});

export const updatePreferencesValidator = z.object({
  ageRange: ageRangeValidator.optional(),
  distanceRange: z.number().min(1).max(100).optional(),
  genderPreference: z.array(genderValidator).optional(),
  heightRange: heightRangeValidator.optional(),
  educationPreference: z.array(educationLevelValidator).optional(),
  religionPreference: z.array(religionValidator).optional(),
  dealBreakers: z.array(z.string()).max(10).optional(),
  importanceWeights: z.object({
    age: z.number().min(0).max(10),
    distance: z.number().min(0).max(10),
    education: z.number().min(0).max(10),
    religion: z.number().min(0).max(10),
    lifestyle: z.number().min(0).max(10),
    personality: z.number().min(0).max(10),
    values: z.number().min(0).max(10),
    physicalAttraction: z.number().min(0).max(10)
  }).optional()
});

// ============================================================================
// MESSAGING VALIDATORS
// ============================================================================

export const sendMessageValidator = z.object({
  conversationId: z.string().uuid(),
  content: z.string().min(1).max(1000),
  type: z.enum(['text', 'image', 'video', 'audio', 'file', 'location']),
  replyTo: z.string().uuid().optional(),
  attachments: z.array(z.object({
    type: z.string(),
    url: z.string().url(),
    filename: z.string()
  })).max(5).optional()
});

export const reportUserValidator = z.object({
  userId: z.string().uuid(),
  reason: z.string().min(1),
  description: z.string().min(10).max(500),
  evidence: z.array(z.object({
    type: z.string(),
    url: z.string().url(),
    description: z.string()
  })).optional()
});

// ============================================================================
// AI COACHING VALIDATORS
// ============================================================================

export const startCoachingSessionValidator = z.object({
  coachType: z.enum(['dr_love', 'relationship_expert', 'therapist', 'life_coach']),
  sessionType: z.enum([
    'general_coaching',
    'relationship_advice',
    'conflict_resolution',
    'communication_skills',
    'dating_guidance',
    'breakup_support',
    'crisis_intervention'
  ]),
  topic: z.string().min(1).max(200),
  goals: z.array(z.string()).min(1).max(5),
  mood: moodAssessmentValidator.optional()
});

export const sendCoachMessageValidator = z.object({
  sessionId: z.string().uuid(),
  content: z.string().min(1).max(1000),
  isVoice: z.boolean().optional(),
  audioUrl: z.string().url().optional(),
  duration: z.number().min(1).max(300).optional() // 5 minutes max
});

// ============================================================================
// SUBSCRIPTION VALIDATORS
// ============================================================================

export const createSubscriptionValidator = z.object({
  priceId: z.string().min(1),
  paymentMethodId: z.string().min(1),
  trialDays: z.number().min(0).max(30).optional()
});

export const updatePaymentMethodValidator = z.object({
  paymentMethodId: z.string().min(1),
  isDefault: z.boolean().optional(),
  billingAddress: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zipCode: z.string().min(1),
    country: z.string().min(1)
  }).optional()
});

// ============================================================================
// SEARCH VALIDATORS
// ============================================================================

export const searchValidator = z.object({
  query: z.string().min(1).max(100),
  type: z.enum(['all', 'articles', 'podcasts', 'meditations', 'books', 'exercises', 'users']).optional(),
  filters: z.object({
    category: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    dateRange: z.object({
      start: z.string().datetime(),
      end: z.string().datetime()
    }).optional(),
    isPremium: z.boolean().optional(),
    difficulty: z.string().optional(),
    duration: z.object({
      min: z.number().min(0),
      max: z.number().min(0)
    }).optional()
  }).optional(),
  pagination: z.object({
    page: z.number().min(1).optional(),
    limit: z.number().min(1).max(100).optional(),
    sortBy: z.string().optional(),
    sortOrder: z.enum(['asc', 'desc']).optional()
  }).optional()
});

// ============================================================================
// PAGINATION VALIDATORS
// ============================================================================

export const paginationValidator = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

// ============================================================================
// FILE UPLOAD VALIDATORS
// ============================================================================

export const uploadValidator = z.object({
  type: z.enum(['profile_photo', 'message_attachment', 'voice_message', 'evidence', 'resource_content']),
  metadata: z.record(z.any()).optional()
});

// ============================================================================
// NOTIFICATION VALIDATORS
// ============================================================================

export const notificationSettingsValidator = z.object({
  pushNotifications: z.boolean(),
  emailNotifications: z.boolean(),
  smsNotifications: z.boolean(),
  categories: z.record(z.object({
    push: z.boolean(),
    email: z.boolean(),
    sms: z.boolean(),
    frequency: z.enum(['immediate', 'hourly', 'daily', 'weekly', 'never'])
  })),
  quietHours: z.object({
    enabled: z.boolean(),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    timezone: z.string()
  })
});

// ============================================================================
// EXPORT ALL VALIDATORS
// ============================================================================

export {
  // Basic validators
  emailValidator,
  passwordValidator,
  nameValidator,
  phoneValidator,
  bioValidator,
  ageValidator,
  
  // Enum validators
  genderValidator,
  sexualOrientationValidator,
  educationLevelValidator,
  religionValidator,
  politicalViewsValidator,
  attachmentStyleValidator,
  communicationStyleValidator,
  loveLanguageValidator,
  personalityTypeValidator,
  subscriptionTierValidator,
  
  // Object validators
  locationValidator,
  ageRangeValidator,
  heightRangeValidator,
  bigFiveTraitsValidator,
  emotionalIntelligenceValidator,
  moodAssessmentValidator,
  
  // Authentication validators
  loginValidator,
  registerValidator,
  changePasswordValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  
  // Profile validators
  updateProfileValidator,
  updatePreferencesValidator,
  
  // Messaging validators
  sendMessageValidator,
  reportUserValidator,
  
  // AI coaching validators
  startCoachingSessionValidator,
  sendCoachMessageValidator,
  
  // Subscription validators
  createSubscriptionValidator,
  updatePaymentMethodValidator,
  
  // Search validators
  searchValidator,
  
  // Utility validators
  paginationValidator,
  uploadValidator,
  notificationSettingsValidator
};

