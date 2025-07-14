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
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  Tabs,
  Tab
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Star,
  Diamond,
  AutoAwesome,
  Insights,
  Psychology,
  TrendingUp,
  CheckCircle,
  Lock,
  Unlimited,
  Speed,
  PersonalVideo,
  SmartToy,
  Analytics,
  School,
  Group,
  Favorite,
  Message,
  VideoCall,
  Phone,
  Email,
  NotificationsActive,
  CloudUpload,
  Security,
  Shield,
  VpnKey,
  AdminPanelSettings,
  Timeline,
  Assessment,
  CameraEnhance,
  FilterVintage,
  Palette,
  Brush,
  Edit,
  EmojiEvents,
  Verified,
  FlashOn,
  Rocket,
  Crown,
  Celebration
} from '@mui/icons-material';

const PremiumFeaturesPreview = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [subscriptionDialog, setSubscriptionDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [trialStarted, setTrialStarted] = useState(false);

  const premiumFeatures = [
    {
      category: 'AI Coaching',
      icon: <Psychology />,
      features: [
        'Unlimited AI coaching sessions',
        'Advanced personality analysis',
        'Personalized relationship roadmaps',
        'Real-time conversation coaching',
        'Predictive compatibility scoring'
      ]
    },
    {
      category: 'Advanced Matching',
      icon: <AutoAwesome />,
      features: [
        'Advanced algorithm matching',
        'Behavioral compatibility analysis',
        'Unlimited likes and super likes',
        'See who liked you first',
        'Boost your profile visibility'
      ]
    },
    {
      category: 'Premium Communication',
      icon: <Message />,
      features: [
        'Video calling with effects',
        'Voice messages with enhancement',
        'Read receipts and typing indicators',
        'Message scheduling',
        'Priority message delivery'
      ]
    },
    {
      category: 'Insights & Analytics',
      icon: <Analytics />,
      features: [
        'Detailed profile analytics',
        'Conversation success metrics',
        'Relationship health tracking',
        'Personal growth insights',
        'Success prediction models'
      ]
    },
    {
      category: 'Exclusive Content',
      icon: <Star />,
      features: [
        'Expert relationship workshops',
        'Premium dating guides',
        'Exclusive community access',
        'VIP customer support',
        'Early access to new features'
      ]
    },
    {
      category: 'Enhanced Privacy',
      icon: <Security />,
      features: [
        'Advanced privacy controls',
        'Incognito browsing mode',
        'Enhanced verification options',
        'Priority safety features',
        'Encrypted message storage'
      ]
    }
  ];

  const pricingPlans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$19.99',
      period: 'per month',
      savings: null,
      popular: false
    },
    {
      id: 'quarterly',
      name: 'Quarterly',
      price: '$49.99',
      period: 'per 3 months',
      savings: 'Save 17%',
      popular: true
    },
    {
      id: 'annual',
      name: 'Annual',
      price: '$159.99',
      period: 'per year',
      savings: 'Save 33%',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'The AI coaching completely transformed my dating life. I found my perfect match within 3 months!',
      rating: 5,
      verified: true
    },
    {
      name: 'Michael R.',
      quote: 'The advanced matching algorithm is incredible. Every match feels meaningful and compatible.',
      rating: 5,
      verified: true
    },
    {
      name: 'Emma L.',
      quote: 'Premium insights helped me understand my relationship patterns and grow as a person.',
      rating: 5,
      verified: true
    }
  ];

  const handleStartTrial = () => {
    setTrialStarted(true);
    setSubscriptionDialog(false);
  };

  const renderPremiumOverview = () => (
    <Box>
      <Card sx={{ mb: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Diamond sx={{ fontSize: 48, mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Flourish Premium
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Unlock your relationship potential with AI-powered insights
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 1 }}>
              $19.99
            </Typography>
            <Typography variant="h6">
              /month
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.main',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
            }}
            onClick={() => setSubscriptionDialog(true)}
          >
            Start 7-Day Free Trial
          </Button>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {premiumFeatures.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6">{category.category}</Typography>
                </Box>
                <List dense>
                  {category.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} sx={{ pl: 0 }}>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderPricingPlans = () => (
    <Box>
      <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
        Choose Your Plan
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {pricingPlans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.id}>
            <Card
              sx={{
                position: 'relative',
                border: selectedPlan === plan.id ? '2px solid #1976d2' : '1px solid #e0e0e0',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              {plan.popular && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
              )}
              
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {plan.name}
                </Typography>
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {plan.period}
                </Typography>
                
                {plan.savings && (
                  <Chip
                    label={plan.savings}
                    color="success"
                    size="small"
                    sx={{ mb: 2 }}
                  />
                )}
                
                <Button
                  variant={selectedPlan === plan.id ? 'contained' : 'outlined'}
                  fullWidth
                  onClick={() => setSelectedPlan(plan.id)}
                  sx={{ mt: 2 }}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Alert severity="info" sx={{ mt: 3 }}>
        All plans include a 7-day free trial. Cancel anytime during the trial period.
      </Alert>
    </Box>
  );

  const renderTestimonials = () => (
    <Box>
      <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
        What Our Premium Users Say
      </Typography>
      
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', mr: 1 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#ffc107', fontSize: 20 }} />
                    ))}
                  </Box>
                  {testimonial.verified && (
                    <Verified color="primary" sx={{ fontSize: 16, ml: 1 }} />
                  )}
                </Box>
                <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderComparison = () => (
    <Box>
      <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
        Free vs Premium
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" textAlign="center">Free</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" textAlign="center" sx={{ color: 'primary.main' }}>
              Premium
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <Divider />
          </Grid>
          
          {[
            { feature: 'Basic AI coaching', free: '3 sessions/month', premium: 'Unlimited' },
            { feature: 'Profile matches', free: '10 per day', premium: 'Unlimited' },
            { feature: 'Super likes', free: '1 per day', premium: 'Unlimited' },
            { feature: 'See who liked you', free: '❌', premium: '✅' },
            { feature: 'Advanced analytics', free: '❌', premium: '✅' },
            { feature: 'Video calling', free: '❌', premium: '✅' },
            { feature: 'Premium support', free: '❌', premium: '✅' }
          ].map((item, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', flex: 1 }}>
                    {item.feature}
                  </Typography>
                  <Typography variant="body2" textAlign="center" sx={{ flex: 1 }}>
                    {item.free}
                  </Typography>
                  <Typography variant="body2" textAlign="center" sx={{ flex: 1, color: 'primary.main' }}>
                    {item.premium}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Paper>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Premium Features Preview
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Unlock the full potential of your relationship journey
        </Typography>
        <LinearProgress variant="determinate" value={76.5} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 154 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Features" />
        <Tab label="Pricing" />
        <Tab label="Testimonials" />
        <Tab label="Comparison" />
      </Tabs>

      {selectedTab === 0 && renderPremiumOverview()}
      {selectedTab === 1 && renderPricingPlans()}
      {selectedTab === 2 && renderTestimonials()}
      {selectedTab === 3 && renderComparison()}

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

      {/* Subscription Dialog */}
      <Dialog open={subscriptionDialog} onClose={() => setSubscriptionDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Start Your Premium Journey</DialogTitle>
        <DialogContent>
          <Alert severity="success" sx={{ mb: 3 }}>
            7-day free trial • Cancel anytime • No commitment
          </Alert>
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            Selected Plan: {pricingPlans.find(p => p.id === selectedPlan)?.name}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3 }}>
            You'll get immediate access to all premium features. Your trial starts now and 
            you won't be charged until day 8.
          </Typography>
          
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Unlimited AI coaching sessions" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Advanced matching algorithm" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Premium communication features" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Detailed insights and analytics" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSubscriptionDialog(false)}>
            Maybe Later
          </Button>
          <Button variant="contained" onClick={handleStartTrial}>
            Start Free Trial
          </Button>
        </DialogActions>
      </Dialog>

      {/* Trial Started Success */}
      {trialStarted && (
        <Dialog open={trialStarted} onClose={() => setTrialStarted(false)}>
          <DialogTitle>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Celebration sx={{ mr: 1, color: 'primary.main' }} />
              Welcome to Premium!
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography>
              Your 7-day free trial has started! You now have access to all premium features.
              Enjoy exploring the enhanced Flourish experience.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setTrialStarted(false)}>
              Start Exploring
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default PremiumFeaturesPreview;