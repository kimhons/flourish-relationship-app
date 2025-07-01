/**
 * Screen 124: Communication & Conflict Style Assessment
 * Enhanced RCPQ (Relationship Communication Patterns Questionnaire) with cultural sensitivity
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
  Chat,
  Info,
  CheckCircle,
  Timer,
  Psychology,
  Groups,
  RecordVoiceOver,
  VolumeOff,
  Build
} from '@mui/icons-material';

const CommunicationAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Enhanced RCPQ questions with cultural sensitivity and Gottman research
  const questions = [
    // Constructive Communication
    {
      id: 'CON1',
      style: 'Constructive',
      category: 'Active Listening',
      text: 'When my partner is upset, I try to understand their feelings before responding.',
      scenario: 'Your partner comes home stressed from work and starts venting about their day.',
      culturalNote: 'Active listening valued differently across cultures - some emphasize immediate problem-solving',
      insight: 'Constructive communication prioritizes understanding before being understood'
    },
    {
      id: 'CON2',
      style: 'Constructive',
      category: 'Emotional Validation',
      text: 'I acknowledge my partner\'s feelings even when I disagree with their perspective.',
      scenario: 'Your partner feels hurt by something you consider minor.',
      culturalNote: 'Emotional validation practices vary - some cultures emphasize logic over emotions',
      insight: 'Validation doesn\'t require agreement, just acknowledgment of feelings'
    },
    {
      id: 'CON3',
      style: 'Constructive',
      category: 'Problem-Solving Focus',
      text: 'During disagreements, I focus on finding solutions rather than winning the argument.',
      scenario: 'You and your partner disagree about how to handle a financial decision.',
      culturalNote: 'Problem-solving vs. harmony-seeking varies across individualist/collectivist cultures',
      insight: 'Constructive communication seeks win-win solutions rather than victory'
    },
    {
      id: 'CON4',
      style: 'Constructive',
      category: 'Emotional Expression',
      text: 'I express my feelings clearly and directly without attacking my partner.',
      scenario: 'You feel neglected because your partner has been working late frequently.',
      culturalNote: 'Direct emotional expression varies greatly across cultures and genders',
      insight: 'Healthy expression focuses on feelings and needs, not blame or criticism'
    },
    {
      id: 'CON5',
      style: 'Constructive',
      category: 'Repair Attempts',
      text: 'When conversations get heated, I try to calm things down and reconnect.',
      scenario: 'A discussion about household chores escalates into raised voices.',
      culturalNote: 'De-escalation strategies vary - some cultures value persistence, others value cooling off',
      insight: 'Repair attempts are crucial for preventing relationship damage during conflicts'
    },

    // Demand-Withdraw Pattern
    {
      id: 'DW1',
      style: 'Demand-Withdraw',
      category: 'Pursuit Behavior',
      text: 'When there\'s a problem, I keep bringing it up until we resolve it.',
      scenario: 'Your partner seems distant and you want to talk about what\'s wrong.',
      culturalNote: 'Pursuit behavior influenced by cultural norms around persistence and respect',
      insight: 'Excessive pursuit can trigger withdrawal and create negative cycles'
    },
    {
      id: 'DW2',
      style: 'Demand-Withdraw',
      category: 'Withdrawal Behavior',
      text: 'When my partner wants to discuss relationship issues, I often feel overwhelmed and shut down.',
      scenario: 'Your partner wants to have a serious conversation about your relationship.',
      culturalNote: 'Withdrawal patterns vary by gender and cultural emotional expression norms',
      insight: 'Withdrawal often stems from feeling overwhelmed or criticized, not lack of caring'
    },
    {
      id: 'DW3',
      style: 'Demand-Withdraw',
      category: 'Emotional Pressure',
      text: 'I sometimes feel like I have to push my partner to get them to open up emotionally.',
      scenario: 'Your partner rarely shares their deeper feelings with you.',
      culturalNote: 'Emotional openness expectations vary greatly across cultures and individuals',
      insight: 'Emotional pressure often backfires and increases partner withdrawal'
    },
    {
      id: 'DW4',
      style: 'Demand-Withdraw',
      category: 'Avoidance Response',
      text: 'When conversations get intense, I prefer to take a break and come back to it later.',
      scenario: 'A discussion about future plans becomes emotionally charged.',
      culturalNote: 'Taking breaks valued differently - some see it as avoidance, others as wisdom',
      insight: 'Strategic breaks can be healthy if both partners agree and return to the issue'
    },
    {
      id: 'DW5',
      style: 'Demand-Withdraw',
      category: 'Communication Frustration',
      text: 'I get frustrated when my partner doesn\'t want to talk about important issues.',
      scenario: 'You want to discuss moving in together but your partner keeps changing the subject.',
      culturalNote: 'Communication timing and readiness vary across cultures and personalities',
      insight: 'Frustration often signals mismatched communication needs and styles'
    },

    // Conflict Avoidance
    {
      id: 'AVD1',
      style: 'Avoidance',
      category: 'Harmony Preservation',
      text: 'I avoid bringing up issues that might cause conflict in my relationship.',
      scenario: 'Your partner has a habit that bothers you but you don\'t want to start a fight.',
      culturalNote: 'Harmony preservation highly valued in many cultures, especially collectivist ones',
      insight: 'Avoiding all conflict can lead to resentment and unresolved issues'
    },
    {
      id: 'AVD2',
      style: 'Avoidance',
      category: 'Conflict Discomfort',
      text: 'I feel very uncomfortable when there\'s tension or disagreement in my relationship.',
      scenario: 'You and your partner have different opinions about spending time with friends.',
      culturalNote: 'Conflict tolerance varies greatly across cultures and family backgrounds',
      insight: 'Some conflict is normal and healthy in relationships when handled constructively'
    },
    {
      id: 'AVD3',
      style: 'Avoidance',
      category: 'Indirect Communication',
      text: 'I often hint at what I need rather than asking directly.',
      scenario: 'You want more affection from your partner but don\'t want to seem needy.',
      culturalNote: 'Indirect communication common in high-context cultures and conflict-avoidant families',
      insight: 'Indirect communication can lead to misunderstandings and unmet needs'
    },
    {
      id: 'AVD4',
      style: 'Avoidance',
      category: 'Peace-Keeping',
      text: 'I\'d rather give in than have an argument with my partner.',
      scenario: 'Your partner wants to make a decision you disagree with.',
      culturalNote: 'Peace-keeping valued differently - some see it as wisdom, others as self-abandonment',
      insight: 'Chronic giving in can lead to resentment and loss of authentic self'
    },
    {
      id: 'AVD5',
      style: 'Avoidance',
      category: 'Emotional Suppression',
      text: 'I keep my negative feelings to myself to avoid upsetting my partner.',
      scenario: 'Your partner did something that hurt your feelings.',
      culturalNote: 'Emotional suppression norms vary greatly across cultures and genders',
      insight: 'Suppressing emotions can harm both individual and relationship health'
    }
  ];

  const responseOptions = [
    { value: 1, label: 'Never', color: '#EF4444' },
    { value: 2, label: 'Rarely', color: '#F97316' },
    { value: 3, label: 'Sometimes', color: '#EAB308' },
    { value: 4, label: 'Often', color: '#22C55E' },
    { value: 5, label: 'Always', color: '#059669' }
  ];

  const styleColors = {
    'Constructive': '#10B981',
    'Demand-Withdraw': '#F59E0B',
    'Avoidance': '#6366F1'
  };

  const styleDescriptions = {
    'Constructive': 'Healthy communication with empathy, problem-solving, and emotional validation',
    'Demand-Withdraw': 'One partner pursues discussion while the other withdraws or shuts down',
    'Avoidance': 'Tendency to avoid conflict and difficult conversations to maintain harmony'
  };

  const styleIcons = {
    'Constructive': <Build />,
    'Demand-Withdraw': <RecordVoiceOver />,
    'Avoidance': <VolumeOff />
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
      // Save responses and navigate to results
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        communication: responses
      }));
      navigate('/onboarding/assessment-results');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/attachment-style-assessment');
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

  // Calculate communication style progress
  const getStyleProgress = () => {
    const counts = { Constructive: 0, 'Demand-Withdraw': 0, Avoidance: 0 };
    Object.keys(responses).forEach(questionId => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        counts[question.style]++;
      }
    });
    return counts;
  };

  const styleProgress = getStyleProgress();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Communication & Conflict Style Assessment
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
              backgroundColor: styleColors[currentQuestionData.style]
            }
          }} 
        />
      </Box>

      {/* Communication Style Progress */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Object.entries(styleProgress).map(([style, count]) => (
          <Grid item xs={4} key={style}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${styleColors[style]}10` : 'transparent'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                {React.cloneElement(styleIcons[style], { 
                  sx: { color: styleColors[style], fontSize: 20 } 
                })}
                <Typography variant="body2" fontWeight="semibold" color={styleColors[style]}>
                  {style}
                </Typography>
              </Box>
              <Typography variant="h6" color={styleColors[style]}>
                {count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Current Style Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                icon={React.cloneElement(styleIcons[currentQuestionData.style], { sx: { color: 'white' } })}
                label={currentQuestionData.style}
                sx={{ 
                  backgroundColor: styleColors[currentQuestionData.style],
                  color: 'white',
                  fontWeight: 'semibold'
                }}
              />
              <Chip 
                label={currentQuestionData.category}
                variant="outlined"
                size="small"
              />
              <Tooltip title={styleDescriptions[currentQuestionData.style]}>
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {styleDescriptions[currentQuestionData.style]}
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
              "{currentQuestionData.text}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              How often does this describe your communication style?
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

          {/* Cultural & Research Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Research Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Attachment' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Research Insights
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: styleColors[currentQuestionData.style],
                  '&:hover': {
                    backgroundColor: styleColors[currentQuestionData.style],
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'View Results' : 'Next Question'}
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
              <strong>Based on:</strong> Gottman's research & Relationship Communication Patterns Questionnaire (RCPQ)
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.3))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CommunicationAssessment;

