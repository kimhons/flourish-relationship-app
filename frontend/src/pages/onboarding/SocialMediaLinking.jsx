/**
 * Screen 119: Social Media Linking (Optional)
 * Social platform selection with OAuth integration and privacy controls
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Alert,
  Chip,
  Divider,
  Switch,
  FormControlLabel,
  Grid,
  Paper
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ArrowForward,
  ArrowBack,
  Security,
  Visibility,
  VisibilityOff,
  CheckCircle,
  Info
} from '@mui/icons-material';

const SocialMediaLinking = () => {
  const navigate = useNavigate();
  const [linkedAccounts, setLinkedAccounts] = useState({});
  const [privacySettings, setPrivacySettings] = useState({
    sharePhotos: false,
    shareInterests: true,
    shareEducation: true,
    shareWorkplace: true,
    shareConnections: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const socialPlatforms = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <Facebook sx={{ fontSize: 32 }} />,
      color: '#1877F2',
      description: 'Verify identity and import photos, interests, and education',
      benefits: ['Photo verification', 'Interest matching', 'Mutual friends'],
      dataShared: ['Profile photos', 'Interests', 'Education', 'Work history']
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram sx={{ fontSize: 32 }} />,
      color: '#E4405F',
      description: 'Import photos and showcase your lifestyle',
      benefits: ['Authentic photos', 'Lifestyle insights', 'Visual verification'],
      dataShared: ['Recent photos', 'Bio information', 'Follower count']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <LinkedIn sx={{ fontSize: 32 }} />,
      color: '#0A66C2',
      description: 'Verify professional background and career information',
      benefits: ['Career verification', 'Education confirmation', 'Professional network'],
      dataShared: ['Work experience', 'Education', 'Professional skills']
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter sx={{ fontSize: 32 }} />,
      color: '#1DA1F2',
      description: 'Import interests and personality insights',
      benefits: ['Interest analysis', 'Communication style', 'Personality insights'],
      dataShared: ['Bio information', 'Interests', 'Recent activity']
    }
  ];

  const handleSocialConnect = async (platformId) => {
    setIsLoading(true);
    
    // Simulate OAuth flow
    setTimeout(() => {
      setLinkedAccounts(prev => ({
        ...prev,
        [platformId]: {
          connected: true,
          connectedAt: new Date().toISOString(),
          username: `user_${platformId}`
        }
      }));
      setIsLoading(false);
    }, 2000);
  };

  const handleDisconnect = (platformId) => {
    setLinkedAccounts(prev => {
      const updated = { ...prev };
      delete updated[platformId];
      return updated;
    });
  };

  const handlePrivacyChange = (setting) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleContinue = () => {
    navigate('/onboarding/verification-complete');
  };

  const handleSkip = () => {
    navigate('/onboarding/verification-complete');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Step 4 of 5 - Social Media Linking (Optional)
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={80} 
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
              Connect Your Social Accounts
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              Link your social media accounts to enhance your profile and improve match quality. 
              This step is completely optional and you have full control over what information is shared.
            </Typography>
          </Box>

          {/* Benefits Overview */}
          <Box sx={{ 
            backgroundColor: '#F9FAFB', 
            borderRadius: 2, 
            p: 3, 
            mb: 4,
            border: '1px solid #E5E7EB'
          }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
              Why Connect Social Accounts?
            </Typography>
            <Grid container spacing={2}>
              {[
                'Verify your identity automatically',
                'Import high-quality photos',
                'Enhance compatibility matching',
                'Show authentic lifestyle',
                'Build trust with potential matches',
                'Save time on profile setup'
              ].map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ color: '#14B8A6', fontSize: 20, mr: 1 }} />
                    <Typography variant="body2">{benefit}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Social Platforms */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom>
              Available Platforms
            </Typography>
            <Grid container spacing={3}>
              {socialPlatforms.map((platform) => {
                const isConnected = linkedAccounts[platform.id]?.connected;
                
                return (
                  <Grid item xs={12} md={6} key={platform.id}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 3, 
                        border: `2px solid ${isConnected ? platform.color : '#E5E7EB'}`,
                        borderRadius: 2,
                        height: '100%',
                        position: 'relative'
                      }}
                    >
                      {isConnected && (
                        <Chip
                          icon={<CheckCircle />}
                          label="Connected"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            backgroundColor: '#14B8A6',
                            color: 'white'
                          }}
                        />
                      )}
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ 
                          color: platform.color, 
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {platform.icon}
                        </Box>
                        <Typography variant="h6" fontWeight="semibold">
                          {platform.name}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {platform.description}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight="semibold" gutterBottom>
                          Benefits:
                        </Typography>
                        {platform.benefits.map((benefit, index) => (
                          <Typography key={index} variant="caption" display="block" color="text.secondary">
                            • {benefit}
                          </Typography>
                        ))}
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle2" fontWeight="semibold" gutterBottom>
                          Data Shared:
                        </Typography>
                        {platform.dataShared.map((data, index) => (
                          <Typography key={index} variant="caption" display="block" color="text.secondary">
                            • {data}
                          </Typography>
                        ))}
                      </Box>

                      {!isConnected ? (
                        <Button
                          fullWidth
                          variant="outlined"
                          onClick={() => handleSocialConnect(platform.id)}
                          disabled={isLoading}
                          sx={{
                            borderColor: platform.color,
                            color: platform.color,
                            '&:hover': {
                              borderColor: platform.color,
                              backgroundColor: `${platform.color}10`
                            }
                          }}
                        >
                          {isLoading ? 'Connecting...' : `Connect ${platform.name}`}
                        </Button>
                      ) : (
                        <Button
                          fullWidth
                          variant="outlined"
                          onClick={() => handleDisconnect(platform.id)}
                          sx={{
                            borderColor: '#E5E7EB',
                            color: '#6B7280'
                          }}
                        >
                          Disconnect
                        </Button>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          {/* Privacy Controls */}
          {Object.keys(linkedAccounts).length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Divider sx={{ mb: 3 }} />
              <Typography variant="h6" fontWeight="semibold" gutterBottom>
                Privacy Controls
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Choose what information from your connected accounts can be used to enhance your profile.
              </Typography>
              
              <Grid container spacing={2}>
                {[
                  { key: 'sharePhotos', label: 'Import and use photos', description: 'Allow importing photos from connected accounts' },
                  { key: 'shareInterests', label: 'Share interests and hobbies', description: 'Use interests for better matching' },
                  { key: 'shareEducation', label: 'Share education information', description: 'Include education in profile' },
                  { key: 'shareWorkplace', label: 'Share workplace information', description: 'Include work history in profile' },
                  { key: 'shareConnections', label: 'Show mutual connections', description: 'Display mutual friends/connections' }
                ].map((setting) => (
                  <Grid item xs={12} key={setting.key}>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      p: 2,
                      border: '1px solid #E5E7EB',
                      borderRadius: 2
                    }}>
                      <Box>
                        <Typography variant="body1" fontWeight="semibold">
                          {setting.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {setting.description}
                        </Typography>
                      </Box>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={privacySettings[setting.key]}
                            onChange={() => handlePrivacyChange(setting.key)}
                            sx={{
                              '& .MuiSwitch-switchBase.Mui-checked': {
                                color: '#7C3AED'
                              },
                              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: '#7C3AED'
                              }
                            }}
                          />
                        }
                        label=""
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Privacy Notice */}
          <Alert 
            severity="info" 
            icon={<Info />}
            sx={{ mb: 4 }}
          >
            <Typography variant="body2">
              <strong>Your Privacy is Protected:</strong> We only access the specific information you authorize. 
              You can disconnect any account or change privacy settings at any time. 
              Your social media passwords are never stored or accessed.
            </Typography>
          </Alert>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate('/onboarding/phone-verification')}
              sx={{ borderColor: '#E5E7EB' }}
            >
              Back
            </Button>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="text"
                onClick={handleSkip}
                sx={{ color: '#6B7280' }}
              >
                Skip This Step
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleContinue}
                sx={{
                  backgroundColor: '#7C3AED',
                  '&:hover': {
                    backgroundColor: '#6D28D9'
                  }
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SocialMediaLinking;

