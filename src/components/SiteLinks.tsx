import { Link } from "react-router-dom";

const LINKS = [
  { to: "/pet-banki", label: "ПЭТ банки" },
  { to: "/pet-flakony", label: "ПЭТ флаконы" },
  { to: "/pet-tara", label: "Пластиковые банки" },
  { to: "/korichnevye-banki", label: "Коричневые банки" },
  { to: "/korichnevye-flakony", label: "Коричневые флаконы" },
  { to: "/pet-banki-50-100-ml", label: "Банки 50 мл" },
  { to: "/pet-banki-50-100-ml", label: "Банки 100 мл" },
  { to: "/pet-banki-150-250-ml", label: "Банки 150 мл" },
  { to: "/pet-banki-150-250-ml", label: "Банки 200 мл" },
  { to: "/pet-banki-150-250-ml", label: "Банки 250 мл" },
  { to: "/plastikovye-banki-300-500-ml", label: "Банки 300 мл" },
  { to: "/plastikovye-banki-300-500-ml", label: "Банки 500 мл" },
  { to: "/kryshki-dozatory", label: "Крышки для ПЭТ банок" },
  { to: "/kryshki-dozatory", label: "Дозаторы" },
  { to: "/kryshki-dozatory", label: "Распылители" },
  { to: "/pet-banki-optom", label: "Оптовый прайс" },
];

export default function SiteLinks() {
  return (
    <nav aria-label="Разделы каталога" className="bg-[#1a1a1a] border-t border-white/10 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Разделы каталога</p>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <li key={l.label}>
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
