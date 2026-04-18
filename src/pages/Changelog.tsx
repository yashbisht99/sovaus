import { CTA, SectionLabel } from "@/components/sova/Marketing";

const RELEASES = [
  {
    version: "v2.4.0",
    date: "18 Apr 2026",
    tag: "FEATURE",
    title: "Pricing Simulator with margin guardrails",
    body: "Model the unit, revenue, and margin impact of any price change before pushing to Shopify. Set per-category margin floors and Sova will flag any recommendation that breaches them.",
    items: ["Inline simulator on every recommendation row", "Per-category margin floor rules", "Audit trail with one-click rollback for the last 30 days"],
  },
  {
    version: "v2.3.4",
    date: "11 Apr 2026",
    tag: "IMPROVEMENT",
    title: "60% faster catalog scans",
    body: "Rewrote the scrape orchestration layer. Median update lag dropped from 11 minutes to 4.2 minutes across all monitored storefronts.",
    items: ["New parallel browser pool architecture", "Smarter retry logic for rate-limited stores", "Background priority queue for live-feed events"],
  },
  {
    version: "v2.3.0",
    date: "28 Mar 2026",
    tag: "FEATURE",
    title: "Ad Intelligence",
    body: "Track competitor ad creative across Meta, TikTok, and Google. See what's running, how long it's been live, and which formats your competitors are leaning into.",
    items: ["Greyscale ad creative library, by competitor", "Days-running counter and creative refresh cadence", "Filter by format, platform, and audience hint"],
  },
  {
    version: "v2.2.1",
    date: "14 Mar 2026",
    tag: "FIX",
    title: "Slack digest formatting",
    body: "Resolved a regression where Friday digests were sent as plain text. Digests now render with full formatting and inline action links.",
    items: ["Restored block-kit formatting", "Added emoji reaction triage workflow", "Improved deep-link routing into the app"],
  },
  {
    version: "v2.2.0",
    date: "1 Mar 2026",
    tag: "FEATURE",
    title: "Assortment Score",
    body: "A single, quarter-over-quarter score that summarises how well your catalog matches market demand. Backed by the full whitespace and rationalization analysis.",
    items: ["0–100 composite score with arc visualization", "Three primary score drivers, plain-language", "Quarterly history with delta vs prior period"],
  },
];

const TAG_STYLES: Record<string, string> = {
  FEATURE: "border-amber-brand text-amber-brand",
  IMPROVEMENT: "border-success-soft text-success-soft",
  FIX: "border-d3 text-d3",
};

export default function Changelog() {
  return (
    <div>
      <section className="border-b border-ink-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gridline opacity-[0.3]" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16">
          <div className="label-eyebrow text-amber-brand">CHANGELOG</div>
          <h1 className="font-serif text-d1 mt-6" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            What's new in Sova.
          </h1>
          <p className="text-[16px] text-d2 mt-6 max-w-[560px] leading-[1.6]">
            We ship every Friday. The interesting changes show up here.
          </p>
        </div>
      </section>

      <section className="bg-ink-1">
        <div className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-ink-2" />

            {RELEASES.map((r) => (
              <div key={r.version} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 pb-16 relative">
                <div className="md:text-right md:pr-10 relative">
                  <div className="hidden md:block absolute right-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-amber-brand ring-4 ring-ink-1" />
                  <div className="font-mono text-[12px] text-d3">{r.date}</div>
                  <div className="font-mono text-[14px] text-d1 mt-1">{r.version}</div>
                </div>

                <div className="md:pl-10 relative">
                  <span className={`inline-block label-mono uppercase border px-2 py-0.5 rounded-sm text-[10px] ${TAG_STYLES[r.tag]}`}>
                    {r.tag}
                  </span>
                  <h2 className="font-serif text-d1 mt-4" style={{ fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.015em" }}>
                    {r.title}
                  </h2>
                  <p className="text-[15px] text-d2 mt-4 leading-[1.65] max-w-[640px]">{r.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink-2 pt-4">
                    {r.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[13px] text-d2">
                        <span className="text-amber-brand mt-0.5">→</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-ink-2 pt-10">
            <SectionLabel index="∞" label="Older releases" />
            <p className="text-[14px] text-d3 mt-6 max-w-[520px]">
              Full release history is available in our{" "}
              <a href="#" className="text-amber-brand hover:underline">developer changelog</a>. We've shipped 247 releases since launch in November 2022.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-0 border-t border-ink-2">
        <div className="max-w-[1100px] mx-auto px-6 py-28 text-center">
          <h2 className="font-serif text-d1" style={{ fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
            Want to ship faster<br />than your competitors? <span className="italic text-amber-brand">So do we.</span>
          </h2>
          <div className="mt-10"><CTA /></div>
        </div>
      </section>
    </div>
  );
}
