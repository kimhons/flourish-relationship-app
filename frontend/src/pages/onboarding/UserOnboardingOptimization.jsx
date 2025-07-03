import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Star, 
  Heart, 
  Users, 
  Target, 
  Lightbulb, 
  BookOpen, 
  Video, 
  Headphones, 
  MessageSquare, 
  Calendar, 
  Settings, 
  User, 
  Award, 
  Trophy, 
  Gift, 
  Sparkles, 
  Zap, 
  Clock, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  ThumbsUp, 
  Share, 
  Download, 
  ExternalLink, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  X, 
  Plus, 
  Minus, 
  Edit, 
  Save, 
  Upload, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Lock, 
  Shield, 
  Key, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Wifi, 
  Bell, 
  Volume2, 
  VolumeX, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Repeat, 
  Shuffle, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Search, 
  Filter, 
  SortAsc, 
  Grid, 
  List, 
  Tag, 
  Bookmark, 
  Flag, 
  Archive, 
  Trash2, 
  MoreHorizontal 
} from 'lucide-react';

const UserOnboardingOptimization = () => {
  const [activeTab, setActiveTab] = useState('onboarding-flow');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [userProfile, setUserProfile] = useState({
    name: '',
    relationshipStatus: '',
    goals: [],
    experience: '',
    preferences: {
      contentTypes: [],
      communicationStyle: '',
      learningPace: ''
    }
  });
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  // Onboarding steps configuration
  const onboardingSteps = [
    {
      id: 'welcome',
      title: 'Welcome to Flourish',
      description: 'Your journey to a stronger relationship starts here',
      type: 'welcome',
      estimatedTime: '1 min',
      required: true
    },
    {
      id: 'profile-setup',
      title: 'Create Your Profile',
      description: 'Tell us about yourself and your relationship',
      type: 'form',
      estimatedTime: '3 min',
      required: true
    },
    {
      id: 'relationship-goals',
      title: 'Set Your Goals',
      description: 'What do you want to achieve together?',
      type: 'selection',
      estimatedTime: '2 min',
      required: true
    },
    {
      id: 'assessment',
      title: 'Relationship Assessment',
      description: 'Help us understand your current relationship dynamics',
      type: 'assessment',
      estimatedTime: '5 min',
      required: false
    },
    {
      id: 'preferences',
      title: 'Customize Your Experience',
      description: 'Set your learning preferences and communication style',
      type: 'preferences',
      estimatedTime: '2 min',
      required: false
    },
    {
      id: 'tutorial',
      title: 'Platform Tutorial',
      description: 'Learn how to navigate and use Flourish effectively',
      type: 'tutorial',
      estimatedTime: '4 min',
      required: false
    },
    {
      id: 'first-activity',
      title: 'Your First Activity',
      description: 'Complete a quick relationship exercise together',
      type: 'activity',
      estimatedTime: '5 min',
      required: false
    },
    {
      id: 'completion',
      title: 'You\'re All Set!',
      description: 'Welcome to your personalized relationship journey',
      type: 'completion',
      estimatedTime: '1 min',
      required: true
    }
  ];

  const relationshipGoals = [
    { id: 'communication', label: 'Improve Communication', icon: MessageSquare, description: 'Learn to express feelings and listen actively' },
    { id: 'intimacy', label: 'Deepen Intimacy', icon: Heart, description: 'Strengthen emotional and physical connection' },
    { id: 'conflict', label: 'Resolve Conflicts', icon: Target, description: 'Handle disagreements constructively' },
    { id: 'trust', label: 'Build Trust', icon: Shield, description: 'Strengthen reliability and honesty' },
    { id: 'quality-time', label: 'Spend Quality Time', icon: Clock, description: 'Create meaningful moments together' },
    { id: 'future-planning', label: 'Plan Your Future', icon: Calendar, description: 'Align on long-term goals and dreams' }
  ];

  const tutorialSteps = [
    {
      title: 'Dashboard Overview',
      description: 'Your personalized dashboard shows progress, recommendations, and quick actions.',
      target: '.dashboard-overview',
      position: 'bottom'
    },
    {
      title: 'Daily Check-ins',
      description: 'Start each day with a quick relationship check-in to track your mood and connection.',
      target: '.daily-checkin',
      position: 'right'
    },
    {
      title: 'Activity Library',
      description: 'Explore hundreds of relationship exercises, games, and learning materials.',
      target: '.activity-library',
      position: 'left'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your relationship growth with detailed analytics and insights.',
      target: '.progress-tracking',
      position: 'top'
    },
    {
      title: 'AI Coach',
      description: 'Get personalized advice and support from Dr. Love, your AI relationship coach.',
      target: '.ai-coach',
      position: 'bottom'
    }
  ];

  const handleStepComplete = (stepId) => {
    setCompletedSteps(prev => new Set([...prev, stepId]));
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoalToggle = (goalId) => {
    setUserProfile(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const getStepIcon = (type) => {
    switch (type) {
      case 'welcome': return Sparkles;
      case 'form': return User;
      case 'selection': return Target;
      case 'assessment': return BarChart3;
      case 'preferences': return Settings;
      case 'tutorial': return BookOpen;
      case 'activity': return Zap;
      case 'completion': return Trophy;
      default: return CheckCircle;
    }
  };

  const renderOnboardingFlow = () => (
    <div className="space-y-8">
      {/* Progress Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Onboarding Progress</h3>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-600">
              {completedSteps.size} of {onboardingSteps.length} steps completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.size / onboardingSteps.length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Estimated time remaining: {onboardingSteps.slice(currentStep).reduce((acc, step) => acc + parseInt(step.estimatedTime), 0)} minutes
          </div>
        </div>

        {/* Step Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {onboardingSteps.map((step, index) => {
            const StepIcon = getStepIcon(step.type);
            const isCompleted = completedSteps.has(step.id);
            const isCurrent = index === currentStep;
            const isAccessible = index <= currentStep || isCompleted;

            return (
              <button
                key={step.id}
                onClick={() => isAccessible && setCurrentStep(index)}
                disabled={!isAccessible}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  isCompleted
                    ? 'border-green-500 bg-green-50'
                    : isCurrent
                    ? 'border-blue-500 bg-blue-50'
                    : isAccessible
                    ? 'border-gray-200 hover:border-gray-300'
                    : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <StepIcon className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.estimatedTime}</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{step.description}</p>
                {step.required && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      Required
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Step Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {renderCurrentStep()}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentStep(Math.min(onboardingSteps.length - 1, currentStep + 1))}
            disabled={currentStep === onboardingSteps.length - 1}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Continue</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          {currentStep < onboardingSteps.length - 1 && (
            <button
              onClick={() => setCurrentStep(onboardingSteps.length - 1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Skip to End
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    const step = onboardingSteps[currentStep];
    const StepIcon = getStepIcon(step.type);

    switch (step.type) {
      case 'welcome':
        return (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Flourish!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're excited to help you build a stronger, more connected relationship. 
              This quick setup will personalize your experience and get you started on your journey together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Heart, title: 'Strengthen Your Bond', description: 'Discover new ways to connect and grow together' },
                { icon: Target, title: 'Achieve Your Goals', description: 'Set and track meaningful relationship milestones' },
                { icon: Lightbulb, title: 'Learn & Grow', description: 'Access expert guidance and proven techniques' }
              ].map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg">
                    <FeatureIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <StepIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship Status</label>
                <select
                  value={userProfile.relationshipStatus}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, relationshipStatus: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your status</option>
                  <option value="dating">Dating</option>
                  <option value="engaged">Engaged</option>
                  <option value="married">Married</option>
                  <option value="long-term">Long-term Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relationship Experience</label>
                <select
                  value={userProfile.experience}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, experience: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">How long have you been together?</option>
                  <option value="new">Less than 6 months</option>
                  <option value="developing">6 months - 2 years</option>
                  <option value="established">2 - 5 years</option>
                  <option value="long-term">5+ years</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'selection':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <StepIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relationshipGoals.map((goal) => {
                const GoalIcon = goal.icon;
                const isSelected = userProfile.goals.includes(goal.id);
                
                return (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalToggle(goal.id)}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        <GoalIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{goal.label}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{goal.description}</p>
                    {isSelected && (
                      <div className="mt-3">
                        <Check className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Selected {userProfile.goals.length} goals. You can change these anytime in your settings.
              </p>
            </div>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Congratulations!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              You've successfully set up your Flourish account. Your personalized relationship journey starts now!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {[
                { icon: Target, title: `${userProfile.goals.length} Goals Set`, description: 'Ready to work on together' },
                { icon: User, title: 'Profile Complete', description: 'Personalized experience ready' },
                { icon: Sparkles, title: 'AI Coach Ready', description: 'Dr. Love is here to help' }
              ].map((achievement, index) => {
                const AchievementIcon = achievement.icon;
                return (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <AchievementIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => handleStepComplete(step.id)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Start Your Journey
            </button>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <StepIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h2>
            <p className="text-gray-600 mb-8">{step.description}</p>
            <button
              onClick={() => handleStepComplete(step.id)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Complete Step
            </button>
          </div>
        );
    }
  };

  const renderInteractiveTutorials = () => (
    <div className="space-y-8">
      {/* Tutorial Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Interactive Tutorials</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Platform Navigation',
              description: 'Learn to navigate Flourish like a pro',
              duration: '3 min',
              steps: 5,
              icon: Compass,
              difficulty: 'Beginner',
              completed: true
            },
            {
              title: 'Daily Check-ins',
              description: 'Master the art of daily relationship tracking',
              duration: '4 min',
              steps: 6,
              icon: Calendar,
              difficulty: 'Beginner',
              completed: false
            },
            {
              title: 'Activity Library',
              description: 'Discover and use relationship exercises',
              duration: '5 min',
              steps: 8,
              icon: BookOpen,
              difficulty: 'Intermediate',
              completed: false
            },
            {
              title: 'AI Coach Interaction',
              description: 'Get the most from Dr. Love AI coaching',
              duration: '6 min',
              steps: 7,
              icon: MessageSquare,
              difficulty: 'Intermediate',
              completed: false
            },
            {
              title: 'Progress Analytics',
              description: 'Understand your relationship insights',
              duration: '4 min',
              steps: 5,
              icon: BarChart3,
              difficulty: 'Advanced',
              completed: false
            },
            {
              title: 'Goal Setting',
              description: 'Set and track meaningful relationship goals',
              duration: '5 min',
              steps: 6,
              icon: Target,
              difficulty: 'Intermediate',
              completed: false
            }
          ].map((tutorial, index) => {
            const TutorialIcon = tutorial.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${
                    tutorial.completed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {tutorial.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <TutorialIcon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{tutorial.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{tutorial.duration}</span>
                      <span>•</span>
                      <span>{tutorial.steps} steps</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  
                  <button
                    onClick={() => setShowTutorial(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      tutorial.completed
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {tutorial.completed ? 'Review' : 'Start Tutorial'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tutorial Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Tutorial Progress</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { label: 'Tutorials Completed', value: '1 of 6', percentage: 17 },
            { label: 'Time Invested', value: '3 minutes', percentage: 11 },
            { label: 'Mastery Level', value: 'Beginner', percentage: 25 }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Next Recommended Tutorial</h4>
          <p className="text-sm text-gray-600 mb-3">
            Complete "Daily Check-ins" to learn how to track your relationship progress effectively.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            Start Now
          </button>
        </div>
      </div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Platform Navigation Tutorial</h3>
                <button
                  onClick={() => setShowTutorial(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Step {tutorialStep + 1} of {tutorialSteps.length}</span>
                  <span>•</span>
                  <span>3 minutes remaining</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all"
                    style={{ width: `${((tutorialStep + 1) / tutorialSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {tutorialSteps[tutorialStep]?.title}
                </h4>
                <p className="text-gray-600">
                  {tutorialSteps[tutorialStep]?.description}
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8 mb-6">
                <div className="text-center text-gray-500">
                  Interactive tutorial content would appear here
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setTutorialStep(Math.max(0, tutorialStep - 1))}
                  disabled={tutorialStep === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <button
                  onClick={() => {
                    if (tutorialStep < tutorialSteps.length - 1) {
                      setTutorialStep(tutorialStep + 1);
                    } else {
                      setShowTutorial(false);
                      setTutorialStep(0);
                    }
                  }}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <span>{tutorialStep === tutorialSteps.length - 1 ? 'Complete' : 'Next'}</span>
                  {tutorialStep < tutorialSteps.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderProgressiveDisclosure = () => (
    <div className="space-y-8">
      {/* Progressive Disclosure Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Progressive Feature Disclosure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Feature Unlock Timeline</h4>
            <div className="space-y-4">
              {[
                { week: 'Week 1', features: ['Basic Dashboard', 'Daily Check-ins', 'Simple Exercises'], unlocked: true },
                { week: 'Week 2', features: ['Goal Setting', 'Progress Tracking', 'AI Coach'], unlocked: true },
                { week: 'Week 3', features: ['Advanced Analytics', 'Couple Activities', 'Content Library'], unlocked: false },
                { week: 'Week 4', features: ['Assessment Tools', 'Expert Content', 'Community Features'], unlocked: false }
              ].map((phase, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  phase.unlocked ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    {phase.unlocked ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <h5 className="font-medium text-gray-900">{phase.week}</h5>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {phase.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-2 py-1 text-xs rounded-full ${
                          phase.unlocked
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Complexity Progression</h4>
            <div className="space-y-4">
              {[
                {
                  level: 'Beginner',
                  description: 'Simple, guided experiences',
                  features: ['Basic exercises', 'Simple tracking', 'Clear instructions'],
                  active: true
                },
                {
                  level: 'Intermediate',
                  description: 'More detailed insights and options',
                  features: ['Advanced exercises', 'Detailed analytics', 'Customization'],
                  active: true
                },
                {
                  level: 'Advanced',
                  description: 'Full feature access and complexity',
                  features: ['Expert tools', 'Complex assessments', 'Full customization'],
                  active: false
                }
              ].map((level, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  level.active ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      level.active ? 'bg-blue-600' : 'bg-gray-300'
                    }`} />
                    <h5 className="font-medium text-gray-900">{level.level}</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {level.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`px-2 py-1 text-xs rounded-full ${
                          level.active
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Adaptive Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Adaptive Interface</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">User Experience Level</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Platform Familiarity</span>
                <span className="text-sm font-medium">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Feature Usage</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Features Explored</span>
                <span className="text-sm font-medium">12 of 25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '48%' }} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Engagement Level</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Daily Activity</span>
                <span className="text-sm font-medium">High</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Personalization Insights</h4>
          <p className="text-sm text-gray-600 mb-3">
            Based on your usage patterns, we've customized your interface to show more advanced features 
            while keeping beginner-friendly explanations available.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Simplified navigation enabled',
              'Advanced analytics unlocked',
              'Expert content recommended',
              'Tutorial hints reduced'
            ].map((insight, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {insight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOnboardingAnalytics = () => (
    <div className="space-y-8">
      {/* Onboarding Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Onboarding Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Completion Rate', value: '87%', change: '+5%', icon: CheckCircle },
            { label: 'Avg. Time to Complete', value: '12 min', change: '-2 min', icon: Clock },
            { label: 'Drop-off Rate', value: '13%', change: '-3%', icon: TrendingUp },
            { label: 'User Satisfaction', value: '4.6/5', change: '+0.2', icon: Star }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-green-600 font-medium">{metric.change}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Step-by-Step Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Step Completion Rates</h4>
            <div className="space-y-3">
              {onboardingSteps.map((step, index) => (
                <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{step.title}</div>
                    <div className="text-sm text-gray-600">{step.estimatedTime}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">
                      {95 - index * 3}%
                    </div>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${95 - index * 3}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">User Feedback</h4>
            <div className="space-y-3">
              {[
                { aspect: 'Ease of Use', rating: 4.7, feedback: 'Very intuitive and clear' },
                { aspect: 'Content Quality', rating: 4.6, feedback: 'Helpful and relevant' },
                { aspect: 'Time Investment', rating: 4.4, feedback: 'Reasonable length' },
                { aspect: 'Personalization', rating: 4.8, feedback: 'Felt tailored to us' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.aspect}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">"{item.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Optimization Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Areas for Improvement</h4>
            <div className="space-y-3">
              {[
                {
                  issue: 'Step 4 (Assessment) has 15% drop-off',
                  solution: 'Reduce assessment length or make optional',
                  priority: 'High'
                },
                {
                  issue: 'Mobile users take 20% longer',
                  solution: 'Optimize mobile interface design',
                  priority: 'Medium'
                },
                {
                  issue: 'Goal selection step causes confusion',
                  solution: 'Add better explanations and examples',
                  priority: 'Medium'
                },
                {
                  issue: 'Tutorial completion rate is low',
                  solution: 'Make tutorials more interactive',
                  priority: 'Low'
                }
              ].map((item, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Issue</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.priority === 'High' ? 'bg-red-100 text-red-800' :
                      item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.issue}</p>
                  <p className="text-sm text-blue-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Success Factors</h4>
            <div className="space-y-3">
              {[
                {
                  factor: 'Clear progress indicators',
                  impact: 'Increased completion by 12%'
                },
                {
                  factor: 'Personalized goal selection',
                  impact: 'Improved engagement by 18%'
                },
                {
                  factor: 'Skip options for optional steps',
                  impact: 'Reduced drop-off by 8%'
                },
                {
                  factor: 'Visual progress tracking',
                  impact: 'Enhanced user satisfaction by 15%'
                }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">{item.factor}</div>
                  <p className="text-sm text-green-600">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'onboarding-flow', label: 'Onboarding Flow', icon: Play },
    { id: 'interactive-tutorials', label: 'Tutorials', icon: BookOpen },
    { id: 'progressive-disclosure', label: 'Progressive Disclosure', icon: Eye },
    { id: 'onboarding-analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Onboarding Optimization</h1>
          <p className="text-gray-600">Comprehensive onboarding system with progressive disclosure, interactive tutorials, personalized guidance, and analytics-driven optimization for maximum user success.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'onboarding-flow' && renderOnboardingFlow()}
          {activeTab === 'interactive-tutorials' && renderInteractiveTutorials()}
          {activeTab === 'progressive-disclosure' && renderProgressiveDisclosure()}
          {activeTab === 'onboarding-analytics' && renderOnboardingAnalytics()}
        </div>
      </div>
    </div>
  );
};

export default UserOnboardingOptimization;

