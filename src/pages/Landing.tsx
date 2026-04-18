import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LogoWall } from "@/components/sova/LogoWall";
import { CTA, SectionLabel, LivePill, Badge } from "@/components/sova/Marketing";
import { 
  FadeUp, 
  StaggerContainer, 
  StaggerItem, 
  ScaleOnScroll, 
  FloatingElement,
  RotatingGlow,
  HoverCard,
  MorphingBlob,
  TextReveal
} from "@/components/sova/AnimatedElements";

// Lazy load 3D component for performance
const Hero3D = lazy(() => import("@/components/sova/Hero3D"));

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Real-Time Tracking",
    description: "Monitor competitor prices, inventory, and promotions as they happen. Never miss a market move again.",
    gradient: "from-teal-500 to-cyan-400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze patterns and recommend optimal pricing strategies automatically.",
    gradient: "from-primary-brand to-teal-400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Revenue Impact",
    description: "Every recommendation is ranked by potential revenue impact. Focus on actions that move the needle.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const STATS = [
  { value: "$42M+", label: "Revenue protected for customers last quarter" },
  { value: "1.2M", label: "Competitor SKUs monitored daily across 14 countries" },
  { value: "< 3 sec", label: "Average time to surface actionable insights" },
];

const COMPARISON = [
  { before: "6 browser tabs monitoring competitors", after: "Live feed with hourly scans" },
  { before: "Spreadsheets tracking competitor prices", after: "AI-powered price recommendations" },
  { before: "Weekly team meetings to triage priorities", after: "Daily ranked actions by impact" },
  { before: "Gut-feel product decisions", after: "Data-driven assortment planning" },
  { before: "Manual price updates", after: "One-click apply with rollback" },
];

const TESTIMONIALS = [
  {
    quote: "We replaced a 4-person competitive analyst function with Sova. The pricing recommendations alone paid for the year in the first 11 days.",
    name: "Elin Magnusson",
    role: "Head of Merchandising",
    company: "Maison Elan",
    metric: "$847K",
    metricLabel: "Revenue protected",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote: "Sova fundamentally changed how we approach pricing. We went from reactive to proactive overnight.",
    name: "James Chen",
    role: "Director of E-commerce",
    company: "Coastal Living Co.",
    metric: "23%",
    metricLabel: "Margin improvement",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote: "The AI recommendations are scary accurate. It is like having a data science team working 24/7.",
    name: "Sarah Mitchell",
    role: "VP of Strategy",
    company: "Nordic Home",
    metric: "4.2x",
    metricLabel: "ROI in 90 days",
    image: "/images/testimonial-3.jpg",
  },
];

export default function Landing() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* 3D Background */}
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />
        <RotatingGlow size={600} className="top-0 right-0 -translate-y-1/2 translate-x-1/2" />
        <MorphingBlob size={500} className="bottom-0 left-0 translate-y-1/2 -translate-x-1/2" color="#14b8a6" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <FadeUp delay={0}>
              <LivePill />
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h1 
                className="font-serif text-foreground mt-8 text-balance" 
                style={{ 
                  fontSize: "clamp(42px, 8vw, 76px)", 
                  lineHeight: 1.02, 
                  letterSpacing: "-0.03em",
                }}
              >
                <TextReveal text="Market intelligence that actually moves the needle" />
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-secondary mt-8 max-w-2xl leading-relaxed">
                Sova tracks every competitor move, recommends optimal prices, and identifies 
                market opportunities — all before your morning coffee.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
                <CTA to="/app" size="large">
                  Start free trial
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </CTA>
                <CTA to="/product" variant="secondary" size="large">
                  Watch demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor"/>
                  </svg>
                </CTA>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
                {["No credit card required", "Setup in 10 minutes", "Cancel anytime"].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Product Preview with Real Image */}
          <ScaleOnScroll>
            <div className="mt-20 md:mt-28">
              <div className="relative mx-auto max-w-5xl">
                <FloatingElement duration={6} distance={10}>
                  <div className="bg-surface rounded-2xl md:rounded-3xl border border-border/50 shadow-hero overflow-hidden backdrop-blur-sm">
                    {/* Browser chrome */}
                    <div className="border-b border-border/50 px-4 py-3 flex items-center gap-3 bg-surface/80">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-surface-muted px-6 py-1.5 rounded-lg text-xs text-muted flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                          </svg>
                          app.sova.ai
                        </div>
                      </div>
                    </div>
                    
                    {/* Dashboard Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src="/images/dashboard-preview.jpg" 
                        alt="Sova Dashboard showing competitor intelligence and pricing recommendations"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay metrics cards */}
                      <div className="absolute inset-0 p-6 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
                          {[
                            { label: "Revenue Protected", value: "$847,290", change: "+23.5%", positive: true },
                            { label: "Competitor Changes", value: "47", change: "This week", positive: null },
                            { label: "Price Actions", value: "12", change: "Ready to execute", positive: true },
                          ].map((card, i) => (
                            <HoverCard key={i}>
                              <div className="bg-surface/95 backdrop-blur-md rounded-xl border border-border/50 p-4 shadow-card">
                                <div className="text-xs text-muted font-medium mb-1">{card.label}</div>
                                <div className="text-2xl font-semibold text-foreground">{card.value}</div>
                                <div className={`text-xs font-medium mt-1 ${card.positive ? "text-success" : card.positive === false ? "text-destructive" : "text-muted"}`}>
                                  {card.change}
                                </div>
                              </div>
                            </HoverCard>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
                
                {/* Glow effects */}
                <div className="absolute -inset-x-20 -bottom-20 h-60 bg-primary/20 blur-[120px] -z-10 rounded-full" />
              </div>
            </div>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Logo Wall */}
      <LogoWall />

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl md:rounded-3xl bg-surface overflow-hidden">
              {STATS.map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="p-10 md:p-14 text-center group hover:bg-surface-muted/50 transition-colors">
                    <div 
                      className="font-serif text-foreground tnum group-hover:text-primary-brand transition-colors" 
                      style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </div>
                    <p className="text-sm text-secondary mt-5 leading-relaxed max-w-[220px] mx-auto">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-surface-muted relative overflow-hidden">
        <MorphingBlob size={400} className="top-20 right-0 translate-x-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel index="01" label="Core Features" />
              <h2 
                className="font-serif text-foreground mt-6" 
                style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                Three jobs. <span className="italic text-primary-brand">Done before coffee.</span>
              </h2>
              <p className="text-secondary mt-5 text-lg leading-relaxed">
                Replace 6 spreadsheets, 4 browser tabs, and hours of meetings with one intelligent platform.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <StaggerItem key={i}>
                <HoverCard>
                  <div className="bg-surface rounded-2xl border border-border p-8 h-full group relative overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center text-primary-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Section with AI Visual */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <RotatingGlow size={500} className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <SectionLabel index="02" label="Why Sova" />
                <h2 
                  className="font-serif text-foreground mt-6" 
                  style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  Stop paying for tools that only show you data
                </h2>
                <p className="text-secondary mt-5 text-lg leading-relaxed">
                  Sova is the first market intelligence platform built for execution, not contemplation. Every insight leads to action.
                </p>
                
                {/* AI Visual */}
                <div className="mt-10 relative rounded-2xl overflow-hidden">
                  <img 
                    src="/images/ai-intelligence.jpg" 
                    alt="AI-powered intelligence visualization"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge variant="primary">Powered by AI</Badge>
                    <p className="text-sm text-foreground mt-2">Continuous learning from millions of data points</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <CTA to="/pricing">View pricing</CTA>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-card">
                <div className="grid grid-cols-2 text-sm font-semibold text-muted px-6 py-4 border-b border-border bg-surface-muted">
                  <div>What you have today</div>
                  <div className="text-primary-brand">What Sova delivers</div>
                </div>
                {COMPARISON.map((item, i) => (
                  <div key={i} className="grid grid-cols-2 px-6 py-4 border-b border-border last:border-0 group hover:bg-surface-muted/50 transition-colors">
                    <div className="text-sm text-muted line-through decoration-destructive/40 pr-4">{item.before}</div>
                    <div className="text-sm text-foreground flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-primary-brand">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item.after}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-surface-muted relative overflow-hidden">
        <MorphingBlob size={350} className="top-0 right-20" color="#0d9488" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-16">
              <SectionLabel index="03" label="Customer Stories" />
              <h2 
                className="font-serif text-foreground mt-6" 
                style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Trusted by market leaders
              </h2>
            </div>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <StaggerItem key={i}>
                <HoverCard>
                  <div className="bg-surface rounded-2xl border border-border p-8 h-full flex flex-col">
                    <div className="flex items-center gap-1 text-primary-brand mb-6">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 1.5L9.5 6.5L14.5 8L9.5 9.5L8 14.5L6.5 9.5L1.5 8L6.5 6.5L8 1.5Z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-foreground leading-relaxed flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-border"
                          />
                          <div>
                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted">{testimonial.role}, {testimonial.company}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-serif text-primary-brand">{testimonial.metric}</div>
                          <div className="text-xs text-muted">{testimonial.metricLabel}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 md:py-32 bg-background relative">
        <RotatingGlow size={400} className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <SectionLabel index="04" label="Pricing" />
              <h2 
                className="font-serif text-foreground mt-6" 
                style={{ fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
              >
                Simple, transparent pricing
              </h2>
              <p className="text-secondary mt-5 text-lg">
                Choose the plan that fits your business. No hidden fees, no surprises.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              <StaggerItem key={i}>
                <HoverCard>
                  <div 
                    className={`relative rounded-2xl border p-8 h-full transition-all duration-300 ${
                      plan.popular 
                        ? "bg-foreground text-background border-foreground shadow-elevated" 
                        : "bg-surface border-border"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary-brand text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
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
                          style={{ fontSize: 52, letterSpacing: "-0.02em", lineHeight: 1 }}
                        >
                          {plan.price}
                        </span>
                        <span className={plan.popular ? "text-background/60" : "text-muted"}>/month</span>
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
                          <span className={plan.popular ? "text-background/90" : "text-foreground"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={plan.name === "Enterprise" ? "#contact" : "/app"}
                      className={`block w-full text-center font-semibold text-sm py-3.5 rounded-lg transition-all ${
                        plan.popular
                          ? "bg-background text-foreground hover:bg-background/90"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeUp delay={0.3}>
            <p className="text-center text-sm text-muted mt-10">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-[0.03]" />
        <RotatingGlow size={600} color="rgba(13, 148, 136, 0.2)" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 
              className="font-serif" 
              style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Ready to see what you&apos;ve been missing?
            </h2>
            <p className="text-background/70 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of businesses using Sova to stay ahead of their competition.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 bg-background text-foreground font-semibold text-base px-8 py-4 rounded-xl hover:bg-background/90 transition-all shadow-sm"
              >
                Start free trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-background/80 hover:text-background font-medium text-base px-6 py-4 transition-colors"
              >
                View pricing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M11.5 7L7 2.5M11.5 7L7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
