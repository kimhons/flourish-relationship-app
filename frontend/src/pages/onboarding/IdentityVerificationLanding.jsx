/**
 * Screen 116: Identity Verification Landing
 * Welcome message and verification overview with security badges and trust indicators
 */

import React from 'react';
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
  Paper
} from '@mui/material';
import {
  Shield,
  CheckCircle,
  Security,
  Verified,
  Lock,
  ArrowForward
} from '@mui/icons-material';

const IdentityVerificationLanding = () => {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      icon: <Shield sx={{ color: '#7C3AED', fontSize: 40 }} />,
      title: 'Bank-Level Security',
      description: 'Your data is protected with 256-bit encryption'
    },
    {
      icon: <Verified sx={{ color: '#14B8A6', fontSize: 40 }} />,
      title: 'Verified Community',
      description: 'Join thousands of verified, authentic users'
    },
    {
      icon: <Lock sx={{ color: '#F59E0B', fontSize: 40 }} />,
      title: 'Privacy First',
      description: 'Your verification data is never shared publicly'
    }
  ];

  const verificationSteps = [
    'Identity Verification',
    'Photo Verification', 
    'Phone Verification',
    'Social Linking (Optional)',
    'Verification Complete'
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Step 1 of 5 - Identity Verification
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={20} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#7C3AED'
            }
          }} 
        />
      </Box>

      {/* Main Content */}
      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ 
              display: 'inline-flex', 
              p: 2, 
              borderRadius: '50%', 
              backgroundColor: '#F3F4F6',
              mb: 2 
            }}>
              <Security sx={{ fontSize: 48, color: '#7C3AED' }} />
            </Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Verify Your Identity
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              Help us create a safe, trusted community by verifying your identity. 
              This process takes just a few minutes and keeps everyone protected.
            </Typography>
          </Box>

          {/* Trust Indicators */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Why Verification Matters
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {securityFeatures.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center', 
                      border: '1px solid #E5E7EB',
                      borderRadius: 2,
                      height: '100%'
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="semibold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Verification Process */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Verification Process
            </Typography>
            <Box sx={{ mt: 3 }}>
              {verificationSteps.map((step, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: index === 0 ? '#F3F4F6' : 'transparent'
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? '#7C3AED' : '#E5E7EB',
                    color: index === 0 ? 'white' : '#6B7280',
                    fontWeight: 'bold',
                    mr: 3
                  }}>
                    {index + 1}
                  </Box>
                  <Typography 
                    variant="body1" 
                    fontWeight={index === 0 ? 'semibold' : 'normal'}
                    color={index === 0 ? 'text.primary' : 'text.secondary'}
                  >
                    {step}
                  </Typography>
                  {index === 0 && (
                    <Chip 
                      label="Current" 
                      size="small" 
                      sx={{ 
                        ml: 'auto',
                        backgroundColor: '#7C3AED',
                        color: 'white'
                      }} 
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Benefits */}
          <Box sx={{ 
            backgroundColor: '#F9FAFB', 
            borderRadius: 2, 
            p: 3, 
            mb: 4,
            border: '1px solid #E5E7EB'
          }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
              Benefits of Verification
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {[
                'Higher match quality',
                'Increased trust from others',
                'Priority in search results',
                'Access to verified-only features',
                'Enhanced safety protection'
              ].map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mr: 3, mb: 1 }}>
                  <CheckCircle sx={{ color: '#14B8A6', fontSize: 20, mr: 1 }} />
                  <Typography variant="body2">{benefit}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/onboarding/skip-verification')}
              sx={{ 
                borderColor: '#E5E7EB',
                color: '#6B7280',
                '&:hover': {
                  borderColor: '#D1D5DB',
                  backgroundColor: '#F9FAFB'
                }
              }}
            >
              Skip for Now
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/onboarding/photo-verification')}
              sx={{ 
                backgroundColor: '#7C3AED',
                '&:hover': {
                  backgroundColor: '#6D28D9'
                },
                px: 4
              }}
            >
              Start Verification
            </Button>
          </Box>

          {/* Privacy Note */}
          <Typography 
            variant="caption" 
            color="text.secondary" 
            sx={{ 
              display: 'block', 
              textAlign: 'center', 
              mt: 3,
              maxWidth: 400,
              mx: 'auto'
            }}
          >
            Your verification information is encrypted and never shared publicly. 
            We only use it to confirm your identity and enhance platform safety.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default IdentityVerificationLanding;

