(() => {
  const ruToEn = {
    "Услуги": "Services",
    "Подход": "Approach",
    "Процесс": "Process",
    "Обсудить проект": "Discuss a project",
    "AI-first разработка": "AI-first development",
    "Создаём цифровые продукты, которые": "We create digital products that",
    "работают за вас": "work for you",
    "Сайты, чат-боты и инструменты для анализа рынков — от идеи до готового продукта. Быстрее, точнее, эффективнее с AI.": "Websites, chatbots, and market analysis tools — from idea to finished product. Faster, smarter, and more effective with AI.",
    "Смотреть услуги": "View services",
    "Понятный план": "A clear plan",
    "✓ Понятный план": "✓ A clear plan",
    "Прозрачные этапы": "Transparent stages",
    "✓ Прозрачные этапы": "✓ Transparent stages",
    "Поддержка после запуска": "Post-launch support",
    "✓ Поддержка после запуска": "✓ Post-launch support",
    "AI ИНДЕКС РЫНКА": "AI MARKET PULSE",
    "Обзор рынка": "Market overview",
    "ЭФИР": "LIVE",
    "Сигнал": "Signal",
    "Рост": "Growth",
    "Уверенность": "Confidence",
    "Тренд": "Trend",
    "AI обновил прогноз": "AI updated the forecast",
    "Только что": "Just now",
    "Чат-бот": "Chatbot",
    "Диалог активен": "Conversation active",
    "Автоматизация": "Automation",
    "Что мы создаём": "What we build",
    "Технологии для": "Technology for",
    "роста бизнеса": "business growth",
    "Соединяем современную разработку и возможности искусственного интеллекта, чтобы решать реальные задачи.": "We combine modern development with AI capabilities to solve real business challenges.",
    "Сайты и веб-сервисы": "Websites and web services",
    "Быстрые, адаптивные и удобные сайты, которые превращают внимание в обращения.": "Fast, responsive, and user-friendly websites that turn attention into inquiries.",
    "Лендинги и сайты-визитки": "Landing pages and portfolio sites",
    "Корпоративные сайты": "Corporate websites",
    "Веб-приложения": "Web applications",
    "Обсудить сайт": "Discuss a website",
    "Обсудить сайт →": "Discuss a website →",
    "AI-чат-боты": "AI chatbots",
    "Умные помощники для поддержки, продаж и автоматизации внутренних процессов.": "Smart assistants for support, sales, and internal process automation.",
    "Telegram-боты": "Telegram bots",
    "Боты для сайта": "Website chatbots",
    "Интеграции с CRM и API": "CRM and API integrations",
    "Обсудить бота": "Discuss a chatbot",
    "Обсудить бота →": "Discuss a chatbot →",
    "Аналитика рынков": "Market analytics",
    "Инструменты, которые собирают данные, находят закономерности и помогают принимать решения.": "Tools that collect data, identify patterns, and support better decisions.",
    "Мониторинг показателей": "Metric monitoring",
    "AI-анализ данных": "AI-powered data analysis",
    "Дашборды и уведомления": "Dashboards and alerts",
    "Обсудить инструмент": "Discuss an analytics tool",
    "Обсудить инструмент →": "Discuss an analytics tool →",
    "Наш подход": "Our approach",
    "AI — не модное слово.": "AI is not a buzzword.",
    "Это преимущество.": "It’s an advantage.",
    "Мы используем AI там, где он действительно ускоряет работу, улучшает продукт и создаёт измеримую ценность.": "We use AI where it truly accelerates work, improves the product, and creates measurable value.",
    "Фокус на задаче": "Task first",
    "Сначала понимаем цель, затем выбираем технологию — не наоборот.": "We understand the goal first, then choose the technology — not the other way around.",
    "Быстрый запуск": "Fast launch",
    "Делаем рабочую версию, проверяем гипотезы и развиваем продукт по фактам.": "We build a working version, test hypotheses, and develop the product based on evidence.",
    "Готовность к росту": "Built to scale",
    "Продумываем структуру так, чтобы решение можно было легко расширять.": "We design the structure so the solution can grow easily.",
    "Как мы работаем": "How we work",
    "От идеи до": "From idea to",
    "запуска": "launch",
    "Разбираемся": "Discovery",
    "Обсуждаем задачу, аудиторию и желаемый результат. Фиксируем приоритеты.": "We discuss the challenge, audience, and desired outcome. Then set priorities.",
    "Проектируем": "Design",
    "Продумываем логику, интерфейс и техническое решение. Показываем направление.": "We map out the logic, interface, and technical solution. Then present the direction.",
    "Создаём": "Build",
    "Разрабатываем, тестируем и показываем промежуточный результат по этапам.": "We develop, test, and share progress at each stage.",
    "Запускаем": "Launch",
    "Публикуем продукт, передаём материалы и остаёмся на связи после запуска.": "We publish the product, hand over the materials, and stay in touch after launch.",
    "Есть идея?": "Have an idea?",
    "Давайте превратим её": "Let’s turn it",
    "в": "into a",
    "работающий продукт": "working product",
    "Коротко расскажите о задаче — обсудим цели, формат и следующий шаг.": "Briefly tell us about your project — we’ll discuss the goals, format, and next step.",
    "Сайты · Чат-боты · Аналитика рынков": "Websites · Chatbots · Market analytics"
  };

  const ariaRuToEn = {
    "WebDevAi — на главную": "WebDevAi — home",
    "Открыть меню": "Open menu",
    "Основная навигация": "Main navigation",
    "Выбор языка": "Language selector",
    "Пример AI-инструмента для анализа рынка": "Example AI market analysis tool",
    "Восходящий график рыночного тренда": "Upward market trend chart"
  };

  const enToRu = Object.fromEntries(Object.entries(ruToEn).map(([ru, en]) => [en, ru]));
  const ariaEnToRu = Object.fromEntries(Object.entries(ariaRuToEn).map(([ru, en]) => [en, ru]));
  const meta = {
    ru: {
      title: "WebDevAi — сайты, чат-боты и AI-аналитика",
      description: "WebDevAi — разработка сайтов, чат-ботов и инструментов для анализа рынков с использованием AI."
    },
    en: {
      title: "WebDevAi — websites, chatbots and AI analytics",
      description: "WebDevAi develops websites, chatbots and AI-powered tools for market analysis."
    }
  };

  function replaceTextNode(node, language) {
    const raw = node.nodeValue;
    const value = raw.trim();
    if (!value) return;
    const translated = language === "en" ? ruToEn[value] : enToRu[value];
    if (translated) node.nodeValue = raw.replace(value, translated);
  }

  function applyLanguage(language, remember = true) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentElement?.tagName;
        return tag === "SCRIPT" || tag === "STYLE" ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => replaceTextNode(node, language));

    const attributeMap = language === "en" ? ariaRuToEn : ariaEnToRu;
    document.querySelectorAll("[aria-label]").forEach((element) => {
      const current = element.getAttribute("aria-label");
      if (current && attributeMap[current]) element.setAttribute("aria-label", attributeMap[current]);
    });

    document.documentElement.lang = language;
    document.title = meta[language].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta[language].description);
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-language") === language));
    });
    if (remember) {
      try { localStorage.setItem("webdevai-language", language); } catch (_) {}
    }
  }

  function init() {
    let language = "ru";
    try {
      const saved = localStorage.getItem("webdevai-language");
      if (saved === "ru" || saved === "en") language = saved;
    } catch (_) {}
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.getAttribute("data-language")));
    });
    applyLanguage(language, false);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
