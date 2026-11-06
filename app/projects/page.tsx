import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectList from "@/components/project/ProjectList";
import { projects } from "@/data/projects";
export const metadata = { title: "Projects — Logan", description: "Software products, applied AI experiments and industrial maintenance projects." };
export default function ProjectsPage(){return <main id="main-content"><Navbar/><section className="pb-24 pt-40"><Container><p className="font-mono text-xs uppercase tracking-widest text-black/60">Selected work · November 2026</p><h1 className="mt-6 text-5xl font-medium tracking-tight sm:text-7xl">From shop floor<br/>to software.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/70">A growing body of work in maintenance, trading tools and applied AI. Each project includes its purpose, my contribution and the next milestone.</p><ProjectList items={projects.filter(p=>p.status!=="Concept")}/></Container></section><Footer/></main>;}
