import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Users, Eye, MousePointer, Clock, Smartphone, Monitor, 
  Globe, MapPin, Calendar, Filter, Download, Share2,
  TrendingUp, TrendingDown, Activity, Heart, MessageCircle,
  Star, Target, Award, Zap, RefreshCw, Settings,
  ArrowUp, ArrowDown, BarChart3, PieChart as PieChartIcon
} from 'lucide-react';

const UserBehaviorAnalytics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('engagement');
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [isRealTime, setIsRealTime] = useState(false);

  // User behavior data
  const engagementData = [
    { date: '2024-01-01', sessions: 1250, pageViews: 4200, avgDuration: 8.5, bounceRate: 32 },
    { date: '2024-01-02', sessions: 1380, pageViews: 4650, avgDuration: 9.2, bounceRate: 28 },
    { date: '2024-01-03', sessions: 1120, pageViews: 3890, avgDuration: 7.8, bounceRate: 35 },
    { date: '2024-01-04', sessions: 1450, pageViews: 5100, avgDuration: 10.1, bounceRate: 25 },
    { date: '2024-01-05', sessions: 1620, pageViews: 5680, avgDuration: 11.3, bounceRate: 22 },
    { date: '2024-01-06', sessions: 1580, pageViews: 5420, avgDuration: 10.8, bounceRate: 24 },
    { date: '2024-01-07', sessions: 1720, pageViews: 6100, avgDuration: 12.1, bounceRate: 20 }
  ];

  const userJourneyData = [
    { step: 'Landing Page', users: 10000, dropOff: 0 },
    { step: 'Sign Up', users: 7500, dropOff: 25 },
    { step: 'Profile Setup', users: 6000, dropOff: 20 },
    { step: 'First Browse', users: 5200, dropOff: 13.3 },
    { step: 'First Match', users: 4100, dropOff: 21.2 },
    { step: 'First Message', users: 3200, dropOff: 22 },
    { step: 'Premium Upgrade', users: 1280, dropOff: 60 }
  ];

  const deviceData = [
    { device: 'Mobile', users: 15420, percentage: 68.5, color: '#8b5cf6' },
    { device: 'Desktop', users: 5890, percentage: 26.2, color: '#06b6d4' },
    { device: 'Tablet', users: 1190, percentage: 5.3, color: '#10b981' }
  ];

  const geographicData = [
    { region: 'North America', users: 8900, sessions: 24500, avgDuration: 12.3 },
    { region: 'Europe', users: 6700, sessions: 18200, avgDuration: 11.8 },
    { region: 'Asia Pacific', users: 4200, sessions: 11800, avgDuration: 9.5 },
    { region: 'Latin America', users: 2100, sessions: 5900, avgDuration: 8.7 },
    { region: 'Others', users: 600, sessions: 1600, avgDuration: 7.2 }
  ];

  const behaviorPatterns = [
    { pattern: 'Early Birds', percentage: 15, description: 'Most active 6-9 AM', color: '#f59e0b' },
    { pattern: 'Lunch Browsers', percentage: 22, description: 'Peak activity 12-2 PM', color: '#8b5cf6' },
    { pattern: 'Evening Socializers', percentage: 35, description: 'Most active 6-10 PM', color: '#06b6d4' },
    { pattern: 'Night Owls', percentage: 18, description: 'Active after 10 PM', color: '#ef4444' },
    { pattern: 'Weekend Warriors', percentage: 10, description: 'Weekend-focused usage', color: '#10b981' }
  ];

  const featureUsageData = [
    { feature: 'Profile Browsing', usage: 95, engagement: 8.5, satisfaction: 4.2 },
    { feature: 'Messaging', usage: 78, engagement: 9.2, satisfaction: 4.5 },
    { feature: 'Photo Upload', usage: 65, engagement: 6.8, satisfaction: 3.9 },
    { feature: 'Search Filters', usage: 58, engagement: 7.1, satisfaction: 4.1 },
    { feature: 'Video Chat', usage: 42, engagement: 9.8, satisfaction: 4.7 },
    { feature: 'Events', usage: 35, engagement: 6.2, satisfaction: 3.8 },
    { feature: 'Premium Features', usage: 28, engagement: 8.9, satisfaction: 4.6 }
  ];

  const cohortRetention = [
    { week: 'Week 1', cohort1: 100, cohort2: 100, cohort3: 100, cohort4: 100 },
    { week: 'Week 2', cohort1: 85, cohort2: 88, cohort3: 82, cohort4: 90 },
    { week: 'Week 3', cohort1: 72, cohort2: 75, cohort3: 68, cohort4: 78 },
    { week: 'Week 4', cohort1: 65, cohort2: 68, cohort3: 62, cohort4: 72 },
    { week: 'Week 5', cohort1: 58, cohort2: 62, cohort3: 55, cohort4: null },
    { week: 'Week 6', cohort1: 52, cohort2: 56, cohort3: null, cohort4: null },
    { week: 'Week 7', cohort1: 48, cohort2: null, cohort3: null, cohort4: null },
    { week: 'Week 8', cohort1: 45, cohort2: null, cohort3: null, cohort4: null }
  ];

  const activityHeatmap = [
    { hour: 0, monday: 12, tuesday: 8, wednesday: 10, thursday: 15, friday: 18, saturday: 25, sunday: 22 },
    { hour: 1, monday: 8, tuesday: 5, wednesday: 7, thursday: 10, friday: 12, saturday: 20, sunday: 18 },
    { hour: 2, monday: 5, tuesday: 3, wednesday: 4, thursday: 6, friday: 8, saturday: 15, sunday: 12 },
    { hour: 3, monday: 3, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 12, sunday: 8 },
    { hour: 4, monday: 2, tuesday: 1, wednesday: 2, thursday: 3, friday: 4, saturday: 10, sunday: 6 },
    { hour: 5, monday: 4, tuesday: 3, wednesday: 4, thursday: 5, friday: 6, saturday: 8, sunday: 5 },
    { hour: 6, monday: 15, tuesday: 12, wednesday: 14, thursday: 16, friday: 18, saturday: 12, sunday: 8 },
    { hour: 7, monday: 25, tuesday: 22, wednesday: 24, thursday: 26, friday: 28, saturday: 15, sunday: 12 },
    { hour: 8, monday: 35, tuesday: 32, wednesday: 34, thursday: 36, friday: 38, saturday: 20, sunday: 18 },
    { hour: 9, monday: 45, tuesday: 42, wednesday: 44, thursday: 46, friday: 48, saturday: 25, sunday: 22 },
    { hour: 10, monday: 55, tuesday: 52, wednesday: 54, thursday: 56, friday: 58, saturday: 30, sunday: 28 },
    { hour: 11, monday: 65, tuesday: 62, wednesday: 64, thursday: 66, friday: 68, saturday: 35, sunday: 32 },
    { hour: 12, monday: 75, tuesday: 72, wednesday: 74, thursday: 76, friday: 78, saturday: 45, sunday: 42 },
    { hour: 13, monday: 70, tuesday: 68, wednesday: 70, thursday: 72, friday: 74, saturday: 50, sunday: 48 },
    { hour: 14, monday: 60, tuesday: 58, wednesday: 60, thursday: 62, friday: 64, saturday: 45, sunday: 42 },
    { hour: 15, monday: 50, tuesday: 48, wednesday: 50, thursday: 52, friday: 54, saturday: 40, sunday: 38 },
    { hour: 16, monday: 45, tuesday: 42, wednesday: 44, thursday: 46, friday: 48, saturday: 35, sunday: 32 },
    { hour: 17, monday: 55, tuesday: 52, wednesday: 54, thursday: 56, friday: 58, saturday: 40, sunday: 38 },
    { hour: 18, monday: 65, tuesday: 62, wednesday: 64, thursday: 66, friday: 68, saturday: 50, sunday: 48 },
    { hour: 19, monday: 85, tuesday: 82, wednesday: 84, thursday: 86, friday: 88, saturday: 65, sunday: 62 },
    { hour: 20, monday: 95, tuesday: 92, wednesday: 94, thursday: 96, friday: 98, saturday: 75, sunday: 72 },
    { hour: 21, monday: 90, tuesday: 88, wednesday: 90, thursday: 92, friday: 94, saturday: 80, sunday: 78 },
    { hour: 22, monday: 75, tuesday: 72, wednesday: 74, thursday: 76, friday: 78, saturday: 70, sunday: 68 },
    { hour: 23, monday: 45, tuesday: 42, wednesday: 44, thursday: 46, friday: 48, saturday: 55, sunday: 52 }
  ];

  const kpiMetrics = [
    {
      title: 'Daily Active Users',
      value: '18,420',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Avg Session Duration',
      value: '11.2 min',
      change: '+8.3%',
      trend: 'up',
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Bounce Rate',
      value: '22.1%',
      change: '-3.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Feature Adoption',
      value: '68.5%',
      change: '+5.7%',
      trend: 'up',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  useEffect(() => {
    let interval;
    if (isRealTime) {
      interval = setInterval(() => {
        console.log('Updating real-time behavior data...');
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isRealTime]);

  const getMaxValue = (data, key) => {
    return Math.max(...data.map(item => item[key]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              User Behavior Analytics
            </h1>
            <p className="text-gray-600">
              Deep insights into user interactions, patterns, and engagement metrics
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
            
            <div className="flex items-center gap-2">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1d">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
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

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Engagement Trends */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Trends</h3>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="sessions">Sessions</option>
              <option value="pageViews">Page Views</option>
              <option value="avgDuration">Avg Duration</option>
              <option value="bounceRate">Bounce Rate</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Distribution */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="users"
                label={({ device, percentage }) => `${device} ${percentage}%`}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Journey Funnel */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Journey Funnel</h3>
        <div className="space-y-4">
          {userJourneyData.map((step, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{step.step}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{step.users.toLocaleString()} users</span>
                    {index > 0 && (
                      <span className="text-sm text-red-600">-{step.dropOff}%</span>
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${(step.users / userJourneyData[0].users) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      {((step.users / userJourneyData[0].users) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Distribution & Behavior Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={geographicData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Behavior Patterns</h3>
          <div className="space-y-4">
            {behaviorPatterns.map((pattern, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: pattern.color }}
                  />
                  <div>
                    <div className="font-medium text-gray-900">{pattern.pattern}</div>
                    <div className="text-sm text-gray-600">{pattern.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{pattern.percentage}%</div>
                  <div className="text-sm text-gray-600">of users</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Usage Analysis */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Usage Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={featureUsageData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="feature" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar name="Usage %" dataKey="usage" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            <Radar name="Engagement" dataKey="engagement" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Activity Heatmap */}
      {showHeatmap && (
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Activity Heatmap</h3>
            <button
              onClick={() => setShowHeatmap(!showHeatmap)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-8 gap-1 min-w-[600px]">
              <div></div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Mon</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Tue</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Wed</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Thu</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Fri</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Sat</div>
              <div className="text-center text-sm font-medium text-gray-600 py-2">Sun</div>
              
              {activityHeatmap.map((row, index) => (
                <React.Fragment key={index}>
                  <div className="text-right text-sm text-gray-600 py-1 pr-2">
                    {row.hour.toString().padStart(2, '0')}:00
                  </div>
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.monday / 100})`,
                    }}
                    title={`Monday ${row.hour}:00 - ${row.monday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.tuesday / 100})`,
                    }}
                    title={`Tuesday ${row.hour}:00 - ${row.tuesday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.wednesday / 100})`,
                    }}
                    title={`Wednesday ${row.hour}:00 - ${row.wednesday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.thursday / 100})`,
                    }}
                    title={`Thursday ${row.hour}:00 - ${row.thursday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.friday / 100})`,
                    }}
                    title={`Friday ${row.hour}:00 - ${row.friday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.saturday / 100})`,
                    }}
                    title={`Saturday ${row.hour}:00 - ${row.saturday} active users`}
                  />
                  <div
                    className="aspect-square rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: `rgba(139, 92, 246, ${row.sunday / 100})`,
                    }}
                    title={`Sunday ${row.hour}:00 - ${row.sunday} active users`}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>Less active</span>
            <div className="flex items-center gap-1">
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: `rgba(139, 92, 246, ${opacity})` }}
                />
              ))}
            </div>
            <span>More active</span>
          </div>
        </div>
      )}

      {/* Cohort Retention Analysis */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cohort Retention Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cohortRetention}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cohort1" stroke="#8b5cf6" strokeWidth={2} name="Cohort 1" />
            <Line type="monotone" dataKey="cohort2" stroke="#06b6d4" strokeWidth={2} name="Cohort 2" />
            <Line type="monotone" dataKey="cohort3" stroke="#10b981" strokeWidth={2} name="Cohort 3" />
            <Line type="monotone" dataKey="cohort4" stroke="#f59e0b" strokeWidth={2} name="Cohort 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserBehaviorAnalytics;

