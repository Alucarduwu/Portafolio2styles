import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Clock3,
  BriefcaseBusiness,
  Star,
  Shield,
} from "lucide-react";
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
    eyebrow: "Professional journey",
    titleLines: ["Experiencia", "relevante"],
    intro:
      "Experiencias y proyectos donde he desarrollado producto, frontend, backend y soluciones técnicas con enfoque visual, estructural y funcional.",
    panelTitle: "Experience editorial",
    stackLabel: "Stack",
    periodLabel: "Periodo",
    roleLabel: "Rol",
    companyLabel: "Empresa",
    experienceLabel: "Experiencia",
    featuredTitle: "Trayectoria",
    featuredText:
      "He participado en proyectos académicos, profesionales y de desarrollo aplicado donde combino implementación técnica, diseño de interfaces y estructura de producto.",
  },
  en: {
    badge: "Experience",
    eyebrow: "Professional journey",
    titleLines: ["Relevant", "experience"],
    intro:
      "Experiences and projects where I have built product-focused, frontend, backend and technical solutions with a strong visual and structural approach.",
    panelTitle: "Experience editorial",
    stackLabel: "Stack",
    periodLabel: "Period",
    roleLabel: "Role",
    companyLabel: "Company",
    experienceLabel: "Experience",
    featuredTitle: "Journey",
    featuredText:
      "I have contributed to academic, professional and applied development projects where I combine technical implementation, interface design and product structure.",
  },
};

export default function Experience({ language }: ExperienceProps) {
  const t = content[language];

  return (
    <section id="experience" className="py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative"
      >
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="manhwa-kicker">
                <Sparkles className="h-4 w-4" />
                {t.badge}
              </div>

              <div className="manhwa-kicker">
                <Star className="h-4 w-4 fill-current" />
                {t.experienceLabel}
              </div>
            </div>

            <p
              className="mt-5 text-[11px] font-black uppercase tracking-[0.22em] md:text-xs"
              style={{ color: "var(--pink-ink)" }}
            >
              {t.eyebrow}
            </p>

            <h2 className="mt-4 flex flex-col gap-1 leading-[0.92] tracking-[-0.07em]">
              {t.titleLines.map((line, index) => (
                <span
                  key={index}
                  className="block font-black text-[clamp(2.6rem,5vw,4.8rem)]"
                  style={{
                    color: "var(--text-ultra)",
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.82), 0 10px 22px rgba(218,170,198,0.14)",
                  }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p
              className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "var(--text-strong)" }}
            >
              {t.intro}
            </p>

            <div className="mt-5 flex items-center gap-3" style={{ color: "var(--pink-ink)" }}>
              <Star size={14} className="fill-current" />
              <Sparkles size={14} />
              <Shield size={14} />
            </div>
          </div>

          <motion.aside
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="manhwa-shell self-start"
          >
            <div className="manhwa-shell__bar">
              <div className="manhwa-shell__title">
                <Sparkles size={13} />
                {t.panelTitle}
              </div>

              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="about-editorial__story">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="manhwa-kicker">
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                    {t.experienceLabel}
                  </div>

                  <div className="flex items-center gap-2" style={{ color: "var(--pink-ink)" }}>
                    <Star size={13} className="fill-current" />
                    <Sparkles size={13} />
                    <Shield size={13} />
                  </div>
                </div>

                <h3
                  className="text-2xl font-black tracking-[-0.05em] md:text-3xl"
                  style={{ color: "var(--text-ultra)" }}
                >
                  {t.featuredTitle}
                </h3>

                <p
                  className="mt-3 text-sm leading-7 md:text-base"
                  style={{ color: "var(--text-strong)" }}
                >
                  {t.featuredText}
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      {t.badge}
                    </div>
                    <div className="about-editorial__highlightText">
                      {experience.length} {language === "es" ? "entradas principales" : "main entries"}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      {t.stackLabel}
                    </div>
                    <div className="about-editorial__highlightText">
                      {language === "es"
                        ? "Frontend, backend, móvil y producto"
                        : "Frontend, backend, mobile and product"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 space-y-6">
          {experience.map((item, index) => {
            const Icon = item.icon;
            const title = language === "es" ? item.titleEs : item.titleEn;
            const company = language === "es" ? item.companyEs : item.companyEn;
            const period = language === "es" ? item.periodEs : item.periodEn;
            const description =
              language === "es" ? item.descriptionEs : item.descriptionEn;

            return (
              <motion.article
                key={item.titleEn}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="manhwa-shell"
              >
                <div className="manhwa-shell__bar">
                  <div className="manhwa-shell__title">
                    <Sparkles size={13} />
                    {t.panelTitle} #{String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="manhwa-shell__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="p-5 md:p-7">
                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="about-editorial__story">
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="manhwa-kicker">
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {company}
                        </span>

                        <span className="manhwa-kicker">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          {t.experienceLabel}
                        </span>
                      </div>

                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div className="about-editorial__miniIcon !h-16 !w-16 !rounded-[1.4rem] shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <h3
                            className="text-2xl font-black tracking-[-0.05em] md:text-3xl"
                            style={{ color: "var(--text-ultra)" }}
                          >
                            {title}
                          </h3>

                          <p
                            className="mt-4 text-sm leading-8 md:text-base"
                            style={{ color: "var(--text-strong)" }}
                          >
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="about-editorial__miniCard">
                        <div className="about-editorial__miniHeader">
                          <div className="about-editorial__miniIcon">
                            <Clock3 className="h-5 w-5" />
                          </div>

                          <div className="about-editorial__miniBadge">
                            {t.periodLabel}
                          </div>
                        </div>

                        <h4 className="about-editorial__miniTitle">{period}</h4>
                      </div>

                      <div className="about-editorial__miniCard">
                        <div className="about-editorial__miniHeader">
                          <div className="about-editorial__miniIcon">
                            <BriefcaseBusiness className="h-5 w-5" />
                          </div>

                          <div className="about-editorial__miniBadge">
                            {t.roleLabel}
                          </div>
                        </div>

                        <h4 className="about-editorial__miniTitle">{title}</h4>
                      </div>

                      <div className="about-editorial__miniCard">
                        <div className="about-editorial__miniHeader">
                          <div className="about-editorial__miniIcon">
                            <Sparkles className="h-5 w-5" />
                          </div>

                          <div className="about-editorial__miniBadge">
                            {t.stackLabel}
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.split("•").map((tech) => (
                            <span key={tech.trim()} className="manhwa-chip">
                              <span className="manhwa-chip__text">{tech.trim()}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}