import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhatIBuild from "@/src/components/home/WhatIBuild";
import FeaturedProject from "@/components/home/FeaturedProject";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#171717]">
      <Navbar />

      <Hero />

      <WhatIBuild />

      <FeaturedProject />

      <footer className="border-t border-black/10 px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            © 2026 Immtrl Dragon
          </p>
        </div>
      </footer>
    </main>
  );
}
