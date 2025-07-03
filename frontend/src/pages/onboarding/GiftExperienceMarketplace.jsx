import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Search, 
  Filter, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Bookmark, 
  Share2, 
  ChevronRight, 
  ChevronLeft, 
  Tag, 
  Truck, 
  CreditCard, 
  Package, 
  Sparkles,
  Ticket,
  Coffee,
  Utensils,
  Wine,
  Music,
  Camera,
  Sunset,
  Compass,
  Zap,
  MessageCircle,
  Users,
  ThumbsUp,
  Award,
  Check,
  X,
  Info,
  AlertCircle,
  HelpCircle,
  ShoppingBag
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Input } from '../../components/ui/input';
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
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Progress } from '../../components/ui/progress';

// Mock data for gift categories
const giftCategories = [
  { id: 'cat-1', name: 'Romantic Gifts', icon: <Heart className="h-5 w-5" /> },
  { id: 'cat-2', name: 'Experience Vouchers', icon: <Ticket className="h-5 w-5" /> },
  { id: 'cat-3', name: 'Relationship Games', icon: <Zap className="h-5 w-5" /> },
  { id: 'cat-4', name: 'Couple Activities', icon: <Users className="h-5 w-5" /> },
  { id: 'cat-5', name: 'Milestone Gifts', icon: <Award className="h-5 w-5" /> },
  { id: 'cat-6', name: 'Subscription Boxes', icon: <Package className="h-5 w-5" /> }
];

// Mock data for gifts
const gifts = [
  {
    id: 'gift-1',
    name: 'Personalized Love Letter Kit',
    description: 'Beautiful stationery set with prompts to help you write meaningful love letters to each other.',
    price: 34.99,
    rating: 4.8,
    reviews: 126,
    category: 'cat-1',
    tags: ['Romantic', 'Personalized', 'Communication'],
    image: '/assets/gifts/love-letter-kit.jpg',
    bestseller: true,
    delivery: '2-3 business days',
    inStock: true
  },
  {
    id: 'gift-2',
    name: 'Couples Cooking Class Voucher',
    description: 'Learn to prepare a gourmet meal together with expert guidance. Available in multiple cities.',
    price: 89.99,
    rating: 4.9,
    reviews: 214,
    category: 'cat-2',
    tags: ['Experience', 'Culinary', 'Learning'],
    image: '/assets/gifts/cooking-class.jpg',
    bestseller: true,
    delivery: 'Instant Digital Voucher',
    inStock: true
  },
  {
    id: 'gift-3',
    name: 'Intimacy Card Game',
    description: 'Card game designed to deepen emotional and physical intimacy through thoughtful questions and activities.',
    price: 24.99,
    rating: 4.7,
    reviews: 352,
    category: 'cat-3',
    tags: ['Game', 'Intimacy', 'Connection'],
    image: '/assets/gifts/intimacy-game.jpg',
    bestseller: false,
    delivery: '2-3 business days',
    inStock: true
  },
  {
    id: 'gift-4',
    name: 'Sunset Kayaking Experience',
    description: 'Paddle together as the sun sets over the water. A romantic and peaceful experience to share.',
    price: 75.00,
    rating: 4.9,
    reviews: 98,
    category: 'cat-4',
    tags: ['Outdoor', 'Adventure', 'Romantic'],
    image: '/assets/gifts/kayaking.jpg',
    bestseller: false,
    delivery: 'Instant Digital Voucher',
    inStock: true
  },
  {
    id: 'gift-5',
    name: 'Custom Anniversary Star Map',
    description: 'Beautiful print showing the exact star alignment from your special date and location.',
    price: 49.99,
    rating: 4.8,
    reviews: 176,
    category: 'cat-5',
    tags: ['Personalized', 'Anniversary', 'Keepsake'],
    image: '/assets/gifts/star-map.jpg',
    bestseller: true,
    delivery: '5-7 business days',
    inStock: true
  },
  {
    id: 'gift-6',
    name: 'Monthly Date Night Box Subscription',
    description: 'Curated box delivered monthly with everything you need for a unique date night at home.',
    price: 39.99,
    rating: 4.6,
    reviews: 284,
    category: 'cat-6',
    tags: ['Subscription', 'Date Night', 'Surprise'],
    image: '/assets/gifts/date-box.jpg',
    bestseller: false,
    delivery: 'Monthly Subscription',
    inStock: true
  },
  {
    id: 'gift-7',
    name: 'Couples Massage Voucher',
    description: 'Relaxing side-by-side massage experience at a premium spa. Available nationwide.',
    price: 120.00,
    rating: 4.9,
    reviews: 312,
    category: 'cat-2',
    tags: ['Wellness', 'Relaxation', 'Luxury'],
    image: '/assets/gifts/massage.jpg',
    bestseller: true,
    delivery: 'Instant Digital Voucher',
    inStock: true
  },
  {
    id: 'gift-8',
    name: 'Relationship Growth Journal',
    description: 'Guided journal with prompts designed for couples to reflect and grow together.',
    price: 29.99,
    rating: 4.7,
    reviews: 143,
    category: 'cat-1',
    tags: ['Journal', 'Growth', 'Communication'],
    image: '/assets/gifts/journal.jpg',
    bestseller: false,
    delivery: '2-3 business days',
    inStock: true
  },
  {
    id: 'gift-9',
    name: 'Adventure Challenge Couples Edition',
    description: 'Book of 50 creative adventures for couples to experience together. Scratch off to reveal each challenge.',
    price: 39.99,
    rating: 4.8,
    reviews: 526,
    category: 'cat-3',
    tags: ['Adventure', 'Surprise', 'Activities'],
    image: '/assets/gifts/adventure-book.jpg',
    bestseller: true,
    delivery: '2-3 business days',
    inStock: true
  },
  {
    id: 'gift-10',
    name: 'Wine Tasting Experience',
    description: 'Guided wine tasting for two at a premium vineyard, including tour and souvenir glasses.',
    price: 95.00,
    rating: 4.8,
    reviews: 187,
    category: 'cat-4',
    tags: ['Culinary', 'Experience', 'Romantic'],
    image: '/assets/gifts/wine-tasting.jpg',
    bestseller: false,
    delivery: 'Instant Digital Voucher',
    inStock: true
  },
  {
    id: 'gift-11',
    name: 'Custom Couple Portrait',
    description: 'Hand-drawn digital portrait of you as a couple, delivered as a high-quality print.',
    price: 65.00,
    rating: 4.9,
    reviews: 92,
    category: 'cat-5',
    tags: ['Art', 'Personalized', 'Keepsake'],
    image: '/assets/gifts/portrait.jpg',
    bestseller: false,
    delivery: '7-10 business days',
    inStock: true
  },
  {
    id: 'gift-12',
    name: 'Gourmet Dinner Delivery Subscription',
    description: 'Monthly delivery of premium ingredients and recipes for a romantic dinner at home.',
    price: 59.99,
    rating: 4.7,
    reviews: 156,
    category: 'cat-6',
    tags: ['Culinary', 'Subscription', 'Date Night'],
    image: '/assets/gifts/dinner-kit.jpg',
    bestseller: false,
    delivery: 'Monthly Subscription',
    inStock: true
  }
];

// Mock data for experiences
const experiences = [
  {
    id: 'exp-1',
    name: 'Hot Air Balloon Sunrise Flight',
    description: 'Experience the magic of floating above the landscape as the sun rises, followed by a champagne toast.',
    price: 299.99,
    rating: 4.9,
    reviews: 87,
    location: 'Multiple Locations',
    duration: '3-4 hours',
    tags: ['Adventure', 'Romantic', 'Memorable'],
    image: '/assets/experiences/balloon.jpg',
    bestseller: true,
    availability: 'Year-round, weather dependent',
    bookingWindow: 'Reserve 2+ weeks in advance'
  },
  {
    id: 'exp-2',
    name: 'Private Beachside Dinner',
    description: 'Exclusive dinner for two on a private beach with personal chef and butler service.',
    price: 249.99,
    rating: 5.0,
    reviews: 64,
    location: 'Coastal Locations',
    duration: '2-3 hours',
    tags: ['Romantic', 'Culinary', 'Luxury'],
    image: '/assets/experiences/beach-dinner.jpg',
    bestseller: true,
    availability: 'Seasonal',
    bookingWindow: 'Reserve 3+ weeks in advance'
  },
  {
    id: 'exp-3',
    name: 'Couples Photography Session',
    description: 'Professional photography session to capture your connection in a beautiful location of your choice.',
    price: 199.99,
    rating: 4.8,
    reviews: 112,
    location: 'Your Choice',
    duration: '1-2 hours',
    tags: ['Keepsake', 'Creative', 'Personalized'],
    image: '/assets/experiences/photography.jpg',
    bestseller: false,
    availability: 'Year-round',
    bookingWindow: 'Reserve 1+ week in advance'
  },
  {
    id: 'exp-4',
    name: 'Stargazing & Astronomy Tour',
    description: 'Guided stargazing experience with professional telescopes and astronomy expert in a dark sky location.',
    price: 89.99,
    rating: 4.7,
    reviews: 93,
    location: 'Dark Sky Locations',
    duration: '2-3 hours',
    tags: ['Educational', 'Romantic', 'Evening'],
    image: '/assets/experiences/stargazing.jpg',
    bestseller: false,
    availability: 'Year-round, clear nights only',
    bookingWindow: 'Reserve 3+ days in advance'
  },
  {
    id: 'exp-5',
    name: 'Couples Pottery Class',
    description: 'Create pottery together in this hands-on class inspired by the famous "Ghost" scene.',
    price: 79.99,
    rating: 4.6,
    reviews: 128,
    location: 'Multiple Cities',
    duration: '2 hours',
    tags: ['Creative', 'Learning', 'Fun'],
    image: '/assets/experiences/pottery.jpg',
    bestseller: false,
    availability: 'Year-round',
    bookingWindow: 'Reserve 3+ days in advance'
  },
  {
    id: 'exp-6',
    name: 'Private Dance Lesson',
    description: 'Learn to dance together with a private instructor. Choose from salsa, tango, ballroom, and more.',
    price: 99.99,
    rating: 4.8,
    reviews: 156,
    location: 'Multiple Cities',
    duration: '1 hour',
    tags: ['Active', 'Learning', 'Fun'],
    image: '/assets/experiences/dance.jpg',
    bestseller: true,
    availability: 'Year-round',
    bookingWindow: 'Reserve 1+ week in advance'
  },
  {
    id: 'exp-7',
    name: 'Helicopter City Tour',
    description: 'See your city from above in this private helicopter tour for two with champagne.',
    price: 349.99,
    rating: 4.9,
    reviews: 78,
    location: 'Major Cities',
    duration: '30-45 minutes',
    tags: ['Adventure', 'Luxury', 'Memorable'],
    image: '/assets/experiences/helicopter.jpg',
    bestseller: false,
    availability: 'Year-round, weather dependent',
    bookingWindow: 'Reserve 2+ weeks in advance'
  },
  {
    id: 'exp-8',
    name: 'Couple\'s Spa Day',
    description: 'Full day of relaxation with massages, facials, and private spa facilities for two.',
    price: 279.99,
    rating: 4.8,
    reviews: 203,
    location: 'Luxury Spas Nationwide',
    duration: '4-5 hours',
    tags: ['Wellness', 'Relaxation', 'Luxury'],
    image: '/assets/experiences/spa.jpg',
    bestseller: true,
    availability: 'Year-round',
    bookingWindow: 'Reserve 1+ week in advance'
  }
];

// Mock data for featured collections
const featuredCollections = [
  {
    id: 'col-1',
    name: 'Anniversary Essentials',
    description: 'Perfect gifts to celebrate another year of love',
    image: '/assets/collections/anniversary.jpg',
    items: ['gift-5', 'gift-11', 'exp-2']
  },
  {
    id: 'col-2',
    name: 'Adventure Together',
    description: 'Experiences that create lasting memories',
    image: '/assets/collections/adventure.jpg',
    items: ['exp-1', 'exp-7', 'gift-9']
  },
  {
    id: 'col-3',
    name: 'Date Night Upgrades',
    description: 'Take your regular date nights to the next level',
    image: '/assets/collections/date-night.jpg',
    items: ['gift-6', 'gift-12', 'exp-4']
  }
];

// Mock data for testimonials
const testimonials = [
  {
    id: 'test-1',
    name: 'Sarah & James',
    avatar: '/assets/testimonials/couple1.jpg',
    text: 'The Adventure Challenge book completely transformed our weekends. We\'ve done things we never would have thought of ourselves!',
    product: 'Adventure Challenge Couples Edition',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Michael & David',
    avatar: '/assets/testimonials/couple2.jpg',
    text: 'Our hot air balloon experience was absolutely magical. Worth every penny for a memory we\'ll cherish forever.',
    product: 'Hot Air Balloon Sunrise Flight',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Aisha & Omar',
    avatar: '/assets/testimonials/couple3.jpg',
    text: 'The date night subscription box has been a relationship saver during our busy schedules. It\'s like having a relationship expert plan our dates!',
    product: 'Monthly Date Night Box Subscription',
    rating: 4
  }
];

const GiftExperienceMarketplace = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('gifts');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedGift, setSelectedGift] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showGiftDialog, setShowGiftDialog] = useState(false);
  const [showExperienceDialog, setShowExperienceDialog] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartDialog, setShowCartDialog] = useState(false);
  
  const handleAddToCart = (item, type) => {
    const newItem = {
      ...item,
      type,
      quantity: 1
    };
    
    setCartItems(prev => {
      // Check if item already exists in cart
      const existingItemIndex = prev.findIndex(
        cartItem => cartItem.id === item.id && cartItem.type === type
      );
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        return [...prev, newItem];
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };
  
  const handleRemoveFromCart = (itemId, type) => {
    setCartItems(prev => prev.filter(item => !(item.id === itemId && item.type === type)));
    
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };
  
  const handleUpdateQuantity = (itemId, type, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId && item.type === type
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
  
  const handleViewGift = (gift) => {
    setSelectedGift(gift);
    setShowGiftDialog(true);
  };
  
  const handleViewExperience = (experience) => {
    setSelectedExperience(experience);
    setShowExperienceDialog(true);
  };
  
  const handleCheckout = () => {
    toast({
      title: "Checkout Process",
      description: "Proceeding to secure checkout with your selected items.",
    });
    
    setShowCartDialog(false);
  };
  
  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  const filteredGifts = gifts.filter(gift => {
    // Filter by category
    if (selectedCategory !== 'all' && gift.category !== selectedCategory) {
      return false;
    }
    
    // Filter by price range
    if (priceRange === 'under25' && gift.price >= 25) {
      return false;
    } else if (priceRange === '25to50' && (gift.price < 25 || gift.price > 50)) {
      return false;
    } else if (priceRange === '50to100' && (gift.price < 50 || gift.price > 100)) {
      return false;
    } else if (priceRange === 'over100' && gift.price <= 100) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !gift.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !gift.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort gifts based on selected sort option
  const sortedGifts = [...filteredGifts].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.reviews - a.reviews;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'priceLow') {
      return a.price - b.price;
    } else if (sortBy === 'priceHigh') {
      return b.price - a.price;
    }
    return 0;
  });
  
  const filteredExperiences = experiences.filter(experience => {
    // Filter by price range
    if (priceRange === 'under25' && experience.price >= 25) {
      return false;
    } else if (priceRange === '25to50' && (experience.price < 25 || experience.price > 50)) {
      return false;
    } else if (priceRange === '50to100' && (experience.price < 50 || experience.price > 100)) {
      return false;
    } else if (priceRange === 'over100' && experience.price <= 100) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !experience.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !experience.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort experiences based on selected sort option
  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.reviews - a.reviews;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'priceLow') {
      return a.price - b.price;
    } else if (sortBy === 'priceHigh') {
      return b.price - a.price;
    }
    return 0;
  });
  
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
              <h1 className="text-3xl font-bold tracking-tight">Gift & Experience Marketplace</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Discover meaningful gifts and experiences to strengthen your connection
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" onClick={() => setShowCartDialog(true)}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({getItemCount()})
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-2/3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search gifts and experiences..." 
                className="pl-9 pr-4 h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="md:w-1/3 flex gap-2">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <DollarSign className="h-4 w-4 mr-1" />
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under25">Under $25</SelectItem>
                <SelectItem value="25to50">$25 - $50</SelectItem>
                <SelectItem value="50to100">$50 - $100</SelectItem>
                <SelectItem value="over100">Over $100</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-1" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="priceLow">Price: Low to High</SelectItem>
                <SelectItem value="priceHigh">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="gifts" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="gifts">Gifts</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gifts" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    <div 
                      className={cn(
                        "flex items-center p-2 rounded-md cursor-pointer",
                        selectedCategory === 'all' ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                      )}
                      onClick={() => setSelectedCategory('all')}
                    >
                      <Gift className="h-4 w-4 mr-2" />
                      <span>All Gifts</span>
                    </div>
                    
                    {giftCategories.map(category => (
                      <div 
                        key={category.id}
                        className={cn(
                          "flex items-center p-2 rounded-md cursor-pointer",
                          selectedCategory === category.id ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                        )}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {React.cloneElement(category.icon, { className: "h-4 w-4 mr-2" })}
                        <span>{category.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold mb-2">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Romantic', 'Personalized', 'Experience', 'Game', 'Subscription', 'Keepsake'].map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary/10"
                          onClick={() => setSearchQuery(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">
                    {selectedCategory === 'all' 
                      ? 'All Gifts' 
                      : giftCategories.find(cat => cat.id === selectedCategory)?.name || 'Gifts'}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {sortedGifts.length} {sortedGifts.length === 1 ? 'gift' : 'gifts'} found
                  </span>
                </div>
                
                {sortedGifts.length === 0 ? (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No gifts found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search terms
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedGifts.map(gift => (
                      <Card key={gift.id} className="overflow-hidden">
                        <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center relative">
                          <Gift className="h-16 w-16 text-primary/40" />
                          {gift.bestseller && (
                            <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">
                              Bestseller
                            </Badge>
                          )}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-base">{gift.name}</CardTitle>
                          </div>
                          <CardDescription className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            {gift.rating} ({gift.reviews} reviews)
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {gift.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {gift.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">${gift.price.toFixed(2)}</span>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Truck className="h-3 w-3 mr-1" />
                              {gift.delivery}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2 pt-0">
                          <Button 
                            variant="outline" 
                            className="w-1/2"
                            onClick={() => handleViewGift(gift)}
                          >
                            Details
                          </Button>
                          <Button 
                            className="w-1/2"
                            onClick={() => handleAddToCart(gift, 'gift')}
                          >
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experiences" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Memorable Experiences</h2>
              <span className="text-sm text-muted-foreground">
                {sortedExperiences.length} {sortedExperiences.length === 1 ? 'experience' : 'experiences'} found
              </span>
            </div>
            
            {sortedExperiences.length === 0 ? (
              <div className="text-center py-12 bg-muted rounded-lg">
                <Ticket className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">No experiences found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedExperiences.map(experience => (
                  <Card key={experience.id} className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center relative">
                      <Ticket className="h-20 w-20 text-primary/40" />
                      {experience.bestseller && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle>{experience.name}</CardTitle>
                      </div>
                      <CardDescription className="flex items-center mt-1">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        {experience.rating} ({experience.reviews} reviews)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">${experience.price.toFixed(2)}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.availability}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="w-1/2"
                        onClick={() => handleViewExperience(experience)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="w-1/2"
                        onClick={() => handleAddToCart(experience, 'experience')}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="collections" className="mt-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Curated Collections</h2>
              <p className="text-muted-foreground">
                Expertly curated gift and experience collections for every relationship milestone
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {featuredCollections.map(collection => (
                <Card key={collection.id} className="overflow-hidden">
                  <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                    <Package className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardHeader>
                    <CardTitle>{collection.name}</CardTitle>
                    <CardDescription>{collection.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {collection.items.length} items in this collection
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="bg-muted rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold mb-2">Create a Custom Gift Box</h3>
                  <p className="text-muted-foreground mb-4">
                    Design a personalized gift box with hand-selected items tailored to your partner's preferences.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center">
                      <Gift className="h-3 w-3 mr-1" />
                      Personalized Selection
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Package className="h-3 w-3 mr-1" />
                      Premium Packaging
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      Handwritten Note
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Button className="w-full" size="lg">
                    Create Custom Box
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map(testimonial => (
                  <Card key={testimonial.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <div className="flex">
                            {Array(5).fill(0).map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-3 w-3", 
                                  i < testimonial.rating ? "text-yellow-500" : "text-muted-foreground/30"
                                )} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        "{testimonial.text}"
                      </p>
                      <p className="text-xs font-medium">
                        Purchased: {testimonial.product}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      {/* Gift Detail Dialog */}
      <Dialog open={showGiftDialog} onOpenChange={setShowGiftDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedGift?.name}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                {selectedGift?.rating} ({selectedGift?.reviews} reviews)
              </div>
            </DialogDescription>
          </DialogHeader>
          
          {selectedGift && (
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/2">
                  <div className="h-60 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center rounded-md">
                    <Gift className="h-24 w-24 text-primary/40" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-muted-foreground mb-4">
                    {selectedGift.description}
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">${selectedGift.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span>{selectedGift.delivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className={selectedGift.inStock ? "text-green-600" : "text-red-600"}>
                        {selectedGift.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedGift.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <h3 className="font-semibold">Why This Gift Matters</h3>
                <p className="text-muted-foreground">
                  This gift was carefully selected to help strengthen your relationship through shared experiences and meaningful connection. It aligns with research-backed principles of relationship health and satisfaction.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <Heart className="h-4 w-4 text-primary mr-2" />
                      Relationship Benefit
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Encourages quality time together and creates opportunities for meaningful conversation.
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <ThumbsUp className="h-4 w-4 text-primary mr-2" />
                      Perfect For
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Couples looking to deepen their connection through shared activities and experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowGiftDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              handleAddToCart(selectedGift, 'gift');
              setShowGiftDialog(false);
            }}>
              Add to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Experience Detail Dialog */}
      <Dialog open={showExperienceDialog} onOpenChange={setShowExperienceDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedExperience?.name}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                {selectedExperience?.rating} ({selectedExperience?.reviews} reviews)
              </div>
            </DialogDescription>
          </DialogHeader>
          
          {selectedExperience && (
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/2">
                  <div className="h-60 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center rounded-md">
                    <Ticket className="h-24 w-24 text-primary/40" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-muted-foreground mb-4">
                    {selectedExperience.description}
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">${selectedExperience.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{selectedExperience.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{selectedExperience.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span>{selectedExperience.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Booking Window:</span>
                      <span>{selectedExperience.bookingWindow}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedExperience.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <h3 className="font-semibold">Why This Experience Matters</h3>
                <p className="text-muted-foreground">
                  Shared experiences create lasting memories and strengthen your bond. This experience was carefully selected to provide a meaningful opportunity for connection and joy together.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <Heart className="h-4 w-4 text-primary mr-2" />
                      Relationship Benefit
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Creates shared memories and strengthens your bond through novel experiences together.
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <ThumbsUp className="h-4 w-4 text-primary mr-2" />
                      Perfect For
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Couples seeking to break routine and create meaningful memories together.
                    </p>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="mt-4">
                  <AccordionItem value="booking">
                    <AccordionTrigger>Booking Information</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          After purchase, you'll receive a digital voucher with instructions for scheduling your experience.
                        </p>
                        <p>
                          Vouchers are typically valid for 12 months from the date of purchase, giving you flexibility in planning.
                        </p>
                        <p>
                          Rescheduling is usually available with 48+ hours notice. Cancellation policies vary by provider.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExperienceDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              handleAddToCart(selectedExperience, 'experience');
              setShowExperienceDialog(false);
            }}>
              Add to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Shopping Cart Dialog */}
      <Dialog open={showCartDialog} onOpenChange={setShowCartDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Your Cart
            </DialogTitle>
            <DialogDescription>
              Review your selected gifts and experiences
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">
                  Add gifts and experiences to get started
                </p>
                <Button onClick={() => setShowCartDialog(false)}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={`${item.type}-${item.id}`} className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <div className="flex items-center">
                        {item.type === 'gift' ? (
                          <Gift className="h-8 w-8 text-primary mr-3" />
                        ) : (
                          <Ticket className="h-8 w-8 text-primary mr-3" />
                        )}
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} {item.type === 'experience' && 'per person'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex items-center mr-4">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7 rounded-full"
                            onClick={() => handleUpdateQuantity(item.id, item.type, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="mx-2 w-5 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7 rounded-full"
                            onClick={() => handleUpdateQuantity(item.id, item.type, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-7 w-7 text-muted-foreground hover:text-destructive"
                            onClick={() => handleRemoveFromCart(item.id, item.type)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted p-4 rounded-md mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${calculateCartTotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${calculateCartTotal()}</span>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-md mb-6">
                  <h4 className="font-medium flex items-center mb-2">
                    <Info className="h-4 w-4 mr-2" />
                    Gifting Options
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gift-wrap" />
                      <Label htmlFor="gift-wrap">Add gift wrapping (+$4.99)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gift-message" />
                      <Label htmlFor="gift-message">Include personalized message</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gift-direct" />
                      <Label htmlFor="gift-direct">Ship directly to recipient</Label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCartDialog(false)}>
              Continue Shopping
            </Button>
            {cartItems.length > 0 && (
              <Button onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GiftExperienceMarketplace;

