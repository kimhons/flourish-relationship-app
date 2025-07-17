#!/bin/bash

# Flourish App Deployment Script
# This script handles the complete deployment process for web, iOS, and Android

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DEPLOY_ENV=${1:-production}
DEPLOY_TARGET=${2:-all}

echo -e "${BLUE}🚀 Starting Flourish App Deployment${NC}"
echo -e "${YELLOW}Environment: ${DEPLOY_ENV}${NC}"
echo -e "${YELLOW}Target: ${DEPLOY_TARGET}${NC}"

# Check if required environment variables are set
check_env_vars() {
    echo -e "${BLUE}📋 Checking environment variables...${NC}"
    
    required_vars=(
        "FIREBASE_API_KEY"
        "FIREBASE_PROJECT_ID"
        "DATABASE_URL"
        "JWT_SECRET"
        "OPENAI_API_KEY"
    )
    
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            echo -e "${RED}❌ Missing required environment variable: $var${NC}"
            exit 1
        fi
    done
    
    echo -e "${GREEN}✅ All required environment variables are set${NC}"
}

# Install dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    # Root dependencies
    npm install
    
    # Backend dependencies
    cd backend
    pip install -r requirements.txt
    cd ..
    
    # Frontend dependencies
    cd frontend
    npm ci
    cd ..
    
    # Mobile dependencies
    cd mobile
    npm ci
    cd ..
    
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Run tests
run_tests() {
    echo -e "${BLUE}🧪 Running tests...${NC}"
    
    # Backend tests
    cd backend
    python -m pytest tests/ -v
    cd ..
    
    # Frontend tests
    cd frontend
    npm test -- --coverage --watchAll=false
    cd ..
    
    # Mobile tests
    cd mobile
    npm test -- --coverage --watchAll=false
    cd ..
    
    echo -e "${GREEN}✅ All tests passed${NC}"
}

# Build frontend
build_frontend() {
    echo -e "${BLUE}🏗️ Building frontend...${NC}"
    
    cd frontend
    npm run build:production
    cd ..
    
    echo -e "${GREEN}✅ Frontend built successfully${NC}"
}

# Deploy to Firebase
deploy_web() {
    echo -e "${BLUE}🌐 Deploying web app to Firebase...${NC}"
    
    # Build frontend first
    build_frontend
    
    # Deploy to Firebase
    firebase deploy --only hosting:${DEPLOY_ENV}
    
    echo -e "${GREEN}✅ Web app deployed successfully${NC}"
}

# Deploy backend
deploy_backend() {
    echo -e "${BLUE}🖥️ Deploying backend...${NC}"
    
    # Build and push Docker image
    docker build -t flourish-backend:latest backend/
    
    # Deploy using Docker Compose
    docker-compose up -d backend
    
    echo -e "${GREEN}✅ Backend deployed successfully${NC}"
}

# Build and deploy iOS
deploy_ios() {
    echo -e "${BLUE}📱 Building and deploying iOS app...${NC}"
    
    cd mobile
    
    # Install CocoaPods
    cd ios
    pod install
    cd ..
    
    # Build iOS app
    npx react-native run-ios --configuration Release
    
    # Deploy to App Store using Fastlane
    cd ios
    fastlane beta
    cd ../..
    
    echo -e "${GREEN}✅ iOS app deployed successfully${NC}"
}

# Build and deploy Android
deploy_android() {
    echo -e "${BLUE}🤖 Building and deploying Android app...${NC}"
    
    cd mobile
    
    # Build Android app
    cd android
    ./gradlew assembleRelease
    ./gradlew bundleRelease
    cd ../..
    
    echo -e "${GREEN}✅ Android app built successfully${NC}"
    echo -e "${YELLOW}📋 Manual step: Upload the AAB file to Google Play Console${NC}"
}

# Health check
health_check() {
    echo -e "${BLUE}🔍 Running health checks...${NC}"
    
    # Check web app
    if curl -f https://flourish-app.com/health > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Web app is healthy${NC}"
    else
        echo -e "${RED}❌ Web app health check failed${NC}"
    fi
    
    # Check API
    if curl -f https://api.flourish-app.com/health > /dev/null 2>&1; then
        echo -e "${GREEN}✅ API is healthy${NC}"
    else
        echo -e "${RED}❌ API health check failed${NC}"
    fi
}

# Main deployment function
main() {
    check_env_vars
    install_dependencies
    
    if [ "$DEPLOY_ENV" != "production" ]; then
        run_tests
    fi
    
    case $DEPLOY_TARGET in
        "web")
            deploy_web
            ;;
        "backend")
            deploy_backend
            ;;
        "ios")
            deploy_ios
            ;;
        "android")
            deploy_android
            ;;
        "mobile")
            deploy_ios
            deploy_android
            ;;
        "all")
            deploy_backend
            deploy_web
            deploy_ios
            deploy_android
            ;;
        *)
            echo -e "${RED}❌ Invalid deployment target: $DEPLOY_TARGET${NC}"
            echo -e "${YELLOW}Valid targets: web, backend, ios, android, mobile, all${NC}"
            exit 1
            ;;
    esac
    
    health_check
    
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
}

# Run main function
main "$@"