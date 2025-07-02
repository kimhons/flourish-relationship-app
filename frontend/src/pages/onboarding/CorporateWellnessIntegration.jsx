import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, TrendingUp, Calendar, Target, Award,
  Activity, Brain, Smile, Shield, Zap, Globe,
  BarChart3, PieChart, LineChart, Clock, CheckCircle,
  AlertTriangle, Plus, Settings, Download, Upload,
  Search, Filter, RefreshCw, Eye, Edit, MoreHorizontal,
  Building2, UserCheck, Star, ArrowUp, ArrowDown,
  Briefcase, Coffee, Home, Phone, Mail, MapPin,
  BookOpen, Headphones, Video, MessageCircle,
  Lightbulb, Compass, Puzzle, Gamepad2, Trophy
} from 'lucide-react';

const CorporateWellnessIntegration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  const [wellnessData, setWellnessData] = useState({
    overview: {
      totalEmployees: 15847,
      activeParticipants: 12678,
      programsActive: 23,
      wellnessScore: 87.4,
      engagementRate: 79.9,
      satisfactionScore: 94.2,
      roiMetric: 312
    },
    programs: [
      {
        id: 1,
        name: 'Relationship Wellness Program',
        type: 'relationship',
        participants: 3456,
        completion: 78.9,
        satisfaction: 96.2,
        impact: 'high',
        status: 'active',
        duration: '12 weeks',
        description: 'Comprehensive relationship health and communication skills development',
        features: ['Couples Coaching', 'Communication Training', 'Conflict Resolution', 'Intimacy Building'],
        metrics: {
          relationshipSatisfaction: 94.7,
          communicationImprovement: 89.3,
          conflictReduction: 76.8,
          workLifeBalance: 82.4
        }
      },
      {
        id: 2,
        name: 'Mental Health & Resilience',
        type: 'mental-health',
        participants: 4123,
        completion: 82.4,
        satisfaction: 93.8,
        impact: 'high',
        status: 'active',
        duration: '8 weeks',
        description: 'Building emotional resilience and mental wellness in the workplace',
        features: ['Stress Management', 'Mindfulness Training', 'Emotional Intelligence', 'Burnout Prevention'],
        metrics: {
          stressReduction: 67.9,
          resilienceScore: 78.3,
          productivityIncrease: 23.4,
          absenteeismReduction: 34.7
        }
      },
      {
        id: 3,
        name: 'Team Dynamics & Collaboration',
        type: 'team-building',
        participants: 2890,
        completion: 85.7,
        satisfaction: 91.5,
        impact: 'medium',
        status: 'active',
        duration: '6 weeks',
        description: 'Enhancing team relationships and collaborative effectiveness',
        features: ['Team Building', 'Trust Exercises', 'Communication Workshops', 'Leadership Development'],
        metrics: {
          teamCohesion: 88.6,
          collaborationScore: 92.1,
          leadershipEffectiveness: 79.4,
          projectSuccess: 91.8
        }
      },
      {
        id: 4,
        name: 'Work-Life Integration',
        type: 'work-life',
        participants: 2209,
        completion: 76.3,
        satisfaction: 89.7,
        impact: 'medium',
        status: 'active',
        duration: '10 weeks',
        description: 'Achieving healthy work-life balance and personal relationship management',
        features: ['Boundary Setting', 'Time Management', 'Family Relationships', 'Personal Growth'],
        metrics: {
          workLifeBalance: 85.2,
          familySatisfaction: 91.3,
          timeManagement: 78.9,
          personalGrowth: 83.7
        }
      }
    ],
    companies: [
      {
        id: 1,
        name: 'TechCorp Global',
        employees: 2847,
        participation: 89.4,
        programs: 4,
        wellnessScore: 92.3,
        roi: 340,
        industry: 'Technology'
      },
      {
        id: 2,
        name: 'HealthPlus Systems',
        employees: 1923,
        participation: 94.7,
        programs: 3,
        wellnessScore: 95.1,
        roi: 285,
        industry: 'Healthcare'
      },
      {
        id: 3,
        name: 'Finance Solutions Inc',
        employees: 1456,
        participation: 76.8,
        programs: 2,
        wellnessScore: 84.6,
        roi: 298,
        industry: 'Finance'
      }
    ]
  });

  const tabs = [
    { id: 'overview', label: 'Wellness Overview', icon: Heart },
    { id: 'programs', label: 'Wellness Programs', icon: Target },
    { id: 'analytics', label: 'Impact Analytics', icon: BarChart3 },
    { id: 'companies', label: 'Company Dashboard', icon: Building2 },
    { id: 'resources', label: 'Resources & Tools', icon: BookOpen },
    { id: 'settings', label: 'Program Settings', icon: Settings }
  ];

  const programTypes = [
    { id: 'relationship', label: 'Relationship Wellness', icon: Heart, color: 'bg-pink-100 text-pink-800' },
    { id: 'mental-health', label: 'Mental Health', icon: Brain, color: 'bg-blue-100 text-blue-800' },
    { id: 'team-building', label: 'Team Building', icon: Users, color: 'bg-green-100 text-green-800' },
    { id: 'work-life', label: 'Work-Life Balance', icon: Briefcase, color: 'bg-purple-100 text-purple-800' }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">{wellnessData.overview.totalEmployees.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+8.3% from last quarter</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Participants</p>
              <p className="text-2xl font-bold text-gray-900">{wellnessData.overview.activeParticipants.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+15.7% participation rate</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Wellness Score</p>
              <p className="text-2xl font-bold text-gray-900">{wellnessData.overview.wellnessScore}%</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+12.4% improvement</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ROI Metric</p>
              <p className="text-2xl font-bold text-gray-900">{wellnessData.overview.roiMetric}%</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+23.8% return on investment</span>
          </div>
        </div>
      </div>

      {/* Program Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Programs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Active Wellness Programs</h3>
            <Target className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {wellnessData.programs.slice(0, 4).map((program) => (
              <div key={program.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${programTypes.find(t => t.id === program.type)?.color || 'bg-gray-100'}`}>
                    {React.createElement(programTypes.find(t => t.id === program.type)?.icon || Heart, { className: "h-4 w-4" })}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{program.name}</p>
                    <p className="text-xs text-gray-500">{program.participants.toLocaleString()} participants</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{program.completion}%</p>
                  <p className="text-xs text-gray-500">completion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Engagement Metrics</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Engagement Rate</span>
                <span className="text-sm font-bold text-gray-900">{wellnessData.overview.engagementRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${wellnessData.overview.engagementRate}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Satisfaction Score</span>
                <span className="text-sm font-bold text-gray-900">{wellnessData.overview.satisfactionScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${wellnessData.overview.satisfactionScore}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Program Completion</span>
                <span className="text-sm font-bold text-gray-900">81.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '81.3%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Wellness Activity</h3>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {[
            { action: 'New program enrollment spike', company: 'TechCorp Global', time: '2 hours ago', type: 'enrollment' },
            { action: 'Wellness assessment completed', company: 'HealthPlus Systems', time: '4 hours ago', type: 'assessment' },
            { action: 'Team building session scheduled', company: 'Finance Solutions Inc', time: '6 hours ago', type: 'session' },
            { action: 'Relationship coaching milestone reached', company: 'Manufacturing United', time: '1 day ago', type: 'milestone' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'enrollment' ? 'bg-green-100' :
                  activity.type === 'assessment' ? 'bg-blue-100' :
                  activity.type === 'session' ? 'bg-purple-100' : 'bg-yellow-100'
                }`}>
                  {activity.type === 'enrollment' && <UserCheck className="h-4 w-4 text-green-600" />}
                  {activity.type === 'assessment' && <CheckCircle className="h-4 w-4 text-blue-600" />}
                  {activity.type === 'session' && <Calendar className="h-4 w-4 text-purple-600" />}
                  {activity.type === 'milestone' && <Trophy className="h-4 w-4 text-yellow-600" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.company}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgramsTab = () => (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Wellness Programs</h2>
          <p className="text-gray-600">Comprehensive corporate wellness program management</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Programs
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Program
          </button>
        </div>
      </div>

      {/* Program Type Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
            All Programs
          </button>
          {programTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button key={type.id} className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                <Icon className="h-4 w-4 mr-2" />
                {type.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {wellnessData.programs.map((program) => (
          <div key={program.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {/* Program Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${programTypes.find(t => t.id === program.type)?.color || 'bg-gray-100'}`}>
                  {React.createElement(programTypes.find(t => t.id === program.type)?.icon || Heart, { className: "h-6 w-6" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                  <p className="text-sm text-gray-500">{program.duration} • {program.participants.toLocaleString()} participants</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactColor(program.impact)}`}>
                  {program.impact} impact
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Program Description */}
            <p className="text-sm text-gray-600 mb-4">{program.description}</p>

            {/* Program Features */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Key Features:</p>
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Program Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Completion Rate</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{program.completion}%</p>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${program.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Satisfaction</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{program.satisfaction}%</p>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${program.satisfaction}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedProgram(program)}
                className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 inline mr-1" />
                View Details
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Edit className="h-4 w-4 inline mr-1" />
                Edit Program
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${programTypes.find(t => t.id === selectedProgram.type)?.color || 'bg-gray-100'}`}>
                    {React.createElement(programTypes.find(t => t.id === selectedProgram.type)?.icon || Heart, { className: "h-6 w-6" })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProgram.name}</h2>
                    <p className="text-gray-600">{selectedProgram.duration} • {selectedProgram.participants.toLocaleString()} participants</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <ArrowDown className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Program Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Object.entries(selectedProgram.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{value}%</p>
                  </div>
                ))}
              </div>

              {/* Program Description and Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Description</h3>
                  <p className="text-gray-600">{selectedProgram.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <div className="space-y-2">
                    {selectedProgram.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Impact Analytics</h2>
          <p className="text-gray-600">Comprehensive wellness program impact and ROI analysis</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={selectedTimeframe} 
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Analytics Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Wellness Score Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <LineChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Participation</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Analysis</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Satisfaction</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompaniesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Company Dashboard</h2>
          <p className="text-gray-600">Individual company wellness program performance and metrics</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Company
        </button>
      </div>

      {/* Company Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {wellnessData.companies.map((company) => (
          <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.industry}</p>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Employees</p>
                <p className="text-lg font-semibold text-gray-900">{company.employees.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Participation</p>
                <p className="text-lg font-semibold text-gray-900">{company.participation}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Wellness Score</p>
                <p className="text-lg font-semibold text-gray-900">{company.wellnessScore}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">ROI</p>
                <p className="text-lg font-semibold text-green-600">{company.roi}%</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Active Programs: {company.programs}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${company.participation}%` }}
                ></div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
                <Eye className="h-4 w-4 inline mr-1" />
                View Details
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Settings className="h-4 w-4 inline mr-1" />
                Configure
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResourcesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resources & Tools</h2>
          <p className="text-gray-600">Comprehensive wellness resources and educational materials</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Resource
        </button>
      </div>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: BookOpen, title: 'Educational Content', count: 156, color: 'bg-blue-50 text-blue-600' },
          { icon: Video, title: 'Video Library', count: 89, color: 'bg-purple-50 text-purple-600' },
          { icon: Headphones, title: 'Audio Resources', count: 67, color: 'bg-green-50 text-green-600' },
          { icon: Gamepad2, title: 'Interactive Tools', count: 34, color: 'bg-yellow-50 text-yellow-600' }
        ].map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className={`p-3 rounded-lg ${category.color} mb-4 w-fit`}>
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
            <p className="text-sm text-gray-600">{category.count} resources available</p>
          </div>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Relationship Communication Guide', type: 'PDF', downloads: 1247 },
            { title: 'Stress Management Workshop', type: 'Video', views: 3456 },
            { title: 'Team Building Activities', type: 'Interactive', participants: 892 },
            { title: 'Work-Life Balance Assessment', type: 'Tool', completions: 2134 },
            { title: 'Mindfulness Meditation Series', type: 'Audio', listens: 5678 },
            { title: 'Conflict Resolution Toolkit', type: 'PDF', downloads: 987 }
          ].map((resource, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <h4 className="font-medium text-gray-900 mb-2">{resource.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{resource.type}</span>
                <span className="text-xs text-gray-600">
                  {Object.values(resource)[2].toLocaleString()} {Object.keys(resource)[2]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Program Settings</h2>
          <p className="text-gray-600">Configure wellness program settings and preferences</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Settings className="h-4 w-4 mr-2" />
          Save Settings
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-enrollment</p>
                <p className="text-sm text-gray-600">Automatically enroll new employees in wellness programs</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Progress notifications</p>
                <p className="text-sm text-gray-600">Send progress updates to participants</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Data encryption</p>
                <p className="text-sm text-gray-600">Encrypt all wellness data at rest and in transit</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">HIPAA compliance</p>
                <p className="text-sm text-gray-600">Maintain HIPAA compliance for health data</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Compliant
              </span>
            </div>
          </div>
        </div>
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
              <h1 className="text-3xl font-bold text-gray-900">Corporate Wellness Integration</h1>
              <p className="text-gray-600">Comprehensive workplace wellness and relationship health platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-600">Wellness Score: {wellnessData.overview.wellnessScore}%</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">CW</span>
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
                      ? 'border-purple-500 text-purple-600'
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
        {activeTab === 'programs' && renderProgramsTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
        {activeTab === 'companies' && renderCompaniesTab()}
        {activeTab === 'resources' && renderResourcesTab()}
        {activeTab === 'settings' && renderSettingsTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love Corporate Wellness</p>
                <p className="text-sm opacity-90">AI-powered workplace relationship and wellness solutions</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Corporate Wellness Platform v2.0</p>
              <p className="text-xs opacity-75">Transforming workplace relationships and employee wellbeing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateWellnessIntegration;

