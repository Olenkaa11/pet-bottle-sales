import { createFileRoute, notFound } from "@tanstack/react-router";
import ProductPage from "@/pages/ProductPage";
import { findProduct, productPath } from "@/lib/productSlug";
import { BASE_URL, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/tovar/$slug")({
  loader: ({ params }) => {
    if (!findProduct(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) return {};
    const base = seoHead(
      `${product.name} оптом — ${product.price} | ПЭТ Тара`,
      `${product.name}: ${product.volume}, ${product.color}. Цена ${product.price} за штуку, ${product.moq}. Доставка по России.`,
      productPath(product.slug),
    );
    const price = product.price.replace(",", ".").replace(/[^0-9.]/g, "");
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.images,
      description: `${product.name}: ${product.volume}, ${product.color}. Оптовая поставка от производителя.`,
      brand: { "@type": "Brand", name: "ПЭТ Тара" },
      material: "ПЭТ",
      color: product.color,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}${productPath(product.slug)}`,
        priceCurrency: "RUB",
        price,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
    };
  },
  component: ProductPage,
});
