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
    desc: "",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Банка ПЭТ 50мл , черная крышка",
    volume: "50 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 58",
    price: "17₽",
    moq: "от 1000 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/6faa7c65-0719-43a1-9c88-0e07b79434db.jpg",
  },
  {
    id: 2,
    name: "Банка ПЭТ 50мл, белая крышка",
    volume: "50 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 58",
    price: "17₽",
    moq: "от 1000 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/f2357306-9a28-4ac9-8be4-c4d46095c72d.jpg",
  },
  {
    id: 2,
    name: "Банка ПЭТ 100мл, черная крышка",
    volume: "100 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 58",
    price: "от 5.20 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/7bd16adf-e483-4d10-bed2-54ea212ffcf6.jpg",
  },
  {
    id: 3,
    name: "Банка ПЭТ 100мл, белая крышка",
    volume: "100 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 58",
    price: "от 5.20 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/cafce77c-24ad-462b-a4cd-b61a4e35ec3b.jpg",
  },
  {
    id: 4,
    name: "Банка ПЭТ 150мл, черная крышка",
    volume: "150 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 89",
    price: "от 8.40 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/0a0c782c-eabe-48ff-93dd-f2bb8fff8b12.jpg",
  },
  {
    id: 4,
    name: "Банка ПЭТ 150мл, белая крышка",
    volume: "150 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 89",
    price: "от 8.40 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/e9c3fc4d-ab04-4062-b77d-f0cce6ca4699.jpg",
  },
  {
    id: 5,
    name: "Банка ПЭТ 200мл, черная крышка",
    volume: "200мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    diameter: "Диаметр горла 89",
    price: "от 12.00 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/41f6afff-a673-4032-9639-9f8fdd18a083.jpg",
  },
  {
    id: 6,
    name: "Банка ПЭТ 250мл 89 горло",
    volume: "250мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 1.90 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 7,
    name: "Банка ПЭТ 300мл 89 горло",
    volume: "300 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 2.60 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 8,
    name: "Банка ПЭТ 380мл 89 горло",
    volume: "380 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 4.10 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 9,
    name: "Банка ПЭТ 500мл 89 горло",
    volume: "500 мл",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 6.80 ₽",
    moq: "от 100 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 10,
    name: "Крышка винтовая 89 диаметр",
    volume: "",
    type: "крышки",
    material: "ПЭТ",
    color: "белая матовая",
    price: "от 0.80 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 11,
    name: "Крышка винтовая 89 диаметр",
    volume: "",
    type: "крышки",
    material: "ПЭТ",
    color: "черная матовая",
    price: "от 1.10 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 12,
    name: "Крышка винтовая 58 диаметр",
    volume: "",
    type: "крышки",
    material: "ПЭТ",
    color: "чёрная матовая",
    price: "от 1.50 ₽",
    moq: "от 500 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 13,
    name: "Крышка винтовая 58 диаметр",
    volume: "",
    type: "крышки",
    material: "ПЭТ",
    color: "белая матовая",
    price: "от 4.50 ₽",
    moq: "от 200 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 14,
    name: "Крышка винтовая 89 диаметр",
    volume: "",
    type: "крышки",
    material: "ПЭТ",
    color: "прозрачная матовая",
    price: "от 5.20 ₽",
    moq: "от 200 шт.",
    image:
      "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
];