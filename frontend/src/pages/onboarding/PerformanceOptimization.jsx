import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart, 
  Clock, 
  HardDrive, 
  Wifi, 
  Battery, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Settings, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Download,
  Upload,
  Gauge,
  Memory,
  Save,
  Trash2,
  Eye,
  EyeOff,
  Image,
  FileText,
  Video,
  Cpu,
  Database,
  ToggleLeft,
  ToggleRight,
  Info,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Slider } from '../../components/ui/slider';
import { Progress } from '../../components/ui/progress';
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

// Mock data for performance metrics
const performanceData = {
  score: 87,
  loadTime: 1.2,
  interactionTime: 0.3,
  memoryUsage: 124,
  batteryImpact: 'Low',
  dataUsage: {
    wifi: 2.4,
    cellular: 0.8
  },
  storageUsage: 34.5,
  optimizationHistory: [
    { date: '2025-07-01', score: 87, changes: ['Enabled image compression', 'Reduced animation complexity'] },
    { date: '2025-06-15', score: 72, changes: ['Initial optimization scan'] }
  ],
  deviceCompatibility: {
    mobile: 'Excellent',
    tablet: 'Excellent',
    desktop: 'Excellent'
  }
};

// Mock data for optimization recommendations
const optimizationRecommendations = [
  {
    id: 'rec-1',
    title: 'Enable data saving mode',
    description: 'Reduce data usage by loading lower resolution images and limiting background syncing',
    impact: 'Medium',
    category: 'data',
    status: 'recommended'
  },
  {
    id: 'rec-2',
    title: 'Clear cached media files',
    description: 'Remove unused images and videos to free up 12.3MB of storage',
    impact: 'Low',
    category: 'storage',
    status: 'recommended'
  },
  {
    id: 'rec-3',
    title: 'Reduce animation complexity',
    description: 'Simplify animations to improve performance on older devices',
    impact: 'High',
    category: 'performance',
    status: 'applied'
  },
  {
    id: 'rec-4',
    title: 'Enable offline mode for key features',
    description: 'Make essential features available without internet connection',
    impact: 'Medium',
    category: 'offline',
    status: 'recommended'
  }
];

// Mock data for storage breakdown
const storageBreakdown = [
  { category: 'Profile Data', size: 2.1, icon: <FileText className="h-4 w-4" /> },
  { category: 'Media Cache', size: 18.7, icon: <Image className="h-4 w-4" /> },
  { category: 'Message History', size: 8.4, icon: <FileText className="h-4 w-4" /> },
  { category: 'App Resources', size: 5.3, icon: <Database className="h-4 w-4" /> }
];

const PerformanceOptimization = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [showClearCacheDialog, setShowClearCacheDialog] = useState(false);
  const [selectedCacheTypes, setSelectedCacheTypes] = useState({
    images: true,
    videos: true,
    documents: false,
    appData: false
  });
  
  // Performance settings state
  const [settings, setSettings] = useState({
    dataSaving: false,
    imageQuality: 'auto',
    animationReduction: false,
    backgroundSync: true,
    offlineMode: false,
    autoOptimize: false,
    notificationFrequency: 'weekly'
  });
  
  // Effect to simulate optimization progress
  useEffect(() => {
    if (isOptimizing) {
      const interval = setInterval(() => {
        setOptimizationProgress(prev => {
          const newProgress = prev + 5;
          if (newProgress >= 100) {
            setIsOptimizing(false);
            clearInterval(interval);
            toast({
              title: "Optimization Complete",
              description: "Your app performance has been optimized. Performance score improved by 8%.",
            });
            return 100;
          }
          return newProgress;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [isOptimizing, toast]);
  
  const handleOptimizeNow = () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
  };
  
  const handleClearCache = () => {
    setShowClearCacheDialog(false);
    
    // Calculate total size to be cleared
    const totalSize = Object.entries(selectedCacheTypes)
      .filter(([_, isSelected]) => isSelected)
      .reduce((acc, _) => acc + 3.2, 0); // Mock size per category
    
    toast({
      title: "Cache Cleared",
      description: `Successfully cleared ${totalSize.toFixed(1)}MB of cached data.`,
    });
  };
  
  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
    
    toast({
      title: "Setting Updated",
      description: `${setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} has been ${value ? 'enabled' : 'disabled'}.`,
    });
  };
  
  const handleApplyRecommendation = (recId) => {
    // In a real implementation, this would apply the recommendation
    toast({
      title: "Recommendation Applied",
      description: "The optimization recommendation has been applied successfully.",
    });
  };
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'applied':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'recommended':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4 text-muted-foreground" />;
    }
  };
  
  const getImpactBadge = (impact) => {
    switch (impact) {
      case 'High':
        return <Badge className="bg-green-500">High Impact</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-500">Medium Impact</Badge>;
      case 'Low':
        return <Badge variant="outline">Low Impact</Badge>;
      default:
        return <Badge variant="outline">Unknown Impact</Badge>;
    }
  };
  
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'data':
        return <Wifi className="h-4 w-4" />;
      case 'storage':
        return <HardDrive className="h-4 w-4" />;
      case 'performance':
        return <Zap className="h-4 w-4" />;
      case 'offline':
        return <Wifi className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Settings className="h-4 w-4" />;
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
            <h1 className="text-3xl font-bold tracking-tight">Performance Optimization</h1>
            <p className="text-muted-foreground mt-1">
              Optimize your app experience for speed, battery life, and data usage
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button 
              variant="outline" 
              onClick={handleOptimizeNow}
              disabled={isOptimizing}
            >
              {isOptimizing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Optimize Now
                </>
              )}
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setShowClearCacheDialog(true)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cache
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSettingChange('dataSaving', !settings.dataSaving)}>
                  <Download className="h-4 w-4 mr-2" />
                  {settings.dataSaving ? 'Disable' : 'Enable'} Data Saving
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSettingChange('animationReduction', !settings.animationReduction)}>
                  <Zap className="h-4 w-4 mr-2" />
                  {settings.animationReduction ? 'Enable' : 'Reduce'} Animations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {isOptimizing && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Optimizing your app...</span>
                  <span className="text-sm text-muted-foreground">{optimizationProgress}%</span>
                </div>
                <Progress value={optimizationProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Analyzing app performance, clearing unused cache, and optimizing resources.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Performance Score</CardTitle>
                  <CardDescription>Overall app performance rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted stroke-current"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className={`${getScoreColor(performanceData.score)} stroke-current`}
                          strokeWidth="10"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                          strokeDasharray={`${2 * Math.PI * 40 * performanceData.score / 100} ${2 * Math.PI * 40 * (1 - performanceData.score / 100)}`}
                          strokeDashoffset={2 * Math.PI * 40 * 0.25}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-3xl font-bold ${getScoreColor(performanceData.score)}`}>
                          {performanceData.score}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="bg-muted rounded-md p-2">
                      <p className="text-xs text-muted-foreground">Load Time</p>
                      <p className="text-lg font-medium">{performanceData.loadTime}s</p>
                    </div>
                    <div className="bg-muted rounded-md p-2">
                      <p className="text-xs text-muted-foreground">Interaction</p>
                      <p className="text-lg font-medium">{performanceData.interactionTime}s</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab('recommendations')}>
                    View Recommendations
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Resource Usage</CardTitle>
                  <CardDescription>Memory, battery, and data consumption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Memory className="h-4 w-4 mr-2 text-blue-500" />
                          <span className="text-sm font-medium">Memory Usage</span>
                        </div>
                        <span className="text-sm">{performanceData.memoryUsage} MB</span>
                      </div>
                      <Progress value={performanceData.memoryUsage / 2} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Battery className="h-4 w-4 mr-2 text-green-500" />
                          <span className="text-sm font-medium">Battery Impact</span>
                        </div>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                          Low
                        </Badge>
                      </div>
                      <Progress value={20} className="h-2 bg-muted" indicatorClassName="bg-green-500" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Wifi className="h-4 w-4 mr-2 text-purple-500" />
                          <span className="text-sm font-medium">Data Usage (WiFi)</span>
                        </div>
                        <span className="text-sm">{performanceData.dataUsage.wifi} MB/day</span>
                      </div>
                      <Progress value={performanceData.dataUsage.wifi * 10} className="h-2 bg-muted" indicatorClassName="bg-purple-500" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Smartphone className="h-4 w-4 mr-2 text-orange-500" />
                          <span className="text-sm font-medium">Data Usage (Cellular)</span>
                        </div>
                        <span className="text-sm">{performanceData.dataUsage.cellular} MB/day</span>
                      </div>
                      <Progress value={performanceData.dataUsage.cellular * 10} className="h-2 bg-muted" indicatorClassName="bg-orange-500" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab('settings')}>
                    Adjust Settings
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Device Compatibility</CardTitle>
                  <CardDescription>Performance across different devices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Mobile</p>
                          <p className="text-xs text-muted-foreground">iOS & Android</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">{performanceData.deviceCompatibility.mobile}</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Tablet className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Tablet</p>
                          <p className="text-xs text-muted-foreground">iPad & Android Tablets</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">{performanceData.deviceCompatibility.tablet}</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Laptop className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">Desktop</p>
                          <p className="text-xs text-muted-foreground">Web Browsers</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">{performanceData.deviceCompatibility.desktop}</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <p className="text-xs text-muted-foreground w-full text-center">
                    Last tested: July 2, 2025
                  </p>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Optimization History</CardTitle>
                <CardDescription>
                  Recent performance improvements and changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Performance Score</TableHead>
                      <TableHead>Changes Applied</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {performanceData.optimizationHistory.map((entry, index) => (
                      <TableRow key={index}>
                        <TableCell>{new Date(entry.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <span className={getScoreColor(entry.score)}>{entry.score}</span>
                        </TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside">
                            {entry.changes.map((change, i) => (
                              <li key={i} className="text-sm">{change}</li>
                            ))}
                          </ul>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-6">
            <div className="space-y-6">
              {optimizationRecommendations.map(recommendation => (
                <Card key={recommendation.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getCategoryIcon(recommendation.category)}
                        <CardTitle className="text-lg ml-2">{recommendation.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(recommendation.status)}
                        <span className="text-sm capitalize">{recommendation.status}</span>
                      </div>
                    </div>
                    <CardDescription>{recommendation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        {getImpactBadge(recommendation.impact)}
                      </div>
                      
                      {recommendation.status === 'recommended' && (
                        <Button size="sm" onClick={() => handleApplyRecommendation(recommendation.id)}>
                          Apply Recommendation
                        </Button>
                      )}
                      
                      {recommendation.status === 'applied' && (
                        <Button size="sm" variant="outline" disabled>
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Applied
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {optimizationRecommendations.length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">All Optimized!</h3>
                  <p className="text-muted-foreground mt-1">
                    Your app is fully optimized. We'll notify you when new recommendations are available.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="storage" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Storage Usage</CardTitle>
                  <CardDescription>
                    App storage breakdown and management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Total Storage Used</span>
                        <span className="text-sm font-medium">{performanceData.storageUsage} MB</span>
                      </div>
                      <Progress value={(performanceData.storageUsage / 100) * 100} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {(100 - performanceData.storageUsage).toFixed(1)} MB available of 100 MB allocation
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {storageBreakdown.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              {item.icon}
                              <span className="text-sm font-medium ml-2">{item.category}</span>
                            </div>
                            <span className="text-sm">{item.size} MB</span>
                          </div>
                          <Progress 
                            value={(item.size / performanceData.storageUsage) * 100} 
                            className="h-2" 
                            indicatorClassName={
                              index === 0 ? "bg-blue-500" : 
                              index === 1 ? "bg-purple-500" : 
                              index === 2 ? "bg-green-500" : 
                              "bg-orange-500"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Storage Management</CardTitle>
                  <CardDescription>
                    Clear cache and manage storage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setShowClearCacheDialog(true)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cache
                    </Button>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="auto-cleanup">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            <span>Auto Cleanup</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <Label htmlFor="auto-cleanup-media">Clear media cache</Label>
                                <p className="text-xs text-muted-foreground">
                                  Automatically clear unused media files
                                </p>
                              </div>
                              <Switch id="auto-cleanup-media" checked={true} />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <Label htmlFor="auto-cleanup-frequency">Cleanup frequency</Label>
                                <p className="text-xs text-muted-foreground">
                                  How often to run automatic cleanup
                                </p>
                              </div>
                              <Select defaultValue="weekly">
                                <SelectTrigger className="w-32">
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="daily">Daily</SelectItem>
                                  <SelectItem value="weekly">Weekly</SelectItem>
                                  <SelectItem value="monthly">Monthly</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="storage-limits">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <HardDrive className="h-4 w-4 mr-2" />
                            <span>Storage Limits</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label>Media Cache Limit</Label>
                                <span className="text-sm font-medium">25 MB</span>
                              </div>
                              <Slider defaultValue={[25]} max={50} step={5} />
                              <p className="text-xs text-muted-foreground">
                                Maximum storage for cached images and videos
                              </p>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label>Message History</Label>
                                <span className="text-sm font-medium">30 days</span>
                              </div>
                              <Slider defaultValue={[30]} max={90} step={15} />
                              <p className="text-xs text-muted-foreground">
                                How long to keep message history on device
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Offline Access</CardTitle>
                <CardDescription>
                  Manage content available without internet connection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="offline-mode">Offline Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable core features to work without internet connection
                      </p>
                    </div>
                    <Switch 
                      id="offline-mode" 
                      checked={settings.offlineMode}
                      onCheckedChange={(checked) => handleSettingChange('offlineMode', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Features Available Offline</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-2">
                        <Switch id="offline-profile" checked={true} disabled={!settings.offlineMode} />
                        <div className="space-y-1">
                          <Label htmlFor="offline-profile" className={!settings.offlineMode ? "text-muted-foreground" : ""}>
                            Relationship Profile
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            View and update your relationship profile
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Switch id="offline-activities" checked={true} disabled={!settings.offlineMode} />
                        <div className="space-y-1">
                          <Label htmlFor="offline-activities" className={!settings.offlineMode ? "text-muted-foreground" : ""}>
                            Relationship Activities
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Access saved activities and exercises
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Switch id="offline-journal" checked={true} disabled={!settings.offlineMode} />
                        <div className="space-y-1">
                          <Label htmlFor="offline-journal" className={!settings.offlineMode ? "text-muted-foreground" : ""}>
                            Relationship Journal
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Write and read journal entries
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Switch id="offline-resources" checked={false} disabled={!settings.offlineMode} />
                        <div className="space-y-1">
                          <Label htmlFor="offline-resources" className={!settings.offlineMode ? "text-muted-foreground" : ""}>
                            Relationship Resources
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Access saved articles and guides
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Settings</CardTitle>
                <CardDescription>
                  Customize app performance and resource usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-saving">Data Saving Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Reduce data usage with lower quality images and limited background syncing
                      </p>
                    </div>
                    <Switch 
                      id="data-saving" 
                      checked={settings.dataSaving}
                      onCheckedChange={(checked) => handleSettingChange('dataSaving', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="image-quality">Image Quality</Label>
                      <p className="text-sm text-muted-foreground">
                        Control the quality of images displayed in the app
                      </p>
                    </div>
                    <Select 
                      value={settings.imageQuality}
                      onValueChange={(value) => setSettings(prev => ({ ...prev, imageQuality: value }))}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="auto">Auto (Network)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animation-reduction">Reduce Animations</Label>
                      <p className="text-sm text-muted-foreground">
                        Simplify animations to improve performance on older devices
                      </p>
                    </div>
                    <Switch 
                      id="animation-reduction" 
                      checked={settings.animationReduction}
                      onCheckedChange={(checked) => handleSettingChange('animationReduction', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="background-sync">Background Syncing</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow the app to sync data in the background
                      </p>
                    </div>
                    <Switch 
                      id="background-sync" 
                      checked={settings.backgroundSync}
                      onCheckedChange={(checked) => handleSettingChange('backgroundSync', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-optimize">Automatic Optimization</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically optimize app performance on a regular schedule
                      </p>
                    </div>
                    <Switch 
                      id="auto-optimize" 
                      checked={settings.autoOptimize}
                      onCheckedChange={(checked) => handleSettingChange('autoOptimize', checked)}
                    />
                  </div>
                  
                  {settings.autoOptimize && (
                    <div className="flex items-center justify-between pl-6 mt-2">
                      <div className="space-y-0.5">
                        <Label htmlFor="notification-frequency">Optimization Frequency</Label>
                        <p className="text-sm text-muted-foreground">
                          How often to run automatic optimization
                        </p>
                      </div>
                      <Select 
                        value={settings.notificationFrequency}
                        onValueChange={(value) => setSettings(prev => ({ ...prev, notificationFrequency: value }))}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>
                  Technical settings for advanced users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="network">
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <Wifi className="h-4 w-4 mr-2" />
                          <span>Network Settings</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="preload-content">Preload Content</Label>
                              <p className="text-xs text-muted-foreground">
                                Download content in advance for faster access
                              </p>
                            </div>
                            <Switch id="preload-content" defaultChecked={true} />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="connection-timeout">Connection Timeout</Label>
                              <p className="text-xs text-muted-foreground">
                                How long to wait for network responses
                              </p>
                            </div>
                            <Select defaultValue="30">
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Timeout" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="15">15 sec</SelectItem>
                                <SelectItem value="30">30 sec</SelectItem>
                                <SelectItem value="60">60 sec</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="rendering">
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <Cpu className="h-4 w-4 mr-2" />
                          <span>Rendering Settings</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="hardware-acceleration">Hardware Acceleration</Label>
                              <p className="text-xs text-muted-foreground">
                                Use GPU for rendering when available
                              </p>
                            </div>
                            <Switch id="hardware-acceleration" defaultChecked={true} />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label>Animation Complexity</Label>
                              <span className="text-sm font-medium">Medium</span>
                            </div>
                            <Slider defaultValue={[50]} max={100} step={25} />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Simple</span>
                              <span>Complex</span>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="debugging">
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          <span>Debugging</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="performance-logging">Performance Logging</Label>
                              <p className="text-xs text-muted-foreground">
                                Record detailed performance metrics
                              </p>
                            </div>
                            <Switch id="performance-logging" defaultChecked={false} />
                          </div>
                          
                          <Button variant="outline" size="sm" className="w-full">
                            Export Performance Logs
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Clear Cache Dialog */}
        <Dialog open={showClearCacheDialog} onOpenChange={setShowClearCacheDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Clear Cache</DialogTitle>
              <DialogDescription>
                Select which types of cached data you want to clear.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="clear-images" 
                  checked={selectedCacheTypes.images}
                  onCheckedChange={(checked) => setSelectedCacheTypes(prev => ({ ...prev, images: checked }))}
                />
                <Label htmlFor="clear-images" className="flex items-center cursor-pointer">
                  <Image className="h-4 w-4 mr-2 text-blue-500" />
                  Image Cache (12.3 MB)
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="clear-videos" 
                  checked={selectedCacheTypes.videos}
                  onCheckedChange={(checked) => setSelectedCacheTypes(prev => ({ ...prev, videos: checked }))}
                />
                <Label htmlFor="clear-videos" className="flex items-center cursor-pointer">
                  <Video className="h-4 w-4 mr-2 text-purple-500" />
                  Video Cache (6.4 MB)
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="clear-documents" 
                  checked={selectedCacheTypes.documents}
                  onCheckedChange={(checked) => setSelectedCacheTypes(prev => ({ ...prev, documents: checked }))}
                />
                <Label htmlFor="clear-documents" className="flex items-center cursor-pointer">
                  <FileText className="h-4 w-4 mr-2 text-green-500" />
                  Document Cache (3.2 MB)
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="clear-app-data" 
                  checked={selectedCacheTypes.appData}
                  onCheckedChange={(checked) => setSelectedCacheTypes(prev => ({ ...prev, appData: checked }))}
                />
                <Label htmlFor="clear-app-data" className="flex items-center cursor-pointer">
                  <Database className="h-4 w-4 mr-2 text-red-500" />
                  App Data (5.1 MB)
                </Label>
              </div>
              
              <div className="bg-muted p-3 rounded-md mt-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 mr-2 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Clearing app data may reset some of your preferences and require re-downloading content. Your account data and relationship profile will not be affected.
                  </p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowClearCacheDialog(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleClearCache}
                disabled={!Object.values(selectedCacheTypes).some(Boolean)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Selected
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default PerformanceOptimization;

