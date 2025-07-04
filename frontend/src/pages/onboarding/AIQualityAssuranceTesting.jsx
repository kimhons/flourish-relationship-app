import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Shield, CheckCircle, AlertTriangle, XCircle, Play, Pause,
  Target, Award, TrendingUp, TrendingDown, Activity, Clock,
  Eye, Download, Upload, Settings, Filter, Search, Zap,
  Bug, TestTube, FileCheck, BarChart3, PieChart as PieChartIcon
} from 'lucide-react';

const AIQualityAssuranceTesting = () => {
  const [selectedTest, setSelectedTest] = useState('test_001');
  const [testStatus, setTestStatus] = useState('running');
  const [showDetails, setShowDetails] = useState(false);
  const [autoTest, setAutoTest] = useState(true);

  // Test suites
  const testSuites = [
    {
      id: 'test_001',
      name: 'Model Accuracy Validation',
      type: 'accuracy',
      status: 'running',
      progress: 78,
      passed: 23,
      failed: 2,
      total: 30,
      last_run: '2025-01-07 14:30',
      duration: '45m',
      coverage: 94.7
    },
    {
      id: 'test_002',
      name: 'Bias Detection Suite',
      type: 'bias',
      status: 'completed',
      progress: 100,
      passed: 18,
      failed: 0,
      total: 18,
      last_run: '2025-01-07 10:15',
      duration: '32m',
      coverage: 98.2
    },
    {
      id: 'test_003',
      name: 'Performance Stress Tests',
      type: 'performance',
      status: 'failed',
      progress: 67,
      passed: 12,
      failed: 6,
      total: 20,
      last_run: '2025-01-07 08:00',
      duration: '28m',
      coverage: 85.3
    },
    {
      id: 'test_004',
      name: 'Data Quality Validation',
      type: 'data_quality',
      status: 'queued',
      progress: 0,
      passed: 0,
      failed: 0,
      total: 25,
      last_run: null,
      duration: null,
      coverage: null
    },
    {
      id: 'test_005',
      name: 'Security Vulnerability Scan',
      type: 'security',
      status: 'paused',
      progress: 45,
      passed: 8,
      failed: 1,
      total: 15,
      last_run: '2025-01-06 16:45',
      duration: '22m',
      coverage: 76.8
    }
  ];

  // QA metrics
  const qaMetrics = [
    {
      metric: 'Test Coverage',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Code coverage'
    },
    {
      metric: 'Pass Rate',
      value: '91.2%',
      change: '+4.1%',
      trend: 'up',
      description: 'Tests passing'
    },
    {
      metric: 'Bug Detection',
      value: '23',
      change: '+5',
      trend: 'up',
      description: 'Issues found'
    },
    {
      metric: 'Avg Test Time',
      value: '34m',
      change: '-8m',
      trend: 'up',
      description: 'Execution time'
    }
  ];

  // Test results over time
  const testResultsOverTime = [
    { date: '2025-01-01', passed: 85, failed: 12, coverage: 89.2, bugs: 8 },
    { date: '2025-01-02', passed: 88, failed: 10, coverage: 91.1, bugs: 6 },
    { date: '2025-01-03', passed: 92, failed: 8, coverage: 92.8, bugs: 4 },
    { date: '2025-01-04', passed: 89, failed: 11, coverage: 90.5, bugs: 7 },
    { date: '2025-01-05', passed: 94, failed: 6, coverage: 93.7, bugs: 3 },
    { date: '2025-01-06', passed: 96, failed: 4, coverage: 94.2, bugs: 2 },
    { date: '2025-01-07', passed: 98, failed: 2, coverage: 94.7, bugs: 1 }
  ];

  // Test categories distribution
  const testCategoriesData = [
    { name: 'Accuracy Tests', value: 35, color: '#3b82f6' },
    { name: 'Performance Tests', value: 25, color: '#10b981' },
    { name: 'Security Tests', value: 20, color: '#f59e0b' },
    { name: 'Bias Detection', value: 15, color: '#ef4444' },
    { name: 'Data Quality', value: 5, color: '#8b5cf6' }
  ];

  // Model performance metrics
  const modelPerformanceMetrics = [
    { metric: 'Accuracy', current: 94.7, baseline: 92.1, threshold: 90.0, status: 'excellent' },
    { metric: 'Precision', current: 93.8, baseline: 91.5, threshold: 88.0, status: 'good' },
    { metric: 'Recall', current: 95.6, baseline: 93.2, threshold: 90.0, status: 'excellent' },
    { metric: 'F1 Score', current: 94.7, baseline: 92.3, threshold: 89.0, status: 'excellent' },
    { metric: 'AUC-ROC', current: 0.967, baseline: 0.943, threshold: 0.900, status: 'excellent' },
    { metric: 'Latency (ms)', current: 45, baseline: 52, threshold: 100, status: 'excellent' }
  ];

  // Bias detection results
  const biasDetectionResults = [
    { category: 'Gender', bias_score: 0.12, threshold: 0.15, status: 'good', samples: 12500 },
    { category: 'Age', bias_score: 0.08, threshold: 0.15, status: 'excellent', samples: 11800 },
    { category: 'Ethnicity', bias_score: 0.18, threshold: 0.15, status: 'warning', samples: 9200 },
    { category: 'Location', bias_score: 0.05, threshold: 0.15, status: 'excellent', samples: 15600 },
    { category: 'Education', bias_score: 0.22, threshold: 0.15, status: 'critical', samples: 8900 },
    { category: 'Income', bias_score: 0.14, threshold: 0.15, status: 'good', samples: 10300 }
  ];

  // Security vulnerabilities
  const securityVulnerabilities = [
    { 
      id: 'SEC-001', 
      severity: 'high', 
      type: 'Data Exposure', 
      description: 'Potential model inversion attack vulnerability',
      status: 'open',
      discovered: '2025-01-07'
    },
    { 
      id: 'SEC-002', 
      severity: 'medium', 
      type: 'Input Validation', 
      description: 'Insufficient input sanitization in API endpoints',
      status: 'fixed',
      discovered: '2025-01-06'
    },
    { 
      id: 'SEC-003', 
      severity: 'low', 
      type: 'Information Disclosure', 
      description: 'Verbose error messages revealing system information',
      status: 'open',
      discovered: '2025-01-05'
    },
    { 
      id: 'SEC-004', 
      severity: 'critical', 
      type: 'Authentication', 
      description: 'Weak authentication mechanism in admin panel',
      status: 'fixed',
      discovered: '2025-01-04'
    }
  ];

  // Performance benchmarks
  const performanceBenchmarks = [
    { benchmark: 'Throughput (req/sec)', current: 2400, target: 2000, baseline: 1800, status: 'excellent' },
    { benchmark: 'Response Time (ms)', current: 45, target: 100, baseline: 120, status: 'excellent' },
    { benchmark: 'Memory Usage (MB)', current: 512, target: 1024, baseline: 800, status: 'good' },
    { benchmark: 'CPU Utilization (%)', current: 67, target: 80, baseline: 75, status: 'good' },
    { benchmark: 'Error Rate (%)', current: 0.12, target: 0.50, baseline: 0.35, status: 'excellent' },
    { benchmark: 'Concurrent Users', current: 1500, target: 1000, baseline: 800, status: 'excellent' }
  ];

  // Test automation configuration
  const automationConfig = {
    auto_run_on_deploy: true,
    regression_testing: true,
    performance_monitoring: true,
    bias_detection: true,
    security_scanning: true,
    data_validation: true,
    notification_alerts: true,
    test_scheduling: 'daily'
  };

  // Recent test activities
  const recentActivities = [
    {
      id: 1,
      type: 'test_started',
      message: 'Model Accuracy Validation suite started',
      timestamp: '10 minutes ago',
      test: 'test_001'
    },
    {
      id: 2,
      type: 'bug_found',
      message: 'Critical bias detected in Education category',
      timestamp: '2 hours ago',
      test: 'test_002'
    },
    {
      id: 3,
      type: 'test_passed',
      message: 'Security Vulnerability Scan completed successfully',
      timestamp: '4 hours ago',
      test: 'test_005'
    },
    {
      id: 4,
      type: 'performance_issue',
      message: 'Performance degradation detected in stress tests',
      timestamp: '6 hours ago',
      test: 'test_003'
    }
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (testStatus === 'running') {
        console.log('Updating test metrics...');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [testStatus]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': case 'good': return 'text-blue-600 bg-blue-100';
      case 'completed': case 'passed': case 'excellent': return 'text-green-600 bg-green-100';
      case 'failed': case 'critical': return 'text-red-600 bg-red-100';
      case 'paused': case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'queued': case 'pending': case 'open': return 'text-gray-600 bg-gray-100';
      case 'fixed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return <Activity className="w-4 h-4 animate-spin" />;
      case 'completed': case 'passed': case 'excellent': case 'good': case 'fixed': return <CheckCircle className="w-4 h-4" />;
      case 'failed': case 'critical': return <XCircle className="w-4 h-4" />;
      case 'paused': case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'queued': case 'pending': case 'open': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'test_started': return <Play className="w-4 h-4 text-blue-600" />;
      case 'bug_found': return <Bug className="w-4 h-4 text-red-600" />;
      case 'test_passed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'performance_issue': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getBiasColor = (score, threshold) => {
    if (score <= threshold * 0.5) return 'text-green-600';
    if (score <= threshold) return 'text-blue-600';
    if (score <= threshold * 1.2) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceColor = (current, target, isLowerBetter = false) => {
    if (isLowerBetter) {
      if (current <= target * 0.7) return 'text-green-600';
      if (current <= target) return 'text-blue-600';
      if (current <= target * 1.2) return 'text-yellow-600';
      return 'text-red-600';
    } else {
      if (current >= target * 1.2) return 'text-green-600';
      if (current >= target) return 'text-blue-600';
      if (current >= target * 0.8) return 'text-yellow-600';
      return 'text-red-600';
    }
  };

  const runTest = (testId) => {
    console.log(`Running test: ${testId}`);
    setTestStatus('running');
  };

  const pauseTest = (testId) => {
    console.log(`Pausing test: ${testId}`);
    setTestStatus('paused');
  };

  const stopTest = (testId) => {
    console.log(`Stopping test: ${testId}`);
    setTestStatus('stopped');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-indigo-600" />
              AI Quality Assurance Testing
            </h1>
            <p className="text-gray-600">
              Comprehensive AI model testing, validation, and quality assurance with automated bias detection and security scanning
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-600">5 Test Suites Active</span>
            </div>
            
            <button
              onClick={() => setAutoTest(!autoTest)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoTest 
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              Auto-Test: {autoTest ? 'ON' : 'OFF'}
            </button>
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showDetails 
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              Details
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <TestTube className="w-4 h-4" />
              Run All Tests
            </button>
          </div>
        </div>
      </div>

      {/* QA Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {qaMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
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
          {/* Test Suites */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Test Suites</h3>
            <div className="space-y-3">
              {testSuites.map((test) => (
                <button
                  key={test.id}
                  onClick={() => setSelectedTest(test.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedTest === test.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900 truncate">{test.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(test.status)}`}>
                      {getStatusIcon(test.status)}
                      {test.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2 capitalize">{test.type.replace('_', ' ')}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Passed:</span>
                      <div className="font-semibold text-green-600">{test.passed}/{test.total}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Coverage:</span>
                      <div className="font-semibold text-blue-600">{test.coverage}%</div>
                    </div>
                  </div>
                  {test.status === 'running' && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${test.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{test.progress}% complete</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Test Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Test Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={testCategoriesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {testCategoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {testCategoriesData.map((category, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-gray-700">{category.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 mb-1">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
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
                Import Test Suite
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Results
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <FileCheck className="w-4 h-4" />
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Test Results Over Time */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Test Results Over Time</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => runTest(selectedTest)}
                  className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                  title="Run Test"
                >
                  <Play className="w-4 h-4" />
                </button>
                <button
                  onClick={() => pauseTest(selectedTest)}
                  className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors"
                  title="Pause Test"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => stopTest(selectedTest)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  title="Stop Test"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={testResultsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="passed" stroke="#10b981" strokeWidth={2} name="Tests Passed" />
                <Line yAxisId="left" type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} name="Tests Failed" />
                <Line yAxisId="right" type="monotone" dataKey="coverage" stroke="#3b82f6" strokeWidth={2} name="Coverage %" />
                <Line yAxisId="left" type="monotone" dataKey="bugs" stroke="#f59e0b" strokeWidth={2} name="Bugs Found" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Model Performance & Bias Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Metrics</h3>
              <div className="space-y-3">
                {modelPerformanceMetrics.map((metric, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{metric.metric}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Current:</span>
                        <div className="font-semibold text-indigo-600">
                          {metric.metric === 'Latency (ms)' ? `${metric.current}ms` : 
                           metric.metric === 'AUC-ROC' ? metric.current.toFixed(3) : 
                           `${metric.current}${metric.metric.includes('%') ? '%' : ''}`}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Baseline:</span>
                        <div className="font-semibold text-gray-600">
                          {metric.metric === 'Latency (ms)' ? `${metric.baseline}ms` : 
                           metric.metric === 'AUC-ROC' ? metric.baseline.toFixed(3) : 
                           `${metric.baseline}${metric.metric.includes('%') ? '%' : ''}`}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Threshold:</span>
                        <div className="font-semibold text-red-600">
                          {metric.metric === 'Latency (ms)' ? `${metric.threshold}ms` : 
                           metric.metric === 'AUC-ROC' ? metric.threshold.toFixed(3) : 
                           `${metric.threshold}${metric.metric.includes('%') ? '%' : ''}`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bias Detection Results</h3>
              <div className="space-y-3">
                {biasDetectionResults.map((result, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{result.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                        {result.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>
                        <span className="text-gray-500">Bias Score:</span>
                        <div className={`font-semibold ${getBiasColor(result.bias_score, result.threshold)}`}>
                          {result.bias_score.toFixed(2)}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Samples:</span>
                        <div className="font-semibold text-gray-600">{result.samples.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          result.bias_score <= result.threshold * 0.5 ? 'bg-green-500' :
                          result.bias_score <= result.threshold ? 'bg-blue-500' :
                          result.bias_score <= result.threshold * 1.2 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min((result.bias_score / result.threshold) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Vulnerabilities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Vulnerabilities</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Severity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Discovered</th>
                  </tr>
                </thead>
                <tbody>
                  {securityVulnerabilities.map((vuln, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{vuln.id}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(vuln.severity)}`}>
                          {vuln.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{vuln.type}</td>
                      <td className="py-3 px-4 text-gray-600 max-w-xs truncate">{vuln.description}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vuln.status)}`}>
                          {vuln.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{vuln.discovered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance Benchmarks */}
          {showDetails && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Benchmarks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {performanceBenchmarks.map((benchmark, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-gray-900">{benchmark.benchmark}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(benchmark.status)}`}>
                        {benchmark.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Current:</span>
                        <div className={`font-semibold ${getPerformanceColor(
                          benchmark.current, 
                          benchmark.target, 
                          benchmark.benchmark.includes('Time') || benchmark.benchmark.includes('Usage') || benchmark.benchmark.includes('Rate')
                        )}`}>
                          {benchmark.current}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Target:</span>
                        <div className="font-semibold text-blue-600">{benchmark.target}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Baseline:</span>
                        <div className="font-semibold text-gray-600">{benchmark.baseline}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automation Configuration */}
          {autoTest && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Automation Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  {Object.entries(automationConfig).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 capitalize">{key.replace('_', ' ')}</span>
                      <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
                        typeof value === 'boolean' && value ? 'bg-indigo-500' : 
                        typeof value === 'boolean' ? 'bg-gray-300' : 'bg-indigo-500'
                      }`}>
                        {typeof value === 'boolean' ? (
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            value ? 'translate-x-4' : 'translate-x-0'
                          }`}></div>
                        ) : (
                          <span className="text-xs text-white px-2">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {Object.entries(automationConfig).slice(3, 6).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 capitalize">{key.replace('_', ' ')}</span>
                      <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
                        typeof value === 'boolean' && value ? 'bg-indigo-500' : 
                        typeof value === 'boolean' ? 'bg-gray-300' : 'bg-indigo-500'
                      }`}>
                        {typeof value === 'boolean' ? (
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            value ? 'translate-x-4' : 'translate-x-0'
                          }`}></div>
                        ) : (
                          <span className="text-xs text-white px-2">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {Object.entries(automationConfig).slice(6).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 capitalize">{key.replace('_', ' ')}</span>
                      <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
                        typeof value === 'boolean' && value ? 'bg-indigo-500' : 
                        typeof value === 'boolean' ? 'bg-gray-300' : 'bg-indigo-500'
                      }`}>
                        {typeof value === 'boolean' ? (
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            value ? 'translate-x-4' : 'translate-x-0'
                          }`}></div>
                        ) : (
                          <span className="text-xs text-white px-2">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Update Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Schedule Tests
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQualityAssuranceTesting;

