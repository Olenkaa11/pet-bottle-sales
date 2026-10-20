import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import LandingLayout from "@/components/LandingLayout";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useSeo } from "@/hooks/useSeo";
import { COLOR_PAGES, ColorPageConfig } from "@/data/colorPages";
import { CATALOG, productPath } from "@/lib/productSlug";

export default function ColorCatalogPage({ page }: { page: ColorPageConfig }) {
  useSeo({ title: page.seoTitle, description: page.seoDescription, path: page.path });
  const items = CATALOG.filter((p) => p.type === page.type && p.color.startsWith("коричнев"));
  const others = COLOR_PAGES.filter((c) => c.path !== page.path);

  return (
    <LandingLayout>
      <main className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">{page.eyebrow}</p>
        <h1 className="font-light text-4xl md:text-5xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          {page.h1}
        </h1>
        <p className="text-[#333] text-base leading-relaxed mb-10 max-w-3xl">{page.intro}</p>

        <h2 className="text-2xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>Цены и наличие</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {items.map((p) => (
            <Link key={p.slug} to={productPath(p.slug)} className="group bg-white border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-colors">
              <div className="aspect-square bg-[#f8f7f5] flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="font-medium text-sm uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}</p>
                <p className="text-[hsl(var(--primary))] text-lg font-semibold mt-2" style={{ fontFamily: "Oswald, sans-serif" }}>{p.price}</p>
                <p className="text-[#999] text-xs mt-0.5">{p.moq}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {page.benefits.map((b) => (
            <div key={b.title} className="bg-white border border-[#e8e6e2] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
                <Icon name={b.icon} size={18} className="text-[hsl(var(--primary))]" />
              </div>
              <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{b.title}</p>
              <p className="text-sm text-[#666]">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Вопросы и ответы</h2>
          <FaqAccordion items={page.faq} />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>Смотрите также</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.path} to={o.path} className="border border-[#ddd] px-4 py-2 text-sm text-[#333] hover:border-[#1a1a1a] transition-colors">{o.h1}</Link>
            ))}
            <Link to="/pet-banki" className="border border-[#ddd] px-4 py-2 text-sm text-[#333] hover:border-[#1a1a1a] transition-colors">ПЭТ банки оптом</Link>
            <Link to="/pet-flakony" className="border border-[#ddd] px-4 py-2 text-sm text-[#333] hover:border-[#1a1a1a] transition-colors">ПЭТ флаконы оптом</Link>
          </div>
        </div>

        <LeadForm
          title="Нужен расчёт партии?"
          description="Отправьте заявку, проверим наличие и рассчитаем стоимость с доставкой."
          presetMessage={page.leadMessage}
          buttonLabel="Получить оптовый прайс"
        />
      </main>
    </LandingLayout>
  );
}
