import React, { useState, useRef } from 'react';
import { 
  X, 
  Image, 
  Camera, 
  MapPin, 
  Users, 
  Smile, 
  Hash, 
  AtSign,
  Calendar,
  Clock,
  Globe,
  Lock,
  Eye,
  Heart,
  Star,
  Music,
  Palette,
  Type,
  Layout,
  Sparkles,
  Plus,
  Minus,
  RotateCcw,
  Crop,
  Filter,
  Brightness,
  Contrast,
  Saturation
} from 'lucide-react';

const CreatePostInterface = () => {
  const [postText, setPostText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [location, setLocation] = useState('');
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [privacy, setPrivacy] = useState('public');
  const [scheduledTime, setScheduledTime] = useState('');
  const [activeTab, setActiveTab] = useState('compose');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const fileInputRef = useRef(null);

  const templates = [
    { id: 1, name: 'Date Night', bg: 'bg-gradient-to-br from-pink-400 to-red-500', icon: '💕' },
    { id: 2, name: 'Adventure', bg: 'bg-gradient-to-br from-green-400 to-blue-500', icon: '🏔️' },
    { id: 3, name: 'Coffee Date', bg: 'bg-gradient-to-br from-yellow-400 to-orange-500', icon: '☕' },
    { id: 4, name: 'Workout', bg: 'bg-gradient-to-br from-purple-400 to-pink-500', icon: '💪' },
    { id: 5, name: 'Food Love', bg: 'bg-gradient-to-br from-red-400 to-pink-500', icon: '🍕' },
    { id: 6, name: 'Travel', bg: 'bg-gradient-to-br from-blue-400 to-purple-500', icon: '✈️' }
  ];

  const emojis = ['😊', '😍', '🥰', '😘', '💕', '❤️', '🔥', '✨', '🌟', '💫', '🎉', '🎊', '🌈', '🦋', '🌸', '🌺'];

  const suggestedLocations = [
    'Central Park, New York',
    'Golden Gate Park, San Francisco',
    'Venice Beach, Los Angeles',
    'Lincoln Park, Chicago',
    'Millennium Park, Chicago'
  ];

  const privacyOptions = [
    { id: 'public', label: 'Public', icon: <Globe className="w-4 h-4" />, desc: 'Anyone can see this post' },
    { id: 'matches', label: 'Matches Only', icon: <Heart className="w-4 h-4" />, desc: 'Only your matches can see' },
    { id: 'private', label: 'Private', icon: <Lock className="w-4 h-4" />, desc: 'Only you can see this post' }
  ];

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (imageId) => {
    setSelectedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const addEmoji = (emoji) => {
    setPostText(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const renderComposeTab = () => (
    <div className="space-y-4">
      {/* Template Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Choose a Template</h3>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`${template.bg} p-4 rounded-lg text-white text-center transition-all ${
                selectedTemplate === template.id ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="text-2xl mb-1">{template.icon}</div>
              <div className="text-xs font-medium">{template.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Text Input */}
      <div className="relative">
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="What's on your mind? Share something that shows your personality..."
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          rows={4}
          maxLength={500}
        />
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <span className="text-xs text-gray-500">{postText.length}/500</span>
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Smile className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-12 right-0 bg-white border rounded-lg shadow-lg p-3 z-10">
            <div className="grid grid-cols-8 gap-1">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => addEmoji(emoji)}
                  className="p-1 hover:bg-gray-100 rounded text-lg"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        
        {selectedImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {selectedImages.map((image) => (
              <div key={image.id} className="relative">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            {selectedImages.length < 4 && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-colors"
              >
                <Plus className="w-8 h-8 text-gray-400" />
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-colors"
          >
            <Image className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-gray-500">Add photos (up to 4)</span>
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setShowLocationPicker(!showLocationPicker)}
          className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Add Location</span>
        </button>
        <button className="flex items-center justify-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Users className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Tag People</span>
        </button>
      </div>

      {/* Location Picker */}
      {showLocationPicker && (
        <div className="border border-gray-300 rounded-lg p-3">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search for a location..."
            className="w-full p-2 border border-gray-200 rounded mb-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <div className="space-y-1">
            {suggestedLocations.map((loc, index) => (
              <button
                key={index}
                onClick={() => {
                  setLocation(loc);
                  setShowLocationPicker(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm"
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      {/* Privacy Settings */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Who can see this post?</h3>
        <div className="space-y-2">
          {privacyOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setPrivacy(option.id)}
              className={`w-full flex items-center space-x-3 p-3 border rounded-lg transition-colors ${
                privacy === option.id
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className={`${privacy === option.id ? 'text-pink-600' : 'text-gray-500'}`}>
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <div className={`font-medium ${privacy === option.id ? 'text-pink-900' : 'text-gray-900'}`}>
                  {option.label}
                </div>
                <div className="text-sm text-gray-500">{option.desc}</div>
              </div>
              {privacy === option.id && (
                <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Post */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Schedule Post</h3>
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-500" />
          <input
            type="datetime-local"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Leave empty to post immediately</p>
      </div>

      {/* Post Boost */}
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Boost this post</h3>
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
        <p className="text-xs text-gray-500 mb-3">
          Increase visibility and reach more potential matches
        </p>
        <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-orange-600 transition-all">
          Boost for $2.99
        </button>
      </div>

      {/* Hashtag Suggestions */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Suggested Hashtags</h3>
        <div className="flex flex-wrap gap-2">
          {['#DateNight', '#Adventure', '#Foodie', '#Travel', '#Fitness', '#Music', '#Art', '#Nature'].map((tag) => (
            <button
              key={tag}
              onClick={() => setPostText(prev => prev + ' ' + tag)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Create Post</h1>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto">
          <div className="flex">
            <button
              onClick={() => setActiveTab('compose')}
              className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                activeTab === 'compose'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Compose
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                activeTab === 'settings'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {activeTab === 'compose' ? renderComposeTab() : renderSettingsTab()}
      </div>

      {/* Preview */}
      {(postText || selectedImages.length > 0) && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-md mx-auto">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Your avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-medium text-sm">You</div>
                  <div className="text-xs text-gray-500">Just now</div>
                </div>
              </div>
              {postText && (
                <p className="text-sm text-gray-900 mb-2">{postText}</p>
              )}
              {selectedImages.length > 0 && (
                <div className="grid grid-cols-2 gap-1">
                  {selectedImages.slice(0, 2).map((image) => (
                    <img
                      key={image.id}
                      src={image.url}
                      alt="Preview"
                      className="w-full h-16 object-cover rounded"
                    />
                  ))}
                </div>
              )}
              {location && (
                <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostInterface;

