import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectList from "@/components/project/ProjectList";
import { projects } from "@/data/projects";
export default function Page(){return <main id="main-content"><Navbar/><section className="pb-24 pt-40"><Container><p className="font-mono text-xs uppercase tracking-widest text-black/60">Explorations</p><h1 className="mt-6 text-5xl font-medium tracking-tight sm:text-7xl">Where I am heading.</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/70">My learning direction combines C++ and Python systems, evidence-grounded AI and equipment reliability. These are areas I am developing through practice.</p><ProjectList items={projects.filter(p=>p.status==="Concept")}/><p className="mt-12 text-black/70">Genetic Playground has evolved into the <Link className="underline" href="/projects/minime-lab">MiniMe Lab project</Link>.</p></Container></section><Footer/></main>;}
