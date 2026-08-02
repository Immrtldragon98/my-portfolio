import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="border-b border-black/10 px-6 pb-32 pt-40 lg:px-10">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
            About
          </p>

          <h1 className="mt-8 max-w-6xl text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">
            I am interested
            <br />
            in building things
            <br />
            that matter.
          </h1>
        </Container>
      </section>

      <section className="border-b border-black/10 py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
                My Background
              </p>
            </div>

            <div className="max-w-3xl space-y-8 text-xl leading-relaxed text-black/60">
              <p>
                I come from a mechanical engineering background and have always
                been curious about how things work—whether that means physical
                systems, software, products, or the ideas behind them.
              </p>

              <p>
                My journey into software has been driven primarily by building.
                Instead of learning technologies in isolation, I try to
                understand them by creating something real with them.
              </p>

              <p>
                This portfolio is a record of that process: the products I
                have built, the systems I have designed, the ideas I am
                exploring, and the lessons I pick up along the way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-black/10 py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
                How I Learn
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                I learn by going from curiosity to implementation.
              </h2>

              <div className="mt-16 grid gap-px bg-black/10 sm:grid-cols-2">
                {[
                  {
                    title: "Understand",
                    text: "I break down a problem until I understand what I am actually trying to solve.",
                  },
                  {
                    title: "Explore",
                    text: "I read, research, experiment, and study existing systems and approaches.",
                  },
                  {
                    title: "Build",
                    text: "I turn what I learn into something tangible that I can test and improve.",
                  },
                  {
                    title: "Reflect",
                    text: "I look at what worked, what failed, and what I would change in the next version.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#f5f4ef] p-8">
                    <h3 className="text-2xl font-medium">{item.title}</h3>

                    <p className="mt-4 leading-relaxed text-black/50">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-black/10 py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
                Current Focus
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Product Design",
                "Frontend Development",
                "Backend Systems",
                "System Architecture",
                "AI-Assisted Development",
                "Learning by Building",
              ].map((skill) => (
                <div
                  key={skill}
                  className="border-t border-black/10 py-5 text-xl"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="border-t border-black/10 pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              Currently
            </p>

            <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                Building, learning, and figuring out what comes next.
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

      <Footer />
    </main>
  );
}