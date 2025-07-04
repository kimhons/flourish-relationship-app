import React, { useState, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  FileText, Plus, Settings, Download, Share2, Eye, Save, 
  Copy, Trash2, Edit3, Calendar, Filter, BarChart3, 
  PieChart as PieChartIcon, TrendingUp, Users, Heart, 
  MessageCircle, Activity, Target, Clock, Star, Award,
  Grid, Layout, Palette, Type, Image, Table, Zap
} from 'lucide-react';

const CustomReportBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('blank');
  const [reportTitle, setReportTitle] = useState('Custom Analytics Report');
  const [reportDescription, setReportDescription] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('30d');
  const [reportElements, setReportElements] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [savedReports, setSavedReports] = useState([]);
  const [isBuilding, setIsBuilding] = useState(true);
  const reportRef = useRef(null);

  // Available report elements
  const availableElements = [
    {
      id: 'kpi_card',
      name: 'KPI Card',
      icon: Target,
      category: 'metrics',
      description: 'Display key performance indicators'
    },
    {
      id: 'line_chart',
      name: 'Line Chart',
      icon: TrendingUp,
      category: 'charts',
      description: 'Show trends over time'
    },
    {
      id: 'bar_chart',
      name: 'Bar Chart',
      icon: BarChart3,
      category: 'charts',
      description: 'Compare different categories'
    },
    {
      id: 'pie_chart',
      name: 'Pie Chart',
      icon: PieChartIcon,
      category: 'charts',
      description: 'Show proportions and percentages'
    },
    {
      id: 'data_table',
      name: 'Data Table',
      icon: Table,
      category: 'data',
      description: 'Display detailed data in table format'
    },
    {
      id: 'text_block',
      name: 'Text Block',
      icon: Type,
      category: 'content',
      description: 'Add custom text and descriptions'
    },
    {
      id: 'user_metrics',
      name: 'User Metrics',
      icon: Users,
      category: 'metrics',
      description: 'User engagement and activity metrics'
    },
    {
      id: 'relationship_stats',
      name: 'Relationship Stats',
      icon: Heart,
      category: 'metrics',
      description: 'Relationship success and matching statistics'
    }
  ];

  // Report templates
  const templates = [
    {
      id: 'blank',
      name: 'Blank Report',
      description: 'Start with a blank canvas',
      elements: []
    },
    {
      id: 'executive_summary',
      name: 'Executive Summary',
      description: 'High-level overview for executives',
      elements: ['kpi_card', 'line_chart', 'pie_chart', 'text_block']
    },
    {
      id: 'user_analytics',
      name: 'User Analytics',
      description: 'Detailed user behavior analysis',
      elements: ['user_metrics', 'bar_chart', 'data_table', 'line_chart']
    },
    {
      id: 'relationship_report',
      name: 'Relationship Report',
      description: 'Relationship success and matching insights',
      elements: ['relationship_stats', 'pie_chart', 'bar_chart', 'text_block']
    }
  ];

  // Sample data for different chart types
  const sampleData = {
    lineChart: [
      { date: '2024-01-01', users: 1200, engagement: 85 },
      { date: '2024-01-02', users: 1350, engagement: 88 },
      { date: '2024-01-03', users: 1180, engagement: 82 },
      { date: '2024-01-04', users: 1420, engagement: 91 },
      { date: '2024-01-05', users: 1580, engagement: 94 }
    ],
    barChart: [
      { category: 'Messages', value: 15420 },
      { category: 'Matches', value: 8930 },
      { category: 'Profiles', value: 12340 },
      { category: 'Dates', value: 5670 }
    ],
    pieChart: [
      { name: '18-24', value: 25, color: '#8884d8' },
      { name: '25-34', value: 35, color: '#82ca9d' },
      { name: '35-44', value: 20, color: '#ffc658' },
      { name: '45+', value: 20, color: '#ff7c7c' }
    ]
  };

  const handleDragStart = (e, element) => {
    setDraggedElement(element);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedElement) {
      const newElement = {
        ...draggedElement,
        id: `${draggedElement.id}_${Date.now()}`,
        position: reportElements.length
      };
      setReportElements([...reportElements, newElement]);
      setDraggedElement(null);
    }
  };

  const removeElement = (elementId) => {
    setReportElements(reportElements.filter(el => el.id !== elementId));
  };

  const moveElement = (elementId, direction) => {
    const currentIndex = reportElements.findIndex(el => el.id === elementId);
    if (currentIndex === -1) return;

    const newElements = [...reportElements];
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex >= 0 && targetIndex < newElements.length) {
      [newElements[currentIndex], newElements[targetIndex]] = [newElements[targetIndex], newElements[currentIndex]];
      setReportElements(newElements);
    }
  };

  const saveReport = () => {
    const newReport = {
      id: Date.now(),
      title: reportTitle,
      description: reportDescription,
      elements: reportElements,
      dateRange: selectedDateRange,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };
    setSavedReports([...savedReports, newReport]);
    console.log('Report saved:', newReport);
  };

  const exportReport = (format) => {
    console.log(`Exporting report as ${format}`);
    // Implementation for export functionality
  };

  const renderElement = (element) => {
    const ElementIcon = element.icon;
    
    switch (element.id.split('_')[0]) {
      case 'kpi':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Active Users</h3>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">24,567</div>
                <div className="text-sm text-green-600">+12.5%</div>
              </div>
            </div>
          </div>
        );
      
      case 'line':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">User Growth Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sampleData.lineChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      
      case 'bar':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Activity Breakdown</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sampleData.barChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      
      case 'pie':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Age Demographics</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={sampleData.pieChart}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {sampleData.pieChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      
      case 'data':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">User Activity Data</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 font-medium text-gray-900">Date</th>
                    <th className="text-left py-2 px-4 font-medium text-gray-900">Users</th>
                    <th className="text-left py-2 px-4 font-medium text-gray-900">Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleData.lineChart.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 px-4 text-gray-700">{row.date}</td>
                      <td className="py-2 px-4 text-gray-700">{row.users.toLocaleString()}</td>
                      <td className="py-2 px-4 text-gray-700">{row.engagement}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'text':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Analysis Summary</h3>
            <p className="text-gray-700">
              This report shows strong user engagement with a 12.5% increase in active users over the past month. 
              The platform continues to demonstrate healthy growth patterns across all key metrics.
            </p>
          </div>
        );
      
      default:
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <ElementIcon className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">{element.name}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Custom Report Builder
            </h1>
            <p className="text-gray-600">
              Create custom analytics reports with drag-and-drop components
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showPreview 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              {showPreview ? 'Edit Mode' : 'Preview'}
            </button>
            
            <button
              onClick={saveReport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Report
            </button>
            
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Report Configuration */}
        {!showPreview && (
          <div className="lg:col-span-1 space-y-6">
            {/* Report Settings */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Report Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Title
                  </label>
                  <input
                    type="text"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the report..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Range
                  </label>
                  <select
                    value={selectedDateRange}
                    onChange={(e) => setSelectedDateRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="90d">Last 90 Days</option>
                    <option value="1y">Last Year</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Templates</h3>
              <div className="space-y-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      if (template.elements.length > 0) {
                        const templateElements = template.elements.map((elementId, index) => {
                          const element = availableElements.find(el => el.id === elementId);
                          return {
                            ...element,
                            id: `${elementId}_${Date.now()}_${index}`,
                            position: index
                          };
                        });
                        setReportElements(templateElements);
                      }
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{template.name}</div>
                    <div className="text-sm text-gray-600">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Available Elements */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Available Elements</h3>
              <div className="space-y-2">
                {availableElements.map((element) => {
                  const ElementIcon = element.icon;
                  return (
                    <div
                      key={element.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, element)}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-move hover:bg-gray-50 transition-colors"
                    >
                      <ElementIcon className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">{element.name}</div>
                        <div className="text-xs text-gray-600">{element.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Content - Report Canvas */}
        <div className={showPreview ? 'lg:col-span-4' : 'lg:col-span-3'}>
          <div
            ref={reportRef}
            className="bg-white rounded-lg border border-gray-200 min-h-[600px]"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {/* Report Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">{reportTitle}</h2>
              {reportDescription && (
                <p className="text-gray-600 mt-2">{reportDescription}</p>
              )}
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date Range: {selectedDateRange}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Generated: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-6">
              {reportElements.length === 0 ? (
                <div className="text-center py-12">
                  <Grid className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Start Building Your Report
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Drag and drop elements from the sidebar to create your custom report
                  </p>
                  {!showPreview && (
                    <button
                      onClick={() => {
                        const defaultElements = [
                          { ...availableElements[0], id: `kpi_card_${Date.now()}`, position: 0 },
                          { ...availableElements[1], id: `line_chart_${Date.now()}`, position: 1 }
                        ];
                        setReportElements(defaultElements);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add Sample Elements
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {reportElements.map((element, index) => (
                    <div key={element.id} className="relative group">
                      {!showPreview && (
                        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 shadow-lg">
                            <button
                              onClick={() => moveElement(element.id, 'up')}
                              disabled={index === 0}
                              className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              ↑
                            </button>
                            <button
                              onClick={() => moveElement(element.id, 'down')}
                              disabled={index === reportElements.length - 1}
                              className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              ↓
                            </button>
                            <button
                              onClick={() => removeElement(element.id)}
                              className="p-1 text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                      {renderElement(element)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Saved Reports Modal */}
      {savedReports.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-lg max-w-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Saved Reports</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {savedReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm text-gray-900">{report.title}</div>
                    <div className="text-xs text-gray-600">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomReportBuilder;

