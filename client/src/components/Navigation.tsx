import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: language === "en" ? "Home" : "Главная" },
    { href: "/how-it-works", label: language === "en" ? "How It Works" : "Как это работает" },
    { href: "/market-insights", label: language === "en" ? "Market Insights" : "Рыночная аналитика" },
    { href: "/sample-ideas", label: language === "en" ? "Sample Ideas" : "Примеры идей" },
    { href: "/pricing", label: language === "en" ? "Pricing" : "Тарифы" },
    { href: "/about", label: language === "en" ? "About" : "О нас" },
    { href: "/contact", label: language === "en" ? "Contact" : "Контакты" },
  ];

  if (isAuthenticated && user) {
    navLinks.push({ href: "/dashboard", label: language === "en" ? "Dashboard" : "Панель" });
    if (user.role === "admin") {
      navLinks.push({ href: "/admin", label: language === "en" ? "Admin" : "Админ" });
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">Quantis</span>
              <span className="text-2xl font-bold text-primary">Media</span>
            </a>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            {isAuthenticated && user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  {language === "en" ? "Logout" : "Выйти"}
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => (window.location.href = getLoginUrl())}
              >
                {language === "en" ? "Sign In" : "Войти"}
              </Button>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}

              <div className="flex items-center justify-between px-4 py-2 border-t border-border mt-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>

                {isAuthenticated && user ? (
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    {language === "en" ? "Logout" : "Выйти"}
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => {
                      window.location.href = getLoginUrl();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {language === "en" ? "Sign In" : "Войти"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
