import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Heart, 
  Calendar, 
  MapPin, 
  Camera,
  Check
} from 'lucide-react';
import { 
  OnboardingWrapper, 
  FlourishInput, 
  FlourishButton, 
  FlourishCard,
  FlourishBadge 
} from '../../components/flourish';

const BasicProfileSetup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    location: '',
    bio: '',
    relationshipStatus: '',
    lookingFor: []
  });

  const relationshipOptions = [
    { id: 'single', label: 'Single', icon: User },
    { id: 'dating', label: 'Dating', icon: Heart },
    { id: 'relationship', label: 'In a Relationship', icon: Heart },
    { id: 'married', label: 'Married', icon: Heart }
  ];

  const lookingForOptions = [
    'Long-term relationship',
    'Marriage',
    'Friendship',
    'Dating',
    'Casual',
    'Not sure yet'
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleLookingFor = (option) => {
    setProfileData(prev => ({
      ...prev,
      lookingFor: prev.lookingFor.includes(option)
        ? prev.lookingFor.filter(item => item !== option)
        : [...prev.lookingFor, option]
    }));
  };

  const handleNext = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate('/onboarding/photos');
  };

  const handlePrevious = () => {
    navigate('/onboarding/welcome');
  };

  const handleSkip = () => {
    navigate('/onboarding/preferences');
  };

  const isFormValid = profileData.firstName && profileData.dateOfBirth && profileData.relationshipStatus;

  return (
    <OnboardingWrapper
      currentStep={2}
      totalSteps={7}
      stepTitle="Create Your Profile"
      stepDescription="Tell us a bit about yourself to get started"
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSkip={handleSkip}
      isLoading={loading}
      nextLabel={isFormValid ? "Continue" : "Please fill required fields"}
    >
      <div className="flourish-onboarding-form">
        {/* Name Section */}
        <FlourishCard shadow="sm" padding="large">
          <div className="flourish-grid flourish-grid-2" style={{ gap: 'var(--flourish-space-md)' }}>
            <FlourishInput
              label="First Name"
              placeholder="Enter your first name"
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              icon={<User className="h-4 w-4" />}
              fullWidth
            />
            <FlourishInput
              label="Last Name"
              placeholder="Enter your last name"
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              icon={<User className="h-4 w-4" />}
              fullWidth
            />
          </div>
        </FlourishCard>

        {/* Basic Info */}
        <FlourishCard shadow="sm" padding="large">
          <div className="flourish-grid flourish-grid-2" style={{ gap: 'var(--flourish-space-md)' }}>
            <FlourishInput
              type="date"
              label="Date of Birth"
              value={profileData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              required
              icon={<Calendar className="h-4 w-4" />}
              fullWidth
            />
            <FlourishInput
              label="Location"
              placeholder="City, State"
              value={profileData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              icon={<MapPin className="h-4 w-4" />}
              fullWidth
            />
          </div>
        </FlourishCard>

        {/* Relationship Status */}
        <FlourishCard shadow="sm" padding="large">
          <h3 className="flourish-heading-6 flourish-mb-md">Relationship Status</h3>
          <div className="flourish-onboarding-cards">
            {relationshipOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className={`flourish-onboarding-card ${
                    profileData.relationshipStatus === option.id ? 'selected' : ''
                  }`}
                  onClick={() => handleInputChange('relationshipStatus', option.id)}
                >
                  <div className="flourish-onboarding-card-icon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="flourish-body">{option.label}</p>
                </div>
              );
            })}
          </div>
        </FlourishCard>

        {/* Looking For */}
        <FlourishCard shadow="sm" padding="large">
          <h3 className="flourish-heading-6 flourish-mb-md">What are you looking for?</h3>
          <p className="flourish-body-sm flourish-mb-md">Select all that apply</p>
          <div className="flourish-badge-group">
            {lookingForOptions.map((option) => (
              <FlourishBadge
                key={option}
                variant={profileData.lookingFor.includes(option) ? 'primary' : 'default'}
                size="large"
                onClick={() => toggleLookingFor(option)}
                className="flourish-transition"
                style={{ cursor: 'pointer' }}
              >
                {profileData.lookingFor.includes(option) && (
                  <Check className="h-4 w-4" style={{ marginRight: 'var(--flourish-space-xs)' }} />
                )}
                {option}
              </FlourishBadge>
            ))}
          </div>
        </FlourishCard>

        {/* Bio */}
        <FlourishCard shadow="sm" padding="large">
          <FlourishInput
            label="About You"
            placeholder="Tell us a bit about yourself..."
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            helperText={`${profileData.bio.length}/500 characters`}
            fullWidth
            as="textarea"
            style={{ minHeight: '120px' }}
          />
        </FlourishCard>
      </div>
    </OnboardingWrapper>
  );
};

export default BasicProfileSetup;