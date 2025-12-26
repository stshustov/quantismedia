import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp } from "lucide-react";

export default function EnergyCategory() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Energy Markets",
      subtitle: "Crude oil and energy commodities analysis",
      breadcrumb: "Market Insights",
      energyMetals: "Energy & Metals",
    },
    ru: {
      title: "Энергетические рынки",
      subtitle: "Анализ нефти и энергетических товаров",
      breadcrumb: "Рыночная аналитика",
      energyMetals: "Энергетика и металлы",
    },
  };

  const t = translations[language];

  const assets = [
    {
      id: "wti",
      name: language === "en" ? "WTI Crude Oil" : "Нефть WTI",
      description:
        language === "en"
          ? "West Texas Intermediate crude oil market analysis"
          : "Анализ рынка нефти марки West Texas Intermediate",
      price: "~$58.5/bbl",
      href: "/market-insights/energy-metals/energy/wti-crude-oil",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Energy Markets Analysis | Quantis Media</title>
        <meta
          name="description"
          content="Scenario-based analysis of energy markets including WTI crude oil."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-1">
          <div className="container py-12">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-8">
              <Link href="/market-insights">
                <span className="hover:text-foreground cursor-pointer">{t.breadcrumb}</span>
              </Link>
              <span className="mx-2">/</span>
              <Link href="/market-insights/energy-metals">
                <span className="hover:text-foreground cursor-pointer">{t.energyMetals}</span>
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{t.title}</span>
            </div>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Assets List */}
            <div className="grid grid-cols-1 gap-6 max-w-3xl">
              {assets.map((asset) => (
                <Link key={asset.id} href={asset.href}>
                  <Card className="p-6 hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {asset.name}
                        </h2>
                        <p className="text-muted-foreground mb-4">{asset.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{asset.price}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
