"""
Validation utilities for Flourish Relationship Platform
Provides validation functions for email, password, phone, and other user inputs
"""

import re
import phonenumbers
from phonenumbers import NumberParseException

def validate_email(email):
    """
    Validate email address format
    
    Args:
        email (str): Email address to validate
        
    Returns:
        bool: True if valid, False otherwise
    """
    if not email or not isinstance(email, str):
        return False
    
    # RFC 5322 compliant email regex (simplified)
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    # Check basic format
    if not re.match(email_pattern, email):
        return False
    
    # Additional checks
    if len(email) > 254:  # RFC 5321 limit
        return False
    
    local, domain = email.rsplit('@', 1)
    if len(local) > 64:  # RFC 5321 limit for local part
        return False
    
    # Check for consecutive dots
    if '..' in email:
        return False
    
    # Check for leading/trailing dots in local part
    if local.startswith('.') or local.endswith('.'):
        return False
    
    return True

def validate_password(password):
    """
    Validate password strength
    
    Args:
        password (str): Password to validate
        
    Returns:
        dict: {
            'valid': bool,
            'message': str,
            'score': int (0-100),
            'requirements': dict
        }
    """
    if not password or not isinstance(password, str):
        return {
            'valid': False,
            'message': 'Password is required',
            'score': 0,
            'requirements': {}
        }
    
    requirements = {
        'length': len(password) >= 8,
        'uppercase': bool(re.search(r'[A-Z]', password)),
        'lowercase': bool(re.search(r'[a-z]', password)),
        'digit': bool(re.search(r'\d', password)),
        'special': bool(re.search(r'[!@#$%^&*(),.?":{}|<>]', password)),
        'no_common': not _is_common_password(password),
        'no_sequential': not _has_sequential_chars(password),
        'no_repeated': not _has_repeated_chars(password)
    }
    
    # Calculate score
    score = 0
    if requirements['length']:
        score += 20
    if requirements['uppercase']:
        score += 15
    if requirements['lowercase']:
        score += 15
    if requirements['digit']:
        score += 15
    if requirements['special']:
        score += 15
    if requirements['no_common']:
        score += 10
    if requirements['no_sequential']:
        score += 5
    if requirements['no_repeated']:
        score += 5
    
    # Minimum requirements for validity
    min_requirements = ['length', 'uppercase', 'lowercase', 'digit']
    valid = all(requirements[req] for req in min_requirements)
    
    if not valid:
        missing = [req.replace('_', ' ').title() for req in min_requirements if not requirements[req]]
        message = f"Password must contain: {', '.join(missing)}"
    elif score < 60:
        message = "Password is weak. Consider adding special characters and avoiding common patterns."
    elif score < 80:
        message = "Password strength is good."
    else:
        message = "Password strength is excellent."
    
    return {
        'valid': valid,
        'message': message,
        'score': score,
        'requirements': requirements
    }

def validate_phone(phone_number, country_code='US'):
    """
    Validate phone number format
    
    Args:
        phone_number (str): Phone number to validate
        country_code (str): Country code for validation (default: US)
        
    Returns:
        bool: True if valid, False otherwise
    """
    if not phone_number or not isinstance(phone_number, str):
        return False
    
    try:
        # Parse the phone number
        parsed_number = phonenumbers.parse(phone_number, country_code)
        
        # Check if the number is valid
        return phonenumbers.is_valid_number(parsed_number)
    
    except NumberParseException:
        return False

def validate_name(name, min_length=1, max_length=50):
    """
    Validate name fields (first name, last name)
    
    Args:
        name (str): Name to validate
        min_length (int): Minimum length
        max_length (int): Maximum length
        
    Returns:
        dict: {'valid': bool, 'message': str}
    """
    if not name or not isinstance(name, str):
        return {'valid': False, 'message': 'Name is required'}
    
    name = name.strip()
    
    if len(name) < min_length:
        return {'valid': False, 'message': f'Name must be at least {min_length} character(s)'}
    
    if len(name) > max_length:
        return {'valid': False, 'message': f'Name must be no more than {max_length} characters'}
    
    # Check for valid characters (letters, spaces, hyphens, apostrophes)
    if not re.match(r"^[a-zA-Z\s\-']+$", name):
        return {'valid': False, 'message': 'Name can only contain letters, spaces, hyphens, and apostrophes'}
    
    # Check for reasonable patterns
    if re.search(r'[a-zA-Z]{2}', name):  # At least 2 consecutive letters
        return {'valid': True, 'message': 'Valid name'}
    else:
        return {'valid': False, 'message': 'Name must contain at least 2 consecutive letters'}

def validate_bio(bio, max_length=500):
    """
    Validate user bio/description
    
    Args:
        bio (str): Bio to validate
        max_length (int): Maximum length
        
    Returns:
        dict: {'valid': bool, 'message': str}
    """
    if not bio:
        return {'valid': True, 'message': 'Bio is optional'}
    
    if not isinstance(bio, str):
        return {'valid': False, 'message': 'Bio must be text'}
    
    bio = bio.strip()
    
    if len(bio) > max_length:
        return {'valid': False, 'message': f'Bio must be no more than {max_length} characters'}
    
    # Check for inappropriate content patterns
    inappropriate_patterns = [
        r'\b(?:fuck|shit|damn|bitch|asshole|cunt|whore|slut)\b',  # Profanity
        r'\b(?:sex|porn|nude|naked|horny)\b',  # Sexual content
        r'\b(?:drug|cocaine|weed|marijuana|heroin)\b',  # Drug references
        r'(?:https?://|www\.)',  # URLs
        r'\b(?:\d{3}[-.]?\d{3}[-.]?\d{4})\b',  # Phone numbers
        r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'  # Email addresses
    ]
    
    for pattern in inappropriate_patterns:
        if re.search(pattern, bio, re.IGNORECASE):
            return {'valid': False, 'message': 'Bio contains inappropriate content or personal information'}
    
    return {'valid': True, 'message': 'Valid bio'}

def validate_age(age):
    """
    Validate age for dating app (18-100)
    
    Args:
        age (int): Age to validate
        
    Returns:
        dict: {'valid': bool, 'message': str}
    """
    if not isinstance(age, int):
        return {'valid': False, 'message': 'Age must be a number'}
    
    if age < 18:
        return {'valid': False, 'message': 'You must be at least 18 years old'}
    
    if age > 100:
        return {'valid': False, 'message': 'Please enter a valid age'}
    
    return {'valid': True, 'message': 'Valid age'}

def validate_location(location, max_length=100):
    """
    Validate location/city input
    
    Args:
        location (str): Location to validate
        max_length (int): Maximum length
        
    Returns:
        dict: {'valid': bool, 'message': str}
    """
    if not location:
        return {'valid': True, 'message': 'Location is optional'}
    
    if not isinstance(location, str):
        return {'valid': False, 'message': 'Location must be text'}
    
    location = location.strip()
    
    if len(location) > max_length:
        return {'valid': False, 'message': f'Location must be no more than {max_length} characters'}
    
    # Check for valid location format (letters, spaces, commas, periods)
    if not re.match(r"^[a-zA-Z\s,.-]+$", location):
        return {'valid': False, 'message': 'Location contains invalid characters'}
    
    return {'valid': True, 'message': 'Valid location'}

def _is_common_password(password):
    """
    Check if password is in common passwords list
    
    Args:
        password (str): Password to check
        
    Returns:
        bool: True if common, False otherwise
    """
    common_passwords = {
        'password', '123456', '123456789', 'qwerty', 'abc123', 'password123',
        'admin', 'letmein', 'welcome', 'monkey', '1234567890', 'password1',
        'qwerty123', 'dragon', 'master', 'hello', 'login', 'princess',
        'solo', 'qwertyuiop', 'starwars', 'superman', 'iloveyou', 'trustno1'
    }
    
    return password.lower() in common_passwords

def _has_sequential_chars(password):
    """
    Check if password has sequential characters (abc, 123, etc.)
    
    Args:
        password (str): Password to check
        
    Returns:
        bool: True if has sequential chars, False otherwise
    """
    # Check for 3+ sequential characters
    for i in range(len(password) - 2):
        # Check ascending sequence
        if (ord(password[i]) + 1 == ord(password[i + 1]) and 
            ord(password[i + 1]) + 1 == ord(password[i + 2])):
            return True
        
        # Check descending sequence
        if (ord(password[i]) - 1 == ord(password[i + 1]) and 
            ord(password[i + 1]) - 1 == ord(password[i + 2])):
            return True
    
    return False

def _has_repeated_chars(password):
    """
    Check if password has too many repeated characters
    
    Args:
        password (str): Password to check
        
    Returns:
        bool: True if has too many repeated chars, False otherwise
    """
    # Check for 3+ consecutive repeated characters
    for i in range(len(password) - 2):
        if password[i] == password[i + 1] == password[i + 2]:
            return True
    
    return False

