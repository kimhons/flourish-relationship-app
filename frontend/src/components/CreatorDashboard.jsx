import React, { useState } from 'react'
import { 
  BarChart3,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share,
  DollarSign,
  Calendar,
  Target,
  Award,
  Zap,
  Eye,
  Clock,
  Star,
  ArrowUp,
  ArrowDown,
  Play,
  Download,
  Settings,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const CreatorDashboard = ({ user, darkMode }) => {
  const [timeRange, setTimeRange] = useState('7d') // '24h', '7d', '30d', '90d'
  const [activeMetric, setActiveMetric] = useState('overview')

  const timeRanges = [
    { id: '24h', label: '24H' },
    { id: '7d', label: '7D' },
    { id: '30d', label: '30D' },
    { id: '90d', label: '90D' }
  ]

  const metrics = [
    {
      id: 'followers',
      label: 'Followers',
      value: '12.8K',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'engagement',
      label: 'Engagement',
      value: '8.9%',
      change: '+2.1%',
      trend: 'up',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      id: 'reach',
      label: 'Reach',
      value: '45.2K',
      change: '+18.7%',
      trend: 'up',
      icon: Eye,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'earnings',
      label: 'Earnings',
      value: '$1,247',
      change: '+34.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ]

  const recentPosts = [
    {
      id: 1,
      type: 'image',
      content: 'Perfect coffee date setup! ☕️',
      media: '/api/placeholder/100/100',
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
      media: '/api/placeholder/100/100',
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
      media: '/api/placeholder/100/100',
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

  const achievements = [
    {
      id: 1,
      title: 'Rising Star',
      description: 'Gained 1K followers this month',
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      progress: 100,
      unlocked: true
    },
    {
      id: 2,
      title: 'Engagement Master',
      description: 'Achieved 10%+ engagement rate',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      progress: 89,
      unlocked: false
    },
    {
      id: 3,
      title: 'Content Creator',
      description: 'Posted 50 pieces of content',
      icon: Award,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      progress: 76,
      unlocked: false
    }
  ]

  const audienceInsights = {
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
        { city: 'Miami', percentage: 8 }
      ]
    },
    interests: [
      { topic: 'Dating & Relationships', percentage: 85 },
      { topic: 'Food & Dining', percentage: 72 },
      { topic: 'Travel', percentage: 68 },
      { topic: 'Lifestyle', percentage: 61 },
      { topic: 'Fashion', percentage: 45 }
    ]
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'excellent': return 'text-green-500'
      case 'good': return 'text-blue-500'
      case 'average': return 'text-yellow-500'
      case 'poor': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Creator Studio</h1>
              <p className="text-sm text-muted-foreground">Track your content performance</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex space-x-1">
            {timeRanges.map((range) => (
              <Button
                key={range.id}
                variant={timeRange === range.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range.id)}
                className={timeRange === range.id ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' : ''}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.id} className={`p-4 rounded-xl border border-border ${metric.bgColor}`}>
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                <div className={`flex items-center space-x-1 text-xs ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto p-3 flex flex-col items-center space-y-2">
              <Plus className="w-5 h-5" />
              <span className="text-sm">Create Post</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col items-center space-y-2">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col items-center space-y-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Schedule</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex flex-col items-center space-y-2">
              <Target className="w-5 h-5" />
              <span className="text-sm">Goals</span>
            </Button>
          </div>
        </div>

        {/* Recent Posts Performance */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Posts</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="relative">
                  <img
                    src={post.media}
                    alt="Post thumbnail"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  {post.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{post.content}</p>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                    <span>{post.timestamp}</span>
                    <span>{formatNumber(post.metrics.views)} views</span>
                    <span className={getPerformanceColor(post.performance)}>
                      {post.metrics.engagement}% engagement
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{formatNumber(post.metrics.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.metrics.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-3 rounded-lg ${achievement.bgColor}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.unlocked ? achievement.bgColor : 'bg-muted'
                  }`}>
                    <achievement.icon className={`w-5 h-5 ${
                      achievement.unlocked ? achievement.color : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      {achievement.unlocked && (
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                          Unlocked
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    {!achievement.unlocked && (
                      <div className="mt-2">
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${achievement.color.replace('text-', 'bg-')}`}
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.progress}% complete</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Insights */}
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="font-semibold mb-4">Audience Insights</h3>
          
          {/* Age Demographics */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Age Distribution</h4>
            <div className="space-y-2">
              {audienceInsights.demographics.age.map((age) => (
                <div key={age.range} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{age.range}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                        style={{ width: `${age.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-8">{age.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Interests */}
          <div>
            <h4 className="text-sm font-medium mb-3">Top Interests</h4>
            <div className="space-y-2">
              {audienceInsights.interests.slice(0, 3).map((interest) => (
                <div key={interest.topic} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{interest.topic}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        style={{ width: `${interest.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-8">{interest.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monetization */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Monetization</h3>
            <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Boost
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-lg font-bold text-green-600 dark:text-green-400">$1,247</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">+34%</p>
              <p className="text-xs text-muted-foreground">Growth</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sponsored posts</span>
              <span className="font-medium">$890</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tips & donations</span>
              <span className="font-medium">$234</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Premium content</span>
              <span className="font-medium">$123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorDashboard

