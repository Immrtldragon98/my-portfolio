import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Immtrl Dragon
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/50">
              Building products from ideas to working systems.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-black/60">
            <Link href="/projects" className="hover:text-black">
              Work
            </Link>

            <Link href="/upcoming" className="hover:text-black">
              Upcoming
            </Link>

            <Link href="/about" className="hover:text-black">
              About
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            © 2026 Immtrl Dragon
          </p>
        </div>
      </Container>
    </footer>
  );
}