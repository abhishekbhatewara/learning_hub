// Supabase Edge Function: concept-summary
// Given a learner's quiz result (objective + the questions they got wrong),
// returns a short, encouraging "concepts to strengthen" summary via OpenRouter.
//
// Deploy in the learning_hub project and set the secret OPENROUTER_API_KEY.
// Optional secret SUMMARY_MODEL (defaults to a small, cheap model).

const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
const MODEL = Deno.env.get("SUMMARY_MODEL") || "anthropic/claude-3.5-haiku";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    if (!OPENROUTER_API_KEY) return json({ summary: "", error: "OPENROUTER_API_KEY not set" });
    const { objective, wrong = [], score, total } = await req.json();

    const wrongList = Array.isArray(wrong) && wrong.length
      ? wrong.map((w: { q: string }) => `- ${w.q}`).join("\n")
      : "(none — they got everything right)";

    const prompt =
`A student in Grades 6–8 just finished a short quiz for this learning objective:
"${objective}"

They scored ${score == null ? "an unknown score" : score + "%"}${total ? ` (${total} auto-graded questions)` : ""}.
Questions they answered incorrectly:
${wrongList}

Write 2–3 short sentences, addressed directly to the student in simple, warm, encouraging language.
Identify the SPECIFIC concept(s) behind the mistakes and what to revise — be concrete, not generic.
If they got everything right, congratulate them and suggest one stretch idea. Do not use headings or lists.`;

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://abhishekbhatewara.github.io/learning_hub/",
        "X-Title": "Learning Hub",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 220,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await r.json();
    const summary = data?.choices?.[0]?.message?.content?.trim() || "";
    // if OpenRouter returned no content, surface why (bad key, no credits, bad model…)
    if (!summary) return json({ summary: "", error: data?.error?.message || data?.error || `no content (status ${r.status})`, status: r.status, model: MODEL });
    return json({ summary });
  } catch (e) {
    return json({ summary: "", error: String(e) });
  }
});
