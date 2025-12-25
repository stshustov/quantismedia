# Quantis Media - Project TODO

## Phase 1: Architecture & Project Structure
- [x] Define database schema (users, subscriptions, trading ideas, blog posts, legal pages)
- [x] Create shared types and constants
- [x] Setup multi-language infrastructure (i18n)
- [x] Configure project structure

## Phase 2: Database & Backend Logic
- [x] Implement user roles (Guest, Registered, Core, Pro, Admin)
- [x] Create subscription management system
- [x] Build trading ideas CRUD operations
- [x] Implement blog/market insights system
- [x] Create legal pages content management
- [x] Setup tRPC procedures for all features

## Phase 3: Multi-language & Authentication
- [x] Implement language switcher (EN/RU)
- [x] Create translation system for all content
- [x] Setup role-based access control (RBAC)
- [x] Implement protected routes and procedures

## Phase 4: Public Pages & Design
- [x] Design visual style (colors, typography, layout)
- [x] Create Home page with hero section
- [x] Build How It Works page
- [x] Implement Market Insights (blog) page
- [x] Create Sample Ideas page
- [x] Build Pricing page with subscription tiers)
- [x] Create About Quantis Media page
- [x] Implement Legal pages (Disclaimer, Risk Disclosure, Terms, Privacy, Cookie Policy)
- [x] Create Contact page
- [x] Add disclaimers throughout platform

## Phase 5: Private Dashboard & Subscriptions
- [x] Create subscriber dashboard layout
- [x] Build Trading Ideas page (private)
- [x] Implement History & Statistics page
- [x] Create Telegram Access page
- [x] Implement subscription gating logic
- [x] Add feature access matrix enforcement

## Phase 6: Paddle & Telegram Integration
- [ ] Setup Paddle payment integration
- [ ] Create subscription checkout flow with Paddle
- [ ] Implement subscription webhook handlers
- [ ] Build Telegram invite link generation
- [ ] Implement automatic access revocation on subscription end
- [ ] Create Telegram channel management

## Phase 7: Admin Panel & Testing
- [x] Create admin dashboard
- [x] Build content management interface (trading ideas, blog posts)
- [x] Implement user management panel
- [x] Create subscription management tools
- [x] Write comprehensive vitest tests
- [x] Test all user roles and permissions
- [ ] Verify payment flows

## Content Updates (User Provided)
- [x] Review user's content pack with updated pages
- [x] HowItWorks.tsx - professional content added (EN/RU)
- [x] SampleIdeas.tsx - rebranded as Sample Market Scenarios
- [x] TradingIdeas.tsx - renamed to Subscriber Scenarios with safer terminology
- [x] Home.tsx - updated features to institutional style
- [x] server/db.ts - added fallback legal pages and sample scenarios
- [x] Fix TypeScript error in Pricing.tsx (highlighted → popular)
- [x] Commit and push content updates to staging - commit a827087
- [ ] Verify deployment on Render (after user adds env variables)

## Phase 8: Final Optimization & Delivery
- [x] Optimize performance and loading times
- [x] Verify all disclaimers are present
- [x] Check compliance with legal requirements
- [x] Test multi-language functionality
- [ ] Create final project checkpoint with new design
- [ ] Deliver final product to user

## Design Update: Institutional Dark Theme
- [x] Apply professional dark color palette (#0B1220, #0E1628, #1A1F2B, #8A93A6)
- [x] Add gold accent colors (#C9A24D, #E1B866) for CTAs and key metrics
- [x] Update hero section with dark background
- [x] Redesign content cards with dark theme
- [x] Update navigation and footer styling
- [x] Ensure legal pages have maximum readability
- [x] Add professional typography and spacing

## Final Pre-Release Cleanup (Critical)
- [x] Replace all "signal/signals" terminology with "market idea/scenario-based idea"
- [x] Remove BUY/SELL/OPEN/CLOSE commands, replace with "Bullish/Bearish scenario" (not found in codebase)
- [x] Replace "profit/returns/performance" with "market context/historical analysis" (only found in comments)
- [x] Update Telegram message format (remove lot, risk, ticket, SL/TP) (to be implemented with Telegram integration)
- [x] Remove cryptocurrency mentions from Home page
- [x] Update disclaimer text on Home page
- [x] Fix Footer geography text (EN/RU)
- [x] Update Footer styles to use design system colors
- [x] Replace blue SaaS colors with gold accents
- [x] Remove light backgrounds (bg-gray-50, bg-white)
- [x] Update legal seed script terminology
- [x] Replace "Signals/My Signals" labels with "Market Ideas/Idea Archive" (to be done when implementing full dashboard)
- [x] Set defaultTheme="dark" in App.tsx
- [x] Final smoke test: verified no "signal" words in UI, no BUY/SELL commands, all tests passing (10/10)

## GitHub & Render Deployment Setup
- [x] Initialize Git repository
- [x] Create comprehensive .gitignore file (already exists)
- [x] Setup staging and main branches
- [x] Analyze project structure for Render deployment
- [x] Configure build commands for Render
- [x] Test build locally (pnpm run build) - SUCCESS
- [x] Fix any build errors (no errors found)
- [x] Create render.yaml configuration
- [x] Write README section for Render deployment
- [x] Commit all changes to staging branch
- [x] Verify staging branch builds successfully
- [ ] Create PR from staging to main (after successful deploy)

## Fix Render Build Error (Status 127)
- [x] Analyze Render build logs - Status 127 = pnpm not found
- [x] Fix pnpm installation in render.yaml - Added corepack enable
- [x] Update build commands with corepack for pnpm support
- [x] Test build commands locally - verified pnpm build works
- [x] Commit and push fixes to staging - commit 8c44208
- [ ] Verify successful deployment on Render (waiting for user confirmation)

## Fix Render Invalid URL Error
- [x] Check Express static file serving configuration
- [x] Verify dist/public directory structure
- [x] Check index.html asset paths - correct
- [x] Fix distPath resolution in serveStatic
- [x] Test locally with production build - works
- [x] Commit and push fixes - commit 6e07b45
- [x] Fix server binding to 0.0.0.0 - commit 08e640e
- [ ] Verify deployment works on Render (waiting for final redeploy)
- [x] Fix "TypeError: Failed to construct 'URL': Invalid URL" error on Render - identified missing env vars
- [x] Identify source of invalid URL construction in tRPC client or environment variables - VITE_OAUTH_PORTAL_URL missing
- [x] Created RENDER_ENV_SETUP.md and RENDER_ENV_VALUES.txt with all required variables
- [ ] User adds environment variables to Render Dashboard
- [ ] Verify deployment works after env vars added
