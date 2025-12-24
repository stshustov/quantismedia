import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { TrendingUp, BarChart3, MessageSquare, Shield } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/pricing">
                  <a>{t.hero.cta}</a>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/sample-ideas">
                  <a>{t.nav.sampleIdeas}</a>
                </Link>
              </Button>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 text-sm text-blue-100 border border-blue-600/30">
              <Shield className="inline-block h-5 w-5 mr-2 mb-1" />
              {t.hero.disclaimer}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t.features.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{t.features.marketAnalysis}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.features.marketAnalysisDesc}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{t.features.tradingIdeas}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.features.tradingIdeasDesc}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{t.features.telegram}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.features.telegramDesc}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Supported Markets
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold">Indices</h3>
              <p className="text-sm text-gray-600 mt-2">US & Global</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">💱</div>
              <h3 className="font-semibold">FX</h3>
              <p className="text-sm text-gray-600 mt-2">Major Pairs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold">Energy</h3>
              <p className="text-sm text-gray-600 mt-2">Oil, Gas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🥇</div>
              <h3 className="font-semibold">Metals</h3>
              <p className="text-sm text-gray-600 mt-2">Gold, Silver</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose a plan that fits your needs and gain access to professional market intelligence.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/pricing">
              <a>View Pricing Plans</a>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
