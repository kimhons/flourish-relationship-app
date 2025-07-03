import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Calendar, 
  BookOpen, 
  Star, 
  Lock, 
  Unlock, 
  Play, 
  CheckCircle, 
  Clock, 
  Target,
  ArrowRight,
  Filter,
  Search,
  Award,
  TrendingUp,
  MessageCircle,
  Eye,
  EyeOff,
  Shield,
  Lightbulb,
  Gift,
  Sparkles,
  Moon,
  Sun
} from 'lucide-react';

const IntimacyEnhancementPlatform = () => {
  const [activeTab, setActiveTab] = useState('activities');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [completedActivities, setCompletedActivities] = useState([]);
  const [privacyMode, setPrivacyMode] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Intimacy activities data
  const intimacyActivities = [
    {
      id: 1,
      title: "Daily Appreciation Ritual",
      description: "Share three things you appreciate about each other every day",
      category: "emotional",
      difficulty: "beginner",
      duration: "10 min",
      type: "daily",
      icon: Heart,
      color: "bg-pink-500",
      benefits: ["Increases gratitude", "Builds positive focus", "Strengthens emotional bond"],
      instructions: [
        "Set aside 10 minutes each evening",
        "Take turns sharing three specific appreciations",
        "Be specific about actions, qualities, or moments",
        "Listen without interrupting or responding immediately",
        "End with a hug or physical affection"
      ],
      tips: [
        "Focus on recent actions or behaviors",
        "Use 'I appreciate when you...' format",
        "Include both big and small gestures",
        "Make eye contact while sharing"
      ]
    },
    {
      id: 2,
      title: "Mindful Touch Exercise",
      description: "Practice intentional, non-sexual touch to build physical connection",
      category: "physical",
      difficulty: "beginner",
      duration: "15 min",
      type: "weekly",
      icon: Users,
      color: "bg-blue-500",
      benefits: ["Increases oxytocin", "Reduces stress", "Builds physical comfort"],
      instructions: [
        "Find a comfortable, private space",
        "Take turns giving and receiving touch",
        "Focus on hands, arms, shoulders, or back",
        "Use slow, intentional movements",
        "Communicate what feels good",
        "Stay present and mindful"
      ],
      tips: [
        "Start with 5 minutes each direction",
        "Use massage oil or lotion if desired",
        "Focus on giving pleasure, not receiving",
        "Breathe deeply and stay relaxed"
      ]
    },
    {
      id: 3,
      title: "Vulnerability Sharing",
      description: "Share deeper thoughts and feelings in a safe, structured way",
      category: "emotional",
      difficulty: "intermediate",
      duration: "30 min",
      type: "weekly",
      icon: MessageCircle,
      color: "bg-purple-500",
      benefits: ["Deepens emotional intimacy", "Builds trust", "Increases understanding"],
      instructions: [
        "Choose a comfortable, private setting",
        "Use provided conversation prompts",
        "Take turns sharing without judgment",
        "Listen with full attention and empathy",
        "Ask clarifying questions with curiosity",
        "Thank each other for sharing"
      ],
      tips: [
        "Start with easier prompts and build up",
        "Respect if someone isn't ready to share",
        "Focus on understanding, not fixing",
        "Keep shared information confidential"
      ]
    },
    {
      id: 4,
      title: "Sensory Connection Game",
      description: "Explore the five senses together to enhance physical awareness",
      category: "physical",
      difficulty: "intermediate",
      duration: "45 min",
      type: "monthly",
      icon: Eye,
      color: "bg-green-500",
      benefits: ["Heightens sensory awareness", "Increases presence", "Builds anticipation"],
      instructions: [
        "Gather items for each sense (music, scents, textures, tastes)",
        "Take turns blindfolding each other",
        "Explore different sensations slowly",
        "Describe what you're experiencing",
        "Focus on the giver's pleasure in giving",
        "Switch roles halfway through"
      ],
      tips: [
        "Use safe, pleasant items only",
        "Communicate boundaries clearly",
        "Focus on the experience, not the outcome",
        "Take your time with each sensation"
      ]
    },
    {
      id: 5,
      title: "Love Language Date Night",
      description: "Plan dates specifically around your partner's love language",
      category: "connection",
      difficulty: "beginner",
      duration: "2-3 hours",
      type: "monthly",
      icon: Gift,
      color: "bg-yellow-500",
      benefits: ["Speaks partner's language", "Shows thoughtfulness", "Creates special memories"],
      instructions: [
        "Identify your partner's primary love language",
        "Plan an activity focused on that language",
        "Put away distractions (phones, etc.)",
        "Be fully present and engaged",
        "Express appreciation for the effort",
        "Discuss what felt most meaningful"
      ],
      tips: [
        "Quality Time: Plan undivided attention activities",
        "Physical Touch: Include appropriate affection",
        "Words: Write notes or give verbal affirmations",
        "Acts of Service: Do something helpful for them"
      ]
    },
    {
      id: 6,
      title: "Intimacy Check-In Conversation",
      description: "Regular discussions about your intimate connection and needs",
      category: "communication",
      difficulty: "intermediate",
      duration: "20 min",
      type: "monthly",
      icon: Target,
      color: "bg-indigo-500",
      benefits: ["Improves communication", "Addresses needs", "Prevents issues"],
      instructions: [
        "Schedule a regular time for this conversation",
        "Use 'I' statements to express needs",
        "Listen without becoming defensive",
        "Discuss what's working well",
        "Share what you'd like more of",
        "Make specific, actionable agreements"
      ],
      tips: [
        "Keep the tone positive and curious",
        "Focus on connection, not performance",
        "Be specific about desires and boundaries",
        "Celebrate progress and improvements"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', icon: Heart },
    { id: 'emotional', name: 'Emotional Intimacy', icon: Heart },
    { id: 'physical', name: 'Physical Connection', icon: Users },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'connection', name: 'Connection Building', icon: Sparkles }
  ];

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const typeColors = {
    daily: 'bg-blue-100 text-blue-800',
    weekly: 'bg-purple-100 text-purple-800',
    monthly: 'bg-orange-100 text-orange-800'
  };

  const filteredActivities = intimacyActivities.filter(activity => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const markActivityCompleted = (activityId) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities([...completedActivities, activityId]);
    }
  };

  const getProgressStats = () => {
    const totalActivities = intimacyActivities.length;
    const completed = completedActivities.length;
    const emotionalCompleted = intimacyActivities.filter(a => 
      a.category === 'emotional' && completedActivities.includes(a.id)
    ).length;
    const physicalCompleted = intimacyActivities.filter(a => 
      a.category === 'physical' && completedActivities.includes(a.id)
    ).length;

    return {
      totalActivities,
      completed,
      completionRate: Math.round((completed / totalActivities) * 100),
      emotionalCompleted,
      physicalCompleted
    };
  };

  const stats = getProgressStats();

  const renderActivitiesGrid = () => (
    <div className="space-y-6">
      {/* Privacy Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-medium text-blue-900">Privacy & Safety</h3>
            <p className="text-sm text-blue-700 mt-1">
              All intimacy activities are designed to be safe, consensual, and appropriate for committed relationships. 
              Your privacy is protected - no activity data is shared or stored externally.
            </p>
          </div>
          <button
            onClick={() => setPrivacyMode(!privacyMode)}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            {privacyMode ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            <span className="text-sm">{privacyMode ? 'Show' : 'Hide'}</span>
          </button>
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
                      ? 'bg-pink-100 text-pink-700 border border-pink-200'
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
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredActivities.map(activity => {
          const Icon = activity.icon;
          const isCompleted = completedActivities.includes(activity.id);
          
          return (
            <div key={activity.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 ${activity.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[activity.difficulty]}`}>
                    {activity.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[activity.type]}`}>
                    {activity.type}
                  </span>
                  {isCompleted && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{activity.benefits.length} benefits</span>
                </div>
              </div>
              
              {/* Benefits Preview */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-1">
                  {activity.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {benefit}
                    </span>
                  ))}
                  {activity.benefits.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{activity.benefits.length - 2} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="flex items-center space-x-2 text-pink-600 hover:text-pink-700"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                
                {!isCompleted ? (
                  <button
                    onClick={() => markActivityCompleted(activity.id)}
                    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Start</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedActivity(activity)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Review</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No activities found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Activities Completed</p>
              <p className="text-2xl font-bold text-pink-600">{stats.completed}</p>
            </div>
            <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-blue-600">{stats.completionRate}%</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Emotional Focus</p>
              <p className="text-2xl font-bold text-purple-600">{stats.emotionalCompleted}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Physical Focus</p>
              <p className="text-2xl font-bold text-green-600">{stats.physicalCompleted}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress by Category</h3>
        <div className="space-y-4">
          {categories.slice(1).map(category => {
            const categoryActivities = intimacyActivities.filter(activity => activity.category === category.id);
            const completedInCategory = categoryActivities.filter(activity => 
              completedActivities.includes(activity.id)
            ).length;
            const progress = categoryActivities.length > 0 
              ? Math.round((completedInCategory / categoryActivities.length) * 100) 
              : 0;
            const Icon = category.icon;

            return (
              <div key={category.id} className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-600">{completedInCategory}/{categoryActivities.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pink-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{progress}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        {completedActivities.length > 0 ? (
          <div className="space-y-3">
            {completedActivities.slice(-3).reverse().map(activityId => {
              const activity = intimacyActivities.find(a => a.id === activityId);
              const Icon = activity?.icon;
              
              return (
                <div key={activityId} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`h-8 w-8 ${activity?.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity?.title}</p>
                    <p className="text-sm text-gray-600">{activity?.category} • {activity?.duration}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600">No activities completed yet. Start with the basics!</p>
        )}
      </div>
    </div>
  );

  const renderActivityModal = () => {
    if (!selectedActivity) return null;

    const Icon = selectedActivity.icon;
    const isCompleted = completedActivities.includes(selectedActivity.id);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`h-12 w-12 ${selectedActivity.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedActivity.title}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[selectedActivity.difficulty]}`}>
                      {selectedActivity.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[selectedActivity.type]}`}>
                      {selectedActivity.type}
                    </span>
                    <span className="text-sm text-gray-600">{selectedActivity.duration}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedActivity(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <p className="text-gray-700">{selectedActivity.description}</p>
            
            {/* Benefits */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {selectedActivity.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Step-by-Step Instructions</h3>
              <div className="space-y-3">
                {selectedActivity.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-6 w-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-sm font-medium mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Helpful Tips</h3>
              <div className="space-y-2">
                {selectedActivity.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <p className="text-sm text-yellow-800">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Safe, consensual, and relationship-focused</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSelectedActivity(null)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              
              {!isCompleted ? (
                <button
                  onClick={() => {
                    markActivityCompleted(selectedActivity.id);
                    setSelectedActivity(null);
                  }}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Start Activity</span>
                </button>
              ) : (
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </button>
              )}
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
              <div className="h-8 w-8 bg-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Intimacy Enhancement Platform</h1>
                <p className="text-sm text-gray-600">Strengthen your emotional and physical connection</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{stats.completed} activities completed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>{stats.completionRate}% progress</span>
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
              onClick={() => setActiveTab('activities')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'activities'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Intimacy Activities
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Progress
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resources
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'activities' && renderActivitiesGrid()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'resources' && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Resources Coming Soon</h3>
            <p className="text-gray-600">Additional intimacy resources and educational content</p>
          </div>
        )}
      </div>

      {/* Activity Detail Modal */}
      {renderActivityModal()}
    </div>
  );
};

export default IntimacyEnhancementPlatform;

