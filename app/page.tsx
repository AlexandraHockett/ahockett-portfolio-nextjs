import Approach from "@/components/Approach";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center bg-black-100 px-5 sm:px-10 overflow-clip">
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Certificates />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
