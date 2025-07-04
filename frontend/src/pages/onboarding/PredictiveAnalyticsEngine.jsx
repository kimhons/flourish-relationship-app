import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Brain, TrendingUp, Target, AlertTriangle, CheckCircle, 
  Clock, Users, Heart, MessageCircle, Star, Zap, 
  Settings, Play, Pause, RefreshCw, Download, Share2,
  ArrowUp, ArrowDown, Activity, Award, Calendar,
  Filter, Eye, BarChart3, PieChart, Cpu, Database
} from 'lucide-react';

const PredictiveAnalyticsEngine = () => {
  const [selectedModel, setSelectedModel] = useState('relationship_success');
  const [predictionHorizon, setPredictionHorizon] = useState('30d');
  const [isTraining, setIsTraining] = useState(false);
  const [modelAccuracy, setModelAccuracy] = useState(94.2);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [selectedFeatures, setSelectedFeatures] = useState(['user_activity', 'message_frequency', 'profile_completeness']);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  // Prediction models data
  const models = [
    {
      id: 'relationship_success',
      name: 'Relationship Success Predictor',
      description: 'Predicts likelihood of successful long-term relationships',
      accuracy: 94.2,
      lastTrained: '2024-01-07',
      status: 'active',
      predictions: 15420
    },
    {
      id: 'user_churn',
      name: 'User Churn Predictor',
      description: 'Identifies users at risk of leaving the platform',
      accuracy: 89.7,
      lastTrained: '2024-01-06',
      status: 'active',
      predictions: 8930
    },
    {
      id: 'match_compatibility',
      name: 'Match Compatibility Engine',
      description: 'Predicts compatibility scores between potential matches',
      accuracy: 91.5,
      lastTrained: '2024-01-07',
      status: 'active',
      predictions: 45670
    },
    {
      id: 'engagement_optimizer',
      name: 'Engagement Optimizer',
      description: 'Predicts optimal timing and content for user engagement',
      accuracy: 87.3,
      lastTrained: '2024-01-05',
      status: 'training',
      predictions: 12340
    }
  ];

  // Sample prediction data
  const relationshipPredictions = [
    { date: '2024-01-08', predicted: 85, actual: 82, confidence: 0.94 },
    { date: '2024-01-09', predicted: 88, actual: 86, confidence: 0.91 },
    { date: '2024-01-10', predicted: 92, actual: 89, confidence: 0.96 },
    { date: '2024-01-11', predicted: 87, actual: null, confidence: 0.93 },
    { date: '2024-01-12', predicted: 90, actual: null, confidence: 0.95 },
    { date: '2024-01-13', predicted: 94, actual: null, confidence: 0.97 },
    { date: '2024-01-14', predicted: 91, actual: null, confidence: 0.92 }
  ];

  const churnRiskData = [
    { segment: 'High Risk', count: 1250, percentage: 8.3, trend: 'up' },
    { segment: 'Medium Risk', count: 3420, percentage: 22.8, trend: 'stable' },
    { segment: 'Low Risk', count: 10330, percentage: 68.9, trend: 'down' }
  ];

  const featureImportance = [
    { feature: 'Message Frequency', importance: 0.24, impact: 'high' },
    { feature: 'Profile Completeness', importance: 0.19, impact: 'high' },
    { feature: 'Response Time', importance: 0.16, impact: 'medium' },
    { feature: 'Photo Quality Score', importance: 0.14, impact: 'medium' },
    { feature: 'Activity Consistency', importance: 0.12, impact: 'medium' },
    { feature: 'Match Acceptance Rate', importance: 0.09, impact: 'low' },
    { feature: 'Time on Platform', importance: 0.06, impact: 'low' }
  ];

  const predictionAccuracy = [
    { model: 'Relationship Success', accuracy: 94.2, precision: 92.1, recall: 89.7, f1Score: 90.9 },
    { model: 'User Churn', accuracy: 89.7, precision: 87.3, recall: 91.2, f1Score: 89.2 },
    { model: 'Match Compatibility', accuracy: 91.5, precision: 90.8, recall: 88.9, f1Score: 89.8 },
    { model: 'Engagement Optimizer', accuracy: 87.3, precision: 85.6, recall: 89.1, f1Score: 87.3 }
  ];

  const realTimePredictions = [
    { 
      userId: 'U001', 
      prediction: 'High Success Probability', 
      score: 0.94, 
      factors: ['High engagement', 'Complete profile', 'Consistent activity'],
      recommendation: 'Introduce premium features'
    },
    { 
      userId: 'U002', 
      prediction: 'Churn Risk', 
      score: 0.78, 
      factors: ['Declining activity', 'Low response rate', 'No recent matches'],
      recommendation: 'Send re-engagement campaign'
    },
    { 
      userId: 'U003', 
      prediction: 'Perfect Match Available', 
      score: 0.91, 
      factors: ['Compatible interests', 'Similar activity patterns', 'Geographic proximity'],
      recommendation: 'Priority match notification'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleModelTraining = (modelId) => {
    setIsTraining(true);
    console.log(`Training model: ${modelId}`);
    
    // Simulate training process
    setTimeout(() => {
      setIsTraining(false);
      setModelAccuracy(Math.random() * 5 + 90); // Random accuracy between 90-95%
    }, 3000);
  };

  const handleExportPredictions = () => {
    console.log('Exporting predictions...');
    // Implementation for export functionality
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'training': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-600" />
              Predictive Analytics Engine
            </h1>
            <p className="text-gray-600">
              AI-powered predictions and insights for relationship platform optimization
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            
            <button
              onClick={handleExportPredictions}
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            
            <button
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Advanced Settings Panel */}
        {showAdvancedSettings && (
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prediction Horizon
                </label>
                <select
                  value={predictionHorizon}
                  onChange={(e) => setPredictionHorizon(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="7d">7 Days</option>
                  <option value="30d">30 Days</option>
                  <option value="90d">90 Days</option>
                  <option value="1y">1 Year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model Confidence Threshold
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="1.0"
                  step="0.05"
                  defaultValue="0.8"
                  className="w-full"
                />
                <div className="text-sm text-gray-500 mt-1">80% confidence</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auto-retrain Frequency
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="manual">Manual Only</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {models.map((model) => (
          <div 
            key={model.id}
            className={`bg-white rounded-lg p-6 border-2 cursor-pointer transition-all hover:shadow-lg ${
              selectedModel === model.id ? 'border-purple-500 shadow-lg' : 'border-gray-200'
            }`}
            onClick={() => setSelectedModel(model.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                  {model.status}
                </span>
              </div>
              {model.status === 'training' && (
                <RefreshCw className="w-4 h-4 text-yellow-600 animate-spin" />
              )}
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{model.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{model.description}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Accuracy</span>
                <span className="font-semibold text-green-600">{model.accuracy}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Predictions</span>
                <span className="font-semibold text-gray-900">{model.predictions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Last Trained</span>
                <span className="text-sm text-gray-700">{model.lastTrained}</span>
              </div>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleModelTraining(model.id);
              }}
              disabled={isTraining || model.status === 'training'}
              className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isTraining || model.status === 'training' ? 'Training...' : 'Retrain Model'}
            </button>
          </div>
        ))}
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Prediction Accuracy Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Prediction vs Actual Results</h3>
            <TrendingUp className="w-5 h-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={relationshipPredictions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                name="Predicted"
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Actual"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Feature Importance */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Feature Importance</h3>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            {featureImportance.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{feature.feature}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(feature.impact)}`}>
                        {feature.impact}
                      </span>
                      <span className="text-sm text-gray-600">{(feature.importance * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${feature.importance * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Churn Risk Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Churn Risk Distribution</h3>
            <AlertTriangle className="w-5 h-5 text-gray-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={churnRiskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Summary</h3>
          <div className="space-y-4">
            {churnRiskData.map((risk, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div className="font-medium text-gray-900">{risk.segment}</div>
                  <div className="text-sm text-gray-600">{risk.count.toLocaleString()} users</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{risk.percentage}%</div>
                  <div className={`text-xs flex items-center gap-1 ${
                    risk.trend === 'up' ? 'text-red-600' : 
                    risk.trend === 'down' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {risk.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                    {risk.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                    {risk.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Performance Metrics */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Model</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Precision</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Recall</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">F1 Score</th>
              </tr>
            </thead>
            <tbody>
              {predictionAccuracy.map((metric, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{metric.model}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">{metric.accuracy}%</td>
                  <td className="py-3 px-4 text-gray-700">{metric.precision}%</td>
                  <td className="py-3 px-4 text-gray-700">{metric.recall}%</td>
                  <td className="py-3 px-4 text-gray-700">{metric.f1Score}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Predictions */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Predictions</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>
        <div className="space-y-4">
          {realTimePredictions.map((prediction, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">User {prediction.userId}</div>
                    <div className="text-sm text-gray-600">{prediction.prediction}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-purple-600">{(prediction.score * 100).toFixed(1)}%</div>
                  <div className="text-xs text-gray-500">confidence</div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-sm text-gray-600 mb-1">Key Factors:</div>
                <div className="flex flex-wrap gap-2">
                  {prediction.factors.map((factor, factorIndex) => (
                    <span key={factorIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <strong>Recommendation:</strong> {prediction.recommendation}
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsEngine;

