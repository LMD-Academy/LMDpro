# LMDpro Vercel Deployment Setup Guide

## ✅ Pre-Deployment Checklist

### Step 1: Prepare Your Code
- [ ] All files are committed to GitHub (`master` branch)
- [ ] No uncommitted changes
- [ ] `.env.local` is in `.gitignore` (keep secrets out of git)
- [ ] `.env.production` is created for reference

### Step 2: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Grant Vercel access to your GitHub repositories

### Step 3: Deploy to Vercel

#### Method A: Using Vercel Dashboard (Easiest)
1. Log in to your Vercel dashboard
2. Click **"Add New..."** → **"Project"**
3. Search for **"LMDpro"** repository
4. Click **"Import"**
5. Vercel will auto-detect it's a Next.js project
6. Click **"Deploy"** and wait for build to complete

#### Method B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
vercel --prod
```

### Step 4: Configure Environment Variables in Vercel

Once deployment is triggered, add these environment variables in Vercel dashboard:

**Settings → Environment Variables**

```
GOOGLE_API_KEY = AIzaSyBJl6yu60u7fW9WuhnmY9vaMq5e9zCo7XI
GEMINI_API_KEY = AIzaSyBJl6yu60u7fW9WuhnmY9vaMq5e9zCo7XI
GOOGLE_CLIENT_ID = 1056744449246-aj5vl76h8ojncglo85pe5jpu31788etq.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = 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
NEXTAUTH_URL = https://your-production-domain.com (UPDATE THIS)
NEXTAUTH_SECRET = lmdpro-nextauth-secret-2024-production-ready-key-12345
NEXT_PUBLIC_SITE_URL = https://your-production-domain.com (UPDATE THIS)
NODE_ENV = production
NEXT_TELEMETRY_DISABLED = 1
```

### Step 5: Configure Google OAuth Redirects

⚠️ **IMPORTANT: Update Google OAuth Settings**

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to **APIs & Services → Credentials**
3. Find your OAuth 2.0 Client ID
4. Click **"Edit"**
5. Add your Vercel deployment URL to "Authorized redirect URIs":
   - `https://your-vercel-url.vercel.app/api/auth/callback/google`
   - `https://www.lmdpro.com/api/auth/callback/google` (after custom domain setup)
6. Save changes and wait 5 minutes for propagation

### Step 6: Set Custom Domain (Optional but Recommended)

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain: `www.lmdpro.com`
3. Choose DNS configuration option
4. Update your DNS records at ONE.com:

```
Type    Name    Value                           TTL
A       @       76.76.19.61                    3600
A       www     76.76.19.61                    3600
CNAME   www     cname.vercel-dns.com          3600
```

**Note:** Vercel will provide exact DNS records - use the values they show you!

5. Wait for DNS propagation (usually 24 hours, but can be instant)

## 🚀 Deployment Verification

After deployment, verify everything works:

### Local Testing (Before Deploying)
```bash
# Build locally
npm run build

# Start production build
npm run start

# Test at http://localhost:3000
```

### Post-Deployment Checks
- [ ] Site loads at `https://your-vercel-url.vercel.app`
- [ ] Login with Google works
- [ ] AI assistant functionality works
- [ ] Mobile responsiveness is good
- [ ] SSL certificate is active (green lock)
- [ ] No console errors in browser DevTools

### Check Build Logs
If deployment fails:
1. Go to Vercel dashboard → **Deployments**
2. Click the failed deployment
3. Check the build logs for errors
4. Common issues are usually environment variable related

## 🔧 Troubleshooting

### Issue: Build fails with "API Key not found"
**Solution:** Ensure all environment variables are set in Vercel dashboard

### Issue: Google OAuth redirect mismatch
**Solution:** 
1. Check NEXTAUTH_URL matches your Vercel URL exactly
2. Update Google OAuth authorized redirect URIs
3. Wait 5 minutes for Google to process changes

### Issue: Site returns 500 error
**Solution:**
1. Check Vercel deployment logs for specific error
2. Verify all environment variables are correct
3. Check that `NEXTAUTH_SECRET` is set

### Issue: Images not loading
**Solution:** Already configured in `next.config.ts` for:
- Unsplash
- Google user images
- Your domain

## 📊 Monitoring After Deployment

1. **Set up Vercel Analytics:**
   - Dashboard → **Settings → Analytics**
   - Enable Web Analytics

2. **Monitor Build Performance:**
   - Dashboard → **Settings → Build & Development Settings**
   - Check build times

3. **Error Tracking:**
   - Consider integrating Sentry for error monitoring

## 🎯 Next Steps

1. **Monitor deployment** for 24 hours
2. **Test all features** thoroughly
3. **Set up custom domain** (if using one)
4. **Configure analytics** tracking
5. **Monitor performance** metrics

## 📚 Additional Resources

- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

## ⚠️ Important Notes

1. **Never commit `.env.local` to git** - it's already in `.gitignore`
2. **Use Vercel's environment variable management** - not `.env` files in production
3. **Keep secrets secure** - rotate keys regularly
4. **Test locally first** - run `npm run build && npm run start` before deploying
5. **Monitor deployment logs** - check for warnings and errors

---

**Your app is ready for Vercel! 🚀**

Follow the steps above and you'll have a production-ready deployment of LMDpro.
