"use client";
import { useState } from "react";
import { projects, projectFilters, type ProjectFilter } from "@/data/projects";
import ProjectList from "./ProjectList";

export default function ProjectExplorer() {
  const [active, setActive] = useState<ProjectFilter>("All projects");
  const [query, setQuery] = useState("");
  const items = projects.filter((project) =>
    (active === "All projects" || project.filters.includes(active)) &&
    [project.title, project.summary, project.category, ...project.stack]
      .join(" ").toLowerCase().includes(query.trim().toLowerCase())
  );
  return (
    <>
      <div className="explorer-toolbar">
        <div className="filter-bar" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button type="button" key={filter} aria-pressed={active === filter}
              className="filter-button" onClick={() => setActive(filter)}>
              {filter}
              <span className="filter-count">{filter === "All projects" ? projects.length : projects.filter((p) => p.filters.includes(filter)).length}</span>
            </button>
          ))}
        </div>
        <label className="project-search">
          <span>Find a project or technology</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Python, AI or Hypeframe" aria-controls="project-results" />
        </label>
      </div>
      <p className="results-label" role="status">{items.length} {items.length === 1 ? "project" : "projects"} · {active}</p>
      <div id="project-results">
        {items.length ? <ProjectList items={items} /> : (
          <div className="empty-state">
            <h2>No matching projects</h2>
            <p>Try another name, technology or category.</p>
            <button type="button" className="button button-secondary" onClick={() => { setQuery(""); setActive("All projects"); }}>Reset filters</button>
          </div>
        )}
      </div>
    </>
  );
}
