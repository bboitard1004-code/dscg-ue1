'use client';
import { Flame } from 'lucide-react';

export default function FlameStreak({ streak }: { streak: number }) {
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center flame-glow">
          <Flame className="text-orange-500 animate-flame-flicker" size={32} fill="currentColor" />
        </div>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-ink-500">Série en cours</p>
        <p className="display text-3xl font-bold leading-none mt-1 text-navy-900">
          {streak}
          <span className="text-base font-medium text-ink-500 ml-1">jour{streak > 1 ? 's' : ''}</span>
        </p>
        <p className="text-xs text-ink-500 mt-1">
          {streak === 0 ? "Commencez votre série aujourd'hui !" :
           streak < 3 ? "Bien démarré 🚀" :
           streak < 7 ? "Belle constance !" :
           "Vous êtes en feu 🔥"}
        </p>
      </div>
    </div>
  );
}
