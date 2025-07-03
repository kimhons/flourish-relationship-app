import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Users, Star, Heart, 
  Video, Mic, Coffee, Award, Gift, Sparkles,
  Filter, Search, ChevronRight, ChevronLeft,
  BookOpen, Play, Download, Share2, Bell,
  User, Globe, Ticket, CreditCard, Check,
  Plus, Settings, Info, AlertCircle, ExternalLink
} from 'lucide-react';

const ExclusiveEventsAccess = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Sample exclusive events data
  const exclusiveEvents = [
    {
      id: 1,
      title: 'Couples Communication Masterclass',
      subtitle: 'Advanced Techniques for Deeper Connection',
      type: 'workshop',
      category: 'Communication',
      date: '2025-07-15',
      time: '7:00 PM EST',
      duration: '2 hours',
      format: 'virtual',
      instructor: 'Dr. Sarah Johnson',
      instructorTitle: 'Licensed Marriage Therapist',
      capacity: 50,
      registered: 32,
      price: 'Included',
      level: 'Intermediate',
      description: 'Learn advanced communication techniques that strengthen emotional bonds and resolve conflicts constructively.',
      image: '/api/placeholder/400/250',
      features: ['Live Q&A', 'Workbook Included', 'Recording Available', 'Certificate'],
      status: 'open'
    },
    {
      id: 2,
      title: 'Romantic Date Night Planning Workshop',
      subtitle: 'Creating Memorable Experiences Together',
      type: 'workshop',
      category: 'Romance',
      date: '2025-07-20',
      time: '6:00 PM EST',
      duration: '90 minutes',
      format: 'virtual',
      instructor: 'Michael Chen',
      instructorTitle: 'Relationship Coach',
      capacity: 75,
      registered: 45,
      price: 'Included',
      level: 'Beginner',
      description: 'Discover creative and meaningful date ideas that reignite passion and create lasting memories.',
      image: '/api/placeholder/400/250',
      features: ['Interactive Activities', 'Date Planning Templates', 'Resource Library'],
      status: 'open'
    },
    {
      id: 3,
      title: 'Annual Relationship Summit 2025',
      subtitle: 'The Future of Love and Connection',
      type: 'conference',
      category: 'Special Event',
      date: '2025-08-10',
      time: '9:00 AM EST',
      duration: '8 hours',
      format: 'hybrid',
      instructor: 'Multiple Experts',
      instructorTitle: 'Industry Leaders',
      capacity: 500,
      registered: 287,
      price: 'Premium Only',
      level: 'All Levels',
      description: 'Join relationship experts from around the world for a full day of insights, workshops, and networking.',
      image: '/api/placeholder/400/250',
      features: ['10+ Sessions', 'Networking Lounge', 'VIP Access', 'Swag Bag', 'Recordings'],
      status: 'featured'
    },
    {
      id: 4,
      title: 'Mindful Intimacy Circle',
      subtitle: 'Building Deeper Physical and Emotional Connection',
      type: 'circle',
      category: 'Intimacy',
      date: '2025-07-25',
      time: '8:00 PM EST',
      duration: '75 minutes',
      format: 'virtual',
      instructor: 'Dr. Emily Rodriguez',
      instructorTitle: 'Clinical Psychologist',
      capacity: 20,
      registered: 18,
      price: 'Included',
      level: 'Advanced',
      description: 'A safe space to explore mindfulness practices that enhance intimacy and connection.',
      image: '/api/placeholder/400/250',
      features: ['Small Group', 'Guided Meditation', 'Private Discussion'],
      status: 'almost-full'
    }
  ];

  // Sample past events
  const pastEvents = [
    {
      id: 5,
      title: 'Conflict Resolution Bootcamp',
      date: '2025-06-20',
      rating: 4.9,
      attendees: 85,
      recording: true,
      materials: true,
      certificate: true
    },
    {
      id: 6,
      title: 'Love Languages Deep Dive',
      date: '2025-06-15',
      rating: 4.8,
      attendees: 120,
      recording: true,
      materials: true,
      certificate: true
    }
  ];

  const eventCategories = [
    'All Categories',
    'Communication',
    'Romance',
    'Intimacy',
    'Conflict Resolution',
    'Special Event',
    'Wellness',
    'Personal Growth'
  ];

  const dateFilters = [
    { value: 'all', label: 'All Dates' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-month', label: 'This Month' },
    { value: 'next-month', label: 'Next Month' }
  ];

  const filteredEvents = exclusiveEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || 
                           event.category.toLowerCase().includes(filterCategory.toLowerCase());
    
    // Date filtering logic would be implemented here
    const matchesDate = filterDate === 'all'; // Simplified for demo
    
    return matchesSearch && matchesCategory && matchesDate;
  });

  const handleRegisterEvent = (event) => {
    if (event.status === 'almost-full' || event.registered >= event.capacity) {
      alert('This event is full. You have been added to the waitlist.');
    } else {
      alert(`Successfully registered for "${event.title}"!`);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'featured':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'almost-full':
        return 'bg-orange-100 text-orange-700';
      case 'open':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'featured':
        return 'Featured Event';
      case 'almost-full':
        return 'Almost Full';
      case 'open':
        return 'Open Registration';
      default:
        return 'Available';
    }
  };

  const renderEventCard = (event) => (
    <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(event.status)}`}>
            {getStatusText(event.status)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-sm rounded">
            {event.format === 'virtual' ? 'Virtual' : event.format === 'hybrid' ? 'Hybrid' : 'In-Person'}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
            {event.category}
          </span>
          <span className="text-sm text-gray-500 capitalize">{event.type}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {event.date} at {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            {event.duration}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <User className="w-4 h-4 mr-2" />
            {event.instructor} - {event.instructorTitle}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            {event.registered}/{event.capacity} registered
          </div>
        </div>
        
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-purple-600">{event.price}</span>
            <span className="text-sm text-gray-500 ml-2">{event.level}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedEvent(event)}
              className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Details
            </button>
            <button
              onClick={() => handleRegisterEvent(event)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPastEventCard = (event) => (
    <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{event.title}</h3>
          <p className="text-gray-600 text-sm">{event.date}</p>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span className="text-sm text-gray-600">{event.rating}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <span className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {event.attendees} attended
        </span>
      </div>
      
      <div className="flex space-x-2">
        {event.recording && (
          <button className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            <Play className="w-4 h-4 mr-1" />
            Watch Recording
          </button>
        )}
        {event.materials && (
          <button className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Download className="w-4 h-4 mr-1" />
            Materials
          </button>
        )}
        {event.certificate && (
          <button className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <Award className="w-4 h-4 mr-1" />
            Certificate
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Exclusive Events Access
              </h1>
              <p className="text-gray-600">
                Premium workshops, masterclasses, and special events for relationship growth
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell className="w-4 h-4 mr-2" />
                Event Alerts
              </button>
              <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Calendar className="w-4 h-4 mr-2" />
                My Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'upcoming', label: 'Upcoming Events', icon: Calendar },
            { id: 'past', label: 'Past Events', icon: BookOpen },
            { id: 'favorites', label: 'My Favorites', icon: Heart }
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

        {/* Upcoming Events Tab */}
        {activeTab === 'upcoming' && (
          <div>
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, instructors, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {eventCategories.map((category, index) => (
                  <option key={index} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {dateFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured Event Banner */}
            {filteredEvents.find(event => event.status === 'featured') && (
              <div className="mb-8">
                {(() => {
                  const featuredEvent = filteredEvents.find(event => event.status === 'featured');
                  return (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <Sparkles className="w-6 h-6 mr-2" />
                          <span className="text-sm font-medium">Featured Event</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{featuredEvent.title}</h2>
                        <p className="text-purple-100 mb-4">{featuredEvent.subtitle}</p>
                        <div className="flex items-center space-x-6 mb-6">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredEvent.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredEvent.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {featuredEvent.registered}/{featuredEvent.capacity} registered
                          </span>
                        </div>
                        <div className="flex space-x-4">
                          <button
                            onClick={() => setSelectedEvent(featuredEvent)}
                            className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                          >
                            Learn More
                          </button>
                          <button
                            onClick={() => handleRegisterEvent(featuredEvent)}
                            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-colors font-medium"
                          >
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredEvents.filter(event => event.status !== 'featured').map(renderEventCard)}
            </div>
          </div>
        )}

        {/* Past Events Tab */}
        {activeTab === 'past' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Event History</h2>
              <p className="text-gray-600">Access recordings, materials, and certificates from events you've attended</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(renderPastEventCard)}
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite events yet</h3>
            <p className="text-gray-600 mb-6">Save events you're interested in to access them quickly</p>
            <button
              onClick={() => setActiveTab('upcoming')}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Browse Events
            </button>
          </div>
        )}

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(selectedEvent.status)}`}>
                    {getStatusText(selectedEvent.status)}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mr-3">
                        {selectedEvent.category}
                      </span>
                      <span className="text-sm text-gray-500 capitalize">{selectedEvent.type}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</h2>
                    <p className="text-gray-600 text-lg">{selectedEvent.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{selectedEvent.price}</div>
                    <div className="text-sm text-gray-500">{selectedEvent.level}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Event Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{selectedEvent.date} at {selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{selectedEvent.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="capitalize">{selectedEvent.format}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{selectedEvent.registered}/{selectedEvent.capacity} registered</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Instructor</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{selectedEvent.instructor}</div>
                        <div className="text-sm text-gray-600">{selectedEvent.instructorTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">About This Event</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">What's Included</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedEvent.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleRegisterEvent(selectedEvent);
                      setSelectedEvent(null);
                    }}
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register for Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExclusiveEventsAccess;

