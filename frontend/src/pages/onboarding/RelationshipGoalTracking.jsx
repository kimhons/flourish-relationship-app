import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  Plus, 
  Edit3, 
  BarChart3, 
  Award, 
  Clock, 
  Users, 
  Heart, 
  Star,
  ArrowRight,
  Filter,
  Search,
  MoreVertical,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const RelationshipGoalTracking = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [goals, setGoals] = useState([]);
  const [showCreateGoal, setShowCreateGoal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'communication',
    priority: 'medium',
    targetDate: '',
    milestones: [],
    isShared: true
  });

  // Sample goals data
  useEffect(() => {
    setGoals([
      {
        id: 1,
        title: "Improve Daily Communication",
        description: "Have meaningful conversations for at least 30 minutes each day",
        category: "communication",
        priority: "high",
        progress: 75,
        targetDate: "2025-08-01",
        status: "active",
        milestones: [
          { id: 1, title: "Week 1: 15 min daily", completed: true },
          { id: 2, title: "Week 2: 20 min daily", completed: true },
          { id: 3, title: "Week 3: 25 min daily", completed: true },
          { id: 4, title: "Week 4: 30 min daily", completed: false }
        ],
        createdDate: "2025-06-01",
        lastUpdated: "2025-07-02",
        isShared: true,
        completedMilestones: 3,
        totalMilestones: 4
      },
      {
        id: 2,
        title: "Plan Monthly Date Nights",
        description: "Schedule and enjoy quality date nights at least once per month",
        category: "intimacy",
        priority: "medium",
        progress: 50,
        targetDate: "2025-12-31",
        status: "active",
        milestones: [
          { id: 1, title: "Plan July date night", completed: true },
          { id: 2, title: "Plan August date night", completed: false },
          { id: 3, title: "Plan September date night", completed: false }
        ],
        createdDate: "2025-07-01",
        lastUpdated: "2025-07-03",
        isShared: true,
        completedMilestones: 1,
        totalMilestones: 3
      },
      {
        id: 3,
        title: "Learn Conflict Resolution",
        description: "Complete conflict resolution course and practice techniques",
        category: "growth",
        priority: "high",
        progress: 25,
        targetDate: "2025-09-15",
        status: "active",
        milestones: [
          { id: 1, title: "Complete Module 1", completed: true },
          { id: 2, title: "Complete Module 2", completed: false },
          { id: 3, title: "Practice techniques", completed: false },
          { id: 4, title: "Apply in real situations", completed: false }
        ],
        createdDate: "2025-06-15",
        lastUpdated: "2025-07-01",
        isShared: true,
        completedMilestones: 1,
        totalMilestones: 4
      }
    ]);
  }, []);

  const goalCategories = [
    { id: 'all', name: 'All Goals', icon: Target, color: 'bg-blue-500' },
    { id: 'communication', name: 'Communication', icon: Users, color: 'bg-green-500' },
    { id: 'intimacy', name: 'Intimacy', icon: Heart, color: 'bg-pink-500' },
    { id: 'growth', name: 'Personal Growth', icon: TrendingUp, color: 'bg-purple-500' },
    { id: 'activities', name: 'Activities', icon: Play, color: 'bg-orange-500' },
    { id: 'future', name: 'Future Planning', icon: Calendar, color: 'bg-indigo-500' }
  ];

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    paused: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    archived: 'bg-gray-100 text-gray-800'
  };

  const filteredGoals = goals.filter(goal => {
    const matchesCategory = selectedCategory === 'all' || goal.category === selectedCategory;
    const matchesSearch = goal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         goal.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCreateGoal = () => {
    if (newGoal.title && newGoal.description) {
      const goal = {
        ...newGoal,
        id: goals.length + 1,
        progress: 0,
        status: 'active',
        milestones: newGoal.milestones.map((milestone, index) => ({
          id: index + 1,
          title: milestone,
          completed: false
        })),
        createdDate: new Date().toISOString().split('T')[0],
        lastUpdated: new Date().toISOString().split('T')[0],
        completedMilestones: 0,
        totalMilestones: newGoal.milestones.length
      };
      
      setGoals([...goals, goal]);
      setNewGoal({
        title: '',
        description: '',
        category: 'communication',
        priority: 'medium',
        targetDate: '',
        milestones: [],
        isShared: true
      });
      setShowCreateGoal(false);
    }
  };

  const addMilestone = () => {
    setNewGoal({
      ...newGoal,
      milestones: [...newGoal.milestones, '']
    });
  };

  const updateMilestone = (index, value) => {
    const updatedMilestones = [...newGoal.milestones];
    updatedMilestones[index] = value;
    setNewGoal({
      ...newGoal,
      milestones: updatedMilestones
    });
  };

  const removeMilestone = (index) => {
    const updatedMilestones = newGoal.milestones.filter((_, i) => i !== index);
    setNewGoal({
      ...newGoal,
      milestones: updatedMilestones
    });
  };

  const toggleMilestone = (goalId, milestoneId) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        const updatedMilestones = goal.milestones.map(milestone => 
          milestone.id === milestoneId 
            ? { ...milestone, completed: !milestone.completed }
            : milestone
        );
        const completedCount = updatedMilestones.filter(m => m.completed).length;
        const progress = Math.round((completedCount / updatedMilestones.length) * 100);
        
        return {
          ...goal,
          milestones: updatedMilestones,
          completedMilestones: completedCount,
          progress: progress,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      return goal;
    }));
  };

  const getOverviewStats = () => {
    const totalGoals = goals.length;
    const activeGoals = goals.filter(g => g.status === 'active').length;
    const completedGoals = goals.filter(g => g.status === 'completed').length;
    const averageProgress = goals.length > 0 
      ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)
      : 0;

    return { totalGoals, activeGoals, completedGoals, averageProgress };
  };

  const stats = getOverviewStats();

  const renderOverview = () => (
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
              <Play className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-blue-600">{stats.completedGoals}</p>
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
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {goals.slice(0, 3).map(goal => (
            <div key={goal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`h-3 w-3 rounded-full ${
                  goal.progress === 100 ? 'bg-green-500' : 
                  goal.progress > 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-900">{goal.title}</p>
                  <p className="text-sm text-gray-600">Last updated: {goal.lastUpdated}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{goal.progress}%</p>
                <p className="text-sm text-gray-600">{goal.completedMilestones}/{goal.totalMilestones} milestones</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
        <div className="space-y-4">
          {goals.map(goal => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{goal.title}</span>
                <span className="text-sm text-gray-600">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGoalsList = () => (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {goalCategories.map(category => {
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
        {filteredGoals.map(goal => (
          <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[goal.priority]}`}>
                    {goal.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[goal.status]}`}>
                    {goal.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{goal.description}</p>
                
                {/* Progress Bar */}
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

                {/* Goal Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {goal.targetDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>{goal.completedMilestones}/{goal.totalMilestones}</span>
                    </div>
                  </div>
                  {goal.isShared && (
                    <div className="flex items-center space-x-1 text-blue-600">
                      <Users className="h-4 w-4" />
                      <span>Shared</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            {/* Milestones */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-900">Milestones</h4>
              {goal.milestones.slice(0, 3).map(milestone => (
                <div key={milestone.id} className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleMilestone(goal.id, milestone.id)}
                    className={`h-4 w-4 rounded border-2 flex items-center justify-center ${
                      milestone.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {milestone.completed && <CheckCircle className="h-3 w-3" />}
                  </button>
                  <span className={`text-sm ${
                    milestone.completed ? 'text-gray-500 line-through' : 'text-gray-700'
                  }`}>
                    {milestone.title}
                  </span>
                </div>
              ))}
              {goal.milestones.length > 3 && (
                <p className="text-xs text-gray-500">+{goal.milestones.length - 3} more milestones</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                  <Edit3 className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                  <BarChart3 className="h-4 w-4" />
                  <span>Details</span>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                {goal.status === 'active' ? (
                  <button className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 text-sm">
                    <Pause className="h-4 w-4" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm">
                    <Play className="h-4 w-4" />
                    <span>Resume</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGoals.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No goals found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Try adjusting your filters or search terms.'
              : 'Create your first relationship goal to get started.'
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

  const renderCreateGoal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create New Goal</h2>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goal Title</label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                placeholder="Enter a clear, specific goal title"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newGoal.description}
                onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                placeholder="Describe what you want to achieve and why it's important"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="communication">Communication</option>
                  <option value="intimacy">Intimacy</option>
                  <option value="growth">Personal Growth</option>
                  <option value="activities">Activities</option>
                  <option value="future">Future Planning</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={newGoal.priority}
                  onChange={(e) => setNewGoal({...newGoal, priority: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Date</label>
                <input
                  type="date"
                  value={newGoal.targetDate}
                  onChange={(e) => setNewGoal({...newGoal, targetDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">Milestones</label>
              <button
                onClick={addMilestone}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
              >
                <Plus className="h-4 w-4" />
                <span>Add Milestone</span>
              </button>
            </div>
            
            <div className="space-y-3">
              {newGoal.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={milestone}
                    onChange={(e) => updateMilestone(index, e.target.value)}
                    placeholder={`Milestone ${index + 1}`}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => removeMilestone(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {newGoal.milestones.length === 0 && (
                <p className="text-gray-500 text-sm italic">
                  Add milestones to break your goal into manageable steps
                </p>
              )}
            </div>
          </div>

          {/* Sharing Options */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={newGoal.isShared}
                onChange={(e) => setNewGoal({...newGoal, isShared: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Share this goal with my partner</span>
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Shared goals allow both partners to track progress and celebrate achievements together
            </p>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 flex items-center justify-end space-x-3">
          <button
            onClick={() => setShowCreateGoal(false)}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateGoal}
            disabled={!newGoal.title || !newGoal.description}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Create Goal
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
                <h1 className="text-xl font-semibold text-gray-900">Relationship Goal Tracking</h1>
                <p className="text-sm text-gray-600">Set, track, and achieve your relationship goals together</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{stats.completedGoals} goals completed</span>
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
              onClick={() => setActiveTab('goals')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'goals'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Goals
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
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'goals' && renderGoalsList()}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
            <p className="text-gray-600">Detailed analytics and insights for your relationship goals</p>
          </div>
        )}
      </div>

      {/* Create Goal Modal */}
      {showCreateGoal && renderCreateGoal()}
    </div>
  );
};

export default RelationshipGoalTracking;

