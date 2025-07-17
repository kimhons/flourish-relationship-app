const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Flourish brand colors
const COLORS = {
  primary: '#FF1B6B',      // Vibrant pink/magenta
  secondary: '#45CAFF',    // Sky blue
  accent: '#FFD700',       // Gold
  background: '#FFFFFF',   // White
  dark: '#1A1A1A',        // Dark gray
  gradient1: '#FF1B6B',    // Start gradient
  gradient2: '#45CAFF'     // End gradient
};

// Splash screen sizes for different platforms
const SPLASH_SIZES = {
  ios: [
    { width: 1125, height: 2436, name: 'splash-1125x2436.png', device: 'iPhone X/XS' },
    { width: 1242, height: 2688, name: 'splash-1242x2688.png', device: 'iPhone XS Max' },
    { width: 828, height: 1792, name: 'splash-828x1792.png', device: 'iPhone XR' },
    { width: 1242, height: 2208, name: 'splash-1242x2208.png', device: 'iPhone 6/7/8 Plus' },
    { width: 750, height: 1334, name: 'splash-750x1334.png', device: 'iPhone 6/7/8' },
    { width: 640, height: 1136, name: 'splash-640x1136.png', device: 'iPhone 5/SE' },
    { width: 1536, height: 2048, name: 'splash-1536x2048.png', device: 'iPad' },
    { width: 2048, height: 2732, name: 'splash-2048x2732.png', device: 'iPad Pro' }
  ],
  android: [
    { width: 480, height: 800, name: 'splash-480x800.png', density: 'hdpi' },
    { width: 720, height: 1280, name: 'splash-720x1280.png', density: 'xhdpi' },
    { width: 1080, height: 1920, name: 'splash-1080x1920.png', density: 'xxhdpi' },
    { width: 1440, height: 2560, name: 'splash-1440x2560.png', density: 'xxxhdpi' }
  ],
  web: [
    { width: 1920, height: 1080, name: 'splash-1920x1080.png', device: 'Desktop' },
    { width: 1366, height: 768, name: 'splash-1366x768.png', device: 'Laptop' },
    { width: 768, height: 1024, name: 'splash-768x1024.png', device: 'Tablet' },
    { width: 375, height: 667, name: 'splash-375x667.png', device: 'Mobile' }
  ]
};

// Create gradient background
function createGradientBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, COLORS.gradient1);
  gradient.addColorStop(0.5, '#FF4D8A');
  gradient.addColorStop(1, COLORS.gradient2);
  return gradient;
}

// Draw animated heart particles
function drawHeartParticles(ctx, width, height) {
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  
  const numParticles = 20;
  for (let i = 0; i < numParticles; i++) {
    const x = (width / numParticles) * i + Math.random() * 100;
    const y = (height / 4) + Math.random() * (height / 2);
    const size = 20 + Math.random() * 30;
    
    drawHeart(ctx, x, y, size, 'rgba(255, 255, 255, 0.1)');
  }
  
  ctx.restore();
}

// Draw heart shape
function drawHeart(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  
  const heartSize = size;
  const heartX = x - heartSize / 2;
  const heartY = y - heartSize / 3;
  
  // Left curve
  ctx.arc(heartX + heartSize * 0.25, heartY + heartSize * 0.25, heartSize * 0.25, 0, Math.PI, true);
  // Right curve
  ctx.arc(heartX + heartSize * 0.75, heartY + heartSize * 0.25, heartSize * 0.25, 0, Math.PI, true);
  // Bottom point
  ctx.lineTo(heartX + heartSize * 0.5, heartY + heartSize * 0.9);
  
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Draw flourish logo
function drawFlourishLogo(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.02;
  
  const petalSize = size * 0.12;
  const numPetals = 8;
  
  // Draw petals
  for (let i = 0; i < numPetals; i++) {
    const angle = (i * Math.PI * 2) / numPetals;
    const petalX = x + Math.cos(angle) * size * 0.25;
    const petalY = y + Math.sin(angle) * size * 0.25;
    
    ctx.beginPath();
    ctx.ellipse(petalX, petalY, petalSize, petalSize * 0.6, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Center circle with gradient
  const centerGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 0.15);
  centerGradient.addColorStop(0, COLORS.accent);
  centerGradient.addColorStop(1, '#FFB000');
  
  ctx.fillStyle = centerGradient;
  ctx.beginPath();
  ctx.arc(x, y, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

// Draw text with custom styling
function drawText(ctx, text, x, y, fontSize, color, font = 'Arial', weight = 'normal') {
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = `${weight} ${fontSize}px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add text shadow for depth
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = fontSize * 0.1;
  ctx.shadowOffsetY = fontSize * 0.05;
  
  ctx.fillText(text, x, y);
  ctx.restore();
}

// Draw loading animation dots
function drawLoadingDots(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  
  const dotSize = size * 0.1;
  const spacing = size * 0.3;
  
  for (let i = 0; i < 3; i++) {
    const dotX = x - spacing + (i * spacing);
    const opacity = 0.3 + (Math.sin(Date.now() * 0.01 + i) * 0.4);
    
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.arc(dotX, y, dotSize, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.restore();
}

// Main splash screen generation function
function generateSplashScreen(width, height, outputPath, platform = 'mobile') {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Create gradient background
  const gradient = createGradientBackground(ctx, width, height);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle pattern overlay
  drawHeartParticles(ctx, width, height);
  
  // Calculate responsive sizes
  const centerX = width / 2;
  const centerY = height / 2;
  const logoSize = Math.min(width, height) * 0.2;
  const titleSize = Math.min(width, height) * 0.06;
  const subtitleSize = Math.min(width, height) * 0.035;
  
  // Draw main logo
  drawFlourishLogo(ctx, centerX, centerY - logoSize * 0.5, logoSize, COLORS.background);
  
  // Draw app title
  drawText(ctx, 'Flourish', centerX, centerY + logoSize * 0.8, titleSize, COLORS.background, 'Arial', 'bold');
  
  // Draw subtitle
  drawText(ctx, 'AI-Powered Relationship Coach', centerX, centerY + logoSize * 1.3, subtitleSize, 'rgba(255, 255, 255, 0.9)', 'Arial', 'normal');
  
  // Draw loading indicator at bottom
  if (platform === 'mobile') {
    drawLoadingDots(ctx, centerX, height - height * 0.15, logoSize * 0.3, 'rgba(255, 255, 255, 0.8)');
  }
  
  // Add version info (small text at bottom)
  drawText(ctx, 'v1.0.0', centerX, height - height * 0.05, subtitleSize * 0.6, 'rgba(255, 255, 255, 0.6)', 'Arial', 'normal');
  
  // Save the splash screen
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated splash: ${outputPath}`);
}

// Generate launch screen for iOS (solid color version)
function generateLaunchScreen(width, height, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Solid color background (iOS launch screen requirement)
  ctx.fillStyle = COLORS.primary;
  ctx.fillRect(0, 0, width, height);
  
  // Simple centered logo
  const centerX = width / 2;
  const centerY = height / 2;
  const logoSize = Math.min(width, height) * 0.15;
  
  drawFlourishLogo(ctx, centerX, centerY, logoSize, COLORS.background);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated launch screen: ${outputPath}`);
}

// Create directories
function createDirectories() {
  const dirs = [
    'mobile/assets/splash/ios',
    'mobile/assets/splash/android',
    'mobile/assets/splash/web',
    'mobile/assets/splash/launch',
    'frontend/public/splash'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Generate all splash screens
function generateAllSplashScreens() {
  console.log('🎨 Generating Flourish App Splash Screens...');
  
  createDirectories();
  
  // Generate iOS splash screens
  console.log('📱 Generating iOS splash screens...');
  SPLASH_SIZES.ios.forEach(({ width, height, name, device }) => {
    generateSplashScreen(width, height, `mobile/assets/splash/ios/${name}`, 'ios');
    // Also generate launch screen version
    generateLaunchScreen(width, height, `mobile/assets/splash/launch/launch-${name}`);
  });
  
  // Generate Android splash screens
  console.log('🤖 Generating Android splash screens...');
  SPLASH_SIZES.android.forEach(({ width, height, name, density }) => {
    generateSplashScreen(width, height, `mobile/assets/splash/android/${name}`, 'android');
  });
  
  // Generate web splash screens
  console.log('🌐 Generating Web splash screens...');
  SPLASH_SIZES.web.forEach(({ width, height, name, device }) => {
    generateSplashScreen(width, height, `frontend/public/splash/${name}`, 'web');
  });
  
  // Generate default splash for web
  generateSplashScreen(1920, 1080, 'frontend/public/splash.png', 'web');
  
  console.log('✅ All splash screens generated successfully!');
}

// Run the generator
if (require.main === module) {
  generateAllSplashScreens();
}

module.exports = { generateAllSplashScreens, generateSplashScreen };