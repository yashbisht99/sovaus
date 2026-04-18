import { Link } from "react-router-dom";
import { CTA, SectionLabel } from "@/components/sova/Marketing";

const FEATURES = [
  ["Competitor tracking — 5 storefronts", true],
  ["Hourly catalog scans", true],
  ["Real-time pricing recommendations", true],
  ["What-if pricing simulator", true],
  ["One-click apply to Shopify", true],
  ["Assortment gap detection", true],
  ["Quarterly assortment score", true],
  ["AI launch brief generation", true],
  ["Weekly intelligence reports (PDF)", true],
  ["Live market feed", true],
  ["Ad creative library", true],
  ["Slack & email digests", true],
  ["Audit trail with rollback", true],
  ["SOC 2 Type II + GDPR", true],
  ["Email + chat support", true],
];

const FAQ = [
  ["How does Sova actually track competitors?", "We use a network of headless browsers in 14 countries to scan competitor catalogs hourly. Every product change is fingerprinted, diffed against history, and timelined. You see what changed, when, and what to do about it — within minutes."],
  ["Is this legal? Can my competitors block you?", "Yes. We only scan public storefront data, the same way Google does. We respect robots.txt and rate-limit aggressively. In four years, no merchant has ever been blocked from a competitor we monitor."],
  ["What does the Shopify integration do?", "Read access to your catalog and orders so we can rank impact. Write access — only when you click Apply — so we can push price changes. Every write is audited and reversible. We never touch customers, fulfillment, or finance."],
  ["What if I have more than 5 competitors?", "Tell us. 5 covers 92% of brands we work with. If you genuinely need more, we'll quote it case-by-case. We won't push you into a tier you don't need."],
  ["Why is this only $29 a month?", "Because the cost of running it for one more brand is essentially zero, and we'd rather have ten thousand happy operators than a hundred enterprise contracts. Pricing is the product."],
  ["What happens if I cancel?", "You stop being charged immediately. Your data is exported on request and deleted within 30 days. No hostage-taking. No retention call."],
];

export default function PricingPage() {
  return (
    <div>
      <section className="border-b border-ink-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gridline opacity-[0.3] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16 text-center">
          <div className="label-eyebrow text-amber-brand">PRICING · ONE PLAN</div>
          <h1 className="font-serif text-d1 mt-6" style={{ fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>
            $29 a month.<br /><span className="italic text-d2">No tiers. No surprises.</span>
          </h1>
          <p className="text-[17px] text-d2 mt-8 max-w-[600px] mx-auto leading-[1.55]">
            One plan. Everything included. We make pricing simple because our product is the opposite.
          </p>
        </div>
      </section>

      {/* Plan card */}
      <section className="bg-ink-0 border-b border-ink-2">
        <div className="max-w-[760px] mx-auto px-6 py-20">
          <div className="border border-ink-2 rounded-2xl bg-ink-1 overflow-hidden">
            <div className="p-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-serif text-d1" style={{ fontSize: 36 }}>Sova Growth</div>
                  <div className="label-eyebrow text-d4 mt-2">EVERYTHING. ONE PRICE.</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-d1 tnum" style={{ fontSize: 72, letterSpacing: "-0.025em", lineHeight: 1 }}>$29</span>
                  <span className="text-[16px] text-d3">/month</span>
                </div>
              </div>
              <Link to="/app" className="mt-8 block w-full text-center bg-amber-brand text-ink-1 font-semibold text-[15px] py-3.5 rounded-md hover:brightness-95 transition-[filter] duration-[80ms]">
                Start for $29/month →
              </Link>
              <p className="text-[12px] text-d4 text-center mt-4 label-mono">NO SETUP · CANCEL ANYTIME · 10-MIN INSTALL</p>
            </div>
            <div className="border-t border-ink-2 px-10 py-8 bg-ink-2/30">
              <div className="label-eyebrow text-d4 mb-5">WHAT'S INCLUDED</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {FEATURES.map(([f]) => (
                  <li key={f as string} className="flex items-start gap-2.5 text-[13px] text-d2">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0"><path d="M2 7.5L5.5 11L12 3.5" stroke="#E8A020" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compare with the alternative */}
      <section className="bg-ink-1 border-b border-ink-2">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <SectionLabel index="02" label="The actual cost comparison" />
          <h2 className="font-serif text-d1 mt-8 max-w-[760px]" style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            What competitive intelligence costs you today.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-2 border border-ink-2 rounded-lg overflow-hidden">
            {[
              { name: "DIY analyst", price: "$5,400 /mo", sub: "1 FTE @ $65k/yr fully loaded", items: ["Manual scraping", "Excel-based recs", "Monday meetings", "No execution"], tone: "muted" },
              { name: "Enterprise PI tool", price: "$3,800 /mo", sub: "Pricewatch / Engage3 / Wiser", items: ["Heavy onboarding", "Annual contract", "Slow data refresh", "No execution"], tone: "muted" },
              { name: "Sova Growth", price: "$29 /mo", sub: "Self-serve, monthly", items: ["Hourly scans", "AI recommendations", "Daily ranked actions", "One-click apply"], tone: "amber" },
            ].map((p) => (
              <div key={p.name} className={`p-8 ${p.tone === "amber" ? "bg-ink-1 ring-1 ring-amber-brand/30" : "bg-ink-1"}`}>
                <div className="font-serif text-d1" style={{ fontSize: 22 }}>{p.name}</div>
                <div className={`font-serif tnum mt-4 ${p.tone === "amber" ? "text-amber-brand" : "text-d1"}`} style={{ fontSize: 36, letterSpacing: "-0.02em" }}>{p.price}</div>
                <div className="text-[12px] text-d4 label-mono mt-1">{p.sub}</div>
                <ul className="mt-6 space-y-2.5 border-t border-ink-2 pt-5">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-d2">
                      <span className={p.tone === "amber" ? "text-amber-brand mt-0.5" : "text-d4 mt-0.5"}>→</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-0 border-b border-ink-2">
        <div className="max-w-[920px] mx-auto px-6 py-24">
          <SectionLabel index="03" label="Frequently asked" />
          <div className="mt-10 divide-y divide-ink-2 border-y border-ink-2">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group">
                <summary className="cursor-pointer py-6 flex items-start gap-6 list-none">
                  <span className="label-mono text-d4 mt-1">[?]</span>
                  <span className="flex-1 text-[18px] text-d1 font-medium">{q}</span>
                  <span className="text-d3 text-[20px] transition-transform group-open:rotate-45 select-none">+</span>
                </summary>
                <p className="text-[14px] text-d2 leading-[1.7] pb-6 pl-12 max-w-[680px]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-1">
        <div className="max-w-[1100px] mx-auto px-6 py-28 text-center">
          <h2 className="font-serif text-d1" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            $29 a month, forever.<br /><span className="italic text-amber-brand">Or until your competitors hire us first.</span>
          </h2>
          <div className="mt-10 flex items-center justify-center"><CTA /></div>
        </div>
      </section>
    </div>
  );
}
