import { NextResponse, NextRequest } from "next/server";
import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

interface AdviceRequest {
  prompt: string;
}

interface AdviceResponse {
  advice?: string;
  error?: string;
}

/**
 * POST /api/generate-advice
 * Generates structured immigration guidance using Google Gemini API.
 */
export async function POST(req: NextRequest): Promise<NextResponse<AdviceResponse>> {
  try {
    const body: AdviceRequest = await req.json();

    if (!body.prompt || body.prompt.trim() === "") {
      return NextResponse.json(
        { error: "Prompt cannot be empty." },
        { status: 400 }
      );
    }

    // ✅ Use environment variable for API key
    const apiKey = "AIzaSyDDc0MV2YCUU524qUyQnk57ERuevsa19y4";
    if (!apiKey) {
      console.error("❌ Missing GEMINI_API_KEY in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error: API key not found." },
        { status: 500 }
      );
    }

    // ✅ Initialize Gemini client
    const genAI = new GoogleGenerativeAI(apiKey);

    // ✅ Load preferred model with safe fallback
    let model: GenerativeModel;
    try {
      model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    } catch {
      console.warn("⚠️ Falling back to gemini-pro due to unavailable primary model.");
      model = genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    // ✅ Generate structured immigration guidance
    const result = await model.generateContent([
      `You are Arachnie, an AI-powered immigration consultant.
Provide structured, concise immigration guidance based on the following user details:\n${body.prompt}`,
    ]);

    const advice = result.response?.text?.() ?? "No advice generated.";

    return NextResponse.json({ advice });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);

    // Graceful error recovery
    if (error instanceof Error) {
      const message = error.message;

      if (message.includes("429")) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again in a moment." },
          { status: 429 }
        );
      }

      if (message.includes("API key not valid")) {
        return NextResponse.json(
          { error: "Invalid API key. Check GEMINI_API_KEY in .env.local." },
          { status: 401 }
        );
      }

      if (message.includes("model") && message.includes("not found")) {
        return NextResponse.json(
          { error: "Requested Gemini model not available for this API version." },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to generate immigration guidance." },
      { status: 500 }
    );
  }
}
