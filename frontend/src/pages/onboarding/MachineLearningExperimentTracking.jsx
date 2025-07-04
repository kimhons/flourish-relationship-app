import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  FlaskConical, GitBranch, Play, Pause, Square, RotateCcw,
  TrendingUp, TrendingDown, Activity, Clock, CheckCircle,
  AlertTriangle, XCircle, Eye, Download, Upload, Save,
  Share2, Filter, Search, Settings, Award, Target,
  BarChart3, PieChart, LineChart as LineChartIcon, Zap
} from 'lucide-react';

const MachineLearningExperimentTracking = () => {
  const [selectedExperiment, setSelectedExperiment] = useState('exp_001');
  const [experimentStatus, setExperimentStatus] = useState('running');
  const [showComparison, setShowComparison] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Experiments data
  const experiments = [
    {
      id: 'exp_001',
      name: 'Deep Neural Network v3.2',
      status: 'running',
      accuracy: 94.7,
      loss: 0.263,
      duration: '2h 34m',
      startTime: '2025-01-07 14:30',
      model: 'DNN',
      dataset: 'relationship_data_v2',
      parameters: { lr: 0.001, batch_size: 64, epochs: 100 },
      progress: 67
    },
    {
      id: 'exp_002',
      name: 'Transformer Architecture',
      status: 'completed',
      accuracy: 96.2,
      loss: 0.198,
      duration: '4h 12m',
      startTime: '2025-01-07 10:15',
      model: 'Transformer',
      dataset: 'relationship_data_v2',
      parameters: { lr: 0.0005, batch_size: 32, epochs: 150 },
      progress: 100
    },
    {
      id: 'exp_003',
      name: 'Ensemble Learning',
      status: 'failed',
      accuracy: 89.3,
      loss: 0.421,
      duration: '1h 45m',
      startTime: '2025-01-07 08:00',
      model: 'Ensemble',
      dataset: 'relationship_data_v1',
      parameters: { lr: 0.01, batch_size: 128, epochs: 50 },
      progress: 34
    },
    {
      id: 'exp_004',
      name: 'CNN Feature Extraction',
      status: 'queued',
      accuracy: null,
      loss: null,
      duration: null,
      startTime: null,
      model: 'CNN',
      dataset: 'image_data_v1',
      parameters: { lr: 0.001, batch_size: 16, epochs: 200 },
      progress: 0
    },
    {
      id: 'exp_005',
      name: 'LSTM Sequence Model',
      status: 'paused',
      accuracy: 91.8,
      loss: 0.334,
      duration: '3h 22m',
      startTime: '2025-01-06 16:45',
      model: 'LSTM',
      dataset: 'sequence_data_v1',
      parameters: { lr: 0.002, batch_size: 64, epochs: 120 },
      progress: 78
    }
  ];

  // Experiment metrics over time
  const experimentMetrics = [
    { epoch: 1, accuracy: 0.65, loss: 0.89, val_accuracy: 0.62, val_loss: 0.92, lr: 0.001 },
    { epoch: 10, accuracy: 0.78, loss: 0.67, val_accuracy: 0.75, val_loss: 0.71, lr: 0.001 },
    { epoch: 20, accuracy: 0.84, loss: 0.52, val_accuracy: 0.81, val_loss: 0.56, lr: 0.0008 },
    { epoch: 30, accuracy: 0.89, loss: 0.41, val_accuracy: 0.86, val_loss: 0.45, lr: 0.0006 },
    { epoch: 40, accuracy: 0.92, loss: 0.34, val_accuracy: 0.89, val_loss: 0.38, lr: 0.0005 },
    { epoch: 50, accuracy: 0.94, loss: 0.29, val_accuracy: 0.91, val_loss: 0.33, lr: 0.0004 },
    { epoch: 60, accuracy: 0.947, loss: 0.263, val_accuracy: 0.923, val_loss: 0.31, lr: 0.0003 }
  ];

  // Hyperparameter comparison
  const hyperparameterComparison = [
    { experiment: 'DNN v3.2', lr: 0.001, batch_size: 64, accuracy: 94.7, training_time: 154 },
    { experiment: 'Transformer', lr: 0.0005, batch_size: 32, accuracy: 96.2, training_time: 252 },
    { experiment: 'Ensemble', lr: 0.01, batch_size: 128, accuracy: 89.3, training_time: 105 },
    { experiment: 'LSTM', lr: 0.002, batch_size: 64, accuracy: 91.8, training_time: 202 }
  ];

  // Model performance comparison
  const modelComparison = [
    { model: 'DNN', accuracy: 94.7, precision: 93.8, recall: 95.6, f1_score: 94.7, inference_time: 45 },
    { model: 'Transformer', accuracy: 96.2, precision: 95.4, recall: 97.1, f1_score: 96.2, inference_time: 78 },
    { model: 'Ensemble', accuracy: 89.3, precision: 88.1, recall: 90.5, f1_score: 89.3, inference_time: 123 },
    { model: 'LSTM', accuracy: 91.8, precision: 90.9, recall: 92.7, f1_score: 91.8, inference_time: 67 },
    { model: 'CNN', accuracy: 93.4, precision: 92.6, recall: 94.2, f1_score: 93.4, inference_time: 34 }
  ];

  // Experiment statistics
  const experimentStats = [
    {
      metric: 'Total Experiments',
      value: '247',
      change: '+23',
      trend: 'up',
      description: 'All time experiments'
    },
    {
      metric: 'Success Rate',
      value: '87.3%',
      change: '+5.2%',
      trend: 'up',
      description: 'Completed successfully'
    },
    {
      metric: 'Best Accuracy',
      value: '96.2%',
      change: '+1.8%',
      trend: 'up',
      description: 'Highest achieved'
    },
    {
      metric: 'Avg Duration',
      value: '3.2h',
      change: '-0.8h',
      trend: 'up',
      description: 'Average training time'
    }
  ];

  // Resource utilization
  const resourceUtilization = [
    { time: '00:00', gpu: 85, cpu: 45, memory: 67, storage: 34 },
    { time: '04:00', gpu: 92, cpu: 52, memory: 71, storage: 38 },
    { time: '08:00', gpu: 88, cpu: 48, memory: 69, storage: 42 },
    { time: '12:00', gpu: 94, cpu: 56, memory: 73, storage: 45 },
    { time: '16:00', gpu: 91, cpu: 51, memory: 70, storage: 41 },
    { time: '20:00', gpu: 87, cpu: 47, memory: 68, storage: 39 },
    { time: '24:00', gpu: 89, cpu: 49, memory: 69, storage: 43 }
  ];

  // Experiment tags and metadata
  const experimentTags = [
    'deep-learning', 'transformer', 'ensemble', 'cnn', 'lstm',
    'hyperparameter-tuning', 'feature-engineering', 'data-augmentation',
    'regularization', 'optimization', 'architecture-search'
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'experiment_started',
      message: 'Deep Neural Network v3.2 experiment started',
      timestamp: '2 minutes ago',
      experiment: 'exp_001'
    },
    {
      id: 2,
      type: 'experiment_completed',
      message: 'Transformer Architecture achieved 96.2% accuracy',
      timestamp: '1 hour ago',
      experiment: 'exp_002'
    },
    {
      id: 3,
      type: 'experiment_failed',
      message: 'Ensemble Learning failed due to memory error',
      timestamp: '3 hours ago',
      experiment: 'exp_003'
    },
    {
      id: 4,
      type: 'model_saved',
      message: 'Best model checkpoint saved for Transformer',
      timestamp: '4 hours ago',
      experiment: 'exp_002'
    }
  ];

  // Experiment configurations
  const experimentConfigs = {
    exp_001: {
      model_config: {
        layers: 8,
        hidden_units: [1024, 512, 256, 128],
        activation: 'relu',
        dropout: 0.2,
        optimizer: 'adam'
      },
      training_config: {
        learning_rate: 0.001,
        batch_size: 64,
        epochs: 100,
        validation_split: 0.2,
        early_stopping: true
      },
      data_config: {
        dataset: 'relationship_data_v2',
        preprocessing: ['normalization', 'feature_scaling'],
        augmentation: false,
        train_size: 0.8
      }
    }
  };

  useEffect(() => {
    // Simulate real-time updates for running experiments
    const interval = setInterval(() => {
      if (experimentStatus === 'running') {
        // Update progress and metrics
        console.log('Updating experiment metrics...');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [experimentStatus]);

  const filteredExperiments = experiments.filter(exp => {
    const matchesStatus = filterStatus === 'all' || exp.status === filterStatus;
    const matchesSearch = exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.model.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'paused': return 'text-yellow-600 bg-yellow-100';
      case 'queued': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return <Play className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'failed': return <XCircle className="w-4 h-4" />;
      case 'paused': return <Pause className="w-4 h-4" />;
      case 'queued': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'experiment_started': return <Play className="w-4 h-4 text-blue-600" />;
      case 'experiment_completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'experiment_failed': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'model_saved': return <Save className="w-4 h-4 text-purple-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const startExperiment = (experimentId) => {
    console.log(`Starting experiment: ${experimentId}`);
    setExperimentStatus('running');
  };

  const pauseExperiment = (experimentId) => {
    console.log(`Pausing experiment: ${experimentId}`);
    setExperimentStatus('paused');
  };

  const stopExperiment = (experimentId) => {
    console.log(`Stopping experiment: ${experimentId}`);
    setExperimentStatus('stopped');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-purple-600" />
              Machine Learning Experiment Tracking
            </h1>
            <p className="text-gray-600">
              Comprehensive experiment management, version control, and performance tracking for ML models
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search experiments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="paused">Paused</option>
              <option value="queued">Queued</option>
            </select>
            
            <button
              onClick={() => setShowComparison(!showComparison)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showComparison 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Compare
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Play className="w-4 h-4" />
              New Experiment
            </button>
          </div>
        </div>
      </div>

      {/* Experiment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {experimentStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FlaskConical className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{stat.metric}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Experiments List */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Active Experiments</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredExperiments.map((experiment) => (
                <button
                  key={experiment.id}
                  onClick={() => setSelectedExperiment(experiment.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedExperiment === experiment.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900 truncate">{experiment.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(experiment.status)}`}>
                      {getStatusIcon(experiment.status)}
                      {experiment.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{experiment.model}</div>
                  {experiment.accuracy && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Accuracy:</span>
                        <div className="font-semibold text-purple-600">{experiment.accuracy}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-semibold text-green-600">{experiment.duration}</div>
                      </div>
                    </div>
                  )}
                  {experiment.status === 'running' && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${experiment.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{experiment.progress}% complete</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 mb-1">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiment Tags */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {experimentTags.slice(0, 8).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium cursor-pointer hover:bg-purple-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Import Experiment
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Results
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <GitBranch className="w-4 h-4" />
                Clone Experiment
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Experiment Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Training Progress</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => startExperiment(selectedExperiment)}
                  className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                  title="Start"
                >
                  <Play className="w-4 h-4" />
                </button>
                <button
                  onClick={() => pauseExperiment(selectedExperiment)}
                  className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors"
                  title="Pause"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => stopExperiment(selectedExperiment)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  title="Stop"
                >
                  <Square className="w-4 h-4" />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={experimentMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={2} name="Training Accuracy" />
                <Line yAxisId="left" type="monotone" dataKey="val_accuracy" stroke="#3b82f6" strokeWidth={2} name="Validation Accuracy" />
                <Line yAxisId="right" type="monotone" dataKey="loss" stroke="#f59e0b" strokeWidth={2} name="Training Loss" />
                <Line yAxisId="right" type="monotone" dataKey="val_loss" stroke="#ef4444" strokeWidth={2} name="Validation Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Model Comparison & Resource Utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={modelComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#8b5cf6" name="Accuracy %" />
                  <Bar dataKey="f1_score" fill="#3b82f6" name="F1 Score %" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Utilization</h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={resourceUtilization}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="gpu" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" name="GPU %" />
                  <Area type="monotone" dataKey="cpu" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="CPU %" />
                  <Area type="monotone" dataKey="memory" stackId="1" stroke="#10b981" fill="#10b981" name="Memory %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Hyperparameter Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hyperparameter Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Experiment</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Learning Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Batch Size</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Training Time</th>
                  </tr>
                </thead>
                <tbody>
                  {hyperparameterComparison.map((exp, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{exp.experiment}</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">{exp.lr}</td>
                      <td className="py-3 px-4 text-blue-600 font-semibold">{exp.batch_size}</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{exp.accuracy}%</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">{exp.training_time}m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experiment Configuration */}
          {selectedExperiment && experimentConfigs[selectedExperiment] && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experiment Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Model Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(experimentConfigs[selectedExperiment].model_config).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="font-medium text-gray-900">
                          {Array.isArray(value) ? value.join(', ') : value.toString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Training Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(experimentConfigs[selectedExperiment].training_config).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="font-medium text-gray-900">{value.toString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Data Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(experimentConfigs[selectedExperiment].data_config).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="font-medium text-gray-900">
                          {Array.isArray(value) ? value.join(', ') : value.toString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Clone Configuration
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Export Config
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Save as Template
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineLearningExperimentTracking;

