import React, { useState, useEffect } from 'react';
import { 
  Brain, User, Heart, Target, Zap, Settings, 
  TrendingUp, Eye, Filter, RefreshCw, Play, Pause,
  Star, Award, Clock, MessageCircle, Camera, MapPin,
  Book, Music, Coffee, Dumbbell, Plane, Palette,
  BarChart, PieChart, Activity, Users, Shield
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter, Cell, PieChart as RechartsPieChart, Pie
} from 'recharts';

const AIPersonalizationEngine = () => {
  const [isEngineActive, setIsEngineActive] = useState(true);
  const [personalizationLevel, setPersonalizationLevel] = useState('adaptive');
  const [selectedProfile, setSelectedProfile] = useState('user_001');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [learningProgress, setLearningProgress] = useState(87.3);

  // User personalization profiles
  const userProfiles = [
    {
      id: 'user_001',
      name: 'Sarah Chen',
      age: 28,
      location: 'San Francisco, CA',
      personalization_score: 94.7,
      engagement_level: 'high',
      preferences_learned: 156,
      interaction_patterns: 'evening_active',
      personality_type: 'extroverted_intuitive',
      relationship_goals: 'long_term_committed',
      communication_style: 'direct_expressive'
    },
    {
      id: 'user_002',
      name: 'Michael Rodriguez',
      age: 32,
      location: 'Austin, TX',
      personalization_score: 91.2,
      engagement_level: 'medium',
      preferences_learned: 134,
      interaction_patterns: 'weekend_focused',
      personality_type: 'introverted_sensing',
      relationship_goals: 'casual_dating',
      communication_style: 'thoughtful_reserved'
    },
    {
      id: 'user_003',
      name: 'Emily Johnson',
      age: 26,
      location: 'New York, NY',
      personalization_score: 96.8,
      engagement_level: 'very_high',
      preferences_learned: 189,
      interaction_patterns: 'consistent_daily',
      personality_type: 'extroverted_feeling',
      relationship_goals: 'serious_relationship',
      communication_style: 'warm_engaging'
    }
  ];

  // Personalization algorithms
  const personalizationAlgorithms = [
    {
      id: 'behavioral_learning',
      name: 'Behavioral Learning AI',
      description: 'Learns from user interactions and adapts interface accordingly',
      accuracy: 94.7,
      learning_speed: 'fast',
      data_points: 1247,
      status: 'active',
      last_update: '2025-01-07 14:30:00'
    },
    {
      id: 'preference_prediction',
      name: 'Preference Prediction',
      description: 'Predicts user preferences based on historical data',
      accuracy: 92.3,
      learning_speed: 'medium',
      data_points: 2156,
      status: 'active',
      last_update: '2025-01-07 13:45:00'
    },
    {
      id: 'contextual_adaptation',
      name: 'Contextual Adaptation',
      description: 'Adapts experience based on time, location, and context',
      accuracy: 89.8,
      learning_speed: 'fast',
      data_points: 987,
      status: 'active',
      last_update: '2025-01-07 14:15:00'
    },
    {
      id: 'emotional_intelligence',
      name: 'Emotional Intelligence',
      description: 'Understands and responds to user emotional states',
      accuracy: 87.5,
      learning_speed: 'slow',
      data_points: 1543,
      status: 'experimental',
      last_update: '2025-01-07 12:20:00'
    }
  ];

  // Personalization metrics
  const personalizationMetrics = [
    { category: 'Interface Adaptation', current: 94.7, target: 95, improvement: 2.3 },
    { category: 'Content Relevance', current: 91.2, target: 90, improvement: 4.7 },
    { category: 'Interaction Efficiency', current: 88.9, target: 85, improvement: 6.2 },
    { category: 'User Satisfaction', current: 96.3, target: 95, improvement: 3.8 },
    { category: 'Engagement Rate', current: 89.7, target: 88, improvement: 5.1 },
    { category: 'Feature Discovery', current: 85.4, target: 80, improvement: 8.9 }
  ];

  // Learning progress over time
  const learningProgress_data = [
    { week: 'Week 1', behavioral: 45, preference: 38, contextual: 42, emotional: 25 },
    { week: 'Week 2', behavioral: 62, preference: 55, contextual: 58, emotional: 35 },
    { week: 'Week 3', behavioral: 78, preference: 71, contextual: 74, emotional: 48 },
    { week: 'Week 4', behavioral: 87, preference: 83, contextual: 85, emotional: 62 },
    { week: 'Week 5', behavioral: 92, preference: 89, contextual: 91, emotional: 74 },
    { week: 'Week 6', behavioral: 95, preference: 92, contextual: 94, emotional: 83 },
    { week: 'Week 7', behavioral: 97, preference: 95, contextual: 96, emotional: 88 }
  ];

  // User interaction patterns
  const interactionPatterns = [
    { time: '6 AM', interactions: 12, engagement: 45, personalization: 67 },
    { time: '9 AM', interactions: 34, engagement: 72, personalization: 84 },
    { time: '12 PM', interactions: 56, engagement: 89, personalization: 92 },
    { time: '3 PM', interactions: 43, engagement: 76, personalization: 88 },
    { time: '6 PM', interactions: 78, engagement: 94, personalization: 96 },
    { time: '9 PM', interactions: 89, engagement: 97, personalization: 98 },
    { time: '12 AM', interactions: 23, engagement: 58, personalization: 71 }
  ];

  // Personalization features
  const personalizationFeatures = [
    {
      id: 'adaptive_ui',
      name: 'Adaptive User Interface',
      description: 'Interface elements adapt based on user behavior and preferences',
      impact_score: 94.7,
      user_satisfaction: 96.2,
      implementation_level: 'full',
      data_points: 2340,
      last_optimization: '2025-01-07 13:30:00'
    },
    {
      id: 'smart_recommendations',
      name: 'Smart Recommendations',
      description: 'AI-powered recommendations for matches, activities, and content',
      impact_score: 92.3,
      user_satisfaction: 94.8,
      implementation_level: 'full',
      data_points: 3120,
      last_optimization: '2025-01-07 14:15:00'
    },
    {
      id: 'contextual_messaging',
      name: 'Contextual Messaging',
      description: 'Messages and notifications adapted to user context and preferences',
      impact_score: 89.8,
      user_satisfaction: 91.7,
      implementation_level: 'partial',
      data_points: 1890,
      last_optimization: '2025-01-07 12:45:00'
    },
    {
      id: 'behavioral_insights',
      name: 'Behavioral Insights',
      description: 'Personalized insights about dating patterns and relationship success',
      impact_score: 87.5,
      user_satisfaction: 89.3,
      implementation_level: 'full',
      data_points: 2670,
      last_optimization: '2025-01-07 11:20:00'
    },
    {
      id: 'preference_learning',
      name: 'Preference Learning',
      description: 'Continuous learning and adaptation of user preferences',
      impact_score: 95.1,
      user_satisfaction: 97.4,
      implementation_level: 'full',
      data_points: 4230,
      last_optimization: '2025-01-07 14:00:00'
    },
    {
      id: 'emotional_adaptation',
      name: 'Emotional Adaptation',
      description: 'Interface and content adaptation based on emotional state detection',
      impact_score: 83.7,
      user_satisfaction: 86.9,
      implementation_level: 'experimental',
      data_points: 1560,
      last_optimization: '2025-01-07 10:30:00'
    }
  ];

  // Real-time personalization data
  const realtimePersonalization = [
    {
      user_id: 'user_001',
      timestamp: '2025-01-07 14:30:00',
      action: 'profile_view',
      personalization_applied: 'adaptive_ui_layout',
      confidence: 94.7,
      result: 'increased_engagement'
    },
    {
      user_id: 'user_002',
      timestamp: '2025-01-07 14:28:00',
      action: 'match_recommendation',
      personalization_applied: 'preference_based_filtering',
      confidence: 91.2,
      result: 'positive_interaction'
    },
    {
      user_id: 'user_003',
      timestamp: '2025-01-07 14:25:00',
      action: 'content_suggestion',
      personalization_applied: 'contextual_relevance',
      confidence: 96.8,
      result: 'content_engagement'
    },
    {
      user_id: 'user_001',
      timestamp: '2025-01-07 14:22:00',
      action: 'notification_timing',
      personalization_applied: 'behavioral_pattern_optimization',
      confidence: 89.3,
      result: 'notification_opened'
    },
    {
      user_id: 'user_002',
      timestamp: '2025-01-07 14:20:00',
      action: 'feature_recommendation',
      personalization_applied: 'usage_pattern_analysis',
      confidence: 87.6,
      result: 'feature_adoption'
    }
  ];

  // Personalization effectiveness metrics
  const effectivenessMetrics = {
    overall_satisfaction: 94.7,
    engagement_improvement: 23.8,
    feature_adoption: 67.3,
    user_retention: 89.2,
    interaction_efficiency: 34.7,
    personalization_accuracy: 92.8
  };

  useEffect(() => {
    let interval;
    if (isEngineActive) {
      interval = setInterval(() => {
        setLearningProgress(prev => Math.min(prev + (Math.random() - 0.3) * 0.5, 99));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isEngineActive]);

  const toggleEngine = () => {
    setIsEngineActive(!isEngineActive);
    console.log(`AI Personalization Engine ${!isEngineActive ? 'activated' : 'deactivated'}`);
  };

  const optimizePersonalization = (featureId) => {
    console.log(`Optimizing personalization for feature: ${featureId}`);
    // In a real app, this would trigger ML model optimization
  };

  const analyzeUserBehavior = (userId) => {
    console.log(`Analyzing behavior patterns for user: ${userId}`);
    // In a real app, this would perform deep behavioral analysis
  };

  const exportPersonalizationData = () => {
    console.log('Exporting personalization analytics data...');
    // In a real app, this would export comprehensive personalization reports
  };

  const getPersonalizationColor = (score) => {
    if (score >= 95) return 'text-green-600 bg-green-100';
    if (score >= 90) return 'text-blue-600 bg-blue-100';
    if (score >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getImplementationColor = (level) => {
    switch (level) {
      case 'full': return 'text-green-600 bg-green-100';
      case 'partial': return 'text-yellow-600 bg-yellow-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEngagementColor = (level) => {
    switch (level) {
      case 'very_high': return 'text-green-600 bg-green-100';
      case 'high': return 'text-blue-600 bg-blue-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const selectedUser = userProfiles.find(user => user.id === selectedProfile);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-600" />
              AI Personalization Engine
            </h1>
            <p className="text-gray-600">
              Advanced AI-driven personalization for enhanced user experience and engagement
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={personalizationLevel}
              onChange={(e) => setPersonalizationLevel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="basic">Basic Personalization</option>
              <option value="adaptive">Adaptive Learning</option>
              <option value="advanced">Advanced AI</option>
              <option value="experimental">Experimental Features</option>
            </select>
            
            <select
              value={selectedProfile}
              onChange={(e) => setSelectedProfile(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {userProfiles.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
            
            <button 
              onClick={exportPersonalizationData}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BarChart className="w-4 h-4" />
              Export Data
            </button>
            
            <button 
              onClick={toggleEngine}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isEngineActive 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isEngineActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isEngineActive ? 'Pause Engine' : 'Start Engine'}
            </button>
          </div>
        </div>
      </div>

      {/* Engine Status */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{effectivenessMetrics.overall_satisfaction}%</div>
              <div className="text-xs text-gray-500">Satisfaction</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Satisfaction</h3>
            <p className="text-sm text-gray-600">User satisfaction score</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{effectivenessMetrics.engagement_improvement}%</div>
              <div className="text-xs text-gray-500">Improvement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Engagement Boost</h3>
            <p className="text-sm text-gray-600">Engagement improvement</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{effectivenessMetrics.personalization_accuracy}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AI Accuracy</h3>
            <p className="text-sm text-gray-600">Personalization accuracy</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{effectivenessMetrics.user_retention}%</div>
              <div className="text-xs text-gray-500">Retention</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Retention</h3>
            <p className="text-sm text-gray-600">Retention improvement</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{effectivenessMetrics.feature_adoption}%</div>
              <div className="text-xs text-gray-500">Adoption</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Feature Adoption</h3>
            <p className="text-sm text-gray-600">New feature adoption</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{effectivenessMetrics.interaction_efficiency}%</div>
              <div className="text-xs text-gray-500">Efficiency</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Interaction Efficiency</h3>
            <p className="text-sm text-gray-600">Efficiency improvement</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Selected User Profile */}
          {selectedUser && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-4 h-4" />
                User Profile
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{selectedUser.name}</h4>
                  <p className="text-sm text-gray-600">{selectedUser.age} years old</p>
                  <p className="text-xs text-gray-500">{selectedUser.location}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Personalization Score</span>
                    <span className="font-semibold text-purple-600">{selectedUser.personalization_score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedUser.personalization_score}%` }}
                    />
                  </div>
                  
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Engagement Level</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(selectedUser.engagement_level)}`}>
                        {selectedUser.engagement_level.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Preferences Learned</span>
                      <span className="font-semibold text-gray-900">{selectedUser.preferences_learned}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Interaction Pattern</span>
                      <span className="text-gray-700">{selectedUser.interaction_patterns.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => analyzeUserBehavior(selectedUser.id)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Analyze Behavior
                </button>
              </div>
            </div>
          )}

          {/* Engine Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Engine Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isEngineActive ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                }`}>
                  {isEngineActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Learning Progress</span>
                  <span className="font-semibold text-gray-900">{learningProgress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${learningProgress}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-500">Active Algorithms</div>
                <div className="space-y-1">
                  {personalizationAlgorithms.filter(algo => algo.status === 'active').map((algo) => (
                    <div key={algo.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">{algo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
                Retrain Models
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Target className="w-4 h-4" />
                Optimize Targeting
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BarChart className="w-4 h-4" />
                View Analytics
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Advanced Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Learning Progress Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Learning Progress Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={learningProgress_data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="behavioral" stroke="#8b5cf6" strokeWidth={2} name="Behavioral Learning" />
                <Line type="monotone" dataKey="preference" stroke="#10b981" strokeWidth={2} name="Preference Prediction" />
                <Line type="monotone" dataKey="contextual" stroke="#f59e0b" strokeWidth={2} name="Contextual Adaptation" />
                <Line type="monotone" dataKey="emotional" stroke="#ef4444" strokeWidth={2} name="Emotional Intelligence" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Personalization Algorithms */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalization Algorithms</h3>
            <div className="space-y-4">
              {personalizationAlgorithms.map((algorithm) => (
                <div key={algorithm.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{algorithm.name}</h4>
                        <p className="text-sm text-gray-600">{algorithm.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        algorithm.status === 'active' ? 'text-green-600 bg-green-100' : 'text-purple-600 bg-purple-100'
                      }`}>
                        {algorithm.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{algorithm.accuracy}%</div>
                      <div className="text-xs text-gray-500">accuracy</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-gray-900">{algorithm.learning_speed}</div>
                      <div className="text-xs text-gray-500">Learning Speed</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-blue-600">{algorithm.data_points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Data Points</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-600">{algorithm.last_update}</div>
                      <div className="text-xs text-gray-500">Last Update</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${algorithm.accuracy}%` }}
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => optimizePersonalization(algorithm.id)}
                      className="flex items-center gap-1 px-3 py-1 text-purple-600 hover:text-purple-700 text-sm"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Optimize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personalization Features */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalization Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalizationFeatures.map((feature) => (
                <div key={feature.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImplementationColor(feature.implementation_level)}`}>
                      {feature.implementation_level}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-purple-600">{feature.impact_score}%</div>
                      <div className="text-xs text-gray-500">Impact Score</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-green-600">{feature.user_satisfaction}%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {feature.data_points.toLocaleString()} data points
                    </div>
                    <button 
                      onClick={() => optimizePersonalization(feature.id)}
                      className="flex items-center gap-1 px-2 py-1 text-blue-600 hover:text-blue-700 text-xs"
                    >
                      <Settings className="w-3 h-3" />
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Personalization Activity */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Real-time Personalization Activity
            </h3>
            <div className="space-y-3">
              {realtimePersonalization.map((activity, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <span className="font-medium text-gray-900">{activity.user_id}</span>
                        <span className="text-gray-600 ml-2">performed</span>
                        <span className="font-medium text-blue-600 ml-1">{activity.action.replace('_', ' ')}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-purple-600">{activity.confidence}%</div>
                      <div className="text-xs text-gray-500">confidence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      Applied: <span className="font-medium">{activity.personalization_applied.replace(/_/g, ' ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">{activity.result.replace('_', ' ')}</span>
                      <span className="text-xs text-gray-500">{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interaction Patterns */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Interaction Patterns</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={interactionPatterns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="interactions" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Interactions" />
                <Area type="monotone" dataKey="engagement" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Engagement" />
                <Area type="monotone" dataKey="personalization" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Personalization Score" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPersonalizationEngine;

