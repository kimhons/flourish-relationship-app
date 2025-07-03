import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Key, 
  Scan, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  RefreshCw, 
  Settings, 
  Bell, 
  BellOff, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  Server, 
  Database, 
  Network, 
  Globe, 
  Zap, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Target, 
  Flag, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  ExternalLink, 
  Copy, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  MoreVertical,
  FileText,
  FileCheck,
  FileX,
  Fingerprint,
  Verified,
  Bug,
  Cpu,
  HardDrive,
  Wifi,
  Router,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const IntegrationSecurityCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [securityData, setSecurityData] = useState({});
  const [scanResults, setScanResults] = useState({});
  const [complianceStatus, setComplianceStatus] = useState({});
  const [threatIntelligence, setThreatIntelligence] = useState({});
  const [isScanning, setIsScanning] = useState(false);

  // Sample security data
  useEffect(() => {
    const sampleData = {
      overview: {
        securityScore: 87,
        vulnerabilities: {
          critical: 2,
          high: 8,
          medium: 15,
          low: 23,
          total: 48
        },
        lastScan: '2025-01-07T10:30:00Z',
        nextScan: '2025-01-08T02:00:00Z',
        complianceScore: 94,
        threatLevel: 'Medium',
        activeThreats: 3,
        blockedAttacks: 127,
        secureConnections: 98.7
      },
      vulnerabilities: [
        {
          id: 'CVE-2024-1234',
          title: 'SQL Injection in User Authentication',
          severity: 'Critical',
          category: 'Injection',
          description: 'Potential SQL injection vulnerability in user authentication endpoint',
          affected: '/v1/auth/login',
          discoveredDate: '2025-01-06T14:22:00Z',
          status: 'Open',
          cvssScore: 9.1,
          exploitability: 'High',
          impact: 'Complete system compromise',
          recommendation: 'Implement parameterized queries and input validation'
        },
        {
          id: 'CVE-2024-5678',
          title: 'Cross-Site Scripting (XSS) in Profile Update',
          severity: 'High',
          category: 'XSS',
          description: 'Stored XSS vulnerability in user profile update functionality',
          affected: '/v1/users/profile',
          discoveredDate: '2025-01-05T09:15:00Z',
          status: 'In Progress',
          cvssScore: 7.4,
          exploitability: 'Medium',
          impact: 'User session hijacking',
          recommendation: 'Implement proper output encoding and CSP headers'
        },
        {
          id: 'SEC-2024-001',
          title: 'Weak Password Policy',
          severity: 'Medium',
          category: 'Authentication',
          description: 'Password policy does not meet security best practices',
          affected: 'Authentication System',
          discoveredDate: '2025-01-04T16:45:00Z',
          status: 'Open',
          cvssScore: 5.3,
          exploitability: 'Low',
          impact: 'Account compromise via brute force',
          recommendation: 'Enforce stronger password requirements and rate limiting'
        },
        {
          id: 'SEC-2024-002',
          title: 'Missing Security Headers',
          severity: 'Low',
          category: 'Configuration',
          description: 'Several security headers are missing from API responses',
          affected: 'All API Endpoints',
          discoveredDate: '2025-01-03T11:30:00Z',
          status: 'Open',
          cvssScore: 3.1,
          exploitability: 'Low',
          impact: 'Information disclosure',
          recommendation: 'Add security headers: HSTS, X-Frame-Options, X-Content-Type-Options'
        }
      ],
      compliance: {
        frameworks: [
          {
            name: 'SOC 2 Type II',
            status: 'Compliant',
            score: 96,
            lastAudit: '2024-12-15',
            nextAudit: '2025-06-15',
            findings: 2,
            controls: 147
          },
          {
            name: 'ISO 27001',
            status: 'Compliant',
            score: 94,
            lastAudit: '2024-11-20',
            nextAudit: '2025-05-20',
            findings: 4,
            controls: 114
          },
          {
            name: 'GDPR',
            status: 'Compliant',
            score: 98,
            lastAudit: '2024-10-10',
            nextAudit: '2025-04-10',
            findings: 1,
            controls: 78
          },
          {
            name: 'HIPAA',
            status: 'Partial',
            score: 87,
            lastAudit: '2024-09-05',
            nextAudit: '2025-03-05',
            findings: 8,
            controls: 164
          }
        ],
        requirements: [
          { category: 'Data Protection', compliant: 45, total: 48, percentage: 93.8 },
          { category: 'Access Control', compliant: 32, total: 35, percentage: 91.4 },
          { category: 'Encryption', compliant: 28, total: 30, percentage: 93.3 },
          { category: 'Audit Logging', compliant: 22, total: 25, percentage: 88.0 },
          { category: 'Incident Response', compliant: 18, total: 20, percentage: 90.0 }
        ]
      },
      threats: [
        {
          id: 'THR-001',
          type: 'Brute Force Attack',
          source: '192.168.1.100',
          target: '/v1/auth/login',
          severity: 'High',
          status: 'Active',
          attempts: 1247,
          startTime: '2025-01-07T08:15:00Z',
          lastSeen: '2025-01-07T10:45:00Z',
          blocked: true,
          country: 'Unknown'
        },
        {
          id: 'THR-002',
          type: 'API Rate Limit Abuse',
          source: '203.0.113.45',
          target: '/v1/users/search',
          severity: 'Medium',
          status: 'Monitoring',
          attempts: 5678,
          startTime: '2025-01-07T09:30:00Z',
          lastSeen: '2025-01-07T10:42:00Z',
          blocked: false,
          country: 'United States'
        },
        {
          id: 'THR-003',
          type: 'Suspicious Data Access',
          source: '198.51.100.23',
          target: '/v1/relationships/export',
          severity: 'Critical',
          status: 'Investigating',
          attempts: 23,
          startTime: '2025-01-07T10:20:00Z',
          lastSeen: '2025-01-07T10:35:00Z',
          blocked: true,
          country: 'Russia'
        }
      ],
      scanHistory: [
        {
          id: 'SCAN-001',
          type: 'Full Security Scan',
          startTime: '2025-01-07T02:00:00Z',
          endTime: '2025-01-07T02:45:00Z',
          duration: 45,
          status: 'Completed',
          vulnerabilities: 48,
          newFindings: 3,
          resolved: 2
        },
        {
          id: 'SCAN-002',
          type: 'Compliance Audit',
          startTime: '2025-01-06T02:00:00Z',
          endTime: '2025-01-06T03:15:00Z',
          duration: 75,
          status: 'Completed',
          vulnerabilities: 45,
          newFindings: 1,
          resolved: 4
        },
        {
          id: 'SCAN-003',
          type: 'Penetration Test',
          startTime: '2025-01-05T02:00:00Z',
          endTime: '2025-01-05T04:30:00Z',
          duration: 150,
          status: 'Completed',
          vulnerabilities: 49,
          newFindings: 5,
          resolved: 1
        }
      ]
    };
    setSecurityData(sampleData);
  }, []);

  const getSeverityColor = (severity) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-800 border-red-200',
      'High': 'bg-orange-100 text-orange-800 border-orange-200',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Low': 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[severity] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Open': 'bg-red-100 text-red-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Resolved': 'bg-green-100 text-green-800',
      'Closed': 'bg-gray-100 text-gray-800',
      'Active': 'bg-red-100 text-red-800',
      'Monitoring': 'bg-yellow-100 text-yellow-800',
      'Investigating': 'bg-orange-100 text-orange-800',
      'Blocked': 'bg-green-100 text-green-800',
      'Compliant': 'bg-green-100 text-green-800',
      'Partial': 'bg-yellow-100 text-yellow-800',
      'Non-Compliant': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const startSecurityScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Security Center</h1>
              <p className="mt-2 text-gray-400">Comprehensive security monitoring, vulnerability management, and compliance tracking</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={startSecurityScan}
                disabled={isScanning}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Scan className={`h-5 w-5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Scanning...' : 'Start Scan'}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export Report</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all">
                <Settings className="h-5 w-5" />
                <span>Configure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Security Overview', icon: Shield },
              { id: 'vulnerabilities', label: 'Vulnerabilities', icon: ShieldAlert },
              { id: 'threats', label: 'Threat Detection', icon: AlertTriangle },
              { id: 'compliance', label: 'Compliance', icon: ShieldCheck },
              { id: 'scans', label: 'Security Scans', icon: Scan },
              { id: 'monitoring', label: 'Real-time Monitoring', icon: Activity },
              { id: 'reports', label: 'Security Reports', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
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
        {/* Security Overview Tab */}
        {activeTab === 'overview' && securityData.overview && (
          <div className="space-y-8">
            {/* Security Score Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Security Score</p>
                    <p className={`text-3xl font-bold ${getScoreColor(securityData.overview.securityScore)}`}>
                      {securityData.overview.securityScore}/100
                    </p>
                    <p className="text-sm text-green-400 mt-1">+3 points this week</p>
                  </div>
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Vulnerabilities</p>
                    <p className="text-3xl font-bold text-white">{securityData.overview.vulnerabilities.total}</p>
                    <p className="text-sm text-red-400 mt-1">{securityData.overview.vulnerabilities.critical} critical</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <ShieldAlert className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Compliance Score</p>
                    <p className={`text-3xl font-bold ${getScoreColor(securityData.overview.complianceScore)}`}>
                      {securityData.overview.complianceScore}%
                    </p>
                    <p className="text-sm text-green-400 mt-1">4 frameworks monitored</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Blocked Attacks</p>
                    <p className="text-3xl font-bold text-white">{securityData.overview.blockedAttacks}</p>
                    <p className="text-sm text-green-400 mt-1">Last 24 hours</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <ShieldX className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Vulnerability Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Vulnerability Breakdown</h3>
                <div className="space-y-4">
                  {[
                    { severity: 'Critical', count: securityData.overview.vulnerabilities.critical, color: 'bg-red-500' },
                    { severity: 'High', count: securityData.overview.vulnerabilities.high, color: 'bg-orange-500' },
                    { severity: 'Medium', count: securityData.overview.vulnerabilities.medium, color: 'bg-yellow-500' },
                    { severity: 'Low', count: securityData.overview.vulnerabilities.low, color: 'bg-blue-500' }
                  ].map((item) => (
                    <div key={item.severity} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="text-gray-300">{item.severity}</span>
                      </div>
                      <span className="text-white font-semibold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Security Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Secure Connections</span>
                    <span className="text-green-400 font-semibold">{securityData.overview.secureConnections}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Threat Level</span>
                    <span className="text-yellow-400 font-semibold">{securityData.overview.threatLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Threats</span>
                    <span className="text-red-400 font-semibold">{securityData.overview.activeThreats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Scan</span>
                    <span className="text-gray-300">{formatDate(securityData.overview.lastScan)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Security Events */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Security Events</h3>
              <div className="space-y-4">
                {[
                  { time: '10:45 AM', event: 'Brute force attack blocked from 192.168.1.100', severity: 'High', icon: ShieldX },
                  { time: '10:30 AM', event: 'Security scan completed - 3 new vulnerabilities found', severity: 'Medium', icon: Scan },
                  { time: '09:15 AM', event: 'Suspicious API access pattern detected', severity: 'Medium', icon: AlertTriangle },
                  { time: '08:45 AM', event: 'SSL certificate renewed successfully', severity: 'Low', icon: CheckCircle },
                  { time: '08:30 AM', event: 'Failed login attempts exceeded threshold', severity: 'High', icon: AlertCircle }
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      event.severity === 'High' ? 'bg-red-900' : 
                      event.severity === 'Medium' ? 'bg-yellow-900' : 'bg-green-900'
                    }`}>
                      <event.icon className={`h-5 w-5 ${
                        event.severity === 'High' ? 'text-red-400' : 
                        event.severity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{event.event}</p>
                      <p className="text-sm text-gray-400">{event.time}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                      {event.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vulnerabilities Tab */}
        {activeTab === 'vulnerabilities' && securityData.vulnerabilities && (
          <div className="space-y-8">
            {/* Filters */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Categories</option>
                  <option value="injection">Injection</option>
                  <option value="xss">Cross-Site Scripting</option>
                  <option value="authentication">Authentication</option>
                  <option value="configuration">Configuration</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Filter className="h-5 w-5" />
                  <span>Advanced Filters</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700">
                <Plus className="h-5 w-5" />
                <span>Add Manual Finding</span>
              </button>
            </div>

            {/* Vulnerabilities List */}
            <div className="space-y-4">
              {securityData.vulnerabilities.map((vuln) => (
                <div key={vuln.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-lg font-semibold text-white">{vuln.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(vuln.severity)}`}>
                          {vuln.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vuln.status)}`}>
                          {vuln.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{vuln.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">ID:</span>
                          <span className="text-white ml-2 font-mono">{vuln.id}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">CVSS Score:</span>
                          <span className="text-white ml-2 font-semibold">{vuln.cvssScore}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Affected:</span>
                          <span className="text-white ml-2 font-mono">{vuln.affected}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Discovered:</span>
                          <span className="text-white ml-2">{formatDate(vuln.discoveredDate)}</span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                        <h4 className="text-white font-semibold mb-2">Recommendation:</h4>
                        <p className="text-gray-300">{vuln.recommendation}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        <Eye className="h-5 w-5 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        <Edit className="h-5 w-5 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Threat Detection Tab */}
        {activeTab === 'threats' && securityData.threats && (
          <div className="space-y-8">
            {/* Threat Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Threats</p>
                    <p className="text-3xl font-bold text-red-400">3</p>
                    <p className="text-sm text-gray-400 mt-1">Requiring attention</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Blocked Today</p>
                    <p className="text-3xl font-bold text-green-400">127</p>
                    <p className="text-sm text-gray-400 mt-1">Attack attempts</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Threat Level</p>
                    <p className="text-3xl font-bold text-yellow-400">Medium</p>
                    <p className="text-sm text-gray-400 mt-1">Current status</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Target className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Active Threats */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Active Threats</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Threat ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Source</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Target</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Severity</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {securityData.threats.map((threat) => (
                      <tr key={threat.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-white">{threat.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{threat.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400">{threat.source}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400">{threat.target}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(threat.severity)}`}>
                            {threat.severity}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                            {threat.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <ShieldX className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <MoreVertical className="h-4 w-4" />
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

        {/* Compliance Tab */}
        {activeTab === 'compliance' && securityData.compliance && (
          <div className="space-y-8">
            {/* Compliance Frameworks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityData.compliance.frameworks.map((framework, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(framework.status)}`}>
                      {framework.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Compliance Score</span>
                      <span className={`font-semibold ${getScoreColor(framework.score)}`}>{framework.score}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Controls</span>
                      <span className="text-white">{framework.controls}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Findings</span>
                      <span className="text-white">{framework.findings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Audit</span>
                      <span className="text-white">{framework.lastAudit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Next Audit</span>
                      <span className="text-white">{framework.nextAudit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Requirements */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Compliance Requirements by Category</h3>
              <div className="space-y-4">
                {securityData.compliance.requirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-white font-medium">{req.category}</span>
                      <span className="text-gray-400">{req.compliant}/{req.total} controls</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${req.percentage >= 90 ? 'bg-green-500' : req.percentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${req.percentage}%` }}
                        ></div>
                      </div>
                      <span className={`font-semibold ${getScoreColor(req.percentage)}`}>{req.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Security Scans Tab */}
        {activeTab === 'scans' && securityData.scanHistory && (
          <div className="space-y-8">
            {/* Scan Controls */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Security Scan Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button 
                  onClick={startSecurityScan}
                  disabled={isScanning}
                  className="flex items-center justify-center space-x-2 p-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  <Scan className={`h-6 w-6 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>{isScanning ? 'Scanning...' : 'Full Security Scan'}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                  <span>Compliance Audit</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Target className="h-6 w-6" />
                  <span>Penetration Test</span>
                </button>
              </div>
            </div>

            {/* Scan History */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Scan History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Scan ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Start Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Findings</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {securityData.scanHistory.map((scan) => (
                      <tr key={scan.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-white">{scan.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{scan.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatDate(scan.startTime)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{scan.duration}m</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(scan.status)}`}>
                            {scan.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {scan.vulnerabilities} total, {scan.newFindings} new
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-400 hover:text-green-300">
                              <Download className="h-4 w-4" />
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

        {/* Real-time Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            {/* Live Security Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Live Connections</p>
                    <p className="text-2xl font-bold text-green-400">1,247</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Activity className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Failed Logins</p>
                    <p className="text-2xl font-bold text-red-400">23</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">API Calls/min</p>
                    <p className="text-2xl font-bold text-blue-400">5,678</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Blocked IPs</p>
                    <p className="text-2xl font-bold text-yellow-400">45</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <ShieldX className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Live Threat Detection</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Real-time Threat Detection Chart Placeholder</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Security Events Timeline</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Security Events Timeline Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-8">
            {/* Report Generation */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Generate Security Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Vulnerability Report</h4>
                  <p className="text-gray-400 mb-4">Comprehensive vulnerability assessment and remediation recommendations</p>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Download className="h-5 w-5" />
                    <span>Generate Report</span>
                  </button>
                </div>
                
                <div className="p-6 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Compliance Report</h4>
                  <p className="text-gray-400 mb-4">Detailed compliance status across all monitored frameworks</p>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Download className="h-5 w-5" />
                    <span>Generate Report</span>
                  </button>
                </div>
                
                <div className="p-6 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Executive Summary</h4>
                  <p className="text-gray-400 mb-4">High-level security posture summary for leadership</p>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Download className="h-5 w-5" />
                    <span>Generate Report</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Reports</h3>
              <div className="space-y-4">
                {[
                  { name: 'Monthly Security Assessment - January 2025', type: 'Vulnerability Report', date: '2025-01-07', size: '2.4 MB' },
                  { name: 'SOC 2 Compliance Status Report', type: 'Compliance Report', date: '2025-01-06', size: '1.8 MB' },
                  { name: 'Executive Security Summary - Q4 2024', type: 'Executive Summary', date: '2025-01-05', size: '856 KB' },
                  { name: 'Penetration Test Results', type: 'Security Assessment', date: '2025-01-04', size: '3.2 MB' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-900 rounded-lg">
                        <FileText className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{report.name}</h4>
                        <p className="text-sm text-gray-400">{report.type} • {report.date} • {report.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500">
                        <Eye className="h-5 w-5 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500">
                        <Download className="h-5 w-5 text-gray-400" />
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

export default IntegrationSecurityCenter;

