import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Button, 
  LinearProgress, 
  Alert,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Avatar
} from '@mui/material';
import {
  Assessment,
  Check,
  Close,
  Warning,
  Star,
  TrendingUp,
  Visibility,
  Favorite,
  Psychology,
  PhotoCamera,
  Edit,
  School,
  Work,
  LocationOn,
  Person,
  EmojiEmotions,
  SportsSoccer,
  MusicNote,
  Restaurant,
  Flight,
  ExpandMore,
  AutoFixHigh,
  Timeline,
  Analytics,
  Speed,
  ShowChart,
  Lightbulb,
  Shield,
  VerifiedUser
} from '@mui/icons-material';

const ProfileCompletenessScore = ({ userData, onNext, onBack }) => {
  const [overallScore, setOverallScore] = useState(0);
  const [sectionScores, setSectionScores] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [competitionData, setCompetitionData] = useState(null);
  const [improvements, setImprovements] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  const profileSections = [
    {
      id: 'photos',
      title: 'Photos',
      icon: <PhotoCamera />,
      weight: 30,
      maxScore: 100,
      description: 'Profile photos and visual presentation',
      criteria: [
        { name: 'Photo quantity', requirement: '3-6 photos', weight: 20 },
        { name: 'Photo quality', requirement: 'High resolution, well-lit', weight: 25 },
        { name: 'Primary photo', requirement: 'Clear face shot', weight: 30 },
        { name: 'Photo variety', requirement: 'Different settings/activities', weight: 15 },
        { name: 'AI optimization', requirement: 'Optimized for appeal', weight: 10 }
      ]
    },
    {
      id: 'bio',
      title: 'Bio & Description',
      icon: <Edit />,
      weight: 25,
      maxScore: 100,
      description: 'Profile bio and personality description',
      criteria: [
        { name: 'Bio length', requirement: '100-300 characters', weight: 20 },
        { name: 'Personality showcase', requirement: 'Clear personality traits', weight: 25 },
        { name: 'Interests mentioned', requirement: '2-4 specific interests', weight: 20 },
        { name: 'Conversation starter', requirement: 'Engaging ending', weight: 20 },
        { name: 'Authenticity', requirement: 'Genuine and unique', weight: 15 }
      ]
    },
    {
      id: 'basic_info',
      title: 'Basic Information',
      icon: <Person />,
      weight: 15,
      maxScore: 100,
      description: 'Essential profile information',
      criteria: [
        { name: 'Age', requirement: 'Accurate age', weight: 20 },
        { name: 'Location', requirement: 'Current city/area', weight: 20 },
        { name: 'Education', requirement: 'Education level', weight: 15 },
        { name: 'Occupation', requirement: 'Current job/career', weight: 20 },
        { name: 'Height', requirement: 'Physical attributes', weight: 10 },
        { name: 'Relationship goals', requirement: 'Clear intentions', weight: 15 }
      ]
    },
    {
      id: 'interests',
      title: 'Interests & Hobbies',
      icon: <EmojiEmotions />,
      weight: 12,
      maxScore: 100,
      description: 'Interests, hobbies, and activities',
      criteria: [
        { name: 'Hobby variety', requirement: '5+ different hobbies', weight: 30 },
        { name: 'Activity level', requirement: 'Mix of active/relaxed', weight: 25 },
        { name: 'Social activities', requirement: 'Group activities mentioned', weight: 20 },
        { name: 'Unique interests', requirement: 'Distinctive hobbies', weight: 25 }
      ]
    },
    {
      id: 'preferences',
      title: 'Matching Preferences',
      icon: <Favorite />,
      weight: 10,
      maxScore: 100,
      description: 'Partner preferences and deal-breakers',
      criteria: [
        { name: 'Age range', requirement: 'Reasonable age range', weight: 20 },
        { name: 'Distance', requirement: 'Location preferences', weight: 15 },
        { name: 'Lifestyle match', requirement: 'Compatible lifestyle', weight: 30 },
        { name: 'Values alignment', requirement: 'Core values match', weight: 35 }
      ]
    },
    {
      id: 'verification',
      title: 'Verification & Trust',
      icon: <VerifiedUser />,
      weight: 8,
      maxScore: 100,
      description: 'Profile verification and trust signals',
      criteria: [
        { name: 'Photo verification', requirement: 'Verified photos', weight: 40 },
        { name: 'Phone verification', requirement: 'Verified phone number', weight: 30 },
        { name: 'Social media', requirement: 'Connected accounts', weight: 20 },
        { name: 'ID verification', requirement: 'Identity verified', weight: 10 }
      ]
    }
  ];

  useEffect(() => {
    analyzeProfile();
  }, [userData]);

  const analyzeProfile = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const scores = calculateSectionScores();
    const overall = calculateOverallScore(scores);
    const recs = generateRecommendations(scores);
    const competition = generateCompetitionData(overall);
    const improvements = generateImprovements(scores);
    
    setSectionScores(scores);
    setOverallScore(overall);
    setRecommendations(recs);
    setCompetitionData(competition);
    setImprovements(improvements);
    setIsAnalyzing(false);
  };

  const calculateSectionScores = () => {
    const scores = {};
    
    profileSections.forEach(section => {
      let sectionScore = 0;
      const criteriaScores = {};
      
      section.criteria.forEach(criterion => {
        const score = calculateCriterionScore(section.id, criterion.name);
        criteriaScores[criterion.name] = score;
        sectionScore += score * (criterion.weight / 100);
      });
      
      scores[section.id] = {
        overall: Math.round(sectionScore),
        criteria: criteriaScores
      };
    });
    
    return scores;
  };

  const calculateCriterionScore = (sectionId, criterionName) => {
    // Simulate scoring based on user data
    const data = userData || {};
    
    switch (sectionId) {
      case 'photos':
        if (criterionName === 'Photo quantity') {
          const photoCount = data.profilePhotos?.photos?.length || 0;
          if (photoCount >= 3) return 100;
          if (photoCount >= 2) return 70;
          if (photoCount >= 1) return 40;
          return 0;
        }
        if (criterionName === 'Photo quality') {
          const avgScore = data.profilePhotos?.photos?.reduce((sum, photo) => sum + photo.score, 0) / (data.profilePhotos?.photos?.length || 1) || 0;
          return Math.round(avgScore);
        }
        return Math.round(Math.random() * 40 + 60); // 60-100
        
      case 'bio':
        if (criterionName === 'Bio length') {
          const bioLength = data.profileBio?.bio?.length || 0;
          if (bioLength >= 100 && bioLength <= 300) return 100;
          if (bioLength >= 50 && bioLength <= 400) return 80;
          if (bioLength > 0) return 60;
          return 0;
        }
        if (criterionName === 'Personality showcase') {
          return data.profileBio?.analysis?.metrics?.personality || Math.round(Math.random() * 30 + 70);
        }
        return Math.round(Math.random() * 30 + 70); // 70-100
        
      case 'basic_info':
        return Math.round(Math.random() * 20 + 80); // 80-100
        
      case 'interests':
        const interestCount = data.interests?.length || Math.floor(Math.random() * 8 + 3);
        if (interestCount >= 5) return 100;
        if (interestCount >= 3) return 80;
        if (interestCount >= 1) return 60;
        return 0;
        
      case 'preferences':
        return Math.round(Math.random() * 25 + 75); // 75-100
        
      case 'verification':
        let score = 0;
        if (data.phoneVerified) score += 30;
        if (data.photoVerified) score += 40;
        if (data.socialConnected) score += 20;
        if (data.idVerified) score += 10;
        return score;
        
      default:
        return Math.round(Math.random() * 30 + 70);
    }
  };

  const calculateOverallScore = (scores) => {
    let weightedSum = 0;
    let totalWeight = 0;
    
    profileSections.forEach(section => {
      const sectionScore = scores[section.id]?.overall || 0;
      weightedSum += sectionScore * section.weight;
      totalWeight += section.weight;
    });
    
    return Math.round(weightedSum / totalWeight);
  };

  const generateRecommendations = (scores) => {
    const recs = [];
    
    profileSections.forEach(section => {
      const sectionScore = scores[section.id]?.overall || 0;
      
      if (sectionScore < 70) {
        recs.push({
          section: section.title,
          priority: sectionScore < 50 ? 'high' : 'medium',
          impact: section.weight,
          description: `Improve your ${section.title.toLowerCase()} to boost your profile score`,
          action: `Optimize ${section.title}`,
          expectedGain: Math.round((85 - sectionScore) * section.weight / 100)
        });
      }
    });
    
    return recs.sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (b.priority === 'high' && a.priority !== 'high') return 1;
      return b.impact - a.impact;
    });
  };

  const generateCompetitionData = (score) => {
    return {
      percentile: Math.min(Math.round((score / 100) * 95 + 5), 98),
      betterThan: Math.round((score / 100) * 90 + 10),
      averageScore: Math.round(Math.random() * 20 + 65),
      topPercentScore: Math.round(Math.random() * 10 + 90),
      estimatedMatches: Math.round(score * 1.5 + Math.random() * 30),
      estimatedViews: Math.round(score * 3 + Math.random() * 100)
    };
  };

  const generateImprovements = (scores) => {
    const improvements = [];
    
    Object.entries(scores).forEach(([sectionId, sectionData]) => {
      const section = profileSections.find(s => s.id === sectionId);
      
      Object.entries(sectionData.criteria).forEach(([criterionName, score]) => {
        if (score < 80) {
          const criterion = section.criteria.find(c => c.name === criterionName);
          improvements.push({
            section: section.title,
            criterion: criterionName,
            currentScore: score,
            requirement: criterion.requirement,
            impact: criterion.weight,
            difficulty: score < 50 ? 'easy' : 'medium',
            timeEstimate: score < 50 ? '5-10 minutes' : '2-5 minutes'
          });
        }
      });
    });
    
    return improvements.sort((a, b) => {
      if (a.difficulty === 'easy' && b.difficulty !== 'easy') return -1;
      if (b.difficulty === 'easy' && a.difficulty !== 'easy') return 1;
      return b.impact - a.impact;
    });
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    if (score >= 60) return 'info';
    return 'error';
  };

  const getScoreIcon = (score) => {
    if (score >= 90) return <Star color="success" />;
    if (score >= 75) return <TrendingUp color="warning" />;
    if (score >= 60) return <Assessment color="info" />;
    return <Warning color="error" />;
  };

  const toggleDetails = (sectionId) => {
    setShowDetails(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleNext = () => {
    const completenessData = {
      overallScore,
      sectionScores,
      recommendations,
      competitionData,
      improvements,
      analysis: {
        completedSections: Object.keys(sectionScores).filter(id => sectionScores[id].overall >= 80).length,
        totalSections: profileSections.length,
        topWeaknesses: recommendations.slice(0, 3),
        strengths: Object.keys(sectionScores).filter(id => sectionScores[id].overall >= 85)
      }
    };
    
    onNext({ profileCompleteness: completenessData });
  };

  if (isAnalyzing) {
    return (
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Box mb={4}>
            <Assessment sx={{ fontSize: 80, color: 'primary.main', animation: 'pulse 2s infinite' }} />
          </Box>
          <Typography variant="h4" gutterBottom>
            Analyzing Your Profile
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            AI-Powered Profile Analysis
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={4}>
            Our advanced AI is evaluating your profile across all dimensions...
          </Typography>
          <LinearProgress sx={{ maxWidth: 400, mx: 'auto' }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            <Assessment color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Profile Completeness Score
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Comprehensive Profile Analysis & Optimization
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            See how your profile performs and get personalized recommendations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Overall Score */}
          <Grid item xs={12} md={4}>
            <Card elevation={4}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Box position="relative" display="inline-flex" mb={3}>
                  <CircularProgress
                    variant="determinate"
                    value={overallScore}
                    size={120}
                    thickness={4}
                    color={getScoreColor(overallScore)}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h4" component="div" color="text.secondary">
                      {overallScore}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  Profile Score
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {overallScore >= 90 ? 'Excellent' : overallScore >= 75 ? 'Good' : overallScore >= 60 ? 'Fair' : 'Needs Improvement'}
                </Typography>
                
                <Chip
                  label={`${competitionData?.percentile || 0}th percentile`}
                  color="primary"
                  sx={{ mb: 2 }}
                />
                
                <Typography variant="body2" color="textSecondary">
                  Better than {competitionData?.betterThan || 0}% of profiles
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Competition Analysis */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <ShowChart sx={{ mr: 1 }} />
                  Competition Analysis
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="primary">
                        {competitionData?.estimatedMatches || 0}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Weekly Matches
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="success.main">
                        {competitionData?.estimatedViews || 0}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Profile Views
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="info.main">
                        {competitionData?.averageScore || 0}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Average Score
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="warning.main">
                        {competitionData?.topPercentScore || 0}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Top 10% Score
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: 3 }} />
                
                <Alert severity="info">
                  <Typography variant="body2">
                    <strong>Your competitive advantage:</strong> {overallScore >= 85 ? 'You\'re in the top tier!' : overallScore >= 70 ? 'You\'re above average with room to excel.' : 'Focus on key improvements to stand out.'}
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* Section Breakdown */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Analytics sx={{ mr: 1 }} />
                  Section Breakdown
                </Typography>
                
                <Grid container spacing={3}>
                  {profileSections.map((section) => {
                    const score = sectionScores[section.id]?.overall || 0;
                    
                    return (
                      <Grid item xs={12} md={6} key={section.id}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                              <Box display="flex" alignItems="center" gap={1}>
                                {section.icon}
                                <Typography variant="h6">{section.title}</Typography>
                              </Box>
                              <Box display="flex" alignItems="center" gap={1}>
                                {getScoreIcon(score)}
                                <Typography variant="h6">{score}/100</Typography>
                              </Box>
                            </Box>
                            
                            <LinearProgress
                              variant="determinate"
                              value={score}
                              color={getScoreColor(score)}
                              sx={{ height: 8, borderRadius: 4, mb: 2 }}
                            />
                            
                            <Typography variant="body2" color="textSecondary" mb={2}>
                              {section.description}
                            </Typography>
                            
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Chip
                                label={`${section.weight}% of total`}
                                size="small"
                                variant="outlined"
                              />
                              <Button
                                size="small"
                                onClick={() => toggleDetails(section.id)}
                                endIcon={<ExpandMore />}
                              >
                                Details
                              </Button>
                            </Box>
                            
                            {showDetails[section.id] && (
                              <Box mt={2}>
                                <Divider sx={{ mb: 2 }} />
                                <Typography variant="subtitle2" gutterBottom>
                                  Criteria Breakdown:
                                </Typography>
                                {section.criteria.map((criterion) => {
                                  const criterionScore = sectionScores[section.id]?.criteria[criterion.name] || 0;
                                  return (
                                    <Box key={criterion.name} mb={1}>
                                      <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body2">{criterion.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                          {criterionScore}%
                                        </Typography>
                                      </Box>
                                      <LinearProgress
                                        variant="determinate"
                                        value={criterionScore}
                                        size="small"
                                        sx={{ height: 4, borderRadius: 2 }}
                                      />
                                    </Box>
                                  );
                                })}
                              </Box>
                            )}
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Recommendations */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Lightbulb sx={{ mr: 1 }} />
                  Optimization Recommendations
                </Typography>
                
                {recommendations.length === 0 ? (
                  <Alert severity="success">
                    <Typography>Your profile is well-optimized! No major improvements needed.</Typography>
                  </Alert>
                ) : (
                  <List>
                    {recommendations.map((rec, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Badge
                            badgeContent={rec.priority === 'high' ? '!' : ''}
                            color="error"
                          >
                            <AutoFixHigh color={rec.priority === 'high' ? 'error' : 'warning'} />
                          </Badge>
                        </ListItemIcon>
                        <ListItemText
                          primary={rec.action}
                          secondary={
                            <Box>
                              <Typography variant="body2" color="textSecondary">
                                {rec.description}
                              </Typography>
                              <Chip
                                label={`+${rec.expectedGain} points`}
                                size="small"
                                color="success"
                                sx={{ mt: 1 }}
                              />
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Improvements */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Speed sx={{ mr: 1 }} />
                  Quick Wins
                </Typography>
                
                <Typography variant="body2" color="textSecondary" mb={2}>
                  Easy improvements you can make right now:
                </Typography>
                
                {improvements.slice(0, 5).map((improvement, index) => (
                  <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: 'grey.50' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                      <Typography variant="subtitle2">{improvement.criterion}</Typography>
                      <Chip
                        label={improvement.difficulty}
                        size="small"
                        color={improvement.difficulty === 'easy' ? 'success' : 'warning'}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary" mb={1}>
                      {improvement.requirement}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {improvement.timeEstimate}
                    </Typography>
                  </Paper>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back to Bio
          </Button>
          
          <Box display="flex" gap={2}>
            <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
              Score: {overallScore}/100
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              startIcon={<Check />}
            >
              Continue to Preview
            </Button>
          </Box>
        </Box>

        {/* Tips */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Pro tip: Profiles with 90+ scores get 5x more quality matches
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileCompletenessScore;