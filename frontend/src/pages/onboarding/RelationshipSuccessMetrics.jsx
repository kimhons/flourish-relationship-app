import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Heart, Users, MessageCircle, Calendar, Clock, Star, 
  Award, Target, TrendingUp, TrendingDown, Activity, 
  Zap, Eye, Filter, Download, Share2, RefreshCw,
  ArrowUp, ArrowDown, CheckCircle, XCircle, AlertTriangle,
  Gift, Camera, MapPin, Phone, Video, Coffee
} from 'lucide-react';

const RelationshipSuccessMetrics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('success_rate');
  const [showPredictions, setShowPredictions] = useState(true);
  const [isRealTime, setIsRealTime] = useState(false);

  // Relationship success data
  const successTrends = [
    { month: 'Jan', successRate: 38.5, totalMatches: 1250, successfulRelationships: 481, avgDuration: 4.2 },
    { month: 'Feb', successRate: 39.2, totalMatches: 1380, successfulRelationships: 541, avgDuration: 4.5 },
    { month: 'Mar', successRate: 37.8, totalMatches: 1420, successfulRelationships: 537, avgDuration: 4.1 },
    { month: 'Apr', successRate: 41.3, totalMatches: 1580, successfulRelationships: 653, avgDuration: 4.8 },
    { month: 'May', successRate: 42.7, totalMatches: 1720, successfulRelationships: 734, avgDuration: 5.1 },
    { month: 'Jun', successRate: 44.1, totalMatches: 1890, successfulRelationships: 833, avgDuration: 5.3 }
  ];

  const relationshipStages = [
    { stage: 'Initial Match', count: 15420, percentage: 100, dropOff: 0 },
    { stage: 'First Message', count: 9250, percentage: 60, dropOff: 40 },
    { stage: 'Conversation (3+ messages)', count: 6480, percentage: 42, dropOff: 30 },
    { stage: 'Phone/Video Call', count: 3890, percentage: 25.2, dropOff: 40 },
    { stage: 'First Date', count: 2330, percentage: 15.1, dropOff: 40 },
    { stage: 'Second Date', count: 1630, percentage: 10.6, dropOff: 30 },
    { stage: 'Relationship (1+ month)', count: 980, percentage: 6.4, dropOff: 40 },
    { stage: 'Long-term (6+ months)', count: 680, percentage: 4.4, dropOff: 31 }
  ];

  const successFactors = [
    { factor: 'Profile Completeness', impact: 85, correlation: 0.78, importance: 'high' },
    { factor: 'Response Time', impact: 72, correlation: 0.65, importance: 'high' },
    { factor: 'Photo Quality', impact: 68, correlation: 0.61, importance: 'medium' },
    { factor: 'Shared Interests', impact: 79, correlation: 0.71, importance: 'high' },
    { factor: 'Geographic Proximity', impact: 56, correlation: 0.48, importance: 'medium' },
    { factor: 'Age Compatibility', impact: 63, correlation: 0.55, importance: 'medium' },
    { factor: 'Education Level', impact: 41, correlation: 0.35, importance: 'low' },
    { factor: 'Activity Level', impact: 74, correlation: 0.67, importance: 'high' }
  ];

  const relationshipDurations = [
    { duration: '< 1 week', count: 2840, percentage: 18.4, color: '#ef4444' },
    { duration: '1-4 weeks', count: 3920, percentage: 25.4, color: '#f59e0b' },
    { duration: '1-3 months', count: 4680, percentage: 30.3, color: '#eab308' },
    { duration: '3-6 months', count: 2450, percentage: 15.9, color: '#22c55e' },
    { duration: '6-12 months', count: 1180, percentage: 7.6, color: '#06b6d4' },
    { duration: '1+ years', count: 380, percentage: 2.4, color: '#8b5cf6' }
  ];

  const communicationPatterns = [
    { pattern: 'Daily Messaging', successRate: 68, avgDuration: 8.2, count: 2450 },
    { pattern: 'Video Calls', successRate: 74, avgDuration: 9.1, count: 1890 },
    { pattern: 'Voice Calls', successRate: 71, avgDuration: 8.7, count: 2120 },
    { pattern: 'Photo Sharing', successRate: 65, avgDuration: 7.8, count: 3240 },
    { pattern: 'Gift Sending', successRate: 82, avgDuration: 10.5, count: 890 },
    { pattern: 'Event Planning', successRate: 79, avgDuration: 9.8, count: 1240 }
  ];

  const ageGroupSuccess = [
    { ageGroup: '18-24', successRate: 35.2, avgDuration: 3.8, totalUsers: 4250 },
    { ageGroup: '25-34', successRate: 45.7, avgDuration: 5.2, totalUsers: 6890 },
    { ageGroup: '35-44', successRate: 48.3, avgDuration: 6.1, totalUsers: 4120 },
    { ageGroup: '45-54', successRate: 42.1, avgDuration: 5.8, totalUsers: 2340 },
    { ageGroup: '55+', successRate: 38.9, avgDuration: 5.5, totalUsers: 890 }
  ];

  const satisfactionMetrics = [
    { metric: 'Overall Satisfaction', score: 4.3, trend: '+0.2', color: '#8b5cf6' },
    { metric: 'Match Quality', score: 4.1, trend: '+0.3', color: '#06b6d4' },
    { metric: 'Communication Tools', score: 4.5, trend: '+0.1', color: '#10b981' },
    { metric: 'Date Planning', score: 3.9, trend: '+0.4', color: '#f59e0b' },
    { metric: 'Safety Features', score: 4.7, trend: '+0.1', color: '#ef4444' },
    { metric: 'User Experience', score: 4.2, trend: '+0.2', color: '#8b5cf6' }
  ];

  const predictiveInsights = [
    {
      insight: 'High Success Probability',
      description: 'Users with complete profiles and daily activity',
      probability: 78,
      count: 1240,
      recommendation: 'Encourage profile completion'
    },
    {
      insight: 'Moderate Success Probability',
      description: 'Active users with partial profiles',
      probability: 52,
      count: 3890,
      recommendation: 'Provide profile optimization tips'
    },
    {
      insight: 'Low Success Probability',
      description: 'Inactive users or incomplete profiles',
      probability: 23,
      count: 2450,
      recommendation: 'Re-engagement campaign needed'
    }
  ];

  const kpiMetrics = [
    {
      title: 'Overall Success Rate',
      value: '44.1%',
      change: '+2.8%',
      trend: 'up',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      title: 'Avg Relationship Duration',
      value: '5.3 months',
      change: '+0.5 months',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'User Satisfaction',
      value: '4.3/5.0',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Long-term Success',
      value: '68.5%',
      change: '+5.2%',
      trend: 'up',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  useEffect(() => {
    let interval;
    if (isRealTime) {
      interval = setInterval(() => {
        console.log('Updating real-time relationship metrics...');
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isRealTime]);

  const getImpactColor = (importance) => {
    switch (importance) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-600" />
              Relationship Success Metrics
            </h1>
            <p className="text-gray-600">
              Comprehensive analytics on relationship formation, success rates, and satisfaction
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsRealTime(!isRealTime)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isRealTime 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              {isRealTime ? 'Live' : 'Static'}
            </button>
            
            <button
              onClick={() => setShowPredictions(!showPredictions)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showPredictions 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Target className="w-4 h-4" />
              Predictions
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiMetrics.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {kpi.change}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
                <p className="text-gray-600 text-sm">{kpi.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Success Trends & Relationship Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Success Rate Trends</h3>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="successRate">Success Rate</option>
              <option value="totalMatches">Total Matches</option>
              <option value="avgDuration">Avg Duration</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={successTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke="#ec4899" 
                strokeWidth={3}
                dot={{ fill: '#ec4899', strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Relationship Formation Funnel</h3>
          <div className="space-y-3">
            {relationshipStages.slice(0, 6).map((stage, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{stage.stage}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">{stage.count.toLocaleString()}</span>
                      {index > 0 && (
                        <span className="text-xs text-red-600">-{stage.dropOff}%</span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Factors & Communication Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Factors Analysis</h3>
          <div className="space-y-4">
            {successFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{factor.factor}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(factor.importance)}`}>
                        {factor.importance}
                      </span>
                      <span className="text-sm text-gray-600">{factor.impact}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${factor.impact}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Correlation: {factor.correlation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Patterns Impact</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={communicationPatterns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pattern" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="successRate" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Age Group Analysis & Relationship Durations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Success by Age Group</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageGroupSuccess}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="successRate" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Relationship Duration Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={relationshipDurations}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({ duration, percentage }) => `${duration} (${percentage}%)`}
              >
                {relationshipDurations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Satisfaction Metrics */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Satisfaction Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {satisfactionMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={metric.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(metric.score / 5) * 251.2} 251.2`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{metric.score}</span>
                </div>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{metric.metric}</h4>
              <div className="text-sm text-green-600 font-medium">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Insights */}
      {showPredictions && (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Predictive Success Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictiveInsights.map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{insight.insight}</h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">{insight.probability}%</div>
                    <div className="text-xs text-gray-500">probability</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">Affected Users:</span>
                  <span className="font-medium text-gray-900">{insight.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${insight.probability}%` }}
                  />
                </div>
                <div className="text-sm font-medium text-purple-600">
                  💡 {insight.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RelationshipSuccessMetrics;

