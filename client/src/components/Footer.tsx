import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quantis Media</h3>
            <p className="text-sm leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.home}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works">
                  <a className="hover:text-white">{t.nav.howItWorks}</a>
                </Link>
              </li>
              <li>
                <Link href="/market-insights">
                  <a className="hover:text-white">{t.nav.marketInsights}</a>
                </Link>
              </li>
              <li>
                <Link href="/sample-ideas">
                  <a className="hover:text-white">{t.nav.sampleIdeas}</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="hover:text-white">{t.nav.pricing}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-white">{t.nav.about}</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white">{t.nav.contact}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/disclaimer">
                  <a className="hover:text-white">{t.legal.disclaimer}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/risk_disclosure">
                  <a className="hover:text-white">{t.legal.riskDisclosure}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/terms">
                  <a className="hover:text-white">{t.legal.terms}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy">
                  <a className="hover:text-white">{t.legal.privacy}</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie">
                  <a className="hover:text-white">{t.legal.cookie}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 text-xs text-gray-500">
            Republic of Moldova | quantismedia.io
          </p>
        </div>
      </div>
    </footer>
  );
}
