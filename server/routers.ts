import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import * as db from "./db";

// Admin-only procedure
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

// Subscriber procedure (core or pro)
const subscriberProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (!["core", "pro", "admin"].includes(ctx.user.role)) {
    throw new TRPCError({ code: "FORBIDDEN", message: "Active subscription required" });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
    updateLanguage: protectedProcedure
      .input(z.object({ language: z.enum(["en", "ru"]) }))
      .mutation(async ({ ctx, input }) => {
        await db.updateUserLanguage(ctx.user.id, input.language);
        return { success: true };
      }),
    acceptTerms: protectedProcedure.mutation(async ({ ctx }) => {
      await db.acceptTerms(ctx.user.id);
      return { success: true };
    }),
  }),

  activity: router({
    trackScenarioView: protectedProcedure
      .input(z.object({
        scenarioId: z.string(),
        scenarioTitle: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.trackScenarioView(ctx.user.id, input.scenarioId, input.scenarioTitle);
        return { success: true };
      }),
    getUserActivity: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserActivity(ctx.user.id);
    }),
    getRecentActivity: protectedProcedure
      .input(z.object({ limit: z.number().optional() }))
      .query(async ({ ctx, input }) => {
        return await db.getUserActivity(ctx.user.id, input.limit || 10);
      }),
  }),

  subscription: router({
    getCurrent: protectedProcedure.query(async ({ ctx }) => {
      return await db.getActiveSubscription(ctx.user.id);
    }),
    create: protectedProcedure
      .input(z.object({
        plan: z.enum(["free", "core", "pro"]),
        stripeCustomerId: z.string().optional(),
        stripeSubscriptionId: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.createSubscription({
          userId: ctx.user.id,
          plan: input.plan,
          status: "active",
          stripeCustomerId: input.stripeCustomerId,
          stripeSubscriptionId: input.stripeSubscriptionId,
          currentPeriodStart: new Date(),
          currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });
        return { success: true };
      }),
  }),

  tradingIdeas: router({
    getPublished: publicProcedure
      .input(z.object({ accessLevel: z.enum(["sample", "core", "pro"]).optional() }))
      .query(async ({ input }) => {
        return await db.getPublishedTradingIdeas(input.accessLevel);
      }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.getTradingIdeaById(input.id);
      }),
    getSample: publicProcedure.query(async () => {
      return await db.getPublishedTradingIdeas("sample");
    }),
    getSubscriberIdeas: subscriberProcedure.query(async ({ ctx }) => {
      const accessLevel = ctx.user.role === "pro" ? "pro" : "core";
      return await db.getPublishedTradingIdeas(accessLevel);
    }),
    create: adminProcedure
      .input(z.object({
        instrument: z.string(),
        contextEn: z.string(),
        contextRu: z.string(),
        scenarioEn: z.string(),
        scenarioRu: z.string(),
        invalidationZone: z.string(),
        targetArea: z.string(),
        market: z.enum(["indices", "fx", "energy", "metals"]),
        accessLevel: z.enum(["sample", "core", "pro"]),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.createTradingIdea({
          ...input,
          authorId: ctx.user.id,
          publishedAt: input.status === "published" ? new Date() : undefined,
        });
        return { success: true };
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        data: z.object({
          instrument: z.string().optional(),
          contextEn: z.string().optional(),
          contextRu: z.string().optional(),
          scenarioEn: z.string().optional(),
          scenarioRu: z.string().optional(),
          invalidationZone: z.string().optional(),
          targetArea: z.string().optional(),
          market: z.enum(["indices", "fx", "energy", "metals"]).optional(),
          accessLevel: z.enum(["sample", "core", "pro"]).optional(),
          status: z.enum(["draft", "published", "archived"]).optional(),
        }),
      }))
      .mutation(async ({ input }) => {
        const updateData: any = { ...input.data };
        if (input.data.status === "published" && !updateData.publishedAt) {
          updateData.publishedAt = new Date();
        }
        await db.updateTradingIdea(input.id, updateData);
        return { success: true };
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.deleteTradingIdea(input.id);
        return { success: true };
      }),
  }),

  marketInsights: router({
    getPublished: publicProcedure.query(async () => {
      return await db.getPublishedMarketInsights();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string(), language: z.enum(["en", "ru"]) }))
      .query(async ({ input }) => {
        return await db.getMarketInsightBySlug(input.slug, input.language);
      }),
    create: adminProcedure
      .input(z.object({
        titleEn: z.string(),
        titleRu: z.string(),
        slugEn: z.string(),
        slugRu: z.string(),
        excerptEn: z.string(),
        excerptRu: z.string(),
        contentEn: z.string(),
        contentRu: z.string(),
        coverImageUrl: z.string().optional(),
        market: z.enum(["indices", "fx", "energy", "metals", "global_macro"]),
        contentType: z.enum(["analysis", "daily_outlook", "weekly_outlook"]).default("analysis"),
        accessLevel: z.enum(["sample", "core", "pro"]).default("pro"),
        status: z.enum(["draft", "published", "archived"]),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.createMarketInsight({
          ...input,
          authorId: ctx.user.id,
          publishedAt: input.status === "published" ? new Date() : undefined,
        });
        return { success: true };
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        data: z.object({
          titleEn: z.string().optional(),
          titleRu: z.string().optional(),
          slugEn: z.string().optional(),
          slugRu: z.string().optional(),
          excerptEn: z.string().optional(),
          excerptRu: z.string().optional(),
          contentEn: z.string().optional(),
          contentRu: z.string().optional(),
          coverImageUrl: z.string().optional(),
          market: z.enum(["indices", "fx", "energy", "metals", "global_macro"]).optional(),
          contentType: z.enum(["analysis", "daily_outlook", "weekly_outlook"]).optional(),
          accessLevel: z.enum(["sample", "core", "pro"]).optional(),
          status: z.enum(["draft", "published", "archived"]).optional(),
        }),
      }))
      .mutation(async ({ input }) => {
        const updateData: any = { ...input.data };
        if (input.data.status === "published" && !updateData.publishedAt) {
          updateData.publishedAt = new Date();
        }
        await db.updateMarketInsight(input.id, updateData);
        return { success: true };
      }),
  }),

  legal: router({
    getPage: publicProcedure
      .input(z.object({ pageType: z.enum(["disclaimer", "risk_disclosure", "terms", "privacy", "cookie"]) }))
      .query(async ({ input }) => {
        return await db.getLegalPage(input.pageType);
      }),
    upsert: adminProcedure
      .input(z.object({
        pageType: z.enum(["disclaimer", "risk_disclosure", "terms", "privacy", "cookie"]),
        titleEn: z.string(),
        titleRu: z.string(),
        contentEn: z.string(),
        contentRu: z.string(),
        version: z.number(),
        effectiveDate: z.date(),
      }))
      .mutation(async ({ input }) => {
        await db.upsertLegalPage(input);
        return { success: true };
      }),
  }),

  telegram: router({
    getAccess: subscriberProcedure.query(async ({ ctx }) => {
      return await db.getTelegramAccess(ctx.user.id);
    }),
    updateChannelLanguage: subscriberProcedure
      .input(z.object({ language: z.enum(["en", "ru"]) }))
      .mutation(async ({ ctx, input }) => {
        await db.updateUserTelegramLanguage(ctx.user.id, input.language);
        return { success: true };
      }),
    generateInvite: subscriberProcedure.mutation(async ({ ctx }) => {
      // TODO: Implement actual Telegram invite link generation
      const inviteLink = `https://t.me/+PLACEHOLDER_${ctx.user.id}`;
      const channels = ctx.user.role === "pro" 
        ? ["indices", "fx", "energy", "metals", "community"]
        : ["indices", "fx", "energy", "metals"];
      
      await db.upsertTelegramAccess({
        userId: ctx.user.id,
        inviteLink,
        channelAccess: JSON.stringify(channels),
        accessGrantedAt: new Date(),
        status: "active",
      });
      
      return { inviteLink, channels };
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email(),
        subject: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        await db.createContactSubmission(input);
        return { success: true };
      }),
    getAll: adminProcedure.query(async () => {
      return await db.getAllContactSubmissions();
    }),
  }),

  admin: router({
    getStats: adminProcedure.query(async () => {
      const allUsers = await db.getAllUsers();
      const totalUsers = allUsers.length;
      const activeUsers = allUsers.filter(u => 
        u.lastSignedIn && (Date.now() - new Date(u.lastSignedIn).getTime()) < 7 * 24 * 60 * 60 * 1000
      ).length;
      const coreUsers = allUsers.filter(u => u.role === "core").length;
      const proUsers = allUsers.filter(u => u.role === "pro").length;
      
      return {
        totalUsers,
        activeUsers,
        coreUsers,
        proUsers,
        registeredUsers: totalUsers - coreUsers - proUsers,
      };
    }),
    getAllUsers: adminProcedure.query(async () => {
      return await db.getAllUsers();
    }),
    getPopularScenarios: adminProcedure
      .input(z.object({ limit: z.number().optional() }))
      .query(async ({ input }) => {
        return await db.getPopularScenarios(input.limit || 10);
      }),
    getAllActivity: adminProcedure
      .input(z.object({ limit: z.number().optional() }))
      .query(async ({ input }) => {
        return await db.getAllUsersActivity(input.limit || 100);
      }),
    updateUserRole: adminProcedure
      .input(z.object({ userId: z.number(), role: z.enum(["guest", "registered", "core", "pro", "admin"]) }))
      .mutation(async ({ input }) => {
        const dbInstance = await db.getDb();
        if (!dbInstance) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        const { users } = await import("../drizzle/schema");
        await dbInstance.update(users).set({ role: input.role }).where((users as any).id.eq(input.userId));
        return { success: true };
      }),
  }),

  // Paddle Payment Integration
  paddle: router({
    // Create checkout session for subscription purchase
    createCheckout: protectedProcedure
      .input(z.object({
        productId: z.enum(["scenario_access", "scenario_intelligence"]),
      }))
      .mutation(async ({ ctx, input }) => {
        const { createCheckoutSession, getOrCreateCustomer } = await import("./_core/paddle");
        const { PADDLE_PRODUCTS } = await import("../shared/paddleProducts");

        const product = Object.values(PADDLE_PRODUCTS).find(p => p.id === input.productId);
        if (!product) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid product ID" });
        }

        try {
          // Get or create Paddle customer
          if (!ctx.user.email) {
            throw new TRPCError({ code: "BAD_REQUEST", message: "User email is required" });
          }
          const paddleCustomerId = await getOrCreateCustomer(
            ctx.user.email,
            ctx.user.name || undefined
          );

          // Create checkout session
          const origin = ctx.req.headers.origin || "http://localhost:3000";
          const checkoutUrl = await createCheckoutSession({
            priceId: product.priceId,
            customerId: paddleCustomerId,
            customerEmail: ctx.user.email,
            customerName: ctx.user.name || "",
            userId: ctx.user.id.toString(),
            successUrl: `${origin}/dashboard?payment=success`,
            cancelUrl: `${origin}/pricing?payment=canceled`,
          });

          return { checkoutUrl };
        } catch (error) {
          console.error("[Paddle] Checkout creation failed:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to create checkout session. Please try again later.",
          });
        }
      }),

    // Get customer portal URL for managing subscriptions
    getPortalUrl: protectedProcedure.query(async ({ ctx }) => {
      const { getCustomerPortalUrl, getOrCreateCustomer } = await import("./_core/paddle");

      try {
        if (!ctx.user.email) {
          throw new TRPCError({ code: "BAD_REQUEST", message: "User email is required" });
        }
        const paddleCustomerId = await getOrCreateCustomer(ctx.user.email, ctx.user.name || undefined);
        const portalUrl = await getCustomerPortalUrl(paddleCustomerId);
        return { portalUrl };
      } catch (error) {
        console.error("[Paddle] Failed to get portal URL:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to access customer portal.",
        });
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
