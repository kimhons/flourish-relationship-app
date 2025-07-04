import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Cpu, Settings, TrendingUp, TrendingDown, Activity, Zap, 
  Play, Pause, RefreshCw, Target, Brain, Database,
  Clock, BarChart3, LineChart as LineChartIcon, Eye,
  AlertTriangle, CheckCircle, XCircle, Info, Award,
  Layers, GitBranch, Sliders, Monitor, Server
} from 'lucide-react';

const MachineLearningOptimizationCenter = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [selectedModel, setSelectedModel] = useState('relationship_predictor');
  const [optimizationMode, setOptimizationMode] = useState('auto');
  const [showHyperparameters, setShowHyperparameters] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  // ML Models for optimization
  const mlModels = [
    {
      id: 'relationship_predictor',
      name: 'Relationship Success Predictor',
      type: 'Classification',
      accuracy: 94.7,
      precision: 92.3,
      recall: 96.1,
      f1Score: 94.2,
      status: 'optimized',
      lastOptimized: '2024-01-07',
      trainingTime: '2.3 hours'
    },
    {
      id: 'user_churn_model',
      name: 'User Churn Prediction',
      type: 'Classification',
      accuracy: 89.5,
      precision: 87.2,
      recall: 91.8,
      f1Score: 89.4,
      status: 'optimizing',
      lastOptimized: '2024-01-06',
      trainingTime: '1.8 hours'
    },
    {
      id: 'engagement_forecaster',
      name: 'Engagement Forecasting',
      type: 'Regression',
      accuracy: 91.2,
      precision: 89.7,
      recall: 92.6,
      f1Score: 91.1,
      status: 'pending',
      lastOptimized: '2024-01-05',
      trainingTime: '3.1 hours'
    },
    {
      id: 'compatibility_scorer',
      name: 'Compatibility Scoring',
      type: 'Regression',
      accuracy: 96.3,
      precision: 94.8,
      recall: 97.2,
      f1Score: 96.0,
      status: 'optimized',
      lastOptimized: '2024-01-07',
      trainingTime: '2.7 hours'
    }
  ];

  // Optimization techniques
  const optimizationTechniques = [
    {
      id: 'hyperparameter_tuning',
      name: 'Hyperparameter Tuning',
      description: 'Automated search for optimal hyperparameters',
      status: 'active',
      improvement: '+3.2%',
      timeRequired: '2-4 hours'
    },
    {
      id: 'feature_selection',
      name: 'Feature Selection',
      description: 'Identify and select most relevant features',
      status: 'active',
      improvement: '+1.8%',
      timeRequired: '30-60 min'
    },
    {
      id: 'ensemble_methods',
      name: 'Ensemble Methods',
      description: 'Combine multiple models for better performance',
      status: 'active',
      improvement: '+2.5%',
      timeRequired: '1-2 hours'
    },
    {
      id: 'neural_architecture_search',
      name: 'Neural Architecture Search',
      description: 'Automated neural network architecture optimization',
      status: 'experimental',
      improvement: '+4.1%',
      timeRequired: '6-12 hours'
    },
    {
      id: 'data_augmentation',
      name: 'Data Augmentation',
      description: 'Generate synthetic data to improve training',
      status: 'active',
      improvement: '+1.5%',
      timeRequired: '1-3 hours'
    }
  ];

  // Performance metrics over time
  const performanceHistory = [
    { date: '2024-01-01', accuracy: 89.2, loss: 0.245, valAccuracy: 87.8 },
    { date: '2024-01-02', accuracy: 90.1, loss: 0.231, valAccuracy: 88.9 },
    { date: '2024-01-03', accuracy: 91.5, loss: 0.218, valAccuracy: 90.2 },
    { date: '2024-01-04', accuracy: 92.8, loss: 0.205, valAccuracy: 91.6 },
    { date: '2024-01-05', accuracy: 93.9, loss: 0.192, valAccuracy: 92.8 },
    { date: '2024-01-06', accuracy: 94.3, loss: 0.187, valAccuracy: 93.5 },
    { date: '2024-01-07', accuracy: 94.7, loss: 0.183, valAccuracy: 94.1 }
  ];

  // Hyperparameter optimization results
  const hyperparameterResults = [
    { parameter: 'Learning Rate', current: 0.001, optimal: 0.0015, improvement: '+2.1%' },
    { parameter: 'Batch Size', current: 32, optimal: 64, improvement: '+1.3%' },
    { parameter: 'Hidden Layers', current: 3, optimal: 4, improvement: '+1.8%' },
    { parameter: 'Dropout Rate', current: 0.2, optimal: 0.15, improvement: '+0.9%' },
    { parameter: 'L2 Regularization', current: 0.01, optimal: 0.005, improvement: '+1.2%' },
    { parameter: 'Optimizer', current: 'Adam', optimal: 'AdamW', improvement: '+0.7%' }
  ];

  // Feature importance analysis
  const featureImportance = [
    { feature: 'User Activity Score', importance: 0.24, change: '+0.03' },
    { feature: 'Profile Completeness', importance: 0.19, change: '+0.01' },
    { feature: 'Communication Frequency', importance: 0.16, change: '-0.02' },
    { feature: 'Match Response Rate', importance: 0.14, change: '+0.04' },
    { feature: 'Session Duration', importance: 0.12, change: '+0.01' },
    { feature: 'Premium Features Usage', importance: 0.09, change: '+0.02' },
    { feature: 'Geographic Proximity', importance: 0.06, change: '-0.01' }
  ];

  // Optimization experiments
  const optimizationExperiments = [
    {
      id: 'EXP001',
      name: 'Learning Rate Optimization',
      status: 'completed',
      improvement: '+2.3%',
      duration: '3.2 hours',
      technique: 'Grid Search',
      result: 'Success'
    },
    {
      id: 'EXP002',
      name: 'Architecture Search',
      status: 'running',
      improvement: 'TBD',
      duration: '8.5 hours',
      technique: 'Bayesian Optimization',
      result: 'In Progress'
    },
    {
      id: 'EXP003',
      name: 'Feature Engineering',
      status: 'queued',
      improvement: 'TBD',
      duration: '2.0 hours',
      technique: 'Genetic Algorithm',
      result: 'Pending'
    }
  ];

  // Resource utilization
  const resourceMetrics = [
    {
      resource: 'GPU Utilization',
      current: 78,
      optimal: 85,
      status: 'good'
    },
    {
      resource: 'Memory Usage',
      current: 12.4,
      optimal: 16.0,
      status: 'good'
    },
    {
      resource: 'CPU Usage',
      current: 45,
      optimal: 60,
      status: 'underutilized'
    },
    {
      resource: 'Storage I/O',
      current: 234,
      optimal: 400,
      status: 'good'
    }
  ];

  useEffect(() => {
    let interval;
    if (isOptimizing) {
      interval = setInterval(() => {
        setOptimizationProgress(prev => {
          if (prev >= 100) {
            setIsOptimizing(false);
            return 0;
          }
          return prev + Math.random() * 5;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOptimizing]);

  const startOptimization = () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    console.log(`Starting optimization for ${selectedModel}...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimized': return 'text-green-600 bg-green-100';
      case 'optimizing': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getResourceStatus = (status) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      case 'underutilized': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getExperimentStatus = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'queued': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-purple-600" />
              Machine Learning Optimization Center
            </h1>
            <p className="text-gray-600">
              Advanced ML model optimization, hyperparameter tuning, and performance enhancement
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isOptimizing ? 'bg-purple-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isOptimizing ? `Optimizing... ${optimizationProgress.toFixed(1)}%` : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={startOptimization}
              disabled={isOptimizing}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isOptimizing 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isOptimizing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isOptimizing ? 'Optimizing...' : 'Start Optimization'}
            </button>
            
            <button
              onClick={() => setShowHyperparameters(!showHyperparameters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showHyperparameters 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Hyperparameters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Model Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">ML Models</h3>
            <div className="space-y-3">
              {mlModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedModel === model.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{model.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                      {model.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{model.type}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className="font-semibold text-green-600">{model.accuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">F1 Score:</span>
                    <span className="font-semibold text-blue-600">{model.f1Score}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Optimization Techniques */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Optimization Techniques</h3>
            <div className="space-y-3">
              {optimizationTechniques.slice(0, 4).map((technique) => (
                <div key={technique.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{technique.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(technique.status)}`}>
                      {technique.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{technique.description}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">{technique.improvement}</span>
                    <span className="text-gray-500">{technique.timeRequired}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Utilization */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Resource Utilization</h3>
            <div className="space-y-3">
              {resourceMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{metric.resource}</div>
                    <div className={`text-sm ${getResourceStatus(metric.status)}`}>
                      {metric.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {metric.resource.includes('Memory') ? `${metric.current} GB` : 
                       metric.resource.includes('Storage') ? `${metric.current} MB/s` : 
                       `${metric.current}%`}
                    </div>
                    <div className="text-sm text-gray-500">
                      Target: {metric.resource.includes('Memory') ? `${metric.optimal} GB` : 
                              metric.resource.includes('Storage') ? `${metric.optimal} MB/s` : 
                              `${metric.optimal}%`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Performance History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance History</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={2} name="Training Accuracy" />
                <Line yAxisId="left" type="monotone" dataKey="valAccuracy" stroke="#10b981" strokeWidth={2} name="Validation Accuracy" />
                <Line yAxisId="right" type="monotone" dataKey="loss" stroke="#f59e0b" strokeWidth={2} name="Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Feature Importance & Hyperparameter Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Importance Changes</h3>
              <div className="space-y-3">
                {featureImportance.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{feature.feature}</span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${
                            feature.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {feature.change}
                          </span>
                          <span className="text-sm text-gray-600">{(feature.importance * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${feature.importance * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hyperparameter Optimization</h3>
              <div className="space-y-3">
                {hyperparameterResults.map((param, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{param.parameter}</span>
                      <span className="text-green-600 font-medium">{param.improvement}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Current: {param.current}</span>
                      <span className="text-purple-600 font-medium">Optimal: {param.optimal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Optimization Experiments */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Experiments</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Experiment</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Technique</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Improvement</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {optimizationExperiments.map((experiment) => (
                    <tr key={experiment.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">{experiment.name}</div>
                        <div className="text-sm text-gray-600">{experiment.id}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getExperimentStatus(experiment.status)}`}>
                          {experiment.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{experiment.technique}</td>
                      <td className="py-3 px-4 text-gray-700">{experiment.duration}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${
                          experiment.improvement === 'TBD' ? 'text-gray-500' : 'text-green-600'
                        }`}>
                          {experiment.improvement}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{experiment.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hyperparameter Configuration Panel */}
          {showHyperparameters && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hyperparameter Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Rate</label>
                  <input
                    type="number"
                    step="0.0001"
                    defaultValue="0.001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                    <option value="128">128</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hidden Layers</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    defaultValue="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dropout Rate</label>
                  <input
                    type="number"
                    step="0.05"
                    min="0"
                    max="0.8"
                    defaultValue="0.2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Optimizer</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="adam">Adam</option>
                    <option value="adamw">AdamW</option>
                    <option value="sgd">SGD</option>
                    <option value="rmsprop">RMSprop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">L2 Regularization</label>
                  <input
                    type="number"
                    step="0.001"
                    min="0"
                    max="0.1"
                    defaultValue="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Apply Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Optimal
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Auto-Optimize
                </button>
              </div>
            </div>
          )}

          {/* Optimization Progress */}
          {isOptimizing && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm text-gray-600">{optimizationProgress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${optimizationProgress}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Current Step:</span>
                    <div className="font-medium text-gray-900">Hyperparameter Tuning</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Estimated Time:</span>
                    <div className="font-medium text-gray-900">2.3 hours remaining</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Best Score:</span>
                    <div className="font-medium text-green-600">94.8% accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineLearningOptimizationCenter;

