import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import ShareButtons from "@/components/ShareButtons";
import { useTrackScenarioView } from "@/hooks/useTrackScenarioView";
import { useAuth } from "@/_core/hooks/useAuth";
import PaywallBlur from "@/components/PaywallBlur";
import { truncateText, isContentLocked } from "../../../shared/paywall";

export default function SPX500Analysis() {
  const { language } = useLanguage();
  const { user } = useAuth();

  // Track page view for analytics
  useTrackScenarioView("spx500-short-term", "S&P 500 (SPX500) Analysis");
  
  // Check if content should be locked
  const isLocked = isContentLocked(user?.role);

  const content = {
    en: {
      title: "S&P 500 (US500) — Short-Term Scenario",
      subtitle: "1–5 trading days",
      category: "Indices",
      timeHorizon: "Short-term (1–5 trading days)",
      lastUpdated: "auto",

      marketContext: {
        title: "Market Context",
        content:
          "The US equity market remains highly sensitive to macroeconomic data and Federal Reserve policy expectations. Recent price action has been driven less by outright directional demand and more by shifts in liquidity conditions, flow structure, and sector-level risk redistribution.",
      },

      scenarios: {
        title: "Scenario Outlook",
        base: {
          emoji: "🟢",
          title: "Base Scenario — Inertial continuation within current structure",
          content:
            "As long as the index holds above the 4,980–5,020 area and volatility remains contained, price action is expected to continue within the existing structural regime.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Sustained hold above 4,980–5,020",
              "No sharp volatility expansion",
              "Ongoing liquidity support",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "The market maintains its current trajectory without signs of structural transition.",
          },
          validity: {
            title: "Scenario validity:",
            text: "Remains valid while the index holds above 4,980 and volatility stays contained.",
          },
        },
        upside: {
          emoji: "🔵",
          title: "Upside Scenario — Range expansion supported by liquidity",
          content:
            "Acceptance above recent highs would suggest a range expansion phase, supported by favorable liquidity conditions and stable risk appetite.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Sustained acceptance above 5,020",
              "Stable or improving risk appetite",
              "No stress signals from rates or credit markets",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "The move is driven by inertia and internal capital reallocation rather than speculative excess.",
          },
        },
        downside: {
          emoji: "🔴",
          title: "Downside Scenario — Transition toward re-pricing",
          content:
            "A loss of the 4,980 area would indicate a transition toward a re-pricing phase, characterized by rising volatility and increased defensive flows.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Breakdown below 4,980",
              "Volatility expansion",
              "Increase in defensive positioning",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "The market shifts from continuation toward risk reassessment.",
          },
        },
      },

      referenceLevels: {
        title: "Analytical Reference Levels",
        items: [
          "Structural Support Zone: 4,980–5,020",
          "Structural Pivot: ~4,950",
          "Risk Boundary: <4,900 — signals a regime shift",
        ],
      },

      disclaimer: {
        text: "This content is provided for informational and educational purposes only. It does not constitute investment advice, trading recommendations, or an offer to buy or sell any financial instruments. Past performance is not indicative of future results. Please review our full",
        disclaimerLink: "Disclaimer",
        and: "and",
        riskDisclosureLink: "Risk Disclosure",
        beforeProceeding: "before proceeding.",
      },
    },
    ru: {
      title: "S&P 500 (US500) — Краткосрочный сценарий",
      subtitle: "1–5 торговых дней",
      category: "Индексы",
      timeHorizon: "Краткосрочный (1–5 торговых дней)",
      lastUpdated: "автоматически",

      marketContext: {
        title: "Контекст рынка",
        content:
          "Американский фондовый рынок остаётся в фазе повышенной чувствительности к макроэкономическим данным и ожиданиям по ДКП ФРС. Текущие движения формируются не столько направленным спросом, сколько изменениями в ликвидности, структуре потоков и перераспределением риска между секторами.",
      },

      scenarios: {
        title: "Сценарный прогноз",
        base: {
          emoji: "🟢",
          title: "Базовый сценарий — Инерционное продолжение в текущей структуре",
          content:
            "Пока индекс удерживается выше зоны 4,980–5,020 и волатильность остаётся контролируемой, рынок сохраняет инерционное движение в рамках существующей структуры.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Удержание выше 4,980–5,020",
              "Отсутствие резкого роста волатильности",
              "Сохранение поддержки со стороны ликвидности",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Рынок продолжает движение в рамках текущего режима без признаков структурного сдвига.",
          },
          validity: {
            title: "Актуальность сценария:",
            text: "Сохраняется, пока индекс удерживается выше 4,980 и волатильность не выходит из контролируемого диапазона.",
          },
        },
        upside: {
          emoji: "🔵",
          title: "Сценарий роста — Расширение при поддержке ликвидности",
          content:
            "Закрепление выше локальных максимумов будет указывать на расширение диапазона при сохранении благоприятных условий ликвидности и аппетита к риску.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Устойчивое закрепление выше 5,020",
              "Стабильный или улучшающийся риск-аппетит",
              "Отсутствие стрессовых сигналов в ставках и кредитных рынках",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Движение поддерживается инерцией и перераспределением капитала внутри рынка.",
          },
        },
        downside: {
          emoji: "🔴",
          title: "Сценарий снижения — Переход к фазе переоценки",
          content:
            "Потеря области 4,980 будет указывать на начало переоценки, сопровождающейся ростом волатильности и усилением защитных потоков.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Потеря 4,980",
              "Рост внутридневной волатильности",
              "Усиление защитного позиционирования",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Рынок переходит в фазу оценки рисков с повышенной вероятностью коррекционных движений.",
          },
        },
      },

      referenceLevels: {
        title: "Аналитические референсные уровни",
        items: [
          "Зона структурной поддержки: 4,980–5,020",
          "Структурный pivot: ~4,950",
          "Граница риска: <4,900 — указывает на смену режима",
        ],
      },

      disclaimer: {
        text: "Данный контент предоставляется исключительно в информационных и образовательных целях. Он не является инвестиционной консультацией, торговыми рекомендациями или предложением купить или продать финансовые инструменты. Прошлые результаты не гарантируют будущих. Пожалуйста, ознакомьтесь с полным",
        disclaimerLink: "Дисклеймером",
        and: "и",
        riskDisclosureLink: "Раскрытием рисков",
        beforeProceeding: "перед использованием.",
      },
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <>
      <Helmet>
        <title>{t.title} | Quantis Media</title>
        <meta
          name="description"
          content={`${t.title} - ${t.timeHorizon}. ${t.marketContext.content.substring(0, 150)}...`}
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{t.category}</span>
                <span>•</span>
                <span>{t.timeHorizon}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
              <p className="text-muted-foreground">
                {language === "en" ? "Last Update:" : "Последнее обновление:"} {t.lastUpdated}
              </p>
            </div>

            {/* Market Context */}
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">{t.marketContext.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.marketContext.content}
              </p>
            </Card>

            {/* Scenarios */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-6">{t.scenarios.title}</h2>

              {/* Base Scenario */}
              <Card className="p-6 mb-4 border-l-4 border-l-blue-500 relative">
                <h3 className="text-xl font-semibold mb-3">
                  {t.scenarios.base.emoji} {t.scenarios.base.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {isLocked ? truncateText(t.scenarios.base.content, 350) : t.scenarios.base.content}
                </p>

                {!isLocked && (
                  <>
                    <div className="mb-4">
                      <p className="font-medium mb-2">{t.scenarios.base.conditions.title}</p>
                      <ul className="list-none space-y-1 ml-0">
                        {t.scenarios.base.conditions.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-1">{t.scenarios.base.interpretation.title}</p>
                      <p className="text-muted-foreground">{t.scenarios.base.interpretation.text}</p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">{t.scenarios.base.validity.title}</p>
                      <p className="text-muted-foreground">{t.scenarios.base.validity.text}</p>
                    </div>
                  </>
                )}

                {isLocked && <PaywallBlur isLocked={isLocked} />}
              </Card>

              {/* Upside Scenario */}
              {!isLocked && (
                <Card className="p-6 mb-4 border-l-4 border-l-green-500">
                  <h3 className="text-xl font-semibold mb-3">
                    {t.scenarios.upside.emoji} {t.scenarios.upside.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t.scenarios.upside.content}
                  </p>

                  <div className="mb-4">
                    <p className="font-medium mb-2">{t.scenarios.upside.conditions.title}</p>
                    <ul className="list-none space-y-1 ml-0">
                      {t.scenarios.upside.conditions.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium mb-1">{t.scenarios.upside.interpretation.title}</p>
                    <p className="text-muted-foreground">{t.scenarios.upside.interpretation.text}</p>
                  </div>
                </Card>
              )}

              {/* Downside Scenario */}
              {!isLocked && (
                <Card className="p-6 mb-4 border-l-4 border-l-red-500">
                  <h3 className="text-xl font-semibold mb-3">
                    {t.scenarios.downside.emoji} {t.scenarios.downside.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t.scenarios.downside.content}
                  </p>

                  <div className="mb-4">
                    <p className="font-medium mb-2">{t.scenarios.downside.conditions.title}</p>
                    <ul className="list-none space-y-1 ml-0">
                      {t.scenarios.downside.conditions.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium mb-1">{t.scenarios.downside.interpretation.title}</p>
                    <p className="text-muted-foreground">{t.scenarios.downside.interpretation.text}</p>
                  </div>
                </Card>
              )}
            </div>

            {/* Reference Levels */}
            {!isLocked && (
              <Card className="p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">{t.referenceLevels.title}</h2>
                <ul className="list-none space-y-2 ml-0">
                  {t.referenceLevels.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Share Buttons */}
            <div className="mb-6">
              <ShareButtons
                title={t.title}
                description={t.marketContext.content.substring(0, 150)}
                url={typeof window !== 'undefined' ? window.location.href : ''}
              />
            </div>

            {/* Disclaimer */}
            <Card className="p-6 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                {t.disclaimer.text}{" "}
                <a href="/disclaimer" className="text-primary hover:underline">
                  {t.disclaimer.disclaimerLink}
                </a>{" "}
                {t.disclaimer.and}{" "}
                <a href="/risk-disclosure" className="text-primary hover:underline">
                  {t.disclaimer.riskDisclosureLink}
                </a>{" "}
                {t.disclaimer.beforeProceeding}
              </p>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
