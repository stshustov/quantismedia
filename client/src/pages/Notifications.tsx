import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, MessageSquare, CreditCard, Megaphone } from "lucide-react";


export default function Notifications() {
  const { user, loading, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();


  const [preferences, setPreferences] = useState({
    emailNewScenarios: true,
    emailWeeklyDigest: true,
    emailBilling: true,
    emailMarketing: false,
    telegramAlerts: true,
    telegramCommunity: true,
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user || !["core", "pro", "admin"].includes(user.role))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  const isPro = ["pro", "admin"].includes(user.role);

  const t = {
    title: language === "en" ? "Notification Preferences" : "Настройки уведомлений",
    subtitle: language === "en" 
      ? "Manage how you receive updates from Quantis Media"
      : "Управляйте способами получения обновлений от Quantis Media",
    email: {
      title: language === "en" ? "Email Notifications" : "Email уведомления",
      newScenarios: language === "en" ? "New scenario published" : "Новый сценарий опубликован",
      newScenariosDesc: language === "en" 
        ? "Get notified when we publish new trading scenarios"
        : "Получайте уведомления о публикации новых торговых сценариев",
      weeklyDigest: language === "en" ? "Weekly market digest" : "Еженедельный дайджест",
      weeklyDigestDesc: language === "en" 
        ? "Summary of market insights and scenarios"
        : "Сводка рыночных аналитик и сценариев",
      billing: language === "en" ? "Subscription and billing" : "Подписка и платежи",
      billingDesc: language === "en" 
        ? "Payment confirmations and renewal reminders"
        : "Подтверждения платежей и напоминания о продлении",
      marketing: language === "en" ? "Marketing and promotions" : "Маркетинг и акции",
      marketingDesc: language === "en" 
        ? "Special offers and product updates"
        : "Специальные предложения и обновления продукта",
    },
    telegram: {
      title: language === "en" ? "Telegram Notifications" : "Telegram уведомления",
      alerts: language === "en" ? "Instant scenario alerts" : "Мгновенные уведомления о сценариях",
      alertsDesc: language === "en" 
        ? "Real-time notifications in Telegram channel"
        : "Уведомления в реальном времени в Telegram канале",
      community: language === "en" ? "Community mentions" : "Упоминания в сообществе",
      communityDesc: language === "en" 
        ? "Get notified when someone mentions you (Pro only)"
        : "Получайте уведомления об упоминаниях (только Pro)",
    },
    save: language === "en" ? "Save Preferences" : "Сохранить настройки",
    saved: language === "en" ? "Preferences saved successfully" : "Настройки успешно сохранены",
    backToAccount: language === "en" ? "Back to Account" : "Назад в аккаунт",
  };

  const handleSave = async () => {
    setSaving(true);
    // TODO: Implement tRPC mutation to save preferences
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    alert(t.saved);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>

          {/* Email Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {t.email.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="email-scenarios" className="text-base font-semibold">
                    {t.email.newScenarios}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.email.newScenariosDesc}
                  </p>
                </div>
                <Switch
                  id="email-scenarios"
                  checked={preferences.emailNewScenarios}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, emailNewScenarios: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="email-digest" className="text-base font-semibold">
                    {t.email.weeklyDigest}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.email.weeklyDigestDesc}
                  </p>
                </div>
                <Switch
                  id="email-digest"
                  checked={preferences.emailWeeklyDigest}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, emailWeeklyDigest: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="email-billing" className="text-base font-semibold">
                    {t.email.billing}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.email.billingDesc}
                  </p>
                </div>
                <Switch
                  id="email-billing"
                  checked={preferences.emailBilling}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, emailBilling: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="email-marketing" className="text-base font-semibold">
                    {t.email.marketing}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.email.marketingDesc}
                  </p>
                </div>
                <Switch
                  id="email-marketing"
                  checked={preferences.emailMarketing}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, emailMarketing: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Telegram Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {t.telegram.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="telegram-alerts" className="text-base font-semibold">
                    {t.telegram.alerts}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.telegram.alertsDesc}
                  </p>
                </div>
                <Switch
                  id="telegram-alerts"
                  checked={preferences.telegramAlerts}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, telegramAlerts: checked })
                  }
                />
              </div>

              <div className={`flex items-center justify-between ${!isPro ? "opacity-50" : ""}`}>
                <div className="space-y-0.5 flex-1">
                  <Label htmlFor="telegram-community" className="text-base font-semibold">
                    {t.telegram.community}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t.telegram.communityDesc}
                  </p>
                </div>
                <Switch
                  id="telegram-community"
                  checked={preferences.telegramCommunity}
                  disabled={!isPro}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, telegramCommunity: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (language === "en" ? "Saving..." : "Сохранение...") : t.save}
            </Button>
            <Button variant="outline" onClick={() => setLocation("/account")}>
              {t.backToAccount}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
