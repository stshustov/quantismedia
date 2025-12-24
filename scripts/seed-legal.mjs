import { drizzle } from "drizzle-orm/mysql2";
import { legalPages } from "../drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const legalContent = [
  {
    pageType: "disclaimer",
    titleEn: "Disclaimer",
    titleRu: "Дисклеймер",
    contentEn: `
      <h2>Important Notice</h2>
      <p>Quantis Media is an independent market intelligence platform. The platform does not:</p>
      <ul>
        <li>Provide investment advice</li>
        <li>Sell trading signals</li>
        <li>Execute trades</li>
        <li>Manage client funds</li>
      </ul>
      <p>All content published on this platform, including market insights, analytical research, and scenario-based trading ideas, is provided strictly for informational and educational purposes only.</p>
      <p>Users are solely responsible for their own trading decisions and should conduct their own independent research before making any investment decisions.</p>
    `,
    contentRu: `
      <h2>Важное уведомление</h2>
      <p>Quantis Media — независимая аналитическая платформа. Платформа не:</p>
      <ul>
        <li>Предоставляет инвестиционные рекомендации</li>
        <li>Продаёт торговые сигналы</li>
        <li>Исполняет сделки</li>
        <li>Управляет средствами клиентов</li>
      </ul>
      <p>Весь контент, публикуемый на данной платформе, включая рыночную аналитику, исследовательские материалы и сценарные торговые идеи, предоставляется исключительно в информационных и образовательных целях.</p>
      <p>Пользователи несут полную ответственность за свои торговые решения и должны проводить собственные независимые исследования перед принятием любых инвестиционных решений.</p>
    `,
    version: 1,
    effectiveDate: new Date("2024-01-01"),
  },
  {
    pageType: "risk_disclosure",
    titleEn: "Risk Disclosure",
    titleRu: "Раскрытие рисков",
    contentEn: `
      <h2>Trading Risk Disclosure</h2>
      <p><strong>Trading financial instruments involves substantial risk and may not be suitable for all investors.</strong></p>
      
      <h3>Key Risks Include:</h3>
      <ul>
        <li><strong>Market Risk:</strong> Prices can move against your position, resulting in losses that may exceed your initial investment.</li>
        <li><strong>Leverage Risk:</strong> Using leverage amplifies both potential gains and losses.</li>
        <li><strong>Volatility Risk:</strong> Markets can be highly volatile, especially during economic events.</li>
        <li><strong>Liquidity Risk:</strong> Some instruments may be difficult to buy or sell at desired prices.</li>
      </ul>
      
      <h3>Important Considerations:</h3>
      <p>Past performance is not indicative of future results. No trading system or methodology has ever been developed that can guarantee profits or prevent losses.</p>
      <p>You should carefully consider your financial situation, investment objectives, and risk tolerance before engaging in any trading activity.</p>
      
      <h3>Quantis Media's Role:</h3>
      <p>Quantis Media provides market research and educational content only. We do not provide personalized investment advice, recommendations, or manage trading accounts. All trading decisions are made independently by users at their own risk.</p>
    `,
    contentRu: `
      <h2>Раскрытие торговых рисков</h2>
      <p><strong>Торговля финансовыми инструментами связана со значительным риском и может не подходить для всех инвесторов.</strong></p>
      
      <h3>Основные риски включают:</h3>
      <ul>
        <li><strong>Рыночный риск:</strong> Цены могут двигаться против вашей позиции, что приведёт к убыткам, которые могут превысить ваши первоначальные инвестиции.</li>
        <li><strong>Риск кредитного плеча:</strong> Использование кредитного плеча усиливает как потенциальную прибыль, так и убытки.</li>
        <li><strong>Риск волатильности:</strong> Рынки могут быть крайне волатильными, особенно во время экономических событий.</li>
        <li><strong>Риск ликвидности:</strong> Некоторые инструменты может быть сложно купить или продать по желаемым ценам.</li>
      </ul>
      
      <h3>Важные соображения:</h3>
      <p>Прошлые результаты не являются показателем будущих результатов. Не существует торговой системы или методологии, которая могла бы гарантировать прибыль или предотвратить убытки.</p>
      <p>Вы должны тщательно оценить своё финансовое положение, инвестиционные цели и толерантность к риску перед началом любой торговой деятельности.</p>
      
      <h3>Роль Quantis Media:</h3>
      <p>Quantis Media предоставляет только рыночные исследования и образовательный контент. Мы не предоставляем персонализированных инвестиционных рекомендаций и не управляем торговыми счетами. Все торговые решения принимаются пользователями самостоятельно на их собственный риск.</p>
    `,
    version: 1,
    effectiveDate: new Date("2024-01-01"),
  },
  {
    pageType: "terms",
    titleEn: "Terms of Service",
    titleRu: "Условия использования",
    contentEn: `
      <h2>Terms of Service</h2>
      <p><strong>Last Updated: January 1, 2024</strong></p>
      
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using Quantis Media, you accept and agree to be bound by these Terms of Service.</p>
      
      <h3>2. Service Description</h3>
      <p>Quantis Media provides subscription-based access to market research, analytical insights, and scenario-based trading ideas for informational and educational purposes only.</p>
      
      <h3>3. User Obligations</h3>
      <ul>
        <li>You must be at least 18 years old to use this service.</li>
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>You agree not to share your subscription access with others.</li>
        <li>You acknowledge that all trading decisions are made independently at your own risk.</li>
      </ul>
      
      <h3>4. Subscription and Payment</h3>
      <ul>
        <li>Subscriptions are billed on a recurring basis (monthly or yearly).</li>
        <li>You may cancel your subscription at any time.</li>
        <li>Refunds are subject to our refund policy.</li>
      </ul>
      
      <h3>5. Intellectual Property</h3>
      <p>All content on Quantis Media is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.</p>
      
      <h3>6. Limitation of Liability</h3>
      <p>Quantis Media shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the service or reliance on any content provided.</p>
      
      <h3>7. Governing Law</h3>
      <p>These terms are governed by the laws of the Republic of Moldova.</p>
    `,
    contentRu: `
      <h2>Условия использования</h2>
      <p><strong>Последнее обновление: 1 января 2024</strong></p>
      
      <h3>1. Принятие условий</h3>
      <p>Получая доступ к Quantis Media и используя платформу, вы принимаете и соглашаетесь соблюдать настоящие Условия использования.</p>
      
      <h3>2. Описание услуги</h3>
      <p>Quantis Media предоставляет доступ по подписке к рыночным исследованиям, аналитическим материалам и сценарным торговым идеям исключительно в информационных и образовательных целях.</p>
      
      <h3>3. Обязанности пользователя</h3>
      <ul>
        <li>Вам должно быть не менее 18 лет для использования данной услуги.</li>
        <li>Вы несёте ответственность за сохранение конфиденциальности вашей учётной записи.</li>
        <li>Вы соглашаетесь не передавать доступ к своей подписке другим лицам.</li>
        <li>Вы признаёте, что все торговые решения принимаются самостоятельно на ваш собственный риск.</li>
      </ul>
      
      <h3>4. Подписка и оплата</h3>
      <ul>
        <li>Подписки оплачиваются на регулярной основе (ежемесячно или ежегодно).</li>
        <li>Вы можете отменить подписку в любое время.</li>
        <li>Возврат средств осуществляется в соответствии с нашей политикой возврата.</li>
      </ul>
      
      <h3>5. Интеллектуальная собственность</h3>
      <p>Весь контент на Quantis Media защищён авторским правом и другими законами об интеллектуальной собственности. Вы не можете воспроизводить, распространять или создавать производные работы без разрешения.</p>
      
      <h3>6. Ограничение ответственности</h3>
      <p>Quantis Media не несёт ответственности за любые прямые, косвенные, случайные или последующие убытки, возникающие в результате использования услуги или доверия к любому предоставленному контенту.</p>
      
      <h3>7. Применимое право</h3>
      <p>Настоящие условия регулируются законодательством Республики Молдова.</p>
    `,
    version: 1,
    effectiveDate: new Date("2024-01-01"),
  },
  {
    pageType: "privacy",
    titleEn: "Privacy Policy",
    titleRu: "Политика конфиденциальности",
    contentEn: `
      <h2>Privacy Policy</h2>
      <p><strong>Last Updated: January 1, 2024</strong></p>
      
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, login credentials</li>
        <li><strong>Payment Information:</strong> Processed securely through third-party payment processors</li>
        <li><strong>Usage Data:</strong> Pages visited, features used, interaction patterns</li>
      </ul>
      
      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To process your subscription and payments</li>
        <li>To send you service-related communications</li>
        <li>To improve our platform and user experience</li>
      </ul>
      
      <h3>3. Data Security</h3>
      <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
      
      <h3>4. Third-Party Services</h3>
      <p>We use third-party services for payment processing and analytics. These services have their own privacy policies governing the use of your information.</p>
      
      <h3>5. Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
      
      <h3>6. Contact Us</h3>
      <p>For privacy-related questions, please contact us through our contact form.</p>
    `,
    contentRu: `
      <h2>Политика конфиденциальности</h2>
      <p><strong>Последнее обновление: 1 января 2024</strong></p>
      
      <h3>1. Информация, которую мы собираем</h3>
      <ul>
        <li><strong>Информация об учётной записи:</strong> Имя, адрес электронной почты, учётные данные для входа</li>
        <li><strong>Платёжная информация:</strong> Обрабатывается безопасно через сторонние платёжные системы</li>
        <li><strong>Данные об использовании:</strong> Посещённые страницы, используемые функции, шаблоны взаимодействия</li>
      </ul>
      
      <h3>2. Как мы используем вашу информацию</h3>
      <ul>
        <li>Для предоставления и поддержания нашей услуги</li>
        <li>Для обработки вашей подписки и платежей</li>
        <li>Для отправки вам сообщений, связанных с услугой</li>
        <li>Для улучшения нашей платформы и пользовательского опыта</li>
      </ul>
      
      <h3>3. Безопасность данных</h3>
      <p>Мы применяем соответствующие технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
      
      <h3>4. Сторонние сервисы</h3>
      <p>Мы используем сторонние сервисы для обработки платежей и аналитики. У этих сервисов есть собственные политики конфиденциальности, регулирующие использование вашей информации.</p>
      
      <h3>5. Ваши права</h3>
      <p>Вы имеете право на доступ, исправление или удаление ваших персональных данных. Свяжитесь с нами для реализации этих прав.</p>
      
      <h3>6. Свяжитесь с нами</h3>
      <p>По вопросам конфиденциальности, пожалуйста, свяжитесь с нами через нашу контактную форму.</p>
    `,
    version: 1,
    effectiveDate: new Date("2024-01-01"),
  },
  {
    pageType: "cookie",
    titleEn: "Cookie Policy",
    titleRu: "Политика использования файлов cookie",
    contentEn: `
      <h2>Cookie Policy</h2>
      <p><strong>Last Updated: January 1, 2024</strong></p>
      
      <h3>What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience.</p>
      
      <h3>Types of Cookies We Use</h3>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., authentication, security)</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences (e.g., language selection)</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
      </ul>
      
      <h3>Managing Cookies</h3>
      <p>You can control and delete cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
      
      <h3>Third-Party Cookies</h3>
      <p>Some cookies are placed by third-party services that appear on our pages, such as analytics providers.</p>
    `,
    contentRu: `
      <h2>Политика использования файлов cookie</h2>
      <p><strong>Последнее обновление: 1 января 2024</strong></p>
      
      <h3>Что такое файлы cookie?</h3>
      <p>Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении нашего веб-сайта. Они помогают нам обеспечить вам лучший опыт использования.</p>
      
      <h3>Типы файлов cookie, которые мы используем</h3>
      <ul>
        <li><strong>Необходимые файлы cookie:</strong> Требуются для правильной работы веб-сайта (например, аутентификация, безопасность)</li>
        <li><strong>Функциональные файлы cookie:</strong> Запоминают ваши предпочтения (например, выбор языка)</li>
        <li><strong>Аналитические файлы cookie:</strong> Помогают нам понять, как посетители используют наш веб-сайт</li>
      </ul>
      
      <h3>Управление файлами cookie</h3>
      <p>Вы можете контролировать и удалять файлы cookie через настройки вашего браузера. Однако отключение определённых файлов cookie может повлиять на функциональность нашего веб-сайта.</p>
      
      <h3>Сторонние файлы cookie</h3>
      <p>Некоторые файлы cookie размещаются сторонними сервисами, которые появляются на наших страницах, такими как провайдеры аналитики.</p>
    `,
    version: 1,
    effectiveDate: new Date("2024-01-01"),
  },
];

async function seedLegalPages() {
  console.log("Seeding legal pages...");
  
  for (const page of legalContent) {
    try {
      await db.insert(legalPages).values(page).onDuplicateKeyUpdate({
        set: {
          titleEn: page.titleEn,
          titleRu: page.titleRu,
          contentEn: page.contentEn,
          contentRu: page.contentRu,
          version: page.version,
          effectiveDate: page.effectiveDate,
          updatedAt: new Date(),
        },
      });
      console.log(`✓ Seeded ${page.pageType}`);
    } catch (error) {
      console.error(`✗ Failed to seed ${page.pageType}:`, error);
    }
  }
  
  console.log("Legal pages seeding completed!");
  process.exit(0);
}

seedLegalPages().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
