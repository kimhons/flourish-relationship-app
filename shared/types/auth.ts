/**
 * Authentication Types for Flourish Relationship Platform
 */

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  tokens: AuthTokens | null;
  loading: boolean;
  error: string | null;
}

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  isVerified: boolean;
  subscriptionTier: string;
  profileComplete: boolean;
  permissions: string[];
  lastLogin: Date;
  createdAt: Date;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  scope: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  marketingConsent?: boolean;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface EmailVerification {
  token: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface TwoFactorSetup {
  secret: string;
  qrCode: string;
  backupCodes: string[];
}

export interface TwoFactorVerification {
  code: string;
  backupCode?: string;
}

export enum AuthProvider {
  EMAIL = 'email',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
  PHONE = 'phone'
}

export enum AuthAction {
  LOGIN = 'login',
  LOGOUT = 'logout',
  REGISTER = 'register',
  REFRESH_TOKEN = 'refresh_token',
  VERIFY_EMAIL = 'verify_email',
  RESET_PASSWORD = 'reset_password',
  CHANGE_PASSWORD = 'change_password',
  ENABLE_2FA = 'enable_2fa',
  DISABLE_2FA = 'disable_2fa'
}

