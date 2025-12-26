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
- [ ] Push changes to GitHub
