import { useState } from "react";
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


export default function SilverAnalysis() {
  const { language } = useLanguage();
  
  // Track page view for analytics
  useTrackScenarioView("silver-analysis", "Silver Market Analysis");
  const { user } = useAuth();
  const isLocked = isContentLocked(user?.role);

  const content = {
    en: {
      title: "SILVER — Short-Term Market Outlook",
      timeHorizon: "1–5 trading days",
      currentPriceSpot: "~$74.5–75.1/oz",
      currentPriceInstrument: "SILVER",
      lastUpdated: "26 December 2025",

      priceAnchor: {
        title: "Price Anchor & Setup",
        content:
          "Silver is trading near record highs around $74.5–$75.1/oz, with the rally driven by a mix of industrial and investment demand, tightening availability, and year-end liquidity effects.",
      },

      macro: {
        title: "Macro (Fed, real yields, USD)",
        content:
          "Near-term direction remains highly sensitive to the expected path of rates and the USD/real yield complex. In easing regimes, silver tends to benefit from lower opportunity cost and \"real asset\" demand.",
      },

      demand: {
        title: "Demand & flows",
        content:
          "Reuters highlights strong demand drivers plus rotation into smaller precious metals markets, amplifying moves in thin liquidity.\n\nSilver Institute research underscores the structural role of industrial demand and the balance's sensitivity to deficits.",
      },

      supply: {
        title: "Supply (Miners, Recycling)",
        content:
          "Silver supply remains steady with modest growth. Producer hedging is minimal, limiting supply-side pressure on the market.",
      },

      stocks: {
        title: "Stocks/Availability",
        content:
          "Silver is historically more sensitive to thin liquidity, logistical constraints, and \"paper\" flows (futures/ETF) against limited physical market depth. Reuters directly emphasizes that moves could be amplified by low market liquidity and inflows into \"smaller precious metals markets.\"",
      },

      positioning: {
        title: "Positioning & Liquidity",
        content:
          "In the next few days, the market will be especially sensitive to any indications of \"tightness\" (warehouse levels/deliverability), as the momentum is already \"momentum-driven.\" In such regimes, silver often shows extended candles and sharp \"spike\" levels.",
      },

      technical: {
        title: "Technical",
        content: "At record highs, main regime is trend-with-spikes:",
        resistance: "Upside supported by momentum + macro",
        support: "Downside risk: profit-taking on thin market (year-end)",
      },

      scenarios: {
        title: "Scenario Outlook (1–5 days)",
        base: {
          title: "Base case:",
          content:
            "High-volatility consolidation $72–$76/oz, with risk of short-term \"spike moves\" on headlines/data on rates and dollar.",
        },
        upside: {
          title: "Upside scenario:",
          content:
            "Test and hold above $75–$77/oz if rotation into precious metals continues and risk premium/easing expectations intensify.",
        },
        downside: {
          title: "Downside scenario:",
          content:
            "Pullback to $70–$72/oz on stronger USD/yields or profit-taking in \"thin\" liquidity after records.",
        },
      },

      bottomLine: {
        title: "Bottom Line",
        content:
          "Silver remains in an upward momentum regime, but the next few days are a zone of heightened risk of sharp pullbacks/spikes due to liquidity and overheated momentum.",
      },

      disclaimer: {
        text: "This content is provided for informational and educational purposes only. It does not constitute investment advice, trading recommendations, or an offer to buy or sell any financial instruments. Past performance is not indicative of future results. Please review our full",
        disclaimerLink: "Disclaimer",
        and: "and",
        riskLink: "Risk Disclosure",
      },
    },

    ru: {
      title: "Серебро: краткосрочный прогноз и сценарии",
      timeHorizon: "1–5 торговых дней",
      currentPriceSpot: "~$74.5–75.1/унция",
      currentPriceInstrument: "SILVER",
      lastUpdated: "26 декабря 2025",

      priceAnchor: {
        title: "Текущая цена и контекст",
        content:
          "Серебро обновило исторические максимумы и торгуется вблизи $74.5–75.1/oz, демонстрируя ускорение на сочетании промышленного спроса, инвестиционного притока и сжатия доступных запасов/ликвидности на рынке.",
      },

      macro: {
        title: "Макро-фактор: ФРС, реальная доходность и USD",
        content:
          "Для серебра (как для \"hybrid\" металла: инвестиционный + промышленный) ключевой триггер ближайших дней — ожидания траектории ставок и реакция USD/real yields. В режиме смягчения ДКП поддержка идёт через снижение альтернативной доходности и рост спроса на \"реальные активы\" (особенно в условиях геополитической неопределённости).",
      },

      demand: {
        title: "Спрос: инвестиционный поток + индустриальный компонент",
        content:
          "Reuters описывает текущий импульс как сочетание:\n\n• инвестиционного спроса (ротация в \"меньшие\" драгметаллы при низкой ликвидности),\n• промышленного спроса,\n• и фактора \"tightness\" по доступным объёмам.\n\nБолее \"структурный\" фон подтверждается отраслевыми обзорами (Silver Institute), где отмечается важность промышленного сегмента и чувствительность баланса к дефицитам.",
      },

      supply: {
        title: "Предложение: добыча, переработка",
        content:
          "Предложение серебра остаётся стабильным с умеренным ростом. Хеджирование производителей минимально, что ограничивает давление со стороны предложения.",
      },

      stocks: {
        title: "Запасы/склады: индикатор дефицитности",
        content:
          "Серебро исторически более чувствительно к:\n\n• тонкой ликвидности,\n• логистическим ограничениям,\n• и \"бумажным\" потокам (фьючерсы/ETF) на фоне ограниченной глубины физического рынка.\n\nReuters прямо подчёркивает, что движения могли усиливаться из-за низкой рыночной ликвидности и притока в \"smaller precious metals markets\".",
      },

      positioning: {
        title: "Позиционирование и ликвидность",
        content:
          "В ближайшие дни рынок будет особенно чувствителен к любым сигналам \"tightness\" (складские уровни/поставляемость), т.к. импульс уже \"моментумный\". В таких режимах серебро часто демонстрирует расширенные свечи и резкие \"проколы\" уровней.",
      },

      technical: {
        title: "Техническая логика",
        content: "При обновлении максимумов основной режим — trend-with-spikes:",
        resistance: "вверх поддерживают momentum + макро",
        support: "вниз риск — \"profit-taking\" на тонком рынке (конец года)",
      },

      scenarios: {
        title: "Сценарный прогноз (1–5 дней)",
        base: {
          title: "Base case (наиболее вероятный):",
          content:
            "Высоковолатильная консолидация $72–$76/oz, с риском краткосрочных \"spike moves\" на заголовках/данных по ставкам и доллару.",
        },
        upside: {
          title: "Upside scenario:",
          content:
            "Тест и удержание выше $75–$77/oz, если продолжится ротация в драгметаллы и усилится риск-премия/ожидания смягчения.",
        },
        downside: {
          title: "Downside scenario:",
          content:
            "Откат к $70–$72/oz при усилении USD/доходностей или при фиксации прибыли в \"тонкой\" ликвидности после рекордов.",
        },
      },

      bottomLine: {
        title: "Итог",
        content:
          "Серебро остаётся в режиме импульса вверх, но ближайшие дни — зона повышенного риска резких откатов/проколов из-за ликвидности и перегретого момента.",
      },

      disclaimer: {
        text: "Данный контент предоставляется исключительно в информационных и образовательных целях. Он не является инвестиционной рекомендацией, торговой инструкцией или предложением купить или продать какие-либо финансовые инструменты. Прошлые результаты не гарантируют будущей доходности. Пожалуйста, ознакомьтесь с полным текстом",
        disclaimerLink: "Дисклеймера",
        and: "и",
        riskLink: "Раскрытия рисков",
      },
    },
  };

  const currentContent = content[language];

  return (
    <>
      <Helmet>
        <title>Silver Market Outlook | Quantis Media</title>
        <meta
          name="description"
          content="Institutional short-term analysis of silver including price levels, scenarios, demand-supply dynamics and market positioning."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1">
          <div className="container py-12">
            {/* Breadcrumb */}
            <div className="text-sm text-foreground mb-8">
              <a href="/market-insights" className="hover:text-foreground cursor-pointer">
                {language === "en" ? "Market Insights" : "Рыночная аналитика"}
              </a>
              <span className="mx-2">/</span>
              <a href="/market-insights/energy-metals" className="hover:text-foreground cursor-pointer">
                {language === "en" ? "Energy & Metals" : "Энергетика и металлы"}
              </a>
              <span className="mx-2">/</span>
              <a href="/market-insights/energy-metals/metals" className="hover:text-foreground cursor-pointer">
                {language === "en" ? "Metals" : "Металлы"}
              </a>
              <span className="mx-2">/</span>
              <span className="text-foreground">
                {language === "en" ? "Silver" : "Серебро"}
              </span>
            </div>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Share Buttons */}
              <div className="mb-6">
                <ShareButtons 
                  title={currentContent.title}
                  url="/market-insights/energy-metals/metals/silver"
                  description={language === "en" 
                    ? "Silver market analysis and short-term outlook from Quantis Media"
                    : "Анализ рынка серебра и краткосрочный прогноз от Quantis Media"
                  }
                />
              </div>
                <Card className="p-6 bg-card/50">
                  <div className="text-sm text-foreground mb-2">
                    {language === "en" ? "Time Horizon" : "Временной горизонт"}
                  </div>
                  <div className="text-lg font-semibold">{currentContent.timeHorizon}</div>
                </Card>

                <Card className="p-6 bg-card/50">
                  <div className="text-sm text-foreground mb-2">
                    {language === "en" ? "Spot Price" : "Спотовая цена"}
                  </div>
                  <div className="text-lg font-semibold">{currentContent.currentPriceSpot}</div>
                </Card>

                <Card className="p-6 bg-card/50">
                  <div className="text-sm text-foreground mb-2">
                    {currentContent.currentPriceInstrument}
                  </div>
                  <div className="text-lg font-semibold">{currentContent.currentPriceSpot}</div>
                </Card>

                <Card className="p-6 bg-card/50">
                  <div className="text-sm text-foreground mb-2">
                    {language === "en" ? "Last Updated" : "Обновлено"}
                  </div>
                  <div className="text-lg font-semibold">{currentContent.lastUpdated}</div>
                </Card>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 max-w-3xl">
              {/* Price Anchor */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  {currentContent.priceAnchor.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.priceAnchor.content}
                </p>
              </section>

              {/* Macro */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🌐</span>
                  {currentContent.macro.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.macro.content}
                </p>
              </section>

              {/* Demand */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  {currentContent.demand.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.demand.content}
                </p>
              </section>

              {/* Supply */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">⛏️</span>
                  {currentContent.supply.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.supply.content}
                </p>
              </section>

              {/* Stocks */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  {currentContent.stocks.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.stocks.content}
                </p>
              </section>

              {/* Positioning */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">👥</span>
                  {currentContent.positioning.title}
                </h2>
                <p className="text-foreground whitespace-pre-line">
                  {currentContent.positioning.content}
                </p>
              </section>

              {/* Technical */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🔧</span>
                  {currentContent.technical.title}
                </h2>
                <p className="text-foreground mb-4">{currentContent.technical.content}</p>
                <div className="space-y-2 ml-4">
                  <p className="text-foreground">{currentContent.technical.resistance}</p>
                  <p className="text-foreground">{currentContent.technical.support}</p>
                </div>
              </section>

              {/* Scenarios */}
              <section className="relative">
                <h2 className="text-2xl font-bold mb-6">{currentContent.scenarios.title}</h2>

                <div className="space-y-4">
                  {/* Base Case */}
                  <Card className="p-6 border-l-4 border-l-blue-500 bg-blue-500/5">
                    <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.base.title}</h3>
                    <p className="text-foreground">
                      {isLocked ? truncateText(currentContent.scenarios.base.content, 350) : currentContent.scenarios.base.content}
                    </p>
                  </Card>

                  {!isLocked && (
                    <>
                      {/* Upside */}
                      <Card className="p-6 border-l-4 border-l-green-500 bg-green-500/5">
                        <h3 className="font-bold text-lg mb-2">
                          {currentContent.scenarios.upside.title}
                        </h3>
                        <p className="text-foreground">
                          {currentContent.scenarios.upside.content}
                        </p>
                      </Card>

                      {/* Downside */}
                      <Card className="p-6 border-l-4 border-l-red-500 bg-red-500/5">
                        <h3 className="font-bold text-lg mb-2">
                          {currentContent.scenarios.downside.title}
                        </h3>
                        <p className="text-foreground">
                          {currentContent.scenarios.downside.content}
                        </p>
                      </Card>
                    </>
                  )}
                </div>
                
                {/* Paywall Overlay */}
                {isLocked && (
                  <div className="mt-8">
                    <PaywallBlur isLocked={isLocked} />
                  </div>
                )}
              </section>

              {/* Bottom Line */}
              <section>
                <h2 className="text-2xl font-bold mb-4">{currentContent.bottomLine.title}</h2>
                <p className="text-foreground">{currentContent.bottomLine.content}</p>
              </section>

              {/* Disclaimer */}
              <section className="pt-8 border-t">
                <p className="text-sm text-foreground">
                  <strong>
                    {language === "en" ? "Disclaimer:" : "Дисклеймер:"}
                  </strong>{" "}
                  {currentContent.disclaimer.text}{" "}
                  <a href="/legal/disclaimer" className="underline hover:text-foreground">
                    {currentContent.disclaimer.disclaimerLink}
                  </a>{" "}
                  {currentContent.disclaimer.and}{" "}
                  <a href="/legal/risk-disclosure" className="underline hover:text-foreground">
                    {currentContent.disclaimer.riskLink}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
