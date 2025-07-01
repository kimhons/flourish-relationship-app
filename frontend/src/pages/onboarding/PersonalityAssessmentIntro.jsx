/**
 * Screen 121: Personality Assessment Introduction
 * Assessment overview with scientific backing and benefits explanation
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
  Grid,
  Paper,
  Avatar,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Psychology,
  ArrowForward,
  ArrowBack,
  Science,
  Timer,
  TrendingUp,
  Favorite,
  ExpandMore,
  CheckCircle,
  Star,
  School,
  Groups
} from '@mui/icons-material';

const PersonalityAssessmentIntro = () => {
  const navigate = useNavigate();
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const assessmentBenefits = [
    {
      icon: <TrendingUp sx={{ color: '#14B8A6' }} />,
      title: 'Better Matches',
      description: 'Find partners who truly complement your personality',
      stat: '85% higher compatibility'
    },
    {
      icon: <Favorite sx={{ color: '#EF4444' }} />,
      title: 'Deeper Connections',
      description: 'Understand yourself and connect on a meaningful level',
      stat: '3x more meaningful conversations'
    },
    {
      icon: <Psychology sx={{ color: '#7C3AED' }} />,
      title: 'Self-Discovery',
      description: 'Gain insights into your relationship patterns and preferences',
      stat: '92% report new self-insights'
    },
    {
      icon: <Groups sx={{ color: '#F59E0B' }} />,
      title: 'Communication',
      description: 'Learn how to communicate effectively with different personality types',
      stat: '78% improvement in communication'
    }
  ];

  const scientificBacking = [
    {
      title: 'Big Five Personality Model',
      description: 'Based on decades of psychological research and validated across cultures',
      icon: <School sx={{ color: '#7C3AED' }} />
    },
    {
      title: 'Attachment Theory',
      description: 'Understand your relationship attachment style and compatibility patterns',
      icon: <Favorite sx={{ color: '#EF4444' }} />
    },
    {
      title: 'Communication Styles',
      description: 'Research-backed assessment of how you prefer to communicate and resolve conflicts',
      icon: <Groups sx={{ color: '#14B8A6' }} />
    }
  ];

  const assessmentComponents = [
    { name: 'Big Five Personality', time: '8-10 minutes', questions: '44 questions' },
    { name: 'Attachment Style', time: '5-7 minutes', questions: '20 questions' },
    { name: 'Communication Style', time: '3-5 minutes', questions: '15 questions' }
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleStartAssessment = () => {
    navigate('/onboarding/big-five-personality');
  };

  const handleBack = () => {
    navigate('/onboarding/verification-complete');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Personality Assessment - Introduction
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

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ 
              display: 'inline-flex', 
              p: 3, 
              borderRadius: '50%', 
              backgroundColor: '#F3F4F6',
              mb: 3
            }}>
              <Psychology sx={{ fontSize: 64, color: '#7C3AED' }} />
            </Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Discover Your Personality
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Take our scientifically-backed personality assessment to unlock deeper insights 
              about yourself and find truly compatible matches.
            </Typography>
          </Box>

          {/* Assessment Overview */}
          <Box sx={{ 
            backgroundColor: '#F9FAFB', 
            borderRadius: 2, 
            p: 3, 
            mb: 4,
            border: '1px solid #E5E7EB'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Timer sx={{ color: '#7C3AED', fontSize: 24 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">15-20 min</Typography>
                  <Typography variant="caption" color="text.secondary">Total Time</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Science sx={{ color: '#14B8A6', fontSize: 24 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">79 Questions</Typography>
                  <Typography variant="caption" color="text.secondary">Research-Based</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Star sx={{ color: '#F59E0B', fontSize: 24 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">3 Assessments</Typography>
                  <Typography variant="caption" color="text.secondary">Comprehensive</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Benefits Grid */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Why Take the Assessment?
            </Typography>
            <Grid container spacing={3}>
              {assessmentBenefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3, 
                      height: '100%',
                      border: '1px solid #E5E7EB',
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: '#7C3AED',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Avatar sx={{ 
                        backgroundColor: 'transparent',
                        border: '2px solid #E5E7EB',
                        width: 48,
                        height: 48
                      }}>
                        {benefit.icon}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="semibold" gutterBottom>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {benefit.description}
                        </Typography>
                        <Chip 
                          label={benefit.stat} 
                          size="small" 
                          sx={{ 
                            backgroundColor: '#F0FDF4',
                            color: '#14B8A6',
                            fontWeight: 'semibold'
                          }} 
                        />
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Scientific Backing */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Scientific Foundation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 3, maxWidth: 600, mx: 'auto' }}>
              Our assessment is built on decades of psychological research and validated 
              across millions of relationships worldwide.
            </Typography>
            
            <Grid container spacing={2}>
              {scientificBacking.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: 3,
                    border: '1px solid #E5E7EB',
                    borderRadius: 2,
                    height: '100%'
                  }}>
                    <Box sx={{ mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="semibold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Assessment Components */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              Assessment Components
            </Typography>
            
            {assessmentComponents.map((component, index) => (
              <Accordion 
                key={index}
                expanded={expandedAccordion === `panel${index}`}
                onChange={handleAccordionChange(`panel${index}`)}
                elevation={0}
                sx={{ 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px !important',
                  mb: 1,
                  '&:before': { display: 'none' }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{ 
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <CheckCircle sx={{ color: '#14B8A6' }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight="semibold">
                        {component.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Chip label={component.time} size="small" variant="outlined" />
                      <Chip label={component.questions} size="small" variant="outlined" />
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {index === 0 && "Measures your levels of openness, conscientiousness, extraversion, agreeableness, and neuroticism to understand your core personality traits and how they influence your relationships."}
                    {index === 1 && "Identifies your attachment style (secure, anxious, avoidant, or disorganized) to help you understand your relationship patterns and find compatible partners."}
                    {index === 2 && "Analyzes how you prefer to communicate, handle conflict, and express emotions to improve your relationship communication skills."}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Privacy Notice */}
          <Box sx={{ 
            backgroundColor: '#FEF3C7', 
            borderRadius: 2, 
            p: 3, 
            mb: 4,
            border: '1px solid #F59E0B'
          }}>
            <Typography variant="h6" fontWeight="semibold" gutterBottom sx={{ color: '#92400E' }}>
              Your Privacy is Protected
            </Typography>
            <Typography variant="body2" sx={{ color: '#92400E' }}>
              • Your assessment results are completely private and secure<br/>
              • You control what information is shared with potential matches<br/>
              • Results are used only to improve your matching experience<br/>
              • You can retake assessments anytime to update your profile
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleBack}
              sx={{ borderColor: '#E5E7EB' }}
            >
              Back
            </Button>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleStartAssessment}
              sx={{
                backgroundColor: '#7C3AED',
                '&:hover': {
                  backgroundColor: '#6D28D9'
                },
                px: 4,
                py: 1.5
              }}
            >
              Start Assessment
            </Button>
          </Box>

          {/* Motivation Message */}
          <Box sx={{ 
            textAlign: 'center', 
            mt: 4, 
            p: 3, 
            backgroundColor: '#F0FDF4',
            borderRadius: 2,
            border: '1px solid #14B8A6'
          }}>
            <Typography variant="body1" fontWeight="semibold" sx={{ color: '#065F46' }}>
              💡 Pro Tip: Answer honestly for the most accurate results
            </Typography>
            <Typography variant="body2" sx={{ color: '#065F46', mt: 1 }}>
              There are no right or wrong answers - this is about discovering your authentic self!
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PersonalityAssessmentIntro;

