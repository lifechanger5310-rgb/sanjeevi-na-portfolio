import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import AIPromptEngineering from "@/sections/AIPromptEngineering";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIPromptEngineering />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </>
  );
}
