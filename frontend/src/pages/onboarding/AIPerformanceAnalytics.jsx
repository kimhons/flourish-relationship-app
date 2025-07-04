import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Activity, TrendingUp, TrendingDown, Zap, Target, Eye,
  BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon,
  Brain, Cpu, Server, Clock, CheckCircle, AlertTriangle,
  XCircle, RefreshCw, Settings, Download, Share2,
  Monitor, Database, Network, HardDrive, Award
} from 'lucide-react';

const AIPerformanceAnalytics = () => {
  const [selectedModel, setSelectedModel] = useState('relationship_model');
  const [timeRange, setTimeRange] = useState('24h');
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // AI Models
  const aiModels = [
    {
      id: 'relationship_model',
      name: 'Relationship Compatibility',
      type: 'Deep Neural Network',
      status: 'active',
      accuracy: 94.7,
      latency: 45,
      throughput: 2400,
      uptime: 99.8
    },
    {
      id: 'sentiment_model',
      name: 'Sentiment Analysis',
      type: 'Transformer',
      status: 'active',
      accuracy: 96.2,
      latency: 23,
      throughput: 5200,
      uptime: 99.9
    },
    {
      id: 'image_model',
      name: 'Image Analysis',
      type: 'CNN',
      status: 'active',
      accuracy: 95.8,
      latency: 120,
      throughput: 800,
      uptime: 99.7
    },
    {
      id: 'behavior_model',
      name: 'Behavior Prediction',
      type: 'LSTM',
      status: 'warning',
      accuracy: 91.3,
      latency: 67,
      throughput: 1800,
      uptime: 98.9
    },
    {
      id: 'recommendation_model',
      name: 'Match Recommendation',
      type: 'Collaborative Filtering',
      status: 'error',
      accuracy: 87.4,
      latency: 89,
      throughput: 1200,
      uptime: 95.2
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      metric: 'Average Accuracy',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Across all AI models'
    },
    {
      metric: 'Response Time',
      value: '52ms',
      change: '-8ms',
      trend: 'up',
      description: 'Average model latency'
    },
    {
      metric: 'Throughput',
      value: '12.4K/min',
      change: '+15%',
      trend: 'up',
      description: 'Predictions per minute'
    },
    {
      metric: 'System Uptime',
      value: '99.8%',
      change: '+0.2%',
      trend: 'up',
      description: 'Overall system availability'
    }
  ];

  // Performance over time
  const performanceOverTime = [
    { time: '00:00', accuracy: 94.2, latency: 58, throughput: 11200, errors: 12 },
    { time: '04:00', accuracy: 94.5, latency: 55, throughput: 11800, errors: 8 },
    { time: '08:00', accuracy: 94.8, latency: 52, throughput: 12400, errors: 5 },
    { time: '12:00', accuracy: 94.7, latency: 48, throughput: 12800, errors: 3 },
    { time: '16:00', accuracy: 94.9, latency: 45, throughput: 13200, errors: 2 },
    { time: '20:00', accuracy: 94.6, latency: 49, throughput: 12600, errors: 7 },
    { time: '24:00', accuracy: 94.7, latency: 52, throughput: 12400, errors: 4 }
  ];

  // Model comparison
  const modelComparison = [
    { model: 'Relationship', accuracy: 94.7, precision: 93.8, recall: 95.6, f1Score: 94.7, latency: 45 },
    { model: 'Sentiment', accuracy: 96.2, precision: 95.4, recall: 97.1, f1Score: 96.2, latency: 23 },
    { model: 'Image', accuracy: 95.8, precision: 94.9, recall: 96.7, f1Score: 95.8, latency: 120 },
    { model: 'Behavior', accuracy: 91.3, precision: 90.1, recall: 92.5, f1Score: 91.3, latency: 67 },
    { model: 'Recommendation', accuracy: 87.4, precision: 86.2, recall: 88.6, f1Score: 87.4, latency: 89 }
  ];

  // Resource utilization
  const resourceUtilization = [
    { resource: 'GPU Memory', used: 14.2, total: 16.0, percentage: 88.8, status: 'high' },
    { resource: 'GPU Compute', used: 87, total: 100, percentage: 87.0, status: 'high' },
    { resource: 'CPU Usage', used: 45, total: 100, percentage: 45.0, status: 'normal' },
    { resource: 'RAM Usage', used: 28.4, total: 64.0, percentage: 44.4, status: 'normal' },
    { resource: 'Storage I/O', used: 234, total: 500, percentage: 46.8, status: 'normal' },
    { resource: 'Network I/O', used: 156, total: 1000, percentage: 15.6, status: 'low' }
  ];

  // Error analysis
  const errorAnalysis = [
    { type: 'Timeout Errors', count: 23, percentage: 34.3, trend: 'down' },
    { type: 'Memory Errors', count: 15, percentage: 22.4, trend: 'up' },
    { type: 'Input Validation', count: 12, percentage: 17.9, trend: 'stable' },
    { type: 'Model Errors', count: 8, percentage: 11.9, trend: 'down' },
    { type: 'Network Errors', count: 6, percentage: 9.0, trend: 'stable' },
    { type: 'Other', count: 3, percentage: 4.5, trend: 'stable' }
  ];

  // Performance benchmarks
  const performanceBenchmarks = [
    {
      benchmark: 'Industry Standard',
      accuracy: 85.0,
      latency: 150,
      throughput: 5000,
      uptime: 99.0
    },
    {
      benchmark: 'Our Performance',
      accuracy: 94.7,
      latency: 52,
      throughput: 12400,
      uptime: 99.8
    },
    {
      benchmark: 'Target Goal',
      accuracy: 96.0,
      latency: 40,
      throughput: 15000,
      uptime: 99.9
    }
  ];

  // Model health indicators
  const modelHealthIndicators = [
    {
      indicator: 'Data Drift',
      status: 'good',
      score: 92.3,
      description: 'Input data distribution stability'
    },
    {
      indicator: 'Model Drift',
      status: 'warning',
      score: 87.6,
      description: 'Model performance degradation'
    },
    {
      indicator: 'Feature Importance',
      status: 'good',
      score: 94.1,
      description: 'Feature relevance consistency'
    },
    {
      indicator: 'Prediction Confidence',
      status: 'excellent',
      score: 96.8,
      description: 'Model prediction certainty'
    }
  ];

  // Real-time alerts
  const realTimeAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Behavior model latency increased by 15%',
      timestamp: '2 minutes ago',
      model: 'behavior_model'
    },
    {
      id: 2,
      type: 'info',
      message: 'Sentiment model accuracy improved to 96.2%',
      timestamp: '15 minutes ago',
      model: 'sentiment_model'
    },
    {
      id: 3,
      type: 'error',
      message: 'Recommendation model experiencing high error rate',
      timestamp: '1 hour ago',
      model: 'recommendation_model'
    }
  ];

  // Detailed metrics for selected model
  const detailedMetrics = {
    relationship_model: {
      accuracy: { current: 94.7, target: 95.0, trend: 'up' },
      precision: { current: 93.8, target: 94.0, trend: 'up' },
      recall: { current: 95.6, target: 95.0, trend: 'stable' },
      f1Score: { current: 94.7, target: 94.5, trend: 'up' },
      auc: { current: 0.967, target: 0.960, trend: 'up' },
      latency: { current: 45, target: 50, trend: 'up' },
      throughput: { current: 2400, target: 2000, trend: 'up' },
      errorRate: { current: 0.03, target: 0.05, trend: 'up' }
    }
  };

  useEffect(() => {
    if (refreshing) {
      const timer = setTimeout(() => setRefreshing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [refreshing]);

  const refreshData = () => {
    setRefreshing(true);
    console.log('Refreshing performance data...');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getHealthColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-600 bg-red-100 border-red-200';
      case 'warning': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'info': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getResourceStatus = (status) => {
    switch (status) {
      case 'high': return 'text-red-600';
      case 'normal': return 'text-green-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Activity className="w-8 h-8 text-indigo-600" />
              AI Performance Analytics
            </h1>
            <p className="text-gray-600">
              Real-time monitoring and analysis of AI model performance, accuracy, and system health
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-600">Live Monitoring</span>
            </div>
            
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button
              onClick={refreshData}
              disabled={refreshing}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                refreshing 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
            
            <button
              onClick={() => setShowDetailedMetrics(!showDetailedMetrics)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showDetailedMetrics 
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              Detailed View
            </button>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Activity className="w-6 h-6 text-indigo-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {metric.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* AI Models */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AI Models</h3>
            <div className="space-y-3">
              {aiModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedModel === model.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{model.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                      {model.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{model.type}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-indigo-600">{model.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Latency:</span>
                      <div className="font-semibold text-green-600">{model.latency}ms</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Model Health */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Model Health</h3>
            <div className="space-y-3">
              {modelHealthIndicators.map((indicator, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{indicator.indicator}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getHealthColor(indicator.status)}`}>
                      {indicator.status}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-indigo-600 mb-1">{indicator.score}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        indicator.score >= 95 ? 'bg-green-500' :
                        indicator.score >= 90 ? 'bg-blue-500' :
                        indicator.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${indicator.score}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500">{indicator.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              {realTimeAlerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}>
                  <div className="font-medium text-sm mb-1">{alert.message}</div>
                  <div className="text-xs opacity-75">{alert.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Configure Alerts
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Performance Over Time */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} name="Accuracy %" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#10b981" strokeWidth={2} name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#f59e0b" strokeWidth={2} name="Throughput" />
                <Line yAxisId="right" type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} name="Errors" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Model Comparison & Error Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={modelComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy" />
                  <Bar dataKey="f1Score" fill="#10b981" name="F1 Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Error Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={errorAnalysis}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ type, percentage }) => `${type} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {errorAnalysis.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Resource Utilization */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Utilization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resourceUtilization.map((resource, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{resource.resource}</span>
                    <span className={`text-sm font-medium ${getResourceStatus(resource.status)}`}>
                      {resource.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600 mb-1">{resource.percentage.toFixed(1)}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        resource.percentage > 80 ? 'bg-red-500' :
                        resource.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${resource.percentage}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {resource.resource.includes('Memory') || resource.resource.includes('RAM') ? 
                      `${resource.used} / ${resource.total} GB` :
                      resource.resource.includes('I/O') ?
                      `${resource.used} / ${resource.total} MB/s` :
                      `${resource.used}%`
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Metrics */}
          {showDetailedMetrics && selectedModel && detailedMetrics[selectedModel] && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Detailed Metrics - {aiModels.find(m => m.id === selectedModel)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(detailedMetrics[selectedModel]).map(([key, value]) => (
                  <div key={key} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <div className={`flex items-center gap-1 text-xs ${
                        value.trend === 'up' ? 'text-green-600' : 
                        value.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {value.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : 
                         value.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : 
                         <Activity className="w-3 h-3" />}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-indigo-600 mb-1">
                      {typeof value.current === 'number' && value.current < 1 ? 
                        value.current.toFixed(3) : 
                        typeof value.current === 'number' ? 
                        value.current.toLocaleString() : 
                        value.current}
                      {key.includes('Rate') ? '%' : key === 'latency' ? 'ms' : ''}
                    </div>
                    <div className="text-sm text-gray-600">
                      Target: {typeof value.target === 'number' && value.target < 1 ? 
                        value.target.toFixed(3) : 
                        typeof value.target === 'number' ? 
                        value.target.toLocaleString() : 
                        value.target}
                      {key.includes('Rate') ? '%' : key === 'latency' ? 'ms' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Benchmarks */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Benchmarks</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Benchmark</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Latency (ms)</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Throughput</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Uptime</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceBenchmarks.map((benchmark, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{benchmark.benchmark}</td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${
                          benchmark.benchmark === 'Our Performance' ? 'text-indigo-600' :
                          benchmark.benchmark === 'Target Goal' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {benchmark.accuracy}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${
                          benchmark.benchmark === 'Our Performance' ? 'text-indigo-600' :
                          benchmark.benchmark === 'Target Goal' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {benchmark.latency}ms
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${
                          benchmark.benchmark === 'Our Performance' ? 'text-indigo-600' :
                          benchmark.benchmark === 'Target Goal' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {benchmark.throughput.toLocaleString()}/min
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${
                          benchmark.benchmark === 'Our Performance' ? 'text-indigo-600' :
                          benchmark.benchmark === 'Target Goal' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {benchmark.uptime}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advanced Analytics Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monitoring Frequency</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="realtime">Real-time</option>
                  <option value="1min">Every Minute</option>
                  <option value="5min">Every 5 Minutes</option>
                  <option value="15min">Every 15 Minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alert Threshold</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="strict">Strict (95%+)</option>
                  <option value="moderate">Moderate (90%+)</option>
                  <option value="relaxed">Relaxed (85%+)</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="7d">7 Days</option>
                  <option value="30d">30 Days</option>
                  <option value="90d">90 Days</option>
                  <option value="1y">1 Year</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Settings
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reset to Default
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Export Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformanceAnalytics;

