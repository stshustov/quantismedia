import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const { language } = useLanguage();

  const plans = language === "en" ? [
    {
      name: "Public",
      price: "$0",
      period: "/month",
      description: "Public pages and limited previews",
      features: [
        "Public market insights",
        "Sample scenario previews",
        "Legal & risk disclosure access",
        "Newsletter (optional)"
      ],
      cta: "Explore",
      popular: false
    },
    {
      name: "Core",
      price: "$39",
      period: "/month",
      description: "Full access to core scenario library",
      features: [
        "Full scenario formats (Core)",
        "Scenario Library & history",
        "Market insights archive",
        "Subscriber dashboard",
        "Email support"
      ],
      cta: "Subscribe",
      popular: true
    },
    {
      name: "Pro",
      price: "$89",
      period: "/month",
      description: "Extended scenarios + closed community",
      features: [
        "Everything in Core",
        "Extended scenarios (Primary/Alternative cases)",
        "Higher-frequency updates (when market conditions justify)",
        "Closed analytical community access",
        "Priority support"
      ],
      cta: "Subscribe Pro",
      popular: false
    }
  ] : [
    {
      name: "Публичный доступ",
      price: "$0",
      period: "/мес",
      description: "Открытые страницы и ограниченные примеры",
      features: [
        "Публичные обзоры рынков",
        "Примеры сценариев",
        "Доступ к юридическим документам",
        "Рассылка (опционально)"
      ],
      cta: "Смотреть",
      popular: false
    },
    {
      name: "Core",
      price: "$39",
      period: "/мес",
      description: "Полный доступ к базовой библиотеке сценариев",
      features: [
        "Полный формат сценариев (Core)",
        "Библиотека и история сценариев",
        "Архив аналитики",
        "Личный кабинет подписчика",
        "Поддержка по email"
      ],
      cta: "Подписаться",
      popular: true
    },
    {
      name: "Pro",
      price: "$89",
      period: "/мес",
      description: "Расширенные сценарии + закрытое сообщество",
      features: [
        "Всё из Core",
        "Расширенные сценарии (основной/альтернативный)",
        "Более частые обновления (по рыночным условиям)",
        "Доступ к закрытому аналитическому сообществу",
        "Приоритетная поддержка"
      ],
      cta: "Подписаться Pro",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-[oklch(0.10_0.02_250)] via-[oklch(0.12_0.02_250)] to-[oklch(0.15_0.02_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "en" ? "Choose Your Plan" : "Выберите тариф"}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Select the subscription tier that matches your trading intelligence needs"
                : "Выберите уровень подписки, который соответствует вашим потребностям в аналитике"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 ${
                  plan.popular
                    ? "border-primary border-2 shadow-2xl scale-105 hover:shadow-[0_0_30px_rgba(201,162,77,0.3)] hover:border-primary/80"
                    : "border-border hover:border-primary hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {language === "en" ? "Most Popular" : "Популярный"}
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    onClick={() => {
                      if (plan.name === "Public" || plan.name === "Публичный доступ") {
                        window.location.href = "/market-insights";
                      } else {
                        // Placeholder for Paddle checkout
                        // TODO: Integrate Paddle when user provides credentials
                        alert(language === "en" 
                          ? "Payment integration coming soon. Please contact us for subscription."
                          : "Интеграция оплаты скоро. Пожалуйста, свяжитесь с нами для оформления подписки.");
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Core Plan Details Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">
                  {language === "en" ? "About Core Plan" : "О тарифе Core"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed">
                  {language === "en"
                    ? "Core provides access to Quantis Media's scenario-based research, including structured market scenarios and analytical context."
                    : "Core — базовый уровень доступа к сценарной аналитике Quantis Media. Предоставляет структурированные рыночные сценарии и аналитический контекст."}
                </p>
                
                <div className="pt-4">
                  <h3 className="font-semibold text-xl mb-3">
                    {language === "en" ? "What's included:" : "Что входит:"}
                  </h3>
                  <ul className="space-y-2">
                    {(language === "en" ? [
                      "Full scenario formats",
                      "Scenario library and history",
                      "Analytics archive",
                      "Subscriber dashboard",
                      "Technical email support"
                    ] : [
                      "Полный формат сценариев",
                      "Библиотека и история сценариев",
                      "Архив аналитики",
                      "Личный кабинет подписчика",
                      "Email-поддержка (техническая)"
                    ]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold mb-2">
                  {language === "en" ? "Important Legal Notice" : "Важное юридическое уведомление"}
                </p>
                <p>
                  {language === "en"
                    ? "Quantis Media does not provide investment advice or trading signals. All content is provided for informational and educational purposes only."
                    : "Quantis Media не предоставляет инвестиционных рекомендаций или торговых сигналов. Весь контент предоставляется исключительно в информационных и образовательных целях."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
