interface StatusPulseProps {
  status?: "live" | "warning" | "success" | "inactive";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const STATUS_COLORS = {
  live: "hsl(var(--amber))",
  warning: "hsl(var(--warning))",
  success: "hsl(117 25% 45%)",
  inactive: "hsl(0 0% 40%)",
};

const SIZES = {
  sm: { dot: "h-1 w-1", ring: "h-2 w-2" },
  md: { dot: "h-1.5 w-1.5", ring: "h-2.5 w-2.5" },
  lg: { dot: "h-2 w-2", ring: "h-3 w-3" },
};

export function StatusPulse({
  status = "live",
  size = "md",
  label,
  className = "",
}: StatusPulseProps) {
  const color = STATUS_COLORS[status];
  const sizeClass = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="relative inline-flex">
        {status !== "inactive" && (
          <span
            className={`absolute inline-flex ${sizeClass.ring} rounded-full opacity-50`}
            style={{
              background: color,
              animation: "sova-pulse 2.4s ease-in-out infinite",
            }}
          />
        )}
        <span
          className={`relative inline-flex rounded-full ${sizeClass.dot}`}
          style={{ background: color }}
        />
      </span>
      {label && (
        <span className="label-mono text-t3" style={{ fontSize: size === "sm" ? 9 : size === "md" ? 10 : 11 }}>
          {label}
        </span>
      )}
    </span>
  );
}
