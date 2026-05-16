import { createClient } from '@/lib/supabase-server';
import { THEMES } from '@/lib/themes';
import { countByTheme } from '@/lib/questions';
import FlameStreak from '@/components/FlameStreak';
import KnowledgeScore from '@/components/KnowledgeScore';
import ActivityCalendar from '@/components/ActivityCalendar';
import Link from 'next/link';
import { BookOpen, Gamepad2, ArrowRight, Trophy, Target, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: progress } = await supabase
    .from('user_progress').select('*').eq('user_id', user!.id).maybeSingle();

  const { data: sessions } = await supabase
    .from('study_sessions').select('*').eq('user_id', user!.id)
    .order('date', { ascending: false }).limit(120);

  const { data: answers } = await supabase
    .from('quiz_answers').select('correct, theme').eq('user_id', user!.id);

  const totalAnswered = answers?.length ?? 0;
  const totalCorrect = answers?.filter(a => a.correct).length ?? 0;
  const correctRate = totalAnswered ? (totalCorrect / totalAnswered) * 100 : 0;
  const score = Math.min(100, totalCorrect * 2);
  const streak = progress?.current_streak ?? 0;
  const longest = progress?.longest_streak ?? 0;
  const activeDays = (sessions ?? []).map(s => s.date as string);

  const greet = (() => {
    const h = new Date().getHours();
    if (h < 6) return 'Vous travaillez tard';
    if (h < 12) return 'Bonjour';
    if (h < 18) return 'Bon après-midi';
    return 'Bonsoir';
  })();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-up">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-ink-500">{greet}</p>
        <h1 className="display text-4xl md:text-5xl font-extrabold mt-1 text-navy-900">
          Prêt à réviser ?
        </h1>
        <p className="text-ink-500 mt-2 max-w-2xl">
          DSCG UE1 — Gestion juridique, fiscale et sociale. 4 thèmes, des minijeux pour ancrer les notions, et une série quotidienne à entretenir.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <FlameStreak streak={streak} />
        <KnowledgeScore score={score} totalAnswered={totalAnswered} correctRate={correctRate} />
        <div className="card p-5">
          <p className="text-[11px] uppercase tracking-widest text-ink-500">Records</p>
          <div className="mt-3 space-y-3">
            <Stat icon={<Trophy size={16} className="text-navy-600" />} label="Plus longue série" value={`${longest} j`} />
            <Stat icon={<Target size={16} className="text-navy-600" />} label="Bonnes réponses" value={`${totalCorrect}`} />
            <Stat icon={<Sparkles size={16} className="text-navy-600" />} label="Sessions d'étude" value={`${sessions?.length ?? 0}`} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2">
          <ActivityCalendar activeDays={activeDays} />
        </div>
        <div className="card p-5">
          <p className="text-[11px] uppercase tracking-widest text-ink-500">Continuer</p>
          <p className="display text-xl font-bold mt-1 text-navy-900">Reprendre où vous étiez</p>
          <div className="mt-4 space-y-2">
            {THEMES.slice(0, 3).map(t => (
              <Link key={t.id} href={`/jeux/${t.id}`} className="flex items-center justify-between p-3 rounded-lg border border-ink-200 hover:border-navy-500 hover:bg-sky-50 transition group">
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-navy-900">Thème {t.number}</p>
                  <p className="text-xs text-ink-500 truncate">{t.title}</p>
                </div>
                <ArrowRight size={16} className="text-ink-400 group-hover:text-navy-700 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="display text-2xl font-bold text-navy-900">Les 4 thèmes</h2>
          <p className="text-xs uppercase tracking-widest text-ink-500">DSCG UE1 — Sessions 2025/26</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {THEMES.map(t => {
            const qcount = countByTheme(t.id);
            const totalPages = t.subThemes.reduce((a, s) => a + s.pages, 0);
            return (
              <article key={t.id} className="card p-6 group hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-navy-700">
                    Thème {t.number}
                  </span>
                  <span className="text-[10px] text-ink-400">
                    {totalPages} pages · {qcount} questions
                  </span>
                </div>
                <h3 className="display text-2xl font-bold leading-tight text-navy-900">{t.title}</h3>
                <p className="text-sm text-ink-500 mt-2 leading-relaxed">{t.subtitle}</p>

                <ul className="mt-4 space-y-1">
                  {t.subThemes.slice(0, 3).map(st => (
                    <li key={st.id} className="text-xs text-ink-700 flex items-start gap-2">
                      <span className="text-navy-500 leading-none mt-1">·</span>
                      <span>{st.title}</span>
                    </li>
                  ))}
                  {t.subThemes.length > 3 && (
                    <li className="text-xs text-ink-400 pl-3">+ {t.subThemes.length - 3} autres…</li>
                  )}
                </ul>

                <div className="flex gap-2 mt-5">
                  <Link href={`/cours/${t.id}`} className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 transition">
                    <BookOpen size={14} /> Voir le cours
                  </Link>
                  <Link href={`/jeux/${t.id}`} className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white transition">
                    <Gamepad2 size={14} /> Minijeux
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-xs text-ink-500">{icon} {label}</span>
      <span className="display font-bold text-navy-900">{value}</span>
    </div>
  );
}
