import React, { useState, useEffect } from 'react';
import { 
  Shield, BarChart, TrendingUp, AlertTriangle, Eye, Download,
  Calendar, Clock, Users, Activity, Database, Network,
  CheckCircle, XCircle, Filter, Search, RefreshCw, Settings
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const SecurityAnalyticsReporting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [reportType, setReportType] = useState('security');

  // Security metrics for dating app
  const securityMetrics = {
    threat_detection: {
      total_threats: 1247,
      blocked_threats: 1189,
      success_rate: 95.3,
      avg_response_time: '2.3 seconds',
      trend: '+12.4%'
    },
    user_safety: {
      fake_profiles_detected: 89,
      harassment_reports: 23,
      scam_attempts: 15,
      safety_score: 97.8,
      trend: '+5.2%'
    },
    compliance: {
      gdpr_compliance: 99.2,
      data_requests_fulfilled: 156,
      avg_response_time: '18 hours',
      violations: 2,
      trend: '+2.1%'
    },
    access_security: {
      login_attempts: 45678,
      failed_logins: 234,
      account_takeovers_prevented: 12,
      mfa_adoption: 78.4,
      trend: '+8.7%'
    }
  };

  // Threat detection trends
  const threatTrends = [
    { date: '2025-01-01', threats_detected: 145, threats_blocked: 138, fake_profiles: 12, scam_attempts: 3 },
    { date: '2025-01-02', threats_detected: 167, threats_blocked: 159, fake_profiles: 15, scam_attempts: 2 },
    { date: '2025-01-03', threats_detected: 189, threats_blocked: 181, fake_profiles: 18, scam_attempts: 4 },
    { date: '2025-01-04', threats_detected: 156, threats_blocked: 148, fake_profiles: 14, scam_attempts: 1 },
    { date: '2025-01-05', threats_detected: 203, threats_blocked: 195, fake_profiles: 21, scam_attempts: 5 },
    { date: '2025-01-06', threats_detected: 178, threats_blocked: 170, fake_profiles: 16, scam_attempts: 3 },
    { date: '2025-01-07', threats_detected: 209, threats_blocked: 198, fake_profiles: 23, scam_attempts: 2 }
  ];

  // User safety incidents
  const safetyIncidents = [
    {
      id: 'INC-001',
      type: 'Harassment',
      severity: 'high',
      status: 'resolved',
      reported_at: '2025-01-07 14:23:15',
      resolved_at: '2025-01-07 14:45:32',
      response_time: '22 minutes',
      description: 'Inappropriate messages and persistent contact after blocking',
      action_taken: 'User permanently banned, victim provided support resources'
    },
    {
      id: 'INC-002',
      type: 'Fake Profile',
      severity: 'medium',
      status: 'resolved',
      reported_at: '2025-01-07 13:15:42',
      resolved_at: '2025-01-07 13:28:19',
      response_time: '13 minutes',
      description: 'Profile using stolen photos and false information',
      action_taken: 'Profile removed, photos flagged in database'
    },
    {
      id: 'INC-003',
      type: 'Romance Scam',
      severity: 'high',
      status: 'investigating',
      reported_at: '2025-01-07 12:45:18',
      resolved_at: null,
      response_time: 'In progress',
      description: 'User requesting money for emergency situation',
      action_taken: 'Account suspended, evidence collected for authorities'
    },
    {
      id: 'INC-004',
      type: 'Data Breach Attempt',
      severity: 'critical',
      status: 'resolved',
      reported_at: '2025-01-07 11:32:05',
      resolved_at: '2025-01-07 11:38:47',
      response_time: '7 minutes',
      description: 'Attempted unauthorized access to user database',
      action_taken: 'Attack blocked, security measures enhanced'
    },
    {
      id: 'INC-005',
      type: 'Account Takeover',
      severity: 'high',
      status: 'resolved',
      reported_at: '2025-01-07 10:18:33',
      resolved_at: '2025-01-07 10:25:12',
      response_time: '7 minutes',
      description: 'Suspicious login from unusual location',
      action_taken: 'Account secured, user notified, MFA enabled'
    }
  ];

  // Compliance metrics
  const complianceData = [
    { category: 'GDPR Compliance', score: 99.2, target: 95, status: 'excellent' },
    { category: 'Data Protection', score: 97.8, target: 95, status: 'excellent' },
    { category: 'User Consent', score: 96.4, target: 90, status: 'good' },
    { category: 'Data Retention', score: 94.7, target: 90, status: 'good' },
    { category: 'Privacy Rights', score: 98.1, target: 95, status: 'excellent' },
    { category: 'Security Standards', score: 99.5, target: 95, status: 'excellent' }
  ];

  // Security performance by category
  const securityPerformance = [
    { name: 'Threat Detection', value: 95.3, color: '#10b981' },
    { name: 'User Safety', value: 97.8, color: '#3b82f6' },
    { name: 'Access Security', value: 92.1, color: '#8b5cf6' },
    { name: 'Data Protection', value: 98.7, color: '#f59e0b' },
    { name: 'Compliance', value: 99.2, color: '#ef4444' }
  ];

  // Recent security events
  const recentEvents = [
    {
      id: 1,
      type: 'threat_blocked',
      message: 'Fake profile attempt blocked',
      timestamp: '2025-01-07 14:30:15',
      severity: 'medium',
      details: 'AI detected suspicious profile creation pattern'
    },
    {
      id: 2,
      type: 'compliance_check',
      message: 'GDPR compliance verification completed',
      timestamp: '2025-01-07 14:15:42',
      severity: 'low',
      details: 'All data processing activities verified compliant'
    },
    {
      id: 3,
      type: 'security_alert',
      message: 'Unusual login pattern detected',
      timestamp: '2025-01-07 13:45:18',
      severity: 'high',
      details: 'Multiple failed login attempts from same IP'
    },
    {
      id: 4,
      type: 'incident_resolved',
      message: 'Harassment report resolved',
      timestamp: '2025-01-07 13:28:33',
      severity: 'medium',
      details: 'User banned, victim provided support resources'
    },
    {
      id: 5,
      type: 'system_update',
      message: 'Security rules updated',
      timestamp: '2025-01-07 12:15:07',
      severity: 'low',
      details: 'Enhanced detection rules for romance scams'
    }
  ];

  // Geographic threat distribution
  const threatDistribution = [
    { region: 'North America', threats: 456, percentage: 36.6 },
    { region: 'Europe', threats: 312, percentage: 25.0 },
    { region: 'Asia Pacific', threats: 289, percentage: 23.2 },
    { region: 'South America', threats: 123, percentage: 9.9 },
    { region: 'Africa', threats: 67, percentage: 5.3 }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'investigating': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'escalated': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'threat_blocked': return <Shield className="w-4 h-4 text-red-600" />;
      case 'compliance_check': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'security_alert': return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case 'incident_resolved': return <CheckCircle className="w-4 h-4 text-blue-600" />;
      case 'system_update': return <Settings className="w-4 h-4 text-purple-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getComplianceStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const generateReport = () => {
    console.log(`Generating ${reportType} report for ${dateRange}...`);
    // In a real app, this would generate and download a comprehensive security report
  };

  const exportData = () => {
    console.log('Exporting security analytics data...');
    // In a real app, this would export the current data view
  };

  const refreshData = () => {
    console.log('Refreshing security analytics data...');
    // In a real app, this would refresh the data from the backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <BarChart className="w-8 h-8 text-blue-600" />
              Security Analytics & Reporting
            </h1>
            <p className="text-gray-600">
              Comprehensive security analytics and reporting for dating platform protection
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1d">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="security">Security Report</option>
              <option value="compliance">Compliance Report</option>
              <option value="incidents">Incident Report</option>
              <option value="comprehensive">Comprehensive Report</option>
            </select>
            
            <button 
              onClick={refreshData}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            
            <button 
              onClick={exportData}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            
            <button 
              onClick={generateReport}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BarChart className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Security Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{securityMetrics.threat_detection.total_threats}</div>
              <div className="text-xs text-gray-500">Threats Detected</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Threat Detection</h3>
            <p className="text-sm text-gray-600">{securityMetrics.threat_detection.success_rate}% success rate</p>
            <p className="text-xs text-green-600">{securityMetrics.threat_detection.trend} from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{securityMetrics.user_safety.safety_score}%</div>
              <div className="text-xs text-gray-500">Safety Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Safety</h3>
            <p className="text-sm text-gray-600">{securityMetrics.user_safety.fake_profiles_detected} fake profiles blocked</p>
            <p className="text-xs text-green-600">{securityMetrics.user_safety.trend} from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{securityMetrics.compliance.gdpr_compliance}%</div>
              <div className="text-xs text-gray-500">GDPR Compliance</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Compliance</h3>
            <p className="text-sm text-gray-600">{securityMetrics.compliance.data_requests_fulfilled} requests fulfilled</p>
            <p className="text-xs text-green-600">{securityMetrics.compliance.trend} from last period</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{securityMetrics.access_security.mfa_adoption}%</div>
              <div className="text-xs text-gray-500">MFA Adoption</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Access Security</h3>
            <p className="text-sm text-gray-600">{securityMetrics.access_security.account_takeovers_prevented} takeovers prevented</p>
            <p className="text-xs text-green-600">{securityMetrics.access_security.trend} from last period</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Security Overview', icon: BarChart },
              { id: 'threats', name: 'Threat Analysis', icon: Shield },
              { id: 'incidents', name: 'Security Incidents', icon: AlertTriangle },
              { id: 'compliance', name: 'Compliance Metrics', icon: CheckCircle },
              { id: 'reports', name: 'Custom Reports', icon: Download }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
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
          {/* Security Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Security Performance</h3>
            <div className="space-y-4">
              {securityPerformance.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-semibold" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Security Events */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Recent Events
            </h3>
            <div className="space-y-3">
              {recentEvents.slice(0, 5).map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getEventTypeIcon(event.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{event.message}</p>
                      <p className="text-xs text-gray-600 mb-1">{event.details}</p>
                      <p className="text-xs text-gray-500">{event.timestamp}</p>
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
                <Download className="w-4 h-4" />
                Export Security Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <AlertTriangle className="w-4 h-4" />
                View Active Threats
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <CheckCircle className="w-4 h-4" />
                Compliance Dashboard
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Security Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Threat Detection Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Detection Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={threatTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="threats_detected" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Threats Detected" />
                    <Area type="monotone" dataKey="threats_blocked" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Threats Blocked" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Security Performance and Geographic Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Performance</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={securityPerformance}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {securityPerformance.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Distribution by Region</h3>
                  <div className="space-y-4">
                    {threatDistribution.map((region, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{region.region}</span>
                          <span className="font-semibold text-gray-900">
                            {region.threats} ({region.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${region.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'threats' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Analysis Details</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={threatTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="threats_detected" stroke="#ef4444" strokeWidth={2} name="Threats Detected" />
                    <Line type="monotone" dataKey="threats_blocked" stroke="#10b981" strokeWidth={2} name="Threats Blocked" />
                    <Line type="monotone" dataKey="fake_profiles" stroke="#f59e0b" strokeWidth={2} name="Fake Profiles" />
                    <Line type="monotone" dataKey="scam_attempts" stroke="#8b5cf6" strokeWidth={2} name="Scam Attempts" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Threat Categories</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium text-red-900">Fake Profiles</span>
                      <span className="font-bold text-red-600">89</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-900">Romance Scams</span>
                      <span className="font-bold text-orange-600">15</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium text-yellow-900">Harassment</span>
                      <span className="font-bold text-yellow-600">23</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-900">Data Breaches</span>
                      <span className="font-bold text-purple-600">3</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-900">Average Response</div>
                      <div className="text-2xl font-bold text-green-600">2.3 sec</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-900">Fastest Response</div>
                      <div className="text-2xl font-bold text-blue-600">0.8 sec</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">Success Rate</div>
                      <div className="text-2xl font-bold text-gray-600">95.3%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Threat Sources</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Automated Bots</span>
                      <span className="font-semibold text-gray-900">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Manual Attacks</span>
                      <span className="font-semibold text-gray-900">32%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Social Engineering</span>
                      <span className="font-semibold text-gray-900">18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Other</span>
                      <span className="font-semibold text-gray-900">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'incidents' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Incidents</h3>
              <div className="space-y-4">
                {safetyIncidents.map((incident) => (
                  <div key={incident.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{incident.id}: {incident.type}</h4>
                          <p className="text-sm text-gray-600">{incident.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">{incident.response_time}</div>
                        <div className="text-xs text-gray-500">response time</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Reported</div>
                        <div className="font-semibold text-gray-900">{incident.reported_at}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Resolved</div>
                        <div className="font-semibold text-gray-900">{incident.resolved_at || 'In Progress'}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Response Time</div>
                        <div className="font-semibold text-blue-600">{incident.response_time}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">Action Taken</div>
                      <div className="text-green-700">{incident.action_taken}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Metrics</h3>
                <div className="space-y-4">
                  {complianceData.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{item.category}</h4>
                            <p className="text-sm text-gray-600">Target: {item.target}%</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getComplianceStatusColor(item.status)}`}>
                            {item.score}%
                          </div>
                          <div className="text-xs text-gray-500">{item.status}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-green-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${(item.score / 100) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {item.score >= item.target ? '✓' : '⚠'} {item.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Requests</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-blue-900">Access Requests</span>
                      <span className="font-bold text-blue-600">89</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-900">Deletion Requests</span>
                      <span className="font-bold text-green-600">67</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-900">Portability Requests</span>
                      <span className="font-bold text-purple-600">23</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Average Response</span>
                      <span className="font-bold text-gray-600">18 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulatory Status</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">GDPR Compliance</div>
                      <div className="text-2xl font-bold text-green-600">99.2%</div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">CCPA Compliance</div>
                      <div className="text-2xl font-bold text-blue-600">97.8%</div>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="font-medium text-purple-900">SOC 2 Type II</div>
                      <div className="text-2xl font-bold text-purple-600">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Security Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Executive Security Summary</h4>
                    <p className="text-sm text-gray-600 mb-3">High-level security overview for executives</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Detailed Threat Analysis</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprehensive threat detection and response analysis</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Compliance Audit Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Complete compliance status and audit trail</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Incident Response Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Detailed incident analysis and response metrics</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">User Safety Report</h4>
                    <p className="text-sm text-gray-600 mb-3">User safety metrics and protection measures</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Custom Analytics Report</h4>
                    <p className="text-sm text-gray-600 mb-3">Customizable security analytics and metrics</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      Generate Report
                    </button>
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

export default SecurityAnalyticsReporting;

