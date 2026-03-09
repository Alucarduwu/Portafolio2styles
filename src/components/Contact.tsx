import { motion, type Variants } from "framer-motion";
import { Mail, Github, FileText, Linkedin, Sparkles, Send, Star } from "lucide-react";
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
    title: "Construyamos algo increíble",
    description:
      "Estoy abierta a oportunidades en desarrollo full stack, frontend, backend y desarrollo móvil. Si quieres colaborar, conocer mi trabajo o contactarme para una vacante, aquí puedes encontrar mis enlaces principales.",
    email: "Correo",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvStandard: "CV (Normal)",
    cvHarvard: "CV (Formato Harvard)",
    panelTitle: "Communication Terminal",
    linksTitle: "Canales principales",
    availability: "Disponible para colaboración y oportunidades",
    quickNote: "Respuesta por correo o LinkedIn",
  },
  en: {
    badge: "Contact",
    title: "Let’s build something amazing",
    description:
      "I’m open to opportunities in full stack development, frontend, backend and mobile development. If you’d like to collaborate, review my work or contact me for a role, you can find my main links below.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    cvStandard: "CV (Standard)",
    cvHarvard: "CV (Harvard Format)",
    panelTitle: "Communication Terminal",
    linksTitle: "Main channels",
    availability: "Available for collaboration and opportunities",
    quickNote: "Reply via email or LinkedIn",
  },
};

export default function Contact({ language }: ContactProps) {
  const t = content[language];

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rpg-window"
      >
        <div className="rpg-window__bar">
          <div className="rpg-window__title">{t.panelTitle}</div>

          <div className="rpg-window__dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="game-label">
            <Sparkles className="h-4 w-4" />
            {t.badge}
          </div>

          <h2 className="pixel-title glow-text mt-5 max-w-4xl text-3xl text-white md:text-5xl">
            <span className="game-title-gradient">{t.title}</span>
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="game-screen p-5 md:p-6"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="game-chip">
                  <Star className="h-3.5 w-3.5 text-fuchsia-200" />
                  {t.availability}
                </span>

                <span className="game-chip">
                  <Send className="h-3.5 w-3.5 text-violet-200" />
                  {t.quickNote}
                </span>
              </div>

              <p className="max-w-2xl text-left leading-8 text-slate-300">
                {t.description}
              </p>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="game-card p-5 md:p-6"
            >
              <p className="text-left text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/85">
                {t.linksTitle}
              </p>

              <div className="game-divider my-4" />

              <div className="space-y-3">
                <a
                  href="mailto:anahydlira@gmail.com"
                  className="game-button-secondary w-full justify-start"
                >
                  <Mail className="h-4 w-4" />
                  {t.email}
                </a>

                <a
                  href="https://github.com/Alucarduwu"
                  target="_blank"
                  rel="noreferrer"
                  className="game-button-secondary w-full justify-start"
                >
                  <Github className="h-4 w-4" />
                  {t.github}
                </a>

                <a
                  href="https://www.linkedin.com/in/anahi-lozano-de-lira-a4213a187"
                  target="_blank"
                  rel="noreferrer"
                  className="game-button-secondary w-full justify-start"
                >
                  <Linkedin className="h-4 w-4" />
                  {t.linkedin}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            <a
              href="/Cv Anahi Betzabe Lozano de Lira.pdf"
              target="_blank"
              rel="noreferrer"
              className="game-card p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 text-fuchsia-200">
                  <FileText className="h-5 w-5" />
                </div>

                <span className="game-chip">PDF</span>
              </div>

              <p className="text-left text-[11px] uppercase tracking-[0.18em] text-fuchsia-200/80">
                {language === "es" ? "Documento" : "Document"}
              </p>

              <h3 className="mt-2 text-left text-lg font-semibold text-white">
                {t.cvStandard}
              </h3>

              <p className="mt-3 text-left text-sm leading-7 text-slate-300">
                {language === "es"
                  ? "Versión principal de mi currículum para revisión general."
                  : "Main version of my resume for general review."}
              </p>
            </a>

            <a
              href="/Anahi_Lozano_Harvard_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="game-card p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/15 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 text-fuchsia-200">
                  <FileText className="h-5 w-5" />
                </div>

                <span className="game-chip">PDF</span>
              </div>

              <p className="text-left text-[11px] uppercase tracking-[0.18em] text-fuchsia-200/80">
                {language === "es" ? "Documento" : "Document"}
              </p>

              <h3 className="mt-2 text-left text-lg font-semibold text-white">
                {t.cvHarvard}
              </h3>

              <p className="mt-3 text-left text-sm leading-7 text-slate-300">
                {language === "es"
                  ? "Versión académica/profesional en formato Harvard."
                  : "Academic/professional version in Harvard format."}
              </p>
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-3"
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}