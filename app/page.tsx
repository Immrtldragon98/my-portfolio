import Hero from "@/components/home/Hero";
import BuilderProcess from "@/components/home/BuilderProcess";
import FeaturedProject from "@/components/home/FeaturedProject";
import CTA from "@/components/home/CTA";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedProject />
      <BuilderProcess />
      <CTA />
    </main>
  );
}
