import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Monitor, Activity, AlertTriangle, CheckCircle, XCircle, TrendingUp,
  TrendingDown, Zap, Target, Eye, Settings, Bell, Clock,
  Server, Database, Network, Cpu, HardDrive, MemoryStick
} from 'lucide-react';

const MachineLearningMonitoring = () => {
  const [selectedModel, setSelectedModel] = useState('model_001');
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [timeRange, setTimeRange] = useState('24h');

  // Model monitoring data
  const models = [
    {
      id: 'model_001',
      name: 'Relationship Matching Model',
      status: 'healthy',
      accuracy: 94.7,
      drift_score: 0.12,
      latency: 45,
      throughput: 2400,
      error_rate: 0.08,
      uptime: 99.8,
      last_updated: '2025-01-07 14:30'
    },
    {
      id: 'model_002',
      name: 'Sentiment Analysis Model',
      status: 'warning',
      accuracy: 91.3,
      drift_score: 0.28,
      latency: 67,
      throughput: 1800,
      error_rate: 0.15,
      uptime: 98.2,
      last_updated: '2025-01-07 10:15'
    },
    {
      id: 'model_003',
      name: 'Image Classification Model',
      status: 'critical',
      accuracy: 87.9,
      drift_score: 0.45,
      latency: 120,
      throughput: 800,
      error_rate: 0.32,
      uptime: 94.5,
      last_updated: '2025-01-07 08:00'
    },
    {
      id: 'model_004',
      name: 'Behavior Prediction Model',
      status: 'healthy',
      accuracy: 96.2,
      drift_score: 0.08,
      latency: 38,
      throughput: 3200,
      error_rate: 0.05,
      uptime: 99.9,
      last_updated: '2025-01-07 16:45'
    }
  ];

  // Monitoring metrics
  const monitoringMetrics = [
    {
      metric: 'Models Monitored',
      value: '12',
      change: '+2',
      trend: 'up',
      description: 'Active models'
    },
    {
      metric: 'Avg Accuracy',
      value: '92.5%',
      change: '-1.2%',
      trend: 'down',
      description: 'Across all models'
    },
    {
      metric: 'Drift Detected',
      value: '3',
      change: '+1',
      trend: 'up',
      description: 'Models with drift'
    },
    {
      metric: 'Avg Latency',
      value: '67ms',
      change: '+12ms',
      trend: 'down',
      description: 'Response time'
    }
  ];

  // Performance over time
  const performanceOverTime = [
    { time: '00:00', accuracy: 94.2, latency: 42, throughput: 2300, errors: 5 },
    { time: '04:00', accuracy: 94.5, latency: 45, throughput: 2400, errors: 3 },
    { time: '08:00', accuracy: 93.8, latency: 48, throughput: 2200, errors: 8 },
    { time: '12:00', accuracy: 92.1, latency: 52, throughput: 2100, errors: 12 },
    { time: '16:00', accuracy: 91.7, latency: 58, throughput: 1900, errors: 15 },
    { time: '20:00', accuracy: 92.3, latency: 55, throughput: 2000, errors: 10 },
    { time: '24:00', accuracy: 93.1, latency: 50, throughput: 2200, errors: 7 }
  ];

  // Data drift analysis
  const dataDriftAnalysis = [
    { feature: 'User Age', drift_score: 0.15, threshold: 0.20, status: 'good', samples: 15000 },
    { feature: 'Activity Level', drift_score: 0.28, threshold: 0.20, status: 'warning', samples: 12500 },
    { feature: 'Location Data', drift_score: 0.45, threshold: 0.20, status: 'critical', samples: 8900 },
    { feature: 'Interaction Frequency', drift_score: 0.12, threshold: 0.20, status: 'good', samples: 18200 },
    { feature: 'Profile Completeness', drift_score: 0.08, threshold: 0.20, status: 'excellent', samples: 20100 },
    { feature: 'Response Time', drift_score: 0.32, threshold: 0.20, status: 'warning', samples: 11800 }
  ];

  // System resources
  const systemResources = [
    { resource: 'CPU Usage', current: 67, threshold: 80, status: 'good' },
    { resource: 'Memory Usage', current: 72, threshold: 85, status: 'good' },
    { resource: 'GPU Usage', current: 89, threshold: 90, status: 'warning' },
    { resource: 'Disk Usage', current: 45, threshold: 80, status: 'excellent' },
    { resource: 'Network I/O', current: 34, threshold: 70, status: 'excellent' },
    { resource: 'Model Cache', current: 78, threshold: 85, status: 'good' }
  ];

  // Alert configuration
  const alertConfig = {
    accuracy_threshold: 90.0,
    drift_threshold: 0.25,
    latency_threshold: 100,
    error_rate_threshold: 0.20,
    uptime_threshold: 95.0,
    notification_channels: ['email', 'slack', 'webhook'],
    alert_frequency: 'immediate'
  };

  // Recent alerts
  const recentAlerts = [
    {
      id: 1,
      severity: 'critical',
      model: 'Image Classification Model',
      message: 'Data drift detected: Location Data feature exceeds threshold',
      timestamp: '5 minutes ago',
      status: 'open'
    },
    {
      id: 2,
      severity: 'warning',
      model: 'Sentiment Analysis Model',
      message: 'Model accuracy dropped below 92%',
      timestamp: '2 hours ago',
      status: 'acknowledged'
    },
    {
      id: 3,
      severity: 'info',
      model: 'Behavior Prediction Model',
      message: 'Model retrained successfully with improved accuracy',
      timestamp: '4 hours ago',
      status: 'resolved'
    },
    {
      id: 4,
      severity: 'warning',
      model: 'Relationship Matching Model',
      message: 'Increased latency detected during peak hours',
      timestamp: '6 hours ago',
      status: 'resolved'
    }
  ];

  // Model health distribution
  const modelHealthData = [
    { name: 'Healthy', value: 8, color: '#10b981' },
    { name: 'Warning', value: 3, color: '#f59e0b' },
    { name: 'Critical', value: 1, color: '#ef4444' }
  ];

  // Infrastructure metrics
  const infrastructureMetrics = [
    { time: '00:00', cpu: 65, memory: 70, gpu: 85, network: 30 },
    { time: '04:00', cpu: 68, memory: 72, gpu: 87, network: 32 },
    { time: '08:00', cpu: 72, memory: 75, gpu: 89, network: 35 },
    { time: '12:00', cpu: 75, memory: 78, gpu: 92, network: 38 },
    { time: '16:00', cpu: 73, memory: 76, gpu: 90, network: 36 },
    { time: '20:00', cpu: 70, memory: 74, gpu: 88, network: 34 },
    { time: '24:00', cpu: 67, memory: 72, gpu: 89, network: 34 }
  ];

  // Model comparison metrics
  const modelComparison = [
    { model: 'Relationship Matching', accuracy: 94.7, latency: 45, throughput: 2400, drift: 0.12 },
    { model: 'Sentiment Analysis', accuracy: 91.3, latency: 67, throughput: 1800, drift: 0.28 },
    { model: 'Image Classification', accuracy: 87.9, latency: 120, throughput: 800, drift: 0.45 },
    { model: 'Behavior Prediction', accuracy: 96.2, latency: 38, throughput: 3200, drift: 0.08 }
  ];

  // Monitoring thresholds
  const monitoringThresholds = {
    accuracy: { warning: 90, critical: 85 },
    latency: { warning: 80, critical: 120 },
    drift: { warning: 0.20, critical: 0.35 },
    error_rate: { warning: 0.15, critical: 0.25 },
    uptime: { warning: 98, critical: 95 }
  };

  useEffect(() => {
    // Simulate real-time monitoring updates
    const interval = setInterval(() => {
      console.log('Updating monitoring metrics...');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': case 'excellent': case 'good': case 'resolved': return 'text-green-600 bg-green-100';
      case 'warning': case 'acknowledged': return 'text-yellow-600 bg-yellow-100';
      case 'critical': case 'open': return 'text-red-600 bg-red-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy': case 'excellent': case 'good': case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'warning': case 'acknowledged': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': case 'open': return <XCircle className="w-4 h-4" />;
      case 'info': return <Activity className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDriftColor = (score, threshold) => {
    if (score <= threshold * 0.5) return 'text-green-600';
    if (score <= threshold) return 'text-blue-600';
    if (score <= threshold * 1.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getResourceColor = (current, threshold) => {
    if (current <= threshold * 0.6) return 'text-green-600';
    if (current <= threshold * 0.8) return 'text-blue-600';
    if (current <= threshold) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getResourceIcon = (resource) => {
    switch (resource) {
      case 'CPU Usage': return <Cpu className="w-4 h-4" />;
      case 'Memory Usage': return <MemoryStick className="w-4 h-4" />;
      case 'GPU Usage': return <Zap className="w-4 h-4" />;
      case 'Disk Usage': return <HardDrive className="w-4 h-4" />;
      case 'Network I/O': return <Network className="w-4 h-4" />;
      case 'Model Cache': return <Database className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Monitor className="w-8 h-8 text-cyan-600" />
              Machine Learning Monitoring
            </h1>
            <p className="text-gray-600">
              Real-time monitoring, drift detection, and performance tracking for ML models in production
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button
              onClick={() => setAlertsEnabled(!alertsEnabled)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                alertsEnabled 
                  ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Bell className="w-4 h-4" />
              Alerts: {alertsEnabled ? 'ON' : 'OFF'}
            </button>
            
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAdvanced 
                  ? 'bg-cyan-100 text-cyan-700 border border-cyan-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Advanced
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
              <Eye className="w-4 h-4" />
              Live Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Monitoring Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {monitoringMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Monitor className="w-6 h-6 text-cyan-600" />
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
          {/* Model Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Model Status</h3>
            <div className="space-y-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedModel === model.id
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900 truncate">{model.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(model.status)}`}>
                      {getStatusIcon(model.status)}
                      {model.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-cyan-600">{model.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Latency:</span>
                      <div className="font-semibold text-green-600">{model.latency}ms</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Drift Score:</span>
                      <span className={`font-semibold ${getDriftColor(model.drift_score, 0.25)}`}>
                        {model.drift_score.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Model Health Distribution */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Model Health</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={modelHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {modelHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {modelHealthData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Resources */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">System Resources</h3>
            <div className="space-y-3">
              {systemResources.map((resource, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getResourceIcon(resource.resource)}
                      <span className="font-medium text-gray-900">{resource.resource}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(resource.status)}`}>
                      {resource.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-lg font-bold ${getResourceColor(resource.current, resource.threshold)}`}>
                      {resource.current}%
                    </span>
                    <span className="text-sm text-gray-600">Max: {resource.threshold}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        resource.current <= resource.threshold * 0.6 ? 'bg-green-500' :
                        resource.current <= resource.threshold * 0.8 ? 'bg-blue-500' :
                        resource.current <= resource.threshold ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min((resource.current / resource.threshold) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                  <div className="text-xs text-gray-500 mb-1">{alert.model}</div>
                  <div className="text-xs text-gray-500">{alert.timestamp}</div>
                </div>
              ))}
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
                <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#06b6d4" strokeWidth={2} name="Accuracy %" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#10b981" strokeWidth={2} name="Throughput" />
                <Line yAxisId="left" type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} name="Errors" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Data Drift Analysis & Infrastructure Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Drift Analysis</h3>
              <div className="space-y-3">
                {dataDriftAnalysis.map((feature, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{feature.feature}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                        {feature.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>
                        <span className="text-gray-500">Drift Score:</span>
                        <div className={`font-semibold ${getDriftColor(feature.drift_score, feature.threshold)}`}>
                          {feature.drift_score.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Samples:</span>
                        <div className="font-semibold text-gray-600">{feature.samples.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          feature.drift_score <= feature.threshold * 0.5 ? 'bg-green-500' :
                          feature.drift_score <= feature.threshold ? 'bg-blue-500' :
                          feature.drift_score <= feature.threshold * 1.5 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min((feature.drift_score / feature.threshold) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure Metrics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={infrastructureMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="cpu" stackId="1" stroke="#06b6d4" fill="#06b6d4" name="CPU %" />
                  <Area type="monotone" dataKey="memory" stackId="1" stroke="#10b981" fill="#10b981" name="Memory %" />
                  <Area type="monotone" dataKey="gpu" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="GPU %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Model Comparison */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Model</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Latency</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Throughput</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Drift Score</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((model, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{model.model}</td>
                      <td className="py-3 px-4 text-cyan-600 font-semibold">{model.accuracy}%</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">{model.latency}ms</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{model.throughput}</td>
                      <td className="py-3 px-4">
                        <span className={`font-semibold ${getDriftColor(model.drift, 0.25)}`}>
                          {model.drift.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advanced Configuration */}
          {showAdvanced && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoring Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Alert Thresholds</h4>
                  <div className="space-y-3">
                    {Object.entries(monitoringThresholds).map(([metric, thresholds]) => (
                      <div key={metric}>
                        <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                          {metric.replace('_', ' ')}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="number"
                            placeholder="Warning"
                            defaultValue={thresholds.warning}
                            className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          />
                          <input
                            type="number"
                            placeholder="Critical"
                            defaultValue={thresholds.critical}
                            className="px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Alert Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(alertConfig).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="font-medium text-gray-900">
                          {Array.isArray(value) ? value.join(', ') : value.toString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Monitoring Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Refresh Interval</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                        <option value="5">5 seconds</option>
                        <option value="10">10 seconds</option>
                        <option value="30">30 seconds</option>
                        <option value="60">1 minute</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Data Retention</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                        <option value="7">7 days</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                        <option value="365">1 year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Auto-scaling</label>
                      <div className="w-10 h-6 rounded-full p-1 bg-cyan-500">
                        <div className="w-4 h-4 rounded-full bg-white translate-x-4 transition-transform"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Apply Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Export Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineLearningMonitoring;

