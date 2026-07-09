import { ai } from "@/lib/gemini";

type GeneratedQuestion = {
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

const MODEL = "gemini-2.5-flash-lite";

function shuffleQuestionOptions(question: GeneratedQuestion): GeneratedQuestion {
  const correctOption = question.options[question.correctAnswer];

  const shuffledOptions = [...question.options]
    .map((option) => ({ option, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.option);

  const newCorrectAnswer = shuffledOptions.indexOf(correctOption);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
  };
}

function getStatus(error: unknown): number | undefined {
  if (typeof error !== "object" || error === null) return undefined;

  const possibleError = error as {
    status?: number;
    response?: { status?: number };
    cause?: { status?: number };
  };

  return (
    possibleError.status ??
    possibleError.response?.status ??
    possibleError.cause?.status
  );
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

function getErrorType(error: unknown) {
  const status = getStatus(error);
  const message = getErrorMessage(error).toLowerCase();

  if (
    status === 429 ||
    message.includes("429") ||
    message.includes("quota") ||
    message.includes("rate limit") ||
    message.includes("resource_exhausted")
  ) {
    return {
      status: 429,
      error: "rate_limit",
      message:
        "The AI service has reached a temporary usage limit. Please try again in a few minutes.",
    };
  }

  if (
    status === 503 ||
    message.includes("503") ||
    message.includes("unavailable") ||
    message.includes("high demand") ||
    message.includes("overloaded")
  ) {
    return {
      status: 503,
      error: "model_overloaded",
      message:
        "The AI service is temporarily busy. Please try again in a few minutes.",
    };
  }

  return {
    status: 500,
    error: "generation_error",
    message: "Could not generate the exam. Please try again.",
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const language = body.language === "es" ? "Spanish" : "English";
    const questionCount =
      body.questions === 20 || body.questions === 30 ? body.questions : 10;

    const prompt = `Create exactly ${questionCount} Microsoft AZ-104 exam simulator questions.

Return ONLY valid JSON.
Do not include markdown.
Do not include comments.
Generate the entire exam in ${language}.

Scope: Full AZ-104 Roadmap
Difficulty: ${body.difficulty ?? "Mixed"}

Use only these roadmapModule values:
01-Identity-Governance
02-Compute
03-Storage
04-Networking
05-Monitoring-BCDR
06-Cost-Management
07-Automation
08-Security

JSON shape:
{
  "questions": [
    {
      "id": "generated-1",
      "roadmapModule": "04-Networking",
      "examObjective": "str",
      "topic": "str",
      "domain": "str",
      "difficulty": "Medium",
      "question": "str",
      "options": ["", "", "", ""],
      "correctAnswer": 0,
      "explanation": "40-90 words",
      "references": ["https://learn.microsoft.com/..."]
    }
  ]
}

Rules:
- AZ-104 only.
- Exactly ${questionCount} questions.
- Every question must have exactly 4 options.
- correctAnswer must be 0, 1, 2, or 3.
- Use official Microsoft Learn URLs only.
- Questions must cover different Azure areas.
- Avoid duplicate topics.
- Questions must resemble official Microsoft AZ-104 exam style.
- Prefer realistic Azure administrator scenarios.
- Avoid trivia or memorization-only questions.
- Do not generate trick questions.
- Options must be concise and readable.
- Each option should ideally be under 18 words.
- Do not use raw Azure permission strings as answer options.
- Do not use ARM action paths such as Microsoft.Network/.../read unless absolutely necessary.
- Do not use JSON, ARM templates, REST API paths, CLI commands, or PowerShell commands as answer options unless the topic specifically requires it.
- If the topic is RBAC or Custom Roles, describe permissions in natural language instead of raw Microsoft.* permission strings.
- Questions and answers must render cleanly on desktop and mobile.
- Do not include markdown, code blocks, tables, or bullet lists inside questions or answers.
- Easy questions must test one common Azure administration concept.
- Mixed difficulty must be mostly medium and scenario-based.
- Hard questions must require reasoning across multiple Azure concepts.
- Never make a question harder only by making the answer options longer.
- Explanations must be 40 to 90 words.
- Explanations must explain why the correct answer is correct.
- Explanations must briefly explain why the closest distractor is incorrect.`;

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text ?? "{}");

    if (!Array.isArray(data.questions) || data.questions.length === 0) {
      throw new Error("Invalid questions array");
    }

    const questions = data.questions.map((question: GeneratedQuestion) =>
      shuffleQuestionOptions(question)
    );

    return Response.json({
      ok: true,
      questions,
    });
  } catch (error: unknown) {
    console.error("GENERATE EXAM ERROR:", error);

    const errorInfo = getErrorType(error);

    return Response.json(
      {
        ok: false,
        error: errorInfo.error,
        message: errorInfo.message,
      },
      { status: errorInfo.status }
    );
  }
}