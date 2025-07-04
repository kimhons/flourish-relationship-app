import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Brain, Activity, Users, Target, TrendingUp, TrendingDown,
  Zap, Eye, Clock, Heart, MessageCircle, Star,
  Play, Pause, RefreshCw, Settings, Download, Share2,
  AlertTriangle, CheckCircle, XCircle, Info, Award,
  User, Calendar, MapPin, Coffee, Gamepad2, Book
} from 'lucide-react';

const BehavioralAIPredictionSystem = () => {
  const [isPredicting, setIsPredicting] = useState(true);
  const [selectedBehavior, setSelectedBehavior] = useState('engagement');
  const [predictionHorizon, setPredictionHorizon] = useState('7d');
  const [showAdvancedModels, setShowAdvancedModels] = useState(false);
  const [predictionAccuracy, setPredictionAccuracy] = useState(92.8);

  // Behavioral prediction models
  const behaviorModels = [
    {
      id: 'engagement',
      name: 'Engagement Prediction',
      description: 'Predict user engagement levels and activity patterns',
      accuracy: 92.8,
      confidence: 0.94,
      status: 'active',
      predictions: 15420
    },
    {
      id: 'churn_risk',
      name: 'Churn Risk Assessment',
      description: 'Identify users at risk of leaving the platform',
      accuracy: 89.5,
      confidence: 0.91,
      status: 'active',
      predictions: 8930
    },
    {
      id: 'match_behavior',
      name: 'Matching Behavior',
      description: 'Predict user preferences and matching patterns',
      accuracy: 94.2,
      confidence: 0.96,
      status: 'active',
      predictions: 23450
    },
    {
      id: 'communication_style',
      name: 'Communication Patterns',
      description: 'Analyze and predict communication behaviors',
      accuracy: 87.6,
      confidence: 0.89,
      status: 'active',
      predictions: 12680
    },
    {
      id: 'premium_conversion',
      name: 'Premium Conversion',
      description: 'Predict likelihood of premium subscription',
      accuracy: 91.3,
      confidence: 0.93,
      status: 'active',
      predictions: 6740
    }
  ];

  // Behavioral metrics
  const behaviorMetrics = [
    {
      metric: 'Prediction Accuracy',
      value: '92.8%',
      change: '+2.4%',
      trend: 'up',
      description: 'Overall behavioral prediction accuracy'
    },
    {
      metric: 'Model Confidence',
      value: '94.1%',
      change: '+1.7%',
      trend: 'up',
      description: 'Average confidence in predictions'
    },
    {
      metric: 'Predictions/Hour',
      value: '12.4K',
      change: '+8.3%',
      trend: 'up',
      description: 'Real-time prediction throughput'
    },
    {
      metric: 'Response Time',
      value: '85ms',
      change: '-12ms',
      trend: 'up',
      description: 'Average prediction latency'
    }
  ];

  // Engagement prediction data
  const engagementPredictions = [
    { day: 'Mon', predicted: 78, actual: 76, confidence: 0.94 },
    { day: 'Tue', predicted: 82, actual: 84, confidence: 0.91 },
    { day: 'Wed', predicted: 75, actual: 73, confidence: 0.96 },
    { day: 'Thu', predicted: 88, actual: 89, confidence: 0.93 },
    { day: 'Fri', predicted: 92, actual: 94, confidence: 0.89 },
    { day: 'Sat', predicted: 95, actual: 93, confidence: 0.92 },
    { day: 'Sun', predicted: 89, actual: 87, confidence: 0.95 }
  ];

  // User behavior patterns
  const behaviorPatterns = [
    { pattern: 'Early Bird (6-9 AM)', users: 2340, engagement: 85, retention: 92 },
    { pattern: 'Lunch Break (12-2 PM)', users: 4890, engagement: 78, retention: 87 },
    { pattern: 'Evening Active (6-9 PM)', users: 8920, engagement: 92, retention: 94 },
    { pattern: 'Night Owl (9 PM-12 AM)', users: 3450, engagement: 88, retention: 89 },
    { pattern: 'Weekend Warrior', users: 2180, engagement: 95, retention: 96 },
    { pattern: 'Casual Browser', users: 5670, engagement: 65, retention: 78 }
  ];

  // Churn risk analysis
  const churnRiskFactors = [
    { factor: 'Days Since Last Login', weight: 0.28, impact: 'high' },
    { factor: 'Message Response Rate', weight: 0.22, impact: 'high' },
    { factor: 'Profile Views', weight: 0.18, impact: 'medium' },
    { factor: 'Match Acceptance Rate', weight: 0.15, impact: 'medium' },
    { factor: 'Session Duration', weight: 0.12, impact: 'medium' },
    { factor: 'Feature Usage', weight: 0.05, impact: 'low' }
  ];

  // Communication behavior predictions
  const communicationBehaviors = [
    { behavior: 'Quick Responder', percentage: 32.4, successRate: 89, avgResponseTime: '2.3 hours' },
    { behavior: 'Thoughtful Communicator', percentage: 28.7, successRate: 92, avgResponseTime: '8.1 hours' },
    { behavior: 'Casual Chatter', percentage: 19.3, successRate: 76, avgResponseTime: '4.7 hours' },
    { behavior: 'Selective Communicator', percentage: 12.8, successRate: 94, avgResponseTime: '12.4 hours' },
    { behavior: 'Sporadic Responder', percentage: 6.8, successRate: 68, avgResponseTime: '24.2 hours' }
  ];

  // Behavioral insights
  const behavioralInsights = [
    {
      insight: 'High Engagement Probability',
      description: 'Users with complete profiles and daily activity',
      probability: 0.89,
      userCount: 3240,
      recommendation: 'Encourage continued engagement with personalized content'
    },
    {
      insight: 'Churn Risk Alert',
      description: 'Users showing decreased activity patterns',
      probability: 0.76,
      userCount: 890,
      recommendation: 'Implement re-engagement campaign immediately'
    },
    {
      insight: 'Premium Conversion Potential',
      description: 'Active users exploring premium features',
      probability: 0.82,
      userCount: 1560,
      recommendation: 'Offer targeted premium trial with personalized benefits'
    },
    {
      insight: 'Communication Style Match',
      description: 'Users with compatible communication patterns',
      probability: 0.94,
      userCount: 2180,
      recommendation: 'Prioritize these matches for higher success rates'
    }
  ];

  // Activity prediction timeline
  const activityTimeline = [
    { hour: '00:00', predicted: 245, actual: 238, users: 1200 },
    { hour: '06:00', predicted: 890, actual: 912, users: 3400 },
    { hour: '12:00', predicted: 1560, actual: 1523, users: 5600 },
    { hour: '18:00', predicted: 2340, actual: 2398, users: 8900 },
    { hour: '21:00', predicted: 1890, actual: 1856, users: 6700 },
    { hour: '23:00', predicted: 780, actual: 801, users: 2800 }
  ];

  // Behavioral segments
  const behavioralSegments = [
    { segment: 'Highly Engaged', count: 4890, characteristics: ['Daily active', 'High response rate', 'Premium features'] },
    { segment: 'Moderately Active', count: 8920, characteristics: ['Regular usage', 'Selective matching', 'Standard features'] },
    { segment: 'Casual Users', count: 3450, characteristics: ['Weekly activity', 'Browse-focused', 'Basic features'] },
    { segment: 'At-Risk Users', count: 1240, characteristics: ['Declining activity', 'Low engagement', 'Minimal usage'] },
    { segment: 'New Users', count: 2180, characteristics: ['Learning platform', 'Exploring features', 'High potential'] }
  ];

  useEffect(() => {
    let interval;
    if (isPredicting) {
      interval = setInterval(() => {
        setPredictionAccuracy(prev => Math.max(85, Math.min(98, prev + (Math.random() - 0.5) * 0.8)));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPredicting]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'training': return 'text-blue-600 bg-blue-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProbabilityColor = (probability) => {
    if (probability >= 0.8) return 'text-green-600';
    if (probability >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-indigo-600" />
              Behavioral AI Prediction System
            </h1>
            <p className="text-gray-600">
              Advanced behavioral analysis and prediction for user engagement, churn risk, and relationship success
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isPredicting ? 'bg-indigo-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isPredicting ? 'Predicting' : 'Idle'}
              </span>
            </div>
            
            <button
              onClick={() => setIsPredicting(!isPredicting)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isPredicting 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isPredicting ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPredicting ? 'Stop Predictions' : 'Start Predictions'}
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={predictionHorizon}
                onChange={(e) => setPredictionHorizon(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="1d">Next 24 Hours</option>
                <option value="7d">Next 7 Days</option>
                <option value="30d">Next 30 Days</option>
                <option value="90d">Next 90 Days</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Behavior Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {behaviorMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Brain className="w-6 h-6 text-indigo-600" />
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
          {/* Behavior Models */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Prediction Models</h3>
            <div className="space-y-3">
              {behaviorModels.slice(0, 4).map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedBehavior(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedBehavior === model.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{model.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                      {model.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{model.description}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-green-600">{model.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Confidence:</span>
                      <div className="font-semibold text-blue-600">{(model.confidence * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Live Predictions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Live Predictions</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">
                  {predictionAccuracy.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Current Accuracy</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Predictions/min:</span>
                  <span className="font-semibold text-gray-900">207</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Queue:</span>
                  <span className="font-semibold text-gray-900">34</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Avg Confidence:</span>
                  <span className="font-semibold text-gray-900">94.1%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Behavioral Segments */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">User Segments</h3>
            <div className="space-y-3">
              {behavioralSegments.slice(0, 4).map((segment, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{segment.segment}</span>
                    <span className="text-sm text-gray-600">{segment.count.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {segment.characteristics.slice(0, 2).join(', ')}
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
                Run Predictions
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Model Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Engagement Predictions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Prediction vs Actual</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementPredictions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} name="Predicted" />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual" />
                <Line type="monotone" dataKey="confidence" stroke="#f59e0b" strokeWidth={2} name="Confidence" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Behavior Patterns & Churn Risk */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Behavior Patterns</h3>
              <div className="space-y-3">
                {behaviorPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{pattern.pattern}</span>
                        <span className="text-sm text-gray-600">{pattern.users.toLocaleString()} users</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Engagement:</span>
                          <span className="font-semibold text-blue-600">{pattern.engagement}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Retention:</span>
                          <span className="font-semibold text-green-600">{pattern.retention}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Churn Risk Factors</h3>
              <div className="space-y-3">
                {churnRiskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{factor.factor}</span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(factor.impact)}`}>
                            {factor.impact}
                          </span>
                          <span className="text-sm text-gray-600">{(factor.weight * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${factor.weight * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Communication Behaviors */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Behavior Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {communicationBehaviors.map((behavior, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{behavior.behavior}</h4>
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Prevalence:</span>
                      <span className="font-semibold text-blue-600">{behavior.percentage}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="font-semibold text-green-600">{behavior.successRate}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Avg Response:</span>
                      <span className="font-semibold text-gray-900">{behavior.avgResponseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">24-Hour Activity Prediction</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={activityTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="predicted" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="Predicted Activity" />
                <Area type="monotone" dataKey="actual" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Actual Activity" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Behavioral Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Generated Behavioral Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {behavioralInsights.map((insight, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{insight.insight}</h4>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${getProbabilityColor(insight.probability)}`}>
                        {(insight.probability * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs text-gray-500">probability</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Affected Users:</span>
                    <span className="font-medium text-gray-900">{insight.userCount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${insight.probability * 100}%` }}
                    />
                  </div>
                  <div className="text-sm font-medium text-indigo-600">
                    💡 {insight.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Model Configuration */}
          {showAdvancedModels && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Model Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prediction Window</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="1h">1 Hour</option>
                    <option value="24h">24 Hours</option>
                    <option value="7d">7 Days</option>
                    <option value="30d">30 Days</option>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="lstm">LSTM</option>
                    <option value="transformer">Transformer</option>
                    <option value="ensemble">Ensemble</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feature Selection</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="auto">Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="importance">By Importance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Update Frequency</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="real_time">Real-time</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Training Data Size</label>
                  <input
                    type="number"
                    min="1000"
                    max="1000000"
                    defaultValue="50000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Auto-Optimize
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BehavioralAIPredictionSystem;

