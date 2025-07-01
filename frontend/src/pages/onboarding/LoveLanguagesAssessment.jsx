/**
 * Screen 129: Love Languages Assessment
 * Based on Gary Chapman's Five Love Languages with cultural adaptations
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
  Divider
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Favorite,
  Info,
  CheckCircle,
  Timer,
  TouchApp,
  RecordVoiceOver,
  CardGiftcard,
  Schedule,
  HandHeart,
  Psychology,
  Groups,
  Home
} from '@mui/icons-material';

const LoveLanguagesAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Love Languages assessment questions with cultural sensitivity
  const questions = [
    // Scenario-based preference questions
    {
      id: 'LL1',
      type: 'preference_choice',
      text: 'When you\'ve had a stressful day, what would mean the most to you from your partner?',
      options: [
        { 
          value: 'physical_touch', 
          label: 'A warm hug and physical comfort',
          description: 'Physical affection to help you feel better',
          icon: <TouchApp />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Encouraging words and verbal support',
          description: 'Hearing "You\'re doing great" or "I believe in you"',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'acts_of_service', 
          label: 'Help with tasks or responsibilities',
          description: 'Taking care of dinner or handling chores',
          icon: <HandHeart />
        },
        { 
          value: 'quality_time', 
          label: 'Undivided attention and presence',
          description: 'Sitting together and really listening',
          icon: <Schedule />
        },
        { 
          value: 'gifts', 
          label: 'A thoughtful gift or surprise',
          description: 'Something that shows they were thinking of you',
          icon: <CardGiftcard />
        }
      ],
      culturalNote: 'Stress response preferences vary across cultures - some value physical comfort, others prefer practical help or verbal support',
      insight: 'Understanding stress support preferences helps partners provide effective comfort during difficult times'
    },
    {
      id: 'LL2',
      type: 'preference_choice',
      text: 'What makes you feel most loved and appreciated in a relationship?',
      options: [
        { 
          value: 'words_of_affirmation', 
          label: 'Hearing "I love you" and compliments regularly',
          description: 'Verbal expressions of love and appreciation',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'quality_time', 
          label: 'Having meaningful conversations and shared activities',
          description: 'Focused attention and shared experiences',
          icon: <Schedule />
        },
        { 
          value: 'physical_touch', 
          label: 'Affectionate touch, hugs, and physical closeness',
          description: 'Physical expressions of love and connection',
          icon: <TouchApp />
        },
        { 
          value: 'acts_of_service', 
          label: 'Partner helping with things that matter to you',
          description: 'Actions that make your life easier or better',
          icon: <HandHeart />
        },
        { 
          value: 'gifts', 
          label: 'Thoughtful gifts that show they know you well',
          description: 'Tangible symbols of love and thoughtfulness',
          icon: <CardGiftcard />
        }
      ],
      culturalNote: 'Love expression varies greatly across cultures - some emphasize verbal affection, others show love through actions or gifts',
      insight: 'Primary love language determines how individuals best receive and interpret expressions of love'
    },
    {
      id: 'LL3',
      type: 'preference_choice',
      text: 'When your partner wants to show they care, what would be most meaningful?',
      options: [
        { 
          value: 'acts_of_service', 
          label: 'Doing something helpful without being asked',
          description: 'Anticipating needs and taking action',
          icon: <HandHeart />
        },
        { 
          value: 'gifts', 
          label: 'Bringing you something special "just because"',
          description: 'Unexpected tokens of affection',
          icon: <CardGiftcard />
        },
        { 
          value: 'physical_touch', 
          label: 'Spontaneous affectionate touch throughout the day',
          description: 'Casual physical connection and intimacy',
          icon: <TouchApp />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Expressing appreciation for who you are',
          description: 'Verbal recognition of your qualities',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'quality_time', 
          label: 'Planning special time together',
          description: 'Dedicated attention and shared experiences',
          icon: <Schedule />
        }
      ],
      culturalNote: 'Care expression varies across cultures and family backgrounds - some show care through actions, others through words or presence',
      insight: 'Understanding care preferences helps partners express love in ways that are most meaningful to their partner'
    },
    {
      id: 'LL4',
      type: 'preference_choice',
      text: 'What would hurt your feelings most if your partner stopped doing it?',
      options: [
        { 
          value: 'quality_time', 
          label: 'Spending focused time together',
          description: 'Losing undivided attention and connection',
          icon: <Schedule />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Saying loving and encouraging things',
          description: 'Missing verbal expressions of love',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'physical_touch', 
          label: 'Being physically affectionate',
          description: 'Lack of hugs, kisses, and touch',
          icon: <TouchApp />
        },
        { 
          value: 'gifts', 
          label: 'Giving thoughtful gifts and surprises',
          description: 'No more tangible expressions of love',
          icon: <CardGiftcard />
        },
        { 
          value: 'acts_of_service', 
          label: 'Helping with tasks and responsibilities',
          description: 'Missing practical support and help',
          icon: <HandHeart />
        }
      ],
      culturalNote: 'Love withdrawal sensitivity varies across cultures and attachment styles',
      insight: 'Understanding what absence hurts most reveals primary love language and relationship vulnerabilities'
    },
    {
      id: 'LL5',
      type: 'preference_choice',
      text: 'How do you naturally tend to show love to others?',
      options: [
        { 
          value: 'gifts', 
          label: 'Giving thoughtful gifts and surprises',
          description: 'Expressing love through tangible tokens',
          icon: <CardGiftcard />
        },
        { 
          value: 'acts_of_service', 
          label: 'Doing helpful things for them',
          description: 'Showing love through actions and service',
          icon: <HandHeart />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Telling them how much they mean to me',
          description: 'Expressing love through words and praise',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'physical_touch', 
          label: 'Being physically affectionate',
          description: 'Showing love through touch and closeness',
          icon: <TouchApp />
        },
        { 
          value: 'quality_time', 
          label: 'Spending meaningful time together',
          description: 'Giving the gift of attention and presence',
          icon: <Schedule />
        }
      ],
      culturalNote: 'Love expression styles often reflect family patterns and cultural norms around affection',
      insight: 'How we naturally give love often reflects our own love language preferences'
    },
    {
      id: 'LL6',
      type: 'preference_choice',
      text: 'In a long-distance relationship, what would help you feel most connected?',
      options: [
        { 
          value: 'words_of_affirmation', 
          label: 'Regular loving messages and video calls',
          description: 'Verbal connection and communication',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'gifts', 
          label: 'Surprise packages and thoughtful deliveries',
          description: 'Tangible reminders of love and care',
          icon: <CardGiftcard />
        },
        { 
          value: 'quality_time', 
          label: 'Scheduled video dates and shared activities',
          description: 'Dedicated time and virtual presence',
          icon: <Schedule />
        },
        { 
          value: 'acts_of_service', 
          label: 'Help with tasks and practical support',
          description: 'Assistance with life responsibilities',
          icon: <HandHeart />
        },
        { 
          value: 'physical_touch', 
          label: 'Planning visits and physical reunions',
          description: 'Prioritizing physical connection opportunities',
          icon: <TouchApp />
        }
      ],
      culturalNote: 'Long-distance love expression varies across cultures and technology comfort levels',
      insight: 'Distance challenges reveal which love languages can be adapted and which require physical presence'
    },
    {
      id: 'LL7',
      type: 'preference_choice',
      text: 'What would make you feel most appreciated after doing something special for your partner?',
      options: [
        { 
          value: 'words_of_affirmation', 
          label: 'Hearing specific appreciation and praise',
          description: 'Verbal recognition of your efforts',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'physical_touch', 
          label: 'A warm hug or affectionate touch',
          description: 'Physical expression of gratitude',
          icon: <TouchApp />
        },
        { 
          value: 'quality_time', 
          label: 'Them wanting to spend more time with you',
          description: 'Attention and presence as appreciation',
          icon: <Schedule />
        },
        { 
          value: 'acts_of_service', 
          label: 'Them doing something special for you in return',
          description: 'Reciprocal acts of service',
          icon: <HandHeart />
        },
        { 
          value: 'gifts', 
          label: 'A small token of appreciation',
          description: 'Tangible acknowledgment of your gesture',
          icon: <CardGiftcard />
        }
      ],
      culturalNote: 'Appreciation preferences vary across cultures - some value verbal recognition, others prefer reciprocal actions',
      insight: 'Understanding appreciation preferences helps partners acknowledge each other effectively'
    },
    {
      id: 'LL8',
      type: 'preference_choice',
      text: 'When you\'re feeling disconnected from your partner, what would help most?',
      options: [
        { 
          value: 'quality_time', 
          label: 'Having a deep conversation or shared activity',
          description: 'Reconnecting through focused attention',
          icon: <Schedule />
        },
        { 
          value: 'physical_touch', 
          label: 'Physical closeness and affection',
          description: 'Reconnecting through touch and intimacy',
          icon: <TouchApp />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Hearing reassurance and loving words',
          description: 'Verbal reconnection and affirmation',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'acts_of_service', 
          label: 'Partner showing care through helpful actions',
          description: 'Reconnecting through supportive behavior',
          icon: <HandHeart />
        },
        { 
          value: 'gifts', 
          label: 'A meaningful gesture or surprise',
          description: 'Tangible symbol of renewed connection',
          icon: <CardGiftcard />
        }
      ],
      culturalNote: 'Reconnection preferences vary across cultures and attachment styles',
      insight: 'Understanding reconnection needs helps partners repair relationship disconnection effectively'
    },
    {
      id: 'LL9',
      type: 'preference_choice',
      text: 'What type of anniversary celebration would mean the most to you?',
      options: [
        { 
          value: 'quality_time', 
          label: 'A special day together doing something meaningful',
          description: 'Celebrating through shared experiences',
          icon: <Schedule />
        },
        { 
          value: 'gifts', 
          label: 'Exchanging thoughtful, meaningful gifts',
          description: 'Celebrating through tangible expressions',
          icon: <CardGiftcard />
        },
        { 
          value: 'words_of_affirmation', 
          label: 'Sharing heartfelt words about your relationship',
          description: 'Celebrating through verbal expression',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'acts_of_service', 
          label: 'Partner planning everything as a surprise',
          description: 'Celebrating through thoughtful service',
          icon: <HandHeart />
        },
        { 
          value: 'physical_touch', 
          label: 'Intimate, romantic physical connection',
          description: 'Celebrating through physical closeness',
          icon: <TouchApp />
        }
      ],
      culturalNote: 'Celebration preferences vary across cultures and relationship traditions',
      insight: 'Anniversary preferences reveal how individuals like to mark important relationship milestones'
    },
    {
      id: 'LL10',
      type: 'preference_choice',
      text: 'When your partner has hurt your feelings, what would help you forgive most easily?',
      options: [
        { 
          value: 'words_of_affirmation', 
          label: 'A sincere apology with specific acknowledgment',
          description: 'Verbal recognition and commitment to change',
          icon: <RecordVoiceOver />
        },
        { 
          value: 'acts_of_service', 
          label: 'Changed behavior and helpful actions',
          description: 'Demonstrating change through actions',
          icon: <HandHeart />
        },
        { 
          value: 'quality_time', 
          label: 'Focused conversation and emotional connection',
          description: 'Working through issues together',
          icon: <Schedule />
        },
        { 
          value: 'physical_touch', 
          label: 'Physical comfort and reassuring touch',
          description: 'Physical reconciliation and comfort',
          icon: <TouchApp />
        },
        { 
          value: 'gifts', 
          label: 'A meaningful gesture or peace offering',
          description: 'Tangible symbol of remorse and love',
          icon: <CardGiftcard />
        }
      ],
      culturalNote: 'Forgiveness and reconciliation styles vary greatly across cultures and conflict resolution norms',
      insight: 'Understanding forgiveness preferences helps partners repair relationship damage effectively'
    }
  ];

  const loveLanguages = {
    'words_of_affirmation': {
      name: 'Words of Affirmation',
      description: 'Verbal expressions of love, appreciation, and encouragement',
      icon: <RecordVoiceOver />,
      color: '#3B82F6',
      characteristics: [
        'Values verbal expressions of love',
        'Appreciates compliments and praise',
        'Hurt by harsh or critical words',
        'Motivated by encouragement'
      ]
    },
    'quality_time': {
      name: 'Quality Time',
      description: 'Undivided attention and meaningful shared experiences',
      icon: <Schedule />,
      color: '#10B981',
      characteristics: [
        'Values focused attention',
        'Appreciates meaningful conversations',
        'Hurt by distractions during time together',
        'Motivated by presence and engagement'
      ]
    },
    'physical_touch': {
      name: 'Physical Touch',
      description: 'Appropriate physical affection and closeness',
      icon: <TouchApp />,
      color: '#F59E0B',
      characteristics: [
        'Values physical affection',
        'Appreciates hugs, kisses, and touch',
        'Hurt by physical distance or rejection',
        'Motivated by appropriate physical connection'
      ]
    },
    'acts_of_service': {
      name: 'Acts of Service',
      description: 'Helpful actions that make life easier or better',
      icon: <HandHeart />,
      color: '#8B5CF6',
      characteristics: [
        'Values helpful actions',
        'Appreciates practical support',
        'Hurt by laziness or broken commitments',
        'Motivated by thoughtful service'
      ]
    },
    'gifts': {
      name: 'Receiving Gifts',
      description: 'Thoughtful gifts and tangible symbols of love',
      icon: <CardGiftcard />,
      color: '#EF4444',
      characteristics: [
        'Values thoughtful gifts',
        'Appreciates symbols of love',
        'Hurt by forgotten special occasions',
        'Motivated by tangible expressions'
      ]
    }
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
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowInsight(false);
    } else {
      // Calculate love language scores and save results
      const scores = calculateLoveLanguageScores();
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        loveLanguages: {
          responses: responses,
          scores: scores
        }
      }));
      navigate('/onboarding/intimacy-assessment');
    }
  };

  const calculateLoveLanguageScores = () => {
    const scores = {
      words_of_affirmation: 0,
      quality_time: 0,
      physical_touch: 0,
      acts_of_service: 0,
      gifts: 0
    };

    Object.values(responses).forEach(response => {
      if (scores.hasOwnProperty(response)) {
        scores[response]++;
      }
    });

    return scores;
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/emotional-intelligence-assessment');
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

  // Calculate current love language scores for progress display
  const getCurrentScores = () => {
    const scores = {
      words_of_affirmation: 0,
      quality_time: 0,
      physical_touch: 0,
      acts_of_service: 0,
      gifts: 0
    };

    Object.values(responses).forEach(response => {
      if (scores.hasOwnProperty(response)) {
        scores[response]++;
      }
    });

    return scores;
  };

  const currentScores = getCurrentScores();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Love Languages Assessment
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
              backgroundColor: '#EC4899'
            }
          }} 
        />
      </Box>

      {/* Love Language Progress */}
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {Object.entries(loveLanguages).map(([key, language]) => (
          <Grid item xs={12/5} key={key}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1.5, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: currentScores[key] > 0 ? `${language.color}10` : 'transparent',
                minHeight: 80
              }}
            >
              {React.cloneElement(language.icon, { 
                sx: { color: language.color, fontSize: 20, mb: 0.5 } 
              })}
              <Typography variant="caption" display="block" color={language.color} fontWeight="semibold" sx={{ fontSize: '0.7rem', lineHeight: 1.2 }}>
                {language.name.split(' ').map((word, i) => (
                  <span key={i}>{word}<br /></span>
                ))}
              </Typography>
              <Typography variant="h6" color={language.color}>
                {currentScores[key]}
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
              <Favorite sx={{ color: '#EC4899', fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color="#EC4899">
                Love Languages Assessment
              </Typography>
              <Tooltip title="Based on Gary Chapman's Five Love Languages with cultural adaptations">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Discover how you prefer to give and receive love in relationships
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.text}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              Choose the option that resonates most with you:
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <RadioGroup
              value={currentResponse || ''}
              onChange={(e) => handleResponseChange(e.target.value)}
              sx={{ gap: 2 }}
            >
              {currentQuestionData.options.map((option) => {
                const language = loveLanguages[option.value];
                return (
                  <Paper
                    key={option.value}
                    elevation={0}
                    sx={{
                      border: currentResponse === option.value ? 
                        `2px solid ${language.color}` : 
                        '1px solid #E5E7EB',
                      borderRadius: 2,
                      p: 3,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: language.color,
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
                            color: language.color,
                            '&.Mui-checked': {
                              color: language.color
                            }
                          }} 
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                            {React.cloneElement(language.icon, { 
                              sx: { color: language.color, fontSize: 24 } 
                            })}
                            <Box>
                              <Typography variant="body1" fontWeight={currentResponse === option.value ? 'semibold' : 'normal'}>
                                {option.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {option.description}
                              </Typography>
                            </Box>
                          </Box>
                          {currentResponse === option.value && (
                            <CheckCircle sx={{ color: language.color, ml: 2 }} />
                          )}
                        </Box>
                      }
                      sx={{ margin: 0, width: '100%' }}
                    />
                  </Paper>
                );
              })}
            </RadioGroup>
          </FormControl>

          {/* Cultural & Love Language Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Love Language Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to EQ Assessment' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Love Insights
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: '#EC4899',
                  '&:hover': {
                    backgroundColor: '#EC4899',
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Continue to Intimacy Assessment' : 'Next Question'}
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
              <strong>Based on:</strong> Gary Chapman's Five Love Languages with cultural adaptations
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.3))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoveLanguagesAssessment;

