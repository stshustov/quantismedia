import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, Shield, Globe, BarChart3, AlertCircle } from "lucide-react";

export default function Home() {
  const { language, t } = useLanguage();

  const features = language === "en" ? [
    {
      icon: TrendingUp,
      title: "Scenario-Based Trading Ideas",
      description: "Algorithmically-assisted market analysis with clear context, scenarios, invalidation zones, and target areas."
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "In-depth research and analytical insights covering global financial markets and instruments."
    },
    {
      icon: Globe,
      title: "Multi-Market Coverage",
      description: "Analysis across FX, indices, metals, oil & gas markets."
    },
    {
      icon: Shield,
      title: "Risk-Aware Approach",
      description: "Every idea includes invalidation zones and proper risk disclosure. No guarantees, only scenarios."
    }
  ] : [
    {
      icon: TrendingUp,
      title: "Сценарные торговые идеи",
      description: "Алгоритмически-ассистированный анализ рынков с чётким контекстом, сценариями, зонами инвалидации и целевыми областями."
    },
    {
      icon: BarChart3,
      title: "Рыночная аналитика",
      description: "Углублённые исследования и аналитические материалы по глобальным финансовым рынкам и инструментам."
    },
    {
      icon: Globe,
      title: "Мультирыночный охват",
      description: "Анализ валютных рынков, сырьевых товаров, индексов и криптовалют."
    },
    {
      icon: Shield,
      title: "Риск-ориентированный подход",
      description: "Каждая идея включает зоны инвалидации и полное раскрытие рисков. Никаких гарантий, только сценарии."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section - Deep Dark Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.10_0.02_250)] via-[oklch(0.12_0.02_250)] to-[oklch(0.15_0.02_250)] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.18_0.03_250),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.16_0.03_250),transparent_50%)]"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {language === "en" ? "Independent Market Intelligence Platform" : "Независимая платформа рыночной аналитики"}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              {language === "en" 
                ? "Access algorithmically-assisted market analysis and scenario-based trading ideas for informational and educational purposes."
                : "Доступ к алгоритмически-ассистированному анализу рынков и сценарным торговым идеям в информационных и образовательных целях."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/pricing">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  {language === "en" ? "Get Started" : "Начать"}
                </Button>
              </Link>
              <Link href="/sample-ideas">
                <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary text-white px-8 py-6 text-lg">
                  {language === "en" ? "Sample Ideas" : "Примеры идей"}
                </Button>
              </Link>
            </div>
            
            {/* Disclaimer */}
            <div className="flex items-start gap-3 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg max-w-3xl mx-auto">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground text-left leading-relaxed">
                {language === "en"
                  ? "All content is provided strictly for informational and educational purposes only. Quantis Media does not provide investment advice, trade execution instructions, or personalized recommendations."
                  : "Весь контент предоставляется исключительно в информационных и образовательных целях. Quantis Media не предоставляет инвестиционных рекомендаций, инструкций по исполнению сделок или персонализированных советов."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[oklch(0.14_0.02_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Professional Market Intelligence" : "Профессиональная рыночная аналитика"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Comprehensive research and scenario-based analysis for informed decision-making"
                : "Комплексные исследования и сценарный анализ для информированных решений"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-lg">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.12_0.02_250)] to-[oklch(0.16_0.02_250)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Ready to Get Started?" : "Готовы начать?"}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {language === "en"
                ? "Choose a subscription plan that fits your needs and gain access to professional market intelligence."
                : "Выберите тарифный план, который соответствует вашим потребностям, и получите доступ к профессиональной рыночной аналитике."}
            </p>
            <Link href="/pricing">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                {t.pricing.title}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
