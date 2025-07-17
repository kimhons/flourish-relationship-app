#!/usr/bin/env node

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

// Generate SVG icon
function generateSVGIcon(size) {
  const halfSize = size / 2;
  const petalRadius = size * 0.12;
  const heartSize = size * 0.1;
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.gradient1};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FF4D8A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.gradient2};stop-opacity:1" />
    </linearGradient>
    <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${COLORS.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFB000;stop-opacity:1" />
    </radialGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="url(#backgroundGradient)" />
  
  <!-- Flourish petals -->
  <g transform="translate(${halfSize},${halfSize})" filter="url(#shadow)">
    ${Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45) - 90;
      const x = Math.cos(angle * Math.PI / 180) * (size * 0.2);
      const y = Math.sin(angle * Math.PI / 180) * (size * 0.2);
      return `<ellipse cx="${x}" cy="${y}" rx="${petalRadius}" ry="${petalRadius * 0.6}" 
                transform="rotate(${angle} ${x} ${y})" fill="${COLORS.background}" opacity="0.9"/>`;
    }).join('')}
    
    <!-- Center circle -->
    <circle cx="0" cy="0" r="${size * 0.12}" fill="url(#centerGradient)" />
  </g>
  
  <!-- Heart element -->
  <g transform="translate(${halfSize},${size * 0.75})" filter="url(#shadow)">
    <path d="M 0,-${heartSize} 
             C -${heartSize * 0.5},-${heartSize * 1.5} -${heartSize * 1.5},-${heartSize * 1.5} -${heartSize * 1.5},-${heartSize * 0.5}
             C -${heartSize * 1.5},${heartSize * 0.5} -${heartSize * 0.5},${heartSize * 1.5} 0,${heartSize * 2}
             C ${heartSize * 0.5},${heartSize * 1.5} ${heartSize * 1.5},${heartSize * 0.5} ${heartSize * 1.5},-${heartSize * 0.5}
             C ${heartSize * 1.5},-${heartSize * 1.5} ${heartSize * 0.5},-${heartSize * 1.5} 0,-${heartSize}
             Z" 
          fill="${COLORS.background}" opacity="0.9"/>
  </g>
  
  <!-- AI Circuit pattern -->
  <g transform="translate(${halfSize},${size * 0.25})" opacity="0.4">
    <path d="M -${size * 0.15},-${size * 0.05} L ${size * 0.05},-${size * 0.05} L ${size * 0.05},-${size * 0.15} 
             L ${size * 0.15},-${size * 0.15} L ${size * 0.15},${size * 0.15} L ${size * 0.25},${size * 0.15}" 
          stroke="${COLORS.background}" stroke-width="${size * 0.01}" fill="none" stroke-linecap="round"/>
    <circle cx="${size * 0.05}" cy="-${size * 0.05}" r="${size * 0.015}" fill="${COLORS.background}"/>
    <circle cx="${size * 0.15}" cy="-${size * 0.15}" r="${size * 0.015}" fill="${COLORS.background}"/>
  </g>
  
  <!-- Border -->
  <rect x="1" y="1" width="${size - 2}" height="${size - 2}" fill="none" 
        stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
</svg>`;
}

// Generate splash screen SVG
function generateSplashSVG(width, height) {
  const centerX = width / 2;
  const centerY = height / 2;
  const logoSize = Math.min(width, height) * 0.2;
  const titleSize = Math.min(width, height) * 0.06;
  const subtitleSize = Math.min(width, height) * 0.035;
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.gradient1};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FF4D8A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.gradient2};stop-opacity:1" />
    </linearGradient>
    <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${COLORS.accent};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFB000;stop-opacity:1" />
    </radialGradient>
    <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#splashGradient)" />
  
  <!-- Heart particles -->
  ${Array.from({ length: 15 }, (_, i) => {
    const x = (width / 15) * i + Math.random() * 100;
    const y = (height / 4) + Math.random() * (height / 2);
    const size = 20 + Math.random() * 30;
    return `<g transform="translate(${x},${y})" opacity="0.1">
      <path d="M 0,-${size * 0.2} 
               C -${size * 0.1},-${size * 0.3} -${size * 0.3},-${size * 0.3} -${size * 0.3},-${size * 0.1}
               C -${size * 0.3},${size * 0.1} -${size * 0.1},${size * 0.3} 0,${size * 0.4}
               C ${size * 0.1},${size * 0.3} ${size * 0.3},${size * 0.1} ${size * 0.3},-${size * 0.1}
               C ${size * 0.3},-${size * 0.3} ${size * 0.1},-${size * 0.3} 0,-${size * 0.2}
               Z" 
            fill="${COLORS.background}"/>
    </g>`;
  }).join('')}
  
  <!-- Main logo -->
  <g transform="translate(${centerX},${centerY - logoSize * 0.5})" filter="url(#textShadow)">
    ${Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45) - 90;
      const x = Math.cos(angle * Math.PI / 180) * (logoSize * 0.2);
      const y = Math.sin(angle * Math.PI / 180) * (logoSize * 0.2);
      const petalRadius = logoSize * 0.12;
      return `<ellipse cx="${x}" cy="${y}" rx="${petalRadius}" ry="${petalRadius * 0.6}" 
                transform="rotate(${angle} ${x} ${y})" fill="${COLORS.background}" opacity="0.9"/>`;
    }).join('')}
    
    <!-- Center circle -->
    <circle cx="0" cy="0" r="${logoSize * 0.12}" fill="url(#centerGradient)" />
  </g>
  
  <!-- App title -->
  <text x="${centerX}" y="${centerY + logoSize * 0.8}" 
        font-family="Arial, sans-serif" font-size="${titleSize}" font-weight="bold" 
        text-anchor="middle" fill="${COLORS.background}" filter="url(#textShadow)">
    Flourish
  </text>
  
  <!-- Subtitle -->
  <text x="${centerX}" y="${centerY + logoSize * 1.3}" 
        font-family="Arial, sans-serif" font-size="${subtitleSize}" 
        text-anchor="middle" fill="rgba(255,255,255,0.9)" filter="url(#textShadow)">
    AI-Powered Relationship Coach
  </text>
  
  <!-- Version -->
  <text x="${centerX}" y="${height - height * 0.05}" 
        font-family="Arial, sans-serif" font-size="${subtitleSize * 0.6}" 
        text-anchor="middle" fill="rgba(255,255,255,0.6)">
    v1.0.0
  </text>
</svg>`;
}

// Create directories
function createDirectories() {
  const dirs = [
    'mobile/assets/icons',
    'mobile/assets/splash',
    'frontend/public/icons',
    'frontend/public/splash'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Generate all SVG assets
function generateAllSVGAssets() {
  console.log('🎨 Generating Flourish App SVG Assets...');
  console.log('📱 Creating beautiful, meaningful designs for users...');
  
  createDirectories();
  
  // Generate app icon SVG
  console.log('\n🎯 Generating App Icon SVG...');
  const iconSVG = generateSVGIcon(512);
  fs.writeFileSync('mobile/assets/icons/app-icon.svg', iconSVG);
  fs.writeFileSync('frontend/public/icons/app-icon.svg', iconSVG);
  console.log('✅ Generated: app-icon.svg');
  
  // Generate splash screen SVG
  console.log('\n🎨 Generating Splash Screen SVG...');
  const splashSVG = generateSplashSVG(1920, 1080);
  fs.writeFileSync('mobile/assets/splash/splash-screen.svg', splashSVG);
  fs.writeFileSync('frontend/public/splash/splash-screen.svg', splashSVG);
  console.log('✅ Generated: splash-screen.svg');
  
  // Generate mobile splash variants
  const mobileSplashSizes = [
    { width: 375, height: 667, name: 'splash-mobile.svg' },
    { width: 768, height: 1024, name: 'splash-tablet.svg' },
    { width: 1125, height: 2436, name: 'splash-iphone-x.svg' }
  ];
  
  mobileSplashSizes.forEach(({ width, height, name }) => {
    const mobileSplash = generateSplashSVG(width, height);
    fs.writeFileSync(`mobile/assets/splash/${name}`, mobileSplash);
    console.log(`✅ Generated: ${name}`);
  });
  
  // Generate favicon SVG
  console.log('\n🌐 Generating Favicon SVG...');
  const faviconSVG = generateSVGIcon(32);
  fs.writeFileSync('frontend/public/favicon.svg', faviconSVG);
  console.log('✅ Generated: favicon.svg');
  
  console.log('\n🎉 All SVG assets generated successfully!');
  console.log('\n📊 Asset Summary:');
  console.log('• App Icon SVG (scalable for all sizes)');
  console.log('• Splash Screen SVG (multiple sizes)');
  console.log('• Favicon SVG');
  console.log('• Mobile-optimized variants');
  
  console.log('\n🎨 Design Features:');
  console.log('• Beautiful gradient backgrounds (Pink to Blue)');
  console.log('• Flourish flower pattern (represents growth)');
  console.log('• Heart elements (represents love/relationships)');
  console.log('• AI circuit patterns (represents technology)');
  console.log('• Professional shadows and effects');
  console.log('• Scalable SVG format for all platforms');
  console.log('• Meaningful symbolism for users');
  
  console.log('\n📝 Usage Instructions:');
  console.log('1. Use app-icon.svg as the base for generating PNG icons');
  console.log('2. Convert SVGs to required PNG sizes using online tools');
  console.log('3. Use splash-screen.svg for app loading screens');
  console.log('4. favicon.svg can be used directly in modern browsers');
  
  console.log('\n🔧 Next Steps:');
  console.log('• Convert SVGs to PNG using: https://convertio.co/svg-png/');
  console.log('• Generate all required iOS/Android icon sizes');
  console.log('• Test icons on different backgrounds');
  console.log('• Optimize file sizes for production');
}

// Run the generator
if (require.main === module) {
  generateAllSVGAssets();
}

module.exports = { generateAllSVGAssets, generateSVGIcon, generateSplashSVG };