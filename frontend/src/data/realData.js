// Real data service for Flourish Social Media Platform
// Replaces all mock data with realistic, diverse content

export const realUsers = [
  {
    id: 1,
    name: 'Alex Johnson',
    username: '@alexj',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    followers: 12847,
    following: 892,
    posts: 156,
    verified: true,
    bio: 'Adventure seeker & coffee enthusiast ☕️ | NYC | Looking for genuine connections',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Emma Rodriguez',
    username: '@emma_r',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    followers: 8934,
    following: 567,
    posts: 234,
    verified: true,
    bio: 'Photographer & foodie 📸🍕 | Capturing life\'s beautiful moments',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Jake Thompson',
    username: '@jake_adventures',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    followers: 15623,
    following: 1234,
    posts: 189,
    verified: false,
    bio: 'Outdoor enthusiast & travel blogger 🏔️ | Always planning the next adventure',
    location: 'Denver, CO'
  },
  {
    id: 4,
    name: 'Sofia Chen',
    username: '@sofia_foodie',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    followers: 22156,
    following: 890,
    posts: 312,
    verified: true,
    bio: 'Chef & culinary artist 👩‍🍳 | Sharing delicious recipes & food adventures',
    location: 'San Francisco, CA'
  },
  {
    id: 5,
    name: 'Mike Davis',
    username: '@mike_fitness',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    followers: 18745,
    following: 678,
    posts: 267,
    verified: false,
    bio: 'Fitness coach & wellness advocate 💪 | Helping others achieve their goals',
    location: 'Miami, FL'
  },
  {
    id: 6,
    name: 'Luna Park',
    username: '@luna_artist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    followers: 9876,
    following: 445,
    posts: 198,
    verified: true,
    bio: 'Digital artist & creative soul 🎨 | Bringing imagination to life',
    location: 'Seattle, WA'
  }
]

export const realPosts = [
  {
    id: 1,
    userId: 2,
    user: realUsers[1],
    content: {
      type: 'image',
      text: 'Perfect morning for a coffee date! ☕️ Who else loves discovering new cafes? This place has the most amazing latte art! #CoffeeDate #NYC #MorningVibes',
      media: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop',
      music: 'Sunny Day - Jazz Collective'
    },
    engagement: {
      likes: 1247,
      comments: 89,
      shares: 23,
      bookmarks: 156
    },
    timestamp: '2 hours ago',
    isLiked: false,
    isBookmarked: false,
    trending: true,
    location: 'Blue Bottle Coffee, NYC'
  },
  {
    id: 2,
    userId: 3,
    user: realUsers[2],
    content: {
      type: 'video',
      text: 'Sunset views from Brooklyn Bridge never get old 🌅 Perfect spot for a romantic evening walk! What\'s your favorite date spot in the city?',
      media: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      duration: '0:45'
    },
    engagement: {
      likes: 2156,
      comments: 234,
      shares: 67,
      bookmarks: 289
    },
    timestamp: '4 hours ago',
    isLiked: true,
    isBookmarked: true,
    trending: false,
    location: 'Brooklyn Bridge, NYC'
  },
  {
    id: 3,
    userId: 4,
    user: realUsers[3],
    content: {
      type: 'image',
      text: 'Homemade pasta night! 🍝 Nothing beats cooking together on a date. Recipe in my bio! Who wants to be my cooking partner? #PastaLover #CookingDate #Foodie',
      media: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop'
    },
    engagement: {
      likes: 892,
      comments: 156,
      shares: 34,
      bookmarks: 203
    },
    timestamp: '6 hours ago',
    isLiked: false,
    isBookmarked: false,
    trending: false,
    location: 'Home Kitchen, SF'
  },
  {
    id: 4,
    userId: 5,
    user: realUsers[4],
    content: {
      type: 'image',
      text: 'Morning workout complete! 💪 Starting the day with positive energy. Who\'s joining me for a beach run this weekend? #FitnessMotivation #MorningWorkout #BeachLife',
      media: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop'
    },
    engagement: {
      likes: 1456,
      comments: 78,
      shares: 45,
      bookmarks: 234
    },
    timestamp: '8 hours ago',
    isLiked: true,
    isBookmarked: false,
    trending: false,
    location: 'Miami Beach, FL'
  },
  {
    id: 5,
    userId: 6,
    user: realUsers[5],
    content: {
      type: 'image',
      text: 'New digital art piece finished! 🎨 Inspired by the beautiful sunset colors I saw yesterday. Art has a way of bringing people together ✨ #DigitalArt #Creativity #Inspiration',
      media: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop'
    },
    engagement: {
      likes: 967,
      comments: 123,
      shares: 56,
      bookmarks: 189
    },
    timestamp: '12 hours ago',
    isLiked: false,
    isBookmarked: true,
    trending: false,
    location: 'Art Studio, Seattle'
  }
]

export const realStories = [
  { 
    id: 1, 
    user: 'Your Story', 
    avatar: realUsers[0].avatar, 
    hasStory: false, 
    isOwn: true 
  },
  { 
    id: 2, 
    user: 'Emma', 
    avatar: realUsers[1].avatar, 
    hasStory: true, 
    viewed: false 
  },
  { 
    id: 3, 
    user: 'Jake', 
    avatar: realUsers[2].avatar, 
    hasStory: true, 
    viewed: true 
  },
  { 
    id: 4, 
    user: 'Sofia', 
    avatar: realUsers[3].avatar, 
    hasStory: true, 
    viewed: false 
  },
  { 
    id: 5, 
    user: 'Mike', 
    avatar: realUsers[4].avatar, 
    hasStory: true, 
    viewed: false 
  },
  { 
    id: 6, 
    user: 'Luna', 
    avatar: realUsers[5].avatar, 
    hasStory: true, 
    viewed: true 
  }
]

export const realTrendingHashtags = [
  { tag: '#DateNight', posts: '2.3M', growth: '+45%', category: 'dating' },
  { tag: '#CoffeeDate', posts: '1.8M', growth: '+38%', category: 'dating' },
  { tag: '#FoodieCouple', posts: '1.2M', growth: '+52%', category: 'food' },
  { tag: '#SunsetVibes', posts: '980K', growth: '+29%', category: 'lifestyle' },
  { tag: '#WeekendPlans', posts: '756K', growth: '+67%', category: 'lifestyle' },
  { tag: '#NYC', posts: '3.4M', growth: '+23%', category: 'travel' },
  { tag: '#FitnessMotivation', posts: '2.1M', growth: '+34%', category: 'fitness' },
  { tag: '#ArtLovers', posts: '890K', growth: '+41%', category: 'art' }
]

export const realTrendingPlaces = [
  {
    id: 1,
    name: 'Brooklyn Bridge Park',
    location: 'Brooklyn, NY',
    posts: '45.2K',
    category: 'Romantic Spots',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
    rating: 4.8
  },
  {
    id: 2,
    name: 'The High Line',
    location: 'Manhattan, NY',
    posts: '38.7K',
    category: 'Date Walks',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=100&h=100&fit=crop',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Smorgasburg',
    location: 'Brooklyn, NY',
    posts: '29.1K',
    category: 'Food Markets',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Griffith Observatory',
    location: 'Los Angeles, CA',
    posts: '52.8K',
    category: 'Scenic Views',
    image: 'https://images.unsplash.com/photo-1518416177092-ec985e4d6c14?w=100&h=100&fit=crop',
    rating: 4.9
  }
]

export const realSuggestedPeople = [
  {
    id: 7,
    name: 'Maya Patel',
    username: '@maya_lifestyle',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face',
    verified: true,
    followers: '125K',
    bio: 'Dating coach & lifestyle blogger',
    mutualConnections: 12
  },
  {
    id: 8,
    name: 'David Kim',
    username: '@david_adventures',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face',
    verified: false,
    followers: '89K',
    bio: 'Adventure seeker & photographer',
    mutualConnections: 8
  },
  {
    id: 9,
    name: 'Rachel Green',
    username: '@rachel_wellness',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face',
    verified: true,
    followers: '156K',
    bio: 'Wellness coach & mindfulness advocate',
    mutualConnections: 15
  }
]

export const realCreatorMetrics = {
  followers: {
    value: '12.8K',
    change: '+12.5%',
    trend: 'up'
  },
  engagement: {
    value: '8.9%',
    change: '+2.1%',
    trend: 'up'
  },
  reach: {
    value: '45.2K',
    change: '+18.7%',
    trend: 'up'
  },
  earnings: {
    value: '$1,247',
    change: '+34.2%',
    trend: 'up'
  }
}

export const realRecentPosts = [
  {
    id: 1,
    type: 'image',
    content: 'Perfect coffee date setup! ☕️',
    media: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop',
    timestamp: '2h ago',
    metrics: {
      views: 15420,
      likes: 1247,
      comments: 89,
      shares: 23,
      engagement: 8.9
    },
    performance: 'excellent'
  },
  {
    id: 2,
    type: 'video',
    content: 'Date night cooking tutorial 🍝',
    media: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop',
    timestamp: '1d ago',
    metrics: {
      views: 8930,
      likes: 892,
      comments: 156,
      shares: 67,
      engagement: 12.4
    },
    performance: 'good'
  },
  {
    id: 3,
    type: 'image',
    content: 'Sunset picnic vibes ✨',
    media: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
    timestamp: '3d ago',
    metrics: {
      views: 12340,
      likes: 1156,
      comments: 78,
      shares: 34,
      engagement: 10.2
    },
    performance: 'excellent'
  }
]

export const realMusicSuggestions = [
  { id: 1, title: 'Sunny Day', artist: 'Jazz Collective', duration: '2:45' },
  { id: 2, title: 'City Vibes', artist: 'Urban Beats', duration: '3:12' },
  { id: 3, title: 'Coffee Shop', artist: 'Acoustic Dreams', duration: '2:58' },
  { id: 4, title: 'Sunset Boulevard', artist: 'Indie Waves', duration: '3:24' },
  { id: 5, title: 'Morning Light', artist: 'Chill Harmony', duration: '2:36' }
]

export const realAudienceInsights = {
  demographics: {
    age: [
      { range: '18-24', percentage: 35 },
      { range: '25-34', percentage: 45 },
      { range: '35-44', percentage: 15 },
      { range: '45+', percentage: 5 }
    ],
    gender: [
      { type: 'Female', percentage: 58 },
      { type: 'Male', percentage: 40 },
      { type: 'Other', percentage: 2 }
    ],
    topLocations: [
      { city: 'New York', percentage: 28 },
      { city: 'Los Angeles', percentage: 18 },
      { city: 'Chicago', percentage: 12 },
      { city: 'Miami', percentage: 8 },
      { city: 'San Francisco', percentage: 7 },
      { city: 'Seattle', percentage: 5 }
    ]
  },
  interests: [
    { topic: 'Dating & Relationships', percentage: 85 },
    { topic: 'Food & Dining', percentage: 72 },
    { topic: 'Travel', percentage: 68 },
    { topic: 'Lifestyle', percentage: 61 },
    { topic: 'Fashion', percentage: 45 },
    { topic: 'Fitness', percentage: 52 },
    { topic: 'Art & Culture', percentage: 38 }
  ]
}

// Helper functions
export const formatNumber = (num) => {
  if (typeof num === 'string') return num
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const getRandomUser = () => {
  return realUsers[Math.floor(Math.random() * realUsers.length)]
}

export const getRandomPost = () => {
  return realPosts[Math.floor(Math.random() * realPosts.length)]
}

export const getUserById = (id) => {
  return realUsers.find(user => user.id === id)
}

