import { reachGoal } from "@/lib/metrika";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const TELEGRAM = "Olenkaa_11";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleOrder = () => {
    if (!name.trim() || !phone.trim()) return;

    const lines = items.map(
      (i) => `• ${i.name} (${i.volume}, ${i.color}) — ${i.quantity} шт.`
    ).join("\n");

    const msg = encodeURIComponent(
      `Заказ с сайта ПЭТ Тара\n\nТовары:\n${lines}\n\nИмя: ${name}\nТелефон: ${phone}${comment ? `\nКомментарий: ${comment}` : ""}`
    );

    reachGoal("form_submit");
    reachGoal("telegram_click");
    window.open(`https://t.me/${TELEGRAM}?text=${msg}`, "_blank");
    clearCart();
    setIsOpen(false);
    setName("");
    setPhone("");
    setComment("");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e6e2]">
          <h2 className="text-xl font-semibold uppercase tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
            Корзина
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <Icon name="X" size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-[#999] text-sm mt-8 text-center">Корзина пуста</p>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-start border-b border-[#f0ede8] pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover bg-[#f8f7f5]" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{item.name}</p>
                    <p className="text-xs text-[#888] mt-0.5">{item.volume}, {item.color}</p>
                    <p className="text-[hsl(var(--primary))] text-sm font-semibold mt-1">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="w-7 h-7 border border-[#ddd] flex items-center justify-center text-sm hover:border-[#1a1a1a] transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >−</button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        className="w-7 h-7 border border-[#ddd] flex items-center justify-center text-sm hover:border-[#1a1a1a] transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-[#aaa] hover:text-[#333] transition-colors mt-1">
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-[#e8e6e2] flex flex-col gap-3">
            <p className="text-xs text-[#999] uppercase tracking-widest mb-1">Оформление заказа</p>
            <input
              type="text"
              placeholder="Ваше имя *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#ddd] px-3 py-2 text-sm focus:outline-none focus:border-[#1a1a1a] transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-[#ddd] px-3 py-2 text-sm focus:outline-none focus:border-[#1a1a1a] transition-colors"
            />
            <textarea
              placeholder="Комментарий / пожелания"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
              className="w-full border border-[#ddd] px-3 py-2 text-sm focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
            />
            <button
              onClick={handleOrder}
              disabled={!name.trim() || !phone.trim()}
              className="w-full bg-[#1a1a1a] text-white py-3 text-sm font-medium uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Отправить заказ в Telegram
            </button>
          </div>
        )}
      </div>
    </>
  );
}
