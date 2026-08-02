"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Work", href: "/projects" },
  { label: "Upcoming", href: "/upcoming" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f5f4ef]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Immtrl Dragon
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition-opacity hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-50"
          >
            GitHub ↗
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-sm md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#f5f4ef] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}