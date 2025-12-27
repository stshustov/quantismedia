export type ScenarioStatus = "active" | "monitoring" | "invalidated" | "completed";

export interface Scenario {
  id: string;
  instrument: string;
  market: "indices" | "fx" | "energy" | "metals";
  status: ScenarioStatus;
  timeHorizon: string;
  publishedAt: string;
  lastUpdatedAt: string;
  marketContextEn: string;
  marketContextRu: string;
  baseScenarioEn: string;
  baseScenarioRu: string;
  invalidationLevel: string;
  targetZone: string;
  fullAnalysisUrl: string;
  accessLevel: "sample" | "core" | "pro";
}

export const scenarios: Scenario[] = [
  {
    id: "wti-crude-oil",
    instrument: "WTI Crude Oil",
    market: "energy",
    status: "active",
    timeHorizon: "1–5 days",
    publishedAt: "2025-12-20T00:00:00Z",
    lastUpdatedAt: "2025-12-26T14:30:00Z",
    marketContextEn: "As of this analysis, WTI price has stabilized near 58.5 USD per barrel, consolidating after an upward move from the 55–56 USD area. The market has entered a balancing phase, reflecting equilibrium between locally supportive factors in the US and broader global supply overhang.",
    marketContextRu: "На момент анализа цена WTI стабилизировалась вблизи 58.5 USD за баррель, консолидируясь после восходящего движения от области 55–56 USD. Рынок перешёл в фазу балансировки, отражающую равновесие между локально поддерживающими факторами в США и более широким глобальным навесом предложения.",
    baseScenarioEn: "Trading in the range of 57.8–59.5 USD with heightened sensitivity to inventory data and macroeconomic headlines.",
    baseScenarioRu: "Торговля в диапазоне 57.8–59.5 USD с повышенной чувствительностью к данным по запасам и макроэкономическим заголовкам.",
    invalidationLevel: "Below 57.0 USD",
    targetZone: "Above 59.5 USD",
    fullAnalysisUrl: "/market-insights/energy-metals/wti-crude-oil",
    accessLevel: "sample"
  },
  {
    id: "gold-xauusd",
    instrument: "Gold (XAUUSD)",
    market: "metals",
    status: "active",
    timeHorizon: "1–5 days",
    publishedAt: "2025-12-20T00:00:00Z",
    lastUpdatedAt: "2025-12-27T16:10:00Z",
    marketContextEn: "Gold is trading near historical highs amid easing Federal Reserve policy expectations, sustained institutional demand from central banks, and elevated geopolitical uncertainty. Current price action is driven less by momentum chasing and more by liquidity balance.",
    marketContextRu: "Золото торгуется вблизи исторических максимумов на фоне смягчения ожиданий по политике ФРС, устойчивого институционального спроса со стороны центральных банков и повышенной геополитической неопределённости.",
    baseScenarioEn: "As long as price holds above 4495–4500 and volatility remains contained, gold is expected to consolidate following the prior impulse. Flows remain predominantly institutional, with no clear signs of aggressive profit-taking.",
    baseScenarioRu: "Пока цена удерживается выше зоны 4495–4500 и не наблюдается ускорения волатильности, рынок сохраняет режим консолидации после импульсного движения. Потоки остаются преимущественно институциональными, без признаков агрессивной фиксации прибыли.",
    invalidationLevel: "Below 4440",
    targetZone: "Above 4520",
    fullAnalysisUrl: "/market-insights/energy-metals/metals/gold",
    accessLevel: "core"
  },
  {
    id: "silver-xagusd",
    instrument: "Silver (XAGUSD)",
    market: "metals",
    status: "monitoring",
    timeHorizon: "1–5 days",
    publishedAt: "2025-12-20T00:00:00Z",
    lastUpdatedAt: "2025-12-26T09:45:00Z",
    marketContextEn: "Silver is trading near record highs around $74.5–$75.1/oz, with the rally driven by a mix of industrial and investment demand, tightening availability, and year-end liquidity effects.",
    marketContextRu: "Серебро обновило исторические максимумы и торгуется вблизи $74.5–75.1/oz, демонстрируя ускорение на сочетании промышленного спроса, инвестиционного притока и сжатия доступных запасов/ликвидности на рынке.",
    baseScenarioEn: "High-volatility consolidation $72–$76/oz, with risk of short-term spike moves on headlines/data on rates and dollar.",
    baseScenarioRu: "Высоковолатильная консолидация $72–$76/oz, с риском краткосрочных spike moves на заголовках/данных по ставкам и доллару.",
    invalidationLevel: "Below $70",
    targetZone: "$75–77",
    fullAnalysisUrl: "/market-insights/energy-metals/metals/silver",
    accessLevel: "core"
  },
  {
    id: "copper-hg",
    instrument: "Copper (HG)",
    market: "metals",
    status: "monitoring",
    timeHorizon: "1–5 days",
    publishedAt: "2025-12-20T00:00:00Z",
    lastUpdatedAt: "2025-12-25T00:00:00Z",
    marketContextEn: "Copper is consolidating around $4.15/lb following optimism on China stimulus. Price action reflects cautious positioning ahead of production data releases.",
    marketContextRu: "Медь консолидируется около $4.15/фунт после оптимизма по стимулам Китая. Ценовое действие отражает осторожное позиционирование перед выходом данных по производству.",
    baseScenarioEn: "Trading in the $4.10-4.25 range with upside bias on positive China PMI surprises. Watch inventory trends.",
    baseScenarioRu: "Торговля в диапазоне $4.10-4.25 со смещением вверх при позитивных сюрпризах в данных PMI Китая. Следите за трендами запасов.",
    invalidationLevel: "Below $4.10",
    targetZone: "Above $4.25",
    fullAnalysisUrl: "/market-insights/energy-metals/metals/copper",
    accessLevel: "core"
  },
  {
    id: "spx500",
    instrument: "S&P 500 (SPX500)",
    market: "indices",
    status: "active",
    timeHorizon: "1–5 days",
    publishedAt: "2025-12-20T00:00:00Z",
    lastUpdatedAt: "2025-12-27T12:00:00Z",
    marketContextEn: "The US equity market remains highly sensitive to macroeconomic data and Federal Reserve policy expectations. Recent price action has been driven less by outright directional demand and more by shifts in liquidity conditions and flow structure.",
    marketContextRu: "Американский фондовый рынок остаётся в фазе повышенной чувствительности к макроэкономическим данным и ожиданиям по ДКП ФРС. Текущие движения формируются не столько направленным спросом, сколько изменениями в ликвидности и структуре потоков.",
    baseScenarioEn: "As long as the index holds above the 4,980–5,020 area and volatility remains contained, price action is expected to continue within the existing structural regime.",
    baseScenarioRu: "Пока индекс удерживается выше зоны 4,980–5,020 и волатильность остаётся контролируемой, рынок сохраняет инерционное движение в рамках существующей структуры.",
    invalidationLevel: "Below 4900",
    targetZone: "4980–5020",
    fullAnalysisUrl: "/market-insights/indices/spx500",
    accessLevel: "core"
  }
];


// Helper function to get relative time display
export function getRelativeTime(isoDate: string, language: "en" | "ru"): string {
  const now = new Date();
  const date = new Date(isoDate);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const timeStr = date.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: false,
    timeZone: "UTC" 
  });

  if (diffDays === 0) {
    return language === "en" ? `Today, ${timeStr} UTC` : `сегодня, ${timeStr} UTC`;
  } else if (diffDays === 1) {
    return language === "en" ? `Yesterday, ${timeStr} UTC` : `вчера, ${timeStr} UTC`;
  } else if (diffDays < 7) {
    return language === "en" ? `${diffDays} days ago` : `${diffDays} дня назад`;
  } else {
    const dateStr = date.toLocaleDateString(language === "en" ? "en-US" : "ru-RU", {
      month: "short",
      day: "numeric"
    });
    return `${dateStr}, ${timeStr} UTC`;
  }
}
