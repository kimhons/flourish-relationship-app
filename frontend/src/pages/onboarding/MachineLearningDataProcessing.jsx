import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Database, Filter, Shuffle, TrendingUp, TrendingDown,
  Upload, Download, RefreshCw, Settings, Eye, Target,
  CheckCircle, AlertTriangle, XCircle, Clock, Activity,
  BarChart3, PieChart as PieChartIcon, FileText, Zap,
  Layers, Brain, Server, HardDrive, Network, Cpu
} from 'lucide-react';

const MachineLearningDataProcessing = () => {
  const [processingStatus, setProcessingStatus] = useState('ready');
  const [selectedDataset, setSelectedDataset] = useState('user_profiles');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showDataPreview, setShowDataPreview] = useState(false);
  const [currentStage, setCurrentStage] = useState('loading');

  // Datasets
  const datasets = [
    {
      id: 'user_profiles',
      name: 'User Profiles',
      size: '12.3 GB',
      records: 2450000,
      features: 127,
      status: 'processed',
      quality: 94.7,
      completeness: 98.2
    },
    {
      id: 'conversation_data',
      name: 'Conversation Data',
      size: '45.7 GB',
      records: 8920000,
      features: 89,
      status: 'processing',
      quality: 91.3,
      completeness: 96.8
    },
    {
      id: 'behavioral_data',
      name: 'Behavioral Data',
      size: '23.4 GB',
      records: 5670000,
      features: 156,
      status: 'processed',
      quality: 96.1,
      completeness: 99.1
    },
    {
      id: 'image_metadata',
      name: 'Image Metadata',
      size: '8.9 GB',
      records: 1230000,
      features: 234,
      status: 'queued',
      quality: 0,
      completeness: 0
    },
    {
      id: 'feedback_data',
      name: 'Feedback Data',
      size: '4.2 GB',
      records: 890000,
      features: 67,
      status: 'processed',
      quality: 97.8,
      completeness: 94.5
    }
  ];

  // Processing metrics
  const processingMetrics = [
    {
      metric: 'Data Quality Score',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Overall data quality assessment'
    },
    {
      metric: 'Processing Speed',
      value: '2.4M/min',
      change: '+15%',
      trend: 'up',
      description: 'Records processed per minute'
    },
    {
      metric: 'Feature Engineering',
      value: '156',
      change: '+23',
      trend: 'up',
      description: 'Total engineered features'
    },
    {
      metric: 'Data Completeness',
      value: '97.2%',
      change: '+1.8%',
      trend: 'up',
      description: 'Percentage of complete records'
    }
  ];

  // Processing stages
  const processingStages = [
    {
      stage: 'loading',
      name: 'Data Loading',
      status: 'completed',
      duration: '8 min',
      description: 'Loading raw data from sources'
    },
    {
      stage: 'validation',
      name: 'Data Validation',
      status: 'completed',
      duration: '12 min',
      description: 'Validating data integrity and format'
    },
    {
      stage: 'cleaning',
      name: 'Data Cleaning',
      status: 'running',
      duration: '25 min',
      description: 'Removing duplicates and handling missing values'
    },
    {
      stage: 'transformation',
      name: 'Data Transformation',
      status: 'pending',
      duration: '18 min',
      description: 'Normalizing and encoding categorical variables'
    },
    {
      stage: 'feature_engineering',
      name: 'Feature Engineering',
      status: 'pending',
      duration: '35 min',
      description: 'Creating new features and feature selection'
    },
    {
      stage: 'splitting',
      name: 'Data Splitting',
      status: 'pending',
      duration: '5 min',
      description: 'Splitting into train/validation/test sets'
    }
  ];

  // Data quality metrics
  const dataQualityMetrics = [
    { metric: 'Completeness', score: 97.2, threshold: 95, status: 'good' },
    { metric: 'Accuracy', score: 94.7, threshold: 90, status: 'good' },
    { metric: 'Consistency', score: 96.8, threshold: 95, status: 'good' },
    { metric: 'Validity', score: 98.1, threshold: 95, status: 'excellent' },
    { metric: 'Uniqueness', score: 89.3, threshold: 85, status: 'good' },
    { metric: 'Timeliness', score: 92.6, threshold: 90, status: 'good' }
  ];

  // Feature distribution
  const featureDistribution = [
    { category: 'Demographic', count: 23, percentage: 18.1 },
    { category: 'Behavioral', count: 34, percentage: 26.8 },
    { category: 'Preference', count: 28, percentage: 22.0 },
    { category: 'Interaction', count: 19, percentage: 15.0 },
    { category: 'Temporal', count: 15, percentage: 11.8 },
    { category: 'Derived', count: 8, percentage: 6.3 }
  ];

  // Data processing pipeline
  const processingPipeline = [
    {
      step: 'Raw Data Ingestion',
      input: '15.2M records',
      output: '15.2M records',
      operations: ['Load CSV/JSON', 'Schema validation', 'Type conversion'],
      status: 'completed'
    },
    {
      step: 'Data Cleaning',
      input: '15.2M records',
      output: '14.8M records',
      operations: ['Remove duplicates', 'Handle missing values', 'Outlier detection'],
      status: 'running'
    },
    {
      step: 'Feature Engineering',
      input: '14.8M records',
      output: '14.8M records',
      operations: ['Create derived features', 'Feature scaling', 'Encoding'],
      status: 'pending'
    },
    {
      step: 'Data Validation',
      input: '14.8M records',
      output: '14.6M records',
      operations: ['Quality checks', 'Business rules', 'Anomaly detection'],
      status: 'pending'
    }
  ];

  // Missing data analysis
  const missingDataAnalysis = [
    { feature: 'age', missing: 2.3, strategy: 'median_imputation' },
    { feature: 'income', missing: 8.7, strategy: 'regression_imputation' },
    { feature: 'education', missing: 1.2, strategy: 'mode_imputation' },
    { feature: 'location', missing: 0.8, strategy: 'forward_fill' },
    { feature: 'interests', missing: 12.4, strategy: 'category_imputation' },
    { feature: 'relationship_history', missing: 15.6, strategy: 'drop_records' }
  ];

  // Feature correlation matrix
  const correlationData = [
    { feature1: 'age', feature2: 'income', correlation: 0.67 },
    { feature1: 'education', feature2: 'income', correlation: 0.72 },
    { feature1: 'age', feature2: 'relationship_experience', correlation: 0.58 },
    { feature1: 'activity_level', feature2: 'match_success', correlation: 0.43 },
    { feature1: 'profile_completeness', feature2: 'engagement', correlation: 0.61 },
    { feature1: 'response_time', feature2: 'match_quality', correlation: -0.34 }
  ];

  // Data transformation operations
  const transformationOps = [
    {
      operation: 'Normalization',
      features: 45,
      method: 'StandardScaler',
      status: 'completed',
      impact: 'High'
    },
    {
      operation: 'Encoding',
      features: 23,
      method: 'OneHotEncoder',
      status: 'completed',
      impact: 'High'
    },
    {
      operation: 'Binning',
      features: 12,
      method: 'QuantileBinning',
      status: 'running',
      impact: 'Medium'
    },
    {
      operation: 'Feature Selection',
      features: 89,
      method: 'SelectKBest',
      status: 'pending',
      impact: 'High'
    },
    {
      operation: 'Dimensionality Reduction',
      features: 156,
      method: 'PCA',
      status: 'pending',
      impact: 'Medium'
    }
  ];

  // Real-time processing stats
  const realTimeStats = [
    { metric: 'Records/Second', value: 2400, unit: 'records/s' },
    { metric: 'Memory Usage', value: 14.2, unit: 'GB' },
    { metric: 'CPU Utilization', value: 67, unit: '%' },
    { metric: 'I/O Throughput', value: 234, unit: 'MB/s' },
    { metric: 'Error Rate', value: 0.03, unit: '%' }
  ];

  useEffect(() => {
    let interval;
    if (processingStatus === 'running') {
      interval = setInterval(() => {
        setProcessingProgress(prev => {
          if (prev >= 100) {
            setProcessingStatus('completed');
            return 100;
          }
          return prev + Math.random() * 3;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [processingStatus]);

  const startProcessing = () => {
    setProcessingStatus('running');
    setProcessingProgress(0);
    console.log(`Starting processing for ${selectedDataset}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processed': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'queued': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getQualityColor = (score, threshold) => {
    if (score >= threshold + 5) return 'text-green-600 bg-green-100';
    if (score >= threshold) return 'text-blue-600 bg-blue-100';
    if (score >= threshold - 5) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Database className="w-8 h-8 text-purple-600" />
              Machine Learning Data Processing
            </h1>
            <p className="text-gray-600">
              Advanced data preprocessing, feature engineering, and quality assessment for ML models
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${
                processingStatus === 'running' ? 'bg-purple-500 animate-pulse' : 
                processingStatus === 'completed' ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
              <span className="text-sm text-gray-600">
                {processingStatus === 'running' ? `Processing... ${processingProgress.toFixed(1)}%` : 
                 processingStatus === 'completed' ? 'Completed' : 'Ready'}
              </span>
            </div>
            
            <button
              onClick={startProcessing}
              disabled={processingStatus === 'running'}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                processingStatus === 'running' 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {processingStatus === 'running' ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
              {processingStatus === 'running' ? 'Processing...' : 'Start Processing'}
            </button>
            
            <button
              onClick={() => setShowDataPreview(!showDataPreview)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showDataPreview 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              Data Preview
            </button>
          </div>
        </div>
      </div>

      {/* Processing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {processingMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Database className="w-6 h-6 text-purple-600" />
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
          {/* Datasets */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Datasets</h3>
            <div className="space-y-3">
              {datasets.slice(0, 4).map((dataset) => (
                <button
                  key={dataset.id}
                  onClick={() => setSelectedDataset(dataset.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedDataset === dataset.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{dataset.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dataset.status)}`}>
                      {dataset.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Records:</span>
                      <div className="font-semibold text-purple-600">{dataset.records.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <div className="font-semibold text-blue-600">{dataset.size}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="text-gray-500">Quality: </span>
                    <span className="font-semibold text-green-600">{dataset.quality}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Processing Stages */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Processing Stages</h3>
            <div className="space-y-3">
              {processingStages.map((stage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    stage.status === 'completed' ? 'bg-green-500' :
                    stage.status === 'running' ? 'bg-purple-500 animate-pulse' :
                    stage.status === 'error' ? 'bg-red-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <div className={`font-medium ${
                      stage.status === 'completed' ? 'text-green-600' :
                      stage.status === 'running' ? 'text-purple-600' :
                      stage.status === 'error' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stage.name}
                    </div>
                    <div className="text-xs text-gray-500">{stage.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Real-time Stats</h3>
            <div className="space-y-3">
              {realTimeStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{stat.metric}:</span>
                  <span className="font-semibold text-gray-900">
                    {stat.value.toLocaleString()} {stat.unit}
                  </span>
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
                Export Processed
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Processing Config
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Data Quality Assessment */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Quality Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataQualityMetrics.map((metric, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{metric.metric}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(metric.score, metric.threshold)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{metric.score}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metric.score >= metric.threshold + 5 ? 'bg-green-500' :
                        metric.score >= metric.threshold ? 'bg-blue-500' :
                        metric.score >= metric.threshold - 5 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Threshold: {metric.threshold}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Distribution & Missing Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={featureDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {featureDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Missing Data Analysis</h3>
              <div className="space-y-3">
                {missingDataAnalysis.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.feature}</div>
                      <div className="text-sm text-gray-600">{item.strategy.replace('_', ' ')}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-red-600">{item.missing}%</div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.missing}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Processing Pipeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Processing Pipeline</h3>
            <div className="space-y-4">
              {processingPipeline.map((step, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{step.step}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(step.status)}`}>
                      {step.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <span className="text-sm text-gray-500">Input:</span>
                      <div className="font-semibold text-blue-600">{step.input}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Output:</span>
                      <div className="font-semibold text-green-600">{step.output}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Operations:</span>
                      <div className="text-sm text-gray-700">{step.operations.length} operations</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.operations.map((op, opIndex) => (
                      <span key={opIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {op}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Operations */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Transformation Operations</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Operation</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Features</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Method</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {transformationOps.map((op, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{op.operation}</td>
                      <td className="py-3 px-4 text-purple-600 font-semibold">{op.features}</td>
                      <td className="py-3 px-4 text-gray-700">{op.method}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(op.status)}`}>
                          {op.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(op.impact)}`}>
                          {op.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Preview */}
          {showDataPreview && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Preview - {datasets.find(d => d.id === selectedDataset)?.name}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-900">user_id</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-900">age</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-900">location</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-900">interests</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-900">activity_score</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-900">match_success_rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-blue-600">USR_001234</td>
                      <td className="py-2 px-3">28</td>
                      <td className="py-2 px-3">New York, NY</td>
                      <td className="py-2 px-3">Travel, Food, Music</td>
                      <td className="py-2 px-3 text-green-600">8.7</td>
                      <td className="py-2 px-3 text-purple-600">0.73</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-blue-600">USR_001235</td>
                      <td className="py-2 px-3">32</td>
                      <td className="py-2 px-3">Los Angeles, CA</td>
                      <td className="py-2 px-3">Fitness, Art, Technology</td>
                      <td className="py-2 px-3 text-green-600">9.2</td>
                      <td className="py-2 px-3 text-purple-600">0.81</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-blue-600">USR_001236</td>
                      <td className="py-2 px-3">25</td>
                      <td className="py-2 px-3">Chicago, IL</td>
                      <td className="py-2 px-3">Books, Movies, Cooking</td>
                      <td className="py-2 px-3 text-green-600">7.4</td>
                      <td className="py-2 px-3 text-purple-600">0.68</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Advanced Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Processing Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Missing Value Strategy</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="drop">Drop Records</option>
                  <option value="mean">Mean Imputation</option>
                  <option value="median">Median Imputation</option>
                  <option value="mode">Mode Imputation</option>
                  <option value="knn">KNN Imputation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Scaling Method</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="standard">Standard Scaler</option>
                  <option value="minmax">Min-Max Scaler</option>
                  <option value="robust">Robust Scaler</option>
                  <option value="quantile">Quantile Transformer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Encoding Strategy</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="onehot">One-Hot Encoding</option>
                  <option value="label">Label Encoding</option>
                  <option value="target">Target Encoding</option>
                  <option value="binary">Binary Encoding</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Outlier Detection</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="iqr">IQR Method</option>
                  <option value="zscore">Z-Score</option>
                  <option value="isolation">Isolation Forest</option>
                  <option value="lof">Local Outlier Factor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Feature Selection</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="selectkbest">Select K Best</option>
                  <option value="rfe">Recursive Feature Elimination</option>
                  <option value="lasso">Lasso Regularization</option>
                  <option value="mutual_info">Mutual Information</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data Split Ratio</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="70-15-15">70% Train, 15% Val, 15% Test</option>
                  <option value="80-10-10">80% Train, 10% Val, 10% Test</option>
                  <option value="60-20-20">60% Train, 20% Val, 20% Test</option>
                  <option value="custom">Custom Split</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Apply Configuration
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reset to Default
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Save Pipeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningDataProcessing;

