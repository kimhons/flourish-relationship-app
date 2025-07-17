#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if canvas is available
let canvas;
try {
  canvas = require('canvas');
} catch (error) {
  console.error('❌ Canvas module not found. Installing...');
  console.log('📦 Run: npm install canvas');
  process.exit(1);
}

const { createCanvas, loadImage } = canvas;

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

// Icon sizes for different platforms
const ICON_SIZES = {
  ios: [
    { size: 20, name: 'icon-20x20.png' },
    { size: 29, name: 'icon-29x29.png' },
    { size: 40, name: 'icon-40x40.png' },
    { size: 58, name: 'icon-58x58.png' },
    { size: 60, name: 'icon-60x60.png' },
    { size: 80, name: 'icon-80x80.png' },
    { size: 87, name: 'icon-87x87.png' },
    { size: 120, name: 'icon-120x120.png' },
    { size: 180, name: 'icon-180x180.png' },
    { size: 1024, name: 'icon-1024x1024.png' }
  ],
  android: [
    { size: 48, name: 'icon-48x48.png' },
    { size: 72, name: 'icon-72x72.png' },
    { size: 96, name: 'icon-96x96.png' },
    { size: 144, name: 'icon-144x144.png' },
    { size: 192, name: 'icon-192x192.png' },
    { size: 512, name: 'icon-512x512.png' }
  ],
  web: [
    { size: 72, name: 'icon-72x72.png' },
    { size: 96, name: 'icon-96x96.png' },
    { size: 128, name: 'icon-128x128.png' },
    { size: 144, name: 'icon-144x144.png' },
    { size: 152, name: 'icon-152x152.png' },
    { size: 192, name: 'icon-192x192.png' },
    { size: 384, name: 'icon-384x384.png' },
    { size: 512, name: 'icon-512x512.png' }
  ]
};

// Create gradient background
function createGradientBackground(ctx, size) {
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, COLORS.gradient1);
  gradient.addColorStop(0.5, '#FF4D8A');
  gradient.addColorStop(1, COLORS.gradient2);
  return gradient;
}

// Draw heart shape (representing love/relationships)
function drawHeart(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  
  const heartSize = size * 0.4;
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

// Draw AI circuit pattern
function drawCircuitPattern(ctx, x, y, size, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.02;
  ctx.lineCap = 'round';
  
  const circuitSize = size * 0.6;
  const startX = x - circuitSize / 2;
  const startY = y - circuitSize / 2;
  
  // Draw circuit lines
  ctx.beginPath();
  ctx.moveTo(startX, startY + circuitSize * 0.3);
  ctx.lineTo(startX + circuitSize * 0.3, startY + circuitSize * 0.3);
  ctx.lineTo(startX + circuitSize * 0.3, startY);
  ctx.lineTo(startX + circuitSize * 0.7, startY);
  ctx.lineTo(startX + circuitSize * 0.7, startY + circuitSize * 0.7);
  ctx.lineTo(startX + circuitSize, startY + circuitSize * 0.7);
  ctx.stroke();
  
  // Draw circuit nodes
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(startX + circuitSize * 0.3, startY + circuitSize * 0.3, size * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(startX + circuitSize * 0.7, startY, size * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

// Draw flourish/flower pattern
function drawFlourish(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.015;
  
  const petalSize = size * 0.12;
  const numPetals = 8;
  
  // Draw petals
  for (let i = 0; i < numPetals; i++) {
    const angle = (i * Math.PI * 2) / numPetals;
    const petalX = x + Math.cos(angle) * size * 0.2;
    const petalY = y + Math.sin(angle) * size * 0.2;
    
    ctx.beginPath();
    ctx.ellipse(petalX, petalY, petalSize, petalSize * 0.6, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Center circle with gradient
  const centerGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 0.12);
  centerGradient.addColorStop(0, COLORS.accent);
  centerGradient.addColorStop(1, '#FFB000');
  
  ctx.fillStyle = centerGradient;
  ctx.beginPath();
  ctx.arc(x, y, size * 0.12, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

// Main icon generation function
function generateIcon(size, outputPath) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, size, size);
  
  // Create gradient background
  const gradient = createGradientBackground(ctx, size);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Add subtle shadow/depth
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = size * 0.02;
  ctx.shadowOffsetY = size * 0.01;
  
  // Draw main flourish pattern
  drawFlourish(ctx, size / 2, size / 2, size, COLORS.background);
  
  // Add heart element for relationship focus
  drawHeart(ctx, size / 2, size * 0.75, size * 0.25, COLORS.background);
  
  // Add AI circuit pattern (subtle)
  ctx.globalAlpha = 0.4;
  drawCircuitPattern(ctx, size / 2, size * 0.25, size * 0.3, COLORS.background);
  ctx.globalAlpha = 1.0;
  
  // Add border for polish
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = size * 0.005;
  ctx.strokeRect(0, 0, size, size);
  
  // Save the icon
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Generated: ${path.basename(outputPath)}`);
}

// Generate adaptive icon for Android
function generateAdaptiveIcon(size, outputPath, type = 'foreground') {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, size, size);
  
  if (type === 'background') {
    // Background layer - solid gradient
    const gradient = createGradientBackground(ctx, size);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  } else {
    // Foreground layer - icon elements only
    drawFlourish(ctx, size / 2, size / 2, size, COLORS.background);
    drawHeart(ctx, size / 2, size * 0.75, size * 0.25, COLORS.background);
    
    ctx.globalAlpha = 0.4;
    drawCircuitPattern(ctx, size / 2, size * 0.25, size * 0.3, COLORS.background);
    ctx.globalAlpha = 1.0;
  }
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Generated adaptive ${type}: ${path.basename(outputPath)}`);
}

// Create directories
function createDirectories() {
  const dirs = [
    'mobile/assets/icons/ios',
    'mobile/assets/icons/android',
    'mobile/assets/icons/web',
    'mobile/assets/icons/adaptive',
    'mobile/assets/splash/ios',
    'mobile/assets/splash/android',
    'mobile/assets/splash/web',
    'mobile/assets/splash/launch',
    'frontend/public/icons',
    'frontend/public/splash'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Generate splash screen
function generateSplashScreen(width, height, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, width, height);
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, COLORS.gradient1);
  gradient.addColorStop(0.5, '#FF4D8A');
  gradient.addColorStop(1, COLORS.gradient2);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add subtle heart particles
  ctx.save();
  ctx.globalAlpha = 0.1;
  const numParticles = 15;
  for (let i = 0; i < numParticles; i++) {
    const x = (width / numParticles) * i + Math.random() * 100;
    const y = (height / 4) + Math.random() * (height / 2);
    const size = 20 + Math.random() * 30;
    
    drawHeart(ctx, x, y, size, COLORS.background);
  }
  ctx.restore();
  
  // Calculate responsive sizes
  const centerX = width / 2;
  const centerY = height / 2;
  const logoSize = Math.min(width, height) * 0.2;
  const titleSize = Math.min(width, height) * 0.06;
  const subtitleSize = Math.min(width, height) * 0.035;
  
  // Draw main logo
  drawFlourish(ctx, centerX, centerY - logoSize * 0.5, logoSize, COLORS.background);
  
  // Draw app title
  ctx.save();
  ctx.fillStyle = COLORS.background;
  ctx.font = `bold ${titleSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = titleSize * 0.1;
  ctx.shadowOffsetY = titleSize * 0.05;
  ctx.fillText('Flourish', centerX, centerY + logoSize * 0.8);
  ctx.restore();
  
  // Draw subtitle
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = `${subtitleSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = subtitleSize * 0.1;
  ctx.shadowOffsetY = subtitleSize * 0.05;
  ctx.fillText('AI-Powered Relationship Coach', centerX, centerY + logoSize * 1.3);
  ctx.restore();
  
  // Add version info
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = `${subtitleSize * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('v1.0.0', centerX, height - height * 0.05);
  ctx.restore();
  
  // Save the splash screen
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Generated splash: ${path.basename(outputPath)}`);
}

// Generate all assets
function generateAllAssets() {
  console.log('🎨 Generating Flourish App Icons and Assets...');
  console.log('📱 Creating beautiful, meaningful designs for users...');
  
  createDirectories();
  
  // Generate iOS icons
  console.log('\n📱 Generating iOS icons...');
  ICON_SIZES.ios.forEach(({ size, name }) => {
    generateIcon(size, `mobile/assets/icons/ios/${name}`);
  });
  
  // Generate Android icons
  console.log('\n🤖 Generating Android icons...');
  ICON_SIZES.android.forEach(({ size, name }) => {
    generateIcon(size, `mobile/assets/icons/android/${name}`);
  });
  
  // Generate adaptive icons for Android
  console.log('\n🎯 Generating Android adaptive icons...');
  generateAdaptiveIcon(512, 'mobile/assets/icons/adaptive/adaptive-icon-background.png', 'background');
  generateAdaptiveIcon(512, 'mobile/assets/icons/adaptive/adaptive-icon-foreground.png', 'foreground');
  
  // Generate web icons
  console.log('\n🌐 Generating Web icons...');
  ICON_SIZES.web.forEach(({ size, name }) => {
    generateIcon(size, `frontend/public/icons/${name}`);
  });
  
  // Generate favicon
  console.log('\n🌐 Generating Favicons...');
  generateIcon(16, 'frontend/public/favicon-16x16.png');
  generateIcon(32, 'frontend/public/favicon-32x32.png');
  generateIcon(48, 'frontend/public/favicon.ico');
  
  // Generate splash screens
  console.log('\n🎨 Generating Splash Screens...');
  
  // iOS splash screens
  const iosSplashSizes = [
    { width: 1125, height: 2436, name: 'splash-1125x2436.png' },
    { width: 1242, height: 2688, name: 'splash-1242x2688.png' },
    { width: 828, height: 1792, name: 'splash-828x1792.png' },
    { width: 1242, height: 2208, name: 'splash-1242x2208.png' },
    { width: 750, height: 1334, name: 'splash-750x1334.png' },
    { width: 640, height: 1136, name: 'splash-640x1136.png' },
    { width: 1536, height: 2048, name: 'splash-1536x2048.png' },
    { width: 2048, height: 2732, name: 'splash-2048x2732.png' }
  ];
  
  iosSplashSizes.forEach(({ width, height, name }) => {
    generateSplashScreen(width, height, `mobile/assets/splash/ios/${name}`);
  });
  
  // Android splash screens
  const androidSplashSizes = [
    { width: 480, height: 800, name: 'splash-480x800.png' },
    { width: 720, height: 1280, name: 'splash-720x1280.png' },
    { width: 1080, height: 1920, name: 'splash-1080x1920.png' },
    { width: 1440, height: 2560, name: 'splash-1440x2560.png' }
  ];
  
  androidSplashSizes.forEach(({ width, height, name }) => {
    generateSplashScreen(width, height, `mobile/assets/splash/android/${name}`);
  });
  
  // Web splash screens
  const webSplashSizes = [
    { width: 1920, height: 1080, name: 'splash-1920x1080.png' },
    { width: 1366, height: 768, name: 'splash-1366x768.png' },
    { width: 768, height: 1024, name: 'splash-768x1024.png' },
    { width: 375, height: 667, name: 'splash-375x667.png' }
  ];
  
  webSplashSizes.forEach(({ width, height, name }) => {
    generateSplashScreen(width, height, `frontend/public/splash/${name}`);
  });
  
  // Generate default splash for web
  generateSplashScreen(1920, 1080, 'frontend/public/splash.png');
  
  console.log('\n🎉 All assets generated successfully!');
  console.log('\n📊 Asset Summary:');
  console.log(`📱 iOS Icons: ${ICON_SIZES.ios.length} files`);
  console.log(`🤖 Android Icons: ${ICON_SIZES.android.length} files`);
  console.log(`🌐 Web Icons: ${ICON_SIZES.web.length} files`);
  console.log(`🎨 Splash Screens: ${iosSplashSizes.length + androidSplashSizes.length + webSplashSizes.length + 1} files`);
  console.log(`🎯 Adaptive Icons: 2 files`);
  console.log(`🌐 Favicons: 3 files`);
  
  const totalFiles = ICON_SIZES.ios.length + ICON_SIZES.android.length + ICON_SIZES.web.length + 
                    iosSplashSizes.length + androidSplashSizes.length + webSplashSizes.length + 1 + 2 + 3;
  
  console.log(`\n✅ Total: ${totalFiles} beautiful, meaningful assets created!`);
  console.log('\n🎨 Design Features:');
  console.log('• Beautiful gradient backgrounds (Pink to Blue)');
  console.log('• Flourish flower pattern (represents growth)');
  console.log('• Heart elements (represents love/relationships)');
  console.log('• AI circuit patterns (represents technology)');
  console.log('• Professional polish with shadows and borders');
  console.log('• Responsive sizing for all platforms');
  console.log('• Meaningful symbolism for users');
}

// Run the generator
if (require.main === module) {
  generateAllAssets();
}

module.exports = { generateAllAssets, generateIcon, generateSplashScreen };