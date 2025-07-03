import React, { useState, useEffect } from 'react';
import { 
  Map, 
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
  ArrowRight,
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
  Meh,
  Route,
  Compass,
  Flag,
  Crosshair,
  GitBranch,
  Workflow,
  Layers3,
  Network,
  TreePine,
  Waypoints
} from 'lucide-react';

const UserJourneyMapping = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [selectedTouchpoint, setSelectedTouchpoint] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dateRange, setDateRange] = useState('30days');
  const [journeyData, setJourneyData] = useState({});
  const [journeys, setJourneys] = useState([]);
  const [touchpoints, setTouchpoints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Journey metrics
  const [metrics, setMetrics] = useState({
    totalJourneys: 15,
    activeUsers: 12847,
    completionRate: 67.8,
    averageTime: 14.2,
    dropoffRate: 32.2,
    conversionRate: 23.4,
    satisfactionScore: 4.2,
    touchpointCount: 47
  });

  // User journeys data
  useEffect(() => {
    const sampleJourneys = [
      {
        id: 1,
        name: 'New User Onboarding',
        type: 'onboarding',
        status: 'active',
        description: 'Complete journey from signup to first assessment',
        startDate: '2025-01-01',
        users: 3456,
        completionRate: 78.9,
        averageTime: 12.4,
        dropoffRate: 21.1,
        satisfaction: 4.3,
        stages: [
          { 
            stage: 'Registration', 
            users: 3456, 
            completion: 100, 
            time: 2.1, 
            dropoff: 0,
            touchpoints: ['Landing Page', 'Signup Form', 'Email Verification']
          },
          { 
            stage: 'Profile Setup', 
            users: 3234, 
            completion: 93.6, 
            time: 3.8, 
            dropoff: 6.4,
            touchpoints: ['Welcome Screen', 'Profile Form', 'Photo Upload']
          },
          { 
            stage: 'Relationship Assessment', 
            users: 2890, 
            completion: 83.6, 
            time: 4.2, 
            dropoff: 10.6,
            touchpoints: ['Assessment Intro', 'Questions', 'Results']
          },
          { 
            stage: 'Feature Discovery', 
            users: 2567, 
            completion: 74.3, 
            time: 2.3, 
            dropoff: 11.2,
            touchpoints: ['Feature Tour', 'Interactive Demo', 'First Action']
          }
        ],
        painPoints: [
          { point: 'Profile photo upload', impact: 'high', users: 567 },
          { point: 'Assessment length', impact: 'medium', users: 234 },
          { point: 'Feature complexity', impact: 'low', users: 123 }
        ]
      },
      {
        id: 2,
        name: 'Premium Upgrade Journey',
        type: 'conversion',
        status: 'active',
        description: 'Path from free user to premium subscription',
        startDate: '2024-12-01',
        users: 2890,
        completionRate: 34.7,
        averageTime: 8.6,
        dropoffRate: 65.3,
        satisfaction: 3.9,
        stages: [
          { 
            stage: 'Feature Limitation', 
            users: 2890, 
            completion: 100, 
            time: 1.2, 
            dropoff: 0,
            touchpoints: ['Paywall', 'Feature Comparison', 'Benefits']
          },
          { 
            stage: 'Plan Selection', 
            users: 1734, 
            completion: 60.0, 
            time: 2.8, 
            dropoff: 40.0,
            touchpoints: ['Pricing Page', 'Plan Comparison', 'FAQ']
          },
          { 
            stage: 'Payment Process', 
            users: 1156, 
            completion: 40.0, 
            time: 3.1, 
            dropoff: 33.3,
            touchpoints: ['Payment Form', 'Security Info', 'Confirmation']
          },
          { 
            stage: 'Premium Activation', 
            users: 1003, 
            completion: 34.7, 
            time: 1.5, 
            dropoff: 13.2,
            touchpoints: ['Welcome Message', 'Feature Unlock', 'First Use']
          }
        ],
        painPoints: [
          { point: 'Pricing clarity', impact: 'high', users: 867 },
          { point: 'Payment security concerns', impact: 'medium', users: 345 },
          { point: 'Feature value perception', impact: 'high', users: 456 }
        ]
      },
      {
        id: 3,
        name: 'Relationship Goal Achievement',
        type: 'engagement',
        status: 'active',
        description: 'Journey from goal setting to achievement',
        startDate: '2024-11-15',
        users: 4521,
        completionRate: 56.8,
        averageTime: 21.3,
        dropoffRate: 43.2,
        satisfaction: 4.5,
        stages: [
          { 
            stage: 'Goal Discovery', 
            users: 4521, 
            completion: 100, 
            time: 3.2, 
            dropoff: 0,
            touchpoints: ['Goal Templates', 'Custom Goals', 'Priority Setting']
          },
          { 
            stage: 'Action Planning', 
            users: 3617, 
            completion: 80.0, 
            time: 5.7, 
            dropoff: 20.0,
            touchpoints: ['Action Items', 'Timeline', 'Resources']
          },
          { 
            stage: 'Progress Tracking', 
            users: 3165, 
            completion: 70.0, 
            time: 8.9, 
            dropoff: 12.5,
            touchpoints: ['Check-ins', 'Progress Updates', 'Adjustments']
          },
          { 
            stage: 'Goal Achievement', 
            users: 2568, 
            completion: 56.8, 
            time: 3.5, 
            dropoff: 18.9,
            touchpoints: ['Celebration', 'Reflection', 'Next Goals']
          }
        ],
        painPoints: [
          { point: 'Goal complexity', impact: 'medium', users: 678 },
          { point: 'Progress tracking difficulty', impact: 'high', users: 543 },
          { point: 'Motivation maintenance', impact: 'high', users: 789 }
        ]
      },
      {
        id: 4,
        name: 'Support Resolution Journey',
        type: 'support',
        status: 'active',
        description: 'Path from issue identification to resolution',
        startDate: '2024-10-01',
        users: 1567,
        completionRate: 89.4,
        averageTime: 6.7,
        dropoffRate: 10.6,
        satisfaction: 4.1,
        stages: [
          { 
            stage: 'Issue Identification', 
            users: 1567, 
            completion: 100, 
            time: 0.8, 
            dropoff: 0,
            touchpoints: ['Help Center', 'Search', 'Contact Form']
          },
          { 
            stage: 'Support Channel Selection', 
            users: 1456, 
            completion: 92.9, 
            time: 1.2, 
            dropoff: 7.1,
            touchpoints: ['Chat', 'Email', 'Phone', 'FAQ']
          },
          { 
            stage: 'Issue Resolution', 
            users: 1345, 
            completion: 85.8, 
            time: 3.9, 
            dropoff: 7.6,
            touchpoints: ['Agent Interaction', 'Solution Steps', 'Verification']
          },
          { 
            stage: 'Follow-up', 
            users: 1401, 
            completion: 89.4, 
            time: 0.8, 
            dropoff: -4.2,
            touchpoints: ['Satisfaction Survey', 'Additional Help', 'Case Closure']
          }
        ],
        painPoints: [
          { point: 'Long wait times', impact: 'high', users: 234 },
          { point: 'Complex solutions', impact: 'medium', users: 156 },
          { point: 'Multiple contacts needed', impact: 'medium', users: 89 }
        ]
      }
    ];
    setJourneys(sampleJourneys);
  }, []);

  // Touchpoints data
  useEffect(() => {
    const sampleTouchpoints = [
      {
        id: 1,
        name: 'Landing Page',
        type: 'web',
        category: 'acquisition',
        interactions: 15678,
        conversionRate: 12.4,
        satisfaction: 4.2,
        issues: 23,
        optimizationScore: 78.5,
        journeys: ['New User Onboarding', 'Premium Upgrade Journey']
      },
      {
        id: 2,
        name: 'Mobile App Home',
        type: 'mobile',
        category: 'engagement',
        interactions: 45672,
        conversionRate: 34.7,
        satisfaction: 4.5,
        issues: 12,
        optimizationScore: 89.2,
        journeys: ['Relationship Goal Achievement', 'Daily Engagement']
      },
      {
        id: 3,
        name: 'Assessment Flow',
        type: 'feature',
        category: 'onboarding',
        interactions: 8901,
        conversionRate: 67.8,
        satisfaction: 4.1,
        issues: 45,
        optimizationScore: 72.3,
        journeys: ['New User Onboarding', 'Relationship Goal Achievement']
      },
      {
        id: 4,
        name: 'Payment Gateway',
        type: 'transaction',
        category: 'conversion',
        interactions: 2345,
        conversionRate: 78.9,
        satisfaction: 3.8,
        issues: 67,
        optimizationScore: 65.4,
        journeys: ['Premium Upgrade Journey']
      },
      {
        id: 5,
        name: 'Support Chat',
        type: 'support',
        category: 'service',
        interactions: 3456,
        conversionRate: 91.2,
        satisfaction: 4.3,
        issues: 8,
        optimizationScore: 94.7,
        journeys: ['Support Resolution Journey']
      }
    ];
    setTouchpoints(sampleTouchpoints);
  }, []);

  // Journey analytics data
  const journeyAnalytics = [
    { metric: 'Most Common Path', value: 'Signup → Profile → Assessment → Goal Setting', percentage: 67.8 },
    { metric: 'Fastest Completion', value: 'Support Resolution Journey', time: '6.7 minutes' },
    { metric: 'Highest Satisfaction', value: 'Relationship Goal Achievement', score: 4.5 },
    { metric: 'Biggest Drop-off', value: 'Premium Upgrade - Plan Selection', rate: 40.0 }
  ];

  // Optimization opportunities
  const optimizationOpportunities = [
    {
      opportunity: 'Simplify Premium Pricing',
      impact: 'high',
      effort: 'medium',
      potentialGain: '+15% conversion',
      affectedJourneys: 2,
      users: 1156
    },
    {
      opportunity: 'Reduce Assessment Length',
      impact: 'medium',
      effort: 'low',
      potentialGain: '+8% completion',
      affectedJourneys: 1,
      users: 2890
    },
    {
      opportunity: 'Improve Mobile Performance',
      impact: 'high',
      effort: 'high',
      potentialGain: '+12% engagement',
      affectedJourneys: 3,
      users: 4521
    },
    {
      opportunity: 'Add Progress Indicators',
      impact: 'medium',
      effort: 'low',
      potentialGain: '+6% completion',
      affectedJourneys: 4,
      users: 3456
    }
  ];

  // User segments journey behavior
  const segmentBehavior = [
    { segment: 'New Users', primaryJourney: 'Onboarding', completion: 78.9, satisfaction: 4.3 },
    { segment: 'Active Users', primaryJourney: 'Goal Achievement', completion: 56.8, satisfaction: 4.5 },
    { segment: 'Premium Users', primaryJourney: 'Advanced Features', completion: 89.2, satisfaction: 4.7 },
    { segment: 'Churned Users', primaryJourney: 'Re-engagement', completion: 23.4, satisfaction: 3.2 }
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

  const getImpactColor = (impact) => {
    const colors = {
      high: 'text-red-600 bg-red-100',
      medium: 'text-yellow-600 bg-yellow-100',
      low: 'text-green-600 bg-green-100'
    };
    return colors[impact] || 'text-gray-600 bg-gray-100';
  };

  const getCompletionColor = (completion) => {
    if (completion >= 80) return 'text-green-600';
    if (completion >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getOptimizationColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Journey Mapping</h1>
              <p className="mt-2 text-gray-600">Visualize and optimize user experiences across all touchpoints</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Map Journey</span>
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
              { id: 'journeys', label: 'User Journeys', icon: Route },
              { id: 'touchpoints', label: 'Touchpoints', icon: MapPin },
              { id: 'analytics', label: 'Journey Analytics', icon: TrendingUp },
              { id: 'optimization', label: 'Optimization', icon: Target },
              { id: 'segments', label: 'Segment Behavior', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
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
                    <p className="text-sm font-medium text-gray-600">Active Journeys</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.totalJourneys}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Route className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(2)}
                  <span className={`ml-1 ${getChangeColor(2)}`}>+2 new journeys</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Journey Users</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(metrics.activeUsers)}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(8.3)}
                  <span className={`ml-1 ${getChangeColor(8.3)}`}>+8.3% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.completionRate}%</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(5.7)}
                  <span className={`ml-1 ${getChangeColor(5.7)}`}>+5.7% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Journey Time</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.averageTime}m</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(-1.2)}
                  <span className={`ml-1 ${getChangeColor(-1.2)}`}>-1.2m faster</span>
                </div>
              </div>
            </div>

            {/* Journey Performance Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Journey Performance Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {journeys.slice(0, 4).map((journey) => (
                  <div key={journey.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 text-sm">{journey.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(journey.status)}`}>
                        {journey.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Users</span>
                        <span className="font-medium">{formatNumber(journey.users)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completion</span>
                        <span className={`font-medium ${getCompletionColor(journey.completionRate)}`}>
                          {journey.completionRate}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg Time</span>
                        <span className="font-medium">{journey.averageTime}m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Satisfaction</span>
                        <span className="font-medium text-blue-600">{journey.satisfaction}/5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Analytics Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Journey Insights</h3>
              <div className="space-y-4">
                {journeyAnalytics.map((analytic, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{analytic.metric}</h4>
                      <p className="text-sm text-gray-600">{analytic.value}</p>
                    </div>
                    <div className="text-right">
                      {analytic.percentage && (
                        <span className="text-lg font-bold text-blue-600">{analytic.percentage}%</span>
                      )}
                      {analytic.time && (
                        <span className="text-lg font-bold text-green-600">{analytic.time}</span>
                      )}
                      {analytic.score && (
                        <span className="text-lg font-bold text-purple-600">{analytic.score}/5</span>
                      )}
                      {analytic.rate && (
                        <span className="text-lg font-bold text-red-600">{analytic.rate}%</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Touchpoints */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Top Performing Touchpoints</h3>
                <button
                  onClick={() => setActiveTab('touchpoints')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {touchpoints.slice(0, 5).map((touchpoint) => (
                  <div key={touchpoint.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {touchpoint.type === 'web' && <Globe className="h-5 w-5 text-blue-600" />}
                        {touchpoint.type === 'mobile' && <Smartphone className="h-5 w-5 text-blue-600" />}
                        {touchpoint.type === 'feature' && <Sparkles className="h-5 w-5 text-blue-600" />}
                        {touchpoint.type === 'transaction' && <CreditCard className="h-5 w-5 text-blue-600" />}
                        {touchpoint.type === 'support' && <Headphones className="h-5 w-5 text-blue-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{touchpoint.name}</h4>
                        <p className="text-sm text-gray-600 capitalize">{touchpoint.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{formatNumber(touchpoint.interactions)}</p>
                        <p className="text-xs text-gray-600">Interactions</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{touchpoint.conversionRate}%</p>
                        <p className="text-xs text-gray-600">Conversion</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center space-x-1">
                          <div className={`w-3 h-3 rounded-full ${getOptimizationColor(touchpoint.optimizationScore)}`}></div>
                          <span className="text-sm font-medium">{touchpoint.optimizationScore}</span>
                        </div>
                        <p className="text-xs text-gray-600">Score</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Journeys Tab */}
        {activeTab === 'journeys' && (
          <div className="space-y-8">
            {/* Journey Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Journey Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Types</option>
                    <option value="onboarding">Onboarding</option>
                    <option value="conversion">Conversion</option>
                    <option value="engagement">Engagement</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="testing">Testing</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Performance</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Performance</option>
                    <option value="high">High Completion</option>
                    <option value="medium">Medium Completion</option>
                    <option value="low">Low Completion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Volume</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Volumes</option>
                    <option value="high">High Volume</option>
                    <option value="medium">Medium Volume</option>
                    <option value="low">Low Volume</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Journeys List */}
            <div className="space-y-6">
              {journeys.map((journey) => (
                <div key={journey.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{journey.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(journey.status)}`}>
                          {journey.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{journey.description}</p>
                      <p className="text-sm text-gray-500">
                        Type: {journey.type} • Started: {journey.startDate}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedJourney(journey)}
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

                  {/* Journey Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{formatNumber(journey.users)}</p>
                      <p className="text-sm text-gray-600">Total Users</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-2xl font-bold ${getCompletionColor(journey.completionRate)}`}>
                        {journey.completionRate}%
                      </p>
                      <p className="text-sm text-gray-600">Completion</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{journey.averageTime}m</p>
                      <p className="text-sm text-gray-600">Avg Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-red-600">{journey.dropoffRate}%</p>
                      <p className="text-sm text-gray-600">Drop-off</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{journey.satisfaction}/5</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>

                  {/* Journey Stages */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Journey Stages</h4>
                    <div className="space-y-3">
                      {journey.stages.map((stage, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900">{stage.stage}</h5>
                                <p className="text-sm text-gray-600">
                                  {stage.touchpoints.join(' → ')}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-6">
                              <div className="text-center">
                                <p className="font-bold text-gray-900">{formatNumber(stage.users)}</p>
                                <p className="text-xs text-gray-600">Users</p>
                              </div>
                              <div className="text-center">
                                <p className={`font-bold ${getCompletionColor(stage.completion)}`}>
                                  {stage.completion}%
                                </p>
                                <p className="text-xs text-gray-600">Completion</p>
                              </div>
                              <div className="text-center">
                                <p className="font-bold text-blue-600">{stage.time}m</p>
                                <p className="text-xs text-gray-600">Avg Time</p>
                              </div>
                              <div className="text-center">
                                <p className="font-bold text-red-600">{stage.dropoff}%</p>
                                <p className="text-xs text-gray-600">Drop-off</p>
                              </div>
                            </div>
                          </div>
                          {index < journey.stages.length - 1 && (
                            <div className="absolute left-5 top-16 w-0.5 h-4 bg-gray-300"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pain Points */}
                  {journey.painPoints && journey.painPoints.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-4">Identified Pain Points</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {journey.painPoints.map((painPoint, index) => (
                          <div key={index} className="p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">{painPoint.point}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(painPoint.impact)}`}>
                                {painPoint.impact.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{formatNumber(painPoint.users)} users affected</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Touchpoints Tab */}
        {activeTab === 'touchpoints' && (
          <div className="space-y-8">
            {/* Touchpoints Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Touchpoints</p>
                    <p className="text-3xl font-bold text-gray-900">{metrics.touchpointCount}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Conversion</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {(touchpoints.reduce((sum, t) => sum + t.conversionRate, 0) / touchpoints.length).toFixed(1)}%
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Satisfaction</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {(touchpoints.reduce((sum, t) => sum + t.satisfaction, 0) / touchpoints.length).toFixed(1)}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Issues Identified</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {touchpoints.reduce((sum, t) => sum + t.issues, 0)}
                    </p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Touchpoints List */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">All Touchpoints</h3>
              <div className="space-y-4">
                {touchpoints.map((touchpoint) => (
                  <div key={touchpoint.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {touchpoint.type === 'web' && <Globe className="h-5 w-5 text-blue-600" />}
                          {touchpoint.type === 'mobile' && <Smartphone className="h-5 w-5 text-blue-600" />}
                          {touchpoint.type === 'feature' && <Sparkles className="h-5 w-5 text-blue-600" />}
                          {touchpoint.type === 'transaction' && <CreditCard className="h-5 w-5 text-blue-600" />}
                          {touchpoint.type === 'support' && <Headphones className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{touchpoint.name}</h4>
                          <p className="text-sm text-gray-600 capitalize">
                            {touchpoint.type} • {touchpoint.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedTouchpoint(touchpoint)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit3 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{formatNumber(touchpoint.interactions)}</p>
                        <p className="text-xs text-gray-600">Interactions</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{touchpoint.conversionRate}%</p>
                        <p className="text-xs text-gray-600">Conversion</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-purple-600">{touchpoint.satisfaction}/5</p>
                        <p className="text-xs text-gray-600">Satisfaction</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-red-600">{touchpoint.issues}</p>
                        <p className="text-xs text-gray-600">Issues</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <div className={`w-3 h-3 rounded-full ${getOptimizationColor(touchpoint.optimizationScore)}`}></div>
                          <span className="font-bold text-gray-900">{touchpoint.optimizationScore}</span>
                        </div>
                        <p className="text-xs text-gray-600">Optimization</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Used in journeys:</strong> {touchpoint.journeys.join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Journey Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Journey Completion Trends</h3>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Journey completion trends chart</p>
                    <p className="text-sm text-gray-500 mt-2">Time series visualization would be rendered here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Drop-off Analysis</h3>
                <div className="h-64 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Drop-off points analysis</p>
                    <p className="text-sm text-gray-500 mt-2">Funnel visualization would be rendered here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Flow Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Flow Patterns</h3>
              <div className="h-96 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Network className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">User flow diagram</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive flow visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Performing Journeys</h3>
                <div className="space-y-3">
                  {journeys
                    .sort((a, b) => b.completionRate - a.completionRate)
                    .slice(0, 4)
                    .map((journey, index) => (
                      <div key={journey.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-green-900">{journey.name}</h4>
                          <p className="text-sm text-green-700">{formatNumber(journey.users)} users</p>
                        </div>
                        <span className="text-lg font-bold text-green-600">{journey.completionRate}%</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Opportunities</h3>
                <div className="space-y-3">
                  {journeys
                    .sort((a, b) => a.completionRate - b.completionRate)
                    .slice(0, 4)
                    .map((journey, index) => (
                      <div key={journey.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-red-900">{journey.name}</h4>
                          <p className="text-sm text-red-700">{formatNumber(journey.users)} users</p>
                        </div>
                        <span className="text-lg font-bold text-red-600">{journey.completionRate}%</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Optimization Tab */}
        {activeTab === 'optimization' && (
          <div className="space-y-8">
            {/* Optimization Opportunities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Optimization Opportunities</h3>
              <div className="space-y-4">
                {optimizationOpportunities.map((opportunity, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-gray-900">{opportunity.opportunity}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Affects {opportunity.affectedJourneys} journeys • {formatNumber(opportunity.users)} users
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(opportunity.impact)}`}>
                          {opportunity.impact.toUpperCase()} IMPACT
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(opportunity.effort)}`}>
                          {opportunity.effort.toUpperCase()} EFFORT
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{opportunity.potentialGain}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Implement
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B Testing Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">A/B Testing Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    test: 'Onboarding Flow Simplification',
                    hypothesis: 'Reducing steps will increase completion rate',
                    expectedLift: '+12%',
                    confidence: 'High',
                    duration: '2 weeks'
                  },
                  {
                    test: 'Premium Pricing Display',
                    hypothesis: 'Clearer value proposition will boost conversions',
                    expectedLift: '+18%',
                    confidence: 'Medium',
                    duration: '3 weeks'
                  },
                  {
                    test: 'Assessment Question Order',
                    hypothesis: 'Reordering questions will reduce drop-offs',
                    expectedLift: '+8%',
                    confidence: 'High',
                    duration: '1 week'
                  },
                  {
                    test: 'Mobile Navigation Design',
                    hypothesis: 'Improved navigation will increase engagement',
                    expectedLift: '+15%',
                    confidence: 'Medium',
                    duration: '2 weeks'
                  }
                ].map((test, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{test.test}</h4>
                    <p className="text-sm text-gray-600 mb-3">{test.hypothesis}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Expected Lift</span>
                        <span className="font-medium text-green-600">{test.expectedLift}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Confidence</span>
                        <span className="font-medium">{test.confidence}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{test.duration}</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Start Test
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Matrix */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Impact vs Effort Matrix</h3>
              <div className="h-64 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Impact vs Effort visualization</p>
                  <p className="text-sm text-gray-500 mt-2">Scatter plot would be rendered here</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Segment Behavior Tab */}
        {activeTab === 'segments' && (
          <div className="space-y-8">
            {/* Segment Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Journey Behavior by User Segment</h3>
              <div className="space-y-4">
                {segmentBehavior.map((segment, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{segment.segment}</h4>
                      <span className="text-sm text-gray-600">Primary: {segment.primaryJourney}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Completion Rate</span>
                          <span className="text-sm font-medium">{segment.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${segment.completion}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Satisfaction</span>
                          <span className="text-sm font-medium">{segment.satisfaction}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${(segment.satisfaction / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment Journey Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Journey Preferences by Segment</h3>
              <div className="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Segment journey preferences</p>
                  <p className="text-sm text-gray-500 mt-2">Heatmap visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Segment Optimization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Segment-Specific Optimizations</h3>
                <div className="space-y-3">
                  {[
                    { segment: 'New Users', optimization: 'Simplify onboarding flow', impact: '+15%' },
                    { segment: 'Active Users', optimization: 'Add advanced features', impact: '+12%' },
                    { segment: 'Premium Users', optimization: 'Enhance VIP experience', impact: '+8%' },
                    { segment: 'Churned Users', optimization: 'Improve win-back journey', impact: '+25%' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.segment}</h4>
                          <p className="text-sm text-gray-600">{item.optimization}</p>
                        </div>
                        <span className="text-sm font-bold text-green-600">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cross-Segment Insights</h3>
                <div className="space-y-3">
                  {[
                    { insight: 'Mobile users complete journeys 23% faster', type: 'performance' },
                    { insight: 'Premium users have 3x higher satisfaction', type: 'satisfaction' },
                    { insight: 'New users drop off most at profile setup', type: 'friction' },
                    { insight: 'Support journeys have highest completion rates', type: 'success' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-900">{item.insight}</p>
                      <span className="text-xs text-blue-600 uppercase">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Journey Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Map New User Journey</h2>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Journey Name</label>
                <input
                  type="text"
                  placeholder="e.g., Premium Feature Discovery"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Journey Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="onboarding">Onboarding</option>
                  <option value="conversion">Conversion</option>
                  <option value="engagement">Engagement</option>
                  <option value="support">Support</option>
                  <option value="retention">Retention</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target User Segment</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="new_users">New Users</option>
                  <option value="active_users">Active Users</option>
                  <option value="premium_users">Premium Users</option>
                  <option value="churned_users">Churned Users</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Describe the journey and its objectives..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Touchpoints</label>
                <textarea
                  placeholder="List the main touchpoints in this journey..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
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
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Create Journey
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Journey Details Modal */}
      {selectedJourney && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJourney.name}</h2>
                  <p className="text-gray-600 mt-1">Detailed Journey Analysis</p>
                </div>
                <button
                  onClick={() => setSelectedJourney(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Journey Overview */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(selectedJourney.users)}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold ${getCompletionColor(selectedJourney.completionRate)}`}>
                    {selectedJourney.completionRate}%
                  </p>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{selectedJourney.averageTime}m</p>
                  <p className="text-sm text-gray-600">Average Time</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">{selectedJourney.dropoffRate}%</p>
                  <p className="text-sm text-gray-600">Drop-off Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">{selectedJourney.satisfaction}/5</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>

              {/* Detailed Stage Analysis */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Stage-by-Stage Analysis</h3>
                <div className="space-y-6">
                  {selectedJourney.stages.map((stage, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-medium text-gray-900">{stage.stage}</h4>
                        <span className="text-sm text-gray-500">Stage {index + 1}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-900">{formatNumber(stage.users)}</p>
                          <p className="text-sm text-gray-600">Users</p>
                        </div>
                        <div className="text-center">
                          <p className={`text-xl font-bold ${getCompletionColor(stage.completion)}`}>
                            {stage.completion}%
                          </p>
                          <p className="text-sm text-gray-600">Completion</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-blue-600">{stage.time}m</p>
                          <p className="text-sm text-gray-600">Avg Time</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-red-600">{stage.dropoff}%</p>
                          <p className="text-sm text-gray-600">Drop-off</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Touchpoints</h5>
                        <div className="flex flex-wrap gap-2">
                          {stage.touchpoints.map((touchpoint, tIndex) => (
                            <span key={tIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {touchpoint}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pain Points Analysis */}
              {selectedJourney.painPoints && selectedJourney.painPoints.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pain Points Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedJourney.painPoints.map((painPoint, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{painPoint.point}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(painPoint.impact)}`}>
                            {painPoint.impact.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{formatNumber(painPoint.users)} users affected</p>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-red-500 h-2 rounded-full"
                              style={{ width: `${(painPoint.users / selectedJourney.users) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {((painPoint.users / selectedJourney.users) * 100).toFixed(1)}% of journey users
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Touchpoint Details Modal */}
      {selectedTouchpoint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTouchpoint.name}</h2>
                  <p className="text-gray-600 mt-1">Touchpoint Performance Analysis</p>
                </div>
                <button
                  onClick={() => setSelectedTouchpoint(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Touchpoint Overview */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(selectedTouchpoint.interactions)}</p>
                  <p className="text-sm text-gray-600">Total Interactions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{selectedTouchpoint.conversionRate}%</p>
                  <p className="text-sm text-gray-600">Conversion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">{selectedTouchpoint.satisfaction}/5</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">{selectedTouchpoint.issues}</p>
                  <p className="text-sm text-gray-600">Issues Reported</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{selectedTouchpoint.optimizationScore}</p>
                  <p className="text-sm text-gray-600">Optimization Score</p>
                </div>
              </div>

              {/* Touchpoint Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Touchpoint Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedTouchpoint.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium text-gray-900 capitalize">{selectedTouchpoint.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Used in Journeys</span>
                      <span className="font-medium text-gray-900">{selectedTouchpoint.journeys.length}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Associated Journeys</h3>
                  <div className="space-y-2">
                    {selectedTouchpoint.journeys.map((journey, index) => (
                      <div key={index} className="p-2 bg-blue-50 rounded text-sm text-blue-800">
                        {journey}
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

export default UserJourneyMapping;

