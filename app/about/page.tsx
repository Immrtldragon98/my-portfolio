import Button from "@/components/ui/Button";
export const metadata = {
  title: "About — Logan",
  description:
    "Logan’s journey building software, trading tools and applied AI experiments.",
};
export default function About() {
  return (
    <main id="main-content" className="page-shell page-content">
      <div className="page-intro">
        <p className="eyebrow">About Logan</p>
        <h1>
          Learn by building.
          <br />
          <span>Improve by doing.</span>
        </h1>
        <p>
          I’m V. Yadhu Vamshi Sukumar, also known as Logan. I’m developing my
          software skills through real products, with a focus on backend
          systems, applied AI and trading tools.
        </p>
      </div>
      <div className="about-grid">
        <section>
          <h2>A journey through projects</h2>
          <p>
            Market Memory Pro started with a practical need: keep market
            observations, decisions and lessons together. HumanOS explores
            conversational memory and evidence. Hypeframe and MiniMe Lab let me
            work on discovery, interaction and educational experiences.
          </p>
          <p>
            I use AI tools throughout development while learning to examine the
            architecture, validate behavior and understand the code behind each
            feature.
          </p>
          <Button href="/projects" secondary>
            Explore my work →
          </Button>
        </section>
        <section className="skills-panel">
          <p className="eyebrow">Developing through practice</p>
          {[
            "Python & FastAPI backends",
            "TypeScript & React interfaces",
            "C++ calculation modules",
            "Data modeling & API design",
            "Applied ML & structured AI output",
            "Testing, debugging & deployment",
          ].map((s) => (
            <div className="skill-row" key={s}>
              {s}
            </div>
          ))}
        </section>
      </div>
      <section className="direction-panel">
        <p className="eyebrow">The direction</p>
        <h2>Go deeper, one working system at a time.</h2>
        <p>
          My next focus is stronger C++ and Python foundations, reliable AI
          workflows, and the mathematics behind quantitative systems. This
          portfolio documents that learning journey.
        </p>
      </section>
    </main>
  );
}
