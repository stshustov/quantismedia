import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Flame, Gem } from "lucide-react";

export default function EnergyMetalsCategory() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Energy & Metals",
      subtitle: "Scenario-based analysis of commodities markets",
      breadcrumb: "Market Insights",
      energyTitle: "Energy",
      energyDescription: "Crude oil and energy commodities analysis",
      energyAssets: "WTI Crude Oil",
      metalsTitle: "Metals",
      metalsDescription: "Precious and industrial metals analysis",
      metalsAssets: "Gold, Silver",
    },
    ru: {
      title: "Энергетика и металлы",
      subtitle: "Сценарный анализ товарных рынков",
      breadcrumb: "Рыночная аналитика",
      energyTitle: "Энергетика",
      energyDescription: "Анализ нефти и энергетических товаров",
      energyAssets: "Нефть WTI",
      metalsTitle: "Металлы",
      metalsDescription: "Анализ драгоценных и промышленных металлов",
      metalsAssets: "Золото, Серебро",
    },
  };

  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>Energy & Metals Market Analysis | Quantis Media</title>
        <meta
          name="description"
          content="Comprehensive scenario-based analysis of energy and metals markets including crude oil, gold, and silver."
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
              <span className="text-foreground">{t.title}</span>
            </div>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Subcategories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Energy */}
              <Link href="/market-insights/energy-metals/energy">
                <Card className="p-8 hover:border-primary transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {t.energyTitle}
                      </h2>
                      <p className="text-muted-foreground mb-4">{t.energyDescription}</p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{language === "en" ? "Assets:" : "Активы:"}</span>{" "}
                        {t.energyAssets}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Metals */}
              <Link href="/market-insights/energy-metals/metals">
                <Card className="p-8 hover:border-primary transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                      <Gem className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {t.metalsTitle}
                      </h2>
                      <p className="text-muted-foreground mb-4">{t.metalsDescription}</p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{language === "en" ? "Assets:" : "Активы:"}</span>{" "}
                        {t.metalsAssets}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
