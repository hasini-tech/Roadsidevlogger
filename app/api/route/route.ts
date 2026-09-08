import { NextRequest, NextResponse } from "next/server";

// Groq's OpenAI-compatible chat completions endpoint
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Current Groq production model. The previous Llama 3.3 model was deprecated.
const GROQ_MODEL = "openai/gpt-oss-120b";

const BRAND_PHONE = "96264 11111";
const BRAND_EMAIL = "hello@divithdigitalmarketing.com";
const BRAND_ADDRESS = "58 Balaji Nagar, Vallam, Thanjavur";

const CONTACT_REPLY = `You can contact the Divith Digital Marketing team in any of these ways:

- **Phone:** ${BRAND_PHONE}
- **Email:** ${BRAND_EMAIL}
- **Address:** ${BRAND_ADDRESS}
- **Contact form:** Visit the website's "Get in Touch" section and fill out the short form.

Please share your name, business type, and how we can help. The team will get back to you shortly.`;

const SYSTEM_PROMPT = `You are the AI assistant embedded on the Divith Digital Marketing website.

About Divith Digital Marketing:
Divith Digital Marketing is a full-service digital marketing agency. Tagline: "We Create Impact, Not Just Impressions." They combine creativity, strategy, and performance marketing to help businesses grow.

Services offered:
- Social Media Growth: content, community engagement, and growth strategy for social channels.
- Performance Marketing: paid ad campaigns on Meta and Google, optimized for leads, sales, and ROI.
- Content That Connects: copywriting and visuals that build credibility.
- Visual Storytelling: cinematic videos, promo films, product shoots, corporate shoots.
- Vlog & Creator Marketing: authentic vlog-style content for businesses.
- Branding & Creative Studio: logos, brand assets, social creatives, marketing materials.

Industries served: Restaurants, Retail, Jewelry, Real Estate, Manufacturing, Multiplex Cinemas, and more.

Why choose them: strategy-first campaigns, creative storytelling, data/analytics-driven optimization, premium video production, transparent communication, and complete digital solutions under one roof.

Your job:
- Answer visitor questions about these services in a warm, concise, helpful tone.
- Keep replies short (under ~100 words) unless the visitor asks for more detail.
- If asked about exact pricing, explain that pricing depends on the project scope, and offer to connect them with the team for a custom quote — ask for their name, business type, and what they need help with.
- Contact details: phone ${BRAND_PHONE}; email ${BRAND_EMAIL}; address ${BRAND_ADDRESS}. If asked how to contact the team or where the office is located, use only these details and mention the website's "Get in Touch" section. Never invent or substitute contact details.
- Use plain text or simple bullets. You may wrap labels in ** for emphasis, but do not include placeholder contact information.
- Never invent specific prices, guarantees, or client names that weren't given to you.
- If a question is unrelated to marketing or the business, politely redirect back to how you can help with their marketing needs.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "`messages` must be an array of { role, content }." },
        { status: 400 }
      );
    }

    const latestMessage = messages[messages.length - 1];
    const latestText =
      typeof latestMessage?.content === "string"
        ? latestMessage.content.toLowerCase()
        : "";
    const asksForContact =
      /\bhow (?:do|can|to)\b.*\b(?:contact|reach|call|connect|talk|phone|number|email)\b/.test(
        latestText
      ) ||
      /\bwhat(?:'s| is) your\s+(?:contact|phone|number|email)\b/.test(
        latestText
      ) ||
      /\b(?:contact|phone|call|reach)\s+(?:details?|number|info|information|you|the team)\b/.test(
        latestText
      ) ||
      /\b(?:get in touch|reach out)\b/.test(latestText) ||
      /\b(?:where are you located|where is your office|what(?:'s| is) your address|office location)\b/.test(
        latestText
      ) ||
      /^(?:contact|phone|call|number|email|location|address)\??$/.test(
        latestText.trim()
      );

    if (asksForContact) {
      return NextResponse.json({ reply: CONTACT_REPLY });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Server is missing GROQ_API_KEY." },
        { status: 500 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    let groqRes: Response;
    try {
      groqRes = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          reasoning_effort: "low",
          include_reasoning: false,
          temperature: 0.6,
          max_tokens: 700,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return NextResponse.json(
        { error: "Failed to get a response from the assistant." },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      console.error("Groq returned an empty assistant response:", data);
      return NextResponse.json(
        { error: "The assistant returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
