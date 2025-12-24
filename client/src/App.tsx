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
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import TradingIdeas from "./pages/TradingIdeas";
import History from "./pages/History";
import TelegramAccess from "./pages/TelegramAccess";
import AdminPanel from "./pages/AdminPanel";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/market-insights" component={MarketInsights} />
      <Route path="/market-insights/:slug" component={MarketInsightDetail} />
      <Route path="/sample-ideas" component={SampleIdeas} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/legal" component={Legal} />
      <Route path="/legal/:type" component={Legal} />
      <Route path="/contact" component={Contact} />
      
      {/* Private Pages (Subscribers) */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/trading-ideas" component={TradingIdeas} />
      <Route path="/history" component={History} />
      <Route path="/telegram" component={TelegramAccess} />
      
      {/* Admin Pages */}
      <Route path="/admin" component={AdminPanel} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
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
