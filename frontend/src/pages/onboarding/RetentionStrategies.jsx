import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Activity, 
  Clock, 
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
  UserX,
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
  Check,
  Zap,
  Shield,
  Lock,
  Unlock,
  Key,
  Briefcase,
  Home,
  MapPin,
  Phone,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Headphones,
  LifeBuoy,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

const RetentionStrategies = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dateRange, setDateRange] = useState('30days');
  const [retentionData, setRetentionData] = useState({});
  const [strategies, setStrategies] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Retention metrics
  const [metrics, setMetrics] = useState({
    overallRetention: 78.9,
    day1Retention: 85.2,
    day7Retention: 67.8,
    day30Retention: 45.3,
    churnRate: 21.1,
    averageLifetime: 156,
    ltv: 247.50,
    churnRisk: 1247
  });

  // Retention strategies data
  useEffect(() => {
    const sampleStrategies = [
      {
        id: 1,
        name: 'Onboarding Optimization',
        type: 'onboarding',
        status: 'active',
        target: 'new_users',
        description: 'Improve first-week experience to boost early retention',
        startDate: '2025-01-01',
        endDate: '2025-03-31',
        participants: 3456,
        baseline: 65.2,
        current: 78.9,
        improvement: 21.0,
        tactics: [
          { tactic: 'Progressive onboarding', impact: 8.2, status: 'active' },
          { tactic: 'Personalized welcome series', impact: 6.7, status: 'active' },
          { tactic: 'Early value demonstration', impact: 4.3, status: 'active' },
          { tactic: 'Social proof integration', impact: 1.8, status: 'testing' }
        ],
        metrics: {
          day1: 89.4,
          day7: 76.8,
          day30: 58.2
        }
      },
      {
        id: 2,
        name: 'Win-Back Campaign',
        type: 'reactivation',
        status: 'active',
        target: 'churned_users',
        description: 'Re-engage users who have been inactive for 30+ days',
        startDate: '2024-12-15',
        endDate: '2025-02-15',
        participants: 2890,
        baseline: 12.4,
        current: 23.7,
        improvement: 91.1,
        tactics: [
          { tactic: 'Personalized comeback offers', impact: 7.8, status: 'active' },
          { tactic: 'Success story sharing', impact: 2.1, status: 'active' },
          { tactic: 'Feature update notifications', impact: 1.4, status: 'paused' }
        ],
        metrics: {
          reactivation: 23.7,
          retention: 67.3,
          conversion: 15.8
        }
      },
      {
        id: 3,
        name: 'Premium Retention Program',
        type: 'loyalty',
        status: 'active',
        target: 'premium_users',
        description: 'Enhance premium user experience to reduce churn',
        startDate: '2024-11-01',
        endDate: '2025-04-30',
        participants: 1567,
        baseline: 89.2,
        current: 94.7,
        improvement: 6.2,
        tactics: [
          { tactic: 'VIP support access', impact: 2.8, status: 'active' },
          { tactic: 'Exclusive content library', impact: 1.9, status: 'active' },
          { tactic: 'Early feature access', impact: 1.5, status: 'active' }
        ],
        metrics: {
          satisfaction: 94.7,
          renewal: 91.3,
          expansion: 34.2
        }
      },
      {
        id: 4,
        name: 'Habit Formation Initiative',
        type: 'engagement',
        status: 'testing',
        target: 'active_users',
        description: 'Build daily usage habits through gamification',
        startDate: '2025-01-15',
        endDate: '2025-06-15',
        participants: 4521,
        baseline: 42.8,
        current: 48.3,
        improvement: 12.9,
        tactics: [
          { tactic: 'Daily streak rewards', impact: 3.2, status: 'active' },
          { tactic: 'Smart reminders', impact: 1.8, status: 'testing' },
          { tactic: 'Social challenges', impact: 0.5, status: 'testing' }
        ],
        metrics: {
          dailyActive: 48.3,
          streakLength: 12.4,
          habitScore: 67.8
        }
      }
    ];
    setStrategies(sampleStrategies);
  }, []);

  // Cohort analysis data
  useEffect(() => {
    const sampleCohorts = [
      {
        cohort: 'Jan 2025',
        size: 1247,
        day1: 89.2,
        day7: 76.4,
        day14: 68.7,
        day30: 58.3,
        day60: 47.2,
        day90: 39.8,
        ltv: 234.50,
        churnRate: 60.2
      },
      {
        cohort: 'Dec 2024',
        size: 1156,
        day1: 87.8,
        day7: 74.2,
        day14: 65.9,
        day30: 54.7,
        day60: 43.8,
        day90: 36.2,
        ltv: 218.30,
        churnRate: 63.8
      },
      {
        cohort: 'Nov 2024',
        size: 1089,
        day1: 85.6,
        day7: 71.8,
        day14: 62.4,
        day30: 51.2,
        day60: 40.7,
        day90: 33.5,
        ltv: 201.75,
        churnRate: 66.5
      },
      {
        cohort: 'Oct 2024',
        size: 1234,
        day1: 83.4,
        day7: 69.5,
        day14: 59.8,
        day30: 48.6,
        day60: 38.2,
        day90: 31.1,
        ltv: 189.20,
        churnRate: 68.9
      },
      {
        cohort: 'Sep 2024',
        size: 1345,
        day1: 81.2,
        day7: 67.3,
        day14: 57.1,
        day30: 45.9,
        day60: 35.8,
        day90: 28.7,
        ltv: 176.85,
        churnRate: 71.3
      }
    ];
    setCohorts(sampleCohorts);
  }, []);

  // Churn risk factors
  const churnRiskFactors = [
    { factor: 'Low engagement (< 2 sessions/week)', users: 3456, risk: 'high', weight: 0.35 },
    { factor: 'No premium features used', users: 2890, risk: 'medium', weight: 0.25 },
    { factor: 'Support tickets unresolved', users: 567, risk: 'high', weight: 0.20 },
    { factor: 'Assessment incomplete', users: 1234, risk: 'medium', weight: 0.15 },
    { factor: 'No social connections', users: 2345, risk: 'low', weight: 0.05 }
  ];

  // Retention interventions
  const interventions = [
    {
      intervention: 'Personalized Check-in',
      trigger: 'No activity for 3 days',
      success: 34.7,
      cost: 2.50,
      roi: 8.9,
      icon: MessageSquare
    },
    {
      intervention: 'Feature Recommendation',
      trigger: 'Low feature adoption',
      success: 28.3,
      cost: 1.20,
      roi: 12.4,
      icon: Sparkles
    },
    {
      intervention: 'Premium Trial Offer',
      trigger: 'High engagement, no upgrade',
      success: 45.6,
      cost: 15.00,
      roi: 23.7,
      icon: Award
    },
    {
      intervention: 'Success Story Share',
      trigger: 'Milestone achievement',
      success: 67.8,
      cost: 0.80,
      roi: 34.2,
      icon: Trophy
    },
    {
      intervention: 'Community Invitation',
      trigger: 'Solo user behavior',
      success: 23.4,
      cost: 0.50,
      roi: 6.8,
      icon: Users
    },
    {
      intervention: 'Coaching Session Offer',
      trigger: 'Relationship challenges',
      success: 78.9,
      cost: 25.00,
      roi: 45.6,
      icon: Heart
    }
  ];

  // User lifecycle stages
  const lifecycleStages = [
    { stage: 'New User (0-7 days)', users: 3456, retention: 76.4, churn: 23.6, color: 'blue' },
    { stage: 'Getting Started (8-30 days)', users: 2890, retention: 68.7, churn: 31.3, color: 'green' },
    { stage: 'Regular User (31-90 days)', users: 4521, retention: 82.3, churn: 17.7, color: 'purple' },
    { stage: 'Established (91-365 days)', users: 6789, retention: 89.4, churn: 10.6, color: 'yellow' },
    { stage: 'Loyal (365+ days)', users: 2345, retention: 94.7, churn: 5.3, color: 'pink' }
  ];

  // Satisfaction metrics
  const satisfactionMetrics = [
    { metric: 'Overall Satisfaction', score: 4.2, trend: 0.3, icon: Smile },
    { metric: 'Feature Usefulness', score: 4.0, trend: 0.1, icon: Star },
    { metric: 'Ease of Use', score: 4.3, trend: 0.2, icon: ThumbsUp },
    { metric: 'Support Quality', score: 4.1, trend: 0.4, icon: Headphones },
    { metric: 'Value for Money', score: 3.9, trend: 0.1, icon: DollarSign },
    { metric: 'Recommendation Likelihood', score: 4.4, trend: 0.2, icon: Share2 }
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
      testing: 'bg-blue-100 text-blue-800',
      paused: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-purple-100 text-purple-800',
      draft: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getRiskColor = (risk) => {
    const colors = {
      high: 'text-red-600 bg-red-100',
      medium: 'text-yellow-600 bg-yellow-100',
      low: 'text-green-600 bg-green-100'
    };
    return colors[risk] || 'text-gray-600 bg-gray-100';
  };

  const getRetentionColor = (retention) => {
    if (retention >= 80) return 'text-green-600';
    if (retention >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Retention Strategies</h1>
              <p className="mt-2 text-gray-600">Optimize user retention through data-driven strategies and interventions</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Create Strategy</span>
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
              { id: 'strategies', label: 'Strategies', icon: Target },
              { id: 'cohorts', label: 'Cohort Analysis', icon: Users },
              { id: 'churn', label: 'Churn Prevention', icon: Shield },
              { id: 'lifecycle', label: 'User Lifecycle', icon: Activity },
              { id: 'satisfaction', label: 'Satisfaction', icon: Heart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
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
                    <p className="text-sm font-medium text-gray-600">Overall Retention</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.overallRetention}%</p>
                  </div>
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(5.2)}
                  <span className={`ml-1 ${getChangeColor(5.2)}`}>+5.2% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">30-Day Retention</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.day30Retention}%</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(3.7)}
                  <span className={`ml-1 ${getChangeColor(3.7)}`}>+3.7% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Churn Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.churnRate}%</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(-2.1)}
                  <span className={`ml-1 ${getChangeColor(-2.1)}`}>-2.1% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg LTV</p>
                    <p className="text-3xl font-bold text-gray-900">${metrics.ltv}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(8.9)}
                  <span className={`ml-1 ${getChangeColor(8.9)}`}>+8.9% from last period</span>
                </div>
              </div>
            </div>

            {/* Retention Funnel */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Retention Funnel</h3>
              <div className="space-y-4">
                {[
                  { period: 'Day 1', retention: metrics.day1Retention, users: 8523 },
                  { period: 'Day 7', retention: metrics.day7Retention, users: 5782 },
                  { period: 'Day 30', retention: metrics.day30Retention, users: 3864 },
                  { period: 'Day 90', retention: 32.1, users: 2738 }
                ].map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{stage.period} Retention</h4>
                          <p className="text-sm text-gray-600">{formatNumber(stage.users)} users retained</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${getRetentionColor(stage.retention)}`}>
                          {stage.retention}%
                        </p>
                        <p className="text-sm text-gray-600">retention rate</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="absolute left-6 top-16 w-0.5 h-4 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Active Strategies Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Active Retention Strategies</h3>
                <button
                  onClick={() => setActiveTab('strategies')}
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strategies.filter(s => s.status === 'active').slice(0, 4).map((strategy) => (
                  <div key={strategy.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{strategy.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(strategy.status)}`}>
                        {strategy.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="font-bold text-gray-900">{formatNumber(strategy.participants)}</p>
                        <p className="text-xs text-gray-600">Participants</p>
                      </div>
                      <div>
                        <p className="font-bold text-pink-600">{strategy.current}%</p>
                        <p className="text-xs text-gray-600">Current Rate</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">+{strategy.improvement}%</p>
                        <p className="text-xs text-gray-600">Improvement</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Churn Risk Alert */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Churn Risk Alert</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  {formatNumber(metrics.churnRisk)} at risk
                </span>
              </div>
              <div className="space-y-4">
                {churnRiskFactors.slice(0, 3).map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                      <p className="text-sm text-gray-600">{formatNumber(factor.users)} users affected</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(factor.risk)}`}>
                        {factor.risk.toUpperCase()} RISK
                      </span>
                      <span className="text-sm font-medium text-gray-600">{(factor.weight * 100).toFixed(0)}% weight</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Strategies Tab */}
        {activeTab === 'strategies' && (
          <div className="space-y-8">
            {/* Strategy Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Strategy Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="all">All Types</option>
                    <option value="onboarding">Onboarding</option>
                    <option value="engagement">Engagement</option>
                    <option value="reactivation">Reactivation</option>
                    <option value="loyalty">Loyalty</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="testing">Testing</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="all">All Audiences</option>
                    <option value="new_users">New Users</option>
                    <option value="active_users">Active Users</option>
                    <option value="churned_users">Churned Users</option>
                    <option value="premium_users">Premium Users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Performance</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="all">All Performance</option>
                    <option value="high">High Impact</option>
                    <option value="medium">Medium Impact</option>
                    <option value="low">Low Impact</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Strategies List */}
            <div className="space-y-6">
              {strategies.map((strategy) => (
                <div key={strategy.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{strategy.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(strategy.status)}`}>
                          {strategy.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{strategy.description}</p>
                      <p className="text-sm text-gray-500">
                        Target: {strategy.target.replace('_', ' ')} • {strategy.startDate} - {strategy.endDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedStrategy(strategy)}
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

                  {/* Strategy Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{formatNumber(strategy.participants)}</p>
                      <p className="text-sm text-gray-600">Participants</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{strategy.baseline}%</p>
                      <p className="text-sm text-gray-600">Baseline</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-600">{strategy.current}%</p>
                      <p className="text-sm text-gray-600">Current</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">+{strategy.improvement}%</p>
                      <p className="text-sm text-gray-600">Improvement</p>
                    </div>
                  </div>

                  {/* Strategy Tactics */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Tactics & Impact</h4>
                    <div className="space-y-3">
                      {strategy.tactics.map((tactic, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              tactic.status === 'active' ? 'bg-green-500' :
                              tactic.status === 'testing' ? 'bg-blue-500' :
                              'bg-gray-400'
                            }`}></div>
                            <span className="font-medium text-gray-900">{tactic.tactic}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600 capitalize">{tactic.status}</span>
                            <span className="font-bold text-green-600">+{tactic.impact}%</span>
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

        {/* Cohort Analysis Tab */}
        {activeTab === 'cohorts' && (
          <div className="space-y-8">
            {/* Cohort Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Cohort Retention Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Cohort</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Size</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 1</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 7</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 14</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 30</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 60</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Day 90</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">LTV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cohorts.map((cohort, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{cohort.cohort}</td>
                        <td className="py-3 px-4 text-center text-gray-900">{formatNumber(cohort.size)}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day1)} bg-opacity-10`}>
                            {cohort.day1}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day7)} bg-opacity-10`}>
                            {cohort.day7}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day14)} bg-opacity-10`}>
                            {cohort.day14}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day30)} bg-opacity-10`}>
                            {cohort.day30}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day60)} bg-opacity-10`}>
                            {cohort.day60}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getRetentionColor(cohort.day90)} bg-opacity-10`}>
                            {cohort.day90}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-gray-900">${cohort.ltv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cohort Trends */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Retention Trends by Cohort</h3>
              <div className="h-64 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Cohort retention trends chart</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Cohort Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Performing Cohort</h3>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900">January 2025</h4>
                  <p className="text-sm text-green-700 mb-3">Highest 30-day retention at 58.3%</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-600">Day 1 Retention</span>
                      <span className="font-medium">89.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Day 30 Retention</span>
                      <span className="font-medium">58.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">LTV</span>
                      <span className="font-medium">$234.50</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Opportunity</h3>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900">September 2024</h4>
                  <p className="text-sm text-yellow-700 mb-3">Lowest retention, needs intervention</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Day 1 Retention</span>
                      <span className="font-medium">81.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Day 30 Retention</span>
                      <span className="font-medium">45.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-600">Potential Gain</span>
                      <span className="font-medium text-green-600">+12.4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Churn Prevention Tab */}
        {activeTab === 'churn' && (
          <div className="space-y-8">
            {/* Churn Risk Factors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Churn Risk Factors</h3>
              <div className="space-y-4">
                {churnRiskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                      <p className="text-sm text-gray-600">{formatNumber(factor.users)} users affected</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(factor.risk)}`}>
                          {factor.risk.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{(factor.weight * 100).toFixed(0)}%</p>
                        <p className="text-xs text-gray-600">Weight</p>
                      </div>
                      <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                        Address
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Intervention Strategies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Intervention Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interventions.map((intervention, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-pink-100 rounded-lg">
                        <intervention.icon className="h-5 w-5 text-pink-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">{intervention.intervention}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{intervention.trigger}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Success Rate</span>
                        <span className="font-medium text-green-600">{intervention.success}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Cost per User</span>
                        <span className="font-medium text-gray-900">${intervention.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">ROI</span>
                        <span className="font-medium text-purple-600">{intervention.roi}x</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Churn Prediction Model */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Churn Prediction Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-900 mb-2">High Risk</h4>
                  <p className="text-2xl font-bold text-red-600 mb-2">847</p>
                  <p className="text-sm text-red-700">users likely to churn in 7 days</p>
                  <div className="mt-3">
                    <div className="w-full bg-red-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-red-600 mt-1">85% confidence</p>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">Medium Risk</h4>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">1,234</p>
                  <p className="text-sm text-yellow-700">users at moderate risk</p>
                  <div className="mt-3">
                    <div className="w-full bg-yellow-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <p className="text-xs text-yellow-600 mt-1">72% confidence</p>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Low Risk</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">8,567</p>
                  <p className="text-sm text-green-700">users likely to stay</p>
                  <div className="mt-3">
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                    <p className="text-xs text-green-600 mt-1">91% confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Lifecycle Tab */}
        {activeTab === 'lifecycle' && (
          <div className="space-y-8">
            {/* Lifecycle Stages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Lifecycle Stages</h3>
              <div className="space-y-4">
                {lifecycleStages.map((stage, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full bg-${stage.color}-500`}></div>
                        <h4 className="font-medium text-gray-900">{stage.stage}</h4>
                      </div>
                      <span className="text-sm text-gray-500">{formatNumber(stage.users)} users</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Retention Rate</span>
                          <span className="text-sm font-medium">{stage.retention}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-${stage.color}-500 h-2 rounded-full`}
                            style={{ width: `${stage.retention}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Churn Rate</span>
                          <span className="text-sm font-medium">{stage.churn}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${stage.churn}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifecycle Flow */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Journey Flow</h3>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">User lifecycle flow diagram</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive flow visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Stage Optimization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Stage Optimization Opportunities</h3>
                <div className="space-y-3">
                  {[
                    { stage: 'New User', opportunity: 'Improve onboarding completion', impact: '+12%' },
                    { stage: 'Getting Started', opportunity: 'Increase feature adoption', impact: '+8%' },
                    { stage: 'Regular User', opportunity: 'Build habit formation', impact: '+15%' },
                    { stage: 'Established', opportunity: 'Premium upgrade push', impact: '+23%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.stage}</h4>
                          <p className="text-sm text-gray-600">{item.opportunity}</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Transition Success Rates</h3>
                <div className="space-y-3">
                  {[
                    { from: 'New → Getting Started', rate: 76.4, target: 85 },
                    { from: 'Getting Started → Regular', rate: 68.7, target: 75 },
                    { from: 'Regular → Established', rate: 82.3, target: 85 },
                    { from: 'Established → Loyal', rate: 89.4, target: 90 }
                  ].map((transition, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{transition.from}</span>
                        <span className="text-sm text-gray-600">{transition.rate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${transition.rate >= transition.target ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${(transition.rate / transition.target) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Target: {transition.target}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Satisfaction Tab */}
        {activeTab === 'satisfaction' && (
          <div className="space-y-8">
            {/* Satisfaction Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {satisfactionMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <metric.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="flex items-center text-sm">
                      {getChangeIcon(metric.trend)}
                      <span className={`ml-1 ${getChangeColor(metric.trend)}`}>
                        +{metric.trend}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{metric.metric}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">{metric.score}</span>
                    <span className="text-gray-500">/5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full"
                      style={{ width: `${(metric.score / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Satisfaction Trends */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Satisfaction Trends</h3>
              <div className="h-64 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Satisfaction trends over time</p>
                  <p className="text-sm text-gray-500 mt-2">Time series visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Feedback Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Satisfaction Drivers</h3>
                <div className="space-y-3">
                  {[
                    { driver: 'AI Coaching Quality', impact: 4.6, mentions: 1247 },
                    { driver: 'Relationship Insights', impact: 4.4, mentions: 1089 },
                    { driver: 'User Interface', impact: 4.2, mentions: 987 },
                    { driver: 'Customer Support', impact: 4.1, mentions: 756 },
                    { driver: 'Content Library', impact: 3.9, mentions: 634 }
                  ].map((driver, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-green-900">{driver.driver}</h4>
                        <p className="text-sm text-green-700">{driver.mentions} mentions</p>
                      </div>
                      <span className="text-lg font-bold text-green-600">{driver.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas for Improvement</h3>
                <div className="space-y-3">
                  {[
                    { area: 'Mobile App Performance', impact: 3.2, mentions: 567 },
                    { area: 'Notification Frequency', impact: 3.4, mentions: 456 },
                    { area: 'Premium Pricing', impact: 3.1, mentions: 389 },
                    { area: 'Feature Discovery', impact: 3.3, mentions: 345 },
                    { area: 'Loading Times', impact: 3.0, mentions: 234 }
                  ].map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-red-900">{area.area}</h4>
                        <p className="text-sm text-red-700">{area.mentions} mentions</p>
                      </div>
                      <span className="text-lg font-bold text-red-600">{area.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Strategy Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create Retention Strategy</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Strategy Name</label>
                <input
                  type="text"
                  placeholder="e.g., New User Onboarding Optimization"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Strategy Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="onboarding">Onboarding</option>
                  <option value="engagement">Engagement</option>
                  <option value="reactivation">Reactivation</option>
                  <option value="loyalty">Loyalty</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="new_users">New Users</option>
                  <option value="active_users">Active Users</option>
                  <option value="churned_users">Churned Users</option>
                  <option value="premium_users">Premium Users</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Describe the strategy and its objectives..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
              >
                Create Strategy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Strategy Details Modal */}
      {selectedStrategy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedStrategy.name}</h2>
                  <p className="text-gray-600 mt-1">Strategy Performance Details</p>
                </div>
                <button
                  onClick={() => setSelectedStrategy(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Strategy Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(selectedStrategy.participants)}</p>
                  <p className="text-sm text-gray-600">Total Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{selectedStrategy.baseline}%</p>
                  <p className="text-sm text-gray-600">Baseline Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-600">{selectedStrategy.current}%</p>
                  <p className="text-sm text-gray-600">Current Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">+{selectedStrategy.improvement}%</p>
                  <p className="text-sm text-gray-600">Improvement</p>
                </div>
              </div>

              {/* Tactics Performance */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tactics Performance</h3>
                <div className="space-y-4">
                  {selectedStrategy.tactics.map((tactic, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{tactic.tactic}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tactic.status)}`}>
                          {tactic.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Impact on retention</span>
                        <span className="font-bold text-green-600">+{tactic.impact}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategy Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedStrategy.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedStrategy.target.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">{selectedStrategy.startDate} - {selectedStrategy.endDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedStrategy.status)}`}>
                        {selectedStrategy.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedStrategy.metrics).map(([key, value], index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-medium text-gray-900">
                          {typeof value === 'number' ? `${value}%` : value}
                        </span>
                      </div>
                    ))}
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

export default RetentionStrategies;

