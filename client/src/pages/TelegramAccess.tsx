import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { MessageSquare, Globe } from "lucide-react";

export default function TelegramAccess() {
  const { user, isAuthenticated, loading } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  
  // Local state for channel language selection
  const [channelLanguage, setChannelLanguage] = useState<"en" | "ru">(
    user?.telegramChannelLanguage || "en"
  );

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["core", "pro", "admin"].includes(user?.role || ""))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  // Update channel language mutation
  const updateLanguageMutation = trpc.telegram.updateChannelLanguage.useMutation({
    onSuccess: () => {
      toast.success(language === "en" ? "Channel language updated!" : "Язык канала обновлён!");
    },
    onError: () => {
      toast.error(language === "en" ? "Failed to update language" : "Не удалось обновить язык");
    }
  });

  const handleLanguageChange = (newLanguage: "en" | "ru") => {
    setChannelLanguage(newLanguage);
    updateLanguageMutation.mutate({ language: newLanguage });
  };

  // Generate channel link based on user role and selected language
  const getChannelLink = () => {
    if (!user) return "";
    
    // Placeholder links - replace with actual Telegram channel links
    const channels = {
      pro: {
        en: import.meta.env.VITE_TELEGRAM_PRO_EN || "https://t.me/+QuantisProEN",
        ru: import.meta.env.VITE_TELEGRAM_PRO_RU || "https://t.me/+QuantisProRU"
      },
      core: {
        en: import.meta.env.VITE_TELEGRAM_CORE_EN || "https://t.me/+QuantisCoreEN",
        ru: import.meta.env.VITE_TELEGRAM_CORE_RU || "https://t.me/+QuantisCoreRU"
      },
      admin: {
        en: import.meta.env.VITE_TELEGRAM_PRO_EN || "https://t.me/+QuantisProEN",
        ru: import.meta.env.VITE_TELEGRAM_PRO_RU || "https://t.me/+QuantisProRU"
      }
    };

    const role = user.role as "pro" | "core" | "admin";
    return channels[role]?.[channelLanguage] || "";
  };

  const channelLink = getChannelLink();

  const content = {
    en: {
      title: "Telegram Channel Access",
      subtitle: "Choose your preferred channel language and join our community",
      languageSelection: "Channel Language",
      channelStructure: "Channel Structure",
      proChannel: "Pro Channel",
      coreChannel: "Core Channel",
      proDescription: "Market analytics + Trading scenarios",
      coreDescription: "Trading scenarios only",
      yourAccess: "Your Access Level",
      selectedLanguage: "Selected Language",
      joinButton: "Join Telegram Channel",
      comingSoon: "Telegram channels are being set up. You will receive an invitation link via email once ready.",
      features: {
        title: "What to Expect",
        analytics: "Real-time market analysis distribution",
        scenarios: "Scenario-based trading ideas",
        comments: "Discussion via comments (no chat spam)",
        noInstructions: "No trading instructions or execution"
      },
      disclaimer: {
        title: "Important Notes",
        point1: "Channels are comment-only: you can discuss under posts but cannot create your own messages",
        point2: "All content is for informational and educational purposes only",
        point3: "No trading instructions, execution guidance, or personalized recommendations"
      }
    },
    ru: {
      title: "Доступ к Telegram каналу",
      subtitle: "Выберите предпочитаемый язык канала и присоединяйтесь к сообществу",
      languageSelection: "Язык канала",
      channelStructure: "Структура каналов",
      proChannel: "Pro канал",
      coreChannel: "Core канал",
      proDescription: "Рыночная аналитика + Торговые сценарии",
      coreDescription: "Только торговые сценарии",
      yourAccess: "Ваш уровень доступа",
      selectedLanguage: "Выбранный язык",
      joinButton: "Присоединиться к Telegram каналу",
      comingSoon: "Telegram каналы настраиваются. Вы получите ссылку-приглашение на email, когда они будут готовы.",
      features: {
        title: "Что ожидать",
        analytics: "Публикация рыночной аналитики в реальном времени",
        scenarios: "Сценарные торговые идеи",
        comments: "Обсуждение через комментарии (без спама в чате)",
        noInstructions: "Без торговых инструкций или исполнения"
      },
      disclaimer: {
        title: "Важные примечания",
        point1: "Каналы только для комментариев: вы можете обсуждать под постами, но не можете создавать свои сообщения",
        point2: "Весь контент предоставляется исключительно в информационных и образовательных целях",
        point3: "Без торговых инструкций, руководства по исполнению или персонализированных рекомендаций"
      }
    }
  };

  const t = content[language];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Language Selection Card */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                {t.languageSelection}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Select the language for your Telegram channel content" 
                  : "Выберите язык для контента в Telegram канале"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button
                  variant={channelLanguage === "en" ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleLanguageChange("en")}
                  className="flex-1"
                >
                  🇬🇧 English
                </Button>
                <Button
                  variant={channelLanguage === "ru" ? "default" : "outline"}
                  size="lg"
                  onClick={() => handleLanguageChange("ru")}
                  className="flex-1"
                >
                  🇷🇺 Русский
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Channel Structure */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t.channelStructure}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Pro Channel */}
                <div className={`p-6 rounded-lg border-2 ${user?.role === "pro" || user?.role === "admin" ? "border-primary bg-primary/5" : "border-border"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-lg text-foreground">{t.proChannel}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{t.proDescription}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-foreground">{language === "en" ? "Market Insights (Analytics)" : "Рыночная аналитика"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-foreground">{language === "en" ? "Trading Scenarios" : "Торговые сценарии"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-foreground">{language === "en" ? "Comments enabled" : "Комментарии включены"}</span>
                    </li>
                  </ul>
                </div>

                {/* Core Channel */}
                <div className={`p-6 rounded-lg border-2 ${user?.role === "core" ? "border-primary bg-primary/5" : "border-border"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-bold text-lg text-foreground">{t.coreChannel}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{t.coreDescription}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-foreground">{language === "en" ? "Trading Scenarios" : "Торговые сценарии"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-foreground">{language === "en" ? "Comments enabled" : "Комментарии включены"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Access Summary */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{t.yourAccess}</p>
                  <p className="text-2xl font-bold text-primary capitalize">
                    {user?.role === "admin" ? "Pro" : user?.role}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{t.selectedLanguage}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {channelLanguage === "en" ? "🇬🇧 English" : "🇷🇺 Русский"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Join Button or Coming Soon */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              {channelLink && !channelLink.includes("PLACEHOLDER") ? (
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                    onClick={() => window.open(channelLink, "_blank")}
                  >
                    {t.joinButton}
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {language === "en"
                      ? "Click to open your Telegram channel in a new tab"
                      : "Нажмите, чтобы открыть ваш Telegram канал в новой вкладке"}
                  </p>
                </div>
              ) : (
                <div className="text-center p-8 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">{t.comingSoon}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Expected availability: Coming soon"
                      : "Ожидаемая доступность: Скоро"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t.features.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-foreground">{t.features.analytics}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-foreground">{t.features.scenarios}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-foreground">{t.features.comments}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-foreground">{t.features.noInstructions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="p-6 bg-muted/30 border border-border rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-foreground">⚠️ {t.disclaimer.title}</h3>
            <div className="space-y-3 text-sm text-foreground">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-0.5">1.</span>
                <span>{t.disclaimer.point1}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-0.5">2.</span>
                <span>{t.disclaimer.point2}</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-0.5">3.</span>
                <span>{t.disclaimer.point3}</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
