import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MarketMemoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            Completed Project · V1
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Market
            <br />
            Memory.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-black/60">
            A market observation and trading journal designed to help users
            capture market context, track assets, and revisit their thinking
            over time.
          </p>

          <div className="mt-16 flex flex-wrap gap-3">
            {["React Native", "TypeScript", "FastAPI", "Supabase"].map(
              (technology) => (
                <span
                  key={technology}
                  className="border border-black/15 px-4 py-2 font-mono text-xs uppercase tracking-wider"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-24 grid gap-12 border-t border-black/10 pt-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-black/40">
                Product
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-black/60">
                Market Memory explores a focused workspace for recording market
                observations, monitoring assets, setting alerts, and building a
                personal record of trading decisions.
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-black/40">
                Case Study
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-black/60">
                The full case study will document the product design,
                architecture, frontend, backend, AI-assisted workflow,
                milestones, and version history.
              </p>
            </div>
          </div>

          <Link
            href="/projects"
            className="mt-16 inline-flex border-b border-black pb-2 text-sm uppercase tracking-wider"
          >
            ← Back to projects
          </Link>
        </Container>
      </section>

      <Footer />
    </main>
  );
}