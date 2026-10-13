import { Link } from "react-router-dom";
import { GROUPS } from "@/data/groups";

const LINKS = [
  { to: "/pet-tara", label: "ПЭТ тара оптом" },
  { to: "/pet-banki", label: "ПЭТ банки оптом" },
  { to: "/pet-flakony", label: "ПЭТ флаконы оптом" },
  ...GROUPS.map((g) => ({ to: g.path, label: g.h1 })),
  { to: "/pet-banki-optom", label: "Оптовый прайс" },
];

export default function SiteLinks() {
  return (
    <nav aria-label="Разделы каталога" className="bg-[#1a1a1a] border-t border-white/10 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Разделы каталога</p>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-white/70 hover:text-white text-sm transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
