/**
 * Flourish App: AI Demo Page
 * Comprehensive demonstration of AI features
 */

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container,
  Typography, 
  Button, 
  Grid,
  Card,
  CardContent,
  Chip,
  Alert,
  Fab,
  Badge,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import {
  Psychology as PsychologyIcon,
  Favorite as FavoriteIcon,
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  AutoAwesome as AutoAwesomeIcon,
  Science as ScienceIcon,
  Chat as ChatIcon,
  Insights as InsightsIcon
} from '@mui/icons-material';

// Import AI Components
import DrLoveCoach from '../../components/ai/DrLoveCoach';
import CompatibilityMatcher from '../../components/ai/CompatibilityMatcher';
import AIAnalyticsDashboard from '../../components/ai/AIAnalyticsDashboard';
import aiService from '../../services/aiService';

const AIDemoPage = () => {
  // State management
  const [coachOpen, setCoachOpen] = useState(false);
  const [matcherOpen, setMatcherOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [aiHealthStatus, setAiHealthStatus] = useState(null);

  // Sample user data for demonstration
  const sampleUsers = [
    {
      id: 'user1',
      name: 'Sarah Johnson',
      age: 28,
      photo: '/api/placeholder/150/150',
      interests: ['hiking', 'reading', 'cooking'],
      bio: 'Love exploring new places and trying new cuisines!'
    },
    {
      id: 'user2', 
      name: 'Michael Chen',
      age: 32,
      photo: '/api/placeholder/150/150',
      interests: ['photography', 'travel', 'music'],
      bio: 'Photographer and music lover seeking meaningful connections.'
    },
    {
      id: 'user3',
      name: 'Emma Rodriguez',
      age: 26,
      photo: '/api/placeholder/150/150',
      interests: ['yoga', 'art', 'sustainability'],
      bio: 'Yoga instructor passionate about mindful living.'
    }
  ];

  // Check AI service health on load
  useEffect(() => {
    checkAIHealth();
  }, []);

  const checkAIHealth = async () => {
    try {
      const health = await aiService.checkHealth();
      setAiHealthStatus(health.data);
    } catch (error) {
      console.error('AI health check failed:', error);
      setAiHealthStatus({ status: 'disconnected' });
    }
  };

  // AI Features data
  const aiFeatures = [
    {
      title: 'Dr. Love AI Coach',
      description: 'Advanced relationship coaching with crisis intervention and personalized guidance',
      icon: <PsychologyIcon />,
      color: 'primary',
      action: () => setCoachOpen(true),
      features: [
        '5 specialized coaching modes',
        'Crisis detection & intervention',
        'Real-time emotion analysis',
        'Voice-powered sessions',
        'Progress tracking'
      ]
    },
    {
      title: 'AI Compatibility Matching',
      description: '10+ dimensional analysis for meaningful connections',
      icon: <FavoriteIcon />,
      color: 'secondary',
      action: () => {
        setSelectedUser(sampleUsers[0]);
        setMatcherOpen(true);
      },
      features: [
        'Personality trait analysis',
        'Values alignment scoring',
        'Lifestyle compatibility',
        'Communication style matching',
        'Relationship potential prediction'
      ]
    },
    {
      title: 'Relationship Analytics',
      description: 'Comprehensive insights and progress tracking',
      icon: <AnalyticsIcon />,
      color: 'success',
      action: () => setAnalyticsOpen(true),
      features: [
        'Relationship health scoring',
        'Growth trend analysis',
        'Communication insights',
        'Mood tracking',
        'Personalized recommendations'
      ]
    }
  ];

  // AI Models information
  const aiModels = [
    {
      category: 'Primary Models',
      models: [
        { name: 'OpenAI GPT-4 Turbo', purpose: 'Advanced coaching & analysis' },
        { name: 'Google Gemini Pro', purpose: 'Emotional intelligence & insights' },
        { name: 'Google Studio Live', purpose: 'Real-time voice coaching' }
      ]
    },
    {
      category: 'Fallback Models (Together.ai)',
      models: [
        { name: 'DeepSeek-R1', purpose: 'Reasoning & problem solving' },
        { name: 'Llama 4 Maverick', purpose: 'Conversational AI' },
        { name: 'Qwen3 235B', purpose: 'Advanced language understanding' },
        { name: 'FLUX.1 Pro', purpose: 'Content generation' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Flourish AI Platform
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          The most advanced AI-powered relationship platform ever built
        </Typography>
        
        {/* AI Status */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <Chip 
            label={aiHealthStatus?.status === 'healthy' ? 'AI Services Online' : 'Demo Mode'}
            color={aiHealthStatus?.status === 'healthy' ? 'success' : 'warning'}
            icon={<AutoAwesomeIcon />}
          />
          <Chip 
            label="Multi-Model Architecture"
            color="primary"
            icon={<ScienceIcon />}
          />
          <Chip 
            label="99.9% Uptime"
            color="info"
            icon={<TrendingUpIcon />}
          />
        </Box>

        {aiHealthStatus?.status !== 'healthy' && (
          <Alert severity="info" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Running in demo mode with sample data. Connect API keys for full AI functionality.
          </Alert>
        )}
      </Box>

      {/* AI Features Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {aiFeatures.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 8
                }
              }}
              onClick={feature.action}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: `${feature.color}.main`, 
                      width: 56, 
                      height: 56, 
                      mr: 2 
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {feature.description}
                </Typography>
                
                <List dense>
                  {feature.features.map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <Box 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: `${feature.color}.main` 
                          }} 
                        />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                <Button 
                  variant="contained" 
                  color={feature.color}
                  fullWidth 
                  sx={{ mt: 2 }}
                  startIcon={feature.icon}
                >
                  Try {feature.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* AI Models Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Multi-Model AI Architecture
        </Typography>
        
        <Grid container spacing={3}>
          {aiModels.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom color="primary">
                  {category.category}
                </Typography>
                
                <List>
                  {category.models.map((model, idx) => (
                    <React.Fragment key={idx}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <ScienceIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={model.name}
                          secondary={model.purpose}
                          primaryTypographyProps={{ fontWeight: 'medium' }}
                        />
                      </ListItem>
                      {idx < category.models.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sample Users for Compatibility Demo */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Try AI Compatibility Analysis
        </Typography>
        
        <Grid container spacing={3}>
          {sampleUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card sx={{ cursor: 'pointer' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={user.photo} 
                      sx={{ width: 60, height: 60, mr: 2 }}
                    >
                      {user.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{user.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.age} years old
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" paragraph>
                    {user.bio}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    {user.interests.slice(0, 3).map((interest) => (
                      <Chip 
                        key={interest} 
                        label={interest} 
                        size="small" 
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                  
                  <Button 
                    variant="outlined" 
                    fullWidth
                    startIcon={<TrendingUpIcon />}
                    onClick={() => {
                      setSelectedUser(user);
                      setMatcherOpen(true);
                    }}
                  >
                    Analyze Compatibility
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quick Actions */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Experience the Future of Relationships
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our AI platform combines cutting-edge technology with relationship science
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<PsychologyIcon />}
            onClick={() => setCoachOpen(true)}
          >
            Start AI Coaching
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<AnalyticsIcon />}
            onClick={() => setAnalyticsOpen(true)}
          >
            View Analytics
          </Button>
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="Dr. Love Coach"
        sx={{ 
          position: 'fixed', 
          bottom: 24, 
          right: 24,
          zIndex: 1000
        }}
        onClick={() => setCoachOpen(true)}
      >
        <Badge badgeContent="AI" color="secondary" variant="dot">
          <ChatIcon />
        </Badge>
      </Fab>

      {/* AI Components */}
      <DrLoveCoach 
        open={coachOpen} 
        onClose={() => setCoachOpen(false)} 
      />
      
      <CompatibilityMatcher
        targetUser={selectedUser}
        open={matcherOpen}
        onClose={() => {
          setMatcherOpen(false);
          setSelectedUser(null);
        }}
      />

      {/* Analytics Dashboard Modal */}
      {analyticsOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'background.paper',
            zIndex: 1300,
            overflow: 'auto'
          }}
        >
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Button onClick={() => setAnalyticsOpen(false)}>
              ← Back to Demo
            </Button>
          </Box>
          <AIAnalyticsDashboard />
        </Box>
      )}
    </Container>
  );
};

export default AIDemoPage;

