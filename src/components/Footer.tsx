import { Heart, Sparkles, Star } from "lucide-react";
import type { Language } from "../App";

interface FooterProps {
  language: Language;
}

const content = {
  es: {
    built: "Construido con",
    rights: "Todos los derechos reservados.",
    panel: "Portfolio Footer",
    version: "Portafolio v1.0",
  },
  en: {
    built: "Built with",
    rights: "All rights reserved.",
    panel: "Portfolio Footer",
    version: "Portfolio v1.0",
  },
};

export default function Footer({ language }: FooterProps) {
  const t = content[language];

  return (
    <footer className="mt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="manhwa-shell">

          <div className="manhwa-shell__bar">
            <div className="manhwa-shell__title">
              <Sparkles size={13} />
              {t.panel}
            </div>

            <div className="manhwa-shell__dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="p-8 text-center">

            <p
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "var(--text-strong)" }}
            >
              © 2026

              <span
                className="font-semibold"
                style={{ color: "var(--text-ultra)" }}
              >
                Anahí Lozano
              </span>

              <Heart
                className="h-4 w-4"
                style={{ color: "var(--pink-ink)" }}
              />
            </p>

            <div className="skills-feature-card__divider my-5" />

            <p
              className="flex flex-wrap items-center justify-center gap-2 text-sm"
              style={{ color: "var(--text-strong)" }}
            >
              {t.built}

              <span className="manhwa-chip">
                <span className="manhwa-chip__text">React</span>
              </span>

              <span className="manhwa-chip">
                <span className="manhwa-chip__text">TypeScript</span>
              </span>

              <span className="manhwa-chip">
                <span className="manhwa-chip__text">Tailwind</span>
              </span>
            </p>

            <p
              className="mt-4 text-xs"
              style={{ color: "var(--text-soft)" }}
            >
              {t.rights}
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">

              <span className="manhwa-kicker">
                <Sparkles className="h-3 w-3" />
                {t.version}
              </span>

              <span className="manhwa-kicker">
                <Star className="h-3 w-3 fill-current" />
                Creative Developer Portfolio
              </span>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}