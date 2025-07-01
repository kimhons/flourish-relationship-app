import React from 'react'
import { 
  Heart, 
  MessageCircle, 
  Brain, 
  TrendingUp, 
  Users, 
  Calendar,
  Star,
  Target
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.firstName || 'there'}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening in your relationship journey
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="flourish-gradient text-white">
            <Target className="mr-2 h-4 w-4" />
            Set New Goal
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-1">
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-2 rounded-lg bg-muted/50`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`p-2 rounded-full bg-muted/50`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Relationship Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Relationship Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {relationshipGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{goal.title}</span>
                    <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{goal.target}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Heart className="h-6 w-6 mb-2" />
              <span>Find Matches</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <MessageCircle className="h-6 w-6 mb-2" />
              <span>Send Message</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Brain className="h-6 w-6 mb-2" />
              <span>Start Coaching</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Schedule Date</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Today's Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium mb-2">💕 Perfect Match Alert</h4>
              <p className="text-sm text-muted-foreground mb-3">
                We found someone with 94% compatibility! Check out their profile.
              </p>
              <Button size="sm" className="flourish-gradient text-white">
                View Profile
              </Button>
            </div>
            
            <div className="p-4 rounded-lg border border-border">
              <h4 className="font-medium mb-2">🧠 Dr. Love Insight</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Based on your recent conversations, here's a tip to improve connection.
              </p>
              <Button size="sm" variant="outline">
                Read Insight
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

