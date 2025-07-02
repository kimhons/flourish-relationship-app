import React, { useState, useEffect } from 'react';
import { 
  Globe, MapPin, Languages, Users, Heart, Star,
  Settings, Bell, Mail, Phone, MessageCircle,
  Search, Filter, Download, Upload, RefreshCw,
  Plus, Edit, Trash2, MoreHorizontal, Info,
  FileText, Clipboard, Award, Zap, Target,
  Calendar, Clock, ArrowUp, ArrowDown, Minus,
  UserCheck, UserPlus, Shield, Lock, Eye,
  Network, GitBranch, Layers, HardDrive, Cpu,
  BookOpen, Terminal, Package, Webhook, Code,
  CheckCircle, AlertTriangle, AlertCircle, XCircle,
  BarChart3, PieChart, TrendingUp, Activity,
  Flag, Compass, Map, Navigation, Plane
} from 'lucide-react';

const GlobalLocalizationCulturalAdaptation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCulture, setSelectedCulture] = useState(null);
  const [localizationFilter, setLocalizationFilter] = useState('all');

  const [localizationData, setLocalizationData] = useState({
    overview: {
      totalRegions: 47,
      supportedLanguages: 23,
      culturalFrameworks: 156,
      activeLocalizations: 89,
      globalUsers: 2847392,
      culturalAccuracy: 94.7,
      localizationCoverage: 87.3,
      adaptationScore: 92.1
    },
    regions: [
      {
        id: 1,
        name: 'North America',
        countries: ['United States', 'Canada', 'Mexico'],
        languages: ['English', 'Spanish', 'French'],
        cultures: ['Western Individualistic', 'Hispanic Collectivistic', 'French Canadian'],
        users: 1247893,
        localizationStatus: 'complete',
        culturalFrameworks: 23,
        adaptationScore: 96.3,
        marketPenetration: 78.4,
        revenueContribution: 45.2,
        lastUpdated: '2024-12-01',
        priority: 'high',
        compliance: ['CCPA', 'PIPEDA'],
        culturalNuances: [
          'Direct communication preferred',
          'Individual achievement focus',
          'Time-oriented culture',
          'Personal space importance'
        ]
      },
      {
        id: 2,
        name: 'Europe',
        countries: ['United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands'],
        languages: ['English', 'German', 'French', 'Spanish', 'Italian', 'Dutch'],
        cultures: ['British Reserved', 'German Direct', 'French Formal', 'Mediterranean Warm'],
        users: 856734,
        localizationStatus: 'active',
        culturalFrameworks: 34,
        adaptationScore: 93.7,
        marketPenetration: 67.2,
        revenueContribution: 28.9,
        lastUpdated: '2024-11-28',
        priority: 'high',
        compliance: ['GDPR', 'DPA'],
        culturalNuances: [
          'Formal communication protocols',
          'Privacy-first approach',
          'Work-life balance emphasis',
          'Cultural diversity respect'
        ]
      },
      {
        id: 3,
        name: 'Asia-Pacific',
        countries: ['Japan', 'South Korea', 'Australia', 'Singapore', 'India'],
        languages: ['Japanese', 'Korean', 'English', 'Mandarin', 'Hindi'],
        cultures: ['Japanese Harmony', 'Korean Hierarchical', 'Australian Casual', 'Indian Family-Centric'],
        users: 567234,
        localizationStatus: 'in-progress',
        culturalFrameworks: 45,
        adaptationScore: 89.2,
        marketPenetration: 34.8,
        revenueContribution: 18.7,
        lastUpdated: '2024-12-03',
        priority: 'high',
        compliance: ['PDPA', 'Privacy Act'],
        culturalNuances: [
          'Hierarchical respect systems',
          'Collective harmony priority',
          'Face-saving importance',
          'Extended family involvement'
        ]
      },
      {
        id: 4,
        name: 'Latin America',
        countries: ['Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru'],
        languages: ['Portuguese', 'Spanish'],
        cultures: ['Brazilian Warm', 'Argentinian Passionate', 'Chilean Conservative'],
        users: 234567,
        localizationStatus: 'planned',
        culturalFrameworks: 28,
        adaptationScore: 85.6,
        marketPenetration: 12.3,
        revenueContribution: 4.8,
        lastUpdated: '2024-11-20',
        priority: 'medium',
        compliance: ['LGPD', 'Local Privacy Laws'],
        culturalNuances: [
          'Warm personal relationships',
          'Family-centered values',
          'Emotional expressiveness',
          'Social gathering importance'
        ]
      },
      {
        id: 5,
        name: 'Middle East & Africa',
        countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Egypt'],
        languages: ['Arabic', 'English', 'Afrikaans'],
        cultures: ['Islamic Traditional', 'African Ubuntu', 'Modern Gulf'],
        users: 89456,
        localizationStatus: 'research',
        culturalFrameworks: 26,
        adaptationScore: 78.9,
        marketPenetration: 5.7,
        revenueContribution: 2.4,
        lastUpdated: '2024-11-15',
        priority: 'low',
        compliance: ['Local Data Laws'],
        culturalNuances: [
          'Religious considerations',
          'Traditional family structures',
          'Community-based decisions',
          'Respect for elders'
        ]
      }
    ],
    culturalFrameworks: [
      {
        id: 1,
        name: 'Western Individualistic Framework',
        description: 'Focus on personal achievement, direct communication, and individual rights',
        regions: ['North America', 'Western Europe', 'Australia'],
        characteristics: [
          'Direct communication style',
          'Individual goal orientation',
          'Personal space respect',
          'Time-conscious culture',
          'Achievement-based success'
        ],
        relationshipPatterns: [
          'Dating autonomy',
          'Personal choice priority',
          'Emotional independence',
          'Conflict resolution through discussion'
        ],
        adaptationStrategies: [
          'Emphasize personal growth',
          'Provide individual coaching',
          'Respect privacy boundaries',
          'Focus on self-improvement'
        ],
        implementationScore: 96.3,
        userSatisfaction: 94.7,
        culturalAccuracy: 97.1
      },
      {
        id: 2,
        name: 'Asian Collectivistic Framework',
        description: 'Emphasis on group harmony, hierarchical respect, and family involvement',
        regions: ['East Asia', 'Southeast Asia', 'South Asia'],
        characteristics: [
          'Indirect communication style',
          'Group harmony priority',
          'Hierarchical respect',
          'Face-saving importance',
          'Collective decision making'
        ],
        relationshipPatterns: [
          'Family involvement in relationships',
          'Long-term commitment focus',
          'Harmony over conflict',
          'Respect for elder guidance'
        ],
        adaptationStrategies: [
          'Include family perspectives',
          'Emphasize harmony building',
          'Respect hierarchical structures',
          'Provide group-based solutions'
        ],
        implementationScore: 89.2,
        userSatisfaction: 91.4,
        culturalAccuracy: 93.8
      },
      {
        id: 3,
        name: 'Latin Expressive Framework',
        description: 'Warm personal relationships, emotional expressiveness, and family-centered values',
        regions: ['Latin America', 'Southern Europe'],
        characteristics: [
          'Warm communication style',
          'Emotional expressiveness',
          'Family-centered values',
          'Social gathering importance',
          'Personal relationship focus'
        ],
        relationshipPatterns: [
          'Passionate relationship expression',
          'Extended family involvement',
          'Social celebration importance',
          'Emotional openness valued'
        ],
        adaptationStrategies: [
          'Encourage emotional expression',
          'Include family dynamics',
          'Celebrate relationship milestones',
          'Provide warm, personal guidance'
        ],
        implementationScore: 85.6,
        userSatisfaction: 88.9,
        culturalAccuracy: 90.2
      }
    ],
    localizationMetrics: {
      languageAccuracy: [
        { language: 'English', accuracy: 99.2, coverage: 100 },
        { language: 'Spanish', accuracy: 96.8, coverage: 95 },
        { language: 'French', accuracy: 94.3, coverage: 90 },
        { language: 'German', accuracy: 93.7, coverage: 88 },
        { language: 'Japanese', accuracy: 91.2, coverage: 85 },
        { language: 'Korean', accuracy: 89.6, coverage: 82 },
        { language: 'Portuguese', accuracy: 87.4, coverage: 78 },
        { language: 'Italian', accuracy: 86.1, coverage: 75 }
      ],
      culturalAdaptation: [
        { framework: 'Western Individualistic', adaptation: 96.3, satisfaction: 94.7 },
        { framework: 'Asian Collectivistic', adaptation: 89.2, satisfaction: 91.4 },
        { framework: 'Latin Expressive', adaptation: 85.6, satisfaction: 88.9 },
        { framework: 'European Formal', adaptation: 93.7, satisfaction: 92.1 },
        { framework: 'Middle Eastern Traditional', adaptation: 78.9, satisfaction: 82.3 }
      ],
      marketPenetration: [
        { region: 'North America', penetration: 78.4, growth: 12.3 },
        { region: 'Europe', penetration: 67.2, growth: 18.7 },
        { region: 'Asia-Pacific', penetration: 34.8, growth: 34.2 },
        { region: 'Latin America', penetration: 12.3, growth: 45.6 },
        { region: 'Middle East & Africa', penetration: 5.7, growth: 67.8 }
      ]
    },
    adaptationStrategies: [
      {
        id: 1,
        strategy: 'Cultural Communication Adaptation',
        description: 'Adapt communication styles to match cultural preferences',
        regions: ['All Regions'],
        implementation: [
          'Direct vs. indirect communication detection',
          'Cultural context awareness',
          'Appropriate formality levels',
          'Non-verbal communication cues'
        ],
        effectiveness: 94.2,
        userFeedback: 'Highly effective in improving cross-cultural understanding'
      },
      {
        id: 2,
        strategy: 'Family Involvement Customization',
        description: 'Adjust family involvement based on cultural norms',
        regions: ['Asia-Pacific', 'Latin America', 'Middle East'],
        implementation: [
          'Family consultation features',
          'Extended family relationship mapping',
          'Cultural ceremony integration',
          'Multi-generational guidance'
        ],
        effectiveness: 91.7,
        userFeedback: 'Significantly improves relationship acceptance and success'
      },
      {
        id: 3,
        strategy: 'Religious and Traditional Considerations',
        description: 'Incorporate religious and traditional values into relationship guidance',
        regions: ['Middle East', 'Asia-Pacific', 'Latin America'],
        implementation: [
          'Religious compatibility assessment',
          'Traditional ceremony guidance',
          'Cultural value alignment',
          'Respectful practice integration'
        ],
        effectiveness: 88.9,
        userFeedback: 'Essential for cultural authenticity and user trust'
      }
    ]
  });

  const tabs = [
    { id: 'overview', label: 'Global Overview', icon: Globe },
    { id: 'regions', label: 'Regional Localization', icon: MapPin },
    { id: 'cultures', label: 'Cultural Frameworks', icon: Users },
    { id: 'languages', label: 'Language Support', icon: Languages },
    { id: 'adaptation', label: 'Cultural Adaptation', icon: Heart },
    { id: 'analytics', label: 'Localization Analytics', icon: BarChart3 }
  ];

  const statusColors = {
    complete: 'bg-green-100 text-green-800',
    active: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    planned: 'bg-purple-100 text-purple-800',
    research: 'bg-gray-100 text-gray-800'
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 95) return 'text-green-600';
    if (accuracy >= 90) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Global Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Regions</p>
              <p className="text-2xl font-bold text-gray-900">{localizationData.overview.totalRegions}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+5 new regions this quarter</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Supported Languages</p>
              <p className="text-2xl font-bold text-gray-900">{localizationData.overview.supportedLanguages}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Languages className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+3 languages added</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cultural Accuracy</p>
              <p className={`text-2xl font-bold ${getAccuracyColor(localizationData.overview.culturalAccuracy)}`}>
                {localizationData.overview.culturalAccuracy}%
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.3% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Users</p>
              <p className="text-2xl font-bold text-gray-900">{localizationData.overview.globalUsers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+23% global growth</span>
          </div>
        </div>
      </div>

      {/* Global Expansion Map */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Global Expansion Map</h3>
          <Map className="h-5 w-5 text-gray-400" />
        </div>
        <div className="h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Globe className="h-24 w-24 text-blue-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">Interactive Global Expansion Map</p>
            <p className="text-gray-500">Visual representation of regional localization status and market penetration</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              {localizationData.regions.map((region) => (
                <div key={region.id} className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Flag className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{region.name}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Users:</span>
                      <span className="text-xs text-gray-900">{region.users.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Penetration:</span>
                      <span className="text-xs text-gray-900">{region.marketPenetration}%</span>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[region.localizationStatus]}`}>
                      {region.localizationStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Localization Performance Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cultural Adaptation Scores */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Cultural Adaptation Scores</h3>
            <Heart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {localizationData.localizationMetrics.culturalAdaptation.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{item.framework}</p>
                  <p className="text-sm text-gray-500">Satisfaction: {item.satisfaction}%</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getAccuracyColor(item.adaptation)}`}>{item.adaptation}%</p>
                  <p className="text-xs text-gray-500">Adaptation Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language Support Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Language Support Status</h3>
            <Languages className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {localizationData.localizationMetrics.languageAccuracy.slice(0, 5).map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">{item.language.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.language}</p>
                    <p className="text-sm text-gray-500">Coverage: {item.coverage}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${getAccuracyColor(item.accuracy)}`}>{item.accuracy}%</p>
                  <p className="text-xs text-gray-500">Accuracy</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Penetration Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Market Penetration Analysis</h3>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {localizationData.localizationMetrics.marketPenetration.map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{item.region}</h4>
                <Compass className="h-4 w-4 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Penetration</span>
                    <span className="text-xs text-gray-900">{item.penetration}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${item.penetration}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Growth</span>
                  <div className="flex items-center space-x-1">
                    <ArrowUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">+{item.growth}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Expansion Roadmap */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Global Expansion Roadmap</h3>
          <Navigation className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {[
            { phase: 'Q1 2025', focus: 'Complete Asia-Pacific Localization', status: 'active', progress: 67 },
            { phase: 'Q2 2025', focus: 'Launch Latin America Expansion', status: 'planned', progress: 23 },
            { phase: 'Q3 2025', focus: 'Middle East & Africa Research', status: 'planned', progress: 12 },
            { phase: 'Q4 2025', focus: 'Advanced Cultural AI Integration', status: 'future', progress: 5 }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'active' ? 'bg-blue-500' :
                  item.status === 'planned' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{item.phase}</p>
                  <p className="text-sm text-gray-600">{item.focus}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{item.progress}%</p>
                <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRegionsTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Regional Localization</h2>
          <p className="text-gray-600">Comprehensive regional adaptation and market penetration analysis</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={localizationFilter} 
            onChange={(e) => setLocalizationFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Regions</option>
            <option value="complete">Complete</option>
            <option value="active">Active</option>
            <option value="planned">Planned</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Region
          </button>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="grid grid-cols-1 gap-6">
        {localizationData.regions.map((region) => (
          <div key={region.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Region Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Flag className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{region.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[region.localizationStatus]}`}>
                      {region.localizationStatus}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[region.priority]}`}>
                      {region.priority} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{region.countries.join(', ')}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Languages: {region.languages.length}</span>
                    <span className="text-xs text-gray-500">Updated: {new Date(region.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            {/* Region Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Users</p>
                <p className="text-lg font-semibold text-gray-900">{region.users.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Adaptation Score</p>
                <p className={`text-lg font-semibold ${getAccuracyColor(region.adaptationScore)}`}>{region.adaptationScore}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Market Penetration</p>
                <p className="text-lg font-semibold text-blue-600">{region.marketPenetration}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Revenue Share</p>
                <p className="text-lg font-semibold text-green-600">{region.revenueContribution}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Frameworks</p>
                <p className="text-lg font-semibold text-purple-600">{region.culturalFrameworks}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Languages</p>
                <p className="text-lg font-semibold text-yellow-600">{region.languages.length}</p>
              </div>
            </div>

            {/* Languages and Cultures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Supported Languages</p>
                <div className="flex flex-wrap gap-2">
                  {region.languages.map((language, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Cultural Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {region.cultures.map((culture, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs">
                      {culture}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cultural Nuances */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Cultural Nuances</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {region.culturalNuances.map((nuance, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{nuance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance and Action Buttons */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Compliance Standards</p>
                <div className="flex flex-wrap gap-1">
                  {region.compliance.map((standard, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs">
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedRegion(region)}
                  className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Details
                </button>
                <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Analytics
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Region Details Modal */}
      {selectedRegion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Flag className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedRegion.name}</h2>
                    <p className="text-gray-600">{selectedRegion.countries.join(', ')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRegion(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Region Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regional Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600">Total Users</p>
                        <p className="text-2xl font-bold text-blue-900">{selectedRegion.users.toLocaleString()}</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600">Market Penetration</p>
                        <p className="text-2xl font-bold text-green-900">{selectedRegion.marketPenetration}%</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-purple-600">Adaptation Score</p>
                        <p className="text-2xl font-bold text-purple-900">{selectedRegion.adaptationScore}%</p>
                      </div>
                      <Heart className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Adaptation Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cultural Nuances</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedRegion.culturalNuances.map((nuance, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{nuance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Supported Languages</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedRegion.languages.map((language, index) => (
                        <div key={index} className="p-3 border border-gray-200 rounded-lg text-center">
                          <p className="font-medium text-gray-900">{language}</p>
                          <p className="text-sm text-gray-500">Active</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderCulturesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cultural Frameworks</h2>
          <p className="text-gray-600">Comprehensive cultural adaptation frameworks and implementation strategies</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Framework
        </button>
      </div>

      {/* Cultural Frameworks Grid */}
      <div className="grid grid-cols-1 gap-6">
        {localizationData.culturalFrameworks.map((framework) => (
          <div key={framework.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Framework Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-gray-600 mb-3">{framework.description}</p>
                <div className="flex flex-wrap gap-2">
                  {framework.regions.map((region, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getAccuracyColor(framework.implementationScore)}`}>
                  {framework.implementationScore}%
                </p>
                <p className="text-sm text-gray-500">Implementation Score</p>
              </div>
            </div>

            {/* Framework Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-600">Implementation</p>
                <p className="text-xl font-bold text-blue-900">{framework.implementationScore}%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm font-medium text-green-600">User Satisfaction</p>
                <p className="text-xl font-bold text-green-900">{framework.userSatisfaction}%</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm font-medium text-purple-600">Cultural Accuracy</p>
                <p className="text-xl font-bold text-purple-900">{framework.culturalAccuracy}%</p>
              </div>
            </div>

            {/* Framework Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Cultural Characteristics</h4>
                <div className="space-y-2">
                  {framework.characteristics.map((characteristic, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{characteristic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Relationship Patterns</h4>
                <div className="space-y-2">
                  {framework.relationshipPatterns.map((pattern, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-700">{pattern}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Adaptation Strategies */}
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-3">Adaptation Strategies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {framework.adaptationStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-4">
              <button 
                onClick={() => setSelectedCulture(framework)}
                className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLanguagesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Language Support</h2>
          <p className="text-gray-600">Comprehensive multi-language support and translation accuracy metrics</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Language
        </button>
      </div>

      {/* Language Support Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {localizationData.localizationMetrics.languageAccuracy.map((language, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">
                    {language.language.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{language.language}</h3>
                  <p className="text-sm text-gray-500">Translation Support</p>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Translation Accuracy</span>
                  <span className={`text-sm font-medium ${getAccuracyColor(language.accuracy)}`}>
                    {language.accuracy}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      language.accuracy >= 95 ? 'bg-green-500' :
                      language.accuracy >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${language.accuracy}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Content Coverage</span>
                  <span className="text-sm font-medium text-gray-900">{language.coverage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${language.coverage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  language.accuracy >= 95 ? 'bg-green-100 text-green-800' :
                  language.accuracy >= 90 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {language.accuracy >= 95 ? 'Excellent' :
                   language.accuracy >= 90 ? 'Good' : 'Needs Improvement'}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Language Performance Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Language Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{localizationData.overview.supportedLanguages}</p>
            <p className="text-sm text-gray-600">Supported Languages</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
              {(localizationData.localizationMetrics.languageAccuracy.reduce((sum, lang) => sum + lang.accuracy, 0) / localizationData.localizationMetrics.languageAccuracy.length).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600">Average Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">
              {(localizationData.localizationMetrics.languageAccuracy.reduce((sum, lang) => sum + lang.coverage, 0) / localizationData.localizationMetrics.languageAccuracy.length).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600">Average Coverage</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">
              {localizationData.localizationMetrics.languageAccuracy.filter(lang => lang.accuracy >= 95).length}
            </p>
            <p className="text-sm text-gray-600">Excellent Quality</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdaptationTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cultural Adaptation</h2>
          <p className="text-gray-600">Advanced cultural adaptation strategies and implementation effectiveness</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Strategy
        </button>
      </div>

      {/* Adaptation Strategies */}
      <div className="grid grid-cols-1 gap-6">
        {localizationData.adaptationStrategies.map((strategy) => (
          <div key={strategy.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{strategy.strategy}</h3>
                <p className="text-gray-600 mb-3">{strategy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.regions.map((region, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getAccuracyColor(strategy.effectiveness)}`}>
                  {strategy.effectiveness}%
                </p>
                <p className="text-sm text-gray-500">Effectiveness</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Implementation Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {strategy.implementation.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">User Feedback</h4>
              <p className="text-sm text-blue-800">{strategy.userFeedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Localization Analytics</h2>
          <p className="text-gray-600">Comprehensive analytics and insights for global localization performance</p>
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
              <p className="text-2xl font-bold text-gray-900">{localizationData.overview.totalRegions} regions</p>
            </div>
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cultural Accuracy</p>
              <p className="text-2xl font-bold text-green-600">{localizationData.overview.culturalAccuracy}%</p>
            </div>
            <Heart className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Localization Coverage</p>
              <p className="text-2xl font-bold text-purple-600">{localizationData.overview.localizationCoverage}%</p>
            </div>
            <Target className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Adaptation Score</p>
              <p className="text-2xl font-bold text-yellow-600">{localizationData.overview.adaptationScore}%</p>
            </div>
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cultural Adaptation Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Localization Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penetration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adaptation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {localizationData.regions.map((region) => (
                <tr key={region.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Flag className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{region.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.users.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.marketPenetration}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getAccuracyColor(region.adaptationScore)}`}>
                      {region.adaptationScore}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {region.revenueContribution}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[region.localizationStatus]}`}>
                      {region.localizationStatus}
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
              <h1 className="text-3xl font-bold text-gray-900">Global Localization & Cultural Adaptation</h1>
              <p className="text-gray-600">Comprehensive international expansion and cultural adaptation platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{localizationData.overview.totalRegions} Regions Active</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">GL</span>
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
        {activeTab === 'regions' && renderRegionsTab()}
        {activeTab === 'cultures' && renderCulturesTab()}
        {activeTab === 'languages' && renderLanguagesTab()}
        {activeTab === 'adaptation' && renderAdaptationTab()}
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
                <p className="text-sm opacity-90">Culturally-aware relationship guidance across 47 regions worldwide</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Global Localization v2.0</p>
              <p className="text-xs opacity-75">Advanced cultural adaptation with 94.7% accuracy across diverse populations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLocalizationCulturalAdaptation;

