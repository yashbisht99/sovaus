import { TopBar, PageHeader } from "@/components/sova/Shell";

function ScoreArc({ value }: { value: number }) {
  const size = 220, stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="hsl(var(--divider))" strokeWidth={stroke} fill="none" />
      <circle cx={size / 2} cy={size / 2} r={r} stroke="hsl(var(--amber))" strokeWidth={stroke} fill="none" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} strokeLinecap="round" />
    </svg>
  );
}

const WHITESPACE = [
  ["Heavyweight Wool Outerwear", "4 of 5 competitors carry", "HIGH", "$1.4M est."],
  ["Linen Co-ord Sets", "5 of 5 competitors carry", "HIGH", "$980k est."],
  ["Cashmere Loungewear", "3 of 5 competitors carry", "MED", "$640k est."],
  ["Recycled Denim", "4 of 5 competitors carry", "MED", "$520k est."],
  ["Resort-weight Knits", "2 of 5 competitors carry", "MED", "$380k est."],
];

const HOTSPOTS: [string, number][] = [
  ["Linen", 92], ["Knits", 78], ["Outerwear", 71], ["Denim", 64],
  ["Tailoring", 58], ["Loungewear", 49], ["Accessories", 38], ["Footwear", 22],
];

const RATIONALIZE = [
  ["Silk Camisole — Ivory", "SLK-CAM-IVY", "0.4%", "1.8%", "warn"],
  ["Linen Tank — White", "LIN-TNK-WHT", "0.6%", "1.4%", "warn"],
  ["Cotton Blazer — Navy", "COT-BLZ-NVY", "1.1%", "1.2%", "warn"],
  ["Cropped Tee — Black", "CRP-TEE-BLK", "0.9%", "0.8%", "ok"],
  ["Wide Belt — Tan", "WID-BLT-TAN", "1.4%", "0.6%", "ok"],
];

export default function Assortment() {
  return (
    <div>
      <TopBar crumbs={["Maison Élan", "Assortment"]} />
      <div className="max-w-[1240px] mx-auto px-8 py-8">
        <PageHeader
          eyebrow="ASSORTMENT INTELLIGENCE · Q2 2026"
          title="Where your catalog stands."
          sub="Whitespace, demand hotspots, and rationalization candidates — refreshed weekly from market and search signals."
        />

        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center py-6">
          <div className="flex items-center gap-8">
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
              <ScoreArc value={74} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-serif text-t1 leading-none tnum" style={{ fontSize: 92, letterSpacing: "-0.04em" }}>74</div>
                <div className="text-[13px] text-t3 mt-1 tnum">/ 100</div>
              </div>
            </div>
            <div>
              <div className="label-eyebrow text-t3">ASSORTMENT SCORE</div>
              <div className="text-[12.5px] text-success mt-2 tnum">↑ +6 vs Q1 2026</div>
              <div className="text-[12.5px] text-t3 mt-1 tnum label-mono">VS PEER MEDIAN: 68</div>
            </div>
          </div>

          <div>
            <p className="font-serif text-t1" style={{ fontSize: 24, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
              You're outperforming on knits and tailoring, but trailing four of five competitors in heavyweight outerwear and linen co-ords.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                ["+", "Knits depth: 23% above category median", "ok"],
                ["+", "Tailoring breadth: 18 SKUs vs peer avg 12", "ok"],
                ["−", "Outerwear: 4 of 5 competitors carry, you don't", "warn"],
              ].map(([sign, txt, t], i) => (
                <li key={i} className="flex gap-3 text-[13.5px] text-t1">
                  <span className={`tnum w-3 ${t === "warn" ? "text-warning" : "text-success"}`}>{sign}</span>
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THREE COLUMN ANALYSIS */}
        <section className="mt-10 -mx-8 grid grid-cols-1 md:grid-cols-3 border-y border-divider">
          {/* Whitespace */}
          <div className="bg-canvas px-8 py-10 border-r border-divider">
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-2">
              <span className="text-amber-brand">[01]</span>
              <span>WHITESPACE</span>
            </div>
            <h2 className="font-serif text-t1" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>Opportunities</h2>
            <p className="text-[12px] text-t2 mt-1.5">Categories your competitors carry and you don't.</p>
            <ol className="mt-5">
              {WHITESPACE.map(([cat, ctx, demand, est], i) => (
                <li key={i} className="flex items-start gap-3 py-3.5 border-t border-divider">
                  <span className="text-[11px] text-t3 tnum w-5 mt-1 font-mono">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="text-[13.5px] text-t1">{cat}</div>
                    <div className="text-[11px] text-t3 mt-0.5 tnum">{ctx} · <span className="text-t2">{est}</span></div>
                  </div>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${demand === "HIGH" ? "bg-amber-brand text-ink-1" : "border border-amber-brand text-amber-brand"}`}>{demand}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Hotspots */}
          <div className="bg-canvas-2 px-8 py-10 border-r border-divider">
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-2">
              <span className="text-amber-brand">[02]</span>
              <span>DEMAND HOTSPOTS</span>
            </div>
            <h2 className="font-serif text-t1" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>Market index</h2>
            <p className="text-[12px] text-t2 mt-1.5">Search & ad demand index across the market.</p>
            <div className="mt-6 space-y-3">
              {HOTSPOTS.map(([cat, val]) => (
                <div key={cat} className="flex items-center gap-3">
                  <div className="w-[88px] text-[12.5px] text-t1">{cat}</div>
                  <div className="flex-1 h-[6px] bg-canvas rounded-sm overflow-hidden">
                    <div className="h-full bg-amber-brand" style={{ width: `${val}%` }} />
                  </div>
                  <div className="w-9 text-right text-[11.5px] text-t2 tnum label-mono">{val}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rationalization */}
          <div className="bg-canvas px-8 py-10">
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-2">
              <span className="text-amber-brand">[03]</span>
              <span>RATIONALIZATION</span>
            </div>
            <h2 className="font-serif text-t1" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>Tail-SKU candidates</h2>
            <p className="text-[12px] text-t2 mt-1.5">SKUs where cost share exceeds revenue share.</p>
            <div className="mt-5">
              <div className="grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr] label-eyebrow text-t3 pb-2 border-b border-divider" style={{ fontSize: 9 }}>
                <div>SKU</div><div className="text-right">REV%</div><div className="text-right">COST%</div><div className="text-right">ACTION</div>
              </div>
              {RATIONALIZE.map(([sku, code, rev, cost, state], i) => (
                <div key={i} className={`grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr] items-center py-3 border-b border-divider ${state === "warn" ? "border-l-2 border-l-warning -ml-2 pl-2" : ""}`}>
                  <div>
                    <div className="text-[13px] text-t1 truncate">{sku}</div>
                    <div className="text-[10px] text-t3 label-mono">{code}</div>
                  </div>
                  <div className="text-[12px] text-t2 tnum text-right">{rev}</div>
                  <div className={`text-[12px] tnum text-right ${state === "warn" ? "text-warning" : "text-t2"}`}>{cost}</div>
                  <button className="text-[11px] text-amber-brand hover:underline text-right">Pull →</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
