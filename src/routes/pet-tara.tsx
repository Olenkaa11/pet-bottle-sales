import { createFileRoute } from "@tanstack/react-router";
import PetTara from "@/pages/PetTara";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/pet-tara")({
  head: () => seoHead("ПЭТ тара оптом — банки и флаконы | ПЭТ Тара", "ПЭТ тара оптом и в розницу: банки и флаконы для косметики и бытовой химии. ПЭТ упаковка от производителя со склада в СПб, доставка по России. Купить ПЭТ тару по выгодным ценам.", "/pet-tara"),
  component: PetTara,
});
