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

  return await query;
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
  return result.length > 0 ? result[0] : undefined;
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
