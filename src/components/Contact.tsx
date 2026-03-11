import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Github,
  FileText,
  Linkedin,
  Sparkles,
  Send,
  Star,
  Heart,
} from "lucide-react";
import type { Language } from "../App";

interface ContactProps {
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
    badge: "Contacto",
    eyebrow: "Let’s connect",
    titleLines: [
      "Construyamos",
      "algo increíble",
    ],
    description:
      "Estoy abierta a oportunidades en desarrollo full stack, frontend, backend y desarrollo móvil. Si quieres colaborar, conocer mi trabajo o contactarme para una vacante, aquí puedes encontrar mis enlaces principales.",
    email: "Correo",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvStandard: "CV (Normal)",
    cvHarvard: "CV (Formato Harvard)",
    panelTitle: "Communication Editorial",
    linksTitle: "Canales principales",
    availability: "Disponible para colaboración y oportunidades",
    quickNote: "Respuesta por correo o LinkedIn",
    connectMode: "Modo conexión",
    featuredTitle: "Hablemos",
    featuredText:
      "Ya sea para una vacante, una colaboración o revisar mi perfil profesional, aquí están mis canales principales.",
    document: "Documento",
    normalCvText: "Versión principal de mi currículum para revisión general.",
    harvardCvText: "Versión académica/profesional en formato Harvard.",
  },
  en: {
    badge: "Contact",
    eyebrow: "Let’s connect",
    titleLines: [
      "Let’s build",
      "something amazing",
    ],
    description:
      "I’m open to opportunities in full stack development, frontend, backend and mobile development. If you’d like to collaborate, review my work or contact me for a role, you can find my main links below.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvStandard: "CV (Standard)",
    cvHarvard: "CV (Harvard Format)",
    panelTitle: "Communication Editorial",
    linksTitle: "Main channels",
    availability: "Available for collaboration and opportunities",
    quickNote: "Reply via email or LinkedIn",
    connectMode: "Connect mode",
    featuredTitle: "Let’s talk",
    featuredText:
      "Whether it’s for a role, a collaboration or reviewing my profile, here are my main contact channels.",
    document: "Document",
    normalCvText: "Main version of my resume for general review.",
    harvardCvText: "Academic/professional version in Harvard format.",
  },
};

export default function Contact({ language }: ContactProps) {
  const t = content[language];

  const mainLinks = [
    {
      href: "mailto:anahydlira@gmail.com",
      label: t.email,
      icon: Mail,
      external: false,
    },
    {
      href: "https://github.com/Alucarduwu",
      label: t.github,
      icon: Github,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/anahi-lozano-de-lira-a4213a187",
      label: t.linkedin,
      icon: Linkedin,
      external: true,
    },
  ];

  const docs = [
    {
      href: "/Cv Anahi Betzabe Lozano de Lira.pdf",
      title: t.cvStandard,
      text: t.normalCvText,
    },
    {
      href: "/Anahi_Lozano_Harvard_CV.pdf",
      title: t.cvHarvard,
      text: t.harvardCvText,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative"
      >
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="manhwa-kicker">
                <Sparkles className="h-4 w-4" />
                {t.badge}
              </div>

              <div className="manhwa-kicker">
                <Heart className="h-4 w-4 fill-current" />
                {t.connectMode}
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
              {t.description}
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
                    <Send className="h-3.5 w-3.5" />
                    {t.quickNote}
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
                      {t.linksTitle}
                    </div>
                    <div className="about-editorial__highlightText">
                      {t.availability}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      {t.badge}
                    </div>
                    <div className="about-editorial__highlightText">
                      {t.quickNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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
                {t.linksTitle}
              </div>

              <div className="manhwa-shell__dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid gap-3">
                {mainLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="about-editorial__highlight transition-transform duration-200 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="about-editorial__miniIcon !h-11 !w-11 !rounded-2xl">
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div>
                          <div className="about-editorial__highlightLabel">
                            {t.badge}
                          </div>
                          <div className="about-editorial__highlightText">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.article>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid gap-4 md:grid-cols-2"
          >
            {docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noreferrer"
                className="about-editorial__miniCard"
              >
                <div className="about-editorial__miniHeader">
                  <div className="about-editorial__miniIcon">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div className="about-editorial__miniBadge">PDF</div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2" style={{ color: "var(--pink-ink)" }}>
                    <Heart size={12} className="fill-current" />
                    <Star size={12} className="fill-current" />
                    <Sparkles size={12} />
                  </div>

                  <div className="manhwa-kicker">
                    <Sparkles size={12} />
                    {t.document}
                  </div>
                </div>

                <h3 className="about-editorial__miniTitle">{doc.title}</h3>

                <div className="skills-feature-card__divider" />

                <p className="about-editorial__miniText">{doc.text}</p>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="mailto:anahydlira@gmail.com" className="arcade-button">
            <Mail className="h-4 w-4" />
            {t.email}
          </a>

          <a
            href="https://www.linkedin.com/in/anahi-lozano-de-lira-a4213a187"
            target="_blank"
            rel="noreferrer"
            className="game-button-secondary"
          >
            <Linkedin className="h-4 w-4" />
            {t.linkedin}
          </a>

          <a
            href="https://github.com/Alucarduwu"
            target="_blank"
            rel="noreferrer"
            className="game-button-secondary"
          >
            <Github className="h-4 w-4" />
            {t.github}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}