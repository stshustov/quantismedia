import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type AssetClass = "all" | "indices" | "fx" | "energy" | "metals";

export default function TradingIdeas() {
  const { user, isAuthenticated, loading } = useAuth();
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();
  const trackView = trpc.activity.trackScenarioView.useMutation();

  const [selectedAssetClass, setSelectedAssetClass] = useState<AssetClass>("all");
  const [selectedInstrument, setSelectedInstrument] = useState<string>("all");

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["core", "pro", "admin"].includes(user?.role || ""))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  const { data: ideas, isLoading } = trpc.tradingIdeas.getSubscriberIdeas.useQuery(undefined, {
    enabled: isAuthenticated && !!user && ["core", "pro", "admin"].includes(user.role),
  });

  // Track page view when ideas are loaded
  useEffect(() => {
    if (ideas && ideas.length > 0 && isAuthenticated) {
      ideas.forEach((idea) => {
        trackView.mutate({
          scenarioId: idea.id.toString(),
          scenarioTitle: idea.instrument,
        });
      });
    }
  }, [ideas, isAuthenticated]);

  // Filter ideas by asset class
  const filteredByAssetClass = useMemo(() => {
    if (!ideas) return [];
    if (selectedAssetClass === "all") return ideas;
    
    // Group energy and metals together
    if (selectedAssetClass === "energy") {
      return ideas.filter(idea => idea.market === "energy" || idea.market === "metals");
    }
    
    return ideas.filter(idea => idea.market === selectedAssetClass);
  }, [ideas, selectedAssetClass]);

  // Get unique instruments from filtered ideas
  const availableInstruments = useMemo(() => {
    const instruments = filteredByAssetClass.map(idea => idea.instrument);
    return ["all", ...Array.from(new Set(instruments))];
  }, [filteredByAssetClass]);

  // Filter by instrument
  const filteredIdeas = useMemo(() => {
    if (selectedInstrument === "all") return filteredByAssetClass;
    return filteredByAssetClass.filter(idea => idea.instrument === selectedInstrument);
  }, [filteredByAssetClass, selectedInstrument]);

  // Reset instrument filter when asset class changes
  useEffect(() => {
    setSelectedInstrument("all");
  }, [selectedAssetClass]);

  const assetClassLabels = {
    all: language === "en" ? "All" : "Все",
    indices: language === "en" ? "Indices" : "Индексы",
    fx: language === "en" ? "FX" : "Валюты",
    energy: language === "en" ? "Energy & Metals" : "Энергия и металлы",
  };

  const marketLabels = {
    indices: language === "en" ? "Indices" : "Индексы",
    fx: language === "en" ? "FX" : "Валюты",
    energy: language === "en" ? "Energy" : "Энергия",
    metals: language === "en" ? "Metals" : "Металлы",
  };

  if (loading || isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">
            {language === "en" ? "Subscriber Scenarios" : "Сценарии для подписчиков"}
          </h1>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Asset Class Tabs */}
            <Tabs value={selectedAssetClass} onValueChange={(value) => setSelectedAssetClass(value as AssetClass)}>
              <TabsList className="grid w-full grid-cols-4 max-w-2xl">
                <TabsTrigger value="all">{assetClassLabels.all}</TabsTrigger>
                <TabsTrigger value="indices">{assetClassLabels.indices}</TabsTrigger>
                <TabsTrigger value="fx">{assetClassLabels.fx}</TabsTrigger>
                <TabsTrigger value="energy">{assetClassLabels.energy}</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Instrument Dropdown */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-muted-foreground">
                {language === "en" ? "Instrument:" : "Инструмент:"}
              </label>
              <Select value={selectedInstrument} onValueChange={setSelectedInstrument}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder={language === "en" ? "Select instrument" : "Выберите инструмент"} />
                </SelectTrigger>
                <SelectContent>
                  {availableInstruments.map((instrument) => (
                    <SelectItem key={instrument} value={instrument}>
                      {instrument === "all" 
                        ? (language === "en" ? "All instruments" : "Все инструменты")
                        : instrument
                      }
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Scenarios Grid */}
          <div className="grid gap-6">
            {filteredIdeas.length === 0 ? (
              <Card className="border-2">
                <CardContent className="py-12 text-center text-muted-foreground">
                  {language === "en" 
                    ? "No scenarios available for the selected filters." 
                    : "Нет доступных сценариев для выбранных фильтров."}
                </CardContent>
              </Card>
            ) : (
              filteredIdeas.map((idea) => (
                <Card key={idea.id} className="border-2">
                  {/* Card Header Panel - Institutional Format */}
                  <div className="px-6 py-4 border-b bg-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Instrument Name */}
                        <h2 className="text-2xl font-bold">{idea.instrument}</h2>
                        
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-primary/10 text-primary">
                          {marketLabels[idea.market as keyof typeof marketLabels]}
                        </span>
                        
                        {/* PRO Badge */}
                        {idea.accessLevel === "pro" && (
                          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-amber-500/10 text-amber-600">
                            PRO
                          </span>
                        )}
                        
                        {/* Time Horizon - placeholder for now */}
                        <span className="text-sm text-muted-foreground">
                          · 1–5 {language === "en" ? "days" : "дней"}
                        </span>
                        
                        {/* Last Update - placeholder for now */}
                        <span className="text-sm text-muted-foreground">
                          · {language === "en" ? "Updated:" : "Обновлено:"} {new Date().toLocaleDateString(language === "en" ? "en-US" : "ru-RU", { month: "short", day: "numeric" })}
                        </span>
                      </div>
                      
                      {/* Share Buttons - Right Aligned */}
                      <ShareButtons
                        url={`/trading-ideas/${idea.id}`}
                        title={idea.instrument}
                      />
                    </div>
                  </div>

                  {/* Card Content - Aligned Sections */}
                  <CardContent className="p-6">
                    {/* Top-aligned section titles */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          {t.tradingIdea.context}
                        </h3>
                        <p className="text-sm leading-relaxed">{language === "en" ? idea.contextEn : idea.contextRu}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          {t.tradingIdea.scenario}
                        </h3>
                        <p className="text-sm leading-relaxed">{language === "en" ? idea.scenarioEn : idea.scenarioRu}</p>
                      </div>
                    </div>

                    {/* Invalidation & Target - Grid Layout */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          {language === "en" ? "Invalidation reference" : "Инвалидация (ориентир)"}
                        </h3>
                        <p className="text-lg font-mono text-red-600">{idea.invalidationZone}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          {language === "en" ? "Reference area" : "Целевая зона (ориентир)"}
                        </h3>
                        <p className="text-lg font-mono text-green-600">{idea.targetArea}</p>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 pt-6 border-t text-xs text-muted-foreground italic">
                      {language === "en"
                        ? "Important: Scenarios are analytical frameworks for informational purposes only and do not constitute trading advice."
                        : "Важно: сценарии являются аналитическими рамками в информационных целях и не являются торговыми рекомендациями."}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
