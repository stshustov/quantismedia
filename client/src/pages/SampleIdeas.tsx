import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SampleIdeas() {
  const { language } = useLanguage();
  const { data: ideas, isLoading } = trpc.tradingIdeas.getSample.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Sample Trading Ideas</h1>
          {isLoading && <p>Loading...</p>}
          {ideas && ideas.length === 0 && <p>No sample ideas available yet.</p>}
          <div className="grid gap-6">
            {ideas?.map((idea) => (
              <Card key={idea.id}>
                <CardHeader>
                  <CardTitle>{idea.instrument}</CardTitle>
                  <CardDescription>{language === "en" ? idea.contextEn : idea.contextRu}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Invalidation: {idea.invalidationZone}</p>
                  <p className="text-sm text-gray-600">Target: {idea.targetArea}</p>
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
