// Premium logo wall with smooth infinite scroll

const BRANDS = [
  "Shopify",
  "Stripe",
  "Linear",
  "Vercel",
  "Notion",
  "Figma",
  "Slack",
  "Discord",
  "Airbnb",
  "Spotify",
  "Netflix",
  "Adobe",
];

export function LogoWall() {
  const items = [...BRANDS, ...BRANDS];
  
  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="text-center text-sm text-muted font-medium">
          Trusted by leading companies worldwide
        </p>
      </div>
      
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        
        <div className="flex marquee gap-16 whitespace-nowrap items-center">
          {items.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 shrink-0"
            >
              <span className="text-xl font-semibold text-muted/60 hover:text-secondary transition-colors tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LogoGrid() {
  return (
    <section className="py-20 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-muted font-medium mb-12">
          Trusted by industry leaders
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {BRANDS.slice(0, 6).map((brand) => (
            <div
              key={brand}
              className="h-12 flex items-center justify-center"
            >
              <span className="text-lg font-semibold text-muted/50 hover:text-secondary transition-colors tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
