import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

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
          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Contact Info</h4>
          <p className="footer-contact-item">
            <MapPin aria-hidden="true" />{" "}
            <a href="https://maps.app.goo.gl/RFJBAnzWnBmPauit9" target="_blank" rel="noopener noreferrer">
              KG14 Ave, Gisozi, Kigali — Rwanda
            </a>
          </p>
          <p className="footer-contact-item">
            <Mail aria-hidden="true" /> activegroup2021@gmail.com
          </p>
          <p className="footer-contact-item">
            <Phone aria-hidden="true" /> +250 781 537 973 / +250 788 981 320
          </p>
        </div>
      </div>
    </footer>
  );
}
