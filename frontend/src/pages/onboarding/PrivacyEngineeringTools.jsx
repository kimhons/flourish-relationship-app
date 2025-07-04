import React, { useState, useEffect } from 'react';
import { 
  Shield, Eye, Lock, FileText, Settings, CheckCircle,
  AlertTriangle, Users, Database, Network, Zap, Search,
  Download, Upload, Calendar, Clock, BarChart, TrendingUp
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const PrivacyEngineeringTools = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDataFlow, setSelectedDataFlow] = useState(null);
  const [privacyAssessmentFilter, setPrivacyAssessmentFilter] = useState('all');
  const [selectedPIA, setSelectedPIA] = useState(null);

  // Data flow mapping for dating app
  const dataFlows = [
    {
      id: 'FLOW-001',
      name: 'User Registration Flow',
      source: 'Mobile App',
      destination: 'User Database',
      data_types: ['Personal Info', 'Email', 'Phone', 'Location'],
      purpose: 'Account Creation',
      legal_basis: 'Consent',
      retention_period: '24 months after account deletion',
      encryption: 'AES-256',
      privacy_risk: 'Medium',
      compliance_status: 'Compliant',
      last_reviewed: '2025-01-05',
      data_volume: '50,000 records/day',
      cross_border: false,
      third_parties: []
    },
    {
      id: 'FLOW-002',
      name: 'Photo Upload & Processing',
      source: 'Mobile App',
      destination: 'Media Storage + AI Analysis',
      data_types: ['Photos', 'Facial Features', 'Metadata'],
      purpose: 'Profile Display & Verification',
      legal_basis: 'Consent',
      retention_period: '12 months after deletion',
      encryption: 'AES-256',
      privacy_risk: 'High',
      compliance_status: 'Review Required',
      last_reviewed: '2025-01-03',
      data_volume: '125,000 photos/day',
      cross_border: true,
      third_parties: ['AWS Rekognition', 'Cloudinary']
    },
    {
      id: 'FLOW-003',
      name: 'Matching Algorithm Data',
      source: 'User Interactions',
      destination: 'Analytics Database',
      data_types: ['Preferences', 'Behavior', 'Interactions'],
      purpose: 'Matching Optimization',
      legal_basis: 'Legitimate Interest',
      retention_period: '36 months',
      encryption: 'AES-256',
      privacy_risk: 'Medium',
      compliance_status: 'Compliant',
      last_reviewed: '2025-01-04',
      data_volume: '2.5M interactions/day',
      cross_border: false,
      third_parties: []
    },
    {
      id: 'FLOW-004',
      name: 'Payment Processing',
      source: 'Payment Form',
      destination: 'Payment Processor',
      data_types: ['Payment Info', 'Billing Address'],
      purpose: 'Subscription Management',
      legal_basis: 'Contract',
      retention_period: '7 years (legal requirement)',
      encryption: 'PCI DSS Compliant',
      privacy_risk: 'High',
      compliance_status: 'Compliant',
      last_reviewed: '2025-01-06',
      data_volume: '15,000 transactions/day',
      cross_border: true,
      third_parties: ['Stripe', 'PayPal']
    },
    {
      id: 'FLOW-005',
      name: 'Location Tracking',
      source: 'Mobile App GPS',
      destination: 'Location Database',
      data_types: ['GPS Coordinates', 'City/Region'],
      purpose: 'Distance-based Matching',
      legal_basis: 'Consent',
      retention_period: '30 days',
      encryption: 'AES-256',
      privacy_risk: 'High',
      compliance_status: 'Compliant',
      last_reviewed: '2025-01-02',
      data_volume: '500,000 updates/day',
      cross_border: false,
      third_parties: []
    },
    {
      id: 'FLOW-006',
      name: 'Marketing Communications',
      source: 'User Preferences',
      destination: 'Email Service Provider',
      data_types: ['Email', 'Preferences', 'Behavior'],
      purpose: 'Marketing & Engagement',
      legal_basis: 'Consent',
      retention_period: 'Until consent withdrawn',
      encryption: 'TLS 1.3',
      privacy_risk: 'Low',
      compliance_status: 'Compliant',
      last_reviewed: '2025-01-07',
      data_volume: '100,000 emails/day',
      cross_border: true,
      third_parties: ['SendGrid', 'Mailchimp']
    }
  ];

  // Privacy Impact Assessments
  const privacyAssessments = [
    {
      id: 'PIA-001',
      title: 'AI-Powered Matching Algorithm Enhancement',
      status: 'completed',
      risk_level: 'high',
      completion_date: '2025-01-05',
      reviewer: 'Privacy Team',
      data_types: ['Behavioral Data', 'Preferences', 'Interaction Patterns'],
      privacy_risks: [
        'Potential for discriminatory matching',
        'Inference of sensitive characteristics',
        'Behavioral profiling concerns'
      ],
      mitigation_measures: [
        'Bias testing and monitoring',
        'Algorithmic transparency measures',
        'User control over matching factors'
      ],
      compliance_impact: 'GDPR Article 22 considerations',
      recommendation: 'Approved with conditions'
    },
    {
      id: 'PIA-002',
      title: 'Enhanced Photo Verification System',
      status: 'in_progress',
      risk_level: 'high',
      completion_date: null,
      reviewer: 'Privacy Team',
      data_types: ['Facial Recognition Data', 'Biometric Templates'],
      privacy_risks: [
        'Biometric data processing',
        'Potential for misidentification',
        'Data breach impact amplification'
      ],
      mitigation_measures: [
        'Minimal data retention',
        'Strong encryption standards',
        'User consent mechanisms'
      ],
      compliance_impact: 'GDPR Article 9 special category data',
      recommendation: 'Under review'
    },
    {
      id: 'PIA-003',
      title: 'Cross-Border Data Transfer Optimization',
      status: 'pending',
      risk_level: 'medium',
      completion_date: null,
      reviewer: 'Legal Team',
      data_types: ['User Profiles', 'Messages', 'Analytics Data'],
      privacy_risks: [
        'Varying international privacy laws',
        'Data sovereignty concerns',
        'Transfer mechanism adequacy'
      ],
      mitigation_measures: [
        'Standard Contractual Clauses',
        'Data localization where required',
        'Transfer impact assessments'
      ],
      compliance_impact: 'GDPR Chapter V transfer requirements',
      recommendation: 'Assessment required'
    },
    {
      id: 'PIA-004',
      title: 'Real-Time Safety Monitoring System',
      status: 'completed',
      risk_level: 'medium',
      completion_date: '2024-12-28',
      reviewer: 'Privacy Team',
      data_types: ['Message Content', 'Behavioral Indicators'],
      privacy_risks: [
        'Content monitoring privacy concerns',
        'False positive impacts',
        'Automated decision-making'
      ],
      mitigation_measures: [
        'Human oversight mechanisms',
        'Transparent monitoring policies',
        'User appeal processes'
      ],
      compliance_impact: 'Balancing safety with privacy rights',
      recommendation: 'Approved'
    }
  ];

  // Privacy metrics and KPIs
  const privacyMetrics = {
    data_flows_mapped: 6,
    privacy_assessments_completed: 2,
    privacy_assessments_pending: 2,
    compliance_score: 94.2,
    data_minimization_score: 87.5,
    consent_rate: 96.8,
    data_subject_requests: 234,
    avg_response_time: '18 hours'
  };

  // Privacy by design implementation status
  const privacyByDesignStatus = [
    { principle: 'Proactive not Reactive', implementation: 95, status: 'excellent' },
    { principle: 'Privacy as the Default', implementation: 92, status: 'good' },
    { principle: 'Full Functionality', implementation: 88, status: 'good' },
    { principle: 'End-to-End Security', implementation: 96, status: 'excellent' },
    { principle: 'Visibility and Transparency', implementation: 85, status: 'good' },
    { principle: 'Respect for User Privacy', implementation: 94, status: 'excellent' },
    { principle: 'Privacy Embedded into Design', implementation: 90, status: 'good' }
  ];

  // Data subject rights fulfillment
  const dataSubjectRights = [
    { right: 'Access', requests: 89, fulfilled: 87, avg_time: '16 hours', compliance: 97.8 },
    { right: 'Rectification', requests: 45, fulfilled: 45, avg_time: '12 hours', compliance: 100.0 },
    { right: 'Erasure', requests: 67, fulfilled: 65, avg_time: '24 hours', compliance: 97.0 },
    { right: 'Portability', requests: 23, fulfilled: 23, avg_time: '20 hours', compliance: 100.0 },
    { right: 'Restriction', requests: 8, fulfilled: 8, avg_time: '8 hours', compliance: 100.0 },
    { right: 'Objection', requests: 12, fulfilled: 11, avg_time: '14 hours', compliance: 91.7 }
  ];

  // Privacy trends over time
  const privacyTrends = [
    { month: 'Jul', compliance_score: 91.2, data_requests: 189, consent_rate: 94.5 },
    { month: 'Aug', compliance_score: 92.1, data_requests: 203, consent_rate: 95.1 },
    { month: 'Sep', compliance_score: 92.8, data_requests: 198, consent_rate: 95.8 },
    { month: 'Oct', compliance_score: 93.4, data_requests: 221, consent_rate: 96.2 },
    { month: 'Nov', compliance_score: 93.9, data_requests: 234, consent_rate: 96.5 },
    { month: 'Dec', compliance_score: 94.1, data_requests: 245, consent_rate: 96.7 },
    { month: 'Jan', compliance_score: 94.2, data_requests: 234, consent_rate: 96.8 }
  ];

  const getFilteredAssessments = () => {
    if (privacyAssessmentFilter === 'all') {
      return privacyAssessments;
    }
    return privacyAssessments.filter(assessment => assessment.status === privacyAssessmentFilter);
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'compliant': return 'text-green-600 bg-green-100';
      case 'review_required': return 'text-yellow-600 bg-yellow-100';
      case 'non_compliant': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImplementationColor = (score) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 90) return 'text-blue-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const generateDataFlowDiagram = () => {
    console.log('Generating data flow diagram...');
    // In a real app, this would generate a visual data flow diagram
  };

  const conductPrivacyAssessment = () => {
    console.log('Starting new privacy impact assessment...');
    // In a real app, this would start a new PIA workflow
  };

  const exportPrivacyReport = () => {
    console.log('Exporting privacy compliance report...');
    // In a real app, this would generate and download a privacy report
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              Privacy Engineering Tools
            </h1>
            <p className="text-gray-600">
              Privacy-by-design implementation and data protection engineering for dating platform
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={privacyAssessmentFilter}
              onChange={(e) => setPrivacyAssessmentFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Assessments</option>
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
              <option value="pending">Pending</option>
            </select>
            
            <button 
              onClick={generateDataFlowDiagram}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Network className="w-4 h-4" />
              Generate Diagram
            </button>
            
            <button 
              onClick={conductPrivacyAssessment}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-4 h-4" />
              New Assessment
            </button>
            
            <button 
              onClick={exportPrivacyReport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Network className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{privacyMetrics.data_flows_mapped}</div>
              <div className="text-xs text-gray-500">Data Flows</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Data Flows Mapped</h3>
            <p className="text-sm text-gray-600">Complete data flow coverage</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{privacyMetrics.compliance_score}%</div>
              <div className="text-xs text-gray-500">Compliance Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Privacy Compliance</h3>
            <p className="text-sm text-gray-600">Overall compliance rating</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{privacyMetrics.consent_rate}%</div>
              <div className="text-xs text-gray-500">Consent Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Consent</h3>
            <p className="text-sm text-gray-600">Active consent rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600">{privacyMetrics.avg_response_time}</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Request Response</h3>
            <p className="text-sm text-gray-600">Average response time</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Privacy Dashboard', icon: BarChart },
              { id: 'dataflows', name: 'Data Flow Mapping', icon: Network },
              { id: 'assessments', name: 'Privacy Assessments', icon: FileText },
              { id: 'rights', name: 'Data Subject Rights', icon: Users },
              { id: 'design', name: 'Privacy by Design', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
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
          {/* Privacy by Design Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Privacy by Design</h3>
            <div className="space-y-3">
              {privacyByDesignStatus.slice(0, 4).map((principle, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{principle.principle}</span>
                    <span className={`font-semibold ${getImplementationColor(principle.implementation)}`}>
                      {principle.implementation}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${principle.implementation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Privacy Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">PIA Completed</p>
                    <p className="text-xs text-gray-600">AI Matching Algorithm</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Data Flow Updated</p>
                    <p className="text-xs text-gray-600">Photo Processing Flow</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Data Request Fulfilled</p>
                    <p className="text-xs text-gray-600">User data access request</p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <FileText className="w-4 h-4" />
                Start New PIA
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Network className="w-4 h-4" />
                Map Data Flow
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Privacy Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Privacy Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Privacy Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Compliance Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={privacyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="compliance_score" stroke="#8b5cf6" strokeWidth={2} name="Compliance Score" />
                    <Line type="monotone" dataKey="data_requests" stroke="#3b82f6" strokeWidth={2} name="Data Requests" />
                    <Line type="monotone" dataKey="consent_rate" stroke="#10b981" strokeWidth={2} name="Consent Rate" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Privacy by Design Implementation and Data Subject Rights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy by Design Implementation</h3>
                  <div className="space-y-4">
                    {privacyByDesignStatus.map((principle, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{principle.principle}</span>
                          <span className={`font-semibold ${getImplementationColor(principle.implementation)}`}>
                            {principle.implementation}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${principle.implementation}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Rights Fulfillment</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsBarChart data={dataSubjectRights}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="right" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="requests" fill="#8b5cf6" name="Requests" />
                      <Bar dataKey="fulfilled" fill="#10b981" name="Fulfilled" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {activeTab === 'dataflows' && (
            <div className="space-y-6">
              {dataFlows.map((flow) => (
                <div key={flow.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Network className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{flow.name}</h3>
                        <p className="text-sm text-gray-600">{flow.source} → {flow.destination}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flow.compliance_status.toLowerCase().replace(' ', '_'))}`}>
                        {flow.compliance_status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(flow.privacy_risk.toLowerCase())}`}>
                        {flow.privacy_risk} risk
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Purpose</div>
                      <div className="font-semibold text-gray-900">{flow.purpose}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Legal Basis</div>
                      <div className="font-semibold text-gray-900">{flow.legal_basis}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Data Volume</div>
                      <div className="font-semibold text-blue-600">{flow.data_volume}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Last Reviewed</div>
                      <div className="font-semibold text-gray-900">{flow.last_reviewed}</div>
                    </div>
                  </div>

                  {selectedDataFlow === flow.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Data Types</h4>
                          <div className="flex flex-wrap gap-2">
                            {flow.data_types.map((type, index) => (
                              <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Third Parties</h4>
                          <div className="flex flex-wrap gap-2">
                            {flow.third_parties.length > 0 ? (
                              flow.third_parties.map((party, index) => (
                                <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                                  {party}
                                </span>
                              ))
                            ) : (
                              <span className="text-sm text-gray-500">None</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="text-sm text-green-600">Retention Period</div>
                          <div className="font-semibold text-green-700">{flow.retention_period}</div>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="text-sm text-blue-600">Encryption</div>
                          <div className="font-semibold text-blue-700">{flow.encryption}</div>
                        </div>
                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="text-sm text-purple-600">Cross-Border</div>
                          <div className="font-semibold text-purple-700">{flow.cross_border ? 'Yes' : 'No'}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedDataFlow(selectedDataFlow === flow.id ? null : flow.id)}
                      className="flex items-center gap-2 px-3 py-1 text-purple-600 hover:text-purple-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedDataFlow === flow.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                        <Settings className="w-3 h-3" />
                        Edit
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <FileText className="w-4 h-4" />
                        Assess Privacy Impact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'assessments' && (
            <div className="space-y-6">
              {getFilteredAssessments().map((assessment) => (
                <div key={assessment.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <FileText className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
                        <p className="text-sm text-gray-600">Reviewer: {assessment.reviewer}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                        {assessment.status.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(assessment.risk_level)}`}>
                        {assessment.risk_level} risk
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">
                        {assessment.completion_date ? `Completed: ${assessment.completion_date}` : 'In Progress'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Data Types</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {assessment.data_types.map((type, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Compliance Impact</div>
                      <div className="font-semibold text-gray-900 text-sm">{assessment.compliance_impact}</div>
                    </div>
                  </div>

                  {selectedPIA === assessment.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Privacy Risks</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {assessment.privacy_risks.map((risk, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Mitigation Measures</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {assessment.mitigation_measures.map((measure, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {measure}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-medium text-blue-900">Recommendation</div>
                        <div className="text-blue-700">{assessment.recommendation}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedPIA(selectedPIA === assessment.id ? null : assessment.id)}
                      className="flex items-center gap-2 px-3 py-1 text-purple-600 hover:text-purple-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedPIA === assessment.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                        <Download className="w-3 h-3" />
                        Export
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

          {activeTab === 'rights' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Subject Rights Fulfillment</h3>
              <div className="space-y-4">
                {dataSubjectRights.map((right, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Right to {right.right}</h4>
                          <p className="text-sm text-gray-600">Average response time: {right.avg_time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{right.compliance}%</div>
                        <div className="text-xs text-gray-500">compliance</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">{right.requests}</div>
                        <div className="text-xs text-gray-600">Total Requests</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-green-600">{right.fulfilled}</div>
                        <div className="text-xs text-gray-600">Fulfilled</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-blue-600">{right.avg_time}</div>
                        <div className="text-xs text-gray-600">Avg Response</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Compliance:</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${right.compliance}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{right.compliance}%</span>
                      </div>
                      <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        <Eye className="w-3 h-3" />
                        View Requests
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy by Design Implementation Status</h3>
                <div className="space-y-6">
                  {privacyByDesignStatus.map((principle, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Shield className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{principle.principle}</h4>
                            <p className="text-sm text-gray-600">Implementation status: {principle.status}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getImplementationColor(principle.implementation)}`}>
                            {principle.implementation}%
                          </div>
                          <div className="text-xs text-gray-500">implemented</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${principle.implementation}%` }}
                            />
                          </div>
                        </div>
                        <button className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                          <Settings className="w-3 h-3" />
                          Improve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Recommendations</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="font-medium text-yellow-900">Visibility and Transparency</div>
                      <div className="text-sm text-yellow-700">Enhance user-facing privacy controls and data usage transparency</div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">Full Functionality</div>
                      <div className="text-sm text-blue-700">Optimize privacy features without compromising user experience</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">Privacy Embedded into Design</div>
                      <div className="text-sm text-green-700">Integrate privacy considerations into development workflows</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Engineering Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Data Minimization Score</span>
                      <span className="font-bold text-green-600">{privacyMetrics.data_minimization_score}%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Privacy by Default</span>
                      <span className="font-bold text-blue-600">92%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Consent Granularity</span>
                      <span className="font-bold text-purple-600">89%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Data Portability</span>
                      <span className="font-bold text-orange-600">95%</span>
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

export default PrivacyEngineeringTools;

