import React, { useState, useEffect, useRef } from 'react'
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  MoreHorizontal, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Moon,
  Sun,
  Search,
  Bell,
  Plus,
  Music,
  Sparkles,
  TrendingUp,
  MapPin,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { realStories, realPosts, formatNumber } from '../data/realData'

const SocialFeedDashboard = ({ user, darkMode, setDarkMode }) => {
  const [stories, setStories] = useState(realStories)
  const [posts, setPosts] = useState(realPosts)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showComments, setShowComments] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    // Auto-play videos when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => observer.disconnect()
  }, [posts])

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            engagement: {
              ...post.engagement,
              likes: post.isLiked 
                ? post.engagement.likes - 1 
                : post.engagement.likes + 1
            }
          }
        : post
    ))
  }

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isBookmarked: !post.isBookmarked,
            engagement: {
              ...post.engagement,
              bookmarks: post.isBookmarked 
                ? post.engagement.bookmarks - 1 
                : post.engagement.bookmarks + 1
            }
          }
        : post
    ))
  }

  const handleShare = (postId) => {
    // Implement share functionality
    navigator.share?.({
      title: 'Check out this post on Flourish',
      url: `https://flourish.app/post/${postId}`
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    videoRefs.current.forEach(video => {
      if (video) {
        isPlaying ? video.pause() : video.play()
      }
    })
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = !isMuted
      }
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Flourish
            </h1>
            <Sparkles className="w-5 h-5 text-pink-500" />
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="p-4 border-b border-border">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 text-center">
              <div className={`relative w-16 h-16 rounded-full p-0.5 ${
                story.hasStory && !story.viewed 
                  ? 'bg-gradient-to-tr from-pink-500 to-purple-600' 
                  : story.hasStory && story.viewed
                  ? 'bg-gray-300 dark:bg-gray-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                <img
                  src={story.avatar}
                  alt={story.user}
                  className="w-full h-full rounded-full object-cover bg-background p-0.5"
                />
                {story.isOwn && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <p className="text-xs mt-1 truncate w-16">{story.user}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="pb-24">
        {posts.map((post, index) => (
          <div key={post.id} className="border-b border-border">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <h3 className="font-semibold text-sm">{post.user.name}</h3>
                    {post.user.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{post.user.username}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                    {post.location && (
                      <>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{post.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm leading-relaxed">{post.content.text}</p>
            </div>

            {/* Post Media */}
            <div className="relative">
              {post.content.type === 'image' ? (
                <img
                  src={post.content.media}
                  alt="Post content"
                  className="w-full aspect-square object-cover"
                />
              ) : (
                <div className="relative w-full aspect-square bg-black">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={post.content.media}
                    className="w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-black/50 text-white hover:bg-black/70"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-black/50 text-white hover:bg-black/70"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                  {post.content.duration && (
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      {post.content.duration}
                    </div>
                  )}
                </div>
              )}
              
              {post.content.music && (
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                  <Music className="w-3 h-3" />
                  <span>{post.content.music}</span>
                </div>
              )}

              {post.trending && (
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  <span>Trending</span>
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`p-0 ${post.isLiked ? 'text-red-500' : ''}`}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0"
                    onClick={() => setShowComments(showComments === post.id ? null : post.id)}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0"
                    onClick={() => handleShare(post.id)}
                  >
                    <Share className="w-6 h-6" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-0 ${post.isBookmarked ? 'text-yellow-500' : ''}`}
                  onClick={() => handleBookmark(post.id)}
                >
                  <Bookmark className={`w-6 h-6 ${post.isBookmarked ? 'fill-current' : ''}`} />
                </Button>
              </div>

              {/* Engagement Stats */}
              <div className="space-y-1">
                <p className="font-semibold text-sm">
                  {formatNumber(post.engagement.likes)} likes
                </p>
                {post.engagement.comments > 0 && (
                  <p className="text-sm text-muted-foreground">
                    View all {formatNumber(post.engagement.comments)} comments
                  </p>
                )}
              </div>

              {/* Comments Section */}
              {showComments === post.id && (
                <div className="mt-4 space-y-3 border-t border-border pt-4">
                  <div className="flex space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full bg-transparent border-none outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialFeedDashboard

