import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f5f4ef]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Immtrl Dragon
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/projects/market-memory" className="hover:opacity-50">
            Work
          </Link>

          <Link href="/upcoming" className="hover:opacity-50">
            Upcoming
          </Link>

          <Link href="/about" className="hover:opacity-50">
            About
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}