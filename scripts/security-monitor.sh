#!/bin/bash

# Flourish Security Monitoring Script
# Runs continuous security checks and alerts on issues

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
LOG_DIR="/var/log/flourish"
ALERT_EMAIL="security@flourish-app.com"
SLACK_WEBHOOK_URL="${SLACK_WEBHOOK_URL:-}"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/security-monitor.log"
}

# Alert function
send_alert() {
    local severity=$1
    local message=$2
    
    log "[$severity] $message"
    
    # Send email alert
    if command -v mail &> /dev/null; then
        echo "$message" | mail -s "Flourish Security Alert: $severity" "$ALERT_EMAIL"
    fi
    
    # Send Slack alert if webhook is configured
    if [[ -n "$SLACK_WEBHOOK_URL" ]]; then
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"🚨 *Security Alert* [$severity]: $message\"}" \
            "$SLACK_WEBHOOK_URL" 2>/dev/null
    fi
}

# Check for exposed secrets in code
check_exposed_secrets() {
    log "Checking for exposed secrets..."
    
    # Patterns to search for
    patterns=(
        "api[_-]?key"
        "secret[_-]?key"
        "password"
        "private[_-]?key"
        "access[_-]?token"
        "auth[_-]?token"
        "client[_-]?secret"
    )
    
    # Files to exclude
    exclude_patterns=(
        "*.log"
        "*.md"
        "node_modules/*"
        ".git/*"
        "*.test.js"
        "*.spec.js"
    )
    
    # Build grep command
    grep_cmd="grep -r -i -n"
    for pattern in "${patterns[@]}"; do
        grep_cmd="$grep_cmd -e '$pattern.*=.*[\"'][^\"']\+[\"']'"
    done
    
    for exclude in "${exclude_patterns[@]}"; do
        grep_cmd="$grep_cmd --exclude='$exclude'"
    done
    
    # Run the check
    if eval "$grep_cmd . 2>/dev/null" > "$LOG_DIR/exposed-secrets.tmp"; then
        if [[ -s "$LOG_DIR/exposed-secrets.tmp" ]]; then
            send_alert "CRITICAL" "Potential exposed secrets found! Check $LOG_DIR/exposed-secrets.tmp"
            return 1
        fi
    fi
    
    log "✓ No exposed secrets found"
    return 0
}

# Check for vulnerable dependencies
check_dependencies() {
    log "Checking for vulnerable dependencies..."
    
    vulnerabilities=0
    
    # Check npm packages
    if [[ -f "package.json" ]]; then
        if npm audit --json > "$LOG_DIR/npm-audit.json" 2>/dev/null; then
            critical_vulns=$(jq '.metadata.vulnerabilities.critical // 0' "$LOG_DIR/npm-audit.json")
            high_vulns=$(jq '.metadata.vulnerabilities.high // 0' "$LOG_DIR/npm-audit.json")
            
            if [[ $critical_vulns -gt 0 ]]; then
                send_alert "CRITICAL" "Found $critical_vulns critical npm vulnerabilities!"
                vulnerabilities=$((vulnerabilities + critical_vulns))
            fi
            
            if [[ $high_vulns -gt 0 ]]; then
                send_alert "HIGH" "Found $high_vulns high npm vulnerabilities!"
                vulnerabilities=$((vulnerabilities + high_vulns))
            fi
        fi
    fi
    
    # Check Python packages
    if [[ -f "requirements.txt" ]]; then
        if command -v pip-audit &> /dev/null; then
            if ! pip-audit --desc > "$LOG_DIR/pip-audit.log" 2>&1; then
                send_alert "HIGH" "Python dependency vulnerabilities found! Check $LOG_DIR/pip-audit.log"
                vulnerabilities=$((vulnerabilities + 1))
            fi
        fi
    fi
    
    if [[ $vulnerabilities -eq 0 ]]; then
        log "✓ No vulnerable dependencies found"
    fi
    
    return $vulnerabilities
}

# Check SSL certificate expiration
check_ssl_certificate() {
    log "Checking SSL certificate..."
    
    domain="flourish-app.com"
    
    if command -v openssl &> /dev/null; then
        cert_info=$(echo | openssl s_client -servername "$domain" -connect "$domain:443" 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
        
        if [[ -n "$cert_info" ]]; then
            expiry_date=$(echo "$cert_info" | grep "notAfter" | cut -d= -f2)
            expiry_timestamp=$(date -d "$expiry_date" +%s 2>/dev/null || date -j -f "%b %d %H:%M:%S %Y %Z" "$expiry_date" +%s 2>/dev/null)
            current_timestamp=$(date +%s)
            days_until_expiry=$(( (expiry_timestamp - current_timestamp) / 86400 ))
            
            if [[ $days_until_expiry -lt 7 ]]; then
                send_alert "CRITICAL" "SSL certificate expires in $days_until_expiry days!"
            elif [[ $days_until_expiry -lt 30 ]]; then
                send_alert "WARNING" "SSL certificate expires in $days_until_expiry days"
            else
                log "✓ SSL certificate valid for $days_until_expiry days"
            fi
        else
            send_alert "ERROR" "Could not check SSL certificate for $domain"
        fi
    fi
}

# Monitor failed login attempts
check_failed_logins() {
    log "Checking failed login attempts..."
    
    # Check backend logs for failed logins
    if [[ -f "$LOG_DIR/backend.log" ]]; then
        failed_attempts=$(grep -c "Failed login attempt" "$LOG_DIR/backend.log" 2>/dev/null || echo "0")
        
        if [[ $failed_attempts -gt 100 ]]; then
            send_alert "HIGH" "Detected $failed_attempts failed login attempts in the last hour!"
        elif [[ $failed_attempts -gt 50 ]]; then
            send_alert "WARNING" "Detected $failed_attempts failed login attempts in the last hour"
        else
            log "✓ Failed login attempts within normal range: $failed_attempts"
        fi
    fi
}

# Check for security headers
check_security_headers() {
    log "Checking security headers..."
    
    domain="https://flourish-app.com"
    
    if command -v curl &> /dev/null; then
        headers=$(curl -s -I "$domain" 2>/dev/null)
        
        required_headers=(
            "Strict-Transport-Security"
            "X-Frame-Options"
            "X-Content-Type-Options"
            "X-XSS-Protection"
            "Content-Security-Policy"
            "Referrer-Policy"
        )
        
        missing_headers=()
        
        for header in "${required_headers[@]}"; do
            if ! echo "$headers" | grep -qi "^$header:"; then
                missing_headers+=("$header")
            fi
        done
        
        if [[ ${#missing_headers[@]} -gt 0 ]]; then
            send_alert "HIGH" "Missing security headers: ${missing_headers[*]}"
        else
            log "✓ All security headers present"
        fi
    fi
}

# Check Docker container security
check_docker_security() {
    log "Checking Docker container security..."
    
    if command -v docker &> /dev/null; then
        # Check for containers running as root
        root_containers=$(docker ps --format "table {{.Names}}\t{{.ID}}" | tail -n +2 | while read name id; do
            user=$(docker exec "$id" whoami 2>/dev/null || echo "")
            if [[ "$user" == "root" ]]; then
                echo "$name"
            fi
        done)
        
        if [[ -n "$root_containers" ]]; then
            send_alert "WARNING" "Containers running as root: $root_containers"
        else
            log "✓ No containers running as root"
        fi
        
        # Check for outdated images
        docker images --format "{{.Repository}}:{{.Tag}}" | while read image; do
            if [[ "$image" == *":latest" ]]; then
                send_alert "WARNING" "Using 'latest' tag for image: $image"
            fi
        done
    fi
}

# Check file permissions
check_file_permissions() {
    log "Checking file permissions..."
    
    # Find world-writable files
    world_writable=$(find . -type f -perm -002 -not -path "./node_modules/*" -not -path "./.git/*" 2>/dev/null | head -20)
    
    if [[ -n "$world_writable" ]]; then
        send_alert "HIGH" "Found world-writable files: $world_writable"
    else
        log "✓ No world-writable files found"
    fi
    
    # Check for files with sensitive names
    sensitive_files=(
        "*.key"
        "*.pem"
        "*.p12"
        "*.pfx"
        ".env*"
        "*secret*"
        "*password*"
    )
    
    for pattern in "${sensitive_files[@]}"; do
        files=$(find . -name "$pattern" -not -path "./node_modules/*" -not -path "./.git/*" 2>/dev/null)
        if [[ -n "$files" ]]; then
            for file in $files; do
                perms=$(stat -c "%a" "$file" 2>/dev/null || stat -f "%Lp" "$file" 2>/dev/null)
                if [[ "$perms" != "600" && "$perms" != "400" ]]; then
                    send_alert "HIGH" "Sensitive file with loose permissions: $file ($perms)"
                fi
            done
        fi
    done
}

# Monitor API rate limiting
check_rate_limiting() {
    log "Checking API rate limiting..."
    
    # Check nginx logs for rate limit hits
    if [[ -f "/var/log/nginx/error.log" ]]; then
        rate_limit_hits=$(grep -c "limiting requests" "/var/log/nginx/error.log" 2>/dev/null || echo "0")
        
        if [[ $rate_limit_hits -gt 1000 ]]; then
            send_alert "WARNING" "High number of rate limit hits: $rate_limit_hits"
        else
            log "✓ Rate limiting working normally: $rate_limit_hits hits"
        fi
    fi
}

# Main monitoring loop
main() {
    log "Starting security monitoring..."
    
    while true; do
        echo -e "\n${GREEN}=== Security Check $(date '+%Y-%m-%d %H:%M:%S') ===${NC}"
        
        # Run all checks
        check_exposed_secrets || true
        check_dependencies || true
        check_ssl_certificate || true
        check_failed_logins || true
        check_security_headers || true
        check_docker_security || true
        check_file_permissions || true
        check_rate_limiting || true
        
        echo -e "${GREEN}=== Security check complete ===${NC}\n"
        
        # Sleep for 1 hour
        sleep 3600
    done
}

# Run main function
main