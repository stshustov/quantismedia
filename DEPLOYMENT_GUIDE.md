# Deployment Guide for Quantis Media

## Current Status ✅

- ✅ Git repository initialized
- ✅ Staging branch created with deployment configuration
- ✅ Build tested locally and passes successfully
- ✅ render.yaml configuration ready
- ✅ README with deployment instructions created

## Next Steps

### 1. Push to GitHub

```bash
# If you haven't connected to GitHub yet, add your remote:
git remote add origin https://github.com/YOUR_USERNAME/quantis-media.git

# Push staging branch to GitHub
git push -u origin staging

# Push main branch to GitHub (if not already pushed)
git checkout main
git push -u origin main
git checkout staging
```

### 2. Connect to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Click "Connect account" to link your GitHub
4. Select `quantis-media` repository
5. Configure as follows:
   - **Name**: `quantis-media-staging`
   - **Branch**: `staging`
   - **Root Directory**: `.` (leave empty or put a dot)
   - **Build Command**: `pnpm install && pnpm run build`
   - **Start Command**: `pnpm start`

### 3. Add Environment Variables in Render

Go to Environment tab and add these variables:

```
NODE_ENV=production
DATABASE_URL=<your-mysql-connection-string>
JWT_SECRET=<generate-random-32-char-string>
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=<your-manus-portal-url>
OWNER_OPEN_ID=<your-manus-openid>
OWNER_NAME=<your-name>
VITE_APP_ID=<your-manus-app-id>
VITE_APP_TITLE=Quantis Media
BUILT_IN_FORGE_API_URL=<forge-api-url>
BUILT_IN_FORGE_API_KEY=<forge-api-key>
VITE_FRONTEND_FORGE_API_KEY=<frontend-key>
VITE_FRONTEND_FORGE_API_URL=<frontend-url>
VITE_ANALYTICS_ENDPOINT=<analytics-endpoint>
VITE_ANALYTICS_WEBSITE_ID=<analytics-id>
```

### 4. Deploy

- Click "Create Web Service"
- Render will automatically:
  1. Clone your repository
  2. Run `pnpm install && pnpm run build`
  3. Start server with `pnpm start`
  4. Provide a public URL (e.g., `https://quantis-media-staging.onrender.com`)

### 5. Verify Deployment

After deployment completes:
- Visit the provided URL
- Check logs in Render dashboard for any errors
- Test authentication flow
- Verify all pages load correctly

### 6. Create Pull Request (After Successful Deploy)

Once staging is verified on Render:

```bash
# On GitHub web interface:
1. Go to your repository
2. Click "Pull requests" → "New pull request"
3. Set base: main ← compare: staging
4. Add title: "Deploy: Render configuration and production setup"
5. Add description with deployment verification checklist
6. Create pull request
7. Review changes
8. Merge to main
```

### 7. Setup Production Environment (Optional)

For production deployment:

1. Create another Render web service
2. Name it `quantis-media-production`
3. Point to `main` branch
4. Use same configuration as staging
5. Add production environment variables

## Troubleshooting

### Build Fails on Render

**Error: "Cannot find module"**
- Ensure all dependencies are in `dependencies` (not `devDependencies`)
- Check that `pnpm-lock.yaml` is committed

**Error: "ECONNREFUSED" or database connection**
- Verify `DATABASE_URL` is correct
- Check database allows connections from Render IPs
- For TiDB: enable public endpoint

**Error: "Out of memory"**
- Upgrade Render plan (Free tier has memory limits)
- Optimize build by reducing bundle size

### Runtime Errors

**404 on all routes**
- Check `dist/public` directory exists
- Verify Express serves static files from correct path
- Check `vite.config.ts` build output directory

**OAuth redirect fails**
- Update Manus OAuth callback URL to include Render domain
- Verify `VITE_OAUTH_PORTAL_URL` is set correctly

## Automatic Deployments

Once connected:
- Every push to `staging` → auto-deploys to staging environment
- Every push to `main` → auto-deploys to production (if configured)

## Monitoring

- **Logs**: Render Dashboard → Your Service → Logs
- **Metrics**: Render Dashboard → Your Service → Metrics
- **Health**: Check `/api/health` endpoint (if implemented)

## Rollback

If deployment fails:
1. Go to Render Dashboard
2. Click on your service
3. Go to "Events" tab
4. Click "Rollback" on previous successful deploy

Or via Git:
```bash
git revert HEAD
git push origin staging
```

---

**Current Commit**: `cc63911 - feat: add Render deployment configuration and README`

**Ready to deploy!** 🚀
