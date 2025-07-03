import React, { useState, useRef, useEffect } from 'react';
import { 
  Edit3, Type, Image, Video, Mic, FileText, Save, 
  Eye, Share2, Upload, Download, Trash2, Copy,
  Bold, Italic, Underline, List, Link, Quote,
  AlignLeft, AlignCenter, AlignRight, Palette,
  Play, Pause, Square, RotateCcw, Settings,
  Plus, Folder, Search, Filter, Star, Heart,
  Users, Calendar, Tag, BookOpen, Camera
} from 'lucide-react';

const PremiumContentCreationTools = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [contentType, setContentType] = useState('article');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  // Sample templates
  const templates = [
    {
      id: 1,
      name: 'Date Night Ideas',
      type: 'article',
      description: 'Creative and romantic date night suggestions',
      thumbnail: '/api/placeholder/200/120',
      category: 'Romance'
    },
    {
      id: 2,
      name: 'Communication Exercise',
      type: 'interactive',
      description: 'Step-by-step communication improvement guide',
      thumbnail: '/api/placeholder/200/120',
      category: 'Communication'
    },
    {
      id: 3,
      name: 'Relationship Milestone',
      type: 'video',
      description: 'Celebrating important relationship moments',
      thumbnail: '/api/placeholder/200/120',
      category: 'Milestones'
    },
    {
      id: 4,
      name: 'Conflict Resolution',
      type: 'article',
      description: 'Healthy ways to resolve disagreements',
      thumbnail: '/api/placeholder/200/120',
      category: 'Conflict Resolution'
    }
  ];

  // Sample user content
  const userContent = [
    {
      id: 1,
      title: 'Our First Year Together',
      type: 'article',
      status: 'published',
      views: 245,
      likes: 18,
      created: '2025-06-15',
      thumbnail: '/api/placeholder/150/100'
    },
    {
      id: 2,
      title: 'Weekly Date Night Routine',
      type: 'video',
      status: 'draft',
      views: 0,
      likes: 0,
      created: '2025-07-01',
      thumbnail: '/api/placeholder/150/100'
    },
    {
      id: 3,
      title: 'Communication Tips That Work',
      type: 'interactive',
      status: 'published',
      views: 89,
      likes: 12,
      created: '2025-06-28',
      thumbnail: '/api/placeholder/150/100'
    }
  ];

  const contentTypes = [
    { id: 'article', name: 'Article', icon: FileText, description: 'Written content with rich formatting' },
    { id: 'video', name: 'Video', icon: Video, description: 'Video content with editing tools' },
    { id: 'audio', name: 'Audio', icon: Mic, description: 'Audio recordings and podcasts' },
    { id: 'interactive', name: 'Interactive Guide', icon: BookOpen, description: 'Step-by-step interactive content' }
  ];

  const formatButtons = [
    { action: 'bold', icon: Bold, label: 'Bold' },
    { action: 'italic', icon: Italic, label: 'Italic' },
    { action: 'underline', icon: Underline, label: 'Underline' },
    { action: 'list', icon: List, label: 'List' },
    { action: 'link', icon: Link, label: 'Link' },
    { action: 'quote', icon: Quote, label: 'Quote' }
  ];

  const alignButtons = [
    { action: 'left', icon: AlignLeft, label: 'Align Left' },
    { action: 'center', icon: AlignCenter, label: 'Align Center' },
    { action: 'right', icon: AlignRight, label: 'Align Right' }
  ];

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFormatText = (action) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    let formattedText = selectedText;
    
    switch (action) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'list':
        formattedText = `\n- ${selectedText}`;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        break;
      default:
        break;
    }
    
    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Recording logic would be implemented here
    alert(`Recording saved! Duration: ${Math.floor(recordingTime / 60)}:${(recordingTime % 60).toString().padStart(2, '0')}`);
  };

  const handleSaveContent = () => {
    if (!title.trim()) {
      alert('Please enter a title for your content');
      return;
    }
    
    const contentData = {
      title,
      content,
      type: contentType,
      tags,
      created: new Date().toISOString().split('T')[0]
    };
    
    console.log('Saving content:', contentData);
    alert('Content saved successfully!');
  };

  const handlePublishContent = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please complete your content before publishing');
      return;
    }
    
    alert('Content published successfully!');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderContentEditor = () => {
    switch (contentType) {
      case 'article':
        return (
          <div className="space-y-4">
            {/* Formatting Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-1">
                {formatButtons.map((button) => {
                  const IconComponent = button.icon;
                  return (
                    <button
                      key={button.action}
                      onClick={() => handleFormatText(button.action)}
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                      title={button.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <div className="flex items-center space-x-1">
                {alignButtons.map((button) => {
                  const IconComponent = button.icon;
                  return (
                    <button
                      key={button.action}
                      onClick={() => handleFormatText(button.action)}
                      className="p-2 hover:bg-gray-200 rounded transition-colors"
                      title={button.label}
                    >
                      <IconComponent className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center px-3 py-2 hover:bg-gray-200 rounded transition-colors"
              >
                <Image className="w-4 h-4 mr-2" />
                Add Image
              </button>
              
              <button className="flex items-center px-3 py-2 hover:bg-gray-200 rounded transition-colors">
                <Palette className="w-4 h-4 mr-2" />
                Colors
              </button>
            </div>

            {/* Content Editor */}
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your article..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        );

      case 'video':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Video Editor</h3>
              <p className="text-gray-600 mb-4">Upload or record video content</p>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Video
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Camera className="w-4 h-4 mr-2" />
                  Record Video
                </button>
              </div>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Add video description and notes..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Audio Recorder</h3>
              <p className="text-gray-600 mb-4">Record your voice or upload audio files</p>
              
              <div className="flex justify-center items-center space-x-4 mb-4">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Recording
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Square className="w-5 h-5 mr-2" />
                    Stop Recording
                  </button>
                )}
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Audio
                </button>
              </div>
              
              {isRecording && (
                <div className="flex items-center justify-center space-x-2 text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="font-mono text-lg">{formatTime(recordingTime)}</span>
                </div>
              )}
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Add audio description and show notes..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-6">
              <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Guide Builder</h3>
              <p className="text-gray-600 mb-4">Create step-by-step interactive content with exercises and activities</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center p-3 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                  <Plus className="w-5 h-5 mr-3 text-blue-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Add Step</div>
                    <div className="text-sm text-gray-600">Create a new guide step</div>
                  </div>
                </button>
                
                <button className="flex items-center p-3 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                  <Heart className="w-5 h-5 mr-3 text-blue-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Add Exercise</div>
                    <div className="text-sm text-gray-600">Interactive relationship exercise</div>
                  </div>
                </button>
              </div>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe your interactive guide and its objectives..."
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Premium Content Creation Tools
          </h1>
          <p className="text-gray-600">
            Create and share engaging relationship content with professional-grade tools
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'create', label: 'Create Content', icon: Edit3 },
            { id: 'templates', label: 'Templates', icon: Folder },
            { id: 'my-content', label: 'My Content', icon: FileText }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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

        {/* Create Content Tab */}
        {activeTab === 'create' && (
          <div className="space-y-6">
            {/* Content Type Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Content Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {contentTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setContentType(type.id)}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        contentType === type.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 mb-3 ${
                        contentType === type.id ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                      <h3 className="font-medium text-gray-900 mb-1">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Creation Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-6">
                {/* Title Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a compelling title for your content..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  {renderContentEditor()}
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-purple-500 hover:text-purple-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                      placeholder="Add a tag..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {showPreview ? 'Hide Preview' : 'Preview'}
                  </button>
                  
                  <button
                    onClick={handleSaveContent}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </button>
                  
                  <button
                    onClick={handlePublishContent}
                    className="flex items-center justify-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Publish Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Romance</option>
                  <option>Communication</option>
                  <option>Milestones</option>
                  <option>Conflict Resolution</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {template.category}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">{template.type}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                    <button
                      onClick={() => setSelectedTemplate(template)}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Content Tab */}
        {activeTab === 'my-content' && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <div className="flex space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>All Content</option>
                  <option>Published</option>
                  <option>Drafts</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>All Types</option>
                  <option>Articles</option>
                  <option>Videos</option>
                  <option>Audio</option>
                  <option>Interactive</option>
                </select>
              </div>
              <button
                onClick={() => setActiveTab('create')}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userContent.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">{item.type}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {item.likes}
                      </span>
                      <span>{item.created}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Edit
                      </button>
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*,audio/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log('File selected:', file.name);
              // File handling logic would be implemented here
            }
          }}
        />
      </div>
    </div>
  );
};

export default PremiumContentCreationTools;

