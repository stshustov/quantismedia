import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { TrendingUp, DollarSign, Zap, Archive } from "lucide-react";

export default function MarketInsights() {
  const { language } = useLanguage();
  const { data: insights, isLoading } = trpc.marketInsights.getPublished.useQuery();

  const translations = {
    en: {
      title: "Market Insights",
      subtitle: "Scenario-based research across global markets",
      categories: "Market Categories",
      indices: {
        title: "Indices",
        description: "Equity indices analysis and scenario outlooks",
      },
      fx: {
        title: "FX",
        description: "Foreign exchange markets and currency pairs",
      },
      energyMetals: {
        title: "Energy & Metals",
        description: "Commodities: oil, gas, precious and industrial metals",
      },
      latestInsights: "Latest Research",
      comingSoon: "Coming soon",
    },
    ru: {
      title: "Рыночная аналитика",
      subtitle: "Сценарный анализ глобальных рынков",
      categories: "Категории рынков",
      indices: {
        title: "Индексы",
        description: "Анализ фондовых индексов и сценарные прогнозы",
      },
      fx: {
        title: "FX",
        description: "Валютные рынки и валютные пары",
      },
      energyMetals: {
        title: "Энергетика и металлы",
        description: "Сырьевые товары: нефть, газ, драгоценные и промышленные металлы",
      },
      latestInsights: "Последние исследования",
      comingSoon: "Скоро",
    },
  };

  const t = translations[language];

  const categories = [
    {
      icon: TrendingUp,
      title: t.indices.title,
      description: t.indices.description,
      href: "#",
      comingSoon: true,
    },
    {
      icon: DollarSign,
      title: t.fx.title,
      description: t.fx.description,
      href: "#",
      comingSoon: true,
    },
    {
      icon: Zap,
      title: t.energyMetals.title,
      description: t.energyMetals.description,
      href: "/market-insights/energy-metals",
      comingSoon: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="text-4xl font-bold">
                {language === "en" ? (
                  <>
                    Market <span className="text-primary">Insights</span>
                  </>
                ) : (
                  <>
                    Рыночная <span className="text-primary">аналитика</span>
                  </>
                )}
              </h1>
              <Link href="/market-insights/archive">
                <a className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Archive className="w-4 h-4" />
                  {language === "en" ? "Archive" : "Архив"}
                </a>
              </Link>
            </div>
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Market Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">{t.categories}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;

                const cardContent = (
                  <Card
                    className={`h-full transition-all ${
                      category.comingSoon
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:border-primary/50 hover:shadow-lg cursor-pointer"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        {category.comingSoon && (
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {t.comingSoon}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );

                return category.comingSoon ? (
                  <div key={index}>{cardContent}</div>
                ) : (
                  <Link key={index} href={category.href}>
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Latest Insights from Database */}
          {insights && insights.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.latestInsights}</h2>
              <div className="grid gap-6">
                {insights.map((insight) => (
                  <Card key={insight.id} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle>
                        <Link
                          href={`/market-insights/${
                            language === "en" ? insight.slugEn : insight.slugRu
                          }`}
                        >
                          <a className="hover:text-primary transition-colors">
                            {language === "en" ? insight.titleEn : insight.titleRu}
                          </a>
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        {language === "en" ? insight.excerptEn : insight.excerptRu}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
