import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp } from "lucide-react";

export default function MetalsCategory() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Metals Markets",
      subtitle: "Precious and industrial metals analysis",
      breadcrumb: "Market Insights",
      energyMetals: "Energy & Metals",
    },
    ru: {
      title: "Рынки металлов",
      subtitle: "Анализ драгоценных и промышленных металлов",
      breadcrumb: "Рыночная аналитика",
      energyMetals: "Энергетика и металлы",
    },
  };

  const t = translations[language];

  const assets = [
    {
      id: "gold",
      name: language === "en" ? "Gold" : "Золото",
      description:
        language === "en"
          ? "Gold market analysis and scenario outlook"
          : "Анализ рынка золота и сценарный прогноз",
      price: "~$4,50x/oz",
      href: "/market-insights/energy-metals/metals/gold",
    },
    {
      id: "silver",
      name: language === "en" ? "Silver" : "Серебро",
      description:
        language === "en"
          ? "Silver market analysis and scenario outlook"
          : "Анализ рынка серебра и сценарный прогноз",
      price: "~$74.5–75.1/oz",
      href: "/market-insights/energy-metals/metals/silver",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Metals Markets Analysis | Quantis Media</title>
        <meta
          name="description"
          content="Scenario-based analysis of precious and industrial metals including gold and silver."
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
