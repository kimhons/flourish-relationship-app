import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, VideoOff, Mic, MicOff, Camera, CameraOff, Users,
  UserPlus, UserMinus, Volume2, VolumeX, Settings, Crown,
  Heart, MessageCircle, Share2, Gift, Star, Award, Zap,
  Play, Pause, RotateCcw, Maximize, Minimize, Monitor,
  Phone, PhoneOff, Wifi, Signal, Battery, Clock, Eye,
  ThumbsUp, ThumbsDown, Smile, Send, Filter, Sparkles,
  Target, TrendingUp, BarChart3, PieChart, Activity,
  Coffee, Gamepad2, Music, Utensils, MapPin, Calendar
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart as RechartsPieChart, Pie, Cell, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const GroupVideoDatingFeatures = () => {
  const [isInCall, setIsInCall] = useState(false);
  const [callMode, setCallMode] = useState('group'); // group, speed_dating, mixer
  const [participants, setParticipants] = useState([]);
  const [myVideo, setMyVideo] = useState({ camera: true, mic: true });
  const [callDuration, setCallDuration] = useState(0);
  const [groupSize, setGroupSize] = useState(6);
  const [currentActivity, setCurrentActivity] = useState(null);

  // Group call participants
  const [groupParticipants, setGroupParticipants] = useState([
    { 
      id: 1, 
      name: 'Sarah M.', 
      age: 28, 
      avatar: '👩', 
      status: 'speaking', 
      camera: true, 
      mic: true,
      compatibility: 94,
      interests: ['Coffee', 'Travel', 'Photography'],
      location: 'New York',
      joinTime: '5 min ago',
      isHost: false,
      reactions: { hearts: 12, likes: 8 }
    },
    { 
      id: 2, 
      name: 'Alex K.', 
      age: 31, 
      avatar: '👨', 
      status: 'listening', 
      camera: true, 
      mic: false,
      compatibility: 87,
      interests: ['Gaming', 'Cooking', 'Music'],
      location: 'Los Angeles',
      joinTime: '8 min ago',
      isHost: true,
      reactions: { hearts: 15, likes: 11 }
    },
    { 
      id: 3, 
      name: 'Emma L.', 
      age: 26, 
      avatar: '👱‍♀️', 
      status: 'typing', 
      camera: true, 
      mic: true,
      compatibility: 91,
      interests: ['Art', 'Yoga', 'Reading'],
      location: 'Chicago',
      joinTime: '12 min ago',
      isHost: false,
      reactions: { hearts: 9, likes: 6 }
    },
    { 
      id: 4, 
      name: 'Mike R.', 
      age: 29, 
      avatar: '👨‍🦱', 
      status: 'away', 
      camera: false, 
      mic: true,
      compatibility: 83,
      interests: ['Sports', 'Movies', 'Hiking'],
      location: 'Miami',
      joinTime: '15 min ago',
      isHost: false,
      reactions: { hearts: 7, likes: 4 }
    },
    { 
      id: 5, 
      name: 'Lisa T.', 
      age: 27, 
      avatar: '👩‍🦳', 
      status: 'listening', 
      camera: true, 
      mic: true,
      compatibility: 89,
      interests: ['Dancing', 'Food', 'Fashion'],
      location: 'Seattle',
      joinTime: '18 min ago',
      isHost: false,
      reactions: { hearts: 11, likes: 9 }
    },
    { 
      id: 6, 
      name: 'You', 
      age: 30, 
      avatar: '😊', 
      status: 'speaking', 
      camera: true, 
      mic: true,
      compatibility: 100,
      interests: ['Technology', 'Travel', 'Coffee'],
      location: 'San Francisco',
      joinTime: 'Host',
      isHost: false,
      reactions: { hearts: 20, likes: 15 }
    }
  ]);

  // Group activities
  const groupActivities = [
    {
      id: 'icebreaker',
      name: 'Icebreaker Questions',
      icon: '❄️',
      description: 'Fun questions to get everyone talking',
      duration: '10-15 min',
      participants: '3-8 people',
      difficulty: 'Easy',
      category: 'Social'
    },
    {
      id: 'speed_rounds',
      name: 'Speed Dating Rounds',
      icon: '⚡',
      description: 'Quick 3-minute one-on-one conversations',
      duration: '20-30 min',
      participants: '4-10 people',
      difficulty: 'Medium',
      category: 'Dating'
    },
    {
      id: 'group_games',
      name: 'Group Games',
      icon: '🎮',
      description: 'Interactive games for the whole group',
      duration: '15-25 min',
      participants: '4-12 people',
      difficulty: 'Easy',
      category: 'Entertainment'
    },
    {
      id: 'cooking_together',
      name: 'Virtual Cooking',
      icon: '👨‍🍳',
      description: 'Cook the same recipe together',
      duration: '45-60 min',
      participants: '2-6 people',
      difficulty: 'Medium',
      category: 'Activity'
    },
    {
      id: 'trivia_night',
      name: 'Trivia Challenge',
      icon: '🧠',
      description: 'Test your knowledge together',
      duration: '20-30 min',
      participants: '4-10 people',
      difficulty: 'Medium',
      category: 'Games'
    },
    {
      id: 'storytelling',
      name: 'Story Building',
      icon: '📚',
      description: 'Create stories together, one line at a time',
      duration: '15-20 min',
      participants: '3-8 people',
      difficulty: 'Easy',
      category: 'Creative'
    },
    {
      id: 'music_sharing',
      name: 'Music & Dance',
      icon: '🎵',
      description: 'Share favorite songs and dance together',
      duration: '20-30 min',
      participants: '3-10 people',
      difficulty: 'Easy',
      category: 'Entertainment'
    },
    {
      id: 'virtual_tour',
      name: 'Virtual Tours',
      icon: '🗺️',
      description: 'Explore places together online',
      duration: '30-45 min',
      participants: '3-8 people',
      difficulty: 'Easy',
      category: 'Travel'
    }
  ];

  // Call modes and settings
  const callModes = [
    {
      id: 'group',
      name: 'Group Video Call',
      icon: '👥',
      description: 'Everyone can see and talk to each other',
      maxParticipants: 12,
      features: ['Group chat', 'Screen sharing', 'Activities', 'Reactions']
    },
    {
      id: 'speed_dating',
      name: 'Speed Dating',
      icon: '⚡',
      description: 'Rotating one-on-one conversations',
      maxParticipants: 10,
      features: ['Timed rounds', 'Auto rotation', 'Match tracking', 'Private notes']
    },
    {
      id: 'mixer',
      name: 'Social Mixer',
      icon: '🎉',
      description: 'Casual mingling with breakout rooms',
      maxParticipants: 20,
      features: ['Breakout rooms', 'Topic rooms', 'Free movement', 'Interest matching']
    },
    {
      id: 'double_date',
      name: 'Double Date',
      icon: '💕',
      description: 'Two couples on a virtual double date',
      maxParticipants: 4,
      features: ['Couple pairing', 'Shared activities', 'Date planning', 'Memories']
    }
  ];

  // Chat messages
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Alex K.', avatar: '👨', message: 'Welcome everyone! 👋', timestamp: '3:45 PM', type: 'message' },
    { id: 2, user: 'Sarah M.', avatar: '👩', message: 'Excited to meet you all!', timestamp: '3:46 PM', type: 'message' },
    { id: 3, user: 'System', avatar: '🤖', message: 'Emma L. joined the call', timestamp: '3:47 PM', type: 'system' },
    { id: 4, user: 'Emma L.', avatar: '👱‍♀️', message: 'Hi everyone! 😊', timestamp: '3:47 PM', type: 'message' },
    { id: 5, user: 'Mike R.', avatar: '👨‍🦱', message: 'Great to see you all!', timestamp: '3:48 PM', type: 'message' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Group statistics
  const [groupStats, setGroupStats] = useState({
    totalParticipants: 6,
    averageAge: 28.5,
    genderBalance: { male: 3, female: 3, other: 0 },
    averageCompatibility: 89.2,
    activeTime: 18,
    messagesExchanged: 47,
    reactionsGiven: 85,
    activitiesCompleted: 2
  });

  // Compatibility matrix
  const compatibilityMatrix = [
    { participant: 'You', sarah: 94, alex: 87, emma: 91, mike: 83, lisa: 89 },
    { participant: 'Sarah', you: 94, alex: 78, emma: 85, mike: 72, lisa: 81 },
    { participant: 'Alex', you: 87, sarah: 78, emma: 82, mike: 88, lisa: 75 },
    { participant: 'Emma', you: 91, sarah: 85, alex: 82, mike: 79, lisa: 93 },
    { participant: 'Mike', you: 83, sarah: 72, alex: 88, emma: 79, lisa: 76 },
    { participant: 'Lisa', you: 89, sarah: 81, alex: 75, emma: 93, mike: 76 }
  ];

  // Engagement analytics
  const engagementData = [
    { time: '0m', participants: 2, messages: 0, reactions: 0 },
    { time: '3m', participants: 4, messages: 5, reactions: 8 },
    { time: '6m', participants: 6, messages: 12, reactions: 18 },
    { time: '9m', participants: 6, messages: 23, reactions: 31 },
    { time: '12m', participants: 6, messages: 35, reactions: 47 },
    { time: '15m', participants: 6, messages: 47, reactions: 65 },
    { time: '18m', participants: 6, messages: 58, reactions: 85 }
  ];

  // Interest overlap analysis
  const interestOverlap = [
    { interest: 'Travel', participants: 4, percentage: 67 },
    { interest: 'Coffee', participants: 3, percentage: 50 },
    { interest: 'Music', participants: 3, percentage: 50 },
    { interest: 'Food', participants: 2, percentage: 33 },
    { interest: 'Technology', participants: 2, percentage: 33 },
    { interest: 'Art', participants: 2, percentage: 33 }
  ];

  // Upcoming group events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Virtual Wine Tasting 🍷',
      date: 'Tonight 8:00 PM',
      participants: 8,
      maxParticipants: 12,
      host: 'Sarah M.',
      category: 'Social',
      description: 'Join us for a guided wine tasting experience'
    },
    {
      id: 2,
      title: 'Cooking Challenge: Italian Night 🍝',
      date: 'Tomorrow 7:00 PM',
      participants: 6,
      maxParticipants: 8,
      host: 'Alex K.',
      category: 'Activity',
      description: 'Cook authentic Italian dishes together'
    },
    {
      id: 3,
      title: 'Speed Dating Mixer ⚡',
      date: 'Friday 8:30 PM',
      participants: 12,
      maxParticipants: 16,
      host: 'Emma L.',
      category: 'Dating',
      description: 'Fast-paced dating with 3-minute rounds'
    },
    {
      id: 4,
      title: 'Virtual Game Night 🎮',
      date: 'Saturday 9:00 PM',
      participants: 10,
      maxParticipants: 15,
      host: 'Mike R.',
      category: 'Entertainment',
      description: 'Online games and trivia challenges'
    }
  ];

  // Breakout room suggestions
  const breakoutRooms = [
    { id: 1, name: 'Coffee Lovers ☕', participants: 3, topic: 'Favorite coffee shops and brewing methods' },
    { id: 2, name: 'Travel Stories ✈️', participants: 4, topic: 'Share your best travel experiences' },
    { id: 3, name: 'Foodies Unite 🍕', participants: 2, topic: 'Restaurant recommendations and cooking tips' },
    { id: 4, name: 'Music & Movies 🎵', participants: 3, topic: 'Discuss favorite songs and films' },
    { id: 5, name: 'Fitness & Wellness 💪', participants: 2, topic: 'Health tips and workout routines' }
  ];

  useEffect(() => {
    // Simulate call duration timer
    let interval;
    if (isInCall) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isInCall]);

  useEffect(() => {
    // Simulate dynamic participant updates
    const participantInterval = setInterval(() => {
      if (isInCall && Math.random() > 0.8) {
        setGroupParticipants(prev => 
          prev.map(p => ({
            ...p,
            status: Math.random() > 0.7 ? 'speaking' : Math.random() > 0.5 ? 'listening' : 'typing'
          }))
        );
      }
    }, 5000);

    return () => clearInterval(participantInterval);
  }, [isInCall]);

  useEffect(() => {
    // Simulate new messages
    const messageInterval = setInterval(() => {
      if (isInCall && Math.random() > 0.7) {
        const randomMessages = [
          'This is so much fun! 😄',
          'Great to meet everyone!',
          'Love this group energy! 💕',
          'Anyone want to grab coffee sometime?',
          'This activity is amazing!',
          'You all seem so interesting!',
          'Best group call ever! 🎉',
          'Let\'s do this again soon!'
        ];
        
        const activeParticipants = groupParticipants.filter(p => p.name !== 'You');
        const randomParticipant = activeParticipants[Math.floor(Math.random() * activeParticipants.length)];
        const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        
        const newMsg = {
          id: Date.now(),
          user: randomParticipant.name,
          avatar: randomParticipant.avatar,
          message: randomMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'message'
        };
        
        setChatMessages(prev => [...prev.slice(-9), newMsg]);
      }
    }, 12000);

    return () => clearInterval(messageInterval);
  }, [isInCall, groupParticipants]);

  const joinCall = (mode = 'group') => {
    setCallMode(mode);
    setIsInCall(true);
    setCallDuration(0);
    console.log(`Joining ${mode} call...`);
    // In a real app, this would initialize video call
  };

  const leaveCall = () => {
    setIsInCall(false);
    setCallDuration(0);
    setCurrentActivity(null);
    console.log('Leaving call...');
    // In a real app, this would end video call
  };

  const toggleMyCamera = () => {
    setMyVideo(prev => ({ ...prev, camera: !prev.camera }));
    console.log(`Camera ${!myVideo.camera ? 'enabled' : 'disabled'}`);
  };

  const toggleMyMic = () => {
    setMyVideo(prev => ({ ...prev, mic: !prev.mic }));
    console.log(`Microphone ${!myVideo.mic ? 'enabled' : 'disabled'}`);
  };

  const startActivity = (activityId) => {
    setCurrentActivity(activityId);
    console.log(`Starting activity: ${activityId}`);
    // In a real app, this would launch the group activity
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: 'You',
        avatar: '😊',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'message'
      };
      
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
      console.log('Message sent:', newMessage);
    }
  };

  const sendReaction = (participantId, reactionType) => {
    console.log(`Sending ${reactionType} to participant ${participantId}`);
    // In a real app, this would send reaction to participant
  };

  const createBreakoutRoom = (roomName, topic) => {
    console.log(`Creating breakout room: ${roomName} - ${topic}`);
    // In a real app, this would create a new breakout room
  };

  const joinBreakoutRoom = (roomId) => {
    console.log(`Joining breakout room: ${roomId}`);
    // In a real app, this would join the selected breakout room
  };

  const scheduleEvent = (eventData) => {
    console.log('Scheduling new group event:', eventData);
    // In a real app, this would schedule a new group event
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'speaking': return 'border-green-400 bg-green-50';
      case 'listening': return 'border-blue-400 bg-blue-50';
      case 'typing': return 'border-yellow-400 bg-yellow-50';
      case 'away': return 'border-gray-400 bg-gray-50';
      default: return 'border-gray-300 bg-white';
    }
  };

  const getCompatibilityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-600" />
              Group Video Dating
            </h1>
            <p className="text-gray-600">
              Connect with multiple people through interactive group video experiences
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={callMode}
              onChange={(e) => setCallMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {callModes.map(mode => (
                <option key={mode.id} value={mode.id}>{mode.name}</option>
              ))}
            </select>
            
            <select
              value={groupSize}
              onChange={(e) => setGroupSize(parseInt(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value={4}>4 People</option>
              <option value={6}>6 People</option>
              <option value={8}>8 People</option>
              <option value={10}>10 People</option>
              <option value={12}>12 People</option>
            </select>
            
            {!isInCall ? (
              <button 
                onClick={() => joinCall(callMode)}
                className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Video className="w-4 h-4" />
                Join Call
              </button>
            ) : (
              <button 
                onClick={leaveCall}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <PhoneOff className="w-4 h-4" />
                Leave Call
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Call Status Bar */}
      {isInCall && (
        <div className="bg-purple-600 text-white p-4 rounded-lg mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">LIVE CALL</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{groupParticipants.length} participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatDuration(callDuration)}</span>
            </div>
            {currentActivity && (
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Activity: {groupActivities.find(a => a.id === currentActivity)?.name}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
              {callModes.find(m => m.id === callMode)?.name}
            </span>
            <div className="flex items-center gap-1">
              <Signal className="w-4 h-4" />
              <span className="text-sm">Excellent</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Video Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Video Grid */}
          <div className="bg-black rounded-lg overflow-hidden" style={{ height: '600px' }}>
            {isInCall ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 h-full">
                {groupParticipants.slice(0, groupSize).map((participant) => (
                  <div 
                    key={participant.id} 
                    className={`relative rounded-lg overflow-hidden ${getStatusColor(participant.status)} border-2`}
                  >
                    {/* Video Feed Simulation */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                      {participant.camera ? (
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">{participant.avatar}</div>
                          <div className="text-sm font-medium">{participant.name}</div>
                          <div className="text-xs opacity-75">{participant.age}, {participant.location}</div>
                        </div>
                      ) : (
                        <div className="text-center text-white">
                          <CameraOff className="w-8 h-8 mb-2 mx-auto opacity-50" />
                          <div className="text-sm font-medium">{participant.name}</div>
                          <div className="text-xs opacity-75">Camera off</div>
                        </div>
                      )}
                    </div>

                    {/* Participant Status Indicators */}
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                      {participant.isHost && (
                        <Crown className="w-3 h-3 text-yellow-400" />
                      )}
                      {!participant.mic && (
                        <MicOff className="w-3 h-3 text-red-400" />
                      )}
                      {participant.status === 'speaking' && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Compatibility Score */}
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompatibilityColor(participant.compatibility)}`}>
                        {participant.compatibility}%
                      </span>
                    </div>

                    {/* Reaction Buttons */}
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <button 
                        onClick={() => sendReaction(participant.id, 'heart')}
                        className="p-1 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-red-500/50 transition-colors"
                      >
                        <Heart className="w-3 h-3" />
                      </button>
                      <button 
                        onClick={() => sendReaction(participant.id, 'like')}
                        className="p-1 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-blue-500/50 transition-colors"
                      >
                        <ThumbsUp className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Interests Tags */}
                    <div className="absolute bottom-2 left-2">
                      <div className="flex flex-wrap gap-1">
                        {participant.interests.slice(0, 2).map((interest, index) => (
                          <span key={index} className="px-1 py-0.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <h3 className="text-2xl font-bold mb-2">Ready for Group Video Dating</h3>
                  <p className="text-lg opacity-90 mb-4">Choose your call mode and join the conversation</p>
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {callModes.map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => joinCall(mode.id)}
                        className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors text-left"
                      >
                        <div className="text-2xl mb-2">{mode.icon}</div>
                        <div className="font-medium text-sm">{mode.name}</div>
                        <div className="text-xs opacity-75">{mode.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call Controls */}
          {isInCall && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Call Controls</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Mode:</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                    {callModes.find(m => m.id === callMode)?.name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <button 
                  onClick={toggleMyCamera}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                    myVideo.camera 
                      ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  {myVideo.camera ? <Camera className="w-6 h-6" /> : <CameraOff className="w-6 h-6" />}
                  <span className="text-sm font-medium">Camera</span>
                </button>

                <button 
                  onClick={toggleMyMic}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                    myVideo.mic 
                      ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  {myVideo.mic ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                  <span className="text-sm font-medium">Mic</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                  <Monitor className="w-6 h-6" />
                  <span className="text-sm font-medium">Share</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
                  <UserPlus className="w-6 h-6" />
                  <span className="text-sm font-medium">Invite</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition-colors">
                  <Gamepad2 className="w-6 h-6" />
                  <span className="text-sm font-medium">Activities</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <Settings className="w-6 h-6" />
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            </div>
          )}

          {/* Group Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Group Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {groupActivities.map((activity) => (
                <div key={activity.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">{activity.icon}</div>
                    <h4 className="font-medium text-gray-900">{activity.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Duration:</span>
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Participants:</span>
                      <span>{activity.participants}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Difficulty:</span>
                      <span>{activity.difficulty}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => startActivity(activity.id)}
                    disabled={!isInCall}
                    className={`w-full px-4 py-2 rounded-lg transition-colors ${
                      isInCall 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {currentActivity === activity.id ? 'Active' : 'Start Activity'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Group Analytics */}
          {isInCall && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Group Dynamics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Engagement Over Time</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="messages" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="reactions" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Common Interests</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={interestOverlap}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="interest" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="participants" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Breakout Rooms */}
          {isInCall && callMode === 'mixer' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Breakout Rooms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {breakoutRooms.map((room) => (
                  <div key={room.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{room.name}</h4>
                      <span className="text-sm text-gray-500">{room.participants} people</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{room.topic}</p>
                    <button 
                      onClick={() => joinBreakoutRoom(room.id)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Join Room
                    </button>
                  </div>
                ))}
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                  <button 
                    onClick={() => createBreakoutRoom('New Room', 'Custom topic')}
                    className="text-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <UserPlus className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Create Room</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          {!isInCall && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Group Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {event.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.participants}/{event.maxParticipants}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Crown className="w-4 h-4" />
                          <span>{event.host}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Join Event
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Group Chat */}
          <div className="bg-white rounded-lg border border-gray-200 h-96 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Group Chat
              </h3>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.type === 'system' ? 'justify-center' : ''}`}>
                  {message.type === 'system' ? (
                    <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {message.message}
                    </div>
                  ) : (
                    <>
                      <div className="text-lg">{message.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-900">{message.user}</span>
                          <span className="text-xs text-gray-500">{message.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-700">{message.message}</p>
                      </div>
                    </>
                  )}
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

          {/* Participants List */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Participants ({groupParticipants.length})
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {groupParticipants.map((participant) => (
                <div key={participant.id} className="flex items-center gap-3">
                  <div className="text-lg">{participant.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{participant.name}</span>
                      {participant.isHost && (
                        <Crown className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompatibilityColor(participant.compatibility)}`}>
                        {participant.compatibility}%
                      </span>
                      <div className={`w-2 h-2 rounded-full ${
                        participant.status === 'speaking' ? 'bg-green-500' : 
                        participant.status === 'listening' ? 'bg-blue-500' : 
                        participant.status === 'typing' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Statistics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Group Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Average Age:</span>
                <span className="text-sm font-medium text-gray-900">{groupStats.averageAge}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Compatibility:</span>
                <span className="text-sm font-medium text-gray-900">{groupStats.averageCompatibility}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Time:</span>
                <span className="text-sm font-medium text-gray-900">{groupStats.activeTime} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Messages:</span>
                <span className="text-sm font-medium text-gray-900">{groupStats.messagesExchanged}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Reactions:</span>
                <span className="text-sm font-medium text-gray-900">{groupStats.reactionsGiven}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors">
                <UserPlus className="w-4 h-4" />
                <span className="font-medium">Invite Friends</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Schedule Event</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Share Group</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition-colors">
                <Star className="w-4 h-4" />
                <span className="font-medium">Rate Experience</span>
              </button>
            </div>
          </div>

          {/* Call Mode Info */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Current Mode</h3>
            {callModes.find(m => m.id === callMode) && (
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-3xl mb-2">{callModes.find(m => m.id === callMode).icon}</div>
                  <h4 className="font-medium text-gray-900">{callModes.find(m => m.id === callMode).name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{callModes.find(m => m.id === callMode).description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="text-sm text-gray-600 mb-2">Features:</div>
                  <div className="space-y-1">
                    {callModes.find(m => m.id === callMode).features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Max participants: {callModes.find(m => m.id === callMode).maxParticipants}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupVideoDatingFeatures;

