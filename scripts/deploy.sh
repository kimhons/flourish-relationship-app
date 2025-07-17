#!/bin/bash

# Flourish App Deployment Script
# Deploys to iOS App Store, Google Play Store, and AWS

set -e

echo "🚀 Flourish App Deployment Script"
echo "================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to prompt for confirmation
confirm() {
    local prompt="$1"
    local default="${2:-n}"
    
    if [ "$default" = "y" ]; then
        prompt="$prompt [Y/n]: "
    else
        prompt="$prompt [y/N]: "
    fi
    
    read -p "$prompt" response
    response=${response:-$default}
    
    case "$response" in
        [yY][eE][sS]|[yY]) 
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

# Parse command line arguments
DEPLOY_WEB=false
DEPLOY_IOS=false
DEPLOY_ANDROID=false
DEPLOY_ALL=false
ENVIRONMENT="production"

while [[ $# -gt 0 ]]; do
    case $1 in
        --web)
            DEPLOY_WEB=true
            shift
            ;;
        --ios)
            DEPLOY_IOS=true
            shift
            ;;
        --android)
            DEPLOY_ANDROID=true
            shift
            ;;
        --all)
            DEPLOY_ALL=true
            shift
            ;;
        --env)
            ENVIRONMENT="$2"
            shift 2
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--web] [--ios] [--android] [--all] [--env production|staging]"
            exit 1
            ;;
    esac
done

# If no specific platform selected, ask
if [ "$DEPLOY_ALL" = false ] && [ "$DEPLOY_WEB" = false ] && [ "$DEPLOY_IOS" = false ] && [ "$DEPLOY_ANDROID" = false ]; then
    echo "Select deployment target:"
    echo "1) Web (AWS)"
    echo "2) iOS (App Store)"
    echo "3) Android (Play Store)"
    echo "4) All platforms"
    echo ""
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1) DEPLOY_WEB=true ;;
        2) DEPLOY_IOS=true ;;
        3) DEPLOY_ANDROID=true ;;
        4) DEPLOY_ALL=true ;;
        *) echo "Invalid choice"; exit 1 ;;
    esac
fi

if [ "$DEPLOY_ALL" = true ]; then
    DEPLOY_WEB=true
    DEPLOY_IOS=true
    DEPLOY_ANDROID=true
fi

echo ""
echo "Deployment Configuration:"
echo "------------------------"
echo -e "Environment: ${BLUE}$ENVIRONMENT${NC}"
echo -e "Deploy Web: ${DEPLOY_WEB}"
echo -e "Deploy iOS: ${DEPLOY_IOS}"
echo -e "Deploy Android: ${DEPLOY_ANDROID}"
echo ""

if ! confirm "Continue with deployment?"; then
    echo "Deployment cancelled."
    exit 0
fi

# Check for .env file
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found${NC}"
    echo "Please create .env file from .env.example and configure your environment variables"
    exit 1
fi

# Load environment variables
export $(cat .env | grep -v '^#' | xargs)

# Web Deployment (AWS)
if [ "$DEPLOY_WEB" = true ]; then
    echo ""
    echo -e "${BLUE}=== Web Deployment (AWS) ===${NC}"
    echo ""
    
    # Check AWS CLI
    if ! command_exists aws; then
        echo -e "${RED}Error: AWS CLI not installed${NC}"
        echo "Please install AWS CLI: https://aws.amazon.com/cli/"
        exit 1
    fi
    
    # Check AWS credentials
    if ! aws sts get-caller-identity >/dev/null 2>&1; then
        echo -e "${RED}Error: AWS credentials not configured${NC}"
        echo "Please run: aws configure"
        exit 1
    fi
    
    # Build frontend
    echo "Building frontend..."
    cd frontend
    npm install
    npm run build:production
    cd ..
    
    # Build backend Docker image
    echo "Building backend Docker image..."
    docker build -t flourish-backend:latest .
    
    # Deploy with Terraform
    if command_exists terraform; then
        echo "Deploying infrastructure with Terraform..."
        cd terraform
        terraform init
        terraform plan -out=tfplan
        
        if confirm "Apply Terraform changes?"; then
            terraform apply tfplan
        fi
        cd ..
    else
        echo -e "${YELLOW}Warning: Terraform not installed. Skipping infrastructure deployment.${NC}"
    fi
    
    # Push Docker image to ECR
    echo "Pushing Docker image to ECR..."
    AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
    AWS_REGION=${AWS_REGION:-us-east-1}
    ECR_REPOSITORY="flourish-backend"
    
    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
    
    docker tag flourish-backend:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
    docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
    
    # Deploy frontend to S3
    echo "Deploying frontend to S3..."
    S3_BUCKET="flourish-frontend-$ENVIRONMENT"
    aws s3 sync frontend/dist/ s3://$S3_BUCKET/ --delete
    
    # Invalidate CloudFront cache
    if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
        echo "Invalidating CloudFront cache..."
        aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    fi
    
    echo -e "${GREEN}✓ Web deployment complete!${NC}"
fi

# iOS Deployment
if [ "$DEPLOY_IOS" = true ]; then
    echo ""
    echo -e "${BLUE}=== iOS Deployment (App Store) ===${NC}"
    echo ""
    
    cd mobile
    
    # Install dependencies
    echo "Installing dependencies..."
    npm install
    cd ios
    pod install
    cd ..
    
    # Build iOS app
    echo "Building iOS app..."
    if command_exists fastlane; then
        fastlane ios build
    else
        # Manual build
        cd ios
        xcodebuild -workspace FlourishApp.xcworkspace \
                   -scheme FlourishApp \
                   -configuration Release \
                   -archivePath build/FlourishApp.xcarchive \
                   archive
        
        xcodebuild -exportArchive \
                   -archivePath build/FlourishApp.xcarchive \
                   -exportOptionsPlist exportOptions.plist \
                   -exportPath build/
        cd ..
    fi
    
    # Upload to App Store Connect
    if confirm "Upload to App Store Connect?"; then
        if command_exists fastlane; then
            fastlane ios upload
        else
            echo -e "${YELLOW}Please upload the build manually using Xcode or Transporter${NC}"
            echo "Build location: mobile/ios/build/"
        fi
    fi
    
    cd ..
    echo -e "${GREEN}✓ iOS deployment complete!${NC}"
fi

# Android Deployment
if [ "$DEPLOY_ANDROID" = true ]; then
    echo ""
    echo -e "${BLUE}=== Android Deployment (Play Store) ===${NC}"
    echo ""
    
    cd mobile
    
    # Install dependencies
    echo "Installing dependencies..."
    npm install
    
    # Build Android app
    echo "Building Android app..."
    cd android
    
    # Clean previous builds
    ./gradlew clean
    
    # Build release bundle
    ./gradlew bundleRelease
    
    echo "Android App Bundle created at:"
    echo "mobile/android/app/build/outputs/bundle/release/app-release.aab"
    
    # Upload to Play Store
    if confirm "Upload to Google Play Console?"; then
        if command_exists fastlane; then
            cd ..
            fastlane android upload
        else
            echo -e "${YELLOW}Please upload the bundle manually to Google Play Console${NC}"
            echo "Bundle location: mobile/android/app/build/outputs/bundle/release/app-release.aab"
        fi
    fi
    
    cd ../..
    echo -e "${GREEN}✓ Android deployment complete!${NC}"
fi

echo ""
echo -e "${GREEN}=== Deployment Summary ===${NC}"
echo ""

if [ "$DEPLOY_WEB" = true ]; then
    echo -e "${GREEN}✓ Web:${NC} Deployed to AWS"
    echo "  - Frontend: https://$DOMAIN_NAME"
    echo "  - API: https://api.$DOMAIN_NAME"
fi

if [ "$DEPLOY_IOS" = true ]; then
    echo -e "${GREEN}✓ iOS:${NC} Build ready for App Store"
    echo "  - Check App Store Connect for processing status"
fi

if [ "$DEPLOY_ANDROID" = true ]; then
    echo -e "${GREEN}✓ Android:${NC} Bundle ready for Play Store"
    echo "  - Check Google Play Console for processing status"
fi

echo ""
echo "Post-deployment tasks:"
echo "1. Monitor application logs and metrics"
echo "2. Verify all services are running correctly"
echo "3. Test critical user flows"
echo "4. Set up monitoring alerts"
echo ""

echo -e "${GREEN}Deployment completed successfully!${NC}"