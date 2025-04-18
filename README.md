# Озеро Михайлына - Официальный веб-сайт

Официальный веб-сайт для "Озеро Михайлына" - места комфортного отдыха и рыбалки. Проект разработан с использованием современных веб-технологий для обеспечения отличного пользовательского опыта.

## Технологический стек

- **Frontend**: React.js, Next.js
- **Стили**: TailwindCSS, CSS Modules
- **Анимации**: Framer Motion
- **PWA**: Service Worker и Web App Manifest
- **Backend**: Node.js + TypeScript (Express)
- **База данных**: MongoDB
- **Аутентификация**: JWT (access + refresh tokens)
- **CI/CD**: GitHub Actions

## Особенности

- Полностью респонсивный дизайн для всех устройств
- SEO-оптимизированная структура с SSR (Server-Side Rendering)
- Трехъязычная поддержка (русский, украинский, английский)
- Интерактивная карта озера с информацией о рыбалке
- Онлайн-бронирование и галерея
- Административная панель для управления контентом

## Настройка разработки

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Z-oobastik-s/Kosyan-Sergey.git
   cd Kosyan-Sergey
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите в режиме разработки:
   ```bash
   npm run dev
   ```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## Структура проекта

```
src/
├── components/       # React компоненты
├── pages/            # Страницы Next.js
├── styles/           # CSS и стили
├── lib/              # Утилиты и вспомогательные функции
├── public/           # Статичные файлы
│   ├── images/       # Изображения
│   ├── locales/      # Файлы локализации
│   └── icons/        # Иконки и favicon
└── types/            # TypeScript типы
```

## Безопасность

- OWASP Top 10 защита
- Dependabot для автоматического обновления зависимостей
- GitHub Actions для сканирования секретов
- CSP и HTTP-security заголовки
- CORS настройка

## Лицензия

© Озеро Михайлына 2021-2025. Все права защищены. 