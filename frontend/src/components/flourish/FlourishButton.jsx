import React from 'react';
import PropTypes from 'prop-types';
import './FlourishButton.css';

/**
 * FlourishButton - Core button component with Flourish branding
 * Supports multiple variants, sizes, and states
 */
const FlourishButton = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const buttonClasses = [
    'flourish-button',
    `flourish-button--${variant}`,
    `flourish-button--${size}`,
    fullWidth && 'flourish-button--full-width',
    disabled && 'flourish-button--disabled',
    loading && 'flourish-button--loading',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const renderIcon = () => {
    if (loading) {
      return <span className="flourish-button__spinner" />;
    }
    if (icon) {
      return <span className="flourish-button__icon">{icon}</span>;
    }
    return null;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {iconPosition === 'left' && renderIcon()}
      {children && <span className="flourish-button__text">{children}</span>}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

FlourishButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default FlourishButton;