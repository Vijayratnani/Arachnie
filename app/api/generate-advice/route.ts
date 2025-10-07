import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || prompt.trim() === "") {
      return NextResponse.json(
        { error: "Prompt cannot be empty." },
        { status: 400 }
      );
    }

    // ✅ Initialize Gemini client with secure server-side key
    const genAI = new GoogleGenerativeAI("AIzaSyDDc0MV2YCUU524qUyQnk57ERuevsa19y4");

    // ✅ Primary model (Gemini 1.5 Flash) with fallback
    let model;
    try {
      model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    } catch {
      console.warn("gemini-2.5-flash not available, falling back to gemini-pro");
      model = genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    // ✅ Generate structured immigration guidance
    const result = await model.generateContent([
      `You are Arachnie, an AI-powered immigration consultant. 
Provide structured, concise immigration guidance based on the following user details:\n${prompt}`,
    ]);

    const advice = await result.response.text();

    return NextResponse.json({ advice });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // Friendly responses for common failure cases
    if (error.message?.includes("429")) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again in a moment." },
        { status: 429 }
      );
    }
    if (error.message?.includes("API key not valid")) {
      return NextResponse.json(
        { error: "Invalid API key. Check GEMINI_API_KEY in .env.local." },
        { status: 401 }
      );
    }
    if (error.message?.includes("model") && error.message?.includes("not found")) {
      return NextResponse.json(
        { error: "Requested Gemini model not available for this API version." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate immigration guidance." },
      { status: 500 }
    );
  }
}
