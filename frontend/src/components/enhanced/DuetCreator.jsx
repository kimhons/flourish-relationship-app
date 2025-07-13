import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Play, 
  Pause, 
  Square, 
  RotateCcw, 
  FlipHorizontal, 
  Volume2, 
  VolumeX,
  Timer,
  Music,
  Sparkles,
  Check,
  ArrowLeft,
  Download,
  Share
} from 'lucide-react'

const DuetCreator = ({ originalVideo, onComplete, onCancel }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedChunks, setRecordedChunks] = useState([])
  const [recordingTime, setRecordingTime] = useState(0)
  const [maxDuration, setMaxDuration] = useState(originalVideo.duration || 15)
  const [cameraFacing, setCameraFacing] = useState('user')
  const [isMuted, setIsMuted] = useState(false)
  const [recordingComplete, setRecordingComplete] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [layoutMode, setLayoutMode] = useState('side-by-side') // 'side-by-side', 'top-bottom', 'picture-in-picture'
  
  const originalVideoRef = useRef(null)
  const userVideoRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const canvasRef = useRef(null)
  const recordingTimerRef = useRef(null)

  useEffect(() => {
    initializeCamera()
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: cameraFacing,
          width: { ideal: 720 },
          height: { ideal: 1280 }
        },
        audio: true
      })
      
      streamRef.current = stream
      if (userVideoRef.current) {
        userVideoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
  }

  const startRecording = async () => {
    if (!streamRef.current) return

    const mediaRecorder = new MediaRecorder(streamRef.current)
    mediaRecorderRef.current = mediaRecorder

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks(prev => [...prev, event.data])
      }
    }

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/mp4' })
      const url = URL.createObjectURL(blob)
      setPreviewUrl(url)
      setRecordingComplete(true)
    }

    // Start recording
    mediaRecorder.start()
    setIsRecording(true)
    setRecordingTime(0)
    
    // Start original video
    if (originalVideoRef.current) {
      originalVideoRef.current.currentTime = 0
      originalVideoRef.current.play()
    }

    // Start timer
    recordingTimerRef.current = setInterval(() => {
      setRecordingTime(prev => {
        if (prev >= maxDuration) {
          stopRecording()
          return maxDuration
        }
        return prev + 0.1
      })
    }, 100)
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      
      if (originalVideoRef.current) {
        originalVideoRef.current.pause()
      }
      
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current)
      }
    }
  }

  const retakeRecording = () => {
    setRecordedChunks([])
    setPreviewUrl(null)
    setRecordingComplete(false)
    setRecordingTime(0)
  }

  const switchCamera = () => {
    setCameraFacing(prev => prev === 'user' ? 'environment' : 'user')
    setTimeout(() => {
      initializeCamera()
    }, 100)
  }

  const createDuetVideo = async () => {
    if (!previewUrl) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas dimensions
    canvas.width = 720
    canvas.height = 1280

    // Create video elements for compositing
    const originalVideo = document.createElement('video')
    const userVideo = document.createElement('video')
    
    originalVideo.src = originalVideo.url
    userVideo.src = previewUrl

    // Composite videos based on layout mode
    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (layoutMode === 'side-by-side') {
        // Draw original video on left half
        ctx.drawImage(originalVideo, 0, 0, canvas.width / 2, canvas.height)
        // Draw user video on right half
        ctx.drawImage(userVideo, canvas.width / 2, 0, canvas.width / 2, canvas.height)
      } else if (layoutMode === 'top-bottom') {
        // Draw original video on top half
        ctx.drawImage(originalVideo, 0, 0, canvas.width, canvas.height / 2)
        // Draw user video on bottom half
        ctx.drawImage(userVideo, 0, canvas.height / 2, canvas.width, canvas.height / 2)
      } else if (layoutMode === 'picture-in-picture') {
        // Draw original video full screen
        ctx.drawImage(originalVideo, 0, 0, canvas.width, canvas.height)
        // Draw user video as small overlay
        const pipWidth = canvas.width * 0.3
        const pipHeight = canvas.height * 0.3
        ctx.drawImage(userVideo, canvas.width - pipWidth - 20, 20, pipWidth, pipHeight)
      }
    }

    // Record the composed video
    const stream = canvas.captureStream(30)
    const recorder = new MediaRecorder(stream)
    const chunks = []

    recorder.ondataavailable = (e) => chunks.push(e.data)
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' })
      onComplete(blob)
    }

    // Start recording and playback
    recorder.start()
    originalVideo.play()
    userVideo.play()

    const renderLoop = () => {
      renderFrame()
      if (!originalVideo.ended && !userVideo.ended) {
        requestAnimationFrame(renderLoop)
      } else {
        recorder.stop()
      }
    }

    renderLoop()
  }

  const LayoutSelector = () => (
    <div className="flex space-x-2 mb-4">
      {[
        { id: 'side-by-side', label: 'Side by Side', icon: '⬜⬜' },
        { id: 'top-bottom', label: 'Top Bottom', icon: '⬜\n⬜' },
        { id: 'picture-in-picture', label: 'PIP', icon: '⬜◦' }
      ].map(layout => (
        <motion.button
          key={layout.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLayoutMode(layout.id)}
          className={`
            flex flex-col items-center justify-center p-3 rounded-lg border-2 
            ${layoutMode === layout.id 
              ? 'border-pink-500 bg-pink-50' 
              : 'border-gray-300 bg-white'
            }
          `}
        >
          <div className="text-lg mb-1">{layout.icon}</div>
          <span className="text-xs font-medium">{layout.label}</span>
        </motion.button>
      ))}
    </div>
  )

  const RecordingControls = () => (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-6 z-20">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={switchCamera}
        className="bg-black/50 backdrop-blur-sm rounded-full p-3 text-white"
      >
        <FlipHorizontal className="w-6 h-6" />
      </motion.button>
      
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={isRecording ? stopRecording : startRecording}
        className={`
          relative w-20 h-20 rounded-full border-4 border-white flex items-center justify-center
          ${isRecording ? 'bg-red-500' : 'bg-transparent'}
        `}
      >
        {isRecording ? (
          <Square className="w-8 h-8 text-white" />
        ) : (
          <div className="w-12 h-12 bg-red-500 rounded-full" />
        )}
        
        {isRecording && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -inset-2 border-2 border-red-400 rounded-full"
          />
        )}
      </motion.button>
      
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMuted(!isMuted)}
        className="bg-black/50 backdrop-blur-sm rounded-full p-3 text-white"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </motion.button>
    </div>
  )

  const RecordingTimer = () => (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="flex items-center space-x-2 text-white">
          <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`} />
          <span className="text-sm font-mono">
            {Math.floor(recordingTime)}s / {maxDuration}s
          </span>
        </div>
      </div>
    </div>
  )

  const PreviewControls = () => (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-20">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={retakeRecording}
        className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium"
      >
        <RotateCcw className="w-5 h-5 mr-2" />
        Retake
      </motion.button>
      
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={createDuetVideo}
        className="bg-pink-500 hover:bg-pink-600 rounded-full px-8 py-3 text-white font-bold"
      >
        <Check className="w-5 h-5 mr-2" />
        Create Duet
      </motion.button>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-20">
        <div className="flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onCancel}
            className="text-white p-2"
          >
            <X className="w-6 h-6" />
          </motion.button>
          <h1 className="text-white text-lg font-bold">Create Duet</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full h-full">
        {!recordingComplete ? (
          // Recording interface
          <div className="relative w-full h-full">
            {/* Video containers */}
            <div className={`
              relative w-full h-full flex
              ${layoutMode === 'side-by-side' ? 'flex-row' : 'flex-col'}
            `}>
              {/* Original video */}
              <div className={`
                relative bg-gray-900
                ${layoutMode === 'side-by-side' ? 'w-1/2' : 'h-1/2'}
              `}>
                <video
                  ref={originalVideoRef}
                  src={originalVideo.url}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white text-sm">@{originalVideo.user.username}</span>
                </div>
              </div>
              
              {/* User video */}
              <div className={`
                relative bg-black
                ${layoutMode === 'side-by-side' ? 'w-1/2' : 'h-1/2'}
              `}>
                <video
                  ref={userVideoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={isMuted}
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white text-sm">You</span>
                </div>
              </div>
            </div>

            {/* Layout selector */}
            <div className="absolute top-20 left-4 right-4 z-20">
              <LayoutSelector />
            </div>

            {/* Recording timer */}
            <RecordingTimer />
            
            {/* Recording controls */}
            <RecordingControls />
          </div>
        ) : (
          // Preview interface
          <div className="relative w-full h-full">
            <video
              src={previewUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
            />
            
            {/* Preview controls */}
            <PreviewControls />
          </div>
        )}
      </div>

      {/* Hidden canvas for video composition */}
      <canvas
        ref={canvasRef}
        className="hidden"
        width={720}
        height={1280}
      />
    </div>
  )
}

export default DuetCreator