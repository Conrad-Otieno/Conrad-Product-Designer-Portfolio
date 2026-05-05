export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Conrad"
      role="img"
    >
      {/*
        Original mark: two offset squares overlapping to form a C glyph.
        The back square is solid. The front square is stroked with a
        transparent fill so the background shows through — works on any colour.
        The top-left overlap block (where both squares intersect) is filled
        solid to reinforce the C silhouette.
      */}

      {/* Back square — solid */}
      <rect x="1" y="1" width="18" height="18" rx="3" fill="currentColor" />

      {/* Front square — transparent fill + stroke, sits bottom-right */}
      <rect x="7" y="7" width="18" height="18" rx="3" fill="transparent" stroke="#f59e0b" strokeWidth="1.5" />

      {/* Overlap block — fills the intersection to complete the C shape */}
      <rect x="7" y="7" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
