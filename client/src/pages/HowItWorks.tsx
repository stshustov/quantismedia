import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, GitBranch, UserCheck, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HowItWorks() {
  const { language } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = language === "en"
    ? [
        {
          icon: Database,
          title: "1) Data Structuring",
          text:
            "Market data is aggregated and normalized to reduce noise and highlight what matters: volatility regime, market structure, and liquidity context.",
          expandedTitle: "How we structure market data",
          expandedText:
            "We aggregate price, volatility, and macro inputs to separate market noise from structure. At this stage we define the current market regime: the volatility state, liquidity context, and dominant flow behavior.\nThe goal is not prediction — it's establishing an objective context for how the market operates right now.",
        },
        {
          icon: Cpu,
          title: "2) Algorithmic Modeling",
          text:
            "Models evaluate recurring statistical and structural patterns. The goal is not prediction, but a disciplined framework for interpreting market conditions.",
          expandedTitle: "How we identify recurring regimes",
          expandedText:
            "Models evaluate recurring statistical and structural patterns: volatility compression/expansion, movement asymmetry, and market responses to macro and liquidity conditions.\nWe don't use models to predict price. Their role is to determine which scenarios are feasible in the current regime — and which are not.",
        },
        {
          icon: GitBranch,
          title: "3) Scenario Generation",
          text:
            "We publish scenario frameworks (primary and alternative cases) with clear confirmation and invalidation factors. Scenarios are probabilistic, not instructions.",
          expandedTitle: "How scenarios are constructed",
          expandedText:
            "Based on the identified regime, we publish scenario frameworks: a base case and alternative cases. Each scenario includes confirmation conditions, invalidation factors, and key structural levels.\nScenarios are not instructions — they are probabilistic frameworks that clarify what must change for the market to transition into a different regime.",
        },
        {
          icon: UserCheck,
          title: "4) Human Interpretation",
          text:
            "Subscribers use scenarios as decision support: to understand context, manage uncertainty, and form their own trade plans.",
          expandedTitle: "How to use it for decision-making",
          expandedText:
            "Subscribers use scenarios as decision support, not ready-made answers — to understand context, manage uncertainty, and build their own plan consistent with their style and mandate.\nQuantis Media does not provide investment advice or execute trades.",
        },
      ]
    : [
        {
          icon: Database,
          title: "1) Структурирование данных",
          text:
            "Рыночные данные агрегируются и нормализуются, чтобы снизить шум и выделить главное: режим волатильности, структуру рынка и контекст ликвидности.",
          expandedTitle: "Как мы структурируем данные",
          expandedText:
            "Мы агрегируем ценовые, волатильностные и макроэкономические данные, чтобы отделить рыночный шум от структуры. На этом этапе определяется текущий режим рынка: характер волатильности, контекст ликвидности и тип доминирующих потоков.\nЦель этапа — не прогноз, а формирование объективного контекста, в котором рынок существует здесь и сейчас.",
        },
        {
          icon: Cpu,
          title: "2) Алгоритмическое моделирование",
          text:
            "Модели оценивают повторяющиеся статистические и структурные закономерности. Цель — не «предсказать будущее», а дать дисциплинированный аналитический каркас.",
          expandedTitle: "Как мы определяем повторяющиеся режимы",
          expandedText:
            "Модели анализируют повторяющиеся статистические и структурные закономерности: сжатие/расширение волатильности, асимметрию движений, реакцию рынка на макро-факторы и ликвидность.\nМы не используем модели для предсказания цены. Их задача — определить, какие сценарии допустимы в текущем режиме, а какие — нет.",
        },
        {
          icon: GitBranch,
          title: "3) Формирование сценариев",
          text:
            "Публикуются сценарные рамки (основной и альтернативный сценарий) с факторами подтверждения и инвалидации. Сценарии вероятностные, а не инструкции.",
          expandedTitle: "Как формируются сценарные рамки",
          expandedText:
            "На базе выявленного режима публикуются сценарные рамки: базовый и альтернативные сценарии. Каждый сценарий содержит условия подтверждения и факторы инвалидирования, а также ключевые уровни структуры.\nСценарии — это не инструкции, а вероятностные рамки, которые помогают понять, что должно измениться, чтобы рынок перешёл в другой режим.",
        },
        {
          icon: UserCheck,
          title: "4) Интерпретация пользователем",
          text:
            "Подписчик использует сценарии как поддержку решения: чтобы понимать контекст, управлять неопределённостью и формировать собственный план действий.",
          expandedTitle: "Как это использовать в принятии решений",
          expandedText:
            "Подписчик использует сценарии как аналитическую опору, а не готовое решение: чтобы понимать контекст, управлять неопределённостью и формировать собственный план действий в соответствии со своим стилем и мандатом.\nQuantis Media не предоставляет инвестиционных рекомендаций и не исполняет сделки.",
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

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleStep(index);
    }
  };

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
            {steps.map((s, index) => {
              const isExpanded = expandedStep === index;
              const detailsId = `step-details-${index}`;

              return (
                <Card
                  key={s.title}
                  className="border-2 cursor-pointer transition-all duration-200 hover:border-primary/50"
                  onClick={() => toggleStep(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                >
                  <CardHeader className="flex flex-row items-center gap-3">
                    <s.icon className="h-5 w-5 flex-shrink-0" />
                    <CardTitle className="text-lg flex-1">{s.title}</CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>{s.text}</p>
                    
                    {/* Expanded content */}
                    <div
                      id={detailsId}
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-2">
                          {s.expandedTitle}
                        </h4>
                        <p className="text-sm whitespace-pre-line">
                          {s.expandedText}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center gap-3">
              <Shield className="h-5 w-5" />
              <CardTitle>
                {language === "en" ? "Important Notice" : "Важное уведомление"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notices.map((n, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {n}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
