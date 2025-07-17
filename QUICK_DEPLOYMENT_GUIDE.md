# 🚀 Quick Deployment Guide - Flourish App

## 📋 Pre-Deployment Checklist

### 1. **Environment Variables** (.env files)
Create these files in the respective directories:

#### `backend/.env`
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/flourish
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRATION=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your-project.iam.gserviceaccount.com

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-...
```

#### `frontend/.env`
```bash
VITE_API_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

#### `mobile/.env`
```bash
API_URL=http://localhost:8000
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef
```

### 2. **Firebase Setup**
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication, Firestore, and Storage
3. Download service account key for backend
4. Copy web app config for frontend
5. Replace placeholder files:
   - `mobile/ios/GoogleService-Info.plist`
   - `mobile/android/app/google-services.json`

### 3. **SSL Certificates**
For production, obtain SSL certificates:
```bash
# Using Let's Encrypt
sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
```

---

## 🏃 Quick Start Commands

### Local Development
```bash
# Install all dependencies
./scripts/setup.sh

# Start all services
docker-compose up -d

# Start frontend
cd frontend && npm run dev

# Start backend
cd backend && python -m uvicorn main:app --reload

# Start mobile
cd mobile && npm run ios  # or npm run android
```

### Production Deployment

#### Option 1: Docker Deployment
```bash
# Build and deploy all services
./scripts/deploy.sh production

# Or manually:
docker-compose -f docker-compose.yml up -d --build
```

#### Option 2: Manual Deployment

**Backend (Python/FastAPI)**
```bash
cd backend
pip install -r requirements.txt
gunicorn main:app -c gunicorn.conf.py
```

**Frontend (React/Vite)**
```bash
cd frontend
npm install
npm run build
# Serve dist/ folder with nginx or upload to CDN
```

**Mobile (React Native)**
```bash
cd mobile

# iOS
npx react-native run-ios --configuration Release
# or
cd ios && fastlane deploy

# Android
cd android && ./gradlew assembleRelease
# or
cd android && fastlane deploy
```

---

## 🌐 Platform-Specific Deployment

### Web (Firebase Hosting)
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

### iOS (App Store)
1. Update `mobile/ios/exportOptions.plist` with your team ID
2. Run: `cd mobile/ios && fastlane deploy`
3. Or manually archive in Xcode

### Android (Google Play)
1. Generate signed APK: `cd mobile/android && ./gradlew bundleRelease`
2. Upload to Google Play Console
3. Or use: `cd mobile/android && fastlane deploy`

---

## 🔧 Configuration Files to Update

1. **nginx/nginx.conf** - Update domain names
2. **docker-compose.yml** - Update environment variables
3. **mobile/app.json** - Update bundle identifiers
4. **frontend/public/manifest.json** - Update app name and icons

---

## 📱 Asset Conversion

Convert SVG assets to PNG:
```bash
cd scripts
node generate-svg-assets.js

# Then convert to PNG using:
# macOS: Use Preview or Sketch
# Windows: Use Inkscape or GIMP
# Linux: inkscape icon.svg --export-png=icon.png --export-width=1024
```

---

## 🚨 Common Issues & Solutions

### Issue: Mobile build fails
```bash
# iOS
cd mobile/ios && pod install
rm -rf ~/Library/Developer/Xcode/DerivedData

# Android
cd mobile/android && ./gradlew clean
```

### Issue: Backend won't start
```bash
# Check Python version (3.8+ required)
python --version

# Reinstall dependencies
pip install -r requirements.txt --upgrade
```

### Issue: Frontend build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 Final Steps Before Launch

1. **Test Everything**
   - [ ] User registration/login flow
   - [ ] Onboarding completion
   - [ ] Payment processing
   - [ ] Push notifications
   - [ ] Real-time messaging

2. **Security Audit**
   - [ ] API rate limiting enabled
   - [ ] CORS properly configured
   - [ ] Secrets not in code
   - [ ] SSL certificates valid

3. **Performance Check**
   - [ ] Images optimized
   - [ ] Code minified
   - [ ] CDN configured
   - [ ] Database indexed

4. **Monitoring Setup**
   - [ ] Error tracking (Sentry)
   - [ ] Analytics (Google Analytics)
   - [ ] Uptime monitoring
   - [ ] Log aggregation

---

## 📞 Emergency Contacts

- **Technical Issues**: Check logs in `/var/log/flourish/`
- **Database Issues**: Backup located at `/backups/postgres/`
- **SSL Issues**: Renew with `certbot renew`

---

**Remember**: Always test in staging before deploying to production!

Good luck with your launch! 🌸✨