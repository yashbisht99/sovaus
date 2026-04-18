import { Link } from "react-router-dom";
import { SectionLabel, Badge } from "@/components/sova/Marketing";

const STATS = [
  { value: "500+", label: "Active customers" },
  { value: "$42M", label: "Revenue protected Q1" },
  { value: "1.2M", label: "SKUs monitored daily" },
  { value: "97", label: "Net Promoter Score" },
];

const STORIES = [
  {
    brand: "Maison Elan",
    sector: "Premium DTC Apparel",
    location: "Stockholm",
    headline: "$184k of weekly revenue, defended",
    quote: "We replaced a 4-person competitive analyst function with Sova. The pricing recommendations alone paid for the year in the first 11 days.",
    person: "Elin Magnusson",
    role: "Head of Merchandising",
    metrics: [
      { value: "+12.4%", label: "Weekly revenue increase" },
      { value: "$42k", label: "Protected last quarter" },
      { value: "3", label: "Actions per morning" },
    ],
  },
  {
    brand: "Sundae",
    sector: "Resort & Swim",
    location: "Lisbon",
    headline: "Caught a competitor&apos;s launch 6 days early",
    quote: "Sova&apos;s market feed surfaced a competitor restocking our exact silhouette before they&apos;d even posted on social. We adjusted inventory the same hour.",
    person: "Tomas Reis",
    role: "Founder & CEO",
    metrics: [
      { value: "6 days", label: "Early-warning lead time" },
      { value: "28", label: "SKUs repriced" },
      { value: "+18%", label: "Sell-through rate" },
    ],
  },
  {
    brand: "Stillwater",
    sector: "Performance Basics",
    location: "Brooklyn",
    headline: "From spreadsheet hell to one-click ops",
    quote: "We had four people maintaining a competitor pricing sheet. Now Sova does it hourly and they ship product instead.",
    person: "Naomi Park",
    role: "VP Operations",
    metrics: [
      { value: "4 to 0", label: "FTEs on competitor tracking" },
      { value: "$210k", label: "Annual cost saved" },
      { value: "100%", label: "Team retention" },
    ],
  },
];

export default function Customers() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <Badge variant="primary">Customer Stories</Badge>
          
          <h1 
            className="font-serif text-foreground mt-6" 
            style={{ fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Operators who&apos;d rather{" "}
            <span className="text-primary-brand italic">ship than scroll</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
            Hundreds of businesses run their morning on Sova. Here are some of their stories.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div 
                  className="font-serif text-foreground tnum" 
                  style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      {STORIES.map((story, i) => (
        <section 
          key={story.brand} 
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-background" : "bg-surface-muted"}`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={`0${i + 1}`} label={story.brand} />
            
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <div className="text-sm text-muted font-medium">
                  {story.sector} &middot; {story.location}
                </div>
                <h2 
                  className="font-serif text-foreground mt-4" 
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  {story.headline}
                </h2>
                
                <blockquote className="mt-8 text-lg text-foreground leading-relaxed border-l-2 border-primary-brand pl-6 italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-muted border border-border flex items-center justify-center text-sm font-semibold text-secondary">
                    {story.person.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{story.person}</div>
                    <div className="text-sm text-muted">{story.role} at {story.brand}</div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-card">
                {story.metrics.map((metric, j) => (
                  <div 
                    key={j} 
                    className={`px-8 py-6 ${j !== story.metrics.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div 
                      className="font-serif text-primary-brand tnum" 
                      style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1 }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted mt-2 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-5" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="font-serif" 
            style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Be the next story{" "}
            <span className="italic text-primary-brand">we publish here</span>
          </h2>
          <p className="text-background/70 mt-4 text-lg">
            Join hundreds of businesses using Sova to stay ahead.
          </p>
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
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background font-medium text-[15px] px-4 py-3.5 transition-colors"
            >
              View pricing
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
