import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Phone, Video, Calendar, Clock, 
  CheckCircle, AlertCircle, HelpCircle, Search,
  User, ChevronDown, ChevronUp, ChevronRight,
  Filter, Star, FileText, Paperclip, Send,
  MessageSquare, PhoneCall, VideoIcon, Mail,
  ArrowRight, ArrowLeft, MoreHorizontal, X,
  Info, Award, Shield, Zap, Heart, Bookmark,
  ThumbsUp, Users, Headphones, LifeBuoy
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

const VIPSupportSystem = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [newTicketDescription, setNewTicketDescription] = useState('');
  const [newTicketCategory, setNewTicketCategory] = useState('');
  const [newTicketPriority, setNewTicketPriority] = useState('medium');
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showScheduleCall, setShowScheduleCall] = useState(false);
  const [callType, setCallType] = useState('phone');
  
  // Sample support categories
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'account', name: 'Account & Billing', icon: <User className="h-4 w-4" /> },
    { id: 'technical', name: 'Technical Issues', icon: <AlertCircle className="h-4 w-4" /> },
    { id: 'feature', name: 'Feature Questions', icon: <HelpCircle className="h-4 w-4" /> },
    { id: 'feedback', name: 'Feedback & Suggestions', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'relationship', name: 'Relationship Advice', icon: <Heart className="h-4 w-4" /> }
  ];
  
  // Sample ticket statuses
  const statuses = [
    { id: 'all', name: 'All Statuses' },
    { id: 'open', name: 'Open', color: 'bg-blue-500' },
    { id: 'in-progress', name: 'In Progress', color: 'bg-yellow-500' },
    { id: 'waiting', name: 'Waiting for Response', color: 'bg-purple-500' },
    { id: 'resolved', name: 'Resolved', color: 'bg-green-500' },
    { id: 'closed', name: 'Closed', color: 'bg-gray-500' }
  ];
  
  // Sample ticket priorities
  const priorities = [
    { id: 'all', name: 'All Priorities' },
    { id: 'low', name: 'Low', color: 'bg-blue-500' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-500' },
    { id: 'high', name: 'High', color: 'bg-orange-500' },
    { id: 'urgent', name: 'Urgent', color: 'bg-red-500' }
  ];
  
  // Sample time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];
  
  // Sample support tickets
  const supportTickets = [
    {
      id: 'ticket-1',
      subject: 'Unable to access premium content',
      description: 'I recently upgraded to a premium subscription, but I'm still unable to access the exclusive content library. I've tried logging out and back in, but the issue persists.',
      category: 'technical',
      status: 'in-progress',
      priority: 'high',
      createdAt: '2025-07-01T14:30:00',
      updatedAt: '2025-07-02T09:15:00',
      assignedAgent: {
        name: 'Sarah Johnson',
        avatar: '/avatars/sarah-johnson.jpg',
        title: 'Senior Support Specialist'
      },
      messages: [
        {
          id: 'msg-1',
          sender: 'user',
          content: 'I recently upgraded to a premium subscription, but I'm still unable to access the exclusive content library. I've tried logging out and back in, but the issue persists.',
          timestamp: '2025-07-01T14:30:00',
          attachments: []
        },
        {
          id: 'msg-2',
          sender: 'agent',
          content: 'Hello! I'm Sarah, your dedicated support specialist. I'm sorry to hear you're having trouble accessing premium content. Let me look into this right away. Could you please confirm which subscription plan you upgraded to and when the payment was processed?',
          timestamp: '2025-07-01T14:45:00',
          attachments: []
        },
        {
          id: 'msg-3',
          sender: 'user',
          content: 'I upgraded to the Premium Plus plan yesterday around 2 PM. I received a confirmation email from your payment processor, and my bank account shows the charge.',
          timestamp: '2025-07-01T15:10:00',
          attachments: [
            { name: 'payment_confirmation.pdf', size: '156 KB', type: 'application/pdf' }
          ]
        },
        {
          id: 'msg-4',
          sender: 'agent',
          content: 'Thank you for providing that information and the confirmation document. I've checked our system and can confirm that your payment was processed successfully, but there appears to be a delay in updating your account permissions. I'm going to manually update your account status right now, which should resolve the issue immediately.',
          timestamp: '2025-07-01T15:25:00',
          attachments: []
        },
        {
          id: 'msg-5',
          sender: 'agent',
          content: 'I've updated your account status to Premium Plus. Please try refreshing the app or logging out and back in again. You should now have full access to all premium content. If you're still experiencing any issues, please let me know right away.',
          timestamp: '2025-07-01T15:30:00',
          attachments: []
        },
        {
          id: 'msg-6',
          sender: 'user',
          content: 'I just logged out and back in, and I can now see the premium content! Thank you so much for your quick help.',
          timestamp: '2025-07-01T15:45:00',
          attachments: []
        },
        {
          id: 'msg-7',
          sender: 'agent',
          content: 'Excellent! I'm glad to hear that resolved the issue. As a VIP member, you now have access to our entire premium content library, workshop recordings, and exclusive relationship tools. I've also added a complimentary workshop credit to your account as a courtesy for the inconvenience. Is there anything else I can assist you with today?',
          timestamp: '2025-07-01T15:50:00',
          attachments: []
        },
        {
          id: 'msg-8',
          sender: 'user',
          content: 'That's very kind of you, thank you! I don't have any other questions right now, but I appreciate knowing I can reach out if I need help in the future.',
          timestamp: '2025-07-01T16:05:00',
          attachments: []
        },
        {
          id: 'msg-9',
          sender: 'agent',
          content: 'You're very welcome! As a VIP member, you have priority access to our support team 24/7. Don't hesitate to reach out anytime you have questions or need assistance. I'll keep this ticket open for another 24 hours in case you encounter any further issues. After that, I'll close it, but you can always reference this ticket number if you need to follow up. Enjoy exploring your new premium features!',
          timestamp: '2025-07-01T16:10:00',
          attachments: []
        }
      ],
      responseTime: '15 minutes',
      resolutionTime: '1 hour 40 minutes',
      satisfaction: 5
    },
    {
      id: 'ticket-2',
      subject: 'Question about relationship assessment results',
      description: 'I recently completed the comprehensive relationship assessment with my partner, but I'm having trouble understanding some aspects of the results, particularly the attachment style section.',
      category: 'relationship',
      status: 'waiting',
      priority: 'medium',
      createdAt: '2025-07-02T10:15:00',
      updatedAt: '2025-07-02T11:30:00',
      assignedAgent: {
        name: 'Michael Torres',
        avatar: '/avatars/michael-torres.jpg',
        title: 'Relationship Support Specialist'
      },
      messages: [
        {
          id: 'msg-1',
          sender: 'user',
          content: 'I recently completed the comprehensive relationship assessment with my partner, but I'm having trouble understanding some aspects of the results, particularly the attachment style section. Could someone help explain what "anxious-secure" means in practical terms?',
          timestamp: '2025-07-02T10:15:00',
          attachments: []
        },
        {
          id: 'msg-2',
          sender: 'agent',
          content: 'Hello! I'm Michael, your dedicated relationship support specialist. I'd be happy to help you understand your assessment results better. The "anxious-secure" description refers to an attachment style that primarily shows secure characteristics but has some anxious tendencies in certain situations. Would you like me to explain how this might manifest in your relationship and provide some practical strategies?',
          timestamp: '2025-07-02T10:30:00',
          attachments: []
        },
        {
          id: 'msg-3',
          sender: 'user',
          content: 'Yes, that would be very helpful. I'm particularly interested in understanding how this might affect our communication during conflicts.',
          timestamp: '2025-07-02T11:00:00',
          attachments: []
        },
        {
          id: 'msg-4',
          sender: 'agent',
          content: 'Great question. With an anxious-secure attachment style, you likely communicate effectively in most situations, but during conflicts or periods of uncertainty, you might experience more anxiety and seek reassurance. This could manifest as asking for more explicit communication or feeling unsettled when issues aren't resolved quickly.\n\nSome practical strategies that often help include:\n\n1. Establishing regular check-ins with your partner to prevent issues from building up\n2. Creating a "time-out" protocol for heated discussions that includes a specific time to resume the conversation\n3. Developing clear expressions for when you need reassurance\n4. Practicing self-soothing techniques for moments when anxiety increases\n\nWould you like me to elaborate on any of these strategies or suggest some specific exercises from our toolkit?',
          timestamp: '2025-07-02T11:30:00',
          attachments: []
        }
      ],
      responseTime: '15 minutes',
      resolutionTime: 'Ongoing',
      satisfaction: null
    },
    {
      id: 'ticket-3',
      subject: 'Billing cycle question',
      description: 'I'd like to change my billing cycle from monthly to annual to take advantage of the discount, but I can't find where to make this change in my account settings.',
      category: 'account',
      status: 'resolved',
      priority: 'low',
      createdAt: '2025-06-28T09:45:00',
      updatedAt: '2025-06-28T10:30:00',
      assignedAgent: {
        name: 'David Chen',
        avatar: '/avatars/david-chen.jpg',
        title: 'Billing Support Specialist'
      },
      messages: [
        {
          id: 'msg-1',
          sender: 'user',
          content: 'I'd like to change my billing cycle from monthly to annual to take advantage of the discount, but I can't find where to make this change in my account settings.',
          timestamp: '2025-06-28T09:45:00',
          attachments: []
        },
        {
          id: 'msg-2',
          sender: 'agent',
          content: 'Hello! I'm David, your dedicated billing support specialist. I'd be happy to help you switch to an annual billing cycle. You're right that this option can be a bit hidden in the interface. Let me guide you through the process step by step.',
          timestamp: '2025-06-28T09:55:00',
          attachments: []
        },
        {
          id: 'msg-3',
          sender: 'agent',
          content: 'To change your billing cycle:\n\n1. Go to "Account Settings" from the main menu\n2. Select the "Subscription" tab\n3. Click on "Manage Subscription"\n4. Select "Change Plan or Billing Cycle"\n5. Choose "Annual" from the billing cycle options\n6. Review the new pricing (you should see the 20% discount applied)\n7. Click "Confirm Changes"\n\nThe system will prorate your current subscription and apply any remaining balance to your annual plan. Would you like me to make this change for you instead?',
          timestamp: '2025-06-28T10:00:00',
          attachments: [
            { name: 'billing_cycle_guide.pdf', size: '245 KB', type: 'application/pdf' }
          ]
        },
        {
          id: 'msg-4',
          sender: 'user',
          content: 'Thank you for the clear instructions! I found it and made the change successfully. The discount was applied as you mentioned.',
          timestamp: '2025-06-28T10:20:00',
          attachments: []
        },
        {
          id: 'msg-5',
          sender: 'agent',
          content: 'Excellent! I'm glad you were able to make the change successfully. I can confirm that your account has been updated to annual billing with the 20% discount applied. Your next billing date will be June 28, 2026. As a VIP member, you've also received an additional 5% loyalty discount, bringing your total savings to 25%.\n\nIs there anything else I can assist you with regarding your account or billing?',
          timestamp: '2025-06-28T10:25:00',
          attachments: []
        },
        {
          id: 'msg-6',
          sender: 'user',
          content: 'That's all for now. Thank you for your help and for the additional discount!',
          timestamp: '2025-06-28T10:30:00',
          attachments: []
        }
      ],
      responseTime: '10 minutes',
      resolutionTime: '45 minutes',
      satisfaction: 5
    }
  ];
  
  // Sample FAQs
  const faqs = [
    {
      question: 'What are the benefits of VIP Support?',
      answer: 'VIP Support provides priority access to our support team with guaranteed response times under 30 minutes, dedicated support specialists assigned to your account, 24/7 availability, direct phone and video support options, and personalized relationship advice from certified experts.'
    },
    {
      question: 'How quickly will I receive a response to my support request?',
      answer: 'As a VIP member, you are guaranteed a response within 30 minutes for all support requests, regardless of the time of day. For urgent issues, our goal is to respond within 15 minutes. You can track the status of your request in real-time through the VIP Support dashboard.'
    },
    {
      question: 'Can I schedule a call with a support specialist?',
      answer: 'Yes, VIP members can schedule phone or video calls with support specialists at their convenience. Simply use the "Schedule Call" option in the VIP Support dashboard to select your preferred date, time, and call type. You can also request a specific support specialist if you've worked with someone previously.'
    },
    {
      question: 'How do I get relationship advice through VIP Support?',
      answer: 'You can submit relationship questions through the VIP Support system by selecting "Relationship Advice" as the category when creating a new support ticket. Your question will be directed to a certified relationship specialist who will provide personalized guidance based on your specific situation and relationship profile.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Absolutely. All communications through the VIP Support system are strictly confidential. Our support specialists adhere to rigorous privacy protocols, and your information is never shared with third parties. For relationship advice, you can also opt to anonymize certain details for additional privacy.'
    }
  ];
  
  // Filter tickets based on search, category, status, and priority
  const filterTickets = () => {
    return supportTickets.filter(ticket => {
      // Filter by search query
      if (searchQuery && !ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !ticket.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Filter by category
      if (selectedCategory !== 'all' && ticket.category !== selectedCategory) {
        return false;
      }
      
      // Filter by status
      if (selectedStatus !== 'all' && ticket.status !== selectedStatus) {
        return false;
      }
      
      // Filter by priority
      if (selectedPriority !== 'all' && ticket.priority !== selectedPriority) {
        return false;
      }
      
      return true;
    });
  };
  
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setShowTicketDetails(true);
  };
  
  const handleCreateTicket = () => {
    setShowNewTicketForm(true);
  };
  
  const handleSubmitTicket = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Support Ticket Created",
      description: "Your VIP support ticket has been created. A support specialist will respond within 30 minutes.",
    });
    setShowNewTicketForm(false);
    setNewTicketSubject('');
    setNewTicketDescription('');
    setNewTicketCategory('');
    setNewTicketPriority('medium');
  };
  
  const handleReplyToTicket = () => {
    if (!replyMessage.trim()) return;
    
    // In a real implementation, this would submit to the backend
    toast({
      title: "Reply Sent",
      description: "Your reply has been sent to the support specialist.",
    });
    setReplyMessage('');
  };
  
  const handleScheduleCall = () => {
    setShowScheduleCall(true);
  };
  
  const handleConfirmSchedule = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Call Scheduled",
      description: `Your ${callType} call has been scheduled for ${format(selectedDate, 'MMMM d, yyyy')} at ${selectedTime}.`,
    });
    setShowScheduleCall(false);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };
  
  const getStatusColor = (status) => {
    const statusObj = statuses.find(s => s.id === status);
    return statusObj ? statusObj.color : 'bg-gray-500';
  };
  
  const getPriorityColor = (priority) => {
    const priorityObj = priorities.find(p => p.id === priority);
    return priorityObj ? priorityObj.color : 'bg-gray-500';
  };
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  const getStatusName = (statusId) => {
    const status = statuses.find(s => s.id === statusId);
    return status ? status.name : statusId;
  };
  
  const getPriorityName = (priorityId) => {
    const priority = priorities.find(p => p.id === priorityId);
    return priority ? priority.name : priorityId;
  };
  
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'account':
        return <User className="h-4 w-4" />;
      case 'technical':
        return <AlertCircle className="h-4 w-4" />;
      case 'feature':
        return <HelpCircle className="h-4 w-4" />;
      case 'feedback':
        return <MessageSquare className="h-4 w-4" />;
      case 'relationship':
        return <Heart className="h-4 w-4" />;
      default:
        return <HelpCircle className="h-4 w-4" />;
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
            <h1 className="text-3xl font-bold tracking-tight">VIP Support System</h1>
            <p className="text-muted-foreground mt-1">
              Priority support with dedicated specialists
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button onClick={handleCreateTicket}>
              <MessageCircle className="h-4 w-4 mr-2" />
              New Support Request
            </Button>
            
            <Button variant="outline" onClick={handleScheduleCall}>
              <Phone className="h-4 w-4 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Priority Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get priority access to our support team with guaranteed response times under 30 minutes.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Average Response Time</span>
                      <span className="font-medium text-green-600">12 minutes</span>
                    </div>
                    <Progress value={40} className="h-2 mt-1" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    Dedicated Specialists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Work with dedicated support specialists who know your relationship profile and history.
                  </p>
                  <div className="flex items-center mt-4 space-x-2">
                    <Avatar>
                      <AvatarImage src="/avatars/sarah-johnson.jpg" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="/avatars/michael-torres.jpg" alt="Michael Torres" />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="/avatars/david-chen.jpg" alt="David Chen" />
                      <AvatarFallback>DC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Your Support Team</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Headphones className="h-5 w-5 mr-2 text-purple-500" />
                    24/7 Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access support anytime with 24/7 availability through chat, phone, or video.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available Now
                    </Badge>
                    <span className="text-sm text-muted-foreground">All channels open</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Support Activity</CardTitle>
                  <CardDescription>
                    Your recent interactions with the support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportTickets.slice(0, 3).map((ticket, index) => (
                      <div key={ticket.id} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${getStatusColor(ticket.status)}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium hover:text-primary cursor-pointer" onClick={() => handleTicketSelect(ticket)}>
                              {ticket.subject}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {getStatusName(ticket.status)}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last updated {formatDate(ticket.updatedAt)} at {formatTime(ticket.updatedAt)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="link" className="p-0 h-auto text-sm mt-4" onClick={() => setActiveTab('tickets')}>
                    View all tickets
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Support Options</CardTitle>
                  <CardDescription>
                    Multiple ways to get the help you need
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-md mr-3">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Chat Support</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Start a conversation with a support specialist
                        </p>
                        <Button variant="link" className="p-0 h-auto text-xs mt-1" onClick={handleCreateTicket}>
                          Start chat
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-md mr-3">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Phone Support</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Schedule a call with a dedicated specialist
                        </p>
                        <Button variant="link" className="p-0 h-auto text-xs mt-1" onClick={handleScheduleCall}>
                          Schedule call
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-md mr-3">
                        <Video className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Video Consultation</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Face-to-face support for complex issues
                        </p>
                        <Button variant="link" className="p-0 h-auto text-xs mt-1" onClick={handleScheduleCall}>
                          Schedule video
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>VIP Support Benefits</CardTitle>
                <CardDescription>
                  Exclusive support features for premium members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-md mr-3">
                      <Award className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Priority Response</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Guaranteed response within 30 minutes, 24/7
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Dedicated Team</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Work with specialists who know your history
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-md mr-3">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Direct Phone Access</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Schedule calls at your convenience
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-md mr-3">
                      <Video className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Video Consultations</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Face-to-face support for complex issues
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-md mr-3">
                      <Heart className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Relationship Advice</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Personalized guidance from certified experts
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-md mr-3">
                      <Shield className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Enhanced Privacy</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Additional confidentiality protections
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tickets" className="mt-6">
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
                    placeholder="Search tickets..."
                    className="pl-8 w-[200px] md:w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Button className="mt-4 md:mt-0" onClick={handleCreateTicket}>
                <MessageCircle className="h-4 w-4 mr-2" />
                New Support Request
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
                      <Label htmlFor="status">Status</Label>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger id="status" className="mt-1">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map(status => (
                            <SelectItem key={status.id} value={status.id}>
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full mr-2 ${status.color}`} />
                                {status.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                        <SelectTrigger id="priority" className="mt-1">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          {priorities.map(priority => (
                            <SelectItem key={priority.id} value={priority.id}>
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full mr-2 ${priority.color}`} />
                                {priority.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="space-y-4">
              {filterTickets().map(ticket => (
                <Card key={ticket.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${getStatusColor(ticket.status)}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium hover:text-primary cursor-pointer" onClick={() => handleTicketSelect(ticket)}>
                              {ticket.subject}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className={`${getPriorityColor(ticket.priority)} bg-opacity-10 border-opacity-30`}>
                                {getPriorityName(ticket.priority)}
                              </Badge>
                              <Badge variant="outline">
                                {getStatusName(ticket.status)}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <span className="flex items-center">
                              {getCategoryIcon(ticket.category)}
                              <span className="ml-1">{getCategoryName(ticket.category)}</span>
                            </span>
                            <Separator orientation="vertical" className="mx-2 h-3" />
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>Created {formatDate(ticket.createdAt)}</span>
                            </span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {ticket.description}
                          </p>
                          
                          <div className="flex items-center mt-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={ticket.assignedAgent.avatar} alt={ticket.assignedAgent.name} />
                              <AvatarFallback>{ticket.assignedAgent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="ml-2">
                              <p className="text-sm font-medium">{ticket.assignedAgent.name}</p>
                              <p className="text-xs text-muted-foreground">{ticket.assignedAgent.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-6 flex flex-col justify-between md:w-64">
                      <div>
                        <h4 className="text-sm font-medium">Response Metrics</h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">First Response:</span>
                            <span className="font-medium">{ticket.responseTime}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Resolution Time:</span>
                            <span className="font-medium">{ticket.resolutionTime}</span>
                          </div>
                          {ticket.satisfaction && (
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Satisfaction:</span>
                              <span className="font-medium flex items-center">
                                {ticket.satisfaction}/5
                                <Star className="h-3 w-3 ml-1 text-yellow-500 fill-yellow-500" />
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button 
                          className="w-full" 
                          onClick={() => handleTicketSelect(ticket)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {filterTickets().length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No tickets found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or create a new support request
                </p>
                <Button className="mt-4" onClick={handleCreateTicket}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  New Support Request
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Support Call</CardTitle>
                <CardDescription>
                  Book a phone or video call with a support specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Call Type</Label>
                    <RadioGroup defaultValue="phone" className="mt-2" onValueChange={setCallType} value={callType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="flex items-center cursor-pointer">
                          <Phone className="h-4 w-4 mr-2 text-green-600" />
                          Phone Call
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem value="video" id="video" />
                        <Label htmlFor="video" className="flex items-center cursor-pointer">
                          <Video className="h-4 w-4 mr-2 text-purple-600" />
                          Video Call
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    <div className="mt-6">
                      <Label>Select Date</Label>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal mt-2"
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            {format(selectedDate, 'PPP')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date || new Date());
                              setCalendarOpen(false);
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="mt-6">
                      <Label>Select Time</Label>
                      <Select defaultValue="10:00" onValueChange={setSelectedTime} value={selectedTime}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mt-6">
                      <Label>Support Topic</Label>
                      <Select defaultValue="">
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account">Account & Billing</SelectItem>
                          <SelectItem value="technical">Technical Issues</SelectItem>
                          <SelectItem value="feature">Feature Questions</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          <SelectItem value="relationship">Relationship Advice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mt-6">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Please provide any additional details about your support needs"
                        className="mt-2"
                      />
                    </div>
                    
                    <Button className="mt-6 w-full">
                      Schedule Call
                    </Button>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="font-medium">Available Support Specialists</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Select a specialist or we'll assign the best match for your topic
                    </p>
                    
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/avatars/sarah-johnson.jpg" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <div className="flex items-center">
                            <h4 className="font-medium">Sarah Johnson</h4>
                            <Badge variant="outline" className="ml-2 text-xs">
                              Technical
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Senior Support Specialist</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-muted-foreground ml-1">(98 reviews)</span>
                          </div>
                          <Button variant="link" className="p-0 h-auto text-xs mt-1">
                            View profile
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/avatars/michael-torres.jpg" alt="Michael Torres" />
                          <AvatarFallback>MT</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <div className="flex items-center">
                            <h4 className="font-medium">Michael Torres</h4>
                            <Badge variant="outline" className="ml-2 text-xs">
                              Relationship
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Relationship Support Specialist</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-muted-foreground ml-1">(87 reviews)</span>
                          </div>
                          <Button variant="link" className="p-0 h-auto text-xs mt-1">
                            View profile
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/avatars/david-chen.jpg" alt="David Chen" />
                          <AvatarFallback>DC</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <div className="flex items-center">
                            <h4 className="font-medium">David Chen</h4>
                            <Badge variant="outline" className="ml-2 text-xs">
                              Billing
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Billing Support Specialist</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-muted-foreground ml-1">(76 reviews)</span>
                          </div>
                          <Button variant="link" className="p-0 h-auto text-xs mt-1">
                            View profile
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-background rounded-md p-4">
                      <h4 className="font-medium flex items-center">
                        <Info className="h-4 w-4 mr-2 text-blue-500" />
                        About VIP Support Calls
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                          <span>Unlimited call duration for complex issues</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                          <span>Screen sharing available for technical support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                          <span>Call recordings available upon request</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                          <span>Follow-up documentation provided after call</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Upcoming Scheduled Calls</CardTitle>
                <CardDescription>
                  Your scheduled support calls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-md mr-3">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Phone Call with Michael Torres</h4>
                        <Badge>Tomorrow</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        July 4, 2025 at 10:00 AM
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Topic: Relationship Advice
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Past Support Calls</CardTitle>
                <CardDescription>
                  History of your support calls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-md mr-3">
                      <Video className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Video Call with Sarah Johnson</h4>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        June 25, 2025 at 2:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Topic: Technical Issues
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Duration: 35 minutes
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                        <Button variant="outline" size="sm">
                          Request Recording
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-md mr-3">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Phone Call with David Chen</h4>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        June 18, 2025 at 11:30 AM
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Topic: Account & Billing
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Duration: 22 minutes
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                        <Button variant="outline" size="sm">
                          Request Recording
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Common questions about VIP Support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 bg-muted p-4 rounded-lg">
                  <h3 className="font-medium flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2 text-blue-500" />
                    Need More Help?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    If you can't find the answer to your question, our VIP support team is available 24/7 to assist you.
                  </p>
                  <div className="flex items-center mt-4 space-x-2">
                    <Button onClick={handleCreateTicket}>
                      <MessageCircle className="h-4 w-4 mr-2" />
                      New Support Request
                    </Button>
                    <Button variant="outline" onClick={handleScheduleCall}>
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Ticket Details Dialog */}
        <Dialog open={showTicketDetails} onOpenChange={setShowTicketDetails}>
          <DialogContent className="max-w-4xl">
            {selectedTicket && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {getCategoryName(selectedTicket.category)}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={`${getPriorityColor(selectedTicket.priority)} bg-opacity-10 border-opacity-30`}>
                        {getPriorityName(selectedTicket.priority)}
                      </Badge>
                      <Badge variant="outline">
                        {getStatusName(selectedTicket.status)}
                      </Badge>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl mt-2">{selectedTicket.subject}</DialogTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Created {formatDate(selectedTicket.createdAt)} at {formatTime(selectedTicket.createdAt)}</span>
                    </span>
                    <Separator orientation="vertical" className="mx-2 h-3" />
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Last updated {formatDate(selectedTicket.updatedAt)} at {formatTime(selectedTicket.updatedAt)}</span>
                    </span>
                  </div>
                </DialogHeader>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedTicket.assignedAgent.avatar} alt={selectedTicket.assignedAgent.name} />
                      <AvatarFallback>{selectedTicket.assignedAgent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-medium">{selectedTicket.assignedAgent.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedTicket.assignedAgent.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={handleScheduleCall}>
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          Export as PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Email Transcript
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <X className="h-4 w-4 mr-2" />
                          Close Ticket
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                <ScrollArea className="h-[400px] border rounded-md p-4">
                  <div className="space-y-6">
                    {selectedTicket.messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.sender === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium">
                              {message.sender === 'user' ? 'You' : selectedTicket.assignedAgent.name}
                            </span>
                            <span className="text-xs opacity-70">
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          
                          {message.attachments && message.attachments.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {message.attachments.map((attachment, index) => (
                                <div 
                                  key={index} 
                                  className={`flex items-center p-2 rounded ${
                                    message.sender === 'user' 
                                      ? 'bg-primary-foreground/10' 
                                      : 'bg-background'
                                  }`}
                                >
                                  <Paperclip className="h-4 w-4 mr-2" />
                                  <span className="text-xs flex-1 truncate">{attachment.name}</span>
                                  <span className="text-xs ml-2">{attachment.size}</span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-6 w-6 p-0 ml-2"
                                    onClick={() => toast({
                                      title: "Attachment Downloaded",
                                      description: `${attachment.name} has been downloaded.`,
                                    })}
                                  >
                                    <Download className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Label htmlFor="reply">Reply</Label>
                    <span className="text-xs text-muted-foreground">
                      VIP Priority Response: Guaranteed reply within 30 minutes
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Textarea 
                      id="reply" 
                      placeholder="Type your message here..." 
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="flex-1"
                    />
                    <div className="flex flex-col space-y-2">
                      <Button 
                        size="sm" 
                        onClick={handleReplyToTicket}
                        disabled={!replyMessage.trim()}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                      <Button variant="outline" size="sm">
                        <Paperclip className="h-4 w-4 mr-2" />
                        Attach
                      </Button>
                    </div>
                  </div>
                </div>
                
                <DialogFooter className="flex-col sm:flex-row gap-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleScheduleCall}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Ticket Escalated",
                          description: "Your ticket has been escalated to a senior specialist.",
                        });
                      }}
                    >
                      <ArrowUp className="h-4 w-4 mr-2" />
                      Escalate
                    </Button>
                  </div>
                  
                  {selectedTicket.status !== 'closed' && (
                    <Button
                      variant="default"
                      onClick={() => {
                        toast({
                          title: "Ticket Closed",
                          description: "Your ticket has been closed. You can reopen it at any time.",
                        });
                        setShowTicketDetails(false);
                      }}
                    >
                      Close Ticket
                    </Button>
                  )}
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        {/* New Ticket Form Dialog */}
        <Dialog open={showNewTicketForm} onOpenChange={setShowNewTicketForm}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Support Request</DialogTitle>
              <DialogDescription>
                Submit a new support request and receive a response within 30 minutes.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  value={newTicketSubject} 
                  onChange={(e) => setNewTicketSubject(e.target.value)} 
                  placeholder="Brief description of your issue"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={newTicketCategory} onValueChange={setNewTicketCategory}>
                  <SelectTrigger id="category">
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
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={newTicketPriority} onValueChange={setNewTicketPriority}>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.slice(1).map(priority => (
                      <SelectItem key={priority.id} value={priority.id}>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${priority.color}`} />
                          {priority.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={newTicketDescription} 
                  onChange={(e) => setNewTicketDescription(e.target.value)} 
                  placeholder="Please provide details about your issue or question"
                  rows={5}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Attachments</Label>
                <div className="border border-dashed rounded-md p-6 text-center">
                  <Paperclip className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Drag and drop files here or click to browse
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Browse Files
                  </Button>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowNewTicketForm(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitTicket}>
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* Schedule Call Dialog */}
        <Dialog open={showScheduleCall} onOpenChange={setShowScheduleCall}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Schedule a Support Call</DialogTitle>
              <DialogDescription>
                Book a phone or video call with a support specialist.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label>Call Type</Label>
                <RadioGroup defaultValue="phone" className="mt-2" onValueChange={setCallType} value={callType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="call-phone" />
                    <Label htmlFor="call-phone" className="flex items-center cursor-pointer">
                      <Phone className="h-4 w-4 mr-2 text-green-600" />
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="video" id="call-video" />
                    <Label htmlFor="call-video" className="flex items-center cursor-pointer">
                      <Video className="h-4 w-4 mr-2 text-purple-600" />
                      Video Call
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {format(selectedDate, 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date || new Date());
                        setCalendarOpen(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Select Time</Label>
                <Select defaultValue="10:00" onValueChange={setSelectedTime} value={selectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Support Topic</Label>
                <Select defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account">Account & Billing</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="feature">Feature Questions</SelectItem>
                    <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    <SelectItem value="relationship">Relationship Advice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="call-notes">Additional Notes</Label>
                <Textarea
                  id="call-notes"
                  placeholder="Please provide any additional details about your support needs"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowScheduleCall(false)}>
                Cancel
              </Button>
              <Button onClick={handleConfirmSchedule}>
                Schedule Call
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default VIPSupportSystem;

