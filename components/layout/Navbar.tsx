"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">L.</span>
          <span>
            Logan
            <span className="brand-caption">Developer & product builder</span>
          </span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={
                (
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)
                )
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          className="button button-secondary nav-github"
          href="https://github.com/logan9e7"
        >
          GitHub →
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={
                (
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)
                )
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <a href="https://github.com/logan9e7">GitHub →</a>
        </nav>
      )}
    </header>
  );
}
