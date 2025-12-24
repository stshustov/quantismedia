import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "wouter";
import { trpc } from "@/lib/trpc";

export default function Legal() {
  const { language } = useLanguage();
  const params = useParams();
  const pageType = (params.type as any) || "disclaimer";
  
  const { data: page, isLoading } = trpc.legal.getPage.useQuery({ pageType });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {isLoading && <p>Loading...</p>}
          {page && (
            <>
              <h1 className="text-4xl font-bold mb-8">
                {language === "en" ? page.titleEn : page.titleRu}
              </h1>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ 
                  __html: language === "en" ? page.contentEn : page.contentRu 
                }} />
              </div>
            </>
          )}
          {!page && !isLoading && <p>Legal page not found. Please contact administrator.</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
