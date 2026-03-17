import { useEffect, useMemo, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  FolderOpen,
  Image as ImageIcon,
  Star,
  Heart,
} from "lucide-react";
import { projects } from "../components/dataprojetcts/projects";
import type { Language } from "../App";

interface ProjectsProps {
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

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    scale: 0.985,
    transition: {
      duration: 0.28,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 12,
    transition: {
      duration: 0.18,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const content = {
  es: {
    badge: "Proyectos",
    eyebrow: "Selected work",
    titleLines: ["Proyectos", "destacados"],
    intro:
      "Una selección de proyectos donde combino diseño visual, arquitectura frontend/backend, experiencia de usuario y desarrollo móvil.",
    github: "GitHub",
    demo: "Demo",
    previous: "Anterior",
    next: "Siguiente",
    gallery: "capturas",
    close: "Cerrar",
    screenshots: "Capturas del proyecto",
    openGallery: "Ver galería",
    panelTitle: "Project editorial",
    projectLabel: "Proyecto",
    resources: "Recursos",
    preview: "Vista previa",
    status: "Estado",
    active: "Activo",
    featured: "Destacado",
    portfolio: "Portfolio",
    featuredTitle: "Project showcase",
    featuredText:
      "Proyectos construidos con enfoque en producto, detalle visual, estructura técnica y experiencias digitales funcionales.",
    thumbnails: "Miniaturas",
  },
  en: {
    badge: "Projects",
    eyebrow: "Selected work",
    titleLines: ["Featured", "projects"],
    intro:
      "A curated selection of projects where I combine visual design, frontend/backend architecture, user experience and mobile development.",
    github: "GitHub",
    demo: "Demo",
    previous: "Previous",
    next: "Next",
    gallery: "screenshots",
    close: "Close",
    screenshots: "Project screenshots",
    openGallery: "View gallery",
    panelTitle: "Project editorial",
    projectLabel: "Project",
    resources: "Resources",
    preview: "Preview",
    status: "Status",
    active: "Active",
    featured: "Featured",
    portfolio: "Portfolio",
    featuredTitle: "Project showcase",
    featuredText:
      "Projects built with a focus on product thinking, visual detail, technical structure and functional digital experiences.",
    thumbnails: "Thumbnails",
  },
};

export default function Projects({ language }: ProjectsProps) {
  const t = content[language];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const total = projects.length;

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const visibleProjects = useMemo(() => {
    const currentProject = projects[current];
    const nextProject = projects[(current + 1) % total];
    return [currentProject, nextProject];
  }, [current, total]);

  const activeProject =
    activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  const activeProjectTitle =
    activeProject &&
    (language === "es" ? activeProject.titleEs : activeProject.titleEn);

  const openGallery = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(0);
  };

  const closeGallery = () => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  };

  const goToNextImage = () => {
    if (!activeProject?.images?.length) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const goToPrevImage = () => {
    if (!activeProject?.images?.length) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length
    );
  };

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!activeProject) return;

      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") goToNextImage();
      if (event.key === "ArrowLeft") goToPrevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="py-20 md:py-24">
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
                {t.featured}
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
          </div>

          <motion.aside
            custom={1}
            initial="hidden"
            whileInView="visible"
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
                    <FolderOpen className="h-3.5 w-3.5" />
                    {t.projectLabel}
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
                      {t.badge}
                    </div>
                    <div className="about-editorial__highlightText">
                      {projects.length} {language === "es" ? "proyectos visibles" : "visible projects"}
                    </div>
                  </div>

                  <div className="about-editorial__highlight">
                    <div className="about-editorial__highlightLabel">
                      {t.resources}
                    </div>
                    <div className="about-editorial__highlightText">
                      {language === "es"
                        ? "Galería, repositorio y demo"
                        : "Gallery, repository and demo"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={goPrev}
            aria-label={t.previous}
            className="game-button-secondary h-11 w-11 shrink-0 p-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            aria-label={t.next}
            className="game-button-secondary h-11 w-11 shrink-0 p-0"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-6 xl:grid-cols-2"
            >
              {visibleProjects.map((project) => {
                const realProjectIndex = projects.findIndex(
                  (item) => item.titleEn === project.titleEn
                );

                const title =
                  language === "es" ? project.titleEs : project.titleEn;

                const description =
                  language === "es"
                    ? project.descriptionEs
                    : project.descriptionEn;

                const previewImage =
                  project.images?.[0] ?? "/images/placeholder.png";

                return (
                  <motion.article
                    key={`${project.titleEn}-${current}`}
                    layout
                    className="manhwa-shell overflow-hidden"
                  >
                    <div className="manhwa-shell__bar">
                      <div className="manhwa-shell__title">
                        <Sparkles size={13} />
                        {t.panelTitle} #{String(realProjectIndex + 1).padStart(2, "0")}
                      </div>

                      <div className="manhwa-shell__dots">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_220px]">
                        <div className="space-y-5">
                          <button
                            type="button"
                            onClick={() => openGallery(realProjectIndex)}
                            className="relative block h-64 w-full overflow-hidden rounded-[1.5rem] border text-left transition-transform duration-300 hover:-translate-y-1"
                            style={{
                              borderColor: "var(--border-soft)",
                              boxShadow: "0 14px 28px rgba(227, 191, 210, 0.12)",
                            }}
                          >
                            <img
                              src={previewImage}
                              alt={title}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(55,36,47,0.78)] via-[rgba(55,36,47,0.18)] to-transparent" />

                            <div className="absolute left-4 top-4 z-10">
                              <div className="manhwa-kicker">
                                <ImageIcon className="h-3.5 w-3.5" />
                                {t.preview}
                              </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-5">
                              <div className="flex flex-wrap items-end justify-between gap-3">
                                <div className="min-w-0">
                                  <p
                                    className="text-[11px] uppercase tracking-[0.2em]"
                                    style={{ color: "rgba(255,255,255,0.78)" }}
                                  >
                                    {t.projectLabel}
                                  </p>
                                  <p className="mt-1 line-clamp-1 text-lg font-semibold text-white">
                                    {title}
                                  </p>
                                </div>

                                {project.images?.length > 1 && (
                                  <span className="manhwa-kicker">
                                    <ImageIcon className="h-3.5 w-3.5" />
                                    {project.images.length} {t.gallery}
                                  </span>
                                )}
                              </div>
                            </div>
                          </button>

                          <div className="about-editorial__story">
                            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                              <div className="flex flex-wrap gap-2">
                                <span className="manhwa-kicker">
                                  <FolderOpen className="h-3.5 w-3.5" />
                                  {t.projectLabel}
                                </span>

                                <span className="manhwa-kicker">
                                  <Sparkles className="h-3.5 w-3.5" />
                                  {project.stack}
                                </span>
                              </div>

                              <div
                                className="flex items-center gap-2"
                                style={{ color: "var(--pink-ink)" }}
                              >
                                <Heart size={12} className="fill-current" />
                                <Star size={12} className="fill-current" />
                              </div>
                            </div>

                            <p
                              className="text-left text-sm leading-7 md:text-base"
                              style={{ color: "var(--text-strong)" }}
                            >
                              {description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="about-editorial__miniCard">
                            <div className="about-editorial__miniHeader">
                              <div className="about-editorial__miniIcon">
                                <Sparkles className="h-5 w-5" />
                              </div>

                              <div className="about-editorial__miniBadge">
                                {t.resources}
                              </div>
                            </div>

                            <div className="mt-4 flex flex-col gap-3">
                              <button
                                type="button"
                                onClick={() => openGallery(realProjectIndex)}
                                className="game-button-secondary w-full justify-start"
                              >
                                <Sparkles className="h-4 w-4" />
                                {t.openGallery}
                              </button>

                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="game-button-secondary w-full justify-start"
                                >
                                  <Github className="h-4 w-4" />
                                  {t.github}
                                </a>
                              )}

                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="arcade-button w-full justify-start"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  {t.demo}
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="about-editorial__miniCard">
                            <div className="about-editorial__miniHeader">
                              <div className="about-editorial__miniIcon">
                                <Star className="h-5 w-5" />
                              </div>

                              <div className="about-editorial__miniBadge">
                                {t.status}
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="manhwa-chip">
                                <span className="manhwa-chip__text">{t.active}</span>
                              </span>
                              <span className="manhwa-chip">
                                <span className="manhwa-chip__text">{t.portfolio}</span>
                              </span>
                              <span className="manhwa-chip">
                                <span className="manhwa-chip__text">{t.featured}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((_, index) => {
            const isActive = index === current;
            return (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Go to project ${index + 1}`}
                className={`transition-all duration-300 ${
                  isActive
                    ? "h-3 w-10 rounded-full shadow-[0_0_12px_rgba(216,111,159,0.25)]"
                    : "h-3 w-3 rounded-full"
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(90deg, #ef9fc3 0%, #b59ae4 100%)"
                    : "rgba(212, 187, 201, 0.7)",
                }}
              />
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {activeProject && activeProject.images?.length > 0 && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(55,36,47,0.62)] px-3 py-4 backdrop-blur-xl md:px-6 md:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="manhwa-shell relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden"
            >
              <div className="manhwa-shell__bar">
                <div className="min-w-0">
                  <p
                    className="text-[11px] uppercase tracking-[0.24em] md:text-xs"
                    style={{ color: "var(--pink-ink)" }}
                  >
                    {t.screenshots}
                  </p>
                  <h3
                    className="mt-1 line-clamp-2 text-lg font-semibold md:text-2xl"
                    style={{ color: "var(--text-ultra)" }}
                  >
                    {activeProjectTitle}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="manhwa-shell__dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <button
                    onClick={closeGallery}
                    aria-label={t.close}
                    className="game-button-secondary h-11 w-11 shrink-0 p-0"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-4 p-4 md:gap-5 md:p-6">
                <div
                  className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border px-3 py-4 md:px-6 md:py-6 border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(255,236,244,0.76),rgba(243,238,255,0.68),rgba(255,244,206,0.44))] dark:bg-[linear-gradient(135deg,rgba(8,4,16,0.99),rgba(6,3,12,0.98))]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32),transparent_55%)]" />

                  <div className="pointer-events-none absolute left-4 top-4 z-10">
                    <div className="manhwa-kicker">
                      <ImageIcon className="h-3.5 w-3.5" />
                      {t.preview}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProject.images[activeImageIndex]}
                      src={activeProject.images[activeImageIndex]}
                      alt={`${activeProjectTitle} ${activeImageIndex + 1}`}
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="relative z-10 mx-auto max-h-full w-auto max-w-full rounded-[1.25rem] border object-contain shadow-[0_14px_45px_rgba(0,0,0,0.18)]"
                      style={{ borderColor: "rgba(255,255,255,0.72)" }}
                    />
                  </AnimatePresence>

                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevImage}
                        aria-label={t.previous}
                        className="game-button-secondary absolute left-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 p-0 md:left-5"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        onClick={goToNextImage}
                        aria-label={t.next}
                        className="game-button-secondary absolute right-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 p-0 md:right-5"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                {activeProject.images.length > 1 && (
                  <div className="about-editorial__miniCard p-3 md:p-4">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ImageIcon
                          className="h-4 w-4"
                          style={{ color: "var(--pink-ink)" }}
                        />
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.22em]"
                          style={{ color: "var(--pink-ink)" }}
                        >
                          {t.thumbnails}
                        </p>
                      </div>
                    </div>

                    <div className="skills-feature-card__divider mb-4" />

                    <div className="flex gap-3 overflow-x-auto pb-1">
                      {activeProject.images.map((image, index) => {
                        const isActive = index === activeImageIndex;

                        return (
                          <button
                            key={image}
                            onClick={() => setActiveImageIndex(index)}
                            className={`group relative shrink-0 overflow-hidden rounded-[1rem] border transition-all duration-300 ${
                              isActive ? "shadow-[0_0_18px_rgba(216,111,159,0.14)]" : "opacity-75 hover:opacity-100"
                            }`}
                            style={{
                              borderColor: isActive
                                ? "rgba(216,111,159,0.45)"
                                : "rgba(212, 187, 201, 0.45)",
                            }}
                          >
                            <img
                              src={image}
                              alt={`${activeProjectTitle} thumbnail ${index + 1}`}
                              className="h-24 w-[74px] object-cover md:h-28 md:w-[84px]"
                            />
                            <div
                              className={`absolute inset-0 transition-all duration-300 ${
                                isActive
                                  ? "bg-[rgba(216,111,159,0.10)]"
                                  : "bg-black/5 group-hover:bg-black/0"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}