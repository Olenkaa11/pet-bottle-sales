import { createFileRoute } from "@tanstack/react-router";
import PetBanki from "@/pages/PetBanki";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/pet-banki")({
  head: () => seoHead("ПЭТ банки оптом — купить пластиковые банки с крышкой | ПЭТ Тара", "ПЭТ банки оптом от 50 до 500 мл с винтовой крышкой. Прозрачные пластиковые банки для косметики, бытовой химии, автохимии и других продуктов. Цены, характеристики, доставка по России.", "/pet-banki"),
  component: PetBanki,
});
