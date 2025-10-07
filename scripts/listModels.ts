// Run with:  npx tsx scripts/listModels.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// Node 18+ has fetch built-in, so no import needed.
async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ Missing GEMINI_API_KEY in .env.local");
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      console.error("❌ API error:", data);
      return;
    }

    console.log("✅ Available Gemini Models:");
    data.models.forEach((m: any) => console.log(`- ${m.name}`));
  } catch (error: any) {
    console.error("❌ Error listing models:", error.message || error);
  }
}

// ✅ Wrap everything in a function call (no top-level await)
listModels();
