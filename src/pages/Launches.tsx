import { TopBar, PageHeader } from "@/components/sova/Shell";

const LAUNCHES = [
  { name: "SS26 Linen Capsule", status: "Live", date: "14 Apr 2026", state: "active", ctx: "$28,400 · 312 units · 4 days in", color: "#5B8A57" },
  { name: "Heavyweight Knits", status: "Drop scheduled", date: "25 Apr 2026", state: "queued", ctx: "Brief approved · creative in review", color: "#E8A020" },
  { name: "Resort Edit", status: "In planning", date: "8 May 2026", state: "draft", ctx: "12 SKUs proposed · awaiting buyer sign-off", color: "#9E9890" },
  { name: "Outerwear Refresh", status: "Concept", date: "Q3 2026", state: "draft", ctx: "Pulled from whitespace analysis", color: "#9E9890" },
];

export default function Launches() {
  return (
    <div>
      <TopBar crumbs={["Maison Élan", "Launches"]} />
      <div className="max-w-[1240px] mx-auto px-8 py-8">
        <PageHeader
          eyebrow="PIPELINE · 4 IN FLIGHT"
          title="Launches"
          sub="Track launches from concept through live, with revenue performance and competitive context."
          actions={
            <button className="h-8 px-3.5 text-[12.5px] font-medium text-ink-1 bg-amber-brand hover:brightness-95 rounded-md transition-[filter]">+ New launch</button>
          }
        />

        <div className="border border-divider rounded-lg overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr_0.6fr] items-center gap-3 px-4 py-3 bg-canvas-2 label-eyebrow text-t3" style={{ fontSize: 10 }}>
            <div>NAME</div><div>STATUS</div><div>DATE</div><div>CONTEXT</div><div></div>
          </div>
          {LAUNCHES.map((l, i) => (
            <div key={i} className={`grid grid-cols-[2fr_1fr_1fr_2fr_0.6fr] items-center gap-3 px-4 py-4 border-t border-divider hover:bg-canvas-2 transition-colors ${l.state === "active" ? "bg-canvas-2/40" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full shrink-0" style={{ background: l.color }} />
                <div>
                  <div className="text-[14px] text-t1 font-medium">{l.name}</div>
                  {l.state === "active" && <div className="text-[10px] text-amber-brand label-mono mt-0.5">● ACTIVE LAUNCH</div>}
                </div>
              </div>
              <div className="text-[12.5px] text-t2">{l.status}</div>
              <div className="text-[12.5px] text-t1 tnum label-mono">{l.date}</div>
              <div className="text-[12.5px] text-t2">{l.ctx}</div>
              <button className="text-right text-t3 hover:text-t1">→</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
