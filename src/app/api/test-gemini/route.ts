import { ai } from "@/lib/gemini";

export async function GET() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: "Reply only with: Gemini connected",
    });

    return Response.json({
      ok: true,
      message: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        ok: false,
        error: "Gemini connection failed",
      },
      { status: 500 }
    );
  }
}