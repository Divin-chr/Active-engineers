// Surveyor (head and shoulders) sighting through a total station on a tripod,
// drawn to match the lucide-react icon set (24px grid, 2px round strokes,
// currentColor). Rendered larger than the stock icons so both figures stay legible.
export default function TotalStation({ style, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 34, height: 34, ...style }}
      {...props}
    >
      {/* Surveyor */}
      <circle cx="6" cy="7" r="2.5" />
      <path d="M1.5 17v-1a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1" />
      {/* Total station and tripod */}
      <path d="M14 7h-2" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <path d="M17 10v2" />
      <path d="M14 12h6" />
      <path d="M15.5 12l-3 10" />
      <path d="M18.5 12l3 10" />
      <path d="M17 12v7" />
    </svg>
  );
}
