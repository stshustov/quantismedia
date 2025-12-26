import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Users, MessageCircle, TrendingUp, Shield } from "lucide-react";

export default function ProCommunity() {
  const { user, isAuthenticated, loading } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["pro", "admin"].includes(user?.role || ""))) {
      setLocation("/dashboard");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  if (loading) return <div>Loading...</div>;

  // Placeholder for Telegram Pro Community link (to be added by user)
  const proCommunityLink = import.meta.env.VITE_TELEGRAM_PRO_COMMUNITY || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Pro Community" : "Pro сообщество"}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            {language === "en"
              ? "Exclusive analytical community for Pro subscribers"
              : "Закрытое аналитическое сообщество для Pro подписчиков"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>
                  {language === "en" ? "Community Discussion" : "Обсуждение в сообществе"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Share ideas and discuss market scenarios with other Pro members"
                    : "Делитесь идеями и обсуждайте рыночные сценарии с другими Pro участниками"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>
                  {language === "en" ? "Real-time Updates" : "Обновления в реальном времени"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Get instant notifications about extended scenarios and market insights"
                    : "Получайте мгновенные уведомления о расширенных сценариях и рыночных инсайтах"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>
                  {language === "en" ? "Extended Analysis" : "Расширенный анализ"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Access Primary/Alternative scenario formats with deeper market context"
                    : "Доступ к форматам Primary/Alternative сценариев с углублённым рыночным контекстом"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>
                  {language === "en" ? "Priority Support" : "Приоритетная поддержка"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Get priority responses to your questions and technical support"
                    : "Получайте приоритетные ответы на ваши вопросы и техническую поддержку"}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Join Pro Community" : "Присоединиться к Pro сообществу"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
                <h3 className="font-semibold text-lg mb-3">
                  {language === "en" ? "Community Guidelines:" : "Правила сообщества:"}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {language === "en"
                        ? "Share analytical insights and market observations"
                        : "Делитесь аналитическими инсайтами и рыночными наблюдениями"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {language === "en"
                        ? "Discuss scenario-based frameworks and market structure"
                        : "Обсуждайте сценарные фреймворки и рыночную структуру"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {language === "en"
                        ? "No trading instructions or execution advice"
                        : "Без торговых инструкций или советов по исполнению"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      {language === "en"
                        ? "Respect all members and maintain professional discourse"
                        : "Уважайте всех участников и поддерживайте профессиональный дискурс"}
                    </span>
                  </li>
                </ul>
              </div>

              {proCommunityLink ? (
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(proCommunityLink, "_blank")}
                  >
                    {language === "en" ? "Join Pro Community on Telegram" : "Присоединиться к Pro сообществу в Telegram"}
                  </Button>
                </div>
              ) : (
                <div className="text-center p-8 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    {language === "en"
                      ? "Pro Community Telegram group is being set up. You will receive an invitation link via email once it's ready."
                      : "Telegram группа Pro сообщества настраивается. Вы получите ссылку-приглашение на email, когда она будет готова."}
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
