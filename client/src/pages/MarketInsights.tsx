import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function MarketInsights() {
  const { language } = useLanguage();
  const { data: insights, isLoading } = trpc.marketInsights.getPublished.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Market Insights</h1>
          {isLoading && <p>Loading...</p>}
          <div className="grid gap-6">
            {insights?.map((insight) => (
              <Card key={insight.id}>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/market-insights/${language === "en" ? insight.slugEn : insight.slugRu}`}>
                      <a className="hover:text-blue-600">
                        {language === "en" ? insight.titleEn : insight.titleRu}
                      </a>
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {language === "en" ? insight.excerptEn : insight.excerptRu}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
