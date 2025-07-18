#!/bin/bash

# Flourish Production Deployment Script
# Deploys the application with all security checks

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
ENVIRONMENT=${1:-production}
DEPLOY_DIR="/opt/flourish"
BACKUP_DIR="/opt/flourish-backups"
LOG_FILE="/var/log/flourish-deploy.log"

# Functions
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Pre-deployment checks
pre_deployment_checks() {
    log "Running pre-deployment checks..."
    
    # Check if running as appropriate user
    if [[ $EUID -eq 0 ]]; then
        error "Do not run as root. Use a deployment user with sudo privileges."
    fi
    
    # Check required tools
    required_tools=(docker docker-compose git openssl jq curl)
    for tool in "${required_tools[@]}"; do
        if ! command -v "$tool" &> /dev/null; then
            error "Required tool not found: $tool"
        fi
    done
    
    # Check disk space
    available_space=$(df -BG /opt | awk 'NR==2 {print $4}' | sed 's/G//')
    if [[ $available_space -lt 10 ]]; then
        error "Insufficient disk space. At least 10GB required."
    fi
    
    # Check if secrets are configured
    if [[ ! -d "secrets" ]]; then
        error "Secrets directory not found. Run setup-secrets.sh first."
    fi
    
    success "Pre-deployment checks passed"
}

# Security validation
security_validation() {
    log "Running security validation..."
    
    # Check for exposed secrets
    if grep -r -i -E "(api_key|secret|password).*=.*[\"'][^\"']+[\"']" \
        --exclude-dir=node_modules \
        --exclude-dir=.git \
        --exclude="*.md" \
        --exclude="*.log" \
        . 2>/dev/null | grep -v "example\|sample\|test"; then
        error "Exposed secrets found in code!"
    fi
    
    # Verify nginx configuration
    if ! docker run --rm -v "$(pwd)/nginx/nginx-secure.conf:/etc/nginx/nginx.conf:ro" \
        nginx:alpine nginx -t &> /dev/null; then
        error "Nginx configuration validation failed"
    fi
    
    # Check Docker images for vulnerabilities
    log "Scanning Docker images for vulnerabilities..."
    docker-compose -f docker-compose.secure.yml config --images | while read image; do
        if [[ -n "$image" ]]; then
            log "Scanning $image..."
            # Use trivy or another scanner if available
            if command -v trivy &> /dev/null; then
                trivy image --severity HIGH,CRITICAL "$image" || warning "Vulnerabilities found in $image"
            fi
        fi
    done
    
    success "Security validation completed"
}

# Build application
build_application() {
    log "Building application..."
    
    # Build frontend
    log "Building frontend..."
    cd frontend
    npm ci --production
    npm run build
    cd ..
    
    # Build backend Docker image
    log "Building backend Docker image..."
    docker build -t flourish-backend:${ENVIRONMENT} -f backend/Dockerfile.secure backend/
    
    # Build other services
    log "Building other services..."
    docker-compose -f docker-compose.secure.yml build
    
    success "Application build completed"
}

# Database backup
backup_database() {
    log "Backing up database..."
    
    mkdir -p "$BACKUP_DIR"
    timestamp=$(date +%Y%m%d_%H%M%S)
    
    # Backup PostgreSQL
    if docker ps | grep -q flourish_postgres; then
        docker exec flourish_postgres pg_dump -U flourish_user flourish_db | \
            gzip > "$BACKUP_DIR/flourish_db_${timestamp}.sql.gz"
        success "Database backed up to $BACKUP_DIR/flourish_db_${timestamp}.sql.gz"
    else
        warning "Database container not running, skipping backup"
    fi
}

# Deploy application
deploy_application() {
    log "Deploying application..."
    
    # Stop existing containers
    log "Stopping existing containers..."
    docker-compose -f docker-compose.secure.yml down || true
    
    # Copy files to deployment directory
    log "Copying files to deployment directory..."
    sudo mkdir -p "$DEPLOY_DIR"
    sudo rsync -av --exclude='.git' --exclude='node_modules' \
        --exclude='*.log' --exclude='.env*' \
        . "$DEPLOY_DIR/"
    
    # Set proper permissions
    sudo chown -R deploy:deploy "$DEPLOY_DIR"
    sudo chmod -R 755 "$DEPLOY_DIR"
    sudo chmod 600 "$DEPLOY_DIR/secrets/*"
    
    # Start services
    log "Starting services..."
    cd "$DEPLOY_DIR"
    docker-compose -f docker-compose.secure.yml up -d
    
    # Wait for services to be healthy
    log "Waiting for services to be healthy..."
    sleep 30
    
    # Check service health
    services=(nginx backend postgres redis)
    for service in "${services[@]}"; do
        if docker ps | grep -q "flourish_$service"; then
            if docker exec "flourish_$service" echo "OK" &> /dev/null; then
                success "$service is healthy"
            else
                error "$service health check failed"
            fi
        else
            error "$service container not running"
        fi
    done
    
    success "Application deployed successfully"
}

# Post-deployment tasks
post_deployment() {
    log "Running post-deployment tasks..."
    
    # Run database migrations
    log "Running database migrations..."
    docker exec flourish_backend python manage.py migrate || warning "Migration failed"
    
    # Warm up cache
    log "Warming up cache..."
    curl -s -o /dev/null -w "%{http_code}" https://flourish-app.com/health || warning "Health check failed"
    
    # Update monitoring
    log "Updating monitoring configuration..."
    # Update Prometheus/Grafana configs if needed
    
    # Send deployment notification
    if [[ -n "${SLACK_WEBHOOK_URL:-}" ]]; then
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"✅ Flourish deployed to $ENVIRONMENT successfully!\"}" \
            "$SLACK_WEBHOOK_URL" 2>/dev/null
    fi
    
    success "Post-deployment tasks completed"
}

# Rollback function
rollback() {
    error "Deployment failed! Rolling back..."
    
    # Restore from backup
    if [[ -f "$BACKUP_DIR/flourish_previous.tar.gz" ]]; then
        cd "$DEPLOY_DIR"
        tar -xzf "$BACKUP_DIR/flourish_previous.tar.gz"
        docker-compose -f docker-compose.secure.yml up -d
        warning "Rolled back to previous version"
    else
        error "No backup found for rollback"
    fi
}

# Main deployment flow
main() {
    log "Starting Flourish deployment to $ENVIRONMENT"
    
    # Set up error handling
    trap rollback ERR
    
    # Run deployment steps
    pre_deployment_checks
    security_validation
    backup_database
    build_application
    deploy_application
    post_deployment
    
    # Final security check
    log "Running final security check..."
    ./scripts/security-monitor.sh --once || warning "Security check reported issues"
    
    success "🚀 Deployment completed successfully!"
    log "Access the application at https://flourish-app.com"
    log "Monitor logs at: docker-compose -f docker-compose.secure.yml logs -f"
}

# Run main function
main "$@"