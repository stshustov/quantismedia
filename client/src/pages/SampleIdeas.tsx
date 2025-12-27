import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";

export default function SampleIdeas() {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Scenario-Based Market Outlook",
      pageSubtitle: "Below are examples of how Quantis Media structures market context into probability-based scenarios, using price ranges, structural levels, and macro conditions.",
      disclaimer: "All content is provided for informational and educational purposes only.",
      sp500: {
        instrument: "S&P 500 (US500)",
        category: "Indices",
        timeHorizon: "Short-term (1–5 trading days)",
        marketContext: "The US equity market remains highly sensitive to macroeconomic data and Federal Reserve policy expectations. Recent price action has been driven less by outright directional demand and more by shifts in liquidity conditions, flow structure, and sector-level risk redistribution.",
        scenarioTitle: "Scenario Outlook",
        baseScenario: {
          title: "🟢 Base Scenario — Inertial continuation within current structure",
          points: [
            "Sustained hold above 4,980–5,020",
            "No sharp volatility expansion",
            "Ongoing liquidity support"
          ],
          interpretation: "The market maintains its current trajectory without signs of structural transition."
        },
        upsideScenario: {
          title: "🔵 Upside Scenario — Range expansion supported by liquidity",
          points: [
            "Sustained acceptance above 5,020",
            "Stable or improving risk appetite",
            "No stress signals from rates or credit markets"
          ],
          interpretation: "The move is driven by inertia and internal capital reallocation rather than speculative excess."
        },
        downsideScenario: {
          title: "🔴 Downside Scenario — Transition toward re-pricing",
          points: [
            "Breakdown below 4,980",
            "Volatility expansion",
            "Increase in defensive positioning"
          ],
          interpretation: "The market shifts from continuation toward risk reassessment."
        },
        levelsTitle: "Analytical Reference Levels",
        levels: [
          "Structural Support Zone: 4,980–5,020",
          "Structural Pivot: ~4,950",
          "Risk Boundary: <4,900 — signals a regime shift"
        ]
      },
      gold: {
        instrument: "Gold (XAUUSD)",
        category: "Metals",
        timeHorizon: "Short-term (1–5 trading days)",
        marketContext: "Gold is trading near historical highs amid easing Federal Reserve policy expectations, sustained institutional demand from central banks, and elevated geopolitical uncertainty. Current price action is driven less by momentum chasing and more by liquidity balance and the defense of key structural zones, leaving the market sensitive to shifts in the volatility regime.",
        scenarioTitle: "Scenario Outlook",
        baseScenario: {
          title: "🟢 Base Scenario — Consolidation within the current liquidity regime",
          points: [
            "Price holds above 4,495–4,500",
            "Stabilizing or declining short-term volatility",
            "No sharp expansion in risk premium"
          ],
          interpretation: "The market is digesting the prior move, forming a structural base for the next directional phase."
        },
        upsideScenario: {
          title: "🔵 Upside Scenario — Expansion driven by renewed risk premium",
          points: [
            "Sustained acceptance above 4,520",
            "Increase in geopolitical or monetary uncertainty",
            "Range expansion without disorderly volatility"
          ],
          interpretation: "Acceleration becomes possible upon the emergence of an external catalyst."
        },
        downsideScenario: {
          title: "🔴 Downside Scenario — Tactical pullback within broader structure",
          points: [
            "Loss of the 4,470 area",
            "Short-term volatility expansion",
            "Increased profit-taking flows"
          ],
          interpretation: "The pullback remains corrective within a broader constructive context."
        },
        levelsTitle: "Analytical Reference Levels",
        levels: [
          "Structural Support: 4,470–4,500",
          "Expansion Area: >4,520",
          "Risk Boundary: <4,440 — invalidates the consolidation scenario"
        ]
      },
      cardDisclaimer: "This is an analytical scenario example for informational purposes only and does not constitute investment advice."
    },
    ru: {
      pageTitle: "Сценарный рыночный прогноз",
      pageSubtitle: "Ниже представлены примеры того, как Quantis Media формирует вероятностные рыночные сценарии с использованием ценовых диапазонов, структурных уровней и макро-контекста.",
      disclaimer: "Материалы носят аналитический и образовательный характер и не являются инвестиционными рекомендациями.",
      sp500: {
        instrument: "S&P 500 (US500)",
        category: "Индексы",
        timeHorizon: "Краткосрочный (1–5 торговых дней)",
        marketContext: "Американский фондовый рынок остаётся в фазе повышенной чувствительности к макроэкономическим данным и ожиданиям по ДКП ФРС. Текущие движения формируются не столько направленным спросом, сколько изменениями в ликвидности, структуре потоков и перераспределением риска между секторами.",
        scenarioTitle: "Сценарный прогноз",
        baseScenario: {
          title: "🟢 Базовый сценарий — Инерционное продолжение в текущей структуре",
          points: [
            "Удержание выше 4,980–5,020",
            "Отсутствие резкого роста волатильности",
            "Сохранение поддержки со стороны ликвидности"
          ],
          interpretation: "Рынок продолжает движение в рамках текущего режима без признаков структурного сдвига."
        },
        upsideScenario: {
          title: "🔵 Сценарий роста — Расширение при поддержке ликвидности",
          points: [
            "Устойчивое закрепление выше 5,020",
            "Стабильный или улучшающийся риск-аппетит",
            "Отсутствие стрессовых сигналов в ставках и кредитных рынках"
          ],
          interpretation: "Движение поддерживается инерцией и перераспределением капитала внутри рынка."
        },
        downsideScenario: {
          title: "🔴 Сценарий снижения — Переход к фазе переоценки",
          points: [
            "Потеря 4,980",
            "Рост внутридневной волатильности",
            "Усиление защитного позиционирования"
          ],
          interpretation: "Рынок переходит в фазу оценки рисков с повышенной вероятностью коррекционных движений."
        },
        levelsTitle: "Аналитические референсные уровни",
        levels: [
          "Зона структурной поддержки: 4,980–5,020",
          "Структурный pivot: ~4,950",
          "Граница риска: <4,900 — указывает на смену режима"
        ]
      },
      gold: {
        instrument: "Золото (XAUUSD)",
        category: "Металлы",
        timeHorizon: "Краткосрочный (1–5 торговых дней)",
        marketContext: "Золото торгуется вблизи исторических максимумов на фоне смягчения ожиданий по денежно-кредитной политике ФРС, устойчивого институционального спроса со стороны центральных банков и сохраняющейся геополитической неопределённости. Текущая динамика формируется не импульсным спросом, а балансом ликвидности и удержанием ключевых структурных зон, что делает рынок чувствительным к смене волатильностного режима.",
        scenarioTitle: "Сценарный прогноз",
        baseScenario: {
          title: "🟢 Базовый сценарий — Консолидация в рамках текущего режима ликвидности",
          points: [
            "Удержание выше 4,495–4,500",
            "Стабилизация или снижение краткосрочной волатильности",
            "Отсутствие резкого расширения risk premium"
          ],
          interpretation: "Рынок переваривает предыдущий импульс, формируя структурную базу для следующего движения."
        },
        upsideScenario: {
          title: "🔵 Сценарий роста — Расширение на фоне роста risk premium",
          points: [
            "Устойчивое закрепление выше 4,520",
            "Рост геополитической или монетарной неопределённости",
            "Расширение диапазона без резкого всплеска волатильности"
          ],
          interpretation: "Допускается ускорение движения при появлении внешнего катализатора."
        },
        downsideScenario: {
          title: "🔴 Сценарий снижения — Тактический откат в рамках структуры",
          points: [
            "Потеря области 4,470",
            "Рост краткосрочной волатильности",
            "Усиление потоков profit-taking"
          ],
          interpretation: "Коррекция развивается в рамках более широкого восходящего контекста."
        },
        levelsTitle: "Аналитические референсные уровни",
        levels: [
          "Структурная поддержка: 4,470–4,500",
          "Зона расширения импульса: >4,520",
          "Граница риска: <4,440 — инвалидирует сценарий консолидации"
        ]
      },
      cardDisclaimer: "Это пример аналитического сценария в информационных целях и не является инвестиционной рекомендацией."
    }
  };

  const t = language === "en" ? content.en : content.ru;

  return (
    <>
      <Helmet>
        <title>Scenario-Based Market Outlook | Quantis Media</title>
        <meta
          name="description"
          content="Examples of institutional scenario-based market analysis for S&P 500 and Gold."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-bold mb-4">{t.pageTitle}</h1>
            <p className="text-lg text-muted-foreground mb-2">{t.pageSubtitle}</p>
            <p className="text-sm text-muted-foreground mb-12">{t.disclaimer}</p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* S&P 500 Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{t.sp500.instrument}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="uppercase tracking-wide font-semibold">{t.sp500.category}</span>
                      <span>•</span>
                      <span>{t.sp500.timeHorizon}</span>
                    </div>
                  </div>

                  {/* Market Context */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">
                      {language === "en" ? "Market Context" : "Контекст рынка"}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground">{t.sp500.marketContext}</p>
                  </div>

                  {/* Scenario Framework */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-muted-foreground">
                      {t.sp500.scenarioTitle}
                    </h3>

                    {/* Base Scenario */}
                    <div className="mb-4 p-4 bg-blue-500/5 border-l-4 border-l-blue-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.sp500.baseScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.sp500.baseScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.sp500.baseScenario.interpretation}
                      </p>
                    </div>

                    {/* Upside Scenario */}
                    <div className="mb-4 p-4 bg-green-500/5 border-l-4 border-l-green-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.sp500.upsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.sp500.upsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.sp500.upsideScenario.interpretation}
                      </p>
                    </div>

                    {/* Downside Scenario */}
                    <div className="p-4 bg-red-500/5 border-l-4 border-l-red-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.sp500.downsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.sp500.downsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.sp500.downsideScenario.interpretation}
                      </p>
                    </div>
                  </div>

                  {/* Analytical Levels */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">
                      {t.sp500.levelsTitle}
                    </h3>
                    <div className="space-y-1">
                      {t.sp500.levels.map((level, idx) => (
                        <p key={idx} className="text-sm text-foreground">• {level}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Disclaimer */}
                  <div className="text-xs text-muted-foreground italic border-t pt-4">
                    {t.cardDisclaimer}
                  </div>
                </div>
              </Card>

              {/* Gold Card */}
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{t.gold.instrument}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="uppercase tracking-wide font-semibold">{t.gold.category}</span>
                      <span>•</span>
                      <span>{t.gold.timeHorizon}</span>
                    </div>
                  </div>

                  {/* Market Context */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">
                      {language === "en" ? "Market Context" : "Контекст рынка"}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground">{t.gold.marketContext}</p>
                  </div>

                  {/* Scenario Framework */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-muted-foreground">
                      {t.gold.scenarioTitle}
                    </h3>

                    {/* Base Scenario */}
                    <div className="mb-4 p-4 bg-blue-500/5 border-l-4 border-l-blue-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.baseScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.baseScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.gold.baseScenario.interpretation}
                      </p>
                    </div>

                    {/* Upside Scenario */}
                    <div className="mb-4 p-4 bg-green-500/5 border-l-4 border-l-green-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.upsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.upsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.gold.upsideScenario.interpretation}
                      </p>
                    </div>

                    {/* Downside Scenario */}
                    <div className="p-4 bg-red-500/5 border-l-4 border-l-red-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.downsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.downsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.gold.downsideScenario.interpretation}
                      </p>
                    </div>
                  </div>

                  {/* Analytical Levels */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">
                      {t.gold.levelsTitle}
                    </h3>
                    <div className="space-y-1">
                      {t.gold.levels.map((level, idx) => (
                        <p key={idx} className="text-sm text-foreground">• {level}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Disclaimer */}
                  <div className="text-xs text-muted-foreground italic border-t pt-4">
                    {t.cardDisclaimer}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
