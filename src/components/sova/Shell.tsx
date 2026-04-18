import { NavLink, useLocation } from "react-router-dom";
import { SovaMarkOnDark } from "./SovaMark";

const NAV = [
  { label: "Command Center", short: "command", to: "/app", key: "C" },
  { label: "Competitors", short: "competitors", to: "/app/competitors", key: "M" },
  { label: "Pricing", short: "pricing", to: "/app/pricing", key: "P" },
  { label: "Assortment", short: "assortment", to: "/app/assortment", key: "A" },
  { label: "Launches", short: "launches", to: "/app/launches", key: "L" },
  { label: "Operations", short: "operations", to: "/app/operations", key: "O" },
  { label: "Billing", short: "billing", to: "/app/billing", key: "B" },
];

export function Sidebar() {
  return (
    <aside className="w-[228px] shrink-0 bg-ink-1 text-d1 flex flex-col h-screen sticky top-0 border-r border-ink-2">
      <div className="px-4 pt-5 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SovaMarkOnDark size={18} />
          <span className="font-serif text-d1 text-[18px] tracking-tight">
            Sova<span className="text-amber-brand">.</span>
          </span>
        </div>
        <button className="text-d4 hover:text-d2 text-[10px] label-mono">⌘[</button>
      </div>

      <div className="px-3 mb-2">
        <div className="bg-ink-2 hover:bg-ink-3 transition-colors rounded-md px-2.5 py-1.5 flex items-center justify-between cursor-pointer border border-ink-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="h-5 w-5 rounded-sm bg-amber-brand text-ink-1 text-[9px] font-semibold flex items-center justify-center shrink-0">M</div>
            <span className="text-[12px] text-d1 truncate">Maison Élan</span>
          </div>
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-d3 shrink-0"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      <nav className="flex-1 px-2 overflow-y-auto">
        <div className="label-eyebrow text-d4 px-3 py-2 mt-2" style={{ fontSize: 9 }}>WORKSPACE</div>
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/app"}
            className={({ isActive }) =>
              [
                "relative group flex items-center justify-between px-3 py-1.5 rounded-md text-[12.5px] transition-colors duration-[80ms]",
                isActive
                  ? "bg-ink-3 text-d1"
                  : "text-d2 hover:text-d1 hover:bg-ink-2",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-amber-brand rounded-r" />}
                <span className="flex items-center gap-2.5 pl-1">
                  <NavIcon name={item.short} active={isActive} />
                  {item.label}
                </span>
                <span className="label-mono text-d4 opacity-0 group-hover:opacity-100 transition-opacity">⌘{item.key}</span>
              </>
            )}
          </NavLink>
        ))}

        <div className="label-eyebrow text-d4 px-3 py-2 mt-6" style={{ fontSize: 9 }}>SHORTCUTS</div>
        {[["Today's actions", "T"], ["Live feed", "F"], ["Saved views", "V"]].map(([l, k]) => (
          <a key={l} href="#" className="group flex items-center justify-between px-3 py-1.5 rounded-md text-[12.5px] text-d3 hover:text-d1 hover:bg-ink-2 transition-colors">
            <span>{l}</span>
            <span className="label-mono text-d4 opacity-0 group-hover:opacity-100">⌘{k}</span>
          </a>
        ))}
      </nav>

      <div className="px-4 py-3 border-t border-ink-2 flex items-center gap-2.5">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#5B8A57", animation: "sova-pulse 2.4s ease-in-out infinite" }} />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#5B8A57" }} />
        </span>
        <span className="text-[10.5px] text-d3 label-mono flex-1">ALL SYSTEMS LIVE</span>
        <span className="text-[10px] text-d4 label-mono tnum">v2.4.0</span>
      </div>
    </aside>
  );
}

function NavIcon({ name, active }: { name: string; active: boolean }) {
  const c = active ? "currentColor" : "currentColor";
  // Minimal 12px line icons
  const map: Record<string, JSX.Element> = {
    command: <><rect x="2" y="2" width="3.5" height="3.5" /><rect x="6.5" y="2" width="3.5" height="3.5" /><rect x="2" y="6.5" width="3.5" height="3.5" /><rect x="6.5" y="6.5" width="3.5" height="3.5" /></>,
    competitors: <><circle cx="3.5" cy="6" r="2.5" /><circle cx="8.5" cy="6" r="2.5" /></>,
    pricing: <><path d="M2 9V3l4 6 4-6v6" /></>,
    assortment: <><rect x="2" y="2" width="3" height="3" /><rect x="7" y="2" width="3" height="3" /><rect x="2" y="7" width="3" height="3" /><rect x="7" y="7" width="3" height="3" /></>,
    launches: <><path d="M3 9l6-6M9 3v3M9 3H6" /></>,
    operations: <><circle cx="6" cy="6" r="3.5" /><path d="M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" /></>,
    billing: <><rect x="1.5" y="3" width="9" height="6" rx="1" /><path d="M1.5 5.5h9" /></>,
  };
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={c} strokeWidth="1.1" className="opacity-80">
      {map[name]}
    </svg>
  );
}

export function TopBar({ crumbs, actions }: { crumbs: string[]; actions?: React.ReactNode }) {
  const loc = useLocation();
  return (
    <div className="h-12 bg-ink-1 border-b border-ink-2 flex items-center px-4 sticky top-0 z-10 backdrop-blur">
      <div className="flex items-center gap-2 text-[12px]">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className={i === crumbs.length - 1 ? "text-d1" : "text-d3"}>{c}</span>
            {i < crumbs.length - 1 && <span className="text-d4">/</span>}
          </span>
        ))}
      </div>

      <div className="flex-1 flex justify-center">
        <button className="w-[420px] max-w-full h-7 bg-ink-2 hover:bg-ink-3 transition-colors text-[12px] text-d3 rounded-md px-3 border border-ink-2 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" className="opacity-70"><circle cx="5" cy="5" r="3" /><path d="M7.5 7.5L10 10" /></svg>
          <span className="flex-1 text-left">Search competitors, SKUs, alerts…</span>
          <kbd className="text-[10px] label-mono text-d4 border border-ink-2 px-1.5 py-px rounded bg-ink-1">⌘K</kbd>
        </button>
      </div>

      <div className="flex items-center gap-2">
        {actions}
        <button className="h-7 px-2.5 rounded-md bg-ink-2 hover:bg-ink-3 transition-colors text-d2 hover:text-d1 text-[12px] flex items-center gap-1.5 border border-ink-2">
          Alerts
          <span className="bg-amber-brand text-ink-1 text-[10px] font-semibold px-1.5 rounded-sm tnum">7</span>
        </button>
        <div className="h-7 w-7 rounded-md bg-ink-3 text-[10.5px] flex items-center justify-center text-d1 font-medium border border-ink-2 ml-1">EM</div>
      </div>
      <span className="hidden">{loc.pathname}</span>
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub, actions }: { eyebrow: string; title: string; sub?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between pb-6">
      <div>
        <div className="label-eyebrow text-t3">{eyebrow}</div>
        <h1 className="font-serif text-t1 mt-2.5" style={{ fontSize: 34, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          {title}
        </h1>
        {sub && <p className="text-[13.5px] text-t2 mt-2 max-w-[600px]">{sub}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
