import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Calendar, Clock, Search, Filter, 
  MessageSquare, Video, Phone, Star, Heart,
  User, Briefcase, GraduationCap, Award, FileText,
  CheckCircle, XCircle, AlertCircle, Info, HelpCircle,
  ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
  Plus, Edit, Trash, Mail, Globe, MapPin,
  DollarSign, Percent, CreditCard, Shield, Lock
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

// Import recharts components for data visualization
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';

const ProfessionalCoachingIntegration = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('find-coach');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSessionType, setSelectedSessionType] = useState('video');
  const [isApplyingAsCoach, setIsApplyingAsCoach] = useState(false);
  
  // Sample data for coaches
  const coaches = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Communication", "Conflict Resolution", "Intimacy"],
      experience: "15 years",
      education: "Ph.D. in Clinical Psychology",
      certifications: ["LMFT", "Gottman Method Level 3", "EFT Certified"],
      bio: "Dr. Johnson specializes in helping couples rebuild connection and navigate challenging transitions. Her approach combines evidence-based techniques with compassionate support to help couples create lasting positive change.",
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 150,
      availability: {
        monday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
        tuesday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
        wednesday: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
        thursday: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
        friday: ["9:00 AM", "11:00 AM", "2:00 PM"]
      },
      sessionTypes: ["video", "phone", "chat"],
      languages: ["English", "Spanish"],
      location: "New York, NY (Remote Available)"
    },
    {
      id: 2,
      name: "Michael Chen, LCSW",
      title: "Licensed Clinical Social Worker",
      specialties: ["Cross-Cultural Relationships", "Communication", "Life Transitions"],
      experience: "8 years",
      education: "MSW from Columbia University",
      certifications: ["LCSW", "Certified Relationship Coach"],
      bio: "Michael helps couples navigate cultural differences and communication challenges. His approach focuses on building understanding and respect while honoring each partner's unique background and perspective.",
      rating: 4.8,
      reviewCount: 93,
      hourlyRate: 130,
      availability: {
        monday: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        wednesday: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        friday: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"]
      },
      sessionTypes: ["video", "phone", "chat"],
      languages: ["English", "Mandarin", "Cantonese"],
      location: "San Francisco, CA (Remote Available)"
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      title: "Clinical Psychologist",
      specialties: ["Attachment Issues", "Trauma Recovery", "Emotional Intimacy"],
      experience: "20 years",
      education: "Psy.D. in Clinical Psychology",
      certifications: ["Licensed Psychologist", "EMDR Certified", "Gottman Method Level 2"],
      bio: "Dr. Wilson specializes in helping couples heal from past trauma and build secure attachment. His compassionate approach helps partners understand their emotional patterns and create deeper connection.",
      rating: 4.9,
      reviewCount: 156,
      hourlyRate: 175,
      availability: {
        tuesday: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
        thursday: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
        saturday: ["10:00 AM", "12:00 PM", "2:00 PM"]
      },
      sessionTypes: ["video", "phone"],
      languages: ["English"],
      location: "Chicago, IL (Remote Available)"
    },
    {
      id: 4,
      name: "Aisha Patel, LMFT",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Premarital Counseling", "Communication", "Cultural Dynamics"],
      experience: "6 years",
      education: "M.A. in Marriage and Family Therapy",
      certifications: ["LMFT", "PREPARE/ENRICH Certified"],
      bio: "Aisha specializes in premarital counseling and helping couples navigate cultural differences. She creates a supportive environment where couples can explore their values and build a strong foundation for their relationship.",
      rating: 4.7,
      reviewCount: 68,
      hourlyRate: 125,
      availability: {
        monday: ["1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"],
        wednesday: ["1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"],
        friday: ["1:00 PM", "3:00 PM", "5:00 PM"]
      },
      sessionTypes: ["video", "chat"],
      languages: ["English", "Hindi", "Urdu"],
      location: "Austin, TX (Remote Available)"
    },
    {
      id: 5,
      name: "Robert Taylor, LPC",
      title: "Licensed Professional Counselor",
      specialties: ["Communication", "Conflict Resolution", "Parenting Issues"],
      experience: "12 years",
      education: "M.S. in Counseling Psychology",
      certifications: ["LPC", "Certified Parenting Specialist"],
      bio: "Robert helps couples strengthen their communication and navigate the challenges of parenting together. His practical approach focuses on developing concrete skills that couples can use in their daily lives.",
      rating: 4.8,
      reviewCount: 112,
      hourlyRate: 140,
      availability: {
        monday: ["9:00 AM", "11:00 AM", "1:00 PM"],
        tuesday: ["9:00 AM", "11:00 AM", "1:00 PM"],
        thursday: ["3:00 PM", "5:00 PM", "7:00 PM"],
        friday: ["3:00 PM", "5:00 PM", "7:00 PM"]
      },
      sessionTypes: ["video", "phone", "chat"],
      languages: ["English"],
      location: "Denver, CO (Remote Available)"
    }
  ];
  
  // Sample data for reviews
  const reviews = [
    {
      id: 101,
      coachId: 1,
      rating: 5,
      reviewerName: "Anonymous Client",
      date: "June 15, 2025",
      text: "Dr. Johnson helped us completely transform our communication patterns. After just 8 sessions, we've developed tools that help us navigate conflicts without escalating. Highly recommend!"
    },
    {
      id: 102,
      coachId: 1,
      rating: 5,
      reviewerName: "Anonymous Client",
      date: "May 28, 2025",
      text: "Working with Dr. Johnson was life-changing for our relationship. She created a safe space for both of us and helped us understand our attachment patterns. We're now able to connect in ways we never thought possible."
    },
    {
      id: 103,
      coachId: 1,
      rating: 4,
      reviewerName: "Anonymous Client",
      date: "April 10, 2025",
      text: "Dr. Johnson is very knowledgeable and provided us with practical tools. The only reason for 4 stars instead of 5 is that sometimes sessions felt a bit rushed. Overall, still highly recommend her services."
    },
    {
      id: 201,
      coachId: 2,
      rating: 5,
      reviewerName: "Anonymous Client",
      date: "June 20, 2025",
      text: "Michael helped us navigate the cultural differences in our relationship with such sensitivity and insight. We now have a much deeper understanding of each other's perspectives and values."
    },
    {
      id: 202,
      coachId: 2,
      rating: 5,
      reviewerName: "Anonymous Client",
      date: "May 12, 2025",
      text: "As an intercultural couple, we were struggling with family expectations and communication styles. Michael's guidance was invaluable in helping us find common ground while respecting our individual backgrounds."
    }
  ];
  
  // Sample data for session types
  const sessionTypes = [
    {
      id: "video",
      name: "Video Session",
      icon: <Video className="h-5 w-5" />,
      description: "Face-to-face video consultation with your coach"
    },
    {
      id: "phone",
      name: "Phone Session",
      icon: <Phone className="h-5 w-5" />,
      description: "Audio-only consultation with your coach"
    },
    {
      id: "chat",
      name: "Chat Session",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Text-based consultation with your coach"
    }
  ];
  
  // Sample data for analytics
  const sessionData = [
    { month: 'Jan', sessions: 120 },
    { month: 'Feb', sessions: 150 },
    { month: 'Mar', sessions: 180 },
    { month: 'Apr', sessions: 220 },
    { month: 'May', sessions: 250 },
    { month: 'Jun', sessions: 280 },
    { month: 'Jul', sessions: 310 }
  ];
  
  const specialtyData = [
    { name: 'Communication', value: 35 },
    { name: 'Conflict Resolution', value: 25 },
    { name: 'Intimacy', value: 15 },
    { name: 'Parenting', value: 10 },
    { name: 'Other', value: 15 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const handleViewCoach = (coach) => {
    setSelectedCoach(coach);
    setActiveTab('coach-profile');
  };
  
  const handleBookSession = () => {
    setBookingStep(1);
    setActiveTab('book-session');
  };
  
  const handleConfirmBooking = () => {
    toast({
      title: "Session Booked Successfully",
      description: `Your session with ${selectedCoach.name} has been confirmed for ${selectedDate} at ${selectedTime}.`,
      duration: 5000,
    });
    
    setBookingStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setActiveTab('find-coach');
  };
  
  const handleApplyAsCoach = () => {
    setIsApplyingAsCoach(true);
  };
  
  const handleSubmitCoachApplication = () => {
    toast({
      title: "Application Submitted",
      description: "Your application to join as a professional coach has been submitted successfully. We'll review your credentials and contact you within 3-5 business days.",
      duration: 5000,
    });
    
    setIsApplyingAsCoach(false);
  };
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const getAvailableDates = () => {
    const today = new Date();
    const dates = [];
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      // Skip weekends for simplicity
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  };
  
  const getAvailableTimes = (date) => {
    if (!selectedCoach || !date) return [];
    
    const dayOfWeek = new Date(date).getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayName = days[dayOfWeek];
    
    return selectedCoach.availability[dayName] || [];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container max-w-6xl py-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Professional Coaching</h1>
          <p className="text-muted-foreground">
            Connect with licensed therapists and relationship coaches for personalized guidance.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button variant="outline" onClick={() => setActiveTab('find-coach')}>
            <Search className="mr-2 h-4 w-4" />
            Find a Coach
          </Button>
          
          <Button variant="outline" onClick={() => setActiveTab('my-sessions')}>
            <Calendar className="mr-2 h-4 w-4" />
            My Sessions
          </Button>
          
          <Button onClick={handleApplyAsCoach}>
            <Briefcase className="mr-2 h-4 w-4" />
            Apply as Coach
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="find-coach">Find a Coach</TabsTrigger>
          <TabsTrigger value="coach-profile">Coach Profile</TabsTrigger>
          <TabsTrigger value="book-session">Book a Session</TabsTrigger>
          <TabsTrigger value="my-sessions">My Sessions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="find-coach" className="mt-6">
          <Card className="p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name, specialty, or location..." className="pl-10" />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" />
                </Button>
                
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="rating-high">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1 block">Specialties</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialties" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="communication">Communication</SelectItem>
                        <SelectItem value="conflict">Conflict Resolution</SelectItem>
                        <SelectItem value="intimacy">Intimacy</SelectItem>
                        <SelectItem value="parenting">Parenting</SelectItem>
                        <SelectItem value="cultural">Cultural Dynamics</SelectItem>
                        <SelectItem value="premarital">Premarital Counseling</SelectItem>
                        <SelectItem value="attachment">Attachment Issues</SelectItem>
                        <SelectItem value="trauma">Trauma Recovery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium mb-1 block">Session Type</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="chat">Chat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium mb-1 block">Price Range</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under-100">Under $100</SelectItem>
                        <SelectItem value="100-150">$100 - $150</SelectItem>
                        <SelectItem value="150-200">$150 - $200</SelectItem>
                        <SelectItem value="over-200">Over $200</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium mb-1 block">Languages</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select languages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="mandarin">Mandarin</SelectItem>
                        <SelectItem value="cantonese">Cantonese</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="urdu">Urdu</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">Reset Filters</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            )}
          </Card>
          
          <div className="space-y-6">
            {coaches.map((coach) => (
              <Card key={coach.id} className="p-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <User className="h-12 w-12 text-primary/40" />
                    </div>
                    <h3 className="text-lg font-bold text-center">{coach.name}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-2">{coach.title}</p>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{coach.rating}</span>
                      <span className="text-sm text-muted-foreground">({coach.reviewCount})</span>
                    </div>
                    
                    <div className="text-sm font-medium">
                      <DollarSign className="h-4 w-4 inline-block mr-1" />
                      ${coach.hourlyRate}/hour
                    </div>
                  </div>
                  
                  <div className="md:w-2/4">
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">About</h4>
                      <p className="text-sm">{coach.bio}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {coach.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Experience:</span> {coach.experience}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Languages:</span> {coach.languages.join(', ')}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Session Types:</span> {coach.sessionTypes.map(type => 
                          type.charAt(0).toUpperCase() + type.slice(1)
                        ).join(', ')}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span> {coach.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium mb-1">Availability</h4>
                      <div className="text-sm mb-4">
                        <div className="flex justify-between">
                          <span>Mon, Wed, Fri:</span>
                          <span>9AM - 5PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tue, Thu:</span>
                          <span>12PM - 8PM</span>
                        </div>
                      </div>
                      
                      <h4 className="font-medium mb-1">Next Available</h4>
                      <div className="text-sm mb-4">
                        Tomorrow at 10:00 AM
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full" onClick={() => handleViewCoach(coach)}>
                        View Profile
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => {
                        setSelectedCoach(coach);
                        handleBookSession();
                      }}>
                        Book Session
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Showing 5 of 42 coaches
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" disabled>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="coach-profile" className="mt-6">
          {selectedCoach ? (
            <>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  <Card className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <User className="h-16 w-16 text-primary/40" />
                      </div>
                      <h2 className="text-2xl font-bold text-center">{selectedCoach.name}</h2>
                      <p className="text-muted-foreground text-center mb-4">{selectedCoach.title}</p>
                      
                      <div className="flex items-center gap-1 mb-4">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-medium">{selectedCoach.rating}</span>
                        <span className="text-muted-foreground">({selectedCoach.reviewCount} reviews)</span>
                      </div>
                      
                      <div className="text-lg font-medium mb-6">
                        <DollarSign className="h-5 w-5 inline-block mr-1" />
                        ${selectedCoach.hourlyRate}/hour
                      </div>
                      
                      <div className="w-full space-y-2">
                        <Button className="w-full" onClick={handleBookSession}>
                          Book a Session
                        </Button>
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 mt-6">
                    <h3 className="text-lg font-medium mb-4">Contact & Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-sm text-muted-foreground">{selectedCoach.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Languages</h4>
                          <p className="text-sm text-muted-foreground">{selectedCoach.languages.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Session Types</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedCoach.sessionTypes.map(type => 
                              type.charAt(0).toUpperCase() + type.slice(1)
                            ).join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="md:w-2/3">
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-medium mb-4">About {selectedCoach.name}</h3>
                    <p className="mb-6">{selectedCoach.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {selectedCoach.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        
                        <h4 className="font-medium mb-2">Experience</h4>
                        <p className="text-sm mb-4">{selectedCoach.experience}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Education</h4>
                        <p className="text-sm mb-4">{selectedCoach.education}</p>
                        
                        <h4 className="font-medium mb-2">Certifications</h4>
                        <ul className="text-sm list-disc list-inside">
                          {selectedCoach.certifications.map((cert, idx) => (
                            <li key={idx}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">Availability</h3>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        View Full Calendar
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {Object.entries(selectedCoach.availability).map(([day, times]) => (
                        times.length > 0 && (
                          <div key={day} className="flex items-start gap-2">
                            <div className="w-24 font-medium capitalize">{day}:</div>
                            <div className="flex flex-wrap gap-2">
                              {times.map((time, idx) => (
                                <Badge key={idx} variant="outline">
                                  {time}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-medium mb-2">Next Available Sessions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Button variant="outline" className="justify-start" onClick={handleBookSession}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Tomorrow, 10:00 AM
                        </Button>
                        <Button variant="outline" className="justify-start" onClick={handleBookSession}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Tomorrow, 2:00 PM
                        </Button>
                        <Button variant="outline" className="justify-start" onClick={handleBookSession}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Friday, 11:00 AM
                        </Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">Reviews</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-medium">{selectedCoach.rating}</span>
                        <span className="text-muted-foreground">({selectedCoach.reviewCount})</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews
                        .filter(review => review.coachId === selectedCoach.id)
                        .map(review => (
                          <div key={review.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <div className="font-medium">{review.reviewerName}</div>
                                <div className="text-sm text-muted-foreground">{review.date}</div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm">{review.text}</p>
                          </div>
                        ))
                      }
                    </div>
                    
                    <Button variant="link" className="mt-4 p-0">
                      View all {selectedCoach.reviewCount} reviews
                    </Button>
                  </Card>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab('find-coach')}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Search
                </Button>
                <Button onClick={handleBookSession}>
                  Book a Session with {selectedCoach.name.split(' ')[0]}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-muted-foreground">
                <User className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-medium">No Coach Selected</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Please select a coach from the search results to view their profile.
              </p>
              <Button onClick={() => setActiveTab('find-coach')}>
                Find a Coach
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="book-session" className="mt-6">
          {selectedCoach ? (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">Book a Session with {selectedCoach.name}</h3>
                <div className="text-lg font-medium">
                  <DollarSign className="h-5 w-5 inline-block mr-1" />
                  ${selectedCoach.hourlyRate}/hour
                </div>
              </div>
              
              <div className="mb-8">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-muted"></div>
                  <ol className="relative flex justify-between">
                    <li className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${bookingStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        1
                      </div>
                      <span className="text-sm mt-2">Select Date & Time</span>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${bookingStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        2
                      </div>
                      <span className="text-sm mt-2">Session Details</span>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${bookingStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        3
                      </div>
                      <span className="text-sm mt-2">Payment</span>
                    </li>
                    <li className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${bookingStep >= 4 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        4
                      </div>
                      <span className="text-sm mt-2">Confirmation</span>
                    </li>
                  </ol>
                </div>
              </div>
              
              {bookingStep === 1 && (
                <div>
                  <h4 className="font-medium mb-4">Select a Date & Time</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Date</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {getAvailableDates().slice(0, 6).map((date, idx) => (
                          <Button 
                            key={idx} 
                            variant={selectedDate === date ? "default" : "outline"}
                            className="flex flex-col h-auto py-2"
                            onClick={() => setSelectedDate(date)}
                          >
                            <span className="text-xs">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                            <span className="text-sm font-bold">{new Date(date).getDate()}</span>
                            <span className="text-xs">{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
                          </Button>
                        ))}
                      </div>
                      
                      <Button variant="link" className="mt-2 p-0 h-auto">
                        View more dates
                      </Button>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Time</Label>
                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2">
                          {getAvailableTimes(selectedDate).map((time, idx) => (
                            <Button 
                              key={idx} 
                              variant={selectedTime === time ? "default" : "outline"}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          Please select a date first
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setActiveTab('coach-profile')}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Profile
                    </Button>
                    <Button 
                      onClick={() => setBookingStep(2)} 
                      disabled={!selectedDate || !selectedTime}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {bookingStep === 2 && (
                <div>
                  <h4 className="font-medium mb-4">Session Details</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Session Type</Label>
                      <div className="space-y-2">
                        {sessionTypes
                          .filter(type => selectedCoach.sessionTypes.includes(type.id))
                          .map(type => (
                            <div 
                              key={type.id} 
                              className={`flex items-center p-3 border rounded-md cursor-pointer ${selectedSessionType === type.id ? 'border-primary bg-primary/5' : 'border-muted'}`}
                              onClick={() => setSelectedSessionType(type.id)}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${selectedSessionType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                {type.icon}
                              </div>
                              <div>
                                <div className="font-medium">{type.name}</div>
                                <div className="text-sm text-muted-foreground">{type.description}</div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Session Focus</Label>
                      <Textarea 
                        placeholder="Briefly describe what you'd like to focus on during this session..."
                        className="h-32"
                      />
                      
                      <div className="mt-4">
                        <Label className="mb-2 block">Additional Notes</Label>
                        <Textarea 
                          placeholder="Any additional information you'd like your coach to know..."
                          className="h-20"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setBookingStep(1)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={() => setBookingStep(3)}>
                      Continue to Payment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {bookingStep === 3 && (
                <div>
                  <h4 className="font-medium mb-4">Payment Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Card className="p-4 mb-4">
                        <h5 className="font-medium mb-2">Session Summary</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Coach:</span>
                            <span>{selectedCoach.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date:</span>
                            <span>{formatDate(selectedDate)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time:</span>
                            <span>{selectedTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Session Type:</span>
                            <span>{sessionTypes.find(t => t.id === selectedSessionType)?.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span>60 minutes</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>${selectedCoach.hourlyRate}.00</span>
                          </div>
                        </div>
                      </Card>
                      
                      <div>
                        <Label className="mb-2 block">Promo Code</Label>
                        <div className="flex gap-2">
                          <Input placeholder="Enter promo code" />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Payment Method</Label>
                      <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2 border rounded-md p-3 mb-2">
                          <RadioGroupItem value="card" id="payment-card" />
                          <Label htmlFor="payment-card" className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-3">
                          <RadioGroupItem value="paypal" id="payment-paypal" />
                          <Label htmlFor="payment-paypal" className="flex items-center">
                            <Globe className="h-5 w-5 mr-2" />
                            PayPal
                          </Label>
                        </div>
                      </RadioGroup>
                      
                      <div className="mt-4 space-y-4">
                        <div>
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" className="mt-1" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="name">Name on Card</Label>
                          <Input id="name" placeholder="John Doe" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-muted/30 p-4 rounded-md flex items-start gap-2">
                    <Lock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">Secure Payment</p>
                      <p>Your payment information is encrypted and secure. We never store your full card details.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setBookingStep(2)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={() => setBookingStep(4)}>
                      Complete Booking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              {bookingStep === 4 && (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">
                      Your session with {selectedCoach.name} has been scheduled.
                    </p>
                  </div>
                  
                  <Card className="p-4 max-w-md mx-auto mb-8">
                    <h5 className="font-medium mb-4 text-left">Session Details</h5>
                    <div className="space-y-3 text-sm text-left">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <div className="font-medium">Date & Time</div>
                          <div>{formatDate(selectedDate)} at {selectedTime}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <div className="font-medium">Coach</div>
                          <div>{selectedCoach.name} ({selectedCoach.title})</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <div className="font-medium">Session Type</div>
                          <div>{sessionTypes.find(t => t.id === selectedSessionType)?.name}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                        <div>
                          <div className="font-medium">Duration</div>
                          <div>60 minutes</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <div className="space-y-2 mb-8">
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to your registered email address.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You can manage your upcoming sessions in the "My Sessions" tab.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={() => {
                      handleConfirmBooking();
                      setActiveTab('my-sessions');
                    }}>
                      View My Sessions
                    </Button>
                    <Button variant="outline" onClick={() => {
                      handleConfirmBooking();
                      setActiveTab('find-coach');
                    }}>
                      Return to Coach Search
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-medium">No Coach Selected</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Please select a coach from the search results to book a session.
              </p>
              <Button onClick={() => setActiveTab('find-coach')}>
                Find a Coach
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="my-sessions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Upcoming Sessions</h3>
                  <div className="text-3xl font-bold">2</div>
                </div>
                <Calendar className="h-8 w-8 text-primary opacity-80" />
              </div>
              <div className="text-sm text-muted-foreground">
                Next session: Tomorrow at 10:00 AM
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Completed Sessions</h3>
                  <div className="text-3xl font-bold">8</div>
                </div>
                <CheckCircle className="h-8 w-8 text-primary opacity-80" />
              </div>
              <div className="text-sm text-muted-foreground">
                Last session: July 1, 2025
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Favorite Coaches</h3>
                  <div className="text-3xl font-bold">3</div>
                </div>
                <Heart className="h-8 w-8 text-primary opacity-80" />
              </div>
              <div className="text-sm text-muted-foreground">
                Most sessions: Dr. Sarah Johnson (5)
              </div>
            </Card>
          </div>
          
          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Sessions</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-4">
              <Card>
                <div className="border-b">
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-medium">Dr. Sarah Johnson</div>
                    <Badge className="ml-auto">Tomorrow</Badge>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Date & Time</div>
                        <div className="font-medium">July 4, 2025, 10:00 AM</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Session Type</div>
                        <div className="font-medium">Video Session</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">60 minutes</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Status</div>
                        <div className="font-medium">Confirmed</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Reschedule
                      </Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button>
                        <Video className="mr-2 h-4 w-4" />
                        Join Session
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-medium">Michael Chen, LCSW</div>
                    <Badge className="ml-auto">Next Week</Badge>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Date & Time</div>
                        <div className="font-medium">July 10, 2025, 2:00 PM</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Session Type</div>
                        <div className="font-medium">Video Session</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">60 minutes</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Status</div>
                        <div className="font-medium">Confirmed</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Reschedule
                      </Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      <Button variant="outline">
                        <Video className="mr-2 h-4 w-4" />
                        Join Session
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="past" className="mt-4">
              <Card>
                <div className="border-b">
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-medium">Dr. Sarah Johnson</div>
                    <Badge variant="outline" className="ml-auto">July 1, 2025</Badge>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Date & Time</div>
                        <div className="font-medium">July 1, 2025, 10:00 AM</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Session Type</div>
                        <div className="font-medium">Video Session</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">60 minutes</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Status</div>
                        <div className="font-medium">Completed</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        View Notes
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message Coach
                      </Button>
                      <Button>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Again
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* More past sessions would be listed here */}
              </Card>
            </TabsContent>
            
            <TabsContent value="canceled" className="mt-4">
              <Card className="p-6 text-center">
                <div className="mb-4 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-lg font-medium">No Canceled Sessions</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  You don't have any canceled sessions.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-4">Session History</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsLineChart data={sessionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Line 
                  type="monotone" 
                  dataKey="sessions" 
                  name="Total Sessions" 
                  stroke="#8884d8" 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Total platform sessions by month. The steady increase shows growing engagement with professional coaching.</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Apply as Coach Dialog */}
      <Dialog open={isApplyingAsCoach} onOpenChange={setIsApplyingAsCoach}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Apply to Join as a Professional Coach</DialogTitle>
            <DialogDescription>
              Share your credentials and experience to join our network of professional relationship coaches.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="coach-name">Full Name</Label>
                <Input id="coach-name" placeholder="Dr. Jane Smith" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="coach-title">Professional Title</Label>
                <Input id="coach-title" placeholder="Licensed Marriage & Family Therapist" className="mt-1" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="coach-email">Email Address</Label>
                <Input id="coach-email" type="email" placeholder="jane.smith@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="coach-phone">Phone Number</Label>
                <Input id="coach-phone" placeholder="+1 (555) 123-4567" className="mt-1" />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-location">Location</Label>
              <Input id="coach-location" placeholder="New York, NY (Remote Available)" className="mt-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="coach-experience">Years of Experience</Label>
                <Input id="coach-experience" placeholder="10" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="coach-rate">Hourly Rate (USD)</Label>
                <Input id="coach-rate" placeholder="150" className="mt-1" />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-education">Education & Degrees</Label>
              <Textarea 
                id="coach-education" 
                placeholder="Ph.D. in Clinical Psychology, University of California, 2010" 
                className="mt-1"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-certifications">Licenses & Certifications</Label>
              <Textarea 
                id="coach-certifications" 
                placeholder="Licensed Marriage & Family Therapist (LMFT #12345)
Gottman Method Level 3 Certified
Emotionally Focused Therapy (EFT) Certified" 
                className="mt-1"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-specialties">Specialties</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                <div className="flex items-center">
                  <Checkbox id="specialty-communication" />
                  <Label htmlFor="specialty-communication" className="ml-2 text-sm">
                    Communication
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-conflict" />
                  <Label htmlFor="specialty-conflict" className="ml-2 text-sm">
                    Conflict Resolution
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-intimacy" />
                  <Label htmlFor="specialty-intimacy" className="ml-2 text-sm">
                    Intimacy
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-parenting" />
                  <Label htmlFor="specialty-parenting" className="ml-2 text-sm">
                    Parenting
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-cultural" />
                  <Label htmlFor="specialty-cultural" className="ml-2 text-sm">
                    Cultural Dynamics
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-premarital" />
                  <Label htmlFor="specialty-premarital" className="ml-2 text-sm">
                    Premarital Counseling
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-attachment" />
                  <Label htmlFor="specialty-attachment" className="ml-2 text-sm">
                    Attachment Issues
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="specialty-trauma" />
                  <Label htmlFor="specialty-trauma" className="ml-2 text-sm">
                    Trauma Recovery
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-bio">Professional Bio</Label>
              <Textarea 
                id="coach-bio" 
                placeholder="Write a brief professional bio that describes your approach and experience..." 
                className="mt-1 h-32"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-session-types">Session Types Offered</Label>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center">
                  <Checkbox id="session-video" defaultChecked />
                  <Label htmlFor="session-video" className="ml-2 text-sm">
                    Video
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="session-phone" defaultChecked />
                  <Label htmlFor="session-phone" className="ml-2 text-sm">
                    Phone
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="session-chat" defaultChecked />
                  <Label htmlFor="session-chat" className="ml-2 text-sm">
                    Chat
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="coach-languages">Languages Spoken</Label>
              <div className="flex flex-wrap gap-4 mt-1">
                <div className="flex items-center">
                  <Checkbox id="lang-english" defaultChecked />
                  <Label htmlFor="lang-english" className="ml-2 text-sm">
                    English
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="lang-spanish" />
                  <Label htmlFor="lang-spanish" className="ml-2 text-sm">
                    Spanish
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="lang-french" />
                  <Label htmlFor="lang-french" className="ml-2 text-sm">
                    French
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="lang-mandarin" />
                  <Label htmlFor="lang-mandarin" className="ml-2 text-sm">
                    Mandarin
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="lang-other" />
                  <Label htmlFor="lang-other" className="ml-2 text-sm">
                    Other
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <Label className="mb-2 block">Upload Documents</Label>
              <div className="space-y-2">
                <div className="border rounded-md p-3">
                  <Label htmlFor="license-upload" className="flex items-center cursor-pointer">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>License/Certification Documents</span>
                    <Input id="license-upload" type="file" className="hidden" />
                    <Button variant="outline" size="sm" className="ml-auto">
                      Upload
                    </Button>
                  </Label>
                </div>
                <div className="border rounded-md p-3">
                  <Label htmlFor="resume-upload" className="flex items-center cursor-pointer">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Resume/CV</span>
                    <Input id="resume-upload" type="file" className="hidden" />
                    <Button variant="outline" size="sm" className="ml-auto">
                      Upload
                    </Button>
                  </Label>
                </div>
                <div className="border rounded-md p-3">
                  <Label htmlFor="photo-upload" className="flex items-center cursor-pointer">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span>Professional Photo</span>
                    <Input id="photo-upload" type="file" className="hidden" />
                    <Button variant="outline" size="sm" className="ml-auto">
                      Upload
                    </Button>
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-2 mb-4">
              <Checkbox id="terms-agree" className="mt-1" />
              <Label htmlFor="terms-agree" className="text-sm">
                I certify that all information provided is accurate and complete. I understand that misrepresentation may result in the rejection of my application or termination of my participation in the platform. I agree to the <Button variant="link" className="p-0 h-auto">Terms of Service</Button> and <Button variant="link" className="p-0 h-auto">Coach Agreement</Button>.
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsApplyingAsCoach(false)}>Cancel</Button>
            <Button onClick={handleSubmitCoachApplication}>
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <div className="bg-muted rounded-lg p-6 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Professional Coaching Benefits</h3>
        <p className="text-muted-foreground mb-6">
          Working with a professional relationship coach can provide personalized guidance, evidence-based strategies, and expert support to help you build a stronger, healthier relationship.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Expert Guidance</h4>
            <p className="text-sm text-muted-foreground">Licensed professionals with specialized training</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Personalized Approach</h4>
            <p className="text-sm text-muted-foreground">Tailored strategies for your unique relationship</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Confidential Support</h4>
            <p className="text-sm text-muted-foreground">Private and secure environment for open discussion</p>
          </div>
        </div>
        <Button onClick={() => setActiveTab('find-coach')}>
          Find Your Coach Today
        </Button>
      </div>
    </motion.div>
  );
};

export default ProfessionalCoachingIntegration;

