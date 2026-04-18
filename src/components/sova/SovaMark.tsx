export function SovaMark({ size = 20, className = "" }: { size?: number; className?: string }) {
  // 2x2 grid of circles, three near-black, one warm amber bottom-left
  const r = size / 2;
  const gap = size * 0.12;
  const c = (r - gap) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      {/* top-left */}
      <circle cx={c + gap / 2} cy={c + gap / 2} r={c} fill="#141414" />
      {/* top-right */}
      <circle cx={size - c - gap / 2} cy={c + gap / 2} r={c} fill="#141414" />
      {/* bottom-left — amber */}
      <circle cx={c + gap / 2} cy={size - c - gap / 2} r={c} fill="#E8A020" />
      {/* bottom-right */}
      <circle cx={size - c - gap / 2} cy={size - c - gap / 2} r={c} fill="#141414" />
    </svg>
  );
}

export function SovaMarkOnDark({ size = 20, className = "" }: { size?: number; className?: string }) {
  const r = size / 2;
  const gap = size * 0.12;
  const c = (r - gap) / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <circle cx={c + gap / 2} cy={c + gap / 2} r={c} fill="#F7F5F1" />
      <circle cx={size - c - gap / 2} cy={c + gap / 2} r={c} fill="#F7F5F1" />
      <circle cx={c + gap / 2} cy={size - c - gap / 2} r={c} fill="#E8A020" />
      <circle cx={size - c - gap / 2} cy={size - c - gap / 2} r={c} fill="#F7F5F1" />
    </svg>
  );
}
