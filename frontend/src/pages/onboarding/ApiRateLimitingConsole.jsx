import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Clock, 
  Activity, 
  BarChart3, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Settings, 
  Play, 
  Pause, 
  Stop, 
  RefreshCw, 
  Filter, 
  Search, 
  Download, 
  Upload, 
  Save, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Key, 
  User, 
  Users, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  Target, 
  Flag, 
  Tag, 
  Hash, 
  Percent, 
  DollarSign, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  MoreVertical, 
  Info, 
  HelpCircle, 
  Bell, 
  BellOff, 
  Mail, 
  MessageSquare, 
  Phone, 
  Video, 
  Image, 
  File, 
  FileText, 
  Folder, 
  Link, 
  ExternalLink, 
  Copy, 
  Share2, 
  Bookmark, 
  Star, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
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
  Award, 
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
  Maximize, 
  Minimize, 
  Expand, 
  Shrink, 
  Fullscreen, 
  Layout, 
  Grid, 
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
  List, 
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
  Rice, 
  Apple, 
  Orange, 
  Banana, 
  Grape, 
  Strawberry, 
  Cherry, 
  Pineapple, 
  Coconut, 
  Avocado, 
  Carrot, 
  Potato, 
  Tomato, 
  Pepper, 
  Onion, 
  Garlic, 
  Herbs, 
  Spices, 
  Salt, 
  Sugar, 
  Honey, 
  Milk, 
  Cheese, 
  Bread, 
  Meat, 
  Fish, 
  Egg, 
  Pasta, 
  Pizza, 
  Burger, 
  Sandwich, 
  Salad, 
  Soup, 
  Coffee, 
  Tea, 
  Water, 
  Juice, 
  Wine, 
  Beer, 
  Cocktail, 
  Soda, 
  Ice, 
  Cookie, 
  Candy, 
  Chocolate, 
  Donut, 
  Pie, 
  Muffin, 
  Cupcake, 
  Pancake, 
  Waffle, 
  Toast, 
  Cereal, 
  Yogurt, 
  Smoothie, 
  Shake, 
  Lemonade
} from 'lucide-react';

const ApiRateLimitingConsole = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isEditingPolicy, setIsEditingPolicy] = useState(false);
  const [rateLimitPolicies, setRateLimitPolicies] = useState([]);

  // Sample rate limiting policies
  const samplePolicies = [
    {
      id: 'policy-001',
      name: 'Standard API Access',
      description: 'Default rate limiting for standard API consumers',
      type: 'Per API Key',
      limit: 1000,
      window: '1 hour',
      burst: 50,
      status: 'Active',
      consumers: 1247,
      violations: 23,
      lastViolation: '2025-01-07T09:30:00Z',
      endpoints: ['GET /api/users', 'POST /api/assessments', 'GET /api/relationships']
    },
    {
      id: 'policy-002',
      name: 'Premium User Access',
      description: 'Enhanced rate limits for premium subscribers',
      type: 'Per User',
      limit: 5000,
      window: '1 hour',
      burst: 200,
      status: 'Active',
      consumers: 456,
      violations: 3,
      lastViolation: '2025-01-06T14:20:00Z',
      endpoints: ['ALL /api/*']
    },
    {
      id: 'policy-003',
      name: 'Integration Partners',
      description: 'High-volume access for trusted integration partners',
      type: 'Per IP',
      limit: 10000,
      window: '1 hour',
      burst: 500,
      status: 'Active',
      consumers: 12,
      violations: 0,
      lastViolation: null,
      endpoints: ['ALL /api/v2/*']
    },
    {
      id: 'policy-004',
      name: 'Public API Endpoints',
      description: 'Conservative limits for public-facing endpoints',
      type: 'Per IP',
      limit: 100,
      window: '1 hour',
      burst: 10,
      status: 'Active',
      consumers: 8934,
      violations: 156,
      lastViolation: '2025-01-07T10:15:00Z',
      endpoints: ['GET /api/public/*']
    },
    {
      id: 'policy-005',
      name: 'Emergency Throttling',
      description: 'Temporary restrictive policy for system protection',
      type: 'Global',
      limit: 50,
      window: '1 minute',
      burst: 5,
      status: 'Inactive',
      consumers: 0,
      violations: 0,
      lastViolation: null,
      endpoints: ['ALL /*']
    }
  ];

  // Sample rate limiting metrics
  const rateLimitMetrics = {
    totalRequests: 2456789,
    blockedRequests: 12456,
    blockRate: 0.51,
    topViolators: [
      { id: 'api_key_123', requests: 1567, violations: 23, type: 'API Key' },
      { id: '192.168.1.100', requests: 2341, violations: 18, type: 'IP Address' },
      { id: 'user_456', requests: 987, violations: 12, type: 'User ID' },
      { id: 'api_key_789', requests: 1234, violations: 8, type: 'API Key' }
    ],
    recentViolations: [
      { timestamp: '2025-01-07T10:15:00Z', consumer: 'api_key_123', policy: 'Standard API Access', endpoint: 'GET /api/users', attempts: 1567 },
      { timestamp: '2025-01-07T10:12:00Z', consumer: '192.168.1.100', policy: 'Public API Endpoints', endpoint: 'GET /api/public/stats', attempts: 234 },
      { timestamp: '2025-01-07T10:08:00Z', consumer: 'user_456', policy: 'Standard API Access', endpoint: 'POST /api/assessments', attempts: 89 },
      { timestamp: '2025-01-07T10:05:00Z', consumer: 'api_key_789', policy: 'Premium User Access', endpoint: 'GET /api/relationships', attempts: 156 }
    ]
  };

  useEffect(() => {
    setRateLimitPolicies(samplePolicies);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Inactive': 'bg-gray-100 text-gray-800',
      'Suspended': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type) => {
    const colors = {
      'Per API Key': 'bg-blue-100 text-blue-800',
      'Per User': 'bg-purple-100 text-purple-800',
      'Per IP': 'bg-yellow-100 text-yellow-800',
      'Global': 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const createNewPolicy = () => {
    setSelectedPolicy({
      id: `policy-${Date.now()}`,
      name: '',
      description: '',
      type: 'Per API Key',
      limit: 1000,
      window: '1 hour',
      burst: 50,
      status: 'Inactive',
      consumers: 0,
      violations: 0,
      lastViolation: null,
      endpoints: []
    });
    setIsEditingPolicy(true);
  };

  const savePolicy = () => {
    if (selectedPolicy) {
      const updatedPolicies = rateLimitPolicies.some(p => p.id === selectedPolicy.id)
        ? rateLimitPolicies.map(p => p.id === selectedPolicy.id ? selectedPolicy : p)
        : [...rateLimitPolicies, selectedPolicy];
      setRateLimitPolicies(updatedPolicies);
      setIsEditingPolicy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">API Rate Limiting Console</h1>
              <p className="mt-2 text-gray-400">Manage API rate limits, monitor usage, and prevent abuse with intelligent throttling</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-400">Rate Limiting Active</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export Logs</span>
              </button>
              <button 
                onClick={createNewPolicy}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>New Policy</span>
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
                <Clock className="h-5 w-5 text-gray-400" />
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                >
                  <option value="1h">Last Hour</option>
                  <option value="6h">Last 6 Hours</option>
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500">
                  <option value="all">All Policies</option>
                  <option value="active">Active Only</option>
                  <option value="violations">With Violations</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search policies..."
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'policies', label: 'Rate Limit Policies', icon: Shield },
              { id: 'monitoring', label: 'Real-time Monitoring', icon: BarChart3 },
              { id: 'violations', label: 'Violations', icon: AlertCircle },
              { id: 'analytics', label: 'Analytics', icon: LineChart },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-400'
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
                    <p className="text-2xl font-bold text-blue-400">{formatNumber(rateLimitMetrics.totalRequests)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+15.2%</span>
                  <span className="text-gray-400">vs last period</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Blocked Requests</p>
                    <p className="text-2xl font-bold text-red-400">{formatNumber(rateLimitMetrics.blockedRequests)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-8.3%</span>
                  <span className="text-gray-400">vs last period</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Percent className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Block Rate</p>
                    <p className="text-2xl font-bold text-yellow-400">{rateLimitMetrics.blockRate}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-0.2%</span>
                  <span className="text-gray-400">vs last period</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Policies</p>
                    <p className="text-2xl font-bold text-green-400">{rateLimitPolicies.filter(p => p.status === 'Active').length}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">All operational</span>
                </div>
              </div>
            </div>

            {/* Top Violators */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Top Rate Limit Violators</h3>
                <div className="space-y-4">
                  {rateLimitMetrics.topViolators.map((violator, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-red-900 rounded-full">
                          <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{violator.id}</p>
                          <p className="text-sm text-gray-400">{violator.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-red-400 font-semibold">{violator.violations} violations</p>
                        <p className="text-sm text-gray-400">{formatNumber(violator.requests)} requests</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Recent Violations</h3>
                <div className="space-y-4">
                  {rateLimitMetrics.recentViolations.map((violation, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-white font-medium">{violation.consumer}</p>
                          <p className="text-sm text-gray-400">{violation.policy}</p>
                        </div>
                        <span className="text-xs text-gray-500">{formatDate(violation.timestamp)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-300">{violation.endpoint}</p>
                        <span className="text-red-400 font-semibold">{violation.attempts} attempts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rate Limiting Trends */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Rate Limiting Trends</h3>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Rate limiting trends visualization</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Policies Tab */}
        {activeTab === 'policies' && (
          <div className="space-y-8">
            {/* Policies List */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Policy</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Limits</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Consumers</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Violations</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {rateLimitPolicies.map((policy) => (
                      <tr key={policy.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-red-900 rounded-lg mr-3">
                              <Shield className="h-5 w-5 text-red-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{policy.name}</div>
                              <div className="text-sm text-gray-400">{policy.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(policy.type)}`}>
                            {policy.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div>
                            <span className="text-white font-semibold">{formatNumber(policy.limit)}</span>
                            <span className="text-gray-400"> / {policy.window}</span>
                          </div>
                          <div className="text-xs text-gray-500">Burst: {policy.burst}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(policy.status)}`}>
                            {policy.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatNumber(policy.consumers)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${policy.violations > 0 ? 'text-red-400' : 'text-green-400'}`}>
                              {policy.violations}
                            </span>
                            {policy.lastViolation && (
                              <span className="text-xs text-gray-500">
                                {formatDate(policy.lastViolation)}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => {
                                setSelectedPolicy(policy);
                                setIsEditingPolicy(true);
                              }}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Policy Editor Modal */}
            {isEditingPolicy && selectedPolicy && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-2xl mx-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">
                      {selectedPolicy.id.startsWith('policy-') && selectedPolicy.name === '' ? 'Create New Policy' : 'Edit Policy'}
                    </h3>
                    <button 
                      onClick={() => setIsEditingPolicy(false)}
                      className="text-gray-400 hover:text-gray-200"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Policy Name</label>
                      <input
                        type="text"
                        value={selectedPolicy.name}
                        onChange={(e) => setSelectedPolicy({...selectedPolicy, name: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        placeholder="Enter policy name..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                      <textarea
                        value={selectedPolicy.description}
                        onChange={(e) => setSelectedPolicy({...selectedPolicy, description: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        rows="3"
                        placeholder="Enter policy description..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Policy Type</label>
                        <select
                          value={selectedPolicy.type}
                          onChange={(e) => setSelectedPolicy({...selectedPolicy, type: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        >
                          <option value="Per API Key">Per API Key</option>
                          <option value="Per User">Per User</option>
                          <option value="Per IP">Per IP</option>
                          <option value="Global">Global</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
                        <select
                          value={selectedPolicy.status}
                          onChange={(e) => setSelectedPolicy({...selectedPolicy, status: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Suspended">Suspended</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Request Limit</label>
                        <input
                          type="number"
                          value={selectedPolicy.limit}
                          onChange={(e) => setSelectedPolicy({...selectedPolicy, limit: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Time Window</label>
                        <select
                          value={selectedPolicy.window}
                          onChange={(e) => setSelectedPolicy({...selectedPolicy, window: e.target.value})}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        >
                          <option value="1 minute">1 minute</option>
                          <option value="5 minutes">5 minutes</option>
                          <option value="15 minutes">15 minutes</option>
                          <option value="1 hour">1 hour</option>
                          <option value="1 day">1 day</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Burst Limit</label>
                        <input
                          type="number"
                          value={selectedPolicy.burst}
                          onChange={(e) => setSelectedPolicy({...selectedPolicy, burst: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Endpoints (one per line)</label>
                      <textarea
                        value={selectedPolicy.endpoints.join('\n')}
                        onChange={(e) => setSelectedPolicy({...selectedPolicy, endpoints: e.target.value.split('\n').filter(line => line.trim())})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                        rows="4"
                        placeholder="GET /api/users&#10;POST /api/assessments&#10;ALL /api/*"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end space-x-4 mt-6">
                    <button 
                      onClick={() => setIsEditingPolicy(false)}
                      className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={savePolicy}
                      className="flex items-center space-x-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Save className="h-5 w-5" />
                      <span>Save Policy</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Current Request Rate</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Activity className="h-24 w-24 text-blue-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">1.2K</p>
                        <p className="text-xs text-gray-400">req/min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Block Rate</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="h-24 w-24 text-red-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-red-400">0.51%</p>
                        <p className="text-xs text-gray-400">blocked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Active Policies</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle className="h-24 w-24 text-green-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-400">4</p>
                        <p className="text-xs text-gray-400">policies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Activity */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Live Rate Limiting Activity</h3>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Real-time activity monitoring</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Violations Tab */}
        {activeTab === 'violations' && (
          <div className="space-y-8">
            {/* Violation Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Violations</p>
                    <p className="text-2xl font-bold text-red-400">182</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last Hour</p>
                    <p className="text-2xl font-bold text-yellow-400">23</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Unique Violators</p>
                    <p className="text-2xl font-bold text-purple-400">47</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Most Targeted</p>
                    <p className="text-xl font-bold text-blue-400">GET /api/users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Violations List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Violations</h3>
              <div className="space-y-4">
                {rateLimitMetrics.recentViolations.map((violation, index) => (
                  <div key={index} className="p-4 bg-red-900 bg-opacity-20 border border-red-700 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-red-400 mt-1" />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-white">{violation.consumer}</span>
                            <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">
                              Rate Limit Exceeded
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-1">Policy: {violation.policy}</p>
                          <p className="text-sm text-gray-300">Endpoint: {violation.endpoint}</p>
                          <p className="text-xs text-gray-400">{formatDate(violation.timestamp)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-red-400 font-semibold">{violation.attempts} attempts</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button className="px-3 py-1 bg-gray-700 text-white rounded text-sm hover:bg-gray-600">
                            Block
                          </button>
                          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                            Whitelist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Violation Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Violation trends over time</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Policy Effectiveness</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Policy performance comparison</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Rate Limiting Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Activity className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Peak Request Rate</p>
                  <p className="text-2xl font-bold text-blue-400">3.2K</p>
                  <p className="text-xs text-gray-500">req/min</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-red-900 rounded-lg mb-3">
                    <Shield className="h-8 w-8 text-red-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Blocks Prevented</p>
                  <p className="text-2xl font-bold text-red-400">12.4K</p>
                  <p className="text-xs text-gray-500">potential attacks</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">System Uptime</p>
                  <p className="text-2xl font-bold text-green-400">99.98%</p>
                  <p className="text-xs text-gray-500">availability</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Response Time</p>
                  <p className="text-2xl font-bold text-purple-400">2.3ms</p>
                  <p className="text-xs text-gray-500">avg latency</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            {/* Global Settings */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Global Rate Limiting Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Default Rate Limit</label>
                  <input
                    type="number"
                    defaultValue="1000"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Default Time Window</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500">
                    <option value="1h">1 Hour</option>
                    <option value="1d">1 Day</option>
                    <option value="1w">1 Week</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Emergency Threshold</label>
                  <input
                    type="number"
                    defaultValue="10000"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Auto-Block Duration</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500">
                    <option value="5m">5 Minutes</option>
                    <option value="15m">15 Minutes</option>
                    <option value="1h">1 Hour</option>
                    <option value="24h">24 Hours</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Notification Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Rate Limit Violations</p>
                    <p className="text-sm text-gray-400">Get notified when rate limits are exceeded</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-red-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Policy Changes</p>
                    <p className="text-sm text-gray-400">Get notified when policies are modified</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-red-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">System Alerts</p>
                    <p className="text-sm text-gray-400">Get notified about system-level issues</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Save Settings */}
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <Save className="h-5 w-5" />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiRateLimitingConsole;

