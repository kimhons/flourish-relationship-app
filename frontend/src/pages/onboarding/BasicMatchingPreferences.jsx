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
  Tooltip
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Favorite,
  LocationOn,
  School,
  Work,
  FitnessCenter,
  Smoking,
  LocalBar,
  Child,
  Pets,
  Height,
  Info
} from '@mui/icons-material';

const BasicMatchingPreferences = () => {
  const [preferences, setPreferences] = useState({
    // Age preferences
    ageRange: [25, 35],
    ageImportance: 7,
    
    // Location preferences
    maxDistance: 25,
    locationImportance: 8,
    willingToRelocate: false,
    
    // Education preferences
    educationLevel: 'any',
    educationImportance: 5,
    
    // Career preferences
    careerAmbition: 'any',
    careerImportance: 6,
    
    // Physical preferences
    heightRange: [160, 185],
    heightImportance: 4,
    fitnessLevel: 'any',
    fitnessImportance: 5,
    
    // Lifestyle preferences
    smokingPreference: 'non_smoker',
    smokingImportance: 9,
    drinkingPreference: 'social',
    drinkingImportance: 6,
    
    // Family preferences
    childrenPreference: 'open',
    childrenImportance: 8,
    
    // Pet preferences
    petPreference: 'any',
    petImportance: 3
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'demographics', title: 'Demographics', icon: <Favorite /> },
    { id: 'location', title: 'Location', icon: <LocationOn /> },
    { id: 'education_career', title: 'Education & Career', icon: <School /> },
    { id: 'physical', title: 'Physical Preferences', icon: <Height /> },
    { id: 'lifestyle', title: 'Lifestyle', icon: <FitnessCenter /> },
    { id: 'family_pets', title: 'Family & Pets', icon: <Child /> }
  ];

  useEffect(() => {
    // Calculate progress based on completed fields
    const totalFields = Object.keys(preferences).length;
    const completedFields = Object.values(preferences).filter(value => 
      value !== '' && value !== 'any' && value !== null
    ).length;
    setProgress((completedFields / totalFields) * 100);
  }, [preferences]);

  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getImportanceLabel = (value) => {
    if (value <= 3) return 'Not Important';
    if (value <= 6) return 'Somewhat Important';
    if (value <= 8) return 'Important';
    return 'Very Important';
  };

  const getImportanceColor = (value) => {
    if (value <= 3) return '#9e9e9e';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#4caf50';
  };

  const renderDemographicsSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Favorite sx={{ mr: 2, color: '#e91e63' }} />
          <Typography variant="h6">Age Preferences</Typography>
          <Tooltip title="Age compatibility is a strong predictor of relationship success">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography gutterBottom>
            Preferred Age Range: {preferences.ageRange[0]} - {preferences.ageRange[1]} years
          </Typography>
          <Slider
            value={preferences.ageRange}
            onChange={(e, newValue) => handlePreferenceChange('ageRange', newValue)}
            valueLabelDisplay="auto"
            min={18}
            max={65}
            marks={[
              { value: 18, label: '18' },
              { value: 25, label: '25' },
              { value: 35, label: '35' },
              { value: 45, label: '45' },
              { value: 65, label: '65+' }
            ]}
            sx={{ mt: 2 }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>
            Age Importance: {getImportanceLabel(preferences.ageImportance)}
          </Typography>
          <Slider
            value={preferences.ageImportance}
            onChange={(e, newValue) => handlePreferenceChange('ageImportance', newValue)}
            min={1}
            max={10}
            step={1}
            marks
            valueLabelDisplay="auto"
            sx={{ 
              color: getImportanceColor(preferences.ageImportance),
              mt: 2 
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );

  const renderLocationSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocationOn sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Location Preferences</Typography>
          <Tooltip title="Geographic proximity affects relationship development and maintenance">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography gutterBottom>
            Maximum Distance: {preferences.maxDistance} km
          </Typography>
          <Slider
            value={preferences.maxDistance}
            onChange={(e, newValue) => handlePreferenceChange('maxDistance', newValue)}
            min={5}
            max={500}
            step={5}
            valueLabelDisplay="auto"
            marks={[
              { value: 5, label: '5km' },
              { value: 25, label: '25km' },
              { value: 100, label: '100km' },
              { value: 500, label: '500km+' }
            ]}
            sx={{ mt: 2 }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>
            Location Importance: {getImportanceLabel(preferences.locationImportance)}
          </Typography>
          <Slider
            value={preferences.locationImportance}
            onChange={(e, newValue) => handlePreferenceChange('locationImportance', newValue)}
            min={1}
            max={10}
            step={1}
            marks
            valueLabelDisplay="auto"
            sx={{ 
              color: getImportanceColor(preferences.locationImportance),
              mt: 2 
            }}
          />
        </Box>

        <FormControlLabel
          control={
            <Switch
              checked={preferences.willingToRelocate}
              onChange={(e) => handlePreferenceChange('willingToRelocate', e.target.checked)}
            />
          }
          label="Willing to relocate for the right person"
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );

  const renderEducationCareerSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <School sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Education & Career</Typography>
          <Tooltip title="Educational and career compatibility affects long-term relationship satisfaction">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Education Level Preference</InputLabel>
              <Select
                value={preferences.educationLevel}
                onChange={(e) => handlePreferenceChange('educationLevel', e.target.value)}
                label="Education Level Preference"
              >
                <MenuItem value="any">Any Education Level</MenuItem>
                <MenuItem value="high_school">High School or Higher</MenuItem>
                <MenuItem value="some_college">Some College or Higher</MenuItem>
                <MenuItem value="bachelors">Bachelor's Degree or Higher</MenuItem>
                <MenuItem value="masters">Master's Degree or Higher</MenuItem>
                <MenuItem value="doctorate">Doctorate Degree</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Education Importance: {getImportanceLabel(preferences.educationImportance)}
            </Typography>
            <Slider
              value={preferences.educationImportance}
              onChange={(e, newValue) => handlePreferenceChange('educationImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.educationImportance),
                mt: 2 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Career Ambition Preference</InputLabel>
              <Select
                value={preferences.careerAmbition}
                onChange={(e) => handlePreferenceChange('careerAmbition', e.target.value)}
                label="Career Ambition Preference"
              >
                <MenuItem value="any">Any Career Level</MenuItem>
                <MenuItem value="relaxed">Work-Life Balance Focused</MenuItem>
                <MenuItem value="moderate">Moderately Ambitious</MenuItem>
                <MenuItem value="ambitious">Highly Ambitious</MenuItem>
                <MenuItem value="entrepreneur">Entrepreneurial</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Career Importance: {getImportanceLabel(preferences.careerImportance)}
            </Typography>
            <Slider
              value={preferences.careerImportance}
              onChange={(e, newValue) => handlePreferenceChange('careerImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.careerImportance),
                mt: 2 
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPhysicalSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Height sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">Physical Preferences</Typography>
          <Tooltip title="Physical attraction is important for initial connection and long-term satisfaction">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Height Range: {preferences.heightRange[0]}cm - {preferences.heightRange[1]}cm
            </Typography>
            <Slider
              value={preferences.heightRange}
              onChange={(e, newValue) => handlePreferenceChange('heightRange', newValue)}
              min={140}
              max={210}
              step={5}
              valueLabelDisplay="auto"
              marks={[
                { value: 140, label: '140cm' },
                { value: 160, label: '160cm' },
                { value: 180, label: '180cm' },
                { value: 210, label: '210cm' }
              ]}
              sx={{ mt: 2, mb: 3 }}
            />

            <Typography gutterBottom>
              Height Importance: {getImportanceLabel(preferences.heightImportance)}
            </Typography>
            <Slider
              value={preferences.heightImportance}
              onChange={(e, newValue) => handlePreferenceChange('heightImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.heightImportance),
                mt: 2 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Fitness Level Preference</InputLabel>
              <Select
                value={preferences.fitnessLevel}
                onChange={(e) => handlePreferenceChange('fitnessLevel', e.target.value)}
                label="Fitness Level Preference"
              >
                <MenuItem value="any">Any Fitness Level</MenuItem>
                <MenuItem value="low">Casual/Light Activity</MenuItem>
                <MenuItem value="moderate">Moderately Active</MenuItem>
                <MenuItem value="high">Very Active/Athletic</MenuItem>
                <MenuItem value="extreme">Fitness Enthusiast</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Fitness Importance: {getImportanceLabel(preferences.fitnessImportance)}
            </Typography>
            <Slider
              value={preferences.fitnessImportance}
              onChange={(e, newValue) => handlePreferenceChange('fitnessImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.fitnessImportance),
                mt: 2 
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderLifestyleSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FitnessCenter sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">Lifestyle Preferences</Typography>
          <Tooltip title="Lifestyle compatibility is crucial for daily harmony and long-term relationship success">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Smoking Preference</InputLabel>
              <Select
                value={preferences.smokingPreference}
                onChange={(e) => handlePreferenceChange('smokingPreference', e.target.value)}
                label="Smoking Preference"
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="non_smoker">Non-Smoker Only</MenuItem>
                <MenuItem value="occasional">Occasional Smoker OK</MenuItem>
                <MenuItem value="social">Social Smoker OK</MenuItem>
                <MenuItem value="regular">Regular Smoker OK</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Smoking Importance: {getImportanceLabel(preferences.smokingImportance)}
            </Typography>
            <Slider
              value={preferences.smokingImportance}
              onChange={(e, newValue) => handlePreferenceChange('smokingImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.smokingImportance),
                mt: 2 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Drinking Preference</InputLabel>
              <Select
                value={preferences.drinkingPreference}
                onChange={(e) => handlePreferenceChange('drinkingPreference', e.target.value)}
                label="Drinking Preference"
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="non_drinker">Non-Drinker Only</MenuItem>
                <MenuItem value="light">Light Drinker</MenuItem>
                <MenuItem value="social">Social Drinker</MenuItem>
                <MenuItem value="regular">Regular Drinker OK</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Drinking Importance: {getImportanceLabel(preferences.drinkingImportance)}
            </Typography>
            <Slider
              value={preferences.drinkingImportance}
              onChange={(e, newValue) => handlePreferenceChange('drinkingImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.drinkingImportance),
                mt: 2 
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderFamilyPetsSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Child sx={{ mr: 2, color: '#ff5722' }} />
          <Typography variant="h6">Family & Pets</Typography>
          <Tooltip title="Family planning and pet preferences are major compatibility factors">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Children Preference</InputLabel>
              <Select
                value={preferences.childrenPreference}
                onChange={(e) => handlePreferenceChange('childrenPreference', e.target.value)}
                label="Children Preference"
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="wants_children">Wants Children</MenuItem>
                <MenuItem value="open">Open to Children</MenuItem>
                <MenuItem value="has_children">Has Children (OK)</MenuItem>
                <MenuItem value="no_children">No Children Preferred</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Children Importance: {getImportanceLabel(preferences.childrenImportance)}
            </Typography>
            <Slider
              value={preferences.childrenImportance}
              onChange={(e, newValue) => handlePreferenceChange('childrenImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.childrenImportance),
                mt: 2 
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Pet Preference</InputLabel>
              <Select
                value={preferences.petPreference}
                onChange={(e) => handlePreferenceChange('petPreference', e.target.value)}
                label="Pet Preference"
              >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="loves_pets">Loves Pets</MenuItem>
                <MenuItem value="has_pets">Has Pets (OK)</MenuItem>
                <MenuItem value="allergic">Pet Allergies</MenuItem>
                <MenuItem value="no_pets">No Pets Preferred</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Pet Importance: {getImportanceLabel(preferences.petImportance)}
            </Typography>
            <Slider
              value={preferences.petImportance}
              onChange={(e, newValue) => handlePreferenceChange('petImportance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ 
                color: getImportanceColor(preferences.petImportance),
                mt: 2 
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderDemographicsSection();
      case 1: return renderLocationSection();
      case 2: return renderEducationCareerSection();
      case 3: return renderPhysicalSection();
      case 4: return renderLifestyleSection();
      case 5: return renderFamilyPetsSection();
      default: return renderDemographicsSection();
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
    // Save preferences and navigate to next screen
    localStorage.setItem('basicMatchingPreferences', JSON.stringify(preferences));
    console.log('Basic Matching Preferences completed:', preferences);
    // Navigate to Screen 137: Compatibility Criteria & Deal-Breakers
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Basic Matching Preferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Help us understand what you're looking for in a partner
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
            {Math.round(progress)}% Complete
          </Typography>
        </Box>
      </Box>

      {/* Section Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={1}>
          {sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={2} key={section.id}>
              <Chip
                icon={section.icon}
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
                    fontSize: '0.75rem',
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
          <strong>Cultural Note:</strong> These preferences help us find compatible matches while respecting 
          diverse backgrounds and relationship styles. All preferences are optional and can be adjusted anytime.
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
            Complete Basic Preferences
          </Button>
        )}
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Preference Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Age Range:</strong> {preferences.ageRange[0]} - {preferences.ageRange[1]} years
            </Typography>
            <Typography variant="body2">
              <strong>Max Distance:</strong> {preferences.maxDistance} km
            </Typography>
            <Typography variant="body2">
              <strong>Education:</strong> {preferences.educationLevel.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Smoking:</strong> {preferences.smokingPreference.replace('_', ' ')}
            </Typography>
            <Typography variant="body2">
              <strong>Children:</strong> {preferences.childrenPreference.replace('_', ' ')}
            </Typography>
            <Typography variant="body2">
              <strong>Pets:</strong> {preferences.petPreference.replace('_', ' ')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicMatchingPreferences;

