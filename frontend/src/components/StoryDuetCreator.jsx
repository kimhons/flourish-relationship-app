import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Video, 
  Mic, 
  MicOff, 
  StopCircle, 
  Play, 
  Pause,
  RotateCcw,
  Check,
  X,
  Volume2,
  VolumeX,
  Settings,
  Sparkles,
  Music,
  Filter,
  Smile,
  Heart,
  MessageCircle,
  Share,
  ArrowLeft,
  Grid,
  Split,
  Layers,
  Maximize,
  Minimize
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatNumber } from '../data/realData'

const StoryDuetCreator = ({ originalStory, onComplete, onCancel, user, darkMode }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedVideo, setRecordedVideo] = useState(null)
  const [duetLayout, setDuetLayout] = useState('side-by-side') // 'side-by-side', 'picture-in-picture', 'green-screen'
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [maxDuration] = useState(60) // 60 seconds max
  const [effects, setEffects] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('none')
  const [showPreview, setShowPreview] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [cameraFacing, setCameraFacing] = useState('user') // 'user' or 'environment'
  
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const recordedChunksRef = useRef([])
  const timerRef = useRef(null)

  // Initialize camera
  useEffect(() => {
    initializeCamera()
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [cameraFacing])

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraFacing },
        audio: audioEnabled
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
    
    recordedChunksRef.current = []
    
    const mediaRecorder = new MediaRecorder(streamRef.current, {
      mimeType: 'video/webm;codecs=vp9'
    })
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data)
      }
    }
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' })
      const url = URL.createObjectURL(blob)
      setRecordedVideo(url)
      setShowPreview(true)
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

  const retakeVideo = () => {
    if (recordedVideo) {
      URL.revokeObjectURL(recordedVideo)
      setRecordedVideo(null)
    }
    setShowPreview(false)
    setRecordingTime(0)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled)
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !audioEnabled
      })
    }
  }

  const switchCamera = () => {
    setCameraFacing(prev => prev === 'user' ? 'environment' : 'user')
  }

  const handleComplete = () => {
    const duetData = {
      originalStory,
      userVideo: recordedVideo,
      layout: duetLayout,
      effects,
      filter: selectedFilter,
      duration: recordingTime,
      user,
      timestamp: new Date().toISOString()
    }
    
    onComplete(duetData)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const duetLayouts = [
    { id: 'side-by-side', label: 'Side by Side', icon: Split },
    { id: 'picture-in-picture', label: 'PIP', icon: Layers },
    { id: 'green-screen', label: 'Green Screen', icon: Maximize }
  ]

  const filters = [
    { id: 'none', label: 'None', preview: '⚪' },
    { id: 'vintage', label: 'Vintage', preview: '🟤' },
    { id: 'black-white', label: 'B&W', preview: '⚫' },
    { id: 'warm', label: 'Warm', preview: '🟡' },
    { id: 'cool', label: 'Cool', preview: '🔵' },
    { id: 'dramatic', label: 'Dramatic', preview: '🔴' }
  ]

  if (showPreview) {
    return (
      <StoryDuetPreview
        originalStory={originalStory}
        recordedVideo={recordedVideo}
        duetLayout={duetLayout}
        effects={effects}
        filter={selectedFilter}
        duration={recordingTime}
        user={user}
        darkMode={darkMode}
        onComplete={handleComplete}
        onRetake={retakeVideo}
        onCancel={onCancel}
      />
    )
  }

  return (
    <div className={`
      story-duet-creator fixed inset-0 z-50 
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
            <Button
              variant="ghost"
              size="sm"
              onClick={onCancel}
            >
              <ArrowLeft size={20} />
            </Button>
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Duet with Story
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleAudio}
              className={audioEnabled ? 'text-green-600' : 'text-red-600'}
            >
              {audioEnabled ? <Mic size={20} /> : <MicOff size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={switchCamera}
            >
              <RotateCcw size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full pt-16">
        {/* Duet Layout Preview */}
        <div className="relative w-full h-full">
          <DuetLayoutRenderer
            originalStory={originalStory}
            userVideoRef={videoRef}
            layout={duetLayout}
            filter={selectedFilter}
            effects={effects}
            darkMode={darkMode}
          />
          
          {/* Camera Video */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted={isMuted}
            className="hidden" // Hidden as it's rendered in the layout
          />
        </div>

        {/* Recording Timer */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10"
            >
              <div className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="font-mono text-sm">
                  {formatTime(recordingTime)} / {formatTime(maxDuration)}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 space-y-4">
          {/* Layout Selection */}
          <div className="flex justify-center space-x-2">
            {duetLayouts.map((layout) => (
              <Button
                key={layout.id}
                variant={duetLayout === layout.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDuetLayout(layout.id)}
                className="flex items-center space-x-2"
              >
                <layout.icon size={16} />
                <span className="text-xs">{layout.label}</span>
              </Button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex justify-center space-x-2 overflow-x-auto">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="flex-shrink-0"
              >
                <span className="text-lg mr-1">{filter.preview}</span>
                <span className="text-xs">{filter.label}</span>
              </Button>
            ))}
          </div>

          {/* Recording Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={isRecording ? stopRecording : startRecording}
              className={`
                w-20 h-20 rounded-full border-4 border-white
                ${isRecording 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                }
              `}
            >
              {isRecording ? (
                <StopCircle size={32} />
              ) : (
                <Video size={32} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Duet Layout Renderer Component
const DuetLayoutRenderer = ({ originalStory, userVideoRef, layout, filter, effects, darkMode }) => {
  const renderSideBySide = () => (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full relative">
        <div className="w-full h-full bg-black rounded-l-lg overflow-hidden">
          {originalStory.content.type === 'video' ? (
            <video
              src={originalStory.content.media}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={originalStory.content.media}
              className="w-full h-full object-cover"
              alt="Original story"
            />
          )}
        </div>
        
        {/* Original Story Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2">
            <img
              src={originalStory.user.avatar}
              className="w-8 h-8 rounded-full border-2 border-white"
              alt={originalStory.user.name}
            />
            <div>
              <p className="text-white text-sm font-semibold">
                {originalStory.user.name}
              </p>
              <p className="text-gray-300 text-xs">{originalStory.timestamp}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-1/2 h-full relative">
        <div className="w-full h-full bg-black rounded-r-lg overflow-hidden">
          {userVideoRef.current && (
            <video
              ref={userVideoRef}
              className={`w-full h-full object-cover ${getFilterClass(filter)}`}
              autoPlay
              playsInline
              muted
            />
          )}
        </div>
        
        {/* User Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {originalStory.user.name?.[0] || 'Y'}
              </span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Your Response</p>
              <p className="text-gray-300 text-xs">Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPictureInPicture = () => (
    <div className="relative w-full h-full">
      {/* Main video (user) */}
      <div className="w-full h-full bg-black rounded-lg overflow-hidden">
        {userVideoRef.current && (
          <video
            ref={userVideoRef}
            className={`w-full h-full object-cover ${getFilterClass(filter)}`}
            autoPlay
            playsInline
            muted
          />
        )}
      </div>
      
      {/* Picture-in-picture (original story) */}
      <div className="absolute top-4 right-4 w-32 h-48 bg-black rounded-lg overflow-hidden border-2 border-white">
        {originalStory.content.type === 'video' ? (
          <video
            src={originalStory.content.media}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={originalStory.content.media}
            className="w-full h-full object-cover"
            alt="Original story"
          />
        )}
      </div>
    </div>
  )

  const renderGreenScreen = () => (
    <div className="relative w-full h-full">
      {/* Background (original story) */}
      <div className="w-full h-full bg-black rounded-lg overflow-hidden">
        {originalStory.content.type === 'video' ? (
          <video
            src={originalStory.content.media}
            className="w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={originalStory.content.media}
            className="w-full h-full object-cover opacity-70"
            alt="Original story"
          />
        )}
      </div>
      
      {/* User video overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-80 bg-black rounded-lg overflow-hidden border-2 border-white">
          {userVideoRef.current && (
            <video
              ref={userVideoRef}
              className={`w-full h-full object-cover ${getFilterClass(filter)}`}
              autoPlay
              playsInline
              muted
            />
          )}
        </div>
      </div>
    </div>
  )

  const getFilterClass = (filter) => {
    switch (filter) {
      case 'vintage': return 'sepia'
      case 'black-white': return 'grayscale'
      case 'warm': return 'hue-rotate-15'
      case 'cool': return 'hue-rotate-180'
      case 'dramatic': return 'contrast-125 saturate-125'
      default: return ''
    }
  }

  switch (layout) {
    case 'picture-in-picture':
      return renderPictureInPicture()
    case 'green-screen':
      return renderGreenScreen()
    default:
      return renderSideBySide()
  }
}

// Story Duet Preview Component
const StoryDuetPreview = ({ 
  originalStory, 
  recordedVideo, 
  duetLayout, 
  effects, 
  filter, 
  duration, 
  user, 
  darkMode, 
  onComplete, 
  onRetake, 
  onCancel 
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`
      story-duet-preview fixed inset-0 z-50 
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
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Preview Duet
          </h2>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onRetake}
            >
              <RotateCcw size={16} className="mr-1" />
              Retake
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onComplete}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Check size={16} className="mr-1" />
              Share Duet
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="relative w-full h-full pt-16">
        <div className="w-full h-full bg-black rounded-lg overflow-hidden">
          {/* This would render the combined duet video */}
          <video
            ref={videoRef}
            src={recordedVideo}
            className="w-full h-full object-cover"
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {!isPlaying && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={togglePlay}
                className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
              >
                <Play size={32} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={onCancel}
            className="flex items-center space-x-2"
          >
            <X size={20} />
            <span>Cancel</span>
          </Button>
          <Button
            variant="default"
            size="lg"
            onClick={onComplete}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex items-center space-x-2"
          >
            <Heart size={20} />
            <span>Share to Story</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StoryDuetCreator