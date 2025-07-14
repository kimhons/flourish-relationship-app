import React, { useState } from 'react'
import { 
  Search, 
  TrendingUp, 
  MapPin, 
  Hash, 
  Users, 
  Heart, 
  MessageCircle, 
  Play,
  Filter,
  Grid3X3,
  List,
  Clock,
  Star,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  realTrendingHashtags, 
  realTrendingPlaces, 
  realSuggestedPeople, 
  realPosts,
  formatNumber 
} from '../data/realData'

const ExploreFeed = ({ user, darkMode }) => {
  const [activeTab, setActiveTab] = useState('trending') // 'trending', 'hashtags', 'places', 'people'
  const [viewMode, setViewMode] = useState('grid') // 'grid', 'list'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', icon: Grid3X3 },
    { id: 'dating', label: 'Dating', icon: Heart },
    { id: 'food', label: 'Food', icon: '🍕' },
    { id: 'travel', label: 'Travel', icon: '✈️' },
    { id: 'lifestyle', label: 'Lifestyle', icon: Star },
    { id: 'fitness', label: 'Fitness', icon: Zap },
    { id: 'art', label: 'Art', icon: '🎨' }
  ]

  const tabs = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'hashtags', label: 'Hashtags', icon: Hash },
    { id: 'places', label: 'Places', icon: MapPin },
    { id: 'people', label: 'People', icon: Users }
  ]

  const filteredHashtags = selectedCategory === 'all' 
    ? realTrendingHashtags 
    : realTrendingHashtags.filter(hashtag => hashtag.category === selectedCategory)

  const filteredPosts = realPosts.filter(post => 
    searchQuery === '' || 
    post.content.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleFollow = (userId) => {
    // Implement follow functionality
    console.log('Following user:', userId)
  }

  const renderTrendingContent = () => (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className={`flex-shrink-0 ${
              selectedCategory === category.id 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {typeof category.icon === 'string' ? (
              <span className="mr-1">{category.icon}</span>
            ) : (
              <category.icon className="w-4 h-4 mr-1" />
            )}
            {category.label}
          </Button>
        ))}
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Trending Posts</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Posts Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-3 gap-1">
          {filteredPosts.map((post) => (
            <div key={post.id} className="relative aspect-square">
              <img
                src={post.content.media}
                alt="Post"
                className="w-full h-full object-cover rounded"
              />
              {post.content.type === 'video' && (
                <div className="absolute top-2 right-2">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <div className="flex items-center space-x-2 text-white text-xs">
                  <Heart className="w-3 h-3" />
                  <span>{formatNumber(post.engagement.likes)}</span>
                  <MessageCircle className="w-3 h-3" />
                  <span>{formatNumber(post.engagement.comments)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="flex space-x-3 p-3 bg-card rounded-lg border border-border">
              <img
                src={post.content.media}
                alt="Post"
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-sm">{post.user.name}</span>
                  {post.user.verified && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {post.content.text}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{formatNumber(post.engagement.likes)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{formatNumber(post.engagement.comments)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderHashtagsContent = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {filteredHashtags.map((hashtag) => (
          <div key={hashtag.tag} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Hash className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{hashtag.tag}</h3>
                <p className="text-sm text-muted-foreground">{hashtag.posts} posts</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{hashtag.growth}</span>
              </div>
              <p className="text-xs text-muted-foreground capitalize">{hashtag.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderPlacesContent = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {realTrendingPlaces.map((place) => (
          <div key={place.id} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border">
            <img
              src={place.image}
              alt={place.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{place.name}</h3>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                <MapPin className="w-3 h-3" />
                <span>{place.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{place.posts} posts</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{place.rating}</span>
                </div>
              </div>
              <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full mt-1">
                {place.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderPeopleContent = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {realSuggestedPeople.map((person) => (
          <div key={person.id} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="font-semibold">{person.name}</h3>
                  {person.verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{person.username}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{person.bio}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-muted-foreground">{person.followers} followers</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{person.mutualConnections} mutual</span>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              onClick={() => handleFollow(person.id)}
            >
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'trending':
        return renderTrendingContent()
      case 'hashtags':
        return renderHashtagsContent()
      case 'places':
        return renderPlacesContent()
      case 'people':
        return renderPeopleContent()
      default:
        return renderTrendingContent()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Explore</h1>
            <Button variant="ghost" size="sm">
              <Filter className="w-5 h-5" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts, people, places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                className={`flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-background shadow-sm' 
                    : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-4 h-4 mr-1" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24">
        {renderContent()}
      </div>
    </div>
  )
}

export default ExploreFeed

