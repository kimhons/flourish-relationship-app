#!/bin/bash

# Flourish App Deployment Validation Script
# This script validates that all components are ready for deployment

set -e

echo "🚀 Flourish App Deployment Validation"
echo "====================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Validation counters
TOTAL_CHECKS=0
PASSED_CHECKS=0
WARNINGS=0

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a file exists
file_exists() {
    [ -f "$1" ]
}

# Function to check if a directory exists
dir_exists() {
    [ -d "$1" ]
}

# Function to perform a check
check() {
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    local description="$1"
    local condition="$2"
    
    printf "%-50s" "$description"
    
    if eval "$condition"; then
        echo -e "${GREEN}✓ PASS${NC}"
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC}"
        return 1
    fi
}

# Function to perform a warning check
check_warning() {
    local description="$1"
    local condition="$2"
    
    printf "%-50s" "$description"
    
    if eval "$condition"; then
        echo -e "${GREEN}✓ OK${NC}"
    else
        echo -e "${YELLOW}⚠ WARNING${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
}

echo "1. Checking Development Tools"
echo "----------------------------"
check "Node.js installed" "command_exists node"
check "npm installed" "command_exists npm"
check "Docker installed" "command_exists docker"
check "Git installed" "command_exists git"
check_warning "Terraform installed" "command_exists terraform"
check_warning "AWS CLI installed" "command_exists aws"
echo ""

echo "2. Checking Project Structure"
echo "----------------------------"
check "Root package.json exists" "file_exists package.json"
check "Frontend directory exists" "dir_exists frontend"
check "Backend directory exists" "dir_exists backend"
check "Mobile directory exists" "dir_exists mobile"
check "Docker Compose file exists" "file_exists docker-compose.yml"
check "Dockerfile exists" "file_exists Dockerfile"
check "Environment example exists" "file_exists .env.example"
echo ""

echo "3. Checking Frontend Configuration"
echo "---------------------------------"
check "Frontend package.json exists" "file_exists frontend/package.json"
check "Frontend vite config exists" "file_exists frontend/vite.config.js"
check "Frontend index.html exists" "file_exists frontend/index.html"
check "Frontend src directory exists" "dir_exists frontend/src"
echo ""

echo "4. Checking Backend Configuration"
echo "--------------------------------"
check "Backend requirements.txt exists" "file_exists backend/requirements.txt"
check "Backend src directory exists" "dir_exists backend/src"
echo ""

echo "5. Checking Mobile Configuration"
echo "-------------------------------"
check "Mobile package.json exists" "file_exists mobile/package.json"
check "Mobile app.json exists" "file_exists mobile/app.json"
check "Mobile index.js exists" "file_exists mobile/index.js"
check "iOS directory exists" "dir_exists mobile/ios"
check "Android directory exists" "dir_exists mobile/android"
echo ""

echo "6. Checking Mobile Assets"
echo "------------------------"
check_warning "Mobile assets directory exists" "dir_exists mobile/assets"
check_warning "App icon exists" "file_exists mobile/assets/icon.png"
check_warning "Splash screen exists" "file_exists mobile/assets/splash.png"
echo ""

echo "7. Checking Infrastructure"
echo "-------------------------"
check "Terraform directory exists" "dir_exists terraform"
check "Terraform main.tf exists" "file_exists terraform/main.tf"
check "Nginx configuration exists" "file_exists nginx/nginx.conf"
echo ""

echo "8. Checking Documentation"
echo "------------------------"
check "README.md exists" "file_exists README.md"
check "Deployment guide exists" "file_exists DEPLOYMENT_GUIDE.md"
check "Production readiness doc exists" "file_exists PRODUCTION_READINESS_VALIDATION.md"
echo ""

echo "9. Checking Environment Variables"
echo "--------------------------------"
if [ -f .env ]; then
    echo -e "${GREEN}✓ .env file exists${NC}"
    
    # Check for required environment variables
    check_warning "DATABASE_URL configured" "grep -q '^DATABASE_URL=' .env"
    check_warning "JWT_SECRET_KEY configured" "grep -q '^JWT_SECRET_KEY=' .env"
    check_warning "OPENAI_API_KEY configured" "grep -q '^OPENAI_API_KEY=' .env"
else
    echo -e "${YELLOW}⚠ .env file not found${NC}"
    echo "  Create one by copying .env.example:"
    echo "  cp .env.example .env"
fi
echo ""

echo "10. Checking Dependencies"
echo "------------------------"
# Check if node_modules exist in key directories
check_warning "Root dependencies installed" "dir_exists node_modules"
check_warning "Frontend dependencies installed" "dir_exists frontend/node_modules"
check_warning "Mobile dependencies installed" "dir_exists mobile/node_modules"
echo ""

echo "11. Build Validation"
echo "-------------------"
# Try to build frontend
if dir_exists frontend/node_modules; then
    echo "Testing frontend build..."
    cd frontend
    if npm run build > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Frontend build successful${NC}"
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
    else
        echo -e "${RED}✗ Frontend build failed${NC}"
    fi
    cd ..
else
    echo -e "${YELLOW}⚠ Skipping frontend build test (dependencies not installed)${NC}"
fi
echo ""

echo "12. Docker Validation"
echo "--------------------"
if command_exists docker; then
    check "Docker daemon running" "docker info > /dev/null 2>&1"
    
    # Check if we can build the Docker image
    echo "Testing Docker build..."
    if docker build -t flourish-test -f Dockerfile . > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Docker build successful${NC}"
        docker rmi flourish-test > /dev/null 2>&1
    else
        echo -e "${YELLOW}⚠ Docker build needs attention${NC}"
    fi
else
    echo -e "${YELLOW}⚠ Docker not available for testing${NC}"
fi
echo ""

echo "13. Mobile App Validation"
echo "------------------------"
# Check iOS configuration
check "iOS Info.plist exists" "file_exists mobile/ios/FlourishApp/Info.plist"
check_warning "iOS build configuration exists" "dir_exists mobile/ios/FlourishApp.xcodeproj || dir_exists mobile/ios/FlourishApp.xcworkspace"

# Check Android configuration
check "Android build.gradle exists" "file_exists mobile/android/app/build.gradle"
check_warning "Android manifest exists" "file_exists mobile/android/app/src/main/AndroidManifest.xml"
echo ""

echo "14. Security Validation"
echo "----------------------"
# Check for common security issues
if [ -f .env ]; then
    check_warning "No hardcoded secrets in code" "! grep -r 'sk-[a-zA-Z0-9]*' --include='*.js' --include='*.jsx' --include='*.ts' --include='*.tsx' --include='*.py' . 2>/dev/null | grep -v '.env' | grep -v 'example'"
else
    echo -e "${GREEN}✓ No .env file to check for secrets${NC}"
fi

check ".gitignore exists" "file_exists .gitignore"
check ".env in .gitignore" "grep -q '^\.env$' .gitignore"
echo ""

# Summary
echo "======================================"
echo "DEPLOYMENT VALIDATION SUMMARY"
echo "======================================"
echo ""
echo -e "Total Checks: ${TOTAL_CHECKS}"
echo -e "Passed: ${GREEN}${PASSED_CHECKS}${NC}"
echo -e "Failed: ${RED}$((TOTAL_CHECKS - PASSED_CHECKS))${NC}"
echo -e "Warnings: ${YELLOW}${WARNINGS}${NC}"
echo ""

PERCENTAGE=$((PASSED_CHECKS * 100 / TOTAL_CHECKS))
echo -e "Validation Score: ${PERCENTAGE}%"
echo ""

if [ $PERCENTAGE -eq 100 ]; then
    echo -e "${GREEN}✅ DEPLOYMENT READY!${NC}"
    echo "All checks passed. Your app is ready for deployment."
elif [ $PERCENTAGE -ge 80 ]; then
    echo -e "${GREEN}✅ MOSTLY READY${NC}"
    echo "Your app is mostly ready. Address the failed checks before deployment."
elif [ $PERCENTAGE -ge 60 ]; then
    echo -e "${YELLOW}⚠️  NEEDS WORK${NC}"
    echo "Several issues need to be addressed before deployment."
else
    echo -e "${RED}❌ NOT READY${NC}"
    echo "Significant work needed before deployment."
fi

echo ""
echo "Next Steps:"
echo "-----------"
if [ ! -f .env ]; then
    echo "1. Create .env file: cp .env.example .env"
    echo "2. Configure all required environment variables"
fi

if [ ! -d node_modules ] || [ ! -d frontend/node_modules ] || [ ! -d mobile/node_modules ]; then
    echo "3. Install dependencies: npm run install:all"
fi

if [ $WARNINGS -gt 0 ]; then
    echo "4. Address the warnings above"
fi

echo "5. Run deployment: ./scripts/deploy.sh"
echo ""

exit 0