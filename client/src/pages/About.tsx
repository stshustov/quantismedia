import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">About Quantis Media</h1>
          <div className="prose prose-lg">
            <p>
              {language === "en" 
                ? "Quantis Media is an independent market intelligence platform providing subscription-based access to market research, analytical insights, and scenario-based trading ideas for informational and educational purposes only."
                : "Quantis Media — независимая аналитическая платформа, предоставляющая доступ по подписке к рыночным обзорам, исследовательским материалам и сценарным торговым идеям в информационных и образовательных целях."}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
