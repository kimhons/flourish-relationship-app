import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Heart, Gift, Utensils, 
  Music, Camera, Plane, Hotel, Star, ChevronRight,
  CheckCircle, MessageCircle, Phone, Mail, User,
  Search, Filter, ChevronDown, ChevronUp, ArrowRight,
  Sparkles, Award, ThumbsUp, Coffee, Wine, Sunset,
  Bookmark, Share2, MoreHorizontal, X, Plus, Minus,
  CreditCard, CalendarClock, MessageSquare, Headphones
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Textarea } from '../../components/ui/textarea';
import { Progress } from '../../components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Calendar as CalendarComponent } from '../../components/ui/calendar';
import { format } from 'date-fns';
import { Slider } from '../../components/ui/slider';

const RelationshipConciergeService = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showExperienceDetails, setShowExperienceDetails] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestType, setRequestType] = useState('curated');
  const [requestDate, setRequestDate] = useState(new Date());
  const [requestBudget, setRequestBudget] = useState([250]);
  const [requestNotes, setRequestNotes] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showContactConcierge, setShowContactConcierge] = useState(false);
  const [contactMethod, setContactMethod] = useState('chat');
  
  // Sample experience categories
  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'dining', name: 'Fine Dining', icon: <Utensils className="h-4 w-4" /> },
    { id: 'getaway', name: 'Weekend Getaways', icon: <Hotel className="h-4 w-4" /> },
    { id: 'adventure', name: 'Adventures', icon: <Plane className="h-4 w-4" /> },
    { id: 'arts', name: 'Arts & Culture', icon: <Music className="h-4 w-4" /> },
    { id: 'wellness', name: 'Wellness', icon: <Heart className="h-4 w-4" /> },
    { id: 'surprise', name: 'Surprises & Gifts', icon: <Gift className="h-4 w-4" /> }
  ];
  
  // Sample price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: '$100-$250', symbol: '$' },
    { id: 'moderate', name: '$250-$500', symbol: '$$' },
    { id: 'premium', name: '$500-$1000', symbol: '$$$' },
    { id: 'luxury', name: '$1000+', symbol: '$$$$' }
  ];
  
  // Sample locations
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'local', name: 'Local (within 25 miles)' },
    { id: 'regional', name: 'Regional (within 100 miles)' },
    { id: 'domestic', name: 'Domestic Travel' },
    { id: 'international', name: 'International Travel' }
  ];
  
  // Sample concierge team
  const conciergeTeam = [
    {
      name: 'Emily Rodriguez',
      title: 'Lead Relationship Concierge',
      avatar: '/avatars/emily-rodriguez.jpg',
      specialties: ['Fine Dining', 'Arts & Culture', 'Surprise Planning'],
      rating: 4.9,
      reviewCount: 127
    },
    {
      name: 'James Wilson',
      title: 'Travel Experience Specialist',
      avatar: '/avatars/james-wilson.jpg',
      specialties: ['Weekend Getaways', 'Adventure Experiences', 'International Travel'],
      rating: 4.8,
      reviewCount: 93
    },
    {
      name: 'Sophia Chen',
      title: 'Wellness & Relaxation Concierge',
      avatar: '/avatars/sophia-chen.jpg',
      specialties: ['Wellness Retreats', 'Spa Experiences', 'Mindfulness Activities'],
      rating: 4.9,
      reviewCount: 108
    }
  ];
  
  // Sample curated experiences
  const curatedExperiences = [
    {
      id: 'exp-1',
      title: 'Sunset Dinner Cruise',
      category: 'dining',
      price: 'moderate',
      priceAmount: 350,
      location: 'local',
      locationName: 'Harbor City Marina',
      description: 'Enjoy an intimate dinner for two aboard a luxury yacht while cruising along the coastline at sunset. This 3-hour experience includes a gourmet four-course meal prepared by a private chef, premium wine pairings, and breathtaking views.',
      highlights: [
        'Private dining section on the upper deck',
        'Customized menu based on your preferences',
        'Live acoustic music during dinner',
        'Commemorative photo package',
        'Champagne toast at sunset'
      ],
      images: [
        '/experiences/sunset-cruise-1.jpg',
        '/experiences/sunset-cruise-2.jpg',
        '/experiences/sunset-cruise-3.jpg'
      ],
      duration: '3 hours',
      availability: 'Thursday-Sunday, year-round',
      rating: 4.9,
      reviewCount: 48,
      featured: true,
      concierge: conciergeTeam[0]
    },
    {
      id: 'exp-2',
      title: 'Mountain Cabin Retreat',
      category: 'getaway',
      price: 'premium',
      priceAmount: 850,
      location: 'regional',
      locationName: 'Alpine Ridge Mountains',
      description: 'Escape to a luxurious private cabin nestled in the mountains for a weekend of reconnection. This 2-night experience includes a secluded cabin with panoramic views, outdoor hot tub, gourmet meals delivered to your door, and curated activities designed to strengthen your bond.',
      highlights: [
        'Secluded luxury cabin with floor-to-ceiling windows',
        'Outdoor hot tub overlooking mountain vistas',
        'Gourmet meals prepared by a private chef',
        'Guided stargazing experience',
        'Couple's massage in your cabin',
        'Personalized relationship-building activities'
      ],
      images: [
        '/experiences/mountain-cabin-1.jpg',
        '/experiences/mountain-cabin-2.jpg',
        '/experiences/mountain-cabin-3.jpg'
      ],
      duration: '2 nights',
      availability: 'Year-round',
      rating: 4.8,
      reviewCount: 36,
      featured: true,
      concierge: conciergeTeam[1]
    },
    {
      id: 'exp-3',
      title: 'Private Art Class & Gallery Dinner',
      category: 'arts',
      price: 'moderate',
      priceAmount: 450,
      location: 'local',
      locationName: 'Metropolitan Art Museum',
      description: 'Unleash your creativity together with a private art class taught by a renowned local artist, followed by an exclusive after-hours dinner in the museum gallery. This experience combines artistic expression with intimate dining in a culturally rich setting.',
      highlights: [
        'Private art class customized to your interests and skill levels',
        'All materials provided, plus your completed artwork to take home',
        'After-hours access to selected museum galleries',
        'Gourmet dinner served among priceless artworks',
        'Expert art historian to guide your gallery experience',
        'Commemorative book of the featured exhibition'
      ],
      images: [
        '/experiences/art-gallery-1.jpg',
        '/experiences/art-gallery-2.jpg',
        '/experiences/art-gallery-3.jpg'
      ],
      duration: '5 hours',
      availability: 'Tuesday and Thursday evenings',
      rating: 4.7,
      reviewCount: 29,
      featured: false,
      concierge: conciergeTeam[0]
    },
    {
      id: 'exp-4',
      title: 'Couples Wellness Retreat Day',
      category: 'wellness',
      price: 'moderate',
      priceAmount: 475,
      location: 'local',
      locationName: 'Serenity Spa & Wellness Center',
      description: 'Rejuvenate your relationship with a full day of wellness experiences designed for couples. This retreat includes side-by-side massages, a private yoga session, therapeutic hot springs soak, mindfulness meditation, and nourishing farm-to-table meals.',
      highlights: [
        '90-minute couples massage with aromatherapy',
        'Private yoga session tailored to your experience level',
        'Exclusive access to natural hot springs pools',
        'Guided mindfulness meditation focused on relationship connection',
        'Organic farm-to-table lunch and dinner',
        'Take-home wellness kit with bath salts, essential oils, and meditation guide'
      ],
      images: [
        '/experiences/wellness-retreat-1.jpg',
        '/experiences/wellness-retreat-2.jpg',
        '/experiences/wellness-retreat-3.jpg'
      ],
      duration: '8 hours',
      availability: 'Weekends',
      rating: 4.9,
      reviewCount: 42,
      featured: false,
      concierge: conciergeTeam[2]
    },
    {
      id: 'exp-5',
      title: 'Hot Air Balloon Sunrise Champagne',
      category: 'adventure',
      price: 'premium',
      priceAmount: 695,
      location: 'regional',
      locationName: 'Valley Vista Vineyards',
      description: 'Take your relationship to new heights with a private hot air balloon ride at sunrise over scenic vineyards and countryside. After landing, enjoy a gourmet champagne breakfast in a private vineyard pavilion with panoramic views of the landscape you just soared above.',
      highlights: [
        'Private hot air balloon flight for two',
        'Experienced pilot providing local insights during flight',
        'Champagne toast while airborne',
        'Gourmet breakfast in private vineyard pavilion after landing',
        'Professional photo package capturing your experience',
        'Commemorative flight certificate and champagne flutes'
      ],
      images: [
        '/experiences/hot-air-balloon-1.jpg',
        '/experiences/hot-air-balloon-2.jpg',
        '/experiences/hot-air-balloon-3.jpg'
      ],
      duration: '4 hours',
      availability: 'Weather dependent, year-round',
      rating: 4.8,
      reviewCount: 31,
      featured: true,
      concierge: conciergeTeam[1]
    },
    {
      id: 'exp-6',
      title: 'Anniversary Surprise Package',
      category: 'surprise',
      price: 'premium',
      priceAmount: 750,
      location: 'local',
      locationName: 'Delivered to your home',
      description: 'Let our concierge team create a day of surprises for your special someone on your anniversary. This customized experience includes multiple surprise deliveries throughout the day, culminating in a romantic evening reveal that can be tailored to your relationship.',
      highlights: [
        'Morning delivery of premium breakfast and personalized card',
        'Midday surprise gift delivery based on their interests',
        'Afternoon delivery of custom photo memory book',
        'Evening reveal of final surprise (dinner reservation, tickets, etc.)',
        'Transportation provided for evening activities',
        'All details handled discreetly with regular updates to you'
      ],
      images: [
        '/experiences/surprise-package-1.jpg',
        '/experiences/surprise-package-2.jpg',
        '/experiences/surprise-package-3.jpg'
      ],
      duration: 'Full day',
      availability: 'Requires 2 weeks advance booking',
      rating: 4.9,
      reviewCount: 27,
      featured: false,
      concierge: conciergeTeam[0]
    }
  ];
  
  // Sample past bookings
  const pastBookings = [
    {
      id: 'booking-1',
      title: 'Private Beachfront Dinner',
      date: '2025-06-15',
      status: 'completed',
      price: 425,
      image: '/experiences/beachfront-dinner.jpg',
      concierge: conciergeTeam[0],
      rating: 5
    },
    {
      id: 'booking-2',
      title: 'Helicopter City Tour',
      date: '2025-05-22',
      status: 'completed',
      price: 595,
      image: '/experiences/helicopter-tour.jpg',
      concierge: conciergeTeam[1],
      rating: 4
    }
  ];
  
  // Sample upcoming bookings
  const upcomingBookings = [
    {
      id: 'booking-3',
      title: 'Sunset Dinner Cruise',
      date: '2025-07-10',
      status: 'confirmed',
      price: 350,
      image: '/experiences/sunset-cruise-1.jpg',
      concierge: conciergeTeam[0]
    }
  ];
  
  // Sample custom requests
  const customRequests = [
    {
      id: 'request-1',
      title: 'Anniversary Weekend in Wine Country',
      date: '2025-08-05',
      status: 'in-progress',
      budget: '1000-1500',
      concierge: conciergeTeam[1],
      lastUpdated: '2025-07-01'
    }
  ];
  
  // Filter experiences based on search, category, price, and location
  const filterExperiences = () => {
    return curatedExperiences.filter(experience => {
      // Filter by search query
      if (searchQuery && !experience.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !experience.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Filter by category
      if (selectedCategory !== 'all' && experience.category !== selectedCategory) {
        return false;
      }
      
      // Filter by price
      if (selectedPrice !== 'all' && experience.price !== selectedPrice) {
        return false;
      }
      
      // Filter by location
      if (selectedLocation !== 'all' && experience.location !== selectedLocation) {
        return false;
      }
      
      return true;
    });
  };
  
  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
    setShowExperienceDetails(true);
  };
  
  const handleBookExperience = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Experience Booked",
      description: `Your ${selectedExperience.title} has been booked. A concierge will contact you shortly to confirm details.`,
    });
    setShowExperienceDetails(false);
    
    // Add to upcoming bookings (in a real app, this would happen after backend confirmation)
    const newBooking = {
      id: `booking-${upcomingBookings.length + pastBookings.length + 1}`,
      title: selectedExperience.title,
      date: format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'), // 1 week from now
      status: 'pending',
      price: selectedExperience.priceAmount,
      image: selectedExperience.images[0],
      concierge: selectedExperience.concierge
    };
    
    // This is just for demo purposes
    // upcomingBookings.push(newBooking);
  };
  
  const handleCustomRequest = () => {
    setShowRequestForm(true);
  };
  
  const handleSubmitRequest = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Custom Request Submitted",
      description: "Your custom experience request has been submitted. A concierge will contact you within 24 hours.",
    });
    setShowRequestForm(false);
    setRequestType('curated');
    setRequestDate(new Date());
    setRequestBudget([250]);
    setRequestNotes('');
  };
  
  const handleContactConcierge = () => {
    setShowContactConcierge(true);
  };
  
  const handleSubmitContact = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Concierge Contact Requested",
      description: `A concierge will contact you via ${contactMethod} within 2 hours.`,
    });
    setShowContactConcierge(false);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'dining':
        return <Utensils className="h-4 w-4" />;
      case 'getaway':
        return <Hotel className="h-4 w-4" />;
      case 'adventure':
        return <Plane className="h-4 w-4" />;
      case 'arts':
        return <Music className="h-4 w-4" />;
      case 'wellness':
        return <Heart className="h-4 w-4" />;
      case 'surprise':
        return <Gift className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };
  
  const getPriceDisplay = (priceId) => {
    const price = priceRanges.find(p => p.id === priceId);
    return price ? price.symbol : '';
  };
  
  const getLocationName = (locationId) => {
    const location = locations.find(loc => loc.id === locationId);
    return location ? location.name : locationId;
  };
  
  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Relationship Concierge Service</h1>
            <p className="text-muted-foreground mt-1">
              Curated experiences and personalized planning for your relationship
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button onClick={handleCustomRequest}>
              <Sparkles className="h-4 w-4 mr-2" />
              Custom Experience Request
            </Button>
            
            <Button variant="outline" onClick={handleContactConcierge}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Concierge
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="explore" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="requests">Custom Requests</TabsTrigger>
            <TabsTrigger value="concierge">Meet the Team</TabsTrigger>
          </TabsList>
          
          <TabsContent value="explore" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {showFilters ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </Button>
                
                <div className="relative ml-2">
                  <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search experiences..."
                    className="pl-8 w-[200px] md:w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Button className="mt-4 md:mt-0" onClick={handleCustomRequest}>
                <Sparkles className="h-4 w-4 mr-2" />
                Custom Experience Request
              </Button>
            </div>
            
            {showFilters && (
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger id="category" className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category.id} value={category.id}>
                              <div className="flex items-center">
                                {category.icon && <span className="mr-2">{category.icon}</span>}
                                {category.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="price">Price Range</Label>
                      <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                        <SelectTrigger id="price" className="mt-1">
                          <SelectValue placeholder="Select price range" />
                        </SelectTrigger>
                        <SelectContent>
                          {priceRanges.map(price => (
                            <SelectItem key={price.id} value={price.id}>
                              <div className="flex items-center">
                                <span>{price.name}</span>
                                {price.id !== 'all' && (
                                  <span className="ml-2 text-muted-foreground">{price.symbol}</span>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger id="location" className="mt-1">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map(location => (
                            <SelectItem key={location.id} value={location.id}>
                              {location.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterExperiences().map(experience => (
                <Card key={experience.id} className="overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img 
                      src={experience.images[0]} 
                      alt={experience.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 z-20">
                      <Badge className="bg-primary">
                        {getCategoryIcon(experience.category)}
                        <span className="ml-1">{getCategoryName(experience.category)}</span>
                      </Badge>
                    </div>
                    {experience.featured && (
                      <div className="absolute top-2 right-2 z-20">
                        <Badge variant="secondary">
                          <Award className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 z-20">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        <Clock className="h-3 w-3 mr-1" />
                        {experience.duration}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 z-20">
                      <Badge variant="outline" className="bg-black/50 text-white border-none">
                        {getPriceDisplay(experience.price)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {experience.locationName}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {experience.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(experience.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm ml-1">{experience.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({experience.reviewCount})</span>
                      </div>
                      <div className="text-lg font-semibold">
                        {formatCurrency(experience.priceAmount)}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleExperienceSelect(experience)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filterExperiences().length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No experiences found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or create a custom experience request
                </p>
                <Button className="mt-4" onClick={handleCustomRequest}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Custom Experience Request
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="bookings" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Experiences</CardTitle>
                  <CardDescription>
                    Your confirmed and pending experience bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingBookings.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingBookings.map(booking => (
                        <div key={booking.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
                          <div className="w-full md:w-48 h-32 md:h-auto bg-muted">
                            <img 
                              src={booking.image} 
                              alt={booking.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-medium">{booking.title}</h3>
                              <Badge className={booking.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'}>
                                {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {formatDate(booking.date)}
                            </p>
                            <div className="flex items-center mt-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={booking.concierge.avatar} alt={booking.concierge.name} />
                                <AvatarFallback>{booking.concierge.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm ml-2">Concierge: {booking.concierge.name}</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-lg font-semibold">
                                {formatCurrency(booking.price)}
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Contact Concierge
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  Reschedule
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium">No upcoming bookings</h3>
                      <p className="text-muted-foreground mt-1">
                        Explore our curated experiences or create a custom request
                      </p>
                      <div className="flex items-center justify-center space-x-2 mt-4">
                        <Button onClick={() => setActiveTab('explore')}>
                          Browse Experiences
                        </Button>
                        <Button variant="outline" onClick={handleCustomRequest}>
                          Custom Request
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Past Experiences</CardTitle>
                  <CardDescription>
                    Your completed experience bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pastBookings.length > 0 ? (
                    <div className="space-y-4">
                      {pastBookings.map(booking => (
                        <div key={booking.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
                          <div className="w-full md:w-48 h-32 md:h-auto bg-muted">
                            <img 
                              src={booking.image} 
                              alt={booking.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-medium">{booking.title}</h3>
                              <Badge variant="outline">Completed</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              <Calendar className="h-3 w-3 inline mr-1" />
                              {formatDate(booking.date)}
                            </p>
                            <div className="flex items-center mt-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={booking.concierge.avatar} alt={booking.concierge.name} />
                                <AvatarFallback>{booking.concierge.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm ml-2">Concierge: {booking.concierge.name}</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < booking.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm ml-2">Your Rating</span>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-lg font-semibold">
                                {formatCurrency(booking.price)}
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <ThumbsUp className="h-4 w-4 mr-2" />
                                  Write Review
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Sparkles className="h-4 w-4 mr-2" />
                                  Book Again
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                        <Clock className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium">No past bookings</h3>
                      <p className="text-muted-foreground mt-1">
                        Your completed experiences will appear here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="requests" className="mt-6">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <CardTitle>Custom Experience Requests</CardTitle>
                  <CardDescription>
                    Your personalized experience requests
                  </CardDescription>
                </div>
                <Button className="mt-4 sm:mt-0" onClick={handleCustomRequest}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  New Custom Request
                </Button>
              </CardHeader>
              <CardContent>
                {customRequests.length > 0 ? (
                  <div className="space-y-4">
                    {customRequests.map(request => (
                      <Card key={request.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{request.title}</CardTitle>
                            <Badge className="bg-blue-500">
                              {request.status === 'in-progress' ? 'In Progress' : request.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Target Date</p>
                              <p className="font-medium flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDate(request.date)}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Budget Range</p>
                              <p className="font-medium flex items-center">
                                <CreditCard className="h-3 w-3 mr-1" />
                                ${request.budget}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Assigned Concierge</p>
                              <p className="font-medium flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                {request.concierge.name}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <p className="text-sm text-muted-foreground">Last Updated</p>
                            <p className="text-sm">{formatDate(request.lastUpdated)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact Concierge
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                      <Sparkles className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">No custom requests</h3>
                    <p className="text-muted-foreground mt-1">
                      Create a custom experience request tailored to your relationship
                    </p>
                    <Button className="mt-4" onClick={handleCustomRequest}>
                      <Sparkles className="h-4 w-4 mr-2" />
                      New Custom Request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>How Custom Requests Work</CardTitle>
                <CardDescription>
                  Our process for creating your perfect experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">1. Submit Your Request</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Tell us about your ideal experience, including preferences, budget, and timing.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">2. Concierge Consultation</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your dedicated concierge will contact you to discuss details and refine your vision.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">3. Experience Creation</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      We design and arrange every detail of your custom experience for a perfect outcome.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Our Concierge Promise
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>We handle all logistics, reservations, and arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>Your experience is fully customized to your relationship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>No hidden fees - transparent pricing with no surprises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>Satisfaction guarantee on all custom experiences</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="concierge" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conciergeTeam.map((concierge, index) => (
                <Card key={index}>
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={concierge.avatar} alt={concierge.name} />
                        <AvatarFallback>{concierge.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle>{concierge.name}</CardTitle>
                    <CardDescription>{concierge.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(concierge.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-1">{concierge.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({concierge.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {concierge.specialties.map((specialty, i) => (
                          <Badge key={i} variant="outline">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button variant="outline" size="sm" className="mr-2">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>About Our Concierge Team</CardTitle>
                <CardDescription>
                  Dedicated relationship experience specialists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our concierge team consists of relationship experience specialists with backgrounds in hospitality, event planning, and relationship psychology. Each concierge undergoes extensive training in creating meaningful experiences that strengthen bonds and create lasting memories.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Expertise</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Our concierges have an average of 8+ years of experience in luxury hospitality and relationship enhancement.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Personalization</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Each concierge is trained to understand your unique relationship dynamics and preferences.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Availability</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your dedicated concierge is available 7 days a week to assist with any aspect of your experience.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                    Contact Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center">
                      <div className="bg-background p-2 rounded-md mr-3">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Chat</h4>
                        <p className="text-xs text-muted-foreground">
                          Available 24/7
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-background p-2 rounded-md mr-3">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Phone</h4>
                        <p className="text-xs text-muted-foreground">
                          9am - 9pm daily
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-background p-2 rounded-md mr-3">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Email</h4>
                        <p className="text-xs text-muted-foreground">
                          Response within 2 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleContactConcierge}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Concierge Team
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Experience Details Dialog */}
        <Dialog open={showExperienceDetails} onOpenChange={setShowExperienceDetails}>
          <DialogContent className="max-w-4xl">
            {selectedExperience && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary">
                      {getCategoryIcon(selectedExperience.category)}
                      <span className="ml-1">{getCategoryName(selectedExperience.category)}</span>
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {selectedExperience.duration}
                      </Badge>
                      <Badge variant="outline">
                        {getPriceDisplay(selectedExperience.price)}
                      </Badge>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl mt-2">{selectedExperience.title}</DialogTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{selectedExperience.locationName}</span>
                    <Separator orientation="vertical" className="mx-2 h-3" />
                    <span>Available: {selectedExperience.availability}</span>
                  </div>
                </DialogHeader>
                
                <div className="grid grid-cols-3 gap-2 h-64">
                  <div className="col-span-2 rounded-md overflow-hidden">
                    <img 
                      src={selectedExperience.images[0]} 
                      alt={selectedExperience.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-rows-2 gap-2">
                    <div className="rounded-md overflow-hidden">
                      <img 
                        src={selectedExperience.images[1]} 
                        alt={`${selectedExperience.title} detail 1`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-md overflow-hidden">
                      <img 
                        src={selectedExperience.images[2]} 
                        alt={`${selectedExperience.title} detail 2`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-2">Experience Description</h3>
                    <p className="text-muted-foreground">
                      {selectedExperience.description}
                    </p>
                    
                    <h3 className="text-lg font-medium mt-6 mb-2">Highlights</h3>
                    <ul className="space-y-2">
                      {selectedExperience.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-2">
                      {formatCurrency(selectedExperience.priceAmount)}
                      <span className="text-sm font-normal text-muted-foreground ml-2">per couple</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(selectedExperience.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-1">{selectedExperience.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({selectedExperience.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="space-y-4 mb-4">
                      <div>
                        <Label>Select Date</Label>
                        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal mt-2"
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              {format(requestDate, 'PPP')}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                              mode="single"
                              selected={requestDate}
                              onSelect={(date) => {
                                setRequestDate(date || new Date());
                                setCalendarOpen(false);
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label>Number of Guests</Label>
                        <Select defaultValue="2">
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 people (couple)</SelectItem>
                            <SelectItem value="4">4 people (double date)</SelectItem>
                            <SelectItem value="6">6 people (group)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Special Requests</Label>
                        <Textarea 
                          placeholder="Any special requests or dietary restrictions?"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedExperience.concierge.avatar} alt={selectedExperience.concierge.name} />
                        <AvatarFallback>{selectedExperience.concierge.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm font-medium">{selectedExperience.concierge.name}</p>
                        <p className="text-xs text-muted-foreground">Your Concierge for this Experience</p>
                      </div>
                    </div>
                    
                    <Button className="w-full" onClick={handleBookExperience}>
                      Book This Experience
                    </Button>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Free Cancellation (48h)
                      </span>
                      <span className="flex items-center">
                        <Shield className="h-3 w-3 mr-1" />
                        Satisfaction Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={handleContactConcierge}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask Concierge
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        {/* Custom Request Form Dialog */}
        <Dialog open={showRequestForm} onOpenChange={setShowRequestForm}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Custom Experience Request</DialogTitle>
              <DialogDescription>
                Tell us about your ideal experience and we'll make it happen.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label>Request Type</Label>
                <RadioGroup defaultValue="curated" className="mt-2" onValueChange={setRequestType} value={requestType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="curated" id="request-curated" />
                    <Label htmlFor="request-curated" className="flex items-center cursor-pointer">
                      <Sparkles className="h-4 w-4 mr-2 text-primary" />
                      Curated Experience
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="surprise" id="request-surprise" />
                    <Label htmlFor="request-surprise" className="flex items-center cursor-pointer">
                      <Gift className="h-4 w-4 mr-2 text-red-500" />
                      Surprise Planning
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="custom" id="request-custom" />
                    <Label htmlFor="request-custom" className="flex items-center cursor-pointer">
                      <Heart className="h-4 w-4 mr-2 text-pink-500" />
                      Completely Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Experience Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        <div className="flex items-center">
                          {category.icon && <span className="mr-2">{category.icon}</span>}
                          {category.name}
                        </div>
                      </SelectItem>
                    ))}
                    <SelectItem value="multiple">Multiple Categories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Target Date</Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {format(requestDate, 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={requestDate}
                      onSelect={(date) => {
                        setRequestDate(date || new Date());
                        setCalendarOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Budget Range</Label>
                  <span className="text-sm font-medium">
                    {formatCurrency(requestBudget[0])}
                  </span>
                </div>
                <Slider
                  defaultValue={[250]}
                  max={2000}
                  min={100}
                  step={50}
                  value={requestBudget}
                  onValueChange={setRequestBudget}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$100</span>
                  <span>$2000+</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Location Preference</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location preference" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.slice(1).map(location => (
                      <SelectItem key={location.id} value={location.id}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="request-notes">Additional Details</Label>
                <Textarea
                  id="request-notes"
                  placeholder="Tell us about your ideal experience, preferences, special occasions, etc."
                  rows={5}
                  value={requestNotes}
                  onChange={(e) => setRequestNotes(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="concierge-preference" />
                <Label htmlFor="concierge-preference">Request a specific concierge</Label>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowRequestForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitRequest}>
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Contact Concierge Dialog */}
        <Dialog open={showContactConcierge} onOpenChange={setShowContactConcierge}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Contact Concierge Team</DialogTitle>
              <DialogDescription>
                How would you like to be contacted by our concierge team?
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label>Contact Method</Label>
                <RadioGroup defaultValue="chat" className="mt-2" onValueChange={setContactMethod} value={contactMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="chat" id="contact-chat" />
                    <Label htmlFor="contact-chat" className="flex items-center cursor-pointer">
                      <MessageCircle className="h-4 w-4 mr-2 text-blue-500" />
                      In-App Chat
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone" className="flex items-center cursor-pointer">
                      <Phone className="h-4 w-4 mr-2 text-green-500" />
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email" className="flex items-center cursor-pointer">
                      <Mail className="h-4 w-4 mr-2 text-purple-500" />
                      Email
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {contactMethod === 'phone' && (
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select defaultValue="asap">
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm-9pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="space-y-2">
                <Label>Preferred Concierge</Label>
                <Select defaultValue="any">
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred concierge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Available Concierge</SelectItem>
                    {conciergeTeam.map((concierge, index) => (
                      <SelectItem key={index} value={concierge.name.toLowerCase().replace(' ', '-')}>
                        {concierge.name} - {concierge.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-topic">Topic</Label>
                <Textarea
                  id="contact-topic"
                  placeholder="Briefly describe what you'd like to discuss with our concierge team"
                  rows={3}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowContactConcierge(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitContact}>
                Request Contact
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default RelationshipConciergeService;

