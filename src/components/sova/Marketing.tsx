// Reusable primitives for marketing pages

export function Eyebrow({ children, tone = "amber" }: { children: React.ReactNode; tone?: "amber" | "muted" }) {
  return (
    <div className="inline-flex items-center gap-2 label-eyebrow">
      <span className={tone === "amber" ? "text-amber-brand" : "text-d4"}>—</span>
      <span className={tone === "amber" ? "text-amber-brand" : "text-d3"}>{children}</span>
    </div>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 label-mono text-d4">
      <span className="text-amber-brand">[{index}]</span>
      <span className="uppercase tracking-[0.14em]">{label}</span>
      <span className="flex-1 border-t border-ink-2" />
    </div>
  );
}

export function CTA({ to = "/app", children = "Start for $29/month", variant = "primary" }: { to?: string; children?: React.ReactNode; variant?: "primary" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <a href={to} className="inline-flex items-center gap-2 text-[13px] text-d1 hover:text-amber-brand transition-colors px-3.5 py-2.5 rounded-md border border-ink-1 hover:border-amber-brand">
        {children}
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6m0 0L5 2m3 3L5 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    );
  }
  return (
    <a href={to} className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-1 bg-amber-brand hover:brightness-95 px-4 py-2.5 rounded-md transition-[filter] duration-[80ms]">
      {children}
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6m0 0L5 2m3 3L5 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

export function LivePill() {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] text-d2 label-mono px-2.5 py-1 rounded-full border border-ink-1 bg-ink-2/60">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-brand opacity-50" style={{ animation: "sova-pulse 2.4s ease-in-out infinite" }} />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-brand" />
      </span>
      LIVE
    </span>
  );
}
