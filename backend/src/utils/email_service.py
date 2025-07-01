"""
Simplified email service for Flourish Relationship Platform
"""

import logging

logger = logging.getLogger(__name__)

def send_verification_email(email, verification_token):
    """
    Send verification email (simplified implementation)
    
    Args:
        email (str): User's email address
        verification_token (str): Verification token
    
    Returns:
        bool: True if sent successfully, False otherwise
    """
    # For now, just log the email sending
    logger.info(f"Verification email would be sent to {email} with token {verification_token}")
    print(f"📧 Verification email for {email}: http://localhost:5173/verify-email?token={verification_token}")
    return True

def send_password_reset_email(email, reset_token):
    """
    Send password reset email (simplified implementation)
    
    Args:
        email (str): User's email address
        reset_token (str): Password reset token
    
    Returns:
        bool: True if sent successfully, False otherwise
    """
    # For now, just log the email sending
    logger.info(f"Password reset email would be sent to {email} with token {reset_token}")
    print(f"📧 Password reset email for {email}: http://localhost:5173/reset-password?token={reset_token}")
    return True

def send_welcome_email(email, first_name):
    """
    Send welcome email (simplified implementation)
    
    Args:
        email (str): User's email address
        first_name (str): User's first name
    
    Returns:
        bool: True if sent successfully, False otherwise
    """
    # For now, just log the email sending
    logger.info(f"Welcome email would be sent to {email} for {first_name}")
    print(f"📧 Welcome email for {first_name} at {email}")
    return True

