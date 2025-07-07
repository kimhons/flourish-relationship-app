import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Globe, 
  Clock, 
  Users, 
  Settings,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Eye,
  Lock,
  Zap,
  RefreshCw,
  BookOpen,
  Scale,
  Building,
  Flag,
  Target,
  Activity,
  Award,
  Database
} from 'lucide-react';

const RegulatoryComplianceAutomation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  // Simulated real-time compliance data
  const [complianceStats, setComplianceStats] = useState({
    overallScore: 98.7,
    activeRegulations: 47,
    automationRate: 94.3,
    lastAudit: '2024-12-15',
    nextAudit: '2025-03-15',
    riskLevel: 'Low',
    violationsThisMonth: 0,
    complianceGap: 1.3
  });

  const [regulations, setRegulations] = useState([
    {
      id: 'gdpr',
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
      status: 'compliant',
      score: 99.2,
      lastCheck: '2025-01-07',
      nextCheck: '2025-01-14',
      requirements: 47,
      automated: 45,
      priority: 'high',
      description: 'EU data protection and privacy regulation'
    },
    {
      id: 'ccpa',
      name: 'CCPA',
      fullName: 'California Consumer Privacy Act',
      region: 'California, USA',
      status: 'compliant',
      score: 98.8,
      lastCheck: '2025-01-06',
      nextCheck: '2025-01-13',
      requirements: 32,
      automated: 31,
      priority: 'high',
      description: 'California privacy rights and consumer protection'
    },
    {
      id: 'pipeda',
      name: 'PIPEDA',
      fullName: 'Personal Information Protection and Electronic Documents Act',
      region: 'Canada',
      status: 'compliant',
      score: 97.5,
      lastCheck: '2025-01-05',
      nextCheck: '2025-01-12',
      requirements: 28,
      automated: 26,
      priority: 'medium',
      description: 'Canadian federal privacy law'
    },
    {
      id: 'lgpd',
      name: 'LGPD',
      fullName: 'Lei Geral de Proteção de Dados',
      region: 'Brazil',
      status: 'compliant',
      score: 96.9,
      lastCheck: '2025-01-04',
      nextCheck: '2025-01-11',
      requirements: 35,
      automated: 33,
      priority: 'medium',
      description: 'Brazilian data protection law'
    },
    {
      id: 'coppa',
      name: 'COPPA',
      fullName: 'Children\'s Online Privacy Protection Act',
      region: 'United States',
      status: 'attention_needed',
      score: 94.2,
      lastCheck: '2025-01-03',
      nextCheck: '2025-01-10',
      requirements: 18,
      automated: 16,
      priority: 'high',
      description: 'US children\'s online privacy protection'
    },
    {
      id: 'pdpa_sg',
      name: 'PDPA',
      fullName: 'Personal Data Protection Act',
      region: 'Singapore',
      status: 'compliant',
      score: 98.1,
      lastCheck: '2025-01-02',
      nextCheck: '2025-01-09',
      requirements: 24,
      automated: 23,
      priority: 'medium',
      description: 'Singapore personal data protection'
    }
  ]);

  const [auditHistory, setAuditHistory] = useState([
    {
      id: 1,
      date: '2024-12-15',
      type: 'Comprehensive Audit',
      scope: 'All Regulations',
      auditor: 'ComplianceFirst Ltd.',
      status: 'passed',
      score: 98.7,
      findings: 3,
      recommendations: 5
    },
    {
      id: 2,
      date: '2024-09-15',
      type: 'GDPR Focused Audit',
      scope: 'GDPR Compliance',
      auditor: 'EU Privacy Experts',
      status: 'passed',
      score: 99.1,
      findings: 1,
      recommendations: 2
    },
    {
      id: 3,
      date: '2024-06-15',
      type: 'Security Assessment',
      scope: 'Data Security',
      auditor: 'CyberSec Auditors',
      status: 'passed',
      score: 97.8,
      findings: 4,
      recommendations: 7
    }
  ]);

  const [automationTasks, setAutomationTasks] = useState([
    {
      id: 1,
      name: 'Data Subject Rights Requests',
      regulation: 'GDPR',
      status: 'active',
      automationLevel: 98.5,
      lastRun: '2025-01-07 14:30',
      nextRun: '2025-01-07 15:30',
      frequency: 'Hourly',
      description: 'Automated processing of data access, deletion, and portability requests'
    },
    {
      id: 2,
      name: 'Consent Management',
      regulation: 'Multiple',
      status: 'active',
      automationLevel: 96.7,
      lastRun: '2025-01-07 14:00',
      nextRun: '2025-01-07 14:15',
      frequency: '15 minutes',
      description: 'Real-time consent tracking and preference management'
    },
    {
      id: 3,
      name: 'Data Retention Cleanup',
      regulation: 'GDPR, CCPA',
      status: 'active',
      automationLevel: 99.2,
      lastRun: '2025-01-07 02:00',
      nextRun: '2025-01-08 02:00',
      frequency: 'Daily',
      description: 'Automated deletion of data past retention periods'
    },
    {
      id: 4,
      name: 'Privacy Impact Assessments',
      regulation: 'GDPR',
      status: 'active',
      automationLevel: 87.3,
      lastRun: '2025-01-06 09:00',
      nextRun: '2025-01-08 09:00',
      frequency: 'Weekly',
      description: 'Automated PIA generation for new features and data processing'
    },
    {
      id: 5,
      name: 'Breach Notification',
      regulation: 'Multiple',
      status: 'standby',
      automationLevel: 94.8,
      lastRun: 'Never',
      nextRun: 'On trigger',
      frequency: 'Event-based',
      description: 'Automated breach detection and regulatory notification'
    }
  ]);

  const [complianceMetrics, setComplianceMetrics] = useState({
    dataSubjectRequests: 1247,
    requestsProcessed: 1243,
    averageResponseTime: '2.3 hours',
    consentOptInRate: 87.6,
    consentOptOutRate: 12.4,
    dataBreaches: 0,
    privacyComplaints: 2,
    regulatoryInquiries: 1,
    finesAndPenalties: 0
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setComplianceStats(prev => ({
        ...prev,
        overallScore: Math.min(100, prev.overallScore + (Math.random() - 0.5) * 0.1)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Compliance Score Dashboard */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Compliance Overview</h2>
            <p className="text-lg opacity-90 mb-6">
              Automated regulatory compliance across {complianceStats.activeRegulations} global regulations
            </p>
            <div className="flex space-x-6">
              <div>
                <div className="text-2xl font-bold">{complianceStats.overallScore}%</div>
                <div className="text-sm opacity-90">Overall Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{complianceStats.automationRate}%</div>
                <div className="text-sm opacity-90">Automated</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{complianceStats.riskLevel}</div>
                <div className="text-sm opacity-90">Risk Level</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">{complianceStats.overallScore}%</div>
                <div className="text-sm opacity-90">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{complianceStats.activeRegulations}</div>
          <div className="text-gray-600">Active Regulations</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+2.1%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{complianceStats.automationRate}%</div>
          <div className="text-gray-600">Automation Rate</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">0</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{complianceStats.violationsThisMonth}</div>
          <div className="text-gray-600">Violations This Month</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-yellow-600 text-sm font-medium">{complianceStats.complianceGap}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">98.7%</div>
          <div className="text-gray-600">Compliance Score</div>
        </div>
      </div>

      {/* Regulation Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Regulation Compliance Status</h3>
          <button className="text-blue-600 hover:text-blue-700 font-medium">View All Regulations</button>
        </div>
        <div className="space-y-4">
          {regulations.slice(0, 4).map((regulation) => (
            <div key={regulation.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    regulation.status === 'compliant' ? 'bg-green-100' :
                    regulation.status === 'attention_needed' ? 'bg-yellow-100' :
                    'bg-red-100'
                  }`}>
                    {regulation.status === 'compliant' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : regulation.status === 'attention_needed' ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{regulation.name}</h4>
                    <p className="text-sm text-gray-600">{regulation.fullName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{regulation.score}%</div>
                  <div className="text-sm text-gray-600">Compliance Score</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Region</div>
                  <div className="font-semibold">{regulation.region}</div>
                </div>
                <div>
                  <div className="text-gray-600">Requirements</div>
                  <div className="font-semibold">{regulation.automated}/{regulation.requirements} Automated</div>
                </div>
                <div>
                  <div className="text-gray-600">Last Check</div>
                  <div className="font-semibold">{regulation.lastCheck}</div>
                </div>
                <div>
                  <div className="text-gray-600">Next Check</div>
                  <div className="font-semibold">{regulation.nextCheck}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Compliance Activity</h3>
          <div className="space-y-4">
            {[
              {
                action: 'Data Subject Request Processed',
                regulation: 'GDPR',
                time: '5 minutes ago',
                status: 'completed'
              },
              {
                action: 'Consent Preference Updated',
                regulation: 'CCPA',
                time: '12 minutes ago',
                status: 'completed'
              },
              {
                action: 'Privacy Impact Assessment',
                regulation: 'GDPR',
                time: '1 hour ago',
                status: 'completed'
              },
              {
                action: 'Data Retention Cleanup',
                regulation: 'Multiple',
                time: '2 hours ago',
                status: 'completed'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{activity.action}</div>
                    <div className="text-sm text-gray-600">{activity.regulation}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Audits</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">Quarterly Compliance Review</h4>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Scheduled</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">Comprehensive review of all regulations</div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{complianceStats.nextAudit}</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">GDPR Deep Dive Audit</h4>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Preparing</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">Focused GDPR compliance assessment</div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>2025-02-15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAutomation = () => (
    <div className="space-y-8">
      {/* Automation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceStats.automationRate}%</div>
              <div className="text-gray-600">Overall Automation</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{automationTasks.filter(t => t.status === 'active').length}</div>
              <div className="text-gray-600">Active Tasks</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Automation Tasks */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Automation Tasks</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create New Task
          </button>
        </div>
        <div className="space-y-4">
          {automationTasks.map((task) => (
            <div key={task.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    task.status === 'active' ? 'bg-green-100' :
                    task.status === 'standby' ? 'bg-yellow-100' :
                    'bg-gray-100'
                  }`}>
                    {task.status === 'active' ? (
                      <Zap className="h-5 w-5 text-green-600" />
                    ) : task.status === 'standby' ? (
                      <Clock className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <RefreshCw className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{task.name}</h4>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{task.automationLevel}%</div>
                  <div className="text-sm text-gray-600">Automated</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Regulation</div>
                  <div className="font-semibold">{task.regulation}</div>
                </div>
                <div>
                  <div className="text-gray-600">Frequency</div>
                  <div className="font-semibold">{task.frequency}</div>
                </div>
                <div>
                  <div className="text-gray-600">Last Run</div>
                  <div className="font-semibold">{task.lastRun}</div>
                </div>
                <div>
                  <div className="text-gray-600">Next Run</div>
                  <div className="font-semibold">{task.nextRun}</div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                  <Settings className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Automation Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{complianceMetrics.dataSubjectRequests}</div>
            <div className="text-gray-600">Data Subject Requests</div>
            <div className="text-sm text-gray-500">This month</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{complianceMetrics.requestsProcessed}</div>
            <div className="text-gray-600">Requests Processed</div>
            <div className="text-sm text-gray-500">99.7% success rate</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{complianceMetrics.averageResponseTime}</div>
            <div className="text-gray-600">Avg Response Time</div>
            <div className="text-sm text-gray-500">Target: < 72 hours</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{complianceMetrics.consentOptInRate}%</div>
            <div className="text-gray-600">Consent Opt-in Rate</div>
            <div className="text-sm text-gray-500">Industry leading</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAudits = () => (
    <div className="space-y-8">
      {/* Audit Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceStats.overallScore}%</div>
              <div className="text-gray-600">Last Audit Score</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceStats.lastAudit}</div>
              <div className="text-gray-600">Last Audit Date</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceStats.nextAudit}</div>
              <div className="text-gray-600">Next Audit Due</div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit History */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Audit History</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Audit
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Scope</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Auditor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditHistory.map((audit) => (
                <tr key={audit.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{audit.date}</td>
                  <td className="py-3 px-4 font-semibold">{audit.type}</td>
                  <td className="py-3 px-4">{audit.scope}</td>
                  <td className="py-3 px-4">{audit.auditor}</td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-green-600">{audit.score}%</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      audit.status === 'passed' ? 'bg-green-100 text-green-800' :
                      audit.status === 'failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {audit.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-600 hover:text-gray-900 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-gray-900 rounded">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Findings */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Audit Findings</h3>
        <div className="space-y-4">
          {[
            {
              finding: 'Data retention policy documentation needs update',
              severity: 'low',
              regulation: 'GDPR',
              status: 'resolved',
              dueDate: '2025-01-15'
            },
            {
              finding: 'Consent banner optimization recommended',
              severity: 'medium',
              regulation: 'CCPA',
              status: 'in_progress',
              dueDate: '2025-01-20'
            },
            {
              finding: 'Privacy policy translation for new markets',
              severity: 'low',
              regulation: 'LGPD',
              status: 'pending',
              dueDate: '2025-01-25'
            }
          ].map((finding, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${
                    finding.severity === 'high' ? 'bg-red-100' :
                    finding.severity === 'medium' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {finding.severity === 'high' ? (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    ) : finding.severity === 'medium' ? (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <FileText className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{finding.finding}</h4>
                    <p className="text-sm text-gray-600">{finding.regulation}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    finding.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    finding.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {finding.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <div className="text-sm text-gray-600 mt-1">Due: {finding.dueDate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-8">
      {/* Report Generation */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Generate Compliance Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Comprehensive Compliance Report</option>
                <option>GDPR Compliance Report</option>
                <option>Data Subject Rights Report</option>
                <option>Audit Readiness Report</option>
                <option>Risk Assessment Report</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>Custom range</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Regulations</label>
              <div className="space-y-2">
                {['GDPR', 'CCPA', 'PIPEDA', 'LGPD'].map((reg) => (
                  <label key={reg} className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">{reg}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>PDF Report</option>
                <option>Excel Spreadsheet</option>
                <option>JSON Data</option>
                <option>CSV Export</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter email addresses separated by commas"
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Reports</h3>
        <div className="space-y-4">
          {[
            {
              name: 'Monthly GDPR Compliance Report',
              type: 'GDPR Report',
              generated: '2025-01-01',
              size: '2.4 MB',
              format: 'PDF'
            },
            {
              name: 'Q4 2024 Comprehensive Audit',
              type: 'Audit Report',
              generated: '2024-12-31',
              size: '5.7 MB',
              format: 'PDF'
            },
            {
              name: 'Data Subject Rights Summary',
              type: 'DSR Report',
              generated: '2024-12-28',
              size: '1.2 MB',
              format: 'Excel'
            }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{report.name}</h4>
                  <div className="text-sm text-gray-600">
                    {report.type} • {report.generated} • {report.size} • {report.format}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Regulatory Compliance Automation</h1>
                  <p className="text-sm text-gray-600">Automated compliance across {complianceStats.activeRegulations} global regulations</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Compliance Score</div>
                <div className="text-lg font-bold text-green-600">{complianceStats.overallScore}%</div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'automation', name: 'Automation', icon: Zap },
              { id: 'audits', name: 'Audits', icon: Award },
              { id: 'reports', name: 'Reports', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'automation' && renderAutomation()}
        {activeTab === 'audits' && renderAudits()}
        {activeTab === 'reports' && renderReports()}
      </div>
    </div>
  );
};

export default RegulatoryComplianceAutomation;

