import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rpg-window overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
            <a href="#home" className="group flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-fuchsia-300/20 bg-gradient-to-br from-fuchsia-500/15 via-violet-500/15 to-pink-400/10 text-fuchsia-200 shadow-[0_0_16px_rgba(244,114,182,0.12)] transition-transform duration-300 group-hover:scale-105">
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

            <div className="hidden items-center gap-2 md:flex">
              <nav className="game-screen flex items-center gap-1 px-1.5 py-1.5 text-sm text-slate-300">
                <a
                  href="#about"
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                >
                  {t.about}
                </a>

                <a
                  href="#projects"
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                >
                  {t.projects}
                </a>

                <a
                  href="#skills"
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-fuchsia-200"
                >
                  {t.skills}
                </a>

                <a
                  href="#contact"
                  className="rounded-full bg-gradient-to-r from-fuchsia-500/90 via-violet-500/90 to-pink-400/90 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_16px_rgba(244,114,182,0.14)] transition-all duration-200 hover:scale-[1.02]"
                >
                  {t.contact}
                </a>
              </nav>

              <div className="game-screen flex items-center gap-1 px-1.5 py-1.5">
                <Globe className="h-3.5 w-3.5 text-fuchsia-200/80" />

                <div className="relative flex items-center rounded-full bg-white/[0.03] p-1">
                  {(["es", "en"] as Language[]).map((lang) => {
                    const isActive = language === lang;

                    return (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className="relative min-w-[44px] rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors duration-300"
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
              <div className="game-screen flex items-center gap-1 px-1.5 py-1.5">
                <Globe className="h-3.5 w-3.5 text-fuchsia-200/80" />

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
                            isActive
                              ? "text-[#111827]"
                              : "text-slate-300"
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
        </div>
      </div>
    </header>
  );
}