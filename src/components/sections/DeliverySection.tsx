import Icon from "@/components/ui/icon";
import { DELIVERY_ITEMS } from "@/data/products";

export default function DeliverySection() {
  return (
    <section id="Доставка" className="bg-white py-20 border-t border-[#e8e6e2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Логистика</p>
          <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Доставка ПЭТ банок по СПб и России</h2>
          <p className="text-[#666] text-base leading-relaxed mt-4 max-w-2xl">
            Доставляем ПЭТ банки и пластиковую тару оптом по Санкт-Петербургу и всей России. Собственный транспорт, надёжные транспортные компании и самовывоз со склада в Ленинградской области.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DELIVERY_ITEMS.map((item) => (
            <div key={item.title} className="p-6 border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-colors group">
              <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary))] transition-colors">
                <Icon name={item.icon} size={18} className="text-[hsl(var(--primary))] group-hover:text-white transition-colors" />
              </div>
              <p className="font-medium text-base uppercase tracking-wide mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>{item.title}</p>
              {item.desc && <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}