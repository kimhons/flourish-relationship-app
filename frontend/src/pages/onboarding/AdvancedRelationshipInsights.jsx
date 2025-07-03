import React, { useState, useEffect } from 'react';
import { 
  Brain, TrendingUp, AlertTriangle, CheckCircle, 
  Target, Lightbulb, Calendar, Clock, Users,
  BarChart3, PieChart, Activity, Zap, Heart,
  ArrowUp, ArrowDown, Minus, Eye, Settings,
  BookOpen, MessageSquare, Phone, Video,
  Filter, Search, Download, Share2, Bell
} from 'lucide-react';

const AdvancedRelationshipInsights = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedInsightType, setSelectedInsightType] = useState('all');
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);

  // Advanced relationship insights data
  const relationshipInsights = [
    {
      id: 1,
      type: 'pattern',
      category: 'Communication',
      title: 'Evening Communication Peak',
      description: 'You and your partner communicate most effectively between 7-9 PM',
      confidence: 92,
      impact: 'high',
      trend: 'improving',
      actionable: true,
      timeframe: '30 days',
      data: {
        peak_hours: ['19:00', '20:00', '21:00'],
        effectiveness_score: 8.7,
        frequency_increase: 23
      },
      recommendations: [
        'Schedule important conversations during this window',
        'Use this time for relationship check-ins',
        'Avoid difficult topics outside these hours'
      ]
    },
    {
      id: 2,
      type: 'behavioral',
      category: 'Conflict Resolution',
      title: 'Cooling-Off Period Effectiveness',
      description: 'Taking 20-minute breaks during disagreements improves resolution by 67%',
      confidence: 88,
      impact: 'high',
      trend: 'stable',
      actionable: true,
      timeframe: '60 days',
      data: {
        optimal_break_time: 20,
        success_rate_improvement: 67,
        stress_reduction: 45
      },
      recommendations: [
        'Implement 20-minute cooling-off periods',
        'Use break time for individual reflection',
        'Return with specific solutions, not blame'
      ]
    },
    {
      id: 3,
      type: 'predictive',
      category: 'Relationship Health',
      title: 'Stress Impact Prediction',
      description: 'Work stress levels predict relationship satisfaction with 84% accuracy',
      confidence: 84,
      impact: 'medium',
      trend: 'concerning',
      actionable: true,
      timeframe: '90 days',
      data: {
        correlation_strength: 0.84,
        stress_threshold: 7.2,
        satisfaction_drop: 28
      },
      recommendations: [
        'Monitor work stress levels actively',
        'Implement stress-reduction techniques',
        'Communicate work challenges with partner'
      ]
    },
    {
      id: 4,
      type: 'opportunity',
      category: 'Intimacy',
      title: 'Weekend Connection Opportunity',
      description: 'Saturday mornings show highest potential for meaningful connection',
      confidence: 76,
      impact: 'medium',
      trend: 'improving',
      actionable: true,
      timeframe: '45 days',
      data: {
        optimal_time: 'Saturday 9-11 AM',
        connection_score: 9.1,
        availability_match: 89
      },
      recommendations: [
        'Plan special Saturday morning activities',
        'Create phone-free morning rituals',
        'Use this time for deeper conversations'
      ]
    },
    {
      id: 5,
      type: 'warning',
      category: 'Communication',
      title: 'Digital Communication Imbalance',
      description: 'Text-to-voice communication ratio suggests potential misunderstanding risk',
      confidence: 71,
      impact: 'low',
      trend: 'declining',
      actionable: true,
      timeframe: '14 days',
      data: {
        text_percentage: 78,
        voice_percentage: 22,
        misunderstanding_risk: 34
      },
      recommendations: [
        'Increase voice and video calls',
        'Use voice messages for emotional topics',
        'Schedule regular face-to-face conversations'
      ]
    }
  ];

  const insightCategories = [
    { value: 'all', label: 'All Insights', count: 5 },
    { value: 'communication', label: 'Communication', count: 2 },
    { value: 'conflict-resolution', label: 'Conflict Resolution', count: 1 },
    { value: 'intimacy', label: 'Intimacy', count: 1 },
    { value: 'relationship-health', label: 'Relationship Health', count: 1 }
  ];

  const insightTypes = [
    { value: 'pattern', label: 'Behavioral Patterns', icon: Activity, color: 'blue' },
    { value: 'predictive', label: 'Predictive Analysis', icon: Brain, color: 'purple' },
    { value: 'opportunity', label: 'Growth Opportunities', icon: TrendingUp, color: 'green' },
    { value: 'warning', label: 'Early Warnings', icon: AlertTriangle, color: 'orange' },
    { value: 'behavioral', label: 'Behavioral Insights', icon: Users, color: 'indigo' }
  ];

  const getInsightIcon = (type) => {
    const typeConfig = insightTypes.find(t => t.value === type);
    return typeConfig ? typeConfig.icon : Brain;
  };

  const getInsightColor = (type) => {
    const typeConfig = insightTypes.find(t => t.value === type);
    return typeConfig ? typeConfig.color : 'gray';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return ArrowUp;
      case 'declining': return ArrowDown;
      case 'concerning': return AlertTriangle;
      default: return Minus;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving': return 'text-green-600';
      case 'declining': return 'text-red-600';
      case 'concerning': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getImpactBadge = (impact) => {
    const impactConfig = {
      high: { color: 'bg-red-100 text-red-700', text: 'High Impact' },
      medium: { color: 'bg-yellow-100 text-yellow-700', text: 'Medium Impact' },
      low: { color: 'bg-green-100 text-green-700', text: 'Low Impact' }
    };
    return impactConfig[impact] || impactConfig.medium;
  };

  const filteredInsights = relationshipInsights.filter(insight => {
    const matchesCategory = selectedInsightType === 'all' || 
                           insight.category.toLowerCase().includes(selectedInsightType.toLowerCase());
    return matchesCategory;
  });

  const renderInsightCard = (insight) => {
    const IconComponent = getInsightIcon(insight.type);
    const TrendIcon = getTrendIcon(insight.trend);
    const impactBadge = getImpactBadge(insight.impact);
    const color = getInsightColor(insight.type);
    
    return (
      <div key={insight.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-${color}-100`}>
              <IconComponent className={`w-6 h-6 text-${color}-600`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{insight.title}</h3>
              <p className="text-sm text-gray-600">{insight.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${impactBadge.color}`}>
              {impactBadge.text}
            </span>
            <div className={`flex items-center ${getTrendColor(insight.trend)}`}>
              <TrendIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{insight.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Target className="w-4 h-4 mr-1" />
              {insight.confidence}% confidence
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {insight.timeframe}
            </span>
          </div>
          {insight.actionable && (
            <span className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Actionable
            </span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedInsight(insight)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            View Details
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            Apply Insights
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Advanced Relationship Insights
              </h1>
              <p className="text-gray-600">
                AI-powered analysis of your relationship patterns and personalized recommendations
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Insight Type Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {insightTypes.map((type) => {
              const IconComponent = type.icon;
              const isSelected = selectedInsightType === type.value || 
                               (selectedInsightType === 'all' && type.value === 'pattern');
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedInsightType(type.value)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    isSelected
                      ? `border-${type.color}-500 bg-${type.color}-50 text-${type.color}-700`
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {insightCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedInsightType(category.value)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedInsightType === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {filteredInsights.map(renderInsightCard)}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions Based on Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-6 h-6 text-purple-600 mr-3" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Schedule Check-in</div>
                <div className="text-sm text-gray-600">Based on communication patterns</div>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Try Suggestion</div>
                <div className="text-sm text-gray-600">Apply recommended activities</div>
              </div>
            </button>
            
            <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Bell className="w-6 h-6 text-blue-600 mr-3" />
              <div className="text-left">
                <div className="font-medium text-gray-900">Set Reminders</div>
                <div className="text-sm text-gray-600">Get notified about optimal times</div>
              </div>
            </button>
          </div>
        </div>

        {/* Detailed Insight Modal */}
        {selectedInsight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const IconComponent = getInsightIcon(selectedInsight.type);
                      const color = getInsightColor(selectedInsight.type);
                      return (
                        <div className={`p-3 rounded-lg bg-${color}-100`}>
                          <IconComponent className={`w-6 h-6 text-${color}-600`} />
                        </div>
                      );
                    })()}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedInsight.title}</h2>
                      <p className="text-gray-600">{selectedInsight.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedInsight(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Insight Details</h3>
                    <p className="text-gray-700 mb-4">{selectedInsight.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Confidence Level:</span>
                        <span className="font-medium">{selectedInsight.confidence}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Impact Level:</span>
                        <span className="font-medium capitalize">{selectedInsight.impact}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trend:</span>
                        <span className="font-medium capitalize">{selectedInsight.trend}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Analysis Period:</span>
                        <span className="font-medium">{selectedInsight.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Data Points</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedInsight.data).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/_/g, ' ')}:</span>
                          <span className="font-medium">
                            {Array.isArray(value) ? value.join(', ') : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Recommended Actions</h3>
                  <div className="space-y-3">
                    {selectedInsight.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedInsight(null)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <button className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Apply Recommendations
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedRelationshipInsights;

