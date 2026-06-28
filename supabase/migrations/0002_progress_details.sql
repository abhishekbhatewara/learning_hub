-- Learning Hub — add a per-item quiz breakdown (which questions went wrong)
-- so the parent dashboard can show exactly what to review.
-- Run in the Supabase SQL editor for the learning_hub project.

alter table public.assignment_progress
  add column if not exists details jsonb;
