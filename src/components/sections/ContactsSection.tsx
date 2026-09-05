import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS, Section } from "@/data/products";

interface ContactsSectionProps {
  onScrollTo: (section: Section) => void;
}

const SEND_ORDER_URL = "https://functions.poehali.dev/a0322d82-0bb6-4b56-91b7-f4316a5889c0";

const PRODUCT_OPTIONS = ["Банка", "Флакон", "Не знаю, нужна помощь"];
const VOLUME_OPTIONS = ["30", "50", "100", "150", "200", "250", "300", "380", "500", "Другой"];

type ContactMethod = "whatsapp" | "telegram" | "email" | "phone";

const CONTACT_METHODS: { key: ContactMethod; label: string; icon: string; bg: string }[] = [
  { key: "whatsapp", label: "Написать в WhatsApp", icon: "MessageCircle", bg: "#25D366" },
  { key: "telegram", label: "Написать в Telegram", icon: "Send", bg: "#229ED9" },
  { key: "email", label: "Написать на почту", icon: "Mail", bg: "#666" },
  { key: "phone", label: "Оставить телефон", icon: "Phone", bg: "#1a1a1a" },
];

export default function ContactsSection({ onScrollTo }: ContactsSectionProps) {
  const [productType, setProductType] = useState("");
  const [volume, setVolume] = useState("");
  const [volumeCustom, setVolumeCustom] = useState("");
  const [quantity, setQuantity] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const resetForm = () => {
    setProductType("");
    setVolume("");
    setVolumeCustom("");
    setQuantity("");
    setCity("");
    setContact("");
    setContactMethod("");
  };

  const buildMessage = () => {
    const volumeText = volume === "Другой" ? volumeCustom : volume ? `${volume} мл` : "";
    return [
      productType && `Что нужно: ${productType}`,
      volumeText && `Объём: ${volumeText}`,
      quantity && `Количество: примерно ${quantity} шт.`,
      city && `Город доставки: ${city}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleMessengerClick = () => {
    const message = buildMessage();
    if (contactMethod === "whatsapp") {
      window.open(`https://wa.me/79650086038?text=${encodeURIComponent(message)}`, "_blank");
    } else if (contactMethod === "telegram") {
      window.open("https://t.me/+79650086038", "_blank");
    } else if (contactMethod === "email") {
      window.location.href = `mailto:info-pet.tara@mail.ru?subject=${encodeURIComponent("Заявка на расчёт с сайта")}&body=${encodeURIComponent(message)}`;
    }
  };

  const handleSubmit = async () => {
    if (!contact.trim()) return;
    setStatus("loading");
    const message = buildMessage();
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Заявка с сайта", contact, message }),
      });
      if (res.ok) {
        setStatus("success");
        resetForm();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="Контакты" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-[hsl(var(--primary))] text-sm tracking-[0.2em] uppercase mb-3">Связь</p>
          <h2 className="font-light text-4xl md:text-5xl uppercase tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>Контакты</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[hsl(var(--primary))] flex items-center justify-center shrink-0">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-[#999] tracking-widest uppercase mb-2">Написать нам</p>
                <div className="flex gap-2 flex-wrap">
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
            </div>
            {[
              { icon: "Mail", label: "Email", value: "info-pet.tara@mail.ru" },
              { icon: "MapPin", label: "Адрес склада", value: "п. Романовка, Всеволожский район, ЛО" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–18:00" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[hsl(var(--primary))] flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#999] tracking-widest uppercase mb-0.5">{c.label}</p>
                  <p className="text-[#1a1a1a] font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e8e6e2] p-8">
            <h3 className="text-xl uppercase tracking-wide mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>Получите расчёт стоимости заказа</h3>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full">
                  <Icon name="Check" size={24} className="text-green-600" />
                </div>
                <p className="text-lg font-medium">Заявка отправлена!</p>
                <p className="text-sm text-[#999]">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[hsl(var(--primary))] underline"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <div className="space-y-4 mt-5">
                <div>
                  <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Что вам нужно?</label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_OPTIONS.map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => setProductType(o)}
                        className={`px-3 py-1.5 text-sm border transition-colors ${
                          productType === o
                            ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                            : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Объём</label>
                  <div className="flex flex-wrap gap-2">
                    {VOLUME_OPTIONS.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVolume(v)}
                        className={`px-3 py-1.5 text-sm border transition-colors ${
                          volume === v
                            ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                            : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                        }`}
                      >
                        {v === "Другой" ? v : `${v} мл`}
                      </button>
                    ))}
                  </div>
                  {volume === "Другой" && (
                    <input
                      type="text"
                      placeholder="Укажите объём"
                      value={volumeCustom}
                      onChange={(e) => setVolumeCustom(e.target.value)}
                      className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5] mt-2"
                    />
                  )}
                </div>

                <div>
                  <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Количество</label>
                  <input
                    type="text"
                    placeholder="Примерно ... шт."
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Город доставки</label>
                  <input
                    type="text"
                    placeholder="Ваш город"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                    <label className="text-xs text-[#999] tracking-widest uppercase">Как вам удобнее получить расчёт?</label>
                    <span className="text-xs text-[#999]">Ответим в течение рабочего дня</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {CONTACT_METHODS.map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => setContactMethod(m.key)}
                        className={`flex items-center gap-1.5 px-3 py-2 text-sm border transition-colors ${
                          contactMethod === m.key
                            ? "text-white border-transparent"
                            : "border-[#ddd] text-[#555] hover:border-[#1a1a1a]"
                        }`}
                        style={contactMethod === m.key ? { backgroundColor: m.bg } : undefined}
                      >
                        <Icon name={m.icon} size={14} />
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {contactMethod === "phone" && (
                  <div>
                    <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Ваш телефон</label>
                    <input
                      type="text"
                      placeholder="+7 (___) ___-__-__"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                    />
                  </div>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-500">Ошибка отправки. Попробуйте ещё раз.</p>
                )}

                {contactMethod === "phone" ? (
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading" || !contact.trim()}
                    className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {status === "loading" ? "Отправляем..." : "Получить расчёт"}
                  </button>
                ) : (
                  <button
                    onClick={handleMessengerClick}
                    disabled={!contactMethod}
                    className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    Получить расчёт
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>TP</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-sm tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>Tara-packing</span>
              <span className="text-[10px] text-white/40 tracking-[0.15em] uppercase mt-0.5">ПЭТ Тара</span>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center">
            © 2024 ПЭТ Тара. Продажа пластиковой тары оптом по всей России.
          </p>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => onScrollTo(item as Section)}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}