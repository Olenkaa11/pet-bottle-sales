import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LandingLayout from "@/components/LandingLayout";
import LeadForm from "@/components/LeadForm";
import Icon from "@/components/ui/icon";
import { useSeo } from "@/hooks/useSeo";
import { BANK_NOTE } from "@/data/products";
import { CATALOG, findProduct, productPath } from "@/lib/productSlug";
import { TELEGRAM_URL } from "@/lib/contacts";
import NotFound from "@/pages/NotFound";

export default function ProductPage() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const [active, setActive] = useState(0);
  useEffect(() => setActive(0), [slug]);

  useSeo({
    title: product ? `${product.name} оптом — ${product.price} | ПЭТ Тара` : "Товар не найден | ПЭТ Тара",
    description: product
      ? `${product.name}: ${product.volume}, ${product.color}. Цена ${product.price} за штуку, ${product.moq}. Доставка по России.`
      : "Товар не найден",
    path: product ? productPath(product.slug) : "/",
  });

  if (!product) return <NotFound />;

  const waText = encodeURIComponent(`Здравствуйте! Интересует: ${product.name}. Хочу узнать цену на партию`);
  const related = CATALOG.filter((p) => p.type === product.type && p.slug !== product.slug).slice(0, 4);

  return (
    <LandingLayout>
      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6">
        <nav className="text-sm text-[#999] mb-6 flex flex-wrap gap-2">
          <Link to="/" className="hover:text-[#1a1a1a]">Главная</Link>
          <span>/</span>
          <Link to="/#Каталог" className="hover:text-[#1a1a1a]">Каталог</Link>
          <span>/</span>
          <span className="text-[#333]">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="aspect-square bg-[#f8f7f5] border border-[#e8e6e2] flex items-center justify-center">
              {!product.images[active] ? (
                <div className="flex flex-col items-center gap-2 text-[#bbb]">
                  <Icon name="ImageOff" size={36} />
                  <span className="text-sm">Фото в разработке</span>
                </div>
              ) : (
                <img src={product.images[active]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActive(i)}
                    aria-label={`Фото ${i + 1}`}
                    className={`w-20 h-20 bg-[#f8f7f5] border-2 transition-colors ${active === i ? "border-[hsl(var(--primary))]" : "border-[#e8e6e2] hover:border-[#bbb]"}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-light text-3xl md:text-4xl uppercase tracking-tight mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              {product.name}
            </h1>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-1">{product.volume}</span>
              <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-1 capitalize">{product.color}</span>
              {product.diameter && <span className="text-xs bg-[#f0ede8] text-[#666] px-2 py-1">{product.diameter}</span>}
            </div>
            <p className="text-[hsl(var(--primary))] text-3xl font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>{product.price}</p>
            <p className="text-[#999] text-sm mt-1 mb-6">{product.moq}</p>
            {product.type === "банка" && <p className="text-[#777] text-sm leading-relaxed mb-6">{BANK_NOTE}</p>}

            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <a
                href={`https://wa.me/79650086038?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <Icon name="MessageCircle" size={20} className="text-white" />
                Написать в WhatsApp
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: "#229ED9" }}
              >
                <Icon name="Send" size={20} className="text-white" />
                Написать в Telegram
              </a>
            </div>
            <p className="text-sm text-[#888]">Удобнее написать? Ответим в сообщении</p>
          </div>
        </div>

        {product.description && (
          <section className="mt-12 max-w-2xl">
            <h2 className="text-xs text-[#999] tracking-widest uppercase mb-3">Характеристики</h2>
            <table className="w-full text-sm">
              <tbody>
                {product.description.map(([k, v]) => (
                  <tr key={k} className="border-b border-[#f0ede8]">
                    <td className="py-2 pr-4 text-[#999] w-1/2">{k}</td>
                    <td className="py-2 font-medium">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section className="mt-12 max-w-xl">
          <LeadForm
            title="Цена на партию"
            description="Оставьте контакт — пришлём цену и условия на нужное количество."
            presetMessage={`Запрос по товару: ${product.name}`}
          />
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl uppercase tracking-wide mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>Похожие товары</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to={productPath(r.slug)} className="block border border-[#e8e6e2] p-3 text-sm hover:border-[hsl(var(--primary))] transition-colors">
                    <span className="block font-medium">{r.name}</span>
                    <span className="text-[hsl(var(--primary))]">{r.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </LandingLayout>
  );
}
