import React, { useState, useEffect } from 'react';
import { 
  Shield, Zap, Settings, Play, Pause, CheckCircle,
  AlertTriangle, Clock, Eye, Network, Database, Users,
  BarChart, TrendingUp, Activity, Bell, Search, Filter
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const SecurityOrchestrationPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [workflowFilter, setWorkflowFilter] = useState('all');
  const [playbookFilter, setPlaybookFilter] = useState('all');

  // Security orchestration workflows for dating app
  const securityWorkflows = [
    {
      id: 'WF-001',
      name: 'Fake Profile Detection & Response',
      category: 'user_safety',
      status: 'active',
      trigger: 'AI Profile Analysis Alert',
      description: 'Automated detection and response to fake dating profiles',
      steps: [
        'Detect suspicious profile patterns',
        'Cross-reference with known fake profile database',
        'Analyze uploaded photos for authenticity',
        'Check device fingerprints and IP reputation',
        'Flag profile for manual review if confidence > 85%',
        'Automatically suspend if confidence > 95%',
        'Notify affected users and security team'
      ],
      execution_time: '2.3 minutes',
      success_rate: 94.7,
      executions_today: 23,
      last_execution: '2025-01-07 14:23:15',
      automation_level: 'full',
      tools_integrated: ['AI Analysis', 'Photo Verification', 'User Database', 'Notification System'],
      business_impact: 'Prevents user fraud and maintains platform trust'
    },
    {
      id: 'WF-002',
      name: 'Romance Scam Investigation',
      category: 'fraud_prevention',
      status: 'active',
      trigger: 'Financial Request Detection',
      description: 'Comprehensive investigation and response to romance scam attempts',
      steps: [
        'Detect financial solicitation in messages',
        'Analyze conversation patterns for scam indicators',
        'Check user behavior against scam profiles',
        'Investigate linked accounts and devices',
        'Gather evidence for potential law enforcement',
        'Suspend scammer accounts immediately',
        'Protect and educate potential victims'
      ],
      execution_time: '8.7 minutes',
      success_rate: 98.2,
      executions_today: 7,
      last_execution: '2025-01-07 13:45:32',
      automation_level: 'partial',
      tools_integrated: ['NLP Analysis', 'Behavioral Analytics', 'Evidence Collection', 'Legal Reporting'],
      business_impact: 'Protects users from financial fraud and legal liability'
    },
    {
      id: 'WF-003',
      name: 'Data Breach Response',
      category: 'incident_response',
      status: 'standby',
      trigger: 'Security Incident Detection',
      description: 'Rapid response to potential data security breaches',
      steps: [
        'Assess breach scope and severity',
        'Contain the security incident immediately',
        'Preserve evidence for forensic analysis',
        'Notify Data Protection Officer within 1 hour',
        'Prepare regulatory notifications (GDPR 72-hour rule)',
        'Coordinate with legal and PR teams',
        'Implement additional security measures',
        'Conduct post-incident review and improvements'
      ],
      execution_time: '15.2 minutes',
      success_rate: 96.8,
      executions_today: 0,
      last_execution: '2024-12-15 09:23:41',
      automation_level: 'partial',
      tools_integrated: ['SIEM', 'Forensics Tools', 'Legal System', 'Communication Platform'],
      business_impact: 'Minimizes breach impact and ensures regulatory compliance'
    },
    {
      id: 'WF-004',
      name: 'Harassment & Abuse Response',
      category: 'user_safety',
      status: 'active',
      trigger: 'Content Moderation Alert',
      description: 'Immediate response to harassment and abusive behavior',
      steps: [
        'Analyze reported content for policy violations',
        'Review user interaction history',
        'Assess threat level and escalation risk',
        'Implement immediate protective measures',
        'Document evidence for potential legal action',
        'Provide support resources to affected users',
        'Apply appropriate account sanctions',
        'Monitor for retaliation or continued harassment'
      ],
      execution_time: '5.8 minutes',
      success_rate: 91.4,
      executions_today: 15,
      last_execution: '2025-01-07 12:18:47',
      automation_level: 'partial',
      tools_integrated: ['Content Analysis', 'User Support', 'Legal Documentation', 'Safety Tools'],
      business_impact: 'Ensures user safety and platform reputation'
    },
    {
      id: 'WF-005',
      name: 'Account Takeover Prevention',
      category: 'access_security',
      status: 'active',
      trigger: 'Suspicious Login Detection',
      description: 'Prevent and respond to account takeover attempts',
      steps: [
        'Detect unusual login patterns and locations',
        'Verify device fingerprints and behavior',
        'Challenge suspicious access attempts',
        'Temporarily lock compromised accounts',
        'Notify legitimate users of security concerns',
        'Force password reset for affected accounts',
        'Enable additional security measures',
        'Monitor for continued attack attempts'
      ],
      execution_time: '3.1 minutes',
      success_rate: 97.6,
      executions_today: 12,
      last_execution: '2025-01-07 11:32:19',
      automation_level: 'full',
      tools_integrated: ['Login Analytics', 'Device Fingerprinting', 'MFA System', 'User Notifications'],
      business_impact: 'Protects user accounts and personal data'
    },
    {
      id: 'WF-006',
      name: 'Compliance Violation Response',
      category: 'compliance',
      status: 'active',
      trigger: 'Compliance Monitoring Alert',
      description: 'Automated response to regulatory compliance violations',
      steps: [
        'Identify specific compliance violation',
        'Assess impact and regulatory requirements',
        'Implement immediate corrective measures',
        'Document violation and response actions',
        'Notify compliance team and legal counsel',
        'Prepare regulatory reporting if required',
        'Update policies and procedures',
        'Schedule follow-up compliance review'
      ],
      execution_time: '12.4 minutes',
      success_rate: 89.3,
      executions_today: 3,
      last_execution: '2025-01-07 10:15:28',
      automation_level: 'partial',
      tools_integrated: ['Compliance Monitoring', 'Legal System', 'Policy Management', 'Reporting Tools'],
      business_impact: 'Maintains regulatory compliance and avoids penalties'
    }
  ];

  // Security playbooks
  const securityPlaybooks = [
    {
      id: 'PB-001',
      name: 'Dating App Security Incident Response',
      category: 'incident_response',
      workflows: 4,
      last_updated: '2025-01-05',
      effectiveness: 96.2,
      usage_count: 23,
      description: 'Comprehensive incident response procedures for dating platform security events'
    },
    {
      id: 'PB-002',
      name: 'User Safety & Protection',
      category: 'user_safety',
      workflows: 6,
      last_updated: '2025-01-03',
      effectiveness: 94.8,
      usage_count: 156,
      description: 'Automated protection workflows for user safety and abuse prevention'
    },
    {
      id: 'PB-003',
      name: 'Fraud Detection & Prevention',
      category: 'fraud_prevention',
      workflows: 5,
      last_updated: '2025-01-04',
      effectiveness: 97.1,
      usage_count: 89,
      description: 'Advanced fraud detection and automated response procedures'
    },
    {
      id: 'PB-004',
      name: 'Privacy & Compliance Automation',
      category: 'compliance',
      workflows: 7,
      last_updated: '2025-01-06',
      effectiveness: 92.5,
      usage_count: 67,
      description: 'Automated compliance monitoring and privacy protection workflows'
    }
  ];

  // Orchestration metrics
  const orchestrationMetrics = {
    total_workflows: 6,
    active_workflows: 5,
    avg_execution_time: '6.2 minutes',
    success_rate: 94.7,
    executions_today: 60,
    time_saved: '12.4 hours/day',
    incidents_prevented: 234,
    automation_coverage: 87.3
  };

  // Workflow execution trends
  const executionTrends = [
    { hour: '00:00', executions: 8, success_rate: 95.2, avg_time: 5.8 },
    { hour: '04:00', executions: 12, success_rate: 96.1, avg_time: 6.2 },
    { hour: '08:00', executions: 23, success_rate: 94.8, avg_time: 6.8 },
    { hour: '12:00', executions: 34, success_rate: 93.7, avg_time: 7.1 },
    { hour: '16:00', executions: 28, success_rate: 95.3, avg_time: 6.4 },
    { hour: '20:00', executions: 19, success_rate: 96.8, avg_time: 5.9 }
  ];

  // Tool integration status
  const toolIntegrations = [
    { tool: 'AI Analysis Engine', status: 'connected', workflows: 4, last_sync: '2025-01-07 14:30:00' },
    { tool: 'User Database', status: 'connected', workflows: 6, last_sync: '2025-01-07 14:29:45' },
    { tool: 'Notification System', status: 'connected', workflows: 5, last_sync: '2025-01-07 14:29:30' },
    { tool: 'Legal Documentation', status: 'connected', workflows: 3, last_sync: '2025-01-07 14:28:15' },
    { tool: 'Content Moderation', status: 'connected', workflows: 4, last_sync: '2025-01-07 14:27:00' },
    { tool: 'SIEM Platform', status: 'warning', workflows: 2, last_sync: '2025-01-07 13:45:22' },
    { tool: 'Compliance Monitor', status: 'connected', workflows: 3, last_sync: '2025-01-07 14:25:10' }
  ];

  // Recent workflow executions
  const recentExecutions = [
    {
      id: 1,
      workflow: 'Fake Profile Detection & Response',
      trigger: 'AI Profile Analysis Alert',
      status: 'completed',
      execution_time: '2.1 minutes',
      timestamp: '2025-01-07 14:23:15',
      result: 'Profile flagged for manual review - confidence 87%'
    },
    {
      id: 2,
      workflow: 'Romance Scam Investigation',
      trigger: 'Financial Request Detection',
      status: 'completed',
      execution_time: '9.2 minutes',
      timestamp: '2025-01-07 13:45:32',
      result: 'Scammer account suspended, victim protected'
    },
    {
      id: 3,
      workflow: 'Harassment & Abuse Response',
      trigger: 'Content Moderation Alert',
      status: 'completed',
      execution_time: '6.1 minutes',
      timestamp: '2025-01-07 12:18:47',
      result: 'Abusive user warned, content removed'
    },
    {
      id: 4,
      workflow: 'Account Takeover Prevention',
      trigger: 'Suspicious Login Detection',
      status: 'completed',
      execution_time: '2.8 minutes',
      timestamp: '2025-01-07 11:32:19',
      result: 'Account secured, user notified, MFA enabled'
    },
    {
      id: 5,
      workflow: 'Compliance Violation Response',
      trigger: 'Compliance Monitoring Alert',
      status: 'in_progress',
      execution_time: '8.3 minutes',
      timestamp: '2025-01-07 10:15:28',
      result: 'Corrective measures implemented, documentation in progress'
    }
  ];

  const getFilteredWorkflows = () => {
    let filtered = securityWorkflows;
    
    if (workflowFilter !== 'all') {
      filtered = filtered.filter(workflow => workflow.category === workflowFilter);
    }
    
    return filtered;
  };

  const getFilteredPlaybooks = () => {
    let filtered = securityPlaybooks;
    
    if (playbookFilter !== 'all') {
      filtered = filtered.filter(playbook => playbook.category === playbookFilter);
    }
    
    return filtered;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'standby': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'connected': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
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

  const getExecutionStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in_progress': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'failed': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const executeWorkflow = (workflowId) => {
    console.log(`Executing workflow: ${workflowId}`);
    // In a real app, this would trigger the workflow execution
  };

  const pauseWorkflow = (workflowId) => {
    console.log(`Pausing workflow: ${workflowId}`);
    // In a real app, this would pause the workflow
  };

  const editWorkflow = (workflowId) => {
    console.log(`Editing workflow: ${workflowId}`);
    // In a real app, this would open the workflow editor
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Zap className="w-8 h-8 text-indigo-600" />
              Security Orchestration Platform
            </h1>
            <p className="text-gray-600">
              Automated security workflow orchestration and incident response for dating platform
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={workflowFilter}
              onChange={(e) => setWorkflowFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="user_safety">User Safety</option>
              <option value="fraud_prevention">Fraud Prevention</option>
              <option value="incident_response">Incident Response</option>
              <option value="access_security">Access Security</option>
              <option value="compliance">Compliance</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Play className="w-4 h-4" />
              Run All Workflows
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Settings className="w-4 h-4" />
              Create Workflow
            </button>
          </div>
        </div>
      </div>

      {/* Orchestration Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{orchestrationMetrics.active_workflows}</div>
              <div className="text-xs text-gray-500">of {orchestrationMetrics.total_workflows}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Workflows</h3>
            <p className="text-sm text-gray-600">Automated security workflows</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{orchestrationMetrics.success_rate}%</div>
              <div className="text-xs text-gray-500">Success Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Execution Success</h3>
            <p className="text-sm text-gray-600">Workflow success rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{orchestrationMetrics.avg_execution_time}</div>
              <div className="text-xs text-gray-500">Avg Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Execution Time</h3>
            <p className="text-sm text-gray-600">Average workflow time</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{orchestrationMetrics.incidents_prevented}</div>
              <div className="text-xs text-gray-500">Incidents</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Incidents Prevented</h3>
            <p className="text-sm text-gray-600">Security incidents blocked</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart },
              { id: 'workflows', name: 'Security Workflows', icon: Zap },
              { id: 'playbooks', name: 'Security Playbooks', icon: Settings },
              { id: 'integrations', name: 'Tool Integrations', icon: Network },
              { id: 'executions', name: 'Recent Executions', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
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
          {/* Workflow Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Workflow Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active</span>
                <span className="font-semibold text-green-600">{orchestrationMetrics.active_workflows}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Standby</span>
                <span className="font-semibold text-yellow-600">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Executions Today</span>
                <span className="font-semibold text-blue-600">{orchestrationMetrics.executions_today}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Automation Coverage</span>
                  <span className="font-bold text-indigo-600">{orchestrationMetrics.automation_coverage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${orchestrationMetrics.automation_coverage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Executions Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Recent Executions
            </h3>
            <div className="space-y-3">
              {recentExecutions.slice(0, 4).map((execution) => (
                <div key={execution.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getExecutionStatusIcon(execution.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{execution.workflow}</p>
                      <p className="text-xs text-gray-600 mb-1">{execution.execution_time}</p>
                      <p className="text-xs text-gray-500">{execution.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Time Saved</span>
                <span className="font-semibold text-green-600">{orchestrationMetrics.time_saved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Response</span>
                <span className="font-semibold text-blue-600">{orchestrationMetrics.avg_execution_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">{orchestrationMetrics.success_rate}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Execution Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Execution Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={executionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="executions" stroke="#6366f1" strokeWidth={2} name="Executions" />
                    <Line type="monotone" dataKey="success_rate" stroke="#10b981" strokeWidth={2} name="Success Rate %" />
                    <Line type="monotone" dataKey="avg_time" stroke="#f59e0b" strokeWidth={2} name="Avg Time (min)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Workflow Categories and Tool Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Categories</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">User Safety</span>
                      <span className="font-bold text-green-600">2 workflows</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Fraud Prevention</span>
                      <span className="font-bold text-blue-600">1 workflow</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Incident Response</span>
                      <span className="font-bold text-purple-600">1 workflow</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Access Security</span>
                      <span className="font-bold text-orange-600">1 workflow</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Compliance</span>
                      <span className="font-bold text-red-600">1 workflow</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Integration Health</h3>
                  <div className="space-y-3">
                    {toolIntegrations.slice(0, 5).map((tool, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-1 bg-gray-100 rounded">
                            <Network className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="font-medium text-gray-900">{tool.tool}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                            {tool.status}
                          </span>
                          <span className="text-sm text-gray-600">{tool.workflows}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'workflows' && (
            <div className="space-y-6">
              {getFilteredWorkflows().map((workflow) => (
                <div key={workflow.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{workflow.name}</h3>
                        <p className="text-sm text-gray-600">Trigger: {workflow.trigger}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                        {workflow.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAutomationLevelColor(workflow.automation_level)}`}>
                        {workflow.automation_level} automation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-green-600">
                        {workflow.success_rate}% success
                      </span>
                      <span className="text-sm text-gray-600">
                        {workflow.executions_today} today
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{workflow.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Execution Time</div>
                      <div className="font-semibold text-gray-900">{workflow.execution_time}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Success Rate</div>
                      <div className="font-semibold text-green-600">{workflow.success_rate}%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Executions Today</div>
                      <div className="font-semibold text-blue-600">{workflow.executions_today}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Execution</div>
                      <div className="font-semibold text-gray-900 text-sm">{workflow.last_execution}</div>
                    </div>
                  </div>

                  {selectedWorkflow === workflow.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Workflow Steps</h4>
                          <ol className="text-sm text-gray-600 space-y-1">
                            {workflow.steps.map((step, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full text-xs flex items-center justify-center mt-0.5">
                                  {index + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Integrated Tools</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {workflow.tools_integrated.map((tool, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                {tool}
                              </span>
                            ))}
                          </div>
                          
                          <h4 className="font-medium text-gray-900 mb-2">Business Impact</h4>
                          <p className="text-sm text-gray-600">{workflow.business_impact}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedWorkflow(selectedWorkflow === workflow.id ? null : workflow.id)}
                      className="flex items-center gap-2 px-3 py-1 text-indigo-600 hover:text-indigo-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedWorkflow === workflow.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => editWorkflow(workflow.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        <Settings className="w-3 h-3" />
                        Edit
                      </button>
                      {workflow.status === 'active' ? (
                        <button 
                          onClick={() => pauseWorkflow(workflow.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                        >
                          <Pause className="w-4 h-4" />
                          Pause
                        </button>
                      ) : (
                        <button 
                          onClick={() => executeWorkflow(workflow.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          Execute
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'playbooks' && (
            <div className="space-y-6">
              {getFilteredPlaybooks().map((playbook) => (
                <div key={playbook.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{playbook.name}</h3>
                        <p className="text-sm text-gray-600">{playbook.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{playbook.effectiveness}%</div>
                      <div className="text-xs text-gray-500">effectiveness</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Workflows</div>
                      <div className="font-semibold text-gray-900">{playbook.workflows}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Usage Count</div>
                      <div className="font-semibold text-blue-600">{playbook.usage_count}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Effectiveness</div>
                      <div className="font-semibold text-green-600">{playbook.effectiveness}%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Updated</div>
                      <div className="font-semibold text-gray-900">{playbook.last_updated}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Effectiveness:</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${playbook.effectiveness}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold">{playbook.effectiveness}%</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <Settings className="w-4 h-4" />
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tool Integration Status</h3>
              <div className="space-y-4">
                {toolIntegrations.map((tool, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Network className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{tool.tool}</h4>
                          <p className="text-sm text-gray-600">Used in {tool.workflows} workflows</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                          {tool.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Last Sync</div>
                        <div className="text-sm font-semibold text-gray-900">{tool.last_sync}</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Workflows: {tool.workflows}</span>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          <Settings className="w-3 h-3" />
                          Configure
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          <Activity className="w-3 h-3" />
                          Test
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'executions' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Workflow Executions</h3>
              <div className="space-y-4">
                {recentExecutions.map((execution) => (
                  <div key={execution.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {getExecutionStatusIcon(execution.status)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{execution.workflow}</h4>
                          <p className="text-sm text-gray-600 mb-1">Trigger: {execution.trigger}</p>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(execution.status)}`}>
                              {execution.status}
                            </span>
                            <span className="text-xs text-gray-500">{execution.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">{execution.execution_time}</div>
                        <div className="text-xs text-gray-500">execution time</div>
                      </div>
                    </div>
                    <div className="pl-7">
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        <strong>Result:</strong> {execution.result}
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

export default SecurityOrchestrationPlatform;

