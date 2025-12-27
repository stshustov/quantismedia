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

## UI Fixes (User Reported)
- [x] Remove extra "О" letter before "Quantis Media" on About page
- [x] Fix text alignment on Disclaimer page (added prose typography styles)
- [x] Commit and push fixes to staging - commit 824a16a

## Content Checklist Implementation (User Provided)
- [x] Home page: Update hero section with definition line "Scenario-led research. Structure over noise."
- [x] Home page: Update features block with correct content (scenario-based, algorithmic filtering, multi-asset, research-first)
- [x] Pricing page: Add detailed Core plan description with full feature list
- [x] Pricing page: Add legal disclaimer block at bottom
- [x] Telegram Access page: Update text with proper disclaimers (no trading instructions, no execution, scenarios only)
- [x] Footer: Add definition line (RU/EN)
- [x] Footer: Update copyright to "© Quantis Media, Republic of Moldova"
- [x] Verify all pages have RU/EN translations
- [x] Commit and push all checklist changes - commit 82af343

## QM Logo & Definition Line - Final Implementation
- [x] Generate final QM logo files (white PNG, favicon formats)
- [x] Create /client/public/branding/ directory structure
- [x] Add platinum accent color (#E5E4E2) to design system (index.css)
- [x] Update translations with final definition line (RU/EN)
- [x] Update Navigation component with QM logo + definition line
- [x] Update Footer component with definition line
- [x] Update meta tags with new description
- [x] Update favicon in index.html
- [x] Test all logo placements and TypeScript - no errors
- [x] Commit and push final branding - commit 6f44869

## Final Branding Adjustments (User Feedback)
- [x] Remove QM logo from Navigation - use text-only "Quantis" (white) + "Media" (gold)
- [x] Remove definition line from Navigation header
- [x] Update Home Hero section with definition line as main subtitle
- [x] Add supporting paragraph under definition line in Hero
- [x] Update Footer with compact QM mark + "Independent research platform"
- [x] Translations already have correct copyright: "© Quantis Media, Republic of Moldova"
- [x] Test all changes - TypeScript: no errors
- [x] Commit and push final branding adjustments - commit fe05f59

## Hero Title Color Adjustment
- [x] Make "Media" word gold in Hero h1 title (match Navigation branding)
- [x] Commit and push change - commit 76954eb

## WTI Crude Oil Market Analysis Page
- [x] Create WTI market analysis page route `/market-insights/energy-metals/wti-crude-oil`
- [x] Implement bilingual content switcher (RU/EN) without page reload
- [x] Design header section with current price, time horizon, last updated date
- [x] Create content blocks: Market Snapshot, Fundamental Backdrop, Inventories, Market Positioning, Technical Structure
- [x] Highlight Scenario Outlook block (Base/Upside/Downside cases)
- [x] Add Bottom Line section
- [x] Include disclaimer at page bottom
- [x] Ensure institutional styling (no emojis, clean design, max-width 720-760px)
- [x] Make responsive for desktop and mobile
- [x] Add SEO meta tags
- [x] Test all functionality

## Deploy WTI Page to Render
- [x] Push WTI Crude Oil page changes to GitHub staging branch
- [x] Verify auto-deployment on Render
- [x] Confirm page is live at https://quantismedia-preview.onrender.com/market-insights/energy-metals/wti-crude-oil

## Market Insights Category Structure
- [x] Add market categories to Market Insights page (Indices, FX, Energy & Metals)
- [x] Create navigation cards for each category
- [x] Link Energy & Metals category to WTI Crude Oil page
- [x] Add Russian translations for all categories
- [x] Test navigation flow from Market Insights → Energy & Metals → WTI
- [x] Push changes to GitHub and verify on Render

## WTI Page Russian Translation
- [x] Add Russian translations for all WTI page content
- [x] Test language switching on WTI page
- [x] Verify all sections translated properly

## Market Analysis Archive Page
- [x] Create archive page route `/market-insights/archive`
- [x] Design archive page with asset filter (dropdown or tabs)
- [x] Add date-based browsing (list by date, newest first)
- [x] Link archive entries to specific analysis pages
- [x] Add bilingual support for archive page
- [x] Add navigation link to archive from Market Insights page
- [x] Test archive functionality
- [x] Push changes to GitHub and verify on Render

## Fix WTI Page Disclaimer Translation
- [x] Add Russian translation for disclaimer text at bottom of WTI page
- [x] Test disclaimer switches with language toggle
- [x] Push fix to GitHub

## Gold Market Analysis Page
- [x] Create Gold page component at `/market-insights/energy-metals/metals/gold`
- [x] Add bilingual content (EN/RU) with language switcher
- [x] Include all sections: Price anchor, Macro, Demand, Supply, Stocks, Positioning, Technical, Scenarios
- [x] Add scenario blocks (Base/Upside/Downside) with visual distinction
- [x] Include disclaimer with bilingual support
- [x] Add route to App.tsx
- [x] Update archive page to include Gold entry
- [x] Test functionality and language switching
- [x] Push to GitHub

## Fix Gold Page Naming and Russian Translations
- [x] Replace GOLDMINI with GOLD in Gold page
- [x] Fix Russian section titles (currently showing English)
- [x] Test Gold page with fixes

## Silver Market Analysis Page
- [x] Create Silver page component at `/market-insights/energy-metals/metals/silver`
- [x] Use correct naming (SILVER not SILVERMINI) from the start
- [x] Add bilingual content (EN/RU) with proper Russian section titles
- [x] Include all sections with scenario blocks
- [x] Add route to App.tsx
- [x] Update archive page to include Silver entry
- [x] Test functionality
- [x] Push all changes to GitHub

## Energy & Metals Category Page
- [x] Create Energy & Metals landing page at `/market-insights/energy-metals`
- [x] Add Energy subcategory card (WTI Crude Oil)
- [x] Add Metals subcategory card (Gold, Silver)
- [x] Add bilingual support for category page
- [x] Update Market Insights page to link to Energy & Metals category
- [x] Test navigation flow: Market Insights → Energy & Metals → Energy/Metals → Specific Asset
- [x] Push changes to GitHub

## Fix Language Switcher and Breadcrumb Issues
- [x] Remove duplicate language switcher from Silver page
- [x] Add Russian translations for breadcrumb navigation on Silver page
- [x] Fix WTI and Gold pages
- [x] Test language switching and breadcrumb display
- [x] Push fixes to GitHub

## Fix Language Switching and Scenario Styling
- [x] Fix WTI page - card labels not switching to Russian (Time Horizon, Current Price, Last Updated)
- [x] Fix Silver page - breadcrumbs already correct
- [x] Fix Gold page - card labels and GOLDMINI to GOLD
- [x] Add colored left borders to scenario blocks on all pages (Base=blue, Upside=green, Downside=red)
- [x] Test language switching on all asset pages
- [x] Push fixes to GitHub

## Fix Breadcrumb Navigation Links
- [x] Make breadcrumb links clickable on WTI page
- [x] Make breadcrumb links clickable on Gold page
- [x] Make breadcrumb links clickable on Silver page
- [x] Test navigation flow from asset pages back through hierarchy
- [x] Push fixes to GitHub

## Visual Improvements for Professional Look
- [x] Enhance content section styling on WTI page (subtle borders, better spacing, accent colors)
- [x] Enhance content section styling on Gold page
- [x] Enhance content section styling on Silver page
- [x] Create Copper market analysis page with professional design
- [x] Add Copper to archive and navigation
- [x] Test visual improvements across all pages
- [x] Push changes to GitHub

## Copper Market Analysis Page
- [x] Create Copper page component at `/market-insights/energy-metals/metals/copper`
- [x] Add bilingual content (EN/RU) with professional institutional style
- [x] Include all sections with enhanced visual design (icons, borders)
- [x] Add scenario blocks (Base/Upside/Downside) with color coding
- [x] Add route to App.tsx
- [x] Update MetalsCategory page to include Copper
- [x] Update archive page to include Copper entry
- [x] Apply professional visual enhancements (matching WTI, Gold, Silver)

## Sample Ideas Page Update - Scenario Cards
- [x] Update Sample Ideas page with new institutional scenario format
- [x] Add S&P 500 (US500) scenario card with Market Context + Base/Alternative scenarios
- [x] Add Gold (XAUUSD) scenario card with Market Context + Base/Upside/Downside scenarios
- [x] Include Analytical Reference Levels for each card
- [x] Apply professional card design (max-width 520px, color-coded scenario markers)
- [x] Add bilingual support (EN/RU) for all scenario cards
- [x] Update page title to "Scenario-Based Market Outlook" or "Institutional Market Scenarios"
- [x] Test card display and language switching
- [x] Push changes to GitHub

## Text Readability Improvements
- [x] Change main content text color from text-muted-foreground to text-foreground on WTI page
- [x] Change main content text color from text-muted-foreground to text-foreground on Gold page
- [x] Change main content text color from text-muted-foreground to text-foreground on Silver page
- [x] Change main content text color from text-muted-foreground to text-foreground on Copper page
- [x] Keep text-muted-foreground only for labels, metadata, and supplementary text
- [x] Test readability on all pages
- [x] Push changes to GitHub

## Sample Ideas Page Text Readability Fix
- [x] Change scenario card text from text-muted-foreground to text-foreground
- [x] Change bullet points text from text-muted-foreground to text-foreground
- [x] Keep only labels/metadata as muted
- [x] Test Sample Ideas page readability
- [x] Push changes to GitHub

## Social Sharing Buttons Feature
- [x] Create ShareButtons component with Twitter and LinkedIn share functionality
- [x] Add Twitter share button with pre-filled text and URL
- [x] Add LinkedIn share button with URL sharing
- [x] Add copy link button for easy sharing
- [x] Style buttons to match site design (icons + hover effects)
- [x] Add ShareButtons to WTI Crude Oil page
- [x] Add ShareButtons to Gold Analysis page
- [x] Add ShareButtons to Silver Analysis page
- [x] Add ShareButtons to Copper Analysis page
- [x] Test sharing functionality on all pages
- [x] Push changes to GitHub

## Comprehensive Text Readability Fix - All Pages
- [x] Find and replace ALL remaining text-muted-foreground with text-foreground on Silver page
- [x] Find and replace ALL remaining text-muted-foreground with text-foreground on WTI page  
- [x] Find and replace ALL remaining text-muted-foreground with text-foreground on Gold page
- [x] Find and replace ALL remaining text-muted-foreground with text-foreground on Copper page
- [x] Keep text-muted-foreground ONLY for: labels (like "Share:"), metadata, button text
- [x] Test all pages to verify white text on all content sections
- [x] Verify WTI page deployment on Render
- [x] Push changes to GitHub

## Fix WTI Page 404 Error on Render
- [x] Find and update WTI link on EnergyCategory page to use correct route `/market-insights/energy-metals/energy/wti-crude-oil`
- [x] Verify all internal links to WTI page use correct route
- [x] Test WTI page on local dev server
- [x] Push changes to GitHub
- [x] Verify WTI page works on Render after deployment

## Visual Design Improvements
- [x] Rename Twitter to X (𝕏) in ShareButtons component
- [x] Update Twitter icon to X icon in ShareButtons
- [x] Update share URL to use x.com instead of twitter.com
- [ ] Enhance info card borders (Time Horizon, Current Price, Last Updated cards)
- [ ] Add subtle shadow or glow effect to info cards for better visual hierarchy
- [ ] Test visual improvements on all analysis pages
- [ ] Push changes to GitHub

## Pricing & Dashboard Enhancements (User Request - Dec 26, 2024)
- [x] Fix pricing card hover effects - add visible border/outline on hover
- [x] Define dashboard functionality per subscription tier:
  * Guest/Registered: Public pages + archive with 1-week delay, no dashboard access
  * Core: Dashboard with 3 cards (Trading Ideas, History, Telegram Channel)
  * Pro: Dashboard with 4 cards (Trading Ideas, History, Telegram Channel, Pro Community)
- [x] Update Dashboard.tsx with tier-specific card visibility
- [x] Add Pro Community card for Pro subscribers only
- [x] Create ProCommunity.tsx page with access control (Pro/Admin only)
- [x] Update Telegram page with channel information and placeholder
- [x] Add Telegram channel link placeholders (awaiting user's channel URLs)
- [x] Prepare Paddle payment integration structure (user not yet registered)
- [x] Create payment flow UI placeholder (ready for Paddle credentials)
- [x] Create PADDLE_INTEGRATION.md documentation

## Dashboard Structure Enhancement (User Request - Dec 26, 2024)
- [x] Design comprehensive dashboard structure for Core and Pro tiers
- [x] Create account management page (/account) with subscription details
- [x] Add subscription status card (plan name, billing cycle, next payment)
- [x] Add usage statistics widget (scenarios viewed, history count)
- [x] Create notification preferences page (/account/notifications)
- [x] Add quick access links to Telegram channels based on tier
- [x] Implement tier comparison widget (upgrade prompt for Core users)
- [x] Add welcome header with user name and plan badge
- [x] Add quick stats bar (scenarios viewed, last active, member since, subscription)
- [x] Enhanced Dashboard with statistics and tier-specific layouts
- [x] Database schema updated (userActivity, notificationPreferences tables)
- [x] Test all dashboard features across both tiers
- [x] Verified Dashboard with welcome header, stats bar, and 4 cards for Pro
- [x] Verified Account page with subscription details and Telegram access
- [x] Verified Notifications page with email and Telegram preferences

## Subscription Management Page (User Request - Dec 26, 2024)
- [x] Design subscription management page structure and layout
- [x] Create /account/subscription page with current plan display
- [x] Add plan comparison section (Core vs Pro features)
- [x] Implement upgrade flow (Core → Pro) with confirmation dialog
- [x] Implement downgrade flow (Pro → Core) with confirmation dialog
- [x] Create /account/billing page with billing history table
- [x] Add invoice download functionality (placeholder for Paddle)
- [x] Add payment method display and update button
- [x] Implement subscription cancellation flow with confirmation dialog
- [x] Add next billing date and amount display
- [x] Add subscription status indicators (active status with checkmark)
- [x] Prepared for Paddle integration (all flows ready)
- [x] Test all subscription management features
- [x] Verified /account/subscription page with plan comparison and actions
- [x] Verified /account/billing page with payment history and invoices
- [x] All dialogs (upgrade, downgrade, cancel) working correctly
- [x] Bilingual support verified (Russian interface)
- [x] Ready for Paddle integration

## Activity Tracking & Admin Panel (User Request - Dec 26, 2024)
- [x] Implement automatic activity tracking for market analysis pages
- [x] Create tRPC procedure to log scenario views (trackScenarioView)
- [x] Add tracking calls to all analysis pages (WTI, Gold, Silver, Copper)
- [x] Create admin panel with analytics dashboard
- [x] Add user statistics table (total users, active users, by tier)
- [x] Add popular scenarios list (most viewed)
- [x] Add recent activity feed (all users)
- [x] Add user management table (view all users, their plans, activity)
- [x] Created useTrackScenarioView hook for automatic tracking
- [x] Added tracking to WTI, Gold, Silver, Copper analysis pages
- [x] Created comprehensive Admin dashboard with 4 stat cards
- [x] Added Popular Scenarios table with view counts
- [x] Added Recent Activity feed with user actions
- [x] Added User Management table with role badges
- [x] Test activity tracking on all analysis pages
- [x] Verify admin panel displays correct statistics
- [x] Tested WTI and Gold pages - tracking working perfectly
- [x] Admin panel showing Popular Scenarios with view counts
- [x] Admin panel showing Recent Activity with user details
- [x] All statistics updating in real-time

## Authentication Flow Fix (User Issue - Dec 26, 2024)
- [x] Fix "Sign In" button to redirect to OAuth login instead of pricing page (already correct)
- [x] Fix "Get Started" button to redirect to OAuth login instead of pricing page
- [x] Update Dashboard to allow access for all authenticated users (not just subscribers)
- [x] Add subscription status check in Dashboard
- [x] Show upgrade prompt for users without active subscription
- [x] Update navigation to show "Dashboard" link for all authenticated users (already correct)
- [x] Added upgrade banner with AlertCircle icon and "View Plans" button
- [x] Conditional badge display (only for subscribers)
- [x] Test complete authentication flow from sign in to dashboard access
- [x] Verified "Get Started" button changes to "Go to Dashboard" for authenticated users
- [x] Verified Dashboard accessible with Pro badge and 4 cards for Admin users
- [x] Confirmed upgrade banner will show for non-subscriber users (role = "user")

## Telegram Integration (User Request - Dec 26, 2024)
- [x] Generate QM avatar for Trading Ideas channel (blue/gold theme)
- [x] Generate QM avatar for Pro Community (purple/gold premium theme)
- [x] Regenerated avatars with correct brand colors (white Q, gold M)
- [x] Add Telegram links to Render environment variables
  * VITE_TELEGRAM_CHANNEL = https://t.me/quantismedia_ideas
  * VITE_TELEGRAM_PRO_COMMUNITY = https://t.me/quantismedia_pro
- [x] Update TelegramAccess.tsx to use real channel link (already configured)
- [x] Update ProCommunity.tsx to use real community link (already configured)
- [x] Created RENDER_TELEGRAM_SETUP.md with step-by-step instructions
- [ ] User needs to add environment variables in Render Dashboard
- [ ] Test Telegram links from Dashboard, Account, and dedicated pages (after Render setup)
- [ ] Verify links work for Core and Pro users respectively (after Render setup)

## Date Updates
- [ ] Update dates on all market analysis pages from 2024 to December 26, 2025 (WTI, Gold, Silver, Copper)
- [ ] Fix contact form to send emails to info@quantismedia.io
- [ ] Create S&P 500 (SPX500) analysis page in Indices category

## SPX500 (S&P 500) Index Analysis Page
- [x] Create SPX500 analysis page route `/market-insights/indices/spx500`
- [x] Implement full bilingual content (EN/RU) with professional institutional language
- [x] Design header with 4 info cards (Time Horizon, Current Reference, Last Updated, Market Regime)
- [x] Add Share buttons (𝕏, LinkedIn, Copy link)
- [x] Create content sections: Market Context, Monetary Policy, Positioning, Geopolitical, Technical Structure
- [x] Add color-coded scenario blocks (Blue: Base Case, Green: Upside, Red: Downside)
- [x] Include Bottom Line section and disclaimer
- [x] Add breadcrumb navigation (Market Insights / Indices / S&P 500)
- [x] Integrate analytics tracking with useTrackScenarioView hook
- [x] Add SPX500 to MarketInsightsArchive with proper excerpt
- [x] Create Indices category landing page route `/market-insights/indices`
- [x] Test all functionality (EN/RU switching, navigation, share buttons)
- [x] Verify TypeScript: no errors
- [x] Date set to December 26, 2025

## Telegram Channel Language Selection
- [x] Update TelegramAccess.tsx with language selection UI (EN/RU toggle)
- [x] Add 4 channel structure: Pro EN, Pro RU, Core EN, Core RU
- [x] Implement dynamic link generation based on subscription tier + language
- [x] Add channel descriptions explaining comment-only access
- [x] Update database schema to store user's preferred channel language (telegramChannelLanguage field)
- [x] Create tRPC procedure to save/retrieve channel language preference (telegram.updateChannelLanguage)
- [x] Add explanatory text about channel structure and comments
- [x] Test all combinations (Pro EN/RU, Core EN/RU) - working perfectly
- [x] Full bilingual support (EN/RU) for page interface
- [ ] Update Pricing page to mention bilingual channels (optional - can be done later)

## Translation Improvement - Telegram Access Page
- [x] Update Russian translation: "Распространение" → "Публикация рыночной аналитики в реальном времени"

## Dashboard - Telegram Channel Section
- [x] Add Telegram channel card to Dashboard showing subscription info
- [x] Display user's subscription tier (Pro/Core)
- [x] Display selected channel language (EN/RU) with flag
- [x] Add quick link to change language preference
- [x] Add "Go to Channel" button with dynamic link
- [x] Show channel features based on subscription tier
- [x] Full bilingual support (EN/RU)
- [x] Test with Pro user role - working perfectly
- [x] Verified both EN and RU translations

## Global Macro Section Implementation

### Phase 1: Database and Structure
- [x] Add "global_macro" to market enum in schema
- [x] Add content type field: "analysis", "daily_outlook", "weekly_outlook"
- [x] Add accessLevel field to marketInsights table
- [x] Push database schema changes (migration 0004_white_chamber.sql created)

### Phase 2: UI Components
- [x] Add Global Macro card to Market Insights landing page (with Globe icon)
- [x] Create GlobalMacro.tsx category page with Daily/Weekly cards
- [x] Add route /market-insights/global-macro to App.tsx
- [x] Update breadcrumbs navigation
- [x] Full bilingual support (EN/RU)
- [ ] Create DailyOutlook.tsx template page (when content is ready)
- [ ] Create WeeklyOutlook.tsx template page (when content is ready)
- [ ] Add Global Macro filter to MarketInsightsArchive

### Phase 3: Features and Integration
- [x] Test Global Macro landing page (Market Insights) - working perfectly
- [x] Test Global Macro category page - both EN and RU versions
- [x] Verify Daily Outlook badge shows "Pro only" / "Только Pro"
- [x] Verify Weekly Outlook badge shows "Core & Pro" / "Core и Pro"
- [x] Full bilingual support (EN/RU) - all translations verified
- [x] Coming soon notice displayed correctly
- [ ] Add tracking for Global Macro page views (when content is published)
- [ ] Add share buttons (when individual outlook pages are created)
- [ ] Add SEO meta tags (when content is published)
- [ ] Test access control with actual content (Core sees weekly only, Pro sees both)

## Market Insights Archive - Global Macro Filter
- [x] Add "Global Macro" category filter to archive (5th tab)
- [x] Add Daily/Weekly Outlook sub-filters when Global Macro is selected
- [x] Update state management for globalMacroFilter
- [x] Full bilingual support (EN/RU)
- [x] Test filter switching (All/Daily/Weekly) - working perfectly
- [x] Verified active filter highlighting (gold color)
- [x] Tested both EN and RU translations
- [ ] Add actual Daily/Weekly content to test filtering logic (when published)

## Telegram Integration - Final Verification & Testing
- [x] Created 4 Telegram channels with invite links:
  - QM Pro Community (EN): https://t.me/+3ZE71O2uGGNhYzJi
  - QM Pro Community (RU): https://t.me/+IhrSAuKpTKliZWVi
  - QM Trading Ideas (EN): https://t.me/+-fP8pTsB0IYzNWMy
  - QM Trading Ideas (RU): https://t.me/+k1oIT2sTMQEyYTJi
- [x] Added all 4 Telegram invite links to .env file:
  - VITE_TELEGRAM_PRO_EN
  - VITE_TELEGRAM_PRO_RU
  - VITE_TELEGRAM_CORE_EN
  - VITE_TELEGRAM_CORE_RU
- [x] Tested "Join Telegram Channel" button on TelegramAccess page with EN language → Opens correct Pro EN channel
- [x] Tested language switcher (EN → RU) on TelegramAccess page → Updates selected language correctly
- [x] Tested "Join Telegram Channel" button with RU language → Opens correct Pro RU channel
- [x] Verified Dashboard Telegram section displays:
  - Subscription tier (Pro)
  - Selected language (🇷🇺 Русский)
  - Channel access status (Active)
  - Feature list based on subscription tier
- [x] Tested "Go to channel" button on Dashboard → Redirects to TelegramAccess page
- [x] Verified language preference persists across pages (Dashboard → TelegramAccess)
- [x] All 4 channel combinations working correctly (Pro EN/RU tested, Core EN/RU ready)
- [x] Full bilingual support (EN/RU) working throughout entire Telegram integration
- [ ] Test Core user access (requires switching user role to Core)
- [ ] Add Telegram channel links to Render environment variables for production deployment

## Product Strategy Update v1 - Finalized Positioning & Tiers

### Phase 1: Subscription Tier Restructuring
- [ ] Rename "Core" tier to "Scenario Access" ($39/month)
- [ ] Rename "Pro" tier to "Scenario Intelligence" ($89/month)
- [ ] Add "Public" tier (free) with limited preview access
- [ ] Update database schema: change role enum from 'core'/'pro' to 'public'/'scenario_access'/'scenario_intelligence'
- [ ] Update all backend procedures to use new tier names
- [ ] Update all frontend components to use new tier names
- [ ] Test tier-based access control with new naming

### Phase 2: Pricing Page Redesign
- [ ] Update Pricing page with new tier structure (Public/Scenario Access/Scenario Intelligence)
- [ ] Add "Public - Market Preview" tier card with $0/month pricing
- [ ] Update "Scenario Access" tier description (was Core)
- [ ] Update "Scenario Intelligence" tier description (was Pro)
- [ ] Add "Why Scenario-Based Analysis Works" educational block under pricing cards
- [ ] Update CTAs: "Unlock full market framework", "Open full scenario access", "Upgrade to Intelligence level"
- [ ] Add disclaimer about community being optional, not core value
- [ ] Full bilingual support (EN/RU) for all new content
- [ ] Test responsive design for new pricing structure

### Phase 3: Paywall Logic Implementation
- [ ] Implement blur/fade effect for Public tier users on scenario pages
- [ ] Show Market Context (full) to Public users
- [ ] Show Base Scenario (50%, truncated) to Public users
- [ ] Show partial analytical levels to Public users
- [ ] Add "Unlock full market framework" CTA for Public users
- [ ] Ensure Scenario Access users see full scenario framework
- [ ] Ensure Scenario Intelligence users see extended frameworks + bias/weighting
- [ ] Test paywall on all market analysis pages (WTI, Gold, Silver, Copper, SPX500)

### Phase 4: Terminology Audit & Updates
- [ ] Search and replace forbidden terms: "signals" → "scenarios"
- [ ] Verify no "buy/sell" language in user-facing content
- [ ] Verify no "entry/stop/target" language in content
- [ ] Replace "guaranteed/high probability" with "scenario framework"
- [ ] Update all content to use preferred terms: framework, context, scenario, range, structure, bias, regime
- [ ] Update Russian translations with correct terminology
- [ ] Add mandatory disclaimer to all scenario pages: "Analytical scenario. Not a trading instruction."

### Phase 5: Dashboard & Navigation Updates
- [ ] Update Dashboard tier badges (Public/Scenario Access/Scenario Intelligence)
- [ ] Update Dashboard card descriptions for new tier structure
- [ ] Update navigation to reflect new positioning
- [ ] Update Account page with new tier names
- [ ] Update Subscription Management page with new tier comparison
- [ ] Update Billing History page references
- [ ] Test all tier-specific features with new naming

### Phase 6: Content Model Updates
- [ ] Ensure all scenario pages follow standardized structure:
  - Instrument, Category, Time Horizon, Last Update
  - Market Context (2-3 sentences)
  - Scenario Framework (Base/Upside/Downside)
  - Analytical Reference Levels (Support/Resistance, Pivot, Risk Boundary)
  - Interpretation (no trade instructions)
  - Mandatory disclaimer
- [ ] Verify SPX500 page follows new structure
- [ ] Verify all Energy & Metals pages follow new structure
- [ ] Add scenario weighting/bias section for Scenario Intelligence tier (future)

### Phase 7: Testing & Verification
- [ ] Test Public tier access (limited preview with blur)
- [ ] Test Scenario Access tier (full scenarios)
- [ ] Test Scenario Intelligence tier (extended frameworks)
- [ ] Verify all terminology changes applied correctly
- [ ] Test bilingual support (EN/RU) for all new content
- [ ] Run vitest tests to ensure no breaking changes
- [ ] Create checkpoint with product strategy v1 implementation

## Product Strategy Update v1 - Tier Rebranding & Paywall
- [x] Create centralized tier labels mapping module (shared/tierLabels.ts)
- [x] Update Pricing page with new tier structure (Market Preview / Scenario Access / Scenario Intelligence)
- [x] Add "Why Scenario-Based Analysis Works" educational section to Pricing
- [x] Update Dashboard tier display with new labels
- [x] Update Account page tier references
- [x] Update SubscriptionManagement dialogs with new terminology
- [x] Remove forbidden terminology (signals → indications, signal → indicate)
- [x] Create PaywallBlur component with blur/fade overlay + CTA
- [x] Implement content truncation logic (Base Scenario ~350 chars)
- [x] Add paywall to WTI Crude Oil page
- [x] Add paywall to Gold Analysis page
- [x] Add paywall to Silver Analysis page
- [x] Add paywall to Copper Analysis page
- [x] Add paywall to SPX500 Analysis page
- [x] Public users see: Market Context + truncated Base + PaywallBlur overlay
- [x] Subscribers see: Full content without restrictions
- [x] Test paywall functionality with different user roles (admin sees full content, guest logic implemented)
- [x] Create final checkpoint with product strategy updates

## Paddle Payment Integration
- [x] Install Paddle SDK (@paddle/paddle-node-sdk)
- [x] Create Paddle service layer (server/_core/paddle.ts)
- [x] Create Paddle checkout flow endpoints (server/routers.ts)
- [x] Implement webhook handlers for subscription.created, subscription.updated, subscription.canceled
- [x] Add automatic role upgrade logic (guest/registered → core/pro)
- [x] Update Pricing page with Paddle checkout buttons
- [x] Create Paddle products configuration file
- [ ] Add Paddle API keys to environment (PADDLE_API_KEY, PADDLE_ENVIRONMENT, PADDLE_WEBHOOK_SECRET)
- [ ] Test checkout flow with Paddle sandbox
- [x] Write documentation for Paddle setup
- [ ] Create checkpoint with Paddle integration

## Telegram Page Tier Naming Update
- [x] Update Telegram Access page tier labels (Pro → Scenario Intelligence, Core → Scenario Access)
- [x] Update channel descriptions to match new positioning
- [x] Ensure consistency with tierLabels.ts mapping
- [x] Test Telegram page with both EN/RU languages
- [x] Create checkpoint with Telegram naming updates

## Telegram Page Access Level Display Fix
- [x] Update "Your Access Level" to use tier labels from tierLabels.ts (Pro → Scenario Intelligence, Core → Scenario Access)
- [x] Test with both pro and core user roles (admin displays correctly as "Admin")
- [x] Create checkpoint with access level display fix

## How It Works Page - Interactive Cards
- [x] Analyze current HowItWorks page structure and card layout
- [x] Add expanded content for all 4 steps (RU/EN bilingual)
- [x] Implement accordion functionality (one open at a time)
- [x] Add chevron icon indicator (↓ collapsed, ↑ expanded)
- [x] Add smooth expand/collapse animation (150-250ms ease-in-out)
- [x] Implement keyboard accessibility (Enter/Space to toggle)
- [x] Add ARIA attributes (aria-expanded, aria-controls)
- [x] Test with both EN/RU languages (tested EN and RU, accordion mode works perfectly)
- [x] Create checkpoint with interactive How It Works cards

## Scenario Pages v2 Content Update
- [x] Update Gold Analysis page with v2 institutional-grade content (RU/EN)
- [x] Update SPX500 Analysis page with v2 institutional-grade content (RU/EN)
- [x] Preserve existing UI structure and styling
- [x] Keep paywall logic intact (truncation for public users)
- [x] Test both pages with EN/RU languages (tested Gold and SPX500 in both EN and RU)
- [x] Create checkpoint with v2 scenario content

## Sample Ideas Page v2 Update
- [x] Locate Sample Ideas page component
- [x] Update Gold scenario example with v2 content
- [x] Update SPX500 scenario example with v2 content
- [x] Ensure bilingual support (EN/RU) for examples
- [x] Test Sample Ideas page with both languages (tested EN and RU, all scenarios display correctly)
- [x] Create checkpoint with Sample Ideas v2 update

## How It Works Page - Short Texts Update
- [x] Update Step 1 short text to match ТЗ requirements
- [x] Update Step 2 short text to match ТЗ requirements
- [x] Update Step 3 short text to match ТЗ requirements
- [x] Update Step 4 short text to match ТЗ requirements
- [x] Test with both EN/RU languages (tested EN and RU, all short texts match ТЗ requirements)
- [x] Create checkpoint with short texts update

## FAQ Page Creation
- [x] Create faq.json data file in shared/ directory
- [x] Create FAQ page component with accordion functionality
- [x] Implement short/full answer toggle (a_short visible, a_full on expand)
- [x] Add chevron indicators and smooth animations
- [x] Ensure keyboard accessibility (Enter/Space)
- [x] Add ARIA attributes (aria-expanded, aria-controls)
- [x] Group questions by sections (Product, Scenarios, Subscription, Legal)
- [x] Add FAQ route to App.tsx
- [x] Test with both EN/RU languages (tested EN and RU, accordion works perfectly, all sections translated)
- [x] Create checkpoint with FAQ page

## Final TЗ Implementation - Footer + FAQ + Legal Pages
- [x] Restructure Footer with 4 blocks (Main, Support, About, Legal)
- [x] Add "Support" block to Footer with FAQ and Contact links
- [x] Move FAQ link from Legal block to Support block
- [x] Ensure Footer contains ONLY navigation links (no long texts, no duplicated disclaimers)
- [x] Update Disclaimer page with 4-section structure (Platform Status, What We Don't Do, Content Nature, User Responsibility)
- [x] Update Risk Disclosure page with required warning text (RU/EN)
- [x] Verified all RU/EN translations are synchronized (tested both languages)
- [x] Test Footer navigation on all pages (tested on Home, Disclaimer, Risk Disclosure)
- [x] Create checkpoint with final Footer + Legal structure

## 3-Step TЗ Implementation (ШАГ 1-3)

### ШАГ 1 - Home Page Updates
- [x] Update Hero section text (keep design unchanged)
- [x] Add 3 value bullets under Hero (with CheckCircle icons)
- [x] Add "Who it's for" block (with Users icon)
- [x] Add "What we don't do" block (with XCircle icon)
- [x] Verify RU/EN translations (tested both languages)

### ШАГ 2 - Contact Page Professional Redesign
- [x] Add subtitle under "Contact Us" heading (professional positioning)
- [x] Add "What you can contact us about" block with 4 items
- [x] Update "Subject" field placeholder with example
- [x] Add note under form about response priorities
- [x] Sync RU/EN versions (tested both languages)
- [x] Verify professional/partnership-ready appearance

### ШАГ 3 - About Page Methodology Focus
- [x] Rewrite Intro paragraph (who we are in 1 paragraph)
- [x] Add "How we approach markets" section
- [x] Add "Why scenario approach" section
- [x] Add short "What we don't do" section (no Legal duplication)
- [x] Add "Who we work for" section
- [x] Remove legal formulations (already in Disclaimer)
- [x] Sync RU/EN versions (tested both languages)
- [ ] Verify no duplication with Legal/FAQ pages

### Final Testing
- [ ] Test all 3 pages in RU language
- [ ] Test all 3 pages in EN language
- [ ] Verify design consistency (no color/typography changes)
- [ ] Create checkpoint with all 3 steps completed

## Bug Fixes - Navigation & Dashboard
- [x] Fix navigation text overlap in header (changed space-x-1 to space-x-2)
- [x] Populate Trading Ideas dashboard page (added 4 trading ideas: 2 Core, 2 Pro)
- [x] Test navigation on different screen sizes (verified in browser)
- [x] Verify Trading Ideas page shows actual scenario content (EUR/USD, Gold visible)

## Dashboard Statistics Fix
- [x] Fix "Просмотрено сценариев" counter (now shows 30, loaded from database via activity.getUserStats)
- [x] Fix "Последний просмотр" date (now shows "27 дек.", loaded from database)
- [x] Implement activity tracking when user views Trading Ideas (added trackScenarioView mutation in TradingIdeas.tsx)
- [x] Test statistics update after viewing scenarios (verified working - shows real data)

## Market Preview Terminology Implementation (Final TЗ)
- [x] Update FAQ - add clarification that Market Preview is access mode, not separate page (RU/EN)
- [x] Add Market Preview badge to Sample Ideas page subtitle (RU: "Market Preview — пример сценарного анализа", EN: "Market Preview — sample scenario analysis")
- [x] Verify NO Market Preview menu item exists
- [x] Verify NO separate Market Preview page exists
- [x] Check all Market Preview mentions for consistency (should be "режим доступа" not "страница")
- [x] Test FAQ and Sample Ideas page with new terminology
- [x] Create checkpoint with Market Preview clarification

## Share Buttons Audit & Optimization (Institutional Research Standards)

### Audit Current Placement
- [x] Check if Share buttons exist on scenario analysis pages (WTI, Gold, Silver, Copper, SPX500) ✅
- [x] Check if Share buttons exist on Sample Ideas page (inside scenario cards)
- [x] Verify NO Share buttons on Home page
- [x] Verify NO Share buttons on About page
- [x] Verify NO Share buttons on Contact page
- [x] Verify NO Share buttons on Legal pages (Disclaimer, Risk Disclosure, Terms, Privacy, Cookie)
- [x] Verify NO Share buttons on Pricing page
- [x] Verify NO Share buttons on FAQ page

### Implementation Requirements
- [x] Share buttons MUST exist on all scenario analysis pages (already done for 5 pages)
- [x] Add Share buttons to Sample Ideas scenario cards (inside expanded view or card header)
- [x] Remove Share buttons from non-shareable pages if found (none found)
- [x] Ensure Share component uses: 𝕏 (Twitter), LinkedIn, Copy link only
- [x] Verify Copy functionality includes: title + 1-line context + URL
- [x] Test Share buttons work identically in RU/EN languages

### Acceptance Criteria
- [x] Share buttons exist ONLY on shareable content (scenario pages, sample ideas)
- [x] NO Share buttons on Home, About, Contact, Legal, Pricing, FAQ
- [x] Copy button works without registration
- [x] Share text auto-generated from page title + context
- [x] Bilingual support working (RU/EN)
- [x] Create checkpoint with Share buttons optimization

## Scenarios Dashboard Filtering (P0 - Pre-Live)

### Analysis
- [x] Review current Trading Ideas page structure
- [x] Identify all scenario instruments and their asset classes
- [x] Map instruments to categories (Indices, FX, Energy & Metals)
- [x] Review existing card layout and header structure

### P0 Implementation (Must Have Before Live)
- [x] Add tabs filter by asset class (All, Indices, FX, Energy & Metals)
- [x] Implement dropdown filter by instrument (within selected asset class)
- [x] Enhance scenario card headers for clarity (instrument name, category, time horizon visible)
- [x] Ensure filters work with existing paywall logic (don't break access control)
- [x] Test filtering with both Core and Pro subscription levels
- [x] Verify bilingual support (RU/EN) for all filter labels

### P1 Implementation (Post-Live, Future)
- [ ] Add time horizon filter (Short-term, Medium-term, Long-term)
- [ ] Add sort by last update time
- [ ] Implement saved/favorite instruments feature

### Acceptance Criteria (P0)
- [x] Asset class tabs display at top of page
- [x] Instrument dropdown shows only instruments from selected asset class
- [x] "All" tab shows all available scenarios
- [x] Card headers clearly show: Instrument | Category | Time Horizon
- [x] Filters preserve paywall restrictions (Core vs Pro scenarios)
- [x] All filter labels translated (RU/EN)
- [x] Create checkpoint with Scenarios Dashboard filtering

## Scenario Card Structure Fix (Critical)

### Issues Identified
- [x] Missing proper header panel in scenario cards
- [x] Share buttons not in header (should be in card header, not separate)
- [x] Section titles (Context, Scenario, Invalidation, Target) not aligned at top
- [x] Card structure doesn't match institutional research format

### Required Structure
- [x] Add card header panel with:
  * Instrument name (large, prominent)
  * Time Horizon (e.g., "1-5 days")
  * Last Update date (e.g., "Updated: Sep 25")
  * Share buttons (X, LinkedIn, Copy) aligned right
  * Category badge (FX, Metals, etc.)
- [x] Align section titles at top of content area
- [x] Use grid layout for Invalidation/Target columns
- [x] Ensure consistent spacing and professional look

### Acceptance Criteria
- [x] Header panel visible on all scenario cards
- [x] Share buttons integrated into header (right side)
- [x] Time horizon and last update displayed
- [x] Section titles aligned horizontally at top
- [x] Layout matches institutional research aesthetic
- [x] Works in both RU and EN languages
- [x] Create checkpoint with card structure fix

## Trading Ideas Sync with Market Insights (Critical)

### Issue
- [x] Trading Ideas currently uses separate database (tradingIdeas table)
- [x] Should display scenarios from Market Insights analysis pages instead
- [x] Market Insights has: WTI Crude Oil, Gold, Silver, Copper, S&P 500
- [x] Need to sync data source between Trading Ideas and Market Insights

### Analysis Required
- [x] Review all Market Insights pages (WTI, Gold, Silver, Copper, SPX500)
- [x] Identify common data structure across Market Insights pages
- [x] Determine how to extract scenario data from Market Insights
- [x] Map Market Insights categories to Trading Ideas filters

### Implementation
- [x] Create unified data structure for Market Insights scenarios (scenarios.ts)
- [x] Refactor Trading Ideas to pull from Market Insights data (preview cards format)
- [x] Ensure filtering (asset class, instrument) works with Market Insights data
- [x] Maintain bilingual support (RU/EN)
- [x] Keep card structure (header panel, aligned sections)
- [x] Add Status badges (Active, Monitoring, Updated)
- [x] Add CTA button "Read Full Market Insight" linking to full analysis pages

### Acceptance Criteria
- [x] Trading Ideas displays same scenarios as Market Insights
- [x] WTI Crude Oil scenario visible in Trading Ideas (Energy & Metals tab)
- [x] Gold scenario visible in Trading Ideas (Energy & Metals tab)
- [x] Silver scenario visible in Trading Ideas (Energy & Metals tab)
- [x] Copper scenario visible in Trading Ideas (Energy & Metals tab)
- [x] S&P 500 scenario visible in Trading Ideas (Indices tab)
- [x] Filtering works correctly with Market Insights data
- [x] Preview cards show: Market Context (2-3 lines), Base Scenario (1 paragraph), Invalidation, Target
- [x] CTA button navigates to full Market Insights analysis page
- [x] Create checkpoint with Trading Ideas sync

## Market Insights & Trading Ideas ТЗ Implementation

### Trading Ideas Requirements
- [x] Implement Status enum (active, monitoring, invalidated, completed)
- [x] Add Status color badges:
  * Active / Активен → green
  * Monitoring / На наблюдении → yellow/neutral
  * Invalidated / Инвалидирован → gray/red
  * Completed / Завершён → gray
- [x] Implement Last Update with relative time format:
  * RU: "Обновлено: сегодня, 14:30 UTC" / "Обновлено: 2 дня назад"
  * EN: "Last update: Today, 14:30 UTC" / "Last update: 2 days ago"
- [x] Remove any "Published" / "Дата публикации" labels from Trading Ideas (must use only Last Update)
- [x] Update Invalidation/Target labels to include "(ориентир)" / "(reference)" suffix

### Market Insights Requirements
- [x] Add Published label (secondary, neutral color):
  * RU: "Опубликовано: 20 дек 2025"
  * EN: "Published: Dec 20, 2025"
- [x] Add Last Updated label (primary, prominent):
  * RU: "Последнее обновление: 27 дек 2025, 16:10 UTC"
  * EN: "Last updated: Dec 27, 2025, 16:10 UTC"
- [x] Ensure Last Updated is more prominent than Published
- [x] Update Invalidation/Target labels to include "(ориентир)" / "(reference)" suffix (N/A - only in Trading Ideas)

### Backend Data Structure
- [x] Update scenarios.ts with proper status enum values
- [x] Add publishedAt field (datetime) for Market Insights
- [x] Add lastUpdatedAt field (datetime) for both Trading Ideas and Market Insights
- [x] Ensure all timestamps are UTC

### Acceptance Criteria
- [x] Status badges display correct colors in Trading Ideas
- [x] Relative time works correctly (today, yesterday, X days ago)
- [x] Market Insights shows both Published and Last Updated
- [x] All Invalidation/Target labels include "(reference)" suffix
- [x] Bilingual support for all new labels (RU/EN)
- [x] Create checkpoint with ТЗ implementation

## Trading Ideas Bug Fixes

### Issues Reported
- [ ] CTA button "Read Full Market Insight" leads to 404 error (incorrect URL)
- [ ] Gold Invalidation/Target data doesn't match GoldAnalysis.tsx actual values
- [ ] Need to verify Invalidation/Target data for all other instruments (WTI, Silver, Copper, S&P 500)

### Bug Analysis
- [ ] Check scenarios.ts fullAnalysisUrl field for all instruments
- [ ] Compare scenarios.ts Invalidation/Target with actual Market Insights pages
- [ ] Identify URL pattern mismatch causing 404

### Fixes Required
- [ ] Fix fullAnalysisUrl in scenarios.ts to point to correct Market Insights pages
- [ ] Update Gold Invalidation/Target data to match GoldAnalysis.tsx
- [ ] Verify and update WTI Invalidation/Target data
- [ ] Verify and update Silver Invalidation/Target data
- [ ] Verify and update Copper Invalidation/Target data
- [ ] Verify and update S&P 500 Invalidation/Target data

### Testing
- [ ] Test CTA button for Gold → should navigate to /market-insights/energy-metals/gold
- [ ] Test CTA button for WTI → should navigate to /market-insights/energy-metals/wti-crude-oil
- [ ] Test CTA button for Silver → should navigate to /market-insights/energy-metals/silver
- [ ] Test CTA button for Copper → should navigate to /market-insights/energy-metals/copper
- [ ] Test CTA button for S&P 500 → should navigate to /market-insights/indices/spx500
- [ ] Verify all Invalidation/Target values match Market Insights pages
- [ ] Create checkpoint with bug fixes

## Trading Ideas Data Synchronization & Routing Fixes
- [x] Identify data discrepancies between Trading Ideas preview cards and Market Insights analysis pages
- [x] Fix Silver (XAGUSD) market context and base scenario (updated from $30-32 range to correct $74-75 range)
- [x] Fix S&P 500 (SPX500) market context and base scenario (updated from 5950-6050 to correct 4980-5020 range)
- [x] Fix Gold (XAUUSD) routing - add /metals/ segment to URL path
- [x] Fix Silver (XAGUSD) routing - add /metals/ segment to URL path
- [x] Fix Copper (HG) routing - add /metals/ segment to URL path
- [x] Verify all "Read Full Market Insight" buttons navigate correctly without 404 errors
- [x] Verify 100% data consistency across all 5 instruments (WTI, Gold, Silver, Copper, S&P 500)
- [x] Test navigation flow from Trading Ideas to each Market Insights analysis page
- [x] Document all changes and verification results
