import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            01 — Completed Work
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Things I have
            <br />
            built.
          </h1>

          <div className="mt-24 border-t border-black/10">
            <Link
              href="/projects/market-memory"
              className="group block border-b border-black/10 py-12"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-black/40">
                    V1 · Completed
                  </p>

                  <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
                    Market Memory
                  </h2>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/50">
                    A market observation and trading journal designed to help
                    users capture market context, track assets, and revisit
                    their thinking over time.
                  </p>
                </div>

                <span className="text-2xl transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}