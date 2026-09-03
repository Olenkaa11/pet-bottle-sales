import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import LandingLayout from "@/components/LandingLayout";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useSeo } from "@/hooks/useSeo";
import { PRODUCTS } from "@/data/products";

const VOLUME_ORDER = ["50 мл", "100 мл", "150 мл", "200 мл", "250 мл", "300 мл", "380 мл", "500 мл"];

const VOLUME_SUMMARY = VOLUME_ORDER.map((volume) => {
  const items = PRODUCTS.filter((p) => p.type === "банка" && p.volume === volume && p.color === "прозрачная");
  const first = items[0];
  if (!first) return null;
  const diameter = first.diameter?.replace("Диаметр горла ", "DIN ") ?? "";
  return { volume, price: first.price, moq: first.moq, diameter };
}).filter(Boolean) as { volume: string; price: string; moq: string; diameter: string }[];

const FAQ_ITEMS = [
  {
    q: "От какого количества можно заказать ПЭТ банки?",
    a: "Минимальная партия зависит от конкретного объёма банки — от 1008 до 1152 шт. Точное количество указано в таблице выше и в карточке товара.",
  },
  {
    q: "Какие крышки есть в комплекте?",
    a: "Банки поставляются с винтовой крышкой белого или чёрного цвета. Можно укомплектовать отсекателем — уточните у менеджера.",
  },
  {
    q: "Для какой продукции подходят ПЭТ банки?",
    a: "Подходят для косметики, бытовой химии, автохимии, сыпучих и других видов продукции.",
  },
  {
    q: "Как оформить заказ на нужный объём?",
    a: "Оставьте заявку с указанием объёма и количества — менеджер проверит наличие и рассчитает стоимость.",
  },
  {
    q: "Доставляете ли банки в другие регионы?",
    a: "Да, отправляем по всей России транспортными компаниями, а также доступен самовывоз со склада в Ленинградской области.",
  },
];

export default function PetBanki() {
  useSeo({
    title: "ПЭТ банки оптом — купить пластиковые банки с крышкой | ПЭТ Тара",
    description:
      "ПЭТ банки оптом от 50 до 500 мл с винтовой крышкой. Прозрачные пластиковые банки для косметики, бытовой химии, автохимии и других продуктов. Цены, характеристики, доставка по России.",
    path: "/pet-banki",
  });

  return (
    <LandingLayout>
      <main className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Каталог</p>
        <h1 className="font-light text-4xl md:text-5xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          ПЭТ банки оптом
        </h1>

        <p className="text-[#333] text-base leading-relaxed mb-4 max-w-3xl">
          ПЭТ банки — прозрачная пластиковая тара из полиэтилентерефталата с винтовой крышкой. Подходят для фасовки косметики, бытовой химии, автохимии, сыпучих и других видов продукции. Поставляем банки объёмом от 50 до 500 мл, партиями от производителя.
        </p>

        <div className="bg-white border border-[#e8e6e2] overflow-x-auto mb-8 mt-8">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-[#e8e6e2] bg-[#f8f7f5]">
                <th className="text-left px-4 py-3 text-xs text-[#999] tracking-widest uppercase font-medium">Объём</th>
                <th className="text-left px-4 py-3 text-xs text-[#999] tracking-widest uppercase font-medium">Горловина</th>
                <th className="text-left px-4 py-3 text-xs text-[#999] tracking-widest uppercase font-medium">Цена</th>
                <th className="text-left px-4 py-3 text-xs text-[#999] tracking-widest uppercase font-medium">Мин. партия</th>
              </tr>
            </thead>
            <tbody>
              {VOLUME_SUMMARY.map((row) => (
                <tr key={row.volume} className="border-b border-[#f0ede8] last:border-0">
                  <td className="px-4 py-3 font-medium">{row.volume}</td>
                  <td className="px-4 py-3 text-[#666]">{row.diameter}</td>
                  <td className="px-4 py-3 text-[hsl(var(--primary))] font-semibold">{row.price}</td>
                  <td className="px-4 py-3 text-[#666]">{row.moq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Palette" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Цвета крышек</p>
            <p className="text-sm text-[#666]">Белая и чёрная винтовая крышка. Для 150 мл доступна коричневая банка.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Package" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Сферы применения</p>
            <p className="text-sm text-[#666]">Косметика, бытовая химия, автохимия, сыпучие и пищевые продукты.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Truck" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Доставка</p>
            <p className="text-sm text-[#666]">По Санкт-Петербургу собственным транспортом, по России — транспортными компаниями. Самовывоз со склада в ЛО.</p>
          </div>
          <div className="bg-white border border-[#e8e6e2] p-6">
            <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
              <Icon name="Boxes" size={18} className="text-[hsl(var(--primary))]" />
            </div>
            <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Минимальная партия</p>
            <p className="text-sm text-[#666]">Зависит от объёма банки — от 1008 шт. Точная цифра указана в таблице.</p>
          </div>
        </div>

        <div className="mb-16">
          <Link
            to="/#Каталог"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            <Icon name="ShoppingCart" size={16} />
            Смотреть все банки в каталоге
          </Link>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Вопросы и ответы</h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        <LeadForm
          title="Нужен определённый объём или количество?"
          description="Отправьте заявку — проверим наличие, рассчитаем стоимость и предложим подходящий вариант."
          presetMessage="Запрос по ПЭТ банкам оптом"
          buttonLabel="Получить оптовый прайс"
        />
      </main>
    </LandingLayout>
  );
}
