import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, TrendingUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GlobalMacro() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Global Macro",
      subtitle: "Daily and weekly macroeconomic outlook and analysis",
      breadcrumbs: {
        home: "Home",
        marketInsights: "Market Insights",
        globalMacro: "Global Macro",
      },
      daily: {
        title: "Daily Outlook",
        description: "Short-term macroeconomic analysis and key events",
        frequency: "Published daily",
        access: "Pro only",
      },
      weekly: {
        title: "Weekly Outlook",
        description: "In-depth weekly macro analysis and forecasts",
        frequency: "Published weekly",
        access: "Core & Pro",
      },
      comingSoon: "Coming soon",
      comingSoonDescription: "Global Macro content is being prepared. Pro and Core subscribers will receive email notifications when new outlooks are published.",
    },
    ru: {
      title: "Global Macro",
      subtitle: "Ежедневные и еженедельные макроэкономические прогнозы и анализ",
      breadcrumbs: {
        home: "Главная",
        marketInsights: "Рыночная аналитика",
        globalMacro: "Global Macro",
      },
      daily: {
        title: "Daily Outlook",
        description: "Краткосрочный макроэкономический анализ и ключевые события",
        frequency: "Публикуется ежедневно",
        access: "Только Pro",
      },
      weekly: {
        title: "Weekly Outlook",
        description: "Глубокий еженедельный макро-анализ и прогнозы",
        frequency: "Публикуется еженедельно",
        access: "Core и Pro",
      },
      comingSoon: "Скоро",
      comingSoonDescription: "Контент Global Macro находится в подготовке. Подписчики Pro и Core получат email-уведомления, когда новые прогнозы будут опубликованы.",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/">
              <a className="hover:text-foreground transition-colors">{t.breadcrumbs.home}</a>
            </Link>
            <span>/</span>
            <Link href="/market-insights">
              <a className="hover:text-foreground transition-colors">{t.breadcrumbs.marketInsights}</a>
            </Link>
            <span>/</span>
            <span className="text-foreground">{t.breadcrumbs.globalMacro}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="mb-12 p-6 border border-primary/20 rounded-lg bg-primary/5">
            <h2 className="text-2xl font-bold mb-3">{t.comingSoon}</h2>
            <p className="text-muted-foreground">{t.comingSoonDescription}</p>
          </div>

          {/* Content Types */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Daily Outlook Card */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                  <Badge variant="default" className="bg-primary">
                    {t.daily.access}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{t.daily.title}</CardTitle>
                <CardDescription className="text-base">
                  {t.daily.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{t.daily.frequency}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Concise daily analysis of key macro events, central bank statements, and market-moving data releases."
                      : "Краткий ежедневный анализ ключевых макро-событий, заявлений центробанков и важных данных."}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Outlook Card */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">
                    {t.weekly.access}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{t.weekly.title}</CardTitle>
                <CardDescription className="text-base">
                  {t.weekly.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{t.weekly.frequency}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Comprehensive weekly macro outlook covering cross-market dynamics, upcoming events, and scenario-based forecasts."
                      : "Комплексный еженедельный макро-обзор с анализом межрыночных связей, предстоящих событий и сценарных прогнозов."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
