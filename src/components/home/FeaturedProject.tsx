import Link from "next/link";

const technologies = [
  "React Native",
  "TypeScript",
  "FastAPI",
  "Supabase",
];

export default function FeaturedProject() {
  return (
    <section className="bg-[#171717] px-6 py-32 text-[#f5f4ef] lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              02 — Featured Project
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-tight sm:text-7xl">
              Market Memory.
            </h2>
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            V1 · Completed
          </span>
        </div>

        <div className="flex aspect-video items-center justify-center border border-white/10 bg-[#222]">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
              Market Memory
            </p>

            <p className="mt-4 text-sm text-white/30">
              Product screenshot coming next
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <p className="max-w-xl text-2xl leading-relaxed text-white/70">
            A market observation and trading journal designed to help users
            capture market context, track assets, and revisit their thinking
            over time.
          </p>

          <div className="flex flex-col items-start justify-between gap-8 md:items-end">
            <div className="flex flex-wrap gap-3 md:justify-end">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/20 px-3 py-2 font-mono text-xs text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/projects/market-memory"
              className="group inline-flex items-center gap-4 border-b border-white/40 pb-2 text-sm uppercase tracking-wider"
            >
              View case study
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}