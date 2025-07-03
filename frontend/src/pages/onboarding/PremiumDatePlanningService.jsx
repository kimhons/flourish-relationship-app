import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Heart, 
  Users, 
  Camera,
  Music,
  Coffee,
  Utensils,
  Plane,
  Car,
  Home,
  TreePine,
  Waves,
  Mountain,
  Sun,
  Moon,
  Sparkles,
  Gift,
  Zap,
  Target,
  Filter,
  Search,
  SortAsc,
  Eye,
  Bookmark,
  Share2,
  Plus,
  Edit3,
  Trash2,
  CheckCircle,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  Crown,
  Award,
  Lightbulb,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  Download,
  Upload,
  RotateCcw,
  Save,
  Send,
  Bell,
  Settings,
  CreditCard,
  Lock,
  Unlock,
  Globe,
  Navigation,
  Compass,
  Route,
  Flag,
  Bookmark as BookmarkIcon
} from 'lucide-react';

const PremiumDatePlanningService = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [dateIdeas, setDateIdeas] = useState([]);
  const [myPlans, setMyPlans] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [planningStep, setPlanningStep] = useState(1);
  const [preferences, setPreferences] = useState({});
  const [conciergeRequests, setConciergeRequests] = useState([]);

  // Date categories
  const categories = [
    { id: 'all', name: 'All Categories', icon: Heart, color: 'bg-pink-500' },
    { id: 'romantic', name: 'Romantic', icon: Heart, color: 'bg-red-500' },
    { id: 'adventure', name: 'Adventure', icon: Mountain, color: 'bg-green-500' },
    { id: 'cultural', name: 'Cultural', icon: Camera, color: 'bg-purple-500' },
    { id: 'food', name: 'Food & Drink', icon: Utensils, color: 'bg-orange-500' },
    { id: 'entertainment', name: 'Entertainment', icon: Music, color: 'bg-blue-500' },
    { id: 'relaxation', name: 'Relaxation', icon: Waves, color: 'bg-teal-500' },
    { id: 'active', name: 'Active', icon: Zap, color: 'bg-yellow-500' },
    { id: 'seasonal', name: 'Seasonal', icon: Sun, color: 'bg-indigo-500' },
    { id: 'unique', name: 'Unique', icon: Sparkles, color: 'bg-pink-500' }
  ];

  const budgetRanges = [
    { id: 'all', name: 'All Budgets' },
    { id: 'free', name: 'Free ($0)' },
    { id: 'low', name: 'Budget-Friendly ($1-50)' },
    { id: 'medium', name: 'Moderate ($51-150)' },
    { id: 'high', name: 'Premium ($151-300)' },
    { id: 'luxury', name: 'Luxury ($300+)' }
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'quick', name: 'Quick (1-2 hours)' },
    { id: 'half', name: 'Half Day (3-5 hours)' },
    { id: 'full', name: 'Full Day (6+ hours)' },
    { id: 'weekend', name: 'Weekend' },
    { id: 'extended', name: 'Extended (3+ days)' }
  ];

  // Sample date ideas
  useEffect(() => {
    setDateIdeas([
      {
        id: 1,
        title: "Sunset Picnic at Botanical Gardens",
        category: "romantic",
        description: "A romantic evening picnic surrounded by beautiful flowers and plants as the sun sets",
        duration: "half",
        budget: "medium",
        price: 85,
        rating: 4.9,
        reviews: 247,
        image: "/api/placeholder/400/300",
        location: "Central Botanical Gardens",
        highlights: [
          "Professional picnic setup included",
          "Gourmet basket for two",
          "Perfect sunset viewing spot",
          "Photography session available"
        ],
        includes: [
          "Premium picnic basket",
          "Blanket and cushions",
          "Bluetooth speaker",
          "Cleanup service"
        ],
        timeSlots: ["5:00 PM", "5:30 PM", "6:00 PM"],
        availability: "Available today",
        premium: true,
        tags: ["Romantic", "Outdoor", "Photography", "Sunset"],
        difficulty: "Easy",
        weatherDependent: true,
        bookingRequired: true,
        cancellationPolicy: "Free cancellation up to 24 hours"
      },
      {
        id: 2,
        title: "Private Cooking Class with Chef",
        category: "food",
        description: "Learn to cook a romantic three-course meal together with a professional chef",
        duration: "half",
        budget: "high",
        price: 220,
        rating: 4.8,
        reviews: 156,
        image: "/api/placeholder/400/300",
        location: "Culinary Studio Downtown",
        highlights: [
          "Professional chef instruction",
          "All ingredients provided",
          "Wine pairing included",
          "Take home recipe cards"
        ],
        includes: [
          "3-course meal preparation",
          "Wine tasting",
          "Aprons and tools",
          "Recipe collection"
        ],
        timeSlots: ["2:00 PM", "6:00 PM"],
        availability: "Available this weekend",
        premium: true,
        tags: ["Cooking", "Learning", "Wine", "Interactive"],
        difficulty: "Beginner-friendly",
        weatherDependent: false,
        bookingRequired: true,
        cancellationPolicy: "48-hour cancellation required"
      },
      {
        id: 3,
        title: "Hot Air Balloon Adventure",
        category: "adventure",
        description: "Soar above the countryside in a romantic hot air balloon ride with champagne toast",
        duration: "half",
        budget: "luxury",
        price: 450,
        rating: 5.0,
        reviews: 89,
        image: "/api/placeholder/400/300",
        location: "Valley View Launch Site",
        highlights: [
          "1-hour balloon flight",
          "Champagne celebration",
          "Professional photography",
          "Certificate of flight"
        ],
        includes: [
          "Pre-flight briefing",
          "Balloon ride",
          "Champagne toast",
          "Digital photo package"
        ],
        timeSlots: ["6:00 AM", "4:00 PM"],
        availability: "Weather permitting",
        premium: true,
        tags: ["Adventure", "Views", "Champagne", "Unique"],
        difficulty: "Easy",
        weatherDependent: true,
        bookingRequired: true,
        cancellationPolicy: "Weather-dependent rescheduling"
      },
      {
        id: 4,
        title: "Art Gallery & Wine Tasting Tour",
        category: "cultural",
        description: "Explore local art galleries followed by a guided wine tasting experience",
        duration: "half",
        budget: "medium",
        price: 120,
        rating: 4.7,
        reviews: 203,
        image: "/api/placeholder/400/300",
        location: "Arts District",
        highlights: [
          "3 gallery visits",
          "Expert art guide",
          "Wine tasting session",
          "Artist meet & greet"
        ],
        includes: [
          "Gallery admission",
          "Professional guide",
          "Wine tasting",
          "Light appetizers"
        ],
        timeSlots: ["1:00 PM", "3:00 PM"],
        availability: "Available weekends",
        premium: false,
        tags: ["Art", "Culture", "Wine", "Educational"],
        difficulty: "Easy",
        weatherDependent: false,
        bookingRequired: true,
        cancellationPolicy: "24-hour cancellation"
      },
      {
        id: 5,
        title: "Couples Spa Retreat",
        category: "relaxation",
        description: "Unwind together with a full day of spa treatments and relaxation",
        duration: "full",
        budget: "luxury",
        price: 380,
        rating: 4.9,
        reviews: 312,
        image: "/api/placeholder/400/300",
        location: "Serenity Spa Resort",
        highlights: [
          "Couples massage",
          "Private relaxation suite",
          "Healthy lunch included",
          "Access to all facilities"
        ],
        includes: [
          "60-min couples massage",
          "Facial treatments",
          "Spa lunch",
          "Robes and amenities"
        ],
        timeSlots: ["9:00 AM", "1:00 PM"],
        availability: "Book 3 days ahead",
        premium: true,
        tags: ["Spa", "Relaxation", "Massage", "Luxury"],
        difficulty: "Relaxing",
        weatherDependent: false,
        bookingRequired: true,
        cancellationPolicy: "72-hour cancellation required"
      },
      {
        id: 6,
        title: "Stargazing & Astronomy Night",
        category: "unique",
        description: "Discover the cosmos together with professional telescopes and expert guidance",
        duration: "half",
        budget: "low",
        price: 45,
        rating: 4.6,
        reviews: 178,
        image: "/api/placeholder/400/300",
        location: "Dark Sky Observatory",
        highlights: [
          "Professional telescopes",
          "Astronomy expert guide",
          "Hot chocolate included",
          "Star chart to take home"
        ],
        includes: [
          "Telescope access",
          "Expert guidance",
          "Warm beverages",
          "Star charts"
        ],
        timeSlots: ["8:00 PM", "9:00 PM"],
        availability: "Clear nights only",
        premium: false,
        tags: ["Astronomy", "Educational", "Romantic", "Night"],
        difficulty: "Easy",
        weatherDependent: true,
        bookingRequired: true,
        cancellationPolicy: "Weather-dependent"
      }
    ]);

    setMyPlans([
      {
        id: 1,
        title: "Anniversary Celebration",
        date: "2025-07-15",
        time: "6:00 PM",
        status: "confirmed",
        activities: [
          { id: 1, title: "Sunset Picnic at Botanical Gardens", time: "6:00 PM" },
          { id: 2, title: "Evening Stroll", time: "8:00 PM" }
        ],
        budget: 150,
        notes: "Remember to bring the camera for photos"
      },
      {
        id: 2,
        title: "Weekend Adventure",
        date: "2025-07-22",
        time: "9:00 AM",
        status: "planning",
        activities: [
          { id: 1, title: "Hot Air Balloon Adventure", time: "6:00 AM" },
          { id: 2, title: "Brunch at Vineyard", time: "10:00 AM" }
        ],
        budget: 520,
        notes: "Weather backup plan needed"
      }
    ]);

    setConciergeRequests([
      {
        id: 1,
        title: "Custom Anniversary Experience",
        description: "Looking for a unique way to celebrate our 5-year anniversary. Love outdoor activities and good food.",
        status: "in_progress",
        budget: "$300-500",
        date: "2025-08-10",
        assignedConcierge: "Sarah Chen",
        lastUpdate: "2025-07-01"
      }
    ]);
  }, []);

  const filteredDateIdeas = dateIdeas.filter(idea => {
    const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
    const matchesBudget = selectedBudget === 'all' || idea.budget === selectedBudget;
    const matchesDuration = selectedDuration === 'all' || idea.duration === selectedDuration;
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesBudget && matchesDuration && matchesSearch;
  });

  const renderDateCard = (idea) => {
    const category = categories.find(c => c.id === idea.category);
    const Icon = category?.icon || Heart;

    return (
      <div key={idea.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <img
            src={idea.image}
            alt={idea.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <div className={`h-8 w-8 ${category?.color} rounded-lg flex items-center justify-center`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {idea.premium && (
              <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Crown className="h-3 w-3" />
                <span>Premium</span>
              </div>
            )}
            <button className="h-8 w-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
              <Bookmark className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
            {idea.availability}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{idea.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{idea.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{idea.rating}</span>
                  <span>({idea.reviews})</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">${idea.price}</div>
              <div className="text-sm text-gray-500">per couple</div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{idea.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {idea.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
            {idea.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{idea.tags.length - 3} more
              </span>
            )}
          </div>
          
          {/* Key Info */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{durations.find(d => d.id === idea.duration)?.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{idea.difficulty}</span>
            </div>
            <div className="flex items-center space-x-1">
              {idea.weatherDependent ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Home className="h-4 w-4 text-gray-400" />
              )}
              <span className="text-gray-600">{idea.weatherDependent ? 'Outdoor' : 'Indoor'}</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                <Eye className="h-4 w-4" />
                <span>Details</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                Add to Plan
              </button>
              <button
                onClick={() => setSelectedDate(idea)}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFilters = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Find Your Perfect Date</h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-1 text-pink-600 hover:text-pink-700"
        >
          <Filter className="h-4 w-4" />
          <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Quick Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.slice(0, 6).map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-pink-100 text-pink-700 border border-pink-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search date ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {budgetRanges.map(budget => (
                <option key={budget.id} value={budget.id}>{budget.name}</option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {durations.map(duration => (
                <option key={duration.id} value={duration.id}>{duration.name}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );

  const renderDiscoverTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Premium Date Planning Service</h2>
            <p className="text-pink-100 mb-4">
              Discover amazing date ideas and let our concierge service handle all the details
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{dateIdeas.length}+</div>
                <div className="text-sm text-pink-100">Date Ideas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-pink-100">Concierge</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-pink-100">Avg Rating</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setShowPlanModal(true)}
              className="bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors flex items-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Plan Custom Date</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {renderFilters()}

      {/* Results */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {filteredDateIdeas.length} date ideas found
        </h3>
        <div className="flex items-center space-x-2">
          <SortAsc className="h-4 w-4 text-gray-400" />
          <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Date Ideas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDateIdeas.map(renderDateCard)}
      </div>

      {filteredDateIdeas.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No date ideas found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or search terms.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedBudget('all');
              setSelectedDuration('all');
            }}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );

  const renderMyPlansTab = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Plans</p>
              <p className="text-2xl font-bold text-pink-600">{myPlans.length}</p>
            </div>
            <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-blue-600">
                {myPlans.filter(plan => new Date(plan.date).getMonth() === new Date().getMonth()).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Budget</p>
              <p className="text-2xl font-bold text-green-600">
                ${myPlans.reduce((sum, plan) => sum + plan.budget, 0)}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-purple-600">
                {myPlans.filter(plan => plan.status === 'confirmed').length}
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Plans List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Date Plans</h3>
          <button
            onClick={() => setShowPlanModal(true)}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Plan</span>
          </button>
        </div>

        {myPlans.length > 0 ? (
          <div className="space-y-4">
            {myPlans.map(plan => (
              <div key={plan.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{plan.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{plan.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{plan.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>${plan.budget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      plan.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {plan.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit3 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Activities */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Activities:</p>
                  <div className="space-y-2">
                    {plan.activities.map(activity => (
                      <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-900">{activity.title}</span>
                        <span className="text-sm text-gray-600">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                {plan.notes && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{plan.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Edit Plan
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 text-sm">
                      Share
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Cancel
                    </button>
                  </div>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No date plans yet</h4>
            <p className="text-gray-600 mb-4">Create your first date plan to get started.</p>
            <button
              onClick={() => setShowPlanModal(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Create Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderConciergeTab = () => (
    <div className="space-y-6">
      {/* Concierge Service Overview */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Personal Date Concierge</h2>
            <p className="text-purple-100 mb-4">
              Let our expert concierge team create the perfect custom date experience for you
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-purple-100">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-purple-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2hrs</div>
                <div className="text-sm text-purple-100">Avg Response</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Request Concierge</span>
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">How Our Concierge Service Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">1. Tell Us Your Vision</h4>
            <p className="text-sm text-gray-600">
              Share your preferences, budget, and special requirements
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">2. Custom Planning</h4>
            <p className="text-sm text-gray-600">
              Our experts create a personalized date experience just for you
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">3. Everything Booked</h4>
            <p className="text-sm text-gray-600">
              We handle all reservations, bookings, and special arrangements
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">4. Enjoy Your Date</h4>
            <p className="text-sm text-gray-600">
              Relax and enjoy your perfectly planned romantic experience
            </p>
          </div>
        </div>
      </div>

      {/* Active Requests */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">My Concierge Requests</h3>
        
        {conciergeRequests.length > 0 ? (
          <div className="space-y-4">
            {conciergeRequests.map(request => (
              <div key={request.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{request.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{request.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    request.status === 'in_progress' 
                      ? 'bg-blue-100 text-blue-800'
                      : request.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status.replace('_', ' ')}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Budget:</span>
                    <span className="ml-1 font-medium">{request.budget}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Date:</span>
                    <span className="ml-1 font-medium">{request.date}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Concierge:</span>
                    <span className="ml-1 font-medium">{request.assignedConcierge}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Update:</span>
                    <span className="ml-1 font-medium">{request.lastUpdate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                      <MessageCircle className="h-4 w-4" />
                      <span>Message Concierge</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </button>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No concierge requests yet</h4>
            <p className="text-gray-600 mb-4">Request our concierge service for a custom date experience.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Request Concierge Service
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
              <div className="h-8 w-8 bg-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Premium Date Planning Service</h1>
                <p className="text-sm text-gray-600">Discover amazing experiences and plan perfect dates</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Crown className="h-4 w-4 text-purple-600" />
                <span>Premium Service</span>
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
              onClick={() => setActiveTab('discover')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'discover'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Discover Dates
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'plans'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Plans
            </button>
            <button
              onClick={() => setActiveTab('concierge')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'concierge'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Concierge Service
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'discover' && renderDiscoverTab()}
        {activeTab === 'plans' && renderMyPlansTab()}
        {activeTab === 'concierge' && renderConciergeTab()}
      </div>
    </div>
  );
};

export default PremiumDatePlanningService;

