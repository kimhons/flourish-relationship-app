import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Camera, 
  CameraOff, Settings, Users, Share2, MessageCircle, Heart,
  Maximize, Minimize, Volume2, VolumeX, RotateCcw, Zap,
  Filter, Sparkles, Star, Award, Gift, Clock, MapPin,
  ThumbsUp, ThumbsDown, Smile, Frown, Eye, EyeOff,
  Record, Square, Play, Pause, Download, Upload, Send
} from 'lucide-react';

const AdvancedVideoCommunicationSuite = () => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [isRecording, setIsRecording] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState('excellent');
  const [participantCount, setParticipantCount] = useState(2);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [callMode, setCallMode] = useState('video'); // video, audio, group
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [backgroundBlur, setBackgroundBlur] = useState(false);
  const [virtualBackground, setVirtualBackground] = useState('none');
  const [beautyFilter, setBeautyFilter] = useState(0);
  const [lightingAdjustment, setLightingAdjustment] = useState(50);

  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const chatRef = useRef(null);

  // Video filters and effects
  const videoFilters = [
    { id: 'none', name: 'No Filter', icon: '🚫' },
    { id: 'vintage', name: 'Vintage', icon: '📷' },
    { id: 'warm', name: 'Warm', icon: '🌅' },
    { id: 'cool', name: 'Cool', icon: '❄️' },
    { id: 'dramatic', name: 'Dramatic', icon: '🎭' },
    { id: 'soft', name: 'Soft Focus', icon: '✨' },
    { id: 'black_white', name: 'Black & White', icon: '⚫' },
    { id: 'sepia', name: 'Sepia', icon: '🟤' }
  ];

  // Virtual backgrounds
  const virtualBackgrounds = [
    { id: 'none', name: 'No Background', preview: '🚫' },
    { id: 'blur', name: 'Blur Background', preview: '🌫️' },
    { id: 'cafe', name: 'Cozy Cafe', preview: '☕' },
    { id: 'beach', name: 'Beach Sunset', preview: '🏖️' },
    { id: 'city', name: 'City Skyline', preview: '🏙️' },
    { id: 'library', name: 'Library', preview: '📚' },
    { id: 'garden', name: 'Garden', preview: '🌸' },
    { id: 'space', name: 'Space', preview: '🌌' }
  ];

  // Call quality metrics
  const qualityMetrics = {
    excellent: { color: 'text-green-600', bars: 4, latency: '12ms', bandwidth: '2.1 Mbps' },
    good: { color: 'text-blue-600', bars: 3, latency: '28ms', bandwidth: '1.8 Mbps' },
    fair: { color: 'text-yellow-600', bars: 2, latency: '45ms', bandwidth: '1.2 Mbps' },
    poor: { color: 'text-red-600', bars: 1, latency: '89ms', bandwidth: '0.8 Mbps' }
  };

  // Sample chat messages
  const sampleMessages = [
    { id: 1, sender: 'Sarah', message: 'Hey! You look great today! 😊', timestamp: '14:30', type: 'text' },
    { id: 2, sender: 'You', message: 'Thank you! I love your background, is that your place?', timestamp: '14:31', type: 'text' },
    { id: 3, sender: 'Sarah', message: 'Yes! It\'s my favorite reading corner 📚', timestamp: '14:32', type: 'text' },
    { id: 4, sender: 'System', message: 'Sarah sent a virtual gift: Coffee ☕', timestamp: '14:33', type: 'gift' },
    { id: 5, sender: 'You', message: 'That\'s so sweet! Thank you! ❤️', timestamp: '14:34', type: 'text' }
  ];

  // Call statistics
  const callStats = {
    total_calls: 1247,
    successful_calls: 1189,
    average_duration: '18:34',
    success_rate: 95.3,
    user_satisfaction: 4.8,
    technical_quality: 4.7,
    connection_stability: 96.2
  };

  // Advanced features
  const advancedFeatures = [
    {
      id: 'ai_enhancement',
      name: 'AI Video Enhancement',
      description: 'Automatic lighting and quality optimization',
      enabled: true,
      premium: false
    },
    {
      id: 'noise_cancellation',
      name: 'AI Noise Cancellation',
      description: 'Remove background noise automatically',
      enabled: true,
      premium: false
    },
    {
      id: 'auto_framing',
      name: 'Smart Auto-Framing',
      description: 'Automatically center yourself in frame',
      enabled: false,
      premium: true
    },
    {
      id: 'gesture_recognition',
      name: 'Gesture Recognition',
      description: 'Control call with hand gestures',
      enabled: false,
      premium: true
    },
    {
      id: 'emotion_detection',
      name: 'Emotion Detection',
      description: 'Real-time emotion analysis and feedback',
      enabled: false,
      premium: true
    },
    {
      id: 'call_recording',
      name: 'Call Recording',
      description: 'Record calls with consent',
      enabled: false,
      premium: true
    }
  ];

  useEffect(() => {
    let interval;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  useEffect(() => {
    setChatMessages(sampleMessages);
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startCall = () => {
    setIsCallActive(true);
    setCallDuration(0);
    console.log('Starting video call...');
    // In a real app, this would initialize WebRTC connection
  };

  const endCall = () => {
    setIsCallActive(false);
    setCallDuration(0);
    setIsRecording(false);
    console.log('Ending video call...');
    // In a real app, this would close WebRTC connection
  };

  const toggleVideo = () => {
    setIsVideoEnabled(!isVideoEnabled);
    console.log(`Video ${!isVideoEnabled ? 'enabled' : 'disabled'}`);
  };

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    console.log(`Audio ${!isAudioEnabled ? 'enabled' : 'disabled'}`);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    console.log(`Recording ${!isRecording ? 'started' : 'stopped'}`);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    console.log(`Screen sharing ${!isScreenSharing ? 'started' : 'stopped'}`);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        sender: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
      
      // Auto-scroll to bottom
      setTimeout(() => {
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 100);
    }
  };

  const sendVirtualGift = (gift) => {
    const giftMessage = {
      id: chatMessages.length + 1,
      sender: 'You',
      message: `Sent a virtual gift: ${gift}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'gift'
    };
    setChatMessages([...chatMessages, giftMessage]);
  };

  const applyFilter = (filterId) => {
    setSelectedFilter(filterId);
    console.log(`Applied filter: ${filterId}`);
    // In a real app, this would apply video filter
  };

  const changeVirtualBackground = (backgroundId) => {
    setVirtualBackground(backgroundId);
    console.log(`Changed virtual background: ${backgroundId}`);
    // In a real app, this would apply virtual background
  };

  const adjustBeautyFilter = (value) => {
    setBeautyFilter(value);
    console.log(`Beauty filter adjusted: ${value}`);
    // In a real app, this would apply beauty filter
  };

  const adjustLighting = (value) => {
    setLightingAdjustment(value);
    console.log(`Lighting adjusted: ${value}`);
    // In a real app, this would adjust lighting
  };

  const switchCallMode = (mode) => {
    setCallMode(mode);
    console.log(`Switched to ${mode} mode`);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    console.log(`Fullscreen ${!isFullscreen ? 'enabled' : 'disabled'}`);
  };

  const qualityInfo = qualityMetrics[connectionQuality];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Video className="w-8 h-8 text-purple-600" />
              Advanced Video Communication Suite
            </h1>
            <p className="text-gray-600">
              Revolutionary video calling with AI enhancement, filters, and interactive features
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${qualityInfo.color.replace('text-', 'bg-')}`}></div>
              <span className="text-sm font-medium text-gray-700">
                {connectionQuality.charAt(0).toUpperCase() + connectionQuality.slice(1)} Quality
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-4 rounded-full ${
                    i < qualityInfo.bars ? qualityInfo.color.replace('text-', 'bg-') : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <select
              value={callMode}
              onChange={(e) => switchCallMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="video">Video Call</option>
              <option value="audio">Audio Only</option>
              <option value="group">Group Call</option>
            </select>
          </div>
        </div>
      </div>

      {/* Call Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{callStats.total_calls.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Total Calls</h3>
            <p className="text-sm text-gray-600">All time video calls</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <ThumbsUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{callStats.success_rate}%</div>
              <div className="text-xs text-gray-500">Success</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Success Rate</h3>
            <p className="text-sm text-gray-600">Successful connections</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{callStats.average_duration}</div>
              <div className="text-xs text-gray-500">Average</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Call Duration</h3>
            <p className="text-sm text-gray-600">Average call length</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{callStats.user_satisfaction}</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">User Rating</h3>
            <p className="text-sm text-gray-600">Average satisfaction</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Video Call Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Video Call Interface</h3>
              <div className="flex items-center gap-3">
                {isCallActive && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live - {formatDuration(callDuration)}</span>
                  </div>
                )}
                {isRecording && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full">
                    <Record className="w-4 h-4" />
                    <span className="text-sm font-medium">Recording</span>
                  </div>
                )}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Main Video Area */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
              {/* Remote Video (Main) */}
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                {isCallActive ? (
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-16 h-16" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Sarah Johnson</h4>
                    <p className="text-white/80">Connected - {formatDuration(callDuration)}</p>
                    {selectedFilter !== 'none' && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                        Filter: {videoFilters.find(f => f.id === selectedFilter)?.name}
                      </div>
                    )}
                    {virtualBackground !== 'none' && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                        Background: {virtualBackgrounds.find(b => b.id === virtualBackground)?.name}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <Video className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <h4 className="text-xl font-semibold mb-2">Ready to Connect</h4>
                    <p className="text-white/80">Start a video call to begin</p>
                  </div>
                )}
              </div>

              {/* Local Video (Picture-in-Picture) */}
              {isCallActive && (
                <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    {isVideoEnabled ? (
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Camera className="w-8 h-8" />
                        </div>
                        <p className="text-sm">You</p>
                      </div>
                    ) : (
                      <div className="text-center text-white">
                        <CameraOff className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm opacity-75">Camera Off</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Connection Quality Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/50 text-white rounded-full">
                <div className={`w-2 h-2 rounded-full ${qualityInfo.color.replace('text-', 'bg-')}`}></div>
                <span className="text-sm">{qualityInfo.latency} • {qualityInfo.bandwidth}</span>
              </div>

              {/* Screen Sharing Indicator */}
              {isScreenSharing && (
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Screen Sharing
                </div>
              )}
            </div>

            {/* Call Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={toggleAudio}
                className={`p-4 rounded-full transition-colors ${
                  isAudioEnabled 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                {isAudioEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </button>

              <button
                onClick={toggleVideo}
                className={`p-4 rounded-full transition-colors ${
                  isVideoEnabled 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                }`}
              >
                {isVideoEnabled ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </button>

              <button
                onClick={toggleScreenShare}
                className={`p-4 rounded-full transition-colors ${
                  isScreenSharing 
                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Share2 className="w-6 h-6" />
              </button>

              <button
                onClick={toggleRecording}
                className={`p-4 rounded-full transition-colors ${
                  isRecording 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <Square className="w-6 h-6" /> : <Record className="w-6 h-6" />}
              </button>

              {isCallActive ? (
                <button
                  onClick={endCall}
                  className="p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  <PhoneOff className="w-6 h-6" />
                </button>
              ) : (
                <button
                  onClick={startCall}
                  className="p-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </button>
              )}

              <button className="p-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
            </div>

            {/* Video Enhancement Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Video Filters</h4>
                <div className="grid grid-cols-4 gap-2">
                  {videoFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => applyFilter(filter.id)}
                      className={`p-3 rounded-lg border text-center transition-colors ${
                        selectedFilter === filter.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{filter.icon}</div>
                      <div className="text-xs text-gray-600">{filter.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Beauty & Lighting */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Enhancement</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Beauty Filter</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={beautyFilter}
                      onChange={(e) => adjustBeautyFilter(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-xs text-gray-500 mt-1">{beautyFilter}%</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Lighting</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lightingAdjustment}
                      onChange={(e) => adjustLighting(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-xs text-gray-500 mt-1">{lightingAdjustment}%</div>
                  </div>
                </div>
              </div>

              {/* Virtual Backgrounds */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Virtual Background</h4>
                <div className="grid grid-cols-4 gap-2">
                  {virtualBackgrounds.slice(0, 8).map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() => changeVirtualBackground(bg.id)}
                      className={`p-3 rounded-lg border text-center transition-colors ${
                        virtualBackground === bg.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{bg.preview}</div>
                      <div className="text-xs text-gray-600">{bg.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advancedFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">{feature.name}</h4>
                      {feature.premium && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Premium</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                  <div className="ml-4">
                    <button
                      className={`w-12 h-6 rounded-full transition-colors ${
                        feature.enabled ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          feature.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200 h-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat & Gifts
            </h3>

            {/* Chat Messages */}
            <div 
              ref={chatRef}
              className="h-96 overflow-y-auto mb-4 space-y-3 border border-gray-200 rounded-lg p-3"
            >
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'You' 
                      ? 'bg-purple-600 text-white' 
                      : msg.type === 'gift'
                        ? 'bg-yellow-100 text-yellow-800'
                        : msg.type === 'system'
                          ? 'bg-gray-100 text-gray-600'
                          : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.sender !== 'You' && msg.type !== 'system' && (
                      <div className="text-xs font-medium mb-1">{msg.sender}</div>
                    )}
                    <div className="text-sm">{msg.message}</div>
                    <div className="text-xs opacity-75 mt-1">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Virtual Gifts */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Send Virtual Gifts</h4>
              <div className="grid grid-cols-4 gap-2">
                {['☕', '🌹', '🎁', '💎', '🍰', '🌟', '❤️', '🎉'].map((gift, index) => (
                  <button
                    key={index}
                    onClick={() => sendVirtualGift(gift)}
                    className="p-3 text-2xl border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
                  >
                    {gift}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
                Send Heart Reaction
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Smile className="w-4 h-4" />
                Send Emoji Reaction
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                Rate Call Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedVideoCommunicationSuite;

