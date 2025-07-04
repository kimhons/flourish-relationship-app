import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  TrendingUp, Target, Brain, Activity, Users, Heart, 
  MessageCircle, Clock, Star, Award, Zap, Eye,
  Play, Pause, RefreshCw, Settings, Download, Share2,
  AlertTriangle, CheckCircle, XCircle, Info, Database,
  BarChart3, LineChart as LineChartIcon, Cpu, Monitor
} from 'lucide-react';

const PredictiveModelingDashboard = () => {
  const [selectedModel, setSelectedModel] = useState('user_churn');
  const [isTraining, setIsTraining] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [showModelDetails, setShowModelDetails] = useState(true);
  const [predictionAccuracy, setPredictionAccuracy] = useState(92.4);

  // Predictive models
  const predictiveModels = [
    {
      id: 'user_churn',
      name: 'User Churn Prediction',
      description: 'Predicts likelihood of user churn within next 30 days',
      accuracy: 92.4,
      precision: 89.7,
      recall: 94.1,
      f1Score: 91.8,
      status: 'active',
      lastTrained: '2024-01-07',
      predictions: 15420
    },
    {
      id: 'match_success',
      name: 'Match Success Predictor',
      description: 'Predicts probability of successful match outcomes',
      accuracy: 88.9,
      precision: 86.3,
      recall: 91.2,
      f1Score: 88.7,
      status: 'active',
      lastTrained: '2024-01-06',
      predictions: 23890
    },
    {
      id: 'engagement_forecast',
      name: 'Engagement Forecasting',
      description: 'Forecasts user engagement levels and activity patterns',
      accuracy: 85.6,
      precision: 83.2,
      recall: 87.9,
      f1Score: 85.5,
      status: 'training',
      lastTrained: '2024-01-05',
      predictions: 18750
    },
    {
      id: 'revenue_prediction',
      name: 'Revenue Prediction',
      description: 'Predicts premium subscription conversion probability',
      accuracy: 79.3,
      precision: 76.8,
      recall: 81.7,
      f1Score: 79.2,
      status: 'active',
      lastTrained: '2024-01-04',
      predictions: 12340
    },
    {
      id: 'relationship_duration',
      name: 'Relationship Duration Model',
      description: 'Predicts expected relationship duration and stability',
      accuracy: 91.7,
      precision: 89.4,
      recall: 93.8,
      f1Score: 91.6,
      status: 'active',
      lastTrained: '2024-01-07',
      predictions: 8920
    }
  ];

  // Model performance data
  const churnPredictionData = [
    { week: 'Week 1', predicted: 125, actual: 118, accuracy: 94.4 },
    { week: 'Week 2', predicted: 142, actual: 138, accuracy: 97.2 },
    { week: 'Week 3', predicted: 156, actual: 149, accuracy: 95.5 },
    { week: 'Week 4', predicted: 134, actual: 128, accuracy: 95.5 },
    { week: 'Week 5', predicted: 167, actual: 172, accuracy: 97.1 },
    { week: 'Week 6', predicted: 189, actual: 185, accuracy: 97.9 }
  ];

  const featureImportance = [
    { feature: 'Days Since Last Login', importance: 0.24, category: 'Activity' },
    { feature: 'Message Response Rate', importance: 0.19, category: 'Engagement' },
    { feature: 'Profile Completeness', importance: 0.16, category: 'Profile' },
    { feature: 'Match Acceptance Rate', importance: 0.14, category: 'Matching' },
    { feature: 'Session Duration', importance: 0.12, category: 'Activity' },
    { feature: 'Premium Features Usage', importance: 0.09, category: 'Revenue' },
    { feature: 'Support Tickets', importance: 0.06, category: 'Support' }
  ];

  const modelComparison = [
    { model: 'Random Forest', accuracy: 92.4, precision: 89.7, recall: 94.1, f1Score: 91.8 },
    { model: 'Gradient Boosting', accuracy: 90.8, precision: 88.2, recall: 92.5, f1Score: 90.3 },
    { model: 'Neural Network', accuracy: 89.6, precision: 87.1, recall: 91.8, f1Score: 89.4 },
    { model: 'Logistic Regression', accuracy: 84.3, precision: 81.7, recall: 86.9, f1Score: 84.2 },
    { model: 'SVM', accuracy: 86.7, precision: 84.2, recall: 88.9, f1Score: 86.5 }
  ];

  const predictionDistribution = [
    { risk: 'Very Low (0-20%)', count: 8420, percentage: 42.1, color: '#10b981' },
    { risk: 'Low (20-40%)', count: 4890, percentage: 24.5, color: '#22c55e' },
    { risk: 'Medium (40-60%)', count: 3240, percentage: 16.2, color: '#eab308' },
    { risk: 'High (60-80%)', count: 2180, percentage: 10.9, color: '#f59e0b' },
    { risk: 'Very High (80-100%)', count: 1270, percentage: 6.3, color: '#ef4444' }
  ];

  const timeSeriesForecast = [
    { date: '2024-01-01', actual: 1250, predicted: 1245, confidence: 0.95 },
    { date: '2024-01-02', actual: 1380, predicted: 1375, confidence: 0.93 },
    { date: '2024-01-03', actual: 1420, predicted: 1435, confidence: 0.91 },
    { date: '2024-01-04', actual: 1580, predicted: 1565, confidence: 0.94 },
    { date: '2024-01-05', actual: 1720, predicted: 1710, confidence: 0.96 },
    { date: '2024-01-06', actual: null, predicted: 1820, confidence: 0.89 },
    { date: '2024-01-07', actual: null, predicted: 1890, confidence: 0.87 },
    { date: '2024-01-08', actual: null, predicted: 1950, confidence: 0.85 }
  ];

  const modelMetrics = [
    {
      title: 'Overall Accuracy',
      value: '92.4%',
      change: '+1.2%',
      trend: 'up',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Prediction Confidence',
      value: '94.7%',
      change: '+0.8%',
      trend: 'up',
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Model Performance',
      value: '91.8 F1',
      change: '+2.1',
      trend: 'up',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Training Speed',
      value: '2.3 min',
      change: '-0.5 min',
      trend: 'up',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const realTimePredictions = [
    {
      id: 'P001',
      type: 'High Churn Risk',
      probability: 0.87,
      confidence: 0.94,
      factors: ['7 days inactive', 'Low response rate', 'No premium features'],
      recommendation: 'Send re-engagement campaign',
      urgency: 'high'
    },
    {
      id: 'P002',
      type: 'Premium Conversion',
      probability: 0.73,
      confidence: 0.89,
      factors: ['High engagement', 'Multiple matches', 'Feature exploration'],
      recommendation: 'Offer premium trial',
      urgency: 'medium'
    },
    {
      id: 'P003',
      type: 'Match Success',
      probability: 0.91,
      confidence: 0.96,
      factors: ['High compatibility', 'Active communication', 'Shared interests'],
      recommendation: 'Facilitate meeting',
      urgency: 'low'
    }
  ];

  useEffect(() => {
    let interval;
    if (isTraining) {
      interval = setInterval(() => {
        console.log('Training predictive model...');
        setPredictionAccuracy(prev => Math.min(prev + Math.random() * 0.5, 95));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isTraining]);

  const trainModel = () => {
    setIsTraining(true);
    console.log(`Training ${selectedModel} model...`);
    
    setTimeout(() => {
      setIsTraining(false);
      console.log('Model training completed');
    }, 8000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'training': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderModelContent = () => {
    const currentModel = predictiveModels.find(m => m.id === selectedModel);
    
    return (
      <div className="space-y-6">
        {/* Model Overview */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{currentModel?.name}</h3>
              <p className="text-gray-600">{currentModel?.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{currentModel?.accuracy}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{currentModel?.f1Score}</div>
                <div className="text-sm text-gray-600">F1 Score</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">{currentModel?.precision}%</div>
              <div className="text-sm text-gray-600">Precision</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">{currentModel?.recall}%</div>
              <div className="text-sm text-gray-600">Recall</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">{currentModel?.predictions?.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Predictions</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">{currentModel?.lastTrained}</div>
              <div className="text-sm text-gray-600">Last Trained</div>
            </div>
          </div>
        </div>

        {/* Prediction vs Actual */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prediction vs Actual Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={churnPredictionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} name="Predicted" />
              <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Feature Importance */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Importance Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureImportance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="feature" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="importance" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
              Predictive Modeling Dashboard
            </h1>
            <p className="text-gray-600">
              Advanced machine learning models for predictive analytics and forecasting
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isTraining ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isTraining ? 'Training' : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={trainModel}
              disabled={isTraining}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isTraining 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isTraining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isTraining ? 'Training...' : 'Train Model'}
            </button>
            
            <div className="flex items-center gap-2">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Model Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {modelMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${metric.color}`} />
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
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Model Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Predictive Models</h3>
            <div className="space-y-2">
              {predictiveModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedModel === model.id
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
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className="font-semibold text-green-600">{model.accuracy}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Model Comparison */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Algorithm Comparison</h3>
            <div className="space-y-3">
              {modelComparison.map((model, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">{model.model}</div>
                  <div className="text-sm text-gray-600">
                    Accuracy: {model.accuracy}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div 
                      className="bg-indigo-500 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${model.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Predictions</span>
                <span className="font-semibold text-gray-900">78.3K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Models Active</span>
                <span className="font-semibold text-gray-900">4/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Confidence</span>
                <span className="font-semibold text-green-600">94.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Training Time</span>
                <span className="font-semibold text-gray-900">2.3 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Dynamic Model Content */}
          {renderModelContent()}

          {/* Time Series Forecast */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Series Forecast</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual" />
                <Line type="monotone" dataKey="predicted" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Predicted" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Prediction Distribution & Real-time Predictions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Distribution</h3>
              <div className="space-y-3">
                {predictionDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium text-gray-900">{item.risk}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{item.count.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Predictions</h3>
              <div className="space-y-3">
                {realTimePredictions.map((prediction) => (
                  <div key={prediction.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{prediction.type}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(prediction.urgency)}`}>
                        {prediction.urgency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Probability:</span>
                      <span className="font-semibold text-purple-600">{(prediction.probability * 100).toFixed(1)}%</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      💡 {prediction.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveModelingDashboard;

