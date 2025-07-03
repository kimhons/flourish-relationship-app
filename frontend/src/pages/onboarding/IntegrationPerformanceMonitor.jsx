import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Gauge, 
  Speedometer, 
  Clock, 
  Calendar, 
  RefreshCw, 
  Settings, 
  Filter, 
  Download, 
  Upload, 
  Search, 
  Eye, 
  EyeOff, 
  Play, 
  Pause, 
  Stop, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  HelpCircle, 
  Zap, 
  Database, 
  Server, 
  Cloud, 
  Globe, 
  Wifi, 
  Router, 
  Network, 
  Shield, 
  Lock, 
  Key, 
  Target, 
  Flag, 
  Tag, 
  Hash, 
  User, 
  Users, 
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
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Edit, 
  Trash2, 
  Save, 
  Copy, 
  Share2, 
  Bookmark, 
  Star, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Bell, 
  BellOff, 
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
  CloudSnow, 
  Umbrella, 
  Thermometer, 
  Wind, 
  Waves, 
  Droplets, 
  Snowflake, 
  Fire, 
  Flame, 
  Candle, 
  Flashlight, 
  Lamp, 
  Torch, 
  Rainbow, 
  Prism, 
  Crystal, 
  Diamond, 
  Gem, 
  Ring, 
  Crown, 
  Trophy, 
  Medal, 
  Award, 
  Ribbon, 
  Badge, 
  Certificate, 
  Diploma, 
  Scroll, 
  Document, 
  Contract, 
  Invoice, 
  Receipt, 
  Ticket, 
  Coupon, 
  Voucher, 
  Gift, 
  Present, 
  Balloon, 
  Party, 
  Cake, 
  Candles, 
  Confetti, 
  Fireworks, 
  Sparkles, 
  Sparkler, 
  Wand, 
  Magic, 
  Potion, 
  Elixir, 
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
  ExitFullscreen, 
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
  Octagon, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6, 
  Puzzle, 
  PuzzlePiece, 
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
  WifiOff, 
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
  Lemonade, 
  Iced, 
  Hot, 
  Cold, 
  Warm, 
  Cool, 
  Fresh, 
  Frozen, 
  Cooked, 
  Raw, 
  Spicy, 
  Sweet, 
  Sour, 
  Bitter, 
  Salty, 
  Savory, 
  Crispy, 
  Soft, 
  Hard, 
  Smooth, 
  Rough, 
  Thick, 
  Thin, 
  Heavy, 
  Light, 
  Big, 
  Small, 
  Large, 
  Tiny, 
  Huge, 
  Mini, 
  Giant, 
  Long, 
  Short, 
  Tall, 
  Wide, 
  Narrow, 
  Deep, 
  Shallow, 
  High, 
  Low, 
  Fast, 
  Slow, 
  Quick, 
  Rapid, 
  Instant, 
  Delayed, 
  Early, 
  Late, 
  On, 
  Off, 
  Open, 
  Closed, 
  Full, 
  Empty, 
  Complete, 
  Incomplete, 
  Finished, 
  Unfinished, 
  Started, 
  Stopped, 
  Running, 
  Paused, 
  Active, 
  Inactive, 
  Enabled, 
  Disabled, 
  Available, 
  Unavailable, 
  Online, 
  Offline, 
  Connected, 
  Disconnected, 
  Synced, 
  Unsynced, 
  Saved, 
  Unsaved, 
  Loaded, 
  Loading, 
  Pending, 
  Processing, 
  Failed, 
  Success, 
  Error, 
  Warning, 
  Debug, 
  Trace, 
  Log, 
  Event, 
  Action, 
  Trigger, 
  Response, 
  Request, 
  Data, 
  Message, 
  Signal, 
  Notification, 
  Alert, 
  Reminder, 
  Update, 
  Change, 
  Modification, 
  Addition, 
  Deletion, 
  Creation, 
  Destruction, 
  Build, 
  Deploy, 
  Release, 
  Version, 
  Patch, 
  Fix, 
  Bug, 
  Feature, 
  Enhancement, 
  Improvement, 
  Optimization, 
  Performance, 
  Speed, 
  Efficiency, 
  Quality, 
  Reliability, 
  Stability, 
  Security, 
  Privacy, 
  Safety, 
  Protection, 
  Defense, 
  Attack, 
  Threat, 
  Risk, 
  Vulnerability, 
  Exploit, 
  Breach, 
  Leak, 
  Exposure, 
  Disclosure, 
  Access, 
  Permission, 
  Authorization, 
  Authentication, 
  Verification, 
  Validation, 
  Confirmation, 
  Approval, 
  Rejection, 
  Acceptance, 
  Denial, 
  Grant, 
  Revoke, 
  Allow, 
  Block, 
  Ban, 
  Restrict, 
  Limit, 
  Control, 
  Manage, 
  Monitor, 
  Track, 
  Trace, 
  Follow, 
  Watch, 
  Observe, 
  Inspect, 
  Examine, 
  Analyze, 
  Study, 
  Research, 
  Investigate, 
  Explore, 
  Discover, 
  Find, 
  Locate, 
  Identify, 
  Recognize, 
  Detect, 
  Sense, 
  Feel, 
  Hear, 
  Listen, 
  See, 
  Look, 
  View, 
  Read, 
  Write, 
  Type, 
  Input, 
  Output, 
  Import, 
  Export, 
  Transfer, 
  Move, 
  Paste, 
  Cut, 
  Remove, 
  Add, 
  Insert, 
  Append, 
  Prepend, 
  Replace, 
  Substitute, 
  Swap, 
  Exchange, 
  Trade, 
  Convert, 
  Transform, 
  Translate, 
  Encode, 
  Decode, 
  Encrypt, 
  Decrypt, 
  Compress, 
  Decompress, 
  Backup, 
  Restore, 
  Recover, 
  Repair, 
  Solve, 
  Resolve, 
  Address, 
  Handle, 
  Process, 
  Execute, 
  Run, 
  Start, 
  Resume, 
  Continue, 
  Finish, 
  End, 
  Close, 
  Exit, 
  Quit, 
  Cancel, 
  Abort, 
  Retry, 
  Repeat, 
  Redo, 
  Undo, 
  Revert, 
  Reset, 
  Clear, 
  Clean, 
  Purge, 
  Flush, 
  Refresh, 
  Reload, 
  Upgrade, 
  Downgrade, 
  Install, 
  Uninstall, 
  Setup, 
  Configure, 
  Customize, 
  Personalize, 
  Adjust, 
  Tune, 
  Calibrate, 
  Balance, 
  Align, 
  Center, 
  Scale, 
  Resize, 
  Rotate, 
  Flip, 
  Mirror, 
  Invert, 
  Reverse, 
  Forward, 
  Backward, 
  Left, 
  Right, 
  Up, 
  Down, 
  North, 
  South, 
  East, 
  West, 
  Top, 
  Bottom, 
  Front, 
  Back, 
  Inside, 
  Outside, 
  Above, 
  Below, 
  Over, 
  Under, 
  Before, 
  After, 
  First, 
  Last, 
  Next, 
  Previous, 
  Current, 
  Past, 
  Future, 
  Present, 
  Now, 
  Then, 
  Today, 
  Yesterday, 
  Tomorrow, 
  Week, 
  Month, 
  Year, 
  Decade, 
  Century, 
  Millennium, 
  Second, 
  Minute, 
  Hour, 
  Day, 
  Morning, 
  Afternoon, 
  Evening, 
  Night, 
  Dawn, 
  Dusk, 
  Sunrise, 
  Sunset, 
  Noon, 
  Midnight, 
  Spring, 
  Summer, 
  Autumn, 
  Winter, 
  Season, 
  Weather, 
  Climate, 
  Temperature, 
  Humidity, 
  Pressure, 
  Rain, 
  Snow, 
  Ice, 
  Hail, 
  Storm, 
  Thunder, 
  Lightning, 
  Fog, 
  Mist, 
  Cloud, 
  Sky, 
  Atmosphere, 
  Air, 
  Oxygen, 
  Carbon, 
  Nitrogen, 
  Hydrogen, 
  Helium, 
  Neon, 
  Argon, 
  Krypton, 
  Xenon, 
  Radon
} from 'lucide-react';

const IntegrationPerformanceMonitor = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [selectedIntegration, setSelectedIntegration] = useState('all');
  const [isRealTime, setIsRealTime] = useState(true);
  const [alerts, setAlerts] = useState([]);

  // Sample performance data
  const performanceMetrics = {
    overview: {
      totalRequests: 125847,
      successRate: 98.7,
      avgResponseTime: 245,
      errorRate: 1.3,
      throughput: 1247,
      uptime: 99.95
    },
    trends: {
      requests: [120, 135, 142, 158, 167, 145, 139, 152, 148, 156, 163, 171],
      responseTime: [234, 245, 251, 238, 242, 256, 248, 239, 245, 252, 247, 241],
      errorRate: [1.2, 1.5, 1.8, 1.1, 1.3, 2.1, 1.7, 1.4, 1.2, 1.6, 1.3, 1.1]
    }
  };

  // Sample integration data
  const integrations = [
    {
      id: 'salesforce-crm',
      name: 'Salesforce CRM',
      type: 'CRM',
      status: 'Healthy',
      requests: 45623,
      successRate: 99.2,
      avgResponseTime: 187,
      lastError: null,
      uptime: 99.98
    },
    {
      id: 'mailchimp-email',
      name: 'Mailchimp Email',
      type: 'Marketing',
      status: 'Healthy',
      requests: 23456,
      successRate: 98.9,
      avgResponseTime: 156,
      lastError: null,
      uptime: 99.95
    },
    {
      id: 'stripe-payments',
      name: 'Stripe Payments',
      type: 'Finance',
      status: 'Warning',
      requests: 12789,
      successRate: 97.8,
      avgResponseTime: 312,
      lastError: '2025-01-07T09:45:00Z',
      uptime: 99.87
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      type: 'Analytics',
      status: 'Healthy',
      requests: 34567,
      successRate: 99.5,
      avgResponseTime: 98,
      lastError: null,
      uptime: 99.99
    },
    {
      id: 'slack-notifications',
      name: 'Slack Notifications',
      type: 'Communication',
      status: 'Critical',
      requests: 9412,
      successRate: 94.2,
      avgResponseTime: 567,
      lastError: '2025-01-07T10:15:00Z',
      uptime: 98.45
    }
  ];

  // Sample alerts
  const sampleAlerts = [
    {
      id: 'alert-001',
      type: 'Critical',
      integration: 'Slack Notifications',
      message: 'Response time exceeded 500ms threshold',
      timestamp: '2025-01-07T10:15:00Z',
      acknowledged: false
    },
    {
      id: 'alert-002',
      type: 'Warning',
      integration: 'Stripe Payments',
      message: 'Error rate increased to 2.2%',
      timestamp: '2025-01-07T09:45:00Z',
      acknowledged: true
    },
    {
      id: 'alert-003',
      type: 'Info',
      integration: 'Google Analytics',
      message: 'New API version available',
      timestamp: '2025-01-07T08:30:00Z',
      acknowledged: true
    }
  ];

  useEffect(() => {
    setAlerts(sampleAlerts);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Healthy': 'bg-green-100 text-green-800',
      'Warning': 'bg-yellow-100 text-yellow-800',
      'Critical': 'bg-red-100 text-red-800',
      'Offline': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getAlertColor = (type) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'Warning': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Info': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Performance Monitor</h1>
              <p className="mt-2 text-gray-400">Real-time monitoring and analytics for all integration endpoints</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRealTime ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-gray-400">{isRealTime ? 'Live' : 'Paused'}</span>
              </div>
              <button 
                onClick={() => setIsRealTime(!isRealTime)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors"
              >
                {isRealTime ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                <span>{isRealTime ? 'Pause' : 'Resume'}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
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
                <Clock className="h-5 w-5 text-gray-400" />
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                <select 
                  value={selectedIntegration}
                  onChange={(e) => setSelectedIntegration(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Integrations</option>
                  {integrations.map((integration) => (
                    <option key={integration.id} value={integration.id}>{integration.name}</option>
                  ))}
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
                  placeholder="Search metrics..."
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              { id: 'integrations', label: 'Integrations', icon: Globe },
              { id: 'performance', label: 'Performance', icon: Gauge },
              { id: 'alerts', label: 'Alerts', icon: Bell },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'health', label: 'Health Check', icon: CheckCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Requests</p>
                    <p className="text-2xl font-bold text-blue-400">{formatNumber(performanceMetrics.overview.totalRequests)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+12.5%</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">{performanceMetrics.overview.successRate}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+0.3%</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Response</p>
                    <p className="text-2xl font-bold text-purple-400">{performanceMetrics.overview.avgResponseTime}ms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-15ms</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Error Rate</p>
                    <p className="text-2xl font-bold text-red-400">{performanceMetrics.overview.errorRate}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-0.2%</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Zap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Throughput</p>
                    <p className="text-2xl font-bold text-yellow-400">{formatNumber(performanceMetrics.overview.throughput)}/h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+8.7%</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-indigo-900 rounded-lg">
                    <Shield className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Uptime</p>
                    <p className="text-2xl font-bold text-indigo-400">{performanceMetrics.overview.uptime}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">Excellent</span>
                </div>
              </div>
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Request Volume</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Real-time request volume chart</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Response Time Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Response time analytics chart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '10:30:15', integration: 'Salesforce CRM', action: 'API Request', status: 'Success', responseTime: '187ms' },
                  { time: '10:30:12', integration: 'Mailchimp Email', action: 'Webhook Delivery', status: 'Success', responseTime: '156ms' },
                  { time: '10:30:08', integration: 'Stripe Payments', action: 'Payment Processing', status: 'Success', responseTime: '312ms' },
                  { time: '10:30:05', integration: 'Google Analytics', action: 'Data Sync', status: 'Success', responseTime: '98ms' },
                  { time: '10:30:01', integration: 'Slack Notifications', action: 'Message Send', status: 'Failed', responseTime: '567ms' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400 font-mono">{activity.time}</span>
                      <span className="text-white">{activity.integration}</span>
                      <span className="text-gray-400">{activity.action}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.status}
                      </span>
                      <span className="text-sm text-gray-400">{activity.responseTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Integrations Tab */}
        {activeTab === 'integrations' && (
          <div className="space-y-8">
            {/* Integration Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <div key={integration.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-900 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                        <p className="text-sm text-gray-400">{integration.type}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                      {integration.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Requests:</span>
                      <span className="text-sm text-white">{formatNumber(integration.requests)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Success Rate:</span>
                      <span className={`text-sm font-semibold ${integration.successRate >= 99 ? 'text-green-400' : integration.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {integration.successRate}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Avg Response:</span>
                      <span className="text-sm text-white">{integration.avgResponseTime}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Uptime:</span>
                      <span className="text-sm text-green-400">{integration.uptime}%</span>
                    </div>
                    {integration.lastError && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">Last Error:</span>
                        <span className="text-sm text-red-400">{formatDate(integration.lastError)}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-6">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>Details</span>
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Settings className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Performance Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Response Time</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Gauge className="h-24 w-24 text-purple-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-400">245ms</p>
                        <p className="text-xs text-gray-400">Average</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">Throughput</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Speedometer className="h-24 w-24 text-yellow-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-400">1.2K</p>
                        <p className="text-xs text-gray-400">req/hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">CPU Usage</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cpu className="h-24 w-24 text-blue-400" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">67%</p>
                        <p className="text-xs text-gray-400">Utilization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Performance Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Performance trends visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Resource Utilization</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Resource usage breakdown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-8">
            {/* Alert Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Critical Alerts</p>
                    <p className="text-2xl font-bold text-red-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Warning Alerts</p>
                    <p className="text-2xl font-bold text-yellow-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Info className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Info Alerts</p>
                    <p className="text-2xl font-bold text-blue-400">1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Alerts</h3>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Check className="h-5 w-5" />
                    <span>Acknowledge All</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.type)} ${alert.acknowledged ? 'opacity-60' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {alert.type === 'Critical' && <AlertCircle className="h-5 w-5 text-red-600" />}
                          {alert.type === 'Warning' && <AlertCircle className="h-5 w-5 text-yellow-600" />}
                          {alert.type === 'Info' && <Info className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold">{alert.integration}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              alert.type === 'Critical' ? 'bg-red-600 text-white' :
                              alert.type === 'Warning' ? 'bg-yellow-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {alert.type}
                            </span>
                          </div>
                          <p className="text-sm mb-2">{alert.message}</p>
                          <p className="text-xs text-gray-500">{formatDate(alert.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!alert.acknowledged && (
                          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                            Acknowledge
                          </button>
                        )}
                        <button className="p-1 text-gray-400 hover:text-gray-200">
                          <X className="h-4 w-4" />
                        </button>
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
                <h3 className="text-lg font-semibold text-white mb-6">Request Distribution</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Request distribution by integration</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Error Analysis</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Error patterns and trends</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Performance Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Database className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Data Processed</p>
                  <p className="text-2xl font-bold text-blue-400">2.4TB</p>
                  <p className="text-xs text-gray-500">This month</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Peak Throughput</p>
                  <p className="text-2xl font-bold text-green-400">3.2K</p>
                  <p className="text-xs text-gray-500">req/hour</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Clock className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Best Response</p>
                  <p className="text-2xl font-bold text-purple-400">45ms</p>
                  <p className="text-xs text-gray-500">Minimum</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-yellow-900 rounded-lg mb-3">
                    <Shield className="h-8 w-8 text-yellow-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Reliability</p>
                  <p className="text-2xl font-bold text-yellow-400">99.95%</p>
                  <p className="text-xs text-gray-500">SLA Target</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Check Tab */}
        {activeTab === 'health' && (
          <div className="space-y-8">
            {/* Health Status */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">System Health Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { component: 'API Gateway', status: 'Healthy', uptime: '99.98%', lastCheck: '30s ago' },
                  { component: 'Database', status: 'Healthy', uptime: '99.95%', lastCheck: '1m ago' },
                  { component: 'Cache Layer', status: 'Warning', uptime: '99.87%', lastCheck: '45s ago' },
                  { component: 'Message Queue', status: 'Healthy', uptime: '99.99%', lastCheck: '15s ago' }
                ].map((component, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{component.component}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                        {component.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-white">{component.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Check:</span>
                        <span className="text-white">{component.lastCheck}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Checks */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Integration Health Checks</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Play className="h-5 w-5" />
                  <span>Run All Checks</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <div key={integration.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        integration.status === 'Healthy' ? 'bg-green-400' :
                        integration.status === 'Warning' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}></div>
                      <span className="text-white font-medium">{integration.name}</span>
                      <span className="text-gray-400">{integration.type}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">Last check: 2m ago</span>
                      <button className="text-blue-400 hover:text-blue-300">
                        <RefreshCw className="h-4 w-4" />
                      </button>
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

export default IntegrationPerformanceMonitor;

