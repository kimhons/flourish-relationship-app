import React, { useState, useEffect, useRef } from 'react';
import { 
  Languages, Globe, MessageCircle, Mic, MicOff, Volume2,
  VolumeX, Settings, RefreshCw, CheckCircle, AlertCircle,
  Clock, Users, Star, Zap, Brain, TrendingUp, Eye,
  Play, Pause, Download, Upload, Send, Copy, Share2,
  BookOpen, HelpCircle, Award, Gift, Sparkles, Heart
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const MultiLanguageRealTimeTranslation = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [translationMode, setTranslationMode] = useState('auto');
  const [isListening, setIsListening] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationAccuracy, setTranslationAccuracy] = useState(96.8);
  const [conversationLanguages, setConversationLanguages] = useState(['en', 'es']);
  const [autoDetectEnabled, setAutoDetectEnabled] = useState(true);
  const [voiceTranslationEnabled, setVoiceTranslationEnabled] = useState(true);

  // Supported languages
  const supportedLanguages = [
    { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', speakers: '1.5B' },
    { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', speakers: '500M' },
    { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', speakers: '280M' },
    { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', speakers: '100M' },
    { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹', speakers: '65M' },
    { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹', speakers: '260M' },
    { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', speakers: '258M' },
    { code: 'zh', name: 'Chinese', native: '中文', flag: '🇨🇳', speakers: '918M' },
    { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', speakers: '125M' },
    { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷', speakers: '77M' },
    { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', speakers: '422M' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', speakers: '600M' },
    { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', speakers: '80M' },
    { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱', speakers: '45M' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', speakers: '24M' },
    { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪', speakers: '10M' }
  ];

  // Sample conversation with translations
  const conversationHistory = [
    {
      id: 1,
      sender: 'Maria',
      original: 'Hola! ¿Cómo estás hoy?',
      translated: 'Hello! How are you today?',
      sourceLanguage: 'es',
      targetLanguage: 'en',
      timestamp: '14:30',
      confidence: 98.5,
      type: 'text'
    },
    {
      id: 2,
      sender: 'You',
      original: 'I\'m doing great! Your photos from Barcelona look amazing.',
      translated: '¡Estoy muy bien! Tus fotos de Barcelona se ven increíbles.',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      timestamp: '14:32',
      confidence: 96.2,
      type: 'text'
    },
    {
      id: 3,
      sender: 'Maria',
      original: 'Gracias! Barcelona es mi ciudad favorita. ¿Has estado allí?',
      translated: 'Thank you! Barcelona is my favorite city. Have you been there?',
      sourceLanguage: 'es',
      targetLanguage: 'en',
      timestamp: '14:33',
      confidence: 97.8,
      type: 'text'
    },
    {
      id: 4,
      sender: 'You',
      original: 'Not yet, but it\'s definitely on my travel list now!',
      translated: '¡Aún no, pero definitivamente está en mi lista de viajes ahora!',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      timestamp: '14:35',
      confidence: 95.7,
      type: 'text'
    },
    {
      id: 5,
      sender: 'Maria',
      original: '🎵 [Voice Message: 15s]',
      translated: 'I would love to show you around the city someday!',
      sourceLanguage: 'es',
      targetLanguage: 'en',
      timestamp: '14:36',
      confidence: 94.3,
      type: 'voice'
    }
  ];

  // Translation statistics
  const translationStats = {
    total_translations: 15847,
    accuracy_rate: 96.8,
    languages_supported: 95,
    real_time_speed: '0.3s',
    voice_accuracy: 94.2,
    text_accuracy: 98.1,
    daily_translations: 1247,
    success_rate: 97.3
  };

  // Language popularity data
  const languagePopularity = [
    { language: 'English', users: 45.2, translations: 38.7, matches: 42.1 },
    { language: 'Spanish', users: 18.3, translations: 22.1, matches: 19.8 },
    { language: 'French', users: 12.7, translations: 15.3, matches: 13.9 },
    { language: 'German', users: 8.9, translations: 9.7, matches: 9.2 },
    { language: 'Chinese', users: 7.4, translations: 6.8, matches: 7.1 },
    { language: 'Portuguese', users: 4.2, translations: 4.9, matches: 4.6 },
    { language: 'Other', users: 3.3, translations: 2.5, matches: 3.3 }
  ];

  // Translation accuracy by language pair
  const accuracyByLanguage = [
    { pair: 'EN-ES', accuracy: 98.2, volume: 2847, difficulty: 'Easy' },
    { pair: 'EN-FR', accuracy: 97.8, volume: 1923, difficulty: 'Easy' },
    { pair: 'EN-DE', accuracy: 96.9, volume: 1456, difficulty: 'Medium' },
    { pair: 'EN-ZH', accuracy: 94.3, volume: 1089, difficulty: 'Hard' },
    { pair: 'ES-FR', accuracy: 97.1, volume: 892, difficulty: 'Easy' },
    { pair: 'EN-JA', accuracy: 93.7, volume: 734, difficulty: 'Hard' },
    { pair: 'EN-AR', accuracy: 92.8, volume: 567, difficulty: 'Hard' },
    { pair: 'FR-DE', accuracy: 96.4, volume: 445, difficulty: 'Medium' }
  ];

  // Real-time translation features
  const translationFeatures = [
    {
      id: 'real_time_text',
      name: 'Real-time Text Translation',
      description: 'Instant translation as you type',
      accuracy: 98.1,
      speed: '0.2s',
      enabled: true,
      premium: false
    },
    {
      id: 'voice_translation',
      name: 'Voice Message Translation',
      description: 'Translate voice messages with speech synthesis',
      accuracy: 94.2,
      speed: '0.8s',
      enabled: true,
      premium: false
    },
    {
      id: 'auto_detection',
      name: 'Auto Language Detection',
      description: 'Automatically detect source language',
      accuracy: 96.7,
      speed: '0.1s',
      enabled: true,
      premium: false
    },
    {
      id: 'context_aware',
      name: 'Context-Aware Translation',
      description: 'Consider conversation context for better accuracy',
      accuracy: 97.8,
      speed: '0.4s',
      enabled: false,
      premium: true
    },
    {
      id: 'cultural_adaptation',
      name: 'Cultural Adaptation',
      description: 'Adapt expressions to cultural context',
      accuracy: 95.3,
      speed: '0.5s',
      enabled: false,
      premium: true
    },
    {
      id: 'emotion_preservation',
      name: 'Emotion Preservation',
      description: 'Maintain emotional tone in translations',
      accuracy: 93.9,
      speed: '0.6s',
      enabled: false,
      premium: true
    }
  ];

  // Translation quality metrics
  const qualityMetrics = [
    { week: 'Week 1', accuracy: 92.3, speed: 0.8, user_satisfaction: 87.2 },
    { week: 'Week 2', accuracy: 93.7, speed: 0.7, user_satisfaction: 89.1 },
    { week: 'Week 3', accuracy: 94.8, speed: 0.5, user_satisfaction: 91.3 },
    { week: 'Week 4', accuracy: 95.9, speed: 0.4, user_satisfaction: 93.7 },
    { week: 'Week 5', accuracy: 96.7, speed: 0.3, user_satisfaction: 95.2 },
    { week: 'Week 6', accuracy: 97.4, speed: 0.3, user_satisfaction: 96.8 },
    { week: 'Week 7', accuracy: 98.1, speed: 0.2, user_satisfaction: 97.9 }
  ];

  // Cultural insights
  const culturalInsights = [
    {
      language: 'Spanish',
      insight: 'Use more formal "usted" for initial conversations',
      impact: 'Increases positive response by 23%',
      confidence: 94.7
    },
    {
      language: 'Japanese',
      insight: 'Include appropriate honorifics and politeness levels',
      impact: 'Essential for cultural appropriateness',
      confidence: 97.2
    },
    {
      language: 'Arabic',
      insight: 'Consider right-to-left text flow in interface',
      impact: 'Improves user experience significantly',
      confidence: 98.1
    },
    {
      language: 'German',
      insight: 'Formal "Sie" vs informal "du" affects relationship tone',
      impact: 'Influences conversation progression',
      confidence: 95.8
    }
  ];

  useEffect(() => {
    // Simulate real-time translation accuracy updates
    const interval = setInterval(() => {
      setTranslationAccuracy(prev => Math.min(prev + (Math.random() - 0.4) * 0.2, 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleListening = () => {
    setIsListening(!isListening);
    console.log(`Voice input ${!isListening ? 'enabled' : 'disabled'}`);
    // In a real app, this would start/stop speech recognition
  };

  const translateMessage = (message) => {
    setIsTranslating(true);
    console.log(`Translating: ${message} from ${sourceLanguage} to ${targetLanguage}`);
    
    // Simulate translation delay
    setTimeout(() => {
      setIsTranslating(false);
      console.log('Translation completed');
    }, 300);
    
    // In a real app, this would call translation API
  };

  const swapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
    console.log(`Swapped languages: ${targetLanguage} ↔ ${temp}`);
  };

  const copyTranslation = (text) => {
    navigator.clipboard.writeText(text);
    console.log('Translation copied to clipboard');
  };

  const playVoiceTranslation = (text, language) => {
    console.log(`Playing voice translation: ${text} in ${language}`);
    // In a real app, this would use text-to-speech API
  };

  const getLanguageByCode = (code) => {
    return supportedLanguages.find(lang => lang.code === code) || supportedLanguages[0];
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 95) return 'text-green-600 bg-green-100';
    if (accuracy >= 90) return 'text-blue-600 bg-blue-100';
    if (accuracy >= 85) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Languages className="w-8 h-8 text-purple-600" />
              Multi-Language Real-Time Translation
            </h1>
            <p className="text-gray-600">
              Breaking language barriers with AI-powered real-time translation for global dating connections
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={translationMode}
              onChange={(e) => setTranslationMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="auto">Auto Translation</option>
              <option value="manual">Manual Translation</option>
              <option value="smart">Smart Translation</option>
              <option value="context">Context-Aware</option>
            </select>
            
            <button 
              onClick={toggleListening}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isListening 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {isListening ? 'Stop Listening' : 'Voice Input'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Translations
            </button>
          </div>
        </div>
      </div>

      {/* Translation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Languages className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{translationAccuracy.toFixed(1)}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Translation Quality</h3>
            <p className="text-sm text-gray-600">Real-time accuracy</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{translationStats.languages_supported}</div>
              <div className="text-xs text-gray-500">Languages</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Supported Languages</h3>
            <p className="text-sm text-gray-600">Available for translation</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{translationStats.real_time_speed}</div>
              <div className="text-xs text-gray-500">Speed</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Translation Speed</h3>
            <p className="text-sm text-gray-600">Average response time</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <MessageCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">{translationStats.daily_translations.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Daily Translations</h3>
            <p className="text-sm text-gray-600">Messages translated</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Translation Interface */}
        <div className="lg:col-span-3 space-y-6">
          {/* Language Selection */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Translation Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Language</label>
                <select
                  value={sourceLanguage}
                  onChange={(e) => setSourceLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name} ({lang.native})
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  {getLanguageByCode(sourceLanguage).speakers} speakers worldwide
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={swapLanguages}
                  className="p-3 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Language</label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name} ({lang.native})
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  {getLanguageByCode(targetLanguage).speakers} speakers worldwide
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={autoDetectEnabled}
                    onChange={(e) => setAutoDetectEnabled(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Auto-detect language</span>
                </label>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={voiceTranslationEnabled}
                    onChange={(e) => setVoiceTranslationEnabled(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Voice translation</span>
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Translation Quality:</span>
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${getAccuracyColor(translationAccuracy)}`}>
                  {translationAccuracy.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Conversation History */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Translated Conversation
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {conversationHistory.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md ${message.sender === 'You' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium opacity-75">{message.sender}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs opacity-75">{message.timestamp}</span>
                        {message.type === 'voice' && <Volume2 className="w-3 h-3" />}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs opacity-75">
                            {getLanguageByCode(message.sourceLanguage).flag} Original:
                          </span>
                        </div>
                        <p>{message.original}</p>
                      </div>
                      
                      <div className="text-sm border-t border-white/20 pt-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs opacity-75">
                            {getLanguageByCode(message.targetLanguage).flag} Translation:
                          </span>
                          <span className={`px-1 py-0.5 rounded text-xs ${getAccuracyColor(message.confidence)}`}>
                            {message.confidence}%
                          </span>
                        </div>
                        <p className="font-medium">{message.translated}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => copyTranslation(message.translated)}
                        className="p-1 opacity-75 hover:opacity-100 transition-opacity"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => playVoiceTranslation(message.translated, message.targetLanguage)}
                        className="p-1 opacity-75 hover:opacity-100 transition-opacity"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                      <button className="p-1 opacity-75 hover:opacity-100 transition-opacity">
                        <Share2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Translation Features */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Translation Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {translationFeatures.map((feature) => (
                <div key={feature.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">{feature.name}</h4>
                      {feature.premium && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Premium</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAccuracyColor(feature.accuracy)}`}>
                        {feature.accuracy}%
                      </span>
                      <button
                        className={`w-10 h-5 rounded-full transition-colors ${
                          feature.enabled ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            feature.enabled ? 'translate-x-5' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Speed: {feature.speed}</span>
                    <span>Accuracy: {feature.accuracy}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Popularity Analytics */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Usage Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={languagePopularity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="language" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8b5cf6" name="Users %" />
                <Bar dataKey="translations" fill="#10b981" name="Translations %" />
                <Bar dataKey="matches" fill="#f59e0b" name="Matches %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Translation Quality Trends */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Translation Quality Improvement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={qualityMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={2} name="Accuracy %" />
                <Line type="monotone" dataKey="user_satisfaction" stroke="#10b981" strokeWidth={2} name="User Satisfaction %" />
                <Line type="monotone" dataKey="speed" stroke="#f59e0b" strokeWidth={2} name="Speed (seconds)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Language Accuracy */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Language Pair Accuracy
            </h3>
            <div className="space-y-3">
              {accuracyByLanguage.map((pair, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{pair.pair}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(pair.difficulty)}`}>
                      {pair.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="font-semibold text-purple-600">{pair.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${pair.accuracy}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{pair.volume} translations</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Insights */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Cultural Insights
            </h3>
            <div className="space-y-3">
              {culturalInsights.map((insight, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">{insight.language}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {insight.confidence}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{insight.insight}</p>
                  <p className="text-xs text-green-600 font-medium">{insight.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Translations</span>
                <span className="font-semibold text-purple-600">{translationStats.total_translations.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">{translationStats.success_rate}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Voice Accuracy</span>
                <span className="font-semibold text-blue-600">{translationStats.voice_accuracy}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Text Accuracy</span>
                <span className="font-semibold text-yellow-600">{translationStats.text_accuracy}%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Translation Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4" />
                Language Learning
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                Cultural Guide
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <TrendingUp className="w-4 h-4" />
                Usage Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLanguageRealTimeTranslation;

