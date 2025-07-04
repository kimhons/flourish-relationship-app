import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Zap, TrendingUp, TrendingDown, Target, Settings, Play,
  RefreshCw, BarChart3, Activity, Clock, CheckCircle,
  AlertTriangle, XCircle, Brain, Cpu, Server, Award,
  Eye, Download, Upload, Save, Share2, Filter
} from 'lucide-react';

const AIAlgorithmOptimization = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('gradient_descent');
  const [optimizationStatus, setOptimizationStatus] = useState('ready');
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [currentIteration, setCurrentIteration] = useState(0);

  // Optimization algorithms
  const optimizationAlgorithms = [
    {
      id: 'gradient_descent',
      name: 'Gradient Descent',
      type: 'First-order',
      status: 'optimized',
      performance: 94.7,
      convergence: 'Fast',
      memory: 'Low'
    },
    {
      id: 'adam',
      name: 'Adam Optimizer',
      type: 'Adaptive',
      status: 'running',
      performance: 96.2,
      convergence: 'Very Fast',
      memory: 'Medium'
    },
    {
      id: 'rmsprop',
      name: 'RMSprop',
      type: 'Adaptive',
      status: 'optimized',
      performance: 93.8,
      convergence: 'Fast',
      memory: 'Medium'
    },
    {
      id: 'adagrad',
      name: 'AdaGrad',
      type: 'Adaptive',
      status: 'pending',
      performance: 91.4,
      convergence: 'Slow',
      memory: 'High'
    },
    {
      id: 'genetic',
      name: 'Genetic Algorithm',
      type: 'Evolutionary',
      status: 'experimental',
      performance: 89.6,
      convergence: 'Very Slow',
      memory: 'Very High'
    }
  ];

  // Optimization metrics
  const optimizationMetrics = [
    {
      metric: 'Best Performance',
      value: '96.2%',
      change: '+3.1%',
      trend: 'up',
      description: 'Highest achieved accuracy'
    },
    {
      metric: 'Convergence Speed',
      value: '2.3x',
      change: '+0.8x',
      trend: 'up',
      description: 'Faster than baseline'
    },
    {
      metric: 'Memory Efficiency',
      value: '87%',
      change: '+12%',
      trend: 'up',
      description: 'Memory utilization improvement'
    },
    {
      metric: 'Training Time',
      value: '1.8h',
      change: '-0.9h',
      trend: 'up',
      description: 'Reduced training duration'
    }
  ];

  // Optimization history
  const optimizationHistory = [
    { iteration: 1, performance: 78.3, loss: 0.89, learningRate: 0.01, momentum: 0.9 },
    { iteration: 10, performance: 84.7, loss: 0.67, learningRate: 0.008, momentum: 0.9 },
    { iteration: 20, performance: 89.2, loss: 0.52, learningRate: 0.006, momentum: 0.9 },
    { iteration: 30, performance: 92.1, loss: 0.41, learningRate: 0.005, momentum: 0.9 },
    { iteration: 40, performance: 94.3, loss: 0.34, learningRate: 0.004, momentum: 0.9 },
    { iteration: 50, performance: 95.8, loss: 0.29, learningRate: 0.003, momentum: 0.9 },
    { iteration: 60, performance: 96.2, loss: 0.26, learningRate: 0.002, momentum: 0.9 }
  ];

  // Hyperparameter optimization results
  const hyperparameterResults = [
    {
      parameter: 'Learning Rate',
      optimal: 0.001,
      range: '0.0001-0.01',
      improvement: '+2.3%',
      sensitivity: 'High'
    },
    {
      parameter: 'Batch Size',
      optimal: 64,
      range: '16-256',
      improvement: '+1.8%',
      sensitivity: 'Medium'
    },
    {
      parameter: 'Momentum',
      optimal: 0.9,
      range: '0.5-0.99',
      improvement: '+1.2%',
      sensitivity: 'Medium'
    },
    {
      parameter: 'Weight Decay',
      optimal: 0.0001,
      range: '0-0.01',
      improvement: '+0.9%',
      sensitivity: 'Low'
    },
    {
      parameter: 'Dropout Rate',
      optimal: 0.2,
      range: '0-0.5',
      improvement: '+1.5%',
      sensitivity: 'Medium'
    },
    {
      parameter: 'Hidden Units',
      optimal: 512,
      range: '128-1024',
      improvement: '+2.7%',
      sensitivity: 'High'
    }
  ];

  // Algorithm comparison
  const algorithmComparison = [
    { algorithm: 'SGD', accuracy: 87.3, speed: 8.2, memory: 2.1, stability: 7.8 },
    { algorithm: 'Adam', accuracy: 96.2, speed: 9.1, memory: 6.4, stability: 8.9 },
    { algorithm: 'RMSprop', accuracy: 93.8, speed: 8.7, memory: 5.2, stability: 8.3 },
    { algorithm: 'AdaGrad', accuracy: 91.4, speed: 6.9, memory: 7.8, stability: 7.1 },
    { algorithm: 'Genetic', accuracy: 89.6, speed: 3.2, memory: 9.1, stability: 6.4 }
  ];

  // Optimization techniques
  const optimizationTechniques = [
    {
      technique: 'Learning Rate Scheduling',
      status: 'enabled',
      impact: '+2.1% accuracy',
      description: 'Adaptive learning rate adjustment during training'
    },
    {
      technique: 'Gradient Clipping',
      status: 'enabled',
      impact: 'Stable training',
      description: 'Prevents exploding gradients in deep networks'
    },
    {
      technique: 'Batch Normalization',
      status: 'enabled',
      impact: '+1.8% accuracy',
      description: 'Normalizes layer inputs for faster convergence'
    },
    {
      technique: 'Early Stopping',
      status: 'enabled',
      impact: '-30% training time',
      description: 'Stops training when validation loss plateaus'
    },
    {
      technique: 'Data Augmentation',
      status: 'experimental',
      impact: '+3.2% accuracy',
      description: 'Increases training data diversity'
    },
    {
      technique: 'Ensemble Methods',
      status: 'disabled',
      impact: '+4.1% accuracy',
      description: 'Combines multiple models for better performance'
    }
  ];

  // Performance benchmarks
  const performanceBenchmarks = [
    { metric: 'Accuracy', baseline: 85.0, current: 96.2, target: 97.0, unit: '%' },
    { metric: 'Training Speed', baseline: 100, current: 230, target: 250, unit: 'samples/sec' },
    { metric: 'Memory Usage', baseline: 100, current: 87, target: 80, unit: '% of baseline' },
    { metric: 'Convergence Time', baseline: 100, current: 43, target: 40, unit: '% of baseline' }
  ];

  // Real-time optimization stats
  const realTimeStats = [
    { metric: 'Current Loss', value: 0.263, trend: 'down' },
    { metric: 'Learning Rate', value: 0.002, trend: 'down' },
    { metric: 'Gradient Norm', value: 0.0234, trend: 'stable' },
    { metric: 'Validation Score', value: 96.2, trend: 'up' },
    { metric: 'Training Speed', value: 234, trend: 'up' }
  ];

  // Optimization strategies
  const optimizationStrategies = [
    {
      strategy: 'Bayesian Optimization',
      description: 'Uses probabilistic models to find optimal hyperparameters',
      efficiency: 'Very High',
      complexity: 'High'
    },
    {
      strategy: 'Grid Search',
      description: 'Exhaustive search over hyperparameter space',
      efficiency: 'Low',
      complexity: 'Low'
    },
    {
      strategy: 'Random Search',
      description: 'Random sampling of hyperparameter combinations',
      efficiency: 'Medium',
      complexity: 'Low'
    },
    {
      strategy: 'Genetic Algorithm',
      description: 'Evolutionary approach to hyperparameter optimization',
      efficiency: 'Medium',
      complexity: 'Medium'
    },
    {
      strategy: 'Gradient-based',
      description: 'Uses gradients to optimize hyperparameters',
      efficiency: 'High',
      complexity: 'High'
    }
  ];

  useEffect(() => {
    let interval;
    if (optimizationStatus === 'running') {
      interval = setInterval(() => {
        setOptimizationProgress(prev => {
          if (prev >= 100) {
            setOptimizationStatus('completed');
            return 100;
          }
          return prev + Math.random() * 2;
        });
        setCurrentIteration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [optimizationStatus]);

  const startOptimization = () => {
    setOptimizationStatus('running');
    setOptimizationProgress(0);
    setCurrentIteration(0);
    console.log(`Starting optimization for ${selectedAlgorithm}...`);
  };

  const stopOptimization = () => {
    setOptimizationStatus('stopped');
    console.log('Optimization stopped');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimized': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'experimental': return 'text-purple-600 bg-purple-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSensitivityColor = (sensitivity) => {
    switch (sensitivity) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEfficiencyColor = (efficiency) => {
    switch (efficiency) {
      case 'Very High': return 'text-green-600 bg-green-100';
      case 'High': return 'text-blue-600 bg-blue-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
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

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-3 h-3 text-green-600" />;
      case 'down': return <TrendingDown className="w-3 h-3 text-red-600" />;
      default: return <Activity className="w-3 h-3 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Zap className="w-8 h-8 text-orange-600" />
              AI Algorithm Optimization
            </h1>
            <p className="text-gray-600">
              Advanced optimization techniques and hyperparameter tuning for maximum AI performance
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${
                optimizationStatus === 'running' ? 'bg-orange-500 animate-pulse' : 
                optimizationStatus === 'completed' ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
              <span className="text-sm text-gray-600">
                {optimizationStatus === 'running' ? `Optimizing... ${optimizationProgress.toFixed(1)}%` : 
                 optimizationStatus === 'completed' ? 'Completed' : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={optimizationStatus === 'running' ? stopOptimization : startOptimization}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                optimizationStatus === 'running' 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              {optimizationStatus === 'running' ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {optimizationStatus === 'running' ? 'Stop Optimization' : 'Start Optimization'}
            </button>
            
            <button
              onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAdvancedSettings 
                  ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Advanced Settings
            </button>
          </div>
        </div>
      </div>

      {/* Optimization Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {optimizationMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Zap className="w-6 h-6 text-orange-600" />
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
          {/* Optimization Algorithms */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Optimization Algorithms</h3>
            <div className="space-y-3">
              {optimizationAlgorithms.map((algorithm) => (
                <button
                  key={algorithm.id}
                  onClick={() => setSelectedAlgorithm(algorithm.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedAlgorithm === algorithm.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{algorithm.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(algorithm.status)}`}>
                      {algorithm.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{algorithm.type}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Performance:</span>
                      <div className="font-semibold text-orange-600">{algorithm.performance}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Speed:</span>
                      <div className="font-semibold text-green-600">{algorithm.convergence}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Real-time Stats</h3>
            <div className="space-y-3">
              {realTimeStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">{stat.metric}:</span>
                    {getTrendIcon(stat.trend)}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {typeof stat.value === 'number' && stat.value < 1 ? 
                      stat.value.toFixed(3) : 
                      stat.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            
            {optimizationStatus === 'running' && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{optimizationProgress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${optimizationProgress}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">Iteration: {currentIteration}</div>
              </div>
            )}
          </div>

          {/* Optimization Techniques */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Optimization Techniques</h3>
            <div className="space-y-3">
              {optimizationTechniques.slice(0, 4).map((technique, index) => (
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
                <Upload className="w-4 h-4" />
                Import Config
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Results
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Save className="w-4 h-4" />
                Save Optimization
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Optimization History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization History</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={optimizationHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="iteration" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="performance" stroke="#ea580c" strokeWidth={2} name="Performance %" />
                <Line yAxisId="right" type="monotone" dataKey="loss" stroke="#dc2626" strokeWidth={2} name="Loss" />
                <Line yAxisId="right" type="monotone" dataKey="learningRate" stroke="#2563eb" strokeWidth={2} name="Learning Rate" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Algorithm Comparison & Performance Benchmarks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Algorithm Performance Radar</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={algorithmComparison}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="algorithm" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar name="Accuracy" dataKey="accuracy" stroke="#ea580c" fill="#ea580c" fillOpacity={0.1} />
                  <Radar name="Speed" dataKey="speed" stroke="#2563eb" fill="#2563eb" fillOpacity={0.1} />
                  <Radar name="Stability" dataKey="stability" stroke="#16a34a" fill="#16a34a" fillOpacity={0.1} />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Benchmarks</h3>
              <div className="space-y-4">
                {performanceBenchmarks.map((benchmark, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{benchmark.metric}</span>
                      <span className="text-sm text-gray-600">{benchmark.unit}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Baseline:</span>
                        <div className="font-semibold text-gray-700">{benchmark.baseline}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Current:</span>
                        <div className="font-semibold text-orange-600">{benchmark.current}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Target:</span>
                        <div className="font-semibold text-green-600">{benchmark.target}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((benchmark.current / benchmark.target) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hyperparameter Optimization Results */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hyperparameter Optimization Results</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Parameter</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Optimal Value</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Search Range</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Improvement</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Sensitivity</th>
                  </tr>
                </thead>
                <tbody>
                  {hyperparameterResults.map((result, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{result.parameter}</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">{result.optimal}</td>
                      <td className="py-3 px-4 text-gray-700">{result.range}</td>
                      <td className="py-3 px-4 text-green-600 font-medium">{result.improvement}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSensitivityColor(result.sensitivity)}`}>
                          {result.sensitivity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Optimization Strategies */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {optimizationStrategies.map((strategy, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{strategy.strategy}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEfficiencyColor(strategy.efficiency)}`}>
                      {strategy.efficiency}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Complexity:</span>
                    <span className="font-medium text-gray-700">{strategy.complexity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          {showAdvancedSettings && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Optimization Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Optimization Strategy</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="bayesian">Bayesian Optimization</option>
                    <option value="grid">Grid Search</option>
                    <option value="random">Random Search</option>
                    <option value="genetic">Genetic Algorithm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Budget</label>
                  <input
                    type="number"
                    min="10"
                    max="1000"
                    defaultValue="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Convergence Tolerance</label>
                  <input
                    type="number"
                    step="0.0001"
                    min="0.0001"
                    max="0.1"
                    defaultValue="0.001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parallel Workers</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="1">1 Worker</option>
                    <option value="2">2 Workers</option>
                    <option value="4">4 Workers</option>
                    <option value="8">8 Workers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Early Stopping</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                    <option value="aggressive">Aggressive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Validation Split</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="0.2">20%</option>
                    <option value="0.15">15%</option>
                    <option value="0.1">10%</option>
                    <option value="0.25">25%</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Apply Settings
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Reset to Default
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Auto-Configure
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAlgorithmOptimization;

