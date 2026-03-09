import { motion, type Variants } from "framer-motion";
import { Sparkles, Clock3, BriefcaseBusiness } from "lucide-react";
import { experience } from "../components/dataprojetcts/experience";
import type { Language } from "../App";

interface ExperienceProps {
  language: Language;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const content = {
  es: {
    badge: "Experiencia",
    title: "Experiencia relevante",
    panelTitle: "Mission Log",
    stackLabel: "Stack",
    periodLabel: "Periodo",
    roleLabel: "Rol",
  },
  en: {
    badge: "Experience",
    title: "Relevant experience",
    panelTitle: "Mission Log",
    stackLabel: "Stack",
    periodLabel: "Period",
    roleLabel: "Role",
  },
};

export default function Experience({ language }: ExperienceProps) {
  const t = content[language];

  return (
    <section id="experience" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="game-label">
          <Sparkles className="h-4 w-4" />
          {t.badge}
        </div>

        <h2 className="pixel-title glow-text mt-5 text-3xl text-white md:text-5xl">
          <span className="game-title-gradient">{t.title}</span>
        </h2>

        <div className="mt-10 space-y-6">
          {experience.map((item, index) => {
            const Icon = item.icon;
            const title = language === "es" ? item.titleEs : item.titleEn;
            const company = language === "es" ? item.companyEs : item.companyEn;
            const period = language === "es" ? item.periodEs : item.periodEn;
            const description =
              language === "es" ? item.descriptionEs : item.descriptionEn;

            return (
              <motion.div
                key={item.titleEn}
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rpg-window"
              >
                <div className="rpg-window__bar">
                  <div className="rpg-window__title">
                    {t.panelTitle} #{String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="rpg-window__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="p-5 md:p-7">
                  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
                    <div className="game-screen p-5">
                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 text-fuchsia-200">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 text-left">
                          <div className="mb-3 flex flex-wrap gap-2">
                            <span className="game-chip">
                              <BriefcaseBusiness className="h-3.5 w-3.5 text-fuchsia-200" />
                              {company}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white md:text-2xl">
                            {title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-slate-300">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="game-card p-4">
                        <div className="mb-3 flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-fuchsia-200" />
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/85">
                            {t.periodLabel}
                          </p>
                        </div>

                        <div className="game-divider mb-3" />

                        <p className="text-sm font-semibold text-white">
                          {period}
                        </p>
                      </div>

                      <div className="game-card p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/85">
                          {t.roleLabel}
                        </p>

                        <div className="game-divider my-3" />

                        <p className="text-sm font-semibold text-white">
                          {title}
                        </p>
                      </div>

                      <div className="game-card p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/85">
                          {t.stackLabel}
                        </p>

                        <div className="game-divider my-3" />

                        <div className="flex flex-wrap gap-2">
                          {item.stack.split("•").map((tech) => (
                            <span
                              key={tech.trim()}
                              className="game-chip"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
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