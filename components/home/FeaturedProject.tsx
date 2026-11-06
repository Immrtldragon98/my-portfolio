import Link from "next/link";
import Container from "@/components/layout/Container";
import ProjectList from "@/components/project/ProjectList";
import { projects } from "@/data/projects";
export default function FeaturedProject(){return <section id="work" className="border-b border-black/10 py-20 sm:py-28"><Container><p className="font-mono text-xs uppercase tracking-widest text-black/60">Selected work</p><h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">Build. Test. Refine.</h2><ProjectList items={projects.slice(0,4)}/><Link href="/projects" className="mt-10 inline-block border-b border-black pb-2">Explore software and engineering projects →</Link></Container></section>;}
