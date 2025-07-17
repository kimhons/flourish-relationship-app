import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';
import FlourishButton from './FlourishButton';
import './FlourishModal.css';

/**
 * FlourishModal - Flexible modal/dialog component
 * Supports various sizes, positions, and animations
 */
const FlourishModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  position = 'center',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  footer,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  ...props
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Handle focus trap and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Store current active element
    previousActiveElement.current = document.activeElement;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Focus modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      // Restore body scroll
      document.body.style.overflow = '';

      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = [
    'flourish-modal',
    `flourish-modal--${size}`,
    `flourish-modal--${position}`,
    className
  ].filter(Boolean).join(' ');

  const overlayClasses = [
    'flourish-modal-overlay',
    `flourish-modal-overlay--${position}`,
    overlayClassName
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'flourish-modal-content',
    contentClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        {...props}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flourish-modal-header">
            {title && (
              <h2 id="modal-title" className="flourish-modal-title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className="flourish-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={contentClasses}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flourish-modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

FlourishModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
  position: PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']),
  showCloseButton: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  footer: PropTypes.node,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  contentClassName: PropTypes.string
};

// Convenience components for common modal patterns
export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmVariant = 'primary',
  isLoading = false
}) => {
  return (
    <FlourishModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="small"
      footer={
        <div className="flourish-modal-footer-actions">
          <FlourishButton
            variant="ghost"
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelLabel}
          </FlourishButton>
          <FlourishButton
            variant={confirmVariant}
            onClick={onConfirm}
            loading={isLoading}
          >
            {confirmLabel}
          </FlourishButton>
        </div>
      }
    >
      <p className="flourish-body">{message}</p>
    </FlourishModal>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmVariant: PropTypes.string,
  isLoading: PropTypes.bool
};

export default FlourishModal;