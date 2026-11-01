import { createFileRoute } from "@tanstack/react-router";
import CatalogGroupPage from "@/pages/CatalogGroupPage";
import { GROUPS } from "@/data/groups";
import { seoHead } from "@/lib/seo";

const group = GROUPS.find((g) => g.path === "/pet-banki-50-100-ml")!;

export const Route = createFileRoute("/pet-banki-50-100-ml")({
  head: () => seoHead(group.seoTitle, group.seoDescription, group.path),
  component: () => <CatalogGroupPage group={group} />,
});
