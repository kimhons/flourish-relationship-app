import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Play, Pause, RefreshCw, Settings, Download, Upload,
  Database, Cpu, Zap, Activity, TrendingUp, TrendingDown,
  CheckCircle, AlertTriangle, XCircle, Clock, Eye,
  GitBranch, Code, Monitor, BarChart3, Target,
  Layers, Brain, Server, HardDrive, Network
} from 'lucide-react';

const AIModelTrainingPipeline = () => {
  const [pipelineStatus, setPipelineStatus] = useState('ready');
  const [selectedPipeline, setSelectedPipeline] = useState('relationship_model');
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [showPipelineDetails, setShowPipelineDetails] = useState(false);
  const [currentStage, setCurrentStage] = useState('data_loading');

  // Training pipelines
  const trainingPipelines = [
    {
      id: 'relationship_model',
      name: 'Relationship Compatibility Model',
      type: 'Classification',
      status: 'running',
      progress: 67,
      eta: '2.3 hours',
      accuracy: 94.7,
      stage: 'training'
    },
    {
      id: 'user_behavior_model',
      name: 'User Behavior Prediction',
      type: 'Regression',
      status: 'completed',
      progress: 100,
      eta: 'Completed',
      accuracy: 91.3,
      stage: 'validation'
    },
    {
      id: 'sentiment_model',
      name: 'Sentiment Analysis Model',
      type: 'NLP',
      status: 'queued',
      progress: 0,
      eta: '4.1 hours',
      accuracy: 0,
      stage: 'pending'
    },
    {
      id: 'image_analysis_model',
      name: 'Profile Image Analysis',
      type: 'Computer Vision',
      status: 'running',
      progress: 34,
      eta: '3.7 hours',
      accuracy: 89.2,
      stage: 'preprocessing'
    },
    {
      id: 'recommendation_model',
      name: 'Match Recommendation Engine',
      type: 'Collaborative Filtering',
      status: 'error',
      progress: 45,
      eta: 'Error',
      accuracy: 0,
      stage: 'error'
    }
  ];

  // Pipeline stages
  const pipelineStages = [
    {
      stage: 'data_loading',
      name: 'Data Loading',
      status: 'completed',
      duration: '12 min',
      description: 'Loading and validating training datasets'
    },
    {
      stage: 'preprocessing',
      name: 'Data Preprocessing',
      status: 'completed',
      duration: '28 min',
      description: 'Cleaning, normalizing, and feature engineering'
    },
    {
      stage: 'validation',
      name: 'Data Validation',
      status: 'completed',
      duration: '8 min',
      description: 'Validating data quality and consistency'
    },
    {
      stage: 'training',
      name: 'Model Training',
      status: 'running',
      duration: '2.3 hours',
      description: 'Training neural network with backpropagation'
    },
    {
      stage: 'evaluation',
      name: 'Model Evaluation',
      status: 'pending',
      duration: '15 min',
      description: 'Evaluating model performance on test set'
    },
    {
      stage: 'optimization',
      name: 'Hyperparameter Optimization',
      status: 'pending',
      duration: '45 min',
      description: 'Optimizing model hyperparameters'
    },
    {
      stage: 'deployment',
      name: 'Model Deployment',
      status: 'pending',
      duration: '10 min',
      description: 'Deploying model to production environment'
    }
  ];

  // Pipeline metrics
  const pipelineMetrics = [
    {
      metric: 'Active Pipelines',
      value: '3',
      change: '+1',
      trend: 'up',
      description: 'Currently running training pipelines'
    },
    {
      metric: 'Avg Training Time',
      value: '3.2h',
      change: '-0.8h',
      trend: 'up',
      description: 'Average time to train models'
    },
    {
      metric: 'Success Rate',
      value: '94.7%',
      change: '+2.1%',
      trend: 'up',
      description: 'Pipeline completion success rate'
    },
    {
      metric: 'Resource Utilization',
      value: '87%',
      change: '+5%',
      trend: 'up',
      description: 'GPU and CPU utilization'
    }
  ];

  // Training progress over time
  const trainingProgressData = [
    { time: '00:00', accuracy: 0.45, loss: 1.23, valAccuracy: 0.42, valLoss: 1.28 },
    { time: '00:30', accuracy: 0.67, loss: 0.89, valAccuracy: 0.64, valLoss: 0.92 },
    { time: '01:00', accuracy: 0.78, loss: 0.67, valAccuracy: 0.75, valLoss: 0.71 },
    { time: '01:30', accuracy: 0.84, loss: 0.52, valAccuracy: 0.81, valLoss: 0.56 },
    { time: '02:00', accuracy: 0.89, loss: 0.41, valAccuracy: 0.86, valLoss: 0.45 },
    { time: '02:30', accuracy: 0.92, loss: 0.34, valAccuracy: 0.89, valLoss: 0.38 },
    { time: '03:00', accuracy: 0.94, loss: 0.29, valAccuracy: 0.91, valLoss: 0.33 },
    { time: '03:30', accuracy: 0.947, loss: 0.26, valAccuracy: 0.923, valLoss: 0.31 }
  ];

  // Resource utilization
  const resourceUtilization = [
    { resource: 'GPU Memory', used: 14.2, total: 16.0, percentage: 88.8 },
    { resource: 'GPU Compute', used: 87, total: 100, percentage: 87.0 },
    { resource: 'CPU Usage', used: 45, total: 100, percentage: 45.0 },
    { resource: 'RAM Usage', used: 28.4, total: 64.0, percentage: 44.4 },
    { resource: 'Storage I/O', used: 234, total: 500, percentage: 46.8 }
  ];

  // Data pipeline statistics
  const dataPipelineStats = [
    { dataset: 'User Profiles', records: 2450000, size: '12.3 GB', status: 'processed' },
    { dataset: 'Conversation Data', records: 8920000, size: '45.7 GB', status: 'processing' },
    { dataset: 'Image Data', records: 1230000, size: '89.2 GB', status: 'queued' },
    { dataset: 'Behavioral Data', records: 5670000, size: '23.4 GB', status: 'processed' },
    { dataset: 'Feedback Data', records: 890000, size: '4.2 GB', status: 'processed' }
  ];

  // Model performance comparison
  const modelPerformance = [
    { model: 'Baseline', accuracy: 78.3, precision: 76.8, recall: 79.1, f1Score: 77.9 },
    { model: 'Linear Model', accuracy: 82.7, precision: 81.2, recall: 84.3, f1Score: 82.7 },
    { model: 'Random Forest', accuracy: 87.4, precision: 86.1, recall: 88.7, f1Score: 87.4 },
    { model: 'Neural Network', accuracy: 94.7, precision: 93.8, recall: 95.6, f1Score: 94.7 },
    { model: 'Ensemble', accuracy: 96.2, precision: 95.4, recall: 97.1, f1Score: 96.2 }
  ];

  // Pipeline configuration
  const pipelineConfig = [
    {
      component: 'Data Loader',
      config: 'Batch size: 1000, Workers: 8',
      status: 'configured'
    },
    {
      component: 'Preprocessor',
      config: 'Normalization: StandardScaler, Encoding: OneHot',
      status: 'configured'
    },
    {
      component: 'Feature Engineer',
      config: 'PCA: 256 components, Selection: SelectKBest',
      status: 'configured'
    },
    {
      component: 'Model Trainer',
      config: 'Algorithm: Neural Network, Optimizer: Adam',
      status: 'configured'
    },
    {
      component: 'Evaluator',
      config: 'Metrics: Accuracy, Precision, Recall, F1',
      status: 'configured'
    }
  ];

  // Training logs
  const trainingLogs = [
    { timestamp: '14:32:15', level: 'INFO', message: 'Starting epoch 45/100' },
    { timestamp: '14:32:18', level: 'INFO', message: 'Batch 234/500 - Loss: 0.267, Accuracy: 94.2%' },
    { timestamp: '14:32:21', level: 'INFO', message: 'Validation accuracy improved: 94.7%' },
    { timestamp: '14:32:24', level: 'WARNING', message: 'Learning rate reduced to 0.0005' },
    { timestamp: '14:32:27', level: 'INFO', message: 'Model checkpoint saved' },
    { timestamp: '14:32:30', level: 'INFO', message: 'Batch 235/500 - Loss: 0.264, Accuracy: 94.3%' }
  ];

  useEffect(() => {
    let interval;
    if (pipelineStatus === 'running') {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setPipelineStatus('completed');
            return 100;
          }
          return prev + Math.random() * 2;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pipelineStatus]);

  const startPipeline = () => {
    setPipelineStatus('running');
    setTrainingProgress(0);
    console.log(`Starting pipeline: ${selectedPipeline}`);
  };

  const stopPipeline = () => {
    setPipelineStatus('stopped');
    console.log('Pipeline stopped');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'queued': return 'text-yellow-600 bg-yellow-100';
      case 'stopped': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStageStatus = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'running': return 'text-blue-600';
      case 'pending': return 'text-gray-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'INFO': return 'text-blue-600';
      case 'WARNING': return 'text-yellow-600';
      case 'ERROR': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-green-600" />
              AI Model Training Pipeline
            </h1>
            <p className="text-gray-600">
              Automated machine learning pipeline for model training, validation, and deployment
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${
                pipelineStatus === 'running' ? 'bg-green-500 animate-pulse' : 
                pipelineStatus === 'completed' ? 'bg-blue-500' : 'bg-gray-400'
              }`}></div>
              <span className="text-sm text-gray-600">
                {pipelineStatus === 'running' ? `Running... ${trainingProgress.toFixed(1)}%` : 
                 pipelineStatus === 'completed' ? 'Completed' : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={pipelineStatus === 'running' ? stopPipeline : startPipeline}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                pipelineStatus === 'running' 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {pipelineStatus === 'running' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {pipelineStatus === 'running' ? 'Stop Pipeline' : 'Start Pipeline'}
            </button>
            
            <button
              onClick={() => setShowPipelineDetails(!showPipelineDetails)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showPipelineDetails 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              Pipeline Details
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {pipelineMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Cpu className="w-6 h-6 text-green-600" />
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
          {/* Training Pipelines */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Training Pipelines</h3>
            <div className="space-y-3">
              {trainingPipelines.slice(0, 4).map((pipeline) => (
                <button
                  key={pipeline.id}
                  onClick={() => setSelectedPipeline(pipeline.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedPipeline === pipeline.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{pipeline.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pipeline.status)}`}>
                      {pipeline.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{pipeline.type}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress:</span>
                    <span className="font-semibold text-green-600">{pipeline.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div 
                      className="bg-green-500 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${pipeline.progress}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pipeline Stages */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Pipeline Stages</h3>
            <div className="space-y-3">
              {pipelineStages.slice(0, 5).map((stage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    stage.status === 'completed' ? 'bg-green-500' :
                    stage.status === 'running' ? 'bg-blue-500 animate-pulse' :
                    stage.status === 'error' ? 'bg-red-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <div className={`font-medium ${getStageStatus(stage.status)}`}>
                      {stage.name}
                    </div>
                    <div className="text-xs text-gray-500">{stage.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Utilization */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Resource Usage</h3>
            <div className="space-y-3">
              {resourceUtilization.slice(0, 4).map((resource, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{resource.resource}</div>
                    <div className="text-sm text-gray-600">
                      {resource.resource.includes('Memory') || resource.resource.includes('RAM') ? 
                        `${resource.used} / ${resource.total} GB` :
                        resource.resource.includes('I/O') ?
                        `${resource.used} / ${resource.total} MB/s` :
                        `${resource.used}%`
                      }
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{resource.percentage.toFixed(1)}%</div>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          resource.percentage > 80 ? 'bg-red-500' :
                          resource.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${resource.percentage}%` }}
                      />
                    </div>
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
                <Upload className="w-4 h-4" />
                Upload Dataset
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Model
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Pipeline Config
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Training Progress */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Training Accuracy" />
                <Line yAxisId="left" type="monotone" dataKey="valAccuracy" stroke="#3b82f6" strokeWidth={2} name="Validation Accuracy" />
                <Line yAxisId="right" type="monotone" dataKey="loss" stroke="#f59e0b" strokeWidth={2} name="Training Loss" />
                <Line yAxisId="right" type="monotone" dataKey="valLoss" stroke="#ef4444" strokeWidth={2} name="Validation Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Data Pipeline & Model Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Pipeline Status</h3>
              <div className="space-y-3">
                {dataPipelineStats.map((dataset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{dataset.dataset}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dataset.status)}`}>
                          {dataset.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{dataset.records.toLocaleString()} records</span>
                        <span className="text-gray-500">{dataset.size}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={modelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#10b981" name="Accuracy" />
                  <Bar dataKey="f1Score" fill="#3b82f6" name="F1 Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pipeline Configuration */}
          {showPipelineDetails && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pipelineConfig.map((component, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{component.component}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                        {component.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{component.config}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Training Logs */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Logs</h3>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm max-h-64 overflow-y-auto">
              {trainingLogs.map((log, index) => (
                <div key={index} className="flex items-start gap-3 mb-1">
                  <span className="text-gray-400">{log.timestamp}</span>
                  <span className={`font-medium ${getLogLevelColor(log.level)}`}>{log.level}</span>
                  <span className="text-gray-300 flex-1">{log.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Pipeline Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Pipeline Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Training Framework</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="tensorflow">TensorFlow</option>
                  <option value="pytorch">PyTorch</option>
                  <option value="scikit">Scikit-learn</option>
                  <option value="xgboost">XGBoost</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Compute Environment</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="gpu">GPU Accelerated</option>
                  <option value="cpu">CPU Only</option>
                  <option value="distributed">Distributed Training</option>
                  <option value="cloud">Cloud Training</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Validation</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="strict">Strict Validation</option>
                  <option value="moderate">Moderate Validation</option>
                  <option value="basic">Basic Validation</option>
                  <option value="none">No Validation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Checkpoint Frequency</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="epoch">Every Epoch</option>
                  <option value="improvement">On Improvement</option>
                  <option value="time">Every 30 Minutes</option>
                  <option value="manual">Manual Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Early Stopping</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                  <option value="custom">Custom Criteria</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Versioning</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="auto">Automatic</option>
                  <option value="semantic">Semantic Versioning</option>
                  <option value="timestamp">Timestamp Based</option>
                  <option value="manual">Manual Versioning</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Apply Configuration
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reset to Default
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModelTrainingPipeline;

