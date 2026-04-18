import { CTA, SectionLabel } from "@/components/sova/Marketing";

const STORIES = [
  {
    brand: "Maison Élan",
    sector: "Premium DTC apparel · Stockholm",
    headline: "$184k of weekly revenue, defended.",
    quote: "We replaced a 4-person competitive analyst function with Sova. The pricing recommendations alone paid for the year in the first 11 days.",
    person: "Elin Magnusson",
    role: "Head of Merchandising",
    metrics: [["+12.4%", "weekly revenue"], ["$42k", "protected last quarter"], ["3", "actions per morning"]],
  },
  {
    brand: "Sundae",
    sector: "Resort & swim · Lisbon",
    headline: "Caught a competitor's launch 6 days early.",
    quote: "Sova's market feed surfaced a competitor restocking our exact silhouette before they'd even posted on social. We adjusted inventory the same hour.",
    person: "Tomás Reis",
    role: "Founder",
    metrics: [["6 days", "early-warning lead time"], ["28", "SKUs repriced"], ["+18%", "sell-through"]],
  },
  {
    brand: "Stillwater",
    sector: "Performance basics · Brooklyn",
    headline: "From spreadsheet hell to one-click ops.",
    quote: "We had four people maintaining a competitor pricing sheet. Now Sova does it hourly and they ship product instead.",
    person: "Naomi Park",
    role: "VP Operations",
    metrics: [["4 → 0", "FTEs on competitor tracking"], ["$210k", "annual cost saved"], ["100%", "team retention"]],
  },
];

export default function Customers() {
  return (
    <div>
      <section className="border-b border-ink-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gridline opacity-[0.3]" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-20 text-center">
          <div className="label-eyebrow text-amber-brand">CUSTOMERS</div>
          <h1 className="font-serif text-d1 mt-6" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            Operators who'd rather<br /><span className="italic text-amber-brand">ship than scroll.</span>
          </h1>
          <p className="text-[17px] text-d2 mt-8 max-w-[620px] mx-auto leading-[1.55]">
            Three hundred and sixty Shopify brands run their morning on Sova. These are some of their stories.
          </p>
        </div>
      </section>

      {/* Aggregate metrics */}
      <section className="bg-ink-1 border-b border-ink-2">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-2 border-y border-ink-2">
            {[
              ["360", "Brands on Sova"],
              ["$42M", "Revenue protected / Q1"],
              ["1.2M", "SKUs monitored daily"],
              ["97 NPS", "Customer satisfaction"],
            ].map(([n, l], i) => (
              <div key={i} className="px-6 py-10">
                <div className="font-serif text-d1 tnum" style={{ fontSize: 44, letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
                <div className="label-eyebrow text-d4 mt-3">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      {STORIES.map((s, i) => (
        <section key={s.brand} className={`border-b border-ink-2 ${i % 2 === 0 ? "bg-ink-1" : "bg-ink-0"}`}>
          <div className="max-w-[1200px] mx-auto px-6 py-24">
            <SectionLabel index={`0${i + 1}`} label={s.brand} />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 items-start">
              <div>
                <div className="label-eyebrow text-d4">{s.sector}</div>
                <h2 className="font-serif text-d1 mt-5" style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  {s.headline}
                </h2>
                <blockquote className="font-serif text-d2 mt-8 italic" style={{ fontSize: 22, lineHeight: 1.4 }}>
                  <span className="text-amber-brand not-italic">"</span>{s.quote}<span className="text-amber-brand not-italic">"</span>
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-canvas-3 text-ink-1 text-[12px] flex items-center justify-center font-medium">
                    {s.person.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[14px] text-d1">{s.person}</div>
                    <div className="text-[12px] text-d4 label-mono">{s.role.toUpperCase()} · {s.brand.toUpperCase()}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px bg-ink-2 border border-ink-2 rounded-lg overflow-hidden">
                {s.metrics.map(([n, l]) => (
                  <div key={l} className="bg-ink-1 px-6 py-8">
                    <div className="font-serif text-amber-brand tnum" style={{ fontSize: 44, letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
                    <div className="label-eyebrow text-d4 mt-3">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink-1">
        <div className="max-w-[1100px] mx-auto px-6 py-28 text-center">
          <h2 className="font-serif text-d1" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Be the next story<br /><span className="italic text-amber-brand">we publish here.</span>
          </h2>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>
    </div>
  );
}
