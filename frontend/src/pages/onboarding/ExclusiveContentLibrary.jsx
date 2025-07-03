import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Video, FileText, Headphones, Download, 
  Star, Filter, Search, ChevronDown, ChevronUp, 
  Clock, Calendar, Play, Bookmark, Share2, Heart,
  Lock, CheckCircle, Tag, Award, TrendingUp, Eye,
  BookMarked, Layers, Zap, MessageCircle, Users,
  BarChart2, Compass, Gift, Coffee
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
import { Progress } from '../../components/ui/progress';
import { Checkbox } from '../../components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';

const ExclusiveContentLibrary = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [completedOnly, setCompletedOnly] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [showContentDetails, setShowContentDetails] = useState(false);
  
  // Sample content categories
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="h-4 w-4" /> },
    { id: 'intimacy', name: 'Intimacy', icon: <Heart className="h-4 w-4" /> },
    { id: 'conflict', name: 'Conflict Resolution', icon: <Zap className="h-4 w-4" /> },
    { id: 'growth', name: 'Personal Growth', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'parenting', name: 'Parenting', icon: <Users className="h-4 w-4" /> },
    { id: 'finances', name: 'Financial Harmony', icon: <BarChart2 className="h-4 w-4" /> },
    { id: 'dating', name: 'Dating & Romance', icon: <Coffee className="h-4 w-4" /> },
    { id: 'longterm', name: 'Long-term Relationships', icon: <Compass className="h-4 w-4" /> }
  ];
  
  // Sample content formats
  const formats = [
    { id: 'all', name: 'All Formats' },
    { id: 'article', name: 'Articles', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'video', name: 'Videos', icon: <Video className="h-4 w-4" /> },
    { id: 'guide', name: 'Guides', icon: <FileText className="h-4 w-4" /> },
    { id: 'audio', name: 'Audio', icon: <Headphones className="h-4 w-4" /> },
    { id: 'worksheet', name: 'Worksheets', icon: <Layers className="h-4 w-4" /> },
    { id: 'course', name: 'Courses', icon: <BookMarked className="h-4 w-4" /> }
  ];
  
  // Sample sort options
  const sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'trending', name: 'Trending Now' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'az', name: 'A-Z' },
    { id: 'za', name: 'Z-A' }
  ];
  
  // Sample featured content
  const featuredContent = [
    {
      id: 'content-1',
      title: 'The Science of Lasting Love: Research-Backed Strategies',
      description: 'Discover the scientifically-proven methods to build and maintain a fulfilling, long-lasting relationship based on decades of relationship research.',
      category: 'growth',
      format: 'article',
      author: 'Dr. Emily Johnson',
      authorTitle: 'Relationship Psychologist',
      authorAvatar: '/avatars/emily-johnson.jpg',
      coverImage: '/content/science-of-love.jpg',
      duration: '15 min read',
      date: '2025-06-28',
      rating: 4.9,
      reviewCount: 342,
      isBookmarked: true,
      isCompleted: false,
      isFeatured: true,
      tags: ['research', 'psychology', 'attachment theory', 'love languages'],
      premium: true
    },
    {
      id: 'content-2',
      title: 'Communication Masterclass: Beyond Words',
      description: 'A comprehensive video course on mastering both verbal and non-verbal communication to create deeper understanding and connection with your partner.',
      category: 'communication',
      format: 'video',
      author: 'Marcus & Sophia Chen',
      authorTitle: 'Communication Experts',
      authorAvatar: '/avatars/chen-couple.jpg',
      coverImage: '/content/communication-masterclass.jpg',
      duration: '5 hours total',
      date: '2025-06-15',
      rating: 4.8,
      reviewCount: 287,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: true,
      tags: ['communication', 'listening', 'body language', 'empathy'],
      premium: true
    },
    {
      id: 'content-3',
      title: 'Conflict to Connection: Transforming Arguments into Growth',
      description: 'Learn how to turn relationship conflicts into opportunities for deeper connection and mutual growth with this practical, step-by-step guide.',
      category: 'conflict',
      format: 'guide',
      author: 'Dr. Robert Williams',
      authorTitle: 'Couples Therapist',
      authorAvatar: '/avatars/robert-williams.jpg',
      coverImage: '/content/conflict-to-connection.jpg',
      duration: '45 min read',
      date: '2025-06-10',
      rating: 4.7,
      reviewCount: 215,
      isBookmarked: true,
      isCompleted: true,
      isFeatured: true,
      tags: ['conflict resolution', 'communication', 'emotional intelligence'],
      premium: true
    },
    {
      id: 'content-4',
      title: 'Intimacy Reimagined: Beyond the Physical',
      description: 'Explore the multidimensional nature of intimacy and learn practical techniques to deepen connection across emotional, intellectual, and spiritual domains.',
      category: 'intimacy',
      format: 'audio',
      author: 'Dr. Aisha Patel',
      authorTitle: 'Intimacy & Relationship Coach',
      authorAvatar: '/avatars/aisha-patel.jpg',
      coverImage: '/content/intimacy-reimagined.jpg',
      duration: '3.5 hours total',
      date: '2025-06-05',
      rating: 4.9,
      reviewCount: 178,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: true,
      tags: ['intimacy', 'connection', 'vulnerability', 'trust'],
      premium: true
    }
  ];
  
  // Sample all content (including featured)
  const allContent = [
    ...featuredContent,
    {
      id: 'content-5',
      title: 'Financial Harmony: Building Wealth Together',
      description: 'A comprehensive guide to managing finances as a couple, from daily budgeting to long-term investment strategies that align with your shared values and goals.',
      category: 'finances',
      format: 'guide',
      author: 'Michael Torres, CFP',
      authorTitle: 'Financial Advisor',
      authorAvatar: '/avatars/michael-torres.jpg',
      coverImage: '/content/financial-harmony.jpg',
      duration: '2 hours total',
      date: '2025-05-28',
      rating: 4.6,
      reviewCount: 156,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: false,
      tags: ['finances', 'budgeting', 'investing', 'goals'],
      premium: true
    },
    {
      id: 'content-6',
      title: 'The Art of Dating: Rediscovering Romance',
      description: 'Reignite the spark in your long-term relationship with creative date ideas, conversation starters, and activities designed to foster playfulness and discovery.',
      category: 'dating',
      format: 'article',
      author: 'Jessica & David Kim',
      authorTitle: 'Relationship Coaches',
      authorAvatar: '/avatars/kim-couple.jpg',
      coverImage: '/content/art-of-dating.jpg',
      duration: '20 min read',
      date: '2025-05-20',
      rating: 4.7,
      reviewCount: 132,
      isBookmarked: true,
      isCompleted: false,
      isFeatured: false,
      tags: ['dating', 'romance', 'activities', 'connection'],
      premium: true
    },
    {
      id: 'content-7',
      title: 'Parenting as Partners: United in Raising Children',
      description: 'Discover strategies for aligning your parenting approaches, resolving differences, and creating a harmonious family environment that nurtures both your children and your relationship.',
      category: 'parenting',
      format: 'video',
      author: 'Dr. James Wilson',
      authorTitle: 'Family Psychologist',
      authorAvatar: '/avatars/james-wilson.jpg',
      coverImage: '/content/parenting-partners.jpg',
      duration: '4 hours total',
      date: '2025-05-15',
      rating: 4.8,
      reviewCount: 198,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: false,
      tags: ['parenting', 'family', 'communication', 'teamwork'],
      premium: true
    },
    {
      id: 'content-8',
      title: 'Emotional Intelligence for Couples',
      description: 'Learn how to recognize, understand, and manage emotions—both yours and your partner's—to create a relationship built on empathy, support, and mutual growth.',
      category: 'growth',
      format: 'course',
      author: 'Dr. Elena Rodriguez',
      authorTitle: 'Emotional Intelligence Expert',
      authorAvatar: '/avatars/elena-rodriguez.jpg',
      coverImage: '/content/emotional-intelligence.jpg',
      duration: '6 hours total',
      date: '2025-05-10',
      rating: 4.9,
      reviewCount: 245,
      isBookmarked: true,
      isCompleted: true,
      isFeatured: false,
      tags: ['emotional intelligence', 'empathy', 'self-awareness'],
      premium: true
    },
    {
      id: 'content-9',
      title: 'The Love Languages Workshop',
      description: 'An interactive workshop that helps you identify and speak your partner's love language, transforming how you express and receive love in your relationship.',
      category: 'communication',
      format: 'worksheet',
      author: 'Dr. Thomas Chapman',
      authorTitle: 'Relationship Counselor',
      authorAvatar: '/avatars/thomas-chapman.jpg',
      coverImage: '/content/love-languages.jpg',
      duration: '2 hours total',
      date: '2025-05-05',
      rating: 4.7,
      reviewCount: 176,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: false,
      tags: ['love languages', 'communication', 'appreciation'],
      premium: true
    },
    {
      id: 'content-10',
      title: 'Navigating Life Transitions Together',
      description: 'A guide to supporting each other through major life changes—from career shifts to health challenges—while maintaining a strong and resilient relationship.',
      category: 'longterm',
      format: 'audio',
      author: 'Dr. Sarah Johnson',
      authorTitle: 'Clinical Psychologist',
      authorAvatar: '/avatars/sarah-johnson.jpg',
      coverImage: '/content/life-transitions.jpg',
      duration: '3 hours total',
      date: '2025-04-28',
      rating: 4.6,
      reviewCount: 142,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: false,
      tags: ['transitions', 'resilience', 'support', 'change'],
      premium: true
    },
    {
      id: 'content-11',
      title: 'The Science of Physical Intimacy',
      description: 'An evidence-based exploration of physical intimacy, addressing common challenges and providing practical strategies for a fulfilling physical relationship.',
      category: 'intimacy',
      format: 'article',
      author: 'Dr. Michelle Lee',
      authorTitle: 'Sex Therapist',
      authorAvatar: '/avatars/michelle-lee.jpg',
      coverImage: '/content/physical-intimacy.jpg',
      duration: '25 min read',
      date: '2025-04-20',
      rating: 4.8,
      reviewCount: 189,
      isBookmarked: true,
      isCompleted: false,
      isFeatured: false,
      tags: ['intimacy', 'physical', 'connection', 'desire'],
      premium: true
    },
    {
      id: 'content-12',
      title: 'Healing from Relationship Trauma',
      description: 'A compassionate guide to recognizing, addressing, and healing from past relationship wounds to create healthier patterns in your current relationship.',
      category: 'growth',
      format: 'guide',
      author: 'Dr. Olivia Martinez',
      authorTitle: 'Trauma Specialist',
      authorAvatar: '/avatars/olivia-martinez.jpg',
      coverImage: '/content/healing-trauma.jpg',
      duration: '3 hours total',
      date: '2025-04-15',
      rating: 4.9,
      reviewCount: 215,
      isBookmarked: false,
      isCompleted: false,
      isFeatured: false,
      tags: ['trauma', 'healing', 'patterns', 'therapy'],
      premium: true
    }
  ];
  
  // Filter content based on search, category, format, and other filters
  const filteredContent = allContent.filter(content => {
    // Filter by search query
    if (searchQuery && !content.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !content.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory !== 'all' && content.category !== selectedCategory) {
      return false;
    }
    
    // Filter by format
    if (selectedFormat !== 'all' && content.format !== selectedFormat) {
      return false;
    }
    
    // Filter bookmarked only
    if (bookmarkedOnly && !content.isBookmarked) {
      return false;
    }
    
    // Filter completed only
    if (completedOnly && !content.isCompleted) {
      return false;
    }
    
    return true;
  });
  
  // Sort filtered content
  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (selectedSort) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'popular':
        return b.reviewCount - a.reviewCount;
      case 'trending':
        // For demo purposes, trending is a combination of recency and popularity
        return (new Date(b.date) - new Date(a.date)) + (b.reviewCount - a.reviewCount);
      case 'rating':
        return b.rating - a.rating;
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  
  // Get content for current tab
  const getTabContent = () => {
    switch (activeTab) {
      case 'featured':
        return featuredContent;
      case 'all':
        return sortedContent;
      case 'bookmarked':
        return allContent.filter(content => content.isBookmarked);
      case 'completed':
        return allContent.filter(content => content.isCompleted);
      default:
        return [];
    }
  };
  
  const handleBookmarkToggle = (contentId) => {
    // In a real implementation, this would update the database
    toast({
      title: "Bookmark Updated",
      description: "Your content bookmarks have been updated.",
    });
  };
  
  const handleContentSelect = (content) => {
    setSelectedContent(content);
    setShowContentDetails(true);
  };
  
  const handleDownloadContent = (content) => {
    toast({
      title: "Content Downloaded",
      description: `${content.title} has been downloaded for offline access.`,
    });
  };
  
  const handleShareContent = (content) => {
    toast({
      title: "Share Link Copied",
      description: "A link to this content has been copied to your clipboard.",
    });
  };
  
  const getFormatIcon = (format) => {
    switch (format) {
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'guide':
        return <FileText className="h-5 w-5" />;
      case 'audio':
        return <Headphones className="h-5 w-5" />;
      case 'worksheet':
        return <Layers className="h-5 w-5" />;
      case 'course':
        return <BookMarked className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  const getFormatName = (formatId) => {
    const format = formats.find(fmt => fmt.id === formatId);
    return format ? format.name : formatId;
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
            <h1 className="text-3xl font-bold tracking-tight">Exclusive Content Library</h1>
            <p className="text-muted-foreground mt-1">
              Premium resources to enhance your relationship journey
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {showFilters ? (
                <ChevronUp className="h-4 w-4 ml-2" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-2" />
              )}
            </Button>
            
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search content..."
                className="pl-8 w-[200px] md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
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
                  <Label htmlFor="format">Format</Label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger id="format" className="mt-1">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      {formats.map(format => (
                        <SelectItem key={format.id} value={format.id}>
                          <div className="flex items-center">
                            {format.icon && <span className="mr-2">{format.icon}</span>}
                            {format.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="sort">Sort By</Label>
                  <Select value={selectedSort} onValueChange={setSelectedSort}>
                    <SelectTrigger id="sort" className="mt-1">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(option => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="bookmarked" 
                    checked={bookmarkedOnly}
                    onCheckedChange={setBookmarkedOnly}
                  />
                  <Label htmlFor="bookmarked" className="cursor-pointer">Bookmarked only</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="completed" 
                    checked={completedOnly}
                    onCheckedChange={setCompletedOnly}
                  />
                  <Label htmlFor="completed" className="cursor-pointer">Completed only</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTabContent().map(content => (
                <Card key={content.id} className="overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${content.coverImage})` }}
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-background/80 backdrop-blur-sm rounded-full"
                        onClick={() => handleBookmarkToggle(content.id)}
                      >
                        <Bookmark 
                          className={cn(
                            "h-4 w-4",
                            content.isBookmarked ? "fill-primary text-primary" : "text-foreground"
                          )} 
                        />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {getFormatIcon(content.format)}
                        <span className="ml-1">{getFormatName(content.format)}</span>
                      </Badge>
                    </div>
                    {content.isCompleted && (
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary" className="bg-green-500/90 text-white backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {getCategoryName(content.category)}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium ml-1">{content.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl cursor-pointer hover:text-primary transition-colors" onClick={() => handleContentSelect(content)}>
                      {content.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{content.duration}</span>
                      <Separator orientation="vertical" className="mx-2 h-3" />
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(content.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="py-2 flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {content.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-2 pb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={content.authorAvatar} alt={content.author} />
                        <AvatarFallback>{content.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm font-medium">{content.author}</p>
                        <p className="text-xs text-muted-foreground">{content.authorTitle}</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" onClick={() => handleContentSelect(content)}>
                      View
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {getTabContent().length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No content found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <Dialog open={showContentDetails} onOpenChange={setShowContentDetails}>
          <DialogContent className="max-w-4xl">
            {selectedContent && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {getCategoryName(selectedContent.category)}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{selectedContent.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({selectedContent.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl mt-2">{selectedContent.title}</DialogTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Badge variant="secondary" className="mr-2">
                      {getFormatIcon(selectedContent.format)}
                      <span className="ml-1">{getFormatName(selectedContent.format)}</span>
                    </Badge>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{selectedContent.duration}</span>
                    <Separator orientation="vertical" className="mx-2 h-3" />
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(selectedContent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </DialogHeader>
                
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center rounded-md" 
                    style={{ backgroundImage: `url(${selectedContent.coverImage})` }}
                  />
                  {selectedContent.format === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary">
                        <Play className="h-8 w-8 text-primary-foreground" />
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedContent.authorAvatar} alt={selectedContent.author} />
                    <AvatarFallback>{selectedContent.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedContent.author}</p>
                    <p className="text-sm text-muted-foreground">{selectedContent.authorTitle}</p>
                  </div>
                </div>
                
                <DialogDescription className="text-foreground">
                  {selectedContent.description}
                </DialogDescription>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedContent.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <DialogFooter className="flex-col sm:flex-row gap-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleBookmarkToggle(selectedContent.id)}
                    >
                      <Bookmark 
                        className={cn(
                          "h-4 w-4 mr-2",
                          selectedContent.isBookmarked ? "fill-primary text-primary" : ""
                        )} 
                      />
                      {selectedContent.isBookmarked ? "Bookmarked" : "Bookmark"}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShareContent(selectedContent)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadContent(selectedContent)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    
                    <Button>
                      {selectedContent.format === 'video' || selectedContent.format === 'audio' ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read
                        </>
                      )}
                    </Button>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default ExclusiveContentLibrary;

