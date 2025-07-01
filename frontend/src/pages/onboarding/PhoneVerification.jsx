/**
 * Screen 118: Phone Number Verification
 * Phone number input with country codes and SMS verification
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
  LinearProgress,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Chip,
  Divider,
  InputAdornment
} from '@mui/material';
import {
  Phone,
  Sms,
  CheckCircle,
  ArrowForward,
  ArrowBack,
  Refresh,
  Security,
  Timer
} from '@mui/icons-material';

const PhoneVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone' or 'verification'
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(false);

  const countries = [
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' }
  ];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && step === 'verification') {
      setCanResend(true);
    }
  }, [timeLeft, step]);

  const sendVerificationCode = async () => {
    if (!phoneNumber.trim()) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setStep('verification');
      setTimeLeft(60);
      setCanResend(false);
      setIsLoading(false);
    }, 2000);
  };

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const verifyCode = async () => {
    const code = verificationCode.join('');
    if (code.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate verification
    setTimeout(() => {
      if (code === '123456') {
        navigate('/onboarding/social-linking');
      } else {
        setError('Invalid verification code. Please try again.');
        setVerificationCode(['', '', '', '', '', '']);
      }
      setIsLoading(false);
    }, 2000);
  };

  const resendCode = () => {
    setTimeLeft(60);
    setCanResend(false);
    setVerificationCode(['', '', '', '', '', '']);
    setError('');
    // Simulate resend API call
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Indicator */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Step 3 of 5 - Phone Verification
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={60} 
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
              {step === 'phone' ? (
                <Phone sx={{ fontSize: 48, color: '#7C3AED' }} />
              ) : (
                <Sms sx={{ fontSize: 48, color: '#7C3AED' }} />
              )}
            </Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {step === 'phone' ? 'Verify Your Phone Number' : 'Enter Verification Code'}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {step === 'phone' 
                ? 'We\'ll send you a verification code to confirm your phone number'
                : `We sent a 6-digit code to ${countryCode} ${phoneNumber}`
              }
            </Typography>
          </Box>

          {step === 'phone' ? (
            /* Phone Number Input */
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={countryCode}
                    label="Country"
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countries.map((country, index) => (
                      <MenuItem key={index} value={country.code}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {countryCode}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={sendVerificationCode}
                disabled={isLoading || !phoneNumber.trim()}
                sx={{
                  backgroundColor: '#7C3AED',
                  '&:hover': {
                    backgroundColor: '#6D28D9'
                  },
                  mb: 3
                }}
              >
                {isLoading ? 'Sending Code...' : 'Send Verification Code'}
              </Button>

              <Box sx={{ 
                backgroundColor: '#F9FAFB', 
                borderRadius: 2, 
                p: 3,
                border: '1px solid #E5E7EB'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Security sx={{ color: '#7C3AED', mr: 1 }} />
                  <Typography variant="subtitle2" fontWeight="semibold">
                    Why we need your phone number
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  • Verify your identity and prevent fake accounts<br/>
                  • Send important security notifications<br/>
                  • Enable two-factor authentication<br/>
                  • Help you recover your account if needed
                </Typography>
              </Box>
            </Box>
          ) : (
            /* Verification Code Input */
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3 }}>
                {verificationCode.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`code-${index}`}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    inputProps={{
                      maxLength: 1,
                      style: { 
                        textAlign: 'center', 
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                      }
                    }}
                    sx={{
                      width: 56,
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#7C3AED'
                        }
                      }
                    }}
                  />
                ))}
              </Box>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={verifyCode}
                disabled={isLoading || verificationCode.join('').length !== 6}
                sx={{
                  backgroundColor: '#7C3AED',
                  '&:hover': {
                    backgroundColor: '#6D28D9'
                  },
                  mb: 3
                }}
              >
                {isLoading ? 'Verifying...' : 'Verify Code'}
              </Button>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Didn't receive the code?
                </Typography>
                {timeLeft > 0 ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Timer sx={{ fontSize: 20, color: '#6B7280' }} />
                    <Typography variant="body2" color="text.secondary">
                      Resend in {formatTime(timeLeft)}
                    </Typography>
                  </Box>
                ) : (
                  <Button
                    variant="text"
                    startIcon={<Refresh />}
                    onClick={resendCode}
                    disabled={!canResend}
                    sx={{ color: '#7C3AED' }}
                  >
                    Resend Code
                  </Button>
                )}
              </Box>

              <Box sx={{ 
                backgroundColor: '#F9FAFB', 
                borderRadius: 2, 
                p: 3,
                border: '1px solid #E5E7EB',
                mt: 3
              }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Tip:</strong> Check your spam folder if you don't see the message. 
                  The code will expire in 10 minutes for security.
                </Typography>
              </Box>
            </Box>
          )}

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => {
                if (step === 'verification') {
                  setStep('phone');
                  setVerificationCode(['', '', '', '', '', '']);
                  setError('');
                } else {
                  navigate('/onboarding/photo-verification');
                }
              }}
              sx={{ borderColor: '#E5E7EB' }}
            >
              Back
            </Button>
            
            <Button
              variant="text"
              onClick={() => navigate('/onboarding/social-linking')}
              sx={{ color: '#6B7280' }}
            >
              Skip Phone Verification
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PhoneVerification;

