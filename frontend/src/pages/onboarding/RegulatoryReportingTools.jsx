import React, { useState, useEffect } from 'react';
import { 
  FileText, Download, Upload, Calendar, Clock, CheckCircle,
  AlertTriangle, BarChart, PieChart, TrendingUp, Globe,
  Shield, User, Eye, Settings, Filter, Search
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const RegulatoryReportingTools = () => {
  const [selectedRegulation, setSelectedRegulation] = useState('gdpr');
  const [reportPeriod, setReportPeriod] = useState('quarterly');
  const [activeTab, setActiveTab] = useState('reports');
  const [autoGenerate, setAutoGenerate] = useState(true);

  // Regulatory frameworks for dating apps
  const regulations = [
    {
      id: 'gdpr',
      name: 'GDPR (EU)',
      description: 'General Data Protection Regulation',
      jurisdiction: 'European Union',
      requirements: [
        'Data Processing Records',
        'Consent Management Reports',
        'Data Breach Notifications',
        'Data Subject Rights Requests',
        'Privacy Impact Assessments'
      ],
      reporting_frequency: 'Annual + Incident-based',
      next_deadline: '2025-05-25',
      compliance_score: 98
    },
    {
      id: 'ccpa',
      name: 'CCPA (California)',
      description: 'California Consumer Privacy Act',
      jurisdiction: 'California, USA',
      requirements: [
        'Consumer Rights Requests',
        'Data Sales Disclosures',
        'Privacy Policy Updates',
        'Third-Party Data Sharing',
        'Opt-Out Mechanisms'
      ],
      reporting_frequency: 'Quarterly',
      next_deadline: '2025-04-01',
      compliance_score: 96
    },
    {
      id: 'pipeda',
      name: 'PIPEDA (Canada)',
      description: 'Personal Information Protection and Electronic Documents Act',
      jurisdiction: 'Canada',
      requirements: [
        'Privacy Breach Reports',
        'Consent Documentation',
        'Data Retention Policies',
        'Cross-Border Data Transfers',
        'Individual Access Requests'
      ],
      reporting_frequency: 'Annual',
      next_deadline: '2025-03-31',
      compliance_score: 94
    },
    {
      id: 'lgpd',
      name: 'LGPD (Brazil)',
      description: 'Lei Geral de Proteção de Dados',
      jurisdiction: 'Brazil',
      requirements: [
        'Data Processing Activities',
        'Consent Records',
        'Data Protection Officer Reports',
        'Security Incident Reports',
        'Data Subject Rights'
      ],
      reporting_frequency: 'Bi-annual',
      next_deadline: '2025-06-30',
      compliance_score: 87
    }
  ];

  // Generated reports
  const generatedReports = [
    {
      id: 'RPT-2025-001',
      regulation: 'GDPR',
      type: 'Quarterly Compliance Report',
      period: 'Q4 2024',
      generated_date: '2025-01-07',
      status: 'completed',
      file_size: '2.3 MB',
      pages: 45,
      submitted: true,
      submission_date: '2025-01-07'
    },
    {
      id: 'RPT-2025-002',
      regulation: 'CCPA',
      type: 'Consumer Rights Report',
      period: 'Q4 2024',
      generated_date: '2025-01-06',
      status: 'completed',
      file_size: '1.8 MB',
      pages: 32,
      submitted: true,
      submission_date: '2025-01-06'
    },
    {
      id: 'RPT-2025-003',
      regulation: 'PIPEDA',
      type: 'Annual Privacy Report',
      period: '2024',
      generated_date: '2025-01-05',
      status: 'in_progress',
      file_size: '3.1 MB',
      pages: 67,
      submitted: false,
      submission_date: null
    },
    {
      id: 'RPT-2025-004',
      regulation: 'GDPR',
      type: 'Data Breach Notification',
      period: 'Incident-based',
      generated_date: '2025-01-03',
      status: 'completed',
      file_size: '0.8 MB',
      pages: 12,
      submitted: true,
      submission_date: '2025-01-03'
    }
  ];

  // Compliance metrics for reporting
  const complianceMetrics = {
    gdpr: {
      data_subjects: 2456789,
      consent_rate: 94.2,
      data_requests: 1247,
      breach_incidents: 2,
      processing_activities: 23,
      retention_compliance: 98.7
    },
    ccpa: {
      california_users: 456123,
      opt_out_requests: 234,
      data_sales: 0,
      disclosure_requests: 89,
      deletion_requests: 156,
      response_time_avg: 12.3
    },
    pipeda: {
      canadian_users: 234567,
      privacy_complaints: 3,
      breach_reports: 1,
      access_requests: 67,
      correction_requests: 12,
      compliance_rate: 96.8
    },
    lgpd: {
      brazilian_users: 123456,
      consent_records: 123456,
      data_incidents: 1,
      subject_requests: 45,
      dpo_reports: 4,
      security_score: 94.5
    }
  };

  // Report templates
  const reportTemplates = [
    {
      id: 'gdpr_quarterly',
      name: 'GDPR Quarterly Report',
      regulation: 'GDPR',
      description: 'Comprehensive quarterly compliance report for GDPR',
      sections: [
        'Executive Summary',
        'Data Processing Activities',
        'Consent Management',
        'Data Subject Rights',
        'Security Measures',
        'Breach Incidents',
        'Compliance Metrics'
      ],
      auto_generate: true,
      last_generated: '2025-01-07'
    },
    {
      id: 'ccpa_consumer_rights',
      name: 'CCPA Consumer Rights Report',
      regulation: 'CCPA',
      description: 'Consumer privacy rights and requests summary',
      sections: [
        'Consumer Requests Summary',
        'Opt-Out Mechanisms',
        'Data Sales Disclosure',
        'Third-Party Sharing',
        'Response Times',
        'Compliance Metrics'
      ],
      auto_generate: true,
      last_generated: '2025-01-06'
    },
    {
      id: 'pipeda_annual',
      name: 'PIPEDA Annual Report',
      regulation: 'PIPEDA',
      description: 'Annual privacy compliance report for Canada',
      sections: [
        'Privacy Policy Updates',
        'Consent Practices',
        'Data Retention',
        'Cross-Border Transfers',
        'Individual Rights',
        'Breach Management'
      ],
      auto_generate: false,
      last_generated: '2024-12-31'
    }
  ];

  // Upcoming deadlines
  const upcomingDeadlines = [
    {
      regulation: 'PIPEDA Annual Report',
      deadline: '2025-03-31',
      days_remaining: 83,
      status: 'on_track',
      progress: 75
    },
    {
      regulation: 'CCPA Quarterly Report',
      deadline: '2025-04-01',
      days_remaining: 84,
      status: 'on_track',
      progress: 60
    },
    {
      regulation: 'GDPR Annual Review',
      deadline: '2025-05-25',
      days_remaining: 138,
      status: 'on_track',
      progress: 25
    },
    {
      regulation: 'LGPD Bi-annual Report',
      deadline: '2025-06-30',
      days_remaining: 174,
      status: 'on_track',
      progress: 15
    }
  ];

  // Data for charts
  const complianceScoreData = [
    { regulation: 'GDPR', score: 98, target: 95 },
    { regulation: 'CCPA', score: 96, target: 95 },
    { regulation: 'PIPEDA', score: 94, target: 95 },
    { regulation: 'LGPD', score: 87, target: 95 }
  ];

  const requestTrendData = [
    { month: 'Jul', gdpr: 89, ccpa: 23, pipeda: 12, lgpd: 8 },
    { month: 'Aug', gdpr: 95, ccpa: 28, pipeda: 15, lgpd: 10 },
    { month: 'Sep', gdpr: 102, ccpa: 31, pipeda: 18, lgpd: 12 },
    { month: 'Oct', gdpr: 118, ccpa: 35, pipeda: 21, lgpd: 15 },
    { month: 'Nov', gdpr: 134, ccpa: 42, pipeda: 25, lgpd: 18 },
    { month: 'Dec', gdpr: 156, ccpa: 48, pipeda: 29, lgpd: 22 },
    { month: 'Jan', gdpr: 142, ccpa: 45, pipeda: 27, lgpd: 20 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertTriangle className="w-4 h-4" />;
      case 'overdue': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getDeadlineColor = (daysRemaining) => {
    if (daysRemaining < 7) return 'text-red-600';
    if (daysRemaining < 30) return 'text-orange-600';
    if (daysRemaining < 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  const generateReport = (templateId) => {
    console.log(`Generating report for template: ${templateId}`);
    // In a real app, this would trigger report generation
    alert('Report generation started. You will be notified when complete.');
  };

  const downloadReport = (reportId) => {
    console.log(`Downloading report: ${reportId}`);
    // In a real app, this would download the report file
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-indigo-600" />
              Regulatory Reporting Tools
            </h1>
            <p className="text-gray-600">
              Generate compliance reports, track deadlines, and manage regulatory submissions
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {regulations.map(reg => (
                <option key={reg.id} value={reg.id}>{reg.name}</option>
              ))}
            </select>
            
            <select
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annual">Annual</option>
              <option value="custom">Custom Period</option>
            </select>
            
            <button
              onClick={() => setAutoGenerate(!autoGenerate)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoGenerate 
                  ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Auto-Generate: {autoGenerate ? 'ON' : 'OFF'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-4 h-4" />
              Export All
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {regulations.map((regulation) => (
          <div key={regulation.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-600">{regulation.compliance_score}%</div>
                <div className="text-xs text-gray-500">Compliance</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{regulation.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{regulation.jurisdiction}</p>
              <p className="text-xs text-gray-500">Next: {regulation.next_deadline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'reports', name: 'Generated Reports', icon: FileText },
              { id: 'templates', name: 'Report Templates', icon: Settings },
              { id: 'analytics', name: 'Compliance Analytics', icon: BarChart },
              { id: 'deadlines', name: 'Deadlines', icon: Calendar }
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
          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => generateReport('gdpr_quarterly')}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Generate GDPR Report
              </button>
              <button 
                onClick={() => generateReport('ccpa_consumer_rights')}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Generate CCPA Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Upload Custom Data
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar className="w-4 h-4" />
                Schedule Reports
              </button>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 text-sm">{deadline.regulation}</span>
                    <span className={`text-sm font-semibold ${getDeadlineColor(deadline.days_remaining)}`}>
                      {deadline.days_remaining} days
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{deadline.deadline}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${deadline.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{deadline.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulation Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">
              {regulations.find(r => r.id === selectedRegulation)?.name} Details
            </h3>
            {(() => {
              const reg = regulations.find(r => r.id === selectedRegulation);
              return reg ? (
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Description</div>
                    <div className="text-sm text-gray-600">{reg.description}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Jurisdiction</div>
                    <div className="text-sm text-gray-600">{reg.jurisdiction}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Reporting Frequency</div>
                    <div className="text-sm text-gray-600">{reg.reporting_frequency}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Requirements</div>
                    <div className="space-y-1 mt-1">
                      {reg.requirements.map((req, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'reports' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Reports</h3>
              <div className="space-y-4">
                {generatedReports.map((report) => (
                  <div key={report.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900">{report.type}</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {report.regulation}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(report.status)}`}>
                          {getStatusIcon(report.status)}
                          {report.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => downloadReport(report.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Period:</span>
                        <span className="ml-1 font-medium">{report.period}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Generated:</span>
                        <span className="ml-1 font-medium">{report.generated_date}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Size:</span>
                        <span className="ml-1 font-medium">{report.file_size}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Pages:</span>
                        <span className="ml-1 font-medium">{report.pages}</span>
                      </div>
                    </div>
                    {report.submitted && (
                      <div className="mt-2 text-sm text-green-600">
                        ✓ Submitted on {report.submission_date}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Templates</h3>
              <div className="space-y-4">
                {reportTemplates.map((template) => (
                  <div key={template.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{template.name}</h4>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {template.regulation}
                        </span>
                        <button 
                          onClick={() => generateReport(template.id)}
                          className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Sections:</div>
                      <div className="flex flex-wrap gap-1">
                        {template.sections.map((section, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {section}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500">
                          Auto-generate: 
                          <span className={`ml-1 font-medium ${template.auto_generate ? 'text-green-600' : 'text-gray-600'}`}>
                            {template.auto_generate ? 'Enabled' : 'Disabled'}
                          </span>
                        </span>
                        <span className="text-gray-500">
                          Last generated: <span className="font-medium">{template.last_generated}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <>
              {/* Compliance Scores */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Scores</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={complianceScoreData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="regulation" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#4f46e5" name="Current Score" />
                    <Bar dataKey="target" fill="#e5e7eb" name="Target Score" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>

              {/* Request Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Request Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={requestTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="gdpr" stroke="#4f46e5" strokeWidth={2} name="GDPR" />
                    <Line type="monotone" dataKey="ccpa" stroke="#10b981" strokeWidth={2} name="CCPA" />
                    <Line type="monotone" dataKey="pipeda" stroke="#f59e0b" strokeWidth={2} name="PIPEDA" />
                    <Line type="monotone" dataKey="lgpd" stroke="#ef4444" strokeWidth={2} name="LGPD" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {activeTab === 'deadlines' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reporting Deadlines</h3>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{deadline.regulation}</h4>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${getDeadlineColor(deadline.days_remaining)}`}>
                          {deadline.days_remaining} days remaining
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {deadline.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{deadline.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            deadline.progress >= 75 ? 'bg-green-500' :
                            deadline.progress >= 50 ? 'bg-yellow-500' :
                            deadline.progress >= 25 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${deadline.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Deadline: <span className="font-medium">{deadline.deadline}</span>
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

export default RegulatoryReportingTools;

