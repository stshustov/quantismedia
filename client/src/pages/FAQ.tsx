import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import faqData from "../data/faq.json";

export default function FAQ() {
  const { language } = useLanguage();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, itemId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(itemId);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            {faqData.page.title[language]}
          </h1>
          <p className="text-lg text-muted-foreground">
            {faqData.page.subtitle[language]}
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqData.sections.map((section: any) => (
            <div key={section.id}>
              {/* Section Title */}
              <h2 className="mb-6 text-2xl font-semibold text-foreground border-b border-border pb-3">
                {section.title[language]}
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {section.items.map((item: any) => {
                  const isOpen = openItem === item.id;

                  return (
                    <div
                      key={item.id}
                      className="rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
                    >
                      {/* Question Header (always visible) */}
                      <button
                        onClick={() => toggleItem(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, item.id)}
                        className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                      >
                        <div className="flex-1">
                          {/* Question */}
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">
                            {item.q[language]}
                          </h3>

                          {/* Short Answer (always visible) */}
                          <p className="text-sm text-muted-foreground">
                            {item.a_short[language]}
                          </p>
                        </div>

                        {/* Chevron Icon */}
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Full Answer (expandable) */}
                      {isOpen && (
                        <div
                          id={`faq-answer-${item.id}`}
                          className="px-6 pb-4 text-muted-foreground animate-in fade-in-0 slide-in-from-top-2 duration-200"
                        >
                          <div className="pt-2 border-t border-border/50">
                            {item.a_full[language]}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 rounded-lg bg-muted/30 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            {language === "ru"
              ? "Остались вопросы? Свяжитесь с нами через Telegram или email."
              : "Have more questions? Contact us via Telegram or email."}
          </p>
        </div>
      </div>
    </div>
  );
}
