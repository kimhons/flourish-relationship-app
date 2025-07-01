/**
 * Screen 127: Lifestyle Preferences & Compatibility
 * Comprehensive lifestyle assessment for compatibility matching
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
  Slider,
  Switch,
  FormGroup
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Lifestyle,
  Info,
  CheckCircle,
  Timer,
  Home,
  Restaurant,
  FitnessCenter,
  Nightlife,
  Nature,
  LocalMovies,
  School,
  Work,
  Flight,
  Pets,
  SmokingRooms,
  LocalBar,
  Coffee,
  DirectionsCar,
  Public,
  Weekend,
  Schedule,
  Lightbulb,
  Star
} from '@mui/icons-material';

const LifestylePreferences = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Lifestyle preferences assessment questions
  const questions = [
    // Living Situation & Environment
    {
      id: 'LS1',
      domain: 'Living Situation',
      category: 'Housing Preference',
      type: 'preference_choice',
      text: 'Your ideal living situation is:',
      options: [
        { value: 1, label: 'Urban apartment/condo in the heart of the city', style: 'Urban Core' },
        { value: 2, label: 'Suburban home with yard and neighborhood community', style: 'Suburban' },
        { value: 3, label: 'Rural property with space and nature access', style: 'Rural' },
        { value: 4, label: 'Flexible - comfortable in various living situations', style: 'Flexible' },
        { value: 5, label: 'Minimalist living - small space, big experiences', style: 'Minimalist' }
      ],
      culturalNote: 'Living preferences vary across cultures, economic situations, and life stages',
      insight: 'Living situation compatibility affects daily life harmony and future planning',
      icon: <Home />
    },
    {
      id: 'LS2',
      domain: 'Living Situation',
      category: 'Roommate Preference',
      type: 'preference_choice',
      text: 'Your preference for living arrangements:',
      options: [
        { value: 1, label: 'Live alone - value privacy and independence', style: 'Solo Living' },
        { value: 2, label: 'Live with romantic partner only', style: 'Couple Only' },
        { value: 3, label: 'Open to roommates for financial/social benefits', style: 'Roommate Friendly' },
        { value: 4, label: 'Prefer living with family or close friends', style: 'Family/Friends' },
        { value: 5, label: 'Communal living - shared spaces and responsibilities', style: 'Communal' }
      ],
      culturalNote: 'Living arrangements vary across cultures and economic circumstances',
      insight: 'Living arrangement preferences affect relationship progression and lifestyle compatibility',
      icon: <Home />
    },

    // Social & Entertainment Preferences
    {
      id: 'SE1',
      domain: 'Social Life',
      category: 'Social Energy',
      type: 'scale_preference',
      text: 'Your ideal balance of social time vs. alone time:',
      scaleLabels: ['Mostly Alone Time', 'Balanced', 'Mostly Social Time'],
      culturalNote: 'Social preferences vary across personality types and cultural backgrounds',
      insight: 'Social energy compatibility affects relationship activities and personal space needs',
      icon: <Weekend />
    },
    {
      id: 'SE2',
      domain: 'Social Life',
      category: 'Entertainment Style',
      type: 'preference_choice',
      text: 'Your preferred entertainment and social activities:',
      options: [
        { value: 1, label: 'Quiet activities - reading, movies at home, intimate conversations', style: 'Quiet/Intimate' },
        { value: 2, label: 'Cultural activities - museums, theater, art events, concerts', style: 'Cultural' },
        { value: 3, label: 'Active social - parties, bars, clubs, large gatherings', style: 'Active Social' },
        { value: 4, label: 'Outdoor adventures - hiking, sports, nature activities', style: 'Outdoor Active' },
        { value: 5, label: 'Varied mix - enjoy different types of activities', style: 'Varied' }
      ],
      culturalNote: 'Entertainment preferences vary across cultures, ages, and personality types',
      insight: 'Entertainment compatibility affects shared activities and relationship satisfaction',
      icon: <LocalMovies />
    },
    {
      id: 'SE3',
      domain: 'Social Life',
      category: 'Nightlife Preference',
      type: 'priority_scale',
      text: 'How important is an active nightlife (bars, clubs, late-night activities)?',
      scenario: 'Going out for drinks, dancing, late-night entertainment, and nightlife scenes',
      culturalNote: 'Nightlife importance varies across cultures, ages, and lifestyle preferences',
      insight: 'Nightlife compatibility affects social activities and lifestyle alignment',
      icon: <Nightlife />
    },

    // Health & Fitness Lifestyle
    {
      id: 'HF1',
      domain: 'Health & Fitness',
      category: 'Fitness Priority',
      type: 'priority_scale',
      text: 'How important is regular exercise and physical fitness in your life?',
      scenario: 'Working out, sports, physical activities, and maintaining fitness routines',
      culturalNote: 'Fitness priorities vary across cultures, ages, and health backgrounds',
      insight: 'Fitness compatibility affects lifestyle choices and mutual health support',
      icon: <FitnessCenter />
    },
    {
      id: 'HF2',
      domain: 'Health & Fitness',
      category: 'Diet Style',
      type: 'preference_choice',
      text: 'Your approach to diet and nutrition:',
      options: [
        { value: 1, label: 'Very health-conscious - organic, clean eating, strict nutrition', style: 'Health-Focused' },
        { value: 2, label: 'Balanced approach - healthy most of the time with occasional treats', style: 'Balanced' },
        { value: 3, label: 'Flexible eater - enjoy variety without strict restrictions', style: 'Flexible' },
        { value: 4, label: 'Food lover - prioritize taste and experience over health', style: 'Food-Focused' },
        { value: 5, label: 'Special dietary needs - vegetarian, vegan, allergies, etc.', style: 'Special Diet' }
      ],
      culturalNote: 'Dietary preferences vary across cultures, health needs, and personal values',
      insight: 'Diet compatibility affects daily life, cooking, and health lifestyle choices',
      icon: <Restaurant />
    },

    // Substance Use & Lifestyle Choices
    {
      id: 'SU1',
      domain: 'Lifestyle Choices',
      category: 'Alcohol Preference',
      type: 'preference_choice',
      text: 'Your relationship with alcohol:',
      options: [
        { value: 1, label: 'Don\'t drink alcohol at all', style: 'Non-Drinker' },
        { value: 2, label: 'Occasional social drinking only', style: 'Light Social' },
        { value: 3, label: 'Regular moderate drinking - wine with dinner, weekend drinks', style: 'Moderate' },
        { value: 4, label: 'Enjoy drinking as part of social life and entertainment', style: 'Social Drinker' },
        { value: 5, label: 'Prefer not to answer or it\'s complicated', style: 'Private' }
      ],
      culturalNote: 'Alcohol preferences vary across cultures, religions, and personal experiences',
      insight: 'Alcohol compatibility affects social activities and lifestyle alignment',
      icon: <LocalBar />
    },
    {
      id: 'SU2',
      domain: 'Lifestyle Choices',
      category: 'Smoking Preference',
      type: 'preference_choice',
      text: 'Your relationship with smoking/tobacco:',
      options: [
        { value: 1, label: 'Never smoke and prefer non-smoking partners', style: 'Non-Smoker' },
        { value: 2, label: 'Don\'t smoke but okay with occasional social smoking', style: 'Tolerant' },
        { value: 3, label: 'Occasional social smoker', style: 'Social Smoker' },
        { value: 4, label: 'Regular smoker', style: 'Regular Smoker' },
        { value: 5, label: 'Prefer not to answer', style: 'Private' }
      ],
      culturalNote: 'Smoking preferences vary across cultures and health consciousness',
      insight: 'Smoking compatibility affects health lifestyle and daily living preferences',
      icon: <SmokingRooms />
    },

    // Work-Life Balance & Schedule
    {
      id: 'WL1',
      domain: 'Work-Life Balance',
      category: 'Schedule Preference',
      type: 'preference_choice',
      text: 'Your ideal daily schedule and routine:',
      options: [
        { value: 1, label: 'Early riser - morning person with structured schedule', style: 'Morning Person' },
        { value: 2, label: 'Balanced schedule - regular hours with some flexibility', style: 'Balanced' },
        { value: 3, label: 'Night owl - prefer later hours and flexible schedule', style: 'Night Person' },
        { value: 4, label: 'Irregular schedule - shift work or non-traditional hours', style: 'Irregular' },
        { value: 5, label: 'Completely flexible - adapt to circumstances', style: 'Flexible' }
      ],
      culturalNote: 'Schedule preferences vary across work types, personality, and life circumstances',
      insight: 'Schedule compatibility affects quality time and daily life coordination',
      icon: <Schedule />
    },
    {
      id: 'WL2',
      domain: 'Work-Life Balance',
      category: 'Work Intensity',
      type: 'scale_preference',
      text: 'Your approach to work intensity and career focus:',
      scaleLabels: ['Work to Live', 'Balanced', 'Live to Work'],
      culturalNote: 'Work intensity varies across cultures, career stages, and personal values',
      insight: 'Work-life balance compatibility affects relationship time and stress levels',
      icon: <Work />
    },

    // Travel & Adventure
    {
      id: 'TA1',
      domain: 'Travel & Adventure',
      category: 'Travel Frequency',
      type: 'priority_scale',
      text: 'How important is regular travel and exploring new places?',
      scenario: 'Taking trips, exploring new destinations, and having travel adventures',
      culturalNote: 'Travel priorities vary across economic situations, cultures, and life stages',
      insight: 'Travel compatibility affects lifestyle choices and shared experiences',
      icon: <Flight />
    },
    {
      id: 'TA2',
      domain: 'Travel & Adventure',
      category: 'Adventure Level',
      type: 'preference_choice',
      text: 'Your preferred level of adventure and risk-taking:',
      options: [
        { value: 1, label: 'Prefer safety and predictability - low-risk activities', style: 'Safety-Focused' },
        { value: 2, label: 'Some adventure but with reasonable safety measures', style: 'Cautious Adventure' },
        { value: 3, label: 'Balanced approach - calculated risks for good experiences', style: 'Balanced Risk' },
        { value: 4, label: 'Love adventure and trying new, exciting experiences', style: 'Adventure-Seeking' },
        { value: 5, label: 'Thrill-seeker - enjoy high-risk, adrenaline activities', style: 'Thrill-Seeker' }
      ],
      culturalNote: 'Adventure preferences vary across personality types and life experiences',
      insight: 'Adventure compatibility affects shared activities and lifestyle excitement',
      icon: <Nature />
    },

    // Technology & Digital Life
    {
      id: 'TD1',
      domain: 'Technology & Digital',
      category: 'Technology Use',
      type: 'preference_choice',
      text: 'Your relationship with technology and digital life:',
      options: [
        { value: 1, label: 'Minimal technology use - prefer offline activities', style: 'Low-Tech' },
        { value: 2, label: 'Balanced use - technology for necessity and some entertainment', style: 'Balanced Tech' },
        { value: 3, label: 'Regular user - social media, apps, digital entertainment', style: 'Regular User' },
        { value: 4, label: 'Heavy user - technology integrated into most activities', style: 'High-Tech' },
        { value: 5, label: 'Tech enthusiast - early adopter of new technologies', style: 'Tech Enthusiast' }
      ],
      culturalNote: 'Technology use varies across generations, cultures, and personal preferences',
      insight: 'Technology compatibility affects communication styles and shared activities',
      icon: <School />
    },

    // Pets & Animals
    {
      id: 'PA1',
      domain: 'Pets & Animals',
      category: 'Pet Preference',
      type: 'preference_choice',
      text: 'Your preference regarding pets and animals:',
      options: [
        { value: 1, label: 'Love pets and want them as part of my life', style: 'Pet Lover' },
        { value: 2, label: 'Like pets but don\'t necessarily want to own them', style: 'Pet Friendly' },
        { value: 3, label: 'Neutral about pets - depends on circumstances', style: 'Neutral' },
        { value: 4, label: 'Prefer not to have pets due to lifestyle/allergies', style: 'Pet-Free' },
        { value: 5, label: 'Allergic to or afraid of certain animals', style: 'Pet Allergic' }
      ],
      culturalNote: 'Pet preferences vary across cultures, living situations, and personal experiences',
      insight: 'Pet compatibility affects living arrangements and lifestyle choices',
      icon: <Pets />
    },

    // Transportation & Mobility
    {
      id: 'TM1',
      domain: 'Transportation',
      category: 'Transportation Style',
      type: 'preference_choice',
      text: 'Your preferred mode of transportation:',
      options: [
        { value: 1, label: 'Car owner - prefer driving and car-based transportation', style: 'Car-Dependent' },
        { value: 2, label: 'Public transportation - buses, trains, rideshare', style: 'Public Transit' },
        { value: 3, label: 'Active transportation - walking, biking, scooters', style: 'Active Transit' },
        { value: 4, label: 'Mixed approach - use different transportation as needed', style: 'Flexible Transit' },
        { value: 5, label: 'Minimal transportation needs - work/live in same area', style: 'Local-Focused' }
      ],
      culturalNote: 'Transportation preferences vary across urban/rural settings and economic situations',
      insight: 'Transportation compatibility affects date planning and lifestyle logistics',
      icon: <DirectionsCar />
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
    'Living Situation': '#3B82F6',
    'Social Life': '#EC4899',
    'Health & Fitness': '#10B981',
    'Lifestyle Choices': '#F59E0B',
    'Work-Life Balance': '#8B5CF6',
    'Travel & Adventure': '#EF4444',
    'Technology & Digital': '#06B6D4',
    'Pets & Animals': '#84CC16',
    'Transportation': '#6366F1'
  };

  const domainDescriptions = {
    'Living Situation': 'Housing preferences, living arrangements, and environment choices',
    'Social Life': 'Social energy, entertainment preferences, and nightlife activities',
    'Health & Fitness': 'Exercise priorities, diet approaches, and health lifestyle choices',
    'Lifestyle Choices': 'Substance use preferences and personal lifestyle decisions',
    'Work-Life Balance': 'Schedule preferences, work intensity, and time management',
    'Travel & Adventure': 'Travel frequency, adventure level, and exploration preferences',
    'Technology & Digital': 'Technology use patterns and digital life integration',
    'Pets & Animals': 'Pet ownership preferences and animal relationships',
    'Transportation': 'Transportation preferences and mobility choices'
  };

  const domainIcons = {
    'Living Situation': <Home />,
    'Social Life': <Weekend />,
    'Health & Fitness': <FitnessCenter />,
    'Lifestyle Choices': <Coffee />,
    'Work-Life Balance': <Work />,
    'Travel & Adventure': <Flight />,
    'Technology & Digital': <School />,
    'Pets & Animals': <Pets />,
    'Transportation': <DirectionsCar />
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

  const handleScaleChange = (event, value) => {
    setResponses(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
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
        lifestylePreferences: responses
      }));
      navigate('/onboarding/communication-patterns-analysis');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/assessment-results');
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
            Lifestyle Preferences & Compatibility Assessment
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
        {Object.entries(domainProgress).slice(0, 9).map(([domain, count]) => (
          <Grid item xs={12/9} key={domain}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${domainColors[domain]}10` : 'transparent',
                minHeight: 70
              }}
            >
              {React.cloneElement(domainIcons[domain], { 
                sx: { color: domainColors[domain], fontSize: 16, mb: 0.5 } 
              })}
              <Typography variant="caption" display="block" color={domainColors[domain]} fontWeight="semibold" sx={{ fontSize: '0.6rem', lineHeight: 1 }}>
                {domain.split(' ')[0]}
              </Typography>
              <Typography variant="h6" color={domainColors[domain]} sx={{ fontSize: '0.9rem' }}>
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
              <Lifestyle sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Lifestyle Preferences
              </Typography>
              <Tooltip title="Comprehensive lifestyle assessment for compatibility matching">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding your lifestyle for better compatibility matching
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
              {currentQuestionData.type === 'priority_scale' ? 
                'Rate the importance to you:' : 
                currentQuestionData.type === 'scale_preference' ?
                'Choose your preference on the scale:' :
                'Choose the option that best describes you:'
              }
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            {currentQuestionData.type === 'scale_preference' ? (
              <Box sx={{ px: 2 }}>
                <Slider
                  value={currentResponse || 3}
                  onChange={handleScaleChange}
                  min={1}
                  max={5}
                  step={1}
                  marks={[
                    { value: 1, label: currentQuestionData.scaleLabels[0] },
                    { value: 3, label: currentQuestionData.scaleLabels[1] },
                    { value: 5, label: currentQuestionData.scaleLabels[2] }
                  ]}
                  sx={{
                    color: domainColors[currentQuestionData.domain],
                    '& .MuiSlider-markLabel': {
                      fontSize: '0.875rem',
                      fontWeight: 'medium'
                    }
                  }}
                />
              </Box>
            ) : (
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
                            {option.style && (
                              <Typography variant="body2" color="text.secondary">
                                {option.style} lifestyle
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
            )}
          </FormControl>

          {/* Cultural & Lifestyle Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Lifestyle Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Assessment Results' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Lifestyle Insights
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
                {currentQuestion === questions.length - 1 ? 'Continue to Communication Analysis' : 'Next Question'}
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
              <strong>Domains:</strong> Living, Social, Health, Lifestyle, Work-Life, Travel, Technology, Pets, Transportation
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.5))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LifestylePreferences;

