import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Camera, 
  Video, 
  Mic, 
  MicOff,
  Play,
  Pause,
  Square,
  RotateCcw,
  FlipHorizontal,
  Zap,
  Sparkles,
  Music,
  Timer,
  Grid,
  Smile,
  Type,
  Palette,
  Filter,
  Volume2,
  VolumeX,
  Download,
  Share,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Aperture,
  Focus,
  Layers,
  Wand2,
  Heart,
  Star,
  Flame,
  Coffee,
  Plane,
  Car,
  Home,
  MapPin,
  Clock,
  Calendar
} from 'lucide-react';

const CreateReelInterface = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(15);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const [cameraFacing, setCameraFacing] = useState('front');
  const [activeTab, setActiveTab] = useState('record');
  const [showEffects, setShowEffects] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(3);
  const videoRef = useRef(null);

  const durations = [15, 30, 60];
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  
  const filters = [
    { id: 1, name: 'Original', preview: 'bg-gray-200', filter: 'none' },
    { id: 2, name: 'Warm', preview: 'bg-orange-200', filter: 'sepia(0.3) saturate(1.2)' },
    { id: 3, name: 'Cool', preview: 'bg-blue-200', filter: 'hue-rotate(180deg) saturate(1.1)' },
    { id: 4, name: 'Vintage', preview: 'bg-yellow-200', filter: 'sepia(0.5) contrast(1.2)' },
    { id: 5, name: 'B&W', preview: 'bg-gray-400', filter: 'grayscale(1)' },
    { id: 6, name: 'Vibrant', preview: 'bg-pink-200', filter: 'saturate(1.5) contrast(1.1)' }
  ];

  const effects = [
    { id: 1, name: 'Sparkle', icon: <Sparkles className="w-5 h-5" />, color: 'text-yellow-500' },
    { id: 2, name: 'Hearts', icon: <Heart className="w-5 h-5" />, color: 'text-red-500' },
    { id: 3, name: 'Stars', icon: <Star className="w-5 h-5" />, color: 'text-blue-500' },
    { id: 4, name: 'Fire', icon: <Flame className="w-5 h-5" />, color: 'text-orange-500' },
    { id: 5, name: 'Magic', icon: <Wand2 className="w-5 h-5" />, color: 'text-purple-500' }
  ];

  const musicTracks = [
    { id: 1, title: 'Chill Vibes', artist: 'Lo-Fi Beats', duration: '2:30', trending: true },
    { id: 2, title: 'Summer Love', artist: 'Indie Pop', duration: '3:15', trending: false },
    { id: 3, title: 'City Nights', artist: 'Electronic', duration: '2:45', trending: true },
    { id: 4, title: 'Coffee Shop', artist: 'Acoustic', duration: '3:00', trending: false },
    { id: 5, title: 'Dance Floor', artist: 'House Music', duration: '2:20', trending: true }
  ];

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= selectedDuration) {
            setIsRecording(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording, selectedDuration]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const switchCamera = () => {
    setCameraFacing(prev => prev === 'front' ? 'back' : 'front');
  };

  const toggleFlash = () => {
    const modes = ['off', 'on', 'auto'];
    const currentIndex = modes.indexOf(flashMode);
    setFlashMode(modes[(currentIndex + 1) % modes.length]);
  };

  const renderRecordTab = () => (
    <div className="relative h-full">
      {/* Camera View */}
      <div className="relative h-full bg-black overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ filter: selectedFilter ? filters.find(f => f.id === selectedFilter)?.filter : 'none' }}
          autoPlay
          muted
          playsInline
        />
        
        {/* Recording Overlay */}
        {isRecording && (
          <div className="absolute inset-0 border-4 border-red-500 animate-pulse"></div>
        )}

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={toggleFlash}
            className={`p-2 rounded-full ${
              flashMode === 'on' ? 'bg-yellow-500' : flashMode === 'auto' ? 'bg-blue-500' : 'bg-black bg-opacity-50'
            } text-white`}
          >
            {flashMode === 'on' ? <Sun className="w-5 h-5" /> : 
             flashMode === 'auto' ? <Aperture className="w-5 h-5" /> : 
             <Moon className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="bg-black bg-opacity-50 px-3 py-1 rounded-full">
              <span className="text-white text-sm font-medium">
                {Math.floor(recordingTime)}s / {selectedDuration}s
              </span>
            </div>
            {isRecording && (
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 bg-black bg-opacity-50 rounded-full text-white"
          >
            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
        </div>

        {/* Duration Selector */}
        <div className="absolute top-20 left-4">
          <div className="bg-black bg-opacity-50 rounded-full p-1">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedDuration === duration
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {duration}s
              </button>
            ))}
          </div>
        </div>

        {/* Speed Selector */}
        <div className="absolute top-20 right-4">
          <div className="bg-black bg-opacity-50 rounded-full p-1">
            {speeds.map((speed) => (
              <button
                key={speed}
                onClick={() => setSelectedSpeed(speed)}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedSpeed === speed
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

        {/* Side Controls */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <button
            onClick={switchCamera}
            className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <FlipHorizontal className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setShowEffects(!showEffects)}
            className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <Sparkles className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setShowTimer(!showTimer)}
            className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
          >
            <Timer className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-4 right-4">
          <div className="flex items-center justify-center space-x-8">
            {/* Filters */}
            <button className="text-white">
              <Filter className="w-6 h-6" />
            </button>

            {/* Record Button */}
            <button
              onClick={toggleRecording}
              className={`w-20 h-20 rounded-full border-4 border-white flex items-center justify-center transition-all ${
                isRecording ? 'bg-red-500' : 'bg-transparent hover:bg-white hover:bg-opacity-20'
              }`}
            >
              {isRecording ? (
                <Square className="w-8 h-8 text-white" />
              ) : (
                <div className="w-16 h-16 bg-red-500 rounded-full"></div>
              )}
            </button>

            {/* Music */}
            <button
              onClick={() => setActiveTab('music')}
              className="text-white"
            >
              <Music className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-600 rounded-full h-1">
            <div
              className="bg-red-500 h-1 rounded-full transition-all duration-100"
              style={{ width: `${(recordingTime / selectedDuration) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Timer Overlay */}
        {showTimer && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Set Timer</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[3, 5, 10].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setTimerDuration(duration)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      timerDuration === duration
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {duration}s
                  </button>
                ))}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowTimer(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowTimer(false);
                    // Start timer countdown
                  }}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  Start Timer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Effects Overlay */}
        {showEffects && (
          <div className="absolute bottom-32 right-4">
            <div className="bg-black bg-opacity-70 rounded-lg p-3">
              <div className="space-y-2">
                {effects.map((effect) => (
                  <button
                    key={effect.id}
                    className={`flex items-center space-x-2 p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 ${effect.color}`}
                  >
                    {effect.icon}
                    <span className="text-sm">{effect.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderFiltersTab = () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Choose a Filter</h3>
      <div className="grid grid-cols-3 gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedFilter === filter.id ? 'border-pink-500 scale-105' : 'border-gray-300'
            }`}
          >
            <div className={`w-full h-full ${filter.preview} flex items-center justify-center`}>
              <div
                className="w-8 h-8 bg-gray-400 rounded-full"
                style={{ filter: filter.filter }}
              ></div>
            </div>
            <div className="absolute bottom-1 left-1 right-1 text-center">
              <span className="text-xs font-medium text-gray-700 bg-white bg-opacity-80 px-1 rounded">
                {filter.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderMusicTab = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Add Music</h3>
        <button className="text-pink-500 text-sm font-medium">Browse All</button>
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for music..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-3">
        {musicTracks.map((track) => (
          <div
            key={track.id}
            className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${
              selectedMusic === track.id
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedMusic(track.id)}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">{track.title}</h4>
                {track.trending && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Trending
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{track.artist} • {track.duration}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Play className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all">
              <X className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-lg font-semibold text-white">Create Reel</h1>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      {activeTab !== 'record' && (
        <div className="absolute top-16 left-0 right-0 z-40 bg-white border-b">
          <div className="max-w-md mx-auto">
            <div className="flex">
              <button
                onClick={() => setActiveTab('record')}
                className="flex-1 py-3 text-center font-medium text-gray-500 hover:text-gray-700"
              >
                Record
              </button>
              <button
                onClick={() => setActiveTab('filters')}
                className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                  activeTab === 'filters'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Filters
              </button>
              <button
                onClick={() => setActiveTab('music')}
                className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                  activeTab === 'music'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Music
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`${activeTab === 'record' ? 'h-screen' : 'pt-28 h-screen bg-white'}`}>
        {activeTab === 'record' && renderRecordTab()}
        {activeTab === 'filters' && renderFiltersTab()}
        {activeTab === 'music' && renderMusicTab()}
      </div>
    </div>
  );
};

export default CreateReelInterface;

