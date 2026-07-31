export default function Marquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
