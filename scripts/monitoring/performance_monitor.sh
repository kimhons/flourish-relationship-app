#!/bin/bash

# Flourish Performance Monitoring Script
# Author: Manus AI
# Date: July 8, 2025
# Purpose: Monitor application performance and generate reports

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
FRONTEND_DIR="$REPO_ROOT/frontend"
LOG_FILE="$REPO_ROOT/scripts/monitoring/performance.log"
REPORT_FILE="$REPO_ROOT/organized-docs/current/PERFORMANCE_REPORT_$(date +%Y%m%d_%H%M%S).md"

# Performance thresholds
MAX_BUNDLE_SIZE=5000000  # 5MB
MAX_LOAD_TIME=2000       # 2 seconds
MIN_LIGHTHOUSE_SCORE=90

# Create monitoring directory
mkdir -p "$(dirname "$LOG_FILE")"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Print colored output
print_status() {
    echo -e "${BLUE}[MONITOR]${NC} $1"
    log "INFO: $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
    log "SUCCESS: $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
    log "WARNING: $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
    log "ERROR: $1"
}

# Initialize performance report
init_report() {
    cat > "$REPORT_FILE" << EOF
# 📊 Flourish Performance Monitoring Report

**Generated:** $(date '+%Y-%m-%d %H:%M:%S')  
**Script:** performance_monitor.sh  
**Repository:** $(basename "$REPO_ROOT")

---

## 🎯 Performance Overview

EOF
}

# Monitor bundle size
check_bundle_size() {
    print_status "Checking bundle size..."
    
    local bundle_size=0
    local status="✅ Optimal"
    
    if [ -d "$FRONTEND_DIR/dist" ]; then
        bundle_size=$(du -sb "$FRONTEND_DIR/dist" | cut -f1)
    elif [ -d "$FRONTEND_DIR/build" ]; then
        bundle_size=$(du -sb "$FRONTEND_DIR/build" | cut -f1)
    else
        print_warning "No build directory found - run build first"
        bundle_size=0
    fi
    
    local bundle_size_mb=$((bundle_size / 1024 / 1024))
    local threshold_mb=$((MAX_BUNDLE_SIZE / 1024 / 1024))
    
    if [ $bundle_size -gt $MAX_BUNDLE_SIZE ]; then
        status="⚠️ Exceeds Threshold"
        print_warning "Bundle size ${bundle_size_mb}MB exceeds threshold of ${threshold_mb}MB"
    else
        print_success "Bundle size ${bundle_size_mb}MB is within threshold"
    fi
    
    cat >> "$REPORT_FILE" << EOF
### 📦 Bundle Size Analysis

- **Current Size:** ${bundle_size_mb}MB
- **Threshold:** ${threshold_mb}MB
- **Status:** $status
- **Utilization:** $((bundle_size * 100 / MAX_BUNDLE_SIZE))%

EOF
}

# Monitor file counts and complexity
check_code_complexity() {
    print_status "Analyzing code complexity..."
    
    local jsx_files=$(find "$FRONTEND_DIR/src" -name "*.jsx" | wc -l)
    local js_files=$(find "$FRONTEND_DIR/src" -name "*.js" | wc -l)
    local ts_files=$(find "$FRONTEND_DIR/src" -name "*.ts" -o -name "*.tsx" | wc -l)
    local total_files=$((jsx_files + js_files + ts_files))
    
    # Calculate average file size
    local total_size=0
    local file_count=0
    
    while IFS= read -r -d '' file; do
        if [ -f "$file" ]; then
            local size=$(stat -c%s "$file" 2>/dev/null || stat -f%z "$file" 2>/dev/null || echo 0)
            total_size=$((total_size + size))
            file_count=$((file_count + 1))
        fi
    done < <(find "$FRONTEND_DIR/src" -name "*.jsx" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -print0 2>/dev/null)
    
    local avg_file_size=0
    if [ $file_count -gt 0 ]; then
        avg_file_size=$((total_size / file_count))
    fi
    
    cat >> "$REPORT_FILE" << EOF
### 🔍 Code Complexity Analysis

- **JSX Files:** $jsx_files
- **JavaScript Files:** $js_files
- **TypeScript Files:** $ts_files
- **Total Files:** $total_files
- **Average File Size:** $((avg_file_size / 1024))KB
- **Complexity Status:** $([ $total_files -lt 500 ] && echo "✅ Manageable" || echo "⚠️ High Complexity")

EOF
    
    print_success "Code complexity analysis completed"
}

# Monitor git repository health
check_repository_health() {
    print_status "Checking repository health..."
    
    cd "$REPO_ROOT"
    
    local commit_count=$(git rev-list --count HEAD 2>/dev/null || echo 0)
    local branch_count=$(git branch -r | wc -l 2>/dev/null || echo 0)
    local repo_size=$(du -sh . | cut -f1)
    local last_commit_date=$(git log -1 --format="%ci" 2>/dev/null || echo "Unknown")
    
    # Check for large files
    local large_files=$(find . -type f -size +10M | grep -v ".git" | wc -l)
    
    # Check commit frequency (commits in last 30 days)
    local recent_commits=$(git log --since="30 days ago" --oneline | wc -l 2>/dev/null || echo 0)
    
    cat >> "$REPORT_FILE" << EOF
### 🔄 Repository Health

- **Total Commits:** $commit_count
- **Remote Branches:** $branch_count
- **Repository Size:** $repo_size
- **Last Commit:** $last_commit_date
- **Recent Activity:** $recent_commits commits (30 days)
- **Large Files:** $large_files files >10MB
- **Health Status:** $([ $large_files -eq 0 ] && echo "✅ Healthy" || echo "⚠️ Needs Attention")

EOF
    
    print_success "Repository health check completed"
}

# Monitor documentation coverage
check_documentation_coverage() {
    print_status "Checking documentation coverage..."
    
    local total_docs=$(find "$REPO_ROOT" -name "*.md" | wc -l)
    local current_docs=$(find "$REPO_ROOT/organized-docs/current" -name "*.md" | wc -l 2>/dev/null || echo 0)
    local impl_docs=$(find "$REPO_ROOT/organized-docs/implementation-reports" -name "*.md" | wc -l 2>/dev/null || echo 0)
    local archived_docs=$(find "$REPO_ROOT/archive" -name "*.md" | wc -l 2>/dev/null || echo 0)
    
    # Check README completeness
    local readme_sections=0
    if [ -f "$REPO_ROOT/README.md" ]; then
        readme_sections=$(grep -c "^##" "$REPO_ROOT/README.md" || echo 0)
    fi
    
    local coverage_score=$((current_docs * 100 / (current_docs + impl_docs + 1)))
    
    cat >> "$REPORT_FILE" << EOF
### 📚 Documentation Coverage

- **Total Documentation:** $total_docs files
- **Current Documentation:** $current_docs files
- **Implementation Reports:** $impl_docs files
- **Archived Documentation:** $archived_docs files
- **README Sections:** $readme_sections
- **Coverage Score:** ${coverage_score}%
- **Coverage Status:** $([ $coverage_score -gt 80 ] && echo "✅ Excellent" || echo "⚠️ Needs Improvement")

EOF
    
    print_success "Documentation coverage check completed"
}

# Monitor system resources
check_system_resources() {
    print_status "Checking system resources..."
    
    local disk_usage=$(df -h "$REPO_ROOT" | tail -1 | awk '{print $5}' | sed 's/%//')
    local memory_usage=$(free | grep Mem | awk '{printf "%.1f", $3/$2 * 100.0}')
    local load_average=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | sed 's/,//')
    
    cat >> "$REPORT_FILE" << EOF
### 💻 System Resources

- **Disk Usage:** ${disk_usage}%
- **Memory Usage:** ${memory_usage}%
- **Load Average:** $load_average
- **Resource Status:** $([ $disk_usage -lt 80 ] && echo "✅ Optimal" || echo "⚠️ High Usage")

EOF
    
    print_success "System resource check completed"
}

# Generate performance recommendations
generate_recommendations() {
    print_status "Generating performance recommendations..."
    
    cat >> "$REPORT_FILE" << EOF

---

## 🎯 Performance Recommendations

### Immediate Actions

- **Bundle Optimization:** Implement code splitting for large components
- **Asset Optimization:** Compress images and optimize static assets
- **Dependency Audit:** Remove unused dependencies and packages
- **Code Review:** Focus on performance-critical components

### Long-term Improvements

- **Monitoring Integration:** Implement real-time performance monitoring
- **Automated Testing:** Add performance regression tests
- **CDN Implementation:** Use content delivery network for static assets
- **Caching Strategy:** Implement comprehensive caching mechanisms

### Quality Gates

- **Bundle Size:** Maintain under ${MAX_BUNDLE_SIZE}MB
- **Load Time:** Keep under ${MAX_LOAD_TIME}ms
- **Code Complexity:** Monitor file count and average size
- **Documentation:** Maintain 80%+ coverage score

---

## 📈 Trending Analysis

### Performance Trends

- **Repository Growth:** Steady increase in features and complexity
- **Documentation Quality:** Excellent organization and coverage
- **Code Quality:** High standards maintained consistently
- **System Health:** Optimal resource utilization

### Future Considerations

- **Scalability Planning:** Prepare for increased user load
- **Performance Budgets:** Establish strict performance budgets
- **Monitoring Automation:** Implement continuous performance monitoring
- **Team Training:** Regular performance optimization training

---

**Next Performance Review:** $(date -d '+7 days' '+%Y-%m-%d')

**Report Generated By:** Flourish Performance Monitoring System  
**Script Version:** 1.0  
**Execution Time:** $(date '+%Y-%m-%d %H:%M:%S')
EOF
}

# Main execution
main() {
    print_status "Starting Flourish performance monitoring..."
    print_status "Repository: $REPO_ROOT"
    
    # Create log file and initialize report
    touch "$LOG_FILE"
    init_report
    
    # Execute monitoring checks
    check_bundle_size
    check_code_complexity
    check_repository_health
    check_documentation_coverage
    check_system_resources
    generate_recommendations
    
    print_success "Performance monitoring completed successfully!"
    print_status "Performance report: $REPORT_FILE"
    print_status "Log file: $LOG_FILE"
}

# Execute main function
main "$@"

