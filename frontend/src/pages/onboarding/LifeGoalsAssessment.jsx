/**
 * Screen 131: Life Goals & Future Vision Assessment
 * Comprehensive assessment of life goals, future planning, and relationship vision compatibility
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
  TrendingUp,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  Work,
  Home,
  Family,
  School,
  Flight,
  MonetizationOn,
  Spa,
  Favorite,
  LocationOn,
  Schedule,
  Star,
  EmojiEvents,
  Balance,
  Lightbulb
} from '@mui/icons-material';

const LifeGoalsAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Life goals and future vision assessment questions
  const questions = [
    // Career & Professional Goals
    {
      id: 'CG1',
      domain: 'Career Goals',
      category: 'Career Priority',
      type: 'priority_scale',
      text: 'How important is career advancement and professional success to you?',
      scenario: 'Considering your life priorities and what drives you',
      culturalNote: 'Career importance varies across cultures, generations, and socioeconomic backgrounds',
      insight: 'Career priority alignment affects relationship support and life balance decisions',
      icon: <Work />
    },
    {
      id: 'CG2',
      domain: 'Career Goals',
      category: 'Work-Life Balance',
      type: 'preference_choice',
      text: 'Your ideal work-life balance would be:',
      options: [
        { value: 1, label: 'Work is my passion - I want to dedicate most of my time to career', approach: 'Career-Focused' },
        { value: 2, label: 'Strong career focus with some time for personal life', approach: 'Career-Leaning' },
        { value: 3, label: 'Balanced approach - equal focus on work and personal life', approach: 'Balanced' },
        { value: 4, label: 'Personal life priority with meaningful but not consuming work', approach: 'Life-Leaning' },
        { value: 5, label: 'Minimal work commitment - life and relationships come first', approach: 'Life-Focused' }
      ],
      culturalNote: 'Work-life balance varies across cultures and life stages',
      insight: 'Balance preferences affect relationship time, stress levels, and life satisfaction',
      icon: <Balance />
    },
    {
      id: 'CG3',
      domain: 'Career Goals',
      category: 'Career Flexibility',
      type: 'priority_scale',
      text: 'How important is career flexibility for family and relationship needs?',
      scenario: 'Being able to adjust work for relationship milestones, family needs, or partner\'s career',
      culturalNote: 'Career flexibility varies across industries, cultures, and gender expectations',
      insight: 'Career flexibility affects relationship adaptation and mutual support',
      icon: <Schedule />
    },

    // Family & Relationship Goals
    {
      id: 'FG1',
      domain: 'Family Goals',
      category: 'Children Priority',
      type: 'priority_scale',
      text: 'How important is having children to your future happiness?',
      scenario: 'Considering your life vision and what would make you feel fulfilled',
      culturalNote: 'Children importance varies greatly across cultures, religions, and personal values',
      insight: 'Children priority is crucial for long-term relationship compatibility',
      icon: <Family />
    },
    {
      id: 'FG2',
      domain: 'Family Goals',
      category: 'Family Timeline',
      type: 'preference_choice',
      text: 'Your ideal timeline for major relationship milestones:',
      options: [
        { value: 1, label: 'Take things very slowly - no rush for major commitments', timeline: 'Very Slow' },
        { value: 2, label: 'Gradual progression over several years', timeline: 'Gradual' },
        { value: 3, label: 'Steady progression within 2-4 years if right person', timeline: 'Steady' },
        { value: 4, label: 'Relatively quick progression when I find the right person', timeline: 'Quick' },
        { value: 5, label: 'I know what I want and move quickly toward goals', timeline: 'Fast' }
      ],
      culturalNote: 'Relationship timelines vary across cultures, ages, and life experiences',
      insight: 'Timeline compatibility prevents relationship pressure and misaligned expectations',
      icon: <Schedule />
    },
    {
      id: 'FG3',
      domain: 'Family Goals',
      category: 'Extended Family',
      type: 'priority_scale',
      text: 'How important is maintaining close relationships with extended family?',
      scenario: 'Regular contact, family gatherings, and family involvement in your life decisions',
      culturalNote: 'Family closeness varies dramatically across cultures and family structures',
      insight: 'Family priority affects relationship integration and life decisions',
      icon: <Home />
    },

    // Lifestyle & Personal Goals
    {
      id: 'LG1',
      domain: 'Lifestyle Goals',
      category: 'Adventure Priority',
      type: 'priority_scale',
      text: 'How important is travel and adventure in your ideal life?',
      scenario: 'Regular travel, exploring new places, and having adventurous experiences',
      culturalNote: 'Adventure priority varies across cultures, economic situations, and personality types',
      insight: 'Adventure compatibility affects relationship activities and life satisfaction',
      icon: <Flight />
    },
    {
      id: 'LG2',
      domain: 'Lifestyle Goals',
      category: 'Financial Goals',
      type: 'preference_choice',
      text: 'Your approach to financial goals and security:',
      options: [
        { value: 1, label: 'Minimalist approach - money isn\'t important as long as needs are met', approach: 'Minimalist' },
        { value: 2, label: 'Comfortable living with some savings for security', approach: 'Comfortable' },
        { value: 3, label: 'Financial stability with ability to enjoy life and plan for future', approach: 'Stable' },
        { value: 4, label: 'Strong financial growth and building wealth for opportunities', approach: 'Growth-Focused' },
        { value: 5, label: 'Wealth building and financial independence as top priority', approach: 'Wealth-Focused' }
      ],
      culturalNote: 'Financial priorities vary across cultures, backgrounds, and life experiences',
      insight: 'Financial compatibility affects relationship stress and life planning decisions',
      icon: <MonetizationOn />
    },
    {
      id: 'LG3',
      domain: 'Lifestyle Goals',
      category: 'Health & Wellness',
      type: 'priority_scale',
      text: 'How important is health, fitness, and wellness in your daily life?',
      scenario: 'Regular exercise, healthy eating, mental wellness, and physical fitness',
      culturalNote: 'Health priorities vary across cultures and life stages',
      insight: 'Health compatibility affects lifestyle choices and mutual support',
      icon: <Spa />
    },

    // Personal Growth Goals
    {
      id: 'PG1',
      domain: 'Personal Growth',
      category: 'Learning Priority',
      type: 'priority_scale',
      text: 'How important is continuous learning and personal development?',
      scenario: 'Reading, courses, new skills, intellectual growth, and self-improvement',
      culturalNote: 'Learning priority varies across cultures and educational backgrounds',
      insight: 'Growth compatibility affects intellectual connection and mutual development',
      icon: <School />
    },
    {
      id: 'PG2',
      domain: 'Personal Growth',
      category: 'Spiritual Growth',
      type: 'priority_scale',
      text: 'How important is spiritual or philosophical growth in your life?',
      scenario: 'Exploring meaning, purpose, spirituality, or philosophical understanding',
      culturalNote: 'Spiritual growth varies across religious and secular worldviews',
      insight: 'Spiritual compatibility affects relationship depth and shared meaning',
      icon: <Spa />
    },
    {
      id: 'PG3',
      domain: 'Personal Growth',
      category: 'Creative Expression',
      type: 'priority_scale',
      text: 'How important is creative expression and artistic pursuits?',
      scenario: 'Art, music, writing, crafts, or other creative outlets and self-expression',
      culturalNote: 'Creative expression varies across cultures and personality types',
      insight: 'Creative compatibility affects lifestyle choices and mutual appreciation',
      icon: <Star />
    },

    // Location & Stability Goals
    {
      id: 'SG1',
      domain: 'Stability Goals',
      category: 'Location Preference',
      type: 'preference_choice',
      text: 'Your ideal approach to where you live:',
      options: [
        { value: 1, label: 'Love to move frequently and experience different places', approach: 'Nomadic' },
        { value: 2, label: 'Open to moving for opportunities but prefer some stability', approach: 'Flexible' },
        { value: 3, label: 'Prefer to settle in one area but open to occasional moves', approach: 'Settled' },
        { value: 4, label: 'Want to establish roots and stay in one community long-term', approach: 'Rooted' },
        { value: 5, label: 'Deeply committed to specific location/community', approach: 'Anchored' }
      ],
      culturalNote: 'Location preferences vary across cultures, family ties, and career demands',
      insight: 'Location compatibility affects relationship stability and life planning',
      icon: <LocationOn />
    },
    {
      id: 'SG2',
      domain: 'Stability Goals',
      category: 'Routine Preference',
      type: 'preference_choice',
      text: 'Your ideal balance of routine and spontaneity:',
      options: [
        { value: 1, label: 'Love spontaneity and variety - minimal routine', approach: 'Spontaneous' },
        { value: 2, label: 'Some routine but plenty of room for spontaneous adventures', approach: 'Flexible' },
        { value: 3, label: 'Balanced routine with regular opportunities for variety', approach: 'Balanced' },
        { value: 4, label: 'Prefer routine with occasional planned changes', approach: 'Structured' },
        { value: 5, label: 'Love routine and predictability in daily life', approach: 'Routine-Focused' }
      ],
      culturalNote: 'Routine preferences vary across personality types and life stages',
      insight: 'Routine compatibility affects daily life harmony and stress levels',
      icon: <Schedule />
    },

    // Relationship Vision Goals
    {
      id: 'RG1',
      domain: 'Relationship Vision',
      category: 'Partnership Style',
      type: 'preference_choice',
      text: 'Your vision for an ideal romantic partnership:',
      options: [
        { value: 1, label: 'Independent partners who support each other\'s individual goals', style: 'Independent' },
        { value: 2, label: 'Collaborative partnership with shared goals and individual pursuits', style: 'Collaborative' },
        { value: 3, label: 'Deeply integrated partnership where most goals are shared', style: 'Integrated' },
        { value: 4, label: 'Traditional partnership with complementary roles and responsibilities', style: 'Traditional' },
        { value: 5, label: 'Spiritual/soul mate connection with unified life vision', style: 'Unified' }
      ],
      culturalNote: 'Partnership styles vary across cultures, generations, and relationship models',
      insight: 'Partnership vision affects relationship dynamics and goal alignment',
      icon: <Favorite />
    },
    {
      id: 'RG2',
      domain: 'Relationship Vision',
      category: 'Legacy Priority',
      type: 'priority_scale',
      text: 'How important is creating a lasting legacy or impact together?',
      scenario: 'Building something meaningful together that outlasts your relationship - family, business, community impact',
      culturalNote: 'Legacy importance varies across cultures and life philosophies',
      insight: 'Legacy compatibility affects long-term relationship purpose and meaning',
      icon: <EmojiEvents />
    }
  ];

  const priorityOptions = [
    { value: 1, label: 'Not Important', color: '#EF4444' },
    { value: 2, label: 'Somewhat Important', color: '#F97316' },
    { value: 3, label: 'Moderately Important', color: '#EAB308' },
    { value: 4, label: 'Very Important', color: '#22C55E' },
    { value: 5, label: 'Extremely Important', color: '#059669' }
  ];

  const domainColors = {
    'Career Goals': '#3B82F6',
    'Family Goals': '#EC4899',
    'Lifestyle Goals': '#F59E0B',
    'Personal Growth': '#8B5CF6',
    'Stability Goals': '#10B981',
    'Relationship Vision': '#EF4444'
  };

  const domainDescriptions = {
    'Career Goals': 'Professional ambitions, work-life balance, and career flexibility priorities',
    'Family Goals': 'Children, family relationships, and relationship milestone preferences',
    'Lifestyle Goals': 'Adventure, financial security, health, and lifestyle preferences',
    'Personal Growth': 'Learning, spiritual development, and creative expression priorities',
    'Stability Goals': 'Location preferences, routine vs. spontaneity, and stability needs',
    'Relationship Vision': 'Partnership style, legacy building, and relationship purpose'
  };

  const domainIcons = {
    'Career Goals': <Work />,
    'Family Goals': <Family />,
    'Lifestyle Goals': <Flight />,
    'Personal Growth': <School />,
    'Stability Goals': <Home />,
    'Relationship Vision': <Favorite />
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
      // Save responses and navigate to final assessment
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        lifeGoals: responses
      }));
      navigate('/onboarding/relationship-history-assessment');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/intimacy-assessment');
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
            Life Goals & Future Vision Assessment
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
              <TrendingUp sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Life Goals & Future Vision
              </Typography>
              <Tooltip title="Comprehensive assessment of life goals, priorities, and future compatibility">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding your life direction and relationship vision for compatibility
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

          {/* Scenario Context */}
          <Box sx={{ mb: 3, p: 3, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <strong>Context:</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {currentQuestionData.scenario}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.text}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {currentQuestionData.type === 'priority_scale' ? 
                'Rate the importance to you:' : 
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
              {(currentQuestionData.type === 'priority_scale' ? priorityOptions : currentQuestionData.options).map((option) => (
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
                          {(option.approach || option.timeline || option.style) && (
                            <Typography variant="body2" color="text.secondary">
                              {option.approach || option.timeline || option.style} approach
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

          {/* Cultural & Goals Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Goals Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Intimacy Assessment' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Goals Insights
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
                {currentQuestion === questions.length - 1 ? 'Continue to Relationship History' : 'Next Question'}
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
              <strong>Domains:</strong> Career, Family, Lifestyle, Personal Growth, Stability, Relationship Vision
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.4))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LifeGoalsAssessment;

