import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="page-shell hero">
      <div>
        <p className="eyebrow">
          <span className="accent-dot" /> Software · Applied AI · Trading tools
        </p>
        <h1>
          Ideas into code.
          <br />
          <span>Code into products.</span>
        </h1>
        <p className="hero-copy">
          I’m Logan. I build web applications and explore AI systems through
          hands-on, AI-assisted development. Every project is a chance to learn,
          test, and make the next version better.
        </p>
        <div className="button-row">
          <Button href="/projects">
            Explore projects <span aria-hidden="true">↗</span>
          </Button>
          <Button href="/about" secondary>
            My journey →
          </Button>
        </div>
        <p className="hero-footnote">
          Based in India · Building with Python, TypeScript & C++
        </p>
      </div>
      <aside className="focus-card">
        <p className="eyebrow">Currently exploring</p>
        <h2>
          Systems that remember.
          <br />
          Tools that stay useful.
        </h2>
        <div className="focus-row">
          <span>01</span>
          <div>
            <strong>Market Memory Pro</strong>
            <p>Journaling, alerts & decision history</p>
          </div>
        </div>
        <div className="focus-row">
          <span>02</span>
          <div>
            <strong>HumanOS</strong>
            <p>Conversation, evidence & evolving memory</p>
          </div>
        </div>
        <div className="focus-row">
          <span>03</span>
          <div>
            <strong>The next layer</strong>
            <p>C++ · Python · Applied machine learning</p>
          </div>
        </div>
        <div className="focus-note">Build → test → learn → refine</div>
      </aside>
    </section>
  );
}
