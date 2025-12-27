# Paddle Payment Integration Setup Guide

This guide will help you configure Paddle payment processing for Quantis Media subscriptions.

## Overview

Paddle integration enables users to purchase subscriptions for:
- **Scenario Access** ($39/month) - Full access to scenario frameworks
- **Scenario Intelligence** ($89/month) - Extended analytics and uncertainty context

The integration includes:
- ✅ Paddle Checkout Sessions (hosted checkout pages)
- ✅ Webhook handlers for subscription lifecycle events
- ✅ Automatic user role upgrades (guest/registered → core/pro)
- ✅ Customer portal access for subscription management

---

## Step 1: Create Paddle Account

1. Go to [https://paddle.com](https://paddle.com) and sign up
2. Complete the onboarding process
3. **Important**: Start with **Sandbox mode** for testing

---

## Step 2: Create Products in Paddle Dashboard

### Navigate to Catalog → Products

Create two products with the following details:

### Product 1: Scenario Access
- **Name**: Scenario Access
- **Description**: Full access to scenario frameworks for professional market analysis
- **Type**: Subscription
- **Billing Cycle**: Monthly
- **Price**: $39.00 USD

### Product 2: Scenario Intelligence  
- **Name**: Scenario Intelligence
- **Description**: Extended analytics and uncertainty context for advanced market participants
- **Type**: Subscription
- **Billing Cycle**: Monthly
- **Price**: $89.00 USD

### Copy Price IDs

After creating each product, Paddle will generate a **Price ID** (format: `pri_xxxxxxxxxxxxxxxxxxxxx`).

Copy both Price IDs - you'll need them in the next step.

---

## Step 3: Configure Environment Variables

### Option A: Using Management UI (Recommended)

1. Open your project Management UI
2. Navigate to **Settings → Secrets**
3. Add the following environment variables:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `PADDLE_API_KEY` | Your Paddle API key | `test_xxxxxxxxxxxxx` or `live_xxxxxxxxxxxxx` |
| `PADDLE_ENVIRONMENT` | Paddle environment | `sandbox` or `production` |
| `PADDLE_WEBHOOK_SECRET` | Webhook signature secret | `pdl_ntfset_xxxxxxxxxxxxx` |
| `PADDLE_PRICE_SCENARIO_ACCESS` | Price ID for Scenario Access ($39) | `pri_01jjxxxxxxxxxxxxxxxxxxxxxx` |
| `PADDLE_PRICE_SCENARIO_INTELLIGENCE` | Price ID for Scenario Intelligence ($89) | `pri_01jjyyyyyyyyyyyyyyyyyyyy` |

### Option B: Using .env file (Development only)

Add to your `.env` file:

```bash
# Paddle Payment Configuration
PADDLE_API_KEY=test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PADDLE_ENVIRONMENT=sandbox
PADDLE_WEBHOOK_SECRET=pdl_ntfset_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PADDLE_PRICE_SCENARIO_ACCESS=pri_01jjxxxxxxxxxxxxxxxxxxxxxx
PADDLE_PRICE_SCENARIO_INTELLIGENCE=pri_01jjyyyyyyyyyyyyyyyyyyyy
```

### How to Get These Values:

#### PADDLE_API_KEY
1. Go to Paddle Dashboard → **Developer Tools → Authentication**
2. Click **Generate New Key**
3. Copy the API key (starts with `test_` for sandbox, `live_` for production)

#### PADDLE_ENVIRONMENT
- Use `sandbox` for testing
- Use `production` for live payments

#### PADDLE_WEBHOOK_SECRET
- Will be generated in Step 4 when you configure webhooks

#### PADDLE_PRICE_* IDs
- Copy from the products you created in Step 2

---

## Step 4: Configure Webhooks

### 1. Get Your Webhook URL

Your webhook endpoint is:
```
https://yourdomain.com/api/paddle/webhook
```

For development/testing, use your Manus preview URL:
```
https://3000-xxxxx.manus.computer/api/paddle/webhook
```

### 2. Add Webhook in Paddle Dashboard

1. Go to Paddle Dashboard → **Developer Tools → Notifications**
2. Click **Add Endpoint**
3. Enter your webhook URL
4. Select the following events:
   - ✅ `subscription.created`
   - ✅ `subscription.updated`
   - ✅ `subscription.canceled`
   - ✅ `subscription.paused`
   - ✅ `subscription.resumed`
   - ✅ `transaction.completed`
   - ✅ `transaction.payment_failed`
5. Click **Save**
6. Copy the **Webhook Secret** (starts with `pdl_ntfset_`)
7. Add it to your environment variables as `PADDLE_WEBHOOK_SECRET`

---

## Step 5: Update Product IDs in Code

Open `shared/paddleProducts.ts` and replace the placeholder Price IDs with your actual Paddle Price IDs:

```typescript
export const PADDLE_PRODUCTS: Record<string, PaddleProduct> = {
  SCENARIO_ACCESS: {
    // ...
    priceId: "pri_01jj_YOUR_ACTUAL_PRICE_ID_HERE", // Replace this
    // ...
  },
  SCENARIO_INTELLIGENCE: {
    // ...
    priceId: "pri_01jj_YOUR_ACTUAL_PRICE_ID_HERE", // Replace this
    // ...
  },
};
```

**Alternative**: Use environment variables (recommended):
- Set `PADDLE_PRICE_SCENARIO_ACCESS` and `PADDLE_PRICE_SCENARIO_INTELLIGENCE`
- The code will automatically use these values

---

## Step 6: Test the Integration

### 1. Test Checkout Flow

1. Navigate to `/pricing` page
2. Click **"Unlock Scenario Access"** or **"Upgrade to Intelligence"**
3. You should be redirected to Paddle Checkout
4. Use Paddle's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Any future expiry date and any CVC

### 2. Verify Webhook Delivery

1. Complete a test purchase
2. Go to Paddle Dashboard → **Developer Tools → Events**
3. Check that `subscription.created` event was sent
4. Verify webhook delivery status (should be 200 OK)

### 3. Verify User Role Upgrade

1. After successful payment, check the user's role in the database
2. Should be upgraded from `registered` to `core` or `pro`
3. User should now have access to full scenario content

---

## Step 7: Go Live (Production)

### 1. Complete Paddle KYC Verification

Paddle requires business verification before you can accept live payments:
1. Submit required documents in Paddle Dashboard
2. Wait for approval (usually 1-3 business days)

### 2. Switch to Production Mode

1. Get your **Production API Key** from Paddle Dashboard
2. Update environment variables:
   ```
   PADDLE_API_KEY=live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   PADDLE_ENVIRONMENT=production
   ```
3. Create production products and get new Price IDs
4. Update `PADDLE_PRICE_*` environment variables
5. Update webhook URL to your production domain

### 3. Update Webhook Endpoint

1. Go to Paddle Dashboard → **Developer Tools → Notifications**
2. Update webhook URL to your production domain:
   ```
   https://quantismedia.com/api/paddle/webhook
   ```
3. Copy the new webhook secret and update `PADDLE_WEBHOOK_SECRET`

---

## Troubleshooting

### Checkout button doesn't work
- Check browser console for errors
- Verify `PADDLE_API_KEY` is set correctly
- Ensure user is logged in (checkout requires authentication)

### Webhook not receiving events
- Verify webhook URL is publicly accessible
- Check `PADDLE_WEBHOOK_SECRET` matches Paddle Dashboard
- Review webhook logs in Paddle Dashboard → Developer Tools → Events

### User role not upgrading after payment
- Check server logs for webhook processing errors
- Verify `customData.userId` is being sent in checkout session
- Ensure database connection is working

### "Invalid API key" error
- Verify `PADDLE_API_KEY` starts with `test_` (sandbox) or `live_` (production)
- Ensure `PADDLE_ENVIRONMENT` matches your API key type
- Check for typos in environment variables

---

## Support

For Paddle-specific issues:
- [Paddle Documentation](https://developer.paddle.com/api-reference/overview)
- [Paddle Support](https://paddle.com/support)

For integration issues:
- Check server logs for detailed error messages
- Review webhook event logs in Paddle Dashboard
- Contact Quantis Media support at support@quantismedia.com

---

## Security Notes

- ⚠️ Never commit `.env` files to version control
- ⚠️ Always use HTTPS for webhook endpoints
- ⚠️ Verify webhook signatures before processing events
- ⚠️ Store API keys securely in environment variables
- ⚠️ Use sandbox mode for all testing and development

---

## Next Steps

After completing the setup:
1. ✅ Test the complete checkout flow
2. ✅ Verify webhook events are processed correctly
3. ✅ Test subscription cancellation and renewal
4. ✅ Monitor payment analytics in Paddle Dashboard
5. ✅ Set up email notifications for failed payments
