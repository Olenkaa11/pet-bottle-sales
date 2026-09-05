interface LogoProps {
  size?: "default" | "small";
}

export default function Logo({ size = "default" }: LogoProps) {
  const boxSize = size === "small" ? "w-7 h-7" : "w-8 h-8";
  const boxText = size === "small" ? "text-xs" : "text-sm";
  const titleText = size === "small" ? "text-sm" : "text-lg";

  return (
    <div className="flex items-center gap-3">
      <div className={`${boxSize} bg-[hsl(var(--primary))] rounded-sm flex items-center justify-center shrink-0`}>
        <span className={`text-white ${boxText} font-bold`} style={{ fontFamily: "Oswald, sans-serif" }}>TP</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-semibold ${titleText} tracking-wide`} style={{ fontFamily: "Oswald, sans-serif" }}>Tara-packing</span>
        <span className="text-[10px] text-[#999] tracking-[0.15em] uppercase mt-0.5">ПЭТ Тара</span>
      </div>
    </div>
  );
}
