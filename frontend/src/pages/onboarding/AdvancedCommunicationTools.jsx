import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Mic, 
  Video, 
  BookOpen, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowRight,
  Volume2,
  Headphones,
  MessageSquare,
  Eye,
  Lightbulb,
  Target,
  Award,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  Download,
  Share2
} from 'lucide-react';

const AdvancedCommunicationTools = () => {
  const [activeTab, setActiveTab] = useState('exercises');
  const [selectedTool, setSelectedTool] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [exerciseProgress, setExerciseProgress] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedExercises, setCompletedExercises] = useState([]);

  // Communication tools data
  const communicationTools = [
    {
      id: 1,
      title: "Active Listening Trainer",
      description: "Interactive exercises to improve your listening skills and show empathy",
      category: "listening",
      difficulty: "beginner",
      duration: "15 min",
      icon: Headphones,
      color: "bg-blue-500",
      exercises: [
        {
          id: 1,
          title: "Reflective Listening",
          description: "Practice reflecting back what your partner says",
          steps: [
            "Listen to your partner without interrupting",
            "Reflect back what you heard in your own words",
            "Ask clarifying questions if needed",
            "Confirm understanding before responding"
          ],
          tips: [
            "Use phrases like 'What I hear you saying is...'",
            "Focus on emotions as well as facts",
            "Avoid giving advice immediately"
          ]
        },
        {
          id: 2,
          title: "Empathy Building",
          description: "Learn to understand and validate your partner's emotions",
          steps: [
            "Identify the emotion behind the words",
            "Acknowledge the feeling without judgment",
            "Share a similar experience if appropriate",
            "Offer support and understanding"
          ],
          tips: [
            "Use 'I can see that you're feeling...'",
            "Validate emotions even if you disagree with actions",
            "Ask 'How can I support you right now?'"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Conflict Resolution Framework",
      description: "Structured approach to resolving disagreements constructively",
      category: "conflict",
      difficulty: "intermediate",
      duration: "30 min",
      icon: Users,
      color: "bg-green-500",
      exercises: [
        {
          id: 1,
          title: "The PEACE Method",
          description: "A 5-step process for resolving conflicts peacefully",
          steps: [
            "Pause: Take a break if emotions are high",
            "Empathize: Understand each other's perspective",
            "Apologize: Take responsibility for your part",
            "Collaborate: Work together on solutions",
            "Evaluate: Check in on progress later"
          ],
          tips: [
            "Use 'I' statements instead of 'you' statements",
            "Focus on the issue, not the person",
            "Look for win-win solutions"
          ]
        },
        {
          id: 2,
          title: "Fair Fighting Rules",
          description: "Guidelines for arguing constructively",
          steps: [
            "Stay focused on the current issue",
            "No name-calling or personal attacks",
            "Take turns speaking without interruption",
            "Use specific examples, not generalizations",
            "Work toward resolution, not winning"
          ],
          tips: [
            "Avoid words like 'always' and 'never'",
            "Take breaks if discussion gets heated",
            "Remember you're on the same team"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Emotional Expression Guide",
      description: "Learn to express feelings clearly and constructively",
      category: "emotions",
      difficulty: "beginner",
      duration: "20 min",
      icon: Heart,
      color: "bg-pink-500",
      exercises: [
        {
          id: 1,
          title: "Feeling Identification",
          description: "Practice identifying and naming emotions accurately",
          steps: [
            "Notice physical sensations in your body",
            "Identify the primary emotion you're feeling",
            "Consider what triggered this emotion",
            "Express the feeling using 'I feel...' statements"
          ],
          tips: [
            "Use an emotion wheel for more precise words",
            "Distinguish between feelings and thoughts",
            "Practice daily emotion check-ins"
          ]
        },
        {
          id: 2,
          title: "Vulnerable Communication",
          description: "Share deeper feelings and needs safely",
          steps: [
            "Choose an appropriate time and place",
            "Start with 'I feel...' or 'I need...'",
            "Be specific about what you're experiencing",
            "Ask for what you need from your partner"
          ],
          tips: [
            "Start small and build trust gradually",
            "Appreciate your partner's vulnerability too",
            "Create a safe space for sharing"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Daily Check-In System",
      description: "Structured conversations to stay connected daily",
      category: "connection",
      difficulty: "beginner",
      duration: "10 min",
      icon: MessageCircle,
      color: "bg-purple-500",
      exercises: [
        {
          id: 1,
          title: "Highs and Lows",
          description: "Share the best and most challenging parts of your day",
          steps: [
            "Each person shares their high of the day",
            "Each person shares their low or challenge",
            "Ask follow-up questions with curiosity",
            "Offer support or celebration as appropriate"
          ],
          tips: [
            "Be present and put away distractions",
            "Ask 'How can I support you?' for lows",
            "Celebrate the highs together"
          ]
        },
        {
          id: 2,
          title: "Appreciation Practice",
          description: "Express gratitude and appreciation daily",
          steps: [
            "Share one thing you appreciated about your partner",
            "Be specific about what they did or said",
            "Explain how it made you feel",
            "Thank them genuinely"
          ],
          tips: [
            "Notice small gestures, not just big ones",
            "Be specific rather than general",
            "Make it a daily habit"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Nonverbal Communication",
      description: "Understand and improve body language and tone",
      category: "nonverbal",
      difficulty: "intermediate",
      duration: "25 min",
      icon: Eye,
      color: "bg-orange-500",
      exercises: [
        {
          id: 1,
          title: "Body Language Awareness",
          description: "Learn to read and use positive body language",
          steps: [
            "Practice open posture (uncrossed arms, facing partner)",
            "Maintain appropriate eye contact",
            "Mirror your partner's posture subtly",
            "Notice defensive body language in yourself"
          ],
          tips: [
            "Lean in slightly to show interest",
            "Keep your phone away during conversations",
            "Notice when you cross your arms or turn away"
          ]
        },
        {
          id: 2,
          title: "Tone and Voice",
          description: "Use your voice to convey care and respect",
          steps: [
            "Practice speaking at a calm, measured pace",
            "Lower your voice when discussing sensitive topics",
            "Match your tone to your intended message",
            "Use pauses effectively for emphasis"
          ],
          tips: [
            "Record yourself to hear how you sound",
            "Practice deep breathing before difficult conversations",
            "Ask 'How did that sound to you?'"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Love Languages Communication",
      description: "Communicate effectively based on love languages",
      category: "love-languages",
      difficulty: "intermediate",
      duration: "20 min",
      icon: Star,
      color: "bg-yellow-500",
      exercises: [
        {
          id: 1,
          title: "Speaking Their Language",
          description: "Practice communicating in your partner's love language",
          steps: [
            "Identify your partner's primary love language",
            "Plan specific ways to communicate love in that language",
            "Practice daily expressions in their language",
            "Ask for feedback on your efforts"
          ],
          tips: [
            "Quality time: Give undivided attention",
            "Words: Use specific, meaningful affirmations",
            "Touch: Offer appropriate physical affection"
          ]
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: Target },
    { id: 'listening', name: 'Active Listening', icon: Headphones },
    { id: 'conflict', name: 'Conflict Resolution', icon: Users },
    { id: 'emotions', name: 'Emotional Expression', icon: Heart },
    { id: 'connection', name: 'Daily Connection', icon: MessageCircle },
    { id: 'nonverbal', name: 'Nonverbal', icon: Eye },
    { id: 'love-languages', name: 'Love Languages', icon: Star }
  ];

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const filteredTools = communicationTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startExercise = (tool, exercise) => {
    setCurrentExercise({ tool, exercise });
    setExerciseProgress({ currentStep: 0, completed: false });
  };

  const nextStep = () => {
    const currentStep = exerciseProgress.currentStep || 0;
    const totalSteps = currentExercise.exercise.steps.length;
    
    if (currentStep < totalSteps - 1) {
      setExerciseProgress({ ...exerciseProgress, currentStep: currentStep + 1 });
    } else {
      setExerciseProgress({ ...exerciseProgress, completed: true });
      if (!completedExercises.includes(currentExercise.exercise.id)) {
        setCompletedExercises([...completedExercises, currentExercise.exercise.id]);
      }
    }
  };

  const resetExercise = () => {
    setExerciseProgress({ currentStep: 0, completed: false });
  };

  const closeExercise = () => {
    setCurrentExercise(null);
    setExerciseProgress({});
  };

  const renderToolsGrid = () => (
    <div className="space-y-6">
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
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
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
              placeholder="Search communication tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map(tool => {
          const Icon = tool.icon;
          const completedCount = tool.exercises.filter(ex => 
            completedExercises.includes(ex.id)
          ).length;
          
          return (
            <div key={tool.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[tool.difficulty]}`}>
                  {tool.difficulty}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{tool.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>{completedCount}/{tool.exercises.length} completed</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {tool.exercises.map(exercise => (
                  <div key={exercise.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{exercise.title}</h4>
                      <p className="text-gray-600 text-xs">{exercise.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {completedExercises.includes(exercise.id) && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      <button
                        onClick={() => startExercise(tool, exercise)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Play className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setSelectedTool(tool)}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Exercises Completed</p>
              <p className="text-2xl font-bold text-green-600">{completedExercises.length}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tools Explored</p>
              <p className="text-2xl font-bold text-blue-600">
                {communicationTools.filter(tool => 
                  tool.exercises.some(ex => completedExercises.includes(ex.id))
                ).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Skill Level</p>
              <p className="text-2xl font-bold text-purple-600">
                {completedExercises.length < 3 ? 'Beginner' : 
                 completedExercises.length < 8 ? 'Intermediate' : 'Advanced'}
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress by Category */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress by Category</h3>
        <div className="space-y-4">
          {categories.slice(1).map(category => {
            const categoryTools = communicationTools.filter(tool => tool.category === category.id);
            const totalExercises = categoryTools.reduce((sum, tool) => sum + tool.exercises.length, 0);
            const completedInCategory = categoryTools.reduce((sum, tool) => 
              sum + tool.exercises.filter(ex => completedExercises.includes(ex.id)).length, 0
            );
            const progress = totalExercises > 0 ? Math.round((completedInCategory / totalExercises) * 100) : 0;
            const Icon = category.icon;

            return (
              <div key={category.id} className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-600">{completedInCategory}/{totalExercises}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        {completedExercises.length > 0 ? (
          <div className="space-y-3">
            {completedExercises.slice(-5).reverse().map(exerciseId => {
              const tool = communicationTools.find(t => 
                t.exercises.some(ex => ex.id === exerciseId)
              );
              const exercise = tool?.exercises.find(ex => ex.id === exerciseId);
              
              return (
                <div key={exerciseId} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{exercise?.title}</p>
                    <p className="text-sm text-gray-600">{tool?.title}</p>
                  </div>
                  <span className="text-sm text-gray-500">Completed</span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600">No exercises completed yet. Start with the basics!</p>
        )}
      </div>
    </div>
  );

  const renderExerciseModal = () => {
    if (!currentExercise) return null;

    const { tool, exercise } = currentExercise;
    const currentStep = exerciseProgress.currentStep || 0;
    const isCompleted = exerciseProgress.completed;
    const Icon = tool.icon;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`h-10 w-10 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{exercise.title}</h2>
                  <p className="text-sm text-gray-600">{tool.title}</p>
                </div>
              </div>
              <button
                onClick={closeExercise}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">{exercise.description}</p>
            
            {!isCompleted ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Step {currentStep + 1} of {exercise.steps.length}
                    </span>
                    <span className="text-sm text-gray-600">
                      {Math.round(((currentStep + 1) / exercise.steps.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / exercise.steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Step */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Step {currentStep + 1}: {exercise.steps[currentStep]}
                  </h3>
                  
                  {exercise.tips && exercise.tips[currentStep] && (
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Tip:</p>
                          <p className="text-gray-700 text-sm">{exercise.tips[currentStep]}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* All Tips */}
                {exercise.tips && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Helpful Tips:</h4>
                    <ul className="space-y-1">
                      {exercise.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="text-gray-400">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Exercise Completed!</h3>
                <p className="text-gray-600">
                  Great job completing "{exercise.title}". Practice these techniques regularly to improve your communication skills.
                </p>
              </div>
            )}
          </div>
          
          <div className="p-6 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={resetExercise}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
            
            <div className="flex items-center space-x-3">
              {!isCompleted && currentStep > 0 && (
                <button
                  onClick={() => setExerciseProgress({
                    ...exerciseProgress, 
                    currentStep: currentStep - 1
                  })}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Previous
                </button>
              )}
              
              {!isCompleted ? (
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>{currentStep === exercise.steps.length - 1 ? 'Complete' : 'Next Step'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={closeExercise}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Done
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
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Advanced Communication Tools</h1>
                <p className="text-sm text-gray-600">Interactive exercises to improve your communication skills</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{completedExercises.length} exercises completed</span>
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
              onClick={() => setActiveTab('exercises')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'exercises'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Communication Tools
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'progress'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Progress
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-blue-500 text-blue-600'
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
        {activeTab === 'exercises' && renderToolsGrid()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'resources' && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Resources Coming Soon</h3>
            <p className="text-gray-600">Additional communication resources and guides</p>
          </div>
        )}
      </div>

      {/* Exercise Modal */}
      {renderExerciseModal()}
    </div>
  );
};

export default AdvancedCommunicationTools;

