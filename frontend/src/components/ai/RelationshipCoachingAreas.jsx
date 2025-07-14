import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip, 
  Box, 
  Button, 
  LinearProgress, 
  Alert,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  TextField,
  Switch
} from '@mui/material';
import {
  Psychology,
  Favorite,
  Groups,
  Communication,
  EmojiEmotions,
  Warning,
  School,
  TrendingUp,
  ExpandMore,
  Check,
  Star,
  PlayArrow
} from '@mui/icons-material';

const RelationshipCoachingAreas = ({ onNext, onBack }) => {
  const [selectedAreas, setSelectedAreas] = useState(new Set());
  const [priorities, setPriorities] = useState({});
  const [customAreas, setCustomAreas] = useState('');
  const [intensity, setIntensity] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Comprehensive coaching areas organized by expert types
  const coachingCategories = [
    {
      category: "Relationship Dynamics",
      icon: <Favorite />,
      color: "#e91e63",
      expert: "Relationship Counselor",
      description: "Core relationship skills and dynamics",
      areas: [
        {
          id: "communication_fundamentals",
          title: "Communication Fundamentals",
          description: "Master healthy communication patterns and active listening",
          importance: "critical",
          timeEstimate: "2-4 weeks",
          techniques: ["Active listening", "Non-violent communication", "Conflict de-escalation"]
        },
        {
          id: "conflict_resolution",
          title: "Conflict Resolution",
          description: "Learn to navigate disagreements constructively",
          importance: "high",
          timeEstimate: "3-6 weeks",
          techniques: ["Fair fighting rules", "Compromise strategies", "Emotional regulation"]
        },
        {
          id: "intimacy_building",
          title: "Intimacy & Connection",
          description: "Deepen emotional and physical intimacy",
          importance: "high",
          timeEstimate: "4-8 weeks",
          techniques: ["Emotional vulnerability", "Physical affection", "Quality time practices"]
        },
        {
          id: "trust_rebuilding",
          title: "Trust & Security",
          description: "Build and maintain trust in relationships",
          importance: "critical",
          timeEstimate: "6-12 weeks",
          techniques: ["Transparency practices", "Consistency building", "Forgiveness work"]
        },
        {
          id: "attachment_healing",
          title: "Attachment Style Work",
          description: "Understand and heal attachment patterns",
          importance: "medium",
          timeEstimate: "8-16 weeks",
          techniques: ["Attachment awareness", "Triggered response management", "Secure bonding"]
        }
      ]
    },
    {
      category: "Dating & Courtship",
      icon: <Star />,
      color: "#ff9800",
      expert: "Dating Coach",
      description: "Modern dating skills and relationship initiation",
      areas: [
        {
          id: "dating_confidence",
          title: "Dating Confidence",
          description: "Build authentic confidence in dating situations",
          importance: "high",
          timeEstimate: "2-6 weeks",
          techniques: ["Self-worth building", "Social anxiety management", "Authentic self-expression"]
        },
        {
          id: "online_dating_mastery",
          title: "Online Dating Optimization",
          description: "Master dating apps and online connections",
          importance: "medium",
          timeEstimate: "1-3 weeks",
          techniques: ["Profile optimization", "Conversation starters", "Transition to real life"]
        },
        {
          id: "first_date_skills",
          title: "First Date Success",
          description: "Navigate early dating with confidence",
          importance: "medium",
          timeEstimate: "2-4 weeks",
          techniques: ["Date planning", "Conversation flow", "Chemistry assessment"]
        },
        {
          id: "relationship_readiness",
          title: "Relationship Readiness",
          description: "Prepare for healthy long-term relationships",
          importance: "high",
          timeEstimate: "4-8 weeks",
          techniques: ["Emotional availability", "Baggage processing", "Goal alignment"]
        },
        {
          id: "rejection_resilience",
          title: "Rejection & Resilience",
          description: "Handle rejection and setbacks gracefully",
          importance: "medium",
          timeEstimate: "3-6 weeks",
          techniques: ["Resilience building", "Perspective shifting", "Self-compassion"]
        }
      ]
    },
    {
      category: "Personal Growth",
      icon: <TrendingUp />,
      color: "#4caf50",
      expert: "Personal Development Coach",
      description: "Individual growth within relationships",
      areas: [
        {
          id: "emotional_intelligence",
          title: "Emotional Intelligence",
          description: "Develop awareness and management of emotions",
          importance: "critical",
          timeEstimate: "6-12 weeks",
          techniques: ["Emotion recognition", "Emotional regulation", "Empathy development"]
        },
        {
          id: "boundaries_setting",
          title: "Healthy Boundaries",
          description: "Learn to set and maintain healthy boundaries",
          importance: "high",
          timeEstimate: "4-8 weeks",
          techniques: ["Boundary identification", "Assertive communication", "Boundary enforcement"]
        },
        {
          id: "self_worth_building",
          title: "Self-Worth & Confidence",
          description: "Build genuine self-esteem and confidence",
          importance: "critical",
          timeEstimate: "8-16 weeks",
          techniques: ["Self-compassion", "Achievement recognition", "Inner critic work"]
        },
        {
          id: "anxiety_management",
          title: "Anxiety & Stress Management",
          description: "Manage relationship anxiety and stress",
          importance: "high",
          timeEstimate: "6-12 weeks",
          techniques: ["Mindfulness practices", "Coping strategies", "Stress reduction"]
        },
        {
          id: "codependency_healing",
          title: "Codependency Recovery",
          description: "Heal unhealthy relationship patterns",
          importance: "medium",
          timeEstimate: "12-24 weeks",
          techniques: ["Independence building", "People-pleasing recovery", "Healthy interdependence"]
        }
      ]
    },
    {
      category: "Crisis & Trauma",
      icon: <Warning />,
      color: "#f44336",
      expert: "Crisis Intervention Specialist",
      description: "Healing from relationship trauma and crisis",
      areas: [
        {
          id: "breakup_recovery",
          title: "Breakup & Divorce Recovery",
          description: "Heal from relationship endings",
          importance: "high",
          timeEstimate: "8-16 weeks",
          techniques: ["Grief processing", "Identity rebuilding", "Future visioning"]
        },
        {
          id: "betrayal_trauma",
          title: "Betrayal & Infidelity",
          description: "Process and heal from betrayal",
          importance: "critical",
          timeEstimate: "12-24 weeks",
          techniques: ["Trauma processing", "Trust rebuilding", "Decision making"]
        },
        {
          id: "domestic_violence_recovery",
          title: "Abuse Recovery",
          description: "Heal from domestic violence and abuse",
          importance: "critical",
          timeEstimate: "16-52 weeks",
          techniques: ["Safety planning", "Trauma therapy", "Empowerment building"]
        },
        {
          id: "addiction_impact",
          title: "Addiction Impact on Relationships",
          description: "Address addiction's effect on relationships",
          importance: "high",
          timeEstimate: "12-52 weeks",
          techniques: ["Enabling patterns", "Recovery support", "Boundary setting"]
        }
      ]
    },
    {
      category: "Communication Mastery",
      icon: <Communication />,
      color: "#2196f3",
      expert: "Communication Expert",
      description: "Advanced communication and social skills",
      areas: [
        {
          id: "difficult_conversations",
          title: "Difficult Conversations",
          description: "Navigate challenging discussions with grace",
          importance: "high",
          timeEstimate: "3-6 weeks",
          techniques: ["Conversation preparation", "Emotional regulation", "Solution finding"]
        },
        {
          id: "nonverbal_communication",
          title: "Nonverbal Communication",
          description: "Master body language and nonverbal cues",
          importance: "medium",
          timeEstimate: "2-4 weeks",
          techniques: ["Body language reading", "Presence improvement", "Energy management"]
        },
        {
          id: "love_languages",
          title: "Love Languages Mastery",
          description: "Understand and apply love languages effectively",
          importance: "medium",
          timeEstimate: "2-4 weeks",
          techniques: ["Language identification", "Expression practice", "Receiving appreciation"]
        },
        {
          id: "cultural_communication",
          title: "Cross-Cultural Communication",
          description: "Navigate cultural differences in relationships",
          importance: "medium",
          timeEstimate: "4-8 weeks",
          techniques: ["Cultural awareness", "Bias recognition", "Inclusive communication"]
        }
      ]
    },
    {
      category: "Long-term Success",
      icon: <School />,
      color: "#9c27b0",
      expert: "Relationship Strategist",
      description: "Building lasting, fulfilling relationships",
      areas: [
        {
          id: "relationship_vision",
          title: "Relationship Vision & Goals",
          description: "Create a clear vision for your relationship future",
          importance: "high",
          timeEstimate: "2-4 weeks",
          techniques: ["Vision boarding", "Goal setting", "Values alignment"]
        },
        {
          id: "maintenance_rituals",
          title: "Relationship Maintenance",
          description: "Develop habits that sustain healthy relationships",
          importance: "medium",
          timeEstimate: "4-8 weeks",
          techniques: ["Daily rituals", "Check-in practices", "Appreciation habits"]
        },
        {
          id: "growth_together",
          title: "Growing Together",
          description: "Evolve individually while staying connected",
          importance: "medium",
          timeEstimate: "Ongoing",
          techniques: ["Shared goals", "Individual support", "Change navigation"]
        }
      ]
    }
  ];

  const stepTitles = [
    "Select Focus Areas",
    "Set Priorities",
    "Customize Intensity",
    "Add Personal Areas",
    "Review & Confirm"
  ];

  const handleAreaToggle = (areaId) => {
    const newSelected = new Set(selectedAreas);
    if (newSelected.has(areaId)) {
      newSelected.delete(areaId);
      const newPriorities = { ...priorities };
      delete newPriorities[areaId];
      setPriorities(newPriorities);
      const newIntensity = { ...intensity };
      delete newIntensity[areaId];
      setIntensity(newIntensity);
    } else {
      newSelected.add(areaId);
      setPriorities({ ...priorities, [areaId]: 3 });
      setIntensity({ ...intensity, [areaId]: 3 });
    }
    setSelectedAreas(newSelected);
  };

  const handlePriorityChange = (areaId, value) => {
    setPriorities({ ...priorities, [areaId]: value });
  };

  const handleIntensityChange = (areaId, value) => {
    setIntensity({ ...intensity, [areaId]: value });
  };

  const getIntensityLabel = (value) => {
    switch (value) {
      case 1: return "Light Guidance";
      case 2: return "Regular Check-ins";
      case 3: return "Active Coaching";
      case 4: return "Intensive Support";
      case 5: return "Crisis Support";
      default: return "Active Coaching";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1: return "#4caf50";
      case 2: return "#8bc34a";
      case 3: return "#ff9800";
      case 4: return "#f44336";
      case 5: return "#d32f2f";
      default: return "#ff9800";
    }
  };

  const analyzeCoachingNeeds = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis of selected areas
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // This would use our advanced AI system to analyze patterns
    const analysisData = {
      selectedAreas: Array.from(selectedAreas),
      priorities,
      intensity,
      customAreas,
      aiRecommendations: [
        "Based on your selections, I recommend starting with communication fundamentals",
        "Your high priority on emotional intelligence suggests deep personal growth work",
        "Consider addressing anxiety management alongside relationship work"
      ],
      estimatedTimeline: "12-16 weeks for comprehensive coverage",
      expertAssignment: "Primary: Relationship Counselor, Secondary: Dating Coach"
    };
    
    setIsAnalyzing(false);
    return analysisData;
  };

  const handleNext = async () => {
    if (currentStep < stepTitles.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const analysis = await analyzeCoachingNeeds();
      onNext({
        coachingAreas: {
          selected: Array.from(selectedAreas),
          priorities,
          intensity,
          customAreas,
          analysis
        }
      });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderAreaSelection();
      case 1:
        return renderPrioritySettings();
      case 2:
        return renderIntensitySettings();
      case 3:
        return renderCustomAreas();
      case 4:
        return renderReviewAndConfirm();
      default:
        return renderAreaSelection();
    }
  };

  const renderAreaSelection = () => (
    <Grid container spacing={3}>
      {coachingCategories.map((category) => (
        <Grid item xs={12} key={category.category}>
          <Card elevation={2}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Box color={category.color} mr={1}>
                  {category.icon}
                </Box>
                <Typography variant="h6" color={category.color}>
                  {category.category}
                </Typography>
                <Chip 
                  label={category.expert} 
                  size="small" 
                  sx={{ ml: 2 }}
                  color="primary"
                />
              </Box>
              <Typography variant="body2" color="textSecondary" mb={2}>
                {category.description}
              </Typography>
              
              <Grid container spacing={2}>
                {category.areas.map((area) => (
                  <Grid item xs={12} md={6} key={area.id}>
                    <Card 
                      variant="outlined" 
                      sx={{ 
                        cursor: 'pointer',
                        border: selectedAreas.has(area.id) ? `2px solid ${category.color}` : undefined,
                        '&:hover': { bgcolor: 'grey.50' }
                      }}
                      onClick={() => handleAreaToggle(area.id)}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                          <Box flex={1}>
                            <Typography variant="subtitle2" gutterBottom>
                              {area.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mb={1}>
                              {area.description}
                            </Typography>
                            <Box display="flex" gap={1} mb={1} flexWrap="wrap">
                              <Chip 
                                label={area.importance} 
                                size="small"
                                color={area.importance === 'critical' ? 'error' : area.importance === 'high' ? 'warning' : 'default'}
                              />
                              <Chip 
                                label={area.timeEstimate} 
                                size="small"
                                variant="outlined"
                              />
                            </Box>
                            <Box>
                              <Typography variant="caption" color="textSecondary">
                                Techniques: {area.techniques.join(', ')}
                              </Typography>
                            </Box>
                          </Box>
                          <Checkbox 
                            checked={selectedAreas.has(area.id)}
                            color="primary"
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderPrioritySettings = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Set Your Priorities
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Rate the importance of each selected area (1=Low Priority, 5=Urgent)
      </Typography>
      
      <Grid container spacing={3}>
        {Array.from(selectedAreas).map((areaId) => {
          const area = coachingCategories
            .flatMap(cat => cat.areas)
            .find(a => a.id === areaId);
          
          return (
            <Grid item xs={12} md={6} key={areaId}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {area?.title}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="body2">Priority:</Typography>
                    <Rating
                      value={priorities[areaId] || 3}
                      onChange={(_, value) => handlePriorityChange(areaId, value)}
                      max={5}
                      sx={{ color: getPriorityColor(priorities[areaId] || 3) }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {priorities[areaId] === 1 && "Low"}
                      {priorities[areaId] === 2 && "Medium-Low"}
                      {priorities[areaId] === 3 && "Medium"}
                      {priorities[areaId] === 4 && "High"}
                      {priorities[areaId] === 5 && "Urgent"}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderIntensitySettings = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Customize Coaching Intensity
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Choose how intensively you want to work on each area
      </Typography>
      
      <Grid container spacing={3}>
        {Array.from(selectedAreas).map((areaId) => {
          const area = coachingCategories
            .flatMap(cat => cat.areas)
            .find(a => a.id === areaId);
          
          return (
            <Grid item xs={12} key={areaId}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {area?.title}
                  </Typography>
                  <Box mb={2}>
                    <Typography variant="body2" gutterBottom>
                      Intensity: {getIntensityLabel(intensity[areaId] || 3)}
                    </Typography>
                    <Box sx={{ width: '100%', mt: 1 }}>
                      <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography variant="caption">Light</Typography>
                        <Typography variant="caption">Crisis</Typography>
                      </Box>
                      <Box sx={{ px: 2 }}>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={intensity[areaId] || 3}
                          onChange={(e) => handleIntensityChange(areaId, parseInt(e.target.value))}
                          style={{ width: '100%' }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {intensity[areaId] === 1 && "Occasional tips and insights"}
                    {intensity[areaId] === 2 && "Weekly check-ins and guidance"}
                    {intensity[areaId] === 3 && "Regular coaching sessions and exercises"}
                    {intensity[areaId] === 4 && "Daily support and intensive work"}
                    {intensity[areaId] === 5 && "Crisis-level support and immediate intervention"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderCustomAreas = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Personal Areas
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Is there anything specific you'd like to work on that wasn't covered?
      </Typography>
      
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Custom coaching areas or specific challenges"
        placeholder="Describe any specific situations, patterns, or goals you'd like help with..."
        value={customAreas}
        onChange={(e) => setCustomAreas(e.target.value)}
        variant="outlined"
      />
      
      <Box mt={3}>
        <Alert severity="info">
          <Typography variant="body2">
            <strong>AI Analysis:</strong> Our advanced AI will analyze your custom areas and integrate them 
            with your selected coaching focus areas to create a personalized plan.
          </Typography>
        </Alert>
      </Box>
    </Box>
  );

  const renderReviewAndConfirm = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review Your Coaching Plan
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Selected Areas ({selectedAreas.size})
              </Typography>
              
              {Array.from(selectedAreas).map((areaId) => {
                const area = coachingCategories
                  .flatMap(cat => cat.areas)
                  .find(a => a.id === areaId);
                const category = coachingCategories
                  .find(cat => cat.areas.some(a => a.id === areaId));
                
                return (
                  <Box key={areaId} mb={2} p={2} bgcolor="grey.50" borderRadius={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Typography variant="subtitle2">
                          {area?.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {category?.category} • {area?.timeEstimate}
                        </Typography>
                      </Box>
                      <Box textAlign="right">
                        <Chip 
                          label={`Priority: ${priorities[areaId]}/5`}
                          size="small"
                          sx={{ bgcolor: getPriorityColor(priorities[areaId]), color: 'white' }}
                        />
                        <Typography variant="caption" display="block">
                          {getIntensityLabel(intensity[areaId])}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
              
              {customAreas && (
                <Box mt={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    Custom Areas:
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {customAreas}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Coaching Plan Summary
              </Typography>
              
              <Box mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Focus Areas: {selectedAreas.size}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Avg Priority: {(Object.values(priorities).reduce((a, b) => a + b, 0) / Object.values(priorities).length || 0).toFixed(1)}/5
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Avg Intensity: {getIntensityLabel(Math.round(Object.values(intensity).reduce((a, b) => a + b, 0) / Object.values(intensity).length || 3))}
                </Typography>
              </Box>
              
              <Alert severity="success" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  Your personalized AI coaching plan is ready!
                </Typography>
              </Alert>
              
              <Typography variant="body2" color="textSecondary">
                Our advanced AI will create a customized coaching experience based on your selections.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            <Psychology color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Relationship Coaching Areas
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Powered by Advanced AI • Mixture of Experts
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Choose the areas where you'd like personalized AI coaching and support
          </Typography>
          
          {/* Progress */}
          <Box maxWidth={600} mx="auto" mb={3}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="caption">Step {currentStep + 1} of {stepTitles.length}</Typography>
              <Typography variant="caption">{Math.round(((currentStep + 1) / stepTitles.length) * 100)}% Complete</Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={((currentStep + 1) / stepTitles.length) * 100} 
              sx={{ height: 8, borderRadius: 4 }}
            />
            <Typography variant="h6" mt={2}>
              {stepTitles[currentStep]}
            </Typography>
          </Box>
        </Box>

        {/* Step Content */}
        <Box mb={4}>
          {isAnalyzing ? (
            <Box textAlign="center" py={8}>
              <Box mb={3}>
                <Psychology sx={{ fontSize: 60, color: 'primary.main', animation: 'pulse 2s infinite' }} />
              </Box>
              <Typography variant="h6" gutterBottom>
                AI Analyzing Your Coaching Needs...
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={3}>
                Our advanced AI system is creating your personalized coaching plan
              </Typography>
              <LinearProgress sx={{ maxWidth: 400, mx: 'auto' }} />
            </Box>
          ) : (
            renderStepContent()
          )}
        </Box>

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={currentStep === 0 ? onBack : () => setCurrentStep(currentStep - 1)}
            disabled={isAnalyzing}
          >
            {currentStep === 0 ? 'Back' : 'Previous'}
          </Button>
          
          <Box display="flex" gap={2}>
            <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
              {selectedAreas.size} areas selected
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={selectedAreas.size === 0 || isAnalyzing}
              endIcon={currentStep === stepTitles.length - 1 ? <PlayArrow /> : undefined}
            >
              {currentStep === stepTitles.length - 1 ? 'Start AI Coaching' : 'Next'}
            </Button>
          </Box>
        </Box>

        {/* Help Text */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Our AI will adapt and personalize based on your progress and feedback
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RelationshipCoachingAreas;