import { Heart, Sparkles } from "lucide-react";
import type { Language } from "../App";

interface FooterProps {
  language: Language;
}

const content = {
  es: {
    built: "Construido con",
    rights: "Todos los derechos reservados.",
    panel: "System Status",
  },
  en: {
    built: "Built with",
    rights: "All rights reserved.",
    panel: "System Status",
  },
};

export default function Footer({ language }: FooterProps) {
  const t = content[language];

  return (
    <footer className="mt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="rpg-window">

          <div className="rpg-window__bar">
            <div className="rpg-window__title">{t.panel}</div>

            <div className="rpg-window__dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="p-6 text-center">

            <p className="flex items-center justify-center gap-2 text-sm text-slate-300">
              © 2026 
              <span className="font-semibold text-white">
                Anahí Lozano
              </span>

              <Heart className="h-4 w-4 text-pink-400 opacity-80" />
            </p>

            <div className="game-divider my-4" />

            <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
              {t.built}

              <span className="game-chip">React</span>
              <span className="game-chip">TypeScript</span>
              <span className="game-chip">Tailwind CSS</span>
            </p>

            <p className="mt-3 text-xs text-slate-500">
              {t.rights}
            </p>

            <div className="mt-4 flex justify-center">
              <span className="game-chip flex items-center gap-2">
                <Sparkles className="h-3 w-3 text-fuchsia-200" />
                Portfolio v1.0
              </span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}