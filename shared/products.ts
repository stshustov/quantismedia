export interface Product {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  stripePriceIdMonthly?: string;
  stripePriceIdYearly?: string;
  features: string[];
  role: "registered" | "core" | "pro";
}

export const PRODUCTS: Product[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for exploring our platform",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Public analytics access",
      "Sample trading ideas",
      "Market insights blog",
      "Basic market research"
    ],
    role: "registered",
  },
  {
    id: "core",
    name: "Core",
    description: "Full access to trading ideas and Telegram",
    priceMonthly: 49,
    priceYearly: 490, // ~$41/month with yearly discount
    stripePriceIdMonthly: process.env.STRIPE_PRICE_CORE_MONTHLY,
    stripePriceIdYearly: process.env.STRIPE_PRICE_CORE_YEARLY,
    features: [
      "Everything in Free",
      "Full access to trading ideas",
      "Private dashboard",
      "Telegram market channels",
      "History & statistics",
      "Priority support"
    ],
    role: "core",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Advanced features for serious traders",
    priceMonthly: 99,
    priceYearly: 990, // ~$83/month with yearly discount
    stripePriceIdMonthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    stripePriceIdYearly: process.env.STRIPE_PRICE_PRO_YEARLY,
    features: [
      "Everything in Core",
      "Pro-exclusive trading ideas",
      "Community chat access",
      "Advanced analytics",
      "Early access to new features",
      "Dedicated support"
    ],
    role: "pro",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductByRole(role: string): Product | undefined {
  return PRODUCTS.find(p => p.role === role);
}
