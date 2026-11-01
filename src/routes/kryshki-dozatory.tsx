import { createFileRoute } from "@tanstack/react-router";
import CatalogGroupPage from "@/pages/CatalogGroupPage";
import { GROUPS } from "@/data/groups";
import { seoHead } from "@/lib/seo";

const group = GROUPS.find((g) => g.path === "/kryshki-dozatory")!;

export const Route = createFileRoute("/kryshki-dozatory")({
  head: () => seoHead(group.seoTitle, group.seoDescription, group.path),
  component: () => <CatalogGroupPage group={group} />,
});
