#!/bin/bash

# Flourish Documentation Organization Script
# Author: Manus AI
# Date: July 8, 2025
# Purpose: Automated maintenance of repository documentation organization

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ARCHIVE_DIR="$REPO_ROOT/archive"
ORGANIZED_DOCS_DIR="$REPO_ROOT/organized-docs"
LOG_FILE="$REPO_ROOT/scripts/maintenance/organization.log"

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

# Create necessary directories
create_directories() {
    print_status "Creating directory structure..."
    
    mkdir -p "$ARCHIVE_DIR/phase-reports"
    mkdir -p "$ARCHIVE_DIR/documentation-history"
    mkdir -p "$ORGANIZED_DOCS_DIR/current"
    mkdir -p "$ORGANIZED_DOCS_DIR/implementation-reports"
    
    print_success "Directory structure created"
}

# Move phase reports to archive
organize_phase_reports() {
    print_status "Organizing phase reports..."
    
    cd "$REPO_ROOT"
    
    # Move phase-specific reports
    find . -maxdepth 1 -name "PHASE_*_*.md" -exec mv {} "$ARCHIVE_DIR/phase-reports/" \; 2>/dev/null || true
    find . -maxdepth 1 -name "SCREENS_*_*.md" -exec mv {} "$ARCHIVE_DIR/phase-reports/" \; 2>/dev/null || true
    
    # Count moved files
    phase_count=$(find "$ARCHIVE_DIR/phase-reports/" -name "*.md" | wc -l)
    print_success "Moved $phase_count phase reports to archive"
}

# Move implementation reports
organize_implementation_reports() {
    print_status "Organizing implementation reports..."
    
    cd "$REPO_ROOT"
    
    # Move implementation reports
    find . -maxdepth 1 -name "*_IMPLEMENTATION_REPORT.md" -exec mv {} "$ORGANIZED_DOCS_DIR/implementation-reports/" \; 2>/dev/null || true
    find . -maxdepth 1 -name "*_DOCUMENTATION.md" -exec mv {} "$ORGANIZED_DOCS_DIR/implementation-reports/" \; 2>/dev/null || true
    
    # Count moved files
    impl_count=$(find "$ORGANIZED_DOCS_DIR/implementation-reports/" -name "*.md" | wc -l)
    print_success "Moved $impl_count implementation reports to organized docs"
}

# Move current documentation
organize_current_docs() {
    print_status "Organizing current documentation..."
    
    cd "$REPO_ROOT"
    
    # Move current active documentation
    [ -f "FLOURISH_COMPREHENSIVE_REVIEW_AND_IMPLEMENTATION_PLAN.md" ] && mv "FLOURISH_COMPREHENSIVE_REVIEW_AND_IMPLEMENTATION_PLAN.md" "$ORGANIZED_DOCS_DIR/current/" 2>/dev/null || true
    [ -f "SOCIAL_MEDIA_INTEGRATION_SUMMARY.md" ] && mv "SOCIAL_MEDIA_INTEGRATION_SUMMARY.md" "$ORGANIZED_DOCS_DIR/current/" 2>/dev/null || true
    [ -f "FINAL_PROJECT_COMPLETION_REPORT.md" ] && mv "FINAL_PROJECT_COMPLETION_REPORT.md" "$ORGANIZED_DOCS_DIR/current/" 2>/dev/null || true
    
    # Count current docs
    current_count=$(find "$ORGANIZED_DOCS_DIR/current/" -name "*.md" | wc -l)
    print_success "Organized $current_count current documentation files"
}

# Archive comprehensive documentation
archive_comprehensive_docs() {
    print_status "Archiving comprehensive documentation..."
    
    cd "$REPO_ROOT"
    
    # Move comprehensive documentation to archive
    find . -maxdepth 1 -name "COMPREHENSIVE_*.md" -exec mv {} "$ARCHIVE_DIR/documentation-history/" \; 2>/dev/null || true
    find . -maxdepth 1 -name "UPDATED_TODO_*.md" -exec mv {} "$ARCHIVE_DIR/documentation-history/" \; 2>/dev/null || true
    
    # Count archived files
    archive_count=$(find "$ARCHIVE_DIR/documentation-history/" -name "*.md" | wc -l)
    print_success "Archived $archive_count comprehensive documentation files"
}

# Clean up empty directories
cleanup_empty_dirs() {
    print_status "Cleaning up empty directories..."
    
    # Remove empty directories (but keep the structure)
    find "$REPO_ROOT" -type d -empty -not -path "*/.*" -not -path "$REPO_ROOT" -delete 2>/dev/null || true
    
    print_success "Cleanup completed"
}

# Generate organization report
generate_report() {
    print_status "Generating organization report..."
    
    REPORT_FILE="$REPO_ROOT/organized-docs/current/ORGANIZATION_REPORT_$(date +%Y%m%d_%H%M%S).md"
    
    cat > "$REPORT_FILE" << EOF
# 📊 Documentation Organization Report

**Generated:** $(date '+%Y-%m-%d %H:%M:%S')  
**Script:** organize_documentation.sh  
**Status:** Completed Successfully

## 📁 Organization Summary

### Archive Directory
- **Phase Reports:** $(find "$ARCHIVE_DIR/phase-reports/" -name "*.md" | wc -l) files
- **Documentation History:** $(find "$ARCHIVE_DIR/documentation-history/" -name "*.md" | wc -l) files

### Organized Documentation
- **Current Documentation:** $(find "$ORGANIZED_DOCS_DIR/current/" -name "*.md" | wc -l) files
- **Implementation Reports:** $(find "$ORGANIZED_DOCS_DIR/implementation-reports/" -name "*.md" | wc -l) files

### Root Directory Status
- **Remaining Documentation Files:** $(find "$REPO_ROOT" -maxdepth 1 -name "*.md" | wc -l) files

## ✅ Organization Complete

The repository documentation has been successfully organized according to the established directory structure. All files are properly categorized and archived for optimal navigation and maintenance.

**Next Maintenance:** Recommended in 7 days or after significant documentation additions.
EOF

    print_success "Organization report generated: $REPORT_FILE"
}

# Main execution
main() {
    print_status "Starting Flourish documentation organization..."
    print_status "Repository: $REPO_ROOT"
    
    # Create log file
    touch "$LOG_FILE"
    
    # Execute organization steps
    create_directories
    organize_phase_reports
    organize_implementation_reports
    organize_current_docs
    archive_comprehensive_docs
    cleanup_empty_dirs
    generate_report
    
    print_success "Documentation organization completed successfully!"
    print_status "Log file: $LOG_FILE"
}

# Execute main function
main "$@"

