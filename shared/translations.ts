import { Language } from "./types";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    howItWorks: string;
    marketInsights: string;
    sampleIdeas: string;
    pricing: string;
    about: string;
    legal: string;
    contact: string;
    dashboard: string;
    login: string;
    logout: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    disclaimer: string;
  };
  
  // Features
  features: {
    title: string;
    marketAnalysis: string;
    marketAnalysisDesc: string;
    tradingIdeas: string;
    tradingIdeasDesc: string;
    telegram: string;
    telegramDesc: string;
  };
  
  // Pricing
  pricing: {
    title: string;
    monthly: string;
    yearly: string;
    free: string;
    core: string;
    pro: string;
    subscribe: string;
    currentPlan: string;
  };
  
  // Footer
  footer: {
    definitionLine: string;
    disclaimer: string;
    copyright: string;
  };
  
  // Dashboard
  dashboard: {
    welcome: string;
    tradingIdeas: string;
    history: string;
    telegram: string;
    stats: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    publish: string;
    draft: string;
    readMore: string;
    backToList: string;
  };
  
  // Legal
  legal: {
    disclaimer: string;
    riskDisclosure: string;
    terms: string;
    privacy: string;
    cookie: string;
    acceptTerms: string;
    mustAcceptTerms: string;
  };
  
  // Trading Ideas
  tradingIdea: {
    instrument: string;
    context: string;
    scenario: string;
    invalidationZone: string;
    targetArea: string;
    market: string;
    publishedAt: string;
    disclaimer: string;
  };
  
  // Contact
  contact: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    success: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      marketInsights: "Market Insights",
      sampleIdeas: "Sample Ideas",
      pricing: "Pricing",
      about: "About",
      legal: "Legal",
      contact: "Contact",
      dashboard: "Dashboard",
      login: "Login",
      logout: "Logout",
    },
    hero: {
      title: "Independent Market Intelligence Platform",
      subtitle: "Access algorithmically-assisted market analysis and scenario-based trading ideas for informational and educational purposes.",
      cta: "Get Started",
      disclaimer: "All content is provided strictly for informational and educational purposes only. Quantis Media does not provide trading signals or investment advice.",
    },
    features: {
      title: "What We Offer",
      marketAnalysis: "Market Analysis",
      marketAnalysisDesc: "In-depth market research and analytical insights across indices, FX, energy, and metals.",
      tradingIdeas: "Trading Ideas",
      tradingIdeasDesc: "Scenario-based trading ideas with clear context, invalidation zones, and target areas.",
      telegram: "Telegram Delivery",
      telegramDesc: "Receive market updates directly in private Telegram channels organized by market.",
    },
    pricing: {
      title: "Choose Your Plan",
      monthly: "Monthly",
      yearly: "Yearly",
      free: "Free",
      core: "Core",
      pro: "Pro",
      subscribe: "Subscribe",
      currentPlan: "Current Plan",
    },
    footer: {
      definitionLine: "Comprehensive research and scenario analysis of global markets",
      disclaimer: "Quantis Media is an independent market intelligence platform providing subscription-based access to market research, analytical insights, and scenario-based trading ideas for informational and educational purposes only.",
      copyright: "© Quantis Media, Republic of Moldova",
    },
    dashboard: {
      welcome: "Welcome to Your Dashboard",
      tradingIdeas: "Trading Ideas",
      history: "History & Statistics",
      telegram: "Telegram Access",
      stats: "Your Statistics",
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      publish: "Publish",
      draft: "Draft",
      readMore: "Read More",
      backToList: "Back to List",
    },
    legal: {
      disclaimer: "Disclaimer",
      riskDisclosure: "Risk Disclosure",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy",
      acceptTerms: "I accept the Terms of Service and Risk Disclosure",
      mustAcceptTerms: "You must accept the terms to continue",
    },
    tradingIdea: {
      instrument: "Instrument",
      context: "Market Context",
      scenario: "Scenario",
      invalidationZone: "Invalidation Zone",
      targetArea: "Target Area",
      market: "Market",
      publishedAt: "Published",
      disclaimer: "This content is provided for informational purposes only and does not constitute investment advice.",
    },
    contact: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      howItWorks: "Как это работает",
      marketInsights: "Рыночная аналитика",
      sampleIdeas: "Примеры идей",
      pricing: "Тарифы",
      about: "О нас",
      legal: "Правовая информация",
      contact: "Контакты",
      dashboard: "Панель управления",
      login: "Войти",
      logout: "Выйти",
    },
    hero: {
      title: "Независимая аналитическая платформа",
      subtitle: "Доступ к алгоритмически поддержанной рыночной аналитике и сценарным торговым идеям в информационных и образовательных целях.",
      cta: "Начать",
      disclaimer: "Весь контент предоставляется исключительно в информационных и образовательных целях. Quantis Media не предоставляет торговых сигналов или инвестиционных рекомендаций.",
    },
    features: {
      title: "Что мы предлагаем",
      marketAnalysis: "Рыночная аналитика",
      marketAnalysisDesc: "Глубокие рыночные исследования и аналитические материалы по индексам, валютам, энергоносителям и металлам.",
      tradingIdeas: "Торговые идеи",
      tradingIdeasDesc: "Сценарные торговые идеи с четким контекстом, зонами инвалидации и целевыми областями.",
      telegram: "Доставка в Telegram",
      telegramDesc: "Получайте рыночные обновления напрямую в приватных Telegram-каналах, организованных по рынкам.",
    },
    pricing: {
      title: "Выберите тариф",
      monthly: "Месячный",
      yearly: "Годовой",
      free: "Бесплатный",
      core: "Базовый",
      pro: "Профессиональный",
      subscribe: "Подписаться",
      currentPlan: "Текущий тариф",
    },
    footer: {
      definitionLine: "Комплексные исследования и сценарный анализ глобальных рынков",
      disclaimer: "Quantis Media — независимая аналитическая платформа, предоставляющая доступ по подписке к рыночным обзорам, исследовательским материалам и сценарным торговым идеям в информационных и образовательных целях.",
      copyright: "© Quantis Media, Republic of Moldova",
    },
    dashboard: {
      welcome: "Добро пожаловать в вашу панель управления",
      tradingIdeas: "Торговые идеи",
      history: "История и статистика",
      telegram: "Доступ к Telegram",
      stats: "Ваша статистика",
    },
    common: {
      loading: "Загрузка...",
      error: "Произошла ошибка",
      save: "Сохранить",
      cancel: "Отмена",
      delete: "Удалить",
      edit: "Редактировать",
      publish: "Опубликовать",
      draft: "Черновик",
      readMore: "Читать далее",
      backToList: "Вернуться к списку",
    },
    legal: {
      disclaimer: "Дисклеймер",
      riskDisclosure: "Раскрытие рисков",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      cookie: "Политика использования файлов cookie",
      acceptTerms: "Я принимаю Условия использования и Раскрытие рисков",
      mustAcceptTerms: "Вы должны принять условия для продолжения",
    },
    tradingIdea: {
      instrument: "Инструмент",
      context: "Рыночный контекст",
      scenario: "Сценарий",
      invalidationZone: "Зона инвалидации",
      targetArea: "Целевая зона",
      market: "Рынок",
      publishedAt: "Опубликовано",
      disclaimer: "Информация носит информационный характер и не является инвестиционной рекомендацией.",
    },
    contact: {
      title: "Связаться с нами",
      name: "Имя",
      email: "Email",
      subject: "Тема",
      message: "Сообщение",
      send: "Отправить сообщение",
      success: "Сообщение успешно отправлено!",
    },
  },
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
