"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/">
          <img
            src="/logo.png"
            alt="Active Engineering Group logo"
            className="brand-logo-img"
            style={{ width: 50, height: 50 }}
          />
          <span>ACTIVE ENGINEERING GROUP</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-accent">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="btn nav-toggle"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <MobileMenu open={open} links={NAV_LINKS} onNavigate={() => setOpen(false)} />
    </header>
  );
}
