// Decorative street-grid texture. Deliberately abstract: it depicts no real
// place and claims no borders, so it carries none of the compliance baggage
// of publishing an actual map. Pure SVG — no tiles, no key, no dependency.

const MINOR_V = [70, 145, 205, 290, 355, 430, 500, 575, 640, 720, 790, 860, 930, 1010, 1080, 1150]
const MINOR_H = [55, 120, 190, 250, 320, 390, 455, 525]
const BLOCKS = [
  [95, 80, 90, 60], [230, 145, 110, 70], [400, 70, 80, 90], [545, 200, 120, 65],
  [755, 105, 95, 75], [900, 260, 110, 80], [175, 350, 130, 70], [480, 400, 100, 75],
  [660, 330, 85, 60], [1020, 150, 90, 65], [330, 250, 70, 55], [820, 430, 120, 60],
]

export function StreetMap({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1200" height="600" fill="var(--color-paper-2)" />

      {/* city blocks */}
      {BLOCKS.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="var(--color-muted)" opacity="0.07" />
      ))}

      {/* parks */}
      <rect x="600" y="60" width="130" height="95" rx="10" fill="var(--color-brass)" opacity="0.12" />
      <rect x="240" y="440" width="150" height="80" rx="10" fill="var(--color-brass)" opacity="0.1" />

      {/* river */}
      <path
        d="M-20 470 C 180 430, 300 520, 470 480 S 760 380, 900 420 S 1130 470, 1220 440"
        fill="none"
        stroke="var(--color-brass)"
        strokeWidth="26"
        opacity="0.16"
        strokeLinecap="round"
      />

      {/* minor streets */}
      <g stroke="var(--color-muted)" strokeWidth="1.5" opacity="0.18">
        {MINOR_V.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" />
        ))}
        {MINOR_H.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} />
        ))}
      </g>

      {/* arterials */}
      <g stroke="var(--color-muted)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.26">
        <path d="M-20 210 C 220 190, 420 250, 640 215 S 1000 165, 1220 195" />
        <path d="M265 -20 L 265 620" />
        <path d="M865 -20 C 845 180, 905 380, 875 620" />
        <path d="M-20 545 L 1220 520" />
      </g>
    </svg>
  )
}
