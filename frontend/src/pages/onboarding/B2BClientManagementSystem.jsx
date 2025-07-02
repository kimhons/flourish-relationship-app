import React, { useState, useEffect } from 'react';
import { 
  Building2, Users, Calendar, DollarSign, TrendingUp, 
  Settings, Phone, Mail, MapPin, Globe, Star,
  Plus, Edit, Trash2, Eye, MoreHorizontal, Search,
  Filter, Download, Upload, RefreshCw, AlertCircle,
  CheckCircle, Clock, Target, BarChart3, PieChart,
  FileText, Briefcase, Award, Shield, Zap,
  ArrowUp, ArrowDown, ArrowRight, Minus,
  UserPlus, UserMinus, UserCheck, Activity
} from 'lucide-react';

const B2BClientManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterIndustry, setFilterIndustry] = useState('all');

  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'TechCorp Global',
      industry: 'Technology',
      size: 'Large',
      employees: 2847,
      status: 'active',
      tier: 'enterprise',
      contractValue: 284700,
      startDate: '2024-01-15',
      renewalDate: '2025-01-15',
      satisfaction: 96.2,
      growth: 18.4,
      contact: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@techcorp.com',
        phone: '+1 (555) 123-4567',
        title: 'Chief People Officer'
      },
      address: {
        street: '123 Tech Street',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        country: 'USA'
      },
      metrics: {
        activeUsers: 2847,
        monthlyUsage: 89.4,
        supportTickets: 12,
        lastActivity: '2 hours ago'
      },
      features: ['Advanced Analytics', 'Custom Branding', 'API Access', 'Priority Support'],
      notes: 'Excellent client with high engagement. Considering expansion to additional departments.'
    },
    {
      id: 2,
      name: 'HealthPlus Systems',
      industry: 'Healthcare',
      size: 'Medium',
      employees: 1923,
      status: 'active',
      tier: 'professional',
      contractValue: 192300,
      startDate: '2024-03-01',
      renewalDate: '2025-03-01',
      satisfaction: 94.8,
      growth: 22.1,
      contact: {
        name: 'Dr. Michael Chen',
        email: 'michael.chen@healthplus.com',
        phone: '+1 (555) 234-5678',
        title: 'Director of Employee Wellness'
      },
      address: {
        street: '456 Health Avenue',
        city: 'Boston',
        state: 'MA',
        zip: '02101',
        country: 'USA'
      },
      metrics: {
        activeUsers: 1923,
        monthlyUsage: 92.1,
        supportTickets: 8,
        lastActivity: '1 day ago'
      },
      features: ['Team Analytics', 'Wellness Programs', 'Integration Support'],
      notes: 'Healthcare-focused implementation with strong wellness program integration.'
    },
    {
      id: 3,
      name: 'Finance Solutions Inc',
      industry: 'Finance',
      size: 'Medium',
      employees: 1456,
      status: 'trial',
      tier: 'professional',
      contractValue: 145600,
      startDate: '2024-11-01',
      renewalDate: '2024-12-01',
      satisfaction: 93.7,
      growth: 15.9,
      contact: {
        name: 'Jennifer Martinez',
        email: 'jennifer.martinez@financesolutions.com',
        phone: '+1 (555) 345-6789',
        title: 'VP Human Resources'
      },
      address: {
        street: '789 Finance Plaza',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA'
      },
      metrics: {
        activeUsers: 1456,
        monthlyUsage: 87.3,
        supportTickets: 15,
        lastActivity: '4 hours ago'
      },
      features: ['Basic Analytics', 'Standard Support'],
      notes: 'Currently in trial phase. Strong potential for conversion to full enterprise plan.'
    },
    {
      id: 4,
      name: 'Manufacturing United',
      industry: 'Manufacturing',
      size: 'Large',
      employees: 3234,
      status: 'active',
      tier: 'enterprise',
      contractValue: 323400,
      startDate: '2023-09-15',
      renewalDate: '2024-09-15',
      satisfaction: 95.1,
      growth: 19.7,
      contact: {
        name: 'Robert Thompson',
        email: 'robert.thompson@manufacturing.com',
        phone: '+1 (555) 456-7890',
        title: 'Chief Human Resources Officer'
      },
      address: {
        street: '321 Industrial Way',
        city: 'Detroit',
        state: 'MI',
        zip: '48201',
        country: 'USA'
      },
      metrics: {
        activeUsers: 3234,
        monthlyUsage: 91.8,
        supportTickets: 6,
        lastActivity: '30 minutes ago'
      },
      features: ['Advanced Analytics', 'Custom Branding', 'API Access', 'Priority Support', 'Training Programs'],
      notes: 'Long-term client with excellent satisfaction. Recently renewed for another year.'
    },
    {
      id: 5,
      name: 'Retail Dynamics',
      industry: 'Retail',
      size: 'Medium',
      employees: 987,
      status: 'pending',
      tier: 'standard',
      contractValue: 98700,
      startDate: '2024-12-01',
      renewalDate: '2025-12-01',
      satisfaction: 92.4,
      growth: 25.3,
      contact: {
        name: 'Lisa Wang',
        email: 'lisa.wang@retaildynamics.com',
        phone: '+1 (555) 567-8901',
        title: 'Director of People Operations'
      },
      address: {
        street: '654 Retail Boulevard',
        city: 'Chicago',
        state: 'IL',
        zip: '60601',
        country: 'USA'
      },
      metrics: {
        activeUsers: 987,
        monthlyUsage: 85.6,
        supportTickets: 18,
        lastActivity: '1 week ago'
      },
      features: ['Team Analytics', 'Standard Support'],
      notes: 'Pending contract signature. Retail-focused implementation with seasonal considerations.'
    }
  ]);

  const [clientActivities, setClientActivities] = useState([
    { id: 1, clientId: 1, type: 'login', description: 'Sarah Johnson logged in', timestamp: '2 hours ago' },
    { id: 2, clientId: 2, type: 'support', description: 'Support ticket created', timestamp: '4 hours ago' },
    { id: 3, clientId: 1, type: 'usage', description: 'High usage spike detected', timestamp: '6 hours ago' },
    { id: 4, clientId: 3, type: 'trial', description: 'Trial period extended', timestamp: '1 day ago' },
    { id: 5, clientId: 4, type: 'renewal', description: 'Contract renewed successfully', timestamp: '2 days ago' }
  ]);

  const tabs = [
    { id: 'clients', label: 'Client Directory', icon: Building2 },
    { id: 'onboarding', label: 'Client Onboarding', icon: UserPlus },
    { id: 'contracts', label: 'Contract Management', icon: FileText },
    { id: 'analytics', label: 'Client Analytics', icon: BarChart3 },
    { id: 'support', label: 'Support & Success', icon: Award },
    { id: 'billing', label: 'Billing & Revenue', icon: DollarSign }
  ];

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'education', label: 'Education' }
  ];

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'trial', label: 'Trial' },
    { value: 'pending', label: 'Pending' },
    { value: 'inactive', label: 'Inactive' }
  ];

  const tiers = [
    { value: 'standard', label: 'Standard', color: 'bg-gray-100 text-gray-800' },
    { value: 'professional', label: 'Professional', color: 'bg-blue-100 text-blue-800' },
    { value: 'enterprise', label: 'Enterprise', color: 'bg-purple-100 text-purple-800' }
  ];

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || client.status === filterStatus;
    const matchesIndustry = filterIndustry === 'all' || client.industry.toLowerCase() === filterIndustry;
    
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'trial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTierColor = (tier) => {
    const tierObj = tiers.find(t => t.value === tier);
    return tierObj ? tierObj.color : 'bg-gray-100 text-gray-800';
  };

  const renderClientsTab = () => (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Directory</h2>
          <p className="text-gray-600">Manage and monitor all enterprise clients</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Upload className="h-4 w-4 mr-2" />
            Import Clients
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
          <button 
            onClick={() => setShowClientModal(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search clients, contacts, or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>{status.label}</option>
            ))}
          </select>
          <select 
            value={filterIndustry} 
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {industries.map(industry => (
              <option key={industry.value} value={industry.value}>{industry.label}</option>
            ))}
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            {/* Client Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                  {client.status}
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Client Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Active Users</p>
                <p className="text-lg font-semibold text-gray-900">{client.employees.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Contract Value</p>
                <p className="text-lg font-semibold text-gray-900">${(client.contractValue / 1000).toFixed(0)}K</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Satisfaction</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">{client.satisfaction}%</p>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${client.satisfaction}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Growth</p>
                <div className="flex items-center space-x-1">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <p className="text-lg font-semibold text-green-600">{client.growth}%</p>
                </div>
              </div>
            </div>

            {/* Tier Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTierColor(client.tier)}`}>
                {client.tier.charAt(0).toUpperCase() + client.tier.slice(1)}
              </span>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-100 pt-4 mb-4">
              <p className="text-sm font-medium text-gray-900">{client.contact.name}</p>
              <p className="text-xs text-gray-500">{client.contact.title}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Mail className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-600">{client.contact.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-600">{client.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedClient(client)}
                className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100"
              >
                <Eye className="h-4 w-4 inline mr-1" />
                View Details
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                <Edit className="h-4 w-4 inline mr-1" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Client Details Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedClient.name}</h2>
                    <p className="text-gray-600">{selectedClient.industry} • {selectedClient.size} Enterprise</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <Minus className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">Active Users</p>
                      <p className="text-2xl font-bold text-blue-900">{selectedClient.metrics.activeUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">Monthly Usage</p>
                      <p className="text-2xl font-bold text-green-900">{selectedClient.metrics.monthlyUsage}%</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-600">Support Tickets</p>
                      <p className="text-2xl font-bold text-yellow-900">{selectedClient.metrics.supportTickets}</p>
                    </div>
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-600">Contract Value</p>
                      <p className="text-2xl font-bold text-purple-900">${(selectedClient.contractValue / 1000).toFixed(0)}K</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Contact and Address Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Contact</h3>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">{selectedClient.contact.name}</p>
                    <p className="text-sm text-gray-600">{selectedClient.contact.title}</p>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{selectedClient.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{selectedClient.contact.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Address</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p>{selectedClient.address.street}</p>
                        <p>{selectedClient.address.city}, {selectedClient.address.state} {selectedClient.address.zip}</p>
                        <p>{selectedClient.address.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features and Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Features</h3>
                  <div className="space-y-2">
                    {selectedClient.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Notes</h3>
                  <p className="text-sm text-gray-600">{selectedClient.notes}</p>
                </div>
              </div>

              {/* Contract Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contract Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Start Date</p>
                    <p className="text-sm text-gray-900">{new Date(selectedClient.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Renewal Date</p>
                    <p className="text-sm text-gray-900">{new Date(selectedClient.renewalDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tier</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTierColor(selectedClient.tier)}`}>
                      {selectedClient.tier.charAt(0).toUpperCase() + selectedClient.tier.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderOnboardingTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Onboarding</h2>
          <p className="text-gray-600">Streamlined onboarding process for new enterprise clients</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Start New Onboarding
        </button>
      </div>

      {/* Onboarding Pipeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Onboarding Pipeline</h3>
        <div className="space-y-4">
          {[
            { stage: 'Initial Contact', clients: 8, color: 'bg-blue-500' },
            { stage: 'Demo Scheduled', clients: 5, color: 'bg-yellow-500' },
            { stage: 'Proposal Sent', clients: 3, color: 'bg-orange-500' },
            { stage: 'Contract Review', clients: 2, color: 'bg-purple-500' },
            { stage: 'Implementation', clients: 1, color: 'bg-green-500' }
          ].map((stage, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                <span className="font-medium text-gray-900">{stage.stage}</span>
              </div>
              <span className="text-sm text-gray-600">{stage.clients} clients</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContractsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contract Management</h2>
          <p className="text-gray-600">Manage client contracts, renewals, and agreements</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          New Contract
        </button>
      </div>

      {/* Contract Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Contracts</p>
              <p className="text-2xl font-bold text-gray-900">247</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Renewals Due</p>
              <p className="text-2xl font-bold text-yellow-600">12</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-green-600">$2.8M</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Contract</p>
              <p className="text-2xl font-bold text-purple-600">$11.3K</p>
            </div>
            <Target className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Analytics</h2>
          <p className="text-gray-600">Comprehensive analytics and insights for client performance</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Analytics Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Growth Trends</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-16 w-16 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <PieChart className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupportTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Support & Success</h2>
          <p className="text-gray-600">Client support tickets and customer success management</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <Award className="h-4 w-4 mr-2" />
          Success Review
        </button>
      </div>

      {/* Support Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Tickets</p>
              <p className="text-2xl font-bold text-red-600">23</p>
            </div>
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-blue-600">2.3h</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction</p>
              <p className="text-2xl font-bold text-green-600">94.7%</p>
            </div>
            <Star className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Score</p>
              <p className="text-2xl font-bold text-purple-600">8.9/10</p>
            </div>
            <Award className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Billing & Revenue</h2>
          <p className="text-gray-600">Revenue tracking, billing management, and financial analytics</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          <DollarSign className="h-4 w-4 mr-2" />
          Generate Invoice
        </button>
      </div>

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-green-600">$2.8M</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-2 flex items-center">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+23.4% from last month</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Outstanding</p>
              <p className="text-2xl font-bold text-yellow-600">$156K</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Collection Rate</p>
              <p className="text-2xl font-bold text-blue-600">97.8%</p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Churn Rate</p>
              <p className="text-2xl font-bold text-red-600">2.3%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-red-600" />
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
              <h1 className="text-3xl font-bold text-gray-900">B2B Client Management</h1>
              <p className="text-gray-600">Comprehensive enterprise client lifecycle management system</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">247 Active Clients</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">CM</span>
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
        {activeTab === 'clients' && renderClientsTab()}
        {activeTab === 'onboarding' && renderOnboardingTab()}
        {activeTab === 'contracts' && renderContractsTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
        {activeTab === 'support' && renderSupportTab()}
        {activeTab === 'billing' && renderBillingTab()}
      </div>

      {/* Dr. Love AI Integration Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Dr. Love B2B Client Management</p>
                <p className="text-sm opacity-90">Enterprise relationship solutions and client success platform</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">B2B Management System v2.0</p>
              <p className="text-xs opacity-75">Powered by advanced AI analytics and automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BClientManagementSystem;

