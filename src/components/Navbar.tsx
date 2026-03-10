import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Languages, Sparkles } from "lucide-react";
import type { Language } from "../App";

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const content = {
  es: {
    role: "Full Stack Developer",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Tecnologías",
    contact: "Contacto",
  },
  en: {
    role: "Full Stack Developer",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
};

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const t = content[language];
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 20) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(delta) < 6) return;

      if (delta > 0) setIsVisible(false);
      if (delta < 0) setIsVisible(true);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : -90,
          opacity: isVisible ? 1 : 0.98,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#09090f]/80 via-[#09090f]/55 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="rpg-window console-shell arcade-corners pixel-console overflow-hidden border border-fuchsia-300/15 bg-[#0b0914]/95 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0b0914]/90">
            <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
              <a href="#home" className="group flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-fuchsia-300/20 bg-gradient-to-br from-fuchsia-500/15 via-violet-500/15 to-pink-400/10 text-fuchsia-200 shadow-[0_0_16px_rgba(244,114,182,0.12)] transition-transform duration-300 group-hover:scale-105">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="min-w-0 text-left leading-tight">
                  <p className="truncate bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text text-sm font-semibold text-transparent sm:text-base">
                    Anahí Lozano
                  </p>
                  <p className="hidden truncate text-[11px] text-slate-400 sm:block">
                    {t.role}
                  </p>
                </div>
              </a>

              <div className="hidden items-center gap-3 md:flex">
                <nav className="game-screen console-screen flex items-center rounded-[1.4rem] px-3 py-2 text-sm text-slate-300">
                  <div className="mr-3 flex items-center gap-1.5 border-r border-white/8 pr-3">
                    <span className="pacman" />
                    <span className="pacdot" />
                    <span className="pacdot" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="#about"
                      className="rounded-full px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                    >
                      {t.about}
                    </a>

                    <a
                      href="#projects"
                      className="rounded-full px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                    >
                      {t.projects}
                    </a>

                    <a
                      href="#skills"
                      className="rounded-full px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                    >
                      {t.skills}
                    </a>

                    <a
                      href="#contact"
                      className="rounded-full bg-gradient-to-r from-fuchsia-500/90 via-violet-500/90 to-pink-400/90 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_16px_rgba(244,114,182,0.14)] transition-all duration-200 hover:scale-[1.02]"
                    >
                      {t.contact}
                    </a>
                  </div>

                  <div className="ml-3 border-l border-white/8 pl-3">
                    <span className="arcade-ghost arcade-ghost--violet" />
                  </div>
                </nav>

                <div className="game-screen console-screen flex items-center gap-2 rounded-[1.3rem] px-2.5 py-2">
                  <div className="flex items-center gap-1 px-1.5">
                    <Languages className="h-3.5 w-3.5 text-fuchsia-200/80" />
                  </div>

                  <div className="relative flex items-center rounded-full bg-white/[0.03] p-1">
                    {(["es", "en"] as Language[]).map((lang) => {
                      const isActive = language === lang;

                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className="relative min-w-[46px] rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors duration-300"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="language-pill"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-200 via-pink-100 to-white shadow-[0_4px_14px_rgba(255,255,255,0.12)]"
                            />
                          )}

                          <span
                            className={`relative z-10 ${
                              isActive
                                ? "text-[#111827]"
                                : "text-slate-300 hover:text-white"
                            }`}
                          >
                            {lang.toUpperCase()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <div className="game-screen console-screen flex items-center gap-1 px-1.5 py-1.5">
                  <div className="flex items-center gap-1 px-1">
                    <Languages className="h-3.5 w-3.5 text-fuchsia-200/80" />
                  </div>

                  <div className="relative flex items-center rounded-full bg-white/[0.03] p-1">
                    {(["es", "en"] as Language[]).map((lang) => {
                      const isActive = language === lang;

                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className="relative min-w-[42px] rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors duration-300"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="language-pill-mobile"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-200 via-pink-100 to-white"
                            />
                          )}

                          <span
                            className={`relative z-10 ${
                              isActive ? "text-[#111827]" : "text-slate-300"
                            }`}
                          >
                            {lang.toUpperCase()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <nav className="grid grid-cols-4 gap-1 border-t border-white/8 px-2 py-2 md:hidden">
              <a
                href="#about"
                className="rounded-xl px-2 py-2 text-center text-[11px] font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
              >
                {t.about}
              </a>

              <a
                href="#projects"
                className="rounded-xl px-2 py-2 text-center text-[11px] font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
              >
                {t.projects}
              </a>

              <a
                href="#skills"
                className="rounded-xl px-2 py-2 text-center text-[11px] font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
              >
                {t.skills}
              </a>

              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500/90 via-violet-500/90 to-pink-400/90 px-2 py-2 text-center text-[11px] font-semibold text-white"
              >
                {t.contact}
              </a>
            </nav>

            <div className="flex items-center justify-center gap-2 border-t border-white/8 px-3 py-2 md:hidden">
              <span className="pacman" />
              <span className="pacdot" />
              <span className="pacdot" />
              <span className="power-pellet" />
              <span className="arcade-ghost arcade-ghost--violet" />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="h-[96px] md:h-[84px]" />
    </>
  );
}