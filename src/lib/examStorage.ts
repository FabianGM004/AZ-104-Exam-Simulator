import type { ExamSession } from "@/types/exam";

const EXAM_SESSION_KEY = "az104-exam-session";

export function saveExamSession(session: ExamSession) {
  localStorage.setItem(EXAM_SESSION_KEY, JSON.stringify(session));
}

export function loadExamSession(): ExamSession | null {
  const savedSession = localStorage.getItem(EXAM_SESSION_KEY);

  if (!savedSession) {
    return null;
  }

  return JSON.parse(savedSession) as ExamSession;
}

export function clearExamSession() {
  localStorage.removeItem(EXAM_SESSION_KEY);
}