import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DotSpacePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            Upcoming Product
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            Dot
            <br />
            Space.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-black/60">
            A privacy-first presence application designed for family and close
            friends, focused on knowing how someone is doing without the
            pressure of constant communication.
          </p>

          <div className="mt-24 border-t border-black/10 pt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-black/40">
              Planned Architecture
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-black/60">
              The planned system will document the product experience,
              real-time presence architecture, frontend, backend, data flow,
              and development roadmap.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}