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
        marketContext: "The US equity market is in a phase of heightened sensitivity to macro data and Fed policy expectations. Price action is driven less by directional conviction and more by shifts in liquidity and flow structure.",
        scenarioTitle: "Scenario Framework",
        baseScenario: {
          title: "Base Scenario — Structural Continuation",
          points: [
            "Index holds above 4,980–5,020 zone",
            "Volatility remains controlled",
            "Liquidity continues to support current structure"
          ],
          interpretation: "Market maintains inertial movement within existing framework."
        },
        altScenario: {
          title: "Alternative Scenario — Structural Reassessment",
          points: [
            "Loss of 4,980 area",
            "Increase in intraday volatility",
            "Rise in defensive and hedging flows"
          ],
          interpretation: "Market transitions into reassessment mode with elevated correction risk."
        },
        levelsTitle: "Analytical Reference Levels",
        levels: [
          "Structural Support Zone: 4,980–5,020",
          "Structural Pivot: ~4,950",
          "Risk Boundary: <4,900"
        ],
        levelsNote: "Levels are used exclusively as analytical reference points within scenario framework."
      },
      gold: {
        instrument: "Gold (XAUUSD)",
        category: "Metals",
        timeHorizon: "Short-term (1–5 trading days)",
        currentReference: "~4,500",
        marketContext: "Gold is trading near all-time highs supported by softer Fed rate expectations, sustained central bank demand, and geopolitical uncertainty.",
        scenarioTitle: "Scenario Framework",
        baseScenario: {
          title: "Base Scenario — Consolidation Above Support",
          points: [
            "Price holds above 4,495–4,500",
            "Volatility declines after momentum surge",
            "Institutional demand persists"
          ],
          interpretation: "Market consolidates, building base for next move."
        },
        upsideScenario: {
          title: "Upside Scenario — Momentum Expansion",
          points: [
            "Break above 4,520",
            "Geopolitical or monetary premium intensifies"
          ],
          interpretation: "Market allows for acceleration on external catalyst."
        },
        downsideScenario: {
          title: "Downside Scenario — Tactical Pullback",
          points: [
            "Return below 4,470",
            "Profit-taking on thin liquidity"
          ],
          interpretation: "Correction within broader uptrend context."
        },
        levelsTitle: "Analytical Reference Levels",
        levels: [
          "Primary Support Zone: 4,470–4,500",
          "Momentum Expansion Area: >4,520",
          "Risk Boundary: <4,440"
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
        marketContext: "Рынок акций США находится в фазе повышенной чувствительности к макро-данным и ожиданиям по ДКП ФРС. Движение формируется не столько направлением, сколько изменениями ликвидности и структуры потоков.",
        scenarioTitle: "Сценарная рамка",
        baseScenario: {
          title: "Базовый сценарий — Структурное продолжение",
          points: [
            "Индекс удерживается выше зоны 4,980–5,020",
            "Волатильность остаётся контролируемой",
            "Ликвидность продолжает поддерживать текущую структуру"
          ],
          interpretation: "Рынок сохраняет инерционное движение в рамках существующей структуры."
        },
        altScenario: {
          title: "Альтернативный сценарий — Структурная переоценка",
          points: [
            "Потеря области 4,980",
            "Рост внутридневной волатильности",
            "Усиление защитных и хеджирующих потоков"
          ],
          interpretation: "Рынок переходит в фазу переоценки с повышенным риском коррекции."
        },
        levelsTitle: "Аналитические референсные уровни",
        levels: [
          "Зона структурной поддержки: 4,980–5,020",
          "Структурный пивот: ~4,950",
          "Граница риска: <4,900"
        ],
        levelsNote: "Уровни используются исключительно как аналитические ориентиры в рамках сценариев."
      },
      gold: {
        instrument: "Золото (XAUUSD)",
        category: "Металлы",
        timeHorizon: "Краткосрочный (1–5 торговых дней)",
        currentReference: "~4,500",
        marketContext: "Золото торгуется вблизи исторических максимумов на фоне смягчения ожиданий по ДКП ФРС, устойчивого спроса со стороны центральных банков и геополитической неопределённости.",
        scenarioTitle: "Сценарная рамка",
        baseScenario: {
          title: "Базовый сценарий — Консолидация выше поддержки",
          points: [
            "Цена удерживается выше 4,495–4,500",
            "Волатильность снижается после импульса",
            "Сохраняется институциональный спрос"
          ],
          interpretation: "Рынок консолидируется, формируя базу для следующего движения."
        },
        upsideScenario: {
          title: "Сценарий роста — Расширение импульса",
          points: [
            "Закрепление выше 4,520",
            "Усиление геополитической или монетарной премии"
          ],
          interpretation: "Допускается ускорение движения при внешнем катализаторе."
        },
        downsideScenario: {
          title: "Сценарий снижения — Тактический откат",
          points: [
            "Возврат ниже 4,470",
            "Фиксация прибыли на фоне тонкой ликвидности"
          ],
          interpretation: "Коррекция в рамках более широкого восходящего контекста."
        },
        levelsTitle: "Аналитические референсные уровни",
        levels: [
          "Зона первичной поддержки: 4,470–4,500",
          "Область расширения импульса: >4,520",
          "Граница риска: <4,440"
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
                    <p className="text-sm leading-relaxed">{t.sp500.marketContext}</p>
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
                          <li key={idx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-muted-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.sp500.baseScenario.interpretation}
                      </p>
                    </div>

                    {/* Alternative Scenario */}
                    <div className="p-4 bg-orange-500/5 border-l-4 border-l-orange-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.sp500.altScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.sp500.altScenario.points.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-muted-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.sp500.altScenario.interpretation}
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
                        <p key={idx} className="text-xs font-mono text-muted-foreground">{level}</p>
                      ))}
                    </div>
                    <p className="text-xs italic text-muted-foreground mt-2">{t.sp500.levelsNote}</p>
                  </div>

                  {/* Card Disclaimer */}
                  <div className="pt-4 border-t text-xs text-muted-foreground">
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
                      <span>•</span>
                      <span className="font-mono">{t.gold.currentReference}</span>
                    </div>
                  </div>

                  {/* Market Context */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-2 text-muted-foreground">
                      {language === "en" ? "Market Context" : "Контекст рынка"}
                    </h3>
                    <p className="text-sm leading-relaxed">{t.gold.marketContext}</p>
                  </div>

                  {/* Scenario Framework */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-muted-foreground">
                      {t.gold.scenarioTitle}
                    </h3>

                    {/* Base Scenario */}
                    <div className="mb-3 p-4 bg-blue-500/5 border-l-4 border-l-blue-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.baseScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.baseScenario.points.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-muted-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.gold.baseScenario.interpretation}
                      </p>
                    </div>

                    {/* Upside Scenario */}
                    <div className="mb-3 p-4 bg-green-500/5 border-l-4 border-l-green-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.upsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.upsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-muted-foreground">
                        {language === "en" ? "Interpretation: " : "Интерпретация: "}
                        {t.gold.upsideScenario.interpretation}
                      </p>
                    </div>

                    {/* Downside Scenario */}
                    <div className="p-4 bg-red-500/5 border-l-4 border-l-red-500 rounded">
                      <p className="font-semibold text-sm mb-2">{t.gold.downsideScenario.title}</p>
                      <ul className="text-sm space-y-1 mb-2">
                        {t.gold.downsideScenario.points.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground">• {point}</li>
                        ))}
                      </ul>
                      <p className="text-xs italic text-muted-foreground">
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
                        <p key={idx} className="text-xs font-mono text-muted-foreground">{level}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Disclaimer */}
                  <div className="pt-4 border-t text-xs text-muted-foreground">
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
