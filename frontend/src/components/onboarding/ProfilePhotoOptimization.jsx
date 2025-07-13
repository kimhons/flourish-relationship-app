import React, { useState, useRef, useCallback } from 'react';
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
  Avatar,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  Switch,
  FormControlLabel,
  Badge,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import {
  PhotoCamera,
  Upload,
  AutoFixHigh,
  Star,
  Check,
  Close,
  CropFree,
  Tune,
  Brightness4,
  Contrast,
  Palette,
  Face,
  Visibility,
  VerifiedUser,
  TrendingUp,
  Psychology,
  FlashOn,
  FilterVintage,
  Crop,
  RotateLeft,
  RotateRight,
  Flip
} from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const ProfilePhotoOptimization = ({ onNext, onBack }) => {
  const [photos, setPhotos] = useState([]);
  const [primaryPhoto, setPrimaryPhoto] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [editorSettings, setEditorSettings] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    crop: { x: 0, y: 0, width: 100, height: 100 },
    rotation: 0,
    flip: false
  });

  const fileInputRef = useRef(null);

  const profileOptimizationSteps = [
    {
      label: "Upload Photos",
      description: "Add 3-6 high-quality photos of yourself",
      icon: <Upload />
    },
    {
      label: "AI Analysis",
      description: "Our AI analyzes your photos for optimization",
      icon: <Psychology />
    },
    {
      label: "Optimization",
      description: "Apply AI-powered enhancements and filters",
      icon: <AutoFixHigh />
    },
    {
      label: "Selection",
      description: "Choose your best photos and primary image",
      icon: <Star />
    },
    {
      label: "Verification",
      description: "Verify your identity for trust badge",
      icon: <VerifiedUser />
    }
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const newPhotos = acceptedFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      optimized: false,
      score: 0,
      suggestions: []
    }));
    
    setPhotos(prev => [...prev, ...newPhotos]);
    
    // Auto-analyze new photos
    if (newPhotos.length > 0) {
      analyzePhotos([...photos, ...newPhotos]);
    }
  }, [photos]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 6
  });

  const analyzePhotos = async (photosToAnalyze) => {
    setIsAnalyzing(true);
    setCurrentStep(1);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const analysisResults = photosToAnalyze.map(photo => ({
      id: photo.id,
      score: Math.round(Math.random() * 30 + 70), // 70-100 score
      suggestions: generatePhotoSuggestions(),
      technicalAnalysis: generateTechnicalAnalysis(),
      psychologicalAnalysis: generatePsychologicalAnalysis(),
      attractivenessScore: Math.round(Math.random() * 20 + 80),
      trustworthinessScore: Math.round(Math.random() * 15 + 85),
      approachabilityScore: Math.round(Math.random() * 25 + 75)
    }));
    
    setAnalysisResults(analysisResults);
    setOptimizationSuggestions(generateOptimizationSuggestions(analysisResults));
    setPhotos(prev => prev.map(photo => {
      const analysis = analysisResults.find(a => a.id === photo.id);
      return { ...photo, ...analysis };
    }));
    
    setIsAnalyzing(false);
    setCurrentStep(2);
  };

  const generatePhotoSuggestions = () => {
    const suggestions = [
      { type: 'lighting', message: 'Increase brightness by 15% for better facial visibility', priority: 'high' },
      { type: 'angle', message: 'Try a slightly lower camera angle for more flattering perspective', priority: 'medium' },
      { type: 'background', message: 'Consider a less cluttered background', priority: 'low' },
      { type: 'smile', message: 'Your genuine smile increases attractiveness by 23%', priority: 'high' },
      { type: 'eye_contact', message: 'Direct eye contact increases trustworthiness', priority: 'medium' },
      { type: 'posture', message: 'Confident posture enhances perceived attractiveness', priority: 'medium' },
      { type: 'color', message: 'Wearing blue increases perceived trustworthiness by 12%', priority: 'low' }
    ];
    
    return suggestions.sort(() => Math.random() - 0.5).slice(0, 3);
  };

  const generateTechnicalAnalysis = () => ({
    resolution: { score: 85, message: 'Good resolution, suitable for profile display' },
    lighting: { score: 78, message: 'Lighting could be improved for better facial definition' },
    focus: { score: 92, message: 'Excellent focus and clarity' },
    composition: { score: 88, message: 'Well-composed with good face positioning' },
    quality: { score: 85, message: 'High-quality image with minimal noise' }
  });

  const generatePsychologicalAnalysis = () => ({
    genuineSmile: { detected: true, impact: '+23% attractiveness' },
    eyeContact: { detected: true, impact: '+18% trustworthiness' },
    openPosture: { detected: true, impact: '+15% approachability' },
    facialSymmetry: { score: 87, impact: '+12% attractiveness' },
    microExpressions: { positivity: 89, confidence: 82, warmth: 91 }
  });

  const generateOptimizationSuggestions = (results) => {
    const suggestions = [
      {
        id: 1,
        type: 'enhancement',
        title: 'Brightness Optimization',
        description: 'Increase brightness by 12% to enhance facial features',
        impact: '+8% attractiveness score',
        difficulty: 'easy',
        autoApply: true
      },
      {
        id: 2,
        type: 'filter',
        title: 'Natural Warmth Filter',
        description: 'Apply subtle warm filter to increase approachability',
        impact: '+6% approachability score',
        difficulty: 'easy',
        autoApply: false
      },
      {
        id: 3,
        type: 'crop',
        title: 'Golden Ratio Crop',
        description: 'Crop to golden ratio proportions for better composition',
        impact: '+5% overall score',
        difficulty: 'medium',
        autoApply: false
      },
      {
        id: 4,
        type: 'background',
        title: 'Background Blur',
        description: 'Add subtle background blur to focus on your face',
        impact: '+7% focus score',
        difficulty: 'medium',
        autoApply: false
      }
    ];
    
    return suggestions;
  };

  const applyOptimization = async (photoId, optimization) => {
    // Simulate optimization processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setPhotos(prev => prev.map(photo => {
      if (photo.id === photoId) {
        return {
          ...photo,
          optimized: true,
          score: Math.min(photo.score + Math.random() * 10 + 5, 100),
          optimizations: [...(photo.optimizations || []), optimization]
        };
      }
      return photo;
    }));
  };

  const openPhotoEditor = (photo) => {
    setSelectedPhoto(photo);
    setShowEditor(true);
  };

  const saveEditedPhoto = () => {
    // Apply editor settings to photo
    setPhotos(prev => prev.map(photo => {
      if (photo.id === selectedPhoto.id) {
        return {
          ...photo,
          editedSettings: { ...editorSettings },
          optimized: true,
          score: Math.min(photo.score + 5, 100)
        };
      }
      return photo;
    }));
    
    setShowEditor(false);
    setSelectedPhoto(null);
  };

  const setPrimary = (photoId) => {
    setPrimaryPhoto(photoId);
  };

  const removePhoto = (photoId) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
    if (primaryPhoto === photoId) {
      setPrimaryPhoto(null);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    return 'error';
  };

  const getScoreIcon = (score) => {
    if (score >= 90) return <Star color="success" />;
    if (score >= 75) return <TrendingUp color="warning" />;
    return <AutoFixHigh color="error" />;
  };

  const handleNext = () => {
    if (photos.length === 0) {
      alert('Please upload at least one photo before proceeding.');
      return;
    }
    
    const photoData = {
      photos: photos.map(photo => ({
        id: photo.id,
        score: photo.score,
        isPrimary: photo.id === primaryPhoto,
        optimized: photo.optimized,
        suggestions: photo.suggestions
      })),
      primaryPhoto,
      analysisResults,
      optimizationSuggestions
    };
    
    onNext({ profilePhotos: photoData });
  };

  const renderPhotoUpload = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Upload Your Photos
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Add 3-6 high-quality photos. Our AI will analyze and optimize them for maximum appeal.
      </Typography>
      
      <Paper
        {...getRootProps()}
        sx={{
          p: 4,
          textAlign: 'center',
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'grey.300',
          bgcolor: isDragActive ? 'primary.50' : 'grey.50',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'primary.50'
          }
        }}
      >
        <input {...getInputProps()} />
        <Upload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {isDragActive ? 'Drop photos here' : 'Drag & drop photos or click to select'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          JPEG, PNG, WebP up to 10MB each. Maximum 6 photos.
        </Typography>
      </Paper>
      
      <Box mt={2} display="flex" gap={1} flexWrap="wrap">
        <Chip label="✨ AI-Powered Analysis" color="primary" variant="outlined" />
        <Chip label="🔒 Privacy Protected" color="secondary" variant="outlined" />
        <Chip label="⚡ Instant Optimization" color="success" variant="outlined" />
      </Box>
    </Box>
  );

  const renderPhotoGallery = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Your Photos ({photos.length}/6)
      </Typography>
      
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={12} md={6} key={photo.id}>
            <Card elevation={photo.id === primaryPhoto ? 4 : 1}>
              <Box position="relative">
                {photo.id === primaryPhoto && (
                  <Badge
                    badgeContent={<Star sx={{ fontSize: 16 }} />}
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 1
                    }}
                  />
                )}
                
                <img
                  src={photo.preview}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover'
                  }}
                />
                
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  p={1}
                  display="flex"
                  gap={1}
                >
                  <IconButton
                    size="small"
                    onClick={() => openPhotoEditor(photo)}
                    sx={{ bgcolor: 'rgba(0,0,0,0.5)', color: 'white' }}
                  >
                    <Tune />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => removePhoto(photo.id)}
                    sx={{ bgcolor: 'rgba(0,0,0,0.5)', color: 'white' }}
                  >
                    <Close />
                  </IconButton>
                </Box>
              </Box>
              
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Box display="flex" alignItems="center" gap={1}>
                    {getScoreIcon(photo.score)}
                    <Typography variant="h6">
                      Score: {photo.score}/100
                    </Typography>
                  </Box>
                  <Chip
                    label={photo.optimized ? 'Optimized' : 'Original'}
                    color={photo.optimized ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={photo.score}
                  color={getScoreColor(photo.score)}
                  sx={{ mb: 2, height: 8, borderRadius: 4 }}
                />
                
                {photo.suggestions && photo.suggestions.length > 0 && (
                  <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>
                      AI Suggestions:
                    </Typography>
                    {photo.suggestions.slice(0, 2).map((suggestion, index) => (
                      <Typography key={index} variant="body2" color="textSecondary">
                        • {suggestion.message}
                      </Typography>
                    ))}
                  </Box>
                )}
                
                <Box display="flex" gap={1}>
                  <Button
                    variant={photo.id === primaryPhoto ? 'contained' : 'outlined'}
                    size="small"
                    onClick={() => setPrimary(photo.id)}
                    startIcon={<Star />}
                  >
                    {photo.id === primaryPhoto ? 'Primary' : 'Set Primary'}
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => openPhotoEditor(photo)}
                    startIcon={<AutoFixHigh />}
                  >
                    Optimize
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderOptimizationSuggestions = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        AI Optimization Suggestions
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={3}>
        Our AI has analyzed your photos and suggests these improvements:
      </Typography>
      
      {optimizationSuggestions.map((suggestion) => (
        <Card key={suggestion.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
              <Box flex={1}>
                <Typography variant="subtitle1" gutterBottom>
                  {suggestion.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={1}>
                  {suggestion.description}
                </Typography>
                <Box display="flex" gap={1} alignItems="center">
                  <Chip
                    label={suggestion.impact}
                    color="success"
                    size="small"
                  />
                  <Chip
                    label={suggestion.difficulty}
                    color={suggestion.difficulty === 'easy' ? 'success' : 'warning'}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Box>
              
              <Box display="flex" gap={1}>
                {suggestion.autoApply && (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => applyOptimization(photos[0]?.id, suggestion)}
                    startIcon={<FlashOn />}
                  >
                    Auto-Apply
                  </Button>
                )}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => openPhotoEditor(photos[0])}
                  startIcon={<Tune />}
                >
                  Manual Edit
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderPhotoEditor = () => (
    <Dialog open={showEditor} onClose={() => setShowEditor(false)} maxWidth="md" fullWidth>
      <DialogTitle>
        Photo Editor
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <img
                src={selectedPhoto?.preview}
                alt="Edit"
                style={{
                  width: '100%',
                  maxWidth: 300,
                  height: 'auto',
                  borderRadius: 8,
                  filter: `brightness(${100 + editorSettings.brightness}%) contrast(${100 + editorSettings.contrast}%) saturate(${100 + editorSettings.saturation}%)`
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Adjustments
              </Typography>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  <Brightness4 sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Brightness
                </Typography>
                <Slider
                  value={editorSettings.brightness}
                  onChange={(_, value) => setEditorSettings(prev => ({ ...prev, brightness: value }))}
                  min={-50}
                  max={50}
                  step={5}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  <Contrast sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Contrast
                </Typography>
                <Slider
                  value={editorSettings.contrast}
                  onChange={(_, value) => setEditorSettings(prev => ({ ...prev, contrast: value }))}
                  min={-50}
                  max={50}
                  step={5}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
              
              <Box mb={3}>
                <Typography variant="subtitle2" gutterBottom>
                  <Palette sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Saturation
                </Typography>
                <Slider
                  value={editorSettings.saturation}
                  onChange={(_, value) => setEditorSettings(prev => ({ ...prev, saturation: value }))}
                  min={-50}
                  max={50}
                  step={5}
                  marks
                  valueLabelDisplay="auto"
                />
              </Box>
              
              <Box display="flex" gap={1}>
                <Button
                  variant="outlined"
                  startIcon={<RotateLeft />}
                  onClick={() => setEditorSettings(prev => ({ ...prev, rotation: prev.rotation - 90 }))}
                >
                  Rotate Left
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<RotateRight />}
                  onClick={() => setEditorSettings(prev => ({ ...prev, rotation: prev.rotation + 90 }))}
                >
                  Rotate Right
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowEditor(false)}>Cancel</Button>
        <Button onClick={saveEditedPhoto} variant="contained">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            <PhotoCamera color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Profile Photo Optimization
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            AI-Powered Photo Analysis & Enhancement
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Upload your photos and let our AI optimize them for maximum appeal
          </Typography>
        </Box>

        {/* Progress Stepper */}
        <Box maxWidth={800} mx="auto" mb={4}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {profileOptimizationSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel icon={step.icon}>
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
        <Grid container spacing={4}>
          <Grid item xs={12} md={photos.length > 0 ? 8 : 12}>
            {photos.length === 0 ? renderPhotoUpload() : renderPhotoGallery()}
          </Grid>
          
          {photos.length > 0 && (
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <Psychology color="primary" sx={{ mr: 1 }} />
                    AI Analysis
                  </Typography>
                  
                  {isAnalyzing ? (
                    <Box>
                      <LinearProgress sx={{ mb: 2 }} />
                      <Typography variant="body2" color="textSecondary">
                        Analyzing photos with advanced AI...
                      </Typography>
                    </Box>
                  ) : (
                    <Box>
                      <Typography variant="body2" color="textSecondary" mb={2}>
                        {photos.length} photos analyzed
                      </Typography>
                      
                      <Box mb={2}>
                        <Typography variant="subtitle2" gutterBottom>
                          Overall Score
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <LinearProgress
                            variant="determinate"
                            value={Math.round(photos.reduce((sum, p) => sum + p.score, 0) / photos.length)}
                            sx={{ flex: 1, height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="body2" fontWeight="bold">
                            {Math.round(photos.reduce((sum, p) => sum + p.score, 0) / photos.length)}/100
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Alert severity="info" sx={{ mb: 2 }}>
                        <Typography variant="body2">
                          AI detected {photos.filter(p => p.score >= 85).length} high-quality photos
                        </Typography>
                      </Alert>
                      
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => analyzePhotos(photos)}
                        startIcon={<AutoFixHigh />}
                      >
                        Re-analyze Photos
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>

        {/* Optimization Suggestions */}
        {optimizationSuggestions.length > 0 && (
          <Box mt={4}>
            {renderOptimizationSuggestions()}
          </Box>
        )}

        {/* Photo Editor */}
        {renderPhotoEditor()}

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back
          </Button>
          
          <Box display="flex" gap={2}>
            <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
              {photos.length} photo{photos.length !== 1 ? 's' : ''} uploaded
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={photos.length === 0}
              startIcon={<Check />}
            >
              Continue to Bio
            </Button>
          </Box>
        </Box>

        {/* Tips */}
        <Box mt={3} textAlign="center">
          <Typography variant="caption" color="textSecondary">
            💡 Pro tip: High-quality photos with good lighting get 3x more matches
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePhotoOptimization;