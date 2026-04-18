import { Link, NavLink, Outlet } from "react-router-dom";
import { SovaMarkOnDark } from "./SovaMark";

const NAV = [
  { label: "Product", to: "/product" },
  { label: "Pricing", to: "/pricing" },
  { label: "Customers", to: "/customers" },
  { label: "Changelog", to: "/changelog" },
];

export function MarketingNav() {
  return (
    <header className="sticky top-0 z-50 bg-ink-1/80 backdrop-blur-md border-b border-ink-2">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <SovaMarkOnDark size={18} />
          <span className="font-serif text-d1 text-[19px] tracking-tight">
            Sova<span className="text-amber-brand">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-[13px] px-3 py-1.5 rounded-md transition-colors duration-[80ms] ${
                  isActive ? "text-d1 bg-ink-3" : "text-d2 hover:text-d1 hover:bg-ink-2"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            to="/app"
            className="text-[13px] text-d2 hover:text-d1 px-3 py-1.5 rounded-md transition-colors duration-[80ms]"
          >
            Sign in
          </Link>
          <Link
            to="/app"
            className="text-[13px] font-medium text-ink-1 bg-amber-brand hover:brightness-95 px-3.5 py-1.5 rounded-md transition-[filter] duration-[80ms] flex items-center gap-1.5"
          >
            Start free
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6m0 0L5 2m3 3L5 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="bg-ink-1 border-t border-ink-2">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <SovaMarkOnDark size={16} />
              <span className="font-serif text-d1 text-[18px]">Sova<span className="text-amber-brand">.</span></span>
            </div>
            <p className="text-[13px] text-d3 mt-4 max-w-[280px] leading-relaxed">
              Competitor intelligence and pricing authority for Shopify DTC brands. Built in Stockholm.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#5B8A57", animation: "sova-pulse 2.4s ease-in-out infinite" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#5B8A57" }} />
              </span>
              <span className="text-[11px] text-d3 label-mono">All systems operational</span>
            </div>
          </div>

          {[
            ["Product", [["Overview", "/product"], ["Pricing", "/pricing"], ["Changelog", "/changelog"], ["Status", "#"]]],
            ["Company", [["Customers", "/customers"], ["Careers", "#"], ["Press", "#"], ["Contact", "#"]]],
            ["Legal", [["Privacy", "#"], ["Terms", "#"], ["Security", "#"], ["DPA", "#"]]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <div className="label-eyebrow text-d4 mb-4">{title as string}</div>
              <ul className="space-y-2.5">
                {(items as [string, string][]).map(([l, h]) => (
                  <li key={l}>
                    <Link to={h} className="text-[13px] text-d2 hover:text-d1 transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-2 mt-14 pt-6 flex items-center justify-between text-[12px] text-d4">
          <span>© 2026 Sova AB · Org. nr 559412-0987</span>
          <span className="font-mono">v2.4.0 · 18 Apr</span>
        </div>
      </div>
    </footer>
  );
}

export function MarketingLayout() {
  return (
    <div className="min-h-screen bg-ink-1 text-d1">
      <MarketingNav />
      <Outlet />
      <MarketingFooter />
    </div>
  );
}
