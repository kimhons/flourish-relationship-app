import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Lightbulb, Beaker, Rocket, Brain, Zap, Target, Award,
  TrendingUp, TrendingDown, Activity, CheckCircle, Clock,
  Eye, Download, Upload, Settings, Share2, Play, Pause,
  GitBranch, FlaskConical, Cpu, Database, Network
} from 'lucide-react';

const AIInnovationLaboratory = () => {
  const [selectedProject, setSelectedProject] = useState('project_001');
  const [showExperimental, setShowExperimental] = useState(true);
  const [researchMode, setResearchMode] = useState('active');
  const [innovationFilter, setInnovationFilter] = useState('all');

  // Innovation projects
  const innovationProjects = [
    {
      id: 'project_001',
      name: 'Quantum-Enhanced Matching',
      category: 'quantum_ml',
      status: 'active',
      progress: 67,
      innovation_score: 9.2,
      potential_impact: 'revolutionary',
      team_size: 8,
      budget: 2500000,
      timeline: '18 months',
      last_update: '2025-01-07 14:30'
    },
    {
      id: 'project_002',
      name: 'Neuromorphic Emotion AI',
      category: 'neuromorphic',
      status: 'prototype',
      progress: 45,
      innovation_score: 8.7,
      potential_impact: 'high',
      team_size: 6,
      budget: 1800000,
      timeline: '24 months',
      last_update: '2025-01-07 10:15'
    },
    {
      id: 'project_003',
      name: 'Federated Learning Network',
      category: 'federated_learning',
      status: 'testing',
      progress: 89,
      innovation_score: 7.9,
      potential_impact: 'significant',
      team_size: 12,
      budget: 3200000,
      timeline: '12 months',
      last_update: '2025-01-07 08:00'
    },
    {
      id: 'project_004',
      name: 'Explainable AI Framework',
      category: 'explainable_ai',
      status: 'research',
      progress: 23,
      innovation_score: 8.4,
      potential_impact: 'high',
      team_size: 5,
      budget: 1200000,
      timeline: '30 months',
      last_update: '2025-01-06 16:45'
    },
    {
      id: 'project_005',
      name: 'Synthetic Data Generation',
      category: 'synthetic_data',
      status: 'completed',
      progress: 100,
      innovation_score: 7.2,
      potential_impact: 'moderate',
      team_size: 4,
      budget: 800000,
      timeline: '8 months',
      last_update: '2025-01-05 12:00'
    }
  ];

  // Innovation metrics
  const innovationMetrics = [
    {
      metric: 'Active Projects',
      value: '15',
      change: '+3',
      trend: 'up',
      description: 'Research initiatives'
    },
    {
      metric: 'Innovation Score',
      value: '8.4',
      change: '+0.6',
      trend: 'up',
      description: 'Average rating'
    },
    {
      metric: 'Patents Filed',
      value: '23',
      change: '+7',
      trend: 'up',
      description: 'This quarter'
    },
    {
      metric: 'Research Budget',
      value: '$12.5M',
      change: '+$2.1M',
      trend: 'up',
      description: 'Annual allocation'
    }
  ];

  // Research areas distribution
  const researchAreasData = [
    { name: 'Quantum ML', value: 25, color: '#8b5cf6', projects: 4 },
    { name: 'Neuromorphic AI', value: 20, color: '#3b82f6', projects: 3 },
    { name: 'Federated Learning', value: 18, color: '#10b981', projects: 3 },
    { name: 'Explainable AI', value: 15, color: '#f59e0b', projects: 2 },
    { name: 'Synthetic Data', value: 12, color: '#ef4444', projects: 2 },
    { name: 'Edge Computing', value: 10, color: '#06b6d4', projects: 1 }
  ];

  // Innovation timeline
  const innovationTimeline = [
    { quarter: 'Q1 2024', projects: 8, patents: 3, publications: 12, funding: 8.2 },
    { quarter: 'Q2 2024', projects: 10, patents: 5, publications: 15, funding: 9.1 },
    { quarter: 'Q3 2024', projects: 12, patents: 8, publications: 18, funding: 10.5 },
    { quarter: 'Q4 2024', projects: 13, patents: 12, publications: 22, funding: 11.8 },
    { quarter: 'Q1 2025', projects: 15, patents: 16, publications: 25, funding: 12.5 }
  ];

  // Breakthrough technologies
  const breakthroughTechnologies = [
    {
      technology: 'Quantum Relationship Matching',
      readiness_level: 4,
      market_potential: 9.5,
      technical_risk: 7.2,
      timeline: '2-3 years',
      investment: '$3.2M'
    },
    {
      technology: 'Neuromorphic Emotion Processing',
      readiness_level: 3,
      market_potential: 8.8,
      technical_risk: 8.1,
      timeline: '3-4 years',
      investment: '$2.8M'
    },
    {
      technology: 'Federated Privacy-Preserving AI',
      readiness_level: 7,
      market_potential: 8.2,
      technical_risk: 4.5,
      timeline: '1-2 years',
      investment: '$1.9M'
    },
    {
      technology: 'Explainable Relationship AI',
      readiness_level: 5,
      market_potential: 7.9,
      technical_risk: 5.8,
      timeline: '2-3 years',
      investment: '$2.1M'
    },
    {
      technology: 'Synthetic Relationship Data',
      readiness_level: 8,
      market_potential: 7.1,
      technical_risk: 3.2,
      timeline: '6-12 months',
      investment: '$1.2M'
    }
  ];

  // Research collaborations
  const researchCollaborations = [
    { institution: 'MIT AI Lab', projects: 3, funding: '$2.1M', duration: '24 months' },
    { institution: 'Stanford HAI', projects: 2, funding: '$1.8M', duration: '18 months' },
    { institution: 'DeepMind Research', projects: 1, funding: '$3.2M', duration: '36 months' },
    { institution: 'IBM Quantum Network', projects: 2, funding: '$2.5M', duration: '30 months' },
    { institution: 'Google AI Research', projects: 1, funding: '$1.9M', duration: '24 months' }
  ];

  // Innovation pipeline
  const innovationPipeline = [
    { stage: 'Ideation', projects: 25, success_rate: 15, avg_duration: '2 months' },
    { stage: 'Research', projects: 8, success_rate: 45, avg_duration: '8 months' },
    { stage: 'Prototype', projects: 5, success_rate: 70, avg_duration: '6 months' },
    { stage: 'Testing', projects: 3, success_rate: 85, avg_duration: '4 months' },
    { stage: 'Production', projects: 2, success_rate: 95, avg_duration: '3 months' }
  ];

  // Experimental features
  const experimentalFeatures = [
    {
      feature: 'Quantum Entanglement Matching',
      status: 'alpha',
      accuracy: 97.3,
      performance_gain: 340,
      risk_level: 'high',
      eta: '6 months'
    },
    {
      feature: 'Neuromorphic Emotion Engine',
      status: 'beta',
      accuracy: 94.8,
      performance_gain: 180,
      risk_level: 'medium',
      eta: '3 months'
    },
    {
      feature: 'Federated Learning Clusters',
      status: 'production',
      accuracy: 96.1,
      performance_gain: 120,
      risk_level: 'low',
      eta: 'deployed'
    },
    {
      feature: 'Explainable AI Dashboard',
      status: 'beta',
      accuracy: 92.7,
      performance_gain: 95,
      risk_level: 'low',
      eta: '2 months'
    }
  ];

  // Research publications
  const recentPublications = [
    {
      title: 'Quantum-Enhanced Machine Learning for Relationship Prediction',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez',
      journal: 'Nature Machine Intelligence',
      impact_factor: 9.2,
      citations: 47,
      date: '2025-01-05'
    },
    {
      title: 'Neuromorphic Computing for Real-Time Emotion Analysis',
      authors: 'Dr. Emily Watson, Dr. James Liu',
      journal: 'IEEE Transactions on Neural Networks',
      impact_factor: 8.8,
      citations: 23,
      date: '2024-12-18'
    },
    {
      title: 'Privacy-Preserving Federated Learning in Social Networks',
      authors: 'Dr. Alex Thompson, Dr. Maria Garcia',
      journal: 'ACM Computing Surveys',
      impact_factor: 7.9,
      citations: 89,
      date: '2024-12-10'
    }
  ];

  // Innovation team
  const innovationTeam = [
    { role: 'Chief Innovation Officer', count: 1, expertise: 'AI Strategy' },
    { role: 'Principal Research Scientists', count: 8, expertise: 'Deep Learning, Quantum ML' },
    { role: 'Senior AI Engineers', count: 15, expertise: 'MLOps, Production AI' },
    { role: 'Research Engineers', count: 12, expertise: 'Prototyping, Testing' },
    { role: 'Data Scientists', count: 10, expertise: 'Analytics, Modeling' },
    { role: 'PhD Researchers', count: 6, expertise: 'Theoretical Research' }
  ];

  useEffect(() => {
    // Simulate real-time innovation updates
    const interval = setInterval(() => {
      console.log('Updating innovation metrics...');
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': case 'production': return 'text-green-600 bg-green-100';
      case 'prototype': case 'beta': return 'text-blue-600 bg-blue-100';
      case 'testing': case 'alpha': return 'text-yellow-600 bg-yellow-100';
      case 'research': return 'text-purple-600 bg-purple-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': case 'production': return <CheckCircle className="w-4 h-4" />;
      case 'prototype': case 'beta': return <Beaker className="w-4 h-4" />;
      case 'testing': case 'alpha': return <Activity className="w-4 h-4" />;
      case 'research': return <Brain className="w-4 h-4" />;
      case 'completed': return <Award className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'revolutionary': return 'text-purple-600 bg-purple-100';
      case 'high': return 'text-red-600 bg-red-100';
      case 'significant': return 'text-orange-600 bg-orange-100';
      case 'moderate': return 'text-blue-600 bg-blue-100';
      case 'low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getReadinessColor = (level) => {
    if (level >= 8) return 'text-green-600';
    if (level >= 6) return 'text-blue-600';
    if (level >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredProjects = innovationProjects.filter(project => {
    if (innovationFilter === 'all') return true;
    return project.category === innovationFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              AI Innovation Laboratory
            </h1>
            <p className="text-gray-600">
              Cutting-edge AI research, experimental technologies, and breakthrough innovations for the future of relationships
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={innovationFilter}
              onChange={(e) => setInnovationFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="quantum_ml">Quantum ML</option>
              <option value="neuromorphic">Neuromorphic AI</option>
              <option value="federated_learning">Federated Learning</option>
              <option value="explainable_ai">Explainable AI</option>
              <option value="synthetic_data">Synthetic Data</option>
            </select>
            
            <button
              onClick={() => setShowExperimental(!showExperimental)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showExperimental 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Beaker className="w-4 h-4" />
              Experimental
            </button>
            
            <button
              onClick={() => setResearchMode(researchMode === 'active' ? 'archive' : 'active')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                researchMode === 'active' 
                  ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Brain className="w-4 h-4" />
              {researchMode === 'active' ? 'Active' : 'Archive'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Rocket className="w-4 h-4" />
              New Project
            </button>
          </div>
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {innovationMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {metric.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Innovation Projects */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Innovation Projects</h3>
            <div className="space-y-3">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedProject === project.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900 truncate">{project.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2 capitalize">{project.category.replace('_', ' ')}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Innovation:</span>
                      <div className="font-semibold text-purple-600">{project.innovation_score}/10</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Progress:</span>
                      <div className="font-semibold text-green-600">{project.progress}%</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(project.potential_impact)}`}>
                      {project.potential_impact} impact
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Research Areas</h3>
            <div className="space-y-3">
              {researchAreasData.map((area, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{area.name}</span>
                    <span className="text-sm text-gray-600">{area.projects} projects</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${area.value}%`,
                        backgroundColor: area.color
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{area.value}% of research focus</div>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Team */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Innovation Team</h3>
            <div className="space-y-3">
              {innovationTeam.map((member, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{member.role}</span>
                    <span className="text-lg font-bold text-purple-600">{member.count}</span>
                  </div>
                  <div className="text-sm text-gray-600">{member.expertise}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Submit Proposal
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Research Report
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <GitBranch className="w-4 h-4" />
                Collaboration Hub
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Innovation Timeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Innovation Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={innovationTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="projects" stroke="#8b5cf6" strokeWidth={2} name="Active Projects" />
                <Line yAxisId="left" type="monotone" dataKey="patents" stroke="#3b82f6" strokeWidth={2} name="Patents Filed" />
                <Line yAxisId="left" type="monotone" dataKey="publications" stroke="#10b981" strokeWidth={2} name="Publications" />
                <Line yAxisId="right" type="monotone" dataKey="funding" stroke="#f59e0b" strokeWidth={2} name="Funding ($M)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Breakthrough Technologies & Innovation Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Breakthrough Technologies</h3>
              <div className="space-y-3">
                {breakthroughTechnologies.map((tech, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="font-medium text-gray-900 mb-2">{tech.technology}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>
                        <span className="text-gray-500">Readiness:</span>
                        <div className={`font-semibold ${getReadinessColor(tech.readiness_level)}`}>
                          TRL {tech.readiness_level}/9
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Market:</span>
                        <div className="font-semibold text-green-600">{tech.market_potential}/10</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <div className="font-semibold text-blue-600">{tech.timeline}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Investment:</span>
                        <div className="font-semibold text-purple-600">{tech.investment}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Innovation Pipeline</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={innovationPipeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stage" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="projects" fill="#8b5cf6" name="Projects" />
                  <Bar yAxisId="right" dataKey="success_rate" fill="#10b981" name="Success Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Experimental Features */}
          {showExperimental && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experimental Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Performance Gain</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Risk Level</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experimentalFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{feature.feature}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                            {feature.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-purple-600 font-semibold">{feature.accuracy}%</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">+{feature.performance_gain}%</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(feature.risk_level)}`}>
                            {feature.risk_level}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-blue-600 font-semibold">{feature.eta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Research Collaborations & Publications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Collaborations</h3>
              <div className="space-y-3">
                {researchCollaborations.map((collab, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="font-medium text-gray-900 mb-2">{collab.institution}</div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Projects:</span>
                        <div className="font-semibold text-purple-600">{collab.projects}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Funding:</span>
                        <div className="font-semibold text-green-600">{collab.funding}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-semibold text-blue-600">{collab.duration}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Publications</h3>
              <div className="space-y-3">
                {recentPublications.map((pub, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="font-medium text-gray-900 mb-1 text-sm">{pub.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{pub.authors}</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Journal:</span>
                        <div className="font-semibold text-purple-600">{pub.journal}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Impact:</span>
                        <div className="font-semibold text-green-600">{pub.impact_factor}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                      <div>
                        <span className="text-gray-500">Citations:</span>
                        <div className="font-semibold text-blue-600">{pub.citations}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Date:</span>
                        <div className="font-semibold text-gray-600">{pub.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Innovation Lab Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Innovation Lab Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Research Priorities</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Quantum Computing</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Neuromorphic AI</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Explainable AI</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Resource Allocation</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Research Budget</label>
                    <input
                      type="text"
                      defaultValue="$12.5M"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                    <input
                      type="number"
                      defaultValue="52"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Innovation Metrics</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Success Threshold</label>
                    <input
                      type="number"
                      defaultValue="7.5"
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Risk Tolerance</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Update Configuration
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Export Research Plan
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Schedule Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationLaboratory;

