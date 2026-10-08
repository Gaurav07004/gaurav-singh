import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import TechStack from "../components/sections/TechStack/TechStack";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Projects";
// import Contact from "../components/sections/Contact/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </Layout>
  );
}
