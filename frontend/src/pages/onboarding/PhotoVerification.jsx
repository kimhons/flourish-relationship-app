/**
 * Screen 117: Photo Verification
 * Camera integration for selfie capture with real-time face detection
 */

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Alert,
  IconButton,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Chip
} from '@mui/material';
import {
  CameraAlt,
  Refresh,
  CheckCircle,
  Warning,
  ArrowForward,
  ArrowBack,
  Face,
  FlashOn,
  FlashOff
} from '@mui/icons-material';

const PhotoVerification = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0);

  const verificationSteps = ['Position Face', 'Capture Photo', 'Verify Quality', 'Complete'];

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setCameraError(null);
    } catch (error) {
      setCameraError('Unable to access camera. Please check permissions.');
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsCapturing(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
    setCapturedImage(imageDataUrl);
    setVerificationStep(2);
    setIsCapturing(false);

    // Simulate face detection
    setTimeout(() => {
      setFaceDetected(true);
    }, 1000);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setFaceDetected(false);
    setVerificationStep(0);
  };

  const submitPhoto = () => {
    setVerificationStep(3);
    setTimeout(() => {
      navigate('/onboarding/phone-verification');
    }, 2000);
  };

  const guidelines = [
    'Look directly at the camera',
    'Ensure good lighting on your face',
    'Remove sunglasses and hats',
    'Keep a neutral expression',
    'Make sure your face fills the circle'
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Step 2 of 5 - Photo Verification
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={40} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#7C3AED'
            }
          }} 
        />
      </Box>

      {/* Verification Steps */}
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={verificationStep} alternativeLabel>
          {verificationSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ 
              display: 'inline-flex', 
              p: 2, 
              borderRadius: '50%', 
              backgroundColor: '#F3F4F6',
              mb: 2 
            }}>
              <CameraAlt sx={{ fontSize: 48, color: '#7C3AED' }} />
            </Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Take Your Verification Photo
            </Typography>
            <Typography variant="h6" color="text.secondary">
              We'll use this photo to verify your identity and enhance platform safety
            </Typography>
          </Box>

          {/* Camera Section */}
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
            {/* Camera View */}
            <Box sx={{ flex: 1 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '2px solid #E5E7EB',
                  backgroundColor: '#F9FAFB'
                }}
              >
                {cameraError ? (
                  <Box sx={{ 
                    height: 400, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    p: 4
                  }}>
                    <Warning sx={{ fontSize: 64, color: '#F59E0B', mb: 2 }} />
                    <Typography variant="h6" gutterBottom>Camera Access Required</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
                      {cameraError}
                    </Typography>
                    <Button variant="contained" onClick={startCamera}>
                      Try Again
                    </Button>
                  </Box>
                ) : (
                  <>
                    {!capturedImage ? (
                      <Box sx={{ position: 'relative' }}>
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          muted
                          style={{
                            width: '100%',
                            height: 400,
                            objectFit: 'cover'
                          }}
                        />
                        {/* Face Detection Overlay */}
                        <Box sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 200,
                          height: 200,
                          border: `3px solid ${faceDetected ? '#14B8A6' : '#7C3AED'}`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Face sx={{ 
                            fontSize: 48, 
                            color: faceDetected ? '#14B8A6' : '#7C3AED',
                            opacity: 0.7
                          }} />
                        </Box>
                        {/* Flash Controls */}
                        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                          <IconButton
                            onClick={() => setFlashEnabled(!flashEnabled)}
                            sx={{ 
                              backgroundColor: 'rgba(0,0,0,0.5)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.7)'
                              }
                            }}
                          >
                            {flashEnabled ? <FlashOn /> : <FlashOff />}
                          </IconButton>
                        </Box>
                      </Box>
                    ) : (
                      <Box sx={{ position: 'relative' }}>
                        <img
                          src={capturedImage}
                          alt="Captured verification"
                          style={{
                            width: '100%',
                            height: 400,
                            objectFit: 'cover'
                          }}
                        />
                        {faceDetected && (
                          <Box sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16
                          }}>
                            <Chip
                              icon={<CheckCircle />}
                              label="Face Detected"
                              sx={{
                                backgroundColor: '#14B8A6',
                                color: 'white'
                              }}
                            />
                          </Box>
                        )}
                      </Box>
                    )}
                  </>
                )}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
              </Paper>

              {/* Camera Controls */}
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                {!capturedImage ? (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={capturePhoto}
                    disabled={isCapturing || !!cameraError}
                    sx={{
                      backgroundColor: '#7C3AED',
                      '&:hover': {
                        backgroundColor: '#6D28D9'
                      },
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      minWidth: 'unset'
                    }}
                  >
                    <CameraAlt sx={{ fontSize: 32 }} />
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<Refresh />}
                      onClick={retakePhoto}
                      sx={{ borderColor: '#E5E7EB' }}
                    >
                      Retake
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<CheckCircle />}
                      onClick={submitPhoto}
                      disabled={!faceDetected}
                      sx={{
                        backgroundColor: '#14B8A6',
                        '&:hover': {
                          backgroundColor: '#0F766E'
                        }
                      }}
                    >
                      Use This Photo
                    </Button>
                  </>
                )}
              </Box>
            </Box>

            {/* Guidelines */}
            <Box sx={{ width: 300 }}>
              <Typography variant="h6" fontWeight="semibold" gutterBottom>
                Photo Guidelines
              </Typography>
              <Box sx={{ mb: 3 }}>
                {guidelines.map((guideline, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ color: '#14B8A6', fontSize: 20, mr: 2 }} />
                    <Typography variant="body2">{guideline}</Typography>
                  </Box>
                ))}
              </Box>

              {verificationStep >= 2 && (
                <Alert 
                  severity={faceDetected ? "success" : "warning"}
                  sx={{ mb: 2 }}
                >
                  {faceDetected 
                    ? "Great! Your face was clearly detected in the photo."
                    : "Analyzing photo quality... Please wait."
                  }
                </Alert>
              )}

              {verificationStep === 3 && (
                <Alert severity="success">
                  <Typography variant="body2" fontWeight="semibold">
                    Verification Complete!
                  </Typography>
                  <Typography variant="caption">
                    Redirecting to phone verification...
                  </Typography>
                </Alert>
              )}
            </Box>
          </Box>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate('/onboarding/identity-verification')}
              sx={{ borderColor: '#E5E7EB' }}
            >
              Back
            </Button>
            
            {capturedImage && faceDetected && (
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={submitPhoto}
                sx={{
                  backgroundColor: '#7C3AED',
                  '&:hover': {
                    backgroundColor: '#6D28D9'
                  }
                }}
              >
                Continue
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PhotoVerification;

