import { lazy, Suspense } from "react";

const MarketScene = lazy(() =>
  import("./MarketScene").then((m) => ({ default: m.MarketScene }))
);

type Props = {
  className?: string;
  density?: "hero" | "subtle";
};

/**
 * Lazy-loaded wrapper for the 3D MarketScene.
 * While the three.js bundle is loading we render a quiet radial backdrop
 * that matches the final scene, so there is no layout pop.
 */
export function LazyMarketScene({ className, density = "hero" }: Props) {
  return (
    <Suspense fallback={<SceneFallback className={className} />}>
      <MarketScene className={className} density={density} />
    </Suspense>
  );
}

function SceneFallback({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(232,160,32,0.08) 0%, rgba(13,13,13,0) 55%), #0D0D0D",
      }}
    />
  );
}

export default LazyMarketScene;
