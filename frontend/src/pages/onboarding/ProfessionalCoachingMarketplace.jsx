import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Star, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Phone, 
  MessageCircle, 
  Award,
  BookOpen,
  Heart,
  Brain,
  Shield,
  CheckCircle,
  Filter,
  Search,
  SortAsc,
  DollarSign,
  Globe,
  Languages,
  GraduationCap,
  Briefcase,
  ThumbsUp,
  Eye,
  ArrowRight,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  Zap,
  Target,
  TrendingUp,
  Coffee,
  Home,
  Building,
  Headphones,
  Camera,
  Mic,
  Lock,
  CreditCard,
  Gift,
  Bookmark,
  Share2
} from 'lucide-react';

const ProfessionalCoachingMarketplace = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedSessionType, setSelectedSessionType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [myBookings, setMyBookings] = useState([]);

  // Specialties
  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Users },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'intimacy', name: 'Intimacy & Connection', icon: Heart },
    { id: 'conflict', name: 'Conflict Resolution', icon: Shield },
    { id: 'trust', name: 'Trust & Betrayal', icon: Lock },
    { id: 'premarital', name: 'Premarital Counseling', icon: Award },
    { id: 'marriage', name: 'Marriage Therapy', icon: Users },
    { id: 'divorce', name: 'Divorce Support', icon: AlertCircle },
    { id: 'blended', name: 'Blended Families', icon: Home },
    { id: 'lgbtq', name: 'LGBTQ+ Relationships', icon: Heart },
    { id: 'addiction', name: 'Addiction Recovery', icon: Shield },
    { id: 'trauma', name: 'Trauma-Informed Care', icon: Brain }
  ];

  const sessionTypes = [
    { id: 'all', name: 'All Types', icon: Globe },
    { id: 'video', name: 'Video Call', icon: Video },
    { id: 'phone', name: 'Phone Call', icon: Phone },
    { id: 'chat', name: 'Text Chat', icon: MessageCircle },
    { id: 'inperson', name: 'In-Person', icon: MapPin }
  ];

  const sortOptions = [
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price_low', name: 'Price: Low to High' },
    { id: 'price_high', name: 'Price: High to Low' },
    { id: 'experience', name: 'Most Experienced' },
    { id: 'availability', name: 'Soonest Available' },
    { id: 'reviews', name: 'Most Reviews' }
  ];

  // Sample coaches data
  useEffect(() => {
    setCoaches([
      {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Licensed Marriage & Family Therapist",
        image: "/api/placeholder/150/150",
        rating: 4.9,
        reviewCount: 247,
        experience: 12,
        location: "San Francisco, CA",
        languages: ["English", "Mandarin"],
        specialties: ["communication", "intimacy", "premarital"],
        sessionTypes: ["video", "phone", "inperson"],
        price: 180,
        currency: "USD",
        bio: "Dr. Chen specializes in helping couples build stronger communication patterns and deeper intimacy. With over 12 years of experience, she combines evidence-based approaches with cultural sensitivity.",
        credentials: [
          "PhD in Clinical Psychology - Stanford University",
          "Licensed Marriage & Family Therapist (LMFT)",
          "Gottman Method Couples Therapy Certified",
          "Emotionally Focused Therapy (EFT) Trained"
        ],
        approaches: [
          "Gottman Method",
          "Emotionally Focused Therapy (EFT)",
          "Cognitive Behavioral Therapy (CBT)",
          "Mindfulness-Based Interventions"
        ],
        availability: {
          nextAvailable: "2025-07-08",
          weeklySlots: 15,
          timezone: "PST"
        },
        successRate: 89,
        averageSessionLength: 60,
        responseTime: "< 2 hours",
        verified: true,
        premium: true,
        tags: ["Top Rated", "Quick Response", "Cultural Competency"],
        reviews: [
          {
            id: 1,
            client: "Anonymous",
            rating: 5,
            date: "2025-06-15",
            text: "Dr. Chen helped us transform our communication. We went from constant arguments to understanding each other deeply. Highly recommend!"
          },
          {
            id: 2,
            client: "M & J",
            rating: 5,
            date: "2025-06-10",
            text: "Professional, compassionate, and incredibly effective. Our relationship is stronger than ever thanks to her guidance."
          }
        ]
      },
      {
        id: 2,
        name: "Marcus Thompson, LCSW",
        title: "Clinical Social Worker & Relationship Coach",
        image: "/api/placeholder/150/150",
        rating: 4.8,
        reviewCount: 189,
        experience: 8,
        location: "Austin, TX",
        languages: ["English", "Spanish"],
        specialties: ["conflict", "trust", "marriage"],
        sessionTypes: ["video", "phone", "chat"],
        price: 150,
        currency: "USD",
        bio: "Marcus specializes in conflict resolution and rebuilding trust after betrayal. His direct yet compassionate approach helps couples navigate their most challenging moments.",
        credentials: [
          "MSW - University of Texas at Austin",
          "Licensed Clinical Social Worker (LCSW)",
          "Certified Gottman Therapist",
          "EMDR Therapy Certified"
        ],
        approaches: [
          "Gottman Method",
          "Solution-Focused Brief Therapy",
          "EMDR for Couples",
          "Narrative Therapy"
        ],
        availability: {
          nextAvailable: "2025-07-05",
          weeklySlots: 20,
          timezone: "CST"
        },
        successRate: 85,
        averageSessionLength: 50,
        responseTime: "< 4 hours",
        verified: true,
        premium: false,
        tags: ["Conflict Specialist", "Trauma-Informed", "Bilingual"],
        reviews: [
          {
            id: 1,
            client: "Anonymous",
            rating: 5,
            date: "2025-06-20",
            text: "Marcus helped us work through infidelity and rebuild trust. His approach is practical and healing-focused."
          }
        ]
      },
      {
        id: 3,
        name: "Dr. Aisha Patel",
        title: "Relationship Psychologist & Intimacy Expert",
        image: "/api/placeholder/150/150",
        rating: 4.9,
        reviewCount: 156,
        experience: 15,
        location: "New York, NY",
        languages: ["English", "Hindi", "Gujarati"],
        specialties: ["intimacy", "communication", "lgbtq"],
        sessionTypes: ["video", "phone", "inperson"],
        price: 220,
        currency: "USD",
        bio: "Dr. Patel is a leading expert in intimacy and sexual wellness for couples. She creates a safe, non-judgmental space for couples to explore and enhance their connection.",
        credentials: [
          "PhD in Clinical Psychology - Columbia University",
          "Licensed Psychologist",
          "Certified Sex Therapist (AASECT)",
          "LGBTQ+ Affirmative Therapy Certified"
        ],
        approaches: [
          "Sensate Focus Therapy",
          "Emotionally Focused Therapy (EFT)",
          "Mindfulness-Based Sex Therapy",
          "Acceptance and Commitment Therapy (ACT)"
        ],
        availability: {
          nextAvailable: "2025-07-12",
          weeklySlots: 12,
          timezone: "EST"
        },
        successRate: 92,
        averageSessionLength: 75,
        responseTime: "< 1 hour",
        verified: true,
        premium: true,
        tags: ["Intimacy Expert", "LGBTQ+ Friendly", "Premium"],
        reviews: [
          {
            id: 1,
            client: "Anonymous",
            rating: 5,
            date: "2025-06-18",
            text: "Dr. Patel created such a safe space for us to discuss intimate topics. Our connection has never been stronger."
          }
        ]
      },
      {
        id: 4,
        name: "James Rodriguez, MA",
        title: "Premarital & Family Counselor",
        image: "/api/placeholder/150/150",
        rating: 4.7,
        reviewCount: 203,
        experience: 10,
        location: "Denver, CO",
        languages: ["English", "Spanish"],
        specialties: ["premarital", "blended", "communication"],
        sessionTypes: ["video", "phone", "inperson"],
        price: 130,
        currency: "USD",
        bio: "James helps couples prepare for marriage and navigate the complexities of blended families. His warm approach makes difficult conversations easier.",
        credentials: [
          "MA in Marriage & Family Therapy - Denver Seminary",
          "Licensed Professional Counselor (LPC)",
          "PREPARE/ENRICH Certified",
          "Blended Family Specialist"
        ],
        approaches: [
          "PREPARE/ENRICH Assessment",
          "Family Systems Therapy",
          "Cognitive Behavioral Therapy (CBT)",
          "Strengths-Based Approach"
        ],
        availability: {
          nextAvailable: "2025-07-06",
          weeklySlots: 18,
          timezone: "MST"
        },
        successRate: 88,
        averageSessionLength: 60,
        responseTime: "< 3 hours",
        verified: true,
        premium: false,
        tags: ["Premarital Expert", "Family Focused", "Affordable"],
        reviews: [
          {
            id: 1,
            client: "Anonymous",
            rating: 5,
            date: "2025-06-22",
            text: "James helped us prepare for marriage and blend our families successfully. Couldn't have done it without him!"
          }
        ]
      }
    ]);

    setMyBookings([
      {
        id: 1,
        coachId: 1,
        coachName: "Dr. Sarah Chen",
        date: "2025-07-08",
        time: "2:00 PM",
        duration: 60,
        type: "video",
        status: "confirmed",
        sessionType: "Initial Consultation",
        notes: "Focus on communication patterns"
      },
      {
        id: 2,
        coachId: 2,
        coachName: "Marcus Thompson, LCSW",
        date: "2025-07-15",
        time: "10:00 AM",
        duration: 50,
        type: "video",
        status: "pending",
        sessionType: "Follow-up Session",
        notes: "Continue trust rebuilding work"
      }
    ]);
  }, []);

  const filteredCoaches = coaches.filter(coach => {
    const matchesSearch = coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coach.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coach.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'all' || coach.specialties.includes(selectedSpecialty);
    const matchesSessionType = selectedSessionType === 'all' || coach.sessionTypes.includes(selectedSessionType);
    const matchesPrice = coach.price >= priceRange[0] && coach.price <= priceRange[1];
    
    return matchesSearch && matchesSpecialty && matchesSessionType && matchesPrice;
  });

  const sortedCoaches = [...filteredCoaches].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'experience':
        return b.experience - a.experience;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  const renderCoachCard = (coach) => (
    <div key={coach.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={coach.image}
            alt={coach.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          {coach.verified && (
            <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{coach.name}</h3>
              <p className="text-sm text-gray-600">{coach.title}</p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{coach.rating}</span>
                  <span className="text-sm text-gray-500">({coach.reviewCount})</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{coach.experience} years</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">${coach.price}</div>
              <div className="text-sm text-gray-500">per session</div>
              {coach.premium && (
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mt-1">
                  <Award className="h-3 w-3 mr-1" />
                  Premium
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{coach.bio}</p>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {coach.specialties.slice(0, 3).map(specialty => {
            const specialtyInfo = specialties.find(s => s.id === specialty);
            return (
              <span key={specialty} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {specialtyInfo?.name}
              </span>
            );
          })}
          {coach.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{coach.specialties.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Session Types */}
      <div className="mb-4">
        <div className="flex items-center space-x-3">
          {coach.sessionTypes.map(type => {
            const typeInfo = sessionTypes.find(t => t.id === type);
            const Icon = typeInfo?.icon;
            return (
              <div key={type} className="flex items-center space-x-1 text-gray-600">
                {Icon && <Icon className="h-4 w-4" />}
                <span className="text-xs">{typeInfo?.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <div className="text-sm font-medium text-gray-900">{coach.successRate}%</div>
          <div className="text-xs text-gray-500">Success Rate</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{coach.responseTime}</div>
          <div className="text-xs text-gray-500">Response Time</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{coach.availability.nextAvailable}</div>
          <div className="text-xs text-gray-500">Next Available</div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {coach.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
            <Eye className="h-4 w-4" />
            <span>View Profile</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
            <MessageCircle className="h-4 w-4" />
            <span>Message</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
            Save
          </button>
          <button
            onClick={() => setSelectedCoach(coach)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );

  const renderFilters = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
        >
          <Filter className="h-4 w-4" />
          <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {showFilters && (
        <div className="space-y-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search coaches, specialties, or approaches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {specialties.map(specialty => (
                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
              ))}
            </select>
          </div>

          {/* Session Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
            <select
              value={selectedSessionType}
              onChange={(e) => setSelectedSessionType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sessionTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );

  const renderCoachesList = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{coaches.length}</div>
            <div className="text-sm text-gray-600">Total Coaches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{sortedCoaches.length}</div>
            <div className="text-sm text-gray-600">Available Now</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(coaches.reduce((sum, coach) => sum + coach.rating, 0) / coaches.length * 10) / 10}
            </div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              ${Math.round(coaches.reduce((sum, coach) => sum + coach.price, 0) / coaches.length)}
            </div>
            <div className="text-sm text-gray-600">Avg Price</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {renderFilters()}

      {/* Results */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {sortedCoaches.length} coaches found
        </h3>
        <div className="flex items-center space-x-2">
          <SortAsc className="h-4 w-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Coaches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedCoaches.map(renderCoachCard)}
      </div>

      {sortedCoaches.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No coaches found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search terms.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedSpecialty('all');
              setSelectedSessionType('all');
              setPriceRange([0, 500]);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );

  const renderMyBookings = () => (
    <div className="space-y-6">
      {/* Upcoming Sessions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
        
        {myBookings.filter(booking => booking.status !== 'completed').map(booking => (
          <div key={booking.id} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-medium text-gray-900">{booking.coachName}</h4>
                <p className="text-sm text-gray-600">{booking.sessionType}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                booking.status === 'confirmed' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{booking.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Video className="h-4 w-4 text-gray-400" />
                <span>{booking.duration} min</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-gray-400" />
                <span>{booking.type}</span>
              </div>
            </div>
            
            {booking.notes && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">{booking.notes}</p>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Reschedule
                </button>
                <button className="text-gray-600 hover:text-gray-700 text-sm">
                  Cancel
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Join Session
              </button>
            </div>
          </div>
        ))}

        {myBookings.filter(booking => booking.status !== 'completed').length === 0 && (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No upcoming sessions</h4>
            <p className="text-gray-600 mb-4">Book your first session to get started.</p>
            <button
              onClick={() => setActiveTab('browse')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Coaches
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Professional Coaching Marketplace</h1>
                <p className="text-sm text-gray-600">Connect with certified relationship experts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>Verified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'browse'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Browse Coaches
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'bookings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Sessions
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Saved Coaches
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'browse' && renderCoachesList()}
        {activeTab === 'bookings' && renderMyBookings()}
        {activeTab === 'favorites' && (
          <div className="text-center py-12">
            <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved coaches yet</h3>
            <p className="text-gray-600">Save coaches you're interested in for easy access later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalCoachingMarketplace;

