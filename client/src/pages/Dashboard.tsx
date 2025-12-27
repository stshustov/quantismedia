import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, History, MessageSquare, Users, Calendar, Eye, Clock, Badge as BadgeIcon, AlertCircle, ArrowRight, Globe, ExternalLink } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, setLocation]);

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated || !user) return null;

  const isSubscriber = ["core", "pro", "admin"].includes(user.role);
  const isPro = ["pro", "admin"].includes(user.role);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-4xl font-bold">
                {language === "en" ? `Welcome back, ${user.name || "User"}!` : `С возвращением, ${user.name || "Пользователь"}!`}
              </h1>
              {isSubscriber && (
                <Badge variant={isPro ? "default" : "secondary"} className="text-lg px-4 py-1">
                  {isPro ? "Scenario Intelligence" : "Scenario Access"}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">
              {language === "en" 
                ? `Last login: ${new Date(user.lastSignedIn).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`
                : `Последний вход: ${new Date(user.lastSignedIn).toLocaleDateString("ru-RU", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`}
            </p>
          </div>

          {/* Upgrade Banner for Non-Subscribers */}
          {!isSubscriber && (
            <Alert className="mb-8 border-primary/50 bg-primary/5">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="text-lg font-semibold">
                {language === "en" ? "Unlock Full Access" : "Откройте полный доступ"}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-4">
                  {language === "en" 
                    ? "Subscribe to access trading scenarios, market analysis, and exclusive Telegram channels."
                    : "Подпишитесь, чтобы получить доступ к торговым сценариям, рыночной аналитике и эксклюзивным Telegram каналам."}
                </p>
                <Link href="/pricing">
                  <Button className="bg-primary hover:bg-primary/90">
                    {language === "en" ? "View Plans" : "Смотреть тарифы"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </AlertDescription>
            </Alert>
          )}

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "en" ? "Scenarios Viewed" : "Просмотрено сценариев"}
                    </p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <Eye className="h-8 w-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "en" ? "Last Viewed" : "Последний просмотр"}
                    </p>
                    <p className="text-lg font-semibold">
                      {language === "en" ? "Never" : "Никогда"}
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "en" ? "Member Since" : "Участник с"}
                    </p>
                    <p className="text-lg font-semibold">
                      {new Date(user.createdAt).toLocaleDateString(language === "en" ? "en-US" : "ru-RU", { month: "short", year: "numeric" })}
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === "en" ? "Subscription" : "Подписка"}
                    </p>
                    <p className="text-lg font-semibold">
                      {user.role === "pro" || user.role === "admin" ? "Scenario Intelligence" : user.role === "core" ? "Scenario Access" : "Market Preview"}
                    </p>
                  </div>
                  <BadgeIcon className="h-8 w-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Telegram Channel Info - Only for Subscribers */}
          {isSubscriber && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {language === "en" ? "Telegram Channel" : "Telegram канал"}
              </h2>
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <CardTitle>
                        {language === "en" ? "Your Telegram Access" : "Ваш доступ к Telegram"}
                      </CardTitle>
                    </div>
                    <Link href="/telegram">
                      <Button variant="outline" size="sm">
                        {language === "en" ? "Manage" : "Настроить"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Subscription Tier */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <BadgeIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Subscription Tier" : "Уровень подписки"}
                        </p>
                        <p className="text-lg font-semibold">
                          {isPro ? "Scenario Intelligence" : "Scenario Access"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {language === "en" 
                            ? isPro ? "Extended analytics + Scenarios" : "Full scenario frameworks"
                            : isPro ? "Расширенная аналитика + Сценарии" : "Полные сценарные фреймворки"}
                        </p>
                      </div>
                    </div>

                    {/* Channel Language */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Channel Language" : "Язык канала"}
                        </p>
                        <p className="text-lg font-semibold">
                          {user.telegramChannelLanguage === "ru" ? "🇷🇺 Русский" : "🇬🇧 English"}
                        </p>
                        <Link href="/telegram">
                          <button className="text-xs text-primary hover:underline mt-1">
                            {language === "en" ? "Change language" : "Изменить язык"}
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Channel Access */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <ExternalLink className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Channel Access" : "Доступ к каналу"}
                        </p>
                        <p className="text-lg font-semibold text-primary">
                          {language === "en" ? "Active" : "Активен"}
                        </p>
                        <Link href="/telegram">
                          <button className="text-xs text-primary hover:underline mt-1">
                            {language === "en" ? "Go to channel" : "Перейти в канал"}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Channel Features */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-semibold mb-3">
                      {language === "en" ? "What you'll receive:" : "Что вы получите:"}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {isPro && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-primary">✓</span>
                          <span>{language === "en" ? "Market Insights (Analytics)" : "Рыночная аналитика"}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span>{language === "en" ? "Trading Scenarios" : "Торговые сценарии"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span>{language === "en" ? "Real-time notifications" : "Уведомления в реальном времени"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        <span>{language === "en" ? "Community discussions" : "Обсуждения в сообществе"}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Main Cards */}
          <h2 className="text-2xl font-bold mb-4">
            {language === "en" ? "Quick Access" : "Быстрый доступ"}
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-${isPro ? '2' : '3'} gap-6 mb-8`}>
            <Link href="/trading-ideas">
              <a>
                <Card className="hover:border-primary transition-colors cursor-pointer">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{t.dashboard.tradingIdeas}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {language === "en" 
                        ? isPro ? "Access extended scenario formats" : "Access core scenario formats"
                        : isPro ? "Доступ к расширенным сценариям" : "Доступ к базовым сценариям"}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/history">
              <a>
                <Card className="hover:border-primary transition-colors cursor-pointer">
                  <CardHeader>
                    <History className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{t.dashboard.history}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {language === "en" ? "View scenario history" : "История сценариев"}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/telegram">
              <a>
                <Card className="hover:border-primary transition-colors cursor-pointer">
                  <CardHeader>
                    <MessageSquare className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>
                      {language === "en" ? "Telegram Channel" : "Telegram канал"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {language === "en" ? "Trading ideas notifications" : "Уведомления о торговых идеях"}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            {isPro && (
              <Link href="/pro-community">
                <a>
                  <Card className="hover:border-primary transition-colors cursor-pointer border-primary/30">
                    <CardHeader>
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>
                        {language === "en" ? "Pro Community" : "Pro сообщество"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {language === "en" 
                          ? "Exclusive community for Pro members" 
                          : "Закрытое сообщество для Pro подписчиков"}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
