import { useState } from "react";
import Icon from "@/components/ui/icon";

interface FaqAccordionProps {
  items: { q: string; a: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#e8e6e2] border-t border-b border-[#e8e6e2]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-medium text-base" style={{ fontFamily: "Oswald, sans-serif" }}>
                {item.q}
              </span>
              <Icon
                name="ChevronDown"
                size={20}
                className={`shrink-0 text-[hsl(var(--primary))] transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <p className="text-[#666] text-sm leading-relaxed pb-5 pr-8">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
