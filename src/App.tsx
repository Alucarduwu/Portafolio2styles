import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CatMascot from "./components/CatMascot";

export type Language = "es" | "en";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage === "en" ? "en" : "es";
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/20 to-violet-50/20 dark:from-purple-900/10 dark:to-indigo-900/10 transition-colors duration-500" />
        <div className="absolute left-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,var(--pink-strong)_0%,transparent_70%)] opacity-20 dark:opacity-10 dark:bg-[radial-gradient(circle,#a47af0_0%,transparent_70%)]" />
        <div className="absolute right-[-10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,var(--violet-strong)_0%,transparent_70%)] opacity-20 dark:opacity-10 dark:bg-[radial-gradient(circle,#815ed4_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,var(--pink-deep)_0%,transparent_70%)] opacity-15 dark:opacity-10 dark:bg-[radial-gradient(circle,#7040b3_0%,transparent_70%)]" />

        <svg className="absolute left-[15%] top-[25%] opacity-10 dark:opacity-5 w-8 h-8 rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8L10.6,6C9.4,4.2 7.1,3.8 5.6,5.3C4.1,6.8 4.2,9.2 5.5,10.6L12,18L18.5,10.6C19.8,9.2 19.9,6.8 18.4,5.3C16.9,3.8 14.6,4.2 13.4,6L12,8ZM7,11C5.3,11 4,9.7 4,8C4,6.3 5.3,5 7,5C8.7,5 10,6.3 10,8C10,9.7 8.7,11 7,11ZM17,11C15.3,11 14,9.7 14,8C14,6.3 15.3,5 17,5C18.7,5 20,6.3 20,8C20,9.7 18.7,11 17,11ZM12,12C10.3,12 9,10.7 9,9C9,7.3 10.3,6 12,6C13.7,6 15,7.3 15,9C15,10.7 13.7,12 12,12Z" /></svg>
        <svg className="absolute right-[20%] top-[45%] opacity-10 dark:opacity-5 w-6 h-6 -rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8L10.6,6C9.4,4.2 7.1,3.8 5.6,5.3C4.1,6.8 4.2,9.2 5.5,10.6L12,18L18.5,10.6C19.8,9.2 19.9,6.8 18.4,5.3C16.9,3.8 14.6,4.2 13.4,6L12,8ZM7,11C5.3,11 4,9.7 4,8C4,6.3 5.3,5 7,5C8.7,5 10,6.3 10,8C10,9.7 8.7,11 7,11ZM17,11C15.3,11 14,9.7 14,8C14,6.3 15.3,5 17,5C18.7,5 20,6.3 20,8C20,9.7 18.7,11 17,11ZM12,12C10.3,12 9,10.7 9,9C9,7.3 10.3,6 12,6C13.7,6 15,7.3 15,9C15,10.7 13.7,12 12,12Z" /></svg>
        <svg className="absolute left-[8%] bottom-[30%] opacity-10 dark:opacity-5 w-10 h-10 rotate-45" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8L10.6,6C9.4,4.2 7.1,3.8 5.6,5.3C4.1,6.8 4.2,9.2 5.5,10.6L12,18L18.5,10.6C19.8,9.2 19.9,6.8 18.4,5.3C16.9,3.8 14.6,4.2 13.4,6L12,8ZM7,11C5.3,11 4,9.7 4,8C4,6.3 5.3,5 7,5C8.7,5 10,6.3 10,8C10,9.7 8.7,11 7,11ZM17,11C15.3,11 14,9.7 14,8C14,6.3 15.3,5 17,5C18.7,5 20,6.3 20,8C20,9.7 18.7,11 17,11ZM12,12C10.3,12 9,10.7 9,9C9,7.3 10.3,6 12,6C13.7,6 15,7.3 15,9C15,10.7 13.7,12 12,12Z" /></svg>
        <svg className="absolute right-[12%] bottom-[15%] opacity-10 dark:opacity-5 w-7 h-7 -rotate-45" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8L10.6,6C9.4,4.2 7.1,3.8 5.6,5.3C4.1,6.8 4.2,9.2 5.5,10.6L12,18L18.5,10.6C19.8,9.2 19.9,6.8 18.4,5.3C16.9,3.8 14.6,4.2 13.4,6L12,8ZM7,11C5.3,11 4,9.7 4,8C4,6.3 5.3,5 7,5C8.7,5 10,6.3 10,8C10,9.7 8.7,11 7,11ZM17,11C15.3,11 14,9.7 14,8C14,6.3 15.3,5 17,5C18.7,5 20,6.3 20,8C20,9.7 18.7,11 17,11ZM12,12C10.3,12 9,10.7 9,9C9,7.3 10.3,6 12,6C13.7,6 15,7.3 15,9C15,10.7 13.7,12 12,12Z" /></svg>
      </div>

      <div className="relative mx-auto min-h-screen max-w-[90rem]">
        <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

        <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Projects language={language} />
          <Skills language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />
        <CatMascot />
      </div>
    </div>
  );
}