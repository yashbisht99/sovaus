import { TopBar, PageHeader } from "@/components/sova/Shell";

const CONNECTIONS = [
  { name: "Shopify", desc: "Product catalog · orders · price write", lag: "12 min ago", state: "ok" },
  { name: "Klaviyo", desc: "Email lists · campaign performance", lag: "1 h ago", state: "ok" },
  { name: "Meta Ads", desc: "Ad creative · spend · audience hints", lag: "2 d ago", state: "warn" },
  { name: "Google Ads", desc: "Search trends · brand keyword movement", lag: "18 min ago", state: "ok" },
];

export default function Operations() {
  return (
    <div>
      <TopBar crumbs={["Maison Élan", "Operations"]} />
      <div className="max-w-[1240px] mx-auto px-8 py-8">
        <PageHeader
          eyebrow="CONNECTIONS · DATA · HEALTH"
          title="Operations"
          sub="Sources connected to Sova, last sync timestamps, and infrastructure health."
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider rounded-lg overflow-hidden">
          {CONNECTIONS.map((c, i) => (
            <div key={i} className="bg-canvas p-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.state === "ok" ? "hsl(117 22% 48%)" : "hsl(14 55% 47%)" }} />
                  <span className="text-[14.5px] text-t1 font-medium">{c.name}</span>
                </div>
                <div className="text-[12.5px] text-t2 mt-1.5">{c.desc}</div>
                <div className="text-[11px] text-t3 mt-1.5 tnum label-mono">LAST SYNC · {c.lag.toUpperCase()}</div>
              </div>
              <button className={`text-[12px] px-3 py-1.5 rounded-md ${c.state === "ok" ? "text-t2 hover:text-t1 hover:bg-canvas-2" : "text-warning border border-warning"}`}>
                {c.state === "ok" ? "Manage" : "Reauth"}
              </button>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3 label-eyebrow text-t3 mb-4">
            <span className="text-amber-brand">[02]</span>
            <span>DATA HEALTH · LAST 24H</span>
            <span className="flex-1 border-t border-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border-y border-divider divide-x divide-divider">
            {[
              ["1,247", "PRODUCTS TRACKED"],
              ["98.4%", "SCRAPE SUCCESS RATE"],
              ["4.2 min", "MEDIAN UPDATE LAG"],
              ["0", "FAILED JOBS · 24H"],
            ].map(([n, l], i) => (
              <div key={i} className="px-6 py-7">
                <div className="font-serif text-t1 tnum" style={{ fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
                <div className="label-eyebrow text-t3 mt-3" style={{ fontSize: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3 label-eyebrow text-t3 mb-4">
            <span className="text-amber-brand">[03]</span>
            <span>RECENT JOBS</span>
            <span className="flex-1 border-t border-divider" />
          </div>
          <div className="border border-divider rounded-lg overflow-hidden">
            {[
              ["12:43:18", "scrape.everlane.full", "Success", "ok", "412 SKUs · 4.1s"],
              ["12:42:01", "diff.everlane.cashmere-crew", "Success", "ok", "1 change · −15%"],
              ["12:38:44", "shopify.write.linen-trousers", "Success", "ok", "$148 → $139"],
              ["12:30:00", "scrape.cos.full", "Success", "ok", "287 SKUs · 6.2s"],
              ["11:45:22", "scan.meta-ads.everlane", "Warning", "warn", "rate-limited · retried"],
              ["11:30:00", "scrape.reformation.full", "Success", "ok", "318 SKUs · 5.4s"],
            ].map(([time, job, status, state, ctx], i) => (
              <div key={i} className="grid grid-cols-[100px_2fr_100px_1fr] items-center gap-3 px-4 py-3 border-t border-divider first:border-t-0 hover:bg-canvas-2">
                <div className="label-mono text-t3 tnum">{time}</div>
                <div className="font-mono text-[12.5px] text-t1">{job}</div>
                <div className={`text-[12px] tnum ${state === "warn" ? "text-warning" : "text-success"}`}>● {status}</div>
                <div className="text-[12px] text-t2 tnum">{ctx}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
