# 🔧 Security Fixes Implementation Guide

This guide provides step-by-step instructions to fix all critical security issues identified in the audit.

## 🚨 Priority 1: Critical Security Fixes (Week 1)

### 1. Remove Environment Variable Exposure

**File:** `frontend/src/pages/onboarding/CustomIntegrationBuilder.jsx`

Replace direct environment variable usage:
```javascript
// OLD (INSECURE)
client_id: process.env.SALESFORCE_CLIENT_ID,
client_secret: process.env.SALESFORCE_CLIENT_SECRET

// NEW (SECURE)
const getIntegrationConfig = async () => {
  const response = await fetch('/api/integrations/config', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
};
```

### 2. Fix Android Cleartext Traffic

**File:** `mobile/android/app/src/main/AndroidManifest.xml`

Remove the cleartext traffic permission:
```xml
<!-- DELETE THIS LINE -->
android:usesCleartextTraffic="true"
```

Add network security config:
```xml
android:networkSecurityConfig="@xml/network_security_config"
```

Create `mobile/android/app/src/main/res/xml/network_security_config.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
    <domain-config cleartextTrafficPermitted="false">
        <domain includeSubdomains="true">flourish-app.com</domain>
        <pin-set expiration="2025-12-31">
            <pin digest="SHA-256">CERTIFICATE_PIN_HERE</pin>
        </pin-set>
    </domain-config>
</network-security-config>
```

### 3. Implement Proper Nginx Security Configuration

Create `nginx/nginx-secure.conf`:
```nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=api:10m rate=30r/s;
limit_req_zone $binary_remote_addr zone=auth:10m rate=5r/m;

# SSL Configuration
server {
    listen 80;
    server_name flourish-app.com www.flourish-app.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name flourish-app.com;
    
    # SSL Certificates
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    
    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://apis.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.flourish-app.com wss://flourish-app.com; frame-ancestors 'none';" always;
    
    # Rate Limiting
    location /api/auth/ {
        limit_req zone=auth burst=5 nodelay;
        proxy_pass http://backend:8000;
    }
    
    location /api/ {
        limit_req zone=api burst=50 nodelay;
        proxy_pass http://backend:8000;
    }
    
    location / {
        limit_req zone=general burst=20 nodelay;
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

### 4. Update Firestore Security Rules

**File:** `firestore.rules`

Add proper access controls:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    function isMatch(userId1, userId2) {
      return exists(/databases/$(database)/documents/matches/$(userId1 + '_' + userId2)) ||
             exists(/databases/$(database)/documents/matches/$(userId2 + '_' + userId1));
    }
    
    function hasValidSubscription() {
      return isAuthenticated() && 
        get(/databases/$(database)/documents/subscriptions/$(request.auth.uid)).data.status == 'active';
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isOwner(userId);
      allow write: if isOwner(userId) && 
        request.resource.data.keys().hasAll(['email', 'createdAt']) &&
        request.resource.data.email is string;
    }
    
    // Profiles with privacy controls
    match /profiles/{userId} {
      allow read: if isOwner(userId) || 
        (isAuthenticated() && resource.data.visibility == 'public') ||
        (isAuthenticated() && isMatch(request.auth.uid, userId));
      allow write: if isOwner(userId);
    }
    
    // Secure messaging
    match /conversations/{conversationId} {
      allow read: if isAuthenticated() && 
        request.auth.uid in resource.data.participants;
      allow create: if isAuthenticated() && 
        request.auth.uid in request.resource.data.participants;
      allow update: if isAuthenticated() && 
        request.auth.uid in resource.data.participants &&
        request.resource.data.participants == resource.data.participants;
        
      match /messages/{messageId} {
        allow read: if isAuthenticated() && 
          request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
        allow create: if isAuthenticated() && 
          request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants &&
          request.auth.uid == request.resource.data.senderId;
      }
    }
  }
}
```

### 5. Implement Docker Secrets

Create `docker-compose.secure.yml`:
```yaml
version: '3.8'

secrets:
  db_password:
    file: ./secrets/db_password.txt
  jwt_secret:
    file: ./secrets/jwt_secret.txt
  api_keys:
    file: ./secrets/api_keys.json

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    secrets:
      - db_password
      - jwt_secret
      - api_keys
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:@postgres:5432/flourish_db
    command: >
      sh -c "
        export DB_PASSWORD=$$(cat /run/secrets/db_password) &&
        export JWT_SECRET=$$(cat /run/secrets/jwt_secret) &&
        export API_KEYS=$$(cat /run/secrets/api_keys) &&
        python main.py
      "
```

### 6. Add Input Sanitization

Create `frontend/src/utils/security.js`:
```javascript
import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

export const sanitizeInput = (input, type = 'text') => {
  if (!input) return '';
  
  switch (type) {
    case 'html':
      return DOMPurify.sanitize(input, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
        ALLOWED_ATTR: ['href', 'target']
      });
      
    case 'email':
      return validator.normalizeEmail(input) || '';
      
    case 'url':
      return validator.isURL(input) ? input : '';
      
    case 'alphanumeric':
      return input.replace(/[^a-zA-Z0-9]/g, '');
      
    case 'text':
    default:
      return validator.escape(input);
  }
};

export const validateAndSanitize = (data, schema) => {
  const sanitized = {};
  
  Object.keys(schema).forEach(key => {
    if (data[key] !== undefined) {
      sanitized[key] = sanitizeInput(data[key], schema[key].type);
      
      // Additional validation
      if (schema[key].validate) {
        const isValid = schema[key].validate(sanitized[key]);
        if (!isValid) {
          throw new Error(`Invalid ${key}`);
        }
      }
    }
  });
  
  return sanitized;
};
```

### 7. Implement Session Security

Create `backend/src/middleware/session_security.py`:
```python
from flask import session, request, jsonify
from functools import wraps
from datetime import datetime, timedelta
import secrets

class SessionSecurity:
    def __init__(self, app):
        self.app = app
        self.configure_session()
        
    def configure_session(self):
        self.app.config.update(
            SESSION_COOKIE_SECURE=True,
            SESSION_COOKIE_HTTPONLY=True,
            SESSION_COOKIE_SAMESITE='Strict',
            PERMANENT_SESSION_LIFETIME=timedelta(minutes=30),
            SESSION_COOKIE_NAME='__Host-flourish-session'
        )
    
    def regenerate_session(self):
        """Regenerate session ID to prevent fixation"""
        old_session = dict(session)
        session.clear()
        session.update(old_session)
        session['_id'] = secrets.token_urlsafe(32)
        session['_created'] = datetime.utcnow().isoformat()
    
    def validate_session(self, f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            # Check session validity
            if '_created' in session:
                created = datetime.fromisoformat(session['_created'])
                if datetime.utcnow() - created > timedelta(minutes=30):
                    session.clear()
                    return jsonify({'error': 'Session expired'}), 401
            
            # Check for session fixation
            if request.headers.get('X-Session-Token') != session.get('_csrf_token'):
                session.clear()
                return jsonify({'error': 'Invalid session'}), 401
            
            # Rotate session periodically
            if '_last_rotation' in session:
                last_rotation = datetime.fromisoformat(session['_last_rotation'])
                if datetime.utcnow() - last_rotation > timedelta(minutes=15):
                    self.regenerate_session()
                    session['_last_rotation'] = datetime.utcnow().isoformat()
            
            return f(*args, **kwargs)
        
        return decorated_function
```

### 8. Create Security Monitoring Script

Create `scripts/security-monitor.sh`:
```bash
#!/bin/bash

# Security Monitoring Script
# Run this continuously to monitor for security issues

# Check for exposed secrets
echo "Checking for exposed secrets..."
git secrets --scan

# Check for vulnerable dependencies
echo "Checking dependencies..."
npm audit --production
cd backend && pip-audit
cd ../mobile && npm audit

# Check for security headers
echo "Testing security headers..."
curl -I https://flourish-app.com | grep -E "Strict-Transport-Security|X-Frame-Options|X-Content-Type-Options"

# Monitor failed login attempts
echo "Checking failed login attempts..."
docker logs backend 2>&1 | grep -E "Failed login|Authentication failed" | tail -20

# Check SSL certificate
echo "Checking SSL certificate..."
openssl s_client -connect flourish-app.com:443 -servername flourish-app.com < /dev/null 2>/dev/null | openssl x509 -noout -dates

# Alert on issues
if [ $? -ne 0 ]; then
    echo "SECURITY ALERT: Issues detected!"
    # Send alert to security team
fi
```

## 📋 Implementation Checklist

### Week 1: Critical Fixes
- [ ] Remove all hardcoded API keys from frontend
- [ ] Disable cleartext traffic in Android
- [ ] Implement nginx security configuration
- [ ] Update Firestore security rules
- [ ] Set up Docker secrets
- [ ] Add input sanitization
- [ ] Implement session security
- [ ] Deploy security monitoring

### Week 2: High Priority
- [ ] Implement rate limiting on all endpoints
- [ ] Add certificate pinning for mobile apps
- [ ] Set up WAF rules
- [ ] Implement key rotation
- [ ] Add comprehensive logging
- [ ] Set up intrusion detection

### Week 3: Medium Priority
- [ ] Implement 2FA for all users
- [ ] Add data encryption at rest
- [ ] Set up backup encryption
- [ ] Implement GDPR compliance features
- [ ] Add security testing to CI/CD
- [ ] Conduct penetration testing

### Week 4: Final Preparations
- [ ] Security audit by external firm
- [ ] Load testing with security scenarios
- [ ] Incident response drill
- [ ] Security documentation
- [ ] Team security training
- [ ] Launch readiness review

## 🚀 Deployment Commands

```bash
# Deploy secure configuration
./scripts/deploy-secure.sh

# Run security tests
npm run security:test

# Monitor security
./scripts/security-monitor.sh

# Generate security report
./scripts/security-report.sh
```

Remember: **Never compromise on security. It's better to delay launch than to launch insecure.**