import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle, TrendingUp, BarChart3, Brain } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";

export default function Pricing() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const createCheckout = trpc.paddle.createCheckout.useMutation();

  const plans = language === "en" ? [
    {
      id: "free",
      name: "Market Preview",
      price: "$0",
      period: "/month",
      description: "Market context and scenario previews",
      tagline: null,
      features: [
        "Market context snapshots",
        "Preview of base scenarios (limited view)",
        "Selected reference levels",
        "Methodology explanation",
        "Public market overviews"
      ],
      limitations: [
        "No full scenario framework",
        "No updates",
        "No historical access"
      ],
      cta: "Explore Market Preview",
      popular: false,
      icon: TrendingUp
    },
    {
      id: "core",
      name: "Scenario Access",
      price: "$39",
      period: "/month",
      description: "Full access to scenario frameworks",
      tagline: "⭐ Most professional users start here",
      features: [
        "Full Base / Upside / Downside scenarios",
        "Defined scenario ranges",
        "Structural levels (support / pivot / risk boundary)",
        "Scenario updates when market structure changes",
        "Historical scenario library (backlog)",
        "Archive of analytical insights",
        "Personal dashboard",
        "Email support"
      ],
      limitations: [],
      cta: "Unlock Scenario Access",
      popular: true,
      icon: BarChart3
    },
    {
      id: "pro",
      name: "Scenario Intelligence",
      price: "$89",
      period: "/month",
      description: "Extended analytics and uncertainty context",
      tagline: "For advanced market participants & desks",
      features: [
        "Everything in Scenario Access",
        "Extended scenario frameworks (primary / alternative)",
        "Higher-frequency updates during regime shifts",
        "Analytical bias & scenario weighting",
        "Analyst commentary & context notes",
        "Optional access to closed analytical discussions",
        "Priority support"
      ],
      limitations: [],
      cta: "Upgrade to Intelligence",
      popular: false,
      icon: Brain
    }
  ] : [
    {
      id: "free",
      name: "Рыночный обзор",
      price: "$0",
      period: "/мес",
      description: "Рыночный контекст и примеры сценариев",
      tagline: null,
      features: [
        "Краткие обзоры рыночного контекста",
        "Превью базовых сценариев (ограниченный формат)",
        "Отдельные аналитические уровни",
        "Описание методологии сценарного анализа",
        "Публичные рыночные обзоры"
      ],
      limitations: [
        "Нет полного сценарного фреймворка",
        "Нет обновлений сценариев",
        "Нет доступа к истории"
      ],
      cta: "Смотреть рыночный обзор",
      popular: false,
      icon: TrendingUp
    },
    {
      id: "core",
      name: "Scenario Access",
      price: "$39",
      period: "/мес",
      description: "Полный доступ к сценарным фреймворкам",
      tagline: "⭐ С этого уровня начинают большинство профессиональных пользователей",
      features: [
        "Полные сценарии: Base / Upside / Downside",
        "Сценарные диапазоны движения",
        "Структурные уровни (поддержка / pivot / risk boundary)",
        "Обновления сценариев при изменении рыночной структуры",
        "История и библиотека сценариев",
        "Архив аналитических материалов",
        "Личный кабинет подписчика",
        "Поддержка по email"
      ],
      limitations: [],
      cta: "Открыть полный сценарный доступ",
      popular: true,
      icon: BarChart3
    },
    {
      id: "pro",
      name: "Scenario Intelligence",
      price: "$89",
      period: "/мес",
      description: "Расширенная аналитика и контекст неопределённости",
      tagline: "Для продвинутых участников рынка и аналитических команд",
      features: [
        "Всё из Scenario Access",
        "Расширенные сценарные фреймворки (основной / альтернативный)",
        "Более частые обновления в периоды смены рыночного режима",
        "Аналитический уклон и сценарное смещение (bias / weighting)",
        "Комментарии аналитика и контекстные заметки",
        "Опциональный доступ к закрытым аналитическим обсуждениям",
        "Приоритетная поддержка"
      ],
      limitations: [],
      cta: "Перейти на уровень Intelligence",
      popular: false,
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-[oklch(0.10_0.02_250)] via-[oklch(0.12_0.02_250)] to-[oklch(0.15_0.02_250)]">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === "en" ? "Access to Market Intelligence Layers" : "Доступ к уровням рыночной аналитики"}
            </h1>
            <p className="text-foreground text-lg max-w-2xl mx-auto">
              {language === "en"
                ? "Structured market frameworks that map possible scenarios, ranges, and structural levels — not predictions."
                : "Структурированные рыночные фреймворки, которые описывают возможные сценарии, диапазоны и структурные уровни, а не прогнозы."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
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
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    </div>
                    <CardDescription className="text-foreground">{plan.description}</CardDescription>
                    {plan.tagline && (
                      <p className="text-sm text-primary mt-2">{plan.tagline}</p>
                    )}
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
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.limitations.length > 0 && (
                      <div className="mb-6 p-3 bg-muted/30 rounded-md">
                        <p className="text-xs text-muted-foreground mb-2 font-semibold">
                          {language === "en" ? "Limitations:" : "Ограничения:"}
                        </p>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="text-xs text-muted-foreground">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                      disabled={plan.id !== "free" && createCheckout.isPending}
                      onClick={async () => {
                        if (plan.id === "free") {
                          window.location.href = "/market-insights";
                          return;
                        }

                        // Check if user is logged in
                        if (!user) {
                          toast.info(
                            language === "en"
                              ? "Please sign in to subscribe"
                              : "Пожалуйста, войдите для оформления подписки"
                          );
                          window.location.href = getLoginUrl();
                          return;
                        }

                        // Map plan ID to product ID
                        const productId = plan.id === "core" ? "scenario_access" : "scenario_intelligence";

                        try {
                          const result = await createCheckout.mutateAsync({ productId });
                          
                          // Open checkout in new tab
                          window.open(result.checkoutUrl, "_blank");
                          
                          toast.success(
                            language === "en"
                              ? "Redirecting to checkout..."
                              : "Перенаправление на оплату..."
                          );
                        } catch (error) {
                          console.error("Checkout error:", error);
                          toast.error(
                            language === "en"
                              ? "Failed to create checkout. Please try again or contact support."
                              : "Не удалось создать сессию оплаты. Попробуйте снова или свяжитесь с поддержкой."
                          );
                        }
                      }}
                    >
                      {createCheckout.isPending && plan.id !== "free" ? (
                        language === "en" ? "Loading..." : "Загрузка..."
                      ) : (
                        plan.cta
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Why Scenario-Based Analysis Works */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  {language === "en" ? "Why Scenario-Based Analysis Works" : "Почему сценарный анализ работает"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">
                    {language === "en" 
                      ? "Markets don't move in straight lines" 
                      : "Рынки не движутся по одной линии"}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {language === "en"
                      ? "Scenarios describe ranges and alternatives, not a single outcome. This approach acknowledges uncertainty and provides a structured framework for decision-making."
                      : "Сценарии описывают диапазоны и альтернативы, а не единственный исход. Этот подход признаёт неопределённость и предоставляет структурированный фреймворк для принятия решений."}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">
                    {language === "en" 
                      ? "Structured uncertainty improves decisions" 
                      : "Структурированная неопределённость улучшает решения"}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {language === "en"
                      ? "Scenarios help you understand where the balance of risks and context shifts. Instead of predicting the future, we map possible paths and key structural levels."
                      : "Сценарии помогают понять, где меняется баланс рисков и контекст. Вместо прогнозирования будущего мы показываем возможные пути и ключевые структурные уровни."}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">
                    {language === "en" 
                      ? "This is how institutions think" 
                      : "Так мыслят институциональные участники рынка"}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {language === "en"
                      ? "Professionals work with frameworks, regimes, and probabilities, not forecasts. Scenario-based intelligence is the foundation of institutional market analysis."
                      : "Профессионалы работают с фреймворками, режимами и вероятностями, а не с прогнозами. Сценарная аналитика — основа институционального рыночного анализа."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Important Note about Community */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-6 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-foreground leading-relaxed">
                <p className="font-semibold mb-2">
                  {language === "en" ? "About Community Access" : "О доступе к сообществу"}
                </p>
                <p>
                  {language === "en"
                    ? "Scenario Intelligence includes optional access to closed analytical discussions. This is NOT sold as 'community' — it's an intellectual analytical layer. Community is an additional element, not the core value."
                    : "Scenario Intelligence включает опциональный доступ к закрытым аналитическим обсуждениям. Это не «сообщество», а интеллектуальный аналитический уровень. Сообщество — дополнительный элемент, не основная ценность."}
                </p>
              </div>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold mb-2">
                  {language === "en" ? "Important Legal Notice" : "Важное юридическое уведомление"}
                </p>
                <p>
                  {language === "en"
                    ? "Quantis Media provides scenario-based market intelligence for informational and educational purposes only. We do not provide investment advice, trade execution instructions, or personalized recommendations. All analytical scenarios are frameworks for understanding market structure, not trading signals."
                    : "Quantis Media предоставляет сценарную рыночную аналитику исключительно в информационных и образовательных целях. Мы не предоставляем инвестиционных рекомендаций, торговых инструкций или персонализированных советов. Все аналитические сценарии — это фреймворки для понимания рыночной структуры, а не торговые сигналы."}
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
