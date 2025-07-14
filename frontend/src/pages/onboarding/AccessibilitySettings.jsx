import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Grid,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Avatar,
  Badge,
  IconButton,
  Tooltip,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  FormGroup,
  Checkbox,
  RadioGroup,
  Radio,
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Accessibility,
  Visibility,
  VisibilityOff,
  VolumeUp,
  VolumeOff,
  VolumeDown,
  Vibration,
  Settings,
  Tune,
  Palette,
  ColorLens,
  FormatSize,
  TextFields,
  Translate,
  Language,
  Hearing,
  HearingDisabled,
  TouchApp,
  Gesture,
  Mouse,
  Keyboard,
  PhoneAndroid,
  Tablet,
  Computer,
  Watch,
  HighContrast,
  Contrast,
  Brightness1,
  Brightness2,
  Brightness3,
  Brightness4,
  Brightness5,
  Brightness6,
  Brightness7,
  BrightnessHigh,
  BrightnessLow,
  BrightnessMedium,
  ZoomIn,
  ZoomOut,
  ZoomOutMap,
  Fullscreen,
  FullscreenExit,
  Speed,
  SlowMotionVideo,
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  Repeat,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Stop,
  VoiceOverOff,
  RecordVoiceOver,
  SpeakerPhone,
  Mic,
  MicOff,
  Closed,
  ClosedCaption,
  ClosedCaptionOff,
  Subtitles,
  SubtitlesOff,
  ExpandMore,
  Help,
  HelpOutline,
  Info,
  CheckCircle,
  Warning,
  Error,
  Clear,
  Edit,
  Save,
  Cancel,
  Preview,
  Refresh,
  RestoreFromTrash,
  RestorePage,
  SettingsBackupRestore
} from '@mui/icons-material';

const AccessibilitySettings = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [previewMode, setPreviewMode] = useState(false);
  
  const [visualSettings, setVisualSettings] = useState({
    highContrast: false,
    largeText: false,
    fontSize: 16,
    fontWeight: 'normal',
    colorBlindSupport: false,
    colorScheme: 'system',
    reducedMotion: false,
    screenReader: false,
    magnification: 1.0,
    cursorSize: 'normal',
    focusIndicator: true,
    underlineLinks: true
  });

  const [audioSettings, setAudioSettings] = useState({
    soundEnabled: true,
    volume: 70,
    voiceOver: false,
    audioDescriptions: false,
    speechRate: 1.0,
    speechPitch: 1.0,
    soundEffects: true,
    hapticFeedback: true,
    captionsEnabled: false,
    audioContrast: false
  });

  const [motorSettings, setMotorSettings] = useState({
    singleTapMode: false,
    longPressDelay: 500,
    doubleTapTimeout: 300,
    swipeThreshold: 50,
    buttonSize: 'normal',
    touchAssist: false,
    voiceNavigation: false,
    eyeTracking: false,
    switchControl: false,
    dwellTime: 1000
  });

  const [cognitiveSettings, setCognitiveSettings] = useState({
    simplifiedInterface: false,
    reducedComplexity: false,
    memoryAids: false,
    timeoutWarnings: true,
    sessionLength: 30,
    autoSave: true,
    confirmActions: true,
    guidedNavigation: false,
    focusMode: false,
    distractionFree: false
  });

  const [languageSettings, setLanguageSettings] = useState({
    language: 'en',
    region: 'US',
    readingDirection: 'ltr',
    textToSpeech: false,
    translationAssist: false,
    simplifiedLanguage: false,
    pictographs: false,
    signLanguage: false
  });

  const [testDialog, setTestDialog] = useState(false);
  const [resetDialog, setResetDialog] = useState(false);

  const updateVisualSetting = (setting, value) => {
    setVisualSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const updateAudioSetting = (setting, value) => {
    setAudioSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const updateMotorSetting = (setting, value) => {
    setMotorSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const updateCognitiveSetting = (setting, value) => {
    setCognitiveSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const updateLanguageSetting = (setting, value) => {
    setLanguageSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleResetSettings = () => {
    setVisualSettings({
      highContrast: false,
      largeText: false,
      fontSize: 16,
      fontWeight: 'normal',
      colorBlindSupport: false,
      colorScheme: 'system',
      reducedMotion: false,
      screenReader: false,
      magnification: 1.0,
      cursorSize: 'normal',
      focusIndicator: true,
      underlineLinks: true
    });
    setAudioSettings({
      soundEnabled: true,
      volume: 70,
      voiceOver: false,
      audioDescriptions: false,
      speechRate: 1.0,
      speechPitch: 1.0,
      soundEffects: true,
      hapticFeedback: true,
      captionsEnabled: false,
      audioContrast: false
    });
    setMotorSettings({
      singleTapMode: false,
      longPressDelay: 500,
      doubleTapTimeout: 300,
      swipeThreshold: 50,
      buttonSize: 'normal',
      touchAssist: false,
      voiceNavigation: false,
      eyeTracking: false,
      switchControl: false,
      dwellTime: 1000
    });
    setCognitiveSettings({
      simplifiedInterface: false,
      reducedComplexity: false,
      memoryAids: false,
      timeoutWarnings: true,
      sessionLength: 30,
      autoSave: true,
      confirmActions: true,
      guidedNavigation: false,
      focusMode: false,
      distractionFree: false
    });
    setResetDialog(false);
  };

  const renderVisualSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Visibility sx={{ mr: 1 }} />
        Visual Accessibility
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Display Settings
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={visualSettings.highContrast}
                    onChange={(e) => updateVisualSetting('highContrast', e.target.checked)}
                  />
                }
                label="High Contrast Mode"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={visualSettings.largeText}
                    onChange={(e) => updateVisualSetting('largeText', e.target.checked)}
                  />
                }
                label="Large Text"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Font Size: {visualSettings.fontSize}px
              </Typography>
              <Slider
                value={visualSettings.fontSize}
                onChange={(e, value) => updateVisualSetting('fontSize', value)}
                min={12}
                max={24}
                step={1}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Font Weight</InputLabel>
                <Select
                  value={visualSettings.fontWeight}
                  onChange={(e) => updateVisualSetting('fontWeight', e.target.value)}
                >
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="bold">Bold</MenuItem>
                  <MenuItem value="bolder">Extra Bold</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Color Scheme</InputLabel>
                <Select
                  value={visualSettings.colorScheme}
                  onChange={(e) => updateVisualSetting('colorScheme', e.target.value)}
                >
                  <MenuItem value="system">System Default</MenuItem>
                  <MenuItem value="light">Light Mode</MenuItem>
                  <MenuItem value="dark">Dark Mode</MenuItem>
                  <MenuItem value="contrast">High Contrast</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Vision Support
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={visualSettings.colorBlindSupport}
                    onChange={(e) => updateVisualSetting('colorBlindSupport', e.target.checked)}
                  />
                }
                label="Color Blind Support"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={visualSettings.reducedMotion}
                    onChange={(e) => updateVisualSetting('reducedMotion', e.target.checked)}
                  />
                }
                label="Reduce Motion"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={visualSettings.screenReader}
                    onChange={(e) => updateVisualSetting('screenReader', e.target.checked)}
                  />
                }
                label="Screen Reader Compatible"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Magnification: {visualSettings.magnification}x
              </Typography>
              <Slider
                value={visualSettings.magnification}
                onChange={(e, value) => updateVisualSetting('magnification', value)}
                min={1.0}
                max={3.0}
                step={0.1}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth>
                <InputLabel>Cursor Size</InputLabel>
                <Select
                  value={visualSettings.cursorSize}
                  onChange={(e) => updateVisualSetting('cursorSize', e.target.value)}
                >
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra-large">Extra Large</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAudioSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Hearing sx={{ mr: 1 }} />
        Audio Accessibility
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Sound Settings
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.soundEnabled}
                    onChange={(e) => updateAudioSetting('soundEnabled', e.target.checked)}
                  />
                }
                label="Enable Sound"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Volume: {audioSettings.volume}%
              </Typography>
              <Slider
                value={audioSettings.volume}
                onChange={(e, value) => updateAudioSetting('volume', value)}
                min={0}
                max={100}
                step={5}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.soundEffects}
                    onChange={(e) => updateAudioSetting('soundEffects', e.target.checked)}
                  />
                }
                label="Sound Effects"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.hapticFeedback}
                    onChange={(e) => updateAudioSetting('hapticFeedback', e.target.checked)}
                  />
                }
                label="Haptic Feedback"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Voice & Speech
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.voiceOver}
                    onChange={(e) => updateAudioSetting('voiceOver', e.target.checked)}
                  />
                }
                label="Voice Over"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.audioDescriptions}
                    onChange={(e) => updateAudioSetting('audioDescriptions', e.target.checked)}
                  />
                }
                label="Audio Descriptions"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Speech Rate: {audioSettings.speechRate}x
              </Typography>
              <Slider
                value={audioSettings.speechRate}
                onChange={(e, value) => updateAudioSetting('speechRate', value)}
                min={0.5}
                max={2.0}
                step={0.1}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={audioSettings.captionsEnabled}
                    onChange={(e) => updateAudioSetting('captionsEnabled', e.target.checked)}
                  />
                }
                label="Captions"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderMotorSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <TouchApp sx={{ mr: 1 }} />
        Motor Accessibility
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Touch Settings
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={motorSettings.singleTapMode}
                    onChange={(e) => updateMotorSetting('singleTapMode', e.target.checked)}
                  />
                }
                label="Single Tap Mode"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Long Press Delay: {motorSettings.longPressDelay}ms
              </Typography>
              <Slider
                value={motorSettings.longPressDelay}
                onChange={(e, value) => updateMotorSetting('longPressDelay', value)}
                min={100}
                max={1000}
                step={100}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Button Size</InputLabel>
                <Select
                  value={motorSettings.buttonSize}
                  onChange={(e) => updateMotorSetting('buttonSize', e.target.value)}
                >
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                  <MenuItem value="extra-large">Extra Large</MenuItem>
                </Select>
              </FormControl>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={motorSettings.touchAssist}
                    onChange={(e) => updateMotorSetting('touchAssist', e.target.checked)}
                  />
                }
                label="Touch Assist"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Alternative Input
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={motorSettings.voiceNavigation}
                    onChange={(e) => updateMotorSetting('voiceNavigation', e.target.checked)}
                  />
                }
                label="Voice Navigation"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={motorSettings.eyeTracking}
                    onChange={(e) => updateMotorSetting('eyeTracking', e.target.checked)}
                  />
                }
                label="Eye Tracking"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={motorSettings.switchControl}
                    onChange={(e) => updateMotorSetting('switchControl', e.target.checked)}
                  />
                }
                label="Switch Control"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Dwell Time: {motorSettings.dwellTime}ms
              </Typography>
              <Slider
                value={motorSettings.dwellTime}
                onChange={(e, value) => updateMotorSetting('dwellTime', value)}
                min={500}
                max={3000}
                step={100}
                valueLabelDisplay="auto"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCognitiveSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Settings sx={{ mr: 1 }} />
        Cognitive Accessibility
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Interface Simplification
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.simplifiedInterface}
                    onChange={(e) => updateCognitiveSetting('simplifiedInterface', e.target.checked)}
                  />
                }
                label="Simplified Interface"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.reducedComplexity}
                    onChange={(e) => updateCognitiveSetting('reducedComplexity', e.target.checked)}
                  />
                }
                label="Reduced Complexity"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.focusMode}
                    onChange={(e) => updateCognitiveSetting('focusMode', e.target.checked)}
                  />
                }
                label="Focus Mode"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.distractionFree}
                    onChange={(e) => updateCognitiveSetting('distractionFree', e.target.checked)}
                  />
                }
                label="Distraction Free"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Memory & Navigation
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.memoryAids}
                    onChange={(e) => updateCognitiveSetting('memoryAids', e.target.checked)}
                  />
                }
                label="Memory Aids"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.guidedNavigation}
                    onChange={(e) => updateCognitiveSetting('guidedNavigation', e.target.checked)}
                  />
                }
                label="Guided Navigation"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={cognitiveSettings.confirmActions}
                    onChange={(e) => updateCognitiveSetting('confirmActions', e.target.checked)}
                  />
                }
                label="Confirm Actions"
                sx={{ mb: 2 }}
              />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Session Length: {cognitiveSettings.sessionLength} minutes
              </Typography>
              <Slider
                value={cognitiveSettings.sessionLength}
                onChange={(e, value) => updateCognitiveSetting('sessionLength', value)}
                min={10}
                max={60}
                step={5}
                valueLabelDisplay="auto"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderLanguageSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Language sx={{ mr: 1 }} />
        Language & Communication
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Language Settings
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Language</InputLabel>
                <Select
                  value={languageSettings.language}
                  onChange={(e) => updateLanguageSetting('language', e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="it">Italian</MenuItem>
                  <MenuItem value="pt">Portuguese</MenuItem>
                  <MenuItem value="ru">Russian</MenuItem>
                  <MenuItem value="ja">Japanese</MenuItem>
                  <MenuItem value="ko">Korean</MenuItem>
                  <MenuItem value="zh">Chinese</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Reading Direction</InputLabel>
                <Select
                  value={languageSettings.readingDirection}
                  onChange={(e) => updateLanguageSetting('readingDirection', e.target.value)}
                >
                  <MenuItem value="ltr">Left to Right</MenuItem>
                  <MenuItem value="rtl">Right to Left</MenuItem>
                </Select>
              </FormControl>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={languageSettings.textToSpeech}
                    onChange={(e) => updateLanguageSetting('textToSpeech', e.target.checked)}
                  />
                }
                label="Text to Speech"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Communication Aids
              </Typography>
              
              <FormControlLabel
                control={
                  <Switch
                    checked={languageSettings.simplifiedLanguage}
                    onChange={(e) => updateLanguageSetting('simplifiedLanguage', e.target.checked)}
                  />
                }
                label="Simplified Language"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={languageSettings.pictographs}
                    onChange={(e) => updateLanguageSetting('pictographs', e.target.checked)}
                  />
                }
                label="Pictographs"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={languageSettings.signLanguage}
                    onChange={(e) => updateLanguageSetting('signLanguage', e.target.checked)}
                  />
                }
                label="Sign Language Support"
                sx={{ mb: 2 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={languageSettings.translationAssist}
                    onChange={(e) => updateLanguageSetting('translationAssist', e.target.checked)}
                  />
                }
                label="Translation Assist"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPreviewAndTest = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Preview sx={{ mr: 1 }} />
        Preview & Test
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Accessibility Summary
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">
                  {Object.values(visualSettings).filter(v => v === true).length}
                </Typography>
                <Typography variant="body2">
                  Visual Features
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">
                  {Object.values(audioSettings).filter(v => v === true).length}
                </Typography>
                <Typography variant="body2">
                  Audio Features
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">
                  {Object.values(motorSettings).filter(v => v === true).length}
                </Typography>
                <Typography variant="body2">
                  Motor Features
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary.main">
                  {Object.values(cognitiveSettings).filter(v => v === true).length}
                </Typography>
                <Typography variant="body2">
                  Cognitive Features
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Test Your Settings
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Preview />}
                onClick={() => setPreviewMode(!previewMode)}
              >
                {previewMode ? 'Exit Preview' : 'Preview Mode'}
              </Button>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<VolumeUp />}
                onClick={() => setTestDialog(true)}
              >
                Test Audio
              </Button>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<RestoreFromTrash />}
                color="error"
                onClick={() => setResetDialog(true)}
              >
                Reset All
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Alert severity="info">
        <strong>Tip:</strong> Your accessibility settings will be applied across all devices 
        where you use Flourish. Changes sync automatically.
      </Alert>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Accessibility Settings
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Customize your experience for maximum accessibility
        </Typography>
        <LinearProgress variant="determinate" value={78} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 157 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Visual" />
        <Tab label="Audio" />
        <Tab label="Motor" />
        <Tab label="Cognitive" />
        <Tab label="Language" />
        <Tab label="Preview" />
      </Tabs>

      {selectedTab === 0 && renderVisualSettings()}
      {selectedTab === 1 && renderAudioSettings()}
      {selectedTab === 2 && renderMotorSettings()}
      {selectedTab === 3 && renderCognitiveSettings()}
      {selectedTab === 4 && renderLanguageSettings()}
      {selectedTab === 5 && renderPreviewAndTest()}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          size="large"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          size="large"
        >
          Continue
        </Button>
      </Box>

      {/* Test Dialog */}
      <Dialog open={testDialog} onClose={() => setTestDialog(false)}>
        <DialogTitle>Audio Test</DialogTitle>
        <DialogContent>
          <Typography>
            This is a test of your audio accessibility settings. You should hear this 
            message read aloud if text-to-speech is enabled.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTestDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Reset Dialog */}
      <Dialog open={resetDialog} onClose={() => setResetDialog(false)}>
        <DialogTitle>Reset All Settings</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to reset all accessibility settings to their defaults? 
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResetDialog(false)}>Cancel</Button>
          <Button onClick={handleResetSettings} color="error" variant="contained">
            Reset All
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AccessibilitySettings;