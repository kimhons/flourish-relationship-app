import React, { useState, useEffect } from 'react';
import { 
  Code, Key, Globe, Database, Server, Cloud,
  Activity, BarChart3, PieChart, TrendingUp, Target,
  Settings, Bell, Mail, Phone, MessageCircle,
  Search, Filter, Download, Upload, RefreshCw,
  Plus, Edit, Trash2, MoreHorizontal, Info,
  FileText, Clipboard, Award, Star, Zap,
  Calendar, Clock, ArrowUp, ArrowDown, Minus,
  Users, UserCheck, UserPlus, Shield, Lock,
  Network, GitBranch, Layers, HardDrive, Cpu,
  BookOpen, Terminal, Package, Webhook, Eye,
  CheckCircle, AlertTriangle, AlertCircle, XCircle
} from 'lucide-react';

const APIManagementDeveloperPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAPI, setSelectedAPI] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [apiFilter, setApiFilter] = useState('all');

  const [apiData, setApiData] = useState({
    overview: {
      totalAPIs: 47,
      activeEndpoints: 234,
      totalRequests: 2847392,
      averageLatency: 127,
      uptime: 99.97,
      errorRate: 0.23,
      developerCount: 1247,
      applicationCount: 89
    },
    apis: [
      {
        id: 1,
        name: 'Relationship Analytics API',
        version: 'v2.1',
        status: 'active',
        category: 'Analytics',
        description: 'Comprehensive relationship data and analytics endpoints',
        endpoints: 23,
        requests: 847392,
        latency: 89,
        uptime: 99.98,
        errorRate: 0.12,
        developers: 234,
        applications: 45,
        rateLimit: '1000/hour',
        authentication: 'OAuth 2.0',
        lastUpdated: '2024-12-01',
        documentation: 'Complete',
        sdks: ['JavaScript', 'Python', 'Java', 'PHP'],
        pricing: 'Premium',
        tags: ['analytics', 'relationships', 'data']
      },
      {
        id: 2,
        name: 'User Management API',
        version: 'v1.8',
        status: 'active',
        category: 'Core',
        description: 'User authentication, profile management, and access control',
        endpoints: 18,
        requests: 1247893,
        latency: 67,
        uptime: 99.99,
        errorRate: 0.08,
        developers: 456,
        applications: 67,
        rateLimit: '5000/hour',
        authentication: 'API Key',
        lastUpdated: '2024-11-28',
        documentation: 'Complete',
        sdks: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'],
        pricing: 'Free',
        tags: ['users', 'authentication', 'core']
      },
      {
        id: 3,
        name: 'Communication API',
        version: 'v3.0',
        status: 'active',
        category: 'Communication',
        description: 'Messaging, notifications, and communication features',
        endpoints: 31,
        requests: 567234,
        latency: 156,
        uptime: 99.95,
        errorRate: 0.34,
        developers: 189,
        applications: 23,
        rateLimit: '2000/hour',
        authentication: 'OAuth 2.0',
        lastUpdated: '2024-12-03',
        documentation: 'In Progress',
        sdks: ['JavaScript', 'Python', 'Swift', 'Kotlin'],
        pricing: 'Standard',
        tags: ['messaging', 'notifications', 'communication']
      },
      {
        id: 4,
        name: 'AI Coaching API',
        version: 'v1.2',
        status: 'beta',
        category: 'AI/ML',
        description: 'Dr. Love AI coaching and recommendation engine',
        endpoints: 12,
        requests: 89456,
        latency: 234,
        uptime: 99.89,
        errorRate: 0.67,
        developers: 67,
        applications: 8,
        rateLimit: '500/hour',
        authentication: 'OAuth 2.0',
        lastUpdated: '2024-12-05',
        documentation: 'Beta',
        sdks: ['JavaScript', 'Python'],
        pricing: 'Enterprise',
        tags: ['ai', 'coaching', 'ml', 'beta']
      },
      {
        id: 5,
        name: 'Gaming Platform API',
        version: 'v2.3',
        status: 'active',
        category: 'Gaming',
        description: 'Relationship games, achievements, and progress tracking',
        endpoints: 28,
        requests: 345678,
        latency: 98,
        uptime: 99.96,
        errorRate: 0.19,
        developers: 123,
        applications: 15,
        rateLimit: '3000/hour',
        authentication: 'API Key',
        lastUpdated: '2024-11-30',
        documentation: 'Complete',
        sdks: ['JavaScript', 'Unity', 'Python'],
        pricing: 'Premium',
        tags: ['gaming', 'achievements', 'progress']
      }
    ],
    developers: [
      {
        id: 1,
        name: 'TechCorp Solutions',
        email: 'dev@techcorp.com',
        tier: 'Enterprise',
        applications: 12,
        apiCalls: 1247893,
        joinDate: '2024-01-15',
        status: 'active',
        lastActivity: '2 hours ago'
      },
      {
        id: 2,
        name: 'StartupXYZ',
        email: 'api@startupxyz.com',
        tier: 'Premium',
        applications: 3,
        apiCalls: 234567,
        joinDate: '2024-06-20',
        status: 'active',
        lastActivity: '1 day ago'
      },
      {
        id: 3,
        name: 'InnovateNow',
        email: 'dev@innovatenow.io',
        tier: 'Standard',
        applications: 5,
        apiCalls: 89456,
        joinDate: '2024-09-10',
        status: 'active',
        lastActivity: '3 hours ago'
      }
    ],
    analytics: {
      requestVolume: [
        { date: '2024-11-01', requests: 234567 },
        { date: '2024-11-02', requests: 245678 },
        { date: '2024-11-03', requests: 256789 },
        { date: '2024-11-04', requests: 267890 },
        { date: '2024-11-05', requests: 278901 }
      ],
      topEndpoints: [
        { endpoint: '/api/v2/relationships/analytics', requests: 456789, percentage: 32.1 },
        { endpoint: '/api/v1/users/profile', requests: 234567, percentage: 16.5 },
        { endpoint: '/api/v3/messages/send', requests: 189456, percentage: 13.3 },
        { endpoint: '/api/v2/games/progress', requests: 156789, percentage: 11.0 },
        { endpoint: '/api/v1/auth/token', requests: 123456, percentage: 8.7 }
      ],
      errorTypes: [
        { type: '4xx Client Errors', count: 2345, percentage: 67.8 },
        { type: '5xx Server Errors', count: 789, percentage: 22.8 },
        { type: 'Timeout Errors', count: 234, percentage: 6.8 },
        { type: 'Rate Limit Exceeded', count: 89, percentage: 2.6 }
      ]
    },
    documentation: [
      {
        id: 1,
        title: 'Getting Started Guide',
        description: 'Complete guide to integrating with Flourish APIs',
        category: 'Guides',
        lastUpdated: '2024-12-01',
        views: 12456,
        rating: 4.8
      },
      {
        id: 2,
        title: 'Authentication & Security',
        description: 'OAuth 2.0, API keys, and security best practices',
        category: 'Security',
        lastUpdated: '2024-11-28',
        views: 8934,
        rating: 4.9
      },
      {
        id: 3,
        title: 'Rate Limiting & Quotas',
        description: 'Understanding API limits and optimization strategies',
        category: 'Performance',
        lastUpdated: '2024-11-25',
        views: 6789,
        rating: 4.7
      },
      {
        id: 4,
        title: 'Webhook Integration',
        description: 'Real-time event notifications and webhook setup',
        category: 'Integration',
        lastUpdated: '2024-12-03',
        views: 5432,
        rating: 4.6
      }
    ]
  });

  const tabs = [
    { id: 'overview', label: 'API Overview', icon: Globe },
    { id: 'apis', label: 'API Management', icon: Code },
    { id: 'developers', label: 'Developer Portal', icon: Users },
    { id: 'analytics', label: 'API Analytics', icon: BarChart3 },
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'security', label: 'Security & Keys', icon: Key }
  ];

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    beta: 'bg-yellow-100 text-yellow-800',
    deprecated: 'bg-red-100 text-red-800',
    maintenance: 'bg-blue-100 text-blue-800'
  };

  const tierColors = {
    Enterprise: 'bg-purple-100 text-purple-800',
    Premium: 'bg-blue-100 text-blue-800',
    Standard: 'bg-green-100 text-green-800',
    Free: 'bg-gray-100 text-gray-800'
  };

  const getLatencyColor = (latency) => {
    if (latency < 100) return 'text-green-600';
    if (latency < 200) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getUptimeColor = (uptime) => {
    if (uptime >= 99.9) return 'text-green-600';
    if (uptime >= 99.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* API Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total APIs</p>
              <p className="text-2xl font-bold text-gray-900">{apiData.overview.totalAPIs}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+3 new APIs this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">{apiData.overview.totalRequests.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+23% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Latency</p>
              <p className={`text-2xl font-bold ${getLatencyColor(apiData.overview.averageLatency)}`}>
                {apiData.overview.averageLatency}ms
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowDown className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">-15ms improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Uptime</p>
              <p className={`text-2xl font-bold ${getUptimeColor(apiData.overview.uptime)}`}>
                {apiData.overview.uptime}%
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+0.02% this month</span>
          </div>
        </div>
      </div>

      {/* API Performance Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Request Volume Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Request Volume Trends</h3>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive request volume visualization</p>
            </div>
          </div>
        </div>

        {/* API Health Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">API Health Status</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {apiData.apis.slice(0, 4).map((api) => (
              <div key={api.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    api.status === 'active' ? 'bg-green-500' :
                    api.status === 'beta' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{api.name}</p>
                    <p className="text-sm text-gray-500">{api.version} • {api.endpoints} endpoints</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${getUptimeColor(api.uptime)}`}>{api.uptime}%</p>
                  <p className="text-xs text-gray-500">{api.latency}ms avg</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing APIs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing APIs</h3>
          <Star className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apiData.apis
            .sort((a, b) => b.requests - a.requests)
            .slice(0, 3)
            .map((api, index) => (
              <div key={api.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-yellow-100 text-yellow-800' :
                    index === 1 ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    <span className="text-sm font-bold">#{index + 1}</span>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[api.status]}`}>
                    {api.status}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{api.name}</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Requests:</span>
                    <span className="text-xs text-gray-900">{api.requests.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Developers:</span>
                    <span className="text-xs text-gray-900">{api.developers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Uptime:</span>
                    <span className={`text-xs font-medium ${getUptimeColor(api.uptime)}`}>{api.uptime}%</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Developer & Application Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Developer Growth</h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Developers</span>
              <span className="text-lg font-bold text-gray-900">{apiData.overview.developerCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active Applications</span>
              <span className="text-lg font-bold text-gray-900">{apiData.overview.applicationCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Monthly Growth</span>
              <div className="flex items-center space-x-1">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-600">+18.7%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">API Categories</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {[
              { category: 'Analytics', count: 12, color: 'bg-blue-500' },
              { category: 'Core', count: 15, color: 'bg-green-500' },
              { category: 'Communication', count: 8, color: 'bg-purple-500' },
              { category: 'Gaming', count: 7, color: 'bg-yellow-500' },
              { category: 'AI/ML', count: 5, color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-600">{item.category}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.count} APIs</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAPIsTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">API Management</h2>
          <p className="text-gray-600">Comprehensive API lifecycle management and monitoring</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={apiFilter} 
            onChange={(e) => setApiFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All APIs</option>
            <option value="active">Active</option>
            <option value="beta">Beta</option>
            <option value="deprecated">Deprecated</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New API
          </button>
        </div>
      </div>

      {/* APIs Grid */}
      <div className="grid grid-cols-1 gap-6">
        {apiData.apis.map((api) => (
          <div key={api.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* API Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{api.name}</h3>
                    <span className="text-sm text-gray-500">{api.version}</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[api.status]}`}>
                      {api.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{api.description}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Category: {api.category}</span>
                    <span className="text-xs text-gray-500">Updated: {new Date(api.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tierColors[api.pricing]}`}>
                  {api.pricing}
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* API Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Endpoints</p>
                <p className="text-lg font-semibold text-gray-900">{api.endpoints}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Requests</p>
                <p className="text-lg font-semibold text-gray-900">{api.requests.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Latency</p>
                <p className={`text-lg font-semibold ${getLatencyColor(api.latency)}`}>{api.latency}ms</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Uptime</p>
                <p className={`text-lg font-semibold ${getUptimeColor(api.uptime)}`}>{api.uptime}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Developers</p>
                <p className="text-lg font-semibold text-gray-900">{api.developers}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Apps</p>
                <p className="text-lg font-semibold text-gray-900">{api.applications}</p>
              </div>
            </div>

            {/* API Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Rate Limit</p>
                <p className="text-sm text-gray-900">{api.rateLimit}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Authentication</p>
                <p className="text-sm text-gray-900">{api.authentication}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Documentation</p>
                <p className="text-sm text-gray-900">{api.documentation}</p>
              </div>
            </div>

            {/* SDKs and Tags */}
            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-2">Available SDKs</p>
                <div className="flex flex-wrap gap-2">
                  {api.sdks.map((sdk, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {sdk}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {api.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedAPI(api)}
                className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BarChart3 className="h-4 w-4 mr-1" />
                Analytics
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BookOpen className="h-4 w-4 mr-1" />
                Docs
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Settings className="h-4 w-4 mr-1" />
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* API Details Modal */}
      {selectedAPI && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedAPI.name}</h2>
                    <p className="text-gray-600">{selectedAPI.version} • {selectedAPI.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAPI(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* API Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">API Overview</h3>
                <p className="text-gray-600 mb-4">{selectedAPI.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600">Total Requests</p>
                        <p className="text-2xl font-bold text-blue-900">{selectedAPI.requests.toLocaleString()}</p>
                      </div>
                      <Activity className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600">Uptime</p>
                        <p className="text-2xl font-bold text-green-900">{selectedAPI.uptime}%</p>
                      </div>
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-yellow-600">Avg Latency</p>
                        <p className="text-2xl font-bold text-yellow-900">{selectedAPI.latency}ms</p>
                      </div>
                      <Clock className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Authentication</p>
                    <p className="text-gray-900">{selectedAPI.authentication}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Rate Limit</p>
                    <p className="text-gray-900">{selectedAPI.rateLimit}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Endpoints</p>
                    <p className="text-gray-900">{selectedAPI.endpoints} endpoints</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Error Rate</p>
                    <p className="text-gray-900">{selectedAPI.errorRate}%</p>
                  </div>
                </div>
              </div>

              {/* Usage Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Developers</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedAPI.developers}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Connected Applications</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedAPI.applications}</p>
                  </div>
                </div>
              </div>

              {/* Available SDKs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Available SDKs</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedAPI.sdks.map((sdk, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg text-center">
                      <p className="font-medium text-gray-900">{sdk}</p>
                      <button className="text-sm text-blue-600 hover:text-blue-800 mt-1">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderDevelopersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Developer Portal</h2>
          <p className="text-gray-600">Manage developer accounts, applications, and API access</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Developer
        </button>
      </div>

      {/* Developer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Developers</p>
              <p className="text-2xl font-bold text-gray-900">{apiData.overview.developerCount.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active This Month</p>
              <p className="text-2xl font-bold text-green-600">1,089</p>
            </div>
            <UserCheck className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-bold text-purple-600">{apiData.overview.applicationCount}</p>
            </div>
            <Package className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New This Month</p>
              <p className="text-2xl font-bold text-yellow-600">47</p>
            </div>
            <UserPlus className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Developer List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Developer Accounts</h3>
        <div className="space-y-4">
          {apiData.developers.map((developer) => (
            <div key={developer.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      {developer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{developer.name}</h4>
                    <p className="text-sm text-gray-600">{developer.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tierColors[developer.tier]}`}>
                    {developer.tier}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {developer.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Applications</p>
                  <p className="text-sm text-gray-900">{developer.applications}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">API Calls</p>
                  <p className="text-sm text-gray-900">{developer.apiCalls.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Join Date</p>
                  <p className="text-sm text-gray-900">{new Date(developer.joinDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last Activity</p>
                  <p className="text-sm text-gray-900">{developer.lastActivity}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm font-medium hover:bg-blue-100">
                  <Eye className="h-3 w-3 mr-1" />
                  View Profile
                </button>
                <button className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100">
                  <Key className="h-3 w-3 mr-1" />
                  API Keys
                </button>
                <button className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  Usage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">API Analytics</h2>
          <p className="text-gray-600">Comprehensive API usage analytics and performance insights</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">{apiData.overview.totalRequests.toLocaleString()}</p>
            </div>
            <Activity className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Error Rate</p>
              <p className="text-2xl font-bold text-red-600">{apiData.overview.errorRate}%</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-yellow-600">{apiData.overview.averageLatency}ms</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Throughput</p>
              <p className="text-2xl font-bold text-green-600">1.2K/min</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Volume Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Top Endpoints */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top API Endpoints</h3>
        <div className="space-y-4">
          {apiData.analytics.topEndpoints.map((endpoint, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  <span className="text-sm font-bold">#{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{endpoint.endpoint}</p>
                  <p className="text-sm text-gray-500">{endpoint.requests.toLocaleString()} requests</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{endpoint.percentage}%</p>
                <p className="text-sm text-gray-500">of total traffic</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Error Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apiData.analytics.errorTypes.map((error, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{error.type}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Count:</span>
                  <span className="text-sm text-gray-900">{error.count.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Percentage:</span>
                  <span className="text-sm text-gray-900">{error.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDocumentationTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">API Documentation</h2>
          <p className="text-gray-600">Comprehensive API documentation and developer resources</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Document
        </button>
      </div>

      {/* Documentation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Documents</p>
              <p className="text-2xl font-bold text-gray-900">{apiData.documentation.length}</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-green-600">
                {apiData.documentation.reduce((sum, doc) => sum + doc.views, 0).toLocaleString()}
              </p>
            </div>
            <Eye className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-yellow-600">
                {(apiData.documentation.reduce((sum, doc) => sum + doc.rating, 0) / apiData.documentation.length).toFixed(1)}
              </p>
            </div>
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Last Updated</p>
              <p className="text-2xl font-bold text-purple-600">2d</p>
            </div>
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Documentation List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Documentation Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apiData.documentation.map((doc) => (
            <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{doc.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                  <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                    {doc.category}
                  </span>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Views</p>
                  <p className="text-sm text-gray-900">{doc.views.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-900">{doc.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium hover:bg-blue-100">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </button>
                  <button className="inline-flex items-center px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium hover:bg-gray-100">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'API Reference', description: 'Complete API endpoint documentation', icon: Code },
            { title: 'SDK Downloads', description: 'Official SDKs for popular languages', icon: Package },
            { title: 'Postman Collection', description: 'Ready-to-use API collection', icon: Download },
            { title: 'Code Examples', description: 'Sample code and tutorials', icon: Terminal },
            { title: 'Webhook Guide', description: 'Real-time event notifications', icon: Webhook },
            { title: 'Support Forum', description: 'Community support and discussions', icon: MessageCircle }
          ].map((link, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <link.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{link.title}</h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Security & API Keys</h2>
          <p className="text-gray-600">Manage API keys, authentication, and security settings</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Key className="h-4 w-4 mr-2" />
          Generate API Key
        </button>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active API Keys</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <Key className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">OAuth Apps</p>
              <p className="text-2xl font-bold text-green-600">89</p>
            </div>
            <Lock className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Incidents</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rate Limit Hits</p>
              <p className="text-2xl font-bold text-yellow-600">234</p>
            </div>
            <Shield className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication Methods</h3>
          <div className="space-y-4">
            {[
              { method: 'API Key Authentication', enabled: true, usage: '67%' },
              { method: 'OAuth 2.0', enabled: true, usage: '28%' },
              { method: 'JWT Tokens', enabled: true, usage: '5%' },
              { method: 'Basic Authentication', enabled: false, usage: '0%' }
            ].map((auth, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${auth.enabled ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="font-medium text-gray-900">{auth.method}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600">{auth.usage} usage</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Policies</h3>
          <div className="space-y-4">
            {[
              { policy: 'Rate Limiting', status: 'Active', level: 'Strict' },
              { policy: 'IP Whitelisting', status: 'Active', level: 'Moderate' },
              { policy: 'Request Signing', status: 'Active', level: 'Required' },
              { policy: 'CORS Protection', status: 'Active', level: 'Enabled' }
            ].map((policy, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{policy.policy}</p>
                  <p className="text-sm text-gray-600">{policy.level}</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                  {policy.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Security Events */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Security Events</h3>
        <div className="space-y-4">
          {[
            { event: 'API Key Rotation', description: 'Automatic key rotation completed for enterprise clients', time: '2 hours ago', severity: 'info' },
            { event: 'Rate Limit Exceeded', description: 'Developer account exceeded rate limits', time: '4 hours ago', severity: 'warning' },
            { event: 'Suspicious Activity', description: 'Unusual API usage pattern detected', time: '1 day ago', severity: 'high' },
            { event: 'OAuth App Approved', description: 'New OAuth application approved for production', time: '2 days ago', severity: 'info' }
          ].map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <div className={`w-3 h-3 rounded-full mt-1 ${
                event.severity === 'high' ? 'bg-red-500' :
                event.severity === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{event.event}</p>
                <p className="text-xs text-gray-600">{event.description}</p>
                <p className="text-xs text-gray-400 mt-1">{event.time}</p>
              </div>
            </div>
          ))}
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
              <h1 className="text-3xl font-bold text-gray-900">API Management & Developer Portal</h1>
              <p className="text-gray-600">Comprehensive API lifecycle management and developer experience platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{apiData.overview.totalAPIs} APIs Active</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AP</span>
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
        {activeTab === 'apis' && renderAPIsTab()}
        {activeTab === 'developers' && renderDevelopersTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
        {activeTab === 'documentation' && renderDocumentationTab()}
        {activeTab === 'security' && renderSecurityTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love API Platform</p>
                <p className="text-sm opacity-90">Enterprise-grade API management and developer experience</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">API Platform v3.0</p>
              <p className="text-xs opacity-75">Comprehensive API lifecycle management with advanced analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIManagementDeveloperPortal;

