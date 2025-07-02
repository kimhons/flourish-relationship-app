import React, { useState, useEffect } from 'react';
import { 
  Shield, Lock, FileText, Globe, AlertTriangle,
  CheckCircle, XCircle, Clock, Eye, Download,
  Settings, Bell, Mail, Phone, MessageCircle,
  Search, Filter, Upload, RefreshCw, Info,
  Plus, Edit, Trash2, MoreHorizontal, Star,
  Calendar, ArrowUp, ArrowDown, Minus, Target,
  Users, UserCheck, UserPlus, Network, Code,
  BookOpen, Terminal, Package, Webhook, Flag,
  BarChart3, PieChart, TrendingUp, Activity,
  Layers, HardDrive, Cpu, GitBranch, Award,
  Navigation, Compass, Map, Plane, Heart
} from 'lucide-react';

const InternationalComplianceRegulatoryFramework = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [selectedAudit, setSelectedAudit] = useState(null);
  const [complianceFilter, setComplianceFilter] = useState('all');

  const [complianceData, setComplianceData] = useState({
    overview: {
      totalRegulations: 47,
      activeCompliance: 89,
      complianceScore: 97.8,
      auditsPassed: 234,
      certificationsHeld: 23,
      riskLevel: 'Low',
      lastAudit: '2024-11-15',
      nextAudit: '2025-02-15'
    },
    regulations: [
      {
        id: 1,
        name: 'GDPR (General Data Protection Regulation)',
        region: 'European Union',
        category: 'Data Protection',
        status: 'compliant',
        complianceScore: 98.7,
        lastAudit: '2024-10-15',
        nextAudit: '2025-01-15',
        riskLevel: 'low',
        requirements: [
          'Data subject consent management',
          'Right to be forgotten implementation',
          'Data portability features',
          'Privacy by design architecture',
          'Data breach notification (72 hours)',
          'Data Protection Officer appointment'
        ],
        implementationStatus: [
          { requirement: 'Consent Management', status: 'complete', score: 99.2 },
          { requirement: 'Data Portability', status: 'complete', score: 97.8 },
          { requirement: 'Breach Notification', status: 'complete', score: 98.5 },
          { requirement: 'Privacy by Design', status: 'complete', score: 96.9 },
          { requirement: 'DPO Appointment', status: 'complete', score: 100.0 },
          { requirement: 'Right to be Forgotten', status: 'complete', score: 98.1 }
        ],
        penalties: 'Up to €20M or 4% of annual turnover',
        documentation: 'Complete',
        certifications: ['ISO 27001', 'SOC 2 Type II'],
        auditHistory: [
          { date: '2024-10-15', result: 'Passed', score: 98.7 },
          { date: '2024-07-15', result: 'Passed', score: 97.9 },
          { date: '2024-04-15', result: 'Passed', score: 96.8 }
        ]
      },
      {
        id: 2,
        name: 'CCPA (California Consumer Privacy Act)',
        region: 'California, USA',
        category: 'Consumer Privacy',
        status: 'compliant',
        complianceScore: 96.4,
        lastAudit: '2024-11-01',
        nextAudit: '2025-02-01',
        riskLevel: 'low',
        requirements: [
          'Consumer right to know',
          'Consumer right to delete',
          'Consumer right to opt-out',
          'Non-discrimination provisions',
          'Privacy policy requirements',
          'Data minimization practices'
        ],
        implementationStatus: [
          { requirement: 'Right to Know', status: 'complete', score: 97.2 },
          { requirement: 'Right to Delete', status: 'complete', score: 96.8 },
          { requirement: 'Right to Opt-out', status: 'complete', score: 95.9 },
          { requirement: 'Non-discrimination', status: 'complete', score: 98.1 },
          { requirement: 'Privacy Policy', status: 'complete', score: 94.7 },
          { requirement: 'Data Minimization', status: 'complete', score: 96.2 }
        ],
        penalties: 'Up to $7,500 per violation',
        documentation: 'Complete',
        certifications: ['Privacy Shield', 'CCPA Certified'],
        auditHistory: [
          { date: '2024-11-01', result: 'Passed', score: 96.4 },
          { date: '2024-08-01', result: 'Passed', score: 95.7 },
          { date: '2024-05-01', result: 'Passed', score: 94.9 }
        ]
      },
      {
        id: 3,
        name: 'PIPEDA (Personal Information Protection and Electronic Documents Act)',
        region: 'Canada',
        category: 'Privacy Protection',
        status: 'compliant',
        complianceScore: 94.8,
        lastAudit: '2024-09-20',
        nextAudit: '2024-12-20',
        riskLevel: 'low',
        requirements: [
          'Consent for collection and use',
          'Purpose limitation principle',
          'Data accuracy maintenance',
          'Safeguards implementation',
          'Openness about practices',
          'Individual access rights'
        ],
        implementationStatus: [
          { requirement: 'Consent Management', status: 'complete', score: 95.8 },
          { requirement: 'Purpose Limitation', status: 'complete', score: 94.2 },
          { requirement: 'Data Accuracy', status: 'complete', score: 96.1 },
          { requirement: 'Safeguards', status: 'complete', score: 93.7 },
          { requirement: 'Openness', status: 'complete', score: 94.9 },
          { requirement: 'Access Rights', status: 'complete', score: 94.1 }
        ],
        penalties: 'Up to CAD $100,000',
        documentation: 'Complete',
        certifications: ['PIPEDA Compliant'],
        auditHistory: [
          { date: '2024-09-20', result: 'Passed', score: 94.8 },
          { date: '2024-06-20', result: 'Passed', score: 93.9 },
          { date: '2024-03-20', result: 'Passed', score: 93.2 }
        ]
      },
      {
        id: 4,
        name: 'LGPD (Lei Geral de Proteção de Dados)',
        region: 'Brazil',
        category: 'Data Protection',
        status: 'in-progress',
        complianceScore: 87.3,
        lastAudit: '2024-08-15',
        nextAudit: '2024-11-15',
        riskLevel: 'medium',
        requirements: [
          'Lawful basis for processing',
          'Data subject rights implementation',
          'Data protection officer appointment',
          'Privacy impact assessments',
          'International data transfers',
          'Incident response procedures'
        ],
        implementationStatus: [
          { requirement: 'Lawful Basis', status: 'complete', score: 92.1 },
          { requirement: 'Data Subject Rights', status: 'in-progress', score: 85.7 },
          { requirement: 'DPO Appointment', status: 'complete', score: 90.0 },
          { requirement: 'Privacy Impact', status: 'in-progress', score: 82.4 },
          { requirement: 'Data Transfers', status: 'in-progress', score: 86.9 },
          { requirement: 'Incident Response', status: 'complete', score: 91.7 }
        ],
        penalties: 'Up to BRL 50M or 2% of revenue',
        documentation: 'In Progress',
        certifications: ['Pending'],
        auditHistory: [
          { date: '2024-08-15', result: 'Conditional Pass', score: 87.3 },
          { date: '2024-05-15', result: 'Failed', score: 78.9 },
          { date: '2024-02-15', result: 'Failed', score: 72.1 }
        ]
      },
      {
        id: 5,
        name: 'PDPA (Personal Data Protection Act)',
        region: 'Singapore',
        category: 'Personal Data Protection',
        status: 'compliant',
        complianceScore: 93.6,
        lastAudit: '2024-10-01',
        nextAudit: '2025-01-01',
        riskLevel: 'low',
        requirements: [
          'Consent obligations',
          'Purpose limitation',
          'Notification obligations',
          'Access and correction',
          'Data protection provisions',
          'Do Not Call provisions'
        ],
        implementationStatus: [
          { requirement: 'Consent Obligations', status: 'complete', score: 94.8 },
          { requirement: 'Purpose Limitation', status: 'complete', score: 93.2 },
          { requirement: 'Notification', status: 'complete', score: 92.7 },
          { requirement: 'Access & Correction', status: 'complete', score: 94.1 },
          { requirement: 'Data Protection', status: 'complete', score: 93.9 },
          { requirement: 'Do Not Call', status: 'complete', score: 92.9 }
        ],
        penalties: 'Up to SGD $1M',
        documentation: 'Complete',
        certifications: ['PDPA Certified'],
        auditHistory: [
          { date: '2024-10-01', result: 'Passed', score: 93.6 },
          { date: '2024-07-01', result: 'Passed', score: 92.8 },
          { date: '2024-04-01', result: 'Passed', score: 91.9 }
        ]
      }
    ],
    auditSchedule: [
      {
        id: 1,
        regulation: 'GDPR',
        auditor: 'TÜV SÜD',
        scheduledDate: '2025-01-15',
        type: 'Annual Compliance Audit',
        scope: 'Full Platform Assessment',
        status: 'scheduled',
        estimatedDuration: '5 days',
        preparationStatus: 'on-track'
      },
      {
        id: 2,
        regulation: 'CCPA',
        auditor: 'Deloitte Privacy',
        scheduledDate: '2025-02-01',
        type: 'Compliance Review',
        scope: 'Consumer Rights Implementation',
        status: 'scheduled',
        estimatedDuration: '3 days',
        preparationStatus: 'on-track'
      },
      {
        id: 3,
        regulation: 'LGPD',
        auditor: 'KPMG Brazil',
        scheduledDate: '2024-11-15',
        type: 'Remediation Audit',
        scope: 'Gap Analysis Follow-up',
        status: 'upcoming',
        estimatedDuration: '4 days',
        preparationStatus: 'urgent'
      }
    ],
    riskAssessment: {
      overallRisk: 'Low',
      riskFactors: [
        { factor: 'Data Processing Volume', level: 'Medium', impact: 'Moderate', mitigation: 'Automated compliance monitoring' },
        { factor: 'Cross-border Transfers', level: 'Low', impact: 'Low', mitigation: 'Standard contractual clauses' },
        { factor: 'Sensitive Data Handling', level: 'Medium', impact: 'High', mitigation: 'Enhanced encryption and access controls' },
        { factor: 'Third-party Integrations', level: 'Low', impact: 'Medium', mitigation: 'Vendor compliance assessments' },
        { factor: 'Regulatory Changes', level: 'Medium', impact: 'High', mitigation: 'Continuous monitoring and legal updates' }
      ],
      complianceGaps: [
        { regulation: 'LGPD', gap: 'Privacy Impact Assessment Process', severity: 'Medium', timeline: '30 days' },
        { regulation: 'LGPD', gap: 'Data Subject Rights Automation', severity: 'Medium', timeline: '45 days' },
        { regulation: 'PDPA', gap: 'Enhanced Consent Management', severity: 'Low', timeline: '60 days' }
      ]
    },
    certifications: [
      {
        id: 1,
        name: 'ISO 27001:2013',
        issuer: 'BSI Group',
        issueDate: '2024-03-15',
        expiryDate: '2027-03-15',
        status: 'active',
        scope: 'Information Security Management',
        certificateNumber: 'IS 789456'
      },
      {
        id: 2,
        name: 'SOC 2 Type II',
        issuer: 'Ernst & Young',
        issueDate: '2024-06-01',
        expiryDate: '2025-06-01',
        status: 'active',
        scope: 'Security, Availability, Confidentiality',
        certificateNumber: 'SOC2-2024-456'
      },
      {
        id: 3,
        name: 'Privacy Shield Certification',
        issuer: 'Department of Commerce',
        issueDate: '2024-01-10',
        expiryDate: '2025-01-10',
        status: 'active',
        scope: 'EU-US Data Transfers',
        certificateNumber: 'PS-2024-789'
      }
    ],
    complianceMetrics: {
      monthlyScores: [
        { month: 'Jul 2024', score: 94.2 },
        { month: 'Aug 2024', score: 95.1 },
        { month: 'Sep 2024', score: 96.8 },
        { month: 'Oct 2024', score: 97.3 },
        { month: 'Nov 2024', score: 97.8 }
      ],
      regionCompliance: [
        { region: 'European Union', compliance: 98.7, regulations: 3 },
        { region: 'North America', compliance: 96.4, regulations: 2 },
        { region: 'Asia-Pacific', compliance: 93.6, regulations: 1 },
        { region: 'Latin America', compliance: 87.3, regulations: 1 },
        { region: 'Middle East', compliance: 91.2, regulations: 1 }
      ],
      auditResults: [
        { year: '2024', passed: 18, failed: 2, conditional: 3 },
        { year: '2023', passed: 15, failed: 1, conditional: 2 },
        { year: '2022', passed: 12, failed: 0, conditional: 1 }
      ]
    }
  });

  const tabs = [
    { id: 'overview', label: 'Compliance Overview', icon: Shield },
    { id: 'regulations', label: 'Regulatory Framework', icon: FileText },
    { id: 'audits', label: 'Audit Management', icon: CheckCircle },
    { id: 'risk', label: 'Risk Assessment', icon: AlertTriangle },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'analytics', label: 'Compliance Analytics', icon: BarChart3 }
  ];

  const statusColors = {
    compliant: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    'non-compliant': 'bg-red-100 text-red-800',
    pending: 'bg-blue-100 text-blue-800'
  };

  const riskColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const getComplianceColor = (score) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Compliance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Score</p>
              <p className={`text-2xl font-bold ${getComplianceColor(complianceData.overview.complianceScore)}`}>
                {complianceData.overview.complianceScore}%
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+1.2% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Regulations</p>
              <p className="text-2xl font-bold text-gray-900">{complianceData.overview.totalRegulations}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+3 new regulations</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Audits Passed</p>
              <p className="text-2xl font-bold text-gray-900">{complianceData.overview.auditsPassed}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">18 passed this year</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Risk Level</p>
              <p className="text-2xl font-bold text-green-600">{complianceData.overview.riskLevel}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowDown className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">Reduced from Medium</span>
          </div>
        </div>
      </div>

      {/* Compliance Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Compliance Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Regional Compliance Status</h3>
            <Globe className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {complianceData.complianceMetrics.regionCompliance.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Flag className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{region.region}</p>
                    <p className="text-sm text-gray-500">{region.regulations} regulations</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getComplianceColor(region.compliance)}`}>
                    {region.compliance}%
                  </p>
                  <p className="text-xs text-gray-500">Compliance</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Audits */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Audits</h3>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {complianceData.auditSchedule.slice(0, 4).map((audit) => (
              <div key={audit.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    audit.status === 'upcoming' ? 'bg-red-500' :
                    audit.status === 'scheduled' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900">{audit.regulation}</p>
                    <p className="text-sm text-gray-500">{audit.auditor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(audit.scheduledDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-500">{audit.estimatedDuration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Trends */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Score Trends</h3>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Interactive compliance trends visualization</p>
            <div className="grid grid-cols-5 gap-4 mt-6">
              {complianceData.complianceMetrics.monthlyScores.map((item, index) => (
                <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="text-xs text-gray-500">{item.month}</p>
                  <p className={`text-lg font-bold ${getComplianceColor(item.score)}`}>{item.score}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Regulations Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Key Regulations Summary</h3>
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceData.regulations.slice(0, 6).map((regulation) => (
            <div key={regulation.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{regulation.name}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[regulation.status]}`}>
                  {regulation.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Region:</span>
                  <span className="text-xs text-gray-900">{regulation.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Score:</span>
                  <span className={`text-xs font-medium ${getComplianceColor(regulation.complianceScore)}`}>
                    {regulation.complianceScore}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Risk:</span>
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${riskColors[regulation.riskLevel]}`}>
                    {regulation.riskLevel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Active Certifications</h3>
          <Award className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {complianceData.certifications.map((cert) => (
            <div key={cert.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                </div>
                <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  {cert.status}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Issuer:</span>
                  <span className="text-xs text-gray-900">{cert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Expires:</span>
                  <span className="text-xs text-gray-900">{new Date(cert.expiryDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Scope:</span>
                  <span className="text-xs text-gray-900">{cert.scope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRegulationsTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Regulatory Framework</h2>
          <p className="text-gray-600">Comprehensive international regulatory compliance management</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={complianceFilter} 
            onChange={(e) => setComplianceFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Regulations</option>
            <option value="compliant">Compliant</option>
            <option value="in-progress">In Progress</option>
            <option value="non-compliant">Non-Compliant</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Regulation
          </button>
        </div>
      </div>

      {/* Regulations Grid */}
      <div className="grid grid-cols-1 gap-6">
        {complianceData.regulations.map((regulation) => (
          <div key={regulation.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Regulation Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{regulation.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[regulation.status]}`}>
                      {regulation.status}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${riskColors[regulation.riskLevel]}`}>
                      {regulation.riskLevel} risk
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{regulation.region} • {regulation.category}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">Last Audit: {new Date(regulation.lastAudit).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-500">Next Audit: {new Date(regulation.nextAudit).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${getComplianceColor(regulation.complianceScore)}`}>
                  {regulation.complianceScore}%
                </p>
                <p className="text-sm text-gray-500">Compliance Score</p>
              </div>
            </div>

            {/* Implementation Status */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-3">Implementation Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {regulation.implementationStatus.map((item, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{item.requirement}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            item.score >= 95 ? 'bg-green-500' :
                            item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-medium ${getComplianceColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements and Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Requirements</h4>
                <div className="space-y-1">
                  {regulation.requirements.slice(0, 4).map((req, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{req}</span>
                    </div>
                  ))}
                  {regulation.requirements.length > 4 && (
                    <p className="text-xs text-gray-500 ml-5">+{regulation.requirements.length - 4} more requirements</p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Compliance Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Penalties:</span>
                    <span className="text-sm text-gray-900">{regulation.penalties}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Documentation:</span>
                    <span className="text-sm text-gray-900">{regulation.documentation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Certifications:</span>
                    <span className="text-sm text-gray-900">{regulation.certifications.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit History */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Recent Audit History</h4>
              <div className="flex space-x-4">
                {regulation.auditHistory.slice(0, 3).map((audit, index) => (
                  <div key={index} className="flex-1 p-2 bg-gray-50 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{new Date(audit.date).toLocaleDateString()}</span>
                      <span className={`text-xs font-medium ${
                        audit.result === 'Passed' ? 'text-green-600' :
                        audit.result === 'Failed' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {audit.result}
                      </span>
                    </div>
                    <p className={`text-sm font-medium ${getComplianceColor(audit.score)}`}>{audit.score}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedRegulation(regulation)}
                className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <FileText className="h-4 w-4 mr-1" />
                Documentation
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BarChart3 className="h-4 w-4 mr-1" />
                Analytics
              </button>
              <button className="inline-flex items-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-1" />
                Schedule Audit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Regulation Details Modal */}
      {selectedRegulation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedRegulation.name}</h2>
                    <p className="text-gray-600">{selectedRegulation.region} • {selectedRegulation.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRegulation(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Regulation Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600">Compliance Score</p>
                        <p className="text-2xl font-bold text-blue-900">{selectedRegulation.complianceScore}%</p>
                      </div>
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600">Risk Level</p>
                        <p className="text-2xl font-bold text-green-900 capitalize">{selectedRegulation.riskLevel}</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-purple-600">Status</p>
                        <p className="text-2xl font-bold text-purple-900 capitalize">{selectedRegulation.status}</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Requirements List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">All Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRegulation.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Status Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation Status Details</h3>
                <div className="space-y-3">
                  {selectedRegulation.implementationStatus.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{item.requirement}</h4>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              item.score >= 95 ? 'bg-green-500' :
                              item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${getComplianceColor(item.score)}`}>
                          {item.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit History */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Audit History</h3>
                <div className="space-y-2">
                  {selectedRegulation.auditHistory.map((audit, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{new Date(audit.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">Compliance Audit</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          audit.result === 'Passed' ? 'text-green-600' :
                          audit.result === 'Failed' ? 'text-red-600' : 'text-yellow-600'
                        }`}>
                          {audit.result}
                        </p>
                        <p className={`text-sm ${getComplianceColor(audit.score)}`}>{audit.score}%</p>
                      </div>
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

  const renderAuditsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Audit Management</h2>
          <p className="text-gray-600">Comprehensive audit scheduling, tracking, and management system</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Audit
        </button>
      </div>

      {/* Audit Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Audits</p>
              <p className="text-2xl font-bold text-gray-900">{complianceData.overview.auditsPassed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Passed This Year</p>
              <p className="text-2xl font-bold text-green-600">18</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-yellow-600">3</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-purple-600">94.7%</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Audit Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Audit Schedule</h3>
        <div className="space-y-4">
          {complianceData.auditSchedule.map((audit) => (
            <div key={audit.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    audit.status === 'upcoming' ? 'bg-red-500' :
                    audit.status === 'scheduled' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{audit.regulation} - {audit.type}</h4>
                    <p className="text-sm text-gray-600">{audit.auditor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    audit.preparationStatus === 'urgent' ? 'bg-red-100 text-red-800' :
                    audit.preparationStatus === 'on-track' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {audit.preparationStatus}
                  </span>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Scheduled Date</p>
                  <p className="text-sm text-gray-900">{new Date(audit.scheduledDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm text-gray-900">{audit.estimatedDuration}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Scope</p>
                  <p className="text-sm text-gray-900">{audit.scope}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="text-sm text-gray-900 capitalize">{audit.status}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedAudit(audit)}
                  className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm font-medium hover:bg-blue-100"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  View Details
                </button>
                <button className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </button>
                <button className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100">
                  <Calendar className="h-3 w-3 mr-1" />
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Results Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Audit Results Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complianceData.complianceMetrics.auditResults.map((year, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">{year.year} Results</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Passed:</span>
                  <span className="text-sm font-medium text-green-600">{year.passed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Conditional:</span>
                  <span className="text-sm font-medium text-yellow-600">{year.conditional}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Failed:</span>
                  <span className="text-sm font-medium text-red-600">{year.failed}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Success Rate:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {((year.passed / (year.passed + year.conditional + year.failed)) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRiskTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Risk Assessment</h2>
          <p className="text-gray-600">Comprehensive compliance risk analysis and mitigation strategies</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Assessment
        </button>
      </div>

      {/* Overall Risk Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Overall Risk Status</h3>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${riskColors[complianceData.riskAssessment.overallRisk.toLowerCase()]}`}>
            {complianceData.riskAssessment.overallRisk} Risk
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">Low</p>
            <p className="text-sm text-gray-600">Overall Risk Level</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">97.8%</p>
            <p className="text-sm text-gray-600">Compliance Score</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">3</p>
            <p className="text-sm text-gray-600">Active Gaps</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">5</p>
            <p className="text-sm text-gray-600">Risk Factors</p>
          </div>
        </div>
      </div>

      {/* Risk Factors Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk Factors Analysis</h3>
        <div className="space-y-4">
          {complianceData.riskAssessment.riskFactors.map((factor, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${riskColors[factor.level.toLowerCase()]}`}>
                    {factor.level}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    factor.impact === 'High' ? 'bg-red-100 text-red-800' :
                    factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Risk Level</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          factor.level === 'High' ? 'bg-red-500' :
                          factor.level === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${
                          factor.level === 'High' ? 80 :
                          factor.level === 'Medium' ? 50 : 30
                        }%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{factor.level}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Mitigation Strategy</p>
                  <p className="text-sm text-gray-900">{factor.mitigation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Gaps */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Compliance Gaps</h3>
        <div className="space-y-4">
          {complianceData.riskAssessment.complianceGaps.map((gap, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{gap.gap}</h4>
                  <p className="text-sm text-gray-600">{gap.regulation}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    gap.severity === 'High' ? 'bg-red-100 text-red-800' :
                    gap.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {gap.severity}
                  </span>
                  <span className="text-sm text-gray-500">{gap.timeline}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Target Resolution: {gap.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Mitigation Roadmap */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk Mitigation Roadmap</h3>
        <div className="space-y-4">
          {[
            { phase: 'Immediate (0-30 days)', actions: ['Complete LGPD Privacy Impact Assessment', 'Enhance data subject rights automation'], priority: 'high' },
            { phase: 'Short-term (30-60 days)', actions: ['Implement enhanced consent management', 'Update vendor compliance assessments'], priority: 'medium' },
            { phase: 'Medium-term (60-90 days)', actions: ['Strengthen cross-border transfer controls', 'Enhance monitoring systems'], priority: 'medium' },
            { phase: 'Long-term (90+ days)', actions: ['Implement predictive compliance analytics', 'Develop automated risk assessment'], priority: 'low' }
          ].map((phase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{phase.phase}</h4>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  phase.priority === 'high' ? 'bg-red-100 text-red-800' :
                  phase.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {phase.priority} priority
                </span>
              </div>
              <div className="space-y-2">
                {phase.actions.map((action, actionIndex) => (
                  <div key={actionIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCertificationsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          <p className="text-gray-600">Comprehensive certification management and compliance validation</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Certification
        </button>
      </div>

      {/* Certifications Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Certifications</p>
              <p className="text-2xl font-bold text-gray-900">{complianceData.certifications.length}</p>
            </div>
            <Award className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
              <p className="text-2xl font-bold text-yellow-600">1</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Renewal Rate</p>
              <p className="text-2xl font-bold text-green-600">100%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Value</p>
              <p className="text-2xl font-bold text-purple-600">High</p>
            </div>
            <Star className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Certifications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complianceData.certifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                {cert.status}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Scope</p>
                <p className="text-sm font-medium text-gray-900">{cert.scope}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Issue Date</p>
                  <p className="text-sm text-gray-900">{new Date(cert.issueDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expiry Date</p>
                  <p className="text-sm text-gray-900">{new Date(cert.expiryDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500">Certificate Number</p>
                <p className="text-sm font-mono text-gray-900">{cert.certificateNumber}</p>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Expires in {Math.ceil((new Date(cert.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))} days
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Roadmap */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Certification Roadmap</h3>
        <div className="space-y-4">
          {[
            { cert: 'ISO 27001:2013 Renewal', timeline: 'Q1 2025', status: 'planned', priority: 'high' },
            { cert: 'SOC 2 Type II Renewal', timeline: 'Q2 2025', status: 'planned', priority: 'high' },
            { cert: 'NIST Cybersecurity Framework', timeline: 'Q3 2025', status: 'evaluation', priority: 'medium' },
            { cert: 'FedRAMP Authorization', timeline: 'Q4 2025', status: 'consideration', priority: 'low' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'planned' ? 'bg-blue-500' :
                  item.status === 'evaluation' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{item.cert}</p>
                  <p className="text-sm text-gray-500">{item.timeline}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  item.priority === 'high' ? 'bg-red-100 text-red-800' :
                  item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.priority}
                </span>
                <span className="text-sm text-gray-500 capitalize">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance Analytics</h2>
          <p className="text-gray-600">Comprehensive analytics and insights for compliance performance</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compliance Trend</p>
              <p className="text-2xl font-bold text-green-600">+3.6%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Risk Reduction</p>
              <p className="text-2xl font-bold text-blue-600">-15%</p>
            </div>
            <ArrowDown className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Audit Success</p>
              <p className="text-2xl font-bold text-purple-600">94.7%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cost Savings</p>
              <p className="text-2xl font-bold text-yellow-600">$2.3M</p>
            </div>
            <Target className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Score Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Compliance Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Compliance Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complianceData.regulations.map((regulation) => (
                <tr key={regulation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{regulation.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {regulation.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getComplianceColor(regulation.complianceScore)}`}>
                      {regulation.complianceScore}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+2.1%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${riskColors[regulation.riskLevel]}`}>
                      {regulation.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[regulation.status]}`}>
                      {regulation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              <h1 className="text-3xl font-bold text-gray-900">International Compliance & Regulatory Framework</h1>
              <p className="text-gray-600">Comprehensive global compliance management and regulatory adherence platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{complianceData.overview.complianceScore}% Compliant</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">IC</span>
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
                      ? 'border-blue-500 text-blue-600'
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
        {activeTab === 'regulations' && renderRegulationsTab()}
        {activeTab === 'audits' && renderAuditsTab()}
        {activeTab === 'risk' && renderRiskTab()}
        {activeTab === 'certifications' && renderCertificationsTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love Compliance Platform</p>
                <p className="text-sm opacity-90">Global regulatory compliance with 97.8% accuracy across 47 international frameworks</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Compliance Framework v3.0</p>
              <p className="text-xs opacity-75">Advanced regulatory management with automated compliance monitoring and risk assessment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalComplianceRegulatoryFramework;

