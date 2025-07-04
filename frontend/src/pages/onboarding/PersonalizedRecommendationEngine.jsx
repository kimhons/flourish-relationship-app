import React, { useState, useEffect } from 'react';
import { 
  Target, Heart, Star, Zap, Brain, TrendingUp,
  Users, MessageCircle, Camera, MapPin, Clock, Filter,
  Settings, RefreshCw, ThumbsUp, ThumbsDown, Eye,
  Award, Gift, Sparkles, Lightbulb, ArrowRight, Play,
  BarChart3, PieChart, Activity, Calendar, Smartphone
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart as RechartsPieChart, Pie, Cell, ScatterChart, Scatter
} from 'recharts';

const PersonalizedRecommendationEngine = () => {
  const [recommendationMode, setRecommendationMode] = useState('ai_powered');
  const [selectedCategory, setSelectedCategory] = useState('matches');
  const [personalizationLevel, setPersonalizationLevel] = useState('high');
  const [isLearning, setIsLearning] = useState(true);
  const [recommendationScore, setRecommendationScore] = useState(94.8);

  // Recommendation categories
  const recommendationCategories = [
    {
      id: 'matches',
      name: 'Match Recommendations',
      icon: Heart,
      count: 1247,
      accuracy: 94.8,
      engagement_rate: 87.3,
      success_rate: 76.4,
      description: 'AI-powered potential match suggestions'
    },
    {
      id: 'conversations',
      name: 'Conversation Starters',
      icon: MessageCircle,
      count: 892,
      accuracy: 91.2,
      engagement_rate: 89.7,
      success_rate: 82.1,
      description: 'Personalized conversation topic suggestions'
    },
    {
      id: 'activities',
      name: 'Date Activities',
      icon: MapPin,
      count: 567,
      accuracy: 88.9,
      engagement_rate: 78.4,
      success_rate: 71.8,
      description: 'Customized date and activity recommendations'
    },
    {
      id: 'profile_optimization',
      name: 'Profile Enhancement',
      icon: Star,
      count: 234,
      accuracy: 96.3,
      engagement_rate: 92.8,
      success_rate: 85.7,
      description: 'Profile improvement suggestions'
    },
    {
      id: 'timing',
      name: 'Optimal Timing',
      icon: Clock,
      count: 445,
      accuracy: 89.7,
      engagement_rate: 84.2,
      success_rate: 73.9,
      description: 'Best times for actions and interactions'
    },
    {
      id: 'content',
      name: 'Content Suggestions',
      icon: Camera,
      count: 678,
      accuracy: 87.4,
      engagement_rate: 81.6,
      success_rate: 69.3,
      description: 'Photo and content recommendations'
    }
  ];

  // Personalized recommendations
  const personalizedRecommendations = [
    {
      id: 'match_001',
      type: 'match',
      title: 'High Compatibility Match',
      description: 'Sarah, 28, shares your love for hiking and photography',
      confidence: 96.8,
      reasoning: 'Shared interests, compatible personality traits, similar life goals',
      action: 'Send a message about your recent hiking trip',
      potential_outcome: '89% chance of positive response',
      priority: 'high',
      expires_in: '2 hours'
    },
    {
      id: 'conversation_001',
      type: 'conversation',
      title: 'Perfect Conversation Starter',
      description: 'Ask about her recent travel to Japan based on her photos',
      confidence: 94.2,
      reasoning: 'She posted 3 Japan photos, mentioned travel in bio, active on travel topics',
      action: 'Message: "I noticed your amazing Japan photos! What was your favorite experience there?"',
      potential_outcome: '87% chance of engaging conversation',
      priority: 'high',
      expires_in: '4 hours'
    },
    {
      id: 'activity_001',
      type: 'activity',
      title: 'Ideal First Date Location',
      description: 'Coffee at Blue Bottle Coffee on 5th Street',
      confidence: 91.7,
      reasoning: 'Both prefer casual settings, coffee shops, walking distance from both locations',
      action: 'Suggest this location for your upcoming date',
      potential_outcome: '84% chance of acceptance',
      priority: 'medium',
      expires_in: '1 day'
    },
    {
      id: 'profile_001',
      type: 'profile',
      title: 'Profile Photo Optimization',
      description: 'Add a photo of you playing guitar to increase matches by 34%',
      confidence: 97.3,
      reasoning: 'Music interests mentioned by 67% of your matches, guitar photos perform well',
      action: 'Upload your guitar photo as 3rd profile picture',
      potential_outcome: '34% increase in match rate',
      priority: 'high',
      expires_in: 'No expiry'
    },
    {
      id: 'timing_001',
      type: 'timing',
      title: 'Optimal Message Time',
      description: 'Send your next message at 7:30 PM for best response rate',
      confidence: 89.4,
      reasoning: 'Target user most active 7-9 PM, 73% higher response rate during this window',
      action: 'Schedule message for 7:30 PM today',
      potential_outcome: '73% higher response probability',
      priority: 'medium',
      expires_in: '6 hours'
    },
    {
      id: 'content_001',
      type: 'content',
      title: 'Story Content Suggestion',
      description: 'Share a photo from your weekend farmers market visit',
      confidence: 86.1,
      reasoning: 'Healthy lifestyle content resonates with your match preferences',
      action: 'Post farmers market photo to your story',
      potential_outcome: '67% chance of story engagement',
      priority: 'low',
      expires_in: '12 hours'
    }
  ];

  // Recommendation performance metrics
  const performanceMetrics = [
    { category: 'Matches', accuracy: 94.8, engagement: 87.3, success: 76.4, satisfaction: 91.2 },
    { category: 'Conversations', accuracy: 91.2, engagement: 89.7, success: 82.1, satisfaction: 88.9 },
    { category: 'Activities', accuracy: 88.9, engagement: 78.4, success: 71.8, satisfaction: 85.7 },
    { category: 'Profile', accuracy: 96.3, engagement: 92.8, success: 85.7, satisfaction: 94.1 },
    { category: 'Timing', accuracy: 89.7, engagement: 84.2, success: 73.9, satisfaction: 87.3 },
    { category: 'Content', accuracy: 87.4, engagement: 81.6, success: 69.3, satisfaction: 83.8 }
  ];

  // Learning algorithm performance
  const learningProgress = [
    { week: 'Week 1', accuracy: 72.3, engagement: 68.9, user_satisfaction: 74.2 },
    { week: 'Week 2', accuracy: 78.7, engagement: 74.1, user_satisfaction: 79.8 },
    { week: 'Week 3', accuracy: 83.4, engagement: 79.6, user_satisfaction: 84.3 },
    { week: 'Week 4', accuracy: 87.2, engagement: 83.8, user_satisfaction: 87.9 },
    { week: 'Week 5', accuracy: 90.1, engagement: 87.2, user_satisfaction: 90.6 },
    { week: 'Week 6', accuracy: 92.8, engagement: 89.7, user_satisfaction: 92.4 },
    { week: 'Week 7', accuracy: 94.8, engagement: 91.3, user_satisfaction: 94.1 }
  ];

  // User feedback data
  const userFeedbackData = [
    { rating: '5 Stars', count: 1247, percentage: 67.3 },
    { rating: '4 Stars', count: 423, percentage: 22.8 },
    { rating: '3 Stars', count: 134, percentage: 7.2 },
    { rating: '2 Stars', count: 34, percentage: 1.8 },
    { rating: '1 Star', count: 17, percentage: 0.9 }
  ];

  // Recommendation algorithms
  const recommendationAlgorithms = [
    {
      id: 'collaborative_filtering',
      name: 'Collaborative Filtering',
      description: 'Recommends based on similar user preferences and behaviors',
      accuracy: 91.7,
      processing_speed: 'fast',
      data_requirements: 'medium',
      status: 'active',
      weight: 35
    },
    {
      id: 'content_based',
      name: 'Content-Based Filtering',
      description: 'Analyzes user preferences and item characteristics',
      accuracy: 88.9,
      processing_speed: 'very_fast',
      data_requirements: 'low',
      status: 'active',
      weight: 25
    },
    {
      id: 'deep_learning',
      name: 'Deep Learning Neural Networks',
      description: 'Advanced pattern recognition and preference modeling',
      accuracy: 96.3,
      processing_speed: 'medium',
      data_requirements: 'high',
      status: 'active',
      weight: 30
    },
    {
      id: 'behavioral_analysis',
      name: 'Behavioral Analysis',
      description: 'Real-time behavior pattern analysis and prediction',
      accuracy: 89.4,
      processing_speed: 'real-time',
      data_requirements: 'medium',
      status: 'active',
      weight: 10
    }
  ];

  // Real-time recommendation updates
  const realtimeUpdates = [
    {
      timestamp: '2025-01-07 14:30:00',
      type: 'new_recommendation',
      category: 'match',
      title: 'New high-compatibility match found',
      confidence: 94.7,
      action_required: true
    },
    {
      timestamp: '2025-01-07 14:28:00',
      type: 'feedback_processed',
      category: 'conversation',
      title: 'User feedback improved conversation suggestions',
      confidence: 91.3,
      action_required: false
    },
    {
      timestamp: '2025-01-07 14:25:00',
      type: 'algorithm_update',
      category: 'profile',
      title: 'Profile optimization algorithm enhanced',
      confidence: 96.8,
      action_required: false
    },
    {
      timestamp: '2025-01-07 14:22:00',
      type: 'preference_learned',
      category: 'activity',
      title: 'New activity preference detected',
      confidence: 87.9,
      action_required: true
    },
    {
      timestamp: '2025-01-07 14:20:00',
      type: 'success_tracked',
      category: 'timing',
      title: 'Timing recommendation led to successful match',
      confidence: 89.2,
      action_required: false
    }
  ];

  useEffect(() => {
    let interval;
    if (isLearning) {
      interval = setInterval(() => {
        setRecommendationScore(prev => Math.min(prev + (Math.random() - 0.3) * 0.1, 99));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLearning]);

  const handleRecommendationFeedback = (recommendationId, feedback) => {
    console.log(`Feedback for ${recommendationId}: ${feedback}`);
    // In a real app, this would update the ML model with user feedback
  };

  const refreshRecommendations = () => {
    console.log('Refreshing personalized recommendations...');
    // In a real app, this would trigger new recommendation generation
  };

  const exportRecommendationData = () => {
    console.log('Exporting recommendation analytics...');
    // In a real app, this would export comprehensive recommendation reports
  };

  const toggleLearningMode = () => {
    setIsLearning(!isLearning);
    console.log(`Learning mode ${!isLearning ? 'enabled' : 'disabled'}`);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'text-green-600 bg-green-100';
    if (confidence >= 90) return 'text-blue-600 bg-blue-100';
    if (confidence >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const selectedCategoryData = recommendationCategories.find(cat => cat.id === selectedCategory);
  const filteredRecommendations = personalizedRecommendations.filter(rec => rec.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-600" />
              Personalized Recommendation Engine
            </h1>
            <p className="text-gray-600">
              AI-driven personalized recommendations for enhanced dating success and user experience
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={recommendationMode}
              onChange={(e) => setRecommendationMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="ai_powered">AI-Powered</option>
              <option value="collaborative">Collaborative Filtering</option>
              <option value="content_based">Content-Based</option>
              <option value="hybrid">Hybrid Approach</option>
            </select>
            
            <select
              value={personalizationLevel}
              onChange={(e) => setPersonalizationLevel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="low">Low Personalization</option>
              <option value="medium">Medium Personalization</option>
              <option value="high">High Personalization</option>
              <option value="maximum">Maximum Personalization</option>
            </select>
            
            <button 
              onClick={refreshRecommendations}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            
            <button 
              onClick={exportRecommendationData}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              Export
            </button>
            
            <button 
              onClick={toggleLearningMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isLearning 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <Brain className="w-4 h-4" />
              {isLearning ? 'Learning On' : 'Learning Off'}
            </button>
          </div>
        </div>
      </div>

      {/* Recommendation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{recommendationScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Score</h3>
            <p className="text-sm text-gray-600">Recommendation accuracy</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">3,487</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Recommendations</h3>
            <p className="text-sm text-gray-600">Generated today</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <ThumbsUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">89.7%</div>
              <div className="text-xs text-gray-500">Positive</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Feedback</h3>
            <p className="text-sm text-gray-600">Positive response rate</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">76.4%</div>
              <div className="text-xs text-gray-500">Success</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Success Rate</h3>
            <p className="text-sm text-gray-600">Recommendation success</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Brain className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">1.2ms</div>
              <div className="text-xs text-gray-500">Response</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AI Response</h3>
            <p className="text-sm text-gray-600">Average response time</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Recommendation Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Categories
            </h3>
            <div className="space-y-3">
              {recommendationCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full p-3 rounded-lg border transition-colors text-left ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.count} recommendations</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">{category.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Learning Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Learning Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Learning</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isLearning ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                }`}>
                  {isLearning ? 'Active' : 'Paused'}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Model Training</span>
                  <span className="font-semibold text-gray-900">97.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: '97.3%' }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-500">Recent Improvements</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Match accuracy +2.3%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Response rate +4.7%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">User satisfaction +1.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4" />
                Generate New Recommendations
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Adjust Preferences
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                View Analytics
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                Success Stories
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Current Recommendations */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedCategoryData?.name} - Personalized for You
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Accuracy:</span>
                <span className="font-semibold text-purple-600">{selectedCategoryData?.accuracy}%</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredRecommendations.map((recommendation) => (
                <div key={recommendation.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(recommendation.priority)}`}>
                          {recommendation.priority} priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(recommendation.confidence)}`}>
                          {recommendation.confidence}% confidence
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{recommendation.description}</p>
                      <p className="text-sm text-blue-700 bg-blue-50 p-2 rounded mb-2">{recommendation.action}</p>
                      <div className="text-xs text-gray-600 mb-2">
                        <strong>Why this recommendation:</strong> {recommendation.reasoning}
                      </div>
                      <div className="text-xs text-green-600">
                        <strong>Expected outcome:</strong> {recommendation.potential_outcome}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <div className="text-xs text-gray-500">Expires: {recommendation.expires_in}</div>
                      <div className="flex gap-1">
                        <button 
                          onClick={() => handleRecommendationFeedback(recommendation.id, 'positive')}
                          className="p-1 text-green-600 hover:bg-green-50 rounded"
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleRecommendationFeedback(recommendation.id, 'negative')}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${recommendation.confidence}%` }}
                      />
                    </div>
                    <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Take Action
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Analytics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendation Performance Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="accuracy" fill="#8b5cf6" name="Accuracy %" />
                <Bar dataKey="engagement" fill="#10b981" name="Engagement %" />
                <Bar dataKey="success" fill="#f59e0b" name="Success %" />
                <Bar dataKey="satisfaction" fill="#ef4444" name="Satisfaction %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Learning Progress Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={learningProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={2} name="Accuracy" />
                <Line type="monotone" dataKey="engagement" stroke="#10b981" strokeWidth={2} name="Engagement" />
                <Line type="monotone" dataKey="user_satisfaction" stroke="#f59e0b" strokeWidth={2} name="User Satisfaction" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recommendation Algorithms */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Recommendation Algorithms</h3>
            <div className="space-y-4">
              {recommendationAlgorithms.map((algorithm) => (
                <div key={algorithm.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Brain className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{algorithm.name}</h4>
                        <p className="text-sm text-gray-600">{algorithm.description}</p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                        {algorithm.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{algorithm.accuracy}%</div>
                      <div className="text-xs text-gray-500">accuracy</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-blue-600">{algorithm.processing_speed}</div>
                      <div className="text-xs text-gray-500">Speed</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-green-600">{algorithm.data_requirements}</div>
                      <div className="text-xs text-gray-500">Data Req.</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-sm font-semibold text-purple-600">{algorithm.weight}%</div>
                      <div className="text-xs text-gray-500">Weight</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <button className="text-xs text-purple-600 hover:text-purple-700">
                        Configure
                      </button>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${algorithm.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Updates and User Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Real-time Updates
              </h3>
              <div className="space-y-3">
                {realtimeUpdates.map((update, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <span className="font-medium text-gray-900">{update.title}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600">{update.confidence}%</div>
                        <div className="text-xs text-gray-500">confidence</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-600">
                        <span className="font-medium">{update.type.replace(/_/g, ' ')}</span>
                        <span className="ml-2">in {update.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {update.action_required && (
                          <span className="text-red-600 font-medium">Action Required</span>
                        )}
                        <span className="text-xs text-gray-500">{update.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Feedback Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={userFeedbackData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ rating, percentage }) => `${rating}: ${percentage}%`}
                  >
                    {userFeedbackData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#6b7280'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendationEngine;

