/**
 * Shared Utility Functions for Flourish Relationship Platform
 */

import { format, parseISO, differenceInYears, isValid } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

// ============================================================================
// DATE UTILITIES
// ============================================================================

export const dateUtils = {
  /**
   * Format date to human-readable string
   */
  formatDate: (date: Date | string, formatString: string = 'MMM dd, yyyy'): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj) ? format(dateObj, formatString) : '';
  },

  /**
   * Calculate age from date of birth
   */
  calculateAge: (dateOfBirth: Date | string): number => {
    const dob = typeof dateOfBirth === 'string' ? parseISO(dateOfBirth) : dateOfBirth;
    return isValid(dob) ? differenceInYears(new Date(), dob) : 0;
  },

  /**
   * Get relative time string (e.g., "2 hours ago")
   */
  getRelativeTime: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';

    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    
    return format(dateObj, 'MMM dd');
  },

  /**
   * Check if date is today
   */
  isToday: (date: Date | string): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return false;
    
    const today = new Date();
    return dateObj.toDateString() === today.toDateString();
  }
};

// ============================================================================
// STRING UTILITIES
// ============================================================================

export const stringUtils = {
  /**
   * Capitalize first letter of string
   */
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Convert string to title case
   */
  toTitleCase: (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  },

  /**
   * Truncate string with ellipsis
   */
  truncate: (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
  },

  /**
   * Generate random string
   */
  generateRandomString: (length: number = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Convert camelCase to snake_case
   */
  camelToSnake: (str: string): string => {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  },

  /**
   * Convert snake_case to camelCase
   */
  snakeToCamel: (str: string): string => {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  },

  /**
   * Remove HTML tags from string
   */
  stripHtml: (str: string): string => {
    return str.replace(/<[^>]*>/g, '');
  },

  /**
   * Extract initials from name
   */
  getInitials: (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

export const validationUtils = {
  /**
   * Validate email address
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate phone number
   */
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  },

  /**
   * Validate password strength
   */
  validatePassword: (password: string): {
    isValid: boolean;
    score: number;
    feedback: string[];
  } => {
    const feedback: string[] = [];
    let score = 0;

    if (password.length >= 8) score += 1;
    else feedback.push('Password must be at least 8 characters long');

    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Password must contain lowercase letters');

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Password must contain uppercase letters');

    if (/\d/.test(password)) score += 1;
    else feedback.push('Password must contain numbers');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push('Password must contain special characters');

    return {
      isValid: score >= 4,
      score,
      feedback
    };
  },

  /**
   * Validate age (18+)
   */
  isValidAge: (dateOfBirth: Date | string): boolean => {
    const age = dateUtils.calculateAge(dateOfBirth);
    return age >= 18;
  },

  /**
   * Validate URL
   */
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
};

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

export const arrayUtils = {
  /**
   * Remove duplicates from array
   */
  unique: <T>(array: T[]): T[] => {
    return [...new Set(array)];
  },

  /**
   * Shuffle array randomly
   */
  shuffle: <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  /**
   * Group array by key
   */
  groupBy: <T>(array: T[], key: keyof T): Record<string, T[]> => {
    return array.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  },

  /**
   * Chunk array into smaller arrays
   */
  chunk: <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },

  /**
   * Get random item from array
   */
  randomItem: <T>(array: T[]): T | undefined => {
    return array[Math.floor(Math.random() * array.length)];
  }
};

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

export const objectUtils = {
  /**
   * Deep clone object
   */
  deepClone: <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Check if object is empty
   */
  isEmpty: (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length === 0;
  },

  /**
   * Pick specific keys from object
   */
  pick: <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },

  /**
   * Omit specific keys from object
   */
  omit: <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
    const result = { ...obj };
    keys.forEach(key => {
      delete result[key];
    });
    return result;
  },

  /**
   * Flatten nested object
   */
  flatten: (obj: Record<string, any>, prefix: string = ''): Record<string, any> => {
    const flattened: Record<string, any> = {};
    
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(flattened, objectUtils.flatten(value, newKey));
      } else {
        flattened[newKey] = value;
      }
    });
    
    return flattened;
  }
};

// ============================================================================
// NUMBER UTILITIES
// ============================================================================

export const numberUtils = {
  /**
   * Format number with commas
   */
  formatNumber: (num: number): string => {
    return num.toLocaleString();
  },

  /**
   * Format currency
   */
  formatCurrency: (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(amount);
  },

  /**
   * Generate random number between min and max
   */
  randomBetween: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Round to specific decimal places
   */
  roundTo: (num: number, decimals: number): number => {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
  },

  /**
   * Clamp number between min and max
   */
  clamp: (num: number, min: number, max: number): number => {
    return Math.min(Math.max(num, min), max);
  },

  /**
   * Calculate percentage
   */
  percentage: (value: number, total: number): number => {
    return total === 0 ? 0 : (value / total) * 100;
  }
};

// ============================================================================
// COLOR UTILITIES
// ============================================================================

export const colorUtils = {
  /**
   * Convert hex to RGB
   */
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  /**
   * Convert RGB to hex
   */
  rgbToHex: (r: number, g: number, b: number): string => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  },

  /**
   * Generate random color
   */
  randomColor: (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  /**
   * Get contrast color (black or white)
   */
  getContrastColor: (hex: string): string => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return '#000000';
    
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  }
};

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

export const storageUtils = {
  /**
   * Set item in localStorage with JSON serialization
   */
  setItem: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  /**
   * Get item from localStorage with JSON parsing
   */
  getItem: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue || null;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  /**
   * Clear all localStorage
   */
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

// ============================================================================
// DEBOUNCE & THROTTLE UTILITIES
// ============================================================================

export const performanceUtils = {
  /**
   * Debounce function execution
   */
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  /**
   * Throttle function execution
   */
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void => {
    let lastCall = 0;
    
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  }
};

// ============================================================================
// ID GENERATION UTILITIES
// ============================================================================

export const idUtils = {
  /**
   * Generate UUID v4
   */
  generateUuid: (): string => {
    return uuidv4();
  },

  /**
   * Generate short ID
   */
  generateShortId: (length: number = 8): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Generate numeric ID
   */
  generateNumericId: (length: number = 6): string => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  }
};

// ============================================================================
// EXPORT ALL UTILITIES
// ============================================================================

export {
  dateUtils,
  stringUtils,
  validationUtils,
  arrayUtils,
  objectUtils,
  numberUtils,
  colorUtils,
  storageUtils,
  performanceUtils,
  idUtils
};

