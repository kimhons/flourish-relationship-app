#!/bin/bash

# Flourish Quality Assurance Script
# Author: Manus AI
# Date: July 8, 2025
# Purpose: Automated quality checks for code and documentation

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
LOG_FILE="$REPO_ROOT/scripts/automation/quality_check.log"
REPORT_FILE="$REPO_ROOT/organized-docs/current/QUALITY_REPORT_$(date +%Y%m%d_%H%M%S).md"

# Quality thresholds
MIN_CODE_COVERAGE=80
MAX_BUNDLE_SIZE=5000000  # 5MB
MAX_LOAD_TIME=2000       # 2 seconds

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
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

# Initialize quality report
init_report() {
    cat > "$REPORT_FILE" << EOF
# 🔍 Flourish Quality Assurance Report

**Generated:** $(date '+%Y-%m-%d %H:%M:%S')  
**Script:** quality_check.sh  
**Repository:** $(basename "$REPO_ROOT")

---

## 📊 Quality Metrics Summary

EOF
}

# Check code structure and organization
check_code_structure() {
    print_status "Checking code structure and organization..."
    
    local issues=0
    
    # Check for proper directory structure
    if [ ! -d "$FRONTEND_DIR/src/components" ]; then
        print_error "Missing components directory"
        ((issues++))
    fi
    
    if [ ! -d "$FRONTEND_DIR/src/pages" ]; then
        print_error "Missing pages directory"
        ((issues++))
    fi
    
    if [ ! -d "$FRONTEND_DIR/src/lib" ]; then
        print_warning "Missing lib directory - consider creating for utilities"
    fi
    
    # Count JSX files
    local jsx_count=$(find "$FRONTEND_DIR/src" -name "*.jsx" | wc -l)
    local js_count=$(find "$FRONTEND_DIR/src" -name "*.js" | wc -l)
    local ts_count=$(find "$FRONTEND_DIR/src" -name "*.ts" -o -name "*.tsx" | wc -l)
    
    cat >> "$REPORT_FILE" << EOF
### 📁 Code Structure Analysis

- **JSX Files:** $jsx_count
- **JavaScript Files:** $js_count  
- **TypeScript Files:** $ts_count
- **Structure Issues:** $issues

EOF
    
    if [ $issues -eq 0 ]; then
        print_success "Code structure check passed"
    else
        print_warning "Code structure check found $issues issues"
    fi
    
    return $issues
}

# Check file naming conventions
check_naming_conventions() {
    print_status "Checking file naming conventions..."
    
    local violations=0
    
    # Check for PascalCase component files
    while IFS= read -r -d '' file; do
        local basename=$(basename "$file" .jsx)
        if [[ ! "$basename" =~ ^[A-Z][a-zA-Z0-9]*$ ]]; then
            print_warning "Component file not in PascalCase: $file"
            ((violations++))
        fi
    done < <(find "$FRONTEND_DIR/src/components" -name "*.jsx" -print0 2>/dev/null || true)
    
    # Check for lowercase config files
    while IFS= read -r -d '' file; do
        local basename=$(basename "$file")
        if [[ "$basename" =~ [A-Z] ]] && [[ "$basename" == *.config.* ]]; then
            print_warning "Config file should be lowercase: $file"
            ((violations++))
        fi
    done < <(find "$REPO_ROOT" -maxdepth 1 -name "*.config.*" -print0 2>/dev/null || true)
    
    cat >> "$REPORT_FILE" << EOF
### 📝 Naming Convention Analysis

- **Naming Violations:** $violations
- **Convention Compliance:** $([ $violations -eq 0 ] && echo "✅ Excellent" || echo "⚠️ Needs Improvement")

EOF
    
    if [ $violations -eq 0 ]; then
        print_success "Naming convention check passed"
    else
        print_warning "Found $violations naming convention violations"
    fi
    
    return $violations
}

# Check documentation completeness
check_documentation() {
    print_status "Checking documentation completeness..."
    
    local missing_docs=0
    
    # Check for essential documentation files
    local essential_docs=(
        "README.md"
        "DEVELOPMENT_GUIDELINES.md"
        "organized-docs/current"
        "organized-docs/implementation-reports"
    )
    
    for doc in "${essential_docs[@]}"; do
        if [ ! -e "$REPO_ROOT/$doc" ]; then
            print_error "Missing essential documentation: $doc"
            ((missing_docs++))
        fi
    done
    
    # Check README completeness
    local readme_sections=0
    if [ -f "$REPO_ROOT/README.md" ]; then
        readme_sections=$(grep -c "^##" "$REPO_ROOT/README.md" || echo 0)
    fi
    
    # Count documentation files
    local total_docs=$(find "$REPO_ROOT" -name "*.md" | wc -l)
    local current_docs=$(find "$REPO_ROOT/organized-docs/current" -name "*.md" | wc -l 2>/dev/null || echo 0)
    local impl_docs=$(find "$REPO_ROOT/organized-docs/implementation-reports" -name "*.md" | wc -l 2>/dev/null || echo 0)
    
    cat >> "$REPORT_FILE" << EOF
### 📚 Documentation Analysis

- **Total Documentation Files:** $total_docs
- **Current Documentation:** $current_docs
- **Implementation Reports:** $impl_docs
- **README Sections:** $readme_sections
- **Missing Essential Docs:** $missing_docs
- **Documentation Status:** $([ $missing_docs -eq 0 ] && echo "✅ Complete" || echo "⚠️ Incomplete")

EOF
    
    if [ $missing_docs -eq 0 ]; then
        print_success "Documentation check passed"
    else
        print_warning "Found $missing_docs missing documentation files"
    fi
    
    return $missing_docs
}

# Check git repository health
check_git_health() {
    print_status "Checking git repository health..."
    
    cd "$REPO_ROOT"
    
    # Get git statistics
    local commit_count=$(git rev-list --count HEAD 2>/dev/null || echo 0)
    local branch_count=$(git branch -r | wc -l 2>/dev/null || echo 0)
    local untracked_files=$(git status --porcelain | grep "^??" | wc -l 2>/dev/null || echo 0)
    local modified_files=$(git status --porcelain | grep "^.M" | wc -l 2>/dev/null || echo 0)
    
    # Check for large files
    local large_files=$(find . -type f -size +10M | grep -v ".git" | wc -l)
    
    # Get repository size
    local repo_size=$(du -sh . | cut -f1)
    
    cat >> "$REPORT_FILE" << EOF
### 🔄 Git Repository Health

- **Total Commits:** $commit_count
- **Remote Branches:** $branch_count
- **Untracked Files:** $untracked_files
- **Modified Files:** $modified_files
- **Large Files (>10MB):** $large_files
- **Repository Size:** $repo_size
- **Repository Status:** $([ $untracked_files -eq 0 ] && [ $modified_files -eq 0 ] && echo "✅ Clean" || echo "⚠️ Has Changes")

EOF
    
    if [ $untracked_files -eq 0 ] && [ $modified_files -eq 0 ]; then
        print_success "Git repository is clean"
    else
        print_warning "Repository has $untracked_files untracked and $modified_files modified files"
    fi
    
    return $((untracked_files + modified_files))
}

# Check security considerations
check_security() {
    print_status "Checking security considerations..."
    
    local security_issues=0
    
    # Check for sensitive files
    local sensitive_patterns=(
        "*.env"
        "*.key"
        "*.pem"
        "*password*"
        "*secret*"
        "*.p12"
        "*.pfx"
    )
    
    for pattern in "${sensitive_patterns[@]}"; do
        local found=$(find "$REPO_ROOT" -name "$pattern" -not -path "*/node_modules/*" -not -path "*/.git/*" | wc -l)
        if [ $found -gt 0 ]; then
            print_warning "Found $found files matching sensitive pattern: $pattern"
            ((security_issues++))
        fi
    done
    
    # Check for hardcoded secrets in code
    local hardcoded_secrets=0
    if command -v grep >/dev/null 2>&1; then
        hardcoded_secrets=$(grep -r -i "password\|secret\|key.*=" "$FRONTEND_DIR/src" 2>/dev/null | grep -v "// " | wc -l || echo 0)
    fi
    
    cat >> "$REPORT_FILE" << EOF
### 🔒 Security Analysis

- **Sensitive File Patterns:** $security_issues
- **Potential Hardcoded Secrets:** $hardcoded_secrets
- **Security Status:** $([ $security_issues -eq 0 ] && [ $hardcoded_secrets -eq 0 ] && echo "✅ Good" || echo "⚠️ Review Needed")

EOF
    
    if [ $security_issues -eq 0 ] && [ $hardcoded_secrets -eq 0 ]; then
        print_success "Security check passed"
    else
        print_warning "Found $security_issues security issues and $hardcoded_secrets potential hardcoded secrets"
    fi
    
    return $((security_issues + hardcoded_secrets))
}

# Generate final report summary
generate_summary() {
    local total_issues=$1
    
    cat >> "$REPORT_FILE" << EOF

---

## 🎯 Quality Summary

### Overall Assessment

$(if [ $total_issues -eq 0 ]; then
    echo "✅ **EXCELLENT** - All quality checks passed successfully"
else
    echo "⚠️ **NEEDS ATTENTION** - Found $total_issues total issues requiring review"
fi)

### Recommendations

$(if [ $total_issues -eq 0 ]; then
    echo "- Continue maintaining current high standards"
    echo "- Regular quality checks recommended weekly"
    echo "- Consider implementing automated CI/CD quality gates"
else
    echo "- Address identified issues in order of priority"
    echo "- Review and update development guidelines"
    echo "- Implement additional quality assurance measures"
fi)

### Next Quality Check

**Recommended:** $(date -d '+7 days' '+%Y-%m-%d')

---

**Report Generated By:** Flourish Quality Assurance System  
**Script Version:** 1.0  
**Execution Time:** $(date '+%Y-%m-%d %H:%M:%S')
EOF
}

# Main execution
main() {
    print_status "Starting Flourish quality assurance check..."
    print_status "Repository: $REPO_ROOT"
    
    # Create log file and initialize report
    touch "$LOG_FILE"
    init_report
    
    # Execute quality checks
    local total_issues=0
    
    check_code_structure
    total_issues=$((total_issues + $?))
    
    check_naming_conventions
    total_issues=$((total_issues + $?))
    
    check_documentation
    total_issues=$((total_issues + $?))
    
    check_git_health
    total_issues=$((total_issues + $?))
    
    check_security
    total_issues=$((total_issues + $?))
    
    # Generate final summary
    generate_summary $total_issues
    
    if [ $total_issues -eq 0 ]; then
        print_success "Quality assurance check completed successfully - No issues found!"
    else
        print_warning "Quality assurance check completed with $total_issues issues requiring attention"
    fi
    
    print_status "Quality report generated: $REPORT_FILE"
    print_status "Log file: $LOG_FILE"
    
    return $total_issues
}

# Execute main function
main "$@"

