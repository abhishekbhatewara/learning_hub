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

function videoId(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
}
// YouTube: title + channel (oEmbed) plus the video's own description + topic tags
// from the watch page. (Direct transcript scraping is blocked by YouTube now —
// caption URLs return empty server-side — so we use the creator's description,
// which for educational videos describes what's taught.)
async function fetchYouTube(url: string): Promise<string> {
  let out = "";
  try {
    const o = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    if (o.ok) { const j = await o.json(); out = `Video title: "${j.title}"${j.author_name ? ` — channel: ${j.author_name}` : ""}`; }
  } catch { /* ignore */ }
  try {
    const id = videoId(url);
    if (id) {
      const c = new AbortController();
      const t = setTimeout(() => c.abort(), 9000);
      const r = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en`, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; LearningHubBot/1.0)", "Accept-Language": "en-US,en;q=0.9" }, signal: c.signal,
      });
      clearTimeout(t);
      const html = await r.text();
      const pickStr = (re: RegExp) => { const m = html.match(re); if (!m) return ""; try { return JSON.parse('"' + m[1] + '"'); } catch { return m[1]; } };
      const desc = pickStr(/"shortDescription":"((?:[^"\\]|\\.)*)"/);
      const kwM = html.match(/"keywords":\[((?:[^\]])*)\]/);
      let kw = "";
      if (kwM) { try { kw = JSON.parse("[" + kwM[1] + "]").join(", "); } catch { kw = kwM[1].replace(/"/g, ""); } }
      if (desc) out += `\nVideo description: ${desc.slice(0, 1500)}`;
      if (kw) out += `\nTopic tags: ${kw.slice(0, 300)}`;
    }
  } catch { /* best-effort */ }
  return out;
}

// Read what the resource is actually about, server-side (no browser CORS limits).
async function fetchContent(url: string): Promise<string> {
  if (!url) return "";
  try {
    if (/youtube\.com|youtu\.be/i.test(url)) return await fetchYouTube(url);
    const c = new AbortController();
    const t = setTimeout(() => c.abort(), 8000);
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LearningHubBot/1.0)", "Accept": "text/html,*/*" },
      redirect: "follow", signal: c.signal,
    });
    clearTimeout(t);
    const ct = r.headers.get("content-type") || "";
    if (!r.ok || !/html|text/i.test(ct)) return "";
    const html = (await r.text()).slice(0, 200000);
    const pick = (re: RegExp) => { const m = html.match(re); return m ? m[1].replace(/\s+/g, " ").trim() : ""; };
    const title = pick(/<title[^>]*>([\s\S]{1,220}?)<\/title>/i);
    const ogTitle = pick(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']{1,220})["']/i);
    const desc = pick(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{1,500})["']/i)
      || pick(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']{1,500})["']/i);
    const body = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
    return [
      title && `Title: ${title}`,
      ogTitle && ogTitle !== title && `Heading: ${ogTitle}`,
      desc && `Description: ${desc}`,
      body && `Page text: ${body.slice(0, 1500)}`,
    ].filter(Boolean).join("\n");
  } catch { return ""; }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    if (!OPENROUTER_API_KEY) return json({ error: "OPENROUTER_API_KEY not set", objectives: [] });
    const { resource = {}, objectives = [], modules = [] } = await req.json();
    const catalog = (objectives as { id: string; text: string }[]).map(o => `${o.id} :: ${o.text}`).join("\n");
    const fetched = await fetchContent(resource.url || "");

    const prompt =
`You help place a free educational resource into a Grades 6-8 curriculum.

RESOURCE
- Title: ${resource.title || "(none)"}
- Type: ${resource.type || "link"}
- Admin's note: ${resource.description || "(none)"}
- URL: ${resource.url || "(none)"}
${fetched ? `\nCONTENT READ FROM THE RESOURCE (use this as the main signal for what it teaches):\n${fetched}\n` : ""}
LEARNING OBJECTIVES (each line is "id :: objective text"):
${catalog}

TASK
1. Suggest clean, student-facing metadata for this resource:
   - "title": a concise title (max ~12 words; prefer the real title of the video/page)
   - "provider": the creator or source (e.g. "Khan Academy", "TED-Ed", the YouTube channel name, or the website name)
   - "description": ONE short sentence describing what it covers
2. Pick ONLY the objectives this resource genuinely helps a student achieve — be strict and selective (0 to 5; fewer and more precise is better). Use the exact ids.
   If the resource is broad, general-interest or enrichment and does not target specific objectives, return an empty objectives list.
3. Decide whether it also belongs in the general browsable Library; if yes, choose the best module from: ${(modules as string[]).join(", ") || "Science, Math, General Learning"} and a short subject label (e.g. "Biology").

Respond with ONLY valid minified JSON, no markdown fences:
{"title":"<title>","provider":"<provider>","description":"<one sentence>","objectives":[{"id":"<exact id>","reason":"<one short sentence>"}],"library":{"recommend":<true|false>,"module":"<module>","subject":"<short label>"},"note":"<one short overall sentence>"}`;

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
      title: parsed.title || "",
      provider: parsed.provider || "",
      description: parsed.description || "",
      objectives: Array.isArray(parsed.objectives) ? parsed.objectives : [],
      library: parsed.library || { recommend: false },
      note: parsed.note || "",
    });
  } catch (e) {
    return json({ error: String(e), objectives: [] });
  }
});
