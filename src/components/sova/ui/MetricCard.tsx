import { Sparkline } from "./Sparkline";

interface MetricCardProps {
  value: string;
  label: string;
  delta?: string;
  deltaType?: "positive" | "negative" | "neutral" | "warning";
  sparkline?: number[];
  className?: string;
}

export function MetricCard({
  value,
  label,
  delta,
  deltaType = "neutral",
  sparkline,
  className = "",
}: MetricCardProps) {
  const deltaColors = {
    positive: "text-success",
    negative: "text-warning",
    neutral: "text-t3",
    warning: "text-warning",
  };

  const deltaIcon = {
    positive: "↑",
    negative: "↓",
    neutral: "→",
    warning: "●",
  };

  return (
    <div className={`group px-6 py-6 transition-colors duration-150 hover:bg-canvas-2 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <div
          className="font-serif text-t1 tnum transition-transform duration-200 group-hover:scale-[1.02] origin-left"
          style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          {value}
        </div>
        {sparkline && (
          <Sparkline
            values={sparkline}
            width={72}
            height={28}
            showDot
            animated
          />
        )}
      </div>
      <div className="label-eyebrow text-t3 mt-4" style={{ fontSize: 10 }}>
        {label}
      </div>
      {delta && (
        <div className={`text-[12px] mt-1.5 tnum flex items-center gap-1 ${deltaColors[deltaType]}`}>
          <span>{deltaIcon[deltaType]}</span>
          <span>{delta}</span>
        </div>
      )}
    </div>
  );
}
