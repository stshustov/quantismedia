-- Update Disclaimer page with 4-section structure according to TЗ
UPDATE legalPages 
SET 
  contentEn = '
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Platform Status</h2>
        <p class="text-muted-foreground leading-relaxed">
          Quantis Media is an independent analytical platform. The platform is not an investment advisor, broker, dealer, or asset manager.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">What the Platform Does NOT Do</h2>
        <p class="text-muted-foreground mb-3">Quantis Media:</p>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>does not provide investment recommendations</li>
          <li>does not sell trading signals</li>
          <li>does not execute trades</li>
          <li>does not manage client funds</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Nature of Content</h2>
        <p class="text-muted-foreground leading-relaxed">
          All content published on the platform, including market analysis, research materials, and scenario frameworks, is provided solely for informational and educational purposes.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">User Responsibility</h2>
        <p class="text-muted-foreground leading-relaxed">
          Users independently make all investment and trading decisions and bear full responsibility for their outcomes. Users are encouraged to conduct their own independent research before making any financial decisions.
        </p>
      </section>
    </div>
  ',
  contentRu = '
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Статус платформы</h2>
        <p class="text-muted-foreground leading-relaxed">
          Quantis Media — независимая аналитическая платформа. Платформа не является инвестиционным консультантом, брокером, дилером или управляющим активами.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Что платформа НЕ делает</h2>
        <p class="text-muted-foreground mb-3">Quantis Media:</p>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>не предоставляет инвестиционные рекомендации</li>
          <li>не продаёт торговые сигналы</li>
          <li>не исполняет сделки</li>
          <li>не управляет средствами клиентов</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Характер контента</h2>
        <p class="text-muted-foreground leading-relaxed">
          Весь контент, публикуемый на платформе, включая рыночную аналитику, исследовательские материалы и сценарные рамки, предоставляется исключительно в информационных и образовательных целях.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-foreground">Ответственность пользователя</h2>
        <p class="text-muted-foreground leading-relaxed">
          Пользователи самостоятельно принимают все инвестиционные и торговые решения и несут полную ответственность за их последствия. Пользователям рекомендуется проводить собственные независимые исследования перед принятием любых финансовых решений.
        </p>
      </section>
    </div>
  ',
  updatedAt = NOW()
WHERE pageType = 'disclaimer';

-- Update Risk Disclosure page according to TЗ
UPDATE legalPages 
SET 
  contentEn = '
    <div class="space-y-6">
      <section>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Trading and investing in financial markets involve a high level of risk and may result in partial or total loss of capital. Past performance does not guarantee future results.
        </p>
      </section>

      <section>
        <p class="text-muted-foreground leading-relaxed">
          Market conditions can change rapidly, and no analytical framework can predict all possible outcomes. Users should only invest capital they can afford to lose and should carefully consider their financial situation, risk tolerance, and investment objectives before making any trading or investment decisions.
        </p>
      </section>

      <section>
        <p class="text-muted-foreground leading-relaxed">
          The scenarios, analysis, and research materials provided by Quantis Media are based on historical data, market observations, and analytical frameworks. They do not constitute guarantees of future performance or specific investment outcomes.
        </p>
      </section>
    </div>
  ',
  contentRu = '
    <div class="space-y-6">
      <section>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Торговля и инвестиции на финансовых рынках связаны с высоким уровнем риска и могут привести к частичной или полной потере капитала. Прошлые результаты не гарантируют будущих результатов.
        </p>
      </section>

      <section>
        <p class="text-muted-foreground leading-relaxed">
          Рыночные условия могут быстро меняться, и ни одна аналитическая система не может предсказать все возможные исходы. Пользователям следует инвестировать только тот капитал, который они могут позволить себе потерять, и тщательно оценивать своё финансовое положение, толерантность к риску и инвестиционные цели перед принятием любых торговых или инвестиционных решений.
        </p>
      </section>

      <section>
        <p class="text-muted-foreground leading-relaxed">
          Сценарии, анализ и исследовательские материалы, предоставляемые Quantis Media, основаны на исторических данных, рыночных наблюдениях и аналитических подходах. Они не являются гарантией будущих результатов или конкретных инвестиционных исходов.
        </p>
      </section>
    </div>
  ',
  updatedAt = NOW()
WHERE pageType = 'risk_disclosure';
