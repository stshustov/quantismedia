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


export default function GoldAnalysis() {
  const { language } = useLanguage();
  
  // Track page view for analytics
  useTrackScenarioView("gold-analysis", "Gold Market Analysis");
  const { user } = useAuth();
  const isLocked = isContentLocked(user?.role);

  const content = {
    en: {
      title: "GOLD — Short-Term Market Outlook",
      timeHorizon: "1–5 trading days",
      currentPriceSpot: "~$4,50x/oz",
      currentPriceInstrument: "~4505 (GOLD)",
      lastUpdated: "26 December 2025",

      priceAnchor: {
        title: "Price Anchor & Setup",
        content:
          "Gold is trading near record highs (~$4.50x/oz spot), supported by Fed easing expectations and safe-haven demand amid geopolitical and currency concerns.\n\nOn your GOLD chart, price is ~4505, consistent with a \"holding at highs\" regime after a strong impulse.",
      },

      macro: {
        title: "Macro (Fed & Global CBs)",
        content:
          "The Fed lowered the target range to 3.50%–3.75% and reiterated data dependence, keeping the market focused on the path of real yields and USD—both central to gold's marginal pricing.",
      },

      demand: {
        title: "Demand (CBs, ETFs, Retail)",
        content:
          "**Central banks:** WGC reports net purchases of 53t in October (+36% m/m), reinforcing the structural official-sector bid.\n\n**ETFs/investment:** WGC highlights strong investment demand in Q3'25 with +222t ETF buying and total demand of 1,313t (record quarterly level).\n\n**Retail/jewellery:** at record prices, price sensitivity increases—Reuters notes softened Indian buying (wider discounts), while China dynamics differ due to local factors and supply constraints.",
      },

      supply: {
        title: "Supply (Miners, Recycling, Hedging)",
        content:
          "WGC shows Q3'25 total supply 1,313t, mine production 977t, recycling 344t—steady growth rather than a surge.\n\nProducer hedging remains modest (e.g., Q1'25 net hedging ~5t, mostly financing-related), limiting \"producer-sell\" overhang risk.",
      },

      stocks: {
        title: "Stocks/Availability (London/COMEX)",
        content:
          "LBMA reports 8,907t of gold in London vaults at end-Nov (+0.55% m/m), providing a snapshot of physical market depth.\n\nCME daily stock reports help track COMEX warehouse availability during volatility regimes.",
      },

      positioning: {
        title: "Positioning & Liquidity",
        content:
          "Year-end liquidity can amplify moves; Reuters flags thin trading conditions contributing to outsized precious metals swings.",
      },

      technical: {
        title: "Technical (GOLD M30 Chart)",
        content: "Uptrend intact, momentum moderating near resistance. Key zones:",
        resistance: "Resistance: ~4521 (then higher overhead supply zone)",
        support: "Support: ~4495, then ~4469, then ~4444",
      },

      scenarios: {
        title: "Scenario Outlook (1–5 days)",
        base: {
          title: "Base case:",
          content:
            "Range/consolidation 4495–4521 (GOLD), with headline-driven volatility.",
        },
        upside: {
          title: "Upside:",
          content:
            "Sustained break above 4521 on softer USD/real yields or renewed geopolitical premium / ETF inflows.",
        },
        downside: {
          title: "Downside:",
          content:
            "Pullback toward 4469–4444 on profit-taking + stronger USD/real yields and/or calmer risk tone; retail price sensitivity may amplify dips.",
        },
      },

      bottomLine: {
        title: "Bottom Line",
        content: "Structurally supported, tactically consolidation-prone.",
      },

      disclaimer: {
        text: "This content is provided for informational and educational purposes only. It does not constitute investment advice, trading recommendations, or an offer to buy or sell any financial instruments. Past performance is not indicative of future results. Please review our full",
        disclaimerLink: "Disclaimer",
        and: "and",
        riskLink: "Risk Disclosure",
      },
    },

    ru: {
      title: "Золото: краткосрочный прогноз и сценарии",
      timeHorizon: "1–5 торговых дней",
      currentPriceSpot: "~$4,50x/унция",
      currentPriceInstrument: "~4505 (GOLD)",
      lastUpdated: "26 декабря 2025",

      priceAnchor: {
        title: "Текущая цена и контекст",
        content:
          "Золото торгуется вблизи исторических максимумов (спот около $4,50x/oz), при этом внутридневная динамика показывает повышенную чувствительность к ожиданиям смягчения ДКП ФРС и к спросу «убежища» на фоне геополитики и валютных рисков.\n\nНа инструменте GOLD цена в момент анализа около 4505, что соответствует удержанию рынка \"на верхах\" после импульса.",
      },

      macro: {
        title: "Макро-драйвер: ДКП ФРС и глобальных ЦБ",
        content:
          "Фундаментально золоту помогает режим, где рынки продолжают закладывать дальнейшее смягчение при высокой неопределённости. На последнем заседании ФРС снизила целевой диапазон ставки до 3.50%–3.75%, сохранив зависимость дальнейших шагов от данных и баланса рисков.",
      },

      demand: {
        title: "Спрос: центральные банки, ETF, ритейл",
        content:
          "**ЦБ:** официальный сектор остаётся ключевым структурным покупателем. По данным WGC, в октябре чистые покупки ЦБ составили 53 т (+36% м/м), с концентрацией покупок у EM-ЦБ.\n\n**ETF / инвестиционный спрос:** в 3К25 WGC фиксирует сильную инвестиционную компоненту — ETF-покупки +222 т, при общем спросе 1 313 т (квартальный максимум), что подчёркивает устойчивость \"финансового спроса\".\n\n**Ритейл/ювелирка:** на рекордных ценах физический розничный спрос становится более ценочувствительным: Reuters указывает на охлаждение спроса в Индии (расширение дисконтов), при более устойчивой динамике в Китае за счёт локальных факторов.",
      },

      supply: {
        title: "Предложение: добыча, переработка, хеджирование производителей",
        content:
          "WGC: в 3К25 совокупное предложение 1 313 т (+3% г/г), добыча 977 т (+2% г/г), переработка/скрап 344 т (+6% г/г).\n\nХеджирование производителей остаётся умеренным (в Q1'25 net producer hedging около 5 т, в основном под финансирование), т.е. нет признаков агрессивного \"продажного навеса\" со стороны майнеров.",
      },

      stocks: {
        title: "Запасы и availability металла: Лондон/COMEX",
        content:
          "По данным LBMA London Vault Data, золото в лондонских хранилищах на конец ноября 2025 составило 8 907 т (+0.55% м/м), что в целом указывает на достаточную инфраструктурную \"подкладку\" OTC-рынка.\n\nПо COMEX ежедневные отчёты CME отражают текущие уровни складских запасов (registered/eligible); рынок мониторит их как индикатор \"deliverability\" в периоды высокой волатильности.",
      },

      positioning: {
        title: "Позиционирование: фонды/спекулянты и flow-driven риск",
        content:
          "Данные по managed money показывают, что спекулятивное позиционирование остаётся значимым, но ключевой риск сейчас — не столько \"перекупленность\", сколько тонкая ликвидность конца года, когда движение ускоряется на новостях и стоп-потоках.",
      },

      technical: {
        title: "Техника (GOLD, M30): тренд вверх, импульс замедляется",
        content:
          "График показывает сохранение восходящей структуры, но рынок упирается в \"верхнюю зону\" и начинает пилить диапазон. Ближайшие уровни:",
        resistance: "Resistance / предложение: ~4521, далее зона выше как overhead supply",
        support: "Support / спрос: ~4495, затем ~4469, далее ~4444",
      },

      scenarios: {
        title: "Сценарный прогноз (1–5 торговых дней)",
        base: {
          title: "Base case (наиболее вероятный):",
          content:
            "Консолидация/волатильный боковик в диапазоне 4495–4521 (для GOLD), при сохранении позитивного \"macro-bid\", но с риском фиксации прибыли на тонком рынке.",
        },
        upside: {
          title: "Upside scenario:",
          content:
            "Устойчивое закрепление выше 4521 при усилении: (а) ожиданий снижения ставок/ослабления USD, или (б) геополитической риск-премии и притока в ETF/убежища.",
        },
        downside: {
          title: "Downside scenario:",
          content:
            "Откат в 4469–4444 при комбинации: (а) \"profit-taking\" + (б) восстановление USD/real yields или успокоение риск-фона. Ритейл-спрос на рекордных ценах может усиливать амплитуду коррекций.",
        },
      },

      bottomLine: {
        title: "Итог",
        content:
          "Краткосрочно золото остаётся структурно поддержанным (ЦБ + инвестиционный спрос), но на горизонте нескольких дней баланс смещён в сторону консолидации с повышенной вероятностью резких проколов уровней из-за тонкой ликвидности и headline-risk.",
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
        <title>Gold Market Outlook | Quantis Media</title>
        <meta
          name="description"
          content="Institutional short-term analysis of gold including price levels, scenarios, demand-supply dynamics and market positioning."
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
                {language === "en" ? "Gold" : "Золото"}
              </span>
            </div>

            {/* Header Section */}
            <div className="max-w-[760px] mx-auto mb-12">


              <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>
              
              {/* Share Buttons */}
              <div className="mb-6">
                <ShareButtons 
                  title={currentContent.title}
                  url="/market-insights/energy-metals/metals/gold"
                  description={language === "en" 
                    ? "Gold market analysis and short-term outlook from Quantis Media"
                    : "Анализ рынка золота и краткосрочный прогноз от Quantis Media"
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">
                    {language === "en" ? "Time Horizon" : "Временной горизонт"}
                  </div>
                  <div className="font-semibold">{currentContent.timeHorizon}</div>
                </Card>
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">
                    {language === "en" ? "Spot Price" : "Спотовая цена"}
                  </div>
                  <div className="font-semibold text-gold">{currentContent.currentPriceSpot}</div>
                </Card>
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">GOLD</div>
                  <div className="font-semibold text-gold">{currentContent.currentPriceInstrument}</div>
                </Card>
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">
                    {language === "en" ? "Last Updated" : "Обновлено"}
                  </div>
                  <div className="font-semibold">{currentContent.lastUpdated}</div>
                </Card>
              </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-[760px] mx-auto space-y-8">
              {/* Price Anchor */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  {currentContent.priceAnchor.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.priceAnchor.content}
                </p>
              </section>

              {/* Macro */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🌐</span>
                  {currentContent.macro.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.macro.content}
                </p>
              </section>

              {/* Demand */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  {currentContent.demand.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.demand.content}
                </p>
              </section>

              {/* Supply */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">⛏️</span>
                  {currentContent.supply.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.supply.content}
                </p>
              </section>

              {/* Stocks */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  {currentContent.stocks.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.stocks.content}
                </p>
              </section>

              {/* Positioning */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">👥</span>
                  {currentContent.positioning.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.positioning.content}
                </p>
              </section>

              {/* Technical */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🔧</span>
                  {currentContent.technical.title}
                </h2>
                <p className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                  {currentContent.technical.content}
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">{currentContent.technical.resistance}</p>
                  <p className="text-foreground">{currentContent.technical.support}</p>
                </div>
              </section>

              {/* Scenario Outlook */}
              <section className="relative">
                <h2 className="text-2xl font-bold mb-6">{currentContent.scenarios.title}</h2>

                <Card className="p-6 mb-4 border-blue-500/20 bg-blue-500/5 border-l-4 border-l-blue-500">
                  <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.base.title}</h3>
                  <p className="text-foreground leading-relaxed">
                    {isLocked ? truncateText(currentContent.scenarios.base.content, 350) : currentContent.scenarios.base.content}
                  </p>
                </Card>

                {!isLocked && (
                  <>
                    <Card className="p-6 mb-4 border-green-500/20 bg-green-500/5 border-l-4 border-l-green-500">
                      <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.upside.title}</h3>
                      <p className="text-foreground leading-relaxed">
                        {currentContent.scenarios.upside.content}
                      </p>
                    </Card>

                    <Card className="p-6 border-red-500/20 bg-red-500/5 border-l-4 border-l-red-500">
                      <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.downside.title}</h3>
                      <p className="text-foreground leading-relaxed">
                        {currentContent.scenarios.downside.content}
                      </p>
                    </Card>
                  </>
                )}
                
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
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.bottomLine.content}
                </p>
              </section>

              {/* Disclaimer */}
              <section className="pt-8 border-t border-border">
                <p className="text-sm text-foreground">
                  <strong>{language === "en" ? "Disclaimer:" : "Дисклеймер:"}</strong>{" "}
                  {currentContent.disclaimer.text}{" "}
                  <a href="/legal/disclaimer" className="text-gold hover:underline">
                    {currentContent.disclaimer.disclaimerLink}
                  </a>{" "}
                  {currentContent.disclaimer.and}{" "}
                  <a href="/legal/risk-disclosure" className="text-gold hover:underline">
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
