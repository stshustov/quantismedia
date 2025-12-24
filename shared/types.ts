/**
 * Unified type exports
 * Import shared types from this single entry point.
 */

export type * from "../drizzle/schema";
export * from "./_core/errors";

export type Language = "en" | "ru";

export type UserRole = "guest" | "registered" | "core" | "pro" | "admin";

export type SubscriptionPlan = "free" | "core" | "pro";

export type Market = "indices" | "fx" | "energy" | "metals";

export type AccessLevel = "sample" | "core" | "pro";

export interface FeatureAccess {
  publicPages: boolean;
  marketInsights: boolean;
  sampleIdeas: boolean;
  privateDashboard: boolean;
  tradingIdeas: boolean;
  historyStats: boolean;
  telegramChannels: boolean;
  communityChat: boolean;
}

export const ROLE_ACCESS: Record<UserRole, FeatureAccess> = {
  guest: {
    publicPages: true,
    marketInsights: true,
    sampleIdeas: true,
    privateDashboard: false,
    tradingIdeas: false,
    historyStats: false,
    telegramChannels: false,
    communityChat: false,
  },
  registered: {
    publicPages: true,
    marketInsights: true,
    sampleIdeas: true,
    privateDashboard: false,
    tradingIdeas: false,
    historyStats: false,
    telegramChannels: false,
    communityChat: false,
  },
  core: {
    publicPages: true,
    marketInsights: true,
    sampleIdeas: true,
    privateDashboard: true,
    tradingIdeas: true,
    historyStats: true,
    telegramChannels: true,
    communityChat: false,
  },
  pro: {
    publicPages: true,
    marketInsights: true,
    sampleIdeas: true,
    privateDashboard: true,
    tradingIdeas: true,
    historyStats: true,
    telegramChannels: true,
    communityChat: true,
  },
  admin: {
    publicPages: true,
    marketInsights: true,
    sampleIdeas: true,
    privateDashboard: true,
    tradingIdeas: true,
    historyStats: true,
    telegramChannels: true,
    communityChat: true,
  },
};

export interface TradingIdeaFormat {
  instrument: string;
  context: string;
  scenario: string;
  invalidationZone: string;
  targetArea: string;
  market: Market;
}

export interface PricingTier {
  plan: SubscriptionPlan;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
}
