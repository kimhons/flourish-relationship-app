import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MoreHorizontal,
  Music,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Sparkles,
  Copy,
  UserPlus,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatNumber } from '../data/realData'

const HybridContentCard = ({ 
  content, 
  displayMode = 'feed', 
  user, 
  onLike, 
  onComment, 
  onShare, 
  onBookmark,
  onDuet,
  onCollaborate,
  darkMode = false
}) => {
  const [isLiked, setIsLiked] = useState(content.engagement?.isLiked || false)
  const [isBookmarked, setIsBookmarked] = useState(content.engagement?.isBookmarked || false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showActions, setShowActions] = useState(false)
  const [likes, setLikes] = useState(content.engagement?.likes || 0)
  const [comments, setComments] = useState(content.engagement?.comments || 0)
  const [shares, setShares] = useState(content.engagement?.shares || 0)
  const [bookmarks, setBookmarks] = useState(content.engagement?.bookmarks || 0)
  
  const videoRef = useRef(null)
  const cardRef = useRef(null)

  // Determine layout based on content type and display mode
  const getLayoutClass = () => {
    switch (content.type) {
      case 'photo':
        return displayMode === 'feed' ? 'aspect-square' : 'aspect-4/5'
      case 'video':
        return displayMode === 'feed' ? 'aspect-video' : 'aspect-9/16'
      case 'reel':
        return 'aspect-9/16'
      case 'story':
        return 'aspect-9/16'
      default:
        return 'aspect-square'
    }
  }

  const getContentClass = () => {
    const baseClass = `
      unified-content-card relative overflow-hidden
      ${getLayoutClass()}
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-[1.02]
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
    `
    
    if (content.type === 'story') {
      return `${baseClass} rounded-2xl border-2 ${
        content.viewed ? 'border-gray-300' : 'border-gradient-to-r from-purple-500 to-pink-500'
      }`
    }
    
    return `${baseClass} rounded-2xl ${
      darkMode ? 'border border-gray-700' : 'border border-gray-200'
    }`
  }

  // Auto-play video when in view (TikTok-style)
  useEffect(() => {
    if (content.type === 'video' || content.type === 'reel') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              videoRef.current.play()
              setIsPlaying(true)
            } else if (videoRef.current) {
              videoRef.current.pause()
              setIsPlaying(false)
            }
          })
        },
        { threshold: 0.5 }
      )

      if (cardRef.current) {
        observer.observe(cardRef.current)
      }

      return () => observer.disconnect()
    }
  }, [content.type])

  const handleLike = () => {
    const newLiked = !isLiked
    setIsLiked(newLiked)
    setLikes(prev => newLiked ? prev + 1 : prev - 1)
    onLike?.(content.id, newLiked)
  }

  const handleBookmark = () => {
    const newBookmarked = !isBookmarked
    setIsBookmarked(newBookmarked)
    setBookmarks(prev => newBookmarked ? prev + 1 : prev - 1)
    onBookmark?.(content.id, newBookmarked)
  }

  const handleShare = () => {
    setShares(prev => prev + 1)
    onShare?.(content.id)
  }

  const handleComment = () => {
    onComment?.(content.id)
  }

  const handleDuet = () => {
    onDuet?.(content.id)
  }

  const handleCollaborate = () => {
    onCollaborate?.(content.id)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={getContentClass()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setShowActions(true)}
      onHoverEnd={() => setShowActions(false)}
    >
      {/* Content Media */}
      <div className="relative w-full h-full">
        {content.type === 'photo' && (
          <img
            src={content.media}
            alt={content.text}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        
        {(content.type === 'video' || content.type === 'reel') && (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={content.media}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              onClick={togglePlayPause}
            />
            
            {/* Video Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={togglePlayPause}
                    className="bg-black bg-opacity-50 rounded-full p-4 text-white hover:bg-opacity-70 transition-all"
                  >
                    <Play size={24} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mute Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: showActions ? 1 : 0 }}
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
          </div>
        )}
        
        {/* Content Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
          {/* User Info */}
          <div className="flex items-center space-x-3 mb-2">
            <img
              src={content.user.avatar}
              alt={content.user.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-white font-semibold text-sm">{content.user.name}</h3>
                <span className="text-gray-300 text-xs">{content.user.username}</span>
                {content.user.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-xs">
                <Clock size={12} />
                <span>{content.timestamp}</span>
                {content.location && (
                  <>
                    <MapPin size={12} />
                    <span>{content.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Content Text */}
          {content.text && (
            <p className="text-white text-sm mb-2 line-clamp-2">
              {content.text}
            </p>
          )}
          
          {/* Music/Sound Info */}
          {content.music && (
            <div className="flex items-center space-x-2 text-gray-300 text-xs mb-2">
              <Music size={12} />
              <span>♪ {content.music}</span>
            </div>
          )}
          
          {/* Trending/Hot Indicators */}
          {content.trending && (
            <div className="flex items-center space-x-1 text-yellow-400 text-xs">
              <TrendingUp size={12} />
              <span>Trending</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Hybrid Engagement Bar */}
      <HybridEngagementBar
        likes={likes}
        comments={comments}
        shares={shares}
        bookmarks={bookmarks}
        isLiked={isLiked}
        isBookmarked={isBookmarked}
        contentType={content.type}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        onBookmark={handleBookmark}
        onDuet={handleDuet}
        onCollaborate={handleCollaborate}
        showActions={showActions}
        darkMode={darkMode}
      />
    </motion.div>
  )
}

// Unified engagement system for all content types
const HybridEngagementBar = ({ 
  likes, 
  comments, 
  shares, 
  bookmarks, 
  isLiked, 
  isBookmarked, 
  contentType,
  onLike, 
  onComment, 
  onShare, 
  onBookmark, 
  onDuet, 
  onCollaborate,
  showActions,
  darkMode 
}) => {
  const getEngagementLayout = () => {
    switch (contentType) {
      case 'reel':
      case 'video':
        return 'tiktok-style' // Vertical right side
      case 'story':
        return 'story-style' // Bottom overlay
      default:
        return 'instagram-style' // Bottom horizontal
    }
  }

  const layout = getEngagementLayout()

  if (layout === 'tiktok-style') {
    return (
      <div className="absolute right-4 bottom-20 flex flex-col space-y-4">
        <EngagementButton
          icon={Heart}
          count={likes}
          active={isLiked}
          onClick={onLike}
          activeColor="text-red-500"
          size="lg"
        />
        <EngagementButton
          icon={MessageCircle}
          count={comments}
          onClick={onComment}
          size="lg"
        />
        <EngagementButton
          icon={Share}
          count={shares}
          onClick={onShare}
          size="lg"
        />
        <EngagementButton
          icon={Bookmark}
          count={bookmarks}
          active={isBookmarked}
          onClick={onBookmark}
          activeColor="text-yellow-500"
          size="lg"
        />
        
        {/* TikTok-style collaboration buttons */}
        <EngagementButton
          icon={Copy}
          onClick={onDuet}
          label="Duet"
          size="lg"
        />
        <EngagementButton
          icon={UserPlus}
          onClick={onCollaborate}
          label="Collab"
          size="lg"
        />
      </div>
    )
  }

  if (layout === 'story-style') {
    return (
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="flex space-x-3">
          <EngagementButton
            icon={Heart}
            active={isLiked}
            onClick={onLike}
            activeColor="text-red-500"
            showCount={false}
          />
          <EngagementButton
            icon={MessageSquare}
            onClick={onComment}
            showCount={false}
          />
        </div>
        <div className="flex space-x-2">
          <EngagementButton
            icon={Share}
            onClick={onShare}
            showCount={false}
          />
          <EngagementButton
            icon={Bookmark}
            active={isBookmarked}
            onClick={onBookmark}
            activeColor="text-yellow-500"
            showCount={false}
          />
        </div>
      </div>
    )
  }

  // Instagram-style (default)
  return (
    <div className={`
      absolute bottom-0 left-0 right-0 
      ${darkMode ? 'bg-gray-800' : 'bg-white'} 
      border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}
      p-4
    `}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <EngagementButton
            icon={Heart}
            count={likes}
            active={isLiked}
            onClick={onLike}
            activeColor="text-red-500"
            showCount={true}
            horizontal={true}
          />
          <EngagementButton
            icon={MessageCircle}
            count={comments}
            onClick={onComment}
            showCount={true}
            horizontal={true}
          />
          <EngagementButton
            icon={Share}
            count={shares}
            onClick={onShare}
            showCount={true}
            horizontal={true}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          {showActions && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-2"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={onDuet}
                className="text-purple-600 hover:text-purple-700"
              >
                Duet
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onCollaborate}
                className="text-blue-600 hover:text-blue-700"
              >
                Collab
              </Button>
            </motion.div>
          )}
          
          <EngagementButton
            icon={Bookmark}
            active={isBookmarked}
            onClick={onBookmark}
            activeColor="text-yellow-500"
            showCount={false}
          />
        </div>
      </div>
    </div>
  )
}

// Reusable engagement button component
const EngagementButton = ({ 
  icon: Icon, 
  count, 
  active, 
  onClick, 
  activeColor = 'text-blue-500',
  size = 'md',
  showCount = true,
  horizontal = false,
  label
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base'
  }

  const buttonClass = `
    ${sizeClasses[size]} 
    rounded-full 
    flex items-center justify-center 
    transition-all duration-200 
    hover:scale-110 
    ${active ? `${activeColor} bg-opacity-20` : 'text-white hover:text-gray-300'}
    ${size === 'lg' ? 'bg-black bg-opacity-50 hover:bg-opacity-70' : ''}
  `

  return (
    <div className={`flex ${horizontal ? 'items-center space-x-2' : 'flex-col items-center space-y-1'}`}>
      <button
        onClick={onClick}
        className={buttonClass}
      >
        <Icon size={size === 'lg' ? 20 : size === 'md' ? 16 : 14} />
      </button>
      
      {showCount && count !== undefined && (
        <span className={`text-xs ${horizontal ? '' : 'text-center'} ${
          active ? activeColor : 'text-gray-300'
        }`}>
          {formatNumber(count)}
        </span>
      )}
      
      {label && (
        <span className="text-xs text-gray-300 text-center">
          {label}
        </span>
      )}
    </div>
  )
}

export default HybridContentCard