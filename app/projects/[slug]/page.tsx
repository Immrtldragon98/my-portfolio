import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/project/ProjectDetail";
export function generateStaticParams() { return projects.filter(p=>p.slug !== "market-memory").map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const p=projects.find(p=>p.slug===slug); return {title:p ? `${p.title} — Logan` : "Project not found", description:p?.summary}; }
export default async function Page({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const p=projects.find(p=>p.slug===slug); if(!p) notFound(); return <ProjectDetail project={p}/>; }
