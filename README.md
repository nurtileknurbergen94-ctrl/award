# AWARD — официальный сайт

Премиальный многостраничный сайт компании AWARD: индивидуальные награды, кубки, медали, сувениры, 3D-моделирование, 3D-печать и гальваническое покрытие.

## Стек

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

Откройте `http://localhost:5173` — язык по умолчанию: русский (`/ru`). Казахская версия: `/kk`.

## Контакты (централизованно)

Файл `src/data/contacts.ts`:

- Instagram: [@award.kz](https://www.instagram.com/award.kz/)
- WhatsApp: +7 775 341 0289
- Телефон: +7 701 333 3253

## Что подключить вручную

1. Реальные фотографии выполненных работ вместо демонстрационных референсов в `public/references/` и `src/data/products.ts`.
2. Backend для хранения заявок и загруженных файлов (сейчас заявка формируется и открывается в WhatsApp).
3. Домен и хостинг; обновите `public/sitemap.xml` и canonical URL при необходимости.
4. При желании — аналитику (например, Google Analytics / Яндекс.Метрика).
