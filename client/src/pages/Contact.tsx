import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Contact() {
  const { language, t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success(t.contact.success);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({ name, email, subject, message });
  };

  const inquiryTypes = language === "en" ? [
    "Access to analytics and subscriptions",
    "Research and analytical inquiries",
    "Partnerships and collaborations",
    "Product and methodology questions"
  ] : [
    "Доступ к аналитике и подписке",
    "Исследовательские и аналитические запросы",
    "Партнёрства и коллаборации",
    "Вопросы по продукту и методологии"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {language === "en"
              ? "We welcome professional inquiries, partnerships, and questions related to Quantis Media analytics."
              : "Мы открыты к профессиональным обращениям, партнёрствам и вопросам, связанным с аналитикой Quantis Media."}
          </p>

          {/* Inquiry Types Block */}
          <div className="mb-12 p-6 bg-card border border-border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {language === "en"
                ? "You may contact us regarding:"
                : "Вы можете связаться с нами по следующим вопросам:"}
            </h2>
            <div className="space-y-3">
              {inquiryTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">{t.contact.name}</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-2 font-medium">{t.contact.email}</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-2 font-medium">{t.contact.subject}</label>
              <Input 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                placeholder={language === "en" 
                  ? "For example: Partnership inquiry / Research access"
                  : "Например: Partnership inquiry / Research access"}
                required 
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">{t.contact.message}</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} />
            </div>
            <Button type="submit" disabled={submitMutation.isPending}>
              {submitMutation.isPending ? t.common.loading : t.contact.send}
            </Button>
          </form>

          {/* Response Expectations Note */}
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            {language === "en"
              ? "We review all inquiries, with priority given to analytics-related, partnership, and professional use cases."
              : "Мы рассматриваем все обращения, однако отвечаем в первую очередь на запросы, связанные с аналитикой, партнёрствами и профессиональным использованием платформы."}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
