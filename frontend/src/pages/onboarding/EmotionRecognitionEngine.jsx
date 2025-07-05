import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, CameraOff, Eye, EyeOff, Smile, Frown, Meh,
  Heart, Brain, Zap, Activity, TrendingUp, BarChart3,
  Settings, Download, Share2, Play, Pause, RotateCcw,
  User, Users, Clock, Target, Award, Star, Sparkles
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const EmotionRecognitionEngine = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState('Happy');
  const [emotionConfidence, setEmotionConfidence] = useState(87.3);
  const [analysisMode, setAnalysisMode] = useState('real_time');
  const [selectedTimeframe, setSelectedTimeframe] = useState('current');

  // Current emotion state
  const [emotionState, setEmotionState] = useState({
    primary: 'Happy',
    secondary: 'Excited',
    intensity: 78.4,
    authenticity: 92.1,
    stability: 85.7,
    engagement: 89.3
  });

  // Real-time emotion data
  const emotionTimeline = [
    { time: '0s', happiness: 85, sadness: 5, anger: 2, surprise: 8, fear: 0, disgust: 0, neutral: 0 },
    { time: '5s', happiness: 78, sadness: 8, anger: 3, surprise: 11, fear: 0, disgust: 0, neutral: 0 },
    { time: '10s', happiness: 92, sadness: 2, anger: 1, surprise: 5, fear: 0, disgust: 0, neutral: 0 },
    { time: '15s', happiness: 88, sadness: 4, anger: 2, surprise: 6, fear: 0, disgust: 0, neutral: 0 },
    { time: '20s', happiness: 95, sadness: 1, anger: 0, surprise: 4, fear: 0, disgust: 0, neutral: 0 },
    { time: '25s', happiness: 82, sadness: 6, anger: 3, surprise: 9, fear: 0, disgust: 0, neutral: 0 },
    { time: '30s', happiness: 90, sadness: 3, anger: 1, surprise: 6, fear: 0, disgust: 0, neutral: 0 }
  ];

  // Emotion distribution
  const emotionDistribution = [
    { emotion: 'Happiness', percentage: 42.7, color: '#10b981', intensity: 'High' },
    { emotion: 'Excitement', percentage: 28.3, color: '#f59e0b', intensity: 'Medium-High' },
    { emotion: 'Surprise', percentage: 15.2, color: '#3b82f6', intensity: 'Medium' },
    { emotion: 'Contentment', percentage: 8.9, color: '#8b5cf6', intensity: 'Medium' },
    { emotion: 'Curiosity', percentage: 4.9, color: '#ef4444', intensity: 'Low' }
  ];

  // Facial expression analysis
  const facialFeatures = [
    { feature: 'Eye Expression', score: 94.2, description: 'Bright and engaged eyes' },
    { feature: 'Smile Authenticity', score: 91.7, description: 'Genuine Duchenne smile' },
    { feature: 'Eyebrow Position', score: 87.3, description: 'Relaxed and natural' },
    { feature: 'Facial Symmetry', score: 89.6, description: 'Balanced expression' },
    { feature: 'Micro-expressions', score: 85.4, description: 'Consistent with stated emotion' },
    { feature: 'Overall Harmony', score: 92.8, description: 'Coherent emotional display' }
  ];

  // Emotion patterns over time
  const emotionPatterns = [
    { period: 'Morning', happiness: 78, energy: 85, stress: 15, confidence: 82 },
    { period: 'Afternoon', happiness: 85, energy: 78, stress: 22, confidence: 88 },
    { period: 'Evening', happiness: 92, energy: 72, stress: 8, confidence: 91 },
    { period: 'Night', happiness: 88, energy: 65, stress: 12, confidence: 86 }
  ];

  // Emotion triggers and contexts
  const emotionTriggers = [
    {
      trigger: 'Receiving Messages',
      positive_response: 94.7,
      common_emotions: ['Happy', 'Excited', 'Surprised'],
      frequency: 'High'
    },
    {
      trigger: 'Video Calls',
      positive_response: 89.3,
      common_emotions: ['Happy', 'Nervous', 'Confident'],
      frequency: 'Medium'
    },
    {
      trigger: 'Profile Views',
      positive_response: 76.8,
      common_emotions: ['Curious', 'Hopeful', 'Anxious'],
      frequency: 'High'
    },
    {
      trigger: 'Match Notifications',
      positive_response: 97.2,
      common_emotions: ['Excited', 'Happy', 'Surprised'],
      frequency: 'Medium'
    },
    {
      trigger: 'Planning Dates',
      positive_response: 91.5,
      common_emotions: ['Excited', 'Nervous', 'Happy'],
      frequency: 'Low'
    }
  ];

  // Emotional intelligence metrics
  const emotionalIntelligence = [
    { aspect: 'Self-Awareness', score: 89.4, description: 'Understanding own emotions' },
    { aspect: 'Self-Regulation', score: 85.7, description: 'Managing emotional responses' },
    { aspect: 'Empathy', score: 92.1, description: 'Reading others\' emotions' },
    { aspect: 'Social Skills', score: 87.8, description: 'Emotional communication' },
    { aspect: 'Motivation', score: 91.3, description: 'Emotional drive and goals' }
  ];

  // Compatibility emotional analysis
  const emotionalCompatibility = [
    {
      partner: 'Sarah M.',
      emotional_sync: 94.2,
      complementary_traits: ['Calm-Energetic', 'Thoughtful-Spontaneous'],
      shared_emotions: ['Joy', 'Excitement', 'Contentment'],
      avatar: '👩'
    },
    {
      partner: 'Emma L.',
      emotional_sync: 87.6,
      complementary_traits: ['Optimistic-Realistic', 'Expressive-Reserved'],
      shared_emotions: ['Happiness', 'Curiosity', 'Warmth'],
      avatar: '👱‍♀️'
    },
    {
      partner: 'Jessica R.',
      emotional_sync: 91.8,
      complementary_traits: ['Confident-Supportive', 'Adventurous-Stable'],
      shared_emotions: ['Confidence', 'Adventure', 'Joy'],
      avatar: '👩‍🦰'
    }
  ];

  // Emotion recognition accuracy metrics
  const recognitionMetrics = [
    { metric: 'Overall Accuracy', value: 96.8, benchmark: '95+', status: 'excellent' },
    { metric: 'Real-time Processing', value: 94.2, benchmark: '90+', status: 'excellent' },
    { metric: 'Micro-expression Detection', value: 89.7, benchmark: '85+', status: 'good' },
    { metric: 'Multi-face Recognition', value: 91.3, benchmark: '88+', status: 'excellent' },
    { metric: 'Lighting Adaptation', value: 87.9, benchmark: '80+', status: 'good' },
    { metric: 'Cultural Sensitivity', value: 93.4, benchmark: '90+', status: 'excellent' }
  ];

  // Emotion coaching suggestions
  const emotionCoaching = [
    {
      id: 'confidence_building',
      title: 'Confidence Building',
      description: 'Techniques to enhance self-confidence in dating scenarios',
      exercises: ['Power posing', 'Positive affirmations', 'Success visualization'],
      duration: '10-15 min',
      difficulty: 'Beginner'
    },
    {
      id: 'anxiety_management',
      title: 'Anxiety Management',
      description: 'Strategies to manage dating anxiety and nervousness',
      exercises: ['Deep breathing', 'Progressive relaxation', 'Mindfulness'],
      duration: '15-20 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'emotional_expression',
      title: 'Emotional Expression',
      description: 'Improve authentic emotional communication',
      exercises: ['Facial expression practice', 'Emotion mirroring', 'Storytelling'],
      duration: '12-18 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'empathy_enhancement',
      title: 'Empathy Enhancement',
      description: 'Develop better emotional understanding of others',
      exercises: ['Perspective taking', 'Active listening', 'Emotion recognition'],
      duration: '20-25 min',
      difficulty: 'Advanced'
    }
  ];

  useEffect(() => {
    // Simulate real-time emotion analysis updates
    const interval = setInterval(() => {
      if (isAnalyzing) {
        setEmotionConfidence(prev => 
          Math.max(70, Math.min(100, prev + (Math.random() - 0.5) * 3))
        );
        
        setEmotionState(prev => ({
          ...prev,
          intensity: Math.max(50, Math.min(100, prev.intensity + (Math.random() - 0.5) * 5)),
          authenticity: Math.max(80, Math.min(100, prev.authenticity + (Math.random() - 0.5) * 2)),
          stability: Math.max(70, Math.min(100, prev.stability + (Math.random() - 0.5) * 3)),
          engagement: Math.max(60, Math.min(100, prev.engagement + (Math.random() - 0.5) * 4))
        }));
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const toggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
    setIsAnalyzing(!cameraEnabled);
    console.log(`Camera ${!cameraEnabled ? 'enabled' : 'disabled'}`);
    // In a real app, this would start/stop camera feed and emotion analysis
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    console.log('Starting emotion analysis...');
    // In a real app, this would begin emotion recognition processing
  };

  const stopAnalysis = () => {
    setIsAnalyzing(false);
    console.log('Stopping emotion analysis...');
    // In a real app, this would stop emotion recognition
  };

  const downloadReport = () => {
    console.log('Downloading emotion analysis report...');
    // In a real app, this would generate and download emotion report
  };

  const shareAnalysis = () => {
    console.log('Sharing emotion analysis...');
    // In a real app, this would share analysis with partner
  };

  const startCoaching = (coachingId) => {
    console.log(`Starting emotion coaching: ${coachingId}`);
    // In a real app, this would start emotion coaching session
  };

  const getEmotionIcon = (emotion) => {
    switch (emotion.toLowerCase()) {
      case 'happy':
      case 'happiness':
        return <Smile className="w-5 h-5 text-green-600" />;
      case 'sad':
      case 'sadness':
        return <Frown className="w-5 h-5 text-blue-600" />;
      case 'excited':
      case 'excitement':
        return <Zap className="w-5 h-5 text-yellow-600" />;
      case 'surprised':
      case 'surprise':
        return <Eye className="w-5 h-5 text-purple-600" />;
      default:
        return <Meh className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Brain className="w-8 h-8 text-pink-600" />
              Emotion Recognition Engine
            </h1>
            <p className="text-gray-600">
              Advanced AI-powered facial emotion detection and emotional intelligence analysis
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={analysisMode}
              onChange={(e) => setAnalysisMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="real_time">Real-time Analysis</option>
              <option value="batch">Batch Processing</option>
              <option value="comparison">Emotion Comparison</option>
              <option value="coaching">Coaching Mode</option>
            </select>
            
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="current">Current Session</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            
            <button 
              onClick={toggleCamera}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                cameraEnabled 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              {cameraEnabled ? <CameraOff className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
              {cameraEnabled ? 'Stop Camera' : 'Start Camera'}
            </button>
            
            <button 
              onClick={downloadReport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Report
            </button>
            
            <button 
              onClick={shareAnalysis}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Emotion Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              {getEmotionIcon(currentEmotion)}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-pink-600">{currentEmotion}</div>
              <div className="text-xs text-gray-500">Primary</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Current Emotion</h3>
            <p className="text-sm text-gray-600">{emotionConfidence.toFixed(1)}% confidence</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{emotionState.intensity.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Intensity</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Emotion Intensity</h3>
            <p className="text-sm text-gray-600">{emotionState.authenticity.toFixed(1)}% authentic</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{emotionState.stability.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Stability</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Emotional Stability</h3>
            <p className="text-sm text-gray-600">Consistent patterns</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Heart className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{emotionState.engagement.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Engagement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Emotional Engagement</h3>
            <p className="text-sm text-gray-600">Active participation</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Analysis Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Camera Feed and Real-time Analysis */}
          <div className="bg-black rounded-lg p-6 border border-gray-200 relative overflow-hidden" style={{ height: '350px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 to-purple-900/30">
              {/* Camera Feed Simulation */}
              <div className="relative w-full h-full flex items-center justify-center">
                {cameraEnabled ? (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📹</div>
                    <h3 className="text-2xl font-bold mb-2">Live Emotion Analysis</h3>
                    <p className="text-lg opacity-90 mb-4">Detecting: {currentEmotion} ({emotionConfidence.toFixed(1)}%)</p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">Camera Active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">AI Processing</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📷</div>
                    <h3 className="text-2xl font-bold mb-2">Camera Disabled</h3>
                    <p className="text-lg opacity-90 mb-4">Click "Start Camera" to begin emotion analysis</p>
                    <button 
                      onClick={toggleCamera}
                      className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Enable Camera
                    </button>
                  </div>
                )}

                {/* Analysis Overlay */}
                {cameraEnabled && (
                  <>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Analyzing</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg">
                      <div className="text-sm">Current Emotion</div>
                      <div className="text-lg font-bold">{currentEmotion}</div>
                      <div className="text-sm opacity-75">{emotionConfidence.toFixed(1)}% confidence</div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg">
                      <div className="text-sm">Facial Features</div>
                      <div className="text-xs space-y-1">
                        <div>Eyes: Engaged</div>
                        <div>Smile: Authentic</div>
                        <div>Expression: Natural</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Real-time Emotion Timeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Emotion Timeline</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={emotionTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="happiness" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="surprise" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="sadness" stackId="1" stroke="#6b7280" fill="#6b7280" fillOpacity={0.6} />
                <Area type="monotone" dataKey="anger" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Emotion Distribution */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emotion Distribution Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={emotionDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                    >
                      {emotionDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-3">
                {emotionDistribution.map((emotion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: emotion.color }}
                      />
                      <div>
                        <span className="font-medium text-gray-900">{emotion.emotion}</span>
                        <div className="text-xs text-gray-500">{emotion.intensity} intensity</div>
                      </div>
                    </div>
                    <span className="text-lg font-bold" style={{ color: emotion.color }}>
                      {emotion.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facial Feature Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Facial Expression Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facialFeatures.map((feature, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{feature.feature}</h4>
                    <span className="text-lg font-bold text-pink-600">{feature.score}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${feature.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotion Patterns */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Emotion Patterns</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={emotionPatterns}>
                <PolarGrid />
                <PolarAngleAxis dataKey="period" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Happiness" dataKey="happiness" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Radar name="Energy" dataKey="energy" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Radar name="Confidence" dataKey="confidence" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Stress" dataKey="stress" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Emotion Coaching */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emotion Coaching Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emotionCoaching.map((coaching) => (
                <div key={coaching.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{coaching.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(coaching.difficulty)}`}>
                      {coaching.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{coaching.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Duration: {coaching.duration}</span>
                    <button 
                      onClick={() => startCoaching(coaching.id)}
                      className="px-3 py-1 bg-pink-600 text-white text-sm rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Start
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-medium">Exercises:</div>
                    {coaching.exercises.slice(0, 2).map((exercise, index) => (
                      <div key={index} className="text-xs text-gray-600">• {exercise}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Recognition Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Recognition Accuracy
            </h3>
            <div className="space-y-3">
              {recognitionMetrics.map((metric, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{metric.metric}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-bold text-gray-900">{metric.value}%</span>
                    <span className="text-xs text-gray-500">Target: {metric.benchmark}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Intelligence */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Emotional Intelligence
            </h3>
            <div className="space-y-3">
              {emotionalIntelligence.map((aspect, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm">{aspect.aspect}</h4>
                    <span className="text-sm font-bold text-purple-600">{aspect.score}%</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{aspect.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${aspect.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Compatibility */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Emotional Compatibility
            </h3>
            <div className="space-y-3">
              {emotionalCompatibility.map((partner, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{partner.avatar}</div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{partner.partner}</div>
                      <div className="text-sm font-bold text-green-600">{partner.emotional_sync}% sync</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500">Shared emotions:</div>
                    <div className="text-xs text-gray-600">{partner.shared_emotions.join(', ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotion Triggers */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Emotion Triggers
            </h3>
            <div className="space-y-3">
              {emotionTriggers.slice(0, 4).map((trigger, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 text-sm">{trigger.trigger}</span>
                    <span className="text-sm font-bold text-green-600">{trigger.positive_response}%</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    {trigger.common_emotions.slice(0, 2).join(', ')}
                  </div>
                  <div className="text-xs text-gray-500">Frequency: {trigger.frequency}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Analysis Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                Emotion Achievements
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4" />
                Emotion Insights
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Clock className="w-4 h-4" />
                Analysis History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionRecognitionEngine;

