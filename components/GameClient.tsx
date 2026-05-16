'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ChevronRight, RotateCcw, Sparkles, Lightbulb, Brain, Shuffle } from 'lucide-react';
import { createClient } from '@/lib/supabase-browser';
import type { Theme } from '@/lib/themes';
import type { Question } from '@/lib/questions';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GameClient({
  theme, questions, sub, mode,
}: { theme: Theme; questions: Question[]; sub: string; mode: string }) {

  const [started, setStarted] = useState(false);
  const [shuffled, setShuffled] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    if (started) {
      setShuffled(shuffle(questions).slice(0, Math.min(10, questions.length)));
      setIdx(0); setCorrect(0); setDone(false);
    }
  }, [started, questions]);

  const current = shuffled[idx];

  const recordAnswer = async (isCorrect: boolean) => {
    if (isCorrect) setCorrect(c => c + 1);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const today = new Date().toISOString().slice(0, 10);
        await supabase.from('quiz_answers').insert({
          user_id: user.id, theme: theme.id,
          sub: current?.sub ?? null, kind: current?.kind ?? 'qcm',
          correct: isCorrect,
        });
        await supabase.from('study_sessions').upsert(
          { user_id: user.id, date: today },
          { onConflict: 'user_id,date' }
        );
        await fetch('/api/progress', { method: 'POST' }).catch(() => {});
      }
    } catch {}
  };

  const next = () => {
    if (idx < shuffled.length - 1) setIdx(i => i + 1);
    else setDone(true);
  };

  // ─── Landing screen ──────────────────────────────────────────────
  if (!started) {
    const subTitle = sub === 'all' ? 'Tout le thème' : (theme.subThemes.find(s => s.id === sub)?.title ?? sub);
    const total = questions.length;
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto animate-fade-up">
        <Link href={`/cours/${theme.id}`} className="inline-flex items-center gap-1.5 text-xs text-ink-500 hover:text-navy-700 mb-6">
          <ArrowLeft size={12} /> Retour au cours
        </Link>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-navy-700">
            Thème {theme.number} · Minijeux
          </p>
          <h1 className="display text-5xl font-extrabold mt-2 leading-tight text-navy-900">{theme.title}</h1>
          <p className="text-ink-500 mt-3">{subTitle} · <span className="font-semibold text-navy-700">{total} questions</span> disponibles</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h2 className="display text-2xl font-bold mb-3 text-navy-900">Prêt à jouer ?</h2>
            <p className="text-sm text-ink-500 mb-4">
              {total === 0 ? (
                <>Aucune question pour cette sélection pour l'instant. Choisissez « Tout le thème » ou un autre sous-thème.</>
              ) : (
                <>{Math.min(10, total)} questions tirées au hasard. Une question, une réponse, un retour immédiat avec explication.</>
              )}
            </p>
            <button
              onClick={() => setStarted(true)}
              disabled={total === 0}
              className="btn-accent inline-flex items-center gap-2 disabled:opacity-40"
            >
              <Sparkles size={16} /> Démarrer
            </button>
          </div>

          <div className="card p-6">
            <p className="text-xs uppercase tracking-widest text-ink-500">Filtrer par sous-thème</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterChip themeId={theme.id} current={sub} value="all" label="Tout" />
              {theme.subThemes.map(st => (
                <FilterChip key={st.id} themeId={theme.id} current={sub} value={st.id} label={st.title} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ModeCard themeId={theme.id} current={mode} value="all" sub={sub} icon={<Shuffle size={20} />} label="Mix" desc="Tous types" />
          <ModeCard themeId={theme.id} current={mode} value="qcm" sub={sub} icon={<Brain size={20} />} label="QCM" desc="Choix multiples" />
          <ModeCard themeId={theme.id} current={mode} value="vf" sub={sub} icon={<Check size={20} />} label="Vrai / Faux" desc="Réflexes" />
          <ModeCard themeId={theme.id} current={mode} value="flashcard" sub={sub} icon={<Lightbulb size={20} />} label="Flashcards" desc="Mémoire active" />
        </div>
      </div>
    );
  }

  // ─── Done screen ──────────────────────────────────────────────────
  if (done) {
    const pct = Math.round((correct / shuffled.length) * 100);
    const verdict = pct >= 80 ? 'Excellent 🎓' : pct >= 60 ? 'Bonne base 📘' : 'Encore un effort 💪';
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto animate-fade-up">
        <div className="card p-10 text-center">
          <Sparkles className="mx-auto mb-4 text-navy-700" size={36} />
          <h2 className="display text-4xl font-extrabold text-navy-900">{verdict}</h2>
          <p className="display text-6xl font-extrabold mt-4 text-navy-700">{correct}/{shuffled.length}</p>
          <p className="text-ink-500 mt-2">{pct}% de bonnes réponses · Thème {theme.number}</p>

          <div className="flex gap-3 justify-center mt-8 flex-wrap">
            <button onClick={() => setStarted(false)} className="btn-primary inline-flex items-center gap-2">
              <RotateCcw size={14} /> Retour aux modes
            </button>
            <button onClick={() => {
              setIdx(0); setCorrect(0); setDone(false);
              setShuffled(shuffle(questions).slice(0, Math.min(10, questions.length)));
            }} className="btn-accent inline-flex items-center gap-2">
              <Sparkles size={14} /> Rejouer
            </button>
            <Link href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-navy-700 text-navy-700 text-sm font-medium hover:bg-navy-700 hover:text-white transition">
              Tableau de bord
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Game screen ──────────────────────────────────────────────────
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto animate-fade-up">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => { if (confirm('Quitter la session en cours ?')) setStarted(false); }} className="text-xs text-ink-500 hover:text-navy-700 inline-flex items-center gap-1.5">
          <ArrowLeft size={12} /> Quitter
        </button>
        <div className="text-xs text-ink-500 font-mono">
          Question {idx + 1} / {shuffled.length} · ✓ {correct}
        </div>
      </div>

      <div className="h-1.5 bg-ink-200 rounded-full overflow-hidden mb-8">
        <div className="h-full transition-all duration-500 bg-navy-700" style={{ width: `${((idx + 1) / shuffled.length) * 100}%` }} />
      </div>

      {current && <QuestionCard q={current} onAnswer={recordAnswer} onNext={next} />}
    </div>
  );
}

function FilterChip({ themeId, current, value, label }: any) {
  const active = current === value;
  return (
    <Link href={`/jeux/${themeId}?sub=${value}`} className={`text-xs px-3 py-1.5 rounded-full border transition ${
      active ? 'bg-navy-700 text-white border-navy-700' : 'bg-white border-ink-200 text-ink-700 hover:border-navy-500'
    }`}>{label}</Link>
  );
}

function ModeCard({ themeId, current, value, sub, icon, label, desc }: any) {
  const active = current === value;
  return (
    <Link href={`/jeux/${themeId}?sub=${sub}&mode=${value}`}
      className={`card p-4 hover:shadow-md transition ${active ? 'border-navy-700 bg-sky-50' : ''}`}>
      <span className="block text-navy-700">{icon}</span>
      <p className="display font-bold mt-2 text-navy-900">{label}</p>
      <p className="text-[11px] text-ink-500 mt-0.5">{desc}</p>
    </Link>
  );
}

function QuestionCard({ q, onAnswer, onNext }: { q: Question; onAnswer: (c: boolean) => void; onNext: () => void }) {
  if (q.kind === 'qcm') return <QCMCard q={q} onAnswer={onAnswer} onNext={onNext} />;
  if (q.kind === 'vf') return <VFCard q={q} onAnswer={onAnswer} onNext={onNext} />;
  if (q.kind === 'flashcard') return <FlashCard q={q} onAnswer={onAnswer} onNext={onNext} />;
  if (q.kind === 'assoc') return <AssocCard q={q} onAnswer={onAnswer} onNext={onNext} />;
  return null;
}

// ── QCM ──
function QCMCard({ q, onAnswer, onNext }: any) {
  const [picked, setPicked] = useState<number | null>(null);
  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer(i === q.answer);
  };
  return (
    <div className="card p-7">
      <p className="text-[10px] uppercase tracking-widest text-navy-700 font-bold mb-2">QCM</p>
      <h2 className="display text-2xl font-bold leading-snug mb-6 text-navy-900">{q.question}</h2>
      <div className="space-y-2">
        {q.choices.map((c: string, i: number) => {
          const isAnswer = i === q.answer;
          const isPicked = picked === i;
          const state = picked === null ? 'idle' : isAnswer ? 'correct' : isPicked ? 'wrong' : 'dim';
          const cls =
            state === 'correct' ? 'bg-emerald-50 border-emerald-500' :
            state === 'wrong' ? 'bg-red-50 border-red-500' :
            state === 'dim' ? 'opacity-50' : 'border-ink-200 hover:border-navy-500';
          return (
            <button key={i} onClick={() => choose(i)} disabled={picked !== null}
              className={`w-full text-left p-4 rounded-lg border-2 transition disabled:cursor-default flex items-center gap-3 ${cls}`}
            >
              <span className="w-7 h-7 rounded-full bg-ink-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-navy-900">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm flex-1 text-ink-900">{c}</span>
              {state === 'correct' && <Check className="text-emerald-600" size={18} />}
              {state === 'wrong' && <X className="text-red-600" size={18} />}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 p-4 rounded-lg bg-sky-50 border-l-4 border-navy-700">
          <p className="text-xs uppercase tracking-widest font-bold mb-1 text-navy-700">Explication</p>
          <p className="text-sm text-ink-900">{q.explain}</p>
          <button onClick={onNext} className="btn-primary mt-4 inline-flex items-center gap-2 text-sm">
            Suivant <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ── Vrai / Faux ──
function VFCard({ q, onAnswer, onNext }: any) {
  const [picked, setPicked] = useState<boolean | null>(null);
  const choose = (v: boolean) => {
    if (picked !== null) return;
    setPicked(v);
    onAnswer(v === q.answer);
  };
  return (
    <div className="card p-7">
      <p className="text-[10px] uppercase tracking-widest text-navy-700 font-bold mb-2">Vrai / Faux</p>
      <h2 className="display text-2xl font-bold leading-snug mb-6 text-navy-900">« {q.statement} »</h2>
      <div className="grid grid-cols-2 gap-3">
        {[true, false].map(v => {
          const isAnswer = v === q.answer;
          const isPicked = picked === v;
          const show = picked !== null;
          const cls =
            show && isAnswer ? 'bg-emerald-50 border-emerald-500' :
            show && isPicked ? 'bg-red-50 border-red-500' :
            show ? 'opacity-40' :
            'border-ink-200 hover:border-navy-500';
          return (
            <button key={String(v)} onClick={() => choose(v)} disabled={picked !== null}
              className={`p-5 rounded-xl border-2 transition text-lg font-semibold disabled:cursor-default ${cls} text-navy-900`}
            >
              {v ? '✓ Vrai' : '✗ Faux'}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 p-4 rounded-lg bg-sky-50 border-l-4 border-navy-700">
          <p className="text-xs uppercase tracking-widest font-bold mb-1 text-navy-700">Explication</p>
          <p className="text-sm text-ink-900">{q.explain}</p>
          <button onClick={onNext} className="btn-primary mt-4 inline-flex items-center gap-2 text-sm">
            Suivant <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ── Flashcard ──
function FlashCard({ q, onAnswer, onNext }: any) {
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState(false);
  const rate = (knew: boolean) => { setRated(true); onAnswer(knew); };
  return (
    <div className="card p-7">
      <p className="text-[10px] uppercase tracking-widest text-navy-700 font-bold mb-2">Flashcard</p>
      <div className="min-h-[200px] flex items-center justify-center p-6 rounded-xl my-4 bg-sky-50 border border-sky-100">
        {!flipped ? (
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-widest text-navy-700 mb-2">Question</p>
            <p className="display text-2xl font-bold leading-snug text-navy-900">{q.front}</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-widest text-navy-700 mb-2">Réponse</p>
            <p className="text-base text-ink-900 leading-relaxed whitespace-pre-line">{q.back}</p>
          </div>
        )}
      </div>
      {!flipped ? (
        <button onClick={() => setFlipped(true)} className="btn-primary w-full">
          Voir la réponse
        </button>
      ) : !rated ? (
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => rate(false)} className="p-3 rounded-lg border-2 border-red-200 bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-sm">
            Pas su
          </button>
          <button onClick={() => rate(true)} className="p-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm">
            Je savais
          </button>
        </div>
      ) : (
        <button onClick={onNext} className="btn-primary w-full inline-flex items-center justify-center gap-2">
          Suivant <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}

// ── Association ──
function AssocCard({ q, onAnswer, onNext }: any) {
  const lefts = useMemo(() => q.pairs.map(([l]: any) => l), [q]);
  const [rights] = useState<string[]>(() => shuffle(q.pairs.map(([, r]: any) => r as string)));
  const [picked, setPicked] = useState<{ l?: number; r?: number }>({});
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrongFlash, setWrongFlash] = useState<[number, number] | null>(null);
  const [done, setDone] = useState(false);

  const tryMatch = (l: number, r: number) => {
    const correctRight = q.pairs[l][1];
    if (rights[r] === correctRight) {
      const m = { ...matches, [l]: r };
      setMatches(m); setPicked({});
      if (Object.keys(m).length === q.pairs.length) {
        setDone(true); onAnswer(true);
      }
    } else {
      setWrongFlash([l, r]);
      setTimeout(() => { setWrongFlash(null); setPicked({}); }, 600);
    }
  };

  useEffect(() => {
    if (picked.l !== undefined && picked.r !== undefined) tryMatch(picked.l, picked.r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked]);

  return (
    <div className="card p-7">
      <p className="text-[10px] uppercase tracking-widest text-navy-700 font-bold mb-2">Association</p>
      <h2 className="display text-2xl font-bold leading-snug mb-6 text-navy-900">{q.prompt}</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {lefts.map((l: string, i: number) => {
            const matched = matches[i] !== undefined;
            const isPicked = picked.l === i;
            const isWrong = wrongFlash && wrongFlash[0] === i;
            const cls =
              matched ? 'bg-emerald-50 border-emerald-500 opacity-70' :
              isWrong ? 'bg-red-50 border-red-500' :
              isPicked ? 'border-navy-700 bg-sky-50' :
              'border-ink-200';
            return (
              <button key={i} disabled={matched || done} onClick={() => setPicked({ ...picked, l: i })}
                className={`w-full p-3 rounded-lg border-2 text-left text-sm font-medium transition text-ink-900 ${cls}`}
              >{l}</button>
            );
          })}
        </div>
        <div className="space-y-2">
          {rights.map((r, i) => {
            const matched = Object.values(matches).includes(i);
            const isPicked = picked.r === i;
            const isWrong = wrongFlash && wrongFlash[1] === i;
            const cls =
              matched ? 'bg-emerald-50 border-emerald-500 opacity-70' :
              isWrong ? 'bg-red-50 border-red-500' :
              isPicked ? 'border-navy-700 bg-sky-50' :
              'border-ink-200';
            return (
              <button key={i} disabled={matched || done} onClick={() => setPicked({ ...picked, r: i })}
                className={`w-full p-3 rounded-lg border-2 text-left text-sm transition text-ink-900 ${cls}`}
              >{r}</button>
            );
          })}
        </div>
      </div>
      {done && (
        <div className="mt-5 p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-500">
          <p className="text-xs uppercase tracking-widest font-bold text-emerald-700 mb-1">Bravo !</p>
          <p className="text-sm text-ink-900">Toutes les paires sont correctes.</p>
          <button onClick={onNext} className="btn-primary mt-4 inline-flex items-center gap-2 text-sm">
            Suivant <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
