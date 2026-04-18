import { ProductPreviewDark } from "@/components/sova/ProductPreview";
import { CTA, SectionLabel } from "@/components/sova/Marketing";

const FEATURES = [
  {
    eyebrow: "01 / Command Center",
    title: "The 9am report, written by the market.",
    body: "Every morning, Sova ranks the day's most impactful actions. Numbered. Estimated impact. One-click execution. No dashboards to interpret.",
    bullets: ["Operator Digest with up to 5 priority actions", "Weekly cockpit: revenue, AOV, new SKUs, moves", "Live market feed with 7-color event types"],
  },
  {
    eyebrow: "02 / Competitors",
    title: "Five storefronts, one nervous system.",
    body: "Track up to five competitors. Sova scrapes their full catalog hourly, fingerprints every change, and timelines it. You see the move the moment it ships.",
    bullets: ["Hourly catalog diffing", "Ad creative library across Meta, TikTok, Google", "Health scoring per competitor — green to terracotta"],
  },
  {
    eyebrow: "03 / Pricing Authority",
    title: "Recommendations with cited evidence.",
    body: "Every price recommendation comes with a 30-day sparkline, a competitor range, an estimated impact, and the rule that triggered it. Apply or simulate — never blind.",
    bullets: ["Per-SKU price recommendations", "What-if simulator: units, revenue, margin", "One-click apply to Shopify with audit trail"],
  },
  {
    eyebrow: "04 / Assortment Intelligence",
    title: "Find the gaps your market already proved.",
    body: "Sova ranks whitespace by category demand intensity, surfaces rationalization candidates, and tracks your assortment score quarter over quarter.",
    bullets: ["Whitespace opportunities, ranked HIGH / MED / LOW", "Demand hotspots across 8 category clusters", "Tail-SKU rationalization candidates"],
  },
];

export default function Product() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-2">
        <div className="absolute inset-0 bg-gridline opacity-[0.3] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-20 text-center">
          <div className="label-eyebrow text-amber-brand">PRODUCT TOUR · v2.4</div>
          <h1 className="font-serif text-d1 mt-6" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            A precision instrument<br />for <span className="italic text-amber-brand">market control</span>.
          </h1>
          <p className="text-[17px] text-d2 mt-8 max-w-[640px] mx-auto leading-[1.55]">
            Four surfaces. One job: convert market motion into revenue, before the competition even publishes a press release.
          </p>
        </div>
      </section>

      {/* Feature deep-dives, alternating */}
      {FEATURES.map((f, i) => (
        <section key={f.title} className={`border-b border-ink-2 ${i % 2 === 0 ? "bg-ink-1" : "bg-ink-0"}`}>
          <div className="max-w-[1200px] mx-auto px-6 py-28">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <div className="label-eyebrow text-d4">{f.eyebrow}</div>
                <h2 className="font-serif text-d1 mt-4" style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                  {f.title}
                </h2>
                <p className="text-[16px] text-d2 mt-6 leading-[1.6]">{f.body}</p>
                <ul className="mt-8 space-y-3 border-t border-ink-2 pt-6">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] text-d2">
                      <span className="text-amber-brand mt-0.5">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <div style={{ transform: "scale(0.7)", transformOrigin: "center" }}>
                  <ProductPreviewDark />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Specs grid */}
      <section className="bg-ink-1 border-b border-ink-2">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <SectionLabel index="05" label="Under the hood" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-2 border border-ink-2">
            {[
              ["Hourly", "Scrape frequency"],
              ["1.2M", "SKUs monitored"],
              ["98.4%", "Scrape success rate"],
              ["4.2 min", "Median update lag"],
              ["SOC 2", "Type II compliant"],
              ["EU + US", "Data residency"],
              ["GDPR", "Native support"],
              ["99.97%", "Uptime, last 90 days"],
            ].map(([n, l], i) => (
              <div key={i} className="bg-ink-1 px-6 py-8">
                <div className="font-serif text-d1 tnum" style={{ fontSize: 36, letterSpacing: "-0.02em" }}>{n}</div>
                <div className="label-eyebrow text-d4 mt-3">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-0">
        <div className="max-w-[1100px] mx-auto px-6 py-28 text-center">
          <h2 className="font-serif text-d1" style={{ fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Ready in 10 minutes.<br /><span className="italic text-amber-brand">Worth it forever.</span>
          </h2>
          <div className="mt-10 flex items-center justify-center gap-3"><CTA /></div>
        </div>
      </section>
    </div>
  );
}
