import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, History, MessageSquare, Users, Calendar, Eye, Clock, Badge as BadgeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

  if (!isSubscriber) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">
              {language === "en" ? "Subscription Required" : "Требуется подписка"}
            </h1>
            <p className="mb-8">
              {language === "en" 
                ? "Please subscribe to access the dashboard." 
                : "Пожалуйста, оформите подписку для доступа к личному кабинету."}
            </p>
            <Link href="/pricing"><a className="text-primary hover:underline">
              {language === "en" ? "View Pricing" : "Смотреть тарифы"}
            </a></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Badge variant={isPro ? "default" : "secondary"} className="text-lg px-4 py-1">
                {isPro ? "Pro" : "Core"}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {language === "en" 
                ? `Last login: ${new Date(user.lastSignedIn).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`
                : `Последний вход: ${new Date(user.lastSignedIn).toLocaleDateString("ru-RU", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`}
            </p>
          </div>

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
                    <p className="text-lg font-semibold capitalize">{user.role}</p>
                  </div>
                  <BadgeIcon className="h-8 w-8 text-primary/50" />
                </div>
              </CardContent>
            </Card>
          </div>

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
