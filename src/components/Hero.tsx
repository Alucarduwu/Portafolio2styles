import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Github,
  Code2,
  Layers3,
  Smartphone,
  Heart,
  Shield,
  Star,
} from "lucide-react";
import type { Language } from "../App";

interface HeroProps {
  language: Language;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const content = {
  es: {
    badge: "",
    eyebrow: "Hola, soy Anahí Betzabé Lozano de Lira",
    titleLines: [
      "Engineer Software",
      "Fullstack",
      "web & móvil",
      "",
    ],
    description:
      "Soy desarrolladora Full Stack enfocada en crear experiencias web y móviles con una base técnica fuerte y una estética cuidada. Trabajo con Angular, Node.js, React, MySQL, APIs REST y Kotlin para construir soluciones que combinen interfaz, lógica, estructura y escalabilidad.",
    subdescription:
      "Me interesa desarrollar productos que no solo funcionen bien, sino que también transmitan calidad, claridad y atención al detalle.",
    primary: "Ver proyectos",
    secondary: "Contáctame",
    tertiary: "GitHub",
    stats: {
      role: "Full Stack Developer",
      level: "Perfil técnico",
      className: "Web • Mobile • Backend",
      affinity: "UI / UX + Engineering",
      status: "Disponible para nuevos retos",
    },
    profileTitle: "Perfil destacado",
    profileText:
      "Combino desarrollo frontend, backend y móvil con una visión enfocada en producto, diseño visual y estructura técnica.",
    cards: [
      {
        title: "Stack principal",
        value: "Angular • Node.js • React • MySQL",
        icon: Code2,
      },
      {
        title: "Especialidad",
        value: "Full Stack Web • APIs REST • Arquitectura",
        icon: Layers3,
      },
      {
        title: "Mobile",
        value:
          "Aplicaciones móviles con Kotlin, JavaScript y React Native",
        icon: Smartphone,
      },
    ],
  },
  en: {
    badge: "Creative Developer Portfolio",
    eyebrow: "Hi, I’m Anahí Betzabé Lozano de Lira",
    titleLines: [
      "I design and build",
      "digital products",
      "that are modern, functional",
      "and visually solid",
    ],
    description:
      "I am a Full Stack Developer focused on creating web and mobile experiences with strong technical foundations and refined visual execution. I work with Angular, Node.js, React, MySQL, REST APIs and Kotlin to build solutions that combine interface, logic, structure and scalability.",
    subdescription:
      "I enjoy building products that not only work well, but also communicate quality, clarity and attention to detail.",
    primary: "View projects",
    secondary: "Contact me",
    tertiary: "GitHub",
    stats: {
      role: "Full Stack Developer",
      level: "Technical profile",
      className: "Web • Mobile • Backend",
      affinity: "UI / UX + Engineering",
      status: "Open to new challenges",
    },
    profileTitle: "Featured profile",
    profileText:
      "I combine frontend, backend and mobile development with a product-focused mindset, visual design sensitivity and technical structure.",
    cards: [
      {
        title: "Core stack",
        value: "Angular • Node.js • React • MySQL",
        icon: Code2,
      },
      {
        title: "Specialty",
        value: "Full Stack Web • REST APIs • Architecture",
        icon: Layers3,
      },
      {
        title: "Mobile",
        value:
          "Mobile applications with Kotlin, JavaScript and React Native",
        icon: Smartphone,
      },
    ],
  },
};

export default function Hero({ language }: HeroProps) {
  const t = content[language];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-0 pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute right-[-80px] top-16 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute bottom-[-40px] left-1/3 h-72 w-72 rounded-full bg-amber-100/20 blur-3xl" />
      </div>

      <div className="w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="manhwa-kicker"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {t.badge}
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_320px] xl:items-start">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="manhwa-shell"
          >
            <div className="manhwa-shell__bar">
              
              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-7">
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-left text-[11px] font-black uppercase tracking-[0.24em] md:text-xs"
                style={{ color: "var(--pink-ink)" }}
              >
                {t.eyebrow}
              </motion.p>

              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-4 flex max-w-5xl flex-col gap-1 leading-[0.9] tracking-[-0.07em]"
              >
                {t.titleLines.map((line, index) => (
                  <span
                    key={index}
                    className="block font-black text-[clamp(2.9rem,6vw,5.6rem)]"
                    style={{
                      color: "var(--text-ultra)",
                      textShadow:
                        "0 1px 0 rgba(255,255,255,0.82), 0 5px 12px rgba(218,170,198,0.14)",
                    }}
                  >
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 rounded-[1.8rem] border p-5 md:p-6"
                style={{
                  borderColor: "var(--border-soft)",
                  background:
                    "linear-gradient(135deg, rgba(255,236,244,0.9), rgba(243,238,255,0.78), rgba(255,244,206,0.58))",
                  boxShadow: "0 14px 28px rgba(227, 191, 210, 0.12)",
                }}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="manhwa-kicker">
                      <Shield className="h-3.5 w-3.5" />
                      {t.stats.status}
                    </span>

                    <span className="manhwa-kicker">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {t.stats.affinity}
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-2"
                    style={{ color: "var(--pink-ink)" }}
                  >
                    <Heart size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Sparkles size={14} />
                  </div>
                </div>

                <p
                  className="text-left text-sm leading-7 md:text-base"
                  style={{ color: "var(--text-strong)" }}
                >
                  {t.description}
                </p>

                <p
                  className="mt-3 text-left text-sm leading-7 md:text-base"
                  style={{ color: "var(--text-main)" }}
                >
                  {t.subdescription}
                </p>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#projects" className="arcade-button">
                  {t.primary}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a href="#contact" className="game-button-secondary">
                  {t.secondary}
                </a>

                <a
                  href="https://github.com/alucarduwu"
                  target="_blank"
                  rel="noreferrer"
                  className="game-button-secondary"
                >
                  <Github className="h-4 w-4" />
                  {t.tertiary}
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="manhwa-shell self-start"
          >
            <div className="manhwa-shell__bar">
              <div className="manhwa-shell__title">
                <Sparkles size={13} />
                {t.profileTitle}
              </div>
              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="about-editorial__story">
                <div className="mb-4 flex items-center gap-3">
                  <div className="about-editorial__miniIcon !h-14 !w-14 !rounded-[1.2rem]">
                    <Heart className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 text-left">
                    <p
                      className="text-[11px] font-black uppercase tracking-[0.2em]"
                      style={{ color: "var(--pink-ink)" }}
                    >
                      {language === "es" ? "Perfil" : "Profile"}
                    </p>
                    <p
                      className="truncate text-base font-black"
                      style={{ color: "var(--text-ultra)" }}
                    >
                      Anahí Lozano
                    </p>
                  </div>
                </div>

                <h3
                  className="text-2xl font-black tracking-[-0.05em]"
                  style={{ color: "var(--text-ultra)" }}
                >
                  {t.stats.role}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-strong)" }}
                >
                  {t.profileText}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">Role</div>
                    <div className="about-editorial__highlightText">
                      {t.stats.role}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">Focus</div>
                    <div className="about-editorial__highlightText">
                      {t.stats.className}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      Affinity
                    </div>
                    <div className="about-editorial__highlightText">
                      {t.stats.affinity}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      Status
                    </div>
                    <div className="about-editorial__highlightText">
                      {t.stats.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {t.cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="about-editorial__miniCard text-left"
              >
                <div className="about-editorial__miniHeader">
                  <div className="about-editorial__miniIcon">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="about-editorial__miniBadge">
                    {language === "es" ? "Skill" : "Skill"}
                  </div>
                </div>

                <div
                  className="mt-4 flex items-center gap-2"
                  style={{ color: "var(--pink-ink)" }}
                >
                  <Heart size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Sparkles size={12} />
                </div>

                <p
                  className="mt-4 text-[11px] font-black uppercase tracking-[0.2em]"
                  style={{ color: "var(--pink-ink)" }}
                >
                  {card.title}
                </p>

                <h3 className="about-editorial__miniTitle">{card.value}</h3>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}