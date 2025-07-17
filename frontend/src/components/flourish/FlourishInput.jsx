import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './FlourishInput.css';

/**
 * FlourishInput - Branded input component with consistent styling
 * Supports various types, sizes, and states
 */
const FlourishInput = forwardRef(({
  type = 'text',
  size = 'medium',
  variant = 'default',
  label,
  error,
  success,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  required = false,
  className = '',
  ...props
}, ref) => {
  const inputClasses = [
    'flourish-input',
    `flourish-input--${size}`,
    `flourish-input--${variant}`,
    fullWidth && 'flourish-input--full-width',
    disabled && 'flourish-input--disabled',
    error && 'flourish-input--error',
    success && 'flourish-input--success',
    icon && `flourish-input--icon-${iconPosition}`,
    className
  ].filter(Boolean).join(' ');

  const wrapperClasses = [
    'flourish-input-wrapper',
    fullWidth && 'flourish-input-wrapper--full-width'
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="flourish-input-label">
          {label}
          {required && <span className="flourish-input-required">*</span>}
        </label>
      )}
      
      <div className="flourish-input-container">
        {icon && iconPosition === 'left' && (
          <span className="flourish-input-icon flourish-input-icon--left">
            {icon}
          </span>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? 'input-helper-text' : undefined}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <span className="flourish-input-icon flourish-input-icon--right">
            {icon}
          </span>
        )}
      </div>
      
      {(helperText || error || success) && (
        <p 
          id="input-helper-text"
          className={`flourish-input-helper ${
            error ? 'flourish-input-helper--error' : 
            success ? 'flourish-input-helper--success' : ''
          }`}
        >
          {error || success || helperText}
        </p>
      )}
    </div>
  );
});

FlourishInput.displayName = 'FlourishInput';

FlourishInput.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'filled', 'outlined']),
  label: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  helperText: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string
};

export default FlourishInput;