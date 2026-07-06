"use client";

import { useEffect, useState } from "react";
import {
  answerQuestion,
  finishExam,
  getCurrentQuestion,
  isExamFinished,
  nextQuestion,
} from "@/lib/examEngine";
import { loadExamSession, saveExamSession } from "@/lib/examStorage";
import type { ExamSession } from "@/types/exam";

export default function Exam() {
  const [session, setSession] = useState<ExamSession | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const saved = loadExamSession();

    if (!saved || saved.questions.length === 0) {
      window.location.href = "/setup";
      return;
    }

    setSession(saved);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!session) return null;

  const question = getCurrentQuestion(session);

  const progress =
    ((session.currentQuestionIndex + 1) / session.settings.numberOfQuestions) *
    100;

  const isPracticeMode = session.settings.mode === "Practice";
  const isExamMode = session.settings.mode === "Exam";
  const isCorrect = selected === question.correctAnswer;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  function saveAndContinue() {
    if (!session || selected === null) return;

    const answered = answerQuestion(session, selected, seconds);

    if (isExamFinished(answered)) {
      const finished = finishExam(answered);
      saveExamSession(finished);
      window.location.href = "/results";
      return;
    }

    const updated = nextQuestion(answered);

    saveExamSession(updated);
    setSession(updated);
    setSelected(null);
    setShowFeedback(false);
    setSeconds(0);
  }

  function handleButton() {
    if (selected === null) return;

    if (isPracticeMode && !showFeedback) {
      setShowFeedback(true);
      return;
    }

    saveAndContinue();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4b1fa3_0%,#24104d_35%,#090714_100%)] px-5 text-white">
      <section className="relative z-10 flex min-h-screen items-center justify-center py-10">
        <div className="w-full max-w-3xl rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-3xl">
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
              Question {session.currentQuestionIndex + 1} /{" "}
              {session.settings.numberOfQuestions}
            </span>

            <div className="text-right">
              <p className="text-sm font-semibold text-violet-100">
                {formattedTime}
              </p>

              <p className="text-xs text-violet-300/70">
                {session.settings.mode} • {session.settings.difficulty}
              </p>
            </div>
          </div>

          <div className="mb-10 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-200/80">
            {question.roadmapModule} · {question.topic}
          </p>

          <h1 className="mb-8 text-3xl font-black leading-snug">
            {question.question}
          </h1>

          <div className="grid gap-4">
            {question.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrectAnswer = index === question.correctAnswer;

              let style =
                "border-white/10 bg-white/[0.06] hover:bg-white/10";

              if (isSelected) {
                style =
                  "border-fuchsia-400 bg-gradient-to-r from-violet-600/80 to-fuchsia-500/80";
              }

              if (isPracticeMode && showFeedback && isCorrectAnswer) {
                style = "border-emerald-400 bg-emerald-500/20";
              }

              if (
                isPracticeMode &&
                showFeedback &&
                isSelected &&
                !isCorrectAnswer
              ) {
                style = "border-red-400 bg-red-500/20";
              }

              return (
                <button
                  key={index}
                  disabled={isPracticeMode && showFeedback}
                  onClick={() => setSelected(index)}
                  className={`rounded-2xl border p-5 text-left font-bold transition-all ${style}`}
                >
                  <span className="mr-3 font-black text-violet-300">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {isPracticeMode && showFeedback && (
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isCorrect
                  ? "border-emerald-400/40 bg-emerald-500/10"
                  : "border-red-400/40 bg-red-500/10"
              }`}
            >
              <p className="mb-2 text-xl font-black">
                {isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </p>

              <p className="text-violet-100/80">{question.explanation}</p>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              disabled={selected === null}
              onClick={handleButton}
              className={`rounded-2xl px-7 py-3 font-bold transition ${
                selected !== null
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-[0_10px_30px_rgba(168,85,247,.35)] hover:scale-105"
                  : "bg-white/10 text-white/40"
              }`}
            >
              {isExamMode
                ? isExamFinished(session)
                  ? "Finish →"
                  : "Next →"
                : !showFeedback
                ? "Check Answer →"
                : isExamFinished(session)
                ? "Finish →"
                : "Next →"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}