import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LifeBuoy, 
  MessageCircle, 
  FileQuestion, 
  Phone, 
  Mail, 
  Video, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  User, 
  Users, 
  Headphones, 
  BookOpen, 
  MessageSquare, 
  Send, 
  Paperclip, 
  X, 
  Plus, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Ticket, 
  ClipboardList,
  FileText,
  Bookmark,
  Star,
  Filter,
  SlidersHorizontal,
  History,
  RefreshCw,
  Zap,
  Award,
  Heart
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Progress } from '../../components/ui/progress';

// Mock data for FAQ categories
const faqCategories = [
  { id: 'account', name: 'Account & Profile', icon: <User className="h-5 w-5" /> },
  { id: 'subscription', name: 'Subscription & Billing', icon: <Ticket className="h-5 w-5" /> },
  { id: 'features', name: 'Features & Functionality', icon: <Zap className="h-5 w-5" /> },
  { id: 'technical', name: 'Technical Issues', icon: <AlertCircle className="h-5 w-5" /> },
  { id: 'privacy', name: 'Privacy & Security', icon: <FileText className="h-5 w-5" /> },
  { id: 'couples', name: 'Couples & Relationships', icon: <Heart className="h-5 w-5" /> }
];

// Mock data for FAQs
const faqs = [
  {
    id: 'faq-1',
    category: 'account',
    question: 'How do I update my relationship status?',
    answer: 'To update your relationship status, go to your Profile Settings and select the "Relationship" tab. From there, you can update your status, partner information, and relationship preferences. Changes will be reflected immediately across the platform.',
    helpful: 124,
    notHelpful: 12
  },
  {
    id: 'faq-2',
    category: 'account',
    question: 'Can I change my email address?',
    answer: 'Yes, you can change your email address in your Account Settings. Go to the "Personal Information" section and select "Edit" next to your email address. You\'ll need to verify the new email address before the change takes effect.',
    helpful: 98,
    notHelpful: 5
  },
  {
    id: 'faq-3',
    category: 'subscription',
    question: 'How do I upgrade to a premium subscription?',
    answer: 'To upgrade to a premium subscription, go to the "Subscription" section in your account settings. You\'ll see different subscription tiers available. Select the one that best fits your needs and follow the payment instructions. Your account will be upgraded immediately after successful payment.',
    helpful: 156,
    notHelpful: 8
  },
  {
    id: 'faq-4',
    category: 'subscription',
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Yes, we offer a 14-day money-back guarantee for all new premium subscriptions. If you\'re not satisfied with your premium experience within the first 14 days, contact our support team and we\'ll process your refund. After 14 days, refunds are considered on a case-by-case basis.',
    helpful: 203,
    notHelpful: 15
  },
  {
    id: 'faq-5',
    category: 'features',
    question: 'How does the Relationship Assessment work?',
    answer: 'The Relationship Assessment is a comprehensive questionnaire based on psychological research. Both partners complete the assessment independently, and our algorithm analyzes the responses to identify relationship strengths, growth areas, and compatibility factors. The results are used to personalize your experience and provide targeted recommendations.',
    helpful: 187,
    notHelpful: 9
  },
  {
    id: 'faq-6',
    category: 'features',
    question: 'Can I access my data across multiple devices?',
    answer: 'Yes, Flourish is fully synchronized across all your devices. Simply log in with the same account on any device, and all your relationship data, progress, and preferences will be available. Changes made on one device will automatically sync to all others.',
    helpful: 112,
    notHelpful: 3
  },
  {
    id: 'faq-7',
    category: 'technical',
    question: 'The app is running slowly. What can I do?',
    answer: 'If the app is running slowly, try these troubleshooting steps: 1) Close and restart the app, 2) Check your internet connection, 3) Clear the app cache in your device settings, 4) Ensure your device has sufficient storage space, 5) Update to the latest version of the app. If problems persist, please contact our technical support team.',
    helpful: 143,
    notHelpful: 21
  },
  {
    id: 'faq-8',
    category: 'technical',
    question: 'How do I recover my password?',
    answer: 'To recover your password, tap "Forgot Password" on the login screen. Enter the email address associated with your account, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, the link expires after 24 hours.',
    helpful: 176,
    notHelpful: 7
  },
  {
    id: 'faq-9',
    category: 'privacy',
    question: 'Who can see my relationship data?',
    answer: 'Your relationship data is private and can only be seen by you and your partner (if you\'ve connected accounts). Our staff cannot access your personal responses or relationship details. We use anonymized, aggregated data for research and improvement purposes, but this never includes personally identifiable information.',
    helpful: 209,
    notHelpful: 4
  },
  {
    id: 'faq-10',
    category: 'privacy',
    question: 'How is my payment information protected?',
    answer: 'We never store your full credit card details on our servers. All payment processing is handled by secure, PCI-compliant payment processors. Your payment information is encrypted using industry-standard protocols, and we implement multiple security measures to protect your financial data.',
    helpful: 167,
    notHelpful: 2
  },
  {
    id: 'faq-11',
    category: 'couples',
    question: 'How do I connect with my partner on the app?',
    answer: 'To connect with your partner, go to your Profile and select "Connect with Partner." Enter your partner\'s email address or share your unique connection code with them. Once they accept the invitation, your accounts will be linked, allowing you to access shared features and relationship insights.',
    helpful: 198,
    notHelpful: 6
  },
  {
    id: 'faq-12',
    category: 'couples',
    question: 'What happens if we break up?',
    answer: 'If your relationship status changes, you can disconnect your accounts in the Relationship Settings. Both users will maintain access to their individual accounts and personal data, but shared features will no longer be available. You can choose to archive or delete shared content and relationship history.',
    helpful: 132,
    notHelpful: 18
  }
];

// Mock data for support articles
const supportArticles = [
  {
    id: 'article-1',
    title: 'Getting Started with Flourish',
    description: 'A comprehensive guide to setting up your account and beginning your relationship journey.',
    category: 'Getting Started',
    readTime: '5 min read',
    lastUpdated: '2 weeks ago',
    featured: true
  },
  {
    id: 'article-2',
    title: 'Understanding Your Relationship Assessment Results',
    description: 'Learn how to interpret your assessment results and use them to strengthen your relationship.',
    category: 'Assessments',
    readTime: '8 min read',
    lastUpdated: '1 month ago',
    featured: true
  },
  {
    id: 'article-3',
    title: 'Premium Features Explained',
    description: 'Discover all the benefits and features available with a premium subscription.',
    category: 'Subscription',
    readTime: '6 min read',
    lastUpdated: '3 weeks ago',
    featured: false
  },
  {
    id: 'article-4',
    title: 'Troubleshooting Connection Issues',
    description: 'Solutions for common problems when connecting with your partner on the app.',
    category: 'Technical',
    readTime: '4 min read',
    lastUpdated: '1 week ago',
    featured: false
  },
  {
    id: 'article-5',
    title: 'Privacy and Data Security',
    description: 'How we protect your personal information and relationship data.',
    category: 'Privacy',
    readTime: '7 min read',
    lastUpdated: '2 months ago',
    featured: false
  },
  {
    id: 'article-6',
    title: 'Using Relationship Games Effectively',
    description: 'Tips and strategies for getting the most out of our relationship games and activities.',
    category: 'Features',
    readTime: '9 min read',
    lastUpdated: '3 weeks ago',
    featured: true
  },
  {
    id: 'article-7',
    title: 'Managing Subscription and Billing',
    description: 'Everything you need to know about managing your subscription, payments, and billing information.',
    category: 'Subscription',
    readTime: '5 min read',
    lastUpdated: '1 month ago',
    featured: false
  },
  {
    id: 'article-8',
    title: 'Relationship Milestone Tracking',
    description: 'How to use our milestone tracking features to celebrate your relationship journey.',
    category: 'Features',
    readTime: '6 min read',
    lastUpdated: '2 weeks ago',
    featured: false
  }
];

// Mock data for support tickets
const supportTickets = [
  {
    id: 'ticket-1',
    subject: 'Cannot connect with partner',
    description: 'I\'ve sent multiple invitations to my partner but they haven\'t received any emails.',
    status: 'open',
    priority: 'medium',
    category: 'technical',
    created: '2025-06-28T14:32:00',
    lastUpdated: '2025-06-28T16:45:00',
    messages: [
      {
        id: 'msg-1-1',
        sender: 'user',
        text: 'I\'ve sent multiple invitations to my partner but they haven\'t received any emails. We\'ve checked spam folders too.',
        timestamp: '2025-06-28T14:32:00'
      },
      {
        id: 'msg-1-2',
        sender: 'agent',
        agentName: 'Sarah',
        text: 'Hi there, I\'m sorry to hear you\'re having trouble connecting with your partner. Let\'s troubleshoot this together. Could you please confirm the email address you\'re sending the invitation to?',
        timestamp: '2025-06-28T16:45:00'
      }
    ]
  },
  {
    id: 'ticket-2',
    subject: 'Billing question about premium subscription',
    description: 'I was charged twice for my premium subscription this month.',
    status: 'closed',
    priority: 'high',
    category: 'subscription',
    created: '2025-06-20T09:15:00',
    lastUpdated: '2025-06-21T11:30:00',
    messages: [
      {
        id: 'msg-2-1',
        sender: 'user',
        text: 'I noticed I was charged twice for my premium subscription this month. Could you please look into this and process a refund for the duplicate charge?',
        timestamp: '2025-06-20T09:15:00'
      },
      {
        id: 'msg-2-2',
        sender: 'agent',
        agentName: 'Michael',
        text: 'I apologize for the inconvenience. I've checked your billing history and confirmed the duplicate charge. I've processed a refund for the second charge, which should appear in your account within 3-5 business days.',
        timestamp: '2025-06-20T10:22:00'
      },
      {
        id: 'msg-2-3',
        sender: 'user',
        text: 'Thank you for the quick resolution! I appreciate your help.',
        timestamp: '2025-06-20T14:05:00'
      },
      {
        id: 'msg-2-4',
        sender: 'agent',
        agentName: 'Michael',
        text: 'You're welcome! I'm glad we could resolve this quickly. The refund has been processed successfully. Is there anything else I can help you with?',
        timestamp: '2025-06-21T11:30:00'
      }
    ]
  }
];

// Mock data for contact options
const contactOptions = [
  {
    id: 'chat',
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: <MessageCircle className="h-6 w-6" />,
    availability: 'Available 24/7',
    waitTime: 'Typical response: < 5 minutes',
    premium: false
  },
  {
    id: 'email',
    title: 'Email Support',
    description: 'Send us a detailed message',
    icon: <Mail className="h-6 w-6" />,
    availability: 'Available 24/7',
    waitTime: 'Typical response: < 24 hours',
    premium: false
  },
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Speak directly with a support agent',
    icon: <Phone className="h-6 w-6" />,
    availability: 'Mon-Fri, 9am-8pm EST',
    waitTime: 'Typical wait: 5-10 minutes',
    premium: true
  },
  {
    id: 'video',
    title: 'Video Consultation',
    description: 'Schedule a video call with a relationship specialist',
    icon: <Video className="h-6 w-6" />,
    availability: 'By appointment',
    waitTime: 'Book 24+ hours in advance',
    premium: true
  }
];

const CustomerSupportSystem = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('help-center');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(null);
  const [showNewTicketDialog, setShowNewTicketDialog] = useState(false);
  const [showTicketDetailDialog, setShowTicketDetailDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [selectedContactOption, setSelectedContactOption] = useState(null);
  const [showChatWidget, setShowChatWidget] = useState(false);
  
  // New ticket form state
  const [newTicket, setNewTicket] = useState({
    subject: '',
    description: '',
    category: '',
    priority: 'medium',
    attachments: []
  });
  
  // Chat widget state
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'system-1',
      sender: 'system',
      text: 'Welcome to Flourish Support! How can we help you today?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  
  const handleNewTicketChange = (field, value) => {
    setNewTicket(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleCreateTicket = () => {
    toast({
      title: "Support Ticket Created",
      description: "We've received your request and will respond shortly.",
    });
    
    setShowNewTicketDialog(false);
    setNewTicket({
      subject: '',
      description: '',
      category: '',
      priority: 'medium',
      attachments: []
    });
  };
  
  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowTicketDetailDialog(true);
  };
  
  const handleSelectContactOption = (option) => {
    setSelectedContactOption(option);
    setShowContactDialog(true);
  };
  
  const handleStartChat = () => {
    setShowChatWidget(true);
    setShowContactDialog(false);
  };
  
  const handleSendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: chatInput,
      timestamp: new Date().toISOString()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simulate agent response after a delay
    setTimeout(() => {
      const agentMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        agentName: 'Alex',
        text: 'Thank you for your message. A support agent will be with you shortly. In the meantime, you might find helpful information in our FAQ section.',
        timestamp: new Date().toISOString()
      };
      
      setChatMessages(prev => [...prev, agentMessage]);
    }, 1500);
  };
  
  const filterFaqsByCategory = (category) => {
    if (!category) return faqs;
    return faqs.filter(faq => faq.category === category);
  };
  
  const filterFaqsBySearch = (query) => {
    if (!query.trim()) return filterFaqsByCategory(selectedFaqCategory);
    
    const lowerQuery = query.toLowerCase();
    return filterFaqsByCategory(selectedFaqCategory).filter(faq => 
      faq.question.toLowerCase().includes(lowerQuery) || 
      faq.answer.toLowerCase().includes(lowerQuery)
    );
  };
  
  const filterArticlesBySearch = (query) => {
    if (!query.trim()) return supportArticles;
    
    const lowerQuery = query.toLowerCase();
    return supportArticles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) || 
      article.description.toLowerCase().includes(lowerQuery) ||
      article.category.toLowerCase().includes(lowerQuery)
    );
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
              <LifeBuoy className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-3xl font-bold tracking-tight">Customer Support</h1>
            </div>
            <p className="text-muted-foreground mt-1">
              Get help with your account, subscription, or relationship journey
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" onClick={() => setShowNewTicketDialog(true)}>
              <Ticket className="h-4 w-4 mr-2" />
              Submit Ticket
            </Button>
            <Button>
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for help, articles, or FAQs..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="help-center" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="help-center">Help Center</TabsTrigger>
            <TabsTrigger value="my-tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          
          <TabsContent value="help-center" className="mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">FAQ Categories</h3>
                  <div className="space-y-2">
                    <div 
                      className={cn(
                        "flex items-center p-2 rounded-md cursor-pointer",
                        !selectedFaqCategory ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                      )}
                      onClick={() => setSelectedFaqCategory(null)}
                    >
                      <FileQuestion className="h-4 w-4 mr-2" />
                      <span>All Categories</span>
                    </div>
                    
                    {faqCategories.map(category => (
                      <div 
                        key={category.id}
                        className={cn(
                          "flex items-center p-2 rounded-md cursor-pointer",
                          selectedFaqCategory === category.id ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10"
                        )}
                        onClick={() => setSelectedFaqCategory(category.id)}
                      >
                        {React.cloneElement(category.icon, { className: "h-4 w-4 mr-2" })}
                        <span>{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-base">Popular Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportArticles
                      .filter(article => article.featured)
                      .slice(0, 3)
                      .map(article => (
                        <div key={article.id} className="group">
                          <h4 className="text-sm font-medium group-hover:text-primary cursor-pointer">
                            {article.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {article.readTime}
                          </p>
                        </div>
                      ))}
                    
                    <Button variant="ghost" size="sm" className="w-full mt-2">
                      View All Articles
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-base">Need More Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <Button className="w-full" onClick={() => setActiveTab('contact')}>
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:w-3/4">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {selectedFaqCategory 
                      ? `${faqCategories.find(c => c.id === selectedFaqCategory)?.name} FAQs` 
                      : 'Frequently Asked Questions'}
                  </h2>
                  <p className="text-muted-foreground">
                    Find answers to common questions about using Flourish
                  </p>
                </div>
                
                <Accordion type="single" collapsible className="mb-8">
                  {filterFaqsBySearch(searchQuery).length > 0 ? (
                    filterFaqsBySearch(searchQuery).map(faq => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-4">
                            {faq.answer}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  <span className="text-xs">{faq.helpful}</span>
                                </Button>
                              </div>
                              <div className="flex items-center">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <ThumbsDown className="h-4 w-4 mr-1" />
                                  <span className="text-xs">{faq.notHelpful}</span>
                                </Button>
                              </div>
                            </div>
                            <Badge variant="outline">
                              {faqCategories.find(c => c.id === faq.category)?.name}
                            </Badge>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <FileQuestion className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-1">No FAQs found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or category filter
                      </p>
                      <Button variant="outline" onClick={() => {
                        setSearchQuery('');
                        setSelectedFaqCategory(null);
                      }}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </Accordion>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Support Articles</h2>
                  <p className="text-muted-foreground">
                    Detailed guides and tutorials to help you get the most out of Flourish
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filterArticlesBySearch(searchQuery).map(article => (
                    <Card key={article.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline">{article.category}</Badge>
                          {article.featured && (
                            <Badge className="bg-primary/10 text-primary">Featured</Badge>
                          )}
                        </div>
                        <CardTitle className="text-base mt-2">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{article.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>Updated {article.lastUpdated}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full" size="sm">
                          Read Article
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="my-tickets" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">My Support Tickets</h2>
                <p className="text-muted-foreground">
                  Track and manage your support requests
                </p>
              </div>
              <Button onClick={() => setShowNewTicketDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                New Ticket
              </Button>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <Tabs defaultValue="all" className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Tickets</TabsTrigger>
                  <TabsTrigger value="open">Open</TabsTrigger>
                  <TabsTrigger value="closed">Closed</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center">
                <Button variant="outline" size="sm" className="mr-2">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-1" />
                  Sort
                </Button>
              </div>
            </div>
            
            {supportTickets.length === 0 ? (
              <div className="text-center py-12 bg-muted rounded-lg">
                <Ticket className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">No support tickets</h3>
                <p className="text-muted-foreground mb-4">
                  You haven't submitted any support tickets yet
                </p>
                <Button onClick={() => setShowNewTicketDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Ticket
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {supportTickets.map(ticket => (
                  <Card key={ticket.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-1">
                            <Badge className={cn(
                              ticket.status === 'open' ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                            )}>
                              {ticket.status === 'open' ? 'Open' : 'Closed'}
                            </Badge>
                            <Badge variant="outline" className="ml-2">
                              {ticket.priority === 'high' ? 'High Priority' : ticket.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                            </Badge>
                          </div>
                          <CardTitle className="text-base">{ticket.subject}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <ClipboardList className="h-3 w-3 mr-1" />
                            Ticket #{ticket.id}
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(ticket.created)}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleViewTicket(ticket)}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {ticket.description}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Badge variant="outline" className="mr-2">
                          {faqCategories.find(c => c.id === ticket.category)?.name}
                        </Badge>
                        <span>Last updated: {formatDate(ticket.lastUpdated)}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full" onClick={() => handleViewTicket(ticket)}>
                        View Ticket
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="contact" className="mt-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
              <p className="text-muted-foreground">
                Choose how you'd like to get in touch with our support team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactOptions.map(option => (
                <Card key={option.id} className={cn(
                  "overflow-hidden cursor-pointer transition-all hover:border-primary",
                  option.premium && "border-amber-200 bg-amber-50/50 dark:bg-amber-950/10"
                )}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="bg-primary/10 p-2 rounded-full">
                        {React.cloneElement(option.icon, { className: "h-6 w-6 text-primary" })}
                      </div>
                      {option.premium && (
                        <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                          <Award className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="mt-2">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{option.availability}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{option.waitTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={option.premium ? "outline" : "default"}
                      onClick={() => handleSelectContactOption(option)}
                    >
                      {option.id === 'chat' ? 'Start Chat' : option.id === 'email' ? 'Send Email' : option.id === 'phone' ? 'Call Support' : 'Schedule Call'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold mb-2">Self-Service Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Find answers quickly with our comprehensive help resources
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Knowledge Base</h4>
                        <p className="text-sm text-muted-foreground">
                          Browse our extensive collection of articles and guides
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Community Forum</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with other users and share experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Video Tutorials</h4>
                        <p className="text-sm text-muted-foreground">
                          Watch step-by-step guides for common tasks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <FileQuestion className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">FAQs</h4>
                        <p className="text-sm text-muted-foreground">
                          Find answers to frequently asked questions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Support Hours</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Live Chat:</span>
                        <span className="font-medium">24/7</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Email Support:</span>
                        <span className="font-medium">24/7</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Phone Support:</span>
                        <span className="font-medium">Mon-Fri, 9am-8pm EST</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Video Consultation:</span>
                        <span className="font-medium">By appointment</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
      
      {/* New Ticket Dialog */}
      <Dialog open={showNewTicketDialog} onOpenChange={setShowNewTicketDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Submit Support Ticket</DialogTitle>
            <DialogDescription>
              Provide details about your issue so we can help you more effectively
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ticket-subject">Subject</Label>
              <Input 
                id="ticket-subject" 
                placeholder="Brief description of your issue" 
                value={newTicket.subject}
                onChange={(e) => handleNewTicketChange('subject', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ticket-category">Category</Label>
              <Select 
                value={newTicket.category} 
                onValueChange={(value) => handleNewTicketChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {faqCategories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ticket-priority">Priority</Label>
              <Select 
                value={newTicket.priority} 
                onValueChange={(value) => handleNewTicketChange('priority', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - General question or feedback</SelectItem>
                  <SelectItem value="medium">Medium - Issue affecting functionality</SelectItem>
                  <SelectItem value="high">High - Critical issue preventing use</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ticket-description">Description</Label>
              <Textarea 
                id="ticket-description" 
                placeholder="Please provide as much detail as possible about your issue" 
                className="min-h-[150px]"
                value={newTicket.description}
                onChange={(e) => handleNewTicketChange('description', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Attachments</Label>
              <div className="border border-dashed rounded-md p-4 text-center">
                <Paperclip className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop files here, or click to browse
                </p>
                <Button variant="outline" size="sm">
                  Add Files
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Max file size: 10MB. Supported formats: JPG, PNG, PDF, DOC, DOCX
                </p>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewTicketDialog(false)}>Cancel</Button>
            <Button onClick={handleCreateTicket}>Submit Ticket</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Ticket Detail Dialog */}
      <Dialog open={showTicketDetailDialog} onOpenChange={setShowTicketDetailDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <div className="flex items-center mb-1">
              <Badge className={cn(
                selectedTicket?.status === 'open' ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
              )}>
                {selectedTicket?.status === 'open' ? 'Open' : 'Closed'}
              </Badge>
              <Badge variant="outline" className="ml-2">
                {selectedTicket?.priority === 'high' ? 'High Priority' : selectedTicket?.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
              </Badge>
            </div>
            <DialogTitle>{selectedTicket?.subject}</DialogTitle>
            <DialogDescription className="flex items-center">
              <ClipboardList className="h-3 w-3 mr-1" />
              Ticket #{selectedTicket?.id}
              <span className="mx-2">•</span>
              <Calendar className="h-3 w-3 mr-1" />
              {selectedTicket && formatDate(selectedTicket.created)}
            </DialogDescription>
          </DialogHeader>
          
          {selectedTicket && (
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <div className="space-y-4 mb-6">
                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-medium mb-2">Description</h3>
                      <p className="text-muted-foreground">
                        {selectedTicket.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Conversation</h3>
                      <div className="space-y-4">
                        {selectedTicket.messages.map(message => (
                          <div 
                            key={message.id} 
                            className={cn(
                              "flex",
                              message.sender === 'user' ? "justify-end" : "justify-start"
                            )}
                          >
                            <div 
                              className={cn(
                                "max-w-[80%] rounded-lg p-4",
                                message.sender === 'user' 
                                  ? "bg-primary text-primary-foreground" 
                                  : "bg-muted"
                              )}
                            >
                              {message.sender === 'agent' && (
                                <div className="flex items-center mb-2">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarFallback>{message.agentName.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm font-medium">{message.agentName} (Support Agent)</span>
                                </div>
                              )}
                              <p className={cn(
                                message.sender === 'user' ? "text-primary-foreground" : "text-foreground"
                              )}>
                                {message.text}
                              </p>
                              <p className={cn(
                                "text-xs mt-1",
                                message.sender === 'user' ? "text-primary-foreground/70" : "text-muted-foreground"
                              )}>
                                {formatDate(message.timestamp)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {selectedTicket.status === 'open' && (
                      <div className="mt-4">
                        <Textarea 
                          placeholder="Type your reply here..." 
                          className="min-h-[100px] mb-2"
                        />
                        <div className="flex justify-between">
                          <Button variant="outline" size="sm">
                            <Paperclip className="h-4 w-4 mr-1" />
                            Attach Files
                          </Button>
                          <Button>
                            <Send className="h-4 w-4 mr-1" />
                            Send Reply
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Ticket Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge className={cn(
                            selectedTicket.status === 'open' ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          )}>
                            {selectedTicket.status === 'open' ? 'Open' : 'Closed'}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Priority:</span>
                          <Badge variant="outline">
                            {selectedTicket.priority === 'high' ? 'High' : selectedTicket.priority === 'medium' ? 'Medium' : 'Low'}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Category:</span>
                          <span>{faqCategories.find(c => c.id === selectedTicket.category)?.name}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Created:</span>
                          <span>{formatDate(selectedTicket.created)}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span>{formatDate(selectedTicket.lastUpdated)}</span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Related Articles</h4>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm hover:text-primary cursor-pointer">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>How to update account information</span>
                          </div>
                          <div className="flex items-center text-sm hover:text-primary cursor-pointer">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Troubleshooting connection issues</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                      {selectedTicket.status === 'open' ? (
                        <Button variant="outline" className="w-full justify-start text-destructive">
                          <X className="h-4 w-4 mr-2" />
                          Close Ticket
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full justify-start">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Reopen Ticket
                        </Button>
                      )}
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Save for Reference
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-base">Need More Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        If you need immediate assistance, try one of these options:
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Start Live Chat
                        </Button>
                        <Button variant="outline" className="w-full justify-start" size="sm">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Support
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTicketDetailDialog(false)}>Close</Button>
            {selectedTicket?.status === 'open' && (
              <Button>
                <Send className="h-4 w-4 mr-1" />
                Send Reply
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Contact Option Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedContactOption?.title}</DialogTitle>
            <DialogDescription>
              {selectedContactOption?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedContactOption && (
            <div className="py-4">
              {selectedContactOption.id === 'chat' && (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium mb-2">Before you start chatting</h3>
                    <p className="text-sm text-muted-foreground">
                      To help us assist you more efficiently, please provide some information about your issue.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="chat-topic">What can we help you with?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {faqCategories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="chat-description">Brief description of your issue</Label>
                    <Textarea 
                      id="chat-description" 
                      placeholder="Please describe your issue in a few sentences" 
                    />
                  </div>
                </div>
              )}
              
              {selectedContactOption.id === 'email' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-subject">Subject</Label>
                    <Input 
                      id="email-subject" 
                      placeholder="Brief description of your issue" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {faqCategories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email-message">Message</Label>
                    <Textarea 
                      id="email-message" 
                      placeholder="Please provide as much detail as possible about your issue" 
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Attachments</Label>
                    <div className="border border-dashed rounded-md p-4 text-center">
                      <Paperclip className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop files here, or click to browse
                      </p>
                      <Button variant="outline" size="sm">
                        Add Files
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedContactOption.id === 'phone' && (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Support Phone Number</h3>
                    </div>
                    <p className="text-lg font-bold mb-1">1-800-FLOURISH</p>
                    <p className="text-sm text-muted-foreground">
                      Available Monday-Friday, 9am-8pm EST
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Before you call</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      To help us assist you more efficiently, please have the following information ready:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">
                      <li>Your account email address</li>
                      <li>Your subscription type</li>
                      <li>Brief description of your issue</li>
                      <li>Any error messages you've encountered</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Request a callback</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Don't want to wait on hold? We can call you back when an agent is available.
                    </p>
                    <div className="flex gap-2">
                      <Input placeholder="Your phone number" />
                      <Button>Request Callback</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedContactOption.id === 'video' && (
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium mb-2">Video Consultation Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Video consultations are 30-minute sessions with a relationship specialist who can provide personalized guidance for your relationship journey.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Select Consultation Type</Label>
                    <RadioGroup defaultValue="relationship">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="relationship" id="consultation-relationship" />
                        <Label htmlFor="consultation-relationship">Relationship Guidance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="technical" id="consultation-technical" />
                        <Label htmlFor="consultation-technical">Technical Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="account" id="consultation-account" />
                        <Label htmlFor="consultation-account">Account Management</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Date and Time</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Select your preferred date and time for the consultation.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Select Date
                      </Button>
                      <Button variant="outline">
                        <Clock className="h-4 w-4 mr-2" />
                        Select Time
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="consultation-notes">Additional Notes</Label>
                    <Textarea 
                      id="consultation-notes" 
                      placeholder="Please provide any specific topics or questions you'd like to discuss" 
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowContactDialog(false)}>Cancel</Button>
            {selectedContactOption?.id === 'chat' && (
              <Button onClick={handleStartChat}>
                Start Chat
              </Button>
            )}
            {selectedContactOption?.id === 'email' && (
              <Button>
                Send Email
              </Button>
            )}
            {selectedContactOption?.id === 'phone' && (
              <Button>
                Call Now
              </Button>
            )}
            {selectedContactOption?.id === 'video' && (
              <Button>
                Schedule Consultation
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Chat Widget */}
      {showChatWidget && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-background border rounded-lg shadow-lg flex flex-col z-50">
          <div className="p-3 border-b flex justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center">
              <Headphones className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Support Chat</h3>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground" onClick={() => setShowChatWidget(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {chatMessages.map(message => (
              <div 
                key={message.id} 
                className={cn(
                  "flex",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "max-w-[80%] rounded-lg p-2",
                    message.sender === 'user' 
                      ? "bg-primary text-primary-foreground" 
                      : message.sender === 'system'
                      ? "bg-muted"
                      : "bg-muted"
                  )}
                >
                  {message.sender === 'agent' && (
                    <div className="flex items-center mb-1">
                      <Avatar className="h-5 w-5 mr-1">
                        <AvatarFallback>{message.agentName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium">{message.agentName}</span>
                    </div>
                  )}
                  <p className={cn(
                    "text-sm",
                    message.sender === 'user' ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {message.text}
                  </p>
                  <p className={cn(
                    "text-xs mt-1",
                    message.sender === 'user' ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendChatMessage();
                  }
                }}
              />
              <Button size="icon" onClick={handleSendChatMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSupportSystem;

