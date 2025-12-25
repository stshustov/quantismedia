# Render Environment Variables Setup

## ⚠️ CRITICAL: Required Environment Variables

The application **will not work** without these environment variables set in Render Dashboard.

## Error Without Variables

If variables are missing, you'll see:
```
TypeError: Failed to construct 'URL': Invalid URL
```

This happens because `VITE_OAUTH_PORTAL_URL` and other variables are `undefined`.

## How to Add Environment Variables in Render

1. Go to your Render Dashboard: https://dashboard.render.com/
2. Select your Web Service: `quantismedia-preview`
3. Click **"Environment"** tab in the left sidebar
4. Click **"Add Environment Variable"** button
5. Add each variable from the list below

## Required Variables List

### 🔐 Authentication & OAuth (CRITICAL)

```bash
# Manus OAuth Portal URL (frontend)
VITE_OAUTH_PORTAL_URL=https://api.manus.im

# Manus OAuth Server URL (backend)
OAUTH_SERVER_URL=https://api.manus.im

# Your Manus App ID
VITE_APP_ID=<your-app-id-from-manus>

# JWT Secret for session cookies (generate random string)
JWT_SECRET=<generate-random-32-char-string>
```

### 🗄️ Database

```bash
# MySQL/TiDB connection string
DATABASE_URL=mysql://user:password@host:port/database
```

### 👤 Owner Information

```bash
# Your Manus OpenID
OWNER_OPEN_ID=<your-openid>

# Your name
OWNER_NAME=<your-name>
```

### 🎨 App Branding

```bash
# Application title
VITE_APP_TITLE=Quantis Media

# Application logo URL (optional)
VITE_APP_LOGO=
```

### 🔧 Forge API (Manus Built-in Services)

```bash
# Backend Forge API
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=<your-backend-forge-key>

# Frontend Forge API
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=<your-frontend-forge-key>
```

### 🚀 Node Environment

```bash
NODE_ENV=production
```

## Where to Get These Values?

### From Manus Platform:
- `VITE_APP_ID` - From your Manus project settings
- `OWNER_OPEN_ID` - Your Manus user ID
- `OWNER_NAME` - Your Manus username
- `BUILT_IN_FORGE_API_KEY` - From Manus project API keys
- `VITE_FRONTEND_FORGE_API_KEY` - From Manus project API keys

### OAuth URLs (Standard):
- `VITE_OAUTH_PORTAL_URL` = `https://api.manus.im`
- `OAUTH_SERVER_URL` = `https://api.manus.im`
- `BUILT_IN_FORGE_API_URL` = `https://api.manus.im`
- `VITE_FRONTEND_FORGE_API_URL` = `https://api.manus.im`

### Generate Yourself:
- `JWT_SECRET` - Use: `openssl rand -base64 32` or any random 32+ character string
- `DATABASE_URL` - Your MySQL/TiDB connection string

## After Adding Variables

1. **Save** all environment variables
2. Render will **automatically redeploy** your service
3. Wait 2-3 minutes for deployment to complete
4. Check deployment logs for "Your service is live 🎉"
5. Open your site: https://quantismedia-preview.onrender.com

## Verification

After deployment, the site should:
- ✅ Load without "Invalid URL" error
- ✅ Show the Quantis Media homepage
- ✅ Allow navigation between pages
- ✅ Show login button (OAuth integration working)

## Troubleshooting

**Still seeing "Invalid URL" error?**
- Double-check all `VITE_*` variables are set (they're used by frontend)
- Verify no typos in variable names (case-sensitive!)
- Check Render logs for any other missing variables

**"Cannot connect to database" error?**
- Verify `DATABASE_URL` format is correct
- Ensure database allows connections from Render's IP
- For TiDB Cloud: enable public endpoint

**OAuth not working?**
- Verify `VITE_OAUTH_PORTAL_URL` and `OAUTH_SERVER_URL` are correct
- Check `VITE_APP_ID` matches your Manus app
- Ensure `JWT_SECRET` is set (required for session cookies)

## Next Steps

After successful deployment:
1. Test all pages on the live site
2. Verify login/logout functionality
3. Test role-based access (Guest, Registered, Core, Pro, Admin)
4. Create PR from `staging` → `main` branch
5. Setup Paddle payment integration
6. Configure Telegram bot integration
