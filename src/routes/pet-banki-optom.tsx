import { createFileRoute } from "@tanstack/react-router";
import Wholesale from "@/pages/Wholesale";
import { seoHead } from "@/lib/seo";

const base = seoHead(
  "ПЭТ банки оптом от производителя — оптовый прайс | ПЭТ Тара",
  "Оптовый прайс на ПЭТ банки от 50 до 500 мл. Оставьте заявку — рассчитаем стоимость партии с доставкой по Санкт-Петербургу и всей России.",
  "/pet-banki-optom",
);

export const Route = createFileRoute("/pet-banki-optom")({
  head: () => ({
    meta: [
      ...base.meta.filter((m) => !("title" in m) && !("name" in m && m.name === "description")),
      { title: "ПЭТ-банки оптом — купить пластиковые банки от производителя | ПЭТ Тара" },
      {
        name: "description",
        content:
          "ПЭТ-банки оптом от 50 до 500 мл для косметики, бытовой химии, автохимии и других продуктов. Различные варианты крышек и цветов. Отправьте заявку — рассчитаем стоимость.",
      },
    ],
    links: base.links,
  }),
  component: Wholesale,
});
