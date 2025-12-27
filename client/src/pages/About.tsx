import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-12">
            {language === "en" ? "About Quantis Media" : "О Quantis Media"}
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {language === "en" ? (
              <>
                {/* Intro */}
                <div>
                  <p className="text-lg leading-relaxed">
                    Quantis Media is an independent analytical platform designed to help market participants navigate complex and evolving global financial environments. We focus on structuring market uncertainty through scenario analysis rather than forecasting individual price movements.
                  </p>
                </div>

                {/* How We Approach Markets */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Approach Markets</h2>
                  <p className="text-lg leading-relaxed">
                    We view markets as dynamic systems where liquidity, volatility, and behavioral regimes play a central role. Our analysis is built on identifying recurring structural patterns and assessing the conditions under which a given market regime persists or changes.
                  </p>
                </div>

                {/* Why Scenario Approach */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Why Scenario Approach</h2>
                  <p className="text-lg leading-relaxed">
                    A scenario-based approach allows for more robust decision-making under uncertainty than linear forecasts. Instead of a single expectation, we describe multiple viable scenarios, each with defined confirmation conditions and invalidation boundaries.
                  </p>
                </div>

                {/* What We Don't Do */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">What We Don't Do</h2>
                  <p className="text-lg leading-relaxed">
                    Quantis Media does not provide trading signals, investment advice, or capital management. We provide analytical context — decisions remain with the user.
                  </p>
                </div>

                {/* Who We Work For */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Who We Work For</h2>
                  <p className="text-lg leading-relaxed">
                    The platform is designed for traders, analysts, portfolio managers, and advanced market participants who seek contextual understanding, risk awareness, and adaptability to changing market conditions.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Intro */}
                <div>
                  <p className="text-lg leading-relaxed">
                    Quantis Media — независимая аналитическая платформа, созданная для того, чтобы помогать участникам рынка ориентироваться в сложной и меняющейся глобальной финансовой среде. Мы фокусируемся на структурировании рыночной неопределённости через сценарный анализ, а не на прогнозировании отдельных ценовых движений.
                  </p>
                </div>

                {/* How We Approach Markets */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Как мы подходим к рынкам</h2>
                  <p className="text-lg leading-relaxed">
                    Мы рассматриваем рынки как динамичные системы, в которых ключевую роль играют ликвидность, волатильность и поведенческие режимы. Наша аналитика строится на выявлении повторяющихся структурных закономерностей и оценке условий, при которых текущий рыночный режим сохраняется или меняется.
                  </p>
                </div>

                {/* Why Scenario Approach */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Почему сценарный подход</h2>
                  <p className="text-lg leading-relaxed">
                    Сценарный подход позволяет работать с неопределённостью более устойчиво, чем линейные прогнозы. Вместо одного ожидания мы описываем несколько допустимых сценариев, определяя для каждого из них условия подтверждения и границы инвалидирования.
                  </p>
                </div>

                {/* What We Don't Do */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Что мы НЕ делаем</h2>
                  <p className="text-lg leading-relaxed">
                    Quantis Media не предоставляет торговых сигналов, инвестиционных рекомендаций и не управляет капиталом. Мы предоставляем аналитический контекст — решения остаются за пользователем.
                  </p>
                </div>

                {/* Who We Work For */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Для кого мы работаем</h2>
                  <p className="text-lg leading-relaxed">
                    Платформа ориентирована на трейдеров, аналитиков, портфельных управляющих и продвинутых участников рынка, которым важно понимать контекст, управлять риском и адаптироваться к меняющимся рыночным условиям.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
