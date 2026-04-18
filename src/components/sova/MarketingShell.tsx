import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const NAV = [
  { label: "Product", to: "/product" },
  { label: "Pricing", to: "/pricing" },
  { label: "Customers", to: "/customers" },
  { label: "Changelog", to: "/changelog" },
];

function SovaLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path 
            d="M12 2L2 7L12 12L22 7L12 2Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M2 17L12 22L22 17" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M2 12L12 17L22 12" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-semibold text-lg text-foreground tracking-tight">Sova</span>
    </div>
  );
}

export function MarketingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <SovaLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm font-medium px-3.5 py-2 rounded-lg transition-colors duration-150 ${
                    isActive 
                      ? "text-foreground bg-surface-hover" 
                      : "text-secondary hover:text-foreground hover:bg-surface-hover"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/app"
              className="hidden sm:flex text-sm font-medium text-secondary hover:text-foreground px-3 py-2 rounded-lg transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/app"
              className="text-sm font-semibold text-background bg-foreground hover:bg-foreground/90 px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-card flex items-center gap-2"
            >
              Get started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? "text-foreground bg-surface-hover" 
                        : "text-secondary hover:text-foreground hover:bg-surface-hover"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/app"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-secondary hover:text-foreground px-3 py-2.5 rounded-lg transition-colors"
              >
                Sign in
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <SovaLogo />
            <p className="text-sm text-secondary mt-4 max-w-[300px] leading-relaxed">
              The AI-powered market intelligence platform that transforms how businesses understand their competitors.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2">
                <span 
                  className="absolute inline-flex h-full w-full rounded-full opacity-50" 
                  style={{ background: "hsl(var(--success))", animation: "pulse 2s ease-in-out infinite" }} 
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "hsl(var(--success))" }} />
              </span>
              <span className="text-xs text-muted font-medium">All systems operational</span>
            </div>
          </div>

          {[
            ["Product", [["Overview", "/product"], ["Pricing", "/pricing"], ["Changelog", "/changelog"], ["Status", "#"]]],
            ["Company", [["Customers", "/customers"], ["Careers", "#"], ["Blog", "#"], ["Contact", "#"]]],
            ["Legal", [["Privacy", "#"], ["Terms", "#"], ["Security", "#"], ["GDPR", "#"]]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <div className="text-sm font-semibold text-foreground mb-4">{title as string}</div>
              <ul className="space-y-3">
                {(items as [string, string][]).map(([l, h]) => (
                  <li key={l}>
                    <Link 
                      to={h} 
                      className="text-sm text-secondary hover:text-foreground transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>&copy; 2026 Sova Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MarketingLayout() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />
      <main>
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
}
