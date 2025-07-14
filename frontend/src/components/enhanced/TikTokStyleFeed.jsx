import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  Music,
  MoreHorizontal,
  Volume2,
  VolumeX,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { useEnhancedPerformanceMonitor } from '../../hooks/useEnhancedPerformanceMonitor'

const TikTokStyleFeed = ({ posts, currentUser, onLike, onComment, onShare, onBookmark }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [direction, setDirection] = useState(0)
  
  const containerRef = useRef(null)
  const videoRefs = useRef([])
  const { trackEngagement } = useEnhancedPerformanceMonitor()
  
  // Gesture handling for swipe navigation
  const handleTouchStart = useRef({ y: 0, time: 0 })
  const handleTouchEnd = useCallback((e) => {
    const deltaY = e.changedTouches[0].clientY - handleTouchStart.current.y
    const deltaTime = Date.now() - handleTouchStart.current.time
    
    if (Math.abs(deltaY) > 50 && deltaTime < 300) {
      if (deltaY > 0 && currentIndex > 0) {
        // Swipe down - previous video
        setDirection(-1)
        setCurrentIndex(prev => prev - 1)
      } else if (deltaY < 0 && currentIndex < posts.length - 1) {
        // Swipe up - next video
        setDirection(1)
        setCurrentIndex(prev => prev + 1)
      }
    }
  }, [currentIndex, posts.length])

  // Enhanced action button component
  const ActionButton = ({ icon: Icon, count, active, onClick, color = "white", activeColor = "red" }) => (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className="flex flex-col items-center space-y-2 group"
    >
      <div className={`
        relative p-3 rounded-full backdrop-blur-sm 
        ${active ? `bg-${activeColor}-500` : 'bg-black/20 hover:bg-white/20'}
        transition-all duration-200 shadow-lg
      `}>
        <Icon 
          className={`w-7 h-7 ${active ? 'text-white fill-current' : 'text-white'}`} 
        />
        {active && (
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            className={`absolute -inset-1 border-2 border-${activeColor}-400 rounded-full`}
          />
        )}
      </div>
      {count !== undefined && (
        <motion.span 
          key={count}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-xs text-white font-bold drop-shadow-lg"
        >
          {formatCount(count)}
        </motion.span>
      )}
    </motion.button>
  )

  // Enhanced video player with smooth controls
  const VideoPlayer = ({ post, isActive, index }) => {
    const videoRef = useRef(null)
    const [progress, setProgress] = useState(0)
    const [isBuffering, setIsBuffering] = useState(false)

    useEffect(() => {
      const video = videoRef.current
      if (!video) return

      const updateProgress = () => {
        const progress = (video.currentTime / video.duration) * 100
        setProgress(progress)
      }

      const handleWaiting = () => setIsBuffering(true)
      const handleCanPlay = () => setIsBuffering(false)

      video.addEventListener('timeupdate', updateProgress)
      video.addEventListener('waiting', handleWaiting)
      video.addEventListener('canplay', handleCanPlay)

      if (isActive) {
        video.play()
        trackEngagement('video_view_start', { 
          videoId: post.id, 
          position: index,
          timestamp: Date.now()
        })
      } else {
        video.pause()
      }

      return () => {
        video.removeEventListener('timeupdate', updateProgress)
        video.removeEventListener('waiting', handleWaiting)
        video.removeEventListener('canplay', handleCanPlay)
      }
    }, [isActive, post.id, index])

    const handleVideoClick = () => {
      const video = videoRef.current
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }

    const handleDoubleClick = () => {
      onLike(post.id)
      // Heart animation effect
      const heart = document.createElement('div')
      heart.innerHTML = '❤️'
      heart.className = 'absolute text-6xl pointer-events-none z-50'
      heart.style.left = '50%'
      heart.style.top = '50%'
      heart.style.transform = 'translate(-50%, -50%)'
      
      containerRef.current?.appendChild(heart)
      
      // Animate heart
      heart.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => heart.remove()
    }

    return (
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={post.content.media}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={handleVideoClick}
          onDoubleClick={handleDoubleClick}
          onTouchStart={(e) => {
            handleTouchStart.current = {
              y: e.touches[0].clientY,
              time: Date.now()
            }
          }}
          onTouchEnd={handleTouchEnd}
        />
        
        {/* Buffering indicator */}
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div 
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Play/pause overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20"
            >
              <div className="bg-black/50 rounded-full p-4">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // User info component
  const UserInfo = ({ user }) => (
    <div className="flex items-center space-x-3 mb-3">
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        {user.verified && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-white font-bold text-lg drop-shadow-lg">{user.name}</h3>
        <p className="text-white/80 text-sm drop-shadow-lg">@{user.username}</p>
      </div>
      {user.id !== currentUser.id && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm ml-auto"
        >
          Follow
        </motion.button>
      )}
    </div>
  )

  // Content description with hashtags
  const ContentDescription = ({ text }) => {
    const formatText = (text) => {
      return text.split(' ').map((word, index) => {
        if (word.startsWith('#')) {
          return (
            <span key={index} className="text-blue-300 font-bold">
              {word}{' '}
            </span>
          )
        }
        if (word.startsWith('@')) {
          return (
            <span key={index} className="text-yellow-300 font-bold">
              {word}{' '}
            </span>
          )
        }
        return word + ' '
      })
    }

    return (
      <p className="text-white text-base leading-relaxed drop-shadow-lg mb-4 max-w-md">
        {formatText(text)}
      </p>
    )
  }

  // Music info component
  const MusicInfo = ({ track }) => {
    if (!track) return null
    
    return (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 max-w-xs"
      >
        <Music className="w-4 h-4 text-white" />
        <span className="text-white text-sm font-medium truncate">{track}</span>
      </motion.div>
    )
  }

  const formatCount = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
    return count.toString()
  }

  const currentPost = posts[currentIndex]

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Main video container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0"
          >
            <VideoPlayer 
              post={currentPost} 
              isActive={true}
              index={currentIndex}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Right action bar */}
        <div className="absolute right-4 bottom-24 space-y-6 z-10">
          <ActionButton
            icon={Heart}
            count={currentPost.engagement.likes}
            active={currentPost.isLiked}
            onClick={() => onLike(currentPost.id)}
            activeColor="red"
          />
          <ActionButton
            icon={MessageCircle}
            count={currentPost.engagement.comments}
            onClick={() => onComment(currentPost.id)}
          />
          <ActionButton
            icon={Share}
            count={currentPost.engagement.shares}
            onClick={() => onShare(currentPost.id)}
          />
          <ActionButton
            icon={Bookmark}
            active={currentPost.isBookmarked}
            onClick={() => onBookmark(currentPost.id)}
            activeColor="yellow"
          />
          <ActionButton
            icon={isMuted ? VolumeX : Volume2}
            onClick={() => setIsMuted(!isMuted)}
          />
        </div>

        {/* Bottom content info */}
        <div className="absolute bottom-6 left-4 right-24 z-10">
          <UserInfo user={currentPost.user} />
          <ContentDescription text={currentPost.content.text} />
          <MusicInfo track={currentPost.content.music} />
        </div>

        {/* Navigation indicators */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-2">
          {currentIndex > 0 && (
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(-1)
                setCurrentIndex(prev => prev - 1)
              }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-2"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </motion.button>
          )}
          {currentIndex < posts.length - 1 && (
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(1)
                setCurrentIndex(prev => prev + 1)
              }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-2"
            >
              <ArrowDown className="w-4 h-4 text-white" />
            </motion.button>
          )}
        </div>

        {/* Top overlay with user info and menu */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <span className="text-sm font-medium">Following</span>
              <span className="text-sm text-white/60">|</span>
              <span className="text-sm font-medium">For You</span>
            </div>
            <button className="text-white">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TikTokStyleFeed