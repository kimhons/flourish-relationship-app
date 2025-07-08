import React, { useState, useRef, useEffect } from 'react'
import { 
  MessageCircle, 
  X, 
  Send, 
  Mic, 
  MicOff,
  Volume2,
  VolumeX,
  Settings,
  Heart,
  User,
  Search,
  TrendingUp,
  Lightbulb,
  Camera,
  Image,
  MoreHorizontal,
  Minimize2,
  Maximize2,
  Bot,
  Sparkles,
  Zap,
  Star,
  Coffee,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const DrFlourishInterface = ({ user, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState('chat')
  const [message, setMessage] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm Dr. Flourish, your AI dating assistant! 💕 I'm here to help you create amazing content, find meaningful connections, and navigate your dating journey. How can I help you today?",
      timestamp: new Date(),
      suggestions: [
        "Help me write a better bio",
        "Suggest conversation starters",
        "Analyze my profile",
        "Plan a perfect date"
      ]
    }
  ])

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const tabs = [
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'matches', label: 'Matches', icon: Heart },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'tips', label: 'Tips', icon: Lightbulb }
  ]

  const quickActions = [
    { id: 'bio', label: 'Improve Bio', icon: User, color: 'text-blue-500' },
    { id: 'photos', label: 'Photo Tips', icon: Camera, color: 'text-green-500' },
    { id: 'conversation', label: 'Conversation', icon: MessageCircle, color: 'text-purple-500' },
    { id: 'date', label: 'Date Ideas', icon: Coffee, color: 'text-orange-500' }
  ]

  const aiPersonalities = [
    { id: 'friendly', name: 'Friendly', emoji: '😊', description: 'Warm and encouraging' },
    { id: 'expert', name: 'Expert', emoji: '🎓', description: 'Professional advice' },
    { id: 'casual', name: 'Casual', emoji: '😎', description: 'Relaxed and fun' },
    { id: 'motivational', name: 'Coach', emoji: '💪', description: 'Motivational support' }
  ]

  const [selectedPersonality, setSelectedPersonality] = useState('friendly')

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message)
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const generateAIResponse = (userMessage) => {
    const responses = {
      bio: {
        content: "I'd love to help you improve your bio! Here are some tips: 1) Show your personality with specific interests, 2) Mention what you're looking for, 3) Add a conversation starter. Would you like me to review your current bio?",
        suggestions: ["Review my current bio", "Write a new bio", "See bio examples"]
      },
      photos: {
        content: "Great photos are key to making a good first impression! I recommend: 1) A clear, smiling headshot as your main photo, 2) Full body shots showing your lifestyle, 3) Photos doing activities you enjoy. Want me to analyze your current photos?",
        suggestions: ["Analyze my photos", "Photo pose ideas", "Lighting tips"]
      },
      conversation: {
        content: "Starting conversations can be nerve-wracking! Here are some personalized openers based on their profile: 1) Comment on shared interests, 2) Ask about their photos, 3) Reference something unique in their bio. What kind of conversation starter are you looking for?",
        suggestions: ["Generate openers", "Response ideas", "Keep conversations going"]
      },
      date: {
        content: "I love helping plan amazing dates! Based on your location and interests, here are some ideas: 1) Coffee shop with board games, 2) Local art gallery walk, 3) Cooking class together. What type of date vibe are you going for?",
        suggestions: ["First date ideas", "Creative dates", "Budget-friendly options"]
      }
    }

    const messageKey = Object.keys(responses).find(key => 
      userMessage.toLowerCase().includes(key)
    )

    const response = responses[messageKey] || {
      content: "That's a great question! I'm here to help with all aspects of your dating journey. Whether you need help with your profile, conversation tips, date ideas, or just want to chat about relationships, I'm here for you! 💕",
      suggestions: ["Help with my profile", "Conversation tips", "Date planning", "Relationship advice"]
    }

    return {
      id: messages.length + 2,
      type: 'ai',
      content: response.content,
      timestamp: new Date(),
      suggestions: response.suggestions
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion)
    inputRef.current?.focus()
  }

  const handleQuickAction = (action) => {
    const actionMessages = {
      bio: "Help me improve my dating profile bio",
      photos: "Give me tips for better dating profile photos",
      conversation: "Suggest conversation starters for my matches",
      date: "Help me plan a perfect first date"
    }
    
    setMessage(actionMessages[action.id])
    setActiveTab('chat')
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    // Implement voice recognition here
  }

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking)
    // Implement text-to-speech here
  }

  const renderChatContent = () => (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${
              msg.type === 'user' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : 'bg-muted'
            } rounded-2xl p-3`}>
              {msg.type === 'ai' && (
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">Dr. Flourish</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{msg.content}</p>
              {msg.suggestions && (
                <div className="mt-3 space-y-2">
                  {msg.suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Dr. Flourish anything..."
              className="w-full p-3 pr-12 bg-muted rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
              onClick={toggleListening}
            >
              {isListening ? <MicOff className="w-4 h-4 text-red-500" /> : <Mic className="w-4 h-4" />}
            </Button>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  const renderProfileContent = () => (
    <div className="p-4 space-y-4">
      <div className="text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
        />
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-muted-foreground">{user.username}</p>
      </div>

      <div className="space-y-3">
        <div className="bg-muted rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2">Profile Score</h4>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-background rounded-full h-2">
              <div className="w-4/5 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
            </div>
            <span className="text-sm font-medium">85%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Great profile! Consider adding more photos.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className="h-auto p-3 flex flex-col items-center space-y-2"
              onClick={() => handleQuickAction(action)}
            >
              <action.icon className={`w-5 h-5 ${action.color}`} />
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return renderChatContent()
      case 'profile':
        return renderProfileContent()
      case 'matches':
        return <div className="p-4 text-center text-muted-foreground">Matches analysis coming soon!</div>
      case 'insights':
        return <div className="p-4 text-center text-muted-foreground">Dating insights coming soon!</div>
      case 'tips':
        return <div className="p-4 text-center text-muted-foreground">Dating tips coming soon!</div>
      default:
        return renderChatContent()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg z-50 p-0"
      >
        <div className="relative">
          <Bot className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </Button>
    )
  }

  return (
    <div className={`fixed bottom-20 right-4 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Dr. Flourish</h3>
                <p className="text-xs opacity-90">Your AI Dating Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
                onClick={toggleSpeaking}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Tabs */}
            <div className="flex border-b border-border bg-muted/50">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  className={`flex-1 rounded-none border-none h-10 ${
                    activeTab === tab.id 
                      ? 'bg-background shadow-sm border-b-2 border-pink-500' 
                      : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {renderContent()}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DrFlourishInterface

