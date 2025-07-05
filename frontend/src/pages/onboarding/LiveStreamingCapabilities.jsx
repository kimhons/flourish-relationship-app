import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, VideoOff, Mic, MicOff, Camera, CameraOff, Monitor,
  Users, Eye, Heart, MessageCircle, Share2, Settings, Gift,
  Play, Pause, Square, RotateCcw, Maximize, Minimize, Volume2,
  VolumeX, Wifi, WifiOff, Signal, Battery, Clock, Star,
  ThumbsUp, ThumbsDown, Smile, Send, Filter, Sparkles,
  Crown, Award, Zap, Fire, Target, TrendingUp, Download
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const LiveStreamingCapabilities = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [streamMode, setStreamMode] = useState('private'); // private, public, group
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [screenShare, setScreenShare] = useState(false);
  const [streamQuality, setStreamQuality] = useState('HD');
  const [viewerCount, setViewerCount] = useState(0);
  const [streamDuration, setStreamDuration] = useState(0);

  // Stream settings and controls
  const [streamSettings, setStreamSettings] = useState({
    title: 'Coffee Date Stream ☕',
    description: 'Join us for a cozy virtual coffee date!',
    category: 'Date Night',
    privacy: 'private',
    allowComments: true,
    allowGifts: true,
    recordStream: false,
    notifications: true
  });

  // Live stream statistics
  const [streamStats, setStreamStats] = useState({
    totalViewers: 47,
    peakViewers: 23,
    averageWatchTime: 8.5,
    engagement: 94.2,
    likes: 156,
    comments: 89,
    gifts: 12,
    shares: 7
  });

  // Current viewers
  const [liveViewers, setLiveViewers] = useState([
    { id: 1, name: 'Sarah M.', avatar: '👩', status: 'watching', joinTime: '2 min ago', isPartner: true },
    { id: 2, name: 'Emma L.', avatar: '👱‍♀️', status: 'watching', joinTime: '5 min ago', isPartner: false },
    { id: 3, name: 'Alex K.', avatar: '👨', status: 'watching', joinTime: '8 min ago', isPartner: false },
    { id: 4, name: 'Mike R.', avatar: '👨‍🦱', status: 'typing', joinTime: '12 min ago', isPartner: false },
    { id: 5, name: 'Lisa T.', avatar: '👩‍🦳', status: 'watching', joinTime: '15 min ago', isPartner: false }
  ]);

  // Live chat messages
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Sarah M.', avatar: '👩', message: 'You two are so cute together! 💕', timestamp: '2:45 PM', isPartner: true },
    { id: 2, user: 'Emma L.', avatar: '👱‍♀️', message: 'Love this coffee date idea!', timestamp: '2:46 PM', isPartner: false },
    { id: 3, user: 'Alex K.', avatar: '👨', message: 'Where did you get that coffee mug?', timestamp: '2:47 PM', isPartner: false },
    { id: 4, user: 'Mike R.', avatar: '👨‍🦱', message: 'Great chemistry! 🔥', timestamp: '2:48 PM', isPartner: false },
    { id: 5, user: 'Lisa T.', avatar: '👩‍🦳', message: 'This is giving me date ideas!', timestamp: '2:49 PM', isPartner: false }
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Stream categories and themes
  const streamCategories = [
    { id: 'date_night', name: 'Date Night', icon: '💕', color: 'bg-pink-100 text-pink-600' },
    { id: 'cooking', name: 'Cooking Together', icon: '👨‍🍳', color: 'bg-orange-100 text-orange-600' },
    { id: 'gaming', name: 'Gaming', icon: '🎮', color: 'bg-purple-100 text-purple-600' },
    { id: 'travel', name: 'Travel Stories', icon: '✈️', color: 'bg-blue-100 text-blue-600' },
    { id: 'fitness', name: 'Workout', icon: '💪', color: 'bg-green-100 text-green-600' },
    { id: 'music', name: 'Music & Dance', icon: '🎵', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'art', name: 'Art & Creativity', icon: '🎨', color: 'bg-indigo-100 text-indigo-600' },
    { id: 'casual', name: 'Just Chatting', icon: '💬', color: 'bg-gray-100 text-gray-600' }
  ];

  // Virtual gifts
  const virtualGifts = [
    { id: 'heart', name: 'Heart', emoji: '❤️', cost: 10, count: 23 },
    { id: 'rose', name: 'Rose', emoji: '🌹', cost: 25, count: 8 },
    { id: 'coffee', name: 'Coffee', emoji: '☕', cost: 15, count: 12 },
    { id: 'cake', name: 'Cake', emoji: '🎂', cost: 50, count: 3 },
    { id: 'diamond', name: 'Diamond', emoji: '💎', cost: 100, count: 1 },
    { id: 'crown', name: 'Crown', emoji: '👑', cost: 200, count: 0 }
  ];

  // Stream filters and effects
  const streamFilters = [
    { id: 'none', name: 'None', preview: '📷' },
    { id: 'romantic', name: 'Romantic', preview: '💕' },
    { id: 'vintage', name: 'Vintage', preview: '📸' },
    { id: 'bright', name: 'Bright', preview: '☀️' },
    { id: 'cozy', name: 'Cozy', preview: '🕯️' },
    { id: 'party', name: 'Party', preview: '🎉' }
  ];

  // Stream analytics data
  const viewershipData = [
    { time: '0m', viewers: 1, engagement: 100 },
    { time: '2m', viewers: 3, engagement: 95 },
    { time: '4m', viewers: 8, engagement: 92 },
    { time: '6m', viewers: 15, engagement: 88 },
    { time: '8m', viewers: 23, engagement: 94 },
    { time: '10m', viewers: 19, engagement: 91 },
    { time: '12m', viewers: 21, engagement: 96 },
    { time: '14m', viewers: 17, engagement: 89 }
  ];

  const engagementBreakdown = [
    { type: 'Likes', count: 156, percentage: 45, color: '#ef4444' },
    { type: 'Comments', count: 89, percentage: 26, color: '#3b82f6' },
    { type: 'Shares', count: 7, percentage: 2, color: '#10b981' },
    { type: 'Gifts', count: 12, percentage: 3, color: '#f59e0b' },
    { type: 'Watch Time', count: 82, percentage: 24, color: '#8b5cf6' }
  ];

  // Featured streams
  const featuredStreams = [
    {
      id: 1,
      title: 'Cooking Italian Together 🍝',
      streamers: ['Marco & Sofia'],
      viewers: 234,
      category: 'Cooking',
      thumbnail: '👨‍🍳',
      isLive: true,
      duration: '45 min'
    },
    {
      id: 2,
      title: 'Virtual Museum Date 🏛️',
      streamers: ['David & Emma'],
      viewers: 89,
      category: 'Culture',
      thumbnail: '🎨',
      isLive: true,
      duration: '23 min'
    },
    {
      id: 3,
      title: 'Gaming Night Challenge 🎮',
      streamers: ['Alex & Sam'],
      viewers: 156,
      category: 'Gaming',
      thumbnail: '🎮',
      isLive: true,
      duration: '1h 12m'
    },
    {
      id: 4,
      title: 'Sunset Beach Walk 🌅',
      streamers: ['Jake & Mia'],
      viewers: 67,
      category: 'Travel',
      thumbnail: '🏖️',
      isLive: false,
      duration: '28 min'
    }
  ];

  // Stream recommendations
  const streamRecommendations = [
    {
      id: 'coffee_date',
      title: 'Virtual Coffee Date',
      description: 'Share a cozy coffee moment with your partner',
      duration: '15-30 min',
      difficulty: 'Easy',
      popularity: 94
    },
    {
      id: 'cooking_challenge',
      title: 'Cooking Challenge',
      description: 'Cook the same recipe together from different locations',
      duration: '45-60 min',
      difficulty: 'Medium',
      popularity: 87
    },
    {
      id: 'workout_session',
      title: 'Couples Workout',
      description: 'Stay fit together with synchronized exercises',
      duration: '30-45 min',
      difficulty: 'Medium',
      popularity: 76
    },
    {
      id: 'art_creation',
      title: 'Art & Create',
      description: 'Create art together and share your creative process',
      duration: '60-90 min',
      difficulty: 'Easy',
      popularity: 82
    }
  ];

  useEffect(() => {
    // Simulate live viewer count updates
    const interval = setInterval(() => {
      if (isStreaming) {
        setViewerCount(prev => {
          const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
          return Math.max(0, Math.min(50, prev + change));
        });
        
        setStreamDuration(prev => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isStreaming]);

  useEffect(() => {
    // Simulate new chat messages
    const messageInterval = setInterval(() => {
      if (isStreaming && Math.random() > 0.7) {
        const randomMessages = [
          'This is so sweet! 💕',
          'You two are perfect together!',
          'Love this stream!',
          'Great chemistry! 🔥',
          'This is giving me relationship goals',
          'So cute! 😍',
          'Amazing content!',
          'Keep it up!'
        ];
        
        const randomUsers = [
          { name: 'Jenny K.', avatar: '👩‍🦰' },
          { name: 'Tom S.', avatar: '👨‍🦲' },
          { name: 'Anna P.', avatar: '👩‍🦱' },
          { name: 'Chris M.', avatar: '👨‍🦳' }
        ];
        
        const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        
        const newMsg = {
          id: Date.now(),
          user: randomUser.name,
          avatar: randomUser.avatar,
          message: randomMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isPartner: false
        };
        
        setChatMessages(prev => [...prev.slice(-9), newMsg]);
      }
    }, 8000);

    return () => clearInterval(messageInterval);
  }, [isStreaming]);

  const startStream = () => {
    setIsStreaming(true);
    setViewerCount(1);
    setStreamDuration(0);
    console.log('Starting live stream...');
    // In a real app, this would initialize camera and streaming
  };

  const stopStream = () => {
    setIsStreaming(false);
    setViewerCount(0);
    console.log('Stopping live stream...');
    // In a real app, this would stop camera and streaming
  };

  const toggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
    console.log(`Camera ${!cameraEnabled ? 'enabled' : 'disabled'}`);
  };

  const toggleMic = () => {
    setMicEnabled(!micEnabled);
    console.log(`Microphone ${!micEnabled ? 'enabled' : 'disabled'}`);
  };

  const toggleScreenShare = () => {
    setScreenShare(!screenShare);
    console.log(`Screen sharing ${!screenShare ? 'enabled' : 'disabled'}`);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: 'You',
        avatar: '😊',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isPartner: false
      };
      
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
      console.log('Message sent:', newMessage);
    }
  };

  const sendGift = (giftId) => {
    console.log(`Sending gift: ${giftId}`);
    // In a real app, this would send virtual gift
  };

  const joinStream = (streamId) => {
    setIsWatching(true);
    console.log(`Joining stream: ${streamId}`);
    // In a real app, this would join the selected stream
  };

  const leaveStream = () => {
    setIsWatching(false);
    console.log('Leaving stream...');
  };

  const changeStreamQuality = (quality) => {
    setStreamQuality(quality);
    console.log(`Stream quality changed to: ${quality}`);
  };

  const applyFilter = (filterId) => {
    console.log(`Applying filter: ${filterId}`);
    // In a real app, this would apply video filter
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'HD': return 'text-green-600 bg-green-100';
      case 'SD': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
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
              <Video className="w-8 h-8 text-purple-600" />
              Live Streaming Platform
            </h1>
            <p className="text-gray-600">
              Share intimate moments and connect through live video streaming experiences
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={streamMode}
              onChange={(e) => setStreamMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="private">Private Stream</option>
              <option value="public">Public Stream</option>
              <option value="group">Group Stream</option>
            </select>
            
            <select
              value={streamQuality}
              onChange={(e) => changeStreamQuality(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="HD">HD Quality</option>
              <option value="SD">SD Quality</option>
              <option value="Low">Low Quality</option>
            </select>
            
            {!isStreaming ? (
              <button 
                onClick={startStream}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Video className="w-4 h-4" />
                Go Live
              </button>
            ) : (
              <button 
                onClick={stopStream}
                className="flex items-center gap-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Square className="w-4 h-4" />
                End Stream
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stream Status Bar */}
      {isStreaming && (
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold">LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{viewerCount} viewers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatDuration(streamDuration)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(streamQuality)}`}>
              {streamQuality}
            </span>
            <div className="flex items-center gap-1">
              <Signal className="w-4 h-4" />
              <span className="text-sm">Strong</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Streaming Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Video Stream Interface */}
          <div className="bg-black rounded-lg overflow-hidden relative" style={{ height: '500px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
              {/* Stream Content */}
              <div className="relative w-full h-full flex items-center justify-center">
                {isStreaming || isWatching ? (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📹</div>
                    <h3 className="text-2xl font-bold mb-2">
                      {isStreaming ? 'You are Live!' : 'Watching Live Stream'}
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      {isStreaming ? streamSettings.title : 'Coffee Date Stream ☕'}
                    </p>
                    {isStreaming && (
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>{viewerCount} watching</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>{streamStats.likes} likes</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📷</div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Stream</h3>
                    <p className="text-lg opacity-90 mb-4">Click "Go Live" to start your stream</p>
                    <button 
                      onClick={startStream}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Start Streaming
                    </button>
                  </div>
                )}

                {/* Stream Overlay Elements */}
                {(isStreaming || isWatching) && (
                  <>
                    {/* Live indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-bold bg-red-600 px-2 py-1 rounded">LIVE</span>
                    </div>

                    {/* Viewer count */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">{viewerCount}</span>
                    </div>

                    {/* Stream title */}
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg max-w-md">
                      <h4 className="font-bold">{streamSettings.title}</h4>
                      <p className="text-sm opacity-75">{streamSettings.description}</p>
                    </div>

                    {/* Engagement indicators */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                      <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{streamStats.likes}</span>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{streamStats.comments}</span>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg flex items-center gap-2">
                        <Gift className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">{streamStats.gifts}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stream Controls */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Stream Controls</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Quality:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(streamQuality)}`}>
                  {streamQuality}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button 
                onClick={toggleCamera}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                  cameraEnabled 
                    ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                {cameraEnabled ? <Camera className="w-6 h-6" /> : <CameraOff className="w-6 h-6" />}
                <span className="text-sm font-medium">Camera</span>
              </button>

              <button 
                onClick={toggleMic}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                  micEnabled 
                    ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                {micEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                <span className="text-sm font-medium">Mic</span>
              </button>

              <button 
                onClick={toggleScreenShare}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                  screenShare 
                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Monitor className="w-6 h-6" />
                <span className="text-sm font-medium">Share</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-4 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
                <Filter className="w-6 h-6" />
                <span className="text-sm font-medium">Filters</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-4 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition-colors">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-medium">Effects</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <Settings className="w-6 h-6" />
                <span className="text-sm font-medium">Settings</span>
              </button>
            </div>
          </div>

          {/* Stream Filters */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Filters & Effects</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {streamFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => applyFilter(filter.id)}
                  className="flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors"
                >
                  <span className="text-2xl">{filter.preview}</span>
                  <span className="text-xs font-medium text-gray-700">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stream Analytics */}
          {isStreaming && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Viewership Over Time</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={viewershipData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="viewers" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Engagement Breakdown</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={engagementBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {engagementBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Featured Streams */}
          {!isStreaming && !isWatching && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Live Streams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredStreams.map((stream) => (
                  <div key={stream.id} className="group border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl">{stream.thumbnail}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {stream.title}
                        </h4>
                        <p className="text-sm text-gray-600">{stream.streamers.join(', ')}</p>
                      </div>
                      {stream.isLive && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-red-600 font-medium">LIVE</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{stream.viewers}</span>
                        </div>
                        <span>{stream.duration}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {stream.category}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => joinStream(stream.id)}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      {stream.isLive ? 'Join Live' : 'Watch Recording'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Live Chat */}
          <div className="bg-white rounded-lg border border-gray-200 h-96 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <div className="text-lg">{message.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${
                        message.isPartner ? 'text-pink-600' : 'text-gray-900'
                      }`}>
                        {message.user}
                      </span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button 
                  onClick={sendMessage}
                  className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Current Viewers */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Live Viewers ({liveViewers.length})
            </h3>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {liveViewers.map((viewer) => (
                <div key={viewer.id} className="flex items-center gap-3">
                  <div className="text-lg">{viewer.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        viewer.isPartner ? 'text-pink-600' : 'text-gray-900'
                      }`}>
                        {viewer.name}
                      </span>
                      {viewer.isPartner && (
                        <Crown className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        viewer.status === 'watching' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="text-xs text-gray-500">{viewer.joinTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Gifts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Virtual Gifts
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {virtualGifts.map((gift) => (
                <button
                  key={gift.id}
                  onClick={() => sendGift(gift.id)}
                  className="flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors"
                >
                  <span className="text-2xl">{gift.emoji}</span>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-900">{gift.name}</div>
                    <div className="text-xs text-gray-500">{gift.cost} coins</div>
                    {gift.count > 0 && (
                      <div className="text-xs text-purple-600">×{gift.count}</div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Stream Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Stream Categories</h3>
            <div className="space-y-2">
              {streamCategories.slice(0, 6).map((category) => (
                <button
                  key={category.id}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${category.color} hover:opacity-80`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stream Recommendations */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Stream Ideas</h3>
            <div className="space-y-3">
              {streamRecommendations.slice(0, 3).map((rec) => (
                <div key={rec.id} className="p-3 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{rec.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{rec.duration}</span>
                    <span>{rec.popularity}% like</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingCapabilities;

