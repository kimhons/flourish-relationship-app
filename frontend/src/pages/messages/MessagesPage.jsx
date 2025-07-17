import React, { useState } from 'react'
import { 
  MessageCircle, 
  Send, 
  Heart, 
  Star, 
  MapPin, 
  Clock, 
  Search,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Image,
  Mic,
  Check,
  CheckCheck,
  Circle,
  Zap
} from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const conversations = [
    {
      id: 1,
      name: "Sarah",
      photo: "/api/placeholder/60/60",
      lastMessage: "Hey! Thanks for the like 😊",
      lastMessageTime: "1h ago",
      unread: 2,
      online: true,
      verified: true,
      typing: false
    },
    {
      id: 2,
      name: "Emma",
      photo: "/api/placeholder/60/60",
      lastMessage: "Would love to grab coffee this weekend!",
      lastMessageTime: "3h ago",
      unread: 0,
      online: false,
      verified: true,
      typing: false
    },
    {
      id: 3,
      name: "Alex",
      photo: "/api/placeholder/60/60",
      lastMessage: "That restaurant looks amazing!",
      lastMessageTime: "1d ago",
      unread: 0,
      online: false,
      verified: true,
      typing: true
    }
  ]

  const messages = {
    1: [
      { id: 1, sender: 'them', text: "Hi! I love your profile 💕", time: "2:30 PM", read: true },
      { id: 2, sender: 'me', text: "Thank you! Your photos are amazing too!", time: "2:32 PM", read: true },
      { id: 3, sender: 'them', text: "I see you're into hiking! What's your favorite trail?", time: "2:35 PM", read: true },
      { id: 4, sender: 'me', text: "I love the coastal trails near Half Moon Bay. The views are incredible!", time: "2:38 PM", read: true },
      { id: 5, sender: 'them', text: "That sounds beautiful! Would you like to go hiking together sometime?", time: "2:40 PM", read: true },
      { id: 6, sender: 'them', text: "Hey! Thanks for the like 😊", time: "3:30 PM", read: false }
    ],
    2: [
      { id: 1, sender: 'them', text: "Hi there! Great to match with you", time: "Yesterday", read: true },
      { id: 2, sender: 'me', text: "Hey! Nice to meet you too", time: "Yesterday", read: true },
      { id: 3, sender: 'them', text: "Would love to grab coffee this weekend!", time: "3h ago", read: true }
    ],
    3: [
      { id: 1, sender: 'me', text: "Hey Alex! How's your week going?", time: "2d ago", read: true },
      { id: 2, sender: 'them', text: "Pretty good! Just got back from that new restaurant downtown", time: "1d ago", read: true },
      { id: 3, sender: 'them', text: "That restaurant looks amazing!", time: "1d ago", read: true }
    ]
  }

  const currentConversation = conversations.find(c => c.id === selectedConversation)
  const currentMessages = messages[selectedConversation] || []

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('')
    }
  }

  return (
    <div className="flourish-container" style={{ 
      padding: 'var(--flourish-space-xl)',
      minHeight: '100vh',
      background: 'var(--flourish-background)'
    }}>
      {/* Header */}
      <div className="flourish-flex-between flourish-mb-xl">
        <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-md)' }}>
          <FlourishLogo size={40} showText={false} />
          <div>
            <h1 className="flourish-heading-2">Messages</h1>
            <p className="flourish-body">Your conversations</p>
          </div>
        </div>
      </div>

      <div className="flourish-grid" style={{ 
        gridTemplateColumns: '350px 1fr',
        gap: 'var(--flourish-space-xl)',
        height: 'calc(100vh - 200px)'
      }}>
        {/* Conversations List */}
        <FlourishCard shadow="lg" padding="none" className="flourish-flex-col" style={{ height: '100%' }}>
          {/* Search */}
          <div className="flourish-p-md" style={{ borderBottom: '1px solid var(--flourish-border-light)' }}>
            <div className="flourish-flex flourish-p-sm flourish-rounded-lg" style={{ 
              background: 'var(--flourish-background-secondary)',
              gap: 'var(--flourish-space-sm)',
              alignItems: 'center'
            }}>
              <Search className="h-4 w-4" style={{ color: 'var(--flourish-text-tertiary)' }} />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: 'var(--flourish-font-size-sm)',
                  flex: 1
                }}
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flourish-flex-1 flourish-overflow-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flourish-flex flourish-p-md flourish-transition ${
                  selectedConversation === conversation.id ? 'flourish-bg-primary-lighter' : ''
                }`}
                style={{ 
                  gap: 'var(--flourish-space-md)',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--flourish-border-light)'
                }}
                onClick={() => setSelectedConversation(conversation.id)}
                onMouseEnter={(e) => {
                  if (selectedConversation !== conversation.id) {
                    e.currentTarget.style.background = 'var(--flourish-background-secondary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedConversation !== conversation.id) {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {/* Avatar */}
                <div className="flourish-relative">
                  <img 
                    src={conversation.photo} 
                    alt={conversation.name}
                    className="flourish-rounded-full"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  {conversation.online && (
                    <div 
                      className="flourish-absolute flourish-rounded-full"
                      style={{
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        background: 'var(--flourish-success)',
                        border: '2px solid white'
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flourish-flex-1" style={{ minWidth: 0 }}>
                  <div className="flourish-flex-between flourish-mb-xs">
                    <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                      <h4 className="flourish-body">{conversation.name}</h4>
                      {conversation.verified && (
                        <Zap className="h-3 w-3" style={{ color: 'var(--flourish-primary)' }} />
                      )}
                    </div>
                    <span className="flourish-caption">{conversation.lastMessageTime}</span>
                  </div>
                  <div className="flourish-flex-between">
                    <p className="flourish-body-sm" style={{ 
                      color: 'var(--flourish-text-tertiary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      flex: 1
                    }}>
                      {conversation.typing ? (
                        <span style={{ color: 'var(--flourish-primary)' }}>Typing...</span>
                      ) : (
                        conversation.lastMessage
                      )}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="flourish-rounded-full flourish-p-xs" style={{ 
                        background: 'var(--flourish-gradient-primary)',
                        color: 'white',
                        minWidth: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'var(--flourish-font-size-xs)'
                      }}>
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FlourishCard>

        {/* Chat Area */}
        <FlourishCard shadow="lg" padding="none" className="flourish-flex-col" style={{ height: '100%' }}>
          {/* Chat Header */}
          <div className="flourish-flex-between flourish-p-md" style={{ 
            borderBottom: '1px solid var(--flourish-border-light)'
          }}>
            <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-md)' }}>
              <img 
                src={currentConversation?.photo} 
                alt={currentConversation?.name}
                className="flourish-rounded-full"
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
              <div>
                <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                  <h3 className="flourish-heading-6">{currentConversation?.name}</h3>
                  {currentConversation?.verified && (
                    <Zap className="h-3 w-3" style={{ color: 'var(--flourish-primary)' }} />
                  )}
                </div>
                <p className="flourish-caption" style={{ 
                  color: currentConversation?.online ? 'var(--flourish-success)' : 'var(--flourish-text-tertiary)'
                }}>
                  {currentConversation?.online ? 'Online now' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flourish-flex" style={{ gap: 'var(--flourish-space-sm)' }}>
              <FlourishButton variant="secondary" size="small" icon={<Phone className="h-4 w-4" />} />
              <FlourishButton variant="secondary" size="small" icon={<Video className="h-4 w-4" />} />
              <FlourishButton variant="secondary" size="small" icon={<MoreVertical className="h-4 w-4" />} />
            </div>
          </div>

          {/* Messages */}
          <div className="flourish-flex-1 flourish-overflow-auto flourish-p-md" style={{ 
            background: 'var(--flourish-background-secondary)'
          }}>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
              {currentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flourish-flex ${message.sender === 'me' ? 'flourish-flex-end' : ''}`}
                >
                  <div
                    className="flourish-p-md flourish-rounded-xl"
                    style={{
                      maxWidth: '70%',
                      background: message.sender === 'me' 
                        ? 'var(--flourish-gradient-primary)' 
                        : 'white',
                      color: message.sender === 'me' ? 'white' : 'var(--flourish-text-primary)',
                      boxShadow: 'var(--flourish-shadow-sm)'
                    }}
                  >
                    <p className="flourish-body-sm">{message.text}</p>
                    <div className="flourish-flex flourish-mt-xs" style={{ 
                      alignItems: 'center', 
                      gap: 'var(--flourish-space-xs)',
                      justifyContent: 'flex-end'
                    }}>
                      <span className="flourish-caption" style={{ 
                        color: message.sender === 'me' ? 'rgba(255,255,255,0.8)' : 'var(--flourish-text-tertiary)'
                      }}>
                        {message.time}
                      </span>
                      {message.sender === 'me' && (
                        message.read ? 
                          <CheckCheck className="h-3 w-3" style={{ color: 'rgba(255,255,255,0.8)' }} /> :
                          <Check className="h-3 w-3" style={{ color: 'rgba(255,255,255,0.8)' }} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {currentConversation?.typing && (
                <div className="flourish-flex">
                  <div className="flourish-p-md flourish-rounded-xl" style={{
                    background: 'white',
                    boxShadow: 'var(--flourish-shadow-sm)'
                  }}>
                    <div className="flourish-flex" style={{ gap: 'var(--flourish-space-xs)' }}>
                      <Circle className="h-2 w-2 flourish-pulse" style={{ fill: 'var(--flourish-text-tertiary)' }} />
                      <Circle className="h-2 w-2 flourish-pulse" style={{ fill: 'var(--flourish-text-tertiary)', animationDelay: '0.2s' }} />
                      <Circle className="h-2 w-2 flourish-pulse" style={{ fill: 'var(--flourish-text-tertiary)', animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message Input */}
          <div className="flourish-p-md" style={{ borderTop: '1px solid var(--flourish-border-light)' }}>
            <div className="flourish-flex" style={{ gap: 'var(--flourish-space-sm)' }}>
              <FlourishButton variant="secondary" size="small" icon={<Paperclip className="h-4 w-4" />} />
              <FlourishButton variant="secondary" size="small" icon={<Image className="h-4 w-4" />} />
              <div className="flourish-flex-1 flourish-flex flourish-p-sm flourish-rounded-lg" style={{ 
                background: 'var(--flourish-background-secondary)',
                gap: 'var(--flourish-space-sm)'
              }}>
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  style={{
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: 'var(--flourish-font-size-base)',
                    flex: 1
                  }}
                />
                <FlourishButton variant="secondary" size="small" icon={<Smile className="h-4 w-4" />} />
              </div>
              <FlourishButton 
                variant="primary" 
                size="small" 
                icon={messageText ? <Send className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </FlourishCard>
      </div>
    </div>
  )
}

export default MessagesPage
