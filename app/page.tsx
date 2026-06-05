import Skills from "@/components/Skills";
import PageTracker from "@/components/PageTracker";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import ZaraCompanion from "@/components/ZaraCompanion";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center bg-black-100 px-5 sm:px-10 overflow-clip">
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Certificates />
        <Experience />
        <Skills />
        <Footer />
      </div>
      <ZaraCompanion />
      <PageTracker />
    </main>
  );
}
