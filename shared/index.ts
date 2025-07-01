/**
 * Flourish Shared Library
 * 
 * This package contains all shared types, utilities, constants, and validators
 * used across the Flourish relationship platform.
 */

// Export all types
export * from './types';
export * from './types/api';
export * from './types/auth';
export * from './types/notifications';
export * from './types/events';

// Export all utilities
export * from './utils';

// Export all constants
export * from './constants';

// Export validators (to be created)
export * from './validators';

// Re-export commonly used external dependencies
export { v4 as uuidv4 } from 'uuid';
export { format, parseISO, differenceInYears, isValid } from 'date-fns';

