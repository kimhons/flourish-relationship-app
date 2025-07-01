/**
 * Screen 126: Values & Life Philosophy Assessment
 * Comprehensive assessment of core values, life priorities, and philosophical orientations
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
  School,
  Work,
  Home,
  Explore,
  Security,
  TrendingUp,
  Groups,
  Nature,
  Spa,
  Church,
  Family
} from '@mui/icons-material';

const ValuesAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Comprehensive values assessment questions with cultural sensitivity
  const questions = [
    // Spirituality & Meaning Domain
    {
      id: 'SPIR1',
      domain: 'Spirituality',
      category: 'Religious/Spiritual Practice',
      type: 'importance_scale',
      text: 'Having a spiritual or religious practice in my life',
      description: 'Regular engagement with spiritual or religious activities, beliefs, and community',
      culturalNote: 'Spirituality varies greatly across cultures - from organized religion to personal spiritual practices',
      insight: 'Spiritual compatibility can be crucial for long-term relationship harmony and shared meaning-making',
      icon: <Church />
    },
    {
      id: 'SPIR2',
      domain: 'Spirituality',
      category: 'Life Purpose',
      type: 'importance_scale',
      text: 'Finding deeper meaning and purpose in life',
      description: 'Seeking understanding of life\'s greater purpose and one\'s role in the world',
      culturalNote: 'Purpose-seeking varies from individual achievement to collective contribution across cultures',
      insight: 'Shared sense of purpose strengthens relationship bonds and mutual support',
      icon: <Psychology />
    },
    {
      id: 'SPIR3',
      domain: 'Spirituality',
      category: 'Transcendence',
      type: 'importance_scale',
      text: 'Experiencing connection to something greater than myself',
      description: 'Feeling connected to nature, humanity, the universe, or divine presence',
      culturalNote: 'Transcendent experiences valued differently across spiritual and secular worldviews',
      insight: 'Shared transcendent experiences can deepen intimacy and relationship meaning',
      icon: <Nature />
    },

    // Family & Relationships Domain
    {
      id: 'FAM1',
      domain: 'Family',
      category: 'Family Priority',
      type: 'importance_scale',
      text: 'Maintaining close relationships with family members',
      description: 'Prioritizing time, energy, and emotional investment in family relationships',
      culturalNote: 'Family importance varies greatly between individualist and collectivist cultures',
      insight: 'Family orientation affects relationship dynamics, time allocation, and life decisions',
      icon: <Family />
    },
    {
      id: 'FAM2',
      domain: 'Family',
      category: 'Future Family',
      type: 'importance_scale',
      text: 'Having children and raising a family',
      description: 'Desire to become a parent and invest in child-rearing and family development',
      culturalNote: 'Family planning expectations vary significantly across cultures and generations',
      insight: 'Alignment on family planning is crucial for long-term relationship compatibility',
      icon: <Home />
    },
    {
      id: 'FAM3',
      domain: 'Family',
      category: 'Extended Family',
      type: 'importance_scale',
      text: 'Being involved with extended family and community',
      description: 'Maintaining connections with grandparents, cousins, family friends, and community networks',
      culturalNote: 'Extended family involvement varies from nuclear family focus to multi-generational living',
      insight: 'Extended family expectations can significantly impact relationship dynamics and decisions',
      icon: <Groups />
    },

    // Career & Achievement Domain
    {
      id: 'CAR1',
      domain: 'Career',
      category: 'Professional Success',
      type: 'importance_scale',
      text: 'Achieving success and recognition in my career',
      description: 'Pursuing professional advancement, expertise, and acknowledgment in chosen field',
      culturalNote: 'Career ambition varies across cultures, genders, and socioeconomic backgrounds',
      insight: 'Career priorities affect time allocation, stress levels, and relationship dynamics',
      icon: <Work />
    },
    {
      id: 'CAR2',
      domain: 'Career',
      category: 'Work-Life Balance',
      type: 'importance_scale',
      text: 'Maintaining balance between work and personal life',
      description: 'Ensuring work demands don\'t overwhelm personal relationships and well-being',
      culturalNote: 'Work-life balance expectations vary across cultures and career stages',
      insight: 'Balance preferences affect relationship time, stress management, and life satisfaction',
      icon: <Spa />
    },
    {
      id: 'CAR3',
      domain: 'Career',
      category: 'Financial Success',
      type: 'importance_scale',
      text: 'Building financial security and wealth',
      description: 'Accumulating resources for security, comfort, and future opportunities',
      culturalNote: 'Financial priorities vary across cultures, from security focus to wealth accumulation',
      insight: 'Financial values affect lifestyle choices, stress levels, and relationship decisions',
      icon: <TrendingUp />
    },

    // Adventure & Growth Domain
    {
      id: 'ADV1',
      domain: 'Adventure',
      category: 'New Experiences',
      type: 'importance_scale',
      text: 'Seeking new experiences and adventures',
      description: 'Pursuing novel activities, travel, learning, and personal challenges',
      culturalNote: 'Adventure-seeking varies from stability preference to constant exploration across cultures',
      insight: 'Adventure compatibility affects relationship activities, growth, and life satisfaction',
      icon: <Explore />
    },
    {
      id: 'ADV2',
      domain: 'Adventure',
      category: 'Personal Growth',
      type: 'importance_scale',
      text: 'Continuously learning and developing myself',
      description: 'Commitment to ongoing education, skill development, and self-improvement',
      culturalNote: 'Growth orientation varies from traditional stability to constant self-development',
      insight: 'Growth mindset compatibility supports mutual development and relationship evolution',
      icon: <School />
    },
    {
      id: 'ADV3',
      domain: 'Adventure',
      category: 'Creative Expression',
      type: 'importance_scale',
      text: 'Expressing creativity and artistic interests',
      description: 'Engaging in creative activities, artistic pursuits, and self-expression',
      culturalNote: 'Creative expression valued differently across cultures and socioeconomic contexts',
      insight: 'Creative compatibility enhances relationship richness and mutual inspiration',
      icon: <Psychology />
    },

    // Security & Stability Domain
    {
      id: 'SEC1',
      domain: 'Security',
      category: 'Stability',
      type: 'importance_scale',
      text: 'Having predictability and stability in my life',
      description: 'Maintaining consistent routines, secure relationships, and reliable circumstances',
      culturalNote: 'Stability preference varies across cultures and life experiences with uncertainty',
      insight: 'Stability needs affect relationship dynamics, decision-making, and stress tolerance',
      icon: <Security />
    },
    {
      id: 'SEC2',
      domain: 'Security',
      category: 'Health & Wellness',
      type: 'importance_scale',
      text: 'Maintaining physical and mental health',
      description: 'Prioritizing exercise, nutrition, mental health, and overall well-being',
      culturalNote: 'Health priorities vary across cultures, from prevention focus to treatment approach',
      insight: 'Health values affect lifestyle choices, stress management, and relationship support',
      icon: <Favorite />
    },
    {
      id: 'SEC3',
      domain: 'Security',
      category: 'Community',
      type: 'importance_scale',
      text: 'Being part of a supportive community',
      description: 'Maintaining connections with friends, neighbors, and social networks',
      culturalNote: 'Community involvement varies from individual focus to collective participation',
      insight: 'Community orientation affects social activities, support systems, and relationship context',
      icon: <Groups />
    },

    // Life Philosophy Questions
    {
      id: 'PHIL1',
      domain: 'Philosophy',
      category: 'Life Approach',
      type: 'scenario_choice',
      text: 'When facing a major life decision, I tend to:',
      options: [
        { value: 1, label: 'Follow my heart and intuition', philosophy: 'Intuitive' },
        { value: 2, label: 'Analyze all options logically', philosophy: 'Analytical' },
        { value: 3, label: 'Seek advice from trusted people', philosophy: 'Collaborative' },
        { value: 4, label: 'Consider what\'s best for everyone involved', philosophy: 'Collective' },
        { value: 5, label: 'Choose the most practical option', philosophy: 'Pragmatic' }
      ],
      culturalNote: 'Decision-making styles vary across cultures from individual to collective approaches',
      insight: 'Compatible decision-making styles reduce relationship conflict and improve cooperation'
    },
    {
      id: 'PHIL2',
      domain: 'Philosophy',
      category: 'Change Orientation',
      type: 'scenario_choice',
      text: 'My attitude toward change in life is:',
      options: [
        { value: 1, label: 'I embrace change as exciting and necessary', philosophy: 'Change-Embracing' },
        { value: 2, label: 'I adapt to change when needed', philosophy: 'Adaptive' },
        { value: 3, label: 'I prefer stability but can handle change', philosophy: 'Stability-Preferring' },
        { value: 4, label: 'I find change stressful and prefer routine', philosophy: 'Routine-Oriented' },
        { value: 5, label: 'I actively resist unnecessary changes', philosophy: 'Change-Resistant' }
      ],
      culturalNote: 'Change tolerance varies across cultures and life experiences with stability/instability',
      insight: 'Change compatibility affects relationship adaptability and stress during transitions'
    },
    {
      id: 'PHIL3',
      domain: 'Philosophy',
      category: 'Success Definition',
      type: 'scenario_choice',
      text: 'I define a successful life as:',
      options: [
        { value: 1, label: 'Achieving personal happiness and fulfillment', philosophy: 'Individual-Fulfillment' },
        { value: 2, label: 'Making a positive impact on others', philosophy: 'Service-Oriented' },
        { value: 3, label: 'Building strong relationships and family', philosophy: 'Relationship-Centered' },
        { value: 4, label: 'Achieving professional and financial goals', philosophy: 'Achievement-Oriented' },
        { value: 5, label: 'Living according to my values and principles', philosophy: 'Values-Driven' }
      ],
      culturalNote: 'Success definitions vary greatly across cultures, generations, and socioeconomic contexts',
      insight: 'Aligned success definitions support mutual goals and reduce relationship conflicts'
    },

    // Relationship Values
    {
      id: 'REL1',
      domain: 'Relationship',
      category: 'Relationship Priority',
      type: 'importance_scale',
      text: 'Making my romantic relationship a top priority in life',
      description: 'Investing significant time, energy, and attention in romantic partnership',
      culturalNote: 'Relationship prioritization varies across cultures and life stages',
      insight: 'Relationship priority alignment affects satisfaction, commitment, and conflict resolution',
      icon: <Favorite />
    },
    {
      id: 'REL2',
      domain: 'Relationship',
      category: 'Independence',
      type: 'importance_scale',
      text: 'Maintaining individual identity and independence within relationships',
      description: 'Preserving personal interests, friendships, and autonomy while in partnership',
      culturalNote: 'Independence values vary from individual autonomy to relationship interdependence',
      insight: 'Independence compatibility affects relationship dynamics and personal fulfillment',
      icon: <Psychology />
    },
    {
      id: 'REL3',
      domain: 'Relationship',
      category: 'Commitment',
      type: 'importance_scale',
      text: 'Building long-term commitment and partnership',
      description: 'Working toward lasting relationship with shared future planning and dedication',
      culturalNote: 'Commitment expectations vary across cultures and relationship experiences',
      insight: 'Commitment alignment is crucial for relationship stability and future planning',
      icon: <Security />
    }
  ];

  const importanceOptions = [
    { value: 1, label: 'Not Important', color: '#EF4444' },
    { value: 2, label: 'Slightly Important', color: '#F97316' },
    { value: 3, label: 'Moderately Important', color: '#EAB308' },
    { value: 4, label: 'Very Important', color: '#22C55E' },
    { value: 5, label: 'Extremely Important', color: '#059669' }
  ];

  const domainColors = {
    'Spirituality': '#8B5CF6',
    'Family': '#EC4899',
    'Career': '#3B82F6',
    'Adventure': '#F59E0B',
    'Security': '#10B981',
    'Philosophy': '#6366F1',
    'Relationship': '#EF4444'
  };

  const domainDescriptions = {
    'Spirituality': 'Spiritual practices, meaning-making, and transcendent experiences',
    'Family': 'Family relationships, children, and extended family involvement',
    'Career': 'Professional success, work-life balance, and financial security',
    'Adventure': 'New experiences, personal growth, and creative expression',
    'Security': 'Stability, health, wellness, and community connections',
    'Philosophy': 'Life approach, change orientation, and success definitions',
    'Relationship': 'Romantic partnership priorities and relationship values'
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
        values: responses
      }));
      navigate('/onboarding/emotional-intelligence-assessment');
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
            Values & Life Philosophy Assessment
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

      {/* Domain Progress Grid */}
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {Object.entries(domainProgress).map(([domain, count]) => (
          <Grid item xs={12/7} key={domain}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${domainColors[domain]}10` : 'transparent',
                minHeight: 60
              }}
            >
              {React.cloneElement(
                currentQuestionData.icon || <Psychology />, 
                { sx: { color: domainColors[domain], fontSize: 16, mb: 0.5 } }
              )}
              <Typography variant="caption" display="block" color={domainColors[domain]} fontWeight="semibold">
                {domain}
              </Typography>
              <Typography variant="caption" color={domainColors[domain]}>
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
                icon={React.cloneElement(currentQuestionData.icon || <Psychology />, { sx: { color: 'white' } })}
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

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.type === 'importance_scale' ? 
                `"${currentQuestionData.text}"` : 
                currentQuestionData.text
              }
            </Typography>
            {currentQuestionData.description && (
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2, fontStyle: 'italic' }}>
                {currentQuestionData.description}
              </Typography>
            )}
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {currentQuestionData.type === 'importance_scale' ? 
                'How important is this to you in life?' : 
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
              {(currentQuestionData.type === 'importance_scale' ? importanceOptions : currentQuestionData.options).map((option) => (
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
                          {option.philosophy && (
                            <Typography variant="body2" color="text.secondary">
                              {option.philosophy} approach
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

          {/* Cultural & Values Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
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
              {currentQuestion === 0 ? 'Back to Results' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Values Insights
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
                {currentQuestion === questions.length - 1 ? 'Continue to EQ Assessment' : 'Next Question'}
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
              <strong>Domains Covered:</strong> Spirituality, Family, Career, Adventure, Security, Philosophy, Relationships
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.4))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ValuesAssessment;

