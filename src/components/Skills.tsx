import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Heart,
  Star,
  Stars,
  Flower2,
  ChevronRight,
} from "lucide-react";
import { skillSections } from "../components/dataprojetcts/skills";
import type { Language } from "../App";

interface SkillsProps {
  language: Language;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const content = {
  es: {
    badge: "Tecnologías",
    mode: "Magazine mode",
    eyebrow: "Skills editorial",
    title1: "Tech",
    title2: "Stack",
    subtitle:
      "Herramientas, frameworks y tecnologías con las que diseño experiencias web, backend y móviles con una visión creativa, estética y funcional.",
    featured: "Selección principal",
    coverTitle: "Stack creativo",
    coverText:
      "Frontend, backend y mobile con estética editorial, detalle visual y estructura moderna.",
    category: "Categoría",
  },
  en: {
    badge: "Skills",
    mode: "Magazine mode",
    eyebrow: "Skills editorial",
    title1: "Creative",
    title2: "Stack",
    subtitle:
      "Tools, frameworks and technologies I use to design web, backend and mobile experiences with a creative, aesthetic and functional approach.",
    featured: "Featured selection",
    coverTitle: "Creative stack",
    coverText:
      "Frontend, backend and mobile with editorial aesthetics, visual detail and modern structure.",
    category: "Category",
  },
};

export default function Skills({ language }: SkillsProps) {
  const t = content[language];
  const featuredSections = skillSections.slice(0, 3);
  const secondarySections = skillSections.slice(3);

  return (
    <section id="skills" className="py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="relative"
      >
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_360px] xl:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-300/50 bg-white/85 dark:bg-[rgba(45,28,70,0.95)] dark:border-[rgba(130,90,200,0.4)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-pink-600 dark:text-[var(--pink-ink)] shadow-[0_10px_24px_rgba(231,189,211,0.18)] backdrop-blur">
                <Sparkles size={14} />
                {t.badge}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/60 bg-white/80 dark:bg-[rgba(35,22,55,0.95)] dark:border-[rgba(130,90,200,0.35)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-pink-500 dark:text-[var(--pink-ink)] shadow-[0_10px_24px_rgba(231,189,211,0.12)] backdrop-blur">
                <Stars size={14} />
                {t.mode}
              </div>
            </div>

            <p className="mt-5 text-[11px] font-black uppercase tracking-[0.24em] text-pink-500 dark:text-[var(--pink-ink)] md:text-xs">
              {t.eyebrow}
            </p>

            <h2 className="mt-4 leading-[0.9] tracking-[-0.07em]">
              <span className="block text-[clamp(2.7rem,5vw,4.9rem)] font-black text-[#3f2b39] dark:text-[var(--text-title)]">
                {t.title1}
              </span>
              <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-400 to-violet-400 bg-clip-text text-[clamp(3rem,5.4vw,5.5rem)] font-black text-transparent">
                {t.title2}
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f4959] dark:text-[var(--text-main)] md:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-5 flex items-center gap-3 text-pink-500 dark:text-[var(--pink-ink)]">
              <Heart size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Flower2 size={16} />
              <Sparkles size={16} />
            </div>
          </div>

          <motion.aside
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="overflow-hidden rounded-[2rem] border border-pink-200/70 dark:border-[rgba(130,90,200,0.4)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,248,252,0.9))] dark:bg-[linear-gradient(180deg,rgba(28,18,44,0.97),rgba(20,12,34,0.94))] shadow-[0_28px_70px_rgba(227,188,210,0.22)] dark:shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-pink-200/60 dark:border-[rgba(130,90,200,0.3)] bg-white/70 dark:bg-[rgba(32,20,50,0.98)] px-5 py-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-pink-600 dark:text-[var(--pink-ink)]">
                <Sparkles size={13} />
                {t.featured}
              </div>

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-300 dark:bg-[rgba(160,110,220,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-300 dark:bg-[rgba(120,80,180,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-200 dark:bg-[rgba(90,50,150,0.8)]" />
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="rounded-[1.6rem] border border-pink-200/70 dark:border-[rgba(130,90,200,0.35)] bg-gradient-to-br from-pink-50 via-white to-violet-50 dark:from-[rgba(35,22,55,0.97)] dark:via-[rgba(28,18,48,0.95)] dark:to-[rgba(30,18,55,0.97)] p-5 shadow-[0_14px_28px_rgba(227,191,210,0.12)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.4)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/70 dark:border-[rgba(130,90,200,0.4)] bg-white/85 dark:bg-[rgba(45,28,70,0.95)] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-pink-600 dark:text-[var(--pink-ink)]">
                    <Star size={12} className="fill-current" />
                    {t.featured}
                  </div>

                  <div className="flex items-center gap-2 text-pink-500 dark:text-[var(--pink-ink)]">
                    <Heart size={13} className="fill-current" />
                    <Sparkles size={13} />
                  </div>
                </div>

                <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-[#3f2b39] dark:text-[var(--text-title)]">
                  {t.coverTitle}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5f4959] dark:text-[var(--text-main)] md:text-base">
                  {t.coverText}
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-5">
            {featuredSections.map((section, sectionIndex) => {
              const title =
                language === "es" ? section.titleEs : section.titleEn;

              return (
                <motion.article
                  key={title}
                  custom={sectionIndex + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-[1.8rem] border border-pink-200/70 dark:border-[rgba(130,90,200,0.35)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,248,252,0.93))] dark:bg-[linear-gradient(180deg,rgba(28,18,44,0.98),rgba(20,12,34,0.94))] p-5 shadow-[0_20px_42px_rgba(227,191,210,0.16)] dark:shadow-[0_20px_42px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/70 dark:border-[rgba(130,90,200,0.4)] bg-white/90 dark:bg-[rgba(45,28,70,0.95)] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-pink-600 dark:text-[var(--pink-ink)]">
                      <Sparkles size={12} />
                      {t.category}
                    </div>

                    <div className="flex items-center gap-2 text-pink-500 dark:text-[var(--pink-ink)]">
                      <Heart
                        size={14}
                        className="fill-current transition duration-300 group-hover:scale-110"
                      />
                      <Star
                        size={14}
                        className="fill-current transition duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <h3 className="text-[clamp(1.4rem,2vw,1.9rem)] font-black tracking-[-0.04em] text-[#3f2b39] dark:text-[var(--text-title)]">
                    {title}
                  </h3>

                  <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-pink-200 dark:via-[rgba(130,90,200,0.4)] to-transparent" />

                  <div className="flex flex-wrap gap-3">
                    {section.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-full border border-pink-200/70 dark:border-[rgba(130,90,200,0.35)] bg-white/90 dark:bg-[rgba(35,22,55,0.97)] px-3 py-2 shadow-[0_8px_16px_rgba(232,201,216,0.12)] dark:shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-violet-100 dark:from-[rgba(80,45,130,0.9)] dark:to-[rgba(60,30,110,0.9)] text-pink-600 dark:text-[var(--pink-ink)]">
                            <Icon size={14} />
                          </span>
                          <span className="whitespace-nowrap text-sm font-bold text-[#4a3442] dark:text-[var(--text-main)]">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="grid gap-4 content-start">
            {secondarySections.map((section, sectionIndex) => {
              const title =
                language === "es" ? section.titleEs : section.titleEn;

              return (
                <motion.article
                  key={title}
                  custom={sectionIndex + 6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group rounded-[1.45rem] border border-pink-200/70 dark:border-[rgba(130,90,200,0.35)] bg-white/88 dark:bg-[rgba(28,18,44,0.97)] p-4 shadow-[0_16px_30px_rgba(227,191,210,0.14)] dark:shadow-[0_16px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-pink-500 dark:text-[var(--pink-ink)]">
                        {t.category}
                      </p>
                      <h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#402c3a] dark:text-[var(--text-title)]">
                        {title}
                      </h3>
                    </div>

                    <ChevronRight
                      size={18}
                      className="mt-1 text-pink-500 dark:text-[var(--pink-ink)] transition duration-300 group-hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center rounded-full border border-pink-200/60 dark:border-[rgba(130,90,200,0.35)] bg-pink-50/80 dark:bg-[rgba(45,28,70,0.9)] px-3 py-1.5 text-sm font-semibold text-[#5b4453] dark:text-[var(--text-main)]"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}