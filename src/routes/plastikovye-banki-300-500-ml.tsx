import { createFileRoute } from "@tanstack/react-router";
import CatalogGroupPage from "@/pages/CatalogGroupPage";
import { GROUPS } from "@/data/groups";
import { seoHead } from "@/lib/seo";

const group = GROUPS.find((g) => g.path === "/plastikovye-banki-300-500-ml")!;

export const Route = createFileRoute("/plastikovye-banki-300-500-ml")({
  head: () => seoHead(group.seoTitle, group.seoDescription, group.path),
  component: () => <CatalogGroupPage group={group} />,
});
