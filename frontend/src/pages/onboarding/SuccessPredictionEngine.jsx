import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  Heart, 
  Users, 
  Star, 
  Award, 
  BarChart3, 
  PieChart,
  Activity,
  Zap,
  Brain,
  Eye,
  Clock,
  Calendar,
  MapPin,
  MessageSquare,
  Phone,
  Video,
  Gift,
  Coffee,
  Camera,
  Music,
  Book,
  Gamepad2,
  Plane,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  Dumbbell,
  Palette,
  Code,
  Stethoscope,
  Scale,
  Gavel,
  Wrench,
  Scissors,
  ChefHat,
  Shirt,
  TreePine,
  Globe,
  Lightbulb,
  Settings,
  RefreshCw,
  Download,
  Filter,
  Search,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink
} from 'lucide-react';

const SuccessPredictionEngine = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overall');
  const [predictionModel, setPredictionModel] = useState('advanced');

  // Success prediction data
  const successMetrics = {
    overallSuccessRate: 87.3,
    relationshipFormationRate: 72.8,
    longTermCompatibility: 89.2,
    userSatisfactionScore: 94.6,
    averageRelationshipDuration: 18.4, // months
    marriageRate: 23.7,
    engagementRate: 45.2,
    activeUserRetention: 91.8
  };

  // Prediction factors with weights
  const predictionFactors = [
    {
      category: "Communication Patterns",
      weight: 25,
      factors: [
        { name: "Message Response Time", impact: 92, trend: "positive" },
        { name: "Conversation Quality", impact: 88, trend: "positive" },
        { name: "Emoji Usage", impact: 76, trend: "neutral" },
        { name: "Voice Message Frequency", impact: 84, trend: "positive" },
        { name: "Video Call Duration", impact: 91, trend: "positive" }
      ]
    },
    {
      category: "Compatibility Metrics",
      weight: 30,
      factors: [
        { name: "Interest Alignment", impact: 95, trend: "positive" },
        { name: "Lifestyle Compatibility", impact: 89, trend: "positive" },
        { name: "Value System Match", impact: 93, trend: "positive" },
        { name: "Future Goals Alignment", impact: 87, trend: "positive" },
        { name: "Communication Style", impact: 82, trend: "neutral" }
      ]
    },
    {
      category: "Behavioral Indicators",
      weight: 20,
      factors: [
        { name: "Profile Completion", impact: 78, trend: "positive" },
        { name: "Photo Quality", impact: 71, trend: "neutral" },
        { name: "Activity Frequency", impact: 85, trend: "positive" },
        { name: "Date Planning Initiative", impact: 88, trend: "positive" },
        { name: "Follow-through Rate", impact: 92, trend: "positive" }
      ]
    },
    {
      category: "Engagement Patterns",
      weight: 15,
      factors: [
        { name: "App Usage Consistency", impact: 79, trend: "positive" },
        { name: "Feature Utilization", impact: 73, trend: "neutral" },
        { name: "Social Integration", impact: 81, trend: "positive" },
        { name: "Feedback Participation", impact: 68, trend: "neutral" },
        { name: "Premium Feature Usage", impact: 86, trend: "positive" }
      ]
    },
    {
      category: "External Factors",
      weight: 10,
      factors: [
        { name: "Geographic Proximity", impact: 84, trend: "positive" },
        { name: "Age Compatibility", impact: 77, trend: "neutral" },
        { name: "Education Level Match", impact: 72, trend: "neutral" },
        { name: "Career Compatibility", impact: 69, trend: "neutral" },
        { name: "Social Circle Overlap", impact: 75, trend: "positive" }
      ]
    }
  ];

  // User success predictions
  const userPredictions = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      successScore: 94.2,
      relationshipProbability: 89,
      timeToMatch: "2-3 weeks",
      keyStrengths: ["High communication quality", "Strong value alignment", "Active engagement"],
      recommendations: ["Focus on outdoor activity matches", "Expand age range slightly"],
      riskFactors: ["Limited geographic range"],
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 32,
      successScore: 91.7,
      relationshipProbability: 85,
      timeToMatch: "1-2 weeks",
      keyStrengths: ["Excellent profile completion", "Consistent activity", "High response rate"],
      recommendations: ["Consider premium features", "Join group activities"],
      riskFactors: ["Work schedule conflicts"],
      lastUpdated: "1 hour ago"
    },
    {
      id: 3,
      name: "Emma Wilson",
      age: 26,
      successScore: 88.9,
      relationshipProbability: 82,
      timeToMatch: "3-4 weeks",
      keyStrengths: ["Creative interests", "Strong social skills", "Positive feedback"],
      recommendations: ["Enhance photo variety", "Participate in events"],
      riskFactors: ["Inconsistent app usage"],
      lastUpdated: "3 hours ago"
    },
    {
      id: 4,
      name: "David Rodriguez",
      age: 35,
      successScore: 86.4,
      relationshipProbability: 78,
      timeToMatch: "2-4 weeks",
      keyStrengths: ["Professional stability", "Clear intentions", "Good communication"],
      recommendations: ["Update recent photos", "Expand interest categories"],
      riskFactors: ["Limited weekend availability"],
      lastUpdated: "4 hours ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      age: 29,
      successScore: 92.8,
      relationshipProbability: 87,
      timeToMatch: "1-3 weeks",
      keyStrengths: ["High emotional intelligence", "Active lifestyle", "Strong values"],
      recommendations: ["Consider long-distance options", "Join fitness groups"],
      riskFactors: ["High standards"],
      lastUpdated: "30 minutes ago"
    }
  ];

  // Success trends data
  const successTrends = {
    daily: [
      { date: "2024-01-20", successRate: 85.2, matches: 1247, relationships: 89 },
      { date: "2024-01-21", successRate: 86.1, matches: 1289, relationships: 94 },
      { date: "2024-01-22", successRate: 87.3, matches: 1356, relationships: 102 },
      { date: "2024-01-23", successRate: 86.8, matches: 1298, relationships: 97 },
      { date: "2024-01-24", successRate: 88.1, matches: 1423, relationships: 108 },
      { date: "2024-01-25", successRate: 87.9, matches: 1387, relationships: 105 },
      { date: "2024-01-26", successRate: 89.2, matches: 1456, relationships: 112 }
    ]
  };

  // AI model performance
  const modelPerformance = {
    accuracy: 94.7,
    precision: 92.3,
    recall: 89.8,
    f1Score: 91.0,
    lastTraining: "2024-01-25",
    dataPoints: 2847392,
    modelVersion: "v3.2.1",
    confidenceLevel: 96.2
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Overall Success Rate</p>
              <p className="text-3xl font-bold">{successMetrics.overallSuccessRate}%</p>
              <p className="text-green-100 text-xs">+2.4% this month</p>
            </div>
            <Target className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100 text-sm">Relationship Formation</p>
              <p className="text-3xl font-bold">{successMetrics.relationshipFormationRate}%</p>
              <p className="text-pink-100 text-xs">+1.8% this month</p>
            </div>
            <Heart className="w-8 h-8 text-pink-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Long-term Compatibility</p>
              <p className="text-3xl font-bold">{successMetrics.longTermCompatibility}%</p>
              <p className="text-blue-100 text-xs">+3.1% this month</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">User Satisfaction</p>
              <p className="text-3xl font-bold">{successMetrics.userSatisfactionScore}%</p>
              <p className="text-purple-100 text-xs">+1.2% this month</p>
            </div>
            <Star className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Additional Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{successMetrics.marriageRate}%</p>
          <p className="text-sm text-gray-600">Marriage Rate</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{successMetrics.engagementRate}%</p>
          <p className="text-sm text-gray-600">Engagement Rate</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{successMetrics.averageRelationshipDuration}</p>
          <p className="text-sm text-gray-600">Avg Duration (months)</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
          <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{successMetrics.activeUserRetention}%</p>
          <p className="text-sm text-gray-600">User Retention</p>
        </div>
      </div>

      {/* AI Model Performance */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-500" />
          AI Model Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{modelPerformance.accuracy}%</p>
            <p className="text-sm text-gray-600">Accuracy</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{modelPerformance.precision}%</p>
            <p className="text-sm text-gray-600">Precision</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{modelPerformance.recall}%</p>
            <p className="text-sm text-gray-600">Recall</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">{modelPerformance.f1Score}%</p>
            <p className="text-sm text-gray-600">F1 Score</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Last Training:</span> {modelPerformance.lastTraining}
          </div>
          <div>
            <span className="font-medium">Data Points:</span> {modelPerformance.dataPoints.toLocaleString()}
          </div>
          <div>
            <span className="font-medium">Model Version:</span> {modelPerformance.modelVersion}
          </div>
        </div>
      </div>

      {/* Success Trends Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
          Success Rate Trends
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Success rate trends chart would be displayed here</p>
            <p className="text-sm text-gray-400">Real-time success metrics and predictions</p>
          </div>
        </div>
      </div>

      {/* Top Success Factors */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
          Top Success Factors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {predictionFactors.slice(0, 3).map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
              <div className="space-y-2">
                {category.factors.slice(0, 3).map((factor, factorIndex) => (
                  <div key={factorIndex} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{factor.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{factor.impact}%</span>
                      {factor.trend === 'positive' ? (
                        <ArrowUp className="w-4 h-4 text-green-500" />
                      ) : factor.trend === 'negative' ? (
                        <ArrowDown className="w-4 h-4 text-red-500" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPredictions = () => (
    <div className="space-y-6">
      {/* Prediction Controls */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <select
              value={predictionModel}
              onChange={(e) => setPredictionModel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="advanced">Advanced AI Model</option>
              <option value="standard">Standard Model</option>
              <option value="experimental">Experimental Model</option>
            </select>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Next 7 days</option>
              <option value="30d">Next 30 days</option>
              <option value="90d">Next 90 days</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Predictions
            </button>
          </div>
        </div>
      </div>

      {/* User Success Predictions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-500" />
          Individual User Predictions
        </h3>
        <div className="space-y-4">
          {userPredictions.map(user => (
            <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{user.name}</h4>
                  <p className="text-sm text-gray-600">Age: {user.age} • Updated {user.lastUpdated}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">{user.successScore}%</p>
                  <p className="text-xs text-gray-500">Success Score</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">{user.relationshipProbability}%</p>
                  <p className="text-xs text-gray-600">Relationship Probability</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-600">{user.timeToMatch}</p>
                  <p className="text-xs text-gray-600">Predicted Time to Match</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-lg font-bold text-purple-600">{user.keyStrengths.length}</p>
                  <p className="text-xs text-gray-600">Key Strengths</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Key Strengths
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {user.keyStrengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-1 text-blue-500" />
                    Recommendations
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {user.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-1 text-yellow-500" />
                    Risk Factors
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {user.riskFactors.map((risk, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFactors = () => (
    <div className="space-y-6">
      {/* Factor Categories */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
          Success Prediction Factors
        </h3>
        <div className="space-y-6">
          {predictionFactors.map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{category.category}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Weight:</span>
                  <span className="font-semibold text-blue-600">{category.weight}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.factors.map((factor, factorIndex) => (
                  <div key={factorIndex} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-gray-900 text-sm">{factor.name}</h5>
                      <div className="flex items-center space-x-1">
                        {factor.trend === 'positive' ? (
                          <ArrowUp className="w-4 h-4 text-green-500" />
                        ) : factor.trend === 'negative' ? (
                          <ArrowDown className="w-4 h-4 text-red-500" />
                        ) : (
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        )}
                        <span className="text-sm font-semibold">{factor.impact}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          factor.impact >= 90 ? 'bg-green-500' : 
                          factor.impact >= 80 ? 'bg-blue-500' : 
                          factor.impact >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${factor.impact}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Factor Impact Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-purple-500" />
            Factor Weight Distribution
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Factor weight distribution chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
            Impact Trends
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Factor impact trends chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Brain className="w-8 h-8 text-purple-500 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">{modelPerformance.confidenceLevel}%</p>
          <p className="text-sm text-gray-600">Model Confidence</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">2.8M+</p>
          <p className="text-sm text-gray-600">Training Data Points</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">47ms</p>
          <p className="text-sm text-gray-600">Prediction Speed</p>
        </div>
      </div>

      {/* Model Performance Details */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-500" />
          Model Performance Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Performance Metrics</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Accuracy</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${modelPerformance.accuracy}%` }}></div>
                  </div>
                  <span className="font-semibold">{modelPerformance.accuracy}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Precision</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${modelPerformance.precision}%` }}></div>
                  </div>
                  <span className="font-semibold">{modelPerformance.precision}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Recall</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${modelPerformance.recall}%` }}></div>
                  </div>
                  <span className="font-semibold">{modelPerformance.recall}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">F1 Score</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${modelPerformance.f1Score}%` }}></div>
                  </div>
                  <span className="font-semibold">{modelPerformance.f1Score}%</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Model Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Version:</span>
                <span className="font-semibold">{modelPerformance.modelVersion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Training:</span>
                <span className="font-semibold">{modelPerformance.lastTraining}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data Points:</span>
                <span className="font-semibold">{modelPerformance.dataPoints.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence Level:</span>
                <span className="font-semibold">{modelPerformance.confidenceLevel}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Rate Analytics */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
          Success Rate Analytics
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Detailed success rate analytics chart</p>
            <p className="text-sm text-gray-400">Historical trends and predictions</p>
          </div>
        </div>
      </div>

      {/* Prediction Accuracy Over Time */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-500" />
          Prediction Accuracy Over Time
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Prediction accuracy trends chart</p>
            <p className="text-sm text-gray-400">Model performance over time</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Success Prediction Engine</h1>
              <p className="text-gray-600">AI-powered relationship success prediction and optimization</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Model Accuracy</p>
                <p className="text-2xl font-bold text-green-600">{modelPerformance.accuracy}%</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Retrain Model
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
              { id: 'predictions', label: 'Predictions', icon: <Brain className="w-4 h-4" /> },
              { id: 'factors', label: 'Success Factors', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'analytics', label: 'Analytics', icon: <Activity className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'predictions' && renderPredictions()}
          {activeTab === 'factors' && renderFactors()}
          {activeTab === 'analytics' && renderAnalytics()}
        </div>
      </div>
    </div>
  );
};

export default SuccessPredictionEngine;

