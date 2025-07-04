import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  MessageCircle, Brain, Type, Languages, Mic, Volume2,
  TrendingUp, TrendingDown, Activity, Zap, Eye, Filter,
  Play, Pause, RefreshCw, Settings, Download, Share2,
  Heart, Smile, Frown, Meh, AlertTriangle, CheckCircle,
  Globe, BookOpen, Headphones, FileText, Search
} from 'lucide-react';

const NaturalLanguageProcessingHub = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [analysisMode, setAnalysisMode] = useState('real_time');
  const [showAdvancedNLP, setShowAdvancedNLP] = useState(false);
  const [sentimentScore, setSentimentScore] = useState(0.73);

  // NLP Processing Modules
  const nlpModules = [
    {
      id: 'sentiment_analysis',
      name: 'Sentiment Analysis',
      description: 'Analyze emotional tone and sentiment in messages',
      accuracy: 94.2,
      throughput: '15K msg/min',
      status: 'active',
      languages: 25
    },
    {
      id: 'intent_recognition',
      name: 'Intent Recognition',
      description: 'Identify user intentions and conversation goals',
      accuracy: 91.7,
      throughput: '12K msg/min',
      status: 'active',
      languages: 18
    },
    {
      id: 'entity_extraction',
      name: 'Entity Extraction',
      description: 'Extract names, places, dates, and other entities',
      accuracy: 96.5,
      throughput: '20K msg/min',
      status: 'active',
      languages: 30
    },
    {
      id: 'language_detection',
      name: 'Language Detection',
      description: 'Automatically detect message language',
      accuracy: 99.1,
      throughput: '50K msg/min',
      status: 'active',
      languages: 95
    },
    {
      id: 'toxicity_detection',
      name: 'Toxicity Detection',
      description: 'Identify harmful or inappropriate content',
      accuracy: 97.3,
      throughput: '18K msg/min',
      status: 'active',
      languages: 22
    },
    {
      id: 'topic_modeling',
      name: 'Topic Modeling',
      description: 'Discover conversation topics and themes',
      accuracy: 89.4,
      throughput: '8K msg/min',
      status: 'active',
      languages: 15
    }
  ];

  // Real-time sentiment analysis data
  const sentimentTrends = [
    { time: '00:00', positive: 68, neutral: 25, negative: 7, compound: 0.72 },
    { time: '04:00', positive: 72, neutral: 22, negative: 6, compound: 0.75 },
    { time: '08:00', positive: 65, neutral: 28, negative: 7, compound: 0.69 },
    { time: '12:00', positive: 78, neutral: 18, negative: 4, compound: 0.81 },
    { time: '16:00', positive: 74, neutral: 21, negative: 5, compound: 0.77 },
    { time: '20:00', positive: 76, neutral: 19, negative: 5, compound: 0.79 }
  ];

  // Language distribution
  const languageDistribution = [
    { language: 'English', count: 45230, percentage: 67.2, color: '#3b82f6' },
    { language: 'Spanish', count: 8940, percentage: 13.3, color: '#10b981' },
    { language: 'French', count: 4560, percentage: 6.8, color: '#f59e0b' },
    { language: 'German', count: 3210, percentage: 4.8, color: '#ef4444' },
    { language: 'Italian', count: 2180, percentage: 3.2, color: '#8b5cf6' },
    { language: 'Portuguese', count: 1890, percentage: 2.8, color: '#06b6d4' },
    { language: 'Other', count: 1290, percentage: 1.9, color: '#6b7280' }
  ];

  // Intent recognition results
  const intentCategories = [
    { intent: 'Getting to Know', count: 12450, confidence: 0.94, trend: '+5.2%' },
    { intent: 'Planning Date', count: 8920, confidence: 0.91, trend: '+8.1%' },
    { intent: 'Expressing Interest', count: 7680, confidence: 0.96, trend: '+3.7%' },
    { intent: 'Asking Questions', count: 6540, confidence: 0.89, trend: '+2.4%' },
    { intent: 'Sharing Experiences', count: 5230, confidence: 0.92, trend: '+6.8%' },
    { intent: 'Complimenting', count: 4180, confidence: 0.97, trend: '+4.3%' },
    { intent: 'Making Jokes', count: 3450, confidence: 0.88, trend: '+1.9%' },
    { intent: 'Seeking Support', count: 2890, confidence: 0.93, trend: '+7.2%' }
  ];

  // Entity extraction results
  const extractedEntities = [
    { type: 'Person Names', count: 15420, accuracy: 0.97 },
    { type: 'Locations', count: 8930, accuracy: 0.94 },
    { type: 'Dates/Times', count: 12680, accuracy: 0.96 },
    { type: 'Organizations', count: 3240, accuracy: 0.92 },
    { type: 'Events', count: 5670, accuracy: 0.89 },
    { type: 'Products/Brands', count: 4180, accuracy: 0.91 }
  ];

  // Topic modeling results
  const conversationTopics = [
    { topic: 'Travel & Adventure', prevalence: 18.5, sentiment: 0.82, messages: 8420 },
    { topic: 'Food & Dining', prevalence: 15.2, sentiment: 0.78, messages: 6890 },
    { topic: 'Movies & Entertainment', prevalence: 12.8, sentiment: 0.75, messages: 5820 },
    { topic: 'Sports & Fitness', prevalence: 11.4, sentiment: 0.71, messages: 5180 },
    { topic: 'Career & Work', prevalence: 10.9, sentiment: 0.65, messages: 4950 },
    { topic: 'Family & Friends', prevalence: 9.7, sentiment: 0.84, messages: 4410 },
    { topic: 'Hobbies & Interests', prevalence: 8.3, sentiment: 0.79, messages: 3770 },
    { topic: 'Technology', prevalence: 7.1, sentiment: 0.68, messages: 3220 },
    { topic: 'Music & Arts', prevalence: 6.1, sentiment: 0.81, messages: 2770 }
  ];

  // NLP Performance Metrics
  const nlpMetrics = [
    {
      metric: 'Processing Speed',
      value: '15.2K msg/min',
      change: '+12.3%',
      trend: 'up',
      description: 'Messages processed per minute'
    },
    {
      metric: 'Overall Accuracy',
      value: '94.7%',
      change: '+2.1%',
      trend: 'up',
      description: 'Average accuracy across all NLP tasks'
    },
    {
      metric: 'Language Coverage',
      value: '95 languages',
      change: '+5 languages',
      trend: 'up',
      description: 'Supported languages for processing'
    },
    {
      metric: 'Response Time',
      value: '45ms',
      change: '-8ms',
      trend: 'up',
      description: 'Average processing latency'
    }
  ];

  // Toxicity detection results
  const toxicityAnalysis = [
    { category: 'Safe Content', count: 42350, percentage: 94.2, color: '#10b981' },
    { category: 'Mild Concern', count: 1890, percentage: 4.2, color: '#f59e0b' },
    { category: 'Moderate Risk', count: 520, percentage: 1.2, color: '#ef4444' },
    { category: 'High Risk', count: 180, percentage: 0.4, color: '#dc2626' }
  ];

  // Advanced NLP features
  const advancedFeatures = [
    {
      feature: 'Emotion Recognition',
      description: 'Detect specific emotions beyond basic sentiment',
      accuracy: 89.3,
      status: 'active'
    },
    {
      feature: 'Sarcasm Detection',
      description: 'Identify sarcastic or ironic language patterns',
      accuracy: 82.7,
      status: 'beta'
    },
    {
      feature: 'Personality Insights',
      description: 'Analyze personality traits from communication style',
      accuracy: 86.1,
      status: 'active'
    },
    {
      feature: 'Cultural Context',
      description: 'Understand cultural nuances in communication',
      accuracy: 78.4,
      status: 'experimental'
    },
    {
      feature: 'Conversation Flow',
      description: 'Analyze conversation dynamics and engagement',
      accuracy: 91.2,
      status: 'active'
    }
  ];

  useEffect(() => {
    let interval;
    if (isProcessing) {
      interval = setInterval(() => {
        setSentimentScore(prev => Math.max(0.1, Math.min(0.9, prev + (Math.random() - 0.5) * 0.05)));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'beta': return 'text-blue-600 bg-blue-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSentimentIcon = (sentiment) => {
    if (sentiment > 0.7) return <Smile className="w-4 h-4 text-green-600" />;
    if (sentiment > 0.3) return <Meh className="w-4 h-4 text-yellow-600" />;
    return <Frown className="w-4 h-4 text-red-600" />;
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment > 0.7) return 'text-green-600';
    if (sentiment > 0.3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-green-600" />
              Natural Language Processing Hub
            </h1>
            <p className="text-gray-600">
              Advanced NLP analysis for sentiment, intent, entities, and conversation intelligence
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isProcessing ? 'Processing' : 'Idle'}
              </span>
            </div>
            
            <button
              onClick={() => setIsProcessing(!isProcessing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isProcessing 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isProcessing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isProcessing ? 'Stop Processing' : 'Start Processing'}
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="all">All Languages</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NLP Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {nlpMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {metric.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* NLP Modules */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">NLP Modules</h3>
            <div className="space-y-3">
              {nlpModules.slice(0, 4).map((module) => (
                <div key={module.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{module.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                      {module.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{module.description}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-green-600">{module.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Languages:</span>
                      <div className="font-semibold text-blue-600">{module.languages}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Distribution */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Language Distribution</h3>
            <div className="space-y-3">
              {languageDistribution.slice(0, 5).map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">{lang.language}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{lang.percentage}%</div>
                    <div className="text-xs text-gray-500">{lang.count.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Sentiment */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Live Sentiment</h3>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {(sentimentScore * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Overall Positivity</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Positive</span>
                </div>
                <span className="text-sm font-semibold text-green-600">74%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Meh className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-gray-700">Neutral</span>
                </div>
                <span className="text-sm font-semibold text-yellow-600">21%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Frown className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-gray-700">Negative</span>
                </div>
                <span className="text-sm font-semibold text-red-600">5%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
                Retrain Models
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Configure NLP
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Languages className="w-4 h-4" />
                Add Language
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Sentiment Analysis Trends */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Analysis Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={sentimentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="positive" stackId="1" stroke="#10b981" fill="#10b981" />
                <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" />
                <Area type="monotone" dataKey="negative" stackId="1" stroke="#ef4444" fill="#ef4444" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Intent Recognition & Entity Extraction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Intent Recognition</h3>
              <div className="space-y-3">
                {intentCategories.slice(0, 6).map((intent, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{intent.intent}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 text-sm font-medium">{intent.trend}</span>
                          <span className="text-sm text-gray-600">{intent.count.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${intent.confidence * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Confidence: {(intent.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Entity Extraction</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={extractedEntities}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversation Topics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversation Topic Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversationTopics.map((topic, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{topic.topic}</h4>
                    {getSentimentIcon(topic.sentiment)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Prevalence:</span>
                      <span className="font-semibold text-blue-600">{topic.prevalence}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Sentiment:</span>
                      <span className={`font-semibold ${getSentimentColor(topic.sentiment)}`}>
                        {(topic.sentiment * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Messages:</span>
                      <span className="font-semibold text-gray-900">{topic.messages.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Toxicity Analysis & Advanced Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Safety Analysis</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={toxicityAnalysis}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                  >
                    {toxicityAnalysis.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced NLP Features</h3>
              <div className="space-y-3">
                {advancedFeatures.map((feature, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{feature.feature}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                        {feature.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{feature.description}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Accuracy:</span>
                      <span className="font-semibold text-green-600">{feature.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced NLP Configuration */}
          {showAdvancedNLP && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced NLP Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sentiment Threshold</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="1"
                    defaultValue="0.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Threshold</label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.5"
                    max="1"
                    defaultValue="0.8"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Mode</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="real_time">Real-time</option>
                    <option value="batch">Batch Processing</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language Model</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="transformer">Transformer</option>
                    <option value="bert">BERT</option>
                    <option value="gpt">GPT</option>
                    <option value="custom">Custom Model</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Tokens</label>
                  <input
                    type="number"
                    min="100"
                    max="2048"
                    defaultValue="512"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                  <input
                    type="number"
                    min="1"
                    max="128"
                    defaultValue="32"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Apply Settings
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NaturalLanguageProcessingHub;

