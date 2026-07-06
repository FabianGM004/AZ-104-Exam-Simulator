import { ai } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const questionCount =
      body.questions === 20 || body.questions === 30 ? body.questions : 10;

    const prompt = `Create exactly ${questionCount} AZ-104 exam questions. Return ONLY valid JSON.

Scope: Full AZ-104 Roadmap
Difficulty: ${body.difficulty ?? "Mixed"}

JSON shape:
{
  "questions": [
    {
      "id": "generated-1",
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
  ]
}

Rules:
AZ-104 only.
Scenario-based questions.
Exactly 4 options.
correctAnswer must be 0, 1, 2 or 3.
Distribute correctAnswer values evenly across 0, 1, 2 and 3. Do not make most correct answers the same letter.
Use Microsoft Learn references.
Avoid duplicate topics.
Questions must cover different Azure areas.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
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

    return Response.json({
      ok: true,
      questions: data.questions,
    });
  } catch (error) {
    console.error("GENERATE EXAM ERROR:", error);

    return Response.json(
      {
        ok: false,
        error: "Could not generate exam",
      },
      { status: 500 }
    );
  }
}