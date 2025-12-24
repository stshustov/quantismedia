import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, History, MessageSquare } from "lucide-react";
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

  if (!isSubscriber) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Subscription Required</h1>
            <p className="mb-8">Please subscribe to access the dashboard.</p>
            <Link href="/pricing"><a className="text-blue-600 hover:underline">View Pricing</a></Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{t.dashboard.welcome}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/trading-ideas">
              <a>
                <Card className="hover:border-blue-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>{t.dashboard.tradingIdeas}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Access all trading ideas</p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/history">
              <a>
                <Card className="hover:border-blue-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <History className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>{t.dashboard.history}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">View your statistics</p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/telegram">
              <a>
                <Card className="hover:border-blue-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>{t.dashboard.telegram}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Get Telegram access</p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
