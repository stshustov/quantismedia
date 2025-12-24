import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">How It Works</h1>
          <p>Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
