// Inline SVG wordmarks of fictional + real DTC brands. Monochrome, low opacity.
const BRANDS = [
  "Maison Élan", "Sundae", "Stillwater", "Heritage", "Atelier Vingt", "Form & Field",
  "Praktik", "Norden", "Linnea", "Fabricator", "Marlow & Co", "Kindred",
];

export function LogoWall() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="overflow-hidden border-y border-ink-2 py-8 bg-ink-1 relative">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-1 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-1 to-transparent z-10 pointer-events-none" />
      <div className="flex marquee gap-16 whitespace-nowrap">
        {items.map((b, i) => (
          <span
            key={i}
            className="font-serif text-d3 hover:text-d1 transition-colors text-[24px] tracking-tight shrink-0"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
