/**
 * Paddle Webhook Handler
 * 
 * This module handles incoming Paddle webhook events for subscription lifecycle management.
 * 
 * Supported Events:
 * - subscription.created: New subscription started
 * - subscription.updated: Subscription plan changed or renewed
 * - subscription.canceled: Subscription canceled by user
 * - subscription.paused: Subscription paused
 * - subscription.resumed: Subscription resumed from pause
 * - transaction.completed: Payment successful
 * - transaction.payment_failed: Payment failed
 * 
 * Webhook Setup:
 * 1. Go to Paddle Dashboard → Developer Tools → Notifications
 * 2. Add webhook endpoint: https://yourdomain.com/api/paddle/webhook
 * 3. Select events to receive (at minimum: subscription.*, transaction.completed)
 * 4. Copy the webhook secret and add to PADDLE_WEBHOOK_SECRET env variable
 * 5. Test webhook delivery using Paddle's webhook testing tool
 */

import type { Request, Response } from "express";
import { parseWebhookEvent } from "./paddle";
import { getProductByPriceId } from "../../shared/paddleProducts";
import * as db from "../db";

/**
 * Handle Paddle webhook events
 * 
 * This function processes incoming Paddle webhooks and updates user subscriptions accordingly.
 * It verifies the webhook signature, parses the event, and triggers appropriate actions.
 */
export async function handlePaddleWebhook(req: Request, res: Response) {
  try {
    // Get raw body and signature
    const rawBody = req.body;
    const signature = req.headers["paddle-signature"] as string;

    if (!signature) {
      console.error("[Paddle Webhook] Missing signature header");
      return res.status(400).json({ error: "Missing signature" });
    }

    // Parse and verify webhook event
    let event;
    try {
      event = await parseWebhookEvent(rawBody, signature);
    } catch (error) {
      console.error("[Paddle Webhook] Signature verification failed:", error);
      return res.status(401).json({ error: "Invalid signature" });
    }

    console.log(`[Paddle Webhook] Received event: ${event.eventType} (${event.eventId})`);

    // Process event based on type
    switch (event.eventType) {
      case "subscription.created":
        await handleSubscriptionCreated(event);
        break;

      case "subscription.updated":
        await handleSubscriptionUpdated(event);
        break;

      case "subscription.canceled":
        await handleSubscriptionCanceled(event);
        break;

      case "subscription.paused":
        await handleSubscriptionPaused(event);
        break;

      case "subscription.resumed":
        await handleSubscriptionResumed(event);
        break;

      case "transaction.completed":
        await handleTransactionCompleted(event);
        break;

      case "transaction.payment_failed":
        await handlePaymentFailed(event);
        break;

      default:
        console.log(`[Paddle Webhook] Unhandled event type: ${event.eventType}`);
    }

    // Always return 200 to acknowledge receipt
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("[Paddle Webhook] Error processing webhook:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * Handle subscription.created event
 * Upgrade user role when new subscription is created
 */
async function handleSubscriptionCreated(event: any) {
  try {
    const subscription = event.data;
    const customData = subscription.customData || {};
    const userId = customData.userId;

    if (!userId) {
      console.error("[Paddle Webhook] subscription.created: Missing userId in customData");
      return;
    }

    // Get product info from first item
    const firstItem = subscription.items?.[0];
    if (!firstItem) {
      console.error("[Paddle Webhook] subscription.created: No items in subscription");
      return;
    }

    const product = getProductByPriceId(firstItem.price.id);
    if (!product) {
      console.error(`[Paddle Webhook] subscription.created: Unknown price ID ${firstItem.price.id}`);
      return;
    }

    // Update user role
    const newRole = product.userRole;
    await db.updateUserRole(parseInt(userId), newRole);

    console.log(`[Paddle Webhook] subscription.created: Upgraded user ${userId} to ${newRole}`);
  } catch (error) {
    console.error("[Paddle Webhook] Error handling subscription.created:", error);
  }
}

/**
 * Handle subscription.updated event
 * Update user role if subscription plan changed
 */
async function handleSubscriptionUpdated(event: any) {
  try {
    const subscription = event.data;
    const customData = subscription.customData || {};
    const userId = customData.userId;

    if (!userId) {
      console.error("[Paddle Webhook] subscription.updated: Missing userId in customData");
      return;
    }

    // Check if subscription is still active
    if (subscription.status !== "active") {
      console.log(`[Paddle Webhook] subscription.updated: Subscription ${subscription.id} is not active (status: ${subscription.status})`);
      return;
    }

    // Get product info from first item
    const firstItem = subscription.items?.[0];
    if (!firstItem) {
      console.error("[Paddle Webhook] subscription.updated: No items in subscription");
      return;
    }

    const product = getProductByPriceId(firstItem.price.id);
    if (!product) {
      console.error(`[Paddle Webhook] subscription.updated: Unknown price ID ${firstItem.price.id}`);
      return;
    }

    // Update user role
    const newRole = product.userRole;
    await db.updateUserRole(parseInt(userId), newRole);

    console.log(`[Paddle Webhook] subscription.updated: Updated user ${userId} to ${newRole}`);
  } catch (error) {
    console.error("[Paddle Webhook] Error handling subscription.updated:", error);
  }
}

/**
 * Handle subscription.canceled event
 * Downgrade user role when subscription is canceled
 */
async function handleSubscriptionCanceled(event: any) {
  try {
    const subscription = event.data;
    const customData = subscription.customData || {};
    const userId = customData.userId;

    if (!userId) {
      console.error("[Paddle Webhook] subscription.canceled: Missing userId in customData");
      return;
    }

    // Downgrade to registered user
    await db.updateUserRole(parseInt(userId), "registered");

    console.log(`[Paddle Webhook] subscription.canceled: Downgraded user ${userId} to registered`);
  } catch (error) {
    console.error("[Paddle Webhook] Error handling subscription.canceled:", error);
  }
}

/**
 * Handle subscription.paused event
 * Downgrade user role when subscription is paused
 */
async function handleSubscriptionPaused(event: any) {
  try {
    const subscription = event.data;
    const customData = subscription.customData || {};
    const userId = customData.userId;

    if (!userId) {
      console.error("[Paddle Webhook] subscription.paused: Missing userId in customData");
      return;
    }

    // Downgrade to registered user while paused
    await db.updateUserRole(parseInt(userId), "registered");

    console.log(`[Paddle Webhook] subscription.paused: Downgraded user ${userId} to registered`);
  } catch (error) {
    console.error("[Paddle Webhook] Error handling subscription.paused:", error);
  }
}

/**
 * Handle subscription.resumed event
 * Restore user role when subscription is resumed
 */
async function handleSubscriptionResumed(event: any) {
  try {
    const subscription = event.data;
    const customData = subscription.customData || {};
    const userId = customData.userId;

    if (!userId) {
      console.error("[Paddle Webhook] subscription.resumed: Missing userId in customData");
      return;
    }

    // Get product info from first item
    const firstItem = subscription.items?.[0];
    if (!firstItem) {
      console.error("[Paddle Webhook] subscription.resumed: No items in subscription");
      return;
    }

    const product = getProductByPriceId(firstItem.price.id);
    if (!product) {
      console.error(`[Paddle Webhook] subscription.resumed: Unknown price ID ${firstItem.price.id}`);
      return;
    }

    // Restore user role
    const newRole = product.userRole;
    await db.updateUserRole(parseInt(userId), newRole);

    console.log(`[Paddle Webhook] subscription.resumed: Restored user ${userId} to ${newRole}`);
  } catch (error) {
    console.error("[Paddle Webhook] Error handling subscription.resumed:", error);
  }
}

/**
 * Handle transaction.completed event
 * Log successful payment (optional - role upgrade happens in subscription.created)
 */
async function handleTransactionCompleted(event: any) {
  try {
    const transaction = event.data;
    console.log(`[Paddle Webhook] transaction.completed: Transaction ${transaction.id} completed for ${transaction.customData?.customerEmail}`);
    
    // Additional logging or analytics can be added here
    // Role upgrade is handled by subscription.created event
  } catch (error) {
    console.error("[Paddle Webhook] Error handling transaction.completed:", error);
  }
}

/**
 * Handle transaction.payment_failed event
 * Log failed payment for monitoring
 */
async function handlePaymentFailed(event: any) {
  try {
    const transaction = event.data;
    console.error(`[Paddle Webhook] transaction.payment_failed: Payment failed for transaction ${transaction.id}`);
    
    // Additional error handling or notification logic can be added here
  } catch (error) {
    console.error("[Paddle Webhook] Error handling transaction.payment_failed:", error);
  }
}
