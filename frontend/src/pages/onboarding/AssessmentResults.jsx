/**
 * Screen 125: Comprehensive Assessment Results Dashboard
 * Displays insights from Big Five, Attachment Style, and Communication assessments
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
  Grid,
  Chip,
  Alert,
  Tabs,
  Tab,
  Paper,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  ArrowForward,
  Psychology,
  Favorite,
  Chat,
  ExpandMore,
  Share,
  Download,
  Insights,
  TrendingUp,
  Warning,
  CheckCircle,
  Star,
  Groups,
  EmojiObjects,
  School
} from '@mui/icons-material';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [assessmentData, setAssessmentData] = useState(null);
  const [personalityProfile, setPersonalityProfile] = useState(null);
  const [attachmentProfile, setAttachmentProfile] = useState(null);
  const [communicationProfile, setCommunicationProfile] = useState(null);

  useEffect(() => {
    // Load assessment responses from localStorage
    const responses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
    setAssessmentData(responses);
    
    // Process Big Five results
    if (responses.bigFive) {
      setPersonalityProfile(processBigFiveResults(responses.bigFive));
    }
    
    // Process Attachment results
    if (responses.attachment) {
      setAttachmentProfile(processAttachmentResults(responses.attachment));
    }
    
    // Process Communication results
    if (responses.communication) {
      setCommunicationProfile(processCommunicationResults(responses.communication));
    }
  }, []);

  const processBigFiveResults = (responses) => {
    // Calculate trait scores (simplified scoring algorithm)
    const traits = {
      openness: { score: 0, count: 0 },
      conscientiousness: { score: 0, count: 0 },
      extraversion: { score: 0, count: 0 },
      agreeableness: { score: 0, count: 0 },
      neuroticism: { score: 0, count: 0 }
    };

    // Map question IDs to traits (simplified mapping)
    Object.entries(responses).forEach(([questionId, score]) => {
      if (questionId.includes('O')) traits.openness.score += score, traits.openness.count++;
      else if (questionId.includes('C')) traits.conscientiousness.score += score, traits.conscientiousness.count++;
      else if (questionId.includes('E')) traits.extraversion.score += score, traits.extraversion.count++;
      else if (questionId.includes('A')) traits.agreeableness.score += score, traits.agreeableness.count++;
      else if (questionId.includes('N')) traits.neuroticism.score += score, traits.neuroticism.count++;
    });

    // Calculate percentages
    const profile = Object.entries(traits).map(([trait, data]) => ({
      trait: trait.charAt(0).toUpperCase() + trait.slice(1),
      score: data.count > 0 ? Math.round((data.score / data.count / 5) * 100) : 50,
      description: getTraitDescription(trait)
    }));

    return profile;
  };

  const processAttachmentResults = (responses) => {
    const styles = {
      secure: 0,
      anxious: 0,
      avoidant: 0,
      disorganized: 0
    };

    Object.entries(responses).forEach(([questionId, score]) => {
      if (questionId.startsWith('SEC')) styles.secure += score;
      else if (questionId.startsWith('ANX')) styles.anxious += score;
      else if (questionId.startsWith('AVO')) styles.avoidant += score;
      else if (questionId.startsWith('DIS')) styles.disorganized += score;
    });

    const total = Object.values(styles).reduce((sum, score) => sum + score, 0);
    const primaryStyle = Object.entries(styles).reduce((max, [style, score]) => 
      score > max.score ? { style, score } : max, { style: 'secure', score: 0 });

    return {
      primary: primaryStyle.style,
      scores: Object.entries(styles).map(([style, score]) => ({
        style: style.charAt(0).toUpperCase() + style.slice(1),
        percentage: Math.round((score / total) * 100),
        description: getAttachmentDescription(style)
      }))
    };
  };

  const processCommunicationResults = (responses) => {
    const styles = {
      constructive: 0,
      demandWithdraw: 0,
      avoidance: 0
    };

    Object.entries(responses).forEach(([questionId, score]) => {
      if (questionId.startsWith('CON')) styles.constructive += score;
      else if (questionId.startsWith('DW')) styles.demandWithdraw += score;
      else if (questionId.startsWith('AVD')) styles.avoidance += score;
    });

    const total = Object.values(styles).reduce((sum, score) => sum + score, 0);
    
    return Object.entries(styles).map(([style, score]) => ({
      style: style === 'demandWithdraw' ? 'Demand-Withdraw' : 
             style.charAt(0).toUpperCase() + style.slice(1),
      percentage: Math.round((score / total) * 100),
      description: getCommunicationDescription(style)
    }));
  };

  const getTraitDescription = (trait) => {
    const descriptions = {
      openness: 'Intellectual curiosity, creativity, and openness to new experiences',
      conscientiousness: 'Self-discipline, organization, and goal-directed behavior',
      extraversion: 'Sociability, assertiveness, and positive emotionality',
      agreeableness: 'Cooperation, trust, empathy, and altruism',
      neuroticism: 'Tendency toward negative emotions and emotional instability'
    };
    return descriptions[trait] || '';
  };

  const getAttachmentDescription = (style) => {
    const descriptions = {
      secure: 'Comfortable with intimacy and autonomy, positive view of self and others',
      anxious: 'Seeks closeness but fears abandonment, needs reassurance in relationships',
      avoidant: 'Values independence, uncomfortable with too much emotional closeness',
      disorganized: 'Conflicted about relationships, wants closeness but fears getting hurt'
    };
    return descriptions[style] || '';
  };

  const getCommunicationDescription = (style) => {
    const descriptions = {
      constructive: 'Healthy communication with empathy, problem-solving, and validation',
      demandWithdraw: 'One partner pursues discussion while the other withdraws',
      avoidance: 'Tendency to avoid conflict and difficult conversations'
    };
    return descriptions[style] || '';
  };

  const getCompatibilityInsights = () => {
    if (!personalityProfile || !attachmentProfile || !communicationProfile) return [];

    const insights = [];

    // High conscientiousness + secure attachment
    const conscientiousness = personalityProfile.find(p => p.trait === 'Conscientiousness')?.score || 0;
    if (conscientiousness > 70 && attachmentProfile.primary === 'secure') {
      insights.push({
        type: 'strength',
        title: 'Relationship Stability Strength',
        description: 'Your high conscientiousness combined with secure attachment predicts strong relationship stability and commitment.',
        icon: <CheckCircle sx={{ color: '#10B981' }} />
      });
    }

    // High neuroticism warning
    const neuroticism = personalityProfile.find(p => p.trait === 'Neuroticism')?.score || 0;
    if (neuroticism > 70) {
      insights.push({
        type: 'growth',
        title: 'Emotional Regulation Growth Area',
        description: 'Higher emotional sensitivity may benefit from stress management and communication strategies.',
        icon: <EmojiObjects sx={{ color: '#F59E0B' }} />
      });
    }

    // Constructive communication strength
    const constructive = communicationProfile.find(c => c.style === 'Constructive')?.percentage || 0;
    if (constructive > 60) {
      insights.push({
        type: 'strength',
        title: 'Communication Excellence',
        description: 'Your constructive communication style is a major asset for relationship success.',
        icon: <Star sx={{ color: '#10B981' }} />
      });
    }

    return insights;
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleContinue = () => {
    navigate('/onboarding/values-assessment');
  };

  if (!assessmentData) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning">
          No assessment data found. Please complete the assessments first.
        </Alert>
      </Container>
    );
  }

  const compatibilityInsights = getCompatibilityInsights();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Your Relationship Profile
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive insights from your personality, attachment, and communication assessments
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <Chip 
            icon={<Psychology />} 
            label="Big Five Complete" 
            color="success" 
            variant="outlined" 
          />
          <Chip 
            icon={<Favorite />} 
            label="Attachment Complete" 
            color="success" 
            variant="outlined" 
          />
          <Chip 
            icon={<Chat />} 
            label="Communication Complete" 
            color="success" 
            variant="outlined" 
          />
        </Box>
      </Box>

      {/* Key Insights Alert */}
      {compatibilityInsights.length > 0 && (
        <Alert 
          severity="info" 
          sx={{ mb: 4 }}
          icon={<Insights />}
        >
          <Typography variant="body1" fontWeight="semibold" gutterBottom>
            Key Relationship Insights
          </Typography>
          {compatibilityInsights.slice(0, 2).map((insight, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              {insight.icon}
              <Typography variant="body2">
                <strong>{insight.title}:</strong> {insight.description}
              </Typography>
            </Box>
          ))}
        </Alert>
      )}

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab 
            icon={<Psychology />} 
            label="Personality Profile" 
            iconPosition="start"
          />
          <Tab 
            icon={<Favorite />} 
            label="Attachment Style" 
            iconPosition="start"
          />
          <Tab 
            icon={<Chat />} 
            label="Communication Style" 
            iconPosition="start"
          />
          <Tab 
            icon={<TrendingUp />} 
            label="Compatibility Insights" 
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {activeTab === 0 && personalityProfile && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB', height: '400px' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Big Five Personality Traits
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={personalityProfile}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="trait" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#8B5CF6"
                      fill="#8B5CF6"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB', height: '400px', overflow: 'auto' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Trait Breakdown
                </Typography>
                {personalityProfile.map((trait, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight="semibold">
                        {trait.trait}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {trait.score}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={trait.score} 
                      sx={{ mb: 1, height: 8, borderRadius: 4 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {trait.description}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 1 && attachmentProfile && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Primary Attachment Style
                </Typography>
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                    {attachmentProfile.primary.charAt(0).toUpperCase() + attachmentProfile.primary.slice(1)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {getAttachmentDescription(attachmentProfile.primary)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Attachment Style Distribution
                </Typography>
                {attachmentProfile.scores.map((style, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight="semibold">
                        {style.style}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {style.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={style.percentage} 
                      sx={{ mb: 1, height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 2 && communicationProfile && (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Communication Style Profile
                </Typography>
                <Grid container spacing={3}>
                  {communicationProfile.map((style, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Paper elevation={0} sx={{ p: 3, border: '1px solid #E5E7EB', textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                          {style.percentage}%
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {style.style}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {style.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 3 && (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card elevation={0} sx={{ border: '1px solid #E5E7EB' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Relationship Compatibility Insights
                </Typography>
                {compatibilityInsights.map((insight, index) => (
                  <Accordion key={index} elevation={0} sx={{ border: '1px solid #E5E7EB', mb: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {insight.icon}
                        <Typography variant="body1" fontWeight="semibold">
                          {insight.title}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        {insight.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
                
                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    <strong>Next Steps:</strong> Continue with specialized assessments to get even deeper insights 
                    into your values, emotional intelligence, and relationship preferences.
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<Share />}
          sx={{ borderColor: '#E5E7EB' }}
        >
          Share Results
        </Button>
        <Button
          variant="outlined"
          startIcon={<Download />}
          sx={{ borderColor: '#E5E7EB' }}
        >
          Download Report
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          onClick={handleContinue}
          size="large"
          sx={{ px: 4 }}
        >
          Continue to Values Assessment
        </Button>
      </Box>

      {/* Assessment Summary */}
      <Box sx={{ 
        mt: 6, 
        p: 4, 
        backgroundColor: '#F9FAFB',
        borderRadius: 3,
        border: '1px solid #E5E7EB',
        textAlign: 'center'
      }}>
        <Typography variant="h6" gutterBottom>
          Assessment Summary
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You've completed the core relationship assessments. These results form the foundation 
          of your compatibility analysis and will be used to find your ideal matches.
          <br /><br />
          <strong>Next:</strong> Complete specialized assessments for even deeper insights into your 
          values, emotional intelligence, and relationship preferences.
        </Typography>
      </Box>
    </Container>
  );
};

export default AssessmentResults;

