import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  AreaChart, Area, ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, TrendingDown, BarChart3, PieChart as PieChartIcon, 
  LineChart as LineChartIcon, Activity, Users, Heart, MessageCircle, 
  Calendar, Filter, Download, Share2, Settings, Maximize2, 
  RefreshCw, Eye, EyeOff, Palette, Grid, Layout, Zap,
  Target, Award, Clock, Star, ArrowUp, ArrowDown
} from 'lucide-react';

const AdvancedDataVisualizationDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedMetrics, setSelectedMetrics] = useState(['users', 'engagement', 'relationships']);
  const [chartType, setChartType] = useState('line');
  const [isRealTime, setIsRealTime] = useState(false);
  const [dashboardLayout, setDashboardLayout] = useState('grid');
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dashboardRef = useRef(null);

  // Sample data for different visualizations
  const timeSeriesData = [
    { date: '2024-01-01', users: 1200, engagement: 85, relationships: 340, messages: 2400, matches: 180 },
    { date: '2024-01-02', users: 1350, engagement: 88, relationships: 365, messages: 2650, matches: 195 },
    { date: '2024-01-03', users: 1180, engagement: 82, relationships: 320, messages: 2200, matches: 165 },
    { date: '2024-01-04', users: 1420, engagement: 91, relationships: 380, messages: 2800, matches: 210 },
    { date: '2024-01-05', users: 1580, engagement: 94, relationships: 420, messages: 3100, matches: 245 },
    { date: '2024-01-06', users: 1650, engagement: 96, relationships: 450, messages: 3300, matches: 260 },
    { date: '2024-01-07', users: 1720, engagement: 98, relationships: 480, messages: 3500, matches: 280 }
  ];

  const demographicsData = [
    { name: '18-24', value: 25, color: '#8884d8' },
    { name: '25-34', value: 35, color: '#82ca9d' },
    { name: '35-44', value: 20, color: '#ffc658' },
    { name: '45-54', value: 15, color: '#ff7c7c' },
    { name: '55+', value: 5, color: '#8dd1e1' }
  ];

  const engagementData = [
    { category: 'Messages', current: 85, previous: 78, target: 90 },
    { category: 'Profile Views', current: 92, previous: 88, target: 95 },
    { category: 'Matches', current: 76, previous: 82, target: 85 },
    { category: 'Conversations', current: 88, previous: 85, target: 90 },
    { category: 'Dates Planned', current: 65, previous: 60, target: 75 }
  ];

  const relationshipSuccessData = [
    { month: 'Jan', successful: 45, total: 120, rate: 37.5 },
    { month: 'Feb', successful: 52, total: 135, rate: 38.5 },
    { month: 'Mar', successful: 48, total: 125, rate: 38.4 },
    { month: 'Apr', successful: 58, total: 145, rate: 40.0 },
    { month: 'May', successful: 65, total: 160, rate: 40.6 },
    { month: 'Jun', successful: 72, total: 175, rate: 41.1 }
  ];

  const heatmapData = [
    { hour: '00:00', day: 'Mon', value: 12 },
    { hour: '01:00', day: 'Mon', value: 8 },
    { hour: '02:00', day: 'Mon', value: 5 },
    { hour: '03:00', day: 'Mon', value: 3 },
    { hour: '04:00', day: 'Mon', value: 2 },
    { hour: '05:00', day: 'Mon', value: 4 },
    { hour: '06:00', day: 'Mon', value: 15 },
    { hour: '07:00', day: 'Mon', value: 25 },
    { hour: '08:00', day: 'Mon', value: 35 },
    { hour: '09:00', day: 'Mon', value: 45 },
    { hour: '10:00', day: 'Mon', value: 55 },
    { hour: '11:00', day: 'Mon', value: 65 },
    { hour: '12:00', day: 'Mon', value: 75 },
    { hour: '13:00', day: 'Mon', value: 70 },
    { hour: '14:00', day: 'Mon', value: 60 },
    { hour: '15:00', day: 'Mon', value: 50 },
    { hour: '16:00', day: 'Mon', value: 45 },
    { hour: '17:00', day: 'Mon', value: 55 },
    { hour: '18:00', day: 'Mon', value: 65 },
    { hour: '19:00', day: 'Mon', value: 85 },
    { hour: '20:00', day: 'Mon', value: 95 },
    { hour: '21:00', day: 'Mon', value: 90 },
    { hour: '22:00', day: 'Mon', value: 75 },
    { hour: '23:00', day: 'Mon', value: 45 }
  ];

  const kpiData = [
    { 
      title: 'Active Users', 
      value: '24,567', 
      change: '+12.5%', 
      trend: 'up', 
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'Engagement Rate', 
      value: '94.2%', 
      change: '+3.8%', 
      trend: 'up', 
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      title: 'Successful Matches', 
      value: '1,847', 
      change: '+8.2%', 
      trend: 'up', 
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    { 
      title: 'Messages Sent', 
      value: '156K', 
      change: '-2.1%', 
      trend: 'down', 
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  useEffect(() => {
    let interval;
    if (isRealTime) {
      interval = setInterval(() => {
        // Simulate real-time data updates
        console.log('Updating real-time data...');
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isRealTime]);

  const handleExport = (format) => {
    console.log(`Exporting dashboard as ${format}`);
    // Implementation for export functionality
  };

  const handleShare = () => {
    console.log('Sharing dashboard');
    // Implementation for sharing functionality
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      dashboardRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const renderChart = (data, type, title) => {
    const chartProps = {
      width: '100%',
      height: 300,
      data: data
    };

    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer {...chartProps}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer {...chartProps}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" />
              <Bar dataKey="relationships" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer {...chartProps}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="messages" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="matches" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer {...chartProps}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div 
      ref={dashboardRef}
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 ${
        isFullscreen ? 'fixed inset-0 z-50 overflow-auto' : ''
      }`}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Advanced Data Visualization Dashboard
            </h1>
            <p className="text-gray-600">
              Comprehensive analytics and insights for relationship platform performance
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
              <button
                onClick={() => handleExport('pdf')}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                Fullscreen
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
                  Time Range
                </label>
                <select
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1d">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chart Type
                </label>
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="line">Line Chart</option>
                  <option value="bar">Bar Chart</option>
                  <option value="area">Area Chart</option>
                  <option value="scatter">Scatter Plot</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Layout
                </label>
                <select
                  value={dashboardLayout}
                  onChange={(e) => setDashboardLayout(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="grid">Grid Layout</option>
                  <option value="masonry">Masonry Layout</option>
                  <option value="single">Single Column</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="default">Default</option>
                  <option value="dark">Dark Mode</option>
                  <option value="colorful">Colorful</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => {
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

      {/* Main Charts Grid */}
      <div className={`grid gap-6 mb-8 ${
        dashboardLayout === 'grid' ? 'grid-cols-1 lg:grid-cols-2' :
        dashboardLayout === 'single' ? 'grid-cols-1' :
        'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
      }`}>
        {/* Time Series Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">User Activity Trends</h3>
            <div className="flex items-center gap-2">
              <LineChartIcon className="w-5 h-5 text-gray-500" />
              <RefreshCw className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
          {renderChart(timeSeriesData, chartType, 'User Activity')}
        </div>

        {/* Demographics Pie Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">User Demographics</h3>
            <PieChartIcon className="w-5 h-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Radar Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Metrics</h3>
            <Target className="w-5 h-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={engagementData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Current" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Previous" dataKey="previous" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Target" dataKey="target" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Relationship Success Rate */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Relationship Success Rate</h3>
            <Heart className="w-5 h-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={relationshipSuccessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="rate" stroke="#ff7c7c" fill="#ff7c7c" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">User Activity Heatmap</h3>
          <Clock className="w-5 h-5 text-gray-500" />
        </div>
        <div className="grid grid-cols-24 gap-1">
          {heatmapData.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor: `rgba(59, 130, 246, ${item.value / 100})`,
              }}
              title={`${item.hour}: ${item.value} active users`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:00</span>
        </div>
      </div>

      {/* Advanced Analytics Summary */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">94.2%</div>
            <div className="text-gray-600">Overall Engagement</div>
            <div className="text-sm text-green-600 mt-1">↑ 3.8% from last period</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">41.1%</div>
            <div className="text-gray-600">Success Rate</div>
            <div className="text-sm text-green-600 mt-1">↑ 2.6% from last period</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">156K</div>
            <div className="text-gray-600">Messages This Month</div>
            <div className="text-sm text-red-600 mt-1">↓ 2.1% from last period</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDataVisualizationDashboard;

