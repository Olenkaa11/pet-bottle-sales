const COUNTER_ID = 101026698;

export type Goal = "phone_click" | "whatsapp_click" | "telegram_click" | "form_submit" | "calc_click";

export function reachGoal(goal: Goal) {
  const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
  if (typeof ym === "function") ym(COUNTER_ID, "reachGoal", goal);
}

export function initLinkGoals() {
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    const href = a?.getAttribute("href") ?? "";
    if (href.startsWith("tel:")) reachGoal("phone_click");
    else if (href.includes("wa.me")) reachGoal("whatsapp_click");
    else if (href.includes("t.me")) reachGoal("telegram_click");
  });
}
