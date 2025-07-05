import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, Brain, Lightbulb, Target, Zap, Star,
  ThumbsUp, ThumbsDown, Send, Mic, MicOff, Volume2,
  Settings, RefreshCw, Eye, Heart, Smile, TrendingUp,
  Clock, Users, Award, Gift, Sparkles, ArrowRight,
  BookOpen, HelpCircle, CheckCircle, AlertCircle,
  BarChart3, PieChart, Activity, Calendar, Filter
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart as RechartsPieChart, Pie, Cell
} from 'recharts';

const AIPoweredConversationAssistant = () => {
  const [assistantMode, setAssistantMode] = useState('active');
  const [conversationTone, setConversationTone] = useState('friendly');
  const [suggestionType, setSuggestionType] = useState('all');
  const [isListening, setIsListening] = useState(false);
  const [currentSuggestion, setCurrentSuggestion] = useState(null);
  const [conversationScore, setConversationScore] = useState(87.3);
  const [aiConfidence, setAiConfidence] = useState(94.2);

  // Conversation suggestions
  const conversationSuggestions = [
    {
      id: 'opener_001',
      type: 'opener',
      category: 'Personal Interest',
      suggestion: "I noticed you love hiking! What's been your favorite trail recently?",
      reasoning: "She has 3 hiking photos and mentioned outdoor activities in her bio",
      confidence: 96.8,
      success_rate: 89.3,
      tone: 'friendly',
      timing: 'immediate',
      context: 'Profile analysis shows strong outdoor interest'
    },
    {
      id: 'followup_001',
      type: 'follow_up',
      category: 'Shared Experience',
      suggestion: "That sounds amazing! I've been wanting to try that trail. Any tips for a first-timer?",
      reasoning: "Shows genuine interest and creates opportunity for helpful exchange",
      confidence: 92.4,
      success_rate: 84.7,
      tone: 'curious',
      timing: 'after_response',
      context: 'Response to hiking discussion'
    },
    {
      id: 'question_001',
      type: 'question',
      category: 'Getting to Know',
      suggestion: "What's something you've learned recently that excited you?",
      reasoning: "Open-ended question that reveals personality and interests",
      confidence: 88.9,
      success_rate: 76.2,
      tone: 'thoughtful',
      timing: 'mid_conversation',
      context: 'Deepening conversation'
    },
    {
      id: 'compliment_001',
      type: 'compliment',
      category: 'Genuine Appreciation',
      suggestion: "Your passion for photography really comes through in your pictures!",
      reasoning: "Specific compliment based on visible skill and interest",
      confidence: 94.1,
      success_rate: 91.8,
      tone: 'appreciative',
      timing: 'natural_break',
      context: 'Acknowledging her photography skills'
    },
    {
      id: 'transition_001',
      type: 'transition',
      category: 'Moving Forward',
      suggestion: "I'd love to continue this conversation over coffee. Are you free this weekend?",
      reasoning: "Natural progression after positive conversation flow",
      confidence: 87.6,
      success_rate: 73.4,
      tone: 'confident',
      timing: 'after_rapport',
      context: 'Transitioning to meeting in person'
    },
    {
      id: 'recovery_001',
      type: 'recovery',
      category: 'Conversation Rescue',
      suggestion: "Let me ask you something different - what's the best advice you've ever received?",
      reasoning: "Pivot to engaging topic when conversation stalls",
      confidence: 85.3,
      success_rate: 68.9,
      tone: 'reset',
      timing: 'conversation_lull',
      context: 'Recovering from awkward moment'
    }
  ];

  // Conversation analysis metrics
  const conversationMetrics = {
    engagement_score: 87.3,
    response_rate: 94.7,
    conversation_length: 18.4,
    positive_sentiment: 89.2,
    question_ratio: 0.34,
    compliment_ratio: 0.12,
    emoji_usage: 0.23,
    response_time: 4.2
  };

  // AI analysis insights
  const aiInsights = [
    {
      type: 'strength',
      title: 'Great Question Asking',
      description: 'You ask engaging questions that keep conversations flowing',
      confidence: 92.8,
      impact: 'high',
      examples: ['Open-ended questions', 'Follow-up inquiries', 'Personal interest queries']
    },
    {
      type: 'opportunity',
      title: 'Add More Compliments',
      description: 'Genuine compliments could increase positive response by 23%',
      confidence: 88.4,
      impact: 'medium',
      examples: ['Specific appreciation', 'Skill recognition', 'Thoughtful observations']
    },
    {
      type: 'warning',
      title: 'Response Time',
      description: 'Faster responses (under 2 hours) show 34% better engagement',
      confidence: 95.1,
      impact: 'high',
      examples: ['Quick acknowledgments', 'Timely follow-ups', 'Active presence']
    },
    {
      type: 'tip',
      title: 'Conversation Depth',
      description: 'Moving beyond surface topics increases connection by 41%',
      confidence: 89.7,
      impact: 'high',
      examples: ['Personal values', 'Life experiences', 'Future aspirations']
    }
  ];

  // Conversation tone options
  const toneOptions = [
    { id: 'friendly', name: 'Friendly', description: 'Warm and approachable', emoji: '😊' },
    { id: 'playful', name: 'Playful', description: 'Light and fun', emoji: '😄' },
    { id: 'thoughtful', name: 'Thoughtful', description: 'Deep and meaningful', emoji: '🤔' },
    { id: 'confident', name: 'Confident', description: 'Direct and assured', emoji: '😎' },
    { id: 'romantic', name: 'Romantic', description: 'Sweet and charming', emoji: '😍' },
    { id: 'curious', name: 'Curious', description: 'Inquisitive and engaged', emoji: '🧐' }
  ];

  // Success metrics by conversation type
  const successMetrics = [
    { type: 'Openers', success_rate: 89.3, response_rate: 94.7, engagement: 87.2 },
    { type: 'Questions', success_rate: 76.2, response_rate: 91.4, engagement: 83.8 },
    { type: 'Compliments', success_rate: 91.8, response_rate: 96.3, engagement: 92.1 },
    { type: 'Follow-ups', success_rate: 84.7, response_rate: 89.6, engagement: 85.9 },
    { type: 'Transitions', success_rate: 73.4, response_rate: 78.2, engagement: 79.3 },
    { type: 'Recovery', success_rate: 68.9, response_rate: 74.1, engagement: 71.6 }
  ];

  // Real-time conversation analysis
  const realtimeAnalysis = {
    current_mood: 'positive',
    engagement_level: 'high',
    conversation_flow: 'smooth',
    next_suggestion_timing: '2-3 minutes',
    optimal_response_window: '45 minutes',
    conversation_health: 94.2
  };

  // Conversation templates
  const conversationTemplates = [
    {
      id: 'first_message',
      name: 'Perfect First Message',
      template: "Hi {name}! I noticed {specific_interest} in your profile. {personalized_question}?",
      success_rate: 87.3,
      usage_count: 1247
    },
    {
      id: 'date_invitation',
      name: 'Natural Date Invitation',
      template: "I've really enjoyed our conversation about {shared_topic}. Would you like to continue it over {activity} this {timeframe}?",
      success_rate: 73.8,
      usage_count: 892
    },
    {
      id: 'conversation_revival',
      name: 'Conversation Revival',
      template: "Hey {name}! I was just thinking about what you said about {previous_topic}. {follow_up_question}?",
      success_rate: 69.4,
      usage_count: 567
    },
    {
      id: 'compliment_delivery',
      name: 'Genuine Compliment',
      template: "I have to say, {specific_compliment}. {related_question}?",
      success_rate: 91.2,
      usage_count: 1034
    }
  ];

  // Learning progress data
  const learningProgress = [
    { week: 'Week 1', conversation_score: 72.3, success_rate: 68.9, confidence: 74.2 },
    { week: 'Week 2', conversation_score: 78.7, success_rate: 74.1, confidence: 79.8 },
    { week: 'Week 3', conversation_score: 83.4, success_rate: 79.6, confidence: 84.3 },
    { week: 'Week 4', conversation_score: 87.2, success_rate: 83.8, confidence: 87.9 },
    { week: 'Week 5', conversation_score: 90.1, success_rate: 87.2, confidence: 90.6 },
    { week: 'Week 6', conversation_score: 92.8, success_rate: 89.7, confidence: 92.4 },
    { week: 'Week 7', conversation_score: 94.8, success_rate: 91.3, confidence: 94.1 }
  ];

  useEffect(() => {
    // Simulate real-time conversation analysis updates
    const interval = setInterval(() => {
      setConversationScore(prev => Math.min(prev + (Math.random() - 0.4) * 0.5, 100));
      setAiConfidence(prev => Math.min(prev + (Math.random() - 0.3) * 0.3, 100));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const generateSuggestion = () => {
    const filteredSuggestions = suggestionType === 'all' 
      ? conversationSuggestions 
      : conversationSuggestions.filter(s => s.type === suggestionType);
    
    const randomSuggestion = filteredSuggestions[Math.floor(Math.random() * filteredSuggestions.length)];
    setCurrentSuggestion(randomSuggestion);
  };

  const provideFeedback = (suggestionId, feedback) => {
    console.log(`Feedback for suggestion ${suggestionId}: ${feedback}`);
    // In a real app, this would update the AI model with user feedback
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    console.log(`Voice input ${!isListening ? 'enabled' : 'disabled'}`);
    // In a real app, this would start/stop speech recognition
  };

  const applySuggestion = (suggestion) => {
    console.log(`Applying suggestion: ${suggestion.suggestion}`);
    // In a real app, this would insert the suggestion into the message input
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case 'strength': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'opportunity': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'tip': return <Lightbulb className="w-5 h-5 text-purple-600" />;
      default: return <HelpCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getInsightColor = (type) => {
    switch (type) {
      case 'strength': return 'border-green-200 bg-green-50';
      case 'opportunity': return 'border-blue-200 bg-blue-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'tip': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-600" />
              AI-Powered Conversation Assistant
            </h1>
            <p className="text-gray-600">
              Intelligent conversation guidance and real-time assistance for better dating conversations
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={assistantMode}
              onChange={(e) => setAssistantMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="active">Active Assistance</option>
              <option value="passive">Passive Monitoring</option>
              <option value="learning">Learning Mode</option>
              <option value="advanced">Advanced Analysis</option>
            </select>
            
            <select
              value={conversationTone}
              onChange={(e) => setConversationTone(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {toneOptions.map(tone => (
                <option key={tone.id} value={tone.id}>
                  {tone.emoji} {tone.name}
                </option>
              ))}
            </select>
            
            <button 
              onClick={generateSuggestion}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Generate Suggestion
            </button>
            
            <button 
              onClick={toggleListening}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isListening 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {isListening ? 'Stop Listening' : 'Voice Input'}
            </button>
          </div>
        </div>
      </div>

      {/* AI Assistant Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{conversationScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Conversation Score</h3>
            <p className="text-sm text-gray-600">Overall conversation quality</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{aiConfidence.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Confidence</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AI Confidence</h3>
            <p className="text-sm text-gray-600">Suggestion accuracy</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">1,247</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Suggestions</h3>
            <p className="text-sm text-gray-600">Generated today</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">89.3%</div>
              <div className="text-xs text-gray-500">Success</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Success Rate</h3>
            <p className="text-sm text-gray-600">Positive responses</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Assistant Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Suggestion */}
          {currentSuggestion && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  AI Suggestion
                </h3>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {currentSuggestion.type.replace('_', ' ')}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {currentSuggestion.confidence}% confidence
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-900 font-medium text-lg mb-2">{currentSuggestion.suggestion}</p>
                <p className="text-blue-700 text-sm">{currentSuggestion.reasoning}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{currentSuggestion.confidence}%</div>
                  <div className="text-sm text-gray-600">Confidence</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{currentSuggestion.success_rate}%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{currentSuggestion.tone}</div>
                  <div className="text-sm text-gray-600">Tone</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <strong>Context:</strong> {currentSuggestion.context}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => applySuggestion(currentSuggestion)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Use Suggestion
                  </button>
                  <button
                    onClick={() => provideFeedback(currentSuggestion.id, 'positive')}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => provideFeedback(currentSuggestion.id, 'negative')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Conversation Templates */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conversation Templates
            </h3>
            <div className="space-y-4">
              {conversationTemplates.map((template) => (
                <div key={template.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">{template.usage_count} uses</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {template.success_rate}% success
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg mb-3 italic">
                    {template.template}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Variables will be automatically filled based on profile analysis
                    </div>
                    <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                      Use Template
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics by Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={successMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="success_rate" fill="#8b5cf6" name="Success Rate %" />
                <Bar dataKey="response_rate" fill="#10b981" name="Response Rate %" />
                <Bar dataKey="engagement" fill="#f59e0b" name="Engagement %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Learning Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={learningProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="conversation_score" stroke="#8b5cf6" strokeWidth={2} name="Conversation Score" />
                <Line type="monotone" dataKey="success_rate" stroke="#10b981" strokeWidth={2} name="Success Rate" />
                <Line type="monotone" dataKey="confidence" stroke="#f59e0b" strokeWidth={2} name="AI Confidence" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Real-time Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Real-time Analysis
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Mood</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {realtimeAnalysis.current_mood}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Engagement Level</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {realtimeAnalysis.engagement_level}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Conversation Flow</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {realtimeAnalysis.conversation_flow}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Conversation Health</span>
                  <span className="font-semibold text-gray-900">{realtimeAnalysis.conversation_health}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${realtimeAnalysis.conversation_health}%` }}
                  />
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <strong>Next suggestion in:</strong> {realtimeAnalysis.next_suggestion_timing}
              </div>
              
              <div className="text-sm text-gray-600">
                <strong>Optimal response window:</strong> {realtimeAnalysis.optimal_response_window}
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              AI Insights
            </h3>
            <div className="space-y-3">
              {aiInsights.map((insight, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getInsightColor(insight.type)}`}>
                  <div className="flex items-start gap-3 mb-2">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                    </div>
                    <span className="text-xs text-gray-500">{insight.confidence}%</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <strong>Examples:</strong> {insight.examples.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Conversation Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Response Rate</span>
                <span className="font-semibold text-green-600">{conversationMetrics.response_rate}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg. Length</span>
                <span className="font-semibold text-blue-600">{conversationMetrics.conversation_length} messages</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Positive Sentiment</span>
                <span className="font-semibold text-purple-600">{conversationMetrics.positive_sentiment}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Question Ratio</span>
                <span className="font-semibold text-yellow-600">{conversationMetrics.question_ratio}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="font-semibold text-red-600">{conversationMetrics.response_time}h avg</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
                Refresh Analysis
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Customize Assistant
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BarChart3 className="w-4 h-4" />
                View Detailed Analytics
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4" />
                Conversation Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredConversationAssistant;

