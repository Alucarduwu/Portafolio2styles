import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Boxes,
  Wrench,
  Gamepad2,
  Smartphone,
  Rocket,
  MonitorSmartphone,
} from "lucide-react";
import { skillSections } from "../components/dataprojetcts/skills";
import type { Language } from "../App";

interface SkillsProps {
  language: Language;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const content = {
  es: {
    badge: "Tecnologías",
    title: "Stack tecnológico",
    description:
      "Tecnologías, frameworks y herramientas con las que trabajo en desarrollo web, backend y aplicaciones móviles.",
    panelTitle: "Tech Inventory",
    categoryLabel: "Categoría",
  },
  en: {
    badge: "Skills",
    title: "Tech stack",
    description:
      "Technologies, frameworks and tools I use across web development, backend systems and mobile applications.",
    panelTitle: "Tech Inventory",
    categoryLabel: "Category",
  },
};

export default function Skills({ language }: SkillsProps) {
  const t = content[language];

  const enhancedSections = skillSections.map((section) => {
    const isMobileSection =
      section.titleEs.toLowerCase().includes("móvil") ||
      section.titleEs.toLowerCase().includes("mobile") ||
      section.titleEn.toLowerCase().includes("mobile");

    if (!isMobileSection) return section;

    const currentNames = section.skills.map((skill) => skill.name.toLowerCase());

    const extraSkills = [
      !currentNames.includes("react native")
        ? { name: "React Native", icon: Smartphone }
        : null,
      !currentNames.includes("expo")
        ? { name: "Expo", icon: Rocket }
        : null,
      !currentNames.includes("genymotion")
        ? { name: "Genymotion", icon: MonitorSmartphone }
        : null,
    ].filter(Boolean) as { name: string; icon: React.ElementType }[];

    return {
      ...section,
      skills: [...section.skills, ...extraSkills],
    };
  });

  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="game-label retro-badge">
          <Sparkles className="h-4 w-4" />
          {t.badge}
        </div>

        <h2 className="pixel-title glow-text mt-5 text-3xl text-white md:text-5xl">
          <span className="game-title-gradient">{t.title}</span>
        </h2>

        <div className="mt-4 flex items-center justify-start">
          <div className="pacman-row">
            <span className="pacman" />
            <span className="pacdot" />
            <span className="pacdot" />
            <span className="pacdot" />
            <span className="power-pellet" />
            <span className="arcade-ghost arcade-ghost--violet" />
          </div>
        </div>

        <div className="mt-6 max-w-3xl">
          <div className="game-screen retro-screen p-5 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="game-chip">
                  <Boxes className="h-3.5 w-3.5 text-fuchsia-200" />
                  {language === "es" ? "Inventario técnico" : "Technical inventory"}
                </span>

                <span className="game-chip">
                  <Wrench className="h-3.5 w-3.5 text-violet-200" />
                  {language === "es" ? "Herramientas y stack" : "Tools and stack"}
                </span>

                <span className="game-chip">
                  <Smartphone className="h-3.5 w-3.5 text-pink-200" />
                  {language === "es"
                    ? "Multiplataforma con React Native"
                    : "Cross-platform with React Native"}
                </span>
              </div>

              <div className="retro-badge">
                <Gamepad2 className="h-3.5 w-3.5" />
                {language === "es" ? "Loadout" : "Loadout"}
              </div>
            </div>

            <p className="text-left leading-8 text-slate-300">
              {t.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enhancedSections.map((section, sectionIndex) => {
            const title = language === "es" ? section.titleEs : section.titleEn;

            return (
              <motion.div
                key={title}
                custom={sectionIndex + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rpg-window console-shell arcade-corners pixel-console"
              >
                <div className="rpg-window__bar console-topbar">
                  <div className="rpg-window__title console-brand">
                    {t.panelTitle} #{String(sectionIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="rpg-window__dots console-leds">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="p-5">
                  <div className="game-card console-screen p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="game-chip">
                        <Boxes className="h-3.5 w-3.5 text-fuchsia-200" />
                        {t.categoryLabel}
                      </span>

                      <div className="pacman-row">
                        <span className="pacman" />
                        <span className="pacdot" />
                        <span className="arcade-ghost arcade-ghost--blue" />
                      </div>
                    </div>

                    <h3 className="text-left text-lg font-semibold text-white">
                      {title}
                    </h3>

                    <div className="game-divider my-4" />

                    <div className="flex flex-wrap gap-3">
                      {section.skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            custom={skillIndex + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="game-chip transition-transform duration-200 hover:-translate-y-0.5"
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-500/15 to-violet-500/15 text-fuchsia-200">
                              <Icon size={14} />
                            </span>

                            <span className="whitespace-nowrap text-slate-100">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}