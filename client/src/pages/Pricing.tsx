import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";

export default function Pricing() {
  const { language, t } = useLanguage();
  const { isAuthenticated } = useAuth();

  const plans = language === "en" ? [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring our platform",
      features: [
        "Public analytics access",
        "Sample trading ideas",
        "Market insights blog",
        "Basic market research"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Core",
      price: "$49",
      period: "/month",
      description: "Full access to trading ideas and Telegram",
      features: [
        "Everything in Free",
        "Full access to trading ideas",
        "Private dashboard",
        "Telegram market channels",
        "History & statistics",
        "Priority support"
      ],
      cta: "Subscribe to Core",
      popular: true
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Advanced features for serious traders",
      features: [
        "Everything in Core",
        "Pro-exclusive trading ideas",
        "Community chat access",
        "Advanced analytics",
        "Early access to new features",
        "Dedicated support"
      ],
      cta: "Subscribe to Pro",
      popular: false
    }
  ] : [
    {
      name: "Бесплатный",
      price: "$0",
      period: "навсегда",
      description: "Идеально для знакомства с платформой",
      features: [
        "Доступ к публичной аналитике",
        "Примеры торговых идей",
        "Блог рыночной аналитики",
        "Базовые рыночные исследования"
      ],
      cta: "Начать",
      popular: false
    },
    {
      name: "Базовый",
      price: "$49",
      period: "/месяц",
      description: "Полный доступ к торговым идеям и Telegram",
      features: [
        "Всё из Бесплатного",
        "Полный доступ к торговым идеям",
        "Приватная панель управления",
        "Telegram-каналы по рынкам",
        "История и статистика",
        "Приоритетная поддержка"
      ],
      cta: "Подписаться на Базовый",
      popular: true
    },
    {
      name: "Профессиональный",
      price: "$99",
      period: "/месяц",
      description: "Расширенные функции для серьёзных трейдеров",
      features: [
        "Всё из Базового",
        "Эксклюзивные Pro торговые идеи",
        "Доступ к сообществу",
        "Расширенная аналитика",
        "Ранний доступ к новым функциям",
        "Персональная поддержка"
      ],
      cta: "Подписаться на Pro",
      popular: false
    }
  ];

  const handleSubscribe = (planName: string) => {
    if (!isAuthenticated) {
      window.location.href = getLoginUrl();
      return;
    }
    
    toast.info("Stripe integration coming soon!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.pricing.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {language === "en" 
                ? "Transparent pricing for professional market intelligence"
                : "Прозрачные цены на профессиональную рыночную аналитику"}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-xl' : 'border-2'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {language === "en" ? "Most Popular" : "Популярный"}
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleSubscribe(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white border-2 border-blue-200 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                {language === "en" ? "Important Information" : "Важная информация"}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {language === "en"
                  ? "All subscriptions provide access to digital content for informational and educational purposes only. Quantis Media does not provide investment advice, trading signals, or manage client funds."
                  : "Все подписки предоставляют доступ к цифровому контенту исключительно в информационных и образовательных целях. Quantis Media не предоставляет инвестиционных рекомендаций, торговых сигналов и не управляет средствами клиентов."}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
