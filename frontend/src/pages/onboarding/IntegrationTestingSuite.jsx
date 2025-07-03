import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Stop, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Activity, 
  BarChart3, 
  LineChart, 
  Settings, 
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
  Copy, 
  Share2, 
  Bookmark, 
  Star, 
  Flag, 
  Tag, 
  Hash, 
  Target, 
  Zap, 
  Database, 
  Server, 
  Cloud, 
  Globe, 
  Shield, 
  Lock, 
  Key, 
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
  Info, 
  HelpCircle, 
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
  Rice
} from 'lucide-react';

const IntegrationTestingSuite = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTestSuite, setSelectedTestSuite] = useState(null);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [testSuites, setTestSuites] = useState([]);

  // Sample test suites
  const sampleTestSuites = [
    {
      id: 'suite-001',
      name: 'Salesforce CRM Integration',
      description: 'Comprehensive testing for Salesforce CRM integration endpoints',
      type: 'API Integration',
      status: 'Active',
      lastRun: '2025-01-07T10:30:00Z',
      totalTests: 45,
      passedTests: 42,
      failedTests: 3,
      duration: 127,
      coverage: 94.2,
      environment: 'Production',
      tags: ['CRM', 'Critical', 'Automated']
    },
    {
      id: 'suite-002',
      name: 'Payment Gateway Tests',
      description: 'End-to-end testing for Stripe payment processing',
      type: 'Payment Integration',
      status: 'Active',
      lastRun: '2025-01-07T09:45:00Z',
      totalTests: 32,
      passedTests: 30,
      failedTests: 2,
      duration: 89,
      coverage: 96.8,
      environment: 'Staging',
      tags: ['Payment', 'Security', 'Critical']
    },
    {
      id: 'suite-003',
      name: 'Email Service Integration',
      description: 'Testing for Mailchimp and SendGrid email services',
      type: 'Email Integration',
      status: 'Active',
      lastRun: '2025-01-07T08:20:00Z',
      totalTests: 28,
      passedTests: 28,
      failedTests: 0,
      duration: 56,
      coverage: 100,
      environment: 'Production',
      tags: ['Email', 'Marketing', 'Automated']
    },
    {
      id: 'suite-004',
      name: 'Analytics Platform Tests',
      description: 'Google Analytics and Mixpanel integration testing',
      type: 'Analytics Integration',
      status: 'Inactive',
      lastRun: '2025-01-06T16:30:00Z',
      totalTests: 18,
      passedTests: 15,
      failedTests: 3,
      duration: 34,
      coverage: 83.3,
      environment: 'Development',
      tags: ['Analytics', 'Tracking']
    },
    {
      id: 'suite-005',
      name: 'Social Media APIs',
      description: 'Facebook, Twitter, and LinkedIn API integration tests',
      type: 'Social Integration',
      status: 'Active',
      lastRun: '2025-01-07T07:15:00Z',
      totalTests: 24,
      passedTests: 22,
      failedTests: 2,
      duration: 78,
      coverage: 91.7,
      environment: 'Staging',
      tags: ['Social', 'OAuth', 'External']
    }
  ];

  // Sample test cases
  const sampleTestCases = [
    {
      id: 'test-001',
      name: 'User Authentication',
      description: 'Test OAuth 2.0 authentication flow',
      type: 'Authentication',
      status: 'Passed',
      duration: 2.3,
      lastRun: '2025-01-07T10:30:00Z',
      assertions: 8,
      passedAssertions: 8,
      failedAssertions: 0
    },
    {
      id: 'test-002',
      name: 'Data Synchronization',
      description: 'Test bidirectional data sync between systems',
      type: 'Data Sync',
      status: 'Failed',
      duration: 15.7,
      lastRun: '2025-01-07T10:30:00Z',
      assertions: 12,
      passedAssertions: 10,
      failedAssertions: 2,
      errorMessage: 'Timeout error: Connection to external API exceeded 10 seconds'
    },
    {
      id: 'test-003',
      name: 'Rate Limiting',
      description: 'Test API rate limiting and throttling behavior',
      type: 'Performance',
      status: 'Passed',
      duration: 8.9,
      lastRun: '2025-01-07T10:30:00Z',
      assertions: 6,
      passedAssertions: 6,
      failedAssertions: 0
    },
    {
      id: 'test-004',
      name: 'Error Handling',
      description: 'Test error scenarios and exception handling',
      type: 'Error Handling',
      status: 'Warning',
      duration: 4.2,
      lastRun: '2025-01-07T10:30:00Z',
      assertions: 10,
      passedAssertions: 9,
      failedAssertions: 1,
      warningMessage: 'Non-critical assertion failed: Response time exceeded recommended threshold'
    }
  ];

  // Sample performance metrics
  const performanceMetrics = {
    totalTestRuns: 1247,
    successRate: 94.2,
    averageDuration: 89.5,
    coverage: 92.8,
    criticalIssues: 3,
    warnings: 12
  };

  useEffect(() => {
    setTestSuites(sampleTestSuites);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Passed': 'bg-green-100 text-green-800',
      'Failed': 'bg-red-100 text-red-800',
      'Warning': 'bg-yellow-100 text-yellow-800',
      'Running': 'bg-blue-100 text-blue-800',
      'Pending': 'bg-gray-100 text-gray-800',
      'Active': 'bg-green-100 text-green-800',
      'Inactive': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeColor = (type) => {
    const colors = {
      'API Integration': 'bg-blue-100 text-blue-800',
      'Payment Integration': 'bg-green-100 text-green-800',
      'Email Integration': 'bg-purple-100 text-purple-800',
      'Analytics Integration': 'bg-yellow-100 text-yellow-800',
      'Social Integration': 'bg-pink-100 text-pink-800',
      'Authentication': 'bg-indigo-100 text-indigo-800',
      'Data Sync': 'bg-cyan-100 text-cyan-800',
      'Performance': 'bg-orange-100 text-orange-800',
      'Error Handling': 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const formatDuration = (seconds) => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const runTestSuite = (suiteId) => {
    setIsRunningTests(true);
    setSelectedTestSuite(suiteId);
    
    // Simulate test execution
    setTimeout(() => {
      setIsRunningTests(false);
      setTestResults(sampleTestCases);
    }, 3000);
  };

  const runAllTests = () => {
    setIsRunningTests(true);
    
    // Simulate running all test suites
    setTimeout(() => {
      setIsRunningTests(false);
      setTestResults(sampleTestCases);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Testing Suite</h1>
              <p className="mt-2 text-gray-400">Comprehensive testing framework for all integration endpoints and workflows</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isRunningTests ? 'bg-blue-400 animate-pulse' : 'bg-green-400'}`}></div>
                <span className="text-sm text-gray-400">{isRunningTests ? 'Running Tests' : 'Ready'}</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export Results</span>
              </button>
              <button 
                onClick={runAllTests}
                disabled={isRunningTests}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50"
              >
                {isRunningTests ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Running Tests...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    <span>Run All Tests</span>
                  </>
                )}
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
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="all">All Test Suites</option>
                  <option value="active">Active Only</option>
                  <option value="failed">Failed Tests</option>
                  <option value="critical">Critical Only</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="all">All Types</option>
                  <option value="api">API Integration</option>
                  <option value="payment">Payment</option>
                  <option value="email">Email</option>
                  <option value="analytics">Analytics</option>
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
                  placeholder="Search test suites..."
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500"
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
              { id: 'test-suites', label: 'Test Suites', icon: Folder },
              { id: 'test-cases', label: 'Test Cases', icon: FileText },
              { id: 'results', label: 'Test Results', icon: BarChart3 },
              { id: 'performance', label: 'Performance', icon: Zap },
              { id: 'reports', label: 'Reports', icon: Document }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-400'
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
                    <p className="text-sm text-gray-400">Total Test Runs</p>
                    <p className="text-2xl font-bold text-blue-400">{performanceMetrics.totalTestRuns.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">{performanceMetrics.successRate}%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Duration</p>
                    <p className="text-2xl font-bold text-purple-400">{performanceMetrics.averageDuration}s</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Coverage</p>
                    <p className="text-2xl font-bold text-yellow-400">{performanceMetrics.coverage}%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Critical Issues</p>
                    <p className="text-2xl font-bold text-red-400">{performanceMetrics.criticalIssues}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-orange-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Warnings</p>
                    <p className="text-2xl font-bold text-orange-400">{performanceMetrics.warnings}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Execution Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Test Execution Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Test execution trends visualization</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Test Coverage by Integration</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Coverage breakdown by integration type</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Test Activity */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Test Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '10:30:15', suite: 'Salesforce CRM Integration', status: 'Passed', duration: '127s', tests: '42/45' },
                  { time: '09:45:30', suite: 'Payment Gateway Tests', status: 'Failed', duration: '89s', tests: '30/32' },
                  { time: '08:20:45', suite: 'Email Service Integration', status: 'Passed', duration: '56s', tests: '28/28' },
                  { time: '07:15:12', suite: 'Social Media APIs', status: 'Warning', duration: '78s', tests: '22/24' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400 font-mono">{activity.time}</span>
                      <span className="text-white">{activity.suite}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                      <span className="text-sm text-gray-400">{activity.duration}</span>
                      <span className="text-sm text-gray-400">{activity.tests}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Test Suites Tab */}
        {activeTab === 'test-suites' && (
          <div className="space-y-8">
            {/* Test Suites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testSuites.map((suite) => (
                <div key={suite.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-green-900 rounded-lg">
                        <Folder className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{suite.name}</h3>
                        <p className="text-sm text-gray-400">{suite.type}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(suite.status)}`}>
                      {suite.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{suite.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Total Tests:</span>
                      <span className="text-sm text-white">{suite.totalTests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Success Rate:</span>
                      <span className={`text-sm font-semibold ${suite.passedTests / suite.totalTests >= 0.9 ? 'text-green-400' : suite.passedTests / suite.totalTests >= 0.7 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {((suite.passedTests / suite.totalTests) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Coverage:</span>
                      <span className="text-sm text-white">{suite.coverage}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Last Run:</span>
                      <span className="text-sm text-gray-400">{formatDate(suite.lastRun)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Duration:</span>
                      <span className="text-sm text-white">{formatDuration(suite.duration)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {suite.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => runTestSuite(suite.id)}
                      disabled={isRunningTests}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                      <Play className="h-4 w-4" />
                      <span>Run Tests</span>
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Edit className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Test Suite */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Create New Test Suite</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Plus className="h-5 w-5" />
                  <span>New Suite</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Suite Name</label>
                  <input
                    type="text"
                    placeholder="Enter test suite name..."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Integration Type</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="">Select type...</option>
                    <option value="api">API Integration</option>
                    <option value="payment">Payment Integration</option>
                    <option value="email">Email Integration</option>
                    <option value="analytics">Analytics Integration</option>
                    <option value="social">Social Integration</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Test Cases Tab */}
        {activeTab === 'test-cases' && (
          <div className="space-y-8">
            {/* Test Cases List */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Test Case</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Assertions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Run</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {sampleTestCases.map((testCase) => (
                      <tr key={testCase.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-green-900 rounded-lg mr-3">
                              <FileText className="h-5 w-5 text-green-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{testCase.name}</div>
                              <div className="text-sm text-gray-400">{testCase.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(testCase.type)}`}>
                            {testCase.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(testCase.status)}`}>
                            {testCase.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {testCase.duration}s
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400">{testCase.passedAssertions}</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-white">{testCase.assertions}</span>
                            {testCase.failedAssertions > 0 && (
                              <span className="text-red-400">({testCase.failedAssertions} failed)</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatDate(testCase.lastRun)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-green-400 hover:text-green-300">
                              <Play className="h-4 w-4" />
                            </button>
                            <button className="text-blue-400 hover:text-blue-300">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Eye className="h-4 w-4" />
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
        )}

        {/* Test Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-8">
            {/* Test Results Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Passed Tests</p>
                    <p className="text-2xl font-bold text-green-400">127</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Failed Tests</p>
                    <p className="text-2xl font-bold text-red-400">8</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Warnings</p>
                    <p className="text-2xl font-bold text-yellow-400">12</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Duration</p>
                    <p className="text-2xl font-bold text-blue-400">12m 34s</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Test Results */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Latest Test Results</h3>
              <div className="space-y-4">
                {testResults.length > 0 ? testResults.map((result) => (
                  <div key={result.id} className={`p-4 rounded-lg border ${
                    result.status === 'Passed' ? 'bg-green-900 bg-opacity-20 border-green-700' :
                    result.status === 'Failed' ? 'bg-red-900 bg-opacity-20 border-red-700' :
                    'bg-yellow-900 bg-opacity-20 border-yellow-700'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {result.status === 'Passed' && <CheckCircle className="h-5 w-5 text-green-400" />}
                          {result.status === 'Failed' && <XCircle className="h-5 w-5 text-red-400" />}
                          {result.status === 'Warning' && <AlertCircle className="h-5 w-5 text-yellow-400" />}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-white">{result.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              result.status === 'Passed' ? 'bg-green-600 text-white' :
                              result.status === 'Failed' ? 'bg-red-600 text-white' :
                              'bg-yellow-600 text-white'
                            }`}>
                              {result.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-2">{result.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Duration: {result.duration}s</span>
                            <span>Assertions: {result.passedAssertions}/{result.assertions}</span>
                            <span>{formatDate(result.lastRun)}</span>
                          </div>
                          {result.errorMessage && (
                            <div className="mt-2 p-2 bg-red-900 bg-opacity-30 rounded text-sm text-red-300">
                              <strong>Error:</strong> {result.errorMessage}
                            </div>
                          )}
                          {result.warningMessage && (
                            <div className="mt-2 p-2 bg-yellow-900 bg-opacity-30 rounded text-sm text-yellow-300">
                              <strong>Warning:</strong> {result.warningMessage}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-gray-700 text-white rounded text-sm hover:bg-gray-600">
                          Retry
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center text-gray-400 py-12">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                    <p>No test results available. Run a test suite to see results.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Test Execution Performance</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Performance trends over time</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Resource Utilization</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">CPU and memory usage during tests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Fastest Test</p>
                  <p className="text-2xl font-bold text-blue-400">0.8s</p>
                  <p className="text-xs text-gray-500">Authentication test</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-red-900 rounded-lg mb-3">
                    <Clock className="h-8 w-8 text-red-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Slowest Test</p>
                  <p className="text-2xl font-bold text-red-400">45.2s</p>
                  <p className="text-xs text-gray-500">Full data sync test</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <Activity className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Throughput</p>
                  <p className="text-2xl font-bold text-green-400">23.4</p>
                  <p className="text-xs text-gray-500">tests/minute</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Target className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Efficiency</p>
                  <p className="text-2xl font-bold text-purple-400">87.3%</p>
                  <p className="text-xs text-gray-500">resource utilization</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-8">
            {/* Report Generation */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Generate Test Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Report Type</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="summary">Executive Summary</option>
                    <option value="detailed">Detailed Report</option>
                    <option value="performance">Performance Report</option>
                    <option value="coverage">Coverage Report</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Time Range</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Format</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500">
                    <option value="pdf">PDF</option>
                    <option value="html">HTML</option>
                    <option value="csv">CSV</option>
                    <option value="json">JSON</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Download className="h-5 w-5" />
                  <span>Generate Report</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Settings className="h-5 w-5" />
                  <span>Schedule Report</span>
                </button>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Reports</h3>
              <div className="space-y-4">
                {[
                  { name: 'Weekly Test Summary', type: 'Summary', generated: '2025-01-07T09:00:00Z', size: '2.4 MB', format: 'PDF' },
                  { name: 'Integration Performance Report', type: 'Performance', generated: '2025-01-06T18:00:00Z', size: '5.1 MB', format: 'HTML' },
                  { name: 'Test Coverage Analysis', type: 'Coverage', generated: '2025-01-06T12:00:00Z', size: '1.8 MB', format: 'PDF' },
                  { name: 'Failed Tests Detailed Report', type: 'Detailed', generated: '2025-01-05T15:30:00Z', size: '3.2 MB', format: 'PDF' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-900 rounded-lg">
                        <Document className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{report.name}</p>
                        <p className="text-sm text-gray-400">{report.type} • {report.format} • {report.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">{formatDate(report.generated)}</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-300">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-300">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
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

export default IntegrationTestingSuite;

