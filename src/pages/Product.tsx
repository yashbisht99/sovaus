import { CTA, SectionLabel, Badge } from "@/components/sova/Marketing";

const FEATURES = [
  {
    index: "01",
    category: "Command Center",
    title: "Your morning briefing, written by the market",
    description: "Every morning, Sova ranks the day&apos;s most impactful actions. Numbered, estimated impact, one-click execution. No dashboards to interpret, just actions to take.",
    bullets: [
      "Priority actions ranked by revenue impact",
      "Real-time market feed with color-coded events",
      "Weekly performance cockpit with key metrics",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    index: "02",
    category: "Competitor Tracking",
    title: "Five storefronts, one nervous system",
    description: "Track up to five competitors. Sova scrapes their full catalog hourly, fingerprints every change, and timelines it. You see the move the moment it ships.",
    bullets: [
      "Hourly catalog scanning and diff detection",
      "Ad creative library across Meta, TikTok, Google",
      "Health scoring per competitor with trend indicators",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    index: "03",
    category: "Pricing Intelligence",
    title: "AI recommendations with cited evidence",
    description: "Every price recommendation comes with a 30-day trend, competitor range, estimated impact, and the rule that triggered it. Apply or simulate — never blind.",
    bullets: [
      "Per-SKU price recommendations with reasoning",
      "What-if simulator for units, revenue, margin",
      "One-click apply to Shopify with audit trail",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    index: "04",
    category: "Assortment Intelligence",
    title: "Find the gaps your market already proved",
    description: "Sova ranks whitespace by category demand intensity, surfaces rationalization candidates, and tracks your assortment score quarter over quarter.",
    bullets: [
      "Whitespace opportunities ranked by demand",
      "Category demand hotspots across 8 clusters",
      "Tail-SKU rationalization recommendations",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
];

const SPECS = [
  { value: "Hourly", label: "Scrape frequency" },
  { value: "1.2M", label: "SKUs monitored" },
  { value: "98.4%", label: "Scrape success rate" },
  { value: "4.2 min", label: "Median update lag" },
  { value: "SOC 2", label: "Type II compliant" },
  { value: "EU + US", label: "Data residency" },
  { value: "GDPR", label: "Native support" },
  { value: "99.97%", label: "Uptime, last 90 days" },
];

export default function Product() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <Badge variant="primary">Product Tour v2.4</Badge>
          
          <h1 
            className="font-serif text-foreground mt-6" 
            style={{ fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            A precision instrument for{" "}
            <span className="text-primary-brand italic">market control</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
            Four powerful surfaces, one job: convert market motion into revenue, before the competition even knows what hit them.
          </p>
        </div>
      </section>

      {/* Features */}
      {FEATURES.map((feature, i) => (
        <section 
          key={feature.title} 
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-background" : "bg-surface-muted"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <SectionLabel index={feature.index} label={feature.category} />
                <h2 
                  className="font-serif text-foreground mt-6" 
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  {feature.title}
                </h2>
                <p className="text-secondary mt-4 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-border pt-6">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-secondary">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0 text-primary-brand">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md bg-surface rounded-2xl border border-border shadow-card p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center text-primary-brand mb-6">
                    {feature.icon}
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary-brand" />
                        <div className="flex-1 h-3 bg-surface-muted rounded" />
                        <div className="w-16 h-3 bg-surface-muted rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted">Real-time updates</div>
                      <div className="flex items-center gap-2">
                        <span className="relative inline-flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "hsl(var(--success))", animation: "pulse 2s ease-in-out infinite" }} />
                          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "hsl(var(--success))" }} />
                        </span>
                        <span className="text-sm text-success font-medium">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Specs Grid */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel index="05" label="Under the hood" />
            <h2 
              className="font-serif text-foreground mt-6" 
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Built for enterprise-grade reliability
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SPECS.map((spec, i) => (
              <div key={i} className="bg-surface rounded-xl border border-border p-6 hover:shadow-card transition-shadow">
                <div 
                  className="font-serif text-foreground tnum" 
                  style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {spec.value}
                </div>
                <div className="text-sm text-muted mt-2 font-medium">{spec.label}</div>
              </div>
            ))}
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
            Ready in 10 minutes.{" "}
            <span className="italic text-primary-brand">Worth it forever.</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/app"
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold text-[15px] px-6 py-3.5 rounded-lg hover:bg-background/90 transition-all shadow-sm"
            >
              Start free trial
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
