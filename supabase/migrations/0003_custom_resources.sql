-- Learning Hub — admin-added resources, live for everyone.
-- Run in the Supabase SQL editor for the learning_hub project.

-- who is allowed to add public resources
create table if not exists public.admins (
  email text primary key
);
insert into public.admins (email) values ('abhishekbhatewara@gmail.com')
  on conflict (email) do nothing;

-- resources added by an admin, merged into objectives and/or the Library
create table if not exists public.custom_resources (
  id              uuid primary key default gen_random_uuid(),
  created_by      uuid references auth.users(id) on delete set null,
  type            text not null check (type in ('video','reading','interactive','podcast','book')),
  title           text not null,
  provider        text,
  url             text not null,
  note            text,
  author          text,
  chapter         text,
  targets         jsonb not null default '[]'::jsonb,  -- [{ "s","t","i" }]
  to_library      boolean not null default false,
  library_module  text,
  library_subject text,
  created_at      timestamptz not null default now()
);

alter table public.admins           enable row level security;
alter table public.custom_resources enable row level security;

-- admins list: any signed-in user can read it (to gate the admin UI); no client writes
drop policy if exists "admins_select_auth" on public.admins;
create policy "admins_select_auth" on public.admins
  for select using (auth.uid() is not null);

-- custom resources: world-readable (so every visitor sees them); only admins write
drop policy if exists "cr_select_all"    on public.custom_resources;
drop policy if exists "cr_insert_admin"  on public.custom_resources;
drop policy if exists "cr_update_admin"  on public.custom_resources;
drop policy if exists "cr_delete_admin"  on public.custom_resources;

create policy "cr_select_all" on public.custom_resources
  for select using (true);

create policy "cr_insert_admin" on public.custom_resources
  for insert with check (auth.email() in (select email from public.admins));

create policy "cr_update_admin" on public.custom_resources
  for update using (auth.email() in (select email from public.admins));

create policy "cr_delete_admin" on public.custom_resources
  for delete using (auth.email() in (select email from public.admins));
