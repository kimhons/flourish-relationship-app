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
  TextField,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  Slider,
  FormControlLabel,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Avatar,
  Badge
} from '@mui/material';
import {
  Edit,
  AutoFixHigh,
  Psychology,
  Lightbulb,
  Check,
  Star,
  TrendingUp,
  Refresh,
  ContentCopy,
  ExpandMore,
  Tune,
  Visibility,
  VisibilityOff,
  EmojiEmotions,
  Favorite,
  School,
  Work,
  Sports,
  MusicNote,
  Flight,
  Restaurant,
  Movie,
  Palette,
  Brightness4,
  Speed,
  Timeline,
  Analytics,
  SmartToy,
  Cancel
} from '@mui/icons-material';

const BioWritingAssistant = ({ userData, onNext, onBack }) => {
  const [currentBio, setCurrentBio] = useState('');
  const [originalBio, setOriginalBio] = useState('');
  const [bioSuggestions, setBioSuggestions] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [bioAnalysis, setBioAnalysis] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [writingStyle, setWritingStyle] = useState('balanced');
  const [bioLength, setBioLength] = useState('medium');
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [includeHumor, setIncludeHumor] = useState(true);
  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [interests, setInterests] = useState([]);

  const bioSteps = [
    { label: "Template Selection", description: "Choose a bio style that fits you" },
    { label: "Content Generation", description: "AI creates personalized content" },
    { label: "Optimization", description: "Enhance for maximum appeal" },
    { label: "Analysis & Preview", description: "Review and finalize your bio" }
  ];

  const bioTemplates = [
    {
      id: 'adventurous',
      title: 'Adventurous Explorer',
      description: 'Perfect for travel lovers and adventure seekers',
      example: "Adventure seeker with a passport full of stamps ✈️ Always planning my next hike or trying new cuisines. Looking for someone to share spontaneous weekend trips and late-night conversations about life's mysteries.",
      traits: ['adventurous', 'spontaneous', 'curious'],
      appeal: 87
    },
    {
      id: 'intellectual',
      title: 'Thoughtful Intellectual',
      description: 'Great for deep thinkers and book lovers',
      example: "Philosophy major turned tech consultant 📚 Love debating everything from existentialism to the best coffee brewing methods. Seeking someone who appreciates both deep conversations and comfortable silences.",
      traits: ['intellectual', 'thoughtful', 'curious'],
      appeal: 82
    },
    {
      id: 'creative',
      title: 'Creative Artist',
      description: 'Ideal for artists, musicians, and creative types',
      example: "Weekend painter, weekday dreamer 🎨 You'll find me at local galleries or jamming with friends. Looking for someone who appreciates art, music, and the beauty in everyday moments.",
      traits: ['creative', 'artistic', 'passionate'],
      appeal: 85
    },
    {
      id: 'professional',
      title: 'Driven Professional',
      description: 'Perfect for career-focused individuals',
      example: "Marketing director by day, yoga enthusiast by night 💼 Passionate about meaningful work and work-life balance. Seeking someone ambitious yet grounded, who values both success and simple pleasures.",
      traits: ['ambitious', 'balanced', 'successful'],
      appeal: 79
    },
    {
      id: 'humorous',
      title: 'Funny & Lighthearted',
      description: 'Great for those who love to laugh',
      example: "Professional joke-teller (okay, I'm an accountant) 😄 Warning: I will make dad jokes and I'm not sorry. Looking for someone who laughs at my terrible puns and makes even better ones.",
      traits: ['humorous', 'lighthearted', 'fun'],
      appeal: 91
    },
    {
      id: 'balanced',
      title: 'Well-Rounded',
      description: 'Perfect mix of all personality aspects',
      example: "Fitness enthusiast, foodie, and Netflix connoisseur 🏋️‍♀️ Equally comfortable hiking a trail or trying the new restaurant downtown. Looking for someone to share both adventures and cozy nights in.",
      traits: ['balanced', 'versatile', 'easygoing'],
      appeal: 88
    }
  ];

  const writingStyles = [
    { value: 'casual', label: 'Casual & Relaxed', description: 'Friendly and approachable tone' },
    { value: 'confident', label: 'Confident & Bold', description: 'Strong and assertive language' },
    { value: 'romantic', label: 'Romantic & Warm', description: 'Emotional and heartfelt expression' },
    { value: 'witty', label: 'Witty & Clever', description: 'Smart humor and wordplay' },
    { value: 'balanced', label: 'Balanced & Genuine', description: 'Natural and authentic voice' }
  ];

  const interestCategories = [
    { 
      category: 'Hobbies', 
      icon: <EmojiEmotions />, 
      options: ['Reading', 'Cooking', 'Gaming', 'Photography', 'Writing', 'Gardening', 'Crafts', 'Collecting']
    },
    { 
      category: 'Sports & Fitness', 
      icon: <Sports />, 
      options: ['Running', 'Yoga', 'Hiking', 'Cycling', 'Swimming', 'Rock Climbing', 'Basketball', 'Tennis']
    },
    { 
      category: 'Arts & Culture', 
      icon: <Palette />, 
      options: ['Music', 'Art', 'Theater', 'Museums', 'Concerts', 'Dancing', 'Movies', 'Literature']
    },
    { 
      category: 'Food & Drink', 
      icon: <Restaurant />, 
      options: ['Fine Dining', 'Cooking', 'Wine Tasting', 'Coffee', 'Craft Beer', 'Baking', 'Food Trucks', 'Farmers Markets']
    },
    { 
      category: 'Travel & Adventure', 
      icon: <Flight />, 
      options: ['Backpacking', 'Road Trips', 'International Travel', 'Camping', 'Beach Vacations', 'City Breaks', 'Adventure Sports']
    },
    { 
      category: 'Social & Lifestyle', 
      icon: <Favorite />, 
      options: ['Volunteering', 'Socializing', 'Nightlife', 'Networking', 'Community Events', 'Parties', 'Quiet Evenings']
    }
  ];

  useEffect(() => {
    if (userData?.assessmentResults) {
      // Extract personality traits and interests from assessment data
      const traits = extractPersonalityTraits(userData.assessmentResults);
      const userInterests = extractInterests(userData.assessmentResults);
      
      setPersonalityTraits(traits);
      setInterests(userInterests);
    }
  }, [userData]);

  const extractPersonalityTraits = (assessmentResults) => {
    // Extract traits from assessment results
    const traits = [];
    
    if (assessmentResults.personalityType?.includes('Extraverted')) {
      traits.push('outgoing', 'social', 'energetic');
    }
    if (assessmentResults.personalityType?.includes('Openness')) {
      traits.push('creative', 'curious', 'adventurous');
    }
    if (assessmentResults.personalityType?.includes('Conscientiousness')) {
      traits.push('organized', 'reliable', 'ambitious');
    }
    
    return traits.slice(0, 5); // Top 5 traits
  };

  const extractInterests = (assessmentResults) => {
    // Extract interests from assessment results
    const interests = [];
    
    // Example extraction logic
    if (assessmentResults.interests) {
      interests.push(...assessmentResults.interests.slice(0, 8));
    }
    
    return interests;
  };

  const generateBio = async (template) => {
    setIsAnalyzing(true);
    setCurrentStep(1);
    setSelectedTemplate(template);
    
    // Simulate AI bio generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const generatedBio = await generatePersonalizedBio(template);
    setCurrentBio(generatedBio);
    setOriginalBio(generatedBio);
    
    // Generate multiple suggestions
    const suggestions = await generateBioSuggestions(generatedBio);
    setBioSuggestions(suggestions);
    
    setIsAnalyzing(false);
    setCurrentStep(2);
  };

  const generatePersonalizedBio = async (template) => {
    // AI-powered bio generation based on template and user data
    const bioElements = {
      opener: generateOpener(template),
      personality: generatePersonalityDescription(),
      interests: generateInterestsDescription(),
      lookingFor: generateLookingForDescription(),
      closer: generateCloser(template)
    };
    
    let bio = `${bioElements.opener} ${bioElements.personality}`;
    
    if (bioLength !== 'short') {
      bio += ` ${bioElements.interests}`;
    }
    
    if (bioLength === 'long') {
      bio += ` ${bioElements.lookingFor}`;
    }
    
    bio += ` ${bioElements.closer}`;
    
    return bio;
  };

  const generateOpener = (template) => {
    const openers = {
      adventurous: [
        "Adventure seeker with a passport full of stories ✈️",
        "Always planning my next great escape 🗺️",
        "Life's too short for boring weekends 🏔️"
      ],
      intellectual: [
        "Philosophy major turned real-world problem solver 📚",
        "Professional overthinker with a love for deep conversations 🤔",
        "Bookworm who occasionally ventures into sunlight 📖"
      ],
      creative: [
        "Weekend warrior, weekday dreamer 🎨",
        "Artist at heart, [profession] by trade 🖌️",
        "Creating beautiful things in an ordinary world ✨"
      ],
      professional: [
        "[Job title] by day, [hobby] enthusiast by night 💼",
        "Building my empire one coffee at a time ☕",
        "Ambitious but never too busy for what matters 🚀"
      ],
      humorous: [
        "Professional joke-teller (okay, I'm a [profession]) 😄",
        "Warning: I will make dad jokes and I'm not sorry 🤷‍♂️",
        "Currently accepting applications for a laugh partner 😂"
      ],
      balanced: [
        "Fitness enthusiast, foodie, and Netflix connoisseur 🏋️‍♀️",
        "Equally comfortable hiking trails or trying new restaurants 🥾",
        "Living life one adventure at a time ⭐"
      ]
    };
    
    const templateOpeners = openers[template.id] || openers.balanced;
    return templateOpeners[Math.floor(Math.random() * templateOpeners.length)];
  };

  const generatePersonalityDescription = () => {
    const descriptions = [
      "I believe in authentic connections and meaningful conversations.",
      "Life's better when shared with someone who gets your sense of humor.",
      "Looking for someone who appreciates both spontaneity and quiet moments.",
      "I value honesty, kindness, and the ability to laugh at ourselves.",
      "Seeking someone who's passionate about their interests and curious about mine."
    ];
    
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  const generateInterestsDescription = () => {
    if (interests.length === 0) return "Always eager to try new things and meet new people.";
    
    const shuffled = [...interests].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    return `You'll find me ${selected.join(', ')} or discovering something new in the city.`;
  };

  const generateLookingForDescription = () => {
    const lookingFor = [
      "Looking for someone to share both adventures and cozy nights in.",
      "Seeking a partner in crime for weekend explorations and deep conversations.",
      "Hoping to find someone who challenges me to be my best self.",
      "Looking for genuine connection with someone who values authenticity.",
      "Seeking someone who's ready for a real relationship built on trust and laughter."
    ];
    
    return lookingFor[Math.floor(Math.random() * lookingFor.length)];
  };

  const generateCloser = (template) => {
    const closers = {
      adventurous: [
        "Let's plan our next adventure together! 🌟",
        "Ready to explore the world with someone special? 🌍",
        "Life's an adventure - let's share it! ⚡"
      ],
      intellectual: [
        "Let's debate the meaning of life over coffee ☕",
        "Ready for conversations that last until sunrise? 🌅",
        "Seeking my intellectual equal and emotional match 💭"
      ],
      creative: [
        "Let's create something beautiful together ❤️",
        "Art is better when shared with someone special 🎭",
        "Ready to be my muse and let me be yours? 🌈"
      ],
      professional: [
        "Let's build something amazing together 💪",
        "Success is sweeter when shared 🥂",
        "Ready to power couple our way through life? 🔥"
      ],
      humorous: [
        "Swipe right if you're ready to laugh until it hurts 😆",
        "Let's make terrible jokes and great memories together 🎉",
        "Warning: Side effects may include excessive happiness 😊"
      ],
      balanced: [
        "Let's write our story together 📖",
        "Ready for whatever adventure comes next? 🎯",
        "Looking forward to meeting my favorite person ⭐"
      ]
    };
    
    const templateClosers = closers[template.id] || closers.balanced;
    return templateClosers[Math.floor(Math.random() * templateClosers.length)];
  };

  const generateBioSuggestions = async (bio) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      {
        type: 'length',
        title: 'Optimize Length',
        suggestion: 'Consider shortening to 2-3 sentences for better engagement',
        impact: '+12% response rate',
        priority: 'high'
      },
      {
        type: 'emoji',
        title: 'Add Personality',
        suggestion: 'Include 1-2 relevant emojis to show personality',
        impact: '+8% matches',
        priority: 'medium'
      },
      {
        type: 'call_to_action',
        title: 'Stronger Ending',
        suggestion: 'End with a conversation starter or question',
        impact: '+15% messages',
        priority: 'high'
      },
      {
        type: 'specificity',
        title: 'Be More Specific',
        suggestion: 'Replace generic interests with specific examples',
        impact: '+10% quality matches',
        priority: 'medium'
      }
    ];
  };

  const analyzeBio = async (bio) => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analysis = {
      overallScore: Math.round(Math.random() * 20 + 75), // 75-95
      metrics: {
        readability: Math.round(Math.random() * 15 + 80),
        personality: Math.round(Math.random() * 20 + 75),
        appeal: Math.round(Math.random() * 15 + 80),
        uniqueness: Math.round(Math.random() * 25 + 70),
        engagement: Math.round(Math.random() * 20 + 75)
      },
      strengths: [
        'Great personality showcase',
        'Clear interests mentioned',
        'Positive and approachable tone'
      ],
      improvements: [
        'Could be more specific about hobbies',
        'Add a conversation starter',
        'Consider shortening slightly'
      ],
      estimatedMatches: Math.round(Math.random() * 50 + 100), // 100-150
      estimatedMessages: Math.round(Math.random() * 30 + 45) // 45-75
    };
    
    setBioAnalysis(analysis);
    setIsAnalyzing(false);
    setCurrentStep(3);
  };

  const optimizeBio = async (optimizationType) => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let optimizedBio = currentBio;
    
    switch (optimizationType) {
      case 'length':
        optimizedBio = optimizedBio.split('.').slice(0, 2).join('.') + '.';
        break;
      case 'emoji':
        optimizedBio = optimizedBio.replace(/\s/g, (match, offset, string) => {
          if (Math.random() < 0.1 && offset > 10) return ' ✨ ';
          return match;
        });
        break;
      case 'call_to_action':
        optimizedBio += ' What\'s your favorite way to spend a weekend?';
        break;
      case 'specificity':
        optimizedBio = optimizedBio.replace(/reading/gi, 'mystery novels');
        optimizedBio = optimizedBio.replace(/music/gi, 'jazz and indie rock');
        break;
    }
    
    setCurrentBio(optimizedBio);
    setIsAnalyzing(false);
    
    // Re-analyze the optimized bio
    await analyzeBio(optimizedBio);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleStyleChange = (style) => {
    setWritingStyle(style);
    if (selectedTemplate) {
      generateBio(selectedTemplate);
    }
  };

  const handleNext = () => {
    if (!currentBio.trim()) {
      alert('Please create a bio before proceeding.');
      return;
    }
    
    const bioData = {
      bio: currentBio,
      originalBio,
      selectedTemplate,
      writingStyle,
      bioLength,
      analysis: bioAnalysis,
      suggestions: bioSuggestions,
      settings: {
        includeEmojis,
        includeHumor,
        personalityTraits,
        interests
      }
    };
    
    onNext({ profileBio: bioData });
  };

  const renderTemplateSelection = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Choose Your Bio Style
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Select a template that matches your personality. Our AI will personalize it for you.
      </Typography>
      
      <Grid container spacing={3}>
        {bioTemplates.map((template) => (
          <Grid item xs={12} md={6} key={template.id}>
            <Card 
              sx={{ 
                cursor: 'pointer',
                border: selectedTemplate?.id === template.id ? '2px solid' : '1px solid',
                borderColor: selectedTemplate?.id === template.id ? 'primary.main' : 'divider',
                '&:hover': { borderColor: 'primary.main' }
              }}
              onClick={() => generateBio(template)}
            >
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Typography variant="h6">{template.title}</Typography>
                  <Chip 
                    label={`${template.appeal}% Appeal`} 
                    color="primary" 
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="textSecondary" mb={2}>
                  {template.description}
                </Typography>
                
                <Box mb={2}>
                  <Typography variant="body2" 
                    sx={{ 
                      fontStyle: 'italic', 
                      bgcolor: 'grey.50', 
                      p: 1.5, 
                      borderRadius: 1 
                    }}
                  >
                    "{template.example}"
                  </Typography>
                </Box>
                
                <Box display="flex" gap={0.5} flexWrap="wrap">
                  {template.traits.map((trait, index) => (
                    <Chip key={index} label={trait} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderBioEditor = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Your Generated Bio
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Edit your bio or use our AI suggestions to optimize it further.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            multiline
            rows={6}
            value={currentBio}
            onChange={(e) => setCurrentBio(e.target.value)}
            placeholder="Your bio will appear here..."
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <Box display="flex" gap={1} mb={2}>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={() => generateBio(selectedTemplate)}
            >
              Regenerate
            </Button>
            <Button
              variant="outlined"
              startIcon={<Analytics />}
              onClick={() => analyzeBio(currentBio)}
            >
              Analyze Bio
            </Button>
            <Button
              variant="outlined"
              startIcon={<Visibility />}
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Tune sx={{ mr: 1 }} />
                Customization
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Writing Style
                </Typography>
                <Grid container spacing={1}>
                  {writingStyles.map((style) => (
                    <Grid item xs={12} key={style.value}>
                      <Button
                        variant={writingStyle === style.value ? 'contained' : 'outlined'}
                        size="small"
                        fullWidth
                        onClick={() => handleStyleChange(style.value)}
                      >
                        {style.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  Bio Length
                </Typography>
                <Button
                  variant={bioLength === 'short' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setBioLength('short')}
                  sx={{ mr: 1 }}
                >
                  Short
                </Button>
                <Button
                  variant={bioLength === 'medium' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setBioLength('medium')}
                  sx={{ mr: 1 }}
                >
                  Medium
                </Button>
                <Button
                  variant={bioLength === 'long' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setBioLength('long')}
                >
                  Long
                </Button>
              </Box>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={includeEmojis}
                    onChange={(e) => setIncludeEmojis(e.target.checked)}
                  />
                }
                label="Include Emojis"
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={includeHumor}
                    onChange={(e) => setIncludeHumor(e.target.checked)}
                  />
                }
                label="Include Humor"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* AI Suggestions */}
      {bioSuggestions.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            <SmartToy sx={{ mr: 1 }} />
            AI Optimization Suggestions
          </Typography>
          
          <Grid container spacing={2}>
            {bioSuggestions.map((suggestion, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                      <Typography variant="subtitle1">{suggestion.title}</Typography>
                      <Chip 
                        label={suggestion.priority} 
                        color={suggestion.priority === 'high' ? 'error' : 'warning'}
                        size="small"
                      />
                    </Box>
                    
                    <Typography variant="body2" color="textSecondary" mb={2}>
                      {suggestion.suggestion}
                    </Typography>
                    
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Chip label={suggestion.impact} color="success" size="small" />
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => optimizeBio(suggestion.type)}
                        startIcon={<AutoFixHigh />}
                      >
                        Apply
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );

  const renderAnalysis = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Bio Analysis Report
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Our AI has analyzed your bio and provides insights on its effectiveness.
      </Typography>
      
      {bioAnalysis && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6">Overall Score</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="h4" color="primary">
                      {bioAnalysis.overallScore}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /100
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={bioAnalysis.overallScore}
                  sx={{ height: 8, borderRadius: 4, mb: 3 }}
                />
                
                <Grid container spacing={2}>
                  {Object.entries(bioAnalysis.metrics).map(([metric, score]) => (
                    <Grid item xs={6} key={metric}>
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          {metric.charAt(0).toUpperCase() + metric.slice(1)}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <LinearProgress
                            variant="determinate"
                            value={score}
                            sx={{ flex: 1, height: 6, borderRadius: 3 }}
                          />
                          <Typography variant="body2">{score}%</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Projected Performance
                </Typography>
                
                <Box mb={2}>
                  <Typography variant="body2" color="textSecondary">
                    Estimated weekly matches
                  </Typography>
                  <Typography variant="h5" color="primary">
                    {bioAnalysis.estimatedMatches}
                  </Typography>
                </Box>
                
                <Box mb={2}>
                  <Typography variant="body2" color="textSecondary">
                    Estimated messages received
                  </Typography>
                  <Typography variant="h5" color="success.main">
                    {bioAnalysis.estimatedMessages}
                  </Typography>
                </Box>
                
                <Alert severity="info" sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    Your bio performs {bioAnalysis.overallScore > 85 ? 'excellent' : 'well'} compared to similar profiles
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="success.main">
                      <Check sx={{ mr: 1 }} />
                      Strengths
                    </Typography>
                    {bioAnalysis.strengths.map((strength, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                        • {strength}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="warning.main">
                      <Lightbulb sx={{ mr: 1 }} />
                      Areas for Improvement
                    </Typography>
                    {bioAnalysis.improvements.map((improvement, index) => (
                      <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                        • {improvement}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );

  const renderPreview = () => (
    <Dialog open={showPreview} onClose={() => setShowPreview(false)} maxWidth="sm" fullWidth>
      <DialogTitle>Profile Preview</DialogTitle>
      <DialogContent>
        <Box textAlign="center" mb={3}>
          <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}>
            {userData?.name?.charAt(0) || 'U'}
          </Avatar>
          <Typography variant="h6">{userData?.name || 'Your Name'}</Typography>
          <Typography variant="body2" color="textSecondary">
            {userData?.age || '25'} • {userData?.location || 'Your City'}
          </Typography>
        </Box>
        
        <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {currentBio}
          </Typography>
        </Paper>
        
        <Box mt={2} textAlign="center">
          <Chip label="✨ This is how your bio will appear" color="primary" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowPreview(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            <Edit color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Bio Writing Assistant
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            AI-Powered Bio Creation & Optimization
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Create a compelling bio that showcases your personality and attracts quality matches
          </Typography>
        </Box>

        {/* Progress Stepper */}
        <Box maxWidth={600} mx="auto" mb={4}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {bioSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="subtitle2">{step.label}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {step.description}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Content */}
        {isAnalyzing ? (
          <Box textAlign="center" py={8}>
            <Psychology sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              AI is crafting your perfect bio...
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={3}>
              This may take a moment while we analyze your personality and preferences
            </Typography>
            <LinearProgress sx={{ maxWidth: 400, mx: 'auto' }} />
          </Box>
        ) : (
          <Box>
            {currentStep === 0 && renderTemplateSelection()}
            {currentStep === 1 && renderBioEditor()}
            {currentStep === 2 && renderBioEditor()}
            {currentStep === 3 && renderAnalysis()}
          </Box>
        )}

        {/* Preview Dialog */}
        {renderPreview()}

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back to Photos
          </Button>
          
          <Box display="flex" gap={2}>
            {currentBio && (
              <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
                {currentBio.length} characters
              </Typography>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!currentBio.trim()}
              startIcon={<Check />}
            >
              Continue to Profile Score
            </Button>
          </Box>
        </Box>

        {/* Tips */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Pro tip: Profiles with personalized bios get 4x more meaningful conversations
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BioWritingAssistant;