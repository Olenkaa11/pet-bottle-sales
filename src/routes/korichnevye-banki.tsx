import { createFileRoute } from "@tanstack/react-router";
import ColorCatalogPage from "@/pages/ColorCatalogPage";
import { COLOR_PAGES } from "@/data/colorPages";
import { seoHead } from "@/lib/seo";

const page = COLOR_PAGES.find((c) => c.path === "/korichnevye-banki")!;

export const Route = createFileRoute("/korichnevye-banki")({
  head: () => seoHead(page.seoTitle, page.seoDescription, page.path),
  component: () => <ColorCatalogPage page={page} />,
});
