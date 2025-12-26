import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp } from "lucide-react";

export default function IndicesCategory() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Indices Analysis",
      description: "Scenario-based analysis of major global equity indices",
      breadcrumb: {
        marketInsights: "Market Insights",
        indices: "Indices"
      },
      intro: "Comprehensive scenario analysis of major global equity indices, covering technical structure, positioning, and macro drivers.",
      assets: [
        {
          id: "spx500",
          name: "S&P 500",
          symbol: "SPX500",
          description: "US large-cap equity benchmark",
          link: "/market-insights/indices/spx500"
        }
      ]
    },
    ru: {
      title: "Анализ индексов",
      description: "Сценарный анализ основных мировых фондовых индексов",
      breadcrumb: {
        marketInsights: "Рыночная аналитика",
        indices: "Индексы"
      },
      intro: "Комплексный сценарный анализ основных мировых фондовых индексов с учётом технической структуры, позиционирования и макро-драйверов.",
      assets: [
        {
          id: "spx500",
          name: "S&P 500",
          symbol: "SPX500",
          description: "Бенчмарк крупной капитализации США",
          link: "/market-insights/indices/spx500"
        }
      ]
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
              <span className="text-foreground">{t.breadcrumb.indices}</span>
            </div>
          </div>

          {/* Header */}
          <section className="container py-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">{t.title}</h1>
            </div>
            <p className="text-lg text-foreground max-w-3xl">
              {t.intro}
            </p>
          </section>

          {/* Assets Grid */}
          <section className="container pb-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.assets.map((asset) => (
                <Link key={asset.id} href={asset.link}>
                  <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-foreground">{asset.name}</CardTitle>
                      <CardDescription className="text-muted-foreground font-mono">
                        {asset.symbol}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground">{asset.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
