import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

interface PaywallBlurProps {
  /**
   * Whether to show the paywall overlay
   * Should be true for guest/registered users, false for core/pro/admin
   */
  isLocked: boolean;
}

/**
 * PaywallBlur Component
 * 
 * Displays a blur/fade overlay with CTA for users without subscription access.
 * Used on scenario pages to gate premium content.
 */
export default function PaywallBlur({ isLocked }: PaywallBlurProps) {
  const { language } = useLanguage();

  if (!isLocked) return null;

  const content = {
    en: {
      title: "Unlock full market framework",
      description: "Access full scenario ranges, structural levels, and updates with Scenario Access.",
      cta: "Upgrade to Scenario Access",
      signIn: "Already subscribed?",
      signInLink: "Sign in",
    },
    ru: {
      title: "Откройте полный рыночный фреймворк",
      description: "Получите доступ к полным сценарным диапазонам, структурным уровням и обновлениям с тарифом Scenario Access.",
      cta: "Перейти на Scenario Access",
      signIn: "Уже есть подписка?",
      signInLink: "Войти",
    },
  };

  const currentContent = content[language];

  return (
    <div className="relative">
      {/* Blur/Fade Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none z-10" />
      
      {/* CTA Card */}
      <Card className="relative z-20 p-8 border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-2xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Lock Icon */}
          <div className="p-4 rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>

          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{currentContent.title}</h3>
            <p className="text-muted-foreground max-w-md">
              {currentContent.description}
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/pricing">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {currentContent.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* Sign In Link */}
          <div className="text-sm text-muted-foreground">
            {currentContent.signIn}{" "}
            <a 
              href={getLoginUrl()} 
              className="text-primary hover:underline font-medium"
            >
              {currentContent.signInLink}
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
