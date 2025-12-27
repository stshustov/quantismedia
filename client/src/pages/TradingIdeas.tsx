import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { scenarios, type AssetClass, type ScenarioStatus, getRelativeTime } from "@/data/scenarios";
import { ArrowRight } from "lucide-react";

type AssetClassFilter = "all" | AssetClass;

export default function TradingIdeas() {
  const { user, isAuthenticated, loading } = useAuth();
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  const [selectedAssetClass, setSelectedAssetClass] = useState<AssetClassFilter>("all");
  const [selectedInstrument, setSelectedInstrument] = useState<string>("all");

  useEffect(() => {
    if (!loading && (!isAuthenticated || !["core", "pro", "admin"].includes(user?.role || ""))) {
      setLocation("/");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  // Filter scenarios by asset class
  const filteredByAssetClass = useMemo(() => {
    if (selectedAssetClass === "all") return scenarios;
    
    // Group energy and metals together
    if (selectedAssetClass === "energy") {
      return scenarios.filter(s => s.assetClass === "energy" || s.assetClass === "metals");
    }
    
    return scenarios.filter(s => s.assetClass === selectedAssetClass);
  }, [selectedAssetClass]);

  // Get unique instruments from filtered scenarios
  const availableInstruments = useMemo(() => {
    const instruments = filteredByAssetClass.map(s => s.instrument);
    return ["all", ...Array.from(new Set(instruments))];
  }, [filteredByAssetClass]);

  // Filter by instrument
  const filteredScenarios = useMemo(() => {
    if (selectedInstrument === "all") return filteredByAssetClass;
    return filteredByAssetClass.filter(s => s.instrument === selectedInstrument);
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

  const assetClassDisplayLabels = {
    indices: language === "en" ? "Indices" : "Индексы",
    fx: language === "en" ? "FX" : "Валюты",
    energy: language === "en" ? "Energy" : "Энергия",
    metals: language === "en" ? "Metals" : "Металлы",
  };

  const statusLabels: Record<ScenarioStatus, { en: string; ru: string; color: string }> = {
    active: {
      en: "Active",
      ru: "Активен",
      color: "bg-green-500/10 text-green-600"
    },
    monitoring: {
      en: "Monitoring",
      ru: "На наблюдении",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    invalidated: {
      en: "Invalidated",
      ru: "Инвалидирован",
      color: "bg-gray-500/10 text-gray-600"
    },
    completed: {
      en: "Completed",
      ru: "Завершён",
      color: "bg-gray-500/10 text-gray-500"
    }
  };

  if (loading) return <div>Loading...</div>;

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
            <Tabs value={selectedAssetClass} onValueChange={(value) => setSelectedAssetClass(value as AssetClassFilter)}>
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
            {filteredScenarios.length === 0 ? (
              <Card className="border-2">
                <CardContent className="py-12 text-center text-muted-foreground">
                  {language === "en" 
                    ? "No scenarios available for the selected filters." 
                    : "Нет доступных сценариев для выбранных фильтров."}
                </CardContent>
              </Card>
            ) : (
              filteredScenarios.map((scenario) => (
                <Card key={scenario.id} className="border-2">
                  {/* Card Header Panel - Institutional Format */}
                  <div className="px-6 py-4 border-b bg-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-wrap">
                        {/* Instrument Name */}
                        <h2 className="text-2xl font-bold">{scenario.instrument}</h2>
                        
                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-primary/10 text-primary">
                          {assetClassDisplayLabels[scenario.assetClass]}
                        </span>
                        
                        {/* Status Badge */}
                        <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${statusLabels[scenario.status].color}`}>
                          {language === "en" ? statusLabels[scenario.status].en : statusLabels[scenario.status].ru}
                        </span>
                        
                        {/* Time Horizon */}
                        <span className="text-sm text-muted-foreground">
                          · {scenario.timeHorizon}
                        </span>
                        
                        {/* Last Update */}
                        <span className="text-sm text-muted-foreground">
                          · {language === "en" ? "Last update:" : "Обновлено:"} {getRelativeTime(scenario.lastUpdatedAt, language)}
                        </span>
                      </div>
                      
                      {/* Share Buttons - Right Aligned */}
                      <ShareButtons
                        url={scenario.fullAnalysisUrl}
                        title={scenario.instrument}
                      />
                    </div>
                  </div>

                  {/* Card Content - Preview Format */}
                  <CardContent className="p-6">
                    {/* Market Context & Base Scenario - Side by Side */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          {language === "en" ? "Market Context" : "Рыночный контекст"}
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {language === "en" ? scenario.marketContextEn : scenario.marketContextRu}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          {language === "en" ? "Base Scenario" : "Базовый сценарий"}
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {language === "en" ? scenario.baseScenarioEn : scenario.baseScenarioRu}
                        </p>
                      </div>
                    </div>

                    {/* Invalidation & Target - Grid Layout */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          {language === "en" ? "Invalidation (reference)" : "Инвалидация (ориентир)"}
                        </h3>
                        <p className="text-lg font-mono text-red-600">{scenario.invalidationLevel}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                          {language === "en" ? "Target Zone (reference)" : "Целевая зона (ориентир)"}
                        </h3>
                        <p className="text-lg font-mono text-green-600">{scenario.targetZone}</p>
                      </div>
                    </div>

                    {/* CTA Button - Read Full Analysis */}
                    <div className="mt-6 pt-6 border-t">
                      <Button
                        onClick={() => setLocation(scenario.fullAnalysisUrl)}
                        className="w-full sm:w-auto"
                        size="lg"
                      >
                        {language === "en" ? "Read Full Market Insight" : "Читать полный анализ"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
