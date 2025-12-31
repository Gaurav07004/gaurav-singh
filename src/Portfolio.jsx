import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";

import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import ExperienceSection from "./components/ExperienceSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ContactSection from "./components/ContactSection";

export default function Portfolio() {
  return (
    <main className="px-4 py-2 bg-(--bg-light) font-[Quicksand]">
      <Navbar />
      <PreLoader />
      <HeroSection />

      {/* 
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection /> */}
    </main>
  );
}
