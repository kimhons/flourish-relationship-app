import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, Brain, Target, Star, Zap,
  TrendingUp, BarChart3, PieChart, Activity,
  CheckCircle, AlertTriangle, Info, Lightbulb,
  ArrowRight, ArrowLeft, Play, Pause, RotateCcw,
  Calendar, Clock, Award, Gift, Sparkles,
  MessageSquare, Phone, Video, Coffee, Music
} from 'lucide-react';

const CompatibilityAnalysis = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Compatibility assessment questions
  const assessmentQuestions = [
    {
      id: 1,
      category: 'Communication Style',
      question: 'How do you prefer to resolve conflicts?',
      options: [
        { id: 'a', text: 'Discuss immediately when issues arise', weight: { direct: 3, patient: 1 } },
        { id: 'b', text: 'Take time to think before discussing', weight: { direct: 1, patient: 3 } },
        { id: 'c', text: 'Address issues during scheduled check-ins', weight: { direct: 2, patient: 2 } },
        { id: 'd', text: 'Prefer written communication first', weight: { direct: 1, patient: 2 } }
      ]
    },
    {
      id: 2,
      category: 'Love Languages',
      question: 'What makes you feel most loved?',
      options: [
        { id: 'a', text: 'Words of affirmation and compliments', weight: { verbal: 3, physical: 1 } },
        { id: 'b', text: 'Physical touch and closeness', weight: { verbal: 1, physical: 3 } },
        { id: 'c', text: 'Quality time together', weight: { verbal: 2, physical: 2 } },
        { id: 'd', text: 'Acts of service and help', weight: { verbal: 1, physical: 1 } }
      ]
    },
    {
      id: 3,
      category: 'Life Goals',
      question: 'What\'s most important for your future together?',
      options: [
        { id: 'a', text: 'Building a stable financial foundation', weight: { security: 3, adventure: 1 } },
        { id: 'b', text: 'Traveling and experiencing new things', weight: { security: 1, adventure: 3 } },
        { id: 'c', text: 'Growing personally and professionally', weight: { security: 2, adventure: 2 } },
        { id: 'd', text: 'Creating a loving family environment', weight: { security: 2, adventure: 1 } }
      ]
    },
    {
      id: 4,
      category: 'Social Preferences',
      question: 'How do you prefer to spend weekends?',
      options: [
        { id: 'a', text: 'Quiet time at home together', weight: { introvert: 3, extrovert: 1 } },
        { id: 'b', text: 'Going out with friends and family', weight: { introvert: 1, extrovert: 3 } },
        { id: 'c', text: 'Mix of social and private time', weight: { introvert: 2, extrovert: 2 } },
        { id: 'd', text: 'Pursuing individual hobbies', weight: { introvert: 2, extrovert: 1 } }
      ]
    },
    {
      id: 5,
      category: 'Decision Making',
      question: 'How do you approach major decisions?',
      options: [
        { id: 'a', text: 'Research thoroughly before deciding', weight: { analytical: 3, intuitive: 1 } },
        { id: 'b', text: 'Trust gut feelings and instincts', weight: { analytical: 1, intuitive: 3 } },
        { id: 'c', text: 'Seek advice from trusted people', weight: { analytical: 2, intuitive: 2 } },
        { id: 'd', text: 'Make quick decisions and adapt', weight: { analytical: 1, intuitive: 2 } }
      ]
    }
  ];

  // Compatibility results data
  const compatibilityResults = {
    overallScore: 87,
    categories: [
      {
        name: 'Communication Style',
        score: 92,
        status: 'excellent',
        description: 'You both prefer thoughtful, patient communication approaches',
        strengths: ['Active listening', 'Emotional awareness', 'Conflict resolution'],
        improvements: ['Express needs more directly', 'Schedule regular check-ins']
      },
      {
        name: 'Love Languages',
        score: 85,
        status: 'very-good',
        description: 'Strong alignment in how you express and receive love',
        strengths: ['Physical affection', 'Quality time', 'Verbal appreciation'],
        improvements: ['Explore acts of service', 'Gift-giving occasions']
      },
      {
        name: 'Life Goals',
        score: 89,
        status: 'excellent',
        description: 'Shared vision for your future together',
        strengths: ['Financial planning', 'Career support', 'Family values'],
        improvements: ['Adventure planning', 'Personal growth goals']
      },
      {
        name: 'Social Preferences',
        score: 78,
        status: 'good',
        description: 'Some differences in social energy levels',
        strengths: ['Respect for differences', 'Compromise skills'],
        improvements: ['Balance social/private time', 'Individual space respect']
      },
      {
        name: 'Decision Making',
        score: 91,
        status: 'excellent',
        description: 'Complementary decision-making styles',
        strengths: ['Balanced perspectives', 'Mutual respect', 'Shared values'],
        improvements: ['Speed up minor decisions', 'Trust building exercises']
      }
    ],
    recommendations: [
      {
        type: 'strength',
        title: 'Leverage Your Communication Strength',
        description: 'Your excellent communication compatibility is a major asset. Use this for deeper conversations about future goals.',
        actions: ['Schedule weekly relationship check-ins', 'Practice active listening exercises', 'Share daily highlights']
      },
      {
        type: 'improvement',
        title: 'Balance Social Energy Differences',
        description: 'Work on finding the right balance between social activities and quiet time together.',
        actions: ['Alternate between social and quiet weekends', 'Respect individual recharge needs', 'Plan activities you both enjoy']
      },
      {
        type: 'opportunity',
        title: 'Explore New Love Languages',
        description: 'While you\'re aligned on primary love languages, exploring others could deepen your connection.',
        actions: ['Try acts of service challenges', 'Plan surprise gift exchanges', 'Write appreciation letters']
      }
    ]
  };

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const handleNextStep = () => {
    if (currentStep < assessmentQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setAssessmentComplete(true);
      setShowResults(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'very-good': return 'text-blue-600 bg-blue-100';
      case 'good': return 'text-yellow-600 bg-yellow-100';
      case 'needs-work': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'excellent': return 'Excellent';
      case 'very-good': return 'Very Good';
      case 'good': return 'Good';
      case 'needs-work': return 'Needs Work';
      default: return 'Unknown';
    }
  };

  const renderAssessmentQuestion = () => {
    const question = assessmentQuestions[currentStep - 1];
    const selectedAnswer = selectedAnswers[question.id];

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-purple-600 font-medium">{question.category}</span>
            <span className="text-sm text-gray-500">
              Question {currentStep} of {assessmentQuestions.length}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{question.question}</h2>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / assessmentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(question.id, option.id)}
              className={`w-full p-4 text-left border rounded-lg transition-colors ${
                selectedAnswer === option.id
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          <button
            onClick={handleNextStep}
            disabled={!selectedAnswer}
            className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === assessmentQuestions.length ? 'View Results' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    );
  };

  const renderResults = () => (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white p-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12 mr-3" />
            <div className="text-6xl font-bold">{compatibilityResults.overallScore}%</div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Excellent Compatibility</h2>
          <p className="text-purple-100">
            You and your partner have strong compatibility across multiple dimensions
          </p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Compatibility Breakdown</h3>
        <div className="space-y-6">
          {compatibilityResults.categories.map((category, index) => (
            <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{category.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{category.score}%</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(category.status)}`}>
                    {getStatusText(category.status)}
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${category.score}%` }}
                ></div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-sm font-medium text-green-700 mb-2">Strengths</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.strengths.map((strength, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-blue-700 mb-2">Growth Areas</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-center">
                        <Lightbulb className="w-3 h-3 text-blue-500 mr-2" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personalized Recommendations</h3>
        <div className="space-y-6">
          {compatibilityResults.recommendations.map((rec, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  rec.type === 'strength' ? 'bg-green-100' :
                  rec.type === 'improvement' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  {rec.type === 'strength' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {rec.type === 'improvement' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                  {rec.type === 'opportunity' && <Lightbulb className="w-5 h-5 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-2">{rec.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{rec.description}</p>
                  <div className="space-y-1">
                    {rec.actions.map((action, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <ArrowRight className="w-3 h-3 mr-2 text-purple-500" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Relationship Activities
        </button>
        <button className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <RotateCcw className="w-5 h-5 mr-2" />
          Retake Assessment
        </button>
        <button className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <Award className="w-5 h-5 mr-2" />
          Share Results
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Relationship Compatibility Analysis
          </h1>
          <p className="text-gray-600">
            Discover your unique compatibility patterns and strengthen your relationship
          </p>
        </div>

        {/* Assessment or Results */}
        {!showResults ? (
          <div>
            {/* Introduction */}
            {currentStep === 1 && !assessmentComplete && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-purple-100 rounded-full">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Understanding Your Relationship Dynamics
                  </h2>
                  <p className="text-gray-600 mb-6">
                    This assessment analyzes your compatibility across key relationship dimensions. 
                    Answer honestly to get the most accurate insights about your partnership.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Brain className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Communication</div>
                      <div className="text-xs text-gray-600">How you connect</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Goals</div>
                      <div className="text-xs text-gray-600">Shared vision</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">Lifestyle</div>
                      <div className="text-xs text-gray-600">Daily preferences</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Start Assessment
                  </button>
                </div>
              </div>
            )}

            {/* Assessment Questions */}
            {currentStep >= 1 && !assessmentComplete && renderAssessmentQuestion()}
          </div>
        ) : (
          renderResults()
        )}
      </div>
    </div>
  );
};

export default CompatibilityAnalysis;

