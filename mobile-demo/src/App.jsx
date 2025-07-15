import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  User, 
  Settings, 
  Search,
  Bell,
  Camera,
  Phone,
  Video,
  MoreHorizontal,
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Coffee,
  Music,
  Book,
  Gamepad2,
  Sparkles,
  Zap,
  ChevronRight,
  Play,
  Pause,
  Volume2
} from 'lucide-react'
import './App.css'

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('splash')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [batteryLevel] = useState(87)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding')
      }, 8000) // Increased from 5000 to 8000ms (8 seconds)
      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: false 
    })
  }

  const StatusBar = () => (
    <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium">
      <div className="flex items-center space-x-1">
        <span>{formatTime(currentTime)}</span>
      </div>
      <div className="flex items-center space-x-1">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        </div>
        <span className="text-xs">{batteryLevel}%</span>
        <div className="w-6 h-3 border border-white rounded-sm relative">
          <div 
            className="h-full bg-white rounded-sm transition-all duration-300"
            style={{ width: `${batteryLevel}%` }}
          ></div>
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-r"></div>
        </div>
      </div>
    </div>
  )

  const SplashScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 3.5, ease: "easeOut" }} // Increased from 2.5 to 3.5 seconds
        className="mb-8"
      >
        <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1">
              Flourish
            </div>
            <Heart className="w-8 h-8 text-pink-500 mx-auto" fill="currentColor" />
          </div>
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.5 }} // Increased delay and duration
        className="text-4xl font-bold text-white mb-4"
      >
        Flourish
      </motion.h1>
      
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.0, duration: 1.5 }} // Increased delay and duration
        className="text-white/80 text-lg text-center px-8"
      >
        AI-Powered Love & Growth
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 4.5, duration: 1.0 }} // Increased delay
        className="mt-12"
      >
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </motion.div>
    </motion.div>
  )

  const OnboardingScreen = () => {
    const [step, setStep] = useState(0)
    
    const onboardingSteps = [
      {
        title: "Find Your Perfect Match",
        subtitle: "AI analyzes 50+ compatibility factors",
        icon: <Search className="w-16 h-16 text-pink-500" />,
        color: "from-pink-500 to-rose-400"
      },
      {
        title: "Dr. Love AI Coach",
        subtitle: "24/7 relationship guidance & support",
        icon: <Sparkles className="w-16 h-16 text-purple-500" />,
        color: "from-purple-500 to-indigo-400"
      },
      {
        title: "Interactive Games",
        subtitle: "Deepen connection through play",
        icon: <Gamepad2 className="w-16 h-16 text-blue-500" />,
        color: "from-blue-500 to-cyan-400"
      }
    ]

    useEffect(() => {
      const timer = setInterval(() => {
        setStep((prev) => (prev + 1) % onboardingSteps.length)
      }, 10000) // Increased from 6000 to 10000ms (10 seconds)
      return () => clearInterval(timer)
    }, [])

    return (
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        className="h-full flex flex-col"
      >
        <div className={`flex-1 bg-gradient-to-br ${onboardingSteps[step].color} flex flex-col items-center justify-center px-8`}>
          <motion.div
            key={step}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }} // Increased from 0.8 to 1.2 seconds
            className="text-center"
          >
            <div className="mb-8">
              {onboardingSteps[step].icon}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {onboardingSteps[step].title}
            </h2>
            <p className="text-white/80 text-lg">
              {onboardingSteps[step].subtitle}
            </p>
          </motion.div>

          <div className="flex space-x-2 mt-12">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === step ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 bg-white">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCurrentScreen('home')}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg"
          >
            Start Your Journey
          </motion.button>
          
          <button
            onClick={() => setCurrentScreen('home')}
            className="w-full text-gray-500 py-3 text-center mt-2"
          >
            Skip for now
          </button>
        </div>
      </motion.div>
    )
  }

  const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState('discover')

    const matches = [
      {
        id: 1,
        name: "Emma",
        age: 28,
        distance: "2 miles away",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        compatibility: 94,
        interests: ["Coffee", "Books", "Travel"],
        bio: "Adventure seeker with a love for good coffee and great conversations ☕✨"
      },
      {
        id: 2,
        name: "Sophie",
        age: 26,
        distance: "1 mile away",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
        compatibility: 89,
        interests: ["Music", "Art", "Yoga"],
        bio: "Artist by day, music lover by night. Looking for someone to share life's beautiful moments 🎨🎵"
      }
    ]

    const [currentMatch, setCurrentMatch] = useState(0)

    const MatchCard = ({ match, index }) => (
      <motion.div
        key={match.id}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 100) {
            // Swipe right - like
            setCurrentMatch((prev) => (prev + 1) % matches.length)
          } else if (info.offset.x < -100) {
            // Swipe left - pass
            setCurrentMatch((prev) => (prev + 1) % matches.length)
          }
        }}
        className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ zIndex: matches.length - index }}
      >
        <div className="relative h-2/3">
          <img
            src={match.image}
            alt={match.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {match.compatibility}% Match
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">{match.name}, {match.age}</h3>
            <div className="flex items-center text-white/80 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{match.distance}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 h-1/3 flex flex-col justify-between">
          <p className="text-gray-600 text-sm leading-relaxed">{match.bio}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {match.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    )

    const DiscoverTab = () => (
      <div className="flex-1 relative bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Flourish
            </h1>
          </div>
          <div className="flex space-x-3">
            <button className="p-2 bg-white rounded-full shadow-md">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <AnimatePresence>
            {matches.map((match, index) => (
              index >= currentMatch && index < currentMatch + 2 && (
                <MatchCard key={match.id} match={match} index={index - currentMatch} />
              )
            ))}
          </AnimatePresence>
        </div>

        <div className="p-6 flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentMatch((prev) => (prev + 1) % matches.length)}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <span className="text-2xl">❌</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentMatch((prev) => (prev + 1) % matches.length)}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
          </motion.button>
        </div>
      </div>
    )

    const MessagesTab = () => {
      const conversations = [
        {
          id: 1,
          name: "Emma",
          lastMessage: "That sounds amazing! When are you free? 😊",
          time: "2m",
          unread: 2,
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
          online: true
        },
        {
          id: 2,
          name: "Dr. Love AI",
          lastMessage: "I have some great conversation starters for your date tonight!",
          time: "5m",
          unread: 1,
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          online: false,
          isAI: true
        },
        {
          id: 3,
          name: "Sophie",
          lastMessage: "The art gallery was incredible! Thanks for the recommendation",
          time: "1h",
          unread: 0,
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
          online: false
        }
      ]

      return (
        <div className="flex-1 bg-white">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" fill="currentColor" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Messages
              </h1>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <motion.div
                key={conversation.id}
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="p-4 border-b border-gray-50 flex items-center space-x-3"
              >
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                  {conversation.isAI && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 border-2 border-white rounded-full flex items-center justify-center">
                      <Sparkles className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mt-1">
                    {conversation.lastMessage}
                  </p>
                </div>
                
                {conversation.unread > 0 && (
                  <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {conversation.unread}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )
    }

    const CoachTab = () => (
      <div className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="p-4 border-b border-purple-100 bg-white/50 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md flex items-center justify-center">
              <Heart className="w-3 h-3 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dr. Love AI Coach
              </h1>
              <p className="text-purple-600 text-sm">Your personal relationship guide</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Daily Insight</h3>
                <p className="text-xs text-gray-500">Personalized for you</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Great relationships are built on small, consistent actions. Today, try asking your matches about their dreams and aspirations. This creates deeper emotional connection."
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Conversation Starters</h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {[
                "What's the most adventurous thing you've ever done?",
                "If you could have dinner with anyone, who would it be?",
                "What's your favorite way to spend a Sunday morning?"
              ].map((starter, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-purple-50 rounded-xl cursor-pointer"
                >
                  <p className="text-sm text-gray-700">{starter}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Relationship Games</h3>
              <Play className="w-5 h-5 text-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Empathy Engine", icon: "💝", players: "2 players" },
                { name: "Love Language Quiz", icon: "💬", players: "Solo" },
                { name: "Future Dreams", icon: "🌟", players: "2 players" },
                { name: "Memory Lane", icon: "📸", players: "2 players" }
              ].map((game, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl cursor-pointer text-center"
                >
                  <div className="text-2xl mb-2">{game.icon}</div>
                  <h4 className="font-medium text-gray-800 text-sm">{game.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{game.players}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )

    const ProfileTab = () => (
      <div className="flex-1 bg-gray-50">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-16 px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Alex Johnson</h2>
            <p className="text-gray-600">28 • Software Engineer</p>
            <div className="flex items-center justify-center mt-2">
              <MapPin className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-gray-600 text-sm">San Francisco, CA</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">About Me</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate about technology and human connection. Love exploring new places, trying different cuisines, and having deep conversations about life, the universe, and everything in between.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Technology", "Travel", "Photography", "Cooking", "Hiking", "Music"].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Relationship Goals</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-pink-500 mr-2" />
                  <span className="text-sm text-gray-600">Looking for long-term relationship</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Want to have children someday</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-4 h-4 text-brown-500 mr-2" />
                  <span className="text-sm text-gray-600">Social drinker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    const tabs = [
      { id: 'discover', icon: Search, label: 'Discover', component: DiscoverTab },
      { id: 'messages', icon: MessageCircle, label: 'Messages', component: MessagesTab },
      { id: 'coach', icon: Sparkles, label: 'Coach', component: CoachTab },
      { id: 'profile', icon: User, label: 'Profile', component: ProfileTab }
    ]

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || DiscoverTab

    return (
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        className="h-full flex flex-col bg-white"
      >
        <ActiveComponent />
        
        <div className="bg-white border-t border-gray-100 px-4 py-2 safe-area-bottom">
          <div className="flex justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-sm mx-auto bg-black rounded-[3rem] p-2 shadow-2xl">
      <div className="bg-black rounded-[2.5rem] overflow-hidden h-[800px] relative">
        <StatusBar />
        
        <div className="h-full bg-white rounded-t-[2rem] mt-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {currentScreen === 'splash' && <SplashScreen key="splash" />}
            {currentScreen === 'onboarding' && <OnboardingScreen key="onboarding" />}
            {currentScreen === 'home' && <HomeScreen key="home" />}
          </AnimatePresence>
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}

export default App

