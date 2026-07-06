export type ExamMode = "Practice" | "Exam";

export type ExamDifficulty = "Easy" | "Mixed" | "Hard";

export type ExamQuestion = {
  id: string;
  roadmapModule: string;
  examObjective: string;
  topic: string;
  domain: string;
  difficulty: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  references: string[];
};

export type ExamSettings = {
  numberOfQuestions: number;
  difficulty: ExamDifficulty;
  mode: ExamMode;
  domains: string[];
};

export type ExamAnswer = {
  questionId: string;
  selectedAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  domain: string;
  difficulty: string;
  timeSpent: number;
};

export type ExamSession = {
  settings: ExamSettings;
  questions: ExamQuestion[];
  currentQuestionIndex: number;
  startedAt: string;
  finishedAt: string | null;
  answers: ExamAnswer[];
};

export type ExamResult = {
  score: number;
  correct: number;
  wrong: number;
  total: number;
  answers: ExamAnswer[];
};