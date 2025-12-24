import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "wouter";
import { trpc } from "@/lib/trpc";

export default function MarketInsightDetail() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  
  const { data: insight, isLoading } = trpc.marketInsights.getBySlug.useQuery({ slug, language });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {isLoading && <p>Loading...</p>}
          {insight && (
            <>
              <h1 className="text-4xl font-bold mb-8">
                {language === "en" ? insight.titleEn : insight.titleRu}
              </h1>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ 
                  __html: language === "en" ? insight.contentEn : insight.contentRu 
                }} />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
