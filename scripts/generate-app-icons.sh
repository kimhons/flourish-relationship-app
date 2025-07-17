#!/bin/bash

# Generate App Icons Script for Flourish App
# This script generates all required icon sizes for iOS, Android, and Web

set -e

echo "🎨 Generating app icons for Flourish..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is required but not installed."
    echo "Please install it:"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  macOS: brew install imagemagick"
    echo "  RHEL/CentOS: sudo yum install ImageMagick"
    exit 1
fi

# Create directories
mkdir -p mobile/assets
mkdir -p mobile/android/app/src/main/res/mipmap-mdpi
mkdir -p mobile/android/app/src/main/res/mipmap-hdpi
mkdir -p mobile/android/app/src/main/res/mipmap-xhdpi
mkdir -p mobile/android/app/src/main/res/mipmap-xxhdpi
mkdir -p mobile/android/app/src/main/res/mipmap-xxxhdpi
mkdir -p mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset
mkdir -p frontend/public/icons

# Base icon path (we'll create a default one if it doesn't exist)
BASE_ICON="mobile/assets/icon-base.png"

# Create a default icon if it doesn't exist
if [ ! -f "$BASE_ICON" ]; then
    echo "Creating default icon..."
    convert -size 1024x1024 \
        -background '#FF1B6B' \
        -fill white \
        -gravity center \
        -pointsize 400 \
        -font Arial-Bold \
        -annotate +0+0 'F' \
        "$BASE_ICON"
fi

echo "📱 Generating iOS icons..."

# iOS App Icons
convert "$BASE_ICON" -resize 20x20 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-20.png"
convert "$BASE_ICON" -resize 40x40 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-20@2x.png"
convert "$BASE_ICON" -resize 60x60 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-20@3x.png"
convert "$BASE_ICON" -resize 29x29 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-29.png"
convert "$BASE_ICON" -resize 58x58 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-29@2x.png"
convert "$BASE_ICON" -resize 87x87 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-29@3x.png"
convert "$BASE_ICON" -resize 40x40 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-40.png"
convert "$BASE_ICON" -resize 80x80 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-40@2x.png"
convert "$BASE_ICON" -resize 120x120 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-40@3x.png"
convert "$BASE_ICON" -resize 120x120 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-60@2x.png"
convert "$BASE_ICON" -resize 180x180 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-60@3x.png"
convert "$BASE_ICON" -resize 76x76 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-76.png"
convert "$BASE_ICON" -resize 152x152 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-76@2x.png"
convert "$BASE_ICON" -resize 167x167 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-83.5@2x.png"
convert "$BASE_ICON" -resize 1024x1024 "mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/Icon-1024.png"

echo "🤖 Generating Android icons..."

# Android App Icons
convert "$BASE_ICON" -resize 48x48 "mobile/android/app/src/main/res/mipmap-mdpi/ic_launcher.png"
convert "$BASE_ICON" -resize 72x72 "mobile/android/app/src/main/res/mipmap-hdpi/ic_launcher.png"
convert "$BASE_ICON" -resize 96x96 "mobile/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png"
convert "$BASE_ICON" -resize 144x144 "mobile/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png"
convert "$BASE_ICON" -resize 192x192 "mobile/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"

# Android Round Icons (same as regular for now)
cp "mobile/android/app/src/main/res/mipmap-mdpi/ic_launcher.png" "mobile/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png"
cp "mobile/android/app/src/main/res/mipmap-hdpi/ic_launcher.png" "mobile/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png"
cp "mobile/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png" "mobile/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png"
cp "mobile/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png" "mobile/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png"
cp "mobile/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png" "mobile/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png"

echo "🌐 Generating Web icons..."

# Web Icons
convert "$BASE_ICON" -resize 16x16 "frontend/public/icons/favicon-16x16.png"
convert "$BASE_ICON" -resize 32x32 "frontend/public/icons/favicon-32x32.png"
convert "$BASE_ICON" -resize 192x192 "frontend/public/icons/icon-192.png"
convert "$BASE_ICON" -resize 512x512 "frontend/public/icons/icon-512.png"
convert "$BASE_ICON" -resize 180x180 "frontend/public/icons/apple-touch-icon.png"

# Copy to mobile assets
cp "$BASE_ICON" "mobile/assets/icon.png"
convert "$BASE_ICON" -resize 192x192 "mobile/assets/adaptive-icon.png"

# Create splash screen
echo "🎨 Generating splash screens..."

# Create base splash screen
convert -size 1242x2688 \
    -background '#FF1B6B' \
    -fill white \
    -gravity center \
    -pointsize 200 \
    -font Arial-Bold \
    -annotate +0-300 'Flourish' \
    -pointsize 60 \
    -annotate +0+100 'AI-Powered Dating' \
    "mobile/assets/splash-base.png"

# Copy splash to assets
cp "mobile/assets/splash-base.png" "mobile/assets/splash.png"

# Generate favicon.ico for web
convert "$BASE_ICON" -resize 16x16 -resize 32x32 -resize 48x48 "frontend/public/favicon.ico"

echo "✅ App icons generated successfully!"
echo ""
echo "Generated icons for:"
echo "  - iOS: mobile/ios/FlourishApp/Images.xcassets/AppIcon.appiconset/"
echo "  - Android: mobile/android/app/src/main/res/mipmap-*/"
echo "  - Web: frontend/public/icons/"
echo ""
echo "Note: You may want to replace the default icon with your custom design."