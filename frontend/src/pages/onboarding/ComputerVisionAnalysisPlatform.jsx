import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Camera, Eye, Image, Scan, Zap, Activity, Brain,
  TrendingUp, TrendingDown, Play, Pause, RefreshCw,
  Settings, Download, Share2, Filter, Search,
  User, Users, Heart, Star, Award, CheckCircle,
  AlertTriangle, XCircle, Info, Target, Layers
} from 'lucide-react';

const ComputerVisionAnalysisPlatform = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [selectedModel, setSelectedModel] = useState('face_analysis');
  const [processingMode, setProcessingMode] = useState('real_time');
  const [showAdvancedCV, setShowAdvancedCV] = useState(false);
  const [analysisAccuracy, setAnalysisAccuracy] = useState(96.3);

  // Computer Vision Models
  const cvModels = [
    {
      id: 'face_analysis',
      name: 'Facial Analysis',
      description: 'Analyze facial features, expressions, and attractiveness',
      accuracy: 96.3,
      speed: '120ms',
      status: 'active',
      features: ['Age Detection', 'Emotion Recognition', 'Attractiveness Score']
    },
    {
      id: 'object_detection',
      name: 'Object Detection',
      description: 'Identify objects, activities, and scenes in photos',
      accuracy: 94.7,
      speed: '85ms',
      status: 'active',
      features: ['Object Recognition', 'Scene Analysis', 'Activity Detection']
    },
    {
      id: 'style_analysis',
      name: 'Style Analysis',
      description: 'Analyze fashion, style, and aesthetic preferences',
      accuracy: 89.2,
      speed: '150ms',
      status: 'active',
      features: ['Fashion Style', 'Color Analysis', 'Aesthetic Score']
    },
    {
      id: 'authenticity_check',
      name: 'Authenticity Verification',
      description: 'Detect fake, edited, or inappropriate images',
      accuracy: 98.1,
      speed: '200ms',
      status: 'active',
      features: ['Deepfake Detection', 'Edit Detection', 'Content Verification']
    },
    {
      id: 'similarity_matching',
      name: 'Visual Similarity',
      description: 'Find visually similar users and preferences',
      accuracy: 91.8,
      speed: '95ms',
      status: 'active',
      features: ['Face Similarity', 'Style Matching', 'Preference Analysis']
    }
  ];

  // Real-time analysis metrics
  const analysisMetrics = [
    {
      metric: 'Processing Speed',
      value: '120ms',
      change: '-15ms',
      trend: 'up',
      description: 'Average image processing time'
    },
    {
      metric: 'Analysis Accuracy',
      value: '96.3%',
      change: '+1.8%',
      trend: 'up',
      description: 'Overall computer vision accuracy'
    },
    {
      metric: 'Images Processed',
      value: '2.4M',
      change: '+12.5%',
      trend: 'up',
      description: 'Total images analyzed today'
    },
    {
      metric: 'Model Confidence',
      value: '94.7%',
      change: '+2.1%',
      trend: 'up',
      description: 'Average confidence score'
    }
  ];

  // Facial analysis results
  const facialAnalysisData = [
    { feature: 'Attractiveness', score: 8.2, confidence: 0.94 },
    { feature: 'Symmetry', score: 7.8, confidence: 0.96 },
    { feature: 'Smile Quality', score: 9.1, confidence: 0.98 },
    { feature: 'Eye Contact', score: 8.7, confidence: 0.92 },
    { feature: 'Photo Quality', score: 8.9, confidence: 0.97 },
    { feature: 'Lighting', score: 7.5, confidence: 0.89 }
  ];

  // Age and gender distribution
  const demographicAnalysis = [
    { ageGroup: '18-24', male: 1250, female: 1890, total: 3140 },
    { ageGroup: '25-34', male: 2340, female: 2180, total: 4520 },
    { ageGroup: '35-44', male: 1890, female: 1650, total: 3540 },
    { ageGroup: '45-54', male: 980, female: 1120, total: 2100 },
    { ageGroup: '55+', male: 450, female: 520, total: 970 }
  ];

  // Emotion detection results
  const emotionAnalysis = [
    { emotion: 'Happy', count: 8420, percentage: 45.2, color: '#10b981' },
    { emotion: 'Neutral', count: 4890, percentage: 26.3, color: '#6b7280' },
    { emotion: 'Confident', count: 2340, percentage: 12.6, color: '#3b82f6' },
    { emotion: 'Surprised', count: 1560, percentage: 8.4, color: '#f59e0b' },
    { emotion: 'Serious', count: 890, percentage: 4.8, color: '#8b5cf6' },
    { emotion: 'Other', count: 520, percentage: 2.7, color: '#ef4444' }
  ];

  // Object detection categories
  const objectCategories = [
    { category: 'People', count: 15420, accuracy: 0.98 },
    { category: 'Outdoor Scenes', count: 8930, accuracy: 0.94 },
    { category: 'Indoor Scenes', count: 6780, accuracy: 0.92 },
    { category: 'Animals/Pets', count: 4560, accuracy: 0.96 },
    { category: 'Food/Dining', count: 3240, accuracy: 0.89 },
    { category: 'Sports/Activities', count: 2890, accuracy: 0.91 },
    { category: 'Travel/Landmarks', count: 2340, accuracy: 0.95 },
    { category: 'Vehicles', count: 1890, accuracy: 0.93 }
  ];

  // Style analysis results
  const styleAnalysis = [
    { style: 'Casual', prevalence: 32.4, attractiveness: 7.8, matches: 8420 },
    { style: 'Professional', prevalence: 18.7, attractiveness: 8.2, matches: 4890 },
    { style: 'Sporty', prevalence: 15.3, attractiveness: 7.6, matches: 3980 },
    { style: 'Elegant', prevalence: 12.9, attractiveness: 8.9, matches: 3360 },
    { style: 'Trendy', prevalence: 11.2, attractiveness: 8.1, matches: 2920 },
    { style: 'Artistic', prevalence: 9.5, attractiveness: 8.4, matches: 2480 }
  ];

  // Image quality metrics
  const qualityMetrics = [
    { metric: 'Resolution', good: 78, fair: 18, poor: 4 },
    { metric: 'Lighting', good: 72, fair: 23, poor: 5 },
    { metric: 'Composition', good: 69, fair: 26, poor: 5 },
    { metric: 'Clarity', good: 81, fair: 16, poor: 3 },
    { metric: 'Color Balance', good: 75, fair: 21, poor: 4 }
  ];

  // Authenticity verification results
  const authenticityResults = [
    { type: 'Authentic Photos', count: 18420, percentage: 94.2, status: 'verified' },
    { type: 'Minor Edits', count: 890, percentage: 4.6, status: 'acceptable' },
    { type: 'Heavy Filters', count: 180, percentage: 0.9, status: 'flagged' },
    { type: 'Fake/Generated', count: 60, percentage: 0.3, status: 'rejected' }
  ];

  // Processing performance over time
  const performanceHistory = [
    { time: '00:00', processed: 1250, accuracy: 95.8, avgTime: 125 },
    { time: '04:00', processed: 890, accuracy: 96.2, avgTime: 118 },
    { time: '08:00', processed: 2100, accuracy: 95.9, avgTime: 132 },
    { time: '12:00', processed: 3200, accuracy: 96.5, avgTime: 115 },
    { time: '16:00', processed: 2800, accuracy: 96.8, avgTime: 108 },
    { time: '20:00', processed: 2400, accuracy: 96.3, avgTime: 120 }
  ];

  useEffect(() => {
    let interval;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setAnalysisAccuracy(prev => Math.max(90, Math.min(99, prev + (Math.random() - 0.5) * 0.5)));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAuthenticityColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-600 bg-green-100';
      case 'acceptable': return 'text-yellow-600 bg-yellow-100';
      case 'flagged': return 'text-orange-600 bg-orange-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getQualityColor = (value) => {
    if (value >= 75) return 'text-green-600';
    if (value >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Eye className="w-8 h-8 text-blue-600" />
              Computer Vision Analysis Platform
            </h1>
            <p className="text-gray-600">
              Advanced image analysis, facial recognition, and visual intelligence for enhanced matching
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isAnalyzing ? 'Analyzing' : 'Idle'}
              </span>
            </div>
            
            <button
              onClick={() => setIsAnalyzing(!isAnalyzing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isAnalyzing 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isAnalyzing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAnalyzing ? 'Stop Analysis' : 'Start Analysis'}
            </button>
            
            <button
              onClick={() => setShowAdvancedCV(!showAdvancedCV)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showAdvancedCV 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              Advanced CV
            </button>
          </div>
        </div>
      </div>

      {/* Analysis Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analysisMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
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
          {/* CV Models */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">CV Models</h3>
            <div className="space-y-3">
              {cvModels.slice(0, 4).map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedModel === model.id
                      ? 'border-blue-500 bg-blue-50'
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
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Accuracy:</span>
                      <div className="font-semibold text-green-600">{model.accuracy}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Speed:</span>
                      <div className="font-semibold text-blue-600">{model.speed}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Live Analysis</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {analysisAccuracy.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Current Accuracy</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Images/min:</span>
                  <span className="font-semibold text-gray-900">2,340</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Queue:</span>
                  <span className="font-semibold text-gray-900">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Avg Time:</span>
                  <span className="font-semibold text-gray-900">120ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Quality Overview */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quality Overview</h3>
            <div className="space-y-3">
              {qualityMetrics.slice(0, 4).map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{metric.metric}:</span>
                  <span className={`font-semibold ${getQualityColor(metric.good)}`}>
                    {metric.good}%
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
                <RefreshCw className="w-4 h-4" />
                Retrain Models
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Camera className="w-4 h-4" />
                Batch Process
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Model Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Processing Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="processed" stroke="#3b82f6" strokeWidth={2} name="Images Processed" />
                <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Accuracy %" />
                <Line yAxisId="right" type="monotone" dataKey="avgTime" stroke="#f59e0b" strokeWidth={2} name="Avg Time (ms)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Facial Analysis & Emotion Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Facial Analysis Results</h3>
              <div className="space-y-3">
                {facialAnalysisData.map((analysis, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{analysis.feature}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{analysis.score}/10</span>
                          <span className="text-xs text-gray-500">({(analysis.confidence * 100).toFixed(0)}%)</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(analysis.score / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emotion Detection</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={emotionAnalysis}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ emotion, percentage }) => `${emotion}: ${percentage}%`}
                  >
                    {emotionAnalysis.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Demographics & Object Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demographic Analysis</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={demographicAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="male" fill="#3b82f6" name="Male" />
                  <Bar dataKey="female" fill="#ec4899" name="Female" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Object Detection Categories</h3>
              <div className="space-y-3">
                {objectCategories.slice(0, 6).map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{category.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{category.count.toLocaleString()}</span>
                          <span className="text-xs text-green-600">{(category.accuracy * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${category.accuracy * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Style Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Style Analysis Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {styleAnalysis.map((style, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{style.style}</h4>
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Prevalence:</span>
                      <span className="font-semibold text-blue-600">{style.prevalence}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Attractiveness:</span>
                      <span className="font-semibold text-green-600">{style.attractiveness}/10</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Matches:</span>
                      <span className="font-semibold text-gray-900">{style.matches.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authenticity Verification */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Authenticity Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {authenticityResults.map((result, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-gray-900">{result.count.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{result.percentage}%</div>
                  </div>
                  <div className="mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAuthenticityColor(result.status)}`}>
                      {result.type}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        result.status === 'verified' ? 'bg-green-500' :
                        result.status === 'acceptable' ? 'bg-yellow-500' :
                        result.status === 'flagged' ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${result.percentage * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced CV Configuration */}
          {showAdvancedCV && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Computer Vision Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Threshold</label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.5"
                    max="1"
                    defaultValue="0.85"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image Resolution</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="224">224x224</option>
                    <option value="512">512x512</option>
                    <option value="1024">1024x1024</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                  <input
                    type="number"
                    min="1"
                    max="64"
                    defaultValue="16"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model Architecture</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="resnet">ResNet</option>
                    <option value="efficientnet">EfficientNet</option>
                    <option value="vit">Vision Transformer</option>
                    <option value="custom">Custom Model</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Processing Mode</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="real_time">Real-time</option>
                    <option value="batch">Batch Processing</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GPU Acceleration</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                    <option value="auto">Auto</option>
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
                  Optimize Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComputerVisionAnalysisPlatform;

