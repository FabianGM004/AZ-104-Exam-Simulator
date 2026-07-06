import { questions } from "@/data/questions";

export function getQuestions() {
  return questions;
}

export function getQuestion(index: number) {
  return questions[index];
}

export function getQuestionCount() {
  return questions.length;
}