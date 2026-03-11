import { motion, type Variants } from "framer-motion";
import {
  Heart,
  Sparkles,
  Laptop2,
  ServerCog,
  Smartphone,
  Database,
  Shield,
  Star,
} from "lucide-react";
import type { Language } from "../App";

interface AboutProps {
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
    badge: "Sobre mí",
    eyebrow: "Creative developer profile",
    titleLines: [
      "Desarrolladora Full Stack",
      "con enfoque en producto,",
      "diseño y escalabilidad",
    ],
    intro:
      "Construyo experiencias digitales completas combinando diseño visual, frontend cuidado, backend sólido y una visión orientada a producto.",
    paragraph1:
      "Soy desarrolladora enfocada en construir experiencias digitales completas: desde interfaces modernas y bien cuidadas hasta lógica backend sólida, APIs funcionales y estructuras escalables. Me gusta crear productos que se vean profesionales, se sientan intuitivos y resuelvan problemas reales.",
    paragraph2:
      "He trabajado en plataformas web full stack, aplicaciones móviles con Kotlin y sistemas con autenticación por roles, paneles administrativos, modelado de bases de datos relacionales y consumo o desarrollo de APIs REST. También cuento con bases en Linux, networking y ciberseguridad, lo que me permite entender los sistemas de forma más integral.",
    paragraph3:
      "Disfruto combinar desarrollo, diseño y organización técnica para entregar soluciones limpias, mantenibles y con una identidad visual fuerte. Me adapto con facilidad a frontend, backend o mobile, y me interesa seguir creciendo en entornos donde pueda aportar tanto en implementación como en mejora del producto.",
    cardTitle: "Fortalezas clave",
    highlights: [
      "Desarrollo Full Stack web",
      "Aplicaciones móviles con Kotlin, Java y React Native",
      "APIs REST, autenticación JWT y RBAC",
      "Bases de datos relacionales, SQL y modelado",
      "UI cuidada, responsive y orientada a producto",
    ],
    miniCards: [
      {
        title: "Frontend + UI",
        text: "Diseño interfaces modernas, limpias y visualmente cuidadas, con atención a experiencia de usuario, estructura y detalle.",
        icon: Laptop2,
      },
      {
        title: "Backend + arquitectura",
        text: "Construyo APIs, lógica de negocio, autenticación y flujos escalables con enfoque en organización y mantenibilidad.",
        icon: ServerCog,
      },
      {
        title: "Mobile development",
        text: "También desarrollo aplicaciones móviles con Kotlin, buscando que sean funcionales, intuitivas y bien resueltas visualmente.",
        icon: Smartphone,
      },
      {
        title: "Data + modelado",
        text: "Trabajo con bases de datos relacionales, diseño de estructuras y consultas SQL para soportar productos sólidos.",
        icon: Database,
      },
      {
        title: "Detalle + producto",
        text: "Cuido tanto la funcionalidad como la estética, porque creo que un buen producto debe resolver y también transmitir calidad.",
        icon: Heart,
      },
    ],
    technical: "Perfil técnico",
    product: "Producto + diseño",
    background: "Background",
    powerups: "Fortalezas",
    skill: "Skill",
    focus: "Focus",
    coverTitle: "Perfil destacado",
    coverCopy:
      "Desarrollo con una mezcla de estética, estructura técnica y enfoque en soluciones reales.",
  },
  en: {
    badge: "About",
    eyebrow: "Creative developer profile",
    titleLines: [
      "Full Stack Developer",
      "focused on product,",
      "design and scalability",
    ],
    intro:
      "I build complete digital experiences by combining visual design, polished frontend, solid backend and product thinking.",
    paragraph1:
      "I am a developer focused on building complete digital experiences, from modern, polished interfaces to solid backend logic, functional APIs and scalable structures. I enjoy creating products that look professional, feel intuitive and solve real problems.",
    paragraph2:
      "My experience includes full stack web platforms, mobile applications built with Kotlin, and systems with role-based authentication, admin dashboards, relational database modeling, and REST API development and integration. I also have foundations in Linux, networking and cybersecurity, which give me a broader systems perspective.",
    paragraph3:
      "I enjoy combining development, design and technical structure to deliver clean, maintainable solutions with a strong visual identity. I adapt easily across frontend, backend or mobile environments, and I am motivated by opportunities where I can contribute both to implementation and product improvement.",
    cardTitle: "Core strengths",
    highlights: [
      "Full Stack web development",
      "Mobile applications with Kotlin",
      "REST APIs, JWT authentication and RBAC",
      "Relational databases, SQL and data modeling",
      "Polished, responsive, product-driven UI",
    ],
    miniCards: [
      {
        title: "Frontend + UI",
        text: "I build modern, clean and visually refined interfaces with strong attention to user experience, structure and detail.",
        icon: Laptop2,
      },
      {
        title: "Backend + architecture",
        text: "I develop APIs, business logic, authentication flows and scalable systems with a focus on organization and maintainability.",
        icon: ServerCog,
      },
      {
        title: "Mobile development",
        text: "I also create mobile applications with Kotlin, aiming for solutions that are functional, intuitive and visually polished.",
        icon: Smartphone,
      },
      {
        title: "Data + modeling",
        text: "I work with relational databases, data structures and SQL queries to support robust and reliable products.",
        icon: Database,
      },
      {
        title: "Detail + product",
        text: "I care about both functionality and aesthetics, because great products should solve problems and also communicate quality.",
        icon: Heart,
      },
    ],
    technical: "Technical profile",
    product: "Product + design",
    background: "Background",
    powerups: "Strengths",
    skill: "Skill",
    focus: "Focus",
    coverTitle: "Featured profile",
    coverCopy:
      "I develop with a mix of aesthetics, technical structure and real problem solving.",
  },
};

export default function About({ language }: AboutProps) {
  const t = content[language];

  return (
    <section id="about" className="about-editorial py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative"
      >
        {/* HERO */}
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] xl:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="manhwa-kicker">
                <Sparkles className="h-4 w-4" />
                {t.badge}
              </div>

              <div className="manhwa-kicker">
                <Heart className="h-4 w-4 fill-current" />
                {t.product}
              </div>
            </div>

            <p
              className="mt-5 text-[11px] font-black uppercase tracking-[0.22em] md:text-xs"
              style={{ color: "var(--pink-ink)" }}
            >
              {t.eyebrow}
            </p>

            <h2 className="mt-4 flex max-w-4xl flex-col gap-1 leading-[0.94] tracking-[-0.06em]">
              {t.titleLines.map((line, index) => (
                <span
                  key={index}
                  className="block font-black text-[clamp(2.6rem,5vw,4.9rem)]"
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
              <Heart size={14} className="fill-current" />
              <Star size={14} className="fill-current" />
              <Sparkles size={14} />
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
                {t.coverTitle}
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
                    <Shield className="h-3.5 w-3.5" />
                    {t.technical}
                  </div>

                  <div className="flex items-center gap-2" style={{ color: "var(--pink-ink)" }}>
                    <Heart size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <Sparkles size={13} />
                  </div>
                </div>

                <h3
                  className="text-2xl font-black tracking-[-0.05em] md:text-3xl"
                  style={{ color: "var(--text-ultra)" }}
                >
                  {t.coverTitle}
                </h3>

                <p
                  className="mt-3 text-sm leading-7 md:text-base"
                  style={{ color: "var(--text-strong)" }}
                >
                  {t.coverCopy}
                </p>

                <div className="mt-5 grid gap-3">
                  {t.highlights.slice(0, 3).map((item) => (
                    <div key={item} className="about-editorial__highlight">
                      <div className="about-editorial__highlightLabel">
                        {t.skill}
                      </div>
                      <div className="about-editorial__highlightText">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* STORY + STRENGTHS */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.article
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="manhwa-shell"
          >
            <div className="manhwa-shell__bar">
              <div className="manhwa-shell__title">
                <Sparkles size={13} />
                {t.background}
              </div>

              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-7">
              <div className="about-editorial__story">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="manhwa-kicker">
                      <Shield className="h-3.5 w-3.5" />
                      {t.technical}
                    </span>

                    <span className="manhwa-kicker">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {t.product}
                    </span>
                  </div>

                  <div className="flex items-center gap-2" style={{ color: "var(--pink-ink)" }}>
                    <Heart size={13} className="fill-current" />
                    <Star size={13} className="fill-current" />
                    <Sparkles size={13} />
                  </div>
                </div>

                <div className="about-editorial__copy">
                  <p>{t.paragraph1}</p>
                  <p>{t.paragraph2}</p>
                  <p>{t.paragraph3}</p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="manhwa-shell"
          >
            <div className="manhwa-shell__bar">
              <div className="manhwa-shell__title">
                <Sparkles size={13} />
                {t.cardTitle}
              </div>

              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="manhwa-kicker">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  {t.powerups}
                </div>

                <div className="manhwa-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.focus}
                </div>
              </div>

              <div className="grid gap-3">
                {t.highlights.map((item) => (
                  <div key={item} className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">{t.skill}</div>
                    <div className="about-editorial__highlightText">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* MINI CARDS DIFERENTES */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.miniCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                custom={index + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`about-editorial__miniCard ${
                  index === 0 ? "xl:col-span-2" : ""
                }`}
              >
                <div className="about-editorial__miniHeader">
                  <div className="about-editorial__miniIcon">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="about-editorial__miniBadge">{t.skill}</div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2" style={{ color: "var(--pink-ink)" }}>
                    <Heart size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Sparkles size={12} />
                  </div>

                  <div className="manhwa-kicker">
                    <Sparkles size={12} />
                    {t.focus}
                  </div>
                </div>

                <h3 className="about-editorial__miniTitle">{card.title}</h3>

                <div className="skills-feature-card__divider" />

                <p className="about-editorial__miniText">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}