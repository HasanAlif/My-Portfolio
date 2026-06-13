import About from "@/Components/sections/About";
import Contact from "@/Components/sections/Contact";
import Experience from "@/Components/sections/Experience";
import GithubStats from "@/Components/sections/GithubStats";
import Hero from "@/Components/sections/Hero";
import Projects from "@/Components/sections/Projects";
import Services from "@/Components/sections/Services";
import TechStack from "@/Components/sections/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Experience />
      <Projects />
      <GithubStats />
      <Contact />
    </>
  );
}
