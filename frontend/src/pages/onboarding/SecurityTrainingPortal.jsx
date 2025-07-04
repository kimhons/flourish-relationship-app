import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Shield, Play, CheckCircle, Clock, Star,
  Book, Users, Award, TrendingUp, Calendar, Download,
  Eye, Lock, AlertTriangle, User, Globe, Smartphone
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const SecurityTrainingPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [userProgress, setUserProgress] = useState({});

  // Security training courses for dating app team
  const trainingCourses = [
    {
      id: 'dating-app-security-101',
      title: 'Dating App Security Fundamentals',
      category: 'fundamentals',
      description: 'Essential security principles for dating platform development and operations',
      duration: '2 hours',
      difficulty: 'beginner',
      modules: 8,
      completion_rate: 94,
      rating: 4.8,
      enrolled: 156,
      completed: 147,
      topics: [
        'User Privacy Protection',
        'Data Encryption Best Practices',
        'Authentication & Authorization',
        'Secure Communication Protocols',
        'Profile Verification Systems',
        'Content Moderation Security',
        'Payment Security',
        'Incident Response Procedures'
      ],
      learning_objectives: [
        'Understand unique security challenges in dating apps',
        'Implement proper user data protection',
        'Design secure authentication systems',
        'Recognize and prevent common vulnerabilities'
      ],
      prerequisites: 'Basic understanding of web development',
      certification: true,
      mandatory: true
    },
    {
      id: 'user-privacy-protection',
      title: 'User Privacy & Data Protection',
      category: 'privacy',
      description: 'Comprehensive guide to protecting user privacy in dating applications',
      duration: '1.5 hours',
      difficulty: 'intermediate',
      modules: 6,
      completion_rate: 87,
      rating: 4.9,
      enrolled: 134,
      completed: 117,
      topics: [
        'GDPR Compliance for Dating Apps',
        'Data Minimization Principles',
        'Consent Management',
        'Location Data Protection',
        'Photo & Media Privacy',
        'Cross-Border Data Transfers'
      ],
      learning_objectives: [
        'Implement GDPR-compliant data handling',
        'Design privacy-by-design systems',
        'Manage user consent effectively',
        'Protect sensitive location data'
      ],
      prerequisites: 'Dating App Security Fundamentals',
      certification: true,
      mandatory: true
    },
    {
      id: 'secure-messaging-systems',
      title: 'Secure Messaging & Communication',
      category: 'communication',
      description: 'Building secure messaging systems for dating platforms',
      duration: '2.5 hours',
      difficulty: 'advanced',
      modules: 10,
      completion_rate: 78,
      rating: 4.7,
      enrolled: 89,
      completed: 69,
      topics: [
        'End-to-End Encryption Implementation',
        'Message Integrity & Authentication',
        'Secure File Sharing',
        'Video Call Security',
        'Message Retention Policies',
        'Abuse Prevention in Messaging',
        'Metadata Protection',
        'Key Management Systems'
      ],
      learning_objectives: [
        'Implement end-to-end encryption',
        'Secure multimedia messaging',
        'Prevent message-based attacks',
        'Design secure video communication'
      ],
      prerequisites: 'User Privacy & Data Protection',
      certification: true,
      mandatory: false
    },
    {
      id: 'fraud-prevention-techniques',
      title: 'Fraud Prevention & Detection',
      category: 'fraud_prevention',
      description: 'Advanced techniques for preventing fraud and fake profiles',
      duration: '3 hours',
      difficulty: 'advanced',
      modules: 12,
      completion_rate: 82,
      rating: 4.6,
      enrolled: 112,
      completed: 92,
      topics: [
        'Fake Profile Detection',
        'Catfishing Prevention',
        'Financial Fraud Protection',
        'Bot Detection & Prevention',
        'Image Verification Techniques',
        'Behavioral Analysis',
        'Machine Learning for Fraud Detection',
        'Risk Scoring Systems'
      ],
      learning_objectives: [
        'Identify fraudulent user behavior',
        'Implement automated detection systems',
        'Design effective verification processes',
        'Respond to fraud incidents'
      ],
      prerequisites: 'Dating App Security Fundamentals',
      certification: true,
      mandatory: false
    },
    {
      id: 'incident-response-dating',
      title: 'Incident Response for Dating Platforms',
      category: 'incident_response',
      description: 'Specialized incident response procedures for dating app security events',
      duration: '2 hours',
      difficulty: 'intermediate',
      modules: 8,
      completion_rate: 91,
      rating: 4.8,
      enrolled: 98,
      completed: 89,
      topics: [
        'Dating App Incident Classification',
        'User Safety Incident Response',
        'Data Breach Response',
        'Harassment & Abuse Handling',
        'Law Enforcement Coordination',
        'User Communication During Incidents',
        'Post-Incident Analysis',
        'Preventive Measures Implementation'
      ],
      learning_objectives: [
        'Classify and prioritize security incidents',
        'Execute proper response procedures',
        'Coordinate with external parties',
        'Implement lessons learned'
      ],
      prerequisites: 'Dating App Security Fundamentals',
      certification: true,
      mandatory: true
    },
    {
      id: 'mobile-app-security',
      title: 'Mobile App Security Best Practices',
      category: 'mobile_security',
      description: 'Security considerations for iOS and Android dating applications',
      duration: '2.5 hours',
      difficulty: 'intermediate',
      modules: 9,
      completion_rate: 85,
      rating: 4.7,
      enrolled: 145,
      completed: 123,
      topics: [
        'Mobile App Threat Modeling',
        'Secure Data Storage on Mobile',
        'API Security for Mobile Apps',
        'Certificate Pinning',
        'Biometric Authentication',
        'App Store Security Guidelines',
        'Mobile Device Management',
        'Reverse Engineering Protection'
      ],
      learning_objectives: [
        'Secure mobile app development',
        'Implement mobile-specific protections',
        'Handle mobile authentication securely',
        'Protect against mobile threats'
      ],
      prerequisites: 'Dating App Security Fundamentals',
      certification: true,
      mandatory: false
    }
  ];

  // Training statistics
  const trainingStats = {
    total_courses: 6,
    completed_courses: 4,
    in_progress: 2,
    total_hours: 13.5,
    completed_hours: 8.5,
    certification_earned: 4,
    overall_progress: 73,
    team_average: 68
  };

  // Progress data for charts
  const progressData = [
    { month: 'Jul', completed: 12, enrolled: 15, certification: 8 },
    { month: 'Aug', completed: 18, enrolled: 22, certification: 12 },
    { month: 'Sep', completed: 25, enrolled: 28, certification: 18 },
    { month: 'Oct', completed: 32, enrolled: 35, certification: 24 },
    { month: 'Nov', completed: 41, enrolled: 45, certification: 31 },
    { month: 'Dec', completed: 48, enrolled: 52, certification: 38 },
    { month: 'Jan', completed: 52, enrolled: 58, certification: 42 }
  ];

  // Category distribution
  const categoryData = [
    { name: 'Fundamentals', value: 2, color: '#3b82f6' },
    { name: 'Privacy', value: 1, color: '#10b981' },
    { name: 'Communication', value: 1, color: '#f59e0b' },
    { name: 'Fraud Prevention', value: 1, color: '#ef4444' },
    { name: 'Incident Response', value: 1, color: '#8b5cf6' }
  ];

  // Team performance data
  const teamPerformance = [
    { department: 'Engineering', completion: 89, certification: 76 },
    { department: 'Product', completion: 72, certification: 58 },
    { department: 'Design', completion: 65, certification: 52 },
    { department: 'Marketing', completion: 58, certification: 45 },
    { department: 'Support', completion: 94, certification: 87 },
    { department: 'Legal', completion: 98, certification: 95 }
  ];

  // Recent achievements
  const recentAchievements = [
    {
      user: 'Sarah Chen',
      achievement: 'Completed Dating App Security Fundamentals',
      date: '2025-01-07',
      type: 'course_completion',
      certification: true
    },
    {
      user: 'Mike Rodriguez',
      achievement: 'Earned Fraud Prevention Specialist Certification',
      date: '2025-01-06',
      type: 'certification',
      certification: true
    },
    {
      user: 'Emily Johnson',
      achievement: 'Completed User Privacy & Data Protection',
      date: '2025-01-05',
      type: 'course_completion',
      certification: true
    },
    {
      user: 'David Kim',
      achievement: 'Started Secure Messaging & Communication',
      date: '2025-01-04',
      type: 'course_started',
      certification: false
    },
    {
      user: 'Lisa Wang',
      achievement: 'Completed Mobile App Security Best Practices',
      date: '2025-01-03',
      type: 'course_completion',
      certification: true
    }
  ];

  // Upcoming training sessions
  const upcomingSessions = [
    {
      title: 'Live Q&A: Dating App Security Challenges',
      instructor: 'Dr. Alex Thompson',
      date: '2025-01-15',
      time: '2:00 PM PST',
      duration: '1 hour',
      type: 'live_session',
      registered: 45
    },
    {
      title: 'Workshop: Implementing End-to-End Encryption',
      instructor: 'Maria Garcia',
      date: '2025-01-22',
      time: '10:00 AM PST',
      duration: '3 hours',
      type: 'workshop',
      registered: 23
    },
    {
      title: 'Webinar: Latest Privacy Regulations Update',
      instructor: 'John Smith',
      date: '2025-01-29',
      time: '1:00 PM PST',
      duration: '1.5 hours',
      type: 'webinar',
      registered: 67
    }
  ];

  const getFilteredCourses = () => {
    if (filterCategory === 'all') {
      return trainingCourses;
    }
    return trainingCourses.filter(course => course.category === filterCategory);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fundamentals': return <Shield className="w-4 h-4" />;
      case 'privacy': return <Lock className="w-4 h-4" />;
      case 'communication': return <Globe className="w-4 h-4" />;
      case 'fraud_prevention': return <AlertTriangle className="w-4 h-4" />;
      case 'incident_response': return <Shield className="w-4 h-4" />;
      case 'mobile_security': return <Smartphone className="w-4 h-4" />;
      default: return <Book className="w-4 h-4" />;
    }
  };

  const startCourse = (courseId) => {
    console.log(`Starting course: ${courseId}`);
    // In a real app, this would enroll the user in the course
  };

  const downloadCertificate = (courseId) => {
    console.log(`Downloading certificate for course: ${courseId}`);
    // In a real app, this would download the certificate
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              Security Training Portal
            </h1>
            <p className="text-gray-600">
              Comprehensive security training for dating platform development and operations
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
              <option value="privacy">Privacy</option>
              <option value="communication">Communication</option>
              <option value="fraud_prevention">Fraud Prevention</option>
              <option value="incident_response">Incident Response</option>
              <option value="mobile_security">Mobile Security</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="w-4 h-4" />
              Training Report
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule Training
            </button>
          </div>
        </div>
      </div>

      {/* Training Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Book className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{trainingStats.completed_courses}/{trainingStats.total_courses}</div>
              <div className="text-xs text-gray-500">Courses</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Course Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(trainingStats.completed_courses / trainingStats.total_courses) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{trainingStats.completed_hours}h</div>
              <div className="text-xs text-gray-500">of {trainingStats.total_hours}h</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Training Hours</h3>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(trainingStats.completed_hours / trainingStats.total_hours) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{trainingStats.certification_earned}</div>
              <div className="text-xs text-gray-500">Certifications</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Achievements</h3>
            <p className="text-sm text-gray-600">Security Expert Level</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600">{trainingStats.overall_progress}%</div>
              <div className="text-xs text-gray-500">vs {trainingStats.team_average}% avg</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Progress</h3>
            <p className="text-sm text-green-600">Above team average</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
              { id: 'courses', name: 'Training Courses', icon: Book },
              { id: 'progress', name: 'My Progress', icon: CheckCircle },
              { id: 'team', name: 'Team Performance', icon: Users }
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
          {/* Recent Achievements */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {recentAchievements.slice(0, 5).map((achievement, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {achievement.type === 'certification' ? (
                        <Award className="w-4 h-4 text-yellow-600" />
                      ) : achievement.type === 'course_completion' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Play className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{achievement.user}</p>
                      <p className="text-xs text-gray-600 mb-1">{achievement.achievement}</p>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
            <div className="space-y-3">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{session.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">by {session.instructor}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>{session.date} at {session.time}</div>
                    <div>{session.duration} • {session.registered} registered</div>
                  </div>
                  <button className="mt-2 w-full px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700">
                    Register
                  </button>
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
                Continue Learning
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
                Join Study Group
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Training Progress Chart */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Progress Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="Completed" />
                    <Line type="monotone" dataKey="enrolled" stroke="#3b82f6" strokeWidth={2} name="Enrolled" />
                    <Line type="monotone" dataKey="certification" stroke="#f59e0b" strokeWidth={2} name="Certified" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution and Team Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Categories</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsBarChart data={teamPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completion" fill="#8b5cf6" name="Completion %" />
                      <Bar dataKey="certification" fill="#10b981" name="Certification %" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {getFilteredCourses().map((course) => (
                <div key={course.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        {getCategoryIcon(course.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-3">{course.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Book className="w-4 h-4" />
                            {course.modules} modules
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {course.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.enrolled} enrolled
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </span>
                      {course.mandatory && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          Mandatory
                        </span>
                      )}
                      {course.certification && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                          Certification
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Completion Rate</span>
                      <span>{course.completion_rate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${course.completion_rate}%` }}
                      />
                    </div>
                  </div>

                  {selectedCourse === course.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Learning Objectives</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {course.learning_objectives.map((objective, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Course Topics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {course.topics.map((topic, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <strong>Prerequisites:</strong> {course.prerequisites}
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
                      {course.certification && (
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
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Learning Progress</h3>
              <div className="space-y-6">
                {trainingCourses.map((course, index) => {
                  const progress = [100, 100, 65, 100, 100, 45][index]; // Mock progress data
                  const status = progress === 100 ? 'completed' : progress > 0 ? 'in_progress' : 'not_started';
                  
                  return (
                    <div key={course.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium text-gray-900">{course.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            status === 'completed' ? 'bg-green-100 text-green-700' :
                            status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {status === 'completed' ? 'Completed' :
                             status === 'in_progress' ? 'In Progress' : 'Not Started'}
                          </span>
                          {course.certification && status === 'completed' && (
                            <Award className="w-4 h-4 text-yellow-600" />
                          )}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{progress}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            status === 'completed' ? 'bg-green-500' :
                            status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-400'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{course.duration} • {course.modules} modules</span>
                        {status === 'in_progress' && (
                          <button className="text-purple-600 hover:text-purple-700 font-medium">
                            Continue Learning
                          </button>
                        )}
                        {status === 'completed' && course.certification && (
                          <button 
                            onClick={() => downloadCertificate(course.id)}
                            className="text-purple-600 hover:text-purple-700 font-medium"
                          >
                            Download Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
                <div className="space-y-4">
                  {teamPerformance.map((dept, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{dept.department}</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-blue-600">Completion: {dept.completion}%</span>
                          <span className="text-green-600">Certification: {dept.certification}%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Course Completion</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${dept.completion}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Certification Rate</div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${dept.certification}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityTrainingPortal;

