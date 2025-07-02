import React, { useState, useEffect } from 'react';
import { 
  Building2, Users, BarChart3, Settings, Shield, 
  TrendingUp, AlertTriangle, CheckCircle, Clock,
  DollarSign, Target, Zap, Globe, Database,
  UserCheck, Activity, PieChart, LineChart,
  Calendar, Bell, Filter, Download, Search,
  Plus, Edit, Trash2, Eye, MoreHorizontal,
  ArrowUp, ArrowDown, Minus, RefreshCw
} from 'lucide-react';

const EnterpriseDashboardAdminPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedClient, setSelectedClient] = useState('all');
  const [dashboardData, setDashboardData] = useState({
    overview: {
      totalClients: 247,
      activeUsers: 15847,
      monthlyRevenue: 2847000,
      satisfactionScore: 94.7,
      growthRate: 23.4,
      retentionRate: 91.2
    },
    alerts: [
      { id: 1, type: 'critical', message: 'TechCorp usage spike detected - scaling required', time: '2 min ago' },
      { id: 2, type: 'warning', message: 'HealthPlus contract renewal due in 7 days', time: '1 hour ago' },
      { id: 3, type: 'info', message: 'New enterprise client onboarding completed', time: '3 hours ago' }
    ],
    topClients: [
      { name: 'TechCorp Global', users: 2847, revenue: 284700, satisfaction: 96.2, growth: 18.4 },
      { name: 'HealthPlus Systems', users: 1923, revenue: 192300, satisfaction: 94.8, growth: 22.1 },
      { name: 'Finance Solutions Inc', users: 1456, revenue: 145600, satisfaction: 93.7, growth: 15.9 },
      { name: 'Manufacturing United', users: 1234, revenue: 123400, satisfaction: 95.1, growth: 19.7 },
      { name: 'Retail Dynamics', users: 987, revenue: 98700, satisfaction: 92.4, growth: 25.3 }
    ]
  });

  const [adminActions, setAdminActions] = useState([
    { id: 1, action: 'Client Onboarding', user: 'Sarah Chen', time: '10 min ago', status: 'completed' },
    { id: 2, action: 'System Maintenance', user: 'Mike Rodriguez', time: '1 hour ago', status: 'in-progress' },
    { id: 3, action: 'Security Audit', user: 'Dr. Emily Watson', time: '2 hours ago', status: 'completed' },
    { id: 4, action: 'Performance Optimization', user: 'Alex Thompson', time: '4 hours ago', status: 'pending' }
  ]);

  const tabs = [
    { id: 'overview', label: 'Enterprise Overview', icon: BarChart3 },
    { id: 'clients', label: 'Client Management', icon: Building2 },
    { id: 'analytics', label: 'Advanced Analytics', icon: TrendingUp },
    { id: 'security', label: 'Security & Compliance', icon: Shield },
    { id: 'system', label: 'System Administration', icon: Settings },
    { id: 'reports', label: 'Executive Reports', icon: Database }
  ];

  const timeframes = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: '1y', label: 'Last Year' }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.overview.totalClients}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Building2 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+12.3% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.overview.activeUsers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+18.7% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${(dashboardData.overview.monthlyRevenue / 1000000).toFixed(1)}M</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+23.4% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction Score</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.overview.satisfactionScore}%</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Target className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.1% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.overview.growthRate}%</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+5.2% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Retention Rate</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.overview.retentionRate}%</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <UserCheck className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+3.8% from last month</span>
          </div>
        </div>
      </div>

      {/* Alerts and Top Clients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {dashboardData.alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`p-1 rounded-full ${
                  alert.type === 'critical' ? 'bg-red-100' :
                  alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <AlertTriangle className={`h-4 w-4 ${
                    alert.type === 'critical' ? 'text-red-600' :
                    alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clients */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Enterprise Clients</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {dashboardData.topClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.users.toLocaleString()} users</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${(client.revenue / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-green-600">+{client.growth}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Admin Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Admin Actions</h3>
          <Activity className="h-5 w-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Administrator</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminActions.map((action) => (
                <tr key={action.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-900">{action.action}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{action.user}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{action.time}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      action.status === 'completed' ? 'bg-green-100 text-green-800' :
                      action.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {action.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderClientsTab = () => (
    <div className="space-y-6">
      {/* Client Management Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600">Manage enterprise clients and their configurations</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search clients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Industries</option>
            <option value="tech">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="manufacturing">Manufacturing</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Sizes</option>
            <option value="small">Small (1-100)</option>
            <option value="medium">Medium (101-1000)</option>
            <option value="large">Large (1000+)</option>
          </select>
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Client</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Industry</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Users</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Revenue</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Satisfaction</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.topClients.map((client, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500">Enterprise Client</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">Technology</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{client.users.toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">${(client.revenue / 1000).toFixed(0)}K</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900">{client.satisfaction}%</span>
                      <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${client.satisfaction}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Advanced Analytics</h2>
        <div className="flex space-x-3">
          <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {timeframes.map(tf => (
              <option key={tf.value} value={tf.value}>{tf.label}</option>
            ))}
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Analytics Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <LineChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Engagement</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Security & Compliance</h2>
      
      {/* Security Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Score</p>
              <p className="text-2xl font-bold text-green-600">98.7%</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Excellent security posture</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Status</p>
              <p className="text-2xl font-bold text-blue-600">100%</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">SOC2, HIPAA, GDPR compliant</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Threat Detection</p>
              <p className="text-2xl font-bold text-yellow-600">Active</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Real-time monitoring active</p>
        </div>
      </div>

      {/* Security Events */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Security Events</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm text-gray-900">Security audit completed successfully</span>
            </div>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-sm text-gray-900">SSL certificates renewed</span>
            </div>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">System Administration</h2>
      
      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">System Uptime</p>
              <p className="text-2xl font-bold text-green-600">99.97%</p>
            </div>
            <Activity className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Time</p>
              <p className="text-2xl font-bold text-blue-600">127ms</p>
            </div>
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Sessions</p>
              <p className="text-2xl font-bold text-purple-600">12.4K</p>
            </div>
            <Users className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Server Load</p>
              <p className="text-2xl font-bold text-yellow-600">67%</p>
            </div>
            <Database className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* System Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
            <RefreshCw className="h-6 w-6 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Restart Services</p>
            <p className="text-sm text-gray-500">Restart all system services</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
            <Database className="h-6 w-6 text-green-600 mb-2" />
            <p className="font-medium text-gray-900">Backup Database</p>
            <p className="text-sm text-gray-500">Create system backup</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
            <Settings className="h-6 w-6 text-purple-600 mb-2" />
            <p className="font-medium text-gray-900">System Settings</p>
            <p className="text-sm text-gray-500">Configure system parameters</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Executive Reports</h2>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Business Report</h3>
          <p className="text-sm text-gray-600 mb-4">Comprehensive monthly performance and metrics</p>
          <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <PieChart className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Analysis Report</h3>
          <p className="text-sm text-gray-600 mb-4">Detailed client performance and satisfaction analysis</p>
          <button className="w-full px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <Shield className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Compliance Report</h3>
          <p className="text-sm text-gray-600 mb-4">Security status and compliance verification</p>
          <button className="w-full px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enterprise Dashboard</h1>
              <p className="text-gray-600">Comprehensive B2B administration and management portal</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">System Status: Operational</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'clients' && renderClientsTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
        {activeTab === 'security' && renderSecurityTab()}
        {activeTab === 'system' && renderSystemTab()}
        {activeTab === 'reports' && renderReportsTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">💕</span>
              </div>
              <div>
                <p className="font-semibold">Dr. Love Enterprise AI</p>
                <p className="text-sm opacity-90">Advanced B2B relationship analytics and management</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Enterprise Dashboard v2.0</p>
              <p className="text-xs opacity-75">Powered by 47 AI models with 94.7% accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboardAdminPortal;

