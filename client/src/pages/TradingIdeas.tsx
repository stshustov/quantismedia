import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function TradingIdeas() {
  const { user, isAuthenticated, loading } = useAuth();
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["core", "pro", "admin"].includes(user?.role || ""))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  const { data: ideas, isLoading } = trpc.tradingIdeas.getSubscriberIdeas.useQuery(undefined, {
    enabled: isAuthenticated && !!user && ["core", "pro", "admin"].includes(user.role),
  });

  if (loading || isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{t.dashboard.tradingIdeas}</h1>
          
          <div className="grid gap-6">
            {ideas?.map((idea) => (
              <Card key={idea.id} className="border-2">
                <CardHeader>
                  <CardTitle>{idea.instrument}</CardTitle>
                  <p className="text-sm text-gray-500">{idea.market.toUpperCase()}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">{t.tradingIdea.context}</h3>
                    <p className="text-gray-700">{language === "en" ? idea.contextEn : idea.contextRu}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.tradingIdea.scenario}</h3>
                    <p className="text-gray-700">{language === "en" ? idea.scenarioEn : idea.scenarioRu}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{t.tradingIdea.invalidationZone}</h3>
                      <p className="text-red-600 font-mono">{idea.invalidationZone}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{t.tradingIdea.targetArea}</h3>
                      <p className="text-green-600 font-mono">{idea.targetArea}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t text-sm text-gray-600">
                    {t.tradingIdea.disclaimer}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
