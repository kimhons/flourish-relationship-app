/**
 * Screen 132: Relationship History Analysis
 * Final comprehensive assessment analyzing relationship patterns, learning, and readiness
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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Chip,
  Alert,
  Fade,
  IconButton,
  Tooltip,
  Grid
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  History,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  Favorite,
  TrendingUp,
  School,
  Healing,
  EmojiEmotions,
  Support,
  Lightbulb,
  Star,
  Warning,
  CheckCircleOutline
} from '@mui/icons-material';

const RelationshipHistoryAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Relationship history and readiness assessment questions
  const questions = [
    // Relationship Experience Domain
    {
      id: 'RE1',
      domain: 'Relationship Experience',
      category: 'Experience Level',
      type: 'preference_choice',
      text: 'Which best describes your romantic relationship experience?',
      options: [
        { value: 1, label: 'Limited dating experience - looking to learn and grow', experience: 'Beginner' },
        { value: 2, label: 'Some dating experience with a few meaningful connections', experience: 'Developing' },
        { value: 3, label: 'Moderate experience with both casual and serious relationships', experience: 'Experienced' },
        { value: 4, label: 'Extensive dating experience including long-term relationships', experience: 'Very Experienced' },
        { value: 5, label: 'Significant relationship experience including marriage/cohabitation', experience: 'Highly Experienced' }
      ],
      culturalNote: 'Relationship experience varies greatly across cultures, ages, and life circumstances',
      insight: 'Experience level affects relationship expectations, skills, and compatibility needs',
      icon: <History />
    },
    {
      id: 'RE2',
      domain: 'Relationship Experience',
      category: 'Relationship Length',
      type: 'preference_choice',
      text: 'Your longest meaningful romantic relationship lasted:',
      options: [
        { value: 1, label: 'Less than 6 months', duration: 'Short-term' },
        { value: 2, label: '6 months to 2 years', duration: 'Medium-term' },
        { value: 3, label: '2-5 years', duration: 'Long-term' },
        { value: 4, label: '5+ years', duration: 'Very Long-term' },
        { value: 5, label: 'I haven\'t had a meaningful romantic relationship yet', duration: 'No Experience' }
      ],
      culturalNote: 'Relationship duration varies across cultures and life stages',
      insight: 'Relationship duration experience affects understanding of long-term dynamics',
      icon: <Timer />
    },

    // Learning & Growth Domain
    {
      id: 'LG1',
      domain: 'Learning & Growth',
      category: 'Relationship Learning',
      type: 'agreement_scale',
      text: 'I have learned important lessons from my past relationships that will help me in future ones',
      scenario: 'Reflecting on what you\'ve learned about yourself, relationships, and what you need',
      culturalNote: 'Relationship learning varies across cultures and self-reflection practices',
      insight: 'Learning from past relationships indicates emotional maturity and growth potential',
      icon: <School />
    },
    {
      id: 'LG2',
      domain: 'Learning & Growth',
      category: 'Pattern Recognition',
      type: 'agreement_scale',
      text: 'I can identify patterns in my past relationships that I want to change',
      scenario: 'Understanding your own relationship patterns and areas for improvement',
      culturalNote: 'Pattern recognition varies across cultures and therapeutic traditions',
      insight: 'Pattern awareness enables conscious relationship choices and personal growth',
      icon: <TrendingUp />
    },
    {
      id: 'LG3',
      domain: 'Learning & Growth',
      category: 'Personal Growth',
      type: 'agreement_scale',
      text: 'I have worked on personal issues that affected my past relationships',
      scenario: 'Taking responsibility for your part in relationship challenges and working on self-improvement',
      culturalNote: 'Personal growth emphasis varies across cultures and therapeutic approaches',
      insight: 'Personal work indicates relationship readiness and emotional maturity',
      icon: <Healing />
    },

    // Emotional Readiness Domain
    {
      id: 'ER1',
      domain: 'Emotional Readiness',
      category: 'Emotional Healing',
      type: 'agreement_scale',
      text: 'I have emotionally processed and healed from my past relationship experiences',
      scenario: 'Being emotionally available and not carrying unresolved hurt or baggage',
      culturalNote: 'Emotional healing varies across cultures and healing traditions',
      insight: 'Emotional healing is crucial for healthy new relationship formation',
      icon: <Healing />
    },
    {
      id: 'ER2',
      domain: 'Emotional Readiness',
      category: 'Relationship Readiness',
      type: 'agreement_scale',
      text: 'I feel emotionally ready to fully invest in a new romantic relationship',
      scenario: 'Having the emotional capacity and availability for a new partnership',
      culturalNote: 'Relationship readiness varies across cultures and life transitions',
      insight: 'Emotional readiness affects relationship success and partner satisfaction',
      icon: <Favorite />
    },
    {
      id: 'ER3',
      domain: 'Emotional Readiness',
      category: 'Trust Capacity',
      type: 'agreement_scale',
      text: 'I am able to trust and be vulnerable with a romantic partner',
      scenario: 'Having the emotional capacity for intimacy and trust despite past experiences',
      culturalNote: 'Trust capacity varies across cultures and past relationship experiences',
      insight: 'Trust capacity is essential for deep romantic connection and intimacy',
      icon: <Support />
    },

    // Relationship Patterns Domain
    {
      id: 'RP1',
      domain: 'Relationship Patterns',
      category: 'Conflict Resolution',
      type: 'preference_choice',
      text: 'When conflicts arose in past relationships, I typically:',
      options: [
        { value: 1, label: 'Avoided conflict and hoped issues would resolve themselves', pattern: 'Avoidant' },
        { value: 2, label: 'Got emotional and had difficulty staying calm during disagreements', pattern: 'Reactive' },
        { value: 3, label: 'Tried to address issues but sometimes struggled with communication', pattern: 'Developing' },
        { value: 4, label: 'Generally communicated well and worked toward resolution', pattern: 'Constructive' },
        { value: 5, label: 'I haven\'t experienced significant relationship conflicts yet', pattern: 'Inexperienced' }
      ],
      culturalNote: 'Conflict patterns vary across cultures and family communication styles',
      insight: 'Conflict patterns predict relationship success and areas for growth',
      icon: <EmojiEmotions />
    },
    {
      id: 'RP2',
      domain: 'Relationship Patterns',
      category: 'Commitment Patterns',
      type: 'preference_choice',
      text: 'In past relationships, my approach to commitment was:',
      options: [
        { value: 1, label: 'I struggled with commitment and often ended things when they got serious', pattern: 'Commitment-Avoidant' },
        { value: 2, label: 'I wanted commitment but sometimes chose partners who weren\'t ready', pattern: 'Commitment-Seeking' },
        { value: 3, label: 'I was open to commitment but wanted to take things slowly', pattern: 'Cautious' },
        { value: 4, label: 'I was ready for commitment when I found the right person', pattern: 'Commitment-Ready' },
        { value: 5, label: 'I haven\'t reached the commitment stage in relationships yet', pattern: 'Inexperienced' }
      ],
      culturalNote: 'Commitment patterns vary across cultures and relationship models',
      insight: 'Commitment patterns affect relationship progression and partner compatibility',
      icon: <CheckCircleOutline />
    },

    // Red Flags & Boundaries Domain
    {
      id: 'RF1',
      domain: 'Boundaries & Red Flags',
      category: 'Red Flag Recognition',
      type: 'agreement_scale',
      text: 'I can now recognize relationship red flags that I might have missed before',
      scenario: 'Being able to identify unhealthy behaviors, incompatibilities, or warning signs early',
      culturalNote: 'Red flag recognition varies across cultures and relationship education',
      insight: 'Red flag recognition protects against unhealthy relationships and improves partner selection',
      icon: <Warning />
    },
    {
      id: 'RF2',
      domain: 'Boundaries & Red Flags',
      category: 'Boundary Setting',
      type: 'agreement_scale',
      text: 'I am better at setting and maintaining healthy boundaries in relationships',
      scenario: 'Being able to communicate your needs and limits clearly and consistently',
      culturalNote: 'Boundary setting varies across cultures and individual assertiveness styles',
      insight: 'Healthy boundaries are essential for relationship respect and personal well-being',
      icon: <Support />
    },

    // Future Relationship Vision Domain
    {
      id: 'FV1',
      domain: 'Future Relationship Vision',
      category: 'Relationship Goals',
      type: 'agreement_scale',
      text: 'I have a clear vision of what I want in my next romantic relationship',
      scenario: 'Understanding your relationship needs, values, and non-negotiables',
      culturalNote: 'Relationship clarity varies across cultures and life experiences',
      insight: 'Clear relationship vision improves partner selection and relationship satisfaction',
      icon: <Star />
    },
    {
      id: 'FV2',
      domain: 'Future Relationship Vision',
      category: 'Self-Knowledge',
      type: 'agreement_scale',
      text: 'I understand what I bring to a relationship and what I need from a partner',
      scenario: 'Having self-awareness about your strengths, needs, and relationship contribution',
      culturalNote: 'Self-knowledge varies across cultures and introspection practices',
      insight: 'Self-knowledge enables better partner matching and relationship success',
      icon: <Psychology />
    },
    {
      id: 'FV3',
      domain: 'Future Relationship Vision',
      category: 'Optimism & Hope',
      type: 'agreement_scale',
      text: 'I feel optimistic about finding a healthy, fulfilling romantic relationship',
      scenario: 'Maintaining hope and positive expectations despite past challenges',
      culturalNote: 'Relationship optimism varies across cultures and past experiences',
      insight: 'Relationship optimism affects dating behavior and relationship outcomes',
      icon: <Star />
    }
  ];

  const agreementOptions = [
    { value: 1, label: 'Strongly Disagree', color: '#EF4444' },
    { value: 2, label: 'Somewhat Disagree', color: '#F97316' },
    { value: 3, label: 'Neutral', color: '#EAB308' },
    { value: 4, label: 'Somewhat Agree', color: '#22C55E' },
    { value: 5, label: 'Strongly Agree', color: '#059669' }
  ];

  const domainColors = {
    'Relationship Experience': '#3B82F6',
    'Learning & Growth': '#10B981',
    'Emotional Readiness': '#EC4899',
    'Relationship Patterns': '#F59E0B',
    'Boundaries & Red Flags': '#EF4444',
    'Future Relationship Vision': '#8B5CF6'
  };

  const domainDescriptions = {
    'Relationship Experience': 'Your history and experience level with romantic relationships',
    'Learning & Growth': 'How you\'ve learned and grown from past relationship experiences',
    'Emotional Readiness': 'Your emotional availability and readiness for a new relationship',
    'Relationship Patterns': 'Your typical patterns and behaviors in romantic relationships',
    'Boundaries & Red Flags': 'Your ability to recognize unhealthy patterns and set boundaries',
    'Future Relationship Vision': 'Your clarity and optimism about future romantic relationships'
  };

  const domainIcons = {
    'Relationship Experience': <History />,
    'Learning & Growth': <School />,
    'Emotional Readiness': <Healing />,
    'Relationship Patterns': <TrendingUp />,
    'Boundaries & Red Flags': <Warning />,
    'Future Relationship Vision': <Star />
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResponseChange = (value) => {
    setResponses(prev => ({
      ...prev,
      [questions[currentQuestion].id]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowInsight(false);
    } else {
      // Save final responses and navigate to comprehensive results
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        relationshipHistory: responses
      }));
      navigate('/onboarding/assessment-complete');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/life-goals-assessment');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];
  const currentResponse = responses[currentQuestionData.id];

  // Calculate domain progress
  const getDomainProgress = () => {
    const counts = {};
    Object.keys(domainColors).forEach(domain => counts[domain] = 0);
    
    Object.keys(responses).forEach(questionId => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        counts[question.domain]++;
      }
    });
    return counts;
  };

  const domainProgress = getDomainProgress();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Relationship History Analysis - Final Assessment
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip 
              icon={<Timer />} 
              label={formatTime(timeSpent)} 
              size="small" 
              variant="outlined" 
            />
            <Typography variant="body2" color="text.secondary">
              {currentQuestion + 1} of {questions.length}
            </Typography>
          </Box>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              backgroundColor: domainColors[currentQuestionData.domain]
            }
          }} 
        />
      </Box>

      {/* Domain Progress */}
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {Object.entries(domainProgress).map(([domain, count]) => (
          <Grid item xs={2} key={domain}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1.5, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${domainColors[domain]}10` : 'transparent',
                minHeight: 80
              }}
            >
              {React.cloneElement(domainIcons[domain], { 
                sx: { color: domainColors[domain], fontSize: 20, mb: 0.5 } 
              })}
              <Typography variant="caption" display="block" color={domainColors[domain]} fontWeight="semibold" sx={{ fontSize: '0.65rem', lineHeight: 1.1 }}>
                {domain.split(' ').map((word, i) => (
                  <span key={i}>{word}<br /></span>
                ))}
              </Typography>
              <Typography variant="h6" color={domainColors[domain]}>
                {count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Assessment Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <History sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Relationship History Analysis
              </Typography>
              <Tooltip title="Final assessment analyzing relationship patterns, learning, and readiness">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding your relationship journey and readiness for lasting love
            </Typography>
          </Box>

          {/* Current Domain Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                icon={React.cloneElement(domainIcons[currentQuestionData.domain], { sx: { color: 'white' } })}
                label={currentQuestionData.domain}
                sx={{ 
                  backgroundColor: domainColors[currentQuestionData.domain],
                  color: 'white',
                  fontWeight: 'semibold'
                }}
              />
              <Chip 
                label={currentQuestionData.category}
                variant="outlined"
                size="small"
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {domainDescriptions[currentQuestionData.domain]}
            </Typography>
          </Box>

          {/* Scenario Context (if applicable) */}
          {currentQuestionData.scenario && (
            <Box sx={{ mb: 3, p: 3, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Context:</strong>
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                {currentQuestionData.scenario}
              </Typography>
            </Box>
          )}

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.text}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {currentQuestionData.type === 'agreement_scale' ? 
                'How much do you agree with this statement?' : 
                'Choose the option that best describes you:'
              }
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <RadioGroup
              value={currentResponse || ''}
              onChange={(e) => handleResponseChange(e.target.value)}
              sx={{ gap: 2 }}
            >
              {(currentQuestionData.type === 'agreement_scale' ? agreementOptions : currentQuestionData.options).map((option) => (
                <Paper
                  key={option.value}
                  elevation={0}
                  sx={{
                    border: currentResponse === option.value ? 
                      `2px solid ${option.color || domainColors[currentQuestionData.domain]}` : 
                      '1px solid #E5E7EB',
                    borderRadius: 2,
                    p: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: option.color || domainColors[currentQuestionData.domain],
                      backgroundColor: '#F9FAFB'
                    }
                  }}
                  onClick={() => handleResponseChange(option.value)}
                >
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Radio 
                        sx={{ 
                          color: option.color || domainColors[currentQuestionData.domain],
                          '&.Mui-checked': {
                            color: option.color || domainColors[currentQuestionData.domain]
                          }
                        }} 
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Box>
                          <Typography variant="body1" fontWeight={currentResponse === option.value ? 'semibold' : 'normal'}>
                            {option.label}
                          </Typography>
                          {(option.experience || option.duration || option.pattern) && (
                            <Typography variant="body2" color="text.secondary">
                              {option.experience || option.duration || option.pattern} pattern
                            </Typography>
                          )}
                        </Box>
                        {currentResponse === option.value && (
                          <CheckCircle sx={{ color: option.color || domainColors[currentQuestionData.domain], ml: 2 }} />
                        )}
                      </Box>
                    }
                    sx={{ margin: 0, width: '100%' }}
                  />
                </Paper>
              ))}
            </RadioGroup>
          </FormControl>

          {/* Cultural & History Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Relationship Insight:</strong> {currentQuestionData.insight}
              </Typography>
            </Alert>
          </Fade>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleBack}
              sx={{ borderColor: '#E5E7EB' }}
            >
              {currentQuestion === 0 ? 'Back to Life Goals' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  History Insights
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: domainColors[currentQuestionData.domain],
                  '&:hover': {
                    backgroundColor: domainColors[currentQuestionData.domain],
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Complete Assessment Journey' : 'Next Question'}
              </Button>
            </Box>
          </Box>

          {/* Assessment Info */}
          <Box sx={{ 
            mt: 4, 
            p: 3, 
            backgroundColor: '#F9FAFB',
            borderRadius: 2,
            border: '1px solid #E5E7EB'
          }}>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              <strong>Final Assessment:</strong> {Object.keys(responses).length} of {questions.length} questions completed
              <br />
              <strong>Domains:</strong> Experience, Learning, Readiness, Patterns, Boundaries, Future Vision
              <br />
              <strong>Next:</strong> Comprehensive results and compatibility insights
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RelationshipHistoryAssessment;

