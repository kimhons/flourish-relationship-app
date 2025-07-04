import React, { useState, useEffect } from 'react';
import { 
  Shield, Play, Pause, CheckCircle, XCircle, AlertTriangle,
  Clock, Settings, Eye, Download, RefreshCw, Target,
  Bug, Zap, Database, Network, Lock, Users
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const AutomatedSecurityTesting = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTest, setSelectedTest] = useState(null);
  const [testFilter, setTestFilter] = useState('all');
  const [isRunningTests, setIsRunningTests] = useState(false);

  // Security test suites for dating app
  const testSuites = [
    {
      id: 'TS-001',
      name: 'User Authentication Security',
      category: 'authentication',
      status: 'completed',
      last_run: '2025-01-07 14:30:00',
      duration: '12 minutes',
      tests_count: 25,
      passed: 23,
      failed: 2,
      critical_issues: 0,
      high_issues: 1,
      medium_issues: 1,
      low_issues: 3,
      coverage: 94.2,
      description: 'Comprehensive testing of user login, registration, and authentication flows',
      next_scheduled: '2025-01-08 02:00:00'
    },
    {
      id: 'TS-002',
      name: 'Profile Data Protection',
      category: 'data_protection',
      status: 'running',
      last_run: '2025-01-07 15:00:00',
      duration: '8 minutes',
      tests_count: 18,
      passed: 15,
      failed: 0,
      critical_issues: 0,
      high_issues: 0,
      medium_issues: 2,
      low_issues: 1,
      coverage: 89.7,
      description: 'Testing data encryption, access controls, and privacy protection for user profiles',
      next_scheduled: '2025-01-08 02:30:00'
    },
    {
      id: 'TS-003',
      name: 'Messaging Security',
      category: 'communication',
      status: 'completed',
      last_run: '2025-01-07 13:45:00',
      duration: '15 minutes',
      tests_count: 32,
      passed: 30,
      failed: 2,
      critical_issues: 0,
      high_issues: 0,
      medium_issues: 2,
      low_issues: 4,
      coverage: 96.8,
      description: 'End-to-end encryption testing and message security validation',
      next_scheduled: '2025-01-08 03:00:00'
    },
    {
      id: 'TS-004',
      name: 'Payment Security',
      category: 'payment',
      status: 'completed',
      last_run: '2025-01-07 12:15:00',
      duration: '20 minutes',
      tests_count: 28,
      passed: 26,
      failed: 2,
      critical_issues: 1,
      high_issues: 1,
      medium_issues: 0,
      low_issues: 2,
      coverage: 92.1,
      description: 'PCI DSS compliance testing and payment processing security validation',
      next_scheduled: '2025-01-08 01:00:00'
    },
    {
      id: 'TS-005',
      name: 'API Security Testing',
      category: 'api',
      status: 'scheduled',
      last_run: '2025-01-07 10:30:00',
      duration: '18 minutes',
      tests_count: 35,
      passed: 33,
      failed: 2,
      critical_issues: 0,
      high_issues: 1,
      medium_issues: 1,
      low_issues: 3,
      coverage: 91.4,
      description: 'API endpoint security, rate limiting, and authentication testing',
      next_scheduled: '2025-01-08 01:30:00'
    },
    {
      id: 'TS-006',
      name: 'Photo Upload Security',
      category: 'media',
      status: 'completed',
      last_run: '2025-01-07 11:00:00',
      duration: '10 minutes',
      tests_count: 22,
      passed: 20,
      failed: 2,
      critical_issues: 0,
      high_issues: 0,
      medium_issues: 1,
      low_issues: 3,
      coverage: 88.6,
      description: 'Image upload security, malware scanning, and content validation',
      next_scheduled: '2025-01-08 04:00:00'
    }
  ];

  // Individual test cases
  const testCases = [
    {
      id: 'TC-001',
      suite_id: 'TS-001',
      name: 'Password Strength Validation',
      status: 'passed',
      severity: 'high',
      execution_time: '2.3s',
      description: 'Validates password complexity requirements and strength',
      last_result: 'Password requirements properly enforced'
    },
    {
      id: 'TC-002',
      suite_id: 'TS-001',
      name: 'Brute Force Protection',
      status: 'failed',
      severity: 'critical',
      execution_time: '5.1s',
      description: 'Tests protection against brute force login attempts',
      last_result: 'Rate limiting not properly configured for mobile app'
    },
    {
      id: 'TC-003',
      suite_id: 'TS-001',
      name: 'Session Management',
      status: 'passed',
      severity: 'high',
      execution_time: '3.7s',
      description: 'Validates secure session handling and timeout',
      last_result: 'Session security properly implemented'
    },
    {
      id: 'TC-004',
      suite_id: 'TS-002',
      name: 'Profile Data Encryption',
      status: 'passed',
      severity: 'critical',
      execution_time: '4.2s',
      description: 'Verifies encryption of sensitive profile data',
      last_result: 'All sensitive data properly encrypted at rest'
    },
    {
      id: 'TC-005',
      suite_id: 'TS-003',
      name: 'Message Encryption',
      status: 'passed',
      severity: 'critical',
      execution_time: '6.8s',
      description: 'Tests end-to-end message encryption',
      last_result: 'E2E encryption working correctly'
    }
  ];

  // Security testing metrics
  const testingMetrics = {
    total_tests: 160,
    passed_tests: 147,
    failed_tests: 13,
    success_rate: 91.9,
    avg_execution_time: '12.5 minutes',
    critical_issues: 1,
    high_issues: 3,
    medium_issues: 7,
    low_issues: 16,
    coverage: 92.3
  };

  // Test execution trends
  const executionTrends = [
    { date: '2025-01-01', tests_run: 145, passed: 134, failed: 11, success_rate: 92.4 },
    { date: '2025-01-02', tests_run: 152, passed: 140, failed: 12, success_rate: 92.1 },
    { date: '2025-01-03', tests_run: 148, passed: 138, failed: 10, success_rate: 93.2 },
    { date: '2025-01-04', tests_run: 156, passed: 143, failed: 13, success_rate: 91.7 },
    { date: '2025-01-05', tests_run: 160, passed: 147, failed: 13, success_rate: 91.9 },
    { date: '2025-01-06', tests_run: 158, passed: 146, failed: 12, success_rate: 92.4 },
    { date: '2025-01-07', tests_run: 160, passed: 147, failed: 13, success_rate: 91.9 }
  ];

  // Vulnerability distribution
  const vulnerabilityDistribution = [
    { severity: 'Critical', count: 1, color: '#ef4444' },
    { severity: 'High', count: 3, color: '#f97316' },
    { severity: 'Medium', count: 7, color: '#eab308' },
    { severity: 'Low', count: 16, color: '#22c55e' }
  ];

  // Test coverage by category
  const testCoverage = [
    { category: 'Authentication', coverage: 94.2, tests: 25 },
    { category: 'Data Protection', coverage: 89.7, tests: 18 },
    { category: 'Communication', coverage: 96.8, tests: 32 },
    { category: 'Payment', coverage: 92.1, tests: 28 },
    { category: 'API Security', coverage: 91.4, tests: 35 },
    { category: 'Media Upload', coverage: 88.6, tests: 22 }
  ];

  const getFilteredTestSuites = () => {
    if (testFilter === 'all') {
      return testSuites;
    }
    return testSuites.filter(suite => suite.category === testFilter);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'scheduled': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'passed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTestStatusIcon = (status) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'running': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'scheduled': return <Clock className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'authentication': return <Lock className="w-5 h-5" />;
      case 'data_protection': return <Database className="w-5 h-5" />;
      case 'communication': return <Users className="w-5 h-5" />;
      case 'payment': return <Shield className="w-5 h-5" />;
      case 'api': return <Network className="w-5 h-5" />;
      case 'media': return <Eye className="w-5 h-5" />;
      default: return <Bug className="w-5 h-5" />;
    }
  };

  const runTestSuite = (suiteId) => {
    console.log(`Running test suite: ${suiteId}`);
    setIsRunningTests(true);
    // In a real app, this would trigger the test suite execution
    setTimeout(() => setIsRunningTests(false), 3000);
  };

  const runAllTests = () => {
    console.log('Running all test suites...');
    setIsRunningTests(true);
    // In a real app, this would trigger all test suites
    setTimeout(() => setIsRunningTests(false), 5000);
  };

  const scheduleTests = () => {
    console.log('Scheduling automated tests...');
    // In a real app, this would open the test scheduling interface
  };

  const exportResults = () => {
    console.log('Exporting test results...');
    // In a real app, this would export the test results
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Target className="w-8 h-8 text-green-600" />
              Automated Security Testing
            </h1>
            <p className="text-gray-600">
              Comprehensive automated security testing and vulnerability assessment for dating platform
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={testFilter}
              onChange={(e) => setTestFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="authentication">Authentication</option>
              <option value="data_protection">Data Protection</option>
              <option value="communication">Communication</option>
              <option value="payment">Payment</option>
              <option value="api">API Security</option>
              <option value="media">Media Upload</option>
            </select>
            
            <button 
              onClick={scheduleTests}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              <Clock className="w-4 h-4" />
              Schedule Tests
            </button>
            
            <button 
              onClick={exportResults}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Results
            </button>
            
            <button 
              onClick={runAllTests}
              disabled={isRunningTests}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isRunningTests ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running Tests...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run All Tests
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Testing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{testingMetrics.total_tests}</div>
              <div className="text-xs text-gray-500">Total Tests</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Test Coverage</h3>
            <p className="text-sm text-gray-600">{testingMetrics.coverage}% coverage</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{testingMetrics.passed_tests}</div>
              <div className="text-xs text-gray-500">Passed</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Tests Passed</h3>
            <p className="text-sm text-gray-600">{testingMetrics.success_rate}% success rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{testingMetrics.failed_tests}</div>
              <div className="text-xs text-gray-500">Failed</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Tests Failed</h3>
            <p className="text-sm text-gray-600">Requires attention</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600">{testingMetrics.critical_issues + testingMetrics.high_issues}</div>
              <div className="text-xs text-gray-500">Critical/High</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Priority Issues</h3>
            <p className="text-sm text-gray-600">Immediate action needed</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{testingMetrics.avg_execution_time}</div>
              <div className="text-xs text-gray-500">Avg Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Execution Time</h3>
            <p className="text-sm text-gray-600">Average test duration</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Testing Dashboard', icon: Target },
              { id: 'suites', name: 'Test Suites', icon: Shield },
              { id: 'results', name: 'Test Results', icon: CheckCircle },
              { id: 'vulnerabilities', name: 'Vulnerabilities', icon: Bug },
              { id: 'coverage', name: 'Coverage Analysis', icon: BarChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Test Status Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Test Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Running</span>
                <span className="font-semibold text-blue-600">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Scheduled</span>
                <span className="font-semibold text-yellow-600">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-semibold text-green-600">4</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Success Rate</span>
                  <span className="font-bold text-green-600">{testingMetrics.success_rate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${testingMetrics.success_rate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vulnerability Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Vulnerabilities</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">Critical</span>
                <span className="font-semibold text-red-600">{testingMetrics.critical_issues}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-orange-600">High</span>
                <span className="font-semibold text-orange-600">{testingMetrics.high_issues}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-600">Medium</span>
                <span className="font-semibold text-yellow-600">{testingMetrics.medium_issues}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">Low</span>
                <span className="font-semibold text-green-600">{testingMetrics.low_issues}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                Run Security Scan
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Test Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Configure Tests
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Clock className="w-4 h-4" />
                Schedule Tests
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Test Execution Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Execution Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={executionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="tests_run" stroke="#10b981" strokeWidth={2} name="Tests Run" />
                    <Line type="monotone" dataKey="passed" stroke="#3b82f6" strokeWidth={2} name="Passed" />
                    <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} name="Failed" />
                    <Line type="monotone" dataKey="success_rate" stroke="#8b5cf6" strokeWidth={2} name="Success Rate %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Vulnerability Distribution and Test Coverage */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Vulnerability Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={vulnerabilityDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ severity, count }) => `${severity}: ${count}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                      >
                        {vulnerabilityDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Coverage by Category</h3>
                  <div className="space-y-4">
                    {testCoverage.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{category.category}</span>
                          <span className="font-semibold text-gray-900">
                            {category.coverage}% ({category.tests} tests)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${category.coverage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'suites' && (
            <div className="space-y-6">
              {getFilteredTestSuites().map((suite) => (
                <div key={suite.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        {getCategoryIcon(suite.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{suite.name}</h3>
                        <p className="text-sm text-gray-600">{suite.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(suite.status)}`}>
                        {suite.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-600">
                        {((suite.passed / suite.tests_count) * 100).toFixed(1)}% passed
                      </span>
                      <span className="text-sm text-gray-600">
                        {suite.tests_count} tests
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Run</div>
                      <div className="font-semibold text-gray-900 text-sm">{suite.last_run}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{suite.duration}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Coverage</div>
                      <div className="font-semibold text-blue-600">{suite.coverage}%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Issues Found</div>
                      <div className="font-semibold text-orange-600">
                        {suite.critical_issues + suite.high_issues + suite.medium_issues + suite.low_issues}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Next Scheduled</div>
                      <div className="font-semibold text-gray-900 text-sm">{suite.next_scheduled}</div>
                    </div>
                  </div>

                  {selectedTest === suite.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="text-sm text-red-600">Critical Issues</div>
                          <div className="text-2xl font-bold text-red-600">{suite.critical_issues}</div>
                        </div>
                        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                          <div className="text-sm text-orange-600">High Issues</div>
                          <div className="text-2xl font-bold text-orange-600">{suite.high_issues}</div>
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="text-sm text-yellow-600">Medium Issues</div>
                          <div className="text-2xl font-bold text-yellow-600">{suite.medium_issues}</div>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="text-sm text-green-600">Low Issues</div>
                          <div className="text-2xl font-bold text-green-600">{suite.low_issues}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedTest(selectedTest === suite.id ? null : suite.id)}
                      className="flex items-center gap-2 px-3 py-1 text-green-600 hover:text-green-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedTest === suite.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                        <Settings className="w-3 h-3" />
                        Configure
                      </button>
                      <button 
                        onClick={() => runTestSuite(suite.id)}
                        disabled={isRunningTests || suite.status === 'running'}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                      >
                        {suite.status === 'running' ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Running
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            Run Tests
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'results' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Individual Test Results</h3>
              <div className="space-y-4">
                {testCases.map((test) => (
                  <div key={test.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {getTestStatusIcon(test.status)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{test.name}</h4>
                          <p className="text-sm text-gray-600">{test.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                          {test.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(test.severity)}`}>
                          {test.severity}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">{test.execution_time}</div>
                        <div className="text-xs text-gray-500">execution time</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">Result:</div>
                      <div className="text-gray-700">{test.last_result}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vulnerabilities' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vulnerability Summary</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={vulnerabilityDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="severity" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#10b981" name="Vulnerabilities" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical & High Priority</h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <span className="font-medium text-red-900">Brute Force Protection</span>
                        <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded-full">Critical</span>
                      </div>
                      <p className="text-sm text-red-700">Rate limiting not properly configured for mobile app login attempts</p>
                    </div>
                    
                    <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        <span className="font-medium text-orange-900">API Rate Limiting</span>
                        <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">High</span>
                      </div>
                      <p className="text-sm text-orange-700">Some API endpoints lack proper rate limiting controls</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Remediation Progress</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-900">Fixed This Week</span>
                      <span className="font-bold text-green-600">8</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-900">In Progress</span>
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium text-yellow-900">Pending Review</span>
                      <span className="font-bold text-yellow-600">3</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium text-red-900">Open Issues</span>
                      <span className="font-bold text-red-600">27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'coverage' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Coverage Analysis</h3>
              <div className="space-y-6">
                {testCoverage.map((category, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {getCategoryIcon(category.category.toLowerCase().replace(' ', '_'))}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{category.category}</h4>
                          <p className="text-sm text-gray-600">{category.tests} test cases</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{category.coverage}%</div>
                        <div className="text-xs text-gray-500">coverage</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${category.coverage}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {category.coverage >= 90 ? '✓' : category.coverage >= 80 ? '⚠' : '✗'} {category.coverage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutomatedSecurityTesting;

