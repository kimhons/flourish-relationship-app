import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Scatter, ScatterChart
} from 'recharts';
import { 
  Brain, TrendingUp, TrendingDown, DollarSign, Users, Heart, 
  MessageCircle, Target, Award, Clock, Star, Activity, 
  BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon,
  Filter, Calendar, Download, Share2, RefreshCw, Settings,
  AlertTriangle, CheckCircle, Info, Zap, Database, Cpu,
  ArrowUp, ArrowDown, Eye, Grid, Layout, Maximize2
} from 'lucide-react';

const BusinessIntelligenceHub = () => {
  const [selectedDashboard, setSelectedDashboard] = useState('overview');
  const [dateRange, setDateRange] = useState('30d');
  const [isRealTime, setIsRealTime] = useState(false);
  const [selectedMetrics, setSelectedMetrics] = useState(['revenue', 'users', 'engagement']);
  const [showFilters, setShowFilters] = useState(false);
  const [alertsCount, setAlertsCount] = useState(3);

  // Dashboard configurations
  const dashboards = [
    {
      id: 'overview',
      name: 'Executive Overview',
      description: 'High-level business metrics and KPIs',
      icon: Target
    },
    {
      id: 'financial',
      name: 'Financial Analytics',
      description: 'Revenue, costs, and financial performance',
      icon: DollarSign
    },
    {
      id: 'user_behavior',
      name: 'User Behavior',
      description: 'User engagement and activity patterns',
      icon: Users
    },
    {
      id: 'relationship_insights',
      name: 'Relationship Insights',
      description: 'Matching success and relationship analytics',
      icon: Heart
    },
    {
      id: 'operational',
      name: 'Operational Metrics',
      description: 'System performance and operational data',
      icon: Activity
    }
  ];

  // Sample business intelligence data
  const revenueData = [
    { month: 'Jan', revenue: 125000, costs: 85000, profit: 40000, users: 15420 },
    { month: 'Feb', revenue: 142000, costs: 92000, profit: 50000, users: 16890 },
    { month: 'Mar', revenue: 138000, costs: 89000, profit: 49000, users: 16340 },
    { month: 'Apr', revenue: 165000, costs: 98000, profit: 67000, users: 18750 },
    { month: 'May', revenue: 178000, costs: 105000, profit: 73000, users: 19820 },
    { month: 'Jun', revenue: 195000, costs: 112000, profit: 83000, users: 21450 }
  ];

  const userSegmentData = [
    { segment: 'Premium Users', value: 35, revenue: 145000, color: '#8b5cf6' },
    { segment: 'Standard Users', value: 45, revenue: 89000, color: '#06b6d4' },
    { segment: 'Free Users', value: 20, revenue: 12000, color: '#10b981' }
  ];

  const engagementTrends = [
    { date: '2024-01-01', dailyActive: 8500, weeklyActive: 15200, monthlyActive: 24500 },
    { date: '2024-01-08', dailyActive: 9200, weeklyActive: 16100, monthlyActive: 25800 },
    { date: '2024-01-15', dailyActive: 8900, weeklyActive: 15800, monthlyActive: 25200 },
    { date: '2024-01-22', dailyActive: 9800, weeklyActive: 17200, monthlyActive: 26900 },
    { date: '2024-01-29', dailyActive: 10200, weeklyActive: 18100, monthlyActive: 28200 }
  ];

  const conversionFunnel = [
    { stage: 'Visitors', count: 50000, percentage: 100 },
    { stage: 'Sign-ups', count: 12500, percentage: 25 },
    { stage: 'Profile Complete', count: 8750, percentage: 17.5 },
    { stage: 'First Match', count: 6250, percentage: 12.5 },
    { stage: 'First Message', count: 4375, percentage: 8.75 },
    { stage: 'Premium Upgrade', count: 1750, percentage: 3.5 }
  ];

  const kpiMetrics = [
    {
      title: 'Monthly Revenue',
      value: '$195,000',
      change: '+9.5%',
      trend: 'up',
      target: '$200,000',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Users',
      value: '21,450',
      change: '+8.3%',
      trend: 'up',
      target: '25,000',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Conversion Rate',
      value: '3.5%',
      change: '+0.3%',
      trend: 'up',
      target: '4.0%',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Customer LTV',
      value: '$485',
      change: '+12.7%',
      trend: 'up',
      target: '$500',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const businessAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Conversion Rate Decline',
      message: 'Sign-up to premium conversion dropped by 15% this week',
      timestamp: '2 hours ago',
      priority: 'high'
    },
    {
      id: 2,
      type: 'success',
      title: 'Revenue Target Achieved',
      message: 'Monthly revenue target exceeded by 5%',
      timestamp: '1 day ago',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'info',
      title: 'New Market Opportunity',
      message: 'Significant user growth detected in 25-34 age segment',
      timestamp: '2 days ago',
      priority: 'low'
    }
  ];

  const cohortData = [
    { cohort: 'Jan 2024', month1: 100, month2: 85, month3: 72, month4: 65, month5: 58, month6: 52 },
    { cohort: 'Feb 2024', month1: 100, month2: 88, month3: 75, month4: 68, month5: 61, month6: null },
    { cohort: 'Mar 2024', month1: 100, month2: 82, month3: 70, month4: 63, month5: null, month6: null },
    { cohort: 'Apr 2024', month1: 100, month2: 90, month3: 78, month4: null, month5: null, month6: null },
    { cohort: 'May 2024', month1: 100, month2: 87, month3: null, month4: null, month5: null, month6: null },
    { cohort: 'Jun 2024', month1: 100, month2: null, month3: null, month4: null, month5: null, month6: null }
  ];

  useEffect(() => {
    let interval;
    if (isRealTime) {
      interval = setInterval(() => {
        // Simulate real-time updates
        console.log('Updating real-time data...');
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isRealTime]);

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      case 'info': return Info;
      default: return Info;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const renderDashboardContent = () => {
    switch (selectedDashboard) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <p className="text-gray-600 text-sm mb-2">{kpi.title}</p>
                      <div className="text-xs text-gray-500">Target: {kpi.target}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Revenue and User Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Profit Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue" />
                    <Bar dataKey="costs" fill="#ef4444" name="Costs" />
                    <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Profit" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Segments</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userSegmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {userSegmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Performance</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" fill="#8b5cf6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="costs" fill="#ef4444" fillOpacity={0.6} />
                  <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {userSegmentData.map((segment, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{segment.segment}</h4>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    ${segment.revenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">{segment.value}% of user base</div>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${segment.value}%`,
                        backgroundColor: segment.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'user_behavior':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Engagement Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="dailyActive" stroke="#8b5cf6" strokeWidth={2} name="Daily Active" />
                  <Line type="monotone" dataKey="weeklyActive" stroke="#06b6d4" strokeWidth={2} name="Weekly Active" />
                  <Line type="monotone" dataKey="monthlyActive" stroke="#10b981" strokeWidth={2} name="Monthly Active" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
              <div className="space-y-4">
                {conversionFunnel.map((stage, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{stage.stage}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">{stage.count.toLocaleString()}</span>
                          <span className="text-sm font-medium text-gray-900">{stage.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center py-12">
              <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Dashboard Content
              </h3>
              <p className="text-gray-600">
                Select a dashboard from the sidebar to view detailed analytics
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-indigo-600" />
              Business Intelligence Hub
            </h1>
            <p className="text-gray-600">
              Comprehensive business analytics and intelligence dashboard
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
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Settings className="w-4 h-4" />
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Segment
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="all">All Users</option>
                  <option value="premium">Premium Users</option>
                  <option value="standard">Standard Users</option>
                  <option value="free">Free Users</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="all">All Regions</option>
                  <option value="na">North America</option>
                  <option value="eu">Europe</option>
                  <option value="asia">Asia</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metrics
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="all">All Metrics</option>
                  <option value="financial">Financial Only</option>
                  <option value="engagement">Engagement Only</option>
                  <option value="conversion">Conversion Only</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Dashboard Navigation */}
        <div className="lg:col-span-1 space-y-6">
          {/* Dashboard Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Dashboards</h3>
            <div className="space-y-2">
              {dashboards.map((dashboard) => {
                const IconComponent = dashboard.icon;
                return (
                  <button
                    key={dashboard.id}
                    onClick={() => setSelectedDashboard(dashboard.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedDashboard === dashboard.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${
                        selectedDashboard === dashboard.id ? 'text-indigo-600' : 'text-gray-600'
                      }`} />
                      <div>
                        <div className="font-medium text-gray-900">{dashboard.name}</div>
                        <div className="text-sm text-gray-600">{dashboard.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Business Alerts</h3>
              {alertsCount > 0 && (
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                  {alertsCount}
                </span>
              )}
            </div>
            <div className="space-y-3">
              {businessAlerts.map((alert) => {
                const AlertIcon = getAlertIcon(alert.type);
                return (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertIcon className="w-5 h-5 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{alert.title}</div>
                        <div className="text-sm opacity-90 mt-1">{alert.message}</div>
                        <div className="text-xs opacity-75 mt-2">{alert.timestamp}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Today's Revenue</span>
                <span className="font-semibold text-gray-900">$8,450</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Sessions</span>
                <span className="font-semibold text-gray-900">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Conversion Rate</span>
                <span className="font-semibold text-green-600">3.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Churn Rate</span>
                <span className="font-semibold text-red-600">2.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {renderDashboardContent()}
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligenceHub;

