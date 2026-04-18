// Premium marketing primitives for billion-dollar SaaS aesthetic

import { Link } from "react-router-dom";

export function Eyebrow({ children, tone = "primary" }: { children: React.ReactNode; tone?: "primary" | "muted" }) {
  return (
    <div className="inline-flex items-center gap-2.5 label-eyebrow">
      <span className={tone === "primary" ? "text-primary-brand" : "text-muted"}>
        <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
          <rect width="16" height="2" rx="1" fill="currentColor" />
        </svg>
      </span>
      <span className={tone === "primary" ? "text-primary-brand" : "text-secondary"}>{children}</span>
    </div>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <span className="text-primary-brand font-semibold">{index}</span>
      <span className="text-secondary font-medium">{label}</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}

export function CTA({ 
  to = "/app", 
  children = "Get started", 
  variant = "primary",
  size = "default"
}: { 
  to?: string; 
  children?: React.ReactNode; 
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg";
  
  const sizeStyles = size === "large" 
    ? "text-[15px] px-6 py-3.5" 
    : "text-[14px] px-4 py-2.5";
  
  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-card",
    secondary: "bg-surface text-foreground border border-border hover:border-border-strong hover:bg-surface-hover shadow-sm",
    ghost: "text-secondary hover:text-foreground hover:bg-surface-hover",
  };
  
  return (
    <Link to={to} className={`${baseStyles} ${sizeStyles} ${variantStyles[variant]}`}>
      {children}
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none" 
        className="transition-transform group-hover:translate-x-0.5"
      >
        <path 
          d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </Link>
  );
}

export function LivePill() {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground bg-surface border border-border px-3 py-1.5 rounded-full shadow-sm">
      <span className="relative inline-flex h-2 w-2">
        <span 
          className="absolute inline-flex h-full w-full rounded-full opacity-60" 
          style={{ 
            background: "hsl(var(--success))", 
            animation: "pulse 2s ease-in-out infinite" 
          }} 
        />
        <span 
          className="relative inline-flex rounded-full h-2 w-2" 
          style={{ background: "hsl(var(--success))" }} 
        />
      </span>
      Live now
    </span>
  );
}

export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "primary" | "success" }) {
  const variants = {
    default: "bg-surface-muted text-secondary border-border",
    primary: "bg-accent-soft text-primary-brand border-transparent",
    success: "bg-success-soft text-success border-transparent",
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border ${variants[variant]}`}>
      {children}
    </span>
  );
}

export function FeatureCard({ 
  icon, 
  title, 
  description,
  className = ""
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  className?: string;
}) {
  return (
    <div className={`p-6 bg-surface rounded-xl border border-border hover:border-border-strong hover:shadow-card transition-all duration-200 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary-brand mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-8 py-6">
      <div className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">{value}</div>
      <p className="text-sm text-secondary mt-2 max-w-[200px] mx-auto">{label}</p>
    </div>
  );
}

export function TestimonialCard({ 
  quote, 
  name, 
  title, 
  company,
  avatar
}: { 
  quote: string; 
  name: string; 
  title: string; 
  company: string;
  avatar?: string;
}) {
  return (
    <div className="p-8 bg-surface rounded-2xl border border-border shadow-card">
      <blockquote className="text-lg text-foreground leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-sm font-semibold text-secondary">
          {avatar || name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{name}</div>
          <div className="text-xs text-muted">{title} at {company}</div>
        </div>
      </div>
    </div>
  );
}
