import React, { useState, useEffect } from 'react';
import { 
  Monitor, Smartphone, Tablet, Eye, Settings, Zap,
  Layout, Palette, Type, Grid, Move, RotateCcw,
  User, Clock, TrendingUp, Activity, Target, Brain,
  Sliders, ToggleLeft, ToggleRight, Maximize, Minimize,
  Sun, Moon, Contrast, Volume2, VolumeX, Accessibility
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell
} from 'recharts';

const DynamicUIAdaptation = () => {
  const [adaptationMode, setAdaptationMode] = useState('intelligent');
  const [selectedDevice, setSelectedDevice] = useState('desktop');
  const [previewMode, setPreviewMode] = useState('live');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [adaptationScore, setAdaptationScore] = useState(94.7);

  // UI adaptation settings
  const adaptationSettings = {
    layout_optimization: true,
    color_scheme_adaptation: true,
    font_size_scaling: true,
    interaction_optimization: true,
    accessibility_enhancement: true,
    performance_optimization: true,
    contextual_elements: true,
    behavioral_learning: true
  };

  // Device configurations
  const deviceConfigurations = [
    {
      id: 'desktop',
      name: 'Desktop',
      icon: Monitor,
      screen_size: '1920x1080',
      adaptation_level: 'full',
      performance_score: 98.3,
      user_satisfaction: 96.7,
      active_users: 45230,
      avg_session: '24m 15s'
    },
    {
      id: 'tablet',
      name: 'Tablet',
      icon: Tablet,
      screen_size: '1024x768',
      adaptation_level: 'optimized',
      performance_score: 94.8,
      user_satisfaction: 93.2,
      active_users: 23450,
      avg_session: '18m 42s'
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: Smartphone,
      screen_size: '375x667',
      adaptation_level: 'enhanced',
      performance_score: 91.5,
      user_satisfaction: 89.7,
      active_users: 67890,
      avg_session: '12m 33s'
    }
  ];

  // UI adaptation metrics
  const adaptationMetrics = [
    { category: 'Layout Efficiency', current: 96.3, target: 95, improvement: 4.2 },
    { category: 'Visual Hierarchy', current: 93.8, target: 90, improvement: 6.7 },
    { category: 'Interaction Flow', current: 91.5, target: 88, improvement: 8.3 },
    { category: 'Accessibility Score', current: 97.2, target: 95, improvement: 3.1 },
    { category: 'Performance Impact', current: 89.7, target: 85, improvement: 7.9 },
    { category: 'User Satisfaction', current: 94.6, target: 92, improvement: 5.4 }
  ];

  // Adaptation algorithms
  const adaptationAlgorithms = [
    {
      id: 'behavioral_analysis',
      name: 'Behavioral Analysis',
      description: 'Analyzes user interaction patterns to optimize interface elements',
      accuracy: 94.7,
      processing_speed: 'real-time',
      data_points: 2340,
      status: 'active',
      impact_score: 96.3
    },
    {
      id: 'contextual_adaptation',
      name: 'Contextual Adaptation',
      description: 'Adapts UI based on time, location, and usage context',
      accuracy: 91.2,
      processing_speed: 'fast',
      data_points: 1890,
      status: 'active',
      impact_score: 93.8
    },
    {
      id: 'accessibility_optimization',
      name: 'Accessibility Optimization',
      description: 'Automatically adjusts interface for accessibility needs',
      accuracy: 97.8,
      processing_speed: 'instant',
      data_points: 1560,
      status: 'active',
      impact_score: 98.1
    },
    {
      id: 'performance_balancing',
      name: 'Performance Balancing',
      description: 'Balances visual richness with performance requirements',
      accuracy: 89.3,
      processing_speed: 'medium',
      data_points: 2120,
      status: 'active',
      impact_score: 91.7
    }
  ];

  // UI adaptation features
  const adaptationFeatures = [
    {
      id: 'smart_layout',
      name: 'Smart Layout Engine',
      description: 'Automatically adjusts layout based on content and screen size',
      enabled: true,
      impact_score: 95.3,
      user_adoption: 87.6,
      performance_cost: 'low',
      adaptation_speed: 'instant'
    },
    {
      id: 'dynamic_theming',
      name: 'Dynamic Theming',
      description: 'Adapts color schemes and themes based on preferences and context',
      enabled: true,
      impact_score: 92.7,
      user_adoption: 94.2,
      performance_cost: 'minimal',
      adaptation_speed: 'fast'
    },
    {
      id: 'intelligent_typography',
      name: 'Intelligent Typography',
      description: 'Optimizes font sizes and spacing for readability and accessibility',
      enabled: true,
      impact_score: 89.4,
      user_adoption: 91.8,
      performance_cost: 'minimal',
      adaptation_speed: 'instant'
    },
    {
      id: 'gesture_optimization',
      name: 'Gesture Optimization',
      description: 'Adapts touch targets and gestures for different devices',
      enabled: true,
      impact_score: 93.1,
      user_adoption: 85.3,
      performance_cost: 'low',
      adaptation_speed: 'real-time'
    },
    {
      id: 'content_prioritization',
      name: 'Content Prioritization',
      description: 'Dynamically prioritizes and arranges content based on user behavior',
      enabled: true,
      impact_score: 96.8,
      user_adoption: 89.7,
      performance_cost: 'medium',
      adaptation_speed: 'fast'
    },
    {
      id: 'interaction_prediction',
      name: 'Interaction Prediction',
      description: 'Predicts and pre-loads likely user interactions',
      enabled: false,
      impact_score: 88.2,
      user_adoption: 76.4,
      performance_cost: 'high',
      adaptation_speed: 'predictive'
    }
  ];

  // Real-time adaptation data
  const realtimeAdaptations = [
    {
      timestamp: '2025-01-07 14:30:00',
      user_id: 'user_001',
      device: 'mobile',
      adaptation_type: 'layout_optimization',
      trigger: 'screen_rotation',
      result: 'improved_usability',
      confidence: 96.3
    },
    {
      timestamp: '2025-01-07 14:28:00',
      user_id: 'user_002',
      device: 'desktop',
      adaptation_type: 'color_scheme_adjustment',
      trigger: 'time_of_day',
      result: 'reduced_eye_strain',
      confidence: 94.7
    },
    {
      timestamp: '2025-01-07 14:25:00',
      user_id: 'user_003',
      device: 'tablet',
      adaptation_type: 'font_size_scaling',
      trigger: 'accessibility_preference',
      result: 'enhanced_readability',
      confidence: 98.1
    },
    {
      timestamp: '2025-01-07 14:22:00',
      user_id: 'user_001',
      device: 'mobile',
      adaptation_type: 'gesture_optimization',
      trigger: 'interaction_pattern',
      result: 'faster_navigation',
      confidence: 91.8
    },
    {
      timestamp: '2025-01-07 14:20:00',
      user_id: 'user_004',
      device: 'desktop',
      adaptation_type: 'content_prioritization',
      trigger: 'behavioral_analysis',
      result: 'increased_engagement',
      confidence: 93.5
    }
  ];

  // Adaptation effectiveness over time
  const adaptationEffectiveness = [
    { week: 'Week 1', layout: 78, theming: 82, typography: 85, gestures: 76, content: 80, prediction: 65 },
    { week: 'Week 2', layout: 84, theming: 87, typography: 89, gestures: 82, content: 85, prediction: 71 },
    { week: 'Week 3', layout: 89, theming: 91, typography: 92, gestures: 87, content: 89, prediction: 78 },
    { week: 'Week 4', layout: 92, theming: 94, typography: 94, gestures: 91, content: 93, prediction: 83 },
    { week: 'Week 5', layout: 94, theming: 96, typography: 96, gestures: 93, content: 95, prediction: 87 },
    { week: 'Week 6', layout: 95, theming: 97, typography: 97, gestures: 94, content: 96, prediction: 89 },
    { week: 'Week 7', layout: 96, theming: 98, typography: 98, gestures: 95, content: 97, prediction: 91 }
  ];

  // Device usage patterns
  const deviceUsagePatterns = [
    { time: '6 AM', desktop: 15, tablet: 8, mobile: 45 },
    { time: '9 AM', desktop: 65, tablet: 25, mobile: 78 },
    { time: '12 PM', desktop: 78, tablet: 45, mobile: 89 },
    { time: '3 PM', desktop: 82, tablet: 38, mobile: 76 },
    { time: '6 PM', desktop: 45, tablet: 67, mobile: 94 },
    { time: '9 PM', desktop: 23, tablet: 78, mobile: 87 },
    { time: '12 AM', desktop: 8, tablet: 34, mobile: 56 }
  ];

  // User satisfaction by adaptation type
  const satisfactionByAdaptation = [
    { name: 'Layout', value: 96.3, color: '#8b5cf6' },
    { name: 'Theming', value: 94.7, color: '#10b981' },
    { name: 'Typography', value: 92.8, color: '#f59e0b' },
    { name: 'Gestures', value: 91.5, color: '#ef4444' },
    { name: 'Content', value: 95.1, color: '#3b82f6' },
    { name: 'Prediction', value: 88.9, color: '#8b5cf6' }
  ];

  useEffect(() => {
    let interval;
    if (adaptationMode === 'intelligent') {
      interval = setInterval(() => {
        setAdaptationScore(prev => Math.min(prev + (Math.random() - 0.3) * 0.3, 99));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [adaptationMode]);

  const toggleAdaptationFeature = (featureId) => {
    console.log(`Toggling adaptation feature: ${featureId}`);
    // In a real app, this would update the feature configuration
  };

  const optimizeAdaptation = (algorithmId) => {
    console.log(`Optimizing adaptation algorithm: ${algorithmId}`);
    // In a real app, this would trigger algorithm optimization
  };

  const exportAdaptationData = () => {
    console.log('Exporting UI adaptation analytics data...');
    // In a real app, this would export comprehensive adaptation reports
  };

  const previewAdaptation = (deviceType) => {
    setSelectedDevice(deviceType);
    console.log(`Previewing adaptation for device: ${deviceType}`);
    // In a real app, this would show device-specific preview
  };

  const getAdaptationColor = (score) => {
    if (score >= 95) return 'text-green-600 bg-green-100';
    if (score >= 90) return 'text-blue-600 bg-blue-100';
    if (score >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getPerformanceCostColor = (cost) => {
    switch (cost) {
      case 'minimal': return 'text-green-600 bg-green-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const selectedDeviceConfig = deviceConfigurations.find(device => device.id === selectedDevice);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Layout className="w-8 h-8 text-blue-600" />
              Dynamic UI Adaptation
            </h1>
            <p className="text-gray-600">
              Intelligent interface adaptation based on user behavior, device capabilities, and contextual factors
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={adaptationMode}
              onChange={(e) => setAdaptationMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="manual">Manual Control</option>
              <option value="intelligent">Intelligent Adaptation</option>
              <option value="aggressive">Aggressive Learning</option>
              <option value="conservative">Conservative Mode</option>
            </select>
            
            <select
              value={previewMode}
              onChange={(e) => setPreviewMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="live">Live Preview</option>
              <option value="simulation">Simulation Mode</option>
              <option value="comparison">A/B Comparison</option>
            </select>
            
            <button 
              onClick={exportAdaptationData}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <BarChart className="w-4 h-4" />
              Export Data
            </button>
            
            <button 
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Advanced
            </button>
          </div>
        </div>
      </div>

      {/* Adaptation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Layout className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{adaptationScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Overall Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Adaptation Score</h3>
            <p className="text-sm text-gray-600">Overall adaptation effectiveness</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">23.8%</div>
              <div className="text-xs text-gray-500">Improvement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Satisfaction</h3>
            <p className="text-sm text-gray-600">Satisfaction improvement</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">156K</div>
              <div className="text-xs text-gray-500">Adaptations</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Daily Adaptations</h3>
            <p className="text-sm text-gray-600">Automatic adjustments</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Activity className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">2.3ms</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Adaptation Speed</h3>
            <p className="text-sm text-gray-600">Average response time</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Device Preview */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Device Preview
            </h3>
            <div className="space-y-3">
              {deviceConfigurations.map((device) => {
                const IconComponent = device.icon;
                return (
                  <button
                    key={device.id}
                    onClick={() => previewAdaptation(device.id)}
                    className={`w-full p-3 rounded-lg border transition-colors ${
                      selectedDevice === device.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <div className="text-left">
                        <div className="font-medium text-gray-900">{device.name}</div>
                        <div className="text-xs text-gray-500">{device.screen_size}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {selectedDeviceConfig && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Device</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Performance</span>
                    <span className="font-semibold text-green-600">{selectedDeviceConfig.performance_score}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Satisfaction</span>
                    <span className="font-semibold text-blue-600">{selectedDeviceConfig.user_satisfaction}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold text-gray-900">{selectedDeviceConfig.active_users.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Session</span>
                    <span className="font-semibold text-gray-900">{selectedDeviceConfig.avg_session}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Adaptation Settings */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              Adaptation Settings
            </h3>
            <div className="space-y-3">
              {Object.entries(adaptationSettings).map(([key, enabled]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  <button
                    onClick={() => toggleAdaptationFeature(key)}
                    className={`p-1 rounded-full transition-colors ${
                      enabled ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {enabled ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <RotateCcw className="w-4 h-4" />
                Reset Adaptations
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                Preview Changes
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Target className="w-4 h-4" />
                Optimize Performance
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Accessibility className="w-4 h-4" />
                Accessibility Check
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Adaptation Effectiveness Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Adaptation Effectiveness Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={adaptationEffectiveness}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="layout" stroke="#3b82f6" strokeWidth={2} name="Smart Layout" />
                <Line type="monotone" dataKey="theming" stroke="#10b981" strokeWidth={2} name="Dynamic Theming" />
                <Line type="monotone" dataKey="typography" stroke="#f59e0b" strokeWidth={2} name="Typography" />
                <Line type="monotone" dataKey="gestures" stroke="#ef4444" strokeWidth={2} name="Gestures" />
                <Line type="monotone" dataKey="content" stroke="#8b5cf6" strokeWidth={2} name="Content Priority" />
                <Line type="monotone" dataKey="prediction" stroke="#6b7280" strokeWidth={2} name="Prediction" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Adaptation Algorithms */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Adaptation Algorithms</h3>
            <div className="space-y-4">
              {adaptationAlgorithms.map((algorithm) => (
                <div key={algorithm.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Brain className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{algorithm.name}</h4>
                        <p className="text-sm text-gray-600">{algorithm.description}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                        {algorithm.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{algorithm.accuracy}%</div>
                      <div className="text-xs text-gray-500">accuracy</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-gray-900">{algorithm.processing_speed}</div>
                      <div className="text-xs text-gray-500">Speed</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-purple-600">{algorithm.data_points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Data Points</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-green-600">{algorithm.impact_score}%</div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <button 
                        onClick={() => optimizeAdaptation(algorithm.id)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        Optimize
                      </button>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${algorithm.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Adaptation Features */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Adaptation Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adaptationFeatures.map((feature) => (
                <div key={feature.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleAdaptationFeature(feature.id)}
                      className={`p-1 rounded-full transition-colors ${
                        feature.enabled ? 'text-green-600' : 'text-gray-400'
                      }`}
                    >
                      {feature.enabled ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-indigo-600">{feature.impact_score}%</div>
                      <div className="text-xs text-gray-500">Impact</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-green-600">{feature.user_adoption}%</div>
                      <div className="text-xs text-gray-500">Adoption</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 rounded-full font-medium ${getPerformanceCostColor(feature.performance_cost)}`}>
                      {feature.performance_cost} cost
                    </span>
                    <span className="text-gray-600">{feature.adaptation_speed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Adaptations */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Real-time Adaptations
            </h3>
            <div className="space-y-3">
              {realtimeAdaptations.map((adaptation, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <span className="font-medium text-gray-900">{adaptation.user_id}</span>
                        <span className="text-gray-600 ml-2">on</span>
                        <span className="font-medium text-blue-600 ml-1">{adaptation.device}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-indigo-600">{adaptation.confidence}%</div>
                      <div className="text-xs text-gray-500">confidence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">{adaptation.adaptation_type.replace(/_/g, ' ')}</span>
                      <span className="ml-2">triggered by {adaptation.trigger.replace(/_/g, ' ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">{adaptation.result.replace(/_/g, ' ')}</span>
                      <span className="text-xs text-gray-500">{adaptation.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Usage Patterns and Satisfaction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage Patterns</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={deviceUsagePatterns}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="desktop" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Desktop" />
                  <Area type="monotone" dataKey="tablet" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Tablet" />
                  <Area type="monotone" dataKey="mobile" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Mobile" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfaction by Adaptation</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={satisfactionByAdaptation}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {satisfactionByAdaptation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicUIAdaptation;

