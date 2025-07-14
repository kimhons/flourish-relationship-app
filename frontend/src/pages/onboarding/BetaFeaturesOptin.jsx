import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Grid,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Divider,
  Rating,
  Avatar,
  Tooltip
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Science,
  Rocket,
  AutoAwesome,
  NewReleases,
  Psychology,
  TrendingUp,
  CheckCircle,
  Warning,
  Info,
  Feedback,
  BugReport,
  Settings,
  Lightbulb,
  FlashOn,
  Explore,
  StarBorder,
  Star,
  Verified,
  School,
  Timeline,
  Assessment,
  Analytics,
  SmartToy,
  VirtualReality,
  Gesture,
  TouchApp,
  Mic,
  MicOff,
  Videocam,
  Message,
  Favorite,
  Group,
  LocationOn,
  CameraAlt,
  FilterVintage,
  Palette,
  Brush,
  Animation,
  ThreeDRotation,
  ViewInAr,
  ModelTraining,
  QuestionAnswer,
  Forum,
  People,
  PersonAdd,
  Celebration,
  EmojiEvents,
  Crown,
  Diamond
} from '@mui/icons-material';

const BetaFeaturesOptin = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [betaPreferences, setBetaPreferences] = useState({
    aiExperiments: false,
    vrDating: false,
    voiceAnalysis: false,
    emotionalAI: false,
    predictiveMatching: false,
    socialFeatures: false,
    gamification: false,
    advancedAnalytics: false
  });
  const [feedbackDialog, setFeedbackDialog] = useState(false);
  const [joinedBeta, setJoinedBeta] = useState(false);

  const betaFeatures = [
    {
      id: 'aiExperiments',
      name: 'AI Experiments',
      description: 'Next-generation AI conversation coaching and personality analysis',
      icon: <SmartToy />,
      status: 'Active',
      participants: 1247,
      rating: 4.3,
      benefits: [
        'Advanced conversation AI',
        'Personality prediction models',
        'Real-time emotional analysis',
        'Behavioral pattern recognition'
      ],
      risks: [
        'Occasional inaccurate predictions',
        'May require additional data sharing',
        'Feature stability may vary'
      ]
    },
    {
      id: 'vrDating',
      name: 'VR Dating Experiences',
      description: 'Virtual reality dates and immersive relationship experiences',
      icon: <VirtualReality />,
      status: 'Early Access',
      participants: 523,
      rating: 4.6,
      benefits: [
        'Immersive virtual dates',
        'Shared VR experiences',
        '3D profile interactions',
        'Virtual gift giving'
      ],
      risks: [
        'Requires VR headset',
        'Limited location availability',
        'May cause motion sickness'
      ]
    },
    {
      id: 'voiceAnalysis',
      name: 'Voice Compatibility',
      description: 'Voice tone analysis for deeper compatibility insights',
      icon: <Mic />,
      status: 'Beta',
      participants: 892,
      rating: 4.1,
      benefits: [
        'Voice tone matching',
        'Emotional state detection',
        'Communication style analysis',
        'Accent compatibility'
      ],
      risks: [
        'Requires voice recording',
        'May affect privacy',
        'Not available in all languages'
      ]
    },
    {
      id: 'emotionalAI',
      name: 'Emotional Intelligence AI',
      description: 'AI that understands and responds to your emotional needs',
      icon: <Psychology />,
      status: 'Alpha',
      participants: 334,
      rating: 4.4,
      benefits: [
        'Emotional state recognition',
        'Mood-based matching',
        'Empathetic AI responses',
        'Emotional growth tracking'
      ],
      risks: [
        'Experimental accuracy',
        'May misinterpret emotions',
        'Requires emotional data'
      ]
    },
    {
      id: 'predictiveMatching',
      name: 'Predictive Matching',
      description: 'AI predicts your perfect matches before you even see them',
      icon: <TrendingUp />,
      status: 'Beta',
      participants: 1156,
      rating: 4.2,
      benefits: [
        'Predictive compatibility scores',
        'Future relationship success modeling',
        'Personalized match timing',
        'Proactive match suggestions'
      ],
      risks: [
        'Predictions may be inaccurate',
        'Requires extensive data analysis',
        'May create unrealistic expectations'
      ]
    },
    {
      id: 'socialFeatures',
      name: 'Social Relationship Features',
      description: 'Community-driven relationship building and social connections',
      icon: <Group />,
      status: 'Beta',
      participants: 2341,
      rating: 4.5,
      benefits: [
        'Double dates coordination',
        'Friend group integration',
        'Social circle expansion',
        'Community events'
      ],
      risks: [
        'Requires social media integration',
        'May complicate privacy',
        'Friend conflicts possible'
      ]
    },
    {
      id: 'gamification',
      name: 'Relationship Gamification',
      description: 'Turn your relationship journey into an engaging game',
      icon: <EmojiEvents />,
      status: 'Alpha',
      participants: 678,
      rating: 4.0,
      benefits: [
        'Achievement rewards',
        'Relationship milestones',
        'Couple challenges',
        'Progress tracking'
      ],
      risks: [
        'May trivialize relationships',
        'Competitive pressure',
        'Addictive gaming elements'
      ]
    },
    {
      id: 'advancedAnalytics',
      name: 'Advanced Analytics',
      description: 'Deep insights into your relationship patterns and behaviors',
      icon: <Analytics />,
      status: 'Beta',
      participants: 1567,
      rating: 4.3,
      benefits: [
        'Detailed behavior analysis',
        'Relationship pattern insights',
        'Predictive relationship health',
        'Personalized recommendations'
      ],
      risks: [
        'Extensive data collection',
        'May reveal uncomfortable truths',
        'Privacy implications'
      ]
    }
  ];

  const handleBetaToggle = (featureId, enabled) => {
    setBetaPreferences(prev => ({
      ...prev,
      [featureId]: enabled
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Beta': return 'primary';
      case 'Alpha': return 'warning';
      case 'Early Access': return 'info';
      default: return 'default';
    }
  };

  const selectedBetaCount = Object.values(betaPreferences).filter(Boolean).length;

  const renderBetaOverview = () => (
    <Box>
      <Card sx={{ mb: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Rocket sx={{ fontSize: 48, mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Beta Features Program
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Be among the first to experience the future of dating
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Join our exclusive beta program and help shape the next generation of relationship technology
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.main',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
            }}
            onClick={() => setJoinedBeta(true)}
          >
            Join Beta Program
          </Button>
        </CardContent>
      </Card>

      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Beta Features:</strong> These are experimental features that may change or be removed. 
        Your feedback helps us improve them for everyone.
      </Alert>

      <Grid container spacing={3}>
        {betaFeatures.slice(0, 4).map((feature) => (
          <Grid item xs={12} md={6} key={feature.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>
                    {feature.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">{feature.name}</Typography>
                    <Chip 
                      label={feature.status} 
                      size="small" 
                      color={getStatusColor(feature.status)}
                      sx={{ mr: 1 }}
                    />
                    <Chip 
                      label={`${feature.participants} users`} 
                      size="small" 
                      variant="outlined"
                    />
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating value={feature.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {feature.rating}/5
                  </Typography>
                </Box>
                
                <FormControlLabel
                  control={
                    <Switch
                      checked={betaPreferences[feature.id]}
                      onChange={(e) => handleBetaToggle(feature.id, e.target.checked)}
                    />
                  }
                  label="Enable this feature"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderAllFeatures = () => (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        All Beta Features ({betaFeatures.length})
      </Typography>
      
      {betaFeatures.map((feature) => (
        <Card key={feature.id} sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ color: 'primary.main', mr: 2 }}>
                {feature.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{feature.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right', mr: 2 }}>
                <Chip 
                  label={feature.status} 
                  size="small" 
                  color={getStatusColor(feature.status)}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {feature.participants} users
                </Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={betaPreferences[feature.id]}
                    onChange={(e) => handleBetaToggle(feature.id, e.target.checked)}
                  />
                }
                label=""
              />
            </Box>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="success.main" sx={{ mb: 1 }}>
                  Benefits:
                </Typography>
                <List dense>
                  {feature.benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ py: 0 }}>
                      <ListItemIcon>
                        <CheckCircle color="success" sx={{ fontSize: 16 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" color="warning.main" sx={{ mb: 1 }}>
                  Considerations:
                </Typography>
                <List dense>
                  {feature.risks.map((risk, index) => (
                    <ListItem key={index} sx={{ py: 0 }}>
                      <ListItemIcon>
                        <Warning color="warning" sx={{ fontSize: 16 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={risk} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderBetaGuidelines = () => (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Beta Program Guidelines
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <Info sx={{ mr: 1 }} />
            What to Expect
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Early access to cutting-edge features" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Direct influence on feature development" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Exclusive beta community access" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Warning color="warning" />
              </ListItemIcon>
              <ListItemText primary="Features may be unstable or incomplete" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Warning color="warning" />
              </ListItemIcon>
              <ListItemText primary="Regular feedback requests and surveys" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <Feedback sx={{ mr: 1 }} />
            Your Role as a Beta Tester
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <BugReport color="error" />
              </ListItemIcon>
              <ListItemText 
                primary="Report bugs and issues" 
                secondary="Help us identify and fix problems quickly"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Star color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Provide feature feedback" 
                secondary="Share your thoughts on usability and functionality"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Lightbulb color="warning" />
              </ListItemIcon>
              <ListItemText 
                primary="Suggest improvements" 
                secondary="Your ideas help shape the final product"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <People color="info" />
              </ListItemIcon>
              <ListItemText 
                primary="Participate in beta community" 
                secondary="Connect with other beta testers and share experiences"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Alert severity="warning" sx={{ mb: 3 }}>
        <strong>Important:</strong> Beta features are experimental and may change or be removed without notice. 
        Always have backup plans for important relationship milestones.
      </Alert>
    </Box>
  );

  const renderFeedbackSystem = () => (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Feedback & Support
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <BugReport sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Report a Bug
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Found an issue? Let us know and we'll fix it quickly.
              </Typography>
              <Button variant="outlined" fullWidth>
                Report Bug
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Lightbulb sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Suggest Feature
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Have an idea for improvement? We'd love to hear it.
              </Typography>
              <Button variant="outlined" fullWidth>
                Suggest Feature
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Forum sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Join Discussion
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Connect with other beta testers and share experiences.
              </Typography>
              <Button variant="outlined" fullWidth>
                Join Community
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Quick Feedback
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          How would you rate your overall beta experience so far?
        </Typography>
        <Rating size="large" />
        <Button 
          variant="contained" 
          sx={{ mt: 2 }}
          onClick={() => setFeedbackDialog(true)}
        >
          Submit Feedback
        </Button>
      </Paper>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Beta Features Opt-in
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Shape the future of dating technology
        </Typography>
        <LinearProgress variant="determinate" value={77} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 155 of 280
        </Typography>
      </Box>

      {selectedBetaCount > 0 && (
        <Alert severity="success" sx={{ mb: 3 }}>
          You've selected {selectedBetaCount} beta feature{selectedBetaCount !== 1 ? 's' : ''}. 
          Thank you for helping us innovate!
        </Alert>
      )}

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Overview" />
        <Tab label="All Features" />
        <Tab label="Guidelines" />
        <Tab label="Feedback" />
      </Tabs>

      {selectedTab === 0 && renderBetaOverview()}
      {selectedTab === 1 && renderAllFeatures()}
      {selectedTab === 2 && renderBetaGuidelines()}
      {selectedTab === 3 && renderFeedbackSystem()}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          size="large"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          size="large"
        >
          Continue
        </Button>
      </Box>

      {/* Feedback Dialog */}
      <Dialog open={feedbackDialog} onClose={() => setFeedbackDialog(false)}>
        <DialogTitle>Submit Beta Feedback</DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 2 }}>
            Your feedback helps us improve the beta experience for everyone.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This feature will be available once you join the beta program.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFeedbackDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Beta Joined Success */}
      {joinedBeta && (
        <Dialog open={joinedBeta} onClose={() => setJoinedBeta(false)}>
          <DialogTitle>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Celebration sx={{ mr: 1, color: 'primary.main' }} />
              Welcome to Beta!
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography>
              You're now part of our exclusive beta program! You'll receive notifications 
              about new features and opportunities to provide feedback.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setJoinedBeta(false)}>
              Start Testing
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default BetaFeaturesOptin;