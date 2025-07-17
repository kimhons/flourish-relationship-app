import React from 'react';
import PropTypes from 'prop-types';
import './FlourishBadge.css';

/**
 * FlourishBadge - Versatile badge component for status, labels, and counts
 * Supports multiple variants, sizes, and interactive states
 */
const FlourishBadge = ({
  variant = 'default',
  size = 'medium',
  children,
  icon,
  dot = false,
  count,
  maxCount = 99,
  onClick,
  onRemove,
  className = '',
  ...props
}) => {
  const badgeClasses = [
    'flourish-badge',
    `flourish-badge--${variant}`,
    `flourish-badge--${size}`,
    dot && 'flourish-badge--dot',
    onClick && 'flourish-badge--clickable',
    className
  ].filter(Boolean).join(' ');

  const displayCount = count > maxCount ? `${maxCount}+` : count;

  const BadgeComponent = onClick ? 'button' : 'span';

  return (
    <BadgeComponent
      className={badgeClasses}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="flourish-badge__icon">{icon}</span>}
      {!dot && (
        <span className="flourish-badge__content">
          {count !== undefined ? displayCount : children}
        </span>
      )}
      {onRemove && (
        <button
          className="flourish-badge__remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </BadgeComponent>
  );
};

FlourishBadge.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
    'gradient'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  icon: PropTypes.node,
  dot: PropTypes.bool,
  count: PropTypes.number,
  maxCount: PropTypes.number,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  className: PropTypes.string
};

export default FlourishBadge;