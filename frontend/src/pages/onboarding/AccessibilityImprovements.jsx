import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Type, Keyboard, MousePointer, 
  Monitor, Volume2, VolumeX, Mic, MicOff,
  Sun, Moon, Zap, ZapOff, Maximize, Minimize,
  Sliders, Settings, Check, X, Info, HelpCircle,
  AlertTriangle, Bell, BellOff, RefreshCw, Save,
  Smartphone, Tablet, Laptop, Desktop, Headphones,
  MessageSquare, FileText, Image, Video, User,
  Heart, Activity, Calendar, Clock, Bookmark,
  ChevronRight, ChevronDown, ChevronUp, Plus, Minus,
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown, RotateCw
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

const AccessibilityImprovements = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('visual');
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(true);
  const [colorBlindMode, setColorBlindMode] = useState('none');
  const [textSize, setTextSize] = useState(100);
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [fontFamily, setFontFamily] = useState('system');
  const [focusIndicators, setFocusIndicators] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [readingGuide, setReadingGuide] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Sample accessibility profiles
  const accessibilityProfiles = [
    { 
      id: 'vision_impaired', 
      name: 'Vision Impairment', 
      description: 'Larger text, high contrast, and screen reader compatibility',
      settings: {
        highContrast: true,
        largeText: true,
        textSize: 150,
        lineSpacing: 2.0,
        screenReader: true,
        fontFamily: 'dyslexic',
        focusIndicators: true,
        captions: true,
        readingGuide: true,
        textToSpeech: true
      }
    },
    { 
      id: 'hearing_impaired', 
      name: 'Hearing Impairment', 
      description: 'Visual notifications, captions, and transcripts for audio content',
      settings: {
        captions: true,
        autoplay: false,
        textToSpeech: false,
        speechRecognition: false
      }
    },
    { 
      id: 'motor_impaired', 
      name: 'Motor Impairment', 
      description: 'Enhanced keyboard navigation and larger touch targets',
      settings: {
        keyboardNavigation: true,
        largeText: true,
        textSize: 120,
        focusIndicators: true
      }
    },
    { 
      id: 'cognitive_impaired', 
      name: 'Cognitive Impairment', 
      description: 'Simplified interface, reduced motion, and reading assistance',
      settings: {
        reduceMotion: true,
        readingGuide: true,
        lineSpacing: 2.0,
        fontFamily: 'dyslexic',
        autoplay: false
      }
    },
    { 
      id: 'color_blind', 
      name: 'Color Blindness', 
      description: 'Adjusted color palette for different types of color blindness',
      settings: {
        colorBlindMode: 'deuteranopia',
        highContrast: true,
        focusIndicators: true
      }
    },
    { 
      id: 'dyslexia', 
      name: 'Dyslexia', 
      description: 'Specialized font, increased spacing, and reading guide',
      settings: {
        fontFamily: 'dyslexic',
        lineSpacing: 2.0,
        readingGuide: true,
        textSize: 110
      }
    },
    { 
      id: 'light_sensitive', 
      name: 'Light Sensitivity', 
      description: 'Dark mode, reduced brightness, and reduced motion',
      settings: {
        darkMode: true,
        reduceMotion: true,
        highContrast: false
      }
    },
    { 
      id: 'senior', 
      name: 'Senior-Friendly', 
      description: 'Larger text, simplified interface, and enhanced readability',
      settings: {
        largeText: true,
        textSize: 140,
        lineSpacing: 1.8,
        highContrast: true,
        reduceMotion: true
      }
    }
  ];
  
  // Sample accessibility features
  const accessibilityFeatures = [
    {
      category: 'Visual',
      features: [
        {
          name: 'High Contrast Mode',
          description: 'Increases contrast between text and background for better readability',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Vision Impaired', 'Seniors', 'Color Blind'],
          icon: Eye
        },
        {
          name: 'Text Size Adjustment',
          description: 'Allows users to increase or decrease text size throughout the app',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Vision Impaired', 'Seniors', 'Dyslexic'],
          icon: Type
        },
        {
          name: 'Color Blind Modes',
          description: 'Adjusts color schemes for different types of color blindness',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Color Blind'],
          icon: Eye
        },
        {
          name: 'Dark Mode',
          description: 'Reduces eye strain and helps users with light sensitivity',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Light Sensitive', 'Vision Impaired'],
          icon: Moon
        },
        {
          name: 'Font Selection',
          description: 'Includes dyslexia-friendly fonts and customizable options',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Dyslexic', 'Vision Impaired'],
          icon: Type
        },
        {
          name: 'Line Spacing Adjustment',
          description: 'Allows users to increase space between lines for better readability',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Dyslexic', 'Vision Impaired', 'Cognitive Impaired'],
          icon: Type
        },
        {
          name: 'Reading Guide',
          description: 'Provides a movable guide to help users focus on specific text',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Dyslexic', 'Cognitive Impaired'],
          icon: FileText
        },
        {
          name: 'Focus Indicators',
          description: 'Highlights the currently focused element for keyboard navigation',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Motor Impaired', 'Vision Impaired'],
          icon: Maximize
        }
      ]
    },
    {
      category: 'Auditory',
      features: [
        {
          name: 'Closed Captions',
          description: 'Provides text alternatives for audio content',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Hearing Impaired'],
          icon: FileText
        },
        {
          name: 'Visual Notifications',
          description: 'Provides visual alternatives for audio alerts',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Hearing Impaired'],
          icon: Bell
        },
        {
          name: 'Text-to-Speech',
          description: 'Reads text content aloud for users with visual impairments',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Vision Impaired', 'Dyslexic'],
          icon: Volume2
        },
        {
          name: 'Speech Recognition',
          description: 'Allows users to control the app using voice commands',
          status: 'In Progress',
          impact: 'Medium',
          userGroups: ['Motor Impaired', 'Vision Impaired'],
          icon: Mic
        },
        {
          name: 'Audio Descriptions',
          description: 'Provides verbal descriptions of visual content',
          status: 'Planned',
          impact: 'Medium',
          userGroups: ['Vision Impaired'],
          icon: Volume2
        },
        {
          name: 'Volume Control',
          description: 'Allows users to adjust audio levels independently',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Hearing Impaired', 'Seniors'],
          icon: Volume2
        },
        {
          name: 'Audio Transcripts',
          description: 'Provides text transcripts for audio content',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Hearing Impaired', 'Cognitive Impaired'],
          icon: FileText
        },
        {
          name: 'Sound Alternatives',
          description: 'Provides haptic or visual alternatives for sound effects',
          status: 'In Progress',
          impact: 'Medium',
          userGroups: ['Hearing Impaired'],
          icon: Bell
        }
      ]
    },
    {
      category: 'Motor',
      features: [
        {
          name: 'Keyboard Navigation',
          description: 'Allows users to navigate the app using only the keyboard',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Motor Impaired', 'Vision Impaired'],
          icon: Keyboard
        },
        {
          name: 'Large Touch Targets',
          description: 'Increases the size of buttons and interactive elements',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Motor Impaired', 'Seniors'],
          icon: MousePointer
        },
        {
          name: 'Gesture Alternatives',
          description: 'Provides alternative ways to perform touch gestures',
          status: 'In Progress',
          impact: 'Medium',
          userGroups: ['Motor Impaired'],
          icon: MousePointer
        },
        {
          name: 'Sticky Keys',
          description: 'Allows modifier keys to remain active without being held down',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Motor Impaired'],
          icon: Keyboard
        },
        {
          name: 'Adjustable Timing',
          description: 'Allows users to adjust the timing of interactive elements',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Motor Impaired', 'Cognitive Impaired'],
          icon: Clock
        },
        {
          name: 'Voice Control',
          description: 'Allows users to control the app using voice commands',
          status: 'In Progress',
          impact: 'High',
          userGroups: ['Motor Impaired'],
          icon: Mic
        },
        {
          name: 'Switch Compatibility',
          description: 'Supports external switch devices for navigation',
          status: 'Planned',
          impact: 'High',
          userGroups: ['Motor Impaired'],
          icon: Zap
        },
        {
          name: 'Predictive Text',
          description: 'Suggests words to reduce typing effort',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Motor Impaired', 'Cognitive Impaired'],
          icon: Type
        }
      ]
    },
    {
      category: 'Cognitive',
      features: [
        {
          name: 'Simplified Interface',
          description: 'Provides a cleaner, more straightforward user interface',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Cognitive Impaired', 'Seniors'],
          icon: Minimize
        },
        {
          name: 'Reduced Motion',
          description: 'Minimizes animations and motion effects',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Cognitive Impaired', 'Vision Impaired'],
          icon: ZapOff
        },
        {
          name: 'Reading Guide',
          description: 'Provides a movable guide to help users focus on specific text',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Dyslexic', 'Cognitive Impaired'],
          icon: FileText
        },
        {
          name: 'Consistent Navigation',
          description: 'Maintains consistent navigation patterns throughout the app',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Cognitive Impaired', 'Seniors'],
          icon: Sliders
        },
        {
          name: 'Progress Tracking',
          description: 'Shows clear progress indicators for multi-step processes',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Cognitive Impaired'],
          icon: Activity
        },
        {
          name: 'Error Prevention',
          description: 'Helps users avoid and correct mistakes',
          status: 'Implemented',
          impact: 'High',
          userGroups: ['Cognitive Impaired', 'Seniors'],
          icon: AlertTriangle
        },
        {
          name: 'Memory Aids',
          description: 'Provides reminders and contextual help',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Cognitive Impaired', 'Seniors'],
          icon: HelpCircle
        },
        {
          name: 'Customizable Pace',
          description: 'Allows users to control the pace of interactions',
          status: 'Implemented',
          impact: 'Medium',
          userGroups: ['Cognitive Impaired', 'Seniors'],
          icon: Clock
        }
      ]
    }
  ];
  
  // Sample compliance standards
  const complianceStandards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA',
      status: 'Compliant',
      lastAudit: '2025-06-15',
      nextAudit: '2025-12-15',
      details: [
        { criterion: '1.1.1 Non-text Content', status: 'Pass' },
        { criterion: '1.2.1 Audio-only and Video-only', status: 'Pass' },
        { criterion: '1.2.2 Captions', status: 'Pass' },
        { criterion: '1.2.3 Audio Description or Media Alternative', status: 'Pass' },
        { criterion: '1.2.4 Captions (Live)', status: 'Pass' },
        { criterion: '1.2.5 Audio Description', status: 'Pass' },
        { criterion: '1.3.1 Info and Relationships', status: 'Pass' },
        { criterion: '1.3.2 Meaningful Sequence', status: 'Pass' },
        { criterion: '1.3.3 Sensory Characteristics', status: 'Pass' },
        { criterion: '1.3.4 Orientation', status: 'Pass' },
        { criterion: '1.3.5 Identify Input Purpose', status: 'Pass' },
        { criterion: '1.4.1 Use of Color', status: 'Pass' },
        { criterion: '1.4.2 Audio Control', status: 'Pass' },
        { criterion: '1.4.3 Contrast (Minimum)', status: 'Pass' },
        { criterion: '1.4.4 Resize Text', status: 'Pass' },
        { criterion: '1.4.5 Images of Text', status: 'Pass' },
        { criterion: '1.4.10 Reflow', status: 'Pass' },
        { criterion: '1.4.11 Non-text Contrast', status: 'Pass' },
        { criterion: '1.4.12 Text Spacing', status: 'Pass' },
        { criterion: '1.4.13 Content on Hover or Focus', status: 'Pass' },
        { criterion: '2.1.1 Keyboard', status: 'Pass' },
        { criterion: '2.1.2 No Keyboard Trap', status: 'Pass' },
        { criterion: '2.1.4 Character Key Shortcuts', status: 'Pass' },
        { criterion: '2.2.1 Timing Adjustable', status: 'Pass' },
        { criterion: '2.2.2 Pause, Stop, Hide', status: 'Pass' },
        { criterion: '2.3.1 Three Flashes or Below', status: 'Pass' },
        { criterion: '2.4.1 Bypass Blocks', status: 'Pass' },
        { criterion: '2.4.2 Page Titled', status: 'Pass' },
        { criterion: '2.4.3 Focus Order', status: 'Pass' },
        { criterion: '2.4.4 Link Purpose (In Context)', status: 'Pass' },
        { criterion: '2.4.5 Multiple Ways', status: 'Pass' },
        { criterion: '2.4.6 Headings and Labels', status: 'Pass' },
        { criterion: '2.4.7 Focus Visible', status: 'Pass' },
        { criterion: '2.5.1 Pointer Gestures', status: 'Pass' },
        { criterion: '2.5.2 Pointer Cancellation', status: 'Pass' },
        { criterion: '2.5.3 Label in Name', status: 'Pass' },
        { criterion: '2.5.4 Motion Actuation', status: 'Pass' },
        { criterion: '3.1.1 Language of Page', status: 'Pass' },
        { criterion: '3.1.2 Language of Parts', status: 'Pass' },
        { criterion: '3.2.1 On Focus', status: 'Pass' },
        { criterion: '3.2.2 On Input', status: 'Pass' },
        { criterion: '3.2.3 Consistent Navigation', status: 'Pass' },
        { criterion: '3.2.4 Consistent Identification', status: 'Pass' },
        { criterion: '3.3.1 Error Identification', status: 'Pass' },
        { criterion: '3.3.2 Labels or Instructions', status: 'Pass' },
        { criterion: '3.3.3 Error Suggestion', status: 'Pass' },
        { criterion: '3.3.4 Error Prevention', status: 'Pass' },
        { criterion: '4.1.1 Parsing', status: 'Pass' },
        { criterion: '4.1.2 Name, Role, Value', status: 'Pass' },
        { criterion: '4.1.3 Status Messages', status: 'Pass' }
      ]
    },
    {
      name: 'Section 508',
      description: 'U.S. federal accessibility requirements',
      status: 'Compliant',
      lastAudit: '2025-06-15',
      nextAudit: '2025-12-15',
      details: []
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act',
      status: 'Compliant',
      lastAudit: '2025-06-15',
      nextAudit: '2025-12-15',
      details: []
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility requirements for ICT products and services',
      status: 'Compliant',
      lastAudit: '2025-06-15',
      nextAudit: '2025-12-15',
      details: []
    },
    {
      name: 'AODA',
      description: 'Accessibility for Ontarians with Disabilities Act',
      status: 'Compliant',
      lastAudit: '2025-06-15',
      nextAudit: '2025-12-15',
      details: []
    }
  ];
  
  // Sample user feedback
  const userFeedback = [
    {
      id: 1,
      user: 'Alex M.',
      userType: 'Vision Impaired',
      rating: 4.5,
      date: '2025-06-28',
      comment: 'The high contrast mode and screen reader compatibility have made a huge difference in my ability to use the app. I can now navigate through all features independently.',
      improvements: 'Some images could use better alt text descriptions.'
    },
    {
      id: 2,
      user: 'Sarah J.',
      userType: 'Hearing Impaired',
      rating: 5.0,
      date: '2025-06-25',
      comment: 'I love that all video content has captions and that I can receive visual notifications instead of sound alerts. It makes the app fully accessible for me.',
      improvements: 'None, everything works perfectly for my needs.'
    },
    {
      id: 3,
      user: 'Michael T.',
      userType: 'Motor Impaired',
      rating: 4.0,
      date: '2025-06-22',
      comment: 'The keyboard navigation is excellent, and I appreciate the large touch targets. It makes the app much easier to use with my limited mobility.',
      improvements: 'Voice control would be a great addition for times when keyboard use is difficult.'
    },
    {
      id: 4,
      user: 'Emily R.',
      userType: 'Dyslexic',
      rating: 4.5,
      date: '2025-06-20',
      comment: 'The dyslexia-friendly font and adjustable line spacing have made reading in the app so much easier. The reading guide is also very helpful.',
      improvements: 'Would love to see more color customization options.'
    },
    {
      id: 5,
      user: 'David K.',
      userType: 'Color Blind',
      rating: 4.0,
      date: '2025-06-18',
      comment: 'The color blind modes have made a significant difference in my ability to distinguish important elements in the app.',
      improvements: 'Some charts and graphs could use additional patterns or labels to further improve accessibility.'
    }
  ];
  
  const handleToggleHighContrast = () => {
    setHighContrast(!highContrast);
    toast({
      title: `High Contrast Mode ${!highContrast ? 'Enabled' : 'Disabled'}`,
      description: `The app will now use ${!highContrast ? 'high contrast colors' : 'standard colors'} for better visibility.`,
      duration: 3000,
    });
  };
  
  const handleToggleLargeText = () => {
    setLargeText(!largeText);
    toast({
      title: `Large Text Mode ${!largeText ? 'Enabled' : 'Disabled'}`,
      description: `Text size will be ${!largeText ? 'increased' : 'set to standard size'} throughout the app.`,
      duration: 3000,
    });
  };
  
  const handleToggleReduceMotion = () => {
    setReduceMotion(!reduceMotion);
    toast({
      title: `Reduced Motion ${!reduceMotion ? 'Enabled' : 'Disabled'}`,
      description: `Animations and motion effects will be ${!reduceMotion ? 'minimized' : 'restored'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleScreenReader = () => {
    setScreenReader(!screenReader);
    toast({
      title: `Screen Reader Compatibility ${!screenReader ? 'Enabled' : 'Disabled'}`,
      description: `The app will now ${!screenReader ? 'optimize for screen readers' : 'use standard screen reader support'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleKeyboardNavigation = () => {
    setKeyboardNavigation(!keyboardNavigation);
    toast({
      title: `Keyboard Navigation ${!keyboardNavigation ? 'Enabled' : 'Disabled'}`,
      description: `The app will ${!keyboardNavigation ? 'now be fully navigable by keyboard' : 'require mouse or touch for some functions'}.`,
      duration: 3000,
    });
  };
  
  const handleColorBlindModeChange = (value) => {
    setColorBlindMode(value);
    toast({
      title: "Color Blind Mode Updated",
      description: `Color blind mode set to ${value === 'none' ? 'off' : value}.`,
      duration: 3000,
    });
  };
  
  const handleTextSizeChange = (value) => {
    setTextSize(value[0]);
    toast({
      title: "Text Size Updated",
      description: `Text size set to ${value[0]}%.`,
      duration: 3000,
    });
  };
  
  const handleLineSpacingChange = (value) => {
    setLineSpacing(value[0]);
    toast({
      title: "Line Spacing Updated",
      description: `Line spacing set to ${value[0]}.`,
      duration: 3000,
    });
  };
  
  const handleFontFamilyChange = (value) => {
    setFontFamily(value);
    toast({
      title: "Font Family Updated",
      description: `Font family set to ${value}.`,
      duration: 3000,
    });
  };
  
  const handleToggleFocusIndicators = () => {
    setFocusIndicators(!focusIndicators);
    toast({
      title: `Focus Indicators ${!focusIndicators ? 'Enabled' : 'Disabled'}`,
      description: `Focus indicators will ${!focusIndicators ? 'now be visible' : 'be less prominent'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleAutoplay = () => {
    setAutoplay(!autoplay);
    toast({
      title: `Autoplay ${!autoplay ? 'Enabled' : 'Disabled'}`,
      description: `Media will ${!autoplay ? 'automatically play' : 'wait for user action before playing'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleCaptions = () => {
    setCaptions(!captions);
    toast({
      title: `Captions ${!captions ? 'Enabled' : 'Disabled'}`,
      description: `Captions will ${!captions ? 'be shown' : 'be hidden'} for video content.`,
      duration: 3000,
    });
  };
  
  const handleToggleReadingGuide = () => {
    setReadingGuide(!readingGuide);
    toast({
      title: `Reading Guide ${!readingGuide ? 'Enabled' : 'Disabled'}`,
      description: `Reading guide will ${!readingGuide ? 'be available' : 'be hidden'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleTextToSpeech = () => {
    setTextToSpeech(!textToSpeech);
    toast({
      title: `Text-to-Speech ${!textToSpeech ? 'Enabled' : 'Disabled'}`,
      description: `Text-to-speech functionality will ${!textToSpeech ? 'be available' : 'be disabled'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleSpeechRecognition = () => {
    setSpeechRecognition(!speechRecognition);
    toast({
      title: `Speech Recognition ${!speechRecognition ? 'Enabled' : 'Disabled'}`,
      description: `Speech recognition functionality will ${!speechRecognition ? 'be available' : 'be disabled'}.`,
      duration: 3000,
    });
  };
  
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast({
      title: `Dark Mode ${!darkMode ? 'Enabled' : 'Disabled'}`,
      description: `The app will use a ${!darkMode ? 'dark' : 'light'} color scheme.`,
      duration: 3000,
    });
  };
  
  const handleApplyProfile = (profile) => {
    // Apply the selected accessibility profile
    setHighContrast(profile.settings.highContrast || false);
    setLargeText(profile.settings.largeText || false);
    setTextSize(profile.settings.textSize || 100);
    setLineSpacing(profile.settings.lineSpacing || 1.5);
    setScreenReader(profile.settings.screenReader || false);
    setFontFamily(profile.settings.fontFamily || 'system');
    setFocusIndicators(profile.settings.focusIndicators || true);
    setCaptions(profile.settings.captions || true);
    setReadingGuide(profile.settings.readingGuide || false);
    setTextToSpeech(profile.settings.textToSpeech || false);
    setReduceMotion(profile.settings.reduceMotion || false);
    setColorBlindMode(profile.settings.colorBlindMode || 'none');
    setDarkMode(profile.settings.darkMode || false);
    
    toast({
      title: "Accessibility Profile Applied",
      description: `The ${profile.name} profile has been applied.`,
      duration: 3000,
    });
  };
  
  const getStatusBadge = (status) => {
    if (status === 'Implemented') {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Implemented</Badge>;
    } else if (status === 'In Progress') {
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">In Progress</Badge>;
    } else if (status === 'Planned') {
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Planned</Badge>;
    } else if (status === 'Compliant') {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Compliant</Badge>;
    }
  };
  
  const getImpactBadge = (impact) => {
    if (impact === 'High') {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">High Impact</Badge>;
    } else if (impact === 'Medium') {
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Medium Impact</Badge>;
    } else if (impact === 'Low') {
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Low Impact</Badge>;
    }
  };
  
  const getRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {halfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "container max-w-6xl py-8",
        highContrast && "high-contrast",
        largeText && "large-text",
        reduceMotion && "reduce-motion",
        darkMode && "dark-mode"
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Accessibility Improvements</h1>
          <p className="text-muted-foreground">
            Making Flourish accessible to everyone, regardless of abilities.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={highContrast ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleHighContrast}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  High Contrast
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle High Contrast Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={largeText ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleLargeText}
                >
                  <Type className="mr-2 h-4 w-4" />
                  Large Text
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Large Text Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={reduceMotion ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleReduceMotion}
                >
                  <ZapOff className="mr-2 h-4 w-4" />
                  Reduce Motion
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Reduced Motion</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant={darkMode ? "default" : "outline"} 
                  size="sm"
                  onClick={handleToggleDarkMode}
                >
                  {darkMode ? (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Dark Mode</p>
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
                <DialogTitle>About Accessibility Improvements</DialogTitle>
                <DialogDescription>
                  Accessibility improvements make the Flourish app usable by everyone, regardless of abilities.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>Key Accessibility Features:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>High contrast mode for better visibility</li>
                  <li>Text size adjustment for easier reading</li>
                  <li>Screen reader compatibility for vision impaired users</li>
                  <li>Keyboard navigation for motor impaired users</li>
                  <li>Color blind modes for different types of color blindness</li>
                  <li>Reduced motion for users with vestibular disorders</li>
                  <li>Captions and transcripts for hearing impaired users</li>
                  <li>Dyslexia-friendly fonts and spacing options</li>
                </ul>
                <p className="text-sm">
                  You can customize these settings to meet your specific needs.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">WCAG 2.1 AA</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Visual Features</div>
              <div className="text-xs text-muted-foreground">8 Implemented</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Volume2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Auditory Features</div>
              <div className="text-xs text-muted-foreground">6 Implemented</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Keyboard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Motor Features</div>
              <div className="text-xs text-muted-foreground">6 Implemented</div>
            </div>
          </div>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="visual">Visual</TabsTrigger>
          <TabsTrigger value="auditory">Auditory</TabsTrigger>
          <TabsTrigger value="motor">Motor</TabsTrigger>
          <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Visual Accessibility Features</h3>
                  
                  <div className="space-y-6">
                    {accessibilityFeatures.find(category => category.category === 'Visual').features.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{feature.name}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {getImpactBadge(feature.impact)}
                          {feature.userGroups.map((group, i) => (
                            <Badge key={i} variant="secondary">{group}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Visual Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Label className="text-base">High Contrast</Label>
                      <Switch 
                        checked={highContrast} 
                        onCheckedChange={handleToggleHighContrast} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Large Text</Label>
                      <Switch 
                        checked={largeText} 
                        onCheckedChange={handleToggleLargeText} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Text Size</Label>
                        <span className="text-sm">{textSize}%</span>
                      </div>
                      <Slider
                        defaultValue={[textSize]}
                        min={80}
                        max={200}
                        step={10}
                        onValueChange={handleTextSizeChange}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Line Spacing</Label>
                        <span className="text-sm">{lineSpacing.toFixed(1)}</span>
                      </div>
                      <Slider
                        defaultValue={[lineSpacing]}
                        min={1.0}
                        max={3.0}
                        step={0.1}
                        onValueChange={handleLineSpacingChange}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Font Family</Label>
                      <Select 
                        value={fontFamily} 
                        onValueChange={handleFontFamilyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">System Default</SelectItem>
                          <SelectItem value="sans-serif">Sans Serif</SelectItem>
                          <SelectItem value="serif">Serif</SelectItem>
                          <SelectItem value="monospace">Monospace</SelectItem>
                          <SelectItem value="dyslexic">Dyslexia Friendly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Color Blind Mode</Label>
                      <Select 
                        value={colorBlindMode} 
                        onValueChange={handleColorBlindModeChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="protanopia">Protanopia (Red-Blind)</SelectItem>
                          <SelectItem value="deuteranopia">Deuteranopia (Green-Blind)</SelectItem>
                          <SelectItem value="tritanopia">Tritanopia (Blue-Blind)</SelectItem>
                          <SelectItem value="achromatopsia">Achromatopsia (No Color)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Dark Mode</Label>
                      <Switch 
                        checked={darkMode} 
                        onCheckedChange={handleToggleDarkMode} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Focus Indicators</Label>
                      <Switch 
                        checked={focusIndicators} 
                        onCheckedChange={handleToggleFocusIndicators} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Reading Guide</Label>
                      <Switch 
                        checked={readingGuide} 
                        onCheckedChange={handleToggleReadingGuide} 
                      />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Visual Accessibility Profiles</h3>
                  
                  <div className="space-y-3">
                    {accessibilityProfiles
                      .filter(profile => ['vision_impaired', 'color_blind', 'dyslexia', 'light_sensitive'].includes(profile.id))
                      .map((profile, index) => (
                        <Card key={index} className="border p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-medium">{profile.name}</div>
                              <div className="text-sm text-muted-foreground">{profile.description}</div>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2"
                            onClick={() => handleApplyProfile(profile)}
                          >
                            Apply Profile
                          </Button>
                        </Card>
                      ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="auditory" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Auditory Accessibility Features</h3>
                  
                  <div className="space-y-6">
                    {accessibilityFeatures.find(category => category.category === 'Auditory').features.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{feature.name}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {getImpactBadge(feature.impact)}
                          {feature.userGroups.map((group, i) => (
                            <Badge key={i} variant="secondary">{group}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Auditory Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Closed Captions</Label>
                      <Switch 
                        checked={captions} 
                        onCheckedChange={handleToggleCaptions} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Autoplay Media</Label>
                      <Switch 
                        checked={autoplay} 
                        onCheckedChange={handleToggleAutoplay} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Text-to-Speech</Label>
                      <Switch 
                        checked={textToSpeech} 
                        onCheckedChange={handleToggleTextToSpeech} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Speech Recognition</Label>
                      <Switch 
                        checked={speechRecognition} 
                        onCheckedChange={handleToggleSpeechRecognition} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Caption Style</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="high-contrast">High Contrast</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Caption Position</Label>
                      <Select defaultValue="bottom">
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bottom">Bottom</SelectItem>
                          <SelectItem value="top">Top</SelectItem>
                          <SelectItem value="floating">Floating</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Text-to-Speech Voice</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="neural">Neural (Premium)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Speech Rate</Label>
                        <span className="text-sm">Normal</span>
                      </div>
                      <Slider
                        defaultValue={[1]}
                        min={0.5}
                        max={2}
                        step={0.1}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Slower</span>
                        <span>Faster</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Auditory Accessibility Profiles</h3>
                  
                  <div className="space-y-3">
                    {accessibilityProfiles
                      .filter(profile => ['hearing_impaired'].includes(profile.id))
                      .map((profile, index) => (
                        <Card key={index} className="border p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-medium">{profile.name}</div>
                              <div className="text-sm text-muted-foreground">{profile.description}</div>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2"
                            onClick={() => handleApplyProfile(profile)}
                          >
                            Apply Profile
                          </Button>
                        </Card>
                      ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="motor" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Motor Accessibility Features</h3>
                  
                  <div className="space-y-6">
                    {accessibilityFeatures.find(category => category.category === 'Motor').features.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{feature.name}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {getImpactBadge(feature.impact)}
                          {feature.userGroups.map((group, i) => (
                            <Badge key={i} variant="secondary">{group}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Motor Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Keyboard Navigation</Label>
                      <Switch 
                        checked={keyboardNavigation} 
                        onCheckedChange={handleToggleKeyboardNavigation} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Focus Indicators</Label>
                      <Switch 
                        checked={focusIndicators} 
                        onCheckedChange={handleToggleFocusIndicators} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Speech Recognition</Label>
                      <Switch 
                        checked={speechRecognition} 
                        onCheckedChange={handleToggleSpeechRecognition} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Touch Target Size</Label>
                      <Select defaultValue="large">
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="extra-large">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Interaction Timing</Label>
                        <span className="text-sm">Standard</span>
                      </div>
                      <Slider
                        defaultValue={[1]}
                        min={0.5}
                        max={3}
                        step={0.5}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Faster</span>
                        <span>Slower</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Sticky Keys</Label>
                      <Switch defaultChecked={false} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Predictive Text</Label>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Motor Accessibility Profiles</h3>
                  
                  <div className="space-y-3">
                    {accessibilityProfiles
                      .filter(profile => ['motor_impaired'].includes(profile.id))
                      .map((profile, index) => (
                        <Card key={index} className="border p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-medium">{profile.name}</div>
                              <div className="text-sm text-muted-foreground">{profile.description}</div>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2"
                            onClick={() => handleApplyProfile(profile)}
                          >
                            Apply Profile
                          </Button>
                        </Card>
                      ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="cognitive" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Cognitive Accessibility Features</h3>
                  
                  <div className="space-y-6">
                    {accessibilityFeatures.find(category => category.category === 'Cognitive').features.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{feature.name}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {getImpactBadge(feature.impact)}
                          {feature.userGroups.map((group, i) => (
                            <Badge key={i} variant="secondary">{group}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Cognitive Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Reduced Motion</Label>
                      <Switch 
                        checked={reduceMotion} 
                        onCheckedChange={handleToggleReduceMotion} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Reading Guide</Label>
                      <Switch 
                        checked={readingGuide} 
                        onCheckedChange={handleToggleReadingGuide} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Label className="text-base">Line Spacing</Label>
                        <span className="text-sm">{lineSpacing.toFixed(1)}</span>
                      </div>
                      <Slider
                        defaultValue={[lineSpacing]}
                        min={1.0}
                        max={3.0}
                        step={0.1}
                        onValueChange={handleLineSpacingChange}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Font Family</Label>
                      <Select 
                        value={fontFamily} 
                        onValueChange={handleFontFamilyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">System Default</SelectItem>
                          <SelectItem value="sans-serif">Sans Serif</SelectItem>
                          <SelectItem value="serif">Serif</SelectItem>
                          <SelectItem value="monospace">Monospace</SelectItem>
                          <SelectItem value="dyslexic">Dyslexia Friendly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Autoplay Media</Label>
                      <Switch 
                        checked={autoplay} 
                        onCheckedChange={handleToggleAutoplay} 
                      />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <Label className="text-base block mb-2">Interface Complexity</Label>
                      <Select defaultValue="simplified">
                        <SelectTrigger>
                          <SelectValue placeholder="Select complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="simplified">Simplified</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Memory Aids</Label>
                      <Switch defaultChecked={true} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <Label className="text-base">Progress Tracking</Label>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Cognitive Accessibility Profiles</h3>
                  
                  <div className="space-y-3">
                    {accessibilityProfiles
                      .filter(profile => ['cognitive_impaired', 'dyslexia', 'senior'].includes(profile.id))
                      .map((profile, index) => (
                        <Card key={index} className="border p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="font-medium">{profile.name}</div>
                              <div className="text-sm text-muted-foreground">{profile.description}</div>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-2"
                            onClick={() => handleApplyProfile(profile)}
                          >
                            Apply Profile
                          </Button>
                        </Card>
                      ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="compliance" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Accessibility Compliance Standards</h3>
                  
                  <div className="space-y-6">
                    {complianceStandards.map((standard, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{standard.name}</div>
                            <div className="text-sm text-muted-foreground">{standard.description}</div>
                          </div>
                          {getStatusBadge(standard.status)}
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground mt-2">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Last audit: {standard.lastAudit} | Next audit: {standard.nextAudit}</span>
                        </div>
                        
                        {standard.details.length > 0 && (
                          <Accordion type="single" collapsible className="w-full mt-3">
                            <AccordionItem value="details">
                              <AccordionTrigger className="text-sm">View Compliance Details</AccordionTrigger>
                              <AccordionContent>
                                <div className="max-h-60 overflow-y-auto">
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Criterion</TableHead>
                                        <TableHead className="text-right">Status</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {standard.details.map((detail, i) => (
                                        <TableRow key={i}>
                                          <TableCell className="font-medium">{detail.criterion}</TableCell>
                                          <TableCell className="text-right">
                                            <Badge variant={detail.status === 'Pass' ? 'outline' : 'destructive'} className={detail.status === 'Pass' ? 'bg-green-50 text-green-700 border-green-200' : ''}>
                                              {detail.status}
                                            </Badge>
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">User Feedback</h3>
                  
                  <div className="space-y-6">
                    {userFeedback.map((feedback, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{feedback.user}</div>
                            <div className="text-sm text-muted-foreground">{feedback.userType}</div>
                          </div>
                          <div className="flex items-center">
                            {getRatingStars(feedback.rating)}
                          </div>
                        </div>
                        
                        <div className="text-sm mt-2">{feedback.comment}</div>
                        
                        {feedback.improvements !== 'None, everything works perfectly for my needs.' && (
                          <div className="mt-2">
                            <div className="text-sm font-medium">Suggested Improvements:</div>
                            <div className="text-sm text-muted-foreground">{feedback.improvements}</div>
                          </div>
                        )}
                        
                        <div className="flex items-center text-xs text-muted-foreground mt-3">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{feedback.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Compliance Summary</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Compliance</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>WCAG 2.1 AA</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Section 508</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>ADA</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>EN 301 549</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AODA</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">User Satisfaction</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Satisfaction</span>
                        <span className="font-medium">4.4/5.0</span>
                      </div>
                      <Progress value={88} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Vision Impaired Users</span>
                        <span className="font-medium">4.5/5.0</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Hearing Impaired Users</span>
                        <span className="font-medium">5.0/5.0</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Motor Impaired Users</span>
                        <span className="font-medium">4.0/5.0</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Dyslexic Users</span>
                        <span className="font-medium">4.5/5.0</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Color Blind Users</span>
                        <span className="font-medium">4.0/5.0</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Accessibility Resources</h3>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Accessibility Statement
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      WCAG 2.1 Compliance Report
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Accessibility User Guide
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Accessibility Team
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Accessibility FAQ
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Accessibility Profiles</h3>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Custom Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {accessibilityProfiles.map((profile, index) => (
                <Card key={index} className="border p-4">
                  <div className="flex flex-col h-full">
                    <div className="mb-2">
                      <div className="font-medium">{profile.name}</div>
                      <div className="text-sm text-muted-foreground line-clamp-2">{profile.description}</div>
                    </div>
                    <div className="mt-auto pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleApplyProfile(profile)}
                      >
                        Apply Profile
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

// Helper components for the rating stars
const Star = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

const StarHalf = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
};

export default AccessibilityImprovements;

