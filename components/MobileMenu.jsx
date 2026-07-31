"use client";

import Link from "next/link";

export default function MobileMenu({ open, links, onNavigate }) {
  return (
    <nav id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-label="Mobile">
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={onNavigate}>
          {link.label}
        </Link>
      ))}
      <Link href="/contact" className="btn btn-accent" onClick={onNavigate}>
        Contact
      </Link>
    </nav>
  );
}
