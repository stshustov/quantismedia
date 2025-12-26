# Render Environment Variables Setup for Telegram Integration

## Step-by-Step Guide

### 1. Open Render Dashboard
- Go to https://dashboard.render.com
- Find your project: **quantismedia-preview**
- Click on the project name

### 2. Navigate to Environment Variables
- In the left sidebar, click **"Environment"**
- You'll see a list of existing environment variables

### 3. Add Telegram Channel Link
Click **"Add Environment Variable"** and enter:

**Key:**
```
VITE_TELEGRAM_CHANNEL
```

**Value:**
```
https://t.me/quantismedia_ideas
```

Click **"Save"**

### 4. Add Pro Community Link
Click **"Add Environment Variable"** again and enter:

**Key:**
```
VITE_TELEGRAM_PRO_COMMUNITY
```

**Value:**
```
https://t.me/quantismedia_pro
```

Click **"Save"**

### 5. Deploy Changes
- Render will automatically trigger a new deployment
- Wait 2-3 minutes for the deployment to complete
- Your Telegram links will now work on the production site!

---

## Verification

After deployment completes, test the integration:

1. **For Core/Pro users:**
   - Go to `/dashboard`
   - Click on "Telegram" card
   - Should see "Join Telegram Channel" button (not "Coming soon")
   - Click button → opens https://t.me/quantismedia_ideas

2. **For Pro users only:**
   - Go to `/dashboard`
   - Click on "Pro Community" card
   - Should see "Join Pro Community on Telegram" button
   - Click button → opens https://t.me/quantismedia_pro

3. **From Account page:**
   - Go to `/account`
   - Scroll to "Telegram Access" section
   - Should see active links based on your subscription tier

---

## Troubleshooting

**If links still show "Coming soon":**
1. Check that environment variables are saved correctly in Render
2. Verify deployment completed successfully (check Render logs)
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache

**If buttons don't work:**
1. Check that Telegram channel usernames are correct
2. Verify channels are set to "Public" in Telegram settings
3. Test links directly in browser: https://t.me/quantismedia_ideas

---

## Channel Setup Checklist

### Trading Ideas Channel (@quantismedia_ideas)
- [x] Channel created
- [x] Name: "Quantis Media - Trading Ideas"
- [x] Type: Public
- [x] Username: @quantismedia_ideas
- [x] Avatar uploaded (blue/gold QM)
- [ ] Description added
- [ ] First post published

### Pro Community (@quantismedia_pro)
- [x] Group created
- [x] Name: "Quantis Media - Pro Community"
- [x] Type: Public (or Private with invite link)
- [x] Username: @quantismedia_pro
- [x] Avatar uploaded (purple/gold QM)
- [ ] Description added
- [ ] Rules pinned
- [ ] Welcome message set

---

## Next Steps

1. **Add environment variables in Render** (follow steps above)
2. **Wait for deployment** (2-3 minutes)
3. **Test links** on production site
4. **Publish first content** in Trading Ideas channel
5. **Welcome first Pro members** in Pro Community

---

## Support

If you encounter any issues:
1. Check Render deployment logs
2. Verify Telegram channel settings
3. Test links manually in browser
4. Contact support if problems persist
