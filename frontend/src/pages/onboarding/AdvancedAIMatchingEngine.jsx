import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Brain, Heart, Users, Target, Zap, Activity, 
  Settings, Play, Pause, RefreshCw, Eye, Filter,
  TrendingUp, TrendingDown, Star, Award, Clock,
  MessageCircle, Camera, MapPin, Book, Music,
  Coffee, Dumbbell, Plane, Palette, Code, Gamepad2
} from 'lucide-react';

const AdvancedAIMatchingEngine = () => {
  const [isEngineRunning, setIsEngineRunning] = useState(true);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('neural_network');
  const [matchingMode, setMatchingMode] = useState('real_time');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [accuracyScore, setAccuracyScore] = useState(94.7);

  // AI Matching Algorithms
  const matchingAlgorithms = [
    {
      id: 'neural_network',
      name: 'Deep Neural Network',
      description: 'Advanced deep learning for complex pattern recognition',
      accuracy: 94.7,
      speed: 'Fast',
      complexity: 'High',
      status: 'active'
    },
    {
      id: 'ensemble_learning',
      name: 'Ensemble Learning',
      description: 'Combines multiple algorithms for optimal results',
      accuracy: 92.3,
      speed: 'Medium',
      complexity: 'Very High',
      status: 'active'
    },
    {
      id: 'gradient_boosting',
      name: 'Gradient Boosting',
      description: 'Iterative learning with error correction',
      accuracy: 91.8,
      speed: 'Fast',
      complexity: 'Medium',
      status: 'active'
    },
    {
      id: 'transformer_model',
      name: 'Transformer Model',
      description: 'Attention-based architecture for relationship patterns',
      accuracy: 96.2,
      speed: 'Medium',
      complexity: 'Very High',
      status: 'experimental'
    }
  ];

  // Real-time matching performance data
  const matchingPerformance = [
    { time: '00:00', matches: 1250, accuracy: 94.2, latency: 45 },
    { time: '04:00', matches: 890, accuracy: 95.1, latency: 38 },
    { time: '08:00', matches: 2100, accuracy: 93.8, latency: 52 },
    { time: '12:00', matches: 3200, accuracy: 94.9, latency: 41 },
    { time: '16:00', matches: 2800, accuracy: 95.3, latency: 39 },
    { time: '20:00', matches: 2400, accuracy: 94.6, latency: 43 }
  ];

  // Feature importance for matching
  const featureImportance = [
    { feature: 'Personality Compatibility', importance: 0.28, category: 'Psychology' },
    { feature: 'Shared Interests', importance: 0.24, category: 'Lifestyle' },
    { feature: 'Communication Style', importance: 0.19, category: 'Behavior' },
    { feature: 'Life Goals Alignment', importance: 0.16, category: 'Values' },
    { feature: 'Geographic Proximity', importance: 0.08, category: 'Location' },
    { feature: 'Age Compatibility', importance: 0.05, category: 'Demographics' }
  ];

  // Matching quality metrics
  const qualityMetrics = [
    {
      metric: 'Overall Accuracy',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Percentage of successful matches predicted correctly'
    },
    {
      metric: 'Precision Score',
      value: '92.1%',
      change: '+1.8%',
      trend: 'up',
      description: 'Accuracy of positive match predictions'
    },
    {
      metric: 'Recall Rate',
      value: '96.4%',
      change: '+0.9%',
      trend: 'up',
      description: 'Percentage of actual matches identified'
    },
    {
      metric: 'F1 Score',
      value: '94.2',
      change: '+1.5',
      trend: 'up',
      description: 'Harmonic mean of precision and recall'
    }
  ];

  // User compatibility analysis
  const compatibilityFactors = [
    { factor: 'Personality', score: 88, weight: 25 },
    { factor: 'Interests', score: 92, weight: 20 },
    { factor: 'Values', score: 85, weight: 18 },
    { factor: 'Communication', score: 79, weight: 15 },
    { factor: 'Lifestyle', score: 83, weight: 12 },
    { factor: 'Goals', score: 91, weight: 10 }
  ];

  // Real-time match suggestions
  const liveMatches = [
    {
      id: 'M001',
      compatibility: 96.8,
      confidence: 0.94,
      factors: ['High personality match', 'Shared creative interests', 'Similar life goals'],
      riskFactors: ['Different communication styles'],
      recommendation: 'Excellent match - high success probability'
    },
    {
      id: 'M002',
      compatibility: 89.2,
      confidence: 0.87,
      factors: ['Strong value alignment', 'Geographic proximity', 'Active lifestyle match'],
      riskFactors: ['Age gap', 'Different career stages'],
      recommendation: 'Good match - consider personality compatibility'
    },
    {
      id: 'M003',
      compatibility: 92.5,
      confidence: 0.91,
      factors: ['Excellent communication match', 'Shared hobbies', 'Similar education'],
      riskFactors: ['Limited interaction history'],
      recommendation: 'Strong potential - encourage initial contact'
    }
  ];

  // Algorithm performance comparison
  const algorithmComparison = [
    { algorithm: 'Neural Network', accuracy: 94.7, speed: 85, complexity: 90 },
    { algorithm: 'Ensemble Learning', accuracy: 92.3, speed: 70, complexity: 95 },
    { algorithm: 'Gradient Boosting', accuracy: 91.8, speed: 88, complexity: 65 },
    { algorithm: 'Transformer', accuracy: 96.2, speed: 75, complexity: 98 }
  ];

  // Interest categories for matching
  const interestCategories = [
    { category: 'Arts & Culture', icon: Palette, matches: 2340, avgCompatibility: 87.3 },
    { category: 'Sports & Fitness', icon: Dumbbell, matches: 3120, avgCompatibility: 84.7 },
    { category: 'Travel & Adventure', icon: Plane, matches: 2890, avgCompatibility: 91.2 },
    { category: 'Technology', icon: Code, matches: 1560, avgCompatibility: 89.8 },
    { category: 'Music & Entertainment', icon: Music, matches: 2750, avgCompatibility: 86.5 },
    { category: 'Food & Dining', icon: Coffee, matches: 3450, avgCompatibility: 82.9 },
    { category: 'Gaming', icon: Gamepad2, matches: 1890, avgCompatibility: 88.4 },
    { category: 'Reading & Learning', icon: Book, matches: 2100, avgCompatibility: 90.1 }
  ];

  useEffect(() => {
    let interval;
    if (isEngineRunning) {
      interval = setInterval(() => {
        setAccuracyScore(prev => Math.min(prev + (Math.random() - 0.5) * 0.2, 97));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isEngineRunning]);

  const toggleEngine = () => {
    setIsEngineRunning(!isEngineRunning);
    console.log(`AI Matching Engine ${!isEngineRunning ? 'started' : 'stopped'}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSpeedColor = (speed) => {
    switch (speed) {
      case 'Fast': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Slow': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-orange-600';
      case 'Very High': return 'text-red-600';
      default: return 'text-gray-600';
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
              Advanced AI Matching Engine
            </h1>
            <p className="text-gray-600">
              Next-generation AI algorithms for intelligent relationship matching and compatibility analysis
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isEngineRunning ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm text-gray-600">
                {isEngineRunning ? 'Engine Running' : 'Engine Stopped'}
              </span>
            </div>
            
            <button
              onClick={toggleEngine}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isEngineRunning 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isEngineRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isEngineRunning ? 'Stop Engine' : 'Start Engine'}
            </button>
            
            <button
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAdvancedSettings 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Advanced Settings
            </button>
          </div>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {qualityMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Brain className="w-6 h-6 text-blue-600" />
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
          {/* Algorithm Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AI Algorithms</h3>
            <div className="space-y-3">
              {matchingAlgorithms.map((algorithm) => (
                <button
                  key={algorithm.id}
                  onClick={() => setSelectedAlgorithm(algorithm.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedAlgorithm === algorithm.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{algorithm.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(algorithm.status)}`}>
                      {algorithm.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{algorithm.description}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-green-600">{algorithm.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Speed:</span>
                      <div className={`font-semibold ${getSpeedColor(algorithm.speed)}`}>{algorithm.speed}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Complexity:</span>
                      <div className={`font-semibold ${getComplexityColor(algorithm.complexity)}`}>{algorithm.complexity}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Live Match Queue */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Live Match Queue</h3>
            <div className="space-y-3">
              {liveMatches.map((match) => (
                <div key={match.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Match {match.id}</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{match.compatibility}%</div>
                      <div className="text-xs text-gray-500">compatibility</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Confidence: {(match.confidence * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-blue-600 font-medium">
                    💡 {match.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engine Controls */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Engine Controls</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Matching Mode</label>
                <select
                  value={matchingMode}
                  onChange={(e) => setMatchingMode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="real_time">Real-time</option>
                  <option value="batch">Batch Processing</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accuracy Threshold: {accuracyScore.toFixed(1)}%
                </label>
                <input
                  type="range"
                  min="80"
                  max="99"
                  step="0.1"
                  value={accuracyScore}
                  onChange={(e) => setAccuracyScore(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Retrain Models
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Real-time Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Matching Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={matchingPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="matches" stroke="#3b82f6" strokeWidth={2} name="Matches Generated" />
                <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy %" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Feature Importance & Algorithm Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Importance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={featureImportance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="feature" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="importance" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Algorithm Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={algorithmComparison}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="algorithm" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Accuracy" dataKey="accuracy" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar name="Speed" dataKey="speed" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Radar name="Complexity" dataKey="complexity" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Compatibility Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatibility Factor Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {compatibilityFactors.map((factor, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{factor.factor}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{factor.score}%</div>
                      <div className="text-xs text-gray-500">weight: {factor.weight}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${factor.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interest Categories Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interest-Based Matching Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {interestCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{category.category}</h4>
                        <div className="text-sm text-gray-600">{category.matches} matches</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg Compatibility:</span>
                      <span className="font-semibold text-green-600">{category.avgCompatibility}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advanced Settings Panel */}
          {showAdvancedSettings && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced AI Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Learning Rate</label>
                  <input
                    type="number"
                    step="0.001"
                    defaultValue="0.001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                  <input
                    type="number"
                    defaultValue="32"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Epochs</label>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dropout Rate</label>
                  <input
                    type="number"
                    step="0.1"
                    defaultValue="0.2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Regularization</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="l1">L1 Regularization</option>
                    <option value="l2">L2 Regularization</option>
                    <option value="elastic">Elastic Net</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Optimization</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="adam">Adam</option>
                    <option value="sgd">SGD</option>
                    <option value="rmsprop">RMSprop</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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

export default AdvancedAIMatchingEngine;

