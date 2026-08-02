const capabilities = [
  {
    number: "01",
    title: "Product",
    description:
      "Turning ideas into defined products, user experiences, and focused MVPs.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "Building frontend and backend systems that turn product ideas into working software.",
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Thinking about system boundaries, APIs, data flow, integrations, and how the pieces connect.",
  },
  {
    number: "04",
    title: "AI Workflow",
    description:
      "Using AI to accelerate learning, coding, debugging, research, and product iteration.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="border-t border-black/10 px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">
              01 — Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
              What I build.
            </h2>
          </div>

          <p className="max-w-sm text-black/50">
            I approach products from both sides: understanding the problem
            and building the system that solves it.
          </p>
        </div>

        <div className="grid border-l border-t border-black/10 md:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="min-h-80 border-b border-r border-black/10 p-8 transition-colors hover:bg-white lg:p-12"
            >
              <span className="font-mono text-xs text-black/40">
                {item.number}
              </span>

              <h3 className="mt-16 text-3xl font-medium">{item.title}</h3>

              <p className="mt-5 max-w-sm leading-relaxed text-black/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}