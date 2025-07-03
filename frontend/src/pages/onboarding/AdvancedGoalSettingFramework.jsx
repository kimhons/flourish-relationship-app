import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Brain, 
  Users, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Star,
  Award,
  Lightbulb,
  Zap,
  ArrowRight,
  Plus,
  Edit3,
  Trash2,
  Filter,
  Search,
  BarChart3,
  PieChart,
  Activity,
  Flag,
  Compass,
  Rocket,
  Shield,
  Heart,
  DollarSign,
  Home,
  Briefcase,
  BookOpen,
  Dumbbell,
  MapPin,
  Camera,
  Music,
  Palette,
  Coffee,
  Plane,
  Gift,
  MessageCircle,
  Eye,
  EyeOff,
  Download,
  Share2,
  Copy,
  MoreVertical
} from 'lucide-react';

const AdvancedGoalSettingFramework = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [selectedFramework, setSelectedFramework] = useState('smart');
  const [goals, setGoals] = useState([]);
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');

  // Goal frameworks
  const frameworks = [
    {
      id: 'smart',
      name: 'SMART Goals',
      description: 'Specific, Measurable, Achievable, Relevant, Time-bound',
      icon: Target,
      color: 'bg-blue-500',
      criteria: [
        { name: 'Specific', description: 'Clear and well-defined objective' },
        { name: 'Measurable', description: 'Quantifiable progress indicators' },
        { name: 'Achievable', description: 'Realistic and attainable' },
        { name: 'Relevant', description: 'Aligned with relationship values' },
        { name: 'Time-bound', description: 'Clear deadline or timeframe' }
      ],
      bestFor: 'Concrete, actionable relationship improvements',
      examples: [
        'Have a 30-minute deep conversation every Sunday for 3 months',
        'Plan and execute 2 date nights per month for the next 6 months',
        'Complete couples therapy sessions weekly for 12 weeks'
      ]
    },
    {
      id: 'okr',
      name: 'OKR (Objectives & Key Results)',
      description: 'Ambitious objectives with measurable key results',
      icon: Rocket,
      color: 'bg-purple-500',
      criteria: [
        { name: 'Objective', description: 'Inspirational and qualitative goal' },
        { name: 'Key Results', description: '3-5 measurable outcomes' },
        { name: 'Ambitious', description: 'Stretch goals that inspire growth' },
        { name: 'Transparent', description: 'Shared and visible progress' },
        { name: 'Quarterly', description: 'Regular review and adjustment' }
      ],
      bestFor: 'Ambitious relationship transformation goals',
      examples: [
        'Objective: Become exceptional communicators\nKR1: Reduce conflicts by 50%\nKR2: Increase satisfaction scores to 9/10\nKR3: Complete advanced communication course',
        'Objective: Build unshakeable trust\nKR1: Share vulnerabilities weekly\nKR2: Keep 100% of commitments\nKR3: Complete trust-building exercises'
      ]
    },
    {
      id: 'bhag',
      name: 'BHAG (Big Hairy Audacious Goals)',
      description: 'Bold, long-term vision that inspires action',
      icon: Flag,
      color: 'bg-red-500',
      criteria: [
        { name: 'Bold', description: 'Daring and ambitious vision' },
        { name: 'Clear', description: 'Easy to understand and communicate' },
        { name: 'Compelling', description: 'Emotionally engaging and inspiring' },
        { name: 'Long-term', description: '10-25 year time horizon' },
        { name: 'Achievable', description: 'Difficult but possible with effort' }
      ],
      bestFor: 'Life-changing relationship visions',
      examples: [
        'Create a marriage that serves as a model for other couples',
        'Build a family legacy of love and emotional intelligence',
        'Become relationship mentors who help 1000+ couples thrive'
      ]
    },
    {
      id: 'grow',
      name: 'GROW Model',
      description: 'Goal, Reality, Options, Way forward coaching approach',
      icon: Compass,
      color: 'bg-green-500',
      criteria: [
        { name: 'Goal', description: 'What do you want to achieve?' },
        { name: 'Reality', description: 'What is the current situation?' },
        { name: 'Options', description: 'What could you do?' },
        { name: 'Way forward', description: 'What will you do?' },
        { name: 'Review', description: 'Regular progress evaluation' }
      ],
      bestFor: 'Exploratory goal setting and problem-solving',
      examples: [
        'Improving intimacy through structured exploration',
        'Navigating major life transitions together',
        'Resolving recurring relationship challenges'
      ]
    },
    {
      id: 'wheel',
      name: 'Wheel of Life',
      description: 'Holistic life balance assessment and goal setting',
      icon: PieChart,
      color: 'bg-orange-500',
      criteria: [
        { name: 'Balance', description: 'Multiple life areas consideration' },
        { name: 'Visual', description: 'Clear representation of current state' },
        { name: 'Holistic', description: 'Interconnected life domains' },
        { name: 'Prioritized', description: 'Focus on lowest-scoring areas' },
        { name: 'Integrated', description: 'Goals support overall life vision' }
      ],
      bestFor: 'Comprehensive life and relationship balance',
      examples: [
        'Balancing career growth with relationship time',
        'Improving health while strengthening partnership',
        'Integrating social life with couple time'
      ]
    }
  ];

  // Goal categories
  const categories = [
    { id: 'all', name: 'All Goals', icon: Target, color: 'bg-gray-500' },
    { id: 'communication', name: 'Communication', icon: MessageCircle, color: 'bg-blue-500' },
    { id: 'intimacy', name: 'Intimacy', icon: Heart, color: 'bg-pink-500' },
    { id: 'trust', name: 'Trust', icon: Shield, color: 'bg-green-500' },
    { id: 'growth', name: 'Growth', icon: TrendingUp, color: 'bg-purple-500' },
    { id: 'fun', name: 'Fun & Adventure', icon: Star, color: 'bg-yellow-500' },
    { id: 'financial', name: 'Financial', icon: DollarSign, color: 'bg-emerald-500' },
    { id: 'health', name: 'Health', icon: Dumbbell, color: 'bg-red-500' },
    { id: 'career', name: 'Career', icon: Briefcase, color: 'bg-indigo-500' },
    { id: 'family', name: 'Family', icon: Users, color: 'bg-orange-500' },
    { id: 'home', name: 'Home & Living', icon: Home, color: 'bg-teal-500' }
  ];

  // Sample goals data
  useEffect(() => {
    setGoals([
      {
        id: 1,
        title: "Improve Daily Communication",
        description: "Establish consistent, meaningful daily check-ins to strengthen our emotional connection",
        category: "communication",
        framework: "smart",
        timeframe: "short",
        priority: "high",
        status: "active",
        progress: 65,
        createdDate: "2025-06-01",
        targetDate: "2025-09-01",
        criteria: {
          specific: "Have 15-minute daily check-ins every evening",
          measurable: "Track completion rate and satisfaction scores",
          achievable: "Realistic given our current schedules",
          relevant: "Directly improves relationship satisfaction",
          timeBound: "3-month commitment with weekly reviews"
        },
        keyResults: [
          { id: 1, description: "Complete 90% of daily check-ins", target: 90, current: 65, unit: "%" },
          { id: 2, description: "Achieve 8/10 satisfaction rating", target: 8, current: 7.2, unit: "/10" },
          { id: 3, description: "Reduce communication conflicts", target: 50, current: 30, unit: "% reduction" }
        ],
        milestones: [
          { id: 1, title: "First week consistency", date: "2025-06-08", completed: true },
          { id: 2, title: "One month milestone", date: "2025-07-01", completed: true },
          { id: 3, title: "Mid-point review", date: "2025-07-15", completed: false },
          { id: 4, title: "Final assessment", date: "2025-09-01", completed: false }
        ],
        insights: [
          "Evening check-ins work better than morning ones",
          "Weekend conversations tend to be longer and deeper",
          "Consistency improves when we set phone reminders"
        ],
        challenges: [
          "Busy work schedules sometimes interfere",
          "Need to avoid turning check-ins into problem-solving sessions"
        ]
      },
      {
        id: 2,
        title: "Plan Dream European Trip",
        description: "Research, plan, and book our anniversary trip to Europe for next year",
        category: "fun",
        framework: "smart",
        timeframe: "medium",
        priority: "medium",
        status: "active",
        progress: 40,
        createdDate: "2025-05-15",
        targetDate: "2026-05-15",
        criteria: {
          specific: "Plan 2-week European trip visiting 4 countries",
          measurable: "Complete all bookings and create detailed itinerary",
          achievable: "Within our budget and time constraints",
          relevant: "Celebrates our anniversary and shared love of travel",
          timeBound: "Trip planned for May 2026, bookings by December 2025"
        },
        keyResults: [
          { id: 1, description: "Save $8,000 for trip", target: 8000, current: 3200, unit: "$" },
          { id: 2, description: "Book flights and accommodations", target: 100, current: 25, unit: "%" },
          { id: 3, description: "Create detailed itinerary", target: 100, current: 60, unit: "%" }
        ],
        milestones: [
          { id: 1, title: "Destination research complete", date: "2025-06-30", completed: true },
          { id: 2, title: "Budget planning finished", date: "2025-07-31", completed: false },
          { id: 3, title: "Flights booked", date: "2025-10-01", completed: false },
          { id: 4, title: "All accommodations secured", date: "2025-12-01", completed: false }
        ],
        insights: [
          "Shoulder season travel offers better prices",
          "Booking accommodations early provides more options",
          "Creating a shared Pinterest board helps with planning"
        ],
        challenges: [
          "Balancing must-see sights with relaxation time",
          "Coordinating time off work for both partners"
        ]
      },
      {
        id: 3,
        title: "Build Emergency Fund Together",
        description: "Establish a solid financial foundation with 6 months of expenses saved",
        category: "financial",
        framework: "smart",
        timeframe: "long",
        priority: "high",
        status: "active",
        progress: 25,
        createdDate: "2025-04-01",
        targetDate: "2026-04-01",
        criteria: {
          specific: "Save $30,000 in emergency fund (6 months expenses)",
          measurable: "Track monthly savings and account balance",
          achievable: "Save $2,500 per month through budget optimization",
          relevant: "Provides financial security and reduces stress",
          timeBound: "12-month timeline with quarterly reviews"
        },
        keyResults: [
          { id: 1, description: "Reach $30,000 savings target", target: 30000, current: 7500, unit: "$" },
          { id: 2, description: "Maintain monthly savings rate", target: 2500, current: 2200, unit: "$/month" },
          { id: 3, description: "Reduce unnecessary expenses", target: 20, current: 12, unit: "% reduction" }
        ],
        milestones: [
          { id: 1, title: "First $5,000 saved", date: "2025-06-01", completed: true },
          { id: 2, title: "Reach $15,000 milestone", date: "2025-10-01", completed: false },
          { id: 3, title: "Hit $25,000 mark", date: "2026-02-01", completed: false },
          { id: 4, title: "Complete $30,000 goal", date: "2026-04-01", completed: false }
        ],
        insights: [
          "Automatic transfers make saving easier",
          "Tracking expenses reveals surprising spending patterns",
          "Celebrating milestones keeps motivation high"
        ],
        challenges: [
          "Unexpected expenses can derail progress",
          "Balancing saving with enjoying life now"
        ]
      }
    ]);
  }, []);

  const timeframes = [
    { id: 'all', name: 'All Timeframes' },
    { id: 'short', name: 'Short-term (< 6 months)' },
    { id: 'medium', name: 'Medium-term (6-18 months)' },
    { id: 'long', name: 'Long-term (18+ months)' }
  ];

  const priorities = [
    { id: 'low', name: 'Low', color: 'bg-gray-100 text-gray-800' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'high', name: 'High', color: 'bg-red-100 text-red-800' }
  ];

  const statuses = [
    { id: 'planning', name: 'Planning', color: 'bg-blue-100 text-blue-800' },
    { id: 'active', name: 'Active', color: 'bg-green-100 text-green-800' },
    { id: 'paused', name: 'Paused', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'completed', name: 'Completed', color: 'bg-purple-100 text-purple-800' },
    { id: 'cancelled', name: 'Cancelled', color: 'bg-gray-100 text-gray-800' }
  ];

  const filteredGoals = goals.filter(goal => {
    const matchesCategory = selectedCategory === 'all' || goal.category === selectedCategory;
    const matchesTimeframe = selectedTimeframe === 'all' || goal.timeframe === selectedTimeframe;
    const matchesSearch = goal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         goal.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTimeframe && matchesSearch;
  });

  const getGoalStats = () => {
    const totalGoals = goals.length;
    const activeGoals = goals.filter(g => g.status === 'active').length;
    const completedGoals = goals.filter(g => g.status === 'completed').length;
    const averageProgress = goals.length > 0 
      ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)
      : 0;

    return { totalGoals, activeGoals, completedGoals, averageProgress };
  };

  const stats = getGoalStats();

  const renderFrameworkSelector = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Goal-Setting Framework</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {frameworks.map(framework => {
          const Icon = framework.icon;
          return (
            <div
              key={framework.id}
              onClick={() => setSelectedFramework(framework.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedFramework === framework.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`h-10 w-10 ${framework.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{framework.name}</h4>
                  <p className="text-xs text-gray-600">{framework.description}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{framework.bestFor}</p>
              <div className="text-xs text-gray-500">
                {framework.criteria.length} criteria
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderGoalsOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Goals</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalGoals}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Goals</p>
              <p className="text-2xl font-bold text-green-600">{stats.activeGoals}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-purple-600">{stats.completedGoals}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Progress</p>
              <p className="text-2xl font-bold text-orange-600">{stats.averageProgress}%</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Framework Selector */}
      {renderFrameworkSelector()}

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeframes.map(timeframe => (
                <option key={timeframe.id} value={timeframe.id}>{timeframe.name}</option>
              ))}
            </select>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search goals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={() => setShowCreateGoal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Goal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredGoals.map(goal => {
          const category = categories.find(c => c.id === goal.category);
          const priority = priorities.find(p => p.id === goal.priority);
          const status = statuses.find(s => s.id === goal.status);
          const Icon = category?.icon || Target;
          
          return (
            <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`h-10 w-10 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priority?.color}`}>
                        {priority?.name}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status?.color}`}>
                        {status?.name}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{goal.description}</p>
              
              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              {/* Key Results Preview */}
              {goal.keyResults && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Results</p>
                  <div className="space-y-1">
                    {goal.keyResults.slice(0, 2).map(kr => (
                      <div key={kr.id} className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 truncate">{kr.description}</span>
                        <span className="text-gray-500 ml-2">
                          {kr.current}/{kr.target} {kr.unit}
                        </span>
                      </div>
                    ))}
                    {goal.keyResults.length > 2 && (
                      <p className="text-xs text-gray-500">+{goal.keyResults.length - 2} more</p>
                    )}
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Due: {goal.targetDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>Created: {goal.createdDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                    <Edit3 className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics</span>
                  </button>
                </div>
                <button
                  onClick={() => setSelectedGoal(goal)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredGoals.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No goals found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' || selectedTimeframe !== 'all'
              ? 'Try adjusting your filters or search terms.'
              : 'Create your first goal to get started.'
            }
          </p>
          <button
            onClick={() => setShowCreateGoal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Goal
          </button>
        </div>
      )}
    </div>
  );

  const renderFrameworkDetails = () => {
    const framework = frameworks.find(f => f.id === selectedFramework);
    if (!framework) return null;

    const Icon = framework.icon;

    return (
      <div className="space-y-6">
        {/* Framework Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`h-16 w-16 ${framework.color} rounded-xl flex items-center justify-center`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{framework.name}</h2>
              <p className="text-gray-600">{framework.description}</p>
              <p className="text-sm text-blue-600 mt-1">Best for: {framework.bestFor}</p>
            </div>
          </div>

          {/* Criteria */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Framework Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {framework.criteria.map((criterion, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">{criterion.name}</h4>
                  <p className="text-sm text-gray-600">{criterion.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Goals</h3>
            <div className="space-y-3">
              {framework.examples.map((example, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 whitespace-pre-line">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Create Goal with Framework */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Create Goal with {framework.name}</h3>
            <button
              onClick={() => setShowCreateGoal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Create Goal</span>
            </button>
          </div>
          <p className="text-gray-600">
            Use the {framework.name} framework to create structured, achievable relationship goals 
            that align with your values and vision.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Advanced Goal Setting Framework</h1>
                <p className="text-sm text-gray-600">Sophisticated goal management with proven methodologies</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{stats.activeGoals} active goals</span>
              </div>
              <button
                onClick={() => setShowCreateGoal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Goal</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('goals')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'goals'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Goals
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'frameworks'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Frameworks
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'goals' && renderGoalsOverview()}
        {activeTab === 'frameworks' && renderFrameworkDetails()}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Goal Analytics Coming Soon</h3>
            <p className="text-gray-600">Advanced analytics and insights for your goal progress</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedGoalSettingFramework;

