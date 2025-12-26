import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import ShareButtons from "@/components/ShareButtons";


export default function WTICrudeOil() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "WTI Crude Oil — Short-Term Market Outlook",
      timeHorizon: "1–5 trading days",
      currentPrice: "~58.5 USD/bbl",
      lastUpdated: "26 December 2024",
      
      marketSnapshot: {
        title: "Current Market Snapshot",
        content: "At the time of writing, WTI crude trades near 58.5 USD per barrel, consolidating after a recovery from the 55–56 USD area. Price action suggests a transition into a balance phase, reflecting a tug-of-war between supportive US fundamentals and a broader global supply overhang."
      },
      
      fundamentalBackdrop: {
        title: "Fundamental Backdrop (Supply & Demand)",
        content: "Global oil balances remain characterized by moderate demand growth and ample supply availability. IEA projections do not indicate a near-term deficit, while OPEC+ continues to prioritize market stability over aggressive production expansion.\n\nThis environment limits upside momentum while keeping the market highly reactive to short-term shocks."
      },
      
      inventories: {
        title: "Inventories & Physical Market",
        content: "US crude inventories remain below seasonal averages, and refinery utilization provides near-term support to physical demand. However, refined product demand shows signs of seasonal softening, constraining upside potential.\n\nGlobally, inventory growth is increasingly concentrated in oil-on-water, reinforcing perceptions of oversupply and reducing balance-sheet transparency."
      },
      
      positioning: {
        title: "Market Positioning",
        content: "Hedge fund and speculative positioning remains broadly neutral, with no evidence of extreme crowding. This suggests the market retains optionality for both upside and downside moves should a clear catalyst emerge."
      },
      
      technical: {
        title: "Technical Structure",
        content: "On short-term timeframes, WTI maintains a constructive structure, though momentum is fading. Price is consolidating near key technical zones:",
        resistance: "Resistance zone: 58.9–59.5 USD",
        support: "Support zone: 57.8–57.2 USD"
      },
      
      scenarios: {
        title: "Scenario Outlook (1–5 days)",
        base: {
          title: "Base case (highest probability):",
          content: "Range-bound trading within 57.8–59.5 USD, with elevated sensitivity to inventory data and macro headlines."
        },
        upside: {
          title: "Upside scenario:",
          content: "A sustained move above 59.5 USD driven by stronger-than-expected inventory draws or an expansion of geopolitical risk premium."
        },
        downside: {
          title: "Downside scenario:",
          content: "A pullback toward 57.0–56.5 USD if demand indicators weaken or broader risk-off sentiment intensifies."
        }
      },
      
      bottomLine: {
        title: "Bottom Line",
        content: "The short-term outlook for WTI remains neutral to cautiously constructive, with price action likely dictated by external catalysts rather than endogenous momentum."
      },
      
      disclaimer: {
        text: "This content is provided for informational and educational purposes only. It does not constitute investment advice, trading recommendations, or an offer to buy or sell any financial instruments. Past performance is not indicative of future results. Please review our full",
        disclaimerLink: "Disclaimer",
        and: "and",
        riskLink: "Risk Disclosure"
      }
    },
    
    ru: {
      title: "WTI: краткосрочный прогноз и сценарии",
      timeHorizon: "1–5 торговых дней",
      currentPrice: "~58.5 USD/баррель",
      lastUpdated: "26 декабря 2024",
      
      marketSnapshot: {
        title: "Текущая рыночная картина",
        content: "На момент анализа цена WTI стабилизировалась вблизи 58.5 USD за баррель, консолидируясь после восходящего движения от области 55–56 USD. Рынок перешёл в фазу балансировки, отражающую равновесие между локально поддерживающими факторами в США и более широким глобальным навесом предложения."
      },
      
      fundamentalBackdrop: {
        title: "Фундаментальный фон (спрос и предложение)",
        content: "Глобальный баланс нефти по-прежнему характеризуется умеренным ростом спроса и повышенной доступностью предложения. Оценки IEA указывают на отсутствие дефицита в краткосрочной перспективе, а стратегия ОПЕК+ направлена на сглаживание волатильности, а не на агрессивное формирование бычьего тренда.\n\nЭто формирует среду, в которой рынок чувствителен к краткосрочным шокам, но испытывает сложности с формированием устойчивого направленного движения без внешнего катализатора."
      },
      
      inventories: {
        title: "Запасы и физический рынок",
        content: "В США запасы сырой нефти остаются ниже средних сезонных уровней, а загрузка НПЗ поддерживает физический спрос. Однако структура спроса на нефтепродукты демонстрирует признаки сезонного ослабления, что ограничивает потенциал дальнейшего роста цен.\n\nНа глобальном уровне рост запасов концентрируется в нефти, находящейся в пути (oil-on-water), что усиливает ощущение избыточного предложения и снижает прозрачность реального баланса."
      },
      
      positioning: {
        title: "Позиционирование участников рынка",
        content: "Позиционирование хедж-фондов и спекулятивных игроков остаётся нейтральным. Отсутствие экстремальных длинных или коротких позиций указывает на то, что рынок не «перегружен» ожиданиями и сохраняет потенциал для движения в обе стороны при появлении значимого драйвера."
      },
      
      technical: {
        title: "Техническая структура",
        content: "На краткосрочных таймфреймах WTI сохраняет восходящую структуру, однако импульс ослабевает. Индикаторы указывают на фазу консолидации вблизи ключевых уровней:",
        resistance: "Зона сопротивления: 58.9–59.5 USD",
        support: "Зона поддержки: 57.8–57.2 USD"
      },
      
      scenarios: {
        title: "Сценарный прогноз (1–5 дней)",
        base: {
          title: "Базовый сценарий (наиболее вероятный):",
          content: "Консолидация в диапазоне 57.8–59.5 USD, с повышенной чувствительностью к данным по запасам и макроэкономическим новостям."
        },
        upside: {
          title: "Позитивный сценарий:",
          content: "Закрепление выше 59.5 USD при условии неожиданно сильных данных по запасам или усиления геополитической риск-премии."
        },
        downside: {
          title: "Негативный сценарий:",
          content: "Смещение цены в область 57.0–56.5 USD в случае подтверждения слабого спроса или усиления risk-off настроений."
        }
      },
      
      bottomLine: {
        title: "Вывод",
        content: "Краткосрочный прогноз по WTI остаётся нейтрально-умеренным. Рынок находится в режиме ожидания и требует внешнего импульса для выхода из текущего диапазона."
      },
      
      disclaimer: {
        text: "Данный контент предоставляется исключительно в информационных и образовательных целях. Он не является инвестиционной рекомендацией, торговой инструкцией или предложением купить или продать какие-либо финансовые инструменты. Прошлые результаты не гарантируют будущей доходности. Пожалуйста, ознакомьтесь с полным текстом",
        disclaimerLink: "Дисклеймера",
        and: "и",
        riskLink: "Раскрытия рисков"
      }
    }
  };

  const currentContent = content[language];

  return (
    <>
      <Helmet>
        <title>WTI Oil Market Outlook | Quantis Media</title>
        <meta
          name="description"
          content="Institutional short-term analysis of WTI crude oil including price levels, scenarios, supply-demand balance and market positioning."
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
              <span className="text-foreground">
                {language === "en" ? "Crude Oil" : "Нефть"}
              </span>
            </div>

            {/* Header Section */}
            <div className="max-w-[760px] mx-auto mb-12">
              <h1 className="text-4xl font-bold mb-6">{currentContent.title}</h1>
              
              {/* Share Buttons */}
              <div className="mb-6">
                <ShareButtons 
                  title={currentContent.title}
                  url="/market-insights/energy-metals/energy/wti-crude-oil"
                  description={language === "en" 
                    ? "WTI Crude Oil market analysis and short-term outlook from Quantis Media"
                    : "Анализ рынка нефти WTI и краткосрочный прогноз от Quantis Media"
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">
                    {language === "en" ? "Time Horizon" : "Временной горизонт"}
                  </div>
                  <div className="font-semibold">{currentContent.timeHorizon}</div>
                </Card>
                <Card className="p-4 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm text-foreground mb-1">
                    {language === "en" ? "Current Price" : "Текущая цена"}
                  </div>
                  <div className="font-semibold text-gold">{currentContent.currentPrice}</div>
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
              {/* Market Snapshot */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  {currentContent.marketSnapshot.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.marketSnapshot.content}
                </p>
              </section>

              {/* Fundamental Backdrop */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📈</span>
                  {currentContent.fundamentalBackdrop.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.fundamentalBackdrop.content}
                </p>
              </section>

              {/* Inventories */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📦</span>
                  {currentContent.inventories.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.inventories.content}
                </p>
              </section>

              {/* Market Positioning */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">👥</span>
                  {currentContent.positioning.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.positioning.content}
                </p>
              </section>

              {/* Technical Structure */}
              <section className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">🔧</span>
                  {currentContent.technical.title}
                </h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line mb-4">
                  {currentContent.technical.content}
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-foreground">{currentContent.technical.resistance}</p>
                  <p className="text-foreground">{currentContent.technical.support}</p>
                </div>
              </section>

              {/* Scenario Outlook - Highlighted */}
              <section>
                <h2 className="text-2xl font-bold mb-6">{currentContent.scenarios.title}</h2>
                
                <Card className="p-6 border-gold/20 bg-gold/5 mb-4 border-l-4 border-l-blue-500">
                  <h3 className="font-bold text-lg mb-2">{currentContent.scenarios.base.title}</h3>
                  <p className="text-foreground leading-relaxed">
                    {currentContent.scenarios.base.content}
                  </p>
                </Card>

                <Card className="p-6 border-green-500/20 bg-green-500/5 mb-4 border-l-4 border-l-green-500">
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
              <section>
                <h2 className="text-2xl font-bold mb-4">{currentContent.bottomLine.title}</h2>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentContent.bottomLine.content}
                </p>
              </section>

              {/* Disclaimer */}
              <section className="pt-8 border-t border-border">
                <p className="text-sm text-foreground">
                  <strong>{language === "en" ? "Disclaimer:" : "Дисклеймер:"}</strong> {currentContent.disclaimer.text}{" "}
                  <a href="/legal/disclaimer" className="text-gold hover:underline">
                    {currentContent.disclaimer.disclaimerLink}
                  </a>{" "}
                  {currentContent.disclaimer.and}{" "}
                  <a href="/legal/risk-disclosure" className="text-gold hover:underline">
                    {currentContent.disclaimer.riskLink}
                  </a>.
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
