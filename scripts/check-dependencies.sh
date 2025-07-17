#!/bin/bash

# Flourish App - Dependency Check Script
# This script validates all required dependencies for deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Checking Flourish App Dependencies${NC}"

# Track overall status
OVERALL_STATUS=0

# Check function
check_command() {
    local cmd=$1
    local name=$2
    local install_info=$3
    
    if command -v $cmd &> /dev/null; then
        echo -e "${GREEN}✅ $name is installed${NC}"
        return 0
    else
        echo -e "${RED}❌ $name is not installed${NC}"
        echo -e "${YELLOW}   Install: $install_info${NC}"
        OVERALL_STATUS=1
        return 1
    fi
}

# Check version function
check_version() {
    local cmd=$1
    local name=$2
    local min_version=$3
    local current_version=$4
    
    if command -v $cmd &> /dev/null; then
        echo -e "${GREEN}✅ $name ($current_version)${NC}"
        return 0
    else
        echo -e "${RED}❌ $name (minimum: $min_version)${NC}"
        OVERALL_STATUS=1
        return 1
    fi
}

echo -e "${BLUE}📋 Core Dependencies${NC}"

# Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✅ Node.js ($NODE_VERSION)${NC}"
else
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo -e "${YELLOW}   Install: https://nodejs.org/${NC}"
    OVERALL_STATUS=1
fi

# Python
if command -v python3 &> /dev/null; then
    PYTHON_VERSION=$(python3 --version)
    echo -e "${GREEN}✅ Python ($PYTHON_VERSION)${NC}"
else
    echo -e "${RED}❌ Python 3 is not installed${NC}"
    echo -e "${YELLOW}   Install: https://python.org/${NC}"
    OVERALL_STATUS=1
fi

# Docker
check_command "docker" "Docker" "https://docker.com/"

# Docker Compose
check_command "docker-compose" "Docker Compose" "https://docs.docker.com/compose/install/"

echo -e "${BLUE}📱 Mobile Development${NC}"

# React Native CLI
if npx react-native --version &> /dev/null; then
    REACT_NATIVE_VERSION=$(npx react-native --version)
    echo -e "${GREEN}✅ React Native CLI ($REACT_NATIVE_VERSION)${NC}"
else
    echo -e "${RED}❌ React Native CLI is not installed or not accessible${NC}"
    echo -e "${YELLOW}   Install: npm install -g @react-native-community/cli${NC}"
    OVERALL_STATUS=1
fi

# iOS Development (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo -e "${BLUE}🍎 iOS Development${NC}"
    check_command "xcodebuild" "Xcode" "Install from Mac App Store"
    check_command "pod" "CocoaPods" "sudo gem install cocoapods"
    check_command "fastlane" "Fastlane" "sudo gem install fastlane"
else
    echo -e "${YELLOW}⚠️ iOS development is only available on macOS${NC}"
fi

# Android Development
echo -e "${BLUE}🤖 Android Development${NC}"
if [ -n "$ANDROID_HOME" ]; then
    echo -e "${GREEN}✅ ANDROID_HOME is set ($ANDROID_HOME)${NC}"
else
    echo -e "${RED}❌ ANDROID_HOME is not set${NC}"
    echo -e "${YELLOW}   Install Android Studio and set ANDROID_HOME${NC}"
    OVERALL_STATUS=1
fi

check_command "java" "Java" "Install Java 17+ for Android development"

echo -e "${BLUE}🌐 Web Development${NC}"

# Firebase CLI
check_command "firebase" "Firebase CLI" "npm install -g firebase-tools"

# Git
check_command "git" "Git" "https://git-scm.com/"

echo -e "${BLUE}🔧 Build Tools${NC}"

# Gradle (for Android)
check_command "gradle" "Gradle" "https://gradle.org/install/"

# Maven (optional)
if command -v mvn &> /dev/null; then
    echo -e "${GREEN}✅ Maven is installed${NC}"
else
    echo -e "${YELLOW}⚠️ Maven is not installed (optional)${NC}"
fi

echo -e "${BLUE}🗄️ Database${NC}"

# PostgreSQL
if command -v psql &> /dev/null; then
    echo -e "${GREEN}✅ PostgreSQL is installed${NC}"
else
    echo -e "${YELLOW}⚠️ PostgreSQL not found (will use Docker)${NC}"
fi

# Redis
if command -v redis-cli &> /dev/null; then
    echo -e "${GREEN}✅ Redis is installed${NC}"
else
    echo -e "${YELLOW}⚠️ Redis not found (will use Docker)${NC}"
fi

echo -e "${BLUE}🔒 Security Tools${NC}"

# OpenSSL
check_command "openssl" "OpenSSL" "Install OpenSSL for certificate generation"

# Keytool (for Android signing)
check_command "keytool" "Keytool" "Install Java JDK"

echo -e "${BLUE}📊 Optional Tools${NC}"

# Curl
check_command "curl" "Curl" "Install curl for API testing"

# Wget
if command -v wget &> /dev/null; then
    echo -e "${GREEN}✅ Wget is installed${NC}"
else
    echo -e "${YELLOW}⚠️ Wget is not installed (optional)${NC}"
fi

# Yarn (optional)
if command -v yarn &> /dev/null; then
    echo -e "${GREEN}✅ Yarn is installed${NC}"
else
    echo -e "${YELLOW}⚠️ Yarn is not installed (optional)${NC}"
fi

echo -e "${BLUE}🔍 Environment Check${NC}"

# Check if .env exists
if [ -f .env ]; then
    echo -e "${GREEN}✅ .env file exists${NC}"
else
    echo -e "${YELLOW}⚠️ .env file not found${NC}"
    echo -e "${YELLOW}   Run: cp .env.example .env${NC}"
fi

# Check if node_modules exists
if [ -d node_modules ]; then
    echo -e "${GREEN}✅ Root dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️ Root dependencies not installed${NC}"
    echo -e "${YELLOW}   Run: npm install${NC}"
fi

# Check frontend dependencies
if [ -d frontend/node_modules ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️ Frontend dependencies not installed${NC}"
    echo -e "${YELLOW}   Run: cd frontend && npm install${NC}"
fi

# Check mobile dependencies
if [ -d mobile/node_modules ]; then
    echo -e "${GREEN}✅ Mobile dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️ Mobile dependencies not installed${NC}"
    echo -e "${YELLOW}   Run: cd mobile && npm install${NC}"
fi

# Check backend dependencies
if [ -d backend/venv ]; then
    echo -e "${GREEN}✅ Backend virtual environment exists${NC}"
else
    echo -e "${YELLOW}⚠️ Backend virtual environment not found${NC}"
    echo -e "${YELLOW}   Run: cd backend && python -m venv venv${NC}"
fi

# Final status
echo -e "${BLUE}📋 Summary${NC}"
if [ $OVERALL_STATUS -eq 0 ]; then
    echo -e "${GREEN}🎉 All critical dependencies are installed!${NC}"
    echo -e "${GREEN}✅ System is ready for Flourish app development and deployment${NC}"
else
    echo -e "${RED}❌ Some critical dependencies are missing${NC}"
    echo -e "${YELLOW}⚠️ Please install the missing dependencies before proceeding${NC}"
fi

exit $OVERALL_STATUS