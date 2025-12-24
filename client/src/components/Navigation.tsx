import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoutMutation = trpc.auth.logout.useMutation();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    window.location.href = "/";
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  const isSubscriber = user && ["core", "pro", "admin"].includes(user.role);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Quantis Media
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.home}</a>
            </Link>
            <Link href="/how-it-works">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.howItWorks}</a>
            </Link>
            <Link href="/market-insights">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.marketInsights}</a>
            </Link>
            <Link href="/sample-ideas">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.sampleIdeas}</a>
            </Link>
            <Link href="/pricing">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.pricing}</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.about}</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-blue-600">{t.nav.contact}</a>
            </Link>
            
            {isSubscriber && (
              <Link href="/dashboard">
                <a className="text-gray-700 hover:text-blue-600 font-medium">{t.nav.dashboard}</a>
              </Link>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>

            {/* Auth Actions */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {user?.name || user?.email || "User"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {isSubscriber && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <a className="w-full">{t.nav.dashboard}</a>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {user?.role === "admin" && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">
                        <a className="w-full">Admin Panel</a>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    {t.nav.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild size="sm">
                <a href={getLoginUrl()}>{t.nav.login}</a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link href="/">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.home}</a>
            </Link>
            <Link href="/how-it-works">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.howItWorks}</a>
            </Link>
            <Link href="/market-insights">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.marketInsights}</a>
            </Link>
            <Link href="/sample-ideas">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.sampleIdeas}</a>
            </Link>
            <Link href="/pricing">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.pricing}</a>
            </Link>
            <Link href="/about">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.about}</a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 text-gray-700 hover:text-blue-600">{t.nav.contact}</a>
            </Link>
            
            {isSubscriber && (
              <Link href="/dashboard">
                <a className="block py-2 text-gray-700 hover:text-blue-600 font-medium">{t.nav.dashboard}</a>
              </Link>
            )}

            <div className="pt-4 border-t space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full justify-start"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>

              {isAuthenticated ? (
                <>
                  <div className="text-sm text-gray-600 px-2">
                    {user?.name || user?.email}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full"
                  >
                    {t.nav.logout}
                  </Button>
                </>
              ) : (
                <Button asChild size="sm" className="w-full">
                  <a href={getLoginUrl()}>{t.nav.login}</a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
