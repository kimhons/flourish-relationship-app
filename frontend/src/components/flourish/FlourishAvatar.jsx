import React from 'react';
import PropTypes from 'prop-types';
import { User, Camera } from 'lucide-react';
import './FlourishAvatar.css';

/**
 * FlourishAvatar - Versatile avatar component for user profiles
 * Supports images, initials, icons, and various sizes/shapes
 */
const FlourishAvatar = ({
  src,
  alt = 'Avatar',
  name,
  size = 'medium',
  shape = 'circle',
  status,
  badge,
  editable = false,
  onClick,
  onEdit,
  className = '',
  ...props
}) => {
  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const avatarClasses = [
    'flourish-avatar',
    `flourish-avatar--${size}`,
    `flourish-avatar--${shape}`,
    onClick && 'flourish-avatar--clickable',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit(e);
    }
  };

  return (
    <div className="flourish-avatar-container">
      <div
        className={avatarClasses}
        onClick={handleClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="flourish-avatar__image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        <div 
          className="flourish-avatar__fallback" 
          style={{ display: src ? 'none' : 'flex' }}
        >
          {name ? (
            <span className="flourish-avatar__initials">
              {getInitials(name)}
            </span>
          ) : (
            <User className="flourish-avatar__icon" />
          )}
        </div>

        {editable && (
          <button
            className="flourish-avatar__edit"
            onClick={handleEditClick}
            aria-label="Edit avatar"
          >
            <Camera className="w-4 h-4" />
          </button>
        )}
      </div>

      {status && (
        <div className={`flourish-avatar__status flourish-avatar__status--${status}`} />
      )}

      {badge && (
        <div className="flourish-avatar__badge">
          {badge}
        </div>
      )}
    </div>
  );
};

FlourishAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge']),
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
  status: PropTypes.oneOf(['online', 'offline', 'busy', 'away']),
  badge: PropTypes.node,
  editable: PropTypes.bool,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  className: PropTypes.string
};

// Avatar Group Component
export const FlourishAvatarGroup = ({
  avatars = [],
  max = 4,
  size = 'small',
  overlap = true,
  className = '',
  ...props
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const groupClasses = [
    'flourish-avatar-group',
    overlap && 'flourish-avatar-group--overlap',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} {...props}>
      {visibleAvatars.map((avatar, index) => (
        <FlourishAvatar
          key={avatar.id || index}
          {...avatar}
          size={size}
          className="flourish-avatar-group__item"
          style={{
            '--avatar-index': index,
            zIndex: visibleAvatars.length - index
          }}
        />
      ))}
      {remainingCount > 0 && (
        <div 
          className={`flourish-avatar flourish-avatar--${size} flourish-avatar-group__more`}
          style={{
            '--avatar-index': visibleAvatars.length,
            zIndex: 0
          }}
        >
          <span className="flourish-avatar__initials">
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  );
};

FlourishAvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.object),
  max: PropTypes.number,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge']),
  overlap: PropTypes.bool,
  className: PropTypes.string
};

export default FlourishAvatar;