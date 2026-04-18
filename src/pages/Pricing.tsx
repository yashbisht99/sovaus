import { TopBar, PageHeader } from "@/components/sova/Shell";

function Sparkline({ values, w = 64, h = 22 }: { values: number[]; w?: number; h?: number }) {
  const min = Math.min(...values), max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const line = pts.join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  return (
    <svg width={w} height={h}>
      <polygon points={area} fill="hsl(var(--amber) / 0.12)" />
      <polyline points={line} fill="none" stroke="hsl(var(--amber))" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ROWS = [
  { sku: "Linen Wide-Leg Trousers", code: "LIN-WLT-NVY", price: 148, range: "$128–$162", reco: 139, impact: "+$3,200", spark: [148,148,150,148,145,142,141,139,140,139,138,139], why: "Competitor pressure", conf: 94 },
  { sku: "Cashmere Crew Neck", code: "CSH-CRW-IVY", price: 189, range: "$128–$210", reco: 204, impact: "+$1,420", spark: [184,186,188,189,190,192,195,198,200,202,203,204], why: "Demand headroom", conf: 88 },
  { sku: "Wool Topcoat", code: "WOL-TOP-CHA", price: 385, range: "$340–$420", reco: 365, impact: "+$2,100", spark: [388,388,386,385,382,378,375,372,370,368,367,365], why: "Match Reformation", conf: 91 },
  { sku: "Merino Crew Sweater", code: "MER-CRW-OAT", price: 118, range: "$98–$140", reco: 118, impact: "—", spark: [115,116,118,118,118,118,118,118,118,118,118,118], why: "Hold — only 12 left", conf: 76 },
];

export default function Pricing() {
  return (
    <div>
      <TopBar crumbs={["Maison Élan", "Pricing"]} />
      <div className="max-w-[1240px] mx-auto px-8 py-8">
        {/* Banner */}
        <section className="bg-reco border border-divider rounded-lg p-7 flex items-center justify-between gap-6">
          <div>
            <div className="label-eyebrow text-t3">PENDING REVIEW · LAST 48H</div>
            <h1 className="font-serif text-t1 mt-2" style={{ fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              4 pricing recommendations waiting for review.
            </h1>
            <p className="text-[14px] text-t2 mt-2">
              Based on competitor moves in the past 48 hours · est. revenue impact{" "}
              <span className="text-t1 tnum font-medium">+$6,720 / week</span>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="h-8 px-3 text-[12.5px] text-t2 hover:text-t1 hover:bg-canvas-2 rounded-md transition-colors">Set rules</button>
            <button className="h-8 px-3.5 text-[12.5px] font-semibold text-ink-1 bg-amber-brand hover:brightness-95 rounded-md transition-[filter] flex items-center gap-1.5">
              Review all <span>→</span>
            </button>
          </div>
        </section>

        <div className="mt-10">
          <PageHeader
            eyebrow="PRICING AUTHORITY"
            title="Recommendations"
            sub="Per-SKU price recommendations with cited evidence and one-click apply to Shopify."
          />
        </div>

        {/* Table */}
        <div className="border border-divider rounded-lg overflow-hidden">
          <div className="grid grid-cols-[2fr_0.7fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr_1.1fr] items-center gap-3 px-4 py-3 bg-canvas-2 label-eyebrow text-t3" style={{ fontSize: 10 }}>
            <div>SKU</div><div className="text-right">PRICE</div><div className="text-right">COMP RANGE</div><div className="text-right">RECO</div><div className="text-right">IMPACT</div><div>30-DAY</div><div className="text-right">CONF</div><div className="text-right">ACTION</div>
          </div>
          {ROWS.map((r, i) => (
            <div key={i} className="grid grid-cols-[2fr_0.7fr_1fr_0.8fr_0.8fr_0.7fr_0.6fr_1.1fr] items-center gap-3 px-4 py-4 border-t border-divider hover:bg-canvas-2 transition-colors">
              <div>
                <div className="text-[13.5px] text-t1">{r.sku}</div>
                <div className="text-[11px] text-t3 mt-0.5 flex items-center gap-2">
                  <span className="label-mono">{r.code}</span>
                  <span>·</span>
                  <span>{r.why}</span>
                </div>
              </div>
              <div className="text-[13.5px] text-t1 tnum text-right">${r.price}</div>
              <div className="text-[12.5px] text-t2 tnum text-right">{r.range}</div>
              <div className="text-[14px] text-amber-brand font-medium tnum text-right">${r.reco}</div>
              <div className={`text-[13px] tnum text-right ${r.impact === "—" ? "text-t3" : "text-success"}`}>{r.impact}</div>
              <div><Sparkline values={r.spark} /></div>
              <div className="text-[12px] text-t3 tnum text-right">{r.conf}%</div>
              <div className="flex justify-end gap-1.5">
                <button className="text-[11.5px] text-t2 hover:text-t1 px-2.5 py-1.5 rounded-md hover:bg-canvas-3">Simulate</button>
                <button className="text-[11.5px] bg-ink-1 text-d1 hover:bg-amber-brand hover:text-ink-1 transition-colors font-semibold px-3 py-1.5 rounded-md">Apply</button>
              </div>
            </div>
          ))}
        </div>

        {/* Simulator */}
        <section className="mt-12 -mx-8 px-8 py-12 bg-canvas-2 border-y border-divider">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex items-end justify-between mb-7">
              <div>
                <div className="label-eyebrow text-t3">[02] WHAT-IF SIMULATOR</div>
                <h2 className="font-serif text-t1 mt-2.5" style={{ fontSize: 30, letterSpacing: "-0.02em" }}>Pricing Simulator</h2>
                <p className="text-[13.5px] text-t2 mt-2">Model the unit, revenue, and margin impact before pushing to Shopify.</p>
              </div>
              <button className="h-9 px-4 text-[13px] font-semibold text-ink-1 bg-amber-brand hover:brightness-95 rounded-md transition-[filter] flex items-center gap-2">
                Apply to Shopify <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2.4fr] gap-5 items-end">
              <div>
                <label className="label-eyebrow text-t3">SKU</label>
                <select className="mt-2 w-full bg-canvas border border-divider rounded-md px-3 h-10 text-[13.5px] text-t1">
                  <option>Linen Wide-Leg Trousers · LIN-WLT-NVY</option>
                  <option>Cashmere Crew Neck · CSH-CRW-IVY</option>
                  <option>Wool Topcoat · WOL-TOP-CHA</option>
                </select>
              </div>
              <div>
                <label className="label-eyebrow text-t3">NEW PRICE</label>
                <div className="mt-2 flex items-center bg-canvas border border-divider rounded-md h-10 px-3 focus-within:border-amber-brand transition-colors">
                  <span className="text-t3 text-[14px] mr-1">$</span>
                  <input defaultValue="139" className="bg-transparent text-[14px] text-t1 tnum w-full focus:outline-none" />
                  <span className="label-mono text-t3 ml-2">USD</span>
                </div>
              </div>

              <div className="grid grid-cols-3 border border-divider rounded-md bg-canvas overflow-hidden">
                {[
                  ["WEEKLY UNITS", "+18", "from 47", "ok"],
                  ["WEEKLY REVENUE", "+$3,200", "+12.4%", "ok"],
                  ["MARGIN IMPACT", "−2.1pt", "still 38.4%", "warn"],
                ].map(([l, v, sub, t], i) => (
                  <div key={i} className={`px-5 py-4 ${i > 0 ? "border-l border-divider" : ""}`}>
                    <div className="label-eyebrow text-t3" style={{ fontSize: 10 }}>{l}</div>
                    <div className={`font-serif tnum mt-2 ${t === "warn" ? "text-warning" : "text-t1"}`} style={{ fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1 }}>{v}</div>
                    <div className="text-[11px] text-t2 mt-1 tnum label-mono">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
