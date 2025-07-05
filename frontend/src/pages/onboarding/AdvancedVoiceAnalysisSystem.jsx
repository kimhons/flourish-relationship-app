import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, MicOff, Volume2, VolumeX, Play, Pause, RotateCcw,
  Waveform, BarChart3, TrendingUp, Heart, Brain, Zap,
  Settings, Download, Upload, Share2, Award, Star,
  User, Users, Clock, Target, Eye, Headphones,
  Activity, Pulse, Radio, Signal, Waves, Music
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const AdvancedVoiceAnalysisSystem = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [voiceMetrics, setVoiceMetrics] = useState({
    pitch: 142.5,
    tone: 'Warm',
    emotion: 'Happy',
    confidence: 87.3,
    clarity: 94.2,
    pace: 'Moderate',
    energy: 76.8
  });
  const [compatibilityScore, setCompatibilityScore] = useState(89.4);
  const [analysisMode, setAnalysisMode] = useState('real_time');
  const [selectedProfile, setSelectedProfile] = useState('current_user');

  // Voice analysis data
  const voicePatterns = [
    { time: '0s', frequency: 120, amplitude: 0.7, emotion: 0.8 },
    { time: '2s', frequency: 135, amplitude: 0.8, emotion: 0.9 },
    { time: '4s', frequency: 128, amplitude: 0.6, emotion: 0.7 },
    { time: '6s', frequency: 145, amplitude: 0.9, emotion: 0.95 },
    { time: '8s', frequency: 138, amplitude: 0.75, emotion: 0.85 },
    { time: '10s', frequency: 142, amplitude: 0.8, emotion: 0.88 },
    { time: '12s', frequency: 150, amplitude: 0.85, emotion: 0.92 },
    { time: '14s', frequency: 133, amplitude: 0.7, emotion: 0.8 }
  ];

  // Emotional analysis data
  const emotionalAnalysis = [
    { emotion: 'Joy', percentage: 34.7, color: '#10b981' },
    { emotion: 'Excitement', percentage: 28.3, color: '#f59e0b' },
    { emotion: 'Calm', percentage: 18.9, color: '#3b82f6' },
    { emotion: 'Confidence', percentage: 12.4, color: '#8b5cf6' },
    { emotion: 'Nervousness', percentage: 5.7, color: '#ef4444' }
  ];

  // Voice compatibility metrics
  const compatibilityMetrics = [
    { aspect: 'Pitch Harmony', score: 92.1, description: 'Complementary vocal ranges' },
    { aspect: 'Pace Synchronization', score: 87.6, description: 'Similar speaking rhythms' },
    { aspect: 'Emotional Resonance', score: 94.3, description: 'Matching emotional expressions' },
    { aspect: 'Tone Compatibility', score: 89.7, description: 'Harmonious voice tones' },
    { aspect: 'Energy Alignment', score: 85.2, description: 'Compatible energy levels' },
    { aspect: 'Communication Style', score: 91.8, description: 'Similar conversation patterns' }
  ];

  // Voice characteristics profiles
  const voiceProfiles = [
    {
      id: 'current_user',
      name: 'Your Voice',
      pitch_range: '120-160 Hz',
      dominant_tone: 'Warm',
      speaking_pace: '145 WPM',
      emotional_range: 'High',
      clarity_score: 94.2,
      uniqueness: 87.6,
      avatar: '👤'
    },
    {
      id: 'partner_1',
      name: 'Sarah M.',
      pitch_range: '180-220 Hz',
      dominant_tone: 'Melodic',
      speaking_pace: '138 WPM',
      emotional_range: 'Medium-High',
      clarity_score: 91.8,
      uniqueness: 82.4,
      avatar: '👩'
    },
    {
      id: 'partner_2',
      name: 'Emma L.',
      pitch_range: '160-200 Hz',
      dominant_tone: 'Gentle',
      speaking_pace: '152 WPM',
      emotional_range: 'Medium',
      clarity_score: 89.3,
      uniqueness: 79.1,
      avatar: '👱‍♀️'
    },
    {
      id: 'partner_3',
      name: 'Jessica R.',
      pitch_range: '140-180 Hz',
      dominant_tone: 'Confident',
      speaking_pace: '162 WPM',
      emotional_range: 'High',
      clarity_score: 96.7,
      uniqueness: 91.2,
      avatar: '👩‍🦰'
    }
  ];

  // Voice analysis insights
  const voiceInsights = [
    {
      category: 'Emotional Intelligence',
      score: 92.4,
      insights: [
        'High emotional expressiveness in voice',
        'Strong empathy indicators in tone',
        'Excellent emotional regulation'
      ]
    },
    {
      category: 'Communication Style',
      score: 88.7,
      insights: [
        'Clear and articulate speech patterns',
        'Engaging conversational rhythm',
        'Natural pause and emphasis usage'
      ]
    },
    {
      category: 'Personality Traits',
      score: 85.9,
      insights: [
        'Confident and assertive voice',
        'Warm and approachable tone',
        'High energy and enthusiasm'
      ]
    },
    {
      category: 'Compatibility Factors',
      score: 89.4,
      insights: [
        'Voice complements partner preferences',
        'Harmonious pitch relationships',
        'Synchronized communication patterns'
      ]
    }
  ];

  // Real-time voice metrics
  const realtimeMetrics = [
    { metric: 'Pitch (Hz)', value: voiceMetrics.pitch, optimal: '120-180', status: 'good' },
    { metric: 'Clarity (%)', value: voiceMetrics.clarity, optimal: '85-100', status: 'excellent' },
    { metric: 'Energy Level', value: voiceMetrics.energy, optimal: '60-90', status: 'good' },
    { metric: 'Confidence (%)', value: voiceMetrics.confidence, optimal: '70-100', status: 'excellent' }
  ];

  // Voice training exercises
  const voiceExercises = [
    {
      id: 'pitch_control',
      name: 'Pitch Control Training',
      description: 'Exercises to improve vocal pitch range and control',
      duration: '10-15 min',
      difficulty: 'Beginner',
      benefits: ['Better pitch variation', 'More expressive speech', 'Enhanced vocal control']
    },
    {
      id: 'emotional_expression',
      name: 'Emotional Expression',
      description: 'Practice conveying emotions through voice tone',
      duration: '15-20 min',
      difficulty: 'Intermediate',
      benefits: ['Clearer emotional communication', 'Better empathy expression', 'Enhanced connection']
    },
    {
      id: 'clarity_articulation',
      name: 'Clarity & Articulation',
      description: 'Improve speech clarity and pronunciation',
      duration: '12-18 min',
      difficulty: 'Beginner',
      benefits: ['Clearer speech', 'Better understanding', 'Professional communication']
    },
    {
      id: 'pace_rhythm',
      name: 'Pace & Rhythm',
      description: 'Develop optimal speaking pace and rhythm',
      duration: '8-12 min',
      difficulty: 'Intermediate',
      benefits: ['Better conversation flow', 'Reduced nervousness', 'Enhanced engagement']
    }
  ];

  // Voice analysis history
  const analysisHistory = [
    { date: '2024-01-15', session: 'Morning Call', duration: '12:34', score: 91.2, emotion: 'Happy' },
    { date: '2024-01-14', session: 'Evening Chat', duration: '08:47', score: 87.6, emotion: 'Relaxed' },
    { date: '2024-01-13', session: 'Lunch Break', duration: '15:23', score: 89.4, emotion: 'Excited' },
    { date: '2024-01-12', session: 'Video Date', duration: '45:12', score: 93.8, emotion: 'Romantic' },
    { date: '2024-01-11', session: 'Quick Check-in', duration: '05:18', score: 85.3, emotion: 'Neutral' }
  ];

  useEffect(() => {
    // Simulate real-time voice analysis updates
    const interval = setInterval(() => {
      if (isRecording) {
        setVoiceMetrics(prev => ({
          ...prev,
          pitch: Math.max(100, Math.min(200, prev.pitch + (Math.random() - 0.5) * 10)),
          clarity: Math.max(70, Math.min(100, prev.clarity + (Math.random() - 0.5) * 2)),
          energy: Math.max(40, Math.min(100, prev.energy + (Math.random() - 0.5) * 5)),
          confidence: Math.max(60, Math.min(100, prev.confidence + (Math.random() - 0.5) * 3))
        }));
        
        setCompatibilityScore(prev => 
          Math.max(70, Math.min(100, prev + (Math.random() - 0.5) * 2))
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    setIsAnalyzing(true);
    console.log('Starting voice recording and analysis...');
    // In a real app, this would start microphone recording and voice analysis
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsAnalyzing(false);
    console.log('Stopping voice recording...');
    // In a real app, this would stop recording and finalize analysis
  };

  const analyzeVoiceSample = () => {
    setIsAnalyzing(true);
    console.log('Analyzing voice sample...');
    // In a real app, this would process uploaded voice sample
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const downloadReport = () => {
    console.log('Downloading voice analysis report...');
    // In a real app, this would generate and download PDF report
  };

  const shareAnalysis = () => {
    console.log('Sharing voice analysis...');
    // In a real app, this would share analysis with partner
  };

  const startTraining = (exerciseId) => {
    console.log(`Starting voice training: ${exerciseId}`);
    // In a real app, this would start voice training exercise
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

  const getCurrentProfile = () => {
    return voiceProfiles.find(profile => profile.id === selectedProfile) || voiceProfiles[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Waveform className="w-8 h-8 text-blue-600" />
              Advanced Voice Analysis System
            </h1>
            <p className="text-gray-600">
              AI-powered voice pattern recognition, emotional analysis, and compatibility assessment
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={analysisMode}
              onChange={(e) => setAnalysisMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="real_time">Real-time Analysis</option>
              <option value="batch">Batch Processing</option>
              <option value="comparison">Voice Comparison</option>
              <option value="training">Training Mode</option>
            </select>
            
            <select
              value={selectedProfile}
              onChange={(e) => setSelectedProfile(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {voiceProfiles.map((profile) => (
                <option key={profile.id} value={profile.id}>
                  {profile.name}
                </option>
              ))}
            </select>
            
            <button 
              onClick={isRecording ? stopRecording : startRecording}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isRecording 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {isRecording ? 'Stop Recording' : 'Start Recording'}
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

      {/* Voice Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Pulse className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{voiceMetrics.pitch.toFixed(1)} Hz</div>
              <div className="text-xs text-gray-500">Pitch</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Voice Pitch</h3>
            <p className="text-sm text-gray-600">{voiceMetrics.tone} tone</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{voiceMetrics.emotion}</div>
              <div className="text-xs text-gray-500">Emotion</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Emotional State</h3>
            <p className="text-sm text-gray-600">{voiceMetrics.confidence.toFixed(1)}% confidence</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{voiceMetrics.clarity.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Clarity</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Speech Clarity</h3>
            <p className="text-sm text-gray-600">{voiceMetrics.pace} pace</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{compatibilityScore.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Match</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Voice Compatibility</h3>
            <p className="text-sm text-gray-600">With current partner</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Analysis Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Real-time Voice Visualization */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Real-time Voice Analysis</h3>
              <div className="flex items-center gap-2">
                {isRecording && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-600 font-medium">Recording</span>
                  </div>
                )}
                {isAnalyzing && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-600 font-medium">Analyzing</span>
                  </div>
                )}
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={voicePatterns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="frequency" stroke="#3b82f6" strokeWidth={2} name="Frequency (Hz)" />
                <Line type="monotone" dataKey="amplitude" stroke="#10b981" strokeWidth={2} name="Amplitude" />
                <Line type="monotone" dataKey="emotion" stroke="#f59e0b" strokeWidth={2} name="Emotion Level" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Emotional Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emotional Voice Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={emotionalAnalysis}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      label={({ name, percentage }) => `${name}: ${percentage}%`}
                    >
                      {emotionalAnalysis.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-3">
                {emotionalAnalysis.map((emotion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: emotion.color }}
                      />
                      <span className="font-medium text-gray-900">{emotion.emotion}</span>
                    </div>
                    <span className="text-lg font-bold" style={{ color: emotion.color }}>
                      {emotion.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Voice Compatibility Analysis */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Voice Compatibility Analysis</h3>
            <div className="space-y-4">
              {compatibilityMetrics.map((metric, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{metric.aspect}</h4>
                    <span className="text-lg font-bold text-blue-600">{metric.score}%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Voice Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {realtimeMetrics.map((metric, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{metric.metric}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {typeof metric.value === 'number' ? metric.value.toFixed(1) : metric.value}
                  </div>
                  <div className="text-xs text-gray-500">Optimal: {metric.optimal}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Voice Training Exercises */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Voice Training Exercises</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {voiceExercises.map((exercise) => (
                <div key={exercise.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{exercise.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{exercise.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">Duration: {exercise.duration}</span>
                    <button 
                      onClick={() => startTraining(exercise.id)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-medium">Benefits:</div>
                    {exercise.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-600">• {benefit}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Current Voice Profile */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-4 h-4" />
              Voice Profile
            </h3>
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{getCurrentProfile().avatar}</div>
              <h4 className="font-medium text-gray-900">{getCurrentProfile().name}</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Pitch Range:</span>
                <div className="font-medium text-gray-900">{getCurrentProfile().pitch_range}</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Dominant Tone:</span>
                <div className="font-medium text-gray-900">{getCurrentProfile().dominant_tone}</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Speaking Pace:</span>
                <div className="font-medium text-gray-900">{getCurrentProfile().speaking_pace}</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Emotional Range:</span>
                <div className="font-medium text-gray-900">{getCurrentProfile().emotional_range}</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Clarity Score:</span>
                <div className="font-medium text-blue-600">{getCurrentProfile().clarity_score}%</div>
              </div>
              <div>
                <span className="text-sm text-gray-600">Voice Uniqueness:</span>
                <div className="font-medium text-purple-600">{getCurrentProfile().uniqueness}%</div>
              </div>
            </div>
          </div>

          {/* Voice Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Voice Insights
            </h3>
            <div className="space-y-4">
              {voiceInsights.map((insight, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm">{insight.category}</h4>
                    <span className="text-sm font-bold text-blue-600">{insight.score}%</span>
                  </div>
                  <div className="space-y-1">
                    {insight.insights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-600">• {item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Analysis History
            </h3>
            <div className="space-y-3">
              {analysisHistory.map((session, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 text-sm">{session.session}</span>
                    <span className="text-sm font-bold text-green-600">{session.score}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{session.date}</span>
                    <span>{session.duration}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Emotion: {session.emotion}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={analyzeVoiceSample}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Upload className="w-4 h-4" />
                Upload Voice Sample
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Analysis Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                Voice Achievements
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Headphones className="w-4 h-4" />
                Audio Calibration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedVoiceAnalysisSystem;

