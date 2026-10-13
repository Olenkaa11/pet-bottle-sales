import { reachGoal } from "@/lib/metrika";
import Icon from "@/components/ui/icon";
import { Section } from "@/data/products";

interface HeroSectionProps {
  onScrollTo: (section: Section) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-4">
              Оптовые поставки
            </p>
            <h1 className="font-light text-4xl md:text-6xl leading-none uppercase tracking-tight mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
              ПЭТ-банки и <span className="font-semibold">пластиковые флаконы</span> оптом от производителя
            </h1>
            <p className="text-[#666] text-lg leading-relaxed mb-5 max-w-md">
              Поставка тары для косметики, пищевых продуктов и бытовой химии.
            </p>
            <ul className="space-y-2 mb-8 text-[#333]">
              {[
                "Оптовые цены и скидки от объёма",
                "Подбор банок, крышек и дозаторов",
                "Доставка по России и самовывоз",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-[hsl(var(--primary))] shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mb-5">
              <button
                onClick={() => {
                  reachGoal("calc_click");
                  onScrollTo("Контакты");
                }}
                className="bg-[hsl(var(--primary))] text-white px-8 py-3 font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Получить прайс и расчёт
              </button>
              <button
                onClick={() => onScrollTo("Каталог")}
                className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Смотреть каталог
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+79650086038" className="flex items-center gap-2 text-xl font-semibold text-[#1a1a1a] hover:text-[hsl(var(--primary))] transition-colors">
                <Icon name="Phone" size={20} />
                +7 965 008-60-38
              </a>
              <a
                href="https://wa.me/79650086038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <Icon name="MessageCircle" size={14} className="text-white" />
                WhatsApp
              </a>
              <a
                href="https://t.me/+79650086038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#229ED9" }}
              >
                <Icon name="Send" size={14} className="text-white" />
                Telegram
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOLOEViDru2a538ko-XlkvHr8YsNL8P-AZuhH2SqMadqg4epcLQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#0077FF" }}
              >
                <Icon name="MessageCircle" size={14} className="text-white" />
                MAX
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square bg-white rounded-sm overflow-hidden border border-[#e8e6e2]">
              <img
                src="https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/e2568b2b-855a-4e67-bbec-2c7f7908e685.jpg"
                alt="ПЭТ банка — пластиковая тара оптом"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}