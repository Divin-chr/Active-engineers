export default function ShimmerCard({ className = "", children }) {
  return <div className={`card-img shimmer-card ${className}`}>{children}</div>;
}
