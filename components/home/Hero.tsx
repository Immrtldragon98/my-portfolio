import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center border-b border-black/10 pt-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              Product Builder · Engineer · Learner
            </p>

            <h1 className="mt-8 max-w-6xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">
              I turn ideas
              <br />
              into products.
            </h1>
          </div>

          <div className="max-w-md lg:pb-3">
            <p className="text-lg leading-relaxed text-black/60">
              I explore ideas by building them—from product design and user
              experience to frontend, backend, architecture, and AI-assisted
              development.
            </p>

            <div className="mt-8 flex gap-6 text-sm">
              <a
                href="#work"
                className="border-b border-black pb-1 transition-opacity hover:opacity-50"
              >
                Explore my work ↓
              </a>

              <a
                href="/about"
                className="border-b border-black/30 pb-1 text-black/50 transition-opacity hover:opacity-100"
              >
                About me →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-black/10 pt-5">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            Based in India
          </p>

          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            2026
          </p>
        </div>
      </Container>
    </section>
  );
}