import type { Question } from './types';
import { THEME_1 } from './questions/theme-1';
import { THEME_2 } from './questions/theme-2';
import { THEME_3 } from './questions/theme-3';
import { THEME_4 } from './questions/theme-4';

export type { Question } from './types';

export const ALL_QUESTIONS: Record<string, Question[]> = {
  'theme-1': THEME_1,
  'theme-2': THEME_2,
  'theme-3': THEME_3,
  'theme-4': THEME_4,
};

export function getQuestions(theme: string, sub?: string): Question[] {
  const pool = ALL_QUESTIONS[theme] || [];
  if (!sub || sub === 'all') return pool;
  return pool.filter(q => q.sub === sub);
}

export function countByTheme(theme: string): number {
  return (ALL_QUESTIONS[theme] || []).length;
}

export function countBySub(theme: string, sub: string): number {
  return getQuestions(theme, sub).length;
}
