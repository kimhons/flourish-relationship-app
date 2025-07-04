import React, { useState, useEffect } from 'react';
import { 
  Settings, CheckCircle, AlertTriangle, Clock, Zap,
  FileText, Globe, Shield, Eye, Cog, Play, Pause,
  BarChart, TrendingUp, Calendar, Download, Upload
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const AutomatedComplianceEngine = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRegulation, setSelectedRegulation] = useState('all');
  const [automationStatus, setAutomationStatus] = useState('active');
  const [selectedRule, setSelectedRule] = useState(null);

  // Automated compliance rules for dating app
  const complianceRules = [
    {
      id: 'RULE-001',
      name: 'GDPR Data Retention Enforcement',
      regulation: 'GDPR',
      category: 'data_retention',
      status: 'active',
      automation_level: 'full',
      description: 'Automatically delete user data after specified retention periods',
      trigger: 'User account inactive for 24 months',
      action: 'Delete personal data, anonymize analytics data',
      frequency: 'Daily',
      last_execution: '2025-01-07 02:00:00',
      next_execution: '2025-01-08 02:00:00',
      success_rate: 99.8,
      records_processed: 1247,
      compliance_impact: 'High',
      risk_mitigation: 'Prevents GDPR violations for data retention'
    },
    {
      id: 'RULE-002',
      name: 'Consent Withdrawal Processing',
      regulation: 'GDPR',
      category: 'consent_management',
      status: 'active',
      automation_level: 'full',
      description: 'Automatically process user consent withdrawal requests',
      trigger: 'User submits consent withdrawal request',
      action: 'Stop data processing, update consent records, notify systems',
      frequency: 'Real-time',
      last_execution: '2025-01-07 14:23:15',
      next_execution: 'Continuous',
      success_rate: 100.0,
      records_processed: 89,
      compliance_impact: 'Critical',
      risk_mitigation: 'Ensures immediate compliance with consent withdrawal'
    },
    {
      id: 'RULE-003',
      name: 'CCPA Data Access Request Fulfillment',
      regulation: 'CCPA',
      category: 'data_access',
      status: 'active',
      automation_level: 'partial',
      description: 'Automatically compile and deliver user data for access requests',
      trigger: 'CCPA data access request submitted',
      action: 'Compile user data, generate report, deliver to user',
      frequency: 'On-demand',
      last_execution: '2025-01-07 11:45:32',
      next_execution: 'On-demand',
      success_rate: 97.3,
      records_processed: 156,
      compliance_impact: 'High',
      risk_mitigation: 'Meets CCPA response time requirements'
    },
    {
      id: 'RULE-004',
      name: 'Cross-Border Transfer Validation',
      regulation: 'GDPR',
      category: 'data_transfer',
      status: 'active',
      automation_level: 'full',
      description: 'Validate and approve cross-border data transfers',
      trigger: 'Data transfer to non-adequate jurisdiction',
      action: 'Validate adequacy decision, check safeguards, approve/block transfer',
      frequency: 'Real-time',
      last_execution: '2025-01-07 13:12:47',
      next_execution: 'Continuous',
      success_rate: 98.9,
      records_processed: 2341,
      compliance_impact: 'Critical',
      risk_mitigation: 'Prevents unauthorized international data transfers'
    },
    {
      id: 'RULE-005',
      name: 'Privacy Notice Updates',
      regulation: 'All',
      category: 'privacy_notice',
      status: 'active',
      automation_level: 'partial',
      description: 'Automatically update privacy notices when data processing changes',
      trigger: 'New data processing activity detected',
      action: 'Generate privacy notice update, notify legal team, schedule user notification',
      frequency: 'Event-driven',
      last_execution: '2025-01-06 16:30:21',
      next_execution: 'Event-driven',
      success_rate: 95.7,
      records_processed: 23,
      compliance_impact: 'Medium',
      risk_mitigation: 'Maintains transparency in data processing'
    },
    {
      id: 'RULE-006',
      name: 'COPPA Age Verification Enforcement',
      regulation: 'COPPA',
      category: 'age_verification',
      status: 'active',
      automation_level: 'full',
      description: 'Automatically enforce age restrictions and parental consent requirements',
      trigger: 'User indicates age under 13',
      action: 'Block account creation, delete any collected data, require parental consent',
      frequency: 'Real-time',
      last_execution: '2025-01-07 09:18:33',
      next_execution: 'Continuous',
      success_rate: 100.0,
      records_processed: 12,
      compliance_impact: 'Critical',
      risk_mitigation: 'Prevents COPPA violations for underage users'
    },
    {
      id: 'RULE-007',
      name: 'Data Breach Notification Automation',
      regulation: 'GDPR',
      category: 'breach_notification',
      status: 'active',
      automation_level: 'partial',
      description: 'Automatically detect potential data breaches and initiate notification procedures',
      trigger: 'Unusual data access patterns detected',
      action: 'Assess breach severity, notify DPO, prepare regulatory notification',
      frequency: 'Real-time',
      last_execution: '2025-01-05 22:14:56',
      next_execution: 'Continuous',
      success_rate: 92.4,
      records_processed: 8,
      compliance_impact: 'Critical',
      risk_mitigation: 'Ensures timely breach notification compliance'
    },
    {
      id: 'RULE-008',
      name: 'Marketing Consent Validation',
      regulation: 'GDPR',
      category: 'marketing_consent',
      status: 'active',
      automation_level: 'full',
      description: 'Validate marketing consent before sending promotional communications',
      trigger: 'Marketing campaign scheduled',
      action: 'Check consent status, filter recipients, update campaign targeting',
      frequency: 'Pre-campaign',
      last_execution: '2025-01-07 08:00:00',
      next_execution: '2025-01-08 08:00:00',
      success_rate: 99.2,
      records_processed: 45678,
      compliance_impact: 'High',
      risk_mitigation: 'Prevents unauthorized marketing communications'
    }
  ];

  // Automation statistics
  const automationStats = {
    total_rules: 8,
    active_rules: 8,
    inactive_rules: 0,
    full_automation: 6,
    partial_automation: 2,
    avg_success_rate: 97.8,
    total_processed: 49554,
    compliance_score: 96.4
  };

  // Compliance automation trends
  const trendData = [
    { month: 'Jul', automated: 78, manual: 22, compliance_score: 89 },
    { month: 'Aug', automated: 82, manual: 18, compliance_score: 91 },
    { month: 'Sep', automated: 85, manual: 15, compliance_score: 93 },
    { month: 'Oct', automated: 89, manual: 11, compliance_score: 94 },
    { month: 'Nov', automated: 92, manual: 8, compliance_score: 95 },
    { month: 'Dec', automated: 95, manual: 5, compliance_score: 96 },
    { month: 'Jan', automated: 97, manual: 3, compliance_score: 96 }
  ];

  // Regulation coverage data
  const regulationCoverage = [
    { name: 'GDPR', automated: 95, manual: 5, color: '#3b82f6' },
    { name: 'CCPA', automated: 87, manual: 13, color: '#10b981' },
    { name: 'PIPEDA', automated: 92, manual: 8, color: '#f59e0b' },
    { name: 'LGPD', automated: 78, manual: 22, color: '#ef4444' },
    { name: 'COPPA', automated: 100, manual: 0, color: '#8b5cf6' }
  ];

  // Automation performance by category
  const categoryPerformance = [
    { category: 'Data Retention', success_rate: 99.8, volume: 1247, automation: 'Full' },
    { category: 'Consent Management', success_rate: 100.0, volume: 89, automation: 'Full' },
    { category: 'Data Access', success_rate: 97.3, volume: 156, automation: 'Partial' },
    { category: 'Data Transfer', success_rate: 98.9, volume: 2341, automation: 'Full' },
    { category: 'Privacy Notice', success_rate: 95.7, volume: 23, automation: 'Partial' },
    { category: 'Age Verification', success_rate: 100.0, volume: 12, automation: 'Full' },
    { category: 'Breach Notification', success_rate: 92.4, volume: 8, automation: 'Partial' },
    { category: 'Marketing Consent', success_rate: 99.2, volume: 45678, automation: 'Full' }
  ];

  // Recent automation activities
  const recentActivities = [
    {
      id: 1,
      timestamp: '2025-01-07 14:23:15',
      rule: 'Consent Withdrawal Processing',
      action: 'Processed consent withdrawal for user ID 12345',
      status: 'success',
      regulation: 'GDPR',
      impact: 'User data processing stopped within 2 minutes'
    },
    {
      id: 2,
      timestamp: '2025-01-07 13:12:47',
      rule: 'Cross-Border Transfer Validation',
      action: 'Validated data transfer to Canada for analytics processing',
      status: 'success',
      regulation: 'GDPR',
      impact: 'Transfer approved with adequate safeguards'
    },
    {
      id: 3,
      timestamp: '2025-01-07 11:45:32',
      rule: 'CCPA Data Access Request Fulfillment',
      action: 'Compiled and delivered user data package',
      status: 'success',
      regulation: 'CCPA',
      impact: 'Request fulfilled within 24 hours'
    },
    {
      id: 4,
      timestamp: '2025-01-07 09:18:33',
      rule: 'COPPA Age Verification Enforcement',
      action: 'Blocked account creation for underage user',
      status: 'success',
      regulation: 'COPPA',
      impact: 'Prevented COPPA violation, data deleted'
    },
    {
      id: 5,
      timestamp: '2025-01-07 08:00:00',
      rule: 'Marketing Consent Validation',
      action: 'Filtered marketing campaign recipients based on consent',
      status: 'success',
      regulation: 'GDPR',
      impact: '45,678 recipients validated, 234 removed'
    }
  ];

  const getFilteredRules = () => {
    if (selectedRegulation === 'all') {
      return complianceRules;
    }
    return complianceRules.filter(rule => rule.regulation.toLowerCase() === selectedRegulation);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAutomationLevelColor = (level) => {
    switch (level) {
      case 'full': return 'text-green-600 bg-green-100';
      case 'partial': return 'text-blue-600 bg-blue-100';
      case 'manual': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getComplianceImpactColor = (impact) => {
    switch (impact) {
      case 'Critical': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getActivityStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const toggleRule = (ruleId) => {
    console.log(`Toggling rule: ${ruleId}`);
    // In a real app, this would toggle the rule status
  };

  const editRule = (ruleId) => {
    console.log(`Editing rule: ${ruleId}`);
    // In a real app, this would open the rule editor
  };

  const exportAutomationReport = () => {
    console.log('Exporting automation report...');
    // In a real app, this would generate and download a report
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Cog className="w-8 h-8 text-blue-600" />
              Automated Compliance Engine
            </h1>
            <p className="text-gray-600">
              Intelligent automation for dating platform regulatory compliance
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Regulations</option>
              <option value="gdpr">GDPR</option>
              <option value="ccpa">CCPA</option>
              <option value="pipeda">PIPEDA</option>
              <option value="lgpd">LGPD</option>
              <option value="coppa">COPPA</option>
            </select>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Automation:</span>
              <button
                onClick={() => setAutomationStatus(automationStatus === 'active' ? 'paused' : 'active')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  automationStatus === 'active' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                {automationStatus === 'active' ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                {automationStatus === 'active' ? 'Active' : 'Paused'}
              </button>
            </div>
            
            <button 
              onClick={exportAutomationReport}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Settings className="w-4 h-4" />
              Configure Rules
            </button>
          </div>
        </div>
      </div>

      {/* Automation Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Cog className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{automationStats.active_rules}</div>
              <div className="text-xs text-gray-500">of {automationStats.total_rules}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Rules</h3>
            <p className="text-sm text-gray-600">Automated compliance rules</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{automationStats.avg_success_rate}%</div>
              <div className="text-xs text-gray-500">Success Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Automation Success</h3>
            <p className="text-sm text-gray-600">Average success rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{automationStats.total_processed.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Records</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Records Processed</h3>
            <p className="text-sm text-gray-600">Total automated actions</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600">{automationStats.compliance_score}%</div>
              <div className="text-xs text-gray-500">Compliance Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Compliance Score</h3>
            <p className="text-sm text-gray-600">Overall compliance rating</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart },
              { id: 'rules', name: 'Automation Rules', icon: Settings },
              { id: 'performance', name: 'Performance', icon: TrendingUp },
              { id: 'activities', name: 'Recent Activities', icon: Clock }
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
          {/* Automation Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Automation Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Full Automation</span>
                <span className="font-semibold text-green-600">{automationStats.full_automation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Partial Automation</span>
                <span className="font-semibold text-blue-600">{automationStats.partial_automation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Manual Process</span>
                <span className="font-semibold text-gray-600">0</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Automation Rate</span>
                  <span className="font-bold text-green-600">97%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: '97%' }}
                  />
                </div>
              </div>
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
                      {getActivityStatusIcon(activity.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.rule}</p>
                      <p className="text-xs text-gray-600 mb-1">{activity.action}</p>
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
                <Play className="w-4 h-4" />
                Run All Rules
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Create New Rule
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Configuration
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Import Rules
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Automation Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="automated" stroke="#10b981" strokeWidth={2} name="Automated %" />
                    <Line type="monotone" dataKey="manual" stroke="#ef4444" strokeWidth={2} name="Manual %" />
                    <Line type="monotone" dataKey="compliance_score" stroke="#3b82f6" strokeWidth={2} name="Compliance Score" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Regulation Coverage and Category Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Regulation Coverage</h3>
                  <div className="space-y-4">
                    {regulationCoverage.map((regulation, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{regulation.name}</span>
                          <span className="font-semibold">{regulation.automated}% automated</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ 
                              width: `${regulation.automated}%`,
                              backgroundColor: regulation.color
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Categories</h3>
                  <div className="space-y-4">
                    {categoryPerformance.slice(0, 5).map((category, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{category.category}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAutomationLevelColor(category.automation.toLowerCase())}`}>
                            {category.automation}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Success: {category.success_rate}%</span>
                          <span>Volume: {category.volume.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-6">
              {getFilteredRules().map((rule) => (
                <div key={rule.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{rule.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {rule.regulation}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(rule.status)}`}>
                        {rule.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAutomationLevelColor(rule.automation_level)}`}>
                        {rule.automation_level} automation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-600">
                        {rule.success_rate}% success
                      </span>
                      <span className={`text-sm font-semibold ${getComplianceImpactColor(rule.compliance_impact)}`}>
                        {rule.compliance_impact} impact
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{rule.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Trigger</div>
                      <div className="font-semibold text-gray-900 text-sm">{rule.trigger}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Frequency</div>
                      <div className="font-semibold text-gray-900">{rule.frequency}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Records Processed</div>
                      <div className="font-semibold text-blue-600">{rule.records_processed.toLocaleString()}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Execution</div>
                      <div className="font-semibold text-gray-900 text-sm">{rule.last_execution}</div>
                    </div>
                  </div>

                  {selectedRule === rule.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Automated Action</h4>
                          <p className="text-sm text-gray-600">{rule.action}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Risk Mitigation</h4>
                          <p className="text-sm text-gray-600">{rule.risk_mitigation}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="text-sm text-green-600">Success Rate</div>
                          <div className="text-xl font-bold text-green-700">{rule.success_rate}%</div>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="text-sm text-blue-600">Records Processed</div>
                          <div className="text-xl font-bold text-blue-700">{rule.records_processed.toLocaleString()}</div>
                        </div>
                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="text-sm text-purple-600">Next Execution</div>
                          <div className="text-sm font-bold text-purple-700">{rule.next_execution}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedRule(selectedRule === rule.id ? null : rule.id)}
                      className="flex items-center gap-2 px-3 py-1 text-blue-600 hover:text-blue-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedRule === rule.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => editRule(rule.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        <Settings className="w-3 h-3" />
                        Edit
                      </button>
                      <button 
                        onClick={() => toggleRule(rule.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          rule.status === 'active' 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {rule.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {rule.status === 'active' ? 'Pause' : 'Activate'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Performance Analysis</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={categoryPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="success_rate" fill="#10b981" name="Success Rate %" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">Average Success Rate</div>
                      <div className="text-2xl font-bold text-green-600">{automationStats.avg_success_rate}%</div>
                      <div className="text-sm text-green-700">Across all automation rules</div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">Total Records Processed</div>
                      <div className="text-2xl font-bold text-blue-600">{automationStats.total_processed.toLocaleString()}</div>
                      <div className="text-sm text-blue-700">This month</div>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="font-medium text-purple-900">Automation Coverage</div>
                      <div className="text-2xl font-bold text-purple-600">97%</div>
                      <div className="text-sm text-purple-700">Of compliance processes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficiency Gains</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Time Saved</span>
                      <span className="font-bold text-green-600">2,340 hours/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Cost Reduction</span>
                      <span className="font-bold text-green-600">$156,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Error Reduction</span>
                      <span className="font-bold text-green-600">89%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Response Time</span>
                      <span className="font-bold text-green-600">73% faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Automation Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {getActivityStatusIcon(activity.status)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{activity.rule}</h4>
                          <p className="text-sm text-gray-600 mb-1">{activity.action}</p>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {activity.regulation}
                            </span>
                            <span className="text-xs text-gray-500">{activity.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-7">
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        <strong>Impact:</strong> {activity.impact}
                      </p>
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

export default AutomatedComplianceEngine;

