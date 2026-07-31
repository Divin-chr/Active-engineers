import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-3">
        <div>
          <div className="brand">
            <span className="brand-logo"></span>
            <span>Active Engineering Group</span>
          </div>
          <p className="section-subtitle">
            Integrity • Excellence • Sustainability • Client-Centered • Innovation
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>
            <Link href="/services">Services</Link> · <Link href="/projects">Projects</Link> ·{" "}
            <Link href="/about">About</Link> · <Link href="/contact">Contact</Link>
          </p>
        </div>

        <div>
          <h4>Address</h4>
          <p>KG14 Ave, Gisozi, Kigali — Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
