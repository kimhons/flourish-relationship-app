#!/bin/bash

# Flourish App - Deployment Validation Script
# This script validates the deployment configuration and provides a readiness report

set -e

echo "🚀 Flourish App - Deployment Validation"
echo "======================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

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

# Function to print check result
print_check() {
    local check_name="$1"
    local status="$2"
    local message="$3"
    
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    
    if [ "$status" = "PASS" ]; then
        echo -e "${GREEN}✅ $check_name${NC}"
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
    elif [ "$status" = "FAIL" ]; then
        echo -e "${RED}❌ $check_name${NC}"
        if [ -n "$message" ]; then
            echo -e "   ${RED}$message${NC}"
        fi
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
    elif [ "$status" = "WARN" ]; then
        echo -e "${YELLOW}⚠️  $check_name${NC}"
        if [ -n "$message" ]; then
            echo -e "   ${YELLOW}$message${NC}"
        fi
    else
        echo -e "${BLUE}ℹ️  $check_name${NC}"
        if [ -n "$message" ]; then
            echo -e "   ${BLUE}$message${NC}"
        fi
    fi
}

echo "🔍 Checking Prerequisites..."
echo ""

# Check required tools
if command_exists aws; then
    AWS_VERSION=$(aws --version 2>&1 | head -n1)
    print_check "AWS CLI installed" "PASS" "Version: $AWS_VERSION"
else
    print_check "AWS CLI installed" "FAIL" "Please install AWS CLI v2+"
fi

if command_exists terraform; then
    TERRAFORM_VERSION=$(terraform --version | head -n1)
    print_check "Terraform installed" "PASS" "Version: $TERRAFORM_VERSION"
else
    print_check "Terraform installed" "FAIL" "Please install Terraform v1.0+"
fi

if command_exists docker; then
    DOCKER_VERSION=$(docker --version)
    print_check "Docker installed" "PASS" "Version: $DOCKER_VERSION"
else
    print_check "Docker installed" "FAIL" "Please install Docker v20+"
fi

if command_exists node; then
    NODE_VERSION=$(node --version)
    print_check "Node.js installed" "PASS" "Version: $NODE_VERSION"
else
    print_check "Node.js installed" "FAIL" "Please install Node.js v18+"
fi

if command_exists python3; then
    PYTHON_VERSION=$(python3 --version)
    print_check "Python installed" "PASS" "Version: $PYTHON_VERSION"
else
    print_check "Python installed" "FAIL" "Please install Python v3.11+"
fi

echo ""
echo "📁 Checking Deployment Files..."
echo ""

# Check infrastructure files
if file_exists "terraform/main.tf"; then
    print_check "Terraform main configuration" "PASS"
else
    print_check "Terraform main configuration" "FAIL" "terraform/main.tf not found"
fi

if file_exists "terraform/ecs-task-definitions.tf"; then
    print_check "ECS task definitions" "PASS"
else
    print_check "ECS task definitions" "FAIL" "terraform/ecs-task-definitions.tf not found"
fi

if file_exists "Dockerfile"; then
    print_check "Main Dockerfile" "PASS"
else
    print_check "Main Dockerfile" "FAIL" "Dockerfile not found"
fi

# Check CI/CD files
if file_exists ".github/workflows/deploy-production.yml"; then
    print_check "Production deployment workflow" "PASS"
else
    print_check "Production deployment workflow" "FAIL" ".github/workflows/deploy-production.yml not found"
fi

# Check testing files
if file_exists "tests/load/api-load-test.yml"; then
    print_check "Load testing configuration" "PASS"
else
    print_check "Load testing configuration" "FAIL" "tests/load/api-load-test.yml not found"
fi

# Check documentation
if file_exists "DEPLOYMENT_GUIDE.md"; then
    print_check "Deployment guide" "PASS"
else
    print_check "Deployment guide" "FAIL" "DEPLOYMENT_GUIDE.md not found"
fi

if file_exists "PRODUCTION_DEPLOYMENT_STRATEGY.md"; then
    print_check "Deployment strategy" "PASS"
else
    print_check "Deployment strategy" "FAIL" "PRODUCTION_DEPLOYMENT_STRATEGY.md not found"
fi

if file_exists "DEPLOYMENT_SUMMARY.md"; then
    print_check "Deployment summary" "PASS"
else
    print_check "Deployment summary" "FAIL" "DEPLOYMENT_SUMMARY.md not found"
fi

echo ""
echo "🔧 Checking Application Structure..."
echo ""

# Check application directories
if dir_exists "backend"; then
    print_check "Backend directory" "PASS"
else
    print_check "Backend directory" "FAIL" "Backend directory not found"
fi

if dir_exists "frontend"; then
    print_check "Frontend directory" "PASS"
else
    print_check "Frontend directory" "FAIL" "Frontend directory not found"
fi

if dir_exists "mobile"; then
    print_check "Mobile directory" "PASS"
else
    print_check "Mobile directory" "FAIL" "Mobile directory not found"
fi

# Check package.json files
if file_exists "package.json"; then
    print_check "Root package.json" "PASS"
else
    print_check "Root package.json" "WARN" "Root package.json not found"
fi

if file_exists "backend/requirements.txt"; then
    print_check "Backend requirements" "PASS"
else
    print_check "Backend requirements" "WARN" "backend/requirements.txt not found"
fi

echo ""
echo "🌐 Checking AWS Configuration..."
echo ""

# Check AWS configuration
if [ -f ~/.aws/credentials ] || [ -n "$AWS_ACCESS_KEY_ID" ]; then
    print_check "AWS credentials configured" "PASS"
else
    print_check "AWS credentials configured" "FAIL" "Please configure AWS credentials"
fi

# Check AWS connectivity
if command_exists aws; then
    if aws sts get-caller-identity >/dev/null 2>&1; then
        ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text 2>/dev/null)
        print_check "AWS connectivity" "PASS" "Account ID: $ACCOUNT_ID"
    else
        print_check "AWS connectivity" "FAIL" "Cannot connect to AWS"
    fi
fi

echo ""
echo "📦 Checking Container Configuration..."
echo ""

# Check if Docker is running
if docker info >/dev/null 2>&1; then
    print_check "Docker daemon running" "PASS"
else
    print_check "Docker daemon running" "FAIL" "Docker daemon is not running"
fi

# Check Dockerfile syntax
if file_exists "Dockerfile"; then
    if docker build -t flourish-test . --dry-run >/dev/null 2>&1; then
        print_check "Dockerfile syntax" "PASS"
    else
        print_check "Dockerfile syntax" "WARN" "Dockerfile may have syntax issues"
    fi
fi

echo ""
echo "🔒 Checking Security Configuration..."
echo ""

# Check for .env files
if file_exists ".env"; then
    print_check ".env file exists" "WARN" "Make sure .env is not committed to Git"
fi

if file_exists ".env.example"; then
    print_check ".env.example file" "PASS"
else
    print_check ".env.example file" "WARN" ".env.example not found"
fi

# Check .gitignore
if file_exists ".gitignore"; then
    if grep -q ".env" .gitignore; then
        print_check ".env in .gitignore" "PASS"
    else
        print_check ".env in .gitignore" "WARN" ".env should be in .gitignore"
    fi
else
    print_check ".gitignore exists" "WARN" ".gitignore not found"
fi

echo ""
echo "🎯 Checking Performance Configuration..."
echo ""

# Check if artillery is available for load testing
if command_exists artillery; then
    print_check "Artillery load testing tool" "PASS"
else
    print_check "Artillery load testing tool" "WARN" "Install with: npm install -g artillery"
fi

# Check if jq is available for JSON processing
if command_exists jq; then
    print_check "jq JSON processor" "PASS"
else
    print_check "jq JSON processor" "WARN" "Install with: sudo apt-get install jq"
fi

echo ""
echo "🚀 Deployment Readiness Summary"
echo "=============================="
echo ""

# Calculate percentage
if [ $TOTAL_CHECKS -gt 0 ]; then
    PERCENTAGE=$((PASSED_CHECKS * 100 / TOTAL_CHECKS))
else
    PERCENTAGE=0
fi

echo -e "${BLUE}Total Checks: $TOTAL_CHECKS${NC}"
echo -e "${GREEN}Passed: $PASSED_CHECKS${NC}"
echo -e "${RED}Failed: $FAILED_CHECKS${NC}"
echo -e "${YELLOW}Warnings: $((TOTAL_CHECKS - PASSED_CHECKS - FAILED_CHECKS))${NC}"
echo ""
echo -e "${BLUE}Deployment Readiness: $PERCENTAGE%${NC}"
echo ""

# Provide recommendations based on results
if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}🎉 All critical checks passed! Ready for deployment.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Set up AWS account and configure billing alerts"
    echo "2. Configure environment variables"
    echo "3. Run terraform plan and apply"
    echo "4. Deploy container images"
    echo "5. Configure CI/CD pipeline"
    echo ""
    echo "Follow the detailed instructions in DEPLOYMENT_GUIDE.md"
elif [ $FAILED_CHECKS -le 3 ]; then
    echo -e "${YELLOW}⚠️  Some issues need to be addressed before deployment.${NC}"
    echo ""
    echo "Please fix the failed checks above and run this script again."
elif [ $FAILED_CHECKS -gt 3 ]; then
    echo -e "${RED}❌ Multiple critical issues found. Deployment not recommended.${NC}"
    echo ""
    echo "Please address the failed checks and ensure all prerequisites are met."
fi

echo ""
echo "📚 Resources:"
echo "- Deployment Guide: DEPLOYMENT_GUIDE.md"
echo "- Deployment Strategy: PRODUCTION_DEPLOYMENT_STRATEGY.md"
echo "- Deployment Summary: DEPLOYMENT_SUMMARY.md"
echo ""

# Exit with appropriate code
if [ $FAILED_CHECKS -eq 0 ]; then
    exit 0
else
    exit 1
fi