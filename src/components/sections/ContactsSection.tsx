import Icon from "@/components/ui/icon";
import { NAV_ITEMS, Section } from "@/data/products";

interface ContactsSectionProps {
  onScrollTo: (section: Section) => void;
}

export default function ContactsSection({ onScrollTo }: ContactsSectionProps) {
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
              { icon: "Mail", label: "Email", value: "info-pet.tara@yandex.ru" },
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
            <h3 className="text-xl uppercase tracking-wide mb-6" style={{ fontFamily: "Oswald, sans-serif" }}>Отправить заявку</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Телефон или Email</label>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] bg-[#f8f7f5]"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] tracking-widest uppercase block mb-1.5">Сообщение</label>
                <textarea
                  rows={3}
                  placeholder="Укажите нужный товар, объём, количество..."
                  className="w-full border border-[#e8e6e2] px-4 py-2.5 text-sm focus:outline-none focus:border-[hsl(var(--primary))] resize-none bg-[#f8f7f5]"
                />
              </div>
              <button className="w-full bg-[hsl(var(--primary))] text-white py-3 font-medium tracking-wide hover:opacity-90 transition-opacity">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[hsl(var(--primary))] flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
            </div>
            <span className="tracking-wide uppercase text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
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