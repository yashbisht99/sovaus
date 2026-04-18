import { Link } from "react-router-dom";
import { useState } from "react";
import { SectionLabel } from "@/components/sova/Marketing";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 24 },
    description: "Perfect for small teams getting started with competitive intelligence",
    features: [
      { name: "Competitors tracked", value: "3" },
      { name: "Price scans", value: "Daily" },
      { name: "Team members", value: "3" },
      { name: "AI recommendations", value: "Basic" },
      { name: "Email reports", value: true },
      { name: "Chat support", value: true },
      { name: "API access", value: false },
      { name: "Custom integrations", value: false },
      { name: "Dedicated success manager", value: false },
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 99, yearly: 79 },
    description: "For growing businesses that need deeper insights and faster data",
    features: [
      { name: "Competitors tracked", value: "10" },
      { name: "Price scans", value: "Hourly" },
      { name: "Team members", value: "10" },
      { name: "AI recommendations", value: "Advanced" },
      { name: "Email reports", value: true },
      { name: "Slack & Teams integration", value: true },
      { name: "API access", value: true },
      { name: "Priority support", value: true },
      { name: "Dedicated success manager", value: false },
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 199, yearly: 159 },
    description: "For large organizations with advanced requirements and scale",
    features: [
      { name: "Competitors tracked", value: "Unlimited" },
      { name: "Price scans", value: "Real-time" },
      { name: "Team members", value: "Unlimited" },
      { name: "AI recommendations", value: "Custom models" },
      { name: "Email reports", value: true },
      { name: "All integrations", value: true },
      { name: "API access", value: true },
      { name: "SSO & SAML", value: true },
      { name: "Dedicated success manager", value: true },
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const COMPARISON = [
  { name: "DIY Analyst", price: "$5,400+/mo", sub: "1 FTE at $65k/yr", tone: "muted" },
  { name: "Enterprise Tools", price: "$3,800+/mo", sub: "Pricewatch, Engage3, etc.", tone: "muted" },
  { name: "Sova Professional", price: "$99/mo", sub: "Self-serve, cancel anytime", tone: "primary" },
];

const FAQ = [
  {
    q: "How does Sova track competitors?",
    a: "We use a network of headless browsers across 14 countries to scan competitor catalogs. Every product change is fingerprinted, compared against history, and surfaced to you within minutes. We respect robots.txt and rate-limit responsibly.",
  },
  {
    q: "Can my competitors block Sova?",
    a: "We only scan publicly available storefront data, the same way search engines do. In over four years of operation, no merchant has ever been blocked from monitoring a competitor.",
  },
  {
    q: "What does the Shopify integration do?",
    a: "Read access to your catalog and orders for impact ranking. Write access (only when you click Apply) to push price changes. Every write is audited and reversible. We never touch customers, fulfillment, or finance.",
  },
  {
    q: "What if I need more than 10 competitors?",
    a: "Our Enterprise plan includes unlimited competitor tracking. If you&apos;re on Professional and need more, reach out and we&apos;ll find the right solution for your needs.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! All plans include a 14-day free trial with full access to features. No credit card required to start. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    q: "What happens when I cancel?",
    a: "You stop being charged immediately. Your data is exported on request and deleted within 30 days. No retention calls, no hostage-taking.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-primary-brand text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L9.5 6.5L14.5 8L9.5 9.5L8 14.5L6.5 9.5L1.5 8L6.5 6.5L8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Simple, transparent pricing
          </div>
          
          <h1 
            className="font-serif text-foreground" 
            style={{ fontSize: "clamp(40px, 7vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Choose your plan
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
            Start free, scale as you grow. All plans include a 14-day trial with full features.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center gap-4 p-1.5 bg-surface rounded-full border border-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? "bg-foreground text-background shadow-sm" 
                  : "text-secondary hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? "bg-foreground text-background shadow-sm" 
                  : "text-secondary hover:text-foreground"
              }`}
            >
              Yearly
              <span className="text-xs text-primary-brand font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`relative rounded-2xl border p-8 transition-all duration-200 ${
                  plan.popular 
                    ? "bg-foreground text-background border-foreground shadow-elevated scale-[1.02] md:scale-105" 
                    : "bg-surface border-border hover:border-border-strong hover:shadow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-brand text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      Most popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span 
                      className={`font-serif ${plan.popular ? "text-background" : "text-foreground"}`}
                      style={{ fontSize: 56, letterSpacing: "-0.02em", lineHeight: 1 }}
                    >
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={plan.popular ? "text-background/60" : "text-muted"}>/month</span>
                  </div>
                  {isYearly && (
                    <div className={`mt-2 text-sm ${plan.popular ? "text-background/60" : "text-muted"}`}>
                      Billed ${(isYearly ? plan.price.yearly : plan.price.monthly) * 12}/year
                    </div>
                  )}
                  <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? "text-background/70" : "text-secondary"}`}>
                    {plan.description}
                  </p>
                </div>

                <Link
                  to={plan.name === "Enterprise" ? "#contact" : "/app"}
                  className={`block w-full text-center font-semibold text-sm py-3.5 rounded-lg transition-all mb-8 ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90 shadow-sm"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className={`border-t pt-6 ${plan.popular ? "border-background/20" : "border-border"}`}>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.popular ? "text-background/50" : "text-muted"}`}>
                    What&apos;s included
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center justify-between text-sm">
                        <span className={plan.popular ? "text-background/80" : "text-secondary"}>
                          {feature.name}
                        </span>
                        {typeof feature.value === "boolean" ? (
                          feature.value ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-brand">
                              <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={plan.popular ? "text-background/30" : "text-muted/50"}>
                              <path d="M4 12L12 4M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          )
                        ) : (
                          <span className={`font-medium ${plan.popular ? "text-background" : "text-foreground"}`}>
                            {feature.value}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted mt-8">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel index="02" label="The real cost" />
            <h2 
              className="font-serif text-foreground mt-6" 
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              What competitive intelligence actually costs today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPARISON.map((item, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border transition-all ${
                  item.tone === "primary" 
                    ? "bg-surface border-primary-brand/30 shadow-card ring-1 ring-primary-brand/10" 
                    : "bg-surface border-border"
                }`}
              >
                <div className="text-lg font-semibold text-foreground">{item.name}</div>
                <div 
                  className={`font-serif mt-3 ${item.tone === "primary" ? "text-primary-brand" : "text-foreground"}`}
                  style={{ fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {item.price}
                </div>
                <div className="text-sm text-muted mt-2">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel index="03" label="FAQ" />
            <h2 
              className="font-serif text-foreground mt-6" 
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer py-5 flex items-center justify-between list-none">
                  <span className="text-base font-medium text-foreground pr-4">{item.q}</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    className="shrink-0 text-muted transition-transform group-open:rotate-45"
                  >
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </summary>
                <p className="text-secondary leading-relaxed pb-5 pr-8">{item.a}</p>
              </details>
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
            Ready to get started?
          </h2>
          <p className="text-background/70 mt-4 text-lg">
            Join thousands of businesses using Sova to stay ahead of their competition.
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
              to="#contact"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background font-medium text-[15px] px-4 py-3.5 transition-colors"
            >
              Talk to sales
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
