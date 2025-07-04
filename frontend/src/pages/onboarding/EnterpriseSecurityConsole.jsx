import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, Lock, Key, Eye, AlertTriangle,
  Settings, Activity, BarChart, Clock, CheckCircle,
  Globe, Server, Database, Network, Zap, Bell
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const EnterpriseSecurityConsole = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTenant, setSelectedTenant] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Multi-tenant security data for dating app enterprise
  const tenantData = [
    {
      id: 'tenant-001',
      name: 'Flourish Dating - North America',
      region: 'US/Canada',
      users: 2500000,
      security_score: 96.8,
      compliance_status: 'compliant',
      active_sessions: 145000,
      threat_level: 'low',
      last_audit: '2025-01-05',
      data_centers: ['us-east-1', 'us-west-2', 'ca-central-1'],
      regulations: ['GDPR', 'CCPA', 'PIPEDA']
    },
    {
      id: 'tenant-002',
      name: 'Flourish Dating - Europe',
      region: 'EU',
      users: 1800000,
      security_score: 98.2,
      compliance_status: 'compliant',
      active_sessions: 98000,
      threat_level: 'low',
      last_audit: '2025-01-03',
      data_centers: ['eu-west-1', 'eu-central-1'],
      regulations: ['GDPR', 'DPA']
    },
    {
      id: 'tenant-003',
      name: 'Flourish Dating - Asia Pacific',
      region: 'APAC',
      users: 3200000,
      security_score: 94.5,
      compliance_status: 'review_required',
      active_sessions: 187000,
      threat_level: 'medium',
      last_audit: '2025-01-01',
      data_centers: ['ap-southeast-1', 'ap-northeast-1'],
      regulations: ['PDPA', 'Privacy Act']
    },
    {
      id: 'tenant-004',
      name: 'Flourish Dating - Latin America',
      region: 'LATAM',
      users: 950000,
      security_score: 92.1,
      compliance_status: 'compliant',
      active_sessions: 67000,
      threat_level: 'low',
      last_audit: '2024-12-28',
      data_centers: ['sa-east-1'],
      regulations: ['LGPD', 'Local Privacy Laws']
    }
  ];

  // Enterprise security metrics
  const securityMetrics = {
    total_users: 8450000,
    active_sessions: 497000,
    avg_security_score: 95.4,
    compliance_rate: 87.5,
    threat_incidents: 12,
    resolved_incidents: 10,
    avg_response_time: '4.2 minutes',
    uptime: 99.97
  };

  // Security alerts across tenants
  const securityAlerts = [
    {
      id: 'ALERT-001',
      tenant: 'Flourish Dating - Asia Pacific',
      severity: 'high',
      type: 'unusual_login_pattern',
      title: 'Unusual Login Pattern Detected',
      description: 'Multiple failed login attempts from suspicious IP ranges',
      affected_users: 234,
      detected_time: '2025-01-07 14:23:15',
      status: 'investigating',
      region: 'APAC',
      threat_score: 7.8
    },
    {
      id: 'ALERT-002',
      tenant: 'Flourish Dating - North America',
      severity: 'medium',
      type: 'data_access_anomaly',
      title: 'Anomalous Data Access Pattern',
      description: 'Unusual data access patterns detected in user profile system',
      affected_users: 89,
      detected_time: '2025-01-07 13:45:32',
      status: 'monitoring',
      region: 'US/Canada',
      threat_score: 5.4
    },
    {
      id: 'ALERT-003',
      tenant: 'Flourish Dating - Europe',
      severity: 'low',
      type: 'compliance_drift',
      title: 'Minor Compliance Configuration Drift',
      description: 'GDPR data retention settings require minor adjustment',
      affected_users: 0,
      detected_time: '2025-01-07 12:18:47',
      status: 'resolved',
      region: 'EU',
      threat_score: 2.1
    },
    {
      id: 'ALERT-004',
      tenant: 'Flourish Dating - Latin America',
      severity: 'medium',
      type: 'api_rate_limit_exceeded',
      title: 'API Rate Limits Exceeded',
      description: 'Third-party integration exceeding rate limits',
      affected_users: 156,
      detected_time: '2025-01-07 11:32:19',
      status: 'mitigated',
      region: 'LATAM',
      threat_score: 4.7
    }
  ];

  // Access control statistics
  const accessControlData = [
    { role: 'Admin', users: 45, permissions: 'Full Access', last_review: '2025-01-01' },
    { role: 'Security Manager', users: 23, permissions: 'Security Operations', last_review: '2025-01-03' },
    { role: 'Compliance Officer', users: 12, permissions: 'Compliance Management', last_review: '2025-01-05' },
    { role: 'Data Analyst', users: 67, permissions: 'Analytics Access', last_review: '2025-01-02' },
    { role: 'Customer Support', users: 234, permissions: 'User Support', last_review: '2025-01-04' },
    { role: 'Developer', users: 89, permissions: 'Development Access', last_review: '2025-01-06' }
  ];

  // Security trends across regions
  const securityTrends = [
    { month: 'Jul', north_america: 96.2, europe: 97.8, apac: 93.1, latam: 91.5 },
    { month: 'Aug', north_america: 96.5, europe: 98.0, apac: 93.8, latam: 91.9 },
    { month: 'Sep', north_america: 96.7, europe: 98.1, apac: 94.2, latam: 92.3 },
    { month: 'Oct', north_america: 96.9, europe: 98.3, apac: 94.6, latam: 92.7 },
    { month: 'Nov', north_america: 96.6, europe: 98.2, apac: 94.3, latam: 92.4 },
    { month: 'Dec', north_america: 96.8, europe: 98.2, apac: 94.5, latam: 92.1 },
    { month: 'Jan', north_america: 96.8, europe: 98.2, apac: 94.5, latam: 92.1 }
  ];

  // Compliance status distribution
  const complianceData = [
    { name: 'Compliant', value: 75, color: '#10b981' },
    { name: 'Review Required', value: 12.5, color: '#f59e0b' },
    { name: 'Non-Compliant', value: 7.5, color: '#ef4444' },
    { name: 'Pending Audit', value: 5, color: '#6b7280' }
  ];

  // Infrastructure security status
  const infrastructureStatus = [
    {
      component: 'Load Balancers',
      status: 'healthy',
      security_score: 98.5,
      last_scan: '2025-01-07 12:00:00',
      vulnerabilities: 0,
      region: 'Global'
    },
    {
      component: 'Application Servers',
      status: 'healthy',
      security_score: 96.8,
      last_scan: '2025-01-07 11:30:00',
      vulnerabilities: 2,
      region: 'Global'
    },
    {
      component: 'Database Clusters',
      status: 'warning',
      security_score: 94.2,
      last_scan: '2025-01-07 10:45:00',
      vulnerabilities: 5,
      region: 'APAC'
    },
    {
      component: 'API Gateways',
      status: 'healthy',
      security_score: 97.3,
      last_scan: '2025-01-07 13:15:00',
      vulnerabilities: 1,
      region: 'Global'
    },
    {
      component: 'CDN Networks',
      status: 'healthy',
      security_score: 99.1,
      last_scan: '2025-01-07 14:00:00',
      vulnerabilities: 0,
      region: 'Global'
    }
  ];

  const getFilteredTenants = () => {
    if (selectedTenant === 'all') {
      return tenantData;
    }
    return tenantData.filter(tenant => tenant.id === selectedTenant);
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'review_required': return 'text-yellow-600 bg-yellow-100';
      case 'non_compliant': return 'text-red-600 bg-red-100';
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getAlertStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'investigating': return <Eye className="w-4 h-4 text-blue-600" />;
      case 'monitoring': return <Activity className="w-4 h-4 text-yellow-600" />;
      case 'mitigated': return <Shield className="w-4 h-4 text-purple-600" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-600" />;
    }
  };

  const escalateAlert = (alertId) => {
    console.log(`Escalating alert: ${alertId}`);
    // In a real app, this would escalate the alert
  };

  const resolveAlert = (alertId) => {
    console.log(`Resolving alert: ${alertId}`);
    // In a real app, this would resolve the alert
  };

  const auditTenant = (tenantId) => {
    console.log(`Starting security audit for tenant: ${tenantId}`);
    // In a real app, this would start a security audit
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              Enterprise Security Console
            </h1>
            <p className="text-gray-600">
              Centralized security management for multi-tenant dating platform
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedTenant}
              onChange={(e) => setSelectedTenant(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Tenants</option>
              {tenantData.map(tenant => (
                <option key={tenant.id} value={tenant.id}>{tenant.name}</option>
              ))}
            </select>
            
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Settings className="w-4 h-4" />
              Global Settings
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Eye className="w-4 h-4" />
              Security Audit
            </button>
          </div>
        </div>
      </div>

      {/* Enterprise Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{(securityMetrics.total_users / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-500">Total Users</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Global Users</h3>
            <p className="text-sm text-gray-600">Across all tenants</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{securityMetrics.avg_security_score}%</div>
              <div className="text-xs text-gray-500">Security Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Security Score</h3>
            <p className="text-sm text-gray-600">Average across tenants</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{(securityMetrics.active_sessions / 1000).toFixed(0)}K</div>
              <div className="text-xs text-gray-500">Active Sessions</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Sessions</h3>
            <p className="text-sm text-gray-600">Current user sessions</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600">{securityMetrics.compliance_rate}%</div>
              <div className="text-xs text-gray-500">Compliance Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Compliance</h3>
            <p className="text-sm text-gray-600">Global compliance rate</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart },
              { id: 'tenants', name: 'Tenant Management', icon: Globe },
              { id: 'access', name: 'Access Control', icon: Key },
              { id: 'infrastructure', name: 'Infrastructure', icon: Server },
              { id: 'alerts', name: 'Security Alerts', icon: Bell }
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
          {/* Security Alerts Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Active Alerts
            </h3>
            <div className="space-y-3">
              {securityAlerts.slice(0, 4).map((alert) => (
                <div key={alert.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getAlertStatusIcon(alert.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mb-1">{alert.title}</p>
                      <p className="text-xs text-gray-600 mb-1">{alert.tenant}</p>
                      <p className="text-xs text-gray-500">{alert.detected_time}</p>
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
                <Eye className="w-4 h-4" />
                Global Security Scan
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Update Security Policies
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="w-4 h-4" />
                Manage User Access
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Shield className="w-4 h-4" />
                Emergency Lockdown
              </button>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Uptime</span>
                <span className="font-semibold text-green-600">{securityMetrics.uptime}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="font-semibold text-blue-600">{securityMetrics.avg_response_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Incidents</span>
                <span className="font-semibold text-orange-600">{securityMetrics.threat_incidents - securityMetrics.resolved_incidents}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Health Score</span>
                  <span className="font-bold text-green-600">98/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: '98%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Security Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Score Trends by Region</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={securityTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="north_america" stroke="#3b82f6" strokeWidth={2} name="North America" />
                    <Line type="monotone" dataKey="europe" stroke="#10b981" strokeWidth={2} name="Europe" />
                    <Line type="monotone" dataKey="apac" stroke="#f59e0b" strokeWidth={2} name="Asia Pacific" />
                    <Line type="monotone" dataKey="latam" stroke="#ef4444" strokeWidth={2} name="Latin America" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Compliance and Tenant Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Status</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={complianceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {complianceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant Security Scores</h3>
                  <div className="space-y-4">
                    {tenantData.map((tenant, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{tenant.region}</span>
                          <span className="font-semibold">{tenant.security_score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${tenant.security_score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'tenants' && (
            <div className="space-y-6">
              {getFilteredTenants().map((tenant) => (
                <div key={tenant.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{tenant.name}</h3>
                        <p className="text-sm text-gray-600">{tenant.region}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tenant.compliance_status)}`}>
                        {tenant.compliance_status.replace('_', ' ')}
                      </span>
                      <span className={`text-sm font-semibold ${getThreatLevelColor(tenant.threat_level)}`}>
                        {tenant.threat_level} threat
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-green-600">
                        {tenant.security_score}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Users</div>
                      <div className="font-semibold text-gray-900">{(tenant.users / 1000000).toFixed(1)}M</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Active Sessions</div>
                      <div className="font-semibold text-blue-600">{(tenant.active_sessions / 1000).toFixed(0)}K</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Data Centers</div>
                      <div className="font-semibold text-gray-900">{tenant.data_centers.length}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Audit</div>
                      <div className="font-semibold text-gray-900">{tenant.last_audit}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Data Centers</h4>
                      <div className="flex flex-wrap gap-2">
                        {tenant.data_centers.map((dc, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {dc}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Regulations</h4>
                      <div className="flex flex-wrap gap-2">
                        {tenant.regulations.map((reg, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {reg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Security Score:</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${tenant.security_score}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold">{tenant.security_score}%</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => auditTenant(tenant.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        <Eye className="w-3 h-3" />
                        Audit
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Settings className="w-4 h-4" />
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'access' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Access Control Management</h3>
              <div className="space-y-4">
                {accessControlData.map((role, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Key className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{role.role}</h4>
                          <p className="text-sm text-gray-600">{role.permissions}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{role.users}</div>
                        <div className="text-xs text-gray-500">users</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Last Review: {role.last_review}</span>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          <Eye className="w-3 h-3" />
                          Review
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                          <Settings className="w-3 h-3" />
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'infrastructure' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infrastructure Security Status</h3>
              <div className="space-y-4">
                {infrastructureStatus.map((component, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Server className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{component.component}</h4>
                          <p className="text-sm text-gray-600">{component.region}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                          {component.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{component.security_score}%</div>
                        <div className="text-xs text-gray-500">security score</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">{component.security_score}%</div>
                        <div className="text-xs text-gray-600">Security Score</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-red-600">{component.vulnerabilities}</div>
                        <div className="text-xs text-gray-600">Vulnerabilities</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-sm font-bold text-gray-900">{component.last_scan}</div>
                        <div className="text-xs text-gray-600">Last Scan</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Security:</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${component.security_score}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          <Eye className="w-3 h-3" />
                          Scan
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          <Settings className="w-3 h-3" />
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-6">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
                        <p className="text-sm text-gray-600">{alert.tenant}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <div className="flex items-center gap-1">
                        {getAlertStatusIcon(alert.status)}
                        <span className="text-sm text-gray-600">{alert.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-red-600">
                        Risk: {alert.threat_score}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{alert.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Type</div>
                      <div className="font-semibold text-gray-900">{alert.type.replace('_', ' ')}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Affected Users</div>
                      <div className="font-semibold text-red-600">{alert.affected_users}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Region</div>
                      <div className="font-semibold text-gray-900">{alert.region}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Detected</div>
                      <div className="font-semibold text-gray-900">{alert.detected_time}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Threat Score:</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(alert.threat_score / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold">{alert.threat_score}/10</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => escalateAlert(alert.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        <Zap className="w-3 h-3" />
                        Escalate
                      </button>
                      <button 
                        onClick={() => resolveAlert(alert.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Resolve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSecurityConsole;

