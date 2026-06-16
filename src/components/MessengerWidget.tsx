import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "89650086038";

const MESSENGERS = [
  {
    label: "Telegram",
    href: `https://t.me/+7${PHONE.slice(1)}`,
    bg: "#229ED9",
    icon: "Send",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/7${PHONE.slice(1)}`,
    bg: "#25D366",
    icon: "MessageCircle",
  },
  {
    label: "MAX",
    href: "https://max.ru/u/f9LHodD0cOLOEViDru2a538ko-XlkvHr8YsNL8P-AZuhH2SqMadqg4epcLQ",
    bg: "#0077FF",
    icon: "MessageCircle",
  },
];

export default function MessengerWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 mb-1">
          {MESSENGERS.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-white text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: m.bg }}
            >
              <Icon name={m.icon} size={16} className="text-white" />
              {m.label}
            </a>
          ))}
          <a
            href="#Контакты"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-2.5 text-white text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "hsl(var(--primary))" }}
          >
            <Icon name="FileText" size={16} className="text-white" />
            Отправить заявку
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 pl-4 pr-5 h-14 rounded-full bg-[hsl(var(--primary))] text-white shadow-xl hover:opacity-90 transition-opacity"
        aria-label="Написать нам"
      >
        <Icon name={open ? "X" : "MessageCircle"} size={22} className="text-white" />
        {!open && <span className="text-sm font-medium">Написать нам</span>}
      </button>
    </div>
  );
}