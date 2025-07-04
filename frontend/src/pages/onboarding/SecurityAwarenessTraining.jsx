import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Play, CheckCircle, Clock, Users, Award,
  BookOpen, Target, Shield, AlertTriangle, Eye, Download,
  Star, TrendingUp, Calendar, BarChart, RefreshCw
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const SecurityAwarenessTraining = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [userRole, setUserRole] = useState('all');

  // Training courses for dating app security
  const trainingCourses = [
    {
      id: 'SEC-001',
      title: 'Dating App Security Fundamentals',
      category: 'fundamentals',
      duration: '45 minutes',
      difficulty: 'beginner',
      completion_rate: 94.2,
      enrolled: 156,
      completed: 147,
      rating: 4.8,
      description: 'Essential security principles for dating platform development and operations',
      modules: [
        'User Data Protection',
        'Authentication Best Practices',
        'Privacy by Design',
        'Threat Landscape Overview'
      ],
      target_roles: ['developers', 'product_managers', 'support'],
      last_updated: '2025-01-05',
      certificate: true
    },
    {
      id: 'SEC-002',
      title: 'User Safety & Content Moderation',
      category: 'user_safety',
      duration: '60 minutes',
      difficulty: 'intermediate',
      completion_rate: 89.7,
      enrolled: 134,
      completed: 120,
      rating: 4.9,
      description: 'Comprehensive training on user safety protocols and content moderation',
      modules: [
        'Identifying Fake Profiles',
        'Harassment Detection',
        'Romance Scam Prevention',
        'Crisis Response Procedures'
      ],
      target_roles: ['moderators', 'support', 'safety_team'],
      last_updated: '2025-01-03',
      certificate: true
    },
    {
      id: 'SEC-003',
      title: 'Data Privacy & GDPR Compliance',
      category: 'compliance',
      duration: '90 minutes',
      difficulty: 'advanced',
      completion_rate: 87.3,
      enrolled: 98,
      completed: 85,
      rating: 4.7,
      description: 'In-depth training on data privacy regulations and compliance requirements',
      modules: [
        'GDPR Requirements',
        'Data Subject Rights',
        'Consent Management',
        'Cross-border Data Transfers',
        'Breach Response Procedures'
      ],
      target_roles: ['legal', 'developers', 'data_analysts'],
      last_updated: '2025-01-01',
      certificate: true
    },
    {
      id: 'SEC-004',
      title: 'Incident Response for Dating Platforms',
      category: 'incident_response',
      duration: '75 minutes',
      difficulty: 'advanced',
      completion_rate: 91.5,
      enrolled: 67,
      completed: 61,
      rating: 4.6,
      description: 'Specialized training on handling security incidents in dating environments',
      modules: [
        'Incident Classification',
        'Response Procedures',
        'Communication Protocols',
        'Post-incident Analysis',
        'Legal Considerations'
      ],
      target_roles: ['security_team', 'management', 'legal'],
      last_updated: '2024-12-28',
      certificate: true
    },
    {
      id: 'SEC-005',
      title: 'Social Engineering & Phishing Prevention',
      category: 'awareness',
      duration: '30 minutes',
      difficulty: 'beginner',
      completion_rate: 96.8,
      enrolled: 189,
      completed: 183,
      rating: 4.5,
      description: 'Essential awareness training for all team members on social engineering threats',
      modules: [
        'Recognizing Phishing Attempts',
        'Social Engineering Tactics',
        'Safe Communication Practices',
        'Reporting Procedures'
      ],
      target_roles: ['all_staff'],
      last_updated: '2025-01-06',
      certificate: false
    },
    {
      id: 'SEC-006',
      title: 'Secure Development for Dating Apps',
      category: 'development',
      duration: '120 minutes',
      difficulty: 'advanced',
      completion_rate: 83.1,
      enrolled: 45,
      completed: 37,
      rating: 4.9,
      description: 'Advanced secure coding practices specific to dating application development',
      modules: [
        'Secure API Development',
        'Input Validation',
        'Authentication Implementation',
        'Encryption Best Practices',
        'Security Testing Integration'
      ],
      target_roles: ['developers', 'architects'],
      last_updated: '2024-12-30',
      certificate: true
    }
  ];

  // Training progress by department
  const departmentProgress = [
    { department: 'Engineering', enrolled: 45, completed: 41, completion_rate: 91.1 },
    { department: 'Product', enrolled: 23, completed: 22, completion_rate: 95.7 },
    { department: 'Support', enrolled: 67, completed: 63, completion_rate: 94.0 },
    { department: 'Legal', enrolled: 12, completed: 11, completion_rate: 91.7 },
    { department: 'Marketing', enrolled: 34, completed: 31, completion_rate: 91.2 },
    { department: 'Operations', enrolled: 28, completed: 26, completion_rate: 92.9 }
  ];

  // Training completion trends
  const completionTrends = [
    { month: 'Jul 2024', completed: 45, enrolled: 52, rate: 86.5 },
    { month: 'Aug 2024', completed: 67, enrolled: 74, rate: 90.5 },
    { month: 'Sep 2024', completed: 89, enrolled: 98, rate: 90.8 },
    { month: 'Oct 2024', completed: 112, enrolled: 123, rate: 91.1 },
    { month: 'Nov 2024', completed: 134, enrolled: 145, rate: 92.4 },
    { month: 'Dec 2024', completed: 156, enrolled: 167, rate: 93.4 },
    { month: 'Jan 2025', completed: 183, enrolled: 195, rate: 93.8 }
  ];

  // Security knowledge assessment scores
  const assessmentScores = [
    { category: 'Data Protection', score: 87.3, target: 85 },
    { category: 'User Safety', score: 92.1, target: 90 },
    { category: 'Incident Response', score: 89.7, target: 85 },
    { category: 'Compliance', score: 91.4, target: 90 },
    { category: 'Secure Development', score: 85.2, target: 80 },
    { category: 'Social Engineering', score: 94.6, target: 90 }
  ];

  // Training effectiveness metrics
  const effectivenessMetrics = {
    overall_completion: 92.3,
    average_score: 89.7,
    certification_rate: 87.4,
    knowledge_retention: 91.2,
    incident_reduction: 34.7,
    compliance_improvement: 28.3
  };

  // Recent training activities
  const recentActivities = [
    {
      id: 1,
      type: 'completion',
      user: 'Sarah Chen',
      course: 'Data Privacy & GDPR Compliance',
      action: 'completed course',
      score: 94,
      timestamp: '2025-01-07 14:30:00'
    },
    {
      id: 2,
      type: 'enrollment',
      user: 'Mike Rodriguez',
      course: 'Secure Development for Dating Apps',
      action: 'enrolled in course',
      score: null,
      timestamp: '2025-01-07 13:45:00'
    },
    {
      id: 3,
      type: 'certification',
      user: 'Emily Johnson',
      course: 'User Safety & Content Moderation',
      action: 'earned certification',
      score: 96,
      timestamp: '2025-01-07 12:15:00'
    },
    {
      id: 4,
      type: 'completion',
      user: 'David Kim',
      course: 'Dating App Security Fundamentals',
      action: 'completed course',
      score: 88,
      timestamp: '2025-01-07 11:30:00'
    },
    {
      id: 5,
      type: 'enrollment',
      user: 'Lisa Wang',
      course: 'Incident Response for Dating Platforms',
      action: 'enrolled in course',
      score: null,
      timestamp: '2025-01-07 10:45:00'
    }
  ];

  // Upcoming training sessions
  const upcomingSessions = [
    {
      id: 'LIVE-001',
      title: 'Advanced Threat Detection Workshop',
      type: 'live_session',
      date: '2025-01-10',
      time: '14:00 - 16:00',
      instructor: 'Dr. Alex Thompson',
      capacity: 25,
      enrolled: 18,
      description: 'Hands-on workshop on implementing advanced threat detection for dating platforms'
    },
    {
      id: 'LIVE-002',
      title: 'Crisis Communication Training',
      type: 'live_session',
      date: '2025-01-15',
      time: '10:00 - 12:00',
      instructor: 'Maria Santos',
      capacity: 30,
      enrolled: 22,
      description: 'Training on effective communication during security incidents and crises'
    },
    {
      id: 'LIVE-003',
      title: 'Regulatory Updates Briefing',
      type: 'webinar',
      date: '2025-01-20',
      time: '15:00 - 16:00',
      instructor: 'Legal Team',
      capacity: 100,
      enrolled: 67,
      description: 'Latest updates on privacy regulations affecting dating platforms'
    }
  ];

  const getFilteredCourses = () => {
    let filtered = trainingCourses;
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(course => course.category === filterCategory);
    }
    
    if (userRole !== 'all') {
      filtered = filtered.filter(course => 
        course.target_roles.includes(userRole) || course.target_roles.includes('all_staff')
      );
    }
    
    return filtered;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'fundamentals': return 'text-blue-600 bg-blue-100';
      case 'user_safety': return 'text-purple-600 bg-purple-100';
      case 'compliance': return 'text-green-600 bg-green-100';
      case 'incident_response': return 'text-red-600 bg-red-100';
      case 'awareness': return 'text-yellow-600 bg-yellow-100';
      case 'development': return 'text-indigo-600 bg-indigo-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'completion': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'enrollment': return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'certification': return <Award className="w-4 h-4 text-purple-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const startCourse = (courseId) => {
    console.log(`Starting course: ${courseId}`);
    // In a real app, this would navigate to the course content
  };

  const downloadCertificate = (courseId) => {
    console.log(`Downloading certificate for course: ${courseId}`);
    // In a real app, this would download the certificate
  };

  const scheduleSession = (sessionId) => {
    console.log(`Scheduling session: ${sessionId}`);
    // In a real app, this would handle session enrollment
  };

  const exportProgress = () => {
    console.log('Exporting training progress report...');
    // In a real app, this would export the progress data
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              Security Awareness Training
            </h1>
            <p className="text-gray-600">
              Comprehensive security training program for dating platform team members
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="fundamentals">Fundamentals</option>
              <option value="user_safety">User Safety</option>
              <option value="compliance">Compliance</option>
              <option value="incident_response">Incident Response</option>
              <option value="awareness">Awareness</option>
              <option value="development">Development</option>
            </select>
            
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="developers">Developers</option>
              <option value="product_managers">Product Managers</option>
              <option value="support">Support Team</option>
              <option value="moderators">Moderators</option>
              <option value="legal">Legal Team</option>
              <option value="security_team">Security Team</option>
            </select>
            
            <button 
              onClick={exportProgress}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Progress
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule Training
            </button>
          </div>
        </div>
      </div>

      {/* Training Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{effectivenessMetrics.overall_completion}%</div>
              <div className="text-xs text-gray-500">Completion Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Progress</h3>
            <p className="text-sm text-gray-600">Training completion</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{effectivenessMetrics.average_score}</div>
              <div className="text-xs text-gray-500">Average Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Knowledge Level</h3>
            <p className="text-sm text-gray-600">Assessment scores</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{effectivenessMetrics.certification_rate}%</div>
              <div className="text-xs text-gray-500">Certification Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Certifications</h3>
            <p className="text-sm text-gray-600">Earned certificates</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{effectivenessMetrics.knowledge_retention}%</div>
              <div className="text-xs text-gray-500">Retention Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Knowledge Retention</h3>
            <p className="text-sm text-gray-600">Long-term retention</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{effectivenessMetrics.incident_reduction}%</div>
              <div className="text-xs text-gray-500">Incident Reduction</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Security Impact</h3>
            <p className="text-sm text-gray-600">Incident reduction</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{effectivenessMetrics.compliance_improvement}%</div>
              <div className="text-xs text-gray-500">Compliance Improvement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Compliance</h3>
            <p className="text-sm text-gray-600">Improvement rate</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Training Dashboard', icon: BarChart },
              { id: 'courses', name: 'Available Courses', icon: BookOpen },
              { id: 'progress', name: 'Progress Tracking', icon: TrendingUp },
              { id: 'assessments', name: 'Knowledge Assessments', icon: Target },
              { id: 'live_sessions', name: 'Live Sessions', icon: Users }
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
          {/* Department Progress */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Department Progress</h3>
            <div className="space-y-4">
              {departmentProgress.map((dept, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{dept.department}</span>
                    <span className="font-semibold text-gray-900">
                      {dept.completion_rate}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${dept.completion_rate}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    {dept.completed}/{dept.enrolled} completed
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent Activities
            </h3>
            <div className="space-y-3">
              {recentActivities.slice(0, 5).map((activity) => (
                <div key={activity.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-xs text-gray-600 mb-1">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.course}</p>
                      {activity.score && (
                        <p className="text-xs text-green-600 font-medium">Score: {activity.score}%</p>
                      )}
                      <p className="text-xs text-gray-400">{activity.timestamp}</p>
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
                Start New Course
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Certificates
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar className="w-4 h-4" />
                Schedule Assessment
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="w-4 h-4" />
                Join Live Session
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Training Completion Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Completion Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={completionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="enrolled" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Enrolled" />
                    <Area type="monotone" dataKey="completed" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Completed" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Department Progress and Assessment Scores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Completion Rates</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsBarChart data={departmentProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completion_rate" fill="#8b5cf6" name="Completion Rate %" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Assessment Scores</h3>
                  <div className="space-y-4">
                    {assessmentScores.map((assessment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{assessment.category}</span>
                          <span className="font-semibold text-gray-900">
                            {assessment.score}% (Target: {assessment.target}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              assessment.score >= assessment.target ? 'bg-green-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${(assessment.score / 100) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {getFilteredCourses().map((course) => (
                <div key={course.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                        {course.category.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {course.completion_rate}% completion
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{course.duration}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Enrolled</div>
                      <div className="font-semibold text-blue-600">{course.enrolled}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Completed</div>
                      <div className="font-semibold text-green-600">{course.completed}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Certificate</div>
                      <div className="font-semibold text-purple-600">
                        {course.certificate ? 'Available' : 'Not Available'}
                      </div>
                    </div>
                  </div>

                  {selectedCourse === course.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Course Modules</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.modules.map((module, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Target Roles</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.target_roles.map((role, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {role.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                      className="flex items-center gap-2 px-3 py-1 text-purple-600 hover:text-purple-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedCourse === course.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {course.certificate && (
                        <button 
                          onClick={() => downloadCertificate(course.id)}
                          className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                        >
                          <Download className="w-3 h-3" />
                          Certificate
                        </button>
                      )}
                      <button 
                        onClick={() => startCourse(course.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Start Course
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Individual Progress Tracking</h3>
                <div className="space-y-4">
                  {trainingCourses.map((course) => (
                    <div key={course.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <BookOpen className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{course.title}</h4>
                            <p className="text-sm text-gray-600">{course.duration}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600">{course.completion_rate}%</div>
                          <div className="text-xs text-gray-500">completion rate</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${course.completion_rate}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {course.completed}/{course.enrolled} completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assessments' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Assessment Results</h3>
              <div className="space-y-6">
                {assessmentScores.map((assessment, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Target className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{assessment.category}</h4>
                          <p className="text-sm text-gray-600">Target: {assessment.target}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          assessment.score >= assessment.target ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {assessment.score}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {assessment.score >= assessment.target ? 'Target Met' : 'Below Target'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-500 ${
                              assessment.score >= assessment.target ? 'bg-green-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${(assessment.score / 100) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {assessment.score >= assessment.target ? '✓' : '⚠'} {assessment.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'live_sessions' && (
            <div className="space-y-6">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                        <p className="text-sm text-gray-600">{session.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session.type === 'live_session' ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'
                      }`}>
                        {session.type.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-600">
                        {session.enrolled}/{session.capacity} enrolled
                      </div>
                      <div className="text-xs text-gray-500">
                        {((session.enrolled / session.capacity) * 100).toFixed(0)}% capacity
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Date & Time</div>
                      <div className="font-semibold text-gray-900">{session.date}</div>
                      <div className="text-sm text-gray-600">{session.time}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Instructor</div>
                      <div className="font-semibold text-gray-900">{session.instructor}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Capacity</div>
                      <div className="font-semibold text-blue-600">
                        {session.enrolled}/{session.capacity}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(session.enrolled / session.capacity) * 100}%` }}
                      />
                    </div>
                    
                    <button 
                      onClick={() => scheduleSession(session.id)}
                      disabled={session.enrolled >= session.capacity}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Calendar className="w-4 h-4" />
                      {session.enrolled >= session.capacity ? 'Full' : 'Enroll'}
                    </button>
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

export default SecurityAwarenessTraining;

