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
            <h1 className="font-light text-5xl md:text-7xl leading-none uppercase tracking-tight mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>
              Пластиковая<br />
              <span className="font-semibold">ПЭТ тара</span>
            </h1>
            <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-md">
              Тара и комплектующие. Доставка по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onScrollTo("Каталог")}
                className="bg-[hsl(var(--primary))] text-white px-8 py-3 font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => onScrollTo("Контакты")}
                className="border border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square bg-white rounded-sm overflow-hidden border border-[#e8e6e2]">
              <img
                src="https://cdn.poehali.dev/projects/38873114-8b3a-4db4-9d4e-9af29a5b87e8/bucket/e2568b2b-855a-4e67-bbec-2c7f7908e685.jpg"
                alt="ПЭТ баночка"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}