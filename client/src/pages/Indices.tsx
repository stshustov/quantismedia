import { ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Indices() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Indices",
      subtitle: "Global stock market indices analysis and outlook",
      backToInsights: "Back to Market Insights",
      analyses: [
        {
          title: "S&P 500 (SPX500)",
          description: "Short-term institutional outlook for the US benchmark index",
          price: "~6930",
          trend: "Bullish consolidation",
          link: "/market-insights/indices/spx500"
        }
      ]
    },
    ru: {
      title: "Индексы",
      subtitle: "Анализ и прогнозы по глобальным фондовым индексам",
      backToInsights: "Назад к рыночной аналитике",
      analyses: [
        {
          title: "S&P 500 (SPX500)",
          description: "Краткосрочный институциональный прогноз по американскому бенчмарку",
          price: "~6930",
          trend: "Бычья консолидация",
          link: "/market-insights/indices/spx500"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <Link href="/market-insights">
            <a className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {t.backToInsights}
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
        <div className="container py-12 md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Analysis Cards */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.analyses.map((analysis, idx) => (
              <Link key={idx} href={analysis.link}>
                <a>
                  <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{analysis.price}</div>
                          <div className="text-xs text-muted-foreground">{analysis.trend}</div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {analysis.title}
                      </CardTitle>
                      <CardDescription>
                        {analysis.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-primary font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                        {language === 'en' ? 'Read analysis' : 'Читать анализ'}
                        <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
