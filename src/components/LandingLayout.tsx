import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

interface LandingLayoutProps {
  children: ReactNode;
}

function LandingHeader() {
  const { totalCount, setIsOpen } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#e8e6e2]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
          </div>
          <span className="font-semibold text-lg tracking-wide uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/#Каталог" className="hidden sm:block text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">Каталог</Link>
          <Link to="/#Контакты" className="hidden sm:block text-sm text-[#666] hover:text-[#1a1a1a] transition-colors">Контакты</Link>
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
  );
}

function LandingFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[hsl(var(--primary))] flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ</span>
          </div>
          <span className="tracking-wide uppercase text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>ПЭТ Тара</span>
        </Link>
        <p className="text-white/40 text-xs text-center">© 2024 ПЭТ Тара. Продажа пластиковой тары оптом по всей России.</p>
      </div>
    </footer>
  );
}

function LandingLayoutInner({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a1a1a]">
      <LandingHeader />
      {children}
      <LandingFooter />
      <CartDrawer />
    </div>
  );
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <CartProvider>
      <LandingLayoutInner>{children}</LandingLayoutInner>
    </CartProvider>
  );
}
