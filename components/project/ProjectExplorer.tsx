"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectList from "./ProjectList";
const filters = [
  "All projects",
  "Web apps",
  "AI / ML",
  "Trading",
  "Concepts",
] as const;
type Filter = (typeof filters)[number];
export default function ProjectExplorer() {
  const [active, setActive] = useState<Filter>("All projects");
  const items = projects.filter(
    (p) =>
      active === "All projects" ||
      (active === "AI / ML" && p.slug === "humanos") ||
      (active === "Trading" && p.slug === "market-memory") ||
      (active === "Concepts" && p.status === "Concept") ||
      (active === "Web apps" &&
        ["hypeframe", "minime-lab", "asset-intelligence"].includes(p.slug)),
  );
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            aria-pressed={active === filter}
            className="filter-button"
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="results-label" aria-live="polite">
        {items.length} {items.length === 1 ? "project" : "projects"} · {active}
      </p>
      <ProjectList items={items} />
    </>
  );
}
