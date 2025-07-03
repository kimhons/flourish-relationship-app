import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, BellOff, BellRing, Clock, Calendar, 
  MessageCircle, Heart, User, Settings, 
  Moon, Sun, Check, X, AlertTriangle, 
  Info, HelpCircle, ChevronDown, ChevronUp,
  Edit, Trash, Plus, Filter, RefreshCw,
  Send, Save, Play, Pause, Smartphone
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Slider } from '../../components/ui/slider';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';
import { 
  Table, TableBody, TableCaption, TableCell, 
  TableHead, TableHeader, TableRow 
} from '../../components/ui/table';
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

const PushNotificationSystem = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('preferences');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(false);
  const [quietHoursStart, setQuietHoursStart] = useState('22:00');
  const [quietHoursEnd, setQuietHoursEnd] = useState('07:00');
  const [notificationVolume, setNotificationVolume] = useState(70);
  const [showNotificationPreview, setShowNotificationPreview] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [testNotificationTitle, setTestNotificationTitle] = useState('Daily Connection Reminder');
  const [testNotificationBody, setTestNotificationBody] = useState('Time to connect with your partner! Check in and share a moment together.');
  
  // Sample notification categories
  const notificationCategories = [
    { id: 'relationship_milestones', name: 'Relationship Milestones', enabled: true, priority: 'high' },
    { id: 'daily_connection', name: 'Daily Connection', enabled: true, priority: 'high' },
    { id: 'coaching_insights', name: 'Coaching Insights', enabled: true, priority: 'medium' },
    { id: 'game_invites', name: 'Game Invites', enabled: true, priority: 'medium' },
    { id: 'messages', name: 'Messages', enabled: true, priority: 'high' },
    { id: 'therapist_sessions', name: 'Therapist Sessions', enabled: true, priority: 'high' },
    { id: 'relationship_tips', name: 'Relationship Tips', enabled: true, priority: 'low' },
    { id: 'app_updates', name: 'App Updates', enabled: false, priority: 'low' },
    { id: 'special_offers', name: 'Special Offers', enabled: false, priority: 'low' }
  ];
  
  // Sample notification templates
  const notificationTemplates = [
    { 
      id: 1, 
      category: 'daily_connection', 
      title: 'Daily Connection Reminder', 
      body: 'Time to connect with your partner! Check in and share a moment together.',
      timing: 'daily',
      time: '18:00',
      enabled: true
    },
    { 
      id: 2, 
      category: 'coaching_insights', 
      title: 'New Relationship Insight', 
      body: 'We\'ve analyzed your recent interactions and have a new insight to share!',
      timing: 'weekly',
      time: '10:00',
      enabled: true
    },
    { 
      id: 3, 
      category: 'relationship_milestones', 
      title: 'Milestone Approaching', 
      body: 'Your relationship anniversary is coming up in 7 days! Time to plan something special.',
      timing: 'specific',
      time: '09:00',
      enabled: true
    },
    { 
      id: 4, 
      category: 'relationship_tips', 
      title: 'Relationship Tip', 
      body: 'Active listening can improve your communication. Try focusing fully on your partner when they speak.',
      timing: 'weekly',
      time: '12:00',
      enabled: true
    }
  ];
  
  // Sample notification analytics
  const notificationAnalytics = {
    totalSent: 247,
    openRate: 68,
    actionRate: 42,
    mostEngaging: 'Daily Connection Reminder',
    bestTimeToSend: '6:00 PM - 8:00 PM',
    categoryEngagement: [
      { category: 'Relationship Milestones', engagement: 82 },
      { category: 'Daily Connection', engagement: 76 },
      { category: 'Coaching Insights', engagement: 64 },
      { category: 'Game Invites', engagement: 58 },
      { category: 'Messages', engagement: 92 },
      { category: 'Therapist Sessions', engagement: 88 },
      { category: 'Relationship Tips', engagement: 47 },
      { category: 'App Updates', engagement: 32 },
      { category: 'Special Offers', engagement: 28 }
    ]
  };
  
  // Sample notification history
  const notificationHistory = [
    { 
      id: 1, 
      title: 'Daily Connection Reminder', 
      body: 'Time to connect with your partner! Check in and share a moment together.',
      category: 'Daily Connection',
      time: '18:00',
      date: '2025-07-03',
      opened: true,
      actioned: true
    },
    { 
      id: 2, 
      title: 'New Message from Partner', 
      body: 'Your partner sent you a new message: "Looking forward to our date night!"',
      category: 'Messages',
      time: '14:32',
      date: '2025-07-03',
      opened: true,
      actioned: true
    },
    { 
      id: 3, 
      title: 'Therapist Session Reminder', 
      body: 'Your session with Dr. Johnson is scheduled for tomorrow at 3:00 PM.',
      category: 'Therapist Sessions',
      time: '10:15',
      date: '2025-07-03',
      opened: true,
      actioned: false
    },
    { 
      id: 4, 
      title: 'Relationship Tip', 
      body: 'Active listening can improve your communication. Try focusing fully on your partner when they speak.',
      category: 'Relationship Tips',
      time: '12:00',
      date: '2025-07-02',
      opened: false,
      actioned: false
    }
  ];
  
  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    toast({
      title: `Notifications ${!notificationsEnabled ? 'Enabled' : 'Disabled'}`,
      description: `Push notifications have been ${!notificationsEnabled ? 'enabled' : 'disabled'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleQuietHours = () => {
    setQuietHoursEnabled(!quietHoursEnabled);
    toast({
      title: `Quiet Hours ${!quietHoursEnabled ? 'Enabled' : 'Disabled'}`,
      description: `Notifications will ${!quietHoursEnabled ? 'be silenced' : 'not be silenced'} during the specified hours.`,
      duration: 3000,
    });
  };
  
  const handleVolumeChange = (value) => {
    setNotificationVolume(value[0]);
  };
  
  const handleToggleCategory = (categoryId) => {
    // In a real implementation, this would update the state of the notification categories
    toast({
      title: "Category Updated",
      description: `Notification category has been updated.`,
      duration: 3000,
    });
  };
  
  const handleSendTestNotification = () => {
    toast({
      title: "Test Notification Sent",
      description: "A test notification has been sent to your device.",
      duration: 3000,
    });
  };
  
  const handleCreateTemplate = () => {
    toast({
      title: "Template Created",
      description: "New notification template has been created.",
      duration: 3000,
    });
  };
  
  const handleDeleteTemplate = (templateId) => {
    toast({
      title: "Template Deleted",
      description: "Notification template has been deleted.",
      duration: 3000,
    });
  };
  
  const handleClearHistory = () => {
    toast({
      title: "History Cleared",
      description: "Notification history has been cleared.",
      duration: 3000,
    });
  };
  
  const renderNotificationPreview = () => {
    return (
      <div className="border rounded-lg p-4 max-w-sm mx-auto mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Bell className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">Flourish</div>
              <div className="text-xs text-muted-foreground">Just now</div>
            </div>
          </div>
          <X className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="text-sm font-medium mb-1">{testNotificationTitle}</div>
        <div className="text-sm text-muted-foreground">{testNotificationBody}</div>
        <div className="flex justify-end mt-2 gap-2">
          <Button variant="ghost" size="sm">Dismiss</Button>
          <Button variant="default" size="sm">Open</Button>
        </div>
      </div>
    );
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
          <h1 className="text-3xl font-bold mb-2">Push Notification System</h1>
          <p className="text-muted-foreground">
            Manage your notification preferences, create personalized alerts, and stay connected.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={notificationsEnabled ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleNotifications}
                >
                  {notificationsEnabled ? (
                    <>
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications On
                    </>
                  ) : (
                    <>
                      <BellOff className="mr-2 h-4 w-4" />
                      Notifications Off
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle All Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About Push Notifications</DialogTitle>
                <DialogDescription>
                  Push notifications help you stay connected with your relationship journey. 
                  They provide timely reminders, insights, and updates to enhance your experience.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>Benefits of Push Notifications:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Stay connected with your partner</li>
                  <li>Receive timely relationship insights</li>
                  <li>Never miss important relationship milestones</li>
                  <li>Get reminded about scheduled sessions</li>
                  <li>Receive personalized relationship tips</li>
                </ul>
                <p className="text-sm">
                  You can customize your notification preferences at any time.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preferences" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">General Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Enable Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about important updates and events
                        </p>
                      </div>
                      <Switch 
                        checked={notificationsEnabled} 
                        onCheckedChange={handleToggleNotifications} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Show Notification Preview</Label>
                        <p className="text-sm text-muted-foreground">
                          Display notification content on the lock screen
                        </p>
                      </div>
                      <Switch 
                        checked={showNotificationPreview} 
                        onCheckedChange={setShowNotificationPreview} 
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Enable Quiet Hours</Label>
                        <p className="text-sm text-muted-foreground">
                          Silence notifications during specified hours
                        </p>
                      </div>
                      <Switch 
                        checked={quietHoursEnabled} 
                        onCheckedChange={handleToggleQuietHours} 
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    {quietHoursEnabled && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm">Start Time</Label>
                          <Input 
                            type="time" 
                            value={quietHoursStart} 
                            onChange={(e) => setQuietHoursStart(e.target.value)} 
                            disabled={!notificationsEnabled}
                          />
                        </div>
                        <div>
                          <Label className="text-sm">End Time</Label>
                          <Input 
                            type="time" 
                            value={quietHoursEnd} 
                            onChange={(e) => setQuietHoursEnd(e.target.value)} 
                            disabled={!notificationsEnabled}
                          />
                        </div>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Notification Volume</Label>
                        <span className="text-sm">{notificationVolume}%</span>
                      </div>
                      <Slider
                        defaultValue={[notificationVolume]}
                        max={100}
                        min={0}
                        step={5}
                        onValueChange={handleVolumeChange}
                        disabled={!notificationsEnabled}
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Notification Categories</h3>
                    <Select 
                      value={selectedCategory} 
                      onValueChange={setSelectedCategory}
                      disabled={!notificationsEnabled}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="low">Low Priority</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {notificationCategories
                        .filter(category => 
                          selectedCategory === 'all' || 
                          category.priority === selectedCategory
                        )
                        .map(category => (
                          <div key={category.id} className="flex items-center justify-between p-3 border rounded-md">
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Priority: {category.priority.charAt(0).toUpperCase() + category.priority.slice(1)}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={category.priority === 'high' ? "destructive" : category.priority === 'medium' ? "default" : "secondary"}>
                                {category.priority.charAt(0).toUpperCase() + category.priority.slice(1)}
                              </Badge>
                              <Switch 
                                checked={category.enabled} 
                                onCheckedChange={() => handleToggleCategory(category.id)} 
                                disabled={!notificationsEnabled}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Test Notification</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm">Title</Label>
                      <Input 
                        value={testNotificationTitle} 
                        onChange={(e) => setTestNotificationTitle(e.target.value)} 
                        placeholder="Notification title"
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm">Message</Label>
                      <Textarea 
                        value={testNotificationBody} 
                        onChange={(e) => setTestNotificationBody(e.target.value)} 
                        placeholder="Notification message"
                        rows={3}
                        disabled={!notificationsEnabled}
                      />
                    </div>
                    
                    <Button 
                      onClick={handleSendTestNotification} 
                      className="w-full"
                      disabled={!notificationsEnabled}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Test Notification
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Notification Preview</h3>
                  
                  {renderNotificationPreview()}
                  
                  <div className="text-center text-sm text-muted-foreground">
                    This is how your notifications will appear on your device
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Notification Templates</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button disabled={!notificationsEnabled}>
                          <Plus className="mr-2 h-4 w-4" />
                          Create Template
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create Notification Template</DialogTitle>
                          <DialogDescription>
                            Create a new notification template for automated notifications.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="template-category">Category</Label>
                            <Select defaultValue="daily_connection">
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {notificationCategories.map(category => (
                                  <SelectItem key={category.id} value={category.id}>
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="template-title">Title</Label>
                            <Input id="template-title" placeholder="Notification title" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="template-body">Message</Label>
                            <Textarea id="template-body" placeholder="Notification message" rows={3} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="template-timing">Timing</Label>
                            <Select defaultValue="daily">
                              <SelectTrigger>
                                <SelectValue placeholder="Select timing" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="specific">Specific Date</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="template-time">Time</Label>
                            <Input id="template-time" type="time" defaultValue="18:00" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button onClick={handleCreateTemplate}>Create Template</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="space-y-4">
                      {notificationTemplates.map(template => (
                        <Card key={template.id} className="border">
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge>
                                {notificationCategories.find(c => c.id === template.category)?.name || template.category}
                              </Badge>
                              <div className="flex items-center gap-2">
                                <Switch 
                                  checked={template.enabled} 
                                  disabled={!notificationsEnabled}
                                />
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80">
                                    <div className="space-y-4">
                                      <h4 className="font-medium">Edit Template</h4>
                                      <div className="space-y-2">
                                        <Label>Title</Label>
                                        <Input defaultValue={template.title} />
                                      </div>
                                      <div className="space-y-2">
                                        <Label>Message</Label>
                                        <Textarea defaultValue={template.body} rows={3} />
                                      </div>
                                      <Button className="w-full">Save Changes</Button>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => handleDeleteTemplate(template.id)}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            
                            <h4 className="font-medium">{template.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{template.body}</p>
                            
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>
                                {template.timing === 'daily' ? 'Daily' : 
                                 template.timing === 'weekly' ? 'Weekly' : 
                                 template.timing === 'monthly' ? 'Monthly' : 'Specific Date'} at {template.time}
                              </span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Template Variables</h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Use these variables in your notification templates to personalize messages.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <code>{{user_name}}</code>
                        <span>User's name</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{partner_name}}</code>
                        <span>Partner's name</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{relationship_days}}</code>
                        <span>Days in relationship</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{next_milestone}}</code>
                        <span>Next milestone</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{milestone_days}}</code>
                        <span>Days until milestone</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{session_time}}</code>
                        <span>Next session time</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <code>{{therapist_name}}</code>
                        <span>Therapist's name</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Best Practices</h3>
                  
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Timing</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Send notifications at times when users are most likely to engage</li>
                            <li>Avoid sending multiple notifications in a short period</li>
                            <li>Respect quiet hours and time zones</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Content</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Keep titles short and descriptive</li>
                            <li>Make the message clear and actionable</li>
                            <li>Personalize content when possible</li>
                            <li>Avoid using all caps or excessive punctuation</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Frequency</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Limit to 1-2 notifications per day</li>
                            <li>Prioritize high-importance notifications</li>
                            <li>Allow users to customize frequency</li>
                            <li>Monitor engagement and adjust accordingly</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Notification Performance</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">Total Sent</div>
                      <div className="text-2xl font-bold">{notificationAnalytics.totalSent}</div>
                      <div className="text-xs text-muted-foreground">Last 30 days</div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">Open Rate</div>
                      <div className="text-2xl font-bold">{notificationAnalytics.openRate}%</div>
                      <div className="text-xs text-muted-foreground">
                        <span className="text-green-500">↑ 4%</span> from last month
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">Action Rate</div>
                      <div className="text-2xl font-bold">{notificationAnalytics.actionRate}%</div>
                      <div className="text-xs text-muted-foreground">
                        <span className="text-green-500">↑ 7%</span> from last month
                      </div>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Most Engaging Notification</h4>
                      <Card className="p-3 bg-muted">
                        <div className="font-medium">{notificationAnalytics.mostEngaging}</div>
                        <div className="text-xs text-muted-foreground">
                          82% open rate, 64% action rate
                        </div>
                      </Card>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Best Time to Send</h4>
                      <Card className="p-3 bg-muted">
                        <div className="font-medium">{notificationAnalytics.bestTimeToSend}</div>
                        <div className="text-xs text-muted-foreground">
                          Based on highest open and action rates
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Category Engagement</h3>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Engagement Rate</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {notificationAnalytics.categoryEngagement.map((category, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{category.category}</TableCell>
                          <TableCell className="text-right">{category.engagement}%</TableCell>
                          <TableCell className="text-right">
                            <Badge variant={
                              category.engagement >= 70 ? "success" : 
                              category.engagement >= 50 ? "default" : 
                              "secondary"
                            }>
                              {category.engagement >= 70 ? "Excellent" : 
                               category.engagement >= 50 ? "Good" : 
                               "Needs Improvement"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Optimization Tips</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Improve "Relationship Tips" Engagement</p>
                        <p className="text-xs text-muted-foreground">
                          Try sending these notifications in the morning when engagement is higher.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Personalize "Daily Connection" Content</p>
                        <p className="text-xs text-muted-foreground">
                          Adding user names increases open rates by 23%.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Reduce "App Updates" Frequency</p>
                        <p className="text-xs text-muted-foreground">
                          Lower engagement suggests users prefer fewer of these notifications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Add Action Buttons to "Therapist Sessions"</p>
                        <p className="text-xs text-muted-foreground">
                          Quick actions like "Confirm" or "Reschedule" improve engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">A/B Testing</h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Test different notification strategies to optimize engagement.
                    </p>
                    
                    <div className="space-y-2">
                      <RadioGroup defaultValue="none">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="r1" />
                          <Label htmlFor="r1">No active tests</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="timing" id="r2" />
                          <Label htmlFor="r2">Test notification timing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="content" id="r3" />
                          <Label htmlFor="r3">Test notification content</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="frequency" id="r4" />
                          <Label htmlFor="r4">Test notification frequency</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Button className="w-full" disabled>
                      <Play className="mr-2 h-4 w-4" />
                      Start A/B Test
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Premium feature - Upgrade to access A/B testing
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Notification History</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" onClick={handleClearHistory}>
                <Trash className="mr-2 h-4 w-4" />
                Clear History
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {notificationHistory.map(notification => (
              <Card key={notification.id} className={cn(
                "border p-4",
                !notification.opened && "border-primary bg-primary/5"
              )}>
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                    !notification.opened ? "bg-primary" : "bg-muted"
                  )}>
                    <Bell className={cn(
                      "h-5 w-5",
                      !notification.opened ? "text-primary-foreground" : "text-muted-foreground"
                    )} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium">{notification.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {notification.time} · {notification.date}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{notification.body}</p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{notification.category}</Badge>
                      <div className="flex items-center gap-2">
                        {notification.opened ? (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Read
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="flex items-center gap-1 bg-primary/10">
                            <Circle className="h-3 w-3 fill-primary" />
                            Unread
                          </Badge>
                        )}
                        
                        {notification.actioned && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Actioned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PushNotificationSystem;

