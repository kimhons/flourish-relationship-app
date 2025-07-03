import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  Layout, 
  Zap, 
  Eye, 
  Settings, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Sun, 
  Moon, 
  Contrast, 
  Type, 
  Grid, 
  Layers, 
  MousePointer, 
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Check,
  X,
  Heart,
  Star,
  ThumbsUp,
  MessageCircle,
  Share,
  Bookmark,
  Download,
  Upload,
  Search,
  Filter,
  SortAsc,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const UserInterfaceRefinements = () => {
  const [activeTab, setActiveTab] = useState('design-system');
  const [theme, setTheme] = useState('light');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [currentDemo, setCurrentDemo] = useState('buttons');
  const [isPlaying, setIsPlaying] = useState(false);

  // Design System Colors
  const colorPalette = {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      500: '#64748b',
      600: '#475569',
      900: '#0f172a'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      900: '#14532d'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      900: '#78350f'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d'
    }
  };

  // Typography Scale
  const typographyScale = [
    { name: 'Display Large', class: 'text-6xl font-bold', sample: 'Aa' },
    { name: 'Display Medium', class: 'text-5xl font-bold', sample: 'Aa' },
    { name: 'Display Small', class: 'text-4xl font-bold', sample: 'Aa' },
    { name: 'Headline Large', class: 'text-3xl font-semibold', sample: 'Aa' },
    { name: 'Headline Medium', class: 'text-2xl font-semibold', sample: 'Aa' },
    { name: 'Headline Small', class: 'text-xl font-semibold', sample: 'Aa' },
    { name: 'Body Large', class: 'text-lg font-normal', sample: 'Aa' },
    { name: 'Body Medium', class: 'text-base font-normal', sample: 'Aa' },
    { name: 'Body Small', class: 'text-sm font-normal', sample: 'Aa' },
    { name: 'Caption', class: 'text-xs font-medium', sample: 'Aa' }
  ];

  // Component Demos
  const componentDemos = {
    buttons: [
      { type: 'Primary', class: 'bg-blue-600 text-white hover:bg-blue-700', label: 'Primary Button' },
      { type: 'Secondary', class: 'bg-gray-200 text-gray-900 hover:bg-gray-300', label: 'Secondary Button' },
      { type: 'Outline', class: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50', label: 'Outline Button' },
      { type: 'Ghost', class: 'text-blue-600 hover:bg-blue-50', label: 'Ghost Button' },
      { type: 'Danger', class: 'bg-red-600 text-white hover:bg-red-700', label: 'Danger Button' }
    ],
    cards: [
      { type: 'Basic', elevation: 'shadow-sm', content: 'Basic card with minimal shadow' },
      { type: 'Elevated', elevation: 'shadow-md', content: 'Elevated card with medium shadow' },
      { type: 'Floating', elevation: 'shadow-lg', content: 'Floating card with large shadow' },
      { type: 'Interactive', elevation: 'shadow-sm hover:shadow-md', content: 'Interactive card with hover effect' }
    ],
    forms: [
      { type: 'Text Input', element: 'input', placeholder: 'Enter your name' },
      { type: 'Textarea', element: 'textarea', placeholder: 'Enter your message' },
      { type: 'Select', element: 'select', options: ['Option 1', 'Option 2', 'Option 3'] },
      { type: 'Checkbox', element: 'checkbox', label: 'I agree to the terms' },
      { type: 'Radio', element: 'radio', options: ['Yes', 'No', 'Maybe'] }
    ]
  };

  // Animation Demos
  const animationDemos = [
    { name: 'Fade In', class: 'animate-fade-in', duration: '0.3s' },
    { name: 'Slide Up', class: 'animate-slide-up', duration: '0.4s' },
    { name: 'Scale In', class: 'animate-scale-in', duration: '0.2s' },
    { name: 'Bounce', class: 'animate-bounce', duration: '1s' },
    { name: 'Pulse', class: 'animate-pulse', duration: '2s' }
  ];

  const renderDesignSystem = () => (
    <div className="space-y-8">
      {/* Color Palette */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Color Palette</h3>
        <div className="space-y-6">
          {Object.entries(colorPalette).map(([colorName, shades]) => (
            <div key={colorName}>
              <h4 className="font-medium text-gray-900 mb-3 capitalize">{colorName}</h4>
              <div className="flex space-x-2">
                {Object.entries(shades).map(([shade, hex]) => (
                  <div key={shade} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-lg shadow-sm border border-gray-200 mb-2"
                      style={{ backgroundColor: hex }}
                    />
                    <p className="text-xs font-medium text-gray-600">{shade}</p>
                    <p className="text-xs text-gray-500">{hex}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Typography Scale</h3>
        <div className="space-y-4">
          {typographyScale.map((type, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{type.name}</p>
                <p className="text-xs text-gray-500">{type.class}</p>
              </div>
              <div className={`${type.class} text-gray-900`}>
                {type.sample}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing System */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Spacing System</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 4, 6, 8, 12, 16, 20].map((space) => (
            <div key={space} className="text-center">
              <div className={`bg-blue-200 h-${space} w-full rounded mb-2`} />
              <p className="text-sm font-medium text-gray-900">{space * 4}px</p>
              <p className="text-xs text-gray-500">space-{space}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'None', class: 'rounded-none', value: '0px' },
            { name: 'Small', class: 'rounded-sm', value: '2px' },
            { name: 'Medium', class: 'rounded-md', value: '6px' },
            { name: 'Large', class: 'rounded-lg', value: '8px' },
            { name: 'XL', class: 'rounded-xl', value: '12px' },
            { name: '2XL', class: 'rounded-2xl', value: '16px' },
            { name: '3XL', class: 'rounded-3xl', value: '24px' },
            { name: 'Full', class: 'rounded-full', value: '9999px' }
          ].map((radius) => (
            <div key={radius.name} className="text-center">
              <div className={`bg-blue-500 h-16 w-16 mx-auto mb-2 ${radius.class}`} />
              <p className="text-sm font-medium text-gray-900">{radius.name}</p>
              <p className="text-xs text-gray-500">{radius.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComponents = () => (
    <div className="space-y-8">
      {/* Component Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex space-x-4 mb-6">
          {Object.keys(componentDemos).map((component) => (
            <button
              key={component}
              onClick={() => setCurrentDemo(component)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                currentDemo === component
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {component}
            </button>
          ))}
        </div>

        {/* Buttons Demo */}
        {currentDemo === 'buttons' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Button Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {componentDemos.buttons.map((button, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-3">{button.type}</p>
                  <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${button.class}`}>
                    {button.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cards Demo */}
        {currentDemo === 'cards' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Card Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {componentDemos.cards.map((card, index) => (
                <div key={index} className={`bg-white rounded-lg border border-gray-200 p-6 transition-shadow ${card.elevation}`}>
                  <h4 className="font-semibold text-gray-900 mb-2">{card.type} Card</h4>
                  <p className="text-gray-600">{card.content}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Action</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Forms Demo */}
        {currentDemo === 'forms' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Form Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {componentDemos.forms.map((form, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{form.type}</label>
                  {form.element === 'input' && (
                    <input
                      type="text"
                      placeholder={form.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                  {form.element === 'textarea' && (
                    <textarea
                      placeholder={form.placeholder}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                  {form.element === 'select' && (
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      {form.options.map((option, i) => (
                        <option key={i}>{option}</option>
                      ))}
                    </select>
                  )}
                  {form.element === 'checkbox' && (
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">{form.label}</span>
                    </label>
                  )}
                  {form.element === 'radio' && (
                    <div className="space-y-2">
                      {form.options.map((option, i) => (
                        <label key={i} className="flex items-center space-x-2">
                          <input type="radio" name={`radio-${index}`} className="border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAnimations = () => (
    <div className="space-y-8">
      {/* Animation Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Micro-Interactions & Animations</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={animationsEnabled}
                onChange={(e) => setAnimationsEnabled(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Enable Animations</span>
            </label>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
            </button>
          </div>
        </div>

        {/* Animation Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animationDemos.map((animation, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
              <h4 className="font-medium text-gray-900 mb-4">{animation.name}</h4>
              <div className={`w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 ${animationsEnabled && isPlaying ? animation.class : ''}`} />
              <p className="text-sm text-gray-600">Duration: {animation.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Interactive Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hover Effects */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Hover Effects</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border hover:shadow-md transition-shadow cursor-pointer">
                Hover for shadow
              </div>
              <div className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer">
                Hover for color change
              </div>
              <div className="p-3 bg-white rounded border hover:scale-105 transition-transform cursor-pointer">
                Hover for scale
              </div>
            </div>
          </div>

          {/* Click Effects */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Click Effects</h4>
            <div className="space-y-3">
              <button className="w-full p-3 bg-green-500 text-white rounded active:bg-green-600 active:scale-95 transition-all">
                Click me
              </button>
              <button className="w-full p-3 bg-purple-500 text-white rounded active:ring-4 active:ring-purple-200 transition-all">
                Ring effect
              </button>
              <button className="w-full p-3 bg-orange-500 text-white rounded hover:shadow-lg active:shadow-sm transition-shadow">
                Shadow effect
              </button>
            </div>
          </div>

          {/* Loading States */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Loading States</h4>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-500 text-white rounded flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Loading...</span>
              </button>
              <div className="w-full p-3 bg-gray-200 rounded">
                <div className="h-2 bg-blue-500 rounded animate-pulse" style={{ width: '60%' }} />
              </div>
              <div className="w-full p-3 bg-gray-200 rounded flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResponsive = () => (
    <div className="space-y-8">
      {/* Device Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Responsive Design Preview</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Desktop */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Desktop (1200px+)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video">
              <div className="bg-white rounded shadow-sm h-full p-3">
                <div className="grid grid-cols-3 gap-2 h-full">
                  <div className="bg-blue-200 rounded" />
                  <div className="bg-green-200 rounded" />
                  <div className="bg-purple-200 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Tablet className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Tablet (768px - 1199px)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-[3/4] max-w-xs mx-auto">
              <div className="bg-white rounded shadow-sm h-full p-3">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="bg-blue-200 rounded" />
                  <div className="bg-green-200 rounded" />
                  <div className="bg-purple-200 rounded col-span-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-gray-600 mr-2" />
              <span className="font-medium text-gray-900">Mobile (< 768px)</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-[9/16] max-w-[200px] mx-auto">
              <div className="bg-white rounded shadow-sm h-full p-3">
                <div className="grid grid-cols-1 gap-2 h-full">
                  <div className="bg-blue-200 rounded" />
                  <div className="bg-green-200 rounded" />
                  <div className="bg-purple-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breakpoint System */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Breakpoint System</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Breakpoint</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Class Prefix</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Min Width</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Max Width</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Mobile', prefix: 'default', min: '0px', max: '767px', use: 'Mobile phones' },
                { name: 'Tablet', prefix: 'md:', min: '768px', max: '1023px', use: 'Tablets, small laptops' },
                { name: 'Desktop', prefix: 'lg:', min: '1024px', max: '1279px', use: 'Laptops, desktops' },
                { name: 'Large Desktop', prefix: 'xl:', min: '1280px', max: '1535px', use: 'Large screens' },
                { name: 'Extra Large', prefix: '2xl:', min: '1536px', max: '∞', use: 'Very large screens' }
              ].map((breakpoint, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">{breakpoint.name}</td>
                  <td className="py-3 px-4 text-gray-600 font-mono">{breakpoint.prefix}</td>
                  <td className="py-3 px-4 text-gray-600">{breakpoint.min}</td>
                  <td className="py-3 px-4 text-gray-600">{breakpoint.max}</td>
                  <td className="py-3 px-4 text-gray-600">{breakpoint.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid System */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Grid System</h3>
        <div className="space-y-4">
          {[
            { cols: 1, label: '1 Column' },
            { cols: 2, label: '2 Columns' },
            { cols: 3, label: '3 Columns' },
            { cols: 4, label: '4 Columns' },
            { cols: 6, label: '6 Columns' },
            { cols: 12, label: '12 Columns' }
          ].map((grid) => (
            <div key={grid.cols}>
              <p className="text-sm font-medium text-gray-700 mb-2">{grid.label}</p>
              <div className={`grid grid-cols-${grid.cols} gap-2`}>
                {Array.from({ length: grid.cols }, (_, i) => (
                  <div key={i} className="bg-blue-100 p-2 rounded text-center text-xs text-blue-800">
                    Col {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAccessibility = () => (
    <div className="space-y-8">
      {/* Accessibility Features */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Accessibility Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Color Contrast */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Contrast className="w-5 h-5 mr-2" />
              Color Contrast
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white text-gray-900 rounded border">
                <span className="font-medium">AA Compliant:</span> 4.5:1 ratio
              </div>
              <div className="p-3 bg-gray-900 text-white rounded">
                <span className="font-medium">AAA Compliant:</span> 7:1 ratio
              </div>
              <div className="p-3 bg-blue-600 text-white rounded">
                <span className="font-medium">Brand Colors:</span> Tested for compliance
              </div>
            </div>
          </div>

          {/* Focus States */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Focus States
            </h4>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-600 text-white rounded focus:ring-4 focus:ring-blue-200 focus:outline-none">
                Keyboard Focusable
              </button>
              <input
                type="text"
                placeholder="Focus with Tab key"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Accessible Select</option>
              </select>
            </div>
          </div>

          {/* Screen Reader Support */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <Type className="w-5 h-5 mr-2" />
              Screen Reader Support
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <span className="sr-only">This text is only for screen readers</span>
                <span aria-label="Accessible button with description">🔍</span>
                <span className="ml-2">Search (with aria-label)</span>
              </div>
              <div className="p-3 bg-white rounded border" role="alert">
                <span className="font-medium">Alert:</span> This is an important message
              </div>
              <div className="p-3 bg-white rounded border">
                <label htmlFor="accessible-input" className="block text-sm font-medium mb-1">
                  Properly labeled input
                </label>
                <input
                  id="accessible-input"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  aria-describedby="input-help"
                />
                <p id="input-help" className="text-xs text-gray-600 mt-1">
                  This input has proper labeling and description
                </p>
              </div>
            </div>
          </div>

          {/* Keyboard Navigation */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4 flex items-center">
              <MousePointer className="w-5 h-5 mr-2" />
              Keyboard Navigation
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border">
                <p className="text-sm text-gray-700 mb-2">Use Tab to navigate:</p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm focus:ring-2 focus:ring-blue-300">
                    Button 1
                  </button>
                  <button className="px-3 py-1 bg-green-600 text-white rounded text-sm focus:ring-2 focus:ring-green-300">
                    Button 2
                  </button>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm focus:ring-2 focus:ring-purple-300">
                    Button 3
                  </button>
                </div>
              </div>
              <div className="p-3 bg-white rounded border">
                <p className="text-sm text-gray-700 mb-2">Arrow key navigation:</p>
                <div role="radiogroup" aria-labelledby="radio-group-label">
                  <p id="radio-group-label" className="text-sm font-medium mb-2">Choose an option:</p>
                  <label className="flex items-center space-x-2 mb-1">
                    <input type="radio" name="accessible-radio" className="text-blue-600" />
                    <span className="text-sm">Option 1</span>
                  </label>
                  <label className="flex items-center space-x-2 mb-1">
                    <input type="radio" name="accessible-radio" className="text-blue-600" />
                    <span className="text-sm">Option 2</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="accessible-radio" className="text-blue-600" />
                    <span className="text-sm">Option 3</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WCAG Compliance Checklist */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">WCAG 2.1 Compliance Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { category: 'Perceivable', items: [
              'Text alternatives for images',
              'Captions for videos',
              'Color contrast ratios',
              'Resizable text up to 200%'
            ]},
            { category: 'Operable', items: [
              'Keyboard accessible',
              'No seizure-inducing content',
              'Sufficient time limits',
              'Clear navigation'
            ]},
            { category: 'Understandable', items: [
              'Readable text',
              'Predictable functionality',
              'Input assistance',
              'Error identification'
            ]},
            { category: 'Robust', items: [
              'Valid HTML markup',
              'Compatible with assistive technologies',
              'Future-proof code',
              'Semantic structure'
            ]}
          ].map((section) => (
            <div key={section.category} className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">{section.category}</h4>
              <div className="space-y-2">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'design-system', label: 'Design System', icon: Palette },
    { id: 'components', label: 'Components', icon: Layout },
    { id: 'animations', label: 'Animations', icon: Zap },
    { id: 'responsive', label: 'Responsive', icon: Monitor },
    { id: 'accessibility', label: 'Accessibility', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Interface Refinements</h1>
          <p className="text-gray-600">Modern design system implementation with micro-interactions, animations, and consistent visual language across the platform.</p>
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
          {activeTab === 'design-system' && renderDesignSystem()}
          {activeTab === 'components' && renderComponents()}
          {activeTab === 'animations' && renderAnimations()}
          {activeTab === 'responsive' && renderResponsive()}
          {activeTab === 'accessibility' && renderAccessibility()}
        </div>
      </div>
    </div>
  );
};

export default UserInterfaceRefinements;

