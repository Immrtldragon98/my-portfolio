import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BuilderProcess from "@/components/home/BuilderProcess";
import FeaturedProject from "@/components/home/FeaturedProject";
import UpcomingPreview from "@/components/home/UpcomingPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <BuilderProcess />

      <FeaturedProject />

      <UpcomingPreview />

      <CTA />

      <Footer />
    </main>
  );
}