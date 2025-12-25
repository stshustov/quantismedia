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
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Sample Market Scenarios" : "Примеры рыночных сценариев"}
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            {language === "en"
              ? "A short preview of how Quantis Media structures market context into scenario frameworks. No trading instructions are provided."
              : "Короткий пример того, как Quantis Media структурирует рыночный контекст в сценарные рамки. Торговые инструкции не предоставляются."}
          </p>

          {isLoading && <p>{language === "en" ? "Loading..." : "Загрузка..."}</p>}

          <div className="grid md:grid-cols-2 gap-6">
            {ideas?.map((idea) => (
              <Card key={idea.id} className="border-2">
                <CardHeader>
                  <CardTitle>{idea.instrument}</CardTitle>
                  <CardDescription className="uppercase tracking-wide">
                    {idea.market}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">
                      {language === "en" ? "Context" : "Контекст"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? idea.contextEn : idea.contextRu}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">
                      {language === "en" ? "Scenario framework" : "Сценарная рамка"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? idea.scenarioEn : idea.scenarioRu}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-xs font-semibold mb-1">
                        {language === "en" ? "Invalidation reference" : "Инвалидация (ориентир)"}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {idea.invalidationZone}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-1">
                        {language === "en" ? "Reference area" : "Целевая зона (ориентир)"}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {idea.targetArea}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    {language === "en"
                      ? "Important: This is an analytical scenario preview for informational purposes only and does not constitute trading advice."
                      : "Важно: это пример аналитического сценария в информационных целях и не является торговой рекомендацией."}
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
