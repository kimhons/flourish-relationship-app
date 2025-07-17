import React, { useState } from 'react'
import { 
  Brain, 
  Heart, 
  Target, 
  TrendingUp, 
  Calendar,
  Clock,
  Star,
  MessageCircle,
  Sparkles,
  Book,
  Lightbulb,
  Award,
  ChevronRight,
  Play,
  Lock,
  CheckCircle,
  BarChart3,
  Users,
  Zap
} from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const CoachingPage = () => {
  const [activeSession, setActiveSession] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState('communication')

  const coachingTopics = [
    {
      id: 'communication',
      title: 'Communication Skills',
      icon: MessageCircle,
      description: 'Master the art of meaningful conversations',
      progress: 75,
      modules: 12,
      completed: 9,
      color: 'var(--flourish-primary)'
    },
    {
      id: 'emotional',
      title: 'Emotional Intelligence',
      icon: Heart,
      description: 'Understand and manage emotions effectively',
      progress: 60,
      modules: 10,
      completed: 6,
      color: 'var(--flourish-secondary)'
    },
    {
      id: 'confidence',
      title: 'Dating Confidence',
      icon: Star,
      description: 'Build authentic confidence in dating',
      progress: 85,
      modules: 8,
      completed: 7,
      color: 'var(--flourish-accent)'
    },
    {
      id: 'relationships',
      title: 'Healthy Relationships',
      icon: Users,
      description: 'Create and maintain strong bonds',
      progress: 45,
      modules: 15,
      completed: 7,
      color: 'var(--flourish-success)'
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      title: "Active Listening Techniques",
      topic: "Communication",
      date: "Today",
      time: "3:00 PM",
      duration: "30 min",
      type: "video"
    },
    {
      id: 2,
      title: "Managing Conflict Constructively",
      topic: "Emotional Intelligence",
      date: "Tomorrow",
      time: "5:00 PM",
      duration: "45 min",
      type: "interactive"
    },
    {
      id: 3,
      title: "First Date Success Strategies",
      topic: "Dating Confidence",
      date: "Friday",
      time: "2:00 PM",
      duration: "30 min",
      type: "video"
    }
  ]

  const achievements = [
    { id: 1, title: "Communication Pro", description: "Completed 10 communication modules", icon: MessageCircle, earned: true },
    { id: 2, title: "Emotional Master", description: "Achieved 80% in EQ assessment", icon: Heart, earned: true },
    { id: 3, title: "Confidence Champion", description: "Finished confidence bootcamp", icon: Star, earned: false },
    { id: 4, title: "Relationship Expert", description: "Complete all relationship modules", icon: Users, earned: false }
  ]

  const selectedTopicData = coachingTopics.find(t => t.id === selectedTopic)

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
            <h1 className="flourish-heading-2">Dr. Love AI Coaching</h1>
            <p className="flourish-body">Your personalized relationship coach</p>
          </div>
        </div>
        <FlourishButton 
          variant="primary" 
          icon={<Sparkles className="h-4 w-4" />}
        >
          Start New Session
        </FlourishButton>
      </div>

      <div className="flourish-grid lg:flourish-grid-3" style={{ gap: 'var(--flourish-space-xl)' }}>
        {/* Main Content */}
        <div className="lg:col-span-2 flourish-flex-col" style={{ gap: 'var(--flourish-space-xl)' }}>
          {/* Welcome Card */}
          <FlourishCard gradient={true} shadow="xl" padding="large" className="flourish-scale-in">
            <div className="flourish-flex" style={{ gap: 'var(--flourish-space-xl)', alignItems: 'center' }}>
              <div className="flourish-flex-1">
                <h2 className="flourish-heading-3 flourish-mb-md" style={{ color: 'white' }}>
                  Welcome back! Ready to grow?
                </h2>
                <p className="flourish-body flourish-mb-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  You've made incredible progress this week. Dr. Love has prepared personalized insights 
                  based on your recent interactions and goals.
                </p>
                <div className="flourish-flex" style={{ gap: 'var(--flourish-space-md)' }}>
                  <FlourishButton 
                    variant="secondary" 
                    style={{ 
                      background: 'white',
                      color: 'var(--flourish-primary)'
                    }}
                    icon={<Play className="h-4 w-4" />}
                  >
                    Continue Learning
                  </FlourishButton>
                  <FlourishButton 
                    variant="secondary" 
                    style={{ 
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                    icon={<Lightbulb className="h-4 w-4" />}
                  >
                    View Insights
                  </FlourishButton>
                </div>
              </div>
              <div className="flourish-hidden lg:flourish-block">
                <Brain className="h-32 w-32" style={{ color: 'rgba(255,255,255,0.3)' }} />
              </div>
            </div>
          </FlourishCard>

          {/* Progress Overview */}
          <FlourishCard shadow="lg" padding="large" className="flourish-fade-in">
            <div className="flourish-card__header">
              <div className="flourish-flex-between flourish-mb-lg">
                <h3 className="flourish-heading-5">Your Progress</h3>
                <Badge style={{ 
                  background: 'var(--flourish-primary-lighter)',
                  color: 'var(--flourish-primary)'
                }}>
                  Level 12
                </Badge>
              </div>
            </div>
            <div className="flourish-grid flourish-grid-2" style={{ gap: 'var(--flourish-space-lg)' }}>
              {coachingTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className={`flourish-p-md flourish-rounded-lg flourish-transition ${
                    selectedTopic === topic.id ? 'flourish-shadow-md' : ''
                  }`}
                  style={{ 
                    background: selectedTopic === topic.id ? 'var(--flourish-primary-lighter)' : 'var(--flourish-background-secondary)',
                    cursor: 'pointer',
                    border: `1px solid ${selectedTopic === topic.id ? 'var(--flourish-primary)' : 'var(--flourish-border-light)'}`
                  }}
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <div className="flourish-flex-between flourish-mb-sm">
                    <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
                      <div className="flourish-p-sm flourish-rounded-lg" style={{ 
                        background: `${topic.color}20`,
                        color: topic.color
                      }}>
                        <topic.icon className="h-5 w-5" />
                      </div>
                      <h4 className="flourish-body">{topic.title}</h4>
                    </div>
                    <span className="flourish-caption flourish-text-gradient">{topic.progress}%</span>
                  </div>
                  <p className="flourish-caption flourish-mb-sm">{topic.description}</p>
                  <div className="flourish-mb-sm" style={{ 
                    height: '6px',
                    background: 'var(--flourish-border-light)',
                    borderRadius: 'var(--flourish-radius-full)',
                    overflow: 'hidden'
                  }}>
                    <div 
                      style={{ 
                        height: '100%',
                        width: `${topic.progress}%`,
                        background: topic.color,
                        borderRadius: 'var(--flourish-radius-full)',
                        transition: 'var(--flourish-transition-slow)'
                      }}
                    />
                  </div>
                  <p className="flourish-caption">
                    {topic.completed} of {topic.modules} modules completed
                  </p>
                </div>
              ))}
            </div>
          </FlourishCard>

          {/* Current Topic Details */}
          <FlourishCard shadow="lg" padding="large" className="flourish-slide-in-left">
            <div className="flourish-card__header">
              <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)', marginBottom: 'var(--flourish-space-lg)' }}>
                <div className="flourish-p-sm flourish-rounded-lg" style={{ 
                  background: `${selectedTopicData?.color}20`,
                  color: selectedTopicData?.color
                }}>
                  {selectedTopicData && <selectedTopicData.icon className="h-6 w-6" />}
                </div>
                <h3 className="flourish-heading-5">{selectedTopicData?.title} Modules</h3>
              </div>
            </div>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
              {[
                { title: "Foundation Basics", status: "completed", duration: "15 min" },
                { title: "Advanced Techniques", status: "completed", duration: "20 min" },
                { title: "Real-world Practice", status: "in-progress", duration: "25 min" },
                { title: "Expert Strategies", status: "locked", duration: "30 min" }
              ].map((module, index) => (
                <div 
                  key={index}
                  className="flourish-flex-between flourish-p-md flourish-rounded-lg flourish-transition"
                  style={{ 
                    background: 'var(--flourish-background-secondary)',
                    border: '1px solid var(--flourish-border-light)',
                    cursor: module.status !== 'locked' ? 'pointer' : 'default',
                    opacity: module.status === 'locked' ? 0.6 : 1
                  }}
                >
                  <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-md)' }}>
                    <div className="flourish-p-sm flourish-rounded-full" style={{ 
                      background: module.status === 'completed' ? 'var(--flourish-success-light)' : 
                                 module.status === 'in-progress' ? 'var(--flourish-primary-lighter)' : 
                                 'var(--flourish-border-light)',
                      color: module.status === 'completed' ? 'var(--flourish-success)' : 
                             module.status === 'in-progress' ? 'var(--flourish-primary)' : 
                             'var(--flourish-text-tertiary)'
                    }}>
                      {module.status === 'completed' ? <CheckCircle className="h-5 w-5" /> :
                       module.status === 'in-progress' ? <Play className="h-5 w-5" /> :
                       <Lock className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="flourish-body flourish-mb-xs">{module.title}</h4>
                      <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                        <Clock className="h-3 w-3" style={{ color: 'var(--flourish-text-tertiary)' }} />
                        <span className="flourish-caption">{module.duration}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5" style={{ color: 'var(--flourish-text-tertiary)' }} />
                </div>
              ))}
            </div>
          </FlourishCard>
        </div>

        {/* Sidebar */}
        <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
          {/* Upcoming Sessions */}
          <FlourishCard shadow="md" padding="large" className="flourish-fade-in">
            <h3 className="flourish-heading-5 flourish-mb-md">Upcoming Sessions</h3>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-sm)' }}>
              {upcomingSessions.map((session) => (
                <div 
                  key={session.id}
                  className="flourish-p-sm flourish-rounded-lg"
                  style={{ 
                    background: 'var(--flourish-background-secondary)',
                    border: '1px solid var(--flourish-border-light)'
                  }}
                >
                  <h4 className="flourish-body-sm flourish-mb-xs">{session.title}</h4>
                  <div className="flourish-flex flourish-mb-xs" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                    <Calendar className="h-3 w-3" style={{ color: 'var(--flourish-text-tertiary)' }} />
                    <span className="flourish-caption">{session.date} at {session.time}</span>
                  </div>
                  <div className="flourish-flex-between">
                    <Badge style={{ 
                      background: 'var(--flourish-primary-lighter)',
                      color: 'var(--flourish-primary)',
                      fontSize: 'var(--flourish-font-size-xs)'
                    }}>
                      {session.topic}
                    </Badge>
                    <span className="flourish-caption">{session.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <FlourishButton 
              variant="secondary" 
              fullWidth 
              size="small"
              className="flourish-mt-md"
            >
              View All Sessions
            </FlourishButton>
          </FlourishCard>

          {/* Achievements */}
          <FlourishCard shadow="md" padding="large" className="flourish-slide-in-right">
            <h3 className="flourish-heading-5 flourish-mb-md">Achievements</h3>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-sm)' }}>
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className="flourish-flex"
                  style={{ 
                    alignItems: 'center',
                    gap: 'var(--flourish-space-sm)',
                    opacity: achievement.earned ? 1 : 0.5
                  }}
                >
                  <div className="flourish-p-sm flourish-rounded-full" style={{ 
                    background: achievement.earned ? 'var(--flourish-accent-lighter)' : 'var(--flourish-border-light)',
                    color: achievement.earned ? 'var(--flourish-accent)' : 'var(--flourish-text-tertiary)'
                  }}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flourish-flex-1">
                    <h4 className="flourish-body-sm">{achievement.title}</h4>
                    <p className="flourish-caption">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FlourishCard>

          {/* AI Insights */}
          <FlourishCard gradient={true} shadow="lg" padding="large" className="flourish-fade-in">
            <div className="flourish-text-center">
              <Zap className="h-8 w-8 flourish-mb-md" style={{ 
                margin: '0 auto',
                color: 'white'
              }} />
              <h3 className="flourish-heading-5 flourish-mb-sm" style={{ color: 'white' }}>
                AI Insight of the Day
              </h3>
              <p className="flourish-body-sm flourish-mb-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Based on your conversations, focusing on open-ended questions can improve connection by 40%
              </p>
              <FlourishButton 
                variant="secondary" 
                size="small"
                style={{ 
                  background: 'white',
                  color: 'var(--flourish-primary)'
                }}
              >
                Learn More
              </FlourishButton>
            </div>
          </FlourishCard>
        </div>
      </div>
    </div>
  )
}

export default CoachingPage
