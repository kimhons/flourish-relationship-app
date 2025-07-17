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
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = size * 0.015;
  
  const petalSize = size * 0.15;
  const numPetals = 6;
  
  for (let i = 0; i < numPetals; i++) {
    const angle = (i * Math.PI * 2) / numPetals;
    const petalX = x + Math.cos(angle) * size * 0.2;
    const petalY = y + Math.sin(angle) * size * 0.2;
    
    ctx.beginPath();
    ctx.ellipse(petalX, petalY, petalSize, petalSize * 0.6, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Center circle
  ctx.beginPath();
  ctx.arc(x, y, size * 0.08, 0, Math.PI * 2);
  ctx.fillStyle = COLORS.accent;
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
  drawHeart(ctx, size / 2, size * 0.7, size * 0.3, COLORS.background);
  
  // Add AI circuit pattern (subtle)
  ctx.globalAlpha = 0.3;
  drawCircuitPattern(ctx, size / 2, size * 0.3, size * 0.4, COLORS.background);
  ctx.globalAlpha = 1.0;
  
  // Add border for polish
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = size * 0.005;
  ctx.strokeRect(0, 0, size, size);
  
  // Save the icon
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${outputPath}`);
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
    drawHeart(ctx, size / 2, size * 0.7, size * 0.3, COLORS.background);
    
    ctx.globalAlpha = 0.3;
    drawCircuitPattern(ctx, size / 2, size * 0.3, size * 0.4, COLORS.background);
    ctx.globalAlpha = 1.0;
  }
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated adaptive ${type}: ${outputPath}`);
}

// Create directories
function createDirectories() {
  const dirs = [
    'mobile/assets/icons/ios',
    'mobile/assets/icons/android',
    'mobile/assets/icons/web',
    'mobile/assets/icons/adaptive',
    'frontend/public/icons'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Generate all icons
function generateAllIcons() {
  console.log('🎨 Generating Flourish App Icons...');
  
  createDirectories();
  
  // Generate iOS icons
  console.log('📱 Generating iOS icons...');
  ICON_SIZES.ios.forEach(({ size, name }) => {
    generateIcon(size, `mobile/assets/icons/ios/${name}`);
  });
  
  // Generate Android icons
  console.log('🤖 Generating Android icons...');
  ICON_SIZES.android.forEach(({ size, name }) => {
    generateIcon(size, `mobile/assets/icons/android/${name}`);
  });
  
  // Generate adaptive icons for Android
  console.log('🎯 Generating Android adaptive icons...');
  generateAdaptiveIcon(512, 'mobile/assets/icons/adaptive/adaptive-icon-background.png', 'background');
  generateAdaptiveIcon(512, 'mobile/assets/icons/adaptive/adaptive-icon-foreground.png', 'foreground');
  
  // Generate web icons
  console.log('🌐 Generating Web icons...');
  ICON_SIZES.web.forEach(({ size, name }) => {
    generateIcon(size, `frontend/public/icons/${name}`);
  });
  
  // Generate favicon
  generateIcon(32, 'frontend/public/favicon.ico');
  generateIcon(16, 'frontend/public/favicon-16x16.png');
  generateIcon(32, 'frontend/public/favicon-32x32.png');
  
  console.log('✅ All icons generated successfully!');
}

// Run the generator
if (require.main === module) {
  generateAllIcons();
}

module.exports = { generateAllIcons, generateIcon };