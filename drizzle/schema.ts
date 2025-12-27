import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table with role-based access control
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["guest", "registered", "core", "pro", "admin"]).default("registered").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
  language: mysqlEnum("language", ["en", "ru"]).default("en").notNull(),
  telegramChannelLanguage: mysqlEnum("telegramChannelLanguage", ["en", "ru"]).default("en").notNull(),
  termsAccepted: boolean("termsAccepted").default(false).notNull(),
  termsAcceptedAt: timestamp("termsAcceptedAt"),
  // Subscription tracking
  subscriptionId: varchar("subscriptionId", { length: 255 }),
  subscriptionStatus: mysqlEnum("subscriptionStatus", ["active", "cancelled", "past_due", "trialing"]),
  subscriptionStartDate: timestamp("subscriptionStartDate"),
  subscriptionEndDate: timestamp("subscriptionEndDate"),
  lastActiveAt: timestamp("lastActiveAt"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Subscription management
 */
export const subscriptions = mysqlTable("subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  plan: mysqlEnum("plan", ["free", "core", "pro"]).notNull(),
  status: mysqlEnum("status", ["active", "cancelled", "expired", "pending"]).default("pending").notNull(),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  currentPeriodStart: timestamp("currentPeriodStart"),
  currentPeriodEnd: timestamp("currentPeriodEnd"),
  cancelAtPeriodEnd: boolean("cancelAtPeriodEnd").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;

/**
 * Trading Ideas
 */
export const tradingIdeas = mysqlTable("tradingIdeas", {
  id: int("id").autoincrement().primaryKey(),
  instrument: varchar("instrument", { length: 100 }).notNull(),
  contextEn: text("contextEn").notNull(),
  contextRu: text("contextRu").notNull(),
  scenarioEn: text("scenarioEn").notNull(),
  scenarioRu: text("scenarioRu").notNull(),
  invalidationZone: varchar("invalidationZone", { length: 255 }).notNull(),
  targetArea: varchar("targetArea", { length: 255 }).notNull(),
  market: mysqlEnum("market", ["indices", "fx", "energy", "metals"]).notNull(),
  accessLevel: mysqlEnum("accessLevel", ["sample", "core", "pro"]).default("core").notNull(),
  status: mysqlEnum("status", ["draft", "published", "archived"]).default("draft").notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  authorId: int("authorId").notNull(),
});

export type TradingIdea = typeof tradingIdeas.$inferSelect;
export type InsertTradingIdea = typeof tradingIdeas.$inferInsert;

/**
 * Market Insights (Blog)
 */
export const marketInsights = mysqlTable("marketInsights", {
  id: int("id").autoincrement().primaryKey(),
  titleEn: varchar("titleEn", { length: 255 }).notNull(),
  titleRu: varchar("titleRu", { length: 255 }).notNull(),
  slugEn: varchar("slugEn", { length: 255 }).notNull().unique(),
  slugRu: varchar("slugRu", { length: 255 }).notNull().unique(),
  excerptEn: text("excerptEn").notNull(),
  excerptRu: text("excerptRu").notNull(),
  contentEn: text("contentEn").notNull(),
  contentRu: text("contentRu").notNull(),
  coverImageUrl: text("coverImageUrl"),
  market: mysqlEnum("market", ["indices", "fx", "energy", "metals", "global_macro"]).notNull(),
  contentType: mysqlEnum("contentType", ["analysis", "daily_outlook", "weekly_outlook"]).default("analysis").notNull(),
  accessLevel: mysqlEnum("accessLevel", ["sample", "core", "pro"]).default("pro").notNull(),
  status: mysqlEnum("status", ["draft", "published", "archived"]).default("draft").notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  authorId: int("authorId").notNull(),
});

export type MarketInsight = typeof marketInsights.$inferSelect;
export type InsertMarketInsight = typeof marketInsights.$inferInsert;

/**
 * Legal Pages Content
 */
export const legalPages = mysqlTable("legalPages", {
  id: int("id").autoincrement().primaryKey(),
  pageType: mysqlEnum("pageType", ["disclaimer", "risk_disclosure", "terms", "privacy", "cookie"]).notNull().unique(),
  titleEn: varchar("titleEn", { length: 255 }).notNull(),
  titleRu: varchar("titleRu", { length: 255 }).notNull(),
  contentEn: text("contentEn").notNull(),
  contentRu: text("contentRu").notNull(),
  version: int("version").default(1).notNull(),
  effectiveDate: timestamp("effectiveDate").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LegalPage = typeof legalPages.$inferSelect;
export type InsertLegalPage = typeof legalPages.$inferInsert;

/**
 * Telegram Access Management
 */
export const telegramAccess = mysqlTable("telegramAccess", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  inviteLink: text("inviteLink"),
  channelAccess: text("channelAccess"), // JSON array of accessible channels
  accessGrantedAt: timestamp("accessGrantedAt"),
  accessRevokedAt: timestamp("accessRevokedAt"),
  status: mysqlEnum("status", ["active", "revoked"]).default("active").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TelegramAccess = typeof telegramAccess.$inferSelect;
export type InsertTelegramAccess = typeof telegramAccess.$inferInsert;

/**
 * Contact Form Submissions
 */
export const contactSubmissions = mysqlTable("contactSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied", "archived"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * User Activity Tracking
 */
export const userActivity = mysqlTable("userActivity", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  activityType: mysqlEnum("activityType", ["viewed_scenario", "viewed_insight", "joined_telegram", "upgraded_plan"]).notNull(),
  resourceId: varchar("resourceId", { length: 255 }),
  resourceTitle: text("resourceTitle"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserActivity = typeof userActivity.$inferSelect;
export type InsertUserActivity = typeof userActivity.$inferInsert;

/**
 * Notification Preferences
 */
export const notificationPreferences = mysqlTable("notificationPreferences", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  emailNewScenarios: boolean("emailNewScenarios").default(true).notNull(),
  emailWeeklyDigest: boolean("emailWeeklyDigest").default(true).notNull(),
  emailBilling: boolean("emailBilling").default(true).notNull(),
  emailMarketing: boolean("emailMarketing").default(false).notNull(),
  telegramAlerts: boolean("telegramAlerts").default(true).notNull(),
  telegramCommunity: boolean("telegramCommunity").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type NotificationPreference = typeof notificationPreferences.$inferSelect;
export type InsertNotificationPreference = typeof notificationPreferences.$inferInsert;
