/**
 * Shared Types for Flourish Relationship Platform
 * 
 * This file contains all the core type definitions used across
 * the mobile app, web app, backend, and AI services.
 */

// ============================================================================
// USER TYPES
// ============================================================================

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  sexualOrientation: SexualOrientation;
  location: Location;
  profilePictures: ProfilePicture[];
  bio: string;
  interests: Interest[];
  preferences: UserPreferences;
  personalityProfile: PersonalityProfile;
  relationshipGoals: RelationshipGoals;
  subscriptionTier: SubscriptionTier;
  isVerified: boolean;
  isActive: boolean;
  lastActive: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  height?: number;
  education: EducationLevel;
  occupation: string;
  company?: string;
  income?: IncomeRange;
  religion?: Religion;
  politicalViews?: PoliticalViews;
  lifestyle: LifestylePreferences;
  familyPlans: FamilyPlans;
  communicationStyle: CommunicationStyle;
  loveLanguages: LoveLanguage[];
  dealBreakers: string[];
  values: PersonalValue[];
  hobbies: string[];
  languages: Language[];
  travelPreferences: TravelPreferences;
  fitnessLevel: FitnessLevel;
  smokingStatus: SmokingStatus;
  drinkingStatus: DrinkingStatus;
  petPreferences: PetPreferences;
}

export interface UserPreferences {
  ageRange: AgeRange;
  distanceRange: number;
  genderPreference: Gender[];
  heightRange?: HeightRange;
  educationPreference?: EducationLevel[];
  incomePreference?: IncomeRange[];
  religionPreference?: Religion[];
  lifestylePreferences: LifestylePreferences;
  dealBreakers: string[];
  importanceWeights: ImportanceWeights;
}

// ============================================================================
// PERSONALITY & PSYCHOLOGY TYPES
// ============================================================================

export interface PersonalityProfile {
  bigFive: BigFiveTraits;
  attachmentStyle: AttachmentStyle;
  communicationStyle: CommunicationStyle;
  conflictResolutionStyle: ConflictResolutionStyle;
  emotionalIntelligence: EmotionalIntelligenceScore;
  loveLanguages: LoveLanguage[];
  personalityType: PersonalityType;
  strengthsProfile: StrengthsProfile;
  valuesProfile: ValuesProfile;
  lastAssessed: Date;
}

export interface BigFiveTraits {
  openness: number; // 0-100
  conscientiousness: number; // 0-100
  extraversion: number; // 0-100
  agreeableness: number; // 0-100
  neuroticism: number; // 0-100
}

export interface EmotionalIntelligenceScore {
  selfAwareness: number; // 0-100
  selfRegulation: number; // 0-100
  motivation: number; // 0-100
  empathy: number; // 0-100
  socialSkills: number; // 0-100
  overall: number; // 0-100
}

// ============================================================================
// MATCHING & COMPATIBILITY TYPES
// ============================================================================

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  compatibilityScore: number; // 0-100
  compatibilityBreakdown: CompatibilityBreakdown;
  matchType: MatchType;
  status: MatchStatus;
  likedAt?: Date;
  matchedAt?: Date;
  lastInteraction?: Date;
  conversationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompatibilityBreakdown {
  overall: number; // 0-100
  personality: number; // 0-100
  values: number; // 0-100
  lifestyle: number; // 0-100
  communication: number; // 0-100
  goals: number; // 0-100
  interests: number; // 0-100
  physical: number; // 0-100
  emotional: number; // 0-100
  intellectual: number; // 0-100
}

export interface MatchingAlgorithmResult {
  userId: string;
  potentialMatches: PotentialMatch[];
  algorithmVersion: string;
  generatedAt: Date;
  confidence: number; // 0-100
}

export interface PotentialMatch {
  userId: string;
  compatibilityScore: number;
  compatibilityBreakdown: CompatibilityBreakdown;
  reasonsForMatch: string[];
  potentialChallenges: string[];
  recommendedIceBreakers: string[];
}

// ============================================================================
// COMMUNICATION & MESSAGING TYPES
// ============================================================================

export interface Conversation {
  id: string;
  participants: string[]; // User IDs
  type: ConversationType;
  status: ConversationStatus;
  lastMessage?: Message;
  unreadCount: Record<string, number>; // userId -> unread count
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  type: MessageType;
  attachments?: MessageAttachment[];
  replyTo?: string; // Message ID
  reactions?: MessageReaction[];
  isEdited: boolean;
  isDeleted: boolean;
  deliveredAt?: Date;
  readAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageAttachment {
  id: string;
  type: AttachmentType;
  url: string;
  filename: string;
  size: number;
  mimeType: string;
  thumbnailUrl?: string;
  duration?: number; // for audio/video
  dimensions?: { width: number; height: number }; // for images/video
}

export interface MessageReaction {
  userId: string;
  emoji: string;
  createdAt: Date;
}

// ============================================================================
// AI COACHING TYPES
// ============================================================================

export interface CoachingSession {
  id: string;
  userId: string;
  coachType: CoachType;
  sessionType: SessionType;
  status: SessionStatus;
  topic: string;
  goals: string[];
  transcript: SessionTranscript[];
  insights: CoachingInsight[];
  actionItems: ActionItem[];
  mood: MoodAssessment;
  satisfaction?: number; // 1-5
  duration: number; // seconds
  startedAt: Date;
  endedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SessionTranscript {
  id: string;
  speaker: 'user' | 'coach';
  content: string;
  timestamp: Date;
  sentiment?: SentimentAnalysis;
  topics?: string[];
  confidence: number; // 0-100
}

export interface CoachingInsight {
  id: string;
  type: InsightType;
  category: InsightCategory;
  title: string;
  description: string;
  confidence: number; // 0-100
  actionable: boolean;
  priority: Priority;
  relatedTopics: string[];
  createdAt: Date;
}

export interface ActionItem {
  id: string;
  title: string;
  description: string;
  category: ActionCategory;
  priority: Priority;
  dueDate?: Date;
  isCompleted: boolean;
  completedAt?: Date;
  createdAt: Date;
}

export interface MoodAssessment {
  overall: number; // 1-10
  anxiety: number; // 1-10
  happiness: number; // 1-10
  stress: number; // 1-10
  confidence: number; // 1-10
  optimism: number; // 1-10
  assessedAt: Date;
}

// ============================================================================
// RELATIONSHIP GROWTH TYPES
// ============================================================================

export interface RelationshipGoals {
  primary: RelationshipGoalType;
  timeline: Timeline;
  specificGoals: string[];
  dealBreakers: string[];
  priorities: GoalPriority[];
  flexibility: number; // 1-10
  lastUpdated: Date;
}

export interface RelationshipProgress {
  userId: string;
  partnerId?: string;
  currentStage: RelationshipStage;
  healthScore: number; // 0-100
  growthAreas: GrowthArea[];
  achievements: Achievement[];
  milestones: Milestone[];
  challenges: Challenge[];
  recommendations: Recommendation[];
  lastAssessed: Date;
}

export interface GrowthArea {
  id: string;
  category: GrowthCategory;
  title: string;
  description: string;
  currentLevel: number; // 1-10
  targetLevel: number; // 1-10
  progress: number; // 0-100
  exercises: Exercise[];
  resources: Resource[];
  lastWorkedOn?: Date;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  type: ExerciseType;
  difficulty: Difficulty;
  estimatedDuration: number; // minutes
  instructions: string[];
  isCompleted: boolean;
  completedAt?: Date;
  feedback?: string;
  rating?: number; // 1-5
}

// ============================================================================
// CONTENT & RESOURCES TYPES
// ============================================================================

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  author: string;
  url?: string;
  content?: string;
  duration?: number; // minutes
  difficulty: Difficulty;
  tags: string[];
  isPremium: boolean;
  rating: number; // 0-5
  reviewCount: number;
  thumbnailUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  author: Author;
  category: ArticleCategory;
  tags: string[];
  readingTime: number; // minutes
  isPremium: boolean;
  isPublished: boolean;
  publishedAt?: Date;
  featuredImageUrl?: string;
  seoMetadata: SEOMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  host: string;
  episodeNumber?: number;
  season?: number;
  duration: number; // seconds
  audioUrl: string;
  transcriptUrl?: string;
  category: PodcastCategory;
  tags: string[];
  isPremium: boolean;
  publishedAt: Date;
  thumbnailUrl?: string;
  createdAt: Date;
}

export interface Meditation {
  id: string;
  title: string;
  description: string;
  instructor: string;
  type: MeditationType;
  tradition: MeditationTradition;
  duration: number; // seconds
  audioUrl: string;
  backgroundMusicUrl?: string;
  guidanceLevel: GuidanceLevel;
  tags: string[];
  isPremium: boolean;
  thumbnailUrl?: string;
  createdAt: Date;
}

// ============================================================================
// SUBSCRIPTION & PAYMENT TYPES
// ============================================================================

export interface Subscription {
  id: string;
  userId: string;
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  canceledAt?: Date;
  trialStart?: Date;
  trialEnd?: Date;
  paymentMethodId: string;
  priceId: string;
  amount: number;
  currency: string;
  interval: BillingInterval;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentMethod {
  id: string;
  userId: string;
  type: PaymentMethodType;
  last4: string;
  brand: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
  billingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  subscriptionId?: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  type: TransactionType;
  description: string;
  paymentMethodId: string;
  receiptUrl?: string;
  refundedAmount?: number;
  refundedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// ADMIN & MODERATION TYPES
// ============================================================================

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: AdminRole;
  permissions: Permission[];
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModerationCase {
  id: string;
  type: ModerationType;
  status: ModerationStatus;
  priority: Priority;
  reportedUserId: string;
  reportedBy: string[];
  contentId?: string;
  contentType?: ContentType;
  reason: string;
  description: string;
  evidence: Evidence[];
  assignedTo?: string; // Admin ID
  resolution?: ModerationResolution;
  resolvedAt?: Date;
  resolvedBy?: string; // Admin ID
  createdAt: Date;
  updatedAt: Date;
}

export interface Evidence {
  id: string;
  type: EvidenceType;
  url: string;
  description: string;
  uploadedBy: string;
  createdAt: Date;
}

export interface ModerationResolution {
  action: ModerationAction;
  reason: string;
  duration?: number; // days for temporary actions
  notes: string;
  appealable: boolean;
}

// ============================================================================
// ANALYTICS & METRICS TYPES
// ============================================================================

export interface UserAnalytics {
  userId: string;
  sessionCount: number;
  totalTimeSpent: number; // seconds
  averageSessionDuration: number; // seconds
  featuresUsed: FeatureUsage[];
  conversionEvents: ConversionEvent[];
  retentionMetrics: RetentionMetrics;
  engagementScore: number; // 0-100
  lastUpdated: Date;
}

export interface FeatureUsage {
  feature: string;
  usageCount: number;
  totalTimeSpent: number; // seconds
  lastUsed: Date;
}

export interface ConversionEvent {
  event: string;
  timestamp: Date;
  value?: number;
  metadata?: Record<string, any>;
}

export interface RetentionMetrics {
  day1: boolean;
  day7: boolean;
  day30: boolean;
  day90: boolean;
  lastActive: Date;
}

// ============================================================================
// ENUM TYPES
// ============================================================================

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'non_binary',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say'
}

export enum SexualOrientation {
  STRAIGHT = 'straight',
  GAY = 'gay',
  LESBIAN = 'lesbian',
  BISEXUAL = 'bisexual',
  PANSEXUAL = 'pansexual',
  ASEXUAL = 'asexual',
  DEMISEXUAL = 'demisexual',
  QUEER = 'queer',
  QUESTIONING = 'questioning',
  OTHER = 'other'
}

export enum EducationLevel {
  HIGH_SCHOOL = 'high_school',
  SOME_COLLEGE = 'some_college',
  ASSOCIATES = 'associates',
  BACHELORS = 'bachelors',
  MASTERS = 'masters',
  DOCTORATE = 'doctorate',
  TRADE_SCHOOL = 'trade_school',
  OTHER = 'other'
}

export enum IncomeRange {
  UNDER_25K = 'under_25k',
  RANGE_25K_50K = '25k_50k',
  RANGE_50K_75K = '50k_75k',
  RANGE_75K_100K = '75k_100k',
  RANGE_100K_150K = '100k_150k',
  RANGE_150K_200K = '150k_200k',
  OVER_200K = 'over_200k',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say'
}

export enum Religion {
  CHRISTIAN = 'christian',
  CATHOLIC = 'catholic',
  JEWISH = 'jewish',
  MUSLIM = 'muslim',
  HINDU = 'hindu',
  BUDDHIST = 'buddhist',
  SIKH = 'sikh',
  ATHEIST = 'atheist',
  AGNOSTIC = 'agnostic',
  SPIRITUAL = 'spiritual',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say'
}

export enum PoliticalViews {
  VERY_LIBERAL = 'very_liberal',
  LIBERAL = 'liberal',
  MODERATE = 'moderate',
  CONSERVATIVE = 'conservative',
  VERY_CONSERVATIVE = 'very_conservative',
  LIBERTARIAN = 'libertarian',
  OTHER = 'other',
  PREFER_NOT_TO_SAY = 'prefer_not_to_say'
}

export enum AttachmentStyle {
  SECURE = 'secure',
  ANXIOUS = 'anxious',
  AVOIDANT = 'avoidant',
  DISORGANIZED = 'disorganized'
}

export enum CommunicationStyle {
  DIRECT = 'direct',
  INDIRECT = 'indirect',
  ASSERTIVE = 'assertive',
  PASSIVE = 'passive',
  AGGRESSIVE = 'aggressive',
  PASSIVE_AGGRESSIVE = 'passive_aggressive'
}

export enum ConflictResolutionStyle {
  COLLABORATIVE = 'collaborative',
  COMPETITIVE = 'competitive',
  ACCOMMODATING = 'accommodating',
  AVOIDING = 'avoiding',
  COMPROMISING = 'compromising'
}

export enum LoveLanguage {
  WORDS_OF_AFFIRMATION = 'words_of_affirmation',
  QUALITY_TIME = 'quality_time',
  PHYSICAL_TOUCH = 'physical_touch',
  ACTS_OF_SERVICE = 'acts_of_service',
  RECEIVING_GIFTS = 'receiving_gifts'
}

export enum PersonalityType {
  INTJ = 'intj',
  INTP = 'intp',
  ENTJ = 'entj',
  ENTP = 'entp',
  INFJ = 'infj',
  INFP = 'infp',
  ENFJ = 'enfj',
  ENFP = 'enfp',
  ISTJ = 'istj',
  ISFJ = 'isfj',
  ESTJ = 'estj',
  ESFJ = 'esfj',
  ISTP = 'istp',
  ISFP = 'isfp',
  ESTP = 'estp',
  ESFP = 'esfp'
}

export enum MatchType {
  ALGORITHM = 'algorithm',
  MUTUAL_LIKE = 'mutual_like',
  SUPER_LIKE = 'super_like',
  BOOST = 'boost'
}

export enum MatchStatus {
  PENDING = 'pending',
  MATCHED = 'matched',
  EXPIRED = 'expired',
  UNMATCHED = 'unmatched',
  BLOCKED = 'blocked'
}

export enum ConversationType {
  MATCH = 'match',
  GROUP = 'group',
  SUPPORT = 'support'
}

export enum ConversationStatus {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  BLOCKED = 'blocked',
  DELETED = 'deleted'
}

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  FILE = 'file',
  LOCATION = 'location',
  SYSTEM = 'system'
}

export enum AttachmentType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  DOCUMENT = 'document',
  LOCATION = 'location'
}

export enum CoachType {
  DR_LOVE = 'dr_love',
  RELATIONSHIP_EXPERT = 'relationship_expert',
  THERAPIST = 'therapist',
  LIFE_COACH = 'life_coach'
}

export enum SessionType {
  GENERAL_COACHING = 'general_coaching',
  RELATIONSHIP_ADVICE = 'relationship_advice',
  CONFLICT_RESOLUTION = 'conflict_resolution',
  COMMUNICATION_SKILLS = 'communication_skills',
  DATING_GUIDANCE = 'dating_guidance',
  BREAKUP_SUPPORT = 'breakup_support',
  CRISIS_INTERVENTION = 'crisis_intervention'
}

export enum SessionStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show'
}

export enum InsightType {
  PATTERN_RECOGNITION = 'pattern_recognition',
  BEHAVIORAL_ANALYSIS = 'behavioral_analysis',
  EMOTIONAL_STATE = 'emotional_state',
  COMMUNICATION_FEEDBACK = 'communication_feedback',
  RELATIONSHIP_HEALTH = 'relationship_health',
  GROWTH_OPPORTUNITY = 'growth_opportunity'
}

export enum InsightCategory {
  COMMUNICATION = 'communication',
  EMOTIONAL_INTELLIGENCE = 'emotional_intelligence',
  CONFLICT_RESOLUTION = 'conflict_resolution',
  INTIMACY = 'intimacy',
  TRUST = 'trust',
  COMPATIBILITY = 'compatibility',
  PERSONAL_GROWTH = 'personal_growth'
}

export enum ActionCategory {
  COMMUNICATION = 'communication',
  SELF_REFLECTION = 'self_reflection',
  RELATIONSHIP_BUILDING = 'relationship_building',
  SKILL_DEVELOPMENT = 'skill_development',
  LIFESTYLE_CHANGE = 'lifestyle_change'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum RelationshipGoalType {
  CASUAL_DATING = 'casual_dating',
  SERIOUS_RELATIONSHIP = 'serious_relationship',
  MARRIAGE = 'marriage',
  COMPANIONSHIP = 'companionship',
  FRIENDSHIP = 'friendship'
}

export enum Timeline {
  IMMEDIATE = 'immediate',
  WITHIN_YEAR = 'within_year',
  ONE_TO_THREE_YEARS = 'one_to_three_years',
  THREE_TO_FIVE_YEARS = 'three_to_five_years',
  NO_TIMELINE = 'no_timeline'
}

export enum RelationshipStage {
  SINGLE = 'single',
  DATING = 'dating',
  EXCLUSIVE = 'exclusive',
  COMMITTED = 'committed',
  ENGAGED = 'engaged',
  MARRIED = 'married',
  SEPARATED = 'separated',
  DIVORCED = 'divorced',
  WIDOWED = 'widowed'
}

export enum GrowthCategory {
  COMMUNICATION = 'communication',
  EMOTIONAL_INTELLIGENCE = 'emotional_intelligence',
  CONFLICT_RESOLUTION = 'conflict_resolution',
  INTIMACY = 'intimacy',
  TRUST_BUILDING = 'trust_building',
  SHARED_GOALS = 'shared_goals',
  PERSONAL_DEVELOPMENT = 'personal_development'
}

export enum ExerciseType {
  REFLECTION = 'reflection',
  COMMUNICATION = 'communication',
  MINDFULNESS = 'mindfulness',
  BEHAVIORAL = 'behavioral',
  CREATIVE = 'creative',
  PHYSICAL = 'physical'
}

export enum Difficulty {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export enum ResourceType {
  ARTICLE = 'article',
  VIDEO = 'video',
  PODCAST = 'podcast',
  BOOK = 'book',
  EXERCISE = 'exercise',
  ASSESSMENT = 'assessment',
  MEDITATION = 'meditation',
  COURSE = 'course'
}

export enum ResourceCategory {
  COMMUNICATION = 'communication',
  DATING_ADVICE = 'dating_advice',
  RELATIONSHIP_SKILLS = 'relationship_skills',
  EMOTIONAL_HEALTH = 'emotional_health',
  CONFLICT_RESOLUTION = 'conflict_resolution',
  INTIMACY = 'intimacy',
  PERSONAL_GROWTH = 'personal_growth',
  MARRIAGE_PREPARATION = 'marriage_preparation'
}

export enum MeditationType {
  GUIDED = 'guided',
  UNGUIDED = 'unguided',
  BREATHING = 'breathing',
  BODY_SCAN = 'body_scan',
  LOVING_KINDNESS = 'loving_kindness',
  MINDFULNESS = 'mindfulness',
  VISUALIZATION = 'visualization'
}

export enum MeditationTradition {
  SECULAR = 'secular',
  CHRISTIAN = 'christian',
  BUDDHIST = 'buddhist',
  HINDU = 'hindu',
  ISLAMIC = 'islamic',
  JEWISH = 'jewish',
  OTHER = 'other'
}

export enum GuidanceLevel {
  MINIMAL = 'minimal',
  MODERATE = 'moderate',
  EXTENSIVE = 'extensive'
}

export enum SubscriptionTier {
  FREE = 'free',
  PREMIUM = 'premium',
  ELITE = 'elite'
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  PAST_DUE = 'past_due',
  CANCELED = 'canceled',
  UNPAID = 'unpaid',
  TRIALING = 'trialing'
}

export enum BillingInterval {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export enum PaymentMethodType {
  CARD = 'card',
  BANK_ACCOUNT = 'bank_account',
  PAYPAL = 'paypal',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay'
}

export enum TransactionStatus {
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  CANCELED = 'canceled',
  REFUNDED = 'refunded'
}

export enum TransactionType {
  SUBSCRIPTION = 'subscription',
  ONE_TIME = 'one_time',
  REFUND = 'refund'
}

export enum AdminRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  SUPPORT = 'support',
  ANALYST = 'analyst'
}

export enum Permission {
  USER_MANAGEMENT = 'user_management',
  CONTENT_MODERATION = 'content_moderation',
  ANALYTICS_ACCESS = 'analytics_access',
  SYSTEM_CONFIGURATION = 'system_configuration',
  FINANCIAL_DATA = 'financial_data',
  SUPPORT_TICKETS = 'support_tickets'
}

export enum ModerationType {
  USER_REPORT = 'user_report',
  CONTENT_VIOLATION = 'content_violation',
  SPAM = 'spam',
  HARASSMENT = 'harassment',
  INAPPROPRIATE_CONTENT = 'inappropriate_content',
  FAKE_PROFILE = 'fake_profile',
  SAFETY_CONCERN = 'safety_concern'
}

export enum ModerationStatus {
  PENDING = 'pending',
  IN_REVIEW = 'in_review',
  RESOLVED = 'resolved',
  ESCALATED = 'escalated',
  DISMISSED = 'dismissed'
}

export enum ContentType {
  PROFILE = 'profile',
  MESSAGE = 'message',
  PHOTO = 'photo',
  VIDEO = 'video',
  COMMENT = 'comment'
}

export enum EvidenceType {
  SCREENSHOT = 'screenshot',
  VIDEO_RECORDING = 'video_recording',
  CHAT_LOG = 'chat_log',
  SYSTEM_LOG = 'system_log',
  USER_REPORT = 'user_report'
}

export enum ModerationAction {
  NO_ACTION = 'no_action',
  WARNING = 'warning',
  CONTENT_REMOVAL = 'content_removal',
  TEMPORARY_SUSPENSION = 'temporary_suspension',
  PERMANENT_BAN = 'permanent_ban',
  ACCOUNT_VERIFICATION = 'account_verification'
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export interface Location {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  zipCode?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ProfilePicture {
  id: string;
  url: string;
  thumbnailUrl: string;
  isPrimary: boolean;
  order: number;
  isVerified: boolean;
  uploadedAt: Date;
}

export interface Interest {
  id: string;
  name: string;
  category: string;
  isVerified: boolean;
}

export interface AgeRange {
  min: number;
  max: number;
}

export interface HeightRange {
  min: number; // inches
  max: number; // inches
}

export interface LifestylePreferences {
  fitnessLevel: FitnessLevel;
  smokingStatus: SmokingStatus;
  drinkingStatus: DrinkingStatus;
  dietaryRestrictions: string[];
  petPreferences: PetPreferences;
  socialLevel: number; // 1-10
  adventureLevel: number; // 1-10
}

export interface FamilyPlans {
  wantsChildren: boolean;
  hasChildren: boolean;
  numberOfChildren?: number;
  timeline?: Timeline;
  adoptionOpenness: boolean;
}

export interface TravelPreferences {
  frequency: TravelFrequency;
  style: TravelStyle;
  budget: TravelBudget;
  preferredDestinations: string[];
  passportCountries: string[];
}

export interface ImportanceWeights {
  age: number; // 0-10
  distance: number; // 0-10
  education: number; // 0-10
  income: number; // 0-10
  religion: number; // 0-10
  politics: number; // 0-10
  lifestyle: number; // 0-10
  personality: number; // 0-10
  values: number; // 0-10
  physicalAttraction: number; // 0-10
}

export interface StrengthsProfile {
  top5Strengths: string[];
  developmentAreas: string[];
  lastAssessed: Date;
}

export interface ValuesProfile {
  coreValues: PersonalValue[];
  valuesPriority: string[];
  lastAssessed: Date;
}

export interface GoalPriority {
  goal: string;
  importance: number; // 1-10
  flexibility: number; // 1-10
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  iconUrl: string;
  unlockedAt: Date;
  isRare: boolean;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate?: Date;
  completedAt?: Date;
  progress: number; // 0-100
  category: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  severity: Priority;
  category: string;
  suggestedActions: string[];
  identifiedAt: Date;
  resolvedAt?: Date;
}

export interface Recommendation {
  id: string;
  type: RecommendationType;
  title: string;
  description: string;
  priority: Priority;
  category: string;
  actionUrl?: string;
  expiresAt?: Date;
  createdAt: Date;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  credentials: string[];
  avatarUrl?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface SentimentAnalysis {
  overall: number; // -1 to 1
  emotions: EmotionScore[];
  confidence: number; // 0-1
}

export interface EmotionScore {
  emotion: string;
  score: number; // 0-1
}

// ============================================================================
// ADDITIONAL ENUMS
// ============================================================================

export enum FitnessLevel {
  SEDENTARY = 'sedentary',
  LIGHTLY_ACTIVE = 'lightly_active',
  MODERATELY_ACTIVE = 'moderately_active',
  VERY_ACTIVE = 'very_active',
  EXTREMELY_ACTIVE = 'extremely_active'
}

export enum SmokingStatus {
  NEVER = 'never',
  OCCASIONALLY = 'occasionally',
  REGULARLY = 'regularly',
  TRYING_TO_QUIT = 'trying_to_quit',
  QUIT = 'quit'
}

export enum DrinkingStatus {
  NEVER = 'never',
  RARELY = 'rarely',
  SOCIALLY = 'socially',
  REGULARLY = 'regularly',
  HEAVILY = 'heavily'
}

export enum PetPreferences {
  LOVE_PETS = 'love_pets',
  LIKE_PETS = 'like_pets',
  NEUTRAL = 'neutral',
  DISLIKE_PETS = 'dislike_pets',
  ALLERGIC = 'allergic'
}

export enum TravelFrequency {
  RARELY = 'rarely',
  OCCASIONALLY = 'occasionally',
  REGULARLY = 'regularly',
  FREQUENTLY = 'frequently',
  CONSTANTLY = 'constantly'
}

export enum TravelStyle {
  BUDGET = 'budget',
  MID_RANGE = 'mid_range',
  LUXURY = 'luxury',
  ADVENTURE = 'adventure',
  CULTURAL = 'cultural',
  RELAXATION = 'relaxation'
}

export enum TravelBudget {
  UNDER_1K = 'under_1k',
  RANGE_1K_5K = '1k_5k',
  RANGE_5K_10K = '5k_10k',
  OVER_10K = 'over_10k',
  NO_LIMIT = 'no_limit'
}

export enum PersonalValue {
  HONESTY = 'honesty',
  LOYALTY = 'loyalty',
  COMPASSION = 'compassion',
  INTEGRITY = 'integrity',
  RESPECT = 'respect',
  RESPONSIBILITY = 'responsibility',
  FAIRNESS = 'fairness',
  COURAGE = 'courage',
  PERSEVERANCE = 'perseverance',
  GRATITUDE = 'gratitude',
  HUMILITY = 'humility',
  FORGIVENESS = 'forgiveness',
  GENEROSITY = 'generosity',
  PATIENCE = 'patience',
  WISDOM = 'wisdom',
  CREATIVITY = 'creativity',
  INDEPENDENCE = 'independence',
  SECURITY = 'security',
  ADVENTURE = 'adventure',
  TRADITION = 'tradition',
  INNOVATION = 'innovation',
  SPIRITUALITY = 'spirituality',
  FAMILY = 'family',
  CAREER = 'career',
  HEALTH = 'health',
  WEALTH = 'wealth',
  KNOWLEDGE = 'knowledge',
  BEAUTY = 'beauty',
  JUSTICE = 'justice',
  FREEDOM = 'freedom'
}

export enum Language {
  ENGLISH = 'english',
  SPANISH = 'spanish',
  FRENCH = 'french',
  GERMAN = 'german',
  ITALIAN = 'italian',
  PORTUGUESE = 'portuguese',
  RUSSIAN = 'russian',
  CHINESE = 'chinese',
  JAPANESE = 'japanese',
  KOREAN = 'korean',
  ARABIC = 'arabic',
  HINDI = 'hindi',
  OTHER = 'other'
}

export enum ArticleCategory {
  DATING_TIPS = 'dating_tips',
  RELATIONSHIP_ADVICE = 'relationship_advice',
  COMMUNICATION = 'communication',
  CONFLICT_RESOLUTION = 'conflict_resolution',
  INTIMACY = 'intimacy',
  MARRIAGE = 'marriage',
  BREAKUP_RECOVERY = 'breakup_recovery',
  SELF_IMPROVEMENT = 'self_improvement',
  PSYCHOLOGY = 'psychology',
  RESEARCH = 'research'
}

export enum PodcastCategory {
  RELATIONSHIP_ADVICE = 'relationship_advice',
  DATING_STORIES = 'dating_stories',
  EXPERT_INTERVIEWS = 'expert_interviews',
  PSYCHOLOGY = 'psychology',
  SELF_HELP = 'self_help',
  COMEDY = 'comedy',
  TRUE_STORIES = 'true_stories'
}

export enum RecommendationType {
  PROFILE_IMPROVEMENT = 'profile_improvement',
  COMMUNICATION_TIP = 'communication_tip',
  DATE_IDEA = 'date_idea',
  RESOURCE = 'resource',
  EXERCISE = 'exercise',
  ASSESSMENT = 'assessment',
  COACHING_SESSION = 'coaching_session'
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  timestamp: Date;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  stack?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// ============================================================================
// VALIDATION SCHEMAS (using Zod)
// ============================================================================

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export * from './api';
export * from './auth';
export * from './notifications';
export * from './events';

