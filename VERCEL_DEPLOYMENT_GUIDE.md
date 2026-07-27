# 🚀 LMDpro Vercel Deployment Guide

## ⚡ Quick Start - Deploy in 5 Minutes

### Prerequisites
- Node.js 18+ and npm installed
- GitHub account with code pushed
- Vercel account (create free at [vercel.com](https://vercel.com))

---

## 📋 Deployment Steps

### **Step 1: Create Vercel Account & Connect GitHub**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click **"Import Project"**
4. Search for **"LMDpro"** repository
5. Click **"Import"**

### **Step 2: Configure Project Settings**

Vercel will auto-detect Next.js configuration. Verify:
- ✅ **Framework Preset**: Next.js
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`
- ✅ **Install Command**: `npm install`

Click **"Deploy"** and wait ~3-5 minutes for build to complete.

### **Step 3: Add Environment Variables**

Once deployment starts:

1. Go to **Settings → Environment Variables**
2. Add these variables:

```
GOOGLE_API_KEY = your_google_ai_api_key
GEMINI_API_KEY = your_google_ai_api_key
GOOGLE_CLIENT_ID = your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = your_google_client_secret
NEXTAUTH_URL = https://your-vercel-url.vercel.app (initially)
NEXTAUTH_SECRET = your_nextauth_secret_key_min_32_chars
NEXT_PUBLIC_SITE_URL = https://your-vercel-url.vercel.app
NODE_ENV = production
NEXT_TELEMETRY_DISABLED = 1
```

3. Click **"Save"** for each variable
4. Go to **Deployments** and click **"Redeploy"**

### **Step 4: Update Google OAuth Settings**

⚠️ **CRITICAL**: Update Google Console with new redirect URI

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to **APIs & Services → Credentials**
3. Find your OAuth 2.0 Client ID
4. Click **"Edit"**
5. Add authorized redirect URI:
   ```
   https://your-vercel-url.vercel.app/api/auth/callback/google
   ```
6. Click **"Save"**
7. ⏳ Wait 5 minutes for changes to propagate

### **Step 5: Test Deployment**

1. Visit `https://your-vercel-url.vercel.app`
2. Test Google login
3. Test AI assistant functionality
4. Check console for errors (DevTools F12)

---

## 🌐 Set Up Custom Domain (Optional)

### Option A: Using Vercel DNS (Easiest)

1. In Vercel Dashboard → **Settings → Domains**
2. Add domain: `www.lmdpro.com`
3. Choose **"Use Vercel's Nameservers"**
4. Update nameservers at your domain registrar (ONE.com)
5. Wait 24-48 hours for propagation

### Option B: Manual DNS Configuration

1. Add domain in Vercel
2. Choose **"Add DNS Record"**
3. At your domain registrar (ONE.com), add:

```
Type    Name    Value                    TTL
CNAME   www     cname.vercel-dns.com    3600
```

4. Or use A records:
```
Type    Name    Value           TTL
A       @       76.76.19.61    3600
A       www     76.76.19.61    3600
```

**Note**: Check Vercel dashboard for exact DNS values to use.

---

## 🔧 Update Google OAuth for Custom Domain

Once custom domain is live:

1. Go to Google Cloud Console
2. Edit OAuth 2.0 Client ID
3. Update redirect URI:
   ```
   https://www.lmdpro.com/api/auth/callback/google
   ```
4. Save and wait 5 minutes

---

## 📊 Deployment Checklist

- [ ] Project imported to Vercel
- [ ] Build successful (no errors)
- [ ] Environment variables added
- [ ] Google OAuth redirect URIs updated
- [ ] Test URL loads without errors
- [ ] Google login works
- [ ] AI features functional
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (green lock)
- [ ] Analytics setup (optional)

---

## ⚠️ Troubleshooting

### Build Fails
- ❌ **Issue**: `npm ERR! ... ENOENT`
- ✅ **Solution**: Check node_modules, run `npm ci --prefer-offline`

### Environment Variables Not Working
- ❌ **Issue**: `Error: GOOGLE_API_KEY is undefined`
- ✅ **Solution**: Redeploy after adding variables: **Deployments → ... → Redeploy**

### Google Login Fails - Redirect URI Mismatch
- ❌ **Issue**: `redirect_uri_mismatch error`
- ✅ **Solution**: 
  1. Update Google Console with correct URL
  2. Update NEXTAUTH_URL environment variable
  3. Wait 5 minutes for changes to propagate
  4. Clear browser cookies and try again

### API Keys Not Loading
- ❌ **Issue**: `Error: Failed to initialize AI`
- ✅ **Solution**: Verify API keys are correct and active in Google Cloud

### Blank Page / 500 Error
- ❌ **Issue**: White screen or internal server error
- ✅ **Solution**: 
  1. Check Vercel deployment logs
  2. Verify all environment variables are set
  3. Check browser console (F12) for errors

---

## 📈 Monitoring After Deployment

### Enable Vercel Analytics
1. **Settings → Analytics**
2. Enable **Web Analytics**
3. Track performance metrics

### Set Up Error Tracking (Optional)
1. Install Sentry: `npm install @sentry/nextjs`
2. Configure in Vercel dashboard
3. Monitor errors in real-time

### Configure SSL/TLS
- ✅ Automatic (Vercel handles this)
- HTTPS enabled by default
- Auto-renewal of certificates

---

## 🚀 Deployment Automation

### Using Deployment Script

```bash
# Make script executable
chmod +x scripts/deploy-vercel.sh

# Run deployment
./scripts/deploy-vercel.sh
```

### Using npm Script

```bash
# Add to package.json scripts:
"deploy:vercel": "vercel --prod"

# Run:
npm run deploy:vercel
```

---

## 🔄 Continuous Deployment

Vercel automatically deploys on:
- ✅ Push to `master` branch → Production
- ✅ Push to other branches → Preview deployments
- ✅ Pull requests → Preview URLs

No additional setup needed!

---

## 💡 Performance Tips

1. **Enable Caching**
   - Settings → Functions → Max Duration (30s)
   - Enable ISR (Incremental Static Regeneration)

2. **Optimize Images**
   - Already configured in `next.config.ts`
   - Uses WebP and AVIF formats

3. **Monitor Bundle Size**
   - Run: `npm run build:analyze`
   - Check "Build Output" in Vercel dashboard

---

## 🔐 Security Best Practices

✅ **Enabled**:
- HTTPS/SSL certificates
- Security headers (X-Frame-Options, etc.)
- CORS protection
- Rate limiting on API routes
- Secure OAuth token handling

📝 **Recommendations**:
1. Rotate `NEXTAUTH_SECRET` monthly
2. Monitor API usage in Google Cloud Console
3. Enable 2FA on Vercel and Google accounts
4. Review deployment logs regularly
5. Set up Sentry for error tracking

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **NextAuth.js**: https://next-auth.js.org/
- **Google Cloud**: https://cloud.google.com/docs
- **GitHub Issues**: https://github.com/LMD-Academy/LMDpro/issues

---

## ✅ Final Verification

After deployment, verify:

```bash
# Test deployed URL
curl -I https://your-vercel-url.vercel.app

# Check response headers
# Should see: X-Frame-Options, X-Content-Type-Options, etc.

# Test API health
curl https://your-vercel-url.vercel.app/api/health

# Should return: {"status": "healthy"}
```

---

**🎉 Congratulations! Your LMDpro app is now live on Vercel!**

For issues or questions, check deployment logs in Vercel dashboard or open an issue on GitHub.
