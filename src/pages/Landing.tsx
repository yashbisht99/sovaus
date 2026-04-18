import { Link } from "react-router-dom";
import { LogoWall } from "@/components/sova/LogoWall";
import { CTA, SectionLabel, LivePill, Badge } from "@/components/sova/Marketing";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Competitor Intelligence",
    description: "Track every price change, product launch, and promotion across your competitive landscape in real-time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Dynamic Pricing",
    description: "AI-powered price recommendations that maximize margins while maintaining competitive positioning.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Assortment Insights",
    description: "Discover product gaps and opportunities your competitors have already validated in the market.",
  },
];

const STATS = [
  { value: "$42M+", label: "Revenue protected for customers last quarter" },
  { value: "1.2M", label: "Competitor SKUs monitored daily across 14 countries" },
  { value: "3 sec", label: "Average time to surface actionable insights" },
];

const COMPARISON = [
  { before: "6 browser tabs monitoring competitors", after: "Live feed with hourly scans" },
  { before: "Spreadsheets tracking competitor prices", after: "AI-powered price recommendations" },
  { before: "Weekly team meetings to triage priorities", after: "Daily ranked actions by impact" },
  { before: "Gut-feel product decisions", after: "Data-driven assortment planning" },
  { before: "Manual price updates", after: "One-click apply with rollback" },
];

export default function Landing() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
              <LivePill />
            </div>
            
            <h1 
              className="font-serif text-foreground mt-8 animate-fade-up text-balance" 
              style={{ 
                fontSize: "clamp(40px, 8vw, 72px)", 
                lineHeight: 1.05, 
                letterSpacing: "-0.02em",
                animationDelay: "100ms"
              }}
            >
              Market intelligence that{" "}
              <span className="text-primary-brand italic">actually moves</span> the needle
            </h1>
            
            <p 
              className="text-lg md:text-xl text-secondary mt-6 max-w-2xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Sova tracks every competitor move, recommends optimal prices, and identifies 
              market opportunities — all before your morning coffee.
            </p>

            <div 
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <CTA to="/app" size="large">Start free trial</CTA>
              <CTA to="/product" variant="secondary" size="large">See how it works</CTA>
            </div>
            
            <div 
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Setup in 10 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Product Preview */}
          <div 
            className="mt-16 md:mt-24 animate-fade-up" 
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-surface rounded-2xl border border-border shadow-hero overflow-hidden">
                <div className="border-b border-border px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-surface-muted px-4 py-1 rounded-md text-xs text-muted">
                      app.sova.ai
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-surface-muted min-h-[400px]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Dashboard cards preview */}
                    <div className="bg-surface rounded-xl border border-border p-5">
                      <div className="text-xs text-muted font-medium mb-2">Revenue Protected</div>
                      <div className="text-2xl font-semibold text-foreground">$847,290</div>
                      <div className="text-xs text-success font-medium mt-1">+23.5% vs last month</div>
                    </div>
                    <div className="bg-surface rounded-xl border border-border p-5">
                      <div className="text-xs text-muted font-medium mb-2">Competitor Changes</div>
                      <div className="text-2xl font-semibold text-foreground">47</div>
                      <div className="text-xs text-secondary mt-1">Detected this week</div>
                    </div>
                    <div className="bg-surface rounded-xl border border-border p-5">
                      <div className="text-xs text-muted font-medium mb-2">Price Actions</div>
                      <div className="text-2xl font-semibold text-foreground">12</div>
                      <div className="text-xs text-primary-brand font-medium mt-1">Ready to execute</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-surface rounded-xl border border-border p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-foreground">Priority Actions</div>
                      <Badge variant="primary">3 new</Badge>
                    </div>
                    <div className="space-y-3">
                      {[
                        { action: "Lower Linen Trouser price by 7%", impact: "High", status: "Recommended" },
                        { action: "Competitor restocked best-seller", impact: "Medium", status: "Monitor" },
                        { action: "New product launch detected", impact: "High", status: "Review" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${item.impact === "High" ? "bg-primary-brand" : "bg-warning"}`} />
                            <span className="text-sm text-foreground">{item.action}</span>
                          </div>
                          <span className="text-xs text-muted font-medium">{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-x-20 -bottom-20 h-40 bg-primary/10 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <LogoWall />

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl bg-surface overflow-hidden">
            {STATS.map((stat, i) => (
              <div key={i} className="p-8 md:p-12 text-center">
                <div 
                  className="font-serif text-foreground tnum" 
                  style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-secondary mt-4 leading-relaxed max-w-[220px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel index="01" label="Core Features" />
            <h2 
              className="font-serif text-foreground mt-6" 
              style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Three jobs. <span className="italic text-secondary">Done before coffee.</span>
            </h2>
            <p className="text-secondary mt-4 text-lg leading-relaxed">
              Replace 6 spreadsheets, 4 browser tabs, and hours of meetings with one intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div 
                key={i} 
                className="bg-surface rounded-2xl border border-border p-8 hover:border-border-strong hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-primary-brand mb-6 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel index="02" label="Why Sova" />
              <h2 
                className="font-serif text-foreground mt-6" 
                style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Stop paying for tools that only show you data
              </h2>
              <p className="text-secondary mt-4 text-lg leading-relaxed">
                Sova is the first market intelligence platform built for execution, not contemplation. Every insight leads to action.
              </p>
              <div className="mt-8">
                <CTA to="/pricing">View pricing</CTA>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-2 text-sm font-semibold text-muted px-6 py-4 border-b border-border bg-surface-muted">
                <div>What you have today</div>
                <div>What Sova replaces it with</div>
              </div>
              {COMPARISON.map((item, i) => (
                <div key={i} className="grid grid-cols-2 px-6 py-4 border-b border-border last:border-0">
                  <div className="text-sm text-muted line-through decoration-destructive/40 pr-4">{item.before}</div>
                  <div className="text-sm text-foreground flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-primary-brand">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel index="03" label="Customer Stories" />
          <blockquote 
            className="font-serif text-foreground mt-10" 
            style={{ fontSize: "clamp(24px, 4vw, 36px)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
          >
            &ldquo;We replaced a 4-person competitive analyst function with Sova. The pricing recommendations alone paid for the year in the first 11 days.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-muted border border-border flex items-center justify-center text-sm font-semibold text-secondary">
              EM
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">Elin Magnusson</div>
              <div className="text-sm text-muted">Head of Merchandising, Maison Elan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel index="04" label="Pricing" />
            <h2 
              className="font-serif text-foreground mt-6" 
              style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Simple, transparent pricing
            </h2>
            <p className="text-secondary mt-4 text-lg">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "For small teams getting started with market intelligence",
                features: ["3 competitors tracked", "Daily price scans", "Basic recommendations", "Email reports", "Chat support"],
                cta: "Start free trial",
                popular: false,
              },
              {
                name: "Professional",
                price: "$99",
                description: "For growing businesses that need deeper insights",
                features: ["10 competitors tracked", "Hourly price scans", "AI recommendations", "Slack integration", "Priority support", "API access"],
                cta: "Start free trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For large teams with advanced requirements",
                features: ["Unlimited competitors", "Real-time monitoring", "Custom AI models", "Dedicated success manager", "SSO & SAML", "Custom integrations"],
                cta: "Contact sales",
                popular: false,
              },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`relative rounded-2xl border p-8 transition-all duration-200 hover:shadow-elevated ${
                  plan.popular 
                    ? "bg-foreground text-background border-foreground shadow-elevated" 
                    : "bg-surface border-border hover:border-border-strong"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span 
                      className={`font-serif ${plan.popular ? "text-background" : "text-foreground"}`}
                      style={{ fontSize: 48, letterSpacing: "-0.02em", lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    <span className={plan.popular ? "text-background/70" : "text-muted"}>/month</span>
                  </div>
                  <p className={`mt-3 text-sm ${plan.popular ? "text-background/70" : "text-secondary"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-primary-brand" : "text-primary-brand"}`}
                      >
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.popular ? "text-background/90" : "text-secondary"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/pricing"
                  className={`block w-full text-center font-semibold text-sm py-3 rounded-lg transition-all ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted mt-8">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-5" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="font-serif" 
            style={{ fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Your competitors are moving right now
          </h2>
          <p className="font-serif text-background/70 mt-4 italic text-xl md:text-2xl">
            Sova tells you exactly what.
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
              to="/product"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background font-medium text-[15px] px-4 py-3.5 transition-colors"
            >
              Read the product tour
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
