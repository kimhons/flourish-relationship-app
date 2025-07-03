import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, WifiOff, Database, RotateCw, 
  Download, Upload, Clock, CheckCircle, 
  XCircle, AlertTriangle, Info, HelpCircle,
  Settings, Sliders, Smartphone, Tablet,
  Laptop, Cloud, CloudOff, Save,
  FileText, Image, Video, MessageSquare,
  Calendar, Heart, User, Activity,
  Lock, Unlock, Shield, ShieldAlert,
  RefreshCw, Zap, Battery, BatteryCharging
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Slider } from '../../components/ui/slider';
import { Input } from '../../components/ui/input';
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
import { Progress } from '../../components/ui/progress';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';

const OfflineCapabilities = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('features');
  const [offlineMode, setOfflineMode] = useState(false);
  const [autoDownload, setAutoDownload] = useState(true);
  const [storageLimit, setStorageLimit] = useState(500);
  const [syncFrequency, setSyncFrequency] = useState('auto');
  const [batteryOptimization, setBatteryOptimization] = useState(true);
  const [dataUsageOptimization, setDataUsageOptimization] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [storageUsed, setStorageUsed] = useState(237);
  const [syncStatus, setSyncStatus] = useState('synced'); // 'synced', 'syncing', 'pending'
  const [lastSyncTime, setLastSyncTime] = useState('2025-07-03 14:32');
  
  // Sample offline features
  const offlineFeatures = [
    { 
      id: 'daily_activities', 
      name: 'Daily Connection Activities', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 45,
      lastSync: '2025-07-03 14:32',
      status: 'synced',
      icon: Heart
    },
    { 
      id: 'journal', 
      name: 'Relationship Journal', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 32,
      lastSync: '2025-07-03 14:30',
      status: 'synced',
      icon: FileText
    },
    { 
      id: 'games', 
      name: 'Saved Games & Quizzes', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 78,
      lastSync: '2025-07-03 14:28',
      status: 'synced',
      icon: Activity
    },
    { 
      id: 'toolkit', 
      name: 'Relationship Toolkit Exercises', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 25,
      lastSync: '2025-07-03 14:25',
      status: 'synced',
      icon: Tool
    },
    { 
      id: 'progress', 
      name: 'Progress Tracking', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 18,
      lastSync: '2025-07-03 14:20',
      status: 'synced',
      icon: Activity
    },
    { 
      id: 'resources', 
      name: 'Saved Articles & Resources', 
      enabled: true, 
      autoDownload: false,
      storageUsed: 12,
      lastSync: '2025-07-03 14:15',
      status: 'synced',
      icon: FileText
    },
    { 
      id: 'chat', 
      name: 'Chat History', 
      enabled: true, 
      autoDownload: true,
      storageUsed: 22,
      lastSync: '2025-07-03 14:10',
      status: 'synced',
      icon: MessageSquare
    },
    { 
      id: 'media', 
      name: 'Media Gallery', 
      enabled: true, 
      autoDownload: false,
      storageUsed: 5,
      lastSync: '2025-07-03 14:05',
      status: 'synced',
      icon: Image
    },
    { 
      id: 'coaching', 
      name: 'AI Coaching', 
      enabled: false, 
      autoDownload: false,
      storageUsed: 0,
      lastSync: 'N/A',
      status: 'online-only',
      icon: User
    },
    { 
      id: 'therapist', 
      name: 'Professional Coaching', 
      enabled: false, 
      autoDownload: false,
      storageUsed: 0,
      lastSync: 'N/A',
      status: 'online-only',
      icon: User
    }
  ];
  
  // Sample sync history
  const syncHistory = [
    { 
      id: 1, 
      timestamp: '2025-07-03 14:32:15', 
      type: 'Auto Sync', 
      status: 'Success', 
      details: 'All data synchronized successfully',
      changes: 12,
      duration: '3.2s'
    },
    { 
      id: 2, 
      timestamp: '2025-07-03 12:15:42', 
      type: 'Manual Sync', 
      status: 'Success', 
      details: 'All data synchronized successfully',
      changes: 8,
      duration: '2.8s'
    },
    { 
      id: 3, 
      timestamp: '2025-07-03 09:30:18', 
      type: 'Auto Sync', 
      status: 'Partial', 
      details: 'Media Gallery sync failed due to network timeout',
      changes: 5,
      duration: '4.5s'
    },
    { 
      id: 4, 
      timestamp: '2025-07-02 18:45:33', 
      type: 'Auto Sync', 
      status: 'Success', 
      details: 'All data synchronized successfully',
      changes: 15,
      duration: '3.7s'
    },
    { 
      id: 5, 
      timestamp: '2025-07-02 14:20:51', 
      type: 'Connection Restored', 
      status: 'Success', 
      details: 'Offline changes synchronized after connection restored',
      changes: 22,
      duration: '5.2s'
    }
  ];
  
  // Sample conflict resolution history
  const conflictHistory = [
    { 
      id: 1, 
      timestamp: '2025-07-02 14:20:51', 
      feature: 'Relationship Journal', 
      resolution: 'Auto-merged', 
      details: 'Different entries edited on different devices',
      action: 'Both changes preserved'
    },
    { 
      id: 2, 
      timestamp: '2025-07-01 19:12:33', 
      feature: 'Daily Connection Activities', 
      resolution: 'User Choice', 
      details: 'Same activity edited on multiple devices',
      action: 'User selected the most recent version'
    },
    { 
      id: 3, 
      timestamp: '2025-06-30 10:45:22', 
      feature: 'Progress Tracking', 
      resolution: 'Auto-merged', 
      details: 'Different metrics updated on different devices',
      action: 'All updates combined'
    }
  ];
  
  // Sample storage usage
  const storageUsage = {
    total: storageLimit,
    used: storageUsed,
    available: storageLimit - storageUsed,
    breakdown: [
      { category: 'Daily Connection Activities', size: 45, percentage: 19 },
      { category: 'Relationship Journal', size: 32, percentage: 14 },
      { category: 'Saved Games & Quizzes', size: 78, percentage: 33 },
      { category: 'Relationship Toolkit Exercises', size: 25, percentage: 11 },
      { category: 'Progress Tracking', size: 18, percentage: 8 },
      { category: 'Saved Articles & Resources', size: 12, percentage: 5 },
      { category: 'Chat History', size: 22, percentage: 9 },
      { category: 'Media Gallery', size: 5, percentage: 2 }
    ]
  };
  
  const handleToggleOfflineMode = () => {
    setOfflineMode(!offlineMode);
    toast({
      title: `Offline Mode ${!offlineMode ? 'Enabled' : 'Disabled'}`,
      description: `The app will ${!offlineMode ? 'now work without an internet connection' : 'require an internet connection for full functionality'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleAutoDownload = () => {
    setAutoDownload(!autoDownload);
    toast({
      title: `Auto-Download ${!autoDownload ? 'Enabled' : 'Disabled'}`,
      description: `The app will ${!autoDownload ? 'automatically download content for offline use' : 'only download content when manually requested'}.`,
      duration: 3000,
    });
  };
  
  const handleStorageLimitChange = (value) => {
    setStorageLimit(value[0]);
  };
  
  const handleSyncFrequencyChange = (value) => {
    setSyncFrequency(value);
    toast({
      title: "Sync Frequency Updated",
      description: `Synchronization frequency set to ${value === 'auto' ? 'automatic' : value}.`,
      duration: 3000,
    });
  };
  
  const handleToggleFeature = (featureId) => {
    // In a real implementation, this would update the state of the offline features
    toast({
      title: "Feature Updated",
      description: `Offline availability for this feature has been updated.`,
      duration: 3000,
    });
  };
  
  const handleManualSync = () => {
    setSyncStatus('syncing');
    
    // Simulate sync process
    setTimeout(() => {
      setSyncStatus('synced');
      setLastSyncTime(new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }).replace(',', ''));
      
      toast({
        title: "Synchronization Complete",
        description: "All data has been synchronized successfully.",
        duration: 3000,
      });
    }, 2000);
  };
  
  const handleClearCache = () => {
    toast({
      title: "Cache Cleared",
      description: "Offline cache has been cleared successfully.",
      duration: 3000,
    });
    
    setStorageUsed(0);
  };
  
  const handleDownloadAll = () => {
    toast({
      title: "Downloading Content",
      description: "All available content is being downloaded for offline use.",
      duration: 3000,
    });
  };
  
  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };
  
  const renderSyncStatusIndicator = () => {
    if (syncStatus === 'synced') {
      return (
        <div className="flex items-center text-green-500">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span className="text-sm">Synced</span>
        </div>
      );
    } else if (syncStatus === 'syncing') {
      return (
        <div className="flex items-center text-blue-500">
          <RotateCw className="h-4 w-4 mr-1 animate-spin" />
          <span className="text-sm">Syncing...</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-amber-500">
          <AlertTriangle className="h-4 w-4 mr-1" />
          <span className="text-sm">Pending</span>
        </div>
      );
    }
  };
  
  const getStatusBadge = (status) => {
    if (status === 'synced') {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Synced</Badge>;
    } else if (status === 'syncing') {
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Syncing</Badge>;
    } else if (status === 'pending') {
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
    } else if (status === 'online-only') {
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Online Only</Badge>;
    }
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
          <h1 className="text-3xl font-bold mb-2">Offline Capabilities</h1>
          <p className="text-muted-foreground">
            Access your relationship tools and data even without an internet connection.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={offlineMode ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleOfflineMode}
                >
                  {offlineMode ? (
                    <>
                      <WifiOff className="mr-2 h-4 w-4" />
                      Offline Mode
                    </>
                  ) : (
                    <>
                      <Wifi className="mr-2 h-4 w-4" />
                      Online Mode
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Offline Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleManualSync}
            disabled={syncStatus === 'syncing'}
          >
            {syncStatus === 'syncing' ? (
              <>
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Sync Now
              </>
            )}
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About Offline Capabilities</DialogTitle>
                <DialogDescription>
                  Offline capabilities allow you to use the Flourish app even when you don't have an internet connection.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>Benefits of Offline Mode:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Access your relationship tools anywhere, anytime</li>
                  <li>Continue your daily connection activities without interruption</li>
                  <li>Record journal entries when inspiration strikes</li>
                  <li>Play relationship games during travel or poor connectivity</li>
                  <li>All changes sync automatically when connection is restored</li>
                </ul>
                <p className="text-sm">
                  You can customize which features are available offline and manage your offline storage.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Storage Used</div>
              <div className="text-2xl font-bold">{storageUsed} MB</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            of {storageLimit} MB
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <RefreshCw className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Last Synced</div>
              <div className="text-lg font-medium">{lastSyncTime}</div>
            </div>
          </div>
          {renderSyncStatusIndicator()}
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Available Features</div>
              <div className="text-2xl font-bold">8</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            of 10 total
          </div>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="features">Offline Features</TabsTrigger>
          <TabsTrigger value="storage">Storage Management</TabsTrigger>
          <TabsTrigger value="sync">Synchronization</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Available Offline Features</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {offlineFeatures.map(feature => (
                      <Card 
                        key={feature.id} 
                        className={cn(
                          "border p-4 cursor-pointer transition-all",
                          selectedFeature?.id === feature.id ? "border-primary" : "",
                          !feature.enabled ? "opacity-60" : ""
                        )}
                        onClick={() => handleFeatureClick(feature)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                              feature.enabled ? "bg-primary/10" : "bg-muted"
                            )}>
                              <feature.icon className={cn(
                                "h-4 w-4",
                                feature.enabled ? "text-primary" : "text-muted-foreground"
                              )} />
                            </div>
                            <div className="font-medium">{feature.name}</div>
                          </div>
                          <Switch 
                            checked={feature.enabled} 
                            onCheckedChange={() => handleToggleFeature(feature.id)}
                            disabled={feature.status === 'online-only'}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <div>Storage: {feature.storageUsed} MB</div>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        {feature.enabled && feature.status !== 'online-only' && (
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Last synced: {feature.lastSync}</span>
                          </div>
                        )}
                        
                        {feature.status === 'online-only' && (
                          <div className="flex items-center text-xs text-amber-500">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            <span>Requires internet connection</span>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              {selectedFeature ? (
                <Card>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">{selectedFeature.name}</h3>
                      {getStatusBadge(selectedFeature.status)}
                    </div>
                    
                    {selectedFeature.status !== 'online-only' ? (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Storage Used</span>
                            <span className="font-medium">{selectedFeature.storageUsed} MB</span>
                          </div>
                          <Progress value={(selectedFeature.storageUsed / storageLimit) * 100} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Auto-Download</Label>
                          <Switch 
                            checked={selectedFeature.autoDownload} 
                            onCheckedChange={() => {
                              toast({
                                title: "Auto-Download Updated",
                                description: `Auto-download for ${selectedFeature.name} has been ${!selectedFeature.autoDownload ? 'enabled' : 'disabled'}.`,
                                duration: 3000,
                              });
                            }}
                            disabled={!selectedFeature.enabled}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Last Synchronized</div>
                          <div className="text-sm">{selectedFeature.lastSync}</div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="justify-start"
                            disabled={!selectedFeature.enabled}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Latest Content
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="justify-start"
                            disabled={!selectedFeature.enabled}
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Sync This Feature
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="justify-start text-destructive"
                            disabled={!selectedFeature.enabled}
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Clear Cached Data
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="rounded-md bg-amber-50 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <AlertTriangle className="h-5 w-5 text-amber-400" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-amber-800">Online Only Feature</h3>
                              <div className="mt-2 text-sm text-amber-700">
                                <p>
                                  This feature requires an active internet connection and cannot be used offline due to its real-time nature.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Why is this online only?</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm text-muted-foreground">
                                {selectedFeature.name === 'AI Coaching' ? 
                                  "AI Coaching requires real-time processing on our servers and access to the latest relationship data to provide accurate guidance." : 
                                  "Professional Coaching connects you with real therapists in real-time, which requires an active internet connection."}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    )}
                  </div>
                </Card>
              ) : (
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-4">Feature Details</h3>
                    <div className="flex flex-col items-center justify-center text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Select a feature to view details and manage offline settings
                      </p>
                    </div>
                  </div>
                </Card>
              )}
              
              <Card className="mt-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                  
                  <div className="space-y-3">
                    <Button className="w-full" onClick={handleDownloadAll}>
                      <Download className="mr-2 h-4 w-4" />
                      Download All Content
                    </Button>
                    
                    <Button variant="outline" className="w-full" onClick={handleManualSync}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Sync All Features
                    </Button>
                    
                    <Button variant="outline" className="w-full text-destructive" onClick={handleClearCache}>
                      <Trash className="mr-2 h-4 w-4" />
                      Clear All Cached Data
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="storage" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Storage Usage</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Used: {storageUsage.used} MB</span>
                      <span>Available: {storageUsage.available} MB</span>
                    </div>
                    <Progress value={(storageUsage.used / storageUsage.total) * 100} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {Math.round((storageUsage.used / storageUsage.total) * 100)}% of {storageUsage.total} MB used
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Storage Breakdown</h4>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead className="text-right">Size</TableHead>
                          <TableHead className="text-right">Percentage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {storageUsage.breakdown.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell className="text-right">{item.size} MB</TableCell>
                            <TableCell className="text-right">{item.percentage}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Storage Management</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Storage Limit</Label>
                        <span className="text-sm">{storageLimit} MB</span>
                      </div>
                      <Slider
                        defaultValue={[storageLimit]}
                        max={2000}
                        min={100}
                        step={100}
                        onValueChange={handleStorageLimitChange}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>100 MB</span>
                        <span>2000 MB</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Auto-Download Content</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically download content for offline use
                        </p>
                      </div>
                      <Switch 
                        checked={autoDownload} 
                        onCheckedChange={handleToggleAutoDownload} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base mb-2 block">Download Quality</Label>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="r1" />
                          <Label htmlFor="r1">Low (Saves space, lower quality)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="r2" />
                          <Label htmlFor="r2">Standard (Balanced quality and size)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="r3" />
                          <Label htmlFor="r3">High (Best quality, uses more space)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full" onClick={handleClearCache}>
                        <Trash className="mr-2 h-4 w-4" />
                        Clear All Cached Data
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download All Available Content
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Storage Tips</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Optimize Media Storage</p>
                        <p className="text-xs text-muted-foreground">
                          Media files use the most storage. Consider setting media to "download on demand" to save space.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Regular Cleanup</p>
                        <p className="text-xs text-muted-foreground">
                          Clear cached data for features you don't use offline to free up space.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Prioritize Important Features</p>
                        <p className="text-xs text-muted-foreground">
                          Enable offline mode only for features you regularly use without internet access.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Adjust Download Quality</p>
                        <p className="text-xs text-muted-foreground">
                          Lower quality settings can significantly reduce storage usage while maintaining functionality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Storage Alerts</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm">Low Storage Warning</Label>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-sm">Storage Full Alert</Label>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-sm">Auto-Cleanup Suggestion</Label>
                      <Switch defaultChecked />
                    </div>
                    
                    <div>
                      <Label className="text-sm block mb-2">Alert Threshold</Label>
                      <Select defaultValue="80">
                        <SelectTrigger>
                          <SelectValue placeholder="Select threshold" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="70">70% of storage used</SelectItem>
                          <SelectItem value="80">80% of storage used</SelectItem>
                          <SelectItem value="90">90% of storage used</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sync" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Synchronization History</h3>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Changes</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {syncHistory.map(item => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.timestamp}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.changes}</TableCell>
                          <TableCell>{item.duration}</TableCell>
                          <TableCell className="text-right">
                            <Badge variant={item.status === 'Success' ? 'default' : item.status === 'Partial' ? 'outline' : 'destructive'}>
                              {item.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Conflict Resolution History</h3>
                  
                  {conflictHistory.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Feature</TableHead>
                          <TableHead>Resolution</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {conflictHistory.map(item => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.timestamp}</TableCell>
                            <TableCell>{item.feature}</TableCell>
                            <TableCell>{item.resolution}</TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline">{item.action}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        No conflicts have been detected
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Synchronization Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base block mb-2">Sync Frequency</Label>
                      <Select 
                        value={syncFrequency} 
                        onValueChange={handleSyncFrequencyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Automatic (Recommended)</SelectItem>
                          <SelectItem value="15min">Every 15 minutes</SelectItem>
                          <SelectItem value="30min">Every 30 minutes</SelectItem>
                          <SelectItem value="1hour">Every hour</SelectItem>
                          <SelectItem value="manual">Manual only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Battery Optimization</Label>
                        <p className="text-sm text-muted-foreground">
                          Reduce sync frequency when battery is low
                        </p>
                      </div>
                      <Switch 
                        checked={batteryOptimization} 
                        onCheckedChange={setBatteryOptimization} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Data Usage Optimization</Label>
                        <p className="text-sm text-muted-foreground">
                          Only sync on Wi-Fi to save mobile data
                        </p>
                      </div>
                      <Switch 
                        checked={dataUsageOptimization} 
                        onCheckedChange={setDataUsageOptimization} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Conflict Resolution</Label>
                      <RadioGroup defaultValue="auto">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="auto" id="cr1" />
                          <Label htmlFor="cr1">Automatic (Recommended)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ask" id="cr2" />
                          <Label htmlFor="cr2">Ask me every time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="local" id="cr3" />
                          <Label htmlFor="cr3">Always keep my local changes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="server" id="cr4" />
                          <Label htmlFor="cr4">Always use server version</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      onClick={handleManualSync}
                      disabled={syncStatus === 'syncing'}
                    >
                      {syncStatus === 'syncing' ? (
                        <>
                          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                          Syncing...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Sync Now
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload All Pending Changes
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Latest Data
                    </Button>
                    
                    <Button variant="outline" className="w-full text-destructive">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Force Full Sync
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">General Settings</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Offline Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable access to app features without internet
                      </p>
                    </div>
                    <Switch 
                      checked={offlineMode} 
                      onCheckedChange={handleToggleOfflineMode} 
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Auto-Download Content</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically download content for offline use
                      </p>
                    </div>
                    <Switch 
                      checked={autoDownload} 
                      onCheckedChange={handleToggleAutoDownload} 
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-base">Storage Limit</Label>
                      <span className="text-sm">{storageLimit} MB</span>
                    </div>
                    <Slider
                      defaultValue={[storageLimit]}
                      max={2000}
                      min={100}
                      step={100}
                      onValueChange={handleStorageLimitChange}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="text-base block mb-2">Sync Frequency</Label>
                    <Select 
                      value={syncFrequency} 
                      onValueChange={handleSyncFrequencyChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Automatic (Recommended)</SelectItem>
                        <SelectItem value="15min">Every 15 minutes</SelectItem>
                        <SelectItem value="30min">Every 30 minutes</SelectItem>
                        <SelectItem value="1hour">Every hour</SelectItem>
                        <SelectItem value="manual">Manual only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Optimization Settings</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Battery Optimization</Label>
                      <p className="text-sm text-muted-foreground">
                        Reduce sync frequency when battery is low
                      </p>
                    </div>
                    <Switch 
                      checked={batteryOptimization} 
                      onCheckedChange={setBatteryOptimization} 
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Data Usage Optimization</Label>
                      <p className="text-sm text-muted-foreground">
                        Only sync on Wi-Fi to save mobile data
                      </p>
                    </div>
                    <Switch 
                      checked={dataUsageOptimization} 
                      onCheckedChange={setDataUsageOptimization} 
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="text-base block mb-2">Download Quality</Label>
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="dq1" />
                        <Label htmlFor="dq1">Low (Saves space, lower quality)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="dq2" />
                        <Label htmlFor="dq2">Standard (Balanced quality and size)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="dq3" />
                        <Label htmlFor="dq3">High (Best quality, uses more space)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="text-base block mb-2">Conflict Resolution</Label>
                    <RadioGroup defaultValue="auto">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auto" id="cr1" />
                        <Label htmlFor="cr1">Automatic (Recommended)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ask" id="cr2" />
                        <Label htmlFor="cr2">Ask me every time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="local" id="cr3" />
                        <Label htmlFor="cr3">Always keep my local changes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="server" id="cr4" />
                        <Label htmlFor="cr4">Always use server version</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Sync Completion</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Sync Failures</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Conflict Detected</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Storage Alerts</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Offline Mode Changes</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Advanced Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Debug Logging</Label>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Background Sync</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Auto-Retry Failed Syncs</Label>
                    <Switch defaultChecked />
                  </div>
                  
                  <div>
                    <Label className="text-sm block mb-2">Retry Attempts</Label>
                    <Select defaultValue="3">
                      <SelectTrigger>
                        <SelectValue placeholder="Select attempts" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 attempt</SelectItem>
                        <SelectItem value="3">3 attempts</SelectItem>
                        <SelectItem value="5">5 attempts</SelectItem>
                        <SelectItem value="10">10 attempts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full text-destructive">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reset All Offline Settings
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default OfflineCapabilities;

