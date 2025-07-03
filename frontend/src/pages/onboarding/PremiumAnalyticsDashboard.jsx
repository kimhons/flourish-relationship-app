import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Heart, Users, Calendar, 
  Target, Award, Activity, BarChart3, PieChart as PieChartIcon,
  Download, Filter, RefreshCw, Settings, Share2, Bell
} from 'lucide-react';

const PremiumAnalyticsDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overall');
  const [isLoading, setIsLoading] = useState(false);

  // Sample data for relationship analytics
  const relationshipHealthData = [
    { month: 'Jan', communication: 85, intimacy: 78, trust: 92, satisfaction: 88 },
    { month: 'Feb', communication: 88, intimacy: 82, trust: 94, satisfaction: 90 },
    { month: 'Mar', communication: 92, intimacy: 85, trust: 96, satisfaction: 93 },
    { month: 'Apr', communication: 89, intimacy: 88, trust: 95, satisfaction: 91 },
    { month: 'May', communication: 94, intimacy: 91, trust: 97, satisfaction: 95 },
    { month: 'Jun', communication: 96, intimacy: 93, trust: 98, satisfaction: 97 }
  ];

  const activityData = [
    { name: 'Daily Check-ins', value: 45, color: '#8884d8' },
    { name: 'Shared Activities', value: 30, color: '#82ca9d' },
    { name: 'Communication Exercises', value: 15, color: '#ffc658' },
    { name: 'Intimacy Building', value: 10, color: '#ff7c7c' }
  ];

  const goalProgressData = [
    { goal: 'Communication', current: 85, target: 90, progress: 94 },
    { goal: 'Quality Time', current: 78, target: 85, progress: 92 },
    { goal: 'Physical Intimacy', current: 82, target: 88, progress: 93 },
    { goal: 'Emotional Connection', current: 91, target: 95, progress: 96 },
    { goal: 'Conflict Resolution', current: 76, target: 85, progress: 89 }
  ];

  const weeklyTrendsData = [
    { day: 'Mon', mood: 8.2, connection: 7.8, satisfaction: 8.5 },
    { day: 'Tue', mood: 8.5, connection: 8.1, satisfaction: 8.7 },
    { day: 'Wed', mood: 7.9, connection: 7.5, satisfaction: 8.2 },
    { day: 'Thu', mood: 8.8, connection: 8.4, satisfaction: 9.1 },
    { day: 'Fri', mood: 9.2, connection: 8.9, satisfaction: 9.4 },
    { day: 'Sat', mood: 9.5, connection: 9.2, satisfaction: 9.6 },
    { day: 'Sun', mood: 9.1, connection: 8.8, satisfaction: 9.3 }
  ];

  const keyMetrics = [
    {
      title: 'Relationship Health Score',
      value: '94.2',
      change: '+2.3',
      trend: 'up',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      title: 'Communication Quality',
      value: '96',
      change: '+4.1',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Shared Activities',
      value: '23',
      change: '+5',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Goal Achievement',
      value: '87%',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const handleRefreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleExportData = () => {
    // Export functionality would be implemented here
    alert('Analytics data exported successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Premium Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Deep insights into your relationship journey and growth patterns
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>
              
              <button
                onClick={handleRefreshData}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              
              <button
                onClick={handleExportData}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                  <p className="text-gray-600 text-sm mt-1">{metric.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Relationship Health Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Relationship Health Trends</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={relationshipHealthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="communication" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="intimacy" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="trust" stroke="#ffc658" strokeWidth={2} />
                <Line type="monotone" dataKey="satisfaction" stroke="#ff7c7c" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Activity Distribution</h3>
              <PieChartIcon className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Goal Progress and Weekly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Goal Progress */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Goal Progress</h3>
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {goalProgressData.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{goal.goal}</span>
                    <span className="text-sm text-gray-500">{goal.current}/{goal.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Weekly Trends</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={weeklyTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="mood" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Area type="monotone" dataKey="connection" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Area type="monotone" dataKey="satisfaction" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights and Recommendations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights & Recommendations</h3>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Key Insights</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Your communication scores have improved by 12% this month, showing consistent growth in expressing needs and active listening.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Weekend activities show the highest satisfaction scores, indicating the importance of quality time together.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Your trust levels have reached an all-time high of 98%, reflecting strong relationship foundation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Personalized Recommendations</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Consider scheduling more mid-week activities to maintain connection during busy periods.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-pink-50 rounded-lg">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Your conflict resolution skills could benefit from the "Active Listening" workshop series.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-700">
                    Try the "Daily Gratitude" exercise to further enhance your already strong emotional connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Share2 className="w-5 h-5 mr-2" />
            Share Progress with Partner
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5 mr-2" />
            Customize Dashboard
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5 mr-2" />
            Set Up Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumAnalyticsDashboard;

