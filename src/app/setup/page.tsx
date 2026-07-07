"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { startExam } from "@/lib/examEngine";
import { saveExamSession } from "@/lib/examStorage";
import type { ExamDifficulty, ExamMode, ExamQuestion } from "@/types/exam";

export default function Setup() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [questions, setQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState<ExamDifficulty>("Mixed");
  const [mode, setMode] = useState<ExamMode>("Practice");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const isSpanish = language === "es";

  const optionClass = (active: boolean) =>
    active
      ? "rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-4 font-black text-white shadow-[0_10px_28px_rgba(168,85,247,.35)]"
      : "rounded-2xl border border-white/10 bg-white/[0.06] py-4 font-black text-violet-100 transition hover:bg-white/10";

  const handleBeginExam = async () => {
    try {
      setIsGenerating(true);

      const response = await fetch("/api/generate-exam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions,
          difficulty,
          language,
        }),
      });

      const data = await response.json();

      if (!data.ok || !Array.isArray(data.questions)) {
        throw new Error("No questions generated");
      }

      const generatedQuestions = data.questions as ExamQuestion[];

      const session = startExam(
        {
          numberOfQuestions: generatedQuestions.length,
          difficulty,
          mode,
          domains: ["Full AZ-104 Roadmap"],
        },
        generatedQuestions
      );

      saveExamSession(session);

      trackEvent("exam_started", {
        questions: generatedQuestions.length,
        difficulty,
        mode,
        language,
      });

      window.location.href = "/exam";
    } catch (error) {
      console.error(error);
      alert(
        isSpanish
          ? "No se pudo generar el examen. Inténtalo de nuevo."
          : "Could not generate the exam. Try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4b1fa3_0%,#24104d_35%,#090714_100%)] px-5 text-white">
      <section className="relative z-10 flex min-h-screen items-center justify-center py-10">
        <div className="w-full max-w-xl rounded-[34px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-violet-200">
            AZ-104 Simulator
          </p>

          <h1 className="mb-3 text-4xl font-black">
            {isSpanish ? "Configurar examen" : "Configure Exam"}
          </h1>

          <p className="mb-10 text-violet-100/70">
            {isSpanish
              ? "Genera un examen AZ-104 completo con inteligencia artificial."
              : "Generate a complete AI-powered AZ-104 exam."}
          </p>

          <div className="mb-8">
            <p className="mb-4 font-bold">
              {isSpanish ? "Preguntas" : "Questions"}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[10, 20, 30].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setQuestions(amount)}
                  className={optionClass(questions === amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 font-bold">
              {isSpanish ? "Dificultad" : "Difficulty"}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {(["Easy", "Mixed", "Hard"] as ExamDifficulty[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={optionClass(difficulty === level)}
                >
                  {level === "Easy"
                    ? isSpanish
                      ? "Fácil"
                      : "Easy"
                    : level === "Mixed"
                    ? isSpanish
                      ? "Mixta"
                      : "Mixed"
                    : isSpanish
                    ? "Difícil"
                    : "Hard"}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 font-bold">
              {isSpanish ? "Alcance del examen" : "Exam Scope"}
            </p>

            <div className="rounded-2xl border border-fuchsia-400 bg-gradient-to-r from-violet-600/80 to-fuchsia-500/80 p-5">
              <div className="font-black">
                {isSpanish ? "Examen completo del Roadmap" : "Full Roadmap Exam"}
              </div>
              <div className="mt-2 text-sm text-violet-100/80">
                {isSpanish
                  ? "Las preguntas se generan a partir de tu Azure Infrastructure Roadmap."
                  : "Questions are generated across your Azure Infrastructure Roadmap."}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <p className="mb-4 font-bold">{isSpanish ? "Modo" : "Mode"}</p>

            <div className="grid gap-3">
              {(["Practice", "Exam"] as ExamMode[]).map((examMode) => (
                <button
                  key={examMode}
                  onClick={() => setMode(examMode)}
                  className={
                    mode === examMode
                      ? "rounded-2xl border border-fuchsia-400 bg-gradient-to-r from-violet-600/80 to-fuchsia-500/80 p-5 text-left shadow-[0_12px_32px_rgba(168,85,247,.35)]"
                      : "rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left opacity-70 hover:bg-white/10 hover:opacity-100"
                  }
                >
                  <span className="block font-black">
                    {examMode === "Practice"
                      ? isSpanish
                        ? "Modo práctica"
                        : "Practice Mode"
                      : isSpanish
                      ? "Modo examen"
                      : "Exam Mode"}
                  </span>
                  <span className="text-sm text-violet-100/70">
                    {examMode === "Practice"
                      ? isSpanish
                        ? "Recibe feedback después de cada pregunta."
                        : "Feedback after every question."
                      : isSpanish
                      ? "Feedback solo al finalizar el examen."
                      : "Feedback only after finishing the exam."}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBeginExam}
            disabled={isGenerating}
            className="block w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-4 text-lg font-black shadow-[0_12px_32px_rgba(168,85,247,.35)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isGenerating
              ? isSpanish
                ? "Generando examen..."
                : "Generating Exam..."
              : isSpanish
              ? "Empezar examen →"
              : "Begin Exam →"}
          </button>
        </div>
      </section>
    </main>
  );
}