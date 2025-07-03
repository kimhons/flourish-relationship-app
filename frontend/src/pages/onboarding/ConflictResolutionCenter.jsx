import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  MessageCircle, 
  Heart, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Lightbulb, 
  Play, 
  Pause, 
  RotateCcw,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  Star,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  VolumeX,
  Timer,
  Zap
} from 'lucide-react';

const ConflictResolutionCenter = () => {
  const [activeTab, setActiveTab] = useState('tools');
  const [selectedTool, setSelectedTool] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [sessionProgress, setSessionProgress] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedSessions, setCompletedSessions] = useState([]);
  const [conflictLog, setConflictLog] = useState([]);

  // Conflict resolution tools and frameworks
  const resolutionTools = [
    {
      id: 1,
      title: "PEACE Method",
      description: "A 5-step framework for resolving conflicts peacefully and constructively",
      category: "framework",
      difficulty: "beginner",
      duration: "20 min",
      icon: Shield,
      color: "bg-green-500",
      effectiveness: 92,
      steps: [
        {
          id: 1,
          title: "Pause",
          description: "Take a break to cool down and collect your thoughts",
          details: "When emotions are high, take 20 minutes to calm down before continuing the discussion.",
          tips: [
            "Use deep breathing exercises",
            "Take a walk or do light exercise",
            "Remind yourself that you're on the same team",
            "Avoid making decisions when angry"
          ],
          timeGuide: "5-20 minutes"
        },
        {
          id: 2,
          title: "Empathize",
          description: "Try to understand your partner's perspective and feelings",
          details: "Listen actively and try to see the situation from your partner's point of view.",
          tips: [
            "Use phrases like 'I can see that you feel...'",
            "Ask clarifying questions",
            "Reflect back what you heard",
            "Validate their emotions even if you disagree"
          ],
          timeGuide: "10-15 minutes"
        },
        {
          id: 3,
          title: "Apologize",
          description: "Take responsibility for your part in the conflict",
          details: "Acknowledge your mistakes and express genuine remorse for any hurt caused.",
          tips: [
            "Be specific about what you're apologizing for",
            "Don't use 'but' after your apology",
            "Focus on your actions, not their reactions",
            "Express genuine remorse"
          ],
          timeGuide: "5 minutes"
        },
        {
          id: 4,
          title: "Collaborate",
          description: "Work together to find a mutually acceptable solution",
          details: "Brainstorm solutions that address both partners' needs and concerns.",
          tips: [
            "Focus on the future, not the past",
            "Look for win-win solutions",
            "Be willing to compromise",
            "Consider creative alternatives"
          ],
          timeGuide: "15-30 minutes"
        },
        {
          id: 5,
          title: "Evaluate",
          description: "Check in later to see how the solution is working",
          details: "Schedule a follow-up to assess progress and make adjustments if needed.",
          tips: [
            "Set a specific time to check in",
            "Be honest about what's working",
            "Adjust the solution if needed",
            "Celebrate progress made"
          ],
          timeGuide: "10 minutes"
        }
      ]
    },
    {
      id: 2,
      title: "Fair Fighting Rules",
      description: "Guidelines for arguing constructively without damaging your relationship",
      category: "guidelines",
      difficulty: "beginner",
      duration: "15 min",
      icon: Users,
      color: "bg-blue-500",
      effectiveness: 88,
      steps: [
        {
          id: 1,
          title: "Stay on Topic",
          description: "Focus on the current issue, don't bring up past grievances",
          details: "Keep the discussion focused on the specific problem at hand.",
          tips: [
            "Write down the main issue before starting",
            "Gently redirect if conversation goes off-topic",
            "Save other issues for separate discussions",
            "Use 'Let's focus on...' to redirect"
          ]
        },
        {
          id: 2,
          title: "No Personal Attacks",
          description: "Attack the problem, not the person",
          details: "Avoid name-calling, insults, or character assassination.",
          tips: [
            "Use 'I' statements instead of 'you' statements",
            "Focus on specific behaviors, not personality",
            "Avoid words like 'always' and 'never'",
            "Separate the person from the problem"
          ]
        },
        {
          id: 3,
          title: "Take Turns",
          description: "Let each person speak without interruption",
          details: "Practice active listening and give each other space to express feelings.",
          tips: [
            "Set a timer for each person to speak",
            "Resist the urge to interrupt",
            "Take notes if needed to remember points",
            "Use hand signals to request speaking time"
          ]
        },
        {
          id: 4,
          title: "Seek Solutions",
          description: "Work toward resolution, not winning",
          details: "Remember that you're partners, not opponents.",
          tips: [
            "Ask 'How can we solve this together?'",
            "Look for compromise opportunities",
            "Focus on shared goals and values",
            "Celebrate when you find solutions"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Emotional De-escalation",
      description: "Techniques to calm down heated emotions during conflicts",
      category: "emotional",
      difficulty: "intermediate",
      duration: "10 min",
      icon: Heart,
      color: "bg-pink-500",
      effectiveness: 85,
      steps: [
        {
          id: 1,
          title: "Recognize Triggers",
          description: "Identify when emotions are escalating",
          details: "Learn to notice physical and emotional signs of escalation.",
          tips: [
            "Notice increased heart rate or tension",
            "Pay attention to voice volume and tone",
            "Watch for defensive body language",
            "Recognize when thinking becomes unclear"
          ]
        },
        {
          id: 2,
          title: "Use Calming Techniques",
          description: "Apply immediate stress-reduction methods",
          details: "Use breathing, grounding, or mindfulness techniques to calm down.",
          tips: [
            "Try the 4-7-8 breathing technique",
            "Count to 10 slowly",
            "Focus on physical sensations",
            "Use positive self-talk"
          ]
        },
        {
          id: 3,
          title: "Request a Break",
          description: "Ask for time to cool down if needed",
          details: "It's okay to pause the conversation to prevent escalation.",
          tips: [
            "Say 'I need a few minutes to calm down'",
            "Agree on when to resume the conversation",
            "Use the break constructively",
            "Return when you're ready to listen"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Active Listening Protocol",
      description: "Structured approach to truly hearing and understanding your partner",
      category: "communication",
      difficulty: "intermediate",
      duration: "25 min",
      icon: MessageCircle,
      color: "bg-purple-500",
      effectiveness: 90,
      steps: [
        {
          id: 1,
          title: "Listen Without Judging",
          description: "Focus completely on understanding, not responding",
          details: "Give your full attention to what your partner is saying.",
          tips: [
            "Put away distractions",
            "Make eye contact",
            "Don't plan your response while they're talking",
            "Notice non-verbal communication"
          ]
        },
        {
          id: 2,
          title: "Reflect and Clarify",
          description: "Repeat back what you heard to ensure understanding",
          details: "Paraphrase their message to confirm you understood correctly.",
          tips: [
            "Use 'What I hear you saying is...'",
            "Ask 'Did I understand correctly?'",
            "Clarify any confusing points",
            "Acknowledge their emotions"
          ]
        },
        {
          id: 3,
          title: "Validate Feelings",
          description: "Acknowledge their emotions even if you disagree",
          details: "Show that you understand and respect their feelings.",
          tips: [
            "Say 'I can understand why you'd feel that way'",
            "Separate feelings from actions",
            "Don't minimize their emotions",
            "Show empathy through body language"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Solution-Focused Approach",
      description: "Move from problems to solutions quickly and effectively",
      category: "problem-solving",
      difficulty: "advanced",
      duration: "30 min",
      icon: Target,
      color: "bg-orange-500",
      effectiveness: 87,
      steps: [
        {
          id: 1,
          title: "Define the Problem",
          description: "Clearly state what needs to be resolved",
          details: "Get specific about the issue without blame or judgment.",
          tips: [
            "Use neutral language",
            "Focus on behaviors, not character",
            "Be specific about what happened",
            "Avoid generalizations"
          ]
        },
        {
          id: 2,
          title: "Brainstorm Solutions",
          description: "Generate multiple possible solutions together",
          details: "Come up with as many ideas as possible without judging them.",
          tips: [
            "No idea is too silly at first",
            "Build on each other's ideas",
            "Write down all suggestions",
            "Encourage creativity"
          ]
        },
        {
          id: 3,
          title: "Evaluate Options",
          description: "Assess the pros and cons of each solution",
          details: "Consider the feasibility and impact of each option.",
          tips: [
            "Consider both partners' needs",
            "Think about long-term consequences",
            "Be realistic about implementation",
            "Look for win-win scenarios"
          ]
        },
        {
          id: 4,
          title: "Implement and Monitor",
          description: "Try the chosen solution and track progress",
          details: "Put the solution into action and check how it's working.",
          tips: [
            "Start with small steps",
            "Set clear expectations",
            "Schedule regular check-ins",
            "Be willing to adjust if needed"
          ]
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', icon: Shield },
    { id: 'framework', name: 'Frameworks', icon: Target },
    { id: 'guidelines', name: 'Guidelines', icon: BookOpen },
    { id: 'emotional', name: 'Emotional', icon: Heart },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'problem-solving', name: 'Problem Solving', icon: Lightbulb }
  ];

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const filteredTools = resolutionTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startSession = (tool) => {
    setCurrentSession(tool);
    setSessionProgress({ currentStep: 0, completed: false, startTime: Date.now() });
  };

  const nextStep = () => {
    const currentStep = sessionProgress.currentStep || 0;
    const totalSteps = currentSession.steps.length;
    
    if (currentStep < totalSteps - 1) {
      setSessionProgress({ ...sessionProgress, currentStep: currentStep + 1 });
    } else {
      setSessionProgress({ 
        ...sessionProgress, 
        completed: true, 
        endTime: Date.now() 
      });
      if (!completedSessions.includes(currentSession.id)) {
        setCompletedSessions([...completedSessions, currentSession.id]);
      }
    }
  };

  const previousStep = () => {
    const currentStep = sessionProgress.currentStep || 0;
    if (currentStep > 0) {
      setSessionProgress({ ...sessionProgress, currentStep: currentStep - 1 });
    }
  };

  const resetSession = () => {
    setSessionProgress({ currentStep: 0, completed: false, startTime: Date.now() });
  };

  const closeSession = () => {
    setCurrentSession(null);
    setSessionProgress({});
  };

  const logConflict = (outcome) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      tool: currentSession.title,
      outcome: outcome,
      duration: sessionProgress.endTime - sessionProgress.startTime
    };
    setConflictLog([newEntry, ...conflictLog]);
  };

  const getProgressStats = () => {
    const totalTools = resolutionTools.length;
    const completed = completedSessions.length;
    const successfulResolutions = conflictLog.filter(entry => 
      entry.outcome === 'resolved' || entry.outcome === 'improved'
    ).length;
    const totalConflicts = conflictLog.length;

    return {
      totalTools,
      completed,
      completionRate: Math.round((completed / totalTools) * 100),
      successfulResolutions,
      totalConflicts,
      successRate: totalConflicts > 0 ? Math.round((successfulResolutions / totalConflicts) * 100) : 0
    };
  };

  const stats = getProgressStats();

  const renderToolsGrid = () => (
    <div className="space-y-6">
      {/* Quick Start Guide */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Quick Start Guide</h3>
            <p className="text-blue-800 text-sm mb-3">
              Choose a conflict resolution tool based on your current situation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-blue-800"><strong>High emotions:</strong> Start with Emotional De-escalation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800"><strong>Communication issues:</strong> Use Active Listening Protocol</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <span className="text-blue-800"><strong>General conflicts:</strong> Try the PEACE Method</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                <span className="text-blue-800"><strong>Need structure:</strong> Follow Fair Fighting Rules</span>
              </div>
            </div>
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
              placeholder="Search resolution tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map(tool => {
          const Icon = tool.icon;
          const isCompleted = completedSessions.includes(tool.id);
          
          return (
            <div key={tool.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[tool.difficulty]}`}>
                    {tool.difficulty}
                  </span>
                  {isCompleted && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{tool.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{tool.effectiveness}% effective</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Steps</span>
                  <span className="text-sm text-gray-600">{tool.steps.length} steps</span>
                </div>
                <div className="flex space-x-1">
                  {tool.steps.map((_, index) => (
                    <div key={index} className="h-2 bg-gray-200 rounded-full flex-1" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedTool(tool)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                
                <button
                  onClick={() => startSession(tool)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Start Session</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
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
              <p className="text-sm font-medium text-gray-600">Tools Mastered</p>
              <p className="text-2xl font-bold text-blue-600">{stats.completed}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-green-600">{stats.successRate}%</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conflicts Resolved</p>
              <p className="text-2xl font-bold text-purple-600">{stats.successfulResolutions}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sessions</p>
              <p className="text-2xl font-bold text-orange-600">{stats.totalConflicts}</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Conflict Log */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Conflict Resolution Sessions</h3>
        {conflictLog.length > 0 ? (
          <div className="space-y-3">
            {conflictLog.slice(0, 5).map(entry => (
              <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`h-3 w-3 rounded-full ${
                    entry.outcome === 'resolved' ? 'bg-green-500' : 
                    entry.outcome === 'improved' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900">{entry.tool}</p>
                    <p className="text-sm text-gray-600">{entry.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 capitalize">{entry.outcome}</p>
                  <p className="text-sm text-gray-600">{Math.round(entry.duration / 60000)} min</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No conflict resolution sessions yet. Start with a tool when you need it!</p>
        )}
      </div>

      {/* Tool Mastery Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tool Mastery Progress</h3>
        <div className="space-y-4">
          {resolutionTools.map(tool => {
            const isCompleted = completedSessions.includes(tool.id);
            const Icon = tool.icon;

            return (
              <div key={tool.id} className="flex items-center space-x-4">
                <div className={`h-10 w-10 ${tool.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{tool.title}</span>
                    <span className="text-sm text-gray-600">{tool.effectiveness}% effective</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      style={{ width: isCompleted ? '100%' : '0%' }}
                    />
                  </div>
                </div>
                {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSessionModal = () => {
    if (!currentSession) return null;

    const currentStep = sessionProgress.currentStep || 0;
    const isCompleted = sessionProgress.completed;
    const step = currentSession.steps[currentStep];
    const Icon = currentSession.icon;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`h-12 w-12 ${currentSession.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{currentSession.title}</h2>
                  <p className="text-sm text-gray-600">
                    {isCompleted ? 'Session Complete' : `Step ${currentStep + 1} of ${currentSession.steps.length}`}
                  </p>
                </div>
              </div>
              <button
                onClick={closeSession}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {!isCompleted ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-600">
                      {Math.round(((currentStep + 1) / currentSession.steps.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / currentSession.steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Step */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-blue-800 mb-4">{step.description}</p>
                  
                  {step.details && (
                    <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
                      <p className="text-gray-700">{step.details}</p>
                    </div>
                  )}

                  {step.timeGuide && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Timer className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-blue-700">Suggested time: {step.timeGuide}</span>
                    </div>
                  )}
                </div>

                {/* Tips */}
                {step.tips && (
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2 flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4" />
                      <span>Helpful Tips:</span>
                    </h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-yellow-800 flex items-start space-x-2">
                          <span className="text-yellow-600">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Session Complete!</h3>
                <p className="text-gray-600">
                  How did this conflict resolution session go?
                </p>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => {
                      logConflict('resolved');
                      closeSession();
                    }}
                    className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>Resolved</span>
                  </button>
                  <button
                    onClick={() => {
                      logConflict('improved');
                      closeSession();
                    }}
                    className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <Star className="h-5 w-5" />
                    <span>Improved</span>
                  </button>
                  <button
                    onClick={() => {
                      logConflict('unresolved');
                      closeSession();
                    }}
                    className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <ThumbsDown className="h-5 w-5" />
                    <span>Still Working</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {!isCompleted && (
            <div className="p-6 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={resetSession}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-700"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
              
              <div className="flex items-center space-x-3">
                {currentStep > 0 && (
                  <button
                    onClick={previousStep}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>{currentStep === currentSession.steps.length - 1 ? 'Complete' : 'Next Step'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
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
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Conflict Resolution Center</h1>
                <p className="text-sm text-gray-600">Tools and frameworks for resolving disagreements constructively</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{stats.successRate}% success rate</span>
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
              onClick={() => setActiveTab('tools')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tools'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resolution Tools
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
        {activeTab === 'tools' && renderToolsGrid()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'resources' && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Resources Coming Soon</h3>
            <p className="text-gray-600">Additional conflict resolution resources and guides</p>
          </div>
        )}
      </div>

      {/* Session Modal */}
      {renderSessionModal()}
    </div>
  );
};

export default ConflictResolutionCenter;

