import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Tablet, Laptop, Monitor, 
  Zap, Download, Wifi, WifiOff, 
  Moon, Sun, Battery, BatteryCharging,
  Fingerprint, Lock, Eye, EyeOff,
  RotateCw, Image, FileText, Video,
  MessageCircle, Bell, BellOff, Clock,
  Check, X, Info, HelpCircle, Settings,
  ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
  Menu, Search, Home, User, Heart, Calendar
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

const MobileAppOptimization = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('responsive');
  const [selectedDevice, setSelectedDevice] = useState('smartphone');
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [showAccessibilityOptions, setShowAccessibilityOptions] = useState(false);
  
  // Sample data for performance metrics
  const performanceMetrics = {
    loadTime: {
      before: 3.2,
      after: 1.4,
      improvement: 56
    },
    memoryUsage: {
      before: 145,
      after: 78,
      improvement: 46
    },
    batteryImpact: {
      before: 'High',
      after: 'Low',
      improvement: 65
    },
    dataUsage: {
      before: '4.5MB',
      after: '1.8MB',
      improvement: 60
    }
  };
  
  // Sample data for device compatibility
  const deviceCompatibility = [
    { type: 'iOS', versions: '12.0+', status: 'Fully Compatible' },
    { type: 'Android', versions: '8.0+', status: 'Fully Compatible' },
    { type: 'iOS', versions: '10.0-11.0', status: 'Compatible with Minor Issues' },
    { type: 'Android', versions: '7.0', status: 'Compatible with Minor Issues' },
    { type: 'iOS', versions: 'Below 10.0', status: 'Not Supported' },
    { type: 'Android', versions: 'Below 7.0', status: 'Not Supported' }
  ];
  
  // Sample data for offline features
  const offlineFeatures = [
    { feature: 'Daily Connection Activities', available: true },
    { feature: 'Relationship Journal', available: true },
    { feature: 'Saved Games & Quizzes', available: true },
    { feature: 'Relationship Toolkit Exercises', available: true },
    { feature: 'Progress Tracking', available: true },
    { feature: 'Saved Articles & Resources', available: true },
    { feature: 'Chat History', available: true },
    { feature: 'Media Gallery', available: true },
    { feature: 'AI Coaching', available: false },
    { feature: 'Professional Coaching', available: false }
  ];
  
  // Sample data for accessibility features
  const accessibilityFeatures = [
    { feature: 'Screen Reader Compatibility', implemented: true },
    { feature: 'Dynamic Font Sizing', implemented: true },
    { feature: 'High Contrast Mode', implemented: true },
    { feature: 'Reduced Motion', implemented: true },
    { feature: 'Voice Control', implemented: true },
    { feature: 'Keyboard Navigation', implemented: true },
    { feature: 'Color Blindness Support', implemented: true },
    { feature: 'Alternative Text for Images', implemented: true },
    { feature: 'Captions for Videos', implemented: true },
    { feature: 'Focus Indicators', implemented: true }
  ];
  
  const handleDeviceChange = (device) => {
    setSelectedDevice(device);
    toast({
      title: `${device.charAt(0).toUpperCase() + device.slice(1)} View`,
      description: `Switched to ${device} view to preview responsive design.`,
      duration: 3000,
    });
  };
  
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast({
      title: `${!darkMode ? 'Dark' : 'Light'} Mode Activated`,
      description: `Switched to ${!darkMode ? 'dark' : 'light'} mode for better visibility in different lighting conditions.`,
      duration: 3000,
    });
  };
  
  const handleToggleOfflineMode = () => {
    setOfflineMode(!offlineMode);
    toast({
      title: `${!offlineMode ? 'Offline' : 'Online'} Mode Activated`,
      description: `Switched to ${!offlineMode ? 'offline' : 'online'} mode to ${!offlineMode ? 'preview offline capabilities' : 'restore full functionality'}.`,
      duration: 3000,
    });
  };
  
  const handleFontScaleChange = (value) => {
    setFontScale(value[0]);
  };
  
  const handleClearCache = () => {
    toast({
      title: "Cache Cleared",
      description: "Application cache has been cleared successfully.",
      duration: 3000,
    });
  };
  
  const handleUpdateApp = () => {
    toast({
      title: "App Updated",
      description: "The application has been updated to the latest version.",
      duration: 3000,
    });
  };
  
  const getDeviceIcon = (device) => {
    switch (device) {
      case 'smartphone':
        return <Smartphone className="h-6 w-6" />;
      case 'tablet':
        return <Tablet className="h-6 w-6" />;
      case 'laptop':
        return <Laptop className="h-6 w-6" />;
      case 'desktop':
        return <Monitor className="h-6 w-6" />;
      default:
        return <Smartphone className="h-6 w-6" />;
    }
  };
  
  const getDeviceDimensions = (device) => {
    switch (device) {
      case 'smartphone':
        return { width: 320, height: 568 };
      case 'tablet':
        return { width: 768, height: 1024 };
      case 'laptop':
        return { width: 1366, height: 768 };
      case 'desktop':
        return { width: 1920, height: 1080 };
      default:
        return { width: 320, height: 568 };
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
          <h1 className="text-3xl font-bold mb-2">Mobile App Optimization</h1>
          <p className="text-muted-foreground">
            Experience Flourish optimized for all devices with enhanced performance and accessibility.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={handleToggleDarkMode}>
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Dark Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={handleToggleOfflineMode}>
                  {offlineMode ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Offline Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setShowAccessibilityOptions(!showAccessibilityOptions)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Accessibility Options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button onClick={handleUpdateApp}>
            <Download className="mr-2 h-4 w-4" />
            Update App
          </Button>
        </div>
      </div>
      
      {showAccessibilityOptions && (
        <Card className="p-4 mb-6">
          <h3 className="text-lg font-medium mb-4">Accessibility Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Font Size</label>
                <span className="text-sm">{fontScale}%</span>
              </div>
              <Slider
                defaultValue={[fontScale]}
                max={200}
                min={50}
                step={10}
                onValueChange={handleFontScaleChange}
                className="mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">High Contrast Mode</label>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Reduced Motion</label>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Screen Reader Support</label>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Color Mode</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <Button variant={!darkMode ? "default" : "outline"} onClick={() => setDarkMode(false)} className="justify-start">
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
                </Button>
                <Button variant={darkMode ? "default" : "outline"} onClick={() => setDarkMode(true)} className="justify-start">
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </Button>
              </div>
              
              <h4 className="text-sm font-medium mb-2">Color Blindness Support</h4>
              <Select defaultValue="none">
                <SelectTrigger>
                  <SelectValue placeholder="Select color blindness type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="protanopia">Protanopia</SelectItem>
                  <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                  <SelectItem value="tritanopia">Tritanopia</SelectItem>
                  <SelectItem value="achromatopsia">Achromatopsia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="responsive">Responsive Design</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="offline">Offline Capabilities</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="responsive" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Button 
              variant={selectedDevice === 'smartphone' ? "default" : "outline"} 
              className="flex items-center justify-center gap-2"
              onClick={() => handleDeviceChange('smartphone')}
            >
              <Smartphone className="h-5 w-5" />
              <span>Smartphone</span>
            </Button>
            
            <Button 
              variant={selectedDevice === 'tablet' ? "default" : "outline"} 
              className="flex items-center justify-center gap-2"
              onClick={() => handleDeviceChange('tablet')}
            >
              <Tablet className="h-5 w-5" />
              <span>Tablet</span>
            </Button>
            
            <Button 
              variant={selectedDevice === 'laptop' ? "default" : "outline"} 
              className="flex items-center justify-center gap-2"
              onClick={() => handleDeviceChange('laptop')}
            >
              <Laptop className="h-5 w-5" />
              <span>Laptop</span>
            </Button>
            
            <Button 
              variant={selectedDevice === 'desktop' ? "default" : "outline"} 
              className="flex items-center justify-center gap-2"
              onClick={() => handleDeviceChange('desktop')}
            >
              <Monitor className="h-5 w-5" />
              <span>Desktop</span>
            </Button>
          </div>
          
          <div className="flex justify-center mb-8">
            <div 
              className={cn(
                "border rounded-md overflow-hidden transition-all duration-300",
                darkMode ? "bg-gray-900" : "bg-white"
              )}
              style={{
                width: `${getDeviceDimensions(selectedDevice).width / 4}px`,
                height: `${getDeviceDimensions(selectedDevice).height / 4}px`,
                maxWidth: '100%',
                maxHeight: '70vh'
              }}
            >
              <div className={cn(
                "h-8 border-b flex items-center px-2",
                darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
              )}>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className={cn(
                  "text-xs mx-auto",
                  darkMode ? "text-gray-300" : "text-gray-700"
                )}>
                  Flourish App - {selectedDevice.charAt(0).toUpperCase() + selectedDevice.slice(1)} View
                </div>
              </div>
              
              <div className="p-2">
                {/* Mobile App UI Mockup */}
                <div className={cn(
                  "mb-2 rounded",
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                )}>
                  <div className="p-2 flex justify-between items-center">
                    <Menu className={cn("h-4 w-4", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <div className={cn("text-sm font-medium", darkMode ? "text-white" : "text-black")}>Flourish</div>
                    <User className={cn("h-4 w-4", darkMode ? "text-gray-300" : "text-gray-700")} />
                  </div>
                </div>
                
                <div className={cn(
                  "mb-2 rounded p-2",
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                )}>
                  <div className={cn("text-xs font-medium mb-1", darkMode ? "text-gray-300" : "text-gray-700")}>
                    Daily Connection
                  </div>
                  <div className={cn(
                    "w-full h-12 rounded flex items-center justify-center",
                    darkMode ? "bg-gray-700" : "bg-white"
                  )}>
                    <Heart className={cn("h-4 w-4 mr-1", darkMode ? "text-pink-400" : "text-pink-500")} />
                    <span className={cn("text-xs", darkMode ? "text-gray-200" : "text-gray-800")}>
                      Complete Today's Activity
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className={cn(
                    "rounded p-2",
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  )}>
                    <div className={cn("text-xs font-medium mb-1", darkMode ? "text-gray-300" : "text-gray-700")}>
                      Games
                    </div>
                    <div className={cn(
                      "w-full h-12 rounded flex items-center justify-center",
                      darkMode ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn("text-xs", darkMode ? "text-gray-200" : "text-gray-800")}>
                        4 New Games
                      </span>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "rounded p-2",
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  )}>
                    <div className={cn("text-xs font-medium mb-1", darkMode ? "text-gray-300" : "text-gray-700")}>
                      Toolkit
                    </div>
                    <div className={cn(
                      "w-full h-12 rounded flex items-center justify-center",
                      darkMode ? "bg-gray-700" : "bg-white"
                    )}>
                      <span className={cn("text-xs", darkMode ? "text-gray-200" : "text-gray-800")}>
                        6 Tools
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={cn(
                  "rounded p-2",
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                )}>
                  <div className={cn("text-xs font-medium mb-1", darkMode ? "text-gray-300" : "text-gray-700")}>
                    Relationship Health
                  </div>
                  <div className={cn(
                    "w-full h-4 rounded-full overflow-hidden",
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  )}>
                    <div 
                      className="h-full bg-green-500" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className={cn("text-xs", darkMode ? "text-gray-400" : "text-gray-500")}>Score: 75/100</span>
                    <span className={cn("text-xs", darkMode ? "text-gray-400" : "text-gray-500")}>+5 this week</span>
                  </div>
                </div>
                
                {/* Navigation Bar */}
                <div className={cn(
                  "mt-4 rounded-t p-2 flex justify-between",
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                )}>
                  <div className="flex flex-col items-center">
                    <Home className={cn("h-3 w-3", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <span className={cn("text-[8px]", darkMode ? "text-gray-400" : "text-gray-600")}>Home</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className={cn("h-3 w-3", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <span className={cn("text-[8px]", darkMode ? "text-gray-400" : "text-gray-600")}>Activities</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className={cn("h-3 w-3", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <span className={cn("text-[8px]", darkMode ? "text-gray-400" : "text-gray-600")}>Chat</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Calendar className={cn("h-3 w-3", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <span className={cn("text-[8px]", darkMode ? "text-gray-400" : "text-gray-600")}>Calendar</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <User className={cn("h-3 w-3", darkMode ? "text-gray-300" : "text-gray-700")} />
                    <span className={cn("text-[8px]", darkMode ? "text-gray-400" : "text-gray-600")}>Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Responsive Design Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Adaptive Layouts</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically adjusts layout based on screen size, ensuring optimal viewing on any device.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Image className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Responsive Images</h4>
                    <p className="text-sm text-muted-foreground">
                      Images scale and optimize automatically for different screen sizes and resolutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Menu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Collapsible Navigation</h4>
                    <p className="text-sm text-muted-foreground">
                      Navigation menu adapts to available space, collapsing into a hamburger menu on smaller screens.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Touch-Optimized Interfaces</h4>
                    <p className="text-sm text-muted-foreground">
                      Larger touch targets and swipe gestures for intuitive mobile interaction.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Device Compatibility</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Device Type</th>
                      <th className="text-left py-2">Versions</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviceCompatibility.map((device, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-2">{device.type}</td>
                        <td className="py-2">{device.versions}</td>
                        <td className="py-2">
                          <Badge className={cn(
                            device.status === 'Fully Compatible' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                            device.status === 'Compatible with Minor Issues' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' :
                            'bg-red-100 text-red-800 hover:bg-red-100'
                          )}>
                            {device.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Load Time</h3>
                  <div className="text-3xl font-bold">{performanceMetrics.loadTime.after}s</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  {performanceMetrics.loadTime.improvement}%
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Before:</span>
                <span>{performanceMetrics.loadTime.before}s</span>
                <ArrowRight className="h-3 w-3 mx-1" />
                <span className="text-muted-foreground">After:</span>
                <span className="text-green-600 font-medium">{performanceMetrics.loadTime.after}s</span>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Memory Usage</h3>
                  <div className="text-3xl font-bold">{performanceMetrics.memoryUsage.after}MB</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  {performanceMetrics.memoryUsage.improvement}%
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Before:</span>
                <span>{performanceMetrics.memoryUsage.before}MB</span>
                <ArrowRight className="h-3 w-3 mx-1" />
                <span className="text-muted-foreground">After:</span>
                <span className="text-green-600 font-medium">{performanceMetrics.memoryUsage.after}MB</span>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Battery Impact</h3>
                  <div className="text-3xl font-bold">{performanceMetrics.batteryImpact.after}</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  {performanceMetrics.batteryImpact.improvement}%
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Before:</span>
                <span>{performanceMetrics.batteryImpact.before}</span>
                <ArrowRight className="h-3 w-3 mx-1" />
                <span className="text-muted-foreground">After:</span>
                <span className="text-green-600 font-medium">{performanceMetrics.batteryImpact.after}</span>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Data Usage</h3>
                  <div className="text-3xl font-bold">{performanceMetrics.dataUsage.after}</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  {performanceMetrics.dataUsage.improvement}%
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Before:</span>
                <span>{performanceMetrics.dataUsage.before}</span>
                <ArrowRight className="h-3 w-3 mx-1" />
                <span className="text-muted-foreground">After:</span>
                <span className="text-green-600 font-medium">{performanceMetrics.dataUsage.after}</span>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Performance Optimizations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Image className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Image Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic image compression, lazy loading, and responsive sizing to reduce bandwidth usage and improve load times.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Code Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Minified JavaScript and CSS, tree shaking, and code splitting to reduce bundle size and improve execution speed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Battery className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Battery Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced background processing, efficient animations, and optimized network requests to minimize battery drain.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <RotateCw className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Caching Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Intelligent caching of assets and data to reduce network requests and enable faster startup times.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="mt-6" onClick={handleClearCache}>
                <RotateCw className="mr-2 h-4 w-4" />
                Clear Cache
              </Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Performance Settings</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Animation Quality</label>
                    <span className="text-sm">High</span>
                  </div>
                  <Select defaultValue="high">
                    <SelectTrigger>
                      <SelectValue placeholder="Select animation quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Best Performance)</SelectItem>
                      <SelectItem value="medium">Medium (Balanced)</SelectItem>
                      <SelectItem value="high">High (Best Appearance)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Preload Images</label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Preloads images for faster viewing but uses more data</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Background Refresh</label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Updates content in the background but uses more battery</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Data Saver Mode</label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Reduces data usage by loading lower quality images and disabling auto-play</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Battery Saver Mode</label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Reduces animations and background processes to save battery</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="offline" className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-medium">Offline Mode</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Online</span>
              <Switch checked={offlineMode} onCheckedChange={handleToggleOfflineMode} />
              <span className="text-sm">Offline</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Available Offline Features</h3>
              <div className="space-y-3">
                {offlineFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                    <span>{feature.feature}</span>
                    {feature.available ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        <Check className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                        <WifiOff className="h-3 w-3 mr-1" />
                        Requires Connection
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Offline Data Management</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Storage Usage</label>
                    <span className="text-sm">245 MB / 500 MB</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '49%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">Used: 245 MB</span>
                    <span className="text-xs text-muted-foreground">Available: 255 MB</span>
                  </div>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Auto-Download Activities</label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Save Media for Offline</label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Sync When Connected</label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-medium mb-2">Storage Limit</h4>
                  <Select defaultValue="500">
                    <SelectTrigger>
                      <SelectValue placeholder="Select storage limit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="250">250 MB</SelectItem>
                      <SelectItem value="500">500 MB</SelectItem>
                      <SelectItem value="1000">1 GB</SelectItem>
                      <SelectItem value="2000">2 GB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full">
                  <RotateCw className="mr-2 h-4 w-4" />
                  Clear Offline Data
                </Button>
              </div>
            </Card>
          </div>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Offline Synchronization</h3>
            <p className="text-muted-foreground mb-6">
              Flourish automatically synchronizes your data when you reconnect to the internet. Here's how it works:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Smart Downloading</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically downloads essential content when connected to WiFi to ensure it's available offline.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Upload className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Background Sync</h4>
                  <p className="text-sm text-muted-foreground">
                    Changes made while offline are queued and automatically synchronized when connection is restored.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Conflict Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Smart conflict resolution ensures no data is lost when both partners make changes while offline.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Sync Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications when new content is synchronized or when there are sync issues to resolve.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Accessibility Features</h3>
              <div className="space-y-3">
                {accessibilityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                    <span>{feature.feature}</span>
                    {feature.implemented ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        <Check className="h-3 w-3 mr-1" />
                        Implemented
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        <Clock className="h-3 w-3 mr-1" />
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Accessibility Settings</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Text Size</label>
                    <span className="text-sm">{fontScale}%</span>
                  </div>
                  <Slider
                    defaultValue={[fontScale]}
                    max={200}
                    min={50}
                    step={10}
                    onValueChange={handleFontScaleChange}
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">Smaller</span>
                    <span className="text-xs text-muted-foreground">Larger</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Screen Reader Support</label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">High Contrast Mode</label>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Reduced Motion</label>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Keyboard Navigation</label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Color Blindness Support</h4>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue placeholder="Select color blindness type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="protanopia">Protanopia</SelectItem>
                      <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                      <SelectItem value="tritanopia">Tritanopia</SelectItem>
                      <SelectItem value="achromatopsia">Achromatopsia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Accessibility Compliance</h3>
            <p className="text-muted-foreground mb-6">
              Flourish is committed to providing an accessible experience for all users. Our app complies with the following standards:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">WCAG 2.1 AA Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Meets Web Content Accessibility Guidelines 2.1 Level AA standards for digital accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Section 508 Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Complies with Section 508 standards for federal information technology accessibility.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">ADA Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Adheres to Americans with Disabilities Act requirements for digital accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Screen Reader Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Fully compatible with VoiceOver, TalkBack, and other major screen readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted rounded-lg p-6 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Experience Flourish Anywhere</h3>
        <p className="text-muted-foreground mb-6">
          Flourish is optimized for all devices, with enhanced performance, offline capabilities, and accessibility features to ensure a seamless experience wherever you are.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={handleUpdateApp}>
            <Download className="mr-2 h-4 w-4" />
            Update to Latest Version
          </Button>
          <Button variant="outline" onClick={handleClearCache}>
            <RotateCw className="mr-2 h-4 w-4" />
            Clear Cache & Refresh
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileAppOptimization;

