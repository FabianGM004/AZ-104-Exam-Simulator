export function buildExamPrompt({
  questions,
  difficulty,
  domains,
}: {
  questions: number;
  difficulty: string;
  domains: string[];
}) {
  const difficultyInstruction =
    difficulty === "Easy"
      ? "Generate only Easy questions. They may test fundamental concepts, but must still be realistic AZ-104 scenarios."
      : difficulty === "Hard"
      ? "Generate only Hard questions. They must require scenario analysis, troubleshooting, configuration decisions, or understanding of Azure limitations. Avoid simple definition questions."
      : "Generate a mixed exam: 30% Easy, 50% Medium, 20% Hard. Most questions must be scenario-based, not simple definitions.";

  return `
You are generating questions for a Microsoft AZ-104 exam simulator.

Return ONLY valid JSON.
Do NOT use markdown.

Generate exactly ${questions} questions.

Domains: ${domains.join(", ")}

Difficulty instruction:
${difficultyInstruction}

Return this exact JSON shape:

{
  "questions": [
    {
      "id": "generated-1",
      "roadmapModule": "04-Networking",
      "examObjective": "Configure and manage virtual networks",
      "topic": "Virtual Networks",
      "domain": "Networking",
      "difficulty": "Medium",
      "question": "...",
      "options": ["...", "...", "...", "..."],
      "correctAnswer": 0,
      "explanation": "...",
      "references": ["https://learn.microsoft.com/..."]
    }
  ]
}

Rules:
- AZ-104 only.
- English.
- Exactly 4 options per question.
- correctAnswer must be 0, 1, 2 or 3.
- Use official Microsoft Learn URLs.
- Do not invent Azure services.
- Avoid duplicate concepts.
- Prefer realistic Azure administrator scenarios.
- Avoid simple "What is..." questions unless difficulty is Easy.
- Explanations must be 40-90 words.
- Every explanation must explain why the correct answer is correct and why the closest wrong option is incorrect.
`;
}