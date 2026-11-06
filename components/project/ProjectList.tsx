import Link from "next/link";
import type { Project } from "@/data/projects";
export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <div className="project-grid">
      {items.map((p, index) => (
        <article className="project-card" key={p.slug}>
          <div className="card-top">
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="status-badge">
              {p.status === "Concept"
                ? "Concept"
                : p.status.startsWith("Prototype")
                  ? "Prototype"
                  : "In development"}
            </span>
          </div>
          <p className="eyebrow card-category">{p.category}</p>
          <h2>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </h2>
          <p className="card-summary">{p.summary}</p>
          <div className="tech-list">
            {p.stack.slice(0, 4).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="card-actions">
            <Link className="text-action" href={`/projects/${p.slug}`}>
              View project <span aria-hidden="true">→</span>
            </Link>
            {p.repo && (
              <a
                className="source-action"
                href={p.repo}
                aria-label={`${p.title} source on GitHub`}
              >
                Source ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
