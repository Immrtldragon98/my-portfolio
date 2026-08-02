import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-32">
      <Container>
        <div className="border-t border-black/10 pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            Let's Connect
          </p>

          <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Curious about what I am building next?
            </h2>

            <a
              href="mailto:your@email.com"
              className="shrink-0 border-b border-black pb-2 text-sm"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}