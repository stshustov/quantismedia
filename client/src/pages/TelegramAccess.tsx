import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

export default function TelegramAccess() {
  const { user, isAuthenticated, loading } = useAuth();
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["core", "pro", "admin"].includes(user?.role || ""))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  // Placeholder for Telegram Channel link (to be added by user)
  const telegramChannelLink = import.meta.env.VITE_TELEGRAM_CHANNEL || "";

  const { data: access } = trpc.telegram.getAccess.useQuery(undefined, {
    enabled: isAuthenticated && !!user && ["core", "pro", "admin"].includes(user.role),
  });

  const generateMutation = trpc.telegram.generateInvite.useMutation({
    onSuccess: (data) => {
      toast.success(language === "en" ? "Invite link generated!" : "Ссылка-приглашение создана!");
    },
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">{t.dashboard.telegram}</h1>
          
          <div className="mb-8 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              {language === "en"
                ? "Telegram channel provides real-time distribution of published scenarios for convenience and community discussion."
                : "Telegram-канал обеспечивает распространение опубликованных сценариев в реальном времени для удобства и обсуждения в сообществе."}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {language === "en" ? "No trading instructions" : "Без торговых инструкций"}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {language === "en" ? "No execution" : "Без исполнения сделок"}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">•</span>
                {language === "en" ? "Scenarios only" : "Только сценарии"}
              </p>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Telegram Channel Access" : "Доступ к Telegram каналу"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {telegramChannelLink ? (
                <div className="text-center">
                  <p className="mb-6 text-muted-foreground">
                    {language === "en"
                      ? "Join our Telegram channel to receive trading ideas and market scenario notifications."
                      : "Присоединяйтесь к нашему Telegram каналу для получения торговых идей и уведомлений о рыночных сценариях."}
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(telegramChannelLink, "_blank")}
                  >
                    {language === "en" ? "Join Telegram Channel" : "Присоединиться к Telegram каналу"}
                  </Button>
                </div>
              ) : (
                <div className="text-center p-8 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    {language === "en"
                      ? "Telegram channel is being set up. You will receive an invitation link via email once it's ready."
                      : "Telegram канал настраивается. Вы получите ссылку-приглашение на email, когда он будет готов."}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Expected availability: Coming soon"
                      : "Ожидаемая доступность: Скоро"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
