import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Users, 
  Heart, 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Flag,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Award,
  Compass,
  Languages,
  Coffee,
  Gift,
  Camera,
  Music,
  Utensils,
  Plane
} from 'lucide-react';

const GlobalCulturalIntelligence = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [culturalProfile, setCulturalProfile] = useState({
    primaryCulture: 'Western',
    secondaryCultures: ['Asian', 'Latin'],
    languagePreferences: ['English', 'Spanish', 'Mandarin'],
    culturalOpenness: 87,
    adaptabilityScore: 92
  });

  const [globalStats, setGlobalStats] = useState({
    totalCountries: 195,
    activeRegions: 47,
    culturalMatches: 156789,
    crossCulturalSuccess: 89.4,
    languageSupport: 127
  });

  const [culturalInsights, setCulturalInsights] = useState([
    {
      region: 'East Asia',
      countries: ['Japan', 'South Korea', 'China'],
      datingCulture: 'Formal introductions and family involvement are highly valued',
      communicationStyle: 'Indirect and respectful, emphasis on non-verbal cues',
      giftGiving: 'Thoughtful gifts that show consideration and respect',
      meetingPreferences: 'Group settings initially, then private dates',
      successRate: 91.2,
      popularActivities: ['Tea ceremonies', 'Cultural festivals', 'Art galleries']
    },
    {
      region: 'Latin America',
      countries: ['Mexico', 'Brazil', 'Argentina'],
      datingCulture: 'Warm, expressive, and family-oriented approach',
      communicationStyle: 'Direct and passionate, physical affection is common',
      giftGiving: 'Flowers, music, and personal touches are appreciated',
      meetingPreferences: 'Social gatherings, dancing, and outdoor activities',
      successRate: 88.7,
      popularActivities: ['Dancing', 'Beach dates', 'Family gatherings']
    },
    {
      region: 'Middle East',
      countries: ['UAE', 'Lebanon', 'Turkey'],
      datingCulture: 'Traditional values with modern adaptations',
      communicationStyle: 'Respectful and formal, building trust over time',
      giftGiving: 'Modest and meaningful gifts that respect traditions',
      meetingPreferences: 'Chaperoned meetings and public spaces',
      successRate: 85.3,
      popularActivities: ['Cultural sites', 'Traditional meals', 'Poetry']
    },
    {
      region: 'Northern Europe',
      countries: ['Sweden', 'Norway', 'Denmark'],
      datingCulture: 'Egalitarian and casual approach to relationships',
      communicationStyle: 'Direct, honest, and straightforward communication',
      giftGiving: 'Practical and environmentally conscious gifts',
      meetingPreferences: 'Outdoor activities and casual coffee dates',
      successRate: 93.1,
      popularActivities: ['Hiking', 'Coffee shops', 'Museums']
    }
  ]);

  const [languageSupport, setLanguageSupport] = useState([
    { language: 'English', speakers: 1500000000, accuracy: 99.2, features: ['Translation', 'Cultural Context', 'Slang Detection'] },
    { language: 'Mandarin', speakers: 918000000, accuracy: 97.8, features: ['Translation', 'Cultural Context', 'Tone Recognition'] },
    { language: 'Spanish', speakers: 559000000, accuracy: 98.5, features: ['Translation', 'Cultural Context', 'Regional Dialects'] },
    { language: 'Hindi', speakers: 602000000, accuracy: 96.3, features: ['Translation', 'Cultural Context', 'Script Support'] },
    { language: 'Arabic', speakers: 422000000, accuracy: 95.7, features: ['Translation', 'Cultural Context', 'Right-to-Left'] },
    { language: 'Portuguese', speakers: 260000000, accuracy: 97.9, features: ['Translation', 'Cultural Context', 'Brazilian/European'] },
    { language: 'Russian', speakers: 258000000, accuracy: 96.8, features: ['Translation', 'Cultural Context', 'Cyrillic Script'] },
    { language: 'Japanese', speakers: 125000000, accuracy: 98.1, features: ['Translation', 'Cultural Context', 'Honorifics'] }
  ]);

  const [culturalEvents, setCulturalEvents] = useState([
    {
      id: 1,
      name: 'International Food Festival',
      date: '2025-01-15',
      location: 'New York, USA',
      cultures: ['Italian', 'Thai', 'Mexican', 'Indian'],
      attendees: 2847,
      type: 'Food & Culture'
    },
    {
      id: 2,
      name: 'Asian Cultural Exchange',
      date: '2025-01-18',
      location: 'London, UK',
      cultures: ['Japanese', 'Korean', 'Chinese', 'Vietnamese'],
      attendees: 1923,
      type: 'Cultural Exchange'
    },
    {
      id: 3,
      name: 'Latin Dance Night',
      date: '2025-01-20',
      location: 'Miami, USA',
      cultures: ['Cuban', 'Colombian', 'Brazilian', 'Argentine'],
      attendees: 3156,
      type: 'Dance & Music'
    },
    {
      id: 4,
      name: 'European Art & Wine',
      date: '2025-01-22',
      location: 'Paris, France',
      cultures: ['French', 'Italian', 'Spanish', 'German'],
      attendees: 1678,
      type: 'Art & Wine'
    }
  ]);

  const [crossCulturalTips, setCrossCulturalTips] = useState([
    {
      category: 'Communication',
      tips: [
        'Learn basic greetings in your match\'s language',
        'Be patient with language barriers and use translation tools',
        'Ask about cultural meanings behind gestures and expressions',
        'Show genuine interest in learning about their culture'
      ]
    },
    {
      category: 'Dating Etiquette',
      tips: [
        'Research dating customs in your match\'s culture',
        'Be respectful of traditional values and family involvement',
        'Understand different concepts of personal space and physical contact',
        'Learn about gift-giving traditions and appropriate gestures'
      ]
    },
    {
      category: 'Food & Dining',
      tips: [
        'Be open to trying new cuisines and dining styles',
        'Learn about dietary restrictions and religious considerations',
        'Understand table manners and eating customs',
        'Share your own cultural foods and cooking traditions'
      ]
    },
    {
      category: 'Celebrations',
      tips: [
        'Learn about important holidays and festivals',
        'Participate respectfully in cultural celebrations',
        'Share your own cultural traditions and holidays',
        'Create fusion celebrations that honor both cultures'
      ]
    }
  ]);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Global Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Globe className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{globalStats.totalCountries}</div>
          <div className="text-sm text-gray-600">Countries Supported</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{globalStats.activeRegions}</div>
          <div className="text-sm text-gray-600">Active Regions</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{globalStats.culturalMatches.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Cultural Matches</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{globalStats.crossCulturalSuccess}%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Languages className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{globalStats.languageSupport}</div>
          <div className="text-sm text-gray-600">Languages</div>
        </div>
      </div>

      {/* Cultural Profile */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Cultural Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Culture</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Western</option>
                  <option>Eastern</option>
                  <option>Latin</option>
                  <option>African</option>
                  <option>Middle Eastern</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language Preferences</label>
                <div className="flex flex-wrap gap-2">
                  {culturalProfile.languagePreferences.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                  <button className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                    + Add Language
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Cultural Openness</span>
                  <span className="text-sm text-gray-600">{culturalProfile.culturalOpenness}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${culturalProfile.culturalOpenness}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Adaptability Score</span>
                  <span className="text-sm text-gray-600">{culturalProfile.adaptabilityScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${culturalProfile.adaptabilityScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Insights */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Dating Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalInsights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{insight.region}</h4>
                <span className="text-sm text-green-600 font-medium">{insight.successRate}% success</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Dating Culture:</span>
                  <p className="text-gray-600">{insight.datingCulture}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Communication:</span>
                  <p className="text-gray-600">{insight.communicationStyle}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Popular Activities:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {insight.popularActivities.map((activity, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLanguageSupport = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Language Support & Translation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languageSupport.map((lang, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{lang.language}</h4>
                <span className="text-sm text-gray-600">{lang.accuracy}%</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {(lang.speakers / 1000000).toFixed(0)}M speakers worldwide
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${lang.accuracy}%` }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-1">
                {lang.features.map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Translation Interface */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-Time Translation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3">
              <option>English</option>
              <option>Spanish</option>
              <option>Mandarin</option>
              <option>French</option>
            </select>
            <textarea
              placeholder="Type your message here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 resize-none"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3">
              <option>Spanish</option>
              <option>English</option>
              <option>Mandarin</option>
              <option>French</option>
            </select>
            <div className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 bg-gray-50 text-gray-600">
              Translation will appear here...
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Translate
          </button>
        </div>
      </div>
    </div>
  );

  const renderCulturalEvents = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Cultural Events & Meetups</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Create Event
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalEvents.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{event.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {event.type}
                </span>
              </div>
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {event.cultures.map((culture, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      <Flag className="w-3 h-3 inline mr-1" />
                      {culture}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {event.attendees} attendees
                </span>
                <button className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCulturalTips = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cross-Cultural Dating Tips</h3>
        <div className="space-y-6">
          {crossCulturalTips.map((section, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                {section.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Compatibility Quiz */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cultural Compatibility Assessment</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">How important is family approval in your relationships?</h4>
            <div className="space-y-2">
              {['Very Important', 'Somewhat Important', 'Not Important', 'Depends on Culture'].map((option, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input type="radio" name="family_approval" className="text-blue-500" />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">What's your approach to physical affection in public?</h4>
            <div className="space-y-2">
              {['Very Comfortable', 'Moderately Comfortable', 'Conservative', 'Depends on Cultural Context'].map((option, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input type="radio" name="physical_affection" className="text-blue-500" />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Complete Assessment
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Global Cultural Intelligence
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigate cross-cultural relationships with confidence. Our AI-powered cultural intelligence 
            helps you understand, respect, and connect across different cultures and traditions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: Globe },
                { id: 'languages', name: 'Languages', icon: Languages },
                { id: 'events', name: 'Cultural Events', icon: Calendar },
                { id: 'tips', name: 'Dating Tips', icon: BookOpen }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'languages' && renderLanguageSupport()}
            {activeTab === 'events' && renderCulturalEvents()}
            {activeTab === 'tips' && renderCulturalTips()}
          </div>
        </div>

        {/* Cultural Sensitivity Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Heart className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Cultural Respect & Understanding</h4>
              <p className="text-sm text-blue-700">
                Our platform promotes cultural understanding and respect. All cultural information is provided 
                as general guidance and may not apply to every individual. Always approach each person as 
                unique and be open to learning about their personal values and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCulturalIntelligence;

