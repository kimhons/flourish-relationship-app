import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Shield, CheckCircle, AlertTriangle, XCircle, Clock,
  FileText, Users, Globe, Eye, Download, Upload,
  Settings, Bell, Calendar, TrendingUp, TrendingDown
} from 'lucide-react';

const ComplianceManagementDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [complianceView, setComplianceView] = useState('overview');
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [autoReporting, setAutoReporting] = useState(true);

  // Compliance status by regulation
  const complianceStatus = [
    {
      regulation: 'GDPR (EU)',
      status: 'compliant',
      score: 98,
      last_audit: '2024-12-15',
      next_review: '2025-03-15',
      requirements_met: 47,
      total_requirements: 48,
      risk_level: 'low'
    },
    {
      regulation: 'CCPA (California)',
      status: 'compliant',
      score: 96,
      last_audit: '2024-11-20',
      next_review: '2025-02-20',
      requirements_met: 23,
      total_requirements: 24,
      risk_level: 'low'
    },
    {
      regulation: 'PIPEDA (Canada)',
      status: 'compliant',
      score: 94,
      last_audit: '2024-10-10',
      next_review: '2025-01-10',
      requirements_met: 18,
      total_requirements: 19,
      risk_level: 'medium'
    },
    {
      regulation: 'LGPD (Brazil)',
      status: 'in_progress',
      score: 87,
      last_audit: '2024-09-05',
      next_review: '2025-01-05',
      requirements_met: 15,
      total_requirements: 18,
      risk_level: 'medium'
    },
    {
      regulation: 'PDPA (Singapore)',
      status: 'pending',
      score: 72,
      last_audit: '2024-08-01',
      next_review: '2024-12-01',
      requirements_met: 12,
      total_requirements: 17,
      risk_level: 'high'
    }
  ];

  // Compliance metrics
  const complianceMetrics = [
    {
      metric: 'Overall Compliance',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      description: 'Across all regulations'
    },
    {
      metric: 'Active Audits',
      value: '3',
      change: '+1',
      trend: 'up',
      description: 'In progress'
    },
    {
      metric: 'Pending Actions',
      value: '12',
      change: '-5',
      trend: 'down',
      description: 'Require attention'
    },
    {
      metric: 'Risk Score',
      value: '2.3/10',
      change: '-0.4',
      trend: 'down',
      description: 'Lower is better'
    }
  ];

  // User data protection compliance
  const dataProtectionCompliance = [
    {
      category: 'Data Collection',
      requirements: [
        { item: 'Explicit consent for profile data', status: 'compliant', priority: 'high' },
        { item: 'Clear purpose limitation', status: 'compliant', priority: 'high' },
        { item: 'Data minimization practices', status: 'compliant', priority: 'medium' },
        { item: 'Age verification (13+ requirement)', status: 'compliant', priority: 'high' }
      ]
    },
    {
      category: 'Data Processing',
      requirements: [
        { item: 'Lawful basis for matching algorithms', status: 'compliant', priority: 'high' },
        { item: 'Automated decision-making transparency', status: 'in_progress', priority: 'high' },
        { item: 'Data accuracy maintenance', status: 'compliant', priority: 'medium' },
        { item: 'Processing limitation compliance', status: 'compliant', priority: 'medium' }
      ]
    },
    {
      category: 'Data Storage',
      requirements: [
        { item: 'Secure data encryption at rest', status: 'compliant', priority: 'high' },
        { item: 'Data retention policy enforcement', status: 'compliant', priority: 'high' },
        { item: 'Geographic data residency', status: 'compliant', priority: 'medium' },
        { item: 'Backup and recovery procedures', status: 'compliant', priority: 'medium' }
      ]
    },
    {
      category: 'User Rights',
      requirements: [
        { item: 'Right to access personal data', status: 'compliant', priority: 'high' },
        { item: 'Right to data portability', status: 'compliant', priority: 'high' },
        { item: 'Right to erasure (delete account)', status: 'compliant', priority: 'high' },
        { item: 'Right to rectification', status: 'compliant', priority: 'medium' }
      ]
    }
  ];

  // Compliance timeline
  const complianceTimeline = [
    { month: 'Jul', gdpr: 96, ccpa: 94, pipeda: 92, lgpd: 85, pdpa: 68 },
    { month: 'Aug', gdpr: 97, ccpa: 95, pipeda: 93, lgpd: 86, pdpa: 70 },
    { month: 'Sep', gdpr: 97, ccpa: 95, pipeda: 94, lgpd: 87, pdpa: 71 },
    { month: 'Oct', gdpr: 98, ccpa: 96, pipeda: 94, lgpd: 87, pdpa: 72 },
    { month: 'Nov', gdpr: 98, ccpa: 96, pipeda: 94, lgpd: 87, pdpa: 72 },
    { month: 'Dec', gdpr: 98, ccpa: 96, pipeda: 94, lgpd: 87, pdpa: 72 },
    { month: 'Jan', gdpr: 98, ccpa: 96, pipeda: 94, lgpd: 87, pdpa: 72 }
  ];

  // Upcoming compliance deadlines
  const upcomingDeadlines = [
    {
      regulation: 'GDPR Annual Review',
      deadline: '2025-03-15',
      days_remaining: 67,
      priority: 'medium',
      status: 'on_track',
      description: 'Annual compliance assessment and documentation update'
    },
    {
      regulation: 'CCPA Quarterly Report',
      deadline: '2025-02-20',
      days_remaining: 44,
      priority: 'high',
      status: 'on_track',
      description: 'Consumer privacy rights quarterly reporting'
    },
    {
      regulation: 'PIPEDA Policy Update',
      deadline: '2025-01-10',
      days_remaining: 3,
      priority: 'urgent',
      status: 'at_risk',
      description: 'Privacy policy updates for Canadian compliance'
    },
    {
      regulation: 'LGPD Implementation',
      deadline: '2025-01-05',
      days_remaining: -2,
      priority: 'critical',
      status: 'overdue',
      description: 'Complete Brazilian data protection law compliance'
    }
  ];

  // Compliance training status
  const trainingStatus = [
    { department: 'Engineering', completed: 45, total: 48, percentage: 94 },
    { department: 'Product', completed: 12, total: 12, percentage: 100 },
    { department: 'Customer Support', completed: 23, total: 25, percentage: 92 },
    { department: 'Marketing', completed: 8, total: 10, percentage: 80 },
    { department: 'Legal', completed: 5, total: 5, percentage: 100 },
    { department: 'Management', completed: 7, total: 8, percentage: 88 }
  ];

  // Recent compliance activities
  const recentActivities = [
    {
      id: 1,
      type: 'audit_completed',
      title: 'GDPR Compliance Audit Completed',
      description: 'Annual GDPR compliance audit completed with 98% score',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'policy_updated',
      title: 'Privacy Policy Updated',
      description: 'Privacy policy updated to reflect new data processing practices',
      timestamp: '1 day ago',
      status: 'info'
    },
    {
      id: 3,
      type: 'training_completed',
      title: 'Team Training Session',
      description: 'Engineering team completed CCPA compliance training',
      timestamp: '3 days ago',
      status: 'success'
    },
    {
      id: 4,
      type: 'deadline_approaching',
      title: 'PIPEDA Deadline Approaching',
      description: 'PIPEDA policy update deadline in 3 days',
      timestamp: '5 days ago',
      status: 'warning'
    }
  ];

  // Compliance risk assessment
  const riskAssessment = [
    {
      risk: 'Data Breach Impact',
      current_score: 3,
      target_score: 2,
      mitigation: 'Enhanced encryption and access controls',
      timeline: '2 months'
    },
    {
      risk: 'Regulatory Changes',
      current_score: 4,
      target_score: 2,
      mitigation: 'Automated compliance monitoring system',
      timeline: '3 months'
    },
    {
      risk: 'Cross-Border Data Transfer',
      current_score: 2,
      target_score: 1,
      mitigation: 'Standard contractual clauses implementation',
      timeline: '1 month'
    },
    {
      risk: 'User Consent Management',
      current_score: 2,
      target_score: 1,
      mitigation: 'Enhanced consent tracking system',
      timeline: '6 weeks'
    }
  ];

  useEffect(() => {
    // Simulate real-time compliance monitoring
    const interval = setInterval(() => {
      console.log('Updating compliance metrics...');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': case 'success': case 'on_track': return 'text-green-600 bg-green-100';
      case 'in_progress': case 'info': case 'at_risk': return 'text-yellow-600 bg-yellow-100';
      case 'pending': case 'warning': return 'text-orange-600 bg-orange-100';
      case 'overdue': case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'compliant': case 'success': case 'on_track': return <CheckCircle className="w-4 h-4" />;
      case 'in_progress': case 'info': case 'at_risk': return <Clock className="w-4 h-4" />;
      case 'pending': case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'overdue': case 'critical': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': case 'urgent': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (score) => {
    if (score <= 2) return 'text-green-600';
    if (score <= 4) return 'text-yellow-600';
    if (score <= 6) return 'text-orange-600';
    return 'text-red-600';
  };

  const getTrainingColor = (percentage) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-blue-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              Compliance Management Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor and manage regulatory compliance for dating app operations across global markets
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="global">Global View</option>
              <option value="eu">European Union</option>
              <option value="na">North America</option>
              <option value="apac">Asia Pacific</option>
              <option value="latam">Latin America</option>
            </select>
            
            <button
              onClick={() => setAlertsEnabled(!alertsEnabled)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                alertsEnabled 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Bell className="w-4 h-4" />
              Alerts: {alertsEnabled ? 'ON' : 'OFF'}
            </button>
            
            <button
              onClick={() => setAutoReporting(!autoReporting)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoReporting 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              Auto-Report: {autoReporting ? 'ON' : 'OFF'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {complianceMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
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

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'regulations', name: 'Regulations', icon: FileText },
              { id: 'deadlines', name: 'Deadlines', icon: Calendar },
              { id: 'training', name: 'Training', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setComplianceView(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  complianceView === tab.id
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
          {/* Compliance Status Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Compliance Status</h3>
            <div className="space-y-3">
              {complianceStatus.map((regulation, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{regulation.regulation}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(regulation.status)}`}>
                      {getStatusIcon(regulation.status)}
                      {regulation.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Score: <span className="font-semibold text-blue-600">{regulation.score}%</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {regulation.requirements_met}/{regulation.total_requirements} requirements met
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${regulation.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              {upcomingDeadlines.slice(0, 4).map((deadline) => (
                <div key={deadline.regulation} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 text-sm">{deadline.regulation}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                      {deadline.priority}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{deadline.deadline}</div>
                  <div className={`text-xs font-semibold ${
                    deadline.days_remaining < 0 ? 'text-red-600' :
                    deadline.days_remaining < 7 ? 'text-orange-600' :
                    deadline.days_remaining < 30 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {deadline.days_remaining < 0 
                      ? `${Math.abs(deadline.days_remaining)} days overdue`
                      : `${deadline.days_remaining} days remaining`
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className={`p-1 rounded-full ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 mb-1">{activity.title}</p>
                      <p className="text-xs text-gray-600 mb-1">{activity.description}</p>
                      <p className="text-xs text-gray-500">{activity.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {complianceView === 'overview' && (
            <>
              {/* Compliance Timeline */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Score Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={complianceTimeline}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gdpr" stroke="#3b82f6" strokeWidth={2} name="GDPR" />
                    <Line type="monotone" dataKey="ccpa" stroke="#10b981" strokeWidth={2} name="CCPA" />
                    <Line type="monotone" dataKey="pipeda" stroke="#f59e0b" strokeWidth={2} name="PIPEDA" />
                    <Line type="monotone" dataKey="lgpd" stroke="#8b5cf6" strokeWidth={2} name="LGPD" />
                    <Line type="monotone" dataKey="pdpa" stroke="#ef4444" strokeWidth={2} name="PDPA" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Risk Assessment */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Risk Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Current Score</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Target Score</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Mitigation</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riskAssessment.map((risk, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{risk.risk}</td>
                          <td className="py-3 px-4">
                            <span className={`font-semibold ${getRiskColor(risk.current_score)}`}>
                              {risk.current_score}/10
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`font-semibold ${getRiskColor(risk.target_score)}`}>
                              {risk.target_score}/10
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{risk.mitigation}</td>
                          <td className="py-3 px-4 text-blue-600 font-semibold">{risk.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {complianceView === 'regulations' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Protection Compliance</h3>
              <div className="space-y-6">
                {dataProtectionCompliance.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 mb-3">{category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="p-3 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900">{req.item}</span>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(req.priority)}`}>
                                {req.priority}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(req.status)}`}>
                                {getStatusIcon(req.status)}
                                {req.status.replace('_', ' ')}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {complianceView === 'deadlines' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Deadlines</h3>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{deadline.regulation}</h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                          {deadline.priority}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(deadline.status)}`}>
                          {getStatusIcon(deadline.status)}
                          {deadline.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{deadline.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Deadline: {deadline.deadline}</span>
                      <span className={`text-sm font-semibold ${
                        deadline.days_remaining < 0 ? 'text-red-600' :
                        deadline.days_remaining < 7 ? 'text-orange-600' :
                        deadline.days_remaining < 30 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {deadline.days_remaining < 0 
                          ? `${Math.abs(deadline.days_remaining)} days overdue`
                          : `${deadline.days_remaining} days remaining`
                        }
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {complianceView === 'training' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Training Status</h3>
              <div className="space-y-4">
                {trainingStatus.map((dept, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{dept.department}</h4>
                      <span className={`text-lg font-bold ${getTrainingColor(dept.percentage)}`}>
                        {dept.percentage}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        {dept.completed}/{dept.total} employees completed
                      </span>
                      <span className="text-sm text-gray-600">
                        {dept.total - dept.completed} remaining
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          dept.percentage >= 95 ? 'bg-green-500' :
                          dept.percentage >= 85 ? 'bg-blue-500' :
                          dept.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${dept.percentage}%` }}
                      />
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

export default ComplianceManagementDashboard;

