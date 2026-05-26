import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: 1,
    name: "Бутылка ПЭТ",
    volume: "0.5 л",
    size: "малая",
    type: "бутылка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 3.20 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/f44cd62b-3e4e-4b62-b90b-4dd3f172bd3a.jpg",
  },
  {
    id: 2,
    name: "Бутылка ПЭТ",
    volume: "1 л",
    size: "средняя",
    type: "бутылка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 4.80 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/f44cd62b-3e4e-4b62-b90b-4dd3f172bd3a.jpg",
  },
  {
    id: 3,
    name: "Бутылка ПЭТ",
    volume: "2 л",
    size: "большая",
    type: "бутылка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 7.50 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/f44cd62b-3e4e-4b62-b90b-4dd3f172bd3a.jpg",
  },
  {
    id: 4,
    name: "Банка ПЭТ",
    volume: "0.5 л",
    size: "малая",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 5.40 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 5,
    name: "Банка ПЭТ",
    volume: "1 л",
    size: "средняя",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 8.20 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 6,
    name: "Канистра ПЭТ",
    volume: "5 л",
    size: "большая",
    type: "канистра",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 22.00 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/fa18f99e-c2d9-44cb-a591-ed32c708954b.jpg",
  },
  {
    id: 7,
    name: "Канистра ПЭТ",
    volume: "10 л",
    size: "большая",
    type: "канистра",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 38.00 ₽",
    moq: "от 50 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/fa18f99e-c2d9-44cb-a591-ed32c708954b.jpg",
  },
  {
    id: 8,
    name: "Банка ПЭТ",
    volume: "3 л",
    size: "большая",
    type: "банка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 15.60 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/c00ebf60-0ef5-4a2e-86c8-76f6f38b2931.jpg",
  },
  {
    id: 9,
    name: "Баночка косметическая",
    volume: "30 мл",
    size: "малая",
    type: "баночка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 1.80 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 10,
    name: "Баночка косметическая",
    volume: "100 мл",
    size: "средняя",
    type: "баночка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 3.50 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 11,
    name: "Баночка косметическая",
    volume: "200 мл",
    size: "большая",
    type: "баночка",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 5.90 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/14c8ee35-6226-4eb8-9fd7-501713a5844c.jpg",
  },
  {
    id: 12,
    name: "Флакон ПЭТ",
    volume: "100 мл",
    size: "малая",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 2.60 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 13,
    name: "Флакон ПЭТ",
    volume: "200 мл",
    size: "средняя",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 4.10 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
  {
    id: 14,
    name: "Флакон ПЭТ",
    volume: "500 мл",
    size: "большая",
    type: "флакон",
    material: "ПЭТ",
    color: "прозрачная",
    price: "от 6.80 ₽",
    moq: "от 100 шт.",
    image: "https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/7a7c3e33-f66a-48dc-99b3-35ccd2d6db04.jpg",
  },
];

const VOLUMES = ["все", "30 мл", "100 мл", "200 мл", "500 мл", "0.5 л", "1 л", "2 л", "3 л", "5 л", "10 л"];
const TYPES = ["все", "бутылка", "банка", "баночка", "флакон", "канистра"];
const SIZES = ["все", "малая", "средняя", "большая"];

const NAV_ITEMS = ["Каталог", "Доставка", "Контакты"];

const DELIVERY_ITEMS = [
  { icon: "Truck", title: "Собственный транспорт", desc: "Доставка по Москве и МО в течение 1–2 рабочих дней" },
  { icon: "Package", title: "Транспортные компании", desc: "Отправка через СДЭК, Деловые Линии, ПЭК по всей России" },
  { icon: "MapPin", title: "Самовывоз", desc: "Со склада в Москве, ул. Промышленная, 12. Пн–Пт 9:00–18:00" },
  { icon: "ShieldCheck", title: "Безопасная упаковка", desc: "Паллетирование, термоусадочная плёнка, маркировка" },
];

type Section = "Каталог" | "Доставка" | "Контакты";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("Каталог");
  const [filterVolume, setFilterVolume] = useState("все");
  const [filterType, setFilterType] = useState("все");
  const [filterSize, setFilterSize] = useState("все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    return (
      (filterVolume === "все" || p.volume === filterVolume) &&
      (filterType === "все" || p.type === filterType) &&
      (filterSize === "все" || p.size === filterSize)
    );
  });

  const scrollTo = (section: Section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a1a1a]">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e6e2]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
            </div>
            <span className="font-semibold text-lg tracking-wide uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item as Section)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item ? "text-[hsl(var(--primary))]" : "text-[#666] hover:text-[#1a1a1a]"
                }`}
              >
                {item}
              </button>
            ))}
            <button className="bg-[hsl(var(--primary))] text-white px-5 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Запросить цены
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#e8e6e2] px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item as Section)}
                className="text-left text-sm py-1 text-[#333]"
              >
                {item}
              </button>
            ))}
            <button className="bg-[hsl(var(--primary))] text-white py-2 text-sm font-medium">
              Запросить цены
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-4">
              Оптовые поставки
            </p>
            <h1 className="font-light text-5xl md:text-7xl leading-none uppercase tracking-tight mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
              Пластиковая<br />
              <span className="font-semibold">ПЭТ тара</span>
            </h1>
            <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-md">
              Бутылки, банки и канистры от производителя. Минимальный заказ — от 100 штук. Доставка по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("Каталог")}
                className="bg-[hsl(var(--primary))] text-white px-8 py-3 font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => scrollTo("Контакты")}
                className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square bg-white rounded-sm overflow-hidden border border-[#e8e6e2]">
              <img
                src="https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/files/f44cd62b-3e4e-4b62-b90b-4dd3f172bd3a.jpg"
                alt="ПЭТ бутылки"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[hsl(var(--primary))] text-white p-4 min-w-32">
              <p className="text-2xl font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>500+</p>
              <p className="text-xs opacity-80 mt-0.5">позиций в наличии</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "15+", label: "лет на рынке" },
            { num: "3 000+", label: "клиентов" },
            { num: "100 шт.", label: "минимальный заказ" },
            { num: "48 ч", label: "срок доставки по МО" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold text-[hsl(var(--primary))]" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</p>
              <p className="text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="Каталог" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Ассортимент</p>
          <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Каталог товаров</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-[#e8e6e2]">
          <div>
            <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Тип</p>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-4 py-1.5 text-sm border transition-colors capitalize ${
                    filterType === t
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Объём</p>
            <div className="flex flex-wrap gap-2">
              {VOLUMES.map((v) => (
                <button
                  key={v}
                  onClick={() => setFilterVolume(v)}
                  className={`px-4 py-1.5 text-sm border transition-colors ${
                    filterVolume === v
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Размер</p>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterSize(s)}
                  className={`px-4 py-1.5 text-sm border transition-colors capitalize ${
                    filterSize === s
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#999]">Товары не найдены. Измените фильтры.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="group bg-white border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-all hover:shadow-md cursor-pointer">
                <div className="aspect-square overflow-hidden bg-[#f8f7f5]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-base uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}</p>
                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-0.5">{p.volume}</span>
                    <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-0.5 capitalize">{p.color}</span>
                  </div>
                  <p className="text-[hsl(var(--primary))] text-lg font-semibold mt-3" style={{ fontFamily: "Oswald, sans-serif" }}>{p.price}</p>
                  <p className="text-[#aaa] text-xs mt-0.5">{p.moq}</p>
                  <button className="mt-3 w-full border border-[#1a1a1a] text-[#1a1a1a] text-xs py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors tracking-wide">
                    Запросить цену
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DELIVERY */}
      <section id="Доставка" className="bg-white py-20 border-t border-[#e8e6e2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Логистика</p>
            <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Доставка</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {DELIVERY_ITEMS.map((item) => (
              <div key={item.title} className="p-6 border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-colors group">
                <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary))] transition-colors">
                  <Icon name={item.icon} size={18} className="text-[hsl(var(--primary))] group-hover:text-white transition-colors" />
                </div>
                <p className="font-medium text-base uppercase tracking-wide mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>{item.title}</p>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f8f7f5] p-8 grid md:grid-cols-3 gap-8">
            {[
              { zone: "Москва и МО", time: "1–2 рабочих дня", price: "от 2 500 ₽" },
              { zone: "Центральный ФО", time: "2–3 рабочих дня", price: "от 4 000 ₽" },
              { zone: "Вся Россия", time: "3–7 рабочих дней", price: "рассчитывается" },
            ].map((z) => (
              <div key={z.zone} className="border-l-2 border-[hsl(var(--primary))] pl-4">
                <p className="font-medium text-base uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{z.zone}</p>
                <p className="text-sm text-[#555]">{z.time}</p>
                <p className="text-sm font-semibold text-[hsl(var(--primary))] mt-1">{z.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="Контакты" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Связь</p>
          <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Контакты</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "Mail", label: "Email", value: "info@pettara.ru" },
              { icon: "MapPin", label: "Адрес склада", value: "Москва, ул. Промышленная, 12" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–18:00" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[hsl(var(--primary))] flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#999] tracking-widest uppercase mb-0.5">{c.label}</p>
                  <p className="text-[#1a1a1a] font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e8e6e2] p-8">
            <h3 className="text-xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Запросить коммерческое предложение</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Телефон или Email</label>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Сообщение</label>
                <textarea
                  rows={3}
                  placeholder="Укажите нужный товар, объём, количество..."
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] resize-none bg-[#f8f7f5]"
                />
              </div>
              <button className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(var(--primary))] flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
            </div>
            <span className="tracking-wide uppercase text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
          </div>
          <p className="text-white/40 text-xs text-center">
            © 2024 ПЭТ Тара. Продажа пластиковой тары оптом по всей России.
          </p>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item as Section)}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}