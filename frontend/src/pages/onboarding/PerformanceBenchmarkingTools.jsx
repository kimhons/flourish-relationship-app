import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, RadarChart, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Zap, Target, TrendingUp, TrendingDown, Activity, Clock, 
  Server, Database, Cpu, HardDrive, Wifi, Monitor,
  Play, Pause, RefreshCw, Settings, Download, Share2,
  AlertTriangle, CheckCircle, XCircle, Info, Award,
  BarChart3, LineChart as LineChartIcon, Eye, Filter
} from 'lucide-react';

const PerformanceBenchmarkingTools = () => {
  const [selectedBenchmark, setSelectedBenchmark] = useState('system_performance');
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [comparisonMode, setComparisonMode] = useState('historical');
  const [showDetails, setShowDetails] = useState(true);

  // Benchmark categories
  const benchmarkCategories = [
    {
      id: 'system_performance',
      name: 'System Performance',
      description: 'CPU, Memory, Disk, and Network metrics',
      icon: Server,
      status: 'active'
    },
    {
      id: 'application_performance',
      name: 'Application Performance',
      description: 'Response times, throughput, and error rates',
      icon: Zap,
      status: 'active'
    },
    {
      id: 'database_performance',
      name: 'Database Performance',
      description: 'Query performance and connection metrics',
      icon: Database,
      status: 'active'
    },
    {
      id: 'user_experience',
      name: 'User Experience',
      description: 'Page load times and interaction metrics',
      icon: Monitor,
      status: 'warning'
    },
    {
      id: 'scalability',
      name: 'Scalability Tests',
      description: 'Load testing and capacity planning',
      icon: TrendingUp,
      status: 'active'
    }
  ];

  // Performance metrics data
  const systemMetrics = [
    { time: '00:00', cpu: 45, memory: 62, disk: 35, network: 78 },
    { time: '04:00', cpu: 38, memory: 58, disk: 32, network: 65 },
    { time: '08:00', cpu: 72, memory: 75, disk: 48, network: 89 },
    { time: '12:00', cpu: 85, memory: 82, disk: 55, network: 95 },
    { time: '16:00', cpu: 78, memory: 79, disk: 52, network: 92 },
    { time: '20:00', cpu: 68, memory: 71, disk: 45, network: 85 }
  ];

  const applicationMetrics = [
    { endpoint: '/api/users', avgResponse: 120, p95Response: 250, throughput: 1250, errorRate: 0.2 },
    { endpoint: '/api/matches', avgResponse: 180, p95Response: 380, throughput: 890, errorRate: 0.1 },
    { endpoint: '/api/messages', avgResponse: 95, p95Response: 180, throughput: 2100, errorRate: 0.3 },
    { endpoint: '/api/profiles', avgResponse: 150, p95Response: 320, throughput: 1580, errorRate: 0.1 },
    { endpoint: '/api/search', avgResponse: 220, p95Response: 450, throughput: 750, errorRate: 0.4 }
  ];

  const databaseMetrics = [
    { query: 'User Lookup', avgTime: 15, p95Time: 35, frequency: 15420, cacheHit: 85 },
    { query: 'Match Search', avgTime: 45, p95Time: 95, frequency: 8900, cacheHit: 72 },
    { query: 'Message Insert', avgTime: 8, p95Time: 18, frequency: 12500, cacheHit: 0 },
    { query: 'Profile Update', avgTime: 25, p95Time: 55, frequency: 3200, cacheHit: 45 },
    { query: 'Analytics Query', avgTime: 180, p95Time: 420, frequency: 890, cacheHit: 95 }
  ];

  const benchmarkResults = [
    {
      category: 'Response Time',
      current: 145,
      target: 100,
      industry: 180,
      unit: 'ms',
      status: 'warning',
      trend: '+5ms'
    },
    {
      category: 'Throughput',
      current: 2450,
      target: 2000,
      industry: 1800,
      unit: 'req/s',
      status: 'good',
      trend: '+150 req/s'
    },
    {
      category: 'Error Rate',
      current: 0.15,
      target: 0.1,
      industry: 0.25,
      unit: '%',
      status: 'warning',
      trend: '+0.02%'
    },
    {
      category: 'Uptime',
      current: 99.95,
      target: 99.9,
      industry: 99.5,
      unit: '%',
      status: 'excellent',
      trend: '+0.05%'
    },
    {
      category: 'CPU Usage',
      current: 68,
      target: 70,
      industry: 75,
      unit: '%',
      status: 'good',
      trend: '+3%'
    },
    {
      category: 'Memory Usage',
      current: 72,
      target: 80,
      industry: 85,
      unit: '%',
      status: 'good',
      trend: '+2%'
    }
  ];

  const loadTestResults = [
    { users: 100, responseTime: 85, throughput: 450, errorRate: 0.1 },
    { users: 500, responseTime: 120, throughput: 1200, errorRate: 0.2 },
    { users: 1000, responseTime: 180, throughput: 1800, errorRate: 0.3 },
    { users: 2000, responseTime: 280, throughput: 2200, errorRate: 0.8 },
    { users: 3000, responseTime: 450, throughput: 2100, errorRate: 2.1 },
    { users: 4000, responseTime: 680, throughput: 1950, errorRate: 4.5 },
    { users: 5000, responseTime: 1200, throughput: 1600, errorRate: 8.2 }
  ];

  const competitorComparison = [
    { metric: 'Page Load Time', us: 2.1, competitor1: 2.8, competitor2: 3.2, competitor3: 2.5 },
    { metric: 'API Response', us: 145, competitor1: 180, competitor2: 220, competitor3: 165 },
    { metric: 'Uptime', us: 99.95, competitor1: 99.8, competitor2: 99.6, competitor3: 99.9 },
    { metric: 'Error Rate', us: 0.15, competitor1: 0.25, competitor2: 0.35, competitor3: 0.18 },
    { metric: 'Throughput', us: 2450, competitor1: 2100, competitor2: 1800, competitor3: 2200 }
  ];

  const performanceAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Response Time',
      message: 'API response time exceeded 200ms threshold',
      timestamp: '5 minutes ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'error',
      title: 'Database Connection Pool',
      message: 'Connection pool utilization at 95%',
      timestamp: '12 minutes ago',
      severity: 'high'
    },
    {
      id: 3,
      type: 'info',
      title: 'Load Test Completed',
      message: 'Scalability test for 5000 users completed successfully',
      timestamp: '1 hour ago',
      severity: 'low'
    }
  ];

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        console.log('Running performance benchmarks...');
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
      case 'good': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      default: return Info;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const runBenchmark = () => {
    setIsRunning(true);
    console.log(`Running ${selectedBenchmark} benchmark...`);
    
    // Simulate benchmark execution
    setTimeout(() => {
      setIsRunning(false);
      console.log('Benchmark completed');
    }, 5000);
  };

  const renderBenchmarkContent = () => {
    switch (selectedBenchmark) {
      case 'system_performance':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Resource Utilization</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={systemMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cpu" stroke="#ef4444" strokeWidth={2} name="CPU %" />
                  <Line type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={2} name="Memory %" />
                  <Line type="monotone" dataKey="disk" stroke="#10b981" strokeWidth={2} name="Disk I/O %" />
                  <Line type="monotone" dataKey="network" stroke="#f59e0b" strokeWidth={2} name="Network %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'application_performance':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">API Endpoint Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Endpoint</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Avg Response (ms)</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">P95 Response (ms)</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Throughput (req/s)</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Error Rate (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicationMetrics.map((metric, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{metric.endpoint}</td>
                        <td className="py-3 px-4 text-gray-700">{metric.avgResponse}</td>
                        <td className="py-3 px-4 text-gray-700">{metric.p95Response}</td>
                        <td className="py-3 px-4 text-gray-700">{metric.throughput}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            metric.errorRate < 0.2 ? 'text-green-600 bg-green-100' :
                            metric.errorRate < 0.5 ? 'text-yellow-600 bg-yellow-100' :
                            'text-red-600 bg-red-100'
                          }`}>
                            {metric.errorRate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'database_performance':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Database Query Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={databaseMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="query" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgTime" fill="#8b5cf6" name="Avg Time (ms)" />
                  <Bar dataKey="p95Time" fill="#06b6d4" name="P95 Time (ms)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'scalability':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Load Test Results</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={loadTestResults}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="users" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="responseTime" stroke="#ef4444" strokeWidth={2} name="Response Time (ms)" />
                  <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#10b981" strokeWidth={2} name="Throughput (req/s)" />
                  <Line yAxisId="left" type="monotone" dataKey="errorRate" stroke="#f59e0b" strokeWidth={2} name="Error Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center py-12">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Select a Benchmark Category
              </h3>
              <p className="text-gray-600">
                Choose a benchmark category from the sidebar to view detailed metrics
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              Performance Benchmarking Tools
            </h1>
            <p className="text-gray-600">
              Comprehensive performance testing and benchmarking suite
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isRunning ? 'Running' : 'Idle'}
              </span>
            </div>
            
            <button
              onClick={runBenchmark}
              disabled={isRunning}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isRunning 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isRunning ? 'Running...' : 'Run Benchmark'}
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Benchmark Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Benchmark Categories</h3>
            <div className="space-y-2">
              {benchmarkCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedBenchmark(category.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedBenchmark === category.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${
                        selectedBenchmark === category.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-600">{category.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Performance Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Performance Alerts</h3>
            <div className="space-y-3">
              {performanceAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}
                >
                  <div className="font-medium text-sm">{alert.title}</div>
                  <div className="text-sm opacity-90 mt-1">{alert.message}</div>
                  <div className="text-xs opacity-75 mt-2">{alert.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                Run All Benchmarks
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BarChart3 className="w-4 h-4" />
                Generate Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Configure Thresholds
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Benchmark Results Overview */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Benchmark Results Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benchmarkResults.map((result, index) => {
                const StatusIcon = getStatusIcon(result.status);
                return (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{result.category}</h4>
                      <StatusIcon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {result.current}{result.unit}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Target: {result.target}{result.unit}</span>
                      <span className={`font-medium ${
                        result.status === 'excellent' || result.status === 'good' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {result.trend}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                        {result.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Based on Selected Benchmark */}
          {renderBenchmarkContent()}

          {/* Competitor Comparison */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Competitive Benchmarking</h3>
              <select
                value={comparisonMode}
                onChange={(e) => setComparisonMode(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="historical">Historical Comparison</option>
                <option value="competitor">Competitor Comparison</option>
                <option value="industry">Industry Benchmark</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={competitorComparison}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 'dataMax']} />
                <Radar name="Us" dataKey="us" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="Competitor 1" dataKey="competitor1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                <Radar name="Competitor 2" dataKey="competitor2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Radar name="Competitor 3" dataKey="competitor3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceBenchmarkingTools;

