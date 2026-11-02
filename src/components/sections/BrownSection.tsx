import { Link } from "@/lib/router-compat";
import Icon from "@/components/ui/icon";
import { PRODUCTS } from "@/data/products";

const isBrown = (color: string) => color.startsWith("коричнев");

const CARDS = [
  {
    to: "/korichnevye-banki",
    icon: "Package",
    title: "Коричневые банки",
    text: "ПЭТ банки 150, 200 и 250 мл с чёрной крышкой для кремов, скрабов и масок.",
    type: "банка",
  },
  {
    to: "/korichnevye-flakony",
    icon: "SprayCan",
    title: "Коричневые флаконы",
    text: "Флаконы 30, 50 и 100 мл с распылителем для парфюмерии, спреев и бытовой химии.",
    type: "флакон",
  },
];

export default function BrownSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Тёмная тара</p>
      <h2 className="font-light text-3xl md:text-4xl uppercase tracking-tight mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
        Коричневые банки и флаконы оптом
      </h2>
      <p className="text-[#666] text-base leading-relaxed mb-8 max-w-2xl">
        Коричневый пластик защищает содержимое от света. Такая тара подходит для натуральной косметики, масел, парфюмерии и тоников.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {CARDS.map((c) => {
          const count = PRODUCTS.filter((p) => p.type === c.type && isBrown(p.color)).length;
          return (
            <Link key={c.to} to={c.to} className="bg-white border border-[#e8e6e2] p-6 hover:border-[hsl(var(--primary))] transition-colors">
              <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
                <Icon name={c.icon} size={18} className="text-[hsl(var(--primary))]" />
              </div>
              <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{c.title}</p>
              <p className="text-sm text-[#666] mb-3">{c.text}</p>
              <span className="text-sm text-[hsl(var(--primary))] inline-flex items-center gap-1">
                Смотреть {count} {count === 1 ? "позицию" : "позиции"} и цены
                <Icon name="ArrowRight" size={14} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
