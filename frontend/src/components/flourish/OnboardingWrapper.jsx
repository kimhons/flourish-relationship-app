import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { FlourishButton, FlourishCard, FlourishLogo } from './index';
import './OnboardingWrapper.css';

/**
 * OnboardingWrapper - Consistent wrapper for all onboarding screens
 * Provides progress tracking, navigation, and branding
 */
const OnboardingWrapper = ({
  currentStep = 1,
  totalSteps = 10,
  stepTitle = '',
  stepDescription = '',
  children,
  onNext,
  onPrevious,
  onSkip,
  showSkip = true,
  nextLabel = 'Continue',
  previousLabel = 'Back',
  skipLabel = 'Skip',
  isLoading = false,
  isLastStep = false,
  className = ''
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={`flourish-onboarding-wrapper ${className}`}>
      {/* Header */}
      <div className="flourish-onboarding-header">
        <div className="flourish-container">
          <div className="flourish-flex-between">
            <FlourishLogo size={32} showText={true} />
            <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-md)' }}>
              <span className="flourish-caption">
                Step {currentStep} of {totalSteps}
              </span>
              {showSkip && !isLastStep && (
                <FlourishButton
                  variant="tertiary"
                  size="small"
                  onClick={onSkip}
                >
                  {skipLabel}
                </FlourishButton>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flourish-onboarding-progress">
        <div className="flourish-container">
          <div className="flourish-progress-bar">
            <div 
              className="flourish-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flourish-progress-dots">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flourish-progress-dot ${
                  i < currentStep ? 'completed' : ''
                } ${i === currentStep - 1 ? 'active' : ''}`}
              >
                {i < currentStep - 1 && <Check className="h-3 w-3" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flourish-onboarding-content">
        <div className="flourish-container-sm">
          {/* Step Info */}
          <div className="flourish-text-center flourish-mb-xl flourish-fade-in">
            <h1 className="flourish-heading-2 flourish-mb-sm">{stepTitle}</h1>
            {stepDescription && (
              <p className="flourish-body-lg">{stepDescription}</p>
            )}
          </div>

          {/* Content Area */}
          <div className="flourish-onboarding-main flourish-scale-in">
            {children}
          </div>

          {/* Navigation */}
          <div className="flourish-onboarding-nav">
            <div className="flourish-flex-between">
              {currentStep > 1 ? (
                <FlourishButton
                  variant="secondary"
                  onClick={onPrevious}
                  icon={<ChevronLeft className="h-4 w-4" />}
                  iconPosition="left"
                  disabled={isLoading}
                >
                  {previousLabel}
                </FlourishButton>
              ) : (
                <div />
              )}
              
              <FlourishButton
                variant="primary"
                onClick={onNext}
                icon={!isLastStep && <ChevronRight className="h-4 w-4" />}
                iconPosition="right"
                loading={isLoading}
                size="large"
              >
                {isLastStep ? 'Complete Setup' : nextLabel}
              </FlourishButton>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="flourish-onboarding-decoration">
        <div className="flourish-decoration-circle flourish-decoration-circle-1" />
        <div className="flourish-decoration-circle flourish-decoration-circle-2" />
        <div className="flourish-decoration-circle flourish-decoration-circle-3" />
      </div>
    </div>
  );
};

OnboardingWrapper.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  stepTitle: PropTypes.string,
  stepDescription: PropTypes.string,
  children: PropTypes.node.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func,
  onSkip: PropTypes.func,
  showSkip: PropTypes.bool,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
  skipLabel: PropTypes.string,
  isLoading: PropTypes.bool,
  isLastStep: PropTypes.bool,
  className: PropTypes.string
};

export default OnboardingWrapper;