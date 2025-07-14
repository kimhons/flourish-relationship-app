import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { 
  Camera, 
  Search, 
  Bell, 
  MessageCircle, 
  Heart, 
  Home, 
  Compass, 
  PlusSquare, 
  User,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import HybridContentCard from './HybridContentCard'
import { realStories, realPosts } from '../data/realData'

const HybridNavigationController = ({ user, darkMode }) => {
  const [currentMode, setCurrentMode] = useState('feed') // 'feed', 'stories', 'reels', 'camera'
  const [swipeDirection, setSwipeDirection] = useState('vertical')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showUI, setShowUI] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(false)
  
  const containerRef = useRef(null)
  const controls = useAnimation()
  
  // Filter content based on current mode
  const getCurrentContent = () => {
    switch (currentMode) {
      case 'stories':
        return realStories
      case 'reels':
        return realPosts.filter(post => post.content.type === 'video')
      case 'feed':
      default:
        return realPosts
    }
  }

  const currentContent = getCurrentContent()

  // Handle swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      if (currentMode === 'feed' && eventData.deltaX > 100) {
        handleModeChange('stories')
      } else if (currentMode === 'stories' && eventData.deltaX > 100) {
        handleModeChange('camera')
      }
    },
    onSwipedRight: (eventData) => {
      if (currentMode === 'stories' && eventData.deltaX > 100) {
        handleModeChange('feed')
      } else if (currentMode === 'camera' && eventData.deltaX > 100) {
        handleModeChange('stories')
      }
    },
    onSwipedUp: (eventData) => {
      if (currentMode === 'feed' && eventData.deltaY > 100) {
        handleModeChange('reels')
      } else if (['feed', 'reels'].includes(currentMode) && eventData.deltaY > 50) {
        handleContentNavigation('next')
      }
    },
    onSwipedDown: (eventData) => {
      if (currentMode === 'reels' && eventData.deltaY > 100) {
        handleModeChange('feed')
      } else if (['feed', 'reels'].includes(currentMode) && eventData.deltaY > 50) {
        handleContentNavigation('previous')
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  // Handle mode transitions
  const handleModeChange = (newMode) => {
    setCurrentMode(newMode)
    setCurrentIndex(0)
    setSwipeDirection(newMode === 'stories' ? 'horizontal' : 'vertical')
    setIsFullScreen(newMode === 'reels')
    
    // Animate transition
    controls.start({
      x: newMode === 'stories' ? '-100%' : newMode === 'camera' ? '100%' : '0%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    })
  }

  // Handle content navigation within mode
  const handleContentNavigation = (direction) => {
    if (direction === 'next' && currentIndex < currentContent.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else if (direction === 'previous' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  // Auto-hide UI in full screen mode
  useEffect(() => {
    if (isFullScreen) {
      const timer = setTimeout(() => setShowUI(false), 3000)
      return () => clearTimeout(timer)
    } else {
      setShowUI(true)
    }
  }, [isFullScreen, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          if (currentMode === 'stories') handleContentNavigation('previous')
          else handleModeChange('stories')
          break
        case 'ArrowRight':
          if (currentMode === 'stories') handleContentNavigation('next')
          else handleModeChange('stories')
          break
        case 'ArrowUp':
          if (currentMode === 'feed') handleModeChange('reels')
          else handleContentNavigation('previous')
          break
        case 'ArrowDown':
          if (currentMode === 'reels') handleModeChange('feed')
          else handleContentNavigation('next')
          break
        case 'Escape':
          setIsFullScreen(false)
          setCurrentMode('feed')
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentMode, currentIndex])

  return (
    <div className={`
      hybrid-navigation-container relative w-full h-screen overflow-hidden
      ${darkMode ? 'bg-gray-900' : 'bg-white'}
      ${isFullScreen ? 'fixed inset-0 z-50' : ''}
    `}>
      {/* Navigation Header */}
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`
              absolute top-0 left-0 right-0 z-20
              ${darkMode ? 'bg-gray-900' : 'bg-white'}
              border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}
              px-4 py-3
            `}
          >
            <HybridNavigationHeader 
              currentMode={currentMode}
              onModeChange={handleModeChange}
              user={user}
              darkMode={darkMode}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div 
        ref={containerRef}
        className="relative w-full h-full pt-16"
        {...swipeHandlers}
        onClick={() => setShowUI(true)}
      >
        <AnimatePresence mode="wait">
          {currentMode === 'feed' && (
            <motion.div
              key="feed"
              initial={{ opacity: 0, x: swipeDirection === 'horizontal' ? -100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: swipeDirection === 'horizontal' ? 100 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <HybridFeedView 
                posts={currentContent}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                user={user}
                darkMode={darkMode}
              />
            </motion.div>
          )}

          {currentMode === 'stories' && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <HybridStoriesView 
                stories={currentContent}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                onClose={() => handleModeChange('feed')}
                user={user}
                darkMode={darkMode}
              />
            </motion.div>
          )}

          {currentMode === 'reels' && (
            <motion.div
              key="reels"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <HybridReelsView 
                reels={currentContent}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                onClose={() => handleModeChange('feed')}
                user={user}
                darkMode={darkMode}
              />
            </motion.div>
          )}

          {currentMode === 'camera' && (
            <motion.div
              key="camera"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <HybridCameraView 
                onClose={() => handleModeChange('stories')}
                user={user}
                darkMode={darkMode}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Hints */}
        <HybridNavigationHints 
          currentMode={currentMode}
          showUI={showUI}
          darkMode={darkMode}
        />
      </div>

      {/* Bottom Navigation */}
      <AnimatePresence>
        {showUI && !isFullScreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`
              absolute bottom-0 left-0 right-0 z-20
              ${darkMode ? 'bg-gray-900' : 'bg-white'}
              border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}
              px-4 py-3
            `}
          >
            <HybridBottomNavigation 
              currentMode={currentMode}
              onModeChange={handleModeChange}
              darkMode={darkMode}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Navigation Header Component
const HybridNavigationHeader = ({ currentMode, onModeChange, user, darkMode }) => {
  const getModeTitle = () => {
    switch (currentMode) {
      case 'stories': return 'Stories'
      case 'reels': return 'Reels'
      case 'camera': return 'Create'
      default: return 'Flourish'
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {getModeTitle()}
        </h1>
        
        {currentMode === 'feed' && (
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onModeChange('stories')}
              className="text-purple-600 hover:text-purple-700"
            >
              Stories
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onModeChange('reels')}
              className="text-blue-600 hover:text-blue-700"
            >
              Reels
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm">
          <Search size={20} />
        </Button>
        <Button variant="ghost" size="sm">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle size={20} />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onModeChange('camera')}
        >
          <Camera size={20} />
        </Button>
      </div>
    </div>
  )
}

// Feed View Component
const HybridFeedView = ({ posts, currentIndex, onIndexChange, user, darkMode }) => {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-md mx-auto space-y-4 p-4">
        {posts.map((post, index) => (
          <HybridContentCard
            key={post.id}
            content={post}
            displayMode="feed"
            user={user}
            darkMode={darkMode}
            onLike={(postId, liked) => console.log('Like:', postId, liked)}
            onComment={(postId) => console.log('Comment:', postId)}
            onShare={(postId) => console.log('Share:', postId)}
            onBookmark={(postId) => console.log('Bookmark:', postId)}
            onDuet={(postId) => console.log('Duet:', postId)}
            onCollaborate={(postId) => console.log('Collaborate:', postId)}
          />
        ))}
      </div>
    </div>
  )
}

// Stories View Component
const HybridStoriesView = ({ stories, currentIndex, onIndexChange, onClose, user, darkMode }) => {
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentIndex < stories.length - 1) {
              onIndexChange(currentIndex + 1)
              return 0
            } else {
              onClose()
              return 100
            }
          }
          return prev + 1
        })
      }, 50)
      
      return () => clearInterval(timer)
    }
  }, [currentIndex, isPlaying, stories.length, onIndexChange, onClose])

  if (!stories[currentIndex]) return null

  return (
    <div className="relative w-full h-full bg-black">
      {/* Progress Bars */}
      <div className="absolute top-4 left-4 right-4 flex space-x-1 z-10">
        {stories.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white transition-all duration-100"
              style={{
                width: index < currentIndex ? '100%' : 
                       index === currentIndex ? `${progress}%` : '0%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Story Content */}
      <div className="w-full h-full">
        <HybridContentCard
          content={stories[currentIndex]}
          displayMode="story"
          user={user}
          darkMode={true}
          onLike={(postId, liked) => console.log('Like story:', postId, liked)}
          onComment={(postId) => console.log('Comment story:', postId)}
          onShare={(postId) => console.log('Share story:', postId)}
          onDuet={(postId) => console.log('Duet story:', postId)}
          onCollaborate={(postId) => console.log('Collaborate story:', postId)}
        />
      </div>

      {/* Story Controls */}
      <div className="absolute inset-0 flex">
        <button
          className="w-1/2 h-full"
          onClick={() => currentIndex > 0 && onIndexChange(currentIndex - 1)}
        />
        <button
          className="w-1/2 h-full"
          onClick={() => {
            if (currentIndex < stories.length - 1) {
              onIndexChange(currentIndex + 1)
            } else {
              onClose()
            }
          }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white z-10"
      >
        ×
      </button>
    </div>
  )
}

// Reels View Component
const HybridReelsView = ({ reels, currentIndex, onIndexChange, onClose, user, darkMode }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <div className="w-full h-full">
        {reels[currentIndex] && (
          <HybridContentCard
            content={reels[currentIndex]}
            displayMode="reel"
            user={user}
            darkMode={true}
            onLike={(postId, liked) => console.log('Like reel:', postId, liked)}
            onComment={(postId) => console.log('Comment reel:', postId)}
            onShare={(postId) => console.log('Share reel:', postId)}
            onBookmark={(postId) => console.log('Bookmark reel:', postId)}
            onDuet={(postId) => console.log('Duet reel:', postId)}
            onCollaborate={(postId) => console.log('Collaborate reel:', postId)}
          />
        )}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <button
          onClick={() => currentIndex > 0 && onIndexChange(currentIndex - 1)}
          className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
          disabled={currentIndex === 0}
        >
          <ArrowUp size={20} />
        </button>
        <button
          onClick={() => currentIndex < reels.length - 1 && onIndexChange(currentIndex + 1)}
          className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
          disabled={currentIndex === reels.length - 1}
        >
          <ArrowDown size={20} />
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white z-10"
      >
        ×
      </button>
    </div>
  )
}

// Camera View Component
const HybridCameraView = ({ onClose, user, darkMode }) => {
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <Camera size={64} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Camera</h2>
        <p className="text-gray-300">Camera functionality will be implemented here</p>
      </div>
      
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white z-10"
      >
        ×
      </button>
    </div>
  )
}

// Navigation Hints Component
const HybridNavigationHints = ({ currentMode, showUI, darkMode }) => {
  const getHints = () => {
    switch (currentMode) {
      case 'feed':
        return [
          { direction: '←', action: 'Stories' },
          { direction: '↑', action: 'Reels' }
        ]
      case 'stories':
        return [
          { direction: '→', action: 'Feed' },
          { direction: '←', action: 'Camera' }
        ]
      case 'reels':
        return [
          { direction: '↓', action: 'Feed' },
          { direction: '↑↓', action: 'Navigate' }
        ]
      default:
        return []
    }
  }

  const hints = getHints()

  return (
    <AnimatePresence>
      {showUI && hints.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 right-4 z-10"
        >
          <div className={`
            ${darkMode ? 'bg-gray-800' : 'bg-white'} 
            rounded-lg p-2 shadow-lg space-y-1
          `}>
            {hints.map((hint, index) => (
              <div
                key={index}
                className={`
                  flex items-center space-x-2 text-xs
                  ${darkMode ? 'text-gray-300' : 'text-gray-600'}
                `}
              >
                <span className="font-mono">{hint.direction}</span>
                <span>{hint.action}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Bottom Navigation Component
const HybridBottomNavigation = ({ currentMode, onModeChange, darkMode }) => {
  const navItems = [
    { id: 'feed', icon: Home, label: 'Feed' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'camera', icon: PlusSquare, label: 'Create' },
    { id: 'reels', icon: Play, label: 'Reels' },
    { id: 'profile', icon: User, label: 'Profile' }
  ]

  return (
    <div className="flex items-center justify-around">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onModeChange(item.id)}
          className={`
            flex flex-col items-center space-y-1 p-2 rounded-lg transition-all
            ${currentMode === item.id 
              ? 'text-blue-600 bg-blue-50' 
              : darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-600 hover:text-gray-900'
            }
          `}
        >
          <item.icon size={20} />
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default HybridNavigationController