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
          
          <Card>
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Telegram Channel Access" : "Доступ к Telegram-каналам"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {access?.inviteLink ? (
                <>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === "en" ? "Your Invite Link:" : "Ваша ссылка-приглашение:"}
                    </h3>
                    <code className="block bg-gray-100 p-3 rounded break-all">
                      {access.inviteLink}
                    </code>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === "en" ? "Available Channels:" : "Доступные каналы:"}
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {JSON.parse(access.channelAccess || "[]").map((channel: string) => (
                        <li key={channel} className="capitalize">{channel}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="mb-4">
                    {language === "en" 
                      ? "Generate your Telegram invite link to access market channels."
                      : "Создайте ссылку-приглашение для доступа к рыночным каналам."}
                  </p>
                  <Button onClick={() => generateMutation.mutate()} disabled={generateMutation.isPending}>
                    {generateMutation.isPending ? t.common.loading : (language === "en" ? "Generate Invite Link" : "Создать ссылку")}
                  </Button>
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
