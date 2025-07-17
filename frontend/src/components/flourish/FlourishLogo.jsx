import React from 'react';
import PropTypes from 'prop-types';
import './FlourishLogo.css';

/**
 * FlourishLogo - Brand logo component with consistent styling
 * Uses the new Flourish app icon assets
 */
const FlourishLogo = ({
  size = 64,
  showText = true,
  textSize = 'auto',
  variant = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const logoClasses = [
    'flourish-logo',
    `flourish-logo--${variant}`,
    onClick && 'flourish-logo--clickable',
    className
  ].filter(Boolean).join(' ');

  const textClasses = [
    'flourish-logo__text',
    textSize !== 'auto' && `flourish-logo__text--${textSize}`
  ].filter(Boolean).join(' ');

  const LogoComponent = onClick ? 'button' : 'div';

  return (
    <LogoComponent
      className={logoClasses}
      onClick={onClick}
      {...props}
    >
      <img
        src="/icons/app-icon.svg"
        alt="Flourish"
        width={size}
        height={size}
        className="flourish-logo__icon"
      />
      {showText && (
        <span className={textClasses}>
          Flourish
        </span>
      )}
    </LogoComponent>
  );
};

FlourishLogo.propTypes = {
  size: PropTypes.number,
  showText: PropTypes.bool,
  textSize: PropTypes.oneOf(['auto', 'small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'inverse', 'gradient']),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default FlourishLogo;