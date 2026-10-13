import { GROUPS } from "./groups";

export const SITE_URL = "https://tara-packing.ru";

export interface SiteRoute {
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: number;
}

export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/pet-tara", changefreq: "monthly", priority: 0.9 },
  { path: "/pet-banki", changefreq: "monthly", priority: 0.9 },
  { path: "/pet-flakony", changefreq: "monthly", priority: 0.9 },
  { path: "/pet-banki-optom", changefreq: "monthly", priority: 0.8 },
  { path: "/politika-konfidencialnosti", changefreq: "monthly", priority: 0.3 },
  ...GROUPS.map((g) => ({ path: g.path, changefreq: "monthly" as const, priority: 0.8 })),
];

export function buildSitemap(date: string): string {
  const urls = SITE_ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}