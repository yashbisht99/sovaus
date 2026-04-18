import { Sidebar } from "@/components/sova/Shell";
import { Link } from "react-router-dom";

export default function Billing() {
  return (
    <div className="min-h-screen w-full flex bg-ink-0 text-d1">
      <Sidebar />
      <main className="flex-1 min-w-0 page-enter flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gridline opacity-[0.25] pointer-events-none" />

        <div className="h-12 bg-ink-1 border-b border-ink-2 flex items-center px-4 sticky top-0 z-10 backdrop-blur">
          <div className="flex items-center gap-2 text-[12px]">
            <span className="text-d3">Maison Élan</span>
            <span className="text-d4">/</span>
            <span className="text-d1">Billing</span>
          </div>
          <div className="flex-1" />
          <span className="label-mono text-d4">CURRENT PERIOD · 1–30 APR</span>
        </div>

        <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-20">
          <div className="text-center mb-8">
            <div className="label-eyebrow text-amber-brand">YOUR PLAN</div>
            <p className="text-[13px] text-d3 mt-3">Takes 10 minutes to connect your store.</p>
          </div>

          <div className="bg-ink-1 border border-ink-2 rounded-xl p-10 w-full max-w-[480px] relative overflow-hidden">
            {/* Subtle amber glow corner */}
            <div className="absolute -top-20 -right-20 h-40 w-40 bg-amber-brand/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h1 className="font-serif text-d1" style={{ fontSize: 32 }}>Sova Growth</h1>
                <span className="label-mono text-d4 border border-ink-2 px-2 py-0.5 rounded-sm text-[10px]">CURRENT</span>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-d1 tnum" style={{ fontSize: 64, lineHeight: 1, letterSpacing: "-0.025em" }}>$29</span>
                <span className="text-[16px] text-d3">/month</span>
              </div>
              <div className="text-[11px] text-d4 label-mono mt-2">NEXT INVOICE · 1 MAY 2026</div>

              <div className="border-t border-ink-2 my-7" />

              <ul className="space-y-3.5">
                {[
                  "Competitor tracking — 5 storefronts",
                  "Real-time pricing recommendations",
                  "Assortment gap detection",
                  "AI launch brief generation",
                  "Weekly intelligence reports",
                  "Shopify one-click apply + rollback",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13.5px] text-d2">
                    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0">
                      <path d="M2 7.5L5.5 11L12 3.5" stroke="#E8A020" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/app"
                className="mt-8 block w-full text-center bg-amber-brand text-ink-1 font-semibold text-[15px] py-3.5 rounded-md hover:brightness-95 transition-[filter] duration-[80ms]"
              >
                Continue with Sova Growth
              </Link>
              <p className="text-[12px] text-d4 text-center mt-4">No setup fee. Cancel anytime.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/" className="text-[12px] text-d3 hover:text-d1 label-mono">← BACK TO MARKETING SITE</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
