import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import ShareButtons from "@/components/ShareButtons";

export default function CopperAnalysis() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Copper Market Analysis",
      timeHorizon: "Short-term (1–5 trading days)",
      currentPriceSpot: "$4.18/lb (spot)",
      currentPriceInstrument: "$4.20/lb (HG futures)",
      lastUpdated: "December 26, 2024",
      priceAnchor: {
        title: "Price Anchor",
        content: `Copper is trading near multi-month highs, supported by supply-side constraints, robust demand from China's infrastructure stimulus, and expectations of accelerating energy transition investments. The market remains sensitive to macro data and inventory dynamics.`
      },
      macro: {
        title: "Macro Context",
        content: `The copper market is responding to a confluence of supportive factors: Chinese policy stimulus targeting infrastructure and manufacturing, expectations of Fed rate cuts supporting industrial demand, and ongoing supply disruptions in key producing regions. The energy transition narrative continues to underpin long-term structural demand.`
      },
      demand: {
        title: "Demand Dynamics",
        content: `Chinese demand remains the primary driver, with recent PMI data showing stabilization in manufacturing activity. Power grid investments and EV production continue to support consumption. Western demand is holding steady, with data center buildouts and renewable energy projects providing incremental support.`
      },
      supply: {
        title: "Supply Dynamics",
        content: `Supply remains constrained by operational challenges in Chile and Peru, which account for ~40% of global mined copper. Grade decline at major mines and permitting delays for new projects continue to limit supply-side response. Scrap availability remains tight amid elevated prices.`
      },
      stocks: {
        title: "Inventories & Physical Market",
        content: `Exchange inventories remain near multi-year lows across LME, COMEX, and SHFE. Physical premiums in China have firmed, signaling tightness in the spot market. Time spreads remain in backwardation, reflecting immediate supply pressure.`
      },
      positioning: {
        title: "Market Positioning",
        content: `Speculative positioning is moderately long but not at extreme levels. Managed money has increased net longs over the past month, while producer hedging has been limited. The market structure suggests room for further upside if fundamentals remain supportive.`
      },
      technical: {
        title: "Technical Structure",
        content: `Copper has broken above the $4.10–4.15 resistance zone and is testing the upper end of the recent range. Momentum indicators show strength, but short-term overbought conditions suggest potential for consolidation.`,
        resistance: "Resistance: $4.25–4.30 (2024 highs)",
        support: "Support: $4.05–4.10 (breakout zone)"
      },
      scenarios: {
        title: "Scenario Outlook",
        base: {
          title: "Base Case — Consolidation Above Support",
          content: "Price holds above $4.10–4.15. Inventories remain tight. Chinese demand data continues to stabilize. Interpretation: Market digests recent gains while maintaining constructive structure."
        },
        upside: {
          title: "Upside Scenario — Momentum Expansion",
          content: "Break above $4.25 on stronger Chinese data or supply disruptions. Speculative flows accelerate. Physical premiums widen further. Interpretation: Market prices in tighter supply-demand balance with potential for $4.40+ test."
        },
        downside: {
          title: "Downside Scenario — Tactical Pullback",
          content: "Failure to hold $4.10 on profit-taking or weaker macro data. Short-term correction toward $3.95–4.00. Interpretation: Healthy pullback within broader uptrend, offering re-entry opportunity."
        }
      },
      bottomLine: {
        title: "Bottom Line",
        content: `Copper remains structurally supported by supply constraints and energy transition demand, but near-term price action will be driven by Chinese macro data and inventory trends. The risk-reward favors holding long exposure above $4.10, with tactical profit-taking on moves toward $4.30.`
      },
      disclaimer: "All content is provided strictly for informational and educational purposes only. Quantis Media does not provide investment advice, trade execution instructions, or personalized recommendations."
    },
    ru: {
      title: "Анализ рынка меди",
      timeHorizon: "Краткосрочный (1–5 торговых дней)",
      currentPriceSpot: "$4.18/фунт (спот)",
      currentPriceInstrument: "$4.20/фунт (фьючерсы HG)",
      lastUpdated: "26 декабря 2024 г.",
      priceAnchor: {
        title: "Ценовой ориентир",
        content: `Медь торгуется вблизи многомесячных максимумов при поддержке ограничений на стороне предложения, устойчивого спроса на фоне стимулирования инфраструктуры в Китае и ожиданий ускорения инвестиций в энергопереход. Рынок остаётся чувствительным к макро-данным и динамике запасов.`
      },
      macro: {
        title: "Макроконтекст",
        content: `Рынок меди реагирует на совокупность поддерживающих факторов: китайские стимулирующие меры, направленные на инфраструктуру и производство, ожидания снижения ставок ФРС, поддерживающие промышленный спрос, и продолжающиеся сбои в поставках из ключевых регионов-производителей. Нарратив энергоперехода продолжает поддерживать долгосрочный структурный спрос.`
      },
      demand: {
        title: "Динамика спроса",
        content: `Китайский спрос остаётся основным драйвером: недавние данные PMI показывают стабилизацию производственной активности. Инвестиции в электросети и производство электромобилей продолжают поддерживать потребление. Западный спрос остаётся устойчивым благодаря строительству дата-центров и проектам возобновляемой энергетики.`
      },
      supply: {
        title: "Динамика предложения",
        content: `Предложение остаётся ограниченным из-за операционных проблем в Чили и Перу, на которые приходится ~40% мировой добычи меди. Снижение содержания руды на крупных месторождениях и задержки с разрешениями на новые проекты продолжают ограничивать реакцию со стороны предложения. Доступность лома остаётся ограниченной на фоне высоких цен.`
      },
      stocks: {
        title: "Запасы и физический рынок",
        content: `Биржевые запасы остаются вблизи многолетних минимумов на LME, COMEX и SHFE. Физические премии в Китае укрепились, сигнализируя о напряжённости на спотовом рынке. Временные спреды остаются в бэквордации, отражая немедленное давление на предложение.`
      },
      positioning: {
        title: "Рыночное позиционирование",
        content: `Спекулятивное позиционирование умеренно длинное, но не на экстремальных уровнях. Управляемые деньги увеличили чистые длинные позиции за последний месяц, в то время как хеджирование производителей было ограниченным. Структура рынка предполагает потенциал для дальнейшего роста при сохранении поддерживающих фундаментальных факторов.`
      },
      technical: {
        title: "Техническая структура",
        content: `Медь пробила зону сопротивления $4.10–4.15 и тестирует верхнюю границу недавнего диапазона. Индикаторы импульса показывают силу, но краткосрочные условия перекупленности предполагают потенциал для консолидации.`,
        resistance: "Сопротивление: $4.25–4.30 (максимумы 2024)",
        support: "Поддержка: $4.05–4.10 (зона пробоя)"
      },
      scenarios: {
        title: "Сценарный прогноз",
        base: {
          title: "Базовый сценарий — Консолидация выше поддержки",
          content: "Цена удерживается выше $4.10–4.15. Запасы остаются ограниченными. Данные по китайскому спросу продолжают стабилизироваться. Интерпретация: Рынок переваривает недавний рост, сохраняя конструктивную структуру."
        },
        upside: {
          title: "Сценарий роста — Расширение импульса",
          content: "Пробой выше $4.25 на фоне более сильных китайских данных или сбоев в поставках. Спекулятивные потоки ускоряются. Физические премии расширяются. Интерпретация: Рынок закладывает более жёсткий баланс спроса и предложения с потенциалом теста $4.40+."
        },
        downside: {
          title: "Сценарий снижения — Тактический откат",
          content: "Неспособность удержать $4.10 на фоне фиксации прибыли или более слабых макро-данных. Краткосрочная коррекция к $3.95–4.00. Интерпретация: Здоровый откат в рамках более широкого восходящего тренда, предоставляющий возможность для повторного входа."
        }
      },
      bottomLine: {
        title: "Итоговая оценка",
        content: `Медь остаётся структурно поддержанной ограничениями предложения и спросом на энергопереход, но краткосрочная ценовая динамика будет определяться китайскими макро-данными и трендами запасов. Соотношение риска и доходности благоприятствует удержанию длинных позиций выше $4.10 с тактической фиксацией прибыли при движении к $4.30.`
      },
      disclaimer: "Весь контент предоставляется исключительно в информационных и образовательных целях. Quantis Media не предоставляет инвестиционные консультации, инструкции по исполнению сделок или персонализированные рекомендации."
    }
  };

  const currentContent = language === "en" ? content.en : content.ru;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="text-sm text-foreground mb-6">
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
              {language === "en" ? "Copper" : "Медь"}
            </span>
          </div>

          {/* Header Section */}
          <div className="max-w-[760px] mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="p-4">
                <div className="text-sm text-foreground mb-1">
                  {language === "en" ? "Time Horizon" : "Временной горизонт"}
                </div>
                <div className="font-semibold">{currentContent.timeHorizon}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-foreground mb-1">
                  {language === "en" ? "Spot Price" : "Спотовая цена"}
                </div>
                <div className="font-semibold text-gold">{currentContent.currentPriceSpot}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-foreground mb-1">HG Futures</div>
                <div className="font-semibold text-gold">{currentContent.currentPriceInstrument}</div>
              </Card>
              <Card className="p-4">
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
              
              {/* Share Buttons */}
              <div className="mb-6">
                <ShareButtons 
                  title={currentContent.title}
                  url="/market-insights/energy-metals/metals/copper"
                  description={language === "en" 
                    ? "Copper market analysis and short-term outlook from Quantis Media"
                    : "Анализ рынка меди и краткосрочный прогноз от Quantis Media"
                  }
                />
              </div>
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
            <section>
              <h2 className="text-2xl font-bold mb-6">{currentContent.scenarios.title}</h2>

              <Card className="p-6 mb-4 border-blue-500/20 bg-blue-500/5 border-l-4 border-l-blue-500">
                <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.base.title}</h3>
                <p className="text-foreground leading-relaxed">
                  {currentContent.scenarios.base.content}
                </p>
              </Card>

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
            </section>

            {/* Bottom Line */}
            <section className="border-l-2 border-muted pl-6">
              <h2 className="text-2xl font-bold mb-4">{currentContent.bottomLine.title}</h2>
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {currentContent.bottomLine.content}
              </p>
            </section>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-muted/30 border border-muted rounded-lg">
              <p className="text-sm text-foreground leading-relaxed">
                {currentContent.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
