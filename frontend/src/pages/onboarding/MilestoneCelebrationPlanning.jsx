import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Heart, 
  Gift, 
  Camera, 
  MapPin, 
  Clock, 
  Users, 
  Sparkles, 
  Star, 
  MessageCircle, 
  Bell, 
  Bookmark, 
  Share2, 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Minus, 
  Check, 
  X, 
  Info, 
  AlertCircle, 
  HelpCircle,
  CalendarDays,
  Cake,
  GlassWater,
  Music,
  Utensils,
  Palette,
  Pencil,
  Save,
  FileText,
  Download,
  Upload,
  Trash2,
  Copy,
  Zap,
  Award,
  PartyPopper,
  Lightbulb,
  Clipboard,
  ClipboardCheck,
  Ticket
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
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Progress } from '../../components/ui/progress';
import { Calendar as CalendarComponent } from '../../components/ui/calendar';
import { format } from 'date-fns';

// Mock data for milestone types
const milestoneTypes = [
  { id: 'anniversary', name: 'Anniversary', icon: <Heart className="h-5 w-5" />, color: 'bg-red-100 text-red-700' },
  { id: 'birthday', name: 'Birthday', icon: <Cake className="h-5 w-5" />, color: 'bg-blue-100 text-blue-700' },
  { id: 'relationship', name: 'Relationship Milestone', icon: <Award className="h-5 w-5" />, color: 'bg-purple-100 text-purple-700' },
  { id: 'achievement', name: 'Achievement', icon: <Star className="h-5 w-5" />, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'special', name: 'Special Occasion', icon: <PartyPopper className="h-5 w-5" />, color: 'bg-green-100 text-green-700' },
  { id: 'custom', name: 'Custom Milestone', icon: <Sparkles className="h-5 w-5" />, color: 'bg-orange-100 text-orange-700' }
];

// Mock data for celebration ideas
const celebrationIdeas = [
  {
    id: 'idea-1',
    title: 'Romantic Dinner Experience',
    description: 'Private chef-prepared dinner at home or at a special venue with personalized menu.',
    category: 'dining',
    effort: 'medium',
    budget: '$$-$$$',
    planningTime: '1-2 weeks',
    tags: ['Romantic', 'Food', 'Private'],
    image: '/assets/celebrations/dinner.jpg'
  },
  {
    id: 'idea-2',
    title: 'Memory Lane Photo Album',
    description: 'Create a custom photo album or digital slideshow of your journey together with captions and stories.',
    category: 'gift',
    effort: 'high',
    budget: '$-$$',
    planningTime: '2-3 weeks',
    tags: ['Thoughtful', 'Creative', 'Memories'],
    image: '/assets/celebrations/album.jpg'
  },
  {
    id: 'idea-3',
    title: 'Surprise Weekend Getaway',
    description: 'Plan a surprise trip to a meaningful location or somewhere new you've wanted to explore together.',
    category: 'travel',
    effort: 'high',
    budget: '$$$',
    planningTime: '1-2 months',
    tags: ['Adventure', 'Surprise', 'Travel'],
    image: '/assets/celebrations/getaway.jpg'
  },
  {
    id: 'idea-4',
    title: 'Milestone Celebration Party',
    description: 'Host a gathering with friends and family to celebrate your milestone together.',
    category: 'event',
    effort: 'high',
    budget: '$$-$$$',
    planningTime: '1-2 months',
    tags: ['Social', 'Party', 'Community'],
    image: '/assets/celebrations/party.jpg'
  },
  {
    id: 'idea-5',
    title: 'Recreate Your First Date',
    description: 'Revisit the location of your first date and recreate the experience with thoughtful details.',
    category: 'experience',
    effort: 'medium',
    budget: '$-$$',
    planningTime: '1-2 weeks',
    tags: ['Nostalgic', 'Romantic', 'Meaningful'],
    image: '/assets/celebrations/first-date.jpg'
  },
  {
    id: 'idea-6',
    title: 'Custom Milestone Jewelry',
    description: 'Commission a piece of jewelry that commemorates your milestone with personal significance.',
    category: 'gift',
    effort: 'low',
    budget: '$$-$$$',
    planningTime: '2-4 weeks',
    tags: ['Luxury', 'Keepsake', 'Personal'],
    image: '/assets/celebrations/jewelry.jpg'
  },
  {
    id: 'idea-7',
    title: 'Bucket List Experience',
    description: 'Check off something from your shared bucket list that you've been wanting to do together.',
    category: 'experience',
    effort: 'medium',
    budget: '$$-$$$',
    planningTime: 'Varies',
    tags: ['Adventure', 'Memorable', 'Achievement'],
    image: '/assets/celebrations/bucket-list.jpg'
  },
  {
    id: 'idea-8',
    title: 'Couples Spa Retreat',
    description: 'Book a day of relaxation with couples massages, treatments, and private spa time.',
    category: 'wellness',
    effort: 'low',
    budget: '$$-$$$',
    planningTime: '1-2 weeks',
    tags: ['Relaxation', 'Pampering', 'Wellness'],
    image: '/assets/celebrations/spa.jpg'
  },
  {
    id: 'idea-9',
    title: 'Star Registry Gift',
    description: 'Name a star after your relationship or milestone and receive a certificate with star coordinates.',
    category: 'gift',
    effort: 'low',
    budget: '$-$$',
    planningTime: '1-2 weeks',
    tags: ['Romantic', 'Symbolic', 'Unique'],
    image: '/assets/celebrations/star.jpg'
  },
  {
    id: 'idea-10',
    title: 'Love Letter Time Capsule',
    description: 'Write letters to each other about your journey so far and your hopes for the future, to be opened at your next milestone.',
    category: 'activity',
    effort: 'medium',
    budget: '$',
    planningTime: '1 week',
    tags: ['Emotional', 'Meaningful', 'Future-focused'],
    image: '/assets/celebrations/letters.jpg'
  },
  {
    id: 'idea-11',
    title: 'Custom Portrait Commission',
    description: 'Commission an artist to create a portrait or artwork that represents your relationship.',
    category: 'gift',
    effort: 'low',
    budget: '$$-$$$',
    planningTime: '3-4 weeks',
    tags: ['Artistic', 'Keepsake', 'Personalized'],
    image: '/assets/celebrations/portrait.jpg'
  },
  {
    id: 'idea-12',
    title: 'Milestone Video Compilation',
    description: 'Collect video messages from friends and family congratulating you on your milestone and compile them into a surprise video.',
    category: 'gift',
    effort: 'high',
    budget: '$',
    planningTime: '3-4 weeks',
    tags: ['Emotional', 'Community', 'Surprise'],
    image: '/assets/celebrations/video.jpg'
  }
];

// Mock data for planning templates
const planningTemplates = [
  {
    id: 'template-1',
    title: 'Anniversary Celebration',
    description: 'Complete plan for a memorable anniversary celebration',
    milestoneType: 'anniversary',
    components: ['timeline', 'budget', 'guestList', 'activities', 'gifts'],
    image: '/assets/templates/anniversary.jpg'
  },
  {
    id: 'template-2',
    title: 'Surprise Birthday Experience',
    description: 'Step-by-step guide to create the perfect surprise birthday',
    milestoneType: 'birthday',
    components: ['timeline', 'surprise', 'activities', 'gifts'],
    image: '/assets/templates/birthday.jpg'
  },
  {
    id: 'template-3',
    title: 'Relationship Milestone Party',
    description: 'Plan to celebrate a significant relationship achievement with friends and family',
    milestoneType: 'relationship',
    components: ['timeline', 'budget', 'guestList', 'venue', 'catering'],
    image: '/assets/templates/milestone.jpg'
  },
  {
    id: 'template-4',
    title: 'Intimate Celebration for Two',
    description: 'Private and meaningful celebration just for the two of you',
    milestoneType: 'special',
    components: ['timeline', 'activities', 'dining', 'gifts'],
    image: '/assets/templates/intimate.jpg'
  }
];

// Mock data for saved milestones
const savedMilestones = [
  {
    id: 'milestone-1',
    title: '5th Anniversary',
    date: new Date(2025, 8, 15),
    type: 'anniversary',
    description: 'Celebrating 5 years of marriage',
    planningProgress: 75,
    ideas: ['idea-1', 'idea-3', 'idea-6']
  },
  {
    id: 'milestone-2',
    title: 'Alex\'s 35th Birthday',
    date: new Date(2025, 10, 22),
    type: 'birthday',
    description: 'Milestone birthday celebration',
    planningProgress: 30,
    ideas: ['idea-4', 'idea-7']
  },
  {
    id: 'milestone-3',
    title: 'New Home Celebration',
    date: new Date(2025, 11, 5),
    type: 'achievement',
    description: 'Celebrating our first home purchase',
    planningProgress: 15,
    ideas: ['idea-4']
  }
];

const MilestoneCelebrationPlanning = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedMilestoneType, setSelectedMilestoneType] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [showIdeaDialog, setShowIdeaDialog] = useState(false);
  const [showNewMilestoneDialog, setShowNewMilestoneDialog] = useState(false);
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showMilestoneDialog, setShowMilestoneDialog] = useState(false);
  
  // New milestone form state
  const [newMilestone, setNewMilestone] = useState({
    title: '',
    date: new Date(),
    type: '',
    description: '',
    ideas: []
  });
  
  const handleNewMilestoneChange = (field, value) => {
    setNewMilestone(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleCreateMilestone = () => {
    toast({
      title: "Milestone Created",
      description: `${newMilestone.title} has been added to your celebrations.`,
    });
    
    setShowNewMilestoneDialog(false);
    setNewMilestone({
      title: '',
      date: new Date(),
      type: '',
      description: '',
      ideas: []
    });
  };
  
  const handleViewIdea = (idea) => {
    setSelectedIdea(idea);
    setShowIdeaDialog(true);
  };
  
  const handleViewMilestone = (milestone) => {
    setSelectedMilestone(milestone);
    setShowMilestoneDialog(true);
  };
  
  const handleViewTemplate = (template) => {
    setSelectedTemplate(template);
    setShowTemplateDialog(true);
  };
  
  const handleUseTemplate = () => {
    toast({
      title: "Template Applied",
      description: "The celebration template has been applied to your planning.",
    });
    
    setShowTemplateDialog(false);
  };
  
  const handleSaveMilestone = () => {
    toast({
      title: "Milestone Updated",
      description: "Your changes have been saved successfully.",
    });
    
    setShowMilestoneDialog(false);
  };
  
  const handleAddIdeaToMilestone = (idea) => {
    if (selectedMilestone) {
      toast({
        title: "Idea Added",
        description: `${idea.title} has been added to ${selectedMilestone.title}.`,
      });
    } else {
      toast({
        title: "Select a Milestone",
        description: "Please select or create a milestone first.",
      });
    }
  };
  
  const getUpcomingMilestones = () => {
    return savedMilestones.filter(milestone => milestone.date > new Date())
      .sort((a, b) => a.date - b.date);
  };
  
  const getPastMilestones = () => {
    return savedMilestones.filter(milestone => milestone.date <= new Date())
      .sort((a, b) => b.date - a.date);
  };
  
  const getMilestoneTypeInfo = (typeId) => {
    return milestoneTypes.find(type => type.id === typeId) || {
      name: 'Unknown',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'bg-gray-100 text-gray-700'
    };
  };
  
  const getIdeasForMilestone = (milestone) => {
    return milestone.ideas.map(ideaId => 
      celebrationIdeas.find(idea => idea.id === ideaId)
    ).filter(Boolean);
  };
  
  const filterIdeasByType = (type) => {
    if (!type) return celebrationIdeas;
    
    // Map milestone types to relevant idea categories and tags
    const typeFilters = {
      'anniversary': ['romantic', 'dining', 'travel', 'gift'],
      'birthday': ['surprise', 'party', 'gift', 'experience'],
      'relationship': ['romantic', 'meaningful', 'experience'],
      'achievement': ['celebration', 'event', 'achievement'],
      'special': ['unique', 'memorable', 'special'],
      'custom': []
    };
    
    const relevantCategories = typeFilters[type] || [];
    
    if (relevantCategories.length === 0) return celebrationIdeas;
    
    return celebrationIdeas.filter(idea => 
      relevantCategories.includes(idea.category) || 
      idea.tags.some(tag => relevantCategories.includes(tag.toLowerCase()))
    );
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
              <PartyPopper className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-3xl font-bold tracking-tight">Milestone Celebration Planning</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Create memorable celebrations for your relationship's special moments
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button onClick={() => setShowNewMilestoneDialog(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Milestone
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="ideas">Celebration Ideas</TabsTrigger>
            <TabsTrigger value="templates">Planning Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Celebrations</h2>
                  <Select value={activeTab === 'upcoming' ? 'upcoming' : 'past'} onValueChange={(value) => setActiveTab(value)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="View" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="past">Past Celebrations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {getUpcomingMilestones().length === 0 ? (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No upcoming celebrations</h3>
                    <p className="text-muted-foreground mb-4">
                      Add your special dates to start planning memorable celebrations
                    </p>
                    <Button onClick={() => setShowNewMilestoneDialog(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Milestone
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {getUpcomingMilestones().map(milestone => {
                      const typeInfo = getMilestoneTypeInfo(milestone.type);
                      const daysUntil = Math.ceil((milestone.date - new Date()) / (1000 * 60 * 60 * 24));
                      
                      return (
                        <Card key={milestone.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <Badge className={cn("mb-2", typeInfo.color)}>
                                  {React.cloneElement(typeInfo.icon, { className: "h-3 w-3 mr-1" })}
                                  {typeInfo.name}
                                </Badge>
                                <CardTitle>{milestone.title}</CardTitle>
                                <CardDescription className="flex items-center mt-1">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {format(milestone.date, 'MMMM d, yyyy')}
                                  <Badge variant="outline" className="ml-2">
                                    {daysUntil} days away
                                  </Badge>
                                </CardDescription>
                              </div>
                              <Button variant="ghost" size="icon" onClick={() => handleViewMilestone(milestone)}>
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">
                              {milestone.description}
                            </p>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Planning Progress</span>
                                <span className="font-medium">{milestone.planningProgress}%</span>
                              </div>
                              <Progress value={milestone.planningProgress} className="h-2" />
                            </div>
                            
                            {getIdeasForMilestone(milestone).length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-sm font-medium mb-2">Celebration Ideas</h4>
                                <div className="flex flex-wrap gap-2">
                                  {getIdeasForMilestone(milestone).map(idea => (
                                    <Badge key={idea.id} variant="secondary" className="cursor-pointer" onClick={() => handleViewIdea(idea)}>
                                      {idea.title}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="outline" className="w-full" onClick={() => handleViewMilestone(milestone)}>
                              Continue Planning
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Milestone Calendar</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <CalendarComponent
                        mode="single"
                        selected={new Date()}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Tips</CardTitle>
                    <CardDescription>
                      Make your celebrations more meaningful
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-fit">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Start Planning Early</h4>
                        <p className="text-sm text-muted-foreground">
                          Begin at least 4-6 weeks before important milestones to reduce stress and ensure availability.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-fit">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Focus on Meaning</h4>
                        <p className="text-sm text-muted-foreground">
                          The most memorable celebrations incorporate personal significance and shared memories.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="bg-primary/10 p-2 rounded-full h-fit">
                        <Camera className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Capture the Moment</h4>
                        <p className="text-sm text-muted-foreground">
                          Plan how you'll document the celebration with photos, videos, or mementos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Tips
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>Planning Resources</CardTitle>
                    <CardDescription>
                      Tools to help with your celebration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Celebration Checklist</span>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <Clipboard className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Budget Planner</span>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Guest List Template</span>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ideas" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Filter by Milestone</h3>
                  <div className="space-y-2">
                    <div 
                      className={cn(
                        "flex items-center p-2 rounded-md cursor-pointer",
                        !selectedMilestoneType ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                      )}
                      onClick={() => setSelectedMilestoneType(null)}
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>All Ideas</span>
                    </div>
                    
                    {milestoneTypes.map(type => (
                      <div 
                        key={type.id}
                        className={cn(
                          "flex items-center p-2 rounded-md cursor-pointer",
                          selectedMilestoneType === type.id ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                        )}
                        onClick={() => setSelectedMilestoneType(type.id)}
                      >
                        {React.cloneElement(type.icon, { className: "h-4 w-4 mr-2" })}
                        <span>{type.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold mb-2">Budget</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="budget-low" />
                        <Label htmlFor="budget-low">$ (Budget-Friendly)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="budget-medium" />
                        <Label htmlFor="budget-medium">$$ (Moderate)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="budget-high" />
                        <Label htmlFor="budget-high">$$$ (Premium)</Label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold mb-2">Effort Level</h3>
                    <RadioGroup defaultValue="all">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="effort-all" />
                        <Label htmlFor="effort-all">All Levels</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="effort-low" />
                        <Label htmlFor="effort-low">Low Effort</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="effort-medium" />
                        <Label htmlFor="effort-medium">Medium Effort</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="effort-high" />
                        <Label htmlFor="effort-high">High Effort</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">
                    {selectedMilestoneType 
                      ? `${getMilestoneTypeInfo(selectedMilestoneType).name} Celebration Ideas` 
                      : 'All Celebration Ideas'}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {filterIdeasByType(selectedMilestoneType).length} ideas found
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filterIdeasByType(selectedMilestoneType).map(idea => (
                    <Card key={idea.id} className="overflow-hidden">
                      <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center relative">
                        {idea.category === 'dining' && <Utensils className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'gift' && <Gift className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'travel' && <MapPin className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'event' && <Users className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'experience' && <Sparkles className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'activity' && <Zap className="h-16 w-16 text-primary/40" />}
                        {idea.category === 'wellness' && <Heart className="h-16 w-16 text-primary/40" />}
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{idea.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <span className="font-medium">{idea.budget}</span>
                          <span className="mx-2">•</span>
                          <span>{idea.effort} effort</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {idea.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {idea.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          Planning time: {idea.planningTime}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 pt-0">
                        <Button 
                          variant="outline" 
                          className="w-1/2"
                          onClick={() => handleViewIdea(idea)}
                        >
                          Details
                        </Button>
                        <Button 
                          className="w-1/2"
                          onClick={() => handleAddIdeaToMilestone(idea)}
                        >
                          Add to Plan
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="templates" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Planning Templates</h2>
              <p className="text-muted-foreground">
                Ready-to-use celebration plans to simplify your milestone planning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {planningTemplates.map(template => {
                const typeInfo = getMilestoneTypeInfo(template.milestoneType);
                
                return (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                      {React.cloneElement(typeInfo.icon, { className: "h-16 w-16 text-primary/40" })}
                    </div>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Badge className={typeInfo.color}>
                          {typeInfo.name}
                        </Badge>
                      </div>
                      <CardTitle>{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-medium mb-2">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.components.map(component => (
                          <Badge key={component} variant="outline">
                            {component.charAt(0).toUpperCase() + component.slice(1)}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => handleViewTemplate(template)}>
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            
            <div className="bg-muted rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold mb-2">Create Custom Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Design your own celebration template based on your unique preferences and relationship style.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center">
                      <Pencil className="h-3 w-3 mr-1" />
                      Fully Customizable
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Save className="h-3 w-3 mr-1" />
                      Save for Future Use
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <Share2 className="h-3 w-3 mr-1" />
                      Share with Partner
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Button className="w-full" size="lg">
                    Create Template
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      {/* Celebration Idea Detail Dialog */}
      <Dialog open={showIdeaDialog} onOpenChange={setShowIdeaDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedIdea?.title}</DialogTitle>
            <DialogDescription>
              Celebration idea details and planning guidance
            </DialogDescription>
          </DialogHeader>
          
          {selectedIdea && (
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/2">
                  <div className="h-60 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center rounded-md">
                    {selectedIdea.category === 'dining' && <Utensils className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'gift' && <Gift className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'travel' && <MapPin className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'event' && <Users className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'experience' && <Sparkles className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'activity' && <Zap className="h-24 w-24 text-primary/40" />}
                    {selectedIdea.category === 'wellness' && <Heart className="h-24 w-24 text-primary/40" />}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-muted-foreground mb-4">
                    {selectedIdea.description}
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget:</span>
                      <span className="font-semibold">{selectedIdea.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Effort Level:</span>
                      <span>{selectedIdea.effort} effort</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Planning Time:</span>
                      <span>{selectedIdea.planningTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedIdea.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <h3 className="font-semibold">Planning Guide</h3>
                
                <div className="space-y-4">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <ClipboardCheck className="h-4 w-4 text-primary mr-2" />
                      Planning Checklist
                    </h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <Checkbox id="step-1" />
                        <Label htmlFor="step-1" className="ml-2 text-sm">
                          Determine date and time
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="step-2" />
                        <Label htmlFor="step-2" className="ml-2 text-sm">
                          Research specific options and venues
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="step-3" />
                        <Label htmlFor="step-3" className="ml-2 text-sm">
                          Make necessary reservations or purchases
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="step-4" />
                        <Label htmlFor="step-4" className="ml-2 text-sm">
                          Plan additional details and personal touches
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="step-5" />
                        <Label htmlFor="step-5" className="ml-2 text-sm">
                          Prepare day-of logistics and timing
                        </Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <Lightbulb className="h-4 w-4 text-primary mr-2" />
                      Personalization Ideas
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Incorporate elements from your relationship history</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Include references to inside jokes or special memories</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Consider your partner's love language when planning details</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium flex items-center">
                      <AlertCircle className="h-4 w-4 text-primary mr-2" />
                      Tips for Success
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Have a backup plan in case of unexpected changes</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Consider how to capture memories during the celebration</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                        <span>Focus on the meaning behind the celebration, not just logistics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowIdeaDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              handleAddIdeaToMilestone(selectedIdea);
              setShowIdeaDialog(false);
            }}>
              Add to Milestone
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* New Milestone Dialog */}
      <Dialog open={showNewMilestoneDialog} onOpenChange={setShowNewMilestoneDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Milestone</DialogTitle>
            <DialogDescription>
              Add a special date to plan your celebration
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="milestone-title">Milestone Title</Label>
              <Input 
                id="milestone-title" 
                placeholder="e.g., 5th Anniversary, Birthday Celebration" 
                value={newMilestone.title}
                onChange={(e) => handleNewMilestoneChange('title', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Milestone Type</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {milestoneTypes.map(type => (
                  <div
                    key={type.id}
                    className={cn(
                      "flex items-center p-2 border rounded-md cursor-pointer",
                      newMilestone.type === type.id ? "border-primary bg-primary/5" : "border-input"
                    )}
                    onClick={() => handleNewMilestoneChange('type', type.id)}
                  >
                    {React.cloneElement(type.icon, { className: "h-4 w-4 mr-2" })}
                    <span>{type.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {newMilestone.date ? format(newMilestone.date, 'PPP') : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={newMilestone.date}
                    onSelect={(date) => handleNewMilestoneChange('date', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="milestone-description">Description</Label>
              <Textarea 
                id="milestone-description" 
                placeholder="Add details about this milestone..." 
                value={newMilestone.description}
                onChange={(e) => handleNewMilestoneChange('description', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Celebration Ideas</Label>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Plus className="h-4 w-4 mr-1" />
                  Browse Ideas
                </Button>
              </div>
              <div className="p-4 border border-dashed rounded-md text-center text-muted-foreground text-sm">
                No celebration ideas added yet
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewMilestoneDialog(false)}>Cancel</Button>
            <Button onClick={handleCreateMilestone}>Create Milestone</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Template Detail Dialog */}
      <Dialog open={showTemplateDialog} onOpenChange={setShowTemplateDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedTemplate?.title}</DialogTitle>
            <DialogDescription>
              Ready-to-use celebration planning template
            </DialogDescription>
          </DialogHeader>
          
          {selectedTemplate && (
            <div className="py-4">
              <div className="mb-6">
                <Badge className={getMilestoneTypeInfo(selectedTemplate.milestoneType).color}>
                  {getMilestoneTypeInfo(selectedTemplate.milestoneType).name}
                </Badge>
                <p className="text-muted-foreground mt-3">
                  {selectedTemplate.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="font-semibold">Template Components</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTemplate.components.includes('timeline') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <CalendarDays className="h-4 w-4 text-primary mr-2" />
                        Planning Timeline
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Week-by-week planning schedule with key milestones and deadlines.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('budget') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Clipboard className="h-4 w-4 text-primary mr-2" />
                        Budget Planner
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Detailed budget breakdown with expense categories and tracking.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('guestList') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        Guest Management
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Guest list organization with contact information and RSVP tracking.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('activities') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2" />
                        Activity Planner
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Curated activity suggestions with timing and logistics details.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('gifts') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Gift className="h-4 w-4 text-primary mr-2" />
                        Gift Planning
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Gift ideas, purchasing timeline, and presentation planning.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('surprise') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Sparkles className="h-4 w-4 text-primary mr-2" />
                        Surprise Elements
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Guidance for planning and executing surprise components.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('venue') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        Venue Selection
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Venue research, comparison, and booking guidance.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('catering') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Utensils className="h-4 w-4 text-primary mr-2" />
                        Food & Beverage
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Menu planning, catering options, and special considerations.
                      </p>
                    </div>
                  )}
                  
                  {selectedTemplate.components.includes('dining') && (
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="font-medium flex items-center">
                        <Utensils className="h-4 w-4 text-primary mr-2" />
                        Dining Experience
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Restaurant selection, reservation guidance, and special requests.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-md mb-4">
                <h3 className="font-semibold flex items-center mb-2">
                  <Info className="h-4 w-4 mr-2" />
                  How to Use This Template
                </h3>
                <ol className="space-y-1 text-sm text-muted-foreground list-decimal pl-5">
                  <li>Apply this template to a specific milestone in your calendar</li>
                  <li>Customize the components to fit your specific celebration</li>
                  <li>Follow the step-by-step planning guide for each component</li>
                  <li>Track your progress and adjust as needed</li>
                  <li>Execute your celebration plan with confidence</li>
                </ol>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTemplateDialog(false)}>Cancel</Button>
            <Button onClick={handleUseTemplate}>
              Use Template
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Milestone Detail Dialog */}
      <Dialog open={showMilestoneDialog} onOpenChange={setShowMilestoneDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedMilestone?.title}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {selectedMilestone && format(selectedMilestone.date, 'MMMM d, yyyy')}
              </div>
            </DialogDescription>
          </DialogHeader>
          
          {selectedMilestone && (
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    <Badge className={getMilestoneTypeInfo(selectedMilestone.type).color}>
                      {getMilestoneTypeInfo(selectedMilestone.type).name}
                    </Badge>
                    
                    <Badge variant="outline" className="ml-2">
                      {Math.ceil((selectedMilestone.date - new Date()) / (1000 * 60 * 60 * 24))} days away
                    </Badge>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="milestone-description">Description</Label>
                      <Textarea 
                        id="milestone-description" 
                        value={selectedMilestone.description}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Planning Progress</span>
                        <span className="font-medium">{selectedMilestone.planningProgress}%</span>
                      </div>
                      <Progress value={selectedMilestone.planningProgress} className="h-2" />
                    </div>
                  </div>
                  
                  <Tabs defaultValue="ideas">
                    <TabsList>
                      <TabsTrigger value="ideas">Celebration Ideas</TabsTrigger>
                      <TabsTrigger value="checklist">Planning Checklist</TabsTrigger>
                      <TabsTrigger value="notes">Notes</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="ideas" className="space-y-4 mt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Selected Ideas</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Idea
                        </Button>
                      </div>
                      
                      {getIdeasForMilestone(selectedMilestone).length === 0 ? (
                        <div className="p-4 border border-dashed rounded-md text-center text-muted-foreground text-sm">
                          No celebration ideas added yet
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {getIdeasForMilestone(selectedMilestone).map(idea => (
                            <div key={idea.id} className="flex items-center justify-between p-3 bg-muted rounded-md">
                              <div className="flex items-center">
                                {idea.category === 'dining' && <Utensils className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'gift' && <Gift className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'travel' && <MapPin className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'event' && <Users className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'experience' && <Sparkles className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'activity' && <Zap className="h-5 w-5 text-primary mr-3" />}
                                {idea.category === 'wellness' && <Heart className="h-5 w-5 text-primary mr-3" />}
                                <div>
                                  <h4 className="font-medium">{idea.title}</h4>
                                  <p className="text-xs text-muted-foreground">
                                    {idea.budget} • {idea.effort} effort • {idea.planningTime}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleViewIdea(idea)}>
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="checklist" className="space-y-4 mt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Planning Checklist</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Item
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center p-2 hover:bg-muted rounded-md">
                          <Checkbox id="task-1" />
                          <Label htmlFor="task-1" className="ml-2">
                            Finalize date and time
                          </Label>
                        </div>
                        <div className="flex items-center p-2 hover:bg-muted rounded-md">
                          <Checkbox id="task-2" />
                          <Label htmlFor="task-2" className="ml-2">
                            Research venue options
                          </Label>
                        </div>
                        <div className="flex items-center p-2 hover:bg-muted rounded-md">
                          <Checkbox id="task-3" />
                          <Label htmlFor="task-3" className="ml-2">
                            Create budget plan
                          </Label>
                        </div>
                        <div className="flex items-center p-2 hover:bg-muted rounded-md">
                          <Checkbox id="task-4" />
                          <Label htmlFor="task-4" className="ml-2">
                            Purchase gift
                          </Label>
                        </div>
                        <div className="flex items-center p-2 hover:bg-muted rounded-md">
                          <Checkbox id="task-5" />
                          <Label htmlFor="task-5" className="ml-2">
                            Arrange transportation
                          </Label>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notes" className="space-y-4 mt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Planning Notes</h3>
                        <Button variant="outline" size="sm">
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                      </div>
                      
                      <Textarea 
                        placeholder="Add your planning notes here..." 
                        className="min-h-[200px]"
                      />
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="md:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Planning Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Today</span>
                        <Badge variant="outline">
                          {Math.ceil((selectedMilestone.date - new Date()) / (1000 * 60 * 60 * 24))} days remaining
                        </Badge>
                      </div>
                      
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            Planning Start
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Celebration Day
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-muted">
                          <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 pt-2">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-1 rounded-full h-fit mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">4 weeks before</p>
                            <p className="text-xs text-muted-foreground">Initial planning</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-1 rounded-full h-fit mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">3 weeks before</p>
                            <p className="text-xs text-muted-foreground">Reservations & bookings</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-muted p-1 rounded-full h-fit mt-0.5">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">2 weeks before</p>
                            <p className="text-xs text-muted-foreground">Finalize details</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-muted p-1 rounded-full h-fit mt-0.5">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">1 week before</p>
                            <p className="text-xs text-muted-foreground">Confirm arrangements</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-muted p-1 rounded-full h-fit mt-0.5">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="ml-2">
                            <p className="text-xs font-medium">Celebration day</p>
                            <p className="text-xs text-muted-foreground">Enjoy your special moment</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-base">Reminders</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">2 weeks before</span>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">1 week before</span>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Day before</span>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Reminder
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-base">Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share with Partner
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export Plan
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicate
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMilestoneDialog(false)}>Cancel</Button>
            <Button onClick={handleSaveMilestone}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MilestoneCelebrationPlanning;

