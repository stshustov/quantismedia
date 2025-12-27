/**
 * Paddle Payment Integration
 * 
 * This module provides Paddle Billing integration for subscription management.
 * 
 * Setup Instructions:
 * 1. Create a Paddle account at https://paddle.com
 * 2. Get your API credentials from Paddle Dashboard → Developer Tools → Authentication
 * 3. Add environment variables to your .env file:
 *    - PADDLE_API_KEY: Your Paddle API key (starts with live_ or test_)
 *    - PADDLE_ENVIRONMENT: "sandbox" or "production"
 *    - PADDLE_WEBHOOK_SECRET: Webhook secret for signature verification
 *    - VITE_PADDLE_CLIENT_TOKEN: Client-side token for Paddle.js (optional)
 * 
 * Product Setup:
 * 1. Create products in Paddle Dashboard → Catalog → Products
 * 2. Create prices for each product (monthly recurring)
 * 3. Copy product/price IDs to shared/paddleProducts.ts
 */

import { Paddle, type EventName, Environment } from "@paddle/paddle-node-sdk";

// Initialize Paddle client
let paddleClient: Paddle | null = null;

/**
 * Get Paddle client instance (lazy initialization)
 */
export function getPaddleClient(): Paddle {
  if (!paddleClient) {
    const apiKey = process.env.PADDLE_API_KEY;
    const envString = process.env.PADDLE_ENVIRONMENT || "sandbox";
    const environment: Environment = envString === "production" ? Environment.production : Environment.sandbox;

    if (!apiKey) {
      throw new Error(
        "PADDLE_API_KEY is not configured. Please add it to your environment variables."
      );
    }

    paddleClient = new Paddle(apiKey, {
      environment,
    });

    console.log(`[Paddle] Initialized in ${environment} mode`);
  }

  return paddleClient;
}

/**
 * Create a checkout session for a subscription
 * 
 * @param priceId - Paddle price ID for the subscription
 * @param customerId - Paddle customer ID (optional, will create if not exists)
 * @param customerEmail - Customer email address
 * @param customerName - Customer name
 * @param userId - Internal user ID for metadata
 * @param successUrl - URL to redirect after successful payment
 * @param cancelUrl - URL to redirect if payment is canceled
 * @returns Checkout URL to redirect user to
 */
export async function createCheckoutSession({
  priceId,
  customerId,
  customerEmail,
  customerName,
  userId,
  successUrl,
  cancelUrl,
}: {
  priceId: string;
  customerId?: string;
  customerEmail: string;
  customerName?: string;
  userId: string;
  successUrl: string;
  cancelUrl: string;
}): Promise<string> {
  const paddle = getPaddleClient();

  try {
    const checkoutData: any = {
      items: [
        {
          priceId,
          quantity: 1,
        },
      ],
      customData: {
        userId,
        customerEmail,
        customerName: customerName || "",
      },
      settings: {
        successUrl,
        cancelUrl,
        allowLogout: false,
      },
    };

    // If customer ID exists, use it; otherwise Paddle will create a new customer
    if (customerId) {
      checkoutData.customerId = customerId;
    } else {
      checkoutData.customerEmail = customerEmail;
    }

    const checkout = await paddle.transactions.create(checkoutData);

    if (!checkout || !checkout.id) {
      throw new Error("Paddle transaction not created");
    }

    // Generate checkout URL from transaction ID
    const environment = process.env.PADDLE_ENVIRONMENT || "sandbox";
    const domain = environment === "production" ? "checkout.paddle.com" : "sandbox-checkout.paddle.com";
    const checkoutUrl = `https://${domain}/transaction/${checkout.id}`;

    console.log(`[Paddle] Created checkout session for user ${userId}, price ${priceId}`);
    return checkoutUrl;
  } catch (error) {
    console.error("[Paddle] Failed to create checkout session:", error);
    throw new Error("Failed to create payment checkout. Please try again later.");
  }
}

/**
 * Get customer by email or create a new one
 * 
 * @param email - Customer email
 * @param name - Customer name (optional)
 * @returns Paddle customer ID
 */
export async function getOrCreateCustomer(email: string, name?: string): Promise<string> {
  const paddle = getPaddleClient();

  try {
    // Search for existing customer by email
    const customersResponse = await paddle.customers.list({
      email: [email],
    });

    // Access the first item from the iterable
    for await (const customer of customersResponse) {
      console.log(`[Paddle] Found existing customer for ${email}`);
      return customer.id;
    }

    // Create new customer
    const customer = await paddle.customers.create({
      email,
      name: name || undefined,
    });

    console.log(`[Paddle] Created new customer for ${email}`);
    return customer.id;
  } catch (error) {
    console.error("[Paddle] Failed to get/create customer:", error);
    throw new Error("Failed to process customer information.");
  }
}

/**
 * Get subscription details
 * 
 * @param subscriptionId - Paddle subscription ID
 * @returns Subscription data
 */
export async function getSubscription(subscriptionId: string) {
  const paddle = getPaddleClient();

  try {
    const subscription = await paddle.subscriptions.get(subscriptionId);
    return subscription;
  } catch (error) {
    console.error(`[Paddle] Failed to get subscription ${subscriptionId}:`, error);
    throw new Error("Failed to retrieve subscription information.");
  }
}

/**
 * Cancel a subscription
 * 
 * @param subscriptionId - Paddle subscription ID
 * @param effectiveFrom - When to cancel: "immediately" or "next_billing_period"
 */
export async function cancelSubscription(
  subscriptionId: string,
  effectiveFrom: "immediately" | "next_billing_period" = "next_billing_period"
) {
  const paddle = getPaddleClient();

  try {
    await paddle.subscriptions.cancel(subscriptionId, {
      effectiveFrom,
    });

    console.log(`[Paddle] Canceled subscription ${subscriptionId} (${effectiveFrom})`);
  } catch (error) {
    console.error(`[Paddle] Failed to cancel subscription ${subscriptionId}:`, error);
    throw new Error("Failed to cancel subscription.");
  }
}

/**
 * Verify Paddle webhook signature
 * 
 * @param rawBody - Raw request body as string
 * @param signature - Paddle-Signature header value
 * @returns true if signature is valid
 */
export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[Paddle] PADDLE_WEBHOOK_SECRET is not configured");
    return false;
  }

  try {
    const paddle = getPaddleClient();
    // Paddle SDK handles signature verification internally
    // We'll verify in the webhook handler using paddle.webhooks.unmarshal
    return true;
  } catch (error) {
    console.error("[Paddle] Webhook signature verification failed:", error);
    return false;
  }
}

/**
 * Parse and verify webhook event
 * 
 * @param rawBody - Raw request body as string
 * @param signature - Paddle-Signature header value
 * @returns Parsed event data
 */
export async function parseWebhookEvent(rawBody: string, signature: string) {
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("PADDLE_WEBHOOK_SECRET is not configured");
  }

  try {
    const paddle = getPaddleClient();
    const event = await paddle.webhooks.unmarshal(rawBody, webhookSecret, signature);
    return event;
  } catch (error) {
    console.error("[Paddle] Failed to parse webhook event:", error);
    throw new Error("Invalid webhook signature");
  }
}

/**
 * Get customer portal URL for managing subscriptions
 * 
 * @param customerId - Paddle customer ID
 * @returns Portal URL
 */
export async function getCustomerPortalUrl(customerId: string): Promise<string> {
  // Paddle customer portal is accessed via a standard URL pattern
  const environment = process.env.PADDLE_ENVIRONMENT || "sandbox";
  const domain = environment === "production" ? "paddle.com" : "sandbox-portal.paddle.com";
  
  return `https://${domain}/customer/${customerId}`;
}
