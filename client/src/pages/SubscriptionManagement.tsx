import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  TrendingUp,
  Users,
  MessageSquare,
  History,
  AlertCircle
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function SubscriptionManagement() {
  const { user, loading, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const [processing, setProcessing] = useState(false);

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
    title: language === "en" ? "Subscription Management" : "Управление подпиской",
    subtitle: language === "en" 
      ? "Manage your subscription plan and billing"
      : "Управляйте вашей подпиской и платежами",
    
    currentPlan: {
      title: language === "en" ? "Current Plan" : "Текущий план",
      status: language === "en" ? "Status" : "Статус",
      active: language === "en" ? "Active" : "Активна",
      nextBilling: language === "en" ? "Next Billing Date" : "Следующий платёж",
      amount: language === "en" ? "Amount" : "Сумма",
      billingCycle: language === "en" ? "Billing Cycle" : "Период оплаты",
      monthly: language === "en" ? "Monthly" : "Ежемесячно",
    },

    comparison: {
      title: language === "en" ? "Plan Comparison" : "Сравнение планов",
      core: "Core",
      pro: "Pro",
      features: language === "en" ? "Features" : "Возможности",
      tradingIdeas: language === "en" ? "Trading Ideas" : "Торговые идеи",
      coreScenarios: language === "en" ? "Base scenarios" : "Базовые сценарии",
      extendedScenarios: language === "en" ? "Extended scenarios" : "Расширенные сценарии",
      history: language === "en" ? "Scenario History" : "История сценариев",
      telegram: language === "en" ? "Telegram Channel" : "Telegram канал",
      community: language === "en" ? "Pro Community" : "Pro сообщество",
      support: language === "en" ? "Support" : "Поддержка",
      standardSupport: language === "en" ? "Standard" : "Стандартная",
      prioritySupport: language === "en" ? "Priority" : "Приоритетная",
      archive: language === "en" ? "Archive Access" : "Доступ к архиву",
      noDelay: language === "en" ? "No delay" : "Без задержки",
    },

    actions: {
      upgrade: language === "en" ? "Upgrade to Pro" : "Обновить до Pro",
      downgrade: language === "en" ? "Downgrade to Core" : "Понизить до Core",
      cancel: language === "en" ? "Cancel Subscription" : "Отменить подписку",
      updatePayment: language === "en" ? "Update Payment Method" : "Обновить способ оплаты",
      viewInvoices: language === "en" ? "View Billing History" : "История платежей",
      backToAccount: language === "en" ? "Back to Account" : "Назад в аккаунт",
    },

    cancelDialog: {
      title: language === "en" ? "Cancel Subscription" : "Отменить подписку",
      description: language === "en"
        ? "Are you sure you want to cancel your subscription? You will lose access to all premium features at the end of your current billing period."
        : "Вы уверены, что хотите отменить подписку? Вы потеряете доступ ко всем премиум функциям в конце текущего платёжного периода.",
      confirm: language === "en" ? "Yes, Cancel Subscription" : "Да, отменить подписку",
      cancel: language === "en" ? "Keep Subscription" : "Оставить подписку",
    },

    upgradeDialog: {
      title: language === "en" ? "Upgrade to Scenario Intelligence" : "Обновить до Scenario Intelligence",
      description: language === "en"
        ? "Upgrade to Scenario Intelligence for $89/month and get access to extended scenario frameworks, analytical bias & weighting, and priority support. Your card will be charged the prorated amount immediately."
        : "Обновите до Scenario Intelligence за $89/месяц и получите доступ к расширенным сценарным фреймворкам, аналитическому уклону и приоритетной поддержке. С вашей карты будет списана пропорциональная сумма немедленно.",
      confirm: language === "en" ? "Upgrade Now" : "Обновить сейчас",
      cancel: language === "en" ? "Maybe Later" : "Может быть позже",
    },

    downgradeDialog: {
      title: language === "en" ? "Downgrade to Scenario Access" : "Понизить до Scenario Access",
      description: language === "en"
        ? "Downgrade to Scenario Access for $39/month. You will lose access to extended scenario frameworks and analytical bias at the end of your current billing period."
        : "Понизьте до Scenario Access за $39/месяц. Вы потеряете доступ к расширенным сценарным фреймворкам и аналитическому уклону в конце текущего платёжного периода.",
      confirm: language === "en" ? "Downgrade to Scenario Access" : "Понизить до Scenario Access",
      cancel: language === "en" ? "Keep Intelligence" : "Оставить Intelligence",
    },
  };

  const handleUpgrade = async () => {
    setProcessing(true);
    // TODO: Implement Paddle checkout for upgrade
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(language === "en" 
      ? "Upgrade functionality will be available after Paddle integration"
      : "Функция обновления будет доступна после интеграции Paddle");
    setProcessing(false);
  };

  const handleDowngrade = async () => {
    setProcessing(true);
    // TODO: Implement downgrade via Paddle API
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(language === "en"
      ? "Downgrade scheduled for end of billing period"
      : "Понижение запланировано на конец платёжного периода");
    setProcessing(false);
  };

  const handleCancel = async () => {
    setProcessing(true);
    // TODO: Implement cancellation via Paddle API
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(language === "en"
      ? "Subscription cancelled. Access will continue until end of billing period."
      : "Подписка отменена. Доступ сохранится до конца платёжного периода.");
    setProcessing(false);
  };

  const handleUpdatePayment = () => {
    // TODO: Implement Paddle payment method update
    alert(language === "en"
      ? "Payment method update will be available after Paddle integration"
      : "Обновление способа оплаты будет доступно после интеграции Paddle");
  };

  const coreFeatures = [
    { icon: TrendingUp, text: t.comparison.coreScenarios, included: true },
    { icon: History, text: t.comparison.history, included: true },
    { icon: MessageSquare, text: t.comparison.telegram, included: true },
    { icon: Users, text: t.comparison.community, included: false },
    { text: t.comparison.standardSupport, included: true },
    { text: t.comparison.noDelay, included: true },
  ];

  const proFeatures = [
    { icon: TrendingUp, text: t.comparison.extendedScenarios, included: true },
    { icon: History, text: t.comparison.history, included: true },
    { icon: MessageSquare, text: t.comparison.telegram, included: true },
    { icon: Users, text: t.comparison.community, included: true },
    { text: t.comparison.prioritySupport, included: true },
    { text: t.comparison.noDelay, included: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Current Plan Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                {t.currentPlan.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{language === "en" ? "Plan" : "План"}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold capitalize">{user.role}</p>
                    <Badge variant={isPro ? "default" : "secondary"}>
                      {isPro ? "Pro" : "Core"}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.currentPlan.status}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-lg font-semibold">{t.currentPlan.active}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.currentPlan.nextBilling}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">
                      {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(
                        language === "en" ? "en-US" : "ru-RU",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">{t.currentPlan.amount}</p>
                  <p className="text-lg font-semibold">${isPro ? "89.00" : "39.00"} / {language === "en" ? "mo" : "мес"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>{t.comparison.title}</CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Compare features and choose the plan that's right for you"
                  : "Сравните возможности и выберите подходящий план"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Core Plan */}
                <div className={`border rounded-lg p-6 ${isCore ? "border-primary" : "border-border"}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">Core</h3>
                    <p className="text-3xl font-bold text-primary">$39<span className="text-lg text-muted-foreground">/{language === "en" ? "mo" : "мес"}</span></p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {coreFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {isPro && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          {t.actions.downgrade}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{t.downgradeDialog.title}</AlertDialogTitle>
                          <AlertDialogDescription>
                            {t.downgradeDialog.description}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>{t.downgradeDialog.cancel}</AlertDialogCancel>
                          <AlertDialogAction onClick={handleDowngrade} disabled={processing}>
                            {processing ? (language === "en" ? "Processing..." : "Обработка...") : t.downgradeDialog.confirm}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                  {isCore && (
                    <Button variant="outline" className="w-full" disabled>
                      {language === "en" ? "Current Plan" : "Текущий план"}
                    </Button>
                  )}
                </div>

                {/* Pro Plan */}
                <div className={`border rounded-lg p-6 ${isPro ? "border-primary bg-primary/5" : "border-border"}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">Pro</h3>
                    <p className="text-3xl font-bold text-primary">$89<span className="text-lg text-muted-foreground">/{language === "en" ? "mo" : "мес"}</span></p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {proFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {isCore && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="w-full">
                          {t.actions.upgrade}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{t.upgradeDialog.title}</AlertDialogTitle>
                          <AlertDialogDescription>
                            {t.upgradeDialog.description}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>{t.upgradeDialog.cancel}</AlertDialogCancel>
                          <AlertDialogAction onClick={handleUpgrade} disabled={processing}>
                            {processing ? (language === "en" ? "Processing..." : "Обработка...") : t.upgradeDialog.confirm}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                  {isPro && (
                    <Button className="w-full" disabled>
                      {language === "en" ? "Current Plan" : "Текущий план"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" onClick={handleUpdatePayment}>
              <CreditCard className="h-4 w-4 mr-2" />
              {t.actions.updatePayment}
            </Button>

            <Button variant="outline" onClick={() => setLocation("/account")}>
              {t.actions.viewInvoices}
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {t.actions.cancel}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t.cancelDialog.title}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t.cancelDialog.description}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{t.cancelDialog.cancel}</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleCancel} 
                    disabled={processing}
                    className="bg-destructive hover:bg-destructive/90"
                  >
                    {processing ? (language === "en" ? "Processing..." : "Обработка...") : t.cancelDialog.confirm}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Back Button */}
          <Button variant="outline" onClick={() => setLocation("/account")}>
            {t.actions.backToAccount}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
