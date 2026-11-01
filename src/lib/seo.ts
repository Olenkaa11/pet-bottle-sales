export const BASE_URL = "https://tara-packing.ru";

export function seoHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${BASE_URL}${path}` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}${path}` }],
  };
}
