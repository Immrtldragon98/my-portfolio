import Link from "next/link";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Project } from "@/data/projects";
export default function ProjectDetail({ project: p }: { project: Project }) {
 return <main id="main-content"><Navbar/><section className="pb-24 pt-36 sm:pt-44"><Container>
 <Link href="/projects" className="text-sm underline underline-offset-4">← All projects</Link>
 <p className="mt-12 font-mono text-xs uppercase tracking-widest text-black/60">{p.category} · {p.status}</p>
 <h1 className="mt-6 max-w-5xl text-5xl font-medium tracking-tight sm:text-7xl">{p.title}</h1>
 <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/70">{p.summary}</p>
 <div className="mt-8 flex flex-wrap gap-2">{p.stack.map(t=><span key={t} className="border border-black/20 px-3 py-2 text-sm">{t}</span>)}</div>
 <div className="mt-16 grid gap-12 border-t border-black/15 pt-10 md:grid-cols-2">
 <div><h2 className="text-2xl font-medium">The problem</h2><p className="mt-4 leading-relaxed text-black/70">{p.problem}</p></div>
 <div><h2 className="text-2xl font-medium">My work</h2><ul className="mt-4 list-disc space-y-3 pl-5 text-black/70">{p.work.map(w=><li key={w}>{w}</li>)}</ul></div>
 <div><h2 className="text-2xl font-medium">What I learned</h2><p className="mt-4 leading-relaxed text-black/70">{p.lesson}</p></div>
 <div><h2 className="text-2xl font-medium">Next milestone</h2><p className="mt-4 leading-relaxed text-black/70">{p.next}</p></div></div>
 {p.repo && <a href={p.repo} className="mt-12 inline-block border-b border-black pb-2">Explore source on GitHub ↗</a>}
 <p className="mt-12 max-w-3xl text-sm leading-relaxed text-black/60">Updated November 2026. Software summaries reflect repository material and project history; current production behavior has not been independently verified. Industrial work is described from my reported experience.</p>
 </Container></section><Footer/></main>;
}
