import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import ShareButtons from "@/components/ShareButtons";
import { useTrackScenarioView } from "@/hooks/useTrackScenarioView";

export default function SPX500Analysis() {
  const { language } = useLanguage();

  // Track page view for analytics
  useTrackScenarioView("spx500-short-term", "S&P 500 (SPX500) Analysis");

  const content = {
    en: {
      title: "S&P 500 (SPX500) — Short-Term Institutional Outlook",
      description: "Scenario-based analysis of S&P 500 with technical structure, positioning, and macro drivers",
      breadcrumb: {
        marketInsights: "Market Insights",
        indices: "Indices",
        spx500: "S&P 500"
      },
      timeHorizon: "Time Horizon",
      timeHorizonValue: "1–5 trading days",
      currentPrice: "Current Reference",
      currentPriceValue: "~6,930",
      lastUpdated: "Last Updated",
      lastUpdatedValue: "December 26, 2025",
      marketRegime: "Market Regime",
      marketRegimeValue: "Bullish structure, late-cycle consolidation, liquidity-sensitive",
      shareDescription: "S&P 500 (SPX500) — Short-Term Institutional Outlook: Scenario-based analysis with technical structure, positioning, and macro drivers",
      sections: {
        marketContext: {
          title: "🎯 Market Context",
          content: "The S&P 500 is trading near record highs after a strong upside impulse. Price action suggests a shift into a late-cycle consolidation phase, where market direction is increasingly driven by liquidity conditions, positioning, and monetary policy expectations rather than company-specific fundamentals.\n\nSeasonally lighter volumes and proximity to key psychological levels increase the likelihood of sharp intraday moves on headlines or flow shifts."
        },
        monetaryPolicy: {
          title: "🌐 Monetary Policy and Macro Backdrop",
          content: "The Fed maintains a target range of 3.50%–3.75%. In the short term, equities react primarily to the expected policy path rather than the current rate level:\n\n• Sustained easing expectations support risk assets\n• A stronger \"pause\" narrative or rising Treasury yields raise the probability of tactical multiple repricing\n\nOther major central banks remain broadly cautious, keeping global liquidity conditions neutral to mildly supportive."
        },
        positioning: {
          title: "👥 Positioning and Flows",
          content: "• Active managers and hedge funds remain heavily invested, supporting the base case but reducing resilience to negative surprises\n• CTA/systematic strategies are positioned pro-trend, which can reinforce upside but may accelerate downside if key technical levels fail\n• Retail sentiment is not overtly euphoric, yet the combination of high aggregate exposure and low volatility increases the risk of short-lived air-pocket corrections"
        },
        geopolitical: {
          title: "🔧 Geopolitical Backdrop",
          content: "Geopolitical developments currently act as secondary catalysts, influencing markets mainly through:\n\n• Rates and USD dynamics\n• Shifts in overall risk appetite\n• Volatility regimes"
        },
        technical: {
          title: "📊 Technical Structure (M30 chart)",
          content: "• **Resistance / supply:** 6,934–6,950\n• **Primary support:** 6,900–6,910\n• **Secondary value area:** 6,888–6,872\n• **Risk boundary:** below 6,840\n\nThe broader uptrend remains intact, though momentum has moderated near the highs."
        },
        scenarios: {
          title: "📈 Scenario Framework (1–5 days)",
          baseCase: {
            title: "Base Case — Consolidation Within a Bullish Structure",
            content: "Price holds within 6,900–6,950, with support intact above 6,900–6,910. The market digests gains while remaining highly sensitive to macro and rates-related catalysts."
          },
          upside: {
            title: "Upside Scenario — Momentum Extension",
            content: "Sustained acceptance above 6,950 allows for renewed trend continuation and refocus toward higher psychological reference levels."
          },
          downside: {
            title: "Downside Scenario — Tactical Pullback",
            content: "A break below 6,900 opens the 6,888–6,872 area. Further weakness below that zone would signal a deeper, but still tactical, repricing rather than a trend reversal."
          }
        },
        bottomLine: {
          title: "Bottom Line",
          content: "The short-term outlook for SPX500 remains constructive but fragile. The dominant theme is consolidation with asymmetric sensitivity to liquidity, positioning, and policy expectations, making range boundaries and regime shifts critical to monitor."
        }
      },
      disclaimer: "All content is provided strictly for informational and educational purposes only. Quantis Media does not provide investment advice, trade execution instructions, or personalized recommendations."
    },
    ru: {
      title: "S&P 500 (SPX500) — Краткосрочный институциональный прогноз",
      description: "Сценарный анализ S&P 500 с технической структурой, позиционированием и макро-драйверами",
      breadcrumb: {
        marketInsights: "Рыночная аналитика",
        indices: "Индексы",
        spx500: "S&P 500"
      },
      timeHorizon: "Временной горизонт",
      timeHorizonValue: "1–5 торговых дней",
      currentPrice: "Текущий ориентир",
      currentPriceValue: "~6 930",
      lastUpdated: "Обновлено",
      lastUpdatedValue: "26 декабря 2025 г.",
      marketRegime: "Рыночный режим",
      marketRegimeValue: "Бычья структура, консолидация поздней фазы, чувствительность к ликвидности",
      shareDescription: "S&P 500 (SPX500) — Краткосрочный институциональный прогноз: Сценарный анализ с технической структурой, позиционированием и макро-драйверами",
      sections: {
        marketContext: {
          title: "🎯 Рыночный контекст",
          content: "Индекс S&P 500 удерживается вблизи исторических максимумов после сильного импульса роста. Текущая динамика указывает на переход рынка в фазу консолидации на вершине диапазона, где направление движения определяется не столько корпоративными факторами, сколько ликвидностью, позиционированием и ожиданиями по денежно-кредитной политике.\n\nСезонно сниженные объёмы и приближение психологически значимых уровней усиливают вероятность резких внутридневных колебаний при выходе новостей или изменении потока ордеров."
        },
        monetaryPolicy: {
          title: "🌐 Денежно-кредитная политика и макро-фон",
          content: "ФРС сохраняет целевой диапазон ставки на уровне 3,50–3,75%. Краткосрочно для рынка акций важна не сама ставка, а траектория ожиданий:\n\n• Сохранение ожиданий дальнейшего смягчения поддерживает риск-аппетит\n• Усиление риторики о «паузе» или рост доходностей US Treasuries повышают вероятность тактической переоценки мультипликаторов\n\nДругие ключевые ЦБ в целом придерживаются осторожного подхода, что удерживает глобальную ликвидность в нейтрально-поддерживающем режиме."
        },
        positioning: {
          title: "👥 Позиционирование и потоки",
          content: "• Активные управляющие и фонды остаются с высокой долей риска в портфелях, что указывает на уверенность в базовом сценарии, но одновременно снижает запас прочности при негативных сюрпризах\n• CTA и систематические стратегии находятся в про-циклическом режиме: при сохранении структуры они поддерживают рынок, но при нарушении ключевых уровней способны усилить движение механическим снижением экспозиции\n• Ритейл-сентимент не выглядит экстремально эйфоричным, однако сочетание высокой общей загрузки рынка и низкой волатильности повышает риск резких, но краткосрочных «air-pocket» движений"
        },
        geopolitical: {
          title: "🔧 Геополитический фон",
          content: "Геополитические риски носят фоновый характер и в краткосрочном горизонте влияют преимущественно через:\n\n• Динамику доходностей и доллара США\n• Общее отношение к риску (risk-on / risk-off)\n• Волатильность"
        },
        technical: {
          title: "📊 Техническая структура (по графику M30)",
          content: "• **Зона сопротивления / предложения:** 6 934–6 950\n• **Ключевая поддержка:** 6 900–6 910\n• **Вторичная зона стоимости:** 6 888–6 872\n• **Граница риска:** ниже 6 840\n\nСтруктура остаётся восходящей, однако последние ценовые колебания указывают на замедление импульса и рост значимости уровней."
        },
        scenarios: {
          title: "📈 Сценарная рамка (1–5 дней)",
          baseCase: {
            title: "Базовый сценарий — консолидация в бычьей структуре",
            content: "Рынок удерживается в диапазоне 6 900–6 950 при сохранении поддержки выше 6 900–6 910. Движение носит балансирующий характер, с повышенной чувствительностью к макро-новостям и доходностям."
          },
          upside: {
            title: "Альтернативный сценарий вверх — расширение импульса",
            content: "Устойчивое принятие цены выше 6 950 открывает пространство для продолжения тренда и смещения фокуса рынка к более высоким, психологически значимым уровням."
          },
          downside: {
            title: "Альтернативный сценарий вниз — тактическая переоценка",
            content: "Потеря зоны 6 900 повышает вероятность отката в область 6 888–6 872. Усиление давления ниже этой зоны увеличивает риск более глубокой коррекции без нарушения среднесрочной восходящей структуры."
          }
        },
        bottomLine: {
          title: "Итог",
          content: "Краткосрочный фон по SPX500 остаётся конструктивным, однако рынок входит в фазу, где позиционирование и ликвидность становятся ключевыми драйверами. Базовое ожидание — консолидация с риском ускоренных движений при выходе из диапазона."
        }
      },
      disclaimer: "Весь контент предоставляется исключительно в информационных и образовательных целях. Quantis Media не предоставляет инвестиционные консультации, инструкции по исполнению сделок или персонализированные рекомендации."
    }
  };

  const t = content[language];

  return (
    <>
      <Helmet>
        <title>{t.title} - Quantis Media</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/market-insights" className="hover:text-foreground transition-colors">
                {t.breadcrumb.marketInsights}
              </Link>
              <span>/</span>
              <Link href="/market-insights/indices" className="hover:text-foreground transition-colors">
                {t.breadcrumb.indices}
              </Link>
              <span>/</span>
              <span className="text-foreground">{t.breadcrumb.spx500}</span>
            </div>
          </div>

          {/* Header */}
          <section className="container py-8">
            <h1 className="text-4xl font-bold mb-6 text-foreground">{t.title}</h1>

            {/* Share Buttons */}
            <ShareButtons 
              title={t.title}
              url="/market-insights/indices/spx500"
              description={t.shareDescription}
            />

            {/* Info Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.timeHorizon}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">{t.timeHorizonValue}</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.currentPrice}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground font-mono">{t.currentPriceValue}</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.lastUpdated}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">{t.lastUpdatedValue}</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t.marketRegime}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-foreground">{t.marketRegimeValue}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Analysis Content */}
          <section className="container pb-16 max-w-4xl">
            <div className="space-y-8">
              {/* Market Context */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.marketContext.title}</h2>
                <p className="text-foreground whitespace-pre-line leading-relaxed">{t.sections.marketContext.content}</p>
              </div>

              {/* Monetary Policy */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.monetaryPolicy.title}</h2>
                <p className="text-foreground whitespace-pre-line leading-relaxed">{t.sections.monetaryPolicy.content}</p>
              </div>

              {/* Positioning */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.positioning.title}</h2>
                <p className="text-foreground whitespace-pre-line leading-relaxed">{t.sections.positioning.content}</p>
              </div>

              {/* Geopolitical */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.geopolitical.title}</h2>
                <p className="text-foreground whitespace-pre-line leading-relaxed">{t.sections.geopolitical.content}</p>
              </div>

              {/* Technical */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.technical.title}</h2>
                <p className="text-foreground whitespace-pre-line leading-relaxed">{t.sections.technical.content}</p>
              </div>

              {/* Scenarios */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">{t.sections.scenarios.title}</h2>
                
                <div className="space-y-4">
                  {/* Base Case */}
                  <Card className="border-l-4 border-l-blue-500 bg-blue-950/20">
                    <CardHeader>
                      <CardTitle className="text-foreground">{t.sections.scenarios.baseCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed">{t.sections.scenarios.baseCase.content}</p>
                    </CardContent>
                  </Card>

                  {/* Upside */}
                  <Card className="border-l-4 border-l-green-500 bg-green-950/20">
                    <CardHeader>
                      <CardTitle className="text-foreground">{t.sections.scenarios.upside.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed">{t.sections.scenarios.upside.content}</p>
                    </CardContent>
                  </Card>

                  {/* Downside */}
                  <Card className="border-l-4 border-l-red-500 bg-red-950/20">
                    <CardHeader>
                      <CardTitle className="text-foreground">{t.sections.scenarios.downside.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground leading-relaxed">{t.sections.scenarios.downside.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="border-l-2 border-muted pl-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{t.sections.bottomLine.title}</h2>
                <p className="text-foreground leading-relaxed">{t.sections.bottomLine.content}</p>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 p-6 bg-muted/30 border border-muted rounded-lg">
                <p className="text-sm text-foreground leading-relaxed">
                  ⚠️ {t.disclaimer}
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
