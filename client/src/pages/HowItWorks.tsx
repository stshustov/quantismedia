import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, GitBranch, UserCheck, Shield } from "lucide-react";

export default function HowItWorks() {
  const { language } = useLanguage();

  const steps = language === "en"
    ? [
        {
          icon: Database,
          title: "1) Data Structuring",
          text:
            "Market data is aggregated and normalized to reduce noise and highlight what matters: volatility regime, market structure, and liquidity context.",
        },
        {
          icon: Cpu,
          title: "2) Algorithmic Modeling",
          text:
            "Models evaluate recurring statistical and structural patterns. The goal is not prediction, but a disciplined framework for interpreting market conditions.",
        },
        {
          icon: GitBranch,
          title: "3) Scenario Generation",
          text:
            "We publish scenario frameworks (primary and alternative cases) with clear confirmation and invalidation factors. Scenarios are probabilistic, not instructions.",
        },
        {
          icon: UserCheck,
          title: "4) Human Interpretation",
          text:
            "Subscribers use scenarios as decision support: to understand context, manage uncertainty, and form their own trade plans.",
        },
      ]
    : [
        {
          icon: Database,
          title: "1) Структурирование данных",
          text:
            "Рыночные данные агрегируются и нормализуются, чтобы снизить шум и выделить главное: режим волатильности, структуру рынка и контекст ликвидности.",
        },
        {
          icon: Cpu,
          title: "2) Алгоритмическое моделирование",
          text:
            "Модели оценивают повторяющиеся статистические и структурные закономерности. Цель — не «предсказать будущее», а дать дисциплинированный аналитический каркас.",
        },
        {
          icon: GitBranch,
          title: "3) Формирование сценариев",
          text:
            "Публикуются сценарные рамки (основной и альтернативный сценарий) с факторами подтверждения и инвалидации. Сценарии вероятностные, а не инструкции.",
        },
        {
          icon: UserCheck,
          title: "4) Интерпретация пользователем",
          text:
            "Подписчик использует сценарии как поддержку решения: чтобы понимать контекст, управлять неопределённостью и формировать собственный план действий.",
        },
      ];

  const notices = language === "en"
    ? [
        "Quantis Media is an independent analytical platform. We do not provide investment advice, trading recommendations, or execution services.",
        "All materials are provided for informational and educational purposes only. Past performance is not indicative of future results.",
      ]
    : [
        "Quantis Media — независимая аналитическая платформа. Мы не предоставляем инвестиционных рекомендаций, торговых инструкций и не исполняем сделки.",
        "Все материалы носят информационный и образовательный характер. Прошлые результаты не гарантируют будущей доходности.",
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "How It Works" : "Как это работает"}
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            {language === "en"
              ? "Structured market research presented as scenario-based frameworks to support independent decision-making."
              : "Структурированная рыночная аналитика в формате сценариев — как поддержка для самостоятельного принятия решений."}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {steps.map((s) => (
              <Card key={s.title} className="border-2">
                <CardHeader className="flex flex-row items-center gap-3">
                  <s.icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{s.text}</CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center gap-3">
              <Shield className="h-5 w-5" />
              <CardTitle className="text-lg">
                {language === "en" ? "Important Notice" : "Важное уведомление"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {notices.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
