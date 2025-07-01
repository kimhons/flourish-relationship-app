import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Divider,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  TextField,
  Rating,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Block,
  CheckCircle,
  Warning,
  Info,
  ExpandMore,
  Star,
  Priority,
  Balance,
  Psychology,
  Favorite,
  Groups,
  Work,
  Home,
  School,
  FitnessCenter,
  LocalBar,
  Smoking,
  Child,
  Pets,
  AttachMoney,
  Flight,
  MusicNote,
  SportsEsports,
  Restaurant,
  Movie
} from '@mui/icons-material';

const CompatibilityCriteria = () => {
  const [criteria, setCriteria] = useState({
    // Core Values Deal-Breakers
    coreValuesDealBreakers: {
      religiousBeliefs: { isDealer: false, importance: 5 },
      politicalViews: { isDealer: false, importance: 4 },
      familyValues: { isDealer: false, importance: 7 },
      moralStandards: { isDealer: false, importance: 6 },
      lifePhilosophy: { isDealer: false, importance: 5 }
    },
    
    // Lifestyle Deal-Breakers
    lifestyleDealBreakers: {
      smoking: { isDealer: true, importance: 9 },
      drinking: { isDealer: false, importance: 6 },
      drugUse: { isDealer: true, importance: 10 },
      gambling: { isDealer: false, importance: 7 },
      fitnessLevel: { isDealer: false, importance: 5 },
      dietaryRestrictions: { isDealer: false, importance: 3 }
    },
    
    // Relationship Deal-Breakers
    relationshipDealBreakers: {
      wantsChildren: { isDealer: false, importance: 8 },
      marriageGoals: { isDealer: false, importance: 7 },
      monogamy: { isDealer: true, importance: 10 },
      livingTogether: { isDealer: false, importance: 6 },
      longDistance: { isDealer: false, importance: 5 },
      ageGap: { isDealer: false, importance: 4 }
    },
    
    // Career & Financial Deal-Breakers
    careerFinancialDealBreakers: {
      careerAmbition: { isDealer: false, importance: 5 },
      financialStability: { isDealer: false, importance: 7 },
      workLifeBalance: { isDealer: false, importance: 6 },
      travelForWork: { isDealer: false, importance: 4 },
      entrepreneurship: { isDealer: false, importance: 3 },
      retirementPlanning: { isDealer: false, importance: 5 }
    },
    
    // Social & Communication Deal-Breakers
    socialCommunicationDealBreakers: {
      socialSkills: { isDealer: false, importance: 6 },
      conflictResolution: { isDealer: false, importance: 8 },
      emotionalIntelligence: { isDealer: false, importance: 7 },
      communicationStyle: { isDealer: false, importance: 7 },
      socialCircle: { isDealer: false, importance: 4 },
      familyRelationships: { isDealer: false, importance: 6 }
    },
    
    // Personal Habits Deal-Breakers
    personalHabitsDealBreakers: {
      cleanliness: { isDealer: false, importance: 6 },
      punctuality: { isDealer: false, importance: 5 },
      honesty: { isDealer: true, importance: 10 },
      loyalty: { isDealer: true, importance: 10 },
      respectfulness: { isDealer: true, importance: 10 },
      personalGrowth: { isDealer: false, importance: 6 }
    },
    
    // Compatibility Preferences
    compatibilityPreferences: {
      personalityMatch: 8,
      valueAlignment: 9,
      lifestyleCompatibility: 7,
      communicationStyle: 8,
      physicalAttraction: 6,
      intellectualConnection: 7,
      emotionalConnection: 9,
      sharedInterests: 6,
      futureGoals: 8,
      familyCompatibility: 7
    },
    
    // Flexibility Settings
    flexibilitySettings: {
      dealBreakerFlexibility: 3, // 1-10 scale (1 = rigid, 10 = very flexible)
      compromiseWillingness: 7,
      growthTogether: 8,
      adaptability: 6
    }
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'core_values', title: 'Core Values', icon: <Psychology />, color: '#9c27b0' },
    { id: 'lifestyle', title: 'Lifestyle', icon: <FitnessCenter />, color: '#ff9800' },
    { id: 'relationship', title: 'Relationship', icon: <Favorite />, color: '#e91e63' },
    { id: 'career_financial', title: 'Career & Finance', icon: <Work />, color: '#2196f3' },
    { id: 'social_communication', title: 'Social & Communication', icon: <Groups />, color: '#4caf50' },
    { id: 'personal_habits', title: 'Personal Habits', icon: <Star />, color: '#ff5722' },
    { id: 'compatibility', title: 'Compatibility Weights', icon: <Balance />, color: '#795548' },
    { id: 'flexibility', title: 'Flexibility', icon: <Priority />, color: '#607d8b' }
  ];

  useEffect(() => {
    // Calculate progress based on configured criteria
    const allCriteria = [
      ...Object.values(criteria.coreValuesDealBreakers),
      ...Object.values(criteria.lifestyleDealBreakers),
      ...Object.values(criteria.relationshipDealBreakers),
      ...Object.values(criteria.careerFinancialDealBreakers),
      ...Object.values(criteria.socialCommunicationDealBreakers),
      ...Object.values(criteria.personalHabitsDealBreakers)
    ];
    
    const configuredCriteria = allCriteria.filter(criterion => 
      criterion.isDealer || criterion.importance > 5
    ).length;
    
    const totalCriteria = allCriteria.length;
    setProgress((configuredCriteria / totalCriteria) * 100);
  }, [criteria]);

  const handleDealBreakerChange = (category, field, value) => {
    setCriteria(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: {
          ...prev[category][field],
          ...value
        }
      }
    }));
  };

  const handleCompatibilityChange = (field, value) => {
    setCriteria(prev => ({
      ...prev,
      compatibilityPreferences: {
        ...prev.compatibilityPreferences,
        [field]: value
      }
    }));
  };

  const handleFlexibilityChange = (field, value) => {
    setCriteria(prev => ({
      ...prev,
      flexibilitySettings: {
        ...prev.flexibilitySettings,
        [field]: value
      }
    }));
  };

  const getImportanceLabel = (value) => {
    if (value <= 3) return 'Low';
    if (value <= 6) return 'Medium';
    if (value <= 8) return 'High';
    return 'Critical';
  };

  const getImportanceColor = (value) => {
    if (value <= 3) return '#9e9e9e';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#f44336';
  };

  const renderDealBreakerSection = (category, title, icon, items) => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          {icon}
          <Typography variant="h6" sx={{ ml: 2 }}>
            {title} Deal-Breakers
          </Typography>
          <Tooltip title="Configure what matters most to you in a relationship">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        {Object.entries(items).map(([key, labels]) => (
          <Accordion key={key} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Typography sx={{ flexGrow: 1 }}>
                  {labels.label}
                </Typography>
                {criteria[category][key]?.isDealer && (
                  <Chip 
                    icon={<Block />} 
                    label="Deal-Breaker" 
                    color="error" 
                    size="small" 
                    sx={{ mr: 2 }}
                  />
                )}
                <Chip 
                  label={getImportanceLabel(criteria[category][key]?.importance || 5)}
                  size="small"
                  sx={{ 
                    backgroundColor: getImportanceColor(criteria[category][key]?.importance || 5),
                    color: 'white'
                  }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={criteria[category][key]?.isDealer || false}
                        onChange={(e) => handleDealBreakerChange(category, key, { isDealer: e.target.checked })}
                        color="error"
                      />
                    }
                    label="This is a deal-breaker for me"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {labels.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom>
                    Importance: {getImportanceLabel(criteria[category][key]?.importance || 5)}
                  </Typography>
                  <Slider
                    value={criteria[category][key]?.importance || 5}
                    onChange={(e, newValue) => handleDealBreakerChange(category, key, { importance: newValue })}
                    min={1}
                    max={10}
                    step={1}
                    marks
                    valueLabelDisplay="auto"
                    sx={{ 
                      color: getImportanceColor(criteria[category][key]?.importance || 5),
                      mt: 2 
                    }}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );

  const renderCoreValuesSection = () => {
    const items = {
      religiousBeliefs: {
        label: 'Religious/Spiritual Beliefs',
        description: 'Alignment in religious or spiritual practices and beliefs'
      },
      politicalViews: {
        label: 'Political Views',
        description: 'Compatibility in political perspectives and civic engagement'
      },
      familyValues: {
        label: 'Family Values',
        description: 'Shared views on family importance, traditions, and dynamics'
      },
      moralStandards: {
        label: 'Moral Standards',
        description: 'Alignment in ethical principles and moral decision-making'
      },
      lifePhilosophy: {
        label: 'Life Philosophy',
        description: 'Compatibility in overall life approach and worldview'
      }
    };

    return renderDealBreakerSection('coreValuesDealBreakers', 'Core Values', <Psychology sx={{ color: '#9c27b0' }} />, items);
  };

  const renderLifestyleSection = () => {
    const items = {
      smoking: {
        label: 'Smoking',
        description: 'Tobacco use and smoking habits'
      },
      drinking: {
        label: 'Alcohol Consumption',
        description: 'Drinking habits and alcohol-related lifestyle choices'
      },
      drugUse: {
        label: 'Drug Use',
        description: 'Recreational or habitual drug use'
      },
      gambling: {
        label: 'Gambling',
        description: 'Gambling habits and financial risk-taking'
      },
      fitnessLevel: {
        label: 'Fitness & Health',
        description: 'Physical fitness level and health consciousness'
      },
      dietaryRestrictions: {
        label: 'Dietary Preferences',
        description: 'Food choices, dietary restrictions, and eating habits'
      }
    };

    return renderDealBreakerSection('lifestyleDealBreakers', 'Lifestyle', <FitnessCenter sx={{ color: '#ff9800' }} />, items);
  };

  const renderRelationshipSection = () => {
    const items = {
      wantsChildren: {
        label: 'Children Desires',
        description: 'Wanting children and family planning goals'
      },
      marriageGoals: {
        label: 'Marriage Intentions',
        description: 'Desire for marriage and long-term commitment'
      },
      monogamy: {
        label: 'Monogamy',
        description: 'Commitment to exclusive romantic relationships'
      },
      livingTogether: {
        label: 'Cohabitation',
        description: 'Willingness to live together and share living space'
      },
      longDistance: {
        label: 'Long-Distance Relationships',
        description: 'Ability to maintain relationships across distance'
      },
      ageGap: {
        label: 'Age Differences',
        description: 'Comfort with significant age gaps in relationships'
      }
    };

    return renderDealBreakerSection('relationshipDealBreakers', 'Relationship', <Favorite sx={{ color: '#e91e63' }} />, items);
  };

  const renderCareerFinancialSection = () => {
    const items = {
      careerAmbition: {
        label: 'Career Ambition',
        description: 'Professional drive and career advancement goals'
      },
      financialStability: {
        label: 'Financial Stability',
        description: 'Financial security and money management skills'
      },
      workLifeBalance: {
        label: 'Work-Life Balance',
        description: 'Prioritizing personal time vs. career demands'
      },
      travelForWork: {
        label: 'Work Travel',
        description: 'Frequent travel requirements for career'
      },
      entrepreneurship: {
        label: 'Entrepreneurial Spirit',
        description: 'Risk-taking and business ownership interests'
      },
      retirementPlanning: {
        label: 'Future Planning',
        description: 'Long-term financial and retirement planning'
      }
    };

    return renderDealBreakerSection('careerFinancialDealBreakers', 'Career & Finance', <Work sx={{ color: '#2196f3' }} />, items);
  };

  const renderSocialCommunicationSection = () => {
    const items = {
      socialSkills: {
        label: 'Social Skills',
        description: 'Ability to interact comfortably in social situations'
      },
      conflictResolution: {
        label: 'Conflict Resolution',
        description: 'Healthy approaches to disagreements and problems'
      },
      emotionalIntelligence: {
        label: 'Emotional Intelligence',
        description: 'Understanding and managing emotions effectively'
      },
      communicationStyle: {
        label: 'Communication Style',
        description: 'Open, honest, and effective communication patterns'
      },
      socialCircle: {
        label: 'Social Circle',
        description: 'Quality and compatibility of friends and social network'
      },
      familyRelationships: {
        label: 'Family Relationships',
        description: 'Healthy relationships with family members'
      }
    };

    return renderDealBreakerSection('socialCommunicationDealBreakers', 'Social & Communication', <Groups sx={{ color: '#4caf50' }} />, items);
  };

  const renderPersonalHabitsSection = () => {
    const items = {
      cleanliness: {
        label: 'Cleanliness & Organization',
        description: 'Personal hygiene and living space organization'
      },
      punctuality: {
        label: 'Punctuality & Reliability',
        description: 'Being on time and following through on commitments'
      },
      honesty: {
        label: 'Honesty & Transparency',
        description: 'Truthfulness and openness in communication'
      },
      loyalty: {
        label: 'Loyalty & Faithfulness',
        description: 'Commitment and faithfulness to the relationship'
      },
      respectfulness: {
        label: 'Respect & Kindness',
        description: 'Treating others with respect and consideration'
      },
      personalGrowth: {
        label: 'Personal Growth',
        description: 'Commitment to self-improvement and development'
      }
    };

    return renderDealBreakerSection('personalHabitsDealBreakers', 'Personal Habits', <Star sx={{ color: '#ff5722' }} />, items);
  };

  const renderCompatibilitySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Balance sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Compatibility Importance Weights</Typography>
          <Tooltip title="Rate how important each compatibility factor is for your ideal relationship">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Rate each factor from 1-10 based on how important it is for your relationship compatibility.
        </Typography>

        <Grid container spacing={3}>
          {Object.entries({
            personalityMatch: 'Personality Match',
            valueAlignment: 'Value Alignment',
            lifestyleCompatibility: 'Lifestyle Compatibility',
            communicationStyle: 'Communication Style',
            physicalAttraction: 'Physical Attraction',
            intellectualConnection: 'Intellectual Connection',
            emotionalConnection: 'Emotional Connection',
            sharedInterests: 'Shared Interests',
            futureGoals: 'Future Goals',
            familyCompatibility: 'Family Compatibility'
          }).map(([key, label]) => (
            <Grid item xs={12} md={6} key={key}>
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>
                  {label}: {getImportanceLabel(criteria.compatibilityPreferences[key])}
                </Typography>
                <Slider
                  value={criteria.compatibilityPreferences[key]}
                  onChange={(e, newValue) => handleCompatibilityChange(key, newValue)}
                  min={1}
                  max={10}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                  sx={{ 
                    color: getImportanceColor(criteria.compatibilityPreferences[key]),
                    mt: 2 
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderFlexibilitySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Priority sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Flexibility & Compromise</Typography>
          <Tooltip title="Configure how flexible you are with your preferences and deal-breakers">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          These settings help our matching algorithm understand how rigid or flexible you are with your preferences.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Deal-Breaker Flexibility: {criteria.flexibilitySettings.dealBreakerFlexibility}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How willing are you to reconsider your deal-breakers for the right person?
            </Typography>
            <Slider
              value={criteria.flexibilitySettings.dealBreakerFlexibility}
              onChange={(e, newValue) => handleFlexibilityChange('dealBreakerFlexibility', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Rigid' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Flexible' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Compromise Willingness: {criteria.flexibilitySettings.compromiseWillingness}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How willing are you to compromise on your preferences?
            </Typography>
            <Slider
              value={criteria.flexibilitySettings.compromiseWillingness}
              onChange={(e, newValue) => handleFlexibilityChange('compromiseWillingness', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Growth Together: {criteria.flexibilitySettings.growthTogether}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is it that you and your partner grow and change together?
            </Typography>
            <Slider
              value={criteria.flexibilitySettings.growthTogether}
              onChange={(e, newValue) => handleFlexibilityChange('growthTogether', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Adaptability: {criteria.flexibilitySettings.adaptability}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How adaptable are you to different relationship styles and approaches?
            </Typography>
            <Slider
              value={criteria.flexibilitySettings.adaptability}
              onChange={(e, newValue) => handleFlexibilityChange('adaptability', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b' }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderCoreValuesSection();
      case 1: return renderLifestyleSection();
      case 2: return renderRelationshipSection();
      case 3: return renderCareerFinancialSection();
      case 4: return renderSocialCommunicationSection();
      case 5: return renderPersonalHabitsSection();
      case 6: return renderCompatibilitySection();
      case 7: return renderFlexibilitySection();
      default: return renderCoreValuesSection();
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleComplete = () => {
    // Save criteria and navigate to next screen
    localStorage.setItem('compatibilityCriteria', JSON.stringify(criteria));
    console.log('Compatibility Criteria completed:', criteria);
    // Navigate to Screen 138: Relationship Style Preferences
  };

  const getDealBreakerCount = () => {
    const allCategories = [
      criteria.coreValuesDealBreakers,
      criteria.lifestyleDealBreakers,
      criteria.relationshipDealBreakers,
      criteria.careerFinancialDealBreakers,
      criteria.socialCommunicationDealBreakers,
      criteria.personalHabitsDealBreakers
    ];
    
    return allCategories.reduce((count, category) => {
      return count + Object.values(category).filter(item => item.isDealer).length;
    }, 0);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Compatibility Criteria & Deal-Breakers
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Define what matters most to you and identify your non-negotiables
        </Typography>
        
        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progress)}% Configured • {getDealBreakerCount()} Deal-Breakers Set
          </Typography>
        </Box>
      </Box>

      {/* Section Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={1}>
          {sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.5} key={section.id}>
              <Chip
                icon={React.cloneElement(section.icon, { sx: { color: section.color } })}
                label={section.title}
                onClick={() => setCurrentSection(index)}
                variant={currentSection === index ? "filled" : "outlined"}
                color={currentSection === index ? "primary" : "default"}
                sx={{ 
                  width: '100%',
                  height: 'auto',
                  py: 1,
                  cursor: 'pointer',
                  '& .MuiChip-label': {
                    fontSize: '0.7rem',
                    whiteSpace: 'normal',
                    lineHeight: 1.2
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Section Content */}
      {renderCurrentSection()}

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="body2">
          <strong>Cultural Note:</strong> Deal-breakers and compatibility criteria vary greatly across cultures 
          and individuals. Our algorithm respects diverse relationship styles and helps you find someone who 
          shares your values while remaining open to growth and compromise.
        </Typography>
      </Alert>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentSection === 0}
        >
          Previous Section
        </Button>

        {currentSection < sections.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              color: 'white'
            }}
          >
            Next Section
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleComplete}
            sx={{
              background: 'linear-gradient(45deg, #4ECDC4 30%, #44A08D 90%)',
              color: 'white'
            }}
          >
            Complete Criteria Setup
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Compatibility Profile Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Deal-Breakers:</strong> {getDealBreakerCount()} configured
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Flexibility:</strong> {criteria.flexibilitySettings.dealBreakerFlexibility}/10
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Top Priority:</strong> {
                Object.entries(criteria.compatibilityPreferences)
                  .sort(([,a], [,b]) => b - a)[0]?.[0]
                  ?.replace(/([A-Z])/g, ' $1')
                  ?.replace(/^./, str => str.toUpperCase()) || 'Not set'
              }
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Compromise:</strong> {criteria.flexibilitySettings.compromiseWillingness}/10
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CompatibilityCriteria;

