import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Target, 
  Home, 
  Baby, 
  Briefcase, 
  DollarSign, 
  MapPin, 
  Heart, 
  Users, 
  BookOpen,
  Plus,
  Edit3,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Filter,
  Search,
  TrendingUp,
  Award,
  Lightbulb,
  AlertTriangle,
  MoreVertical,
  Share2,
  Download,
  Eye,
  EyeOff
} from 'lucide-react';

const FuturePlanningHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreatePlan, setShowCreatePlan] = useState(false);
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({
    title: '',
    category: 'relationship',
    timeframe: 'short',
    description: '',
    goals: [],
    milestones: []
  });

  // Future planning data
  useEffect(() => {
    setPlans([
      {
        id: 1,
        title: "Buy Our First Home",
        category: "housing",
        timeframe: "medium",
        description: "Save for and purchase our first home together",
        progress: 35,
        status: "active",
        targetDate: "2026-06-01",
        createdDate: "2025-01-15",
        goals: [
          { id: 1, title: "Save $50,000 for down payment", completed: false, progress: 40 },
          { id: 2, title: "Improve credit scores to 750+", completed: true, progress: 100 },
          { id: 3, title: "Research neighborhoods", completed: false, progress: 60 },
          { id: 4, title: "Get pre-approved for mortgage", completed: false, progress: 0 }
        ],
        milestones: [
          { id: 1, title: "Reach $20,000 savings", date: "2025-08-01", completed: true },
          { id: 2, title: "Reach $35,000 savings", date: "2025-12-01", completed: false },
          { id: 3, title: "Start house hunting", date: "2026-03-01", completed: false },
          { id: 4, title: "Make offer on house", date: "2026-05-01", completed: false }
        ],
        priority: "high",
        tags: ["savings", "investment", "milestone"]
      },
      {
        id: 2,
        title: "Start a Family",
        category: "family",
        timeframe: "medium",
        description: "Plan for and welcome our first child",
        progress: 15,
        status: "planning",
        targetDate: "2027-01-01",
        createdDate: "2025-03-01",
        goals: [
          { id: 1, title: "Complete pre-conception health checkups", completed: false, progress: 0 },
          { id: 2, title: "Create baby emergency fund", completed: false, progress: 25 },
          { id: 3, title: "Research parenting classes", completed: false, progress: 10 },
          { id: 4, title: "Prepare nursery space", completed: false, progress: 0 }
        ],
        milestones: [
          { id: 1, title: "Health consultations complete", date: "2025-09-01", completed: false },
          { id: 2, title: "Financial planning complete", date: "2025-12-01", completed: false },
          { id: 3, title: "Start trying", date: "2026-06-01", completed: false }
        ],
        priority: "high",
        tags: ["health", "financial", "preparation"]
      },
      {
        id: 3,
        title: "European Anniversary Trip",
        category: "travel",
        timeframe: "short",
        description: "Celebrate our 5th anniversary with a European vacation",
        progress: 70,
        status: "active",
        targetDate: "2025-09-15",
        createdDate: "2025-02-01",
        goals: [
          { id: 1, title: "Book flights and accommodations", completed: true, progress: 100 },
          { id: 2, title: "Plan itinerary", completed: true, progress: 100 },
          { id: 3, title: "Save for trip expenses", completed: false, progress: 80 },
          { id: 4, title: "Arrange time off work", completed: false, progress: 50 }
        ],
        milestones: [
          { id: 1, title: "Bookings confirmed", date: "2025-04-01", completed: true },
          { id: 2, title: "Savings goal reached", date: "2025-08-01", completed: false },
          { id: 3, title: "Final preparations", date: "2025-09-01", completed: false }
        ],
        priority: "medium",
        tags: ["celebration", "travel", "anniversary"]
      },
      {
        id: 4,
        title: "Career Development Goals",
        category: "career",
        timeframe: "long",
        description: "Support each other's professional growth and advancement",
        progress: 45,
        status: "active",
        targetDate: "2028-01-01",
        createdDate: "2025-01-01",
        goals: [
          { id: 1, title: "Complete advanced certifications", completed: false, progress: 60 },
          { id: 2, title: "Network with industry professionals", completed: false, progress: 30 },
          { id: 3, title: "Seek promotion opportunities", completed: false, progress: 40 },
          { id: 4, title: "Consider entrepreneurship options", completed: false, progress: 20 }
        ],
        milestones: [
          { id: 1, title: "First certification complete", date: "2025-08-01", completed: false },
          { id: 2, title: "Attend 3 industry conferences", date: "2025-12-01", completed: false },
          { id: 3, title: "Apply for senior positions", date: "2026-06-01", completed: false }
        ],
        priority: "medium",
        tags: ["professional", "growth", "income"]
      }
    ]);
  }, []);

  const categories = [
    { id: 'all', name: 'All Plans', icon: Target, color: 'bg-blue-500' },
    { id: 'relationship', name: 'Relationship', icon: Heart, color: 'bg-pink-500' },
    { id: 'housing', name: 'Housing', icon: Home, color: 'bg-green-500' },
    { id: 'family', name: 'Family', icon: Baby, color: 'bg-purple-500' },
    { id: 'career', name: 'Career', icon: Briefcase, color: 'bg-orange-500' },
    { id: 'financial', name: 'Financial', icon: DollarSign, color: 'bg-yellow-500' },
    { id: 'travel', name: 'Travel', icon: MapPin, color: 'bg-indigo-500' },
    { id: 'health', name: 'Health', icon: Users, color: 'bg-red-500' }
  ];

  const timeframes = [
    { id: 'short', name: 'Short-term (< 1 year)', color: 'bg-green-100 text-green-800' },
    { id: 'medium', name: 'Medium-term (1-5 years)', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'long', name: 'Long-term (5+ years)', color: 'bg-blue-100 text-blue-800' }
  ];

  const statusColors = {
    planning: 'bg-gray-100 text-gray-800',
    active: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    paused: 'bg-yellow-100 text-yellow-800'
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const filteredPlans = plans.filter(plan => {
    const matchesCategory = selectedCategory === 'all' || plan.category === selectedCategory;
    const matchesSearch = plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getOverviewStats = () => {
    const totalPlans = plans.length;
    const activePlans = plans.filter(p => p.status === 'active').length;
    const completedPlans = plans.filter(p => p.status === 'completed').length;
    const averageProgress = plans.length > 0 
      ? Math.round(plans.reduce((sum, plan) => sum + plan.progress, 0) / plans.length)
      : 0;

    return { totalPlans, activePlans, completedPlans, averageProgress };
  };

  const stats = getOverviewStats();

  const addGoal = () => {
    setNewPlan({
      ...newPlan,
      goals: [...newPlan.goals, '']
    });
  };

  const updateGoal = (index, value) => {
    const updatedGoals = [...newPlan.goals];
    updatedGoals[index] = value;
    setNewPlan({
      ...newPlan,
      goals: updatedGoals
    });
  };

  const removeGoal = (index) => {
    const updatedGoals = newPlan.goals.filter((_, i) => i !== index);
    setNewPlan({
      ...newPlan,
      goals: updatedGoals
    });
  };

  const handleCreatePlan = () => {
    if (newPlan.title && newPlan.description) {
      const plan = {
        ...newPlan,
        id: plans.length + 1,
        progress: 0,
        status: 'planning',
        createdDate: new Date().toISOString().split('T')[0],
        goals: newPlan.goals.filter(goal => goal.trim()).map((goal, index) => ({
          id: index + 1,
          title: goal,
          completed: false,
          progress: 0
        })),
        milestones: [],
        priority: 'medium',
        tags: []
      };
      
      setPlans([...plans, plan]);
      setNewPlan({
        title: '',
        category: 'relationship',
        timeframe: 'short',
        description: '',
        goals: [],
        milestones: []
      });
      setShowCreatePlan(false);
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Plans</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalPlans}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Plans</p>
              <p className="text-2xl font-bold text-green-600">{stats.activePlans}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-blue-600">{stats.completedPlans}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Progress</p>
              <p className="text-2xl font-bold text-purple-600">{stats.averageProgress}%</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Plans Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Plans Progress</h3>
        <div className="space-y-4">
          {plans.filter(plan => plan.status === 'active').map(plan => {
            const category = categories.find(c => c.id === plan.category);
            const Icon = category?.icon || Target;
            
            return (
              <div key={plan.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className={`h-10 w-10 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900">{plan.title}</h4>
                    <span className="text-sm text-gray-600">{plan.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${plan.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Target: {plan.targetDate}</span>
                    <span>{plan.goals.filter(g => g.completed).length}/{plan.goals.length} goals</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h3>
        <div className="space-y-3">
          {plans.flatMap(plan => 
            plan.milestones
              .filter(milestone => !milestone.completed)
              .map(milestone => ({ ...milestone, planTitle: plan.title, planCategory: plan.category }))
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 5)
          .map((milestone, index) => {
            const category = categories.find(c => c.id === milestone.planCategory);
            const Icon = category?.icon || Target;
            
            return (
              <div key={`${milestone.planTitle}-${milestone.id}`} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                <div className={`h-8 w-8 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{milestone.title}</p>
                  <p className="text-sm text-gray-600">{milestone.planTitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{milestone.date}</p>
                  <p className="text-xs text-gray-500">
                    {Math.ceil((new Date(milestone.date) - new Date()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderPlansGrid = () => (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowCreatePlan(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>New Plan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlans.map(plan => {
          const category = categories.find(c => c.id === plan.category);
          const timeframe = timeframes.find(t => t.id === plan.timeframe);
          const Icon = category?.icon || Target;
          
          return (
            <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`h-12 w-12 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${timeframe?.color || 'bg-gray-100 text-gray-800'}`}>
                        {timeframe?.name || plan.timeframe}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[plan.status]}`}>
                        {plan.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[plan.priority]}`}>
                        {plan.priority}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              
              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-600">{plan.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${plan.progress}%` }}
                  />
                </div>
              </div>

              {/* Goals Summary */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Goals</span>
                  <span className="text-sm text-gray-600">
                    {plan.goals.filter(g => g.completed).length}/{plan.goals.length} completed
                  </span>
                </div>
                <div className="space-y-1">
                  {plan.goals.slice(0, 3).map(goal => (
                    <div key={goal.id} className="flex items-center space-x-2">
                      <div className={`h-2 w-2 rounded-full ${goal.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className={`text-xs ${goal.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                        {goal.title}
                      </span>
                    </div>
                  ))}
                  {plan.goals.length > 3 && (
                    <p className="text-xs text-gray-500">+{plan.goals.length - 3} more goals</p>
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Target: {plan.targetDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>Created: {plan.createdDate}</span>
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
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPlans.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No plans found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Try adjusting your filters or search terms.'
              : 'Create your first future plan to get started.'
            }
          </p>
          <button
            onClick={() => setShowCreatePlan(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Plan
          </button>
        </div>
      )}
    </div>
  );

  const renderCreatePlan = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Future Plan</h2>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Plan Title</label>
              <input
                type="text"
                value={newPlan.title}
                onChange={(e) => setNewPlan({...newPlan, title: e.target.value})}
                placeholder="Enter a clear, specific plan title"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newPlan.description}
                onChange={(e) => setNewPlan({...newPlan, description: e.target.value})}
                placeholder="Describe what you want to achieve and why it's important"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newPlan.category}
                  onChange={(e) => setNewPlan({...newPlan, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.slice(1).map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
                <select
                  value={newPlan.timeframe}
                  onChange={(e) => setNewPlan({...newPlan, timeframe: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {timeframes.map(timeframe => (
                    <option key={timeframe.id} value={timeframe.id}>{timeframe.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">Goals</label>
              <button
                onClick={addGoal}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
              >
                <Plus className="h-4 w-4" />
                <span>Add Goal</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {newPlan.goals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => updateGoal(index, e.target.value)}
                    placeholder={`Goal ${index + 1}`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => removeGoal(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              {newPlan.goals.length === 0 && (
                <p className="text-gray-500 text-sm italic">
                  Add goals to break your plan into achievable steps
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 flex items-center justify-end space-x-3">
          <button
            onClick={() => setShowCreatePlan(false)}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreatePlan}
            disabled={!newPlan.title || !newPlan.description}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );

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
                <h1 className="text-xl font-semibold text-gray-900">Future Planning Hub</h1>
                <p className="text-sm text-gray-600">Plan and achieve your shared future together</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{stats.activePlans} active plans</span>
              </div>
              <button
                onClick={() => setShowCreatePlan(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Plan</span>
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
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'plans'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Plans
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'templates'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Plan Templates
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'plans' && renderPlansGrid()}
        {activeTab === 'templates' && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Plan Templates Coming Soon</h3>
            <p className="text-gray-600">Pre-built templates for common life goals and milestones</p>
          </div>
        )}
      </div>

      {/* Create Plan Modal */}
      {showCreatePlan && renderCreatePlan()}
    </div>
  );
};

export default FuturePlanningHub;

