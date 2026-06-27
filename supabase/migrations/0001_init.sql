-- ============================================================================
-- Learning Hub — Parent/Child assignments backend (Phase 1)
-- Schema + Row-Level Security + Realtime.
-- Run this in the Supabase SQL editor for the `learning_hub` project.
--
-- Auth model: every user (parent OR child) is a Supabase Auth user (email OTP).
-- A parent invites a child by email; the child accepts; then the parent can
-- create assignments and watch progress live (Realtime on assignment_progress).
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

-- One profile row per auth user. role is chosen during onboarding.
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  role       text not null check (role in ('parent','child')),
  full_name  text,
  email      text,
  created_at timestamptz not null default now()
);

-- Parent → child links. A parent invites by email; child accepts to bind child_id.
create table if not exists public.family_links (
  id          uuid primary key default gen_random_uuid(),
  parent_id   uuid not null references auth.users(id) on delete cascade,
  child_id    uuid references auth.users(id) on delete cascade,
  child_email text not null,
  status      text not null default 'pending' check (status in ('pending','accepted','revoked')),
  created_at  timestamptz not null default now(),
  accepted_at timestamptz,
  unique (parent_id, child_email)
);

-- An assignment from a parent to one linked child.
-- items is a JSON array: [{ "s":"science", "t":"g6-cells", "i":0, "mode":"both" }, ...]
-- mode ∈ 'resources' | 'quiz' | 'both'.
create table if not exists public.assignments (
  id         uuid primary key default gen_random_uuid(),
  parent_id  uuid not null references auth.users(id) on delete cascade,
  child_id   uuid not null references auth.users(id) on delete cascade,
  title      text not null,
  note       text,
  due_date   date,
  items      jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists assignments_child_idx  on public.assignments(child_id);
create index if not exists assignments_parent_idx on public.assignments(parent_id);

-- Per-item completion for an assignment (drives the parent's live dashboard).
-- item_key encodes subject|topic|objIndex|kind, e.g. "science|g6-cells|0|quiz".
create table if not exists public.assignment_progress (
  id            uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.assignments(id) on delete cascade,
  child_id      uuid not null references auth.users(id) on delete cascade,
  item_key      text not null,
  status        text not null default 'not_started' check (status in ('not_started','in_progress','done')),
  score         int,
  updated_at    timestamptz not null default now(),
  unique (assignment_id, item_key)
);
create index if not exists progress_assignment_idx on public.assignment_progress(assignment_id);

-- keep updated_at fresh on every change
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;

drop trigger if exists trg_progress_touch on public.assignment_progress;
create trigger trg_progress_touch
  before update on public.assignment_progress
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Row-Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles            enable row level security;
alter table public.family_links        enable row level security;
alter table public.assignments         enable row level security;
alter table public.assignment_progress enable row level security;

-- profiles ------------------------------------------------------------------
drop policy if exists "profiles_select_own"            on public.profiles;
drop policy if exists "profiles_select_linked_children" on public.profiles;
drop policy if exists "profiles_select_linking_parent"  on public.profiles;
drop policy if exists "profiles_insert_own"            on public.profiles;
drop policy if exists "profiles_update_own"            on public.profiles;

create policy "profiles_select_own" on public.profiles
  for select using (id = auth.uid());

create policy "profiles_select_linked_children" on public.profiles
  for select using (
    id in (select child_id from public.family_links
           where parent_id = auth.uid() and status = 'accepted')
  );

create policy "profiles_select_linking_parent" on public.profiles
  for select using (
    id in (select parent_id from public.family_links
           where child_id = auth.uid() and status = 'accepted')
  );

create policy "profiles_insert_own" on public.profiles
  for insert with check (id = auth.uid());

create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- family_links --------------------------------------------------------------
drop policy if exists "links_select_parent" on public.family_links;
drop policy if exists "links_select_child"  on public.family_links;
drop policy if exists "links_insert_parent" on public.family_links;
drop policy if exists "links_update_parent" on public.family_links;
drop policy if exists "links_accept_child"  on public.family_links;
drop policy if exists "links_delete_parent" on public.family_links;

create policy "links_select_parent" on public.family_links
  for select using (parent_id = auth.uid());

-- a child can see invites bound to their uid OR addressed to their email (pre-accept)
create policy "links_select_child" on public.family_links
  for select using (child_id = auth.uid() or lower(child_email) = lower(auth.email()));

create policy "links_insert_parent" on public.family_links
  for insert with check (parent_id = auth.uid());

create policy "links_update_parent" on public.family_links
  for update using (parent_id = auth.uid()) with check (parent_id = auth.uid());

-- a child accepts a pending invite addressed to their email, binding their uid
create policy "links_accept_child" on public.family_links
  for update
  using (lower(child_email) = lower(auth.email()) and status = 'pending')
  with check (child_id = auth.uid() and status = 'accepted');

create policy "links_delete_parent" on public.family_links
  for delete using (parent_id = auth.uid());

-- assignments ---------------------------------------------------------------
drop policy if exists "assign_select" on public.assignments;
drop policy if exists "assign_insert" on public.assignments;
drop policy if exists "assign_update" on public.assignments;
drop policy if exists "assign_delete" on public.assignments;

create policy "assign_select" on public.assignments
  for select using (parent_id = auth.uid() or child_id = auth.uid());

create policy "assign_insert" on public.assignments
  for insert with check (
    parent_id = auth.uid()
    and child_id in (select child_id from public.family_links
                     where parent_id = auth.uid() and status = 'accepted')
  );

create policy "assign_update" on public.assignments
  for update using (parent_id = auth.uid()) with check (parent_id = auth.uid());

create policy "assign_delete" on public.assignments
  for delete using (parent_id = auth.uid());

-- assignment_progress -------------------------------------------------------
drop policy if exists "prog_select" on public.assignment_progress;
drop policy if exists "prog_insert" on public.assignment_progress;
drop policy if exists "prog_update" on public.assignment_progress;

-- child sees their own; parent sees progress for assignments they created
create policy "prog_select" on public.assignment_progress
  for select using (
    child_id = auth.uid()
    or assignment_id in (select id from public.assignments where parent_id = auth.uid())
  );

create policy "prog_insert" on public.assignment_progress
  for insert with check (
    child_id = auth.uid()
    and assignment_id in (select id from public.assignments where child_id = auth.uid())
  );

create policy "prog_update" on public.assignment_progress
  for update using (child_id = auth.uid()) with check (child_id = auth.uid());

-- ---------------------------------------------------------------------------
-- Realtime — parent dashboard subscribes to these
-- ---------------------------------------------------------------------------
do $$
begin
  begin
    alter publication supabase_realtime add table public.assignment_progress;
  exception when duplicate_object then null;
  end;
  begin
    alter publication supabase_realtime add table public.assignments;
  exception when duplicate_object then null;
  end;
end $$;
