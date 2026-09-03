import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQ_ITEMS = [
  {
    q: "От какого количества можно заказать?",
    a: "Минимальная партия зависит от конкретной позиции. В карточке товара указано минимальное количество для заказа.",
  },
  {
    q: "Можно ли заказать несколько разных позиций?",
    a: "Да, напишите менеджеру, какие позиции и количества вам нужны — подготовим расчёт.",
  },
  {
    q: "Можно ли получить образец?",
    a: "Уточните возможность получения образца у менеджера.",
  },
  {
    q: "Доставляете ли вы в другие города?",
    a: "Да, отправляем заказы по России транспортными компаниями.",
  },
  {
    q: "Можно ли забрать товар самостоятельно?",
    a: "Да, доступен самовывоз со склада в Ленинградской области.",
  },
  {
    q: "Как узнать стоимость доставки?",
    a: "Напишите город и количество товара — рассчитаем стоимость доставки.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="FAQ" className="bg-white py-20 border-t border-[#e8e6e2]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Вопросы и ответы</p>
          <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="divide-y divide-[#e8e6e2] border-t border-b border-[#e8e6e2]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-base md:text-lg" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {item.q}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`shrink-0 text-[hsl(var(--primary))] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="text-[#666] text-sm leading-relaxed pb-5 pr-8">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}