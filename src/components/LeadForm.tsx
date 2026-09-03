import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_ORDER_URL = "https://functions.poehali.dev/a0322d82-0bb6-4b56-91b7-f4316a5889c0";

interface LeadFormProps {
  title: string;
  description: string;
  presetMessage: string;
  buttonLabel?: string;
}

export default function LeadForm({ title, description, presetMessage, buttonLabel = "Отправить заявку" }: LeadFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message: presetMessage }),
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
    <div className="bg-white border border-[#e8e6e2] p-8">
      <h2 className="text-xl uppercase tracking-wide mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>{title}</h2>
      <p className="text-[#666] text-sm leading-relaxed mb-6">{description}</p>

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
            {status === "loading" ? "Отправляем..." : buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
