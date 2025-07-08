import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  MoreHorizontal,
  Plus,
  Search,
  Bell,
  User,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Video,
  Image,
  Mic,
  MapPin,
  Clock,
  Eye,
  TrendingUp,
  Flame,
  Star,
  Users,
  Music,
  Filter
} from 'lucide-react';

const SocialFeedDashboard = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const [likedPosts, setLikedPosts] = useState(new Set());

  // Sample social feed data
  const feedPosts = [
    {
      id: 1,
      type: 'reel',
      user: {
        name: 'Sarah Johnson',
        username: '@sarah_j',
        avatar: '/api/placeholder/40/40',
        verified: true,
        age: 28,
        location: 'New York, NY'
      },
      content: {
        video: '/api/placeholder/300/400',
        thumbnail: '/api/placeholder/300/400',
        caption: 'Sunday morning coffee vibes ☕️ Who wants to join me for brunch? #SundayVibes #CoffeeDate #NYC',
        music: 'Chill Vibes - Lo-Fi Beats',
        duration: '0:15'
      },
      stats: {
        likes: 1247,
        comments: 89,
        shares: 23,
        views: 15420
      },
      timestamp: '2 hours ago',
      tags: ['#SundayVibes', '#CoffeeDate', '#NYC']
    },
    {
      id: 2,
      type: 'post',
      user: {
        name: 'Michael Chen',
        username: '@mike_adventures',
        avatar: '/api/placeholder/40/40',
        verified: false,
        age: 32,
        location: 'San Francisco, CA'
      },
      content: {
        images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
        caption: 'Hiking the Golden Gate trails today! 🥾 Nature therapy is the best therapy. Looking for a hiking buddy for next weekend!',
        location: 'Golden Gate Park'
      },
      stats: {
        likes: 892,
        comments: 45,
        shares: 12,
        views: 8930
      },
      timestamp: '4 hours ago',
      tags: ['#Hiking', '#Nature', '#GoldenGate']
    },
    {
      id: 3,
      type: 'reel',
      user: {
        name: 'Emma Rodriguez',
        username: '@emma_creates',
        avatar: '/api/placeholder/40/40',
        verified: true,
        age: 26,
        location: 'Los Angeles, CA'
      },
      content: {
        video: '/api/placeholder/300/400',
        thumbnail: '/api/placeholder/300/400',
        caption: 'Quick pasta recipe for date night! 🍝 Who wants to cook together? #Cooking #DateNight #Pasta',
        music: 'Italian Romance - Classical',
        duration: '0:30'
      },
      stats: {
        likes: 2156,
        comments: 134,
        shares: 67,
        views: 28450
      },
      timestamp: '6 hours ago',
      tags: ['#Cooking', '#DateNight', '#Pasta']
    }
  ];

  const stories = [
    { id: 1, user: 'You', avatar: '/api/placeholder/60/60', hasStory: false, isAdd: true },
    { id: 2, user: 'Alex', avatar: '/api/placeholder/60/60', hasStory: true, viewed: false },
    { id: 3, user: 'Jessica', avatar: '/api/placeholder/60/60', hasStory: true, viewed: true },
    { id: 4, user: 'David', avatar: '/api/placeholder/60/60', hasStory: true, viewed: false },
    { id: 5, user: 'Maria', avatar: '/api/placeholder/60/60', hasStory: true, viewed: true },
    { id: 6, user: 'Ryan', avatar: '/api/placeholder/60/60', hasStory: true, viewed: false }
  ];

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const togglePlay = (postId) => {
    setIsPlaying(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleMute = (postId) => {
    setIsMuted(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const renderPost = (post) => (
    <div key={post.id} className="bg-white rounded-lg shadow-sm border mb-6">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={post.user.avatar} 
              alt={post.user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {post.user.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <Star className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{post.user.age}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{post.user.location}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Post Content */}
      <div className="relative">
        {post.type === 'reel' ? (
          <div className="relative bg-black">
            <img 
              src={post.content.thumbnail} 
              alt="Video thumbnail"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => togglePlay(post.id)}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all"
              >
                {isPlaying[post.id] ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white">
                  <Music className="w-4 h-4" />
                  <span className="text-sm">{post.content.music}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">{post.content.duration}</span>
                  <button onClick={() => toggleMute(post.id)}>
                    {isMuted[post.id] ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-1">
            {post.content.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Post image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => toggleLike(post.id)}
              className={`flex items-center space-x-1 ${
                likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-700'
              } hover:text-red-500 transition-colors`}
            >
              <Heart className={`w-6 h-6 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
              <span className="font-medium">{post.stats.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">{post.stats.comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors">
              <Share className="w-6 h-6" />
              <span className="font-medium">{post.stats.shares}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {post.type === 'reel' && (
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Eye className="w-4 h-4" />
                <span>{post.stats.views.toLocaleString()}</span>
              </div>
            )}
            <button className="text-gray-700 hover:text-purple-500 transition-colors">
              <Bookmark className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Caption */}
        <div className="mb-3">
          <p className="text-gray-900">
            <span className="font-semibold">{post.user.username}</span>{' '}
            {post.content.caption}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-blue-500 text-sm hover:underline cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Comments */}
        <button className="text-gray-500 text-sm hover:text-gray-700">
          View all {post.stats.comments} comments
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Flourish
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell className="w-6 h-6 text-gray-700" />
                <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 text-center">
                <div className={`relative ${
                  story.isAdd ? 'bg-gray-200' : story.viewed ? 'bg-gray-300' : 'bg-gradient-to-tr from-pink-500 to-purple-600'
                } p-0.5 rounded-full`}>
                  <div className="bg-white p-0.5 rounded-full">
                    <img 
                      src={story.avatar} 
                      alt={story.user}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  {story.isAdd && (
                    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-700 mt-1 truncate w-16">
                  {story.user}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto">
          <div className="flex">
            {[
              { id: 'feed', label: 'For You', icon: <Flame className="w-5 h-5" /> },
              { id: 'following', label: 'Following', icon: <Users className="w-5 h-5" /> },
              { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="max-w-md mx-auto px-4 py-4">
        {feedPosts.map(renderPost)}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-6">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around py-2">
            <button className="flex flex-col items-center py-2 px-4 text-pink-600">
              <Heart className="w-6 h-6" />
              <span className="text-xs mt-1">Feed</span>
            </button>
            <button className="flex flex-col items-center py-2 px-4 text-gray-500">
              <Search className="w-6 h-6" />
              <span className="text-xs mt-1">Discover</span>
            </button>
            <button className="flex flex-col items-center py-2 px-4 text-gray-500">
              <Video className="w-6 h-6" />
              <span className="text-xs mt-1">Create</span>
            </button>
            <button className="flex flex-col items-center py-2 px-4 text-gray-500">
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs mt-1">Messages</span>
            </button>
            <button className="flex flex-col items-center py-2 px-4 text-gray-500">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeedDashboard;

