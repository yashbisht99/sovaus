import { TopBar, PageHeader } from "@/components/sova/Shell";
import { GlowCard, StatusPulse } from "@/components/sova/ui";

const COMPETITORS = [
  { name: "Everlane", platform: "Shopify Plus", country: "US", products: 412, last: "Dropped Cashmere −15%", when: "12m ago", health: "warn", price: "↘ −4.2%", change: -4.2 },
  { name: "COS", platform: "Custom · SAP", country: "SE", products: 287, last: "Launched Wool Trouser", when: "1h ago", health: "ok", price: "↗ +1.8%", change: 1.8 },
  { name: "Reformation", platform: "Shopify Plus", country: "US", products: 318, last: "Restocked 28 SKUs", when: "2h ago", health: "ok", price: "→ flat", change: 0 },
  { name: "Arket", platform: "Custom · H&M", country: "SE", products: 156, last: "12 SS26 arrivals", when: "4h ago", health: "ok", price: "↗ +0.4%", change: 0.4 },
  { name: "& Other Stories", platform: "Custom · H&M", country: "SE", products: 174, last: "Sitewide 20% promo", when: "6h ago", health: "warn", price: "↘ −19.6%", change: -19.6 },
];

const EVENTS = [
  { time: "12:42", brand: "EVERLANE", text: "Price drop · Cashmere Crew −15%", kind: "competitor", isNew: true },
  { time: "12:08", brand: "SOVA", text: "Recommendation issued · 4 SKUs", kind: "system", isNew: false },
  { time: "11:35", brand: "COS", text: "New launch · Heavyweight Wool Trouser", kind: "competitor", isNew: true },
  { time: "10:18", brand: "REFORMATION", text: "Restock · Linen Wide-Leg ×28", kind: "competitor", isNew: false },
  { time: "09:46", brand: "ARKET", text: "Catalog update · 12 new arrivals", kind: "competitor", isNew: false },
  { time: "09:14", brand: "SOVA", text: "Assortment score → 74 (+6 vs Q1)", kind: "system", isNew: false },
  { time: "08:22", brand: "& OTHER STORIES", text: "Promo · sitewide −20%", kind: "competitor", isNew: true },
  { time: "07:10", brand: "EVERLANE", text: "Inventory · ReNew Puffer back", kind: "competitor", isNew: false },
  { time: "YEST", brand: "COS", text: "Editorial · SS26 lookbook live", kind: "competitor", isNew: false },
];

const ADS = [
  { brand: "Everlane", when: "12d", platform: "Meta", category: "Outerwear" },
  { brand: "COS", when: "4d", platform: "TikTok", category: "Knitwear" },
  { brand: "Reformation", when: "21d", platform: "Meta", category: "Denim" },
  { brand: "Arket", when: "7d", platform: "Google", category: "Basics" },
  { brand: "& Other Stories", when: "9d", platform: "Meta", category: "Dresses" },
  { brand: "Everlane", when: "18d", platform: "TikTok", category: "Cashmere" },
];

export default function Competitors() {
  return (
    <div className="min-h-screen">
      <TopBar crumbs={["Maison Élan", "Competitors"]} />
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <PageHeader
          eyebrow="5 STOREFRONTS · 1,247 SKUs · UPDATED 12 MIN AGO"
          title="Competitor Intelligence"
          sub="Hourly catalog scans across your tracked competitors, with diff-level event history and ad creative."
          actions={
            <>
              <button className="h-8 px-3 text-[12.5px] text-t2 hover:text-t1 hover:bg-canvas-2 rounded-lg transition-colors">
                Export CSV
              </button>
              <button className="h-8 px-4 text-[12.5px] font-medium text-ink-1 bg-amber-brand hover:brightness-95 rounded-lg transition-[filter] flex items-center gap-1.5">
                <span className="text-lg leading-none">+</span> Add competitor
              </button>
            </>
          }
        />

        <section className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-10">
          {/* Competitor Table */}
          <div>
            <div className="border border-divider rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-[1.8fr_1.2fr_0.5fr_0.6fr_1.6fr_0.9fr_0.4fr] items-center gap-3 px-5 py-3.5 bg-canvas-2 label-eyebrow text-t3 border-b border-divider" style={{ fontSize: 10 }}>
                <div>NAME</div>
                <div>PLATFORM</div>
                <div>GEO</div>
                <div className="text-right">SKUs</div>
                <div>LAST EVENT</div>
                <div className="text-right">PRICE 7D</div>
                <div></div>
              </div>
              {COMPETITORS.map((c, i) => (
                <GlowCard 
                  key={i} 
                  glowColor={c.health === "warn" ? "hsl(var(--warning))" : "hsl(var(--success-soft))"}
                  borderRadius="0"
                  className="group"
                >
                  <div className="grid grid-cols-[1.8fr_1.2fr_0.5fr_0.6fr_1.6fr_0.9fr_0.4fr] items-center gap-3 px-5 py-4 border-t border-divider hover:bg-canvas-2 transition-colors duration-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <span 
                          className="h-2.5 w-2.5 rounded-full block" 
                          style={{ background: c.health === "warn" ? "hsl(var(--warning))" : "hsl(117 22% 48%)" }} 
                        />
                        {c.health === "warn" && (
                          <span 
                            className="absolute inset-0 h-2.5 w-2.5 rounded-full animate-ping opacity-50" 
                            style={{ background: "hsl(var(--warning))" }} 
                          />
                        )}
                      </div>
                      <div>
                        <div className="text-[14px] text-t1 font-medium group-hover:text-amber-brand transition-colors">{c.name}</div>
                        <div className="text-[11px] text-t3 tnum label-mono mt-0.5">{c.when}</div>
                      </div>
                    </div>
                    <div className="text-[12.5px] text-t2">{c.platform}</div>
                    <div className="text-[12px] text-t3 label-mono">{c.country}</div>
                    <div className="text-[13px] text-t1 tnum text-right font-medium">{c.products}</div>
                    <div className="text-[12.5px] text-t1 truncate">{c.last}</div>
                    <div className="text-right">
                      <span className={`text-[12.5px] tnum font-medium ${c.change < 0 ? "text-warning" : c.change > 0 ? "text-success" : "text-t3"}`}>
                        {c.price}
                      </span>
                      {/* Mini bar indicator */}
                      <div className="h-1 w-full bg-canvas-2 rounded-full mt-1.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${c.change < 0 ? "bg-warning" : c.change > 0 ? "bg-success" : "bg-t3"}`}
                          style={{ 
                            width: `${Math.min(Math.abs(c.change) * 4, 100)}%`,
                            marginLeft: c.change >= 0 ? "50%" : `${50 - Math.min(Math.abs(c.change) * 4, 50)}%`,
                          }}
                        />
                      </div>
                    </div>
                    <button className="text-t3 group-hover:text-amber-brand transition-colors text-right text-lg">→</button>
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Ad Intelligence */}
            <div className="mt-12">
              <div className="flex items-center gap-3 label-eyebrow text-t3 mb-5">
                <span className="text-amber-brand">[02]</span>
                <span>AD INTELLIGENCE</span>
                <span className="flex-1 border-t border-divider" />
                <span className="label-mono text-t3 normal-case">META · TIKTOK · GOOGLE · 30D</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {ADS.map((ad, i) => (
                  <GlowCard key={i} className="group" borderRadius="0.75rem">
                    <div className="cursor-pointer">
                      <div
                        className="aspect-[4/3] rounded-xl overflow-hidden border border-divider relative group-hover:border-amber-brand/30 transition-colors"
                        style={{
                          background: `linear-gradient(135deg, hsl(${(i * 47) % 360} 8% ${18 + (i % 4) * 6}%), hsl(${(i * 47 + 30) % 360} 8% ${38 + (i % 3) * 8}%))`,
                        }}
                      >
                        {/* Fake ad content placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                            <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" className="text-white" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                          <span className="label-mono text-white/90 text-[9px] bg-black/30 px-1.5 py-0.5 rounded">{ad.platform}</span>
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className="label-mono text-white/60 text-[8px] bg-black/40 px-1.5 py-0.5 rounded">{ad.category}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-[12px] text-t1 font-medium group-hover:text-amber-brand transition-colors">{ad.brand}</div>
                        <div className="text-[10px] text-t3 tnum label-mono">{ad.when}</div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
              <a href="#" className="text-[13px] text-amber-brand hover:underline mt-5 inline-flex items-center gap-1 group">
                View all ad creatives 
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Sticky Live Feed */}
          <div className="lg:sticky lg:top-20 self-start">
            <div className="flex items-center gap-3 label-eyebrow text-t3 mb-4">
              <span className="text-amber-brand">[03]</span>
              <span>MARKET FEED</span>
              <span className="flex-1 border-t border-divider" />
              <StatusPulse status="live" size="sm" />
            </div>
            <div className="border border-divider rounded-xl overflow-hidden shadow-sm">
              {EVENTS.map((event, i) => (
                <div 
                  key={i} 
                  className={`flex items-stretch gap-3 border-t border-divider first:border-t-0 hover:bg-canvas-2 transition-colors cursor-pointer group ${event.isNew ? "bg-amber-brand/[0.03]" : ""}`}
                >
                  <div className={`w-[3px] ${event.kind === "competitor" ? "bg-warning" : "bg-amber-brand"} group-hover:w-1 transition-all`} />
                  <div className="flex-1 py-3.5 pr-4 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="label-mono text-t1 font-medium">{event.brand}</span>
                        {event.isNew && (
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-brand animate-pulse" />
                        )}
                      </div>
                      <span className="label-mono text-t3 tnum shrink-0">{event.time}</span>
                    </div>
                    <div className="text-[12.5px] text-t1 mt-1 leading-snug group-hover:text-amber-brand transition-colors">{event.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="text-[13px] text-amber-brand hover:underline mt-4 inline-flex items-center gap-1 group">
              Open full feed 
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
