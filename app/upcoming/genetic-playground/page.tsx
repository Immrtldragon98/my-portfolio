import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GeneticPlaygroundPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            Upcoming Product
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Genetic
            <br />
            Playground.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-black/60">
            An educational interactive experience exploring genetics, human
            reproduction, probability, and biology through simulations and
            visual learning.
          </p>

          <div className="mt-24 border-t border-black/10 pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-black/40">
              Planned Architecture
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-black/60">
              Product design, frontend architecture, backend planning, AI
              workflow, and milestone roadmap will be documented here as the
              project develops.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}