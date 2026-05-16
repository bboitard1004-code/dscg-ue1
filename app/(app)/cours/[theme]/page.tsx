import { getTheme, THEMES } from '@/lib/themes';
import { countByTheme, countBySub } from '@/lib/questions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpen, Download, Gamepad2, FileText, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return THEMES.map(t => ({ theme: t.id }));
}

export default function CoursePage({ params }: { params: { theme: string } }) {
  const theme = getTheme(params.theme);
  if (!theme) notFound();
  const totalPages = theme.subThemes.reduce((a, s) => a + s.pages, 0);
  const totalQ = countByTheme(theme.id);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto animate-fade-up">
      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs text-ink-500 hover:text-navy-700 mb-6">
        <ArrowLeft size={12} /> Retour au tableau de bord
      </Link>

      <header className="mb-10 flex items-start justify-between gap-6 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-navy-700">
            Thème {theme.number} · {totalPages} pages · {totalQ} questions
          </p>
          <h1 className="display text-5xl font-extrabold mt-2 leading-tight text-navy-900">{theme.title}</h1>
          <p className="text-ink-500 mt-3 max-w-2xl">{theme.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <a href={theme.pdfFile} target="_blank" className="btn-primary inline-flex items-center gap-2 text-sm">
            <FileText size={14} /> Ouvrir le PDF
          </a>
          <a href={theme.pdfFile} download className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg border border-ink-200 hover:border-navy-500 hover:bg-sky-50 transition text-navy-900">
            <Download size={14} /> Télécharger
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        <Link href={`/jeux/${theme.id}`} className="card p-5 hover:border-navy-500 hover:shadow-md transition group">
          <Gamepad2 size={24} className="text-navy-700" />
          <p className="display text-xl font-bold mt-2 text-navy-900">Tous les minijeux</p>
          <p className="text-xs text-ink-500 mt-1">Mix de questions sur tout le thème.</p>
        </Link>
        <Link href={`/jeux/${theme.id}?mode=qcm`} className="card p-5 hover:border-navy-500 transition">
          <BookOpen size={24} className="text-navy-700" />
          <p className="display text-xl font-bold mt-2 text-navy-900">QCM rapides</p>
          <p className="text-xs text-ink-500 mt-1">Questions à choix multiples avec corrections.</p>
        </Link>
        <Link href={`/jeux/${theme.id}?mode=flashcard`} className="card p-5 hover:border-navy-500 transition">
          <FileText size={24} className="text-navy-700" />
          <p className="display text-xl font-bold mt-2 text-navy-900">Flashcards</p>
          <p className="text-xs text-ink-500 mt-1">Mémorisation active des notions-clés.</p>
        </Link>
      </div>

      <h2 className="display text-2xl font-bold mb-4 text-navy-900">Sous-thèmes &amp; chapitres</h2>
      <div className="space-y-3">
        {theme.subThemes.map((st, i) => {
          const qSub = countBySub(theme.id, st.id);
          return (
            <article key={st.id} className="card p-5">
              <div className="flex items-baseline justify-between mb-3 gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-ink-500">Chapitre {i + 1} · {st.pages} pages · {qSub} questions</p>
                  <h3 className="display text-xl font-bold leading-snug mt-0.5 text-navy-900">{st.title}</h3>
                </div>
                <Link href={`/jeux/${theme.id}?sub=${st.id}`} className="text-xs font-semibold inline-flex items-center gap-1.5 px-3 py-2 rounded-md transition whitespace-nowrap bg-sky-100 hover:bg-navy-700 hover:text-white text-navy-700">
                  <Gamepad2 size={12} /> Jouer
                </Link>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
                {st.chapters.map((ch, j) => (
                  <li key={j} className="text-sm text-ink-700 flex items-start gap-2">
                    <span className="text-ink-400 font-mono text-xs mt-0.5">{i + 1}.{j + 1}</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-sky-50 border border-sky-100">
        <p className="text-sm leading-relaxed text-ink-700">
          <strong className="display font-bold text-navy-900">À propos du cours.</strong> Le PDF complet contient le détail des définitions, principes, jurisprudences et cas pratiques corrigés. Les minijeux portent sur les notions-clés (issues du manuel) et permettent de mémoriser efficacement entre deux lectures.
        </p>
      </div>
    </div>
  );
}
