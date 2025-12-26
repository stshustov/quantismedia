# Dashboard Structure for Core & Pro Subscribers

## Overview
This document defines the comprehensive personal dashboard structure for Quantis Media subscribers, with tier-specific features and access controls.

---

## Access Levels

### Guest (Неавторизованные)
- ❌ No dashboard access
- ✅ Public pages only (Home, How It Works, Market Insights, Sample Ideas, Pricing, About, Contact)
- ✅ Archive with 1-week delay

### Registered (Зарегистрированные без подписки)
- ❌ No dashboard access
- ✅ Same as Guest
- ✅ Can save profile
- 💡 Show "Subscribe to unlock" prompts

### Core Subscribers ($39/мес)
- ✅ Full dashboard access
- ✅ 3 main cards: Trading Ideas, History, Telegram Channel
- ✅ Account management
- ✅ Usage statistics
- ✅ Notification preferences
- ✅ Archive without delay

### Pro Subscribers ($89/мес)
- ✅ Everything from Core +
- ✅ 4 main cards: Trading Ideas, History, Telegram Channel, Pro Community
- ✅ Extended scenarios (Primary/Alternative)
- ✅ Priority support badge
- ✅ Advanced statistics

---

## Dashboard Layout Structure

### Main Dashboard (`/dashboard`)

#### Header Section
```
┌─────────────────────────────────────────────────────────┐
│ Welcome back, [User Name]!                              │
│ [Plan Badge: Core/Pro] • Last login: [Date]             │
└─────────────────────────────────────────────────────────┘
```

#### Quick Stats Bar (Core & Pro)
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Scenarios    │ Last Viewed  │ Member Since │ Next Billing │
│ Viewed: 24   │ 2 hours ago  │ Jan 2024     │ Jan 26, 2025 │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

#### Main Cards Grid

**Core Users (3 cards in 3-column grid):**
```
┌─────────────┬─────────────┬─────────────┐
│ Trading     │ History &   │ Telegram    │
│ Ideas       │ Statistics  │ Channel     │
│             │             │             │
│ [Icon]      │ [Icon]      │ [Icon]      │
│ Access to   │ Scenario    │ Trading     │
│ core        │ history     │ ideas       │
│ scenarios   │             │ updates     │
└─────────────┴─────────────┴─────────────┘
```

**Pro Users (4 cards in 2x2 grid):**
```
┌─────────────────────┬─────────────────────┐
│ Trading Ideas       │ History &           │
│ [Icon]              │ Statistics          │
│ Extended scenarios  │ [Icon]              │
│ Primary/Alternative │ Advanced analytics  │
└─────────────────────┴─────────────────────┘
┌─────────────────────┬─────────────────────┐
│ Telegram Channel    │ Pro Community ⭐    │
│ [Icon]              │ [Icon]              │
│ Trading ideas       │ Exclusive           │
│ notifications       │ discussions         │
└─────────────────────┴─────────────────────┘
```

#### Recent Activity Feed (Core & Pro)
```
┌─────────────────────────────────────────────────────────┐
│ Recent Activity                                         │
├─────────────────────────────────────────────────────────┤
│ 📊 Viewed: Gold Analysis - Upside Scenario              │
│    2 hours ago                                          │
├─────────────────────────────────────────────────────────┤
│ 📊 Viewed: WTI Crude Oil - Base Case                    │
│    Yesterday at 14:30                                   │
├─────────────────────────────────────────────────────────┤
│ 🔔 New scenario published: Silver Analysis              │
│    2 days ago                                           │
└─────────────────────────────────────────────────────────┘
```

#### Upgrade Prompt (Core users only)
```
┌─────────────────────────────────────────────────────────┐
│ 🚀 Upgrade to Pro                                       │
│                                                         │
│ Unlock extended scenarios, Pro community access, and   │
│ priority support for just $50/month more.              │
│                                                         │
│ [Compare Plans] [Upgrade Now]                          │
└─────────────────────────────────────────────────────────┘
```

---

## Account Management (`/account`)

### Subscription Details Card
```
┌─────────────────────────────────────────────────────────┐
│ Your Subscription                                       │
├─────────────────────────────────────────────────────────┤
│ Plan: [Core / Pro] [Badge]                              │
│ Status: Active ✅                                        │
│ Billing Cycle: Monthly                                  │
│ Amount: $39.00 / $89.00                                 │
│ Next Payment: January 26, 2025                          │
│ Payment Method: •••• 4242 (Visa)                        │
│                                                         │
│ [Update Payment] [View Invoices] [Manage Subscription] │
└─────────────────────────────────────────────────────────┘
```

### Usage Statistics
```
┌─────────────────────────────────────────────────────────┐
│ Usage This Month                                        │
├─────────────────────────────────────────────────────────┤
│ Scenarios Viewed: 24 / Unlimited                        │
│ [████████░░] 75% more than last month                   │
│                                                         │
│ Most Viewed Category: Energy & Metals                   │
│ Average Session: 12 minutes                             │
│ Last Active: 2 hours ago                                │
└─────────────────────────────────────────────────────────┘
```

### Telegram Access (Tier-specific)

**Core Users:**
```
┌─────────────────────────────────────────────────────────┐
│ Telegram Channel Access                                 │
├─────────────────────────────────────────────────────────┤
│ ✅ Trading Ideas Channel                                │
│    Get notifications about new scenarios                │
│    [Join Channel]                                       │
│                                                         │
│ 🔒 Pro Community (Pro only)                             │
│    Upgrade to Pro to unlock exclusive community         │
│    [Upgrade to Pro]                                     │
└─────────────────────────────────────────────────────────┘
```

**Pro Users:**
```
┌─────────────────────────────────────────────────────────┐
│ Telegram Access                                         │
├─────────────────────────────────────────────────────────┤
│ ✅ Trading Ideas Channel                                │
│    Get notifications about new scenarios                │
│    [Open Channel]                                       │
│                                                         │
│ ✅ Pro Community ⭐                                      │
│    Exclusive discussions with Pro members               │
│    [Open Community]                                     │
└─────────────────────────────────────────────────────────┘
```

### Profile Settings
```
┌─────────────────────────────────────────────────────────┐
│ Profile Information                                     │
├─────────────────────────────────────────────────────────┤
│ Name: [Stas Shustov]                                    │
│ Email: [user@example.com]                               │
│ Language: [English / Русский]                           │
│ Timezone: GMT+2                                         │
│                                                         │
│ [Update Profile] [Change Password]                      │
└─────────────────────────────────────────────────────────┘
```

---

## Notification Preferences (`/account/notifications`)

### Email Notifications
```
┌─────────────────────────────────────────────────────────┐
│ Email Notifications                                     │
├─────────────────────────────────────────────────────────┤
│ ☑ New scenario published                                │
│ ☑ Weekly market digest                                  │
│ ☑ Subscription renewal reminders                        │
│ ☐ Marketing and promotional emails                      │
│                                                         │
│ [Save Preferences]                                      │
└─────────────────────────────────────────────────────────┘
```

### Telegram Notifications (if connected)
```
┌─────────────────────────────────────────────────────────┐
│ Telegram Notifications                                  │
├─────────────────────────────────────────────────────────┤
│ ☑ Instant scenario alerts                               │
│ ☑ Market updates                                        │
│ ☐ Community mentions (Pro only)                         │
│                                                         │
│ [Save Preferences]                                      │
└─────────────────────────────────────────────────────────┘
```

---

## Subscription Management (`/account/subscription`)

### Plan Comparison
```
┌──────────────────────┬──────────────────────┐
│ Your Current Plan    │ Upgrade to Pro       │
├──────────────────────┼──────────────────────┤
│ Core - $39/month     │ Pro - $89/month      │
│                      │                      │
│ ✅ Core scenarios    │ ✅ All Core features │
│ ✅ History           │ ✅ Extended scenarios│
│ ✅ Telegram channel  │ ✅ Pro Community     │
│ ✅ Email support     │ ✅ Priority support  │
│                      │ ✅ Early access      │
│                      │                      │
│ [Current Plan]       │ [Upgrade Now]        │
└──────────────────────┴──────────────────────┘
```

### Billing History
```
┌─────────────────────────────────────────────────────────┐
│ Billing History                                         │
├──────────┬──────────────────┬──────────┬───────────────┤
│ Date     │ Description      │ Amount   │ Invoice       │
├──────────┼──────────────────┼──────────┼───────────────┤
│ Dec 2024 │ Core Monthly     │ $39.00   │ [Download]    │
│ Nov 2024 │ Core Monthly     │ $39.00   │ [Download]    │
│ Oct 2024 │ Core Monthly     │ $39.00   │ [Download]    │
└──────────┴──────────────────┴──────────┴───────────────┘
```

### Subscription Actions
```
┌─────────────────────────────────────────────────────────┐
│ Manage Subscription                                     │
├─────────────────────────────────────────────────────────┤
│ [Upgrade to Pro] - Unlock all features                  │
│ [Update Payment Method] - Change card details           │
│ [Cancel Subscription] - End recurring billing           │
│                                                         │
│ ⚠️ Cancellation takes effect at end of billing period   │
└─────────────────────────────────────────────────────────┘
```

---

## Navigation Structure

### Sidebar Navigation (for dashboard pages)
```
Dashboard
├── 🏠 Overview (/dashboard)
├── 📊 Trading Ideas (/trading-ideas)
├── 📜 History (/history)
├── 💬 Telegram (/telegram)
├── 👥 Pro Community (/pro-community) [Pro only]
├── ⚙️ Account
│   ├── Profile (/account)
│   ├── Subscription (/account/subscription)
│   ├── Notifications (/account/notifications)
│   └── Billing (/account/billing)
└── 🚪 Logout
```

---

## Tier-Specific Features Summary

| Feature | Guest | Registered | Core | Pro |
|---------|-------|------------|------|-----|
| Dashboard Access | ❌ | ❌ | ✅ | ✅ |
| Core Scenarios | ❌ | ❌ | ✅ | ✅ |
| Extended Scenarios | ❌ | ❌ | ❌ | ✅ |
| History & Stats | ❌ | ❌ | ✅ | ✅ |
| Telegram Channel | ❌ | ❌ | ✅ | ✅ |
| Pro Community | ❌ | ❌ | ❌ | ✅ |
| Archive Access | 1 week delay | 1 week delay | Real-time | Real-time |
| Email Support | ❌ | ❌ | ✅ | ✅ |
| Priority Support | ❌ | ❌ | ❌ | ✅ |
| Upgrade Prompts | Show pricing | Show pricing | Show Pro benefits | N/A |

---

## Implementation Notes

### Database Schema Additions Needed
```typescript
// Add to users table
subscriptionId: text('subscription_id'),
subscriptionStatus: text('subscription_status'), // active, cancelled, past_due
subscriptionStartDate: integer('subscription_start_date'),
subscriptionEndDate: integer('subscription_end_date'),
lastActiveAt: integer('last_active_at'),

// New table: user_activity
export const userActivity = sqliteTable('user_activity', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  activityType: text('activity_type').notNull(), // viewed_scenario, joined_telegram, etc.
  resourceId: text('resource_id'), // scenario ID, etc.
  createdAt: integer('created_at').notNull(),
});

// New table: notification_preferences
export const notificationPreferences = sqliteTable('notification_preferences', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  emailNewScenarios: integer('email_new_scenarios', { mode: 'boolean' }).default(true),
  emailWeeklyDigest: integer('email_weekly_digest', { mode: 'boolean' }).default(true),
  emailBilling: integer('email_billing', { mode: 'boolean' }).default(true),
  emailMarketing: integer('email_marketing', { mode: 'boolean' }).default(false),
  telegramAlerts: integer('telegram_alerts', { mode: 'boolean' }).default(true),
  updatedAt: integer('updated_at').notNull(),
});
```

### tRPC Procedures Needed
```typescript
// Account management
account.getSubscription
account.updateProfile
account.getUsageStats
account.getBillingHistory
account.cancelSubscription
account.upgradeSubscription

// Notifications
notifications.getPreferences
notifications.updatePreferences

// Activity tracking
activity.logView
activity.getRecentActivity
```

### Environment Variables
```env
# Already defined
VITE_TELEGRAM_CHANNEL=https://t.me/quantis_core
VITE_TELEGRAM_PRO_COMMUNITY=https://t.me/quantis_pro

# Paddle (for subscription management)
VITE_PADDLE_VENDOR_ID=your_vendor_id
PADDLE_API_KEY=your_api_key
```

---

## Next Steps

1. ✅ Create `/account` page with subscription details
2. ✅ Add usage statistics widget to dashboard
3. ✅ Create `/account/notifications` page
4. ✅ Implement activity tracking (view logging)
5. ✅ Add upgrade prompts for Core users
6. ✅ Create billing history page
7. ✅ Add subscription management actions
8. ✅ Test all features across both tiers
