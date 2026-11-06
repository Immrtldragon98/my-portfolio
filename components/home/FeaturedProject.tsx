import ProjectList from "@/components/project/ProjectList";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
export default function FeaturedProject() {
  return (
    <section id="work" className="section-band">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few things I’m building.</h2>
          </div>
          <Button href="/projects" secondary>
            All projects →
          </Button>
        </div>
        <ProjectList items={projects.slice(0, 4)} />
      </div>
    </section>
  );
}
