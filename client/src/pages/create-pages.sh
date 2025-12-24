#!/bin/bash

# Create all missing pages with the new Institutional Dark design

# Pricing page
cat > Pricing.tsx << 'PRICINGEOF'
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const { language } = useLanguage();

  const plans = language === "en" ? [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started with basic access",
      features: [
        "Access to sample trading ideas",
        "Market insights blog",
        "Risk disclosure materials",
        "Email support"
      ],
      cta: "Current Plan",
      highlighted: false
    },
    {
      name: "Core",
      price: "$49",
      period: "/month",
      description: "Essential tools for active traders",
      features: [
        "All Free features",
        "5 trading ideas per week",
        "Basic market analysis",
        "Telegram channel access",
        "Priority email support",
        "Historical ideas archive"
      ],
      cta: "Subscribe Now",
      highlighted: true
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Complete intelligence platform",
      features: [
        "All Core features",
        "Unlimited trading ideas",
        "Advanced market intelligence",
        "Real-time notifications",
        "Private Telegram group",
        "1-on-1 consultation (monthly)",
        "Custom alerts"
      ],
      cta: "Subscribe Now",
      highlighted: false
    }
  ] : [
    {
      name: "Бесплатный",
      price: "$0",
      period: "/месяц",
      description: "Начните с базового доступа",
      features: [
        "Доступ к примерам торговых идей",
        "Блог рыночной аналитики",
        "Материалы о рисках",
        "Поддержка по email"
      ],
      cta: "Текущий план",
      highlighted: false
    },
    {
      name: "Core",
      price: "$49",
      period: "/месяц",
      description: "Основные инструменты для активных трейдеров",
      features: [
        "Все функции Free",
        "5 торговых идей в неделю",
        "Базовый анализ рынка",
        "Доступ к Telegram каналу",
        "Приоритетная поддержка",
        "Архив исторических идей"
      ],
      cta: "Подписаться",
      highlighted: true
    },
    {
      name: "Pro",
      price: "$99",
      period: "/месяц",
      description: "Полная аналитическая платформа",
      features: [
        "Все функции Core",
        "Неограниченные торговые идеи",
        "Продвинутая аналитика",
        "Уведомления в реальном времени",
        "Приватная Telegram группа",
        "Консультация 1-на-1 (ежемесячно)",
        "Персональные оповещения"
      ],
      cta: "Подписаться",
      highlighted: false
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
                className={`relative ${
                  plan.highlighted
                    ? "border-primary border-2 shadow-2xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
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
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
PRICINGEOF

echo "Created Pricing.tsx"

