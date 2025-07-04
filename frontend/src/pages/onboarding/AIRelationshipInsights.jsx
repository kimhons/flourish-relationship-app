import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Brain, Heart, Users, MessageCircle, Star, Target, 
  TrendingUp, TrendingDown, Activity, Zap, Eye, 
  Award, Clock, Calendar, MapPin, Camera, Gift,
  Lightbulb, AlertTriangle, CheckCircle, Info,
  Settings, Download, Share2, RefreshCw, Filter
} from 'lucide-react';

const AIRelationshipInsights = () => {
  const [selectedInsightType, setSelectedInsightType] = useState('compatibility');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [showPredictions, setShowPredictions] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // AI Insight Categories
  const insightCategories = [
    {
      id: 'compatibility',
      name: 'Compatibility Analysis',
      description: 'AI-powered compatibility scoring and matching insights',
      icon: Heart,
      color: '#ec4899'
    },
    {
      id: 'behavior_patterns',
      name: 'Behavior Patterns',
      description: 'User behavior analysis and pattern recognition',
      icon: Activity,
      color: '#8b5cf6'
    },
    {
      id: 'conversation_analysis',
      name: 'Conversation Analysis',
      description: 'Communication style and conversation quality insights',
      icon: MessageCircle,
      color: '#06b6d4'
    },
    {
      id: 'success_prediction',
      name: 'Success Prediction',
      description: 'Relationship success probability and recommendations',
      icon: Target,
      color: '#10b981'
    },
    {
      id: 'personalization',
      name: 'Personalization Engine',
      description: 'AI-driven personalized recommendations and insights',
      icon: Brain,
      color: '#f59e0b'
    }
  ];

  // Compatibility Analysis Data
  const compatibilityFactors = [
    { factor: 'Shared Interests', weight: 25, score: 88, impact: 'high' },
    { factor: 'Communication Style', weight: 20, score: 76, impact: 'high' },
    { factor: 'Lifestyle Compatibility', weight: 18, score: 82, impact: 'medium' },
    { factor: 'Values Alignment', weight: 15, score: 91, impact: 'high' },
    { factor: 'Personality Match', weight: 12, score: 74, impact: 'medium' },
    { factor: 'Geographic Proximity', weight: 10, score: 65, impact: 'low' }
  ];

  const behaviorPatterns = [
    { pattern: 'Early Morning Active', percentage: 15, successRate: 72, description: 'Most active 6-9 AM' },
    { pattern: 'Lunch Break Socializer', percentage: 22, successRate: 68, description: 'Peak activity 12-2 PM' },
    { pattern: 'Evening Communicator', percentage: 35, successRate: 78, description: 'Most active 6-10 PM' },
    { pattern: 'Night Owl', percentage: 18, successRate: 65, description: 'Active after 10 PM' },
    { pattern: 'Weekend Warrior', percentage: 10, successRate: 82, description: 'Weekend-focused activity' }
  ];

  const conversationInsights = [
    { metric: 'Response Time', avgValue: '2.3 hours', aiRecommendation: 'Respond within 4 hours for optimal engagement' },
    { metric: 'Message Length', avgValue: '47 words', aiRecommendation: 'Aim for 30-60 words per message' },
    { metric: 'Emoji Usage', avgValue: '2.1 per message', aiRecommendation: 'Use 1-3 emojis to enhance communication' },
    { metric: 'Question Frequency', avgValue: '1.8 per conversation', aiRecommendation: 'Ask 2-3 questions to maintain engagement' },
    { metric: 'Sentiment Score', avgValue: '0.72 (positive)', aiRecommendation: 'Maintain positive tone while being authentic' }
  ];

  const successPredictions = [
    {
      userId: 'U001',
      compatibilityScore: 94,
      successProbability: 87,
      keyFactors: ['Shared interests', 'Communication style', 'Values alignment'],
      recommendation: 'High potential match - encourage deeper conversation',
      riskFactors: ['Geographic distance']
    },
    {
      userId: 'U002',
      compatibilityScore: 78,
      successProbability: 65,
      keyFactors: ['Lifestyle compatibility', 'Activity patterns'],
      recommendation: 'Moderate potential - suggest shared activities',
      riskFactors: ['Different communication styles', 'Schedule mismatch']
    },
    {
      userId: 'U003',
      compatibilityScore: 85,
      successProbability: 72,
      keyFactors: ['Personality match', 'Shared values'],
      recommendation: 'Good potential - focus on common interests',
      riskFactors: ['Limited conversation history']
    }
  ];

  const personalizedRecommendations = [
    {
      type: 'Profile Optimization',
      insight: 'Users with complete profiles have 45% higher match success',
      action: 'Add 2-3 more photos and complete interests section',
      impact: 'High',
      priority: 1
    },
    {
      type: 'Communication Strategy',
      insight: 'Your response time is 23% faster than average',
      action: 'Continue current response pattern for optimal engagement',
      impact: 'Medium',
      priority: 2
    },
    {
      type: 'Activity Timing',
      insight: 'Peak match activity occurs between 7-9 PM',
      action: 'Schedule active browsing during evening hours',
      impact: 'Medium',
      priority: 3
    },
    {
      type: 'Interest Expansion',
      insight: 'Users with 5+ interests get 30% more quality matches',
      action: 'Add interests in fitness, travel, and cooking',
      impact: 'High',
      priority: 1
    }
  ];

  const aiInsights = [
    {
      title: 'Compatibility Algorithm Performance',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      description: 'Accuracy in predicting successful matches'
    },
    {
      title: 'Conversation Quality Score',
      value: '8.7/10',
      change: '+0.3',
      trend: 'up',
      description: 'AI-assessed conversation engagement quality'
    },
    {
      title: 'Behavioral Pattern Recognition',
      value: '89.5%',
      change: '+1.8%',
      trend: 'up',
      description: 'Accuracy in identifying user behavior patterns'
    },
    {
      title: 'Personalization Effectiveness',
      value: '76.3%',
      change: '+4.2%',
      trend: 'up',
      description: 'Success rate of AI-driven recommendations'
    }
  ];

  const relationshipStageAnalysis = [
    { stage: 'Initial Interest', aiScore: 85, humanScore: 78, accuracy: 92 },
    { stage: 'First Conversation', aiScore: 79, humanScore: 82, accuracy: 88 },
    { stage: 'Continued Engagement', aiScore: 88, humanScore: 85, accuracy: 94 },
    { stage: 'Meeting Planning', aiScore: 76, humanScore: 79, accuracy: 86 },
    { stage: 'Relationship Formation', aiScore: 82, humanScore: 84, accuracy: 90 }
  ];

  const sentimentAnalysis = [
    { timeframe: 'Week 1', positive: 68, neutral: 25, negative: 7 },
    { timeframe: 'Week 2', positive: 72, neutral: 22, negative: 6 },
    { timeframe: 'Week 3', positive: 75, neutral: 20, negative: 5 },
    { timeframe: 'Week 4', positive: 78, neutral: 18, negative: 4 }
  ];

  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      interval = setInterval(() => {
        console.log('AI analyzing relationship data...');
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    console.log('Starting AI relationship analysis...');
    
    setTimeout(() => {
      setIsAnalyzing(false);
      console.log('AI analysis completed');
    }, 5000);
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1: return 'text-red-600 bg-red-100';
      case 2: return 'text-yellow-600 bg-yellow-100';
      case 3: return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderInsightContent = () => {
    switch (selectedInsightType) {
      case 'compatibility':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatibility Factor Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={compatibilityFactors}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="factor" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Score" dataKey="score" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                  <Radar name="Weight" dataKey="weight" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatibility Factors Breakdown</h3>
              <div className="space-y-4">
                {compatibilityFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{factor.factor}</span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(factor.impact)}`}>
                            {factor.impact}
                          </span>
                          <span className="text-sm text-gray-600">{factor.score}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${factor.score}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Weight: {factor.weight}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'behavior_patterns':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Behavior Patterns</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={behaviorPatterns}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="pattern" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#8b5cf6" name="User Percentage" />
                  <Bar dataKey="successRate" fill="#10b981" name="Success Rate" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'conversation_analysis':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversation Quality Insights</h3>
              <div className="space-y-4">
                {conversationInsights.map((insight, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{insight.metric}</h4>
                      <span className="text-lg font-bold text-blue-600">{insight.avgValue}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4 inline mr-2 text-yellow-500" />
                      {insight.aiRecommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Analysis Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={sentimentAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timeframe" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="positive" stackId="1" stroke="#10b981" fill="#10b981" />
                  <Area type="monotone" dataKey="neutral" stackId="1" stroke="#6b7280" fill="#6b7280" />
                  <Area type="monotone" dataKey="negative" stackId="1" stroke="#ef4444" fill="#ef4444" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'success_prediction':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Success Predictions</h3>
              <div className="space-y-4">
                {successPredictions.map((prediction, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">User {prediction.userId}</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">{prediction.compatibilityScore}%</div>
                          <div className="text-xs text-gray-500">Compatibility</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{prediction.successProbability}%</div>
                          <div className="text-xs text-gray-500">Success Probability</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Key Success Factors:</div>
                      <div className="flex flex-wrap gap-2">
                        {prediction.keyFactors.map((factor, factorIndex) => (
                          <span key={factorIndex} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {factor}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Risk Factors:</div>
                      <div className="flex flex-wrap gap-2">
                        {prediction.riskFactors.map((risk, riskIndex) => (
                          <span key={riskIndex} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                            {risk}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm text-blue-600 font-medium">
                      💡 {prediction.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'personalization':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalized AI Recommendations</h3>
              <div className="space-y-4">
                {personalizedRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{rec.type}</h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rec.impact.toLowerCase())}`}>
                          {rec.impact} Impact
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                          Priority {rec.priority}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{rec.insight}</div>
                    <div className="text-sm font-medium text-blue-600">
                      🎯 Action: {rec.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center py-12">
              <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Select an AI Insight Category
              </h3>
              <p className="text-gray-600">
                Choose a category from the sidebar to view AI-powered relationship insights
              </p>
            </div>
          </div>
        );
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
              AI Relationship Insights
            </h1>
            <p className="text-gray-600">
              Advanced AI-powered analytics for relationship formation and success prediction
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-purple-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isAnalyzing ? 'Analyzing' : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={runAIAnalysis}
              disabled={isAnalyzing}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isAnalyzing 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isAnalyzing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
              {isAnalyzing ? 'Analyzing...' : 'Run AI Analysis'}
            </button>
            
            <button
              onClick={() => setShowPredictions(!showPredictions)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showPredictions 
                  ? 'bg-pink-100 text-pink-700 border border-pink-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Target className="w-4 h-4" />
              Predictions
            </button>
          </div>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {aiInsights.map((insight, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {insight.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {insight.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{insight.title}</p>
              <p className="text-xs text-gray-500">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Insight Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AI Insight Categories</h3>
            <div className="space-y-2">
              {insightCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedInsightType(category.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedInsightType === category.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent 
                        className="w-5 h-5" 
                        style={{ color: selectedInsightType === category.id ? category.color : '#6b7280' }}
                      />
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-600">{category.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AI Model Performance</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={relationshipStageAnalysis}>
                <XAxis dataKey="stage" hide />
                <YAxis />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Avg Accuracy</span>
                <span className="font-semibold text-gray-900">90.2%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Model Confidence</span>
                <span className="font-semibold text-gray-900">94.7%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-semibold text-gray-900">2 hours ago</span>
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
                <Download className="w-4 h-4" />
                Export Insights
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Configure AI
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {renderInsightContent()}
        </div>
      </div>
    </div>
  );
};

export default AIRelationshipInsights;

