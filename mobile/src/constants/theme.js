export const Colors = {
  // Primary Colors
  primary: '#FF1B6B',
  primaryLight: '#FF4D8A',
  primaryDark: '#E01558',
  
  // Secondary Colors
  secondary: '#45CAFF',
  secondaryLight: '#69D4FF',
  secondaryDark: '#2BB6E6',
  
  // Neutral Colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  surfaceLight: '#FAFBFC',
  surfaceDark: '#E9ECEF',
  
  // Text Colors
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  textTertiary: '#ADB5BD',
  textLight: '#FFFFFF',
  
  // Input Colors
  inputBackground: '#F8F9FA',
  inputBorder: '#E9ECEF',
  inputFocused: '#FF1B6B',
  
  // Status Colors
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
  info: '#17A2B8',
  
  // Border Colors
  border: '#E9ECEF',
  borderLight: '#F8F9FA',
  borderDark: '#DEE2E6',
  
  // Shadow Colors
  shadow: '#000000',
  shadowLight: 'rgba(0, 0, 0, 0.1)',
  shadowMedium: 'rgba(0, 0, 0, 0.2)',
  shadowDark: 'rgba(0, 0, 0, 0.3)',
  
  // Gradient Colors
  gradientStart: '#FF1B6B',
  gradientEnd: '#45CAFF',
  
  // Social Media Colors
  facebook: '#1877F2',
  google: '#DB4437',
  apple: '#000000',
  
  // Utility Colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  
  // Dating App Specific
  like: '#4CAF50',
  pass: '#F44336',
  match: '#FFD700',
  online: '#4CAF50',
  offline: '#9E9E9E',
  
  // Premium Colors
  premium: '#FFD700',
  premiumGradientStart: '#FFD700',
  premiumGradientEnd: '#FFA000',
};

export const Typography = {
  // Font Families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    light: 'System',
  },
  
  // Font Sizes
  fontSize: {
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    extraLarge: 20,
    title: 24,
    heading: 28,
    display: 32,
  },
  
  // Font Weights
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  
  // Line Heights
  lineHeight: {
    small: 16,
    medium: 20,
    large: 24,
    extraLarge: 28,
    title: 32,
    heading: 36,
    display: 40,
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    extraWide: 1,
  },
};

export const Spacing = {
  // Base spacing unit
  unit: 8,
  
  // Spacing values
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  
  // Padding values
  padding: {
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
  
  // Margin values
  margin: {
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
  
  // Border radius
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    extraLarge: 16,
    round: 50,
  },
  
  // Screen padding
  screenPadding: {
    horizontal: 16,
    vertical: 24,
  },
};

export const Shadows = {
  small: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  
  medium: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  
  large: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  
  extraLarge: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const Layout = {
  // Screen dimensions
  window: {
    width: 375, // iPhone default
    height: 812, // iPhone default
  },
  
  // Header heights
  header: {
    height: 44,
    heightLarge: 56,
  },
  
  // Tab bar heights
  tabBar: {
    height: 50,
    heightLarge: 60,
  },
  
  // Button heights
  button: {
    small: 32,
    medium: 44,
    large: 56,
  },
  
  // Input heights
  input: {
    small: 36,
    medium: 44,
    large: 52,
  },
  
  // Avatar sizes
  avatar: {
    small: 32,
    medium: 44,
    large: 56,
    extraLarge: 72,
    huge: 100,
  },
  
  // Icon sizes
  icon: {
    small: 16,
    medium: 20,
    large: 24,
    extraLarge: 32,
  },
  
  // Card dimensions
  card: {
    minHeight: 120,
    borderRadius: 12,
  },
  
  // List item heights
  listItem: {
    small: 44,
    medium: 56,
    large: 72,
  },
};

export const Animation = {
  // Timing
  timing: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  
  // Easing
  easing: {
    easeInOut: 'ease-in-out',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    linear: 'linear',
  },
  
  // Spring configs
  spring: {
    gentle: {
      tension: 120,
      friction: 14,
    },
    wobbly: {
      tension: 180,
      friction: 12,
    },
    stiff: {
      tension: 200,
      friction: 26,
    },
  },
};

export const Gradients = {
  primary: {
    colors: [Colors.primary, Colors.primaryLight],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  secondary: {
    colors: [Colors.secondary, Colors.secondaryLight],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  sunset: {
    colors: [Colors.primary, Colors.secondary],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  premium: {
    colors: [Colors.premiumGradientStart, Colors.premiumGradientEnd],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
};

// Theme object for react-native-paper
export const PaperTheme = {
  colors: {
    primary: Colors.primary,
    accent: Colors.secondary,
    background: Colors.background,
    surface: Colors.surface,
    text: Colors.textPrimary,
    disabled: Colors.textTertiary,
    placeholder: Colors.textSecondary,
    backdrop: Colors.shadowMedium,
    notification: Colors.error,
  },
  fonts: {
    regular: {
      fontFamily: Typography.fontFamily.regular,
      fontWeight: Typography.fontWeight.regular,
    },
    medium: {
      fontFamily: Typography.fontFamily.medium,
      fontWeight: Typography.fontWeight.medium,
    },
    light: {
      fontFamily: Typography.fontFamily.light,
      fontWeight: Typography.fontWeight.light,
    },
    thin: {
      fontFamily: Typography.fontFamily.light,
      fontWeight: Typography.fontWeight.light,
    },
  },
  roundness: Spacing.borderRadius.medium,
  animation: {
    scale: Animation.timing.normal,
  },
};

export default {
  Colors,
  Typography,
  Spacing,
  Shadows,
  Layout,
  Animation,
  Gradients,
  PaperTheme,
};