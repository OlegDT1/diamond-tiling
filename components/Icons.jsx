// Lightweight inline SVG icon set. Stroke-based, inherits currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Icon = {
  grid: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  bath: (p) => (
    <svg {...base} {...p}>
      <path d="M4 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M6 19v2M18 19v2" />
    </svg>
  ),
  slab: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M12 9v11" />
    </svg>
  ),
  heat: (p) => (
    <svg {...base} {...p}>
      <path d="M8 14a4 4 0 1 0 8 0c0-2-2-3-2-6 0 0-1 1-1 3 0-2-1-4-3-5 .5 3-2 4-2 8z" />
    </svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  ),
  shower: (p) => (
    <svg {...base} {...p}>
      <path d="M4 20V9a4 4 0 0 1 4-4h1V3" />
      <path d="M9 5a3 3 0 0 1 3 3" />
      <path d="M13 11v.01M16 13v.01M10 13v.01M13 15v.01M16 17v.01M10 17v.01M13 19v.01" />
    </svg>
  ),
  tile: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="8" height="6" rx="1" />
      <rect x="13" y="5" width="8" height="6" rx="1" />
      <rect x="3" y="13" width="8" height="6" rx="1" />
      <rect x="13" y="13" width="8" height="6" rx="1" />
    </svg>
  ),
  expand: (p) => (
    <svg {...base} {...p}>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </svg>
  ),
  diamond: (p) => (
    <svg {...base} {...p}>
      <path d="M6 3h12l3 6-9 12L3 9z" />
      <path d="M3 9h18M9 3l-3 6 6 12 6-12-3-6" />
    </svg>
  ),
  gem: (p) => (
    <svg {...base} {...p}>
      <path d="M5 4h14l3 5-10 11L2 9z" />
      <path d="M2 9h20M8 4l-2 5h12l-2-5" />
    </svg>
  ),
  clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  badge: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-1 7 4-2 4 2-1-7" />
      <path d="M9.5 9l1.5 1.5L14.5 7" />
    </svg>
  ),
  sparkle: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 11l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...p}>
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  quote: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={28} height={28} {...p}>
      <path d="M7 7H4a4 4 0 0 0 0 8h1v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2zm13 0h-3a4 4 0 0 0 0 8h1v2a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5V9a2 2 0 0 0-2-2z" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  instagram: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (p) => (
    <svg {...base} {...p}>
      <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1z" />
    </svg>
  ),
};

export default Icon;
