"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");

    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  function changeLanguage(lang: "en" | "es") {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setOpen(false);
  }

  const currentFlag = language === "es" ? "🇪🇸" : "🇺🇸";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4b1fa3_0%,#24104d_35%,#090714_100%)] text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-500/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute left-8 top-12 h-28 w-10 rotate-45 rounded-full bg-violet-400/25" />
      <div className="absolute bottom-20 right-10 h-32 w-12 rotate-45 rounded-full bg-blue-400/20" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="relative w-full max-w-3xl rounded-[34px] border border-white/10 bg-white/[0.035] px-8 py-14 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-3xl">
          <div className="absolute right-6 top-6">
            <button
  onClick={() => setOpen((value) => !value)}
  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-white/90 transition hover:bg-white/10"
>
    <span className="text-lg">{currentFlag}</span>
    <span className="text-xs text-violet-100/70">▼</span>
</button>

            {open && (
              <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-white/10 bg-[#1b1238]/95 p-2 text-left shadow-[0_18px_50px_rgba(0,0,0,.45)] backdrop-blur-xl">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
                    language === "en"
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
                      : "text-violet-100 hover:bg-white/10"
                  }`}
                >
                  <span>🇺🇸</span>
                  <span>English</span>
                </button>

                <button
                  onClick={() => changeLanguage("es")}
                  className={`mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${
                    language === "es"
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
                      : "text-violet-100 hover:bg-white/10"
                  }`}
                >
                  <span>🇪🇸</span>
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>

          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-black">
            AZ
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200/90">
            Microsoft Azure Administrator
          </p>

          <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,.25)]">
            AZ-104
          </h1>

          <h2 className="mb-6 text-5xl font-extrabold text-white drop-shadow-[0_0_16px_rgba(255,255,255,.18)]">
            Exam Simulator
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-lg leading-8 text-violet-100/90">
            {language === "es"
              ? "Domina Azure. Prepara el AZ-104 con confianza."
              : "Master Azure. Pass AZ-104 with confidence."}
          </p>

          <a
            href="/setup"
            className="inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-4 text-lg font-bold text-white shadow-[0_10px_30px_rgba(168,85,247,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_45px_rgba(168,85,247,.45)]"
          >
            {language === "es" ? "Empezar examen →" : "Start Exam →"}
          </a>
        </div>
      </section>
    </main>
  );
}