/**
 * Paddle Products Configuration
 * 
 * This file defines the Paddle products and prices for Quantis Media subscriptions.
 * 
 * Setup Instructions:
 * 1. Log in to your Paddle Dashboard: https://vendors.paddle.com (or sandbox)
 * 2. Navigate to Catalog → Products
 * 3. Create two products:
 *    a) "Scenario Access" - Full access to scenario frameworks ($39/month)
 *    b) "Scenario Intelligence" - Extended analytics and uncertainty context ($89/month)
 * 4. For each product, create a monthly recurring price
 * 5. Copy the Price IDs (format: pri_xxxxx) and replace the placeholder values below
 * 
 * Important Notes:
 * - Use SANDBOX price IDs for testing (starts with pri_)
 * - Switch to PRODUCTION price IDs when going live
 * - Paddle automatically handles currency conversion
 * - Test mode uses sandbox-checkout.paddle.com
 * - Production mode uses checkout.paddle.com
 */

export interface PaddleProduct {
  id: string;
  name: string;
  priceId: string; // Paddle Price ID (pri_xxxxx)
  amount: number; // Amount in USD cents (e.g., 3900 = $39.00)
  currency: string;
  interval: "month" | "year";
  userRole: "core" | "pro"; // Internal role mapping
  features: string[];
}

/**
 * Paddle Products Configuration
 * 
 * IMPORTANT: Replace these placeholder price IDs with your actual Paddle Price IDs
 * after creating products in your Paddle Dashboard.
 */
export const PADDLE_PRODUCTS: Record<string, PaddleProduct> = {
  SCENARIO_ACCESS: {
    id: "scenario_access",
    name: "Scenario Access",
    priceId: process.env.PADDLE_PRICE_SCENARIO_ACCESS || "pri_01jjxxxxxxxxxxxxxxxxxxxxxx", // TODO: Replace with real Price ID
    amount: 3900, // $39.00
    currency: "USD",
    interval: "month",
    userRole: "core",
    features: [
      "Full Base / Upside / Downside scenarios",
      "Defined scenario ranges",
      "Structural levels (support / pivot / risk boundary)",
      "Scenario updates when market structure changes",
      "Historical scenario library (backlog)",
      "Archive of analytical insights",
      "Personal dashboard",
      "Email support",
    ],
  },
  SCENARIO_INTELLIGENCE: {
    id: "scenario_intelligence",
    name: "Scenario Intelligence",
    priceId: process.env.PADDLE_PRICE_SCENARIO_INTELLIGENCE || "pri_01jjyyyyyyyyyyyyyyyyyyyy", // TODO: Replace with real Price ID
    amount: 8900, // $89.00
    currency: "USD",
    interval: "month",
    userRole: "pro",
    features: [
      "Everything in Scenario Access",
      "Extended scenario frameworks (primary / alternative)",
      "Higher-frequency updates during regime shifts",
      "Analytical bias & scenario weighting",
      "Analyst commentary & context notes",
      "Optional access to closed analytical discussions",
      "Priority support",
    ],
  },
};

/**
 * Get product by price ID
 */
export function getProductByPriceId(priceId: string): PaddleProduct | undefined {
  return Object.values(PADDLE_PRODUCTS).find((product) => product.priceId === priceId);
}

/**
 * Get product by user role
 */
export function getProductByRole(role: "core" | "pro"): PaddleProduct | undefined {
  return Object.values(PADDLE_PRODUCTS).find((product) => product.userRole === role);
}

/**
 * Get all products as array
 */
export function getAllProducts(): PaddleProduct[] {
  return Object.values(PADDLE_PRODUCTS);
}
