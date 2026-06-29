// Supabase Edge Function: suggest-placement
// Given a resource (title/description/type) and the full objective catalog,
// asks the LLM which objectives it best supports and whether it belongs in the
// Library. Returns structured JSON the admin reviews before saving.
//
// Deploy in the learning_hub project. Reuses the OPENROUTER_API_KEY + SUMMARY_MODEL secrets.

const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY");
const MODEL = Deno.env.get("SUMMARY_MODEL") || "deepseek/deepseek-chat";

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
    if (!OPENROUTER_API_KEY) return json({ error: "OPENROUTER_API_KEY not set", objectives: [] });
    const { resource = {}, objectives = [], modules = [] } = await req.json();
    const catalog = (objectives as { id: string; text: string }[]).map(o => `${o.id} :: ${o.text}`).join("\n");

    const prompt =
`You help place a free educational resource into a Grades 6-8 curriculum.

RESOURCE
- Title: ${resource.title || "(none)"}
- Type: ${resource.type || "link"}
- What it covers: ${resource.description || "(not provided — infer from the title)"}
- URL: ${resource.url || "(none)"}

LEARNING OBJECTIVES (each line is "id :: objective text"):
${catalog}

TASK
Pick ONLY the objectives this resource genuinely helps a student achieve — be strict and selective (0 to 5; fewer and more precise is better). Use the exact ids.
If the resource is broad, general-interest or enrichment and does not target specific objectives, return an empty objectives list.
Separately decide whether it also belongs in the general browsable Library; if yes, choose the best module from: ${(modules as string[]).join(", ") || "Science, Math, General Learning"} and a short subject label (e.g. "Biology").

Respond with ONLY valid minified JSON, no markdown fences:
{"objectives":[{"id":"<exact id>","reason":"<one short sentence>"}],"library":{"recommend":<true|false>,"module":"<module>","subject":"<short label>"},"note":"<one short overall sentence>"}`;

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://abhishekbhatewara.github.io/learning_hub/",
        "X-Title": "Learning Hub",
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 700, messages: [{ role: "user", content: prompt }] }),
    });
    const data = await r.json();
    const content = data?.choices?.[0]?.message?.content?.trim() || "";
    if (!content) return json({ error: data?.error?.message || data?.error || `no content (status ${r.status})`, objectives: [] });

    // tolerate accidental ```json fences or surrounding prose
    let parsed: any = null;
    try { parsed = JSON.parse(content); }
    catch {
      const m = content.match(/\{[\s\S]*\}/);
      if (m) { try { parsed = JSON.parse(m[0]); } catch { /* ignore */ } }
    }
    if (!parsed) return json({ error: "could not parse AI response", raw: content, objectives: [] });

    return json({
      objectives: Array.isArray(parsed.objectives) ? parsed.objectives : [],
      library: parsed.library || { recommend: false },
      note: parsed.note || "",
    });
  } catch (e) {
    return json({ error: String(e), objectives: [] });
  }
});
