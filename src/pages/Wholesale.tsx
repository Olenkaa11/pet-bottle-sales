import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
import { useCart } from "@/context/CartContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const SEND_ORDER_URL = "https://functions.poehali.dev/a0322d82-0bb6-4b56-91b7-f4316a5889c0";

const VOLUMES = ["50 мл", "100 мл", "150 мл", "200 мл", "250 мл", "300 мл", "380 мл", "500 мл"];

function WholesaleInner() {
  const { totalCount, setIsOpen } = useCart();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    document.title = "ПЭТ-банки оптом — купить пластиковые банки от производителя | ПЭТ Тара";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "ПЭТ-банки оптом от 50 до 500 мл для косметики, бытовой химии, автохимии и других продуктов. Различные варианты крышек и цветов. Отправьте заявку — рассчитаем стоимость."
      );
    }
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message: "Запрос оптового прайса на ПЭТ-банки" }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setContact("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a1a1a]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e6e2]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/#Каталог" className="hidden sm:block text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">В каталог</Link>
            <button onClick={() => setIsOpen(true)} className="relative p-2 hover:opacity-70 transition-opacity">
              <Icon name="ShoppingCart" size={22} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[hsl(var(--primary))] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Опт</p>
        <h1 className="font-light text-4xl md:text-5xl uppercase tracking-tight mb-8" style={{ fontFamily: "Oswald, sans-serif" }}>
          ПЭТ-банки оптом
        </h1>

        <p className="text-[#333] text-base leading-relaxed mb-4">
          Поставляем пластиковые ПЭТ-банки оптом для производителей косметики, бытовой химии, автохимии и другой продукции.
        </p>
        <p className="text-[#333] text-base leading-relaxed mb-8">
          В ассортименте банки объёмом от 50 до 500 мл с различными вариантами крышек и цветов.
        </p>

        <div className="bg-white border border-[#e8e6e2] p-6 mb-8">
          <p className="text-xs text-[#999] tracking-widest uppercase mb-4">В наличии</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {VOLUMES.map((v) => (
              <div key={v} className="flex items-center gap-2 text-sm font-medium">
                <Icon name="Check" size={16} className="text-[hsl(var(--primary))] shrink-0" />
                {v}
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#666] text-sm mb-4">Минимальная партия зависит от конкретной позиции.</p>
        <p className="text-sm mb-10">
          <Link to="/pet-banki" className="text-[hsl(var(--primary))] underline underline-offset-2">
            Смотреть цены и характеристики по каждому объёму →
          </Link>
        </p>

        <div className="bg-white border border-[#e8e6e2] p-8">
          <h2 className="text-xl uppercase tracking-wide mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
            Нужен определённый объём или количество?
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-6">
            Отправьте заявку — проверим наличие, рассчитаем стоимость и предложим подходящий вариант.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3 text-center">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                <Icon name="Check" size={24} className="text-green-600" />
              </div>
              <p className="text-lg font-medium">Заявка отправлена!</p>
              <p className="text-sm text-[#999]">Мы свяжемся с вами в ближайшее время.</p>
              <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-[hsl(var(--primary))] underline">
                Отправить ещё
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Телефон или Email</label>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              {status === "error" && <p className="text-sm text-red-500">Ошибка отправки. Попробуйте ещё раз.</p>}
              <button
                onClick={handleSubmit}
                disabled={status === "loading" || !name.trim() || !contact.trim()}
                className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Icon name="FileText" size={16} />
                {status === "loading" ? "Отправляем..." : "Получить оптовый прайс"}
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>TP</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-sm tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>Tara-packing</span>
              <span className="text-[10px] text-white/40 tracking-[0.15em] uppercase mt-0.5">ПЭТ Тара</span>
            </div>
          </Link>
          <p className="text-white/40 text-xs text-center">© 2024 ПЭТ Тара. Продажа пластиковой тары оптом по всей России.</p>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}

export default function Wholesale() {
  return (
    <CartProvider>
      <WholesaleInner />
    </CartProvider>
  );
}