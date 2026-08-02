import Link from "next/link";
import Container from "@/components/layout/Container";

export default function FeaturedProject() {
  return (
    <section id="work" className="border-b border-black/10 py-32">
      <Container>
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              Featured Project
            </p>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-7xl">
              Market Memory
            </h2>
          </div>

          <span className="hidden font-mono text-xs uppercase tracking-widest text-black/40 sm:block">
            V1 · Completed
          </span>
        </div>

        <div className="mt-16 grid min-h-[500px] overflow-hidden bg-[#deddd7] lg:grid-cols-2">
          <div className="flex flex-col justify-between p-8 lg:p-12">
            <div>
              <p className="max-w-xl text-2xl leading-relaxed tracking-tight">
                A market observation and trading journal designed to help
                capture market context, track assets, and revisit decisions
                over time.
              </p>
            </div>

            <div className="mt-16">
              <div className="flex flex-wrap gap-2">
                {["React Native", "TypeScript", "FastAPI", "Supabase"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="border border-black/15 px-3 py-2 font-mono text-[10px] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <Link
                href="/projects/market-memory"
                className="mt-8 inline-block border-b border-black pb-1 text-sm"
              >
                View case study →
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center bg-[#c7c5bd]">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
                Product Preview
              </p>

              <p className="mt-4 text-4xl font-medium tracking-tight">
                Market Memory
              </p>

              <p className="mt-2 text-sm text-black/40">
                Screenshot coming soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}