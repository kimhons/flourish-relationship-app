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
  TextField,
  Autocomplete,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Rating,
  Avatar,
  Badge
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  LocationOn,
  Flight,
  Home,
  DirectionsCar,
  Train,
  Public,
  Hiking,
  Beach,
  Terrain,
  LocationCity,
  Nature,
  Restaurant,
  ShoppingCart,
  TheaterComedy,
  Museum,
  SportsBar,
  FitnessCenter,
  School,
  Work,
  LocalHospital,
  Info,
  Explore,
  Map,
  Place,
  MyLocation,
  TravelExplore,
  Weekend,
  Commute,
  Timeline,
  Speed,
  Schedule,
  AttachMoney,
  Security,
  Groups,
  Pets,
  Child,
  Elderly
} from '@mui/icons-material';

const GeographicLifestyleMatching = () => {
  const [preferences, setPreferences] = useState({
    // Geographic Preferences
    geographic: {
      current_location: '',
      preferred_locations: [],
      max_distance: 25,
      willing_to_relocate: false,
      relocation_timeline: 'flexible',
      international_openness: 5,
      travel_frequency: 'moderate',
      location_type_preference: 'flexible' // urban, suburban, rural, flexible
    },
    
    // Living Environment Preferences
    livingEnvironment: {
      housing_type: 'flexible', // apartment, house, condo, flexible
      neighborhood_vibe: 'balanced', // urban, suburban, quiet, vibrant, balanced
      commute_tolerance: 30, // minutes
      public_transport_importance: 6,
      walkability_importance: 7,
      green_space_importance: 8,
      safety_importance: 9,
      cost_of_living_comfort: 'moderate'
    },
    
    // Lifestyle Activity Preferences
    lifestyleActivities: {
      outdoor_activities: 8,
      cultural_activities: 7,
      nightlife_importance: 5,
      dining_scene_importance: 6,
      shopping_importance: 4,
      fitness_facilities: 7,
      educational_opportunities: 6,
      healthcare_quality: 8,
      family_friendliness: 6,
      pet_friendliness: 7
    },
    
    // Climate & Environment
    climateEnvironment: {
      climate_preference: 'temperate', // tropical, temperate, cold, dry, humid, flexible
      season_preference: 'four_seasons', // summer, winter, spring, fall, four_seasons, flexible
      weather_sensitivity: 5,
      natural_disaster_tolerance: 6,
      air_quality_importance: 8,
      noise_tolerance: 5
    },
    
    // Travel & Mobility
    travelMobility: {
      travel_enthusiasm: 8,
      adventure_level: 6,
      budget_travel_comfort: 'moderate',
      international_travel_interest: 7,
      weekend_trip_frequency: 'monthly',
      vacation_style: 'balanced', // relaxation, adventure, cultural, balanced
      transportation_preference: ['car', 'public_transport'],
      mobility_requirements: []
    },
    
    // Work & Career Location Factors
    workCareer: {
      remote_work_capability: 'hybrid',
      career_location_flexibility: 7,
      industry_location_importance: 6,
      networking_opportunities: 5,
      entrepreneurship_environment: 4,
      work_life_balance_priority: 8
    },
    
    // Social & Community
    socialCommunity: {
      community_involvement: 6,
      social_scene_importance: 5,
      cultural_diversity_preference: 8,
      language_barriers_comfort: 6,
      expat_community_importance: 4,
      local_integration_priority: 7
    }
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'geographic', title: 'Geographic', icon: <LocationOn />, color: '#e91e63' },
    { id: 'living', title: 'Living Environment', icon: <Home />, color: '#2196f3' },
    { id: 'lifestyle', title: 'Lifestyle Activities', icon: <Weekend />, color: '#4caf50' },
    { id: 'climate', title: 'Climate & Environment', icon: <Nature />, color: '#ff9800' },
    { id: 'travel', title: 'Travel & Mobility', icon: <Flight />, color: '#9c27b0' },
    { id: 'work', title: 'Work & Career', icon: <Work />, color: '#795548' },
    { id: 'social', title: 'Social & Community', icon: <Groups />, color: '#607d8b' }
  ];

  // Sample location data (in real app, this would come from an API)
  const popularLocations = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
    'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA',
    'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH', 'Charlotte, NC',
    'San Francisco, CA', 'Indianapolis, IN', 'Seattle, WA', 'Denver, CO', 'Washington, DC',
    'Boston, MA', 'El Paso, TX', 'Nashville, TN', 'Detroit, MI', 'Oklahoma City, OK',
    'Portland, OR', 'Las Vegas, NV', 'Memphis, TN', 'Louisville, KY', 'Baltimore, MD'
  ];

  useEffect(() => {
    // Calculate progress based on configured preferences
    const allSections = [
      preferences.geographic,
      preferences.livingEnvironment,
      preferences.lifestyleActivities,
      preferences.climateEnvironment,
      preferences.travelMobility,
      preferences.workCareer,
      preferences.socialCommunity
    ];
    
    const totalConfigured = allSections.reduce((total, section) => {
      return total + Object.values(section).filter(value => 
        value !== '' && value !== 0 && value !== 'flexible' && 
        (Array.isArray(value) ? value.length > 0 : true)
      ).length;
    }, 0);
    
    const totalPossible = 45; // Approximate total number of preference fields
    setProgress((totalConfigured / totalPossible) * 100);
  }, [preferences]);

  const handlePreferenceChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleArrayPreferenceChange = (category, field, value, isMultiple = false) => {
    if (isMultiple) {
      setPreferences(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: prev[category][field].includes(value)
            ? prev[category][field].filter(item => item !== value)
            : [...prev[category][field], value]
        }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value
        }
      }));
    }
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

  const renderGeographicSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocationOn sx={{ mr: 2, color: '#e91e63' }} />
          <Typography variant="h6">Geographic Preferences</Typography>
          <Tooltip title="Define your location preferences and mobility for finding compatible matches">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={popularLocations}
              value={preferences.geographic.current_location}
              onChange={(event, newValue) => handlePreferenceChange('geographic', 'current_location', newValue || '')}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Current Location"
                  placeholder="Enter your current city"
                  fullWidth
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Autocomplete
              multiple
              options={popularLocations}
              value={preferences.geographic.preferred_locations}
              onChange={(event, newValue) => handlePreferenceChange('geographic', 'preferred_locations', newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Preferred Locations"
                  placeholder="Add cities you'd like to live in"
                  fullWidth
                  sx={{ mb: 3 }}
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
            />

            <Typography gutterBottom>
              Maximum Distance: {preferences.geographic.max_distance} km
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How far are you willing to travel for dates?
            </Typography>
            <Slider
              value={preferences.geographic.max_distance}
              onChange={(e, newValue) => handlePreferenceChange('geographic', 'max_distance', newValue)}
              min={5}
              max={500}
              step={5}
              marks={[
                { value: 5, label: '5km' },
                { value: 50, label: '50km' },
                { value: 200, label: '200km' },
                { value: 500, label: '500km+' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#e91e63', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.geographic.willing_to_relocate}
                  onChange={(e) => handlePreferenceChange('geographic', 'willing_to_relocate', e.target.checked)}
                />
              }
              label="Willing to relocate for the right person"
              sx={{ mb: 3 }}
            />

            {preferences.geographic.willing_to_relocate && (
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Relocation Timeline</InputLabel>
                <Select
                  value={preferences.geographic.relocation_timeline}
                  onChange={(e) => handlePreferenceChange('geographic', 'relocation_timeline', e.target.value)}
                  label="Relocation Timeline"
                >
                  <MenuItem value="immediate">Immediate (0-6 months)</MenuItem>
                  <MenuItem value="short_term">Short-term (6-12 months)</MenuItem>
                  <MenuItem value="medium_term">Medium-term (1-2 years)</MenuItem>
                  <MenuItem value="long_term">Long-term (2+ years)</MenuItem>
                  <MenuItem value="flexible">Flexible timeline</MenuItem>
                </Select>
              </FormControl>
            )}

            <Typography gutterBottom>
              International Openness: {getImportanceLabel(preferences.geographic.international_openness)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How open are you to international relationships?
            </Typography>
            <Slider
              value={preferences.geographic.international_openness}
              onChange={(e, newValue) => handlePreferenceChange('geographic', 'international_openness', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Local Only' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Open' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#e91e63', mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Location Type Preference</InputLabel>
              <Select
                value={preferences.geographic.location_type_preference}
                onChange={(e) => handlePreferenceChange('geographic', 'location_type_preference', e.target.value)}
                label="Location Type Preference"
              >
                <MenuItem value="urban">Urban (City center)</MenuItem>
                <MenuItem value="suburban">Suburban</MenuItem>
                <MenuItem value="rural">Rural/Countryside</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderLivingEnvironmentSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Home sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Living Environment</Typography>
          <Tooltip title="Configure your ideal living environment and neighborhood preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Housing Type Preference</InputLabel>
              <Select
                value={preferences.livingEnvironment.housing_type}
                onChange={(e) => handlePreferenceChange('livingEnvironment', 'housing_type', e.target.value)}
                label="Housing Type Preference"
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="condo">Condo/Townhouse</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Neighborhood Vibe</InputLabel>
              <Select
                value={preferences.livingEnvironment.neighborhood_vibe}
                onChange={(e) => handlePreferenceChange('livingEnvironment', 'neighborhood_vibe', e.target.value)}
                label="Neighborhood Vibe"
              >
                <MenuItem value="urban">Urban & Bustling</MenuItem>
                <MenuItem value="suburban">Suburban & Family-friendly</MenuItem>
                <MenuItem value="quiet">Quiet & Peaceful</MenuItem>
                <MenuItem value="vibrant">Vibrant & Trendy</MenuItem>
                <MenuItem value="balanced">Balanced</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Commute Tolerance: {preferences.livingEnvironment.commute_tolerance} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Maximum acceptable daily commute time
            </Typography>
            <Slider
              value={preferences.livingEnvironment.commute_tolerance}
              onChange={(e, newValue) => handlePreferenceChange('livingEnvironment', 'commute_tolerance', newValue)}
              min={10}
              max={120}
              step={5}
              marks={[
                { value: 10, label: '10min' },
                { value: 30, label: '30min' },
                { value: 60, label: '1hr' },
                { value: 120, label: '2hr+' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#2196f3', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Public Transport Importance: {getImportanceLabel(preferences.livingEnvironment.public_transport_importance)}
            </Typography>
            <Slider
              value={preferences.livingEnvironment.public_transport_importance}
              onChange={(e, newValue) => handlePreferenceChange('livingEnvironment', 'public_transport_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.livingEnvironment.public_transport_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Walkability Importance: {getImportanceLabel(preferences.livingEnvironment.walkability_importance)}
            </Typography>
            <Slider
              value={preferences.livingEnvironment.walkability_importance}
              onChange={(e, newValue) => handlePreferenceChange('livingEnvironment', 'walkability_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.livingEnvironment.walkability_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Green Space Importance: {getImportanceLabel(preferences.livingEnvironment.green_space_importance)}
            </Typography>
            <Slider
              value={preferences.livingEnvironment.green_space_importance}
              onChange={(e, newValue) => handlePreferenceChange('livingEnvironment', 'green_space_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.livingEnvironment.green_space_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Safety Importance: {getImportanceLabel(preferences.livingEnvironment.safety_importance)}
            </Typography>
            <Slider
              value={preferences.livingEnvironment.safety_importance}
              onChange={(e, newValue) => handlePreferenceChange('livingEnvironment', 'safety_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.livingEnvironment.safety_importance), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderLifestyleActivitiesSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Weekend sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Lifestyle Activities</Typography>
          <Tooltip title="Rate the importance of various lifestyle activities and amenities">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Rate how important each lifestyle factor is for your ideal living location (1-10 scale).
        </Typography>

        <Grid container spacing={3}>
          {Object.entries({
            outdoor_activities: { label: 'Outdoor Activities', icon: <Hiking /> },
            cultural_activities: { label: 'Cultural Activities', icon: <Museum /> },
            nightlife_importance: { label: 'Nightlife Scene', icon: <SportsBar /> },
            dining_scene_importance: { label: 'Dining Scene', icon: <Restaurant /> },
            shopping_importance: { label: 'Shopping Options', icon: <ShoppingCart /> },
            fitness_facilities: { label: 'Fitness Facilities', icon: <FitnessCenter /> },
            educational_opportunities: { label: 'Educational Opportunities', icon: <School /> },
            healthcare_quality: { label: 'Healthcare Quality', icon: <LocalHospital /> },
            family_friendliness: { label: 'Family Friendliness', icon: <Child /> },
            pet_friendliness: { label: 'Pet Friendliness', icon: <Pets /> }
          }).map(([key, { label, icon }]) => (
            <Grid item xs={12} md={6} key={key}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {icon}
                <Typography sx={{ ml: 1, flexGrow: 1 }}>
                  {label}: {getImportanceLabel(preferences.lifestyleActivities[key])}
                </Typography>
              </Box>
              <Slider
                value={preferences.lifestyleActivities[key]}
                onChange={(e, newValue) => handlePreferenceChange('lifestyleActivities', key, newValue)}
                min={1}
                max={10}
                step={1}
                marks
                valueLabelDisplay="auto"
                sx={{ 
                  color: getImportanceColor(preferences.lifestyleActivities[key]),
                  mb: 2 
                }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderClimateEnvironmentSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Nature sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">Climate & Environment</Typography>
          <Tooltip title="Configure your climate and environmental preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Climate Preference</InputLabel>
              <Select
                value={preferences.climateEnvironment.climate_preference}
                onChange={(e) => handlePreferenceChange('climateEnvironment', 'climate_preference', e.target.value)}
                label="Climate Preference"
              >
                <MenuItem value="tropical">Tropical (Warm & Humid)</MenuItem>
                <MenuItem value="temperate">Temperate (Moderate)</MenuItem>
                <MenuItem value="cold">Cold (Cool Temperatures)</MenuItem>
                <MenuItem value="dry">Dry (Low Humidity)</MenuItem>
                <MenuItem value="humid">Humid (High Moisture)</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Season Preference</InputLabel>
              <Select
                value={preferences.climateEnvironment.season_preference}
                onChange={(e) => handlePreferenceChange('climateEnvironment', 'season_preference', e.target.value)}
                label="Season Preference"
              >
                <MenuItem value="summer">Summer Lover</MenuItem>
                <MenuItem value="winter">Winter Lover</MenuItem>
                <MenuItem value="spring">Spring Lover</MenuItem>
                <MenuItem value="fall">Fall Lover</MenuItem>
                <MenuItem value="four_seasons">Four Seasons</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Weather Sensitivity: {preferences.climateEnvironment.weather_sensitivity}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much does weather affect your mood and activities?
            </Typography>
            <Slider
              value={preferences.climateEnvironment.weather_sensitivity}
              onChange={(e, newValue) => handlePreferenceChange('climateEnvironment', 'weather_sensitivity', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#ff9800', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Natural Disaster Tolerance: {preferences.climateEnvironment.natural_disaster_tolerance}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Comfort level with natural disaster risks (earthquakes, hurricanes, etc.)
            </Typography>
            <Slider
              value={preferences.climateEnvironment.natural_disaster_tolerance}
              onChange={(e, newValue) => handlePreferenceChange('climateEnvironment', 'natural_disaster_tolerance', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Risk Averse' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Risk Tolerant' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#ff9800', mb: 3 }}
            />

            <Typography gutterBottom>
              Air Quality Importance: {getImportanceLabel(preferences.climateEnvironment.air_quality_importance)}
            </Typography>
            <Slider
              value={preferences.climateEnvironment.air_quality_importance}
              onChange={(e, newValue) => handlePreferenceChange('climateEnvironment', 'air_quality_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.climateEnvironment.air_quality_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Noise Tolerance: {preferences.climateEnvironment.noise_tolerance}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How well do you handle urban noise and activity?
            </Typography>
            <Slider
              value={preferences.climateEnvironment.noise_tolerance}
              onChange={(e, newValue) => handlePreferenceChange('climateEnvironment', 'noise_tolerance', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Quiet Only' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Tolerance' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#ff9800', mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderTravelMobilitySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Flight sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">Travel & Mobility</Typography>
          <Tooltip title="Configure your travel preferences and mobility requirements">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Travel Enthusiasm: {getImportanceLabel(preferences.travelMobility.travel_enthusiasm)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much do you love to travel?
            </Typography>
            <Slider
              value={preferences.travelMobility.travel_enthusiasm}
              onChange={(e, newValue) => handlePreferenceChange('travelMobility', 'travel_enthusiasm', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Homebody' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Travel Addict' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Adventure Level: {preferences.travelMobility.adventure_level}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Do you prefer safe/comfortable or adventurous travel?
            </Typography>
            <Slider
              value={preferences.travelMobility.adventure_level}
              onChange={(e, newValue) => handlePreferenceChange('travelMobility', 'adventure_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Comfortable' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Adventurous' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Budget Travel Comfort</InputLabel>
              <Select
                value={preferences.travelMobility.budget_travel_comfort}
                onChange={(e) => handlePreferenceChange('travelMobility', 'budget_travel_comfort', e.target.value)}
                label="Budget Travel Comfort"
              >
                <MenuItem value="budget">Budget Travel</MenuItem>
                <MenuItem value="moderate">Moderate Comfort</MenuItem>
                <MenuItem value="comfortable">Comfortable Travel</MenuItem>
                <MenuItem value="luxury">Luxury Travel</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              International Travel Interest: {getImportanceLabel(preferences.travelMobility.international_travel_interest)}
            </Typography>
            <Slider
              value={preferences.travelMobility.international_travel_interest}
              onChange={(e, newValue) => handlePreferenceChange('travelMobility', 'international_travel_interest', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.travelMobility.international_travel_interest), mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Weekend Trip Frequency</InputLabel>
              <Select
                value={preferences.travelMobility.weekend_trip_frequency}
                onChange={(e) => handlePreferenceChange('travelMobility', 'weekend_trip_frequency', e.target.value)}
                label="Weekend Trip Frequency"
              >
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="biweekly">Bi-weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Vacation Style</InputLabel>
              <Select
                value={preferences.travelMobility.vacation_style}
                onChange={(e) => handlePreferenceChange('travelMobility', 'vacation_style', e.target.value)}
                label="Vacation Style"
              >
                <MenuItem value="relaxation">Relaxation & Rest</MenuItem>
                <MenuItem value="adventure">Adventure & Activity</MenuItem>
                <MenuItem value="cultural">Cultural & Educational</MenuItem>
                <MenuItem value="balanced">Balanced Mix</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Transportation Preferences:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {[
                { value: 'car', label: 'Car', icon: <DirectionsCar /> },
                { value: 'public_transport', label: 'Public Transport', icon: <Train /> },
                { value: 'bike', label: 'Bicycle', icon: <DirectionsCar /> },
                { value: 'walking', label: 'Walking', icon: <Hiking /> },
                { value: 'rideshare', label: 'Rideshare', icon: <DirectionsCar /> }
              ].map((transport) => (
                <Chip
                  key={transport.value}
                  icon={transport.icon}
                  label={transport.label}
                  onClick={() => handleArrayPreferenceChange('travelMobility', 'transportation_preference', transport.value, true)}
                  variant={preferences.travelMobility.transportation_preference.includes(transport.value) ? "filled" : "outlined"}
                  color={preferences.travelMobility.transportation_preference.includes(transport.value) ? "primary" : "default"}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderWorkCareerSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Work sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Work & Career Location Factors</Typography>
          <Tooltip title="Configure how work and career factors influence your location preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Remote Work Capability</InputLabel>
              <Select
                value={preferences.workCareer.remote_work_capability}
                onChange={(e) => handlePreferenceChange('workCareer', 'remote_work_capability', e.target.value)}
                label="Remote Work Capability"
              >
                <MenuItem value="fully_remote">Fully Remote</MenuItem>
                <MenuItem value="hybrid">Hybrid (2-3 days remote)</MenuItem>
                <MenuItem value="occasional">Occasional Remote</MenuItem>
                <MenuItem value="office_required">Office Required</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Career Location Flexibility: {preferences.workCareer.career_location_flexibility}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How flexible is your career regarding location?
            </Typography>
            <Slider
              value={preferences.workCareer.career_location_flexibility}
              onChange={(e, newValue) => handlePreferenceChange('workCareer', 'career_location_flexibility', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Fixed Location' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Flexible' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#795548', mb: 3 }}
            />

            <Typography gutterBottom>
              Industry Location Importance: {getImportanceLabel(preferences.workCareer.industry_location_importance)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is being in a hub for your industry?
            </Typography>
            <Slider
              value={preferences.workCareer.industry_location_importance}
              onChange={(e, newValue) => handlePreferenceChange('workCareer', 'industry_location_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.workCareer.industry_location_importance), mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Networking Opportunities: {getImportanceLabel(preferences.workCareer.networking_opportunities)}
            </Typography>
            <Slider
              value={preferences.workCareer.networking_opportunities}
              onChange={(e, newValue) => handlePreferenceChange('workCareer', 'networking_opportunities', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.workCareer.networking_opportunities), mb: 3 }}
            />

            <Typography gutterBottom>
              Entrepreneurship Environment: {getImportanceLabel(preferences.workCareer.entrepreneurship_environment)}
            </Typography>
            <Slider
              value={preferences.workCareer.entrepreneurship_environment}
              onChange={(e, newValue) => handlePreferenceChange('workCareer', 'entrepreneurship_environment', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.workCareer.entrepreneurship_environment), mb: 3 }}
            />

            <Typography gutterBottom>
              Work-Life Balance Priority: {getImportanceLabel(preferences.workCareer.work_life_balance_priority)}
            </Typography>
            <Slider
              value={preferences.workCareer.work_life_balance_priority}
              onChange={(e, newValue) => handlePreferenceChange('workCareer', 'work_life_balance_priority', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.workCareer.work_life_balance_priority), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSocialCommunitySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Groups sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Social & Community</Typography>
          <Tooltip title="Configure your social and community integration preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Community Involvement: {getImportanceLabel(preferences.socialCommunity.community_involvement)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is being involved in your local community?
            </Typography>
            <Slider
              value={preferences.socialCommunity.community_involvement}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'community_involvement', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.socialCommunity.community_involvement), mb: 3 }}
            />

            <Typography gutterBottom>
              Social Scene Importance: {getImportanceLabel(preferences.socialCommunity.social_scene_importance)}
            </Typography>
            <Slider
              value={preferences.socialCommunity.social_scene_importance}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'social_scene_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.socialCommunity.social_scene_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Cultural Diversity Preference: {getImportanceLabel(preferences.socialCommunity.cultural_diversity_preference)}
            </Typography>
            <Slider
              value={preferences.socialCommunity.cultural_diversity_preference}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'cultural_diversity_preference', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.socialCommunity.cultural_diversity_preference), mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Language Barriers Comfort: {preferences.socialCommunity.language_barriers_comfort}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with language barriers?
            </Typography>
            <Slider
              value={preferences.socialCommunity.language_barriers_comfort}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'language_barriers_comfort', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Uncomfortable' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Comfortable' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b', mb: 3 }}
            />

            <Typography gutterBottom>
              Expat Community Importance: {getImportanceLabel(preferences.socialCommunity.expat_community_importance)}
            </Typography>
            <Slider
              value={preferences.socialCommunity.expat_community_importance}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'expat_community_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.socialCommunity.expat_community_importance), mb: 3 }}
            />

            <Typography gutterBottom>
              Local Integration Priority: {getImportanceLabel(preferences.socialCommunity.local_integration_priority)}
            </Typography>
            <Slider
              value={preferences.socialCommunity.local_integration_priority}
              onChange={(e, newValue) => handlePreferenceChange('socialCommunity', 'local_integration_priority', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: getImportanceColor(preferences.socialCommunity.local_integration_priority), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderGeographicSection();
      case 1: return renderLivingEnvironmentSection();
      case 2: return renderLifestyleActivitiesSection();
      case 3: return renderClimateEnvironmentSection();
      case 4: return renderTravelMobilitySection();
      case 5: return renderWorkCareerSection();
      case 6: return renderSocialCommunitySection();
      default: return renderGeographicSection();
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
    localStorage.setItem('geographicLifestyleMatching', JSON.stringify(preferences));
    console.log('Geographic & Lifestyle Matching completed:', preferences);
    // Navigate to Screen 140: Advanced Filtering & Discovery
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Geographic & Lifestyle Matching
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Define your location preferences and lifestyle compatibility factors
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
            <Grid item xs={6} sm={4} md={3} lg={1.7} key={section.id}>
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
          <strong>Cultural Note:</strong> Geographic and lifestyle preferences vary greatly across cultures 
          and personal backgrounds. Our matching algorithm respects diverse living preferences while helping 
          you find someone who shares compatible location and lifestyle values.
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
            Complete Geographic Preferences
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Geographic & Lifestyle Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Max Distance:</strong> {preferences.geographic.max_distance} km
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Willing to Relocate:</strong> {preferences.geographic.willing_to_relocate ? 'Yes' : 'No'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Location Type:</strong> {preferences.geographic.location_type_preference}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Travel Enthusiasm:</strong> {getImportanceLabel(preferences.travelMobility.travel_enthusiasm)}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default GeographicLifestyleMatching;

