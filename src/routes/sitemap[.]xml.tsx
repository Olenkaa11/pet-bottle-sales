import { createFileRoute } from "@tanstack/react-router";
import { buildSitemap } from "@/data/siteRoutes";
import { CATALOG, productPath } from "@/lib/productSlug";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const date = new Date().toISOString().slice(0, 10);
        const extra = CATALOG.map((p) => ({ path: productPath(p.slug), changefreq: "monthly" as const, priority: 0.6 }));
        return new Response(buildSitemap(date, extra), {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
