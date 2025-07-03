import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Heart, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  MoreHorizontal,
  Star,
  Bookmark,
  Share,
  Download,
  Upload,
  Filter,
  SortAsc,
  Grid,
  List,
  Map,
  Layers,
  Navigation,
  Compass,
  Route,
  MapPin,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Globe,
  Shield,
  HelpCircle,
  Phone,
  Mail,
  ExternalLink,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

const NavigationOptimization = () => {
  const [activeTab, setActiveTab] = useState('main-navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(['Dashboard', 'Relationship Tools', 'Communication']);
  const [navigationStyle, setNavigationStyle] = useState('sidebar');
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Navigation Structure
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      path: '/dashboard',
      badge: null,
      children: []
    },
    {
      id: 'relationship-tools',
      label: 'Relationship Tools',
      icon: Heart,
      path: '/tools',
      badge: 'New',
      children: [
        { id: 'communication', label: 'Communication', path: '/tools/communication', icon: MessageSquare },
        { id: 'intimacy', label: 'Intimacy', path: '/tools/intimacy', icon: Heart },
        { id: 'goals', label: 'Goals', path: '/tools/goals', icon: Target },
        { id: 'activities', label: 'Activities', path: '/tools/activities', icon: Calendar }
      ]
    },
    {
      id: 'assessments',
      label: 'Assessments',
      icon: BarChart3,
      path: '/assessments',
      badge: null,
      children: [
        { id: 'personality', label: 'Personality', path: '/assessments/personality', icon: User },
        { id: 'compatibility', label: 'Compatibility', path: '/assessments/compatibility', icon: Users },
        { id: 'progress', label: 'Progress', path: '/assessments/progress', icon: TrendingUp }
      ]
    },
    {
      id: 'ai-coaching',
      label: 'AI Coaching',
      icon: Zap,
      path: '/coaching',
      badge: '3',
      children: [
        { id: 'chat', label: 'Chat with Dr. Love', path: '/coaching/chat', icon: MessageSquare },
        { id: 'insights', label: 'Insights', path: '/coaching/insights', icon: BarChart3 },
        { id: 'recommendations', label: 'Recommendations', path: '/coaching/recommendations', icon: Star }
      ]
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: Calendar,
      path: '/calendar',
      badge: null,
      children: []
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      path: '/analytics',
      badge: null,
      children: [
        { id: 'overview', label: 'Overview', path: '/analytics/overview', icon: BarChart3 },
        { id: 'trends', label: 'Trends', path: '/analytics/trends', icon: TrendingUp },
        { id: 'reports', label: 'Reports', path: '/analytics/reports', icon: Download }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      path: '/settings',
      badge: null,
      children: [
        { id: 'profile', label: 'Profile', path: '/settings/profile', icon: User },
        { id: 'privacy', label: 'Privacy', path: '/settings/privacy', icon: Shield },
        { id: 'notifications', label: 'Notifications', path: '/settings/notifications', icon: Bell }
      ]
    }
  ];

  // Quick Actions
  const quickActions = [
    { id: 'new-goal', label: 'New Goal', icon: Target, color: 'bg-blue-500' },
    { id: 'schedule-date', label: 'Schedule Date', icon: Calendar, color: 'bg-pink-500' },
    { id: 'start-assessment', label: 'Start Assessment', icon: BarChart3, color: 'bg-green-500' },
    { id: 'chat-ai', label: 'Chat with AI', icon: MessageSquare, color: 'bg-purple-500' }
  ];

  // Breadcrumb Navigation
  const breadcrumbItems = [
    { label: 'Dashboard', path: '/dashboard', icon: Home },
    { label: 'Relationship Tools', path: '/tools', icon: Heart },
    { label: 'Communication', path: '/tools/communication', icon: MessageSquare }
  ];

  const renderMainNavigation = () => (
    <div className="space-y-8">
      {/* Navigation Style Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation Styles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'sidebar', label: 'Sidebar Navigation', icon: Menu, desc: 'Traditional left sidebar with collapsible menu' },
            { id: 'topbar', label: 'Top Navigation', icon: Navigation, desc: 'Horizontal navigation bar at the top' },
            { id: 'hybrid', label: 'Hybrid Navigation', icon: Layers, desc: 'Combination of top bar and sidebar' }
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setNavigationStyle(style.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                navigationStyle === style.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <style.icon className={`w-8 h-8 mx-auto mb-2 ${
                navigationStyle === style.id ? 'text-blue-600' : 'text-gray-600'
              }`} />
              <h4 className="font-medium text-gray-900 mb-1">{style.label}</h4>
              <p className="text-sm text-gray-600">{style.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar Navigation Demo */}
      {navigationStyle === 'sidebar' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Sidebar Navigation</h3>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200"
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
          </div>
          
          <div className="flex bg-gray-50 rounded-lg overflow-hidden" style={{ height: '500px' }}>
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white transition-all duration-300 ${
              isCollapsed ? 'w-16' : 'w-64'
            }`}>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  {!isCollapsed && <span className="font-bold text-lg">Flourish</span>}
                </div>
                
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id}>
                        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                          <Icon className="w-5 h-5" />
                          {!isCollapsed && (
                            <>
                              <span className="flex-1 text-left">{item.label}</span>
                              {item.badge && (
                                <span className="px-2 py-1 bg-blue-600 text-xs rounded-full">
                                  {item.badge}
                                </span>
                              )}
                              {item.children.length > 0 && (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </>
                          )}
                        </button>
                        
                        {!isCollapsed && item.children.length > 0 && (
                          <div className="ml-8 mt-2 space-y-1">
                            {item.children.map((child) => {
                              const ChildIcon = child.icon;
                              return (
                                <button
                                  key={child.id}
                                  className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                                >
                                  <ChildIcon className="w-4 h-4" />
                                  <span>{child.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Main Content Area</h4>
                <p className="text-gray-600">Content adapts to sidebar width changes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Content Block 1</h5>
                  <p className="text-sm text-gray-600">Responsive content that adjusts to available space</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Content Block 2</h5>
                  <p className="text-sm text-gray-600">Maintains readability at all sidebar widths</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation Demo */}
      {navigationStyle === 'topbar' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Navigation</h3>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden" style={{ height: '500px' }}>
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg text-gray-900">Flourish</span>
                  </div>
                  
                  <nav className="hidden md:flex space-x-6">
                    {navigationItems.slice(0, 5).map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sub Navigation */}
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
              <div className="flex space-x-6">
                {navigationItems[1].children.map((child) => {
                  const ChildIcon = child.icon;
                  return (
                    <button
                      key={child.id}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
                    >
                      <ChildIcon className="w-4 h-4" />
                      <span>{child.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Main Content Area</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-2">Content Block {i}</h5>
                    <p className="text-sm text-gray-600">Full width content with top navigation</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile Navigation</h3>
        
        <div className="bg-gray-50 rounded-lg overflow-hidden max-w-sm mx-auto" style={{ height: '600px' }}>
          {/* Mobile Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">Flourish</span>
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="absolute inset-0 bg-white z-50 max-w-sm mx-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg text-gray-900">Flourish</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {item.children.length > 0 && (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}
          
          {/* Mobile Content */}
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Mobile Content</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-2">Mobile Card {i}</h5>
                  <p className="text-sm text-gray-600">Optimized for touch interaction</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex justify-around">
              {navigationItems.slice(0, 5).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="flex flex-col items-center space-y-1 p-2 text-gray-600 hover:text-blue-600"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{item.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBreadcrumbs = () => (
    <div className="space-y-8">
      {/* Breadcrumb Styles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Breadcrumb Navigation</h3>
        
        <div className="space-y-6">
          {/* Standard Breadcrumbs */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Standard Breadcrumbs</h4>
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  <button className={`flex items-center space-x-1 hover:text-blue-600 ${
                    index === breadcrumbItems.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-600'
                  }`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Breadcrumbs with Background */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Breadcrumbs with Background</h4>
            <nav className="flex items-center space-x-1 bg-gray-100 rounded-lg p-3">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  <button className={`flex items-center space-x-1 px-2 py-1 rounded hover:bg-white transition-colors ${
                    index === breadcrumbItems.length - 1 ? 'text-gray-900 font-medium bg-white' : 'text-gray-600'
                  }`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Compact Breadcrumbs */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Compact Breadcrumbs</h4>
            <nav className="flex items-center space-x-2 text-sm">
              <button className="text-gray-600 hover:text-blue-600">
                <Home className="w-4 h-4" />
              </button>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <button className="text-gray-600 hover:text-blue-600">...</button>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <button className="text-gray-600 hover:text-blue-600">Tools</button>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">Communication</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Page Navigation</h3>
        
        <div className="space-y-6">
          {/* Previous/Next Navigation */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Previous/Next Navigation</h4>
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Previous: Intimacy Tools</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <span>Next: Goal Setting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Pagination */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Pagination</h4>
            <div className="flex items-center justify-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    page === 3
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Step Navigation */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Step Navigation</h4>
            <div className="flex items-center space-x-4">
              {[
                { step: 1, label: 'Profile Setup', completed: true },
                { step: 2, label: 'Assessment', completed: true },
                { step: 3, label: 'Goal Setting', active: true },
                { step: 4, label: 'Recommendations', upcoming: true }
              ].map((item) => (
                <div key={item.step} className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    item.completed ? 'bg-green-600 text-white' :
                    item.active ? 'bg-blue-600 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {item.completed ? '✓' : item.step}
                  </div>
                  <span className={`text-sm ${
                    item.active ? 'text-gray-900 font-medium' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                  {item.step < 4 && (
                    <div className={`w-8 h-0.5 ${
                      item.completed ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickActions = () => (
    <div className="space-y-8">
      {/* Quick Action Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className={`p-4 rounded-lg text-white hover:opacity-90 transition-opacity ${action.color}`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Floating Action Button</h3>
        
        <div className="relative bg-gray-50 rounded-lg p-8 h-64">
          <p className="text-gray-600 mb-4">Content area with floating action button</p>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm text-gray-700">Content item {i}</p>
              </div>
            ))}
          </div>
          
          {/* Floating Action Button */}
          <button className="absolute bottom-4 right-4 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Context Menu */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Context Menus</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right-click Menu */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Right-click Menu</h4>
            <div className="relative">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Right-click this area</p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">Sample content item</p>
                </div>
              </div>
              
              {/* Context Menu */}
              <div className="absolute top-16 left-4 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                {[
                  { icon: Edit, label: 'Edit' },
                  { icon: Copy, label: 'Copy' },
                  { icon: Share, label: 'Share' },
                  { icon: Download, label: 'Download' },
                  { icon: Trash2, label: 'Delete', danger: true }
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      item.danger ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Dropdown Menu */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Dropdown Menu</h4>
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <span>Actions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[150px]">
                {[
                  { icon: Star, label: 'Add to Favorites' },
                  { icon: Bookmark, label: 'Bookmark' },
                  { icon: Share, label: 'Share' },
                  { icon: ExternalLink, label: 'Open in New Tab' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResponsiveNav = () => (
    <div className="space-y-8">
      {/* Device-Specific Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Responsive Navigation Patterns</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Desktop Navigation */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Desktop (1024px+)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video">
              <div className="bg-white rounded shadow-sm h-full">
                <div className="flex h-full">
                  <div className="w-1/4 bg-gray-900 rounded-l p-2">
                    <div className="space-y-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-2 bg-gray-700 rounded" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="h-2 bg-gray-200 rounded mb-2" />
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <div className="bg-gray-100 rounded" />
                      <div className="bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Full sidebar navigation</p>
          </div>

          {/* Tablet Navigation */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Tablet className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Tablet (768px - 1023px)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-[3/4] max-w-xs mx-auto">
              <div className="bg-white rounded shadow-sm h-full">
                <div className="h-full">
                  <div className="h-8 bg-gray-900 rounded-t p-1">
                    <div className="flex justify-between items-center h-full px-2">
                      <div className="w-4 h-1 bg-gray-700 rounded" />
                      <div className="w-12 h-1 bg-gray-700 rounded" />
                      <div className="w-4 h-1 bg-gray-700 rounded" />
                    </div>
                  </div>
                  <div className="p-2 h-full">
                    <div className="h-1 bg-gray-200 rounded mb-2" />
                    <div className="grid grid-cols-1 gap-1 h-full">
                      <div className="bg-gray-100 rounded" />
                      <div className="bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Collapsible top navigation</p>
          </div>

          {/* Mobile Navigation */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Mobile (< 768px)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-[9/16] max-w-[200px] mx-auto">
              <div className="bg-white rounded shadow-sm h-full">
                <div className="h-full flex flex-col">
                  <div className="h-6 bg-gray-900 rounded-t p-1">
                    <div className="flex justify-between items-center h-full px-1">
                      <div className="w-3 h-0.5 bg-gray-700 rounded" />
                      <div className="w-8 h-0.5 bg-gray-700 rounded" />
                      <div className="w-3 h-0.5 bg-gray-700 rounded" />
                    </div>
                  </div>
                  <div className="flex-1 p-1">
                    <div className="h-0.5 bg-gray-200 rounded mb-1" />
                    <div className="space-y-1 h-full">
                      <div className="bg-gray-100 rounded h-1/3" />
                      <div className="bg-gray-100 rounded h-1/3" />
                      <div className="bg-gray-100 rounded h-1/3" />
                    </div>
                  </div>
                  <div className="h-6 bg-gray-100 rounded-b p-1">
                    <div className="flex justify-around h-full">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-1 h-full bg-gray-300 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Bottom tab navigation</p>
          </div>
        </div>
      </div>

      {/* Navigation Breakpoints */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Navigation Breakpoints</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Device</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Screen Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Navigation Style</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Key Features</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  device: 'Mobile',
                  size: '< 768px',
                  style: 'Bottom tabs + Hamburger menu',
                  features: 'Touch-optimized, swipe gestures, minimal text'
                },
                {
                  device: 'Tablet',
                  size: '768px - 1023px',
                  style: 'Top navigation + Sidebar overlay',
                  features: 'Collapsible sidebar, touch and mouse support'
                },
                {
                  device: 'Desktop',
                  size: '1024px+',
                  style: 'Persistent sidebar + Top bar',
                  features: 'Full navigation, keyboard shortcuts, hover states'
                }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.device}</td>
                  <td className="py-3 px-4 text-gray-600">{item.size}</td>
                  <td className="py-3 px-4 text-gray-600">{item.style}</td>
                  <td className="py-3 px-4 text-gray-600">{item.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'main-navigation', label: 'Main Navigation', icon: Navigation },
    { id: 'breadcrumbs', label: 'Breadcrumbs', icon: Route },
    { id: 'quick-actions', label: 'Quick Actions', icon: Zap },
    { id: 'responsive-nav', label: 'Responsive', icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Navigation Optimization</h1>
          <p className="text-gray-600">Intelligent navigation patterns, breadcrumb systems, quick access features, and mobile navigation improvements for enhanced user experience.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'main-navigation' && renderMainNavigation()}
          {activeTab === 'breadcrumbs' && renderBreadcrumbs()}
          {activeTab === 'quick-actions' && renderQuickActions()}
          {activeTab === 'responsive-nav' && renderResponsiveNav()}
        </div>
      </div>
    </div>
  );
};

export default NavigationOptimization;

