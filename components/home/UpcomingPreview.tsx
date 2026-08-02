import Link from "next/link";
import Container from "@/components/layout/Container";

const projects = [
  {
    number: "01",
    title: "Genetic Playground",
    description:
      "An interactive educational experience exploring genetics, reproduction, probability, and biology.",
    href: "/upcoming/genetic-playground",
  },
  {
    number: "02",
    title: "Dot Space",
    description:
      "A privacy-first presence application for family and close friends.",
    href: "/upcoming/dot-space",
  },
];

export default function UpcomingPreview() {
  return (
    <section className="border-b border-black/10 py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              What's Next
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Ideas I want to turn into products.
            </h2>

            <div className="mt-20 divide-y divide-black/10 border-y border-black/10">
              {projects.map((project) => (
                <Link
                  key={project.number}
                  href={project.href}
                  className="group grid gap-6 py-10 md:grid-cols-[80px_1fr_40px]"
                >
                  <span className="font-mono text-xs text-black/40">
                    {project.number}
                  </span>

                  <div>
                    <h3 className="text-3xl font-medium tracking-tight transition-opacity group-hover:opacity-50">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-relaxed text-black/50">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-2xl transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/upcoming"
              className="mt-8 inline-block border-b border-black pb-1 text-sm"
            >
              Explore upcoming projects →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}