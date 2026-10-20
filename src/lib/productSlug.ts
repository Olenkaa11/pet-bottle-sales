import { PRODUCTS } from "@/data/products";

const MAP: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
  н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

const translit = (s: string) =>
  s
    .toLowerCase()
    .split("")
    .map((c) => (c in MAP ? MAP[c] : c))
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export type CatalogProduct = (typeof PRODUCTS)[number] & { slug: string };

const used = new Map<string, number>();

export const CATALOG: CatalogProduct[] = PRODUCTS.map((p) => {
  const base = translit(p.name) || "tovar";
  const n = (used.get(base) ?? 0) + 1;
  used.set(base, n);
  return { ...p, slug: n === 1 ? base : `${base}-${n}` };
});

export const productPath = (slug: string) => `/tovar/${slug}`;

export const findProduct = (slug?: string) => CATALOG.find((p) => p.slug === slug);

export const slugOf = (p: (typeof PRODUCTS)[number]) =>
  CATALOG.find((c) => c.name === p.name && c.image === p.image && c.price === p.price)?.slug ?? "";
