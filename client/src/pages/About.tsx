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
          <h1 className="text-4xl font-bold mb-8">
            {language === "en" ? "About Quantis Media" : "Quantis Media"}
          </h1>

          <div className="prose prose-lg max-w-none">
            {language === "en" ? (
              <>
                <p>
                  Quantis Media is an independent analytical platform built to help users navigate complex global financial markets through structured, scenario-based research.
                </p>
                <p>
                  We combine algorithmic data processing with disciplined interpretation to summarize market context, identify recurring structural patterns, and publish probabilistic scenarios.
                </p>
                <p>
                  Quantis Media does <strong>not</strong> provide investment advice, trading recommendations, portfolio management, or trade execution. All materials are provided strictly for informational and educational purposes.
                </p>
              </>
            ) : (
              <>
                <p>
                  Quantis Media — независимая аналитическая платформа, созданная для того, чтобы помогать ориентироваться в сложных глобальных финансовых рынках через структурированную сценарную аналитику.
                </p>
                <p>
                  Мы используем алгоритмическую обработку данных и дисциплинированную интерпретацию, чтобы описывать рыночный контекст, выявлять повторяющиеся структурные закономерности и публиковать вероятностные сценарии.
                </p>
                <p>
                  Quantis Media <strong>не</strong> предоставляет инвестиционных рекомендаций, торговых инструкций, услуг по управлению капиталом и не исполняет сделки. Все материалы предоставляются исключительно в информационных и образовательных целях.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
