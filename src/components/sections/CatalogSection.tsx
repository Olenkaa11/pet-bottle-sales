import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, VOLUMES, TYPES } from "@/data/products";
import { useState } from "react";

interface CatalogSectionProps {
  filterVolume: string;
  filterType: string;
  onFilterVolume: (v: string) => void;
  onFilterType: (t: string) => void;
}

export default function CatalogSection({
  filterVolume,
  filterType,
  onFilterVolume,
  onFilterType,
}: CatalogSectionProps) {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<typeof PRODUCTS[0] | null>(null);

  const filtered = PRODUCTS.filter((p) => {
    return (
      (filterVolume === "все" || p.volume === filterVolume) &&
      (filterType === "все" || p.type === filterType)
    );
  });

  return (
    <section id="Каталог" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Ассортимент</p>
        <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Каталог товаров</h2>
      </div>

      <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-[#e8e6e2]">
        <div>
          <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Тип</p>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => onFilterType(t)}
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
                onClick={() => onFilterVolume(v)}
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
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#999]">Товары не найдены. Измените фильтры.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <div key={p.name} className="group bg-white border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-all hover:shadow-md cursor-pointer" onClick={() => p.description && setSelected(p)}>
              <div className="aspect-square overflow-hidden bg-[#f8f7f5]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-base uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>{p.name}</p>
                <div className="flex gap-2 mt-1.5 flex-wrap">
                  <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-0.5">{p.volume}</span>
                  <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-0.5 capitalize">{p.color}</span>
                  {p.diameter && <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-0.5">{p.diameter}</span>}
                </div>
                <p className="text-[hsl(var(--primary))] text-lg font-semibold mt-3" style={{ fontFamily: "Oswald, sans-serif" }}>{p.price}</p>
                <p className="text-[#aaa] text-xs mt-0.5">{p.moq}</p>
                <button
                  onClick={() => addItem({ id: p.id, name: p.name, volume: p.volume, color: p.color, price: p.price, image: p.image })}
                  className="mt-3 w-full bg-[#1a1a1a] text-white text-xs py-2 hover:opacity-80 transition-opacity tracking-wide flex items-center justify-center gap-1.5">
                  <Icon name="ShoppingCart" size={13} />
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start gap-4 p-6 border-b border-[#e8e6e2]">
              <img src={selected.image} alt={selected.name} className="w-24 h-24 object-contain mix-blend-multiply shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-lg uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>{selected.name}</p>
                <p className="text-[hsl(var(--primary))] text-xl font-semibold mt-1" style={{ fontFamily: "Oswald, sans-serif" }}>{selected.price}</p>
                <p className="text-[#aaa] text-xs mt-0.5">{selected.moq}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#999] hover:text-black transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-xs text-[#999] tracking-widest uppercase mb-3">Характеристики</p>
              <table className="w-full text-sm">
                <tbody>
                  {selected.description?.map(([key, val]) => (
                    <tr key={key} className="border-b border-[#f0ede8]">
                      <td className="py-2 pr-4 text-[#999] w-1/2">{key}</td>
                      <td className="py-2 font-medium">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => { addItem({ id: selected.id, name: selected.name, volume: selected.volume, color: selected.color, price: selected.price, image: selected.image }); setSelected(null); }}
                className="mt-6 w-full bg-[#1a1a1a] text-white text-sm py-3 hover:opacity-80 transition-opacity tracking-wide flex items-center justify-center gap-2">
                <Icon name="ShoppingCart" size={15} />
                В корзину
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}