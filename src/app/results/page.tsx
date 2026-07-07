"use client";

import { useEffect, useState } from "react";
import { getResults } from "@/lib/examEngine";
import { loadExamSession } from "@/lib/examStorage";
import { trackEvent } from "@/lib/analytics";
import type { ExamResult, ExamSession } from "@/types/exam";

const ROADMAP_HOME =
  "https://github.com/FabianGM004/azure-infrastructure-roadmap";

const ROADMAP_LINKS: Record<string, string> = {
  "01-Identity-Governance":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/01-Identity-Governance/README.md",
  "02-Compute":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/02-Compute/README.md",
  "03-Storage":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/03-Storage/README.md",
  "04-Networking":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/04-Networking/README.md",
  "05-Monitoring-BCDR":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/05-Monitoring-BCDR/README.md",
  "06-Cost-Management":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/06-Cost-Management/README.md",
  "07-Automation":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/07-Automation/README.md",
  "08-Security":
    "https://github.com/FabianGM004/azure-infrastructure-roadmap/blob/main/08-Security/README.md",
};

function getRoadmapUrl(roadmapModule: string) {
  return ROADMAP_LINKS[roadmapModule] ?? ROADMAP_HOME;
}

export default function Results() {
  const [results, setResults] = useState<ExamResult | null>(null);
  const [session, setSession] = useState<ExamSession | null>(null);
  const [language, setLanguage] = useState<"en" | "es">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const currentLanguage = savedLanguage === "es" ? "es" : "en";

    setLanguage(currentLanguage);

    const savedSession = loadExamSession();

    if (!savedSession) {
      window.location.href = "/setup";
      return;
    }

    const examResults = getResults(savedSession);

    setSession(savedSession);
    setResults(examResults);

    trackEvent("exam_completed", {
      score: examResults.score,
      correct: examResults.correct,
      wrong: examResults.wrong,
      total: examResults.total,
      mode: savedSession.settings.mode,
      difficulty: savedSession.settings.difficulty,
      language: currentLanguage,
    });
  }, []);

  if (!results || !session) return null;

  const isSpanish = language === "es";

  const averageTime =
    results.answers.length === 0
      ? 0
      : Math.round(
          results.answers.reduce((total, answer) => total + answer.timeSpent, 0) /
            results.answers.length
        );

  const wrongAnswers = results.answers.filter((answer) => !answer.isCorrect);

  return (
  <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4b1fa3_0%,#24104d_35%,#090714_100%)] px-2 text-white sm:px-5">
    <section className="relative z-10 flex min-h-screen items-center justify-center py-6 sm:py-10">
      <div className="w-full max-w-5xl rounded-[26px] border border-white/10 bg-white/[0.045] p-4 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-3xl sm:rounded-[34px] sm:p-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-violet-200/90">
            {isSpanish ? "Resultados del examen" : "Exam Results"}
          </p>

          <h1 className="mb-4 text-5xl font-black sm:text-6xl">
            {results.score}%
          </h1>

          <p className="mb-10 text-violet-100/80">
            {isSpanish
              ? `Has respondido correctamente ${results.correct} de ${results.total} preguntas.`
              : `You answered ${results.correct} out of ${results.total} questions correctly.`}
          </p>
        </div>

        <div className="mb-10 grid gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            [isSpanish ? "Correctas" : "Correct", results.correct],
            [isSpanish ? "Incorrectas" : "Wrong", results.wrong],
            [isSpanish ? "Preguntas" : "Questions", results.total],
            [isSpanish ? "Tiempo medio" : "Avg Time", `${averageTime}s`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center sm:p-5"
            >
              <p className="text-sm text-violet-100/60">{label}</p>
              <p className="text-3xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-3 sm:p-6">
          <h2 className="mb-5 text-xl font-black sm:text-2xl">
            {isSpanish
              ? "Revisar respuestas incorrectas"
              : "Review Incorrect Answers"}
          </h2>

          {wrongAnswers.length === 0 ? (
            <p className="text-violet-100/70">
              {isSpanish
                ? "Perfecto. No has fallado ninguna pregunta."
                : "Perfect. You did not miss any questions."}
            </p>
          ) : (
            <div className="grid gap-5">
              {wrongAnswers.map((answer, index) => {
                const question = session.questions.find(
                  (q) => q.id === answer.questionId
                );

                if (!question) return null;

                const roadmapUrl = getRoadmapUrl(question.roadmapModule);
                const microsoftLearnUrl = question.references?.[0];

                return (
                  <div
                    key={answer.questionId}
                    className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 sm:p-5"
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-200/80 sm:text-sm">
                      {isSpanish
                        ? `Pregunta fallada ${index + 1}`
                        : `Missed Question ${index + 1}`}
                    </p>

                    <h3 className="mb-4 text-lg font-black leading-snug sm:text-xl">
                      {question.question}
                    </h3>

                    <div className="mb-4 grid gap-2 text-sm">
                      <p className="text-red-100">
                        {isSpanish ? "Tu respuesta:" : "Your answer:"}{" "}
                        <span className="font-bold">
                          {question.options[answer.selectedAnswer]}
                        </span>
                      </p>

                      <p className="text-emerald-100">
                        {isSpanish ? "Respuesta correcta:" : "Correct answer:"}{" "}
                        <span className="font-bold">
                          {question.options[answer.correctAnswer]}
                        </span>
                      </p>
                    </div>

                    <p className="text-sm leading-7 text-violet-100/80 sm:text-base">
                      {question.explanation}
                    </p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-200/80 sm:text-sm">
                        {isSpanish ? "Estudia este tema" : "Study this topic"}
                      </p>

                      <p className="mb-2 text-sm text-violet-100/70">
                        {isSpanish ? "Módulo:" : "Module:"}{" "}
                        <span className="font-bold text-white">
                          {ROADMAP_LINKS[question.roadmapModule]
                            ? question.roadmapModule
                            : "Azure Infrastructure Roadmap"}
                        </span>
                      </p>

                      <p className="mb-4 text-sm text-violet-100/70">
                        {isSpanish ? "Tema:" : "Topic:"}{" "}
                        <span className="font-bold text-white">
                          {question.topic}
                        </span>{" "}
                        · {question.domain}
                      </p>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                          href={roadmapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackEvent("roadmap_opened", {
                              roadmapModule: question.roadmapModule,
                              topic: question.topic,
                            })
                          }
                          className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 py-3 text-center text-sm font-black text-white transition hover:scale-[1.02]"
                        >
                          {isSpanish
                            ? "Abrir módulo del Roadmap ↗"
                            : "Open Roadmap Module ↗"}
                        </a>

                        {microsoftLearnUrl && (
                          <a
                            href={microsoftLearnUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackEvent("learn_reference_opened", {
                                roadmapModule: question.roadmapModule,
                                topic: question.topic,
                              })
                            }
                            className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-center text-sm font-black text-violet-100 transition hover:bg-white/10"
                          >
                            {isSpanish
                              ? "Referencia Microsoft Learn ↗"
                              : "Microsoft Learn Reference ↗"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/setup"
            className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-center font-black"
          >
            {isSpanish ? "Nuevo examen" : "New Exam"}
          </a>

          <a
            href="/"
            className="rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 text-center font-black text-violet-100"
          >
            {isSpanish ? "Inicio" : "Home"}
          </a>
        </div>
      </div>
    </section>
      </main>
  );
}
