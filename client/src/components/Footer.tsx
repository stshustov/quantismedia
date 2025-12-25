import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background text-muted-foreground py-12 mt-auto border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-3">Quantis Media</h3>
            <p className="text-sm font-semibold text-primary mb-3">
              {t.footer.definitionLine}
            </p>
            <p className="text-sm leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.nav.home}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works">
                  <a className="hover:text-foreground transition-colors">{t.nav.howItWorks}</a>
                </Link>
              </li>
              <li>
                <Link href="/market-insights">
                  <a className="hover:text-foreground transition-colors">{t.nav.marketInsights}</a>
                </Link>
              </li>
              <li>
                <Link href="/sample-ideas">
                  <a className="hover:text-foreground transition-colors">{t.nav.sampleIdeas}</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="hover:text-foreground transition-colors">{t.nav.pricing}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-foreground transition-colors">{t.nav.about}</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-foreground transition-colors">{t.nav.contact}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.nav.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/disclaimer">
                  <a className="hover:text-foreground transition-colors">{t.legal.disclaimer}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/risk_disclosure">
                  <a className="hover:text-foreground transition-colors">{t.legal.riskDisclosure}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/terms">
                  <a className="hover:text-foreground transition-colors">{t.legal.terms}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy">
                  <a className="hover:text-foreground transition-colors">{t.legal.privacy}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie">
                  <a className="hover:text-foreground transition-colors">{t.legal.cookie}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; Quantis Media, Republic of Moldova</p>
          <p className="mt-2 text-xs opacity-70">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
