import React, { useState, useEffect } from 'react';
import { 
  Users, TrendingUp, BarChart3, PieChart, LineChart, Target,
  Activity, Heart, Brain, Zap, Shield, Globe, Star,
  Calendar, Clock, CheckCircle, AlertTriangle, Info,
  Search, Filter, Download, Upload, RefreshCw, Settings,
  Eye, Edit, MoreHorizontal, Plus, Minus, ArrowUp, ArrowDown,
  UserCheck, UserPlus, UserMinus, MessageCircle, Video,
  Briefcase, Coffee, Home, Phone, Mail, MapPin,
  Award, Trophy, Lightbulb, Puzzle, Gamepad2, BookOpen,
  Network, GitBranch, Layers, Database, Server, Cloud
} from 'lucide-react';

const TeamRelationshipAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overall');

  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalTeams: 89,
      totalMembers: 1247,
      avgTeamSize: 14.2,
      teamHealthScore: 87.3,
      collaborationIndex: 92.1,
      communicationScore: 89.7,
      conflictResolutionRate: 94.2,
      productivityIndex: 88.9
    },
    teams: [
      {
        id: 1,
        name: 'Product Development',
        department: 'Engineering',
        size: 23,
        lead: 'Sarah Chen',
        healthScore: 94.7,
        collaborationIndex: 96.2,
        communicationScore: 93.8,
        conflictResolution: 97.1,
        productivity: 91.4,
        satisfaction: 95.3,
        retention: 98.2,
        projects: 8,
        status: 'excellent',
        trends: {
          healthScore: +5.2,
          collaboration: +3.8,
          communication: +2.1,
          productivity: +4.7
        },
        members: [
          { id: 1, name: 'Sarah Chen', role: 'Team Lead', satisfaction: 96.2, performance: 94.8 },
          { id: 2, name: 'Mike Johnson', role: 'Senior Developer', satisfaction: 93.7, performance: 92.1 },
          { id: 3, name: 'Lisa Wang', role: 'UX Designer', satisfaction: 95.1, performance: 93.4 }
        ],
        recentActivity: [
          { type: 'milestone', description: 'Sprint goal achieved ahead of schedule', timestamp: '2 hours ago' },
          { type: 'collaboration', description: 'Cross-team knowledge sharing session', timestamp: '1 day ago' },
          { type: 'feedback', description: 'Positive peer feedback received', timestamp: '2 days ago' }
        ]
      },
      {
        id: 2,
        name: 'Marketing Strategy',
        department: 'Marketing',
        size: 18,
        lead: 'David Rodriguez',
        healthScore: 89.3,
        collaborationIndex: 91.7,
        communicationScore: 87.4,
        conflictResolution: 92.8,
        productivity: 86.9,
        satisfaction: 90.1,
        retention: 94.7,
        projects: 12,
        status: 'good',
        trends: {
          healthScore: +2.1,
          collaboration: +1.9,
          communication: -0.8,
          productivity: +3.2
        },
        members: [
          { id: 4, name: 'David Rodriguez', role: 'Marketing Director', satisfaction: 92.3, performance: 89.7 },
          { id: 5, name: 'Emma Thompson', role: 'Content Manager', satisfaction: 88.9, performance: 87.2 },
          { id: 6, name: 'Alex Kim', role: 'Digital Strategist', satisfaction: 89.7, performance: 88.5 }
        ],
        recentActivity: [
          { type: 'project', description: 'Campaign launch successful', timestamp: '4 hours ago' },
          { type: 'training', description: 'Team communication workshop completed', timestamp: '3 days ago' },
          { type: 'recognition', description: 'Team achievement recognized', timestamp: '1 week ago' }
        ]
      },
      {
        id: 3,
        name: 'Customer Success',
        department: 'Support',
        size: 15,
        lead: 'Jennifer Martinez',
        healthScore: 82.6,
        collaborationIndex: 85.3,
        communicationScore: 84.1,
        conflictResolution: 88.7,
        productivity: 83.2,
        satisfaction: 84.9,
        retention: 91.3,
        projects: 6,
        status: 'needs-attention',
        trends: {
          healthScore: -1.4,
          collaboration: -2.1,
          communication: +1.2,
          productivity: -0.9
        },
        members: [
          { id: 7, name: 'Jennifer Martinez', role: 'CS Manager', satisfaction: 87.1, performance: 85.3 },
          { id: 8, name: 'Robert Chen', role: 'Senior CS Rep', satisfaction: 82.4, performance: 81.7 },
          { id: 9, name: 'Maria Garcia', role: 'CS Specialist', satisfaction: 84.2, performance: 83.9 }
        ],
        recentActivity: [
          { type: 'issue', description: 'Team stress levels elevated', timestamp: '1 hour ago' },
          { type: 'intervention', description: 'Wellness check scheduled', timestamp: '6 hours ago' },
          { type: 'support', description: 'Additional resources allocated', timestamp: '2 days ago' }
        ]
      },
      {
        id: 4,
        name: 'Data Science',
        department: 'Analytics',
        size: 12,
        lead: 'Dr. Michael Thompson',
        healthScore: 91.8,
        collaborationIndex: 94.1,
        communicationScore: 90.3,
        conflictResolution: 95.7,
        productivity: 89.6,
        satisfaction: 93.2,
        retention: 96.8,
        projects: 5,
        status: 'excellent',
        trends: {
          healthScore: +4.3,
          collaboration: +6.1,
          communication: +3.7,
          productivity: +2.8
        },
        members: [
          { id: 10, name: 'Dr. Michael Thompson', role: 'Data Science Lead', satisfaction: 95.7, performance: 94.2 },
          { id: 11, name: 'Anna Kowalski', role: 'ML Engineer', satisfaction: 91.3, performance: 90.8 },
          { id: 12, name: 'James Wilson', role: 'Data Analyst', satisfaction: 92.8, performance: 91.4 }
        ],
        recentActivity: [
          { type: 'innovation', description: 'New ML model deployed successfully', timestamp: '3 hours ago' },
          { type: 'collaboration', description: 'Cross-functional project initiated', timestamp: '1 day ago' },
          { type: 'learning', description: 'Team skill development session', timestamp: '4 days ago' }
        ]
      }
    ],
    metrics: {
      communication: {
        responseTime: 2.3,
        messageVolume: 1247,
        meetingEfficiency: 87.4,
        feedbackQuality: 91.2
      },
      collaboration: {
        crossTeamProjects: 34,
        knowledgeSharing: 89.7,
        peerSupport: 92.1,
        teamCohesion: 88.9
      },
      performance: {
        goalAchievement: 94.2,
        deadlineAdherence: 91.7,
        qualityScore: 89.3,
        innovationIndex: 86.8
      },
      wellbeing: {
        stressLevels: 23.4,
        workLifeBalance: 87.6,
        jobSatisfaction: 91.2,
        burnoutRisk: 12.8
      }
    }
  });

  const tabs = [
    { id: 'overview', label: 'Analytics Overview', icon: BarChart3 },
    { id: 'teams', label: 'Team Performance', icon: Users },
    { id: 'relationships', label: 'Relationship Mapping', icon: Network },
    { id: 'communication', label: 'Communication Analysis', icon: MessageCircle },
    { id: 'insights', label: 'AI Insights', icon: Brain },
    { id: 'reports', label: 'Custom Reports', icon: FileText }
  ];

  const timeframes = [
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' },
    { value: '1y', label: 'Last Year' }
  ];

  const metrics = [
    { value: 'overall', label: 'Overall Health' },
    { value: 'communication', label: 'Communication' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'productivity', label: 'Productivity' },
    { value: 'wellbeing', label: 'Wellbeing' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'needs-attention': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (trend < 0) return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Teams</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalTeams}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+12% from last quarter</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Health Score</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.teamHealthScore}%</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+8.3% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Collaboration Index</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.collaborationIndex}%</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Network className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+15.7% collaboration boost</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Productivity Index</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.productivityIndex}%</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+11.2% productivity gain</span>
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Health Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Team Health Trends</h3>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LineChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive health trend visualization</p>
            </div>
          </div>
        </div>

        {/* Team Performance Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Distribution</h3>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Team performance breakdown</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Teams */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Teams</h3>
          <Trophy className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {analyticsData.teams
            .sort((a, b) => b.healthScore - a.healthScore)
            .slice(0, 3)
            .map((team, index) => (
              <div key={team.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-yellow-100 text-yellow-800' :
                    index === 1 ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    <span className="text-sm font-bold">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{team.name}</p>
                    <p className="text-sm text-gray-500">{team.department} • {team.size} members</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{team.healthScore}%</p>
                  <p className="text-sm text-gray-500">health score</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const renderTeamsTab = () => (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Team Performance</h2>
          <p className="text-gray-600">Detailed analytics for individual team performance and health</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {timeframes.map(timeframe => (
              <option key={timeframe.value} value={timeframe.value}>{timeframe.label}</option>
            ))}
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {analyticsData.teams.map((team) => (
          <div key={team.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Team Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                  <p className="text-sm text-gray-500">{team.department} • {team.size} members • Led by {team.lead}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(team.status)}`}>
                  {team.status.replace('-', ' ')}
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Health Score</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{team.healthScore}%</p>
                  {getTrendIcon(team.trends.healthScore)}
                  <span className={`text-xs ${team.trends.healthScore > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.trends.healthScore > 0 ? '+' : ''}{team.trends.healthScore}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Collaboration</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{team.collaborationIndex}%</p>
                  {getTrendIcon(team.trends.collaboration)}
                  <span className={`text-xs ${team.trends.collaboration > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.trends.collaboration > 0 ? '+' : ''}{team.trends.collaboration}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Communication</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{team.communicationScore}%</p>
                  {getTrendIcon(team.trends.communication)}
                  <span className={`text-xs ${team.trends.communication > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.trends.communication > 0 ? '+' : ''}{team.trends.communication}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Productivity</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{team.productivity}%</p>
                  {getTrendIcon(team.trends.productivity)}
                  <span className={`text-xs ${team.trends.productivity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.trends.productivity > 0 ? '+' : ''}{team.trends.productivity}%
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-600">Satisfaction</span>
                  <span className="text-xs text-gray-900">{team.satisfaction}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${team.satisfaction}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-600">Retention</span>
                  <span className="text-xs text-gray-900">{team.retention}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${team.retention}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border-t border-gray-100 pt-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Recent Activity</p>
              <div className="space-y-2">
                {team.recentActivity.slice(0, 2).map((activity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'milestone' ? 'bg-green-500' :
                      activity.type === 'issue' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}></div>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                    <span className="text-xs text-gray-400">{activity.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mt-4">
              <button 
                onClick={() => setSelectedTeam(team)}
                className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 inline mr-1" />
                View Details
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <BarChart3 className="h-4 w-4 inline mr-1" />
                Analytics
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Details Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTeam.name}</h2>
                    <p className="text-gray-600">{selectedTeam.department} • {selectedTeam.size} members • Led by {selectedTeam.lead}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTeam(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Team Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">Health Score</p>
                      <p className="text-2xl font-bold text-blue-900">{selectedTeam.healthScore}%</p>
                    </div>
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">Collaboration</p>
                      <p className="text-2xl font-bold text-green-900">{selectedTeam.collaborationIndex}%</p>
                    </div>
                    <Network className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-600">Communication</p>
                      <p className="text-2xl font-bold text-purple-900">{selectedTeam.communicationScore}%</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-600">Productivity</p>
                      <p className="text-2xl font-bold text-yellow-900">{selectedTeam.productivity}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="space-y-3">
                  {selectedTeam.members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">Satisfaction: {member.satisfaction}%</p>
                        <p className="text-sm text-gray-500">Performance: {member.performance}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {selectedTeam.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'milestone' ? 'bg-green-500' :
                        activity.type === 'issue' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.description}</p>
                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderRelationshipsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Relationship Mapping</h2>
          <p className="text-gray-600">Visual network analysis of team relationships and collaboration patterns</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Network className="h-4 w-4 mr-2" />
          Generate Map
        </button>
      </div>

      {/* Relationship Network Visualization */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Relationship Network</h3>
        <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Network className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Interactive relationship network visualization</p>
            <p className="text-gray-400 text-sm">Showing connections, collaboration strength, and communication patterns</p>
          </div>
        </div>
      </div>

      {/* Relationship Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connection Strength</h3>
          <div className="space-y-3">
            {[
              { teams: 'Product Dev ↔ Data Science', strength: 94.2, color: 'bg-green-500' },
              { teams: 'Marketing ↔ Customer Success', strength: 87.6, color: 'bg-blue-500' },
              { teams: 'Product Dev ↔ Marketing', strength: 82.1, color: 'bg-yellow-500' }
            ].map((connection, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">{connection.teams}</span>
                  <span className="text-sm text-gray-900">{connection.strength}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${connection.color} h-2 rounded-full`} 
                    style={{ width: `${connection.strength}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Collaboration Frequency</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Patterns</h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunicationTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Communication Analysis</h2>
          <p className="text-gray-600">Comprehensive analysis of team communication patterns and effectiveness</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <MessageCircle className="h-4 w-4 mr-2" />
          Communication Report
        </button>
      </div>

      {/* Communication Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.metrics.communication.responseTime}h</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Message Volume</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.metrics.communication.messageVolume.toLocaleString()}</p>
            </div>
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Meeting Efficiency</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.metrics.communication.meetingEfficiency}%</p>
            </div>
            <Video className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Feedback Quality</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.metrics.communication.feedbackQuality}%</p>
            </div>
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Communication Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Volume Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <LineChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderInsightsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Insights</h2>
          <p className="text-gray-600">Dr. Love AI-powered insights and recommendations for team optimization</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Brain className="h-4 w-4 mr-2" />
          Generate Insights
        </button>
      </div>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Lightbulb className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Optimization Opportunities</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Improve Customer Success Team Communication',
                description: 'AI detected 23% slower response times. Recommend communication training.',
                priority: 'high',
                impact: '+15% efficiency'
              },
              {
                title: 'Enhance Cross-Team Collaboration',
                description: 'Product Dev and Marketing teams show collaboration potential.',
                priority: 'medium',
                impact: '+8% innovation'
              },
              {
                title: 'Optimize Meeting Schedules',
                description: 'Data Science team has 34% meeting overlap inefficiency.',
                priority: 'low',
                impact: '+5% productivity'
              }
            ].map((insight, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{insight.title}</h4>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                    insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                <p className="text-sm font-medium text-blue-600">Expected Impact: {insight.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Trophy className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Success Patterns</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                pattern: 'High-performing teams have 2.3x more peer feedback',
                teams: ['Product Development', 'Data Science'],
                recommendation: 'Implement peer feedback system across all teams'
              },
              {
                pattern: 'Teams with weekly 1:1s show 18% higher satisfaction',
                teams: ['Product Development'],
                recommendation: 'Standardize weekly 1:1 meetings'
              },
              {
                pattern: 'Cross-functional projects boost innovation by 24%',
                teams: ['Data Science', 'Product Development'],
                recommendation: 'Create more cross-team collaboration opportunities'
              }
            ].map((pattern, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">{pattern.pattern}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Observed in: {pattern.teams.join(', ')}
                </p>
                <p className="text-sm text-blue-600">{pattern.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Brain className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Predictive Analytics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Team Health Forecast</h4>
            <p className="text-sm text-gray-600">87.3% → 91.7% projected improvement over next quarter</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Retention Prediction</h4>
            <p className="text-sm text-gray-600">96.2% retention rate predicted with current interventions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="h-8 w-8 text-yellow-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Performance Outlook</h4>
            <p className="text-sm text-gray-600">12% productivity increase expected with recommended changes</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Custom Reports</h2>
          <p className="text-gray-600">Generate and schedule custom analytics reports for stakeholders</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Report
        </button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Executive Summary',
            description: 'High-level team health and performance overview',
            frequency: 'Monthly',
            recipients: 'C-Suite, VPs',
            icon: Briefcase
          },
          {
            title: 'Team Performance Deep Dive',
            description: 'Detailed analysis of individual team metrics',
            frequency: 'Weekly',
            recipients: 'Team Leads, Managers',
            icon: BarChart3
          },
          {
            title: 'Communication Analysis',
            description: 'Communication patterns and effectiveness metrics',
            frequency: 'Bi-weekly',
            recipients: 'HR, Team Leads',
            icon: MessageCircle
          },
          {
            title: 'Wellness & Satisfaction Report',
            description: 'Employee wellbeing and satisfaction trends',
            frequency: 'Monthly',
            recipients: 'HR, Wellness Team',
            icon: Heart
          },
          {
            title: 'Collaboration Network Map',
            description: 'Visual representation of team relationships',
            frequency: 'Quarterly',
            recipients: 'Leadership Team',
            icon: Network
          },
          {
            title: 'Predictive Analytics Report',
            description: 'AI-powered insights and future projections',
            frequency: 'Monthly',
            recipients: 'Strategy Team',
            icon: Brain
          }
        ].map((report, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <report.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Frequency:</span>
                <span className="text-xs text-gray-900">{report.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Recipients:</span>
                <span className="text-xs text-gray-900">{report.recipients}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
                Generate
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Team Relationship Analytics</h1>
              <p className="text-gray-600">Comprehensive team dynamics and collaboration analysis platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{analyticsData.overview.totalTeams} Teams Monitored</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">TA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'teams' && renderTeamsTab()}
        {activeTab === 'relationships' && renderRelationshipsTab()}
        {activeTab === 'communication' && renderCommunicationTab()}
        {activeTab === 'insights' && renderInsightsTab()}
        {activeTab === 'reports' && renderReportsTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love Team Analytics</p>
                <p className="text-sm opacity-90">AI-powered team relationship and performance analytics</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Team Analytics Platform v2.0</p>
              <p className="text-xs opacity-75">Advanced AI insights for optimal team performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRelationshipAnalytics;

