import { PRODUCTS } from "@/data/products";
import { SIZE_PHOTOS } from "@/data/productGallery";
import { slugsFromNames } from "@/lib/slugify";

export type CatalogProduct = (typeof PRODUCTS)[number] & { slug: string; images: string[] };

const SLUGS = slugsFromNames(PRODUCTS.map((p) => p.name));

export const CATALOG: CatalogProduct[] = PRODUCTS.map((p, i) => {
  const sizePhoto = p.type === "банка" && p.name.includes("крышка") ? SIZE_PHOTOS[p.volume] : undefined;
  return { ...p, slug: SLUGS[i], images: [p.image, sizePhoto].filter((x): x is string => Boolean(x)) };
});

export const productPath = (slug: string) => `/tovar/${slug}`;

export const findProduct = (slug?: string) => CATALOG.find((p) => p.slug === slug);

export const slugOf = (p: (typeof PRODUCTS)[number]) =>
  CATALOG.find((c) => c.name === p.name && c.image === p.image && c.price === p.price)?.slug ?? "";
