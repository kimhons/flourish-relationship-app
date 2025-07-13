import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Button, 
  LinearProgress, 
  Alert,
  Chip,
  Avatar,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Slider,
  FormControlLabel,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Preview,
  Psychology,
  Analytics,
  Speed,
  Visibility,
  Favorite,
  Message,
  Share,
  Edit,
  SwipeLeft,
  SwipeRight,
  Star,
  TrendingUp,
  Warning,
  CheckCircle,
  Schedule,
  Person,
  LocationOn,
  School,
  Work,
  PhotoCamera,
  ExpandMore,
  PlayArrow,
  Pause,
  Refresh,
  Compare,
  Timeline,
  ShowChart,
  Lightbulb,
  AutoFixHigh,
  Close
} from '@mui/icons-material';

const ProfilePreviewTesting = ({ userData, onNext, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [testingMode, setTestingMode] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [profileVariants, setProfileVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({});
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState('mobile');
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [testDuration, setTestDuration] = useState(7);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [realTimeStats, setRealTimeStats] = useState({});

  const testingOptions = [
    {
      id: 'photo_order',
      title: 'Photo Order Testing',
      description: 'Test different photo arrangements',
      impact: 'high',
      duration: '3-5 days'
    },
    {
      id: 'bio_variations',
      title: 'Bio Variations',
      description: 'Test different bio versions',
      impact: 'medium',
      duration: '5-7 days'
    },
    {
      id: 'primary_photo',
      title: 'Primary Photo A/B',
      description: 'Test different primary photos',
      impact: 'high',
      duration: '2-4 days'
    },
    {
      id: 'interest_display',
      title: 'Interest Display',
      description: 'Test interest presentation styles',
      impact: 'low',
      duration: '7-10 days'
    }
  ];

  const audienceSegments = [
    { id: 'all', label: 'All Users', percentage: 100 },
    { id: 'young_professionals', label: 'Young Professionals (25-35)', percentage: 35 },
    { id: 'creatives', label: 'Creative Types', percentage: 20 },
    { id: 'outdoorsy', label: 'Outdoor Enthusiasts', percentage: 25 },
    { id: 'intellectuals', label: 'Intellectual Types', percentage: 20 }
  ];

  const devices = [
    { id: 'mobile', label: 'Mobile', icon: '📱', percentage: 85 },
    { id: 'desktop', label: 'Desktop', icon: '💻', percentage: 15 }
  ];

  useEffect(() => {
    generateProfileVariants();
    initializeLiveMetrics();
  }, [userData]);

  const generateProfileVariants = () => {
    const variants = [
      {
        id: 'original',
        name: 'Original Profile',
        description: 'Your current profile setup',
        changes: [],
        estimatedPerformance: 85
      },
      {
        id: 'photo_optimized',
        name: 'Photo Optimized',
        description: 'Reordered photos for maximum impact',
        changes: ['Primary photo changed', 'Photo order optimized'],
        estimatedPerformance: 92
      },
      {
        id: 'bio_enhanced',
        name: 'Bio Enhanced',
        description: 'Optimized bio with better call-to-action',
        changes: ['Bio shortened', 'Added conversation starter'],
        estimatedPerformance: 88
      },
      {
        id: 'full_optimized',
        name: 'Fully Optimized',
        description: 'All AI recommendations applied',
        changes: ['Photo optimization', 'Bio enhancement', 'Interest refinement'],
        estimatedPerformance: 95
      }
    ];
    
    setProfileVariants(variants);
  };

  const initializeLiveMetrics = () => {
    const metrics = {
      views: Math.floor(Math.random() * 50 + 20),
      likes: Math.floor(Math.random() * 30 + 10),
      messages: Math.floor(Math.random() * 15 + 5),
      matches: Math.floor(Math.random() * 10 + 3),
      conversion: Math.floor(Math.random() * 20 + 15)
    };
    
    setLiveMetrics(metrics);
  };

  const startTesting = async () => {
    setTestingMode(true);
    setSimulationRunning(true);
    
    // Simulate A/B testing process
    const testData = {
      variants: profileVariants.map(variant => ({
        ...variant,
        traffic: Math.floor(Math.random() * 25 + 25), // 25-50% split
        performance: {
          views: Math.floor(Math.random() * 100 + 50),
          likes: Math.floor(Math.random() * 80 + 30),
          messages: Math.floor(Math.random() * 40 + 20),
          matches: Math.floor(Math.random() * 25 + 15),
          conversionRate: Math.floor(Math.random() * 15 + 10)
        }
      })),
      duration: testDuration,
      audience: audienceFilter,
      device: previewDevice
    };
    
    // Simulate real-time updates
    const updateInterval = setInterval(() => {
      setRealTimeStats(prev => ({
        ...prev,
        views: (prev.views || 0) + Math.floor(Math.random() * 5 + 1),
        likes: (prev.likes || 0) + Math.floor(Math.random() * 3 + 1),
        messages: (prev.messages || 0) + Math.floor(Math.random() * 2),
        matches: (prev.matches || 0) + Math.floor(Math.random() * 1)
      }));
    }, 2000);
    
    // Stop simulation after 10 seconds (demo purposes)
    setTimeout(() => {
      setSimulationRunning(false);
      clearInterval(updateInterval);
      setTestResults(testData);
    }, 10000);
  };

  const stopTesting = () => {
    setSimulationRunning(false);
    setTestingMode(false);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleVariantSelect = (variantIndex) => {
    setSelectedVariant(variantIndex);
  };

  const handleNext = () => {
    const previewData = {
      selectedVariant: profileVariants[selectedVariant],
      testResults,
      liveMetrics,
      previewSettings: {
        device: previewDevice,
        audience: audienceFilter,
        testDuration
      },
      optimizationApplied: selectedVariant > 0
    };
    
    onNext({ profilePreview: previewData });
  };

  const renderProfileCard = (variant, isSelected = false) => {
    const profile = {
      name: userData?.name || 'Your Name',
      age: userData?.age || 25,
      location: userData?.location || 'Your City',
      bio: userData?.profileBio?.bio || 'Your bio will appear here...',
      photos: userData?.profilePhotos?.photos || [],
      interests: userData?.interests || ['Reading', 'Hiking', 'Coffee'],
      occupation: userData?.occupation || 'Your Job',
      education: userData?.education || 'Your School'
    };

    return (
      <Card 
        sx={{ 
          maxWidth: 350, 
          mx: 'auto',
          border: isSelected ? '2px solid' : '1px solid',
          borderColor: isSelected ? 'primary.main' : 'divider',
          position: 'relative'
        }}
      >
        {isSelected && (
          <Chip
            label="Selected"
            color="primary"
            size="small"
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
          />
        )}
        
        <Box sx={{ height: 400, position: 'relative' }}>
          <img
            src={profile.photos[0]?.preview || '/placeholder-photo.jpg'}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: 'white',
              p: 2
            }}
          >
            <Typography variant="h6" gutterBottom>
              {profile.name}, {profile.age}
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
              {profile.location}
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Work sx={{ fontSize: 16, mr: 0.5 }} />
              {profile.occupation}
            </Typography>
          </Box>
        </Box>
        
        <CardContent>
          <Typography variant="body2" sx={{ mb: 2, minHeight: 60 }}>
            {profile.bio}
          </Typography>
          
          <Box display="flex" flexWrap="wrap" gap={0.5}>
            {profile.interests.slice(0, 3).map((interest, index) => (
              <Chip key={index} label={interest} size="small" variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </Card>
    );
  };

  const renderPreviewTab = () => (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Profile Variants
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
              Choose the profile version that best represents you
            </Typography>
            
            <Grid container spacing={3}>
              {profileVariants.map((variant, index) => (
                <Grid item xs={12} md={6} key={variant.id}>
                  <Box
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleVariantSelect(index)}
                  >
                    <Box mb={2}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography variant="subtitle1">{variant.name}</Typography>
                        <Chip
                          label={`${variant.estimatedPerformance}% score`}
                          color="primary"
                          size="small"
                        />
                      </Box>
                      <Typography variant="body2" color="textSecondary" mb={1}>
                        {variant.description}
                      </Typography>
                      {variant.changes.length > 0 && (
                        <Box>
                          <Typography variant="caption" color="textSecondary">
                            Changes:
                          </Typography>
                          {variant.changes.map((change, i) => (
                            <Typography key={i} variant="caption" display="block" color="success.main">
                              • {change}
                            </Typography>
                          ))}
                        </Box>
                      )}
                    </Box>
                    
                    {renderProfileCard(variant, selectedVariant === index)}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Analytics sx={{ mr: 1 }} />
                Preview Settings
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Device Preview
                </Typography>
                <Box display="flex" gap={1}>
                  {devices.map((device) => (
                    <Button
                      key={device.id}
                      variant={previewDevice === device.id ? 'contained' : 'outlined'}
                      size="small"
                      onClick={() => setPreviewDevice(device.id)}
                    >
                      {device.icon} {device.label}
                    </Button>
                  ))}
                </Box>
                <Typography variant="caption" color="textSecondary">
                  {devices.find(d => d.id === previewDevice)?.percentage}% of users
                </Typography>
              </Box>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Target Audience
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  {audienceSegments.map((segment) => (
                    <Button
                      key={segment.id}
                      variant={audienceFilter === segment.id ? 'contained' : 'outlined'}
                      size="small"
                      onClick={() => setAudienceFilter(segment.id)}
                      sx={{ justifyContent: 'flex-start' }}
                    >
                      {segment.label}
                    </Button>
                  ))}
                </Box>
              </Box>
              
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  Selected variant has {profileVariants[selectedVariant]?.estimatedPerformance}% estimated performance
                </Typography>
              </Alert>
              
              <Button
                variant="contained"
                fullWidth
                onClick={() => setShowMobilePreview(true)}
                startIcon={<Preview />}
              >
                Full Preview
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderTestingTab = () => (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h6" gutterBottom>
              A/B Testing Dashboard
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
              Test different profile variations to optimize performance
            </Typography>
            
            {!testingMode ? (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Available Tests
                </Typography>
                <Grid container spacing={2}>
                  {testingOptions.map((test) => (
                    <Grid item xs={12} md={6} key={test.id}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                            <Typography variant="subtitle1">{test.title}</Typography>
                            <Chip
                              label={test.impact}
                              color={test.impact === 'high' ? 'error' : test.impact === 'medium' ? 'warning' : 'info'}
                              size="small"
                            />
                          </Box>
                          <Typography variant="body2" color="textSecondary" mb={2}>
                            {test.description}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            Duration: {test.duration}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                <Box mt={3}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={startTesting}
                    startIcon={<PlayArrow />}
                  >
                    Start A/B Testing
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="subtitle1">
                    Testing in Progress
                  </Typography>
                  <Box display="flex" gap={1}>
                    {simulationRunning ? (
                      <Button
                        variant="outlined"
                        onClick={stopTesting}
                        startIcon={<Pause />}
                      >
                        Stop Test
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={startTesting}
                        startIcon={<Refresh />}
                      >
                        Restart Test
                      </Button>
                    )}
                  </Box>
                </Box>
                
                {simulationRunning && (
                  <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                      Live testing in progress... Real users are seeing your profile variants
                    </Typography>
                  </Alert>
                )}
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Real-time Metrics
                        </Typography>
                        <Box display="flex" justifyContent="space-between" mb={2}>
                          <Box textAlign="center">
                            <Typography variant="h4" color="primary">
                              {realTimeStats.views || 0}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Views
                            </Typography>
                          </Box>
                          <Box textAlign="center">
                            <Typography variant="h4" color="success.main">
                              {realTimeStats.likes || 0}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Likes
                            </Typography>
                          </Box>
                          <Box textAlign="center">
                            <Typography variant="h4" color="info.main">
                              {realTimeStats.messages || 0}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Messages
                            </Typography>
                          </Box>
                        </Box>
                        {simulationRunning && (
                          <LinearProgress sx={{ mt: 2 }} />
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Variant Performance
                        </Typography>
                        {profileVariants.map((variant, index) => (
                          <Box key={variant.id} mb={2}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                              <Typography variant="body2">{variant.name}</Typography>
                              <Typography variant="body2" color="textSecondary">
                                {25 + index * 5}% better
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={variant.estimatedPerformance}
                              sx={{ height: 6, borderRadius: 3 }}
                            />
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Speed sx={{ mr: 1 }} />
                Testing Configuration
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Test Duration
                </Typography>
                <Slider
                  value={testDuration}
                  onChange={(e, value) => setTestDuration(value)}
                  min={1}
                  max={14}
                  step={1}
                  marks={[
                    { value: 1, label: '1d' },
                    { value: 7, label: '7d' },
                    { value: 14, label: '14d' }
                  ]}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} days`}
                />
              </Box>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Audience Split
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Traffic will be split equally between variants
                </Typography>
              </Box>
              
              <Alert severity="warning" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  Testing will affect your live profile visibility
                </Typography>
              </Alert>
              
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Expected Results
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Statistical significance"
                      secondary="95% confidence level"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Timeline color="info" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Performance insights"
                      secondary="Detailed analytics"
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAnalyticsTab = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Profile Analytics
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Historical performance data and insights
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Performance Metrics
              </Typography>
              
              <Box display="flex" justifyContent="space-between" mb={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="primary">
                    {liveMetrics.views || 0}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Profile Views
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    +12% vs last week
                  </Typography>
                </Box>
                
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">
                    {liveMetrics.likes || 0}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Likes Received
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    +8% vs last week
                  </Typography>
                </Box>
                
                <Box textAlign="center">
                  <Typography variant="h4" color="info.main">
                    {liveMetrics.messages || 0}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Messages
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    +15% vs last week
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ mb: 3 }} />
              
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Conversion Funnel
                </Typography>
                <Box mb={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Profile Views</Typography>
                    <Typography variant="body2">100%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={100} sx={{ height: 6 }} />
                </Box>
                
                <Box mb={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Likes</Typography>
                    <Typography variant="body2">45%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={45} sx={{ height: 6 }} />
                </Box>
                
                <Box mb={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Messages</Typography>
                    <Typography variant="body2">12%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={12} sx={{ height: 6 }} />
                </Box>
                
                <Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Matches</Typography>
                    <Typography variant="body2">8%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={8} sx={{ height: 6 }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Audience Insights
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Most Engaged Demographics
                </Typography>
                {audienceSegments.slice(1, 4).map((segment, index) => (
                  <Box key={segment.id} mb={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="body2">{segment.label}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {85 - index * 10}% engagement
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={85 - index * 10}
                      sx={{ height: 4, borderRadius: 2 }}
                    />
                  </Box>
                ))}
              </Box>
              
              <Divider sx={{ mb: 3 }} />
              
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Top Performing Content
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <PhotoCamera color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Primary photo"
                      secondary="92% positive feedback"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Edit color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bio content"
                      secondary="78% engagement rate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Star color="warning" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Interest tags"
                      secondary="65% click-through rate"
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderMobilePreview = () => (
    <Dialog
      open={showMobilePreview}
      onClose={() => setShowMobilePreview(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Mobile Preview</Typography>
          <IconButton onClick={() => setShowMobilePreview(false)}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              width: 300,
              height: 600,
              border: '8px solid #333',
              borderRadius: 6,
              bgcolor: 'white',
              overflow: 'hidden'
            }}
          >
            {renderProfileCard(profileVariants[selectedVariant])}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            <Preview color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Profile Preview & Testing
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Test and optimize your profile for maximum performance
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Preview your profile, run A/B tests, and analyze performance metrics
          </Typography>
        </Box>

        {/* Tabs */}
        <Box mb={4}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Preview" icon={<Preview />} />
            <Tab label="A/B Testing" icon={<Compare />} />
            <Tab label="Analytics" icon={<Analytics />} />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {activeTab === 0 && renderPreviewTab()}
        {activeTab === 1 && renderTestingTab()}
        {activeTab === 2 && renderAnalyticsTab()}

        {/* Mobile Preview Dialog */}
        {renderMobilePreview()}

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back to Profile Score
          </Button>
          
          <Box display="flex" gap={2}>
            <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
              Variant: {profileVariants[selectedVariant]?.name || 'None'}
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              startIcon={<CheckCircle />}
            >
              Continue to Launch
            </Button>
          </Box>
        </Box>

        {/* Tips */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Pro tip: A/B testing can improve your match rate by up to 40%
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePreviewTesting;