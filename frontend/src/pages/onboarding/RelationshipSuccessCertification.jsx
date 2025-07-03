import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Star, 
  Trophy, 
  Medal, 
  Crown, 
  Target, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Brain,
  Heart,
  Users,
  MessageCircle,
  Shield,
  TrendingUp,
  Zap,
  Eye,
  Download,
  Share2,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Plus,
  Lock,
  Unlock,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Lightbulb,
  Gift,
  Sparkles,
  Flame,
  Gem,
  Badge,
  Ribbon,
  Certificate,
  GraduationCap,
  Briefcase,
  Globe,
  Camera,
  Video,
  FileText,
  Link,
  ExternalLink,
  Info,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Filter,
  Search
} from 'lucide-react';

const RelationshipSuccessCertification = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [earnedCertificates, setEarnedCertificates] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Certification programs
  const programs = [
    {
      id: 'foundation',
      title: 'Relationship Foundation Mastery',
      level: 'Foundation',
      description: 'Master the fundamental skills every thriving relationship needs',
      duration: '4-6 weeks',
      modules: 8,
      assessments: 3,
      practicalExercises: 15,
      difficulty: 'Beginner',
      icon: Heart,
      color: 'bg-pink-500',
      badge: 'foundation-badge.png',
      requirements: [],
      skills: [
        'Effective Communication',
        'Active Listening',
        'Emotional Intelligence',
        'Conflict Prevention',
        'Trust Building',
        'Intimacy Basics'
      ],
      modules_detail: [
        {
          id: 1,
          title: 'Communication Fundamentals',
          description: 'Learn the basics of healthy relationship communication',
          duration: '45 minutes',
          lessons: 5,
          completed: true,
          score: 92
        },
        {
          id: 2,
          title: 'Building Emotional Connection',
          description: 'Develop deeper emotional intimacy with your partner',
          duration: '50 minutes',
          lessons: 6,
          completed: true,
          score: 88
        },
        {
          id: 3,
          title: 'Trust and Vulnerability',
          description: 'Create a foundation of trust through healthy vulnerability',
          duration: '40 minutes',
          lessons: 4,
          completed: false,
          score: null
        }
      ],
      benefits: [
        'Improved daily communication',
        'Stronger emotional bond',
        'Better conflict prevention',
        'Increased relationship satisfaction'
      ],
      price: 'Free',
      enrolled: 15847,
      rating: 4.8,
      completionRate: 78
    },
    {
      id: 'communication',
      title: 'Advanced Communication Specialist',
      level: 'Intermediate',
      description: 'Become an expert in relationship communication and conflict resolution',
      duration: '6-8 weeks',
      modules: 12,
      assessments: 5,
      practicalExercises: 25,
      difficulty: 'Intermediate',
      icon: MessageCircle,
      color: 'bg-blue-500',
      badge: 'communication-badge.png',
      requirements: ['Relationship Foundation Mastery'],
      skills: [
        'Advanced Active Listening',
        'Nonviolent Communication',
        'Conflict Resolution',
        'Difficult Conversations',
        'Emotional Regulation',
        'Empathetic Response'
      ],
      modules_detail: [
        {
          id: 1,
          title: 'Nonviolent Communication Mastery',
          description: 'Master the NVC framework for compassionate communication',
          duration: '60 minutes',
          lessons: 7,
          completed: false,
          score: null
        }
      ],
      benefits: [
        'Master difficult conversations',
        'Resolve conflicts peacefully',
        'Improve emotional regulation',
        'Enhance empathy and understanding'
      ],
      price: '$97',
      enrolled: 8934,
      rating: 4.9,
      completionRate: 85
    },
    {
      id: 'intimacy',
      title: 'Intimacy & Connection Expert',
      level: 'Intermediate',
      description: 'Deepen physical, emotional, and spiritual intimacy in your relationship',
      duration: '5-7 weeks',
      modules: 10,
      assessments: 4,
      practicalExercises: 20,
      difficulty: 'Intermediate',
      icon: Flame,
      color: 'bg-red-500',
      badge: 'intimacy-badge.png',
      requirements: ['Relationship Foundation Mastery'],
      skills: [
        'Emotional Intimacy',
        'Physical Connection',
        'Spiritual Bonding',
        'Vulnerability Practices',
        'Intimacy Communication',
        'Relationship Rituals'
      ],
      modules_detail: [],
      benefits: [
        'Deeper emotional connection',
        'Enhanced physical intimacy',
        'Stronger spiritual bond',
        'Increased relationship passion'
      ],
      price: '$127',
      enrolled: 6721,
      rating: 4.7,
      completionRate: 82
    },
    {
      id: 'leadership',
      title: 'Relationship Leadership Certification',
      level: 'Advanced',
      description: 'Lead by example and mentor other couples in their relationship journey',
      duration: '8-12 weeks',
      modules: 15,
      assessments: 7,
      practicalExercises: 35,
      difficulty: 'Advanced',
      icon: Crown,
      color: 'bg-purple-500',
      badge: 'leadership-badge.png',
      requirements: ['Advanced Communication Specialist', 'Intimacy & Connection Expert'],
      skills: [
        'Relationship Mentoring',
        'Couple Coaching Basics',
        'Community Leadership',
        'Workshop Facilitation',
        'Relationship Assessment',
        'Growth Planning'
      ],
      modules_detail: [],
      benefits: [
        'Mentor other couples',
        'Lead relationship workshops',
        'Build community connections',
        'Develop coaching skills'
      ],
      price: '$297',
      enrolled: 2156,
      rating: 4.9,
      completionRate: 91
    },
    {
      id: 'master',
      title: 'Relationship Master Certification',
      level: 'Master',
      description: 'Achieve the highest level of relationship mastery and expertise',
      duration: '12-16 weeks',
      modules: 20,
      assessments: 10,
      practicalExercises: 50,
      difficulty: 'Master',
      icon: Gem,
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
      badge: 'master-badge.png',
      requirements: ['Relationship Leadership Certification'],
      skills: [
        'Relationship Mastery',
        'Advanced Coaching',
        'Program Development',
        'Research & Analysis',
        'Professional Mentoring',
        'Thought Leadership'
      ],
      modules_detail: [],
      benefits: [
        'Become a relationship expert',
        'Develop your own programs',
        'Professional recognition',
        'Thought leadership platform'
      ],
      price: '$497',
      enrolled: 543,
      rating: 5.0,
      completionRate: 96
    }
  ];

  // Sample earned certificates
  useEffect(() => {
    setEarnedCertificates([
      {
        id: 1,
        programId: 'foundation',
        title: 'Relationship Foundation Mastery',
        earnedDate: '2025-06-15',
        score: 92,
        certificateNumber: 'RF-2025-001847',
        skills: ['Effective Communication', 'Active Listening', 'Emotional Intelligence'],
        verificationUrl: 'https://flourish.app/verify/RF-2025-001847'
      }
    ]);

    setUserProgress({
      foundation: {
        enrolled: true,
        completed: true,
        progress: 100,
        currentModule: null,
        score: 92,
        timeSpent: 380 // minutes
      },
      communication: {
        enrolled: true,
        completed: false,
        progress: 25,
        currentModule: 1,
        score: null,
        timeSpent: 95
      }
    });
  }, []);

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-orange-100 text-orange-800',
    'Master': 'bg-purple-100 text-purple-800'
  };

  const levelColors = {
    'Foundation': 'bg-pink-100 text-pink-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800',
    'Master': 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800'
  };

  const getProgressStats = () => {
    const totalPrograms = programs.length;
    const enrolledPrograms = Object.keys(userProgress).length;
    const completedPrograms = Object.values(userProgress).filter(p => p.completed).length;
    const totalProgress = Object.values(userProgress).reduce((sum, p) => sum + p.progress, 0);
    const averageProgress = enrolledPrograms > 0 ? Math.round(totalProgress / enrolledPrograms) : 0;

    return { totalPrograms, enrolledPrograms, completedPrograms, averageProgress };
  };

  const stats = getProgressStats();

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Relationship Success Certification</h2>
            <p className="text-purple-100 mb-4">
              Earn recognized credentials in relationship skills and become a certified relationship expert
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.completedPrograms}</div>
                <div className="text-sm text-purple-100">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.enrolledPrograms}</div>
                <div className="text-sm text-purple-100">Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.averageProgress}%</div>
                <div className="text-sm text-purple-100">Avg Progress</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Trophy className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Get Certified?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Professional Recognition</h4>
            <p className="text-sm text-gray-600">
              Earn industry-recognized credentials that validate your relationship expertise
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Skill Development</h4>
            <p className="text-sm text-gray-600">
              Master advanced relationship skills through structured learning and practice
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Community Impact</h4>
            <p className="text-sm text-gray-600">
              Help other couples succeed and build stronger relationships in your community
            </p>
          </div>
        </div>
      </div>

      {/* Certification Pathway */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Certification Pathway</h3>
        <div className="space-y-4">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const progress = userProgress[program.id];
            const isLocked = program.requirements.length > 0 && 
              !program.requirements.every(req => {
                const reqProgram = programs.find(p => p.title === req);
                return reqProgram && userProgress[reqProgram.id]?.completed;
              });

            return (
              <div key={program.id} className="relative">
                {index > 0 && (
                  <div className="absolute left-6 -top-4 w-0.5 h-4 bg-gray-300"></div>
                )}
                <div className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                  progress?.completed 
                    ? 'border-green-200 bg-green-50'
                    : progress?.enrolled
                    ? 'border-blue-200 bg-blue-50'
                    : isLocked
                    ? 'border-gray-200 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className={`h-12 w-12 ${program.color} rounded-lg flex items-center justify-center relative`}>
                    {isLocked ? (
                      <Lock className="h-6 w-6 text-white" />
                    ) : progress?.completed ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <Icon className="h-6 w-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{program.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[program.level]}`}>
                        {program.level}
                      </span>
                      {progress?.completed && (
                        <Award className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                    
                    {progress && (
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">{progress.progress}%</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{program.price}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProgram(program)}
                    disabled={isLocked}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isLocked
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : progress?.completed
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : progress?.enrolled
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isLocked ? 'Locked' : progress?.completed ? 'View Certificate' : progress?.enrolled ? 'Continue' : 'Enroll'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderMyCertificates = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Earned Certificates</p>
              <p className="text-2xl font-bold text-green-600">{earnedCertificates.length}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-blue-600">
                {Object.values(userProgress).filter(p => p.enrolled && !p.completed).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-purple-600">
                {earnedCertificates.length > 0 
                  ? Math.round(earnedCertificates.reduce((sum, cert) => sum + cert.score, 0) / earnedCertificates.length)
                  : 0
                }
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Study Time</p>
              <p className="text-2xl font-bold text-orange-600">
                {Math.round(Object.values(userProgress).reduce((sum, p) => sum + (p.timeSpent || 0), 0) / 60)}h
              </p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Earned Certificates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">My Certificates</h3>
        
        {earnedCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earnedCertificates.map(certificate => (
              <div key={certificate.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-16 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{certificate.title}</h4>
                    <p className="text-sm text-gray-600">Earned: {certificate.earnedDate}</p>
                    <p className="text-sm text-gray-600">Score: {certificate.score}/100</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Certified Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">Certificate ID: {certificate.certificateNumber}</p>
                  <p className="text-xs text-gray-600">Verification: {certificate.verificationUrl}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCertificate(certificate);
                      setShowCertificateModal(true);
                    }}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h4>
            <p className="text-gray-600 mb-4">Complete your first certification program to earn your first certificate.</p>
            <button
              onClick={() => setActiveTab('overview')}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Browse Programs
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderCertificateModal = () => {
    if (!showCertificateModal || !selectedCertificate) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Certificate Design */}
          <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center mb-6">
              <div className="h-16 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Achievement</h2>
              <p className="text-gray-600">Flourish Relationship Success Certification</p>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-2">This certifies that</p>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">You & Your Partner</h3>
              <p className="text-lg text-gray-700 mb-4">have successfully completed</p>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{selectedCertificate.title}</h4>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Date Earned</p>
                  <p className="font-semibold text-gray-900">{selectedCertificate.earnedDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Final Score</p>
                  <p className="font-semibold text-gray-900">{selectedCertificate.score}/100</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Certified Skills</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedCertificate.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500">Certificate ID: {selectedCertificate.certificateNumber}</p>
                <p className="text-xs text-gray-500">Verify at: {selectedCertificate.verificationUrl}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => setShowCertificateModal(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Relationship Success Certification</h1>
                <p className="text-sm text-gray-600">Earn recognized credentials in relationship expertise</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Trophy className="h-4 w-4" />
                <span>{earnedCertificates.length} certificates earned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Certification Programs
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'certificates'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Certificates
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'leaderboard'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Community Leaderboard
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'certificates' && renderMyCertificates()}
        {activeTab === 'leaderboard' && (
          <div className="text-center py-12">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Community Leaderboard Coming Soon</h3>
            <p className="text-gray-600">See how you rank among other certified relationship experts</p>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {renderCertificateModal()}
    </div>
  );
};

export default RelationshipSuccessCertification;

