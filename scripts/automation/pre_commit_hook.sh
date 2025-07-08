#!/bin/bash

# Flourish Pre-Commit Hook
# Author: Manus AI
# Date: July 8, 2025
# Purpose: Automated quality checks before commits

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_ROOT="$(git rev-parse --show-toplevel)"
FRONTEND_DIR="$REPO_ROOT/frontend"

# Print colored output
print_status() {
    echo -e "${BLUE}[PRE-COMMIT]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository"
    exit 1
fi

print_status "Running Flourish pre-commit quality checks..."

# Get list of staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED_FILES" ]; then
    print_warning "No staged files found"
    exit 0
fi

# Check for large files
print_status "Checking for large files..."
LARGE_FILES=0
for file in $STAGED_FILES; do
    if [ -f "$file" ] && [ $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo 0) -gt 10485760 ]; then
        print_error "Large file detected (>10MB): $file"
        LARGE_FILES=1
    fi
done

if [ $LARGE_FILES -eq 1 ]; then
    print_error "Commit blocked: Large files detected"
    exit 1
fi

# Check for sensitive files
print_status "Checking for sensitive files..."
SENSITIVE_FILES=0
for file in $STAGED_FILES; do
    case "$file" in
        *.env|*.key|*.pem|*password*|*secret*|*.p12|*.pfx)
            print_error "Sensitive file detected: $file"
            SENSITIVE_FILES=1
            ;;
    esac
done

if [ $SENSITIVE_FILES -eq 1 ]; then
    print_error "Commit blocked: Sensitive files detected"
    exit 1
fi

# Check JavaScript/JSX files for basic syntax
print_status "Checking JavaScript/JSX syntax..."
JS_ERRORS=0
for file in $STAGED_FILES; do
    case "$file" in
        *.js|*.jsx|*.ts|*.tsx)
            if [ -f "$file" ]; then
                # Basic syntax check using node if available
                if command -v node >/dev/null 2>&1; then
                    if ! node -c "$file" 2>/dev/null; then
                        print_error "Syntax error in: $file"
                        JS_ERRORS=1
                    fi
                fi
            fi
            ;;
    esac
done

if [ $JS_ERRORS -eq 1 ]; then
    print_error "Commit blocked: JavaScript syntax errors detected"
    exit 1
fi

# Check for proper file naming conventions
print_status "Checking file naming conventions..."
NAMING_VIOLATIONS=0
for file in $STAGED_FILES; do
    filename=$(basename "$file")
    directory=$(dirname "$file")
    
    # Check React component naming
    if [[ "$directory" == *"/components/"* ]] && [[ "$filename" == *.jsx ]]; then
        component_name=$(basename "$filename" .jsx)
        if [[ ! "$component_name" =~ ^[A-Z][a-zA-Z0-9]*$ ]]; then
            print_warning "Component file should use PascalCase: $file"
            NAMING_VIOLATIONS=1
        fi
    fi
    
    # Check for spaces in filenames
    if [[ "$filename" == *" "* ]]; then
        print_error "Filename contains spaces: $file"
        NAMING_VIOLATIONS=1
    fi
done

# Check commit message format
print_status "Checking commit message format..."
COMMIT_MSG_FILE="$1"
if [ -n "$COMMIT_MSG_FILE" ] && [ -f "$COMMIT_MSG_FILE" ]; then
    COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")
    
    # Check if commit message follows the expected format
    if [[ ! "$COMMIT_MSG" =~ ^[🚀🐛📚🎨♻️🗂️] ]]; then
        print_warning "Commit message should start with an emoji (🚀🐛📚🎨♻️🗂️)"
        print_warning "Example: 🚀 FEATURE: Add new user profile component"
    fi
fi

# Check documentation updates for code changes
print_status "Checking documentation requirements..."
DOC_UPDATES_NEEDED=0
CODE_CHANGES=0

for file in $STAGED_FILES; do
    case "$file" in
        *.js|*.jsx|*.ts|*.tsx|*.py)
            CODE_CHANGES=1
            ;;
        *.md)
            DOC_UPDATES_NEEDED=1
            ;;
    esac
done

if [ $CODE_CHANGES -eq 1 ] && [ $DOC_UPDATES_NEEDED -eq 0 ]; then
    print_warning "Code changes detected but no documentation updates"
    print_warning "Consider updating relevant documentation"
fi

# Run basic linting if available
print_status "Running basic code quality checks..."
if [ -f "$FRONTEND_DIR/package.json" ] && command -v npm >/dev/null 2>&1; then
    cd "$FRONTEND_DIR"
    
    # Check if eslint is available
    if npm list eslint >/dev/null 2>&1; then
        print_status "Running ESLint..."
        for file in $STAGED_FILES; do
            case "$file" in
                *.js|*.jsx|*.ts|*.tsx)
                    if [ -f "$REPO_ROOT/$file" ]; then
                        if ! npx eslint "$REPO_ROOT/$file" --quiet; then
                            print_error "ESLint errors in: $file"
                            JS_ERRORS=1
                        fi
                    fi
                    ;;
            esac
        done
    fi
fi

# Final validation
TOTAL_ISSUES=$((LARGE_FILES + SENSITIVE_FILES + JS_ERRORS + NAMING_VIOLATIONS))

if [ $TOTAL_ISSUES -eq 0 ]; then
    print_success "All pre-commit checks passed!"
    print_status "Proceeding with commit..."
    exit 0
else
    print_error "Pre-commit checks failed with $TOTAL_ISSUES issues"
    print_error "Please fix the issues above before committing"
    exit 1
fi

