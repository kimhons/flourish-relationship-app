import React, { useState, useEffect } from 'react';
import { 
  Globe, Languages, Users, Heart, MessageCircle, Settings,
  CheckCircle, XCircle, Clock, Eye, Download, Upload,
  Search, Filter, Plus, Edit, Trash2, MoreHorizontal,
  Star, Calendar, ArrowUp, ArrowDown, Minus, Target,
  UserCheck, UserPlus, Network, Code, BookOpen, Terminal,
  Package, Webhook, Flag, BarChart3, PieChart, TrendingUp,
  Activity, Layers, HardDrive, Cpu, GitBranch, Award,
  Navigation, Compass, Map, Plane, Shield, Lock, FileText,
  AlertTriangle, Bell, Mail, Phone, RefreshCw, Info
} from 'lucide-react';

const MultiLanguageSupportCulturalSensitivity = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCulture, setSelectedCulture] = useState(null);
  const [languageFilter, setLanguageFilter] = useState('all');

  const [localizationData, setLocalizationData] = useState({
    overview: {
      supportedLanguages: 47,
      activeCultures: 89,
      translationAccuracy: 97.8,
      culturalAdaptations: 234,
      globalUsers: 2847000,
      localizationScore: 94.7,
      lastUpdate: '2024-11-15',
      nextUpdate: '2024-12-15'
    },
    languages: [
      {
        id: 1,
        name: 'English',
        nativeName: 'English',
        code: 'en',
        region: 'Global',
        status: 'complete',
        translationProgress: 100,
        culturalAdaptation: 98.7,
        speakers: 1500000000,
        priority: 'primary',
        lastUpdate: '2024-11-15',
        translator: 'Native Team',
        qualityScore: 99.2,
        features: [
          'Complete UI translation',
          'Cultural context adaptation',
          'Regional dialect support',
          'Professional terminology',
          'Relationship-specific vocabulary',
          'Emotional expression nuances'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Direct, explicit communication preferred', score: 98.5 },
          { element: 'Relationship Values', adaptation: 'Individual autonomy with partnership', score: 97.8 },
          { element: 'Conflict Resolution', adaptation: 'Open discussion and compromise', score: 96.9 },
          { element: 'Intimacy Expression', adaptation: 'Verbal and physical affection balance', score: 98.1 },
          { element: 'Family Dynamics', adaptation: 'Nuclear family focus with extended support', score: 97.2 },
          { element: 'Gender Roles', adaptation: 'Egalitarian partnership expectations', score: 98.7 }
        ],
        metrics: {
          userSatisfaction: 96.8,
          engagementRate: 87.4,
          retentionRate: 92.1,
          culturalRelevance: 94.7
        }
      },
      {
        id: 2,
        name: 'Spanish',
        nativeName: 'Español',
        code: 'es',
        region: 'Latin America, Spain',
        status: 'complete',
        translationProgress: 98.5,
        culturalAdaptation: 96.4,
        speakers: 500000000,
        priority: 'primary',
        lastUpdate: '2024-11-10',
        translator: 'Professional Team',
        qualityScore: 97.8,
        features: [
          'Regional variant support (Mexico, Argentina, Spain)',
          'Family-oriented relationship context',
          'Religious and traditional value integration',
          'Formal/informal address adaptation',
          'Cultural celebration integration',
          'Extended family consideration'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Warm, expressive, relationship-focused', score: 97.2 },
          { element: 'Relationship Values', adaptation: 'Family-centered with strong partnerships', score: 98.1 },
          { element: 'Conflict Resolution', adaptation: 'Emotional expression with family mediation', score: 95.8 },
          { element: 'Intimacy Expression', adaptation: 'Physical affection and verbal endearments', score: 97.9 },
          { element: 'Family Dynamics', adaptation: 'Extended family involvement and respect', score: 98.5 },
          { element: 'Gender Roles', adaptation: 'Traditional with evolving modern elements', score: 94.7 }
        ],
        metrics: {
          userSatisfaction: 95.2,
          engagementRate: 89.7,
          retentionRate: 91.3,
          culturalRelevance: 96.4
        }
      },
      {
        id: 3,
        name: 'Mandarin Chinese',
        nativeName: '中文',
        code: 'zh',
        region: 'China, Taiwan, Singapore',
        status: 'complete',
        translationProgress: 96.8,
        culturalAdaptation: 94.3,
        speakers: 918000000,
        priority: 'primary',
        lastUpdate: '2024-11-08',
        translator: 'Cultural Specialists',
        qualityScore: 96.1,
        features: [
          'Simplified and Traditional character support',
          'Hierarchical relationship respect',
          'Face-saving communication strategies',
          'Harmony-focused conflict resolution',
          'Generational wisdom integration',
          'Collectivist value adaptation'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Indirect, context-rich, respectful', score: 95.8 },
          { element: 'Relationship Values', adaptation: 'Harmony, stability, family honor', score: 96.7 },
          { element: 'Conflict Resolution', adaptation: 'Face-saving mediation and patience', score: 94.2 },
          { element: 'Intimacy Expression', adaptation: 'Subtle gestures and thoughtful actions', score: 93.9 },
          { element: 'Family Dynamics', adaptation: 'Filial piety and generational respect', score: 97.8 },
          { element: 'Gender Roles', adaptation: 'Traditional respect with modern adaptation', score: 92.1 }
        ],
        metrics: {
          userSatisfaction: 93.7,
          engagementRate: 85.2,
          retentionRate: 88.9,
          culturalRelevance: 94.3
        }
      },
      {
        id: 4,
        name: 'Arabic',
        nativeName: 'العربية',
        code: 'ar',
        region: 'Middle East, North Africa',
        status: 'in-progress',
        translationProgress: 87.3,
        culturalAdaptation: 89.1,
        speakers: 422000000,
        priority: 'high',
        lastUpdate: '2024-10-25',
        translator: 'Regional Experts',
        qualityScore: 91.4,
        features: [
          'Right-to-left text support',
          'Islamic value integration',
          'Regional dialect consideration',
          'Religious context sensitivity',
          'Honor and respect emphasis',
          'Extended family importance'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Respectful, formal, relationship-building', score: 90.5 },
          { element: 'Relationship Values', adaptation: 'Honor, commitment, family blessing', score: 92.3 },
          { element: 'Conflict Resolution', adaptation: 'Elder mediation and religious guidance', score: 88.7 },
          { element: 'Intimacy Expression', adaptation: 'Private affection with public respect', score: 87.9 },
          { element: 'Family Dynamics', adaptation: 'Extended family central role', score: 93.8 },
          { element: 'Gender Roles', adaptation: 'Traditional with respectful partnership', score: 85.2 }
        ],
        metrics: {
          userSatisfaction: 89.4,
          engagementRate: 82.1,
          retentionRate: 85.7,
          culturalRelevance: 89.1
        }
      },
      {
        id: 5,
        name: 'Hindi',
        nativeName: 'हिन्दी',
        code: 'hi',
        region: 'India',
        status: 'complete',
        translationProgress: 95.2,
        culturalAdaptation: 93.8,
        speakers: 602000000,
        priority: 'primary',
        lastUpdate: '2024-11-05',
        translator: 'Cultural Team',
        qualityScore: 94.7,
        features: [
          'Devanagari script support',
          'Joint family system integration',
          'Spiritual and philosophical context',
          'Arranged marriage consideration',
          'Caste and social sensitivity',
          'Regional cultural variations'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Respectful, hierarchical, emotional', score: 94.1 },
          { element: 'Relationship Values', adaptation: 'Dharma, family duty, spiritual connection', score: 95.7 },
          { element: 'Conflict Resolution', adaptation: 'Elder guidance and spiritual wisdom', score: 92.8 },
          { element: 'Intimacy Expression', adaptation: 'Emotional bonding with cultural modesty', score: 91.9 },
          { element: 'Family Dynamics', adaptation: 'Joint family system and respect', score: 96.8 },
          { element: 'Gender Roles', adaptation: 'Traditional with evolving modern balance', score: 90.3 }
        ],
        metrics: {
          userSatisfaction: 92.8,
          engagementRate: 88.4,
          retentionRate: 90.7,
          culturalRelevance: 93.8
        }
      },
      {
        id: 6,
        name: 'Japanese',
        nativeName: '日本語',
        code: 'ja',
        region: 'Japan',
        status: 'complete',
        translationProgress: 97.1,
        culturalAdaptation: 95.6,
        speakers: 125000000,
        priority: 'high',
        lastUpdate: '2024-11-12',
        translator: 'Native Specialists',
        qualityScore: 96.8,
        features: [
          'Hiragana, Katakana, Kanji support',
          'Keigo (honorific language) integration',
          'Wa (harmony) principle emphasis',
          'Group consensus consideration',
          'Seasonal and cultural timing',
          'Subtle communication nuances'
        ],
        culturalElements: [
          { element: 'Communication Style', adaptation: 'Indirect, harmonious, context-sensitive', score: 96.7 },
          { element: 'Relationship Values', adaptation: 'Harmony, mutual respect, dedication', score: 97.2 },
          { element: 'Conflict Resolution', adaptation: 'Consensus-building and face-saving', score: 95.1 },
          { element: 'Intimacy Expression', adaptation: 'Subtle gestures and thoughtful care', score: 94.8 },
          { element: 'Family Dynamics', adaptation: 'Respect for elders and group harmony', score: 96.9 },
          { element: 'Gender Roles', adaptation: 'Traditional respect with modern equality', score: 93.7 }
        ],
        metrics: {
          userSatisfaction: 95.1,
          engagementRate: 86.9,
          retentionRate: 92.4,
          culturalRelevance: 95.6
        }
      }
    ],
    culturalFrameworks: [
      {
        id: 1,
        name: 'Western Individualistic',
        regions: ['North America', 'Western Europe', 'Australia'],
        characteristics: [
          'Individual autonomy emphasis',
          'Direct communication style',
          'Nuclear family focus',
          'Egalitarian relationships',
          'Personal achievement value',
          'Open emotional expression'
        ],
        adaptations: [
          'Personal goal-setting features',
          'Individual progress tracking',
          'Direct feedback mechanisms',
          'Privacy control emphasis',
          'Self-improvement focus',
          'Achievement recognition'
        ],
        userBase: 1247000,
        satisfaction: 94.7,
        implementationScore: 97.2
      },
      {
        id: 2,
        name: 'Collectivist Family-Centered',
        regions: ['East Asia', 'Latin America', 'Middle East'],
        characteristics: [
          'Family harmony priority',
          'Indirect communication',
          'Extended family involvement',
          'Hierarchical respect',
          'Group consensus value',
          'Face-saving importance'
        ],
        adaptations: [
          'Family involvement features',
          'Group decision support',
          'Respectful communication tools',
          'Harmony-focused conflict resolution',
          'Elder wisdom integration',
          'Cultural celebration reminders'
        ],
        userBase: 987000,
        satisfaction: 92.8,
        implementationScore: 94.1
      },
      {
        id: 3,
        name: 'Traditional Religious',
        regions: ['Middle East', 'South Asia', 'Africa'],
        characteristics: [
          'Religious value integration',
          'Traditional gender roles',
          'Community involvement',
          'Spiritual guidance seeking',
          'Honor and respect emphasis',
          'Extended family importance'
        ],
        adaptations: [
          'Religious calendar integration',
          'Spiritual guidance features',
          'Community support tools',
          'Traditional value respect',
          'Honor-based communication',
          'Religious counselor access'
        ],
        userBase: 613000,
        satisfaction: 89.4,
        implementationScore: 91.7
      }
    ],
    translationMetrics: {
      accuracy: {
        overall: 97.8,
        byCategory: [
          { category: 'UI Elements', accuracy: 99.2 },
          { category: 'Relationship Content', accuracy: 97.8 },
          { category: 'Cultural Context', accuracy: 95.4 },
          { category: 'Emotional Expression', accuracy: 96.7 },
          { category: 'Professional Terms', accuracy: 98.1 },
          { category: 'Casual Conversation', accuracy: 97.3 }
        ]
      },
      coverage: {
        totalStrings: 47892,
        translatedStrings: 46847,
        pendingTranslations: 1045,
        qualityAssured: 45234
      },
      performance: {
        loadTime: 1.2,
        memoryUsage: 23.7,
        cacheHitRate: 94.8,
        errorRate: 0.3
      }
    },
    localizationFeatures: [
      {
        id: 1,
        name: 'Dynamic Content Adaptation',
        description: 'Real-time content adaptation based on cultural context',
        status: 'active',
        coverage: 98.7,
        languages: 47,
        features: [
          'Cultural metaphor translation',
          'Context-sensitive examples',
          'Regional preference adaptation',
          'Cultural norm integration',
          'Local relationship patterns',
          'Traditional value respect'
        ]
      },
      {
        id: 2,
        name: 'Cultural Communication Styles',
        description: 'Communication pattern adaptation for different cultures',
        status: 'active',
        coverage: 96.4,
        languages: 42,
        features: [
          'Direct vs. indirect communication',
          'High-context vs. low-context',
          'Formal vs. informal address',
          'Emotional expression norms',
          'Conflict approach styles',
          'Relationship building patterns'
        ]
      },
      {
        id: 3,
        name: 'Religious and Spiritual Integration',
        description: 'Respectful integration of religious and spiritual values',
        status: 'active',
        coverage: 89.1,
        languages: 34,
        features: [
          'Religious calendar awareness',
          'Spiritual guidance options',
          'Prayer and meditation integration',
          'Religious counselor access',
          'Sacred text references',
          'Interfaith relationship support'
        ]
      },
      {
        id: 4,
        name: 'Family Structure Adaptation',
        description: 'Support for diverse family structures and dynamics',
        status: 'active',
        coverage: 94.3,
        languages: 45,
        features: [
          'Nuclear vs. extended family',
          'Multigenerational considerations',
          'Single-parent adaptations',
          'Blended family support',
          'Cultural parenting styles',
          'Elder care integration'
        ]
      }
    ],
    qualityAssurance: {
      processes: [
        'Native speaker review',
        'Cultural expert validation',
        'User testing with target demographics',
        'Continuous feedback integration',
        'Regular accuracy assessments',
        'Cultural sensitivity audits'
      ],
      metrics: {
        reviewCoverage: 98.7,
        errorDetectionRate: 96.4,
        userFeedbackScore: 94.1,
        culturalAccuracy: 93.8,
        linguisticQuality: 97.2,
        contextualRelevance: 95.6
      }
    }
  });

  const tabs = [
    { id: 'overview', label: 'Localization Overview', icon: Globe },
    { id: 'languages', label: 'Language Support', icon: Languages },
    { id: 'cultural', label: 'Cultural Frameworks', icon: Users },
    { id: 'features', label: 'Localization Features', icon: Settings },
    { id: 'quality', label: 'Quality Assurance', icon: CheckCircle },
    { id: 'analytics', label: 'Performance Analytics', icon: BarChart3 }
  ];

  const statusColors = {
    complete: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    pending: 'bg-blue-100 text-blue-800',
    active: 'bg-green-100 text-green-800'
  };

  const priorityColors = {
    primary: 'bg-purple-100 text-purple-800',
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800'
  };

  const getScoreColor = (score) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Localization Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Supported Languages</p>
              <p className="text-2xl font-bold text-blue-600">{localizationData.overview.supportedLanguages}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Languages className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+5 new languages</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cultural Adaptations</p>
              <p className="text-2xl font-bold text-purple-600">{localizationData.overview.activeCultures}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+12 new adaptations</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Translation Accuracy</p>
              <p className={`text-2xl font-bold ${getScoreColor(localizationData.overview.translationAccuracy)}`}>
                {localizationData.overview.translationAccuracy}%
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.1% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {(localizationData.overview.globalUsers / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Globe className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+347K this month</span>
          </div>
        </div>
      </div>

      {/* Global Reach Map */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Global Language Distribution</h3>
          <Globe className="h-5 w-5 text-gray-400" />
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Map className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Interactive global language distribution map</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { region: 'Americas', languages: 12, users: '1.2M' },
                { region: 'Europe', languages: 18, users: '847K' },
                { region: 'Asia-Pacific', languages: 17, users: '798K' }
              ].map((region, index) => (
                <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-xs text-gray-500">{region.region}</p>
                  <p className="text-lg font-bold text-blue-600">{region.languages} languages</p>
                  <p className="text-sm text-gray-600">{region.users} users</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Languages Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Languages</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {localizationData.languages.slice(0, 5).map((language) => (
              <div key={language.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Flag className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{language.name}</p>
                    <p className="text-sm text-gray-500">{language.nativeName} • {language.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getScoreColor(language.qualityScore)}`}>
                    {language.qualityScore}%
                  </p>
                  <p className="text-xs text-gray-500">Quality Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Cultural Framework Distribution</h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {localizationData.culturalFrameworks.map((framework) => (
              <div key={framework.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Heart className="h-4 w-4 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">{framework.name}</p>
                    <p className="text-sm text-gray-500">{framework.userBase.toLocaleString()} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getScoreColor(framework.satisfaction)}`}>
                    {framework.satisfaction}%
                  </p>
                  <p className="text-xs text-gray-500">Satisfaction</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Translation Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Translation Quality Metrics</h3>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizationData.translationMetrics.accuracy.byCategory.map((category, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{category.category}</h4>
                <span className={`text-sm font-bold ${getScoreColor(category.accuracy)}`}>
                  {category.accuracy}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    category.accuracy >= 95 ? 'bg-green-500' :
                    category.accuracy >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${category.accuracy}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Localization Features Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Active Localization Features</h3>
          <Settings className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localizationData.localizationFeatures.map((feature) => (
            <div key={feature.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{feature.name}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[feature.status]}`}>
                  {feature.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{feature.languages} languages</span>
                <span className={`text-sm font-medium ${getScoreColor(feature.coverage)}`}>
                  {feature.coverage}% coverage
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLanguagesTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Language Support</h2>
          <p className="text-gray-600">Comprehensive multi-language support with cultural adaptation</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={languageFilter} 
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Languages</option>
            <option value="complete">Complete</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Language
          </button>
        </div>
      </div>

      {/* Languages Grid */}
      <div className="grid grid-cols-1 gap-6">
        {localizationData.languages.map((language) => (
          <div key={language.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Language Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Languages className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{language.name}</h3>
                    <span className="text-gray-500">({language.nativeName})</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[language.status]}`}>
                      {language.status}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[language.priority]}`}>
                      {language.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{language.region} • {language.speakers.toLocaleString()} speakers</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Last Update: {new Date(language.lastUpdate).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-500">Translator: {language.translator}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getScoreColor(language.qualityScore)}`}>
                  {language.qualityScore}%
                </p>
                <p className="text-sm text-gray-500">Quality Score</p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Translation Progress</span>
                  <span className={`text-sm font-bold ${getScoreColor(language.translationProgress)}`}>
                    {language.translationProgress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      language.translationProgress >= 95 ? 'bg-green-500' :
                      language.translationProgress >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${language.translationProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Cultural Adaptation</span>
                  <span className={`text-sm font-bold ${getScoreColor(language.culturalAdaptation)}`}>
                    {language.culturalAdaptation}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      language.culturalAdaptation >= 95 ? 'bg-green-500' :
                      language.culturalAdaptation >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${language.culturalAdaptation}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">User Satisfaction</span>
                  <span className={`text-sm font-bold ${getScoreColor(language.metrics.userSatisfaction)}`}>
                    {language.metrics.userSatisfaction}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      language.metrics.userSatisfaction >= 95 ? 'bg-green-500' :
                      language.metrics.userSatisfaction >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${language.metrics.userSatisfaction}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Features and Cultural Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {language.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {language.features.length > 4 && (
                    <p className="text-xs text-gray-500 ml-5">+{language.features.length - 4} more features</p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Engagement Rate:</span>
                    <span className="text-sm text-gray-900">{language.metrics.engagementRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Retention Rate:</span>
                    <span className="text-sm text-gray-900">{language.metrics.retentionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cultural Relevance:</span>
                    <span className="text-sm text-gray-900">{language.metrics.culturalRelevance}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Elements Preview */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Cultural Adaptations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {language.culturalElements.slice(0, 3).map((element, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{element.element}</span>
                      <span className={`font-bold ${getScoreColor(element.score)}`}>{element.score}%</span>
                    </div>
                    <p className="text-gray-600 mt-1">{element.adaptation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedLanguage(language)}
                className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Edit className="h-4 w-4 mr-1" />
                Edit Translation
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BarChart3 className="h-4 w-4 mr-1" />
                Analytics
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Language Details Modal */}
      {selectedLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Languages className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedLanguage.name}</h2>
                    <p className="text-gray-600">{selectedLanguage.nativeName} • {selectedLanguage.region}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedLanguage(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Language Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Language Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600">Quality Score</p>
                        <p className="text-2xl font-bold text-blue-900">{selectedLanguage.qualityScore}%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600">Translation Progress</p>
                        <p className="text-2xl font-bold text-green-900">{selectedLanguage.translationProgress}%</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-purple-600">Cultural Adaptation</p>
                        <p className="text-2xl font-bold text-purple-900">{selectedLanguage.culturalAdaptation}%</p>
                      </div>
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-yellow-600">Speakers</p>
                        <p className="text-2xl font-bold text-yellow-900">{(selectedLanguage.speakers / 1000000).toFixed(0)}M</p>
                      </div>
                      <Globe className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Features List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">All Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedLanguage.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Elements Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Elements Details</h3>
                <div className="space-y-3">
                  {selectedLanguage.culturalElements.map((element, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{element.element}</h4>
                        <span className={`text-sm font-bold ${getScoreColor(element.score)}`}>
                          {element.score}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{element.adaptation}</p>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              element.score >= 95 ? 'bg-green-500' :
                              element.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${element.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedLanguage.metrics).map(([key, value]) => (
                    <div key={key} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className={`text-lg font-bold ${getScoreColor(value)}`}>
                          {value}%
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              value >= 95 ? 'bg-green-500' :
                              value >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCulturalTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cultural Frameworks</h2>
          <p className="text-gray-600">Comprehensive cultural adaptation frameworks for global relationship contexts</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Framework
        </button>
      </div>

      {/* Cultural Frameworks Grid */}
      <div className="grid grid-cols-1 gap-6">
        {localizationData.culturalFrameworks.map((framework) => (
          <div key={framework.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Framework Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{framework.name}</h3>
                  <p className="text-sm text-gray-600">{framework.regions.join(', ')}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">{framework.userBase.toLocaleString()} users</span>
                    <span className={`text-xs font-medium ${getScoreColor(framework.satisfaction)}`}>
                      {framework.satisfaction}% satisfaction
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getScoreColor(framework.implementationScore)}`}>
                  {framework.implementationScore}%
                </p>
                <p className="text-sm text-gray-500">Implementation</p>
              </div>
            </div>

            {/* Characteristics and Adaptations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Cultural Characteristics</h4>
                <div className="space-y-2">
                  {framework.characteristics.map((characteristic, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Heart className="h-3 w-3 text-purple-500" />
                      <span>{characteristic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Platform Adaptations</h4>
                <div className="space-y-2">
                  {framework.adaptations.map((adaptation, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{adaptation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Framework Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">User Base</span>
                  <span className="text-sm font-bold text-blue-600">
                    {(framework.userBase / 1000).toFixed(0)}K
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: `${(framework.userBase / 1500000) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Satisfaction</span>
                  <span className={`text-sm font-bold ${getScoreColor(framework.satisfaction)}`}>
                    {framework.satisfaction}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      framework.satisfaction >= 95 ? 'bg-green-500' :
                      framework.satisfaction >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${framework.satisfaction}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Implementation</span>
                  <span className={`text-sm font-bold ${getScoreColor(framework.implementationScore)}`}>
                    {framework.implementationScore}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      framework.implementationScore >= 95 ? 'bg-green-500' :
                      framework.implementationScore >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${framework.implementationScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedCulture(framework)}
                className="inline-flex items-center px-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100"
              >
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Edit className="h-4 w-4 mr-1" />
                Edit Framework
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BarChart3 className="h-4 w-4 mr-1" />
                Analytics
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Users className="h-4 w-4 mr-1" />
                User Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Sensitivity Guidelines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Cultural Sensitivity Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              category: 'Communication Styles',
              guidelines: [
                'Respect direct vs. indirect communication preferences',
                'Adapt formality levels based on cultural norms',
                'Consider high-context vs. low-context communication',
                'Respect silence and pause preferences'
              ]
            },
            {
              category: 'Relationship Values',
              guidelines: [
                'Honor individual vs. collective relationship approaches',
                'Respect traditional vs. modern relationship models',
                'Consider family involvement expectations',
                'Adapt to gender role perspectives'
              ]
            },
            {
              category: 'Conflict Resolution',
              guidelines: [
                'Respect face-saving vs. direct confrontation',
                'Consider mediation and elder involvement',
                'Adapt to emotional expression norms',
                'Honor religious and spiritual guidance'
              ]
            },
            {
              category: 'Intimacy and Affection',
              guidelines: [
                'Respect public vs. private affection norms',
                'Consider physical touch cultural boundaries',
                'Adapt verbal expression of love styles',
                'Honor modesty and privacy expectations'
              ]
            },
            {
              category: 'Family Dynamics',
              guidelines: [
                'Respect nuclear vs. extended family structures',
                'Consider generational hierarchy importance',
                'Adapt to parenting style differences',
                'Honor elder care and respect traditions'
              ]
            },
            {
              category: 'Religious Integration',
              guidelines: [
                'Respect diverse religious and spiritual beliefs',
                'Consider prayer and meditation practices',
                'Honor religious calendar and observances',
                'Provide interfaith relationship support'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">{section.category}</h4>
              <div className="space-y-2">
                {section.guidelines.map((guideline, guidelineIndex) => (
                  <div key={guidelineIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                    <CheckCircle className="h-3 w-3 text-green-500 mt-0.5" />
                    <span>{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFeaturesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Localization Features</h2>
          <p className="text-gray-600">Advanced localization and cultural adaptation features</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Feature
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {localizationData.localizationFeatures.map((feature) => (
          <div key={feature.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Settings className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                  <p className="text-sm text-gray-500">{feature.languages} languages supported</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[feature.status]}`}>
                {feature.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Coverage</span>
                <span className={`text-sm font-bold ${getScoreColor(feature.coverage)}`}>
                  {feature.coverage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    feature.coverage >= 95 ? 'bg-green-500' :
                    feature.coverage >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${feature.coverage}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Key Capabilities</h4>
              {feature.features.slice(0, 4).map((capability, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>{capability}</span>
                </div>
              ))}
              {feature.features.length > 4 && (
                <p className="text-xs text-gray-500 ml-5">+{feature.features.length - 4} more capabilities</p>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                  <Settings className="h-4 w-4 mr-1" />
                  Configure
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Implementation Roadmap */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Feature Implementation Roadmap</h3>
        <div className="space-y-4">
          {[
            { feature: 'Voice and Tone Adaptation', timeline: 'Q1 2025', status: 'planned', priority: 'high', description: 'Adapt communication voice and tone based on cultural preferences' },
            { feature: 'Regional Holiday Integration', timeline: 'Q1 2025', status: 'planned', priority: 'medium', description: 'Integrate regional holidays and celebrations into relationship planning' },
            { feature: 'Cultural Metaphor Translation', timeline: 'Q2 2025', status: 'evaluation', priority: 'medium', description: 'Translate metaphors and idioms to culturally relevant equivalents' },
            { feature: 'Local Relationship Customs', timeline: 'Q2 2025', status: 'evaluation', priority: 'high', description: 'Integrate local dating and relationship customs and traditions' },
            { feature: 'Cultural Color Psychology', timeline: 'Q3 2025', status: 'consideration', priority: 'low', description: 'Adapt UI colors based on cultural color psychology and preferences' },
            { feature: 'Regional Music Integration', timeline: 'Q3 2025', status: 'consideration', priority: 'low', description: 'Integrate regional music preferences for relationship activities' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'planned' ? 'bg-blue-500' :
                  item.status === 'evaluation' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{item.feature}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  item.priority === 'high' ? 'bg-red-100 text-red-800' :
                  item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.priority}
                </span>
                <span className="text-sm text-gray-500">{item.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Implementation Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Technical Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Code className="h-5 w-5 text-blue-600" />
              <h4 className="font-medium text-gray-900">Translation Engine</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Neural machine translation with cultural context</p>
              <p>• Real-time translation API integration</p>
              <p>• Quality assurance automation</p>
              <p>• Continuous learning from user feedback</p>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="h-5 w-5 text-purple-600" />
              <h4 className="font-medium text-gray-900">Cultural Adaptation</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Dynamic content adaptation algorithms</p>
              <p>• Cultural context detection</p>
              <p>• Behavioral pattern analysis</p>
              <p>• Regional preference learning</p>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Globe className="h-5 w-5 text-green-600" />
              <h4 className="font-medium text-gray-900">Global Infrastructure</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Multi-region content delivery</p>
              <p>• Localized data processing</p>
              <p>• Regional compliance adherence</p>
              <p>• Performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQualityTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quality Assurance</h2>
          <p className="text-gray-600">Comprehensive quality assurance processes for localization excellence</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Review
        </button>
      </div>

      {/* QA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Review Coverage</p>
              <p className="text-2xl font-bold text-green-600">{localizationData.qualityAssurance.metrics.reviewCoverage}%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Error Detection</p>
              <p className="text-2xl font-bold text-blue-600">{localizationData.qualityAssurance.metrics.errorDetectionRate}%</p>
            </div>
            <Eye className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">User Feedback</p>
              <p className="text-2xl font-bold text-purple-600">{localizationData.qualityAssurance.metrics.userFeedbackScore}%</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* QA Processes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quality Assurance Processes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {localizationData.qualityAssurance.processes.map((process, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <h4 className="font-medium text-gray-900">{process}</h4>
              </div>
              <p className="text-sm text-gray-600">
                {process === 'Native speaker review' && 'Professional native speakers review all translations for accuracy and naturalness'}
                {process === 'Cultural expert validation' && 'Cultural specialists validate content for cultural appropriateness and sensitivity'}
                {process === 'User testing with target demographics' && 'Real users from target cultures test and provide feedback on localized content'}
                {process === 'Continuous feedback integration' && 'User feedback is continuously collected and integrated into improvement processes'}
                {process === 'Regular accuracy assessments' && 'Systematic assessments of translation accuracy and quality metrics'}
                {process === 'Cultural sensitivity audits' && 'Regular audits to ensure cultural sensitivity and appropriateness across all content'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quality Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(localizationData.qualityAssurance.metrics).map(([key, value]) => (
            <div key={key} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className={`text-lg font-bold ${getScoreColor(value)}`}>
                  {value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    value >= 95 ? 'bg-green-500' :
                    value >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Translation Coverage */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Translation Coverage Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600">{localizationData.translationMetrics.coverage.totalStrings.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Strings</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">{localizationData.translationMetrics.coverage.translatedStrings.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Translated</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-2xl font-bold text-yellow-600">{localizationData.translationMetrics.coverage.pendingTranslations.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <p className="text-2xl font-bold text-purple-600">{localizationData.translationMetrics.coverage.qualityAssured.toLocaleString()}</p>
            <p className="text-sm text-gray-600">QA Approved</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Load Time</p>
                <p className="text-2xl font-bold text-green-600">{localizationData.translationMetrics.performance.loadTime}s</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Memory Usage</p>
                <p className="text-2xl font-bold text-blue-600">{localizationData.translationMetrics.performance.memoryUsage}MB</p>
              </div>
              <HardDrive className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cache Hit Rate</p>
                <p className="text-2xl font-bold text-purple-600">{localizationData.translationMetrics.performance.cacheHitRate}%</p>
              </div>
              <Cpu className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Error Rate</p>
                <p className="text-2xl font-bold text-yellow-600">{localizationData.translationMetrics.performance.errorRate}%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Performance Analytics</h2>
          <p className="text-gray-600">Comprehensive analytics and insights for localization performance</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Reach</p>
              <p className="text-2xl font-bold text-blue-600">89 Countries</p>
            </div>
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">User Growth</p>
              <p className="text-2xl font-bold text-green-600">+23.7%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
              <p className="text-2xl font-bold text-purple-600">87.4%</p>
            </div>
            <Activity className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction</p>
              <p className="text-2xl font-bold text-yellow-600">94.7%</p>
            </div>
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Performance Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cultural Framework Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Language Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {localizationData.languages.map((language) => (
                <tr key={language.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Languages className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{language.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {language.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getScoreColor(language.qualityScore)}`}>
                      {language.qualityScore}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getScoreColor(language.metrics.userSatisfaction)}`}>
                      {language.metrics.userSatisfaction}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getScoreColor(language.metrics.engagementRate)}`}>
                      {language.metrics.engagementRate}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[language.status]}`}>
                      {language.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Multi-Language Support & Cultural Sensitivity</h1>
              <p className="text-gray-600">Comprehensive global localization platform with advanced cultural adaptation</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{localizationData.overview.supportedLanguages} Languages</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'languages' && renderLanguagesTab()}
        {activeTab === 'cultural' && renderCulturalTab()}
        {activeTab === 'features' && renderFeaturesTab()}
        {activeTab === 'quality' && renderQualityTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love Global Platform</p>
                <p className="text-sm opacity-90">Multi-language relationship support with 97.8% translation accuracy across 47 languages and 89 cultural adaptations</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Localization Platform v3.0</p>
              <p className="text-xs opacity-75">Advanced cultural sensitivity with comprehensive global relationship support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageSupportCulturalSensitivity;

