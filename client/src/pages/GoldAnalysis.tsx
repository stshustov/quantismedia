import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import ShareButtons from "@/components/ShareButtons";
import { Card } from "@/components/ui/card";
import { useTrackScenarioView } from "@/hooks/useTrackScenarioView";
import { useAuth } from "@/_core/hooks/useAuth";
import PaywallBlur from "@/components/PaywallBlur";
import { truncateText, isContentLocked } from "../../../shared/paywall";


export default function GoldAnalysis() {
  const { language } = useLanguage();
  
  // Track page view for analytics
  useTrackScenarioView("gold-analysis", "Gold Market Analysis");
  const { user } = useAuth();
  const isLocked = isContentLocked(user?.role);

  const content = {
    en: {
      title: "Gold (XAUUSD) — Short-Term Scenario",
      subtitle: "1–5 trading days",
      category: "Metals",
      timeHorizon: "Short-term (1–5 trading days)",
      lastUpdated: "auto",

      marketContext: {
        title: "Market Context",
        content:
          "Gold is trading near historical highs amid easing Federal Reserve policy expectations, sustained institutional demand from central banks, and elevated geopolitical uncertainty. Current price action is driven less by momentum chasing and more by liquidity balance and the defense of key structural zones, leaving the market sensitive to shifts in the volatility regime.",
      },

      scenarios: {
        title: "Scenario Outlook",
        base: {
          emoji: "🟢",
          title: "Base Scenario — Consolidation within the current liquidity regime",
          content:
            "As long as price holds above 4,495–4,500 and volatility remains contained, gold is expected to consolidate following the prior impulse. Flows remain predominantly institutional, with no clear signs of aggressive profit-taking.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Price holds above 4,495–4,500",
              "Stabilizing or declining short-term volatility",
              "No sharp expansion in risk premium",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "The market is digesting the prior move, forming a structural base for the next directional phase.",
          },
          validity: {
            title: "Scenario validity:",
            text: "Remains valid while price holds above 4,495 and volatility stays controlled.",
          },
        },
        upside: {
          emoji: "🔵",
          title: "Upside Scenario — Expansion driven by renewed risk premium",
          content:
            "A sustained break above 4,520 would indicate a transition from consolidation to range expansion, supported by rising geopolitical or monetary risk premium.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Sustained acceptance above 4,520",
              "Increase in geopolitical or monetary uncertainty",
              "Range expansion without disorderly volatility",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "Acceleration becomes possible upon the emergence of an external catalyst.",
          },
        },
        downside: {
          emoji: "🔴",
          title: "Downside Scenario — Tactical pullback within broader structure",
          content:
            "A move back below 4,470 would signal a tactical correction driven by profit-taking and localized liquidity compression, without implying a broader structural breakdown.",
          conditions: {
            title: "Key conditions:",
            items: [
              "Loss of the 4,470 area",
              "Short-term volatility expansion",
              "Increased profit-taking flows",
            ],
          },
          interpretation: {
            title: "Interpretation:",
            text: "The pullback remains corrective within a broader constructive context.",
          },
        },
      },

      referenceLevels: {
        title: "Analytical Reference Levels",
        items: [
          "Structural Support: 4,470–4,500",
          "Expansion Area: >4,520",
          "Risk Boundary: <4,440 — invalidates the consolidation scenario",
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
      title: "Gold (XAUUSD) — Краткосрочный сценарий",
      subtitle: "1–5 торговых дней",
      category: "Металлы",
      timeHorizon: "Краткосрочный (1–5 торговых дней)",
      lastUpdated: "автоматически",

      marketContext: {
        title: "Контекст рынка",
        content:
          "Золото торгуется вблизи исторических максимумов на фоне смягчения ожиданий по денежно-кредитной политике ФРС, устойчивого институционального спроса со стороны центральных банков и сохраняющейся геополитической неопределённости. Текущая динамика формируется не импульсным спросом, а балансом ликвидности и удержанием ключевых структурных зон, что делает рынок чувствительным к смене волатильностного режима.",
      },

      scenarios: {
        title: "Сценарный прогноз",
        base: {
          emoji: "🟢",
          title: "Базовый сценарий — Консолидация в рамках текущего режима ликвидности",
          content:
            "Пока цена удерживается выше зоны 4,495–4,500 и не наблюдается ускорения волатильности, рынок сохраняет режим консолидации после импульсного движения. Потоки остаются преимущественно институциональными, без признаков агрессивной фиксации прибыли.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Удержание выше 4,495–4,500",
              "Стабилизация или снижение краткосрочной волатильности",
              "Отсутствие резкого расширения risk premium",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Рынок переваривает предыдущий импульс, формируя структурную базу для следующего движения.",
          },
          validity: {
            title: "Актуальность сценария:",
            text: "Сохраняется, пока цена удерживается выше 4,495 и волатильность остаётся контролируемой.",
          },
        },
        upside: {
          emoji: "🔵",
          title: "Сценарий роста — Расширение на фоне роста risk premium",
          content:
            "Закрепление выше 4,520 будет указывать на выход из консолидации и переход к расширению диапазона на фоне усиления геополитической или монетарной премии.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Устойчивое закрепление выше 4,520",
              "Рост геополитической или монетарной неопределённости",
              "Расширение диапазона без резкого всплеска волатильности",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Допускается ускорение движения при появлении внешнего катализатора.",
          },
        },
        downside: {
          emoji: "🔴",
          title: "Сценарий снижения — Тактический откат в рамках структуры",
          content:
            "Возврат ниже 4,470 указывает на тактическую коррекцию, связанную с фиксацией прибыли и локальным сжатием ликвидности, без смены более широкого рыночного контекста.",
          conditions: {
            title: "Ключевые условия:",
            items: [
              "Потеря области 4,470",
              "Рост краткосрочной волатильности",
              "Усиление потоков profit-taking",
            ],
          },
          interpretation: {
            title: "Интерпретация:",
            text: "Коррекция развивается в рамках более широкого восходящего контекста.",
          },
        },
      },

      referenceLevels: {
        title: "Аналитические референсные уровни",
        items: [
          "Структурная поддержка: 4,470–4,500",
          "Зона расширения импульса: >4,520",
          "Граница риска: <4,440 — инвалидирует сценарий консолидации",
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
