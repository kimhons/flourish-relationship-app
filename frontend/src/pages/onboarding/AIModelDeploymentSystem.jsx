import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Rocket, Server, Globe, Shield, Zap, Activity,
  CheckCircle, AlertTriangle, XCircle, Clock, Play,
  Pause, RotateCcw, Settings, Eye, Download, Upload,
  GitBranch, Target, TrendingUp, TrendingDown, Award,
  Monitor, Database, Network, HardDrive, Cpu
} from 'lucide-react';

const AIModelDeploymentSystem = () => {
  const [selectedDeployment, setSelectedDeployment] = useState('prod_001');
  const [deploymentStatus, setDeploymentStatus] = useState('active');
  const [showMetrics, setShowMetrics] = useState(true);
  const [autoScale, setAutoScale] = useState(true);

  // Deployment environments
  const deployments = [
    {
      id: 'prod_001',
      name: 'Relationship Matching Model',
      environment: 'production',
      status: 'active',
      version: 'v3.2.1',
      instances: 8,
      cpu_usage: 67,
      memory_usage: 72,
      requests_per_min: 12400,
      avg_latency: 45,
      uptime: 99.8,
      last_deployed: '2025-01-07 14:30'
    },
    {
      id: 'staging_001',
      name: 'Sentiment Analysis Model',
      environment: 'staging',
      status: 'testing',
      version: 'v2.1.0',
      instances: 3,
      cpu_usage: 34,
      memory_usage: 41,
      requests_per_min: 2800,
      avg_latency: 23,
      uptime: 99.2,
      last_deployed: '2025-01-07 10:15'
    },
    {
      id: 'dev_001',
      name: 'Image Analysis Model',
      environment: 'development',
      status: 'deploying',
      version: 'v1.8.3',
      instances: 2,
      cpu_usage: 89,
      memory_usage: 76,
      requests_per_min: 450,
      avg_latency: 120,
      uptime: 97.5,
      last_deployed: '2025-01-07 16:45'
    },
    {
      id: 'prod_002',
      name: 'Behavior Prediction Model',
      environment: 'production',
      status: 'error',
      version: 'v2.3.1',
      instances: 0,
      cpu_usage: 0,
      memory_usage: 0,
      requests_per_min: 0,
      avg_latency: 0,
      uptime: 94.2,
      last_deployed: '2025-01-06 22:10'
    },
    {
      id: 'canary_001',
      name: 'Recommendation Engine',
      environment: 'canary',
      status: 'rolling_out',
      version: 'v4.0.0-beta',
      instances: 1,
      cpu_usage: 45,
      memory_usage: 52,
      requests_per_min: 1200,
      avg_latency: 67,
      uptime: 98.9,
      last_deployed: '2025-01-07 12:00'
    }
  ];

  // Deployment metrics
  const deploymentMetrics = [
    {
      metric: 'Active Deployments',
      value: '12',
      change: '+3',
      trend: 'up',
      description: 'Currently running'
    },
    {
      metric: 'Success Rate',
      value: '98.7%',
      change: '+1.2%',
      trend: 'up',
      description: 'Deployment success'
    },
    {
      metric: 'Avg Latency',
      value: '52ms',
      change: '-8ms',
      trend: 'up',
      description: 'Response time'
    },
    {
      metric: 'Total Requests',
      value: '2.4M',
      change: '+15%',
      trend: 'up',
      description: 'Per hour'
    }
  ];

  // Performance over time
  const performanceOverTime = [
    { time: '00:00', latency: 58, throughput: 11200, errors: 12, cpu: 65 },
    { time: '04:00', latency: 55, throughput: 11800, errors: 8, cpu: 68 },
    { time: '08:00', latency: 52, throughput: 12400, errors: 5, cpu: 72 },
    { time: '12:00', latency: 48, throughput: 12800, errors: 3, cpu: 75 },
    { time: '16:00', latency: 45, throughput: 13200, errors: 2, cpu: 67 },
    { time: '20:00', latency: 49, throughput: 12600, errors: 7, cpu: 64 },
    { time: '24:00', latency: 52, throughput: 12400, errors: 4, cpu: 67 }
  ];

  // Deployment strategies
  const deploymentStrategies = [
    {
      strategy: 'Blue-Green',
      description: 'Zero-downtime deployment with instant rollback',
      risk: 'Low',
      speed: 'Fast',
      complexity: 'Medium'
    },
    {
      strategy: 'Canary',
      description: 'Gradual rollout to subset of users',
      risk: 'Very Low',
      speed: 'Slow',
      complexity: 'High'
    },
    {
      strategy: 'Rolling',
      description: 'Sequential update of instances',
      risk: 'Medium',
      speed: 'Medium',
      complexity: 'Low'
    },
    {
      strategy: 'A/B Testing',
      description: 'Split traffic between versions',
      risk: 'Low',
      speed: 'Medium',
      complexity: 'High'
    }
  ];

  // Infrastructure status
  const infrastructureStatus = [
    { component: 'Load Balancer', status: 'healthy', utilization: 45, instances: 3 },
    { component: 'API Gateway', status: 'healthy', utilization: 67, instances: 5 },
    { component: 'Model Servers', status: 'warning', utilization: 89, instances: 12 },
    { component: 'Database', status: 'healthy', utilization: 34, instances: 2 },
    { component: 'Cache Layer', status: 'healthy', utilization: 56, instances: 4 },
    { component: 'Monitoring', status: 'healthy', utilization: 23, instances: 2 }
  ];

  // Model versions
  const modelVersions = [
    {
      version: 'v3.2.1',
      status: 'production',
      accuracy: 94.7,
      deployment_date: '2025-01-07',
      traffic_percentage: 85,
      rollback_available: true
    },
    {
      version: 'v4.0.0-beta',
      status: 'canary',
      accuracy: 96.2,
      deployment_date: '2025-01-07',
      traffic_percentage: 10,
      rollback_available: true
    },
    {
      version: 'v3.1.8',
      status: 'deprecated',
      accuracy: 92.3,
      deployment_date: '2025-01-05',
      traffic_percentage: 5,
      rollback_available: true
    }
  ];

  // Deployment pipeline stages
  const pipelineStages = [
    { stage: 'Build', status: 'completed', duration: '2m 34s' },
    { stage: 'Test', status: 'completed', duration: '8m 12s' },
    { stage: 'Security Scan', status: 'completed', duration: '3m 45s' },
    { stage: 'Deploy to Staging', status: 'completed', duration: '1m 56s' },
    { stage: 'Integration Tests', status: 'running', duration: '4m 23s' },
    { stage: 'Deploy to Production', status: 'pending', duration: null },
    { stage: 'Health Check', status: 'pending', duration: null }
  ];

  // Auto-scaling configuration
  const autoScalingConfig = {
    min_instances: 2,
    max_instances: 20,
    target_cpu: 70,
    target_memory: 80,
    scale_up_threshold: 85,
    scale_down_threshold: 30,
    cooldown_period: 300
  };

  // Recent deployments
  const recentDeployments = [
    {
      id: 1,
      model: 'Relationship Matching v3.2.1',
      environment: 'production',
      status: 'success',
      timestamp: '2 hours ago',
      duration: '3m 45s'
    },
    {
      id: 2,
      model: 'Sentiment Analysis v2.1.0',
      environment: 'staging',
      status: 'success',
      timestamp: '6 hours ago',
      duration: '2m 12s'
    },
    {
      id: 3,
      model: 'Behavior Prediction v2.3.1',
      environment: 'production',
      status: 'failed',
      timestamp: '1 day ago',
      duration: '1m 34s'
    },
    {
      id: 4,
      model: 'Image Analysis v1.8.3',
      environment: 'development',
      status: 'running',
      timestamp: '30 minutes ago',
      duration: '5m 23s'
    }
  ];

  // Health checks
  const healthChecks = [
    { check: 'Model Response', status: 'passing', last_check: '30s ago' },
    { check: 'Database Connection', status: 'passing', last_check: '1m ago' },
    { check: 'Memory Usage', status: 'warning', last_check: '45s ago' },
    { check: 'API Endpoints', status: 'passing', last_check: '20s ago' },
    { check: 'Load Balancer', status: 'passing', last_check: '1m ago' },
    { check: 'SSL Certificate', status: 'passing', last_check: '5m ago' }
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      console.log('Updating deployment metrics...');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': case 'healthy': case 'passing': case 'success': return 'text-green-600 bg-green-100';
      case 'testing': case 'warning': case 'running': return 'text-yellow-600 bg-yellow-100';
      case 'error': case 'failed': case 'critical': return 'text-red-600 bg-red-100';
      case 'deploying': case 'rolling_out': case 'pending': return 'text-blue-600 bg-blue-100';
      case 'deprecated': case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': case 'healthy': case 'passing': case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'testing': case 'warning': case 'running': return <AlertTriangle className="w-4 h-4" />;
      case 'error': case 'failed': case 'critical': return <XCircle className="w-4 h-4" />;
      case 'deploying': case 'rolling_out': case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getEnvironmentColor = (environment) => {
    switch (environment) {
      case 'production': return 'text-red-600 bg-red-100';
      case 'staging': return 'text-yellow-600 bg-yellow-100';
      case 'development': return 'text-blue-600 bg-blue-100';
      case 'canary': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Very Low': return 'text-green-600 bg-green-100';
      case 'Low': return 'text-blue-600 bg-blue-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const deployModel = (deploymentId) => {
    console.log(`Deploying model: ${deploymentId}`);
    setDeploymentStatus('deploying');
  };

  const rollbackModel = (deploymentId) => {
    console.log(`Rolling back model: ${deploymentId}`);
    setDeploymentStatus('rolling_back');
  };

  const scaleInstances = (deploymentId, action) => {
    console.log(`${action} instances for: ${deploymentId}`);
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-blue-600" />
              AI Model Deployment System
            </h1>
            <p className="text-gray-600">
              Comprehensive model deployment, scaling, and monitoring with automated CI/CD pipelines
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-600">12 Active Deployments</span>
            </div>
            
            <button
              onClick={() => setShowMetrics(!showMetrics)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showMetrics 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Metrics
            </button>
            
            <button
              onClick={() => setAutoScale(!autoScale)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoScale 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              Auto-Scale: {autoScale ? 'ON' : 'OFF'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Rocket className="w-4 h-4" />
              Deploy Model
            </button>
          </div>
        </div>
      </div>

      {/* Deployment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {deploymentMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Rocket className="w-6 h-6 text-blue-600" />
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
          {/* Active Deployments */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Active Deployments</h3>
            <div className="space-y-3">
              {deployments.map((deployment) => (
                <button
                  key={deployment.id}
                  onClick={() => setSelectedDeployment(deployment.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedDeployment === deployment.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900 truncate">{deployment.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(deployment.status)}`}>
                      {getStatusIcon(deployment.status)}
                      {deployment.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEnvironmentColor(deployment.environment)}`}>
                      {deployment.environment}
                    </span>
                    <span className="text-xs text-gray-600">{deployment.version}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Instances:</span>
                      <div className="font-semibold text-blue-600">{deployment.instances}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Latency:</span>
                      <div className="font-semibold text-green-600">{deployment.avg_latency}ms</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Health Checks */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Health Checks</h3>
            <div className="space-y-3">
              {healthChecks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      check.status === 'passing' ? 'bg-green-500' :
                      check.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-sm font-medium text-gray-900">{check.check}</span>
                  </div>
                  <span className="text-xs text-gray-500">{check.last_check}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Deployments */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Deployments</h3>
            <div className="space-y-3">
              {recentDeployments.map((deployment) => (
                <div key={deployment.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 text-sm truncate">{deployment.model}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                      {deployment.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{deployment.environment}</span>
                    <span>{deployment.timestamp}</span>
                  </div>
                  {deployment.duration && (
                    <div className="text-xs text-gray-500 mt-1">Duration: {deployment.duration}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Upload Model
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <GitBranch className="w-4 h-4" />
                Create Branch
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <RotateCcw className="w-4 h-4" />
                Rollback
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Performance Metrics */}
          {showMetrics && (
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
                  <Line yAxisId="left" type="monotone" dataKey="latency" stroke="#3b82f6" strokeWidth={2} name="Latency (ms)" />
                  <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#10b981" strokeWidth={2} name="Throughput" />
                  <Line yAxisId="right" type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} name="Errors" />
                  <Line yAxisId="right" type="monotone" dataKey="cpu" stroke="#f59e0b" strokeWidth={2} name="CPU %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Infrastructure Status & Model Versions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure Status</h3>
              <div className="space-y-3">
                {infrastructureStatus.map((component, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${
                        component.status === 'healthy' ? 'bg-green-500' :
                        component.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></span>
                      <div>
                        <div className="font-medium text-gray-900">{component.component}</div>
                        <div className="text-sm text-gray-600">{component.instances} instances</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{component.utilization}%</div>
                      <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className={`h-2 rounded-full ${
                            component.utilization > 80 ? 'bg-red-500' :
                            component.utilization > 60 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${component.utilization}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Versions</h3>
              <div className="space-y-3">
                {modelVersions.map((version, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{version.version}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(version.status)}`}>
                        {version.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>
                        <span className="text-gray-500">Accuracy:</span>
                        <div className="font-semibold text-blue-600">{version.accuracy}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Traffic:</span>
                        <div className="font-semibold text-green-600">{version.traffic_percentage}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${version.traffic_percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deployment Pipeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Deployment Pipeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    stage.status === 'completed' ? 'bg-green-100 text-green-600' :
                    stage.status === 'running' ? 'bg-blue-100 text-blue-600' :
                    stage.status === 'pending' ? 'bg-gray-100 text-gray-400' : 'bg-red-100 text-red-600'
                  }`}>
                    {stage.status === 'completed' ? <CheckCircle className="w-6 h-6" /> :
                     stage.status === 'running' ? <Activity className="w-6 h-6 animate-spin" /> :
                     stage.status === 'pending' ? <Clock className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stage.stage}</div>
                  <div className="text-xs text-gray-600">
                    {stage.duration || (stage.status === 'running' ? 'Running...' : 'Pending')}
                  </div>
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Deployment Strategies */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Deployment Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deploymentStrategies.map((strategy, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{strategy.strategy}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(strategy.risk)}`}>
                      {strategy.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Speed:</span>
                      <div className="font-medium text-gray-900">{strategy.speed}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Complexity:</span>
                      <div className="font-medium text-gray-900">{strategy.complexity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-scaling Configuration */}
          {autoScale && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto-scaling Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Instances</label>
                  <input
                    type="number"
                    value={autoScalingConfig.min_instances}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Instances</label>
                  <input
                    type="number"
                    value={autoScalingConfig.max_instances}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target CPU (%)</label>
                  <input
                    type="number"
                    value={autoScalingConfig.target_cpu}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Memory (%)</label>
                  <input
                    type="number"
                    value={autoScalingConfig.target_memory}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scale Up Threshold (%)</label>
                  <input
                    type="number"
                    value={autoScalingConfig.scale_up_threshold}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cooldown Period (s)</label>
                  <input
                    type="number"
                    value={autoScalingConfig.cooldown_period}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Test Auto-scaling
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIModelDeploymentSystem;

