import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { NAV_ITEMS, Section } from "@/data/products";

interface NavHeaderProps {
  activeSection: Section;
  onScrollTo: (section: Section) => void;
}

export default function NavHeader({ activeSection, onScrollTo }: NavHeaderProps) {
  const { totalCount, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (section: Section) => {
    setMobileMenuOpen(false);
    onScrollTo(section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e6e2]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
          </div>
          <span className="font-semibold text-lg tracking-wide uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item as Section)}
              className={`text-sm tracking-wide transition-colors ${
                activeSection === item ? "text-[hsl(var(--primary))]" : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              {item}
            </button>
          ))}
          <button onClick={() => handleScrollTo("Контакты" as Section)} className="bg-[hsl(var(--primary))] text-white px-5 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">Отправить заявку</button>
          <button onClick={() => setIsOpen(true)} className="relative p-2 hover:opacity-70 transition-opacity">
            <Icon name="ShoppingCart" size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[hsl(var(--primary))] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setIsOpen(true)} className="relative p-2">
            <Icon name="ShoppingCart" size={22} />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[hsl(var(--primary))] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e8e6e2] px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item as Section)}
              className="text-left text-sm py-1 text-[#333]"
            >
              {item}
            </button>
          ))}
          <button onClick={() => handleScrollTo("Контакты" as Section)} className="bg-[hsl(var(--primary))] text-white px-5 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity text-left">
            Запросить цены
          </button>
        </div>
      )}
    </header>
  );
}