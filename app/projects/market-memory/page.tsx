import ProjectDetail from "@/components/project/ProjectDetail";
import { projects } from "@/data/projects";
export const metadata = {
  title: "Market Memory Pro — Logan",
  description: projects[0].summary,
};
export default function Page() {
  return <ProjectDetail project={projects[0]} />;
}
