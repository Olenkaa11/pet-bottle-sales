import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import LandingLayout from "@/components/LandingLayout";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useSeo } from "@/hooks/useSeo";
import { PRODUCTS, DELIVERY_ITEMS } from "@/data/products";
import { GroupConfig, GROUPS } from "@/data/groups";

const th = "text-left px-4 py-3 text-xs text-[#999] tracking-widest uppercase font-medium";

function JarsTable({ volumes }: { volumes: string[] }) {
  const rows = PRODUCTS.filter((p) => p.type === "банка" && volumes.includes(p.volume));
  const byKey = new Map<string, (typeof rows)[number]>();
  rows.forEach((p) => {
    const key = `${p.volume}|${p.color}`;
    if (!byKey.has(key)) byKey.set(key, p);
  });
  const list = Array.from(byKey.values());
  return (
    <div className="bg-white border border-[#e8e6e2] overflow-x-auto mb-8">
      <table className="w-full text-sm min-w-[720px]">
        <thead>
          <tr className="border-b border-[#e8e6e2] bg-[#f8f7f5]">
            <th className={th}>Объём</th>
            <th className={th}>Материал</th>
            <th className={th}>Цвет</th>
            <th className={th}>Горло</th>
            <th className={th}>Крышка</th>
            <th className={th}>Цена за шт.</th>
            <th className={th}>Мин. партия</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p) => (
            <tr key={`${p.volume}-${p.color}`} className="border-b border-[#f0ede8] last:border-0">
              <td className="px-4 py-3 font-medium">{p.volume}</td>
              <td className="px-4 py-3 text-[#666]">{p.material}</td>
              <td className="px-4 py-3 text-[#666] capitalize">{p.color}</td>
              <td className="px-4 py-3 text-[#666]">{p.diameter?.replace("Диаметр горла ", "")} мм</td>
              <td className="px-4 py-3 text-[#666]">{p.color === "коричневая" ? "по запросу" : "чёрная или белая"}</td>
              <td className="px-4 py-3 text-[hsl(var(--primary))] font-semibold">{p.price.replace(/\s/g, " ")}</td>
              <td className="px-4 py-3 text-[#666]">{p.moq}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompatibilityTable() {
  const map = new Map<string, { type: string; volumes: Set<string> }>();
  PRODUCTS.forEach((p) => {
    const neck = p.diameter?.replace("Диаметр горла ", "").replace("Горловина ", "");
    if (!neck) return;
    const key = p.type === "банка" ? `${neck} мм` : neck;
    const e = map.get(key) ?? { type: p.type, volumes: new Set<string>() };
    e.volumes.add(p.volume);
    map.set(key, e);
  });
  const order = (v: string) => parseInt(v, 10);
  const rows = Array.from(map.entries()).map(([neck, e]) => ({
    neck,
    type: e.type === "банка" ? "Банка ПЭТ" : "Флакон",
    part:
      e.type === "банка"
        ? "Винтовая крышка, чёрная или белая"
        : neck === "42/410"
          ? "Дозатор-пенообразователь"
          : "Распылитель, чёрный или белый",
    volumes: Array.from(e.volumes).sort((a, b) => order(a) - order(b)).join(", "),
  }));
  return (
    <div className="bg-white border border-[#e8e6e2] overflow-x-auto mb-8">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b border-[#e8e6e2] bg-[#f8f7f5]">
            <th className={th}>Горло</th>
            <th className={th}>Тара</th>
            <th className={th}>Комплектующая</th>
            <th className={th}>Объёмы</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.neck} className="border-b border-[#f0ede8] last:border-0">
              <td className="px-4 py-3 font-medium">{r.neck}</td>
              <td className="px-4 py-3 text-[#666]">{r.type}</td>
              <td className="px-4 py-3 text-[#666]">{r.part}</td>
              <td className="px-4 py-3 text-[#666]">{r.volumes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-white border border-[#e8e6e2] p-6">
      <div className="w-10 h-10 bg-[#f8f7f5] flex items-center justify-center mb-3">
        <Icon name={icon} size={18} className="text-[hsl(var(--primary))]" />
      </div>
      <p className="font-medium uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>{title}</p>
      <p className="text-sm text-[#666]">{text}</p>
    </div>
  );
}

export default function CatalogGroupPage({ group }: { group: GroupConfig }) {
  useSeo({ title: group.seoTitle, description: group.seoDescription, path: group.path });
  const others = GROUPS.filter((g) => g.path !== group.path);
  const delivery = DELIVERY_ITEMS.filter((d) => d.desc);

  return (
    <LandingLayout>
      <main className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">{group.eyebrow}</p>
        <h1 className="font-light text-4xl md:text-5xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          {group.h1}
        </h1>
        <p className="text-[#333] text-base leading-relaxed mb-8 max-w-3xl">{group.intro}</p>

        <h2 className="text-2xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
          {group.kind === "jars" ? "Характеристики и цены" : "Совместимость с тарой"}
        </h2>
        {group.kind === "jars" ? <JarsTable volumes={group.volumes} /> : <CompatibilityTable />}
        <p className="text-sm text-[#666] mb-10">
          Цены указаны за штуку при заказе от минимальной партии. Наличие на складе подтверждает менеджер при расчёте заказа — ответим в день обращения.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {group.usage.map((u) => (
            <Card key={u.title} {...u} />
          ))}
        </div>

        <h2 className="text-2xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>Доставка и получение</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {delivery.map((d) => (
            <Card key={d.title} icon={d.icon} title={d.title} text={d.desc} />
          ))}
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          <Link
            to="/#Каталог"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            <Icon name="ShoppingCart" size={16} />
            Смотреть в каталоге
          </Link>
          <a
            href="tel:+79650086038"
            className="inline-flex items-center gap-2 border border-[#1a1a1a] px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <Icon name="Phone" size={16} />
            +7 965 008-60-38
          </a>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Вопросы и ответы</h2>
          <FaqAccordion items={group.faq} />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>Другие группы</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((g) => (
              <Link key={g.path} to={g.path} className="border border-[#ddd] px-4 py-2 text-sm text-[#333] hover:border-[#1a1a1a] transition-colors">
                {g.h1}
              </Link>
            ))}
            <Link to="/pet-flakony" className="border border-[#ddd] px-4 py-2 text-sm text-[#333] hover:border-[#1a1a1a] transition-colors">
              ПЭТ флаконы оптом
            </Link>
          </div>
        </div>

        <LeadForm
          title="Нужен расчёт партии?"
          description="Отправьте заявку — проверим наличие, рассчитаем стоимость с доставкой и подберём комплектацию."
          presetMessage={group.leadMessage}
          buttonLabel="Получить оптовый прайс"
        />
      </main>
    </LandingLayout>
  );
}
