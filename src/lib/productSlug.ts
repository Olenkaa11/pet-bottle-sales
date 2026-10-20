import { PRODUCTS } from "@/data/products";
import { slugsFromNames } from "@/lib/slugify";

export type CatalogProduct = (typeof PRODUCTS)[number] & { slug: string };

const SLUGS = slugsFromNames(PRODUCTS.map((p) => p.name));

export const CATALOG: CatalogProduct[] = PRODUCTS.map((p, i) => ({ ...p, slug: SLUGS[i] }));

export const productPath = (slug: string) => `/tovar/${slug}`;

export const findProduct = (slug?: string) => CATALOG.find((p) => p.slug === slug);

export const slugOf = (p: (typeof PRODUCTS)[number]) =>
  CATALOG.find((c) => c.name === p.name && c.image === p.image && c.price === p.price)?.slug ?? "";
