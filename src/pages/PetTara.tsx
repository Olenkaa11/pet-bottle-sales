import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import LandingLayout from "@/components/LandingLayout";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useSeo } from "@/hooks/useSeo";

const CATEGORIES = [
  {
    icon: "Package",
    title: "ПЭТ банки оптом",
    desc: "Прозрачные банки с винтовой крышкой от 50 до 500 мл — для косметики, бытовой химии и сыпучих продуктов.",
    link: "/pet-banki",
    linkLabel: "Смотреть банки и цены",
  },
  {
    icon: "SprayCan",
    title: "ПЭТ флаконы оптом",
    desc: "Флаконы с распылителем-спреем от 30 до 100 мл — для косметики, парфюмерии и бытовой химии.",
    link: "/pet-flakony",
    linkLabel: "Смотреть флаконы и цены",
  },
];

const FAQ_ITEMS = [
  {
    q: "Что входит в понятие ПЭТ тара?",
    a: "ПЭТ тара — это пластиковая упаковка из полиэтилентерефталата: банки с винтовой крышкой и флаконы с распылителем. Материал прочный, прозрачный и безопасный для контакта с продукцией.",
  },
  {
    q: "Где купить ПЭТ тару оптом в СПб?",
    a: "Поставляем ПЭТ тару оптом со склада в Ленинградской области с доставкой по Санкт-Петербургу и всей России, а также самовывозом.",
  },
  {
    q: "Подходит ли ПЭТ упаковка для косметики и бытовой химии?",
    a: "Да, ПЭТ тара широко используется для фасовки косметики, бытовой химии, автохимии, сыпучих и других видов продукции.",
  },
  {
    q: "От какого количества можно купить ПЭТ тару?",
    a: "Минимальная партия зависит от конкретной позиции — от 1000 шт. Точное количество указано в карточке товара.",
  },
  {
    q: "Как рассчитать стоимость заказа?",
    a: "Оставьте заявку с указанием объёма, типа тары и количества — менеджер проверит наличие и рассчитает стоимость.",
  },
];

export default function PetTara() {
  useSeo({
    title: "ПЭТ тара оптом — банки и флаконы | ПЭТ Тара",
    description:
      "ПЭТ тара оптом и в розницу: банки и флаконы для косметики и бытовой химии. ПЭТ упаковка от производителя со склада в СПб, доставка по России. Купить ПЭТ тару по выгодным ценам.",
    path: "/pet-tara",
  });

  return (
    <LandingLayout>
      <main className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Каталог</p>
        <h1 className="font-light text-4xl md:text-5xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          ПЭТ тара оптом
        </h1>

        <p className="text-[#333] text-base leading-relaxed mb-4 max-w-3xl">
          ПЭТ тара — пластиковая упаковка из полиэтилентерефталата: банки и флаконы для фасовки продукции. Купить ПЭТ тару оптом можно со склада в Ленинградской области с доставкой по Санкт-Петербургу и всей России.
        </p>
        <p className="text-[#333] text-base leading-relaxed mb-10 max-w-3xl">
          ПЭТ упаковка подходит для косметики, бытовой химии, автохимии, пищевой продукции, сыпучих и других видов товаров. В ассортименте — банки с винтовой крышкой и флаконы с распылителем разных объёмов и цветов.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-white border border-[#e8e6e2] p-6 flex flex-col">
              <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
                <Icon name={cat.icon} size={18} className="text-[hsl(var(--primary))]" />
              </div>
              <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{cat.title}</p>
              <p className="text-sm text-[#666] mb-4 flex-1">{cat.desc}</p>
              <Link
                to={cat.link}
                className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--primary))] font-medium hover:underline underline-offset-2"
              >
                {cat.linkLabel}
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Sparkles" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ тара для косметики</p>
            <p className="text-sm text-[#666]">Банки и флаконы для кремов, масел, скрабов и других косметических средств.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Droplet" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ тара для бытовой химии</p>
            <p className="text-sm text-[#666]">Прочная упаковка для чистящих и моющих средств, автохимии и других жидких продуктов.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="MapPin" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ тара в СПб</p>
            <p className="text-sm text-[#666]">Собственный склад в Ленинградской области, доставка по Санкт-Петербургу за 1–3 дня, самовывоз.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Truck" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Доставка по России</p>
            <p className="text-sm text-[#666]">Отправляем заказы транспортными компаниями в любой регион страны.</p>
          </div>
        </div>

        <div className="mb-16">
          <Link
            to="/#Каталог"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            <Icon name="ShoppingCart" size={16} />
            Смотреть весь каталог
          </Link>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Вопросы и ответы</h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        <LeadForm
          title="Нужна ПЭТ тара под вашу задачу?"
          description="Отправьте заявку — подберём подходящую тару, проверим наличие и рассчитаем стоимость."
          presetMessage="Запрос по ПЭТ таре оптом"
          buttonLabel="Получить оптовый прайс"
        />
      </main>
    </LandingLayout>
  );
}
