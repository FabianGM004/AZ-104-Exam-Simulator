import type {
  ExamAnswer,
  ExamQuestion,
  ExamResult,
  ExamSession,
  ExamSettings,
} from "@/types/exam";

export function startExam(
  settings: ExamSettings,
  generatedQuestions: ExamQuestion[]
): ExamSession {
  return {
    settings: {
      ...settings,
      numberOfQuestions: generatedQuestions.length,
    },
    questions: generatedQuestions,
    currentQuestionIndex: 0,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    answers: [],
  };
}

export function getCurrentQuestion(session: ExamSession) {
  return session.questions[session.currentQuestionIndex];
}

export function answerQuestion(
  session: ExamSession,
  selectedAnswer: number,
  timeSpent: number
): ExamSession {
  const question = getCurrentQuestion(session);

  const answer: ExamAnswer = {
    questionId: question.id,
    selectedAnswer,
    correctAnswer: question.correctAnswer,
    isCorrect: selectedAnswer === question.correctAnswer,
    domain: question.domain,
    difficulty: question.difficulty,
    timeSpent,
  };

  return {
    ...session,
    answers: [...session.answers, answer],
  };
}

export function nextQuestion(session: ExamSession): ExamSession {
  return {
    ...session,
    currentQuestionIndex: session.currentQuestionIndex + 1,
  };
}

export function isExamFinished(session: ExamSession): boolean {
  return session.currentQuestionIndex >= session.questions.length - 1;
}

export function finishExam(session: ExamSession): ExamSession {
  return {
    ...session,
    finishedAt: new Date().toISOString(),
  };
}

export function getResults(session: ExamSession): ExamResult {
  const correct = session.answers.filter((answer) => answer.isCorrect).length;
  const total = session.answers.length;
  const wrong = total - correct;

  return {
    score: total === 0 ? 0 : Math.round((correct / total) * 100),
    correct,
    wrong,
    total,
    answers: session.answers,
  };
}