import Certificates from "@/components/Certificates";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Certificates />
      </div>
    </main>
  );
}
