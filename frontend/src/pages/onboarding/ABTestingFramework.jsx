import React, { useState, useEffect } from 'react';
import { 
  TestTube, 
  Play, 
  Pause, 
  Stop, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Settings, 
  Eye, 
  Edit3, 
  Copy, 
  Trash2, 
  Plus, 
  Filter, 
  Search, 
  Download, 
  Upload, 
  Calendar, 
  Zap, 
  Award, 
  Flag, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Check, 
  Info, 
  HelpCircle, 
  ExternalLink,
  Layers,
  Split,
  Percent,
  Activity,
  Database,
  Code,
  Monitor,
  Smartphone,
  Globe,
  Mail,
  Bell,
  Share2,
  FileText,
  Image,
  Video,
  Mic,
  Link2,
  Hash,
  DollarSign,
  ShoppingCart,
  Heart,
  MessageSquare,
  Star,
  ThumbsUp,
  MousePointer,
  Navigation,
  Maximize2,
  Minimize2
} from 'lucide-react';

const ABTestingFramework = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [tests, setTests] = useState([]);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    dateRange: '30days'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newTest, setNewTest] = useState({
    name: '',
    description: '',
    hypothesis: '',
    type: 'ui_element',
    targetMetric: 'conversion_rate',
    trafficSplit: 50,
    duration: 14,
    minSampleSize: 1000,
    significanceLevel: 0.05,
    variants: []
  });

  // Test types
  const testTypes = [
    { id: 'ui_element', label: 'UI Element Test', icon: Monitor, description: 'Test different UI components' },
    { id: 'page_layout', label: 'Page Layout', icon: Layers, description: 'Test different page layouts' },
    { id: 'content', label: 'Content Test', icon: FileText, description: 'Test different content variations' },
    { id: 'feature', label: 'Feature Test', icon: Zap, description: 'Test new features or functionality' },
    { id: 'pricing', label: 'Pricing Test', icon: DollarSign, description: 'Test different pricing strategies' },
    { id: 'email', label: 'Email Campaign', icon: Mail, description: 'Test email variations' },
    { id: 'notification', label: 'Notification', icon: Bell, description: 'Test notification strategies' },
    { id: 'onboarding', label: 'Onboarding Flow', icon: Navigation, description: 'Test onboarding variations' }
  ];

  // Target metrics
  const targetMetrics = [
    { id: 'conversion_rate', label: 'Conversion Rate', icon: Target, unit: '%' },
    { id: 'click_through_rate', label: 'Click-Through Rate', icon: MousePointer, unit: '%' },
    { id: 'engagement_rate', label: 'Engagement Rate', icon: Activity, unit: '%' },
    { id: 'retention_rate', label: 'Retention Rate', icon: Users, unit: '%' },
    { id: 'revenue_per_user', label: 'Revenue per User', icon: DollarSign, unit: '$' },
    { id: 'session_duration', label: 'Session Duration', icon: Clock, unit: 'min' },
    { id: 'page_views', label: 'Page Views', icon: Eye, unit: 'views' },
    { id: 'signup_rate', label: 'Signup Rate', icon: UserPlus, unit: '%' },
    { id: 'feature_adoption', label: 'Feature Adoption', icon: Zap, unit: '%' },
    { id: 'satisfaction_score', label: 'Satisfaction Score', icon: Star, unit: '/5' }
  ];

  // Sample test data
  useEffect(() => {
    const sampleTests = [
      {
        id: 1,
        name: 'Homepage CTA Button Color',
        description: 'Testing pink vs purple CTA button on homepage',
        hypothesis: 'Purple CTA button will increase conversion rate by 15%',
        type: 'ui_element',
        status: 'running',
        targetMetric: 'conversion_rate',
        trafficSplit: 50,
        duration: 14,
        daysRunning: 8,
        participants: 2847,
        minSampleSize: 2000,
        significanceLevel: 0.05,
        confidence: 87,
        variants: [
          {
            id: 'control',
            name: 'Control (Pink Button)',
            traffic: 50,
            conversions: 142,
            visitors: 1423,
            conversionRate: 9.98,
            isControl: true
          },
          {
            id: 'variant_a',
            name: 'Variant A (Purple Button)',
            traffic: 50,
            conversions: 156,
            visitors: 1424,
            conversionRate: 10.96,
            isControl: false
          }
        ],
        results: {
          winner: 'variant_a',
          improvement: 9.8,
          pValue: 0.032,
          isSignificant: true
        },
        createdAt: '2025-01-01',
        startedAt: '2025-01-03',
        creator: 'Sarah Johnson'
      },
      {
        id: 2,
        name: 'Onboarding Flow Simplification',
        description: 'Testing 3-step vs 5-step onboarding process',
        hypothesis: 'Simplified 3-step onboarding will reduce drop-off by 25%',
        type: 'onboarding',
        status: 'completed',
        targetMetric: 'completion_rate',
        trafficSplit: 50,
        duration: 21,
        daysRunning: 21,
        participants: 4521,
        minSampleSize: 3000,
        significanceLevel: 0.05,
        confidence: 95,
        variants: [
          {
            id: 'control',
            name: 'Control (5-step)',
            traffic: 50,
            conversions: 1847,
            visitors: 2261,
            conversionRate: 81.69,
            isControl: true
          },
          {
            id: 'variant_a',
            name: 'Variant A (3-step)',
            traffic: 50,
            conversions: 1978,
            visitors: 2260,
            conversionRate: 87.52,
            isControl: false
          }
        ],
        results: {
          winner: 'variant_a',
          improvement: 7.13,
          pValue: 0.001,
          isSignificant: true
        },
        createdAt: '2024-12-10',
        startedAt: '2024-12-12',
        endedAt: '2025-01-02',
        creator: 'Mike Chen'
      },
      {
        id: 3,
        name: 'Premium Pricing Display',
        description: 'Testing monthly vs annual pricing emphasis',
        hypothesis: 'Emphasizing annual savings will increase annual subscriptions by 30%',
        type: 'pricing',
        status: 'draft',
        targetMetric: 'annual_conversion',
        trafficSplit: 50,
        duration: 28,
        daysRunning: 0,
        participants: 0,
        minSampleSize: 5000,
        significanceLevel: 0.05,
        confidence: 0,
        variants: [
          {
            id: 'control',
            name: 'Control (Monthly Focus)',
            traffic: 50,
            conversions: 0,
            visitors: 0,
            conversionRate: 0,
            isControl: true
          },
          {
            id: 'variant_a',
            name: 'Variant A (Annual Focus)',
            traffic: 50,
            conversions: 0,
            visitors: 0,
            conversionRate: 0,
            isControl: false
          }
        ],
        results: null,
        createdAt: '2025-01-02',
        creator: 'Lisa Wang'
      }
    ];
    setTests(sampleTests);
  }, []);

  const handleCreateTest = () => {
    const test = {
      id: Date.now(),
      ...newTest,
      status: 'draft',
      daysRunning: 0,
      participants: 0,
      confidence: 0,
      variants: [
        {
          id: 'control',
          name: 'Control',
          traffic: 100 - newTest.trafficSplit,
          conversions: 0,
          visitors: 0,
          conversionRate: 0,
          isControl: true
        },
        {
          id: 'variant_a',
          name: 'Variant A',
          traffic: newTest.trafficSplit,
          conversions: 0,
          visitors: 0,
          conversionRate: 0,
          isControl: false
        }
      ],
      results: null,
      createdAt: new Date().toISOString().split('T')[0],
      creator: 'Current User'
    };
    
    setTests(prev => [test, ...prev]);
    setNewTest({
      name: '',
      description: '',
      hypothesis: '',
      type: 'ui_element',
      targetMetric: 'conversion_rate',
      trafficSplit: 50,
      duration: 14,
      minSampleSize: 1000,
      significanceLevel: 0.05,
      variants: []
    });
    setShowCreateModal(false);
  };

  const handleStartTest = (testId) => {
    setTests(prev => prev.map(test => 
      test.id === testId 
        ? { ...test, status: 'running', startedAt: new Date().toISOString().split('T')[0] }
        : test
    ));
  };

  const handleStopTest = (testId) => {
    setTests(prev => prev.map(test => 
      test.id === testId 
        ? { ...test, status: 'stopped', endedAt: new Date().toISOString().split('T')[0] }
        : test
    ));
  };

  const handleCompleteTest = (testId) => {
    setTests(prev => prev.map(test => 
      test.id === testId 
        ? { ...test, status: 'completed', endedAt: new Date().toISOString().split('T')[0] }
        : test
    ));
  };

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filters.status === 'all' || test.status === filters.status;
    const matchesType = filters.type === 'all' || test.type === filters.type;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status) => {
    const colors = {
      draft: 'bg-gray-100 text-gray-800',
      running: 'bg-green-100 text-green-800',
      paused: 'bg-yellow-100 text-yellow-800',
      stopped: 'bg-red-100 text-red-800',
      completed: 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      draft: Edit3,
      running: Play,
      paused: Pause,
      stopped: Stop,
      completed: CheckCircle
    };
    return icons[status] || Edit3;
  };

  const calculateStatisticalSignificance = (control, variant) => {
    if (control.visitors === 0 || variant.visitors === 0) return { pValue: 1, isSignificant: false };
    
    const p1 = control.conversions / control.visitors;
    const p2 = variant.conversions / variant.visitors;
    const pooled = (control.conversions + variant.conversions) / (control.visitors + variant.visitors);
    
    const se = Math.sqrt(pooled * (1 - pooled) * (1/control.visitors + 1/variant.visitors));
    const z = Math.abs(p2 - p1) / se;
    const pValue = 2 * (1 - normalCDF(Math.abs(z)));
    
    return {
      pValue: pValue,
      isSignificant: pValue < 0.05,
      improvement: ((p2 - p1) / p1) * 100
    };
  };

  const normalCDF = (x) => {
    return 0.5 * (1 + erf(x / Math.sqrt(2)));
  };

  const erf = (x) => {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
    
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">A/B Testing Framework</h1>
              <p className="mt-2 text-gray-600">Design, run, and analyze experiments to optimize user experience</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Create Test</span>
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
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'tests', label: 'All Tests', icon: TestTube },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'settings', label: 'Settings', icon: Settings }
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
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Tests</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {tests.filter(t => t.status === 'running').length}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Play className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">2 started this week</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Tests</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {tests.filter(t => t.status === 'completed').length}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">85% success rate</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Participants</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {tests.reduce((sum, test) => sum + test.participants, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+23% this month</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Improvement</p>
                    <p className="text-3xl font-bold text-gray-900">12.4%</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+2.1% from last month</span>
                </div>
              </div>
            </div>

            {/* Running Tests */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Currently Running Tests</h3>
              <div className="space-y-4">
                {tests.filter(test => test.status === 'running').map((test) => (
                  <div key={test.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{test.name}</h4>
                        <p className="text-sm text-gray-600">{test.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                          {test.status.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">Day {test.daysRunning}/{test.duration}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{test.participants.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Participants</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{test.confidence}%</p>
                        <p className="text-sm text-gray-600">Confidence</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-2xl font-bold ${test.results?.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {test.results?.improvement > 0 ? '+' : ''}{test.results?.improvement?.toFixed(1) || '0'}%
                        </p>
                        <p className="text-sm text-gray-600">Improvement</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end space-x-2">
                      <button
                        onClick={() => setSelectedTest(test)}
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleStopTest(test.id)}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        Stop Test
                      </button>
                    </div>
                  </div>
                ))}
                
                {tests.filter(test => test.status === 'running').length === 0 && (
                  <div className="text-center py-8">
                    <TestTube className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No running tests</h3>
                    <p className="mt-2 text-gray-500">Create a new test to start experimenting</p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Results */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Test Results</h3>
              <div className="space-y-4">
                {tests.filter(test => test.status === 'completed').slice(0, 3).map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-600">Completed on {test.endedAt}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{test.participants.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">Participants</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${test.results?.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {test.results?.improvement > 0 ? '+' : ''}{test.results?.improvement?.toFixed(1)}%
                        </p>
                        <p className="text-xs text-gray-600">Improvement</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${test.results?.isSignificant ? 'text-green-600' : 'text-red-600'}`}>
                          {test.results?.isSignificant ? 'Yes' : 'No'}
                        </p>
                        <p className="text-xs text-gray-600">Significant</p>
                      </div>
                      <button
                        onClick={() => setSelectedTest(test)}
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        View Report
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Tests Tab */}
        {activeTab === 'tests' && (
          <div>
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search tests..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="draft">Draft</option>
                    <option value="running">Running</option>
                    <option value="paused">Paused</option>
                    <option value="completed">Completed</option>
                    <option value="stopped">Stopped</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    {testTypes.map((type) => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <select
                    value={filters.dateRange}
                    onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="7days">Last 7 days</option>
                    <option value="30days">Last 30 days</option>
                    <option value="90days">Last 90 days</option>
                    <option value="all">All time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tests List */}
            <div className="space-y-6">
              {filteredTests.map((test) => {
                const StatusIcon = getStatusIcon(test.status);
                return (
                  <div key={test.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${
                          test.status === 'running' ? 'bg-green-100' :
                          test.status === 'completed' ? 'bg-blue-100' :
                          test.status === 'draft' ? 'bg-gray-100' :
                          'bg-yellow-100'
                        }`}>
                          <StatusIcon className={`h-5 w-5 ${
                            test.status === 'running' ? 'text-green-600' :
                            test.status === 'completed' ? 'text-blue-600' :
                            test.status === 'draft' ? 'text-gray-600' :
                            'text-yellow-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                          <p className="text-gray-600 mb-3">{test.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Created by {test.creator}</span>
                            <span>•</span>
                            <span>{test.createdAt}</span>
                            <span>•</span>
                            <span className="capitalize">{testTypes.find(t => t.id === test.type)?.label}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                          {test.status.toUpperCase()}
                        </span>
                        {test.status === 'running' && (
                          <span className="text-sm text-gray-500">
                            Day {test.daysRunning}/{test.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Test Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{test.participants.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Participants</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900">{test.confidence}%</p>
                        <p className="text-sm text-gray-600">Confidence</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${
                          test.results?.improvement > 0 ? 'text-green-600' : 
                          test.results?.improvement < 0 ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {test.results?.improvement ? 
                            `${test.results.improvement > 0 ? '+' : ''}${test.results.improvement.toFixed(1)}%` : 
                            'N/A'
                          }
                        </p>
                        <p className="text-sm text-gray-600">Improvement</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${
                          test.results?.isSignificant ? 'text-green-600' : 
                          test.results?.isSignificant === false ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {test.results ? (test.results.isSignificant ? 'Yes' : 'No') : 'N/A'}
                        </p>
                        <p className="text-sm text-gray-600">Significant</p>
                      </div>
                    </div>
                    
                    {/* Variants Preview */}
                    {test.variants.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Variants Performance</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {test.variants.map((variant) => (
                            <div key={variant.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium text-gray-900">{variant.name}</p>
                                <p className="text-sm text-gray-600">{variant.traffic}% traffic</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-gray-900">{variant.conversionRate.toFixed(2)}%</p>
                                <p className="text-sm text-gray-600">{variant.conversions}/{variant.visitors}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        {test.status === 'draft' && (
                          <button
                            onClick={() => handleStartTest(test.id)}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            <Play className="h-4 w-4" />
                            <span>Start Test</span>
                          </button>
                        )}
                        {test.status === 'running' && (
                          <>
                            <button
                              onClick={() => handleStopTest(test.id)}
                              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                              <Stop className="h-4 w-4" />
                              <span>Stop</span>
                            </button>
                            <button
                              onClick={() => handleCompleteTest(test.id)}
                              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              <CheckCircle className="h-4 w-4" />
                              <span>Complete</span>
                            </button>
                          </>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedTest(test)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <Copy className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {filteredTests.length === 0 && (
                <div className="text-center py-12">
                  <TestTube className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No tests found</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your filters or create a new test</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Performance Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Testing Performance Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">85%</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Success Rate</h4>
                  <p className="text-sm text-gray-600">Tests with significant results</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">12.4%</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Avg Improvement</h4>
                  <p className="text-sm text-gray-600">Average lift from winning variants</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">18</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Avg Duration</h4>
                  <p className="text-sm text-gray-600">Days to reach significance</p>
                </div>
              </div>
            </div>

            {/* Test Type Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance by Test Type</h3>
              <div className="space-y-4">
                {testTypes.slice(0, 6).map((type, index) => {
                  const successRate = Math.floor(Math.random() * 30) + 60; // Mock data
                  const avgImprovement = (Math.random() * 20 + 5).toFixed(1); // Mock data
                  const testCount = Math.floor(Math.random() * 15) + 5; // Mock data
                  
                  return (
                    <div key={type.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <type.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{type.label}</h4>
                          <p className="text-sm text-gray-600">{testCount} tests completed</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-900">{successRate}%</p>
                          <p className="text-xs text-gray-600">Success Rate</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-green-600">+{avgImprovement}%</p>
                          <p className="text-xs text-gray-600">Avg Improvement</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Monthly Testing Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Testing Activity</h3>
              <div className="space-y-4">
                {['January', 'December', 'November', 'October', 'September', 'August'].map((month, index) => {
                  const testsStarted = Math.floor(Math.random() * 10) + 5;
                  const testsCompleted = Math.floor(Math.random() * 8) + 3;
                  const participants = Math.floor(Math.random() * 5000) + 2000;
                  
                  return (
                    <div key={month} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{month} 2025</h4>
                        <p className="text-sm text-gray-600">{participants.toLocaleString()} total participants</p>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-lg font-bold text-blue-600">{testsStarted}</p>
                          <p className="text-xs text-gray-600">Started</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-green-600">{testsCompleted}</p>
                          <p className="text-xs text-gray-600">Completed</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Default Test Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Significance Level</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="0.05">95% (α = 0.05)</option>
                    <option value="0.01">99% (α = 0.01)</option>
                    <option value="0.10">90% (α = 0.10)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Test Duration</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="7">1 week</option>
                    <option value="14">2 weeks</option>
                    <option value="21">3 weeks</option>
                    <option value="28">4 weeks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Sample Size</label>
                  <input
                    type="number"
                    defaultValue="1000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Auto-stop on Significance</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Settings</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Email notifications for test completion</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Email notifications for significant results</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Daily digest of test performance</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="text-gray-700">Weekly testing summary report</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Test Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Create New A/B Test</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Test Name</label>
                    <input
                      type="text"
                      value={newTest.name}
                      onChange={(e) => setNewTest(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., Homepage CTA Button Color Test"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={newTest.description}
                      onChange={(e) => setNewTest(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe what you're testing and why..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hypothesis</label>
                    <textarea
                      value={newTest.hypothesis}
                      onChange={(e) => setNewTest(prev => ({ ...prev, hypothesis: e.target.value }))}
                      placeholder="If we change X, then Y will happen because Z..."
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Test Configuration */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Test Type</label>
                    <select
                      value={newTest.type}
                      onChange={(e) => setNewTest(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {testTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Metric</label>
                    <select
                      value={newTest.targetMetric}
                      onChange={(e) => setNewTest(prev => ({ ...prev, targetMetric: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {targetMetrics.map((metric) => (
                        <option key={metric.id} value={metric.id}>{metric.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Traffic Split (%)</label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={newTest.trafficSplit}
                      onChange={(e) => setNewTest(prev => ({ ...prev, trafficSplit: parseInt(e.target.value) }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>Control: {100 - newTest.trafficSplit}%</span>
                      <span>Variant: {newTest.trafficSplit}%</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration (days)</label>
                    <input
                      type="number"
                      value={newTest.duration}
                      onChange={(e) => setNewTest(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                      min="1"
                      max="90"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Sample Size</label>
                    <input
                      type="number"
                      value={newTest.minSampleSize}
                      onChange={(e) => setNewTest(prev => ({ ...prev, minSampleSize: parseInt(e.target.value) }))}
                      min="100"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Significance Level</label>
                    <select
                      value={newTest.significanceLevel}
                      onChange={(e) => setNewTest(prev => ({ ...prev, significanceLevel: parseFloat(e.target.value) }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="0.05">95% (α = 0.05)</option>
                      <option value="0.01">99% (α = 0.01)</option>
                      <option value="0.10">90% (α = 0.10)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTest}
                disabled={!newTest.name || !newTest.description}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Create Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test Details Modal */}
      {selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTest.name}</h2>
                  <p className="text-gray-600 mt-1">{selectedTest.description}</p>
                </div>
                <button
                  onClick={() => setSelectedTest(null)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Test Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{selectedTest.participants.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{selectedTest.confidence}%</p>
                  <p className="text-sm text-gray-600">Statistical Confidence</p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold ${
                    selectedTest.results?.improvement > 0 ? 'text-green-600' : 
                    selectedTest.results?.improvement < 0 ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {selectedTest.results?.improvement ? 
                      `${selectedTest.results.improvement > 0 ? '+' : ''}${selectedTest.results.improvement.toFixed(1)}%` : 
                      'N/A'
                    }
                  </p>
                  <p className="text-sm text-gray-600">Improvement</p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold ${
                    selectedTest.results?.isSignificant ? 'text-green-600' : 
                    selectedTest.results?.isSignificant === false ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {selectedTest.results ? (selectedTest.results.isSignificant ? 'Yes' : 'No') : 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">Statistically Significant</p>
                </div>
              </div>

              {/* Variants Comparison */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Variants Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTest.variants.map((variant) => (
                    <div key={variant.id} className={`p-6 rounded-lg border-2 ${
                      variant.isControl ? 'border-gray-300 bg-gray-50' : 
                      selectedTest.results?.winner === variant.id ? 'border-green-500 bg-green-50' : 'border-blue-300 bg-blue-50'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">{variant.name}</h4>
                        {selectedTest.results?.winner === variant.id && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Winner</span>
                        )}
                        {variant.isControl && (
                          <span className="px-2 py-1 bg-gray-500 text-white text-xs rounded-full">Control</span>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversion Rate</span>
                          <span className="font-bold text-gray-900">{variant.conversionRate.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversions</span>
                          <span className="font-bold text-gray-900">{variant.conversions.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Visitors</span>
                          <span className="font-bold text-gray-900">{variant.visitors.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Traffic Split</span>
                          <span className="font-bold text-gray-900">{variant.traffic}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Test Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hypothesis</span>
                      <span className="font-medium text-gray-900 text-right max-w-xs">{selectedTest.hypothesis}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Test Type</span>
                      <span className="font-medium text-gray-900">{testTypes.find(t => t.id === selectedTest.type)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Metric</span>
                      <span className="font-medium text-gray-900">{targetMetrics.find(m => m.id === selectedTest.targetMetric)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">{selectedTest.duration} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Created By</span>
                      <span className="font-medium text-gray-900">{selectedTest.creator}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistical Analysis</h3>
                  <div className="space-y-3">
                    {selectedTest.results && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">P-Value</span>
                          <span className="font-medium text-gray-900">{selectedTest.results.pValue.toFixed(4)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Significance Level</span>
                          <span className="font-medium text-gray-900">{(selectedTest.significanceLevel * 100).toFixed(0)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Minimum Sample Size</span>
                          <span className="font-medium text-gray-900">{selectedTest.minSampleSize.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sample Size Reached</span>
                          <span className={`font-medium ${selectedTest.participants >= selectedTest.minSampleSize ? 'text-green-600' : 'text-red-600'}`}>
                            {selectedTest.participants >= selectedTest.minSampleSize ? 'Yes' : 'No'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ABTestingFramework;

