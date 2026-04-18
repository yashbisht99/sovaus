import { Link } from "react-router-dom";
import { ProductPreviewDark } from "@/components/sova/ProductPreview";
import { LogoWall } from "@/components/sova/LogoWall";
import { CTA, LivePill, SectionLabel } from "@/components/sova/Marketing";
import { LazyMarketScene } from "@/components/sova/three/LazyMarketScene";

const TICKER = [
  ["EVERLANE", "Cashmere Crew −15%", "12m"],
  ["COS", "Launched Wool Trouser ($175)", "1h"],
  ["REFORMATION", "Restocked Linen Wide-Leg ×28", "2h"],
  ["ARKET", "12 SS26 arrivals · knits", "4h"],
  ["& OTHER STORIES", "Sitewide −20% promo", "6h"],
  ["EVERLANE", "ReNew Puffer back in stock", "8h"],
  ["COS", "Editorial · SS26 lookbook live", "1d"],
];

export default function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-1">
        {/* 3D market-intelligence scene (pointer-events-none so hero CTAs stay clickable) */}
        <LazyMarketScene className="absolute inset-0 pointer-events-none [&>canvas]:!block" density="hero" />
        {/* Subtle overlay to deepen the edges & lift the copy */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(13,13,13,0) 0%, rgba(13,13,13,0.35) 55%, rgba(13,13,13,0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gridline opacity-[0.12] pointer-events-none mix-blend-screen" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-20">
          <div className="flex flex-col items-center text-center reveal-up">
            <LivePill />
            <h1 className="font-serif text-d1 mt-7" style={{ fontSize: "clamp(56px, 8vw, 104px)", lineHeight: 0.96, letterSpacing: "-0.035em" }}>
              Your market <span className="italic text-amber-brand">watches</span> itself.
            </h1>
            <p className="text-[17px] md:text-[18px] text-d2 mt-7 max-w-[620px] leading-[1.55]">
              Sova tracks every price, launch, and stockout across your competitors —
              then tells your operators exactly what to do, every morning, before 9am.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <CTA>Start for $29/month</CTA>
              <CTA variant="ghost" to="/product">See the product</CTA>
            </div>
            <div className="mt-5 flex items-center gap-5 text-[12px] text-d4 label-mono">
              <span>NO SETUP FEE</span>
              <span className="h-1 w-1 rounded-full bg-d4 inline-block" />
              <span>CANCEL ANYTIME</span>
              <span className="h-1 w-1 rounded-full bg-d4 inline-block" />
              <span>10 MIN TO CONNECT</span>
            </div>
          </div>

          {/* Product preview — perspective tilted */}
          <div className="mt-20 flex justify-center reveal-up" style={{ animationDelay: "120ms" }}>
            <div
              className="relative"
              style={{
                transform: "perspective(2400px) rotateX(18deg) scale(0.86)",
                transformOrigin: "center top",
              }}
            >
              <ProductPreviewDark />
              {/* Amber glow underlay */}
              <div className="absolute -inset-x-20 -bottom-32 h-64 bg-amber-brand/20 blur-[120px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <section className="border-y border-ink-2 bg-ink-2/40 overflow-hidden py-3 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-1 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-1 to-transparent z-10 pointer-events-none" />
        <div className="flex ticker gap-10 whitespace-nowrap">
          {[...TICKER, ...TICKER, ...TICKER].map((ev, i) => (
            <div key={i} className="flex items-center gap-3 text-[12px] shrink-0">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-brand opacity-50" style={{ animation: "sova-pulse 2.4s ease-in-out infinite" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-brand" />
              </span>
              <span className="label-mono text-d4">{ev[0]}</span>
              <span className="text-d2">{ev[1]}</span>
              <span className="text-d4 label-mono">{ev[2]} ago</span>
              <span className="text-d4 mx-2">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-ink-1">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink-2 border-y border-ink-2">
            {[
              ["$42M", "in revenue protected across our customer base last quarter"],
              ["1.2M+", "competitor SKUs monitored every day, in 14 countries"],
              ["3 sec", "median time to surface the most important action of the day"],
            ].map(([n, l], i) => (
              <div key={i} className="px-8 py-12">
                <div className="font-serif text-d1 tnum" style={{ fontSize: 64, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
                  {n}
                </div>
                <p className="text-[14px] text-d3 mt-4 leading-[1.55] max-w-[280px]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <LogoWall />

      {/* THREE PILLARS */}
      <section className="bg-ink-1">
        <div className="max-w-[1200px] mx-auto px-6 py-28">
          <SectionLabel index="01" label="What Sova does" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-end">
            <h2 className="font-serif text-d1" style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.025em" }}>
              Three jobs.<br /><span className="italic text-d2">Done before coffee.</span>
            </h2>
            <p className="text-[16px] text-d2 leading-[1.6] max-w-[460px]">
              Sova replaces the 6 spreadsheets, 4 browser tabs, and 2 hours of Monday meetings most DTC brands burn trying to keep up with their market.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-2">
            {[
              {
                eyebrow: "01 / Intelligence",
                title: "Competitor Intelligence",
                body: "Know everything your competitors change before it impacts your revenue. Prices, launches, restocks, ad creative, promos — tracked hourly, surfaced weekly.",
                bullets: ["Hourly price scans across 5 storefronts", "Weekly launch & restock reports", "Ad creative library, by competitor"],
              },
              {
                eyebrow: "02 / Pricing",
                title: "Pricing Authority",
                body: "AI-generated price recommendations with one-click execution into Shopify. Every recommendation cites its evidence — never blind, never guessed.",
                bullets: ["Per-SKU recommendations with cited evidence", "What-if simulator before you ship", "One-click apply to Shopify, with rollback"],
              },
              {
                eyebrow: "03 / Assortment",
                title: "Assortment Intelligence",
                body: "Find the product gaps your competitors already proved are profitable. Sova ranks whitespace by category demand, not gut feel.",
                bullets: ["Whitespace ranked by demand intensity", "Rationalization candidates for your tail SKUs", "Quarterly assortment score, tracked over time"],
              },
            ].map((p) => (
              <div key={p.title} className="bg-ink-1 p-8 hover:bg-ink-2 transition-colors duration-150 group">
                <div className="label-eyebrow text-d4">{p.eyebrow}</div>
                <h3 className="font-serif text-d1 mt-5" style={{ fontSize: 28, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{p.title}</h3>
                <p className="text-[14px] text-d2 mt-4 leading-[1.6]">{p.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-ink-2 pt-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[13px] text-d2">
                      <span className="text-amber-brand mt-1 shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATOR DAY — split feature */}
      <section className="bg-ink-0 border-y border-ink-2">
        <div className="max-w-[1200px] mx-auto px-6 py-28">
          <SectionLabel index="02" label="A morning with Sova" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-start">
            <div className="md:sticky md:top-24">
              <h2 className="font-serif text-d1" style={{ fontSize: 52, lineHeight: 1.02, letterSpacing: "-0.025em" }}>
                Designed for the<br />operator at <span className="italic text-amber-brand">9am</span>.
              </h2>
              <p className="text-[16px] text-d2 mt-7 leading-[1.6] max-w-[420px]">
                Every screen answers <span className="text-d1">"what do I do right now and why"</span> in under three seconds. Data without context is decoration — Sova never serves it.
              </p>

              <div className="mt-10 space-y-px bg-ink-2 border border-ink-2 rounded-lg overflow-hidden">
                {[
                  ["08:42", "Sova surfaces 3 priority actions for the day"],
                  ["08:43", "You execute the first: drop Linen Trousers $148 → $139"],
                  ["08:44", "Sova writes the change to Shopify, audits, confirms"],
                  ["08:46", "You skim the live feed: 7 alerts, all triaged"],
                  ["08:51", "Coffee. Done."],
                ].map(([t, e], i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3.5 bg-ink-1">
                    <span className="label-mono text-amber-brand tnum">{t}</span>
                    <span className="text-[13px] text-d2">{e}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <div style={{ transform: "scale(0.78)", transformOrigin: "top right" }}>
                <ProductPreviewDark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-ink-1 border-b border-ink-2">
        <div className="max-w-[1000px] mx-auto px-6 py-28 text-center">
          <SectionLabel index="03" label="From the operators" />
          <blockquote className="font-serif text-d1 mt-10" style={{ fontSize: 40, lineHeight: 1.2, letterSpacing: "-0.015em" }}>
            <span className="text-amber-brand">"</span>We replaced a 4-person competitive analyst function with Sova. The pricing recommendations alone paid for the year in the first 11 days.<span className="text-amber-brand">"</span>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-canvas-3 text-ink-1 text-[12px] flex items-center justify-center font-medium">EM</div>
            <div className="text-left">
              <div className="text-[14px] text-d1">Elin Magnusson</div>
              <div className="text-[12px] text-d3 label-mono">HEAD OF MERCHANDISING · MAISON ÉLAN</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON / WHAT IT REPLACES */}
      <section className="bg-ink-1">
        <div className="max-w-[1200px] mx-auto px-6 py-28">
          <SectionLabel index="04" label="What it replaces" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-d1" style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Stop paying for tools<br />that show you data.
              </h2>
              <p className="text-[15px] text-d2 mt-6 leading-[1.6] max-w-[440px]">
                Sova is the first market intelligence platform built for execution, not contemplation. Every number leads to a button.
              </p>
              <div className="mt-8">
                <CTA>Start for $29/month</CTA>
              </div>
            </div>

            <div className="border border-ink-2 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 label-eyebrow text-d4 px-5 py-3 border-b border-ink-2 bg-ink-2/40">
                <div>What you have today</div>
                <div>What Sova replaces it with</div>
              </div>
              {[
                ["6 browser tabs of competitor sites", "Live feed, hourly scan"],
                ["Spreadsheet of competitor prices", "Auto-cited price recommendations"],
                ["Monday meeting to triage priorities", "3 actions ranked by impact, every day"],
                ["Gut-feel SKU range planning", "Whitespace ranked by demand"],
                ["Manual Shopify price updates", "One-click apply with rollback"],
              ].map(([a, b], i) => (
                <div key={i} className="grid grid-cols-2 px-5 py-3.5 border-b border-ink-2 last:border-0 text-[13px]">
                  <div className="text-d3 line-through decoration-warning/60">{a}</div>
                  <div className="text-d1 flex items-start gap-2"><span className="text-amber-brand mt-0.5">→</span>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TEASE */}
      <section className="bg-ink-0 border-y border-ink-2">
        <div className="max-w-[1200px] mx-auto px-6 py-28">
          <SectionLabel index="05" label="Pricing" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-end">
            <div>
              <h2 className="font-serif text-d1" style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.03em" }}>
                One plan.<br /><span className="italic text-amber-brand">$29 a month.</span>
              </h2>
              <p className="text-[15px] text-d2 mt-6 leading-[1.6] max-w-[420px]">
                No seat limits. No upsells. No "Contact us." If you outgrow it, we'll tell you — most brands never do.
              </p>
            </div>

            <div className="border border-ink-2 rounded-xl bg-ink-1 p-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-serif text-d1" style={{ fontSize: 32 }}>Sova Growth</div>
                  <div className="text-[12px] text-d4 label-mono mt-1">EVERYTHING. INCLUDED.</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-d1 tnum" style={{ fontSize: 56, letterSpacing: "-0.02em", lineHeight: 1 }}>$29</span>
                  <span className="text-[14px] text-d3">/mo</span>
                </div>
              </div>
              <div className="border-t border-ink-2 my-6" />
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Competitor tracking — 5 storefronts",
                  "Real-time pricing recommendations",
                  "Assortment gap detection",
                  "AI launch brief generation",
                  "Weekly intelligence reports",
                  "Shopify one-click apply + rollback",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-d2">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0"><path d="M2 7.5L5.5 11L12 3.5" stroke="#E8A020" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/app" className="mt-8 block w-full text-center bg-amber-brand text-ink-1 font-semibold text-[14px] py-3 rounded-md hover:brightness-95 transition-[filter] duration-[80ms]">
                Start for $29/month →
              </Link>
              <p className="text-[11px] text-d4 text-center mt-4 label-mono">NO SETUP · CANCEL ANYTIME · 10-MIN INSTALL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-ink-1 relative overflow-hidden">
        <LazyMarketScene className="absolute inset-0 pointer-events-none opacity-80 [&>canvas]:!block" density="subtle" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.75) 60%, rgba(13,13,13,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gridline opacity-[0.1] pointer-events-none mix-blend-screen" />
        <div className="relative max-w-[1100px] mx-auto px-6 py-32 text-center">
          <h2 className="font-serif text-d1" style={{ fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Your competitors are<br />moving right now.
          </h2>
          <p className="font-serif text-d2 mt-6 italic" style={{ fontSize: 28, lineHeight: 1.2 }}>
            Sova tells you exactly what.
          </p>
          <div className="mt-12 flex items-center justify-center gap-3">
            <CTA>Start for $29/month</CTA>
            <CTA variant="ghost" to="/product">Read the product tour</CTA>
          </div>
        </div>
      </section>
    </div>
  );
}
