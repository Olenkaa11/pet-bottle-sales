import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/sections/HeroSection";
import CatalogSection from "@/components/sections/CatalogSection";
import DeliverySection from "@/components/sections/DeliverySection";
import ContactsSection from "@/components/sections/ContactsSection";
import { Section } from "@/data/products";

function IndexInner() {
  const [activeSection, setActiveSection] = useState<Section>("Каталог");
  const [filterVolume, setFilterVolume] = useState("все");
  const [filterType, setFilterType] = useState("все");
  const [filterSize, setFilterSize] = useState("все");

  const scrollTo = (section: Section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-[#1a1a1a]">
      <NavHeader activeSection={activeSection} onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <CatalogSection
        filterVolume={filterVolume}
        filterType={filterType}
        filterSize={filterSize}
        onFilterVolume={setFilterVolume}
        onFilterType={setFilterType}
        onFilterSize={setFilterSize}
      />
      <DeliverySection />
      <ContactsSection onScrollTo={scrollTo} />
      <CartDrawer />
    </div>
  );
}

export default function Index() {
  return (
    <CartProvider>
      <IndexInner />
    </CartProvider>
  );
}
