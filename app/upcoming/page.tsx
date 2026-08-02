import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UpcomingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            02 — Upcoming
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Ideas becoming
            <br />
            products.
          </h1>

          <div className="mt-24 border-t border-black/10">
            <Link
              href="/upcoming/genetic-playground"
              className="group block border-b border-black/10 py-12"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-black/40">
                Product Concept
              </p>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-4xl font-medium sm:text-6xl">
                  Genetic Playground
                </h2>

                <span className="text-2xl transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/upcoming/dot-space"
              className="group block border-b border-black/10 py-12"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-black/40">
                Product Concept
              </p>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-4xl font-medium sm:text-6xl">
                  Dot Space
                </h2>

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