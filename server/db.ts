import { eq, and, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  subscriptions, 
  tradingIdeas, 
  marketInsights, 
  legalPages,
  telegramAccess,
  contactSubmissions,
  Subscription,
  TradingIdea,
  MarketInsight,
  LegalPage,
  TelegramAccess
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserLanguage(userId: number, language: "en" | "ru") {
  const db = await getDb();
  if (!db) return;

  await db.update(users).set({ language }).where(eq(users.id, userId));
}

export async function updateUserTelegramLanguage(userId: number, language: "en" | "ru") {
  const db = await getDb();
  if (!db) return;

  await db.update(users).set({ telegramChannelLanguage: language }).where(eq(users.id, userId));
}

export async function acceptTerms(userId: number) {
  const db = await getDb();
  if (!db) return;

  await db.update(users).set({ 
    termsAccepted: true, 
    termsAcceptedAt: new Date() 
  }).where(eq(users.id, userId));
}

// Subscriptions
export async function getActiveSubscription(userId: number): Promise<Subscription | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(subscriptions)
    .where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active")))
    .orderBy(desc(subscriptions.createdAt))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createSubscription(data: typeof subscriptions.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(subscriptions).values(data);
}

export async function updateSubscription(id: number, data: Partial<typeof subscriptions.$inferInsert>) {
  const db = await getDb();
  if (!db) return;

  await db.update(subscriptions).set(data).where(eq(subscriptions.id, id));
}

// Trading Ideas
export async function getPublishedTradingIdeas(accessLevel?: "sample" | "core" | "pro") {
  const db = await getDb();
  if (!db) return [];

  let query = db
    .select()
    .from(tradingIdeas)
    .where(eq(tradingIdeas.status, "published"))
    .orderBy(desc(tradingIdeas.publishedAt));

  if (accessLevel) {
    query = db
      .select()
      .from(tradingIdeas)
      .where(
        and(
          eq(tradingIdeas.status, "published"),
          eq(tradingIdeas.accessLevel, accessLevel)
        )
      )
      .orderBy(desc(tradingIdeas.publishedAt));
  }

  const rows = await query;

  // If database is empty (common on first deploy), return safe sample defaults.
  if (!rows || rows.length === 0) {
    const now = new Date();
    const defaults: any[] = [
      {
        id: 1,
        instrument: "S&P 500 (US500)",
        market: "indices",
        accessLevel: "sample",
        status: "published",
        publishedAt: now,
        createdAt: now,
        updatedAt: now,
        contextEn:
          "Market environment: elevated volatility with macro headlines. Focus is on structure and liquidity, not prediction.",
        contextRu:
          "Рыночная среда: повышенная волатильность на фоне макро-новостей. Фокус — структура и ликвидность, а не прогноз.",
        scenarioEn:
          "Primary case: continuation under stable structure; Alternative case: structural shift if key conditions fail. Use as an analytical framework only.",
        scenarioRu:
          "Основной сценарий: продолжение при сохранении структуры; Альтернативный: смена структуры при нарушении ключевых условий. Только как аналитическая рамка.",
        invalidationZone: "Structural invalidation reference",
        targetArea: "Reference area (context-dependent)",
      },
      {
        id: 2,
        instrument: "XAUUSD (Gold)",
        market: "metals",
        accessLevel: "sample",
        status: "published",
        publishedAt: now,
        createdAt: now,
        updatedAt: now,
        contextEn:
          "Market environment: trend phases can alternate quickly. Scenario describes conditions, not instructions.",
        contextRu:
          "Рыночная среда: трендовые фазы могут быстро сменяться. Сценарий описывает условия, а не инструкции.",
        scenarioEn:
          "Primary case: momentum persists while volatility remains supportive; Alternative case: mean-reversion regime if volatility compresses and structure weakens.",
        scenarioRu:
          "Основной: импульс сохраняется при подходящем режиме волатильности; Альтернативный: возврат к среднему при сжатии волатильности и ослаблении структуры.",
        invalidationZone: "Structural invalidation reference",
        targetArea: "Reference area (context-dependent)",
      },
    ];

    if (!accessLevel) return defaults;
    return defaults.filter((d) => d.accessLevel === accessLevel);
  }

  return rows;
}

export async function getTradingIdeaById(id: number): Promise<TradingIdea | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(tradingIdeas).where(eq(tradingIdeas.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createTradingIdea(data: typeof tradingIdeas.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(tradingIdeas).values(data);
}

export async function updateTradingIdea(id: number, data: Partial<typeof tradingIdeas.$inferInsert>) {
  const db = await getDb();
  if (!db) return;

  await db.update(tradingIdeas).set(data).where(eq(tradingIdeas.id, id));
}

export async function deleteTradingIdea(id: number) {
  const db = await getDb();
  if (!db) return;

  await db.delete(tradingIdeas).where(eq(tradingIdeas.id, id));
}

// Market Insights
export async function getPublishedMarketInsights() {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(marketInsights)
    .where(eq(marketInsights.status, "published"))
    .orderBy(desc(marketInsights.publishedAt));
}

export async function getMarketInsightBySlug(slug: string, language: "en" | "ru"): Promise<MarketInsight | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const slugColumn = language === "en" ? marketInsights.slugEn : marketInsights.slugRu;
  const result = await db.select().from(marketInsights).where(eq(slugColumn, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createMarketInsight(data: typeof marketInsights.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(marketInsights).values(data);
}

export async function updateMarketInsight(id: number, data: Partial<typeof marketInsights.$inferInsert>) {
  const db = await getDb();
  if (!db) return;

  await db.update(marketInsights).set(data).where(eq(marketInsights.id, id));
}

// Legal Pages
export async function getLegalPage(pageType: string): Promise<LegalPage | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(legalPages).where(eq(legalPages.pageType, pageType as any)).limit(1);
  const page = result.length > 0 ? result[0] : undefined;

  // Fallback defaults (used when DB is empty or contains placeholder duplicates)
  const defaults: Record<string, { titleEn: string; titleRu: string; contentEn: string; contentRu: string; version: number }> = {
    disclaimer: {
      titleEn: "Disclaimer",
      titleRu: "Дисклеймер",
      version: 1,
      contentEn: `
        <h2>General disclaimer</h2>
        <p>Quantis Media is an independent analytical platform. All content is provided strictly for informational and educational purposes and does not constitute investment advice, trading advice, or a solicitation to buy or sell any financial instrument.</p>
        <p>Users are solely responsible for their own decisions and actions. Past performance is not indicative of future results.</p>
      `,
      contentRu: `
        <h2>Общий дисклеймер</h2>
        <p>Quantis Media — независимая аналитическая платформа. Все материалы предоставляются исключительно в информационных и образовательных целях и не являются инвестиционной рекомендацией, торговым советом или предложением купить/продать финансовые инструменты.</p>
        <p>Пользователь самостоятельно принимает решения и несёт ответственность за свои действия. Прошлые результаты не гарантируют будущей доходности.</p>
      `,
    },
    risk_disclosure: {
      titleEn: "Risk Disclosure",
      titleRu: "Раскрытие рисков",
      version: 1,
      contentEn: `
        <h2>Risk disclosure</h2>
        <p>Trading and investing in financial markets involves significant risk and may result in partial or total loss of capital. Markets can be volatile and unpredictable.</p>
        <ul>
          <li>Leverage can amplify gains and losses.</li>
          <li>Liquidity, spreads, and execution conditions may change rapidly.</li>
          <li>Macroeconomic events can lead to sharp price moves.</li>
        </ul>
        <p>Quantis Media does not provide execution services and does not control user accounts. Any use of the platform materials is at the user’s own risk.</p>
      `,
      contentRu: `
        <h2>Раскрытие рисков</h2>
        <p>Торговля и инвестиции на финансовых рынках связаны с существенными рисками и могут привести к частичной или полной потере капитала. Рынки могут быть волатильными и непредсказуемыми.</p>
        <ul>
          <li>Кредитное плечо усиливает как прибыль, так и убытки.</li>
          <li>Ликвидность, спреды и условия исполнения могут быстро меняться.</li>
          <li>Макроэкономические события способны вызывать резкие движения цены.</li>
        </ul>
        <p>Quantis Media не оказывает услуг по исполнению сделок и не управляет счетами пользователей. Использование материалов платформы осуществляется на риск пользователя.</p>
      `,
    },
    terms: {
      titleEn: "Terms of Service",
      titleRu: "Условия использования",
      version: 1,
      contentEn: `
        <h2>Terms</h2>
        <p>By accessing or using Quantis Media, you agree to these Terms. If you do not agree, do not use the platform.</p>
        <h3>Nature of service</h3>
        <p>Quantis Media provides analytical and educational content only. No personalized advice is provided.</p>
        <h3>Subscriptions</h3>
        <p>Subscriptions grant access to private content for the subscription period. Access may be suspended or revoked in case of violations of community rules or misuse.</p>
        <h3>Limitation of liability</h3>
        <p>Quantis Media shall not be liable for any losses or damages arising from the use of the content.</p>
      `,
      contentRu: `
        <h2>Условия</h2>
        <p>Используя Quantis Media, вы соглашаетесь с настоящими условиями. Если вы не согласны — не используйте платформу.</p>
        <h3>Характер сервиса</h3>
        <p>Quantis Media предоставляет исключительно аналитические и образовательные материалы. Персональные рекомендации не предоставляются.</p>
        <h3>Подписки</h3>
        <p>Подписка предоставляет доступ к закрытому контенту на срок подписки. Доступ может быть приостановлен/отозван при нарушении правил сообщества или злоупотреблении сервисом.</p>
        <h3>Ограничение ответственности</h3>
        <p>Quantis Media не несёт ответственности за убытки или ущерб, возникшие в результате использования материалов.</p>
      `,
    },
    privacy: {
      titleEn: "Privacy Policy",
      titleRu: "Политика конфиденциальности",
      version: 1,
      contentEn: `
        <h2>Privacy</h2>
        <p>We collect only the data necessary to operate the platform (e.g., account identifiers, subscription status, and basic contact details).</p>
        <p>We do not sell personal data. We may use service providers for hosting and payments.</p>
        <p>You can request access, correction, or deletion of your data by contacting support.</p>
      `,
      contentRu: `
        <h2>Конфиденциальность</h2>
        <p>Мы собираем только данные, необходимые для работы платформы (например, идентификаторы аккаунта, статус подписки и базовые контактные данные).</p>
        <p>Мы не продаём персональные данные. Мы можем использовать сторонних провайдеров для хостинга и платежей.</p>
        <p>Вы можете запросить доступ, исправление или удаление данных, написав в поддержку.</p>
      `,
    },
    cookie: {
      titleEn: "Cookie Policy",
      titleRu: "Политика cookie",
      version: 1,
      contentEn: `
        <h2>Cookies</h2>
        <p>We use cookies and similar technologies to ensure essential functionality (e.g., authentication) and to improve user experience.</p>
        <p>You may disable cookies in your browser settings; some features may not work properly.</p>
      `,
      contentRu: `
        <h2>Cookie</h2>
        <p>Мы используем cookie и аналогичные технологии для обеспечения базовой функциональности (например, авторизация) и улучшения пользовательского опыта.</p>
        <p>Вы можете отключить cookie в настройках браузера — часть функций может работать некорректно.</p>
      `,
    },
  };

  // If missing entirely — return default
  if (!page) {
    const d = defaults[pageType];
    if (!d) return undefined;
    return {
      id: 0,
      pageType: pageType as any,
      titleEn: d.titleEn,
      titleRu: d.titleRu,
      contentEn: d.contentEn,
      contentRu: d.contentRu,
      version: d.version,
      effectiveDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any;
  }

  // If non-disclaimer pages accidentally contain duplicate disclaimer content, return safer defaults
  if (pageType !== "disclaimer") {
    const disclaimer = defaults["disclaimer"];
    const looksDuplicated =
      (page.contentEn || "").trim() === disclaimer.contentEn.trim() ||
      (page.contentRu || "").trim() === disclaimer.contentRu.trim();
    if (looksDuplicated && defaults[pageType]) {
      const d = defaults[pageType];
      return {
        ...page,
        titleEn: d.titleEn,
        titleRu: d.titleRu,
        contentEn: d.contentEn,
        contentRu: d.contentRu,
        version: Math.max(page.version || 1, d.version),
      } as any;
    }
  }

  return page;
}

export async function upsertLegalPage(data: typeof legalPages.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(legalPages).values(data).onDuplicateKeyUpdate({
    set: {
      titleEn: data.titleEn,
      titleRu: data.titleRu,
      contentEn: data.contentEn,
      contentRu: data.contentRu,
      version: data.version,
      effectiveDate: data.effectiveDate,
      updatedAt: new Date(),
    },
  });
}

// Telegram Access
export async function getTelegramAccess(userId: number): Promise<TelegramAccess | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(telegramAccess).where(eq(telegramAccess.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function upsertTelegramAccess(data: typeof telegramAccess.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(telegramAccess).values(data).onDuplicateKeyUpdate({
    set: {
      inviteLink: data.inviteLink,
      channelAccess: data.channelAccess,
      accessGrantedAt: data.accessGrantedAt,
      status: data.status,
      updatedAt: new Date(),
    },
  });
}

export async function revokeTelegramAccess(userId: number) {
  const db = await getDb();
  if (!db) return;

  await db.update(telegramAccess).set({
    status: "revoked",
    accessRevokedAt: new Date(),
  }).where(eq(telegramAccess.userId, userId));
}

// Contact Submissions
export async function createContactSubmission(data: typeof contactSubmissions.$inferInsert) {
  const db = await getDb();
  if (!db) return;

  await db.insert(contactSubmissions).values(data);
}

export async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}

// Activity Tracking
export async function trackScenarioView(userId: number, scenarioId: string, scenarioTitle: string) {
  const db = await getDb();
  if (!db) return;

  const { userActivity } = await import("../drizzle/schema");

  await db.insert(userActivity).values({
    userId,
    activityType: "viewed_scenario",
    resourceId: scenarioId,
    resourceTitle: scenarioTitle,
  });
}

export async function getUserActivity(userId: number, limit: number = 50) {
  const db = await getDb();
  if (!db) return [];

  const { userActivity } = await import("../drizzle/schema");

  return await db
    .select()
    .from(userActivity)
    .where(eq(userActivity.userId, userId))
    .orderBy(desc(userActivity.createdAt))
    .limit(limit);
}

export async function getAllUsersActivity(limit: number = 100) {
  const db = await getDb();
  if (!db) return [];

  const { userActivity } = await import("../drizzle/schema");

  return await db
    .select({
      id: userActivity.id,
      userId: userActivity.userId,
      activityType: userActivity.activityType,
      resourceId: userActivity.resourceId,
      resourceTitle: userActivity.resourceTitle,
      createdAt: userActivity.createdAt,
      userName: users.name,
      userEmail: users.email,
    })
    .from(userActivity)
    .leftJoin(users, eq(userActivity.userId, users.id))
    .orderBy(desc(userActivity.createdAt))
    .limit(limit);
}

export async function getPopularScenarios(limit: number = 10) {
  const db = await getDb();
  if (!db) return [];

  const { userActivity } = await import("../drizzle/schema");
  const { sql } = await import("drizzle-orm");

  return await db
    .select({
      resourceId: userActivity.resourceId,
      resourceTitle: userActivity.resourceTitle,
      viewCount: sql<number>`COUNT(*)`.as("viewCount"),
    })
    .from(userActivity)
    .where(eq(userActivity.activityType, "viewed_scenario"))
    .groupBy(userActivity.resourceId, userActivity.resourceTitle)
    .orderBy(desc(sql`COUNT(*)`))
    .limit(limit);
}

export async function getUserStats(userId: number) {
  const db = await getDb();
  if (!db) return { totalViews: 0, lastActive: null };

  const { userActivity } = await import("../drizzle/schema");
  const { sql } = await import("drizzle-orm");

  const result = await db
    .select({
      totalViews: sql<number>`COUNT(*)`.as("totalViews"),
      lastActive: sql<Date | null>`MAX(${userActivity.createdAt})`.as("lastActive"),
    })
    .from(userActivity)
    .where(and(eq(userActivity.userId, userId), eq(userActivity.activityType, "viewed_scenario")));

  return result[0] || { totalViews: 0, lastActive: null };
}

export async function getAllUsers() {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(users)
    .orderBy(desc(users.lastSignedIn));
}

/**
 * Update user role (for subscription management)
 */
export async function updateUserRole(userId: number, role: "guest" | "registered" | "core" | "pro" | "admin"): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user role: database not available");
    return;
  }

  try {
    await db.update(users).set({ role }).where(eq(users.id, userId));
    console.log(`[Database] Updated user ${userId} role to ${role}`);
  } catch (error) {
    console.error("[Database] Failed to update user role:", error);
    throw error;
  }
}
