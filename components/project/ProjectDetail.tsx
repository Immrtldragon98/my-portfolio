import Link from "next/link";
import Button from "@/components/ui/Button";
import type { Project } from "@/data/projects";
export default function ProjectDetail({ project: p }: { project: Project }) {
  return (
    <main id="main-content" className="page-shell page-content">
      <Link href="/projects" className="text-action">
        ← All projects
      </Link>
      <div className="page-intro detail-intro">
        <p className="eyebrow">
          {p.category} · {p.status}
        </p>
        <h1>{p.title}</h1>
        <p>{p.summary}</p>
        <div className="tech-list">
          {p.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {p.repo && (
          <div className="button-row">
            <Button href={p.repo}>Explore source →</Button>
          </div>
        )}
      </div>
      <div className="detail-grid">
        <section>
          <p className="eyebrow">01 / Context</p>
          <h2>The problem</h2>
          <p>{p.problem}</p>
        </section>
        <section>
          <p className="eyebrow">02 / Implementation</p>
          <h2>My work</h2>
          <ul>
            {p.work.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>
        <section>
          <p className="eyebrow">03 / Reflection</p>
          <h2>What I learned</h2>
          <p>{p.lesson}</p>
        </section>
        <section>
          <p className="eyebrow">04 / Next</p>
          <h2>The next milestone</h2>
          <p>{p.next}</p>
        </section>
      </div>
      <p className="detail-note">
        Updated November 2026. Summaries reflect repository material and project
        history. Current production behavior has not been independently
        verified.
      </p>
      <Button href="/projects" secondary>
        Back to projects →
      </Button>
    </main>
  );
}
