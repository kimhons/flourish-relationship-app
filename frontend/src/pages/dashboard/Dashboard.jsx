import React from 'react'
import { 
  Heart, 
  MessageCircle, 
  Brain, 
  TrendingUp, 
  Users, 
  Calendar,
  Star,
  Target,
  Sparkles
} from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    {
      title: 'Profile Views',
      value: '127',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'New Matches',
      value: '8',
      change: '+3',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      title: 'Messages',
      value: '24',
      change: '+5',
      icon: MessageCircle,
      color: 'text-green-600'
    },
    {
      title: 'Coaching Sessions',
      value: '12',
      change: '+2',
      icon: Brain,
      color: 'text-purple-600'
    }
  ]

  const recentActivity = [
    {
      type: 'match',
      title: 'New match with Sarah',
      time: '2 hours ago',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      type: 'message',
      title: 'Message from Alex',
      time: '4 hours ago',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      type: 'coaching',
      title: 'Completed coaching session',
      time: '1 day ago',
      icon: Brain,
      color: 'text-purple-600'
    },
    {
      type: 'profile',
      title: 'Profile viewed by 5 people',
      time: '2 days ago',
      icon: Users,
      color: 'text-green-600'
    }
  ]

  const relationshipGoals = [
    {
      title: 'Communication Skills',
      progress: 75,
      target: 'Complete 3 more exercises'
    },
    {
      title: 'Emotional Intelligence',
      progress: 60,
      target: 'Read 2 recommended articles'
    },
    {
      title: 'Dating Confidence',
      progress: 85,
      target: 'Practice conversation starters'
    }
  ]

  return (
    <div className="flourish-container" style={{ 
      padding: 'var(--flourish-space-xl)',
      minHeight: '100vh',
      background: 'var(--flourish-background)'
    }}>
      {/* Welcome Header */}
      <FlourishCard gradient={false} shadow="sm" padding="large" className="flourish-mb-xl flourish-fade-in">
        <div className="flourish-flex-between flourish-flex-col md:flourish-flex-row">
          <div>
            <div className="flourish-flex" style={{ gap: 'var(--flourish-space-md)', alignItems: 'center', marginBottom: 'var(--flourish-space-sm)' }}>
              <FlourishLogo size={40} showText={false} />
              <div>
                <h1 className="flourish-heading-2">
                  Welcome back, {user?.firstName || 'there'}! 
                  <span style={{ marginLeft: 'var(--flourish-space-sm)' }}>✨</span>
                </h1>
                <p className="flourish-body">
                  Here's what's happening in your relationship journey
                </p>
              </div>
            </div>
          </div>
          <div className="flourish-mt-md md:flourish-mt-0">
            <FlourishButton 
              variant="primary"
              icon={<Target className="h-4 w-4" />}
              iconPosition="left"
            >
              Set New Goal
            </FlourishButton>
          </div>
        </div>
      </FlourishCard>

      {/* Stats Grid */}
      <div className="flourish-grid flourish-grid-4 flourish-mb-xl">
        {stats.map((stat, index) => (
          <FlourishCard 
            key={index} 
            shadow="md" 
            padding="large" 
            hoverable={true}
            className="flourish-slide-in-right"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flourish-flex-between">
              <div>
                <p className="flourish-body-sm flourish-mb-xs" style={{ color: 'var(--flourish-text-tertiary)' }}>
                  {stat.title}
                </p>
                <p className="flourish-heading-3 flourish-mb-xs">{stat.value}</p>
                <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                  <TrendingUp className="h-3 w-3" style={{ color: 'var(--flourish-success)' }} />
                  <p className="flourish-caption" style={{ color: 'var(--flourish-success)' }}>
                    {stat.change} from last week
                  </p>
                </div>
              </div>
              <div className="flourish-p-sm flourish-rounded-lg" style={{ 
                background: 'var(--flourish-primary-lighter)',
                color: 'var(--flourish-primary)'
              }}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </FlourishCard>
        ))}
      </div>

      <div className="flourish-grid flourish-grid-3">
        {/* Recent Activity */}
        <FlourishCard shadow="lg" padding="large" className="lg:col-span-2 flourish-scale-in">
          <div className="flourish-card__header">
            <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
              <div className="flourish-p-sm flourish-rounded-lg" style={{ 
                background: 'var(--flourish-secondary-lighter)',
                color: 'var(--flourish-secondary)'
              }}>
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="flourish-heading-5">Recent Activity</h3>
            </div>
          </div>
          <div className="flourish-card__body">
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="flourish-flex flourish-p-md flourish-rounded-lg flourish-transition" 
                  style={{ 
                    gap: 'var(--flourish-space-md)',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--flourish-primary-lighter)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  <div className="flourish-p-sm flourish-rounded-full" style={{ 
                    background: 'var(--flourish-primary-lighter)',
                    color: 'var(--flourish-primary)'
                  }}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flourish-flex-1">
                    <p className="flourish-body flourish-mb-xs">{activity.title}</p>
                    <p className="flourish-caption">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FlourishCard>

        {/* Relationship Goals */}
        <FlourishCard shadow="lg" padding="large" className="flourish-scale-in">
          <div className="flourish-card__header">
            <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
              <div className="flourish-p-sm flourish-rounded-lg" style={{ 
                background: 'var(--flourish-accent-lighter)',
                color: 'var(--flourish-accent)'
              }}>
                <Target className="h-5 w-5" />
              </div>
              <h3 className="flourish-heading-5">Relationship Goals</h3>
            </div>
          </div>
          <div className="flourish-card__body">
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-lg)' }}>
              {relationshipGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flourish-flex-between flourish-mb-sm">
                    <span className="flourish-body-sm">{goal.title}</span>
                    <span className="flourish-caption flourish-text-gradient">{goal.progress}%</span>
                  </div>
                  <div className="flourish-mb-sm" style={{ 
                    height: '8px',
                    background: 'var(--flourish-primary-lighter)',
                    borderRadius: 'var(--flourish-radius-full)',
                    overflow: 'hidden'
                  }}>
                    <div 
                      style={{ 
                        height: '100%',
                        width: `${goal.progress}%`,
                        background: 'var(--flourish-gradient-primary)',
                        borderRadius: 'var(--flourish-radius-full)',
                        transition: 'var(--flourish-transition-slow)'
                      }}
                    />
                  </div>
                  <p className="flourish-caption">{goal.target}</p>
                </div>
              ))}
            </div>
          </div>
        </FlourishCard>
      </div>

      {/* Quick Actions */}
      <FlourishCard shadow="lg" padding="large" className="flourish-mt-xl flourish-fade-in">
        <div className="flourish-card__header">
          <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
            <div className="flourish-p-sm flourish-rounded-lg" style={{ 
              background: 'var(--flourish-primary-lighter)',
              color: 'var(--flourish-primary)'
            }}>
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="flourish-heading-5">Quick Actions</h3>
          </div>
        </div>
        <div className="flourish-card__body">
          <div className="flourish-grid flourish-grid-4">
            <FlourishButton 
              variant="secondary" 
              className="flourish-flex-col flourish-p-lg"
              style={{ height: '80px', gap: 'var(--flourish-space-sm)' }}
            >
              <Heart className="h-6 w-6" />
              <span>Find Matches</span>
            </FlourishButton>
            <FlourishButton 
              variant="secondary" 
              className="flourish-flex-col flourish-p-lg"
              style={{ height: '80px', gap: 'var(--flourish-space-sm)' }}
            >
              <MessageCircle className="h-6 w-6" />
              <span>Send Message</span>
            </FlourishButton>
            <FlourishButton 
              variant="secondary" 
              className="flourish-flex-col flourish-p-lg"
              style={{ height: '80px', gap: 'var(--flourish-space-sm)' }}
            >
              <Brain className="h-6 w-6" />
              <span>Start Coaching</span>
            </FlourishButton>
            <FlourishButton 
              variant="secondary" 
              className="flourish-flex-col flourish-p-lg"
              style={{ height: '80px', gap: 'var(--flourish-space-sm)' }}
            >
              <Calendar className="h-6 w-6" />
              <span>Schedule Date</span>
            </FlourishButton>
          </div>
        </div>
      </FlourishCard>

      {/* Today's Recommendations */}
      <FlourishCard shadow="lg" padding="large" className="flourish-mt-xl flourish-fade-in">
        <div className="flourish-card__header">
          <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
            <div className="flourish-p-sm flourish-rounded-lg" style={{ 
              background: 'var(--flourish-accent-lighter)',
              color: 'var(--flourish-accent)'
            }}>
              <Star className="h-5 w-5" />
            </div>
            <h3 className="flourish-heading-5">Today's Recommendations</h3>
          </div>
        </div>
        <div className="flourish-card__body">
          <div className="flourish-grid flourish-grid-2">
            <FlourishCard 
              shadow="sm" 
              padding="medium" 
              className="flourish-transition"
              style={{ border: '1px solid var(--flourish-border-light)' }}
            >
              <h4 className="flourish-heading-6 flourish-mb-sm">💕 Perfect Match Alert</h4>
              <p className="flourish-body-sm flourish-mb-md">
                We found someone with 94% compatibility! Check out their profile.
              </p>
              <FlourishButton size="small" variant="primary">
                View Profile
              </FlourishButton>
            </FlourishCard>
            
            <FlourishCard 
              shadow="sm" 
              padding="medium" 
              className="flourish-transition"
              style={{ border: '1px solid var(--flourish-border-light)' }}
            >
              <h4 className="flourish-heading-6 flourish-mb-sm">🧠 Dr. Love Insight</h4>
              <p className="flourish-body-sm flourish-mb-md">
                Based on your recent conversations, here's a tip to improve connection.
              </p>
              <FlourishButton size="small" variant="secondary">
                Read Insight
              </FlourishButton>
            </FlourishCard>
          </div>
        </div>
      </FlourishCard>
    </div>
  )
}

export default Dashboard

