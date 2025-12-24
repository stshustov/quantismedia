import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Admin() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 container py-20">
        <h1 className="text-4xl font-bold mb-4">Admin</h1>
        <p className="text-muted-foreground">Page under construction...</p>
      </main>
      <Footer />
    </div>
  );
}
