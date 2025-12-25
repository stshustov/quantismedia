# Quantis Media

Independent Market Intelligence Platform providing algorithmically-assisted market analysis and scenario-based trading ideas for informational and educational purposes.

## 🚀 Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS 4
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL/TiDB (via Drizzle ORM)
- **Auth**: Manus OAuth
- **UI Components**: shadcn/ui + Radix UI
- **Language**: TypeScript

## 📁 Project Structure

```
quantis-media/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable UI components
│   │   ├── contexts/   # React contexts (Language, Theme)
│   │   └── lib/        # tRPC client setup
│   ├── public/         # Static assets
│   └── index.html      # Entry HTML
├── server/             # Backend Express + tRPC
│   ├── _core/          # Framework core (OAuth, context, etc.)
│   ├── routers.ts      # tRPC procedures
│   └── db.ts           # Database query helpers
├── drizzle/            # Database schema & migrations
├── shared/             # Shared types & constants
└── dist/               # Production build output
    ├── public/         # Frontend build (served as static)
    └── index.js        # Backend server bundle
```

## 🛠️ Development

### Prerequisites

- Node.js 22+
- pnpm 10+
- MySQL/TiDB database

### Installation

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Push database schema
pnpm db:push

# Start development server
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server (hot reload)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm check` - TypeScript type checking
- `pnpm db:push` - Generate and apply database migrations

## 🌐 Deploy on Render

### Automatic Deployment Setup

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name**: `quantis-media-staging` (or your preferred name)
   - **Region**: Oregon (or closest to your users)
   - **Branch**: `staging` (for staging environment)
   - **Root Directory**: `.` (project root)
   - **Runtime**: Node
   - **Build Command**: 
     ```bash
     corepack enable
     corepack prepare pnpm@latest --activate
     pnpm install --frozen-lockfile
     pnpm run build
     ```
   - **Start Command**: `pnpm start`
   - **Plan**: Free (or upgrade as needed)

3. **Environment Variables**
   Required environment variables (add in Render dashboard):
   ```
   NODE_ENV=production
   DATABASE_URL=<your-mysql-connection-string>
   JWT_SECRET=<generate-random-secret>
   OAUTH_SERVER_URL=<manus-oauth-url>
   VITE_OAUTH_PORTAL_URL=<manus-portal-url>
   OWNER_OPEN_ID=<your-owner-openid>
   OWNER_NAME=<your-name>
   VITE_APP_ID=<manus-app-id>
   VITE_APP_TITLE=Quantis Media
   BUILT_IN_FORGE_API_URL=<forge-api-url>
   BUILT_IN_FORGE_API_KEY=<forge-api-key>
   VITE_FRONTEND_FORGE_API_KEY=<frontend-forge-key>
   VITE_FRONTEND_FORGE_API_URL=<frontend-forge-url>
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy
   - Each push to `staging` branch triggers automatic deployment

### Build Output

After successful build:
- **Frontend**: `dist/public/` (static files served by Express)
- **Backend**: `dist/index.js` (Node.js server)
- **Assets**: `dist/public/assets/` (JS/CSS bundles)

### Troubleshooting

**Build fails with "Exited with status 1"**
- Check Render logs for specific error
- Verify all environment variables are set
- Ensure `DATABASE_URL` is accessible from Render's network
- Check that all dependencies are in `package.json` (not devDependencies)

**Server starts but shows 404**
- Verify `dist/public` directory exists after build
- Check Express static middleware configuration in `server/_core/index.ts`

**Database connection errors**
- Ensure database allows connections from Render's IP ranges
- Verify `DATABASE_URL` format: `mysql://user:password@host:port/database`
- For TiDB Cloud: enable public endpoint and add Render IPs to allowlist

## 🔄 Git Workflow

### Branch Strategy

- `main` - Production-ready code
- `staging` - Pre-production testing (auto-deploys to Render)

### Development Flow

1. **Make changes** in local environment
2. **Test locally**: `pnpm test && pnpm build`
3. **Commit to staging**:
   ```bash
   git checkout staging
   git add .
   git commit -m "feat: description of changes"
   git push origin staging
   ```
4. **Verify on Render** - Check staging deployment
5. **Create PR** from `staging` → `main` after successful testing
6. **Merge to main** for production release

## 📝 License

MIT

## 🔗 Links

- [Live Demo (Staging)](https://quantis-media-staging.onrender.com)
- [Documentation](./docs)
- [Issue Tracker](https://github.com/your-org/quantis-media/issues)
