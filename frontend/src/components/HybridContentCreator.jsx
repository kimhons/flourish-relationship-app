import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Video, 
  Image as ImageIcon, 
  Music, 
  Palette, 
  Type, 
  Sparkles,
  Grid,
  Square,
  Maximize,
  Minimize,
  RotateCcw,
  FlipHorizontal,
  Timer,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Settings,
  ArrowLeft,
  Check,
  X,
  Upload,
  Download,
  Share,
  Heart,
  MessageCircle,
  Filter,
  Smile,
  Zap,
  Star,
  TrendingUp,
  Hash,
  MapPin,
  Clock,
  Users,
  Eye,
  Lock,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatNumber, realMusicSuggestions, realTrendingHashtags } from '../data/realData'

const HybridContentCreator = ({ user, darkMode, onComplete, onCancel }) => {
  const [creationMode, setCreationMode] = useState('photo') // 'photo', 'video', 'story', 'reel'
  const [contentFormat, setContentFormat] = useState('auto') // 'auto', 'square', 'portrait', 'landscape'
  const [isRecording, setIsRecording] = useState(false)
  const [recordedMedia, setRecordedMedia] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [currentStep, setCurrentStep] = useState('create') // 'create', 'edit', 'preview', 'publish'
  const [recordingTime, setRecordingTime] = useState(0)
  const [maxDuration, setMaxDuration] = useState(60)
  const [selectedMusic, setSelectedMusic] = useState(null)
  const [contentText, setContentText] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [location, setLocation] = useState('')
  const [privacy, setPrivacy] = useState('public')
  const [platformTargets, setPlatformTargets] = useState(['instagram', 'tiktok']) // Target platforms
  const [effects, setEffects] = useState([])
  const [filters, setFilters] = useState('none')
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const timerRef = useRef(null)

  // Content format presets
  const formatPresets = {
    auto: { 
      label: 'Auto', 
      icon: Sparkles, 
      description: 'Automatically optimizes for all platforms',
      aspectRatio: 'auto',
      instagram: 'square',
      tiktok: 'portrait'
    },
    square: { 
      label: 'Square', 
      icon: Square, 
      description: 'Perfect for Instagram feed',
      aspectRatio: '1:1',
      instagram: 'feed',
      tiktok: 'adapted'
    },
    portrait: { 
      label: 'Portrait', 
      icon: Maximize, 
      description: 'Ideal for TikTok and Instagram Stories',
      aspectRatio: '9:16',
      instagram: 'stories',
      tiktok: 'native'
    },
    landscape: { 
      label: 'Landscape', 
      icon: Minimize, 
      description: 'Great for detailed content',
      aspectRatio: '16:9',
      instagram: 'adapted',
      tiktok: 'adapted'
    }
  }

  // Creation modes
  const creationModes = [
    { id: 'photo', label: 'Photo', icon: Camera, description: 'Single image post' },
    { id: 'video', label: 'Video', icon: Video, description: 'Video content' },
    { id: 'story', label: 'Story', icon: Clock, description: 'Story format' },
    { id: 'reel', label: 'Reel', icon: Zap, description: 'Short video reel' }
  ]

  // Effects and filters
  const availableEffects = [
    { id: 'none', label: 'None', icon: '⚪' },
    { id: 'vintage', label: 'Vintage', icon: '🟤' },
    { id: 'black-white', label: 'B&W', icon: '⚫' },
    { id: 'warm', label: 'Warm', icon: '🟡' },
    { id: 'cool', label: 'Cool', icon: '🔵' },
    { id: 'dramatic', label: 'Dramatic', icon: '🔴' },
    { id: 'soft', label: 'Soft', icon: '🟣' },
    { id: 'bright', label: 'Bright', icon: '⚡' }
  ]

  // Platform optimization settings
  const platformSettings = {
    instagram: {
      maxDuration: 60,
      recommendedFormats: ['square', 'portrait'],
      features: ['hashtags', 'location', 'music']
    },
    tiktok: {
      maxDuration: 180,
      recommendedFormats: ['portrait'],
      features: ['effects', 'sounds', 'duets']
    }
  }

  // Initialize camera for video/photo capture
  useEffect(() => {
    if (currentStep === 'create' && (creationMode === 'video' || creationMode === 'photo')) {
      initializeCamera()
    }
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [currentStep, creationMode])

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: creationMode === 'video'
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      
      streamRef.current = stream
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  const startRecording = async () => {
    if (!streamRef.current) return
    
    const mediaRecorder = new MediaRecorder(streamRef.current)
    const chunks = []
    
    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data)
    }
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setRecordedMedia(url)
      setCurrentStep('edit')
    }
    
    mediaRecorderRef.current = mediaRecorder
    mediaRecorder.start()
    setIsRecording(true)
    setRecordingTime(0)
    
    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => {
        if (prev >= maxDuration) {
          stopRecording()
          return maxDuration
        }
        return prev + 1
      })
    }, 1000)
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      const context = canvas.getContext('2d')
      
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0)
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        setRecordedMedia(url)
        setCurrentStep('edit')
      }, 'image/jpeg', 0.95)
    }
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setSelectedFiles(files)
    
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setRecordedMedia(url)
      setCurrentStep('edit')
    }
  }

  const handleHashtagAdd = (hashtag) => {
    if (!hashtags.includes(hashtag)) {
      setHashtags([...hashtags, hashtag])
    }
  }

  const handleHashtagRemove = (hashtag) => {
    setHashtags(hashtags.filter(h => h !== hashtag))
  }

  const generateOptimizedContent = () => {
    const content = {
      original: recordedMedia,
      text: contentText,
      hashtags,
      location,
      music: selectedMusic,
      effects,
      filter: filters,
      privacy,
      user,
      timestamp: new Date().toISOString(),
      platforms: {}
    }

    // Generate platform-specific versions
    platformTargets.forEach(platform => {
      const settings = platformSettings[platform]
      const format = formatPresets[contentFormat]
      
      content.platforms[platform] = {
        format: format[platform],
        aspectRatio: format.aspectRatio,
        optimizedFor: platform,
        features: settings.features,
        maxDuration: settings.maxDuration
      }
    })

    return content
  }

  const handlePublish = () => {
    const optimizedContent = generateOptimizedContent()
    onComplete(optimizedContent)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (currentStep === 'create') {
    return (
      <HybridCreationInterface
        creationMode={creationMode}
        setCreationMode={setCreationMode}
        contentFormat={contentFormat}
        setContentFormat={setContentFormat}
        platformTargets={platformTargets}
        setPlatformTargets={setPlatformTargets}
        formatPresets={formatPresets}
        creationModes={creationModes}
        isRecording={isRecording}
        recordingTime={recordingTime}
        maxDuration={maxDuration}
        videoRef={videoRef}
        canvasRef={canvasRef}
        fileInputRef={fileInputRef}
        onStartRecording={startRecording}
        onStopRecording={stopRecording}
        onCapturePhoto={capturePhoto}
        onFileUpload={handleFileUpload}
        onCancel={onCancel}
        formatTime={formatTime}
        user={user}
        darkMode={darkMode}
      />
    )
  }

  if (currentStep === 'edit') {
    return (
      <HybridEditInterface
        recordedMedia={recordedMedia}
        creationMode={creationMode}
        contentFormat={contentFormat}
        effects={effects}
        setEffects={setEffects}
        filters={filters}
        setFilters={setFilters}
        availableEffects={availableEffects}
        selectedMusic={selectedMusic}
        setSelectedMusic={setSelectedMusic}
        onNext={() => setCurrentStep('preview')}
        onBack={() => setCurrentStep('create')}
        user={user}
        darkMode={darkMode}
      />
    )
  }

  if (currentStep === 'preview') {
    return (
      <HybridPreviewInterface
        recordedMedia={recordedMedia}
        creationMode={creationMode}
        contentFormat={contentFormat}
        platformTargets={platformTargets}
        effects={effects}
        filters={filters}
        selectedMusic={selectedMusic}
        formatPresets={formatPresets}
        onNext={() => setCurrentStep('publish')}
        onBack={() => setCurrentStep('edit')}
        user={user}
        darkMode={darkMode}
      />
    )
  }

  if (currentStep === 'publish') {
    return (
      <HybridPublishInterface
        recordedMedia={recordedMedia}
        creationMode={creationMode}
        contentText={contentText}
        setContentText={setContentText}
        hashtags={hashtags}
        setHashtags={setHashtags}
        location={location}
        setLocation={setLocation}
        privacy={privacy}
        setPrivacy={setPrivacy}
        platformTargets={platformTargets}
        setPlatformTargets={setPlatformTargets}
        onHashtagAdd={handleHashtagAdd}
        onHashtagRemove={handleHashtagRemove}
        onPublish={handlePublish}
        onBack={() => setCurrentStep('preview')}
        user={user}
        darkMode={darkMode}
      />
    )
  }

  return null
}

// Creation Interface Component
const HybridCreationInterface = ({ 
  creationMode, 
  setCreationMode, 
  contentFormat, 
  setContentFormat, 
  platformTargets, 
  setPlatformTargets,
  formatPresets,
  creationModes,
  isRecording,
  recordingTime,
  maxDuration,
  videoRef,
  canvasRef,
  fileInputRef,
  onStartRecording,
  onStopRecording,
  onCapturePhoto,
  onFileUpload,
  onCancel,
  formatTime,
  user,
  darkMode
}) => {
  return (
    <div className={`
      hybrid-creation-interface fixed inset-0 z-50 
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
    `}>
      {/* Header */}
      <div className={`
        absolute top-0 left-0 right-0 z-20 
        ${darkMode ? 'bg-gray-900' : 'bg-white'}
        border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}
        px-4 py-3
      `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onCancel}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Create Content
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {platformTargets.map(platform => (
                <div
                  key={platform}
                  className={`
                    px-2 py-1 rounded-full text-xs
                    ${platform === 'instagram' ? 'bg-pink-100 text-pink-800' : 'bg-black text-white'}
                  `}
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Format Selection */}
      <div className="absolute top-16 left-0 right-0 z-20 p-4">
        <div className="flex justify-center space-x-2 mb-4">
          {Object.entries(formatPresets).map(([key, format]) => (
            <Button
              key={key}
              variant={contentFormat === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setContentFormat(key)}
              className="flex items-center space-x-2"
            >
              <format.icon size={16} />
              <span className="text-xs">{format.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full pt-32 pb-24">
        {/* Camera Preview */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className={`
            relative rounded-lg overflow-hidden
            ${getAspectRatioClass(contentFormat)}
            ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}
          `}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Recording Timer */}
            <AnimatePresence>
              {isRecording && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="font-mono text-sm">
                      {formatTime(recordingTime)}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 space-y-4">
        {/* Creation Mode Selection */}
        <div className="flex justify-center space-x-2">
          {creationModes.map((mode) => (
            <Button
              key={mode.id}
              variant={creationMode === mode.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCreationMode(mode.id)}
              className="flex items-center space-x-2"
            >
              <mode.icon size={16} />
              <span className="text-xs">{mode.label}</span>
            </Button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center space-x-6">
          <Button
            variant="outline"
            size="lg"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2"
          >
            <Upload size={20} />
            <span>Upload</span>
          </Button>

          <Button
            size="lg"
            onClick={creationMode === 'photo' ? onCapturePhoto : (isRecording ? onStopRecording : onStartRecording)}
            className={`
              w-20 h-20 rounded-full border-4 border-white
              ${isRecording 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }
            `}
          >
            {creationMode === 'photo' ? (
              <Camera size={32} />
            ) : isRecording ? (
              <div className="w-6 h-6 bg-white rounded-sm" />
            ) : (
              <Video size={32} />
            )}
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2"
          >
            <Settings size={20} />
            <span>Settings</span>
          </Button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={onFileUpload}
        className="hidden"
      />
    </div>
  )
}

// Edit Interface Component
const HybridEditInterface = ({
  recordedMedia,
  creationMode,
  contentFormat,
  effects,
  setEffects,
  filters,
  setFilters,
  availableEffects,
  selectedMusic,
  setSelectedMusic,
  onNext,
  onBack,
  user,
  darkMode
}) => {
  return (
    <div className={`
      hybrid-edit-interface fixed inset-0 z-50 
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
    `}>
      {/* Header */}
      <div className={`
        absolute top-0 left-0 right-0 z-20 
        ${darkMode ? 'bg-gray-900' : 'bg-white'}
        border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}
        px-4 py-3
      `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Edit Content
            </h2>
          </div>
          
          <Button variant="default" size="sm" onClick={onNext}>
            <Check size={16} className="mr-1" />
            Next
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full pt-16 pb-24">
        <div className="flex h-full">
          {/* Media Preview */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className={`
              relative rounded-lg overflow-hidden
              ${getAspectRatioClass(contentFormat)}
              ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}
            `}>
              {creationMode === 'photo' ? (
                <img
                  src={recordedMedia}
                  alt="Content"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={recordedMedia}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                />
              )}
            </div>
          </div>

          {/* Edit Controls */}
          <div className="w-80 p-4 border-l border-gray-200 overflow-y-auto">
            <div className="space-y-6">
              {/* Effects */}
              <div>
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Effects
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {availableEffects.map((effect) => (
                    <Button
                      key={effect.id}
                      variant={filters === effect.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilters(effect.id)}
                      className="flex flex-col items-center space-y-1"
                    >
                      <span className="text-lg">{effect.icon}</span>
                      <span className="text-xs">{effect.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Music */}
              <div>
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Music
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center space-x-2"
                >
                  <Music size={16} />
                  <span>Add Music</span>
                </Button>
              </div>

              {/* Advanced Settings */}
              <div>
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Advanced
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center space-x-2"
                  >
                    <Timer size={16} />
                    <span>Speed</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center space-x-2"
                  >
                    <Sparkles size={16} />
                    <span>Transitions</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Preview Interface Component
const HybridPreviewInterface = ({
  recordedMedia,
  creationMode,
  contentFormat,
  platformTargets,
  effects,
  filters,
  selectedMusic,
  formatPresets,
  onNext,
  onBack,
  user,
  darkMode
}) => {
  return (
    <div className={`
      hybrid-preview-interface fixed inset-0 z-50 
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
    `}>
      {/* Header */}
      <div className={`
        absolute top-0 left-0 right-0 z-20 
        ${darkMode ? 'bg-gray-900' : 'bg-white'}
        border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}
        px-4 py-3
      `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Preview
            </h2>
          </div>
          
          <Button variant="default" size="sm" onClick={onNext}>
            <Share size={16} className="mr-1" />
            Continue
          </Button>
        </div>
      </div>

      {/* Platform Previews */}
      <div className="pt-16 pb-8 p-4 h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformTargets.map(platform => (
              <div key={platform} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${platform === 'instagram' ? 'bg-pink-100 text-pink-800' : 'bg-black text-white'}
                  `}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatPresets[contentFormat][platform]} format
                  </span>
                </div>
                
                <div className={`
                  relative rounded-lg overflow-hidden border-2 border-gray-200
                  ${platform === 'instagram' ? 'max-w-sm' : 'max-w-xs'}
                  mx-auto
                `}>
                  {creationMode === 'photo' ? (
                    <img
                      src={recordedMedia}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={recordedMedia}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      loop
                    />
                  )}
                  
                  {/* Platform-specific overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {user.name?.[0] || 'Y'}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {user.name || 'Your Name'}
                        </p>
                        <p className="text-gray-300 text-xs">Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Publish Interface Component
const HybridPublishInterface = ({
  recordedMedia,
  creationMode,
  contentText,
  setContentText,
  hashtags,
  setHashtags,
  location,
  setLocation,
  privacy,
  setPrivacy,
  platformTargets,
  setPlatformTargets,
  onHashtagAdd,
  onHashtagRemove,
  onPublish,
  onBack,
  user,
  darkMode
}) => {
  return (
    <div className={`
      hybrid-publish-interface fixed inset-0 z-50 
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
    `}>
      {/* Header */}
      <div className={`
        absolute top-0 left-0 right-0 z-20 
        ${darkMode ? 'bg-gray-900' : 'bg-white'}
        border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}
        px-4 py-3
      `}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft size={20} />
            </Button>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Publish
            </h2>
          </div>
          
          <Button 
            variant="default" 
            size="sm" 
            onClick={onPublish}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Heart size={16} className="mr-1" />
            Publish
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-8 p-4 h-full overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Content Text */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Caption
            </label>
            <textarea
              value={contentText}
              onChange={(e) => setContentText(e.target.value)}
              placeholder="Write a caption..."
              className={`
                w-full p-3 border rounded-lg resize-none
                ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}
              `}
              rows={3}
            />
          </div>

          {/* Hashtags */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hashtags
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {hashtags.map(hashtag => (
                <div
                  key={hashtag}
                  className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                >
                  <span>#{hashtag}</span>
                  <button
                    onClick={() => onHashtagRemove(hashtag)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              {realTrendingHashtags.slice(0, 5).map(hashtag => (
                <Button
                  key={hashtag.tag}
                  variant="outline"
                  size="sm"
                  onClick={() => onHashtagAdd(hashtag.tag)}
                  className="text-xs"
                >
                  #{hashtag.tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Location
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add location..."
                className={`
                  w-full pl-10 pr-4 py-2 border rounded-lg
                  ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}
                `}
              />
            </div>
          </div>

          {/* Privacy */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Privacy
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'public', label: 'Public', icon: Globe },
                { id: 'friends', label: 'Friends', icon: Users },
                { id: 'private', label: 'Private', icon: Lock }
              ].map(option => (
                <Button
                  key={option.id}
                  variant={privacy === option.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPrivacy(option.id)}
                  className="flex items-center space-x-2"
                >
                  <option.icon size={16} />
                  <span>{option.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Platform Targets */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Publish to
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'instagram', label: 'Instagram', color: 'pink' },
                { id: 'tiktok', label: 'TikTok', color: 'black' }
              ].map(platform => (
                <Button
                  key={platform.id}
                  variant={platformTargets.includes(platform.id) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    if (platformTargets.includes(platform.id)) {
                      setPlatformTargets(platformTargets.filter(p => p !== platform.id))
                    } else {
                      setPlatformTargets([...platformTargets, platform.id])
                    }
                  }}
                  className="flex items-center space-x-2"
                >
                  <span>{platform.label}</span>
                  {platformTargets.includes(platform.id) && <Check size={16} />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Utility function to get aspect ratio class
const getAspectRatioClass = (format) => {
  switch (format) {
    case 'square':
      return 'w-80 h-80'
    case 'portrait':
      return 'w-64 h-96'
    case 'landscape':
      return 'w-96 h-54'
    default:
      return 'w-80 h-80'
  }
}

export default HybridContentCreator