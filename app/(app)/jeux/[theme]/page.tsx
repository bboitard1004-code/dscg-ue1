import { getTheme, THEMES } from '@/lib/themes';
import { getQuestions } from '@/lib/questions';
import { notFound } from 'next/navigation';
import GameClient from '@/components/GameClient';

export async function generateStaticParams() {
  return THEMES.map(t => ({ theme: t.id }));
}

export default function JeuxPage({
  params, searchParams
}: {
  params: { theme: string };
  searchParams: { sub?: string; mode?: string };
}) {
  const theme = getTheme(params.theme);
  if (!theme) notFound();

  const sub = searchParams.sub || 'all';
  const mode = searchParams.mode || 'all';
  const pool = getQuestions(params.theme, sub);

  let filtered = pool;
  if (mode === 'qcm') filtered = pool.filter(q => q.kind === 'qcm');
  if (mode === 'flashcard') filtered = pool.filter(q => q.kind === 'flashcard');
  if (mode === 'vf') filtered = pool.filter(q => q.kind === 'vf');
  if (mode === 'assoc') filtered = pool.filter(q => q.kind === 'assoc');

  return (
    <GameClient theme={theme} questions={filtered} sub={sub} mode={mode} />
  );
}
