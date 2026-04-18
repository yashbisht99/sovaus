import { SovaMarkOnDark } from "./SovaMark";

// Pixel-perfect dark mini dashboard used in marketing hero & product page
export function ProductPreviewDark({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="bg-ink-2 border border-ink-1 rounded-[10px] overflow-hidden shadow-deep"
      style={{ width: 880 * scale, height: 560 * scale, transformOrigin: "top left" }}
    >
      {/* Window chrome */}
      <div className="h-9 bg-ink-1 border-b border-ink-2 flex items-center px-3.5 gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3A]" />
        <div className="ml-4 flex items-center gap-2 text-[10px] text-d4 label-mono">
          <span>maison-elan.sova.app</span>
          <span className="text-amber-brand">/</span>
          <span className="text-d2">command-center</span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[10px] text-d4 label-mono">
          <span className="relative inline-flex h-1 w-1">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-brand opacity-50" style={{ animation: "sova-pulse 2.4s ease-in-out infinite" }} />
            <span className="relative inline-flex rounded-full h-1 w-1 bg-amber-brand" />
          </span>
          LIVE
        </div>
      </div>

      <div className="flex h-[calc(100%-2.25rem)]">
        {/* Sidebar */}
        <div className="w-[140px] bg-ink-1 border-r border-ink-2 py-3 px-2 flex flex-col">
          <div className="flex items-center gap-1.5 px-2 mb-5">
            <SovaMarkOnDark size={12} />
            <span className="font-serif text-[13px] text-amber-brand">Sova.</span>
          </div>
          {[
            ["command center", true],
            ["competitors", false],
            ["pricing", false],
            ["assortment", false],
            ["launches", false],
            ["billing", false],
          ].map(([n, active], i) => (
            <div
              key={i}
              className={`relative text-[10px] py-1.5 px-2 lowercase ${
                active ? "bg-ink-3 text-amber-brand" : "text-d3"
              }`}
            >
              {active && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber-brand" />}
              {n as string}
            </div>
          ))}
          <div className="mt-auto px-2 flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full" style={{ background: "#5B8A57" }} />
            <span className="text-[8px] text-d4 label-mono">all systems live</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-canvas overflow-hidden">
          {/* Top bar */}
          <div className="h-7 border-b border-divider px-4 flex items-center text-[10px] text-t3 label-mono gap-2">
            <span>maison élan</span>
            <span className="text-divider">/</span>
            <span className="text-t1">command center</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-amber-brand">7 alerts</span>
              <span className="h-3.5 w-3.5 rounded-full bg-canvas-3 text-[7px] flex items-center justify-center text-t2">EM</span>
            </div>
          </div>

          <div className="p-5">
            <div className="label-eyebrow text-t3" style={{ fontSize: 8 }}>FRIDAY · 18 APR 2026</div>
            <div className="font-serif text-[18px] text-t1 mt-1.5 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              3 actions need your attention today.
            </div>
            <div className="flex gap-1.5 mt-2.5">
              {["Drop Linen Trousers ↗", "Review Everlane drop ↗", "Restock Merino ↗"].map((p) => (
                <span key={p} className="text-[8px] border border-amber-brand text-amber-brand px-2 py-0.5 rounded-full">{p}</span>
              ))}
            </div>

            <div className="border-t border-divider my-4" />

            <div className="grid grid-cols-4">
              {[
                ["$184,320", "REVENUE / WEEK", "+12.4%", "ok"],
                ["$94", "AOV", "+$4", "ok"],
                ["8", "NEW SKUs", "+3", "ok"],
                ["23", "MOVES", "5 review", "warn"],
              ].map(([n, l, d, t], i) => (
                <div key={i} className={`px-3 ${i > 0 ? "border-l border-divider" : ""}`}>
                  <div className="font-serif text-t1 tnum leading-none" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>{n}</div>
                  <div className="label-eyebrow text-t3 mt-1.5" style={{ fontSize: 8 }}>{l}</div>
                  <div className={`text-[9px] mt-1 tnum ${t === "warn" ? "text-warning" : "text-success"}`}>{t === "ok" ? "↑ " : "● "}{d}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-divider my-4" />

            <div className="grid grid-cols-[1.6fr_1fr] gap-5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-semibold text-t1">Impact-Ranked Actions</span>
                  <span className="text-[8px] text-t3">23 total</span>
                </div>
                {[
                  ["Drop Linen Trousers $148 → $139", "+$3.2k"],
                  ["Restock Merino Crew (12 left)", "+$2.8k"],
                  ["Match COS on Wool Topcoat", "+$2.1k"],
                  ["Pull Silk Camisole from homepage", "+$1.6k"],
                  ["Raise Cashmere $189 → $204", "+$1.4k"],
                ].map(([a, v], i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-divider">
                    <span className="text-[8px] text-t3 tnum w-4 font-mono">0{i + 1}</span>
                    <span className="text-[9px] text-t1 flex-1 truncate">{a}</span>
                    <span className="text-[8px] text-amber-brand tnum">{v}</span>
                    <span className="text-[7px] bg-amber-brand text-ink-1 font-semibold px-1 py-0.5 rounded-sm">EXEC</span>
                  </div>
                ))}
              </div>
              <div className="border-l border-divider pl-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-t1">Live Feed</span>
                    <span className="relative inline-flex h-1 w-1">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-amber-brand opacity-50" style={{ animation: "sova-pulse 2.4s ease-in-out infinite" }} />
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-amber-brand" />
                    </span>
                  </div>
                  <span className="text-[7px] bg-amber-brand text-ink-1 font-semibold px-1 rounded-sm">7</span>
                </div>
                {[
                  ["Everlane −15% on Cashmere", "12m", "warn"],
                  ["COS launched Wool Trouser", "1h", "warn"],
                  ["Reformation restocked Linen", "2h", "warn"],
                  ["Recommended: drop Linen $139", "3h", "amber"],
                  ["Arket added 12 new arrivals", "4h", "warn"],
                ].map(([t, w, type], i) => (
                  <div key={i} className="flex items-start gap-2 py-1.5 border-b border-divider">
                    <span className={`h-full w-[1.5px] ${type === "warn" ? "bg-warning" : "bg-amber-brand"}`} />
                    <span className="text-[9px] text-t1 leading-tight flex-1">{t}</span>
                    <span className="text-[7px] text-t3 tnum">{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
