import React, { useState, useEffect } from 'react';
import { 
  Shield, CheckCircle, AlertTriangle, XCircle, Clock,
  FileText, Globe, User, Lock, Eye, Settings, Download,
  BarChart, TrendingUp, Calendar, Bell, Filter, Search
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const ComplianceMonitoringDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegulation, setSelectedRegulation] = useState('all');
  const [timeRange, setTimeRange] = useState('30days');
  const [alertFilter, setAlertFilter] = useState('all');

  // Compliance regulations for dating apps
  const regulations = [
    {
      id: 'gdpr',
      name: 'GDPR',
      full_name: 'General Data Protection Regulation',
      jurisdiction: 'European Union',
      compliance_score: 94,
      status: 'compliant',
      last_audit: '2024-12-15',
      next_review: '2025-06-15',
      requirements_met: 47,
      total_requirements: 50,
      critical_issues: 0,
      warnings: 3,
      risk_level: 'low'
    },
    {
      id: 'ccpa',
      name: 'CCPA',
      full_name: 'California Consumer Privacy Act',
      jurisdiction: 'California, USA',
      compliance_score: 89,
      status: 'compliant',
      last_audit: '2024-12-20',
      next_review: '2025-03-20',
      requirements_met: 32,
      total_requirements: 36,
      critical_issues: 0,
      warnings: 4,
      risk_level: 'low'
    },
    {
      id: 'pipeda',
      name: 'PIPEDA',
      full_name: 'Personal Information Protection and Electronic Documents Act',
      jurisdiction: 'Canada',
      compliance_score: 92,
      status: 'compliant',
      last_audit: '2024-11-30',
      next_review: '2025-05-30',
      requirements_met: 23,
      total_requirements: 25,
      critical_issues: 0,
      warnings: 2,
      risk_level: 'low'
    },
    {
      id: 'lgpd',
      name: 'LGPD',
      full_name: 'Lei Geral de Proteção de Dados',
      jurisdiction: 'Brazil',
      compliance_score: 78,
      status: 'needs_attention',
      last_audit: '2024-10-15',
      next_review: '2025-04-15',
      requirements_met: 28,
      total_requirements: 36,
      critical_issues: 2,
      warnings: 6,
      risk_level: 'medium'
    },
    {
      id: 'coppa',
      name: 'COPPA',
      full_name: 'Children\'s Online Privacy Protection Act',
      jurisdiction: 'United States',
      compliance_score: 96,
      status: 'compliant',
      last_audit: '2024-12-01',
      next_review: '2025-06-01',
      requirements_met: 24,
      total_requirements: 25,
      critical_issues: 0,
      warnings: 1,
      risk_level: 'low'
    }
  ];

  // Compliance alerts and issues
  const complianceAlerts = [
    {
      id: 'ALERT-2025-001',
      regulation: 'LGPD',
      severity: 'high',
      type: 'data_retention',
      title: 'Data Retention Policy Violation',
      description: 'User data retained beyond specified retention period for inactive accounts',
      detected_date: '2025-01-07',
      status: 'open',
      affected_users: 1247,
      remediation_deadline: '2025-01-14',
      assigned_to: 'Data Protection Team'
    },
    {
      id: 'ALERT-2025-002',
      regulation: 'GDPR',
      severity: 'medium',
      type: 'consent_management',
      title: 'Consent Withdrawal Processing Delay',
      description: 'Some consent withdrawal requests taking longer than 72 hours to process',
      detected_date: '2025-01-06',
      status: 'in_progress',
      affected_users: 23,
      remediation_deadline: '2025-01-10',
      assigned_to: 'Privacy Engineering'
    },
    {
      id: 'ALERT-2025-003',
      regulation: 'CCPA',
      severity: 'medium',
      type: 'data_access',
      title: 'Data Access Request Response Time',
      description: 'Data access requests exceeding 45-day response requirement',
      detected_date: '2025-01-05',
      status: 'resolved',
      affected_users: 8,
      remediation_deadline: '2025-01-12',
      assigned_to: 'Legal Compliance'
    },
    {
      id: 'ALERT-2025-004',
      regulation: 'LGPD',
      severity: 'critical',
      type: 'cross_border_transfer',
      title: 'Unauthorized Cross-Border Data Transfer',
      description: 'User data transferred to non-adequate jurisdiction without proper safeguards',
      detected_date: '2025-01-04',
      status: 'open',
      affected_users: 456,
      remediation_deadline: '2025-01-08',
      assigned_to: 'Infrastructure Team'
    },
    {
      id: 'ALERT-2025-005',
      regulation: 'GDPR',
      severity: 'low',
      type: 'privacy_notice',
      title: 'Privacy Notice Update Required',
      description: 'Privacy notice needs updating to reflect new data processing activities',
      detected_date: '2025-01-03',
      status: 'in_progress',
      affected_users: 0,
      remediation_deadline: '2025-01-17',
      assigned_to: 'Legal Team'
    }
  ];

  // Compliance metrics over time
  const complianceMetrics = {
    overall_score: 90,
    trend: '+2.3%',
    total_requirements: 172,
    requirements_met: 154,
    critical_issues: 2,
    warnings: 16,
    last_updated: '2025-01-07 14:30'
  };

  // Compliance trends data
  const trendData = [
    { month: 'Jul', gdpr: 91, ccpa: 87, pipeda: 89, lgpd: 82, coppa: 94 },
    { month: 'Aug', gdpr: 92, ccpa: 88, pipeda: 90, lgpd: 79, coppa: 95 },
    { month: 'Sep', gdpr: 93, ccpa: 89, pipeda: 91, lgpd: 76, coppa: 96 },
    { month: 'Oct', gdpr: 94, ccpa: 88, pipeda: 92, lgpd: 74, coppa: 96 },
    { month: 'Nov', gdpr: 95, ccpa: 89, pipeda: 93, lgpd: 76, coppa: 97 },
    { month: 'Dec', gdpr: 94, ccpa: 89, pipeda: 92, lgpd: 78, coppa: 96 },
    { month: 'Jan', gdpr: 94, ccpa: 89, pipeda: 92, lgpd: 78, coppa: 96 }
  ];

  // Issue distribution data
  const issueDistribution = [
    { name: 'Data Retention', value: 8, color: '#ef4444' },
    { name: 'Consent Management', value: 5, color: '#f97316' },
    { name: 'Data Access Rights', value: 3, color: '#eab308' },
    { name: 'Cross-Border Transfers', value: 2, color: '#22c55e' },
    { name: 'Privacy Notices', value: 1, color: '#3b82f6' }
  ];

  // Compliance activities
  const recentActivities = [
    {
      id: 1,
      timestamp: '2025-01-07 14:30',
      type: 'audit_completed',
      regulation: 'GDPR',
      description: 'Quarterly GDPR compliance audit completed',
      result: 'passed',
      score: 94
    },
    {
      id: 2,
      timestamp: '2025-01-07 12:15',
      type: 'policy_updated',
      regulation: 'CCPA',
      description: 'Data retention policy updated for CCPA compliance',
      result: 'completed',
      score: null
    },
    {
      id: 3,
      timestamp: '2025-01-06 16:45',
      type: 'training_completed',
      regulation: 'All',
      description: 'Privacy training completed by 23 team members',
      result: 'completed',
      score: null
    },
    {
      id: 4,
      timestamp: '2025-01-06 10:20',
      type: 'issue_resolved',
      regulation: 'CCPA',
      description: 'Data access request response time issue resolved',
      result: 'resolved',
      score: null
    },
    {
      id: 5,
      timestamp: '2025-01-05 14:30',
      type: 'assessment_started',
      regulation: 'LGPD',
      description: 'LGPD compliance assessment initiated',
      result: 'in_progress',
      score: null
    }
  ];

  // Data subject requests metrics
  const dataSubjectRequests = {
    total_requests: 1247,
    access_requests: 456,
    deletion_requests: 234,
    portability_requests: 123,
    correction_requests: 89,
    opt_out_requests: 345,
    avg_response_time: '12.3 days',
    compliance_rate: 94.2
  };

  const getFilteredAlerts = () => {
    let filtered = complianceAlerts;
    
    if (selectedRegulation !== 'all') {
      filtered = filtered.filter(alert => alert.regulation.toLowerCase() === selectedRegulation);
    }
    
    if (alertFilter !== 'all') {
      filtered = filtered.filter(alert => alert.severity === alertFilter);
    }
    
    return filtered;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'needs_attention': return 'text-yellow-600 bg-yellow-100';
      case 'non_compliant': return 'text-red-600 bg-red-100';
      case 'under_review': return 'text-blue-600 bg-blue-100';
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

  const getAlertStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'closed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      case 'critical': return 'text-red-800';
      default: return 'text-gray-600';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'audit_completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'policy_updated': return <FileText className="w-4 h-4 text-blue-600" />;
      case 'training_completed': return <User className="w-4 h-4 text-purple-600" />;
      case 'issue_resolved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'assessment_started': return <Clock className="w-4 h-4 text-orange-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const exportComplianceReport = () => {
    console.log('Exporting compliance report...');
    // In a real app, this would generate and download a compliance report
  };

  const resolveAlert = (alertId) => {
    console.log(`Resolving alert: ${alertId}`);
    // In a real app, this would update the alert status
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-600" />
              Compliance Monitoring Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor regulatory compliance, track issues, and manage data protection requirements
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Regulations</option>
              {regulations.map(reg => (
                <option key={reg.id} value={reg.id}>{reg.name}</option>
              ))}
            </select>
            
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="1year">Last Year</option>
            </select>
            
            <button 
              onClick={exportComplianceReport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Settings className="w-4 h-4" />
              Configure Alerts
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{complianceMetrics.overall_score}%</div>
              <div className="text-xs text-green-500">{complianceMetrics.trend}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Compliance</h3>
            <p className="text-sm text-gray-600">Across all regulations</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{complianceMetrics.requirements_met}</div>
              <div className="text-xs text-gray-500">of {complianceMetrics.total_requirements}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Requirements Met</h3>
            <p className="text-sm text-gray-600">Compliance requirements</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{complianceMetrics.critical_issues}</div>
              <div className="text-xs text-gray-500">Critical</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Critical Issues</h3>
            <p className="text-sm text-gray-600">Require immediate attention</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{complianceMetrics.warnings}</div>
              <div className="text-xs text-gray-500">Warnings</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Warnings</h3>
            <p className="text-sm text-gray-600">Need monitoring</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{dataSubjectRequests.total_requests}</div>
              <div className="text-xs text-gray-500">This month</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Data Requests</h3>
            <p className="text-sm text-gray-600">Subject requests</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart },
              { id: 'regulations', name: 'Regulations', icon: FileText },
              { id: 'alerts', name: 'Alerts & Issues', icon: AlertTriangle },
              { id: 'requests', name: 'Data Requests', icon: User }
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
          {/* Regulation Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Regulation Status</h3>
            <div className="space-y-3">
              {regulations.map((regulation) => (
                <div key={regulation.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{regulation.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(regulation.status)}`}>
                      {regulation.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{regulation.compliance_score}% compliant</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        regulation.compliance_score >= 90 ? 'bg-green-500' :
                        regulation.compliance_score >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${regulation.compliance_score}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {regulation.requirements_met}/{regulation.total_requirements} requirements
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {recentActivities.slice(0, 5).map((activity) => (
                <div key={activity.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.regulation}</p>
                      <p className="text-xs text-gray-600 mb-1">{activity.description}</p>
                      <p className="text-xs text-gray-500">{activity.timestamp}</p>
                    </div>
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
                <FileText className="w-4 h-4" />
                Generate Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar className="w-4 h-4" />
                Schedule Audit
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-4 h-4" />
                Configure Alerts
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Manage Policies
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Compliance Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gdpr" stroke="#10b981" strokeWidth={2} name="GDPR" />
                    <Line type="monotone" dataKey="ccpa" stroke="#3b82f6" strokeWidth={2} name="CCPA" />
                    <Line type="monotone" dataKey="pipeda" stroke="#f59e0b" strokeWidth={2} name="PIPEDA" />
                    <Line type="monotone" dataKey="lgpd" stroke="#ef4444" strokeWidth={2} name="LGPD" />
                    <Line type="monotone" dataKey="coppa" stroke="#8b5cf6" strokeWidth={2} name="COPPA" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Issue Distribution and Data Requests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Issue Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={issueDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {issueDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Requests</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="font-medium text-blue-900">Access Requests</span>
                      <span className="font-bold text-blue-600">{dataSubjectRequests.access_requests}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                      <span className="font-medium text-red-900">Deletion Requests</span>
                      <span className="font-bold text-red-600">{dataSubjectRequests.deletion_requests}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="font-medium text-green-900">Portability Requests</span>
                      <span className="font-bold text-green-600">{dataSubjectRequests.portability_requests}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <span className="font-medium text-yellow-900">Opt-out Requests</span>
                      <span className="font-bold text-yellow-600">{dataSubjectRequests.opt_out_requests}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg Response Time</span>
                        <span className="font-semibold text-gray-900">{dataSubjectRequests.avg_response_time}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-600">Compliance Rate</span>
                        <span className="font-semibold text-green-600">{dataSubjectRequests.compliance_rate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'regulations' && (
            <div className="space-y-6">
              {regulations.map((regulation) => (
                <div key={regulation.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{regulation.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {regulation.jurisdiction}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(regulation.status)}`}>
                        {regulation.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">{regulation.compliance_score}%</span>
                      <span className={`text-sm font-semibold ${getRiskColor(regulation.risk_level)}`}>
                        {regulation.risk_level} risk
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{regulation.full_name}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Requirements Met</div>
                      <div className="font-semibold text-gray-900">{regulation.requirements_met}/{regulation.total_requirements}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Critical Issues</div>
                      <div className="font-semibold text-red-600">{regulation.critical_issues}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Warnings</div>
                      <div className="font-semibold text-yellow-600">{regulation.warnings}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Audit</div>
                      <div className="font-semibold text-gray-900">{regulation.last_audit}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Compliance Progress</span>
                      <span>{regulation.compliance_score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          regulation.compliance_score >= 90 ? 'bg-green-500' :
                          regulation.compliance_score >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${regulation.compliance_score}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Next Review: {regulation.next_review}</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        View Details
                      </button>
                      <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                        Run Assessment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Compliance Alerts & Issues</h3>
                <select
                  value={alertFilter}
                  onChange={(e) => setAlertFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {getFilteredAlerts().map((alert) => (
                  <div key={alert.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900">{alert.title}</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {alert.regulation}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAlertStatusColor(alert.status)}`}>
                          {alert.status.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{alert.detected_date}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{alert.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Affected Users:</span>
                        <span className="ml-1 font-medium text-red-600">{alert.affected_users.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deadline:</span>
                        <span className="ml-1 font-medium">{alert.remediation_deadline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Assigned to:</span>
                        <span className="ml-1 font-medium">{alert.assigned_to}</span>
                      </div>
                    </div>
                    
                    {alert.status === 'open' && (
                      <div className="flex gap-2 mt-3">
                        <button 
                          onClick={() => resolveAlert(alert.id)}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                        >
                          Mark Resolved
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Assign
                        </button>
                        <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Requests Management</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-blue-900">Access Requests</h4>
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{dataSubjectRequests.access_requests}</div>
                  <div className="text-sm text-blue-700">Right to access personal data</div>
                </div>
                
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-red-900">Deletion Requests</h4>
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-1">{dataSubjectRequests.deletion_requests}</div>
                  <div className="text-sm text-red-700">Right to be forgotten</div>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-green-900">Portability Requests</h4>
                    <Download className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">{dataSubjectRequests.portability_requests}</div>
                  <div className="text-sm text-green-700">Data portability rights</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Average Response Time</span>
                        <span className="font-semibold text-gray-900">{dataSubjectRequests.avg_response_time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Compliance Rate</span>
                        <span className="font-semibold text-green-600">{dataSubjectRequests.compliance_rate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Requests</span>
                        <span className="font-semibold text-gray-900">{dataSubjectRequests.total_requests}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Request Processing</h4>
                    <div className="space-y-2">
                      <button className="w-full flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <FileText className="w-4 h-4" />
                        Process New Requests
                      </button>
                      <button className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <Download className="w-4 h-4" />
                        Export Request Log
                      </button>
                      <button className="w-full flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <Settings className="w-4 h-4" />
                        Configure Workflows
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplianceMonitoringDashboard;

