import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import MarketInsights from "./pages/MarketInsights";
import MarketInsightDetail from "./pages/MarketInsightDetail";
import SampleIdeas from "./pages/SampleIdeas";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import TradingIdeas from "./pages/TradingIdeas";
import History from "./pages/History";
import TelegramAccess from "./pages/TelegramAccess";
import Admin from "./pages/Admin";
import Legal from "./pages/Legal";
import WTICrudeOil from "./pages/WTICrudeOil";
import MarketInsightsArchive from "./pages/MarketInsightsArchive";
import GoldAnalysis from "./pages/GoldAnalysis";
import SilverAnalysis from "./pages/SilverAnalysis";
import EnergyMetalsCategory from "./pages/EnergyMetalsCategory";
import EnergyCategory from "./pages/EnergyCategory";
import MetalsCategory from "./pages/MetalsCategory";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/market-insights" component={MarketInsights} />
      <Route path="/market-insights/archive" component={MarketInsightsArchive} />
      <Route path="/market-insights/energy-metals" component={EnergyMetalsCategory} />
      <Route path="/market-insights/energy-metals/energy" component={EnergyCategory} />
      <Route path="/market-insights/energy-metals/metals" component={MetalsCategory} />
      <Route path="/market-insights/:id" component={MarketInsightDetail} />
      <Route path="/sample-ideas" component={SampleIdeas} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/trading-ideas" component={TradingIdeas} />
      <Route path="/history" component={History} />
      <Route path="/telegram-access" component={TelegramAccess} />
      <Route path="/admin" component={Admin} />
      <Route path="/legal/:slug" component={Legal} />
      <Route path="/market-insights/energy-metals/wti-crude-oil" component={WTICrudeOil} />
      <Route path="/market-insights/energy-metals/metals/gold" component={GoldAnalysis} />
      <Route path="/market-insights/energy-metals/metals/silver" component={SilverAnalysis} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
