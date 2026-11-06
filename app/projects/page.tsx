import ProjectExplorer from "@/components/project/ProjectExplorer";
export const metadata = {
  title: "Projects — Logan",
  description:
    "Web applications, applied AI experiments and trading tools built by Logan.",
};
export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-shell page-content">
      <div className="page-intro">
        <p className="eyebrow">The project notebook</p>
        <h1>
          Work in progress.
          <br />
          <span>Learning in public.</span>
        </h1>
        <p>
          Software products and focused experiments. Explore what each project
          solves, how I approached it, and what comes next.
        </p>
      </div>
      <ProjectExplorer />
    </main>
  );
}
