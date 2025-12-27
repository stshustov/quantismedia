// Centralized Market Insights scenarios data for Trading Ideas preview cards
// This file extracts key information from full Market Insights analysis pages

export type ScenarioStatus = "active" | "monitoring" | "updated";

export type AssetClass = "indices" | "fx" | "energy" | "metals";

export interface ScenarioPreview {
  id: string;
  instrument: string;
  assetClass: AssetClass;
  status: ScenarioStatus;
  timeHorizon: string;
  lastUpdated: string;
  marketContextEn: string;
  marketContextRu: string;
  baseScenarioEn: string;
  baseScenarioRu: string;
  invalidationLevel: string;
  targetZone: string;
  fullAnalysisUrl: string;
  accessLevel: "sample" | "core" | "pro";
}

export const scenarios: ScenarioPreview[] = [
  {
    id: "wti-crude-oil",
    instrument: "WTI Crude Oil",
    assetClass: "energy",
    status: "active",
    timeHorizon: "1–5 days",
    lastUpdated: "2025-12-26",
    marketContextEn: "WTI crude trades near 58.5 USD per barrel, consolidating after a recovery from the 55–56 USD area. Price action suggests a transition into a balance phase, reflecting a tug-of-war between supportive US fundamentals and a broader global supply overhang.",
    marketContextRu: "На момент анализа цена WTI стабилизировалась вблизи 58.5 USD за баррель, консолидируясь после восходящего движения от области 55–56 USD. Рынок перешёл в фазу балансировки, отражающую равновесие между локально поддерживающими факторами в США и более широким глобальным навесом предложения.",
    baseScenarioEn: "Range-bound trading within 57.8–59.5 USD, with elevated sensitivity to inventory data and macro headlines.",
    baseScenarioRu: "Торговля в диапазоне 57.8–59.5 USD с повышенной чувствительностью к данным по запасам и макроэкономическим заголовкам.",
    invalidationLevel: "Below 57.0 USD",
    targetZone: "59.5–60.5 USD",
    fullAnalysisUrl: "/market-insights/energy-metals/wti-crude-oil",
    accessLevel: "core"
  },
  {
    id: "gold-xauusd",
    instrument: "Gold (XAUUSD)",
    assetClass: "metals",
    status: "active",
    timeHorizon: "1–5 days",
    lastUpdated: "2025-12-27",
    marketContextEn: "Gold is trading near historical highs amid easing Federal Reserve policy expectations, sustained institutional demand from central banks, and elevated geopolitical uncertainty. Current price action is driven less by momentum chasing and more by liquidity balance.",
    marketContextRu: "Золото торгуется вблизи исторических максимумов на фоне смягчения ожиданий по политике ФРС, устойчивого институционального спроса со стороны центральных банков и повышенной геополитической неопределённости.",
    baseScenarioEn: "As long as price holds above 2,495–2,500 and volatility remains contained, gold is expected to consolidate following the prior impulse. Flows remain predominantly institutional, with no clear signs of aggressive profit-taking.",
    baseScenarioRu: "Пока цена удерживается выше 2,495–2,500 и волатильность остаётся сдержанной, ожидается консолидация золота после предыдущего импульса. Потоки остаются преимущественно институциональными, без явных признаков агрессивной фиксации прибыли.",
    invalidationLevel: "Below $2,495",
    targetZone: "$2,520–2,550",
    fullAnalysisUrl: "/market-insights/energy-metals/gold",
    accessLevel: "core"
  },
  {
    id: "silver-xagusd",
    instrument: "Silver (XAGUSD)",
    assetClass: "metals",
    status: "monitoring",
    timeHorizon: "1–5 days",
    lastUpdated: "2025-12-26",
    marketContextEn: "Silver maintains bullish structure above $30.50, supported by industrial demand recovery and gold's strength. Near-term resistance in the $31.80-32.20 zone.",
    marketContextRu: "Серебро сохраняет бычью структуру выше $30.50, поддерживаемое восстановлением промышленного спроса и силой золота. Ближайшее сопротивление в зоне $31.80-32.20.",
    baseScenarioEn: "Continuation toward $32.00-32.50 while holding support at $30.50. Alternative: pullback to $29.80-30.20 for re-accumulation.",
    baseScenarioRu: "Продолжение к $32.00-32.50 при удержании поддержки $30.50. Альтернатива: откат к $29.80-30.20 для повторного накопления.",
    invalidationLevel: "Below $29.50",
    targetZone: "$32.00–32.50",
    fullAnalysisUrl: "/market-insights/energy-metals/silver",
    accessLevel: "core"
  },
  {
    id: "copper-hg",
    instrument: "Copper (HG)",
    assetClass: "metals",
    status: "monitoring",
    timeHorizon: "1–5 days",
    lastUpdated: "2025-12-25",
    marketContextEn: "Copper consolidates near $4.15/lb following China stimulus optimism. Price action reflects cautious positioning ahead of manufacturing data releases.",
    marketContextRu: "Медь консолидируется около $4.15/фунт после оптимизма по стимулам Китая. Ценовое действие отражает осторожное позиционирование перед выходом данных по производству.",
    baseScenarioEn: "Range-bound trading between $4.10-4.25 with bias toward upside if China PMI data surprises positively. Watch for inventory trends.",
    baseScenarioRu: "Торговля в диапазоне $4.10-4.25 со смещением вверх при позитивных сюрпризах в данных PMI Китая. Следите за трендами запасов.",
    invalidationLevel: "Below $4.05",
    targetZone: "$4.25–4.35",
    fullAnalysisUrl: "/market-insights/energy-metals/copper",
    accessLevel: "core"
  },
  {
    id: "spx500",
    instrument: "S&P 500 (SPX500)",
    assetClass: "indices",
    status: "updated",
    timeHorizon: "1–5 days",
    lastUpdated: "2025-12-27",
    marketContextEn: "S&P 500 trades near all-time highs supported by strong earnings and Fed dovish pivot expectations. Market breadth remains healthy with participation across sectors.",
    marketContextRu: "S&P 500 торгуется вблизи исторических максимумов, поддерживаемый сильными отчётами и ожиданиями мягкого разворота ФРС. Широта рынка остаётся здоровой с участием всех секторов.",
    baseScenarioEn: "Consolidation between 5,950-6,050 with potential breakout above 6,050 if tech earnings continue to surprise positively. Watch for profit-taking signals.",
    baseScenarioRu: "Консолидация между 5,950-6,050 с потенциальным пробоем выше 6,050 при продолжении позитивных сюрпризов в отчётах технологических компаний. Следите за сигналами фиксации прибыли.",
    invalidationLevel: "Below 5,900",
    targetZone: "6,050–6,150",
    fullAnalysisUrl: "/market-insights/indices/spx500",
    accessLevel: "sample"
  }
];

// Helper function to get scenarios by asset class
export function getScenariosByAssetClass(assetClass: AssetClass | "all"): ScenarioPreview[] {
  if (assetClass === "all") return scenarios;
  return scenarios.filter(s => s.assetClass === assetClass);
}

// Helper function to get scenario by ID
export function getScenarioById(id: string): ScenarioPreview | undefined {
  return scenarios.find(s => s.id === id);
}

// Helper function to get scenarios by access level
export function getScenariosByAccessLevel(accessLevel: "sample" | "core" | "pro" | "all"): ScenarioPreview[] {
  if (accessLevel === "all") return scenarios;
  return scenarios.filter(s => s.accessLevel === accessLevel);
}
