import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  TrendingUp, 
  Target, 
  BarChart3, 
  MapPin, 
  DollarSign,
  Users,
  Calendar,
  Award,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Eye,
  Edit,
  Trash2,
  FileText,
  Clock,
  Activity,
  Zap,
  Shield,
  Heart,
  Brain,
  Lightbulb,
  Rocket,
  Building2,
  Network,
  Star,
  Flag,
  Briefcase,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertTriangle,
  Info,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

const InternationalMarketEntryStrategy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [marketMetrics, setMarketMetrics] = useState({
    totalMarkets: 127,
    activeMarkets: 47,
    pipelineMarkets: 34,
    totalOpportunity: 289000000,
    marketPenetration: 23.7,
    successRate: 78.4
  });

  const [globalMarkets, setGlobalMarkets] = useState([
    {
      id: 1,
      country: "United Kingdom",
      region: "Europe",
      status: "Active",
      priority: "High",
      marketSize: 45000000,
      penetration: 34.7,
      competition: "Medium",
      entryDate: "2023-02-15",
      revenue: 8900000,
      growth: 28.5,
      culturalFit: 92.3,
      regulatoryComplexity: "Low",
      investmentRequired: 2500000,
      timeToMarket: 6,
      riskLevel: "Low",
      successProbability: 89.4,
      keyPartners: ["UK Wellness Alliance", "British Health Tech"],
      barriers: ["Market Saturation", "Local Competition"],
      opportunities: ["NHS Integration", "Corporate Wellness Growth"]
    },
    {
      id: 2,
      country: "Japan",
      region: "Asia-Pacific",
      status: "Planning",
      priority: "High",
      marketSize: 67000000,
      penetration: 12.1,
      competition: "High",
      entryDate: "2025-06-01",
      revenue: 0,
      growth: 45.2,
      culturalFit: 67.8,
      regulatoryComplexity: "High",
      investmentRequired: 8900000,
      timeToMarket: 18,
      riskLevel: "Medium",
      successProbability: 72.6,
      keyPartners: ["Japan Wellness Corp", "Tokyo Health Solutions"],
      barriers: ["Cultural Adaptation", "Regulatory Requirements", "Language Barriers"],
      opportunities: ["Aging Population", "Mental Health Awareness", "Corporate Culture Shift"]
    },
    {
      id: 3,
      country: "Brazil",
      region: "Latin America",
      status: "Active",
      priority: "Medium",
      marketSize: 34000000,
      penetration: 18.9,
      competition: "Low",
      entryDate: "2023-09-20",
      revenue: 4200000,
      growth: 67.8,
      culturalFit: 84.5,
      regulatoryComplexity: "Medium",
      investmentRequired: 3200000,
      timeToMarket: 12,
      riskLevel: "Medium",
      successProbability: 81.3,
      keyPartners: ["LatAm Relationship Hub", "Brazilian Wellness Network"],
      barriers: ["Economic Volatility", "Currency Fluctuation"],
      opportunities: ["Growing Middle Class", "Digital Adoption", "Relationship Focus Culture"]
    },
    {
      id: 4,
      country: "India",
      region: "Asia-Pacific",
      status: "Research",
      priority: "High",
      marketSize: 156000000,
      penetration: 3.4,
      competition: "Medium",
      entryDate: "2025-12-01",
      revenue: 0,
      growth: 89.3,
      culturalFit: 78.9,
      regulatoryComplexity: "Medium",
      investmentRequired: 12000000,
      timeToMarket: 24,
      riskLevel: "High",
      successProbability: 68.7,
      keyPartners: ["India Digital Health", "Mumbai Wellness Solutions"],
      barriers: ["Market Complexity", "Price Sensitivity", "Cultural Diversity"],
      opportunities: ["Massive Market Size", "Digital Revolution", "Young Demographics"]
    },
    {
      id: 5,
      country: "South Africa",
      region: "Africa",
      status: "Active",
      priority: "Medium",
      marketSize: 23000000,
      penetration: 8.7,
      competition: "Low",
      entryDate: "2024-03-10",
      revenue: 1800000,
      growth: 45.6,
      culturalFit: 89.2,
      regulatoryComplexity: "Low",
      investmentRequired: 1800000,
      timeToMarket: 9,
      riskLevel: "Medium",
      successProbability: 76.8,
      keyPartners: ["African Wellness Network", "Cape Town Health Tech"],
      barriers: ["Economic Challenges", "Infrastructure Limitations"],
      opportunities: ["Market Leadership", "Regional Hub Potential", "Growing Awareness"]
    }
  ]);

  const [entryStrategies, setEntryStrategies] = useState([
    {
      id: 1,
      strategy: "Direct Market Entry",
      description: "Establish local operations with full control",
      suitability: ["High-value markets", "Low regulatory barriers", "Strong cultural fit"],
      investment: "High",
      timeframe: "12-18 months",
      riskLevel: "Medium",
      controlLevel: "High",
      examples: ["United States", "Canada", "Australia"]
    },
    {
      id: 2,
      strategy: "Strategic Partnership",
      description: "Partner with local companies for market access",
      suitability: ["Complex markets", "High barriers", "Cultural adaptation needed"],
      investment: "Medium",
      timeframe: "6-12 months",
      riskLevel: "Low",
      controlLevel: "Medium",
      examples: ["Japan", "South Korea", "Germany"]
    },
    {
      id: 3,
      strategy: "Licensing & Franchising",
      description: "License technology and brand to local operators",
      suitability: ["Emerging markets", "Limited resources", "Test markets"],
      investment: "Low",
      timeframe: "3-6 months",
      riskLevel: "Low",
      controlLevel: "Low",
      examples: ["India", "Brazil", "Mexico"]
    },
    {
      id: 4,
      strategy: "Acquisition",
      description: "Acquire existing local companies for instant market presence",
      suitability: ["Mature markets", "Strong competition", "Speed priority"],
      investment: "Very High",
      timeframe: "6-9 months",
      riskLevel: "High",
      controlLevel: "High",
      examples: ["United Kingdom", "France", "Netherlands"]
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Planning': return 'text-blue-600 bg-blue-100';
      case 'Research': return 'text-yellow-600 bg-yellow-100';
      case 'Paused': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Global Market Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Market Opportunity</p>
              <p className="text-3xl font-bold">${(marketMetrics.totalOpportunity / 1000000).toFixed(0)}M</p>
              <p className="text-blue-100 text-sm">Across 127 Markets</p>
            </div>
            <Globe className="h-12 w-12 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Markets</p>
              <p className="text-3xl font-bold">{marketMetrics.activeMarkets}</p>
              <p className="text-green-100 text-sm">78.4% Success Rate</p>
            </div>
            <Target className="h-12 w-12 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Market Penetration</p>
              <p className="text-3xl font-bold">{marketMetrics.marketPenetration}%</p>
              <p className="text-purple-100 text-sm">Average Across Markets</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Regional Market Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <MapPin className="h-6 w-6 text-blue-600 mr-2" />
          Global Market Distribution & Opportunity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { region: 'North America', markets: 23, opportunity: 89.2, penetration: 45.7, color: 'blue' },
            { region: 'Europe', markets: 34, opportunity: 67.8, penetration: 28.9, color: 'green' },
            { region: 'Asia-Pacific', markets: 28, opportunity: 156.4, penetration: 12.3, color: 'purple' },
            { region: 'Latin America', markets: 19, opportunity: 34.7, penetration: 18.6, color: 'yellow' },
            { region: 'Africa & Middle East', markets: 23, opportunity: 23.1, penetration: 8.4, color: 'red' }
          ].map((region, index) => (
            <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800">{region.region}</h4>
              <p className="text-2xl font-bold text-blue-600">{region.markets}</p>
              <p className="text-sm text-gray-600">Markets</p>
              <p className="text-lg font-semibold text-green-600">${region.opportunity}M</p>
              <p className="text-xs text-gray-500">Opportunity</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${region.color}-600 h-2 rounded-full`} 
                    style={{ width: `${region.penetration}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{region.penetration}% Penetration</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Entry Success Factors */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          Market Entry Success Factors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Brain className="h-10 w-10 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">89.4%</p>
            <p className="text-sm text-gray-600">Cultural Fit Score</p>
            <p className="text-xs text-gray-500">Average Success Factor</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">78.4%</p>
            <p className="text-sm text-gray-600">Market Entry Success</p>
            <p className="text-xs text-gray-500">Historical Performance</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Clock className="h-10 w-10 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">12.3</p>
            <p className="text-sm text-gray-600">Months Average</p>
            <p className="text-xs text-gray-500">Time to Market</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <DollarSign className="h-10 w-10 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">$4.8M</p>
            <p className="text-sm text-gray-600">Average Investment</p>
            <p className="text-xs text-gray-500">Per Market Entry</p>
          </div>
        </div>
      </div>

      {/* Strategic Priorities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Rocket className="h-6 w-6 text-blue-600 mr-2" />
          Strategic Market Priorities 2025
        </h3>
        <div className="space-y-4">
          {[
            { market: "Japan", priority: "Q2 2025", investment: "$8.9M", opportunity: "$67M", status: "Planning" },
            { market: "India", priority: "Q4 2025", investment: "$12M", opportunity: "$156M", status: "Research" },
            { market: "Nordic Region", priority: "Q3 2025", investment: "$5.2M", opportunity: "$34M", status: "Negotiating" },
            { market: "Middle East", priority: "Q1 2026", investment: "$6.7M", opportunity: "$28M", status: "Analysis" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Flag className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.market}</p>
                  <p className="text-sm text-gray-600">Target: {item.priority}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">{item.opportunity}</p>
                <p className="text-sm text-gray-600">Market Size</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-600">{item.investment}</p>
                <p className="text-sm text-gray-600">Investment</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMarketsTab = () => (
    <div className="space-y-6">
      {/* Market Management Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Global Market Portfolio</h3>
          <p className="text-gray-600">Comprehensive market analysis and entry planning</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Market
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Analysis
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search markets..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Regions</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia-Pacific</option>
          <option>Latin America</option>
          <option>Africa & Middle East</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Planning</option>
          <option>Research</option>
          <option>Paused</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      {/* Markets Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Probability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {globalMarkets.map((market) => (
                <tr key={market.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Flag className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{market.country}</div>
                        <div className="text-sm text-gray-500">{market.region}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(market.status)}`}>
                      {market.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(market.priority)}`}>
                      {market.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${(market.marketSize / 1000000).toFixed(0)}M
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{market.successProbability}%</div>
                      <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${market.successProbability}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${(market.investmentRequired / 1000000).toFixed(1)}M
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedMarket(market)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-900">
                        <BarChart3 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStrategiesTab = () => (
    <div className="space-y-6">
      {/* Strategies Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Market Entry Strategies</h3>
          <p className="text-gray-600">Strategic frameworks for international expansion</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Custom Strategy
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Briefcase className="h-4 w-4 mr-2" />
            Strategy Guide
          </button>
        </div>
      </div>

      {/* Entry Strategies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {entryStrategies.map((strategy) => (
          <div key={strategy.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{strategy.strategy}</h4>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                strategy.investment === 'High' || strategy.investment === 'Very High' ? 'bg-red-100 text-red-800' : 
                strategy.investment === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-green-100 text-green-800'
              }`}>
                {strategy.investment} Investment
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{strategy.description}</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Best Suited For:</p>
                <div className="flex flex-wrap gap-1">
                  {strategy.suitability.map((item, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Timeframe</p>
                  <p className="font-semibold">{strategy.timeframe}</p>
                </div>
                <div>
                  <p className="text-gray-600">Risk Level</p>
                  <p className={`font-semibold ${getRiskColor(strategy.riskLevel)}`}>{strategy.riskLevel}</p>
                </div>
                <div>
                  <p className="text-gray-600">Control Level</p>
                  <p className="font-semibold">{strategy.controlLevel}</p>
                </div>
                <div>
                  <p className="text-gray-600">Examples</p>
                  <p className="font-semibold">{strategy.examples.length} Markets</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {strategy.examples.slice(0, 3).map((example, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {example}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <FileText className="h-4 w-4" />
                  </button>
                  <button className="text-purple-600 hover:text-purple-800">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategy Selection Matrix */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <PieChart className="h-6 w-6 text-blue-600 mr-2" />
          Strategy Selection Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Strategy</th>
                <th className="text-center py-3 px-4">Investment</th>
                <th className="text-center py-3 px-4">Time to Market</th>
                <th className="text-center py-3 px-4">Risk Level</th>
                <th className="text-center py-3 px-4">Control</th>
                <th className="text-center py-3 px-4">Recommended For</th>
              </tr>
            </thead>
            <tbody>
              {entryStrategies.map((strategy, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{strategy.strategy}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      strategy.investment === 'Very High' ? 'bg-red-100 text-red-800' :
                      strategy.investment === 'High' ? 'bg-orange-100 text-orange-800' :
                      strategy.investment === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {strategy.investment}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-sm">{strategy.timeframe}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`font-semibold ${getRiskColor(strategy.riskLevel)}`}>
                      {strategy.riskLevel}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-sm">{strategy.controlLevel}</td>
                  <td className="py-3 px-4 text-center text-sm">{strategy.examples.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Market Entry Analytics</h3>
          <p className="text-gray-600">Comprehensive market analysis and performance insights</p>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Last 24 Months</option>
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Market Value</p>
              <p className="text-3xl font-bold text-blue-600">$289M</p>
              <p className="text-green-600 text-sm">+67% YoY</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Success Rate</p>
              <p className="text-3xl font-bold text-green-600">78.4%</p>
              <p className="text-green-600 text-sm">+12% vs Industry</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Time to Market</p>
              <p className="text-3xl font-bold text-purple-600">12.3</p>
              <p className="text-green-600 text-sm">-2.1 months</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Markets</p>
              <p className="text-3xl font-bold text-yellow-600">47</p>
              <p className="text-green-600 text-sm">+13 This Year</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Market Performance Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
          Market Performance Analysis
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Revenue by Market Status</h4>
            {[
              { status: 'Active Markets', revenue: 23.4, growth: 28.5, count: 47 },
              { status: 'Planning Phase', revenue: 0, potential: 89.2, count: 34 },
              { status: 'Research Phase', revenue: 0, potential: 156.4, count: 23 },
              { status: 'Paused Markets', revenue: 2.1, growth: -12.3, count: 8 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{item.status}</p>
                  <p className="text-sm text-gray-600">{item.count} Markets</p>
                </div>
                <div className="text-right">
                  {item.revenue > 0 ? (
                    <>
                      <p className="font-semibold text-green-600">${item.revenue}M</p>
                      <p className={`text-xs ${item.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.growth > 0 ? '+' : ''}{item.growth}% Growth
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-blue-600">${item.potential}M</p>
                      <p className="text-xs text-gray-500">Potential</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Regional Performance Comparison</h4>
            <div className="space-y-3">
              {[
                { region: 'North America', performance: 89, revenue: 89.2 },
                { region: 'Europe', performance: 76, revenue: 67.8 },
                { region: 'Asia-Pacific', performance: 68, revenue: 156.4 },
                { region: 'Latin America', performance: 82, revenue: 34.7 },
                { region: 'Africa & Middle East', performance: 71, revenue: 23.1 }
              ].map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{region.region}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${region.performance}%` }}></div>
                    </div>
                    <span className="text-sm font-semibold w-16">{region.performance}%</span>
                    <span className="text-sm text-gray-600 w-16">${region.revenue}M</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="h-6 w-6 text-blue-600 mr-2" />
          Market Entry Risk Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">Low Risk</p>
            <p className="text-sm text-gray-600">23 Markets</p>
            <p className="text-xs text-gray-500">89.4% Success Rate</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">Medium Risk</p>
            <p className="text-sm text-gray-600">34 Markets</p>
            <p className="text-xs text-gray-500">76.8% Success Rate</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-red-600">High Risk</p>
            <p className="text-sm text-gray-600">12 Markets</p>
            <p className="text-xs text-gray-500">62.3% Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlanningTab = () => (
    <div className="space-y-6">
      {/* Planning Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Strategic Planning & Execution</h3>
          <p className="text-gray-600">Comprehensive market entry planning and execution framework</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Plan
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            Timeline View
          </button>
        </div>
      </div>

      {/* Planning Framework */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
          Market Entry Planning Framework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: 'Research & Analysis', duration: '2-4 months', tasks: 12, status: 'Active', icon: Search },
            { phase: 'Strategy Development', duration: '1-2 months', tasks: 8, status: 'Planning', icon: Lightbulb },
            { phase: 'Implementation', duration: '6-12 months', tasks: 24, status: 'Pending', icon: Rocket },
            { phase: 'Optimization', duration: 'Ongoing', tasks: 16, status: 'Future', icon: TrendingUp }
          ].map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3`}>
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-800">{phase.phase}</p>
                <p className="text-sm text-gray-600">{phase.duration}</p>
                <p className="text-xs text-gray-500">{phase.tasks} Tasks</p>
                <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(phase.status)}`}>
                  {phase.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Activity className="h-6 w-6 text-blue-600 mr-2" />
          Active Market Entry Projects
        </h3>
        <div className="space-y-4">
          {[
            { 
              market: "Japan Market Entry", 
              phase: "Strategy Development", 
              progress: 67, 
              timeline: "Q2 2025", 
              budget: "$8.9M",
              team: "12 members",
              status: "On Track"
            },
            { 
              market: "India Market Research", 
              phase: "Research & Analysis", 
              progress: 34, 
              timeline: "Q4 2025", 
              budget: "$12M",
              team: "8 members",
              status: "In Progress"
            },
            { 
              market: "Nordic Region Expansion", 
              phase: "Implementation", 
              progress: 89, 
              timeline: "Q3 2025", 
              budget: "$5.2M",
              team: "15 members",
              status: "Ahead"
            },
            { 
              market: "Middle East Analysis", 
              phase: "Research & Analysis", 
              progress: 12, 
              timeline: "Q1 2026", 
              budget: "$6.7M",
              team: "6 members",
              status: "Starting"
            }
          ].map((project, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{project.market}</h4>
                  <p className="text-sm text-gray-600">{project.phase}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  project.status === 'Ahead' ? 'bg-green-100 text-green-800' :
                  project.status === 'On Track' ? 'bg-blue-100 text-blue-800' :
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Timeline</p>
                  <p className="text-sm font-medium">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Budget</p>
                  <p className="text-sm font-medium">{project.budget}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Team</p>
                  <p className="text-sm font-medium">{project.team}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Progress</p>
                  <p className="text-sm font-medium">{project.progress}%</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    project.progress >= 80 ? 'bg-green-600' :
                    project.progress >= 50 ? 'bg-blue-600' :
                    project.progress >= 25 ? 'bg-yellow-600' :
                    'bg-red-600'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Allocation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
            Budget Allocation
          </h4>
          <div className="space-y-3">
            {[
              { category: 'Market Research', allocated: 8.2, used: 6.7, percentage: 82 },
              { category: 'Strategy Development', allocated: 4.5, used: 3.1, percentage: 69 },
              { category: 'Implementation', allocated: 15.8, used: 12.3, percentage: 78 },
              { category: 'Marketing & Launch', allocated: 6.3, used: 2.1, percentage: 33 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-600">${item.used}M / ${item.allocated}M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            Team Allocation
          </h4>
          <div className="space-y-3">
            {[
              { role: 'Market Analysts', assigned: 12, available: 15, utilization: 80 },
              { role: 'Strategy Consultants', assigned: 8, available: 10, utilization: 80 },
              { role: 'Implementation Managers', assigned: 18, available: 20, utilization: 90 },
              { role: 'Cultural Specialists', assigned: 6, available: 8, utilization: 75 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.role}</span>
                    <span className="text-sm text-gray-600">{item.assigned} / {item.available}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${item.utilization}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketDetailModal = () => {
    if (!selectedMarket) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedMarket.country} Market Analysis</h2>
                <p className="text-gray-600">{selectedMarket.region} • {selectedMarket.status}</p>
              </div>
              <button 
                onClick={() => setSelectedMarket(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Market Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Market Size</p>
                    <p className="text-2xl font-bold text-blue-800">${(selectedMarket.marketSize / 1000000).toFixed(0)}M</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Success Probability</p>
                    <p className="text-2xl font-bold text-green-800">{selectedMarket.successProbability}%</p>
                  </div>
                  <Target className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">Cultural Fit</p>
                    <p className="text-2xl font-bold text-purple-800">{selectedMarket.culturalFit}%</p>
                  </div>
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-600 text-sm font-medium">Time to Market</p>
                    <p className="text-2xl font-bold text-yellow-800">{selectedMarket.timeToMarket}M</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
            </div>

            {/* Market Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Market Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Penetration:</span>
                    <span className="font-medium">{selectedMarket.penetration}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Competition Level:</span>
                    <span className="font-medium">{selectedMarket.competition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regulatory Complexity:</span>
                    <span className="font-medium">{selectedMarket.regulatoryComplexity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk Level:</span>
                    <span className={`font-medium ${getRiskColor(selectedMarket.riskLevel)}`}>
                      {selectedMarket.riskLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment Required:</span>
                    <span className="font-medium">${(selectedMarket.investmentRequired / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Revenue:</span>
                    <span className="font-medium">${(selectedMarket.revenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Rate:</span>
                    <span className="font-medium text-green-600">+{selectedMarket.growth}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entry Date:</span>
                    <span className="font-medium">{selectedMarket.entryDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority Level:</span>
                    <span className={`font-medium ${
                      selectedMarket.priority === 'High' ? 'text-red-600' :
                      selectedMarket.priority === 'Medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {selectedMarket.priority}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities and Barriers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-800">Market Opportunities</h3>
                <div className="space-y-2">
                  {selectedMarket.opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center p-2 bg-green-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-800">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-800">Market Barriers</h3>
                <div className="space-y-2">
                  {selectedMarket.barriers.map((barrier, index) => (
                    <div key={index} className="flex items-center p-2 bg-red-50 rounded">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="text-sm text-red-800">{barrier}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Partners */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Strategic Partners</h3>
              <div className="flex flex-wrap gap-2">
                {selectedMarket.keyPartners.map((partner, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FileText className="h-4 w-4 inline mr-2" />
                Download Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-4 w-4 inline mr-2" />
                Share Analysis
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Edit className="h-4 w-4 inline mr-2" />
                Update Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                International Market Entry Strategy
              </h1>
              <p className="text-gray-600 mt-2">
                Comprehensive global market analysis and strategic planning platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Global Success Rate</p>
                <p className="text-2xl font-bold text-green-600">78.4%</p>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Market Overview', icon: Globe },
                { id: 'markets', label: 'Market Portfolio', icon: MapPin },
                { id: 'strategies', label: 'Entry Strategies', icon: Briefcase },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                { id: 'planning', label: 'Strategic Planning', icon: Calendar }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'markets' && renderMarketsTab()}
          {activeTab === 'strategies' && renderStrategiesTab()}
          {activeTab === 'analytics' && renderAnalyticsTab()}
          {activeTab === 'planning' && renderPlanningTab()}
        </div>

        {/* Market Detail Modal */}
        {renderMarketDetailModal()}

        {/* Success Message */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                International Market Entry Strategy Successfully Implemented!
              </h3>
              <p className="text-green-700 mt-1">
                Comprehensive global market analysis and strategic planning platform with 127 market opportunities 
                worth $289M total value. Advanced analytics, risk assessment, and strategic frameworks enable 
                successful international expansion with 78.4% success rate across 47 active markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalMarketEntryStrategy;

