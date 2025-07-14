// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Phone number validation
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Name validation
export const validateName = (name) => {
  return name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name);
};

// Age validation
export const validateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age >= 18 && age <= 100;
};

// URL validation
export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Username validation
export const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

// Bio validation
export const validateBio = (bio) => {
  return bio.trim().length >= 10 && bio.trim().length <= 500;
};

// Height validation (in cm)
export const validateHeight = (height) => {
  const heightNum = Number(height);
  return !isNaN(heightNum) && heightNum >= 120 && heightNum <= 250;
};

// Zip code validation
export const validateZipCode = (zipCode) => {
  const zipRegex = /^\d{5}(-\d{4})?$/; // US zip code format
  return zipRegex.test(zipCode);
};

// Credit card validation (basic)
export const validateCreditCard = (cardNumber) => {
  const cardRegex = /^\d{13,19}$/;
  return cardRegex.test(cardNumber.replace(/\s/g, ''));
};

// CVV validation
export const validateCVV = (cvv) => {
  const cvvRegex = /^\d{3,4}$/;
  return cvvRegex.test(cvv);
};

// Expiry date validation (MM/YY format)
export const validateExpiryDate = (expiryDate) => {
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryRegex.test(expiryDate)) {
    return false;
  }
  
  const [month, year] = expiryDate.split('/');
  const today = new Date();
  const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
  
  return expiry > today;
};

// Form validation helper
export const validateForm = (formData, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(field => {
    const rules = validationRules[field];
    const value = formData[field];
    
    // Check if field is required
    if (rules.required && (!value || value.toString().trim() === '')) {
      errors[field] = `${field} is required`;
      return;
    }
    
    // Skip validation if field is empty and not required
    if (!value && !rules.required) {
      return;
    }
    
    // Apply validation rules
    if (rules.email && !validateEmail(value)) {
      errors[field] = 'Please enter a valid email address';
    }
    
    if (rules.password) {
      const passwordValidation = validatePassword(value);
      if (!passwordValidation.isValid) {
        errors[field] = passwordValidation.errors[0];
      }
    }
    
    if (rules.phone && !validatePhone(value)) {
      errors[field] = 'Please enter a valid phone number';
    }
    
    if (rules.name && !validateName(value)) {
      errors[field] = 'Please enter a valid name';
    }
    
    if (rules.username && !validateUsername(value)) {
      errors[field] = 'Username must be 3-20 characters long and contain only letters, numbers, and underscores';
    }
    
    if (rules.minLength && value.length < rules.minLength) {
      errors[field] = `${field} must be at least ${rules.minLength} characters long`;
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
      errors[field] = `${field} must be no more than ${rules.maxLength} characters long`;
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field] = rules.patternMessage || `${field} format is invalid`;
    }
    
    if (rules.custom && !rules.custom(value)) {
      errors[field] = rules.customMessage || `${field} is invalid`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Validate file upload
export const validateFileUpload = (file, options = {}) => {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif'],
    maxFiles = 1,
  } = options;
  
  const errors = [];
  
  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size must be less than ${maxSize / 1024 / 1024}MB`);
  }
  
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    errors.push(`File type must be one of: ${allowedTypes.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Validate multiple files
export const validateMultipleFiles = (files, options = {}) => {
  const { maxFiles = 5 } = options;
  
  if (files.length > maxFiles) {
    return {
      isValid: false,
      errors: [`Maximum ${maxFiles} files allowed`],
    };
  }
  
  const results = files.map(file => validateFileUpload(file, options));
  const allErrors = results.reduce((acc, result) => [...acc, ...result.errors], []);
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  };
};

// Social media profile validation
export const validateSocialProfile = (platform, url) => {
  const patterns = {
    instagram: /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/,
    twitter: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
    facebook: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]+\/?$/,
    linkedin: /^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9-]+\/?$/,
    tiktok: /^https?:\/\/(www\.)?tiktok\.com\/@[a-zA-Z0-9._]+\/?$/,
    snapchat: /^https?:\/\/(www\.)?snapchat\.com\/add\/[a-zA-Z0-9._-]+\/?$/,
  };
  
  const pattern = patterns[platform.toLowerCase()];
  if (!pattern) {
    return { isValid: false, error: 'Unsupported platform' };
  }
  
  const isValid = pattern.test(url);
  return {
    isValid,
    error: isValid ? null : `Invalid ${platform} URL format`,
  };
};

export default {
  validateEmail,
  validatePassword,
  validatePhone,
  validateName,
  validateAge,
  validateUrl,
  validateUsername,
  validateBio,
  validateHeight,
  validateZipCode,
  validateCreditCard,
  validateCVV,
  validateExpiryDate,
  validateForm,
  sanitizeInput,
  validateFileUpload,
  validateMultipleFiles,
  validateSocialProfile,
};