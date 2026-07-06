import { ai } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const domains =
      Array.isArray(body.domains) && body.domains.length > 3
        ? "Full AZ-104"
        : body.domains?.join(", ") ?? "Full AZ-104";

    const prompt = `Create ONE AZ-104 exam question. Return ONLY JSON.
Scope: ${domains}
Difficulty: ${body.difficulty ?? "Medium"}
Format:
{
  "id": "generated-${Date.now()}",
  "roadmapModule": "str",
  "examObjective": "str",
  "topic": "str",
  "domain": "str",
  "difficulty": "str",
  "question": "str",
  "options": ["", "", "", ""],
  "correctAnswer": 0,
  "explanation": "40-90 words",
  "references": ["https://learn.microsoft.com/..."]
}
Rules: AZ-104 scenario-based. Exactly 4 options. correctAnswer 0-3. Use MS Learn refs.`;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text;

    if (!responseText) {
      throw new Error("AI returned an empty response");
    }

    const question = JSON.parse(responseText);

    if (
      !question.question ||
      !Array.isArray(question.options) ||
      question.options.length !== 4 ||
      typeof question.correctAnswer !== "number"
    ) {
      throw new Error("AI response structure is invalid");
    }

    return Response.json({
      ok: true,
      question,
    });
  } catch (error: unknown) {
    console.error("GENERATE QUESTION ERROR:", error);

    const message =
      error instanceof Error ? error.message : String(error);

    const status =
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      typeof error.status === "number"
        ? error.status
        : 500;

    const isRateLimit = status === 429 || message.includes("429");

    return Response.json(
      {
        ok: false,
        error: isRateLimit
          ? "Too many requests. Please wait a few seconds and try again."
          : "AI generation error or invalid JSON structure",
      },
      { status: isRateLimit ? 429 : 500 }
    );
  }
}