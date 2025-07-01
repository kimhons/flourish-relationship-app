/**
 * Screen 133: Communication Patterns Analysis
 * Advanced analysis of communication patterns in relationships
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
  Rating
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Communication,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  RecordVoiceOver,
  Hearing,
  EmojiEmotions,
  Conflict,
  Handshake,
  Support,
  Feedback,
  Group,
  Person,
  Star,
  Lightbulb,
  TrendingUp
} from '@mui/icons-material';

const CommunicationPatternsAnalysis = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Communication patterns analysis questions
  const questions = [
    // Conflict Resolution Patterns
    {
      id: 'CP1',
      domain: 'Conflict Resolution',
      category: 'Conflict Approach',
      type: 'scenario_choice',
      text: 'When you have a disagreement with a romantic partner, you typically:',
      scenario: 'You and your partner have different opinions about an important decision (like where to live, how to spend money, or family planning)',
      options: [
        { value: 1, label: 'Address it immediately and work through it together', style: 'Direct Collaborative', pattern: 'Constructive' },
        { value: 2, label: 'Take time to cool down, then discuss it calmly', style: 'Reflective Approach', pattern: 'Constructive' },
        { value: 3, label: 'Try to avoid the conflict and hope it resolves itself', style: 'Conflict Avoidant', pattern: 'Avoidance' },
        { value: 4, label: 'Become emotional and need space before discussing', style: 'Emotional Processing', pattern: 'Withdraw' },
        { value: 5, label: 'Push for resolution even if partner needs space', style: 'Pursuit Pattern', pattern: 'Demand' }
      ],
      culturalNote: 'Conflict resolution styles vary across cultures, with some emphasizing harmony and others direct communication',
      insight: 'Conflict resolution patterns are strong predictors of relationship satisfaction and longevity',
      icon: <Conflict />
    },
    {
      id: 'CP2',
      domain: 'Conflict Resolution',
      category: 'Conflict Intensity',
      type: 'rating_scale',
      text: 'How comfortable are you with intense emotional discussions?',
      scenario: 'Discussions involving strong emotions, tears, raised voices, or passionate disagreements',
      culturalNote: 'Comfort with emotional intensity varies across cultures and family backgrounds',
      insight: 'Emotional intensity tolerance affects how couples navigate difficult conversations',
      icon: <EmojiEmotions />
    },

    // Communication Style Patterns
    {
      id: 'CS1',
      domain: 'Communication Style',
      category: 'Expression Style',
      type: 'scenario_choice',
      text: 'When expressing your feelings to a partner, you prefer to:',
      scenario: 'Sharing your emotions, needs, concerns, or appreciation with your romantic partner',
      options: [
        { value: 1, label: 'Express feelings directly and clearly as they arise', style: 'Direct Expression', pattern: 'Open' },
        { value: 2, label: 'Think through feelings first, then share thoughtfully', style: 'Reflective Expression', pattern: 'Thoughtful' },
        { value: 3, label: 'Share feelings through actions more than words', style: 'Action-Based', pattern: 'Indirect' },
        { value: 4, label: 'Wait for the right moment and setting to share', style: 'Strategic Expression', pattern: 'Timing-Focused' },
        { value: 5, label: 'Find it difficult to express feelings verbally', style: 'Expression Challenged', pattern: 'Reserved' }
      ],
      culturalNote: 'Expression styles vary across cultures, with some emphasizing verbal and others non-verbal communication',
      insight: 'Expression style compatibility affects emotional intimacy and understanding',
      icon: <RecordVoiceOver />
    },
    {
      id: 'CS2',
      domain: 'Communication Style',
      category: 'Listening Style',
      type: 'scenario_choice',
      text: 'When your partner is sharing something important, you:',
      scenario: 'Your partner is telling you about their day, concerns, dreams, or problems they\'re facing',
      options: [
        { value: 1, label: 'Listen actively and ask questions to understand better', style: 'Active Listener', pattern: 'Engaged' },
        { value: 2, label: 'Listen and offer solutions or advice to help', style: 'Solution-Focused', pattern: 'Problem-Solver' },
        { value: 3, label: 'Listen and provide emotional support and validation', style: 'Supportive Listener', pattern: 'Empathetic' },
        { value: 4, label: 'Listen but sometimes get distracted or multitask', style: 'Partial Attention', pattern: 'Distracted' },
        { value: 5, label: 'Find it hard to focus on long conversations', style: 'Attention Challenged', pattern: 'Brief-Focused' }
      ],
      culturalNote: 'Listening styles vary across cultures and personality types',
      insight: 'Listening style compatibility affects feeling heard and understood in relationships',
      icon: <Hearing />
    },

    // Emotional Communication Patterns
    {
      id: 'EC1',
      domain: 'Emotional Communication',
      category: 'Emotional Sharing',
      type: 'rating_scale',
      text: 'How comfortable are you sharing vulnerable emotions (fear, sadness, insecurity)?',
      scenario: 'Opening up about deep fears, past hurts, insecurities, or emotional struggles',
      culturalNote: 'Emotional vulnerability varies across cultures, genders, and personal experiences',
      insight: 'Emotional sharing comfort affects intimacy depth and relationship connection',
      icon: <Psychology />
    },
    {
      id: 'EC2',
      domain: 'Emotional Communication',
      category: 'Emotional Support',
      type: 'scenario_choice',
      text: 'When your partner is upset or stressed, you typically:',
      scenario: 'Your partner has had a bad day, is feeling overwhelmed, or is going through a difficult time',
      options: [
        { value: 1, label: 'Ask what they need and follow their lead', style: 'Responsive Support', pattern: 'Adaptive' },
        { value: 2, label: 'Offer physical comfort like hugs or being close', style: 'Physical Comfort', pattern: 'Touch-Based' },
        { value: 3, label: 'Listen and validate their feelings without trying to fix', style: 'Emotional Validation', pattern: 'Empathetic' },
        { value: 4, label: 'Try to help solve the problem or offer advice', style: 'Problem-Solving', pattern: 'Solution-Focused' },
        { value: 5, label: 'Give them space and check in later', style: 'Space-Giving', pattern: 'Respectful Distance' }
      ],
      culturalNote: 'Support styles vary across cultures and individual preferences',
      insight: 'Support style compatibility affects feeling cared for during difficult times',
      icon: <Support />
    },

    // Communication Frequency & Depth
    {
      id: 'CF1',
      domain: 'Communication Frequency',
      category: 'Daily Communication',
      type: 'preference_scale',
      text: 'Your preference for daily communication frequency with a romantic partner:',
      scaleLabels: ['Minimal Daily Contact', 'Moderate Contact', 'Frequent Daily Contact'],
      scenario: 'Texting, calling, or talking throughout the day when not together',
      culturalNote: 'Communication frequency preferences vary across attachment styles and cultural backgrounds',
      insight: 'Communication frequency compatibility affects feeling connected and autonomous',
      icon: <Communication />
    },
    {
      id: 'CF2',
      domain: 'Communication Frequency',
      category: 'Deep Conversations',
      type: 'rating_scale',
      text: 'How important are regular deep, meaningful conversations?',
      scenario: 'Discussions about life goals, values, feelings, philosophy, and personal growth',
      culturalNote: 'Depth preferences vary across personality types and cultural communication styles',
      insight: 'Conversation depth compatibility affects intellectual and emotional intimacy',
      icon: <Psychology />
    },

    // Feedback & Growth Communication
    {
      id: 'FG1',
      domain: 'Feedback & Growth',
      category: 'Giving Feedback',
      type: 'scenario_choice',
      text: 'When you need to address something your partner does that bothers you:',
      scenario: 'Your partner has a habit or behavior that affects you negatively, and you need to discuss it',
      options: [
        { value: 1, label: 'Address it directly but gently as soon as appropriate', style: 'Direct Gentle', pattern: 'Constructive' },
        { value: 2, label: 'Wait for the right moment and approach it carefully', style: 'Strategic Timing', pattern: 'Thoughtful' },
        { value: 3, label: 'Drop hints or hope they notice without direct conversation', style: 'Indirect Hints', pattern: 'Avoidant' },
        { value: 4, label: 'Build up frustration until it comes out in an argument', style: 'Accumulated Frustration', pattern: 'Explosive' },
        { value: 5, label: 'Avoid bringing it up to keep peace', style: 'Peace-Keeping', pattern: 'Suppressive' }
      ],
      culturalNote: 'Feedback styles vary across cultures, with some emphasizing directness and others harmony',
      insight: 'Feedback delivery style affects relationship growth and resentment prevention',
      icon: <Feedback />
    },
    {
      id: 'FG2',
      domain: 'Feedback & Growth',
      category: 'Receiving Feedback',
      type: 'rating_scale',
      text: 'How well do you handle constructive criticism from a romantic partner?',
      scenario: 'Your partner gently points out something you could improve or change',
      culturalNote: 'Feedback reception varies across self-esteem, cultural background, and past experiences',
      insight: 'Feedback reception affects relationship growth and communication safety',
      icon: <TrendingUp />
    },

    // Social Communication Patterns
    {
      id: 'SC1',
      domain: 'Social Communication',
      category: 'Social Settings',
      type: 'scenario_choice',
      text: 'In social settings with friends or family, you and your partner:',
      scenario: 'At parties, family gatherings, or social events with other people',
      options: [
        { value: 1, label: 'Stay close and include each other in conversations', style: 'Unified Social', pattern: 'Connected' },
        { value: 2, label: 'Mingle separately but check in regularly', style: 'Independent Social', pattern: 'Autonomous' },
        { value: 3, label: 'One leads socially while the other follows', style: 'Leader-Follower', pattern: 'Complementary' },
        { value: 4, label: 'Both prefer to stay together and observe', style: 'Observer Pair', pattern: 'Reserved' },
        { value: 5, label: 'Have different social comfort levels', style: 'Mixed Comfort', pattern: 'Varied' }
      ],
      culturalNote: 'Social communication varies across cultures and personality types',
      insight: 'Social communication compatibility affects public relationship dynamics',
      icon: <Group />
    },

    // Digital Communication Patterns
    {
      id: 'DC1',
      domain: 'Digital Communication',
      category: 'Digital Preference',
      type: 'scenario_choice',
      text: 'For important relationship conversations, you prefer:',
      scenario: 'Discussing relationship issues, making plans, or sharing important news',
      options: [
        { value: 1, label: 'Always in person for important topics', style: 'In-Person Only', pattern: 'Traditional' },
        { value: 2, label: 'In person preferred, but phone/video when needed', style: 'In-Person Primary', pattern: 'Flexible Traditional' },
        { value: 3, label: 'Comfortable with phone, video, or in-person', style: 'Multi-Modal', pattern: 'Flexible' },
        { value: 4, label: 'Often prefer texting to think through responses', style: 'Text-Comfortable', pattern: 'Digital-Friendly' },
        { value: 5, label: 'Mix of digital and in-person based on topic', style: 'Context-Dependent', pattern: 'Adaptive' }
      ],
      culturalNote: 'Digital communication preferences vary across generations and cultural backgrounds',
      insight: 'Digital communication compatibility affects daily relationship maintenance',
      icon: <Communication />
    },

    // Communication Growth & Learning
    {
      id: 'CG1',
      domain: 'Communication Growth',
      category: 'Learning Style',
      type: 'rating_scale',
      text: 'How interested are you in actively improving communication skills together?',
      scenario: 'Reading books, taking courses, or practicing communication techniques as a couple',
      culturalNote: 'Growth orientation varies across cultures and personal development values',
      insight: 'Communication growth compatibility affects long-term relationship development',
      icon: <TrendingUp />
    }
  ];

  const ratingLabels = {
    1: 'Very Uncomfortable',
    2: 'Somewhat Uncomfortable', 
    3: 'Neutral',
    4: 'Somewhat Comfortable',
    5: 'Very Comfortable'
  };

  const domainColors = {
    'Conflict Resolution': '#EF4444',
    'Communication Style': '#3B82F6',
    'Emotional Communication': '#EC4899',
    'Communication Frequency': '#10B981',
    'Feedback & Growth': '#F59E0B',
    'Social Communication': '#8B5CF6',
    'Digital Communication': '#06B6D4',
    'Communication Growth': '#84CC16'
  };

  const domainDescriptions = {
    'Conflict Resolution': 'How you handle disagreements and resolve conflicts',
    'Communication Style': 'Your approach to expressing and listening',
    'Emotional Communication': 'Sharing and supporting emotional experiences',
    'Communication Frequency': 'Preferences for daily communication and depth',
    'Feedback & Growth': 'Giving and receiving constructive feedback',
    'Social Communication': 'Communication patterns in social settings',
    'Digital Communication': 'Preferences for digital vs. in-person communication',
    'Communication Growth': 'Interest in developing communication skills'
  };

  const domainIcons = {
    'Conflict Resolution': <Conflict />,
    'Communication Style': <RecordVoiceOver />,
    'Emotional Communication': <Psychology />,
    'Communication Frequency': <Communication />,
    'Feedback & Growth': <Feedback />,
    'Social Communication': <Group />,
    'Digital Communication': <Communication />,
    'Communication Growth': <TrendingUp />
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

  const handleRatingChange = (event, value) => {
    setResponses(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
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
      // Save responses and navigate to next screen
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        communicationPatterns: responses
      }));
      navigate('/onboarding/relationship-goals-expectations');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/lifestyle-preferences');
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
            Communication Patterns Analysis
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
          <Grid item xs={12/8} key={domain}>
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
              <Communication sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Communication Patterns
              </Typography>
              <Tooltip title="Advanced analysis of communication patterns in relationships">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding how you communicate in relationships for better compatibility
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
              <strong>Scenario:</strong>
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
              {currentQuestionData.type === 'rating_scale' ? 
                'Rate your comfort level:' : 
                currentQuestionData.type === 'preference_scale' ?
                'Choose your preference:' :
                'Choose the option that best describes your typical approach:'
              }
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            {currentQuestionData.type === 'rating_scale' ? (
              <Box sx={{ textAlign: 'center' }}>
                <Rating
                  value={currentResponse || 0}
                  onChange={handleRatingChange}
                  max={5}
                  size="large"
                  sx={{
                    fontSize: '2rem',
                    color: domainColors[currentQuestionData.domain],
                    mb: 2
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {currentResponse ? ratingLabels[currentResponse] : 'Select your comfort level'}
                </Typography>
              </Box>
            ) : currentQuestionData.type === 'preference_scale' ? (
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
                {currentQuestionData.options.map((option) => (
                  <Paper
                    key={option.value}
                    elevation={0}
                    sx={{
                      border: currentResponse === option.value ? 
                        `2px solid ${domainColors[currentQuestionData.domain]}` : 
                        '1px solid #E5E7EB',
                      borderRadius: 2,
                      p: 2,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: domainColors[currentQuestionData.domain],
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
                            color: domainColors[currentQuestionData.domain],
                            '&.Mui-checked': {
                              color: domainColors[currentQuestionData.domain]
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
                            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                              <Chip 
                                label={option.style} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontSize: '0.75rem' }}
                              />
                              <Chip 
                                label={option.pattern} 
                                size="small" 
                                sx={{ 
                                  backgroundColor: `${domainColors[currentQuestionData.domain]}20`,
                                  color: domainColors[currentQuestionData.domain],
                                  fontSize: '0.75rem'
                                }}
                              />
                            </Box>
                          </Box>
                          {currentResponse === option.value && (
                            <CheckCircle sx={{ color: domainColors[currentQuestionData.domain], ml: 2 }} />
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

          {/* Cultural & Communication Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Communication Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Lifestyle' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Communication Insights
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
                {currentQuestion === questions.length - 1 ? 'Continue to Relationship Goals' : 'Next Question'}
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
              <strong>Domains:</strong> Conflict, Style, Emotional, Frequency, Feedback, Social, Digital, Growth
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.75))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CommunicationPatternsAnalysis;

