import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Map, 
  Calendar, 
  Clock, 
  DollarSign, 
  Heart, 
  Compass, 
  Briefcase, 
  Umbrella, 
  Sun, 
  Snowflake, 
  Wind, 
  Cloud, 
  Leaf, 
  Coffee, 
  Wine, 
  Utensils, 
  Music, 
  Camera, 
  BookOpen, 
  Sunset, 
  Mountain, 
  Palmtree, 
  Building, 
  Home, 
  Tent, 
  Hotel, 
  Star, 
  Plus, 
  Minus, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Save, 
  Share2, 
  Download, 
  Printer, 
  Search, 
  Filter, 
  Sparkles,
  Plane,
  Car,
  Train,
  Ship,
  Luggage,
  Clipboard,
  CheckSquare,
  AlertCircle,
  Info,
  HelpCircle,
  MessageSquare,
  Users
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { Calendar as CalendarComponent } from '../../components/ui/calendar';
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { Slider } from '../../components/ui/slider';
import { Switch } from '../../components/ui/switch';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Progress } from '../../components/ui/progress';

// Mock data for retreat destinations
const retreatDestinations = [
  {
    id: 'dest-1',
    name: 'Coastal Serenity Villa',
    location: 'Malibu, California',
    description: 'Luxurious beachfront villa with private access to a secluded cove. Perfect for couples seeking peaceful reconnection with ocean views.',
    priceRange: '$$$',
    activities: ['Beach Walks', 'Couples Massage', 'Sunset Sailing', 'Meditation'],
    amenities: ['Private Pool', 'Hot Tub', 'Gourmet Kitchen', 'Ocean View'],
    climate: 'Warm',
    season: 'Year-round',
    image: '/assets/retreats/coastal-villa.jpg',
    rating: 4.9,
    reviews: 124,
    type: 'Luxury',
    tags: ['Beach', 'Luxury', 'Private']
  },
  {
    id: 'dest-2',
    name: 'Mountain Harmony Lodge',
    location: 'Aspen, Colorado',
    description: 'Cozy mountain retreat surrounded by pine forests and breathtaking views. Ideal for active couples who enjoy outdoor adventures and fireside conversations.',
    priceRange: '$$',
    activities: ['Hiking', 'Skiing', 'Hot Springs', 'Stargazing'],
    amenities: ['Fireplace', 'Panoramic Views', 'Hiking Trails', 'Outdoor Hot Tub'],
    climate: 'Seasonal',
    season: 'All Seasons',
    image: '/assets/retreats/mountain-lodge.jpg',
    rating: 4.8,
    reviews: 98,
    type: 'Rustic Luxury',
    tags: ['Mountains', 'Active', 'Scenic']
  },
  {
    id: 'dest-3',
    name: 'Desert Oasis Retreat',
    location: 'Sedona, Arizona',
    description: 'Spiritual desert sanctuary with red rock views and energy vortexes. Perfect for couples seeking spiritual reconnection and healing.',
    priceRange: '$$',
    activities: ['Yoga', 'Meditation', 'Spiritual Ceremonies', 'Hiking'],
    amenities: ['Meditation Garden', 'Yoga Deck', 'Plunge Pool', 'Desert Views'],
    climate: 'Hot, Dry',
    season: 'Fall, Winter, Spring',
    image: '/assets/retreats/desert-retreat.jpg',
    rating: 4.7,
    reviews: 86,
    type: 'Spiritual',
    tags: ['Desert', 'Spiritual', 'Wellness']
  },
  {
    id: 'dest-4',
    name: 'Tropical Paradise Bungalow',
    location: 'Kauai, Hawaii',
    description: 'Intimate thatched-roof bungalow surrounded by lush tropical gardens and waterfalls. Ideal for couples seeking adventure and romance.',
    priceRange: '$$$',
    activities: ['Snorkeling', 'Waterfall Hikes', 'Couples Massage', 'Surfing'],
    amenities: ['Private Garden', 'Outdoor Shower', 'Hammocks', 'Tropical Views'],
    climate: 'Tropical',
    season: 'Year-round',
    image: '/assets/retreats/tropical-bungalow.jpg',
    rating: 4.9,
    reviews: 142,
    type: 'Tropical',
    tags: ['Tropical', 'Adventure', 'Romantic']
  },
  {
    id: 'dest-5',
    name: 'Lakeside Cabin Retreat',
    location: 'Lake Tahoe, California',
    description: 'Charming wooden cabin on the shores of a crystal-clear lake. Perfect for couples who enjoy water activities and peaceful nature.',
    priceRange: '$$',
    activities: ['Kayaking', 'Fishing', 'Swimming', 'Nature Walks'],
    amenities: ['Lake Access', 'Boat Dock', 'Fire Pit', 'Deck'],
    climate: 'Seasonal',
    season: 'Summer, Fall',
    image: '/assets/retreats/lakeside-cabin.jpg',
    rating: 4.6,
    reviews: 78,
    type: 'Rustic',
    tags: ['Lake', 'Nature', 'Peaceful']
  },
  {
    id: 'dest-6',
    name: 'Vineyard Estate Cottage',
    location: 'Napa Valley, California',
    description: 'Elegant cottage nestled in a working vineyard with wine tasting and culinary experiences. Ideal for couples who appreciate fine food and wine.',
    priceRange: '$$$',
    activities: ['Wine Tasting', 'Cooking Classes', 'Vineyard Tours', 'Hot Air Balloon Rides'],
    amenities: ['Wine Cellar', 'Gourmet Kitchen', 'Vineyard Views', 'Private Patio'],
    climate: 'Mediterranean',
    season: 'Spring, Summer, Fall',
    image: '/assets/retreats/vineyard-cottage.jpg',
    rating: 4.8,
    reviews: 112,
    type: 'Culinary',
    tags: ['Wine Country', 'Culinary', 'Elegant']
  }
];

// Mock data for retreat activities
const retreatActivities = [
  {
    category: 'Wellness',
    activities: [
      { id: 'act-1', name: 'Couples Massage', description: 'Side-by-side massage experience', duration: '90 min', price: '$$' },
      { id: 'act-2', name: 'Partner Yoga', description: 'Guided yoga session for two', duration: '60 min', price: '$' },
      { id: 'act-3', name: 'Meditation Journey', description: 'Guided meditation for couples', duration: '45 min', price: '$' },
      { id: 'act-4', name: 'Hot Springs Soak', description: 'Private mineral hot springs', duration: '120 min', price: '$$' }
    ]
  },
  {
    category: 'Adventure',
    activities: [
      { id: 'act-5', name: 'Sunset Kayaking', description: 'Paddle together at sunset', duration: '120 min', price: '$$' },
      { id: 'act-6', name: 'Hiking Expedition', description: 'Guided hike to scenic viewpoints', duration: '180 min', price: '$' },
      { id: 'act-7', name: 'Zip Line Adventure', description: 'Thrilling zip line course for two', duration: '150 min', price: '$$' },
      { id: 'act-8', name: 'Snorkeling Tour', description: 'Underwater exploration together', duration: '180 min', price: '$$' }
    ]
  },
  {
    category: 'Connection',
    activities: [
      { id: 'act-9', name: 'Relationship Workshop', description: 'Guided exercises to deepen connection', duration: '120 min', price: '$$' },
      { id: 'act-10', name: 'Sunset Beach Picnic', description: 'Private picnic with ocean views', duration: '120 min', price: '$$' },
      { id: 'act-11', name: 'Stargazing Experience', description: 'Guided astronomy with wine and cheese', duration: '90 min', price: '$$' },
      { id: 'act-12', name: 'Couples Photography', description: 'Professional photo session', duration: '60 min', price: '$$$' }
    ]
  },
  {
    category: 'Culinary',
    activities: [
      { id: 'act-13', name: 'Cooking Class', description: 'Learn to prepare a romantic meal', duration: '150 min', price: '$$' },
      { id: 'act-14', name: 'Wine Tasting', description: 'Guided tasting of local wines', duration: '90 min', price: '$$' },
      { id: 'act-15', name: 'Farm-to-Table Dinner', description: 'Private dinner with local ingredients', duration: '120 min', price: '$$$' },
      { id: 'act-16', name: 'Chocolate Making', description: 'Create handmade chocolates together', duration: '90 min', price: '$$' }
    ]
  }
];

// Mock data for retreat packages
const retreatPackages = [
  {
    id: 'pkg-1',
    name: 'Weekend Reconnection',
    description: 'A quick but meaningful retreat designed to help couples reconnect over a weekend.',
    duration: '2-3 days',
    included: [
      'Accommodation for 2 nights',
      '1 Wellness activity',
      '1 Connection activity',
      'Welcome basket',
      'Daily breakfast'
    ],
    priceRange: '$$',
    bestFor: 'Busy couples needing a quick reset',
    image: '/assets/retreats/weekend-package.jpg'
  },
  {
    id: 'pkg-2',
    name: 'Deep Connection Escape',
    description: 'An immersive week-long retreat focused on rebuilding and strengthening your relationship.',
    duration: '5-7 days',
    included: [
      'Accommodation for 6 nights',
      '2 Wellness activities',
      '2 Adventure activities',
      '2 Connection activities',
      '1 Culinary experience',
      'All meals included',
      'Relationship workbook',
      'Private transportation'
    ],
    priceRange: '$$$',
    bestFor: 'Couples seeking significant relationship renewal',
    image: '/assets/retreats/deep-connection-package.jpg'
  },
  {
    id: 'pkg-3',
    name: 'Anniversary Celebration',
    description: 'A special package designed to celebrate relationship milestones with memorable experiences.',
    duration: '3-5 days',
    included: [
      'Luxury accommodation for 4 nights',
      'Champagne welcome',
      'Couples massage',
      'Professional photography session',
      'Private celebration dinner',
      'Daily breakfast',
      'One adventure activity',
      'Anniversary gift'
    ],
    priceRange: '$$$',
    bestFor: 'Couples celebrating a special milestone',
    image: '/assets/retreats/anniversary-package.jpg'
  },
  {
    id: 'pkg-4',
    name: 'Wellness & Renewal',
    description: 'Focus on mutual well-being and health with this rejuvenating retreat package.',
    duration: '4-6 days',
    included: [
      'Accommodation for 5 nights',
      'Daily yoga or meditation',
      'Spa treatments',
      'Nutritious meals',
      'Wellness workshops',
      'Guided nature experiences',
      'Wellness gift set'
    ],
    priceRange: '$$$',
    bestFor: 'Couples focusing on health and wellness together',
    image: '/assets/retreats/wellness-package.jpg'
  }
];

// Mock data for retreat planning tips
const planningTips = [
  {
    title: 'Start Planning Early',
    description: 'Begin planning at least 3-6 months in advance to secure the best accommodations and activities.',
    icon: <Calendar className="h-8 w-8 text-primary" />
  },
  {
    title: 'Set Clear Intentions',
    description: 'Discuss and agree on what you both want to achieve during your retreat - relaxation, adventure, or relationship work.',
    icon: <Heart className="h-8 w-8 text-primary" />
  },
  {
    title: 'Balance Activities',
    description: 'Mix active adventures with relaxation time to create a balanced experience that suits both partners.',
    icon: <Compass className="h-8 w-8 text-primary" />
  },
  {
    title: 'Consider Seasonality',
    description: 'Research the best time to visit your chosen destination for ideal weather and fewer crowds.',
    icon: <Sun className="h-8 w-8 text-primary" />
  },
  {
    title: 'Budget Thoughtfully',
    description: 'Create a realistic budget that includes accommodation, activities, meals, transportation, and a buffer for unexpected expenses.',
    icon: <DollarSign className="h-8 w-8 text-primary" />
  },
  {
    title: 'Disconnect to Reconnect',
    description: 'Consider limiting technology use during your retreat to focus fully on each other.',
    icon: <Users className="h-8 w-8 text-primary" />
  }
];

const RelationshipRetreatPlanning = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('destinations');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showDestinationDialog, setShowDestinationDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [retreatDates, setRetreatDates] = useState({ from: null, to: null });
  const [showSavedDialog, setShowSavedDialog] = useState(false);
  const [planningProgress, setPlanningProgress] = useState(0);
  
  // Calculate planning progress based on selections
  React.useEffect(() => {
    let progress = 0;
    if (selectedDestination) progress += 40;
    if (selectedActivities.length > 0) progress += 20;
    if (retreatDates.from && retreatDates.to) progress += 40;
    setPlanningProgress(progress);
  }, [selectedDestination, selectedActivities, retreatDates]);
  
  const handleViewDestination = (destination) => {
    setSelectedDestination(destination);
    setShowDestinationDialog(true);
  };
  
  const handleSelectDestination = () => {
    setShowDestinationDialog(false);
    
    toast({
      title: "Destination Selected",
      description: `${selectedDestination.name} has been added to your retreat plan.`,
    });
  };
  
  const handleToggleActivity = (activityId) => {
    setSelectedActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      } else {
        return [...prev, activityId];
      }
    });
    
    toast({
      title: "Activities Updated",
      description: "Your retreat activities have been updated.",
    });
  };
  
  const handleSaveRetreatPlan = () => {
    if (planningProgress < 100) {
      toast({
        title: "Incomplete Plan",
        description: "Please complete all sections of your retreat plan before saving.",
        variant: "destructive"
      });
      return;
    }
    
    setShowSavedDialog(true);
    
    toast({
      title: "Retreat Plan Saved",
      description: "Your relationship retreat plan has been saved successfully.",
    });
  };
  
  const getActivityById = (activityId) => {
    for (const category of retreatActivities) {
      const activity = category.activities.find(a => a.id === activityId);
      if (activity) return activity;
    }
    return null;
  };
  
  const formatDateRange = (from, to) => {
    if (!from || !to) return 'Dates not selected';
    
    const fromDate = new Date(from);
    const toDate = new Date(to);
    
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return `${fromDate.toLocaleDateString('en-US', options)} - ${toDate.toLocaleDateString('en-US', options)}`;
  };
  
  const calculateDuration = (from, to) => {
    if (!from || !to) return '0 days';
    
    const fromDate = new Date(from);
    const toDate = new Date(to);
    
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
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
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-3xl font-bold tracking-tight">Relationship Retreat Planning</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Design a meaningful getaway to strengthen your connection
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" onClick={() => setActiveTab('tips')}>
              <HelpCircle className="h-4 w-4 mr-2" />
              Planning Tips
            </Button>
            
            <Button onClick={handleSaveRetreatPlan}>
              <Save className="h-4 w-4 mr-2" />
              Save Retreat Plan
            </Button>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <h2 className="text-2xl font-bold mb-2">Your Retreat Planning Progress</h2>
                <p className="text-muted-foreground mb-4">
                  Complete all sections to create your perfect relationship retreat plan. Our premium planning service helps you design a meaningful getaway tailored to your relationship needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{planningProgress}%</span>
                  </div>
                  <Progress value={planningProgress} className="h-2" />
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mt-2">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-1 ${selectedDestination ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>Destination</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-1 ${selectedActivities.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>Activities</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-1 ${retreatDates.from && retreatDates.to ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>Dates</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                {selectedDestination ? (
                  <Card className="w-full max-w-xs">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Selected Destination</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Map className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold">{selectedDestination.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedDestination.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <Map className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <h3 className="font-medium">No Destination Selected</h3>
                    <p className="text-sm text-muted-foreground">Choose a destination to begin planning</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="destinations" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="tips">Planning Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="destinations" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Retreat Destinations</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search destinations..." 
                    className="pl-8 w-full sm:w-[200px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="$">Budget ($)</SelectItem>
                    <SelectItem value="$$">Moderate ($$)</SelectItem>
                    <SelectItem value="$$$">Luxury ($$$)</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Destination type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                    <SelectItem value="Rustic">Rustic</SelectItem>
                    <SelectItem value="Spiritual">Spiritual</SelectItem>
                    <SelectItem value="Tropical">Tropical</SelectItem>
                    <SelectItem value="Culinary">Culinary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retreatDestinations
                .filter(destination => 
                  (priceFilter === 'all' || destination.priceRange === priceFilter) &&
                  (typeFilter === 'all' || destination.type === typeFilter) &&
                  (searchQuery === '' || 
                   destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   destination.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map(destination => (
                <Card key={destination.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                    {destination.tags.includes('Beach') && <Sunset className="h-16 w-16 text-primary/40" />}
                    {destination.tags.includes('Mountains') && <Mountain className="h-16 w-16 text-primary/40" />}
                    {destination.tags.includes('Desert') && <Sun className="h-16 w-16 text-primary/40" />}
                    {destination.tags.includes('Tropical') && <Palmtree className="h-16 w-16 text-primary/40" />}
                    {destination.tags.includes('Lake') && <Umbrella className="h-16 w-16 text-primary/40" />}
                    {destination.tags.includes('Wine Country') && <Wine className="h-16 w-16 text-primary/40" />}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{destination.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Map className="h-3 w-3 mr-1" />
                          {destination.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{destination.priceRange}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{destination.rating} ({destination.reviews} reviews)</span>
                      </div>
                      <Badge variant="secondary">{destination.type}</Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full" 
                      onClick={() => handleViewDestination(destination)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activities" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Retreat Activities</h2>
              <p className="text-muted-foreground">
                Selected: {selectedActivities.length} activities
              </p>
            </div>
            
            <div className="space-y-8">
              {retreatActivities.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">{category.category} Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.activities.map(activity => (
                      <Card 
                        key={activity.id} 
                        className={cn(
                          "cursor-pointer transition-colors",
                          selectedActivities.includes(activity.id) 
                            ? "border-primary bg-primary/5" 
                            : "hover:border-primary/50"
                        )}
                        onClick={() => handleToggleActivity(activity.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{activity.name}</h4>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <Badge variant="outline">{activity.price}</Badge>
                              <span className="text-xs text-muted-foreground mt-1">{activity.duration}</span>
                            </div>
                          </div>
                          
                          {selectedActivities.includes(activity.id) && (
                            <div className="mt-3 flex items-center text-primary text-sm">
                              <Check className="h-4 w-4 mr-1" />
                              Selected for your retreat
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {selectedActivities.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Your Selected Activities</CardTitle>
                  <CardDescription>
                    You've selected {selectedActivities.length} activities for your retreat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedActivities.map(activityId => {
                      const activity = getActivityById(activityId);
                      if (!activity) return null;
                      
                      return (
                        <div key={activityId} className="flex justify-between items-center p-2 bg-muted rounded-md">
                          <div>
                            <span className="font-medium">{activity.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({activity.duration})</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleActivity(activityId);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="packages" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Retreat Packages</h2>
                <p className="text-muted-foreground">
                  Curated retreat experiences designed for couples
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      {retreatDates.from && retreatDates.to ? (
                        formatDateRange(retreatDates.from, retreatDates.to)
                      ) : (
                        "Select Dates"
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <CalendarComponent
                      mode="range"
                      selected={{
                        from: retreatDates.from ? new Date(retreatDates.from) : undefined,
                        to: retreatDates.to ? new Date(retreatDates.to) : undefined,
                      }}
                      onSelect={(range) => {
                        setRetreatDates({
                          from: range?.from,
                          to: range?.to,
                        });
                        
                        if (range?.from && range?.to) {
                          toast({
                            title: "Dates Selected",
                            description: `Your retreat dates have been set to ${formatDateRange(range.from, range.to)}.`,
                          });
                        }
                      }}
                      numberOfMonths={2}
                      disabled={{ before: new Date() }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {retreatPackages.map(pkg => (
                <Card key={pkg.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                    <Briefcase className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription className="mt-1">{pkg.duration}</CardDescription>
                      </div>
                      <Badge variant="outline">{pkg.priceRange}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Package Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.included.map((item, i) => (
                          <li key={i} className="text-sm flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Best For:</span> {pkg.bestFor}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => {
                        toast({
                          title: "Package Details",
                          description: `View full details of the ${pkg.name} package.`,
                        });
                      }}
                    >
                      View Package Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Custom Retreat Planning</CardTitle>
                <CardDescription>
                  Create a personalized retreat experience tailored to your relationship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="retreat-name">Retreat Name</Label>
                      <Input id="retreat-name" placeholder="Give your retreat a name" />
                    </div>
                    <div>
                      <Label htmlFor="retreat-duration">Duration</Label>
                      <Select defaultValue="3-5">
                        <SelectTrigger id="retreat-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-3">Weekend (2-3 days)</SelectItem>
                          <SelectItem value="3-5">Short Escape (3-5 days)</SelectItem>
                          <SelectItem value="5-7">Week-long (5-7 days)</SelectItem>
                          <SelectItem value="7+">Extended (7+ days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="retreat-goals">Retreat Goals</Label>
                    <Textarea 
                      id="retreat-goals" 
                      placeholder="What do you hope to achieve during this retreat?"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Retreat Focus Areas</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {['Reconnection', 'Adventure', 'Relaxation', 'Healing', 'Celebration', 'Learning'].map(focus => (
                        <div key={focus} className="flex items-center space-x-2">
                          <Checkbox id={`focus-${focus.toLowerCase()}`} />
                          <Label htmlFor={`focus-${focus.toLowerCase()}`}>{focus}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Budget Range</Label>
                    <RadioGroup defaultValue="moderate">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="budget" id="budget" />
                          <Label htmlFor="budget">Budget-Friendly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate">Moderate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="luxury" id="luxury" />
                          <Label htmlFor="luxury">Luxury</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Create Custom Retreat Plan
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="tips" className="mt-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Retreat Planning Tips</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert advice to help you plan a meaningful and transformative relationship retreat.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planningTips.map((tip, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{tip.icon}</div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Retreat Planning Checklist</CardTitle>
                <CardDescription>
                  Use this checklist to ensure you've covered all the important aspects of your retreat planning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'Set clear intentions and goals for your retreat',
                    'Choose dates that work for both partners',
                    'Select a destination that matches your retreat goals',
                    'Research accommodation options',
                    'Plan a mix of activities and relaxation time',
                    'Consider transportation to and from your destination',
                    'Create a realistic budget for your retreat',
                    'Pack appropriately for your destination and activities',
                    'Discuss technology boundaries during your retreat',
                    'Plan for re-entry after your retreat ends'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Checkbox id={`checklist-${i}`} />
                      <Label htmlFor={`checklist-${i}`} className="text-sm">{item}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Checklist
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold mb-2">Need Expert Guidance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our relationship retreat specialists can help you plan the perfect getaway tailored to your specific needs and goals.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      Personalized Planning
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Expert Consultation
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <CheckSquare className="h-3 w-3 mr-1" />
                      Exclusive Bookings
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Button className="w-full" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      <Dialog open={showDestinationDialog} onOpenChange={setShowDestinationDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedDestination?.name}</DialogTitle>
            <DialogDescription>
              {selectedDestination?.location}
            </DialogDescription>
          </DialogHeader>
          
          {selectedDestination && (
            <div className="py-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{selectedDestination.priceRange}</Badge>
                <Badge variant="secondary">{selectedDestination.type}</Badge>
                <div className="flex items-center ml-auto">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{selectedDestination.rating} ({selectedDestination.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {selectedDestination.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Activities</h4>
                  <ul className="space-y-1">
                    {selectedDestination.activities.map((activity, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Amenities</h4>
                  <ul className="space-y-1">
                    {selectedDestination.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted p-3 rounded-md">
                  <h5 className="text-xs text-muted-foreground mb-1">Climate</h5>
                  <p className="font-medium">{selectedDestination.climate}</p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <h5 className="text-xs text-muted-foreground mb-1">Best Season</h5>
                  <p className="font-medium">{selectedDestination.season}</p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <h5 className="text-xs text-muted-foreground mb-1">Price Range</h5>
                  <p className="font-medium">{selectedDestination.priceRange}</p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <h5 className="text-xs text-muted-foreground mb-1">Type</h5>
                  <p className="font-medium">{selectedDestination.type}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedDestination.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDestinationDialog(false)}>Cancel</Button>
            <Button onClick={handleSelectDestination}>
              Select This Destination
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={showSavedDialog} onOpenChange={setShowSavedDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Retreat Plan Saved</DialogTitle>
            <DialogDescription>
              Your relationship retreat plan has been saved successfully.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Your Retreat Summary</h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Destination:</span>
                  <p className="font-medium">{selectedDestination?.name || 'Not selected'}</p>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">Dates:</span>
                  <p className="font-medium">{formatDateRange(retreatDates.from, retreatDates.to)}</p>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <p className="font-medium">{calculateDuration(retreatDates.from, retreatDates.to)}</p>
                </div>
                
                <div>
                  <span className="text-sm text-muted-foreground">Activities:</span>
                  <p className="font-medium">{selectedActivities.length} selected</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              You can access your saved retreat plan anytime from your account dashboard. Would you like to share this plan with your partner?
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSavedDialog(false)}>Close</Button>
            <Button>
              <Share2 className="h-4 w-4 mr-2" />
              Share with Partner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RelationshipRetreatPlanning;

