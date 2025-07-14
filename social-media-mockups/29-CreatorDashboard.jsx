import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Share, 
  Eye,
  DollarSign,
  Calendar,
  Clock,
  Award,
  Star,
  Zap,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Globe,
  MapPin,
  Filter,
  Download,
  RefreshCw,
  Settings,
  Bell,
  Gift,
  Crown,
  Flame,
  ThumbsUp,
  Video,
  Image,
  Music,
  Hash,
  AtSign,
  ExternalLink,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  Info
} from 'lucide-react';

const CreatorDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  const periods = [
    { id: '24h', label: '24h' },
    { id: '7d', label: '7 days' },
    { id: '30d', label: '30 days' },
    { id: '90d', label: '90 days' }
  ];

  const overviewStats = {
    followers: 12847,
    totalViews: 2456789,
    totalLikes: 89234,
    totalComments: 12456,
    engagement: 8.7,
    earnings: 1247.50,
    growth: {
      followers: 12.5,
      views: 23.8,
      engagement: 5.2,
      earnings: 18.9
    }
  };

  const recentPosts = [
    {
      id: 1,
      type: 'reel',
      thumbnail: '/api/placeholder/80/80',
      title: 'Morning coffee routine ☕️',
      timestamp: '2 hours ago',
      stats: {
        views: 15420,
        likes: 1247,
        comments: 89,
        shares: 23
      },
      performance: 'excellent',
      trending: true
    },
    {
      id: 2,
      type: 'post',
      thumbnail: '/api/placeholder/80/80',
      title: 'Sunset hiking adventure 🏔️',
      timestamp: '1 day ago',
      stats: {
        views: 8930,
        likes: 892,
        comments: 45,
        shares: 12
      },
      performance: 'good',
      trending: false
    },
    {
      id: 3,
      type: 'reel',
      thumbnail: '/api/placeholder/80/80',
      title: 'Quick pasta recipe 🍝',
      timestamp: '3 days ago',
      stats: {
        views: 28450,
        likes: 2156,
        comments: 134,
        shares: 67
      },
      performance: 'viral',
      trending: true
    }
  ];

  const audienceInsights = {
    demographics: {
      age: [
        { range: '18-24', percentage: 35 },
        { range: '25-34', percentage: 45 },
        { range: '35-44', percentage: 15 },
        { range: '45+', percentage: 5 }
      ],
      gender: [
        { type: 'Female', percentage: 62 },
        { type: 'Male', percentage: 35 },
        { type: 'Other', percentage: 3 }
      ],
      topLocations: [
        { city: 'New York, NY', percentage: 18 },
        { city: 'Los Angeles, CA', percentage: 15 },
        { city: 'Chicago, IL', percentage: 12 },
        { city: 'San Francisco, CA', percentage: 10 },
        { city: 'Miami, FL', percentage: 8 }
      ]
    },
    interests: [
      { interest: 'Dating & Relationships', percentage: 78 },
      { interest: 'Lifestyle', percentage: 65 },
      { interest: 'Food & Cooking', percentage: 52 },
      { interest: 'Travel', percentage: 48 },
      { interest: 'Fitness', percentage: 41 }
    ]
  };

  const earnings = {
    thisMonth: 1247.50,
    lastMonth: 1056.30,
    breakdown: [
      { source: 'Tips & Gifts', amount: 567.20, percentage: 45.5 },
      { source: 'Brand Partnerships', amount: 450.00, percentage: 36.1 },
      { source: 'Premium Content', amount: 180.30, percentage: 14.5 },
      { source: 'Live Streaming', amount: 50.00, percentage: 4.0 }
    ],
    pending: 234.80,
    nextPayout: '2024-02-01'
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'viral': return 'text-purple-600 bg-purple-100';
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              overviewStats.growth.followers > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            }`}>
              {overviewStats.growth.followers > 0 ? '+' : ''}{overviewStats.growth.followers}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{overviewStats.followers.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-purple-500" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              overviewStats.growth.views > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            }`}>
              {overviewStats.growth.views > 0 ? '+' : ''}{overviewStats.growth.views}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{(overviewStats.totalViews / 1000000).toFixed(1)}M</p>
          <p className="text-sm text-gray-600">Total Views</p>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              overviewStats.growth.engagement > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            }`}>
              {overviewStats.growth.engagement > 0 ? '+' : ''}{overviewStats.growth.engagement}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{overviewStats.engagement}%</p>
          <p className="text-sm text-gray-600">Engagement Rate</p>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className={`text-xs px-2 py-1 rounded-full ${
              overviewStats.growth.earnings > 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            }`}>
              {overviewStats.growth.earnings > 0 ? '+' : ''}{overviewStats.growth.earnings}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${overviewStats.earnings}</p>
          <p className="text-sm text-gray-600">This Month</p>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-lg p-4 border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <div className="flex items-center space-x-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <LineChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Performance chart would be displayed here</p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg p-4 border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
          <button className="text-pink-500 text-sm font-medium hover:text-pink-600">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src={post.thumbnail}
                alt="Post thumbnail"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-900 truncate">{post.title}</h4>
                  {post.trending && (
                    <Flame className="w-4 h-4 text-orange-500" />
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${getPerformanceColor(post.performance)}`}>
                    {post.performance}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.timestamp}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.stats.views.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.stats.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.stats.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAudience = () => (
    <div className="space-y-6">
      {/* Demographics */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Demographics</h3>
        
        {/* Age Distribution */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Age Distribution</h4>
          <div className="space-y-2">
            {audienceInsights.demographics.age.map((age, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{age.range}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${age.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{age.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Gender Distribution</h4>
          <div className="space-y-2">
            {audienceInsights.demographics.gender.map((gender, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{gender.type}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        gender.type === 'Female' ? 'bg-pink-500' : 
                        gender.type === 'Male' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${gender.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{gender.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Top Locations</h4>
          <div className="space-y-2">
            {audienceInsights.demographics.topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{location.city}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{location.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Interests</h3>
        <div className="space-y-3">
          {audienceInsights.interests.map((interest, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{interest.interest}</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${interest.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-8">{interest.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEarnings = () => (
    <div className="space-y-6">
      {/* Earnings Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <ArrowUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">${earnings.thisMonth}</p>
          <p className="text-sm text-gray-600">This Month</p>
        </div>

        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-orange-500" />
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900">${earnings.pending}</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Breakdown</h3>
        <div className="space-y-3">
          {earnings.breakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{item.source}</h4>
                <p className="text-sm text-gray-600">{item.percentage}% of total</p>
              </div>
              <span className="text-lg font-bold text-gray-900">${item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Information */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payout Information</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Next Payout Date</span>
            <span className="font-medium text-gray-900">{earnings.nextPayout}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Minimum Payout</span>
            <span className="font-medium text-gray-900">$50.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Processing Time</span>
            <span className="font-medium text-gray-900">3-5 business days</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all">
          Request Payout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Creator Dashboard</h1>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto">
          <div className="flex">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'audience', label: 'Audience', icon: <Users className="w-4 h-4" /> },
              { id: 'earnings', label: 'Earnings', icon: <DollarSign className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'audience' && renderAudience()}
        {activeTab === 'earnings' && renderEarnings()}
      </div>
    </div>
  );
};

export default CreatorDashboard;

