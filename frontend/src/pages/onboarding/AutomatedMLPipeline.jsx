import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Workflow, Play, Pause, Square, RotateCcw, Settings,
  CheckCircle, AlertTriangle, XCircle, Clock, Activity,
  TrendingUp, TrendingDown, Zap, Target, Eye, Download,
  Upload, Save, Share2, Filter, Search, Award, Brain
} from 'lucide-react';

const AutomatedMLPipeline = () => {
  const [selectedPipeline, setSelectedPipeline] = useState('pipeline_001');
  const [pipelineStatus, setPipelineStatus] = useState('running');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [autoRetrain, setAutoRetrain] = useState(true);

  // ML Pipelines
  const mlPipelines = [
    {
      id: 'pipeline_001',
      name: 'Relationship Matching Pipeline',
      status: 'running',
      stage: 'feature_engineering',
      progress: 67,
      accuracy: 94.7,
      last_run: '2025-01-07 14:30',
      duration: '2h 34m',
      data_processed: '2.4M records',
      model_type: 'Deep Neural Network'
    },
    {
      id: 'pipeline_002',
      name: 'Sentiment Analysis Pipeline',
      status: 'completed',
      stage: 'model_validation',
      progress: 100,
      accuracy: 96.2,
      last_run: '2025-01-07 10:15',
      duration: '1h 45m',
      data_processed: '1.8M records',
      model_type: 'Transformer'
    },
    {
      id: 'pipeline_003',
      name: 'Image Classification Pipeline',
      status: 'failed',
      stage: 'data_preprocessing',
      progress: 23,
      accuracy: null,
      last_run: '2025-01-07 08:00',
      duration: '45m',
      data_processed: '450K images',
      model_type: 'CNN'
    },
    {
      id: 'pipeline_004',
      name: 'Behavior Prediction Pipeline',
      status: 'queued',
      stage: 'waiting',
      progress: 0,
      accuracy: null,
      last_run: null,
      duration: null,
      data_processed: null,
      model_type: 'LSTM'
    },
    {
      id: 'pipeline_005',
      name: 'Recommendation Engine Pipeline',
      status: 'paused',
      stage: 'hyperparameter_tuning',
      progress: 78,
      accuracy: 91.8,
      last_run: '2025-01-06 16:45',
      duration: '3h 22m',
      data_processed: '3.2M interactions',
      model_type: 'Collaborative Filtering'
    }
  ];

  // Pipeline stages
  const pipelineStages = [
    { stage: 'data_ingestion', name: 'Data Ingestion', duration: '15m', status: 'completed' },
    { stage: 'data_validation', name: 'Data Validation', duration: '8m', status: 'completed' },
    { stage: 'data_preprocessing', name: 'Data Preprocessing', duration: '25m', status: 'completed' },
    { stage: 'feature_engineering', name: 'Feature Engineering', duration: '35m', status: 'running' },
    { stage: 'model_training', name: 'Model Training', duration: '45m', status: 'pending' },
    { stage: 'model_evaluation', name: 'Model Evaluation', duration: '12m', status: 'pending' },
    { stage: 'hyperparameter_tuning', name: 'Hyperparameter Tuning', duration: '30m', status: 'pending' },
    { stage: 'model_validation', name: 'Model Validation', duration: '18m', status: 'pending' },
    { stage: 'model_deployment', name: 'Model Deployment', duration: '10m', status: 'pending' }
  ];

  // Pipeline metrics
  const pipelineMetrics = [
    {
      metric: 'Active Pipelines',
      value: '8',
      change: '+2',
      trend: 'up',
      description: 'Currently running'
    },
    {
      metric: 'Success Rate',
      value: '94.3%',
      change: '+3.1%',
      trend: 'up',
      description: 'Pipeline completion'
    },
    {
      metric: 'Avg Duration',
      value: '2.1h',
      change: '-0.4h',
      trend: 'up',
      description: 'End-to-end time'
    },
    {
      metric: 'Data Processed',
      value: '12.8M',
      change: '+2.3M',
      trend: 'up',
      description: 'Records per day'
    }
  ];

  // Performance over time
  const performanceOverTime = [
    { time: '00:00', accuracy: 92.3, throughput: 2100, errors: 8, duration: 145 },
    { time: '04:00', accuracy: 93.1, throughput: 2300, errors: 5, duration: 138 },
    { time: '08:00', accuracy: 94.2, throughput: 2400, errors: 3, duration: 132 },
    { time: '12:00', accuracy: 94.7, throughput: 2500, errors: 2, duration: 126 },
    { time: '16:00', accuracy: 95.1, throughput: 2600, errors: 1, duration: 120 },
    { time: '20:00', accuracy: 94.8, throughput: 2450, errors: 4, duration: 128 },
    { time: '24:00', accuracy: 94.7, throughput: 2400, errors: 3, duration: 132 }
  ];

  // Data quality metrics
  const dataQualityMetrics = [
    { metric: 'Completeness', score: 97.2, threshold: 95.0, status: 'good' },
    { metric: 'Validity', score: 98.1, threshold: 96.0, status: 'excellent' },
    { metric: 'Consistency', score: 94.7, threshold: 93.0, status: 'good' },
    { metric: 'Accuracy', score: 96.8, threshold: 95.0, status: 'excellent' },
    { metric: 'Uniqueness', score: 99.3, threshold: 98.0, status: 'excellent' },
    { metric: 'Timeliness', score: 92.4, threshold: 90.0, status: 'good' }
  ];

  // Feature engineering results
  const featureEngineering = [
    { feature: 'User Interaction Score', importance: 0.28, type: 'engineered', status: 'active' },
    { feature: 'Compatibility Index', importance: 0.24, type: 'engineered', status: 'active' },
    { feature: 'Communication Pattern', importance: 0.19, type: 'engineered', status: 'active' },
    { feature: 'Activity Frequency', importance: 0.15, type: 'raw', status: 'active' },
    { feature: 'Profile Completeness', importance: 0.08, type: 'engineered', status: 'active' },
    { feature: 'Response Time', importance: 0.06, type: 'raw', status: 'deprecated' }
  ];

  // Model comparison
  const modelComparison = [
    { model: 'DNN v3.2', accuracy: 94.7, precision: 93.8, recall: 95.6, f1_score: 94.7, training_time: 154 },
    { model: 'Transformer v2.1', accuracy: 96.2, precision: 95.4, recall: 97.1, f1_score: 96.2, training_time: 252 },
    { model: 'CNN v1.8', accuracy: 93.4, precision: 92.6, recall: 94.2, f1_score: 93.4, training_time: 89 },
    { model: 'LSTM v2.3', accuracy: 91.8, precision: 90.9, recall: 92.7, f1_score: 91.8, training_time: 202 },
    { model: 'Ensemble v1.5', accuracy: 95.8, precision: 94.9, recall: 96.7, f1_score: 95.8, training_time: 318 }
  ];

  // Automation settings
  const automationSettings = {
    auto_retrain: true,
    retrain_threshold: 0.02,
    data_drift_detection: true,
    model_drift_detection: true,
    auto_feature_selection: true,
    hyperparameter_optimization: true,
    auto_deployment: false,
    notification_alerts: true
  };

  // Pipeline configuration
  const pipelineConfig = {
    data_source: 'PostgreSQL Database',
    batch_size: 1000,
    validation_split: 0.2,
    test_split: 0.1,
    cross_validation_folds: 5,
    early_stopping: true,
    max_epochs: 100,
    patience: 10
  };

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'pipeline_started',
      message: 'Relationship Matching Pipeline started automatically',
      timestamp: '5 minutes ago',
      pipeline: 'pipeline_001'
    },
    {
      id: 2,
      type: 'model_improved',
      message: 'Sentiment Analysis model accuracy improved to 96.2%',
      timestamp: '2 hours ago',
      pipeline: 'pipeline_002'
    },
    {
      id: 3,
      type: 'data_drift_detected',
      message: 'Data drift detected in Image Classification pipeline',
      timestamp: '4 hours ago',
      pipeline: 'pipeline_003'
    },
    {
      id: 4,
      type: 'auto_retrain_triggered',
      message: 'Auto-retrain triggered for Behavior Prediction model',
      timestamp: '6 hours ago',
      pipeline: 'pipeline_004'
    }
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (pipelineStatus === 'running') {
        console.log('Updating pipeline metrics...');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [pipelineStatus]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': case 'excellent': return 'text-green-600 bg-green-100';
      case 'failed': case 'error': return 'text-red-600 bg-red-100';
      case 'paused': case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'queued': case 'pending': return 'text-gray-600 bg-gray-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'deprecated': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': case 'active': return <Activity className="w-4 h-4 animate-spin" />;
      case 'completed': case 'excellent': case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'failed': case 'error': return <XCircle className="w-4 h-4" />;
      case 'paused': case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'queued': case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'pipeline_started': return <Play className="w-4 h-4 text-blue-600" />;
      case 'model_improved': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'data_drift_detected': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'auto_retrain_triggered': return <RotateCcw className="w-4 h-4 text-purple-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getQualityColor = (score, threshold) => {
    if (score >= threshold + 2) return 'text-green-600';
    if (score >= threshold) return 'text-blue-600';
    if (score >= threshold - 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  const startPipeline = (pipelineId) => {
    console.log(`Starting pipeline: ${pipelineId}`);
    setPipelineStatus('running');
  };

  const pausePipeline = (pipelineId) => {
    console.log(`Pausing pipeline: ${pipelineId}`);
    setPipelineStatus('paused');
  };

  const stopPipeline = (pipelineId) => {
    console.log(`Stopping pipeline: ${pipelineId}`);
    setPipelineStatus('stopped');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Workflow className="w-8 h-8 text-green-600" />
              Automated ML Pipeline
            </h1>
            <p className="text-gray-600">
              End-to-end automated machine learning workflows with intelligent feature engineering and model optimization
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-600">8 Active Pipelines</span>
            </div>
            
            <button
              onClick={() => setAutoRetrain(!autoRetrain)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoRetrain 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              Auto-Retrain: {autoRetrain ? 'ON' : 'OFF'}
            </button>
            
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAdvanced 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Advanced
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Play className="w-4 h-4" />
              Create Pipeline
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
                <Workflow className="w-6 h-6 text-green-600" />
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
          {/* Active Pipelines */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Active Pipelines</h3>
            <div className="space-y-3">
              {mlPipelines.map((pipeline) => (
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
                    <div className="font-medium text-gray-900 truncate">{pipeline.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(pipeline.status)}`}>
                      {getStatusIcon(pipeline.status)}
                      {pipeline.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{pipeline.model_type}</div>
                  {pipeline.accuracy && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Accuracy:</span>
                        <div className="font-semibold text-green-600">{pipeline.accuracy}%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-semibold text-blue-600">{pipeline.duration}</div>
                      </div>
                    </div>
                  )}
                  {pipeline.status === 'running' && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${pipeline.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{pipeline.progress}% complete</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Data Quality Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Data Quality</h3>
            <div className="space-y-3">
              {dataQualityMetrics.map((metric, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{metric.metric}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-lg font-bold ${getQualityColor(metric.score, metric.threshold)}`}>
                      {metric.score}%
                    </span>
                    <span className="text-sm text-gray-600">Target: {metric.threshold}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metric.score >= metric.threshold + 2 ? 'bg-green-500' :
                        metric.score >= metric.threshold ? 'bg-blue-500' :
                        metric.score >= metric.threshold - 2 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
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

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Import Pipeline
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Results
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Save className="w-4 h-4" />
                Save Template
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Pipeline Progress */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pipeline Progress</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => startPipeline(selectedPipeline)}
                  className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                  title="Start"
                >
                  <Play className="w-4 h-4" />
                </button>
                <button
                  onClick={() => pausePipeline(selectedPipeline)}
                  className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors"
                  title="Pause"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => stopPipeline(selectedPipeline)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                  title="Stop"
                >
                  <Square className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pipelineStages.map((stage, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 transition-colors ${
                  stage.status === 'completed' ? 'border-green-200 bg-green-50' :
                  stage.status === 'running' ? 'border-blue-200 bg-blue-50' :
                  stage.status === 'failed' ? 'border-red-200 bg-red-50' :
                  'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{stage.name}</span>
                    <span className={`p-1 rounded-full ${getStatusColor(stage.status)}`}>
                      {getStatusIcon(stage.status)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Duration: {stage.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics & Feature Engineering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Over Time</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceOverTime}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy %" />
                  <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#3b82f6" strokeWidth={2} name="Throughput" />
                  <Line yAxisId="right" type="monotone" dataKey="duration" stroke="#f59e0b" strokeWidth={2} name="Duration (min)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Importance</h3>
              <div className="space-y-3">
                {featureEngineering.map((feature, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{feature.feature}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          feature.type === 'engineered' ? 'text-purple-600 bg-purple-100' : 'text-blue-600 bg-blue-100'
                        }`}>
                          {feature.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                          {feature.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Importance:</span>
                      <span className="font-semibold text-green-600">{(feature.importance * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${feature.importance * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Model Comparison */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Model</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Precision</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Recall</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">F1 Score</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Training Time</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((model, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{model.model}</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">{model.accuracy}%</td>
                      <td className="py-3 px-4 text-blue-600 font-semibold">{model.precision}%</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">{model.recall}%</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">{model.f1_score}%</td>
                      <td className="py-3 px-4 text-gray-700 font-semibold">{model.training_time}m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advanced Configuration */}
          {showAdvanced && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Pipeline Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Automation Settings</h4>
                  <div className="space-y-3">
                    {Object.entries(automationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 capitalize">{key.replace('_', ' ')}</span>
                        <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
                          value ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            value ? 'translate-x-4' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Pipeline Configuration</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(pipelineConfig).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="font-medium text-gray-900">{value.toString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Resource Allocation</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CPU Cores</label>
                      <input
                        type="number"
                        defaultValue="8"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Memory (GB)</label>
                      <input
                        type="number"
                        defaultValue="32"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GPU Count</label>
                      <input
                        type="number"
                        defaultValue="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
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

export default AutomatedMLPipeline;

