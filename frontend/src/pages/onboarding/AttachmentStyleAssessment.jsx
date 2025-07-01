/**
 * Screen 123: Attachment Style Assessment
 * Enhanced RAAS (Revised Adult Attachment Scale) with cultural sensitivity
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
  Favorite,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  Groups,
  Security,
  Warning
} from '@mui/icons-material';

const AttachmentStyleAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Enhanced RAAS questions with cultural sensitivity
  const questions = [
    // Secure Attachment Indicators
    {
      id: 'SEC1',
      dimension: 'Secure',
      category: 'Autonomy Support',
      text: 'When my partner needs space, I feel comfortable giving it to them without taking it personally.',
      type: 'comfort_level',
      culturalNote: 'Reflects balance between connection and independence across cultures',
      insight: 'Secure attachment allows for healthy autonomy within relationships'
    },
    {
      id: 'SEC2',
      dimension: 'Secure',
      category: 'Emotional Safety',
      text: 'I find it easy to express my feelings and needs to romantic partners.',
      type: 'emotional_expression',
      culturalNote: 'Varies across cultures with different emotional expression norms',
      insight: 'Secure individuals feel safe being vulnerable in relationships'
    },
    {
      id: 'SEC3',
      dimension: 'Secure',
      category: 'Trust Building',
      text: 'I generally trust that my partner cares about me, even during difficult times.',
      type: 'basic_trust',
      culturalNote: 'Foundation of secure attachment across all cultures',
      insight: 'Secure attachment includes positive expectations of partner responsiveness'
    },

    // Anxious Attachment Indicators
    {
      id: 'ANX1',
      dimension: 'Anxious',
      category: 'Reassurance Seeking',
      text: 'I worry about being abandoned or rejected by people I care about.',
      type: 'abandonment_fear',
      culturalNote: 'May be influenced by cultural values around family loyalty',
      insight: 'Anxious attachment involves fear of abandonment and rejection'
    },
    {
      id: 'ANX2',
      dimension: 'Anxious',
      category: 'Communication Anxiety',
      text: 'When my partner doesn\'t respond to messages quickly, I start to worry something is wrong.',
      type: 'response_anxiety',
      culturalNote: 'Influenced by cultural communication norms and technology use',
      insight: 'Anxious attachment includes hypervigilance to signs of rejection'
    },
    {
      id: 'ANX3',
      dimension: 'Anxious',
      category: 'Relationship Preoccupation',
      text: 'I often think about my romantic relationships and analyze what my partner meant by things they said.',
      type: 'preoccupation',
      culturalNote: 'May vary with cultural emphasis on relationship analysis',
      insight: 'Anxious attachment involves mental preoccupation with relationship security'
    },
    {
      id: 'ANX4',
      dimension: 'Anxious',
      category: 'Jealousy and Possessiveness',
      text: 'I get jealous when my partner spends time with attractive people.',
      type: 'jealousy',
      culturalNote: 'Influenced by cultural norms around jealousy and possessiveness',
      insight: 'Anxious attachment can manifest as jealousy and possessive behaviors'
    },

    // Avoidant Attachment Indicators
    {
      id: 'AVO1',
      dimension: 'Avoidant',
      category: 'Intimacy Discomfort',
      text: 'I feel uncomfortable when romantic partners want to be very close emotionally.',
      type: 'intimacy_avoidance',
      culturalNote: 'Varies across cultures with different intimacy norms',
      insight: 'Avoidant attachment involves discomfort with emotional closeness'
    },
    {
      id: 'AVO2',
      dimension: 'Avoidant',
      category: 'Independence Preference',
      text: 'I prefer not to show how I feel deep down to romantic partners.',
      type: 'emotional_hiding',
      culturalNote: 'May align with cultural values emphasizing emotional control',
      insight: 'Avoidant attachment includes reluctance to show vulnerability'
    },
    {
      id: 'AVO3',
      dimension: 'Avoidant',
      category: 'Relationship Discussions',
      text: 'I find it difficult to talk about problems in my relationships.',
      type: 'communication_avoidance',
      culturalNote: 'Influenced by cultural approaches to conflict and discussion',
      insight: 'Avoidant attachment involves difficulty with relationship communication'
    },
    {
      id: 'AVO4',
      dimension: 'Avoidant',
      category: 'Dependency Discomfort',
      text: 'I don\'t like it when romantic partners depend on me for emotional support.',
      type: 'dependency_avoidance',
      culturalNote: 'Varies with cultural expectations of mutual support',
      insight: 'Avoidant attachment includes discomfort with partner dependency'
    },

    // Mixed/Disorganized Indicators
    {
      id: 'DIS1',
      dimension: 'Disorganized',
      category: 'Conflicted Feelings',
      text: 'I want to be very close to romantic partners, but I also fear getting hurt.',
      type: 'approach_avoidance',
      culturalNote: 'Universal pattern but expression varies culturally',
      insight: 'Disorganized attachment involves conflicting desires for closeness and safety'
    },
    {
      id: 'DIS2',
      dimension: 'Disorganized',
      category: 'Emotional Volatility',
      text: 'My feelings about romantic relationships change frequently and unpredictably.',
      type: 'emotional_instability',
      culturalNote: 'May be influenced by cultural emotional regulation norms',
      insight: 'Disorganized attachment can involve emotional instability in relationships'
    },

    // Additional Secure Indicators
    {
      id: 'SEC4',
      dimension: 'Secure',
      category: 'Conflict Resolution',
      text: 'When we have disagreements, I believe my partner and I can work things out.',
      type: 'conflict_confidence',
      culturalNote: 'Reflects cultural approaches to conflict resolution',
      insight: 'Secure attachment includes confidence in relationship repair'
    },
    {
      id: 'SEC5',
      dimension: 'Secure',
      category: 'Support Seeking',
      text: 'I feel comfortable asking my partner for help when I need it.',
      type: 'help_seeking',
      culturalNote: 'Varies with cultural values around independence and help-seeking',
      insight: 'Secure attachment allows for appropriate dependency and support-seeking'
    },

    // Additional Anxious Indicators
    {
      id: 'ANX5',
      dimension: 'Anxious',
      category: 'Validation Seeking',
      text: 'I need frequent reassurance that my partner loves me.',
      type: 'reassurance_need',
      culturalNote: 'May vary with cultural expressions of love and affection',
      insight: 'Anxious attachment involves high need for reassurance and validation'
    },
    {
      id: 'ANX6',
      dimension: 'Anxious',
      category: 'Relationship Monitoring',
      text: 'I pay close attention to my partner\'s moods and try to figure out what they\'re thinking.',
      type: 'hypervigilance',
      culturalNote: 'Influenced by cultural norms around emotional attunement',
      insight: 'Anxious attachment includes hypervigilance to partner\'s emotional states'
    },

    // Additional Avoidant Indicators
    {
      id: 'AVO5',
      dimension: 'Avoidant',
      category: 'Self-Reliance',
      text: 'I prefer to handle my problems on my own rather than rely on romantic partners.',
      type: 'self_reliance',
      culturalNote: 'May align with cultural values emphasizing independence',
      insight: 'Avoidant attachment involves excessive self-reliance and independence'
    },
    {
      id: 'AVO6',
      dimension: 'Avoidant',
      category: 'Emotional Distance',
      text: 'I sometimes feel like my partner wants more emotional intimacy than I\'m comfortable with.',
      type: 'intimacy_overwhelm',
      culturalNote: 'Varies across cultures with different intimacy expectations',
      insight: 'Avoidant attachment can involve feeling overwhelmed by partner\'s intimacy needs'
    }
  ];

  const responseOptions = [
    { value: 1, label: 'Strongly Disagree', color: '#EF4444' },
    { value: 2, label: 'Disagree', color: '#F97316' },
    { value: 3, label: 'Neutral', color: '#6B7280' },
    { value: 4, label: 'Agree', color: '#10B981' },
    { value: 5, label: 'Strongly Agree', color: '#059669' }
  ];

  const dimensionColors = {
    'Secure': '#10B981',
    'Anxious': '#F59E0B',
    'Avoidant': '#6366F1',
    'Disorganized': '#EF4444'
  };

  const dimensionDescriptions = {
    'Secure': 'Comfortable with intimacy and autonomy, positive view of self and others',
    'Anxious': 'Seeks closeness but fears abandonment, needs reassurance in relationships',
    'Avoidant': 'Values independence, uncomfortable with too much emotional closeness',
    'Disorganized': 'Conflicted about relationships, wants closeness but fears getting hurt'
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
      const bigFiveResponses = JSON.parse(localStorage.getItem('bigFiveResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        bigFive: bigFiveResponses,
        attachment: responses
      }));
      navigate('/onboarding/communication-assessment');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/big-five-personality-test');
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

  // Calculate current attachment style tendencies for progress display
  const getAttachmentProgress = () => {
    const counts = { Secure: 0, Anxious: 0, Avoidant: 0, Disorganized: 0 };
    Object.keys(responses).forEach(questionId => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        counts[question.dimension]++;
      }
    });
    return counts;
  };

  const attachmentProgress = getAttachmentProgress();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Attachment Style Assessment
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
              backgroundColor: dimensionColors[currentQuestionData.dimension]
            }
          }} 
        />
      </Box>

      {/* Attachment Progress Indicators */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Object.entries(attachmentProgress).map(([dimension, count]) => (
          <Grid item xs={3} key={dimension}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${dimensionColors[dimension]}10` : 'transparent'
              }}
            >
              <Typography variant="body2" fontWeight="semibold" color={dimensionColors[dimension]}>
                {dimension}
              </Typography>
              <Typography variant="h6" color={dimensionColors[dimension]}>
                {count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Current Dimension Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                label={currentQuestionData.dimension}
                sx={{ 
                  backgroundColor: dimensionColors[currentQuestionData.dimension],
                  color: 'white',
                  fontWeight: 'semibold'
                }}
              />
              <Chip 
                label={currentQuestionData.category}
                variant="outlined"
                size="small"
              />
              <Tooltip title={dimensionDescriptions[currentQuestionData.dimension]}>
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {dimensionDescriptions[currentQuestionData.dimension]}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              "{currentQuestionData.text}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              How well does this statement describe you in romantic relationships?
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <RadioGroup
              value={currentResponse || ''}
              onChange={(e) => handleResponseChange(e.target.value)}
              sx={{ gap: 2 }}
            >
              {responseOptions.map((option) => (
                <Paper
                  key={option.value}
                  elevation={0}
                  sx={{
                    border: currentResponse === option.value ? 
                      `2px solid ${option.color}` : 
                      '1px solid #E5E7EB',
                    borderRadius: 2,
                    p: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: option.color,
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
                          color: option.color,
                          '&.Mui-checked': {
                            color: option.color
                          }
                        }} 
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant="body1" fontWeight={currentResponse === option.value ? 'semibold' : 'normal'}>
                          {option.label}
                        </Typography>
                        {currentResponse === option.value && (
                          <CheckCircle sx={{ color: option.color, ml: 2 }} />
                        )}
                      </Box>
                    }
                    sx={{ margin: 0, width: '100%' }}
                  />
                </Paper>
              ))}
            </RadioGroup>
          </FormControl>

          {/* Cultural Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Attachment Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Big Five' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Cultural Context
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: dimensionColors[currentQuestionData.dimension],
                  '&:hover': {
                    backgroundColor: dimensionColors[currentQuestionData.dimension],
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Continue to Communication' : 'Next Question'}
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
              <strong>Based on:</strong> Revised Adult Attachment Scale (RAAS) with cultural adaptations
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.4))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AttachmentStyleAssessment;

