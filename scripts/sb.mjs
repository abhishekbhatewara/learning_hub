#!/usr/bin/env node
/* Local Supabase admin helper for the learning_hub project.
 *
 * Reads SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY from ../.env (git-ignored) and
 * runs PostgREST data operations with the service role (bypasses RLS). Used for
 * admin data work Claude can't do through the (org-scoped) MCP connector:
 * inserting/editing/deleting custom_resources, assignments, admins, etc.
 *
 * The service-role key is only read from the local file — it is never printed.
 *
 * Usage:
 *   node scripts/sb.mjs get    "custom_resources?select=id,title&order=created_at.desc"
 *   node scripts/sb.mjs insert custom_resources ./rows.json        # POST an array/object
 *   node scripts/sb.mjs patch  "custom_resources?id=eq.<uuid>" ./patch.json
 *   node scripts/sb.mjs delete "custom_resources?id=eq.<uuid>"
 * The body arg may be a path to a JSON file or an inline JSON string.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(here, "..", ".env");
if (!fs.existsSync(envPath)) {
  console.error("Missing .env — copy .env.example to .env and add the service-role key.");
  process.exit(1);
}
const env = Object.fromEntries(
  fs.readFileSync(envPath, "utf8").split("\n")
    .filter((l) => l.trim() && !l.trim().startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^["']|["']$/g, "")]; })
);
const URL_ = env.SUPABASE_URL, KEY = env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_ || !KEY || KEY.includes("paste-")) { console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env"); process.exit(1); }

const [cmd, target, bodyArg] = process.argv.slice(2);
const METHODS = { get: "GET", insert: "POST", patch: "PATCH", delete: "DELETE" };
const method = METHODS[cmd];
if (!method || !target) { console.error("Usage: node scripts/sb.mjs <get|insert|patch|delete> <table?query> [bodyFileOrJson]"); process.exit(1); }

let body;
if (bodyArg) body = fs.existsSync(bodyArg) ? fs.readFileSync(bodyArg, "utf8") : bodyArg;

const res = await fetch(`${URL_}/rest/v1/${target}`, {
  method,
  headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", Prefer: "return=representation" },
  body,
});
const text = await res.text();
console.log("HTTP", res.status);
console.log(text);
if (!res.ok) process.exit(1);
