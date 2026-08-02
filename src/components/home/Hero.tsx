import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-black/50">
            Product Builder · Engineer · AI-Assisted Development
          </p>

          <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-9xl">
            I build software
            <br />
            products from ideas
            <br />
            to working systems.
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-black/60">
              I explore the complete product journey—from defining problems
              and designing experiences to planning architecture, building
              systems, and iterating with AI-assisted workflows.
            </p>

            <Link
              href="/projects/market-memory"
              className="group inline-flex w-fit items-center gap-4 border-b border-black pb-2 text-sm font-medium uppercase tracking-wider"
            >
              Explore my work
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-black/40">
          <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
          Building in public
        </div>
      </div>
    </section>
  );
}