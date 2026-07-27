# LMDpro Pre-Deployment Testing & Verification Guide

## 🧪 Phase 1: Local Testing (Before Any Deployment)

### Prerequisites
```bash
# Check Node.js version (must be 18+)
node --version

# Check npm version (must be 9+)
npm --version
```

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables
```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local with your test credentials
# For testing, you can use placeholder values temporarily
```

### Step 3: Build Test
```bash
# Run production build
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Linting and type checking passed
# ✓ No TypeScript errors
```

**If build fails:**
- Check error messages in console
- Verify all dependencies are installed
- Clear cache: `npm run clean && npm install`

### Step 4: Start Development Server
```bash
# Start local server
npm run dev

# Expected output:
# ▲ Next.js 15.1.5
# - Local: http://localhost:3000
```

---

## 📋 Phase 2: Functional Testing Checklist

### 2.1 **Basic Navigation**
- [ ] Visit `http://localhost:3000`
- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] Footer is visible and clickable
- [ ] Dark/Light theme toggle works
- [ ] Responsive design (test on mobile view in DevTools)

### 2.2 **Authentication**
- [ ] Click "Sign Up" button
- [ ] Registration form appears
- [ ] Click "Log In" link on registration form
- [ ] Login form appears
- [ ] Google OAuth button is visible
- [ ] Can click Google button (will redirect)
- [ ] No console errors on auth pages

### 2.3 **User Experience**
- [ ] All images load correctly
- [ ] Fonts display properly (dark/light theme)
- [ ] Buttons are clickable
- [ ] Forms are responsive
- [ ] Loading states appear
- [ ] Error messages display clearly

### 2.4 **AI Features** (If logged in)
- [ ] AI Assistant loads
- [ ] Can type in chat input
- [ ] Submit button works
- [ ] Responses appear
- [ ] Scrolling works in chat
- [ ] Clear history function works

### 2.5 **Course Features** (If logged in)
- [ ] Course catalog visible
- [ ] Can click course items
- [ ] Course details modal opens
- [ ] Progress bars display
- [ ] Module content loads
- [ ] Navigation between modules works

### 2.6 **Performance**
- [ ] Pages load in < 3 seconds
- [ ] No console errors (F12)
- [ ] No memory leaks
- [ ] Images load quickly
- [ ] Smooth animations

---

## 🔍 Phase 3: Browser Console Check

Open DevTools (F12) and verify:

### **No Red Errors** ✅
```
❌ Expected errors should show:
- None in console (red errors)

⚠️ Warnings are OK (yellow)
```

### **Check Network Tab**
- [ ] All resources load (200 status)
- [ ] No 404 errors
- [ ] API calls complete successfully
- [ ] Images load from CDN

### **Check Performance Tab**
- [ ] First Contentful Paint (FCP) < 2s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1

---

## 🧪 Phase 4: Advanced Testing

### 4.1 **Test Different Screen Sizes**
```
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)
- Ultra-wide (2560x1440)
```

Using Chrome DevTools:
1. Press F12
2. Click device toggle (top left)
3. Test different devices

### 4.2 **Test Different Browsers**
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 4.3 **Test Different Themes**
- [ ] Light theme (verify colors)
- [ ] Dark theme (verify colors)
- [ ] System preference toggle

### 4.4 **Test Accessibility**
```bash
# Check for accessibility issues
# Using browser DevTools → Lighthouse

1. Press F12
2. Click "Lighthouse" tab
3. Click "Analyze page load"
4. Review accessibility score (aim for 90+)
```

---

## 🏗️ Phase 5: Production Build Test

```bash
# Clean and rebuild
npm run clean
npm run build

# Test production build locally
npm run start

# Visit http://localhost:3000
# Verify all features work
```

**Expected build output:**
```
✓ compiled successfully
✓ built successfully
✓ server started on port 3000
```

---

## 📊 Phase 6: Health Check

```bash
# Check application health
npm run health

# Or manually:
curl http://localhost:3000/api/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2026-07-27T...",
  "environment": "development"
}
```

---

## ✅ Pre-Deployment Verification

Before proceeding to deployment, confirm:

### Code Quality
- [ ] No TypeScript errors: `npm run typecheck`
- [ ] No linting errors: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in browser
- [ ] All pages load correctly

### Functionality
- [ ] Navigation works
- [ ] Authentication flow tested
- [ ] All pages render
- [ ] Forms submit correctly
- [ ] API calls work (if applicable)
- [ ] AI features respond

### Performance
- [ ] Build time < 5 minutes
- [ ] Page load time < 3 seconds
- [ ] No memory leaks
- [ ] Lighthouse score > 80

### Security
- [ ] No API keys in code
- [ ] `.env.local` is in `.gitignore`
- [ ] Security headers present
- [ ] CORS configured correctly

---

## 🐛 Troubleshooting Common Issues

### Issue: Build Fails
```bash
# Solution:
npm run clean
npm install
npm run build
```

### Issue: Port 3000 Already in Use
```bash
# Solution (kill process on port 3000):
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: `.env.local` Not Loading
```bash
# Solution:
# 1. Restart dev server
# 2. Check filename is exactly ".env.local"
# 3. No spaces in variable names
npm run dev
```

### Issue: Module Not Found Errors
```bash
# Solution:
npm install
npm run build
```

---

## 🚀 Phase 7: Approval to Deploy

Once all tests pass, mark items below:

- [ ] Local build successful
- [ ] No console errors
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Responsive design verified
- [ ] Performance acceptable
- [ ] Security checks passed
- [ ] TypeScript/Lint clean

**Status**: ✅ **READY FOR DEPLOYMENT**

---

## 📝 Testing Report Template

```
═══════════════════════════════════════════════════════
     LMDpro Pre-Deployment Testing Report
═══════════════════════════════════════════════════════

Date: [DATE]
Tester: [NAME]
Version: [VERSION]

BASIC NAVIGATION: ✅/❌
AUTHENTICATION: ✅/❌
USER EXPERIENCE: ✅/❌
AI FEATURES: ✅/❌
COURSE FEATURES: ✅/❌
PERFORMANCE: ✅/❌
ACCESSIBILITY: ✅/❌
SECURITY: ✅/❌

BUILD TIME: [TIME]s
LIGHTHOUSE SCORE: [SCORE]/100
CONSOLE ERRORS: [COUNT]
API ERRORS: [COUNT]

NOTES:
[Any issues or observations]

FINAL STATUS: ✅ APPROVED / ❌ NEEDS FIXES

═══════════════════════════════════════════════════════
```

---

## Next Steps

Once all tests pass:

1. ✅ Commit changes to GitHub
   ```bash
   git add .
   git commit -m "Pre-deployment testing complete - all systems verified"
   git push origin master
   ```

2. ✅ Proceed to GitHub Pages deployment
   ```bash
   npm run deploy
   ```

3. ✅ Verify deployment
   - Check GitHub Pages URL
   - Verify all features work
   - Check performance

---

**Ready to test? Run:** `npm run dev`
