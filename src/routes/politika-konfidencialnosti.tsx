import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/politika-konfidencialnosti")({
  head: () => seoHead("Политика конфиденциальности | ПЭТ Тара", "Как сайт tara-packing.ru обрабатывает персональные данные, полученные из заявок.", "/politika-konfidencialnosti"),
  component: PrivacyPolicy,
});
