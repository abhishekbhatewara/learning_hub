---
name: learning-hub-db
description: Run admin data operations (insert/update/delete/select) against the Learning Hub's Supabase project (learning_hub, ref utlpogmahqmswrffzkjc) using the local service-role key. Use when you need to add/edit/remove custom_resources, assignments, admins, family_links, or query the DB directly — the MCP Supabase connector is scoped to a different org and CANNOT reach this project, so use this instead.
---

# Learning Hub — Supabase admin (local service-role key)

The Supabase MCP connector is scoped to "Rohanbuilders' Org" and **cannot reach** the
`learning_hub` project (it's in AbhishekBhatewara's personal org → "permission denied").
So for any direct DB work on learning_hub, use the local helper instead.

## Setup (one-time, already done)
- `~/ib-science-hub/.env` (git-ignored) holds `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
- The service-role key **bypasses RLS** and is a secret: never commit it, never print it,
  never paste it into chat. `.env` is in `.gitignore`. If it leaks, rotate it in the
  Supabase dashboard (Project Settings → API → service_role → reset).

## Usage
Run PostgREST operations via `scripts/sb.mjs` (uses `~/opt/node/bin/node`):

```bash
cd ~/ib-science-hub
~/opt/node/bin/node scripts/sb.mjs get    "custom_resources?select=id,title&order=created_at.desc"
~/opt/node/bin/node scripts/sb.mjs insert custom_resources ./rows.json   # POST an array or object
~/opt/node/bin/node scripts/sb.mjs patch  "custom_resources?id=eq.<uuid>" '{"title":"New title"}'
~/opt/node/bin/node scripts/sb.mjs delete "custom_resources?id=eq.<uuid>"
```
The body arg is a JSON file path or an inline JSON string. Query syntax is PostgREST
(`?col=eq.val`, `&order=`, `&select=`). The service role bypasses RLS, so `created_by`
may be null and admin-only inserts work.

## Key tables (see supabase/migrations/)
- `custom_resources` — admin-added resources merged into objectives (`targets` jsonb
  `[{s,t,i}]`) and/or the Library (`to_library`, `library_module`, `library_subject`).
  type ∈ video|reading|interactive|podcast|book. `url` is NOT NULL.
- `assignments` (parent_id, child_id, title, items jsonb), `assignment_progress`
  (item_key, status, score, details), `family_links`, `profiles`, `admins`.

Only PostgREST data ops are covered here. Arbitrary DDL / migrations / edge-function
deploys still need the Supabase dashboard (or a management PAT via the Management API).
