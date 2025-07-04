import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Heart, Smile, Frown, Meh, TrendingUp, TrendingDown,
  MessageCircle, Activity, Eye, Filter, Search, Download,
  Play, Pause, RefreshCw, Settings, Share2, AlertTriangle,
  CheckCircle, XCircle, Info, Star, Award, Users,
  Clock, Calendar, Globe, BookOpen, Zap, Target
} from 'lucide-react';

const SentimentAnalysisDashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [sentimentFilter, setSentimentFilter] = useState('all');
  const [showAdvancedAnalysis, setShowAdvancedAnalysis] = useState(false);
  const [overallSentiment, setOverallSentiment] = useState(0.74);

  // Sentiment metrics
  const sentimentMetrics = [
    {
      metric: 'Overall Sentiment',
      value: '74.2%',
      change: '+3.1%',
      trend: 'up',
      description: 'Average positive sentiment across all conversations'
    },
    {
      metric: 'Messages Analyzed',
      value: '45.2K',
      change: '+12.8%',
      trend: 'up',
      description: 'Total messages processed today'
    },
    {
      metric: 'Sentiment Accuracy',
      value: '96.7%',
      change: '+1.4%',
      trend: 'up',
      description: 'Accuracy of sentiment classification'
    },
    {
      metric: 'Response Time',
      value: '23ms',
      change: '-5ms',
      trend: 'up',
      description: 'Average sentiment analysis latency'
    }
  ];

  // Real-time sentiment trends
  const sentimentTrends = [
    { time: '00:00', positive: 72, neutral: 23, negative: 5, compound: 0.71 },
    { time: '04:00', positive: 68, neutral: 26, negative: 6, compound: 0.68 },
    { time: '08:00', positive: 75, neutral: 20, negative: 5, compound: 0.74 },
    { time: '12:00', positive: 78, neutral: 18, negative: 4, compound: 0.79 },
    { time: '16:00', positive: 76, neutral: 19, negative: 5, compound: 0.76 },
    { time: '20:00', positive: 81, neutral: 15, negative: 4, compound: 0.82 },
    { time: '23:00', positive: 74, neutral: 21, negative: 5, compound: 0.74 }
  ];

  // Sentiment distribution
  const sentimentDistribution = [
    { sentiment: 'Very Positive', count: 18420, percentage: 40.7, color: '#10b981', score: '0.8-1.0' },
    { sentiment: 'Positive', count: 15230, percentage: 33.7, color: '#34d399', score: '0.3-0.8' },
    { sentiment: 'Neutral', count: 8940, percentage: 19.8, color: '#6b7280', score: '-0.3-0.3' },
    { sentiment: 'Negative', count: 2180, percentage: 4.8, color: '#f87171', score: '-0.8--0.3' },
    { sentiment: 'Very Negative', count: 450, percentage: 1.0, color: '#ef4444', score: '-1.0--0.8' }
  ];

  // Emotion categories
  const emotionCategories = [
    { emotion: 'Joy', count: 12450, intensity: 0.82, trend: '+5.2%', color: '#fbbf24' },
    { emotion: 'Love', count: 8920, intensity: 0.89, trend: '+8.1%', color: '#f472b6' },
    { emotion: 'Excitement', count: 6780, intensity: 0.76, trend: '+3.7%', color: '#a78bfa' },
    { emotion: 'Gratitude', count: 4560, intensity: 0.91, trend: '+6.8%', color: '#34d399' },
    { emotion: 'Hope', count: 3240, intensity: 0.73, trend: '+2.4%', color: '#60a5fa' },
    { emotion: 'Surprise', count: 2890, intensity: 0.68, trend: '+4.3%', color: '#fb7185' },
    { emotion: 'Sadness', count: 1890, intensity: 0.71, trend: '-2.1%', color: '#94a3b8' },
    { emotion: 'Anger', count: 890, intensity: 0.84, trend: '-5.3%', color: '#ef4444' },
    { emotion: 'Fear', count: 450, intensity: 0.79, trend: '-3.7%', color: '#6b7280' }
  ];

  // Conversation sentiment analysis
  const conversationSentiments = [
    {
      type: 'First Messages',
      positive: 68,
      neutral: 28,
      negative: 4,
      avgScore: 0.72,
      count: 8420
    },
    {
      type: 'Getting to Know',
      positive: 82,
      neutral: 16,
      negative: 2,
      avgScore: 0.85,
      count: 12340
    },
    {
      type: 'Planning Dates',
      positive: 89,
      neutral: 9,
      negative: 2,
      avgScore: 0.91,
      count: 6780
    },
    {
      type: 'Relationship Talk',
      positive: 76,
      neutral: 20,
      negative: 4,
      avgScore: 0.78,
      count: 4560
    },
    {
      type: 'Conflict Resolution',
      positive: 45,
      neutral: 35,
      negative: 20,
      avgScore: 0.32,
      count: 1890
    }
  ];

  // Sentiment by demographics
  const demographicSentiment = [
    { demographic: '18-24', positive: 78, neutral: 18, negative: 4, avgScore: 0.79 },
    { demographic: '25-34', positive: 74, neutral: 21, negative: 5, avgScore: 0.74 },
    { demographic: '35-44', positive: 71, neutral: 24, negative: 5, avgScore: 0.71 },
    { demographic: '45-54', positive: 69, neutral: 26, negative: 5, avgScore: 0.69 },
    { demographic: '55+', positive: 67, neutral: 28, negative: 5, avgScore: 0.67 }
  ];

  // Sentiment triggers and patterns
  const sentimentTriggers = [
    {
      trigger: 'Compliments Received',
      impact: '+0.23',
      frequency: 'High',
      description: 'Receiving genuine compliments significantly boosts sentiment'
    },
    {
      trigger: 'Shared Interests',
      impact: '+0.18',
      frequency: 'High',
      description: 'Discovering common hobbies and interests'
    },
    {
      trigger: 'Future Plans Discussion',
      impact: '+0.21',
      frequency: 'Medium',
      description: 'Talking about future dates or activities together'
    },
    {
      trigger: 'Personal Stories',
      impact: '+0.16',
      frequency: 'Medium',
      description: 'Sharing meaningful personal experiences'
    },
    {
      trigger: 'Delayed Responses',
      impact: '-0.12',
      frequency: 'High',
      description: 'Long delays in message responses'
    },
    {
      trigger: 'Misunderstandings',
      impact: '-0.19',
      frequency: 'Low',
      description: 'Communication misunderstandings or conflicts'
    }
  ];

  // Language sentiment analysis
  const languageSentiment = [
    { language: 'English', positive: 74.2, neutral: 21.3, negative: 4.5, messages: 32450 },
    { language: 'Spanish', positive: 78.9, neutral: 18.1, negative: 3.0, messages: 8920 },
    { language: 'French', positive: 76.4, neutral: 19.8, negative: 3.8, messages: 4560 },
    { language: 'German', positive: 71.8, neutral: 23.7, negative: 4.5, messages: 2340 },
    { language: 'Italian', positive: 79.3, neutral: 17.2, negative: 3.5, messages: 1890 }
  ];

  // Sentiment prediction accuracy
  const predictionAccuracy = [
    { model: 'BERT Sentiment', accuracy: 96.7, precision: 94.8, recall: 97.2, f1Score: 96.0 },
    { model: 'RoBERTa Emotion', accuracy: 94.3, precision: 92.1, recall: 95.8, f1Score: 93.9 },
    { model: 'Custom Relationship', accuracy: 97.1, precision: 95.6, recall: 98.2, f1Score: 96.9 },
    { model: 'Ensemble Model', accuracy: 98.2, precision: 97.4, recall: 98.9, f1Score: 98.1 }
  ];

  // Real-time sentiment alerts
  const sentimentAlerts = [
    {
      type: 'Positive Spike',
      message: 'Unusual positive sentiment increase detected',
      severity: 'info',
      time: '2 minutes ago',
      value: '+15.3%'
    },
    {
      type: 'Negative Pattern',
      message: 'Recurring negative sentiment in specific user group',
      severity: 'warning',
      time: '8 minutes ago',
      value: '-8.7%'
    },
    {
      type: 'Model Drift',
      message: 'Sentiment model accuracy below threshold',
      severity: 'error',
      time: '15 minutes ago',
      value: '94.2%'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setOverallSentiment(prev => Math.max(0.5, Math.min(0.9, prev + (Math.random() - 0.5) * 0.03)));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const getSentimentIcon = (sentiment) => {
    if (sentiment > 0.7) return <Smile className="w-5 h-5 text-green-600" />;
    if (sentiment > 0.3) return <Meh className="w-5 h-5 text-yellow-600" />;
    return <Frown className="w-5 h-5 text-red-600" />;
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment > 0.7) return 'text-green-600';
    if (sentiment > 0.3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAlertColor = (severity) => {
    switch (severity) {
      case 'info': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'warning': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'error': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getAlertIcon = (severity) => {
    switch (severity) {
      case 'info': return <Info className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'error': return <XCircle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-600" />
              Sentiment Analysis Dashboard
            </h1>
            <p className="text-gray-600">
              Real-time sentiment monitoring, emotion detection, and conversation mood analysis
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-pink-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isAnalyzing ? 'Analyzing' : 'Idle'}
              </span>
            </div>
            
            <button
              onClick={() => setIsAnalyzing(!isAnalyzing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isAnalyzing 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              {isAnalyzing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAnalyzing ? 'Stop Analysis' : 'Start Analysis'}
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              
              <select
                value={sentimentFilter}
                onChange={(e) => setSentimentFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive Only</option>
                <option value="negative">Negative Only</option>
                <option value="neutral">Neutral Only</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sentimentMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600" />
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
          {/* Live Sentiment */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Live Sentiment</h3>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-2">
                {getSentimentIcon(overallSentiment)}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {(overallSentiment * 100).toFixed(1)}%
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

          {/* Sentiment Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Sentiment Alerts</h3>
            <div className="space-y-3">
              {sentimentAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getAlertColor(alert.severity)}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {getAlertIcon(alert.severity)}
                    <span className="font-medium text-sm">{alert.type}</span>
                  </div>
                  <div className="text-xs mb-2">{alert.message}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span>{alert.time}</span>
                    <span className="font-semibold">{alert.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Emotions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Top Emotions</h3>
            <div className="space-y-3">
              {emotionCategories.slice(0, 5).map((emotion, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: emotion.color }}
                    />
                    <span className="text-sm font-medium text-gray-900">{emotion.emotion}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{emotion.count.toLocaleString()}</div>
                    <div className="text-xs text-green-600">{emotion.trend}</div>
                  </div>
                </div>
              ))}
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
                <Target className="w-4 h-4" />
                Calibrate Thresholds
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Analysis Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Sentiment Trends */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Sentiment Trends</h3>
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

          {/* Sentiment Distribution & Emotion Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={sentimentDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ sentiment, percentage }) => `${sentiment}: ${percentage}%`}
                  >
                    {sentimentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emotion Intensity Analysis</h3>
              <div className="space-y-3">
                {emotionCategories.slice(0, 6).map((emotion, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{emotion.emotion}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{emotion.count.toLocaleString()}</span>
                          <span className="text-xs text-green-600">{emotion.trend}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${emotion.intensity * 100}%`,
                            backgroundColor: emotion.color
                          }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Intensity: {(emotion.intensity * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversation Sentiment Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment by Conversation Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversationSentiments.map((conv, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{conv.type}</h4>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${getSentimentColor(conv.avgScore)}`}>
                        {(conv.avgScore * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-500">{conv.count.toLocaleString()} msgs</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600">Positive:</span>
                      <span className="font-semibold">{conv.positive}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-yellow-600">Neutral:</span>
                      <span className="font-semibold">{conv.neutral}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-red-600">Negative:</span>
                      <span className="font-semibold">{conv.negative}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentiment Triggers & Demographics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Triggers</h3>
              <div className="space-y-3">
                {sentimentTriggers.map((trigger, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{trigger.trigger}</span>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${
                          trigger.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trigger.impact}
                        </span>
                        <span className="text-xs text-gray-500">{trigger.frequency}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{trigger.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment by Demographics</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={demographicSentiment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="demographic" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" fill="#10b981" name="Positive" />
                  <Bar dataKey="neutral" fill="#6b7280" name="Neutral" />
                  <Bar dataKey="negative" fill="#ef4444" name="Negative" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Language Sentiment & Model Accuracy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment by Language</h3>
              <div className="space-y-3">
                {languageSentiment.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{lang.language}</span>
                        <span className="text-sm text-gray-600">{lang.messages.toLocaleString()} msgs</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="text-center">
                          <div className="text-green-600 font-semibold">{lang.positive.toFixed(1)}%</div>
                          <div className="text-xs text-gray-500">Positive</div>
                        </div>
                        <div className="text-center">
                          <div className="text-yellow-600 font-semibold">{lang.neutral.toFixed(1)}%</div>
                          <div className="text-xs text-gray-500">Neutral</div>
                        </div>
                        <div className="text-center">
                          <div className="text-red-600 font-semibold">{lang.negative.toFixed(1)}%</div>
                          <div className="text-xs text-gray-500">Negative</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance</h3>
              <div className="space-y-3">
                {predictionAccuracy.map((model, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{model.model}</span>
                      <span className="text-green-600 font-semibold">{model.accuracy}%</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Precision:</span>
                        <div className="font-semibold text-blue-600">{model.precision}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Recall:</span>
                        <div className="font-semibold text-purple-600">{model.recall}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">F1 Score:</span>
                        <div className="font-semibold text-green-600">{model.f1Score}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Analysis Configuration */}
          {showAdvancedAnalysis && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Sentiment Analysis Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sentiment Model</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="bert">BERT</option>
                    <option value="roberta">RoBERTa</option>
                    <option value="custom">Custom Model</option>
                    <option value="ensemble">Ensemble</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Threshold</label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.5"
                    max="1"
                    defaultValue="0.8"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Analysis Granularity</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="message">Per Message</option>
                    <option value="conversation">Per Conversation</option>
                    <option value="user">Per User</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emotion Detection</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                    <option value="advanced">Advanced Mode</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Real-time Processing</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="enabled">Enabled</option>
                    <option value="batch">Batch Only</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language Support</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option value="multilingual">Multilingual</option>
                    <option value="english">English Only</option>
                    <option value="custom">Custom Languages</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                  Apply Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Test Models
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisDashboard;

