import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  User, 
  Mail, 
  Globe, 
  Calendar,
  CheckCircle,
  MessageSquare,
  Users,
  Lock,
  TrendingUp
} from "lucide-react";

export default function Account() {
  const { user, loading, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user || !["core", "pro", "admin"].includes(user.role))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  const isPro = ["pro", "admin"].includes(user.role);
  const isCore = user.role === "core";

  const t = {
    title: language === "en" ? "Account Settings" : "Настройки аккаунта",
    subscription: {
      title: language === "en" ? "Your Subscription" : "Ваша подписка",
      plan: language === "en" ? "Plan" : "План",
      status: language === "en" ? "Status" : "Статус",
      active: language === "en" ? "Active" : "Активна",
      billing: language === "en" ? "Billing Cycle" : "Период оплаты",
      monthly: language === "en" ? "Monthly" : "Ежемесячно",
      nextPayment: language === "en" ? "Next Payment" : "Следующий платёж",
      amount: language === "en" ? "Amount" : "Сумма",
      manageSubscription: language === "en" ? "Manage Subscription" : "Управление подпиской",
      viewInvoices: language === "en" ? "View Invoices" : "Просмотр инвойсов",
    },
    usage: {
      title: language === "en" ? "Usage This Month" : "Использование за месяц",
      scenariosViewed: language === "en" ? "Scenarios Viewed" : "Просмотрено сценариев",
      unlimited: language === "en" ? "Unlimited" : "Неограничено",
      lastActive: language === "en" ? "Last Active" : "Последняя активность",
      memberSince: language === "en" ? "Member Since" : "Участник с",
    },
    telegram: {
      title: language === "en" ? "Telegram Access" : "Доступ к Telegram",
      channel: language === "en" ? "Trading Ideas Channel" : "Канал торговых идей",
      channelDesc: language === "en" ? "Get notifications about new scenarios" : "Получайте уведомления о новых сценариях",
      community: language === "en" ? "Analytical Discussions" : "Аналитические обсуждения",
      communityDesc: language === "en" ? "Optional access to closed analytical discussions" : "Опциональный доступ к закрытым аналитическим обсуждениям",
      proOnly: language === "en" ? "Intelligence only" : "Только Intelligence",
      upgradeToPro: language === "en" ? "Upgrade to Intelligence" : "Перейти на Intelligence",
      openChannel: language === "en" ? "Open Channel" : "Открыть канал",
      openCommunity: language === "en" ? "Open Community" : "Открыть сообщество",
    },
    profile: {
      title: language === "en" ? "Profile Information" : "Информация профиля",
      name: language === "en" ? "Name" : "Имя",
      email: language === "en" ? "Email" : "Email",
      language: language === "en" ? "Language" : "Язык",
      updateProfile: language === "en" ? "Update Profile" : "Обновить профиль",
    },
    upgrade: {
      title: language === "en" ? "Upgrade to Scenario Intelligence" : "Перейти на Scenario Intelligence",
      description: language === "en" 
        ? "Unlock extended scenario frameworks, analytical bias & weighting, and priority support for just $50/month more."
        : "Разблокируйте расширенные сценарные фреймворки, аналитический уклон и приоритетную поддержку всего за $50/месяц.",
      comparePlans: language === "en" ? "Compare Plans" : "Сравнить планы",
      upgradeNow: language === "en" ? "Upgrade Now" : "Перейти сейчас",
    },
  };

  const telegramChannelLink = import.meta.env.VITE_TELEGRAM_CHANNEL || "";
  const telegramProLink = import.meta.env.VITE_TELEGRAM_PRO_COMMUNITY || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">
              {language === "en" 
                ? "Manage your subscription, profile, and preferences"
                : "Управляйте подпиской, профилем и настройками"}
            </p>
          </div>

          {/* Subscription Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t.subscription.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.subscription.plan}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                      {isPro ? "Scenario Intelligence" : "Scenario Access"}
                    </span>
                    <Badge variant={isPro ? "default" : "secondary"}>
                      {isPro ? "$89/mo" : "$39/mo"}
                    </Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.subscription.status}</div>
                  <div className="flex items-center gap-2 text-2xl font-bold">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    {t.subscription.active}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.subscription.billing}</div>
                  <div className="text-lg">{t.subscription.monthly}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.subscription.amount}</div>
                  <div className="text-lg font-semibold">
                    ${isPro ? "89.00" : "39.00"} / {language === "en" ? "month" : "месяц"}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex gap-3">
                <Button variant="outline" onClick={() => setLocation("/account/subscription")}>
                  {t.subscription.manageSubscription}
                </Button>
                <Button variant="outline" onClick={() => setLocation("/account/billing")}>
                  {t.subscription.viewInvoices}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Usage Statistics Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {t.usage.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.usage.scenariosViewed}</div>
                  <div className="text-2xl font-bold">0 / {t.usage.unlimited}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.usage.lastActive}</div>
                  <div className="text-lg">
                    {new Date(user.lastSignedIn).toLocaleDateString(language === "en" ? "en-US" : "ru-RU")}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.usage.memberSince}</div>
                  <div className="text-lg">
                    {new Date(user.createdAt).toLocaleDateString(language === "en" ? "en-US" : "ru-RU", {
                      month: "short",
                      year: "numeric"
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Telegram Access Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {t.telegram.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Trading Ideas Channel - Available for Core and Pro */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">{t.telegram.channel}</div>
                    <div className="text-sm text-muted-foreground">{t.telegram.channelDesc}</div>
                  </div>
                </div>
                {telegramChannelLink ? (
                  <Button onClick={() => window.open(telegramChannelLink, "_blank")}>
                    {t.telegram.openChannel}
                  </Button>
                ) : (
                  <Badge variant="secondary">
                    {language === "en" ? "Coming Soon" : "Скоро"}
                  </Badge>
                )}
              </div>

              {/* Pro Community - Pro only */}
              <div className={`flex items-start justify-between p-4 border rounded-lg ${!isPro ? "opacity-60" : ""}`}>
                <div className="flex gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {t.telegram.community}
                      {!isPro && <Badge variant="outline">{t.telegram.proOnly}</Badge>}
                    </div>
                    <div className="text-sm text-muted-foreground">{t.telegram.communityDesc}</div>
                  </div>
                </div>
                {isPro ? (
                  telegramProLink ? (
                    <Button onClick={() => window.open(telegramProLink, "_blank")}>
                      {t.telegram.openCommunity}
                    </Button>
                  ) : (
                    <Badge variant="secondary">
                      {language === "en" ? "Coming Soon" : "Скоро"}
                    </Badge>
                  )
                ) : (
                  <Button variant="outline" onClick={() => setLocation("/pricing")}>
                    {t.telegram.upgradeToPro}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Prompt for Core Users */}
          {isCore && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{t.upgrade.title}</h3>
                    <p className="text-muted-foreground mb-4">{t.upgrade.description}</p>
                    <div className="flex gap-3">
                      <Button onClick={() => setLocation("/pricing")}>
                        {t.upgrade.upgradeNow}
                      </Button>
                      <Button variant="outline" onClick={() => setLocation("/pricing")}>
                        {t.upgrade.comparePlans}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Profile Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {t.profile.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.profile.name}</div>
                  <div className="text-lg">{user.name || "—"}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.profile.email}</div>
                  <div className="text-lg">{user.email || "—"}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t.profile.language}</div>
                  <div className="text-lg capitalize">{user.language}</div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" onClick={() => setLocation("/account/notifications")}>
                  {language === "en" ? "Notification Preferences" : "Настройки уведомлений"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
