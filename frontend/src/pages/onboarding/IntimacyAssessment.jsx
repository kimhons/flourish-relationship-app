/**
 * Screen 130: Intimacy & Vulnerability Assessment
 * Comprehensive assessment of emotional intimacy, vulnerability comfort, and relationship depth preferences
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
  Grid,
  Slider
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Favorite,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  Visibility,
  Lock,
  LockOpen,
  Heart,
  Group,
  Share,
  Shield,
  Spa,
  EmojiEmotions,
  Support,
  Lightbulb
} from '@mui/icons-material';

const IntimacyAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Intimacy and vulnerability assessment questions
  const questions = [
    // Emotional Intimacy Domain
    {
      id: 'EI1',
      domain: 'Emotional Intimacy',
      category: 'Emotional Sharing',
      type: 'comfort_scale',
      text: 'Sharing my deepest fears and insecurities with a romantic partner',
      scenario: 'Your partner asks about something you\'re really insecure about',
      culturalNote: 'Emotional sharing varies greatly across cultures - some value emotional openness, others prefer emotional privacy',
      insight: 'Emotional intimacy comfort affects relationship depth and emotional connection potential',
      icon: <Psychology />
    },
    {
      id: 'EI2',
      domain: 'Emotional Intimacy',
      category: 'Emotional Support',
      type: 'comfort_scale',
      text: 'Being emotionally vulnerable when I\'m going through difficult times',
      scenario: 'You\'re struggling with something personal and your partner wants to help',
      culturalNote: 'Vulnerability during difficulty varies across cultures and gender expectations',
      insight: 'Vulnerability during challenges determines relationship support and resilience',
      icon: <Support />
    },
    {
      id: 'EI3',
      domain: 'Emotional Intimacy',
      category: 'Past Disclosure',
      type: 'comfort_scale',
      text: 'Discussing my past relationships and romantic history',
      scenario: 'Your partner wants to know about your previous relationships',
      culturalNote: 'Past relationship disclosure varies across cultures and relationship stages',
      insight: 'Past disclosure comfort affects relationship transparency and trust building',
      icon: <Visibility />
    },
    {
      id: 'EI4',
      domain: 'Emotional Intimacy',
      category: 'Future Dreams',
      type: 'comfort_scale',
      text: 'Sharing my dreams, hopes, and future aspirations',
      scenario: 'Talking about your biggest dreams and what you hope to achieve',
      culturalNote: 'Future sharing varies across cultures from individual dreams to collective aspirations',
      insight: 'Future sharing creates emotional connection and relationship vision alignment',
      icon: <Lightbulb />
    },
    {
      id: 'EI5',
      domain: 'Emotional Intimacy',
      category: 'Family Secrets',
      type: 'comfort_scale',
      text: 'Sharing family history and personal background details',
      scenario: 'Your partner wants to understand your family dynamics and background',
      culturalNote: 'Family disclosure varies greatly across cultures and family privacy norms',
      insight: 'Family sharing affects relationship integration and long-term compatibility',
      icon: <Group />
    },

    // Physical Intimacy Domain
    {
      id: 'PI1',
      domain: 'Physical Intimacy',
      category: 'Affection Comfort',
      type: 'comfort_scale',
      text: 'Public displays of affection (holding hands, kissing)',
      scenario: 'Your partner wants to hold hands or kiss in public',
      culturalNote: 'Public affection varies dramatically across cultures and social contexts',
      insight: 'Public affection comfort affects relationship expression and social integration',
      icon: <Favorite />
    },
    {
      id: 'PI2',
      domain: 'Physical Intimacy',
      category: 'Physical Boundaries',
      type: 'comfort_scale',
      text: 'Discussing physical boundaries and preferences openly',
      scenario: 'Having conversations about physical comfort levels and boundaries',
      culturalNote: 'Physical boundary discussion varies across cultures and communication styles',
      insight: 'Boundary communication is crucial for healthy physical intimacy and consent',
      icon: <Shield />
    },
    {
      id: 'PI3',
      domain: 'Physical Intimacy',
      category: 'Intimacy Pace',
      type: 'preference_choice',
      text: 'When it comes to physical intimacy in relationships, I prefer:',
      options: [
        { value: 1, label: 'Taking things very slowly and building gradually', approach: 'Gradual' },
        { value: 2, label: 'Following natural progression without rushing', approach: 'Natural' },
        { value: 3, label: 'Being open to intimacy when it feels right', approach: 'Intuitive' },
        { value: 4, label: 'Being comfortable with faster physical connection', approach: 'Open' },
        { value: 5, label: 'Prioritizing strong physical chemistry early on', approach: 'Chemistry-Focused' }
      ],
      culturalNote: 'Intimacy pacing varies across cultures, religions, and personal values',
      insight: 'Intimacy pacing compatibility prevents relationship pressure and misalignment',
      icon: <Heart />
    },

    // Trust & Vulnerability Domain
    {
      id: 'TV1',
      domain: 'Trust & Vulnerability',
      category: 'Trust Building',
      type: 'comfort_scale',
      text: 'Trusting someone with information that could hurt me if shared',
      scenario: 'Sharing something personal that would be embarrassing if others knew',
      culturalNote: 'Trust building varies across cultures and past relationship experiences',
      insight: 'Trust capacity affects relationship depth and emotional security',
      icon: <LockOpen />
    },
    {
      id: 'TV2',
      domain: 'Trust & Vulnerability',
      category: 'Emotional Dependence',
      type: 'comfort_scale',
      text: 'Allowing myself to emotionally depend on a romantic partner',
      scenario: 'Relying on your partner for emotional support during tough times',
      culturalNote: 'Emotional dependence varies across cultures from independence emphasis to interdependence',
      insight: 'Emotional dependence comfort affects relationship support and connection',
      icon: <Support />
    },
    {
      id: 'TV3',
      domain: 'Trust & Vulnerability',
      category: 'Weakness Exposure',
      type: 'comfort_scale',
      text: 'Showing my partner when I\'m struggling or not at my best',
      scenario: 'Your partner seeing you when you\'re emotional, stressed, or vulnerable',
      culturalNote: 'Weakness exposure varies across cultures and gender expectations',
      insight: 'Vulnerability comfort determines authentic relationship connection and support',
      icon: <Psychology />
    },
    {
      id: 'TV4',
      domain: 'Trust & Vulnerability',
      category: 'Conflict Vulnerability',
      type: 'comfort_scale',
      text: 'Being open about my feelings during relationship conflicts',
      scenario: 'Expressing hurt feelings during an argument with your partner',
      culturalNote: 'Conflict vulnerability varies across cultures and conflict resolution styles',
      insight: 'Conflict vulnerability enables healthy resolution and relationship growth',
      icon: <EmojiEmotions />
    },

    // Relationship Depth Domain
    {
      id: 'RD1',
      domain: 'Relationship Depth',
      category: 'Depth Preference',
      type: 'preference_choice',
      text: 'In relationships, I prefer:',
      options: [
        { value: 1, label: 'Keeping things light and fun most of the time', depth: 'Light' },
        { value: 2, label: 'Balancing fun times with some deeper conversations', depth: 'Balanced' },
        { value: 3, label: 'Regular deep conversations mixed with everyday life', depth: 'Moderately Deep' },
        { value: 4, label: 'Frequent deep emotional and intellectual connection', depth: 'Deep' },
        { value: 5, label: 'Constant emotional and spiritual intimacy', depth: 'Very Deep' }
      ],
      culturalNote: 'Relationship depth preferences vary across cultures and personality types',
      insight: 'Depth compatibility affects relationship satisfaction and emotional fulfillment',
      icon: <Psychology />
    },
    {
      id: 'RD2',
      domain: 'Relationship Depth',
      category: 'Spiritual Intimacy',
      type: 'comfort_scale',
      text: 'Sharing spiritual beliefs and existential thoughts with a partner',
      scenario: 'Discussing your beliefs about life, death, meaning, and spirituality',
      culturalNote: 'Spiritual sharing varies greatly across religious and secular worldviews',
      insight: 'Spiritual intimacy can deepen relationship meaning and shared purpose',
      icon: <Spa />
    },
    {
      id: 'RD3',
      domain: 'Relationship Depth',
      category: 'Life Integration',
      type: 'comfort_scale',
      text: 'Integrating a romantic partner into all areas of my life',
      scenario: 'Including your partner in family events, friend groups, and personal activities',
      culturalNote: 'Life integration varies across cultures and relationship progression norms',
      insight: 'Integration comfort affects relationship development and social connection',
      icon: <Group />
    },

    // Communication Intimacy Domain
    {
      id: 'CI1',
      domain: 'Communication Intimacy',
      category: 'Difficult Conversations',
      type: 'comfort_scale',
      text: 'Having difficult conversations about relationship issues',
      scenario: 'Addressing problems or concerns in your relationship directly',
      culturalNote: 'Difficult conversation comfort varies across cultures and communication styles',
      insight: 'Communication intimacy enables relationship problem-solving and growth',
      icon: <Share />
    },
    {
      id: 'CI2',
      domain: 'Communication Intimacy',
      category: 'Need Expression',
      type: 'comfort_scale',
      text: 'Directly expressing my emotional and physical needs',
      scenario: 'Telling your partner what you need from them emotionally or physically',
      culturalNote: 'Need expression varies across cultures and gender communication patterns',
      insight: 'Need expression is crucial for relationship satisfaction and fulfillment',
      icon: <RecordVoiceOver />
    },
    {
      id: 'CI3',
      domain: 'Communication Intimacy',
      category: 'Feedback Reception',
      type: 'comfort_scale',
      text: 'Receiving honest feedback about my behavior in relationships',
      scenario: 'Your partner telling you about something you do that affects them',
      culturalNote: 'Feedback reception varies across cultures and self-improvement orientations',
      insight: 'Feedback openness enables relationship growth and mutual development',
      icon: <Lightbulb />
    }
  ];

  const comfortOptions = [
    { value: 1, label: 'Very Uncomfortable', color: '#EF4444' },
    { value: 2, label: 'Somewhat Uncomfortable', color: '#F97316' },
    { value: 3, label: 'Neutral/Depends', color: '#EAB308' },
    { value: 4, label: 'Somewhat Comfortable', color: '#22C55E' },
    { value: 5, label: 'Very Comfortable', color: '#059669' }
  ];

  const domainColors = {
    'Emotional Intimacy': '#EC4899',
    'Physical Intimacy': '#F59E0B',
    'Trust & Vulnerability': '#8B5CF6',
    'Relationship Depth': '#3B82F6',
    'Communication Intimacy': '#10B981'
  };

  const domainDescriptions = {
    'Emotional Intimacy': 'Comfort with emotional sharing, vulnerability, and deep emotional connection',
    'Physical Intimacy': 'Comfort with physical affection, boundaries, and intimacy progression',
    'Trust & Vulnerability': 'Ability to trust, be vulnerable, and show authentic self in relationships',
    'Relationship Depth': 'Preference for relationship depth, spiritual connection, and life integration',
    'Communication Intimacy': 'Comfort with difficult conversations, expressing needs, and receiving feedback'
  };

  const domainIcons = {
    'Emotional Intimacy': <Psychology />,
    'Physical Intimacy': <Favorite />,
    'Trust & Vulnerability': <LockOpen />,
    'Relationship Depth': <Heart />,
    'Communication Intimacy': <Share />
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
      // Save responses and navigate to next assessment
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        intimacy: responses
      }));
      navigate('/onboarding/life-goals-assessment');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/love-languages-assessment');
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
            Intimacy & Vulnerability Assessment
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
          <Grid item xs={12/5} key={domain}>
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
              <Typography variant="caption" display="block" color={domainColors[domain]} fontWeight="semibold" sx={{ fontSize: '0.7rem', lineHeight: 1.2 }}>
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
              <Tooltip title={domainDescriptions[currentQuestionData.domain]}>
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {domainDescriptions[currentQuestionData.domain]}
            </Typography>
          </Box>

          {/* Scenario Context */}
          <Box sx={{ mb: 3, p: 3, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <strong>Scenario:</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {currentQuestionData.scenario}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.type === 'comfort_scale' ? 
                `"${currentQuestionData.text}"` : 
                currentQuestionData.text
              }
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {currentQuestionData.type === 'comfort_scale' ? 
                'How comfortable are you with this?' : 
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
              {(currentQuestionData.type === 'comfort_scale' ? comfortOptions : currentQuestionData.options).map((option) => (
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
                          {(option.approach || option.depth) && (
                            <Typography variant="body2" color="text.secondary">
                              {option.approach || option.depth} approach
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

          {/* Cultural & Intimacy Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Intimacy Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Love Languages' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Intimacy Insights
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
                {currentQuestion === questions.length - 1 ? 'Continue to Life Goals' : 'Next Question'}
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
              <strong>Assessment Progress:</strong> {Object.keys(responses).length} of {questions.length} questions completed
              <br />
              <strong>Domains:</strong> Emotional Intimacy, Physical Intimacy, Trust & Vulnerability, Relationship Depth, Communication Intimacy
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.4))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default IntimacyAssessment;

