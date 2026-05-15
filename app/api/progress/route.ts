import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function POST() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const today = new Date().toISOString().slice(0, 10);

  // 1) Marquer le jour comme étudié
  await supabase.from('study_sessions')
    .upsert({ user_id: user.id, date: today }, { onConflict: 'user_id,date' });

  // 2) Calculer la nouvelle série (streak)
  const { data: progress } = await supabase
    .from('user_progress').select('*').eq('user_id', user.id).maybeSingle();

  let streak = 1;
  let longest = 1;

  if (progress?.last_active_date) {
    const last = new Date(progress.last_active_date);
    const todayD = new Date(today);
    const diffDays = Math.round((todayD.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      streak = progress.current_streak || 1;
    } else if (diffDays === 1) {
      streak = (progress.current_streak || 0) + 1;
    } else {
      streak = 1;
    }
    longest = Math.max(progress.longest_streak || 0, streak);
  }

  await supabase.from('user_progress').upsert({
    user_id: user.id,
    current_streak: streak,
    longest_streak: longest,
    last_active_date: today,
  }, { onConflict: 'user_id' });

  return NextResponse.json({ streak, longest });
}
