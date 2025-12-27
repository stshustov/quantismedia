/**
 * Centralized Tier Labels Mapping Module
 * 
 * Maps internal database values (guest/free/core/pro) to user-facing marketing names.
 * This ensures consistent tier naming across the entire application without database migrations.
 * 
 * IMPORTANT: Database enum values remain unchanged (core/pro/guest).
 * Only UI labels are updated to match new product positioning.
 */

export type TierValue = 'guest' | 'free' | 'sample' | 'registered' | 'core' | 'pro' | 'admin';
export type Language = 'en' | 'ru';

/**
 * Tier display names for UI
 */
export const TIER_LABELS = {
  en: {
    guest: 'Market Preview',
    free: 'Market Preview',
    sample: 'Market Preview',
    registered: 'Market Preview',
    core: 'Scenario Access',
    pro: 'Scenario Intelligence',
    admin: 'Admin',
  },
  ru: {
    guest: 'Рыночный обзор',
    free: 'Рыночный обзор',
    sample: 'Рыночный обзор',
    registered: 'Рыночный обзор',
    core: 'Scenario Access',
    pro: 'Scenario Intelligence',
    admin: 'Администратор',
  },
} as const;

/**
 * Tier descriptions for pricing page
 */
export const TIER_DESCRIPTIONS = {
  en: {
    free: 'Market context and scenario previews',
    core: 'Full access to scenario frameworks',
    pro: 'Extended analytics and uncertainty context',
  },
  ru: {
    free: 'Рыночный контекст и примеры сценариев',
    core: 'Полный доступ к сценарным фреймворкам',
    pro: 'Расширенная аналитика и контекст неопределённости',
  },
} as const;

/**
 * Tier taglines for pricing page
 */
export const TIER_TAGLINES = {
  en: {
    core: 'Most professional users start here',
    pro: 'For advanced market participants & desks',
  },
  ru: {
    core: 'С этого уровня начинают большинство профессиональных пользователей',
    pro: 'Для продвинутых участников рынка и аналитических команд',
  },
} as const;

/**
 * User badge labels for header/profile
 */
export const USER_BADGE_LABELS = {
  en: {
    guest: 'Market Preview User',
    free: 'Market Preview User',
    registered: 'Market Preview User',
    core: 'Scenario Access Subscriber',
    pro: 'Scenario Intelligence Subscriber',
    admin: 'Administrator',
  },
  ru: {
    guest: 'Доступ: Рыночный обзор',
    free: 'Доступ: Рыночный обзор',
    registered: 'Доступ: Рыночный обзор',
    core: 'Подписка: Scenario Access',
    pro: 'Подписка: Scenario Intelligence',
    admin: 'Администратор',
  },
} as const;

/**
 * Paywall content
 */
export const PAYWALL_CONTENT = {
  en: {
    title: 'Unlock full market framework',
    description: 'Access full scenario ranges, structural levels, and updates with Scenario Access.',
    cta: 'Upgrade to Scenario Access',
  },
  ru: {
    title: 'Откройте полный рыночный фреймворк',
    description: 'Получите доступ к полным сценарным диапазонам, структурным уровням и обновлениям с тарифом Scenario Access.',
    cta: 'Перейти на Scenario Access',
  },
} as const;

/**
 * Checkout/Stripe labels
 */
export const CHECKOUT_LABELS = {
  en: {
    core: {
      name: 'Scenario Access — Monthly',
      description: 'Scenario-based market intelligence. Full access to structured market frameworks.',
    },
    pro: {
      name: 'Scenario Intelligence — Monthly',
      description: 'Extended market intelligence with analytical bias, scenario weighting, and priority updates.',
    },
  },
  ru: {
    core: {
      name: 'Scenario Access — ежемесячно',
      description: 'Сценарная рыночная аналитика. Полный доступ к структурированным рыночным фреймворкам.',
    },
    pro: {
      name: 'Scenario Intelligence — ежемесячно',
      description: 'Расширенная рыночная аналитика с аналитическим уклоном, сценарным смещением и приоритетными обновлениями.',
    },
  },
} as const;

/**
 * Email template subjects
 */
export const EMAIL_SUBJECTS = {
  en: {
    core: 'Welcome to Scenario Access',
    pro: 'Welcome to Scenario Intelligence',
  },
  ru: {
    core: 'Добро пожаловать в Scenario Access',
    pro: 'Добро пожаловать в Scenario Intelligence',
  },
} as const;

/**
 * Email template bodies
 */
export const EMAIL_BODIES = {
  en: {
    core: 'You now have full access to market scenario frameworks and updates.',
    pro: 'You now have full access to extended scenario frameworks, analytical bias, and priority updates.',
  },
  ru: {
    core: 'Теперь вам доступен полный набор сценарных фреймворков и обновлений рынка.',
    pro: 'Теперь вам доступен расширенный набор сценарных фреймворков, аналитический уклон и приоритетные обновления.',
  },
} as const;

/**
 * Content access level labels
 */
export const ACCESS_LEVEL_LABELS = {
  en: {
    sample: 'Market Preview (limited)',
    core: 'Full Scenario Framework',
    pro: 'Scenario Intelligence Layer',
  },
  ru: {
    sample: 'Рыночный обзор (ограниченно)',
    core: 'Полный сценарный фреймворк',
    pro: 'Уровень Scenario Intelligence',
  },
} as const;

/**
 * Helper function to get tier label
 */
export function getTierLabel(tier: TierValue, language: Language = 'en'): string {
  return TIER_LABELS[language][tier] || TIER_LABELS[language].guest;
}

/**
 * Helper function to get user badge label
 */
export function getUserBadgeLabel(tier: TierValue, language: Language = 'en'): string {
  const labels = USER_BADGE_LABELS[language];
  return labels[tier as keyof typeof labels] || labels.guest;
}

/**
 * Helper function to get tier description
 */
export function getTierDescription(tier: 'free' | 'core' | 'pro', language: Language = 'en'): string {
  return TIER_DESCRIPTIONS[language][tier];
}

/**
 * Helper function to get checkout label
 */
export function getCheckoutLabel(tier: 'core' | 'pro', language: Language = 'en') {
  return CHECKOUT_LABELS[language][tier];
}

/**
 * Helper function to get access level label
 */
export function getAccessLevelLabel(level: 'sample' | 'core' | 'pro', language: Language = 'en'): string {
  return ACCESS_LEVEL_LABELS[language][level];
}
