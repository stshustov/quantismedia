# Paddle Payment Integration Guide

## Overview
This document outlines the steps to integrate Paddle payment processing for Quantis Media subscription plans.

## Prerequisites
1. Register for a Paddle account at https://paddle.com
2. Complete business verification
3. Obtain Paddle API credentials (Vendor ID, API Key, Public Key)

## Integration Steps

### 1. Environment Variables
Add these environment variables to your `.env` file and Render dashboard:

```env
# Paddle Configuration
VITE_PADDLE_VENDOR_ID=your_vendor_id_here
VITE_PADDLE_ENVIRONMENT=sandbox  # Change to 'production' when ready
PADDLE_API_KEY=your_api_key_here  # Server-side only
PADDLE_PUBLIC_KEY=your_public_key_here  # Server-side only
```

### 2. Create Paddle Products
In your Paddle dashboard, create two subscription products:

**Core Plan ($39/month)**
- Product Name: Quantis Media Core
- Billing Cycle: Monthly
- Price: $39 USD
- Description: Full access to core scenario library

**Pro Plan ($89/month)**
- Product Name: Quantis Media Pro
- Billing Cycle: Monthly
- Price: $89 USD
- Description: Extended scenarios + closed community

Save the Product IDs for each plan.

### 3. Update Pricing Page
Replace the placeholder alert in `client/src/pages/Pricing.tsx` with Paddle checkout:

```typescript
import { useEffect } from "react";

// Load Paddle script
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.paddle.com/paddle/paddle.js";
  script.async = true;
  document.body.appendChild(script);
  
  script.onload = () => {
    if (window.Paddle) {
      window.Paddle.Setup({
        vendor: parseInt(import.meta.env.VITE_PADDLE_VENDOR_ID),
        eventCallback: (data: any) => {
          if (data.event === "Checkout.Complete") {
            // Handle successful checkout
            console.log("Checkout complete:", data);
          }
        }
      });
    }
  };
  
  return () => {
    document.body.removeChild(script);
  };
}, []);

// Replace alert with Paddle checkout
onClick={() => {
  if (plan.name === "Core") {
    window.Paddle.Checkout.open({
      product: CORE_PRODUCT_ID,  // Replace with actual ID
      email: user?.email || "",
      passthrough: JSON.stringify({
        userId: user?.id,
        plan: "core"
      })
    });
  } else if (plan.name === "Pro") {
    window.Paddle.Checkout.open({
      product: PRO_PRODUCT_ID,  // Replace with actual ID
      email: user?.email || "",
      passthrough: JSON.stringify({
        userId: user?.id,
        plan: "pro"
      })
    });
  }
}}
```

### 4. Webhook Handler
Create a webhook endpoint in `server/routers.ts` to handle Paddle events:

```typescript
import crypto from "crypto";

// Paddle webhook verification
function verifyPaddleWebhook(body: any, signature: string): boolean {
  const publicKey = process.env.PADDLE_PUBLIC_KEY!;
  
  // Sort keys alphabetically
  const sorted = {};
  Object.keys(body).sort().forEach(key => {
    if (key !== "p_signature") {
      sorted[key] = body[key];
    }
  });
  
  // Serialize
  const serialized = Object.entries(sorted)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  
  // Verify signature
  const verifier = crypto.createVerify("sha1");
  verifier.update(serialized);
  return verifier.verify(publicKey, signature, "base64");
}

// Webhook endpoint
paddleWebhook: publicProcedure
  .input(z.any())
  .mutation(async ({ input, ctx }) => {
    const { p_signature, alert_name, passthrough, subscription_id, status } = input;
    
    // Verify webhook
    if (!verifyPaddleWebhook(input, p_signature)) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid signature" });
    }
    
    const data = JSON.parse(passthrough);
    
    // Handle different events
    switch (alert_name) {
      case "subscription_created":
      case "subscription_updated":
        // Update user role in database
        await ctx.db.update(users)
          .set({ 
            role: data.plan,
            subscriptionId: subscription_id,
            subscriptionStatus: status
          })
          .where(eq(users.id, data.userId));
        break;
        
      case "subscription_cancelled":
      case "subscription_payment_failed":
        // Downgrade user to registered
        await ctx.db.update(users)
          .set({ 
            role: "registered",
            subscriptionStatus: status
          })
          .where(eq(users.id, data.userId));
        break;
    }
    
    return { success: true };
  }),
```

### 5. Configure Paddle Webhook
In Paddle dashboard:
1. Go to Developer Tools → Webhooks
2. Add webhook URL: `https://your-domain.com/api/trpc/paddleWebhook`
3. Select events: subscription_created, subscription_updated, subscription_cancelled, subscription_payment_failed

### 6. Testing
1. Use Paddle Sandbox environment for testing
2. Test checkout flow with test cards
3. Verify webhook events are received
4. Confirm user roles are updated correctly

### 7. Go Live
1. Switch `VITE_PADDLE_ENVIRONMENT` to `production`
2. Update webhook URL to production domain
3. Test with real payment method
4. Monitor Paddle dashboard for transactions

## Telegram Integration
Once Paddle is working, you can add Telegram channel links:

```env
# Telegram Configuration
VITE_TELEGRAM_CHANNEL=https://t.me/your_channel_link
VITE_TELEGRAM_PRO_COMMUNITY=https://t.me/your_pro_community_link
```

## Support
- Paddle Documentation: https://developer.paddle.com/
- Paddle Support: support@paddle.com
- Quantis Media: Contact via /contact page

## Security Notes
- Never expose `PADDLE_API_KEY` or `PADDLE_PUBLIC_KEY` to frontend
- Always verify webhook signatures
- Use HTTPS for all webhook endpoints
- Store sensitive credentials in environment variables only
