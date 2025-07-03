import React, { useState, useEffect } from 'react';
import { 
  Brain, Settings, User, Heart, Target, Zap,
  TrendingUp, BarChart3, Clock, Calendar, Star,
  CheckCircle, AlertTriangle, Info, Lightbulb,
  Sliders, ToggleLeft, ToggleRight, Eye, EyeOff,
  Bell, Volume2, VolumeX, Smartphone, Monitor,
  Palette, Layout, Filter, Search, Bookmark,
  MessageSquare, Video, Music, Coffee, Book
} from 'lucide-react';

const PersonalizationEngine = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [preferences, setPreferences] = useState({
    contentTypes: ['articles', 'videos', 'exercises'],
    categories: ['communication', 'intimacy', 'wellness'],
    difficulty: 'intermediate',
    sessionLength: 'medium',
    reminderFrequency: 'daily',
    notificationTime: '19:00',
    theme: 'light',
    language: 'english',
    privacy: 'balanced'
  });
  
  const [learningData, setLearningData] = useState({
    totalInteractions: 1247,
    favoriteContentType: 'videos',
    averageSessionTime: '23 minutes',
    preferredTime: 'Evening (7-9 PM)',
    completionRate: 87,
    engagementScore: 92
  });

  const [personalizedRecommendations, setPersonalizedRecommendations] = useState([
    {
      id: 1,
      type: 'content',
      title: 'Communication Masterclass',
      reason: 'Based on your high engagement with communication content',
      confidence: 94,
      category: 'Communication',
      estimatedTime: '45 min'
    },
    {
      id: 2,
      type: 'activity',
      title: 'Evening Gratitude Practice',
      reason: 'Matches your preferred evening schedule',
      confidence: 89,
      category: 'Wellness',
      estimatedTime: '15 min'
    },
    {
      id: 3,
      type: 'feature',
      title: 'Couple\'s Journal',
      reason: 'You enjoy reflective activities',
      confidence: 76,
      category: 'Personal Growth',
      estimatedTime: '10 min daily'
    }
  ]);

  const contentTypeOptions = [
    { id: 'articles', label: 'Articles', icon: Book, description: 'In-depth written content' },
    { id: 'videos', label: 'Videos', icon: Video, description: 'Visual learning experiences' },
    { id: 'audio', label: 'Audio', icon: Music, description: 'Podcasts and guided sessions' },
    { id: 'exercises', label: 'Exercises', icon: Heart, description: 'Interactive activities' },
    { id: 'games', label: 'Games', icon: Zap, description: 'Fun relationship games' },
    { id: 'workshops', label: 'Workshops', icon: User, description: 'Live learning sessions' }
  ];

  const categoryOptions = [
    { id: 'communication', label: 'Communication', color: 'blue' },
    { id: 'intimacy', label: 'Intimacy', color: 'pink' },
    { id: 'wellness', label: 'Wellness', color: 'green' },
    { id: 'conflict-resolution', label: 'Conflict Resolution', color: 'orange' },
    { id: 'personal-growth', label: 'Personal Growth', color: 'purple' },
    { id: 'date-ideas', label: 'Date Ideas', color: 'red' },
    { id: 'trust-building', label: 'Trust Building', color: 'indigo' },
    { id: 'family-planning', label: 'Family Planning', color: 'yellow' }
  ];

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleContentTypeToggle = (typeId) => {
    setPreferences(prev => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(typeId)
        ? prev.contentTypes.filter(id => id !== typeId)
        : [...prev.contentTypes, typeId]
    }));
  };

  const handleCategoryToggle = (categoryId) => {
    setPreferences(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Personalization Score */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Personalization Score</h2>
            <p className="text-purple-100">
              How well we understand your preferences
            </p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold">{learningData.engagementScore}%</div>
            <div className="text-purple-200">Excellent Match</div>
          </div>
        </div>
      </div>

      {/* Learning Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">What We've Learned About You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Video className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Favorite Content</h4>
            <p className="text-gray-600 text-sm">{learningData.favoriteContentType}</p>
          </div>
          
          <div className="text-center">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Session Length</h4>
            <p className="text-gray-600 text-sm">{learningData.averageSessionTime}</p>
          </div>
          
          <div className="text-center">
            <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Best Time</h4>
            <p className="text-gray-600 text-sm">{learningData.preferredTime}</p>
          </div>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personalized for You</h3>
        <div className="space-y-4">
          {personalizedRecommendations.map((rec) => (
            <div key={rec.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.type === 'content' ? 'bg-blue-100 text-blue-700' :
                      rec.type === 'activity' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {rec.type}
                    </span>
                    <span className="text-xs text-gray-500">{rec.category}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{rec.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{rec.reason}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Target className="w-3 h-3 mr-1" />
                      {rec.confidence}% match
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {rec.estimatedTime}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-8">
      {/* Content Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Preferences</h3>
        
        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Preferred Content Types</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentTypeOptions.map((type) => {
              const IconComponent = type.icon;
              const isSelected = preferences.contentTypes.includes(type.id);
              return (
                <button
                  key={type.id}
                  onClick={() => handleContentTypeToggle(type.id)}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className={`w-5 h-5 ${isSelected ? 'text-purple-600' : 'text-gray-400'}`} />
                    <span className="font-medium">{type.label}</span>
                  </div>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Favorite Categories</h4>
          <div className="flex flex-wrap gap-3">
            {categoryOptions.map((category) => {
              const isSelected = preferences.categories.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryToggle(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSelected
                      ? `bg-${category.color}-100 text-${category.color}-700 border border-${category.color}-300`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <select
              value={preferences.difficulty}
              onChange={(e) => handlePreferenceChange('difficulty', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="mixed">Mixed Levels</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Session Length
            </label>
            <select
              value={preferences.sessionLength}
              onChange={(e) => handlePreferenceChange('sessionLength', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="short">Short (5-15 min)</option>
              <option value="medium">Medium (15-30 min)</option>
              <option value="long">Long (30+ min)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reminder Frequency
            </label>
            <select
              value={preferences.reminderFrequency}
              onChange={(e) => handlePreferenceChange('reminderFrequency', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="none">No reminders</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom schedule</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Notification Time
            </label>
            <input
              type="time"
              value={preferences.notificationTime}
              onChange={(e) => handlePreferenceChange('notificationTime', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Push Notifications</h4>
              <p className="text-sm text-gray-600">Receive notifications on your device</p>
            </div>
            <button className="text-purple-600">
              <ToggleRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Email Notifications</h4>
              <p className="text-sm text-gray-600">Receive weekly summaries via email</p>
            </div>
            <button className="text-gray-400">
              <ToggleLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Sound Notifications</h4>
              <p className="text-sm text-gray-600">Play sounds for notifications</p>
            </div>
            <button className="text-purple-600">
              <ToggleRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Interface Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Interface Preferences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <select
              value={preferences.theme}
              onChange={(e) => handlePreferenceChange('theme', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto (system)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              value={preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLearning = () => (
    <div className="space-y-8">
      {/* Learning Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Learning Progress</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{learningData.totalInteractions}</div>
            <div className="text-sm text-gray-600">Total Interactions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{learningData.completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{learningData.engagementScore}%</div>
            <div className="text-sm text-gray-600">Engagement Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">23</div>
            <div className="text-sm text-gray-600">Days Active</div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Content Understanding</span>
              <span className="text-sm text-gray-600">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Preference Accuracy</span>
              <span className="text-sm text-gray-600">87%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Timing Optimization</span>
              <span className="text-sm text-gray-600">94%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">How We Learn About You</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Content Interactions</div>
                <div className="text-sm text-gray-600">What you view, like, and complete</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Time Patterns</div>
                <div className="text-sm text-gray-600">When you're most active and engaged</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Feedback & Ratings</div>
                <div className="text-sm text-gray-600">Your explicit preferences and ratings</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Goal Progress</div>
                <div className="text-sm text-gray-600">How you work toward relationship goals</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Search Behavior</div>
                <div className="text-sm text-gray-600">What you search for and explore</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-gray-900">Session Duration</div>
                <div className="text-sm text-gray-600">How long you engage with content</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Privacy & Data Control</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Personalization Learning</h4>
              <p className="text-sm text-gray-600">Allow the system to learn from your behavior</p>
            </div>
            <button className="text-purple-600">
              <ToggleRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Anonymous Analytics</h4>
              <p className="text-sm text-gray-600">Help improve the platform with anonymous data</p>
            </div>
            <button className="text-purple-600">
              <ToggleRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Data Export</h4>
              <p className="text-sm text-gray-600">Download your personalization data</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Export Data
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Reset Learning</h4>
              <p className="text-sm text-gray-600">Clear all learned preferences and start fresh</p>
            </div>
            <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Personalization Engine
          </h1>
          <p className="text-gray-600">
            Customize your Flourish experience with AI-powered personalization
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Overview', icon: Brain },
            { id: 'preferences', label: 'Preferences', icon: Settings },
            { id: 'learning', label: 'Learning Data', icon: BarChart3 }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'preferences' && renderPreferences()}
        {activeTab === 'learning' && renderLearning()}

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationEngine;

