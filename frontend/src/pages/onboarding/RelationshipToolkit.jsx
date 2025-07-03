import React, { useState } from 'react';
import { MessageCircle, Heart, Shield, Users, Lightbulb, BookOpen, Headphones, AlertTriangle, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';

const RelationshipToolkit = () => {
  const [activeTab, setActiveTab] = useState('communication');
  const [activeGuide, setActiveGuide] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const tabs = [
    { id: 'communication', label: 'Communication', icon: MessageCircle, color: 'from-blue-500 to-cyan-600' },
    { id: 'conflict', label: 'Conflict Resolution', icon: Shield, color: 'from-red-500 to-pink-600' },
    { id: 'love-languages', label: 'Love Languages', icon: Heart, color: 'from-pink-500 to-purple-600' },
    { id: 'intimacy', label: 'Intimacy Building', icon: Users, color: 'from-purple-500 to-indigo-600' }
  ];

  const communicationTools = [
    {
      id: 'active-listening',
      title: 'Active Listening Guide',
      description: 'Learn to truly hear and understand your partner',
      icon: Headphones,
      difficulty: 'Beginner',
      time: '5 min',
      steps: [
        {
          title: 'Give Full Attention',
          content: 'Put away distractions. Make eye contact. Show you\'re present.',
          tip: 'Turn off phones and face each other'
        },
        {
          title: 'Listen Without Judging',
          content: 'Don\'t interrupt or plan your response. Just listen.',
          tip: 'Resist the urge to give advice immediately'
        },
        {
          title: 'Reflect Back',
          content: 'Repeat what you heard: "So you\'re saying..."',
          tip: 'Use their words, not your interpretation'
        },
        {
          title: 'Ask Clarifying Questions',
          content: 'Ask open-ended questions to understand better.',
          tip: '"Can you tell me more about that?"'
        }
      ]
    },
    {
      id: 'expressing-needs',
      title: 'Expressing Your Needs',
      description: 'Communicate your needs clearly and kindly',
      icon: MessageCircle,
      difficulty: 'Intermediate',
      time: '7 min',
      steps: [
        {
          title: 'Use "I" Statements',
          content: 'Start with "I feel..." instead of "You always..."',
          tip: '"I feel unheard when..." vs "You never listen"'
        },
        {
          title: 'Be Specific',
          content: 'Describe the specific behavior, not character.',
          tip: 'Focus on actions, not personality traits'
        },
        {
          title: 'Express the Impact',
          content: 'Explain how it affects you emotionally.',
          tip: '"When this happens, I feel..."'
        },
        {
          title: 'Make a Clear Request',
          content: 'Ask for what you need going forward.',
          tip: '"Would you be willing to..."'
        }
      ]
    }
  ];

  const conflictTools = [
    {
      id: 'pause-breathe',
      title: 'Pause & Breathe Technique',
      description: 'De-escalate heated moments with this simple method',
      icon: AlertTriangle,
      difficulty: 'Beginner',
      time: '3 min',
      steps: [
        {
          title: 'Recognize the Heat',
          content: 'Notice when emotions are escalating.',
          tip: 'Physical signs: raised voice, tense body, racing heart'
        },
        {
          title: 'Call a Timeout',
          content: 'Say "I need a moment to cool down."',
          tip: 'This isn\'t giving up, it\'s being responsible'
        },
        {
          title: 'Take 5 Deep Breaths',
          content: 'Breathe in for 4, hold for 4, out for 6.',
          tip: 'This activates your calm nervous system'
        },
        {
          title: 'Return with Love',
          content: 'Come back when you can speak with kindness.',
          tip: '"I\'m ready to talk about this calmly now"'
        }
      ]
    },
    {
      id: 'fair-fighting',
      title: 'Fair Fighting Rules',
      description: 'Guidelines for healthy disagreements',
      icon: Shield,
      difficulty: 'Intermediate',
      time: '10 min',
      steps: [
        {
          title: 'Stay on Topic',
          content: 'Address one issue at a time. No kitchen sinking.',
          tip: 'Don\'t bring up past grievances'
        },
        {
          title: 'No Name-Calling',
          content: 'Attack the problem, not the person.',
          tip: 'Avoid "always" and "never" statements'
        },
        {
          title: 'Listen to Understand',
          content: 'Try to see their perspective.',
          tip: '"Help me understand your point of view"'
        },
        {
          title: 'Find Common Ground',
          content: 'Look for what you both want.',
          tip: 'Usually you both want to feel loved and respected'
        }
      ]
    }
  ];

  const loveLanguageTools = [
    {
      id: 'discover-languages',
      title: 'Discover Your Love Languages',
      description: 'Take the assessment to understand how you give and receive love',
      icon: Heart,
      difficulty: 'Beginner',
      time: '8 min',
      steps: [
        {
          title: 'Words of Affirmation',
          content: 'Do compliments and verbal appreciation mean a lot to you?',
          tip: '"I love you", "You\'re amazing", "Thank you"'
        },
        {
          title: 'Quality Time',
          content: 'Do you feel loved when given undivided attention?',
          tip: 'Phone-free conversations, shared activities'
        },
        {
          title: 'Physical Touch',
          content: 'Do hugs, kisses, and physical closeness matter most?',
          tip: 'Hand-holding, cuddling, back rubs'
        },
        {
          title: 'Acts of Service',
          content: 'Do helpful actions show love to you?',
          tip: 'Doing chores, running errands, making coffee'
        }
      ]
    }
  ];

  const intimacyTools = [
    {
      id: 'emotional-intimacy',
      title: 'Building Emotional Intimacy',
      description: 'Deepen your emotional connection through vulnerability',
      icon: Users,
      difficulty: 'Intermediate',
      time: '12 min',
      steps: [
        {
          title: 'Share Something Personal',
          content: 'Open up about a fear, dream, or childhood memory.',
          tip: 'Vulnerability builds trust and closeness'
        },
        {
          title: 'Practice Empathy',
          content: 'Try to feel what your partner is feeling.',
          tip: '"That must have been really difficult for you"'
        },
        {
          title: 'Create Rituals',
          content: 'Establish regular times for deep connection.',
          tip: 'Weekly check-ins, daily gratitude sharing'
        },
        {
          title: 'Be Fully Present',
          content: 'Give your complete attention during intimate moments.',
          tip: 'Eye contact, active listening, no distractions'
        }
      ]
    }
  ];

  const getToolsForTab = (tabId) => {
    switch (tabId) {
      case 'communication': return communicationTools;
      case 'conflict': return conflictTools;
      case 'love-languages': return loveLanguageTools;
      case 'intimacy': return intimacyTools;
      default: return [];
    }
  };

  const startGuide = (tool) => {
    setActiveGuide(tool);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < activeGuide.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const completeGuide = () => {
    setActiveGuide(null);
    setCurrentStep(0);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  if (activeGuide) {
    const step = activeGuide.steps[currentStep];
    const IconComponent = activeGuide.icon;
    const progress = ((currentStep + 1) / activeGuide.steps.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Guide Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{activeGuide.title}</h1>
                  <p className="text-gray-600">Step {currentStep + 1} of {activeGuide.steps.length}</p>
                </div>
              </div>
              <button 
                onClick={completeGuide}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{step.content}</p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Pro Tip</h4>
                  <p className="text-blue-700">{step.tip}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              {currentStep < activeGuide.steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={completeGuide}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Complete</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Relationship Toolkit</h1>
              <p className="text-gray-600">Practical tools for better communication and connection</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-md`
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {getToolsForTab(activeTab).map((tool) => {
            const IconComponent = tool.icon;
            const activeTabData = tabs.find(t => t.id === activeTab);
            
            return (
              <div key={tool.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${activeTabData.color} p-3 rounded-full`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tool.difficulty)}`}>
                      {tool.difficulty}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {tool.time}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Play className="w-4 h-4" />
                    <span>{tool.steps.length} steps</span>
                  </div>
                  <button
                    onClick={() => startGuide(tool)}
                    className={`bg-gradient-to-r ${activeTabData.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all duration-200`}
                  >
                    Start Guide
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl shadow-lg p-6 mt-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Need Immediate Help?</h3>
          </div>
          <p className="text-lg mb-4">If you're experiencing a relationship crisis or need professional support, we're here to help.</p>
          <div className="flex space-x-4">
            <button className="bg-white bg-opacity-20 px-6 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-all duration-200">
              Crisis Support
            </button>
            <button className="bg-white bg-opacity-20 px-6 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-all duration-200">
              Find a Therapist
            </button>
          </div>
        </div>

        {/* Dr. Love Toolkit Tip */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-6 mt-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Dr. Love's Toolkit Tip</h3>
          </div>
          <p className="text-lg mb-4">"The best relationships aren't conflict-free - they're conflict-skilled. These tools help you navigate disagreements with love and respect, making your bond stronger."</p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Practice one tool this week</span>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
              Track Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipToolkit;

