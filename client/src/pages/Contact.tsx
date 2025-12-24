import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>
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
              <Input value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div>
              <label className="block mb-2 font-medium">{t.contact.message}</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} />
            </div>
            <Button type="submit" disabled={submitMutation.isPending}>
              {submitMutation.isPending ? t.common.loading : t.contact.send}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
