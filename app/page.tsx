import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { CourseHighlights } from "@/components/course-highlights";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";
import { MissionVisionGoals } from "@/components/mission-vision-goals";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <CourseHighlights />
        <Experience />
        <Approach />
        <MissionVisionGoals />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
