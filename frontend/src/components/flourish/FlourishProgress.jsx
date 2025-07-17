import React from 'react';
import PropTypes from 'prop-types';
import './FlourishProgress.css';

/**
 * FlourishProgress - Versatile progress indicator component
 * Supports linear, circular, and step-based progress
 */
const FlourishProgress = ({
  value = 0,
  max = 100,
  type = 'linear',
  size = 'medium',
  variant = 'primary',
  label,
  showValue = false,
  animated = true,
  striped = false,
  className = '',
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressClasses = [
    'flourish-progress',
    `flourish-progress--${type}`,
    `flourish-progress--${size}`,
    `flourish-progress--${variant}`,
    animated && 'flourish-progress--animated',
    className
  ].filter(Boolean).join(' ');

  if (type === 'circular') {
    // Calculate SVG circle dimensions
    const strokeWidth = size === 'small' ? 3 : size === 'large' ? 6 : 4;
    const radius = size === 'small' ? 16 : size === 'large' ? 40 : 24;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={progressClasses} {...props}>
        <svg
          height={radius * 2}
          width={radius * 2}
          className="flourish-progress__svg"
        >
          <circle
            className="flourish-progress__circle-bg"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className="flourish-progress__circle-fill"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        {(showValue || label) && (
          <div className="flourish-progress__label">
            {showValue && <span className="flourish-progress__value">{Math.round(percentage)}%</span>}
            {label && <span className="flourish-progress__text">{label}</span>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={progressClasses} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={max} {...props}>
      {label && (
        <div className="flourish-progress__header">
          <span className="flourish-progress__label">{label}</span>
          {showValue && <span className="flourish-progress__value">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="flourish-progress__track">
        <div
          className={`flourish-progress__fill ${striped ? 'flourish-progress__fill--striped' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

FlourishProgress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.oneOf(['linear', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'gradient']),
  label: PropTypes.string,
  showValue: PropTypes.bool,
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string
};

// Step Progress Component
export const FlourishStepProgress = ({
  steps = [],
  currentStep = 0,
  variant = 'primary',
  size = 'medium',
  showLabels = true,
  className = '',
  ...props
}) => {
  const stepProgressClasses = [
    'flourish-step-progress',
    `flourish-step-progress--${size}`,
    `flourish-step-progress--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={stepProgressClasses} {...props}>
      <div className="flourish-step-progress__track">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const stepClasses = [
            'flourish-step',
            isCompleted && 'flourish-step--completed',
            isActive && 'flourish-step--active'
          ].filter(Boolean).join(' ');

          return (
            <div key={step.id || index} className={stepClasses}>
              <div className="flourish-step__connector" />
              <div className="flourish-step__circle">
                {isCompleted ? (
                  <svg className="flourish-step__check" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                ) : (
                  <span className="flourish-step__number">{index + 1}</span>
                )}
              </div>
              {showLabels && step.label && (
                <span className="flourish-step__label">{step.label}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

FlourishStepProgress.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  })),
  currentStep: PropTypes.number,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabels: PropTypes.bool,
  className: PropTypes.string
};

// Multi Progress Component (for showing multiple values)
export const FlourishMultiProgress = ({
  segments = [],
  height = 8,
  animated = true,
  className = '',
  ...props
}) => {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);

  return (
    <div 
      className={`flourish-multi-progress ${animated ? 'flourish-multi-progress--animated' : ''} ${className}`}
      style={{ height: `${height}px` }}
      {...props}
    >
      {segments.map((segment, index) => {
        const percentage = (segment.value / total) * 100;
        return (
          <div
            key={segment.id || index}
            className={`flourish-multi-progress__segment flourish-multi-progress__segment--${segment.variant || 'primary'}`}
            style={{ width: `${percentage}%` }}
            title={segment.label}
          />
        );
      })}
    </div>
  );
};

FlourishMultiProgress.propTypes = {
  segments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number.isRequired,
    variant: PropTypes.string,
    label: PropTypes.string
  })),
  height: PropTypes.number,
  animated: PropTypes.bool,
  className: PropTypes.string
};

export default FlourishProgress;