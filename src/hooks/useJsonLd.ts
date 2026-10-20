import { useEffect } from "react";

export function useJsonLd(id: string, data: object | null) {
  useEffect(() => {
    document.getElementById(id)?.remove();
    if (!data) return;
    const el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => el.remove();
  }, [id, data]);
}
