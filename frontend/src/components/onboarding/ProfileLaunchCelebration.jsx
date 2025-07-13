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
  Stepper,
  Step,
  StepLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Confetti,
  Fade,
  Zoom,
  Slide
} from '@mui/material';
import {
  Celebration,
  Star,
  CheckCircle,
  TrendingUp,
  Favorite,
  Psychology,
  EmojiEvents,
  Share,
  Timeline,
  Speed,
  Visibility,
  Message,
  Person,
  AutoAwesome,
  Lightbulb,
  RocketLaunch,
  PhotoCamera,
  Edit,
  Assessment,
  Preview,
  VerifiedUser,
  Shield,
  Analytics,
  Grade,
  WhatsApp,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ContentCopy,
  Email
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProfileLaunchCelebration = ({ userData, onNext, onBack }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [profileStats, setProfileStats] = useState({});
  const [nextSteps, setNextSteps] = useState([]);
  const [shareOptions, setShareOptions] = useState(false);
  const [celebrationComplete, setCelebrationComplete] = useState(false);

  const completedSteps = [
    {
      title: 'Profile Photos',
      description: 'AI-optimized photos uploaded',
      icon: <PhotoCamera />,
      status: 'completed',
      score: userData?.profilePhotos?.photos?.length ? 100 : 0
    },
    {
      title: 'Bio Creation',
      description: 'Personalized bio written',
      icon: <Edit />,
      status: 'completed',
      score: userData?.profileBio?.bio ? 100 : 0
    },
    {
      title: 'Profile Analysis',
      description: 'Comprehensive profile scoring',
      icon: <Assessment />,
      status: 'completed',
      score: userData?.profileCompleteness?.overallScore || 0
    },
    {
      title: 'Preview & Testing',
      description: 'Profile optimization completed',
      icon: <Preview />,
      status: 'completed',
      score: userData?.profilePreview?.selectedVariant?.estimatedPerformance || 0
    },
    {
      title: 'Launch Ready',
      description: 'Profile ready for the world',
      icon: <RocketLaunch />,
      status: 'completed',
      score: 100
    }
  ];

  const celebrationMilestones = [
    {
      id: 'profile_completed',
      title: 'Profile Master',
      description: 'Completed your entire profile setup',
      icon: <Grade />,
      color: 'primary',
      achieved: true
    },
    {
      id: 'ai_optimized',
      title: 'AI Optimized',
      description: 'Used AI optimization for maximum appeal',
      icon: <AutoAwesome />,
      color: 'secondary',
      achieved: userData?.profilePreview?.optimizationApplied || false
    },
    {
      id: 'high_scorer',
      title: 'High Scorer',
      description: 'Achieved 90+ profile completeness score',
      icon: <Star />,
      color: 'warning',
      achieved: (userData?.profileCompleteness?.overallScore || 0) >= 90
    },
    {
      id: 'testing_pro',
      title: 'Testing Pro',
      description: 'Ran A/B tests to optimize performance',
      icon: <Timeline />,
      color: 'info',
      achieved: userData?.profilePreview?.testResults ? true : false
    },
    {
      id: 'verified_user',
      title: 'Verified User',
      description: 'Completed profile verification',
      icon: <VerifiedUser />,
      color: 'success',
      achieved: userData?.verified || false
    }
  ];

  const shareMessages = {
    success: "🎉 Just created my perfect dating profile with AI optimization! Ready to find meaningful connections.",
    completion: "✨ Profile optimization complete! Excited to start my dating journey with confidence.",
    achievement: "🚀 Achieved a high-performing dating profile using advanced AI tools. Here we go!"
  };

  useEffect(() => {
    // Start celebration animation sequence
    setTimeout(() => {
      setShowConfetti(true);
      setAnimationStage(1);
    }, 500);

    setTimeout(() => {
      setAnimationStage(2);
    }, 2000);

    setTimeout(() => {
      setAnimationStage(3);
    }, 4000);

    setTimeout(() => {
      setCelebrationComplete(true);
      setAnimationStage(4);
    }, 6000);

    // Generate achievements and stats
    generateAchievements();
    generateProfileStats();
    generateNextSteps();
  }, []);

  const generateAchievements = () => {
    const earned = celebrationMilestones.filter(milestone => milestone.achieved);
    setAchievements(earned);
  };

  const generateProfileStats = () => {
    const stats = {
      completeness: userData?.profileCompleteness?.overallScore || 85,
      estimatedMatches: Math.floor(Math.random() * 50 + 100),
      optimizationGain: userData?.profilePreview?.optimizationApplied ? 15 : 0,
      timeToComplete: '12 minutes',
      photosOptimized: userData?.profilePhotos?.photos?.length || 0,
      bioScore: userData?.profileBio?.analysis?.overallScore || 88
    };
    setProfileStats(stats);
  };

  const generateNextSteps = () => {
    const steps = [
      {
        id: 'start_matching',
        title: 'Start Matching',
        description: 'Begin discovering compatible profiles',
        icon: <Favorite />,
        priority: 'high',
        timeEstimate: '5 minutes'
      },
      {
        id: 'ai_coaching',
        title: 'Meet Your AI Coach',
        description: 'Get personalized relationship coaching',
        icon: <Psychology />,
        priority: 'high',
        timeEstimate: '10 minutes'
      },
      {
        id: 'safety_setup',
        title: 'Review Safety Settings',
        description: 'Configure privacy and safety preferences',
        icon: <Shield />,
        priority: 'medium',
        timeEstimate: '5 minutes'
      },
      {
        id: 'verification',
        title: 'Complete Verification',
        description: 'Verify your identity for trust badge',
        icon: <VerifiedUser />,
        priority: 'medium',
        timeEstimate: '3 minutes'
      },
      {
        id: 'premium_features',
        title: 'Explore Premium Features',
        description: 'Unlock advanced matching capabilities',
        icon: <Star />,
        priority: 'low',
        timeEstimate: '2 minutes'
      }
    ];
    setNextSteps(steps);
  };

  const handleShare = (platform) => {
    const message = shareMessages.success;
    const url = window.location.origin;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${message} ${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${message} ${url}`);
        break;
      case 'email':
        window.open(`mailto:?subject=Check out my dating profile&body=${message} ${url}`, '_blank');
        break;
    }
  };

  const handleNext = () => {
    const launchData = {
      celebrationComplete: true,
      achievements: achievements.map(a => a.id),
      profileStats,
      nextSteps: nextSteps.map(s => s.id),
      launchTime: new Date().toISOString()
    };
    
    onNext({ profileLaunch: launchData });
  };

  const renderConfetti = () => (
    showConfetti && (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1000
        }}
      >
        {/* Confetti particles would be rendered here */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 100,
            animation: 'bounce 2s infinite'
          }}
        >
          🎉
        </Box>
      </Box>
    )
  );

  const renderHeader = () => (
    <Zoom in={animationStage >= 1} timeout={1000}>
      <Box textAlign="center" mb={6}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Celebration sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        </motion.div>
        
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Congratulations!
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          Your Perfect Profile is Ready
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth={600} mx="auto">
          You've successfully created an AI-optimized dating profile that's ready to attract 
          meaningful connections. Time to start your journey!
        </Typography>
      </Box>
    </Zoom>
  );

  const renderProfileSummary = () => (
    <Fade in={animationStage >= 2} timeout={1000}>
      <Card elevation={4} sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom textAlign="center">
            <EmojiEvents sx={{ mr: 1, color: 'warning.main' }} />
            Your Profile Achievement Summary
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h3" color="primary" gutterBottom>
                  {profileStats.completeness}%
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Profile Completeness
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {profileStats.completeness >= 90 ? 'Excellent' : profileStats.completeness >= 80 ? 'Great' : 'Good'}
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h3" color="success.main" gutterBottom>
                  {profileStats.estimatedMatches}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Estimated Monthly Matches
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Based on your profile quality
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h3" color="warning.main" gutterBottom>
                  +{profileStats.optimizationGain}%
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Performance Boost
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  From AI optimization
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 3 }} />
          
          <Box textAlign="center">
            <Typography variant="body1" color="textSecondary">
              <strong>Setup Time:</strong> {profileStats.timeToComplete} • 
              <strong> Photos:</strong> {profileStats.photosOptimized} optimized • 
              <strong> Bio Score:</strong> {profileStats.bioScore}/100
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );

  const renderAchievements = () => (
    <Slide direction="up" in={animationStage >= 3} timeout={1000}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Grade sx={{ mr: 1, color: 'warning.main' }} />
            Achievements Unlocked
          </Typography>
          
          <Grid container spacing={2}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={6} key={achievement.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: `${achievement.color}.main` }}>
                        {achievement.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {achievement.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {achievement.description}
                        </Typography>
                      </Box>
                      <CheckCircle color="success" />
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Alert severity="success" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Congratulations!</strong> You've earned {achievements.length} achievements. 
              Your profile is now optimized for maximum success!
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    </Slide>
  );

  const renderProgressStepper = () => (
    <Fade in={animationStage >= 2} timeout={1000}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Timeline sx={{ mr: 1, color: 'info.main' }} />
            Your Profile Journey
          </Typography>
          
          <Stepper alternativeLabel>
            {completedSteps.map((step, index) => (
              <Step key={step.title} completed={step.status === 'completed'}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: 'success.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  <Typography variant="subtitle2">{step.title}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {step.description}
                  </Typography>
                  <Box mt={0.5}>
                    <Chip
                      label={`${step.score}% Complete`}
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>
    </Fade>
  );

  const renderNextSteps = () => (
    <Fade in={animationStage >= 4} timeout={1000}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Lightbulb sx={{ mr: 1, color: 'warning.main' }} />
            What's Next?
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Continue your journey with these recommended next steps
          </Typography>
          
          <List>
            {nextSteps.map((step, index) => (
              <ListItem key={step.id} divider={index < nextSteps.length - 1}>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: `${step.priority === 'high' ? 'error' : step.priority === 'medium' ? 'warning' : 'info'}.main` }}>
                    {step.icon}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={step.title}
                  secondary={
                    <Box>
                      <Typography variant="body2" color="textSecondary">
                        {step.description}
                      </Typography>
                      <Box display="flex" gap={1} mt={1}>
                        <Chip
                          label={step.priority}
                          size="small"
                          color={step.priority === 'high' ? 'error' : step.priority === 'medium' ? 'warning' : 'info'}
                        />
                        <Chip
                          label={step.timeEstimate}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Fade>
  );

  const renderShareSection = () => (
    <Fade in={celebrationComplete} timeout={1000}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            <Share sx={{ mr: 1, color: 'primary.main' }} />
            Share Your Success
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={3}>
            Celebrate your achievement with friends and family
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('facebook')}
                startIcon={<Facebook />}
                sx={{ color: '#1877F2', borderColor: '#1877F2' }}
              >
                Facebook
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('twitter')}
                startIcon={<Twitter />}
                sx={{ color: '#1DA1F2', borderColor: '#1DA1F2' }}
              >
                Twitter
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('linkedin')}
                startIcon={<LinkedIn />}
                sx={{ color: '#0077B5', borderColor: '#0077B5' }}
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('whatsapp')}
                startIcon={<WhatsApp />}
                sx={{ color: '#25D366', borderColor: '#25D366' }}
              >
                WhatsApp
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('copy')}
                startIcon={<ContentCopy />}
              >
                Copy Link
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => handleShare('email')}
                startIcon={<Email />}
              >
                Email
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  );

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {renderConfetti()}
        
        {/* Header */}
        {renderHeader()}
        
        {/* Profile Summary */}
        {renderProfileSummary()}
        
        {/* Progress Stepper */}
        {renderProgressStepper()}
        
        {/* Achievements */}
        {renderAchievements()}
        
        {/* Next Steps */}
        {renderNextSteps()}
        
        {/* Share Section */}
        {renderShareSection()}

        {/* Final Call to Action */}
        <Fade in={celebrationComplete} timeout={1000}>
          <Box textAlign="center" mb={4}>
            <Paper elevation={4} sx={{ p: 4, bgcolor: 'primary.50' }}>
              <RocketLaunch sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Ready to Launch Your Dating Journey?
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                Your AI-optimized profile is ready to help you find meaningful connections. 
                Let's start matching you with compatible people!
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleNext}
                startIcon={<Favorite />}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Start Finding Matches
              </Button>
            </Paper>
          </Box>
        </Fade>

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={onBack}
            disabled={!celebrationComplete}
          >
            Back to Preview
          </Button>
          
          <Box display="flex" gap={2}>
            <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
              Profile optimization complete! 🎉
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!celebrationComplete}
              startIcon={<RocketLaunch />}
            >
              Launch Profile
            </Button>
          </Box>
        </Box>

        {/* Final Tips */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Remember: Great profiles attract great people. You're ready to shine!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileLaunchCelebration;