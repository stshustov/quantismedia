import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(role: "registered" | "core" | "pro" | "admin" = "registered"): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: role,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
    language: "en",
    termsAccepted: true,
    termsAcceptedAt: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("subscription procedures", () => {
  it("should allow authenticated users to query their subscription", async () => {
    const { ctx } = createAuthContext("core");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.getCurrent();
    
    // Should not throw error and return subscription or undefined
    expect(result === undefined || typeof result === "object").toBe(true);
  });

  it("should allow authenticated users to create subscription", async () => {
    const { ctx } = createAuthContext("registered");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.subscription.create({
      plan: "core",
    });
    
    expect(result).toEqual({ success: true });
  });
});

describe("trading ideas procedures", () => {
  it("should allow public access to sample trading ideas", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    const result = await caller.tradingIdeas.getSample();
    
    expect(Array.isArray(result)).toBe(true);
  });

  it("should require subscription for subscriber ideas", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    
    await expect(caller.tradingIdeas.getSubscriberIdeas()).rejects.toThrow();
  });

  it("should allow core subscribers to access trading ideas", async () => {
    const { ctx } = createAuthContext("core");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.tradingIdeas.getSubscriberIdeas();
    
    expect(Array.isArray(result)).toBe(true);
  });
});

describe("contact procedures", () => {
  it("should allow public contact form submission", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test message content",
    });
    
    expect(result).toEqual({ success: true });
  });
});

describe("legal procedures", () => {
  it("should allow public access to legal pages", async () => {
    const ctx: TrpcContext = {
      user: undefined,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);
    const result = await caller.legal.getPage({ pageType: "disclaimer" });
    
    expect(result).toBeDefined();
    if (result) {
      expect(result.pageType).toBe("disclaimer");
      expect(result.titleEn).toBeDefined();
      expect(result.contentEn).toBeDefined();
    }
  });
});

describe("admin procedures", () => {
  it("should deny non-admin users from accessing admin procedures", async () => {
    const { ctx } = createAuthContext("core");
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.getAllUsers()).rejects.toThrow("Admin access required");
  });

  it("should allow admin users to access admin procedures", async () => {
    const { ctx } = createAuthContext("admin");
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.getAllUsers();
    
    expect(Array.isArray(result)).toBe(true);
  });
});
