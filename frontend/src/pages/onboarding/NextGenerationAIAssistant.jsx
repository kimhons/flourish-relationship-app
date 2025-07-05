import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  Brain, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Star, 
  Zap,
  Target,
  Award,
  Clock,
  BarChart3,
  Settings,
  Mic,
  Send,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Share2
} from 'lucide-react';

const NextGenerationAIAssistant = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your Next-Generation AI Dating Assistant. I'm here to help you navigate your dating journey with personalized insights, conversation tips, and relationship guidance. How can I assist you today?",
      timestamp: new Date(Date.now() - 300000),
      confidence: 98.5,
      category: 'greeting'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiPersonality, setAiPersonality] = useState('supportive');
  const [conversationMode, setConversationMode] = useState('text');
  const messagesEndRef = useRef(null);

  const [aiInsights, setAiInsights] = useState({
    profileOptimization: 87,
    conversationSkills: 92,
    matchCompatibility: 78,
    datingConfidence: 85,
    relationshipReadiness: 90
  });

  const [recentAdvice, setRecentAdvice] = useState([
    {
      id: 1,
      category: 'Profile',
      title: 'Optimize Your Main Photo',
      content: 'Your current main photo has a 73% appeal score. Try a photo with better lighting and a genuine smile.',
      priority: 'high',
      implemented: false
    },
    {
      id: 2,
      category: 'Conversation',
      title: 'Ask More Open-Ended Questions',
      content: 'Your conversations tend to be 65% closed questions. Try asking about experiences and feelings.',
      priority: 'medium',
      implemented: true
    },
    {
      id: 3,
      category: 'Matching',
      title: 'Expand Your Age Range',
      content: 'Consider expanding your age range by 2 years to increase quality matches by 34%.',
      priority: 'low',
      implemented: false
    }
  ]);

  const [aiCapabilities, setAiCapabilities] = useState([
    {
      name: 'Conversation Analysis',
      description: 'Real-time analysis of your conversations with improvement suggestions',
      accuracy: 96.8,
      active: true
    },
    {
      name: 'Profile Optimization',
      description: 'AI-powered recommendations to enhance your dating profile',
      accuracy: 94.2,
      active: true
    },
    {
      name: 'Match Prediction',
      description: 'Predict compatibility and success probability with potential matches',
      accuracy: 89.7,
      active: true
    },
    {
      name: 'Emotional Intelligence',
      description: 'Understand and respond to emotional cues in conversations',
      accuracy: 92.4,
      active: true
    },
    {
      name: 'Relationship Coaching',
      description: 'Personalized coaching for long-term relationship success',
      accuracy: 91.6,
      active: true
    },
    {
      name: 'Cultural Adaptation',
      description: 'Adapt advice based on cultural context and preferences',
      accuracy: 88.9,
      active: true
    }
  ]);

  const personalityTypes = [
    { id: 'supportive', name: 'Supportive', description: 'Encouraging and empathetic guidance' },
    { id: 'direct', name: 'Direct', description: 'Straightforward and honest feedback' },
    { id: 'playful', name: 'Playful', description: 'Fun and lighthearted approach' },
    { id: 'analytical', name: 'Analytical', description: 'Data-driven insights and recommendations' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      category: 'question'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userInput) => {
    const responses = [
      {
        content: "Based on your conversation patterns, I notice you tend to ask great follow-up questions. To enhance your dating success, try sharing more personal stories - this increases emotional connection by 67% according to our analysis.",
        confidence: 94.7,
        category: 'conversation_tips'
      },
      {
        content: "Your profile shows strong authenticity, which is excellent! Consider adding one more photo that shows you engaged in a hobby - this increases match quality by 43% and conversation starters by 56%.",
        confidence: 91.2,
        category: 'profile_optimization'
      },
      {
        content: "I've analyzed your recent matches and conversations. Your compatibility score is highest with people who share your values around family and career. Focus on these topics early in conversations for better connection.",
        confidence: 89.8,
        category: 'matching_strategy'
      }
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      id: messages.length + 2,
      type: 'ai',
      content: randomResponse.content,
      timestamp: new Date(),
      confidence: randomResponse.confidence,
      category: randomResponse.category
    };
  };

  const handleAdviceAction = (adviceId, action) => {
    setRecentAdvice(prev => 
      prev.map(advice => 
        advice.id === adviceId 
          ? { ...advice, implemented: action === 'implement' }
          : advice
      )
    );
  };

  const renderChatInterface = () => (
    <div className="flex flex-col h-96">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              {message.type === 'ai' && (
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-gray-500">
                    Confidence: {message.confidence}%
                  </span>
                  <div className="flex space-x-1">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ThumbsDown className="w-3 h-3" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Bookmark className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <div className="flex-1 flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about dating..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setConversationMode(conversationMode === 'text' ? 'voice' : 'text')}
              className={`px-3 py-2 rounded-lg ${
                conversationMode === 'voice' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderInsightsPanel = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(aiInsights).map(([key, value]) => (
          <div key={key} className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <span className={`text-sm font-semibold ${
                value >= 90 ? 'text-green-600' :
                value >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {value}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  value >= 90 ? 'bg-green-500' :
                  value >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent AI Advice</h3>
        <div className="space-y-4">
          {recentAdvice.map((advice) => (
            <div key={advice.id} className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-blue-600">
                      {advice.category}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      advice.priority === 'high' ? 'bg-red-100 text-red-800' :
                      advice.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {advice.priority}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{advice.title}</h4>
                  <p className="text-sm text-gray-600">{advice.content}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  {!advice.implemented ? (
                    <>
                      <button
                        onClick={() => handleAdviceAction(advice.id, 'implement')}
                        className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Implement
                      </button>
                      <button
                        onClick={() => handleAdviceAction(advice.id, 'dismiss')}
                        className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                      >
                        Dismiss
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded">
                      ✓ Implemented
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCapabilitiesPanel = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiCapabilities.map((capability, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{capability.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{capability.accuracy}%</span>
                  <div className={`w-3 h-3 rounded-full ${
                    capability.active ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{capability.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${capability.accuracy}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Personality Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalityTypes.map((personality) => (
            <div
              key={personality.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                aiPersonality === personality.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setAiPersonality(personality.id)}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  aiPersonality === personality.id
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {aiPersonality === personality.id && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <h4 className="font-medium text-gray-900">{personality.name}</h4>
              </div>
              <p className="text-sm text-gray-600">{personality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Next-Generation AI Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your intelligent dating companion powered by advanced AI. Get personalized advice, 
            conversation insights, and relationship guidance tailored to your unique journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-sm text-gray-600">Conversations Analyzed</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-sm text-gray-600">Success Rate Improvement</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-sm text-gray-600">Successful Matches</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9</div>
            <div className="text-sm text-gray-600">User Satisfaction</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'chat', name: 'AI Chat', icon: MessageCircle },
                { id: 'insights', name: 'Insights', icon: BarChart3 },
                { id: 'capabilities', name: 'Capabilities', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'chat' && renderChatInterface()}
            {activeTab === 'insights' && renderInsightsPanel()}
            {activeTab === 'capabilities' && renderCapabilitiesPanel()}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Target className="w-6 h-6 text-blue-500" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Analyze My Profile</div>
                <div className="text-sm text-gray-600">Get AI-powered optimization tips</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Conversation Starter</div>
                <div className="text-sm text-gray-600">Get personalized opening lines</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Award className="w-6 h-6 text-green-500" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Success Prediction</div>
                <div className="text-sm text-gray-600">Predict match compatibility</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenerationAIAssistant;

