import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export type Language = "es" | "en";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage === "en" ? "en" : "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-140px] top-8 h-80 w-80 rounded-full bg-fuchsia-400/12 blur-3xl" />
        <div className="absolute right-[-100px] top-24 h-96 w-96 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute bottom-[-80px] left-1/3 h-80 w-80 rounded-full bg-pink-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto min-h-screen max-w-[90rem]">
        <Navbar language={language} setLanguage={setLanguage} />

        <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Skills language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />
      </div>
    </div>
  );
}