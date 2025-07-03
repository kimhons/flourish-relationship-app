import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Heart, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  Clock, 
  Star,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Shield,
  Zap,
  Eye,
  MessageCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Download,
  Share2,
  Filter,
  Search,
  Calendar,
  BookOpen,
  AlertTriangle,
  Info,
  Lock,
  Crown
} from 'lucide-react';

const PremiumRelationshipAssessments = () => {
  const [activeTab, setActiveTab] = useState('assessments');
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [assessmentResults, setAssessmentResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showResults, setShowResults] = useState(false);

  // Premium assessments data
  const assessments = [
    {
      id: 1,
      title: "Deep Attachment Analysis",
      category: "psychological",
      description: "Comprehensive analysis of attachment styles and their impact on relationship dynamics",
      duration: "45 minutes",
      questions: 85,
      difficulty: "advanced",
      premium: true,
      accuracy: 96,
      scientificBasis: "Based on Bowlby's Attachment Theory and Adult Attachment Interview protocols",
      benefits: [
        "Understand your core attachment patterns",
        "Identify triggers and defensive behaviors",
        "Learn secure attachment strategies",
        "Improve emotional regulation skills"
      ],
      dimensions: [
        { name: "Secure Attachment", weight: 25 },
        { name: "Anxious Attachment", weight: 25 },
        { name: "Avoidant Attachment", weight: 25 },
        { name: "Disorganized Attachment", weight: 25 }
      ],
      sampleQuestions: [
        "When your partner seems distant, how do you typically respond?",
        "How comfortable are you with emotional intimacy?",
        "What happens when you feel your relationship is threatened?"
      ],
      icon: Brain,
      color: "bg-purple-500",
      completedBy: 12847,
      averageScore: 78
    },
    {
      id: 2,
      title: "Comprehensive Intimacy Mapping",
      category: "intimacy",
      description: "Multi-dimensional assessment of emotional, physical, intellectual, and spiritual intimacy",
      duration: "35 minutes",
      questions: 68,
      difficulty: "intermediate",
      premium: true,
      accuracy: 94,
      scientificBasis: "Based on Sternberg's Triangular Theory of Love and intimacy research",
      benefits: [
        "Map your intimacy strengths and growth areas",
        "Understand different types of intimacy",
        "Create personalized intimacy enhancement plan",
        "Improve overall relationship satisfaction"
      ],
      dimensions: [
        { name: "Emotional Intimacy", weight: 30 },
        { name: "Physical Intimacy", weight: 25 },
        { name: "Intellectual Intimacy", weight: 25 },
        { name: "Spiritual Intimacy", weight: 20 }
      ],
      sampleQuestions: [
        "How comfortable are you sharing your deepest fears with your partner?",
        "How important is physical affection in your relationship?",
        "Do you and your partner enjoy intellectual discussions together?"
      ],
      icon: Heart,
      color: "bg-pink-500",
      completedBy: 15632,
      averageScore: 82
    },
    {
      id: 3,
      title: "Advanced Communication Patterns Analysis",
      category: "communication",
      description: "Deep dive into communication styles, patterns, and effectiveness in relationships",
      duration: "40 minutes",
      questions: 72,
      difficulty: "advanced",
      premium: true,
      accuracy: 95,
      scientificBasis: "Based on Gottman's research and Nonviolent Communication principles",
      benefits: [
        "Identify communication strengths and blind spots",
        "Understand your conflict communication style",
        "Learn effective listening and expression techniques",
        "Reduce misunderstandings and conflicts"
      ],
      dimensions: [
        { name: "Active Listening", weight: 25 },
        { name: "Emotional Expression", weight: 25 },
        { name: "Conflict Communication", weight: 25 },
        { name: "Nonverbal Communication", weight: 25 }
      ],
      sampleQuestions: [
        "When your partner is upset, how do you typically respond?",
        "How do you express disagreement in your relationship?",
        "What happens when you feel misunderstood?"
      ],
      icon: MessageCircle,
      color: "bg-blue-500",
      completedBy: 11294,
      averageScore: 75
    },
    {
      id: 4,
      title: "Relationship Resilience & Stress Response",
      category: "resilience",
      description: "Assessment of how you and your partner handle stress, challenges, and adversity together",
      duration: "30 minutes",
      questions: 55,
      difficulty: "intermediate",
      premium: true,
      accuracy: 93,
      scientificBasis: "Based on resilience research and stress-coping theories",
      benefits: [
        "Understand your stress response patterns",
        "Identify relationship protective factors",
        "Learn resilience-building strategies",
        "Strengthen your partnership during challenges"
      ],
      dimensions: [
        { name: "Individual Resilience", weight: 30 },
        { name: "Couple Resilience", weight: 30 },
        { name: "Stress Management", weight: 20 },
        { name: "Recovery Patterns", weight: 20 }
      ],
      sampleQuestions: [
        "How do you and your partner support each other during difficult times?",
        "What happens to your relationship when you're under stress?",
        "How do you recover from relationship conflicts?"
      ],
      icon: Shield,
      color: "bg-green-500",
      completedBy: 9876,
      averageScore: 79
    },
    {
      id: 5,
      title: "Future Compatibility Projection",
      category: "compatibility",
      description: "Advanced analysis of long-term compatibility across life domains and future goals",
      duration: "50 minutes",
      questions: 92,
      difficulty: "advanced",
      premium: true,
      accuracy: 97,
      scientificBasis: "Based on longitudinal relationship studies and compatibility research",
      benefits: [
        "Assess long-term relationship viability",
        "Identify potential future challenges",
        "Align on life goals and values",
        "Create shared vision for the future"
      ],
      dimensions: [
        { name: "Life Goals Alignment", weight: 25 },
        { name: "Values Compatibility", weight: 25 },
        { name: "Lifestyle Preferences", weight: 25 },
        { name: "Growth Potential", weight: 25 }
      ],
      sampleQuestions: [
        "How aligned are you and your partner on major life decisions?",
        "What role does personal growth play in your relationship?",
        "How do you handle differences in life priorities?"
      ],
      icon: Target,
      color: "bg-orange-500",
      completedBy: 8543,
      averageScore: 81
    },
    {
      id: 6,
      title: "Emotional Intelligence in Relationships",
      category: "emotional",
      description: "Comprehensive assessment of emotional intelligence and its application in romantic relationships",
      duration: "38 minutes",
      questions: 76,
      difficulty: "intermediate",
      premium: true,
      accuracy: 94,
      scientificBasis: "Based on Goleman's EQ research and relationship-specific emotional intelligence studies",
      benefits: [
        "Understand your emotional intelligence strengths",
        "Learn to read your partner's emotions better",
        "Improve emotional regulation in relationships",
        "Enhance empathy and emotional connection"
      ],
      dimensions: [
        { name: "Self-Awareness", weight: 25 },
        { name: "Self-Regulation", weight: 25 },
        { name: "Empathy", weight: 25 },
        { name: "Social Skills", weight: 25 }
      ],
      sampleQuestions: [
        "How well do you recognize your emotional triggers?",
        "Can you accurately read your partner's emotional state?",
        "How do you manage your emotions during conflicts?"
      ],
      icon: Brain,
      color: "bg-indigo-500",
      completedBy: 13721,
      averageScore: 77
    }
  ];

  const categories = [
    { id: 'all', name: 'All Assessments', icon: BarChart3 },
    { id: 'psychological', name: 'Psychological', icon: Brain },
    { id: 'intimacy', name: 'Intimacy', icon: Heart },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'resilience', name: 'Resilience', icon: Shield },
    { id: 'compatibility', name: 'Compatibility', icon: Target },
    { id: 'emotional', name: 'Emotional', icon: Zap }
  ];

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  // Sample assessment results
  useEffect(() => {
    setAssessmentResults([
      {
        id: 1,
        assessmentId: 1,
        title: "Deep Attachment Analysis",
        completedDate: "2025-06-15",
        overallScore: 82,
        dimensions: [
          { name: "Secure Attachment", score: 85, description: "Strong foundation for healthy relationships" },
          { name: "Anxious Attachment", score: 25, description: "Low anxiety in relationships" },
          { name: "Avoidant Attachment", score: 30, description: "Comfortable with intimacy" },
          { name: "Disorganized Attachment", score: 15, description: "Consistent attachment patterns" }
        ],
        insights: [
          "You demonstrate strong secure attachment patterns",
          "Your relationship anxiety is well-managed",
          "You're comfortable with emotional intimacy",
          "Continue building on your secure foundation"
        ],
        recommendations: [
          "Practice vulnerability exercises with your partner",
          "Continue open communication about needs",
          "Support your partner's attachment security"
        ]
      },
      {
        id: 2,
        assessmentId: 2,
        title: "Comprehensive Intimacy Mapping",
        completedDate: "2025-06-20",
        overallScore: 78,
        dimensions: [
          { name: "Emotional Intimacy", score: 85, description: "Strong emotional connection" },
          { name: "Physical Intimacy", score: 72, description: "Good physical connection with room for growth" },
          { name: "Intellectual Intimacy", score: 80, description: "Excellent intellectual compatibility" },
          { name: "Spiritual Intimacy", score: 75, description: "Good spiritual alignment" }
        ],
        insights: [
          "Your emotional intimacy is a relationship strength",
          "Physical intimacy has growth potential",
          "You share strong intellectual connection",
          "Spiritual values are well-aligned"
        ],
        recommendations: [
          "Explore new ways to enhance physical connection",
          "Continue deep emotional sharing",
          "Engage in more intellectual discussions together"
        ]
      }
    ]);
  }, []);

  const filteredAssessments = assessments.filter(assessment => {
    const matchesCategory = selectedCategory === 'all' || assessment.category === selectedCategory;
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startAssessment = (assessment) => {
    setSelectedAssessment(assessment);
    setCurrentQuestion(0);
    setResponses({});
    setShowResults(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < selectedAssessment.questions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Assessment complete - show results
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const saveResponse = (questionId, response) => {
    setResponses({
      ...responses,
      [questionId]: response
    });
  };

  const renderAssessmentGrid = () => (
    <div className="space-y-6">
      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Premium Relationship Assessments</h2>
              <p className="text-purple-100">Advanced psychological evaluations for deeper relationship insights</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-purple-100">96% Average Accuracy</p>
            <p className="text-lg font-semibold">Scientifically Validated</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-100 text-purple-700 border border-purple-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assessments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAssessments.map(assessment => {
          const Icon = assessment.icon;
          const hasCompleted = assessmentResults.some(result => result.assessmentId === assessment.id);
          
          return (
            <div key={assessment.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`h-12 w-12 ${assessment.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="h-4 w-4 text-purple-600" />
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      PREMIUM
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[assessment.difficulty]}`}>
                    {assessment.difficulty}
                  </span>
                  {hasCompleted && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{assessment.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{assessment.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{assessment.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{assessment.questions} questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{assessment.accuracy}% accurate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{assessment.completedBy.toLocaleString()} completed</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Scientific Basis:</p>
                <p className="text-xs text-gray-600 italic">{assessment.scientificBasis}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {assessment.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={() => setSelectedAssessment(assessment)}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                
                <button
                  onClick={() => startAssessment(assessment)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>{hasCompleted ? 'Retake' : 'Start'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAssessments.length === 0 && (
        <div className="text-center py-12">
          <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assessments found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6">
      {/* Results Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Assessment Results</h3>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">{assessmentResults.length} completed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {assessmentResults.length > 0 
                ? Math.round(assessmentResults.reduce((sum, result) => sum + result.overallScore, 0) / assessmentResults.length)
                : 0
              }
            </div>
            <div className="text-sm text-gray-600">Average Score</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">{assessmentResults.length}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {assessments.length - assessmentResults.length}
            </div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
        </div>
      </div>

      {/* Individual Results */}
      {assessmentResults.map(result => (
        <div key={result.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">{result.title}</h4>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Completed: {result.completedDate}</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-purple-600">{result.overallScore}</span>
                <span className="text-sm text-gray-500">/100</span>
              </div>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="mb-6">
            <h5 className="font-medium text-gray-900 mb-3">Dimension Breakdown</h5>
            <div className="space-y-3">
              {result.dimensions.map((dimension, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{dimension.name}</span>
                    <span className="text-sm text-gray-600">{dimension.score}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${dimension.score}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{dimension.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="mb-6">
            <h5 className="font-medium text-gray-900 mb-3">Key Insights</h5>
            <div className="space-y-2">
              {result.insights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-4">
            <h5 className="font-medium text-gray-900 mb-3">Recommendations</h5>
            <div className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{recommendation}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 text-sm">
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 text-sm">
                <Share2 className="h-4 w-4" />
                <span>Share Results</span>
              </button>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              Retake Assessment
            </button>
          </div>
        </div>
      ))}

      {assessmentResults.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No results yet</h3>
          <p className="text-gray-600 mb-4">Complete your first premium assessment to see detailed results and insights.</p>
          <button
            onClick={() => setActiveTab('assessments')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Browse Assessments
          </button>
        </div>
      )}
    </div>
  );

  const renderAssessmentModal = () => {
    if (!selectedAssessment || showResults) return null;

    const progress = ((currentQuestion + 1) / selectedAssessment.questions) * 100;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{selectedAssessment.title}</h2>
                <p className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {selectedAssessment.questions}
                </p>
              </div>
              <button
                onClick={() => setSelectedAssessment(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{Math.round(progress)}% complete</p>
            </div>
          </div>
          
          <div className="p-6">
            {/* Sample Question */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {selectedAssessment.sampleQuestions[currentQuestion % selectedAssessment.sampleQuestions.length]}
              </h3>
              
              {/* Sample Response Options */}
              <div className="space-y-3">
                {[
                  "Strongly Disagree",
                  "Disagree", 
                  "Neutral",
                  "Agree",
                  "Strongly Agree"
                ].map((option, index) => (
                  <label key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="response"
                      value={index}
                      onChange={(e) => saveResponse(currentQuestion, e.target.value)}
                      className="text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800">
                    This is a sample question. The actual assessment contains {selectedAssessment.questions} carefully crafted questions 
                    designed to provide accurate insights into your relationship patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => setSelectedAssessment(null)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            
            <div className="flex items-center space-x-3">
              {currentQuestion > 0 && (
                <button
                  onClick={previousQuestion}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Previous
                </button>
              )}
              
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <span>{currentQuestion === selectedAssessment.questions - 1 ? 'Complete' : 'Next'}</span>
                <ArrowRight className="h-4 w-4" />
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
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Premium Relationship Assessments</h1>
                <p className="text-sm text-gray-600">Advanced psychological evaluations for deeper relationship insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Crown className="h-4 w-4 text-purple-600" />
                <span>Premium Feature</span>
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
              onClick={() => setActiveTab('assessments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'assessments'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Available Assessments
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'results'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Results
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'insights'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Insights & Trends
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'assessments' && renderAssessmentGrid()}
        {activeTab === 'results' && renderResults()}
        {activeTab === 'insights' && (
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Insights & Trends Coming Soon</h3>
            <p className="text-gray-600">Advanced analytics and trend analysis for your assessment results</p>
          </div>
        )}
      </div>

      {/* Assessment Modal */}
      {renderAssessmentModal()}
    </div>
  );
};

export default PremiumRelationshipAssessments;

