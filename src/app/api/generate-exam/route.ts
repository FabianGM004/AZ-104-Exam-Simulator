import { ai } from "@/lib/gemini";
 
// Permite que la función espere lo suficiente para hacer 2-3 reintentos
// sin que Vercel corte la ejecución. Si tu plan de Vercel lo permite,
// puedes subir esto más (Hobby: máx 60s, Pro: hasta 300s).
export const maxDuration = 30;
 
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
 
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("TIMEOUT"));
    }, ms);
 
    promise
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}
 
function isRateLimitError(error: any): boolean {
  const status =
    error?.status ??
    error?.response?.status ??
    error?.cause?.status ??
    undefined;
 
  const message = String(error?.message ?? "").toLowerCase();
 
  return (
    status === 429 ||
    message.includes("429") ||
    message.includes("quota") ||
    message.includes("rate limit") ||
    message.includes("resource_exhausted")
  );
}
 
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 
// Llama a Gemini con reintentos automáticos si choca con un 429.
// Espera un poco más en cada intento (backoff), y añade un pequeño
// margen aleatorio (jitter) para que, si varias peticiones llegaron
// a la vez, no vuelvan a reintentar todas en el mismo instante.
async function generateWithRetry(prompt: string, maxAttempts = 3) {
  let lastError: any;
 
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await withTimeout(
        ai.models.generateContent({
          model: "gemini-2.5-flash-lite",
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          config: {
            temperature: 0.2,
            responseMimeType: "application/json",
          },
        }),
        15000
      );
 
      return response;
    } catch (error: any) {
      lastError = error;
 
      const isLastAttempt = attempt === maxAttempts;
 
      if (!isRateLimitError(error) || isLastAttempt) {
        throw error;
      }
 
      const baseDelay = 1500 * attempt; // 1.5s, 3s, 4.5s...
      const jitter = Math.random() * 800;
      console.warn(
        `Rate limit alcanzado (intento ${attempt}/${maxAttempts}), reintentando en ${Math.round(
          baseDelay + jitter
        )}ms`
      );
 
      await sleep(baseDelay + jitter);
    }
  }
 
  throw lastError;
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
 
    const response = await generateWithRetry(prompt, 3);
 
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
  } catch (error: any) {
    console.error("GENERATE EXAM ERROR:", error);
 
    if (error?.message === "TIMEOUT") {
      return Response.json(
        {
          ok: false,
          error: "timeout",
          message:
            "La IA está tardando demasiado en responder. Inténtalo de nuevo en unos segundos.",
        },
        { status: 504 }
      );
    }
 
    if (isRateLimitError(error)) {
      return Response.json(
        {
          ok: false,
          error: "rate_limit",
          message:
            "Hay mucha demanda ahora mismo. Espera unos segundos e inténtalo de nuevo.",
        },
        { status: 429 }
      );
    }
 
    return Response.json(
      {
        ok: false,
        error: "unknown",
        message: "No se pudo generar el examen. Inténtalo de nuevo.",
      },
      { status: 500 }
    );
  }
}
 