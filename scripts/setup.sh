#!/bin/bash

# Flourish App Setup Script
# This script sets up the development environment for the Flourish app

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Setting up Flourish App Development Environment${NC}"

# Check if required tools are installed
check_prerequisites() {
    echo -e "${BLUE}📋 Checking prerequisites...${NC}"
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        echo -e "${YELLOW}Please install Node.js 18+ from https://nodejs.org/${NC}"
        exit 1
    fi
    
    # Check Python
    if ! command -v python3 &> /dev/null; then
        echo -e "${RED}❌ Python 3 is not installed${NC}"
        echo -e "${YELLOW}Please install Python 3.11+ from https://python.org/${NC}"
        exit 1
    fi
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker is not installed${NC}"
        echo -e "${YELLOW}Please install Docker from https://docker.com/${NC}"
        exit 1
    fi
    
    # Check React Native CLI
    if ! command -v npx react-native &> /dev/null; then
        echo -e "${YELLOW}⚠️ React Native CLI not found, installing...${NC}"
        npm install -g @react-native-community/cli
    fi
    
    # Check Firebase CLI
    if ! command -v firebase &> /dev/null; then
        echo -e "${YELLOW}⚠️ Firebase CLI not found, installing...${NC}"
        npm install -g firebase-tools
    fi
    
    echo -e "${GREEN}✅ All prerequisites are installed${NC}"
}

# Create environment file
setup_environment() {
    echo -e "${BLUE}🔧 Setting up environment variables...${NC}"
    
    if [ ! -f .env ]; then
        cp .env.example .env
        echo -e "${YELLOW}📝 Created .env file from .env.example${NC}"
        echo -e "${YELLOW}Please edit .env file with your actual API keys and configuration${NC}"
    else
        echo -e "${GREEN}✅ .env file already exists${NC}"
    fi
}

# Install dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    # Root dependencies
    npm install
    
    # Backend dependencies
    echo -e "${BLUE}Installing backend dependencies...${NC}"
    cd backend
    python -m pip install --upgrade pip
    pip install -r requirements.txt
    pip install -r requirements-ai.txt
    pip install -r requirements-test.txt
    cd ..
    
    # Frontend dependencies
    echo -e "${BLUE}Installing frontend dependencies...${NC}"
    cd frontend
    npm ci
    cd ..
    
    # Mobile dependencies
    echo -e "${BLUE}Installing mobile dependencies...${NC}"
    cd mobile
    npm ci
    cd ..
    
    # Shared dependencies
    echo -e "${BLUE}Installing shared dependencies...${NC}"
    cd shared
    npm ci
    cd ..
    
    echo -e "${GREEN}✅ All dependencies installed${NC}"
}

# Setup iOS development (macOS only)
setup_ios() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo -e "${BLUE}🍎 Setting up iOS development...${NC}"
        
        # Check if Xcode is installed
        if ! command -v xcodebuild &> /dev/null; then
            echo -e "${YELLOW}⚠️ Xcode not found. Please install Xcode from the App Store${NC}"
            return
        fi
        
        # Check if CocoaPods is installed
        if ! command -v pod &> /dev/null; then
            echo -e "${YELLOW}⚠️ CocoaPods not found, installing...${NC}"
            sudo gem install cocoapods
        fi
        
        # Install iOS dependencies
        cd mobile/ios
        pod install
        cd ../..
        
        echo -e "${GREEN}✅ iOS development setup complete${NC}"
    else
        echo -e "${YELLOW}⚠️ iOS development is only available on macOS${NC}"
    fi
}

# Setup Android development
setup_android() {
    echo -e "${BLUE}🤖 Setting up Android development...${NC}"
    
    # Check if Android SDK is installed
    if [ -z "$ANDROID_HOME" ]; then
        echo -e "${YELLOW}⚠️ ANDROID_HOME not set${NC}"
        echo -e "${YELLOW}Please install Android Studio and set ANDROID_HOME environment variable${NC}"
        return
    fi
    
    # Check if Java is installed
    if ! command -v java &> /dev/null; then
        echo -e "${YELLOW}⚠️ Java not found${NC}"
        echo -e "${YELLOW}Please install Java 17+ for Android development${NC}"
        return
    fi
    
    echo -e "${GREEN}✅ Android development setup complete${NC}"
}

# Setup database
setup_database() {
    echo -e "${BLUE}🗄️ Setting up database...${NC}"
    
    # Start PostgreSQL and Redis using Docker
    docker-compose up -d postgres redis
    
    # Wait for database to be ready
    echo -e "${YELLOW}⏳ Waiting for database to be ready...${NC}"
    sleep 10
    
    # Run database migrations
    cd backend
    python -m alembic upgrade head
    cd ..
    
    echo -e "${GREEN}✅ Database setup complete${NC}"
}

# Setup Firebase
setup_firebase() {
    echo -e "${BLUE}🔥 Setting up Firebase...${NC}"
    
    # Login to Firebase (if not already logged in)
    if ! firebase projects:list &> /dev/null; then
        echo -e "${YELLOW}📝 Please login to Firebase${NC}"
        firebase login
    fi
    
    # Initialize Firebase project
    if [ ! -f firebase.json ]; then
        echo -e "${YELLOW}📝 Firebase already configured${NC}"
    else
        echo -e "${GREEN}✅ Firebase configuration found${NC}"
    fi
}

# Create necessary directories
create_directories() {
    echo -e "${BLUE}📁 Creating necessary directories...${NC}"
    
    mkdir -p logs
    mkdir -p uploads
    mkdir -p mobile/assets/images
    mkdir -p mobile/assets/fonts
    mkdir -p mobile/assets/icons
    mkdir -p nginx/ssl
    mkdir -p backend/uploads
    mkdir -p backend/logs
    
    echo -e "${GREEN}✅ Directories created${NC}"
}

# Generate SSL certificates for development
generate_ssl_certs() {
    echo -e "${BLUE}🔒 Generating SSL certificates for development...${NC}"
    
    if [ ! -f nginx/ssl/localhost.crt ]; then
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout nginx/ssl/localhost.key \
            -out nginx/ssl/localhost.crt \
            -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
        
        echo -e "${GREEN}✅ SSL certificates generated${NC}"
    else
        echo -e "${GREEN}✅ SSL certificates already exist${NC}"
    fi
}

# Setup Git hooks
setup_git_hooks() {
    echo -e "${BLUE}🪝 Setting up Git hooks...${NC}"
    
    # Install husky
    npx husky install
    
    # Add pre-commit hook
    npx husky add .husky/pre-commit "npm run lint && npm run test"
    
    # Add commit-msg hook
    npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
    
    echo -e "${GREEN}✅ Git hooks setup complete${NC}"
}

# Final setup message
final_message() {
    echo -e "${GREEN}🎉 Setup completed successfully!${NC}"
    echo -e "${BLUE}Next steps:${NC}"
    echo -e "${YELLOW}1. Edit .env file with your API keys and configuration${NC}"
    echo -e "${YELLOW}2. Run 'npm run dev' to start the development servers${NC}"
    echo -e "${YELLOW}3. For mobile development:${NC}"
    echo -e "${YELLOW}   - iOS: 'cd mobile && npm run ios'${NC}"
    echo -e "${YELLOW}   - Android: 'cd mobile && npm run android'${NC}"
    echo -e "${YELLOW}4. Visit http://localhost:3000 for the web app${NC}"
    echo -e "${YELLOW}5. Visit http://localhost:8000/docs for the API documentation${NC}"
}

# Main setup function
main() {
    check_prerequisites
    setup_environment
    install_dependencies
    create_directories
    setup_ios
    setup_android
    setup_database
    setup_firebase
    generate_ssl_certs
    setup_git_hooks
    final_message
}

# Run main function
main "$@"