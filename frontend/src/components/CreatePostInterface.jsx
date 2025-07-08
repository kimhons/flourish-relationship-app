import React, { useState, useRef } from 'react'
import { 
  Camera, 
  Video, 
  Image as ImageIcon, 
  Music, 
  MapPin, 
  Hash, 
  Smile, 
  Type, 
  Palette, 
  Sparkles,
  X,
  ArrowLeft,
  Send,
  Plus,
  Settings,
  Clock,
  Users,
  Globe,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { realMusicSuggestions, realTrendingHashtags } from '../data/realData'

const CreatePostInterface = ({ user, darkMode }) => {
  const [postType, setPostType] = useState('image') // 'image', 'video', 'text'
  const [content, setContent] = useState('')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [selectedMusic, setSelectedMusic] = useState(null)
  const [location, setLocation] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [privacy, setPrivacy] = useState('public') // 'public', 'friends', 'private'
  const [showMusicPicker, setShowMusicPicker] = useState(false)
  const [showHashtagSuggestions, setShowHashtagSuggestions] = useState(false)
  const [showLocationPicker, setShowLocationPicker] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const [scheduledTime, setScheduledTime] = useState('')
  
  const fileInputRef = useRef(null)
  const videoInputRef = useRef(null)

  const postTemplates = [
    {
      id: 1,
      name: 'Coffee Date',
      emoji: '☕️',
      template: 'Perfect morning for a coffee date! ☕️ Who else loves discovering new cafes?',
      hashtags: ['#CoffeeDate', '#MorningVibes', '#NYC']
    },
    {
      id: 2,
      name: 'Sunset Vibes',
      emoji: '🌅',
      template: 'Sunset views never get old 🌅 Perfect spot for a romantic evening!',
      hashtags: ['#SunsetVibes', '#RomanticEvening', '#DateNight']
    },
    {
      id: 3,
      name: 'Foodie Adventure',
      emoji: '🍝',
      template: 'Trying out this amazing new restaurant! 🍝 Who wants to join me next time?',
      hashtags: ['#FoodieAdventure', '#DateNight', '#NewRestaurant']
    },
    {
      id: 4,
      name: 'Workout Motivation',
      emoji: '💪',
      template: 'Morning workout complete! 💪 Starting the day with positive energy.',
      hashtags: ['#FitnessMotivation', '#MorningWorkout', '#HealthyLifestyle']
    }
  ]

  const privacyOptions = [
    { id: 'public', label: 'Public', icon: Globe, description: 'Anyone can see this post' },
    { id: 'friends', label: 'Friends', icon: Users, description: 'Only your connections can see this' },
    { id: 'private', label: 'Private', icon: Lock, description: 'Only you can see this post' }
  ]

  const handleMediaUpload = (type) => {
    if (type === 'image') {
      fileInputRef.current?.click()
    } else if (type === 'video') {
      videoInputRef.current?.click()
    }
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedMedia({
          type: file.type.startsWith('video/') ? 'video' : 'image',
          url: e.target.result,
          file: file
        })
        setPostType(file.type.startsWith('video/') ? 'video' : 'image')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTemplateSelect = (template) => {
    setContent(template.template)
    setHashtags(template.hashtags)
  }

  const handleHashtagAdd = (hashtag) => {
    if (!hashtags.includes(hashtag)) {
      setHashtags([...hashtags, hashtag])
    }
    setShowHashtagSuggestions(false)
  }

  const handleHashtagRemove = (hashtagToRemove) => {
    setHashtags(hashtags.filter(hashtag => hashtag !== hashtagToRemove))
  }

  const handlePost = () => {
    const newPost = {
      id: Date.now(),
      user: user,
      content: {
        type: postType,
        text: content,
        media: selectedMedia?.url,
        music: selectedMusic?.title
      },
      engagement: {
        likes: 0,
        comments: 0,
        shares: 0,
        bookmarks: 0
      },
      timestamp: isScheduled ? scheduledTime : 'now',
      isLiked: false,
      isBookmarked: false,
      trending: false,
      location: location,
      hashtags: hashtags,
      privacy: privacy
    }

    // Here you would typically send the post to your backend
    console.log('New post created:', newPost)
    
    // Reset form
    setContent('')
    setSelectedMedia(null)
    setSelectedMusic(null)
    setLocation('')
    setHashtags([])
    setPrivacy('public')
    setIsScheduled(false)
    setScheduledTime('')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">Create Post</h1>
          </div>
          <Button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            onClick={handlePost}
            disabled={!content.trim() && !selectedMedia}
          >
            <Send className="w-4 h-4 mr-2" />
            {isScheduled ? 'Schedule' : 'Post'}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <div className="flex items-center space-x-2">
              <select 
                value={privacy} 
                onChange={(e) => setPrivacy(e.target.value)}
                className="text-sm bg-transparent border border-border rounded px-2 py-1"
              >
                {privacyOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Post Templates */}
        <div className="space-y-3">
          <h3 className="font-medium text-sm">Quick Templates</h3>
          <div className="grid grid-cols-2 gap-3">
            {postTemplates.map((template) => (
              <Button
                key={template.id}
                variant="outline"
                className="h-auto p-3 flex flex-col items-start space-y-1 text-left"
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{template.emoji}</span>
                  <span className="font-medium text-sm">{template.name}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {template.template}
                </p>
              </Button>
            ))}
          </div>
        </div>

        {/* Content Input */}
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind? Share your dating adventures, thoughts, or ask for advice..."
            className="w-full h-32 p-4 bg-muted rounded-lg border border-border resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
            maxLength={2200}
          />
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{content.length}/2200</span>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Smile className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Type className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Media Preview */}
        {selectedMedia && (
          <div className="relative">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt="Selected media"
                className="w-full aspect-square object-cover rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="w-full aspect-square object-cover rounded-lg"
                controls
              />
            )}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Media Upload Options */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => handleMediaUpload('image')}
          >
            <ImageIcon className="w-6 h-6 text-green-500" />
            <span className="text-sm">Photo</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => handleMediaUpload('video')}
          >
            <Video className="w-6 h-6 text-red-500" />
            <span className="text-sm">Video</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto p-4 flex flex-col items-center space-y-2"
            onClick={() => setShowMusicPicker(true)}
          >
            <Music className="w-6 h-6 text-purple-500" />
            <span className="text-sm">Music</span>
          </Button>
        </div>

        {/* Selected Music */}
        {selectedMusic && (
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center space-x-3">
              <Music className="w-5 h-5 text-purple-500" />
              <div>
                <p className="font-medium text-sm">{selectedMusic.title}</p>
                <p className="text-xs text-muted-foreground">{selectedMusic.artist}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedMusic(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Location */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setShowLocationPicker(true)}
          >
            <MapPin className="w-4 h-4 mr-2" />
            {location || 'Add location'}
          </Button>
          {location && (
            <div className="flex items-center justify-between p-2 bg-muted rounded">
              <span className="text-sm">{location}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocation('')}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          )}
        </div>

        {/* Hashtags */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => setShowHashtagSuggestions(true)}
          >
            <Hash className="w-4 h-4 mr-2" />
            Add hashtags
          </Button>
          
          {hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hashtags.map((hashtag, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-sm"
                >
                  <span>{hashtag}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto"
                    onClick={() => handleHashtagRemove(hashtag)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Schedule Post */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Schedule post</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsScheduled(!isScheduled)}
              className={isScheduled ? 'text-pink-500' : ''}
            >
              {isScheduled ? 'On' : 'Off'}
            </Button>
          </div>
          
          {isScheduled && (
            <input
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="w-full p-3 bg-muted rounded-lg border border-border"
            />
          )}
        </div>

        {/* Hidden file inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <input
          ref={videoInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Music Picker Modal */}
      {showMusicPicker && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-background rounded-t-xl p-4 space-y-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Choose Music</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMusicPicker(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="space-y-2">
              {realMusicSuggestions.map((music) => (
                <Button
                  key={music.id}
                  variant="ghost"
                  className="w-full justify-start p-3"
                  onClick={() => {
                    setSelectedMusic(music)
                    setShowMusicPicker(false)
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-purple-500" />
                    <div className="text-left">
                      <p className="font-medium text-sm">{music.title}</p>
                      <p className="text-xs text-muted-foreground">{music.artist} • {music.duration}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hashtag Suggestions Modal */}
      {showHashtagSuggestions && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-background rounded-t-xl p-4 space-y-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Trending Hashtags</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHashtagSuggestions(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {realTrendingHashtags.map((hashtag) => (
                <Button
                  key={hashtag.tag}
                  variant="outline"
                  className="justify-start p-3"
                  onClick={() => handleHashtagAdd(hashtag.tag)}
                >
                  <div className="text-left">
                    <p className="font-medium text-sm">{hashtag.tag}</p>
                    <p className="text-xs text-muted-foreground">{hashtag.posts} posts</p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreatePostInterface

