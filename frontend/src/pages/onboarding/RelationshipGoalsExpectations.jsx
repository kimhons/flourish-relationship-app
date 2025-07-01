/**
 * Screen 134: Relationship Goals & Expectations
 * Comprehensive assessment of relationship goals and future expectations
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
  Rating,
  FormGroup,
  Checkbox
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  FavoriteOutlined,
  Info,
  CheckCircle,
  Timer,
  Home,
  ChildCare,
  School,
  Work,
  Flight,
  Elderly,
  Pets,
  MonetizationOn,
  HealthAndSafety,
  SelfImprovement,
  Group,
  Star,
  Lightbulb,
  TrendingUp,
  Schedule,
  LocationOn,
  Family,
  Celebration,
  Support
} from '@mui/icons-material';

const RelationshipGoalsExpectations = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Relationship goals and expectations assessment questions
  const questions = [
    // Relationship Timeline & Commitment
    {
      id: 'RG1',
      domain: 'Relationship Timeline',
      category: 'Commitment Timeline',
      type: 'preference_choice',
      text: 'Your ideal timeline for relationship progression:',
      scenario: 'Moving from dating to exclusive relationship to long-term commitment',
      options: [
        { value: 1, label: 'Take it very slow - 1+ years to become exclusive', style: 'Very Gradual', timeline: 'Extended' },
        { value: 2, label: 'Moderate pace - 6-12 months to exclusivity', style: 'Gradual', timeline: 'Standard' },
        { value: 3, label: 'Natural progression - 3-6 months to exclusivity', style: 'Natural', timeline: 'Moderate' },
        { value: 4, label: 'Faster connection - 1-3 months to exclusivity', style: 'Accelerated', timeline: 'Quick' },
        { value: 5, label: 'When it feels right - timeline varies by connection', style: 'Intuitive', timeline: 'Flexible' }
      ],
      culturalNote: 'Relationship timelines vary across cultures, ages, and personal experiences',
      insight: 'Timeline compatibility affects relationship pressure and natural progression',
      icon: <Schedule />
    },
    {
      id: 'RG2',
      domain: 'Relationship Timeline',
      category: 'Long-term Commitment',
      type: 'priority_scale',
      text: 'How important is eventual marriage or life partnership to you?',
      scenario: 'Long-term committed partnership, whether through marriage or other formal commitment',
      culturalNote: 'Marriage importance varies across cultures, religions, and personal values',
      insight: 'Marriage goals compatibility affects long-term relationship direction',
      icon: <Celebration />
    },

    // Family & Children Goals
    {
      id: 'FG1',
      domain: 'Family Planning',
      category: 'Children Desire',
      type: 'preference_choice',
      text: 'Your feelings about having children:',
      scenario: 'Biological children, adoption, or other paths to parenthood',
      options: [
        { value: 1, label: 'Definitely want children - it\'s very important to me', style: 'Strong Desire', priority: 'High' },
        { value: 2, label: 'Would like children but not essential', style: 'Moderate Desire', priority: 'Medium' },
        { value: 3, label: 'Open to children but happy either way', style: 'Flexible', priority: 'Low' },
        { value: 4, label: 'Prefer not to have children', style: 'Child-Free', priority: 'None' },
        { value: 5, label: 'Unsure or depends on circumstances', style: 'Undecided', priority: 'Variable' }
      ],
      culturalNote: 'Children preferences vary across cultures, ages, and life circumstances',
      insight: 'Children compatibility is crucial for long-term relationship success',
      icon: <ChildCare />
    },
    {
      id: 'FG2',
      domain: 'Family Planning',
      category: 'Family Timeline',
      type: 'preference_choice',
      text: 'If you want children, your preferred timeline:',
      scenario: 'When you would ideally like to start having children',
      options: [
        { value: 1, label: 'Soon - within 1-2 years', style: 'Immediate', timeline: 'Short' },
        { value: 2, label: 'Near future - within 2-5 years', style: 'Near-term', timeline: 'Medium' },
        { value: 3, label: 'Eventually - within 5-10 years', style: 'Long-term', timeline: 'Extended' },
        { value: 4, label: 'Someday - no specific timeline', style: 'Flexible', timeline: 'Open' },
        { value: 5, label: 'Not applicable - don\'t want children', style: 'N/A', timeline: 'None' }
      ],
      culturalNote: 'Family timing varies across cultures, career stages, and life circumstances',
      insight: 'Family timeline compatibility affects relationship planning and pressure',
      icon: <Family />
    },

    // Living Situation & Location Goals
    {
      id: 'LG1',
      domain: 'Living Goals',
      category: 'Living Together',
      type: 'preference_choice',
      text: 'Your preference for living together in a relationship:',
      scenario: 'Moving in together, cohabitation, and shared living arrangements',
      options: [
        { value: 1, label: 'Live together only after marriage/engagement', style: 'Traditional', approach: 'Conservative' },
        { value: 2, label: 'Live together after 1+ years of dating', style: 'Gradual', approach: 'Cautious' },
        { value: 3, label: 'Live together when relationship feels serious (6-12 months)', style: 'Natural', approach: 'Moderate' },
        { value: 4, label: 'Open to living together relatively quickly (3-6 months)', style: 'Progressive', approach: 'Open' },
        { value: 5, label: 'Prefer to maintain separate homes even in long-term relationships', style: 'Independent', approach: 'Autonomous' }
      ],
      culturalNote: 'Cohabitation preferences vary across cultures, religions, and personal values',
      insight: 'Living arrangement compatibility affects relationship progression and lifestyle',
      icon: <Home />
    },
    {
      id: 'LG2',
      domain: 'Living Goals',
      category: 'Location Flexibility',
      type: 'rating_scale',
      text: 'How willing are you to relocate for a serious relationship?',
      scenario: 'Moving to a different city, state, or country for your partner\'s career or family',
      culturalNote: 'Relocation willingness varies across career stages, family ties, and cultural backgrounds',
      insight: 'Location flexibility affects long-term relationship possibilities and career decisions',
      icon: <LocationOn />
    },

    // Career & Financial Goals
    {
      id: 'CG1',
      domain: 'Career & Finance',
      category: 'Career Priority',
      type: 'preference_scale',
      text: 'Your approach to balancing career ambitions with relationship priorities:',
      scaleLabels: ['Relationship First', 'Balanced Approach', 'Career First'],
      scenario: 'Making decisions about career moves, work hours, and professional goals in the context of a relationship',
      culturalNote: 'Career-relationship balance varies across cultures, genders, and life stages',
      insight: 'Career priority compatibility affects lifestyle decisions and mutual support',
      icon: <Work />
    },
    {
      id: 'CG2',
      domain: 'Career & Finance',
      category: 'Financial Goals',
      type: 'multiple_choice',
      text: 'Your important financial goals in a relationship (select all that apply):',
      scenario: 'Financial planning and goals you would want to work toward together',
      options: [
        { value: 'homeownership', label: 'Buying a home together', icon: <Home /> },
        { value: 'savings', label: 'Building substantial savings/emergency fund', icon: <MonetizationOn /> },
        { value: 'travel', label: 'Saving for travel and experiences', icon: <Flight /> },
        { value: 'retirement', label: 'Planning for retirement together', icon: <Elderly /> },
        { value: 'education', label: 'Investing in education/skills development', icon: <School /> },
        { value: 'family', label: 'Financial planning for children/family', icon: <ChildCare /> },
        { value: 'business', label: 'Starting a business or investment ventures', icon: <TrendingUp /> },
        { value: 'charity', label: 'Charitable giving and community support', icon: <Support /> }
      ],
      culturalNote: 'Financial goals vary across cultures, economic backgrounds, and life stages',
      insight: 'Financial goal alignment affects long-term planning and lifestyle compatibility',
      icon: <MonetizationOn />
    },

    // Personal Growth & Development Goals
    {
      id: 'PG1',
      domain: 'Personal Growth',
      category: 'Growth Importance',
      type: 'priority_scale',
      text: 'How important is mutual personal growth and development in a relationship?',
      scenario: 'Supporting each other\'s personal development, learning, and self-improvement',
      culturalNote: 'Growth orientation varies across cultures and personal development values',
      insight: 'Growth compatibility affects long-term relationship satisfaction and evolution',
      icon: <SelfImprovement />
    },
    {
      id: 'PG2',
      domain: 'Personal Growth',
      category: 'Growth Areas',
      type: 'multiple_choice',
      text: 'Areas of personal growth you\'d like to pursue together (select all that apply):',
      scenario: 'Types of growth and development you\'d want to support in each other',
      options: [
        { value: 'emotional', label: 'Emotional intelligence and communication skills', icon: <SelfImprovement /> },
        { value: 'spiritual', label: 'Spiritual or philosophical development', icon: <Star /> },
        { value: 'physical', label: 'Health, fitness, and physical well-being', icon: <HealthAndSafety /> },
        { value: 'intellectual', label: 'Learning new skills and knowledge', icon: <School /> },
        { value: 'creative', label: 'Creative pursuits and artistic expression', icon: <Celebration /> },
        { value: 'social', label: 'Social skills and community involvement', icon: <Group /> },
        { value: 'professional', label: 'Career development and professional skills', icon: <Work /> },
        { value: 'adventure', label: 'New experiences and adventure seeking', icon: <Flight /> }
      ],
      culturalNote: 'Growth areas vary across personality types, cultures, and life stages',
      insight: 'Shared growth interests create opportunities for bonding and mutual development',
      icon: <TrendingUp />
    },

    // Social & Family Integration Goals
    {
      id: 'SG1',
      domain: 'Social Integration',
      category: 'Family Importance',
      type: 'priority_scale',
      text: 'How important is it that your partner gets along well with your family?',
      scenario: 'Your partner\'s relationship with your parents, siblings, and extended family',
      culturalNote: 'Family importance varies across cultures, with some emphasizing family harmony',
      insight: 'Family integration affects long-term relationship harmony and support systems',
      icon: <Family />
    },
    {
      id: 'SG2',
      domain: 'Social Integration',
      category: 'Social Circle',
      type: 'preference_choice',
      text: 'Your preference for social circles in a relationship:',
      scenario: 'How you and your partner would handle friendships and social groups',
      options: [
        { value: 1, label: 'Merge social circles - shared friends and activities', style: 'Integrated', approach: 'Unified' },
        { value: 2, label: 'Mix of shared and separate friends', style: 'Blended', approach: 'Balanced' },
        { value: 3, label: 'Mostly separate friends with some overlap', style: 'Independent', approach: 'Autonomous' },
        { value: 4, label: 'Completely separate social circles', style: 'Separate', approach: 'Distinct' },
        { value: 5, label: 'Flexible approach based on natural connections', style: 'Organic', approach: 'Natural' }
      ],
      culturalNote: 'Social integration varies across personality types and cultural backgrounds',
      insight: 'Social circle compatibility affects relationship support and social satisfaction',
      icon: <Group />
    },

    // Lifestyle & Values Alignment
    {
      id: 'LV1',
      domain: 'Lifestyle Values',
      category: 'Lifestyle Priorities',
      type: 'multiple_choice',
      text: 'Your most important lifestyle priorities in a relationship (select top 3):',
      scenario: 'The lifestyle elements that matter most to you in a long-term partnership',
      options: [
        { value: 'stability', label: 'Financial and emotional stability', icon: <MonetizationOn /> },
        { value: 'adventure', label: 'Travel and new experiences', icon: <Flight /> },
        { value: 'family', label: 'Family time and close relationships', icon: <Family /> },
        { value: 'career', label: 'Professional success and achievement', icon: <Work /> },
        { value: 'health', label: 'Physical and mental health focus', icon: <HealthAndSafety /> },
        { value: 'creativity', label: 'Creative expression and arts', icon: <Celebration /> },
        { value: 'community', label: 'Community involvement and service', icon: <Support /> },
        { value: 'learning', label: 'Continuous learning and growth', icon: <School /> },
        { value: 'spirituality', label: 'Spiritual or philosophical development', icon: <Star /> },
        { value: 'independence', label: 'Personal freedom and autonomy', icon: <SelfImprovement /> }
      ],
      maxSelections: 3,
      culturalNote: 'Lifestyle priorities vary across cultures, ages, and personal values',
      insight: 'Lifestyle priority alignment affects daily life satisfaction and long-term compatibility',
      icon: <Star />
    },

    // Relationship Support & Challenges
    {
      id: 'RS1',
      domain: 'Relationship Support',
      category: 'Challenge Handling',
      type: 'preference_choice',
      text: 'Your approach to handling major life challenges together:',
      scenario: 'Dealing with job loss, health issues, family crises, or other major life challenges',
      options: [
        { value: 1, label: 'Face everything together as a united team', style: 'United Front', approach: 'Collaborative' },
        { value: 2, label: 'Support each other while maintaining some independence', style: 'Supportive Independence', approach: 'Balanced' },
        { value: 3, label: 'Handle individual challenges separately, support when asked', style: 'Respectful Distance', approach: 'Autonomous' },
        { value: 4, label: 'Prefer to handle most challenges independently', style: 'Self-Reliant', approach: 'Independent' },
        { value: 5, label: 'Approach varies depending on the type of challenge', style: 'Situational', approach: 'Adaptive' }
      ],
      culturalNote: 'Challenge handling varies across cultures and attachment styles',
      insight: 'Challenge approach compatibility affects relationship resilience and support',
      icon: <Support />
    },

    // Future Vision & Dreams
    {
      id: 'FV1',
      domain: 'Future Vision',
      category: 'Shared Dreams',
      type: 'priority_scale',
      text: 'How important is it to have shared dreams and future visions?',
      scenario: 'Having common goals, dreams, and visions for your life together',
      culturalNote: 'Shared vision importance varies across personality types and relationship styles',
      insight: 'Shared vision compatibility affects long-term relationship direction and motivation',
      icon: <Star />
    }
  ];

  const priorityOptions = [
    { value: 1, label: 'Not Important', color: '#EF4444' },
    { value: 2, label: 'Somewhat Important', color: '#F97316' },
    { value: 3, label: 'Moderately Important', color: '#EAB308' },
    { value: 4, label: 'Very Important', color: '#22C55E' },
    { value: 5, label: 'Extremely Important', color: '#059669' }
  ];

  const ratingLabels = {
    1: 'Not Willing',
    2: 'Somewhat Reluctant', 
    3: 'Neutral',
    4: 'Somewhat Willing',
    5: 'Very Willing'
  };

  const domainColors = {
    'Relationship Timeline': '#3B82F6',
    'Family Planning': '#EC4899',
    'Living Goals': '#10B981',
    'Career & Finance': '#F59E0B',
    'Personal Growth': '#8B5CF6',
    'Social Integration': '#EF4444',
    'Lifestyle Values': '#06B6D4',
    'Relationship Support': '#84CC16',
    'Future Vision': '#6366F1'
  };

  const domainDescriptions = {
    'Relationship Timeline': 'Timeline preferences for relationship progression and commitment',
    'Family Planning': 'Goals and preferences regarding children and family building',
    'Living Goals': 'Preferences for living arrangements and location flexibility',
    'Career & Finance': 'Career priorities and financial goals in relationships',
    'Personal Growth': 'Importance of mutual development and growth areas',
    'Social Integration': 'Family and social circle integration preferences',
    'Lifestyle Values': 'Core lifestyle priorities and values alignment',
    'Relationship Support': 'Approaches to handling challenges and providing support',
    'Future Vision': 'Importance of shared dreams and future planning'
  };

  const domainIcons = {
    'Relationship Timeline': <Schedule />,
    'Family Planning': <ChildCare />,
    'Living Goals': <Home />,
    'Career & Finance': <Work />,
    'Personal Growth': <SelfImprovement />,
    'Social Integration': <Group />,
    'Lifestyle Values': <Star />,
    'Relationship Support': <Support />,
    'Future Vision': <Star />
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

  const handleMultipleChoice = (value) => {
    const currentQuestionData = questions[currentQuestion];
    const currentSelections = responses[currentQuestionData.id] || [];
    const maxSelections = currentQuestionData.maxSelections || currentQuestionData.options.length;
    
    let newSelections;
    if (currentSelections.includes(value)) {
      newSelections = currentSelections.filter(item => item !== value);
    } else if (currentSelections.length < maxSelections) {
      newSelections = [...currentSelections, value];
    } else {
      return; // Max selections reached
    }
    
    setResponses(prev => ({
      ...prev,
      [currentQuestionData.id]: newSelections
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
        relationshipGoals: responses
      }));
      navigate('/onboarding/learning-growth-plan');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/communication-patterns-analysis');
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

  // Check if current response is valid
  const isResponseValid = () => {
    if (currentQuestionData.type === 'multiple_choice') {
      return currentResponse && currentResponse.length > 0;
    }
    return currentResponse !== undefined && currentResponse !== null;
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Relationship Goals & Expectations Assessment
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
              <FavoriteOutlined sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Relationship Goals & Expectations
              </Typography>
              <Tooltip title="Comprehensive assessment of relationship goals and future expectations">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding your relationship goals for better long-term compatibility
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
                currentQuestionData.type === 'rating_scale' ?
                'Rate your willingness:' :
                currentQuestionData.type === 'preference_scale' ?
                'Choose your preference:' :
                currentQuestionData.type === 'multiple_choice' ?
                `Select ${currentQuestionData.maxSelections ? `up to ${currentQuestionData.maxSelections}` : 'all that apply'}:` :
                'Choose the option that best describes your preference:'
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
                  {currentResponse ? ratingLabels[currentResponse] : 'Select your willingness level'}
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
            ) : currentQuestionData.type === 'multiple_choice' ? (
              <FormGroup>
                <Grid container spacing={2}>
                  {currentQuestionData.options.map((option) => (
                    <Grid item xs={12} sm={6} key={option.value}>
                      <Paper
                        elevation={0}
                        sx={{
                          border: (currentResponse || []).includes(option.value) ? 
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
                        onClick={() => handleMultipleChoice(option.value)}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={(currentResponse || []).includes(option.value)}
                              onChange={() => handleMultipleChoice(option.value)}
                              sx={{ 
                                color: domainColors[currentQuestionData.domain],
                                '&.Mui-checked': {
                                  color: domainColors[currentQuestionData.domain]
                                }
                              }}
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              {option.icon}
                              <Typography variant="body2" fontWeight={(currentResponse || []).includes(option.value) ? 'semibold' : 'normal'}>
                                {option.label}
                              </Typography>
                            </Box>
                          }
                          sx={{ margin: 0, width: '100%' }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            ) : currentQuestionData.type === 'priority_scale' ? (
              <RadioGroup
                value={currentResponse || ''}
                onChange={(e) => handleResponseChange(e.target.value)}
                sx={{ gap: 2 }}
              >
                {priorityOptions.map((option) => (
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
                            {(option.style || option.timeline || option.approach) && (
                              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                {option.style && (
                                  <Chip 
                                    label={option.style} 
                                    size="small" 
                                    variant="outlined"
                                    sx={{ fontSize: '0.75rem' }}
                                  />
                                )}
                                {(option.timeline || option.approach) && (
                                  <Chip 
                                    label={option.timeline || option.approach} 
                                    size="small" 
                                    sx={{ 
                                      backgroundColor: `${domainColors[currentQuestionData.domain]}20`,
                                      color: domainColors[currentQuestionData.domain],
                                      fontSize: '0.75rem'
                                    }}
                                  />
                                )}
                              </Box>
                            )}
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
              {currentQuestion === 0 ? 'Back to Communication' : 'Previous'}
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
                disabled={!isResponseValid()}
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
                {currentQuestion === questions.length - 1 ? 'Continue to Learning Plan' : 'Next Question'}
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
              <strong>Domains:</strong> Timeline, Family, Living, Career, Growth, Social, Lifestyle, Support, Vision
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 1))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RelationshipGoalsExpectations;

