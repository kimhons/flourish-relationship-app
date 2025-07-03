import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  Zap, 
  Clock, 
  Target, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  Filter, 
  Calendar, 
  Download, 
  RefreshCw, 
  Settings, 
  Eye, 
  EyeOff, 
  Maximize, 
  Minimize, 
  MoreVertical, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Share2, 
  Bookmark, 
  Star, 
  Flag, 
  Tag, 
  Hash, 
  Link, 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Stop, 
  SkipForward, 
  SkipBack, 
  FastForward, 
  Rewind, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Desktop, 
  Watch, 
  Headphones, 
  Speaker, 
  Radio, 
  Tv, 
  Gamepad2, 
  Power, 
  Battery, 
  Plug, 
  Lightbulb, 
  Sun, 
  Moon, 
  CloudSun, 
  CloudRain, 
  Umbrella, 
  Wind, 
  Droplets, 
  Fire, 
  Flashlight, 
  Rainbow, 
  Diamond, 
  Crown, 
  Trophy, 
  Medal, 
  Ribbon, 
  Badge, 
  Certificate, 
  Scroll, 
  Document, 
  Contract, 
  Invoice, 
  Receipt, 
  Ticket, 
  Gift, 
  Present, 
  Balloon, 
  Party, 
  Cake, 
  Confetti, 
  Fireworks, 
  Sparkles, 
  Wand, 
  Magic, 
  Potion, 
  Bottle, 
  Flask, 
  TestTube, 
  Beaker, 
  Microscope, 
  Telescope, 
  Binoculars, 
  Magnifier, 
  Lens, 
  Focus, 
  Zoom, 
  ZoomIn, 
  ZoomOut, 
  Expand, 
  Shrink, 
  Fullscreen, 
  Layout, 
  Grid, 
  List, 
  Table, 
  Spreadsheet, 
  Calculator, 
  Ruler, 
  Triangle, 
  Square, 
  Circle, 
  Pentagon, 
  Hexagon, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6, 
  Puzzle, 
  Blocks, 
  Brick, 
  Wall, 
  Gate, 
  Door, 
  Window, 
  Home, 
  Building, 
  Store, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  BookOpen, 
  Book, 
  Newspaper, 
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
  Edit, 
  Edit2, 
  Edit3, 
  PenTool, 
  Highlighter, 
  Type, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  ListOrdered, 
  Quote, 
  Command, 
  Option, 
  Alt, 
  Shift, 
  Ctrl, 
  Space, 
  Enter, 
  Backspace, 
  Delete, 
  Tab, 
  Escape, 
  Function, 
  MousePointer, 
  Hand, 
  Grab, 
  Pointer, 
  Click, 
  Touch, 
  Fingerprint, 
  Glasses, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Shield, 
  Lock, 
  Key, 
  User, 
  Mail, 
  MessageSquare, 
  Phone, 
  Video, 
  Image, 
  File, 
  FileText, 
  Folder, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Wifi, 
  WifiOff, 
  Router, 
  Network, 
  BluetoothConnected, 
  BluetoothSearching, 
  BluetoothOff, 
  Usb, 
  Hdmi, 
  Ethernet, 
  Rss, 
  QrCode, 
  Barcode, 
  ScanLine, 
  Dna, 
  Atom, 
  Molecule, 
  Satellite, 
  Radar, 
  Sonar, 
  Gps, 
  Location, 
  Crosshairs, 
  Bullseye, 
  Dartboard, 
  Archery, 
  Bow, 
  Arrow, 
  Sword, 
  Armor, 
  Scepter, 
  Orb, 
  Throne, 
  Castle, 
  Tower, 
  Bridge, 
  Lighthouse, 
  Windmill, 
  Dam, 
  Well, 
  Fountain, 
  Lake, 
  River, 
  Ocean, 
  Beach, 
  Island, 
  Mountain, 
  Hill, 
  Valley, 
  Desert, 
  Forest, 
  Tree, 
  Palm, 
  Cactus, 
  Flower, 
  Rose, 
  Leaf, 
  Branch, 
  Seed, 
  Sprout, 
  Bush, 
  Grass, 
  Vine, 
  Bamboo, 
  Wheat, 
  Corn, 
  Rice
} from 'lucide-react';

const IntegrationAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedIntegration, setSelectedIntegration] = useState('all');
  const [isRealTime, setIsRealTime] = useState(true);

  // Sample analytics data
  const overviewMetrics = {
    totalIntegrations: 247,
    activeIntegrations: 189,
    totalRequests: 2847392,
    successRate: 98.7,
    averageResponseTime: 145,
    errorRate: 1.3,
    dataTransferred: 15.7, // GB
    costSavings: 234000 // USD
  };

  // Sample integration performance data
  const integrationPerformance = [
    {
      id: 'salesforce-crm',
      name: 'Salesforce CRM',
      category: 'CRM',
      status: 'Active',
      requests: 456789,
      successRate: 99.2,
      avgResponseTime: 120,
      errorRate: 0.8,
      uptime: 99.9,
      lastError: '2025-01-06T14:30:00Z',
      dataVolume: 2.3,
      cost: 1250
    },
    {
      id: 'stripe-payments',
      name: 'Stripe Payments',
      category: 'Payment',
      status: 'Active',
      requests: 234567,
      successRate: 99.8,
      avgResponseTime: 89,
      errorRate: 0.2,
      uptime: 99.95,
      lastError: '2025-01-05T09:15:00Z',
      dataVolume: 1.8,
      cost: 890
    },
    {
      id: 'mailchimp-email',
      name: 'Mailchimp Email',
      category: 'Marketing',
      status: 'Active',
      requests: 123456,
      successRate: 98.5,
      avgResponseTime: 210,
      errorRate: 1.5,
      uptime: 99.7,
      lastError: '2025-01-07T08:45:00Z',
      dataVolume: 0.9,
      cost: 450
    },
    {
      id: 'slack-notifications',
      name: 'Slack Notifications',
      category: 'Communication',
      status: 'Warning',
      requests: 89012,
      successRate: 97.8,
      avgResponseTime: 156,
      errorRate: 2.2,
      uptime: 98.9,
      lastError: '2025-01-07T11:20:00Z',
      dataVolume: 0.4,
      cost: 320
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      category: 'Analytics',
      status: 'Active',
      requests: 345678,
      successRate: 99.1,
      avgResponseTime: 178,
      errorRate: 0.9,
      uptime: 99.8,
      lastError: '2025-01-06T16:10:00Z',
      dataVolume: 3.2,
      cost: 0
    }
  ];

  // Sample error analytics
  const errorAnalytics = [
    {
      type: 'Rate Limit Exceeded',
      count: 1247,
      percentage: 45.2,
      trend: 'up',
      integrations: ['Salesforce CRM', 'Google Analytics'],
      lastOccurrence: '2025-01-07T11:45:00Z'
    },
    {
      type: 'Authentication Failed',
      count: 892,
      percentage: 32.4,
      trend: 'down',
      integrations: ['Stripe Payments', 'Mailchimp Email'],
      lastOccurrence: '2025-01-07T10:30:00Z'
    },
    {
      type: 'Timeout Error',
      count: 456,
      percentage: 16.5,
      trend: 'stable',
      integrations: ['Slack Notifications'],
      lastOccurrence: '2025-01-07T09:15:00Z'
    },
    {
      type: 'Invalid Request',
      count: 162,
      percentage: 5.9,
      trend: 'down',
      integrations: ['Mailchimp Email'],
      lastOccurrence: '2025-01-07T08:20:00Z'
    }
  ];

  // Sample usage trends
  const usageTrends = {
    daily: [
      { date: '2025-01-01', requests: 234567, errors: 2890, responseTime: 142 },
      { date: '2025-01-02', requests: 245678, errors: 3120, responseTime: 138 },
      { date: '2025-01-03', requests: 256789, errors: 2750, responseTime: 145 },
      { date: '2025-01-04', requests: 267890, errors: 3450, responseTime: 151 },
      { date: '2025-01-05', requests: 278901, errors: 2980, responseTime: 143 },
      { date: '2025-01-06', requests: 289012, errors: 3200, responseTime: 147 },
      { date: '2025-01-07', requests: 298123, errors: 2650, responseTime: 140 }
    ]
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1024) {
      return (bytes / 1024).toFixed(1) + ' TB';
    }
    return bytes.toFixed(1) + ' GB';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Warning': 'bg-yellow-100 text-yellow-800',
      'Error': 'bg-red-100 text-red-800',
      'Inactive': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-red-400" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-green-400" />;
      default:
        return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'CRM': 'bg-blue-100 text-blue-800',
      'Payment': 'bg-green-100 text-green-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Communication': 'bg-yellow-100 text-yellow-800',
      'Analytics': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Analytics Dashboard</h1>
              <p className="mt-2 text-gray-400">Comprehensive analytics and insights for all your integrations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRealTime ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-400">{isRealTime ? 'Real-time' : 'Paused'}</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all">
                <Settings className="h-5 w-5" />
                <span>Configure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500"
                >
                  <option value="1h">Last Hour</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select 
                  value={selectedIntegration}
                  onChange={(e) => setSelectedIntegration(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500"
                >
                  <option value="all">All Integrations</option>
                  <option value="salesforce-crm">Salesforce CRM</option>
                  <option value="stripe-payments">Stripe Payments</option>
                  <option value="mailchimp-email">Mailchimp Email</option>
                  <option value="slack-notifications">Slack Notifications</option>
                  <option value="google-analytics">Google Analytics</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsRealTime(!isRealTime)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isRealTime ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {isRealTime ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                <span>{isRealTime ? 'Pause' : 'Resume'}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'performance', label: 'Performance', icon: Zap },
              { id: 'errors', label: 'Errors', icon: AlertCircle },
              { id: 'usage', label: 'Usage Trends', icon: TrendingUp },
              { id: 'costs', label: 'Cost Analysis', icon: Target },
              { id: 'real-time', label: 'Real-time', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-gray-500 text-gray-300'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
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
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Requests</p>
                    <p className="text-2xl font-bold text-blue-400">{formatNumber(overviewMetrics.totalRequests)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">+12.5% from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">{overviewMetrics.successRate}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">+0.3% from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Response Time</p>
                    <p className="text-2xl font-bold text-purple-400">{overviewMetrics.averageResponseTime}ms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-8ms from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Integrations</p>
                    <p className="text-2xl font-bold text-yellow-400">{overviewMetrics.activeIntegrations}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">+5 new this week</span>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Request Volume Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Request volume over time visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Integration Distribution</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Integration usage distribution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Integrations */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Top Performing Integrations</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Integration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Avg Response</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {integrationPerformance.slice(0, 5).map((integration) => (
                      <tr key={integration.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-gray-700 rounded-lg mr-3">
                              <Database className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{integration.name}</div>
                              <div className="text-sm text-gray-400">{integration.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatNumber(integration.requests)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-semibold ${integration.successRate >= 99 ? 'text-green-400' : integration.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {integration.successRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {integration.avgResponseTime}ms
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                            {integration.status}
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

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Zap className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Fastest Integration</p>
                    <p className="text-xl font-bold text-green-400">Stripe Payments</p>
                    <p className="text-sm text-gray-400">89ms avg response</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <Clock className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Slowest Integration</p>
                    <p className="text-xl font-bold text-red-400">Mailchimp Email</p>
                    <p className="text-sm text-gray-400">210ms avg response</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Overall Uptime</p>
                    <p className="text-xl font-bold text-blue-400">99.6%</p>
                    <p className="text-sm text-gray-400">Last 30 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Performance Table */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Integration Performance Details</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Integration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Uptime</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Data Volume</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {integrationPerformance.map((integration) => (
                      <tr key={integration.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-gray-700 rounded-lg mr-3">
                              <Database className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{integration.name}</div>
                              <div className="text-sm text-gray-400">{integration.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatNumber(integration.requests)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${integration.successRate >= 99 ? 'text-green-400' : integration.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                              {integration.successRate}%
                            </span>
                            <div className="w-16 bg-gray-600 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${integration.successRate >= 99 ? 'bg-green-400' : integration.successRate >= 95 ? 'bg-yellow-400' : 'bg-red-400'}`}
                                style={{ width: `${integration.successRate}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {integration.avgResponseTime}ms
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-semibold ${integration.uptime >= 99.5 ? 'text-green-400' : integration.uptime >= 99 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {integration.uptime}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatBytes(integration.dataVolume)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Settings className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Response Time Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Response time trends over time</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Throughput Analysis</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Request throughput by integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Errors Tab */}
        {activeTab === 'errors' && (
          <div className="space-y-8">
            {/* Error Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Errors</p>
                    <p className="text-2xl font-bold text-red-400">2,757</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-15% from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Error Rate</p>
                    <p className="text-2xl font-bold text-yellow-400">{overviewMetrics.errorRate}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-0.2% from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-orange-900 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">MTTR</p>
                    <p className="text-2xl font-bold text-orange-400">12m</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-3m from last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Critical Errors</p>
                    <p className="text-2xl font-bold text-purple-400">23</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-8 from last week</span>
                </div>
              </div>
            </div>

            {/* Error Breakdown */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Error Breakdown by Type</h3>
              <div className="space-y-4">
                {errorAnalytics.map((error, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-900 rounded-lg">
                          <XCircle className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{error.type}</h4>
                          <p className="text-gray-400 text-sm">
                            {error.integrations.join(', ')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-white font-semibold">{formatNumber(error.count)}</p>
                          <p className="text-gray-400 text-sm">{error.percentage}%</p>
                        </div>
                        {getTrendIcon(error.trend)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Last occurrence: {formatDateTime(error.lastOccurrence)}</span>
                      <div className="w-32 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-red-400 h-2 rounded-full"
                          style={{ width: `${error.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Timeline */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Error Timeline</h3>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Error occurrence timeline</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Usage Trends Tab */}
        {activeTab === 'usage' && (
          <div className="space-y-8">
            {/* Usage Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Daily Request Volume</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Daily request volume trends</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Peak Usage Hours</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Hourly usage patterns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Usage Statistics</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Errors</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Avg Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {usageTrends.daily.map((day, index) => (
                      <tr key={index} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatDate(day.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatNumber(day.requests)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">
                          {formatNumber(day.errors)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {day.responseTime}ms
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-semibold ${((day.requests - day.errors) / day.requests * 100) >= 99 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {((day.requests - day.errors) / day.requests * 100).toFixed(1)}%
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

        {/* Cost Analysis Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-8">
            {/* Cost Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Costs</p>
                    <p className="text-2xl font-bold text-green-400">{formatCurrency(2910)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-red-400">+5.2% from last month</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Cost Savings</p>
                    <p className="text-2xl font-bold text-blue-400">{formatCurrency(overviewMetrics.costSavings)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">+12% from automation</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Cost per Request</p>
                    <p className="text-2xl font-bold text-purple-400">$0.001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">-8% optimization</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Activity className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">ROI</p>
                    <p className="text-2xl font-bold text-yellow-400">8,040%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">Excellent return</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Cost Breakdown by Integration</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Integration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Monthly Cost</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cost per Request</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Data Transfer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {integrationPerformance.map((integration) => (
                      <tr key={integration.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-gray-700 rounded-lg mr-3">
                              <Database className="h-5 w-5 text-gray-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{integration.name}</div>
                              <div className="text-sm text-gray-400">{integration.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatCurrency(integration.cost)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          ${(integration.cost / integration.requests * 1000).toFixed(4)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {formatBytes(integration.dataVolume)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <TrendingDown className="h-4 w-4 text-green-400" />
                            <span className="text-green-400">-2.1%</span>
                          </div>
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
        {activeTab === 'real-time' && (
          <div className="space-y-8">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Activity className="h-6 w-6 text-green-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Live Requests</p>
                    <p className="text-2xl font-bold text-green-400">1,247</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">per minute</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Current Response Time</p>
                    <p className="text-2xl font-bold text-blue-400">142ms</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">average</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Errors</p>
                    <p className="text-2xl font-bold text-red-400">3</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">in last 5 minutes</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Users</p>
                    <p className="text-2xl font-bold text-purple-400">892</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">online now</p>
              </div>
            </div>

            {/* Live Activity Feed */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Live Activity Feed</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {[
                  { time: '11:45:23', integration: 'Salesforce CRM', action: 'User created', status: 'success' },
                  { time: '11:45:20', integration: 'Stripe Payments', action: 'Payment processed', status: 'success' },
                  { time: '11:45:18', integration: 'Mailchimp Email', action: 'Email sent', status: 'success' },
                  { time: '11:45:15', integration: 'Slack Notifications', action: 'Message failed', status: 'error' },
                  { time: '11:45:12', integration: 'Google Analytics', action: 'Event tracked', status: 'success' },
                  { time: '11:45:09', integration: 'Salesforce CRM', action: 'Contact updated', status: 'success' },
                  { time: '11:45:06', integration: 'Stripe Payments', action: 'Subscription created', status: 'success' },
                  { time: '11:45:03', integration: 'Mailchimp Email', action: 'Campaign sent', status: 'success' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-400 text-sm font-mono">{activity.time}</span>
                      <span className="text-white">{activity.integration}</span>
                      <span className="text-gray-300">{activity.action}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.status === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-400" />
                      )}
                      <span className={`text-sm ${activity.status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Live Request Rate</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Real-time request rate visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Response Time Distribution</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Live response time distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationAnalyticsDashboard;

