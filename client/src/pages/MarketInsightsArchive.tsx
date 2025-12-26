import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, TrendingUp, DollarSign, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MarketInsightsArchive() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Market Analysis Archive",
      subtitle: "Browse historical market outlooks by asset and date",
      allAssets: "All Assets",
      indices: "Indices",
      fx: "FX",
      energyMetals: "Energy & Metals",
      noData: "No analysis available for this category yet",
      readMore: "Read analysis",
    },
    ru: {
      title: "Архив рыночной аналитики",
      subtitle: "Исторические обзоры рынков по активам и датам",
      allAssets: "Все активы",
      indices: "Индексы",
      fx: "FX",
      energyMetals: "Энергетика и металлы",
      noData: "Пока нет аналитики в этой категории",
      readMore: "Читать обзор",
    },
  };

  const t = translations[language];

  // Mock data structure - in production this would come from database
  const archiveData = {
    energyMetals: [
      {
        id: "silver-2024-12-26",
        asset: language === "en" ? "Silver" : "Серебро",
        date: "2024-12-26",
        displayDate: language === "en" ? "December 26, 2024" : "26 декабря 2024",
        price: "~$74.5–75.1/oz",
        excerpt:
          language === "en"
            ? "Trading near record highs, momentum-driven uptrend amplified by thin year-end liquidity."
            : "Торгуется вблизи рекордных максимумов, импульс вверх усиливается тонкой ликвидностью конца года.",
        href: "/market-insights/energy-metals/metals/silver",
      },
      {
        id: "gold-2024-12-26",
        asset: language === "en" ? "Gold" : "Золото",
        date: "2024-12-26",
        displayDate: language === "en" ? "December 26, 2024" : "26 декабря 2024",
        price: "~$4,50x/oz",
        excerpt:
          language === "en"
            ? "Trading near record highs, structurally supported by CB demand and ETF inflows, tactically consolidation-prone."
            : "Торгуется вблизи исторических максимумов, структурно поддержано спросом ЦБ и ETF, тактически склонно к консолидации.",
        href: "/market-insights/energy-metals/metals/gold",
      },
      {
        id: "wti-2024-12-26",
        asset: language === "en" ? "WTI Crude Oil" : "Нефть WTI",
        date: "2024-12-26",
        displayDate: language === "en" ? "December 26, 2024" : "26 декабря 2024",
        price: "~58.5 USD/bbl",
        excerpt:
          language === "en"
            ? "Short-term outlook remains neutral to cautiously constructive, with price consolidating near 58.5 USD/bbl."
            : "Краткосрочный прогноз остаётся нейтрально-умеренным, цена консолидируется вблизи 58.5 USD/баррель.",
        href: "/market-insights/energy-metals/wti-crude-oil",
      },
    ],
    indices: [],
    fx: [],
  };

  const [activeTab, setActiveTab] = useState<"all" | "indices" | "fx" | "energyMetals">("all");

  const getAllAnalysis = () => {
    return [
      ...archiveData.energyMetals,
      ...archiveData.indices,
      ...archiveData.fx,
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const getFilteredAnalysis = () => {
    if (activeTab === "all") return getAllAnalysis();
    return archiveData[activeTab as keyof typeof archiveData] || [];
  };

  const filteredData = getFilteredAnalysis();

  return (
    <>
      <Helmet>
        <title>
          {language === "en" ? "Market Analysis Archive | Quantis Media" : "Архив аналитики | Quantis Media"}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? "Browse historical market analysis and scenario outlooks across global markets"
              : "Архив исторических обзоров и сценарных прогнозов по глобальным рынкам"
          }
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-3">
                {language === "en" ? (
                  <>
                    Market Analysis <span className="text-primary">Archive</span>
                  </>
                ) : (
                  <>
                    Архив <span className="text-primary">аналитики</span>
                  </>
                )}
              </h1>
              <p className="text-lg text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Tabs for filtering */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="mb-8">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl">
                <TabsTrigger value="all">{t.allAssets}</TabsTrigger>
                <TabsTrigger value="indices">{t.indices}</TabsTrigger>
                <TabsTrigger value="fx">{t.fx}</TabsTrigger>
                <TabsTrigger value="energyMetals">{t.energyMetals}</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-8">
                {filteredData.length === 0 ? (
                  <Card className="p-12 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <Calendar className="w-12 h-12 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">{t.noData}</p>
                    </div>
                  </Card>
                ) : (
                  <div className="grid gap-6">
                    {filteredData.map((item) => (
                      <Card key={item.id} className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2">
                                <Link href={item.href}>
                                  <a className="hover:text-primary transition-colors">{item.asset}</a>
                                </Link>
                              </CardTitle>
                              <CardDescription className="text-sm mb-3">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Calendar className="w-4 h-4" />
                                  <span>{item.displayDate}</span>
                                  <span className="mx-2">•</span>
                                  <span className="font-semibold text-primary">{item.price}</span>
                                </div>
                              </CardDescription>
                              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                            </div>
                            <Link href={item.href}>
                              <a className="text-sm text-primary hover:underline whitespace-nowrap">
                                {t.readMore} →
                              </a>
                            </Link>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
