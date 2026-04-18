import { TopBar } from "@/components/sova/Shell";
import { GlowCard, Sparkline, StatusPulse, MetricCard } from "@/components/sova/ui";

const PRIORITY = [
  { tag: "PRICING", title: "Drop Linen Trousers $148 → $139", reason: "COS now $134 · matches your H2 strategy", impact: "+$3,200/wk", confidence: 94, urgent: true },
  { tag: "INVENTORY", title: "Restock Merino Crew Neck", reason: "12 units left · 3-week mfg lead time", impact: "+$2,840/wk", confidence: 89, urgent: true },
  { tag: "ASSORTMENT", title: "Review Everlane's SS26 drop", reason: "12 SKUs in your gap categories", impact: "+$2,100 est.", confidence: 76, urgent: false },
];

const ACTIONS = [
  ["PRICING", "Match Reformation on Wool Topcoat — they dropped 12% Wed", "+$2,100/wk", 91],
  ["INVENTORY", "Pull underperforming Silk Camisole from homepage", "+$1,650/wk", 82],
  ["PRICING", "Raise Cashmere Sweater $189 → $204 — no competitor below", "+$1,420/wk", 88],
  ["MARKETING", "Email last week's cart abandoners — Everlane is on sale", "+$960/wk", 71],
  ["ASSORTMENT", "Promote Linen Shirt — Arket sold out of similar SKU", "+$780/wk", 79],
  ["PRICING", "Test +$8 on Wide-Leg Trouser — demand inelastic in segment", "+$640/wk", 67],
  ["INVENTORY", "Reorder Cotton Tee (Black) — 4 weeks of supply", "+$520/wk", 84],
];

const FEED = [
  ["12:42", "EVERLANE", "Cashmere Crew −15% to $128", "competitor", true],
  ["12:08", "SOVA", "Recommendation issued · 4 SKUs ready", "system", false],
  ["11:35", "COS", "Launched Heavyweight Wool Trouser ($175)", "competitor", true],
  ["10:18", "REFORMATION", "Restocked Linen Wide-Leg ×28 SKUs", "competitor", false],
  ["09:46", "ARKET", "12 SS26 arrivals · knits cluster", "competitor", false],
  ["09:14", "SOVA", "Weekly assortment score updated → 74", "system", false],
  ["08:22", "& OTHER STORIES", "Sitewide −20% promo started", "competitor", true],
  ["07:10", "EVERLANE", "ReNew Puffer back in stock (8 colors)", "competitor", false],
];

const TAG_COLORS: Record<string, string> = {
  PRICING: "border-amber-brand text-amber-brand bg-amber-brand/5",
  INVENTORY: "border-warning text-warning bg-warning/5",
  ASSORTMENT: "border-success-soft text-success-soft bg-success-soft/5",
  MARKETING: "border-divider-strong text-t3 bg-canvas-2",
};

const METRICS = [
  { n: "$184,320", l: "REVENUE THIS WEEK", d: "+12.4%", tone: "positive" as const, spark: [142,148,151,155,160,168,172,178,182,184,184,184] },
  { n: "$94", l: "AVERAGE ORDER VALUE", d: "+$4", tone: "positive" as const, spark: [88,89,90,90,91,92,93,93,94,94,94,94] },
  { n: "8", l: "NEW SKUs PERFORMING", d: "+3", tone: "positive" as const, spark: [3,4,4,5,5,6,6,7,7,8,8,8] },
  { n: "23", l: "COMPETITOR MOVES", d: "5 need review", tone: "warning" as const, spark: [12,14,15,17,18,19,20,21,22,23,23,23] },
];

export default function CommandCenter() {
  return (
    <div className="min-h-screen">
      <TopBar
        crumbs={["Maison Élan", "Command Center"]}
        actions={
          <button className="h-7 px-2.5 rounded-md text-[12px] text-t2 hover:text-t1 hover:bg-ink-2 transition-colors flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Friday · 18 Apr
          </button>
        }
      />

      <div className="max-w-[1280px] mx-auto px-8 py-8">
        {/* DIGEST HEADER */}
        <section className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-12 pb-10">
          <div>
            <div className="flex items-center gap-3 label-eyebrow text-t3">
              <span className="text-amber-brand">—</span>
              <span>FRIDAY, 18 APRIL 2026 · WEEK 16 · MAISON ÉLAN</span>
              <StatusPulse status="live" label="LIVE" className="ml-2" />
            </div>
            <h1 
              className="font-serif text-t1 mt-5 leading-[1.05]" 
              style={{ fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "-0.025em" }}
            >
              3 actions need your attention today.
            </h1>
            <p className="text-[15px] text-t2 mt-4 max-w-[580px] leading-[1.6]">
              Combined estimated impact:{" "}
              <span className="text-t1 tnum font-medium">+$8,140 / week</span>. 
              Sova has surfaced these from 23 competitor moves in the last 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-divider border border-divider rounded-xl overflow-hidden shadow-sm">
            {[
              ["18", "ALERTS"],
              ["3", "PRIORITY"],
              ["$8.1k", "IMPACT"],
            ].map(([n, l]) => (
              <div key={l} className="bg-canvas px-4 py-5 text-center hover:bg-canvas-2 transition-colors">
                <div 
                  className="font-serif text-t1 tnum" 
                  style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {n}
                </div>
                <div className="label-eyebrow text-t3 mt-2.5" style={{ fontSize: 9 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRIORITY CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {PRIORITY.map((p, i) => (
            <GlowCard 
              key={i} 
              className="group"
              glowColor={p.tag === "PRICING" ? "hsl(var(--amber))" : p.tag === "INVENTORY" ? "hsl(var(--warning))" : "hsl(var(--success-soft))"}
              borderRadius="0.75rem"
            >
              <article className="bg-canvas border border-divider rounded-xl p-6 h-full hover:border-divider-strong transition-all duration-200 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 label-mono uppercase border px-2 py-1 rounded text-[10px] ${TAG_COLORS[p.tag]}`}>
                    {p.urgent && <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />}
                    {p.tag}
                  </span>
                  <span className="label-mono text-t3 tnum bg-canvas-2 px-2 py-0.5 rounded">#{i + 1}</span>
                </div>
                <h3 
                  className="font-serif text-t1 mt-5 group-hover:text-amber-brand transition-colors" 
                  style={{ fontSize: 21, lineHeight: 1.25, letterSpacing: "-0.015em" }}
                >
                  {p.title}
                </h3>
                <p className="text-[13px] text-t2 mt-3 leading-[1.55]">{p.reason}</p>

                <div className="mt-6 pt-5 border-t border-divider flex items-center justify-between">
                  <div>
                    <div className="text-[17px] text-amber-brand tnum font-medium">{p.impact}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-1 w-16 bg-canvas-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-brand rounded-full transition-all duration-500"
                          style={{ width: `${p.confidence}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-t3 label-mono tnum">{p.confidence}%</span>
                    </div>
                  </div>
                  <button className="bg-ink-1 group-hover:bg-amber-brand group-hover:text-ink-1 text-d1 text-[12px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                    Execute
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M2.5 6h7m0 0L6 2.5m3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            </GlowCard>
          ))}
        </section>

        {/* COCKPIT METRICS */}
        <section className="mb-10">
          <div className="flex items-center gap-3 label-eyebrow text-t3 mb-5">
            <span className="text-amber-brand">[02]</span>
            <span>WEEKLY COCKPIT · WEEK 16</span>
            <span className="flex-1 border-t border-divider" />
            <span className="label-mono text-t3 normal-case">vs week 15</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-divider border border-divider rounded-xl overflow-hidden">
            {METRICS.map((m, i) => (
              <MetricCard
                key={i}
                value={m.n}
                label={m.l}
                delta={m.d}
                deltaType={m.tone}
                sparkline={m.spark}
                className="bg-canvas"
              />
            ))}
          </div>
        </section>

        {/* MAIN GRID: ACTIONS + FEED */}
        <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
          {/* Actions Table */}
          <div>
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-4">
              <span className="text-amber-brand">[03]</span>
              <span>IMPACT-RANKED ACTIONS</span>
              <span className="flex-1 border-t border-divider" />
              <span className="label-mono text-t3 normal-case">23 total</span>
            </div>

            <div className="border border-divider rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-[32px_88px_1fr_96px_56px_80px] items-center gap-3 px-4 py-3 bg-canvas-2 label-eyebrow text-t3 border-b border-divider" style={{ fontSize: 10 }}>
                <div>#</div>
                <div>TYPE</div>
                <div>ACTION</div>
                <div className="text-right">IMPACT</div>
                <div className="text-right">CONF</div>
                <div></div>
              </div>
              {ACTIONS.map(([type, title, impact, conf], i) => (
                <div
                  key={i}
                  className="grid grid-cols-[32px_88px_1fr_96px_56px_80px] items-center gap-3 px-4 py-3.5 border-t border-divider first:border-t-0 hover:bg-canvas-2 transition-colors duration-100 group cursor-pointer"
                >
                  <div className="text-[12px] text-t3 tnum font-mono">0{i + 1}</div>
                  <div>
                    <span className={`inline-block label-mono uppercase border px-1.5 py-0.5 rounded text-[9px] ${TAG_COLORS[type as string]}`}>
                      {type as string}
                    </span>
                  </div>
                  <div className="text-[13px] text-t1 truncate group-hover:text-amber-brand transition-colors">{title as string}</div>
                  <div className="text-[13px] text-amber-brand tnum text-right font-medium">{impact as string}</div>
                  <div className="text-[12px] text-t3 tnum text-right">{conf as number}%</div>
                  <div className="flex justify-end gap-1">
                    <button className="text-[11px] text-t3 hover:text-t1 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Skip</button>
                    <button className="text-[11px] bg-ink-1 text-d1 hover:bg-amber-brand hover:text-ink-1 transition-colors font-semibold px-2.5 py-1 rounded-md">Exec</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a href="#" className="text-[13px] text-amber-brand hover:underline flex items-center gap-1 group">
                View all 23 actions 
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <span className="text-[11px] text-t3 label-mono">SORTED BY IMPACT × CONFIDENCE</span>
            </div>
          </div>

          {/* Live Feed */}
          <div>
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-4">
              <span className="text-amber-brand">[04]</span>
              <span>LIVE MARKET FEED</span>
              <span className="flex-1 border-t border-divider" />
              <StatusPulse status="live" size="sm" />
              <span className="label-mono text-amber-brand normal-case ml-1">7 unread</span>
            </div>

            <div className="border border-divider rounded-xl overflow-hidden shadow-sm">
              {FEED.map(([time, brand, text, kind, isNew], i) => (
                <div 
                  key={i} 
                  className={`flex items-stretch gap-3 border-t border-divider first:border-t-0 hover:bg-canvas-2 transition-colors cursor-pointer group ${isNew ? "bg-amber-brand/[0.02]" : ""}`}
                >
                  <div className={`w-[3px] ${kind === "competitor" ? "bg-warning" : "bg-amber-brand"} group-hover:w-1 transition-all`} />
                  <div className="flex-1 py-3.5 pr-4 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="label-mono text-t3 tnum">{time}</span>
                      <span className="label-mono text-t1 font-medium">{brand}</span>
                      {isNew && (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-brand animate-pulse" />
                      )}
                    </div>
                    <div className="text-[13px] text-t1 mt-1 truncate group-hover:text-amber-brand transition-colors">{text}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="text-[13px] text-amber-brand hover:underline mt-4 inline-flex items-center gap-1 group">
              Open full feed 
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </section>

        {/* LAUNCH PIPELINE */}
        <section className="mt-12 -mx-8 px-8 py-10 bg-canvas-2 border-y border-divider">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-6">
              <span className="text-amber-brand">[05]</span>
              <span>LAUNCH PIPELINE</span>
              <span className="flex-1 border-t border-divider-strong" />
              <span className="label-mono text-t3 normal-case">3 in flight · 1 in planning</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { color: "#5B8A57", name: "SS26 Linen Capsule", status: "Live · launched 14 Apr", ctx: "$28,400 · 312 units", state: "active" },
                { color: "#E8A020", name: "Heavyweight Knits", status: "Drop scheduled · 25 Apr", ctx: "Brief approved · creative review", state: "queued" },
                { color: "#9E9890", name: "Resort Edit", status: "In planning · 8 May", ctx: "12 SKUs proposed · buyer review", state: "draft" },
                { color: "#9E9890", name: "Outerwear Refresh", status: "Concept · Q3 2026", ctx: "From whitespace analysis", state: "draft" },
              ].map((l, i) => (
                <GlowCard 
                  key={i} 
                  glowColor={l.color}
                  borderRadius="0.75rem"
                  className="group"
                >
                  <div className={`bg-canvas p-5 border border-divider rounded-xl hover:border-divider-strong transition-all duration-200 h-full ${l.state === "active" ? "ring-1 ring-success/30 ring-inset" : ""}`}>
                    <div className="flex items-center gap-2.5">
                      <span 
                        className={`h-2.5 w-2.5 rounded-full shrink-0 ${l.state === "active" ? "animate-pulse" : ""}`} 
                        style={{ background: l.color }} 
                      />
                      <span className="text-[14px] text-t1 font-medium group-hover:text-amber-brand transition-colors">{l.name}</span>
                    </div>
                    <div className="text-[12px] text-t2 mt-3">{l.status}</div>
                    <div className="text-[11px] text-t3 mt-2 tnum label-mono">{l.ctx}</div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
