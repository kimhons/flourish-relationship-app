import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, Smartphone, Eye, Zap, Star, Heart, MapPin,
  Users, Settings, Play, Pause, RotateCcw, Share2,
  Download, Upload, Sparkles, Gift, Award, Crown,
  Target, Compass, Navigation, Globe, Wifi, Battery,
  Volume2, VolumeX, Maximize, Minimize, RefreshCw,
  Filter, Layers, Palette, Sliders, Image, Video
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const AugmentedRealityDatingFeatures = () => {
  const [arMode, setArMode] = useState('location');
  const [isArActive, setIsArActive] = useState(false);
  const [arFilter, setArFilter] = useState('romantic');
  const [nearbyUsers, setNearbyUsers] = useState(12);
  const [arAccuracy, setArAccuracy] = useState(94.7);
  const [batteryOptimized, setBatteryOptimized] = useState(true);
  const [privacyMode, setPrivacyMode] = useState('selective');

  // AR Features
  const arFeatures = [
    {
      id: 'location_overlay',
      name: 'Location-Based Overlay',
      description: 'See potential matches in real-world locations',
      icon: <MapPin className="w-5 h-5" />,
      accuracy: 96.8,
      battery_impact: 'Medium',
      popularity: 89.3,
      enabled: true,
      premium: false
    },
    {
      id: 'virtual_gifts',
      name: 'Virtual Gift Sending',
      description: 'Send AR gifts that appear in their environment',
      icon: <Gift className="w-5 h-5" />,
      accuracy: 98.2,
      battery_impact: 'Low',
      popularity: 92.7,
      enabled: true,
      premium: false
    },
    {
      id: 'compatibility_aura',
      name: 'Compatibility Aura',
      description: 'Visual compatibility indicators around profiles',
      icon: <Sparkles className="w-5 h-5" />,
      accuracy: 94.1,
      battery_impact: 'Low',
      popularity: 87.4,
      enabled: false,
      premium: true
    },
    {
      id: 'virtual_dates',
      name: 'Virtual Date Spaces',
      description: 'Create shared AR environments for virtual dates',
      icon: <Heart className="w-5 h-5" />,
      accuracy: 91.6,
      battery_impact: 'High',
      popularity: 78.9,
      enabled: false,
      premium: true
    },
    {
      id: 'interest_bubbles',
      name: 'Interest Bubbles',
      description: 'Floating bubbles showing shared interests',
      icon: <Star className="w-5 h-5" />,
      accuracy: 95.3,
      battery_impact: 'Low',
      popularity: 85.2,
      enabled: true,
      premium: false
    },
    {
      id: 'mood_visualization',
      name: 'Mood Visualization',
      description: 'Real-time mood indicators and emotional auras',
      icon: <Eye className="w-5 h-5" />,
      accuracy: 88.7,
      battery_impact: 'Medium',
      popularity: 73.6,
      enabled: false,
      premium: true
    },
    {
      id: 'distance_rings',
      name: 'Distance Rings',
      description: 'Visual distance indicators for nearby users',
      icon: <Target className="w-5 h-5" />,
      accuracy: 97.9,
      battery_impact: 'Low',
      popularity: 91.8,
      enabled: true,
      premium: false
    },
    {
      id: 'activity_trails',
      name: 'Activity Trails',
      description: 'See where matches have been and what they\'ve done',
      icon: <Navigation className="w-5 h-5" />,
      accuracy: 93.4,
      battery_impact: 'Medium',
      popularity: 69.2,
      enabled: false,
      premium: true
    }
  ];

  // AR Filters
  const arFilters = [
    { id: 'romantic', name: 'Romantic', color: '#ff69b4', description: 'Soft pink hearts and sparkles' },
    { id: 'playful', name: 'Playful', color: '#ffd700', description: 'Fun animations and bright colors' },
    { id: 'elegant', name: 'Elegant', color: '#9370db', description: 'Sophisticated and refined visuals' },
    { id: 'adventurous', name: 'Adventurous', color: '#ff6347', description: 'Dynamic and energetic effects' },
    { id: 'mysterious', name: 'Mysterious', color: '#4b0082', description: 'Dark and intriguing atmosphere' },
    { id: 'natural', name: 'Natural', color: '#228b22', description: 'Earth tones and organic shapes' }
  ];

  // Nearby users simulation
  const nearbyUsersData = [
    {
      id: 1,
      name: 'Sarah',
      age: 28,
      distance: 0.3,
      compatibility: 94,
      interests: ['Photography', 'Hiking', 'Coffee'],
      mood: 'Happy',
      activity: 'At café',
      ar_visible: true
    },
    {
      id: 2,
      name: 'Emma',
      age: 26,
      distance: 0.7,
      compatibility: 87,
      interests: ['Art', 'Music', 'Travel'],
      mood: 'Excited',
      activity: 'Shopping',
      ar_visible: true
    },
    {
      id: 3,
      name: 'Jessica',
      age: 30,
      distance: 1.2,
      compatibility: 91,
      interests: ['Fitness', 'Cooking', 'Books'],
      mood: 'Relaxed',
      activity: 'At gym',
      ar_visible: false
    },
    {
      id: 4,
      name: 'Ashley',
      age: 27,
      distance: 0.5,
      compatibility: 89,
      interests: ['Dancing', 'Movies', 'Food'],
      mood: 'Cheerful',
      activity: 'Restaurant',
      ar_visible: true
    }
  ];

  // AR Usage Statistics
  const arUsageStats = [
    { feature: 'Location Overlay', usage: 89.3, satisfaction: 94.7, retention: 87.2 },
    { feature: 'Virtual Gifts', usage: 76.8, satisfaction: 91.4, retention: 83.9 },
    { feature: 'Interest Bubbles', usage: 68.2, satisfaction: 88.6, retention: 79.3 },
    { feature: 'Distance Rings', usage: 82.7, satisfaction: 92.1, retention: 85.7 },
    { feature: 'Compatibility Aura', usage: 45.3, satisfaction: 89.8, retention: 74.6 },
    { feature: 'Virtual Dates', usage: 34.7, satisfaction: 86.2, retention: 71.8 }
  ];

  // AR Performance Metrics
  const performanceMetrics = [
    { week: 'Week 1', accuracy: 89.2, battery_life: 6.8, user_engagement: 72.4 },
    { week: 'Week 2', accuracy: 91.7, battery_life: 7.2, user_engagement: 78.9 },
    { week: 'Week 3', accuracy: 93.4, battery_life: 7.6, user_engagement: 83.7 },
    { week: 'Week 4', accuracy: 94.8, battery_life: 8.1, user_engagement: 87.2 },
    { week: 'Week 5', accuracy: 95.9, battery_life: 8.4, user_engagement: 89.8 },
    { week: 'Week 6', accuracy: 96.7, battery_life: 8.7, user_engagement: 91.6 },
    { week: 'Week 7', accuracy: 97.3, battery_life: 9.1, user_engagement: 93.4 }
  ];

  // Device compatibility
  const deviceCompatibility = [
    { device: 'iPhone 12+', compatibility: 100, features: 8, performance: 'Excellent' },
    { device: 'iPhone 11', compatibility: 95, features: 7, performance: 'Very Good' },
    { device: 'Samsung Galaxy S21+', compatibility: 98, features: 8, performance: 'Excellent' },
    { device: 'Samsung Galaxy S20', compatibility: 92, features: 6, performance: 'Good' },
    { device: 'Google Pixel 6+', compatibility: 96, features: 7, performance: 'Very Good' },
    { device: 'OnePlus 9+', compatibility: 94, features: 7, performance: 'Very Good' },
    { device: 'Older Devices', compatibility: 75, features: 4, performance: 'Limited' }
  ];

  // AR interaction types
  const interactionTypes = [
    { type: 'Tap to Like', usage: 45.7, success_rate: 23.8 },
    { type: 'Virtual Wave', usage: 32.4, success_rate: 31.2 },
    { type: 'Send AR Gift', usage: 28.9, success_rate: 42.6 },
    { type: 'Interest Bubble Tap', usage: 19.3, success_rate: 18.7 },
    { type: 'Compatibility Check', usage: 15.8, success_rate: 28.4 },
    { type: 'Virtual High-Five', usage: 12.6, success_rate: 35.9 }
  ];

  useEffect(() => {
    // Simulate real-time AR updates
    const interval = setInterval(() => {
      setNearbyUsers(prev => Math.max(1, prev + Math.floor((Math.random() - 0.5) * 3)));
      setArAccuracy(prev => Math.min(prev + (Math.random() - 0.4) * 0.3, 100));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleAR = () => {
    setIsArActive(!isArActive);
    console.log(`AR ${!isArActive ? 'activated' : 'deactivated'}`);
    // In a real app, this would start/stop AR camera and tracking
  };

  const sendVirtualGift = (userId, giftType) => {
    console.log(`Sending ${giftType} to user ${userId}`);
    // In a real app, this would trigger AR gift animation
  };

  const toggleFeature = (featureId) => {
    console.log(`Toggling AR feature: ${featureId}`);
    // In a real app, this would enable/disable specific AR features
  };

  const calibrateAR = () => {
    console.log('Calibrating AR tracking...');
    // In a real app, this would recalibrate AR positioning and tracking
  };

  const shareARExperience = () => {
    console.log('Sharing AR experience...');
    // In a real app, this would share AR screenshots or videos
  };

  const getBatteryImpactColor = (impact) => {
    switch (impact) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
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

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'Happy': return 'text-yellow-600 bg-yellow-100';
      case 'Excited': return 'text-orange-600 bg-orange-100';
      case 'Relaxed': return 'text-green-600 bg-green-100';
      case 'Cheerful': return 'text-pink-600 bg-pink-100';
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
              <Camera className="w-8 h-8 text-purple-600" />
              Augmented Reality Dating Features
            </h1>
            <p className="text-gray-600">
              Revolutionary AR experiences that bring digital dating into the real world
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={arMode}
              onChange={(e) => setArMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="location">Location Mode</option>
              <option value="social">Social Mode</option>
              <option value="discovery">Discovery Mode</option>
              <option value="date">Date Mode</option>
            </select>
            
            <select
              value={arFilter}
              onChange={(e) => setArFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {arFilters.map(filter => (
                <option key={filter.id} value={filter.id}>
                  {filter.name} Filter
                </option>
              ))}
            </select>
            
            <button 
              onClick={toggleAR}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isArActive 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Camera className="w-4 h-4" />
              {isArActive ? 'Stop AR' : 'Start AR'}
            </button>
            
            <button 
              onClick={calibrateAR}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Calibrate
            </button>
            
            <button 
              onClick={shareARExperience}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* AR Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{arAccuracy.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AR Tracking</h3>
            <p className="text-sm text-gray-600">Real-time accuracy</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{nearbyUsers}</div>
              <div className="text-xs text-gray-500">Nearby</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">AR Visible Users</h3>
            <p className="text-sm text-gray-600">In your area</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Battery className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">8.7h</div>
              <div className="text-xs text-gray-500">Battery</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Optimized Usage</h3>
            <p className="text-sm text-gray-600">Estimated life</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">93.4%</div>
              <div className="text-xs text-gray-500">Engagement</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Engagement</h3>
            <p className="text-sm text-gray-600">With AR features</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main AR Interface */}
        <div className="lg:col-span-3 space-y-6">
          {/* AR Camera View Simulation */}
          <div className="bg-black rounded-lg p-6 border border-gray-200 relative overflow-hidden" style={{ height: '400px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              {/* Simulated AR overlay */}
              <div className="relative w-full h-full">
                {/* AR UI Elements */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">AR Active</span>
                </div>
                
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <Battery className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">87%</span>
                </div>

                {/* Simulated user markers */}
                {nearbyUsersData.filter(user => user.ar_visible).map((user, index) => (
                  <div
                    key={user.id}
                    className="absolute bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                    style={{
                      left: `${20 + index * 25}%`,
                      top: `${30 + index * 15}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{user.name}</div>
                        <div className="text-xs text-gray-600">{user.distance}km away</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs text-gray-700">{user.compatibility}% match</span>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(user.mood)}`}>
                      {user.mood}
                    </div>
                    
                    <div className="flex gap-1 mt-2">
                      <button
                        onClick={() => sendVirtualGift(user.id, 'heart')}
                        className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <Heart className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => sendVirtualGift(user.id, 'wave')}
                        className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Sparkles className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* AR Filter Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="w-full h-full opacity-20"
                    style={{ 
                      background: `radial-gradient(circle, ${arFilters.find(f => f.id === arFilter)?.color}20 0%, transparent 70%)`
                    }}
                  />
                </div>

                {/* AR Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                  <button className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                    <Camera className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AR Features Grid */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AR Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {arFeatures.map((feature) => (
                <div key={feature.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.name}</h4>
                        {feature.premium && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Premium</span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFeature(feature.id)}
                      className={`w-10 h-5 rounded-full transition-colors ${
                        feature.enabled ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          feature.enabled ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-semibold text-purple-600">{feature.accuracy}%</div>
                      <div className="text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className={`px-1 py-0.5 rounded text-xs font-medium ${getBatteryImpactColor(feature.battery_impact)}`}>
                        {feature.battery_impact}
                      </div>
                      <div className="text-gray-500">Battery</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{feature.popularity}%</div>
                      <div className="text-gray-500">Popular</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AR Usage Analytics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AR Feature Usage Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={arUsageStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="usage" fill="#8b5cf6" name="Usage %" />
                <Bar dataKey="satisfaction" fill="#10b981" name="Satisfaction %" />
                <Bar dataKey="retention" fill="#f59e0b" name="Retention %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Trends */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AR Performance Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={2} name="Accuracy %" />
                <Line type="monotone" dataKey="battery_life" stroke="#10b981" strokeWidth={2} name="Battery Life (hours)" />
                <Line type="monotone" dataKey="user_engagement" stroke="#f59e0b" strokeWidth={2} name="User Engagement %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Interaction Types */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AR Interaction Success Rates</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={interactionTypes} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="type" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="usage" fill="#8b5cf6" name="Usage %" />
                <Bar dataKey="success_rate" fill="#10b981" name="Success Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Nearby Users */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nearby Users
            </h3>
            <div className="space-y-3">
              {nearbyUsersData.map((user) => (
                <div key={user.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {user.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{user.name}, {user.age}</div>
                      <div className="text-xs text-gray-600">{user.distance}km • {user.activity}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${user.ar_visible ? 'bg-green-500' : 'bg-gray-300'}`} />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm text-gray-700">{user.compatibility}% match</span>
                  </div>
                  
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(user.mood)} mb-2`}>
                    {user.mood}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {user.interests.slice(0, 2).map((interest, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Compatibility */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Device Compatibility
            </h3>
            <div className="space-y-3">
              {deviceCompatibility.map((device, index) => (
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
                    <div className="text-xs text-gray-500">{device.features}/8 features supported</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AR Settings */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">AR Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Mode</label>
                <select
                  value={privacyMode}
                  onChange={(e) => setPrivacyMode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="public">Public (Visible to all)</option>
                  <option value="selective">Selective (Matches only)</option>
                  <option value="private">Private (Hidden)</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={batteryOptimized}
                    onChange={(e) => setBatteryOptimized(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Battery Optimization</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Location Tracking</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Advanced Tracking</span>
                </label>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                AR Preferences
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Save AR Session
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                AR Achievements
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4" />
                Filter Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AugmentedRealityDatingFeatures;

