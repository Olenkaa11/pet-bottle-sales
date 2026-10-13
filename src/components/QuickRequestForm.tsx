import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { reachGoal } from "@/lib/metrika";
import { SEND_ORDER_URL } from "@/lib/contacts";

const inputCls =
  "w-full border border-[#e8e6e2] px-4 py-3 text-base focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]";
const labelCls = "text-xs text-[#999] tracking-widest uppercase block mb-1.5";

export default function QuickRequestForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const canSend = name.trim() && contact.trim() && consent && status !== "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;
    setStatus("loading");
    const message = [
      "Заявка на оптовый прайс",
      product.trim() && `Что ищет: ${product.trim()}`,
      quantity.trim() && `Количество: ${quantity.trim()}`,
      "Согласие на обработку данных: дано",
    ]
      .filter(Boolean)
      .join("\n");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), contact: contact.trim(), message }),
      });
      if (res.ok) {
        reachGoal("form_submit");
        setStatus("success");
        setName("");
        setContact("");
        setProduct("");
        setQuantity("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="zayavka" className="py-16 bg-white border-y border-[#e8e6e2] scroll-mt-16">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Заявка</p>
        <h2 className="font-light text-3xl md:text-4xl uppercase tracking-tight mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
          Получите оптовый прайс
        </h2>
        <p className="text-[#666] mb-8">Оставьте контакт для ответа — пришлём прайс и рассчитаем стоимость в мессенджере.</p>

        {status === "success" ? (
          <div className="flex flex-col items-center py-10 gap-3 text-center">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
              <Icon name="Check" size={24} className="text-green-600" />
            </div>
            <p className="text-lg font-medium">
              Спасибо! Мы получили вашу заявку и свяжемся с вами в выбранном мессенджере
            </p>
            <button onClick={() => setStatus("idle")} className="text-sm text-[hsl(var(--primary))] underline">
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="qr-name" className={labelCls}>Имя</label>
              <input id="qr-name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Как к вам обращаться" className={inputCls} />
            </div>
            <div>
              <label htmlFor="qr-contact" className={labelCls}>WhatsApp или Telegram для ответа</label>
              <input id="qr-contact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Номер телефона или @username" className={inputCls} />
            </div>
            <div>
              <label htmlFor="qr-product" className={labelCls}>Какие банки или тару ищете <span className="normal-case tracking-normal">(необязательно)</span></label>
              <input id="qr-product" type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Например, банка 250 мл с белой крышкой" className={inputCls} />
            </div>
            <div>
              <label htmlFor="qr-qty" className={labelCls}>Примерное количество <span className="normal-case tracking-normal">(необязательно)</span></label>
              <input id="qr-qty" type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Например, 5000 шт." className={inputCls} />
            </div>

            <label className="flex items-start gap-3 text-sm text-[#555] cursor-pointer">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 w-4 h-4 shrink-0 accent-[hsl(var(--primary))]" />
              <span>
                Согласен на обработку персональных данных в соответствии с{" "}
                <Link to="/politika-konfidencialnosti" target="_blank" className="underline text-[hsl(var(--primary))]">
                  политикой конфиденциальности
                </Link>
              </span>
            </label>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в WhatsApp или Telegram.
              </p>
            )}

            <button
              type="submit"
              disabled={!canSend}
              className="w-full bg-[hsl(var(--primary))] text-white py-4 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              {status === "loading" ? "Отправляем..." : "Получить оптовый прайс"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
