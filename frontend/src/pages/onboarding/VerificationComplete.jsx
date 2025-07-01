/**
 * Screen 120: Verification Complete
 * Success confirmation with trust score and next steps
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Grid,
  Paper,
  Avatar,
  Divider
} from '@mui/material';
import {
  CheckCircle,
  Security,
  ArrowForward,
  Star,
  Shield,
  Verified,
  TrendingUp,
  People,
  Favorite
} from '@mui/icons-material';

const VerificationComplete = () => {
  const navigate = useNavigate();
  const [trustScore, setTrustScore] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Animate trust score
    const timer = setTimeout(() => {
      setTrustScore(92);
      setTimeout(() => setAnimationComplete(true), 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const verificationSteps = [
    { 
      id: 'photo', 
      label: 'Photo Verification', 
      completed: true,
      icon: <CheckCircle sx={{ color: '#14B8A6' }} />
    },
    { 
      id: 'phone', 
      label: 'Phone Verification', 
      completed: true,
      icon: <CheckCircle sx={{ color: '#14B8A6' }} />
    },
    { 
      id: 'social', 
      label: 'Social Media Linking', 
      completed: true,
      icon: <CheckCircle sx={{ color: '#14B8A6' }} />
    }
  ];

  const benefits = [
    {
      icon: <Shield sx={{ color: '#7C3AED' }} />,
      title: 'Enhanced Security',
      description: 'Your verified status helps protect you and other users from fake profiles'
    },
    {
      icon: <TrendingUp sx={{ color: '#14B8A6' }} />,
      title: 'Better Matches',
      description: 'Verified profiles receive 3x more quality matches and interactions'
    },
    {
      icon: <People sx={{ color: '#F59E0B' }} />,
      title: 'Increased Trust',
      description: 'Other users are more likely to engage with verified profiles'
    },
    {
      icon: <Favorite sx={{ color: '#EF4444' }} />,
      title: 'Priority Features',
      description: 'Access to premium features and priority customer support'
    }
  ];

  const handleContinue = () => {
    navigate('/onboarding/personality-assessment-intro');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Step 5 of 5 - Verification Complete
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={100} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#14B8A6'
            }
          }} 
        />
      </Box>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Success Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ 
              display: 'inline-flex', 
              p: 3, 
              borderRadius: '50%', 
              backgroundColor: '#F0FDF4',
              border: '3px solid #14B8A6',
              mb: 3
            }}>
              <CheckCircle sx={{ fontSize: 64, color: '#14B8A6' }} />
            </Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#14B8A6' }}>
              Verification Complete!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              Congratulations! Your identity has been successfully verified. 
              You're now part of our trusted community.
            </Typography>
          </Box>

          {/* Trust Score Display */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                backgroundColor: '#F8FAFC',
                border: '2px solid #E2E8F0',
                borderRadius: 3,
                maxWidth: 400,
                mx: 'auto'
              }}
            >
              <Typography variant="h6" fontWeight="semibold" gutterBottom>
                Your Trust Score
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                <Box sx={{ 
                  width: 120, 
                  height: 120, 
                  borderRadius: '50%',
                  background: `conic-gradient(#7C3AED ${trustScore * 3.6}deg, #E5E7EB 0deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: 100, 
                    height: 100, 
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#7C3AED' }}>
                      {trustScore}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      / 100
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <Verified sx={{ color: '#7C3AED', fontSize: 20 }} />
                <Typography variant="body1" fontWeight="semibold" sx={{ color: '#7C3AED' }}>
                  Highly Trusted Profile
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Your verification puts you in the top 10% of trusted users
              </Typography>
            </Paper>
          </Box>

          {/* Verification Steps Summary */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Verification Steps Completed
            </Typography>
            <Grid container spacing={2} sx={{ maxWidth: 600, mx: 'auto' }}>
              {verificationSteps.map((step, index) => (
                <Grid item xs={12} sm={4} key={step.id}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      border: '1px solid #E5E7EB',
                      borderRadius: 2,
                      backgroundColor: step.completed ? '#F0FDF4' : '#F9FAFB'
                    }}
                  >
                    <Box sx={{ mb: 1 }}>
                      {step.icon}
                    </Box>
                    <Typography variant="body2" fontWeight="semibold">
                      {step.label}
                    </Typography>
                    <Chip 
                      label="Verified" 
                      size="small" 
                      sx={{ 
                        mt: 1,
                        backgroundColor: '#14B8A6',
                        color: 'white',
                        fontSize: '0.75rem'
                      }} 
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Benefits of Verification */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Your Verification Benefits
            </Typography>
            <Grid container spacing={3}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar sx={{ 
                      backgroundColor: 'transparent',
                      border: '2px solid #E5E7EB',
                      width: 48,
                      height: 48
                    }}>
                      {benefit.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="semibold" gutterBottom>
                        {benefit.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Next Steps Preview */}
          <Box sx={{ 
            backgroundColor: '#F9FAFB', 
            borderRadius: 2, 
            p: 3, 
            mb: 4,
            border: '1px solid #E5E7EB'
          }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
              What's Next?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Now that you're verified, let's build your comprehensive personality profile 
              to find your most compatible matches.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Star sx={{ color: '#F59E0B', fontSize: 20 }} />
              <Typography variant="body2" fontWeight="semibold">
                Next: Personality Assessment (15-20 minutes)
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleContinue}
              sx={{
                backgroundColor: '#7C3AED',
                '&:hover': {
                  backgroundColor: '#6D28D9'
                },
                px: 4,
                py: 1.5
              }}
            >
              Continue to Personality Assessment
            </Button>
          </Box>

          {/* Celebration Message */}
          {animationComplete && (
            <Box sx={{ 
              textAlign: 'center', 
              mt: 4, 
              p: 3, 
              backgroundColor: '#FEF3C7',
              borderRadius: 2,
              border: '1px solid #F59E0B'
            }}>
              <Typography variant="body1" fontWeight="semibold" sx={{ color: '#92400E' }}>
                🎉 Welcome to the Flourish Community! 🎉
              </Typography>
              <Typography variant="body2" sx={{ color: '#92400E', mt: 1 }}>
                You're now ready to discover meaningful connections with confidence and security.
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default VerificationComplete;

