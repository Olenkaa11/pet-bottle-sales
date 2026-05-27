export type Section = "Каталог" | "Доставка" | "Контакты";

export const NAV_ITEMS = ["Каталог", "Доставка", "Контакты"];

export const VOLUMES = [
  "все",
  "50 мл",
  "100 мл",
  "150 мл",
  "200 мл",
  "250 мл",
  "300 мл",
  "380 мл",
  "500 мл",
];
export const TYPES = ["все", "банка", "флакон", "крышки", "дозаторы"];

export const DELIVERY_ITEMS = [
  {
    icon: "Truck",
    title: "Собственный транспорт",
    desc: "Доставка по Санкт-Петербургу в течение 1–3 рабочих дней",
  },
  {
    icon: "Package",
    title: "Транспортные компании",
    desc: "Отправка через СДЭК, Деловые Линии, ПЭК по всей России",
  },
  {
    icon: "MapPin",
    title: "Самовывоз",
    desc: "Со склада в п. Романовка, Всеволожский район, ЛО",
  },
  {
    icon: "ShieldCheck",
    title: "Безопасная упаковка",
    desc: "Паллетирование, термоусадочная плёнка, маркировка",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Банка ПЭТ 100мл 58 горло",
    volume: "100 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 58",
    price: "17₽",
    moq: "от 1000 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 2,
    name: "Банка ПЭТ",
    volume: "200 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 5.20 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 3,
    name: "Банка ПЭТ",
    volume: "500 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 8.40 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 4,
    name: "Банка ПЭТ",
    volume: "1 л",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 12.00 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 5,
    name: "Флакон ПЭТ",
    volume: "50 мл",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 1.90 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 6,
    name: "Флакон ПЭТ",
    volume: "100 мл",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 2.60 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 7,
    name: "Флакон ПЭТ",
    volume: "200 мл",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 4.10 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 8,
    name: "Флакон ПЭТ",
    volume: "500 мл",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 6.80 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 9,
    name: "Крышка винтовая",
    volume: "30 мл",
    type: "крышки",
    material: "ПЭТ",
    color: "белая",
    price: "от 0.80 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 10,
    name: "Крышка винтовая",
    volume: "50 мл",
    type: "крышки",
    material: "ПЭТ",
    color: "белая",
    price: "от 1.10 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 11,
    name: "Крышка с уплотнителем",
    volume: "100 мл",
    type: "крышки",
    material: "ПЭТ",
    color: "чёрная",
    price: "от 1.50 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 12,
    name: "Дозатор помповый",
    volume: "200 мл",
    type: "дозаторы",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 4.50 ₽",
    moq: "от 200 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 13,
    name: "Дозатор помповый",
    volume: "250 мл",
    type: "дозаторы",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 5.20 ₽",
    moq: "от 200 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 14,
    name: "Дозатор триггерный",
    volume: "500 мл",
    type: "дозаторы",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 7.80 ₽",
    moq: "от 200 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
];
