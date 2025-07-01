/**
 * Enhanced Assessment Questions
 * Drawing from 100+ years of human relationship wisdom and cross-cultural insights
 */

export const enhancedBigFiveQuestions = [
  // Openness to Experience - Enhanced with Cultural and Historical Wisdom
  {
    id: 'O1_enhanced',
    trait: 'Openness',
    category: 'Intellectual Curiosity',
    text: 'When I encounter an idea that challenges my core beliefs, I...',
    type: 'scenario',
    options: [
      { value: 5, text: 'Feel energized and want to explore it deeply', insight: 'High intellectual courage and growth mindset' },
      { value: 4, text: 'Feel uncomfortable but try to understand it', insight: 'Balanced openness with healthy skepticism' },
      { value: 3, text: 'Prefer to discuss it with others before forming an opinion', insight: 'Collaborative approach to new ideas' },
      { value: 2, text: 'Feel defensive and look for flaws in the reasoning', insight: 'Protective of existing belief system' },
      { value: 1, text: 'Dismiss it if it conflicts with my established views', insight: 'Strong preference for cognitive consistency' }
    ],
    relationshipImplication: 'Predicts how you\'ll handle differences in values, beliefs, and life philosophies with a partner',
    culturalNote: 'Reflects balance between individual exploration and cultural/family loyalty'
  },

  {
    id: 'O2_enhanced',
    trait: 'Openness',
    category: 'Aesthetic Sensitivity',
    text: 'The environment around me affects my mood...',
    type: 'intensity',
    options: [
      { value: 5, text: 'Profoundly - I\'m very sensitive to beauty, chaos, or discord', insight: 'High environmental sensitivity and aesthetic awareness' },
      { value: 4, text: 'Noticeably - I prefer harmonious, beautiful spaces', insight: 'Appreciates beauty and seeks aesthetic harmony' },
      { value: 3, text: 'Somewhat - I notice but can adapt to most environments', insight: 'Moderate environmental awareness with good adaptability' },
      { value: 2, text: 'Minimally - I focus more on people than surroundings', insight: 'People-focused rather than environment-focused' },
      { value: 1, text: 'Rarely - I\'m usually too focused on tasks to notice', insight: 'Task-oriented with low environmental sensitivity' }
    ],
    relationshipImplication: 'Influences how you create and maintain your shared living space and lifestyle preferences',
    culturalNote: 'Varies across cultures that emphasize aesthetic harmony vs. practical functionality'
  },

  {
    id: 'O3_enhanced',
    trait: 'Openness',
    category: 'Values and Tradition',
    text: 'When my values conflict with my partner\'s family traditions, I...',
    type: 'conflict_resolution',
    options: [
      { value: 5, text: 'Stand firmly by my principles regardless of consequences', insight: 'Strong individual values orientation' },
      { value: 4, text: 'Seek creative compromises that honor both perspectives', insight: 'Innovative approach to value conflicts' },
      { value: 3, text: 'Adapt my approach while maintaining core values', insight: 'Flexible expression of consistent values' },
      { value: 2, text: 'Defer to their family\'s established ways', insight: 'Harmony-seeking and tradition-respecting' },
      { value: 1, text: 'Feel torn and struggle to find a comfortable position', insight: 'Difficulty navigating competing value systems' }
    ],
    relationshipImplication: 'Critical for navigating family dynamics and cultural differences in relationships',
    culturalNote: 'Reflects individualist vs. collectivist cultural orientations'
  },

  // Conscientiousness - Enhanced with Commitment and Reliability Depth
  {
    id: 'C1_enhanced',
    trait: 'Conscientiousness',
    category: 'Commitment Depth',
    text: 'When I make a promise to my partner, I...',
    type: 'commitment',
    options: [
      { value: 5, text: 'Consider it a sacred commitment that defines who I am', insight: 'Identity-level commitment and integrity' },
      { value: 4, text: 'Take it very seriously and rarely break my word', insight: 'High reliability and trustworthiness' },
      { value: 3, text: 'Generally follow through unless circumstances change significantly', insight: 'Reliable with reasonable flexibility' },
      { value: 2, text: 'Try my best but sometimes life gets in the way', insight: 'Good intentions with execution challenges' },
      { value: 1, text: 'Make promises with good intentions but struggle with follow-through', insight: 'Optimistic promising with consistency issues' }
    ],
    relationshipImplication: 'Fundamental predictor of relationship trust and long-term stability',
    culturalNote: 'Reflects cultural emphasis on honor, word-keeping, and social contracts'
  },

  {
    id: 'C2_enhanced',
    trait: 'Conscientiousness',
    category: 'Support Consistency',
    text: 'When my partner is going through a difficult time, my support is...',
    type: 'caregiving',
    options: [
      { value: 5, text: 'Unwavering and systematic - I create support structures', insight: 'Highly organized and reliable support provider' },
      { value: 4, text: 'Consistent and thoughtful - I check in regularly', insight: 'Dependable emotional support with good follow-through' },
      { value: 3, text: 'Present when needed but I give them space to process', insight: 'Balanced support with respect for autonomy' },
      { value: 2, text: 'Available when asked but I don\'t want to intrude', insight: 'Respectful but potentially passive support style' },
      { value: 1, text: 'Well-intentioned but sometimes inconsistent', insight: 'Caring but unreliable support patterns' }
    ],
    relationshipImplication: 'Predicts reliability during relationship challenges and life crises',
    culturalNote: 'Reflects cultural norms around caregiving, independence, and family support'
  },

  // Extraversion - Enhanced with Social Energy and Intimacy Nuances
  {
    id: 'E1_enhanced',
    trait: 'Extraversion',
    category: 'Social Recharging',
    text: 'After a long day, I recharge by...',
    type: 'energy_management',
    options: [
      { value: 1, text: 'Spending quiet time alone with my thoughts', insight: 'Strong need for solitude and internal processing' },
      { value: 2, text: 'Having deep one-on-one conversations with close friends', insight: 'Intimate social connection preference' },
      { value: 3, text: 'Engaging in small group activities with familiar people', insight: 'Moderate social energy with familiar comfort' },
      { value: 4, text: 'Going out and being around lots of people and energy', insight: 'High social energy and stimulation seeking' },
      { value: 5, text: 'Seeking new social experiences and meeting new people', insight: 'Maximum social stimulation and novelty seeking' }
    ],
    relationshipImplication: 'Determines social lifestyle compatibility and energy management needs',
    culturalNote: 'Varies across cultures emphasizing community vs. individual reflection'
  },

  {
    id: 'E2_enhanced',
    trait: 'Extraversion',
    category: 'Vulnerability Expression',
    text: 'When I\'m feeling emotionally vulnerable, I...',
    type: 'emotional_sharing',
    options: [
      { value: 1, text: 'Prefer to process alone before sharing with anyone', insight: 'Internal processing with delayed sharing' },
      { value: 2, text: 'Share only with my closest, most trusted person', insight: 'Selective vulnerability with deep trust' },
      { value: 3, text: 'Talk it through with a few close friends or family', insight: 'Moderate social support seeking' },
      { value: 4, text: 'Seek support from my broader social network', insight: 'Comfortable with wider social vulnerability' },
      { value: 5, text: 'Feel comfortable being open with most people I know', insight: 'High comfort with emotional transparency' }
    ],
    relationshipImplication: 'Influences emotional intimacy patterns and support-seeking behavior',
    culturalNote: 'Reflects cultural norms around emotional expression and social support'
  },

  // Agreeableness - Enhanced with Empathy and Conflict Wisdom
  {
    id: 'A1_enhanced',
    trait: 'Agreeableness',
    category: 'Emotional Attunement',
    text: 'When my partner is upset, I...',
    type: 'empathy_response',
    options: [
      { value: 5, text: 'Immediately feel their pain as if it were my own', insight: 'High emotional contagion and empathic absorption' },
      { value: 4, text: 'Feel concerned and want to understand what\'s wrong', insight: 'Strong empathy with healthy boundaries' },
      { value: 3, text: 'Notice their distress and offer appropriate support', insight: 'Balanced empathy and practical support' },
      { value: 2, text: 'Recognize they\'re upset but maintain emotional boundaries', insight: 'Cognitive empathy with emotional protection' },
      { value: 1, text: 'Sometimes miss emotional cues unless they\'re very obvious', insight: 'Limited emotional attunement and awareness' }
    ],
    relationshipImplication: 'Core predictor of emotional intimacy and relationship satisfaction',
    culturalNote: 'Varies across cultures emphasizing emotional expression vs. emotional control'
  },

  {
    id: 'A2_enhanced',
    trait: 'Agreeableness',
    category: 'Forgiveness and Trust',
    text: 'When someone betrays my trust, I...',
    type: 'trust_recovery',
    options: [
      { value: 5, text: 'Feel deeply wounded but usually find a way to forgive', insight: 'High forgiveness capacity with emotional sensitivity' },
      { value: 4, text: 'Need time to process but can rebuild trust gradually', insight: 'Thoughtful forgiveness with trust rebuilding' },
      { value: 3, text: 'Forgive but maintain appropriate boundaries going forward', insight: 'Balanced forgiveness with protective boundaries' },
      { value: 2, text: 'Find it very difficult to trust them again', insight: 'Protective approach to trust and vulnerability' },
      { value: 1, text: 'Cut them out of my life permanently', insight: 'Self-protective with low tolerance for betrayal' }
    ],
    relationshipImplication: 'Critical for relationship repair and long-term trust building',
    culturalNote: 'Reflects cultural values around honor, forgiveness, and social harmony'
  },

  // Neuroticism - Enhanced with Emotional Regulation Sophistication
  {
    id: 'N1_enhanced',
    trait: 'Neuroticism',
    category: 'Relationship Stress Response',
    text: 'When facing relationship stress, I...',
    type: 'stress_management',
    options: [
      { value: 1, text: 'Remain calm and approach problems systematically', insight: 'High emotional regulation and problem-solving focus' },
      { value: 2, text: 'Feel the stress but can think clearly and problem-solve', insight: 'Good stress tolerance with maintained functionality' },
      { value: 3, text: 'Experience anxiety but can usually manage it effectively', insight: 'Moderate stress response with coping skills' },
      { value: 4, text: 'Feel overwhelmed and struggle to think rationally', insight: 'High stress reactivity with cognitive impact' },
      { value: 5, text: 'Become emotionally flooded and need time to recover', insight: 'Intense emotional reactivity requiring recovery time' }
    ],
    relationshipImplication: 'Predicts relationship stability during conflicts and life challenges',
    culturalNote: 'Influenced by cultural norms around emotional expression and stress management'
  },

  {
    id: 'N2_enhanced',
    trait: 'Neuroticism',
    category: 'Security and Reassurance',
    text: 'When my partner seems distant or preoccupied, I...',
    type: 'security_response',
    options: [
      { value: 1, text: 'Give them space and trust they\'ll share when ready', insight: 'High security and trust in relationship stability' },
      { value: 2, text: 'Check in gently to see if they need support', insight: 'Secure with caring attentiveness' },
      { value: 3, text: 'Feel concerned but try not to take it personally', insight: 'Moderate security with some anxiety management' },
      { value: 4, text: 'Worry that I\'ve done something wrong', insight: 'Tendency toward self-blame and relationship anxiety' },
      { value: 5, text: 'Feel anxious and need immediate reassurance', insight: 'High relationship anxiety and reassurance seeking' }
    ],
    relationshipImplication: 'Core predictor of attachment security and relationship anxiety',
    culturalNote: 'Reflects cultural norms around independence, interdependence, and emotional security'
  }
];

export const enhancedAttachmentQuestions = [
  // Secure Attachment - Nuanced Indicators
  {
    id: 'SEC1_enhanced',
    dimension: 'Secure',
    category: 'Autonomy Support',
    text: 'When my partner needs space, I...',
    type: 'autonomy_response',
    options: [
      { value: 5, text: 'Respect their need while staying emotionally available', insight: 'Secure base provision with autonomy support' },
      { value: 4, text: 'Feel comfortable giving space without taking it personally', insight: 'High security with trust in relationship stability' },
      { value: 3, text: 'Support their independence while maintaining connection', insight: 'Balanced autonomy and connection needs' },
      { value: 2, text: 'Trust that space strengthens rather than threatens our bond', insight: 'Sophisticated understanding of relationship dynamics' },
      { value: 1, text: 'See their autonomy as healthy for our relationship', insight: 'Mature perspective on individual growth within relationships' }
    ],
    attachmentImplication: 'Indicates secure attachment with healthy autonomy support',
    developmentalNote: 'Reflects early experiences of consistent, responsive caregiving'
  },

  // Anxious Attachment - Deeper Patterns
  {
    id: 'ANX1_enhanced',
    dimension: 'Anxious',
    category: 'Reassurance Seeking',
    text: 'When my partner doesn\'t respond to texts quickly, I...',
    type: 'communication_anxiety',
    options: [
      { value: 1, text: 'Assume they\'re busy and wait patiently', insight: 'Secure communication expectations' },
      { value: 2, text: 'Feel slightly concerned but don\'t overthink it', insight: 'Mild anxiety with good self-regulation' },
      { value: 3, text: 'Wonder if something\'s wrong but try to stay calm', insight: 'Moderate anxiety with coping attempts' },
      { value: 4, text: 'Feel anxious and imagine worst-case scenarios', insight: 'High anxiety with catastrophic thinking' },
      { value: 5, text: 'Send multiple messages or call to check on them', insight: 'Anxious attachment with protest behaviors' }
    ],
    attachmentImplication: 'Measures anxious attachment and reassurance-seeking patterns',
    developmentalNote: 'May reflect inconsistent early caregiving experiences'
  },

  // Avoidant Attachment - Subtle Manifestations
  {
    id: 'AVO1_enhanced',
    dimension: 'Avoidant',
    category: 'Intimacy Comfort',
    text: 'When my partner wants to discuss our relationship, I...',
    type: 'intimacy_response',
    options: [
      { value: 1, text: 'Welcome the opportunity for deeper connection', insight: 'Secure approach to relationship intimacy' },
      { value: 2, text: 'Engage thoughtfully in the conversation', insight: 'Comfortable with emotional intimacy' },
      { value: 3, text: 'Participate but sometimes feel uncomfortable', insight: 'Mild discomfort with emotional discussions' },
      { value: 4, text: 'Feel pressured and want to change the subject', insight: 'Avoidant response to emotional intimacy' },
      { value: 5, text: 'Become defensive or withdraw emotionally', insight: 'Strong avoidant attachment patterns' }
    ],
    attachmentImplication: 'Indicates avoidant attachment and intimacy avoidance',
    developmentalNote: 'May reflect early experiences of emotional unavailability or rejection'
  }
];

export const enhancedCommunicationQuestions = [
  // Emotional Intelligence in Communication
  {
    id: 'EI1_enhanced',
    category: 'Emotional Attunement',
    text: 'When my partner is upset but says "nothing\'s wrong," I...',
    type: 'emotional_intelligence',
    options: [
      { value: 5, text: 'Gently persist because I can sense their distress', insight: 'High emotional attunement and caring persistence' },
      { value: 4, text: 'Give them space but let them know I\'m available', insight: 'Balanced emotional awareness and respect for autonomy' },
      { value: 3, text: 'Take them at their word but stay attentive', insight: 'Respectful approach with continued awareness' },
      { value: 2, text: 'Feel confused and don\'t know how to respond', insight: 'Limited emotional reading skills' },
      { value: 1, text: 'Feel relieved and don\'t pursue it further', insight: 'Avoidance of emotional complexity' }
    ],
    communicationImplication: 'Predicts ability to navigate emotional subtleties in relationships',
    skillDevelopment: 'Can be improved through emotional intelligence training'
  },

  // Conflict Resolution Wisdom
  {
    id: 'CR1_enhanced',
    category: 'Conflict Philosophy',
    text: 'The most important thing in resolving conflicts is...',
    type: 'conflict_values',
    options: [
      { value: 5, text: 'Understanding each other\'s deeper needs and fears', insight: 'Deep empathy and psychological insight approach' },
      { value: 4, text: 'Finding solutions that strengthen our relationship', insight: 'Relationship-building focus in conflict resolution' },
      { value: 3, text: 'Being fair and logical in our approach', insight: 'Justice and rationality-oriented conflict resolution' },
      { value: 2, text: 'Making sure both people feel heard and respected', insight: 'Process-focused conflict resolution' },
      { value: 1, text: 'Resolving the issue quickly and moving on', insight: 'Efficiency-focused conflict avoidance' }
    ],
    communicationImplication: 'Reveals core values and approach to relationship challenges',
    skillDevelopment: 'Reflects learned conflict resolution strategies and can be developed'
  }
];

// Cultural Adaptation Algorithms
export const culturalAdaptations = {
  collectivist: {
    // Adjust questions for cultures emphasizing family/group harmony
    weightings: {
      agreeableness: 1.2, // Higher weight on harmony and cooperation
      openness: 0.9 // Lower weight on individual exploration
    },
    interpretations: {
      high_agreeableness: 'Strong cultural value alignment and family harmony',
      low_openness: 'Respect for tradition and cultural stability'
    }
  },
  individualist: {
    // Adjust for cultures emphasizing personal autonomy
    weightings: {
      openness: 1.2, // Higher weight on individual exploration
      agreeableness: 0.9 // Lower weight on group harmony
    },
    interpretations: {
      high_openness: 'Strong individual growth and self-actualization drive',
      low_agreeableness: 'Healthy assertiveness and boundary setting'
    }
  }
};

// Adaptive Questioning Logic
export const adaptiveQuestioningRules = {
  // If user shows high neuroticism, ask more about coping strategies
  high_neuroticism: {
    additional_questions: ['stress_coping', 'emotional_regulation', 'support_seeking'],
    interpretation_focus: 'emotional_regulation_skills'
  },
  
  // If user shows avoidant attachment, explore intimacy comfort more deeply
  avoidant_attachment: {
    additional_questions: ['intimacy_comfort', 'vulnerability_sharing', 'emotional_expression'],
    interpretation_focus: 'intimacy_development_potential'
  },
  
  // If user shows anxious attachment, explore security building
  anxious_attachment: {
    additional_questions: ['security_building', 'reassurance_needs', 'trust_development'],
    interpretation_focus: 'security_enhancement_strategies'
  }
};

export default {
  enhancedBigFiveQuestions,
  enhancedAttachmentQuestions,
  enhancedCommunicationQuestions,
  culturalAdaptations,
  adaptiveQuestioningRules
};

