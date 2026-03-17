import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Languages, Sparkles, Heart, Star, Sun, Moon } from "lucide-react";
import type { Language } from "../App";

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
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

export default function Navbar({ language, setLanguage, theme, setTheme }: NavbarProps) {
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

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#projects", label: t.projects },
    { href: "#skills", label: t.skills },
  ];

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : -96,
          opacity: isVisible ? 1 : 0.98,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "2rem",
              border: "1px solid var(--border-soft)",
              background:
                "var(--panel)",
              boxShadow:
                "0 22px 50px var(--shadow-soft), 0 0 0 1px var(--ui-highlight) inset",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              className="flex items-center justify-between gap-4 px-5 py-4"
              style={{
                borderBottom: "1px solid var(--border-soft)",
              }}
            >
              <a href="#home" className="group flex min-w-0 items-center gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    border: "1px solid var(--border-strong)",
                    background:
                      "var(--panel)",
                    color: "var(--pink-ink)",
                    boxShadow: "0 10px 22px var(--shadow-soft)",
                  }}
                >
                  <Sparkles className="h-5 w-5" />
                </div>

                <div className="min-w-0 text-left leading-tight">
                  <p
                    className="truncate text-base font-black tracking-[-0.03em] sm:text-[1.1rem]"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Anahí Lozano
                  </p>
                  <p
                    className="truncate text-sm font-semibold"
                    style={{ color: "var(--text-soft)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </a>

              <div className="hidden items-center gap-4 md:flex">
                <nav
                  className="flex items-center gap-1 rounded-full px-2 py-2"
                  style={{
                    border: "1px solid var(--border-soft)",
                    background: "var(--panel)",
                    boxShadow: "0 8px 20px var(--shadow-soft)",
                  }}
                >
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-extrabold tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        color: "var(--text-main)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--rose-milk)";
                        e.currentTarget.style.color = "var(--pink-ink)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--text-main)";
                      }}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    className="rounded-full px-4 py-2 text-sm font-black tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--pink-strong) 0%,var(--violet-strong) 54%,var(--gold-cream) 100%)",
                      color: "var(--text-strong)",
                      boxShadow: "0 10px 22px var(--shadow-soft)",
                    }}
                  >
                    {t.contact}
                  </a>
                </nav>

                <div
                  className="flex items-center gap-2 rounded-full px-2 py-2"
                  style={{
                    border: "1px solid var(--border-soft)",
                    background: "var(--panel)",
                    boxShadow: "0 8px 20px var(--shadow-soft)",
                  }}
                >
                  <div
                    className="flex items-center gap-1 px-1.5"
                    style={{ color: "var(--pink-ink)" }}
                  >
                    <Languages className="h-4 w-4" />
                  </div>

                  <div
                    className="relative flex items-center rounded-full p-1"
                    style={{ background: "var(--blush)" }}
                  >
                    {(["es", "en"] as Language[]).map((lang) => {
                      const isActive = language === lang;

                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className="relative min-w-[52px] rounded-full px-3 py-2 text-sm font-black tracking-[0.04em] transition-colors duration-300"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="language-pill"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(135deg,var(--pink) 0%,var(--violet) 55%,var(--butter) 100%)",
                                boxShadow:
                                  "0 6px 16px var(--shadow-soft)",
                              }}
                            />
                          )}

                          <span
                            className="relative z-10"
                            style={{
                              color: isActive
                                ? "var(--text-strong)"
                                : "var(--text-main)",
                            }}
                          >
                            {lang.toUpperCase()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center p-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: "1px solid var(--border-soft)",
                    background: "var(--panel)",
                    boxShadow: "0 8px 20px var(--shadow-soft)",
                    color: "var(--pink-ink)"
                  }}
                  title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>

              <div className="md:hidden">
                <div
                  className="flex items-center gap-2 rounded-full px-2 py-2"
                  style={{
                    border: "1px solid var(--border-soft)",
                    background: "var(--panel)",
                    boxShadow: "0 8px 20px var(--shadow-soft)",
                  }}
                >
                  <div
                    className="flex items-center gap-1 px-1"
                    style={{ color: "var(--pink-ink)" }}
                  >
                    <Languages className="h-4 w-4" />
                  </div>

                  <div
                    className="relative flex items-center rounded-full p-1"
                    style={{ background: "var(--blush)" }}
                  >
                    {(["es", "en"] as Language[]).map((lang) => {
                      const isActive = language === lang;

                      return (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className="relative min-w-[42px] rounded-full px-2.5 py-1.5 text-[11px] font-black tracking-[0.05em] transition-colors duration-300"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="language-pill-mobile"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(135deg,var(--pink) 0%,var(--violet) 55%,var(--butter) 100%)",
                                boxShadow:
                                  "0 6px 16px var(--shadow-soft)",
                              }}
                            />
                          )}

                          <span
                            className="relative z-10"
                            style={{
                              color: isActive
                                ? "var(--text-strong)"
                                : "var(--text-main)",
                            }}
                          >
                            {lang.toUpperCase()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="mx-auto mt-2 flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: "1px solid var(--border-soft)",
                    background: "var(--panel)",
                    boxShadow: "0 8px 20px var(--shadow-soft)",
                    color: "var(--pink-ink)"
                  }}
                >
                  {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            <div
              className="hidden items-center justify-between gap-4 px-5 py-3 md:flex"
              style={{
                borderTop: "1px solid var(--ui-highlight)",
              }}
            >
              <div
                className="flex items-center gap-2"
                style={{ color: "var(--pink-ink)" }}
              >
                <Heart size={13} className="fill-current" />
                <Star size={13} className="fill-current" />
                <Sparkles size={13} />
              </div>

              <p
                className="text-xs font-extrabold uppercase tracking-[0.22em]"
                style={{ color: "var(--text-soft)" }}
              >
                
              </p>
            </div>

            <nav
              className="grid grid-cols-4 gap-2 px-3 py-3 md:hidden"
              style={{
                borderTop: "1px solid var(--border-soft)",
              }}
            >
              <a
                href="#about"
                className="rounded-2xl px-2 py-2.5 text-center text-[11px] font-black transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--panel)",
                  color: "var(--text-main)",
                }}
              >
                {t.about}
              </a>

              <a
                href="#projects"
                className="rounded-2xl px-2 py-2.5 text-center text-[11px] font-black transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--panel)",
                  color: "var(--text-main)",
                }}
              >
                {t.projects}
              </a>

              <a
                href="#skills"
                className="rounded-2xl px-2 py-2.5 text-center text-[11px] font-black transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--panel)",
                  color: "var(--text-main)",
                }}
              >
                {t.skills}
              </a>

              <a
                href="#contact"
                className="rounded-2xl px-2 py-2.5 text-center text-[11px] font-black shadow-[0_8px_18px_var(--shadow-soft)]"
                style={{
                  background:
                    "linear-gradient(135deg,var(--pink-strong) 0%,var(--violet-strong) 54%,var(--gold-cream) 100%)",
                  color: "var(--text-strong)",
                }}
              >
                {t.contact}
              </a>
            </nav>

            <div
              className="flex items-center justify-center gap-2 px-3 py-2.5 md:hidden"
              style={{
                borderTop: "1px solid var(--border-soft)",
              }}
            >
              <Heart
                size={12}
                className="fill-current"
                style={{ color: "var(--pink-ink)" }}
              />
              <Star
                size={12}
                className="fill-current"
                style={{ color: "var(--violet-strong)" }}
              />
              <Sparkles size={12} style={{ color: "var(--pink-ink)" }} />
            </div>
          </div>
        </div>
      </motion.header>

      <div className="h-[116px] md:h-[100px]" />
    </>
  );
}