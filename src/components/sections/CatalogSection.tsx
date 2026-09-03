import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, VOLUMES, TYPES, BANK_NOTE, Section } from "@/data/products";
import { useState } from "react";

interface CatalogSectionProps {
  filterVolume: string;
  filterType: string;
  onFilterVolume: (v: string) => void;
  onFilterType: (t: string) => void;
  onScrollTo: (section: Section) => void;
}

const SEND_ORDER_URL = "https://functions.poehali.dev/a0322d82-0bb6-4b56-91b7-f4316a5889c0";

export default function CatalogSection({
  filterVolume,
  filterType,
  onFilterVolume,
  onFilterType,
}: CatalogSectionProps) {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<typeof PRODUCTS[0] | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [quote, setQuote] = useState<{ product: typeof PRODUCTS[0]; reason: "цена на партию" | "наличие" } | null>(null);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const QTY_OPTIONS = [1000, 3000, 5000, 10000];
  const [calcProduct, setCalcProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [calcQty, setCalcQty] = useState<number | null>(null);
  const [calcCustom, setCalcCustom] = useState("");

  const openCalc = (product: typeof PRODUCTS[0]) => {
    setCalcProduct(product);
    setCalcQty(null);
    setCalcCustom("");
  };

  const closeCalc = () => setCalcProduct(null);

  const confirmCalc = () => {
    if (!calcProduct) return;
    const qty = calcQty ?? parseInt(calcCustom, 10);
    if (!qty || qty <= 0) return;
    addItem({ id: calcProduct.id, name: calcProduct.name, volume: calcProduct.volume, color: calcProduct.color, price: calcProduct.price, image: calcProduct.image }, qty);
    closeCalc();
  };

  const openQuote = (product: typeof PRODUCTS[0], reason: "цена на партию" | "наличие") => {
    setQuote({ product, reason });
    setQuoteStatus("idle");
    setQuoteName("");
    setQuotePhone("");
  };

  const closeQuote = () => setQuote(null);

  const submitQuote = async () => {
    if (!quote || !quoteName.trim() || !quotePhone.trim()) return;
    setQuoteStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteName,
          contact: quotePhone,
          message: `Запрос: ${quote.reason}. Товар: ${quote.product.name} (${quote.product.volume}).`,
        }),
      });
      setQuoteStatus(res.ok ? "success" : "error");
    } catch {
      setQuoteStatus("error");
    }
  };

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
        <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Каталог</h2>
        <p className="text-[#666] text-base leading-relaxed mt-4 max-w-2xl">
          ПЭТ банки и пластиковая тара оптом от 50 до 500 мл. Купить пластиковые банки для косметики, пищевой и бытовой продукции по выгодным ценам с доставкой по Санкт-Петербургу и всей России.
        </p>
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

      {(filterType === "крышки" || filterType === "дозаторы") ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🚧</p>
          <p className="text-xl font-medium uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>Страница в разработке</p>
          <p className="text-[#999] mt-2 text-sm">Скоро здесь появятся товары. Свяжитесь с нами для уточнения наличия.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-[#999]">Товары не найдены. Измените фильтры.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <div key={p.name + p.color} className="group bg-white border border-[#e8e6e2] hover:border-[hsl(var(--primary))] transition-all hover:shadow-md cursor-pointer" onClick={() => p.description && setSelected(p)}>
              <div className="aspect-square overflow-hidden bg-[#f8f7f5] flex items-center justify-center relative">
                {p.imagePending ? (
                  <div className="flex flex-col items-center gap-2 text-[#bbb]">
                    <Icon name="ImageOff" size={28} />
                    <span className="text-xs">Фото в разработке</span>
                  </div>
                ) : (
                  <>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                    />
                    <button
                      onClick={(e) => { e.stopPropagation(); setLightbox({ src: p.image, alt: p.name }); }}
                      className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#666] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[hsl(var(--primary))]"
                      aria-label="Увеличить фото"
                    >
                      <Icon name="ZoomIn" size={16} />
                    </button>
                  </>
                )}
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
                {p.type === "банка" && (
                  <p className="text-[#999] text-[11px] leading-snug mt-2">{BANK_NOTE}</p>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); openCalc(p); }}
                  className="mt-3 w-full bg-[#1a1a1a] text-white text-xs py-2 hover:opacity-80 transition-opacity tracking-wide flex items-center justify-center gap-1.5">
                  <Icon name="Calculator" size={13} />
                  Рассчитать заказ
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); openQuote(p, "цена на партию"); }}
                  className="mt-2 w-full border border-[#ddd] text-[#333] text-xs py-2 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors tracking-wide flex items-center justify-center gap-1.5">
                  <Icon name="Tag" size={13} />
                  Запросить цену на партию
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); openQuote(p, "наличие"); }}
                  className="mt-1.5 w-full text-[#999] text-[11px] py-1 hover:text-[hsl(var(--primary))] transition-colors underline underline-offset-2">
                  Уточнить наличие
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
              {selected.imagePending ? (
                <div className="w-24 h-24 bg-[#f8f7f5] flex flex-col items-center justify-center gap-1 text-[#bbb] shrink-0">
                  <Icon name="ImageOff" size={20} />
                  <span className="text-[9px] text-center leading-tight">Фото в разработке</span>
                </div>
              ) : (
                <button
                  onClick={() => setLightbox({ src: selected.image, alt: selected.name })}
                  className="w-24 h-24 shrink-0 relative group/img"
                  aria-label="Увеличить фото"
                >
                  <img src={selected.image} alt={selected.name} className="w-24 h-24 object-contain mix-blend-multiply" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/10 transition-colors">
                    <Icon name="ZoomIn" size={16} className="text-[#666] opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </span>
                </button>
              )}
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
              {selected.type === "банка" && (
                <p className="text-[#999] text-xs leading-relaxed mb-4">{BANK_NOTE}</p>
              )}
              <button
                onClick={() => { const p = selected; setSelected(null); openCalc(p); }}
                className="w-full bg-[#1a1a1a] text-white text-sm py-3 hover:opacity-80 transition-opacity tracking-wide flex items-center justify-center gap-2">
                <Icon name="Calculator" size={15} />
                Рассчитать заказ
              </button>
              <button
                onClick={() => { const p = selected; setSelected(null); openQuote(p, "цена на партию"); }}
                className="mt-2 w-full border border-[#ddd] text-[#333] text-sm py-3 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors tracking-wide flex items-center justify-center gap-2">
                <Icon name="Tag" size={15} />
                Запросить цену на партию
              </button>
              <button
                onClick={() => { const p = selected; setSelected(null); openQuote(p, "наличие"); }}
                className="mt-2 w-full text-[#999] text-xs py-1 hover:text-[hsl(var(--primary))] transition-colors underline underline-offset-2">
                Уточнить наличие
              </button>
            </div>
          </div>
        </div>
      )}

      {calcProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={closeCalc}>
          <div className="bg-white max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-1">
              <h3 className="text-lg uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
                Рассчитать заказ
              </h3>
              <button onClick={closeCalc} className="text-[#999] hover:text-black transition-colors">
                <Icon name="X" size={18} />
              </button>
            </div>
            <p className="text-[#999] text-xs mb-4">{calcProduct.name}, {calcProduct.volume}</p>
            <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Количество, шт.</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {QTY_OPTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => { setCalcQty(q); setCalcCustom(""); }}
                  className={`px-4 py-2.5 text-sm border transition-colors ${
                    calcQty === q
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                  }`}
                >
                  {q.toLocaleString("ru-RU")}
                </button>
              ))}
            </div>
            <div>
              <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Другое количество</label>
              <input
                type="number"
                min={1}
                placeholder="Укажите количество"
                value={calcCustom}
                onChange={(e) => { setCalcCustom(e.target.value); setCalcQty(null); }}
                className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
              />
            </div>
            <button
              onClick={confirmCalc}
              disabled={!calcQty && !calcCustom}
              className="mt-4 w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Icon name="ShoppingCart" size={15} />
              Добавить в корзину
            </button>
          </div>
        </div>
      )}

      {quote && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={closeQuote}>
          <div className="bg-white max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            {quoteStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-6 gap-3 text-center">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                  <Icon name="Check" size={24} className="text-green-600" />
                </div>
                <p className="text-lg font-medium">Заявка отправлена!</p>
                <p className="text-sm text-[#999]">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={closeQuote} className="mt-2 text-sm text-[hsl(var(--primary))] underline">
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {quote.reason === "наличие" ? "Уточнить наличие" : "Запросить цену на партию"}
                  </h3>
                  <button onClick={closeQuote} className="text-[#999] hover:text-black transition-colors">
                    <Icon name="X" size={18} />
                  </button>
                </div>
                <p className="text-[#999] text-xs mb-4">{quote.product.name}, {quote.product.volume}</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Телефон или Email</label>
                    <input
                      type="text"
                      placeholder="+7 (___) ___-__-__"
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                    />
                  </div>
                  {quoteStatus === "error" && (
                    <p className="text-sm text-red-500">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                  <button
                    onClick={submitQuote}
                    disabled={quoteStatus === "loading" || !quoteName.trim() || !quotePhone.trim()}
                    className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {quoteStatus === "loading" ? "Отправляем..." : "Отправить"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <Icon name="X" size={28} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}