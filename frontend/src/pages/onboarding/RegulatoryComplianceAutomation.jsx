import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Globe, 
  Users,
  Settings,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertCircle,
  Lock,
  Eye,
  RefreshCw,
  Target,
  Award,
  Zap,
  BookOpen,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Activity,
  Database,
  Server,
  Cpu,
  HardDrive,
  Network,
  Wifi,
  Monitor
} from 'lucide-react';

const RegulatoryComplianceAutomation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegulation, setSelectedRegulation] = useState('all');
  const [complianceStatus, setComplianceStatus] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');

  // Compliance regulations data
  const regulations = [
    {
      id: 1,
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      status: "Compliant",
      score: 98.5,
      lastAudit: "2024-01-15",
      nextAudit: "2024-07-15",
      requirements: 47,
      completed: 46,
      critical: 0,
      warnings: 1,
      description: "EU data protection and privacy regulation",
      automationLevel: 94
    },
    {
      id: 2,
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      status: "Compliant",
      score: 96.8,
      lastAudit: "2024-01-20",
      nextAudit: "2024-07-20",
      requirements: 32,
      completed: 31,
      critical: 0,
      warnings: 1,
      description: "California consumer privacy protection law",
      automationLevel: 91
    },
    {
      id: 3,
      name: "PIPEDA",
      fullName: "Personal Information Protection and Electronic Documents Act",
      region: "Canada",
      status: "Compliant",
      score: 97.2,
      lastAudit: "2024-01-10",
      nextAudit: "2024-07-10",
      requirements: 28,
      completed: 27,
      critical: 0,
      warnings: 1,
      description: "Canadian federal privacy law",
      automationLevel: 89
    },
    {
      id: 4,
      name: "LGPD",
      fullName: "Lei Geral de Proteção de Dados",
      region: "Brazil",
      status: "In Progress",
      score: 87.3,
      lastAudit: "2024-01-25",
      nextAudit: "2024-04-25",
      requirements: 35,
      completed: 30,
      critical: 2,
      warnings: 3,
      description: "Brazilian data protection law",
      automationLevel: 76
    },
    {
      id: 5,
      name: "COPPA",
      fullName: "Children's Online Privacy Protection Act",
      region: "United States",
      status: "Compliant",
      score: 99.1,
      lastAudit: "2024-01-05",
      nextAudit: "2024-07-05",
      requirements: 18,
      completed: 18,
      critical: 0,
      warnings: 0,
      description: "US children's online privacy protection",
      automationLevel: 97
    },
    {
      id: 6,
      name: "SOX",
      fullName: "Sarbanes-Oxley Act",
      region: "United States",
      status: "Compliant",
      score: 95.7,
      lastAudit: "2024-01-12",
      nextAudit: "2024-07-12",
      requirements: 24,
      completed: 23,
      critical: 0,
      warnings: 1,
      description: "US financial reporting and corporate governance",
      automationLevel: 88
    }
  ];

  // Compliance tasks data
  const complianceTasks = [
    {
      id: 1,
      title: "GDPR Data Mapping Update",
      regulation: "GDPR",
      priority: "High",
      dueDate: "2024-02-15",
      status: "In Progress",
      assignee: "Sarah Johnson",
      progress: 75,
      description: "Update data flow mapping for new user features"
    },
    {
      id: 2,
      title: "CCPA Privacy Policy Review",
      regulation: "CCPA",
      priority: "Medium",
      dueDate: "2024-02-20",
      status: "Pending",
      assignee: "Mike Chen",
      progress: 0,
      description: "Annual review and update of privacy policy"
    },
    {
      id: 3,
      title: "LGPD Consent Management Audit",
      regulation: "LGPD",
      priority: "Critical",
      dueDate: "2024-02-10",
      status: "Overdue",
      assignee: "Maria Rodriguez",
      progress: 45,
      description: "Audit consent collection and management processes"
    },
    {
      id: 4,
      title: "SOX Financial Controls Testing",
      regulation: "SOX",
      priority: "High",
      dueDate: "2024-02-25",
      status: "Scheduled",
      assignee: "David Kim",
      progress: 0,
      description: "Quarterly testing of financial reporting controls"
    },
    {
      id: 5,
      title: "COPPA Age Verification Update",
      regulation: "COPPA",
      priority: "Medium",
      dueDate: "2024-03-01",
      status: "Pending",
      assignee: "Emma Wilson",
      progress: 20,
      description: "Enhance age verification mechanisms"
    }
  ];

  // Automation features
  const automationFeatures = [
    {
      name: "Data Discovery & Classification",
      description: "Automatically discover and classify personal data across systems",
      status: "Active",
      coverage: 96,
      lastRun: "2 hours ago"
    },
    {
      name: "Consent Management",
      description: "Automated consent collection, tracking, and withdrawal processing",
      status: "Active",
      coverage: 94,
      lastRun: "1 hour ago"
    },
    {
      name: "Data Subject Rights",
      description: "Automated processing of access, deletion, and portability requests",
      status: "Active",
      coverage: 98,
      lastRun: "30 minutes ago"
    },
    {
      name: "Breach Detection & Reporting",
      description: "Real-time breach detection and automated regulatory reporting",
      status: "Active",
      coverage: 92,
      lastRun: "15 minutes ago"
    },
    {
      name: "Policy Compliance Monitoring",
      description: "Continuous monitoring of policy adherence and violations",
      status: "Active",
      coverage: 89,
      lastRun: "5 minutes ago"
    },
    {
      name: "Audit Trail Generation",
      description: "Automated generation of compliance audit trails and reports",
      status: "Active",
      coverage: 97,
      lastRun: "1 hour ago"
    }
  ];

  // Compliance metrics
  const complianceMetrics = {
    overallScore: 96.2,
    totalRegulations: 6,
    compliantRegulations: 5,
    inProgressRegulations: 1,
    criticalIssues: 2,
    warnings: 7,
    automationCoverage: 91.3,
    lastAssessment: "2024-01-25"
  };

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: "Audit",
      title: "GDPR Compliance Audit Completed",
      timestamp: "2 hours ago",
      status: "Success",
      details: "Annual GDPR audit completed with 98.5% compliance score"
    },
    {
      id: 2,
      type: "Alert",
      title: "LGPD Critical Issue Detected",
      timestamp: "4 hours ago",
      status: "Warning",
      details: "Consent management gap identified in user registration flow"
    },
    {
      id: 3,
      type: "Update",
      title: "CCPA Policy Updated",
      timestamp: "1 day ago",
      status: "Success",
      details: "Privacy policy updated to reflect new CCPA requirements"
    },
    {
      id: 4,
      type: "Automation",
      title: "Data Classification Completed",
      timestamp: "2 days ago",
      status: "Success",
      details: "Automated data discovery classified 15,847 data elements"
    },
    {
      id: 5,
      type: "Report",
      title: "Monthly Compliance Report Generated",
      timestamp: "3 days ago",
      status: "Success",
      details: "Comprehensive compliance report sent to stakeholders"
    }
  ];

  const filteredRegulations = regulations.filter(reg => {
    if (selectedRegulation !== 'all' && reg.name !== selectedRegulation) return false;
    if (complianceStatus !== 'all' && reg.status !== complianceStatus) return false;
    return true;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Overall Score</p>
              <p className="text-3xl font-bold">{complianceMetrics.overallScore}%</p>
              <p className="text-green-100 text-xs">Excellent compliance</p>
            </div>
            <Award className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Regulations</p>
              <p className="text-3xl font-bold">{complianceMetrics.compliantRegulations}/{complianceMetrics.totalRegulations}</p>
              <p className="text-blue-100 text-xs">Compliant</p>
            </div>
            <Shield className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Automation</p>
              <p className="text-3xl font-bold">{complianceMetrics.automationCoverage}%</p>
              <p className="text-purple-100 text-xs">Coverage</p>
            </div>
            <Zap className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Issues</p>
              <p className="text-3xl font-bold">{complianceMetrics.criticalIssues}</p>
              <p className="text-orange-100 text-xs">Critical</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Compliance Status */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-blue-500" />
          Regulatory Compliance Status
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {regulations.map(regulation => (
            <div key={regulation.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{regulation.name}</h4>
                  <p className="text-xs text-gray-500">{regulation.region}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  regulation.status === 'Compliant' ? 'bg-green-100 text-green-800' : 
                  regulation.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {regulation.status}
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Compliance Score</span>
                  <span className="font-semibold">{regulation.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      regulation.score >= 95 ? 'bg-green-500' : 
                      regulation.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${regulation.score}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Requirements:</span>
                  <span className="font-semibold">{regulation.completed}/{regulation.requirements}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Critical Issues:</span>
                  <span className={`font-semibold ${regulation.critical > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {regulation.critical}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Automation:</span>
                  <span className="font-semibold">{regulation.automationLevel}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Audit:</span>
                  <span className="font-semibold">{regulation.nextAudit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Features */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-purple-500" />
          Automation Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {automationFeatures.map((feature, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  feature.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {feature.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Coverage:</span>
                  <span className="font-semibold">{feature.coverage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${feature.coverage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Last run: {feature.lastRun}</span>
                  <button className="text-blue-600 hover:text-blue-700">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-green-500" />
          Recent Activities
        </h3>
        <div className="space-y-3">
          {recentActivities.slice(0, 5).map(activity => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.status === 'Success' ? 'bg-green-500' : 
                activity.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{activity.title}</h4>
                  <span className="text-xs text-gray-500">{activity.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    activity.type === 'Audit' ? 'bg-blue-100 text-blue-800' :
                    activity.type === 'Alert' ? 'bg-red-100 text-red-800' :
                    activity.type === 'Update' ? 'bg-green-100 text-green-800' :
                    activity.type === 'Automation' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {activity.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRegulations = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <select
              value={selectedRegulation}
              onChange={(e) => setSelectedRegulation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Regulations</option>
              {regulations.map(reg => (
                <option key={reg.id} value={reg.name}>{reg.name}</option>
              ))}
            </select>
            <select
              value={complianceStatus}
              onChange={(e) => setComplianceStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="Compliant">Compliant</option>
              <option value="In Progress">In Progress</option>
              <option value="Non-Compliant">Non-Compliant</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Run Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Regulations */}
      <div className="space-y-4">
        {filteredRegulations.map(regulation => (
          <div key={regulation.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{regulation.fullName}</h3>
                <p className="text-sm text-gray-600">{regulation.description}</p>
                <p className="text-xs text-gray-500 mt-1">Region: {regulation.region}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  regulation.status === 'Compliant' ? 'bg-green-100 text-green-800' : 
                  regulation.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {regulation.status}
                </span>
                <span className="text-2xl font-bold text-gray-700">{regulation.score}%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{regulation.completed}</p>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-xs text-gray-500">of {regulation.requirements}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-red-600">{regulation.critical}</p>
                <p className="text-sm text-gray-600">Critical</p>
                <p className="text-xs text-gray-500">Issues</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-yellow-600">{regulation.warnings}</p>
                <p className="text-sm text-gray-600">Warnings</p>
                <p className="text-xs text-gray-500">To Address</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{regulation.automationLevel}%</p>
                <p className="text-sm text-gray-600">Automated</p>
                <p className="text-xs text-gray-500">Coverage</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span>Last Audit: {regulation.lastAudit}</span>
                <span className="mx-2">•</span>
                <span>Next Audit: {regulation.nextAudit}</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                  View Details
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                  Run Audit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-6">
      {/* Task Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{complianceTasks.length}</p>
          <p className="text-sm text-gray-600">Total Tasks</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <p className="text-2xl font-bold text-red-600">
            {complianceTasks.filter(task => task.status === 'Overdue').length}
          </p>
          <p className="text-sm text-gray-600">Overdue</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {complianceTasks.filter(task => task.priority === 'Critical').length}
          </p>
          <p className="text-sm text-gray-600">Critical</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {complianceTasks.filter(task => task.status === 'In Progress').length}
          </p>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Compliance Tasks</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Add Task
          </button>
        </div>
        <div className="space-y-4">
          {complianceTasks.map(task => (
            <div key={task.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{task.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    task.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                    task.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    task.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                    task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    task.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Regulation</p>
                  <p className="text-sm font-medium">{task.regulation}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Assignee</p>
                  <p className="text-sm font-medium">{task.assignee}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Due Date</p>
                  <p className="text-sm font-medium">{task.dueDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Progress</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{task.progress}%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button className="px-3 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                  Update Progress
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Report Generation */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-500" />
          Generate Compliance Report
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Comprehensive Compliance Report</option>
              <option>Regulation-Specific Report</option>
              <option>Risk Assessment Report</option>
              <option>Audit Readiness Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>PDF</option>
              <option>Excel</option>
              <option>Word</option>
              <option>HTML</option>
            </select>
          </div>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {[
            {
              name: "Q1 2024 Compliance Report",
              type: "Comprehensive",
              generated: "2024-01-25",
              size: "2.4 MB",
              format: "PDF"
            },
            {
              name: "GDPR Audit Report",
              type: "Regulation-Specific",
              generated: "2024-01-20",
              size: "1.8 MB",
              format: "PDF"
            },
            {
              name: "Risk Assessment Report",
              type: "Risk Assessment",
              generated: "2024-01-15",
              size: "3.1 MB",
              format: "Excel"
            }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <h4 className="font-medium text-gray-900">{report.name}</h4>
                  <p className="text-sm text-gray-600">{report.type} • {report.generated} • {report.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{report.format}</span>
                <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
            Compliance Trends
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Compliance trends chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-purple-500" />
            Regulation Distribution
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Regulation distribution chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Regulatory Compliance Automation</h1>
              <p className="text-gray-600">Automated compliance monitoring and management across global regulations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Overall Compliance Score</p>
                <p className="text-2xl font-bold text-green-600">{complianceMetrics.overallScore}%</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Run Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'regulations', label: 'Regulations', icon: <Shield className="w-4 h-4" /> },
              { id: 'tasks', label: 'Tasks', icon: <CheckCircle className="w-4 h-4" /> },
              { id: 'reports', label: 'Reports', icon: <FileText className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'regulations' && renderRegulations()}
          {activeTab === 'tasks' && renderTasks()}
          {activeTab === 'reports' && renderReports()}
        </div>
      </div>
    </div>
  );
};

export default RegulatoryComplianceAutomation;

