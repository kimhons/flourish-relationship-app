import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Award, 
  Star, 
  Shield, 
  Lock, 
  Video, 
  BookOpen, 
  Heart, 
  Zap, 
  UserPlus, 
  Filter, 
  Search, 
  ChevronRight, 
  Bell, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Clock, 
  User, 
  CheckCircle, 
  Crown,
  Sparkles,
  Lightbulb,
  Flame,
  Gift
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

// Mock data for featured communities
const featuredCommunities = [
  {
    id: 'comm-1',
    name: 'Long-term Relationship Success',
    description: 'Strategies and support for nurturing lasting relationships',
    members: 1243,
    posts: 8765,
    category: 'Relationship Longevity',
    image: '/assets/communities/long-term.jpg',
    tags: ['Communication', 'Commitment', 'Growth'],
    exclusivity: 'premium'
  },
  {
    id: 'comm-2',
    name: 'Conflict Resolution Masters',
    description: 'Transform conflicts into opportunities for deeper connection',
    members: 987,
    posts: 5432,
    category: 'Communication',
    image: '/assets/communities/conflict.jpg',
    tags: ['Conflict', 'Resolution', 'Understanding'],
    exclusivity: 'premium'
  },
  {
    id: 'comm-3',
    name: 'Intimacy & Connection',
    description: 'Deepen emotional and physical intimacy in your relationship',
    members: 1567,
    posts: 9876,
    category: 'Intimacy',
    image: '/assets/communities/intimacy.jpg',
    tags: ['Intimacy', 'Vulnerability', 'Connection'],
    exclusivity: 'premium'
  },
  {
    id: 'comm-4',
    name: 'Relationship Transitions',
    description: 'Navigate major life changes together with strength',
    members: 876,
    posts: 4321,
    category: 'Life Changes',
    image: '/assets/communities/transitions.jpg',
    tags: ['Change', 'Adaptation', 'Growth'],
    exclusivity: 'premium'
  }
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 'event-1',
    title: 'Expert Q&A: Emotional Intelligence in Relationships',
    description: 'Live session with Dr. Sarah Johnson, relationship psychologist',
    date: '2025-07-10T18:00:00',
    duration: 60,
    host: 'Dr. Sarah Johnson',
    attendees: 156,
    category: 'Expert Session',
    image: '/assets/events/expert-qa.jpg',
    exclusivity: 'premium'
  },
  {
    id: 'event-2',
    title: 'Community Discussion: Maintaining Independence in Relationships',
    description: 'Facilitated group discussion on balancing togetherness and autonomy',
    date: '2025-07-15T19:00:00',
    duration: 90,
    host: 'Community Moderator Team',
    attendees: 87,
    category: 'Group Discussion',
    image: '/assets/events/discussion.jpg',
    exclusivity: 'premium'
  },
  {
    id: 'event-3',
    title: 'Workshop: Effective Communication Techniques',
    description: 'Interactive workshop on improving relationship communication',
    date: '2025-07-20T17:00:00',
    duration: 120,
    host: 'Communication Coach Alex Rivera',
    attendees: 124,
    category: 'Workshop',
    image: '/assets/events/workshop.jpg',
    exclusivity: 'premium'
  }
];

// Mock data for trending discussions
const trendingDiscussions = [
  {
    id: 'disc-1',
    title: 'How to maintain relationship spark after 10+ years?',
    author: 'LongTermLover',
    authorImage: '/assets/users/user1.jpg',
    community: 'Long-term Relationship Success',
    replies: 87,
    likes: 143,
    timeAgo: '2 hours ago',
    exclusivity: 'premium'
  },
  {
    id: 'disc-2',
    title: 'Navigating different love languages - what works for you?',
    author: 'ConnectionSeeker',
    authorImage: '/assets/users/user2.jpg',
    community: 'Intimacy & Connection',
    replies: 65,
    likes: 98,
    timeAgo: '5 hours ago',
    exclusivity: 'premium'
  },
  {
    id: 'disc-3',
    title: 'Successfully moved across country with partner - our journey',
    author: 'AdventureTogether',
    authorImage: '/assets/users/user3.jpg',
    community: 'Relationship Transitions',
    replies: 42,
    likes: 76,
    timeAgo: '1 day ago',
    exclusivity: 'premium'
  },
  {
    id: 'disc-4',
    title: 'Transformed how we argue - technique that changed everything',
    author: 'PeacefulPartner',
    authorImage: '/assets/users/user4.jpg',
    community: 'Conflict Resolution Masters',
    replies: 112,
    likes: 201,
    timeAgo: '2 days ago',
    exclusivity: 'premium'
  }
];

// Mock data for premium benefits
const premiumBenefits = [
  {
    title: 'Exclusive Communities',
    description: 'Access to premium-only communities led by relationship experts',
    icon: <Users className="h-8 w-8 text-primary" />
  },
  {
    title: 'Expert-Led Events',
    description: 'Participate in live Q&As, workshops, and discussions with professionals',
    icon: <Calendar className="h-8 w-8 text-primary" />
  },
  {
    title: 'Priority Support',
    description: 'Get personalized guidance from community moderators and experts',
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    title: 'Advanced Discussion Tools',
    description: 'Enhanced posting features, polls, and multimedia sharing',
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  },
  {
    title: 'Recognition Program',
    description: 'Earn exclusive badges and recognition for your contributions',
    icon: <Award className="h-8 w-8 text-primary" />
  },
  {
    title: 'Content Archive',
    description: 'Full access to historical discussions, guides, and resources',
    icon: <BookOpen className="h-8 w-8 text-primary" />
  }
];

const PremiumCommunityAccess = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('discover');
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const handleJoinCommunity = (community) => {
    setSelectedCommunity(community);
    setShowJoinDialog(true);
  };
  
  const confirmJoinCommunity = () => {
    setShowJoinDialog(false);
    
    toast({
      title: "Community Joined",
      description: `You've successfully joined the ${selectedCommunity.name} community.`,
    });
  };
  
  const handleRegisterEvent = (event) => {
    toast({
      title: "Event Registration Confirmed",
      description: `You're registered for "${event.title}" on ${new Date(event.date).toLocaleDateString()}.`,
    });
  };
  
  const handleViewDiscussion = (discussion) => {
    toast({
      title: "Opening Discussion",
      description: `Viewing "${discussion.title}" in the ${discussion.community} community.`,
    });
  };
  
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getTimeRemaining = (dateString) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diffTime = eventDate - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays}d ${diffHours}h remaining`;
    } else {
      return `${diffHours}h remaining`;
    }
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
              <Crown className="h-6 w-6 text-yellow-500 mr-2" />
              <h1 className="text-3xl font-bold tracking-tight">Premium Community</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Connect with experts and peers in exclusive premium communities
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" className="hidden md:flex">
              <Bell className="h-4 w-4 mr-2" />
              Notification Settings
            </Button>
            
            <Button>
              <Sparkles className="h-4 w-4 mr-2" />
              Explore Communities
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <Badge className="mb-2 bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 transition-colors">
                Premium Exclusive
              </Badge>
              <h2 className="text-2xl font-bold mb-2">Welcome to Your Premium Community</h2>
              <p className="text-muted-foreground mb-4">
                As a premium member, you have exclusive access to expert-led communities, events, and discussions designed to transform your relationship. Connect with relationship experts and like-minded couples on a deeper level.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  4,500+ Premium Members
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  12 Exclusive Communities
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Weekly Expert Events
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Moderated Safe Space
                </Badge>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/10 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/20 rounded-full" />
                <div className="relative bg-card p-4 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/assets/users/expert1.jpg" alt="Expert" />
                      <AvatarFallback>EX</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/assets/users/expert2.jpg" alt="Expert" />
                      <AvatarFallback>EX</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/assets/users/expert3.jpg" alt="Expert" />
                      <AvatarFallback>EX</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/assets/users/expert4.jpg" alt="Expert" />
                      <AvatarFallback>EX</AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-center text-sm font-medium mt-2">Expert-Led Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="discover" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Featured Communities</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search communities..." 
                    className="pl-8 w-full sm:w-[200px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Relationship Longevity">Relationship Longevity</SelectItem>
                    <SelectItem value="Communication">Communication</SelectItem>
                    <SelectItem value="Intimacy">Intimacy</SelectItem>
                    <SelectItem value="Life Changes">Life Changes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {featuredCommunities
                .filter(community => 
                  (categoryFilter === 'all' || community.category === categoryFilter) &&
                  (searchQuery === '' || 
                   community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   community.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map(community => (
                <Card key={community.id} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{community.name}</CardTitle>
                        <CardDescription className="mt-1">{community.description}</CardDescription>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 transition-colors">
                        Premium
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{community.members.toLocaleString()} members</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{community.posts.toLocaleString()} posts</span>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="text-xs">
                          {community.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full" 
                      onClick={() => handleJoinCommunity(community)}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Join Community
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Upcoming Premium Events</h2>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
            
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center">
                      {event.category === 'Expert Session' && <Video className="h-16 w-16 text-primary/40" />}
                      {event.category === 'Group Discussion' && <MessageCircle className="h-16 w-16 text-primary/40" />}
                      {event.category === 'Workshop' && <Lightbulb className="h-16 w-16 text-primary/40" />}
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                        <Badge className="bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 transition-colors">
                          Premium
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Date & Time</span>
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Duration</span>
                          <span className="font-medium">{event.duration} minutes</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Host</span>
                          <span className="font-medium">{event.host}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">Attendees</span>
                          <span className="font-medium">{event.attendees} registered</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <Badge variant="outline" className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {getTimeRemaining(event.date)}
                        </Badge>
                        
                        <Button onClick={() => handleRegisterEvent(event)}>
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Looking for more events? Check out our full calendar or suggest a topic.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All Events
                </Button>
                <Button variant="outline">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Suggest Event Topic
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="discussions" className="mt-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Trending Premium Discussions</h2>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start New Discussion
              </Button>
            </div>
            
            <div className="space-y-4">
              {trendingDiscussions.map(discussion => (
                <Card key={discussion.id} className="hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => handleViewDiscussion(discussion)}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={discussion.authorImage} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-base">{discussion.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <span className="font-medium">{discussion.author}</span>
                              <span className="mx-1">•</span>
                              <span>{discussion.timeAgo}</span>
                              <span className="mx-1">•</span>
                              <Badge variant="outline" className="text-xs">
                                {discussion.community}
                              </Badge>
                            </div>
                          </div>
                          <Badge className="bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 transition-colors">
                            Premium
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{discussion.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center ml-auto">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Bookmark className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button>
                View All Premium Discussions
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Premium Community Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your premium membership unlocks exclusive community features designed to enhance your relationship journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumBenefits.map((benefit, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{benefit.icon}</div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold mb-2">Invite Your Partner to Premium</h3>
                  <p className="text-muted-foreground mb-4">
                    Share the benefits of premium community access with your partner. When both of you participate, you'll unlock additional couple-specific features and benefits.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center">
                      <Gift className="h-3 w-3 mr-1" />
                      50% Off Partner's First Month
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      Couple's Badge
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Exclusive Couple's Events
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Button className="w-full" size="lg">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite Partner
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join {selectedCommunity?.name}</DialogTitle>
            <DialogDescription>
              You're about to join an exclusive premium community. This will add the community to your feed and allow you to participate in discussions.
            </DialogDescription>
          </DialogHeader>
          
          {selectedCommunity && (
            <div className="py-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-yellow-500/20 text-yellow-700">Premium</Badge>
                <Badge variant="outline">{selectedCommunity.category}</Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {selectedCommunity.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{selectedCommunity.members.toLocaleString()} members</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{selectedCommunity.posts.toLocaleString()} posts</span>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowJoinDialog(false)}>Cancel</Button>
            <Button onClick={confirmJoinCommunity}>
              <UserPlus className="h-4 w-4 mr-2" />
              Join Community
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PremiumCommunityAccess;

