import { createFileRoute } from "@tanstack/react-router";
import PetFlakony from "@/pages/PetFlakony";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/pet-flakony")({
  head: () => seoHead("ПЭТ флаконы оптом — пластиковые флаконы с распылителем купить | ПЭТ Тара", "ПЭТ флаконы оптом от 30 до 150 мл с распылителем-спреем и пенообразователем. Пластиковые флаконы для косметики, парфюмерии и бытовой химии. Цены, характеристики, доставка по России.", "/pet-flakony"),
  component: PetFlakony,
});
