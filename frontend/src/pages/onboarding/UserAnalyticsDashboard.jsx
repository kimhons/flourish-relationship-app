import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  MousePointer, 
  Target, 
  Activity, 
  Calendar, 
  Filter, 
  Download, 
  RefreshCw, 
  Settings, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  ArrowUp, 
  ArrowDown, 
  Minus,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  Search,
  ShoppingCart,
  Heart,
  MessageSquare,
  Star,
  Play,
  Pause,
  UserPlus,
  UserMinus,
  Zap,
  Award,
  Bell,
  Mail,
  Phone,
  Video,
  FileText,
  Image,
  Link,
  Hash,
  DollarSign,
  Percent,
  Navigation,
  Layers,
  Database,
  Code,
  Wifi,
  WifiOff,
  Chrome,
  Firefox,
  Safari,
  Smartphone as Mobile,
  Info,
  HelpCircle,
  ExternalLink,
  PieChart,
  LineChart,
  AreaChart
} from 'lucide-react';

const UserAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('7days');
  const [selectedMetric, setSelectedMetric] = useState('page_views');
  const [showFilters, setShowFilters] = useState(false);
  const [realTimeData, setRealTimeData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Date range options
  const dateRanges = [
    { id: '24hours', label: 'Last 24 Hours' },
    { id: '7days', label: 'Last 7 Days' },
    { id: '30days', label: 'Last 30 Days' },
    { id: '90days', label: 'Last 90 Days' },
    { id: 'custom', label: 'Custom Range' }
  ];

  // Key metrics data
  const [metricsData, setMetricsData] = useState({
    totalUsers: 45672,
    activeUsers: 12847,
    newUsers: 3421,
    returningUsers: 9426,
    sessionDuration: 8.4,
    bounceRate: 23.7,
    pageViews: 156789,
    uniquePageViews: 98234,
    conversionRate: 4.2,
    revenue: 89456
  });

  // Traffic sources data
  const trafficSources = [
    { source: 'Organic Search', users: 18234, percentage: 39.9, change: 12.3 },
    { source: 'Direct', users: 13678, percentage: 29.9, change: -2.1 },
    { source: 'Social Media', users: 8945, percentage: 19.6, change: 24.7 },
    { source: 'Referral', users: 3456, percentage: 7.6, change: 8.9 },
    { source: 'Email', users: 1359, percentage: 3.0, change: 15.2 }
  ];

  // Device and browser data
  const deviceData = [
    { type: 'Mobile', users: 25834, percentage: 56.6, icon: Smartphone },
    { type: 'Desktop', users: 15678, percentage: 34.3, icon: Monitor },
    { type: 'Tablet', users: 4160, percentage: 9.1, icon: Tablet }
  ];

  const browserData = [
    { browser: 'Chrome', users: 28945, percentage: 63.4, icon: Chrome },
    { browser: 'Safari', users: 12678, percentage: 27.8, icon: Safari },
    { browser: 'Firefox', users: 3456, percentage: 7.6, icon: Firefox },
    { browser: 'Other', users: 593, percentage: 1.2, icon: Globe }
  ];

  // Geographic data
  const geographicData = [
    { country: 'United States', users: 18234, percentage: 39.9 },
    { country: 'Canada', users: 6789, percentage: 14.9 },
    { country: 'United Kingdom', users: 5432, percentage: 11.9 },
    { country: 'Australia', users: 3456, percentage: 7.6 },
    { country: 'Germany', users: 2890, percentage: 6.3 },
    { country: 'France', users: 2345, percentage: 5.1 },
    { country: 'Other', users: 6526, percentage: 14.3 }
  ];

  // Page performance data
  const pagePerformance = [
    { page: '/dashboard', views: 23456, uniqueViews: 18234, avgTime: '3:24', bounceRate: 18.2 },
    { page: '/relationship-tools', views: 18945, uniqueViews: 15678, avgTime: '5:12', bounceRate: 12.7 },
    { page: '/ai-coaching', views: 15678, uniqueViews: 12890, avgTime: '4:38', bounceRate: 15.3 },
    { page: '/premium-features', views: 12345, uniqueViews: 9876, avgTime: '2:56', bounceRate: 28.4 },
    { page: '/community', views: 9876, uniqueViews: 8234, avgTime: '6:45', bounceRate: 9.8 }
  ];

  // User journey data
  const userJourney = [
    { step: 'Landing Page', users: 10000, dropOff: 0, conversionRate: 100 },
    { step: 'Sign Up', users: 7500, dropOff: 2500, conversionRate: 75 },
    { step: 'Onboarding', users: 6000, dropOff: 1500, conversionRate: 60 },
    { step: 'First Assessment', users: 4800, dropOff: 1200, conversionRate: 48 },
    { step: 'Premium Upgrade', users: 2400, dropOff: 2400, conversionRate: 24 },
    { step: 'Active User', users: 2000, dropOff: 400, conversionRate: 20 }
  ];

  // Real-time activity data
  const [realTimeActivity, setRealTimeActivity] = useState([
    { time: '14:30', activeUsers: 1247, pageViews: 3456 },
    { time: '14:25', activeUsers: 1189, pageViews: 3234 },
    { time: '14:20', activeUsers: 1156, pageViews: 3123 },
    { time: '14:15', activeUsers: 1203, pageViews: 3345 },
    { time: '14:10', activeUsers: 1278, pageViews: 3567 },
    { time: '14:05', activeUsers: 1234, pageViews: 3445 },
    { time: '14:00', activeUsers: 1198, pageViews: 3298 }
  ]);

  // Event tracking data
  const eventData = [
    { event: 'Button Click', count: 45678, uniqueUsers: 12345 },
    { event: 'Form Submission', count: 8945, uniqueUsers: 6789 },
    { event: 'Video Play', count: 15678, uniqueUsers: 9876 },
    { event: 'Download', count: 3456, uniqueUsers: 2890 },
    { event: 'Share', count: 2345, uniqueUsers: 1890 },
    { event: 'Search', count: 12345, uniqueUsers: 8234 }
  ];

  // Cohort analysis data
  const cohortData = [
    { cohort: 'Week 1', week1: 100, week2: 85, week3: 72, week4: 65, week5: 58 },
    { cohort: 'Week 2', week1: 100, week2: 88, week3: 75, week4: 68, week5: 61 },
    { cohort: 'Week 3', week1: 100, week2: 82, week3: 69, week4: 62, week5: 55 },
    { cohort: 'Week 4', week1: 100, week2: 90, week3: 78, week4: 71, week5: 64 },
    { cohort: 'Week 5', week1: 100, week2: 86, week3: 73, week4: 66, week5: 59 }
  ];

  // Update real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeActivity(prev => {
        const newActivity = [...prev];
        const now = new Date();
        const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        newActivity.unshift({
          time: timeString,
          activeUsers: Math.floor(Math.random() * 200) + 1100,
          pageViews: Math.floor(Math.random() * 500) + 3000
        });
        
        return newActivity.slice(0, 10);
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

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
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const refreshData = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Analytics Dashboard</h1>
              <p className="mt-2 text-gray-600">Comprehensive insights into user behavior and platform performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {dateRanges.map((range) => (
                  <option key={range.id} value={range.id}>{range.label}</option>
                ))}
              </select>
              <button
                onClick={refreshData}
                disabled={isLoading}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export</span>
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
              { id: 'audience', label: 'Audience', icon: Users },
              { id: 'behavior', label: 'Behavior', icon: Activity },
              { id: 'acquisition', label: 'Acquisition', icon: Target },
              { id: 'conversions', label: 'Conversions', icon: TrendingUp },
              { id: 'realtime', label: 'Real-time', icon: Zap }
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
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(metricsData.totalUsers)}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(8.2)}
                  <span className={`ml-1 ${getChangeColor(8.2)}`}>+8.2% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(metricsData.activeUsers)}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(12.5)}
                  <span className={`ml-1 ${getChangeColor(12.5)}`}>+12.5% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Page Views</p>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(metricsData.pageViews)}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Eye className="h-6 w-6 text-purple-600" />
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
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metricsData.conversionRate}%</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(2.1)}
                  <span className={`ml-1 ${getChangeColor(2.1)}`}>+2.1% from last period</span>
                </div>
              </div>
            </div>

            {/* Traffic Overview Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Traffic Overview</h3>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="page_views">Page Views</option>
                    <option value="unique_visitors">Unique Visitors</option>
                    <option value="session_duration">Session Duration</option>
                    <option value="bounce_rate">Bounce Rate</option>
                  </select>
                </div>
              </div>
              
              {/* Mock Chart Area */}
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive chart showing {selectedMetric.replace('_', ' ')} over time</p>
                  <p className="text-sm text-gray-500 mt-2">Chart visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Top Pages and Traffic Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Pages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
                <div className="space-y-4">
                  {pagePerformance.slice(0, 5).map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{page.page}</p>
                        <p className="text-sm text-gray-600">{formatNumber(page.views)} views</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{page.avgTime}</p>
                        <p className="text-sm text-gray-600">avg time</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">{source.source}</p>
                          <p className="text-sm text-gray-600">{source.percentage}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{formatNumber(source.users)}</p>
                        <div className="flex items-center text-sm">
                          {getChangeIcon(source.change)}
                          <span className={`ml-1 ${getChangeColor(source.change)}`}>
                            {source.change > 0 ? '+' : ''}{source.change}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Audience Tab */}
        {activeTab === 'audience' && (
          <div className="space-y-8">
            {/* Audience Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">New vs Returning</h3>
                  <PieChart className="h-6 w-6 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">New Users</span>
                    </div>
                    <span className="font-medium">{formatNumber(metricsData.newUsers)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Returning Users</span>
                    </div>
                    <span className="font-medium">{formatNumber(metricsData.returningUsers)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Session Duration</h3>
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{metricsData.sessionDuration} min</p>
                  <p className="text-sm text-gray-600 mt-2">Average session duration</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Bounce Rate</h3>
                  <MousePointer className="h-6 w-6 text-gray-400" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{metricsData.bounceRate}%</p>
                  <p className="text-sm text-gray-600 mt-2">Single page sessions</p>
                </div>
              </div>
            </div>

            {/* Device and Browser Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Device Breakdown */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Types</h3>
                <div className="space-y-4">
                  {deviceData.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <device.icon className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{device.type}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 w-12 text-right">
                          {device.percentage}%
                        </span>
                        <span className="text-sm text-gray-500 w-16 text-right">
                          {formatNumber(device.users)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Browser Breakdown */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Browsers</h3>
                <div className="space-y-4">
                  {browserData.map((browser, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <browser.icon className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{browser.browser}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${browser.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 w-12 text-right">
                          {browser.percentage}%
                        </span>
                        <span className="text-sm text-gray-500 w-16 text-right">
                          {formatNumber(browser.users)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Geographic Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {geographicData.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{country.country}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${country.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 w-12 text-right">
                          {country.percentage}%
                        </span>
                        <span className="text-sm text-gray-500 w-16 text-right">
                          {formatNumber(country.users)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive world map</p>
                    <p className="text-sm text-gray-500">Geographic visualization would be rendered here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Behavior Tab */}
        {activeTab === 'behavior' && (
          <div className="space-y-8">
            {/* Page Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Page Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Page</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Page Views</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Unique Views</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Avg Time</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pagePerformance.map((page, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{page.page}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{formatNumber(page.views)}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{formatNumber(page.uniqueViews)}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{page.avgTime}</td>
                        <td className="py-3 px-4 text-right">
                          <span className={`${page.bounceRate > 25 ? 'text-red-600' : page.bounceRate > 15 ? 'text-yellow-600' : 'text-green-600'}`}>
                            {page.bounceRate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Event Tracking */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Event Tracking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventData.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{event.event}</h4>
                      <MousePointer className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Events</span>
                        <span className="font-medium">{formatNumber(event.count)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Unique Users</span>
                        <span className="font-medium">{formatNumber(event.uniqueUsers)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Journey Funnel */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Journey Funnel</h3>
              <div className="space-y-4">
                {userJourney.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{step.step}</h4>
                          <p className="text-sm text-gray-600">{formatNumber(step.users)} users</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{step.conversionRate}%</p>
                        <p className="text-sm text-gray-600">conversion rate</p>
                      </div>
                    </div>
                    {step.dropOff > 0 && (
                      <div className="absolute right-4 -bottom-2 bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        -{formatNumber(step.dropOff)} dropped off
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Acquisition Tab */}
        {activeTab === 'acquisition' && (
          <div className="space-y-8">
            {/* Channel Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Channel Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Channel</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Users</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Sessions</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Bounce Rate</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-600">Conversion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trafficSources.map((source, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{source.source}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{formatNumber(source.users)}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{formatNumber(Math.floor(source.users * 1.2))}</td>
                        <td className="py-3 px-4 text-right text-gray-900">{(Math.random() * 20 + 15).toFixed(1)}%</td>
                        <td className="py-3 px-4 text-right text-gray-900">{(Math.random() * 5 + 2).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Summer Love Campaign', users: 5432, cost: 2500, conversions: 234 },
                  { name: 'Relationship Goals 2025', users: 3456, cost: 1800, conversions: 189 },
                  { name: 'Valentine\'s Special', users: 2890, cost: 1200, conversions: 156 },
                  { name: 'Premium Feature Launch', users: 2345, cost: 1500, conversions: 98 },
                  { name: 'Mobile App Promotion', users: 1890, cost: 800, conversions: 87 },
                  { name: 'Referral Program', users: 1567, cost: 500, conversions: 145 }
                ].map((campaign, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">{campaign.name}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Users</span>
                        <span className="font-medium">{formatNumber(campaign.users)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Cost</span>
                        <span className="font-medium">${formatNumber(campaign.cost)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Conversions</span>
                        <span className="font-medium">{campaign.conversions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">CPA</span>
                        <span className="font-medium">${(campaign.cost / campaign.conversions).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conversions Tab */}
        {activeTab === 'conversions' && (
          <div className="space-y-8">
            {/* Conversion Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Goal Completions</p>
                    <p className="text-3xl font-bold text-gray-900">2,847</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(15.3)}
                  <span className={`ml-1 ${getChangeColor(15.3)}`}>+15.3% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{metricsData.conversionRate}%</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Percent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(2.1)}
                  <span className={`ml-1 ${getChangeColor(2.1)}`}>+2.1% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${formatNumber(metricsData.revenue)}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(18.7)}
                  <span className={`ml-1 ${getChangeColor(18.7)}`}>+18.7% from last period</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">AOV</p>
                    <p className="text-3xl font-bold text-gray-900">$31.42</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {getChangeIcon(5.8)}
                  <span className={`ml-1 ${getChangeColor(5.8)}`}>+5.8% from last period</span>
                </div>
              </div>
            </div>

            {/* Goal Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Goal Performance</h3>
              <div className="space-y-4">
                {[
                  { goal: 'Premium Subscription', completions: 1247, rate: 4.2, value: 47580 },
                  { goal: 'Assessment Completion', completions: 856, rate: 12.8, value: 0 },
                  { goal: 'Profile Setup', completions: 634, rate: 18.9, value: 0 },
                  { goal: 'First Coaching Session', completions: 423, rate: 6.7, value: 12690 },
                  { goal: 'Community Engagement', completions: 312, rate: 8.4, value: 0 }
                ].map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{goal.goal}</h4>
                      <p className="text-sm text-gray-600">{goal.completions} completions</p>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{goal.rate}%</p>
                        <p className="text-xs text-gray-600">Conversion Rate</p>
                      </div>
                      {goal.value > 0 && (
                        <div className="text-center">
                          <p className="font-bold text-green-600">${formatNumber(goal.value)}</p>
                          <p className="text-xs text-gray-600">Goal Value</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cohort Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Cohort Retention Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Cohort</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Week 1</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Week 2</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Week 3</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Week 4</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-600">Week 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cohortData.map((cohort, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium text-gray-900">{cohort.cohort}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                            {cohort.week1}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${
                            cohort.week2 >= 80 ? 'bg-green-100 text-green-800' :
                            cohort.week2 >= 60 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cohort.week2}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${
                            cohort.week3 >= 70 ? 'bg-green-100 text-green-800' :
                            cohort.week3 >= 50 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cohort.week3}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${
                            cohort.week4 >= 60 ? 'bg-green-100 text-green-800' :
                            cohort.week4 >= 40 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cohort.week4}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-sm ${
                            cohort.week5 >= 55 ? 'bg-green-100 text-green-800' :
                            cohort.week5 >= 35 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {cohort.week5}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Real-time Tab */}
        {activeTab === 'realtime' && (
          <div className="space-y-8">
            {/* Real-time Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">{realTimeActivity[0]?.activeUsers || 1247}</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-600">Live</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Page Views/min</p>
                    <p className="text-3xl font-bold text-gray-900">{Math.floor((realTimeActivity[0]?.pageViews || 3456) / 5)}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-blue-600">Real-time</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Top Country</p>
                    <p className="text-3xl font-bold text-gray-900">US</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-purple-600">42% of active users</span>
                </div>
              </div>
            </div>

            {/* Real-time Activity Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Real-time Activity</h3>
              <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Real-time activity chart</p>
                  <p className="text-sm text-gray-500 mt-2">Live data visualization would be rendered here</p>
                </div>
              </div>
            </div>

            {/* Active Pages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Active Pages</h3>
              <div className="space-y-3">
                {[
                  { page: '/dashboard', activeUsers: 234 },
                  { page: '/relationship-tools', activeUsers: 189 },
                  { page: '/ai-coaching', activeUsers: 156 },
                  { page: '/premium-features', activeUsers: 123 },
                  { page: '/community', activeUsers: 98 },
                  { page: '/assessments', activeUsers: 87 },
                  { page: '/profile', activeUsers: 76 }
                ].map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{page.page}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${(page.activeUsers / 234) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-gray-900 w-12 text-right">{page.activeUsers}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAnalyticsDashboard;

