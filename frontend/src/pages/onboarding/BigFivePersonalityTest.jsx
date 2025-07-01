/**
 * Screen 122: Big Five Personality Test
 * Evidence-based NEO-PI-R derived assessment with validated items
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
  Tooltip
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Psychology,
  Info,
  CheckCircle,
  Timer,
  Lightbulb
} from '@mui/icons-material';

const BigFivePersonalityTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Evidence-based Big Five items (NEO-PI-R derived)
  const questions = [
    // Openness to Experience (9 items)
    {
      id: 'O1',
      trait: 'Openness',
      text: 'I have a vivid imagination.',
      reverse: false,
      facet: 'Fantasy'
    },
    {
      id: 'O2',
      trait: 'Openness',
      text: 'I have difficulty understanding abstract ideas.',
      reverse: true,
      facet: 'Ideas'
    },
    {
      id: 'O3',
      trait: 'Openness',
      text: 'I enjoy hearing new ideas.',
      reverse: false,
      facet: 'Ideas'
    },
    {
      id: 'O4',
      trait: 'Openness',
      text: 'I am not interested in abstract ideas.',
      reverse: true,
      facet: 'Ideas'
    },
    {
      id: 'O5',
      trait: 'Openness',
      text: 'I enjoy wild flights of fantasy.',
      reverse: false,
      facet: 'Fantasy'
    },
    {
      id: 'O6',
      trait: 'Openness',
      text: 'I believe in the importance of art.',
      reverse: false,
      facet: 'Aesthetics'
    },
    {
      id: 'O7',
      trait: 'Openness',
      text: 'I tend to vote for conservative political candidates.',
      reverse: true,
      facet: 'Values'
    },
    {
      id: 'O8',
      trait: 'Openness',
      text: 'I carry the conversation to a higher level.',
      reverse: false,
      facet: 'Ideas'
    },
    {
      id: 'O9',
      trait: 'Openness',
      text: 'I enjoy examining myself and my life.',
      reverse: false,
      facet: 'Introspection'
    },

    // Conscientiousness (9 items)
    {
      id: 'C1',
      trait: 'Conscientiousness',
      text: 'I am always prepared.',
      reverse: false,
      facet: 'Competence'
    },
    {
      id: 'C2',
      trait: 'Conscientiousness',
      text: 'I leave my belongings around.',
      reverse: true,
      facet: 'Order'
    },
    {
      id: 'C3',
      trait: 'Conscientiousness',
      text: 'I pay attention to details.',
      reverse: false,
      facet: 'Competence'
    },
    {
      id: 'C4',
      trait: 'Conscientiousness',
      text: 'I make a mess of things.',
      reverse: true,
      facet: 'Competence'
    },
    {
      id: 'C5',
      trait: 'Conscientiousness',
      text: 'I get chores done right away.',
      reverse: false,
      facet: 'Self-Discipline'
    },
    {
      id: 'C6',
      trait: 'Conscientiousness',
      text: 'I often forget to put things back in their proper place.',
      reverse: true,
      facet: 'Order'
    },
    {
      id: 'C7',
      trait: 'Conscientiousness',
      text: 'I like order.',
      reverse: false,
      facet: 'Order'
    },
    {
      id: 'C8',
      trait: 'Conscientiousness',
      text: 'I shirk my duties.',
      reverse: true,
      facet: 'Dutifulness'
    },
    {
      id: 'C9',
      trait: 'Conscientiousness',
      text: 'I follow a schedule.',
      reverse: false,
      facet: 'Self-Discipline'
    },

    // Extraversion (9 items)
    {
      id: 'E1',
      trait: 'Extraversion',
      text: 'I am the life of the party.',
      reverse: false,
      facet: 'Gregariousness'
    },
    {
      id: 'E2',
      trait: 'Extraversion',
      text: 'I don\'t talk a lot.',
      reverse: true,
      facet: 'Gregariousness'
    },
    {
      id: 'E3',
      trait: 'Extraversion',
      text: 'I feel comfortable around people.',
      reverse: false,
      facet: 'Gregariousness'
    },
    {
      id: 'E4',
      trait: 'Extraversion',
      text: 'I keep in the background.',
      reverse: true,
      facet: 'Assertiveness'
    },
    {
      id: 'E5',
      trait: 'Extraversion',
      text: 'I start conversations.',
      reverse: false,
      facet: 'Assertiveness'
    },
    {
      id: 'E6',
      trait: 'Extraversion',
      text: 'I have little to say.',
      reverse: true,
      facet: 'Gregariousness'
    },
    {
      id: 'E7',
      trait: 'Extraversion',
      text: 'I talk to a lot of different people at parties.',
      reverse: false,
      facet: 'Gregariousness'
    },
    {
      id: 'E8',
      trait: 'Extraversion',
      text: 'I don\'t like to draw attention to myself.',
      reverse: true,
      facet: 'Assertiveness'
    },
    {
      id: 'E9',
      trait: 'Extraversion',
      text: 'I don\'t mind being the center of attention.',
      reverse: false,
      facet: 'Assertiveness'
    },

    // Agreeableness (9 items)
    {
      id: 'A1',
      trait: 'Agreeableness',
      text: 'I am interested in people.',
      reverse: false,
      facet: 'Altruism'
    },
    {
      id: 'A2',
      trait: 'Agreeableness',
      text: 'I insult people.',
      reverse: true,
      facet: 'Compliance'
    },
    {
      id: 'A3',
      trait: 'Agreeableness',
      text: 'I sympathize with others\' feelings.',
      reverse: false,
      facet: 'Tender-mindedness'
    },
    {
      id: 'A4',
      trait: 'Agreeableness',
      text: 'I am not interested in other people\'s problems.',
      reverse: true,
      facet: 'Altruism'
    },
    {
      id: 'A5',
      trait: 'Agreeableness',
      text: 'I have a soft heart.',
      reverse: false,
      facet: 'Tender-mindedness'
    },
    {
      id: 'A6',
      trait: 'Agreeableness',
      text: 'I am not really interested in others.',
      reverse: true,
      facet: 'Altruism'
    },
    {
      id: 'A7',
      trait: 'Agreeableness',
      text: 'I take time out for others.',
      reverse: false,
      facet: 'Altruism'
    },
    {
      id: 'A8',
      trait: 'Agreeableness',
      text: 'I feel little concern for others.',
      reverse: true,
      facet: 'Altruism'
    },
    {
      id: 'A9',
      trait: 'Agreeableness',
      text: 'I make people feel at ease.',
      reverse: false,
      facet: 'Compliance'
    },

    // Neuroticism (8 items)
    {
      id: 'N1',
      trait: 'Neuroticism',
      text: 'I get stressed out easily.',
      reverse: false,
      facet: 'Anxiety'
    },
    {
      id: 'N2',
      trait: 'Neuroticism',
      text: 'I am relaxed most of the time.',
      reverse: true,
      facet: 'Anxiety'
    },
    {
      id: 'N3',
      trait: 'Neuroticism',
      text: 'I worry about things.',
      reverse: false,
      facet: 'Anxiety'
    },
    {
      id: 'N4',
      trait: 'Neuroticism',
      text: 'I seldom feel blue.',
      reverse: true,
      facet: 'Depression'
    },
    {
      id: 'N5',
      trait: 'Neuroticism',
      text: 'I am easily disturbed.',
      reverse: false,
      facet: 'Vulnerability'
    },
    {
      id: 'N6',
      trait: 'Neuroticism',
      text: 'I get upset easily.',
      reverse: false,
      facet: 'Angry Hostility'
    },
    {
      id: 'N7',
      trait: 'Neuroticism',
      text: 'I change my mood a lot.',
      reverse: false,
      facet: 'Impulsiveness'
    },
    {
      id: 'N8',
      trait: 'Neuroticism',
      text: 'I have frequent mood swings.',
      reverse: false,
      facet: 'Impulsiveness'
    }
  ];

  const responseOptions = [
    { value: 1, label: 'Strongly Disagree' },
    { value: 2, label: 'Disagree' },
    { value: 3, label: 'Neutral' },
    { value: 4, label: 'Agree' },
    { value: 5, label: 'Strongly Agree' }
  ];

  const traitColors = {
    'Openness': '#7C3AED',
    'Conscientiousness': '#14B8A6',
    'Extraversion': '#F59E0B',
    'Agreeableness': '#EF4444',
    'Neuroticism': '#6366F1'
  };

  const traitDescriptions = {
    'Openness': 'Intellectual curiosity, creativity, and appreciation for new experiences',
    'Conscientiousness': 'Self-discipline, organization, and goal-directed behavior',
    'Extraversion': 'Sociability, assertiveness, and positive emotionality',
    'Agreeableness': 'Cooperation, trust, empathy, and concern for others',
    'Neuroticism': 'Tendency toward negative emotions and emotional instability'
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
      setShowHint(false);
    } else {
      // Save responses and navigate to next assessment
      localStorage.setItem('bigFiveResponses', JSON.stringify(responses));
      navigate('/onboarding/attachment-style-assessment');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowHint(false);
    } else {
      navigate('/onboarding/personality-assessment-intro');
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

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Big Five Personality Assessment
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
              backgroundColor: traitColors[currentQuestionData.trait]
            }
          }} 
        />
      </Box>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Current Trait Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                label={currentQuestionData.trait}
                sx={{ 
                  backgroundColor: traitColors[currentQuestionData.trait],
                  color: 'white',
                  fontWeight: 'semibold'
                }}
              />
              <Tooltip title={traitDescriptions[currentQuestionData.trait]}>
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {traitDescriptions[currentQuestionData.trait]}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              "{currentQuestionData.text}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              How well does this statement describe you?
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
                      `2px solid ${traitColors[currentQuestionData.trait]}` : 
                      '1px solid #E5E7EB',
                    borderRadius: 2,
                    p: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: traitColors[currentQuestionData.trait],
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
                          color: traitColors[currentQuestionData.trait],
                          '&.Mui-checked': {
                            color: traitColors[currentQuestionData.trait]
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
                          <CheckCircle sx={{ color: traitColors[currentQuestionData.trait], ml: 2 }} />
                        )}
                      </Box>
                    }
                    sx={{ margin: 0, width: '100%' }}
                  />
                </Paper>
              ))}
            </RadioGroup>
          </FormControl>

          {/* Hint Section */}
          <Fade in={showHint}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Tip:</strong> Answer based on how you typically are, not how you wish to be or think you should be. 
                There are no right or wrong answers - we're looking for your authentic self.
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
              {currentQuestion === 0 ? 'Back to Intro' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showHint && (
                <Button
                  variant="text"
                  onClick={() => setShowHint(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Need help?
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: traitColors[currentQuestionData.trait],
                  '&:hover': {
                    backgroundColor: traitColors[currentQuestionData.trait],
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Continue to Attachment' : 'Next Question'}
              </Button>
            </Box>
          </Box>

          {/* Progress Summary */}
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
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.5))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BigFivePersonalityTest;

