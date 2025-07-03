import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  Activity, 
  Clock, 
  Heart, 
  Star, 
  Award, 
  Bell, 
  Mail, 
  MessageSquare, 
  Play, 
  Pause, 
  Settings, 
  BarChart3, 
  PieChart, 
  Calendar, 
  Filter, 
  Search, 
  Download, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  ArrowUp, 
  ArrowDown, 
  Plus, 
  Edit3, 
  Eye, 
  MousePointer, 
  Share2, 
  ThumbsUp, 
  MessageCircle, 
  Bookmark, 
  Gift, 
  Trophy, 
  Flame, 
  Sparkles, 
  Gamepad2, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  ExternalLink,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Navigation,
  Layers,
  Database,
  Code,
  FileText,
  Image,
  Video,
  Mic,
  Link,
  Hash,
  DollarSign,
  Percent,
  UserPlus,
  UserMinus,
  UserCheck,
  Send,
  Repeat,
  RotateCcw,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  X,
  Check
} from 'lucide-react';

const EngagementOptimization = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dateRange, setDateRange] = useState('7days');
  const [engagementData, setEngagementData] = useState({});
  const [campaigns, setCampaigns] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Engagement metrics
  const [metrics, setMetrics] = useState({
    dailyActiveUsers: 12847,
    weeklyActiveUsers: 45672,
    monthlyActiveUsers: 156789,
    averageSessionTime: 8.4,
    engagementRate: 67.3,
    retentionRate: 78.9,
    featureAdoption: 45.2,
    socialShares: 3456
  });

  // Engagement campaigns data
  useEffect(() => {
    const sampleCampaigns = [
      {
        id: 1,
        name: 'Welcome Series',
        type: 'onboarding',
        status: 'active',
        trigger: 'user_signup',
        audience: 'new_users',
        startDate: '2025-01-01',
        endDate: '2025-03-31',
        participants: 3456,
        engagementRate: 78.5,
        conversionRate: 23.4,
        steps: [
          { step: 'Welcome Email', completion: 89.2, engagement: 67.8 },
          { step: 'Profile Setup', completion: 76.4, engagement: 82.1 },
          { step: 'First Assessment', completion: 64.7, engagement: 91.3 },
          { step: 'Feature Tour', completion: 58.9, engagement: 74.6 }
        ],
        performance: {
          opens: 2847,
          clicks: 1923,
          conversions: 809
        }
      },
      {
        id: 2,
        name: 'Re-engagement Campaign',
        type: 'retention',
        status: 'active',
        trigger: 'inactive_7_days',
        audience: 'dormant_users',
        startDate: '2024-12-15',
        endDate: '2025-02-15',
        participants: 2890,
        engagementRate: 34.7,
        conversionRate: 12.8,
        steps: [
          { step: 'Miss You Email', completion: 45.3, engagement: 28.9 },
          { step: 'Special Offer', completion: 38.7, engagement: 52.4 },
          { step: 'Success Stories', completion: 29.1, engagement: 67.8 },
          { step: 'Final Reminder', completion: 22.6, engagement: 41.2 }
        ],
        performance: {
          opens: 1309,
          clicks: 756,
          conversions: 370
        }
      },
      {
        id: 3,
        name: 'Feature Adoption Drive',
        type: 'feature_promotion',
        status: 'paused',
        trigger: 'feature_available',
        audience: 'premium_users',
        startDate: '2024-12-01',
        endDate: '2025-01-31',
        participants: 1567,
        engagementRate: 56.8,
        conversionRate: 34.2,
        steps: [
          { step: 'Feature Announcement', completion: 78.9, engagement: 45.6 },
          { step: 'Tutorial Video', completion: 67.3, engagement: 89.2 },
          { step: 'Hands-on Guide', completion: 54.7, engagement: 76.4 },
          { step: 'Success Celebration', completion: 48.2, engagement: 92.1 }
        ],
        performance: {
          opens: 1234,
          clicks: 890,
          conversions: 536
        }
      }
    ];
    setCampaigns(sampleCampaigns);
  }, []);

  // Behavioral triggers data
  useEffect(() => {
    const sampleTriggers = [
      {
        id: 1,
        name: 'Onboarding Incomplete',
        condition: 'profile_completion < 50% AND days_since_signup > 3',
        action: 'Send completion reminder email',
        status: 'active',
        triggered: 234,
        converted: 89,
        conversionRate: 38.0
      },
      {
        id: 2,
        name: 'High Engagement User',
        condition: 'session_count > 10 AND feature_usage > 80%',
        action: 'Invite to premium upgrade',
        status: 'active',
        triggered: 156,
        converted: 67,
        conversionRate: 42.9
      },
      {
        id: 3,
        name: 'Relationship Milestone',
        condition: 'assessment_score_improvement > 20%',
        action: 'Send congratulations and share prompt',
        status: 'active',
        triggered: 89,
        converted: 78,
        conversionRate: 87.6
      },
      {
        id: 4,
        name: 'Feature Abandonment',
        condition: 'feature_started = true AND feature_completed = false',
        action: 'Send helpful tips and encouragement',
        status: 'active',
        triggered: 345,
        converted: 123,
        conversionRate: 35.7
      }
    ];
    setTriggers(sampleTriggers);
  }, []);

  // Engagement activities data
  const engagementActivities = [
    { activity: 'Daily Login', users: 8945, trend: 12.3, icon: UserCheck },
    { activity: 'Assessment Completion', users: 3456, trend: 8.7, icon: CheckCircle },
    { activity: 'AI Coaching Session', users: 2890, trend: 15.2, icon: MessageSquare },
    { activity: 'Content Sharing', users: 1567, trend: 23.4, icon: Share2 },
    { activity: 'Community Interaction', users: 1234, trend: 18.9, icon: Users },
    { activity: 'Feature Exploration', users: 987, trend: 6.8, icon: Navigation },
    { activity: 'Goal Setting', users: 756, trend: 11.2, icon: Target },
    { activity: 'Premium Upgrade', users: 234, trend: 34.5, icon: Award }
  ];

  // Gamification elements
  const gamificationElements = [
    {
      element: 'Daily Streak',
      participants: 5678,
      avgStreak: 12.4,
      maxStreak: 89,
      engagement: 78.9,
      icon: Flame
    },
    {
      element: 'Achievement Badges',
      participants: 4321,
      totalBadges: 156,
      avgBadges: 8.7,
      engagement: 82.3,
      icon: Award
    },
    {
      element: 'Progress Levels',
      participants: 3456,
      avgLevel: 4.2,
      maxLevel: 15,
      engagement: 74.6,
      icon: Trophy
    },
    {
      element: 'Social Challenges',
      participants: 2890,
      activeChallenges: 23,
      completionRate: 67.8,
      engagement: 91.2,
      icon: Gamepad2
    }
  ];

  // Notification performance
  const notificationPerformance = [
    { type: 'Push Notification', sent: 15678, opened: 4567, rate: 29.1, engagement: 67.8 },
    { type: 'Email', sent: 12345, opened: 5432, rate: 44.0, engagement: 52.3 },
    { type: 'In-App Message', sent: 8901, opened: 6234, rate: 70.0, engagement: 89.4 },
    { type: 'SMS', sent: 3456, opened: 2345, rate: 67.8, engagement: 78.9 }
  ];

  // User segments for targeting
  const userSegments = [
    { segment: 'New Users (0-7 days)', count: 3456, engagement: 45.2, potential: 'high' },
    { segment: 'Active Users (8-30 days)', count: 8901, engagement: 78.9, potential: 'medium' },
    { segment: 'Regular Users (31-90 days)', count: 12345, engagement: 82.3, potential: 'medium' },
    { segment: 'Power Users (90+ days)', count: 5678, engagement: 91.7, potential: 'low' },
    { segment: 'Dormant Users', count: 2890, engagement: 12.4, potential: 'high' },
    { segment: 'Premium Users', count: 1567, engagement: 94.2, potential: 'low' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <ArrowUp className="h-4 w-4 text-gray-500" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      paused: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-blue-100 text-blue-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPotentialColor = (potential) => {
    const colors = {
      high: 'text-red-600',
      medium: 'text-yellow-600',
      low: 'text-green-600'
    };
    return colors[potential] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Engagement Optimization</h1>
              <p className="mt-2 text-gray-600">Drive user engagement through intelligent campaigns and behavioral triggers</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Create Campaign</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'campaigns', label: 'Campaigns', icon: Zap },
              { id: 'triggers', label: 'Behavioral Triggers', icon: Target },
              { id: 'gamification', label: 'Gamification', icon: Gamepad2 },
              { id: 'segments', label: 'User Segments', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Daily Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(metrics.dailyActiveUsers)}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(12.3)}
                  <span className={`ml-1 ${getChangeColor(12.3)}`}>+12.3% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.engagementRate}%</p>
                  </div>
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <Activity className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(8.7)}
                  <span className={`ml-1 ${getChangeColor(8.7)}`}>+8.7% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Session Time</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.averageSessionTime}m</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(15.2)}
                  <span className={`ml-1 ${getChangeColor(15.2)}`}>+15.2% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Retention Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.retentionRate}%</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(5.4)}
                  <span className={`ml-1 ${getChangeColor(5.4)}`}>+5.4% from last period</span>
                </div>
              </div>
            </div>

            {/* Engagement Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Engagement Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engagementActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <activity.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{activity.activity}</h4>
                        <p className="text-sm text-gray-600">{formatNumber(activity.users)} users</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm">
                        {getChangeIcon(activity.trend)}
                        <span className={`ml-1 ${getChangeColor(activity.trend)}`}>
                          +{activity.trend}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Campaigns Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                <button
                  onClick={() => setActiveTab('campaigns')}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {campaigns.filter(c => c.status === 'active').map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                      <p className="text-sm text-gray-600 capitalize">{campaign.type.replace('_', ' ')}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{formatNumber(campaign.participants)}</p>
                        <p className="text-xs text-gray-600">Participants</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-purple-600">{campaign.engagementRate}%</p>
                        <p className="text-xs text-gray-600">Engagement</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{campaign.conversionRate}%</p>
                        <p className="text-xs text-gray-600">Conversion</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Performance</h3>
              <div className="space-y-4">
                {notificationPerformance.map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {notification.type === 'Push Notification' && <Bell className="h-5 w-5 text-blue-600" />}
                        {notification.type === 'Email' && <Mail className="h-5 w-5 text-blue-600" />}
                        {notification.type === 'In-App Message' && <MessageSquare className="h-5 w-5 text-blue-600" />}
                        {notification.type === 'SMS' && <Smartphone className="h-5 w-5 text-blue-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{notification.type}</h4>
                        <p className="text-sm text-gray-600">{formatNumber(notification.sent)} sent</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{notification.rate}%</p>
                        <p className="text-xs text-gray-600">Open Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-purple-600">{notification.engagement}%</p>
                        <p className="text-xs text-gray-600">Engagement</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-8">
            {/* Campaign Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="all">All Types</option>
                    <option value="onboarding">Onboarding</option>
                    <option value="retention">Retention</option>
                    <option value="feature_promotion">Feature Promotion</option>
                    <option value="engagement">Engagement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Audience</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="all">All Audiences</option>
                    <option value="new_users">New Users</option>
                    <option value="active_users">Active Users</option>
                    <option value="dormant_users">Dormant Users</option>
                    <option value="premium_users">Premium Users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Performance</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="all">All Performance</option>
                    <option value="high">High Performing</option>
                    <option value="medium">Medium Performing</option>
                    <option value="low">Low Performing</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Campaigns List */}
            <div className="space-y-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{campaign.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">Type: {campaign.type.replace('_', ' ')}</p>
                      <p className="text-sm text-gray-500">
                        {campaign.startDate} - {campaign.endDate} • {formatNumber(campaign.participants)} participants
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedCampaign(campaign)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Edit3 className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{formatNumber(campaign.participants)}</p>
                      <p className="text-sm text-gray-600">Participants</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{campaign.engagementRate}%</p>
                      <p className="text-sm text-gray-600">Engagement Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{campaign.conversionRate}%</p>
                      <p className="text-sm text-gray-600">Conversion Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{formatNumber(campaign.performance.opens)}</p>
                      <p className="text-sm text-gray-600">Total Opens</p>
                    </div>
                  </div>

                  {/* Campaign Steps */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Campaign Steps</h4>
                    <div className="space-y-3">
                      {campaign.steps.map((step, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <span className="font-medium text-gray-900">{step.step}</span>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <p className="font-bold text-gray-900">{step.completion}%</p>
                              <p className="text-xs text-gray-600">Completion</p>
                            </div>
                            <div className="text-center">
                              <p className="font-bold text-purple-600">{step.engagement}%</p>
                              <p className="text-xs text-gray-600">Engagement</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Behavioral Triggers Tab */}
        {activeTab === 'triggers' && (
          <div className="space-y-8">
            {/* Triggers Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Triggers</p>
                    <p className="text-3xl font-bold text-gray-900">{triggers.filter(t => t.status === 'active').length}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Triggered</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(triggers.reduce((sum, t) => sum + t.triggered, 0))}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Conversion</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {(triggers.reduce((sum, t) => sum + t.conversionRate, 0) / triggers.length).toFixed(1)}%
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Triggers List */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Behavioral Triggers</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Plus className="h-5 w-5" />
                  <span>Add Trigger</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {triggers.map((trigger) => (
                  <div key={trigger.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{trigger.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(trigger.status)}`}>
                            {trigger.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Condition:</strong> {trigger.condition}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Action:</strong> {trigger.action}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{trigger.triggered}</p>
                        <p className="text-sm text-gray-600">Triggered</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-600">{trigger.converted}</p>
                        <p className="text-sm text-gray-600">Converted</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-purple-600">{trigger.conversionRate}%</p>
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gamification Tab */}
        {activeTab === 'gamification' && (
          <div className="space-y-8">
            {/* Gamification Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gamificationElements.map((element, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <element.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-purple-600">{element.engagement}% engaged</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{element.element}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{formatNumber(element.participants)}</p>
                  <p className="text-sm text-gray-600">participants</p>
                  
                  {element.element === 'Daily Streak' && (
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg Streak</span>
                        <span className="font-medium">{element.avgStreak} days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Max Streak</span>
                        <span className="font-medium">{element.maxStreak} days</span>
                      </div>
                    </div>
                  )}
                  
                  {element.element === 'Achievement Badges' && (
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Badges</span>
                        <span className="font-medium">{element.totalBadges}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg per User</span>
                        <span className="font-medium">{element.avgBadges}</span>
                      </div>
                    </div>
                  )}
                  
                  {element.element === 'Progress Levels' && (
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg Level</span>
                        <span className="font-medium">{element.avgLevel}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Max Level</span>
                        <span className="font-medium">{element.maxLevel}</span>
                      </div>
                    </div>
                  )}
                  
                  {element.element === 'Social Challenges' && (
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Active Challenges</span>
                        <span className="font-medium">{element.activeChallenges}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completion Rate</span>
                        <span className="font-medium">{element.completionRate}%</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Gamification Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Gamification Impact on Engagement</h3>
              <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Gamification engagement chart</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Achievement System */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievement System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { badge: 'First Steps', description: 'Complete profile setup', earned: 3456, icon: UserCheck },
                  { badge: 'Assessment Master', description: 'Complete 5 assessments', earned: 2890, icon: CheckCircle },
                  { badge: 'Streak Champion', description: '30-day login streak', earned: 1567, icon: Flame },
                  { badge: 'Social Butterfly', description: 'Share 10 achievements', earned: 1234, icon: Share2 },
                  { badge: 'Goal Crusher', description: 'Achieve 5 relationship goals', earned: 987, icon: Target },
                  { badge: 'Community Helper', description: 'Help 10 other couples', earned: 756, icon: Heart }
                ].map((achievement, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <achievement.icon className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{achievement.badge}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Earned by</span>
                      <span className="font-bold text-gray-900">{formatNumber(achievement.earned)} users</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Segments Tab */}
        {activeTab === 'segments' && (
          <div className="space-y-8">
            {/* Segments Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Segments</h3>
              <div className="space-y-4">
                {userSegments.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                      <p className="text-sm text-gray-600">{formatNumber(segment.count)} users</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{segment.engagement}%</p>
                        <p className="text-xs text-gray-600">Engagement</p>
                      </div>
                      <div className="text-center">
                        <p className={`font-bold ${getPotentialColor(segment.potential)} capitalize`}>
                          {segment.potential}
                        </p>
                        <p className="text-xs text-gray-600">Potential</p>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Target
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Segment Performance Comparison</h3>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Segment comparison chart</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive visualization would be rendered here</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Engagement Trends */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Engagement Trends</h3>
              <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Engagement trends over time</p>
                  <p className="text-sm text-gray-500 mt-2">Time series visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Campaign ROI Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign ROI Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Campaign</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Investment</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Revenue</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">ROI</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Engagement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign, index) => {
                      const investment = Math.floor(Math.random() * 5000) + 1000;
                      const revenue = Math.floor(investment * (1 + Math.random() * 3));
                      const roi = ((revenue - investment) / investment * 100).toFixed(1);
                      
                      return (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{campaign.name}</td>
                          <td className="py-3 px-4 text-right text-gray-900">${formatNumber(investment)}</td>
                          <td className="py-3 px-4 text-right text-gray-900">${formatNumber(revenue)}</td>
                          <td className="py-3 px-4 text-right">
                            <span className={`font-medium ${roi > 100 ? 'text-green-600' : roi > 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {roi}%
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right text-gray-900">{campaign.engagementRate}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Predictive Engagement Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Churn Risk Prediction</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">847 users</p>
                  <p className="text-sm text-blue-700">at high risk of churning in next 7 days</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Upgrade Potential</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">1,234 users</p>
                  <p className="text-sm text-green-700">likely to upgrade to premium</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Engagement Opportunity</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">2,567 users</p>
                  <p className="text-sm text-purple-700">ready for advanced features</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-medium text-pink-900 mb-2">Viral Potential</h4>
                  <p className="text-2xl font-bold text-pink-600 mb-2">456 users</p>
                  <p className="text-sm text-pink-700">likely to share and refer others</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create Engagement Campaign</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                <input
                  type="text"
                  placeholder="e.g., New User Welcome Series"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="onboarding">Onboarding</option>
                  <option value="retention">Retention</option>
                  <option value="feature_promotion">Feature Promotion</option>
                  <option value="engagement">Engagement</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="new_users">New Users</option>
                  <option value="active_users">Active Users</option>
                  <option value="dormant_users">Dormant Users</option>
                  <option value="premium_users">Premium Users</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trigger Condition</label>
                <textarea
                  placeholder="e.g., user_signup OR inactive_for_7_days"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCampaign.name}</h2>
                  <p className="text-gray-600 mt-1">Campaign Performance Details</p>
                </div>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Campaign Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(selectedCampaign.participants)}</p>
                  <p className="text-sm text-gray-600">Total Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">{selectedCampaign.engagementRate}%</p>
                  <p className="text-sm text-gray-600">Engagement Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{selectedCampaign.conversionRate}%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{formatNumber(selectedCampaign.performance.opens)}</p>
                  <p className="text-sm text-gray-600">Total Opens</p>
                </div>
              </div>

              {/* Step Performance */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Performance</h3>
                <div className="space-y-4">
                  {selectedCampaign.steps.map((step, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{step.step}</h4>
                        <span className="text-sm text-gray-500">Step {index + 1}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Completion Rate</span>
                            <span className="text-sm font-medium">{step.completion}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${step.completion}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Engagement Rate</span>
                            <span className="text-sm font-medium">{step.engagement}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${step.engagement}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedCampaign.type.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trigger</span>
                      <span className="font-medium text-gray-900">{selectedCampaign.trigger.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Audience</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedCampaign.audience.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">{selectedCampaign.startDate} - {selectedCampaign.endDate}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Opens</span>
                      <span className="font-medium text-gray-900">{formatNumber(selectedCampaign.performance.opens)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Clicks</span>
                      <span className="font-medium text-gray-900">{formatNumber(selectedCampaign.performance.clicks)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversions</span>
                      <span className="font-medium text-gray-900">{formatNumber(selectedCampaign.performance.conversions)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Click-through Rate</span>
                      <span className="font-medium text-gray-900">
                        {((selectedCampaign.performance.clicks / selectedCampaign.performance.opens) * 100).toFixed(1)}%
                      </span>
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
};

export default EngagementOptimization;

