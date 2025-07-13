import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  Plus, 
  Heart, 
  Users, 
  Calendar, 
  Award, 
  Flame, 
  Star,
  Clock,
  MapPin,
  Video,
  Play,
  Gift,
  Crown,
  Sparkles,
  Coffee,
  Dumbbell,
  Camera,
  Music,
  Gamepad2,
  Book,
  Car,
  Plane,
  Home,
  Utensils
} from 'lucide-react'

const ChallengeSystem = ({ currentUser, onJoinChallenge, onCreateChallenge }) => {
  const [activeTab, setActiveTab] = useState('trending')
  const [challenges, setChallenges] = useState([])
  const [userChallenges, setUserChallenges] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Mock challenge data with dating-specific content
  const mockChallenges = [
    {
      id: 1,
      title: 'First Date Stories',
      description: 'Share your most memorable first date experience!',
      hashtag: '#FirstDateStories',
      category: 'dating',
      creator: { name: 'DateNight', avatar: '/api/placeholder/40/40', verified: true },
      participants: 12847,
      videos: 156,
      trending: true,
      prize: 'Feature on our main page',
      deadline: '2025-01-24',
      duration: 7,
      difficulty: 'Easy',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-pink-500',
      examples: [
        { title: 'Coffee Shop Mix-up', views: '2.3M', thumbnail: '/api/placeholder/200/300' },
        { title: 'Surprise Picnic', views: '1.8M', thumbnail: '/api/placeholder/200/300' }
      ]
    },
    {
      id: 2,
      title: 'Cooking Date Challenge',
      description: 'Cook your favorite dish together and show us the fun!',
      hashtag: '#CookingDateChallenge',
      category: 'activity',
      creator: { name: 'ChefLove', avatar: '/api/placeholder/40/40', verified: false },
      participants: 8934,
      videos: 234,
      trending: false,
      prize: '$500 restaurant gift card',
      deadline: '2025-01-31',
      duration: 14,
      difficulty: 'Medium',
      icon: <Utensils className="w-6 h-6" />,
      color: 'bg-orange-500',
      examples: [
        { title: 'Pasta Disaster', views: '980K', thumbnail: '/api/placeholder/200/300' },
        { title: 'Baking Success', views: '1.2M', thumbnail: '/api/placeholder/200/300' }
      ]
    },
    {
      id: 3,
      title: 'Adventure Date Ideas',
      description: 'Show us your most adventurous date activity!',
      hashtag: '#AdventureDateIdeas',
      category: 'outdoor',
      creator: { name: 'AdventureCouple', avatar: '/api/placeholder/40/40', verified: true },
      participants: 15623,
      videos: 189,
      trending: true,
      prize: 'Weekend getaway package',
      deadline: '2025-02-14',
      duration: 21,
      difficulty: 'Hard',
      icon: <Plane className="w-6 h-6" />,
      color: 'bg-blue-500',
      examples: [
        { title: 'Rock Climbing Date', views: '3.1M', thumbnail: '/api/placeholder/200/300' },
        { title: 'Hiking Adventure', views: '2.7M', thumbnail: '/api/placeholder/200/300' }
      ]
    },
    {
      id: 4,
      title: 'Relationship Goals',
      description: 'What makes your relationship special? Share your story!',
      hashtag: '#RelationshipGoals',
      category: 'couples',
      creator: { name: 'LoveStories', avatar: '/api/placeholder/40/40', verified: true },
      participants: 22156,
      videos: 312,
      trending: true,
      prize: 'Featured couple of the month',
      deadline: '2025-02-01',
      duration: 10,
      difficulty: 'Easy',
      icon: <Crown className="w-6 h-6" />,
      color: 'bg-purple-500',
      examples: [
        { title: '5 Years Together', views: '4.2M', thumbnail: '/api/placeholder/200/300' },
        { title: 'Long Distance Love', views: '3.8M', thumbnail: '/api/placeholder/200/300' }
      ]
    }
  ]

  useEffect(() => {
    setChallenges(mockChallenges)
  }, [])

  const tabs = [
    { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'dating', label: 'Dating', icon: <Heart className="w-4 h-4" /> },
    { id: 'activity', label: 'Activities', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'couples', label: 'Couples', icon: <Users className="w-4 h-4" /> },
    { id: 'yours', label: 'Your Challenges', icon: <Star className="w-4 h-4" /> }
  ]

  const getDaysLeft = (deadline) => {
    const today = new Date()
    const endDate = new Date(deadline)
    const diffTime = endDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const ChallengeCard = ({ challenge, showExamples = false }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4"
    >
      {/* Header */}
      <div className={`${challenge.color} p-4 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 opacity-20">
          {challenge.icon}
        </div>
        
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-full">
              {challenge.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{challenge.title}</h3>
              <p className="text-white/80 text-sm">by @{challenge.creator.name}</p>
            </div>
          </div>
          
          {challenge.trending && (
            <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-medium">Trending</span>
            </div>
          )}
        </div>

        <p className="text-white/90 text-sm mb-3">{challenge.description}</p>
        
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{challenge.participants.toLocaleString()} joined</span>
          </div>
          <div className="flex items-center space-x-1">
            <Video className="w-4 h-4" />
            <span>{challenge.videos} videos</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{getDaysLeft(challenge.deadline)} days left</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">Hashtag:</span>
            <span className="text-blue-600 font-medium">{challenge.hashtag}</span>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs text-white ${getDifficultyColor(challenge.difficulty)}`}>
            {challenge.difficulty}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Gift className="w-4 h-4 text-yellow-500" />
            <span className="font-medium text-sm">Prize:</span>
          </div>
          <p className="text-gray-700 text-sm">{challenge.prize}</p>
        </div>

        {showExamples && challenge.examples && (
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Popular Examples:</h4>
            <div className="grid grid-cols-2 gap-2">
              {challenge.examples.map((example, index) => (
                <div key={index} className="relative">
                  <img 
                    src={example.thumbnail} 
                    alt={example.title}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-1 left-1 text-white text-xs bg-black/50 px-1 rounded">
                    {example.views}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onJoinChallenge(challenge.id)}
          className={`w-full py-3 rounded-full font-bold text-white ${challenge.color} hover:opacity-90 transition-opacity`}
        >
          Join Challenge
        </motion.button>
      </div>
    </motion.div>
  )

  const CreateChallengeModal = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      hashtag: '',
      category: 'dating',
      duration: 7,
      difficulty: 'Easy',
      prize: '',
      rules: []
    })

    const categories = [
      { id: 'dating', label: 'Dating', icon: <Heart className="w-4 h-4" /> },
      { id: 'activity', label: 'Activities', icon: <Dumbbell className="w-4 h-4" /> },
      { id: 'couples', label: 'Couples', icon: <Users className="w-4 h-4" /> },
      { id: 'outdoor', label: 'Outdoor', icon: <Plane className="w-4 h-4" /> }
    ]

    const handleSubmit = (e) => {
      e.preventDefault()
      onCreateChallenge(formData)
      setShowCreateModal(false)
      setFormData({
        title: '',
        description: '',
        hashtag: '',
        category: 'dating',
        duration: 7,
        difficulty: 'Easy',
        prize: '',
        rules: []
      })
    }

    return (
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Create New Challenge</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Challenge Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g., Perfect Date Night Ideas"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      rows="3"
                      placeholder="Describe what participants should create..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Hashtag</label>
                    <input
                      type="text"
                      value={formData.hashtag}
                      onChange={(e) => setFormData({...formData, hashtag: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="#YourHashtag"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setFormData({...formData, category: category.id})}
                          className={`p-3 rounded-lg border-2 flex items-center space-x-2 ${
                            formData.category === category.id 
                              ? 'border-pink-500 bg-pink-50' 
                              : 'border-gray-300'
                          }`}
                        >
                          {category.icon}
                          <span className="text-sm">{category.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Duration (days)</label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value={7}>7 days</option>
                        <option value={14}>14 days</option>
                        <option value={21}>21 days</option>
                        <option value={30}>30 days</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Difficulty</label>
                      <select
                        value={formData.difficulty}
                        onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Prize (optional)</label>
                    <input
                      type="text"
                      value={formData.prize}
                      onChange={(e) => setFormData({...formData, prize: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="e.g., $100 gift card, Feature on main page"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg bg-pink-500 text-white font-bold hover:bg-pink-600"
                    >
                      Create Challenge
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  const filteredChallenges = challenges.filter(challenge => {
    if (activeTab === 'trending') return challenge.trending
    if (activeTab === 'yours') return challenge.creator.name === currentUser.name
    return challenge.category === activeTab
  })

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Challenges</h1>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCreateModal(true)}
          className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-pink-600"
        >
          <Plus className="w-5 h-5" />
          <span>Create Challenge</span>
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <motion.button
            key={tab.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-full font-medium whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Challenge List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredChallenges.map(challenge => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              showExamples={activeTab === 'trending'}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Create Challenge Modal */}
      <CreateChallengeModal />
    </div>
  )
}

export default ChallengeSystem