import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Video, Phone, MessageCircle, Star, 
  User, MapPin, Award, BookOpen, Heart, Users,
  Filter, Search, ChevronRight, Play, Pause, RotateCcw,
  CheckCircle, AlertCircle, Info, Plus, Settings
} from 'lucide-react';

const PersonalizedCoachingSessions = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [sessionType, setSessionType] = useState('video');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  // Sample coaches data
  const coaches = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Marriage & Family Therapist',
      specialties: ['Communication', 'Conflict Resolution', 'Intimacy'],
      rating: 4.9,
      reviews: 127,
      experience: '12 years',
      location: 'California, USA',
      languages: ['English', 'Spanish'],
      hourlyRate: 150,
      availability: 'Available today',
      image: '/api/placeholder/80/80',
      bio: 'Specializing in evidence-based approaches to strengthen relationships and improve communication patterns.',
      credentials: ['LMFT', 'PhD Psychology', 'Gottman Certified'],
      nextAvailable: '2:00 PM Today'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Certified Relationship Coach',
      specialties: ['Emotional Intelligence', 'Trust Building', 'Life Transitions'],
      rating: 4.8,
      reviews: 89,
      experience: '8 years',
      location: 'New York, USA',
      languages: ['English', 'Mandarin'],
      hourlyRate: 120,
      availability: 'Available tomorrow',
      image: '/api/placeholder/80/80',
      bio: 'Helping couples navigate major life changes and build stronger emotional connections.',
      credentials: ['CRC', 'MA Counseling', 'EFT Trained'],
      nextAvailable: '10:00 AM Tomorrow'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Clinical Psychologist',
      specialties: ['Anxiety & Relationships', 'Premarital Counseling', 'Blended Families'],
      rating: 4.9,
      reviews: 156,
      experience: '15 years',
      location: 'Texas, USA',
      languages: ['English', 'Spanish', 'Portuguese'],
      hourlyRate: 175,
      availability: 'Available this week',
      image: '/api/placeholder/80/80',
      bio: 'Expert in helping couples overcome anxiety-related relationship challenges and prepare for marriage.',
      credentials: ['PhD Clinical Psychology', 'PREPARE/ENRICH Certified'],
      nextAvailable: 'Thu 3:00 PM'
    }
  ];

  // Sample upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      coach: 'Dr. Sarah Johnson',
      date: '2025-07-04',
      time: '2:00 PM',
      type: 'video',
      topic: 'Communication Patterns',
      status: 'confirmed',
      duration: 60
    },
    {
      id: 2,
      coach: 'Michael Chen',
      date: '2025-07-06',
      time: '10:00 AM',
      type: 'phone',
      topic: 'Trust Building Exercises',
      status: 'pending',
      duration: 45
    }
  ];

  // Sample session history
  const sessionHistory = [
    {
      id: 1,
      coach: 'Dr. Sarah Johnson',
      date: '2025-06-28',
      time: '2:00 PM',
      type: 'video',
      topic: 'Initial Assessment',
      rating: 5,
      notes: 'Great first session, identified key areas for improvement',
      duration: 60,
      recording: true
    },
    {
      id: 2,
      coach: 'Dr. Sarah Johnson',
      date: '2025-06-21',
      time: '2:00 PM',
      type: 'video',
      topic: 'Conflict Resolution Strategies',
      rating: 5,
      notes: 'Learned valuable techniques for managing disagreements',
      duration: 60,
      recording: true
    }
  ];

  const availableTimeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true }
  ];

  const specialties = [
    'All Specialties',
    'Communication',
    'Conflict Resolution',
    'Intimacy',
    'Trust Building',
    'Emotional Intelligence',
    'Premarital Counseling',
    'Life Transitions',
    'Anxiety & Relationships',
    'Blended Families'
  ];

  const filteredCoaches = coaches.filter(coach => {
    const matchesSearch = coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         coach.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    const matchesSpecialty = filterSpecialty === 'all' || 
                            coach.specialties.some(specialty => 
                              specialty.toLowerCase().includes(filterSpecialty.toLowerCase())
                            );
    return matchesSearch && matchesSpecialty;
  });

  const handleBookSession = () => {
    if (selectedCoach && selectedTimeSlot && sessionType) {
      alert(`Session booked with ${selectedCoach.name} for ${selectedTimeSlot} via ${sessionType}`);
      setSelectedCoach(null);
      setSelectedTimeSlot(null);
    }
  };

  const renderCoachCard = (coach) => (
    <div key={coach.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={coach.image}
          alt={coach.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{coach.name}</h3>
              <p className="text-gray-600 text-sm">{coach.title}</p>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">
                  {coach.rating} ({coach.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">${coach.hourlyRate}/hr</p>
              <p className="text-sm text-green-600">{coach.availability}</p>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex flex-wrap gap-2 mb-3">
              {coach.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{coach.bio}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {coach.experience}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {coach.location}
                </span>
              </div>
              
              <button
                onClick={() => setSelectedCoach(coach)}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Book Session
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUpcomingSession = (session) => (
    <div key={session.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            {session.type === 'video' && <Video className="w-5 h-5 text-purple-600" />}
            {session.type === 'phone' && <Phone className="w-5 h-5 text-purple-600" />}
            {session.type === 'chat' && <MessageCircle className="w-5 h-5 text-purple-600" />}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{session.topic}</h3>
            <p className="text-gray-600 text-sm">with {session.coach}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${
          session.status === 'confirmed' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {session.status}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {session.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {session.time} ({session.duration} min)
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
            Reschedule
          </button>
          <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Join Session
          </button>
        </div>
      </div>
    </div>
  );

  const renderSessionHistory = (session) => (
    <div key={session.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{session.topic}</h3>
          <p className="text-gray-600 text-sm">with {session.coach}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">Rated {session.rating}/5</span>
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p>{session.date}</p>
          <p>{session.time}</p>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-4">{session.notes}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {session.duration} minutes
          </span>
          {session.recording && (
            <span className="flex items-center text-purple-600">
              <Play className="w-4 h-4 mr-1" />
              Recording available
            </span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
            View Notes
          </button>
          {session.recording && (
            <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Watch Recording
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Personalized Coaching Sessions
          </h1>
          <p className="text-gray-600">
            Connect with certified relationship experts for personalized guidance and support
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'browse', label: 'Browse Coaches', icon: Search },
            { id: 'upcoming', label: 'Upcoming Sessions', icon: Calendar },
            { id: 'history', label: 'Session History', icon: BookOpen }
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

        {/* Browse Coaches Tab */}
        {activeTab === 'browse' && (
          <div>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search coaches by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty.toLowerCase()}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Coaches List */}
            <div className="space-y-6">
              {filteredCoaches.map(renderCoachCard)}
            </div>
          </div>
        )}

        {/* Upcoming Sessions Tab */}
        {activeTab === 'upcoming' && (
          <div>
            {upcomingSessions.length > 0 ? (
              <div className="space-y-6">
                {upcomingSessions.map(renderUpcomingSession)}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming sessions</h3>
                <p className="text-gray-600 mb-6">Book your first session with a certified coach</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Browse Coaches
                </button>
              </div>
            )}
          </div>
        )}

        {/* Session History Tab */}
        {activeTab === 'history' && (
          <div>
            {sessionHistory.length > 0 ? (
              <div className="space-y-6">
                {sessionHistory.map(renderSessionHistory)}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No session history</h3>
                <p className="text-gray-600 mb-6">Your completed sessions will appear here</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Book Your First Session
                </button>
              </div>
            )}
          </div>
        )}

        {/* Booking Modal */}
        {selectedCoach && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Book Session with {selectedCoach.name}
                  </h2>
                  <button
                    onClick={() => setSelectedCoach(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                {/* Coach Info */}
                <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={selectedCoach.image}
                    alt={selectedCoach.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedCoach.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedCoach.title}</p>
                    <p className="text-purple-600 text-sm font-medium">${selectedCoach.hourlyRate}/hour</p>
                  </div>
                </div>

                {/* Session Type */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Session Type</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { type: 'video', icon: Video, label: 'Video Call' },
                      { type: 'phone', icon: Phone, label: 'Phone Call' },
                      { type: 'chat', icon: MessageCircle, label: 'Text Chat' }
                    ].map(({ type, icon: Icon, label }) => (
                      <button
                        key={type}
                        onClick={() => setSessionType(type)}
                        className={`flex flex-col items-center p-4 border rounded-lg transition-colors ${
                          sessionType === type
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Icon className="w-6 h-6 mb-2" />
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Available Time Slots</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {availableTimeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => slot.available && setSelectedTimeSlot(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 border rounded-lg text-sm font-medium transition-colors ${
                          selectedTimeSlot === slot.time
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : slot.available
                            ? 'border-gray-300 hover:border-gray-400'
                            : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedCoach(null)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBookSession}
                    disabled={!selectedTimeSlot || !sessionType}
                    className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Book Session (${selectedCoach.hourlyRate})
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

export default PersonalizedCoachingSessions;

