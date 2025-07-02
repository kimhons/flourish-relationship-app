import React, { useState, useEffect } from 'react';
import { 
  Shield, Lock, Key, Eye, AlertTriangle, CheckCircle,
  Users, Database, Server, Cloud, Globe, Wifi,
  Activity, BarChart3, PieChart, TrendingUp, Target,
  Settings, Bell, Mail, Phone, MessageCircle,
  Search, Filter, Download, Upload, RefreshCw,
  Plus, Edit, Trash2, MoreHorizontal, Info,
  FileText, Clipboard, Award, Star, Zap,
  Calendar, Clock, ArrowUp, ArrowDown, Minus,
  UserCheck, UserX, UserPlus, AlertCircle,
  Network, GitBranch, Layers, HardDrive, Cpu
} from 'lucide-react';

const EnterpriseSecurityCompliance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [alertsFilter, setAlertsFilter] = useState('all');

  const [securityData, setSecurityData] = useState({
    overview: {
      securityScore: 96.8,
      complianceScore: 98.2,
      activeThreats: 3,
      resolvedIncidents: 247,
      vulnerabilities: 12,
      patchCompliance: 94.7,
      accessControlScore: 97.3,
      dataProtectionScore: 95.9
    },
    threats: [
      {
        id: 1,
        type: 'Suspicious Login',
        severity: 'medium',
        status: 'investigating',
        source: '192.168.1.45',
        target: 'User Account: sarah.chen@company.com',
        timestamp: '2 hours ago',
        description: 'Multiple failed login attempts from unusual location',
        riskScore: 67,
        actions: ['Block IP', 'Notify User', 'Require MFA']
      },
      {
        id: 2,
        type: 'Data Access Anomaly',
        severity: 'high',
        status: 'active',
        source: 'Internal Network',
        target: 'Customer Database',
        timestamp: '45 minutes ago',
        description: 'Unusual data access pattern detected in customer records',
        riskScore: 84,
        actions: ['Isolate System', 'Audit Access', 'Alert Security Team']
      },
      {
        id: 3,
        type: 'Malware Detection',
        severity: 'low',
        status: 'contained',
        source: 'Email Attachment',
        target: 'Workstation: WS-MKT-015',
        timestamp: '3 hours ago',
        description: 'Potentially malicious file quarantined by antivirus',
        riskScore: 34,
        actions: ['Quarantine File', 'Scan System', 'Update Signatures']
      }
    ],
    compliance: [
      {
        framework: 'SOC 2 Type II',
        status: 'compliant',
        score: 98.7,
        lastAudit: '2024-10-15',
        nextAudit: '2025-04-15',
        findings: 2,
        controls: 156,
        coverage: 99.2
      },
      {
        framework: 'GDPR',
        status: 'compliant',
        score: 97.8,
        lastAudit: '2024-09-20',
        nextAudit: '2025-03-20',
        findings: 3,
        controls: 89,
        coverage: 98.8
      },
      {
        framework: 'HIPAA',
        status: 'compliant',
        score: 96.4,
        lastAudit: '2024-11-01',
        nextAudit: '2025-05-01',
        findings: 4,
        controls: 134,
        coverage: 97.9
      },
      {
        framework: 'ISO 27001',
        status: 'in-progress',
        score: 89.3,
        lastAudit: '2024-08-10',
        nextAudit: '2025-02-10',
        findings: 8,
        controls: 114,
        coverage: 92.1
      }
    ],
    vulnerabilities: [
      {
        id: 'CVE-2024-001',
        severity: 'critical',
        component: 'Web Application Framework',
        description: 'Remote code execution vulnerability in authentication module',
        cvssScore: 9.8,
        status: 'patched',
        discoveredDate: '2024-12-01',
        patchedDate: '2024-12-02',
        affectedSystems: 23
      },
      {
        id: 'CVE-2024-002',
        severity: 'high',
        component: 'Database Server',
        description: 'SQL injection vulnerability in user management system',
        cvssScore: 8.1,
        status: 'patching',
        discoveredDate: '2024-12-03',
        patchedDate: null,
        affectedSystems: 8
      },
      {
        id: 'CVE-2024-003',
        severity: 'medium',
        component: 'API Gateway',
        description: 'Information disclosure through error messages',
        cvssScore: 5.3,
        status: 'open',
        discoveredDate: '2024-12-05',
        patchedDate: null,
        affectedSystems: 12
      }
    ],
    accessControl: {
      totalUsers: 1247,
      activeUsers: 1189,
      privilegedUsers: 47,
      serviceAccounts: 23,
      mfaEnabled: 1156,
      mfaCompliance: 97.2,
      passwordCompliance: 94.8,
      accessReviews: 89.3
    },
    dataProtection: {
      encryptionCoverage: 99.7,
      backupCompliance: 98.4,
      dataClassification: 96.1,
      retentionCompliance: 94.7,
      dlpIncidents: 8,
      dataBreaches: 0
    }
  });

  const tabs = [
    { id: 'overview', label: 'Security Overview', icon: Shield },
    { id: 'threats', label: 'Threat Detection', icon: AlertTriangle },
    { id: 'compliance', label: 'Compliance Management', icon: CheckCircle },
    { id: 'vulnerabilities', label: 'Vulnerability Management', icon: Eye },
    { id: 'access', label: 'Access Control', icon: Key },
    { id: 'data', label: 'Data Protection', icon: Database }
  ];

  const severityColors = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  const statusColors = {
    compliant: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    'non-compliant': 'bg-red-100 text-red-800',
    active: 'bg-red-100 text-red-800',
    investigating: 'bg-yellow-100 text-yellow-800',
    contained: 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    patched: 'bg-green-100 text-green-800',
    patching: 'bg-yellow-100 text-yellow-800',
    open: 'bg-red-100 text-red-800'
  };

  const getScoreColor = (score) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Score</p>
              <p className={`text-2xl font-bold ${getScoreColor(securityData.overview.securityScore)}`}>
                {securityData.overview.securityScore}%
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+2.3% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Score</p>
              <p className={`text-2xl font-bold ${getScoreColor(securityData.overview.complianceScore)}`}>
                {securityData.overview.complianceScore}%
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+1.8% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Threats</p>
              <p className="text-2xl font-bold text-red-600">{securityData.overview.activeThreats}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowDown className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">-67% from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vulnerabilities</p>
              <p className="text-2xl font-bold text-yellow-600">{securityData.overview.vulnerabilities}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Eye className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowDown className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">-23% reduction</span>
          </div>
        </div>
      </div>

      {/* Security Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Posture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Security Posture</h3>
            <Shield className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { metric: 'Access Control', score: securityData.overview.accessControlScore, trend: +2.1 },
              { metric: 'Data Protection', score: securityData.overview.dataProtectionScore, trend: +1.7 },
              { metric: 'Patch Compliance', score: securityData.overview.patchCompliance, trend: +3.4 },
              { metric: 'Network Security', score: 93.2, trend: +0.8 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">{item.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>{item.score}%</span>
                    {item.trend > 0 ? (
                      <ArrowUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.score >= 95 ? 'bg-green-500' :
                      item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Security Events */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Security Events</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { type: 'Threat Blocked', description: 'Malicious IP blocked by firewall', time: '15 min ago', severity: 'medium' },
              { type: 'Patch Applied', description: 'Critical security patch deployed', time: '2 hours ago', severity: 'low' },
              { type: 'Access Denied', description: 'Unauthorized access attempt detected', time: '4 hours ago', severity: 'high' },
              { type: 'Compliance Check', description: 'SOC 2 audit completed successfully', time: '1 day ago', severity: 'low' },
              { type: 'Vulnerability Found', description: 'New CVE identified in web framework', time: '2 days ago', severity: 'critical' }
            ].map((event, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  event.severity === 'critical' ? 'bg-red-500' :
                  event.severity === 'high' ? 'bg-orange-500' :
                  event.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{event.type}</p>
                  <p className="text-xs text-gray-600">{event.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Framework Status</h3>
          <Award className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityData.compliance.map((framework, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{framework.framework}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[framework.status]}`}>
                  {framework.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Score:</span>
                  <span className={`text-xs font-medium ${getScoreColor(framework.score)}`}>{framework.score}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Findings:</span>
                  <span className="text-xs text-gray-900">{framework.findings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Next Audit:</span>
                  <span className="text-xs text-gray-900">{new Date(framework.nextAudit).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderThreatsTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Threat Detection</h2>
          <p className="text-gray-600">Real-time threat monitoring and incident response management</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={alertsFilter} 
            onChange={(e) => setAlertsFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Threats</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency Response
          </button>
        </div>
      </div>

      {/* Threat Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Threats</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Blocked Attacks</p>
              <p className="text-2xl font-bold text-green-600">1,247</p>
            </div>
            <Shield className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Time</p>
              <p className="text-2xl font-bold text-blue-600">4.2m</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolution Rate</p>
              <p className="text-2xl font-bold text-purple-600">98.7%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Active Threats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Active Threats</h3>
          <RefreshCw className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {securityData.threats.map((threat) => (
            <div key={threat.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    threat.severity === 'critical' ? 'bg-red-500' :
                    threat.severity === 'high' ? 'bg-orange-500' :
                    threat.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{threat.type}</h4>
                    <p className="text-sm text-gray-600">{threat.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${severityColors[threat.severity]}`}>
                    {threat.severity}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[threat.status]}`}>
                    {threat.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Source</p>
                  <p className="text-sm text-gray-900">{threat.source}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Target</p>
                  <p className="text-sm text-gray-900">{threat.target}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Risk Score</p>
                  <p className={`text-sm font-medium ${
                    threat.riskScore >= 80 ? 'text-red-600' :
                    threat.riskScore >= 60 ? 'text-orange-600' :
                    threat.riskScore >= 40 ? 'text-yellow-600' : 'text-green-600'
                  }`}>{threat.riskScore}/100</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {threat.actions.map((action, index) => (
                    <button key={index} className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium hover:bg-blue-100">
                      {action}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{threat.timestamp}</span>
                  <button 
                    onClick={() => setSelectedIncident(threat)}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium hover:bg-gray-200"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attack Vectors</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Incident Details Modal */}
      {selectedIncident && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Incident Details</h2>
                <button 
                  onClick={() => setSelectedIncident(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Threat Type</p>
                  <p className="text-lg text-gray-900">{selectedIncident.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Severity</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${severityColors[selectedIncident.severity]}`}>
                    {selectedIncident.severity}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${statusColors[selectedIncident.status]}`}>
                    {selectedIncident.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Risk Score</p>
                  <p className="text-lg text-gray-900">{selectedIncident.riskScore}/100</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{selectedIncident.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Source</p>
                  <p className="text-gray-900">{selectedIncident.source}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Target</p>
                  <p className="text-gray-900">{selectedIncident.target}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Recommended Actions</p>
                <div className="space-y-2">
                  {selectedIncident.actions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-900">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderComplianceTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance Management</h2>
          <p className="text-gray-600">Comprehensive compliance framework monitoring and audit management</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Score</p>
              <p className="text-2xl font-bold text-green-600">{securityData.overview.complianceScore}%</p>
            </div>
            <Award className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Frameworks</p>
              <p className="text-2xl font-bold text-blue-600">{securityData.compliance.length}</p>
            </div>
            <Clipboard className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Findings</p>
              <p className="text-2xl font-bold text-yellow-600">
                {securityData.compliance.reduce((sum, f) => sum + f.findings, 0)}
              </p>
            </div>
            <AlertCircle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Next Audit</p>
              <p className="text-2xl font-bold text-purple-600">15d</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Compliance Frameworks</h3>
        <div className="space-y-6">
          {securityData.compliance.map((framework, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{framework.framework}</h4>
                    <p className="text-sm text-gray-600">Last audit: {new Date(framework.lastAudit).toLocaleDateString()}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors[framework.status]}`}>
                  {framework.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                  <p className={`text-xl font-bold ${getScoreColor(framework.score)}`}>{framework.score}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Controls</p>
                  <p className="text-xl font-bold text-gray-900">{framework.controls}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Coverage</p>
                  <p className="text-xl font-bold text-gray-900">{framework.coverage}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Open Findings</p>
                  <p className="text-xl font-bold text-yellow-600">{framework.findings}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Compliance Progress</span>
                  <span className="text-sm text-gray-900">{framework.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      framework.score >= 95 ? 'bg-green-500' :
                      framework.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${framework.score}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Next audit: {new Date(framework.nextAudit).toLocaleDateString()}
                </div>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm font-medium hover:bg-blue-100">
                    <Eye className="h-3 w-3 mr-1" />
                    View Details
                  </button>
                  <button className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100">
                    <FileText className="h-3 w-3 mr-1" />
                    Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVulnerabilitiesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Vulnerability Management</h2>
          <p className="text-gray-600">Comprehensive vulnerability assessment and patch management</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Search className="h-4 w-4 mr-2" />
          Scan Now
        </button>
      </div>

      {/* Vulnerability Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Vulnerabilities</p>
              <p className="text-2xl font-bold text-gray-900">{securityData.vulnerabilities.length}</p>
            </div>
            <Eye className="h-8 w-8 text-gray-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Critical</p>
              <p className="text-2xl font-bold text-red-600">
                {securityData.vulnerabilities.filter(v => v.severity === 'critical').length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Patched</p>
              <p className="text-2xl font-bold text-green-600">
                {securityData.vulnerabilities.filter(v => v.status === 'patched').length}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Patch Compliance</p>
              <p className="text-2xl font-bold text-blue-600">{securityData.overview.patchCompliance}%</p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Vulnerabilities List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Active Vulnerabilities</h3>
        <div className="space-y-4">
          {securityData.vulnerabilities.map((vuln) => (
            <div key={vuln.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-900">{vuln.id}</h4>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${severityColors[vuln.severity]}`}>
                      {vuln.severity}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[vuln.status]}`}>
                      {vuln.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{vuln.description}</p>
                  <p className="text-sm text-gray-500">Component: {vuln.component}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">CVSS {vuln.cvssScore}</p>
                  <p className="text-sm text-gray-500">{vuln.affectedSystems} systems</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Discovered</p>
                  <p className="text-sm text-gray-900">{new Date(vuln.discoveredDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Patched</p>
                  <p className="text-sm text-gray-900">
                    {vuln.patchedDate ? new Date(vuln.patchedDate).toLocaleDateString() : 'Pending'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Time to Patch</p>
                  <p className="text-sm text-gray-900">
                    {vuln.patchedDate ? 
                      `${Math.ceil((new Date(vuln.patchedDate) - new Date(vuln.discoveredDate)) / (1000 * 60 * 60 * 24))} days` : 
                      'In progress'
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAccessTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Access Control</h2>
          <p className="text-gray-600">Identity and access management with comprehensive user monitoring</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </button>
      </div>

      {/* Access Control Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{securityData.accessControl.totalUsers.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">MFA Enabled</p>
              <p className="text-2xl font-bold text-green-600">{securityData.accessControl.mfaCompliance}%</p>
            </div>
            <Key className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Privileged Users</p>
              <p className="text-2xl font-bold text-yellow-600">{securityData.accessControl.privilegedUsers}</p>
            </div>
            <UserCheck className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Access Reviews</p>
              <p className="text-2xl font-bold text-purple-600">{securityData.accessControl.accessReviews}%</p>
            </div>
            <Clipboard className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Access Control Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Access Distribution</h3>
          <div className="space-y-4">
            {[
              { role: 'Standard Users', count: 1156, percentage: 92.7, color: 'bg-blue-500' },
              { role: 'Privileged Users', count: 47, percentage: 3.8, color: 'bg-yellow-500' },
              { role: 'Administrators', count: 21, percentage: 1.7, color: 'bg-red-500' },
              { role: 'Service Accounts', count: 23, percentage: 1.8, color: 'bg-purple-500' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">{item.role}</span>
                  <span className="text-sm text-gray-900">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Compliance</h3>
          <div className="space-y-4">
            {[
              { metric: 'MFA Compliance', score: securityData.accessControl.mfaCompliance },
              { metric: 'Password Compliance', score: securityData.accessControl.passwordCompliance },
              { metric: 'Access Reviews', score: securityData.accessControl.accessReviews },
              { metric: 'Account Hygiene', score: 91.4 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">{item.metric}</span>
                  <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.score >= 95 ? 'bg-green-500' :
                      item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Data Protection</h2>
          <p className="text-gray-600">Comprehensive data security and privacy protection management</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Database className="h-4 w-4 mr-2" />
          Data Audit
        </button>
      </div>

      {/* Data Protection Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Encryption Coverage</p>
              <p className="text-2xl font-bold text-green-600">{securityData.dataProtection.encryptionCoverage}%</p>
            </div>
            <Lock className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Backup Compliance</p>
              <p className="text-2xl font-bold text-blue-600">{securityData.dataProtection.backupCompliance}%</p>
            </div>
            <HardDrive className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">DLP Incidents</p>
              <p className="text-2xl font-bold text-yellow-600">{securityData.dataProtection.dlpIncidents}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Data Breaches</p>
              <p className="text-2xl font-bold text-green-600">{securityData.dataProtection.dataBreaches}</p>
            </div>
            <Shield className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Data Protection Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Protection Status</h3>
          <div className="space-y-4">
            {[
              { metric: 'Encryption Coverage', score: securityData.dataProtection.encryptionCoverage },
              { metric: 'Backup Compliance', score: securityData.dataProtection.backupCompliance },
              { metric: 'Data Classification', score: securityData.dataProtection.dataClassification },
              { metric: 'Retention Compliance', score: securityData.dataProtection.retentionCompliance }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">{item.metric}</span>
                  <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.score >= 95 ? 'bg-green-500' :
                      item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Loss Prevention</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enterprise Security & Compliance</h1>
              <p className="text-gray-600">Comprehensive security monitoring and compliance management platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Security Score: {securityData.overview.securityScore}%</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">SC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'threats' && renderThreatsTab()}
        {activeTab === 'compliance' && renderComplianceTab()}
        {activeTab === 'vulnerabilities' && renderVulnerabilitiesTab()}
        {activeTab === 'access' && renderAccessTab()}
        {activeTab === 'data' && renderDataTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love Enterprise Security</p>
                <p className="text-sm opacity-90">AI-powered security monitoring and compliance management</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Security Platform v2.0</p>
              <p className="text-xs opacity-75">Zero-trust architecture with advanced threat detection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSecurityCompliance;

