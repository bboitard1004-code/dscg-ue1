-- ╔══════════════════════════════════════════════════════════════════╗
-- ║ Schéma Supabase — DSCG UE1                                        ║
-- ║ Exécuter ce SQL dans l'onglet "SQL Editor" de votre projet         ║
-- ╚══════════════════════════════════════════════════════════════════╝

-- 1. Sessions d'étude (un enregistrement par jour étudié)
create table if not exists public.study_sessions (
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  created_at timestamptz default now(),
  primary key (user_id, date)
);

-- 2. Progression globale (streak)
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_active_date date,
  updated_at timestamptz default now()
);

-- 3. Réponses aux questions
create table if not exists public.quiz_answers (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  theme text not null,
  sub text,
  kind text not null,
  correct boolean not null,
  created_at timestamptz default now()
);

create index if not exists quiz_answers_user_idx on public.quiz_answers(user_id);
create index if not exists quiz_answers_theme_idx on public.quiz_answers(theme);

-- ── Row Level Security ──────────────────────────────────────────────
alter table public.study_sessions enable row level security;
alter table public.user_progress enable row level security;
alter table public.quiz_answers enable row level security;

-- study_sessions : un utilisateur n'accède qu'à ses propres lignes
drop policy if exists "own sessions" on public.study_sessions;
create policy "own sessions" on public.study_sessions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- user_progress
drop policy if exists "own progress" on public.user_progress;
create policy "own progress" on public.user_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- quiz_answers
drop policy if exists "own answers" on public.quiz_answers;
create policy "own answers" on public.quiz_answers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
