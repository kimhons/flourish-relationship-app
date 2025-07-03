import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Calendar, 
  Target, 
  Award, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  MessageCircle,
  Star,
  Activity,
  Zap,
  Shield,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  Download,
  Share2,
  Filter,
  Eye,
  EyeOff
} from 'lucide-react';

const RelationshipWellnessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [showDetails, setShowDetails] = useState(false);
  const [wellnessData, setWellnessData] = useState({});

  // Wellness metrics and data
  useEffect(() => {
    setWellnessData({
      overallScore: 87,
      previousScore: 82,
      trend: 'improving',
      lastUpdated: '2025-07-03',
      dimensions: {
        communication: {
          score: 92,
          trend: 'stable',
          change: 2,
          activities: 15,
          lastActivity: '2025-07-03',
          insights: [
            'Daily check-ins have improved consistency',
            'Active listening exercises showing progress',
            'Conflict resolution skills developing well'
          ],
          recommendations: [
            'Continue daily appreciation practice',
            'Try vulnerability sharing exercises',
            'Schedule weekly deeper conversations'
          ]
        },
        intimacy: {
          score: 85,
          trend: 'improving',
          change: 8,
          activities: 12,
          lastActivity: '2025-07-02',
          insights: [
            'Physical affection frequency increased',
            'Emotional intimacy exercises well-received',
            'Quality time together improving'
          ],
          recommendations: [
            'Explore sensory connection activities',
            'Plan more date nights',
            'Practice mindful touch exercises'
          ]
        },
        trust: {
          score: 90,
          trend: 'stable',
          change: 1,
          activities: 8,
          lastActivity: '2025-07-01',
          insights: [
            'Consistency in promises and commitments',
            'Open communication building trust',
            'Vulnerability sharing strengthening bond'
          ],
          recommendations: [
            'Continue transparency practices',
            'Share more personal goals',
            'Practice trust-building exercises'
          ]
        },
        support: {
          score: 88,
          trend: 'improving',
          change: 5,
          activities: 10,
          lastActivity: '2025-07-03',
          insights: [
            'Emotional support during stress improved',
            'Practical help and assistance increased',
            'Encouragement and motivation strong'
          ],
          recommendations: [
            'Learn each other\'s stress signals',
            'Practice active support techniques',
            'Celebrate achievements together'
          ]
        },
        growth: {
          score: 82,
          trend: 'improving',
          change: 6,
          activities: 7,
          lastActivity: '2025-06-30',
          insights: [
            'Individual development goals aligned',
            'Learning new skills together',
            'Supporting each other\'s aspirations'
          ],
          recommendations: [
            'Set shared learning goals',
            'Try new experiences together',
            'Discuss future aspirations regularly'
          ]
        },
        fun: {
          score: 79,
          trend: 'needs_attention',
          change: -3,
          activities: 5,
          lastActivity: '2025-06-28',
          insights: [
            'Playfulness could be increased',
            'Shared activities need more variety',
            'Laughter and joy opportunities missed'
          ],
          recommendations: [
            'Schedule regular fun activities',
            'Try new hobbies together',
            'Plan surprise adventures'
          ]
        }
      },
      weeklyProgress: [
        { date: '2025-06-27', score: 82 },
        { date: '2025-06-28', score: 83 },
        { date: '2025-06-29', score: 84 },
        { date: '2025-06-30', score: 85 },
        { date: '2025-07-01', score: 86 },
        { date: '2025-07-02', score: 87 },
        { date: '2025-07-03', score: 87 }
      ],
      achievements: [
        {
          id: 1,
          title: 'Communication Champion',
          description: 'Completed 15 communication exercises',
          date: '2025-07-02',
          icon: MessageCircle,
          color: 'bg-blue-500'
        },
        {
          id: 2,
          title: 'Intimacy Explorer',
          description: 'Tried 5 new intimacy activities',
          date: '2025-07-01',
          icon: Heart,
          color: 'bg-pink-500'
        },
        {
          id: 3,
          title: 'Growth Mindset',
          description: 'Set and achieved relationship goals',
          date: '2025-06-30',
          icon: Target,
          color: 'bg-green-500'
        }
      ],
      alerts: [
        {
          id: 1,
          type: 'attention',
          title: 'Fun & Playfulness',
          message: 'This dimension needs some attention. Consider planning more fun activities together.',
          action: 'View Recommendations',
          priority: 'medium'
        },
        {
          id: 2,
          type: 'reminder',
          title: 'Weekly Check-in',
          message: 'Time for your weekly relationship check-in conversation.',
          action: 'Start Check-in',
          priority: 'low'
        }
      ]
    });
  }, []);

  const dimensionColors = {
    communication: 'bg-blue-500',
    intimacy: 'bg-pink-500',
    trust: 'bg-green-500',
    support: 'bg-purple-500',
    growth: 'bg-orange-500',
    fun: 'bg-yellow-500'
  };

  const dimensionIcons = {
    communication: MessageCircle,
    intimacy: Heart,
    trust: Shield,
    support: Users,
    growth: TrendingUp,
    fun: Star
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'declining':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-blue-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Overall Wellness Score */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Relationship Wellness Score</h2>
            <p className="text-gray-600">Overall health of your relationship</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-blue-600">{wellnessData.overallScore}</span>
              <span className="text-lg text-gray-500">/100</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              {getTrendIcon(wellnessData.trend)}
              <span className={`${wellnessData.trend === 'improving' ? 'text-green-600' : 'text-gray-600'}`}>
                +{wellnessData.overallScore - wellnessData.previousScore} from last week
              </span>
            </div>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#3b82f6"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(wellnessData.overallScore / 100) * 314} 314`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{wellnessData.overallScore}%</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-900 mb-2">Excellent Relationship Health</p>
          <p className="text-gray-600">Your relationship is thriving! Keep up the great work.</p>
        </div>
      </div>

      {/* Dimension Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(wellnessData.dimensions || {}).map(([key, dimension]) => {
          const Icon = dimensionIcons[key];
          const colorClass = dimensionColors[key];
          
          return (
            <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`h-10 w-10 ${colorClass} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(dimension.trend)}
                  <span className={`text-sm ${dimension.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {dimension.change >= 0 ? '+' : ''}{dimension.change}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">{key}</h3>
              
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl font-bold ${getScoreColor(dimension.score)}`}>
                  {dimension.score}
                </span>
                <span className="text-sm text-gray-600">{dimension.activities} activities</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div 
                  className={`h-2 rounded-full ${colorClass} transition-all duration-300`}
                  style={{ width: `${dimension.score}%` }}
                />
              </div>
              
              <p className="text-sm text-gray-600">
                Last activity: {dimension.lastActivity}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          {wellnessData.achievements?.map(achievement => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`h-10 w-10 ${achievement.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <span className="text-sm text-gray-500">{achievement.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alerts and Recommendations */}
      {wellnessData.alerts?.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attention Areas</h3>
          <div className="space-y-3">
            {wellnessData.alerts.map(alert => (
              <div key={alert.id} className={`p-4 rounded-lg border ${
                alert.priority === 'high' ? 'bg-red-50 border-red-200' :
                alert.priority === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                      alert.priority === 'high' ? 'text-red-500' :
                      alert.priority === 'medium' ? 'text-yellow-500' :
                      'text-blue-500'
                    }`} />
                    <div>
                      <h4 className="font-medium text-gray-900">{alert.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    </div>
                  </div>
                  <button className={`text-sm font-medium ${
                    alert.priority === 'high' ? 'text-red-600 hover:text-red-700' :
                    alert.priority === 'medium' ? 'text-yellow-600 hover:text-yellow-700' :
                    'text-blue-600 hover:text-blue-700'
                  }`}>
                    {alert.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTrends = () => (
    <div className="space-y-6">
      {/* Timeframe Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Wellness Trends</h3>
          <div className="flex items-center space-x-2">
            {['week', 'month', 'quarter'].map(timeframe => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h4 className="font-medium text-gray-900 mb-4">Overall Wellness Score Over Time</h4>
        <div className="h-64 flex items-end justify-between space-x-2">
          {wellnessData.weeklyProgress?.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                style={{ height: `${(day.score / 100) * 200}px` }}
                title={`${day.date

