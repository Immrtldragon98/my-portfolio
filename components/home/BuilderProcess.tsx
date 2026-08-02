import Container from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "I start with a problem, question, or idea and try to understand why it matters.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I turn the idea into a product experience by thinking through users, flows, features, and interfaces.",
  },
  {
    number: "03",
    title: "Architect",
    description:
      "I plan how the product should work across the frontend, backend, data, APIs, and external services.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "I build, test, debug, and iterate—using AI tools as part of the development workflow.",
  },
];

export default function BuilderProcess() {
  return (
    <section className="border-b border-black/10 py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.5fr_1.5fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              How I Build
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              I learn by building the entire system.
            </h2>

            <div className="mt-20 divide-y divide-black/10 border-y border-black/10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-6 py-8 md:grid-cols-[80px_200px_1fr]"
                >
                  <span className="font-mono text-xs text-black/40">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-medium">{step.title}</h3>

                  <p className="max-w-lg leading-relaxed text-black/50">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}