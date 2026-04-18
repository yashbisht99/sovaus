import { Link } from "react-router-dom";
import { SectionLabel, Badge } from "@/components/sova/Marketing";

const RELEASES = [
  {
    version: "v2.4.0",
    date: "Apr 18, 2026",
    tag: "feature",
    title: "Pricing Simulator with margin guardrails",
    body: "Model the unit, revenue, and margin impact of any price change before pushing to Shopify. Set per-category margin floors and Sova will flag any recommendation that breaches them.",
    items: [
      "Inline simulator on every recommendation row",
      "Per-category margin floor rules",
      "Audit trail with one-click rollback for the last 30 days",
    ],
  },
  {
    version: "v2.3.4",
    date: "Apr 11, 2026",
    tag: "improvement",
    title: "60% faster catalog scans",
    body: "Rewrote the scrape orchestration layer. Median update lag dropped from 11 minutes to 4.2 minutes across all monitored storefronts.",
    items: [
      "New parallel browser pool architecture",
      "Smarter retry logic for rate-limited stores",
      "Background priority queue for live-feed events",
    ],
  },
  {
    version: "v2.3.0",
    date: "Mar 28, 2026",
    tag: "feature",
    title: "Ad Intelligence",
    body: "Track competitor ad creative across Meta, TikTok, and Google. See what&apos;s running, how long it&apos;s been live, and which formats your competitors are leaning into.",
    items: [
      "Ad creative library organized by competitor",
      "Days-running counter and creative refresh cadence",
      "Filter by format, platform, and audience",
    ],
  },
  {
    version: "v2.2.1",
    date: "Mar 14, 2026",
    tag: "fix",
    title: "Slack digest formatting",
    body: "Resolved a regression where Friday digests were sent as plain text. Digests now render with full formatting and inline action links.",
    items: [
      "Restored block-kit formatting",
      "Added emoji reaction triage workflow",
      "Improved deep-link routing into the app",
    ],
  },
  {
    version: "v2.2.0",
    date: "Mar 1, 2026",
    tag: "feature",
    title: "Assortment Score",
    body: "A single, quarter-over-quarter score that summarizes how well your catalog matches market demand. Backed by the full whitespace and rationalization analysis.",
    items: [
      "0-100 composite score with arc visualization",
      "Three primary score drivers, plain-language",
      "Quarterly history with delta vs prior period",
    ],
  },
];

const TAG_STYLES: Record<string, { bg: string; text: string }> = {
  feature: { bg: "bg-accent-soft", text: "text-primary-brand" },
  improvement: { bg: "bg-success-soft", text: "text-success" },
  fix: { bg: "bg-surface-muted", text: "text-muted" },
};

export default function Changelog() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <Badge variant="primary">Changelog</Badge>
          
          <h1 
            className="font-serif text-foreground mt-6" 
            style={{ fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            What&apos;s new in Sova
          </h1>
          <p className="text-lg text-secondary mt-4 max-w-xl leading-relaxed">
            We ship every Friday. The interesting changes show up here.
          </p>
        </div>
      </section>

      {/* Releases */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-border" />

            {RELEASES.map((release, i) => (
              <div 
                key={release.version} 
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 pb-16 relative"
              >
                <div className="md:text-right md:pr-8 relative">
                  <div className="hidden md:block absolute right-[-5px] top-1 h-3 w-3 rounded-full bg-primary-brand ring-4 ring-background" />
                  <div className="text-sm text-muted">{release.date}</div>
                  <div className="font-mono text-sm font-medium text-foreground mt-1">{release.version}</div>
                </div>

                <div className="md:pl-8">
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md capitalize ${TAG_STYLES[release.tag].bg} ${TAG_STYLES[release.tag].text}`}>
                    {release.tag}
                  </span>
                  
                  <h2 className="text-xl font-semibold text-foreground mt-4">
                    {release.title}
                  </h2>
                  <p className="text-secondary mt-3 leading-relaxed">{release.body}</p>
                  
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {release.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-primary-brand">
                          <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Older releases */}
          <div className="border-t border-border pt-10">
            <SectionLabel index="..." label="Older releases" />
            <p className="text-secondary mt-6 max-w-lg">
              Full release history is available in our{" "}
              <a href="#" className="text-primary-brand hover:underline font-medium">
                developer changelog
              </a>
              . We&apos;ve shipped 247 releases since launch in November 2022.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-5" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="font-serif" 
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Want to ship faster than your competitors?{" "}
            <span className="italic text-primary-brand">So do we.</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/app"
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:bg-background/90 transition-all shadow-sm"
            >
              Start free trial
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
