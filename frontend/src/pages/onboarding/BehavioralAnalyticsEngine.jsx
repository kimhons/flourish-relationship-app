import React, { useState, useEffect } from 'react';
import { 
  Activity, TrendingUp, Users, Eye, Clock, MousePointer,
  BarChart3, PieChart, Target, Brain, Zap, Filter,
  Calendar, MapPin, Smartphone, Monitor, Tablet,
  Heart, MessageCircle, Camera, Star, Award, Gift,
  Settings, Download, RefreshCw, Play, Pause, AlertCircle
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter, PieChart as RechartsPieChart, Pie, Cell,
  Treemap, FunnelChart, Funnel, LabelList
} from 'recharts';

const BehavioralAnalyticsEngine = () => {
  const [analysisMode, setAnalysisMode] = useState('real_time');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7_days');
  const [selectedSegment, setSelectedSegment] = useState('all_users');
  const [isAnalysisRunning, setIsAnalysisRunning] = useState(true);
  const [insightScore, setInsightScore] = useState(92.4);

  // User behavior segments
  const userSegments = [
    {
      id: 'all_users',
      name: 'All Users',
      count: 156789,
      engagement_score: 87.3,
      retention_rate: 78.9,
      avg_session_duration: '18m 42s',
      conversion_rate: 12.7
    },
    {
      id: 'power_users',
      name: 'Power Users',
      count: 23456,
      engagement_score: 96.8,
      retention_rate: 94.2,
      avg_session_duration: '34m 15s',
      conversion_rate: 28.9
    },
    {
      id: 'casual_users',
      name: 'Casual Users',
      count: 89234,
      engagement_score: 72.1,
      retention_rate: 65.3,
      avg_session_duration: '12m 33s',
      conversion_rate: 8.4
    },
    {
      id: 'new_users',
      name: 'New Users',
      count: 44099,
      engagement_score: 83.7,
      retention_rate: 71.8,
      avg_session_duration: '15m 27s',
      conversion_rate: 9.2
    }
  ];

  // Behavioral patterns
  const behavioralPatterns = [
    {
      id: 'profile_optimization',
      name: 'Profile Optimization Behavior',
      description: 'Users who actively optimize their dating profiles',
      prevalence: 34.7,
      success_correlation: 89.3,
      engagement_impact: 23.8,
      retention_impact: 18.9,
      conversion_impact: 31.2
    },
    {
      id: 'active_messaging',
      name: 'Active Messaging Pattern',
      description: 'Users who initiate and maintain conversations frequently',
      prevalence: 28.9,
      success_correlation: 92.7,
      engagement_impact: 45.6,
      retention_impact: 34.2,
      conversion_impact: 28.7
    },
    {
      id: 'photo_engagement',
      name: 'Photo Engagement Behavior',
      description: 'Users who actively engage with photo features',
      prevalence: 67.3,
      success_correlation: 76.8,
      engagement_impact: 19.4,
      retention_impact: 12.7,
      conversion_impact: 15.3
    },
    {
      id: 'feature_exploration',
      name: 'Feature Exploration Pattern',
      description: 'Users who explore and use advanced features',
      prevalence: 42.1,
      success_correlation: 84.6,
      engagement_impact: 38.9,
      retention_impact: 29.3,
      conversion_impact: 22.8
    },
    {
      id: 'social_validation',
      name: 'Social Validation Seeking',
      description: 'Users who seek likes, matches, and social validation',
      prevalence: 78.4,
      success_correlation: 68.2,
      engagement_impact: 15.7,
      retention_impact: 8.9,
      conversion_impact: 11.4
    },
    {
      id: 'goal_oriented',
      name: 'Goal-Oriented Behavior',
      description: 'Users with clear relationship goals and focused actions',
      prevalence: 23.6,
      success_correlation: 94.8,
      engagement_impact: 52.3,
      retention_impact: 41.7,
      conversion_impact: 38.9
    }
  ];

  // User journey analytics
  const userJourneyStages = [
    {
      stage: 'Discovery',
      users: 100000,
      conversion_rate: 78.9,
      avg_time_spent: '3m 45s',
      drop_off_rate: 21.1,
      key_actions: ['app_download', 'landing_page_view', 'feature_preview']
    },
    {
      stage: 'Registration',
      users: 78900,
      conversion_rate: 89.3,
      avg_time_spent: '7m 12s',
      drop_off_rate: 10.7,
      key_actions: ['account_creation', 'email_verification', 'basic_profile']
    },
    {
      stage: 'Profile Setup',
      users: 70467,
      conversion_rate: 76.4,
      avg_time_spent: '12m 33s',
      drop_off_rate: 23.6,
      key_actions: ['photo_upload', 'bio_completion', 'preferences_set']
    },
    {
      stage: 'First Interaction',
      users: 53837,
      conversion_rate: 67.8,
      avg_time_spent: '18m 27s',
      drop_off_rate: 32.2,
      key_actions: ['first_swipe', 'first_match', 'first_message']
    },
    {
      stage: 'Active Usage',
      users: 36501,
      conversion_rate: 84.2,
      avg_time_spent: '25m 15s',
      drop_off_rate: 15.8,
      key_actions: ['daily_usage', 'multiple_conversations', 'feature_usage']
    },
    {
      stage: 'Conversion',
      users: 30734,
      conversion_rate: 45.7,
      avg_time_spent: '32m 48s',
      drop_off_rate: 54.3,
      key_actions: ['premium_upgrade', 'date_planning', 'relationship_success']
    }
  ];

  // Engagement metrics over time
  const engagementMetrics = [
    { date: '2025-01-01', daily_active: 45230, sessions: 89450, messages: 234560, matches: 12340, photos_viewed: 567890 },
    { date: '2025-01-02', daily_active: 47890, sessions: 92340, messages: 245670, matches: 13120, photos_viewed: 589230 },
    { date: '2025-01-03', daily_active: 46780, sessions: 91230, messages: 238940, matches: 12890, photos_viewed: 578450 },
    { date: '2025-01-04', daily_active: 49120, sessions: 95670, messages: 251230, matches: 13450, photos_viewed: 598760 },
    { date: '2025-01-05', daily_active: 48560, sessions: 94230, messages: 247890, matches: 13280, photos_viewed: 592340 },
    { date: '2025-01-06', daily_active: 51230, sessions: 98450, messages: 259670, matches: 14120, photos_viewed: 612890 },
    { date: '2025-01-07', daily_active: 52340, sessions: 99780, messages: 264530, matches: 14560, photos_viewed: 623450 }
  ];

  // Feature usage analytics
  const featureUsageData = [
    { feature: 'Profile Browsing', usage: 94.7, satisfaction: 87.3, retention_impact: 23.8 },
    { feature: 'Messaging', usage: 78.9, satisfaction: 92.1, retention_impact: 45.6 },
    { feature: 'Photo Sharing', usage: 67.3, satisfaction: 84.7, retention_impact: 19.4 },
    { feature: 'Video Calls', usage: 34.2, satisfaction: 89.6, retention_impact: 38.9 },
    { feature: 'AI Matching', usage: 56.8, satisfaction: 91.3, retention_impact: 31.2 },
    { feature: 'Premium Features', usage: 23.4, satisfaction: 94.8, retention_impact: 52.3 },
    { feature: 'Events & Activities', usage: 42.1, satisfaction: 86.9, retention_impact: 28.7 },
    { feature: 'Safety Features', usage: 89.3, satisfaction: 96.2, retention_impact: 34.5 }
  ];

  // Device and platform analytics
  const deviceAnalytics = [
    { platform: 'iOS Mobile', users: 67890, engagement: 89.3, session_duration: '19m 45s', conversion: 14.2 },
    { platform: 'Android Mobile', users: 78450, engagement: 86.7, session_duration: '17m 33s', conversion: 12.8 },
    { platform: 'Web Desktop', users: 23450, engagement: 92.1, session_duration: '28m 12s', conversion: 18.9 },
    { platform: 'Web Mobile', users: 12340, engagement: 78.9, session_duration: '14m 27s', conversion: 9.7 }
  ];

  // Behavioral insights
  const behavioralInsights = [
    {
      id: 'peak_usage_time',
      title: 'Peak Usage Patterns',
      insight: 'Users are most active between 7-9 PM on weekdays and 2-4 PM on weekends',
      confidence: 96.8,
      impact: 'high',
      recommendation: 'Schedule notifications and new feature releases during peak hours',
      data_points: 2340000
    },
    {
      id: 'photo_success_correlation',
      title: 'Photo Quality Impact',
      insight: 'Users with high-quality photos have 3.4x higher match rates and 2.8x longer conversations',
      confidence: 94.2,
      impact: 'very_high',
      recommendation: 'Implement AI-powered photo optimization suggestions',
      data_points: 1890000
    },
    {
      id: 'messaging_patterns',
      title: 'Successful Messaging Behavior',
      insight: 'Messages sent within 2 hours of matching have 67% higher response rates',
      confidence: 91.7,
      impact: 'high',
      recommendation: 'Send gentle reminders to message new matches quickly',
      data_points: 3450000
    },
    {
      id: 'profile_completion_impact',
      title: 'Profile Completion Benefits',
      insight: 'Complete profiles receive 4.2x more matches and have 89% higher conversion rates',
      confidence: 97.3,
      impact: 'very_high',
      recommendation: 'Gamify profile completion with progress indicators and rewards',
      data_points: 1560000
    },
    {
      id: 'feature_adoption_sequence',
      title: 'Optimal Feature Introduction',
      insight: 'Users who try video calls within first week have 78% higher long-term retention',
      confidence: 89.4,
      impact: 'medium',
      recommendation: 'Introduce video calling earlier in the user journey',
      data_points: 890000
    }
  ];

  // Real-time behavioral events
  const realtimeBehavioralEvents = [
    {
      timestamp: '2025-01-07 14:30:15',
      user_id: 'user_12345',
      event_type: 'profile_optimization',
      action: 'photo_upload',
      context: 'mobile_app',
      engagement_score: 94.7,
      predicted_outcome: 'increased_matches'
    },
    {
      timestamp: '2025-01-07 14:29:42',
      user_id: 'user_67890',
      event_type: 'active_messaging',
      action: 'conversation_initiation',
      context: 'web_desktop',
      engagement_score: 87.3,
      predicted_outcome: 'successful_conversation'
    },
    {
      timestamp: '2025-01-07 14:28:33',
      user_id: 'user_11111',
      event_type: 'feature_exploration',
      action: 'video_call_start',
      context: 'mobile_app',
      engagement_score: 92.8,
      predicted_outcome: 'relationship_progression'
    },
    {
      timestamp: '2025-01-07 14:27:18',
      user_id: 'user_22222',
      event_type: 'social_validation',
      action: 'profile_like_received',
      context: 'mobile_app',
      engagement_score: 76.4,
      predicted_outcome: 'continued_engagement'
    },
    {
      timestamp: '2025-01-07 14:26:05',
      user_id: 'user_33333',
      event_type: 'goal_oriented',
      action: 'premium_feature_usage',
      context: 'web_desktop',
      engagement_score: 98.1,
      predicted_outcome: 'conversion_likely'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAnalysisRunning) {
      interval = setInterval(() => {
        setInsightScore(prev => Math.min(prev + (Math.random() - 0.4) * 0.2, 99));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAnalysisRunning]);

  const toggleAnalysis = () => {
    setIsAnalysisRunning(!isAnalysisRunning);
    console.log(`Behavioral analysis ${!isAnalysisRunning ? 'started' : 'stopped'}`);
  };

  const exportAnalytics = () => {
    console.log('Exporting behavioral analytics data...');
    // In a real app, this would export comprehensive behavioral reports
  };

  const generateInsights = () => {
    console.log('Generating new behavioral insights...');
    // In a real app, this would trigger AI-powered insight generation
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'very_high': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'text-green-600 bg-green-100';
    if (confidence >= 90) return 'text-blue-600 bg-blue-100';
    if (confidence >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const selectedSegmentData = userSegments.find(segment => segment.id === selectedSegment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Activity className="w-8 h-8 text-indigo-600" />
              Behavioral Analytics Engine
            </h1>
            <p className="text-gray-600">
              Advanced user behavior analysis, pattern recognition, and predictive insights for dating success
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={analysisMode}
              onChange={(e) => setAnalysisMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="real_time">Real-time Analysis</option>
              <option value="historical">Historical Analysis</option>
              <option value="predictive">Predictive Modeling</option>
              <option value="comparative">Comparative Analysis</option>
            </select>
            
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="24_hours">Last 24 Hours</option>
              <option value="7_days">Last 7 Days</option>
              <option value="30_days">Last 30 Days</option>
              <option value="90_days">Last 90 Days</option>
            </select>
            
            <select
              value={selectedSegment}
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {userSegments.map((segment) => (
                <option key={segment.id} value={segment.id}>{segment.name}</option>
              ))}
            </select>
            
            <button 
              onClick={generateInsights}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Brain className="w-4 h-4" />
              Generate Insights
            </button>
            
            <button 
              onClick={exportAnalytics}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            
            <button 
              onClick={toggleAnalysis}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isAnalysisRunning 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isAnalysisRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAnalysisRunning ? 'Pause' : 'Start'} Analysis
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{selectedSegmentData?.count.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Users</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Users</h3>
            <p className="text-sm text-gray-600">In selected segment</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{selectedSegmentData?.engagement_score}%</div>
              <div className="text-xs text-gray-500">Engagement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Engagement Score</h3>
            <p className="text-sm text-gray-600">Average engagement</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{selectedSegmentData?.avg_session_duration}</div>
              <div className="text-xs text-gray-500">Session</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Session Duration</h3>
            <p className="text-sm text-gray-600">Average time spent</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{selectedSegmentData?.conversion_rate}%</div>
              <div className="text-xs text-gray-500">Conversion</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Conversion Rate</h3>
            <p className="text-sm text-gray-600">Success rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Heart className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{selectedSegmentData?.retention_rate}%</div>
              <div className="text-xs text-gray-500">Retention</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Retention Rate</h3>
            <p className="text-sm text-gray-600">User retention</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Brain className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{insightScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Insight Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AI Insights</h3>
            <p className="text-sm text-gray-600">Analysis quality</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* User Segments */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              User Segments
            </h3>
            <div className="space-y-3">
              {userSegments.map((segment) => (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`w-full p-3 rounded-lg border transition-colors text-left ${
                    selectedSegment === segment.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{segment.name}</div>
                  <div className="text-sm text-gray-600">{segment.count.toLocaleString()} users</div>
                  <div className="text-xs text-gray-500">
                    {segment.engagement_score}% engagement • {segment.retention_rate}% retention
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Analysis Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Analysis Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Engine Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isAnalysisRunning ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                }`}>
                  {isAnalysisRunning ? 'Running' : 'Stopped'}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Data Processing</span>
                  <span className="font-semibold text-gray-900">94.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500" style={{ width: '94.7%' }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-500">Active Algorithms</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Pattern Recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Predictive Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Behavioral Clustering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Insights</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-900">Peak Activity</div>
                <div className="text-xs text-blue-700">7-9 PM weekdays show highest engagement</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-medium text-green-900">Photo Impact</div>
                <div className="text-xs text-green-700">Quality photos increase matches by 340%</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-sm font-medium text-purple-900">Messaging</div>
                <div className="text-xs text-purple-700">Quick responses boost success by 67%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Engagement Metrics Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Metrics Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="daily_active" stroke="#6366f1" strokeWidth={2} name="Daily Active Users" />
                <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} name="Sessions" />
                <Line type="monotone" dataKey="messages" stroke="#f59e0b" strokeWidth={2} name="Messages" />
                <Line type="monotone" dataKey="matches" stroke="#ef4444" strokeWidth={2} name="Matches" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Behavioral Patterns */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Behavioral Patterns Analysis</h3>
            <div className="space-y-4">
              {behavioralPatterns.map((pattern) => (
                <div key={pattern.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{pattern.name}</h4>
                      <p className="text-sm text-gray-600">{pattern.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-indigo-600">{pattern.prevalence}%</div>
                      <div className="text-xs text-gray-500">prevalence</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-green-600">{pattern.success_correlation}%</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-blue-600">{pattern.engagement_impact}%</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-purple-600">{pattern.retention_impact}%</div>
                      <div className="text-xs text-gray-500">Retention</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-yellow-600">{pattern.conversion_impact}%</div>
                      <div className="text-xs text-gray-500">Conversion</div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${pattern.success_correlation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Journey Funnel */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Journey Funnel Analysis</h3>
            <div className="space-y-4">
              {userJourneyStages.map((stage, index) => (
                <div key={stage.stage} className="relative">
                  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-indigo-600">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{stage.stage}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-indigo-600">{stage.users.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">users</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-sm font-semibold text-green-600">{stage.conversion_rate}%</div>
                          <div className="text-xs text-gray-500">Conversion</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-sm font-semibold text-blue-600">{stage.avg_time_spent}</div>
                          <div className="text-xs text-gray-500">Avg Time</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-sm font-semibold text-red-600">{stage.drop_off_rate}%</div>
                          <div className="text-xs text-gray-500">Drop-off</div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${stage.conversion_rate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {index < userJourneyStages.length - 1 && (
                    <div className="absolute left-4 top-full w-0.5 h-4 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Behavioral Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              AI-Generated Behavioral Insights
            </h3>
            <div className="space-y-4">
              {behavioralInsights.map((insight) => (
                <div key={insight.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-700 mb-2">{insight.insight}</p>
                      <p className="text-sm text-blue-700 bg-blue-50 p-2 rounded">{insight.recommendation}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(insight.confidence)}`}>
                        {insight.confidence}% confidence
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                        {insight.impact.replace('_', ' ')} impact
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{insight.data_points.toLocaleString()} data points analyzed</span>
                    <button className="text-indigo-600 hover:text-indigo-700">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Behavioral Events */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Real-time Behavioral Events
            </h3>
            <div className="space-y-3">
              {realtimeBehavioralEvents.map((event, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <span className="font-medium text-gray-900">{event.user_id}</span>
                        <span className="text-gray-600 ml-2">performed</span>
                        <span className="font-medium text-indigo-600 ml-1">{event.action.replace(/_/g, ' ')}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-purple-600">{event.engagement_score}%</div>
                      <div className="text-xs text-gray-500">engagement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">{event.event_type.replace(/_/g, ' ')}</span>
                      <span className="ml-2">on {event.context.replace(/_/g, ' ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">{event.predicted_outcome.replace(/_/g, ' ')}</span>
                      <span className="text-xs text-gray-500">{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Usage and Device Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Usage Analytics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={featureUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="feature" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="usage" fill="#6366f1" name="Usage %" />
                  <Bar dataKey="satisfaction" fill="#10b981" name="Satisfaction %" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device & Platform Analytics</h3>
              <div className="space-y-3">
                {deviceAnalytics.map((device) => (
                  <div key={device.platform} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{device.platform}</h4>
                      <div className="text-right">
                        <div className="text-sm font-bold text-indigo-600">{device.users.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">users</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{device.engagement}%</div>
                        <div className="text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{device.session_duration}</div>
                        <div className="text-gray-500">Session</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{device.conversion}%</div>
                        <div className="text-gray-500">Conversion</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehavioralAnalyticsEngine;

