import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, Globe, Users, Settings, Play, Pause, RotateCcw,
  Volume2, VolumeX, Maximize, Minimize, RefreshCw, Eye,
  Camera, Mic, MicOff, Share2, Download, Upload, Star,
  Heart, Gift, Award, Crown, Sparkles, Zap, Target,
  Navigation, Compass, Map, Home, Coffee, Mountain,
  Gamepad2, Music, Book, Palette, Film, Plane
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const VirtualRealityMeetingSpaces = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState('romantic_beach');
  const [vrMode, setVrMode] = useState('immersive');
  const [isVrActive, setIsVrActive] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [participantCount, setParticipantCount] = useState(2);
  const [vrQuality, setVrQuality] = useState('high');
  const [immersionLevel, setImmersionLevel] = useState(87.3);

  // VR Environments
  const vrEnvironments = [
    {
      id: 'romantic_beach',
      name: 'Romantic Beach Sunset',
      category: 'Romantic',
      description: 'Private beach with sunset, gentle waves, and soft lighting',
      popularity: 94.7,
      mood: 'Romantic',
      capacity: 2,
      premium: false,
      features: ['Sunset lighting', 'Ocean sounds', 'Private cabana', 'Fireplace'],
      image: '🏖️'
    },
    {
      id: 'cozy_cabin',
      name: 'Mountain Cabin Retreat',
      category: 'Cozy',
      description: 'Warm cabin with fireplace, mountain views, and intimate setting',
      popularity: 89.3,
      mood: 'Intimate',
      capacity: 2,
      premium: false,
      features: ['Fireplace', 'Mountain views', 'Hot cocoa', 'Soft music'],
      image: '🏔️'
    },
    {
      id: 'city_rooftop',
      name: 'City Rooftop Lounge',
      category: 'Urban',
      description: 'Sophisticated rooftop with city skyline and ambient lighting',
      popularity: 82.6,
      mood: 'Sophisticated',
      capacity: 4,
      premium: false,
      features: ['City views', 'Ambient lighting', 'Cocktail bar', 'Jazz music'],
      image: '🏙️'
    },
    {
      id: 'fantasy_garden',
      name: 'Enchanted Garden',
      category: 'Fantasy',
      description: 'Magical garden with floating lights and mystical atmosphere',
      popularity: 76.8,
      mood: 'Magical',
      capacity: 2,
      premium: true,
      features: ['Floating lights', 'Magical creatures', 'Flower petals', 'Ethereal music'],
      image: '🌸'
    },
    {
      id: 'space_station',
      name: 'Space Station Observatory',
      category: 'Futuristic',
      description: 'Futuristic space station with Earth views and cosmic ambiance',
      popularity: 71.4,
      mood: 'Adventurous',
      capacity: 6,
      premium: true,
      features: ['Earth views', 'Cosmic sounds', 'Zero gravity', 'Star mapping'],
      image: '🚀'
    },
    {
      id: 'art_gallery',
      name: 'Private Art Gallery',
      category: 'Cultural',
      description: 'Elegant gallery with curated art and sophisticated atmosphere',
      popularity: 68.9,
      mood: 'Cultured',
      capacity: 4,
      premium: true,
      features: ['Curated art', 'Classical music', 'Wine tasting', 'Art discussions'],
      image: '🎨'
    },
    {
      id: 'tropical_island',
      name: 'Private Tropical Island',
      category: 'Exotic',
      description: 'Secluded island paradise with crystal waters and palm trees',
      popularity: 91.2,
      mood: 'Relaxed',
      capacity: 2,
      premium: true,
      features: ['Crystal waters', 'Palm trees', 'Hammock', 'Tropical birds'],
      image: '🏝️'
    },
    {
      id: 'winter_lodge',
      name: 'Alpine Winter Lodge',
      category: 'Seasonal',
      description: 'Cozy lodge with snow views, hot springs, and winter activities',
      popularity: 74.3,
      mood: 'Cozy',
      capacity: 4,
      premium: false,
      features: ['Snow views', 'Hot springs', 'Skiing', 'Hot chocolate'],
      image: '❄️'
    }
  ];

  // VR Activities
  const vrActivities = [
    {
      id: 'virtual_dining',
      name: 'Virtual Dining Experience',
      description: 'Share a meal in beautiful virtual restaurants',
      duration: '45-90 min',
      participants: '2-4',
      popularity: 88.7,
      engagement: 92.4
    },
    {
      id: 'adventure_quest',
      name: 'Cooperative Adventure Quest',
      description: 'Solve puzzles and explore together',
      duration: '30-60 min',
      participants: '2-6',
      popularity: 76.3,
      engagement: 89.1
    },
    {
      id: 'dance_floor',
      name: 'Virtual Dance Floor',
      description: 'Dance together in various themed venues',
      duration: '20-45 min',
      participants: '2-8',
      popularity: 71.8,
      engagement: 85.6
    },
    {
      id: 'art_creation',
      name: 'Collaborative Art Creation',
      description: 'Create art together in 3D space',
      duration: '30-90 min',
      participants: '2-4',
      popularity: 64.2,
      engagement: 87.9
    },
    {
      id: 'stargazing',
      name: 'Virtual Stargazing',
      description: 'Explore the cosmos together',
      duration: '20-60 min',
      participants: '2-4',
      popularity: 79.5,
      engagement: 91.3
    },
    {
      id: 'cooking_class',
      name: 'Virtual Cooking Class',
      description: 'Learn to cook together with expert guidance',
      duration: '45-120 min',
      participants: '2-6',
      popularity: 82.1,
      engagement: 94.7
    }
  ];

  // VR Usage Statistics
  const vrUsageStats = [
    { environment: 'Romantic Beach', sessions: 2847, avg_duration: 67.3, satisfaction: 94.7 },
    { environment: 'Tropical Island', sessions: 2156, avg_duration: 72.8, satisfaction: 91.2 },
    { environment: 'Mountain Cabin', sessions: 1923, avg_duration: 58.4, satisfaction: 89.3 },
    { environment: 'City Rooftop', sessions: 1678, avg_duration: 45.2, satisfaction: 82.6 },
    { environment: 'Winter Lodge', sessions: 1234, avg_duration: 52.7, satisfaction: 74.3 },
    { environment: 'Space Station', sessions: 987, avg_duration: 41.6, satisfaction: 71.4 }
  ];

  // VR Performance Metrics
  const performanceMetrics = [
    { week: 'Week 1', immersion: 78.4, presence: 72.1, comfort: 68.9, engagement: 75.3 },
    { week: 'Week 2', immersion: 81.7, presence: 76.8, comfort: 73.2, engagement: 79.6 },
    { week: 'Week 3', immersion: 84.2, presence: 80.4, comfort: 77.1, engagement: 82.8 },
    { week: 'Week 4', immersion: 86.9, presence: 83.7, comfort: 80.6, engagement: 85.4 },
    { week: 'Week 5', immersion: 88.8, presence: 86.2, comfort: 83.9, engagement: 87.7 },
    { week: 'Week 6', immersion: 90.4, presence: 88.6, comfort: 86.8, engagement: 89.9 },
    { week: 'Week 7', immersion: 91.7, presence: 90.3, comfort: 88.7, engagement: 91.4 }
  ];

  // Device compatibility
  const vrDevices = [
    { device: 'Meta Quest 3', compatibility: 100, performance: 'Excellent', features: 'All' },
    { device: 'Meta Quest 2', compatibility: 95, performance: 'Very Good', features: 'Most' },
    { device: 'PICO 4', compatibility: 92, performance: 'Very Good', features: 'Most' },
    { device: 'HTC Vive Pro', compatibility: 88, performance: 'Good', features: 'Standard' },
    { device: 'Valve Index', compatibility: 90, performance: 'Very Good', features: 'Most' },
    { device: 'PlayStation VR2', compatibility: 85, performance: 'Good', features: 'Standard' },
    { device: 'Mobile VR', compatibility: 60, performance: 'Limited', features: 'Basic' }
  ];

  // Current session participants
  const sessionParticipants = [
    {
      id: 1,
      name: 'You',
      avatar: '👤',
      status: 'active',
      mic_status: 'on',
      camera_status: 'on',
      position: { x: 0, y: 0, z: 0 }
    },
    {
      id: 2,
      name: 'Sarah',
      avatar: '👩',
      status: 'active',
      mic_status: 'on',
      camera_status: 'on',
      position: { x: 2, y: 0, z: 1 }
    }
  ];

  // VR interaction gestures
  const vrGestures = [
    { gesture: 'Wave', usage: 45.7, success_rate: 89.3 },
    { gesture: 'High Five', usage: 38.2, success_rate: 92.1 },
    { gesture: 'Point', usage: 67.4, success_rate: 95.8 },
    { gesture: 'Thumbs Up', usage: 29.6, success_rate: 87.4 },
    { gesture: 'Heart Shape', usage: 23.8, success_rate: 91.7 },
    { gesture: 'Applause', usage: 18.9, success_rate: 88.6 }
  ];

  useEffect(() => {
    // Simulate real-time VR metrics updates
    const interval = setInterval(() => {
      setImmersionLevel(prev => Math.min(prev + (Math.random() - 0.4) * 0.5, 100));
      setParticipantCount(prev => Math.max(1, prev + Math.floor((Math.random() - 0.5) * 2)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleVR = () => {
    setIsVrActive(!isVrActive);
    console.log(`VR ${!isVrActive ? 'activated' : 'deactivated'}`);
    // In a real app, this would start/stop VR session
  };

  const changeEnvironment = (environmentId) => {
    setCurrentEnvironment(environmentId);
    console.log(`Changed to environment: ${environmentId}`);
    // In a real app, this would load the new VR environment
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    console.log(`Audio ${!audioEnabled ? 'enabled' : 'disabled'}`);
  };

  const toggleMic = () => {
    setMicEnabled(!micEnabled);
    console.log(`Microphone ${!micEnabled ? 'enabled' : 'disabled'}`);
  };

  const inviteToSession = () => {
    console.log('Inviting user to VR session...');
    // In a real app, this would send VR session invitation
  };

  const shareScreen = () => {
    console.log('Sharing screen in VR...');
    // In a real app, this would enable screen sharing in VR
  };

  const recordSession = () => {
    console.log('Recording VR session...');
    // In a real app, this would start recording the VR session
  };

  const getCurrentEnvironment = () => {
    return vrEnvironments.find(env => env.id === currentEnvironment) || vrEnvironments[0];
  };

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'Romantic': return 'text-pink-600 bg-pink-100';
      case 'Intimate': return 'text-red-600 bg-red-100';
      case 'Sophisticated': return 'text-purple-600 bg-purple-100';
      case 'Magical': return 'text-indigo-600 bg-indigo-100';
      case 'Adventurous': return 'text-orange-600 bg-orange-100';
      case 'Cultured': return 'text-blue-600 bg-blue-100';
      case 'Relaxed': return 'text-green-600 bg-green-100';
      case 'Cozy': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Very Good': return 'text-blue-600 bg-blue-100';
      case 'Good': return 'text-yellow-600 bg-yellow-100';
      case 'Limited': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Headphones className="w-8 h-8 text-purple-600" />
              Virtual Reality Meeting Spaces
            </h1>
            <p className="text-gray-600">
              Immersive VR environments for meaningful connections and shared experiences
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={vrMode}
              onChange={(e) => setVrMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="immersive">Immersive VR</option>
              <option value="desktop">Desktop Mode</option>
              <option value="mobile">Mobile VR</option>
              <option value="mixed">Mixed Reality</option>
            </select>
            
            <select
              value={vrQuality}
              onChange={(e) => setVrQuality(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="ultra">Ultra Quality</option>
              <option value="high">High Quality</option>
              <option value="medium">Medium Quality</option>
              <option value="low">Low Quality</option>
            </select>
            
            <button 
              onClick={toggleVR}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isVrActive 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Headphones className="w-4 h-4" />
              {isVrActive ? 'Exit VR' : 'Enter VR'}
            </button>
            
            <button 
              onClick={inviteToSession}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Users className="w-4 h-4" />
              Invite
            </button>
            
            <button 
              onClick={recordSession}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Camera className="w-4 h-4" />
              Record
            </button>
          </div>
        </div>
      </div>

      {/* VR Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{immersionLevel.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Immersion</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">VR Immersion</h3>
            <p className="text-sm text-gray-600">Current level</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{participantCount}</div>
              <div className="text-xs text-gray-500">Active</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Participants</h3>
            <p className="text-sm text-gray-600">In session</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{getCurrentEnvironment().name.split(' ')[0]}</div>
              <div className="text-xs text-gray-500">Environment</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Current Space</h3>
            <p className="text-sm text-gray-600">{getCurrentEnvironment().category}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{getCurrentEnvironment().popularity}%</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Environment Rating</h3>
            <p className="text-sm text-gray-600">User satisfaction</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main VR Interface */}
        <div className="lg:col-span-3 space-y-6">
          {/* VR Environment Preview */}
          <div className="bg-black rounded-lg p-6 border border-gray-200 relative overflow-hidden" style={{ height: '400px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
              {/* Current Environment Display */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{getCurrentEnvironment().image}</div>
                  <h3 className="text-2xl font-bold mb-2">{getCurrentEnvironment().name}</h3>
                  <p className="text-lg opacity-90 mb-4">{getCurrentEnvironment().description}</p>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getMoodColor(getCurrentEnvironment().mood)}`}>
                    {getCurrentEnvironment().mood} Atmosphere
                  </div>
                </div>

                {/* VR UI Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">VR Active</span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-4">
                  <button
                    onClick={toggleAudio}
                    className={`p-2 rounded-full transition-colors ${
                      audioEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    {audioEnabled ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4 text-white" />}
                  </button>
                  <button
                    onClick={toggleMic}
                    className={`p-2 rounded-full transition-colors ${
                      micEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    {micEnabled ? <Mic className="w-4 h-4 text-white" /> : <MicOff className="w-4 h-4 text-white" />}
                  </button>
                </div>

                {/* Participant Avatars */}
                <div className="absolute bottom-4 left-4 flex gap-3">
                  {sessionParticipants.map((participant) => (
                    <div key={participant.id} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mb-1">
                        {participant.avatar}
                      </div>
                      <span className="text-white text-xs">{participant.name}</span>
                      <div className="flex gap-1 mt-1">
                        <div className={`w-2 h-2 rounded-full ${participant.mic_status === 'on' ? 'bg-green-500' : 'bg-red-500'}`} />
                        <div className={`w-2 h-2 rounded-full ${participant.camera_status === 'on' ? 'bg-blue-500' : 'bg-gray-500'}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* VR Controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <button 
                    onClick={shareScreen}
                    className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                    <Headphones className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Environment Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">VR Environments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vrEnvironments.map((environment) => (
                <div 
                  key={environment.id} 
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    currentEnvironment === environment.id 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => changeEnvironment(environment.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{environment.image}</div>
                    <div className="flex items-center gap-2">
                      {environment.premium && (
                        <Crown className="w-4 h-4 text-yellow-500" />
                      )}
                      <span className="text-sm text-gray-600">{environment.capacity} max</span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-2">{environment.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{environment.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(environment.mood)}`}>
                      {environment.mood}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-sm text-gray-600">{environment.popularity}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {environment.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="text-xs text-gray-500">• {feature}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VR Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vrActivities.map((activity) => (
                <div key={activity.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{activity.name}</h4>
                    <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                      Start
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <div className="font-medium text-gray-900">{activity.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Participants:</span>
                      <div className="font-medium text-gray-900">{activity.participants}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Popularity:</span>
                      <div className="font-medium text-purple-600">{activity.popularity}%</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Engagement:</span>
                      <div className="font-medium text-green-600">{activity.engagement}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Analytics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Environment Usage Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vrUsageStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="environment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sessions" fill="#8b5cf6" name="Sessions" />
                <Bar dataKey="avg_duration" fill="#10b981" name="Avg Duration (min)" />
                <Bar dataKey="satisfaction" fill="#f59e0b" name="Satisfaction %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">VR Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="immersion" stroke="#8b5cf6" strokeWidth={2} name="Immersion %" />
                <Line type="monotone" dataKey="presence" stroke="#10b981" strokeWidth={2} name="Presence %" />
                <Line type="monotone" dataKey="comfort" stroke="#f59e0b" strokeWidth={2} name="Comfort %" />
                <Line type="monotone" dataKey="engagement" stroke="#ef4444" strokeWidth={2} name="Engagement %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Session Participants */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Session Participants
            </h3>
            <div className="space-y-3">
              {sessionParticipants.map((participant) => (
                <div key={participant.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="text-2xl">{participant.avatar}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{participant.name}</div>
                    <div className="text-sm text-gray-600">{participant.status}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className={`w-3 h-3 rounded-full ${participant.mic_status === 'on' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className={`w-3 h-3 rounded-full ${participant.camera_status === 'on' ? 'bg-blue-500' : 'bg-gray-500'}`} />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Users className="w-4 h-4" />
              Invite More
            </button>
          </div>

          {/* VR Device Compatibility */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              Device Compatibility
            </h3>
            <div className="space-y-3">
              {vrDevices.map((device, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{device.device}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(device.performance)}`}>
                      {device.performance}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Compatibility</span>
                      <span className="font-semibold text-purple-600">{device.compatibility}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${device.compatibility}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">Features: {device.features}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VR Gestures */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              VR Gestures
            </h3>
            <div className="space-y-3">
              {vrGestures.map((gesture, index) => (
                <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
                  <span className="text-sm text-gray-900">{gesture.gesture}</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-purple-600">{gesture.usage}%</div>
                    <div className="text-xs text-gray-500">{gesture.success_rate}% success</div>
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
                <Settings className="w-4 h-4" />
                VR Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Save Session
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share Experience
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                VR Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualRealityMeetingSpaces;

