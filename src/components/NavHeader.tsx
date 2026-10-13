import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
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
        <Logo />

        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
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
          <Link to="/pet-tara" className="text-sm tracking-wide text-[#666] hover:text-[#1a1a1a] transition-colors">ПЭТ тара</Link>
          <Link to="/pet-banki" className="text-sm tracking-wide text-[#666] hover:text-[#1a1a1a] transition-colors">ПЭТ банки</Link>
          <Link to="/pet-flakony" className="text-sm tracking-wide text-[#666] hover:text-[#1a1a1a] transition-colors">ПЭТ флаконы</Link>
          <Link to="/pet-banki-optom" className="text-sm tracking-wide text-[#666] hover:text-[#1a1a1a] transition-colors">Опт</Link>
          <a href="tel:+79650086038" className="flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a] hover:text-[hsl(var(--primary))] transition-colors whitespace-nowrap">
            <Icon name="Phone" size={16} />
            +7 965 008-60-38
          </a>
          <button onClick={() => handleScrollTo("Контакты" as Section)} className="bg-[hsl(var(--primary))] text-white px-5 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">Написать менеджеру</button>
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
          <a href="tel:+79650086038" className="flex items-center gap-1.5 bg-[hsl(var(--primary))] text-white px-3 py-1.5 text-sm font-semibold">
            <Icon name="Phone" size={14} />
            Позвонить
          </a>
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
          <Link to="/pet-tara" onClick={() => setMobileMenuOpen(false)} className="text-left text-sm py-1 text-[#333]">
            ПЭТ тара
          </Link>
          <Link to="/pet-banki" onClick={() => setMobileMenuOpen(false)} className="text-left text-sm py-1 text-[#333]">
            ПЭТ банки
          </Link>
          <Link to="/pet-flakony" onClick={() => setMobileMenuOpen(false)} className="text-left text-sm py-1 text-[#333]">
            ПЭТ флаконы
          </Link>
          <Link to="/pet-banki-optom" onClick={() => setMobileMenuOpen(false)} className="text-left text-sm py-1 text-[#333]">
            Опт
          </Link>
          <a href="tel:+79650086038" className="flex items-center gap-2 text-base font-semibold text-[#1a1a1a] py-1">
            <Icon name="Phone" size={16} />
            +7 965 008-60-38
          </a>
          <button onClick={() => handleScrollTo("Контакты" as Section)} className="bg-[hsl(var(--primary))] text-white px-5 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity text-left">
            Написать менеджеру
          </button>
        </div>
      )}
    </header>
  );
}