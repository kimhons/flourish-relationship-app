/**
 * Security utilities for input sanitization and validation
 * Protects against XSS, SQL injection, and other attacks
 */

import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

// Configure DOMPurify with strict settings
const purifyConfig = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li'],
  ALLOWED_ATTR: ['href', 'target', 'rel'],
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
  SAFE_FOR_TEMPLATES: true,
  WHOLE_DOCUMENT: false,
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  FORCE_BODY: true,
  SANITIZE_DOM: true,
  KEEP_CONTENT: false,
  IN_PLACE: false
};

/**
 * Sanitize different types of input
 * @param {string} input - The input to sanitize
 * @param {string} type - The type of input
 * @returns {string} Sanitized input
 */
export const sanitizeInput = (input, type = 'text') => {
  if (!input) return '';
  
  // Convert to string if not already
  const inputStr = String(input);
  
  switch (type) {
    case 'html':
      // Sanitize HTML content
      return DOMPurify.sanitize(inputStr, purifyConfig);
      
    case 'email':
      // Normalize and validate email
      const normalizedEmail = validator.normalizeEmail(inputStr);
      return validator.isEmail(normalizedEmail || '') ? normalizedEmail : '';
      
    case 'url':
      // Validate and sanitize URL
      const trimmedUrl = inputStr.trim();
      if (validator.isURL(trimmedUrl, { protocols: ['http', 'https'] })) {
        return encodeURI(trimmedUrl);
      }
      return '';
      
    case 'phone':
      // Clean phone number
      return inputStr.replace(/[^\d+\-\s()]/g, '').slice(0, 20);
      
    case 'username':
      // Allow only alphanumeric, underscore, and dash
      return inputStr.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 30);
      
    case 'alphanumeric':
      // Allow only letters and numbers
      return inputStr.replace(/[^a-zA-Z0-9]/g, '');
      
    case 'numeric':
      // Allow only numbers
      return inputStr.replace(/[^\d]/g, '');
      
    case 'name':
      // Allow letters, spaces, apostrophes, and hyphens
      return inputStr.replace(/[^a-zA-Z\s'-]/g, '').slice(0, 50);
      
    case 'message':
      // Escape HTML but allow some formatting
      return validator.escape(inputStr).slice(0, 5000);
      
    case 'search':
      // Clean search queries
      return inputStr.replace(/[<>\"'%;()&+]/g, '').slice(0, 100);
      
    case 'text':
    default:
      // Default text sanitization
      return validator.escape(inputStr);
  }
};

/**
 * Validate and sanitize object with schema
 * @param {object} data - Data to validate
 * @param {object} schema - Validation schema
 * @returns {object} Sanitized data
 */
export const validateAndSanitize = (data, schema) => {
  const sanitized = {};
  const errors = {};
  
  Object.keys(schema).forEach(key => {
    const value = data[key];
    const rules = schema[key];
    
    // Check if required
    if (rules.required && !value) {
      errors[key] = `${key} is required`;
      return;
    }
    
    // Skip if not provided and not required
    if (!value && !rules.required) {
      return;
    }
    
    // Sanitize based on type
    let sanitizedValue = sanitizeInput(value, rules.type);
    
    // Additional validation
    if (rules.validate) {
      const validationResult = rules.validate(sanitizedValue);
      if (validationResult !== true) {
        errors[key] = validationResult || `Invalid ${key}`;
        return;
      }
    }
    
    // Length validation
    if (rules.minLength && sanitizedValue.length < rules.minLength) {
      errors[key] = `${key} must be at least ${rules.minLength} characters`;
      return;
    }
    
    if (rules.maxLength && sanitizedValue.length > rules.maxLength) {
      sanitizedValue = sanitizedValue.slice(0, rules.maxLength);
    }
    
    // Pattern validation
    if (rules.pattern && !rules.pattern.test(sanitizedValue)) {
      errors[key] = `${key} format is invalid`;
      return;
    }
    
    sanitized[key] = sanitizedValue;
  });
  
  return {
    data: sanitized,
    errors: Object.keys(errors).length > 0 ? errors : null,
    isValid: Object.keys(errors).length === 0
  };
};

/**
 * Sanitize file upload
 * @param {File} file - File to validate
 * @param {object} options - Validation options
 * @returns {object} Validation result
 */
export const validateFileUpload = (file, options = {}) => {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
  } = options;
  
  const errors = [];
  
  // Check file exists
  if (!file) {
    return { isValid: false, errors: ['No file selected'] };
  }
  
  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size exceeds ${maxSize / 1024 / 1024}MB limit`);
  }
  
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    errors.push('Invalid file type');
  }
  
  // Check file extension
  const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
  if (!allowedExtensions.includes(extension)) {
    errors.push('Invalid file extension');
  }
  
  // Sanitize filename
  const sanitizedName = file.name
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/\.{2,}/g, '.')
    .slice(0, 255);
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedName
  };
};

/**
 * Create secure headers for API requests
 * @param {object} additionalHeaders - Additional headers to include
 * @returns {object} Secure headers
 */
export const getSecureHeaders = (additionalHeaders = {}) => {
  const token = localStorage.getItem('token');
  
  return {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': getCSRFToken(),
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...additionalHeaders
  };
};

/**
 * Get CSRF token
 * @returns {string} CSRF token
 */
export const getCSRFToken = () => {
  // Get from meta tag or generate
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  if (metaTag) {
    return metaTag.getAttribute('content');
  }
  
  // Get from cookie
  const match = document.cookie.match(/csrf_token=([^;]+)/);
  if (match) {
    return match[1];
  }
  
  // Generate new token (should be done server-side in production)
  return generateSecureToken();
};

/**
 * Generate secure random token
 * @param {number} length - Token length
 * @returns {string} Secure token
 */
export const generateSecureToken = (length = 32) => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Sanitize URL parameters
 * @param {object} params - URL parameters
 * @returns {string} Sanitized query string
 */
export const sanitizeURLParams = (params) => {
  const sanitized = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    const sanitizedKey = encodeURIComponent(key);
    const sanitizedValue = encodeURIComponent(String(value));
    sanitized.append(sanitizedKey, sanitizedValue);
  });
  
  return sanitized.toString();
};

/**
 * Check for common XSS patterns
 * @param {string} input - Input to check
 * @returns {boolean} True if potentially dangerous
 */
export const containsXSSPatterns = (input) => {
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<img[^>]*onerror\s*=/gi,
    /<svg[^>]*onload\s*=/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi,
    /<embed[^>]*>/gi,
    /<object[^>]*>/gi
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Sanitize JSON data
 * @param {any} data - Data to sanitize
 * @returns {any} Sanitized data
 */
export const sanitizeJSON = (data) => {
  if (typeof data === 'string') {
    return sanitizeInput(data);
  }
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeJSON(item));
  }
  
  if (data && typeof data === 'object') {
    const sanitized = {};
    Object.entries(data).forEach(([key, value]) => {
      sanitized[sanitizeInput(key, 'alphanumeric')] = sanitizeJSON(value);
    });
    return sanitized;
  }
  
  return data;
};

// Export validation schemas for common forms
export const validationSchemas = {
  login: {
    email: {
      type: 'email',
      required: true,
      validate: (value) => validator.isEmail(value) || 'Invalid email address'
    },
    password: {
      type: 'text',
      required: true,
      minLength: 8,
      maxLength: 128
    }
  },
  
  profile: {
    displayName: {
      type: 'name',
      required: true,
      minLength: 2,
      maxLength: 50
    },
    bio: {
      type: 'message',
      required: false,
      maxLength: 500
    },
    age: {
      type: 'numeric',
      required: true,
      validate: (value) => {
        const age = parseInt(value);
        return (age >= 18 && age <= 100) || 'Age must be between 18 and 100';
      }
    }
  },
  
  message: {
    content: {
      type: 'message',
      required: true,
      minLength: 1,
      maxLength: 5000
    }
  }
};

export default {
  sanitizeInput,
  validateAndSanitize,
  validateFileUpload,
  getSecureHeaders,
  getCSRFToken,
  generateSecureToken,
  sanitizeURLParams,
  containsXSSPatterns,
  sanitizeJSON,
  validationSchemas
};