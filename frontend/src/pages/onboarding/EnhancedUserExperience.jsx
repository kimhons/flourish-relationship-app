import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
  Slider,
  Button,
  Tabs,
  Tab,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Alert,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  Rating,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Palette as PaletteIcon,
  Navigation as NavigationIcon,
  Accessibility as AccessibilityIcon,
  Speed as PerformanceIcon,
  Dashboard as DashboardIcon,
  Tune as CustomizeIcon,
  Visibility as VisibilityIcon,
  VolumeUp as VolumeIcon,
  Keyboard as KeyboardIcon,
  RecordVoiceOver as VoiceIcon,
  TouchApp as TouchIcon,
  Psychology as CognitiveIcon,
  Lightbulb as ThemeIcon,
  TextFields as TypographyIcon,
  ViewCompact as LayoutIcon,
  ColorLens as ColorIcon,
  Straighten as DensityIcon,
  Route as JourneyIcon,
  Explore as DiscoveryIcon,
  Workflow as WorkflowIcon,
  TrendingUp as OptimizationIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  AutoAwesome as PersonalizationIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
  Devices as DevicesIcon,
  NetworkCheck as NetworkIcon,
  BatteryChargingFull as BatteryIcon,
  DataUsage as DataIcon
} from '@mui/icons-material';

const EnhancedUserExperience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [interfaceCustomization, setInterfaceCustomization] = useState({
    theme: 'adaptive',
    colorScheme: 'flourish',
    typography: 'comfortable',
    layoutDensity: 'medium',
    visualEffects: true,
    animations: true,
    iconStyle: 'rounded',
    cardStyle: 'elevated'
  });

  const [userJourneyOptimization, setUserJourneyOptimization] = useState({
    onboardingStyle: 'guided',
    navigationPreference: 'bottom-tabs',
    featureDiscovery: 'progressive',
    workflowPersonalization: true,
    shortcutsEnabled: true,
    contextualHelp: true,
    progressTracking: 'detailed',
    milestoneNotifications: true
  });

  const [accessibilityEnhancement, setAccessibilityEnhancement] = useState({
    screenReader: false,
    keyboardNavigation: false,
    voiceCommands: false,
    motorAccessibility: false,
    cognitiveAccessibility: false,
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    colorBlindSupport: false,
    focusIndicators: true
  });

  const [performancePersonalization, setPerformancePersonalization] = useState({
    loadingOptimization: 'balanced',
    dataUsageControl: 'standard',
    batteryManagement: 'adaptive',
    networkAdaptation: true,
    cacheManagement: 'intelligent',
    imageQuality: 'adaptive',
    videoAutoplay: true,
    backgroundSync: true,
    preloadContent: true,
    offlineMode: false
  });

  const [uxScore, setUxScore] = useState(0);
  const [usabilityMetrics, setUsabilityMetrics] = useState({
    customizationLevel: 0,
    accessibilityScore: 0,
    performanceScore: 0,
    journeyOptimization: 0
  });

  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  // Calculate UX score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Interface customization (25 points)
      const customizationOptions = Object.values(interfaceCustomization).filter(value => 
        value === true || (typeof value === 'string' && value !== 'default')
      ).length;
      const customizationScore = Math.min(customizationOptions / 6, 1) * 25;
      score += customizationScore;
      
      // User journey optimization (25 points)
      const journeyOptions = Object.values(userJourneyOptimization).filter(value => value === true).length;
      const journeyScore = Math.min(journeyOptions / 6, 1) * 25;
      score += journeyScore;
      
      // Accessibility enhancement (25 points)
      const accessibilityOptions = Object.values(accessibilityEnhancement).filter(value => value === true).length;
      const accessibilityScore = Math.min(accessibilityOptions / 8, 1) * 25;
      score += accessibilityScore;
      
      // Performance personalization (25 points)
      const performanceOptions = Object.values(performancePersonalization).filter(value => 
        value === true || (typeof value === 'string' && value !== 'default')
      ).length;
      const performanceScore = Math.min(performanceOptions / 8, 1) * 25;
      score += performanceScore;
      
      setUxScore(Math.round(score));
      
      // Update individual metrics
      setUsabilityMetrics({
        customizationLevel: Math.round(customizationScore * 4),
        accessibilityScore: Math.round(accessibilityScore * 4),
        performanceScore: Math.round(performanceScore * 4),
        journeyOptimization: Math.round(journeyScore * 4)
      });
    };

    calculateScore();
  }, [interfaceCustomization, userJourneyOptimization, accessibilityEnhancement, performancePersonalization]);

  const handleInterfaceChange = (setting, value) => {
    setInterfaceCustomization(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleJourneyChange = (setting, value) => {
    setUserJourneyOptimization(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleAccessibilityChange = (setting, value) => {
    setAccessibilityEnhancement(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handlePerformanceChange = (setting, value) => {
    setPerformancePersonalization(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Exceptional', color: 'success', description: 'Outstanding user experience' };
    if (score >= 75) return { level: 'Excellent', color: 'info', description: 'Highly optimized experience' };
    if (score >= 60) return { level: 'Good', color: 'warning', description: 'Well-configured experience' };
    return { level: 'Basic', color: 'error', description: 'Consider more customization' };
  };

  const scoreInfo = getScoreLevel(uxScore);

  const renderInterfaceCustomization = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PaletteIcon color="primary" />
        Interface Customization
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Personalize your interface to match your style and preferences. These settings affect the overall 
        look and feel of your Flourish experience.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeIcon />
                Theme Selection
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Theme Mode</InputLabel>
                <Select
                  value={interfaceCustomization.theme}
                  onChange={(e) => handleInterfaceChange('theme', e.target.value)}
                  label="Theme Mode"
                >
                  <MenuItem value="light">Light Theme</MenuItem>
                  <MenuItem value="dark">Dark Theme</MenuItem>
                  <MenuItem value="adaptive">Adaptive (System)</MenuItem>
                  <MenuItem value="auto">Auto (Time-based)</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Color Scheme</InputLabel>
                <Select
                  value={interfaceCustomization.colorScheme}
                  onChange={(e) => handleInterfaceChange('colorScheme', e.target.value)}
                  label="Color Scheme"
                >
                  <MenuItem value="flourish">Flourish Original</MenuItem>
                  <MenuItem value="romantic">Romantic Pink</MenuItem>
                  <MenuItem value="elegant">Elegant Purple</MenuItem>
                  <MenuItem value="modern">Modern Blue</MenuItem>
                  <MenuItem value="warm">Warm Orange</MenuItem>
                  <MenuItem value="nature">Nature Green</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TypographyIcon />
                Typography & Layout
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Typography Style</InputLabel>
                <Select
                  value={interfaceCustomization.typography}
                  onChange={(e) => handleInterfaceChange('typography', e.target.value)}
                  label="Typography Style"
                >
                  <MenuItem value="compact">Compact</MenuItem>
                  <MenuItem value="comfortable">Comfortable</MenuItem>
                  <MenuItem value="spacious">Spacious</MenuItem>
                  <MenuItem value="large">Large Text</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Layout Density</InputLabel>
                <Select
                  value={interfaceCustomization.layoutDensity}
                  onChange={(e) => handleInterfaceChange('layoutDensity', e.target.value)}
                  label="Layout Density"
                >
                  <MenuItem value="compact">Compact</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="spacious">Spacious</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Visual Effects
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={interfaceCustomization.visualEffects}
                    onChange={(e) => handleInterfaceChange('visualEffects', e.target.checked)}
                  />
                }
                label="Enable Visual Effects"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={interfaceCustomization.animations}
                    onChange={(e) => handleInterfaceChange('animations', e.target.checked)}
                  />
                }
                label="Enable Animations"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Style Preferences
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Icon Style</InputLabel>
                <Select
                  value={interfaceCustomization.iconStyle}
                  onChange={(e) => handleInterfaceChange('iconStyle', e.target.value)}
                  label="Icon Style"
                >
                  <MenuItem value="rounded">Rounded</MenuItem>
                  <MenuItem value="sharp">Sharp</MenuItem>
                  <MenuItem value="outlined">Outlined</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Card Style</InputLabel>
                <Select
                  value={interfaceCustomization.cardStyle}
                  onChange={(e) => handleInterfaceChange('cardStyle', e.target.value)}
                  label="Card Style"
                >
                  <MenuItem value="flat">Flat</MenuItem>
                  <MenuItem value="elevated">Elevated</MenuItem>
                  <MenuItem value="outlined">Outlined</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderUserJourneyOptimization = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <NavigationIcon color="primary" />
        User Journey Optimization
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Optimize your user journey and workflow to match your preferences and usage patterns. 
        These settings help streamline your experience and improve efficiency.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <JourneyIcon />
                Onboarding & Navigation
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Onboarding Style</InputLabel>
                <Select
                  value={userJourneyOptimization.onboardingStyle}
                  onChange={(e) => handleJourneyChange('onboardingStyle', e.target.value)}
                  label="Onboarding Style"
                >
                  <MenuItem value="minimal">Minimal</MenuItem>
                  <MenuItem value="guided">Guided Tour</MenuItem>
                  <MenuItem value="interactive">Interactive</MenuItem>
                  <MenuItem value="comprehensive">Comprehensive</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Navigation Preference</InputLabel>
                <Select
                  value={userJourneyOptimization.navigationPreference}
                  onChange={(e) => handleJourneyChange('navigationPreference', e.target.value)}
                  label="Navigation Preference"
                >
                  <MenuItem value="bottom-tabs">Bottom Tabs</MenuItem>
                  <MenuItem value="side-drawer">Side Drawer</MenuItem>
                  <MenuItem value="top-tabs">Top Tabs</MenuItem>
                  <MenuItem value="floating">Floating Menu</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <DiscoveryIcon />
                Feature Discovery
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Discovery Style</InputLabel>
                <Select
                  value={userJourneyOptimization.featureDiscovery}
                  onChange={(e) => handleJourneyChange('featureDiscovery', e.target.value)}
                  label="Discovery Style"
                >
                  <MenuItem value="none">No Guidance</MenuItem>
                  <MenuItem value="subtle">Subtle Hints</MenuItem>
                  <MenuItem value="progressive">Progressive Disclosure</MenuItem>
                  <MenuItem value="comprehensive">Full Feature Tour</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Progress Tracking</InputLabel>
                <Select
                  value={userJourneyOptimization.progressTracking}
                  onChange={(e) => handleJourneyChange('progressTracking', e.target.value)}
                  label="Progress Tracking"
                >
                  <MenuItem value="minimal">Minimal</MenuItem>
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="detailed">Detailed</MenuItem>
                  <MenuItem value="comprehensive">Comprehensive</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkflowIcon />
                Workflow Enhancement
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={userJourneyOptimization.workflowPersonalization}
                        onChange={(e) => handleJourneyChange('workflowPersonalization', e.target.checked)}
                      />
                    }
                    label="Workflow Personalization"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={userJourneyOptimization.shortcutsEnabled}
                        onChange={(e) => handleJourneyChange('shortcutsEnabled', e.target.checked)}
                      />
                    }
                    label="Keyboard Shortcuts"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={userJourneyOptimization.contextualHelp}
                        onChange={(e) => handleJourneyChange('contextualHelp', e.target.checked)}
                      />
                    }
                    label="Contextual Help"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={userJourneyOptimization.milestoneNotifications}
                        onChange={(e) => handleJourneyChange('milestoneNotifications', e.target.checked)}
                      />
                    }
                    label="Milestone Notifications"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAccessibilityEnhancement = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccessibilityIcon color="primary" />
        Accessibility Enhancement
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Configure accessibility features to ensure Flourish works perfectly for your needs. 
        We're committed to making our platform accessible to everyone.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <VisibilityIcon />
                Visual Accessibility
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.highContrast}
                    onChange={(e) => handleAccessibilityChange('highContrast', e.target.checked)}
                  />
                }
                label="High Contrast Mode"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.largeText}
                    onChange={(e) => handleAccessibilityChange('largeText', e.target.checked)}
                  />
                }
                label="Large Text"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.reducedMotion}
                    onChange={(e) => handleAccessibilityChange('reducedMotion', e.target.checked)}
                  />
                }
                label="Reduced Motion"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.colorBlindSupport}
                    onChange={(e) => handleAccessibilityChange('colorBlindSupport', e.target.checked)}
                  />
                }
                label="Color Blind Support"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <KeyboardIcon />
                Input Accessibility
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.screenReader}
                    onChange={(e) => handleAccessibilityChange('screenReader', e.target.checked)}
                  />
                }
                label="Screen Reader Optimization"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.keyboardNavigation}
                    onChange={(e) => handleAccessibilityChange('keyboardNavigation', e.target.checked)}
                  />
                }
                label="Enhanced Keyboard Navigation"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.voiceCommands}
                    onChange={(e) => handleAccessibilityChange('voiceCommands', e.target.checked)}
                  />
                }
                label="Voice Commands"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.focusIndicators}
                    onChange={(e) => handleAccessibilityChange('focusIndicators', e.target.checked)}
                  />
                }
                label="Enhanced Focus Indicators"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TouchIcon />
                Motor Accessibility
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.motorAccessibility}
                    onChange={(e) => handleAccessibilityChange('motorAccessibility', e.target.checked)}
                  />
                }
                label="Motor Accessibility Features"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, ml: 4 }}>
                Includes larger touch targets, gesture alternatives, and timing adjustments
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CognitiveIcon />
                Cognitive Accessibility
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={accessibilityEnhancement.cognitiveAccessibility}
                    onChange={(e) => handleAccessibilityChange('cognitiveAccessibility', e.target.checked)}
                  />
                }
                label="Cognitive Accessibility Features"
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, ml: 4 }}>
                Includes simplified language, clear instructions, and memory aids
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPerformancePersonalization = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PerformanceIcon color="primary" />
        Performance Personalization
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Optimize performance settings based on your device capabilities and preferences. 
        These settings help balance functionality with resource usage.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <OptimizationIcon />
                Loading & Performance
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Loading Optimization</InputLabel>
                <Select
                  value={performancePersonalization.loadingOptimization}
                  onChange={(e) => handlePerformanceChange('loadingOptimization', e.target.value)}
                  label="Loading Optimization"
                >
                  <MenuItem value="fast">Fast (Less features)</MenuItem>
                  <MenuItem value="balanced">Balanced</MenuItem>
                  <MenuItem value="quality">Quality (More features)</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Cache Management</InputLabel>
                <Select
                  value={performancePersonalization.cacheManagement}
                  onChange={(e) => handlePerformanceChange('cacheManagement', e.target.value)}
                  label="Cache Management"
                >
                  <MenuItem value="minimal">Minimal Cache</MenuItem>
                  <MenuItem value="intelligent">Intelligent Cache</MenuItem>
                  <MenuItem value="aggressive">Aggressive Cache</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <DataIcon />
                Data & Network
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Data Usage Control</InputLabel>
                <Select
                  value={performancePersonalization.dataUsageControl}
                  onChange={(e) => handlePerformanceChange('dataUsageControl', e.target.value)}
                  label="Data Usage Control"
                >
                  <MenuItem value="minimal">Data Saver</MenuItem>
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="unlimited">Unlimited</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Image Quality</InputLabel>
                <Select
                  value={performancePersonalization.imageQuality}
                  onChange={(e) => handlePerformanceChange('imageQuality', e.target.value)}
                  label="Image Quality"
                >
                  <MenuItem value="low">Low Quality</MenuItem>
                  <MenuItem value="adaptive">Adaptive Quality</MenuItem>
                  <MenuItem value="high">High Quality</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <BatteryIcon />
                Battery Management
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Battery Management</InputLabel>
                <Select
                  value={performancePersonalization.batteryManagement}
                  onChange={(e) => handlePerformanceChange('batteryManagement', e.target.value)}
                  label="Battery Management"
                >
                  <MenuItem value="power-saver">Power Saver</MenuItem>
                  <MenuItem value="adaptive">Adaptive</MenuItem>
                  <MenuItem value="performance">Performance</MenuItem>
                </Select>
              </FormControl>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={performancePersonalization.backgroundSync}
                    onChange={(e) => handlePerformanceChange('backgroundSync', e.target.checked)}
                  />
                }
                label="Background Sync"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <NetworkIcon />
                Network & Offline
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={performancePersonalization.networkAdaptation}
                    onChange={(e) => handlePerformanceChange('networkAdaptation', e.target.checked)}
                  />
                }
                label="Network Adaptation"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={performancePersonalization.preloadContent}
                    onChange={(e) => handlePerformanceChange('preloadContent', e.target.checked)}
                  />
                }
                label="Preload Content"
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={performancePersonalization.offlineMode}
                    onChange={(e) => handlePerformanceChange('offlineMode', e.target.checked)}
                  />
                }
                label="Offline Mode"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Enhanced User Experience
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Personalize every aspect of your Flourish experience with comprehensive customization options 
          for interface, accessibility, performance, and user journey optimization.
        </Typography>

        {/* UX Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {uxScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    UX Optimization Score
                  </Typography>
                  <Chip 
                    label={scoreInfo.level} 
                    sx={{ 
                      mt: 1, 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 600 
                    }} 
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {usabilityMetrics.customizationLevel}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Customization
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {usabilityMetrics.accessibilityScore}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Accessibility
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {usabilityMetrics.performanceScore}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Performance
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {usabilityMetrics.journeyOptimization}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Journey
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            label="Interface Customization" 
            icon={<PaletteIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="User Journey Optimization" 
            icon={<NavigationIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Accessibility Enhancement" 
            icon={<AccessibilityIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Performance Personalization" 
            icon={<PerformanceIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderInterfaceCustomization()}
          {activeTab === 1 && renderUserJourneyOptimization()}
          {activeTab === 2 && renderAccessibilityEnhancement()}
          {activeTab === 3 && renderPerformancePersonalization()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
          startIcon={<SettingsIcon />}
        >
          {showAdvancedOptions ? 'Hide' : 'Show'} Advanced Options
        </Button>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Reset to Defaults
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<CheckIcon />}
            sx={{ minWidth: 200 }}
          >
            Save UX Settings
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          User Experience Optimization Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={uxScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default EnhancedUserExperience;

