import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Brain, Layers, Zap, Activity, TrendingUp, TrendingDown,
  Play, Pause, RefreshCw, Settings, Download, Share2,
  Eye, Target, Clock, Award, CheckCircle, AlertTriangle,
  XCircle, Info, Users, Database, Server, Cpu,
  GitBranch, Code, Monitor, BarChart3, LineChart as LineChartIcon
} from 'lucide-react';

const DeepLearningNeuralNetworks = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('relationship_dnn');
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [networkAccuracy, setNetworkAccuracy] = useState(94.7);

  // Neural network architectures
  const neuralNetworks = [
    {
      id: 'relationship_dnn',
      name: 'Relationship Deep Neural Network',
      type: 'Feedforward DNN',
      layers: 8,
      parameters: '2.4M',
      accuracy: 94.7,
      loss: 0.183,
      status: 'trained',
      purpose: 'Relationship compatibility prediction'
    },
    {
      id: 'user_behavior_lstm',
      name: 'User Behavior LSTM',
      type: 'Recurrent LSTM',
      layers: 6,
      parameters: '1.8M',
      accuracy: 91.3,
      loss: 0.205,
      status: 'training',
      purpose: 'Sequential behavior analysis'
    },
    {
      id: 'conversation_transformer',
      name: 'Conversation Transformer',
      type: 'Transformer',
      layers: 12,
      parameters: '4.2M',
      accuracy: 96.2,
      loss: 0.156,
      status: 'trained',
      purpose: 'Natural language understanding'
    },
    {
      id: 'image_cnn',
      name: 'Image Analysis CNN',
      type: 'Convolutional CNN',
      layers: 15,
      parameters: '3.1M',
      accuracy: 95.8,
      loss: 0.172,
      status: 'trained',
      purpose: 'Profile image analysis'
    },
    {
      id: 'multimodal_fusion',
      name: 'Multimodal Fusion Network',
      type: 'Fusion Architecture',
      layers: 10,
      parameters: '5.6M',
      accuracy: 97.1,
      loss: 0.142,
      status: 'experimental',
      purpose: 'Cross-modal data integration'
    }
  ];

  // Training metrics
  const trainingMetrics = [
    {
      metric: 'Training Accuracy',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Current training set accuracy'
    },
    {
      metric: 'Validation Loss',
      value: '0.183',
      change: '-0.027',
      trend: 'up',
      description: 'Validation set loss function'
    },
    {
      metric: 'Learning Rate',
      value: '0.001',
      change: 'Adaptive',
      trend: 'stable',
      description: 'Current learning rate'
    },
    {
      metric: 'Training Time',
      value: '3.2h',
      change: '-0.8h',
      trend: 'up',
      description: 'Time to convergence'
    }
  ];

  // Training history data
  const trainingHistory = [
    { epoch: 1, trainLoss: 0.856, valLoss: 0.892, trainAcc: 65.2, valAcc: 62.8 },
    { epoch: 10, trainLoss: 0.542, valLoss: 0.578, trainAcc: 78.4, valAcc: 76.1 },
    { epoch: 20, trainLoss: 0.389, valLoss: 0.412, trainAcc: 85.7, valAcc: 83.9 },
    { epoch: 30, trainLoss: 0.298, valLoss: 0.324, trainAcc: 89.3, valAcc: 87.8 },
    { epoch: 40, trainLoss: 0.245, valLoss: 0.267, trainAcc: 91.8, valAcc: 90.2 },
    { epoch: 50, trainLoss: 0.212, valLoss: 0.231, trainAcc: 93.4, valAcc: 92.1 },
    { epoch: 60, trainLoss: 0.189, valLoss: 0.208, trainAcc: 94.2, valAcc: 93.5 },
    { epoch: 70, trainLoss: 0.175, valLoss: 0.194, trainAcc: 94.6, valAcc: 94.1 },
    { epoch: 80, trainLoss: 0.168, valLoss: 0.186, trainAcc: 94.8, valAcc: 94.4 },
    { epoch: 90, trainLoss: 0.163, valLoss: 0.183, trainAcc: 94.9, valAcc: 94.7 }
  ];

  // Layer architecture details
  const layerArchitecture = [
    { layer: 'Input Layer', neurons: 512, activation: 'None', dropout: 0.0, description: 'User feature input' },
    { layer: 'Hidden Layer 1', neurons: 1024, activation: 'ReLU', dropout: 0.2, description: 'Feature extraction' },
    { layer: 'Hidden Layer 2', neurons: 512, activation: 'ReLU', dropout: 0.3, description: 'Pattern recognition' },
    { layer: 'Hidden Layer 3', neurons: 256, activation: 'ReLU', dropout: 0.2, description: 'Feature combination' },
    { layer: 'Hidden Layer 4', neurons: 128, activation: 'ReLU', dropout: 0.2, description: 'Abstraction layer' },
    { layer: 'Hidden Layer 5', neurons: 64, activation: 'ReLU', dropout: 0.1, description: 'High-level features' },
    { layer: 'Hidden Layer 6', neurons: 32, activation: 'ReLU', dropout: 0.1, description: 'Decision preparation' },
    { layer: 'Output Layer', neurons: 1, activation: 'Sigmoid', dropout: 0.0, description: 'Compatibility score' }
  ];

  // Performance comparison
  const performanceComparison = [
    { model: 'Shallow NN', accuracy: 78.3, parameters: '0.2M', trainTime: '0.5h' },
    { model: 'Deep NN (3 layers)', accuracy: 85.7, parameters: '0.8M', trainTime: '1.2h' },
    { model: 'Deep NN (6 layers)', accuracy: 91.4, parameters: '1.6M', trainTime: '2.1h' },
    { model: 'Deep NN (8 layers)', accuracy: 94.7, parameters: '2.4M', trainTime: '3.2h' },
    { model: 'Very Deep (12 layers)', accuracy: 94.9, parameters: '4.1M', trainTime: '5.8h' }
  ];

  // Hyperparameter optimization results
  const hyperparameterResults = [
    { parameter: 'Learning Rate', optimal: 0.001, range: '0.0001-0.01', impact: 'High' },
    { parameter: 'Batch Size', optimal: 64, range: '16-256', impact: 'Medium' },
    { parameter: 'Hidden Units', optimal: 1024, range: '256-2048', impact: 'High' },
    { parameter: 'Dropout Rate', optimal: 0.2, range: '0.1-0.5', impact: 'Medium' },
    { parameter: 'L2 Regularization', optimal: 0.001, range: '0.0001-0.01', impact: 'Low' },
    { parameter: 'Activation Function', optimal: 'ReLU', range: 'ReLU/Tanh/ELU', impact: 'Medium' }
  ];

  // Real-time training metrics
  const realTimeMetrics = [
    { metric: 'Current Epoch', value: 85, target: 100 },
    { metric: 'Batch Progress', value: 234, target: 500 },
    { metric: 'GPU Utilization', value: 87, target: 90 },
    { metric: 'Memory Usage', value: 14.2, target: 16.0 },
    { metric: 'Training Speed', value: 1.2, target: 1.5 }
  ];

  // Network complexity analysis
  const complexityAnalysis = [
    {
      aspect: 'Model Capacity',
      score: 9.2,
      description: 'Ability to learn complex patterns',
      recommendation: 'Optimal for relationship data'
    },
    {
      aspect: 'Generalization',
      score: 8.7,
      description: 'Performance on unseen data',
      recommendation: 'Good regularization applied'
    },
    {
      aspect: 'Training Efficiency',
      score: 7.8,
      description: 'Speed of convergence',
      recommendation: 'Consider learning rate scheduling'
    },
    {
      aspect: 'Interpretability',
      score: 6.4,
      description: 'Understanding of decisions',
      recommendation: 'Add attention mechanisms'
    }
  ];

  // Advanced techniques
  const advancedTechniques = [
    {
      technique: 'Batch Normalization',
      status: 'enabled',
      impact: '+2.3% accuracy',
      description: 'Normalizes layer inputs for stable training'
    },
    {
      technique: 'Residual Connections',
      status: 'enabled',
      impact: '+1.8% accuracy',
      description: 'Skip connections for deeper networks'
    },
    {
      technique: 'Attention Mechanism',
      status: 'experimental',
      impact: '+3.1% accuracy',
      description: 'Focus on important features'
    },
    {
      technique: 'Gradient Clipping',
      status: 'enabled',
      impact: 'Stable training',
      description: 'Prevents exploding gradients'
    },
    {
      technique: 'Learning Rate Scheduling',
      status: 'enabled',
      impact: '+1.5% accuracy',
      description: 'Adaptive learning rate adjustment'
    }
  ];

  useEffect(() => {
    let interval;
    if (isTraining) {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setIsTraining(false);
            return 0;
          }
          return prev + Math.random() * 3;
        });
        setNetworkAccuracy(prev => Math.min(prev + Math.random() * 0.1, 97));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTraining]);

  const startTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    console.log(`Starting training for ${selectedNetwork}...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'trained': return 'text-green-600 bg-green-100';
      case 'training': return 'text-blue-600 bg-blue-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTechniqueStatus = (status) => {
    switch (status) {
      case 'enabled': return 'text-green-600 bg-green-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      case 'disabled': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-600" />
              Deep Learning Neural Networks
            </h1>
            <p className="text-gray-600">
              Advanced neural network architectures for relationship prediction and user behavior analysis
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isTraining ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isTraining ? `Training... ${trainingProgress.toFixed(1)}%` : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={startTraining}
              disabled={isTraining}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isTraining 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isTraining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isTraining ? 'Training...' : 'Start Training'}
            </button>
            
            <button
              onClick={() => setShowArchitecture(!showArchitecture)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showArchitecture 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              Architecture
            </button>
          </div>
        </div>
      </div>

      {/* Training Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {trainingMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : 
                 metric.trend === 'down' ? <TrendingDown className="w-4 h-4" /> : 
                 <Activity className="w-4 h-4" />}
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
          {/* Neural Networks */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Neural Networks</h3>
            <div className="space-y-3">
              {neuralNetworks.slice(0, 4).map((network) => (
                <button
                  key={network.id}
                  onClick={() => setSelectedNetwork(network.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedNetwork === network.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{network.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(network.status)}`}>
                      {network.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{network.type}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Layers:</span>
                      <div className="font-semibold text-blue-600">{network.layers}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-green-600">{network.accuracy}%</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Training */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Training Status</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {networkAccuracy.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Current Accuracy</div>
              </div>
              
              {isTraining && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Training Progress</span>
                    <span className="text-sm text-gray-600">{trainingProgress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${trainingProgress}%` }}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                {realTimeMetrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{metric.metric}:</span>
                    <span className="font-semibold text-gray-900">
                      {metric.metric.includes('Usage') ? `${metric.value} GB` : 
                       metric.metric.includes('Utilization') ? `${metric.value}%` :
                       metric.metric.includes('Speed') ? `${metric.value}s/batch` :
                       metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Advanced Techniques</h3>
            <div className="space-y-3">
              {advancedTechniques.slice(0, 4).map((technique, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{technique.technique}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTechniqueStatus(technique.status)}`}>
                      {technique.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{technique.description}</div>
                  <div className="text-xs text-green-600 font-medium">{technique.impact}</div>
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
                Retrain Network
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Model
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Network Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Training History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training History</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="trainAcc" stroke="#3b82f6" strokeWidth={2} name="Training Accuracy" />
                <Line yAxisId="left" type="monotone" dataKey="valAcc" stroke="#10b981" strokeWidth={2} name="Validation Accuracy" />
                <Line yAxisId="right" type="monotone" dataKey="trainLoss" stroke="#f59e0b" strokeWidth={2} name="Training Loss" />
                <Line yAxisId="right" type="monotone" dataKey="valLoss" stroke="#ef4444" strokeWidth={2} name="Validation Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Comparison & Hyperparameters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy %" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hyperparameter Optimization</h3>
              <div className="space-y-3">
                {hyperparameterResults.map((param, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{param.parameter}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(param.impact)}`}>
                        {param.impact}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Optimal: {param.optimal}</span>
                      <span className="text-gray-500">Range: {param.range}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layer Architecture */}
          {showArchitecture && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Neural Network Architecture</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Layer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Neurons</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Activation</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Dropout</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layerArchitecture.map((layer, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{layer.layer}</td>
                        <td className="py-3 px-4 text-blue-600 font-semibold">{layer.neurons}</td>
                        <td className="py-3 px-4 text-gray-700">{layer.activation}</td>
                        <td className="py-3 px-4 text-gray-700">{layer.dropout}</td>
                        <td className="py-3 px-4 text-gray-600">{layer.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Complexity Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Network Complexity Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complexityAnalysis.map((analysis, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{analysis.aspect}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{analysis.score}/10</div>
                      <div className="text-xs text-gray-500">score</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{analysis.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${analysis.score * 10}%` }}
                    />
                  </div>
                  <div className="text-sm font-medium text-indigo-600">
                    💡 {analysis.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Network Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Network Architecture</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="feedforward">Feedforward DNN</option>
                  <option value="residual">Residual Network</option>
                  <option value="densenet">DenseNet</option>
                  <option value="custom">Custom Architecture</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Optimizer</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="adam">Adam</option>
                  <option value="adamw">AdamW</option>
                  <option value="sgd">SGD with Momentum</option>
                  <option value="rmsprop">RMSprop</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loss Function</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="binary_crossentropy">Binary Crossentropy</option>
                  <option value="mse">Mean Squared Error</option>
                  <option value="focal">Focal Loss</option>
                  <option value="custom">Custom Loss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Learning Rate</label>
                <input
                  type="number"
                  step="0.0001"
                  min="0.0001"
                  max="0.1"
                  defaultValue="0.001"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="32">32</option>
                  <option value="64">64</option>
                  <option value="128">128</option>
                  <option value="256">256</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Regularization</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="dropout">Dropout</option>
                  <option value="l1">L1 Regularization</option>
                  <option value="l2">L2 Regularization</option>
                  <option value="elastic">Elastic Net</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
        </div>
      </div>
    </div>
  );
};

export default DeepLearningNeuralNetworks;

