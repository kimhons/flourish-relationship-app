import React from 'react';
import PropTypes from 'prop-types';
import './FlourishCard.css';

/**
 * FlourishCard - Core card component with Flourish branding
 * Supports gradient backgrounds, shadows, and various padding options
 */
const FlourishCard = ({
  children,
  gradient = false,
  shadow = 'md',
  padding = 'medium',
  rounded = 'lg',
  className = '',
  onClick,
  hoverable = false,
  ...props
}) => {
  const cardClasses = [
    'flourish-card',
    gradient && 'flourish-card--gradient',
    shadow && `flourish-card--shadow-${shadow}`,
    padding && `flourish-card--padding-${padding}`,
    rounded && `flourish-card--rounded-${rounded}`,
    hoverable && 'flourish-card--hoverable',
    onClick && 'flourish-card--clickable',
    className
  ].filter(Boolean).join(' ');

  const CardComponent = onClick ? 'button' : 'div';

  return (
    <CardComponent
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {gradient && <div className="flourish-card__gradient-overlay" />}
      <div className="flourish-card__content">
        {children}
      </div>
    </CardComponent>
  );
};

FlourishCard.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xl']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  hoverable: PropTypes.bool
};

export default FlourishCard;